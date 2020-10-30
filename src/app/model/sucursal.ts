import { Entidad } from "./entidad";

export class Sucursal {
    sucursalId: number;
    sucursalNombre: string;
    domicilio: string;
    ciudad: string;
    codigoPostal: string;
    latitud: string;
    longitud: string;
    entidad: Entidad;
}
