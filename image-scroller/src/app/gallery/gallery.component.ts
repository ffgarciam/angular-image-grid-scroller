import { Component, OnInit} from '@angular/core';
import {ImageService} from '../services/image.service';
import {Subscription} from 'rxjs';
import {Image} from "../models/image";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  private TIMES_TO_COPY = 11; // 993 times per round
  galleryImages: Image[];
  imageSubscription: Subscription;
  loadingImages: boolean;

  constructor(public service: ImageService) { }

  ngOnInit() {
    this.loadingImages = true;
    this.getImages();
  }

  getImages(): void {
    this.imageSubscription = this.service
      .getImages()
      .subscribe(images => {
        this.galleryImages = this.service.cloneSource(images, this.TIMES_TO_COPY);
        this.loadingImages = false;
      });
  }

  getDisplayImageUrl(id: number): string {
    return `${this.service.DISPLAY_IMG_URL}${id}`;
  }

  ngOnDestroy(): void {
    this.imageSubscription.unsubscribe();
  }
}
