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
  switch (action.type) {
    /* attention si on déclare une variable dans un case d'un switch
    il faut ajouter des accolades autour du case pour que cette
    variable soit scopée au case uniquement. */
    case 'TURN_LEFT': {
      // si on me demande de changer la direction
      // je part du state qu'on me donne
      // je renvoi un state modifié

      /* attention on ne modifie pas le state :
      on respecte le principe d'immutabilité, on va en creer un nouveau
      et renvoyer le nouveau
      state.direction = '270deg'; -> NON
      futurState pointe vers le MEME objet que state
      donc si je modifie futurState je modifie state
      et je ne veut pas modifier state !!!
      Donc au lieu de faire : let futurState = state;
      on fait : let futurState = {...state};
      */
      const futurState = {
        ...state, // on copie ce qu'il y avait dans le state
        direction: '270deg', // on fait notre modif
      };

      return futurState; // on returne ce nouveau state pour que le store le sauvegarde
    }

    case 'TURN_RIGHT':
      return {
        ...state,
        direction: '90deg',
      };

    default:
      return state;
  }
}

export default reducer;
