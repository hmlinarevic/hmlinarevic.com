import Image from 'next/image';

const MyPhoto = ({ className, location }) => {
	return (
		<div className={className}>
			<Image
				src={location}
				alt="a guy"
				objectFit="cover"
				// layout="fixed"
				width={320}
				height={320}
			/>
		</div>
	);
};

export default MyPhoto;
