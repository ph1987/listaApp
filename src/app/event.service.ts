import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from './event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _url: string = "https://lista6.azurewebsites.net/assets/data/events.json";

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url);
  }
}
