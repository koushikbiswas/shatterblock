import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-model-profile',
  templateUrl: './model-profile.component.html',
  styleUrls: ['./model-profile.component.css']
})
export class ModelProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(324);
      $('html, body').animate({
        scrollTop: $("#scrolltotopwrapper").offset().top
      }, 0);
  }

}


