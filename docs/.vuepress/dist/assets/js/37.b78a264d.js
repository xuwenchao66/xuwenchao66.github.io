(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{334:function(n,e){var t,o=this&&this.__extends||(t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=function(){},c=function(n){function e(e){void 0===e&&(e=1);var t=n.call(this)||this;return t.radius=e,t}return o(e,n),e.prototype.clone=function(){return new e(this.radius)},e}(r),i=function(n){function e(e,t){void 0===e&&(e=1),void 0===t&&(t=1);var o=n.call(this)||this;return o.width=e,o.height=t,o}return o(e,n),e.prototype.clone=function(){return new e(this.width,this.height)},e}(r),l=function(){function n(){this.sharpMap={circle:new c,rectangle:new i}}return n.prototype.getSharp=function(n){return this.sharpMap[n]},n}();new function(){var n=new c(5),e=n.clone(),t=e.clone(),o=new i(2,10),r=o.clone();console.log("circle1",n),console.log("circle2",e),console.log("circle3",t),console.log("circle1 is equal to circle2 ->",n===e),console.log("circle2 is equal to circle3 ->",e===t),console.log("rectangle1",o),console.log("rectangle2",r),console.log("rectangle1 is equal to rectangle2 ->",o===r);var s=new l,a=s.getSharp("circle"),u=s.getSharp("rectangle");console.log("circleFromManager",a),console.log("rectangleFromManager",u)}},366:function(n,e,t){"use strict";t.r(e);t(334);var o={name:"design-patterns-prototype"},r=t(11),c=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=c.exports}}]);