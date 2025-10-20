import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [IonicModule, LightgalleryModule]
})
export class GalleryComponent  implements OnInit {
  @Input() title!: string;
  @Input() images: string[] = [];
  @Input() scrollToContactIsActive!: string;
  @Output() scrollToSection = new EventEmitter<string>();

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
  };

  constructor() { }

  ngOnInit() {}

  onImgLoaded() {
    const scrollToFooterIsValid = this.scrollToContactIsActive && this.scrollToContactIsActive != "false";
    if(scrollToFooterIsValid) {
      this.scrollToSection.emit("contact-section");
    }
  }
}
