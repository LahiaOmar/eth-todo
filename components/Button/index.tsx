interface IButton {
	children: React.ReactNode
	onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick } : IButton) => {
	return (
		<div className="w-full p-2 bg-green-400 rounded-full">
			<button className="w-full text-white" onClick={onClick}>{ children }</button>
		</div>
	)
}

export default Button