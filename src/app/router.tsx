import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/pages/Homepage";
import Topicpage from "../components/pages/Topicpage"; 
import NotFound from "../components/pages/NotFound";

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
		path: '*',
		element: <NotFound />
	}
]);
