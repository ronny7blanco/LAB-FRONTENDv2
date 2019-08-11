import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DetalletipoexaService } from '../../services/detalletipoExamen/detalletipoexa.service';
import { DetalleTipoExamen } from '../../class/detalle_tipoExamen';

@Component({
  selector: 'app-detalletipoexa-list',
  templateUrl: './detalletipoexa-list.component.html',
  styleUrls: ['./detalletipoexa-list.component.css']
})
export class DetalletipoexaListComponent implements OnInit {
  detalles: Observable<DetalleTipoExamen[]>

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

}
