import{A as n}from"./index.a7404720.js";import{a as T,J as G,S as v,c6 as N,Q as O,ck as $,n as s,bo as z,T as i}from"./index.93c840df.js";import{a as I}from"./useSize.4f5a07ae.js";var E=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},J=T({name:"AAvatarGroup",inheritAttrs:!1,props:E(),setup:function(e,p){var S=p.slots,t=p.attrs,f=G("avatar-group",e),u=f.prefixCls,h=f.direction;return I(e),function(){var a,d=e.maxPopoverPlacement,_=d===void 0?"top":d,o=e.maxCount,b=e.maxStyle,g=e.maxPopoverTrigger,j=g===void 0?"hover":g,P=(a={},v(a,u.value,!0),v(a,"".concat(u.value,"-rtl"),h.value==="rtl"),v(a,"".concat(t.class),!!t.class),a),k=N(S,e),l=O(k).map(function(y,C){return $(y,{key:"avatar-key-".concat(C)})}),c=l.length;if(o&&o<c){var x=l.slice(0,o),A=l.slice(o,c);return x.push(s(z,{key:"avatar-popover-key",content:A,trigger:j,placement:_,overlayClassName:"".concat(u.value,"-popover")},{default:function(){return[s(n,{style:b},{default:function(){return["+".concat(c-o)]}})]}})),s("div",i(i({},t),{},{class:P,style:t.style}),[x])}return s("div",i(i({},t),{},{class:P,style:t.style}),[l])}}}),m=J;n.Group=m;n.install=function(r){return r.component(n.name,n),r.component(m.name,m),r};
