import React, { useState, useEffect } from "react";
import "../helper/stylesheet/Performance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTable from "../components/CardTable/CardTable";
import CardLineChart from "../components/CardLineChart/CardLineChart";

function CombineCards({ tablehead, Data, labels, targetPerformance, options }) {
	return (
		<div className="employee">
			<div className="combinecard-table">
				<CardTable title={tablehead} Data={Data} labels={labels} />
			</div>
			<div className="combinecard-line-chart">
				<CardLineChart
					targetPerformance={targetPerformance}
					options={options}
					tablehead={tablehead}
				/>
			</div>
		</div>
	);
}

function Performance() {
	const [selectedName, setSelectedName] = useState("");
	const [filteredData, setFilteredData] = useState(null);

	const label = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thrusday",
		"Friday",
		"Saturday",
	];

	const data1 = {
		Hussain: {
			name: "Hussain",
			task: [
				{
					Category: "Sales",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair Difficult",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair QC",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Diagnosis",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "jsbdgfui",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Customer Handling",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
			],
			data: {
				labels: label,
				datasets: [
					{
						label: "Target",
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: true,
						borderColor: "rgb(75, 192, 192)",
						tension: 0.3,
					},
				],
			},
		},
		Mustafa: {
			name: "Mustafa",
			task: [
				{
					Category: "Sales",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair Difficult",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair QC",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Diagnosis",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Repair Easy",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
				{
					Category: "Customer Handling",
					Remarks: "Job231013",
					"Y.day": 4,
					"T.day": 4,
					Target: 25,
				},
			],
			data: {
				labels: label,
				datasets: [
					{
						label: "Target",
						data: [64, 70, 89, 80, 72, 55, 20],
						fill: true,
						borderColor: "rgb(75, 192, 192)",
						tension: 0.3,
					},
				],
			},
		},
	};

	const labels = ["Category", "Remarks", "Y.day", "T.day", "Target"];

	// Define the options variable if needed
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

	const names = Object.keys(data1);

	useEffect(() => {
		if (selectedName && data1[selectedName]) {
			setFilteredData(data1[selectedName]);
		} else {
			setFilteredData(null);
		}
	}, [selectedName]);

	return (
		<>
			<div className="form-group selection">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Select Name"
						list="list-names"
						id="input-datalist"
						value={selectedName}
						onChange={(e) => setSelectedName(e.target.value)}
					/>
					<div className="input-group-append">
						<span
							className="input-group-text"
							onClick={() => setSelectedName("")}
						>
							X
						</span>
					</div>

					<datalist id="list-names">
						{names.map((name) => (
							<option key={name} value={name}>
								{name}
							</option>
						))}
					</datalist>
				</div>
			</div>
			<div className="performance-page">
				{filteredData ? (
					<CombineCards
						className="cardtable"
						tablehead={filteredData.name}
						Data={filteredData.task}
						labels={labels}
						targetPerformance={filteredData.data}
						options={options}
					/>
				) : (
					names.map((name) => (
						<CombineCards
							key={name}
							className="cardtable"
							tablehead={data1[name].name}
							Data={data1[name].task}
							labels={labels}
							targetPerformance={data1[name].data}
							options={options}
						/>
					))
				)}
			</div>
		</>
	);
}

export default Performance;
