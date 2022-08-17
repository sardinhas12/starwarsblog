import { Router } from "react-router";
import { useParams } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      vehicles: [],
      planets: [],
      OneCharacter: []
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getAllCharacters: () => {
        const store = getStore();
        fetch("https://www.swapi.tech/api/people", {
          method: "GET",
          header: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })

          .then((data) => {
            console.log( "fetch data all characters",data);
            setStore({ characters: data.results });
            console.log("this is the store", store.people);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAllPlanets: () => {
        const Store = getStore();
        fetch("https://www.swapi.tech/api/planets/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log("fetch data all planets", data);
            setStore({ planets: data.results });
            console.log("this is the store", store.planet);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getAllVehicles: () => {
        const Store = getStore();
        fetch("https://www.swapi.tech/api/vehicles/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log("fetch data all vehicles", data);
            setStore({ vehicles: data.results });
            console.log("this is the store", store.vehicle);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getOneCharacter: () => {
        const Store = getStore();
        fetch("https://www.swapi.tech/api/characters/ + uid", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            console.log("fetch data one character", data);
            setStore({ oneCharacter: data.results });
            console.log("this is the store", store.oneCharacter);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
};

export default getState;
