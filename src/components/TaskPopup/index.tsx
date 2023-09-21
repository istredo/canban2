import React, { useId } from 'react'
import styles from '../Task/Task.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';

type TaskType = {
	title: string | void;
	text: string | void
	label: string | void
}
const TaskPopup = () => {


	const id = useId()
	const { register, handleSubmit, formState: { errors } } = useForm<TaskType>()
	const onSubmit: SubmitHandler<TaskType> = (data) => {
		console.log(data)
	}


	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.pop__task}>
			<div className={styles.input__block}>
				<label htmlFor={`${id}-'title'`} />
				<input id={`${id}-'title'`} type='title' className={styles.pop__title} placeholder='task title'
					{...register('title', { required: 'Title is required' })}
				/>
				{errors?.title && <div style={{ color: 'red' }}>{errors.title.message}</div>}

				<label htmlFor={`${id}-'text'`}></label>
				<input id={`${id}-'text'`} type='text' className={styles.pop__text} placeholder='task text'
					{...register('text')}
				/>

				{/* Форму удобнее привязать через htmlFor  */}
				<label className={styles.label__container}>
					Укажите теги:
					<input className={styles.pop__label} type='label' placeholder='task label'
						{...register('label')}
					/>
				</label>

			</div>
			<input type='submit' value={'add task'} className={styles.pop__button} />
		</form>
	)
}

export default TaskPopup