import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Weather';
  weather: any = []
  converttemperature:number = 0 ;
  constructor(private weatherservice: WeatherService) {

  }
  taskvalue = {
    city: '',
  }


  ngOnInit() {
    console.log(this.weather)
        // console.log(this.weather.temp)

  }
  convertion(converttemperature:any) {
    return (this.weather.main.temp - 273).toFixed(2)
   }
  //  console.log(temp);
   
  

  onSubmit(form: NgForm): void {
    this.taskvalue.city = form.value.city


    this.weatherservice.getweather(this.taskvalue.city).subscribe((data) => {
      this.weather = data
      console.log(data);
      console.log(this.weather.main.temp);

      

  


    })
        

      }
  }

