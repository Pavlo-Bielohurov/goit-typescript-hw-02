export interface Image {
  [x: string]: string | undefined;
  id: number;
  urls: {
    [x: string]: string | undefined;
    regular: string;
    small_s3: string;
  };
  description?: string;
}
