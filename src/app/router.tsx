import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/home/Homepage";
import Topicpage from "../components/topic/Topicpage"; 
import Cardspage from "../components/card/Cardspage";
import Settingspage from "../components/setting/Settingspage";
import Playpage from "../components/play/Playpage";
import NotFound from "../components/common/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/topic",
		element: <Topicpage />
	},
	{
		path: "/cards",
		element: <Cardspage />
	},
	{
		path: "/settings",
		element: <Settingspage />
	},
	{
		path: "/play",
		element: <Playpage />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
