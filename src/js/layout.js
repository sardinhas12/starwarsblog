import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import {Planet} from "./component/planets.jsx";

import {Vehicle} from "./component/vehicles.jsx";
import {Details} from "./component/details.jsx";
import {Character} from "./component/characters.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {OneCharacter} from "./views/oneCharacter.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/details/:uid">
							<Details />
						</Route>
						<Route exact path="/character/:uid">
							<Character />
						</Route>
						<Route exact path="/planet/:uid">
							<Planet />
						</Route>
						<Route exact path="/vehicle/:uid">
							<Vehicle />
						</Route>
						<Route exact path="/oneCharacter/:theid">
							<OneCharacter />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
