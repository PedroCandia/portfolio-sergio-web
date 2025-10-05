import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { GalleryModule } from '../components/gallery/gallery.module';
import { FooterModule } from '../components/footer/footer.module';
import { HomePage } from './home.page';

import { IonContent, IonText, IonButtons, IonButton } from '@ionic/angular/standalone';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    IonicModule,
    HeaderModule,
    GalleryModule,
    FooterModule,
    IonContent, IonText, IonButtons, IonButton,
  ],
})
export class HomeModule {}
