import React from 'react'
import Task from './Task'
import TaskPopup from './TaskPopup'



export default function MainBlock() {

	const [popUp, setPopUp] = React.useState(false);

	const onTask = () => {
		setPopUp(true);
	}
	return (

		<div className='mainBlock'>
			<div className="block-title">
				<div className="name">Block name</div>
				<button onClick={onTask} className="add-task">add new task</button>
			</div>
			<Task />
			{popUp ? <TaskPopup /> : ''}
		</div>
	)
}
