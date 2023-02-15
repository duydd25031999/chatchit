import '../../assets/scss/topic.scss';
import TopicList from './TopicList';

const TopicTitle = () => (
	<h1 className="text-3xl font-bold text-center mb-8">
		Pick 1 chủ đề để lấy
	</h1>
)

const Topicpage = () => (<div>
	<TopicTitle />
	<TopicList />
</div>);

export default Topicpage;