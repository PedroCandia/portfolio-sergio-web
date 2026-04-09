import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import { menuOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HeaderComponent  implements OnInit {
  @Input() menuOpen = false;
  // @Input() isShrunk = false;
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();
  @Output() scrollToSection = new EventEmitter<string>();

  activeSection: string = 'home-section';

  constructor() { 
    addIcons({ menuOutline, closeOutline });
  }

  ngOnInit() {}

  toggleMenuEmit() {
    this.toggleMenu.emit();
  }

  onButtonClick(sectionId: string) {
    this.activeSection = sectionId;
    this.scrollToSection.emit(sectionId);
  }

  onMobileNavClick(sectionId: string) {
    this.activeSection = sectionId;
    this.scrollToSection.emit(sectionId);
    this.toggleMenu.emit();
  }
}
