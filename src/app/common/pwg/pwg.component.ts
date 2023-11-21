import { Component } from '@angular/core';

@Component({
  selector: 'app-pwg',
  templateUrl: './pwg.component.html',
  styleUrls: ['./pwg.component.css']
})
export class PwgComponent {

  title = 'pwg';
  passLength : number =0;
  generatedPass='';
  includeNum : boolean = false;
  includeChar : boolean =false;
  includeSym : boolean =false;

  getLength(length: string) {
    this.passLength = +length;
  }

  includeNumber(){
    this.includeNum= !this.includeNum
   // console.log(this.includeNum);
  }

  includeCharacter(){
    this.includeChar= !this.includeChar
    //console.log(this.includeChar);
  }

  includeSymbol(){
    this.includeSym= !this.includeSym
    //console.log(this.includeSym);
  }

  genPass(){

    this.generatedPass =''
    let validChar = ''

    if(this.includeNum){
      validChar += '1234567890'
    }

    if(this.includeChar){
      validChar += 'abcdefghijklmnopqrstuvwxyz'
    }

    if(this.includeSym){
      validChar += '!@#$%^&*(){}[]?/<>'
    }

    console.log(validChar);

    for (var s = 0; s < this.passLength; s++) {

      this.generatedPass += validChar.charAt(Math.round(Math.random() * validChar.length));

    }


  }


 
}
