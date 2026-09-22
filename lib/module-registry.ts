import type {ModuleId} from './module-contract';
export type ModuleManifest={id:ModuleId;displayName:string;route:string;version:string;requiredRole:'admin'|'member'};
export const moduleRegistry:ModuleManifest[]=[
  {id:'dashboard',displayName:'Overview',route:'/dashboard',version:'1.0.0',requiredRole:'member'},
  {id:'users',displayName:'People',route:'/users',version:'1.0.0',requiredRole:'admin'},
  {id:'analytics',displayName:'Analytics',route:'/analytics',version:'1.0.0',requiredRole:'member'},
  {id:'notifications',displayName:'Notifications',route:'/notifications',version:'1.0.0',requiredRole:'member'},
];
