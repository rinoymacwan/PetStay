import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 23.1442240;
  lng = 72.5658490;
  constructor() { }

  ngOnInit(): void {
  }

}
