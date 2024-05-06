import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardTable from "../components/CardTable/CardTable";

function Pricing() {
	const head = "Pricing";

	const data = {
		labels: ["ID", "Product Name", "R3 Factory", "Noon", "Amazon", "Cartlow"],
		product: [
			{
				ID: 1,
				"Product Name": "Product 1",
				"R3 Factory": 100,
				Noon: 100,
				Amazon: 100,
				Cartlow: 100,
			},
			{
				ID: 2,
				"Product Name": "Product iphone",
				"R3 Factory": 80,
				Noon: 100,
				Amazon: 105,
				Cartlow: 92,
			},
			{
				ID: 3,
				"Product Name": "Product 3",
				"R3 Factory": 105,
				Noon: 90,
				Amazon: 98,
				Cartlow: 100,
			},
		],
		compare: [],
	};
	data.product.forEach((product) => {
		const { Noon, Amazon, Cartlow, "R3 Factory": r3Factory } = product;
		const highestPrice = Math.max(Noon, Amazon, Cartlow);

		const priceDifference = Math.abs(r3Factory - highestPrice);
		const percentageDifference = (priceDifference / highestPrice) * 100;

		if (percentageDifference <= 5) {
			data.compare.push("table-danger");
		} else {
			data.compare.push("table-success");
		}
	});

	return (
		<div>
			<CardTable
				tablehead={head}
				labels={data.labels}
				Data={data.product}
				showstyle={true}
				style={data.compare}
				className="card-table-pricing"
			/>
		</div>
	);
}

export default Pricing;
