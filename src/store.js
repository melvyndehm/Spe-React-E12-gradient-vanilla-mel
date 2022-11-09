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

/*
----- Redux dev tools -----
Utilisation du Redux dev tools pour voir passer les actions et leurs impacts sur le state
- installer l'extention navigateur https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
- ajouter le package npm : yarn add redux-devtools-extension
- configurer le store pour lui autoriser le debuggage :
ajouter devToolsEnhancer() en paramètre dans createStore.
*/
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

const store = createStore(
  reducer, // reducer
  devToolsEnhancer(), // enhancer ->* ne pas oublier les parenthèses !
);

export default store;
