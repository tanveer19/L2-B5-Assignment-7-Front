export interface IAuthor {
  id: number;
  name: string;
  picture?: string;
  isVerified?: boolean;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  authorId: number;
  author: IAuthor;
  views?: number;
  createdAt: string;
}
