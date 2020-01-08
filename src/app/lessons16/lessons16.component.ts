import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lessons16',
  templateUrl: './lessons16.component.html',
  styleUrls: ['./lessons16.component.scss']
})
export class Lessons16Component implements OnInit {
  badWordsarr: Array<string> = []
  result: string = ''
  char: string = '*'
  badWord:string
  badWordsList:string 
  checkArea:string
  checkAreaArr: Array<string> =[]
  regexp: any
  newStr: string


  constructor() { }

  ngOnInit() {
  }
pushBadWord():void{
this.badWordsarr.push(this.badWord)
this.badWordsList = this.badWordsarr.join(', ')
this.badWord = ''
}
clearForm():void{
  this.badWord = ''
  this.badWordsarr = []
  this.badWordsList = ''
  this.checkArea = ''
  this.newStr = ''
}
cenzor():void{
this.checkAreaArr = this.checkArea.split(' ')
this.checkAreaArr.forEach((element,index)=>{
  this.checker()
})

}
checker():void{
  this.badWordsarr.forEach((element,index)=>{
    this.regexp = new RegExp(this.badWordsarr[index].toLowerCase(),'g')
    this.checkAreaArr.forEach((element,index)=>{
      if (this.regexp.test(this.checkAreaArr[index].toLowerCase()) == true) {
        for (let y = 0; y < this.checkAreaArr[index].length; y++) {
            this.result += this.char                         
        }                     
        this.newStr = this.checkArea.replace(this.checkAreaArr[index],this.result)
        this.checkArea = this.newStr
        this.result = ''                
    }
    })
  })
}
}
