const API = process.env.API;//de esta forma mandamos a llamar la variable de entorno que contiene la url de la api para no exploner en el codigo informacion que podria se sensible
//Funcion con la cual se obtiene la informacion de la API
const getData = async (id) => { 
    let apiURL;
    if (id) {   //condicion para traer varios personajes o solo el especificado en el id
        apiURL = `${API}${id}`; 
    } else {
        apiURL = API;
    }
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;