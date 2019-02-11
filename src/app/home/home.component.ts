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

  constructor(private modalService: BsModalService) {}
  ngOnInit() {
    console.log('in ng oninit !!');
    console.log($('.newhome_header').height());
    console.log($('#newmyCarousel').height());
    console.log($('app-header').length);
    console.log($('.newhome_header').width());
    console.log($('#newmyCarousel').width());
    console.log($(window).height());
  }

  ngAfterViewChecked(){

    console.log('in ng ngAfterViewChecked !!');
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
    $('.newhomeslider').height(468.56/755.78*windowheight);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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
