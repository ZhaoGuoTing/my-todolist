// defaultState 默认数据
const defaultState = {
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
  ],
}

// Reducers 接收(state， action)
// state = defaultState、是以前默认旧数据
// action、当前要执行的操作
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state)); // 定义 newState = 默认旧数据
    newState.inputValue = action.value; // 默认旧数据の.inputValue值 = action传过来の.新值
    return newState;  // 把新数据返回 stroe 替换旧数据
  }
  if (action.type === 'add_todo_Item') {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue !== '') {
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
    }
    return newState;
  }
    if (action.type === 'del_todo_Item') {
      const newState = JSON.parse(JSON.stringify(state)); 
      newState.list.splice(action.index, 1);
      return newState; 
    }
  return state;
}
