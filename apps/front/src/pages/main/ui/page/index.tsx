import { FC } from 'react'
import { NavBtn } from 'shared'
import { Button } from 'ui'

import { authRoute } from '~/shared/config/routing/routes'

const Main: FC = ({}) => {
	return (
		<div className={'col flex-auto justify-center items-center'}>
			Welcome
			<NavBtn to={authRoute}>NEXT</NavBtn>
			<Button />
		</div>
	)
}

export default Main
