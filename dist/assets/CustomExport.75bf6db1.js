import{B as d}from"./TableImg.46b3c35b.js";import"./BasicForm.a79bcf67.js";import{E as f}from"./index.a5ddec42.js";import{c as _,d as s,j as E}from"./data.5961d901.js";import{b as B}from"./index.270858e1.js";import{P as C}from"./index.7dc8eb09.js";import{aw as F,a as x,ay as t,o as b,j as g,z as r,n as p,B as M}from"./index.012a36a8.js";import"./index.20f96648.js";import"./Checkbox.827f2eea.js";import"./index.93a867fe.js";import"./index.ad0433c0.js";import"./eagerComputed.61088877.js";import"./useForm.25c8516d.js";import"./index.e6219090.js";import"./index.c0c2584f.js";import"./index.075cd1c5.js";import"./uuid.2b29000c.js";import"./index.4dd368ae.js";import"./_baseIteratee.5bdeac58.js";import"./get.a5b16d2a.js";import"./DeleteOutlined.692713a4.js";import"./index.3bbb44e8.js";import"./useRefs.6d47f3cf.js";import"./Form.c91f0419.js";import"./Col.bc3fb620.js";import"./useFlexGapSupport.e9d388da.js";import"./useSize.63298a3c.js";import"./useWindowSizeFn.190033f0.js";import"./index.dfd3e560.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.80a3b989.js";import"./FullscreenOutlined.16dc7d0d.js";import"./index.c45ba2ef.js";import"./fromPairs.84aabb58.js";import"./scrollTo.981a5244.js";import"./index.54fdd239.js";/* empty css              *//* empty css              */import"./index.963605b1.js";import"./transButton.aa3c3c5a.js";import"./index.629ec098.js";import"./index.7ccf8b69.js";import"./download.69a20531.js";import"./base64Conver.08b9f4ec.js";import"./index.8532de2c.js";import"./index.59f2b9d6.js";import"./uniqBy.bce0f7cf.js";import"./index.fc015f59.js";import"./index.731903d6.js";import"./useContentViewHeight.1c3148b5.js";import"./ArrowLeftOutlined.1d4c896c.js";import"./index.9338d4c9.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:m,bookType:a}){E({data:s,filename:m,write2excelOpts:{bookType:a}})}const[e,{openModal:i}]=B();return{defaultHeader:o,columns:_,data:s,register:e,openModal:i}}}),S=M(" \u5BFC\u51FA ");function T(o,e,i,m,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var ho=F(A,[["render",T]]);export{ho as default};
