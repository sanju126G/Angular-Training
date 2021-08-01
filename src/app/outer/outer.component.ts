import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {

  userId:Number;
  title:String;
  body:String;
  constructor(private td:TodoService) { }
  ngOnInit() {
    
  }

  addUser(form) {
    // console.log(this.id,this.title,this.body)
    console.log(form.value)
    this.td.getData(form.value).subscribe((res) => {
      console.log("new post Added successfully")
      console.log(res)
    },(err) => {
      console.log(err)
    })

  }

}
