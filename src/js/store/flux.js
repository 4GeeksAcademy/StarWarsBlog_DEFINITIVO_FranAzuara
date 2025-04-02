const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			singlePeople: {},
			singleVehicle: {},
			singlePlanet: {},
			favoritos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'people': data })
			},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'vehicles': data })
			},
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'planets': data })
			},
			getSinglePeople: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'singlePeople': data })
			},
			getSingleVehicles: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'singleVehicle': data })
			},
			getSinglePlanet: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
				const data = await response.json();
				const store = getStore();
				setStore({ ...store, 'singlePlanet': data })
			},
			addFavorito: async (item) => {
				const store = getStore();
				if (!store.favoritos.some(fav => fav.uid === item.uid)) {
					setStore({ favoritos: [...store.favoritos, item] });
				}
			},
			removeFavorito: (uid) => {
				const store = getStore();
				setStore({ 
					favoritos: store.favoritos.filter(fav => fav.uid !== uid) 
				});
			},
		}
	};
}

export default getState;
