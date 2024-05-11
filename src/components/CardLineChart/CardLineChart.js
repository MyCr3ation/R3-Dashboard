import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./CardLineChart.css";
import { Line } from "react-chartjs-2";

function CardLineChart({ tablehead, targetPerformance, options }) {
	return (
		<Card className="card-line-chart shadow-sm">
			<Card.Title className="tablehead">
				{tablehead}'s Weekly Performance
			</Card.Title>
			<Card.Body className="h-100 w-100">
				<Line
					data={targetPerformance}
					className="h-100 w-100 d-inline-grid"
					options={options}
				/>
			</Card.Body>
		</Card>
	);
}

export default CardLineChart;
