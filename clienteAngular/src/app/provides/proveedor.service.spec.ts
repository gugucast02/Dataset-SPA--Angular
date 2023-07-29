import { TestBed } from '@angular/core/testing';

import { ProveedorService } from './proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { user} from '../interfaces/lector';


  describe('ProveedorService', () => {

    //Cree un objeto del tipo del servicio
    let service: ProveedorService;
	  
    beforeEach(() => {
      TestBed.configureTestingModule({

        //Registre el módulo de petición http
        imports: [ HttpClientModule ],

        //Registre el servicio como proveedor de datos
        providers: [ ProveedorService ]
      });


      //Instancie el servicio
      service = TestBed.inject(ProveedorService);
    });
     // La función done se encarga de esperar por completar el requerimiento
     it('ngOnInit should return value from observable', (done: DoneFn) => {
    	//Invoque el método con la petición asincrónica
      service.getResponse().subscribe(data => {
	      
        // Valide que la respuesta sea mayor que 0
        expect((data as user[]).length).toBeGreaterThan(0)
	      
        // Que espere hasta que llegue la respuesta 
        done();
      });
    });


  });
