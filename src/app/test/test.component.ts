import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  // Input from parent component using Input decorator {To be imprted }
  // @Input() public info:any;
  // another way:
  @Input('info') public infocopy: any;

  // When child component sends data to parent, it do so via events 
  // New event emitter {needs to be imported} to be outputed via Output decorator
  @Output() public childEvent = new EventEmitter();
  //  function to invoke event emitter, which sends data
  fire(str: any) {
    this.childEvent.emit(str);
  }

  ngOnInit(): void {
  }

}
