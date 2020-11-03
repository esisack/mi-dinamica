import { TipoEntidad } from "./tipo-entidad";
import { Rubro } from "./rubro";
import { Zona } from "./zona";

export class Entidad {
    entidadId: number;
    entidadCodigo: string;
    documento: number;
    nombre: string;
    apellido: string;
    billetera: number;
    pendienteAcreditacion: number;
    prestamoDisponible: number;
    creditoAdeudado: number;
    telefono: number;
    celular: number;
    tipoEntidad: TipoEntidad;
    rubro: Rubro;
    zona: Zona;
    logo: string;

}
