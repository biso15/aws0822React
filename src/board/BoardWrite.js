import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardWrite = ()=>{
    const navigate = useNavigate();

    const [board, setBoard] = useState(
        {
            subject : "",
            contents : "",
            writer : "",
            midx : "1035"
        }
    );

    const {subject, contents, writer, midx} = board;
    
    const onChange = (event)=>{
        const {value, name} = event.target;  // event.target에서 name과 value만 가져오기
        setBoard({  // input이 여러개일 수 있으니 배열로 담는다.
            ...board,
            [name] : value
        });
    };

    const saveBoard = async()=>{  // 비동기방식
        await axios.post("/board/boardWriteActionReact.aws", board).then(  // 백엔드쪽 DB 서버에 접속해야되서 Spring 서버를 잠시 사용
            (res)=>{
                alert("등록되었습니다.");
                navigate("/");  // 완료 후 root(home)으로 이동
            }
        );
    };	
	// 스프링의 BoardController.java
	// @ResponseBody
	// @PostMapping(value="boardWriteActionReact.aws")  // @RequestMapping(value="boardWriteActionReact.aws", method=RequestMethod.POST) 이것을 좀더 편리하게 @PostMapping으로 사용할 수 있다.
	// public JSONObject boardWriteActionReact(@RequestBody BoardVo bv) {
	// 	System.out.println("Midx: " + bv.getMidx());
		
	// 	JSONObject js = new JSONObject();

	// 	int value = boardService.boardInsert(bv);
	// 	System.out.println("value: " + value);
				
	// 	if(value == 2) {  // 성공
	// 		js.put("result", "success");
	// 	} else {
	// 		js.put("result", "fail");
	// 	}
		
	// 	return js;
	// }

    return(
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="subject" value={subject} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="contents" cols="50" rows="10" value={contents} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type="text" name="writer" value={writer} onChange={onChange} />
            </div>
            <br/>
            <input type="hidden" name="midx" value="1035" />
            <button type="button" onClick={saveBoard}>저장</button>
        </div>
    );
};

export default BoardWrite;