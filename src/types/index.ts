export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: [];
  authorId: number;
}
