import TopicCard from './TopicCard';

const TopicList = () => (
	<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
		{Array(20).fill(0).map((item, index) => <TopicCard key={index} />)}
	</div>
);

export default TopicList;