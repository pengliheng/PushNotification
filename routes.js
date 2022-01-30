import * as navigation from 'react-navigation'
import { createAppContainer } from 'react-navigation'
import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'
import { constants } from '@constantz/constants'
import { routes as commonRoutes } from '@modules/common/routes'

export const routes = {
    ...commonRoutes,
}

export const AppNavigation = createAppContainer(createStackNavigator(routes, { headerMode: 'none' }))


export const router = (initialRouteName = constants.SCREENS.COMMON.LOGIN_SCREEN) =>
    navigation.createAppContainer(
        createStackNavigator(routes, {
            initialRouteName,
            defaultNavigationOptions: {
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled: false
            }
        })
    )
