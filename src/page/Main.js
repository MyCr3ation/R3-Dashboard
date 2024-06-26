import React, { useEffect } from "react";
import "../helper/stylesheet/Main.css";
import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
	Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "./Dashboard";
import AnalysisView from "./Analysis_View";
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

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<ScrollToTop />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/analysis_view" element={<AnalysisView />} />
					<Route path="/performance" element={<Performance />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route
						path="/"
						element={<Navigate to="/dashboard?cat=sales" replace />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
