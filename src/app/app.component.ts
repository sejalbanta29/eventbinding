import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  parentCount = 0;
  clickMessage="";
  values = "";
  

  onKey(event: any) {
    // without type info
    this.values += event.target.value + " | ";
  }


  onClickMe() {
    this.clickMessage = "Welcome to the TTN";
  }
  data = [
    {  name: "Sejal",age:23 ,address:"Delhi" },
    {  name: "Arushi", age:18 ,address:"Delhi"}
  ];
  displayCounter(count) {
    this.parentCount = count;
  }
}
