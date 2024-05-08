import ScrollRevealComponent from "./ScrollReveal";
import Home from "./components/Homepage/Home";
import Login from "./components/login";
import DashboardLayout from "./components/dashboard/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dashboard' element={<DashboardLayout />} />
				</Routes>
			</Router>
			<ScrollRevealComponent />
		</>
	);
};
export default App;
