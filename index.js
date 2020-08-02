
function createStore(reducer){
  let state;
  let listeners = [];

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

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

function addTodo(todo){
  return {
    type:ADD_TODO,
    todo
  }
}

function removeTodo(id){
  return {
    type:REMOVE_TODO,
    id
  }
}

function toggleTodo(id){
  return {
    type:TOGGLE_TODO,
    id
  }
}

function addGoal(goals){
  return {
    type:ADD_GOAL,
    goal
  }
}

function removeGoal(id){
  return {
    type:REMOVE_GOAL,
    id
  }
}

function todos(state=[], action){
  if(action.type == ADD_TODO){
    return state.concat([action.todo]);
  }else if(action.type == REMOVE_TODO){
    return state.filter((todo)=> todo.id !== action.id);
  }else if(action.type == TOGGLE_TODO){
    return state.map((todo) => todo.id !== action.id ? todo : Object.assign({},todo,{complete : !todo.complete}));
  }else{
    return state;
  }
}

function goals(state=[], action){
  if(action.type == ADD_GOAL){
    return state.concat([action.goal]);
  }else if(action.type == REMOVE_GOAL){
    return state.filter((goal)=> goal.id !== action.id);
  }else{
    return state;
  }
}

