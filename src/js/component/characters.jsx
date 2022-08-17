import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import propTypes from "prop-types";
import { Context } from "../store/appContext";

//import { useParams } from "react-router";

export const Character = () => {
  const { store, actions } = useContext(Context);
 
  return (
    <div className="card bg-dark">
      <h1 className=" white mt-5 text-start text-danger pb-2 m-2">
        Characters
      </h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto p-0">
        {store.characters.map((i, index) => {
          return (
            <div className="container">
              <div
                className="card col-12 col-sm-3 mb-2 p-2"
                Style="width: 18rem;"
                key={index}
              >
                <img
                  className="card-img-top"
                  src={
                    "https://starwars-visualguide.com/assets/img/characters/" +
                    i.uid +
                    ".jpg"
                  }
                  alt="Card image cap"
                ></img>
                <div className="card-body border border-secondary bg-dark text-white">
                  <h5 className="card-title">{i.name}</h5>
                  <p className="card-text">{i.url}</p>

                  <Link to={"/OneCharacterView/" + i.uid}
                    className="btn btn-outline-info float-sm-start text-white"
                  >
                    Learn More
                  </Link >
                  <button
                      className="btn btn-light border border-warning border border-2">
                        <i className = "far fa-heart float right"></i>
                    </button>
                  </div>
                </div>
              </div>
          )
        })}
    </div>
  </div>
 )
};
  

        
