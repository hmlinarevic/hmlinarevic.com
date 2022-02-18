import Image from 'next/image'
import Link from 'next/link'

import { hostAddress } from '../../utils/hostAddress'

const Book = ({ name, author, coverUrl, url }) => {
	return (
		<li className="p-[1rem] ml-[-1rem] rounded-md border border-transparent transition hover:bg-[#F3F7F3] hover:border hover:border-[#C1D7C1] hover:text-[#619B60] ">
			<Link href={url}>
				<a target="_blank">
					<div className="w-full flex">
						<div className="mr-4 h-[120px]">
							<Image
								src={hostAddress + coverUrl}
								width={80}
								height={120}
								objectFit="fill"
							/>
						</div>
						<div className="max-w-[9rem] h-fit">
							<h3 className="text-inherit">{name}</h3>
							<p className="text-[#333] text-xs font-light mt-2">by {author}</p>
						</div>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default Book
