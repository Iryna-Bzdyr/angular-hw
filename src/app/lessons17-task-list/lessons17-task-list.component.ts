import { element } from 'protractor';
import { TASKS } from './../moduls/task-list';
import { Component, OnInit } from '@angular/core';
import { Task } from '../moduls/task';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lessons17-task-list',
  templateUrl: './lessons17-task-list.component.html',
  styleUrls: ['./lessons17-task-list.component.scss']
})
export class Lessons17TaskListComponent implements OnInit {
tasksArr = TASKS
newTask:Task
taskName:string = ''
checked:boolean = false
status:string = 'In PROGRESS'
editIndex:number
editTaskName:string = ''
input = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
addTask():void{
  this.newTask = new MyTask(this.taskName = this.taskName,
    this.checked = this.checked,
    this.status = this.status)
    this.tasksArr.push(this.newTask)
   this.taskName = ''
   this.input.markAsUntouched()
   
}
onChange(event: any, index:number, task: { checked: boolean; }) {

  task.checked = !task.checked;
  if(this.tasksArr[index].checked==true){
    this.tasksArr[index].status = 'DONE'
  }
  if(this.tasksArr[index].checked!==true){
    this.tasksArr[index].status = 'In PROGRESS'
  }

}
deleteTask(index: number): void {
  this.tasksArr.splice(index, 1)
}
editTask(index:number):number{
document.getElementById('edit').style.display = 'flex'
this.editTaskName = this.tasksArr[index].taskName
this.editIndex = index
console.log(this.editTask)
console.log(this.editIndex)
return this.editIndex
}

saveEdit():void{
  this.tasksArr[this.editIndex].taskName = this.editTaskName
  this.editTaskName = ''
  document.getElementById('edit').style.display = 'none'
}


}

class MyTask implements Task{
  constructor(public taskName:string, public checked:boolean, public status:string){}
}