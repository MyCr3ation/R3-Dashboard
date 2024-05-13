import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import logo from "../../assets/R3FactoryLogo.png";

function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobileView(window.innerWidth <= 770);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const navItems = [
		{ path: "dashboard", label: "Dashboard", query: "?cat=sales" },
		{ path: "individual_view", label: "Individual View" },
		{ path: "performance", label: "Performance" },
		{ path: "pricing", label: "Pricing" },
	];

	const isActive = (path) => (location.search.includes(path) ? "active" : "");
	const isActivePath = (path) =>
		location.pathname.includes(path) ? "active" : "";
	const isOnDashboard = location.pathname.includes("dashboard");

	const currentPath =
		navItems.find((item) => location.pathname.includes(item.path)) ||
		navItems[0];

	return (
		<nav className="d-block navbar-expand-lg navbar-light bg-light fixed-top align-items-end navbar">
			<div className="navbar-items d-flex justify-content-between align-items-end full-nav">
				{isMobileView ? (
					<>
						<DropdownButton
							id="dropdown-basic-button"
							title={currentPath.label}
							className="dropdown-leftside"
						>
							{navItems.map((item) => (
								<Dropdown.Item
									key={item.path}
									className={`dropdown-item-nav-leftside ${isActivePath(
										item.path
									)}`}
									onClick={() => navigate(`/${item.path}${item.query || ""}`)}
								>
									{item.label}
								</Dropdown.Item>
							))}
						</DropdownButton>
						<img
							className="logo"
							src={logo}
							alt="Logo"
							onClick={() => navigate("/dashboard?cat=sales")}
						/>
					</>
				) : (
					<>
						<span className="navbar-brand col-md-4 mb-0 h1">
							{currentPath.label}
						</span>
						<div className="navbar-nav col-md-8 d-flex flex-row buttons">
							{currentPath.path === "dashboard" && (
								<>
									<button
										className={`${isActive("sales")}`}
										onClick={() => navigate("/dashboard?cat=sales")}
									>
										SALES
									</button>
									<button
										className={`${isActive("inventory")}`}
										onClick={() => navigate("/dashboard?cat=inventory")}
									>
										INVENTORY
									</button>
									<button
										className={`${isActive("bounce_ratio")}`}
										onClick={() => navigate("/dashboard?cat=bounce_ratio")}
									>
										BOUNCE RATIO
									</button>
								</>
							)}
						</div>
					</>
				)}
				{isOnDashboard && isMobileView && (
					<DropdownButton
						id="dropdown-basic-button"
						title={<MdOutlineMenu />}
						className="dropdown-rightside"
					>
						<Dropdown.Item
							className={`dropdown-item-nav-rightside ${isActive("sales")}`}
							onClick={() => navigate("/dashboard?cat=sales")}
						>
							SALES
						</Dropdown.Item>
						<Dropdown.Item
							className={`dropdown-item-nav-rightside ${isActive("inventory")}`}
							onClick={() => navigate("/dashboard?cat=inventory")}
						>
							INVENTORY
						</Dropdown.Item>
						<Dropdown.Item
							className={`dropdown-item-nav-rightside ${isActive(
								"bounce_ratio"
							)}`}
							onClick={() => navigate("/dashboard?cat=bounce_ratio")}
						>
							BOUNCE RATIO
						</Dropdown.Item>
					</DropdownButton>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
