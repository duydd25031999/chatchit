import '../../assets/scss/topic.scss';

const TopicTitle = () => (
	<h1 className="text-3xl font-bold text-center">
		Pick 1 chủ đề để lấy
	</h1>
)

const TopicCard = () => (
	<div className="topic__card">
		TopicCard
	</div>
);

const TopicList = () => (
	<div className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-4">
		{Array(20).fill(0).map(() => <TopicCard />)}
	</div>
);


const Topicpage = () => (<div>
	<TopicTitle />
	<TopicList />
</div>);

export default Topicpage;