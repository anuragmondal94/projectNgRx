import { PopularTagType } from "./popularTag.type";
import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  body: string;
  createdAt: string;
  desrciption: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: PopularTagType[];
  title: string;
  updatedAt: string;
  author: ProfileInterface
}
