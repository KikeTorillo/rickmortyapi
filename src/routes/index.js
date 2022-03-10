import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Error404 from '../pages/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';
import logo from '../assets/images/cientifico.jpg';

const routes = {
    '/':Home,
    '/:id':Character,
    '/Contact': 'Contact',
};

 const router = async () => {
    const content = null || document.querySelector('#content');
    const header = null  || document.querySelector('#logo');
    header.src = logo;
    let hash = getHash(); //primero se obtiene el hash de en donde se encuentra
    let route = await resolveRoutes(hash); //se valida la ruta si es la raiz o un id
    let render; 
    if (routes[route]) {
        render=routes[route];
    } else {
        render=Error404;
    }
    content.innerHTML = await render();
}; 

export default router;