import{I as x}from"./index.bb4d2b78.js";import{B as h}from"./TableImg.0978e839.js";import"./BasicForm.453a21dc.js";import{P as S}from"./index.023dbe14.js";import{aw as E,a as F,v as I,ay as e,o as i,j as d,z as s,n as f,h as b,aB as g,F as v,B as C}from"./index.054255b5.js";import"./index.00898c95.js";import"./useWindowSizeFn.61d4b74b.js";import"./FullscreenOutlined.85bd1417.js";import"./useForm.7c53e8df.js";import"./index.51314c78.js";import"./Checkbox.dff9bd25.js";import"./index.8284f770.js";import"./index.90b68e43.js";import"./eagerComputed.c61c1bf6.js";import"./index.850c6279.js";import"./index.4b704ec3.js";import"./index.ffa94cce.js";import"./uuid.2b29000c.js";import"./index.1c1b8b7b.js";import"./_baseIteratee.312bc25d.js";import"./get.7fcf1401.js";import"./DeleteOutlined.03c45443.js";import"./index.3e722cae.js";import"./useRefs.c93bf063.js";import"./Form.4029cf55.js";import"./Col.0a232c75.js";import"./useFlexGapSupport.4b9814ba.js";import"./useSize.1887ad30.js";import"./index.4bb27f52.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.32633acf.js";import"./index.a229f492.js";import"./fromPairs.84aabb58.js";import"./scrollTo.19cf8f1f.js";import"./index.ce93adf2.js";/* empty css              *//* empty css              */import"./index.981b84f9.js";import"./transButton.ca133862.js";import"./index.263a0b75.js";import"./index.94282b19.js";import"./download.f31e9677.js";import"./base64Conver.08b9f4ec.js";import"./index.a28e7e9e.js";import"./index.c513a766.js";import"./uniqBy.f1f6cd50.js";import"./index.c35f57fb.js";import"./index.e65dfd35.js";import"./useContentViewHeight.5dcd68ca.js";import"./ArrowLeftOutlined.d0b015ab.js";import"./index.7ac04578.js";const k=F({components:{BasicTable:h,ImpExcel:x,PageWrapper:S},setup(){const t=I([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=C(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return i(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(i(!0),b(v,null,g(t.tableListRef,(a,B)=>(i(),d(r,{key:B,title:a.title,columns:a.columns,dataSource:a.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var kt=E(k,[["render",P]]);export{kt as default};
