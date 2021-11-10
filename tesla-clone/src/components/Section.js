import React from 'react'
import styled from "styled-components"

function Section({leftBtnText,rightBtnText,title, description,backgroundImg}) {
    console.log(title)

    return (

        <Wrap Imgurl= {backgroundImg }>
            <ItemText>
                <h1> {title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                <RightButton>
                    {rightBtnText}

                </RightButton>
            </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background:orange;
    background-size :cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('/images/model-s.jpg');

    //버튼 위치를 깔아뭉개버리는 스타일 3인방..
    display:flex;
    flex-direction: column;
    justify-content: space-between;// vertical 간격 터지네.
    //천장 바닥 기준으로 요소들을 상하 n등분시켜버린거구나.
    // justify space-between >  Wrap이라는 것의 딱 자손( not 후손)
    // 기준으로 상하 배분해주는 것이다.
    align-items:center; //horizontal 가운데맞 춰짐.
    

    background-image:${props => `url("/images/${props.Imgurl}")`} 
`


const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;
`

const ButtonGroup =styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px){ 
        flex-direction: column;
    }


`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
   
    justify-content:center;
    align-items:center; 
    // 세로 
    opacity:0.85;
    border-radius:100px;
    text-transform:uppercase;
    font-size:12px;
    //마우스 올려둘때 속성
    cursor : pointer;
    margin: 8px;
    display:flex;

    `


const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`

const DownArrow= styled.img`
    // margin-top:30px;
    height: 40px;
    animation: animateDown infinite 1s;
    // infinite 는 횟수
    ///* 속기형 */ animation: name(identifier) | duration | timing-function 
    //| delay | iteration-count | direction | fill-mode
    // | play-state> [,...];

    overflow-x:hidden;


`

const Buttons = styled.div`
    // 이렇게 하나로 묶어서 해결하면 되는군! n이 3이라서 그런거야?
    //그러면 2로 다시 만들어주지! 하는 용도로 Buttons를 쓰는 것!
    // 애ㅣ
`