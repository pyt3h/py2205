import { combineReducers } from "redux";
import { useSelector, useStore } from "react-redux";
import { useMemo } from "react";

export function createReducer(reducer, prefix='') {
  if(typeof reducer === 'object'){
    let obj = {};
    for(const [key, value] of Object.entries(reducer)) {
      obj[key] = createReducer(value, prefix + key + '/');
    }
    if(prefix !== '') obj = combineReducers(obj);
    return obj;

  }else if(typeof reducer === 'function') {
    return (state=reducer(undefined, {type:'', payload:{}}), action) => {
      if(action.type === prefix + 'setState') {
        return {...state, ...action.payload};
      }

      if((action.type || '').startsWith(prefix)) {
        const actionType = action.type.substring(prefix.length);
        return reducer(state, {...action, type: actionType});
      }
      
      return state;
    }

  }else if(reducer === 'default') {
    return (state={}, action) => {
      if(action.type === prefix + 'setState') {
        return {...state, ...action.payload};
      }
      return state;
    }

  }
}

function stateEqual(state1, state2) {
  let keys = new Set([...Object.keys(state1), ...Object.keys(state2)]);
  for(let key of keys) {
    if(state1[key] !== state2[key]) {
      return false;
    }
  }
  return true;
}

function stateDeepEqual(state1, state2) {
  if(state1 instanceof Array) {
    if(!(state2 instanceof Array) || state1.length !== state2.length) {
      return false;
    }
    for(let i = 0; i < state1.length; i++){
      if(!stateDeepEqual(state1[i], state2[i])) return false;
    }
    return true;
  }

  if(state1 instanceof Object) {
    if(!(state2 instanceof Object)) return false;
    let keys = new Set([...Object.keys(state1), ...Object.keys(state2)]);
    for(let key of keys) {
      if(!stateDeepEqual(state1[key], state2[key])) {
        return false;
      }
    }
    return true;
  }

  return state1 === state2;
}

export function useMapSelector(mapFunc, deepCompare=false) {
  return useSelector(mapFunc, deepCompare?stateDeepEqual:stateEqual);
}

export function useSliceSelector(namespace, keys, deepCompare=false) {
  let preKeys = namespace.split('/');
  return useMapSelector(globalState => {
      let pageStates = globalState;
      preKeys.forEach(preKey => pageStates = pageStates[preKey] || {});
      let selectedStates = [];
      keys.forEach(key => selectedStates.push(pageStates[key]));
      return selectedStates;
    }
  ,deepCompare);
}

class SliceStore {
  constructor(namespace, store) {
    this._namespace = namespace;
    this._store = store;
  }

  dispatch(action) {
    this._store.dispatch({
      type: `${this._namespace}/${action.type}`, 
      payload: action.payload
    });
  }

  dispatchGlobal(action) {
    this._store.dispatch(action);
  }

  setState(payload) {
    this._store.dispatch({
      type: `${this._namespace}/setState`, 
      payload: payload
    });
  }

  getState() {
    let keys = this._namespace.split('/');
    let state = this._store.getState();
    keys.forEach(key => state = state[key] || {});
    return state; 
  }

  getGlobalState() {
    return this._store.getState();
  }
}

export function useSliceStore(namespace) {
  let store = useStore();
  return useMemo(() => new SliceStore(namespace, store), [store, namespace]);
}

export function copyObject(obj){
  return {...obj};
}

export function copyArray(arr){
  return [...arr];
}

export function mergeObject(obj1, obj2) {
  return {...obj1, ...obj2};
}

export function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2];
}