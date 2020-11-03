import { Entidad } from './entidad';
import { Role } from "./role";

export class User {
    userId: number;
    userName: string;
    firstName: string;
    lastName: string;
    document: string;
    mobile: number;
    email: string;
    role: Role;
    password: string;
    activo: string;
    entidad: Entidad;
}
