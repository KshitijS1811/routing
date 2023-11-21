import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {

  myText : string = "This is some text within a card body."

  enteredText : string ='';

  Success : boolean = false;

  onInput(value:string){
    this.enteredText=value;
    console.log(this.enteredText);

  }

  compare(t1 : string,e1 :string){
    if(!e1) return "pending";

    return t1 === e1 ? "correct" : "incorrect";
  }

  


  

}
