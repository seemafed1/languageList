"use strict";(self.webpackChunkmy_next_app=self.webpackChunkmy_next_app||[]).push([[791],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/stories/Button.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Primary={args:{title:"Click here"}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    title: 'Click here'\n  }\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./src/stories/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Button=param=>{let{...props}=param;const[modalOpen,setModalOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{width:"100%",backgroundColor:"#0A3773",borderColor:"primary",borderWidth:"1px",borderRadius:"0.375rem",display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.75rem 1.75rem",textAlign:"center",fontSize:"1rem",fontWeight:"500",color:"#FFFFFF","&:hover":{backgroundColor:"#0A2C5A",borderColor:"#1B44C8"},"&:disabled":{backgroundColor:"#D1D5DB",borderColor:"#9CA3AF",color:"#4B5563"},"&:active":{backgroundColor:"#0A2C5A",borderColor:"#1B44C8"}},onClick:props.onClick,children:props.title})})},__WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{title:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);