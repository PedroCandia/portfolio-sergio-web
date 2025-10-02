import { Component } from '@angular/core';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, IonContent, FooterComponent, HeaderComponent, GalleryComponent],
})
export class HomePage {
  isShrunk = false;

  section_1 = {
    title: "Muebles flotantes",
    images: [
      '../../../assets/img/gallery/mueble_flotante_1.jpg',
      '../../../assets/img/gallery/mueble_flotante_2.jpg',
      '../../../assets/img/gallery/mueble_flotante_3.jpg',
      '../../../assets/img/gallery/mueble_flotante_4.jpg',
    ]
  }

  section_2 = {
    title: "Muebles para TV",
    images: [
      '../../../assets/img/gallery/spot_para_tv_1.jpg',
      '../../../assets/img/gallery/spot_para_tv_2.jpg',
      '../../../assets/img/gallery/spot_para_tv_3.jpg',
    ]
  }

  section_3 = {
    title: "Lambrin para interior",
    images: [
      '../../../assets/img/gallery/lambrin_1.jpg',
      '../../../assets/img/gallery/lambrin_2.jpg',
      '../../../assets/img/gallery/lambrin_3.jpg',
      '../../../assets/img/gallery/lambrin_4.jpg',
      '../../../assets/img/gallery/lambrin_5.jpg',
      '../../../assets/img/gallery/lambrin_6.jpg',
      '../../../assets/img/gallery/lambrin_7.jpg',
      '../../../assets/img/gallery/lambrin_8.jpg',
      '../../../assets/img/gallery/lambrin_9.jpg'
    ]
  }

  section_4 = {
    title: "Más muebles!",
    images: [
      '../../../assets/img/gallery/mueble_1.jpg',
      '../../../assets/img/gallery/mueble_2.jpg',
      '../../../assets/img/gallery/mueble_3.jpg',
      '../../../assets/img/gallery/mueble_4.jpg',
      '../../../assets/img/gallery/mueble_5.jpg',
      '../../../assets/img/gallery/mueble_6.jpg',
      '../../../assets/img/gallery/mueble_7.jpg',
      '../../../assets/img/gallery/mueble_8.jpg',
      '../../../assets/img/gallery/mueble_9.jpg'
    ]
  }

  constructor() {}

  onScroll(event: any) {
    this.isShrunk = event.detail.scrollTop > 70; // a los 50px cambia

    console.log(this.isShrunk);
    
  }
}
