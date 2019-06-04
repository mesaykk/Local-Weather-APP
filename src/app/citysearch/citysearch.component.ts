import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {
  search = new formControl()

  constructor() { }

  ngOnInit() {
    

  }

}
