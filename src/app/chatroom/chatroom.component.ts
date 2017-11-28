import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formVal:string;
  readonly token = environment.dialogFlow.chatBot;
  readonly client = new ApiAiClient({accessToken:this.token});
  temp:any;
  listOfQuestions:string[]=[];
  listOfAnswers:string[]=[];

  sendMessage(){
    this.listOfQuestions.push(this.formVal);
    console.log(this.listOfQuestions);
    return this.client.textRequest(this.formVal).then(res=>{
     this.temp=res.result.fulfillment.speech;
      this.listOfAnswers.push(this.temp);
      this.formVal="";
    })
    
  }

}
