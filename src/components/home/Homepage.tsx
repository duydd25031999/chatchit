import WelcomeTitle from "./WelcomeTitle";
import GameIntroduce from "./GameIntroduce";
import WelcomeBtn from "./WelcomeBtn";

const Homepage = () => {
	return <div className="flex flex-col justify-between items-center">
		<WelcomeTitle />
		<GameIntroduce />
		<WelcomeBtn />
	</div>

};

export default Homepage;