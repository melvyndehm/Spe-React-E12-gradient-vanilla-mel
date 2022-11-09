# Redux

## STORE : conteneur de state global
- Autorise la lecture du state via `store.getState()`
- Autorise la mise à jour du state via `store.dispatch(action)`
- Enregistre les callbacks des abonnés via `store.subscribe(callback)` ; les callback seront exécutées à chaque modification du state

## REDUCER : assistant du store qui défini et execute les instructions des **ACTIONS** de modification du state.
C'est une fonction qui recoit en paramètre le state actuel + une action et qui retourne un nouveau state modifié par l'action
```js
const reducer = (state, action) => {
	return newState;
}
```

## ACTION : objet décrivant l’intention 
```js
{ 
	type: 'NOM_ACTION', 
	payload: 'valeur'
}
```
Au dispatch de l’action, cet objet sera passé au **REDUCER**  qui exécutera les changements dans le state en fonction (`switch`) du type et avec les éventuels paramètres du **PAYLOAD**

### getState
Méthode du store qui retourne le state courant. (L'objet retourné ne doit pas être modifié)
```js
const { color } = store.getState();
```

### dispatch
Méthode du store qui prend en paramètre une action et se charge de la faire passer au réducer.
```js
store.dispatch({
  type: 'CHANGE_COLOR',
  color: '#F0F',
});
```

### subscribe
Méthode du store qui prend en paramètre une callback et la stocke dans sa "liste d'abonnées", cette callback sera alors executée à chaque dispatch.
```js
store.subscribe(() => {
  doSomethingWhenStateChange();
});
```


## Métaphore : 
tous les élèves peuvent voir les données directement sur le tableau (getState), si ils veulent changer une donnée ils ne peuvent pas directement écrire sur le tableau, ils lèvent la main et donne un papier (dispatch) ce qu’ils veulent modifier (action), l’instit fait la modif, les autres élèves qui regardaient le tableau (subscribed) voyent la modif et font le changement sur leur copie!
