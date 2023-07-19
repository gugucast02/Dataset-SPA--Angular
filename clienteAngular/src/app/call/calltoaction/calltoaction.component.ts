import { Component } from '@angular/core';

//Importación de la interfaz
//Importación del servicio
import { user } from './../../interfaces/lector';
import { ProveedorService } from './../../provides/proveedor.service';


@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  constructor(private dataProvider: ProveedorService) { }
      public data : user[] = [];


      ngOnInit() {
        this.dataProvider.getResponse().subscribe((response) => { 
          this.data = (response as user[]); 
        })
      }

}
