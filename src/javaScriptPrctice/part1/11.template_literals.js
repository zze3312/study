/*
 * 11. 템플릿 리터럴 : 역따옴표(`)로 묶은 문자열
 *  >> 기본적인 사용법
 *      1) 한줄 문자열
 *          let str = `3 * 1 = 3`;
 *          console.log(str);
 *          --------------------------------------------
 *          >> 3 * 1 = 3
 *          --------------------------------------------
 *
 *      2) 여러줄 문자열
 *          let str = `3 * 1 = 3
 *          3 * 2 = 6
 *          3 * 3 = 9`;
 *
 *          console.log(str);
 *          --------------------------------------------
 *          >> 3 * 1 = 3
 *          >> 3 * 2 = 6
 *          >> 3 * 3 = 9
 *          --------------------------------------------
 *  >> 보간표현식 : 템플릿 리터럴에 플레이스 홀더 ${...}를 넣을 수 있음
 *      1) 변수
 *          let firstNumber = 3;
 *          let secondNumber = 1;
 *
 *          let str = `${firstNumber} * ${secondNumber} = 3`;
 *          console.log(str);
 *          --------------------------------------------
 *          >> 3 * 1 = 3
 *          --------------------------------------------
 *
 *      2) 표현식
 *          let firstNumber = 3;
 *          let secondNumber = 1;
 *
 *          let str = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber};
 *          console.log(str);
 *          --------------------------------------------
 *          >> 3 * 1 = 3
 *          --------------------------------------------
 * */
