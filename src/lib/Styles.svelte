<style global>
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

/*!
 * Milligram v1.3.0
 * https://milligram.github.io
 *
 * Copyright (c) 2017 CJ Patoilo
 * Licensed under the MIT license
 */
 *,*:after,*:before{box-sizing:inherit}html{box-sizing:border-box;font-size:75%}body{font-size:1.6em;font-weight:300;letter-spacing:.01em;line-height:1.6}blockquote{border-left:0.3rem solid #d1d1d1;margin-left:0;margin-right:0;padding:1rem 1.5rem}blockquote *:last-child{margin-bottom:0}.button,button,input[type='button'],input[type='reset'],input[type='submit']{background-color:#9b4dca;border:0.1rem solid #9b4dca;border-radius:.4rem;color:#fff;cursor:pointer;display:inline-block;font-size:1.1rem;font-weight:700;height:3.8rem;letter-spacing:.1rem;line-height:3.8rem;padding:0 3.0rem;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap}.button:focus,.button:hover,button:focus,button:hover,input[type='button']:focus,input[type='button']:hover,input[type='reset']:focus,input[type='reset']:hover,input[type='submit']:focus,input[type='submit']:hover{background-color:#606c76;border-color:#606c76;color:#fff;outline:0}.button[disabled],button[disabled],input[type='button'][disabled],input[type='reset'][disabled],input[type='submit'][disabled]{cursor:default;opacity:.5}.button[disabled]:focus,.button[disabled]:hover,button[disabled]:focus,button[disabled]:hover,input[type='button'][disabled]:focus,input[type='button'][disabled]:hover,input[type='reset'][disabled]:focus,input[type='reset'][disabled]:hover,input[type='submit'][disabled]:focus,input[type='submit'][disabled]:hover{background-color:#9b4dca;border-color:#9b4dca}.button.button-outline,button.button-outline,input[type='button'].button-outline,input[type='reset'].button-outline,input[type='submit'].button-outline{background-color:transparent;color:#9b4dca}.button.button-outline:focus,.button.button-outline:hover,button.button-outline:focus,button.button-outline:hover,input[type='button'].button-outline:focus,input[type='button'].button-outline:hover,input[type='reset'].button-outline:focus,input[type='reset'].button-outline:hover,input[type='submit'].button-outline:focus,input[type='submit'].button-outline:hover{background-color:transparent;border-color:#606c76;color:#606c76}.button.button-outline[disabled]:focus,.button.button-outline[disabled]:hover,button.button-outline[disabled]:focus,button.button-outline[disabled]:hover,input[type='button'].button-outline[disabled]:focus,input[type='button'].button-outline[disabled]:hover,input[type='reset'].button-outline[disabled]:focus,input[type='reset'].button-outline[disabled]:hover,input[type='submit'].button-outline[disabled]:focus,input[type='submit'].button-outline[disabled]:hover{border-color:inherit;color:#9b4dca}.button.button-clear,button.button-clear,input[type='button'].button-clear,input[type='reset'].button-clear,input[type='submit'].button-clear{background-color:transparent;border-color:transparent;color:#9b4dca}.button.button-clear:focus,.button.button-clear:hover,button.button-clear:focus,button.button-clear:hover,input[type='button'].button-clear:focus,input[type='button'].button-clear:hover,input[type='reset'].button-clear:focus,input[type='reset'].button-clear:hover,input[type='submit'].button-clear:focus,input[type='submit'].button-clear:hover{background-color:transparent;border-color:transparent;color:#606c76}.button.button-clear[disabled]:focus,.button.button-clear[disabled]:hover,button.button-clear[disabled]:focus,button.button-clear[disabled]:hover,input[type='button'].button-clear[disabled]:focus,input[type='button'].button-clear[disabled]:hover,input[type='reset'].button-clear[disabled]:focus,input[type='reset'].button-clear[disabled]:hover,input[type='submit'].button-clear[disabled]:focus,input[type='submit'].button-clear[disabled]:hover{color:#9b4dca}code{background:#f4f5f6;border-radius:.4rem;font-size:86%;margin:0 .2rem;padding:.2rem .5rem;white-space:nowrap}pre{background:#f4f5f6;border-left:0.3rem solid #9b4dca;overflow-y:hidden}pre>code{border-radius:0;display:block;padding:1rem 1.5rem;white-space:pre}hr{border:0;border-top:0.1rem solid #f4f5f6;margin:3.0rem 0}input[type='email'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='url'],textarea,select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid #d1d1d1;border-radius:.4rem;box-shadow:none;box-sizing:inherit;height:3.8rem;padding:.6rem 1.0rem;width:100%}input[type='email']:focus,input[type='number']:focus,input[type='password']:focus,input[type='search']:focus,input[type='tel']:focus,input[type='text']:focus,input[type='url']:focus,textarea:focus,select:focus{border-color:#9b4dca;outline:0}select{background:url('data:image/svg+xml;utf8,<svg xmlns="https://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat;padding-right:3.0rem}select:focus{background-image:url('data:image/svg+xml;utf8,<svg xmlns="https://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="#9b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')}textarea{min-height:6.5rem}label,legend{display:block;font-size:1.6rem;font-weight:700;margin-bottom:.5rem}fieldset{border-width:0;padding:0}input[type='checkbox'],input[type='radio']{display:inline}.label-inline{display:inline-block;font-weight:normal;margin-left:.5rem}.container{margin:0 auto;max-width:112.0rem;padding:0 2.0rem;position:relative;width:100%}.row{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0;width:100%}.row.row-no-padding{padding:0}.row.row-no-padding>.column{padding:0}.row.row-wrap{flex-wrap:wrap}.row.row-top{-webkit-box-align:start;align-items:flex-start}.row.row-bottom{-webkit-box-align:end;align-items:flex-end}.row.row-center{-webkit-box-align:center;align-items:center}.row.row-stretch{-webkit-box-align:stretch;align-items:stretch}.row.row-baseline{-webkit-box-align:baseline;align-items:baseline}.row .column{display:block;-webkit-box-flex:1;flex:1 1 auto;margin-left:0;max-width:100%;width:100%}.row .column.column-offset-10{margin-left:10%}.row .column.column-offset-20{margin-left:20%}.row .column.column-offset-25{margin-left:25%}.row .column.column-offset-33,.row .column.column-offset-34{margin-left:33.3333%}.row .column.column-offset-50{margin-left:50%}.row .column.column-offset-66,.row .column.column-offset-67{margin-left:66.6666%}.row .column.column-offset-75{margin-left:75%}.row .column.column-offset-80{margin-left:80%}.row .column.column-offset-90{margin-left:90%}.row .column.column-10{-webkit-box-flex:0;flex:0 0 10%;max-width:10%}.row .column.column-20{-webkit-box-flex:0;flex:0 0 20%;max-width:20%}.row .column.column-25{-webkit-box-flex:0;flex:0 0 25%;max-width:25%}.row .column.column-33,.row .column.column-34{-webkit-box-flex:0;flex:0 0 33.3333%;max-width:33.3333%}.row .column.column-40{-webkit-box-flex:0;flex:0 0 40%;max-width:40%}.row .column.column-50{-webkit-box-flex:0;flex:0 0 50%;max-width:50%}.row .column.column-60{-webkit-box-flex:0;flex:0 0 60%;max-width:60%}.row .column.column-66,.row .column.column-67{-webkit-box-flex:0;flex:0 0 66.6666%;max-width:66.6666%}.row .column.column-75{-webkit-box-flex:0;flex:0 0 75%;max-width:75%}.row .column.column-80{-webkit-box-flex:0;flex:0 0 80%;max-width:80%}.row .column.column-90{-webkit-box-flex:0;flex:0 0 90%;max-width:90%}.row .column .column-top{align-self:flex-start}.row .column .column-bottom{align-self:flex-end}.row .column .column-center{-ms-grid-row-align:center;align-self:center}@media (min-width: 40rem){.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;margin-left:-1.0rem;width:calc(100% + 2.0rem)}.row .column{margin-bottom:inherit;padding:0 1.0rem}}a{color:#9b4dca;text-decoration:none}a:focus,a:hover{color:#606c76}/* dl,ol,ul{list-style:none;margin-top:0;padding-left:0} */dl dl,dl ol,dl ul,ol dl,ol ol,ol ul,ul dl,ul ol,ul ul{font-size:90%;;padding: .5rem 0 .5rem 1.75rem}ol{list-style:decimal inside}ul{list-style:circle outside}.button,button,dd,dt,li{margin-bottom:1.0rem}fieldset,input,select,textarea{margin-bottom:1.5rem}blockquote,dl,figure,form,ol,p,pre,table,ul{/* margin:0 */}blockquote,dl,ol,pre,ul{padding: .5rem 0 .5rem 1.75rem}table{border-spacing:0;width:100%}td,th{border-bottom:0.1rem solid #e1e1e1;padding:1.2rem 1.5rem;text-align:left}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}b,strong{font-weight:bold}p{margin-top:0}h1,h2,h3,h4,h5,h6{font-weight:300;letter-spacing:-.1rem;margin-bottom:2.0rem;margin-top:0}h1{font-size:3.6rem;line-height:1.25}h2{font-size:2.8rem;line-height:1.2}h3{font-size:2.2rem;line-height:1.2}h4{font-size:1.8rem;letter-spacing:-.08rem;line-height:1.2}h5{font-size:1.5rem;letter-spacing:-.05rem;line-height:1.2}h6{font-size:1.25rem;letter-spacing:0;line-height:1.2}img{max-width:100%}.clearfix:after{clear:both;content:' ';display:table}.float-left{float:left}.float-right{float:right}


/*! 
tranzit css by me@vhollo.hu
*/

/* @import '/styles/fonts/zingd2/zingd2.css'; */
@font-face {
  font-family: 'Zing';
  src: url('/styles/fonts/zingd2/ZingRustD2Demo-Base.woff#ZingRustD2Demo-Base') format('woff');
  font-weight: normal;
  font-style: normal;
}

label a span.menuicon { display: none; }
/* html:not([debug]) {
  background: #FB6A0F; } */

/* MILLIGRAM OVERWRITE */
/* STYLE */

h1, h2, h3, h4, h5, h6 {
  font-weight: 300;
  letter-spacing: -.1rem;
  margin-bottom: 2em;
  margin-top: 4em;
  /* filter: drop-shadow(2px 2px 0px snow); */
}
h3 {
  font-style: italic;
}

section:first-of-type {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 1600 800'%3E%3Cpath fill='%23FF7' d='M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z'/%3E%3Cpath fill='%235ff' d='M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z'/%3E%3Cg fill='%23FFF'%3E%3Cpath d='M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z'/%3E%3Ccircle cx='1013.7' cy='153.9' r='7.1'/%3E%3Ccircle cx='1024.3' cy='132.1' r='7.1'/%3E%3Ccircle cx='1037.3' cy='148.9' r='7.1'/%3E%3Cpath d='M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z'/%3E%3C/g%3E%3C/svg%3E");
}

section:first-of-type > div {
  text-align: center;
}
section:first-of-type > div figure {
  margin: 5rem 0;
}

article p {
  text-align: justify;
  hyphens: auto;
}

article img, section:first-of-type > div img {
  /* box-shadow: 4px 4px; */
  max-width: 75%;
  height: auto;
  margin: 0 auto;
  filter: drop-shadow(4px 4px 0px snow);
}
article figure {
  margin: 0;
}

body > h1 {
  position: absolute;
  margin-top: -15vw;
  font-size: 10vw;
}
section > img {
  /* position: sticky; */
  width: 100vw;
  max-width: 100vw;
  height: 20vh;
  min-height: 120px;
  /* object-fit: cover; */
  margin: 0 -2rem;
  animation: hue-rotate 30s infinite;
  /* filter: grayscale(85%); */
}

html {
  overflow-x: hidden;
  width: 100vw;
}

body {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
  position: relative;
  /* padding-bottom: 64px; */
}

.hidden, [hidden] {
  display: none !important;
}

:root {
  --nav: #FB6A0F;
  --dark: rgb(34, 23, 16);
  --link: #D5D918;
  --bg: #98d1e1;
}

a {
  color: var(--link);
  animation: hue-rotate 30s infinite;
  text-decoration: none;
  text-shadow: 1px 1px var(--dark);
}
a:hover {
  color: var(--nav);
}

header {
  display: none;
}

footer {
  display: none;
}
/* header label, footer label {
  height: 100%;
  text-align: center;
} */

#checked0:checked ~ * header label.checked1:before {
  /* text-decoration: underline; */
  border-bottom: solid snow;
}
#checked1:checked ~ * label.checked1:before {
  /* text-decoration: underline; */
  border-bottom: solid snow;
}
#checked2:checked ~ * label.checked2:before {
  /* text-decoration: underline; */
  border-bottom: solid snow;
}
label.checked2 + details {
  display: none;
}
#checked3:checked ~ * label.checked3:before {
  /* text-decoration: underline; */
  border-bottom: solid snow;
}
#checked4:checked ~ * label.checked4:before {
  /* text-decoration: underline; */
  border-bottom: solid snow;
}

