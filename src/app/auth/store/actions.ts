import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registeRequest.interface';
import { CurrentUserInterface } from 'src/shared/types/currentUser.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Sucess': props<{ currentUser: CurrentUserInterface }>(),
    'register Failure': emptyProps()
  },
});

