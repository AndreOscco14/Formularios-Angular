import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient
  ) { }

    getPaises(){
      return this.http.get('https://restcountries.com/v2/all')
      .pipe(
        map(( resp:any ) => {
          return resp.map ( (pais: { name: any; alpha3Code: any; }) => ({ nombre: pais.name, codigo: pais.alpha3Code}) 
            )
        })
      )
  }

}
