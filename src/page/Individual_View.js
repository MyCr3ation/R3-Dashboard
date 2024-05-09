import "../helper/stylesheet/Individual_View.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React, { useMemo } from "react";
import CardTable from "../components/CardTable/CardTable";

function Individual_View() {
	const incentiveDetails = {
		title: "Employee Name",
		labels: ["Channel", "Company Share", "Profit Earned"],
		data: [
			{ Channel: "Repair Team", "Company Share": 2500, "Profit Earned": 25 },
			{
				Channel: "Repair Incentive",
				"Company Share": 800,
				"Profit Earned": 30,
			},
			{ Channel: "B2B Incentive", "Company Share": 600, "Profit Earned": 17 },
			{
				Channel: "Sales Incentive",
				"Company Share": 2600,
				"Profit Earned": 26,
			},
			{ Channel: "Sales Team", "Company Share": 1600, "Profit Earned": 15 },
			{ Channel: "Team Pool", "Company Share": 4500, "Profit Earned": 40 },
		],
	};

	const totalProfit = useMemo(() => {
		const profit = incentiveDetails.data.reduce(
			(acc, curr) => acc + curr["Profit Earned"],
			0
		);
		return profit;
	}, [incentiveDetails]);

	const cardFooter = (
		<Card.Footer className="d-flex justify-content-between incentive-details-cardfooter">
			<p className="imp">Total Amount</p>
			<div className="d-flex justify-content-between align-items-baseline total-amount">
				<p className="imp">{totalProfit}</p>
				<p>AED</p>
			</div>
		</Card.Footer>
	);

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
			<h2>INCENTIVE DETAILS</h2>
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

export default Individual_View;
