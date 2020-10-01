import { Component } from '@angular/core';
//Library to alerts
import { Ngxalert } from  'ngx-dialogs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'timer';
  public minutes: any = 0;
  public seconds: any = 0;
  public time: String;
  public state = false;
  public interval;

  constructor(public alerts: Ngxalert) {
    //init 00:00 time variable
    this.time = `0${this.minutes}:0${this.seconds}`
  }

  //Function to start the timer
  initTimer(){
    this.state = true;
    let m;
    let s;
    this.interval = setInterval(() => {
      if (this.minutes > 0 || this.seconds > 0) {
        if(this.seconds > 0) {
          this.seconds--;
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.alerts.create({
          title: 'Time is up',
		      message: 'You can restart your timer',
        });
        this.pauseTimer();
      }
      this.seconds < 10 ? s = `0${this.seconds}` : s = this.seconds
      this.minutes < 10 ? m = `0${this.minutes}` : m = this.minutes
      this.time = `${m}:${s}`
    },1000)
  }

  //Function to capture values
  onKey(event: any) {
    if (event.target.value > 0) {
      this.seconds = 0;
      this.seconds = `0${this.seconds}`;
      parseInt(event.target.value) < 10 ? this.minutes = `0${parseInt(event.target.value)}` : this.minutes = parseInt(event.target.value);
      this.time = `${this.minutes}:${this.seconds}`
    }
  }

  //Function to pause the timer
  pauseTimer() {
    this.state = false;
    clearInterval(this.interval);
  }

}
