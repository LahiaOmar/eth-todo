interface IButton {
	children: React.ReactNode
}

const Button = ({ children } : IButton) => {
	return (
		<div className="w-full p-2 bg-green-400 rounded-full">
			<button className="w-full text-white">{ children }</button>
		</div>
	)
}

export default Button