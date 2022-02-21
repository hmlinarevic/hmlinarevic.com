const HeroIcon = ({ icon, name }) => {
	return (
		<>
			<div className="flex p-2">
				{icon}
				<span className="text-neutral-400 hover:text-neutral-700 ml-2">
					{name}
				</span>
			</div>
		</>
	)
}

export default HeroIcon
