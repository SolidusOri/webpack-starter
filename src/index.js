// Importo saludar desde el modulo componentes.js, un modulo es un archivo
import { saludar } from './js/componentes';
import './styles.css'; // Es necesario hacer esto para que el archivo pase al dist

const nombre = 'Robinson';
saludar(nombre);