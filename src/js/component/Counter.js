import React from "react";
import propTypes from "prop-types";
import "../../styles/index.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { func } from "prop-types";
const ClockIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="bi bi-clock-fill"
			viewBox="0 0 16 16">
			<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
		</svg>
	);
};
//create your first component
function MyCounter(props) {
	return (
		<div className="counter">
			<div>
				<ClockIcon />
			</div>
			<div className="four">{props.fourth % 10}</div>
			<div className="three">{props.third % 10}</div>
			<div className="two">{props.second % 10}</div>
			<div className="one">{props.first % 10}</div>
		</div>
	);
}

export default MyCounter;
