import "./Sidebar.css";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { GiSpeedometer } from "react-icons/gi";
import { IoMdPricetags } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/R3FactoryLogo.png";

function Sidebar() {
	const navigate = useNavigate(); // Hook for navigation
	const location = useLocation(); // Hook for getting current location

	// Function to check if the current path matches the provided path
	const isActive = (path) => {
		return location.pathname.includes(path) ? "active" : "";
	};

	return (
		<div className="sidebar">
			<div className="company">
				<div className="logo-div">
					<img src={logo} className="logo-sidebar" alt="" />
				</div>

				<span className="navbar-brand mb-0 h1 m-1 company-name">
					R3 Factory
				</span>
			</div>
			<div className="second-part">
				<button
					className={`${isActive("/dashboard")} lists`}
					onClick={() => navigate("/dashboard?cat=sales")}
				>
					<RxDashboard />
					Dashboard
				</button>
				{/* Individual View link */}
				<button
					className={`${isActive("/individual_view")} lists`}
					onClick={() => navigate("/individual_view")}
				>
					<IoEyeOutline />
					Individual View
				</button>
				{/* Performance link */}
				<button
					className={`${isActive("/performance")} lists`}
					onClick={() => navigate("/performance")}
				>
					<GiSpeedometer />
					Performance
				</button>
				<button
					className={`${isActive("/pricing")} lists`}
					onClick={() => navigate("/pricing")}
				>
					<IoMdPricetags />
					Pricing
				</button>
			</div>
		</div>
	);
}

export default Sidebar;
