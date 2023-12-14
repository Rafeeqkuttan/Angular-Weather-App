import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  inputval =''
  apik = "3045dd712ffe6e702e3245525ac7fa38"



  constructor(private http: HttpClient) { }

  // 
  getweather(city: any): Observable<any[]> {

    return this.http.get<any[]>('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.apik)

  }
}
