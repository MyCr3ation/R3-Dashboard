import "./Bounce_Ratio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

Chart.register(...registerables);

function Bounce_Ratio() {
	const data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Value",
				backgroundColor: "#898989",
				borderColor: "#898989",
				borderWidth: 1,
				hoverBackgroundColor: "black",
				hoverBorderColor: "black",
				data: [65, 59, 80, 81, 56, 55, 40, 34, 54, 56, 78, 34],
				barPercentage: 0.2,
				borderRadius: 8,
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
		<div className="bounce-ratio">
			<Card className="bounce-ratio-card">
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
						<div className="center-cardtitle">BOUNCE RATIO</div>
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
					<Bar
						data={data}
						className="h-100 w-100 d-inline-grid"
						options={options}
					/>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Bounce_Ratio;
