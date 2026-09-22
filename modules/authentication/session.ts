export type SessionUser={id:string;name:string;email:string;role:'admin'|'member'};
const DEMO_USER:SessionUser={id:'usr_alex',name:'Alex Rivera',email:'alex@northstar.io',role:'admin'};
export async function getSession():Promise<SessionUser>{return DEMO_USER}
export function canManageUsers(user:SessionUser){return user.role==='admin'}
