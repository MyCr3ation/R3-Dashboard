import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTable from "../components/CardTable/CardTable";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

function Pricing() {
	const head = "Pricing";

	const data = {
		labels: [
			"ID",
			"Product Name",
			"R3 Factory",
			"Noon",
			"Amazon",
			"Cartlow",
			"Status",
		],
		product: [
			{
				ID: 1,
				"Product Name": "Product 1",
				"R3 Factory": 105,
				Noon: 100,
				Amazon: 100,
				Cartlow: 100,
				Status: <></>,
			},
			{
				ID: 2,
				"Product Name": "Product iphone",
				"R3 Factory": 80,
				Noon: 100,
				Amazon: 105,
				Cartlow: 92,
				Status: <></>,
			},
			{
				ID: 3,
				"Product Name": "Product 3",
				"R3 Factory": 120,
				Noon: 90,
				Amazon: 98,
				Cartlow: 100,
				Status: <></>,
			},
		],
	};

	data.product.forEach((product) => {
		const { Noon, Amazon, Cartlow, "R3 Factory": r3Factory } = product;
		const highestStatus = Math.max(Noon, Amazon, Cartlow);

		const statusDifference = r3Factory - highestStatus;
		const percentageDifference = (statusDifference / highestStatus) * 100;

		if (percentageDifference <= 5 && percentageDifference > 0) {
			product.Status = <BiSolidUpArrow style={{ color: "green" }} />; // Assign the arrow component to the Status property of the current product object
		} else if (percentageDifference > 5) {
			product.Status = <BiSolidUpArrow style={{ color: "red" }} />;
		} else {
			product.Status = <BiSolidDownArrow style={{ color: "red" }} />; // Assign the arrow component to the Status property of the current product object
		}
	});

	return (
		<div>
			<CardTable
				title={head}
				labels={data.labels}
				Data={data.product}
				className="card-table-pricing"
			/>
		</div>
	);
}

export default Pricing;
