import "./Sales.css";
import DisplayCard from "../DisplayCard/DisplayCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCoins } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Chart, registerables } from "chart.js";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

Chart.register(...registerables);

function Sales() {
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
				label: "Sales",
				backgroundColor: "#35AE47",
				borderColor: "#35AE47",
				borderWidth: 1,
				hoverBackgroundColor: "#4ED43B",
				hoverBorderColor: "#4ED43B",
				data: [65, 59, 80, 81, 56, 55, 40, 34, 54, 56, 78, 34],
				barPercentage: 0.75,
				categoryPercentage: 0.25,
				borderRadius: 5,
			},
			{
				label: "Target",
				backgroundColor: "#3D3C37", // Set a different background color
				borderColor: "#3D3C37", // Set a different border color
				borderWidth: 1,
				hoverBackgroundColor: "#898989",
				hoverBorderColor: "#898989",
				data: [40, 65, 70, 55, 75, 60, 45, 23, 56, 67, 34, 78], // Add your second dataset values
				barPercentage: 0.75,
				categoryPercentage: 0.25,
				borderRadius: 5,
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

	const salesCategory = [
		{ channel: "Showroom", sales: 3000, gp: 2200, np: 1600 },
		{ channel: "E-Commerce", sales: 2300, gp: 1800, np: 1400 },
		{ channel: "Wholesale", sales: 2700, gp: 1500, np: 1200 },
		{
			channel: "Repair Service",

			sales: 1400,
			gp: 1700,
			np: 800,
		},
	];

	return (
		<>
			<h1>Today</h1>
			<div className="d-flex justify-content-around today-cards">
				<DisplayCard
					name={"Sales"}
					amount={7200}
					icon={<FaCoins style={{ fontSize: "35px" }} />}
				/>
				<DisplayCard name={"GP"} amount={2500} icon={<AiOutlineStock />} />
				<DisplayCard name={"NP"} amount={2000} icon={<FaHandHoldingUsd />} />
			</div>
			<h1>Yesterday</h1>
			<div className="d-flex justify-content-around today-cards">
				<DisplayCard
					name={"Sales"}
					amount={7200}
					icon={<FaCoins style={{ fontSize: "35px" }} />}
				/>
				<DisplayCard name={"GP"} amount={2500} icon={<AiOutlineStock />} />
				<DisplayCard name={"NP"} amount={2000} icon={<FaHandHoldingUsd />} />
			</div>
			<div className="bargraph">
				<Card className="bargraph-card shadow-sm">
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
							<div className="center-cardtitle">Sales Report</div>
							<div>
								<DropdownButton
									id="dropdown-basic-button"
									title="Category"
									className="dropdown-bargraph"
								>
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">
										Another action
									</Dropdown.Item>
									<Dropdown.Item href="#/action-3">
										Something else
									</Dropdown.Item>
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
			<div className="grid d-flex justify-content-center">
				<Card className="card-sales-category-table shadow-sm">
					<Card.Header className="data-cardheader">
						<Card.Title
							as="h4"
							className="d-flex justify-content-between align-item-center card-title"
						>
							<div className="leftside-cardtitle">
								<div>BTD</div>
								<div>YTD</div>
								<div>MTD</div>
							</div>
							<div className="center-cardtitle">Sales Category</div>
							<div className="rightside-cardtitle">
								<div>All</div>
								<div>B2B</div>
								<div>B2C</div>
							</div>
						</Card.Title>
					</Card.Header>
					<Card.Body>
						<table className="table table-responsive sales-category-table">
							<thead>
								<tr>
									<th>Sales Channel</th>
									<th>Sales</th>
									<th>GP</th>
									<th>NP</th>
								</tr>
							</thead>
							<tbody>
								{salesCategory.map((detail, index) => (
									<tr key={index}>
										{/* Add it into css */}
										<td className="text-truncate" style={{ maxWidth: "40px" }}>
											{detail.channel}
										</td>
										<td>{detail.sales}</td>
										<td>{detail.gp}</td>
										<td>{detail.np}</td>
									</tr>
								))}
							</tbody>
						</table>
					</Card.Body>
				</Card>
			</div>
		</>
	);
}

export default Sales;
