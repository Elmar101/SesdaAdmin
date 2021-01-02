import { SysObject } from './sys-object';

export interface Profile extends SysObject {
   name?: string;
   type?: number;
   index?: string;
   folderHome?: string;
}
