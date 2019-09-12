import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.bootstrap.css']
})
export class AppComponent implements OnInit {
  title = 'Own SHIT';
  newTask : any;
  taskToEdit:any;
  constructor (private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {title:"",description:""}    
    this.taskToEdit = {title:"",description:""}    
    
  }
  
  tasks = [];
  task = {};
 

  getTasksFromService(){
    let getalltasksobv = this._httpService.getTasks();
    getalltasksobv.subscribe(data => {
      console.log(data);
      // this.tasks = Object.values(data);
      // this.tasks = data   // [X] at controller side... this still work but typescript it giving waring the diff types
      this.tasks = data['alltasks']; 
      console.log(this.tasks);
    });
  }

  btngetalltasks():void{
    this.getTasksFromService();
  }

  showtaskdetail(id:string){
    console.log("Here is the id: " + id);
    let gettaskobv = this._httpService.getTask(id);
    gettaskobv.subscribe(data=> {
      this.task = data[0];
      console.log(data);
    })
  }

  //submit button to add task
  onSubmit(){
    let addtaskobv = this._httpService.addTask(this.newTask);
    addtaskobv.subscribe(data => { 
    console.log(data);
    this.getTasksFromService();});
    this.newTask = {title:"",description:""}
  }

  //get task and form 
  editTask(id:string){
    let gettaskobv = this._httpService.getTask(id);
    gettaskobv.subscribe(data=> {
      this.taskToEdit = data[0];
      console.log(data);
    })
  }

  //submit edited task 
  onSubmitToEdit(){
    console.log("taskToEdit._id", this.taskToEdit._id);
    let edittaskobv = this._httpService.editTask(this.taskToEdit._id,this.taskToEdit);
    edittaskobv.subscribe(data => {
    console.log(data);
    this.getTasksFromService();
    });
   
  }

  deleteTask(id:string){
    let taskToDeleteObv = this._httpService.deleteTask(id);
    taskToDeleteObv.subscribe(data => console.log(data));
    this.getTasksFromService();
  }

}
