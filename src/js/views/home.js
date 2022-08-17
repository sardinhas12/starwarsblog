import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Character} from "../component/characters.jsx";
import {Planet} from "../component/planets.jsx";
import {Vehicle} from "../component/vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Character />
		<Planet />
		<Vehicle />
	</div>
);
