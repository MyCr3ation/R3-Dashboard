import "../helper/stylesheet/Individual_View.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useMemo } from "react";

function IncentiveDetailsTable({ incentiveDetails }) {
	return (
		<div className="table-responsive">
			<table className="table incentive-details-table">
				<thead>
					<tr>
						<th>Channel</th>
						<th>Company Share</th>
						<th>Profit Earned</th>
					</tr>
				</thead>
				<tbody>
					{incentiveDetails.map((detail, index) => (
						<tr key={index}>
							<td className={detail.color ? "td-color" : ""}>{detail.name}</td>
							<td className={detail.color ? "td-color" : ""}>{detail.share}</td>
							<td className={detail.color ? "td-color" : ""}>
								{detail.profit}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function EmployeeLeadsTable({ employeeLeads, thead }) {
	return (
		<div className="table-responsive">
			<table className="table table-bordered employee-leads-table">
				<thead>
					<tr>
						{thead.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody className="employee-leads-tbody">
					{employeeLeads.map((detail, index) => (
						<tr key={index}>
							<td>{detail.id}</td>
							<td>{detail.service}</td>
							<td>{detail.channel}</td>
							<td>{detail.tasks}</td>
							<td>{detail.assign_date}</td>
							<td>{detail.follow_date}</td>
							<td>{detail.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

function Individual_View() {
	const incentiveDetails = [
		{ name: "Repair Team", share: 2500, profit: 25 },
		{ name: "Repair Incentive", share: 800, profit: 30, color: true },
		{ name: "B2B Incentive", share: 600, profit: 17 },
		{ name: "Sales Incentive", share: 2600, profit: 26, color: true },
		{ name: "Sales Team", share: 1600, profit: 15 },
		{ name: "Team Pool", share: 4500, profit: 40, color: true },
	];

	const thead = [
		"Lead ID",
		"Service",
		"Channel",
		"Tasks",
		"Assign Date",
		"Follow-up Date",
		"Status",
	];

	const totalProfit = useMemo(
		() => incentiveDetails.reduce((acc, curr) => acc + curr.profit, 0),
		[incentiveDetails]
	);

	const employeeName = "EMPLOYEE NAME";

	const employeeLeads = [
		{
			id: 1,
			service: "Sales",
			channel: "Whatsapp",
			tasks: 3,
			assign_date: "2023 - 10 - 1",
			follow_date: "2023 - 10 - 2",
			status: "Completed",
		},
		{
			id: 2,
			service: "Repair",
			channel: "Facebook",
			tasks: 2,
			assign_date: "2023 - 10 - 1",
			follow_date: "2023 - 10 - 5",
			status: "Pending",
		},
		{
			id: "",
			service: "",
			channel: "",
			tasks: "",
			assign_date: "",
			follow_date: "",
			status: "",
		},
		{
			id: "",
			service: "",
			channel: "",
			tasks: "",
			assign_date: "",
			follow_date: "",
			status: "",
		},
		{
			id: "",
			service: "",
			channel: "",
			tasks: "",
			assign_date: "",
			follow_date: "",
			status: "",
		},
		{
			id: "",
			service: "",
			channel: "",
			tasks: "",
			assign_date: "",
			follow_date: "",
			status: "",
		},
	];

	const currency = "AED";

	const cardtitle = "LEADS";

	return (
		<div>
			<h2>INCENTIVE DETAILS</h2>
			<div className="incentive-details">
				<Card className="incentive-details-card">
					<Card.Title className="individual-view-card-title">
						{employeeName}
					</Card.Title>
					<IncentiveDetailsTable incentiveDetails={incentiveDetails} />
					<Card.Footer className="d-flex justify-content-between incentive-details-cardfooter">
						<p className="imp">Total Amount</p>
						<div className="d-flex justify-content-between align-items-baseline total-amount">
							<p className="imp">{totalProfit}</p>
							<p>{currency}</p>
						</div>
					</Card.Footer>
				</Card>
			</div>

			<h2>EMPLOYEE LEADS</h2>
			<div className="employee-leads">
				<Card className="employee-leads-card">
					<Card.Title className="individual-view-card-title">
						{cardtitle}
					</Card.Title>
					<EmployeeLeadsTable employeeLeads={employeeLeads} thead={thead} />
				</Card>
			</div>
		</div>
	);
}

export default Individual_View;
