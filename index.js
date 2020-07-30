
function createStore(reducer){
  const state;
  const listeners = [];

  const getState = () => state;
  
  const subscribe = (listener) => {
    listeners.push(listener);
  }

  const dispatch = (action) => {
    state = reducer(state,action);

    listeners.forEach((listener) => listener());
  }


  return {
    getState,
    subscribe,
    dispatch
  }
}

function todos(state=[], action){
  if(action.type == "ADD_TODO"){
    return state.concat([action.todo]);
  }

  return state;
}


const store = createStore(todos);
store.subscribe(() => console.log("the new state is", store.getState()));
store.subscribe(() => console.log('the state has changed'));