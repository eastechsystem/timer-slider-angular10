import { Component, NgModule, enableProdMode, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxButtonModule} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import * as $ from 'jquery';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timer-slider-angular10';
  
  startValue: Date = new Date(2012, 8, 29, 0, 0, 0);
  endValue: Date = new Date(2012, 8, 29, 24, 0, 0);
  startSelectedValue: Date = new Date(2012, 8, 29, 11, 0, 0);
  endSelectedValue: Date = new Date(2012, 8, 29, 11, 0, 0);
  

  constructor() { }

  ngOnInit() {
    $(document).ready(function() { 
      $("#range-selector").addClass("container flex");
      
      var x,y;
      var mouseDown = false;
      $('.slider-marker').mousedown(function(e) {
        x = e.pageX;
        y = e.pageY;
        mouseDown = true;
        console.log( "y = " + y + ", x = " + x);

        if (mouseDown) {
          mouseDown = false;
          e.preventDefault();
          $('.slider-marker').mouseup(function(e){
            if (x > 700) {
              // $('#range-selector').animate({scrollLeft:'+=10%'}, 1000, "swing").delay( 800 ).fadeIn( 500 ); 
              // $('#range-selector').animate({scrollLeft:'+=100%'});
              $('#range-selector').animate({scrollLeft:'+=100%'}, 500);
            } else if (x < 500) {
              // $('#range-selector').animate({scrollLeft:'-=10%'}, 1000, "swing").delay( 800 ).fadeIn( 500 ); 
              // $('#range-selector').animate({scrollLeft:'-=100%'});
              $('#range-selector').animate({scrollLeft:'-=100%'}, 500);
            }
  
          });
        }
      });
      // Method ends

    });
  }

  okClicked (e) {
    $(".dxrs-slidersContainer .slider").css("display", 'block');
    $(".dx-button-mode-contained").css("pointer-events", 'none');
  }
}
