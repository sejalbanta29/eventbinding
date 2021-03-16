import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent  {
  @Input() data: any[];
  @Input() parentCount: number;
  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

}
