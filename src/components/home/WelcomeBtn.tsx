import { useNavigate } from "react-router-dom";

const WelcomeBtn = () => {
	const navigate = useNavigate();
	
	const onClickStart = () => {
		navigate('/topic');
	}
	return <button onClick={onClickStart} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Start game</button>
}

export default WelcomeBtn;