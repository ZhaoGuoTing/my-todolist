const defaultState = {
  // data: []
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
  ],
}

// reducer 可以接受 state， 但是绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todo_Item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}
// state 是整个图书馆的数据
// action 是借书人的那句话