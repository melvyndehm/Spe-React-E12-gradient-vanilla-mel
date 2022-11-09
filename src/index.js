// == Imports
import { randomHexColor, generateSpanColor } from './utils';

/*
On importe le store, il nous met à dispo plusieurs méthodes :
- getState : pour recuperer le state du store
*/
import store from './store';

console.log(store);

// == State -> récupère depuis le store
console.log('state', store.getState());

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

// j'abonne mes rendus au changemlents du state
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    //state.nbColors += 2;
    //state.firstColor = randomHexColor();
    //state.lastColor = randomHexColor();
    // ui
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    //state.nbColors += 1;
    //state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    //state.nbColors += 1;
    //state.lastColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
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
