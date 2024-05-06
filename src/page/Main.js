import "../helper/stylesheet/Main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "./Dashboard";
import Individual_View from "./Individual_View";
import Performance from "./Performance";
import Pricing from "./Pricing";

// Layout component to render the sidebar, navbar, and content
const Layout = ({ children }) => {
	return (
		<div>
			<header>
				<Sidebar />
				<Navbar />
			</header>
			<body>
				<div className="content">{children}</div>
			</body>
		</div>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/individual_View" element={<Individual_View />} />
					<Route path="/performance" element={<Performance />} />
					<Route path="/pricing" element={<Pricing />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
