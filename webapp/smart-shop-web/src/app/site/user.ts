 export interface User
{
   userId:string,
   firstName:string,
   lastName:string,
   age:number,
   gender:boolean,
   contact:number,
   password:string,
   status? :string,
   secretQuestion1: string,
   secretQuestion2: string,
   secretQuestion3: string,
   secretAnswer1: string,
   secretAnswer2: string,
   secretAnswer3: string,
   role?: Role
}
export interface Role {
   roleId: string;
   name: string
}



