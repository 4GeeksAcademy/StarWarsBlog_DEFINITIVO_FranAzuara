import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlePeople.css";
import { useParams } from "react-router-dom";

export const SinglePeople = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getSinglePeople(id)
	}, [])

	return (
		<div className="containersinglepeople">
			<div className="card1 d-flex">
				<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/${id}.jpg?raw=true`} className="card-img-top img-people" alt="..." />
				<div className="card-body">

					<h5 className="card-title">{store.singlePeople.result?.properties.name}</h5>
					<p>Color del cabello: {store.singlePeople.result?.properties.hair_color}</p>
					<p>Color de los ojos: {store.singlePeople.result?.properties.eye_color}</p>
					<p>Altura: {store.singlePeople.result?.properties.height} cm</p>
					<p>Peso: {store.singlePeople.result?.properties.mass} Kg</p>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link to="/">
					<div className="btn btn-primary">Volver atrás</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
