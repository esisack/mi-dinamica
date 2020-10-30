import { Entidad } from "./entidad";

export class Prestamo {
    prestamoId: number;
    prestamoFecha: Date;
    entidad: Entidad;
    entidadDestino: Entidad;
    descripcion: number;
    monto: number;
    saldo: number;
    mora: number;
    activo: string;
}
