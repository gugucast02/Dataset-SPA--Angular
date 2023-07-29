import { Component } from '@angular/core';
import { ProveedorService } from './../../provides/proveedor.service';
import { Root2 } from './../../interfaces/lector';

@Component({
  selector: 'app-calltoaction',
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CalltoactionComponent {
  public data: Root2[] = [];
  public datos: Root2[] = [];

  constructor(private dataProvider: ProveedorService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Root2[]).slice(0, 100);
    });
  }
}


