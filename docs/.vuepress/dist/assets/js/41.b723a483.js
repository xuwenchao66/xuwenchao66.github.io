(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{338:function(n,t){var o,e=this&&this.__extends||(o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])})(n,t)},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),i=function(){function n(){}return n.prototype.init=function(){this.brew(),this.pourInCup(),this.wantCondiments()&&this.addCondiments()},n.prototype.boilWater=function(){console.log("把水煮沸")},n.prototype.wantCondiments=function(){return!0},n}(),r=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e(t,n),t.prototype.brew=function(){console.log("用沸水冲泡咖啡")},t.prototype.pourInCup=function(){console.log("将咖啡倒进杯子")},t.prototype.addCondiments=function(){console.log("加糖和牛奶")},t}(i),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e(t,n),t.prototype.wantCondiments=function(){return!1},t}(r),p=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return e(t,n),t.prototype.brew=function(){console.log("用沸水冲泡茶叶")},t.prototype.pourInCup=function(){console.log("将茶倒进杯子")},t.prototype.addCondiments=function(){console.log("加柠檬")},t}(i),c=new r,s=new u,l=new p;console.log("\n"),c.init(),console.log("\n"),s.init(),console.log("\n"),l.init()},369:function(n,t,o){"use strict";o.r(t);o(338);var e={name:"design-patterns-template-method"},i=o(11),r=Object(i.a)(e,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=r.exports}}]);