import "../helper/stylesheet/Performance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTable from "../components/CardTable/CardTable";
import CardLineChart from "../components/CardLineChart/CardLineChart";

function CombineCards({ tablehead, Data, labels, targetPerformance, options }) {
	return (
		<div className="employee">
			<div className="combinecard-table">
				<CardTable tablehead={tablehead} Data={Data} labels={labels} />
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

	return (
		<div className="performance-page">
			{Object.entries(data1).map(([key, value]) => (
				<CombineCards
					className="cardtable"
					tablehead={value.name}
					Data={value.task}
					labels={labels}
					targetPerformance={value.data}
					options={options}
				/>
			))}
		</div>
	);
}

export default Performance;
