import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { ErrorMessageComponet } from 'src/app/shared/components/errorMessage/errorMessage.component';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';
import { FeedTogglerComponent } from 'src/app/shared/components/feedToggler/feedToggler.component';
import { PopularTagsComponent } from 'src/app/shared/components/popularTags/popularTags.component';

@Component({
  selector: 'dp-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, BannerComponent, ErrorMessageComponet, PopularTagsComponent, FeedTogglerComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
