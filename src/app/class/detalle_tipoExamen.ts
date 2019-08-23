import { TipoExamen } from './tipo_examen';
import { Personas } from './person';

export class DetalleTipoExamen {
    idDetalleTipoExamen: number;
    campoExamen: string;
    descripcion: string;
    requiereValorNormal: string;
    valorNormal: string;
    active: boolean;

    nombreExamen: TipoExamen;

    nombre: Personas;
}