/* section label span {
  animation: hue-rotate 30s infinite;
}
 */
svg path, svg circle {
  fill: #D5D918 !important;
}

html:not([debug]) input[type="radio"], html:not([debug]) input[type="checkbox"] {
  -webkit-appearance: none;
  margin: 0;
  display: none;
}

main {
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: margin 1s;
  margin-left: 0;
}

.navcontent {
  min-height: 2000px;
}

section {
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  flex-basis: 100vw;
  flex-grow: 0;
  flex-shrink: 0;
  overflow-x: hidden;
  /* background-color: #33a3c3; */
  background-color: var(--bg);
  color: var(--dark);
  height: 100vh;
  overflow-y: scroll;
}

/* section:nth-child(odd) {
  background-color: #D5D918;
} */

section > label {
  background: #2579B7;
  white-space: nowrap;
  z-index: 2;
}

/* label + div {
  padding: 3em 2em 1em 1em; } */

/* main > label ~ * {
    padding: 3rem;
} */

#logo {
  content: url("/images/tranzit-stamp_11.png");
  transform: rotate(5deg);
}

/* MENU */

table, thead, tbody, tfoot {
  display: block;
}
tr {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
td, th {
  /* order: 0; */
  padding: 1rem 1rem 1rem 0;
  font-weight: 300;
}
td:nth-child(2), th:nth-child(2) {
  order: 1;
  padding: 1rem 0 1rem 1rem;
  text-align:right; 
  white-space: nowrap;
}
td:empty {
  display: none;
}

td p, th p {
  margin: 0;
}

tbody td p:first-of-type {
  font-weight: bolder;
  text-transform: uppercase;
}
thead {
  font-weight: lighter;
}
thead tr:first-of-type td:first-of-type p, thead tr:first-of-type td:nth-of-type(3) p {
  /* font-weight: lighter; */
  font-size: 3.6rem;
  font-family: 'Zing';
  text-rendering: optimizeLegibility;
  text-shadow: -4px 3px snow;
}
/* #menutext {
  font-size: 3.5rem;
  font-family: 'Zing';
  text-rendering: optimizeLegibility;
  text-shadow: -4px 3px snow;
} */
h1 {
  /*font-size: 3.5rem;*/
  font-family: 'Zing';
  text-rendering: optimizeLegibility;
  text-shadow: -4px 3px snow;
  margin-bottom: 0;
}
/* #menutext + p {
  margin-top: -3rem;
} */

#menudate ~ h3 {
  margin-bottom: 0;
}
#menudate ~ table, iframe {
  margin-top: 4rem;
}

