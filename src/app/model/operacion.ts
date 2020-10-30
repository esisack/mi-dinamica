import { TipoOperacion } from "./tipo-operacion";
import { Entidad } from "./entidad";
import { MetodoPago } from "./metodo-pago";

export class Operacion {
    operacionId: number;
    operacionFecha: Date;
    tipoOperacion: TipoOperacion;
    entidadOrigen: Entidad;
    entidadDestino: Entidad;
    metodoPago: MetodoPago;
    descripcion: string;
    monto: number;
    saldo: number;
    activo: string;
}
