import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryAnimation, NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { config } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'wnewbie'

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  showNavigationArrows = false;
  showNavigationIndicators = false;
   images = [
     'assets/images/new.jpg',
     'assets/images/web.jpg',
     'assets/images/new.jpg',
     'assets/images/web.jpg'
   ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '800px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/new.jpg',
        medium: 'assets/new.jpg',
        big: 'assets/new.jpg'
      },
      {
        small: 'assets/web.jpg',
        medium: 'assets/web.jpg',
        big: 'assets/web.jpg'
      }
    ];
  }
}



