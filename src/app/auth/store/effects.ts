import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUserInterface } from 'src/shared/types/currentUser.interface';
import { authActions } from './actions';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSucess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
