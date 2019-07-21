import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  readonly IMAGE_URL = 'https://picsum.photos/list';
  readonly DISPLAY_IMG_URL = 'https://picsum.photos/200/160/?image=';

  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get<Image[]>(this.IMAGE_URL);
  }

  cloneSource(objectToCopy: Image[], howManyTimes: number): Image[] {
    const returnArray = [];
    for (let i = 0; i < howManyTimes; i++) {
      const tempArray = JSON.parse(JSON.stringify(objectToCopy));
      returnArray.push(...tempArray);
    }

    return returnArray;
  }
}
