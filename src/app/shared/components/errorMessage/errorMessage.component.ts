import { Component, Input } from '@angular/core';

@Component({
  selector: 'dp-error-message',
  template: '<div>{{message}}</div>',
  standalone: true,
})
export class ErrorMessageComponet {
  @Input() message: string = 'Something went wrong';
}
