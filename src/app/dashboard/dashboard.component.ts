import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:string=''
  isCollapse:boolean=true
  currentAcno:Number=0
  balance:Number=0
    constructor(private api:ApiService){

    }
  ngOnInit(){
    if(localStorage.getItem("username")){
   this.user = localStorage.getItem("username")||''
  }
  
  }
  collapse(){
    this.isCollapse =!this.isCollapse
  }

  getBalance(){
    if(localStorage.getItem("currentAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno")||'') 
      console.log(this.currentAcno);
      this.api.getBalance(this.currentAcno)
      .subscribe((result:any)=>{
        console.log(result);
        this.balance=result.balance
      })
      
     }
  }

}
