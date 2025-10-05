import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import { menuOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
  // imports: [IonicModule]
})
export class HeaderComponent  implements OnInit {
  @Input() isShrunk = false;
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();


  constructor() { 
    addIcons({ menuOutline });
  }

  ngOnInit() {}

  toggleMenuEmit() {
    this.toggleMenu.emit();
  }
}
