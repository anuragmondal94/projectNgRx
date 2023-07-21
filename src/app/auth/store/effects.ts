import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from 'src/shared/types/currentUser.interface';
import { authActions } from './actions';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSucess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.registerFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
