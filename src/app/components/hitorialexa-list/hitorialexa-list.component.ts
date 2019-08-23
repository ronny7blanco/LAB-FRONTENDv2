import { Component, OnInit } from '@angular/core';
import { HistorialExaService } from '../../services/historialexa/historial-exa.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { detalleExamenRealiza } from '../../class/detalleExamen_realiza';

@Component({
  selector: 'app-hitorialexa-list',
  templateUrl: './hitorialexa-list.component.html',
  styleUrls: ['./hitorialexa-list.component.css']
})
export class HitorialexaListComponent implements OnInit {
  
  historiales: Observable<detalleExamenRealiza[]>

  constructor(private historialexaService: HistorialExaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.historiales = this.historialexaService.getHistorialList()
  }

  deleteDetalleExa(id: number) {
    this.historialexaService.deleteHistorial(id) 
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
