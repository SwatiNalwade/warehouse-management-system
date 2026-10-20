export interface API_RESPONSE<T =any>{
  result: boolean ;
  message: string ;
  data : T ;
}

export interface ILoginEmployee {
  id: number
  name: string
  userName: string
  role: string
  warehouseAssignedId: number
  warehouseName: string
}
