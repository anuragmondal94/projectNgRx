import { GetFeedResposneInterface } from './getFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResposneInterface | null;
}
