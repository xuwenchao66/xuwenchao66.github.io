(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{329:function(t,o){var n,e,r=function(){function t(t,o,n){this.title=o,this.ISBN=t,this.author=n}return t.prototype.getAuthor=function(){return this.author},t}(),u=(n={},{create:function(t,o,e){var u=n[t];return u||(u=new r(t,o,e),n[t]=u,u)}}),c=(e={},{addBookRecord:function(t,o,n,r,c){var i=u.create(t,o,n);e[r]={id:r,checkoutMember:c,book:i}},getBookRecord:function(t){return e[t]}});c.addBookRecord(123,"橘子","鲁迅",1,"小明"),console.log(c.getBookRecord(1))},362:function(t,o,n){"use strict";n.r(o);n(329);var e={name:"design-patterns-flyweight"},r=n(11),u=Object(r.a)(e,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);o.default=u.exports}}]);