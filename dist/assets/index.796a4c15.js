import{B as b}from"./TableImg.a7942e91.js";import{l as C}from"./BasicForm.696c0ca0.js";import{u as g}from"./useTable.168b04a3.js";import{c as _}from"./system.a7ffe3ae.js";import{b as T}from"./index.3c17bb2e.js";import{D as B,c as D,s as E}from"./DeptModal.37c9296a.js";import{aw as k,a as M,ay as e,o as d,h as y,n as a,z as m,j as S,l as w,B as R}from"./index.93c840df.js";import"./index.c82bbdf2.js";import"./Checkbox.85271982.js";import"./index.b985b49e.js";import"./index.a1970168.js";import"./eagerComputed.436db484.js";import"./useForm.d59c0f05.js";import"./index.ca2d09ae.js";import"./index.722b01c6.js";import"./index.a7404720.js";import"./useSize.4f5a07ae.js";import"./useWindowSizeFn.e7bf6281.js";import"./useContentViewHeight.64ebddf0.js";import"./ArrowLeftOutlined.29c03e3f.js";import"./index.42a868ee.js";import"./transButton.619d76e5.js";import"./index.29c3946f.js";import"./index.159ccbe1.js";import"./index.8a0af673.js";import"./uuid.2b29000c.js";import"./index.1a039708.js";import"./_baseIteratee.f1a4c2b5.js";import"./get.abdb453b.js";import"./DeleteOutlined.b8e6daaa.js";import"./index.a78ff1c3.js";import"./useRefs.0e4b26a4.js";import"./Form.f6c051cb.js";import"./Col.7c1a7233.js";import"./useFlexGapSupport.9e13d7c9.js";import"./index.f588599f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.3548c190.js";import"./FullscreenOutlined.433346e8.js";import"./index.b181bcad.js";import"./fromPairs.84aabb58.js";import"./scrollTo.7f762505.js";import"./index.363cb378.js";/* empty css              *//* empty css              */import"./index.f54acf39.js";import"./index.a260b93c.js";import"./index.a85eabdd.js";import"./download.6ece42b3.js";import"./base64Conver.08b9f4ec.js";import"./index.02675d67.js";import"./index.5c9b1cb7.js";import"./uniqBy.64ac4e63.js";const v=M({name:"DeptManagement",components:{BasicTable:b,DeptModal:B,TableAction:C},setup(){const[o,{openModal:i}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:D,formConfig:{labelWidth:120,schemas:E},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function r(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:r,handleSuccess:n}}}),A=R(" \u65B0\u589E\u90E8\u95E8 ");function F(o,i,p,s,l,c){const r=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),y("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(r,{type:"primary",onClick:o.handleCreate},{default:m(()=>[A]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):w("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var $o=k(v,[["render",F]]);export{$o as default};
