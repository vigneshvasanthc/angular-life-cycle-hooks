import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;

  timeoutInstance = null

  constructor() { }

  ngOnChanges(changes) {
    console.log('on changes', changes)
  }

  ngOnInit() {
    console.log('component initialized');

    /* this.timeoutInstance = setInterval(() => {
      console.log(new Date());
    }, 1000); */
  }

  ngOnDestroy() {
    console.log('component destroyed');

    if(this.timeoutInstance) {
      clearInterval(this.timeoutInstance);
    }
  }

}
