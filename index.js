function createStore(){
  const store;

  const getState = () => this.state;
  
  return {
    getState
  }
}