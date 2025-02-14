// index.js 入口文件

// 引入 react 核心库
import React from 'react';
// 支持操作DOM
import ReactDOM from 'react-dom/client';
// 引入APP组件（根组件）
import App from './App';

// 创建根节点，把APP组件渲染到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 严格模式 
    <App />
);