thead tr:first-of-type [lang] {
  /* text-transform: uppercase; */
}
thead tr+tr p {
  margin-top: -3rem;
}

td > p span {
  color: var(--nav);
  animation: hue-rotate 30s infinite;
}

th p:first-of-type {
  text-transform: uppercase;
  /* font-weight: lighter; */
  filter: drop-shadow(-2px 2px snow);
}

/* @media (min-height: 401px) {
  section {
  }
}
 */

/* aside {
  padding: .5rem;
} */
aside pre {
  display: flex;
  justify-content: space-between;
  padding: .5rem 1.75rem .5rem;
  margin: 1rem;
}

article img {
  max-width: 50%;
  float: right;
  padding-left: 1rem;
}

@media (max-width: 666px) {
  label a span.menuicon { display: block; }
  footer {
    display: flex;
    position: fixed;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='https://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-color: #aa3333;
    width: 100%;
    height: 64px;
    bottom: 0;
    z-index: 1;
  }
  footer label {
    flex: auto;
    padding: 8px 0;
    font-variant: all-small-caps;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* line-height: initial; */
    color: snow;
  }
  footer label svg {
    animation: hue-rotate 30s infinite;
  }
  footer label:before {
    /* content: ''; */
    /* outline-style: dotted;
    outline-width: 8px;
    outline-offset: -4px; */
    /* position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0; */
    /* background-color: var(--nav); */
    /* background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='https://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-color: #aa3333; */
    /* border-style: dotted dotted none;
    border-width: 6px; */
    /* border-radius: 56px;
    z-index: -1; */
  }
 
  section {
    padding: 0 2rem 10rem;
  }
  section > label {
    position: sticky;
    top: 0;
    /* padding: .25em; */
    transform: rotate(-2deg);
    width: 100vw;
    margin-top: -2rem;
    margin-left: -2rem;
    text-align: center;
    filter: drop-shadow(2px 2px 0px snow);
  }
  label span, label a span {
    height: 24px;
    margin: 0 auto;
    /* color: black; */
  }
  main {
    width: 400vw;
  }
  #checked1:checked ~ main {
    margin-left: -100vw;
  }
  #checked2:checked ~ main {
    margin-left: -200vw;
  }
  #checked3:checked ~ main {
    margin-left: -300vw;
  }
  #checked4:checked ~ main {
    margin-left: -400vw;
  }

  /* label + div {
    padding-bottom: 100vh;
  } */
  /* footer + #logo {
    display: none; } */
  label #logo {
    height: 64px;
    margin: -12px auto 0;
  }
  /* footer + #logo {
    width: 10%;
    position: absolute;
    left: 45%;
    padding-bottom: 1em;
    bottom: 50vh;
    animation: hue-stop;
  } */
}

