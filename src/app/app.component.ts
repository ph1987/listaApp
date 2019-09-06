import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
declare var require: any;
declare var eventsJsonList: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'lista rock';
  public events = [];
  //today = (new Date()).toISOString().split('.')[0];
  today = (new Date()).toISOString().split('.')[0].replace('T',' ');
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    console.log(this.today);
    this._eventService.getEvents().subscribe(data => this.events = data);
    for (let entry of this.events) {
      console.log(entry);
    }
  }
}
