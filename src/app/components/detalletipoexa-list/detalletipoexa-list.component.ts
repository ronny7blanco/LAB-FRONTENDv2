import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as jsPDF from 'jspdf';
import { Router } from '@angular/router';
import { DetalletipoexaService } from '../../services/detalletipoExamen/detalletipoexa.service';
import { DetalleTipoExamen } from '../../class/detalle_tipoExamen';
import { Personas } from '../../class/person';
import { TipoExamen } from '../../class/tipo_examen';

@Component({
  selector: 'app-detalletipoexa-list',
  templateUrl: './detalletipoexa-list.component.html',
  styleUrls: ['./detalletipoexa-list.component.css']
})
export class DetalletipoexaListComponent implements OnInit {
  detalles: Observable<DetalleTipoExamen[]>
  persona: Personas=new Personas();
  nombre: string;
  tipo_examen: TipoExamen = new TipoExamen();

  constructor(private detalleExaService: DetalletipoexaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.detalles = this.detalleExaService.getDetalleExaList();
  }

  deleteDetalleExa(id: number) {
    this.detalleExaService.deleteDetalleExa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  imprimirLista(){
    const doc = new jsPDF;

    doc.fromHTML(document.getElementById('detallesExa'), 10, 10);
    doc.save('Detalle Examenes');
  }

}
