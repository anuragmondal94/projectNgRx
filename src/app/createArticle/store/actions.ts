import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/auth/types/backendErrors.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleRequestInterface } from "src/app/shared/types/articleRequest.interface";

export const createArticleActions = createActionGroup({
    source: 'create article',
    events: {
        'Create article': props<{request: ArticleRequestInterface}>(),
        'Create article success': props<{article: ArticleInterface}>(),
        'Create article failure': props<{errors: BackendErrorsInterface}>()

    
    }
})