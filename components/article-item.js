import Image from 'next/image'

const ArticleItem = ({ title, date }) => {
	return (
		<div className="w-[calc(100%+40px)] ml-[-20px]">
			<div className="py-[10px] px-[20px] flex justify-between items-center cursor-pointer rounded-xl hover:bg-neutral-100">
				<div className="flex items-center">
					<h3 className="text-xl inline mr-4">{title}</h3>
				</div>

				<span className="item-end">{date}</span>
			</div>
		</div>
	)
}

export default ArticleItem