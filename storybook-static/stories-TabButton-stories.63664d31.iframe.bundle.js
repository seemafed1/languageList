"use strict";(self.webpackChunkmy_next_app=self.webpackChunkmy_next_app||[]).push([[960],{"./src/stories/TabButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabButton_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const TabButton=param=>{let{tabArray}=param;const[selectedTab,setSelectedTab]=(0,react.useState)(0);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Tabs.A,{value:selectedTab,onChange:(event,newValue)=>{setSelectedTab(newValue),console.log("clicked tab")},variant:"scrollable",scrollButtons:!0,allowScrollButtonsMobile:!0,"aria-label":"scrollable force tabs example",TabIndicatorProps:{style:{backgroundColor:"transparent"},children:(0,jsx_runtime.jsx)("span",{style:{borderBottom:"2px solid #FE8B4C"}})},children:tabArray&&tabArray.map((tab=>(0,jsx_runtime.jsx)(Tab.A,{label:tab.label,sx:{"&.Mui-selected":{color:"#FE8B4C",backgroundColor:"#FFF1E6",borderBottom:"2px solid #FE8B4C"}}},tab.id)))})})},stories_TabButton=TabButton;var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1;TabButton.__docgenInfo={description:"",methods:[],displayName:"TabButton",props:{tabArray:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  label: string,\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}}]}}],raw:"tabArray[]"},description:""}}};const TabButton_stories={title:"Example/TabButton",component:stories_TabButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{tabArray:[{label:"Tab 1"},{label:"Tab 2"},{label:"Tab 3"},{label:"Tab 3"},{label:"Tab 3"},{label:"Tab 3"}]}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    // primary: true,\n    tabArray: [{\n      label: 'Tab 1'\n    }, {\n      label: 'Tab 2'\n    }, {\n      label: 'Tab 3'\n    }, {\n      label: 'Tab 3'\n    }, {\n      label: 'Tab 3'\n    }, {\n      label: 'Tab 3'\n    }]\n  }\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]}}]);