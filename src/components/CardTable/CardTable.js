import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./CardTable.css";
import { useState } from "react";

function CardTable({
	Data,
	labels,
	title,
	showstyle,
	style,
	showfooter,
	footerData,
	minTab,
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const recordsPerPage = 5;
	const lastIndex = currentPage * recordsPerPage;
	const firstIndex = lastIndex - recordsPerPage;
	const records = Data.slice(firstIndex, lastIndex);
	const npage = Math.ceil(Data.length / recordsPerPage);
	const numbers = [...Array(npage + 1).keys()].slice(1);

	return (
		<Card className="card-table shadow">
			<Card.Title className="tablehead">{title}</Card.Title>
			<Card.Body className="cardbody">
				<div className="table-responsive">
					<table className="table card-body-table table-striped">
						<tbody>
							<tr>
								{labels.map((label, index) => (
									<th key={index.id}>{label}</th>
								))}
							</tr>
							{showstyle ? (
								<>
									{records.map((row, index) => (
										<tr key={index.id} className={row[style]}>
											{labels.map((label, labelIndex) => (
												<td key={labelIndex.id}>{row[label]}</td>
											))}
										</tr>
									))}
								</>
							) : (
								<>
									{records.map((row, index) => (
										<tr key={index.id}>
											{labels.map((label, labelIndex) => (
												<td key={labelIndex.id}>{row[label]}</td>
											))}
										</tr>
									))}
								</>
							)}
						</tbody>
					</table>
				</div>
				<nav className="nav-pagination">
					<ul className="pagination">
						<li className="page-item">
							<a
								className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
								href="/"
								onClick={prePage}
							>
								&laquo;
							</a>
						</li>
						{numbers.map((n, i) => (
							<li className={`page-item ${currentPage === n ? "active" : ""}`}>
								<a
									className="page-link"
									onClick={() => changeCPage(n)}
									href="/"
								>
									{n}
								</a>
							</li>
						))}
						<li className="page-item">
							<a
								className={`page-link ${
									currentPage === npage ? "disabled" : ""
								}`}
								onClick={nextPage}
								href="/"
							>
								&raquo;
							</a>
						</li>
					</ul>
				</nav>
			</Card.Body>
			{showfooter ? <>{footerData}</> : null}
		</Card>
	);

	function prePage() {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	}

	function changeCPage(id) {
		setCurrentPage(id);
	}

	function nextPage() {
		if (currentPage !== npage) {
			setCurrentPage(currentPage + 1);
		}
	}
}

export default CardTable;
