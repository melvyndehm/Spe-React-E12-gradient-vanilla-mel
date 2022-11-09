// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import { actionChangeFirstColor } from './actions';

/*
On importe le store, il nous met à dispo plusieurs méthodes :
- getState : pour recuperer le state du store
- dispacth : pour envoyer une intention de modif de state
- subscribe : pour abonner une callback aux changements du state
*/
import store from './store';

// == Rendu dans le DOM
function renderNbColors() {
  console.log('renderNbColors appelé');
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  console.log('renderGradient appelé');
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  console.log('renderColors appelé');
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// j'abonne mes rendus au changements du state
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // intention : changer la first + changer la last

    // on peut dispatcher plusieurs action
    // onpeut dispatcher plusierus fois une meme action
    store.dispatch({
      type: 'CHANGE_FIRST_COLOR', // l'intention
      payload: randomHexColor(), // payload : nouvelle couleur
    });

    store.dispatch({
      type: 'CHANGE_LAST_COLOR', // l'intention
      payload: randomHexColor(), // payload : nouvelle couleur
    });
    /*
    on peut utiliser notre action creator
    au lieu de taper l'objet à la main
    store.dispatch(actionChangeFirstColor(randomHexColor()));
    */
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    // dispatcher une intention

    const newColor = randomHexColor(); // on genere une nouvelle couleur
    store.dispatch({
      type: 'CHANGE_FIRST_COLOR', // l'intention
      payload: newColor, // payload : nouvelle couleur
    });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'CHANGE_LAST_COLOR',
      payload: randomHexColor(),
    });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    /* on ne modifie pas le state directement on demande au store
    en lui dispatchant une intention
    state.direction = '270deg';

    on dispatch une action : c'est un objet de la forme
    { type: 'change la direction par gauche' }
    par convention on écrit la valeur du type en SCREAMING_SNAKE_CASE :
    MAJUSCULES avec des underscore (c'est pas obligatoire)
    */
    store.dispatch({ type: 'TURN_LEFT' });

    /* plus besoin de re executer nous meme le rendu,
    on a abonné nos rendus aux changements du store
    renderGradient();
    renderColors();
    */
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    /* dispatcher une action vers le store */
    store.dispatch({ type: 'TURN_RIGHT' });
  });
