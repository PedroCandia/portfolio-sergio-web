import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, FooterComponent, HeaderComponent],
})
export class HomePage {
  isShrunk = false;

  constructor() {}

  onScroll(event: any) {
    this.isShrunk = event.detail.scrollTop > 70; // a los 50px cambia

    console.log(this.isShrunk);
    
  }
}
