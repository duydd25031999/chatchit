import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/pages/Homepage";
import NotFound from "../components/pages/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
		children: [],
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
