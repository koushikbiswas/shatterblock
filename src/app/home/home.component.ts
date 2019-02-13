import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {windowCount} from 'rxjs/operators';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  public mysuccessapplication1: any = false;
  constructor(private modalService: BsModalService) {}
  ngOnInit() {
<<<<<<< HEAD
   /* console.log('in ng oninit !!');
=======
    console.log('in ng oninit !!');
>>>>>>> cd9d929a6ee5fd316f41e7a2b57a05a7864eeec2
    console.log($('.newhome_header').height());
    console.log($('#newmyCarousel').height());
    console.log($('app-header').length);
    console.log($('.newhome_header').width());
    console.log($('#newmyCarousel').width());
<<<<<<< HEAD
    console.log($(window).height());*/
  }

  doclick1(){
    console.log("dfsg");
    this.mysuccessapplication1 = true;
    console.log(' this.mysuccessapplication1');
    console.log(this.mysuccessapplication1);
    $('.mysuccessapplication').css('modalopen');
  }
  doclick1close(){
    this.mysuccessapplication1 = false;
  }


  ngAfterViewChecked(){

    /*console.log('in ng ngAfterViewChecked !!');
=======
    console.log($(window).height());
  }

  ngAfterViewChecked(){

    console.log('in ng ngAfterViewChecked !!');
>>>>>>> cd9d929a6ee5fd316f41e7a2b57a05a7864eeec2
    console.log($('.newhome_header').height());
    setTimeout(()=>{    //<<<---    using ()=> syntax
      console.log('newmyCarousel height');
      console.log($('.newhomeslider').height());
    }, 500);



    console.log($('app-header').length);
    console.log($('.newhome_header').width());
    console.log($('#newmyCarousel').width());
    console.log($(window).height());
    let windowheight=$(window).height();

    $('.newhome_header').height(287.22/755.78*windowheight);
    $('#newmyCarousel').height(468.56/755.78*windowheight);
    $('#newmyCarousel').find('.item').height(468.56/755.78*windowheight);
    //$('#newmyCarousel').find('.item').find('section').height(468.56/755.78*windowheight);
    $('#newmyCarousel').find('.item').find('img').height(468.56/755.78*windowheight);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);*/
  }

<<<<<<< HEAD
}
=======
}
/*
$(window).scroll(function(){
  if ($(this).scrollTop() > 135) {
    $('#task_flyout').addClass('fixed');
  } else {
    $('#task_flyout').removeClass('fixed');
  }
});
*/
>>>>>>> cd9d929a6ee5fd316f41e7a2b57a05a7864eeec2
