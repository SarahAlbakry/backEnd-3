import { Ichat } from './ichat';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('mssagecontainer') scrollcontainer :ElementRef;
  title = 'chat';
  Arrchat: Array<Ichat> = [];
  message = '';
  sendMessage() {
    if (this.message) {
      this.Arrchat.push({
        type: 'repo',
        repo: this.message
      });
      this.message = '';

      setTimeout(() => {
        this.setscrollButton();
      }, 0);
      setTimeout(() => {
        this.Arrchat.push({
          type: 'rece',
          rece: this.Arrchat[this.Arrchat.length - 1].repo
        });
        this.message='';
      }, 50);

      setTimeout(() => {
        this.setscrollButton();
      }, 52);
    }
  }
  setscrollButton()
  {
    const scrollHeigh =this.scrollcontainer.nativeElement.scrollHeight;
    if  (scrollHeigh>0)
    {
      this.scrollcontainer.nativeElement.scrollTop=scrollHeigh;
    }
  }
}
