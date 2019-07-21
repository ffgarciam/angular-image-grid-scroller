import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  readonly IMAGE_URL = "https://picsum.photos/list";
  readonly DISPLAY_IMG_URL = "https://picsum.photos/200/160/?image=";

  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get<any[]>(this.IMAGE_URL);
  }

}
