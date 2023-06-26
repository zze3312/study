module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
};

/*
 * Perttier Options
 * printWidth : 화면가로값? / : <int>
 * tabWidth : tab크기 / : <int>
 * useTabs : blank > tab 변경 / : <bool>
 * semi : semicolon(;) 유무 / : <bool>
 * singleQuote : 문자열 입력시 single quotation(') 사용여부(true 시 single 선사용) / : <bool>
 * quoteProps : quotation 통일화? / : "<as-needed|consistent|preserve>"
 *   >> as-needed : key의 name에 quotation이 필수가 아니면 제거
 *   >> consistent : key의 name중 하나라도 quotation이 필수로 필요하면 전체에 quotation 추가 / 모두 필요하지 않으면 제거
 *   >> preserve : 사용자설정에 맞춤(자동변경x)
 * jsxSingleQuote : jsx파일에서 singleQuote설정 사용여부 / : <bool>
 * trailingComma : 객체나 배열이 여러줄일때 comma사용여부 / : "<none|es5|all>"
 * bracketSpacing : 객체 사용시 bracket에 blank 추가여부 / : <bool>
 *   >> true example : { foo: bar }
 *   >> false example : {foo: bar}
 * bracketSameLine : HTML, JSX, Vue, Angular에서 마지막에 '>' 줄바꿈 사용여부 / : <bool>
 *   >> true example : <button
 *                      className="prettier-class"
 *                      id="prettier-id"
 *                      onClick={this.handleClick}>
 *                      Click Here
 *                      </button>
 *  >> false example : <button
 *                      className="prettier-class"
 *                      id="prettier-id"
 *                      onClick={this.handleClick}
 *                     >
 *                       Click Here
 *                     </button>
 * jsxBracketSameLine : jsx파일에서 bracketSameLine 사용여부 / : <bool>
 * arrowParens : 화살표 함수 괄호 추가 여부 / "<always|avoid>"
 *   >> // Input
 *   >> const fn = (x) => y => x + y;
 *   >> // Prettier 2.0
 *   >> const fn = (x) => (y) => x + y;
 * htmlWhitespaceSensitivity : html 에서의 공백 처리방법 / : "<css|strict|ignore>"
 *   >> css: css display 속성에 따라 formatting
 *   >> strict: 모든 공백을 인정 (모든 요소를 inlime 요소처럼 formatting)
 *   >> ingnore: 모든 공백을 인정하지 않음 (모든 요소를 block 요소처럼 formatting)
 * */
