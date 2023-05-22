import { TabsLayout } from 'entities/tabs'
import { TodoView } from '~/features/todo/ui/todo-view'

const Todo: FC = ({}) => {
	return (
		<TabsLayout>
			<TodoView />
		</TabsLayout>
	)
}
export default Todo
