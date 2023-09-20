import React from 'react'
import Task from './Task'
import TaskPopup from './TaskPopup'

export default function MainBlock() {

	// const addTask = 

	return (
		<div className='mainBlock'>
			<div className="block-title">
				<div className="name">Block name</div>
				<button className="add-task">add new task</button>
			</div>
			<Task />
			<Task />
			<TaskPopup />
		</div>
	)
}
