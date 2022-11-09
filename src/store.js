/*

---- createStore ----
fonction de redux pour créer un store générique (un gestionnaire de state)

-> You should not be using the redux core package by itself today, except for learning purposes.
Redux nous encourage à utiliser redux-toolkit
qui est une surcouche avec des outils qui facilite l'utilisation.
https://redux-toolkit.js.org/
on ne veut pas l'utiliser ici donc on garde notre createStore
*/
import { legacy_createStore as createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

export default store;
