import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'life-cycle-hooks';
  
  name = 'Angular';

  show = false;

  constructor() { }

  ngOnInit() {
    console.log('component initialized')
  }

  toggle() {
    this.show = !this.show;
  }
}
