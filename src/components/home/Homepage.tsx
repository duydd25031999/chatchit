import { useNavigate } from "react-router-dom";

const WelcomeTitle = () => (
	<h1 className="text-3xl font-bold">
		Chatchit Card
	</h1>
)

const GameGuildline = () => (<h1>This is guildline</h1>)

const StartGameBtn = () => {
	const navigate = useNavigate();
	
	const onClickStart = () => {
		navigate('/topic');
	}
	return <button onClick={onClickStart} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Start game</button>
}

const Homepage = () => {
	return <div className="flex flex-col justify-between items-center">
		<WelcomeTitle />
		<GameGuildline />
		<StartGameBtn />
	</div>

};

export default Homepage;