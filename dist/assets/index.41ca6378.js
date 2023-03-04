import{B as b}from"./TableImg.e794404e.js";import{l as C}from"./BasicForm.65e5c1fa.js";import{u as g}from"./useTable.232dc09d.js";import{d as T}from"./system.aeceec09.js";import{u as w}from"./index.6fd3f5fe.js";import{M as D,c as _,s as S}from"./MenuDrawer.28b5da66.js";import{aw as B,a as k,ay as t,o as h,h as F,n as m,z as p,B as y,j as M,l as A,al as E}from"./index.4ad633c8.js";import"./index.3cc4bdcd.js";import"./Checkbox.a821fd3b.js";import"./index.0d55e67e.js";import"./index.6e59dfda.js";import"./eagerComputed.39efc112.js";import"./useForm.7493826a.js";import"./index.d0f3d60a.js";import"./index.31b769f7.js";import"./index.f56e4d49.js";import"./useSize.4cbf3b62.js";import"./useWindowSizeFn.355c37f0.js";import"./useContentViewHeight.51253122.js";import"./ArrowLeftOutlined.faebd3b9.js";import"./index.671bbb03.js";import"./transButton.fadc548c.js";import"./index.3af6685b.js";import"./index.ec508b52.js";import"./index.9593ccac.js";import"./uuid.2b29000c.js";import"./index.96cf4f3f.js";import"./_baseIteratee.c4bc7574.js";import"./get.d23a6385.js";import"./DeleteOutlined.3c5003db.js";import"./index.ed336f06.js";import"./useRefs.33304b10.js";import"./Form.1dd3fdc6.js";import"./Col.800feb1a.js";import"./useFlexGapSupport.221af0d9.js";import"./index.e12d43d2.js";import"./FullscreenOutlined.36fb76e2.js";import"./index.ee361b1f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.437f9cf9.js";import"./index.869804c4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.3ac5deba.js";import"./index.c2d5a44a.js";/* empty css              *//* empty css              */import"./index.8a4a8e76.js";import"./index.dd7b1cb6.js";import"./index.3d34d703.js";import"./download.a1a9703f.js";import"./base64Conver.08b9f4ec.js";import"./index.74fb7fff.js";import"./index.ae6cbd88.js";import"./uniqBy.1ec4c51f.js";import"./index.cc6b4ea3.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=B(R,[["render",v]]);export{$e as default};
