import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-become-a-model',
  templateUrl: './become-a-model.component.html',
  styleUrls: ['./become-a-model.component.css']
})
export class BecomeAModelComponent implements OnInit {
  public mysuccessapplication: any = false;
 /* public $ mysuccessapplication: any = false;*/

  constructor() { }

  ngOnInit() {
  }

  doclick(){
    console.log("dfsg");
    this.mysuccessapplication = true;
    console.log(' this.mysuccessapplication');
    console.log(this.mysuccessapplication);
    $('.mysuccessapplication').css('modalopen');
  }

  doclickclose(){
    this.mysuccessapplication = false;
  }

  scrolltoform(){
    $('html, body').animate({
      scrollTop: $("#div_id").offset().top
    }, 2000);
  }

}
