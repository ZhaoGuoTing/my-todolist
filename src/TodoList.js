import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store';


export class TodoList extends Component {

  constructor(props) {
    super(props)

    this.state = store.getState();
    
  }
  

  render() {
    return (
      <div style={{marginTop: '10px',marginLeft: '10px'}}>
        <h1>Hello World</h1>
        <Input placeholder="Basic usage" value={this.state.inputValue} style={{width: '300px',marginRight: '10px'}}/>
        <Button type="primary">提交</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

export default TodoList