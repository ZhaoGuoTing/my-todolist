const defaultState = {
  // data: []
  inputValue: '请输入',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ],
}

// reducer 可以接受 state， 但是绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // console.log(state, action);
  return state;
}
// state 是整个图书馆的数据
// action 是借书人的那句话