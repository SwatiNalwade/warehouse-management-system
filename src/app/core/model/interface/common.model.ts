export interface API_RESPONSE{
  result: boolean ;
  message: string ;
  data : any ;
}

export interface ILoginEmployee {
  id: number
  name: string
  userName: string
  role: string
  warehouseAssignedId: number
  warehouseName: string
}
