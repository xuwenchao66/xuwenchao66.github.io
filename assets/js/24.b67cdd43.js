(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{287:function(t,e,n){},338:function(t,e,n){"use strict";n(287)},345:function(t,e,n){"use strict";n.r(e);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n(97);function o(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}function r(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(91);const i=new class{constructor(t,e){this.salary=t,this.strategy=e}getBonus(){return this.strategy.calculate(this.salary)}}(1e4,new class{calculate(t){return 4*t}}).getBonus();console.log(i);const u={A:t=>3*t,B:t=>2*t},a=(l=1e4,u["A"](l));var l;console.log(a);class c{constructor(){r(this,"speed",1)}onEnd(){console.log("move slowly done")}}class m{constructor(){r(this,"speed",5)}onEnd(){console.log("move fast done")}}const h=function(t){this.dom=t,this.queue=[],this.target=0,this.movement=null,this.runing=!1};h.prototype.move=function(t,e="slow"){return this.runing?this.queue.push(()=>this.move(t,e)):(this.runing=!0,this.movement="slow"===e?new c:new m,this.curPos=parseInt(this.dom.style.left)||0,this.target=this.curPos+t,this.step()),this},h.prototype.step=function(){this.curPos+=this.movement.speed,this.dom.style.left=this.curPos+"px",this.target>this.curPos?requestAnimationFrame(()=>this.step()):(this.movement.onEnd(),this.end())},h.prototype.end=function(){this.runing=!1,this.queue[0]&&this.queue.shift()()};const p={isNotEmpty(t,{errMsg:e="不能为空"}){if(!/\S+/.test(t))return e},minLength(t,{errMsg:e,min:n}){if(t.length<n)return e||`长度不能小于${n}位数`}};class f{constructor(){this.validateFuns=[]}add(t,e,n={}){p[e]&&this.validateFuns.push(()=>p[e](t,n))}validate(){let t="";for(let t=0;t<this.validateFuns.length;t++){const e=this.validateFuns[t]();if(e)return e}return t}}var d={name:"design-patterns-strategy",mounted(){new h(document.querySelector(".strategy-ball")).move(100,"slow").move(100,"fast").move(100,"slow")},methods:{validate(){const t=document.getElementsByTagName("form")[0],e=new f;e.add(t.name.value,"isNotEmpty"),e.add(t.number.value,"minLength",{min:6});const n=e.validate();n?alert(n):alert("校验成功")}}},v=(n(338),n(10)),y=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"strategy-ball"}),t._v(" "),e("form",{on:{submit:function(t){t.preventDefault()}}},[e("input",{attrs:{name:"name",type:"text",placeholder:"请输入姓名"}}),t._v(" "),e("input",{attrs:{name:"number",type:"text",placeholder:"请输入学号"}}),t._v(" "),e("button",{on:{click:function(e){return e.stopPropagation(),t.validate.apply(null,arguments)}}},[t._v("校验")])])])}),[],!1,null,"3e928ff8",null);e.default=y.exports}}]);