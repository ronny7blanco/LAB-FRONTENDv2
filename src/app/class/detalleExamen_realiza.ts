import { TipoExamen } from './tipo_examen';
import { Personas } from './person';

export class detalleExamenRealiza {
    idDetalleExamenRealizado: number;
    idExamenRealizado: number;
    fecha: Date;
    idDetalleTipoExamen: number;
    descripcion: string;
    idTipoExamen: TipoExamen;
    nombreExamen: TipoExamen;
    idPersona: Personas;
    nombre: Personas;
    active: boolean;
}