import React, {  } from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return(
    <div style={{marginTop: '10px',marginLeft: '10px'}}>
        <h1>Hello World</h1>
        <Input 
            placeholder = "请输入"
            value={props.inputValue} 
            style={{width: '300px',marginRight: '10px'}}
            onChange={props._onChangeInput}
        />
        <Button type="primary" onClick={props._onClickBtn}>提交</Button>
        <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => 
                <List.Item onClick={() => {props._onClickListItemDel(index)}}>{item}</List.Item>
            }
        />
    </div>
  )
}

export default TodoListUI
