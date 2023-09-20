import React from 'react';
import styles from './Task.module.scss';





export default function Task() {

	const taskHandler = () => {
		const tasks = [
			{

			}
		]
	}


	// const taskTitle = 

	// React.useEffect( () => {
	// 	// const json = JSON.stringify(tasks);
	// 	localStorage.setItem('todo', json);
	// },)
	return (
		<div className={styles.task}>
			<div className={styles.title}>task title</div>
			<div className={styles.date}>date</div>
			<div className={styles.creator}>creators name</div>
			<div className={styles.label}>task labels</div>
		</div>
	)
}
