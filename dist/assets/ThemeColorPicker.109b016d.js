import{aw as m,a as l,dZ as c,b as d,ay as _,o as i,h as r,F as f,aB as u,q as p,bm as k,n as h}from"./index.3b95ce49.js";import{b as v}from"./index.8707a05b.js";import"./index.da2a70c7.js";import"./index.0336275d.js";import"./ArrowLeftOutlined.054ebdfe.js";import"./index.ed0291c4.js";import"./index.ee6855d3.js";import"./FullscreenOutlined.a643825d.js";import"./index.6a5e0256.js";import"./useWindowSizeFn.350a8af9.js";import"./useContentViewHeight.c814123a.js";import"./uniqBy.41232b8f.js";import"./_baseIteratee.d7a52456.js";import"./get.54b90331.js";import"./index.05f5c637.js";import"./useRefs.e98cf94e.js";import"./PlusOutlined.2b08056c.js";import"./RedoOutlined.0e905816.js";import"./index.3e630f02.js";import"./lock.bb5d14e6.js";const C=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function o(s){e.event&&v(e.event,s)}return{prefixCls:n,handleClick:o}}}),b=["onClick"];function g(e,n,o,s,y,x){const a=_("CheckOutlined");return i(),r("div",{class:p(e.prefixCls)},[(i(!0),r(f,null,u(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(a)],14,b))),128))],2)}var J=m(C,[["render",g]]);export{J as default};
