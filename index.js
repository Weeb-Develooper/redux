function todos(state=[], action){
  if(action.type == "ADD_TODO"){
    return state.concat([action.todo]);
  }

  return state;
}

function createStore(){
  const store;
  const listeners = [];

  const getState = () => this.state;
  
  const subscribe = (listener) => {
    listeners.push(listener);
  }


  return {
    getState,
    subscribe
  }
}

const store = createStore();
store.subscribe(() => console.log("the new state is", store.getState()));
store.subscribe(() => console.log('the state has changed'));