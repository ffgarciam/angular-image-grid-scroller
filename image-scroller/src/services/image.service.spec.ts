import {getTestBed, TestBed} from '@angular/core/testing';

import {ImageService} from './image.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('ImageService', () => {
  let injector: TestBed;
  let service: ImageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientTestingModule],
        providers: [ImageService]
      });
    injector = getTestBed();
    service = injector.get(ImageService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getImages', () => {
    it('should return an Observable<any[]>'), () => {
      const dummyImages = [
        {
          "format":"jpeg",
          "width":5616,
          "height":3744,
          "filename":"0.jpeg",
          "id":0,
          "author":"Alejandro Escamilla",
          "author_url":"https://unsplash.com/photos/yC-Yzbqy7PY",
          "post_url":"https://unsplash.com/photos/yC-Yzbqy7PY"
        },
        {
          "format":"jpeg",
          "width":5616,
          "height":3744,
          "filename":"1.jpeg",
          "id":1,
          "author":"Alejandro Escamilla",
          "author_url":"https://unsplash.com/photos/LNRyGwIJr5c",
          "post_url":"https://unsplash.com/photos/LNRyGwIJr5c"
        },
      ];

      service.getImages().subscribe(images => {
        expect(images.length).toBe(2);
        expect(images).toEqual(dummyImages);
      });

      const req = httpMock.expectOne(service.IMAGE_URL);
      expect(req.request.method).toBe("GET");
      req.flush(dummyImages);
    };
  });
});
