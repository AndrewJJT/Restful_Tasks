import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component1.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Own SHIT';
  constructor (private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
  }

  tasks = [];
  task = {};

  getTasksFromService(){
    let getalltasksobv = this._httpService.getTasks();
    getalltasksobv.subscribe(data => {
      console.log(data);
      // this.tasks = Object.values(data);
      // this.tasks = data [X] at controller side... this still work but typescript it giving waring the diff types
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
}
