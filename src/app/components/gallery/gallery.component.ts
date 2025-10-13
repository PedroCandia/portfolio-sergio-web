import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class GalleryComponent  implements OnInit {
  @Input() title!: string;
  @Input() images: string[] = [];
  @Input() scrollToContactIsActive!: string;
  @Output() scrollToSection = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onImgLoaded() {
    const scrollToFooterIsValid = this.scrollToContactIsActive && this.scrollToContactIsActive != "false";
    if(scrollToFooterIsValid) {
      this.scrollToSection.emit("contact-section");
    }
  }
}
