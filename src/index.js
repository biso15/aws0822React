import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './layout/Header';  // .js 생략 가능
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 라우터로 데이터(패킷)을 보내겠다.
  <BrowserRouter>
    {/* 컴포넌트로 화면이 구성됨 */}
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);