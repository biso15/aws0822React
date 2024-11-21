import Home from './board/Home';
import BoardWrite from './board/BoardWrite';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   컨텐츠 부분이 출력되는 부분입니다.
    // </div>

    // Routes는 공유기 역할. path가 포트 역할
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/boardWriteReact" element={<BoardWrite/>} />
    </Routes>
  );
}

export default App;
