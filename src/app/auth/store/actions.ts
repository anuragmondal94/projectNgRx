import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registeRequest.interface';
import { CurrentUserInterface } from 'src/shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../types/backendErrors.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Sucess': props<{ currentUser: CurrentUserInterface }>(),
    'register Failure': props<{ errors: BackendErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login Sucess': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': props<{ errors: BackendErrorsInterface }>(),

    'Get current user': emptyProps(),
    'Get current user Sucess': props<{ currentUser: CurrentUserInterface }>(),
    'Get current user Failure': emptyProps(),
  },
});
