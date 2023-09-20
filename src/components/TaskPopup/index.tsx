import React from 'react'
import styles from '../Task/Task.module.scss';

export default function TaskPopup() {
	return (
		<form className={styles.pop__task}>
			<div className={styles.input__block}>
				<input className={styles.pop__title} placeholder='task title' />
				<input type='text' className={styles.pop__text} placeholder='task text' />
				<input className={styles.pop__label} placeholder='task label' />
			</div>
			<input type='submit' value={'add task'} className={styles.pop__button} />
		</form>
	)
}
