import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private URL: string = 'https://matchsoccer-9bccb-default-rtdb.firebaseio.com/collection.json';

  getResponse() {
    return this.http.get(this.URL);
}
  constructor(private http:HttpClient) { }

}
