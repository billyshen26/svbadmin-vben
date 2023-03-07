import{B as D}from"./TableImg.c4bb2332.js";import{k as I}from"./componentMap.f7ad5fcd.js";import{u as v}from"./useTable.d94d9db6.js";import{i as E,j as M}from"./System.7132948a.js";import{P}from"./index.f1677d87.js";import R from"./DeptTree.cf413d9e.js";import{A as U}from"./index.3a375a68.js";import{b as V}from"./index.e25bbbe7.js";import{A as W,c as $,s as z}from"./UserModal.f3317e50.js";import{au as N,a as j,aZ as x,w as H,aw as t,o as r,j as p,z as n,n as c,B as k,h as S,F,az as B,t as w,l as L}from"./index.fd607933.js";import{A as O}from"./index.af5a653a.js";import{T as Z}from"./index.35074e10.js";import"./index.8fadb3a1.js";import"./Checkbox.c69cd213.js";import"./index.9ff4adc5.js";import"./index.78ef151a.js";import"./eagerComputed.04145c6f.js";import"./BasicForm.487dcdb3.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.6de668b2.js";import"./index.f7287486.js";import"./index.99b1969b.js";import"./_baseIteratee.b40e6eda.js";import"./get.3f90d58a.js";import"./DeleteOutlined.fe36862c.js";import"./index.ed90e99b.js";import"./useRefs.74f2c964.js";import"./Form.d51c38ac.js";import"./Col.36cdc9bf.js";import"./useFlexGapSupport.06a0420f.js";import"./useSize.3e437db8.js";import"./index.4d5bcc35.js";import"./uniqBy.4a44bbbc.js";import"./index.a30e6e53.js";import"./useForm.677d6921.js";import"./RadioButtonGroup.31fe683a.js";import"./useFormItem.4c54f273.js";import"./index.cae5315f.js";import"./index.bd73961c.js";import"./index.fe7fc01f.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.3f90297d.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.cf2729a4.js";import"./FullscreenOutlined.fcd749e0.js";import"./index.d0273064.js";import"./isNumber.a9cd6fbe.js";import"./fromPairs.84aabb58.js";import"./scrollTo.53697b5f.js";import"./index.9c5279a1.js";import"./index.600d6d22.js";import"./transButton.688fd0ae.js";import"./index.c6d60ee9.js";import"./index.6dd958ab.js";import"./download.0725302e.js";import"./base64Conver.08b9f4ec.js";import"./index.14f64395.js";import"./index.8973fcff.js";import"./index.b71c5540.js";import"./useContentViewHeight.c000af9b.js";import"./ArrowLeftOutlined.8c15a711.js";import"./index.8900aab6.js";import"./index.221d906f.js";import"./useContextMenu.c443721e.js";import"./Dept.90b35f96.js";const G=j({name:"AccountManagement",components:{BasicTable:D,PageWrapper:P,AccountModal:W,TableAction:I,Avatar:O,Tag:Z,Authority:U,DeptTree:R},setup(){const o=x(),[C,{openModal:d}]=V(),f=H({}),[A,{reload:m,updateTableDataRecord:h}]=v({title:"\u8D26\u53F7\u5217\u8868",api:E,rowKey:"id",columns:$,formConfig:{labelWidth:120,schemas:z,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function g(){d(!0,{isUpdate:!1})}function _(e){d(!0,{record:e,isUpdate:!0})}function b(e){M(e.id).then(a=>{}).catch(a=>{}).finally(()=>{m()})}function u({isUpdate:e,values:a}){if(e){const s=h(a.id,a)}else m()}function y(e=""){f.deptId=e,m()}function T(e){o("/system/account_detail/"+e.id)}return{registerTable:A,registerModal:C,handleCreate:g,handleEdit:_,handleDelete:b,handleSuccess:u,handleSelect:y,handleView:T,searchInfo:f}}});function K(o,C,d,f,A,m){const h=t("DeptTree"),g=t("a-button"),_=t("Authority"),b=t("Avatar"),u=t("Tag"),y=t("TableAction"),T=t("BasicTable"),e=t("AccountModal"),a=t("PageWrapper");return r(),p(a,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[c(h,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),c(T,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:n(()=>[c(_,{value:"/api/users|POST"},{default:n(()=>[c(g,{type:"primary",onClick:o.handleCreate},{default:n(()=>[k("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),_:1})]),bodyCell:n(({column:s,record:i})=>[s.key==="avatar"?(r(),p(b,{key:0,size:60,src:i.avatar},null,8,["src"])):s.key==="roles"?(r(!0),S(F,{key:1},B(i.roles,l=>(r(),p(u,{key:l.name,color:"green"},{default:n(()=>[k(w(l.nameZh),1)]),_:2},1024))),128)):s.key==="depts"?(r(!0),S(F,{key:2},B(i.depts,l=>(r(),p(u,{key:l.id,color:"green"},{default:n(()=>[k(w(l.name),1)]),_:2},1024))),128)):s.key==="action"?(r(),p(y,{key:3,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,i)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,i)}}]},null,8,["actions"])):L("",!0)]),_:1},8,["onRegister","searchInfo"]),c(e,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var so=N(G,[["render",K]]);export{so as default};
