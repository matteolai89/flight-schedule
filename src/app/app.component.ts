import { IFlight } from 'src/app/models/flight.interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public data: IFlight[] = [];
  list: any;
  row: any;
  public instagram = 'https://www.instagram.com/matteolai89/';
  public linkedin = 'https://www.linkedin.com/in/matteolaidev/';
  constructor(private service: DataService) {}

  ngOnInit() {
    this.getData();
  }

  // I used this method to transform the csv and push it into data array

  getData() {
    this.service.getFlights().subscribe((d) => {
      this.list = d.split('\n');
      console.log(this.list);
      for (let index = 1; index < this.list.length - 1; index++) {
        this.row = this.list[index].split(',');
        console.log(this.row);
        this.data.push(
          new IFlight(
            parseInt(this.row[0], 10),
            this.row[1],
            this.row[2],
            this.row[3],
            this.row[4].trim()
          )
        );
        console.log(this.data);
      }
    });
  }
}
