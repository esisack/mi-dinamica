import { Entidad } from "./entidad";

export class Cuenta {
    cuentaId: number;
    cuentaTipo: string;
    cuentaBanco: string;
    cbu: string;
    alias: string;
    cuit: number;
    titular: string;
    descripcion: string;
    cd: string;
    entidad: Entidad;
}
