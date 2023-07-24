import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GetFeedResposneInterface } from "../types/getFeedResponse.interface";

export const feedActions = createActionGroup({
    source: 'feed',
    events: {
        'Get feed': props<{url: string}>(),
        'Get feed success': props<{feed: GetFeedResposneInterface}>(),
        'Get feed failure': emptyProps(),

    }
})