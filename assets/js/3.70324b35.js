(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{105:function(t,n,e){},132:function(t,n,e){t.exports=e(240)},239:function(t,n,e){var r=e(11).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(2)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},240:function(t,n,e){e(241);var r=e(60).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},241:function(t,n,e){var r=e(72);r(r.S+r.F*!e(61),"Object",{defineProperty:e(65).f})},242:function(t,n,e){"use strict";var r=e(105);e.n(r).a},248:function(t,n,e){"use strict";e.r(n);e(239);var r=e(132),o=e.n(r);function i(t,n,e){return n in t?o()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function c(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}var s=function(){function t(){u(this,t)}return c(t,[{key:"calculate",value:function(t){return 4*t}}]),t}(),f=new(function(){function t(n,e){u(this,t),this.salary=n,this.strategy=e}return c(t,[{key:"getBonus",value:function(){return this.strategy.calculate(this.salary)}}]),t}())(1e4,new s).getBonus();console.log(f);var l,p={A:function(t){return 3*t},B:function(t){return 2*t}},v=(l=1e4,p["A"](l));console.log(v);var h=function(){function t(){u(this,t),i(this,"speed",1)}return c(t,[{key:"onEnd",value:function(){console.log("move slowly done")}}]),t}(),y=function(){function t(){u(this,t),i(this,"speed",5)}return c(t,[{key:"onEnd",value:function(){console.log("move fast done")}}]),t}(),d=function(t){this.dom=t,this.queue=[],this.target=0,this.movement=null,this.runing=!1};d.prototype.move=function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"slow";return this.runing?this.queue.push((function(){return n.move(t,e)})):(this.runing=!0,this.movement="slow"===e?new h:new y,this.curPos=parseInt(this.dom.style.left)||0,this.target=this.curPos+t,this.step()),this},d.prototype.step=function(){var t=this;this.curPos+=this.movement.speed,this.dom.style.left="".concat(this.curPos,"px"),this.target>this.curPos?requestAnimationFrame((function(){return t.step()})):(this.movement.onEnd(),this.end())},d.prototype.end=function(){this.runing=!1,this.queue[0]&&this.queue.shift()()};var m={isNotEmpty:function(t,n){var e=n.errMsg,r=void 0===e?"不能为空":e;if(!/\S+/.test(t))return r},minLength:function(t,n){var e=n.errMsg,r=n.min;if(t.length<r)return e||"长度不能小于".concat(r,"位数")}},g=function(){function t(){u(this,t),this.validateFuns=[]}return c(t,[{key:"add",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};m[n]&&this.validateFuns.push((function(){return m[n](t,e)}))}},{key:"validate",value:function(){for(var t="",n=0;n<this.validateFuns.length;n++){var e=this.validateFuns[n]();if(e)return e}return t}}]),t}(),w={name:"design-patterns-strategy",mounted:function(){new d(document.querySelector(".strategy-ball")).move(100,"slow").move(100,"fast").move(100,"slow")},methods:{validate:function(){var t=document.getElementsByTagName("form")[0],n=new g;n.add(t.name.value,"isNotEmpty"),n.add(t.number.value,"minLength",{min:6});var e=n.validate();e?alert(e):alert("校验成功")}}},b=(e(242),e(0)),x=Object(b.a)(w,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"strategy-ball"}),t._v(" "),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("input",{attrs:{name:"name",type:"text",placeholder:"请输入姓名"}}),t._v(" "),e("input",{attrs:{name:"number",type:"text",placeholder:"请输入学号"}}),t._v(" "),e("button",{on:{click:function(n){return n.stopPropagation(),t.validate(n)}}},[t._v("校验")])])])}),[],!1,null,"3e928ff8",null);n.default=x.exports},59:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},60:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},61:function(t,n,e){t.exports=!e(73)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},64:function(t,n,e){var r=e(65),o=e(74);t.exports=e(61)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},65:function(t,n,e){var r=e(69),o=e(85),i=e(86),u=Object.defineProperty;n.f=e(61)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},66:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},69:function(t,n,e){var r=e(66);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},70:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},72:function(t,n,e){var r=e(59),o=e(60),i=e(77),u=e(64),a=e(70),c=function(t,n,e){var s,f,l,p=t&c.F,v=t&c.G,h=t&c.S,y=t&c.P,d=t&c.B,m=t&c.W,g=v?o:o[n]||(o[n]={}),w=g.prototype,b=v?r:h?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(f=!p&&b&&void 0!==b[s])&&a(g,s)||(l=f?b[s]:e[s],g[s]=v&&"function"!=typeof b[s]?e[s]:d&&f?i(l,r):m&&b[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[s]=l,t&c.R&&w&&!w[s]&&u(w,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},73:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},74:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},77:function(t,n,e){var r=e(84);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},78:function(t,n,e){var r=e(66),o=e(59).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},84:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},85:function(t,n,e){t.exports=!e(61)&&!e(73)((function(){return 7!=Object.defineProperty(e(78)("div"),"a",{get:function(){return 7}}).a}))},86:function(t,n,e){var r=e(66);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}}}]);