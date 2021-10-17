import React, { Component } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseballHooks extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(), // ex: [1, 3, 5, 7]
        tries: [], //push 사용하면 안됨
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...tries, {try: value, result: '홈런!' }],
            });
            alert('게임을 다시 실행합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else { // 답 틀렸으면
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { //10번 이상 틀렸을 때
                this.setState({
                    Result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`, // state set은 비동기 
                });
                alert('게임을 다시 실행합니다.');
                this.setState({
                    value: '', 
                    answer: getNumbers(), 
                    tries: [],                  
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                    strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                    ball += 1;
                    }
                }
                this.setState({
                    tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
                    value: '',
                });                

            } 

        }
    };

    onChangeInput = (e) => {
        console.log(answer);
        this.setState({
            value: e.target.value,
        });

    };

    // fruits = [
    //     { fruit: '사과', taste: '맛있다'},
    //     { fruit: '바나나', taste: '시다'},
    //     { fruit: '포도', taste: '달다'},
    //     { fruit: '귤', taste: '맛있다'},
    //     { fruit: '배', taste: '맛있다'},
    //     { fruit: '밤', taste: '맛없다'},
    // ];



    render() {
        const { result, value, tries } = this.state
        return (
            <div>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    {tries.map( (v, i) => {
                        return (
                            <Try key={'${i + 1}차 시도 : '} tryInfo={v} />
                        );
                    })}
                </ul>
            </div>
        );

    }


};

export default NumberBaseballHooks;
