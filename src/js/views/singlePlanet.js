import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/singlePlanets.css";
import { useParams } from "react-router-dom";

export const SinglePlanet = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getSinglePlanet(id)
    }, [])

    return (
        <div className="containersingleplanet">
            <div className="card3 d-flex">
                <img src={`https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/${id}.jpg?raw=true`} className="card-img-top img-planet" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{store.singlePlanet.result?.properties.name}</h5>
                    <p>Población: {store.singlePlanet.result?.properties.population}</p>
                    <p>Clima: {store.singlePlanet.result?.properties.climate}</p>
                    <p>Diametro: {store.singlePlanet.result?.properties.diameter}</p>
                    <p>Fecha de creación: {store.singlePlanet.result?.properties.created}</p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/">
                    <div className="btn btn-primary">Volver atrás</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};