import getData from '../utils/getData.js';
//Funcion que renderizara el home de la pagina con los 25 primeros personajes
const Home = async () => {
const characters = await getData();
    //se generara un map para obtener solo la informacion necesaria y se joineara vacio para que no se vean las comas en nuestro html debido 
    //a que ese es el join por defecto
    const view = `
<div class="Characters">
    ${characters.results.map(character => `
        <a class="Character-item" href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </a>
    `).join('')} 
    </div>
    `;
    return view;
};

export default Home;