// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './myReact/react-dom'
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const FunCom = (props)=>{
    return <div>
        {props.name}
    </div>
}

const app = (
    <section>
        <h1>这是h1</h1>
        <a href="https://github.com/" >github</a>
        <div>==================</div>
        纯文本
        <FunCom name="函数组件"/>
    </section>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
