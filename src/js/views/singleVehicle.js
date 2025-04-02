import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singleVehicles.css";
import { useParams } from "react-router-dom";

export const SingleVehicle = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getSingleVehicles(id)
	}, [])

	return (
		<div className="containersinglevehicle">
			<div className="card2 d-flex">
				<img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${id}.jpg?raw=true`} className="card-img-top img-vehicle" alt="..." />
				<div className="card-body">

					<h5 className="card-title">{store.singleVehicle.result?.properties.name}</h5>
					<p>Velocidad máxima atmosférica: {store.singleVehicle.result?.properties.max_atmosphering_speed}</p>
					<p>Grupo: {store.singleVehicle.result?.properties.crew}</p>
					<p>Modelo: {store.singleVehicle.result?.properties.model}</p>
					<p>Fecha de creación: {store.singleVehicle.result?.properties.created}</p>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link to="/">
					<div className="btn btn-primary">Volver atrás</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
