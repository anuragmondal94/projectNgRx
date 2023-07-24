import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { popularTagsActions } from './store/actions';
import {
  selectError,
  selectIsLoading,
  selectPopularTagsData,
} from './store/reducers';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingComponet } from '../loading/loading.component';
import { ErrorMessageComponet } from '../errorMessage/errorMessage.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dp-popular-tags',
  templateUrl: './popularTags.component.html',
  standalone: true,
  imports: [CommonModule, LoadingComponet, ErrorMessageComponet, RouterLink],
})
export class PopularTagsComponent implements OnInit {
  data$ = combineLatest({
    popularTags: this.store.select(selectPopularTagsData),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
  });
  popularTags: any;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(popularTagsActions.getPopularTags());
  }
}
