import { RouterProvider, Route } from 'atomic-router-react'

import Auth from 'pages/auth/ui/page'
import Main from 'pages/main/ui/page'
import Todo from 'pages/tab-todos/ui/page'
import Tabs from 'pages/tabs/ui/page'
import { authRoute, mainRoute, router, tabsRoute, todoRoute } from 'shared/config/routing'

export const Pages: FC = () => {
	return (
		<RouterProvider router={router}>
			<Route route={mainRoute} view={Main} />
			<Route route={authRoute} view={Auth} />
			<Route route={todoRoute} view={Todo} />
			<Route route={tabsRoute} view={Tabs} />
		</RouterProvider>
	)
}
