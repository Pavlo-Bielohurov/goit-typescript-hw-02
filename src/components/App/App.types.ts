export interface Image {
  alt_description: string | undefined;
  id: number;
  urls: {
    small: string | undefined;
    regular: string;
    small_s3: string;
  };
  description?: string;
}
