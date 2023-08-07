import { Component } from '@angular/core';
import { ProveedorService } from '../../provides/proveedor.service';
import { Root2 } from '../../interfaces/lector';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public data1: Root2[] = [];
  constructor(private dataProvider: ProveedorService) {}
  public filteredData: Root2[] = []; // Creamos una nueva variable para almacenar el resultado filtrado
	public country: string = 'switzerland';


  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data1 = (response as Root2[]).slice(0,5);
    });
  }


  onImageClick(pais: string) {
    this.country = pais;
    this.dataProvider.getResponse().subscribe((response) => {
      this.data1 = (response as Root2[]).filter((element) => {
        return element.country_name === pais;
      }).slice(0, 10); // Realizar un slice para obtener los primeros 10 elementos después de filtrar por el país
    });
  }
}  