import React, { useContext, useEffect } from "react";
//import propTypes from "prop-types";
import { Context } from "../store/appContext";

//import { useParams } from "react-router";

export const Vehicle = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg-dark">
      <h1 className=" white mt-5 text-start text-danger pb-2 m-2">Vehicles</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto p-0">
        {store.vehicles.map((i, index) => {
          return (
            <>
              <div className="container">
                <div
                  className="card col-12 col-sm-3 mb-2 p-2"
                  Style="width: 18rem;"
                  key={index}
                >
                  <img
                    className="card-img-top"
                    src={
                      "https://starwars-visualguide.com/assets/img/vehicles/" +
                      i.uid +
                      ".jpg"
                    }
                    alt="Card image cap"
                  ></img>
                  <div className="card-body border border-secondary bg-dark text-white">
                    <h5 className="card-title">{i.name}</h5>
                    <p className="card-text">{i.url}</p>
                    <a
                      href="#"
                      className="btn btn-outline-info text-dark float-sm-start text-white"
                    >
                      Learn More
                    </a>
                    <button
                      type="button"
                      className="btn btn-light border border-warning border border-2"
                    >
                      <i className="far fa-heart float-lg-end "></i>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