@media (min-width: 667px) {
  header {
    display: flex;
    align-items: center;
    /* width: 100vw; */
    /* height: 56px; */
    top: 0;
    z-index: 1;
    flex-direction: column;
    margin: 5rem;
  }
  details label {
    display: inline-block;
  }
  details a:last-child {
    margin-bottom: .75rem;
  }
  header details a {
    display: block;
  }
  header label {
    position: relative;
    padding: .5rem;
    margin-bottom: .75rem;
    animation: hue-rotate 30s infinite;
    /* background-color: #2579B7; */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 4 4'%3E%3Cpath fill='%23FB6A0F' fill-opacity='0.5' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    background-attachment: fixed;
    color: var(--dark);
  }
  header label span {
    color: snow;
    /* animation: hue-rotate 30s infinite; */
    text-shadow: 1px 2px var(--dark);
  }
  header label:before {
    content: '';
    border-top: dotted;
    border-width: 4px;
    position: absolute;
    width: 100%;
    height: 75%;
    top: 0;
    left: 0;
    box-sizing: content-box;
    color: var(--dark);
  }
  #checked2:checked ~ * label.checked2 {
    display:none;
  }
  #checked2:checked ~ * label.checked2 + details {
    display:block;
  }


  main {
    width: 200vw;
    padding-left: 50vw;
    overflow-x: hidden;
  }
  section {
    width: 50vw;
    flex-basis: 50vw;
    padding: 4rem;
  }
  section:first-of-type {
    position: absolute;
    z-index: 1;
    /* top: 0; */
    left: 0;
    direction: rtl;
  }
  section:first-of-type > div {
    direction: ltr;
  }
  section > label {
    position: fixed;
    margin-left: -6rem;
    transform: rotate(3deg);
    bottom: 0;
  }
  section:first-of-type > label {
    bottom: 2.4rem;
    margin-right: -6rem;
    transform: rotate(-2deg);
  }
  section > img {
    margin: -4rem -4rem 0 calc(-50vw - 4rem);
  }
  section:first-of-type > img {
    margin: -4rem calc(-50vw - 4rem) 0 -4rem;
    animation: hue-rotate 40s infinite;
  }
  article img {
    max-width: 50%;
    float: right;
    padding-left: 1rem;
  }
  /* label + div {
    padding-boittom: 64px;
  } */
  #logo {
    width: 10%;
    position: absolute;
    bottom: -10vh;
    left: 45%;
    /* padding-bottom: 1em; */
  }
  #checked2:checked ~ main {
    margin-left: -50vw;
  }
  #checked3:checked ~ main {
    margin-left: -100vw;
  }
  #checked4:checked ~ main {
    margin-left: -150vw;
  }
}

