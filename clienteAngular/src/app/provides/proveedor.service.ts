import { Injectable } from '@angular/core';



//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private URL: string = 'https://landing-a5050-default-rtdb.firebaseio.com/Collection.json';
  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}
