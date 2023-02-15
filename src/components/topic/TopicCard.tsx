import { useNavigate } from "react-router-dom";

const TopicCard = () => {
	const navigate = useNavigate();
	const onChoiceTopic = () => {
		navigate('/cards')
	}
	
	return <div onClick={onChoiceTopic} className="h-52 topic__card">
		TopicCard
	</div>
};

export default TopicCard;