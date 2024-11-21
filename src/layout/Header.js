import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{

    return(  // 변수를 선언해서 리턴할수도 있지만 리턴 안에 직접 넣어도 됨
        <header>
            {/* a 태그 대신 Link 태그를 사용 */}
            <Link to="/">홈</Link>&nbsp;&nbsp;
            <Link to="/boardWriteReact">게시판</Link>
            <hr/>
        </header>
    );
};

export default Header;