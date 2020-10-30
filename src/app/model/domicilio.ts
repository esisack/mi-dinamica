import { Entidad } from "./entidad";

export class Domicilio {
    domicilioId: number;
    domicilio: string;
    ciudad: string;
    codigoPostal: string;
    latitud: string;
    longitud: string;
    entidad: Entidad;
}
