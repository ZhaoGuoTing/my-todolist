// defaultState 默认数据
const defaultState = {
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
  ],
}

// reducer 可以接受 state， 但是绝不能修改state
// state = defaultState,是图书馆的默认旧数据、
// action 是借书人的那句话
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)); // 定义 newState = 默认旧数据
    newState.inputValue = action.value; // 默认旧数据の.inputValue值 = action传过来の.新值
    return newState;  // 做一个 返回
  }
  if (action.type === 'add_todo_Item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}
