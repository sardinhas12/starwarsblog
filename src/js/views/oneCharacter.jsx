import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const OneCharacter = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	return (
		<div className="card mb-3" Style="max-width: 540px;">
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {"https://starwars-visualguide.com/assets/img/characters/" +i.theid + ".jpg"} 
    className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{i.name}</h5>
        <p className="card-text">{i.description}</p>
      </div>
    </div>
  </div>
</div>
	);
};

/*Single.propTypes = {
	match: PropTypes.object
};
*/