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
export interface IProject {
  id: number;
  name: string;
  description: string;
  thumbnail?: string;
  projectLink?: string;
  liveLink?: string;
  isFeatured: boolean;
  features: string[];
  authorId: number;
  author: IAuthor;
  views?: number;
  createdAt: string;
}
