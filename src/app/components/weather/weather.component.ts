import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    constructor(public http: HttpClient) { }

    ngOnInit(): void {
        this.loaded = false;
    }

    public cityList: any[] = [
        {
            name: 'Toronto',
            url: 'toronto'
        },
        {
            name: 'Ottawa',
            url: 'ottawa'
        },
        {
            name: 'Hamilton, Ontario',
            url: 'hamilton+ontario'
        },
        {
            name: 'Region of Waterloo',
            url: 'kitchener'
        },
        {
            name: 'London, Ontario',
            url: 'london+ontario'
        }, 
        {
            name: 'Greater Sudbury',
            url: 'sudbury'
        },
        {
            name: 'Kingston, Ontario',
            url: 'kingston+ontario'
        }
    ]
    public cityUrl: string = '';
    public weatherCondition: any = {
        location: '',
        condition: '',
        temp: '',
        icon: '',
        humidity: '',
        feelsLike: ''
    }
    public loaded: boolean = false;
    public time: string = '';

    onChange() {
        const url = `http://api.weatherapi.com/v1/current.json?key=95018cdcc87f405db77181856211901&q=${this.cityUrl}&aqi=no`
        this.http.get(url).subscribe((res: any) => {
            this.weatherCondition.location = `${res.location.name}, ${res.location.region}, ${res.location.country}`;
            this.weatherCondition.condition = res.current.condition.text;
            this.weatherCondition.temp = res.current.temp_c;
            this.weatherCondition.icon = res.current.condition.icon;
            this.weatherCondition.humidity = res.current.humidity;
            this.weatherCondition.feelsLike = res.current.feelslike_c;
            this.time = res.location.localtime
            this.loaded = true;
            console.log(this.weatherCondition);
        })
    }
}
