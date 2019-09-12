import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
  }

  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got tasks!", data));
    return this._http.get('/tasks')
  }

  getTask(id:string){
    return this._http.get('/tasks/'+ id)
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask)
  }

  editTask(id:string, editedtask){
    return this._http.put('/tasks/' + id, editedtask)
  }

  deleteTask(id:string){
    return this._http.delete('/tasks/' + id)
  }
}

