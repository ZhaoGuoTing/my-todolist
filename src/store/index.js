import { createStore } from 'redux';
// 引入redux框架 调用 createStore 方法
import reducer from './reducer';
// 引入笔记本 reducer.js

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 定义 store 为 createStore 方法，创建了一个数据的公共存储仓库


export default store
// 把store 导出去