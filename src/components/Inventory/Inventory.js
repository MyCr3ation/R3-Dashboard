import "./Inventory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

Chart.register(...registerables);

function Inventory() {
	const data = {
		labels: ["120 onwards", "90-120", "60-90", "30-60", "Less than 30"],
		datasets: [
			{
				label: "Value",
				backgroundColor: "#3DC32A",
				borderColor: "#3DC32A",
				borderWidth: 1,
				hoverBackgroundColor: "rgba(1,150,32,1)",
				hoverBorderColor: "rgba(1,150,32,1)",
				data: [65, 120, 80, 81, 56],
				barPercentage: 0.35,
			},
		],
	};

	const options = {
		scales: {
			x: {
				grid: {
					display: false, // Set to false to remove the x-axis grid lines
				},
			},
			y: {
				grid: {
					display: true, // Set to false to remove the y-axis grid lines
				},
				display: true, // Set to false to hide the y-axis labels
			},
		},
		plugins: {
			legend: {
				display: true, // Set to false if you don't want to display the legend
			},
		},
	};

	return (
		<div className="inventory">
			<Card className="inventory-card">
				<Card.Header className="bargraph-card-header">
					<Card.Title
						as="h4"
						className="d-flex justify-content-between align-item-center"
					>
						<div className="leftside-cardtitle">
							<div>BTD</div>
							<div>YTD</div>
							<div>MTD</div>
						</div>
						<div className="center-cardtitle">AGING</div>
						<div>
							<DropdownButton
								id="dropdown-basic-button"
								title="Category"
								className="dropdown-bargraph"
							>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
						</div>
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Bar className="h-100 w-100" data={data} options={options} />
				</Card.Body>
			</Card>
		</div>
	);
}

export default Inventory;
