import { constants } from '@constantz/constants'
import { LoginScreen } from '@modules/common/screens/login/loginScreen'
import { RegisterScreen } from '@modules/common/screens/register/registerScreen'

export const routes = {
    [constants.SCREENS.COMMON.LOGIN_SCREEN]: LoginScreen,
    [constants.SCREENS.COMMON.REGISTER_SCREEN]: RegisterScreen,
}
