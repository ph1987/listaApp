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
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(data => this.events = data);
      
    console.log(this.events);
  }
}
