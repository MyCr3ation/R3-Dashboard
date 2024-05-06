import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./CardTable.css";

function CardTable({
	Data,
	labels,
	tablehead,
	showstyle,
	style,
	showfooter,
	footerData,
}) {
	return (
		<Card className="card-table shadow">
			<Card.Title className="tablehead"> {tablehead}</Card.Title>
			<Card.Body>
				<div className="table-responsive">
					<table className="table card-body-table table-striped">
						<tbody>
							<tr>
								{labels.map((label, index) => (
									<th key={index}>{label}</th>
								))}
							</tr>
							{showstyle ? (
								<>
									{Data.map((row, index) => (
										<tr key={index} className={style[index]}>
											{labels.map((label, labelIndex) => (
												<td key={labelIndex}>{row[label]}</td>
											))}
										</tr>
									))}
								</>
							) : (
								<>
									{Data.map((row, index) => (
										<tr key={index}>
											{labels.map((label, labelIndex) => (
												<td key={labelIndex}>{row[label]}</td>
											))}
										</tr>
									))}
								</>
							)}
						</tbody>
					</table>
				</div>
			</Card.Body>
			{showfooter ? (
				<Card.Footer className="tablefooter">
					<>{footerData}</>
				</Card.Footer>
			) : null}
		</Card>
	);
}

export default CardTable;
