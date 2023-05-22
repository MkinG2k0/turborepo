import { RouteParams } from 'atomic-router'
import { homeOutline, flashOutline, readerOutline } from 'ionicons/icons'

import { TabBtnProps } from 'entities/tabs/ui/tab-btn'
import { mainRoute, tabsRoute, todoRoute } from '~/shared/config/routing/routes'

export const tabBtns = (): TabBtnProps<RouteParams>[] => [
	{ icon: readerOutline, text: 'todos', to: todoRoute },
	{ icon: homeOutline, text: 'main', to: tabsRoute },
	{ icon: flashOutline, text: 'welcome', to: mainRoute },
]
