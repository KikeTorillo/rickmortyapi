//Funcion para validar la ruta a la que se quiere acceder
const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute;
        if (route === '/') {
            validRoute = route;
        } else {
            validRoute='/:id';
        }
        return validRoute;
    }
};

export default resolveRoutes;

