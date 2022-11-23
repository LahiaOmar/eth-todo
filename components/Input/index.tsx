
import React, { FC, useState } from 'react'
import { BiTask } from 'react-icons/bi'

interface IInput {
	value: string,
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: FC<IInput> = ({ value, onChange}) => {
	
	return (
		<div className='flex border-2 p-2'>
			<BiTask className='w-10 h-10 text-blue-500' />
			<input className='ml-2 w-full' value={value} onChange={onChange} placeholder='Enter a task'/>				
		</div>
	)
}

export default Input