summary.butt {
  position: relative;
  padding: .5rem;
  margin: 5rem auto 5rem;
  -webkit-animation: hue-rotate 30s infinite;
  animation: hue-rotate 30s infinite;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 4 4'%3E%3Cpath fill='%23FB6A0F' fill-opacity='0.5' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  background-attachment: fixed;
  color: snow;
  text-shadow: 1px 2px var(--dark);
  text-transform: uppercase;
  font-weight: bold;
  outline: solid 2px;
  text-align: center;
  width: fit-content;
  cursor: default;
}
[open] summary {
  outline: none;
}
.past {
margin-top: 5rem;
}
.past img {
filter: drop-shadow(6px 8px 0px snow);
}
.past h2 {
margin: 0;
}

/* @media (max-height: 400px) and (min-width: 668px) {
  section:first-of-type {
    height: 100%;
  }
}
*/
/* @media (min-height: 401px) and (min-width: 668px) {
  section {
    padding-bottom: 30vh;
  }
}
 */

 /* Milligram & reset overrides */
td, th {
  border-bottom-style: none;
}

/* Beautify */
@-webkit-keyframes hue-rotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@keyframes hue-rotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@-webkit-keyframes hue-stop {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(0);
  }
}

@keyframes hue-stop {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(0);
  }
}

#lang:not(:checked) ~ * [lang="en"] {
  display: none;
}

#lang:checked ~ * [lang="hu"] {
  display: none;
}

#lang:not(:checked) ~ header label span.hu {
  /* border-bottom: 2px solid snow; */
  text-decoration: underline;
}

#lang:checked ~ header label span.en {
  /* border-bottom: 2px solid snow; */
  text-decoration: underline;
}

#lang:not(:checked) ~ footer label span.hu {
  /* border-bottom: 2px solid snow; */
  text-decoration: underline;
}

#lang:checked ~ footer label span.en {
  /* border-bottom: 2px solid snow; */
  text-decoration: underline;
}




/* ADMIN */

/*.loginLogin legend {
  display: none;
}
*/

/* DEBUGGING */
html[debug] header {
  display: none;
}

html[debug] footer {
  display: none;
}
</style>