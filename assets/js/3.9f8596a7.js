(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},107:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(82),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},108:function(t,n,e){e(109);var r=e(61).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},109:function(t,n,e){var r=e(70);r(r.S+r.F*!e(58),"Object",{defineProperty:e(63).f})},110:function(t,n,e){},243:function(t,n,e){var r=e(11).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(2)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},244:function(t,n,e){"use strict";var r=e(110);e.n(r).a},250:function(t,n,e){"use strict";e.r(n);e(243);var r=e(82),o=e.n(r);function i(t,n,e){return n in t?o()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=e(106),c=e(107),a=function(){function t(){Object(u.a)(this,t)}return Object(c.a)(t,[{key:"calculate",value:function(t){return 4*t}}]),t}(),s=new(function(){function t(n,e){Object(u.a)(this,t),this.salary=n,this.strategy=e}return Object(c.a)(t,[{key:"getBonus",value:function(){return this.strategy.calculate(this.salary)}}]),t}())(1e4,new a).getBonus();console.log(s);var f,l={A:function(t){return 3*t},B:function(t){return 2*t}},p=(f=1e4,l["A"](f));console.log(p);var v=function(){function t(){Object(u.a)(this,t),i(this,"speed",1)}return Object(c.a)(t,[{key:"onEnd",value:function(){console.log("move slowly done")}}]),t}(),h=function(){function t(){Object(u.a)(this,t),i(this,"speed",5)}return Object(c.a)(t,[{key:"onEnd",value:function(){console.log("move fast done")}}]),t}(),d=function(t){this.dom=t,this.queue=[],this.target=0,this.movement=null,this.runing=!1};d.prototype.move=function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"slow";return this.runing?this.queue.push((function(){return n.move(t,e)})):(this.runing=!0,this.movement="slow"===e?new v:new h,this.curPos=parseInt(this.dom.style.left)||0,this.target=this.curPos+t,this.step()),this},d.prototype.step=function(){var t=this;this.curPos+=this.movement.speed,this.dom.style.left="".concat(this.curPos,"px"),this.target>this.curPos?requestAnimationFrame((function(){return t.step()})):(this.movement.onEnd(),this.end())},d.prototype.end=function(){this.runing=!1,this.queue[0]&&this.queue.shift()()};var y={isNotEmpty:function(t,n){var e=n.errMsg,r=void 0===e?"不能为空":e;if(!/\S+/.test(t))return r},minLength:function(t,n){var e=n.errMsg,r=n.min;if(t.length<r)return e||"长度不能小于".concat(r,"位数")}},m=function(){function t(){Object(u.a)(this,t),this.validateFuns=[]}return Object(c.a)(t,[{key:"add",value:function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y[n]&&this.validateFuns.push((function(){return y[n](t,e)}))}},{key:"validate",value:function(){for(var t="",n=0;n<this.validateFuns.length;n++){var e=this.validateFuns[n]();if(e)return e}return t}}]),t}(),g={name:"design-patterns-strategy",mounted:function(){new d(document.querySelector(".strategy-ball")).move(100,"slow").move(100,"fast").move(100,"slow")},methods:{validate:function(){var t=document.getElementsByTagName("form")[0],n=new m;n.add(t.name.value,"isNotEmpty"),n.add(t.number.value,"minLength",{min:6});var e=n.validate();e?alert(e):alert("校验成功")}}},b=(e(244),e(0)),w=Object(b.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"strategy-ball"}),t._v(" "),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("input",{attrs:{name:"name",type:"text",placeholder:"请输入姓名"}}),t._v(" "),e("input",{attrs:{name:"number",type:"text",placeholder:"请输入学号"}}),t._v(" "),e("button",{on:{click:function(n){return n.stopPropagation(),t.validate(n)}}},[t._v("校验")])])])}),[],!1,null,"3e928ff8",null);n.default=w.exports},58:function(t,n,e){t.exports=!e(68)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},60:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},61:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},62:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},63:function(t,n,e){var r=e(67),o=e(78),i=e(79),u=Object.defineProperty;n.f=e(58)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},64:function(t,n,e){var r=e(63),o=e(71);t.exports=e(58)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},67:function(t,n,e){var r=e(62);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},68:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},69:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},70:function(t,n,e){var r=e(60),o=e(61),i=e(74),u=e(64),c=e(69),a=function(t,n,e){var s,f,l,p=t&a.F,v=t&a.G,h=t&a.S,d=t&a.P,y=t&a.B,m=t&a.W,g=v?o:o[n]||(o[n]={}),b=g.prototype,w=v?r:h?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(f=!p&&w&&void 0!==w[s])&&c(g,s)||(l=f?w[s]:e[s],g[s]=v&&"function"!=typeof w[s]?e[s]:y&&f?i(l,r):m&&w[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((g.virtual||(g.virtual={}))[s]=l,t&a.R&&b&&!b[s]&&u(b,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},71:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},74:function(t,n,e){var r=e(77);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},75:function(t,n,e){var r=e(62),o=e(60).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},77:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},78:function(t,n,e){t.exports=!e(58)&&!e(68)((function(){return 7!=Object.defineProperty(e(75)("div"),"a",{get:function(){return 7}}).a}))},79:function(t,n,e){var r=e(62);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},82:function(t,n,e){t.exports=e(108)}}]);