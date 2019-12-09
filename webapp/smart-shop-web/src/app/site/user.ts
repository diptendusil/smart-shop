 export interface User
{
   userId:string,
   firstName:string,
   lastName:string,
   age:number,
   gender:boolean,
   contact:number,
   password?:string,
   status? :string,
   secretQuestion1: string,
   secretQuestion2: string,
   secretQuestion3: string,
   secretAnswer1: string,
   secretAnswer2: string,
   secretAnswer3: string,
   role?: Role
}
export enum RoleName{
   ROLE_USER = 'ROLE_USER',
   ROLE_MANAGER = 'ROLE_MANAGER',
   ROLE_ADMIN = 'ROLE_ADMIN',
   ROLE_SUPER_USER = 'ROLE_SUPER_USER'
}
export interface Role {
   roleId: string;
   name: RoleName
}



