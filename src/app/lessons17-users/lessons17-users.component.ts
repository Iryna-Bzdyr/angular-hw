import { USERS } from './../moduls/users';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../moduls/user';


@Component({
  selector: 'app-lessons17-users',
  templateUrl: './lessons17-users.component.html',
  styleUrls: ['./lessons17-users.component.scss']
})
export class Lessons17UsersComponent implements OnInit {
  login: string = ''
  password: string = ''
  email: string = ''
  user: User
  userArr = USERS
  buttonVal:string = 'Add user'
  editIndex:number
  status:boolean = true
 
 

  registrationForm = new FormGroup({
    login: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  })
  constructor() { }
  ngOnInit() {

  }
  pushUser() {
    this.user = new MyUser(this.login,
      this.password,
      this.email);
    this.clearForm();
    this.userArr.push(this.user)
  }
  clearForm() {
    this.login = ''
    this.password = ''
    this.email = ''
    this.registrationForm.markAsUntouched();
  }
  deleteUser(index: number): void {
    this.userArr.splice(index, 1)
  }
  editUser(index: number): number {
    this.login = this.userArr[index].login
    this.password = this.userArr[index].password
    this.email = this.userArr[index].email
    this.editIndex = index
    this.buttonVal = 'Save edit user'
    this.status = false
    return this.editIndex
  }
  saveEditUser():void{
    this.user = new MyUser(this.login,
      this.password,
      this.email);
    this.userArr.splice(this.editIndex,1,this.user)
    this.clearForm()
    this.status = true
    this.buttonVal = 'Add user'
  }

}

class MyUser implements User {
  constructor(public login: string, public password: string, public email: string) { }
}