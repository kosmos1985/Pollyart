import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
	darkTheme = false;

	private eventsSubscription: Subscription;
  
	@Input() events: Observable<void>;
	constructor() { }
	ngOnInit(): void {
		this.eventsSubscription = this.events.subscribe(() => this.setDark());
		
	  };
	  setDark() {
		this.darkTheme = !this.darkTheme
	  };
	  ngOnDestroy() {
		this.eventsSubscription.unsubscribe();
	  };

}
// IMAGE CAROUSEL
function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}	

Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		this.wrapper = this.el.querySelector( "#slider-wrapper" );
		this.navigate();
	},
	navigate: function() {
	
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
	},
	
	animate: function( slide ) {
		var parent = slide.parentNode;
		var caption = slide.querySelector( ".caption" );
		var captions = parent.querySelectorAll( ".caption" );
		for( var k = 0; k < captions.length; ++k ) {
			var cap = captions[k];
			if( cap !== caption ) {
				cap.classList.remove( "visible" );
			}
		}
		caption.classList.add( "visible" );	
	},
	
	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function( e ) {
			e.preventDefault();
			var a = this;
			self.setCurrentLink( a );
			var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
			
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate( currentSlide );
			
		}, false);
	},
	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}	
};

document.addEventListener( "DOMContentLoaded", function() {
	var aSlider = new Slider( "#slider" );
	
});