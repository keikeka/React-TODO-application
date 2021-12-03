//Import REACT and PROPTYPES
import React from "react";
import PropTypes from "prop-types";

//Component for added elements
const Items = props => {
	return (
		<div className="p-3">
			<li className="col-xl-12 bg-light">{props.name}</li>
		</div>
	);
};

//Proptypes validation
Items.propTypes = {
	name: PropTypes.string
};

export default Items;
