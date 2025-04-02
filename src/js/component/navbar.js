import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const handleRemove = (event, uid) => {
        event.preventDefault();
        event.stopPropagation();
        actions.removeFavorito(uid);
    };
	return (
		<nav className="navbar navbar-light bg-dark mb-1 fixed-top">
			<Link to="/">
				<img className="ms-5" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" style={{ width: "80px" }} />
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos ({store.favoritos.length})
				</button>
				<ul className="dropdown-menu dropdown-menu-end me-3">
                    {store.favoritos.length === 0 ? (
                        <li className="dropdown-item text-muted">No hay favoritos</li>
                    ) : (
                        store.favoritos.map((fav, index) => (
                            <li className="dropdown-item d-flex justify-content-between" key={index}>
                                {fav.name}
                                <button 
                                    className="btn btn-sm btn-close ms-2" 
                                    onClick={(event) => handleRemove(event, fav.uid)}>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
			</div>
		</nav>
	);
};
