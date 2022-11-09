/*
---- REDUCER -----
C'est l'assistant du store (la maitresse qui ecrit sur le tableau),
c'est un peu lui qui fait tout le boulot,
le store lui transmet 2 valeurs : action et state actuel,
Le reducer renvoie un nouveau state.

quand on fait createStore , le store apelle reducer
avec l'action : { type: "@@redux/INITb.w.j.n.q.f" }
et le state : undefined
il faut alors que le reducer renvoie le state initialisé
on prépare le state initial
*/
const initialState = {
  firstColor: '#f0f',
  lastColor: 'chartreuse',
  direction: '90deg',
  nbColors: 0,
};

/**
 * un réducteur est une fonction pure
 * @param state : state précédent (par défaut initialState)
 * @param action : fonction (par défaut objet vide)
 * @return : state mis à jour.
 */
function reducer(state = initialState, action = {}) {
  console.log(state, action);

  return state;
}

export default reducer;
