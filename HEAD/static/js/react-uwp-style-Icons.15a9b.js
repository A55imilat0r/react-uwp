webpackJsonp([56],{163:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(3),l=n(350),a=n(7),s=n(31),c=n(168),u=Object.keys(a.icons),p={display:"flex",flexDirection:"column",alignItems:"center",margin:8,width:80,height:80,padding:"12px 4px 4px"},f={fontSize:24},d={width:"100%",fontSize:10,marginTop:8,wordWrap:"break-word",textAlign:"center"},h={position:"fixed",left:0,top:0,display:"inherit",overflow:"hidden",border:"none",outline:"none",opacity:0,width:40,height:0},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={currIconNames:u},t.inputTimer=null,t.handleMouseEnter=function(e){Object.assign(e.currentTarget.style,{background:t.context.theme.listLow})},t.handleMouseLeave=function(e){Object.assign(e.currentTarget.style,{background:"none"})},t.handleCopy=function(e){var n=document.activeElement;t.inputElm.value=e,t.inputElm.focus(),t.inputElm.setSelectionRange(0,t.inputElm.value.length),document.execCommand("copy"),n.focus()},t.handleInput=function(e){clearTimeout(t.inputTimer),t.inputTimer=setTimeout(function(){t.setState({currIconNames:u.filter(function(t){return t.toLowerCase().includes(e.toLowerCase())})}),window.scrollTo(0,0)},250)},t}return o(t,e),t.prototype.render=function(){var e=this,t=this,n=t.context.theme,o=t.state.currIconNames;p=n.prefixStyle(p);var r=n.prefixStyle({cursor:"default",width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexWrap:"wrap"});return i.createElement("div",{style:{width:"100%",fontSize:14}},i.createElement("input",{style:h,ref:function(t){return e.inputElm=t}}),i.createElement("div",{style:{position:"relative",width:"100%",height:60}},i.createElement("div",{style:{position:"fixed",height:60,width:"100%",zIndex:n.zIndex.tooltip+1}}),i.createElement("div",{style:{position:"fixed",padding:10,zIndex:n.zIndex.tooltip+1}},i.createElement(s.default,{placeholder:"Search Icons",background:n.useFluentDesign?n.acrylicTexture80.background:n.altHigh,style:{width:320},onChangeValue:this.handleInput}))),i.createElement("p",{style:{lineHeight:1.8,padding:10}},"Represents an icon that uses a glyph from the Segoe MDL2 Assets font as its content. (",o.length," icon)"),i.createElement("div",{style:r},o.map(function(t,o){return i.createElement(c.default,{background:n.listLow,verticalPosition:"top",horizontalPosition:"center",onClick:function(){return e.handleCopy(t)},contentNode:i.createElement("span",null,"Copy ",l(a.icons[t])),style:{cursor:"pointer"},closeDelay:250,margin:-6,key:""+o},i.createElement("div",{style:p,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,key:""+o},i.createElement(a.default,{style:f},t),i.createElement("p",{style:d},t)))})))},t.contextTypes={theme:r.object},t}(i.Component);t.default=m},168:function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&(n[o[i]]=e[o[i]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=n(1),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showTooltip:!1},t.timer=null,t.unShowTimer=null,t.showTooltip=function(e){clearTimeout(t.unShowTimer);var n=function(){t.setState({showTooltip:!0})};t.props.autoClose?(n(),t.timer=setTimeout(function(){t.setState({showTooltip:!1})},t.props.autoCloseTimeout)):n()},t.unShowTooltip=function(e){t.timer=setTimeout(function(){t.setState({showTooltip:!1})},t.props.closeDelay)},t.getStyle=function(e,n){void 0===e&&(e=!1),void 0===n&&(n={});var o=t,r=o.context.theme,l=o.props,a=l.style,s=l.background;return r.prefixStyle(i({height:28,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",padding:"4px 8px",transition:"all .25s 0s ease-in-out",border:"1px solid "+(r.useFluentDesign?r.listLow:r.baseLow),color:r.baseMediumHigh,background:s||r.chromeMedium,opacity:e?1:0,transform:"translateY("+(e?"0px":"10px")+")",position:"absolute",fontSize:14,pointerEvents:e?"all":"none",zIndex:r.zIndex.tooltip},a,n))},t.getTooltipStyle=function(){var e=t,n=e.rootElm,o=e.tooltipElm;if(!n||!o)return t.getStyle();var i=(t.context.theme,t.props),r=i.verticalPosition,l=i.horizontalPosition,a=i.margin,s=n.getBoundingClientRect(),c=s.width,u=s.height,p=o.getBoundingClientRect().width,f=o.getBoundingClientRect().height,d=t.state.showTooltip,h={},m="center"===r;if(void 0!==c&&void 0!==u){switch(l){case"left":h.right=m?c+a:0;break;case"center":h.left=(c-p)/2;break;case"right":h.left=m?-c-a:0}switch(r){case"top":h.top=-f-a;break;case"center":h.top=(u-f)/2;break;case"bottom":h.top=u+a}}return t.getStyle(d,h)},t}return o(t,e),t.prototype.componentWillUnmount=function(){clearTimeout(this.timer)},t.prototype.render=function(){var e=this,t=this.props,n=(t.verticalPosition,t.autoCloseTimeout,t.autoClose,t.margin,t.horizontalPosition,t.children),o=t.content,a=t.contentNode,s=(t.closeDelay,t.background,t.className),c=r(t,["verticalPosition","autoCloseTimeout","autoClose","margin","horizontalPosition","children","content","contentNode","closeDelay","background","className"]),u=this.context.theme,p=this.getTooltipStyle();return l.createElement("div",{style:{position:"relative",display:"inline-block"},ref:function(t){return e.rootElm=t},onMouseEnter:this.showTooltip,onClick:this.showTooltip,onMouseLeave:this.unShowTooltip},l.createElement("span",i({ref:function(t){return e.tooltipElm=t}},c,u.prepareStyle({className:"tooltip",style:p,extendsClassName:s})),o||a),n)},t.defaultProps={verticalPosition:"top",horizontalPosition:"center",margin:4,autoClose:!1,autoCloseTimeout:750,closeDelay:0},t.contextTypes={theme:a.object},t}(l.Component);t.Tooltip=s,t.default=s},350:function(e,t,n){(function(e,o){var i;!function(o){var r=("object"==typeof e&&e&&e.exports,{}),l=r.hasOwnProperty,a=function(e,t){var n;for(n in e)l.call(e,n)&&t(n,e[n])},s=function(e,t){return t?(a(t,function(t,n){e[t]=n}),e):e},c=function(e,t){for(var n=e.length,o=-1;++o<n;)t(e[o])},u=r.toString,p=function(e){return"[object Array]"==u.call(e)},f=function(e){return"[object Object]"==u.call(e)},d=function(e){return"string"==typeof e||"[object String]"==u.call(e)},h=function(e){return"number"==typeof e||"[object Number]"==u.call(e)},m=function(e){return"function"==typeof e||"[object Function]"==u.call(e)},y=function(e){return"[object Map]"==u.call(e)},g=function(e){return"[object Set]"==u.call(e)},_={'"':'\\"',"'":"\\'","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},v=/["'\\\b\f\n\r\t]/,b=/[0-9]/,w=/[ !#-&\(-\[\]-~]/,x=function(e,t){var n={escapeEverything:!1,escapeEtago:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",__indent__:"",__inline1__:!1,__inline2__:!1},o=t&&t.json;o&&(n.quotes="double",n.wrap=!0),t=s(n,t),"single"!=t.quotes&&"double"!=t.quotes&&(t.quotes="single");var i,r="double"==t.quotes?'"':"'",l=t.compact,u=t.indent,S=t.lowercaseHex,T="",E=t.__inline1__,j=t.__inline2__,O=l?"":"\n",C=!0,P="binary"==t.numbers,k="octal"==t.numbers,z="decimal"==t.numbers,M="hexadecimal"==t.numbers;if(o&&e&&m(e.toJSON)&&(e=e.toJSON()),!d(e)){if(y(e))return 0==e.size?"new Map()":(l||(t.__inline1__=!0),"new Map("+x(Array.from(e),t)+")");if(g(e))return 0==e.size?"new Set()":"new Set("+x(Array.from(e),t)+")";if(p(e))return i=[],t.wrap=!0,E?(t.__inline1__=!1,t.__inline2__=!0):(T=t.__indent__,u+=T,t.__indent__=u),c(e,function(e){C=!1,j&&(t.__inline2__=!1),i.push((l||j?"":u)+x(e,t))}),C?"[]":j?"["+i.join(", ")+"]":"["+O+i.join(","+O)+O+(l?"":T)+"]";if(!h(e))return f(e)?(i=[],t.wrap=!0,T=t.__indent__,u+=T,t.__indent__=u,a(e,function(e,n){C=!1,i.push((l?"":u)+x(e,t)+":"+(l?"":" ")+x(n,t))}),C?"{}":"{"+O+i.join(","+O)+O+(l?"":T)+"}"):o?JSON.stringify(e)||"null":String(e);if(o)return JSON.stringify(e);if(z)return String(e);if(M){var N=e.toString(16);return S||(N=N.toUpperCase()),"0x"+N}if(P)return"0b"+e.toString(2);if(k)return"0o"+e.toString(8)}var I,A,L,D=e,q=-1,H=D.length;for(i="";++q<H;){var J=D.charAt(q);if(t.es6&&(I=D.charCodeAt(q))>=55296&&I<=56319&&H>q+1&&(A=D.charCodeAt(q+1))>=56320&&A<=57343){L=1024*(I-55296)+A-56320+65536;var R=L.toString(16);S||(R=R.toUpperCase()),i+="\\u{"+R+"}",q++}else{if(!t.escapeEverything){if(w.test(J)){i+=J;continue}if('"'==J){i+=r==J?'\\"':J;continue}if("'"==J){i+=r==J?"\\'":J;continue}}if("\0"!=J||o||b.test(D.charAt(q+1)))if(v.test(J))i+=_[J];else{var U=J.charCodeAt(0),R=U.toString(16);S||(R=R.toUpperCase());var B=R.length>2||o,F="\\"+(B?"u":"x")+("0000"+R).slice(B?-4:-2);i+=F}else i+="\\0"}}return t.wrap&&(i=r+i+r),t.escapeEtago?i.replace(/<\/(script|style)/gi,"<\\/$1"):i};x.version="1.3.0",void 0!==(i=function(){return x}.call(t,n,t,e))&&(e.exports=i)}()}).call(t,n(514)(e),n(24))},514:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}});