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
    this.getTasksFromService();
  }

  tasks = [];

  getTasksFromService(){
    let getalltasksobv = this._httpService.getTasks();
    getalltasksobv.subscribe(data => {
      console.log(data);
      this.tasks = Object.values(data);
      console.log(this.tasks);
    });
  }
}
