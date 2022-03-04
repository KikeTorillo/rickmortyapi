const API = process.env.API;//de esta forma mandamos a llamar la variable de entorno que contiene la url de la api para no exploner en el codigo informacion que podria se sensible
const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;