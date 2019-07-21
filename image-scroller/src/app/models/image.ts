export class Image {
  readonly DEFAULT_WIDTH: number = 180;
  readonly DEFAULT_HEIGHT: number = 250;

  constructor(
    id: number = 0,
    format: string = '',
    width: number = 0,
    height: number = 0,
    filename: string = '',
    author: string = '',
    author_url: string = '',
    post_url: string = ''
  ) {}
}
