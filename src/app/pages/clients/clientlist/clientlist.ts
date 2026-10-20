import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientService } from '../../../core/services/client-service';
import { ClientModel } from '../../../core/model/class/clientModel';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  imports: [RouterLink],
  selector: 'app-clientlist',
  styleUrl: './clientlist.css',
  templateUrl: './clientlist.html',
})
export class Clientlist implements OnInit,OnDestroy{

  clientListData : WritableSignal<ClientModel[]> = signal<ClientModel[]>([])
  clientSer = inject(ClientService)

  isCardView: boolean = false;
  subScription! : Subscription;

  
  ngOnInit(){
    this.getAllClients();
  }


  getAllClients(){
    this.subScription = this.clientSer.getAllClients().subscribe({
      next:(res:any)=>{

        this.clientListData.set(res.data);
        console.log(res);
      },
      error:(err:any)=>{
        alert(err.message)
      }
    })
  }

  onDeleteClient(id:number){

    const isDelete = confirm("Are you sure you want to delete this client ?");
    if(isDelete){
      this.clientSer.deleteClient(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.getAllClients();
        },
        error:(err:any)=>{
          alert(err.message)
        }
      })
    }
  }
  ngOnDestroy(){
    this.subScription.unsubscribe();
  }
}
