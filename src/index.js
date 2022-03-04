//se importa para que el css se concte al html ya que no lo tenemos que conectar desde el index.html sino que webpack lo hace por nosotros asi cono el archivo.js
import './styles/styles.css'; 
import router from './routes/index';

window.addEventListener('load',router);
window.addEventListener('hashchange',router);