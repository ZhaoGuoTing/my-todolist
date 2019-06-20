import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store';
import TodoListUI from './TodoListUI';

export class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = store.getState(); // 获取 store 的所有数据内容
    this._StoreChange = this._StoreChange.bind(this);
    store.subscribe(this._StoreChange) // store 的数据发生改变，将新值传给组件
    
    this._onChangeInput = this._onChangeInput.bind(this);
    this._onClickBtn = this._onClickBtn.bind(this);
    this._onClickListItemDel = this._onClickListItemDel.bind(this);
  }
  _StoreChange() { // 当数据改变是 执行该函数
    this.setState(store.getState()) // 获取 新数据内容
  }

    render() {
        return (
          <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            _onChangeInput={this._onChangeInput}
            _onClickBtn={this._onClickBtn}
            _onClickListItemDel={this._onClickListItemDel}

          />
        )
    }

    _onChangeInput(e) {
        const action = {
            type: "change_input_value",
            value: e.target.value
        }
        store.dispatch(action); // 发送 action 给 store
    }
  
    _onClickBtn() {
        const action = {
        type: "add_todo_Item",
        }
        store.dispatch(action);
    }

    _onClickListItemDel(index) {
        const action = {
        type: "del_todo_Item",
        index
        }
        store.dispatch(action);
    }
}

export default TodoList