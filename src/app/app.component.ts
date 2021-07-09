import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  public hello ="hi";
  public search="searchbar";
  public status=true;
  public warnClass ="warn";
  public successClass ="success";

  // First chapter
  firstChap=false;
// for event handling
public greet="";
onClick(){
this.greet="I'm here!"
}
tempGreet="";
show(even:any){
  alert(even);
}
// use in Template reference variable also
public twoWay="";

// Component Interaction 
// Data to be sent to child
public name ="Raj";
// Data from child
public message="";


// SECOND CHAPTER
public secondChap=true
public pipeVar = "my name is Raj."
public objData = {
"name":"raj",
"age":21
}
public pipeDate = new Date();

}
