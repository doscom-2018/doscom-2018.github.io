/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/marked-directive@1.0.5/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"./moo.esm.js";var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof t<"u"||typeof self<"u"&&self;function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}};!function(e,t,n){function r(e){var t=this,n=function(){var e=4022871197,t=function(t){t=String(t);for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function a(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var n=new r(e),s=t&&t.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+11102230246251565e-32*(2097152*i()|0)},i.quick=i,s&&("object"==typeof s&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:this.alea=s}(0,r);const a=n(r.exports),s=e.compile({WhiteSpace:{match:/[\t\v\f\ufeff\p{Zs}]+/u,lineBreaks:!0},Lines:{match:/\r?\n|[\r\u2028\u2029]/u,lineBreaks:!0},ObjectKey:/\[?(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+\]?(?=:)/u,Punctuator:/--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/u,BooleanLiteral:/true|false/u,NumericLiteral:/(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/u,StringLiteral:{match:/(?:'(?:(?!')[^\\\n\r]|\\(?:\r\n|[^]))*')|(?:"(?:(?!")[^\\\n\r]|\\(?:\r\n|[^]))*")/u,value:e=>`"${e.slice(1,-1)}"`},Identifier:/(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/u});const i=new RegExp("(?<==)(?:true|false)"),l=new RegExp("(?<==)-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"),o=new RegExp("(?<==)'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^\"\\\\]*|&[^0-9a-zA-Z;]*)*'"),u=new RegExp('(?<==)"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'),c=new RegExp("(?<==)[^\"\\s'`=<>\\x00]+");function f(e){const t="string"==typeof e&&/^(['"]).*?\1$/.test(e)?e.slice(1,-1):e;return t.startsWith("[")&&t.endsWith("]")||t.startsWith("{")&&t.endsWith("}")?JSON.parse(function(e,t={}){const n=e.trim().replace(/[\,]+$/,"");if(""===n)return"{}";if(!function(e){return e.startsWith("{")&&e.endsWith("}")||e.startsWith("[")&&e.endsWith("]")}(n))throw new TypeError("Unexpected input format");let r="";s.reset(n);for(const e of s)if("WhiteSpace"!==e.type&&"Lines"!==e.type){switch(e.type){case"Identifier":e.value=`"${t[e.value]||e.value}"`;break;case"ObjectKey":"["===e.value.slice(0,1)&&"]"===e.value.slice(-1)?e.value=`"${t[e.value.slice(1,-1)]||e.value.slice(1,-1)}"`:e.value=`"${e.value}"`}r+=e.value}return r.replace(/\,([\}\]])/g,"$1")}(t)):t}const d=e.states({main:{WhiteSpace:/[ \t\v\f\ufeff]+/,AttributeShorthand:/[\.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/,BooleanLiteral:{match:i,value:e=>"true"===e},NumericLiteral:{match:l,value(e){const t=Number(e);return Number.isNaN(t)?Number(e.replace(/_|n$/g,"")):Number(e)}},SingleQuotedValue:{match:o,value:f,type:()=>"StringLiteral"},DoubleQuotedLiteral:{match:u,value:f,type:()=>"StringLiteral"},UnquotedLiteral:{match:c,value:f,type:()=>"StringLiteral"},AttributeName:/(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/,Separator:"="}});function p(e){let t=null;const n=d.reset(e),r={};Object.defineProperties(r,{toString:{writable:!1,enumerable:!1,configurable:!1,value:()=>function(e){let t="";for(const n in e){const r=e[n];switch(typeof r){case"object":t+=` ${n}='${JSON.stringify(r)}'`;break;case"string":t+=` ${n}="${r}"`;break;case"number":case"boolean":t+=` ${n}=${r}`}}return t.slice(1)}(r)},getTokens:{writable:!1,enumerable:!1,configurable:!1,value:()=>Array.from(d.reset(e))}});const a=[];for(const{type:e,value:s}of n)switch(e){case"AttributeName":t=s,r[t]=t;break;case"AttributeShorthand":const e=s[0];"."===e?a.push(s.slice(1)):"#"===e&&(r.id=s.slice(1));break;case"BooleanLiteral":case"NumericLiteral":case"StringLiteral":t&&("class"===t&&a.push(s),r[t]=s,t=null)}return a.length&&(r.class=a.join(" ")),r}const m=e.compile({spaces:/[\t\v\f\ufeff ]+/,name:/[a-zA-Z][\w-]*/,attrs:{match:/\{.*\}/,value:e=>p(e.slice(1,-1))},text:{match:/\[.*\]/,value:e=>e.slice(1,-1)},blockText:{match:/[\s\S]+/,lineBreaks:!0}});function v(e){const{type:t,level:n,raw:r,content:a,marker:s,tag:i}=e,l=m.reset(a);let o,u,c="",f=[];for(const{type:e,value:t}of l)switch(e){case"name":o=t;break;case"attrs":u=t;break;case"text":case"blockText":c=t,f="container"===n?this.lexer.blockTokens(t):this.lexer.inlineTokens(t)}return{type:t,raw:r,meta:{level:n,marker:s,tag:i,name:o},attrs:u,text:c,tokens:f}}function x(e){return["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"].includes(e)}function h(e){const{meta:t,attrs:n,tokens:r=[]}=e,a=t.name||t.tag;let s=`<${a}`;return s+=n?" "+n.toString():"",s+=x(a)?" />":">",s+="container"===t.level?"\n":"",x(a)||(s+="container"===t.level?this.parser.parse(r):this.parser.parseInline(r),s+=`</${a}>`),s+="inline"===t.level?"":"\n",s}const b=[{level:"container",marker:":::"},{level:"block",marker:"::"},{level:"inline",marker:":"}];function g(e=b){return{extensions:e.map((({level:e,marker:t,tag:n,renderer:r})=>{const s=a(t).int32(),i=`directive${function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}(e)}${s}`;return{name:i,level:"inline"===e?"inline":"block",start:e=>{var n;return null==(n=e.match(new RegExp(t)))?void 0:n.index},tokenizer(r){const a=function(e,t){switch(e){case"container":return`^${t}([\\s\\S]*?)\\n${t}`;case"block":return`^${t}((?:[a-zA-Z][\\w-]*|[\\{\\[].*?[\\}\\]])+)`;case"inline":return`^${t}((?:[a-zA-Z][\\w-]*|[\\{].*?[\\}]+|[\\[].*?[\\]])+)`}}(e,t),s=r.match(new RegExp(a));if(s){const[r,a=""]=s;return v.call(this,{type:i,level:e,raw:r,content:a,marker:t,tag:n||("inline"===e?"span":"div")})}},renderer:r||h}}))}}export{g as createDirectives,x as isVoidElements,b as presetDirectiveConfigs};export default null;
//# sourceMappingURL=/sm/9aed4d42bee8226681ffd9bab0265e72b5533faf379fee7233800011c6503b21.map