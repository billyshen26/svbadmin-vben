import{U as K,ak as P,a as U,G as a,H as j,bp as A,O as g,v as m,f as C,a7 as H,J as D,N as E,al as G,n as h,T as k,c1 as L,ae as W,c6 as y,cs as J,c2 as S,S as o}from"./index.93c840df.js";var R=P("small","default"),$=function(){return{id:String,prefixCls:String,size:a.oneOf(R),disabled:{type:Boolean,default:void 0},checkedChildren:a.any,unCheckedChildren:a.any,tabindex:a.oneOfType([a.string,a.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:a.oneOfType([a.string,a.number,a.looseBool]),checkedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!0),unCheckedValue:a.oneOfType([a.string,a.number,a.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},q=U({name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:$(),slots:["checkedChildren","unCheckedChildren"],setup:function(t,u){var s=u.attrs,p=u.slots,F=u.expose,l=u.emit,x=j();A(function(){g(!("defaultChecked"in s),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),g(!("value"in s),"Switch","`value` is not validate prop, do you mean `checked`?")});var r=m(t.checked!==void 0?t.checked:s.defaultChecked),f=C(function(){return r.value===t.checkedValue});H(function(){return t.checked},function(){r.value=t.checked});var w=D("switch",t),i=w.prefixCls,T=w.direction,z=w.size,d=m(),b=function(){var e;(e=d.value)===null||e===void 0||e.focus()},V=function(){var e;(e=d.value)===null||e===void 0||e.blur()};F({focus:b,blur:V}),E(function(){G(function(){t.autofocus&&!t.disabled&&d.value.focus()})});var v=function(e,c){t.disabled||(l("update:checked",e),l("change",e,c),x.onFieldChange())},_=function(e){l("blur",e)},I=function(e){b();var c=f.value?t.unCheckedValue:t.checkedValue;v(c,e),l("click",c,e)},O=function(e){e.keyCode===S.LEFT?v(t.unCheckedValue,e):e.keyCode===S.RIGHT&&v(t.checkedValue,e),l("keydown",e)},M=function(e){var c;(c=d.value)===null||c===void 0||c.blur(),l("mouseup",e)},N=C(function(){var n;return n={},o(n,"".concat(i.value,"-small"),z.value==="small"),o(n,"".concat(i.value,"-loading"),t.loading),o(n,"".concat(i.value,"-checked"),f.value),o(n,"".concat(i.value,"-disabled"),t.disabled),o(n,i.value,!0),o(n,"".concat(i.value,"-rtl"),T.value==="rtl"),n});return function(){var n;return h(J,{insertExtraNode:!0},{default:function(){return[h("button",k(k(k({},L(t,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),s),{},{id:(n=t.id)!==null&&n!==void 0?n:x.id.value,onKeydown:O,onClick:I,onBlur:_,onMouseup:M,type:"button",role:"switch","aria-checked":r.value,disabled:t.disabled||t.loading,class:[s.class,N.value],ref:d}),[h("div",{class:"".concat(i.value,"-handle")},[t.loading?h(W,{class:"".concat(i.value,"-loading-icon")},null):null]),h("span",{class:"".concat(i.value,"-inner")},[f.value?y(p,t,"checkedChildren"):y(p,t,"unCheckedChildren")])])]}})}}}),X=K(q);export{X as S};
