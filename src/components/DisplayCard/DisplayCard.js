import "./DisplayCard.css";
import Card from "react-bootstrap/Card";

function DisplayCard({ name, amount, icon, cardhead }) {
	return (
		<Card className="dcard shadow-sm p-3 mb-5 bg-body rounded">
			<Card.Subtitle className="mb-2 text-muted text-end">
				{cardhead}
			</Card.Subtitle>
			<div className="d-flex justify-content-between align-item-center card-center ">
				<div className="icon">{icon}</div>
				<h1>{amount}</h1>
			</div>
			<Card.Text className="cards-text">{name}</Card.Text>
		</Card>
	);
}

export default DisplayCard;
