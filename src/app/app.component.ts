import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'lista rock';
  ngOnInit() {
    var json = require('/home/phil/Documentos/dev/python/listaBot/events.json');
    console.log(json);
  }
}
