//funcion para obtener la posicion en la que nos encontramos en la pagina
const getHash = () => {
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}
    export default getHash;