/*! For license information please see 979.8347eb8c.js.LICENSE.txt */
"use strict";(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([[979],{1979:(e,t,r)=>{var o=r(2155);function l(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=l(o);function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var a,i={exports:{}},h={};i.exports=function(){if(a)return h;a=1;var e=o,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,o){var a,i={},h=null,c=null;for(a in void 0!==o&&(h=""+o),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(c=r.ref),r)l.call(r,a)&&!s.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:t,type:e,key:h,ref:c,props:i,_owner:n.current}}return h.Fragment=r,h.jsx=i,h.jsxs=i,h}();var c,u=i.exports,f={exports:{}};c=f,function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,r(l)))}return e}function r(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return t.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var l="";for(var n in r)e.call(r,n)&&r[n]&&(l=o(l,n));return l}function o(e,t){return t?e?e+" "+t:e+t:e}c.exports?(t.default=t,c.exports=t):window.classNames=t}();var d=s(f.exports);const p=({onScroll:e,className:t,onScrollToHeader:r,onScrollToFooter:l,scrollToPosition:n,isSmooth:s,scrollDirection:a="vertical",scrollCallbackRange:i=2,children:h,...c})=>{const f=o.useRef(null),p=o.useCallback(function(e,t=1e3){let r=null;return function(...o){r||(r=setTimeout((()=>{e.apply(this,o),r=null}),t))}}((e=>{if(f.current){if("vertical"===a){const{scrollTop:t,clientHeight:o,scrollHeight:n}=f.current;t<=i&&r?r(e):t+o>=n-i&&l&&l(e)}if("horizontal"===a){const{scrollLeft:t,scrollWidth:o,clientWidth:n}=f.current;t<=i&&r?r(e):t+n>=o-i&&l&&l(e)}}}),200),[]);return o.useEffect((()=>{void 0!==n&&f.current&&f.current.scrollTo({..."vertical"===a?{top:n}:{left:n},behavior:s?"smooth":"auto"})}),[n,a,s]),u.jsx("div",{...c,ref:f,onScroll:t=>{e&&e(t),p({...t,currentTarget:t.currentTarget})},className:d(s&&"scroll-smooth","vertical"===a?"overflow-y-scroll":"overflow-x-scroll",t),children:h})};var g=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],m=e=>{let t=0;for(let r=0;r<e.length;r++){let o=e[r];t=83*t+g.indexOf(o)}return t},v=e=>{let t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},w=e=>{let t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(12.92*t*255+.5):Math.trunc(255*(1.055*Math.pow(t,.4166666666666667)-.055)+.5)},b=(e,t)=>(e=>e<0?-1:1)(e)*Math.pow(Math.abs(e),t),y=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},x=e=>{let t=e>>8&255,r=255&e;return[v(e>>16),v(t),v(r)]},j=(e,t)=>{let r=Math.floor(e/361),o=Math.floor(e/19)%19,l=e%19;return[b((r-9)/9,2)*t,b((o-9)/9,2)*t,b((l-9)/9,2)*t]},O=(e,t,r,o)=>{(e=>{if(!e||e.length<6)throw new y("The blurhash string must be at least 6 characters");let t=m(e[0]),r=Math.floor(t/9)+1,o=t%9+1;if(e.length!==4+2*o*r)throw new y(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*o*r}`)})(e),o|=1;let l=m(e[0]),n=Math.floor(l/9)+1,s=l%9+1,a=(m(e[1])+1)/166,i=new Array(s*n);for(let t=0;t<i.length;t++)if(0===t){let r=m(e.substring(2,6));i[t]=x(r)}else{let r=m(e.substring(4+2*t,6+2*t));i[t]=j(r,a*o)}let h=4*t,c=new Uint8ClampedArray(h*r);for(let e=0;e<r;e++)for(let o=0;o<t;o++){let l=0,a=0,u=0;for(let h=0;h<n;h++)for(let n=0;n<s;n++){let c=Math.cos(Math.PI*o*n/t)*Math.cos(Math.PI*e*h/r),f=i[n+h*s];l+=f[0]*c,a+=f[1]*c,u+=f[2]*c}let f=w(l),d=w(a),p=w(u);c[4*o+0+e*h]=f,c[4*o+1+e*h]=d,c[4*o+2+e*h]=p,c[4*o+3+e*h]=255}return c},S=Object.defineProperty,M=Object.defineProperties,P=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&T(e,r,t[r]);if(_)for(var r of _(t))N.call(t,r)&&T(e,r,t[r]);return e},C=(e,t)=>M(e,P(t)),H=(e,t)=>{var r={};for(var o in e)E.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&_)for(var o of _(e))t.indexOf(o)<0&&N.call(e,o)&&(r[o]=e[o]);return r},I=class extends n.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=e=>{this.canvas=e,this.draw()},this.draw=()=>{let{hash:e,height:t,punch:r,width:o}=this.props;if(this.canvas){let l=O(e,o,t,r),n=this.canvas.getContext("2d"),s=n.createImageData(o,t);s.data.set(l),n.putImageData(s,0,0)}}}componentDidUpdate(){this.draw()}render(){let e=this.props,{hash:t,height:r,width:o}=e,l=H(e,["hash","height","width"]);return n.createElement("canvas",C(k({},l),{height:r,width:o,ref:this.handleRef}))}};I.defaultProps={height:128,width:128};var R={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},D=class extends n.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let e=this.props,{hash:t,height:r,width:o,punch:l,resolutionX:s,resolutionY:a,style:i}=e,h=H(e,["hash","height","width","punch","resolutionX","resolutionY","style"]);return n.createElement("div",C(k({},h),{style:C(k({display:"inline-block",height:r,width:o},i),{position:"relative"})}),n.createElement(I,{hash:t,height:a,width:s,punch:l,style:R}))}};D.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};const L=new Set;t.$n=function(){return u.jsx("div",{style:{border:"1px solid #3d3"},className:d("w-10 h-10","blue"),children:"button"})},t._V=({width:e,height:t,blurhash:r,src:l,alt:n,className:s,children:a,onLoad:i,isLazy:h=!0,...c})=>{const[f,p]=o.useState(!0),g=!a&&f&&r&&!L.has(l),m=a&&f&&!L.has(l);return u.jsxs("div",{...c,className:d("relative",s),children:[u.jsx("div",{style:{paddingBottom:t/e*100+"%"}}),u.jsx("img",{loading:h?"lazy":"eager",className:"absolute top-0 left-0 w-full h-full",onLoad:e=>{i?.(e),p(!1),L.add(l)},src:l,alt:n}),g&&u.jsx(D,{className:"!absolute top-0 left-0",hash:r,width:"100%",height:"100%"}),m&&u.jsxs("div",{className:"absolute top-0 left-0 w-full h-full",children:[" ",a]})]})},t.a=function({columnCount:e=2,columnSpace:t,items:r,renderItem:l,...n}){const s=o.useMemo((()=>{const t=Array.from({length:e}).map((()=>({height:0,list:[]})));for(let e=0;e<r.length;e++){const o=r[e],l=t.reduce(((e,t,r,o)=>o[e].height<=t.height?e:r),0),n=t[l];n.list.push(o),n.height+=o.itemHeight}return t}),[r,e]);return u.jsx(p,{...n,children:u.jsx("div",{className:"flex justify-between",children:s.map(((r,o)=>u.jsx("div",{style:{width:`calc(${100/e}% - ${t/2}px)`},children:r.list.map(((e,t)=>u.jsx("div",{children:l(e.data)},e.itemHeight+t/1e3||t)))},r.height+o/1e3||o)))})})},t.BM=p,t.wj=function({items:e,renderItem:t,className:r,overRender:l=2,...n}){const[s,a]=o.useState(0),[i,h]=o.useState(0),c=e.reduce(((e,t)=>e+t.itemHeight),0),f=o.useMemo((()=>{const t={0:0};return e.reduce(((e,r,o)=>(e+=r.itemHeight,t[o+1]=e,e)),0),t}),[e]),g=e.slice(i,i+s);return o.useEffect((()=>{for(let t=0;t<e.length;t++)if(f[t]>window.innerHeight){a(t);break}}),[e,f]),u.jsxs(p,{onScroll:t=>{let r=0;for(;r<e.length&&!(f[r]>t.currentTarget.scrollTop);r++);const o=r-1-l>=0?r-1-l:0;for(r=o;r<e.length&&!(f[r]-f[o]>t.currentTarget.clientHeight);r++);h(o),a(r-o+l)},className:d("relative",r),...n,children:[u.jsx("div",{style:{height:c}}),g.map(((e,r)=>u.jsx("div",{className:"absolute",style:{height:e.itemHeight,top:f[i+r]},children:t(e.data)},r)))]})}}}]);