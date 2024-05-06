import "../helper/stylesheet/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Sales from "../components/Sales/Sales";
import Inventory from "../components/Inventory/Inventory";
import Bounce_Ratio from "../components/Bounce_Ratio/Bounce_Ratio";

function Dashboard() {
	const location = useLocation();
	const isOnSales = location.search.includes("sales");
	const isOnInventory = location.search.includes("inventory");
	const isOnBounceRatio = location.search.includes("bounce_ratio");

	return (
		<div>
			{isOnSales ? (
				<Sales />
			) : isOnInventory ? (
				<Inventory />
			) : isOnBounceRatio ? (
				<Bounce_Ratio />
			) : (
				<h1>Hello</h1>
			)}
		</div>
	);
}

export default Dashboard;
