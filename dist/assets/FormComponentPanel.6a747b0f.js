import{d as p}from"./vuedraggable.umd.19dfeaf2.js";import{a as x,ec as c,f as v,ah as h,au as u,aw as r,o as y,h as w,x as _,y as k,n,z as b,i as C,aB as S,aC as F}from"./index.ae9214f1.js";import z from"./LayoutItem.b1ae895d.js";import{u as E}from"./useFormDesignState.ead44896.js";/* empty css              *//* empty css              */import{F as I}from"./Form.d1328e3f.js";import"./FormNode.51ade5c2.js";import"./FormNodeOperate.f1f261e7.js";import"./index.153e2fb6.js";import"./isNumber.734ab5b6.js";import"./index.8e8d87a1.js";import"./formItemConfig.6c1f49d2.js";import"./componentMap.7ff7d94b.js";import"./index.fb4c50fd.js";import"./Checkbox.a908a981.js";import"./index.81d57ccf.js";import"./index.0e6c086b.js";import"./index.04705a19.js";import"./index.1ab4ba70.js";import"./index.82395d0c.js";import"./index.a3f05007.js";import"./index.7035921f.js";import"./useFormItem.54a6ef03.js";import"./RadioButtonGroup.ae12fada.js";import"./get.2082d5f1.js";import"./index.f99f4fbc.js";import"./eagerComputed.4c87dd8b.js";import"./index.d9d950d6.js";import"./_baseIteratee.ec0b7751.js";import"./DeleteOutlined.e4932743.js";import"./index.2033aad2.js";import"./useRefs.67c9ee0b.js";import"./transButton.fb9a0e54.js";import"./index.6d3fe6ba.js";import"./useFlexGapSupport.ac20dccf.js";import"./index.380f9340.js";import"./useWindowSizeFn.ae9d70a1.js";import"./FullscreenOutlined.d28387c9.js";import"./index.e8f328c9.js";import"./index.9671d3c3.js";import"./uuid.2b29000c.js";import"./download.c8636c4a.js";import"./base64Conver.08b9f4ec.js";import"./index.48b78ba3.js";import"./index.67729c0b.js";import"./index.dcb517bf.js";import"./Col.f27830cd.js";import"./index.4b867019.js";import"./useSize.323a7a3d.js";const D=x({name:"FormComponentPanel",components:{LayoutItem:z,draggable:p,Form:I,Empty:c},emits:["handleSetSelectItem"],setup(o,{emit:e}){const{formConfig:a}=E(),l=({newIndex:t})=>{a.value.schemas=a.value.schemas||[];const i=a.value.schemas;i[t]=h(i[t]),e("handleSetSelectItem",i[t])},m=t=>{e("handleSetSelectItem",a.value.schemas[t.oldIndex])},g=v(()=>a.value.layout==="horizontal"?"Col":"div");return{addItem:l,handleDragStart:m,formConfig:a,layoutTag:g}}}),A={class:"form-panel v-form-container"},B={class:"draggable-box"};function P(o,e,a,l,m,g){const t=r("Empty"),i=r("LayoutItem"),s=r("draggable"),f=r("Form");return y(),w("div",A,[_(n(t,{class:"empty-text",description:"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u63A7\u4EF6\u6DFB\u52A0"},null,512),[[k,o.formConfig.schemas.length===0]]),n(f,S(F(o.formConfig)),{default:b(()=>[C("div",B,[n(s,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":e[0]||(e[0]=d=>o.formConfig.schemas=d),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:b(({element:d})=>[n(i,{class:"drag-move",schema:d,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}var Ao=u(D,[["render",P],["__scopeId","data-v-1556f0f2"]]);export{Ao as default};
