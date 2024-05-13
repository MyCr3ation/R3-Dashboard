import "../helper/stylesheet/Analysis_View.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useMemo } from "react";
import CardTable from "../components/CardTable/CardTable";
import CardLineChart from "../components/CardLineChart/CardLineChart";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import { MdPeople } from "react-icons/md";
import { MdPreview } from "react-icons/md";

function DisplayReport({
	tablehead,
	targetPerformance,
	options,
	Data,
	labels,
}) {
	return (
		<div className="d-flex line-n-table">
			<div className="report-linechart">
				<CardLineChart
					tablehead={tablehead}
					options={options}
					targetPerformance={targetPerformance}
				/>
			</div>
			<div className="report-table">
				<CardTable title={tablehead} Data={Data} labels={labels} />
			</div>
		</div>
	);
}

function Analysis_View() {
	// const incentiveDetails = {
	// 	title: "Employee Name",
	// 	labels: ["Channel", "Company Share", "Profit Earned"],
	// 	data: [
	// 		{ Channel: "Repair Team", "Company Share": 2500, "Profit Earned": 25 },
	// 		{
	// 			Channel: "Repair Incentive",
	// 			"Company Share": 800,
	// 			"Profit Earned": 30,
	// 		},
	// 		{ Channel: "B2B Incentive", "Company Share": 600, "Profit Earned": 17 },
	// 		{
	// 			Channel: "Sales Incentive",
	// 			"Company Share": 2600,
	// 			"Profit Earned": 26,
	// 		},
	// 		{ Channel: "Sales Team", "Company Share": 1600, "Profit Earned": 15 },
	// 		{ Channel: "Team Pool", "Company Share": 4500, "Profit Earned": 40 },
	// 	],
	// };

	// const totalProfit = useMemo(() => {
	// 	const profit = incentiveDetails.data.reduce(
	// 		(acc, curr) => acc + curr["Profit Earned"],
	// 		0
	// 	);
	// 	return profit;
	// }, [incentiveDetails]);

	// const cardFooter = (
	// 	<Card.Footer className="d-flex justify-content-between incentive-details-cardfooter">
	// 		<p className="imp">Total Amount</p>
	// 		<div className="d-flex justify-content-between align-items-baseline total-amount">
	// 			<p className="imp">{totalProfit}</p>
	// 			<p>AED</p>
	// 		</div>
	// 	</Card.Footer>
	// );

	const week = {
		title: "Week Report",
		thead: ["Day", "People Visited"],
		data: [
			{
				Day: "Monday",
				"People Visited": 10,
			},
			{
				Day: "Tuesday",
				"People Visited": 20,
			},
			{
				Day: "Wednesday",
				"People Visited": 25,
			},
			{
				Day: "Thursday",
				"People Visited": 15,
			},
			{
				Day: "Friday",
				"People Visited": 19,
			},
			{
				Day: "Saturday",
				"People Visited": 28,
			},
		],
		dataset: {
			labels: [],
			datasets: [
				{
					label: "No of People Visited",
					data: [],
					fill: true,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.3,
				},
			],
		},
	};

	const month = {
		title: "Month Report",
		thead: ["Month", "People Visited"],
		data: [
			{
				Month: "Jan",
				"People Visited": 10,
			},
			{
				Month: "Feb",
				"People Visited": 20,
			},
			{
				Month: "Mar",
				"People Visited": 25,
			},
			{
				Month: "Apr",
				"People Visited": 15,
			},
			{
				Month: "May",
				"People Visited": 19,
			},
			{
				Month: "Jun",
				"People Visited": 28,
			},
			{
				Month: "Jul",
				"People Visited": 28,
			},
			{
				Month: "Aug",
				"People Visited": 36,
			},
			{
				Month: "Sep",
				"People Visited": 28,
			},
			{
				Month: "Oct",
				"People Visited": 40,
			},
			{
				Month: "Nov",
				"People Visited": 27,
			},
			{
				Month: "Dec",
				"People Visited": 28,
			},
		],
		dataset: {
			labels: [],
			datasets: [
				{
					label: "No of People Visited",
					data: [],
					fill: true,
					borderColor: "rgb(75, 192, 192)",
					tension: 0.3,
				},
			],
		},
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
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false, // Set to false if you don't want to display the legend
			},
		},
	};

	week.data.forEach((dayData) => {
		const visited = dayData["People Visited"];
		const day = dayData["Day"];
		week.dataset.datasets[0].data.push(visited);
		week.dataset.labels.push(day);
	});

	month.data.forEach((monthData) => {
		const visited = monthData["People Visited"];
		const month = monthData["Month"];
		month.dataset.datasets[0].data.push(visited);
		month.dataset.labels.push(month);
	});

	const employeeLeads = {
		title: "LEADS",
		labels: [
			"Lead ID",
			"Service",
			"Channel",
			"Tasks",
			"Assign Date",
			"Follow-up Date",
			"Status",
		],
		data: [
			{
				"Lead ID": 1,
				Service: "Sales",
				Channel: "Whatsapp",
				Tasks: 3,
				"Assign Date": "2023 - 10 - 1",
				"Follow-up Date": "2023 - 10 - 2",
				Status: "Completed",
			},
			{
				"Lead ID": 2,
				Service: "Repair",
				Channel: "Facebook",
				Tasks: 2,
				"Assign Date": "2023 - 10 - 1",
				"Follow-up Date": "2023 - 10 - 5",
				Status: "Pending",
			},
			{
				"Lead ID": "",
				Service: "",
				Channel: "",
				Tasks: "",
				"Assign Date": "",
				"Follow-up Date": "",
				Status: "",
			},
			{
				"Lead ID": "",
				Service: "",
				Channel: "",
				Tasks: "",
				"Assign Date": "",
				"Follow-up Date": "",
				Status: "",
			},
			{
				"Lead ID": "",
				Service: "",
				Channel: "",
				Tasks: "",
				"Assign Date": "",
				"Follow-up Date": "",
				Status: "",
			},
			{
				"Lead ID": "",
				Service: "",
				Channel: "",
				Tasks: "",
				"Assign Date": "",
				"Follow-up Date": "",
				Status: "",
			},
		],
	};

	return (
		<div>
			{/* <h2>INCENTIVE DETAILS</h2>
			<div className="incentive-details">
				<div className="incentive-details-card">
					<CardTable
						Data={incentiveDetails.data}
						labels={incentiveDetails.labels}
						title={incentiveDetails.title}
						showfooter={true}
						footerData={cardFooter}
					/>
				</div>
			</div> */}

			<DisplayReport
				title={week.title}
				Data={week.data}
				labels={week.thead}
				tablehead={week.title}
				options={options}
				targetPerformance={week.dataset}
			/>

			<DisplayReport
				title={month.title}
				Data={month.data}
				labels={month.thead}
				tablehead={month.title}
				options={options}
				targetPerformance={month.dataset}
			/>

			<div className="container">
				<div className="row justify-content-between">
					<DisplayCard
						name={"Weekly "}
						amount={10}
						icon={<MdPreview />}
						cardhead={"No of Visits Average"}
						className="col"
					/>
					<DisplayCard
						name={"Monthly "}
						amount={10}
						icon={<MdPreview />}
						cardhead={"No of Visits Average"}
						className="col"
					/>
					<DisplayCard
						name={"Weekly"}
						amount={10}
						icon={<MdPeople />}
						cardhead={"No of Leads Average"}
						className="col"
					/>
					<DisplayCard
						name={"Monthly "}
						amount={10}
						icon={<MdPeople />}
						cardhead={"No of Leads Average"}
						className="col"
					/>
				</div>
			</div>

			<h2>EMPLOYEE LEADS</h2>
			<div className="employee-leads">
				<div className="employee-leads-card">
					<CardTable
						Data={employeeLeads.data}
						labels={employeeLeads.labels}
						title={employeeLeads.title}
					/>
				</div>
			</div>
		</div>
	);
}

export default Analysis_View;
