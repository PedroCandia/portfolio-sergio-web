import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {}

}
