//import react into the bundle
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import MyCounter from "./component/Counter.js";
MyCounter.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	fourth: PropTypes.number,
	third: PropTypes.number,
	second: PropTypes.number,
	first: PropTypes.number,
};

let countValue = 0;
setInterval(function () {
	const fourthValue = Math.floor(countValue / 1000);
	const thirdValue = Math.floor(countValue / 100);
	const secondValue = Math.floor(countValue / 10);
	const firstValue = Math.floor(countValue / 1);
	countValue++;

	ReactDOM.render(
		<MyCounter
			fourth={fourthValue}
			third={thirdValue}
			second={secondValue}
			first={firstValue}
		/>,
		document.querySelector("#app")
	);
}, 1000);
