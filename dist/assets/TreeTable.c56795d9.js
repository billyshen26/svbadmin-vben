import{B as n}from"./TableImg.0978e839.js";import"./BasicForm.453a21dc.js";import{u as l}from"./useTable.444f5c0d.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.0902c609.js";import{aw as _,a as b,ay as a,o as f,h as C,n as t,z as r,B as s}from"./index.054255b5.js";import"./index.51314c78.js";import"./Checkbox.dff9bd25.js";import"./index.8284f770.js";import"./index.90b68e43.js";import"./eagerComputed.c61c1bf6.js";import"./useForm.7c53e8df.js";import"./index.023dbe14.js";import"./index.c35f57fb.js";import"./index.e65dfd35.js";import"./useSize.1887ad30.js";import"./useWindowSizeFn.61d4b74b.js";import"./useContentViewHeight.5dcd68ca.js";import"./ArrowLeftOutlined.d0b015ab.js";import"./index.7ac04578.js";import"./transButton.ca133862.js";import"./index.850c6279.js";import"./index.4b704ec3.js";import"./index.ffa94cce.js";import"./uuid.2b29000c.js";import"./index.1c1b8b7b.js";import"./_baseIteratee.312bc25d.js";import"./get.7fcf1401.js";import"./DeleteOutlined.03c45443.js";import"./index.3e722cae.js";import"./useRefs.c93bf063.js";import"./Form.4029cf55.js";import"./Col.0a232c75.js";import"./useFlexGapSupport.4b9814ba.js";import"./index.00898c95.js";import"./FullscreenOutlined.85bd1417.js";import"./index.4bb27f52.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32633acf.js";import"./index.a229f492.js";import"./fromPairs.84aabb58.js";import"./scrollTo.19cf8f1f.js";import"./index.ce93adf2.js";/* empty css              *//* empty css              */import"./index.981b84f9.js";import"./index.263a0b75.js";import"./index.94282b19.js";import"./download.f31e9677.js";import"./base64Conver.08b9f4ec.js";import"./index.a28e7e9e.js";import"./index.c513a766.js";import"./uniqBy.f1f6cd50.js";const T=b({components:{BasicTable:n},setup(){const[o,{expandAll:e,collapseAll:i}]=l({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"},g=s("\u5C55\u5F00\u5168\u90E8"),h=s("\u6298\u53E0\u5168\u90E8");function k(o,e,i,p,E,F){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[g]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",k]]);export{Fo as default};
