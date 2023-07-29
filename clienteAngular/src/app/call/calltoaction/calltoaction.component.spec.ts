import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorService} from 'src/app/provides/proveedor.service';

import { CalltoactionComponent } from './calltoaction.component';

describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({

      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ ProveedorService ]
    });

    TestBed.configureTestingModule({
      declarations: [CalltoactionComponent]
    });
    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });   

  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      

      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();

    });
  });
  
  });
  describe('SoloHTMLComponent', () => {

    //Valide la existencia de un elemento <nav> en la plantilla html del elemento

    it('nav element', ()=> {
        const headerElement: HTMLElement = fixture.nativeElement;
        const nav = headerElement.querySelector('nav')!;
        expect(nav).toBeTruthy();
      })

    //Valide la NO existencia de un elemento <p> en la plantilla html del elemento

    it('No p element', ()=> {
        const headerElement: HTMLElement = fixture.nativeElement;
        const nav = headerElement.querySelector('p')!;
        expect(nav).toBeFalsy();
    })

});	

