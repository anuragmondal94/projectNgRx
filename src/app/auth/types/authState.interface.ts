import { CurrentUserInterface } from "src/shared/types/currentUser.interface"
import { BackendErrorsInterface } from "./backendErrors.interface"

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null | undefined
    isLoading: boolean
    validationErrors: BackendErrorsInterface | null
}