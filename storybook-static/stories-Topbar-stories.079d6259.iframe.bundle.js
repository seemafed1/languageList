"use strict";(self.webpackChunkmy_next_app=self.webpackChunkmy_next_app||[]).push([[247],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/Topbar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,primary:()=>primary});var _primary_parameters,_primary_parameters_docs,_primary_parameters1,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Topbar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Topbar.tsx"),_assets_webImages_backIcons_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/webImages/backIcons.png"),_assets_webImages_horecah_wt_1_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/assets/webImages/horecah wt 1.png");const __WEBPACK_DEFAULT_EXPORT__={component:_Topbar__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],parameters:{layout:""},args:{}},primary={args:{label:"Label",backgroundColor:"#113B73",color:"white",button:_assets_webImages_backIcons_png__WEBPACK_IMPORTED_MODULE_2__.A,logo:_assets_webImages_horecah_wt_1_png__WEBPACK_IMPORTED_MODULE_3__.A,progress:"30%",onBack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("Back button clicked")}};primary.parameters={...primary.parameters,docs:{...null===(_primary_parameters=primary.parameters)||void 0===_primary_parameters?void 0:_primary_parameters.docs,source:{originalSource:'{\n  args: {\n    label: "Label",\n    backgroundColor: "#113B73",\n    color: "white",\n    button: back,\n    logo: PrimaryLogo,\n    // logoHeight: 50,\n    progress: \'30%\',\n    onBack: action(\'Back button clicked\')\n  }\n}',...null===(_primary_parameters1=primary.parameters)||void 0===_primary_parameters1||null===(_primary_parameters_docs=_primary_parameters1.docs)||void 0===_primary_parameters_docs?void 0:_primary_parameters_docs.source}}};const __namedExportsOrder=["primary"]},"./src/stories/assets/webImages/backIcons.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/backIcons.3a86b72c.png",height:24,width:24,blurDataURL:"static/media/backIcons.3a86b72c.png"}},"./src/stories/assets/webImages/horecah wt 1.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/horecah wt 1.212f2911.png",height:48,width:134,blurDataURL:"static/media/horecah wt 1.212f2911.png"}},"./src/stories/Topbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_Topbar});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),topbar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/topbar.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(topbar.A,options);topbar.A&&topbar.A.locals&&topbar.A.locals;const Topbar=param=>{let{label,logo,button,logoHeight,color,backgroundColor,progress,onBack,borderRadius,platform}=param;return(0,jsx_runtime.jsxs)("header",{className:"topbar-container clearfix",style:{backgroundColor,color,borderRadius},children:[(0,jsx_runtime.jsxs)("div",{className:"topbar-back-button",children:[button&&(0,jsx_runtime.jsx)(next_image.A,{src:button,alt:"",className:"",onClick:onBack}),(0,jsx_runtime.jsx)("div",{className:"topbar-label ".concat(button&&"topbar-label-button"),children:"Verification"})]}),logo&&(0,jsx_runtime.jsx)("div",{className:"topbar-logo",children:(0,jsx_runtime.jsx)(next_image.A,{src:logo,alt:"",className:"",height:null!=logoHeight?logoHeight:30})}),(0,jsx_runtime.jsx)("div",{className:"topbar-progress",children:(0,jsx_runtime.jsx)("div",{className:"bg-stroke dark:bg-dark-3 relative h-1.5 w-full rounded-2xl",children:(0,jsx_runtime.jsx)("div",{className:"bg-[#FE8B4C] absolute top-0 left-0 h-full rounded-2xl",style:{width:progress}})})})]})},stories_Topbar=Topbar;Topbar.__docgenInfo={description:"",methods:[],displayName:"Topbar",props:{label:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"any"},description:""},button:{required:!1,tsType:{name:"any"},description:""},logoHeight:{required:!1,tsType:{name:"number"},description:""},platform:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},progress:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"number"},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/stories/topbar.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.topbar-container{\n    background-color: #113B73;\n    width: 96%;\n    padding: 1rem 2rem;\n    display: flex;\n    align-items: center;\n    position: relative;\n    height: 2.1rem;\n    box-shadow: rgba(0, 35, 81, 0.03) 0px 4px 15px;\n}\n\n.topbar-back-button{\n    float: left;\n    display: flex;\n}\n\n.clearfix{\n    content: "";\n    clear: both;\n    display: table;\n}\n\n.topbar-logo{\n    float: right;\n}\n\n.topbar-label{\n    font-size: 1.44rem;\n}\n\n.topbar-label-button{\n    margin-left: 1rem;\n}\n\n.topbar-progress{\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 1rem 2rem;\n}\n\n@media only screen and (max-width: 576px) {\n    .topbar-label{\n        font-size: 1.2rem;\n    }\n\n    .topbar-label-button{\n        margin-left: 0.7rem;\n    }\n\n    .topbar-progress{\n        padding: 1rem 1rem;\n    }\n}',"",{version:3,sources:["webpack://./src/stories/topbar.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;IACtB;AACJ",sourcesContent:['.topbar-container{\r\n    background-color: #113B73;\r\n    width: 96%;\r\n    padding: 1rem 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    height: 2.1rem;\r\n    box-shadow: rgba(0, 35, 81, 0.03) 0px 4px 15px;\r\n}\r\n\r\n.topbar-back-button{\r\n    float: left;\r\n    display: flex;\r\n}\r\n\r\n.clearfix{\r\n    content: "";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n.topbar-logo{\r\n    float: right;\r\n}\r\n\r\n.topbar-label{\r\n    font-size: 1.44rem;\r\n}\r\n\r\n.topbar-label-button{\r\n    margin-left: 1rem;\r\n}\r\n\r\n.topbar-progress{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n    .topbar-label{\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .topbar-label-button{\r\n        margin-left: 0.7rem;\r\n    }\r\n\r\n    .topbar-progress{\r\n        padding: 1rem 1rem;\r\n    }\r\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);