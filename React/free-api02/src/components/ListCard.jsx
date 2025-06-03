function ListCard({ content, onClick }) {
	console.log(onClick)
	return (
		<div
			onClick={onClick}
			className="border-none w-md text-base text-center antialiased px-4 py-2  hover:bg-white/5 rounded-sm hover:border-solid hover:border-l-1 tracking-wide text-blue-400 hover:cursor-pointer">
			{content.length > 35 ? content.slice(0, 48) + "..." : content}
		</div>
	);
}

export default ListCard;
