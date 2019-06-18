import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store';


export class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = store.getState();
    this._onChangeInput = this._onChangeInput.bind(this);
    this._onClickBtn = this._onClickBtn.bind(this);
    this._StoreChange = this._StoreChange.bind(this);
    store.subscribe(this._StoreChange)
  }
  

  render() {
    return (
      <div style={{marginTop: '10px',marginLeft: '10px'}}>
        <h1>Hello World</h1>
        <Input 
          placeholder = "请输入ABB"
          value={this.state.inputValue} 
          style={{width: '300px',marginRight: '10px'}}
          onChange={this._onChangeInput}
        />
        <Button type="primary" onClick={this._onClickBtn}>提交</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
  _onChangeInput(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    }
    store.dispatch(action);
  }
  _StoreChange() {
    this.setState(store.getState())
  }
  _onClickBtn() {
    const action = {
      type: "add_todo_Item",
    }
    store.dispatch(action);
  }
}

export default TodoList