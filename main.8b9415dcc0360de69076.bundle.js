(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(40);const getHero=(type,title)=>({video:[{type:"jw_player",data:{id:"gzjttWAQ",bundle:"jw_player_id",mid:41424,changed:"1593649785"}},{type:"image",data:{title:"coronavirus.jpg",description:null,caption:"Video caption",copyright:"EPA",credit:"EPA",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8499441",bundle:"remote_image",mid:41422,changed:"1593649785",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],image:[{type:"image",data:{title:"hero.jpg",description:null,caption:"Hero caption",copyright:"AFP",credit:"AFP",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8420361",bundle:"remote_image",mid:25231,changed:"1589940955",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}[type]);__webpack_exports__.a=({title:title,heroType:heroType="image",live:live=!1,articleType:articleType="Liveblog"})=>({type:"article",id:"2233",status:!0,title:"Image "+title,titleShort:`Image ${title} - short`,titleSocial:`Image ${title} - social`,titleSEO:null,lead:"<p>The leader</p>",path:"/",articleTypes:[{name:articleType,path:"/article-type/liveblog",id:"16733"}],hierarchy:[{name:"hierarchy 1",path:"/",id:"869"},{name:"hierarchy 2",path:"/news/world",id:"954"},{name:"hierarchy 3",path:"/news/world/middle-east",id:"965"}],workflow:"Draft",sections:[{name:"section 1",path:"/",id:"869"},{name:"section 2",path:"/",id:"954"},{name:"section 3",path:"/",id:"965"}],hero:getHero(heroType,title),photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:[{name:"Author Name",id:null,email:null,firstName:null,lastName:null,imageUrl:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(title+"-author")}],updated:1593764687,changed:1593764680,publish:1589885019,unPublish:1909232586,isLiveBlog:live})},100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return heroType})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getHeroType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return findDateBasedOnPreference})),__webpack_require__.d(__webpack_exports__,"d",(function(){return internalLinkCount}));var _constants_heroType__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65);const heroType=hero=>{const priorityList=[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.c,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.f];if(!hero)return[];return{...hero.filter(e=>priorityList.includes(e.type)).sort((a,b)=>priorityList.indexOf(a.type)-priorityList.indexOf(b.type))[0]||hero[0],isHero:!0}},getHeroType=hero=>{const articleType=hero?heroType(hero).type:_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d;return[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b].includes(articleType)?"video":articleType},findDateBasedOnPreference=({extra:extra,overrideDate:overrideDate,firstPublished:firstPublished,updated:updated})=>{switch(extra.displayDatePreference){case"publishedDate":return firstPublished;case"lastUpdatedDate":return updated;case"vanityDate":return overrideDate;default:return overrideDate||updated||firstPublished}},linkCount=(body,domain,urlMatcher)=>{let counter=0;return body.filter(x=>"markup"===x.type).map(x=>{var _x$data;return null===(_x$data=x.data)||void 0===_x$data?void 0:_x$data.markup}).filter(Boolean).forEach(markup=>{const matches=markup.match(/href="(.*?)"/g);if(matches){const links=null==matches?void 0:matches.map(x=>x.slice(6,-1)).filter(urlMatcher);counter+=links.length}}),counter},internalLinkCount=(body,domain)=>linkCount(body,0,url=>url.match(new RegExp("^\\/\\w|^\\/\\/"+domain)))},114:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return TaboolaDiv})),__webpack_require__.d(__webpack_exports__,"a",(function(){return TaboolaAmp}));var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),config_config=__webpack_require__(163),classes=__webpack_require__(159),collection=__webpack_require__(66),helpers=__webpack_require__(164);const layoutProps={height:collection.b,width:collection.j,layout:collection.d,sizes:collection.i,heights:collection.c,media:collection.e,placeholder:collection.h,fallback:collection.a,noloading:collection.f,"disable-inline-width":helpers.a};const AmpEmbed=props=>{const{heights:heights,consentNotificationId:consentNotificationId,loadingStrategy:loadingStrategy,adContainerId:adContainerId,...others}=props;return Object(jsx_runtime.jsx)("amp-embed",{heights:(null==heights?void 0:heights.join(","))||"","data-consent-notification-id":consentNotificationId,"data-loading-strategy":loadingStrategy,"data-ad-container-id":adContainerId,"data-block-on-consent":"_till_responded",...others})};AmpEmbed.propTypes={...layoutProps,id:prop_types_default.a.string,className:prop_types_default.a.string,type:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,consentNotificationId:prop_types_default.a.string,loadingStrategy:prop_types_default.a.number,adContainerId:prop_types_default.a.string};var Embed=AmpEmbed;const DivRoot=props=>{const{id:id,className:className}=props;return Object(jsx_runtime.jsx)("div",{...props,id:id,className:Object(classes.a)(className,"taboola")})};DivRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string};const TaboolaDiv=DivRoot,AmpRoot=props=>{var _config$taboola;const{id:id,height:height,heights:heights,width:width,mode:mode,placement:placement,res:{locals:{domain:domain}}}=props,config=config_config.a.getPublications()[domain],publisher=null==config||null===(_config$taboola=config.taboola)||void 0===_config$taboola?void 0:_config$taboola.publisherId;return publisher?Object(jsx_runtime.jsx)(Embed,{id:id,type:"taboola",layout:"responsive",height:height,heights:heights,width:width,"data-publisher":publisher,"data-mode":mode,"data-placement":placement,"data-target_type":"mix","data-article":"auto"}):null};AmpRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,domain:prop_types_default.a.string.isRequired,height:prop_types_default.a.number,heights:prop_types_default.a.array,width:prop_types_default.a.number,mode:prop_types_default.a.string.isRequired,placement:prop_types_default.a.string.isRequired,res:prop_types_default.a.object.isRequired};const TaboolaAmp=Object(RequestProvider.withRequest)(AmpRoot),Taboola=props=>{const{res:{locals:{cleanAmp:cleanAmp}}}=props;return cleanAmp?Object(jsx_runtime.jsx)(TaboolaAmp,{...props}):Object(jsx_runtime.jsx)(TaboolaDiv,{...props})};Taboola.propTypes={res:prop_types_default.a.object.isRequired};__webpack_exports__.c=Object(RequestProvider.withRequest)(Taboola)},126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PUBLICATION_UK}));const PUBLICATION_UK="standard.co.uk"},1275:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(253)},141:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82);class MockStaticPageData extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.b)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockStaticPageData.propTypes={reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockStaticPageData.defaultProps={reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockStaticPageData},1491:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(149),_clientLogger=__webpack_require__(84),_configFilename=__webpack_require__(1492);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1492:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(253),storybook_amp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(888);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_amp__WEBPACK_IMPORTED_MODULE_1__.withAmpDecorator),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({actions:{argTypesRegex:"^on[A-Z].*"},amp:{isEnabled:!0,styles:""},layout:"fullscreen"})},158:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const AmpAd=({width:width,height:height,type:type,src:src,dataSlot:dataSlot,json:json,config:config,ampRefresh:ampRefresh,ampSizes:ampSizes,ampSizeValidation:ampSizeValidation,...props})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-ad",{width:width,height:height,type:type,src:src,"data-multi-size":ampSizes,"data-slot":dataSlot,json:json?JSON.stringify(json):null,"rtc-config":config?JSON.stringify(config):null,"data-enable-refresh":ampRefresh,"data-multi-size-validation":ampSizeValidation,"data-block-on-consent":"_till_responded",...props});AmpAd.propTypes={width:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,height:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,dataSlot:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,json:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,config:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,ampRefresh:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,ampSizes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,ampSizeValidation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool},AmpAd.__docgenInfo={description:"",methods:[],displayName:"AmpAd",props:{width:{type:{name:"number"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""},dataSlot:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampSizeValidation:{type:{name:"bool"},required:!1,description:""}}},__webpack_exports__.a=AmpAd,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Ad.js"]={name:"AmpAd",docgenInfo:AmpAd.__docgenInfo,path:"app/component/library/AMP/Ad.js"})},159:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getClassName}));const getClassName=(...classNames)=>classNames.filter(name=>"object"==typeof name&&null!==name?Object.entries(name).filter(([,value])=>!!value).map(([key])=>key).join(" "):!!name).join(" ")},161:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
  .amp-form-submitting {
    .form-submit {
      outline: none;
      .btn-text {
        display: none;
      }
      .btn-loader {
        display: inline-block;
      }
    }
  }
`,Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
  margin: 16px 0;
`,SubmitButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.button`
  display: block;
  margin: 0 auto;
  color: ${props=>props.theme.color.contrastLight};
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  width: 100%;
  height: 40px;
  background-color: ${props=>props.theme.color.primary};
  border-color: ${props=>props.theme.color.primary};

  &:hover {
    background-color: ${props=>props.theme.color.indyPrimaryDark1};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .btn-loader {
    display: none;
    border: 2px solid ${props=>props.theme.color.contrastLight};
    border-radius: 50%;
    border-top: 2px solid ${props=>props.theme.color.primary};
    width: 20px;
    height: 20px;
    top: 2px;
    position: relative;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  &.disabled-submit {
    display: none;
  }
  form.submit-once.amp-form-submit-success &,
  form.not-completed & {
    background: red;
    &.form-submit {
      display: none;
    }
    &.disabled-submit {
      display: block;
      opacity: 0.3;
      cursor: initial;
      user-select: none;
    }
  }

  form.validate:not(.user-valid) & {
    &.form-submit {
      opacity: 0.3;
      cursor: initial;
      user-select: none;
    }
  }
`,Submit=({className:className,children:children})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlobalStyle,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubmitButton,{className:"form-submit",name:"submitBtn",type:"submit",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-loader"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubmitButton,{className:"disabled-submit",disabled:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"})})]});Submit.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(Submit)``},162:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),crypto_browserify=__webpack_require__(902),crypto_browserify_default=__webpack_require__.n(crypto_browserify),bundle_min=__webpack_require__(903),bundle_min_default=__webpack_require__.n(bundle_min),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),Common=__webpack_require__(338);const AmpScript=({children:children,...props})=>Object(jsx_runtime.jsx)("amp-script",{...props,children:children});AmpScript.propTypes={...Common.a,src:prop_types_default.a.string,script:prop_types_default.a.string,sandbox:prop_types_default.a.oneOf(["allow-forms"]),"max-age":prop_types_default.a.string},AmpScript.__docgenInfo={description:"",methods:[],displayName:"AmpScript",props:{src:{type:{name:"string"},required:!1,description:""},script:{type:{name:"string"},required:!1,description:""},sandbox:{type:{name:"enum",value:[{value:"'allow-forms'",computed:!1}]},required:!1,description:""},"max-age":{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Script=AmpScript;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Script.js"]={name:"AmpScript",docgenInfo:AmpScript.__docgenInfo,path:"app/component/library/AMP/Script.js"});let buildAllHash=(()=>{let hashes=[];return hash=>(hashes.includes(hash)||hashes.push(hash),hashes.join(" "))})();__webpack_exports__.a=(WrappedComponent,scriptProps)=>(snippet,...exprs)=>Object(RequestProvider.withRequest)(props=>{const script=exprs.reduce((result,expr,index)=>result+("function"==typeof expr?expr(props):expr)+snippet[index+1],snippet[0]),prefix=(null==scriptProps?void 0:scriptProps.script)?scriptProps.script+"-":"script-",minified=bundle_min_default.a.minify(script),hash=(script=>"sha384-"+crypto_browserify_default.a.createHash("sha384").update(script,"utf-8").digest("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"))(minified.code),allHash=buildAllHash(hash),[id]=Object(react.useState)(`${prefix}${hash.slice(-6)}`);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Script,{...scriptProps,script:id,children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}),Object(jsx_runtime.jsx)("script",{type:"text/plain",target:"amp-script",id:id,dangerouslySetInnerHTML:{__html:minified.code}}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{name:"amp-script-src",content:allHash}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-script",src:"https://cdn.ampproject.org/v0/amp-script-0.1.js"})]})]})})},163:function(module,__webpack_exports__,__webpack_require__){"use strict";var ConfigManager=__webpack_require__(895),ConfigManager_default=__webpack_require__.n(ConfigManager),manifest=__webpack_require__(896),menu=__webpack_require__(184),publication=__webpack_require__(126),newslettersConfig=__webpack_require__(327);const publicationConfig={[publication.a]:{projectId:"5d79bce7-5d2b-427e-a6c4-b89b6c7bf048",apiKey:"ed467bcf-98ee-4ed9-894e-c49be4ab97e7",namespace:"esi"}};const configManager=new ConfigManager_default.a({adobe:{reportSuiteId:"indepes"},adYouLike:{placement:"e05810a932723951bec2eb55202fd0cc",campaign:"fa3c00f1a0a5815c3ce09b75e7a28e2b"},apester:{token:"5afeb141e48334000111c6ac",alternateToken:"5bbe30dfc3ecd7c158342081"},articleThemes:{insider:["/insider"]},brightcove:{account:"624246174001",player:"BJXA5Px6f"},chartbeat:{uid:"62356"},comscore:{clientId:"10476312"},criteo:{lineItemRanges:"0..4.99:0.01;5..9.95:0.05;10..49.5:0.5;50..100:1",networkId:1680},cse:{id:"001589649871138454759:x1pxwcegkc8"},facebookAppId:"235586169789578",feeds:{mmm:{src:"/api/most-popular-article?section=news&limit=5",items:"articles"},videos:{src:"/api/most-popular-article?section=mediatype_video&limit=3",items:"articles"},chartbeat:{src:"https://www.standard.co.uk/pwamp/layout_component/chartbeat-top?feed=insider",items:"."}},ga:{id:"UA-28120322-1"},gtm:{containerId:"GTM-K26356Q"},indexExchange:{siteId:"197231",scriptUrl:"//js-sec.indexww.com/ht/p/184658-111437137524152.js"},logoUrl:"/img/logo.png",manifest:manifest,jwplayerPlayerIds:{default:{defaultPlayer:"Ad1SlkR8",noAdsPlayer:"xaXhfSI0",sensitivePlayer:"hKY5LbS1",inlinePlayer:"uuyz2YmO",commercialPlayer:"xaXhfSI0"},amp:{defaultPlayer:"DJ4UFK81",noAdsPlayer:"imXF4cgx",sensitivePlayer:"yv0FGKVC",inlinePlayer:"BcAN9VUM",commercialPlayer:"imXF4cgx"}},jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},sectionThemes:{insider:["/insider"]},social:{facebook:"https://www.facebook.com/eveningstandard",twitter:"https://twitter.com/standardnews"},subdomain:{static:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).ES_SUBDOMAIN_STATIC},taboola:{accountIds:{base:1036135},publisherId:"eslmedia-theindependent",ampBelowArticleMode:"thumbnails-e1"},permutive:(publication=>publicationConfig[publication]?publicationConfig[publication]:(console.error("No permutive config found for "+publication),{}))(publication.a),menuIds:{[menu.d]:2,[menu.e]:1,[menu.c]:3,[menu.a]:15},googleCaptchaV3Key:"6LdjO88ZAAAAANrVlvQVuU-88Hv9ly51pUhtcm__",googleCaptchaV3Secret:"6LdjO88ZAAAAAHQ93NC_nB3a268-HkyCh5VVcG41",cmp:{enabled:"true"===Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).CMP_ENABLED},gigya:{api_key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_KEY,datacenter:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_DATACENTER,api_secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_SECRET},sailthru:{key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_KEY,secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_SECRET},pressReader:{secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_SECRET,domain:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_DOMAIN},newslettersConfig:newslettersConfig.a[publication.a],fastly:{token:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_TOKEN,serviceId:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_ID},trackonomics:{customerId:"esimedia_t58ukgmjkf95_eveningstandard"}}),sidebarSlot=[1,2,5],articleSlots=size=>Array.apply(null,{length:size}).map(Number.call,Number).map(n=>n+1);configManager.addPublication(publication.a,{atexEnabled:!0,chartbeatApiKey:"cf0b9565bddfde442d7b02a5ffd7d419",description:"Latest London news, business, sport, showbiz and entertainment from the London Evening Standard."}),configManager.addAdConfig({ampAd:{type:"doubleclick","data-slot":"/8057/","data-multi-size-validation":"false","rtc-config":'{ "vendors": { "lotame": { "CLIENT_ID": "4810", "AD_NETWORK": "DC" } } }',json:'{"targeting":{"pos":[], "test": true }}'},sidebarSlot:sidebarSlot,articleSlot:articleSlots(10).filter(n=>!sidebarSlot.includes(n)),cleanAmpArticleSlot:articleSlots(10)});__webpack_exports__.a=configManager},164:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isEmptyStringOnly})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isResponsiveRequired}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const isEmptyStringOnly=function(props,propName){if(""!==props[propName]&&void 0!==props[propName])return new Error(`Only empty string is allowed for ${propName} attribute`)},isResponsiveRequired=function(props){if("responsive"!==props.layout)return new Error("Required responsive layout");prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array(...arguments)}},184:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return FOOTER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ES_BEST})),__webpack_require__.d(__webpack_exports__,"d",(function(){return FULL_NAV})),__webpack_require__.d(__webpack_exports__,"e",(function(){return NAV_BAR})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ES_BEST_ID}));const FOOTER="footer",ES_BEST="es_best",FULL_NAV="full_nav",NAV_BAR="nav_bar",ES_BEST_ID="15"},185:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(344);const Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  width: 100%;
  position: relative;
  margin-bottom: 22px;
  height: 56px;

  &.inline {
    flex: ${props=>props.inlineFlexGrow||"1"} 1 110px;
    margin-right: 16px;
  }

  select {
    border-radius: 5px;
    position: relative;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 16px;
    line-height: 1.75rem;
    font-weight: normal;
    letter-spacing: normal;
    width: 100%;
    border: 1px solid ${props=>props.theme.color.formGrey};
    outline: none;
    background-color: transparent;
    white-space: nowrap;
    cursor: pointer;
    appearance: none;
    text-decoration: inherit;
    text-transform: inherit;
    box-sizing: border-box;
    height: 56px;
    padding: 10px 52px 10px 16px;
  }

  select:hover {
  }

  .error-text,
  .help-text {
    position: absolute;
    display: block;
    top: 60px;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 0 0 0 16px;
    font-size: 12px;
    letter-spacing: normal;
    line-height: 1;
    z-index: 1;
    text-align: left;
  }

  .error-text {
    color: ${props=>props.theme.color.formError};
  }

  .user-invalid ~ .visible {
    opacity: 1;
    display: block;
  }

  .help-text {
    opacity: 0;
    color: ${props=>props.theme.color.font};
  }

  select:focus {
    outline: 0;
    ~ .help-text {
      opacity: 1;
    }
    ~ .error-text {
      opacity: 0;
    }
  }

  label {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    line-height: 1.15rem;
    left: 16px;
    right: initial;
    top: 31px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    position: absolute;
    transform-origin: left top;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    background: transparent;
  }

  select.valid,
  select:focus {
    & ~ label {
      transform: translateY(-210%) scale(0.75);
      background: #fff;
      padding: 0 4px;
    }
  }

  select.input-has-value ~ label {
    transform: translateY(-210%) scale(0.75);
    background: #fff;
    padding: 0 4px;
  }

  select.user-invalid {
    border: 2px solid ${props=>props.theme.color.formError};
  }

  select:focus {
    border: 2px solid ${props=>props.theme.color.formFocus};
  }
`,Icon=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  position: absolute;

  transform: rotate(0deg);
  transform-origin: center center;
  transition: transform 0.3s;
  right: 16px;
  top: 21px;

  svg {
    fill: ${props=>props.theme.color.formGrey};
    width: 12px;
    height: 10px;
  }
`,Select=({fieldName:fieldName,fieldId:fieldId,options:options,displayName:displayName="",helperText:helperText="",fieldRequired:fieldRequired=!1,validationMsg:validationMsg="",defaultValue:defaultValue="",inlineFlexGrow:inlineFlexGrow=""})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{inlineFlexGrow:inlineFlexGrow,className:inlineFlexGrow?"inline":"",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{name:fieldName,id:fieldId,required:fieldRequired,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-select",{valid:defaultValue}),defaultValue:defaultValue,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"",disabled:!0}),options]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{dangerouslySetInnerHTML:{__html:_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__.a}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:fieldId,children:displayName}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mdc-line-ripple"}),validationMsg&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:validationMsg}),helperText&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"help-text",children:helperText})]});Select.propTypes={fieldName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,fieldId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,displayName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,helperText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fieldRequired:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,validationMsg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,inlineFlexGrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Select)``},2072:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(253).configure)([__webpack_require__(2073)],module,!1)}).call(this,__webpack_require__(79)(module))},2073:function(module,exports,__webpack_require__){var map={"./Article/AMP/Page.stories.js":2074,"./Article/ArticlePage.stories.js":2221,"./Article/GalleryArticle.stories.js":2201,"./Article/ProductReviewArticle.stories.js":2202,"./Article/VideoArticle.stories.js":2203,"./Other/Components/Byline.stories.js":2204,"./Other/Components/LoginModal.stories.js":2206,"./Section/SectionPage.stories.js":2217,"./StaticPages/Profile.stories.js":2219};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2073},2074:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AMPArticlePageStory",(function(){return AMPArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPGalleryArticlePageStory",(function(){return AMPGalleryArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPVideoArticlePageStory",(function(){return AMPVideoArticlePageStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(350),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(349);const ArticlePage=__webpack_require__(251).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a),MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/AMP/Page",component:ArticlePage};const AMPArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPArticlePageStory.storyName="Full article page",AMPArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPGalleryArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Gallery Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPGalleryArticlePageStory.storyName="Full gallery article page",AMPGalleryArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPVideoArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Video Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPVideoArticlePageStory.storyName="Full video article page",AMPVideoArticlePageStory.parameters={amp:{isEnabled:!0}},AMPArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPArticlePageStory",docgenInfo:AMPArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPGalleryArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPGalleryArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPGalleryArticlePageStory",docgenInfo:AMPGalleryArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPVideoArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPVideoArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPVideoArticlePageStory",docgenInfo:AMPVideoArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"})},2086:function(module,exports,__webpack_require__){const ampTemplateModule=__webpack_require__(643),templateHTML=ampTemplateModule.default({styles:"",title:"ES Storybook"});ampTemplateModule.default=()=>({replace:(storyCodeMarker,content)=>templateHTML.replace("</head>",'\n<script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"><\/script>\n<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>\n<script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"><\/script>\n\n<script>\n// fix time to 01/07/2020\nDate = class extends Date {\n  constructor(options) {\n    super(options ?? 1593558000000);\n  }\n};\n<\/script>\n<style type="text/css">\n[id^="jwplayer"] {\n  background: hotpink;\n  position: relative;\n}\n\n[id^="jwplayer"]:before {\n  content: "VIDEO PLAYER";\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 15px);\n  left: 0;\n  color: white;\n}\n\n.show-in-storybook {\n  display: flex !important; /* Override [amp-access][amp-access-hide] */\n}\n</style></head>').replace('<script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>',"").replace(storyCodeMarker,content).replace(/<excessremovablewrapper>/g,"").replace(/<\/excessremovablewrapper>/g,"")})},2088:function(module,exports,__webpack_require__){var map={"./af":697,"./af.js":697,"./ar":698,"./ar-dz":699,"./ar-dz.js":699,"./ar-kw":700,"./ar-kw.js":700,"./ar-ly":701,"./ar-ly.js":701,"./ar-ma":702,"./ar-ma.js":702,"./ar-sa":703,"./ar-sa.js":703,"./ar-tn":704,"./ar-tn.js":704,"./ar.js":698,"./az":705,"./az.js":705,"./be":706,"./be.js":706,"./bg":707,"./bg.js":707,"./bm":708,"./bm.js":708,"./bn":709,"./bn-bd":710,"./bn-bd.js":710,"./bn.js":709,"./bo":711,"./bo.js":711,"./br":712,"./br.js":712,"./bs":713,"./bs.js":713,"./ca":714,"./ca.js":714,"./cs":715,"./cs.js":715,"./cv":716,"./cv.js":716,"./cy":717,"./cy.js":717,"./da":718,"./da.js":718,"./de":719,"./de-at":720,"./de-at.js":720,"./de-ch":721,"./de-ch.js":721,"./de.js":719,"./dv":722,"./dv.js":722,"./el":723,"./el.js":723,"./en-au":724,"./en-au.js":724,"./en-ca":725,"./en-ca.js":725,"./en-gb":726,"./en-gb.js":726,"./en-ie":727,"./en-ie.js":727,"./en-il":728,"./en-il.js":728,"./en-in":729,"./en-in.js":729,"./en-nz":730,"./en-nz.js":730,"./en-sg":731,"./en-sg.js":731,"./eo":732,"./eo.js":732,"./es":733,"./es-do":734,"./es-do.js":734,"./es-mx":735,"./es-mx.js":735,"./es-us":736,"./es-us.js":736,"./es.js":733,"./et":737,"./et.js":737,"./eu":738,"./eu.js":738,"./fa":739,"./fa.js":739,"./fi":740,"./fi.js":740,"./fil":741,"./fil.js":741,"./fo":742,"./fo.js":742,"./fr":743,"./fr-ca":744,"./fr-ca.js":744,"./fr-ch":745,"./fr-ch.js":745,"./fr.js":743,"./fy":746,"./fy.js":746,"./ga":747,"./ga.js":747,"./gd":748,"./gd.js":748,"./gl":749,"./gl.js":749,"./gom-deva":750,"./gom-deva.js":750,"./gom-latn":751,"./gom-latn.js":751,"./gu":752,"./gu.js":752,"./he":753,"./he.js":753,"./hi":754,"./hi.js":754,"./hr":755,"./hr.js":755,"./hu":756,"./hu.js":756,"./hy-am":757,"./hy-am.js":757,"./id":758,"./id.js":758,"./is":759,"./is.js":759,"./it":760,"./it-ch":761,"./it-ch.js":761,"./it.js":760,"./ja":762,"./ja.js":762,"./jv":763,"./jv.js":763,"./ka":764,"./ka.js":764,"./kk":765,"./kk.js":765,"./km":766,"./km.js":766,"./kn":767,"./kn.js":767,"./ko":768,"./ko.js":768,"./ku":769,"./ku.js":769,"./ky":770,"./ky.js":770,"./lb":771,"./lb.js":771,"./lo":772,"./lo.js":772,"./lt":773,"./lt.js":773,"./lv":774,"./lv.js":774,"./me":775,"./me.js":775,"./mi":776,"./mi.js":776,"./mk":777,"./mk.js":777,"./ml":778,"./ml.js":778,"./mn":779,"./mn.js":779,"./mr":780,"./mr.js":780,"./ms":781,"./ms-my":782,"./ms-my.js":782,"./ms.js":781,"./mt":783,"./mt.js":783,"./my":784,"./my.js":784,"./nb":785,"./nb.js":785,"./ne":786,"./ne.js":786,"./nl":787,"./nl-be":788,"./nl-be.js":788,"./nl.js":787,"./nn":789,"./nn.js":789,"./oc-lnc":790,"./oc-lnc.js":790,"./pa-in":791,"./pa-in.js":791,"./pl":792,"./pl.js":792,"./pt":793,"./pt-br":794,"./pt-br.js":794,"./pt.js":793,"./ro":795,"./ro.js":795,"./ru":796,"./ru.js":796,"./sd":797,"./sd.js":797,"./se":798,"./se.js":798,"./si":799,"./si.js":799,"./sk":800,"./sk.js":800,"./sl":801,"./sl.js":801,"./sq":802,"./sq.js":802,"./sr":803,"./sr-cyrl":804,"./sr-cyrl.js":804,"./sr.js":803,"./ss":805,"./ss.js":805,"./sv":806,"./sv.js":806,"./sw":807,"./sw.js":807,"./ta":808,"./ta.js":808,"./te":809,"./te.js":809,"./tet":810,"./tet.js":810,"./tg":811,"./tg.js":811,"./th":812,"./th.js":812,"./tk":813,"./tk.js":813,"./tl-ph":814,"./tl-ph.js":814,"./tlh":815,"./tlh.js":815,"./tr":816,"./tr.js":816,"./tzl":817,"./tzl.js":817,"./tzm":818,"./tzm-latn":819,"./tzm-latn.js":819,"./tzm.js":818,"./ug-cn":820,"./ug-cn.js":820,"./uk":821,"./uk.js":821,"./ur":822,"./ur.js":822,"./uz":823,"./uz-latn":824,"./uz-latn.js":824,"./uz.js":823,"./vi":825,"./vi.js":825,"./x-pseudo":826,"./x-pseudo.js":826,"./yo":827,"./yo.js":827,"./zh-cn":828,"./zh-cn.js":828,"./zh-hk":829,"./zh-hk.js":829,"./zh-mo":830,"./zh-mo.js":830,"./zh-tw":831,"./zh-tw.js":831};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2088},2095:function(module,exports){},2097:function(module,exports){},2109:function(module,exports){},211:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8);__webpack_exports__.a=WrappedComponent=>({...props})=>Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(({res:{locals:{cleanAmp:cleanAmp}}})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent,{cleanAmp:cleanAmp,...props})))},2111:function(module,exports){},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const Embed=__webpack_require__(2).default.div`
  display: flex;
  clear: both;
  width: 100%;
  max-width: 100%;
  > * {
    margin: auto;
  }
`,HTMLEmbed=({data:{markup:markup}})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Embed,{dangerouslySetInnerHTML:{__html:markup}});HTMLEmbed.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired},HTMLEmbed.__docgenInfo={description:"",methods:[],displayName:"HTMLEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}},__webpack_exports__.a=HTMLEmbed,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/HTML.js"]={name:"HTMLEmbed",docgenInfo:HTMLEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/HTML.js"})},213:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment),services_article=__webpack_require__(100);const getDataByType=(req,res)=>{const{cleanAmp:cleanAmp,configuration:{domain:domain}}=res.locals;let data={};if(res.locals.article){var _article$authors,_article$topics;const article=res.locals.article,{path:path,publish:publish}=article,channels=path.slice(1).split("/").slice(0,-1),utc=moment_default.a.unix(publish).utc(),publishedTime=utc.format("hh:mm:ss"),publishedDate=utc.format("dddd, D MMMM YYYY");data={page_type:"liveblog"===(null==article?void 0:article.type)?"Live Blog Article":"Article",site_sections:channels.join(":"),is_amp_page:cleanAmp,article_premium_status:(null==article?void 0:article.premium)?"premium":"free",article_id:(null==article?void 0:article.remoteId)||(null==article?void 0:article.id),article_title:null==article?void 0:article.title,article_author:null==article||null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(x=>x.name).join(","),article_category:"",article_publication_time:publishedTime,published_date:publishedDate,first_published_date:publishedDate,homepage_section:"",article_page_filename:path.split("/").slice(-1)[0],lead_media_item:Object(services_article.b)(article.hero),article_topic_tags:null==article||null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(x=>x.name).join(","),word_count:null==article?void 0:article.wordCount,internal_links_count:article.body?Object(services_article.d)(article.body,domain):0}}if(res.locals.section){const feed=res.locals.section,{path:path}=feed.section,channels=path.slice(1).split("/");data={page_type:"/"===path?"frontpage":path.startsWith("/topic/")?"Topic":path.startsWith("/author/")?"Author":"Channel frontpage",site_sections:channels.join(":"),is_topic_page:cleanAmp}}return data},getAmpState=(req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!0,...getDataByType(0,res)}};var Styles=__webpack_require__(3),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
  max-width: 968px;
  width: 1000px;
  position: sticky;
  height: 0px;
  padding: 0px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  display: none;
  @media ${Styles.c.adBreakpointMedium} {
    display: block;
  }
`,LeftSkin=Object(styled_components_browser_esm.default)(MPU.a)`
  position: fixed;
  margin-left: -140px;
  @media ${Styles.c.adBreakpointMedium} {
    margin-left: -180px;
  }
  @media ${Styles.c.adBreakpointLarge} {
    margin-left: -330px;
  }
  top: 96px;
`,RightSkin=Object(styled_components_browser_esm.default)(MPU.a)`
  position: fixed;
  margin-left: 998px;
  top: 96px;
`,Gutter=({className:className,...rest})=>Object(jsx_runtime.jsxs)(Root,{className:className,children:[Object(jsx_runtime.jsx)(LeftSkin,{className:className,id:"gtl","size-key":"GUTTER","force-bulk":!0,...rest}),Object(jsx_runtime.jsx)(RightSkin,{className:className,id:"gtr","size-key":"GUTTER","force-bulk":!0,...rest})]});Gutter.propTypes={className:prop_types_default.a.string},Gutter.__docgenInfo={description:"",methods:[],displayName:"Gutter",props:{className:{type:{name:"string"},required:!1,description:""}}};var Ads_Gutter=Gutter;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Gutter.js"]={name:"Gutter",docgenInfo:Gutter.__docgenInfo,path:"app/component/library/Ads/Gutter.js"});const Skin=({className:className,...props})=>Object(jsx_runtime.jsx)(MPU.a,{id:"skin",className:className,"size-key":"SKIN","force-bulk":!0,...props});Skin.propTypes={className:prop_types_default.a.string};var Ads_Skin=Object(styled_components_browser_esm.default)(Skin)`
  height: 0;
  position: sticky;
  top: 100px;
  padding: 0px;
  left: 0;
  z-index: 10;
`,Helmet=__webpack_require__(64);const COOKIE_URL="https://www.standard.co.uk/service/cookie-policy-7785319.html",Wrapper=styled_components_browser_esm.default.div`
  background-color: rgba(34, 34, 34, 0.2);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`,Modal=styled_components_browser_esm.default.div`
  position: relative;
  width: 85vw;
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 15vh;

  @media ${Styles.c.tablet} {
    width: 600px;
  }

  p {
    color: ${props=>props.theme.color.contrastDarker};
    font-size: 15px;
    text-align: center;
    padding: 20px 30px 0;
  }

  div.modal-header {
    background: ${props=>props.theme.color.formGrey};
    color: ${props=>props.theme.color.contrastLight};
    width: 100%;
    border-radius: 6px 6px 0 0;
    font-size: 16px;
    font-weight: ${props=>props.theme.fontWeight.medium};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    box-sizing: border-box;
    padding: 12px;
    text-align: center;
  }
`,CloseButton=styled_components_browser_esm.default.button`
  cursor: pointer;
  font-size: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.contrastLight};
  position: absolute;
  top: 10px;
  right: 12px;

  &:after {
    content: '\\2715';
    padding-left: 4px;
    display: flex;
    align-items: center;
  }
`,BackButton=styled_components_browser_esm.default.button`
  cursor: pointer;
  font-size: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.contrastLight};
  position: absolute;
  top: 12px;
  left: 12px;

  &:after {
    content: '\\003C  back';
    padding-left: 4px;
    display: flex;
    align-items: center;
  }
`,ConsentButton=styled_components_browser_esm.default.button`
  border-radius: 6px;
  background: ${props=>props.theme.color.primary};
  color: ${props=>props.theme.color.contrastLight};
  padding: 8px 24px;
  font-weight: ${props=>props.theme.fontWeight.normal};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};

  &:last-child {
    margin-left: 10px;
  }

  &.secondary {
    background: ${props=>props.theme.color.formGrey};
  }
`,ButtonWrapper=styled_components_browser_esm.default.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`,ModalHeader=({heading:heading,backFn:backFn})=>Object(jsx_runtime.jsxs)("div",{className:"modal-header",children:[backFn&&Object(jsx_runtime.jsx)(BackButton,{on:backFn,role:"button"}),Object(jsx_runtime.jsx)("span",{children:heading}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]});ModalHeader.propTypes={heading:prop_types_default.a.string.isRequired,backFn:prop_types_default.a.string};const AmpConsent=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-consent",src:"https://cdn.ampproject.org/v0/amp-consent-0.1.js"}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-geo",src:"https://cdn.ampproject.org/v0/amp-geo-0.1.js"})]}),Object(jsx_runtime.jsx)("amp-geo",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({ISOCountryGroups:{eea:["preset-eea"]}})}})}),Object(jsx_runtime.jsxs)("amp-consent",{layout:"nodisplay",id:"consent-element",children:[Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({consentInstanceId:"my-consent",promptUI:"consent-ui",consentRequired:!1,geoOverride:{eea:{consentRequired:!0}}})}}),Object(jsx_runtime.jsxs)(Wrapper,{id:"consent-ui",children:[Object(jsx_runtime.jsxs)(Modal,{id:"acceptScreen",children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Our use of cookies"}),Object(jsx_runtime.jsxs)("p",{children:["We and our partners use cookies and other technologies to help us understand how readers use our website, and to deliver relevant content and advertising. Click “Accept” to consent to the use of this technology and the processing of your personal data for these purposes. More information is available in our"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"cookie notice"}),". If you do not agree, click to manage your options."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:manageScreen.show,acceptScreen.hide",role:"button",className:"secondary",children:"Manage"})]}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]}),Object(jsx_runtime.jsxs)(Modal,{id:"manageScreen",hidden:!0,children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Options",backFn:"tap:manageScreen.hide,acceptScreen.show"}),Object(jsx_runtime.jsxs)("p",{children:["Choosing to accept cookies from our advertising partner Google will allow you to receive personalised advertising. If you choose to decline, the advertising made available throughout the site will not be tailored to you. For more information, please read our cookie notice"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.reject",role:"button",className:"secondary",children:"Decline"})]})]})]})]})]}):null;AmpConsent.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AmpConsent.__docgenInfo={description:"",methods:[],displayName:"AmpConsent",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var AMP_AmpConsent=Object(RequestProvider.withRequest)(AmpConsent);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/AmpConsent.js"]={name:"AmpConsent",docgenInfo:AmpConsent.__docgenInfo,path:"app/component/library/AMP/AmpConsent.js"});const AmpAnalytics=({type:type,configJson:configJson,...others})=>Object(jsx_runtime.jsx)("amp-analytics",{type:type,...others,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(configJson)}})});AmpAnalytics.propTypes={type:prop_types_default.a.string.isRequired,configJson:prop_types_default.a.object.isRequired},AmpAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpAnalytics",props:{type:{type:{name:"string"},required:!0,description:""},configJson:{type:{name:"object"},required:!0,description:""}}};var Analytics=AmpAnalytics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics.js"]={name:"AmpAnalytics",docgenInfo:AmpAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics.js"});const AmpComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"comscore",configJson:{vars:{c2:configuration.comscore.clientId},extraUrlParams:{comscorekw:"amp"}}}):null)};AmpComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Comscore=Object(RequestProvider.withRequest)(AmpComscoreAnalytics),State=__webpack_require__(339);const AmpAuth=({article:article,section:section,configuration:configuration})=>{const regSourceSection=article&&article.sections&&article.sections[0].name||section&&section.section&&section.section.name||"News",regSourceMethod=encodeURIComponent((article?"Article":"Section")+"+Signpost"),newsletterKey=((article,section,config)=>{if(!config)return;let key="receiveHeadlinesNews";if(section&&section.components){const comp=section.components.find(comp=>"NewsLetterSignup"===comp.type);comp&&(key=comp.newsletterTarget)}if(article&&article.sections){const articleSections=[...article.sections].reverse();key=Object.keys(config).find(newsletter=>articleSections.find(section=>config[newsletter].section===section.name))}return key})(article,section,configuration.newslettersConfig),json={authorization:"/internal-api/login-authorization.json?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",noPingback:"true",login:{"sign-in":"/login?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL","register-newsletter":`/register?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL&regSourceSection=${regSourceSection}&regSourceMethod=${regSourceMethod}${newsletterKey&&"&newsletter="+newsletterKey}`},authorizationFallbackResponse:{error:"true",fullName:"",loggedIn:!1,nickname:!1,subscriber:!1}};return Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{id:"amp-access",type:"application/json",children:JSON.stringify(json)})})};AmpAuth.propTypes={article:prop_types_default.a.object,section:prop_types_default.a.object,configuration:prop_types_default.a.object},AmpAuth.__docgenInfo={description:"",methods:[],displayName:"AmpAuth",props:{article:{type:{name:"object"},required:!1,description:""},section:{type:{name:"object"},required:!1,description:""},configuration:{type:{name:"object"},required:!1,description:""}}};var library_AmpAuth=Object(RequestProvider.withRequest)(AmpAuth);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AmpAuth.js"]={name:"AmpAuth",docgenInfo:AmpAuth.__docgenInfo,path:"app/component/library/AmpAuth.js"});const functionString=(()=>{const referrer=document.referrer?new URL(document.referrer):"",getCookie=function(name,defaultValue=!1){const match=document.cookie.match(new RegExp("(^|;|\\s+)"+name+"=(.*?)[;|$]"));return match?decodeURIComponent(match[2]):defaultValue},d=new Date,YYYY=new Intl.DateTimeFormat("en",{year:"numeric",timezone:"UTC"}).format(d),MM=new Intl.DateTimeFormat("en",{month:"2-digit",timezone:"UTC"}).format(d),DD=new Intl.DateTimeFormat("en",{day:"2-digit",timezone:"UTC"}).format(d),hh=new Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1,timezone:"UTC"}).format(d),mm=new Intl.DateTimeFormat("en",{minute:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0"),ss=new Intl.DateTimeFormat("en",{second:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0");var name;Object.assign(window.digitalData,{page_title:document.title,page_query:document.location.search,page_name:document.location.pathname,page_previous_url:referrer&&referrer.protocol+"://"+referrer.host+referrer.pathname,page_previous_path:referrer&&referrer.pathname,page_previous_query:referrer&&referrer.search,timestamp:`${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,gigya_logged_in_status:(name="esi_auth",!1!==getCookie(name)?"logged in":"not logged in"),gigya_uid:getCookie("esi_guid"),gigya_registration_date:getCookie("esi_registration_date"),gigya_share_provider:"",gigya_demographics:getCookie("esi_demographics"),gigya_sign_on_provider:getCookie("esi_sign_on_provider"),gigya_user_status:getCookie("esi_user_status","anonymous")})}).toString().match(/{([\s|\S]+)}/m)[1],AdobeAnalytics=props=>{const{req:req,res:res,res:{locals:{cleanAmp:cleanAmp}}}=props,ampData=((req,res)=>{const{locals:{configuration:{domain:domain,subdomain:subdomain}}}=res;return{requests:{base:"//${host}",iframeMessage:"${base}/iframe/launch.html"},vars:{host:`${subdomain.static}.${domain}`},extraUrlParams:{page_url:"${canonicalUrl}",actual_url:"${sourceUrl}",page_domain:"${sourceHost}",page_path:"${sourcePath}",page_title:"${title}",page_query:"",page_name:"${sourcePath}",page_categories:"",page_type:"",page_previous_url:"${documentReferrer}",page_previous_path:"",page_previous_query:"",...getDataByType(0,res)}}})(0,res),webData=((req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!1,...getDataByType(0,res)}})(req,res),jsonString=JSON.stringify(webData);return cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics_nativeConfig",configJson:ampData}):Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{children:`digitalData = ${jsonString}; ${functionString}`})})};AdobeAnalytics.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AdobeAnalytics.__docgenInfo={description:"",methods:[],displayName:"AdobeAnalytics",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Adobe=Object(RequestProvider.withRequest)(AdobeAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Adobe.js"]={name:"AdobeAnalytics",docgenInfo:AdobeAnalytics.__docgenInfo,path:"app/component/library/Analytics/Adobe.js"});const getChartbeatVars=res=>{const{locals:{domain:domain,configuration:{chartbeat:chartbeat}}}=res,title=(({locals:{article:article}})=>null==article?void 0:article.title)(res),sections=(({locals:{article:article,section:section}})=>{var _section$section,_article$sections,_article$sections$;return[...(null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path.split("/").slice(1))||[],...[Object(services_article.b)(null==article?void 0:article.hero)].filter(x=>x).map(x=>"mediatype_"+x),(null==article?void 0:article.premium)?"article-typepremium":"article-typenon-premium",...(null==article||null===(_article$sections=article.sections)||void 0===_article$sections||null===(_article$sections$=_article$sections[0])||void 0===_article$sections$?void 0:_article$sections$.path.split("/").slice(1))||[],...((null==article?void 0:article.topics)||[]).map(({path:path})=>path.split("/").slice(1).join("-"))].join()})(res),authors=(({locals:{article:article}})=>article?(article.authors||[]).map(({name:name})=>name).join():"")(res);return{uid:(null==chartbeat?void 0:chartbeat.uid)||null,domain:domain,title:title,sections:sections,authors:authors}},ChartbeatAnalytics=({res:res,res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"chartbeat",configJson:{vars:{...getChartbeatVars(res)}}}):null;ChartbeatAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ChartbeatAnalytics.__docgenInfo={description:"",methods:[],displayName:"ChartbeatAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Chartbeat=Object(RequestProvider.withRequest)(ChartbeatAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Chartbeat.js"]={name:"ChartbeatAnalytics",docgenInfo:ChartbeatAnalytics.__docgenInfo,path:"app/component/library/Analytics/Chartbeat.js"});const ComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco,comsoreClientId;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:(comsoreClientId=configuration.comscore.clientId,`\nvar _comscore = _comscore || [];\n_comscore.push({ c1: "2", c2: ${comsoreClientId} });\n(function() {\n  var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;\n  s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/${comsoreClientId}/cs.js";\n  el.parentNode.insertBefore(s, el);\n})();`)}}))};ComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Analytics_Comscore=Object(RequestProvider.withRequest)(ComscoreAnalytics);const GoogleAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:{ga:{id:id}}}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"googleanalytics",id:"analytics2",configJson:{vars:{account:id},triggers:{defaultPageview:{on:"visible",request:"pageview"}}}}):null;GoogleAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},GoogleAnalytics.__docgenInfo={description:"",methods:[],displayName:"GoogleAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Google=Object(RequestProvider.withRequest)(GoogleAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Google.js"]={name:"GoogleAnalytics",docgenInfo:GoogleAnalytics.__docgenInfo,path:"app/component/library/Analytics/Google.js"});var icons_facebookIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 32"><path d="M18 12v6h-6v14H6V18H0v-6h6V9.5c0-1.2.2-2.5.6-3.8.4-1.3.9-2.4 1.6-3.2C9 1.6 9.8 1 10.7.6c.9-.4 2-.6 3-.6H18v6h-4.2c-.5 0-.9.2-1.3.5-.3.4-.5.8-.5 1.3V12h6z"></path></svg>\n';var icons_stampES='<svg class="stamp-es" viewBox="0 0 1024 1040" xmlns="http://www.w3.org/2000/svg"><g transform="translate(26 242)" fill="none" fill-rule="evenodd"><path d="M555.56 291.73c-41.638-29.923-75.96-71.52-75.96-126.98C479.6 69.129 564.324.53 687.02.53c53.33 0 103.73 12.408 137.31 24.805l-3.633 123.34h-14.62c-37.241-81.002-62.809-124.79-118.32-124.79-42.362 0-73.767 28.465-73.767 73.712 0 30.647 20.447 56.196 49.667 77.362l78.144 57.654c59.891 43.789 97.141 77.372 97.141 137.94 0 105.84-102.25 167.87-206.69 167.87-65.737 0-127.1-18.973-157.04-35.765l-5.846-139.4h14.61c45.29 97.069 84 151.81 145.36 151.81 40.893 0 73.022-25.539 73.022-73.712 0-37.223-28.476-63.496-65.727-90.503l-81.072-59.122zM60.028 80.608c0-30.667-11.682-56.196-59.891-59.856V8.354h413.41v134.29h-13.886c-46.005-75.914-61.36-112.4-109.55-112.4h-78.163v229.9h32.139c52.586 0 68.665-22.633 94.958-86.129h11.682v192.68h-11.682c-26.293-63.486-42.372-86.12-94.958-86.12h-32.139v188.3c0 26.283 9.499 40.149 48.933 40.149h21.925c75.95 0 97.866-50.364 146.8-133.56h13.151l-14.61 155.45H.137v-12.398c48.208-3.65 59.891-29.199 59.891-59.856V80.61z" fill="#000"/><circle cx="902.5" cy="482.5" r="57.5" fill="#C51A32"/></g></svg>';var icons_twitterIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29.2"><path d="M31.8 4.6c.7-.1 1.4-.3 2.1-.5s1.4-.4 2.1-.8c-.5.7-1 1.4-1.6 2-.6.6-1.3 1.2-2.1 1.8V8c0 1.7-.2 3.4-.6 5-.4 1.6-1 3.2-1.8 4.8-.8 1.6-1.7 3-3 4.3-1.2 1.3-2.7 2.5-4.3 3.6-1.6 1.1-3.4 1.9-5.3 2.5-1.9.5-3.9.8-6.1.8-2.1 0-4.1-.3-6-.8-1.7-.4-3.5-1.2-5.2-2.3.2 0 .4.1.7.1h1.1c1.8 0 3.4-.3 4.9-.8 1.5-.5 2.9-1.3 4.3-2.4-.8 0-1.6-.1-2.3-.4-.7-.3-1.4-.6-2-1.1-.6-.5-1.2-1-1.6-1.6-.4-.6-.8-1.3-1-2.1.1.1.3.1.5.1h.8c.3 0 .7 0 1-.1s.6-.1 1-.2c-.9-.2-1.7-.5-2.4-.9s-1.3-1-1.9-1.6c-.6-.7-1-1.4-1.2-2.2-.3-.8-.4-1.6-.4-2.6.5.3 1 .5 1.5.6.5.2 1.1.3 1.8.3-1.1-.8-1.9-1.6-2.5-2.7-.5-.8-.8-2-.8-3.3 0-.6.1-1.2.3-1.9.2-.6.4-1.2.8-1.8 1 1.2 2.1 2.3 3.2 3.2S8 6.3 9.3 6.9c1.3.6 2.6 1.1 4 1.5 1.4.3 2.9.5 4.4.6-.1-.3-.2-.5-.2-.8v-.9c0-1 .2-2 .5-2.8.4-.9.9-1.6 1.6-2.4.7-.7 1.5-1.3 2.4-1.6 1-.3 1.9-.5 3-.5s2 .2 2.9.6 1.7.9 2.4 1.7c.8-.2 1.6-.4 2.3-.7.8-.3 1.6-.6 2.3-1-.3.8-.6 1.6-1.2 2.3-.4.6-1.1 1.2-1.9 1.7z"></path></svg>\n';const FooterWrapper=styled_components_browser_esm.default.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 20px;
  border-top: 1px solid ${props=>props.theme.color.contrastDarker};
  padding: 40px 0;
  background-color: ${props=>props.theme.color.contrastLight};
  @media ${Styles.c.laptop} {
    flex-direction: row;
  }
`,FooterMenu=styled_components_browser_esm.default.nav`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  line-height: normal;
  width: 100%;
  height: 372px;
  margin-top: 50px;
  @media ${Styles.c.tablet} {
    height: 250px;
    width: 75%;
    margin-top: 0;
  }
`,FooterLink=styled_components_browser_esm.default.a``,FollowUs=styled_components_browser_esm.default.div`
  width: 50%;
  @media ${Styles.c.tablet} {
    width: auto;
  }
`,SocialTitle=styled_components_browser_esm.default.h2`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 0;
`,SocialLinkWrapper=styled_components_browser_esm.default.div`
  display: flex;
`,SocialLink=styled_components_browser_esm.default.a`
  width: 32px;
  height: 32px;
  display: block;
  border-radius: 50%;
  background-color: ${props=>props.theme.color.contrastDarker};
  margin-right: 10px;
  svg {
    margin: 20%;
    height: 60%;
    width: 60%;
    fill: ${props=>props.theme.color.contrastLight};
  }
  &:hover {
    background-color: ${props=>props.theme.color.primary};
  }
`,Link=styled_components_browser_esm.default.a`
  display: block;
  color: ${props=>props.theme.color.contrastDarker};
  font-size: 14px;
  margin-bottom: 20px;
  width: 50%;
  @media ${Styles.c.tablet} {
    width: auto;
    margin-right: 40px;
  }
  &:hover {
    color: ${props=>props.theme.color.primary};
  }
`,Logo=styled_components_browser_esm.default.a`
  width: 100px;
  height: 100px;
  margin-left: 8px;
  svg {
    width: 60px;
    height: 100%;
    display: block;
  }
  @media ${Styles.c.tablet} {
    width: 80px;
    height: 80px;
  }
  @media ${Styles.c.laptop} {
    margin-left: 16px;
  }
`,Footer=props=>{var _footerMenu$menu;const{menu:{footerMenu:footerMenu},configuration:configuration}=props;return Object(jsx_runtime.jsxs)(FooterWrapper,{children:[Object(jsx_runtime.jsx)(Logo,{href:"/",dangerouslySetInnerHTML:{__html:icons_stampES},"aria-label":"Back to homepage",className:"logo"}),Object(jsx_runtime.jsxs)(FollowUs,{children:[Object(jsx_runtime.jsx)(SocialTitle,{children:"Follow us:"}),Object(jsx_runtime.jsxs)(SocialLinkWrapper,{children:[Object(jsx_runtime.jsx)(SocialLink,{rel:"noopener","aria-label":`Visit ${configuration.name} on Facebook`,href:configuration.social.facebook,dangerouslySetInnerHTML:{__html:icons_facebookIcon}},"facebook"),Object(jsx_runtime.jsx)(SocialLink,{rel:"noopener","aria-label":`Visit ${configuration.name} on Twitter`,href:configuration.social.twitter,dangerouslySetInnerHTML:{__html:icons_twitterIcon}},"twitter")]})]}),Object(jsx_runtime.jsx)(FooterMenu,{children:footerMenu&&(null==footerMenu||null===(_footerMenu$menu=footerMenu.menu)||void 0===_footerMenu$menu?void 0:_footerMenu$menu.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(FooterLink,{children:!/^\//.test(path)&&Object(jsx_runtime.jsx)(Link,{rel:"noopener",href:path,children:title})||Object(jsx_runtime.jsx)(Link,{href:path,children:title})},title+index)))})]})};Footer.propTypes={configuration:prop_types_default.a.object.isRequired,menu:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired};var library_Footer=Object(RequestProvider.withRequest)(Footer);const Frame=styled_components_browser_esm.default.iframe`
  display: none;
  visibility: hidden;
`,GTM=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$gtm;const gtmContainerId=null==configuration||null===(_configuration$gtm=configuration.gtm)||void 0===_configuration$gtm?void 0:_configuration$gtm.containerId;return gtmContainerId&&!cleanAmp?Object(jsx_runtime.jsx)("noscript",{children:Object(jsx_runtime.jsx)(Frame,{src:"https://www.googletagmanager.com/ns.html?id="+gtmContainerId,height:0,width:0})}):null};GTM.propTypes={res:prop_types_default.a.object.isRequired};var library_GTM=Object(RequestProvider.withRequest)(GTM),classes=__webpack_require__(159),closeIcon=__webpack_require__(258),logo=__webpack_require__(348);const SearchWrapper=styled_components_browser_esm.default.div``,SearchInput=styled_components_browser_esm.default.div`
  z-index: 100;
  position: absolute;
  right: 10px;
  padding: 16px;
  background: ${props=>props.theme.color.contrastLight};
  display: none;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};

  @media ${Styles.c.tablet} {
    position: absolute;
    right: 10px;
    width: 640px;
    display: none;
    top: 45px;
    border-radius: 2px;
    box-shadow: -1px 7px 33px 4px rgba(0, 0, 0, 0.26);
  }

  @media ${Styles.c.laptop} {
    padding: 1em;
    border-radius: 2px;
    margin-top: 7px;
    box-shadow: -1px 7px 33px 4px rgba(0, 0, 0, 0.26);
  }

  .search-visible & {
    display: block;
  }

  /* override search base styling */
  .search-input {
    background: ${props=>props.theme.color.contrastLight};
  }
  .gsc-search-box-tools {
    margin-bottom: 0;
  }
  .gsc-search-box-tools .gsc-search-box .gsc-input {
    width: 500px;
    padding: 0;
  }
  .gsc-search-button {
    margin: 0;
    background: ${props=>props.theme.color.primary};
    height: 27px;
    width: 37px;
    outline: none;
    border: 0 none;
    padding: 0;
    text-align: center;
    &:hover {
      background: ${props=>props.theme.color.primary};
    }
  }
  .quick-searchresults {
    overflow: auto;
    max-height: 50vh;
  }
`;var Header_SearchField=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)(SearchWrapper,{children:Object(jsx_runtime.jsxs)(SearchInput,{className:"search-input",children:[Object(jsx_runtime.jsx)("div",{id:"searchBox0"}),Object(jsx_runtime.jsx)("div",{id:"quickSearchresults0",className:"quick-searchresults"})]})}))``,constants_menu=__webpack_require__(184);var icons_expandIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 24"><path d="M0 21.2L9.2 12 0 2.8 2.9 0l12 12-12 12L0 21.2z"></path></svg>\n';const TertiaryList=styled_components_browser_esm.default.ul`
  display: none;
  padding: 0;
  list-style: none;
  @media ${Styles.c.laptop} {
    display: block;
  }
`,TertiaryItem=styled_components_browser_esm.default.li``,TertiaryLink=styled_components_browser_esm.default.a`
  padding: 7px 10px;
  margin: 0 0.75em;
  font-weight: 400;
  font-size: 16px;
  display: block;
  color: ${props=>props.theme.color.contrastDarker};
  @media ${Styles.c.laptop} {
    margin: 6px 0 0;
    font-size: 14px;
    line-height: 1.1em;
    padding: 0;
    display: flex;
  }
`,SecondaryList=styled_components_browser_esm.default.ul`
  list-style: none;
  padding: 0;
  @media ${Styles.c.laptop} {
    padding: 8px;
  }
`,SecondaryItem=styled_components_browser_esm.default.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &.open-section {
    ${TertiaryList} {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    svg {
        transform: rotate(270deg);
      }
    }
  }
  @media ${Styles.c.laptop} {
    display: block;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`,SecondaryLink=styled_components_browser_esm.default.a`
  padding: 7px 10px;
  margin: 0 0.75em;
  font-weight: 400;
  font-size: 16px;
  line-height: 1em;
  color: #888;
  text-transform: uppercase;
  @media ${Styles.c.laptop} {
    margin: 0;
    padding: 0;
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: ${props=>props.theme.color.contrastDarker};
    text-transform: capitalize;
  }
`,Column=styled_components_browser_esm.default.div`
  border-top: 1px solid ${props=>props.theme.color.fontMedium};
  &:first-child {
    border-top: none;
  }
  @media ${Styles.c.laptop} {
    width: 140px;
    page-break-inside: avoid;
    break-inside: avoid-column;
    display: table;
    border-top: 0;
  }
`,SecondaryLinkBtn=styled_components_browser_esm.default.button`
  display: flex;
  font-size: 15px;
  padding: 8px 15px 3px;
  outline: 0;
  @media ${Styles.c.laptop} {
    display: none;
  }
  & > span {
    width: 0.6em;
    svg {
      transform: rotate(90deg);
    }
  }
`,SubNavMenuColumns=({columns:columns,primaryIndex:primaryIndex})=>columns.map(({title:title,children:children,path:path,active:active},secondaryIndex)=>Object(jsx_runtime.jsx)(Column,{className:!0===active?"active":"",children:Object(jsx_runtime.jsx)(SecondaryList,{children:Object(jsx_runtime.jsxs)(SecondaryItem,{id:`subnavMenuSubItem${secondaryIndex}-${primaryIndex}`,children:[Object(jsx_runtime.jsx)(SecondaryLink,{href:path,children:title}),Object(jsx_runtime.jsx)(SecondaryLinkBtn,{on:`tap:subnavMenuSubItem${secondaryIndex}-${primaryIndex}.toggleClass("class"="open-section")`,className:"expand",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:icons_expandIcon}})}),children&&Object(jsx_runtime.jsx)(TertiaryList,{children:children.map(({title:title,path:path},tertiaryIndex)=>Object(jsx_runtime.jsx)(TertiaryItem,{children:Object(jsx_runtime.jsx)(TertiaryLink,{href:path,children:title})},`tertiary-item--${tertiaryIndex}-${secondaryIndex}-${primaryIndex}`))})]})})},`secondary-item--${secondaryIndex}-${primaryIndex}`));SubNavMenuColumns.PropTypes={columns:prop_types_default.a.array.isRequired};var SubNavColumns=SubNavMenuColumns;const SubNavWrapper=styled_components_browser_esm.default.nav`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: ${"48px"};
    box-shadow: inset -30px 0 9px -7px
      ${props=>props.theme.color.contrastLight};
    @media ${Styles.c.tablet} {
      display: none;
    }
  }
`,ColumnWrapper=styled_components_browser_esm.default.div`
  display: none;
  @media ${Styles.c.laptop} {
    position: absolute;
    flex-wrap: wrap;
    left: 0;
    padding: 2px 8px;
    background: ${props=>props.theme.color.contrastLight};
    column-count: 8;
    column-width: 124px;
    column-gap: 16px;
    z-index: 10;
  }
`,PrimaryList=styled_components_browser_esm.default.ul`
  display: flex;
  width: 100%;
  height: ${"48px"};
  padding: 0;
  list-style: none;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  margin: 0;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${Styles.c.maxLaptop} {
    .open-section & {
      display: flex;
      flex-direction: column;
    }
  }
  @media ${Styles.c.tablet} {
    display: flex;
    height: ${"26px"};
  }
`,PrimaryLink=styled_components_browser_esm.default.span`
  font-size: 16px;
  line-height: 1.25;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.fontMedium};
  outline: none;
  white-space: nowrap;
`,PrimaryItem=styled_components_browser_esm.default.li`
  display: block;
  padding: 13px 8px;
  margin: auto;
  &:hover {
    background-color: ${props=>props.theme.color.contrastLight};
    ${ColumnWrapper} {
      display: block;
      background-color: ${props=>props.theme.color.contrastLight};
      width: 100%;
      position: absolute;
      left: 0;
      top: ${"48px"};
      @media ${Styles.c.tablet} {
        top: ${"26px"};
      }
    }
  }
  @media ${Styles.c.tablet} {
    padding: 3px 8px;
    margin: 0;
  }
  &:last-child {
    padding-right: 25px;
  }
`,ES=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.primary};
`,Best=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.contrastDarker};
`,ESBestLink=styled_components_browser_esm.default.a`
  display: flex;
  font: 500 16px ${props=>props.theme.fontFamily.secondaryFont};
  margin: auto 8px auto 12px;
  @media ${Styles.c.tablet} {
    margin-left: 16px;
  }
`,SubNavMenu=({className:className,menu:{menu:menu,bundle:bundle}})=>Object(jsx_runtime.jsxs)(SubNavWrapper,{className:className,id:"subnavMenu",children:[bundle===constants_menu.b&&Object(jsx_runtime.jsxs)(ESBestLink,{href:"/shopping/esbest",children:[Object(jsx_runtime.jsx)(ES,{children:"ES"}),Object(jsx_runtime.jsx)(Best,{children:"BEST"})]}),menu&&[Object(jsx_runtime.jsx)(PrimaryList,{children:menu.map(({title:title,children:children,active:active},primaryIndex)=>Object(jsx_runtime.jsxs)(PrimaryItem,{id:"subnavMenuItem"+primaryIndex,children:[Object(jsx_runtime.jsx)(PrimaryLink,{on:`tap:subnavMenuItem${primaryIndex}.toggleClass("class"="open-section")`,className:!0===active?"active":"",children:title}),children&&Object(jsx_runtime.jsx)(ColumnWrapper,{children:Object(jsx_runtime.jsx)(SubNavColumns,{primaryIndex:primaryIndex,columns:children})})]},"primary-item--"+primaryIndex))},"subnavMenuMenu")]]});SubNavMenu.propTypes={className:prop_types_default.a.string,menu:prop_types_default.a.object.isRequired};var Best_SubNavMenu=Object(styled_components_browser_esm.default)(SubNavMenu)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0 1px 3px rgba(30, 30, 28, 0.2);
  .full-menu-visible & {
    display: none;
  }
`,withScript=__webpack_require__(162);const FullMenuWrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  display: none;
  padding: 40px 20px 20px;
  .full-menu-visible & {
    display: block;
    height: 100%;
  }

  .section-header {
    display: flex;
    border-bottom: 1px solid ${props=>props.theme.color.contrastDarker};
    padding: 13px 0;
    @media ${Styles.c.laptop} {
      margin: 0 0 10px;
    }
    .link {
      display: block;
      text-decoration: none;
      font-size: 13px;
      color: ${props=>props.theme.color.contrastDarker};

      :hover {
        color: ${props=>props.theme.color.link};
      }
    }
    .list-header {
      color: #000;
      font-size: 19px;
      font-family: ${props=>props.theme.fontFamily.secondaryFont};
      line-height: 22px;
      width: 50%;
      @media ${Styles.c.laptop} {
        width: 100%;
      }
      &:hover {
        color: ${props=>props.theme.color.primary};
      }
    }
    .expand {
      text-align: right;
      outline: 0;
      width: 22px;
      height: 22px;
      width: 50%;
      @media ${Styles.c.laptop} {
        display: none;
      }
      svg {
        width: 19px;
        height: 19px;
        transform: rotate(90deg);
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .section-list {
    padding: 0;
    display: none;
    @media ${Styles.c.laptop} {
      padding: 0;
      display: block;
    }
  }
  .open-section {
    border-bottom: 1px solid ${props=>props.theme.color.contrastDarker};
    background: ${props=>props.theme.color.contrastDarker};
    .section-header {
      border-bottom: none;
      .list-header {
        color: ${props=>props.theme.color.primary};
      }
      .expand {
        svg {
          transform: rotate(270deg);
          fill: ${props=>props.theme.color.primary};
        }
      }
    }
    .section-list {
      display: block;
      columns: 2;
      margin-bottom: 20px;
      @media ${Styles.c.tablet} {
        column: 3;
      }
    }
  }
  @media ${Styles.c.laptop} {
    padding: 0;
    .hover-section {
      padding-bottom: 20px;
      padding-right: 20px;
    }
  }
`,List=styled_components_browser_esm.default.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;

  @media ${Styles.c.laptop} {
    padding: 15px;
    display: flex;
    width: 890px;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  > li {
    margin: 0;
    width: 100%;
    @media ${Styles.c.laptop} {
      flex: 0 0 calc(100% / 5 - 20px);
    }
  }
`,SectionItem=styled_components_browser_esm.default.li`
  list-style: none;

  .link {
    line-height: 22px;
    padding: 5px 0;
    display: block;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: ${props=>props.theme.color.contrastDarker};
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    @media ${Styles.c.laptop} {
      padding: 5px 0;
      color: ${props=>props.theme.color.contrastDarker};
      font-weight: ${props=>props.theme.fontWeight.thin};
    }
    :hover {
      font-weight: ${props=>props.theme.fontWeight.thin};
      color: ${props=>props.theme.color.primary};
    }
  }
`,SocialWrapper=styled_components_browser_esm.default.div`
  padding: 16px 0 0;
  @media ${Styles.c.tablet} {
    display: none;
  }

  h2 {
    font-weight: normal;
    font-size: 16px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.contrastDarker};
    margin: 0 0 10px;
    line-height: normal;
    @media ${Styles.c.laptop} {
      padding-top: 15px;
    }
  }

  .link {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #281e1e;
    display: inline-block;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
      background: ${props=>props.theme.color.primary};
    }
  }

  svg {
    margin: 20%;
    height: 60%;
    width: 60%;
    fill: ${props=>props.theme.color.contrastLight};
  }
`,FullMenu=({menu:{menu:menu},configuration:configuration})=>Object(jsx_runtime.jsxs)(FullMenuWrapper,{id:"full-menu",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)(List,{children:null==menu?void 0:menu.map(({title:title,children:children,path:path},index)=>Object(jsx_runtime.jsx)("li",{className:"hover-section",children:Object(jsx_runtime.jsxs)("div",{id:"sectionMenu"+index,children:[Object(jsx_runtime.jsxs)("div",{className:"section-header",children:[Object(jsx_runtime.jsx)("a",{className:"link list-header",href:path,children:title}),children&&Object(jsx_runtime.jsx)("span",{on:`tap:sectionMenu${index}.toggleClass('class'='open-section')`,className:"expand",role:"button",tabIndex:"0",dangerouslySetInnerHTML:{__html:icons_expandIcon}})]}),children&&Object(jsx_runtime.jsx)("ul",{className:"section-list",children:children.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(SectionItem,{children:Object(jsx_runtime.jsx)("a",{className:"link",href:path,children:title})},title+index))})]})},title+index))})}),Object(jsx_runtime.jsxs)(SocialWrapper,{children:[Object(jsx_runtime.jsx)("h2",{children:"Follow us:"}),Object(jsx_runtime.jsx)("a",{rel:"noopener",href:configuration.facebookPage,className:"link",dangerouslySetInnerHTML:{__html:icons_facebookIcon}}),Object(jsx_runtime.jsx)("a",{rel:"noopener",href:configuration.twitterPage,className:"link",dangerouslySetInnerHTML:{__html:icons_twitterIcon}})]})]});FullMenu.propTypes={menu:prop_types_default.a.object,configuration:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired};const FullMenuWithScript=Object(withScript.a)(FullMenu)`
const links = document.querySelectorAll('.link');
links.forEach(async (link) => {
  link.addEventListener('click', async () => {
    const event_name = 'Mega Menu Link Click';
    const linkText = link.innerText;

    const reportSuiteID = '${props=>{var _props$res$locals$con;return null===(_props$res$locals$con=props.res.locals.configuration.adobe)||void 0===_props$res$locals$con?void 0:_props$res$locals$con.reportSuiteId}}';
    const cacheBuster =
      's' + Math.floor(10000000000000 + Math.random() * 90000000000000);
    const queryParameters = [
      '?AQB=1',
      'ndh=0',
      't=' +
        (function () {
          let today = new Date();
          return (
            today.getDate() +
            '/' +
            today.getMonth() +
            '/' +
            today.getFullYear() +
            ' ' +
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds() +
            ' ' +
            today.getDay() +
            ' ' +
            today.getTimezoneOffset()
          );
        })(),
      'g=' + location.href.substring(0, 255),
      '-g=' + location.href.substring(255),
      'events=event37',
      'c6=' + linkText,
      'c7=Burger Nav',
      'pe=lnk_o',
      'pev2=' + event_name,
      'k=N',
      'AQE=1',
    ].join('&');

    let analyticsURL = [
      'https://ssc.standard.co.uk/b/ss/',
      reportSuiteID,
      '/1/JS-2.17.0/',
      cacheBuster,
      queryParameters,
    ].join('');

    const img = document.createElement('amp-img');
    img.setAttribute('src', encodeURI(analyticsURL));
    img.setAttribute('layout', 'fixed');
    img.setAttribute('width', '1');
    img.setAttribute('height', '1');
    img.style.position = 'absolute';
    document.body.appendChild(img);
  });
});
`,Menu=({res:{locals:{cleanAmp:cleanAmp}},...props})=>cleanAmp?Object(jsx_runtime.jsx)(FullMenuWithScript,{...props}):Object(jsx_runtime.jsx)(FullMenu,{...props});Menu.propTypes={...FullMenu.propTypes,res:prop_types_default.a.object.isRequired};var Menu_FullMenu=Object(RequestProvider.withRequest)(Menu);const SectionMenu_Wrapper=styled_components_browser_esm.default.div`
  overflow-x: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 48px;
    box-shadow: inset -30px 0 9px -7px
      ${props=>props.theme.color.contrastLight};
    @media ${Styles.c.tablet} {
      .has-subnav & {
        bottom: 26px;
      }
    }
    @media ${Styles.c.laptop} {
      height: 26px;
      .collapsed & {
        height: 48px;
      }
      .has-subnav & {
        bottom: 0;
      }
    }
  }
`,SectionsList=styled_components_browser_esm.default.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  z-index: 100;
`,ListItem=styled_components_browser_esm.default.li`
  height: 100%;
  white-space: nowrap;
  margin: 0 8px;
  &:first-child {
    margin-left: 12px;
    > ul {
      transform: none;
      left: 8px;
      &:before {
        left: 28px;
      }
    }
    @media ${Styles.c.laptop} {
      margin-left: 16px;
    }
  }
  &:last-child {
    padding-right: 25px;
  }
`,SubSectionList=styled_components_browser_esm.default.ul`
  position: absolute;
  min-width: 120px;
  background: ${props=>props.theme.color.primary};
  padding: 0 8px;
  transform: translateX(-30%);
  list-style: none;
  display: none;
  z-index: -1;
  &:before {
    content: ' ';
    display: block;
    border-bottom: 10px solid ${props=>props.theme.color.primary};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: -6px;
  }

  .menu-navbar-item:hover &,
  .menu-navbar-item.delay-hover & {
    display: block;
    opacity: 1;
    z-index: 2;
  }
`,SubSectionListItem=styled_components_browser_esm.default.li``,BaseLink=styled_components_browser_esm.default.a`
  align-content: center;
  display: flex;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: 400;
  height: 100%;
  align-items: center;
  outline: none;
  &:hover {
    color: ${props=>props.theme.color.primary};
  }
`,SectionLink=Object(styled_components_browser_esm.default)(BaseLink)`
  font-size: 16px;
  line-height: 20px;
  opacity: 1;
  color: ${props=>props.theme.color.contrastDarker};
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    visibility: hidden;
    .menu-navbar-item:hover & {
      visibility: visible;
    }
  }
  &.active,
  &:hover {
    opacity: 1;
    color: ${props=>props.theme.color.link};
  }
  svg {
    width: 52px;
    height: auto;
    padding-bottom: 11px;
  }
`,SubSectionLink=Object(styled_components_browser_esm.default)(BaseLink)`
  color: ${props=>props.theme.color.contrastLight};
  padding: 8px 0;
  border-top: 1px solid ${props=>props.theme.color.contrastLight};
  ${SubSectionListItem}:first-child & {
    border-top: 0 none;
  }
  &.active,
  &:hover {
    color: ${props=>props.theme.color.contrastDarker};
  }
`,SectionMenu=({menu:menu})=>{if(!menu||!Array.isArray(menu.menu))return null;const{menu:listMenu}=menu;return Object(jsx_runtime.jsx)(SectionMenu_Wrapper,{children:Object(jsx_runtime.jsx)(SectionsList,{children:listMenu.map(({title:title,children:children,path:path,active:active},index)=>Object(jsx_runtime.jsxs)(ListItem,{className:"menu-navbar-item",children:[Object(jsx_runtime.jsx)(SectionLink,{href:path,className:!0===active?"active":"",children:title}),children&&Object(jsx_runtime.jsx)(SubSectionList,{className:"hover-menu",children:children.map(({title:title,path:path,active:active},i)=>Object(jsx_runtime.jsx)(SubSectionListItem,{className:!0===active?"active":"",children:Object(jsx_runtime.jsx)(SubSectionLink,{href:path,children:title})},title+i))})]},title+index))})})};SectionMenu.propTypes={menu:prop_types_default.a.object},SectionMenu.__docgenInfo={description:"",methods:[],displayName:"SectionMenu",props:{menu:{type:{name:"object"},required:!1,description:""}}};var Menu_SectionMenu=SectionMenu;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Menu/SectionMenu.js"]={name:"SectionMenu",docgenInfo:SectionMenu.__docgenInfo,path:"app/component/library/Menu/SectionMenu.js"});const HeaderWrapper=styled_components_browser_esm.default.header`
  width: 100%;
  z-index: 100;
  background: ${props=>props.theme.color.contrastLight};
  position: sticky;
  top: 0;
  box-shadow: 0 1px 3px rgba(30, 30, 28, 0.2);
  &.has-subnav {
    box-shadow: none;
  }
  .hidden {
    width: 0;
    display: none;
  }
`,FirstRowWrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  height: 61px;
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  @media ${Styles.c.laptop} {
    height: 54px;
    .collapsed & {
      height: 48px;
    }
  }
`,MenuWrapper=styled_components_browser_esm.default.div`
  display: none;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  @media ${Styles.c.tablet} {
    display: flex;
    height: 48px;
    .full-menu-visible & {
      display: none;
    }
  }
  @media ${Styles.c.laptop} {
    height: 26px;
    .collapsed & {
      height: 48px;
      border-left: 1px solid ${props=>props.theme.color.navGrey};
      border-top: 0 none;
      position: absolute;
      top: 0;
      left: 92px;
      width: calc(100% - 387px);
    }
  }
`,LoginRegister=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  background-color: ${props=>props.theme.color.contrastLight};
  z-index: 1;
  > * {
    padding: 0 12px;
    line-height: 1.25;
    height: 100%;
    border-left: 1px solid ${props=>props.theme.color.navGrey};
    align-items: center;
    display: flex;
    font-size: ${props=>props.theme.fontSize.menu};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    outline: none;
    @media ${Styles.c.tablet} {
      padding: 0 12px;
    }
    @media ${Styles.c.laptop} {
      padding: 0 20px;
    }
    &:hover {
      background-color: #f4f4f4;
    }
  }
  .login-button {
    color: ${props=>props.theme.color.contrastDarker};
    font-weight: ${props=>props.theme.fontWeight.normal};
    outline: none;
  }
  .register {
    color: ${props=>props.theme.color.primary};
  }
`,HamburgerMenu=styled_components_browser_esm.default.div`
  @media ${Styles.c.laptop} {
    padding-right: 16px;
  }
  svg {
    display: none;
    &:first-child {
      display: block;
      width: 18px;
      height: 12px;
    }
  }
  .full-menu-visible & {
    svg {
      display: block;
      &:first-child {
        display: none;
      }
    }
  }
`,MenuButton=styled_components_browser_esm.default.button`
  outline: none;
`,SearchButton=Object(styled_components_browser_esm.default)(MenuButton)`
  position: relative;
  svg {
    width: auto;
    height: 18px;
    display: none;
    &:first-child {
      display: block;
    }
  }
  .search-visible & {
    overflow: hidden;
    z-index: 1;
    margin-bottom: 7px;
    svg {
      display: block;
      margin-bottom: -2px;
      height: 18px;
      &:first-child {
        display: none;
      }
    }
  }
`,LogoWrapper=styled_components_browser_esm.default.a`
  max-width: 250px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  .masthead {
    display: none;
    height: 100%;
    @media ${Styles.c.tablet} {
      display: block;
    }
    @media ${Styles.c.laptop} {
      height: 100%;
    }
    .full-menu-visible & {
      display: none;
    }
  }
  .stamp-es {
    display: block;
    height: 60px;
    .full-menu-visible & {
      display: block;
      height: 54px;
    }
    @media ${Styles.c.tablet} {
      display: none;
    }
  }
  @media ${Styles.c.tablet} {
    max-width: 252px;
  }
  @media ${Styles.c.laptop} {
    max-width: 348px;
    margin-left: 16px;
    // collapse logo on desktop when scroll
    .collapsed & {
      margin-left: 20px;
      .masthead {
        display: none;
      }
      .stamp-es {
        display: block;
        height: 54px;
        margin-right: 20px;
      }
    }
  }
`,Header=props=>{const{className:className,cleanAmp:cleanAmp,menu:menu}=props,hasSubNav=menu.subnavMenu;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(HeaderWrapper,{className:Object(classes.a)(className,hasSubNav?"has-subnav":""),id:"header",children:[Object(jsx_runtime.jsxs)(FirstRowWrapper,{children:[Object(jsx_runtime.jsx)(LogoWrapper,{href:"/",dangerouslySetInnerHTML:{__html:logo.a+icons_stampES},"aria-label":"Back to homepage",className:"es-logo"}),Object(jsx_runtime.jsxs)(LoginRegister,{children:[Object(jsx_runtime.jsx)("a",{"amp-access":"NOT loggedIn",href:"/register",className:"login-button register",children:"Register"}),Object(jsx_runtime.jsx)("a",{on:"tap:login-modal.open","amp-access":"NOT loggedIn",className:"login-button",children:"Login"}),Object(jsx_runtime.jsx)("a",{href:"/user/logout","amp-access":"loggedIn","amp-access-hide":"true",className:"login-button",children:"Logout"}),Object(jsx_runtime.jsx)("a",{href:"/profile","amp-access":"loggedIn","amp-access-hide":"true",className:"login-button",children:"My account"}),Object(jsx_runtime.jsx)(SearchButton,{className:"search-toggle","data-on":"tap:header.toggleClass(class='search-visible')","aria-label":"Open Search",role:"button",tabIndex:"0",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 43.7 43.8">\n  <path d="M31.2 27.5L43.7 40 40 43.8 27.5 31.3v-2l-.6-.7c-1.4 1.2-3.1 2.2-4.9 2.9-1.8.7-3.7 1.1-5.7 1.1-2.2 0-4.3-.4-6.3-1.3s-3.7-2-5.2-3.5-2.6-3.2-3.5-5.2c-.9-2-1.3-4.1-1.3-6.3 0-2.3.4-4.4 1.3-6.4s2-3.7 3.5-5.2S8 2.1 9.9 1.3C11.9.4 14 0 16.2 0c2.3 0 4.4.4 6.4 1.3s3.7 2 5.2 3.5S30.4 8 31.3 10c.9 2 1.3 4.1 1.3 6.4 0 2-.4 3.9-1.1 5.7s-1.7 3.4-2.9 4.8l.6.7h2zm-15 0c3.1 0 5.8-1.1 8-3.3 2.2-2.2 3.3-4.9 3.3-7.9 0-3.1-1.1-5.8-3.3-8C22 6.1 19.4 5 16.2 5c-3.1 0-5.7 1.1-7.9 3.3-2.2 2.2-3.3 4.8-3.3 8 0 3.1 1.1 5.7 3.3 7.9 2.2 2.2 4.8 3.3 7.9 3.3z"/>\n</svg>\n'+closeIcon.a}}),Object(jsx_runtime.jsx)(HamburgerMenu,{"data-on":"tap:body.toggleClass(class='full-menu-visible')","aria-label":"Open full menu",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)(MenuButton,{"aria-label":"Open full menu",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 45 30">\n  <path d="M0 0h45v5H0V0zm0 17.5v-5h45v5H0zM0 30v-5h45v5H0z"></path>\n</svg>\n'+closeIcon.a}})})]})]}),!cleanAmp&&Object(jsx_runtime.jsx)(MenuWrapper,{children:Object(jsx_runtime.jsx)(Menu_SectionMenu,{menu:menu.navbarMenu})}),menu.subnavMenu&&Object(jsx_runtime.jsx)(Best_SubNavMenu,{menu:menu.subnavMenu}),!cleanAmp&&Object(jsx_runtime.jsx)(Header_SearchField,{})]}),Object(jsx_runtime.jsx)(Menu_FullMenu,{menu:menu.fullMenu})]})};Header.propTypes={className:prop_types_default.a.any,headerStyle:prop_types_default.a.any,menu:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{className:{type:{name:"any"},required:!1,description:""},headerStyle:{type:{name:"any"},required:!1,description:""},menu:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};var library_Header=Object(RequestProvider.withRequest)(Header);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"app/component/library/Header.js"});var Login=__webpack_require__(485);const LoginModal_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;

  amp-lightbox {
    background: rgba(255, 255, 255, 0.95);
  }
`,LoginModal=()=>Object(jsx_runtime.jsx)(LoginModal_Wrapper,{children:Object(jsx_runtime.jsx)("amp-lightbox",{id:"login-modal",layout:"nodisplay",scrollable:!0,children:Object(jsx_runtime.jsx)(Login.default,{})})});LoginModal.propTypes={},LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal"};var library_LoginModal=LoginModal;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/LoginModal.js"]={name:"LoginModal",docgenInfo:LoginModal.__docgenInfo,path:"app/component/library/LoginModal.js"});const AmpPixel=({src:src,layout:layout})=>Object(jsx_runtime.jsx)("amp-pixel",{src:src,layout:layout});AmpPixel.propTypes={src:prop_types_default.a.string.isRequired,layout:prop_types_default.a.oneOf(["nodisplay","fixed"])},AmpPixel.__docgenInfo={description:"",methods:[],displayName:"AmpPixel",props:{src:{type:{name:"string"},required:!0,description:""},layout:{type:{name:"enum",value:[{value:"'nodisplay'",computed:!1},{value:"'fixed'",computed:!1}]},required:!1,description:""}}};var Pixel=AmpPixel;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Pixel.js"]={name:"AmpPixel",docgenInfo:AmpPixel.__docgenInfo,path:"app/component/library/AMP/Pixel.js"});const TaboolaPixel=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$tabool,_configuration$tabool2;const id=null==configuration||null===(_configuration$tabool=configuration.taboola)||void 0===_configuration$tabool||null===(_configuration$tabool2=_configuration$tabool.accountIds)||void 0===_configuration$tabool2?void 0:_configuration$tabool2.base;return id&&cleanAmp?Object(jsx_runtime.jsx)(Pixel,{src:`//trc.taboola.com/${id}/log/3/unip?en=page_view`,layout:"nodisplay"}):null};TaboolaPixel.propTypes={res:prop_types_default.a.object.isRequired};var Taboola=Object(RequestProvider.withRequest)(TaboolaPixel);const Quantcast=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n(function() {\n  var host = window.location.hostname;\n  var element = document.createElement('script');\n  var firstScript = document.getElementsByTagName('script')[0];\n  var url = 'https://quantcast.mgr.consensu.org'\n    .concat('/choice/', 'jAJ_WUYAnDzxn', '/', host, '/choice.js')\n  var uspTries = 0;\n  var uspTriesLimit = 3;\n  element.async = true;\n  element.type = 'text/javascript';\n  element.src = url;\n\n  firstScript.parentNode.insertBefore(element, firstScript);\n\n  function makeStub() {\n    var TCF_LOCATOR_NAME = '__tcfapiLocator';\n    var queue = [];\n    var win = window;\n    var cmpFrame;\n\n    function addFrame() {\n      var doc = win.document;\n      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);\n\n      if (!otherCMP) {\n        if (doc.body) {\n          var iframe = doc.createElement('iframe');\n\n          iframe.style.cssText = 'display:none';\n          iframe.name = TCF_LOCATOR_NAME;\n          doc.body.appendChild(iframe);\n        } else {\n          setTimeout(addFrame, 5);\n        }\n      }\n      return !otherCMP;\n    }\n\n    function tcfAPIHandler() {\n      var gdprApplies;\n      var args = arguments;\n\n      if (!args.length) {\n        return queue;\n      } else if (args[0] === 'setGdprApplies') {\n        if (\n          args.length > 3 &&\n          args[2] === 2 &&\n          typeof args[3] === 'boolean'\n        ) {\n          gdprApplies = args[3];\n          if (typeof args[2] === 'function') {\n            args[2]('set', true);\n          }\n        }\n      } else if (args[0] === 'ping') {\n        var retr = {\n          gdprApplies: gdprApplies,\n          cmpLoaded: false,\n          cmpStatus: 'stub'\n        };\n\n        if (typeof args[2] === 'function') {\n          args[2](retr);\n        }\n      } else {\n        queue.push(args);\n      }\n    }\n\n    function postMessageEventHandler(event) {\n      var msgIsString = typeof event.data === 'string';\n      var json = {};\n\n      try {\n        if (msgIsString) {\n          json = JSON.parse(event.data);\n        } else {\n          json = event.data;\n        }\n      } catch (ignore) {}\n\n      var payload = json.__tcfapiCall;\n\n      if (payload) {\n        window.__tcfapi(\n          payload.command,\n          payload.version,\n          function(retValue, success) {\n            var returnMsg = {\n              __tcfapiReturn: {\n                returnValue: retValue,\n                success: success,\n                callId: payload.callId\n              }\n            };\n            if (msgIsString) {\n              returnMsg = JSON.stringify(returnMsg);\n            }\n            event.source.postMessage(returnMsg, '*');\n          },\n          payload.parameter\n        );\n      }\n    }\n\n    while (win) {\n      try {\n        if (win.frames[TCF_LOCATOR_NAME]) {\n          cmpFrame = win;\n          break;\n        }\n      } catch (ignore) {}\n\n      if (win === window.top) {\n        break;\n      }\n      win = win.parent;\n    }\n    if (!cmpFrame) {\n      addFrame();\n      win.__tcfapi = tcfAPIHandler;\n      win.addEventListener('message', postMessageEventHandler, false);\n    }\n  };\n\n  makeStub();\n\n  var uspStubFunction = function() {\n    var arg = arguments;\n    if (typeof window.__uspapi !== uspStubFunction) {\n      setTimeout(function() {\n        if (typeof window.__uspapi !== 'undefined') {\n          window.__uspapi.apply(window.__uspapi, arg);\n        }\n      }, 500);\n    }\n  };\n\n  var checkIfUspIsReady = function() {\n    uspTries++;\n    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {\n      console.warn('USP is not accessible');\n    } else {\n      clearInterval(uspInterval);\n    }\n  };\n\n  if (typeof window.__uspapi === 'undefined') {\n    window.__uspapi = uspStubFunction;\n    var uspInterval = setInterval(checkIfUspIsReady, 6000);\n  }\n})();\n    "}});Quantcast.propTypes={res:prop_types_default.a.object.isRequired},Quantcast.__docgenInfo={description:"",methods:[],displayName:"Quantcast",props:{res:{type:{name:"object"},required:!0,description:""}}};var Scripts_Quantcast=Object(RequestProvider.withRequest)(Quantcast);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Scripts/Quantcast.js"]={name:"Quantcast",docgenInfo:Quantcast.__docgenInfo,path:"app/component/library/Scripts/Quantcast.js"});const StickyFooter=({className:className,cleanAmp:cleanAmp,...rest})=>cleanAmp?Object(jsx_runtime.jsx)(MPU.a,{id:"bottom_banner_0",ampSizes:"728x90",width:320,height:50,cleanAmp:!0,ampStickyAd:!0,ampRefresh:30,...rest}):Object(jsx_runtime.jsxs)("div",{id:"stickyFooterRoot",className:className,children:[Object(jsx_runtime.jsx)("button",{className:"sticky-ad-close-button-press",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"/></svg>'}}),Object(jsx_runtime.jsx)(MPU.a,{id:"bottom_banner_0","size-key":"BOTTOM_BANNER",className:"sticky","force-bulk":!0,...rest})]});StickyFooter.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool};var library_StickyFooter=Object(styled_components_browser_esm.default)(StickyFooter)`
  .article-best {
    .stickyFooterRoot {
      display: none;
    }
  }
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2147483641;
  max-height: 100px;
  background-image: none;
  background-color: #fff;
  margin-bottom: 0;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  button {
    position: fixed;
    width: 32px;
    height: 34px;
    padding: 8px 8px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 12px 0 0 0;
    bottom: 50px;
    z-index: 12;
    @media ${Styles.c.tablet} {
      width: 36px;
      height: 36px;
      bottom: 89px;
    }
  }
  @media ${Styles.c.tablet} {
    height: 90px;
  }
  @media ${Styles.c.laptop} {
    display: none;
  }
`;const FrameInner=styled_components_browser_esm.default.div`
  .full-menu-visible & {
    display: none;
  }
`,OutOfPageSlotMPU=Object(styled_components_browser_esm.default)(MPU.a)`
  position: absolute;
`,Frame_Frame=({className:className,children:children,componentStyle:componentStyle,section:section,article:article,req:req,res:res,req:{flowPreview:flowPreview},res:{locals:{configuration:configuration,cleanAmp:cleanAmp}},isService:isService,isBest:isBest})=>{var _configuration$cmp,_configuration$cmp2;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.ga)&&Object(jsx_runtime.jsx)(Google,{}),(null==configuration?void 0:configuration.chartbeat)&&Object(jsx_runtime.jsx)(Chartbeat,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Comscore,{}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(Adobe,{}),(null==configuration?void 0:configuration.taboola)&&Object(jsx_runtime.jsx)(Taboola,{}),(null==configuration||null===(_configuration$cmp=configuration.cmp)||void 0===_configuration$cmp?void 0:_configuration$cmp.enabled)&&Object(jsx_runtime.jsx)(Scripts_Quantcast,{}),(null==configuration||null===(_configuration$cmp2=configuration.cmp)||void 0===_configuration$cmp2?void 0:_configuration$cmp2.enabled)&&Object(jsx_runtime.jsx)(AMP_AmpConsent,{})]}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(State.a,{id:"digitalData",json:getAmpState(req,res)}),(article||section)&&!isService&&!isBest&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(OutOfPageSlotMPU,{id:"out-of-page",sizes:"1x1","force-bulk":!0,width:1,height:1}),!cleanAmp&&Object(jsx_runtime.jsx)(Ads_Skin,{}),Object(jsx_runtime.jsx)(Ads_Gutter,{})]}),Object(jsx_runtime.jsxs)("div",{className:className,role:"",tabIndex:"",children:[Object(jsx_runtime.jsx)(library_Header,{headerStyle:componentStyle}),Object(jsx_runtime.jsx)(library_LoginModal,{}),Object(jsx_runtime.jsx)(FrameInner,{id:"frameInner",children:children}),Object(jsx_runtime.jsx)(library_Footer,{}),(section||article)&&!isService&&Object(jsx_runtime.jsx)(library_StickyFooter,{cleanAmp:cleanAmp}),Object(jsx_runtime.jsx)("amp-install-serviceworker",{src:"/sw.js",layout:"nodisplay"})]}),!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.gtm)&&Object(jsx_runtime.jsx)(library_GTM,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Analytics_Comscore,{}),Object(jsx_runtime.jsx)(library_AmpAuth,{})]})]})};Frame_Frame.propTypes={section:prop_types_default.a.object,article:prop_types_default.a.object,className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any,req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isService:prop_types_default.a.bool.isRequired,isBest:prop_types_default.a.bool.isRequired},Frame_Frame.defaultProps={className:""};__webpack_exports__.a=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Frame_Frame))`
  flex-direction: column;
`},2136:function(module,exports){},2138:function(module,exports){},2139:function(module,exports){},2144:function(module,exports){},2146:function(module,exports){},215:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props}))`
  height: 0;
`},2153:function(module,exports){},2155:function(module,exports){},2173:function(module,exports){},2175:function(module,exports){},2187:function(module,exports){},2190:function(module,exports){},2201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(350);const ArticlePage=__webpack_require__(251).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Gallery",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(478).default()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"})},2202:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleReviewStory",(function(){return ArticleReviewStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40);const ArticlePage=__webpack_require__(251).default;__webpack_exports__.default={title:"Article/Review",component:ArticlePage};const configReview={body:[{type:"markup",data:{markup:'<p dir="ltr">A review article</p>'}}],extra:{verdict:[{type:"markup",data:{markup:"<p>There’s no competition: the Severin SM3587 Spuma 700 Plus Induction Milk Frother delivers the best results with the highest degree of flexibility, being adaptable for different kinds of milks (including non-dairy) and ensuring there’s the correct variation in froth style for different coffees - after all, any coffee aficionado will tell you, one foam does not fit all. There’s no escaping from the premium price point, though, and if what you’re looking for is a simpler but still effective frother for homemade foamy coffees with a lesser degree of pedantic accuracy, then the Dualit Milk Frother delivers excellent value and a stylish look at less than half the price. It just depends what kind of coffee drinker you are.</p>"},id:"8wsv22av",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p>ESBest product reviews are unbiased, independent advice you can trust. On some occasions, we earn revenue if you click the links and buy the products, but we never allow this to bias our coverage. The reviews are compiled through a mix of expert opinion and real-world testing.</p>"},id:"y6aszy8a",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p><strong>Follow us on Instagram, Facebook and Twitter</strong></p>"},id:"ezia7ftp",editorState:{setSelectionPosition:null}}],products:[{type:"product",data:{id:1,title:"Severin SM3587 Spuma 700 Plus Induction Milk Frother",price:"115.99",vendorLink:"/",vendorName:"Amazon",priceComparison:"Home Spares (£139.95)",body:[{type:"markup",data:{markup:"<p>Coffee geeks, assemble. This premium piece of equipment has no fewer than 13 function settings for heating and frothing different kinds of milk to different styles for all your favourite coffees, from macchiatos to lattes and flat whites. It even enables chocolate melting for hot chocs and mochas, and can also be used for heating baby food or mulled wine. Best still, there’s no fiddly accuracy or barista skills needed - just tell it to go and it does. It can froth up to 350ml of milk in one go - enough for plenty of cups, and looks the part while it does it. There’s not really anything not to like, although if we’re being hyper-critical it is quite noisy. It’s hard to mind when the results are as good as they are though - making the only real sticking point the premium price.</p>"},id:"q0gg521i",editorState:{setSelectionPosition:null}}],image:{id:"o8nqtx7t",data:{title:"milk fother",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23293,changed:"1600273376",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}},{type:"product",data:{id:2,title:"Judge Milk Frother",price:"32",vendorLink:"/",vendorName:"Amazon",priceComparison:"",body:[{type:"markup",data:{markup:"<p>Before milk frothers were a thing, if you wanted hot milk you needed a hob and saucepan, which is clearly the inspiration for this retro-looking frother. It looks a bit old fashioned, but feels really sturdy and is super easy to use and clean. The milk frothed easily and produced a hot stable foam, perfect for a cappuccino or flat white. While it doesn’t have some of the bells and whistles of the more modern-looking, pricier models, if you are wanting to froth and heat milk simply and quickly this does exactly what you need it to and at a good price too.</p>"},id:"qsbe3xz9",editorState:{setSelectionPosition:null}}],image:{id:"2r3urpvi",data:{title:"milk frother",description:"test",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23294,changed:"1600273594",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}}]}},ArticleReviewStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configReview,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});ArticleReviewStory.storyName="Product review article",ArticleReviewStory.parameters={amp:{isEnabled:!0}},ArticleReviewStory.__docgenInfo={description:"",methods:[],displayName:"ArticleReviewStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ProductReviewArticle.stories.js"]={name:"ArticleReviewStory",docgenInfo:ArticleReviewStory.__docgenInfo,path:"stories/Article/ProductReviewArticle.stories.js"})},2203:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(349);const ArticlePage=__webpack_require__(251).default,MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Video",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article page",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(478).default()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"})},2204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleAllTypesStory",(function(){return ArticleMetaSingleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleNoTypesStory",(function(){return ArticleMetaSingleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTwitterStory",(function(){return ArticleMetaSingleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTitleStory",(function(){return ArticleMetaSingleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleAllTypesStory",(function(){return ArticleMetaMultipleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleNoTypesStory",(function(){return ArticleMetaMultipleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTwitterStory",(function(){return ArticleMetaMultipleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTitleStory",(function(){return ArticleMetaMultipleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaInsiderStory",(function(){return ArticleMetaInsiderStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53);const ArticleMeta=__webpack_require__(484).default,ArticleMetaInsider=__webpack_require__(2205).default;__webpack_exports__.default={title:"Other/Components/Article Meta",component:ArticleMeta};const configSingleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleAllTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleAllTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleAllTypesStory.storyName="Single, all types",ArticleMetaSingleAllTypesStory.parameters={waitFor:".author"};const configSingleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleNoTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleNoTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleNoTypesStory.storyName="Single, no types",ArticleMetaSingleNoTypesStory.parameters={waitFor:".author"};const configSingleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTwitterStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleJustTwitter,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTwitterStory.storyName="Single, just Twitter",ArticleMetaSingleJustTwitterStory.parameters={waitFor:".author"};const configSingleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTitleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleJustTitle,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTitleStory.storyName="Single, just title",ArticleMetaSingleJustTitleStory.parameters={waitFor:".author"};const configMultipleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleAllTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleAllTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleAllTypesStory.storyName="Multiple, all types",ArticleMetaMultipleAllTypesStory.parameters={waitFor:".author"};const configMultipleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleNoTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleNoTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleNoTypesStory.storyName="Multiple, no types",ArticleMetaMultipleNoTypesStory.parameters={waitFor:".author"};const configMultipleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTwitterStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleJustTwitter,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTwitterStory.storyName="Multiple, just Twitter",ArticleMetaMultipleJustTwitterStory.parameters={waitFor:".author"};const configMultipleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTitleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleJustTitle,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTitleStory.storyName="Multiple, just title",ArticleMetaMultipleJustTitleStory.parameters={waitFor:".author"};const configInsider={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",location:"London",path:"/author/sophia-sleigh"}]},ArticleMetaInsiderStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configInsider,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMetaInsider,{})});ArticleMetaInsiderStory.storyName="Insider",ArticleMetaInsiderStory.parameters={waitFor:".author"},ArticleMetaSingleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleAllTypesStory",docgenInfo:ArticleMetaSingleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleNoTypesStory",docgenInfo:ArticleMetaSingleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTwitterStory",docgenInfo:ArticleMetaSingleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTitleStory",docgenInfo:ArticleMetaSingleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleAllTypesStory",docgenInfo:ArticleMetaMultipleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleNoTypesStory",docgenInfo:ArticleMetaMultipleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTwitterStory",docgenInfo:ArticleMetaMultipleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTitleStory",docgenInfo:ArticleMetaMultipleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaInsiderStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaInsiderStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaInsiderStory",docgenInfo:ArticleMetaInsiderStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"})},2205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(318),__webpack_require__(3)),_services_article__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(100),_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(336),_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(347);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-weight: 200;
  padding-bottom: 16px;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
    padding-bottom: 32px;
  }
`,InnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  color: ${props=>props.theme.color.fontMedium};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  margin-bottom: 16px;
  > * {
    &:after {
      display: inline-block;
      font-weight: 300;
      content: '\\2022';
      margin: 0 8px;
    }
    &:last-child:after {
      display: none;
    }
  }

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    display: flex;
    justify-content: center;
  }
`,AuthorLink=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a`
  color: ${props=>props.theme.color.fontMedium};
  display: inline-block;
  font-size: 16px;
  margin-bottom: 8px;

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    margin-bottom: 0;
  }
`,Location=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 8px;

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    margin-bottom: 0;
  }
`,PublishedDate=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-block;
  vertical-align: top;
`,ArticleMeta=props=>{var _article$authors;const{className:className,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(_services_article__WEBPACK_IMPORTED_MODULE_7__.a)(article),authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>{var _article$extra;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorLink,{href:a.path,className:"author",children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.authorInfo)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Location,{children:article.extra.authorInfo},a.id)]},a.id)});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InnerWrapper,{children:[authors||"",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublishedDate,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__.a,{date:dateToShowInTimestamp})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__.a,{article:article,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,article:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string},__webpack_exports__.default=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(ArticleMeta))``},2206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoginModalComponentStory",(function(){return LoginModalComponentStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(141);const Login=__webpack_require__(485).default;__webpack_exports__.default={title:"Other/Components/Login",component:Login};const LoginModalComponentStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Login,{})});LoginModalComponentStory.storyName="Login modal",LoginModalComponentStory.parameters={waitFor:".login-page-form",emulateViewports:[{width:620,height:500}]},LoginModalComponentStory.__docgenInfo={description:"",methods:[],displayName:"LoginModalComponentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/LoginModal.stories.js"]={name:"LoginModalComponentStory",docgenInfo:LoginModalComponentStory.__docgenInfo,path:"stories/Other/Components/LoginModal.stories.js"})},2209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(91),page=__webpack_require__(334),TopBanner=__webpack_require__(335),WallPaper=__webpack_require__(215),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),Styles=__webpack_require__(3);const AuthorWrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  @media ${Styles.c.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,AuthorImage=styled_components_browser_esm.default.div`
  width: 75px;
  height: 75px;
  flex-grow: 0;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  @media ${Styles.c.tablet} {
    margin-right: 12px;
  }
`,AuthorInfo=styled_components_browser_esm.default.div`
  flex-grow: 1;
`,AuthorDetails=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.fontMedium};
  font: 300 19px ${props=>props.theme.fontFamily.secondaryFont};
  a {
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: none;
  }
  > * {
    &:before {
      content: ' | ';
    }
    &:first-child {
      &:before {
        display: none;
      }
    }
  }
`,AuthorName=styled_components_browser_esm.default.h2`
  margin: 0;
  color: ${props=>props.theme.color.primary};
  font: italic 700 26px ${props=>props.theme.fontFamily.primaryFont};
`,AuthorDesc=styled_components_browser_esm.default.p`
  width: 100%;
  font: 300 17px ${props=>props.theme.fontFamily.primaryFont};
`,AuthorRow=({author:author})=>{let authorDetails=[];return author.jobTitle&&authorDetails.push(Object(jsx_runtime.jsx)("span",{children:author.jobTitle})),author.twitter&&authorDetails.push(Object(jsx_runtime.jsxs)("a",{href:"https://twitter.com/"+author.twitter,children:["@",author.twitter]})),Object(jsx_runtime.jsxs)(AuthorWrapper,{children:[author.imageUrl&&Object(jsx_runtime.jsx)(AuthorImage,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:author.imageUrl,width:75,height:75,layout:"responsive"})}),Object(jsx_runtime.jsxs)(AuthorInfo,{children:[Object(jsx_runtime.jsx)(AuthorName,{children:author.name}),authorDetails&&Object(jsx_runtime.jsx)(AuthorDetails,{children:authorDetails})]}),author.description&&Object(jsx_runtime.jsx)(AuthorDesc,{children:author.description})]})};AuthorRow.propTypes={author:prop_types_default.a.object.isRequired},AuthorRow.__docgenInfo={description:"",methods:[],displayName:"AuthorRow",props:{author:{type:{name:"object"},required:!0,description:""}}};var Author_AuthorRow=AuthorRow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Author/AuthorRow.js"]={name:"AuthorRow",docgenInfo:AuthorRow.__docgenInfo,path:"app/component/library/Author/AuthorRow.js"});var Frame=__webpack_require__(213),helper=__webpack_require__(62);var ColumnWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  box-sizing: border-box;
  @media ${Styles.c.tablet} {
    margin: 0 auto;
    max-width: 768px;
  }
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: 8px 16px;
  }
`;var article_ArticleHeadline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("h2",{className:className,children:children}))`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.fontTitle};
  line-height: normal;
  display: inline-block;
  a {
    text-decoration: none;
  }
`;var icons_Camera=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg fill="#ffffff" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="3.2"/> <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/> <path d="M0 0h24v24H0z" fill="none"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  max-height: 57px;
  margin-right: 20px;
`;var icons_Video=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg fill="#ffffff" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  max-height: 57px;
  margin-right: 20px;
`;var components_HighlightBlock=Object(styled_components_browser_esm.default)(({className:className,path:path})=>Object(jsx_runtime.jsx)("div",{className:className+" highlight-block "+(null==path?void 0:path.split("/")[1])}))`
  background: ${props=>props.theme.color.primary};
  content: '';
  display: block;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: calc(100% - 34px);
  bottom: -8px;
  left: 0;
  margin: 8px 8px 0;
  mix-blend-mode: multiply;
  @media ${Styles.c.tablet} {
    height: calc(100% - 39px);
  }
  ${Object.keys(Styles.d).map(item=>`\n      &.${item} {\n        background: #${Styles.d[item]};\n      }\n    `)}
`;const ArticleAuthor=Object(styled_components_browser_esm.default)(({className:className,authors:authors})=>authors.map(a=>a.firstName&&a.lastName?Object(jsx_runtime.jsxs)("a",{className:className+" author",href:a.path,children:[a.firstName," ",a.lastName]},a.id):Object(jsx_runtime.jsx)("a",{className:className+" author",href:a.path,children:a.name},a.id)))`
  font-size: 28px;
  font-weight: 400;
  opacity: .9;
  color: ${props=>props.theme.color.contrastDarker};
  line-height: initial;
  text-transform: capitalize;
  @media ${Styles.c.laptop} {
    font-size: 32px;
  }
  &:after {
    background: ${props=>props.theme.color.primary};
    content: "";
    width: 100%;
    height: 4px;
    display: block;
    z-index: 0;
    margin: 8px 0 16px;
    mix-blend-mode: multiply;
`,ArticleAuthorInsider=Object(styled_components_browser_esm.default)(({className:className,author:author})=>Object(jsx_runtime.jsx)("span",{className:className+" author",children:"by "+author.name}))`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  color: ${props=>props.theme.color.icons};
  font-weight: 300;
  font-style: italic;
  line-height: 1.25;
  position: relative;
  display: block;
  &:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    margin-left: -83px;
    border-bottom: 1px solid ${props=>props.theme.color.icons};
    width: 166px;
  }
  .default-style & {
    display: none;
  }
`;var article_ArticleCapsule=Object(styled_components_browser_esm.default)(({children:children,className:className,sections:sections,override:override,sponsorName:sponsorName,isLiveBlog:isLiveBlog,path:path})=>{let title=sections&&sections[sections.length-1].name;return sponsorName&&!sections.filter(s=>"Must Read"===s.name).length&&(title="Promoted content"),isLiveBlog&&(title="LIVE",className+=" live-blog"),override&&!isLiveBlog&&(title=override.name,path=override.path),Object(jsx_runtime.jsxs)("a",{className:className?[className,"capsule"].join(" "):"capsule",href:path,children:[children,title]})})`
  text-decoration: none;
  margin: 8px 0;
  line-height: normal;
  display: block;
  font-size: 14px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  text-transform: uppercase;

  &:hover {
    color: ${props=>props.theme.color.fontCapsule};
  }
`;var icons_GalleryInsider=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><title>Icon/Gallery</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g fill="#fff" fill-rule="nonzero"><rect width="40" height="40"/></g><g transform="translate(8 8)"><polygon id="b" points="0 0 24 0 24 24 0 24"/><g transform="translate(2 4)" fill="#000" fill-rule="nonzero"><rect id="a" y="2" width="4" height="11"/><path d="m5 15h10v-15h-10v15zm2-13h6v11h-6v-11z"/><rect x="16" y="2" width="4" height="11"/></g></g></g></svg>\n'}}))`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  height: 40px;
  padding: 0;
`;const ArticleIcon=(isGallery,isVideo,isInsider)=>isGallery&&!isInsider?Object(jsx_runtime.jsx)(icons_Camera,{}):isVideo&&!isInsider?Object(jsx_runtime.jsx)(icons_Video,{}):isGallery&&isInsider?Object(jsx_runtime.jsx)(icons_GalleryInsider,{}):void 0;ArticleIcon.propTypes={isGallery:prop_types_default.a.bool,isVideo:prop_types_default.a.bool,isInsider:prop_types_default.a.bool},ArticleIcon.defaultProps={isGallery:!1,isVideo:!1},ArticleIcon.__docgenInfo={description:"",methods:[],displayName:"ArticleIcon",props:{isGallery:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isInsider:{type:{name:"bool"},required:!1,description:""}}};var article_ArticleIcon=ArticleIcon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/article/ArticleIcon.js"]={name:"ArticleIcon",docgenInfo:ArticleIcon.__docgenInfo,path:"app/component/library/Section/components/article/ArticleIcon.js"});const ImageWrapper=Object(styled_components_browser_esm.default)("div")`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  a {
    color: ${props=>props.theme.color.contrastDarker};
  }
  amp-img {
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
  }
`,ArticleImage=({children:children,className:className,hero:hero,path:path,srcset:srcset,type:type,componentStyle:componentStyle})=>(className=className?[className,"image-wrap"].join(" "):"image-wrap",hero&&hero.some(({type:type})=>"image"===type)?Object(jsx_runtime.jsxs)(ImageWrapper,{className:className,children:[children&&children,hero&&hero.filter(({type:type})=>"image"===type).filter((item,index,collection)=>collection.length-1===index).map(({data:{url:url,caption:caption}},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?crop=493:329,smart&width="+srcset[srcset.length-1],alt:caption,width:"493",height:"329",layout:"responsive",srcset:url.startsWith("data:")?null:srcset.map(size=>url+`?crop=493:329,smart&width=${size} ${size}w`).join(", ")},index)},index)),("insider"===componentStyle||"ArticleX3Insider"===type||"ArticleX4Insider"===type)&&article_ArticleIcon(hero&&hero.some(({type:type})=>"gallery"===type),hero&&hero.some(({type:type})=>"brightcove"===type),"insider"===componentStyle),"insider"===componentStyle&&"HeroArticle"===type&&Object(jsx_runtime.jsx)("div",{className:"color-variation",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" class="desktop-svg"  fill="none" viewBox="0 0 804 471"><path fill="#D6CDAF" d="M574 0H804V247H574z"/><path fill="#1E1E1C" d="M0 311H230V471H0z"/></svg>\n\n<svg xmlns="http://www.w3.org/2000/svg" class="mobile-svg"  fill="none" viewBox="0 0 292 59"><path fill="#1E1E1C" d="M207 0H291.71299999999997V59H207z"/><path fill="#D6CDAF" d="M0 0H83.716V59H0z"/></svg>\n\n<svg xmlns="http://www.w3.org/2000/svg" width="401" class="mobile-large-svg" viewBox="0 0 401 273">\n    <path fill="#1E1E1C" d="M92 0H401V131H92z"/>\n    <path fill="#D6CDAF" d="M0 65H193V273H0z"/>\n</svg>\n'}}),("ArticleX3Insider"===type||"ArticleX4Insider"===type)&&Object(jsx_runtime.jsx)("div",{className:"color-variation",dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" viewBox="0 0 876 437" class="desktop-svg" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(-78 -50)" fill-rule="nonzero"><g transform="translate(78 50)"><rect width="377" height="238" fill="#000" data-bind-fill="layout_component_[outline_colour_1]"/><rect x="499" y="199" width="377" height="238" fill="#9dad6d" data-bind-fill="layout_component_[outline_colour_2]"/></g></g></g></svg>\n\n<svg version="1.1" viewBox="0 0 334 16" class="mobile-svg" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(-13 -441)" fill-rule="nonzero"><g transform="translate(13 441)"><rect width="159" height="16" fill="#000" data-bind-fill="layout_component_[outline_colour_1]"/><rect x="238" width="96" height="16" fill="#9dad6d" data-bind-fill="layout_component_[outline_colour_2]"/></g></g></g></svg>\n'}})]}):Object(jsx_runtime.jsxs)(ImageWrapper,{className:className,children:[children&&children,Object(jsx_runtime.jsx)("a",{href:path,className:"placeholder",children:Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/placeholder.png",layout:"responsive",width:"493",height:"329"})})]}));ArticleImage.propTypes={hero:prop_types_default.a.array.isRequired,path:prop_types_default.a.any.isRequired,children:prop_types_default.a.any,type:prop_types_default.a.any,componentStyle:prop_types_default.a.any,className:prop_types_default.a.string,srcset:prop_types_default.a.array,articleIcon:prop_types_default.a.any},ArticleImage.defaultProps={children:null,className:"",srcset:[375,640],articleIcon:!1},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},srcset:{defaultValue:{value:"[375, 640]",computed:!1},type:{name:"array"},required:!1,description:""},articleIcon:{defaultValue:{value:"false",computed:!1},type:{name:"any"},required:!1,description:""},hero:{type:{name:"array"},required:!0,description:""},path:{type:{name:"any"},required:!0,description:""},type:{type:{name:"any"},required:!1,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var article_ArticleImage=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/article/ArticleImage.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Section/components/article/ArticleImage.js"});const ArticleTitle=({className:className,title:title,titleShort:titleShort,path:path})=>(className=className?[className,"title"].join(" "):"title",titleShort?Object(jsx_runtime.jsx)("a",{className:className,href:path,children:titleShort}):Object(jsx_runtime.jsx)("a",{className:className,href:path,children:title}));ArticleTitle.propTypes={title:prop_types_default.a.any.isRequired,titleShort:prop_types_default.a.string,maxTitleLength:prop_types_default.a.number,path:prop_types_default.a.any.isRequired,className:prop_types_default.a.string},ArticleTitle.defaultProps={className:"",titleShort:"",maxTitleLength:1e3},ArticleTitle.__docgenInfo={description:"",methods:[],displayName:"ArticleTitle",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},titleShort:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},maxTitleLength:{defaultValue:{value:"1000",computed:!1},type:{name:"number"},required:!1,description:""},title:{type:{name:"any"},required:!0,description:""},path:{type:{name:"any"},required:!0,description:""}}};var article_ArticleTitle=ArticleTitle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/article/ArticleTitle.js"]={name:"ArticleTitle",docgenInfo:ArticleTitle.__docgenInfo,path:"app/component/library/Section/components/article/ArticleTitle.js"});const Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  margin-bottom: 16px;
  ${article_ArticleHeadline} {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-weight: ${props=>props.theme.fontWeight.normal};
    font-size: 16px;
    margin: -3px 0 0;
    @media ${Styles.c.laptop} {
      font-size: 19px;
      line-height: 23px;
    }
    a {
      color: ${props=>props.theme.color.contrastDarker};
    }
  }
  .image-wrap {
    display: flex;
    flex-direction: column;
    padding: 0;
    height: auto;
    width: calc(39% - 8px);
    @media ${Styles.c.laptop} {
      width: 128px;
    }
  }
  ${article_ArticleCapsule} {
    color: ${props=>props.theme.color.fontCapsule};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    text-transform: uppercase;
    font-size: 14px;
    &.live-blog {
      span {
        display: none;
      }
      &:before {
        content: ' ';
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: ${props=>props.theme.color.primary};
        margin-right: 4px;
      }
    }
  }
`,WrapperInsider=styled_components_browser_esm.default.div`
  display: flex;
  margin-bottom: 32px;
  ${article_ArticleHeadline} {
    font-family: ${props=>props.theme.fontFamily.insiderFine};
    font-weight: 500;
    font-size: 19px;
    margin-bottom: 32px;
    padding: 0 8px;
    margin-top: 0;
    line-height: 1.25;
    display: block;
    @media ${Styles.c.tablet} {
      padding: 0;
    }
    a {
      color: ${props=>props.theme.color.contrastDarker};
    }
  }
  ${article_ArticleCapsule} {
    font-size: 16px;
    color: ${props=>props.theme.color.icons};
    font-family: ${props=>props.theme.fontFamily.insiderCapsule};
    text-transform: capitalize;
    margin: 16px 0;
    display: inline-block;
    padding: 0;
    line-height: 1.25;
  }
  .image-wrap {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    height: 0;
    overflow: initial;
    padding-top: 59.3284%;
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
`,Lead=styled_components_browser_esm.default.p``,ReadMore=styled_components_browser_esm.default.a`
  padding: 10px 30px;
  color: ${props=>props.theme.color.secondary};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  display: inline-block;
  font-size: 16px;
  margin-top: 32px;
  text-align: center;
  border: 1px solid ${props=>props.theme.color.contrastDarker};
`;var article_ArticleItem=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,type:type,componentStyle:componentStyle,data:{path:path,titleShort:titleShort,authors:authors,title:title,hero:hero,sections:sections,sponsorName:sponsorName,lead:lead,isLiveBlog:isLiveBlog,photoArticle:photoArticle},showAuthor:showAuthor=!1,hasImage:hasImage})=>{const ThemedWrapper=Object(helper.b)(componentStyle,Wrapper,{insider:WrapperInsider}),videoArticle=hero&&hero.some(({type:type})=>"brightcove"===type||"youtube"===type||"jw_player"===type||"dugout-video"===type);return Object(jsx_runtime.jsxs)(ThemedWrapper,{className:className?[className,"article"].join(" "):"article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,srcset:srcset,path:path,type:type,componentStyle:componentStyle}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(article_ArticleCapsule,{className:videoArticle&&hasImage&&!isLiveBlog?[className,"media-video"].join(" "):className,sections:sections,sponsorName:sponsorName,isLiveBlog:isLiveBlog,path:path,children:"insider"!==componentStyle&&article_ArticleIcon(photoArticle,videoArticle,"insider"===componentStyle)}),showAuthor&&authors&&Object(jsx_runtime.jsx)(ArticleAuthor,{authors:authors}),Object(jsx_runtime.jsx)(article_ArticleHeadline,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})}),"insider"===componentStyle&&"PortraitArticle"!==type&&authors&&Object(jsx_runtime.jsx)(ArticleAuthorInsider,{author:authors[0]}),"PortraitArticle"===type&&Object(jsx_runtime.jsxs)("a",{href:path,className:"portrait-wrapper",children:[Object(jsx_runtime.jsx)(Lead,{className:"lead",children:lead}),Object(jsx_runtime.jsx)(ReadMore,{href:path,children:"Open Gallery"})]}),Object(jsx_runtime.jsx)(components_HighlightBlock,{path:path})]}),"FeaturedArtistX1"===type&&Object(jsx_runtime.jsx)(ReadMore,{href:path,children:"Read More"})]})})`
  position: relative;
  .highlight-block {
    display: none;
  }
  .media-video {
    &:before {
      display: none;
    }
    > span {
      display: inline-block;
    }
    @media ${Styles.c.laptop} {
      &:before {
        content: '';
        display: block;
        height: 100px;
        width: 93px;
        background-image: url(/img/icons/video.svg);
        position: absolute;
        bottom: 1.7em;
        left: 8px;
      }
      > span {
        display: none;
      }
    }
  }
  ${icons_Camera}, ${icons_Video} {
    display: inline-block;
    margin: -1px 8px 0 0;
    float: left;
    > svg {
      fill: ${props=>props.theme.color.icons};
      stroke: transparent;
    }
  }
`;const ArticleLead=Object(styled_components_browser_esm.default)(({className:className,html:html})=>Object(jsx_runtime.jsx)("div",{className:className+" lead",dangerouslySetInnerHTML:{__html:html}}))`
  position: relative;
  padding: 8px 0 0 8px;
  margin: 0;
  font: 500 16px ${props=>props.theme.fontFamily.secondaryFont};
  letter-spacing: 0.25px;
  color: #d9d9d9;
  z-index: 1;
`;ArticleLead.propTypes={className:prop_types_default.a.string,html:prop_types_default.a.string.isRequired};var article_ArticleLead=ArticleLead;var article_ArticleRelated=Object(styled_components_browser_esm.default)(({className:className,relatedLinks:relatedLinks})=>Object(jsx_runtime.jsx)("ul",{className:className,children:relatedLinks.filter(item=>null!==item&&"undefined"!==item.headline).map(({headline:headline,url:url},index)=>Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("a",{href:url,children:headline})},"related-"+index))}))`
  padding: 8px 0 0 8px;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: 1;
  li {
    margin-bottom: 0;
    padding-left: 1.2em;
    line-height: 0;
    &:not(:first-child) {
      margin-top: 2px;
      @media ${Styles.c.tablet} {
        margin-top: 5px;
      }
    }
    &:before {
      content: '';
      display: block;
      height: 2px;
      width: 0.7em;
      background: #d9d9d9;
      position: absolute;
      left: 8px;
      margin-top: 0.2em;
      @media ${Styles.c.tablet} {
        margin-top: 0.45em;
        height: 3px;
      }
    }
  }
  a {
    display: block;
    font-size: 9px;
    font-weight: 500;
    line-height: normal;
    color: #d9d9d9;
    text-decoration: none;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    letter-spacing: 0.25px;
    &:hover {
      color: ${props=>props.theme.color.contrastLight};
    }
    @media ${Styles.c.tablet} {
      font-size: 16px;
    }
  }
`;const ArticleHero_Wrapper=styled_components_browser_esm.default.div``,WrapperContrast=styled_components_browser_esm.default.div``;var article_ArticleHero=Object(styled_components_browser_esm.default)(({className:className,heroSrcset:heroSrcset,componentStyle:componentStyle,data:{path:path,titleShort:titleShort,capsuleSection:capsuleSection,authors:authors,title:title,hero:hero,sections:sections,photoArticle:photoArticle,isLiveBlog:isLiveBlog,sponsorName:sponsorName,relatedLinks:relatedLinks,showRelatedLinks:showRelatedLinks,showLead:showLead,lead:lead},showAuthor:showAuthor})=>{const ThemedWrapper=Object(helper.b)(componentStyle,ArticleHero_Wrapper,{insider:WrapperContrast}),videoArticle=hero&&hero.some(({type:type})=>"brightcove"===type||"youtube"===type||"jw_player"===type||"dugout-video"===type);return Object(jsx_runtime.jsxs)(ThemedWrapper,{className:className?[className,"hero-article"].join(" "):"hero-article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,heroSrcset:heroSrcset,path:path}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(article_ArticleCapsule,{className:videoArticle&&!isLiveBlog?[className,"media-video"].join(" "):className,sections:sections,isLiveBlog:isLiveBlog,override:capsuleSection,sponsorName:sponsorName,children:article_ArticleIcon(photoArticle,videoArticle,"insider"===componentStyle)}),Object(jsx_runtime.jsxs)(article_ArticleHeadline,{children:[showAuthor&&authors&&Object(jsx_runtime.jsx)(ArticleAuthor,{authors:authors}),Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})]}),showLead&&lead&&Object(jsx_runtime.jsx)(article_ArticleLead,{html:lead}),showRelatedLinks&&relatedLinks&&Object(jsx_runtime.jsx)(article_ArticleRelated,{relatedLinks:relatedLinks}),Object(jsx_runtime.jsx)(components_HighlightBlock,{path:path})]})]})})`
  position: relative;
  display: flex;
  width: 100%;

  .capsule {
    color: ${props=>props.theme.color.contrastLight};
  }
  .image-wrap {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    a {
      height: 100%;
    }
  }

  .content {
    position: absolute;
    bottom: 0;
    padding: 0 10px 0 20px;
  }
  .media-video {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 14px;
    text-transform: uppercase;
    &:before {
      display: none;
    }
    > span {
      display: inline-block;
    }
    @media ${Styles.c.laptop} {
      &:before {
        content: '';
        display: block;
        height: 100px;
        width: 93px;
        background: url(/img/icons/video.svg);
        position: absolute;
        bottom: 1.2em;
        left: -1em;
      }
      > span {
        display: none;
      }
    }
  }
  ${article_ArticleHeadline} {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    font-weight: ${props=>props.theme.fontWeight.normal};
    position: relative;
    font-size: 24px;
    z-index: 1;
    margin: -2px 0 0;
    line-height: 28px;
    a {
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
      color: ${props=>props.theme.color.contrastLight};
    }
    @media ${Styles.c.tablet} {
      font-size: 42px;
      line-height: 48px;
    }
  }
  ${icons_Camera}, ${icons_Video} {
    display: inline-block;
    margin: -1px 8px 0 0;
    float: left;
  }
`;var components_ArticleRow=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,data:{type:type,articles:articles},componentStyle:componentStyle,useHero:useHero=!1,includeLead:includeLead=!1,hasImage:hasImage})=>Object(jsx_runtime.jsx)("div",{className:[className,"article-row"].join(" "),"data-type":type,children:Object(jsx_runtime.jsx)("div",{className:"section-body",children:articles&&articles.filter(article=>article).map((article,index)=>useHero?Object(jsx_runtime.jsx)(article_ArticleHero,{srcset:srcset,data:article,includeLead:includeLead,componentStyle:componentStyle},index):Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:srcset,data:article,componentStyle:componentStyle,type:type,hasImage:hasImage},index))})}))`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  .section-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${Styles.c.tablet} {
      flex-direction: row;
    }
  }
  .hero-article {
    width: 100%;
  }
`;const Title=styled_components_browser_esm.default.div`
  margin: 0 auto;
  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin: 16px 0 24px;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    color: ${props=>props.theme.color.fontTitle};
  }
  h1 span:after,
  h1 a:after {
    background: ${props=>props.theme.color.primary};
    content: '';
    display: block;
    width: 113%;
    height: 4px;
    margin: 3px 0 0 -6.5%;
    mix-blend-mode: multiply;
  }
  span,
  a {
    color: ${props=>props.theme.color.fontTitle};
    text-decoration: none;
  }
`,InsiderTitle=styled_components_browser_esm.default.div`
  box-sizing: content-box;
  margin: 0 auto 24px;
  h1 {
    font: normal 40px/1 ${props=>props.theme.fontFamily.insiderDisplay};
    letter-spacing: -0.1px;
    margin-top: 24px;
    margin-bottom: 0;
    &:before,
    &:after {
      background: url(/img/bullet-insider.svg) no-repeat center;
      content: ' ';
      display: inline-block;
      width: 5%;
      height: 15px;
    }
  }
  .insider-divider {
    display: block;
    border-style: solid;
    border-radius: 40% 50%/10% 90%;
  }
`;var components_ComponentTitle=Object(styled_components_browser_esm.default)(({className:className,name:name,url:url,titleStyle:titleStyle})=>{const ThemedWrapper=Object(helper.b)(titleStyle,Title,{insider:InsiderTitle});return Object(jsx_runtime.jsxs)(ThemedWrapper,{className:className,children:["insider"===titleStyle&&Object(jsx_runtime.jsx)("div",{className:"insider-divider"}),name&&Object(jsx_runtime.jsxs)("h1",{children:[url&&Object(jsx_runtime.jsx)("a",{href:url,children:name}),!url&&Object(jsx_runtime.jsx)("span",{children:name})]})]})})`
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;const FeaturedArtistWrapper=styled_components_browser_esm.default.div`
  .section-body {
    @media ${Styles.c.tablet} {
      background: #f7f7f7;
    }
  }
  .article {
    text-align: center;
    flex-direction: column;
    margin: 0 12px;
    @media ${Styles.c.tablet} {
      min-width: 554px;
      width: 554px;
      margin: 0 auto 16px;
    }
    @media ${Styles.c.laptop} {
      min-width: 804px;
      width: 804px;
    }
  }
  .content {
    text-align: center;
  }
  .capsule {
    display: block;
  }
  .image-wrap {
    order: 0;
    padding-top: 66.7%;
    @media ${Styles.c.tablet} {
      order: 2;
    }
  }
  ${article_ArticleHeadline} {
    font-size: 35px;
    line-height: 1.23;
    margin-bottom: 0;
    font-family: ${props=>props.theme.fontFamily.insiderDisplay};
    @media ${Styles.c.tablet} {
      margin-bottom: 32px;
    }
  }
  ${ReadMore} {
    margin: 32px auto 0;
    order: 3;
    line-height: 1.25;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
  }
  .author {
    display: none;
  }
`,FeaturedArtist=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props;return Object(jsx_runtime.jsxs)(FeaturedArtistWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[952,640,280]})]})};FeaturedArtist.propTypes={data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},FeaturedArtist.__docgenInfo={description:"",methods:[],displayName:"FeaturedArtist",props:{data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Insider_FeaturedArtist=FeaturedArtist;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/Insider/FeaturedArtist.js"]={name:"FeaturedArtist",docgenInfo:FeaturedArtist.__docgenInfo,path:"app/component/library/Section/components/Insider/FeaturedArtist.js"});var Carousel=__webpack_require__(160),Carousel_default=__webpack_require__.n(Carousel);var article_ArticleHeadshot=Object(styled_components_browser_esm.default)(({className:className,data:{path:path,titleShort:titleShort,title:title,hero:hero},componentStyle:componentStyle,type:type})=>Object(jsx_runtime.jsx)("div",{className:className?[className,"headshot"].join(" "):"headshot",children:Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(article_ArticleHeadline,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})}),Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,path:path,type:type,componentStyle:componentStyle})]})}))`
  position: relative;
  h2 {
    position: absolute;
    z-index: 2;
    padding: 0 8px 8px;
    background: ${props=>props.theme.color.contrastDarker};
    font-size: 19px;
    line-height: 1.47;
    margin: -10px 10px;
    a {
      color: ${props=>props.theme.color.contrastLight};
      font-family: ${props=>props.theme.fontFamily.insiderFine};
      font-weight: 400;
    }
  }
  .content {
    padding: 8px;
    height: 100%;
    position: relative;
  }
`;const FeaturedGalleryWrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,CarouselWrapper=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.contrastDarker};
  padding: 24px 16px 16px;
  @media ${Styles.c.laptop} {
    padding: 24px 8px 16px;
  }
`,GalleryTitle=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.contrastLight};
  font-size: 35px;
  text-align: center;
  padding-top: 16px;
  font-weight: bold;
  line-height: 1.23;
  font-family: ${props=>props.theme.fontFamily.insiderDisplay};
  background: ${props=>props.theme.color.contrastDarker};
`;var Insider_FeaturedGallery=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink},componentStyle:componentStyle,configuration:configuration})=>Object(jsx_runtime.jsxs)(FeaturedGalleryWrapper,{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(GalleryTitle,{children:"Featured galleries"}),Object(jsx_runtime.jsx)(CarouselWrapper,{children:Object(jsx_runtime.jsx)(Carousel_default.a,{height:"327",layout:"fixed-height",controls:!0,children:articles&&articles.filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleHeadshot,{srcset:srcset,data:article,componentStyle:componentStyle,configuration:configuration},index))})})]}))`
  amp-carousel {
    @media ${Styles.c.mobileL} {
      min-height: 403px;
    }
    @media ${Styles.c.laptop} {
      min-height: 467px;
    }
  }
  amp-carousel > div:first-child {
    position: absolute; /* For Chromium */
    div::-webkit-scrollbar {
      display: none;
    }
  }
  .amp-carousel-button {
    display: none;
    height: 42px;
    width: 42px;
    margin-top: 10%;
    background: transparent no-repeat center;
    background-size: 24px;
    &:focus {
      outline: 0;
    }
    @media ${Styles.c.laptop} {
      display: block;
    }
  }
  .amp-carousel-button-next {
    background-image: url(/img/icons/gallery-arrow-right.svg);
    background-color: ${props=>props.theme.color.contrastLight};
    opacity: 0.8;
    border-radius: 50%;
  }
  .amp-carousel-button-prev {
    background-image: url(/img/icons/gallery-arrow-left.svg);
    background-color: ${props=>props.theme.color.contrastLight};
    opacity: 0.8;
    border-radius: 50%;
  }
  .headshot {
    box-sizing: border-box;
    width: 229px;
    margin: 0 8px;
    overflow: hidden;
    height: 100%;
    @media ${Styles.c.tablet} {
      width: 269px;
    }
    @media ${Styles.c.laptop} {
      padding: 0;
      width: 33.33%;
      height: 100%;
      margin: 0;
    }
    h2 {
      white-space: normal;
    }
    .content {
      margin: 8px 0 0;
      padding: 0;
      @media ${Styles.c.laptop} {
        margin: 8px 8px 0;
      }
    }
  }
`;const PortraitWrapper=styled_components_browser_esm.default.div`
  margin-bottom: 24px;
  @media ${Styles.c.tablet} {
    margin-bottom: 40px;
  }
  .article {
    flex-direction: column;
    margin-bottom: 0;
    @media ${Styles.c.tablet} {
      flex-direction: row;
    }
  }
  .image-wrap {
    width: 100%;
    height: auto;
    margin: 0;
    padding-top: 150%;
    @media ${Styles.c.tablet} {
      flex: 0 0 364px;
      padding-top: 73.3%;
    }
    @media ${Styles.c.laptop} {
      padding-top: 61%;
    }
  }
  .content {
    text-align: center;
    @media ${Styles.c.tablet} {
      margin-left: 16px;
      text-align: left;
    }
  }
  .lead {
    display: block;
    font-size: 24px;
    line-height: normal;
    margin: 0;
    color: ${props=>props.theme.color.secondary};
    font-family: ${props=>props.theme.fontFamily.insiderSectra};
    @media ${Styles.c.maxTablet} {
      color: ${props=>props.theme.color.fontMedium};
      font-size: 16px;
      line-height: 1.2;
    }
  }
  .content {
    background-color: ${props=>props.theme.color.contrastLight};
    @media ${Styles.c.maxTablet} {
      z-index: 1;
      margin: -150px 12px 0;
      padding: 0 16px;
    }
  }
  ${article_ArticleCapsule} {
    margin: 8px 0 6px;
    padding: 0;
    letter-spacing: -0.1px;
    @media ${Styles.c.tablet} {
      margin: 16px 0;
    }
  }
  ${article_ArticleHeadline} {
    font: 500 28px/1.25 ${props=>props.theme.fontFamily.insiderDisplay};
    margin-bottom: 8px;
    padding: 0;
    @media ${Styles.c.tablet} {
      margin-bottom: 32px;
    }
    @media ${Styles.c.laptop} {
      font-size: 35px;
      line-height: 1.23;
    }
  }
  ${icons_Camera}, ${icons_Video} {
    display: none;
  }
`,PortraitArticle=props=>{const{className:className,data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props;return Object(jsx_runtime.jsxs)(PortraitWrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[792,396,200]})]})};PortraitArticle.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},PortraitArticle.__docgenInfo={description:"",methods:[],displayName:"PortraitArticle",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Insider_PortraitArticle=PortraitArticle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/Insider/PortraitArticle.js"]={name:"PortraitArticle",docgenInfo:PortraitArticle.__docgenInfo,path:"app/component/library/Section/components/Insider/PortraitArticle.js"});var Insider_ColumnWrapper=styled_components_browser_esm.default.div`
  .section-content {
    margin-top: 24px;
    ${FeaturedGalleryWrapper}, ${FeaturedArtistWrapper} {
      max-width: 100%;
      @media ${Styles.c.laptop} {
        max-width: 1000px;
      }
    }
    ${PortraitWrapper} {
      @media ${Styles.c.maxTablet} {
        max-width: 100%;
      }
    }
    @media ${Styles.c.mobileL} {
      > div {
        max-width: 401px;
        box-sizing: content-box;
        margin: 0 auto 32px;
      }
    }
    @media ${Styles.c.tablet} {
      margin-top: 36px;
      > div {
        max-width: 744px;
      }
    }
    @media ${Styles.c.laptop} {
      margin-top: 20px;
      padding-top: 14px;
      > div {
        max-width: 968px;
      }
    }
  }
`,Sidebar=__webpack_require__(345),MPU=__webpack_require__(25);const ArticleX2_Wrapper=styled_components_browser_esm.default.div`
  .article {
    flex-direction: column;
    padding: 0;
    margin-bottom: 0;
    @media ${Styles.c.maxTablet} {
      &:first-child {
        margin-bottom: 16px;
      }
    }
    .image-wrap {
      width: 100%;
      max-height: 389px;
    }
    .title {
      font-size: 19px;
      line-height: 23px;
    }
    @media ${Styles.c.tablet} {
      width: calc(50% - 8px);
    }
    @media ${Styles.c.laptop} {
      .title {
        font-size: 24px;
        line-height: 28px;
      }
      .image-wrap {
        max-height: 242px;
      }
      &:first-child {
        margin-bottom: 0;
      }
    }
    @media ${Styles.c.laptop} {
      .image-wrap {
        max-height: 318px;
      }
    }
  }
`,ArticleX2_WrapperInsider=styled_components_browser_esm.default.div`
  .section-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    text-align: center;
    flex-direction: column;
    max-width: 804px;
    margin: 0 12px;
    @media ${Styles.c.mobileL} {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
  .article {
    flex-direction: column;
    .image-wrap {
      padding-top: 100%;
    }
    @media ${Styles.c.mobileL} {
      flex-basis: calc(50% - 8px);
      margin-bottom: 0;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  ${article_ArticleHeadline} {
    flex-grow: 1;
    font-size: 19px;
    line-height: 1.47;
    @media ${Styles.c.tablet} {
      font-size: 28px;
      line-height: normal;
    }
  }
`,ArticleX2=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props,ThemedWrapper=Object(helper.b)(componentStyle,ArticleX2_Wrapper,{insider:ArticleX2_WrapperInsider});return Object(jsx_runtime.jsxs)(ThemedWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[471,349,280],hasImage:!0})]})};ArticleX2.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string,componentStyle:prop_types_default.a.any},ArticleX2.__docgenInfo={description:"",methods:[],displayName:"ArticleX2",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Section_ArticleX2=ArticleX2;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX2.js"]={name:"ArticleX2",docgenInfo:ArticleX2.__docgenInfo,path:"app/component/library/Section/ArticleX2.js"});const AdWrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 250px;
  padding: 16px 25px;
  background-color: #f4f4f4;
  @media ${Styles.c.maxTablet} {
    margin-bottom: 16px;
    &.ad-right {
      margin-top: 16px;
      margin-bottom: 0;
    }
  }
  @media ${Styles.c.tablet} {
    padding: 6px;
  }
`,AdMPU=({className:className,mpuId:mpuId})=>Object(jsx_runtime.jsx)(AdWrapper,{className:["mpu-item",className].join(" "),children:"thirdparty_section"===mpuId?Object(jsx_runtime.jsx)("div",{id:mpuId}):Object(jsx_runtime.jsx)(MPU.a,{id:mpuId,"size-key":"SINGLE_MPU","force-bulk":"mpu1"===mpuId})});AdMPU.propTypes={mpuId:prop_types_default.a.string.isRequired,className:prop_types_default.a.string},AdMPU.__docgenInfo={description:"",methods:[],displayName:"AdMPU",props:{mpuId:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var components_AdMPU=AdMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/AdMPU.js"]={name:"AdMPU",docgenInfo:AdMPU.__docgenInfo,path:"app/component/library/Section/components/AdMPU.js"});const MPUContainer=Object(styled_components_browser_esm.default)(components_AdMPU)`
  width: 300px;
  @media ${Styles.c.tablet} {
    margin: 0;
  }
`,ArticleX2MPU_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;

  .section-body {
    display: flex;
    flex-direction: column;
  }
  .article-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    width: 100%;
    @media ${Styles.c.tablet} {
      width: 364px;
    }
    @media ${Styles.c.laptop} {
      width: 640px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .article {
    flex-direction: row;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0;
    }
    .image-wrap {
      float: left;
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.laptop} {
        flex-basis: unset;
      }
    }
    .content {
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.laptop} {
        flex-basis: unset;
      }
    }
    .capsule {
      @media ${Styles.c.maxLaptop} {
        margin-top: 0;
      }
    }
    .title {
      font-size: 16px;
      line-height: 20px;
    }
    @media ${Styles.c.laptop} {
      flex-direction: column;
      width: calc(50% - 8px);
      margin-bottom: 0;
      justify-content: normal;
      .title {
        font-size: 24px;
        line-height: 28px;
      }
      .image-wrap {
        width: 100%;
      }
    }
  }

  @media ${Styles.c.tablet} {
    flex-direction: row;
  }
  @media ${Styles.c.laptop} {
    align-items: flex-start;

    .section-body {
      flex-direction: row;
    }
  }
`,ArticleX2MPU=props=>{const{className:className,mpuId:mpuId,data:{labelLink:labelLink,labelText:labelText,ad:{alignment:alignment}}}=props;return Object(jsx_runtime.jsxs)(ArticleX2MPU_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),"Left"===alignment&&Object(jsx_runtime.jsx)(MPUContainer,{className:"ad-left",mpuId:mpuId}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[471,349,280],hasImage:!0}),"Left"!==alignment&&Object(jsx_runtime.jsx)(MPUContainer,{className:"ad-right",mpuId:mpuId})]})};ArticleX2MPU.propTypes={className:prop_types_default.a.string,ad:prop_types_default.a.object,mpuId:prop_types_default.a.string.isRequired,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string},ArticleX2MPU.__docgenInfo={description:"",methods:[],displayName:"ArticleX2MPU",props:{className:{type:{name:"string"},required:!1,description:""},ad:{type:{name:"object"},required:!1,description:""},mpuId:{type:{name:"string"},required:!0,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""}}};var Section_ArticleX2MPU=ArticleX2MPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX2MPU.js"]={name:"ArticleX2MPU",docgenInfo:ArticleX2MPU.__docgenInfo,path:"app/component/library/Section/ArticleX2MPU.js"});const ArticleX3_Wrapper=styled_components_browser_esm.default.div`
  .article-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${Styles.c.laptop} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .article {
    flex-direction: row;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0;
    }
    .image-wrap {
      float: left;
      flex-basis: calc(50% - 8px);

      @media ${Styles.c.tablet} {
        max-height: 160px;
        flex-basis: unset;
      }
      @media ${Styles.c.laptop} {
        max-height: 208px;
      }
    }
    .content {
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.tablet} {
        flex-basis: unset;
      }
    }
    .title {
      font-size: 16px;
      line-height: 20px;
    }
    .capsule {
      margin-top: 0;
      @media ${Styles.c.tablet} {
        margin-top: 8px;
      }
    }
    @media ${Styles.c.tablet} {
      width: calc(33.33% - 8px);
      margin-bottom: 0;
      flex-direction: column;
      justify-content: normal;

      .image-wrap {
        width: 100%;
      }
    }
    @media ${Styles.c.laptop} {
      width: calc(33.33% - 10.6px);
      .title {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }
`,ArticleX3=props=>{const{data:{labelLink:labelLink,labelText:labelText}}=props;return Object(jsx_runtime.jsxs)(ArticleX3_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[299,220,280],hasImage:!0})]})};ArticleX3.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string},ArticleX3.__docgenInfo={description:"",methods:[],displayName:"ArticleX3",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""}}};var Section_ArticleX3=ArticleX3;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX3.js"]={name:"ArticleX3",docgenInfo:ArticleX3.__docgenInfo,path:"app/component/library/Section/ArticleX3.js"});const ArticleX3Insider_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .section-body {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 548px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    display: flex;
  }
  .article-row {
    margin-bottom: 0;
  }
  .article {
    flex-direction: column;
    margin-right: 32px;
    margin-left: 32px;
    margin-bottom: 12px;
    text-align: center;
    ${article_ArticleHeadline} {
      margin-bottom: 0;
    }
    &:first-child {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 32px;
      ${article_ArticleHeadline} {
        font-size: 35px;
        font-family: ${props=>props.theme.fontFamily.insiderDisplay};
        font-weight: 500;
        margin-bottom: 0;
      }
      .image-wrap {
        padding-top: 59.307%;
      }
    }
    &:nth-child(n + 2) {
      .color-variation {
        display: none;
      }
    }
    @media ${Styles.c.mobileL} {
      width: calc(50% - 20px);
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 16px;
    }
  }
  .image-wrap {
    height: 0;
    overflow: initial;
    padding-top: 100%;
    z-index: 1;
    position: relative;
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
  .color-variation {
    position: absolute;
    top: -16px;
    left: -16px;
    right: -24px;
    @media ${Styles.c.maxMobileL} {
      left: 7px;
      right: 7px;
      bottom: -14px;
      top: unset;
    }
    .mobile-svg {
      @media ${Styles.c.mobileL} {
        display: none;
      }
    }
    .desktop-svg {
      @media ${Styles.c.maxMobileL} {
        display: none;
      }
    }
  }
`,InsiderLogo=styled_components_browser_esm.default.a`
  max-width: 174px;
  margin: 4px auto 24px;
  svg {
    width: 100%;
    height: 100%;
  }
`,ArticleX3Insider=props=>{const{className:className,componentStyle:componentStyle,data:{labelLink:labelLink,labelText:labelText}}=props;return Object(jsx_runtime.jsxs)(ArticleX3Insider_Wrapper,{className:[className,"wrapper",componentStyle+"-style"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(InsiderLogo,{dangerouslySetInnerHTML:{__html:'\n<svg width="994" height="416" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 994 416"><path d="M24 146.8c6.8-4 15.5-1.9 19.7 4.7a55.9 55.9 0 0 1 13.2 40c-3.4 38.6-7.8 77-11.4 115.4-1 11.4-1.4 22.8-1.8 34.1-.5 14.2-.8 28.4-1.1 41.2-12.1 10.9-23.2 11.1-36.9 5.2-8.5-13.7-5.7-29.8-3.2-44.8 9.7-62.5 19.2-125 18.1-188.2 0-2.6 2.3-5.2 3.5-7.6zM453.3 79a15.4 15.4 0 0 0-7.5-20.6 38.4 38.4 0 0 0-24-6 13.5 13.5 0 0 0-10.6 16.7 15 15 0 0 0 9.4 12.6c11.4 5.3 22.7 7.4 32.6-2.7zM967.7 289c-24.5-11.4-47.4-22.8-71.1-32.7-25.5-10.3-50.5-22.7-79.3-27.1a5 5 0 0 0-5.1 2.7c-9 19.4-4.7 40.3-8.2 59.7a13 13 0 0 1-6.2 9.2 22.7 22.7 0 0 1-18.4.4 143 143 0 0 0-42.3-7.6c-10-.5-20-2.7-29.4-6.4-9.8-4.4-19.3-9.4-28.4-15-27.3 9.2-52-.8-72.6-19.9-23.2 14.3-13.6 43.7-34 56.3-19.2 11-38.8 3.2-60.2-1.4l-60 32.5c-18.6 10.2-36.7 12.1-53.5 4.9a21 21 0 0 1-12.6-14c-7-28 10.2-54 0-85.7-23.2 26.6-43.8 48.4-54.7 74.8 1.1 18 21.3 30.5 28 48a22.7 22.7 0 0 1-4.2 22.6 75.6 75.6 0 0 1-58.3 25.1c-20.8 0-50-14.4-61.3-27.7-3-3.6-3-8.8 0-12.4 12.6-14.5 41.7-26.7 50.2-44.7-15.5-27-29.3-30.7-51.7-52.3-15.5 6.2-16.7 24.7-32 31.5-35.8 8.8-41 6.3-73.5-34.1-15.7 15.7-16.1 37.8-23.5 56.8a26.6 26.6 0 0 1-19.6 17 28 28 0 0 1-12.5-.8 13.7 13.7 0 0 1-10.8-11.2c-.2-.8-.2-1.7 0-2.6 12-30.7 24.5-61.3 37.7-91.6 5-11.3 8.1-26 21.4-31.7 10.7-4.7 21.1-1.8 32.4 6.5 4 3.1 7.1 7.4 8.7 12.3l11.9 37a10.2 10.2 0 0 0 18.4 2.1c10-15.9 16.3-33.7 18.7-52.3 2.8-22.7 36.4-53 65.4-50.1 20.7 2 21.8 1.5 24 18.8 1.8 13-40.9 4.5-46.1 17.6-9 22.7-3.8 42.2 10.1 60.8a245.7 245.7 0 0 0 41.8 41.8s66.8-77.8 89.7-111.4c3-4.2 6.2-8.1 9.8-11.9 3.1-3.4 8-4.5 12.4-2.9l12.4 5c5.4 2.3 8.8 7.9 8.2 13.7-4.4 38.8-13.2 76-13 112.6 7.7 8.9 15 5.7 21.4 3.5 21.8-8 42.4-18.7 61.6-31.6l18.6-70.4c1-4.1 4-7.4 8-8.9 16.7-6 27.2 10.9 41.1 9.4 9.8-9.2 6.5-21 6.3-32.2-.6-33.1-1.7-66.2-1.4-99.4 0-24.8 6.6-48.7 11.7-70.6.4-2 1.4-3.7 3-5 8-6.5 19.5-6.7 27.8-.5A31.8 31.8 0 0 1 642 34c-.6 15.8-2.2 31.6-4.8 47.2-4.5 29.9-10.2 59.6-14.7 89.5a101 101 0 0 0 12.6 66.7c2 3.2 4.6 6.2 7.5 8.7 2 2 5.2 2.7 7.9 1.6 11.3-5 13-15.8 15.6-25.4 5.2-19.4 9.1-39.3 14.2-58.7a88 88 0 0 1 6.2-15.3 9.3 9.3 0 0 1 8.2-5.6c18.7-.5 46.6 17 57 33.7 9.6 18.4.6 24.8-6.4 41.8-5.2 12.5-39 15.4-35.8 28.4 2.5 10 7 19.6 18 22.4 11 2.9 35.7 1.2 43.4-10.7l2-29c.7-9.4 3.1-18.7 7.4-27.2 2.5-5.2 3-7 10.6-5.7 19.8 4.2 39.3 9.6 58.3 16.3 24.5 8.7 48.3 19.2 72.4 29 13.3 5.7 26.2 11.3 41.3 11.7a32 32 0 0 1 28.4 15.8 13.7 13.7 0 0 1-4.8 18.9 20.1 20.1 0 0 1-18.7 1zm-649.5 77.6c-4.3-4.2-12.4-11.3-12.4-11.3s-22.3 12-20.8 16.3c1.5 4.5 9 9 20.8 9 12 0 18.8-7.5 12.4-14z" fill="#000" fill-rule="evenodd"></path></svg>\n'},href:"/insider"}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[471,349,280],componentStyle:"insider"})]})};ArticleX3Insider.propTypes={className:prop_types_default.a.string,componentStyle:prop_types_default.a.string.isRequired,data:prop_types_default.a.any.isRequired},ArticleX3Insider.__docgenInfo={description:"",methods:[],displayName:"ArticleX3Insider",props:{className:{type:{name:"string"},required:!1,description:""},componentStyle:{type:{name:"string"},required:!0,description:""},data:{type:{name:"any"},required:!0,description:""}}};var Section_ArticleX3Insider=ArticleX3Insider;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX3Insider.js"]={name:"ArticleX3Insider",docgenInfo:ArticleX3Insider.__docgenInfo,path:"app/component/library/Section/ArticleX3Insider.js"});const ArticleX4_Wrapper=styled_components_browser_esm.default.div`
  .article-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${Styles.c.laptop} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .article {
    flex-direction: row;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0;
    }
    .image-wrap {
      float: left;
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.tablet} {
        max-height: 118px;
        flex-basis: unset;
      }
      @media ${Styles.c.laptop} {
        max-height: 152px;
      }
    }
    .content {
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.tablet} {
        flex-basis: unset;
      }
    }
    .title {
      font-size: 16px;
      line-height: 20px;
    }
    .capsule {
      margin-top: 0;
      @media ${Styles.c.tablet} {
        margin-top: 8px;
      }
    }
    @media ${Styles.c.tablet} {
      width: calc(25% - 9px);
      margin-bottom: 0;
      flex-direction: column;
      justify-content: normal;

      .image-wrap {
        width: 100%;
      }
    }
    @media ${Styles.c.laptop} {
      width: calc(25% - 12px);
      margin-bottom: 0;
      .title {
        font-size: 19px;
        line-height: 23px;
      }
    }
  }
  .media-video:before {
    width: 70px;
    height: 70px;
    background-size: 70px 70px;
    left: 5px;
  }
`,ArticleX4_WrapperInsider=styled_components_browser_esm.default.div`
  .section-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    text-align: center;
    flex-direction: column;
    max-width: 804px;
    margin: 0 12px;
    @media ${Styles.c.mobileL} {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
    }
  }
  .article {
    flex-direction: column;
    &:last-child {
      margin-bottom: 16px;
    }
    .image-wrap {
      padding-top: 100%;
    }
    @media ${Styles.c.mobileL} {
      flex-basis: calc(50% - 8px);
      &:nth-child(-n + 2) {
        margin-bottom: 32px;
      }
      &:nth-last-child(-n + 2) {
        margin-bottom: 0;
      }
    }
  }
  .content {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  ${article_ArticleHeadline} {
    flex-grow: 1;
    font-size: 19px;
    line-height: 1.47;
    @media ${Styles.c.tablet} {
      font-size: 28px;
      line-height: 1.25;
    }
  }
`,ArticleX4=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props,ThemedWrapper=Object(helper.b)(componentStyle,ArticleX4_Wrapper,{insider:ArticleX4_WrapperInsider});return Object(jsx_runtime.jsxs)(ThemedWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[399,320,380],hasImage:!0})]})};ArticleX4.propTypes={data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},ArticleX4.__docgenInfo={description:"",methods:[],displayName:"ArticleX4",props:{data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Section_ArticleX4=ArticleX4;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX4.js"]={name:"ArticleX4",docgenInfo:ArticleX4.__docgenInfo,path:"app/component/library/Section/ArticleX4.js"});var Section_ArticleX4Insider=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(Section_ArticleX3Insider,{...props,srcset:[986,728,280]}))`
  .article {
    @media ${Styles.c.mobileL} {
      width: calc(36% - 20px);
    }
    @media ${Styles.c.tablet} {
      width: calc(42% - 20px);
      &:nth-child(2) {
        margin-left: -62px;
      }
      &:nth-child(4) {
        margin-right: -62px;
      }
    }

    @media ${Styles.c.laptop} {
      width: calc(50% - 20px);
      &:nth-child(2) {
        margin-left: -141px;
      }
      &:nth-child(4) {
        margin-right: -141px;
      }
    }
  }
`;const Article3Stack_srcset=[91,126,220],Articles=Object(styled_components_browser_esm.default)(({className:className,articles:articles,style:style,configuration:configuration})=>Object(jsx_runtime.jsx)("div",{className:["article-container",className].join(" "),children:articles.map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:Article3Stack_srcset,data:article,style:style,configuration:configuration},index))}))``,Article3Stack=Object(styled_components_browser_esm.default)(Articles)`
  width: 100%;
  .article {
    &:first-child {
      border-top: 1px solid ${props=>props.theme.color.contrastGrey};
      margin-top: 8px;
      padding-top: 8px;
    }
  }
  @media ${Styles.c.tablet} {
    width: calc(50% - 8px);
    .article {
      &:first-child {
        border-top: 0 none;
        margin-top: 0;
        padding-top: 0;
      }
      h2 {
        font-size: inherit;
      }
    }
  }
  @media ${Styles.c.laptop} {
    width: calc(33% - 11px);
    .article {
      h2 {
        font-size: 17px;
        line-height: 1.2;
      }
    }
  }
`,Article3StackBox=Object(styled_components_browser_esm.default)(Articles)`
  width: 100%;
  .article {
    &:first-child {
      border-top: 1px solid ${props=>props.theme.color.contrastGrey};
      margin-top: 8px;
      padding-top: 8px;
    }
    h2 {
      font-size: 17px;
    }
  }
  @media ${Styles.c.tablet} {
    margin-top: 16px;
    order: 1;
    display: flex;
    justify-content: space-between;
    .article {
      border: 1px solid ${props=>props.theme.color.contrastGrey};
      flex-direction: column-reverse;
      justify-content: space-between;
      padding-bottom: 0;
      padding-top: 0;
      width: calc(33% - 11px);
      .content {
        padding: 10px;
      }
      h2 {
        font-size: 19px;
        line-height: 1.25;
        display: flex;
        flex-direction: column-reverse;
      }
      .image-wrap {
        width: 100%;
        overflow: visible;
      }
      &:first-child {
        margin-top: 0;
        padding-top: 0;
      }
    }
    ${icons_Camera}, ${icons_Video} {
      top: -15px;
      left: auto;
      right: 5px;
      margin: 0;
    }
  }
  @media ${Styles.c.laptop} {
    order: 0;
    width: calc(33% - 11px);
    margin-top: 0;
    display: block;
    .article {
      border-bottom: 0 none;
      border-left: 0 none;
      border-right: 0 none;
      flex-direction: inherit;
      padding-bottom: 8px;
      padding-top: 8px;
      width: 100%;
      .content {
        padding: 0;
      }
      &:first-child {
        border-top: 0 none;
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
      }
      .image-wrap {
        width: 128px;
      }
      h2 {
        font-size: 17px;
        line-height: 1.2;
        display: block;
      }
      ${icons_Camera}, ${icons_Video} {
        top: auto;
        left: 5px;
        right: auto;
      }
    }
  }
`,ArticleX6MPU_MPUContainer=Object(styled_components_browser_esm.default)(components_AdMPU)`
  @media ${Styles.c.tablet} {
    width: calc(50% - 8px);
    margin: 0;
  }
  @media ${Styles.c.laptop} {
    width: calc(33% - 11px);
  }
`,ArticlesPlusMPU=Object(styled_components_browser_esm.default)(({className:className,ad:ad,articles:articles,mpuId:mpuId,maxTitleLength:maxTitleLength,componentStyle:componentStyle,configuration:configuration})=>Object(jsx_runtime.jsxs)("div",{className:[className,"wrapper"].join(" "),children:["Left"===ad&&Object(jsx_runtime.jsx)(ArticleX6MPU_MPUContainer,{mpuId:mpuId}),Object(jsx_runtime.jsx)(Article3Stack,{maxTitleLength:maxTitleLength,style:componentStyle,configuration:configuration,articles:articles.filter(article=>article).slice(0,3)}),Object(jsx_runtime.jsx)(Article3StackBox,{maxTitleLength:maxTitleLength,style:componentStyle,configuration:configuration,articles:articles.filter(article=>article).slice(3)}),"Left"!==ad&&Object(jsx_runtime.jsx)(ArticleX6MPU_MPUContainer,{mpuId:mpuId})]}))`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;ArticlesPlusMPU.propTypes={ad:prop_types_default.a.any.isRequired,articles:prop_types_default.a.any.isRequired,mpuId:prop_types_default.a.string.isRequired,configuration:prop_types_default.a.object.isRequired,style:prop_types_default.a.string,maxTitleLength:prop_types_default.a.number};const ArticleX6MPU=({mpuId:mpuId,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink,ad:ad},maxTitleLength:maxTitleLength,componentStyle:componentStyle,configuration:configuration})=>Object(jsx_runtime.jsxs)("div",{"data-type":type,children:[Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(ArticlesPlusMPU,{ad:ad.alignment,articles:articles,mpuId:mpuId,maxTitleLength:maxTitleLength,componentStyle:componentStyle,configuration:configuration})]});ArticleX6MPU.propTypes={data:prop_types_default.a.object.isRequired,mpuId:prop_types_default.a.string.isRequired,componentStyle:prop_types_default.a.string,configuration:prop_types_default.a.object,maxTitleLength:prop_types_default.a.number},ArticleX6MPU.__docgenInfo={description:"",methods:[],displayName:"ArticleX6MPU",props:{data:{type:{name:"object"},required:!0,description:""},mpuId:{type:{name:"string"},required:!0,description:""},componentStyle:{type:{name:"string"},required:!1,description:""},configuration:{type:{name:"object"},required:!1,description:""},maxTitleLength:{type:{name:"number"},required:!1,description:""}}};var Section_ArticleX6MPU=ArticleX6MPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX6MPU.js"]={name:"ArticleX6MPU",docgenInfo:ArticleX6MPU.__docgenInfo,path:"app/component/library/Section/ArticleX6MPU.js"});const ArticleX8_Wrapper=styled_components_browser_esm.default.div`
  .section-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${Styles.c.tablet} {
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
  .article-row {
    margin-bottom: 16px;
  }
  .article {
    border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
    margin-bottom: 0;
    padding-bottom: 16px;
    .image-wrap {
      display: none;
    }
    .title {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      @media ${Styles.c.tablet} {
        font-size: 19px;
        line-height: 23px;
      }
      @media ${Styles.c.laptop} {
        font-size: 24px;
        line-height: 28px;
      }
    }
    @media ${Styles.c.tablet} {
      flex-basis: calc(50% - 8px);
    }
  }
`,ArticleX8=props=>{const{data:{labelLink:labelLink,labelText:labelText}}=props;return Object(jsx_runtime.jsxs)(ArticleX8_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[299,220,280]})]})};ArticleX8.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string},ArticleX8.__docgenInfo={description:"",methods:[],displayName:"ArticleX8",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""}}};var Section_ArticleX8=ArticleX8;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX8.js"]={name:"ArticleX8",docgenInfo:ArticleX8.__docgenInfo,path:"app/component/library/Section/ArticleX8.js"});const AdDMPU_AdWrapper=styled_components_browser_esm.default.div`
  min-width: 300px;
  position: relative;
  text-align: center;
  background-color: #f4f4f4;
  padding: 16px 0;
  @media ${Styles.c.tablet} {
    padding: 8px 32px;
  }
  @media ${Styles.c.laptop} {
    padding: 6px;
  }
  .align-left & {
    @media ${Styles.c.maxTablet} {
      margin-bottom: 16px;
    }
  }
`,AdDMPU=({mpuId:mpuId,className:className})=>Object(jsx_runtime.jsx)(AdDMPU_AdWrapper,{children:"thirdparty_section"===mpuId?Object(jsx_runtime.jsx)("div",{id:mpuId}):Object(jsx_runtime.jsx)(MPU.a,{id:mpuId,"size-key":"DOUBLE_MPU_EXTRA"+("mpu1"===mpuId?"":"_NOT_MOBILE"),className:className,"force-bulk":"mpu1"===mpuId})});AdDMPU.propTypes={mpuId:prop_types_default.a.string.isRequired,className:prop_types_default.a.string},AdDMPU.__docgenInfo={description:"",methods:[],displayName:"AdDMPU",props:{mpuId:{type:{name:"string"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var components_AdDMPU=AdDMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/AdDMPU.js"]={name:"AdDMPU",docgenInfo:AdDMPU.__docgenInfo,path:"app/component/library/Section/components/AdDMPU.js"});const AlignmentWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  @media ${Styles.c.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
  .section-body {
    @media ${Styles.c.tablet} {
      width: 364px;
    }
    @media ${Styles.c.laptop} {
      width: 640px;
    }
  }
`,DMPUContainer=Object(styled_components_browser_esm.default)(components_AdDMPU)`
  width: 100%;
`,AdAlignmentDMPU=({children:children,ad:ad,configuration:configuration,mpuId:mpuId})=>Object(jsx_runtime.jsxs)(AlignmentWrapper,{className:"dmpu-ad align-"+ad.toLowerCase(),children:["Left"===ad&&Object(jsx_runtime.jsx)(DMPUContainer,{configuration:configuration,mpuId:mpuId}),Object(jsx_runtime.jsx)("div",{className:"section-body",children:children}),"Left"!==ad&&Object(jsx_runtime.jsx)(DMPUContainer,{configuration:configuration,mpuId:mpuId})]});AdAlignmentDMPU.propTypes={children:prop_types_default.a.any.isRequired,ad:prop_types_default.a.string.isRequired,mpuId:prop_types_default.a.string.isRequired,configuration:prop_types_default.a.object.isRequired},AdAlignmentDMPU.__docgenInfo={description:"",methods:[],displayName:"AdAlignmentDMPU",props:{children:{type:{name:"any"},required:!0,description:""},ad:{type:{name:"string"},required:!0,description:""},mpuId:{type:{name:"string"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var components_AdAlignmentDMPU=AdAlignmentDMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/AdAlignmentDMPU.js"]={name:"AdAlignmentDMPU",docgenInfo:AdAlignmentDMPU.__docgenInfo,path:"app/component/library/Section/components/AdAlignmentDMPU.js"});const ArticleX8DMPU_srcset=[135],ArticleWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.tablet} {
    .article {
      .image-wrap {
        width: 100px;
      }
    }
  }
  @media ${Styles.c.laptop} {
    .article {
      .image-wrap {
        width: 128px;
      }
      h2 {
        font-size: 17px;
      }
    }
    width: calc(66.66% - 8px);
  }
`,ArticleBoxWrapper=styled_components_browser_esm.default.div`
  border-top: 1px solid ${props=>props.theme.color.contrastGrey};
  margin-top: 8px;
  padding-top: 8px;
  @media ${Styles.c.tablet} {
    .article {
      .image-wrap {
        width: 100px;
      }
    }
  }
  @media ${Styles.c.laptop} {
    border-top: 0 none;
    margin-top: 0;
    padding-top: 0;
    width: calc(33.33% - 8px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .article {
      border: 1px solid ${props=>props.theme.color.contrastGrey};
      flex-direction: column-reverse;
      justify-content: space-between;
      padding-bottom: 0;
      padding-top: 0;
      .content {
        padding: 10px;
      }
      h2 {
        font-size: 19px;
        line-height: 1.25;
      }
      .image-wrap {
        width: 100%;
        overflow: visible;
      }
      &:first-child {
        margin-top: 0;
        padding-top: 0;
      }
    }
    ${icons_Camera}, ${icons_Video} {
      top: -15px;
      left: auto;
      right: 5px;
      margin: 0;
    }
  }
`;var Section_ArticleX8DMPU=Object(styled_components_browser_esm.default)(({publication:publication,configuration:configuration,className:className,mpuId:mpuId,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink,ad:ad},componentStyle:componentStyle})=>Object(jsx_runtime.jsxs)("div",{className:className,"data-type":type,children:[Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(components_AdAlignmentDMPU,{ad:ad.alignment,publication:publication,mpuId:mpuId,configuration:configuration,children:[Object(jsx_runtime.jsx)(ArticleWrapper,{children:null==articles?void 0:articles.filter(article=>article).slice(0,6).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:ArticleX8DMPU_srcset,data:article,componentStyle:componentStyle,configuration:configuration},index))}),Object(jsx_runtime.jsx)(ArticleBoxWrapper,{children:null==articles?void 0:articles.filter(article=>article).slice(6).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:ArticleX8DMPU_srcset,data:article,componentStyle:componentStyle,configuration:configuration},index))})]})]}))`
  .section-body {
    @media ${Styles.c.tablet} {
    }
    @media ${Styles.c.laptop} {
      display: flex;
      justify-content: space-between;
    }
  }
`;const ArticleX12_Wrapper=styled_components_browser_esm.default.div``,FlowWrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .section-body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: space-between;
  }
  .article-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
    &:last-child {
      margin-top: 16px;
      @media ${Styles.c.tablet} {
        margin-top: 0;
      }
    }
  }

  .article {
    width: calc(50% - 8px);
    flex-direction: row;
    padding-bottom: 16px;
    border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
    margin-bottom: 0;
    .image-wrap {
      display: none;
    }
    .media-video:before {
      display: none;
    }
    .media-video span {
      display: inline-block;
    }
    ${article_ArticleHeadline} {
      font-size: 16px;
      line-height: 1.25;
      margin-top: 0;
    }
  }
  .article:nth-child(3n + 1) {
    flex-direction: column;
    .media-video:before {
      display: block;
      width: 70px;
      height: 70px;
      background-size: 70px 70px;
    }
    @media ${Styles.c.tablet} {
      .image-wrap {
        width: 100%;
        display: flex;
      }
    }
    @media ${Styles.c.laptop} {
      .media-video span {
        display: none;
      }
    }
  }
  @media ${Styles.c.maxTablet} {
    .article {
      width: 100%;
    }
    .article:nth-child(-n + 2) {
      flex-direction: column;
      width: calc(50% - 8px);
      .image-wrap {
        width: 100%;
        display: flex;
      }
    }
    .article:nth-child(3) {
      margin-top: 8px;
    }
  }
  @media ${Styles.c.tablet} {
    max-height: 550px;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;
    .article-row {
      max-width: calc(50% - 8px);
    }
    .section-body {
      max-height: 600px;
      flex-direction: column;
    }
    .article {
      flex-direction: column;
      width: calc(50% - 8px);
    }
    align-items: flex-start;
  }

  @media ${Styles.c.laptop} {
    .article {
      ${article_ArticleHeadline} {
        font-size: 19px;
        line-height: 1.21;
      }
    }
  }
`,ArticleX12=props=>{const{className:className,data:data}=props,{labelLink:labelLink,labelText:labelText}=data;let topArticles={...data};topArticles.articles=data.articles&&data.articles.slice(0,6);let bottomArticles={...data};return bottomArticles.articles=data.articles&&data.articles.slice(6,12),Object(jsx_runtime.jsxs)(ArticleX12_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(FlowWrapper,{children:[Object(jsx_runtime.jsx)(components_ArticleRow,{...props,data:topArticles,srcset:[471,349,280],hasImage:!0}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,data:bottomArticles,srcset:[471,349,280],hasImage:!0})]})]})};ArticleX12.propTypes={className:prop_types_default.a.any,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},ArticleX12.__docgenInfo={description:"",methods:[],displayName:"ArticleX12",props:{className:{type:{name:"any"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_ArticleX12=ArticleX12;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/ArticleX12.js"]={name:"ArticleX12",docgenInfo:ArticleX12.__docgenInfo,path:"app/component/library/Section/ArticleX12.js"});const Carouselx12_Wrapper=styled_components_browser_esm.default.div`
  .tablet,
  .desktop {
    display: none;
  }
  @media ${Styles.c.tablet} {
    .desktop,
    .mobile {
      display: none;
    }
    .tablet {
      display: block;
    }
  }
  @media ${Styles.c.laptop} {
    .tablet,
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`,Carouselx12_CarouselWrapper=styled_components_browser_esm.default.div`
  .capsule {
    display: none;
  }
`,CarouselHeader=styled_components_browser_esm.default.div`
  padding: 12px 8px;
  line-height: 0;
  color: ${props=>props.theme.color.primary};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,TotalArticles=styled_components_browser_esm.default.div`
  display: flex;
  float: right;
  color: ${props=>props.theme.color.contrastDarker};
  padding-top: 6px;
`,ArticleItemWrapper=styled_components_browser_esm.default.div`
  display: flex;
`,Arrow=styled_components_browser_esm.default.img``,Headline=styled_components_browser_esm.default.span`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`;var Section_Carouselx12=Object(styled_components_browser_esm.default)(({className:className,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink}})=>{const sizeArticlePerSlideMobile=2,sizeArticlePerSlideTablet=4,sizeArticlePerSlideDesktop=6;if(!Array.isArray(articles)||0===articles.length)return null;const carouselItem=articles.filter(article=>article);return Object(jsx_runtime.jsxs)(Carouselx12_Wrapper,{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(CarouselHeader,{children:[Object(jsx_runtime.jsx)(Arrow,{src:"/img/icons/trending-arrow.png"}),Object(jsx_runtime.jsx)(Headline,{children:"TRENDING STORIES"}),Object(jsx_runtime.jsxs)(TotalArticles,{children:[Object(jsx_runtime.jsx)("span",{"amp-bind-text":"+selectedSlide + 1",children:"1"}),"/",Object(jsx_runtime.jsx)("span",{className:"desktop",children:Math.ceil(carouselItem.length/sizeArticlePerSlideDesktop)}),Object(jsx_runtime.jsx)("span",{className:"tablet",children:Math.ceil(carouselItem.length/sizeArticlePerSlideTablet)}),Object(jsx_runtime.jsx)("span",{className:"mobile",children:Math.ceil(carouselItem.length/sizeArticlePerSlideMobile)})]})]}),Object(jsx_runtime.jsx)(Carouselx12_CarouselWrapper,{children:[["desktop",sizeArticlePerSlideDesktop],["tablet",sizeArticlePerSlideTablet],["mobile",sizeArticlePerSlideMobile]].map(([device,sizePerSlide],index)=>Object(jsx_runtime.jsx)(Carousel_default.a,{class:device,height:"202",layout:"fixed-height","amp-bind-slide":"selectedSlide",on:"slideChange:AMP.setState({ selectedSlide: event.index })",type:"slides",children:carouselItem.filter(article=>article).reduce((acc,article)=>{const last=acc[acc.length-1];return last.length<sizePerSlide?(last.push(article),acc):[...acc,[article]]},[[]]).map((chunk,index)=>Object(jsx_runtime.jsx)(ArticleItemWrapper,{children:chunk.map(article=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:[238,159],data:article},index))},index))},index))})]})})`
  background: ${props=>props.theme.color.bgGrey};
  margin-bottom: 16px;
  amp-carousel > div:first-child {
    height: 100%;
    div::-webkit-scrollbar {
      display: none;
    }
  }
  .article {
    display: flex;
    flex-direction: column;
    min-width: 163px;
    max-width: 163px;
    min-height: 194px;
    max-height: 194px;
    margin: 0 0 8px 8px;
    background: ${props=>props.theme.color.contrastLight};
    overflow: hidden;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    @media ${Styles.c.tablet} {
      min-width: 176px;
      max-width: 176px;
    }
    @media ${Styles.c.laptop} {
      min-width: 152px;
      max-width: 152px;
    }
  }
  .content h2 {
    font-size: 15px;
    letter-spacing: 0;
    white-space: pre-line;
    padding: 8px;
    margin: 0;
  }
  .image-wrap {
    width: 100%;
  }
  .amp-carousel-button {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  .amp-carousel-button-next {
    background: rgba(0, 0, 0, 0.5) url(/img/icons/icon-chevron-right.svg) 50%/30%
      no-repeat;
  }
  .amp-carousel-button-prev {
    background: rgba(0, 0, 0, 0.5) url(/img/icons/icon-chevron-left.svg) 50%/30%
      no-repeat;
  }
`;const FeedList_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
  padding: 12px;
  margin-bottom: 16px;

  amp-list > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`,FeedList_Arrow=styled_components_browser_esm.default.img``,FeedList_Headline=styled_components_browser_esm.default.h2`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 12px;
  margin-bottom: 8px;
  line-height: normal;
  margin-top: 0;
`,ListItem=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 100%;
  @media ${Styles.c.tablet} {
    margin-bottom: 0;
    width: min-content;
  }
`,Link=styled_components_browser_esm.default.span`
  display: block;
  font-size: 16px;
  color: ${props=>props.theme.color.fontTitle};
  font-weight: 500;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,FeedList_ImageWrapper=styled_components_browser_esm.default.a``,Divider=styled_components_browser_esm.default.div`
  display: block;
  border-style: solid;
  border-radius: 40% 50%/10% 90%;
  color: ${props=>props.theme.color.contrastDarker};
`,FeedList=({className:className,src:src,items:items="items",length:length,title:title,width:width,layout:layout,height:height})=>Object(jsx_runtime.jsxs)(FeedList_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Divider,{}),Object(jsx_runtime.jsx)(FeedList_Arrow,{src:"/img/icons/trending-arrow.png"}),Object(jsx_runtime.jsx)(FeedList_Headline,{children:title}),Object(jsx_runtime.jsx)("amp-list",{src:src,layout:layout,width:width,height:height,"max-items":length,items:items,children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsx)(ListItem,{children:Object(jsx_runtime.jsxs)(FeedList_ImageWrapper,{href:"amp-template-link",children:[Object(jsx_runtime.jsx)("amp-img",{src:"amp-template-image",alt:"amp-template-title",width:"268",height:"178",layout:"responsive"}),Object(jsx_runtime.jsx)(Link,{children:"amp-template-title"})]})})})}),Object(jsx_runtime.jsx)(Divider,{})]});FeedList.propTypes={className:prop_types_default.a.string,src:prop_types_default.a.string.isRequired,layout:prop_types_default.a.string.isRequired,width:prop_types_default.a.number,height:prop_types_default.a.number,items:prop_types_default.a.string,logo:prop_types_default.a.any,title:prop_types_default.a.any,length:prop_types_default.a.number},FeedList.__docgenInfo={description:"",methods:[],displayName:"FeedList",props:{items:{defaultValue:{value:"'items'",computed:!1},type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},layout:{type:{name:"string"},required:!0,description:""},width:{type:{name:"number"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""},logo:{type:{name:"any"},required:!1,description:""},title:{type:{name:"any"},required:!1,description:""},length:{type:{name:"number"},required:!1,description:""}}};var components_FeedList=FeedList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/FeedList.js"]={name:"FeedList",docgenInfo:FeedList.__docgenInfo,path:"app/component/library/Section/components/FeedList.js"});const ChartbeatFeed=props=>{const{configuration:configuration}=props,src=configuration.feeds.chartbeat.src,items=configuration.feeds.chartbeat.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items,length:"4",layout:"fixed-height",title:"Most popular"})};ChartbeatFeed.propTypes={configuration:prop_types_default.a.object.isRequired};var Section_ChartbeatFeed=Object(styled_components_browser_esm.default)(ChartbeatFeed)`
  counter-reset: a;
  padding: 0;
  @media ${Styles.c.maxTablet} {
    margin: 0 12px 24px;
  }
  amp-list {
    height: 380px;
    @media ${Styles.c.tablet} {
      height: 220px;
    }
  }
  ${FeedList_Headline} {
    font-family: ${props=>props.theme.fontFamily.insiderDisplay};
    font-size: 35px;
    color: ${props=>props.theme.color.secondary};
    text-align: center;
    line-height: 1.23;
    margin: 16px 0 32px;
  }
  ${ListItem} {
    margin-bottom: 32px;
    @media ${Styles.c.tablet} {
      flex-basis: calc(50% - 25px);
      margin-bottom: 38px;
      &:nth-child(-n + 2) {
      }
    }
    @media ${Styles.c.laptop} {
      &:nth-child(-n + 2) {
        margin-bottom: 42px;
      }
    }
  }
  ${Link} {
    display: flex;
    font-family: ${props=>props.theme.fontFamily.insiderSectra};
    line-height: 1.47;
    font-size: 19px;
    font-weight: normal;
    color: ${props=>props.theme.color.secondary};
    &:before {
      counter-increment: a;
      content: counter(a);
      margin-top: -40px;
      padding-right: 16px;
      padding-left: 16px;
      line-height: 80px;
      font: 500 80px ${props=>props.theme.fontFamily.insiderDisplay};
    }
  }
  amp-img,
  img {
    display: none;
  }
`;const CommentHighlight_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 16px;
  .article {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    @media ${Styles.c.tablet} {
      flex-wrap: nowrap;
    }
    .image-wrap {
      width: 100%;
      height: auto;
      order: 2;
    }
    .author {
      font-size: 28px;
      line-height: 1.21;
      opacity: 1;
    }
    .capsule {
      margin-top: 0;
      span {
        display: none;
      }
    }
    .content {
      order: 1;
      width: 100%;
      margin-bottom: 16px;

      .author {
        font-size: 28px;
        line-height: 1.21;
      }
      h2 {
        font-size: 24px;
        line-height: 1.17;
        font-family: ${props=>props.theme.fontFamily.secondaryFont};
        @media ${Styles.c.laptop} {
          font-size: 32px;
          line-height: 1.13;
        }
      }
    }
    @media ${Styles.c.tablet} {
      max-height: 350px;
      .content {
        flex-basis: calc(58% - 8px);
      }
      .image-wrap {
        flex-basis: calc(42% - 8px);
      }
    }
  }
`,CommentHighlight=props=>{const{componentStyle:componentStyle,data:{labelLink:labelLink,labelText:labelText,articles:articles}}=props;return Object(jsx_runtime.jsxs)(CommentHighlight_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:[968,640,280],showAuthor:!0,data:articles[0],componentStyle:componentStyle})]})};CommentHighlight.propTypes={componentStyle:prop_types_default.a.any.isRequired,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},CommentHighlight.__docgenInfo={description:"",methods:[],displayName:"CommentHighlight",props:{componentStyle:{type:{name:"any"},required:!0,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_CommentHighlight=CommentHighlight;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/CommentHighlight.js"]={name:"CommentHighlight",docgenInfo:CommentHighlight.__docgenInfo,path:"app/component/library/Section/CommentHighlight.js"});const HeadShotX3_CarouselWrapper=styled_components_browser_esm.default.div`
  border-top: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
  background: #f5f5f5;
`;var Section_HeadShotX3=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink},componentStyle:componentStyle,configuration:configuration})=>Object(jsx_runtime.jsxs)("div",{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(HeadShotX3_CarouselWrapper,{children:Object(jsx_runtime.jsx)(Carousel_default.a,{height:"90",layout:"fixed-height",type:"carousel",children:articles&&articles.filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleHeadshot,{srcset:srcset,data:article,componentStyle:componentStyle,configuration:configuration},index))})})]}))`
  display: flex;
  flex-direction: column;
  .headshot {
    width: 100%;
    box-sizing: border-box;
    padding: 0 48px;
    height: 90px;
    overflow: hidden;
    margin: 0;
    @media ${Styles.c.tablet} {
      width: 50%;
    }
    @media ${Styles.c.laptop} {
      padding: 0;
      width: 33.33%;
    }
    h2 {
      white-space: normal;
    }
  }
  .amp-carousel-button {
    cursor: pointer;
    background: none;
    outline: none;
    width: 24px;
    height: 24px;
    &:before {
      content: ' ';
      width: 100%;
      height: 100%;
      display: block;
      background: url(/img/icons/swipe.svg);
    }
    &.amp-disabled {
      opacity: 1;
      visibility: visible;
      &:before {
        background: url(/img/icons/swipe-disabled.svg);
      }
    }
    @media ${Styles.c.laptop} {
      display: none;
    }
  }
  .amp-carousel-button-next {
    &:before {
      transform: rotate(180deg);
    }
  }
  /* Fix for removing scrollbar */
  amp-carousel > div:first-child {
    scrollbar-width: none; /* For Firefox */
  }
  amp-carousel > div:first-child::-webkit-scrollbar {
    display: none; /* For Chromium */
  }
`;const Hero2Plus2DMPU_DMPUContainer=Object(styled_components_browser_esm.default)(components_AdDMPU)`
  width: 300px;
  margin: auto;
  @media ${Styles.c.tablet} {
    margin: 0;
  }
`,Hero2Plus2DMPU_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 16px;
  .section-body {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
  }
  .article-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
    @media ${Styles.c.tablet} {
      width: 364px;
      margin-right: 16px;
    }
    @media ${Styles.c.laptop} {
      width: 640px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .article:nth-child(2n - 1) {
    margin-bottom: 24px;
    flex: 1 1 100%;
    .image-wrap {
      width: 100%;
    }
    .capsule {
      color: ${props=>props.theme.color.contrastLight};
      span > svg {
        fill: ${props=>props.theme.color.contrastLight};
      }
    }
    .media-video:before {
      bottom: 1.2em;
      left: -1em;
    }
    .content {
      position: absolute;
      bottom: 0;
      padding: 0 10px 0 20px;

      h2 {
        position: relative;
        z-index: 1;
        a {
          font-family: ${props=>props.theme.fontFamily.primaryFont};
          font-size: 24px;
          line-height: 1.17;
          color: ${props=>props.theme.color.contrastLight};
          @media ${Styles.c.laptop} {
            font-size: 19px;
            line-height: 1.21;
          }
        }
      }
      .highlight-block {
        display: block;
        height: calc(100% - 31px);
      }
    }
    .media-video svg {
      fill: ${props=>props.theme.color.contrastLight};
    }
    @media ${Styles.c.laptop} {
      width: calc(63% - 10px);
      margin-right: 16px;
      flex: unset;
      .content h2 a {
        font-size: 24px;
        line-height: 1.17;
      }
    }
  }
  .article:nth-child(2n) {
    flex-direction: row;
    margin-bottom: 16px;
    justify-content: space-between;
    .image-wrap {
      float: left;
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.tablet} {
        flex-basis: unset;
      }
    }
    .content {
      flex-basis: calc(50% - 8px);
      @media ${Styles.c.tablet} {
        flex-basis: unset;
      }
    }
    .capsule {
      @media ${Styles.c.maxTablet} {
        margin-top: 0;
      }
    }
    .media-video:before {
      width: 70px;
      height: 70px;
      background-size: 70px 70px;
    }
    @media ${Styles.c.tablet} {
      flex-direction: column;
      flex: 1 1 50%;
      justify-content: normal;
      .image-wrap {
        width: 100%;
        margin-right: 0;
      }
    }
    @media ${Styles.c.laptop} {
      flex-direction: column;
      width: calc(37% - 6px);
      margin-bottom: 0;
      flex: unset;
      .image-wrap {
        width: auto;
        height: auto;
      }
    }
  }
  .article:nth-child(3) {
    order: -1;
  }
  @media ${Styles.c.tablet} {
    flex-direction: row;
    .article:nth-child(2) .image-wrap {
      width: calc(100% - 16px);
      height: 100%;
      a {
        height: 100%;
      }
    }
    .dmpu {
      margin-left: 12px;
    }
  }
  @media ${Styles.c.laptop} {
    align-items: flex-start;

    .section-body {
      flex-direction: row;
      flex-flow: wrap;
    }
    .article:nth-child(3) {
      order: 4;
      margin-right: 0;
      margin-left: 16px;
    }
    .article:nth-child(2) .image-wrap {
      width: 100%;
      height: unset;
    }
  }
`,Hero2Plus2DMPU=props=>{const{className:className,ad:ad,mpuId:mpuId,data:{labelLink:labelLink,labelText:labelText}}=props;return Object(jsx_runtime.jsxs)(Hero2Plus2DMPU_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),"Left"===ad&&Object(jsx_runtime.jsx)(Hero2Plus2DMPU_DMPUContainer,{mpuId:mpuId}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[471,349,280],hasImage:!0}),"Left"!==ad&&Object(jsx_runtime.jsx)(Hero2Plus2DMPU_DMPUContainer,{mpuId:mpuId})]})};Hero2Plus2DMPU.propTypes={className:prop_types_default.a.string,ad:prop_types_default.a.string,mpuId:prop_types_default.a.string.isRequired,data:prop_types_default.a.object.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string},Hero2Plus2DMPU.__docgenInfo={description:"",methods:[],displayName:"Hero2Plus2DMPU",props:{className:{type:{name:"string"},required:!1,description:""},ad:{type:{name:"string"},required:!1,description:""},mpuId:{type:{name:"string"},required:!0,description:""},data:{type:{name:"object"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""}}};var Section_Hero2Plus2DMPU=Hero2Plus2DMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/Hero2Plus2DMPU.js"]={name:"Hero2Plus2DMPU",docgenInfo:Hero2Plus2DMPU.__docgenInfo,path:"app/component/library/Section/Hero2Plus2DMPU.js"});const HeroArticle_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 24px;
  .article {
    width: 100%;
    max-height: 372px;
    margin-bottom: 0;
    .image-wrap {
      width: 100%;
      height: auto;
    }
    .capsule {
      color: ${props=>props.theme.color.contrastLight};
      span > svg {
        fill: ${props=>props.theme.color.contrastLight};
      }
    }
    .content {
      position: absolute;
      bottom: 0;
      padding: 0 10px 0 20px;

      ${article_ArticleHeadline} {
        position: relative;
        z-index: 1;
        font-size: 24px;
        line-height: 1.17;
        margin: -2px 0 0;
        @media ${Styles.c.tablet} {
          font-size: 42px;
          line-height: 1.14;
        }
        a {
          font-family: ${props=>props.theme.fontFamily.primaryFont};
          color: ${props=>props.theme.color.contrastLight};
        }
      }
      .highlight-block {
        display: block;
        @media ${Styles.c.maxTablet} {
          height: calc(100% - 32px);
        }
      }
    }
    .media-video:before {
      bottom: 1.2em;
      left: -1em;
    }
    .media-video svg {
      fill: ${props=>props.theme.color.contrastLight};
    }
    @media ${Styles.c.tablet} {
    }
    @media ${Styles.c.laptop} {
      max-height: 482px;
      ${article_ArticleHeadline} {
        font-size: 42px;
      }
    }
  }
`,HeroArticle_WrapperInsider=styled_components_browser_esm.default.div`
  ${components_ComponentTitle} {
    margin-bottom: 32px;
    @media ${Styles.c.tablet} {
      margin-bottom: 46px;
    }
    @media ${Styles.c.tablet} {
      margin-bottom: 56px;
    }
  }
  .section-body {
    flex-direction: column;
    @media ${Styles.c.maxMobileL} {
      margin: 0 12px;
    }
  }
  .article {
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    .image-wrap {
      padding-top: 66.67%;
    }
    @media ${Styles.c.mobileL} {
      width: 385px;
    }
    @media ${Styles.c.tablet} {
      width: 700px;
    }
    @media ${Styles.c.laptop} {
      width: 740px;
    }
  }
  .color-variation {
    position: absolute;
    top: -8px;
    left: 16px;
    right: 16px;
    @media ${Styles.c.mobileL} {
      top: -8px;
      left: -8px;
      right: -8px;
    }
    @media ${Styles.c.tablet} {
      top: -22px;
      left: -22px;
      right: -22px;
    }
    @media ${Styles.c.laptop} {
      top: -32px;
      left: -32px;
      right: -32px;
    }
    .mobile-svg {
      @media ${Styles.c.mobileL} {
        display: none;
      }
    }
    .mobile-large-svg {
      display: none;
      @media ${Styles.c.mobileL} and ${Styles.c.maxTablet} {
        display: block;
      }
    }
    .desktop-svg {
      @media ${Styles.c.maxTablet} {
        display: none;
      }
    }
  }
  .content {
    text-align: center;
  }
  ${article_ArticleHeadline} {
    margin-right: 12px;
    margin-left: 12px;
    font-size: 28px;
    line-height: 1.25;
    font-family: ${props=>props.theme.fontFamily.insiderDisplay};
    @media ${Styles.c.tablet} {
      margin-right: 50px;
      margin-left: 50px;
      font-size: 35px;
      line-height: 1.23;
    }
  }
  ${ArticleAuthorInsider} {
    &:before {
      margin-left: -125px;
      width: 250px;
    }
  }
`,HeroArticle=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props,ThemedWrapper=Object(helper.b)(componentStyle,HeroArticle_Wrapper,{insider:HeroArticle_WrapperInsider});return Object(jsx_runtime.jsxs)(ThemedWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[968,640,280],hasImage:!0})]})};HeroArticle.propTypes={data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},HeroArticle.__docgenInfo={description:"",methods:[],displayName:"HeroArticle",props:{data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Section_HeroArticle=HeroArticle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroArticle.js"]={name:"HeroArticle",docgenInfo:HeroArticle.__docgenInfo,path:"app/component/library/Section/HeroArticle.js"});const HeroPlus2_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 24px;
`,SectionBody=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${Styles.c.tablet} {
    flex-direction: row;
  }
  .highlight-block {
    @media ${Styles.c.tablet} {
      height: calc(100% - 40px);
    }
    @media ${Styles.c.laptop} {
      height: calc(100% - 39px);
    }
  }

  > * {
    flex-basis: calc(50% - 8px);
  }
  @media ${Styles.c.laptop} {
    > :first-child {
      flex-basis: calc(67% - 8px);
    }
    > :last-child {
      flex-basis: calc(33% - 8px);
    }
  }
  //hero article
  > ${article_ArticleHero} {
    margin-bottom: 32px;
    @media ${Styles.c.tablet} {
      margin-bottom: 0;
    }
    ${article_ArticleHeadline} {
      font-size: 24px;
      line-height: 28px;
      @media ${Styles.c.tablet} {
        font-size: 42px;
        line-height: 48px;
        top: 0;
      }
    }
  }
`,OtherArticles=styled_components_browser_esm.default.div`
  ${article_ArticleHeadline} {
    font-size: 24px;
    line-height: 28px;
  }
  .highlight-block {
    height: calc(100% - 34px);
    @media ${Styles.c.laptop} {
      height: calc(100% - 32px);
    }
  }
  .media-video:before {
    width: 70px;
    height: 70px;
    background-size: 70px 70px;
  }
  > div {
    &:first-child {
      margin-bottom: 32px;
      @media ${Styles.c.tablet} {
        margin-bottom: 24px;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`,HeroPlus2=props=>{const{className:className,data:{labelLink:labelLink,labelText:labelText,articles:articles,type:type}}=props;return Object(jsx_runtime.jsxs)(HeroPlus2_Wrapper,{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(SectionBody,{className:[className,"section-body"],children:[articles[0]&&Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:articles[0]}),Object(jsx_runtime.jsx)(OtherArticles,{children:articles.slice(1).filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:article},index))})]})]})};HeroPlus2.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string,className:prop_types_default.a.string},HeroPlus2.__docgenInfo={description:"",methods:[],displayName:"HeroPlus2",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Section_HeroPlus2=HeroPlus2;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroPlus2.js"]={name:"HeroPlus2",docgenInfo:HeroPlus2.__docgenInfo,path:"app/component/library/Section/HeroPlus2.js"});const HeroPlus2DMPU_heroSrcset=[280,384,616],srcSet=[150,250,350],HeroPlus2DMPU=Object(styled_components_browser_esm.default)(({publication:publication,configuration:configuration,className:className,mpuId:mpuId,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink,ad:ad}})=>Object(jsx_runtime.jsxs)("div",{className:className,"data-type":type,children:[Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(components_AdAlignmentDMPU,{ad:ad.alignment,publication:publication,mpuId:mpuId,configuration:configuration,children:[Object(jsx_runtime.jsx)(article_ArticleHero,{srcset:HeroPlus2DMPU_heroSrcset,data:articles.shift()}),null==articles?void 0:articles.filter(article=>article&&Object.keys(article).length>0).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:srcSet,data:article,hasImage:!0},index))]})]}))`
  display: flex;
  margin-bottom: 16px;
`;var Section_HeroPlus2DMPU=Object(styled_components_browser_esm.default)(HeroPlus2DMPU)`
  flex-direction: column;
  .section-body {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: space-between;
    .image-wrap {
      width: 100%;
    }
    .hero-article {
      position: relative;
      padding-top: 66.67%;
      margin-bottom: 24px;
      @media ${Styles.c.tablet} {
        padding-top: 105.5%;
      }
      @media ${Styles.c.laptop} {
        padding-top: 41.2%;
      }
      .image-wrap {
        position: absolute;
        top: 0;
      }
      ${article_ArticleHeadline} {
        font-size: 24px;
        line-height: 28px;
        @media ${Styles.c.laptop} {
          font-size: 42px;
          line-height: 48px;
        }
      }
    }
    .highlight-block {
      @media ${Styles.c.tablet} {
        height: calc(100% - 34px);
      }
      @media ${Styles.c.laptop} {
        height: calc(100% - 39px);
      }
    }
    .article {
      flex-direction: column;
      flex-basis: calc(50% - 8px);
      ${article_ArticleHeadline} {
        font-size: 16px;
        line-height: 20px;
        @media ${Styles.c.laptop} {
          font-size: 24px;
          line-height: 28px;
        }
      }
    }
    @media ${Styles.c.laptop} {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .align-left {
    flex-direction: column;
    @media ${Styles.c.tablet} {
      flex-direction: row-reverse;
    }
    .section-body {
      margin-right: 0;
      @media ${Styles.c.tablet} {
        margin-left: 20px;
      }
    }
  }
`;var Section_HeroPlus3=Object(styled_components_browser_esm.default)(({className:className,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink,heroAlignment:heroAlignment},componentStyle:componentStyle})=>{let heroClass="hero-left";return"Right"===heroAlignment&&(heroClass="hero-right"),Object(jsx_runtime.jsxs)("div",{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)("div",{className:[className,"section-body",heroClass].join(" "),children:[articles[0]&&Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:articles[0],componentStyle:componentStyle}),Object(jsx_runtime.jsx)("div",{className:"articles",children:articles.slice(1).filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{data:article,componentStyle:componentStyle},index))})]})]})})`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  .section-body {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    @media ${Styles.c.tablet} {
      flex-direction: row;
      &.hero-right {
        flex-direction: row-reverse;
      }
    }
    .hero-article {
      margin-right: 0;
      margin-bottom: 16px;
      ${article_ArticleHeadline} {
        font-size: 24px;
        line-height: 28px;
        @media ${Styles.c.laptop} {
          font-size: 28px;
          line-height: 34px;
        }
      }
      @media ${Styles.c.tablet} {
        flex: 1;
        margin-right: 8px;
        margin-bottom: 0;
        height: auto;
      }
      .highlight-block {
        height: calc(100% - 34px);
      }
    }
    .articles {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .article {
        border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
        margin-bottom: 0;
        padding-bottom: 16px;
      }
      //.article:last-child {
      //  margin-bottom: 0;
      //}
      @media ${Styles.c.tablet} {
        width: 300px;
        margin-left: 8px;
      }
      @media ${Styles.c.laptop} {
        width: auto;
        flex: 1;
      }
      .image-wrap {
        display: none;
      }
      ${article_ArticleHeadline} {
        font-size: 16px;
        line-height: 20px;
        @media ${Styles.c.tablet} {
          font-size: 19px;
          line-height: 23px;
        }
        @media ${Styles.c.laptop} {
          font-size: 24px;
          line-height: 28px;
        }
      }
    }
  }
`;var Section_HeroPlus4=Object(styled_components_browser_esm.default)(({className:className,data:{type:type,articles:articles,labelText:labelText,labelLink:labelLink,heroAlignment:heroAlignment},maxTitleLength:maxTitleLength,componentStyle:componentStyle})=>{let heroClass="hero-left";return"Right"===heroAlignment&&(heroClass="hero-right"),Object(jsx_runtime.jsxs)("div",{className:className,"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)("div",{className:[className,"section-body",heroClass].join(" "),children:[articles[0]&&Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:articles[0],componentStyle:componentStyle}),Object(jsx_runtime.jsx)("div",{className:"articles",children:articles.slice(1).filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{data:article,maxTitleLength:maxTitleLength,componentStyle:componentStyle},index))})]})]})})`
  display: flex;
  flex-direction: column;
  @media ${Styles.c.tablet} {
    margin-bottom: 24px;
  }
  .section-body {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    @media ${Styles.c.tablet} {
      flex-direction: row;
      &.hero-right {
        flex-direction: row-reverse;
      }
    }
    .hero-article {
      margin-right: 0;
      margin-bottom: 16px;
      ${article_ArticleHeadline} {
        font-size: 24px;
        line-height: 1.17;
        @media ${Styles.c.laptop} {
          font-size: 28px;
          line-height: 1.21;
        }
      }
      @media ${Styles.c.tablet} {
        flex: 1;
        margin-right: 8px;
        margin-bottom: 0;
        height: auto;
      }
    }
    .articles {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      @media ${Styles.c.tablet} {
        width: 300px;
        margin-left: 8px;
      }
      @media ${Styles.c.laptop} {
        width: auto;
        flex: 1;
      }
      .image-wrap {
        display: none;
      }
      ${article_ArticleHeadline} {
        font-size: 16px;
        line-height: 1.25;
        @media ${Styles.c.laptop} {
          font-size: 24px;
          line-height: 1.17;
        }
      }
    }
    .article {
      border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
      margin-bottom: 0;
      padding-bottom: 16px;
    }
  }
`;const HeroPlus5DMPU_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 16px;
`,TopArticles=styled_components_browser_esm.default.div`
  .hero-article {
    margin-bottom: 24px;
    @media ${Styles.c.tablet} {
      margin: 0 16px 16px 0;
    }

    ${article_ArticleHeadline} {
      font-size: 24px;
      line-height: 1.17;
    }
    .highlight-block {
      height: calc(100% - 32px);
    }
  }
  .article {
    flex-direction: column;
    width: 48%;
    float: left;
    margin-right: 14px;
    .image-wrap {
      width: 100%;
      height: auto;
    }
    ${article_ArticleHeadline} {
      font-size: 16px;
      line-height: 1.25;
    }
    .media-video:before {
      width: 70px;
      height: 70px;
      background-size: 70px 70px;
    }
  }
  @media ${Styles.c.tablet} {
    .article {
      width: 174px;
    }
  }
  @media ${Styles.c.laptop} {
    display: flex;
    .hero-article {
      ${article_ArticleHeadline} {
        font-size: 24px;
        line-height: 1.17;
      }
    }
    .article {
      width: calc(60% - 10px);
      margin-right: 0;
      ${article_ArticleHeadline} {
        font-size: 19px;
        line-height: 1.21;
      }
    }
  }
`,BottomArticles=styled_components_browser_esm.default.div`
  .type-article {
    flex-direction: column;
    width: 47%;
    float: left;
    @media ${Styles.c.mobileM} {
      width: 48%;
    }
    .article {
      flex-direction: column;
      .image-wrap {
        width: 100%;
      }
    }
  }
  .three-articles {
    flex-direction: column;
    display: flex;
    clear: both;
    width: 100%;
    .image-wrap {
      display: none;
    }
    ${article_ArticleHeadline} {
      font-size: 16px;
      line-height: 1.25;
    }
    .article {
      border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
      padding-bottom: 16px;
      margin-bottom: 0;
      &:last-child {
        @media ${Styles.c.maxTablet} {
          margin-bottom: 16px;
        }
      }
    }
  }
  .media-video:before {
    width: 70px;
    height: 70px;
    background-size: 70px 70px;
  }
  @media ${Styles.c.tablet} {
    .type-article {
      width: 174px;
    }
  }
  @media ${Styles.c.laptop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    .three-articles {
      flex-direction: column;
      width: 65%;
      margin-right: 16px;
      .article {
        margin-right: 0;
      }
      ${article_ArticleHeadline} {
        font-size: 24px;
        line-height: 1.17;
      }
    }
    .type-article {
      width: 38%;
    }
  }
`,HeroPlus5DMPU=({className:className,mpuId:mpuId,configuration:configuration,publication:publication,data:{labelLink:labelLink,labelText:labelText,articles:articles,ad:ad}})=>Object(jsx_runtime.jsxs)(HeroPlus5DMPU_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(components_AdAlignmentDMPU,{ad:ad.alignment,publication:publication,mpuId:mpuId,configuration:configuration,children:[Object(jsx_runtime.jsxs)(TopArticles,{children:[articles[0]&&Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:articles[0],configuration:configuration}),articles[1]&&Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:[280,384,616],data:articles[1],configuration:configuration,hasImage:!0})]}),Object(jsx_runtime.jsxs)(BottomArticles,{children:[Object(jsx_runtime.jsx)("div",{className:"type-article",children:articles[2]&&Object(jsx_runtime.jsx)(article_ArticleItem,{srcset:[471,349,280],data:articles[2],configuration:configuration,hasImage:!0})}),Object(jsx_runtime.jsx)("div",{className:"three-articles",children:articles.slice(3).filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(article_ArticleItem,{data:article,configuration:configuration},index))})]})]})]});HeroPlus5DMPU.propTypes={className:prop_types_default.a.string,ad:prop_types_default.a.any,mpuId:prop_types_default.a.string.isRequired,data:prop_types_default.a.any.isRequired,configuration:prop_types_default.a.any.isRequired,publication:prop_types_default.a.string},HeroPlus5DMPU.__docgenInfo={description:"",methods:[],displayName:"HeroPlus5DMPU",props:{className:{type:{name:"string"},required:!1,description:""},ad:{type:{name:"any"},required:!1,description:""},mpuId:{type:{name:"string"},required:!0,description:""},data:{type:{name:"any"},required:!0,description:""},configuration:{type:{name:"any"},required:!0,description:""},publication:{type:{name:"string"},required:!1,description:""}}};var Section_HeroPlus5DMPU=HeroPlus5DMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroPlus5DMPU.js"]={name:"HeroPlus5DMPU",docgenInfo:HeroPlus5DMPU.__docgenInfo,path:"app/component/library/Section/HeroPlus5DMPU.js"});const HeroPlus6_Wrapper=styled_components_browser_esm.default.div`
  .hero-article {
    flex-basis: calc(33% - 8px);
    margin-bottom: 16px;
    ${article_ArticleHeadline} {
      font-size: 24px;
      line-height: 28px;
    }
    .highlight-block {
      height: calc(100% - 32px);
    }
    @media ${Styles.c.tablet} {
      flex-basis: calc(50% - 8px);
      margin-bottom: 0;
    }
    @media ${Styles.c.laptop} {
      flex-basis: calc(33% - 8px);
    }
    .media-video svg {
      fill: ${props=>props.theme.color.contrastLight};
    }
    .media-video:before {
      display: block;
      width: 70px;
      height: 70px;
      left: -1em;
      background-size: 70px 70px;
    }
  }
  .article-row {
    flex-basis: calc(67% - 8px);
    margin-bottom: 0;
    @media ${Styles.c.tablet} {
      flex-basis: calc(50% - 8px);
    }
    @media ${Styles.c.laptop} {
      flex-basis: calc(67% - 8px);
    }
  }
  .section-body {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
  .article {
    margin-bottom: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
    @media ${Styles.c.tablet} {
      flex-basis: calc(50% - 8px);
    }
    ${article_ArticleHeadline} {
      font-size: 16px;
      line-height: 20px;
      @media ${Styles.c.laptop} {
        font-size: 24px;
        line-height: 28px;
      }
    }
    .image-wrap {
      display: none;
    }
    .media-video:before {
      display: none;
    }
    .media-video > span {
      display: inline-block;
    }
  }
`,HeroPlus6_ArticleWrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 24px;
  @media ${Styles.c.tablet} {
    flex-direction: row;
  }
`,HeroPlus6=props=>{const{className:className,data:{labelLink:labelLink,labelText:labelText,articles:articles}}=props;return Object(jsx_runtime.jsxs)(HeroPlus6_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(HeroPlus6_ArticleWrapper,{children:[Object(jsx_runtime.jsx)(article_ArticleHero,{heroSrcset:[280,384,616],data:articles.shift()}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[792,396,200],hasImage:!0})]})]})};HeroPlus6.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},HeroPlus6.__docgenInfo={description:"",methods:[],displayName:"HeroPlus6",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_HeroPlus6=HeroPlus6;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroPlus6.js"]={name:"HeroPlus6",docgenInfo:HeroPlus6.__docgenInfo,path:"app/component/library/Section/HeroPlus6.js"});const HeroPlusDMPU_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 16px;
  @media ${Styles.c.tablet} {
    margin-bottom: 24px;
  }
  .hero-article {
    margin-bottom: 16px;
    width: 100%;
    .image-wrap {
      height: auto;
    }
    @media ${Styles.c.tablet} {
      height: 616px;
      margin-bottom: 0;
      ${article_ArticleHeadline} {
        font-size: 42px;
        line-height: 48px;
      }
    }
  }
  .article-row {
    @media ${Styles.c.tablet} {
      margin-bottom: 0;
    }
  }
`,HeroPlusDMPU=props=>{const{mpuId:mpuId,configuration:configuration,data:{labelLink:labelLink,labelText:labelText,articles:articles,ad:ad}}=props;return Object(jsx_runtime.jsxs)(HeroPlusDMPU_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(components_AdAlignmentDMPU,{ad:ad.alignment,mpuId:mpuId,configuration:configuration,children:articles&&Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[968,640,280],useHero:!0})})]})};HeroPlusDMPU.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.string,labelLink:prop_types_default.a.string,mpuId:prop_types_default.a.string.isRequired,publication:prop_types_default.a.any,configuration:prop_types_default.a.any},HeroPlusDMPU.__docgenInfo={description:"",methods:[],displayName:"HeroPlusDMPU",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"string"},required:!1,description:""},labelLink:{type:{name:"string"},required:!1,description:""},mpuId:{type:{name:"string"},required:!0,description:""},publication:{type:{name:"any"},required:!1,description:""},configuration:{type:{name:"any"},required:!1,description:""}}};var Section_HeroPlusDMPU=HeroPlusDMPU;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroPlusDMPU.js"]={name:"HeroPlusDMPU",docgenInfo:HeroPlusDMPU.__docgenInfo,path:"app/component/library/Section/HeroPlusDMPU.js"});const HeroX2Plus4_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .section-body {
    display: flex;
    flex-direction: column;
  }
  .article-row {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .article {
    flex-direction: row;
    border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
    margin-bottom: 0;
    padding-bottom: 16px;
    .image-wrap {
      display: none;
    }
    .title {
      font-size: 16px;
      line-height: 1.25;
      @media ${Styles.c.tablet} {
        font-size: 19px;
        line-height: 1.21;
      }
      @media ${Styles.c.laptop} {
        font-size: 24px;
        line-height: 1.17;
      }
    }

    .media-video:before {
      display: none;
    }
    .media-video span {
      display: inline-block;
    }
    @media ${Styles.c.tablet} {
      flex-direction: column;
      width: calc(50% - 8px);
    }
  }

  .article:nth-child(1),
  .article:nth-child(2) {
    margin-bottom: 16px;
    padding-bottom: 0;
    .image-wrap {
      width: 100%;
      display: flex;
      max-height: 334px;
    }
    .highlight-block {
      display: block;
      height: calc(100% - 32px);
    }
    .media-video svg {
      fill: ${props=>props.theme.color.contrastLight};
    }
    .capsule {
      color: ${props=>props.theme.color.contrastLight};
      span > svg {
        fill: ${props=>props.theme.color.contrastLight};
      }
    }
    .content {
      position: absolute;
      bottom: 0;
      padding: 0 10px 0 20px;

      h2 {
        position: relative;
        z-index: 1;
        a {
          font-family: ${props=>props.theme.fontFamily.primaryFont};
          font-size: 24px;
          line-height: 1.17;
          color: ${props=>props.theme.color.contrastLight};
        }
      }
    }
    .media-video:before {
      display: block;
      bottom: 1.2em;
      left: -1em;
    }
    @media ${Styles.c.tablet} {
      .image-wrap {
        max-height: 243px;
      }
    }

    @media ${Styles.c.laptop} {
      .content h2 a {
        font-size: 28px;
        line-height: 1.21;
      }
      .image-wrap {
        max-height: 316px;
      }
      .media-video span {
        display: none;
      }
    }
  }

  @media ${Styles.c.tablet} {
    .article:nth-child(1) {
      margin-right: 16px;
    }
    align-items: flex-start;

    .section-body {
      flex-flow: wrap;
    }
  }
`,HeroX2Plus4=props=>{const{className:className,data:{labelLink:labelLink,labelText:labelText}}=props;return Object(jsx_runtime.jsxs)(HeroX2Plus4_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[471,349,280],hasImage:!0})]})};HeroX2Plus4.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},HeroX2Plus4.__docgenInfo={description:"",methods:[],displayName:"HeroX2Plus4",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_HeroX2Plus4=HeroX2Plus4;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/HeroX2Plus4.js"]={name:"HeroX2Plus4",docgenInfo:HeroX2Plus4.__docgenInfo,path:"app/component/library/Section/HeroX2Plus4.js"});const LiveNow_Wrapper=styled_components_browser_esm.default.div``,ComponentWrapper=styled_components_browser_esm.default.div`
  background: url(/img/live-now-bg.png);
  background-size: cover;
  display: block;
  padding: 10px;
  position: relative;
  margin: 16px 0;
`,LiveNow=styled_components_browser_esm.default.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: -25px;
  span {
    background: #000;
    color: #f29100;
    display: inline-block;
    font-family: Standard Sans, sans-serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.5px;
    padding: 6px 9px 4px;
    text-transform: uppercase;
  }
`,ArticleList=styled_components_browser_esm.default.ul`
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`,Article=styled_components_browser_esm.default.li`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 22px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`,LiveNow_ArticleTitle=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.contrastLight};
  &:hover {
    text-decoration: underline;
  }
`,LiveNow_CommentHighlight=props=>{const{data:{labelLink:labelLink,labelText:labelText,articles:articles,type:type}}=props;return Object(jsx_runtime.jsxs)(LiveNow_Wrapper,{"data-type":type,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(ComponentWrapper,{children:[Object(jsx_runtime.jsx)(LiveNow,{children:Object(jsx_runtime.jsx)("span",{children:"LIVE NOW!"})}),Object(jsx_runtime.jsx)(ArticleList,{children:articles&&articles.filter(article=>article).map((article,index)=>Object(jsx_runtime.jsx)(Article,{children:Object(jsx_runtime.jsx)(LiveNow_ArticleTitle,{href:article.path,children:article.titleShort||article.title})},index))})]})]})};LiveNow_CommentHighlight.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},LiveNow_CommentHighlight.__docgenInfo={description:"",methods:[],displayName:"CommentHighlight",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_LiveNow=LiveNow_CommentHighlight;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/LiveNow.js"]={name:"CommentHighlight",docgenInfo:LiveNow_CommentHighlight.__docgenInfo,path:"app/component/library/Section/LiveNow.js"});const More_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-direction: column;
  .more {
    display: flex;
    justify-content: center;
    font: ${props=>props.theme.fontWeight.normal} 20px
      ${props=>props.theme.fontFamily.secondaryFont};
    line-height: 26px;
    text-shadow: 0 0 3px hsla(0, 0%, 100%, 0.8);
    text-transform: capitalize;
    align-items: center;
    color: ${props=>props.theme.color.contrastDarker};
    &:after {
      content: ' ';
      width: 24px;
      height: 24px;
      background: transparent url(/img/icons/more-img.png) no-repeat;
      margin: 0 0 3px 12px;
    }
  }
`,More_WrapperInsider=styled_components_browser_esm.default.div`
  margin: 0 auto 40px;
  text-align: center;
  .more {
    display: inline-block;
    font-family: ${props=>props.theme.fontFamily.insiderSectra};
    font-size: 16px;
    color: ${props=>props.theme.color.secondary};
    border: 1px solid ${props=>props.theme.color.contrastDarker};
    padding: 10px 30px;
  }
`,MoreLink=styled_components_browser_esm.default.a``,More=Object(styled_components_browser_esm.default)(props=>{const{className:className,data:{linkTitle:linkTitle,linkUrl:linkUrl},componentStyle:componentStyle}=props,ThemedWrapper=Object(helper.b)(componentStyle,More_Wrapper,{insider:More_WrapperInsider});return Object(jsx_runtime.jsx)(ThemedWrapper,{className:className,children:Object(jsx_runtime.jsx)(MoreLink,{className:"more",href:linkUrl,children:linkTitle||"More"})})})``;More.propTypes={className:prop_types_default.a.string};var Section_More=More;const MostPopular=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items,length:"5",layout:"fixed-height",title:"TRENDING STORIES"})};MostPopular.propTypes={configuration:prop_types_default.a.object.isRequired};var Section_MostPopular=Object(styled_components_browser_esm.default)(MostPopular)`
  background: ${props=>props.theme.color.bgGrey};
  amp-list {
    height: 590px;
    @media ${Styles.c.tablet} {
      height: 200px;
    }
  }
  amp-img {
    width: 100%;
    margin-bottom: 12px;
    @media ${Styles.c.tablet} {
      width: 112px;
    }
    @media ${Styles.c.laptop} {
      width: 150px;
    }
  }
  ${Divider} {
    display: none;
  }
`;var Section_Title=Object(styled_components_browser_esm.default)(({className:className,componentStyle:componentStyle,data:{labelText:labelText,labelLink:labelLink}})=>Object(jsx_runtime.jsx)(components_ComponentTitle,{className:className,name:labelText,url:labelLink,titleStyle:componentStyle}))``,play=__webpack_require__(340);var icons_Play=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:play.a}}))`
  width: 40px;
  height: 40px;
`;const VideoShowcase_Wrapper=styled_components_browser_esm.default.div``,Columns=styled_components_browser_esm.default.div`
  display: flex;
  flex-flow: column;
  background: ${props=>props.theme.color.bkgLight};
  justify-content: center;
  margin-bottom: 16px;
  @media ${Styles.c.laptop} {
    flex-flow: row;
    flex-wrap: wrap;
  }
`,VideoCapsule=Object(styled_components_browser_esm.default)(article_ArticleCapsule)`
  flex-flow: row;
  margin: 12px;
  line-height: 1.1;
  width: 100%;

  @media ${Styles.c.laptop} {
    font-size: 20px;
    margin-bottom: 0;
  }
`,Player=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.contrastLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 20px 10px 0;
  flex-grow: 1;

  @media ${Styles.c.laptop} {
    margin-left: 12px;

    amp-brightcove {
      margin: 12px 0;
    }
  }
`,List=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12px;

  @media ${Styles.c.laptop} {
    width: 160px;
    flex-flow: column;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 24px;
    padding-top: 20px;
    background: ${props=>props.theme.color.contrastLight};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  .thumbnail {
    height: 100%;
    width: 100%;
    max-width: 48%;
    margin: 12px 0;
    position: relative;
    display: flex;
    flex-direction: column;

    .content {
      bottom: 3px;
      padding: 0 8px;
      position: absolute;

      .highlight-block {
        background: ${props=>props.theme.color.fontMedium};
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: calc(100% + 3px);
        top: -5px;
        left: -5px;
        margin: 8px 8px 0;
        mix-blend-mode: multiply;
      }
    }

    &.active {
      opacity: 0.5;
    }

    @media ${Styles.c.tablet} {
      max-width: calc(25% - 6px);
      margin-top: 0;
    }
    @media ${Styles.c.laptop} {
      max-width: none;
      margin: 0 0 20px 12px;

      .content {
        padding-left: 16px;

        .highlight-block {
          top: -10px;
          left: 0;
          height: calc(100% + 5px);
          width: 99%;
        }
      }
    }
  }
`,ListTitle=styled_components_browser_esm.default.h2`
  font-size: 11px;
  font-weight: 500;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.contrastLight};
  line-height: 1.05em;
  letter-spacing: 0.22px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: relative;
  margin: 0;

  @media ${Styles.c.tablet} {
    font-size: 14px;
  }
`,VideoImage=styled_components_browser_esm.default.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  a {
    color: ${props=>props.theme.color.contrastDarker};
    height: 100%;
  }
  amp-img {
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
  }
`,PlayIcon=Object(styled_components_browser_esm.default)(icons_Play)`
  position: absolute;
  left: 5px;
  top: 5px;
`,TempAdData_adPlacement="/71347885/_main_eveningstandard/es_hp",TempAdData_adTargeting=["shadow9hu7_safe_from_nestle_blacklist","shadow9hu7_safe_from_workdayh2","shadow9hu7_pos_loop_me","sainsburys_party_food","neg_omg_spotx","shadow9hu7_safe_from_jp_morgan","gs_entertain_celeb","lner_block_v2","shadow9hu7_pos_lner_block_v3","neg_skycurfew_mobkoi_custom","shadow9hu7_pos_o2_oct19","gs_sport_soccer","safe_aegis","gv_safe_adult","gv_safe_death_injury","gv_safe_download","gv_safe_drugs","gv_safe_military","gv_safe_obscenity","gv_safe_terrorism","pos_asda_15","pos_castroljulyvfive","pos_google","pos_santander_cycles","pos_ubs_tax_evasion","safe_from_emirates_crew_incident","safe_from_facebook_blacklist","shadow9hu7_pos_nestle_blacklist_v2","sainsburys_festive_feasts_christmas_meal","gs_entertain_movies","gs_entertain_perfarts","belvedere_negative","shadow9hu7_safe_from_belvedere_negative","shadow9hu7_pos_ysl","sainsburys_gifting_food_and_non_food_gifts","sainsburys_desserts","gs_health","shadow9hu7_safe_from_halifax_misc_blacklist","emirates_keyword","shell_mobkoi_block","fortnight_mobkoi_blocklist","female_wellbeing","shell_keyword_blocklist","facebook_block","shadow9hu7_safe_from_instagram-mobkoi","shadow9hu7_safe_from_mobkoi-celine","shadow9hu7_safe_from_mobkoi_facebook_keyword","gs_event_music_festival","coach_mobkoi_block","gv_crime","halifax_home_garden","es_retirement-conscious_nov16","lner_block"],TempData={type:"video",videos:[{title:"Ben Stokes reacts to winning Sports Personality of the Year",id:"6116040984001",width:"1920",height:"1080",poster:"https://static.standard.co.uk/s3fs-public/brightcove/6116040984001.jpg",provider:"brightcove",player:"ByNrnTERl",account:"1348423965"},{title:"Taylor Swift to headline Glastonbury",id:"6115995579001",width:"1920",height:"1080",poster:"https://static.standard.co.uk/s3fs-public/brightcove/6115995579001.jpg",provider:"brightcove",player:"ByNrnTERl",account:"1348423965"},{title:"Nicola Sturgeon hits back at Boris Johnson",id:"6115975857001",width:"1280",height:"720",poster:"https://static.standard.co.uk/s3fs-public/brightcove/6115975857001.jpg",provider:"brightcove",player:"ByNrnTERl",account:"1348423965"},{title:"Caroline Flint claims Emily Thornberry called a fellow Labour MP's constituents 'stupid'",id:"6115959591001",width:"1280",height:"720",poster:"https://static.standard.co.uk/s3fs-public/brightcove/6115959591001.jpg",provider:"brightcove",player:"ByNrnTERl",account:"1348423965"}],isViewable:!0};let VideoShowcase_index=0;const VideoShowcase=props=>{const{className:className,data:{labelLink:labelLink,labelText:labelText}}=props;VideoShowcase_index+=1;const ampScript={active:0};return TempData.videos.forEach((data,i)=>ampScript[i]={customParams:encodeURI(`videoID: ${data.id};gs_channels:${TempAdData_adTargeting};playertype:autoplay;`),videoId:data.id,title:data.title}),Object(jsx_runtime.jsxs)(VideoShowcase_Wrapper,{className:[className,"wrapper"].join(" "),children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsx)("amp-state",{id:"videos"+VideoShowcase_index,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(ampScript)}})}),Object(jsx_runtime.jsxs)(Columns,{children:[Object(jsx_runtime.jsx)(VideoCapsule,{sections:[{name:"Video",path:"/"}],sponsorName:null,children:article_ArticleIcon(!1,!0)}),Object(jsx_runtime.jsx)(Player,{id:"video_"+VideoShowcase_index,children:Object(jsx_runtime.jsx)("amp-brightcove",{id:TempData.videos[0].id,"data-account":"1348423965","data-player":"SkedJ1w7pZ","data-embed":"default","data-video-id":TempData.videos[0].id,"data-param-custom-params":ampScript[0].customParams,"data-param-custom-targeting":TempAdData_adPlacement,layout:"responsive",width:"16",height:"9","amp-bind-data-video-id":`videos${VideoShowcase_index}[videos${VideoShowcase_index}.active].videoId`})}),Object(jsx_runtime.jsx)(List,{children:TempData.videos.map((video,i)=>Object(jsx_runtime.jsxs)("div",{className:`thumbnail order-${i} ${0===i?"active":""}`,on:`tap:AMP.setState({videos${VideoShowcase_index}: {active: '${i}' }})`,tabIndex:"0",role:"button","amp-bind-class":`videos${VideoShowcase_index}.active == ${i} ? 'thumbnail order-${i} active' : 'thumbnail order-${i}'`,children:[Object(jsx_runtime.jsx)(VideoImage,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:video.poster+"?crop=160:90,smart&width=300",alt:video.title,width:"160",height:"90",layout:"responsive"})}),Object(jsx_runtime.jsx)(PlayIcon,{}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(ListTitle,{children:video.title.replace(/'/g,"'")}),Object(jsx_runtime.jsx)("div",{className:"highlight-block"})]})]},video.id))})]})]})};VideoShowcase.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},VideoShowcase.__docgenInfo={description:"",methods:[],displayName:"VideoShowcase",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_VideoShowcase=VideoShowcase;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/VideoShowcase.js"]={name:"VideoShowcase",docgenInfo:VideoShowcase.__docgenInfo,path:"app/component/library/Section/VideoShowcase.js"});const VIP_Wrapper=styled_components_browser_esm.default.div`
  .hero-article {
    width: 100%;
    .image-wrap {
      width: 100%;
      height: auto;
    }
    @media ${Styles.c.laptop} {
      height: 600px;
    }
  }
  .article-row {
    margin-bottom: 24px;
  }
  .position-right .content {
    right: 0;
  }
  .position-middle .content {
    @media ${Styles.c.tablet} {
      width: 97%;
    }
  }
`,VIP=props=>{const{data:{labelLink:labelLink,labelText:labelText,heroAlignment:heroAlignment,articles:articles}}=props;let heroClass="position-left";return"Right"===heroAlignment&&(heroClass="position-right"),"Middle"===heroAlignment&&(heroClass="position-middle"),Object(jsx_runtime.jsxs)(VIP_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),articles&&Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[968,640,280],heroAlignment:heroAlignment,className:heroClass,useHero:!0})]})};VIP.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any,className:prop_types_default.a.any},VIP.__docgenInfo={description:"",methods:[],displayName:"VIP",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""},className:{type:{name:"any"},required:!1,description:""}}};var Section_VIP=VIP;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/VIP.js"]={name:"VIP",docgenInfo:VIP.__docgenInfo,path:"app/component/library/Section/VIP.js"});var layout_Component=__webpack_require__(919),Component_default=__webpack_require__.n(layout_Component);const VoucherWrapper=styled_components_browser_esm.default.div`
  flex-basis: 100%;
  border-bottom: 1px solid ${props=>props.theme.color.fontCapsule};
  padding-bottom: 16px;
  @media ${Styles.c.tablet} {
    flex-basis: calc(25% - 12px);
  }
  @media ${Styles.c.laptop} {
    flex-basis: calc(25% - 16px);
  }
  @media ${Styles.c.maxTablet} {
    &:nth-child(-n + 2),
    &:nth-child(7),
    &:nth-child(8) {
      flex-basis: calc(50% - 8px);
    }
  }
  ${article_ArticleCapsule} {
    color: ${props=>props.theme.color.fontCapsule};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    padding: 8px 0;
    display: block;
    margin: 0;
  }
  .title {
    font-size: 16px;
    line-height: 20px;
    color: ${props=>props.theme.color.contrastDarker};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-weight: 500;
    @media ${Styles.c.laptop} {
      font-size: 19px;
      line-height: 23px;
    }
  }
`,ArticleLink=styled_components_browser_esm.default.a``,Content=styled_components_browser_esm.default.div``,VoucherArticles=({className:className,data:{url:url,best_offer_text:best_offer_text,logo:logo,sections:sections=[{name:"VOUCHER CODE",path:"/voucher-codes"}]}})=>Object(jsx_runtime.jsxs)(VoucherWrapper,{className:className,children:[Object(jsx_runtime.jsx)(ArticleLink,{href:url,children:Object(jsx_runtime.jsx)(Image_default.a,{src:logo,width:230,height:153,layout:"responsive"})}),Object(jsx_runtime.jsx)(article_ArticleCapsule,{sections:sections}),Object(jsx_runtime.jsx)(Content,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:url,title:best_offer_text})})]});VoucherArticles.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired,sectionTheme:prop_types_default.a.any};const Voucher_FlowWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  @media ${Styles.c.maxTablet} {
    > div:nth-child(-n + 2),
    > div:nth-child(7),
    > div:nth-child(8) {
      amp-img {
        display: block;
      }
    }
  }
  @media ${Styles.c.tablet} {
    > div:nth-child(-n + 4) {
      amp-img {
        display: block;
      }
    }
  }
  amp-img {
    display: none;
  }
`,Voucher=props=>{const{data:{vouchers:vouchers,labelText:labelText,labelLink:labelLink}}=props;return Object(jsx_runtime.jsxs)(Component_default.a,{...props,children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),Object(jsx_runtime.jsxs)(Voucher_FlowWrapper,{children:[vouchers&&vouchers.filter(voucher=>voucher).slice(0,6).map((voucher,index)=>Object(jsx_runtime.jsx)(VoucherArticles,{data:voucher},index)),vouchers&&vouchers.filter(voucher=>voucher).slice(6,12).map((voucher,index)=>Object(jsx_runtime.jsx)(VoucherArticles,{data:voucher},index))]})]})};Voucher.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,ad:prop_types_default.a.any,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any},Voucher.__docgenInfo={description:"",methods:[],displayName:"Voucher",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},ad:{type:{name:"any"},required:!1,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""}}};var Section_Voucher=Voucher;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/Voucher.js"]={name:"Voucher",docgenInfo:Voucher.__docgenInfo,path:"app/component/library/Section/Voucher.js"});const componentMap={Title:Section_Title,ArticleX2:Section_ArticleX2,ArticleX2PlusMPU:Section_ArticleX2MPU,ArticleX3:Section_ArticleX3,ArticleX3Insider:Section_ArticleX3Insider,ArticleX4:Section_ArticleX4,ArticleX4Insider:Section_ArticleX4Insider,ArticleX6PlusMPU:Section_ArticleX6MPU,ArticleX8PlusDMPU:Section_ArticleX8DMPU,ArticleX8:Section_ArticleX8,ArticleX12:Section_ArticleX12,HeadShotX3:Section_HeadShotX3,HeroArticle:Section_HeroArticle,HeroPlus2Articles:Section_HeroPlus2,HeroPlus3Articles:Section_HeroPlus3,HeroPlus4Articles:Section_HeroPlus4,HeroPlus2ArticlesPlusDMPU:Section_HeroPlus2DMPU,HeroX2Plus2ArticlesPlusDMPU:Section_Hero2Plus2DMPU,HeroPlus5ArticlesPlusDMPU:Section_HeroPlus5DMPU,HeroPlus6Articles:Section_HeroPlus6,HeroPlusDMPU:Section_HeroPlusDMPU,HeroX2Plus4Articles:Section_HeroX2Plus4,FeaturedArtistX1:Insider_FeaturedArtist,FeaturedGalleryX11:Insider_FeaturedGallery,Voucher:Section_Voucher,VideoShowcase:Section_VideoShowcase,CommentHighlight:Section_CommentHighlight,PortraitArticle:Insider_PortraitArticle,VIP:Section_VIP,LiveNowX4:Section_LiveNow,More:Section_More,MostPopular:Section_MostPopular,CarouselX12:Section_Carouselx12,ChartbeatFeed:Section_ChartbeatFeed},skipComponentHasNoArticle=({articles:articles})=>!articles||!articles.every(x=>!x),Content_Wrapper=styled_components_browser_esm.default.div`
  flex-grow: 1;
  width: 100%;
`,SectionContent=({insert:insert,components:components,publication:publication,theme:theme,configuration:configuration,section:section})=>{let adIndex=1,bannerIndex=1;return Object(jsx_runtime.jsxs)(Content_Wrapper,{className:"section-content",children:["author"===section.type&&Object(jsx_runtime.jsx)(Author_AuthorRow,{author:section.section}),"author"!==section.type&&insert,null==components?void 0:components.filter(skipComponentHasNoArticle).map((comp,i)=>{const Component=componentMap[comp.type],key=`${comp.type}${i}`;let thirdpartyShown=!1;switch(comp.type){case"Title":case"ArticleX2":case"ArticleX3":case"ArticleX3Insider":case"ArticleX4":case"ArticleX4Insider":case"ArticleX8":case"ArticleX12":case"HeadShotX3":case"HeroArticle":case"HeroPlus2Articles":case"HeroPlus3Articles":case"HeroPlus4Articles":case"HeroPlus6Articles":case"HeroX2Plus4Articles":case"FeaturedArtistX1":case"FeaturedGalleryX11":case"Voucher":case"VideoShowcase":case"CommentHighlight":case"PortraitArticle":case"VIP":case"LiveNowX4":case"More":case"MostPopular":case"CarouselX12":case"ChartbeatFeed":{const hasInsiderAd="Title"===comp.type&&"insider"===theme;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[hasInsiderAd&&Object(jsx_runtime.jsx)(MPU.a,{"force-bulk":1===bannerIndex,id:"banner_"+(bannerIndex++).toString().padStart(2,"0"),"size-key":"INSIDER_BANNER",ampSizes:"300x250,320x480,300x600"}),Object(jsx_runtime.jsx)(Component,{componentStyle:theme,data:comp,configuration:configuration},key)]})}case"HeroPlusDMPU":case"ArticleX2PlusMPU":case"HeroX2Plus2ArticlesPlusDMPU":case"HeroPlus5ArticlesPlusDMPU":case"ArticleX6PlusMPU":case"HeroPlus2ArticlesPlusDMPU":case"ArticleX8PlusDMPU":{var _comp$ad,_comp$ad$adSource,_comp$ad2;let mpuId="thirdparty_section";return"partner"!==(null===(_comp$ad=comp.ad)||void 0===_comp$ad||null===(_comp$ad$adSource=_comp$ad.adSource)||void 0===_comp$ad$adSource?void 0:_comp$ad$adSource.toLowerCase())||thirdpartyShown?"none"!==(null===(_comp$ad2=comp.ad)||void 0===_comp$ad2?void 0:_comp$ad2.adSource)&&(mpuId="mpu"+adIndex,adIndex++):thirdpartyShown=!0,Object(jsx_runtime.jsx)(Component,{publication:publication,mpuId:mpuId,data:comp,componentStyle:theme,configuration:configuration},key)}default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})]})};SectionContent.propTypes={components:prop_types_default.a.array,configuration:prop_types_default.a.object.isRequired,insert:prop_types_default.a.node,publication:prop_types_default.a.any.isRequired,theme:prop_types_default.a.string.isRequired,section:prop_types_default.a.object.isRequired};var Section_Content=SectionContent;const getSectionInsert=section=>{switch(section.type){case"author":return Object(jsx_runtime.jsx)(Author_AuthorRow,{author:section.section});default:return null}},Section=props=>{const{className:className,section:section,menu:menu,configuration:configuration,req:{path:path}}=props,domain=configuration.domain,adToggle=Object(ads.e)(section),currentSection=section.section,sectionTheme="/insider"===path?"insider":"default",ThemedColumnWrapper=Object(helper.b)(sectionTheme,ColumnWrapper,{insider:Insider_ColumnWrapper});return Object(jsx_runtime.jsxs)(Frame.a,{domain:domain,publication:section.publication,configuration:configuration,menu:menu,componentStyle:sectionTheme,className:className,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(page.a)({section:section},configuration.name)}),Object(jsx_runtime.jsx)("link",{rel:"alternate",href:configuration.baseUrl+("/"===currentSection.path?"/rss":currentSection.path+"/rss"),title:"RSS",type:"application/rss+xml"})]}),adToggle(ads.c)&&Object(jsx_runtime.jsx)(TopBanner.a,{width:"728",height:"90",cleanAmp:!1}),adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),adToggle(ads.a)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),Object(jsx_runtime.jsxs)(ThemedColumnWrapper,{children:[Object(jsx_runtime.jsx)(Section_Content,{components:section.components,insert:getSectionInsert(section),publication:section.publication,theme:sectionTheme,configuration:configuration,section:section}),section.sidebar&&Object(jsx_runtime.jsx)(Sidebar.a,{domain:domain,adToggle:adToggle,cleanAmp:!1,sidebar:section.sidebar})]})]})};Section.propTypes={className:prop_types_default.a.string,section:prop_types_default.a.object.isRequired,menu:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Section))`
  display: flex;
  justify-content: center;
`},2214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),classnames=__webpack_require__(49),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3),ConditionalFrame=__webpack_require__(341),NoIndex=__webpack_require__(342);const Wrapper=styled_components_browser_esm.default.section`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.contrastDarker};
  margin: 0 auto;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: none;
  &.active {
    display: block;
  }
  .hidden {
    display: none;
  }
`,MessageWrapper=styled_components_browser_esm.default.div`
  padding: 20px;
`,CommentList=styled_components_browser_esm.default.div`
  padding: 16px 0 0;
  &.active {
    display: block;
  }
`,CommentTemplate=styled_components_browser_esm.default.div`
  padding: 16px;
  position: relative;
  border-top: 1px solid ${props=>props.theme.color.formGrey};

  &:first-of-type {
    border-top: none;
  }
  &:last-of-type {
    border-bottom: 1px solid ${props=>props.theme.color.formGrey};
  }

  .link {
    color: ${props=>props.theme.color.primary};
    text-decoration: none;
  }

  .comment-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .date {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    color: ${props=>props.theme.color.fontMedium};
    display: block;
    margin: 0;
    font-size: 14px;
    line-height: 18px;
  }

  .ellipsis {
    display: inline-block;

    svg {
      fill: ${props=>props.theme.color.icons};
      width: 33px;
      height: auto;
      display: block;
    }
  }

  .edit {
    background: ${props=>props.theme.color.contrastLight};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    border: 1px solid ${props=>props.theme.color.formGrey};
    display: none;
    padding: 16px;
    position: absolute;
    top: 44px;
    right: 32px;
    z-index: 1;

    .view,
    .delete {
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 0;
      svg {
        height: 24px;
        width: 24px;
      }
    }
    .view {
      margin: 0 0 16px;
    }
  }
  .options.active .edit {
    display: flex;
    flex-direction: column;
  }

  .title,
  .message {
    margin: 0;
    padding: 0;
    color: ${props=>props.theme.color.fontMedium};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  .title {
    color: ${props=>props.theme.color.contrastDarker};
    margin: 0 0 4px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  @media ${Styles.c.mobileL} {
    padding: 16px 32px;
    .title,
    .message {
      font-size: 17px;
      line-height: 26px;
    }
    .title {
      font-size: 22px;
      line-height: 31px;
    }
  }
`,NextButtonWrapper=styled_components_browser_esm.default.div`
  margin: 20px 0 0;

  button {
    padding: 0 4px;
    color: ${props=>props.theme.color.primary};
    text-decoration: underline;

    &.current {
      text-decoration: none;
    }
  }
  &.active {
    display: block;
  }
  &.hidden {
    display: none;
  }
`,Comments=({mockTestData:mockTestData=null,className:className})=>Object(jsx_runtime.jsx)(Wrapper,{className:classnames_default()(className,"tab","comments"),children:mockTestData?Object(jsx_runtime.jsx)(CommentList,{className:"list",children:mockTestData.map(comment=>Object(jsx_runtime.jsx)(CommentTemplate,{className:"comment-template",dangerouslySetInnerHTML:{__html:comment}},comment.slice(0,1)))}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(MessageWrapper,{className:"loading",children:Object(jsx_runtime.jsx)("p",{children:"Loading comments..."})}),Object(jsx_runtime.jsxs)(CommentTemplate,{className:"comment-template hidden",children:[Object(jsx_runtime.jsxs)("div",{className:"comment-meta",children:[Object(jsx_runtime.jsx)("span",{className:"date"}),Object(jsx_runtime.jsxs)("div",{className:"options",children:[Object(jsx_runtime.jsx)("span",{className:"ellipsis",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>\n</svg>\n'}}),Object(jsx_runtime.jsxs)("div",{className:"edit",children:[Object(jsx_runtime.jsx)("a",{className:"link view",href:"#comments",target:"_blank",children:"View"}),Object(jsx_runtime.jsx)("button",{className:"delete",children:"Delete"})]})]})]}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("h4",{className:"title"})}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("p",{className:"message"})})]}),Object(jsx_runtime.jsx)(CommentList,{className:"list"}),Object(jsx_runtime.jsx)(NextButtonWrapper,{className:"hidden next-btns"})]})});Comments.propTypes={className:prop_types_default.a.string,mockTestData:prop_types_default.a.array},Comments.__docgenInfo={description:"",methods:[],displayName:"Comments",props:{mockTestData:{defaultValue:{value:"null",computed:!1},type:{name:"array"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};var ProfileComments=Object(RequestProvider.withRequest)(Comments);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileComments.js"]={name:"Comments",docgenInfo:Comments.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileComments.js"});var postCodePatterns=__webpack_require__(343),FormSelect=__webpack_require__(185),FormSubmit=__webpack_require__(161),FormTextField=__webpack_require__(77);const ProfileDetails_Wrapper=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.contrastDarker};
  max-width: 410px;
  margin: 38px 12px 0;

  @media ${Styles.c.mobileL} {
    margin: 38px auto 0;
  }
`,Fields=styled_components_browser_esm.default.div`
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,H3=styled_components_browser_esm.default.h3`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin: 16px 0;
`,P=styled_components_browser_esm.default.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin: 0 0 16px;
`,Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
  text-decoration: underline;
  font-weight: 500;
`,ProfileFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  button {
    margin: 16px 0 0;
    padding: 0 25px;
  }
  margin: 0;
  padding: 0;
`,FormTextFieldInline=Object(styled_components_browser_esm.default)(FormTextField.a)`
  display: inline-block;
  flex: 1 0 110px;
`,ProfileDetails=({profile:profile,className:className})=>{const{firstName:firstName,lastName:lastName,email:email,nickname:nickname,country:country,birthYear:birthYear,zip:zip=""}=profile,years=[],MostRecentYear=(new Date).getFullYear()-18,EarliestYear=MostRecentYear-90;for(let i=MostRecentYear;i>=EarliestYear;i--)years.push(Object(jsx_runtime.jsx)("option",{value:i,children:i},i));const countries=Object.keys(postCodePatterns.a).map((countryName,i)=>5===i?Object(jsx_runtime.jsx)("option",{disabled:!0,children:"----------"},"disabled"):Object(jsx_runtime.jsx)("option",{value:countryName,children:countryName},countryName));return Object(jsx_runtime.jsxs)(ProfileDetails_Wrapper,{className:classnames_default()(className,"tab","details"),children:[Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsxs)("form",{id:"profile-form",method:"post","action-xhr":"/internal-api/profile-update/submit","verify-xhr":"/internal-api/profile-update/verify","custom-validation-reporting":"as-you-go",children:[Object(jsx_runtime.jsxs)(Fields,{children:[Object(jsx_runtime.jsx)("input",{type:"hidden",name:"originalEmail",defaultValue:email}),Object(jsx_runtime.jsx)("input",{type:"hidden",name:"originalNickname",defaultValue:nickname}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"firstName",fieldId:"reg-form-firstname",displayName:"First name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,40}$",value:firstName,className:firstName&&"valid"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"lastName",fieldId:"reg-form-lastname",displayName:"Last name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,40}$",value:lastName}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"email",fieldId:"reg-form-email",displayName:"Email",requiredField:!0,pattern:"^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{2,63}){1,}))$",value:email,patternMismatchMsg:"Please enter a valid email",valueMissingMsg:"Please enter a valid email"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"birthYear",fieldId:"reg-form-birth-year",displayName:"Date of birth",fieldRequired:!0,options:years,helperText:"You must be at least 18 years old",defaultValue:birthYear}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"country",fieldId:"reg-form-country",displayName:"Country",fieldRequired:!0,options:countries,inlineFlexGrow:"2",defaultValue:country}),Object(jsx_runtime.jsx)(FormTextFieldInline,{fieldName:"zip",fieldId:"reg-form-postcode",displayName:"Post/Zipcode",value:zip})]}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)("div",{className:"form-error","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)(ProfileFormSubmit,{children:"Save information"})]})}),Object(jsx_runtime.jsxs)("aside",{children:[Object(jsx_runtime.jsx)(H3,{children:"Account deletion"}),Object(jsx_runtime.jsxs)(P,{children:["If you wish to delete your account please contact"," ",Object(jsx_runtime.jsx)(Link,{href:"https://eveningstandard.zendesk.com/hc/en-us/requests/new",target:"_blank",rel:"noreferrer",children:"Customer services"})," ","who will be able to process your request."]})]})]})};ProfileDetails.propTypes={className:prop_types_default.a.string,profile:prop_types_default.a.object.isRequired};var Profile_ProfileDetails=Object(styled_components_browser_esm.default)(ProfileDetails)``;const ProfileNav_Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.contrastDarker};
  width: 100%;
  box-sizing: border-box;
`,HeaderBanner=styled_components_browser_esm.default.div`
  padding: 0 0 45px 16px;

  @media ${Styles.c.mobileL} {
    padding: 0 0 45px 32px;
  }
  @media ${Styles.c.laptop} {
    padding: 0 0 45px;
  }
`,H1=styled_components_browser_esm.default.h1`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 16px 0;
`,ProfileNav_P=styled_components_browser_esm.default.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin: 0;
`,ProfileNav_Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
  text-decoration: underline;
  font-weight: 500;
`,ProfileMenu=styled_components_browser_esm.default.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
`,ProfileMenuTab=styled_components_browser_esm.default.li`
  width: 100%;
  max-width: 200px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  padding: 12px 4px;
  color: ${props=>props.theme.color.icons};
  border-bottom: 4px solid transparent;
  align-items: center;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${props=>props.theme.color.contrastDarker};
  }

  &.active {
    color: ${props=>props.theme.color.contrastDarker};
    border-bottom: 4px solid ${props=>props.theme.color.primary};
  }

  @media ${Styles.c.mobileL} {
    font-size: 19px;
    line-height: 23px;
    padding: 12px;
  }
`,ProfileNav=({profile:profile,activeTab:activeTab})=>{const{firstName:firstName}=profile;return Object(jsx_runtime.jsxs)(ProfileNav_Wrapper,{children:[Object(jsx_runtime.jsxs)(HeaderBanner,{children:[Object(jsx_runtime.jsxs)(H1,{children:["Welcome ",firstName]}),Object(jsx_runtime.jsxs)(ProfileNav_P,{children:["Want to log out? ",Object(jsx_runtime.jsx)(ProfileNav_Link,{href:"/user/logout",children:"Click here"})]})]}),Object(jsx_runtime.jsxs)(ProfileMenu,{children:[Object(jsx_runtime.jsx)(ProfileMenuTab,{className:classnames_default()("profile-link",{active:"newsletters"===activeTab}),"data-tab":"newsletters",children:"Newsletters"}),Object(jsx_runtime.jsx)(ProfileMenuTab,{className:classnames_default()("profile-link",{active:"details"===activeTab}),"data-tab":"details",children:"Edit profile"}),Object(jsx_runtime.jsx)(ProfileMenuTab,{className:classnames_default()("profile-link",{active:"password"===activeTab}),"data-tab":"password",children:"Change password"}),Object(jsx_runtime.jsx)(ProfileMenuTab,{className:classnames_default()("profile-link",{active:"comments"===activeTab}),"data-tab":"comments",children:"Comments"})]})]})};ProfileNav.propTypes={profile:prop_types_default.a.object.isRequired,activeTab:prop_types_default.a.string};var Profile_ProfileNav=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(ProfileNav))``;const newsletterOptions=[{key:"receiveHeadlinesNews",title:"ES News email",desc:"Headlines straight to your inbox Monday - Friday plus breaking news alerts.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/13/09/es-news-newsletter.png"},{key:"receiveTheWeekender",title:"The Weekender",desc:"Full of fantastic offers and ideas for the weekend (Thursdays).",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/13/09/es-weekender-news.png"},{key:"receiveGoingOutNews",title:"GO London",desc:"The best that London has to offer in your inbox every Thursday.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/03/09/go-london-snag.png"},{key:"receiveLifestyleNews",title:"Lifestyle",desc:"Our edit of the hottest news, trends and interviews across the world of lifestyle from fashion to travel.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/13/09/es-lifestyle-news.png"},{key:"receiveFootballNews",title:"Football",desc:"News, views and stats from the Premier League and beyond.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/13/09/es-football-news.png"},{key:"receiveFoodNews",title:"Evening Standard Food",desc:"The latest restaurant news and reviews, recipes and food trends from London and beyond.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/13/09/es-food-news.png"},{key:"receiveInsider",title:"Insider",desc:"The latest on the world of luxury, celebrity and society.",preview:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/11/07/11/es-insider-news.png"},{key:"receivePropertyNews",title:"Homes & Property",desc:"Latest London and UK property news, design trends and offers.",preview:"https://s3-eu-west-1.amazonaws.com/static-dev.standard.co.uk/s3fs-public/newsletter-signup-assets/draft/property-edm.eCxVv5JR.png"},{key:"receiveInteriors",title:"Homes & Property Interiors",desc:"Latest design trends and interiors news, home styling ideas, house tours, foodie news and insider tips you can use to transform your home.",preview:"https://static.standard.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2020/01/23/14/hp-interiors.png"},{key:"receiveThirdPartyOffers",title:"Evening Standard partners",desc:"Additional offers and information by email sent from Evening Standard on behalf its chosen partners.",preview:""},{key:"receiveESOffers",title:"Evening Standard marketing",desc:"Receive additional offers and information from Evening Standard.",preview:""}],ProfileNewsletterItem_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  font-family: ${props=>props.theme.fontFamily.primaryFont};

  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  padding: 16px;
  input {
    display: none;
  }
  &:first-of-type {
    border-top: 1px solid ${props=>props.theme.color.navGrey};
  }

  @media ${Styles.c.mobileL} {
    padding: 16px 32px;
  }
`,H4=styled_components_browser_esm.default.h4`
  max-width: 360px;
  color: ${props=>props.theme.color.contrastDarker};
  font-size: 22px;
  font-weight: 500;
  line-height: 31px;
  margin: 0;

  @media ${Styles.c.mobileL} {
    margin: 0 0 16px;
  }
`,Content=styled_components_browser_esm.default.div`
  display: flex;

  flex-direction: column;
  @media ${Styles.c.mobileL} {
    flex-direction: row;
  }
`,ProfileNewsletterItem_P=styled_components_browser_esm.default.p`
  max-width: 360px;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  margin: 0;
  padding: 0 16px 0 0;
`,Toggle=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0;

  @media ${Styles.c.mobileL} {
    justify-content: center;
    flex-grow: 1;
    margin: 0;
  }
`,Label=styled_components_browser_esm.default.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-align: left;
  width: 64px;
  height: 32px;
  flex-shrink: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    margin: 0;
    outline: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &:before {
    left: 1px;
    width: 64px;
    height: 32px;
    background-color: ${props=>props.theme.color.icons};
    border-radius: 26px;
  }

  &:after {
    left: 0;
    width: 32px;
    height: 32px;
    background-color: ${props=>props.theme.color.bgGrey};
    border-radius: 50%;
  }

  input:checked ~ &:after {
    transform: translate(110%, -50%);
  }
  input:checked ~ &:before {
    background-color: ${props=>props.theme.color.primary};
  }
`,Subscribed=styled_components_browser_esm.default.div`
  width: 80px;
  flex-shrink: 0;
  text-align: right;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${props=>props.theme.color.primary};

  span {
    display: none;
  }
  input:checked ~ & span {
    display: inline-block;
  }
`,ProfileNewsletterItem=({newsletter:newsletter})=>{const{title:title,key:key,desc:desc,checked:checked}=newsletter;return Object(jsx_runtime.jsxs)(ProfileNewsletterItem_Wrapper,{children:[Object(jsx_runtime.jsx)(H4,{children:title}),Object(jsx_runtime.jsxs)(Content,{children:[Object(jsx_runtime.jsx)(ProfileNewsletterItem_P,{children:desc}),Object(jsx_runtime.jsxs)(Toggle,{children:[Object(jsx_runtime.jsx)("input",{on:"change:profile-newsletters.submit",type:"checkbox",id:"checkbox-"+key,name:key,value:!0,defaultChecked:checked}),Object(jsx_runtime.jsx)(Label,{htmlFor:"checkbox-"+key}),Object(jsx_runtime.jsx)(Subscribed,{children:Object(jsx_runtime.jsx)("span",{children:"Subscribed"})})]})]})]})};ProfileNewsletterItem.propTypes={newsletter:prop_types_default.a.object.isRequired};var Profile_ProfileNewsletterItem=Object(styled_components_browser_esm.default)(ProfileNewsletterItem)``;const ProfileNewsletters_Wrapper=styled_components_browser_esm.default.section`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  margin: 0 auto;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: none;
  &.active {
    display: block;
  }
`,ProfileNewsletters_P=styled_components_browser_esm.default.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.47;
  padding: 32px 16px 16px;
  margin: 0;

  @media ${Styles.c.mobileL} {
    padding: 32px 32px 16px;
    font-size: 19px;
  }
`,ProfileNewsletters=({accInfo:accInfo,className:className})=>{const userNewsletters=accInfo.data;return Object(jsx_runtime.jsxs)(ProfileNewsletters_Wrapper,{"data-tab":"newsletters",className:classnames_default()(className,"tab","newsletters"),children:[Object(jsx_runtime.jsx)(ProfileNewsletters_P,{children:"Listed below are our range of email newsletters you can choose to receive. You can manage your preferences at any time by turning on or off the respective newsletter switch."}),Object(jsx_runtime.jsx)("form",{id:"profile-newsletters",method:"post","action-xhr":"/internal-api/profile-update/newsletter/submit",children:newsletterOptions.map(newsletter=>(newsletter.checked=userNewsletters[newsletter.key],Object(jsx_runtime.jsx)(Profile_ProfileNewsletterItem,{newsletter:newsletter},newsletter.key)))})]})};ProfileNewsletters.propTypes={accInfo:prop_types_default.a.object.isRequired,className:prop_types_default.a.string};var Profile_ProfileNewsletters=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(ProfileNewsletters))``;const ProfilePassword_Wrapper=styled_components_browser_esm.default.section`
  color: ${props=>props.theme.color.contrastDarker};
  max-width: 410px;
  margin: 38px 16px 0;

  @media ${Styles.c.mobileL} {
    margin: 38px auto 0;
  }
`,ProfilePassword_Fields=styled_components_browser_esm.default.div`
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,ProfilePassword_ProfileFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  button {
    margin: 0;
    padding: 0;
  }
  margin: 0;
  padding: 0;
`,ProfilePassword=({className:className})=>Object(jsx_runtime.jsx)(ProfilePassword_Wrapper,{className:classnames_default()(className,"tab","password"),children:Object(jsx_runtime.jsxs)("form",{id:"change-password-form",method:"post","action-xhr":"/internal-api/change-password/submit","verify-xhr":"/internal-api/change-password/verify","custom-validation-reporting":"interact-and-submit",children:[Object(jsx_runtime.jsxs)(ProfilePassword_Fields,{children:[Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"password",inputType:"password",showPassword:!0,fieldId:"profile-form-password",displayName:"Password",requiredField:!0,pattern:".{6,}"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"newPassword",inputType:"password",showPassword:!0,fieldId:"profile-form-new-password",displayName:"Choose new password",requiredField:!0,pattern:".{6,}"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"confirmPassword",inputType:"password",showPassword:!0,fieldId:"profile-form-confirm-password",displayName:"Re-enter new password",requiredField:!0,pattern:".{6,}"})]}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)("div",{className:"form-error","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})}),Object(jsx_runtime.jsx)(ProfilePassword_ProfileFormSubmit,{children:"Save changes"})]})});ProfilePassword.propTypes={className:prop_types_default.a.string};var Profile_ProfilePassword=Object(styled_components_browser_esm.default)(ProfilePassword)``;const Profile_Wrapper=styled_components_browser_esm.default.div`
  max-width: 800px;
  box-sizing: border-box;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.fontTitle};
  flex-wrap: wrap;
  form {
    width: 100%;
    margin: 0;
  }

  @media ${Styles.c.tablet} {
    flex-wrap: nowrap;
  }
`,TabContainer=styled_components_browser_esm.default.div`
  width: 100%;
  padding: 0;
  box-sizing: border-box;

  .tab {
    display: none;
  }
  .tab.active {
    display: flex;
    flex-direction: column;
  }
`,Profile=props=>{const{data:data,activeTab:activeTab="newsletters",mockTestData:mockTestData=null}=props,accInfo=data&&data.accInfo,profile=accInfo&&accInfo.profile;return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:"light-bkg",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Profile"})}),Object(jsx_runtime.jsxs)(Profile_Wrapper,{className:"profile-wrapper",children:[Object(jsx_runtime.jsx)(Profile_ProfileNav,{profile:profile,activeTab:activeTab}),Object(jsx_runtime.jsxs)(TabContainer,{children:[Object(jsx_runtime.jsx)(Profile_ProfileNewsletters,{className:classnames_default()("",{active:"newsletters"===activeTab}),accInfo:accInfo}),Object(jsx_runtime.jsx)(Profile_ProfileDetails,{profile:profile,className:classnames_default()("",{active:"details"===activeTab})}),Object(jsx_runtime.jsx)(Profile_ProfilePassword,{className:classnames_default()("",{active:"password"===activeTab})}),Object(jsx_runtime.jsx)(ProfileComments,{mockTestData:mockTestData,className:classnames_default()("",{active:"comments"===activeTab})})]})]})]})};Profile.propTypes={data:prop_types_default.a.object.isRequired,activeTab:prop_types_default.a.string,mockTestData:prop_types_default.a.array};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Profile))``},2217:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultSectionStory",(function(){return DefaultSectionStory})),__webpack_require__.d(__webpack_exports__,"InsiderSectionStory",(function(){return InsiderSectionStory})),__webpack_require__.d(__webpack_exports__,"EsBestSectionStory",(function(){return EsBestSectionStory})),__webpack_require__.d(__webpack_exports__,"AuthorSectionStory",(function(){return AuthorSectionStory}));var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(82);class MockSection_MockSection extends Mocker.a{setOverrides(props){Object(mockWithRequest.c)(),Object(mockWithRequest.i)(props.sectionOverrides),Object(mockWithRequest.g)(props.menuOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockSection_MockSection.propTypes={sectionOverrides:prop_types_default.a.object,menuOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockSection_MockSection.defaultProps={sectionOverrides:{},menuOverrides:{},reqOverrides:{},...Mocker.a.defaultProps};var components_MockSection=MockSection_MockSection,createImage=__webpack_require__(40),articleX2=__webpack_require__(328),articleX4=__webpack_require__(329),article=__webpack_require__(10),heroArticle=__webpack_require__(330),more=__webpack_require__(257),portraitArticle=articleOverrides=>({name:"Portrait Article",type:"PortraitArticle",labelText:null,labelLink:null,articles:[{...Object(article.a)({title:"Portrait article title will be here"}),...articleOverrides}]}),title=__webpack_require__(331);const SectionPage=__webpack_require__(2209).default;__webpack_exports__.default={title:"Section/Page",component:SectionPage};const DefaultSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});DefaultSectionStory.storyName="Full section page",DefaultSectionStory.parameters={amp:{isEnabled:!0}};const InsiderSectionStory=()=>{return Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/insider"},sectionOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"},components:[Object(heroArticle.a)(),Object(title.a)(),Object(articleX2.a)({isLiveBlog:!1}),Object(articleX4.a)(),Object(more.a)(),{name:"Featured Artist 1 Article",type:"FeaturedArtistX1",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"Featured Artist 1 Article"}),...articleOverrides}]},portraitArticle(),Object(more.a)()]},menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});var articleOverrides};InsiderSectionStory.storyName="Insider section",InsiderSectionStory.parameters={amp:{isEnabled:!0}};const EsBestSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/shopping/esbest"},sectionOverrides:{section:{name:"ES Best Home",path:"/shopping/esbest",sourcePath:"esbest"}},children:Object(jsx_runtime.jsx)(SectionPage,{})});EsBestSectionStory.storyName="EsBest section",EsBestSectionStory.parameters={amp:{isEnabled:!0}};const AuthorSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},sectionOverrides:{section:{name:"Lizzie test",id:"6223",remoteId:null,email:"elizabeth.hill@independent.co.uk",firstName:null,lastName:null,jobTitle:"Product Manager",imageUrl:Object(createImage.b)(0,150,0),twitter:"standardnews",facebook:"eveningstandard",location:"London",path:"/author/lizzie-test",description:"Lizzie is a Product Manager for ES & H&P",extra:{instagram:"evening.standard",snapchat:"eveningstandard",signatureImageUrl:null}},type:"author"},children:Object(jsx_runtime.jsx)(SectionPage,{})});AuthorSectionStory.storyName="Author section page",AuthorSectionStory.parameters={amp:{isEnabled:!0}},DefaultSectionStory.__docgenInfo={description:"",methods:[],displayName:"DefaultSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"DefaultSectionStory",docgenInfo:DefaultSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),InsiderSectionStory.__docgenInfo={description:"",methods:[],displayName:"InsiderSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"InsiderSectionStory",docgenInfo:InsiderSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),EsBestSectionStory.__docgenInfo={description:"",methods:[],displayName:"EsBestSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"EsBestSectionStory",docgenInfo:EsBestSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),AuthorSectionStory.__docgenInfo={description:"",methods:[],displayName:"AuthorSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"AuthorSectionStory",docgenInfo:AuthorSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"})},2218:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var ConditionalFrame=__webpack_require__(341),NoIndex=__webpack_require__(342),postCodePatterns=__webpack_require__(343),chevronDown=__webpack_require__(344);var FormSelect=__webpack_require__(185),FormSubmit=__webpack_require__(161),FormTextField=__webpack_require__(77);const Wrapper=styled_components_browser_esm.default.section`
  width: 100%;
  max-width: 480px;
  color: ${props=>props.theme.color.fontMedium};
  padding: 0 12px;
  box-sizing: border-box;
  position: relative;

  @media ${Styles.c.mobileL} {
    border: 1px solid ${props=>props.theme.color.formGrey};
    padding: 16px 34px;
  }
  @media ${Styles.c.tablet} {
    margin: 0 auto;

    &:before {
      position: absolute;
      content: '\\2022';
      width: 30px;
      height: 20px;
      top: -4px;
      left: calc(50% - 15px);
      color: ${props=>props.theme.color.primary};
      background: ${props=>props.theme.color.contrastLight};
      font-size: 60px;
      line-height: 20px;
    }
  }

  .form-error {
    font-size: 18px;
    color: ${props=>props.theme.color.formError};
    font-weight: 400;
  }

  a {
    text-decoration: underline;
    color: ${props=>props.theme.color.fontMedium};
    font-weight: 500;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    margin: 0 auto;
    text-align: left;
  }
`,Fields=styled_components_browser_esm.default.div`
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${Styles.c.mobileL} {
    margin: 0 auto 14px;
  }
`,TermsCheck=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0;
  text-align: left;
  border: 1px solid ${props=>props.theme.color.formGrey};
  padding: 12px 16px 16px;
  color: ${props=>props.theme.color.icons};
  font-size: 12px;
  line-height: 16px;

  input {
    position: relative;
    appearance: none;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin: 0 10px 0 0;
    border: 1px solid ${props=>props.theme.color.fontCapsule};
    & ~ .checked {
      display: none;
    }
    &:checked ~ .checked {
      display: inline-block;
      position: absolute;
      left: 4px;
      top: 5px;
    }
  }
`,ConsentDiv=styled_components_browser_esm.default.label`
  margin: 5px 0 0;
  display: flex;
  align-items: center;
  position: relative;
`,IconTick=styled_components_browser_esm.default.span`
  height: 13px;
  width: 18px;
  text-align: center;

  svg {
    stroke: ${props=>props.theme.color.fontCapsule};
    width: auto;
    height: 13px;
  }
`,Icon=styled_components_browser_esm.default.span`
  width: 12px;
  height: 10px;
  text-align: center;

  svg {
    fill: ${props=>props.theme.color.formGrey};
    width: 12px;
    height: 10px;
  }
`,FormTextFieldInline=Object(styled_components_browser_esm.default)(FormTextField.a)`
  display: inline-block;
  flex: 1 0 110px;
`,OptOutWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto 20px;
  text-align: left;
  border: 1px solid ${props=>props.theme.color.formGrey};
  border-top: none;
  color: ${props=>props.theme.color.icons};
  position: relative;
  font-size: 12px;
  line-height: 16px;
`,OptOutExpanding=styled_components_browser_esm.default.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`,OptOutOpen=styled_components_browser_esm.default.div`
  max-height: 0;
  overflow: hidden;
  background: ${props=>props.theme.color.divider};
  color: ${props=>props.theme.color.contrastDarker};
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;

  .open ~ & {
    max-height: none;
    padding: 16px;
  }
`,RegisterForm=props=>{let{req:{query:query},configuration:configuration}=props;const{newsletter:newsletter,regSourceSection:regSourceSection,regToken:regToken}=query,{newslettersConfig:newslettersConfig}=configuration,newsletterData=newslettersConfig&&newslettersConfig[newsletter];let regSourceMethod=query.regSourceMethod||"";const years=[],MostRecentYear=(new Date).getFullYear()-18,EarliestYear=MostRecentYear-90;for(let i=MostRecentYear;i>=EarliestYear;i--)years.push(Object(jsx_runtime.jsx)("option",{value:i,children:i},i));const countries=Object.keys(postCodePatterns.a).map((country,i)=>5===i?Object(jsx_runtime.jsx)("option",{disabled:!0,children:"----------"},"disabled"):Object(jsx_runtime.jsx)("option",{value:country,children:country},country)),titles={Ms:"f",Mr:"m",Mrs:"f",Miss:"f"},titleOptions=Object.keys(titles).map(title=>Object(jsx_runtime.jsx)("option",{value:titles[title],children:title},title));return Object(jsx_runtime.jsx)(Wrapper,{children:Object(jsx_runtime.jsxs)("form",{id:"reg-form",className:"reg-form validate",target:"_top",method:"post","action-xhr":regToken?"/internal-api/partial-registration/submit":"/internal-api/registration/submit","verify-xhr":regToken?"/internal-api/partial-registration/verify":"/internal-api/registration/verify","custom-validation-reporting":"interact-and-submit",children:[Object(jsx_runtime.jsxs)(Fields,{children:[newsletter&&Object(jsx_runtime.jsx)("input",{name:"newsletters",type:"hidden",value:newsletter,readOnly:!0}),regToken&&Object(jsx_runtime.jsx)("input",{name:"regToken",type:"hidden",value:regToken,readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"newsletters",type:"hidden",value:"terms",readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"regSourceSection",type:"hidden",value:regSourceSection||"",readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"regSourceMethod",type:"hidden",value:regSourceMethod,readOnly:!0}),Object(jsx_runtime.jsx)("input",{name:"grecaptcha_token",type:"hidden",defaultValue:"",className:"grecaptcha_token"}),newsletter&&Object(jsx_runtime.jsx)("input",{name:"regSourceNewsletter",type:"hidden",value:newsletterData.regSourceNewsletter,readOnly:!0}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"email",fieldId:"reg-form-email",displayName:"Email",requiredField:!0,pattern:"^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{0,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{2,63}){1,}))$",patternMismatchMsg:"Please enter a valid email",valueMissingMsg:"Please enter a valid email"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"gender",fieldId:"reg-form-gender",displayName:"Title",fieldRequired:!0,options:titleOptions,inlineFlexGrow:"0.3"}),Object(jsx_runtime.jsx)(FormTextFieldInline,{fieldName:"firstName",fieldId:"reg-form-firstname",displayName:"First name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,}$"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"lastName",fieldId:"reg-form-lastname",displayName:"Last name",requiredField:!0,pattern:"^[A-Za-zÀ-ú\\-' ]{1,}$"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"birthYear",fieldId:"reg-form-birth-year",displayName:"Year of birth",fieldRequired:!0,options:years,helperText:"You must be at least 18 years old"}),Object(jsx_runtime.jsx)(FormSelect.a,{fieldName:"country",fieldId:"reg-form-country",displayName:"Country",fieldRequired:!0,options:countries,inlineFlexGrow:"2"}),Object(jsx_runtime.jsx)(FormTextFieldInline,{fieldName:"zip",fieldId:"reg-form-postcode",displayName:"Post/Zipcode"}),Object(jsx_runtime.jsx)(FormTextField.a,{fieldName:"password",inputType:"text",showPassword:!0,autocomplete:"new-password",fieldId:"reg-form-password",displayName:"Password",requiredField:!0,pattern:".{6,}",helperText:"Must be at least 6 characters",patternMismatchMsg:"Below 6 characters"})]}),Object(jsx_runtime.jsxs)(TermsCheck,{children:["Evening Standard would like to keep you informed about updates and exclusive offers by email.",Object(jsx_runtime.jsxs)(ConsentDiv,{htmlFor:"form-receive-offer",children:[Object(jsx_runtime.jsx)("input",{name:"newsletters",id:"form-receive-offer",type:"checkbox",value:"receiveThirdPartyOffers"}),Object(jsx_runtime.jsx)(IconTick,{className:"checked",dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 51">\n    <path stroke-width="6" d="M5 29.8l17.5 16.7 42.6-42" fill="none" fill-rule="evenodd" stroke-linecap="square"/>\n  </svg>\n'}}),Object(jsx_runtime.jsx)("span",{children:"Yes, please keep me informed."})]})]}),Object(jsx_runtime.jsxs)(OptOutWrapper,{children:[Object(jsx_runtime.jsxs)(OptOutExpanding,{className:"expanding",children:["Opt-out-policy",Object(jsx_runtime.jsx)(Icon,{dangerouslySetInnerHTML:{__html:chevronDown.a}})]}),Object(jsx_runtime.jsx)(OptOutOpen,{children:"You can opt-out at any time by signing in to your account to manage your preferences. Each email has a link to unsubscribe."})]}),Object(jsx_runtime.jsx)("div",{"submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsx)("input",{type:"text",hidden:!0,defaultValue:"amp-template-userRef",className:"userref-response"})})}),Object(jsx_runtime.jsx)("div",{"submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsx)("span",{className:"form-error",children:"amp-template-#verifyErrors amp-template-message amp-template-/verifyErrors amp-template-^verifyErrors amp-template-message amp-template-/verifyErrors"})})}),Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("span",{className:"piano-form-error form-error"})}),Object(jsx_runtime.jsx)(FormSubmit.a,{className:"disabled-submit",children:"Create my account"}),Object(jsx_runtime.jsxs)("p",{children:["By clicking Create my account you confirm that your data has been entered correctly and you have read and agree to our"," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/service/terms-of-use-6902768.html",children:"Terms of use,"})," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/service/cookie-policy-7785319.html",children:"Cookie policy"})," ","and"," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/service/privacy-policy-6925316.html",children:"Privacy notice"}),"."]})]})})};RegisterForm.propTypes={className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired};var Register_RegisterForm=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(RegisterForm))``;const ConditionalWrapper=styled_components_browser_esm.default.div`
  .newsletter-benefits & {
    width: auto;
    flex: 1 auto;
    margin: 0 auto;
    max-width: 668px;
    @media ${Styles.c.laptop} {
      max-width: 1000px;
    }
    p {
      font-size: 14px;
      line-height: 1.3;
    }
  }
`,Register_Wrapper=styled_components_browser_esm.default.div`
  padding: ${props=>props.newsletter?"20px 30px":"50px 0"};
  display: ${props=>props.newsletter?"inline-block":"flex"};
  flex-direction: column;
  max-width: ${props=>props.newsletter?"auto":"480px;"};
  width: 100%;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.fontTitle};
  margin: 0 auto;
  box-sizing: border-box;
  text-align: ${props=>props.newsletter?"left":"center"};
  @media ${Styles.c.tablet} {
    margin: ${props=>props.newsletter?"0px 20px 0px 114px":"0 auto"};
    max-width: ${props=>props.newsletter?"465px":"480px;"};
  }
`,Span=styled_components_browser_esm.default.span`
  display: block;
  text-align: center;
  amp-img {
    display: inline-block;
  }
`,H1=styled_components_browser_esm.default.h1`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: ${props=>props.theme.fontWeight.normal};
  margin-top: 8px;
  font-size: 30px;
  text-align: center;
  width: 225px;
  margin: 40px auto 0;
  &:before {
    content: 'ES ';
    font-weight: ${props=>props.theme.fontWeight.bold};
    color: black;
  }
  @media ${Styles.c.laptop} {
    margin: 40px auto 50px auto;
    font-size: 48px;
  }
  &.news__benefits {
    color: ${props=>props.theme.color.standardBlue};
  }
  &.food__benefits {
    color: #f70a9a;
  }
  &.football__benefits {
    color: #00abe6;
  }
  &.lifestyle__benefits {
    color: #00abe6;
  }
  &.weekender__benefits {
    color: #822081;
    width: 400px;
  }
  &.insider__benefits {
    display: inline-block;
    width: 80px;
  }
`,H2=styled_components_browser_esm.default.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 10px auto 0;
  color: ${props=>props.theme.color.secondary};
`,P=styled_components_browser_esm.default.p`
  border: 1px solid ${props=>props.theme.color.formGrey};
  padding: 16px;
  margin: 16px 12px;
  font-size: 16px;
  font-weight: 400;

  @media ${Styles.c.mobileL} {
    border: none;
    padding: 0;
    margin: 16px 0;
  }
`,Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
  text-decoration: underline;
  font-weight: 500;
  white-space: nowrap;
`,Breadcrumb=styled_components_browser_esm.default.p`
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  top: 60px;
  left: 12px;

  a {
    color: ${props=>props.theme.color.primary};
  }

  @media ${Styles.c.mobileL} {
    top: 80px;
    left: 16px;
  }
  @media ${Styles.c.tablet} and ${Styles.c.maxLaptop} {
    top: 110px;
  }
`,Register_Icon=styled_components_browser_esm.default.span`
  height: 12px;
  width: 12px;
  display: inline-block;
  text-align: center;

  svg {
    fill: ${props=>props.theme.color.primary};
    width: auto;
    height: 12px;
  }
`,ImageWrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
  margin: 0 20px;
  @media ${Styles.c.laptop} {
    max-width: 267px;
    width: 100%;
    vertical-align: top;
    display: inline-block;
    margin: 0 114px 0 0;
  }
`,Register=props=>{var _query$icn;const{className:className,req:{query:query},configuration:configuration}=props,newsletter=null===(_query$icn=query.icn)||void 0===_query$icn?void 0:_query$icn.toLowerCase(),premium=Object.prototype.hasOwnProperty.call(query,"premium"),donation=Object.prototype.hasOwnProperty.call(query,"donations"),shortform=premium||donation,{newslettersConfig:newslettersConfig}=configuration,newsletterData=newsletter&&newslettersConfig&&newslettersConfig[newsletter],headerStyle=null==newsletter?void 0:newsletter.substring(4);return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:newsletter?"newsletter-benefits":"",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Register"})}),Object(jsx_runtime.jsxs)(ConditionalWrapper,{newsletter:newsletter,children:[Object(jsx_runtime.jsxs)(Span,{children:[newsletterData&&Object(jsx_runtime.jsx)(H1,{className:headerStyle,children:newsletterData.regTitle}),"_es_insider__benefits"===newsletter&&Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/insiderLogo.svg",layout:"fixed",width:"112px",height:"50px"})]}),Object(jsx_runtime.jsxs)(Register_Wrapper,{newsletter:newsletter,className:shortform?"short-form":"",children:[!newsletterData&&Object(jsx_runtime.jsxs)(Breadcrumb,{children:[Object(jsx_runtime.jsx)("a",{href:"/",children:"Home"})," > Register"]}),newsletterData&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:newsletterData.description})}),Object(jsx_runtime.jsx)("p",{children:newsletterData.label})]}),Object(jsx_runtime.jsx)(H2,{className:"reg-title",children:"Create your account"}),Object(jsx_runtime.jsxs)(P,{children:["Gain access to our newsletters, competitions, article commenting and other exclusive"," ",Object(jsx_runtime.jsxs)(Link,{href:"/service/why-register-9636948.html",children:["community benefits"," ",Object(jsx_runtime.jsx)(Register_Icon,{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n  </svg>\n'}})]})]}),Object(jsx_runtime.jsx)(Register_RegisterForm,{}),Object(jsx_runtime.jsxs)(P,{children:["Registered? ",Object(jsx_runtime.jsx)(Link,{href:"/login",children:"Log in here"})]})]}),newsletterData&&Object(jsx_runtime.jsx)(ImageWrapper,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:newsletterData.imageSrc,layout:"responsive",width:" 389",height:"1088"})})]})]})};Register.propTypes={className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Register))``},2219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProfilePageNewsletterStory",(function(){return ProfilePageNewsletterStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageDetailsStory",(function(){return ProfilePageDetailsStory})),__webpack_require__.d(__webpack_exports__,"ProfilePagePasswordStory",(function(){return ProfilePagePasswordStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageCommentsStory",(function(){return ProfilePageCommentsStory})),__webpack_require__.d(__webpack_exports__,"RegisterPageStory",(function(){return RegisterPageStory})),__webpack_require__.d(__webpack_exports__,"BenefitsPageStory",(function(){return BenefitsPageStory}));var jsx_runtime=__webpack_require__(0);var mockComment=()=>['\n  <div class="comment-meta">\n    <span class="date">1 hour ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <h4 class="title">\n      Brexit deal breaches will harm hope of trade deal, Brussels chief warns Boris Johnson\n    </h4>\n  </a>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <p class="message">\n      first test message\n    </p>\n  </a>\n','<div class="comment-meta">\n    <span class="date">4 days ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <h4 class="title">\n      Premier League confirm plan to finish season should government restrictions allow\n    </h4>\n  </a>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <p class="message">\n      second test message\n    </p>\n  </a>\n'];var mockUser=()=>({accInfo:{UID:"448c524f687b423d9b83ec06ec7727fe",data:{receiveFoodNews:!1,receiveLifestyleNews:!1,regSourceSection:"",receiveInteriors:!1,receiveTheWeekender:!1,terms:!0,receiveGoingOutNews:!1,receiveThirdPartyOffers:!0,receiveInsider:!1,receiveESOffers:!1,receiveHeadlinesNews:!0,receiveFootballNews:!1,receivePropertyNews:!1,regSourceMethod:""},profile:{firstName:"Tim",lastName:"Tester",nickname:"Commenter",age:18,birthYear:2001,country:"United Kingdom",email:"tim.test@Test.co.uk",gender:"m",zip:"sw18 2qr"}}}),MockStaticPage=__webpack_require__(141);const ProfilePage=__webpack_require__(2214).default,RegisterPage=__webpack_require__(2218).default;__webpack_exports__.default={title:"Profile/Page",component:ProfilePage};const ProfilePageNewsletterStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{data:mockUser()})});ProfilePageNewsletterStory.storyName="Profile newsletters";const ProfilePageDetailsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"details",data:mockUser()})});ProfilePageDetailsStory.storyName="Profile details";const ProfilePagePasswordStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"password",data:mockUser()})});ProfilePagePasswordStory.storyName="Profile password";const ProfilePageCommentsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"comments",mockTestData:mockComment(),data:mockUser()})});ProfilePageCommentsStory.storyName="Profile comments";const RegisterPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/Register",isService:!0},children:Object(jsx_runtime.jsx)(RegisterPage,{})});RegisterPageStory.storyName="Register Page";const BenefitsPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/register?icn=_ES_news__Benefits",isService:!0,query:{icn:"_ES_news__Benefits"}},children:Object(jsx_runtime.jsx)(RegisterPage,{})});BenefitsPageStory.storyName="Benefits Page",ProfilePageNewsletterStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageNewsletterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageNewsletterStory",docgenInfo:ProfilePageNewsletterStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageDetailsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageDetailsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageDetailsStory",docgenInfo:ProfilePageDetailsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePagePasswordStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePagePasswordStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePagePasswordStory",docgenInfo:ProfilePagePasswordStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageCommentsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageCommentsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageCommentsStory",docgenInfo:ProfilePageCommentsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),RegisterPageStory.__docgenInfo={description:"",methods:[],displayName:"RegisterPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"RegisterPageStory",docgenInfo:RegisterPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),BenefitsPageStory.__docgenInfo={description:"",methods:[],displayName:"BenefitsPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"BenefitsPageStory",docgenInfo:BenefitsPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"})},2221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticlePageStory",(function(){return ArticlePageStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory})),__webpack_require__.d(__webpack_exports__,"ArticleLinkEmbedStory",(function(){return ArticleLinkEmbedStory})),__webpack_require__.d(__webpack_exports__,"StaticArticleStory",(function(){return StaticArticleStory}));var jsx_runtime=__webpack_require__(0),MockArticle=__webpack_require__(53),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(82);class MockStaticArticle_MockStaticArticleContent extends Mocker.a{setOverrides(props){Object(mockWithRequest.a)(),Object(mockWithRequest.j)(props.articleOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockStaticArticle_MockStaticArticleContent.propTypes={setMockStaticArticleOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockStaticArticle_MockStaticArticleContent.defaultProps={setMockStaticArticleOverridess:{},reqOverrides:{},...Mocker.a.defaultProps};var MockStaticArticle=MockStaticArticle_MockStaticArticleContent,createImage=__webpack_require__(40);const ArticlePage=__webpack_require__(251).default;__webpack_exports__.default={title:"Article/Page",component:ArticlePage};const ArticlePageStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticlePageStory.storyName="Default article",ArticlePageStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(478).default()},children:Object(jsx_runtime.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article";const ArticleLinkEmbedStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"article-link",data:{markup:"",url:"https://www.standard.co.uk/",image:{url:Object(createImage.b)(0,0,150),width:null,height:null,type:"jpg"},title:"London sees more than 6,200 new coronavirus cases in a week",description:"Covid-19’s grip on London is growing with more than 6,200 new cases in a week, official figures reveal today. They show there were 6,273 cases in the seven days to October 4, up from 3,965 in the previous week. Redbridge, in East London, and Richmond, in South West London, have both now gone above the 100 new cases per 100,000 in a week, a level which community leaders have previously indicated is a possible trigger for further restrictions."},id:"unfk9h48"}]},children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticleLinkEmbedStory.storyName="Article with embedded article link";const StaticArticleStory=()=>Object(jsx_runtime.jsx)(MockStaticArticle,{reqOverrides:{path:"/service/contact-evening-standard-b2454.html"},articleOverrides:{section:{name:"Contact",path:"/service/contact-evening-standard-b2454.html",sourcePath:"Contact"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});StaticArticleStory.storyName="Static Article",ArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"ArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticlePageStory",docgenInfo:ArticlePageStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),ArticleLinkEmbedStory.__docgenInfo={description:"",methods:[],displayName:"ArticleLinkEmbedStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticleLinkEmbedStory",docgenInfo:ArticleLinkEmbedStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),StaticArticleStory.__docgenInfo={description:"",methods:[],displayName:"StaticArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"StaticArticleStory",docgenInfo:StaticArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"})},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var RequestProvider=__webpack_require__(8),compose=__webpack_require__(181),Ad=__webpack_require__(255),jsx_runtime=__webpack_require__(0),ads=__webpack_require__(332);const createAdUnitPath=(page,pageType,id,cleanAmp,thirdPartyAd)=>{const hierarchy=page.hierarchy?page.hierarchy.map(({path:path,sourcePath:sourcePath})=>(sourcePath||path).split("/").slice(-1)[0]):page.section.path.split("/").slice(1),{networkId:networkId,adUnitHomepage:adUnitHomepage,thirdPartyUnitHomepage:thirdPartyUnitHomepage}=ads.a[page.adConfig.data.publication.domain],ampAppend=cleanAmp?"_amp":"";return[networkId,`${thirdPartyAd?thirdPartyUnitHomepage:adUnitHomepage}${ampAppend}`,...["hp","main"].map((unit,i)=>hierarchy[i]?`${hierarchy[i]}${ampAppend}`:`${unit}${ampAppend}`).map(unit=>"es_"+unit),""+pageType,""+id.replace(/_\d+$/,"")]};__webpack_exports__.a=Object(compose.a)(RequestProvider.withRequest,MPU=>{const MPUWithAdUnitPathArr=({id:id,cleanAmp:cleanAmp,article:article,section:section,jsGlobals:jsGlobals,thirdPartyAd:thirdPartyAd=!1,...props})=>Object(jsx_runtime.jsx)(MPU,{id:id,cleanAmp:cleanAmp,adUnitPathArr:createAdUnitPath(article||section,jsGlobals.pageType,id,cleanAmp,thirdPartyAd),...props}),{adUnitPathArr:adUnitPathArr,...propTypes}=MPU.propTypes;return MPUWithAdUnitPathArr.propTypes=propTypes,MPUWithAdUnitPathArr})(Ad.default)},251:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleContent",(function(){return ArticleContent}));var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),utils_adData=__webpack_require__(899),page=__webpack_require__(900),themes=__webpack_require__(901),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),config=__webpack_require__(163),Styles=__webpack_require__(3),ads=__webpack_require__(91),services_article=__webpack_require__(100),util_page=__webpack_require__(334),TopBanner=__webpack_require__(335),WallPaper=__webpack_require__(215),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
  position: absolute;
  top: 0;
  left: 0;
`,ThirdParty=({id:id,sizes:sizes})=>Object(jsx_runtime.jsx)(Root,{children:Object(jsx_runtime.jsx)(MPU.a,{id:id,"force-bulk":!0,sizes:sizes})});ThirdParty.propTypes={id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string},ThirdParty.__docgenInfo={description:"",methods:[],displayName:"ThirdParty",props:{id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""}}};var Ads_ThirdParty=ThirdParty;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ThirdParty.js"]={name:"ThirdParty",docgenInfo:ThirdParty.__docgenInfo,path:"app/component/library/Article/Ads/ThirdParty.js"});const Trackonomics=({cleanAmp:cleanAmp,config:{customerId:customerId}})=>{const jsonObject={output:"https://cdn-magiclinks.trackonomics.net/client/static/amp_redirect/${customerId}.html?rand=${random}&source=SOURCE_URL&anchor_href=${href}&ref=DOCUMENT_REFERRER",vars:{customerId:customerId},attribute:{href:"(.*((amp\\.trackonomics\\.net)|(awin1\\.com)|(anrdoezrs\\.net)|(jdoqocy\\.com)|(tqlkg\\.com)|(tkqlhce\\.com)|(jdoqocy\\.com)|(kqzyfj\\.com)|(ftjcfx\\.com)|(lduhtrp\\.net)|(jqoqocy\\.com)|(Kqzfj\\.com)|(dpbolvw\\.net)|(\\/(c)\\/([0-9]+)\\/([0-9]+)\\/([0-9]+))|(2cw9\\.net)|(w6fg\\.net)|(7ymy\\.net)|(zz6n\\.net)|(a4v3ci\\.net)|(dttq\\.net)|(5oih\\.net)|(njih\\.net)|(rfvk\\.net)|(rt8x\\.net)|(43k8\\.net)|(7eer\\.net)|(uzvs\\.net)|(u44t\\.net)|(pvxt\\.net)|(vaz6fn\\.net)|(ojrq\\.net)|(mvvx\\.net)|(yx69dc\\.net)|(awb5\\.net)|(k7qtpo\\.net)|(8odi\\.net)|(mp5l\\.net)|(evyy\\.net)|(fx3vf7\\.net)|(2npn3e\\.net)|(i9pljp\\.net)|(l9vx\\.net)|(75r4\\.net)|(ulnv\\.net)|(74rjtv\\.net)|(trw6mw\\.net)|(xwrk\\.net)|(dgdrgu\\.net)|(tnu8\\.net)|(pq2o\\.net)|(snlv\\.net)|(yfb7\\.net)|(vzck\\.net)|(glg9ob\\.net)|(5f77\\.net)|(sk2bvq\\.net)|(iln8\\.net)|(7tiv\\.net)|(o93x\\.net)|(yfh6ag\\.net)|(zfrcsk\\.net)|(kwpkyy\\.net)|(6cqhdo\\.net)|(fziv\\.net)|(f9tmep\\.net)|(bwa8\\.net)|(74az\\.net)|(gnv2\\.net)|(uidg\\.net)|(i3zp\\.net)|(ssxmnr\\.net)|(l9yg\\.net)|(ixmz\\.net)|(fmtgqt\\.net)|(uydo\\.net)|(2lsp\\.net)|(oie8\\.net)|(7mh5\\.net)|(tmfhgn\\.net)|(ngi2ba\\.net)|(bs6l\\.net)|(fdf2\\.net)|(ruqo\\.net)|(bts6\\.net)|(yxku6p\\.net)|(xhuc\\.net)|(b9i7\\.net)|(vzffua\\.net)|(oteh\\.net)|(uskn\\.net)|(kxyi\\.net)|(hyyc7q\\.net)|(5ad6\\.net)|(n76h\\.net)|(quvl\\.net)|(qflm\\.net)|(8hwt\\.net)|(ig9i\\.net)|(d2lsjo\\.net)|(9quv\\.net)|(rao4\\.net)|(xikq\\.net)|(72mu89\\.net)|(xrx2ci\\.net)|(q4ew\\.net)|(j4ib\\.net)|(wrrv\\.net)|(uqzq\\.net)|(mw46\\.net)|(z6vo\\.net)|(g39l\\.net)|(2det\\.net)|(ibfwsl\\.net)|(jtlo\\.net)|(dfjeo3\\.net)|(wqi6\\.net)|(jgpt48\\.net)|(eccsr4\\.net)|(myi4\\.net)|(j4df\\.net)|(s7so\\.net)|(w2wxmz\\.net)|(64ud\\.net)|(6rfywi\\.net)|(rrmo\\.net)|(2m8f\\.net)|(fu4n\\.net)|(ryvx\\.net)|(mjs4\\.net)|(bn5x\\.net)|(7xde\\.net)|(5vju\\.net)|(7zd4df\\.net)|(xuok\\.net)|(o64jx9\\.net)|(am3t9s\\.net)|(w2t6\\.net)|(xr64\\.net)|(vayb\\.net)|(ygwk\\.net)|(ioym\\.net)|(dg6u\\.net)|(oyuv\\.net)|(otg8\\.net)|(8ujrgu\\.net)|(3qag\\.net)|(3f64ir\\.net)|(hrlo\\.net)|(fjbu\\.net)|(fqik\\.net)|(43wo\\.net)|(ncw6\\.net)|(9nz77o\\.net)|(xk3g\\.net)|(p7qb\\.net)|(mvqw\\.net)|(ntaf\\.net)|(iypa\\.net)|(rv5k\\.net)|(wjx7\\.net)|(5d3x\\.net)|(saq2\\.net)|(vegb\\.net)|(pxi6\\.net)|(b54k\\.net)|(njv3dp\\.net)|(nob9\\.net)|(t8puue\\.net)|(briy\\.net)|(bpu9\\.net)|(voq9\\.net)|(8aog\\.net)|(dodxnr\\.net)|(igs4ds\\.net)|(w9v5\\.net)|(exgl\\.net)|(3uu8\\.net)|(ei7w\\.net)|(vjggsg\\.net)|(79ic8e\\.net)|(6noy\\.net)|(zrjdwn\\.net)|(vdcy\\.net)|(8ne3\\.net)|(tk2x2c\\.net)|(2xc8\\.net)|(3tvl\\.net)|(tkjf\\.net)|(r69o\\.net)|(o5kg\\.net)|(74wq\\.net)|(zc5a\\.net)|(e8i7\\.net)|(bvrd\\.net)|(r2oa\\.net)|(uisv\\.net)|(uqhv\\.net)|(y8uw\\.net)|(o67m\\.net)|(ydow\\.net)|(mlvy\\.net)|(liln\\.net)|(ga3c\\.net)|(szey\\.net)|(2lka\\.net)|(opfm\\.net)|(rhq9ml\\.net)|(jvam\\.net)|(uqog\\.net)|(ork2\\.net)|(nwh3qn\\.net)|(znqymu\\.net)|(wsslc4\\.net)|(8kt6\\.net)|(9pctbx\\.net)|(7voo\\.net)|(ifmu\\.net)|(fzsu\\.net)|(9j4c\\.net)|(ow29pp\\.net)|(sgur\\.net)|(icjj\\.net)|(27exom\\.net)|(6ywx\\.net)|(upvt\\.net)|(4paxeq\\.net)|(ue8cqz\\.net)|(2su64p\\.net)|(wo8g\\.net)|(lvuv\\.net)|(36c4\\.net)|(vzew\\.net)|(hmqldu\\.net)|(m768hc\\.net)|(7no9\\.net)|(xuvt\\.net)|(pfm4\\.net)|(3lki\\.net)|(p73z\\.net)|(i3f2\\.net)|(7isk\\.net)|(7z5k\\.net)|(brvi\\.net)|(fi2z\\.net)|(znvt\\.net)|(tpeipe\\.net)|(imlz\\.net)|(audw\\.net)|(rqu9\\.net)|(hjef\\.net)|(ln72\\.net)|(a5fp\\.net)|(juo2\\.net)|(ir2by2\\.net)|(tf77py\\.net)|(eszb\\.net)|(2gib\\.net)|(bop8\\.net)|(nsji\\.net)|(mpye\\.net)|(hs9x\\.net)|(vocq\\.net)|(msafflnk\\.net)|(8zwg\\.net)|(58dp\\.net)|(973t\\.net)|(hu6f\\.net)|(5kd8\\.net)|(ue7a\\.net)|(i8h2\\.net)|(7orgeq\\.net)|(mp4l\\.net)|(6wfgdb\\.net)|(ayxtyv\\.net)|(h4km\\.net)|(mxu9\\.net)|(w9iork\\.net)|(ftcv\\.net)|(6eld\\.net)|(atkw\\.net)|(nkwcmr\\.net)|(vwz6\\.net)|(xovt\\.net)|(lkze4s\\.net)|(uxsi\\.net)|(wkq9\\.net)|(8utb\\.net)|(2j9x\\.net)|(kk2kau\\.net)|(iy7a\\.net)|(2xje\\.net)|(vqi8\\.net)|(keof\\.net)|(givvml\\.net)|(x57o\\.net)|(33qw\\.net)|(nbq93e\\.net)|(tlir\\.net)|(7st3op\\.net)|(l3km\\.net)|(pb6g\\.net)|(hj2i\\.net)|(8f6i\\.net)|(tql5\\.net)|(otpb\\.net)|(2gfm\\.net)|(whij\\.net)|(9zpg\\.net)|(8mz3uu\\.net)|(8hslpj\\.net)|(nrku7u\\.net)|(xg6r\\.net)|(jyae\\.net)|(o3ae\\.net)|(9vn7kv\\.net)|(rw9xb6\\.net)|(z5dw\\.net)|(wk5q\\.net)|(e9jo\\.net)|(r7kg\\.net)|(uikc\\.net)|(258o\\.net)|(eyip\\.net)|(c9ftyd\\.net)|(a9yw\\.net)|(krg4\\.net)|(et7l\\.net)|(wd2f\\.net)|(nvaz\\.net)|(ozkewk\\.net)|(5sfo\\.net)|(qumg\\.net)|(5l5h\\.net)|(cwv7\\.net)|(qbt4\\.net)|(ytuz\\.net)|(3xvk\\.net)|(zlyuo6\\.net)|(58mq\\.net)|(z27l\\.net)|(iqoc\\.net)|(eqjw\\.net)|(dbapeb\\.net)|(hgphc2\\.net)|(wnbi\\.net)|(te8rfv\\.net)|(qyiv3c\\.net)|(jv6k\\.net)|(9rwv\\.net)|(zgkv\\.net)|(p5ld\\.net)|(s4lle7\\.net)|(eqcm\\.net)|(wsktbf\\.net)|(7ema\\.net)|(2rch\\.net)|(y6mxrg\\.net)|(cmuw\\.net)|(jedg\\.net)|(wmempi\\.net)|(lmwjx3\\.net)|(zpn8dk\\.net)|(z724\\.net)|(zihf\\.net)|(i5md\\.net)|(yaub\\.net)|(syuh\\.net)|(htuy\\.net)|(pbj2\\.net)|(zvq6\\.net)|(rg35\\.net)|(8ibi\\.net)|(kbp968\\.net)|(5zd6\\.net)|(n72aat\\.net)|(aiy7\\.net)|(nnh2\\.net)|(z6rjha\\.net)|(7fdy\\.net)|(8bvm\\.net)|(qodh\\.net)|(jwpdsd\\.net)|(otegtm\\.net)|(2t23\\.net)|(i5em\\.net)|(xibx\\.net)|(xlwzq3\\.net)|(deg5\\.net)|(3anx\\.net)|(78cfvm\\.net)|(57ib\\.net)|(6dny\\.net)|(auhm\\.net)|(tm7566\\.net)|(tm7516\\.net)|(tm7569\\.net)|(tm7559\\.net)|(tm7560\\.net)|(tm7562\\.net)|(tm8534\\.net)|(lusg\\.net)|(bxvfun\\.net)|(8bga\\.net)|(22o6\\.net)|(ebml\\.net)|(9q66\\.net)|(i679\\.net)|(attfm2\\.net)|(ztk5\\.net)|(dubn\\.net)|(yuxg\\.net)|(2nm686\\.net)|(meqk\\.net)|(kd4a\\.net)|(e2rq\\.net)|(m43q4j\\.net)|(hblm3c\\.net)|(yvzx\\.net)|(vp6l\\.net)|(u97e\\.net)|(5rmr\\.net)|(qyov\\.net)|(yoxl\\.net)|(e54b\\.net)|(akum7z\\.net)|(hg7mxc\\.net)|(pdy5\\.net)|(aqpq\\.net)|(mivh\\.net)|(eqwh\\.net)|(vx83\\.net)|(vtdix3\\.net)|(xvtl\\.net)|(ulvh\\.net)|(cw3o\\.net)|(zvcr\\.net)|(eat8mo\\.net)|(ikkr9x\\.net)|(6x7g\\.net)|(bzi2vw\\.net)|(43a8\\.net)|(gfpv\\.net)|(sjv\\.io)|(pxf\\.io)|(affiliates\\.abebooks\\.com)|(go\\.corsair\\.com)|(go\\.gemvara\\.com)|(go\\.jewelry\\.com)|(go\\.web\\.plus\\.espn\\.com)|(goto\\.bodybuilding\\.com)|(goto\\.carters\\.com)|(goto\\.grocery\\.walmart\\.com)|(goto\\.kayosports\\.com\\.au)|(goto\\.target\\.com)|(goto\\.walmart\\.com)|(hpn\\.houzz\\.com)|(linkto\\.hrblock\\.com)|(partners\\.alamo\\.com)|(partners\\.enterprise\\.com)|(partners\\.hostgator\\.com)|(partners\\.hotwire\\.com)|(partners\\.nationalcar\\.com)|(refer\\.turo\\.com)|(tracking\\.maxcdn\\.com)|(tracking\\.stackpath\\.com)|(hpn\\.houzz\\.co\\.uk)|(partners\\.wantable\\.co)|(click\\.linksynergy\\.com)|(shareasale\\.com)|(shrsl\\.com)|(go\\.redirectingat\\.com)|(go\\.skimresources\\.com)|(pepperjamnetwork\\.com)|(pjtra\\.com\\/t\\/)|(gopjn\\.com\\/t\\/)|(pjatr\\.com\\/t\\/)|(pntra\\.com\\/t\\/)|(pntrs\\.com\\/t\\/)|(pntrac\\.com\\/t\\/)|(tradedoubler\\.com\\/click)|(pf\\.tradedoubler\\.com\\/pf\\/)|(track\\.webgains\\.com)|(prf\\.hn\\/click)|(avantlink\\.com\\/click)|(redirect\\.viglink\\.com)).*)"}};return cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("a",{href:"https://amp.trackonomics.net"}),Object(jsx_runtime.jsx)("amp-link-rewriter",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(jsonObject)}})})]}):Object(jsx_runtime.jsx)("script",{id:"funnel-relay-installer","data-property-id":"PROPERTY_ID","data-customer-id":customerId,src:`https://cdn-magiclinks.trackonomics.net/client/static/v2/${customerId}.js`,async:"async"})};Trackonomics.propTypes={cleanAmp:prop_types_default.a.bool,config:prop_types_default.a.object},Trackonomics.__docgenInfo={description:"",methods:[],displayName:"Trackonomics",props:{cleanAmp:{type:{name:"bool"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""}}};var Ads_Trackonomics=Trackonomics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Trackonomics.js"]={name:"Trackonomics",docgenInfo:Trackonomics.__docgenInfo,path:"app/component/library/Article/Ads/Trackonomics.js"});var ArticleMeta=__webpack_require__(484);var Article_ColumnWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 12px;
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: ${props=>props.isService?"0 213px 0 160px":"0 16px"};
    margin: 0 auto;
  }
`,react=__webpack_require__(4),utils_scoreboard=__webpack_require__(904),Ad=__webpack_require__(158),logo=__webpack_require__(348);const NewsletterSignup_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  width: 100%;
  border: 1px solid ${props=>props.theme.color.primary};
  margin-bottom: 20px;
`,InnerWrapper=styled_components_browser_esm.default.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    display: flex;
    flex-wrap: wrap;
  }

  .newsletter-email {
    flex-grow: 1;
    font-size: 14px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    font-weight: bolder;
    margin-right: 13px;
    height: 38px;
    padding: 0 8px;
    border: 1px solid ${props=>props.theme.color.primary};
    border-radius: 0;

    @media ${Styles.c.mobileL} {
      padding: 0 15px;
    }
  }

  .newsletter-submit {
    max-width: 160px;
    flex-grow: 1;
    cursor: pointer;
    border: 1px solid ${props=>props.theme.color.primary};
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.6px;
    text-align: center;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    background-color: ${props=>props.theme.color.primary};
    color: ${props=>props.theme.color.contrastLight};
    -webkit-appearance: none;
    border-radius: 0;
    border: 0;
    margin: 0;
  }

  .newsletter-message {
    padding-top: 8px;
    width: 100%;
    font-size: 14px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    line-height: 17px;
  }
`,Logo=styled_components_browser_esm.default.div`
  position: absolute;
  right: 20px;
  top: 27px;
  width: 95px;
  height: auto;

  svg {
    width: 100%;
    height: auto;
    fill: ${props=>props.theme.color.primary};
    stroke: none;
  }
`,Header=styled_components_browser_esm.default.h2`
  margin: 30px 0 15px;
  font-size: 23px;
  line-height: 30px;
  letter-spacing: -0.6px;
  text-align: left;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.darkContrast};
  @media ${Styles.c.mobileL} {
    margin: 10px 0;
    width: calc(100% - 95px);
  }
  span {
    color: ${props=>props.theme.color.primary};
    display: block;

    @media ${Styles.c.mobileL} {
      display: inline;
    }
  }

  .menu-newsletter & {
    margin: 30px 0 15px;
    span {
      display: block;
    }
  }
`,NewsletterSignup=({data:data={},isMenu:isMenu=!1,configuration:configuration})=>{const newsletterConfig=configuration.hubspot,path=data.section?data.section.path:data.path;if(!newsletterConfig||!path)return null;let formData={...newsletterConfig.default,title:configuration.name,page:data.type||"NL Page",portalId:newsletterConfig.portalId};return formData.section=data.section?data.section.name:data.sections?data.sections.slice(-1)[0].name:"Newsletter",Object.keys(newsletterConfig.customSections).forEach(section=>{path.includes(section)&&(formData={...formData,...newsletterConfig.customSections[section]})}),Object(jsx_runtime.jsx)(NewsletterSignup_Wrapper,{children:Object(jsx_runtime.jsxs)(InnerWrapper,{className:isMenu?"menu-newsletter":"",children:[Object(jsx_runtime.jsx)(Logo,{dangerouslySetInnerHTML:{__html:logo.a}}),Object(jsx_runtime.jsxs)(Header,{children:[Object(jsx_runtime.jsx)("span",{children:"Sign up"})," to our ",formData.newsletterName," newsletter"]}),Object(jsx_runtime.jsxs)("form",{id:isMenu?"menu-newsletter-signup-form":"newsletter-signup-form",method:"POST","action-xhr":"/internal-api/newsletter",target:"_top",children:[Object(jsx_runtime.jsx)("input",{name:"email",type:"email","aria-label":"Email",className:"newsletter-email",placeholder:"Enter your email",required:!0}),Object(jsx_runtime.jsx)("input",{name:"opt_in",type:"hidden",readOnly:!0,value:formData.list}),Object(jsx_runtime.jsx)("input",{name:"source",type:"hidden",readOnly:!0,value:`${formData.title} in ${formData.page}`}),Object(jsx_runtime.jsx)("input",{name:"source_url",type:"hidden",readOnly:!0,value:path}),Object(jsx_runtime.jsx)("input",{name:"source_website_category",type:"hidden",readOnly:!0,value:formData.section}),Object(jsx_runtime.jsx)("input",{name:"site_id",type:"hidden",readOnly:!0,value:formData.portalId}),Object(jsx_runtime.jsx)("input",{name:"form_id",type:"hidden",readOnly:!0,value:formData.guid}),Object(jsx_runtime.jsx)("input",{type:"submit",value:"Sign up",className:"newsletter-submit"}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:`Thanks,  {{email}} has been added to our newsletter.\n            If this is the first time you have subscribed to emails from JPIMedia Ltd, the publishers of ${formData.title}, please check your inbox to verify your email address.`})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Sorry, there seem to be some issues. Please try again later."})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message",submitting:"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Submitting..."})})]})]})})};NewsletterSignup.propTypes={domain:prop_types_default.a.string,data:prop_types_default.a.object,isMenu:prop_types_default.a.bool,configuration:prop_types_default.a.object.isRequired},NewsletterSignup.__docgenInfo={description:"",methods:[],displayName:"NewsletterSignup",props:{data:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},isMenu:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},domain:{type:{name:"string"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var library_NewsletterSignup=NewsletterSignup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NewsletterSignup.js"]={name:"NewsletterSignup",docgenInfo:NewsletterSignup.__docgenInfo,path:"app/component/library/NewsletterSignup.js"});const Apester=({token:token})=>token?Object(jsx_runtime.jsx)("interaction",{className:"apester-media","data-token":token}):null;Apester.propTypes={token:prop_types_default.a.string},Apester.__docgenInfo={description:"",methods:[],displayName:"Apester",props:{token:{type:{name:"string"},required:!1,description:""}}};var Ads_Apester=Apester;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Apester.js"]={name:"Apester",docgenInfo:Apester.__docgenInfo,path:"app/component/library/Article/Ads/Apester.js"});const ArticlePrompt=()=>Object(jsx_runtime.jsx)("div",{id:"article-im-prompt"},"article-im-prompt");ArticlePrompt.__docgenInfo={description:"",methods:[],displayName:"ArticlePrompt"};var Ads_ArticlePrompt=ArticlePrompt;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ArticlePrompt.js"]={name:"ArticlePrompt",docgenInfo:ArticlePrompt.__docgenInfo,path:"app/component/library/Article/Ads/ArticlePrompt.js"});var Common=__webpack_require__(338);const AmpIframe=(props,{children:children})=>Object(jsx_runtime.jsx)("amp-iframe",{...props,children:children});AmpIframe.propTypes={...Common.a,src:prop_types_default.a.string.isRequired,srcdoc:prop_types_default.a.any,frameborder:prop_types_default.a.any,allowfullscreen:prop_types_default.a.any,allowpaymentrequest:prop_types_default.a.any,allowtransparency:prop_types_default.a.any,referrerpolicy:prop_types_default.a.any,sandbox:prop_types_default.a.string},AmpIframe.__docgenInfo={description:"",methods:[],displayName:"AmpIframe",props:{src:{type:{name:"string"},required:!0,description:""},srcdoc:{type:{name:"any"},required:!1,description:""},frameborder:{type:{name:"any"},required:!1,description:""},allowfullscreen:{type:{name:"any"},required:!1,description:""},allowpaymentrequest:{type:{name:"any"},required:!1,description:""},allowtransparency:{type:{name:"any"},required:!1,description:""},referrerpolicy:{type:{name:"any"},required:!1,description:""},sandbox:{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Iframe=AmpIframe;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Iframe.js"]={name:"AmpIframe",docgenInfo:AmpIframe.__docgenInfo,path:"app/component/library/AMP/Iframe.js"});const DefaultWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.maxMobileL} {
    display: none;
  }
`,MobileWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.mobileL} {
    display: none;
  }
`,AMPIframe=({height:height})=>Object(jsx_runtime.jsx)(Iframe,{sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",layout:"fixed-height",height:height,src:"https://fresh8.co/5d555b6b8e33de001c41c185/adtag?isAdTag=true",frameborder:"0",children:Object(jsx_runtime.jsx)("amp-img",{layout:"fill",src:"/img/1x1.png",placeholder:!0})});AMPIframe.propTypes={height:prop_types_default.a.number.isRequired};const Fresh8=()=>Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(DefaultWrapper,{children:Object(jsx_runtime.jsx)(AMPIframe,{height:118})}),Object(jsx_runtime.jsx)(MobileWrapper,{children:Object(jsx_runtime.jsx)(AMPIframe,{height:150})})]});Fresh8.__docgenInfo={description:"",methods:[],displayName:"Fresh8"};var Ads_Fresh8=Fresh8;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Fresh8.js"]={name:"Fresh8",docgenInfo:Fresh8.__docgenInfo,path:"app/component/library/Article/Ads/Fresh8.js"});const TokenProviderWithRequest=Object(RequestProvider.withRequest)(({children:children})=>Object(react.cloneElement)(children,{token:config.a.getConfig().apester.token}));const Container=styled_components_browser_esm.default.div`
  max-width: 100%;
  display: flex;
  position: relative;
  margin: 8px 40px 20px 0;
  padding-top: 25px;
  background-color: #ececec;
  float: left;

  &:before {
    content: 'Advertisement';
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 25px;
    color: #9b9b9b;
    font-size: 12px;
    font-family: ${props=>props.theme.fontFamily.primaryFont};
  }

  div.teads & {
    margin: 0;
    padding: 0;
    background-color: transparent;
    float: none;
    display: block;

    &:before {
      content: '';
    }
  }

  @media (max-width: 530px) {
    display: flex;
    justify-content: center;
    float: none;
    max-width: 300px;
    margin: 0 auto;
  }
`,MarkupAd=({...props})=>Object(jsx_runtime.jsx)(Container,{children:Object(jsx_runtime.jsx)(MPU.a,{...props})});MarkupAd.propTypes={...MPU.a.propTypes},MarkupAd.__docgenInfo={description:"",methods:[],displayName:"MarkupAd",composes:["../../Ads/MPU"]};var Ads_MarkupAd=MarkupAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/MarkupAd.js"]={name:"MarkupAd",docgenInfo:MarkupAd.__docgenInfo,path:"app/component/library/Article/Ads/MarkupAd.js"});const PartnerAds_Container=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 16px;

  > div {
    margin: 8px;
  }
`,PartnerAds=props=>Object(jsx_runtime.jsxs)(PartnerAds_Container,{...props,children:[Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_1",width:245,height:210,"size-key":"PARTNERADS","force-bulk":!0}),Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_2","size-key":"PARTNERADS",width:245,height:210,"force-bulk":!0})]});PartnerAds.__docgenInfo={description:"",methods:[],displayName:"PartnerAds"};var Ads_PartnerAds=PartnerAds;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/PartnerAds.js"]={name:"PartnerAds",docgenInfo:PartnerAds.__docgenInfo,path:"app/component/library/Article/Ads/PartnerAds.js"});var Taboola=__webpack_require__(114);const TaboolaBelowArticle1=({cleanAmp:cleanAmp,jsGlobals:jsGlobals})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-1",width:101,height:100,heights:["(min-width:1514px) 74%","(min-width:1096px) 81%","(min-width:801px) 90%","(min-width:581px) 102%","(min-width:420px) 119%","(min-width:390px) 361%","389%"],placement:"Below Article Thumbnails - AMP",mode:jsGlobals.taboola.ampBelowArticleMode||"thumbnails-e1"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-1",className:"taboola-below-article"});TaboolaBelowArticle1.propTypes={cleanAmp:prop_types_default.a.bool,jsGlobals:prop_types_default.a.object.isRequired},TaboolaBelowArticle1.defaultProps={cleanAmp:!1},TaboolaBelowArticle1.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle1",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""}}};var Ads_TaboolaBelowArticle1=Object(RequestProvider.withRequest)(TaboolaBelowArticle1);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle1.js"]={name:"TaboolaBelowArticle1",docgenInfo:TaboolaBelowArticle1.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle1.js"});const TaboolaBelowArticle2=({cleanAmp:cleanAmp})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-2",width:100,height:100,heights:["(min-width:1645px) 72%","(min-width:1185px) 78%","(min-width:836px) 86%","(min-width:590px) 98%","(min-width:420px) 115%","(min-width:400px) 348%","373%"],placement:"Below Article Thumbnails - AMP Below",mode:"thumbnails-e2"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-2",className:"taboola-below-article"});TaboolaBelowArticle2.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaBelowArticle2.defaultProps={cleanAmp:!1},TaboolaBelowArticle2.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle2",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaBelowArticle2=Object(RequestProvider.withRequest)(TaboolaBelowArticle2);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle2.js"]={name:"TaboolaBelowArticle2",docgenInfo:TaboolaBelowArticle2.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle2.js"});const TaboolaWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.laptop} {
    display: none;
  }
`,TaboolaDiv=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)("div",{id:"taboola-carousel-thumbnails"}))``,TaboolaInline=({cleanAmp:cleanAmp})=>Object(jsx_runtime.jsx)(TaboolaWrapper,{children:cleanAmp?Object(jsx_runtime.jsx)(Taboola.c,{id:"taboola-carousel-thumbnails",width:300,height:300,media:""+Styles.c.maxLaptop,mode:"alternating-thumbnails-d1",placement:"Carousel Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaDiv,{id:"taboola-carousel-thumbnails"})});TaboolaInline.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaInline.defaultProps={cleanAmp:!1},TaboolaInline.__docgenInfo={description:"",methods:[],displayName:"TaboolaInline",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaInline=Object(RequestProvider.withRequest)(TaboolaInline);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaInline.js"]={name:"TaboolaInline",docgenInfo:TaboolaInline.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaInline.js"});var classes=__webpack_require__(159),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),helper=__webpack_require__(62);const ImageWrapper=styled_components_browser_esm.default.figure`
  clear: both;
  margin: 0;
  position: relative;
  & img {
    object-fit: cover;
  }
`,ImageWrapperLeft=Object(styled_components_browser_esm.default)(ImageWrapper)`
  @media ${Styles.c.tablet} {
    float: left;
    margin-right: 16px;
    width: 269px;
  }
  @media ${Styles.c.laptop} {
    width: 312px;
  }
`,ImageWrapperRight=Object(styled_components_browser_esm.default)(ImageWrapperLeft)`
  @media ${Styles.c.tablet} {
    float: right;
    margin-left: 16px;
    margin-right: 0;
  }
`,Caption=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.fontMedium};
  font-size: ${props=>props.theme.fontSize.list};
  font-weight: normal;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding: 8px 0;
  line-height: 18px;
  header & {
    font-size: 12px;
    padding: 8px 0 0 12px;
    line-height: normal;
    @media ${Styles.c.laptop} {
      position: absolute;
      font-size: 14px;
      padding: 8px;
      bottom: 0;
      line-height: 21px;
      color: ${props=>props.theme.color.contrastLight};
    }
  }
`,CaptionText=styled_components_browser_esm.default.span`
  margin-right: 0.2em;
`,Copyright=styled_components_browser_esm.default.span`
  font-style: italic;
  header & {
    font-style: normal;
  }
`,CaptionContrast=Object(styled_components_browser_esm.default)(Caption)`
  color: ${props=>props.theme.color.contrastLight};
`,ArticleImage=({data:data,srcSet:srcSet,theme:theme,children:children,isHero:isHero})=>{if(!data||!data.url)return null;const{align:align,url:url,caption:caption,copyright:copyright,width:width,height:height}=data,captionText=isHero?"/ "+copyright:"("+copyright+")",CaptionDiv=Object(helper.a)(theme,CaptionContrast,Caption);let StyledWrapper=ImageWrapper;return"left"===align&&(StyledWrapper=ImageWrapperLeft),"right"===align&&(StyledWrapper=ImageWrapperRight),Object(jsx_runtime.jsxs)(StyledWrapper,{children:[Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=968&h=645",alt:caption,height:height||645,width:width||968,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"}),children&&children,(caption||copyright)&&Object(jsx_runtime.jsxs)(CaptionDiv,{children:[caption&&Object(jsx_runtime.jsx)(CaptionText,{children:caption}),copyright&&Object(jsx_runtime.jsxs)(Copyright,{className:"copyright",children:[" ",captionText," "]})]})]})};ArticleImage.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,children:prop_types_default.a.any,isHero:prop_types_default.a.bool,theme:prop_types_default.a.string},ArticleImage.defaultProps={theme:"default",children:null},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{theme:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""}}};var Embeds_Image=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Image.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Article/Embeds/Image.js"});var striptags=__webpack_require__(905),striptags_default=__webpack_require__.n(striptags),Brightcove=__webpack_require__(906),Brightcove_default=__webpack_require__.n(Brightcove);const Brightcove_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,BrightcoveEmbed=props=>{const{data:data,theme:theme}=props;return Object(jsx_runtime.jsx)(Brightcove_Wrapper,{children:Object(jsx_runtime.jsx)(Brightcove_default.a,{data:data,"data-param-brand-colour":theme.color.primary})})};BrightcoveEmbed.propTypes={data:prop_types_default.a.any.isRequired,theme:prop_types_default.a.object.isRequired},BrightcoveEmbed.__docgenInfo={description:"",methods:[],displayName:"BrightcoveEmbed",props:{data:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"object"},required:!0,description:""}}};var Embeds_Brightcove=Object(styled_components_browser_esm.withTheme)(BrightcoveEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Brightcove.js"]={name:"BrightcoveEmbed",docgenInfo:BrightcoveEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Brightcove.js"});var Dugout=__webpack_require__(907),Dugout_default=__webpack_require__.n(Dugout);const VideoCaption_Caption=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,children:children}))`
  color: ${props=>props.theme.color.indyBaseLight1};
  background: ${props=>props.theme.color.indyOffWhite};
  font-size: ${props=>props.theme.fontSize.list};
  font-weight: ${props=>props.theme.fontWeight.thin};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding: 6px 8px;
`;Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(VideoCaption_Caption,{className:props.className,...props,children:props.children}))`
  color: ${props=>props.theme.color.contrastLight};
  background: transparent;
  padding: 0;
  margin: 6px 12px;
  @media ${Styles.c.laptop} {
    margin-left: 0;
    margin-right: 0;
  }
`;VideoCaption_Caption.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var VideoCaption=VideoCaption_Caption;const DugoutPlayer_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`,DugoutPlayerEmbed=({data:data})=>Object(jsx_runtime.jsxs)(DugoutPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Dugout_default.a,{data:data}),data.localCaption&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.localCaption})]});DugoutPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired},DugoutPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"DugoutPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var DugoutPlayer=DugoutPlayerEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/DugoutPlayer.js"]={name:"DugoutPlayerEmbed",docgenInfo:DugoutPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/DugoutPlayer.js"});var classnames=__webpack_require__(49),classnames_default=__webpack_require__.n(classnames),uniqueId=__webpack_require__(908),uniqueId_default=__webpack_require__.n(uniqueId),withScript=__webpack_require__(162);var icons_Gallery=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#EC1A2E"><path d="M9 9c0-.552.448-1 1.001-1 .553 0 .999.448.999 1s-.446 1-.999 1C9.448 10 9 9.552 9 9zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM24 4v14H4v-3H0V0h21v4h3zM4 13V4h15V2H2v11h2zm18-7H6v10h16V6z" fill-rule="nonzero"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`,Carousel=__webpack_require__(160),Carousel_default=__webpack_require__.n(Carousel),Lightbox=__webpack_require__(909),Lightbox_default=__webpack_require__.n(Lightbox),State=__webpack_require__(339),closeIcon=__webpack_require__(258);var icons_Close=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:closeIcon.a}}))`
  display: flex;
  align-items: center;
  width: 1em;
`;var icons_Information=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">\n<path fill="#fff" fill-rule="evenodd" d="M7.41 15.705l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6 1.41 1.41z" clip-rule="evenodd"/>\n<mask id="k8doq8lq5a" width="12" height="8" x="6" y="8" maskUnits="userSpaceOnUse">\n    <path fill="#fff" fill-rule="evenodd" d="M7.41 15.705l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6 1.41 1.41z" clip-rule="evenodd"/>\n</mask>\n</svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`;const Image_Wrapper=styled_components_browser_esm.default.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
`,Image_ImageWrapper=styled_components_browser_esm.default.div`
  flex-grow: 1;
  amp-img {
    margin: 0 auto;
    height: 100%;
  }
  img {
    object-fit: contain;
  }
`,Image_Caption=styled_components_browser_esm.default.figcaption`
  background: rgba(34, 34, 34, 0.65);
  padding: 16px 16px 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  line-height: 20px;
  @media ${Styles.c.tablet} {
    padding: 16px 72px 16px 16px;
  }
`,Image_Header=styled_components_browser_esm.default.header`
  margin-bottom: 12px;
`,Title=styled_components_browser_esm.default.h2`
  display: inline;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  font-size: 24px;
  line-height: 28px;
  color: ${props=>props.theme.color.contrastLight};
`,Image_Copyright=styled_components_browser_esm.default.p`
  color: ${props=>props.theme.color.standardGrey};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-style: italic;
  font-size: 16px;
  opacity: 0.7;
  line-height: 48px;
  margin: 0;

  @media ${Styles.c.laptop} {
    line-height: 16px;
    padding-top: 16px;
  }
`,Description=styled_components_browser_esm.default.p`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  margin: 0 0 27px 0;
  font-size: 16px;
  line-height: 20px;
  color: ${props=>props.theme.color.contrastLight};

  @media ${Styles.c.laptop} {
    margin-bottom: 16px;
  }
`,GalleryTitle=styled_components_browser_esm.default.h1`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  color: ${props=>props.theme.color.contrastLight};
  margin: 0 0 10px;
  font-weight: normal;
  line-height: 20px;
`,FullPageTrigger=styled_components_browser_esm.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  @media ${Styles.c.laptop} {
    display: none;
  }
`,GalleryImage=({title:galleryTitle,data:{url:url,title:title,caption:originalCaption,localCaption:localCaption,description:description,copyright:copyright,width:width,height:height},srcSet:srcSet})=>{const caption=localCaption||originalCaption;return Object(jsx_runtime.jsxs)(Image_Wrapper,{children:[Object(jsx_runtime.jsxs)(Image_ImageWrapper,{children:[Object(jsx_runtime.jsx)(FullPageTrigger,{on:"tap:AMP.setState({hidden: !hidden})",role:"button",tabIndex:"0"}),Object(jsx_runtime.jsx)(Image_default.a,{src:url+"?width=640",alt:caption,height:height,width:width,srcset:srcSet.map(size=>url+`?width=${size} ${size}w`).join(", "),layout:"fill"})]}),Object(jsx_runtime.jsx)("div",{"amp-bind-hidden":"hidden",children:Object(jsx_runtime.jsxs)(Image_Caption,{children:[Object(jsx_runtime.jsxs)(Image_Header,{children:[Object(jsx_runtime.jsx)(GalleryTitle,{children:galleryTitle}),title&&Object(jsx_runtime.jsx)(Title,{children:title})]}),Object(jsx_runtime.jsx)(Description,{dangerouslySetInnerHTML:{__html:caption||description}}),Object(jsx_runtime.jsx)(Image_Copyright,{children:copyright})]})})]})};GalleryImage.propTypes={title:prop_types_default.a.string,data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,count:prop_types_default.a.number.isRequired,delta:prop_types_default.a.number.isRequired},GalleryImage.__docgenInfo={description:"",methods:[],displayName:"GalleryImage",props:{title:{type:{name:"string"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""},count:{type:{name:"number"},required:!0,description:""},delta:{type:{name:"number"},required:!0,description:""}}};var Gallery_Image=GalleryImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Gallery/Image.js"]={name:"GalleryImage",docgenInfo:GalleryImage.__docgenInfo,path:"app/component/library/Article/Embeds/Gallery/Image.js"});const Lightbox_srcSet=["1368"],GalleryHeader=styled_components_browser_esm.default.header`
  position: absolute;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 10;

  .close-btn {
    svg {
      fill: ${props=>props.theme.color.contrastLight};
    }
    width: 48px;
    height: 48px;
    background: rgba(34, 34, 34, 0.65);
    position: absolute;
    top: 0;
    right: 0;
    &:focus {
      outline: none;
    }
    @media ${Styles.c.laptop} {
      background: none;
    }
  }

  @media ${Styles.c.laptop} {
    width: 316px;
    height: 100%;
    background: ${props=>props.theme.color.galleryDarkGrey};
  }
`,GalleryContent=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.indyBase};
  position: relative;
  width: 100%;
  height: 100%;
  amp-carousel {
    height: 100%;
  }

  @media ${Styles.c.laptop} {
    width: calc(100% - 316px);
  }

  @media ${Styles.c.maxLaptop} {
    height: calc(100% - 90px);
  }

  @media ${Styles.c.maxTablet} {
    height: calc(100% - 50px);
  }

  .adSlide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,TitleText=styled_components_browser_esm.default.span`
  display: none;

  @media ${Styles.c.laptop} {
    display: block;
  }
`,Lightbox_GalleryTitle=styled_components_browser_esm.default.h1`
  display: flex;
  margin: 0;
  padding: 63px 16px 16px;
  font-size: 16px;
  line-height: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: normal;
  color: ${props=>props.theme.color.contrastLight};
`,CloseIcon=Object(styled_components_browser_esm.default)(icons_Close)`
  color: white;
  width: 12px;
  height: 12px;
  margin: 0 auto;
`,GalleryWrapper=styled_components_browser_esm.default.aside`
  amp-lightbox > div {
    background: #222222;
  }
  amp-lightbox {
    z-index: 2147483642;
  }
  .amp-carousel-button {
    cursor: pointer;
    outline: none;
    height: 48px;
    width: 48px;
    margin: 0;
    border-radius: 0;
    background: rgba(34, 34, 34, 0.8);
    display: none;

    &:before {
      content: ' ';
      width: 8px;
      height: 12px;
      top: 18px;
      left: 20px;
      display: block;
      background: url(/img/icons/chevron.svg) no-repeat center center;
      margin-left: 1px;
      position: absolute;
    }

    @media ${Styles.c.laptop} {
      display: block;
    }
  }
  .amp-carousel-button-prev {
    &:before {
      transform: rotate(180deg);
      margin-left: -1px;
    }
  }
  .caption-toggle {
    svg {
      fill: ${props=>props.theme.color.galleryBlack};
      opacity: 0.8;
    }

    font-size: 16px;
    position: absolute;
    bottom: 17px;
    right: 0;
    width: 48px;
    height: 48px;
    background: none;
    outline: none;

    @media ${Styles.c.laptop} {
      bottom: 0;
    }
  }
  .caption-toggle--open {
    background: ${props=>props.theme.color.galleryBlack};
    opacity: 0.8;
  }
`,StyledMPU=Object(styled_components_browser_esm.default)(MPU.a)`
  position: absolute;
  bottom: 0;
  right: 8px;
  width: 300px;
  height: 600px;
  // @see https://github.com/sparhami/amphtml/blob/f94284c4a1f29ce356f1a45eb80b6a8462518dbb/css/Z_INDEX.md
  z-index: 2147483643;
  text-align: center;

  > div:last-child {
    position: absolute;
    bottom: 0;
  }

  @media ${Styles.c.maxLaptop} {
    display: none;
  }
`,StyledBannerMPU=Object(styled_components_browser_esm.default)(MPU.a)`
  position: absolute;
  bottom: 0;
  // @see https://github.com/sparhami/amphtml/blob/f94284c4a1f29ce356f1a45eb80b6a8462518dbb/css/Z_INDEX.md
  z-index: 2147483643;
  text-align: center;
  width: 100%;
  height: 90px;
  display: none;

  @media ${Styles.c.maxLaptop} {
    display: block;
  }

  @media ${Styles.c.maxTablet} {
    height: 50px;
  }
`,Count=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.contrastLight};
  font-weight: ${props=>props.theme.fontWeight.normal};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(34, 34, 34, 0.65);
  line-height: 47px;
  padding: 1px 12px 0;

  span.hide {
    visibility: hidden;
  }

  @media ${Styles.c.laptop} {
    top: 1px;
    background: ${props=>props.theme.color.galleryBlack};
    padding: 1px 0 0 12px;
    width: 100%;
  }
`,InformationIcon=Object(styled_components_browser_esm.default)(icons_Information)`
  color: white;
  width: 24px;
  height: 24px;
  margin: 0 auto;
`,initialAmpState={currentIndex:0};let galleryIdIndex=0;const GalleryLightbox=({id:id,title:title,gallery:gallery,isSubscribed:isSubscribed})=>{const galleryStateId=(()=>{const id="gallery_"+galleryIdIndex;return galleryIdIndex+=1,id})();let gallerySlides=gallery?gallery.filter(image=>image).map(item=>({type:"image",item:item})):[];return gallerySlides=gallerySlides.reduce((acc,item,index)=>[...acc,item,...(index+1)%3==0?[{type:"ad",item:{id:"gallery_mpu_"+(index+1)/3}}]:[]],[]),Object(jsx_runtime.jsxs)(GalleryWrapper,{children:[Object(jsx_runtime.jsx)(State.a,{id:galleryStateId,json:initialAmpState}),Object(jsx_runtime.jsxs)(Lightbox_default.a,{id:id,children:[Object(jsx_runtime.jsxs)(GalleryHeader,{children:[Object(jsx_runtime.jsxs)(Lightbox_GalleryTitle,{children:[Object(jsx_runtime.jsx)(Count,{children:Object(jsx_runtime.jsxs)("span",{"amp-bind-class":`!((${galleryStateId}.currentIndex + 1) % 4) ? 'hide' : ''`,children:[Object(jsx_runtime.jsx)("span",{"amp-bind-text":`(${galleryStateId}.currentIndex + 1) - floor((${galleryStateId}.currentIndex + 1) / 4)`,children:"1"}),"/",gallery.length]})}),Object(jsx_runtime.jsx)(TitleText,{children:title})]}),Object(jsx_runtime.jsx)("button",{className:"close-btn",on:`tap:${id}.close`,children:Object(jsx_runtime.jsx)(CloseIcon,{})})]}),Object(jsx_runtime.jsxs)(GalleryContent,{children:[Object(jsx_runtime.jsx)(Carousel_default.a,{layout:"fill",type:"slides",loop:"","amp-bind-slide":"selectedSlide","data-on":`slideChange:AMP.setState({ ${galleryStateId}: { currentIndex: event.index } })`,children:gallerySlides.map(({type:type,item:item})=>"image"===type?Object(jsx_runtime.jsx)(Gallery_Image,{title:title,srcSet:Lightbox_srcSet,data:item.data},item.data.id):isSubscribed?null:Object(jsx_runtime.jsx)("div",{className:"adSlide",children:Object(jsx_runtime.jsx)(MPU.a,{id:item.id,"size-key":"DOUBLE_MPU_EXTRA_NOT_MOBILE"},item.id)}))}),Object(jsx_runtime.jsx)("button",{className:"caption-toggle",on:"tap:AMP.setState({hidden: !hidden})","amp-bind-class":"hidden ? 'caption-toggle caption-toggle--open' : 'caption-toggle'",children:Object(jsx_runtime.jsx)(InformationIcon,{})})]}),!isSubscribed&&Object(jsx_runtime.jsx)(StyledMPU,{id:"gallery_mpu_sb",refreshAtIndex:3,refreshStateId:galleryStateId,"size-key":"DOUBLE_MPU"}),!isSubscribed&&Object(jsx_runtime.jsx)(StyledBannerMPU,{id:"gallery_banner",refreshAtIndex:3,refreshStateId:galleryStateId,"size-key":"BOTTOM_BANNER",ampSizes:"320x50",height:50,width:320})]})]})};GalleryLightbox.propTypes={id:prop_types_default.a.string.isRequired,title:prop_types_default.a.string.isRequired,gallery:prop_types_default.a.array.isRequired,isSubscribed:prop_types_default.a.bool.isRequired},GalleryLightbox.__docgenInfo={description:"",methods:[],displayName:"GalleryLightbox",props:{id:{type:{name:"string"},required:!0,description:""},title:{type:{name:"string"},required:!0,description:""},gallery:{type:{name:"array"},required:!0,description:""},isSubscribed:{type:{name:"bool"},required:!0,description:""}}};var Gallery_Lightbox=GalleryLightbox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Gallery/Lightbox.js"]={name:"GalleryLightbox",docgenInfo:GalleryLightbox.__docgenInfo,path:"app/component/library/Article/Embeds/Gallery/Lightbox.js"});const Gallery_GalleryWrapper=styled_components_browser_esm.default.div`
  > div {
    position: relative;
    cursor: pointer;
  }
`,Gallery_GalleryHeader=styled_components_browser_esm.default.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 12px;
  @media ${Styles.c.laptop} {
    padding: 12px 0;
  }
`,Gallery_GalleryTitle=styled_components_browser_esm.default.h2`
  display: flex;
  margin: 0;
  font-size: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  @media ${Styles.c.tablet} {
    font-size: 21px;
  }
`,GalleryIcon=Object(styled_components_browser_esm.default)(icons_Gallery)`
  width: 1.3em;
  margin-right: 20px;
  @media ${Styles.c.laptop} {
    margin-left: 16px;
  }
  &:before {
    content: ' ';
    width: 24px;
    height: 24px;
    background: transparent url(/img/icons/gallery_24.svg) no-repeat;
  }
`,GalleryButton=styled_components_browser_esm.default.button`
  display: none;
`,GalleryInner=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,GalleryMain=styled_components_browser_esm.default.div`
  img {
    object-fit: cover;
  }
`,GalleryThumbs=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
  @media ${Styles.c.laptop} {
    margin-top: 16px;
  }
  > * {
    width: calc(33.334% - 8px);
    min-height: 67px;

    &:nth-child(3) {
      display: none;
    }

    @media ${Styles.c.laptop} {
      width: calc(25% - 16px);

      &:nth-child(3) {
        display: block;
      }
    }
  }
  img {
    object-fit: cover;
  }
`,GalleryDefault=styled_components_browser_esm.default.div``,GalleryInsider=styled_components_browser_esm.default.div`
  ${GalleryThumbs} {
    display: none;
  }
  ${GalleryInner} {
    amp-img {
      width: 100%;
      height: 211px;
      float: right;
      @media ${Styles.c.mobileM} {
        height: auto;
        min-height: 211px;
        max-height: 369px;
      }
      @media ${Styles.c.tablet} {
        min-height: unset;
        max-height: unset;
        width: 554px;
        height: 369px;
      }
      @media ${Styles.c.laptop} {
        width: 726px;
        height: 485px;
      }
    }
  }
`,Gallery_Gallery=Object(styled_components_browser_esm.default)(props=>{const{className:className,data:{title:title,gallery:gallery,width:width,height:height},srcSet:srcSet,isHero:isHero}=props,[id]=Object(react.useState)(uniqueId_default()("gallery-"));return Object(jsx_runtime.jsx)(Gallery_GalleryWrapper,{className:classnames_default()("gallery",className),children:Object(jsx_runtime.jsxs)(GalleryDefault,{children:[Object(jsx_runtime.jsx)("div",{role:"button",tabIndex:"0",on:"tap:"+id,children:Object(jsx_runtime.jsxs)(GalleryInner,{children:[Object(jsx_runtime.jsx)(GalleryMain,{children:null==gallery?void 0:gallery.filter(image=>image).slice(0,1).map(({data:{url:url,caption:caption,id:id}})=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=968&h=645",alt:caption,height:height||645,width:width||968,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"},id))}),Object(jsx_runtime.jsx)(GalleryThumbs,{isHero:isHero,children:null==gallery?void 0:gallery.filter(image=>image).slice(1,5).map(({data:{url:url,caption:caption,id:id}})=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=230&h=152",alt:caption,height:152,width:230,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"},id))})]})}),Object(jsx_runtime.jsx)(Gallery_Lightbox,{id:id,title:title,gallery:gallery})]})})})`
  ${GalleryInsider} {
    background-color: ${props=>props.theme.color.contrastDarker};
    @media ${Styles.c.tablet} {
      padding-right: 12px;
    }
    @media ${Styles.c.laptop} {
      padding-right: 16px;
    }
    > div {
      display: grid;
      @media ${Styles.c.tablet} {
        display: block;
      }
    }
    ${Gallery_GalleryHeader} {
      order: 2;
      padding-bottom: 112px;
      @media ${Styles.c.tablet} {
        padding-top: 16px;
        padding-bottom: 0;
      }
      &:after {
        font-family: ${props=>props.theme.fontFamily.secondaryFont};
        content: '${props=>props.data.gallery.length} images';
        color: ${props=>props.theme.color.contrastLight};
        position: absolute;
        font-weight: 300;
        margin-top: 45px;
        margin-left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        @media ${Styles.c.tablet} {
          transform: unset;
          margin-top: 49%;
          margin-left: 66px;
        }
        @media ${Styles.c.laptop} {
          margin-left: 102px;
        }
      }
      ${Gallery_GalleryTitle} {
        display: none;
        @media ${Styles.c.tablet} {
          display: block;
          font-size: 24px;
          font-weight: normal;
          font-family: ${props=>props.theme.fontFamily.insiderDisplay};
          color: ${props=>props.theme.color.contrastLight};
          position: absolute;
          padding-top: 37%;
          width: 26%;
          padding-right: 12px;
          box-sizing: border-box;
        }
        @media ${Styles.c.laptop} {
          padding-right: 16px;
        }
      }
      ${GalleryIcon} {
        display: none;
      }
      ${GalleryButton} {
        display: block;
        color: ${props=>props.theme.color.contrastLight};
        font-family: ${props=>props.theme.fontFamily.secondaryFont};
        position: absolute;
        margin-top: 180px;
        border: solid 1px ${props=>props.theme.color.contrastLight};
        padding: 12px 24px;
        margin-left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        @media ${Styles.c.tablet} {
          transform: unset;
          margin-top: 60%;
          margin-left: 30px;
        }
        @media ${Styles.c.laptop} {
          margin-left: 61px;
        }
      }
    }
  }
  ${GalleryMain} {
    amp-img {
      background-color: ${props=>props.theme.color.contrastDarker};
    }
  }
  ${GalleryThumbs} {
    amp-img {
      background-color: ${props=>props.theme.color.contrastDarker};
    }
    amp-img {
      &:last-child {
        img {
          opacity: 0.6;
        }
        &:before {
          font-family: ${props=>props.theme.fontFamily.secondaryFont};
          content: '${props=>props.data.gallery.length}';
          color: ${props=>props.theme.color.contrastLight};
          font-weight: 500;
          font-size: 18px;
          position: absolute;
          top: 47%;
          left: 60%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1;
          @media ${Styles.c.laptop} {
            font-size: 22px;
          }
        }
        &:after {
          position: absolute;
          content: '';
          width: 100%;
          height: 20px;
          background-size: contain;
          top: 31%;
          background: transparent url(/img/icons/camera.svg) no-repeat 33%;
          background-size: 20px 20px;
          @media ${Styles.c.tablet} {
            left: 14%;
            top: 40%;
          }
          @media ${Styles.c.laptop} {
            height: ${props=>props.isHero?"42px":"27px"};
            background-size: ${props=>props.isHero?"42px 42px":"25px 25px"};
            background-position: 40%;
            top: 30%;
            left: unset;
          }
        }
      }
    }
  }
`;Gallery_Gallery.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,isHero:prop_types_default.a.bool};const GalleryWithScript=Object(withScript.a)(Gallery_Gallery)`
const trigger = document.querySelector('[on^=tap]')
trigger.addEventListener('click', async () => {
  const event_name = 'Article Gallery View';
  const state = await AMP.getState('digitalData');
  const digitalData = JSON.parse(state);

  const reportSuiteID = '${props=>{var _props$res$locals$con;return null===(_props$res$locals$con=props.res.locals.configuration.adobe)||void 0===_props$res$locals$con?void 0:_props$res$locals$con.reportSuiteId}}';
  const cacheBuster =
    's' + Math.floor(10000000000000 + Math.random() * 90000000000000);
  const params = {
    'AQB': '1',
    'ndh': '0',
    'pf': '1',
    't':
      (function () {
        let today = new Date();
        return (
          today.getDate() +
          '/' +
          today.getMonth() +
          '/' +
          today.getFullYear() +
          ' ' +
          today.getHours() +
          ':' +
          today.getMinutes() +
          ':' +
          today.getSeconds() +
          ' ' +
          today.getDay() +
          ' ' +
          today.getTimezoneOffset()
        );
      })(),
    'ce': 'ISO-8859-1',
    'g': location.href.substring(0, 255),
    '-g': location.href.substring(255),
    'r': document.referrer,
    'gn': document.title,
    'gt': 'Gallery',
    'events': 'event3',
    'c1': 'D=v1',
    'v1': digitalData.site_sections.split(":").slice(0, 2).join(":"),
    'h1': digitalData.site_sections.split(":").join(","),
    'c2': 'D=v2',
    'v2': digitalData.site_sections.split(":").slice(0, 3).join(":"),
    'c3': digitalData.page_domain,
    'c8': digitalData.page_type,
    'c9': digitalData.article_id,
    'c10': digitalData.article_publication_time,
    'c11': digitalData.article_title,
    'c21': 'Gallery',
    'k': 'N',
    'AQE': '1',
  };

  const queryString = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

  let analyticsURL = [
    'https://ssc.standard.co.uk/b/ss/',
    reportSuiteID,
    '/1/JS-2.17.0/',
    cacheBuster,
    '?',
    queryString,
  ].join('');

  const img = document.createElement('amp-img');
  img.setAttribute('src', encodeURI(analyticsURL));
  img.setAttribute('layout', 'fixed');
  img.setAttribute('width', '1');
  img.setAttribute('height', '1');
  img.style.position = 'absolute';
  document.body.appendChild(img);
});
`,GalleryView=({res:res,res:{locals:{cleanAmp:cleanAmp}},...props})=>cleanAmp?Object(jsx_runtime.jsx)(GalleryWithScript,{res:res,...props}):Object(jsx_runtime.jsx)(Gallery_Gallery,{res:res,...props});GalleryView.propTypes={...Gallery_Gallery.propTypes,cleanAmp:prop_types_default.a.bool},GalleryView.defaultTypes={cleanAmp:!1};var Embeds_Gallery=Object(RequestProvider.withRequest)(GalleryView),Instagram=__webpack_require__(911),Instagram_default=__webpack_require__.n(Instagram);const Instagram_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;
`;function InstagramEmbed(props){return Object(jsx_runtime.jsx)(Instagram_Wrapper,{children:Object(jsx_runtime.jsx)(Instagram_default.a,{...props})})}InstagramEmbed.propTypes={data:prop_types_default.a.any.isRequired},InstagramEmbed.__docgenInfo={description:"",methods:[],displayName:"InstagramEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Instagram=InstagramEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Instagram.js"]={name:"InstagramEmbed",docgenInfo:InstagramEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Instagram.js"});var JWPlayer=__webpack_require__(912),JWPlayer_default=__webpack_require__.n(JWPlayer);const VideoMeta=playerData=>{var _playerData$data,_playerData$data$extr;const widestMp4=(data=>{var _data$data,_data$data$extra;const sources=null==data||null===(_data$data=data.data)||void 0===_data$data||null===(_data$data$extra=_data$data.extra)||void 0===_data$data$extra?void 0:_data$data$extra.sources;let widestMp4,w=0;return sources&&sources.forEach(source=>{source.width>w&&"video/mp4"===source.type&&(w=source.width,widestMp4=source)}),widestMp4})(playerData),duration=null==playerData||null===(_playerData$data=playerData.data)||void 0===_playerData$data||null===(_playerData$data$extr=_playerData$data.extra)||void 0===_playerData$data$extr?void 0:_playerData$data$extr.duration;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[duration&&Object(jsx_runtime.jsx)("meta",{property:"og:video:duration",content:duration}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video",content:widestMp4.file}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:width",content:widestMp4.width}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:height",content:widestMp4.height}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:type",content:"video/mp4"})]})};VideoMeta.propTypes={data:prop_types_default.a.object.isRequired};var Head_VideoMeta=VideoMeta;const JWPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,DivForJWPlayer=styled_components_browser_esm.default.div`
  width: 100%;
  padding-top: 56.25%;
`,getPlayerIdAndType=(playerIds,props)=>{const{configuration:{jwplayerPlayerTypes:jwplayerPlayerTypes},isHero:isHero=!1,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}=props;return isCommercial?{playerId:playerIds.commercialPlayer,playerType:jwplayerPlayerTypes.commercialPlayerType}:isSensitive?{playerId:playerIds.sensitivePlayer,playerType:jwplayerPlayerTypes.sensitivePlayerType}:isHero?{playerId:playerIds.defaultPlayer,playerType:jwplayerPlayerTypes.defaultPlayerType}:{playerId:playerIds.inlinePlayer,playerType:jwplayerPlayerTypes.inlinePlayerType}},JWPlayerEmbed=props=>{const{data:data,isHero:isHero=!1,res:{locals:{cleanAmp:cleanAmp}}}=props,id=(({id:id,mediaid:mediaid})=>id||mediaid)(data),{playerId:playerId,playerType:playerType}=(props=>{const{configuration:{jwplayerPlayerIds:jwplayerPlayerIds},res:{locals:{cleanAmp:cleanAmp}}}=props;return getPlayerIdAndType(cleanAmp?jwplayerPlayerIds.amp:jwplayerPlayerIds.default,props)})(props),customParams=((props,videoId,playerType)=>{const{jsGlobals:{gs_channels:gs_channels,topictags:topictags,pageId:pageId}}=props;return`videoID%3D${videoId}%26articleId%3D${pageId&&Number.isNaN(pageId)?pageId.replace(/\D/g,""):pageId}%26gs_channels%3D${gs_channels&&gs_channels.join()}%26playertype%3D${playerType}%26topictags%3D${topictags&&topictags.join()}`})(props,id,playerType),adUnit=(props=>{const{jsGlobals:{videoAdUnitPath:videoAdUnitPath}}=props;return videoAdUnitPath})(props);if(cleanAmp||!isHero)return Object(jsx_runtime.jsxs)(JWPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)(JWPlayer_default.a,{data:{id:id,...data},playerId:playerId,playerType:playerType,useAmpIframe:!0,placeholder:!0,ampIframeSrc:"/jwplayer-amp-video-iframe.html",useIframe:!isHero,runJWPlayerSetup:!1,"data-param-customparams":customParams,"data-param-adunit":adUnit}),data.title&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.title})]});{const uid="jwplayer-hero-player",defaults=(id=>({playlist:"//cdn.jwplayer.com/v2/media/"+id,autoPause:{viewability:!0,pauseAds:!0}}))(id);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)("script",{src:`//cdn.jwplayer.com/libraries/${playerId}.js`,async:!0,onLoad:`var event = new CustomEvent("jwplayerLoaded", { detail: { uid: "${uid}", playerType: "${playerType}", data: ${JSON.stringify(defaults)}}});document.dispatchEvent(event);`,"data-jwplayer-uid":uid,"data-jwplayer-player-type":playerType,"data-jwplayer-data":JSON.stringify(defaults)}),Object(jsx_runtime.jsx)(DivForJWPlayer,{id:uid})]})}};JWPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired,res:prop_types_default.a.any.isRequired,isHero:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool,isSensitive:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},JWPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"JWPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""},res:{type:{name:"any"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""},isSensitive:{type:{name:"bool"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var Embeds_JWPlayer=Object(RequestProvider.withRequest)(JWPlayerEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/JWPlayer.js"]={name:"JWPlayerEmbed",docgenInfo:JWPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/JWPlayer.js"});var Playbuzz=__webpack_require__(913),Playbuzz_default=__webpack_require__.n(Playbuzz);const Playbuzz_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,PlayBuzzEmbed=({data:data})=>Object(jsx_runtime.jsx)(Playbuzz_Wrapper,{children:Object(jsx_runtime.jsx)(Playbuzz_default.a,{data:data})});PlayBuzzEmbed.propTypes={data:prop_types_default.a.any.isRequired},PlayBuzzEmbed.__docgenInfo={description:"",methods:[],displayName:"PlayBuzzEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Playbuzz=PlayBuzzEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Playbuzz.js"]={name:"PlayBuzzEmbed",docgenInfo:PlayBuzzEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Playbuzz.js"});var Twitter=__webpack_require__(914),Twitter_default=__webpack_require__.n(Twitter);const Twitter_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`;function TwitterEmbed({data:data}){return Object(jsx_runtime.jsx)(Twitter_Wrapper,{children:Object(jsx_runtime.jsx)(Twitter_default.a,{data:data})})}TwitterEmbed.propTypes={data:prop_types_default.a.any.isRequired},TwitterEmbed.__docgenInfo={description:"",methods:[],displayName:"TwitterEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Twitter=TwitterEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Twitter.js"]={name:"TwitterEmbed",docgenInfo:TwitterEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Twitter.js"});var Youtube=__webpack_require__(915),Youtube_default=__webpack_require__.n(Youtube);const Youtube_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,YoutubeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Youtube_Wrapper,{children:Object(jsx_runtime.jsx)(Youtube_default.a,{data:data})});YoutubeEmbed.propTypes={data:prop_types_default.a.any.isRequired},YoutubeEmbed.__docgenInfo={description:"",methods:[],displayName:"YoutubeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Youtube=YoutubeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Youtube.js"]={name:"YoutubeEmbed",docgenInfo:YoutubeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Youtube.js"});const ParagraphWrapper=styled_components_browser_esm.default.div`
  p {
    margin: 20px 0;
    line-height: 28px;
    max-width: ${props=>props.isService?"968px":"100%"};
  }
  a {
    color: ${props=>props.theme.color.primary};
  }
  &:first-child {
    > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 10px;
      line-height: 1.2em;
      padding-left: 20px;
      position: relative;
      font-size: 19px;
      &:before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${props=>props.theme.color.primary};
        position: absolute;
        left: 0;
        top: 5px;
      }
    }
  }
`,Markup=({data:{markup:markup},polar:polar,prefix:prefix,isService:isService})=>Object(jsx_runtime.jsxs)(ParagraphWrapper,{id:polar&&"native-content-content",isService:isService,children:[prefix&&prefix,Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})]});Markup.propTypes={data:prop_types_default.a.any.isRequired,polar:prop_types_default.a.bool,prefix:prop_types_default.a.element,isService:prop_types_default.a.bool},Markup.__docgenInfo={description:"",methods:[],displayName:"Markup",props:{data:{type:{name:"any"},required:!0,description:""},polar:{type:{name:"bool"},required:!1,description:""},prefix:{type:{name:"element"},required:!1,description:""},isService:{type:{name:"bool"},required:!1,description:""}}};var Article_Markup=Markup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Markup.js"]={name:"Markup",docgenInfo:Markup.__docgenInfo,path:"app/component/library/Article/Markup.js"});const ReadMore_Wrapper=styled_components_browser_esm.default.aside`
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  @media ${Styles.c.tablet} {
    width: 50%;
    margin-left: 20px;
  }
  &.align-left {
    float: left;
    @media ${Styles.c.tablet} {
      margin-left: unset;
      margin-right: 20px;
    }
  }
`,Link=styled_components_browser_esm.default.a`
  display: block;
  background: ${props=>props.theme.color.contrastLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  color: ${props=>props.theme.color.contrastDarker};
  &:hover {
    color: ${props=>props.theme.color.primary};
    .capsule {
      color: ${props=>props.theme.color.contrastDarker};
    }
  }

  > amp-img {
    width: 100%;
  }
`,Label=styled_components_browser_esm.default.span`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 14px;
  position: absolute;
  padding: 5px 10px 1px;
  margin: -15px 20px;
  text-transform: uppercase;
  display: block;
  background: ${props=>props.theme.color.contrastLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`,Content=styled_components_browser_esm.default.div`
  position: relative;
  padding: 20px;
  font-weight: 500;
  font-size: 17px;
  line-height: 19px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`;function ReadMore({data:{align:align,text:text,href:href,imageUrl:imageUrl,content:content}}){return Object(jsx_runtime.jsx)(ReadMore_Wrapper,{className:"align-"+align,children:Object(jsx_runtime.jsxs)(Link,{href:href,target:"_blank",children:[imageUrl&&Object(jsx_runtime.jsx)("amp-img",{src:imageUrl,height:"186",width:"280",layout:"responsive",children:Object(jsx_runtime.jsx)("amp-img",{placeholder:!0,layout:"fill",src:"/img/placeholder.png",height:"186",width:"280"})})||Object(jsx_runtime.jsx)("amp-img",{layout:"responsive",src:"/img/placeholder.png",height:"186",width:"280"}),Object(jsx_runtime.jsx)(Label,{className:"capsule",children:text}),Object(jsx_runtime.jsx)(Content,{children:content})]})})}ReadMore.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string},ReadMore.__docgenInfo={description:"",methods:[],displayName:"ReadMore",props:{data:{type:{name:"any"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Article_ReadMore=ReadMore;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ReadMore.js"]={name:"ReadMore",docgenInfo:ReadMore.__docgenInfo,path:"app/component/library/Article/ReadMore.js"});const readmoreOnce=()=>{let foundOne=null;return comp=>"readMore"!==comp.type||!foundOne&&(foundOne=!0,!0)},removeEmptySnippet=()=>comp=>{switch(comp.type){case"markup":if(!comp.data.markup)return!1;return!(striptags_default()(comp.data.markup).length<1);case"gallery":return void 0!==comp.data.gallery&&comp.data.gallery.length>0}return!0},renderBody=body=>body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).map((snippet,index)=>{switch(snippet.type){case"markup":return Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data},snippet.type+index);case"brightcove":return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:snippet.data},snippet.type+index);case"video-jwplayer":return Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data},snippet.type+index);case"youtube":case"video-youtube":return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:snippet.data},snippet.type+index);case"video-dugout":return Object(jsx_runtime.jsx)(DugoutPlayer,{data:snippet.data},snippet.type+index);case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{srcSet:[320,640],data:snippet.data},snippet.type+index);case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:snippet.data},snippet.type+index);case"readMore":return Object(jsx_runtime.jsx)(Article_ReadMore,{data:snippet.data},snippet.type+index);case"playbuzz":return Object(jsx_runtime.jsx)(Embeds_Playbuzz,{data:snippet.data},snippet.type+index);case"gallery":return Object(jsx_runtime.jsx)(Embeds_Gallery,{srcSet:[320,640],data:snippet.data},snippet.type+index);default:return console.log("TODO: define component type",snippet.type),Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},snippet.type+index)}}),PriceComparison_Wrapper=styled_components_browser_esm.default.div`
  .m101 {
    max-width: 330px;
    position: relative;
    margin-top: 16px;
  }
  h3 {
    font-weight: 400;
    padding-bottom: 5px;
    font-size: 16px;
    margin: 0;
  }
  ul {
    display: table;
    border-collapse: collapse;
    width: 100%;
    list-style: none;
    border-top: 1px solid ${props=>props.theme.color.indyGrey};
    border-bottom: 1px solid ${props=>props.theme.color.indyGrey};
    padding: 10px 0;
    margin: 0 0 20px;
  }
  li {
    display: table-row;
    position: relative;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  li > * {
    display: table-cell;
    vertical-align: middle;
    padding: 9px 0;
    font-size: 16px;
    line-height: 16px;
  }
  li > *:last-child {
    text-align: right;
  }
  .m101-price,
  .m101-btn {
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: #ec1a2e;
  }
`,PriceComparison=({url:url})=>url&&Object(jsx_runtime.jsx)(PriceComparison_Wrapper,{children:Object(jsx_runtime.jsx)("amp-list",{class:"m101",width:"auto",layout:"fixed-height",height:"20",src:"/internal-api/m101?link="+encodeURIComponent(url),"single-item":"",items:"results",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",dangerouslySetInnerHTML:{__html:'\n{{#hasItems}}\n  <h3>Price comparison</h3>\n  <ul>\n{{/hasItems}}\n{{#items}}\n    <li>\n      <span class="m101-name">{{ merchant }}</span>\n      <span class="m101-price">£{{ price }}</span>\n      <a class="m101-btn" target="_blank" rel="nofollow" href="{{ link }}">Buy now</a>\n    </li>\n{{/items}}\n{{#hasItems}}\n  </ul>\n{{/hasItems}}'}})})});PriceComparison.propTypes={url:prop_types_default.a.string.isRequired},PriceComparison.__docgenInfo={description:"",methods:[],displayName:"PriceComparison",props:{url:{type:{name:"string"},required:!0,description:""}}};var Best_PriceComparison=PriceComparison;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Best/PriceComparison.js"]={name:"PriceComparison",docgenInfo:PriceComparison.__docgenInfo,path:"app/component/library/Article/Best/PriceComparison.js"});const Product_Wrapper=styled_components_browser_esm.default.div`
  margin-bottom: 36px;
`,ProductBody=styled_components_browser_esm.default.div`
  margin-top: 20px;
`,ProductTitle=styled_components_browser_esm.default.h2`
  font-size: 19px;
  @media ${Styles.c.tablet} {
    font-size: 21px;
  }
`,ProductMeta=styled_components_browser_esm.default.aside`
  font-size: 19px;
  a {
    font-weight: ${props=>props.theme.fontWeight.bold};
  }
`,ProductLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
`,Product=({className:className,product:{data:{title:title,image:image,body:body,vendorLink:vendorLink,vendorName:vendorName,price:price,priceComparison:priceComparison}}})=>Object(jsx_runtime.jsx)(Product_Wrapper,{children:Object(jsx_runtime.jsxs)("div",{className:Object(classes.a)(className,"product"),children:[Object(jsx_runtime.jsx)(ProductTitle,{className:"product-title",children:title}),Object(jsx_runtime.jsx)(Embeds_Image,{data:image.data,srcSet:[320,640],showCaption:!1}),Object(jsx_runtime.jsx)(ProductBody,{children:renderBody(body)}),vendorLink&&Object(jsx_runtime.jsxs)(ProductMeta,{children:[Object(jsx_runtime.jsx)(ProductLink,{rel:"noreferrer",href:vendorLink,className:"product-buy",target:"_blank",children:"Buy now"}),price&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",Object(jsx_runtime.jsx)("span",{className:"product-currency",children:"£"}),Object(jsx_runtime.jsx)("span",{className:"product-price",children:price.replace(".00","")})]}),vendorName&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[", ",Object(jsx_runtime.jsx)("span",{className:"product-source",children:vendorName})]})]}),Object(jsx_runtime.jsx)(Best_PriceComparison,{url:priceComparison})]})});Product.propTypes={className:prop_types_default.a.string,product:prop_types_default.a.array.isRequired},Product.__docgenInfo={description:"",methods:[],displayName:"Product",props:{className:{type:{name:"string"},required:!1,description:""},product:{type:{name:"array"},required:!0,description:""}}};var Best_Product=Product;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Best/Product.js"]={name:"Product",docgenInfo:Product.__docgenInfo,path:"app/component/library/Article/Best/Product.js"});const Products=({className:className,products:products})=>Object(jsx_runtime.jsx)("div",{className:className,children:products&&products.map((product,index)=>Object(jsx_runtime.jsx)(Best_Product,{product:product},index))});Products.propTypes={className:prop_types_default.a.string,products:prop_types_default.a.array.isRequired};var Best_Products=Object(styled_components_browser_esm.default)(Products)``;const Verdict=({className:className,verdict:verdict})=>Object(jsx_runtime.jsx)("div",{className:className,children:renderBody(verdict)});Verdict.propTypes={className:prop_types_default.a.string,verdict:prop_types_default.a.array.isRequired},Verdict.__docgenInfo={description:"",methods:[],displayName:"Verdict",props:{className:{type:{name:"string"},required:!1,description:""},verdict:{type:{name:"array"},required:!0,description:""}}};var Best_Verdict=Verdict;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Best/Verdict.js"]={name:"Verdict",docgenInfo:Verdict.__docgenInfo,path:"app/component/library/Article/Best/Verdict.js"});const BigLetter_Wrapper=styled_components_browser_esm.default.span`
  font-size: 68px;
  color: #000000;
  line-height: normal;
  font-family: ${props=>props.theme.fontFamily.standardDisplay};
  font-weight: ${props=>props.theme.fontWeight.bold};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  float: left;
  height: 58px;
  margin-right: 8px;
  @media ${Styles.c.laptop} {
    font-size: 70px;
  }
`,BigLetter=({letter:letter})=>Object(jsx_runtime.jsx)(BigLetter_Wrapper,{children:letter});BigLetter.propTypes={letter:prop_types_default.a.string.isRequired},BigLetter.__docgenInfo={description:"",methods:[],displayName:"BigLetter",props:{letter:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/BigLetter.js"]={name:"BigLetter",docgenInfo:BigLetter.__docgenInfo,path:"app/component/library/Article/BigLetter.js"});const ArticleLink_Wrapper=styled_components_browser_esm.default.div``,ArticleLink_Title=styled_components_browser_esm.default.h3`
  line-height: 27px;
  font-size: 1.17em;
  margin: 0.8em 0 16px;
`,ArticleLink_Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
`,ArticleLink_Description=styled_components_browser_esm.default.p``,ArticleLink=props=>{const{className:className,data:{url:url,image:image,title:title,description:description}}=props;return Object(jsx_runtime.jsxs)(ArticleLink_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Embeds_Image,{data:image,srcSet:[640]}),Object(jsx_runtime.jsx)(ArticleLink_Title,{children:title&&Object(jsx_runtime.jsx)(ArticleLink_Link,{href:url,children:title})}),description&&Object(jsx_runtime.jsx)(ArticleLink_Description,{dangerouslySetInnerHTML:{__html:description}})]})};ArticleLink.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string},ArticleLink.__docgenInfo={description:"",methods:[],displayName:"ArticleLink",props:{data:{type:{name:"any"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Embeds_ArticleLink=ArticleLink;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/ArticleLink.js"]={name:"ArticleLink",docgenInfo:ArticleLink.__docgenInfo,path:"app/component/library/Article/Embeds/ArticleLink.js"});var icons_Quote=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 47"><path d="M21.1755 46.9861c9.3976 0 17.1853-7.724 17.1853-17.1216 0-9.4612-7.724-17.12-17.1216-17.12-9.4612 0-17.249 7.6588-17.249 17.12 0 3.7339 1.2882 7.4677 3.476 10.4914l-.129.129c-3.8613-4.1829-6.0507-9.9118-6.0507-16.0898 0-12.7445 10.3625-23.3012 23.107-23.3012 4.1845 0 8.1747 1.0302 11.5216 2.8963l.5796-.9649C32.9535 1.094 28.6417 0 24.3298 0 10.8768 0 0 10.8784 0 24.3951c0 14.0947 9.7192 22.591 21.1755 22.591m41.4727 0c9.3959 0 17.1836-7.724 17.1836-17.1216 0-9.4612-7.7224-17.12-17.12-17.12-9.4612 0-17.249 7.6588-17.249 17.12 0 3.7339 1.2866 7.4677 3.4743 10.4914l-.1273.129c-3.8629-4.1829-6.0506-9.9118-6.0506-16.0898 0-12.7445 10.3624-23.3012 23.107-23.3012 4.1828 0 8.173 1.0302 11.52 2.8963l.5795-.9649C74.4261 1.094 70.1143 0 65.8008 0 52.3494 0 41.471 10.8784 41.471 24.3951c0 14.0947 9.7192 22.591 21.1772 22.591" fill="#ec1a2e" fill-rule="evenodd"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 80px;
  float: left;
  margin: 6px 12px 0 0;
`;const WrapperDefaults=styled_components_browser_esm.default.figure`
  padding: 0 12px 12px;
  box-sizing: border-box;
  border-left: 1px solid #979797;
  border-right: 1px solid #979797;
  font-style: italic;
  ${icons_Quote} {
    float: none;
    width: 64px;
    margin: 0;

    svg {
      width: 64px;
      height: 37px;
    }
  }
  blockquote {
    margin: 12px 0 0;
    font-weight: ${props=>props.theme.fontWeight.bold};
  }
`,LeftWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
  width: 100%;
  margin: auto;
  @media ${Styles.c.tablet} {
    width: 224px;
    margin: 0 16px 0 0;
    float: left;
  }
  @media ${Styles.c.laptop} {
    .article-premium & {
      margin-left: -16%;
    }
    &.subscribed {
      margin-left: -16%;
    }
  }
`,CenterWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
  margin: 0;
  width: 100%;
`,RightWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
  width: 100%;
  margin: auto;
  @media ${Styles.c.tablet} {
    width: 224px;
    margin: 0 0 0 16px;
    float: right;
  }
  @media ${Styles.c.laptop} {
    .article-premium & {
      margin-right: -16%;
    }
    &.subscribed {
      margin-right: -16%;
    }
  }
`,Cite=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.fontGrey};
  text-align: right;
  font-size: 15px;
`,BlockQuote=({className:className,data:data,req:{cookies:cookies}})=>{const{align:align,markup:markup,cite:cite}=data,Wrapper=(align=>{switch(align){case"left":return LeftWrapper;case"right":return RightWrapper;case"none":return CenterWrapper}return CenterWrapper})(align);return Object(jsx_runtime.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?"subscribed":""}`,children:[Object(jsx_runtime.jsx)(icons_Quote,{}),Object(jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:markup}}),cite&&Object(jsx_runtime.jsx)(Cite,{children:cite})]})};BlockQuote.propTypes={data:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired},BlockQuote.__docgenInfo={description:"",methods:[],displayName:"BlockQuote",props:{data:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_BlockQuote=Object(RequestProvider.withRequest)(BlockQuote);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/BlockQuote.js"]={name:"BlockQuote",docgenInfo:BlockQuote.__docgenInfo,path:"app/component/library/Article/Embeds/BlockQuote.js"});var Facebook=__webpack_require__(916),Facebook_default=__webpack_require__.n(Facebook);const Facebook_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;

  .article-liveblog {
    max-width: none;
  }
`,FacebookEmbed=({data:data})=>Object(jsx_runtime.jsx)(Facebook_Wrapper,{children:Object(jsx_runtime.jsx)(Facebook_default.a,{data:data})});FacebookEmbed.propTypes={data:prop_types_default.a.any.isRequired},FacebookEmbed.__docgenInfo={description:"",methods:[],displayName:"FacebookEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Facebook=FacebookEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Facebook.js"]={name:"FacebookEmbed",docgenInfo:FacebookEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Facebook.js"});var HTML=__webpack_require__(212),amp_Iframe=__webpack_require__(917),Iframe_default=__webpack_require__.n(amp_Iframe);const IframeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Iframe_default.a,{data:data});IframeEmbed.propTypes={data:prop_types_default.a.any.isRequired},IframeEmbed.__docgenInfo={description:"",methods:[],displayName:"IframeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Iframe=IframeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Iframe.js"]={name:"IframeEmbed",docgenInfo:IframeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Iframe.js"});const InfoBox_LeftWrapper=styled_components_browser_esm.default.figure`
  width: 100%;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  background: ${props=>props.theme.color.indyOffWhite};
  @media ${Styles.c.tablet} {
    box-sizing: border-box;
    width: 50%;
    margin: 0 16px 0 0;
    float: left;
  }
  @media ${Styles.c.laptop} {
    .article-premium & {
      margin-left: -16%;
    }
    &.subscribed {
      margin-left: -16%;
    }
  }
  &.article-tide {
    background: none;
    padding: 10px 0;
    border-top: 8px solid;
    @media ${Styles.c.mobileL} {
      box-sizing: border-box;
      width: 50%;
      margin: 0 16px 0 82px;
      float: left;
    }
  }
`,InfoBox_CenterWrapper=styled_components_browser_esm.default.figure`
  width: 100%;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  background: ${props=>props.theme.color.indyOffWhite};
  &.article-tide {
    width: initial;
    padding: 10px 0;
    background: none;
    @media ${Styles.c.mobileL} {
      border-top: 8px solid;
    }
  }
`,InfoBox_RightWrapper=styled_components_browser_esm.default.figure`
  width: 100%;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  background: ${props=>props.theme.color.indyOffWhite};
  @media ${Styles.c.tablet} {
    box-sizing: border-box;
    width: 50%;
    margin: 0 0 0 16px;
    float: right;
  }
  @media ${Styles.c.laptop} {
    .article-premium & {
      margin-right: -16%;
    }
    &.subscribed {
      margin-right: -16%;
    }
  }
  &.article-tide {
    background: none;
    border-top: 8px solid;
    padding: 10px 0;
    @media ${Styles.c.mobileL} {
      box-sizing: border-box;
      width: 50%;
      margin: 0 82px 0 0;
      float: right;
    }
  }
`,InfoBox_Title=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.indyPrimary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  margin: 0 0 10px;
  text-transform: uppercase;
  padding: 0;
  .article-tide & {
    color: ${props=>props.theme.color.editionRed};
    margin: 0;
    display: inline;
    font-family: 'Independent Sans Heavy', sans-serif;
    font-style: normal;
    letter-spacing: 1.5px;
    line-height: 20px;
    font-size: 1.1em;
  }
`,Subheader=styled_components_browser_esm.default.h3`
  font-weight: ${props=>props.theme.fontWeight.normal};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  margin: 0 0 10px;
  padding: 0;
`,InfoBox_Content=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.indyBaseLight1};
  font-size: 15px;
  > * {
    font-size: 15px;
    padding: 0;
    margin: 0;
    .article-tide & {
      font-weight: ${props=>props.theme.fontWeight.bold};
      font-family: ${props=>props.theme.fontFamily.secondaryFont};
      color: ${props=>props.theme.color.fontGrey};
      font-size: 1rem;
      line-height: 1.375rem;
      margin: 8px 0 10px 0;
      @media ${Styles.c.mobileL} {
        font-size: 1.0625rem;
        line-height: 1.5625rem;
      }
    }
  }
`;function InfoBox(props){const{className:className,data:{align:align,title:title,subHeadline:subHeadline,markup:markup},req:{cookies:cookies}}=props,Wrapper=(align=>{switch(align){case"left":return InfoBox_LeftWrapper;case"right":return InfoBox_RightWrapper;case"none":return InfoBox_CenterWrapper}return InfoBox_CenterWrapper})(align);return Object(jsx_runtime.jsxs)(Wrapper,{className:Object(classes.a)(className,cookies.subscriber?"subscribed":""),children:[Object(jsx_runtime.jsx)(InfoBox_Title,{children:title}),subHeadline&&Object(jsx_runtime.jsx)(Subheader,{children:subHeadline}),Object(jsx_runtime.jsx)(InfoBox_Content,{dangerouslySetInnerHTML:{__html:markup}})]})}InfoBox.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,req:prop_types_default.a.object.isRequired},InfoBox.__docgenInfo={description:"",methods:[],displayName:"InfoBox",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_InfoBox=Object(RequestProvider.withRequest)(InfoBox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/InfoBox.js"]={name:"InfoBox",docgenInfo:InfoBox.__docgenInfo,path:"app/component/library/Article/Embeds/InfoBox.js"});var icons_Refresh=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path id="d" d="M0 0h24v24H0z"/>\n        <g transform="translate(-3 -6)" fill-rule="evenodd">\n        <mask id="c" fill="white">\n        <use xlink:href="#d"/>\n        </mask>\n    <path d="m21 13.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-0.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0c1.36-1.34 2.04-2.91 2.04-4.89h2c0 1.98-0.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-0.02-12.58s9.14-3.47 12.65 0l2.73-2.81v7.12zm-8.5-2.12v4.25l3.5 2.08-0.72 1.21-4.28-2.54v-5h1.5z" fill="#fff" mask="url(#c)"/>\n</g>\n</svg>\n\n'}}))``;const AdWrapper=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.indyBase};
  &:before {
    content: '';
    width: 2px;
    height: 68px;
    margin-left: 29px;
    background-color: ${props=>props.theme.color.borderDark};
    z-index: 1;
    display: block;
  }
  & .mobile-only {
    @media ${Styles.c.laptop} {
      display: none;
    }
  }
`,Ad_Content=styled_components_browser_esm.default.div`
  text-align: center;
  padding: 20px;
  position: relative;
  background-color: ${props=>props.theme.color.bkg};
  border-style: solid;
  border-color: ${props=>props.theme.color.borderDark};
  border-width: 1px 0;
  font-weight: ${props=>props.theme.fontWeight.thin};
  strong {
    margin-top: 0;
  }
  &:before {
    content: 'Advertisment';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    color: ${props=>props.theme.color.fontGrey};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-weight: ${props=>props.theme.fontWeight.normal};
  }
`,Post=({children:children,className:className,data:data})=>Object(jsx_runtime.jsx)(AdWrapper,{className:className,"data-sort-time":data.created-1,id:"ad-"+data.id,children:Object(jsx_runtime.jsx)(Ad_Content,{children:children})});Post.propTypes={children:prop_types_default.a.node,className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired},Post.__docgenInfo={description:"",methods:[],displayName:"Post",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""}}};var LiveBlog_Ad=Post;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Ad.js"]={name:"Post",docgenInfo:Post.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Ad.js"});var moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment);var Embeds_BlockQuoteLiveBlog=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(Embeds_BlockQuote,{...props}))`
  border: 0;
  span {
    display: none;
  }
  blockquote {
    p {
      font-weight: ${props=>props.theme.fontWeight.normal};
      font-size: 26px;
    }
    &:before {
      content: '\\201C';
      font: 700 3.5em Georgia;
      color: ${props=>props.theme.color.indyPrimary};
      line-height: 1em;
      float: left;
      padding-right: 0.15em;
      margin-left: -0.09em;
    }
  }
`;const MarkupWrapper=styled_components_browser_esm.default.div`
  img {
    max-width: 100%;
  }
`;var LiveBlog_PostContent=({items:items})=>items.filter(x=>x.type).filter(removeEmptySnippet()).map((item,index)=>{switch(item.type){case"image":return Object(jsx_runtime.jsx)(Embeds_Image,{data:item.data,srcSet:[640]},item.id);case"H2":case"H3":case"H4":case"listbulleted":case"listnumbered":case"markup":return Object(jsx_runtime.jsx)(MarkupWrapper,{children:Object(jsx_runtime.jsx)(Article_Markup,{data:item.data},item.id)});case"twitter":return Object(jsx_runtime.jsx)(Embeds_Twitter,{data:item.data},item.id);case"blockquote":return Object(jsx_runtime.jsx)(Embeds_BlockQuoteLiveBlog,{data:item.data},item.id);case"youtube":case"video-youtube":return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:item.data},item.id);case"video-jwplayer":return Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:item.data},item.id);case"video-dugout":return Object(jsx_runtime.jsx)(DugoutPlayer,{data:item.data},item.id);case"instagram":return Object(jsx_runtime.jsx)(Embeds_Instagram,{data:item.data},item.id);case"facebook":return Object(jsx_runtime.jsx)(Embeds_Facebook,{data:item.data},item.id);case"html":return Object(jsx_runtime.jsx)(HTML.a,{data:item.data},item.id);case"article-link":return Object(jsx_runtime.jsx)(Embeds_ArticleLink,{data:item.data},item.id);case"iframe":return Object(jsx_runtime.jsx)(Embeds_Iframe,{data:item.data},item.id);default:return Object(jsx_runtime.jsxs)("p",{children:["Unhandled: ",item.type]},"unknownComp"+index)}});const PostWrapper=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.indyBase};
`,PostAnchor=styled_components_browser_esm.default.a`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 17px;
  line-height: 23px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  color: ${props=>props.theme.color.indyBaseLight1};
  display: flex;
  position: relative;
  align-items: center;
  padding: 24px 0 24px 20px;
  &:hover {
    color: ${props=>props.theme.color.borderDark};
    cursor: pointer;
  }
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border: 2px solid ${props=>props.theme.color.standardGrey};
    background: ${props=>props.theme.color.bkg};
    border-radius: 50%;
    z-index: 1;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    background: ${props=>props.theme.color.borderDark};
    left: 29px;
    top: 0;
  }
`,Post_PostContent=styled_components_browser_esm.default.div`
  padding: 20px;
  position: relative;
  border: 1px solid ${props=>props.theme.color.borderDark};
  font-weight: ${props=>props.theme.fontWeight.thin};
  strong {
    margin-top: 0;
  }
`,PostMeta=styled_components_browser_esm.default.div`
  display: flex;
  background-color: ${props=>props.theme.color.bkg};
  border: 1px solid ${props=>props.theme.color.borderDark};
  border-top: 0 none;
  padding: 20px 20px 19px;
`,TimeWrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,Author=styled_components_browser_esm.default.span`
  font-size: 14px;
  color: ${props=>props.theme.color.primary};
  font-weight: bold;
  &:after {
    display: inline-block;
    content: '|';
    color: ${props=>props.theme.color.fontGrey};
    margin: 0 5px;
  }
`,PostCreated=styled_components_browser_esm.default.span`
  font-size: 14px;
  color: ${props=>props.theme.color.fontGrey};
  font-weight: ${props=>props.theme.fontWeight.normal};
`,PostHeading=styled_components_browser_esm.default.h3`
  margin: 0 0 10px;
  line-height: 26px;
  font-size: 19px;
  font-weight: 300;
`,Post_Post=({data:data,json:json})=>{var _data$extra;return Object(jsx_runtime.jsxs)(PostWrapper,{"data-sort-time":data.created,"data-update-time":data.changed,id:"post-"+data.id,children:[Object(jsx_runtime.jsx)(PostAnchor,{href:"#post-"+data.id,children:Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"20",datetime:moment_default.a.unix(data.changed).toISOString(),locale:"en",children:data.changed})}),Object(jsx_runtime.jsxs)(Post_PostContent,{children:[Object(jsx_runtime.jsx)(PostHeading,{children:data.title}),Object(jsx_runtime.jsx)(LiveBlog_PostContent,{items:json})]}),Object(jsx_runtime.jsx)(PostMeta,{children:Object(jsx_runtime.jsxs)(TimeWrapper,{children:[(null===(_data$extra=data.extra)||void 0===_data$extra?void 0:_data$extra.authorName)&&Object(jsx_runtime.jsx)(Author,{children:data.extra.authorName}),Object(jsx_runtime.jsx)(PostCreated,{children:moment_default.a.unix(data.created).tz("Europe/London").format("D MMMM YYYY HH:mm")})]})})]})};Post_Post.propTypes={data:prop_types_default.a.object,json:prop_types_default.a.array};var LiveBlog_Post=Post_Post;const LiveBlog_Wrapper=styled_components_browser_esm.default.div`
  margin: 20px 0;
`,KeyPointsRoot=styled_components_browser_esm.default.aside`
  background-color: ${props=>props.theme.color.bkg};
  border: 1px solid ${props=>props.theme.color.borderDark};
  padding: 20px;

  @media ${Styles.c.maxLaptop} {
    /* The important tags are to override the sticky key points on narrow screens. */
    left: 0 ${props=>props.cleanAmp?"":"!important"};
    position: relative ${props=>props.cleanAmp?"":"!important"};
    top: 0 ${props=>props.cleanAmp?"":"!important"};
    width: auto ${props=>props.cleanAmp?"":"!important"};
  }

  @media ${Styles.c.laptop} {
    ${props=>props.isSubscribed&&`\n        margin-left: -332px;\n        position: absolute;\n        top: 0;\n        /* The important tag is because the stick-js plugin calculates the width & left positioning incorrectly. */\n        left: auto ${props.cleanAmp?"":"!important"};\n        width: 274px ${props.cleanAmp?"":"!important"};\n      `}
  }

  a {
    color: ${props=>props.theme.color.indyBase};
    font-weight: ${props=>props.theme.fontWeight.bold};
    font-size: ${props=>props.theme.fontSize.list};
  }
  h2 {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 14px;
    text-transform: uppercase;
    padding: 0;
    margin: 0 0 20px;
    @media ${Styles.c.tablet} {
      font-size: 16px;
    }
  }
  &.sticky-video {
    position: fixed;
    top: 292px ${props=>props.cleanAmp?"":"!important"};
  }
`,MpuWrapper=styled_components_browser_esm.default.div`
  display: none;
  @media ${Styles.c.laptop} {
    display: block;
  }
`,KeyPointList=styled_components_browser_esm.default.div`
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    position: relative;
    padding-bottom: 22px;
    padding-left: 31px;
    font-size: 14px;
    font-weight: 700;
    &:before {
      content: ' ';
      width: 19px;
      height: 19px;
      display: block;
      background: transparent
        url(https://www.independent.co.uk/img/icon-related-links.svg) no-repeat; // TODO replace this with proper icon
      background-size: 19px;
      border-radius: 50%;
      position: absolute;
      left: 2px;
      top: 0;
      z-index: 2;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 100%;
      background: ${props=>props.theme.color.indyOffWhite};
      left: 9px;
      top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      &:after {
        display: none;
      }
    }
    a:hover {
      color: ${props=>props.theme.color.indyPrimary};
    }
  }
`,UpdateButton=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("button",{className:props.className,update:"",...props,children:props.children}))`
  color: ${props=>props.theme.color.indyBase};
  background-color: ${props=>props.theme.color.highlight};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  border: 1px solid ${props=>props.theme.color.borderDark};
  display: flex;
  width: 100%;
  padding: 16px 20px 15px;
  font-size: 15px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  ${icons_Refresh} {
    margin-left: 10px;
    margin-top: -3px;
  }
  &.amp-active[update] {
    display: flex;
  }
`,Pagination=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("div",{className:props.className,...props,children:props.children}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${props=>props.theme.color.bkg};
  border: 1px solid ${props=>props.theme.color.borderDark};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  font-weight: ${props=>props.theme.fontWeight.bold};
  padding: 20px 20px 19px;
  margin-top: 30px;
  .shortcut > * {
    margin: 0 10px;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 30px;
    background: ${props=>props.theme.color.borderDark};
    left: 29px;
    top: -31px;
  }
`,LiveBlog=({article:article,data:{uuid:uuid},req:{cookies:cookies},res:{locals:{cleanAmp:cleanAmp}},posts:posts,paging:paging,keypoints:keypoints,keypointsTitle:keypointsTitle})=>{const isSubscribed=!!cookies.subscriber,pagination=[],keyPointsRootClassName=isSubscribed?"js-sticky":"";if(paging.total>paging.posts)for(let i=1;i<paging.totalPages;i++)paging.currentPage===i?pagination.push(Object(jsx_runtime.jsx)("span",{children:i},i)):pagination.push(Object(jsx_runtime.jsx)("a",{href:`?${cleanAmp?"amp&":""}page=${i}`,children:i},i));return Object(jsx_runtime.jsxs)(LiveBlog_Wrapper,{children:[keypoints&&Object(jsx_runtime.jsxs)(KeyPointsRoot,{cleanAmp:cleanAmp,className:keyPointsRootClassName,isSubscribed:isSubscribed,children:[Object(jsx_runtime.jsx)("h2",{children:keypointsTitle||"Key Points"}),Object(jsx_runtime.jsx)(KeyPointList,{dangerouslySetInnerHTML:{__html:keypoints}})]}),Object(jsx_runtime.jsxs)("amp-live-list",{id:uuid,"data-max-items-per-page":paging.posts,children:[Object(jsx_runtime.jsxs)(UpdateButton,{on:`tap:${uuid}.update`,children:["Show latest update ",Object(jsx_runtime.jsx)(icons_Refresh,{})]}),Object(jsx_runtime.jsx)("div",{items:"",children:posts.map(({data:data,postJson:postJson},index)=>Object(jsx_runtime.jsxs)(react.Fragment,{children:[Object(jsx_runtime.jsx)(LiveBlog_Post,{data:data,json:postJson}),(index+1)%3==0&&!cookies.subscriber&&Object(jsx_runtime.jsx)(LiveBlog_Ad,{className:8!==index?"mobile-only":"",data:data,children:8!==index?Object(jsx_runtime.jsx)(MPU.a,{id:"blog_mpu_"+Math.round((index+1)/3),"force-bulk":!0}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Ads_TaboolaInline,{cleanAmp:cleanAmp}),Object(jsx_runtime.jsx)(MpuWrapper,{children:Object(jsx_runtime.jsx)(MPU.a,{id:"blog_mpu_"+Math.round((index+1)/3),"force-bulk":!0})})]})})]},data.uuid))}),paging.total>paging.posts&&Object(jsx_runtime.jsxs)(Pagination,{pagination:"",children:[Object(jsx_runtime.jsxs)("div",{children:[paging.currentPage>1&&2===paging.currentPage&&Object(jsx_runtime.jsx)("a",{href:article.path,children:"Prev"}),paging.currentPage>2&&Object(jsx_runtime.jsx)("a",{href:"?page="+(paging.currentPage-1),children:"Prev"})]}),Object(jsx_runtime.jsx)("div",{className:"shortcut",children:pagination&&pagination}),Object(jsx_runtime.jsx)("div",{children:paging.currentPage<paging.totalPages&&Object(jsx_runtime.jsx)("a",{href:"?page="+(paging.currentPage+1),children:"Next"})})]})]})]})};LiveBlog.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,article:prop_types_default.a.object.isRequired,data:prop_types_default.a.object.isRequired,keypoints:prop_types_default.a.string.isRequired,keypointsTitle:prop_types_default.a.string,posts:prop_types_default.a.array,paging:prop_types_default.a.object},LiveBlog.defaultProps={keypointsTitle:"",posts:[],paging:{total:0,posts:0}},LiveBlog.__docgenInfo={description:"",methods:[],displayName:"LiveBlog",props:{keypointsTitle:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},posts:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},paging:{defaultValue:{value:"{\n  total: 0,\n  posts: 0,\n}",computed:!1},type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""},article:{type:{name:"object"},required:!0,description:""},data:{type:{name:"object"},required:!0,description:""},keypoints:{type:{name:"string"},required:!0,description:""}}};var Embeds_LiveBlog=Object(RequestProvider.withRequest)(LiveBlog);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog.js"]={name:"LiveBlog",docgenInfo:LiveBlog.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog.js"});const MarkupEmbed=({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:markup}});MarkupEmbed.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,isService:prop_types_default.a.bool};var Embeds_MarkupEmbed=Object(styled_components_browser_esm.default)(MarkupEmbed)`
  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: ${props=>props.isService?"20px":"10px"};
      margin-top: ${props=>props.isService?"20px":"0px"};
      line-height: ${props=>props.isService?"28px":"1.2em"};
      padding-left: 20px;
      position: relative;
      font-size: 19px;
      &:before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${props=>props.theme.color.contrastDarker};
        position: absolute;
        left: 0;
        top: 5px;
      }
      a {
        color: ${props=>props.theme.color.primary};
      }
    }
  }
`;const NumberBox_WrapperDefaults=styled_components_browser_esm.default.figure`
  padding: 16px;
  box-sizing: border-box;
  border-left: 1px solid #979797;
  border-right: 1px solid #979797;
  .article-premium & {
    @media ${Styles.c.laptop} {
      margin-right: -16%;
    }
  }
  &.article-tide {
    margin: 16px 40px;
  }
`,NumberBox_LeftWrapper=Object(styled_components_browser_esm.default)(NumberBox_WrapperDefaults)`
  width: 100%;
  margin: 0;
  @media ${Styles.c.tablet} {
    width: 224px;
    margin: 0 16px 16px 0;
    float: left;
  }
  &.article-tide {
    @media ${Styles.c.mobileL} {
      margin: 0 16px 16px 82px;
      float: left;
      width: 224px;
    }
  }
  &.subscribed {
    @media ${Styles.c.laptop} {
      margin-left: -16%;
    }
  }
`,NumberBox_RightWrapper=Object(styled_components_browser_esm.default)(NumberBox_WrapperDefaults)`
  width: 100%;
  margin: 0;
  @media ${Styles.c.tablet} {
    width: 224px;
    margin: 0 0 16px 16px;
    float: right;
  }
  .article-tide & {
    @media ${Styles.c.mobileL} {
      margin: 0 82px 16px 16px;
      width: 224px;
      float: right;
    }
  }
  &.subscribed {
    @media ${Styles.c.laptop} {
      margin-right: -16%;
    }
  }
`,CentreWrapper=Object(styled_components_browser_esm.default)(NumberBox_WrapperDefaults)`
  @media ${Styles.c.tablet} {
    width: 224px;
    margin: auto;
  }
`,NumberBox_Number=styled_components_browser_esm.default.h2`
  color: ${props=>props.theme.color.indyPrimary};
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  text-transform: lowercase;
  font-size: 64px;
  line-height: 1em;
  margin: 0;
  &.number-length-5,
  &.number-length-6 {
    font-size: 54px;
  }
  &.number-length-7,
  &.number-length-8 {
    font-size: 48px;
  }
  &.number-length-9,
  &.number-length-10 {
    font-size: 34px;
  }
  .article-tide & {
    font-size: 44px;
    line-height: 1;
  }
`,NumberBox_Content=styled_components_browser_esm.default.figcaption`
  font-weight: ${props=>props.theme.fontWeight.bold};
  font-size: 19px;
  line-height: 1em;
  > * {
    font-size: 19px;
    line-height: 1em;
    padding: 0;
    margin: 0;
    .article-tide & {
      line-height: 1.3;
    }
  }
`;function NumberBox(props){const{className:className,data:{align:align,title:title,markup:markup},req:{cookies:cookies}}=props,Wrapper=(align=>{switch(align){case"left":return NumberBox_LeftWrapper;case"right":return NumberBox_RightWrapper;case"centre":return CentreWrapper}return NumberBox_LeftWrapper})(align),titleSize=title?title.length:0,titleLength=titleSize>10?10:titleSize;return Object(jsx_runtime.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?" subscribed":""}`,children:[Object(jsx_runtime.jsx)(NumberBox_Number,{className:"number-length-"+titleLength,children:title}),Object(jsx_runtime.jsx)(NumberBox_Content,{dangerouslySetInnerHTML:{__html:markup}})]})}NumberBox.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,req:prop_types_default.a.object.isRequired},NumberBox.__docgenInfo={description:"",methods:[],displayName:"NumberBox",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_NumberBox=Object(RequestProvider.withRequest)(NumberBox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/NumberBox.js"]={name:"NumberBox",docgenInfo:NumberBox.__docgenInfo,path:"app/component/library/Article/Embeds/NumberBox.js"});var withCleanAmp=__webpack_require__(211);const Related_Wrapper=styled_components_browser_esm.default.aside`
  float: right;
  margin-bottom: 20px;
  @media ${Styles.c.tablet} {
    width: 50%;
    margin-left: 20px;
  }
  &.align-left {
    float: left;
    @media ${Styles.c.tablet} {
      margin-left: unset;
      margin-right: 20px;
    }
  }
`,Headline=styled_components_browser_esm.default.h2`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 20px;
  letter-spacing: 1.14px;
  display: table;
  margin: auto;
  text-transform: uppercase;
  &:after {
    content: '';
    display: block;
    width: 113%;
    height: 4px;
    margin: 2px 0 8px -6.5%;
    mix-blend-mode: multiply;
    background: ${props=>props.theme.color.primary};
  }
`,Related_Content=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.contrastDarker};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  &:hover {
    color: ${props=>props.theme.color.primary};
  }
`,ItemList=styled_components_browser_esm.default.li`
  margin-bottom: 10px;
  line-height: 1.2em;
  padding-left: 20px;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props=>props.theme.color.primary};
    position: absolute;
    left: 0;
    top: 5px;
  }
`,List=styled_components_browser_esm.default.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`,RelatedItems=Object(styled_components_browser_esm.default)(({className:className,links:links})=>Object(jsx_runtime.jsx)(List,{className:["article-container",className].join(" "),children:links.filter(link=>link&&Object.keys(link).length>0).map((link,index)=>Object(jsx_runtime.jsx)(ItemList,{className:"related-item",children:Object(jsx_runtime.jsx)(Related_Content,{href:link.href,target:"_blank","data-vars-event-id":"c29","data-vars-item-name":"related - "+link.href,children:link.title})},index))}))``,Related=({data:{align:align,title:title,links:links}})=>Object(jsx_runtime.jsxs)(Related_Wrapper,{className:"align-"+align,children:[Object(jsx_runtime.jsx)(Headline,{children:title}),Object(jsx_runtime.jsx)(RelatedItems,{links:links})]});Related.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string};const RelatedWithScript=Object(withScript.a)(Related)`
const links = document.querySelectorAll('a[href]');
links.forEach(async (link) => {
  link.addEventListener('click', async () => {
    const event_name = 'Sponsored Features Link Click';
    const articleId = await AMP.getState('digitalData.article_id');
    const position = link.parentElement.dataset.position;

    const reportSuiteID = '${props=>{var _props$res$locals$con;return null===(_props$res$locals$con=props.res.locals.configuration.adobe)||void 0===_props$res$locals$con?void 0:_props$res$locals$con.reportSuiteId}}';
    const cacheBuster =
      's' + Math.floor(10000000000000 + Math.random() * 90000000000000);
    const queryParameters = [
      '?AQB=1',
      'ndh=0',
      't=' +
        (function () {
          let today = new Date();
          return (
            today.getDate() +
            '/' +
            today.getMonth() +
            '/' +
            today.getFullYear() +
            ' ' +
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds() +
            ' ' +
            today.getDay() +
            ' ' +
            today.getTimezoneOffset()
          );
        })(),
      'g=' + location.href.substring(0, 255),
      '-g=' + location.href.substring(255),
      'events=event31',
      'c9=' + articleId,
      'c42=RHR Sponsored Features Component - Position ' + position,
      'c51=' + position,
      'v42=RHR Sponsored Features Component - Position ' + position,
      'pe=lnk_o',
      'pev2=' + event_name,
      'k=N',
      'AQE=1',
    ].join('&');

    let analyticsURL = [
      'https://ssc.standard.co.uk/b/ss/',
      reportSuiteID,
      '/1/JS-2.17.0/',
      cacheBuster,
      queryParameters,
    ].join('');

    const img = document.createElement('amp-img');
    img.setAttribute('src', encodeURI(analyticsURL));
    img.setAttribute('layout', 'fixed');
    img.setAttribute('width', '1');
    img.setAttribute('height', '1');
    img.style.position = 'absolute';
    document.body.appendChild(img);
  });
});
`,RelatedArticleList=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(RelatedWithScript,{...props}):Object(jsx_runtime.jsx)(Related,{...props});RelatedArticleList.propTypes={...Related.propTypes,cleanAmp:prop_types_default.a.bool};var Embeds_Related=Object(withCleanAmp.a)(RelatedArticleList),ScoreBoard=__webpack_require__(918),ScoreBoard_default=__webpack_require__.n(ScoreBoard);const Scoreboard_Root=styled_components_browser_esm.default.div`
  margin: 0 0 16px 0;
`,Scoreboard_ScoreBoard=props=>Object(jsx_runtime.jsx)(Scoreboard_Root,{children:Object(jsx_runtime.jsx)(ScoreBoard_default.a,{...props,show_crests:"true",show_logo:"false",show_title:"false"})});Scoreboard_ScoreBoard.__docgenInfo={description:"",methods:[],displayName:"ScoreBoard"};var Scoreboard=Scoreboard_ScoreBoard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Scoreboard.js"]={name:"ScoreBoard",docgenInfo:Scoreboard_ScoreBoard.__docgenInfo,path:"app/component/library/Article/Embeds/Scoreboard.js"});const Table=Object(styled_components_browser_esm.default)(({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,children:Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})}))`
  figure {
    margin: 0;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 16px;
  }
  table {
    margin-bottom: 16px;
    line-height: 1.2em;
    display: block;
    overflow-x: auto;
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
      background: ${props=>props.theme.color.primary};
      color: ${props=>props.theme.color.contrastLight};
      th {
        padding: 10px 8px 8px;
        min-width: 154px;
        text-align: left;
        font-weight: normal;
        border: 1px solid ${props=>props.theme.color.indyOffWhite};
      }
    }
    tbody {
      td,
      th {
        padding: 10px 8px 8px;
        border: 1px solid rgba(148, 12, 25, 0.3);
        color: ${props=>props.theme.color.font};
        font-weight: normal;
        text-align: left;
      }
      tr {
        &:nth-child(even) {
          background-color: ${props=>props.theme.color.contrastLight};
        }
        &:nth-child(odd) {
          background-color: #f2f2f2;
        }
      }
    }
  }
`;Table.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object};var Embeds_Table=Table,SocialShare=__webpack_require__(347),Article_SocialShare=__webpack_require__(346);const ReuseContentLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
  display: block;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  width: 100%;

  @media ${Styles.c.tablet} {
    margin-bottom: 0;
    width: auto;
  }
`,ShowCommentsButton=styled_components_browser_esm.default.button`
  background: ${props=>props.theme.color.primary}
    url(/img/icons/arrow-down.svg) right 11px center no-repeat;
  border-radius: 24px;
  color: ${props=>props.theme.color.contrastLight};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  padding: 16px 46px 16px 16px;
`,StyledSocialShare=Object(styled_components_browser_esm.default)(Article_SocialShare.a)`
  display: none;
  padding: 0;

  @media ${Styles.c.tablet} {
    display: block;
  }
`,ShareBarSyndication_Wrapper=styled_components_browser_esm.default.aside`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  margin-bottom: 16px;

  @media ${Styles.c.tablet} {
    flex-direction: row;
  }
`,ShareBarSyndication=({article:article,configuration:configuration})=>{const ReuseContentHref="/syndication/reuse-permission-form?url="+article.path;return Object(jsx_runtime.jsxs)(ShareBarSyndication_Wrapper,{children:[Object(jsx_runtime.jsx)(StyledSocialShare,{article:article,configuration:configuration}),Object(jsx_runtime.jsx)(ShowCommentsButton,{type:"button",children:"Show comments"}),Object(jsx_runtime.jsx)(ReuseContentLink,{href:ReuseContentHref,children:"Reuse content"})]})};ShareBarSyndication.propTypes={article:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired},ShareBarSyndication.__docgenInfo={description:"",methods:[],displayName:"ShareBarSyndication",props:{article:{type:{name:"object"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var Article_ShareBarSyndication=Object(RequestProvider.withRequest)(ShareBarSyndication);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ShareBarSyndication.js"]={name:"ShareBarSyndication",docgenInfo:ShareBarSyndication.__docgenInfo,path:"app/component/library/Article/ShareBarSyndication.js"});const Topics_Wrapper=styled_components_browser_esm.default.aside`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 16px;
  margin-bottom: 16px;
`,TopicsTitle=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.fontMedium};
  line-height: 1.39;
`,TopicsListItem=styled_components_browser_esm.default.a`
  display: inline-block;
  text-transform: capitalize;
  line-height: 20px;
  color: ${props=>props.theme.color.primary};
  margin-right: 6px;
  &:before {
    display: inline-block;
    content: '|';
    font-weight: 300;
    margin: 0 6px 0 0;
    color: ${props=>props.theme.color.fontMedium};
  }
  &:hover {
    color: ${props=>props.theme.color.hover};
  }
`,WrapperInsider=Object(styled_components_browser_esm.default)(Topics_Wrapper)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 24px 8px 0 0;
  ${TopicsTitle} {
    display: none;
  }
  ${TopicsListItem} {
    border: 1px solid #1e1e1c;
    color: ${props=>props.theme.color.secondary};
    padding: 12px 24px;
    margin: 0 8px 16px;
    font-weight: 400;
    &:before {
      display: none;
    }
  }
`,Topics=({className:className,topics:topics,style:style="default"})=>{const ThemedTopicWrapper=Object(helper.b)(style,Topics_Wrapper,{insider:WrapperInsider});return Object(jsx_runtime.jsxs)(ThemedTopicWrapper,{className:className,children:[Object(jsx_runtime.jsx)(TopicsTitle,{children:"More About: "}),topics.map(({name:name,path:path},index)=>Object(jsx_runtime.jsx)(TopicsListItem,{href:path,dangerouslySetInnerHTML:{__html:name}},index))]})};Topics.propTypes={className:prop_types_default.a.string,topics:prop_types_default.a.array.isRequired,style:prop_types_default.a.string.isRequired},Topics.__docgenInfo={description:"",methods:[],displayName:"Topics",props:{style:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},topics:{type:{name:"array"},required:!0,description:""}}};var Article_Topics=Topics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Topics.js"]={name:"Topics",docgenInfo:Topics.__docgenInfo,path:"app/component/library/Article/Topics.js"});const ContentWrapper_Wrapper=styled_components_browser_esm.default.div`
  width: 100%;
  flex-grow: 1;
  justify-content: flex-start;
  .insider-social-share {
    &:before {
      background: ${props=>props.theme.color.contrastDarker};
      display: block;
      border-style: solid;
      border-radius: 40% 50%/10% 90%;
      margin-bottom: 16px;
      content: '';
      width: 100%;
      height: 1px;
    }
  }
  &.sponsored-article {
    img,
    video {
      max-width: 602px;
      height: auto;
      width: 100%;
    }
    iframe {
      max-width: 602px;
      max-height: 400px;
    }
  }
`,ContentWrapper_MpuWrapper=styled_components_browser_esm.default.div`
  &.pb-20 {
    padding-bottom: 20px;
  }
  @media ${Styles.c.laptop} {
    display: none;
  }
`,Mpu1MarkupAd=({cleanAmp:cleanAmp,isBest:isBest,className:className})=>Object(jsx_runtime.jsx)(ContentWrapper_MpuWrapper,{className:className,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"mpu1",cleanAmp:cleanAmp,width:320,height:600,blockAds:!1,isBest:isBest,"size-key":"DOUBLE_OR_SINGLE_MPU",className:"mobile-only",ampSizes:"300x250,320x480,300x600","force-bulk":!0,ampSizeValidation:!1})});Mpu1MarkupAd.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,isBest:prop_types_default.a.bool};const ThirdPartyAmp=({id:id,isBest:isBest})=>Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:id,isBest:isBest,ampSizes:"300x1",cleanAmp:!0,thirdPartyAd:!0,ampSizeValidation:!1});ThirdPartyAmp.propTypes={id:prop_types_default.a.number.isRequired,isBest:prop_types_default.a.bool};const ThirdPartyWrapper=styled_components_browser_esm.default.div`
  &.mobile-only {
    display: block;
    @media ${Styles.c.laptop} {
      display: none;
    }
  }

  &.desktop-only {
    display: none;
    @media ${Styles.c.laptop} {
      display: block;
    }
  }
`,ApesterWithToken=(WrappedComponent=Ads_Apester,()=>Object(jsx_runtime.jsx)(TokenProviderWithRequest,{children:Object(jsx_runtime.jsx)(WrappedComponent,{})}));var WrappedComponent;const embedMap={blockquote:Embeds_BlockQuote,brightcove:Embeds_Brightcove,facebook:Embeds_Facebook,gallery:Embeds_Gallery,image:Embeds_Image,H2:Embeds_MarkupEmbed,H3:Embeds_MarkupEmbed,H4:Embeds_MarkupEmbed,H5:Embeds_MarkupEmbed,H6:Embeds_MarkupEmbed,html:HTML.a,infobox:Embeds_InfoBox,iframe:Embeds_Iframe,instagram:Embeds_Instagram,listbulleted:Embeds_MarkupEmbed,listnumbered:Embeds_MarkupEmbed,numberbox:Embeds_NumberBox,playbuzz:Embeds_Playbuzz,readMore:Article_ReadMore,related:Embeds_Related,table:Embeds_Table,twitter:Embeds_Twitter,"video-youtube":Embeds_Youtube,"video-dugout":DugoutPlayer,"dugout-video":DugoutPlayer,youtube:Embeds_Youtube,"article-link":Embeds_ArticleLink},isValidToCount=markup=>{return(str=markup,str.replace(/(<([^>]+)>)/gi,"")).length>=100;var str},ContentWrapper=({adToggle:adToggle,style:style,domain:domain,article:article,cleanAmp:cleanAmp,isService:isService,configuration:configuration,isBest:isBest,isInsider:isInsider,req:{query:query}})=>{var _article$extra,_article$body,_content;const{extra:{products:products,verdict:verdict},hierarchy:hierarchy,liveblog:liveblog}=article,blockAds=(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds)||(null==article?void 0:article.sensitive)||isBest,isLazy=Object.keys(query).includes("__lazy__");let paragraphCount=0,mpuBottomId=0,thirdPartyId=1,mpu1Displaying=!1,holdAd=!1,thirdPartyDesktopDisplaying=!1,thirdPartyMobileDisplaying=!1,doubleAdBlocker=!1,content=null===(_article$body=article.body)||void 0===_article$body?void 0:_article$body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).reduce((acc,snippet,index)=>{const key=`${snippet.type}${index}`;switch(snippet.type){case"markup":if(!(3!==index||article.sensitive||isBest||isService)){if(2===paragraphCount&&(mpu1Displaying=!0,acc.push(Object(jsx_runtime.jsx)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,className:"pb-20"},"mpu1-markup-ad"))),acc.push(Object(jsx_runtime.jsx)(Ads_ArticlePrompt,{},"article-prompt"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)),!(3!==paragraphCount&&4!==paragraphCount||isBest||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;3===paragraphCount?(thirdPartyDesktopDisplaying=!0,thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount&&(thirdPartyMobileDisplaying=!0,thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"),acc.push(Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,thirdPartyAd:!0,"force-bulk":!isLazy})},"thirdparty0"+thirdPartyId))}return isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),acc}if(!(2!==paragraphCount||holdAd||doubleAdBlocker||isService||mpu1Displaying))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(react.createElement)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,key:"mpu1-markup-ad"}),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(!((3!==paragraphCount||thirdPartyDesktopDisplaying)&&(4!==paragraphCount||thirdPartyMobileDisplaying)&&10!==paragraphCount||isBest||holdAd||isService||doubleAdBlocker||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;return 3===paragraphCount?(thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount?(thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"):10===paragraphCount&&(thirdPartyId++,thirdPartyClasses="teads",sizeKey="THIRD_PARTY_ARTICLE_BODY"),doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,ampSizeValidation:!1,thirdPartyAd:!0,"force-bulk":!0})},"thirdparty0"+thirdPartyId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]}if(!(6!==paragraphCount||isBest||article.sensitive||holdAd||isService||article.isCommercial||isInsider||doubleAdBlocker))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(Ads_TaboolaInline,{},"Taboola-Inline"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(!(8!==paragraphCount||holdAd||isBest||isService||article.isCommercial||isInsider||blockAds||doubleAdBlocker))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,cleanAmp?Object(jsx_runtime.jsx)(Ad.a,{id:"triple-lift",width:300,height:297,type:"triplelift",src:"https://ib.3lift.com/ttj?inv_code=esi_independent_inarticle_AMP"},"triple-lift"):Object(jsx_runtime.jsx)(ApesterWithToken,{},"apester"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(paragraphCount%4==0&&paragraphCount>=12&&!isService&&!holdAd&&!isBest&&!doubleAdBlocker)return mpuBottomId++,doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ContentWrapper_MpuWrapper,{children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"bottom_mpu_"+mpuBottomId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,className:"mobile-only","force-bulk":!0})},"bottom_mpu_"+mpuBottomId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(0===index&&!isInsider){const re=/(?<=>)[^<\s]/,{markup:markup}=snippet.data,matched=markup.match(re);if(matched){const position=matched.index,letter=matched[0],markupMinusLetter=markup.substr(0,position)+markup.substr(position+1);return[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:{...snippet.data,markup:markupMinusLetter},polar:article.polar,prefix:Object(jsx_runtime.jsx)(BigLetter,{letter:letter}),style:style},key)]}}return isValidToCount(snippet.data.markup)&&!holdAd?(paragraphCount++,doubleAdBlocker=!1):isValidToCount(snippet.data.markup)&&holdAd&&((paragraphCount=>paragraphCount>1&&paragraphCount<5||10===paragraphCount||6===paragraphCount||paragraphCount%4==0&&paragraphCount>=8)(paragraphCount)?((3===paragraphCount&&thirdPartyDesktopDisplaying||4===paragraphCount&&thirdPartyMobileDisplaying)&&(holdAd=!1,paragraphCount++),holdAd=!1):(holdAd=!1,paragraphCount++)),[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,polar:article.polar,isService:isService,style:style},key)];case"listbulleted":case"listnumbered":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data,isService:isService},key)]}case"video-jwplayer":return[...acc,Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data,isHero:article.isLiveBlog,isCommercial:article.isCommercial,isSensitive:article.sensitive},key)];case"image":case"gallery":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{srcSet:[320,640],data:snippet.data},key)]}case"HR":return[...acc,Object(jsx_runtime.jsx)("hr",{},key)];default:{const Component=embedMap[snippet.type];return Component?(holdAd=!0,[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]):(console.log("TODO: define component type",snippet.type),[...acc,Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},key)])}}},[]);null===(_content=content)||void 0===_content||_content.splice(Math.ceil(content.length/2),0,Object(jsx_runtime.jsx)(library_NewsletterSignup,{domain:domain,data:article,configuration:configuration},"newsletter")),(hierarchy||[]).length&&"sport"===hierarchy[0].path.split("/")[1]&&content.unshift(Object(jsx_runtime.jsx)(Ads_Fresh8,{},"Fresh8")),products&&content.push(Object(jsx_runtime.jsx)(Best_Products,{products:products},"Products")),verdict&&content.push(Object(jsx_runtime.jsx)(Best_Verdict,{verdict:verdict},"Verdict")),cleanAmp&&(content=((content,isBest)=>{const markupIndexesArr=content.map(({key:key})=>key).reduce((acc,key,index)=>(null==key?void 0:key.startsWith("markup"))?[...acc,index]:acc,[]),fourthParaIndex=markupIndexesArr[3],tenthParaIndex=markupIndexesArr[9],teadsIndexes=[...fourthParaIndex?[fourthParaIndex]:[],...tenthParaIndex?[tenthParaIndex]:[]];let thirdPartyIndex=1;return content.reduce((acc,item,index)=>{if(teadsIndexes.includes(index)){const adId="thirdparty0"+thirdPartyIndex;return thirdPartyIndex+=1,[...acc,item,Object(jsx_runtime.jsx)(ThirdPartyAmp,{id:adId,isBest:isBest},adId)]}return[...acc,item]},[])})(content,isBest));const scoreboard=Object(utils_scoreboard.scoreboardData)(article);return Object(jsx_runtime.jsxs)(ContentWrapper_Wrapper,{className:article.polar?"sponsored-article":"",children:[scoreboard&&Object(jsx_runtime.jsx)(Scoreboard,{scoreboard:scoreboard,cleamAmp:cleanAmp}),content,liveblog&&Object(jsx_runtime.jsx)(Embeds_LiveBlog,{...liveblog}),isInsider?Object(jsx_runtime.jsx)(SocialShare.a,{className:"insider-social-share",article:article,configuration:configuration}):!isService&&Object(jsx_runtime.jsx)(Article_ShareBarSyndication,{}),article.topics&&Object(jsx_runtime.jsx)(Article_Topics,{topics:article.topics,style:style}),"insider"!==style&&!isService&&!blockAds&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!article.isCommercial&&adToggle(ads.b)&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle1,{}),Object(jsx_runtime.jsx)(Ads_PartnerAds,{id:"partners"}),!article.isCommercial&&adToggle(ads.b)&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle2,{})]})]})};ContentWrapper.propTypes={style:prop_types_default.a.string,articleBodyConfig:prop_types_default.a.object.isRequired,adToggle:prop_types_default.a.func.isRequired,article:prop_types_default.a.object.isRequired,domain:prop_types_default.a.object,configuration:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,req:prop_types_default.a.object.isRequired,isBest:prop_types_default.a.bool,isService:prop_types_default.a.bool,isInsider:prop_types_default.a.bool};var Article_ContentWrapper=Object(RequestProvider.withRequest)(ContentWrapper);const Breadcrumb=Object(styled_components_browser_esm.default)(({className:className,hierarchy:hierarchy})=>Object(jsx_runtime.jsx)("nav",{className:className,children:hierarchy.map(({path:path,name:name},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:name},index))}))`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  text-transform: uppercase;
  text-align: left;
  font-size: 12px;
  line-height: normal;
  padding: 16px 0 16px 16px;
  @media ${Styles.c.laptop} {
    padding: 16px 0;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: ${props=>props.theme.color.fontCapsule};
    &:after {
      color: ${props=>props.theme.color.fontCapsule};
      content: '›';
      margin-left: 4px;
      margin-right: 4px;
      font-weight: 100;
      font-size: 21px;
      @media ${Styles.c.laptop} {
        font-size: 22px;
      }
    }
    &:last-child:after {
      display: none;
    }
    &:last-child {
      color: ${props=>props.theme.color.contrastDarker};
      display: inline-block;
      border-bottom: 1px solid ${props=>props.theme.color.primary};
    }
    &:hover {
      color: ${props=>props.theme.color.hover};
    }
  }
`;Breadcrumb.propTypes={hierarchy:prop_types_default.a.any.isRequired};var Article_Breadcrumb=Breadcrumb;const Headline_Headline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("h1",{className:className,children:children}))`
  color: ${props=>props.theme.color.contrastDarker};
  font-family: ${props=>props.theme.fontFamily.standardDisplay};
  font-size: 30px;
  line-height: 42px;
  margin: 0 0 8px;
  @media ${Styles.c.laptop} {
    font-size: 50px;
    line-height: 75px;
    margin: 0;
  }
`;Headline_Headline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Headline=Headline_Headline,heroType=__webpack_require__(65);const PolarImage_ImageWrapper=styled_components_browser_esm.default.figure`
  margin: 0 0 20px 0;

  & img {
    max-width: 100%;
    height: auto;
  }
`,PolarImage_Caption=styled_components_browser_esm.default.figcaption`
  color: ${props=>props.theme.color.fontLight};
  text-align: left;
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  line-height: 20px;
  padding: 6px 0;
`;function PolarImage(){return Object(jsx_runtime.jsxs)(PolarImage_ImageWrapper,{children:[Object(jsx_runtime.jsx)("img",{id:"native-content-media",src:"",alt:""}),Object(jsx_runtime.jsxs)(PolarImage_Caption,{children:[Object(jsx_runtime.jsx)("h4",{id:"native-content-media-caption"}),Object(jsx_runtime.jsx)("h4",{id:"native-content-media-credits"})]})]})}PolarImage.__docgenInfo={description:"",methods:[],displayName:"PolarImage"};var ThirdParty_PolarImage=PolarImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/ThirdParty/PolarImage.js"]={name:"PolarImage",docgenInfo:PolarImage.__docgenInfo,path:"app/component/library/ThirdParty/PolarImage.js"});const PersistentPlayer=({className:className,isLiveBlog:isLiveBlog,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,id:"indy-top-container-wrapper",cleanAmp:cleanAmp,children:Object(jsx_runtime.jsx)("div",{className:"video-top-container video",children:Object(jsx_runtime.jsx)("div",{className:"video-top-container-inner",children:Object(jsx_runtime.jsx)("div",{className:"video-hero-wrapper",children:Object(jsx_runtime.jsx)("div",{className:"video-hero-wrapper-inner",children:Object(jsx_runtime.jsx)("figure",{className:classnames_default()("video-hero","video-hero-video",{liveblog:isLiveBlog}),children:Object(jsx_runtime.jsxs)("div",{className:"video-sticky-video",children:[children,Object(jsx_runtime.jsx)("a",{id:"video-popout-close",className:"video-popout-close",children:"Close"})]})})})})})})});PersistentPlayer.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired,isLiveBlog:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},PersistentPlayer.defaultProps={isLiveBlog:!1};const StyledPersistentPlayer=Object(styled_components_browser_esm.default)(PersistentPlayer)`
  @keyframes slidedown-video {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  .video-top-container-inner {
    position: relative;
  }
  .video-popout-close {
    display: none;
  }
  .video-hero-wrapper-inner {
    display: block;
  }
  .video-hero-video {
    width: 100%;
    transition: height 0.2s;
    margin: 0;
  }

  .video-hero-wrapper.sticky-video {
    width: 316px;
    margin-left: -332px;
    transition: margin-left 0.3s, top 0.3s 0.1s;
    position: fixed;
    top: 49px;
  }

  .video-top-container.video.sticky:not(.closed) {
    .video-hero-video {
      left: auto;
      position: static;
      right: 0;
      width: 100%;

      &.liveblog {
        margin-left: -12px;
      }

      @media ${Styles.c.tablet} {
        position: absolute;
        width: 328px;
      }

      @media ${Styles.c.laptop} {
        top: 110px;
        right: 0;
        &.liveblog {
          right: -360px;
        }
      }

      .video-sticky-video {
        background-color: ${props=>props.theme.color.contrastLight};
        top: 86px;
        width: 100%;
        position: fixed;
        box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.3);
        left: auto;
        z-index: 9;

        @media ${Styles.c.tablet} {
          /* This is to override top-menu.js on widescreen. */
          top: ${props=>props.cleanAmp?"110px":"110px !important"};
          width: 328px;
          animation: slidedown-video 0.4s;
        }

        @media ${Styles.c.laptop} {
          /* This is to override top-menu.js on widescreen. */
          top: ${props=>props.cleanAmp?"49px":"49px !important"};
        }
      }
    }

    .video-popout-close {
      cursor: pointer;
      display: none;
      padding: 4px 8px 3px;
      font-size: ${props=>props.theme.fontSize.submenu};
      font-family: ${props=>props.theme.fontFamily.secondaryFont};
      color: ${props=>props.theme.color.contrastDark};
      line-height: ${props=>props.theme.fontSize.submenu};
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      box-sizing: border-box;
      &:after {
        content: '\\2715';
        font-size: ${props=>props.theme.fontSize.small};
        padding-left: 4px;
        display: flex;
        align-items: center;
      }
      &.shown {
        display: flex;
      }
    }
  }
`;var Article_PersistentPlayer=Object(withCleanAmp.a)(StyledPersistentPlayer);const Hero=({className:className,hero:hero,theme:theme="default",isCommercial:isCommercial=!1,isSensitive:isSensitive=!1})=>{if(!Array.isArray(hero))return null;return(hero=>{if(!hero)return null;switch(hero.type){case heroType.e:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(Embeds_JWPlayer,{className:className,data:hero.data,isHero:!0,isCommercial:isCommercial,isSensitive:isSensitive})});case heroType.b:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(DugoutPlayer,{className:className,data:hero.data})});case heroType.a:return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:hero.data});case heroType.g:return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:hero.data});case heroType.d:return Object(jsx_runtime.jsx)(Embeds_Image,{data:hero.data,srcSet:[320,640,990],theme:theme,isHero:!0});case heroType.c:return Object(jsx_runtime.jsx)(Embeds_Gallery,{data:hero.data,srcSet:[320,640,990],isHero:!0});case heroType.f:return Object(jsx_runtime.jsx)(ThirdParty_PolarImage,{});default:return null}})(Object(services_article.c)(hero))};Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{theme:{defaultValue:{value:"'default'",computed:!1},required:!1},isCommercial:{defaultValue:{value:"false",computed:!1},required:!1},isSensitive:{defaultValue:{value:"false",computed:!1},required:!1}}};var Article_Hero=Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Hero.js"]={name:"Hero",docgenInfo:Hero.__docgenInfo,path:"app/component/library/Article/Hero.js"});const Subheadline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:children}}))`
  font-size: 18px;
  line-height: 27px;
  margin: 0 0 16px;
  color: ${props=>props.theme.color.fontMedium};
  @media ${Styles.c.laptop} {
    font-size: 24px;
    line-height: 36px;
  }
  p {
    margin: 0 0 16px;
    font-size: 18px;
    line-height: 27px;
    @media ${Styles.c.laptop} {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;Subheadline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Subheadline=Subheadline;const Header_ContentWrapper=styled_components_browser_esm.default.div``,Inner=styled_components_browser_esm.default.div`
  margin: 0 auto;
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: ${props=>props.isService?"0 213px 0 160px":"0 16px"};
    box-sizing: border-box;
  }
`,HeaderWrapper=styled_components_browser_esm.default.header`
  background-color: ${props=>props.isVideo||props.isLiveBlog?"#fbfbfa":"transparent"};
  box-shadow: ${props=>props.isVideo||props.isLiveBlog?"0 1px 0 0 "+props.theme.color.navGrey:"0"};
  margin-bottom: ${props=>props.isVideo||props.isLiveBlog?"16px":"0"};
  padding-bottom: 16px;

  ${Header_ContentWrapper} {
    margin: 0 12px;
    @media ${Styles.c.laptop} {
      margin: 0;
    }
  }
`,Header_Header=props=>{var _article$hero;const{article:article,isService:isService}=props,isVideo=null===(_article$hero=article.hero)||void 0===_article$hero?void 0:_article$hero.some(({type:type})=>/youtube|brightcove|jw_player/.test(type)),isLiveBlog=article.isLiveBlog;return Object(jsx_runtime.jsx)(HeaderWrapper,{isService:isService,isVideo:isVideo,isLiveBlog:isLiveBlog,children:Object(jsx_runtime.jsxs)(Inner,{isService:isService,children:[Object(jsx_runtime.jsx)(Article_Breadcrumb,{hierarchy:article.hierarchy}),Object(jsx_runtime.jsxs)(Header_ContentWrapper,{children:[Object(jsx_runtime.jsx)(Article_Headline,{children:article.title}),article.lead&&Object(jsx_runtime.jsx)(Article_Subheadline,{children:article.lead})]}),Object(jsx_runtime.jsx)(Article_Hero,{hero:article.hero,isCommercial:article.isCommercial,isSensitive:article.isSensitive})]})})};Header_Header.propTypes={article:prop_types_default.a.object.isRequired,isVideo:prop_types_default.a.bool,isService:prop_types_default.a.bool};var Article_Header=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Header_Header))`
  display: flex;
  flex-direction: column;
`,Frame=__webpack_require__(213),Sidebar=__webpack_require__(345);const setAdData=(position,article)=>{const adConfig=config.a.getAdConfig();if(!article.sections)return;let adData=Object.assign({},adConfig.ampAd);return adData.json=JSON.parse(adData.json),adData.json.targeting={pos:[position],test:Object(utils_adData.getTestTargeting)(),pageid:Object(page.getPageId)(article)},adData.json.targeting.pagetype="article",adData.json.targeting.section=article&&article.sections[0].path.split("/"),adData["data-slot"]+=`${article.sidebar&&article.sidebar.data&&article.sidebar.data.publication.addUnitId}/${article.sections[0].name.toLowerCase().replace(/\s/g,"-")}`,adData.json=JSON.stringify(adData.json),adData},ArticleContent=styled_components_browser_esm.default.article`
  background-color: ${props=>props.theme.color.contrastLight};
`,BylineContentWrapper=styled_components_browser_esm.default.div`
  width: 100%;
  @media ${Styles.c.laptop} {
    border-right: ${props=>props.isService?"none":"1px solid "+props.theme.color.navGrey};
    padding-right: 16px;
  }
  &.article-insider {
    border-right: none;
    padding-right: 0;
  }
`,Article=props=>{const{className:className,req:{path:path},article:article,cleanAmp:cleanAmp,jsGlobals:jsGlobals,configuration:configuration}=props,adToggle=article.adConfig?Object(ads.e)(article):()=>{},adToggleByType=article.adConfig?Object(ads.f)(article):()=>{},articleType=Object(services_article.c)(article.hero).type,articleStyle=Object(themes.getArticleTheme)(path,configuration),isBest=(article.sections?article.sections[0]:{}).path.includes("/shopping/esbest"),isService=article.articleTypes.some(({name:name})=>"Service"===name),hasSideBar=!cleanAmp&&!isService;return Object(jsx_runtime.jsxs)(Frame.a,{isService:isService,className:className,style:articleStyle,isBest:isBest,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(util_page.a)({article:article},configuration.name)}),article.structuredData&&Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(article.structuredData.article)})||"",Object(jsx_runtime.jsx)("meta",{property:"og:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:configuration.baseUrl+article.path}),Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:article.lead&&article.lead.replace(/"/g,"&quote;")}),article.hero&&article.hero.filter(({type:type})=>"image"===type).map((media,index)=>{if(0===index)return[Object(jsx_runtime.jsx)("meta",{property:"og:image",content:configuration.baseUrl+media.data.url},index+"ogImage"),Object(jsx_runtime.jsx)("meta",{property:"og:image:secure_url",content:configuration.baseUrl+media.data.url},index+"ogImageSecure")]}).filter(x=>!!x),cleanAmp&&isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-link-rewriter",src:"https://cdn.ampproject.org/v0/amp-link-rewriter-0.1.js"})]}),Object(jsx_runtime.jsxs)(ArticleContent,{children:[article.adConfig&&!isService&&adToggle(ads.c)&&Object(jsx_runtime.jsx)(TopBanner.a,{width:"320",height:"50",cleanAmp:cleanAmp,data:setAdData("top",article)}),!cleanAmp&&!isBest&&"insider"!==articleStyle&&Object(jsx_runtime.jsx)(Ads_ThirdParty,{id:"thirdparty_05",sizes:"9x9"}),!cleanAmp&&!isBest&&adToggle(ads.a)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),!cleanAmp&&!isBest&&adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),Object(jsx_runtime.jsx)(Article_Header,{article:article,type:articleType,isService:isService}),Object(jsx_runtime.jsxs)(Article_ColumnWrapper,{isService:isService,children:[Object(jsx_runtime.jsxs)(BylineContentWrapper,{isService:isService,children:[!isService&&Object(jsx_runtime.jsx)(ArticleMeta.default,{}),Object(jsx_runtime.jsx)(Article_ContentWrapper,{className:"article-content",adToggle:adToggle,articleBodyConfig:adToggleByType("ArticleBody"),style:articleStyle,isBest:isBest,isService:isService})]}),hasSideBar&&Object(jsx_runtime.jsx)(Sidebar.a,{sections:article.sections,sidebar:article.sidebar,configuration:configuration,adTargeting:jsGlobals.adTargeting,article:article,isBest:isBest})]})]}),isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)(Ads_Trackonomics,{cleanAmp:cleanAmp,config:configuration.trackonomics})]})};Article.propTypes={className:prop_types_default.a.any,req:prop_types_default.a.object.isRequired,article:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Article.__docgenInfo={description:"",methods:[],displayName:"Article",props:{className:{type:{name:"any"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""},article:{type:{name:"object"},required:!0,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};__webpack_exports__.default=Object(RequestProvider.withRequest)(Article);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Article.js"]={name:"Article",docgenInfo:Article.__docgenInfo,path:"app/component/pages/Article.js"})},255:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Ad=__webpack_require__(158),react=__webpack_require__(4),RequestProvider=__webpack_require__(8),config_config=__webpack_require__(163);const ConfigProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{const adProps=Object.keys(Ad.a.propTypes),config=config_config.a.getConfig();return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),config:{vendors:{...config.indexExchange?{indexexchange:{SITE_ID:config.indexExchange.siteId}}:{},...config.criteo?{criteo:{LINE_ITEM_RANGES:config.criteo.lineItemRanges,NETWORK_ID:config.criteo.networkId}}:{}},urls:["https://esi.amp.permutive.com/rtc?type=doubleclick"],timeoutMillis:750}})});const AmpStickyAd=({children:children})=>Object(jsx_runtime.jsx)("amp-sticky-ad",{layout:"nodisplay",children:children});AmpStickyAd.propTypes={children:prop_types_default.a.element},AmpStickyAd.__docgenInfo={description:"",methods:[],displayName:"AmpStickyAd",props:{children:{type:{name:"element"},required:!1,description:""}}};var StickyAd=AmpStickyAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/StickyAd.js"]={name:"AmpStickyAd",docgenInfo:AmpStickyAd.__docgenInfo,path:"app/component/library/AMP/StickyAd.js"});const TargetingJSONProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{var _ref,_article$hero,_article$hero$,_article$hero2,_article$hero2$;const adProps=Object.keys(Ad.a.propTypes),{article:article,section:section,jsGlobals:{topictags:topictags}={}}=props.res.locals;return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),json:{targeting:{tile:props.id,gs_channels:(null==article?void 0:article.grapeshot)||(null==section?void 0:section.grapeshot)||[],docFormat:"amp",pagetype:"section",topictags:topictags,...article?{article:null===(_ref=article.remoteId||article.id)||void 0===_ref?void 0:_ref.replace(/\D/g,""),pagetype:"jw_player"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)?"video":(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||""}:{}}}})});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,AdIndex=styled_components_browser_esm.default.div`
  display: none;
`,AugmentedAmpAd=(WrappedComponent=>{const WrappedComponentWithAMPSickyAd=({ampStickyAd:ampStickyAd,...props})=>ampStickyAd?Object(jsx_runtime.jsx)(StickyAd,{children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}):Object(jsx_runtime.jsx)(WrappedComponent,{...props});return WrappedComponentWithAMPSickyAd.propTypes={...WrappedComponent.propTypes},WrappedComponentWithAMPSickyAd})((WrappedComponent=>props=>Object(jsx_runtime.jsx)(TargetingJSONProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))((WrappedComponent=Ad.a,props=>Object(jsx_runtime.jsx)(ConfigProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))));var WrappedComponent;const Ad_Ad=props=>{const{cleanAmp:cleanAmp,id:id,className:className,refreshAtIndex:refreshAtIndex,refreshStateId:refreshStateId,sizes:sizes,height:height,width:width,isVideo:isVideo,ampSizes:ampSizes,adUnitPathArr:adUnitPathArr,ampStickyAd:ampStickyAd,ampRefresh:ampRefresh,ampSizeValidation:ampSizeValidation}=props;return Object(jsx_runtime.jsx)(Wrapper,{className:className,children:cleanAmp?Object(jsx_runtime.jsx)(AugmentedAmpAd,{id:id,width:width,height:height,type:"doubleclick",dataSlot:"/"+adUnitPathArr.join("/"),"data-multi-size":ampSizes,ampSizeValidation:ampSizeValidation,ampStickyAd:ampStickyAd,ampSizes:ampSizes,ampRefresh:ampRefresh}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[refreshStateId&&Object(jsx_runtime.jsx)(AdIndex,{id:id+"_adIndex","amp-bind-text":`floor(${refreshStateId}.currentIndex / ${refreshAtIndex})`}),Object(jsx_runtime.jsx)("div",{"data-mpu":!0,"data-is-video":isVideo,"data-tile-name":id,"data-ad-unit-path":"/"+adUnitPathArr.join("/"),"data-sizes":sizes,"data-desktop-sizes":props["desktop-sizes"],"data-tablet-sizes":props["tablet-sizes"],"data-mobile-sizes":props["mobile-sizes"],"data-size-key":props["size-key"],"data-refresh-check":!!refreshStateId,"data-force-bulk":props["force-bulk"]})]})})};Ad_Ad.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string,"desktop-sizes":prop_types_default.a.string,"tablet-sizes":prop_types_default.a.string,"mobile-sizes":prop_types_default.a.string,"size-key":prop_types_default.a.string,refreshAtIndex:prop_types_default.a.number,refreshStateId:prop_types_default.a.string,height:prop_types_default.a.number,width:prop_types_default.a.number,isVideo:prop_types_default.a.bool,"force-bulk":prop_types_default.a.bool,ampSizes:prop_types_default.a.string,ampRefresh:prop_types_default.a.number,adUnitPathArr:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,ampStickyAd:prop_types_default.a.bool,ampSizeValidation:prop_types_default.a.bool},Ad_Ad.defaultProps={cleanAmp:!1,refreshAtIndex:1,height:250,width:300,ampStickyAd:!1,ampSizeValidation:!0,isVideo:!1},Ad_Ad.__docgenInfo={description:"",methods:[],displayName:"Ad",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},refreshAtIndex:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"250",computed:!1},type:{name:"number"},required:!1,description:""},width:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:""},ampStickyAd:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ampSizeValidation:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""},"desktop-sizes":{type:{name:"string"},required:!1,description:""},"tablet-sizes":{type:{name:"string"},required:!1,description:""},"mobile-sizes":{type:{name:"string"},required:!1,description:""},"size-key":{type:{name:"string"},required:!1,description:""},refreshStateId:{type:{name:"string"},required:!1,description:""},"force-bulk":{type:{name:"bool"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},adUnitPathArr:{type:{name:"arrayOf",value:{name:"string"}},required:!0,description:""}}};__webpack_exports__.default=Ad_Ad;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Ad.js"]={name:"Ad",docgenInfo:Ad_Ad.__docgenInfo,path:"app/component/library/Ads/Ad.js"})},257:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"More",type:"More",labelText:"More",labelLink:"/news",linkTitle:"More",linkUrl:"/news"})},258:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"/></svg>\n'},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return sectionColours})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themes})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"c",(function(){return device})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breakPoints}));var styled_components_browser_esm=__webpack_require__(2);const themes={default:{fontFamily:{primaryFont:"'Standard Text', serif",secondaryFont:"'Standard Sans', sans-serif",insiderDisplay:"GTSectraDisplay",insiderFine:"GTSectraFine",insiderSectra:"GTSectra",insiderCapsule:"StandardSansCond",standardDisplay:"Standard Display"},fontImports:"\n // Standard Text\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-RegularWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n   @font-face {\n    font-family: 'Standard Text';\n    font-weight: 500;\n    font-style: normal;\n    src: url('/fonts/StandardText-MediumWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-ItalicWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldWEB.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldItalicWEB.woff2') format('woff2');\n    font-weight: bold;\n    font-style: italic;\n  }\n  // Standard Sans\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 500;\n    font-style: normal;\n    src: url('/fonts/StandardSans-MediumWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: normal;\n    src: url('/fonts/StandardSans-LightWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: italic;\n    src: url('/fonts/StandardSans-ItalicWEB.woff2') format('woff2');\n  }\n   @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: italic;\n    src: url('/fonts/StandardSans-LightItalicWEB.woff2') format('woff2');\n  }\n  // GTSectraDisplay\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium-Italic.woff2') format('woff2');\n    font-weight: 500;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Bold.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n  // GTSectraFine\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Regular.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Bold.woff2') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n  font-family: 'GTSectra';\n  src: url('/fonts/GT-Sectra-Regular.woff2') format('woff2');\n  font-weight: normal;\n  font-style: normal;\n }\n\n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Bold.woff2') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-RegularWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-LightWEB.woff2') format('woff2');\n    font-weight: 300;\n    font-style: normal;\n  }\n  // Standard Display Bold\n   @font-face {\n    font-family: 'Standard Display';\n    src: url('/fonts/StandardDisplay-Bold.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n",fontSize:{list:"14px",insiderCapsule:"16px"},fontWeight:{thin:300,normal:500,bold:700,black:900},color:{primary:"#DC062B",secondary:"#111",headlineBg:"#f29100",divider:"#f5f5f5",hover:"#b00522",fontTitle:"#3A3A3A",fontCapsule:"#8f8f8e",fontMedium:"#4b4b49",contrastLight:"#FFF",contrastLightHover:"#f8cdd5",contrastGrey:"#d6d6d6",contrastDark:"#202020",contrastDarker:"#1e1e1c",icons:"#787877",bgGrey:"#ececec",formGrey:"#bcbcbb",formFocus:"#276fbf",formSuccess:"#157f1f",formError:"#a20021",navGrey:"#e9e9e8",standardGrey:"#bdbdbd",standardBlue:"#303f9f",galleryDarkGrey:"#4b4b49",galleryBlack:"#353533"}}},sectionColours={news:"303F9F",showbiz:"EC2327",go:"F70A9A",lifestyle:"00ABE6",sport:"F29100",fashion:"822081",shopping:"FF59C6",business:"A21043",comment:"00A9C0"},breakPoints={mobileS:320,mobileM:375,mobileL:425,tabletS:595,tablet:768,laptop:1e3,desktop:2560},minWidth=val=>`(min-width: ${val}px)`,maxWidth=val=>`(max-width: ${val-1}px)`,device={mobileS:minWidth(breakPoints.mobileS),mobileM:minWidth(breakPoints.mobileM),mobileL:minWidth(breakPoints.mobileL),tabletS:minWidth(breakPoints.tabletS),tablet:minWidth(breakPoints.tablet),laptop:minWidth(breakPoints.laptop),desktop:minWidth(breakPoints.desktop),maxMobileS:maxWidth(breakPoints.mobileS),maxMobileM:maxWidth(breakPoints.mobileM),maxMobileL:maxWidth(breakPoints.mobileL),maxTabletS:maxWidth(breakPoints.tabletS),maxTablet:maxWidth(breakPoints.tablet),maxLaptop:maxWidth(breakPoints.laptop),maxDesktop:maxWidth(breakPoints.desktop),adBreakpointMedium:"(min-width: 1300px)",adBreakpointLarge:"(min-width: 1600px)"},GlobalStyles=styled_components_browser_esm.createGlobalStyle`
  ${props=>props.theme.fontImports}
  body {
    font-family: ${props=>props.theme.fontFamily.primaryFont};
    color: ${props=>props.theme.color.contrastDarker};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    line-height: 1.17;
    font-weight: ${props=>props.theme.fontWeight.bold};
  }

  p {
    font-size: 19px;
    line-height: 1.44em;
  }

  a {
    color: ${props=>props.theme.color.link};
    text-decoration: none;
  }

  /* reset button styles */
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
  }
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /* amp overrides */
  amp-sidebar {
    @media (min-width: 768px) {
      overflow: ${props=>props.cleanAmp?"inherit":"scroll !important"};
      -ms-overflow-style: none;
      width: auto;
    }
    @media (max-width: 400px) {
      max-width: 100%;
      width: 100%;
    }
     ::-webkit-scrollbar {
        display: none;
     }
  }
  amp-consent {
    min-height: 100vh;
    min-width: 100vw;
    background: transparent;
  }
  
  .modal {
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }

  /* style injected evolok adblocker */
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0.5;
  }
  .ev .modal-dialog {
    width: 700px;
    top: 50%;
    transform: translateY(-50%);
  }
  .ev.modal {
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .modal-content {
    overflow: hidden;
    border-radius: 0;
    padding-bottom: 20px;
    iframe {
      border: 0;
      max-width: 100%;
      height: 60px;
    }
    .col-md-12 {
      padding: 0;
    }
    .ev .row {
      margin-right: 0;
      margin-left: 0;
    }
    .site-title {
      margin-bottom: 20px;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid ${props=>props.theme.color.contrastGrey};
    }
    .text-center {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 19px;
      }
    }
    p {
      font-size: 16px;
    }
    a, a:hover {
      color: ${props=>props.theme.color.contrastDarker};
    }
    a:hover {
      opacity: 0.9;
    }
    .btn {
      background-color: ${props=>props.theme.color.primary};
      background-image: none;
      border: none;
      border-radius: 0;
      width: 215px;
      padding: 10px;
      margin: 10px 20px;
      color: ${props=>props.theme.color.contrastLight};
      font-size: 14px;
      font-family: ${props=>props.theme.fontFamily.primaryFont};
      flex-grow: 1;
    }
    .btn:hover {
      color: ${props=>props.theme.color.contrastLight};
      background-color: ${props=>props.theme.color.primary};
      opacity: 0.9;
    }
  }
  .modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0,-110%);
  }
  .modal.in .modal-dialog {
    transform: translateY(-50%);
  }
`},327:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NewslettersConfig}));const NewslettersConfig={"standard.co.uk":{_es_news__benefits:{regSourceNewsletter:"_ES_news__Benefits",section:"ES NEWS",title:"ES NEWS",description:"The biggest and best news stories from London and around the world emailed to you every day. Evening Standard News email features the top five stories of the day plus a collection of articles selected just for you.",label:"From breaking news to in-depth investigations and exclusives - be the first to know about the stories that really matter.",type:"news",regTitle:"NEWS",imageSrc:"/img/es-news-newsletter.png"},_es_food__benefits:{regSourceNewsletter:"_ES_food__Benefits",section:"ES FOOD",title:"ES FOOD",description:"Sign up to our Evening Standard Food newsletter for the latest restaurant news and reviews, recipes and food trends from London and beyond.",label:"We we&#39;ll deliver the tastiest content direct to your inbox every Tuesday lunchtime, from bars to brasseries, burgers and Burgundy.",type:"news",regTitle:"FOOD",imageSrc:"/img/es-food-news.png"},_es_weekender__benefits:{regSourceNewsletter:"_ES_weekender__Benefits",section:"ES WEEKENDER",title:"ES WEEKENDER",description:"Sign up to our Weekender newsletter for the latest competitions, offers and giveaways from Evening Standard.",label:"Every Thursday, we bring you a newsletter packed with opportunities to win top prizes - from holidays and theatre tickets to exclusive experiences, plus offers from your favourite brands.",type:"news",regTitle:"WEEKENDER",imageSrc:"/img/es-weekender-news.png"},_es_football__benefits:{regSourceNewsletter:"_ES_football__Benefits",section:"ES FOOTBALL",title:"ES FOOTBALL",description:"Receive the top football news from inside the capital every Monday and Friday with Evening Standard&#39;s football news update.",label:"Evening Standard Football tackles the talking points from London&#39;s biggest football stories, bringing you closer to the action with a brand you can trust.</br>Live, comment, discussion and debate. We&#39;ve got the whole game covered.",type:"news",regTitle:"FOOTBALL",imageSrc:"/img/es-football-news.png"},_es_lifestyle__benefits:{regSourceNewsletter:"_ES_lifestyle__Benefits",section:"ES LIFESTYLE",title:"ES LIFESTYLE",description:"Get the latest fashion, food, fitness and travel updates straight to your inbox every Monday from Evening Standard Lifestyle team.",label:"With interviews, trends, galleries and shoppable guides all included - The Lifestyle Edit is your way to stay in the know. </br> See you next Monday!",type:"news",regTitle:"LIFESTYLE",imageSrc:"/img/es-lifestyle-news.png"},_es_insider__benefits:{regSourceNewsletter:"_ES_Insider__Benefits",section:"ES INSIDER",title:"ES INSIDER",description:"The inside track on the coolest people, the most exclusive places and the hottest new luxury launches delivered straight to your inbox.",label:"With royal news, interviews and celebrity lifestyle trends, our dedicated trans-Atlantic team will help you stay ahead of the curve on all things VIP.",type:"news",regTitle:"",imageSrc:"/img/es-insider-news.png"}}}},328:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"2 articles",type:"ArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 2",heroType:"video",live:!0}),...articleOverrides}]})},329:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"4 articles",type:"ArticleX4",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 2"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 3",heroType:"video"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 4",heroType:"video"}),...articleOverrides}]})},330:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"Hero Article",type:"HeroArticle",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"Hero article headline"}),...articleOverrides}]})},331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"Title",type:"Title",labelText:"This is a section title component",labelLink:null,commercialBadgeTerm:null,commercialBadgeImage:null,commercialBadgeLink:null})},332:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return size})),__webpack_require__.d(__webpack_exports__,"a",(function(){return publicationConfig}));var _constants_publication__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126),_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);const fullBanner=[970,250],tabletBanner=[728,90],mobileBanner=[320,50],gutterSmall=[120,600],gutterMedium=[160,600],doubleMPU=[300,600],singleMPU=[300,250],thirdParty=[280,290],thirdParty1x1=[1,1],DOUBLE_OR_SINGLES_MPU={from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[singleMPU,doubleMPU],conditionalAd:{if:singleMPU,then:singleMPU,tileNameExtra:"_bottom"}},size={TOP_BANNER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[fullBanner,tabletBanner]}],BOTTOM_BANNER:[{from:0,supportedSizes:[mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner,mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],GUTTER:[{from:0,supportedSizes:[gutterSmall]},{from:1300,supportedSizes:[gutterSmall,gutterMedium]},{from:1600,supportedSizes:[gutterSmall,gutterMedium,doubleMPU]}],SKIN:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[[4,4]]}],PARTNERADS:[{from:0,supportedSizes:[[245,210]]}],SINGLE_MPU:[{from:0,supportedSizes:[singleMPU]}],SINGLE_MPU_ONLY_MOBILE:[{from:0,supportedSizes:[singleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SINGLE_MPU_ONLY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU]}],DOUBLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]}],DOUBLE_OR_SINGLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],DOUBLE_MPU_EXTRA:[{from:0,supportedSizes:[singleMPU,doubleMPU]},DOUBLE_OR_SINGLES_MPU],DOUBLE_MPU_EXTRA_NOT_MOBILE:[{from:0,supportedSizes:[singleMPU]},DOUBLE_OR_SINGLES_MPU],THIRD_PARTY:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_NOT_MOBILE:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_ARTICLE_BODY:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],THIRD_PARTY_ARTICLE_BODY_MOBILE:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],THIRD_PARTY_ARTICLE_BODY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],GALLERY_MPU:[{from:0,supportedSizes:[]},{...DOUBLE_OR_SINGLES_MPU,from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop}],INSIDER_BANNER:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[tabletBanner,fullBanner]}]},publicationConfig=(_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,{[_constants_publication__WEBPACK_IMPORTED_MODULE_0__.a]:{networkId:"71347885",adUnitHomepage:"_main_eveningstandard",thirdPartyUnitHomepage:"_partner_eveningstandard"}})},334:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return pageTitle}));var ramda__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(180),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(86);const pageTitle=({article:article,section:section},siteName)=>{const title=Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("title",article);if(title)return title+" | "+siteName;const sectionName=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","name"])(section);return sectionName?sectionName+" | "+siteName:void 0===article&&void 0===section?"Page not found | "+siteName:siteName}},335:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_Ad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(255),_MPU__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  height: auto;
  padding: 0;
  width: 100%;
`,TopBanner=({className:className,...rest})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper,{className:className,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MPU__WEBPACK_IMPORTED_MODULE_4__.a,{id:"top_banner","size-key":"TOP_BANNER","force-bulk":!0,...rest})}),{id:id,adUnitPathArr:adUnitPathArr,...TopBannerPropTypes}=_Ad__WEBPACK_IMPORTED_MODULE_3__.default.propTypes;TopBanner.propTypes={...TopBannerPropTypes};const StyledTopBanner=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(TopBanner)`
  text-align: center;
  display: none;
  justify-content: center;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  max-width: 968px;
  height: 250px;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__.c.laptop} {
    display: block;
  }
  .sticky {
    width: 968px;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    z-index: 1000;
  }
`;__webpack_exports__.a=StyledTopBanner},336:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),moment_timezone__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(318),moment_timezone__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const FormattedDate=({date:date,width:width,height:height})=>{const unixDate=moment_timezone__WEBPACK_IMPORTED_MODULE_1___default.a.unix(date),formattedDate=unixDate.tz("Europe/London").format("DD MMMM YYYY"),dateStr=unixDate.toISOString();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-timeago",{datetime:dateStr,cutoff:604800,locale:"en",width:width,height:height||"18",children:formattedDate})};FormattedDate.propTypes={date:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,width:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,height:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number},FormattedDate.__docgenInfo={description:"",methods:[],displayName:"FormattedDate",props:{date:{type:{name:"string"},required:!0,description:""},width:{type:{name:"number"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""}}},__webpack_exports__.a=FormattedDate,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/FormattedDate.js"]={name:"FormattedDate",docgenInfo:FormattedDate.__docgenInfo,path:"app/component/library/Article/Embeds/FormattedDate.js"})},337:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g transform="translate(-0.875000, 0.000000)" fill-rule="nonzero">\n      <circle stroke-width="2" cx="20.875" cy="20" r="19" fill="none"></circle>\n      <path d="M21.784,11.821 C26.797,11.821 30.875,15.087 30.875,19.103 C30.875,23.573 26.198,26.34 21.866,26.34 C20.5157322,26.3186946 19.1740384,26.1210208 17.875,25.752 C16.6845754,26.5230061 15.3694046,27.0816239 13.988,27.403 C14.4692648,26.1707668 14.6565573,24.8432844 14.535,23.526 C13.3718451,22.3456178 12.7118911,20.7600792 12.694,19.103 C12.694,15.089 16.771,11.824 21.784,11.824 L21.784,11.821 Z M21.784,10.003 C16.022,10.003 10.875,13.845 10.875,19.103 C10.8795758,20.9726004 11.5379197,22.7817195 12.736,24.217 C12.786,25.878 11.806,28.265 10.924,30.003 C13.4403283,29.591776 15.8831076,28.8152477 18.175,27.698 C19.3823722,27.9969519 20.6211759,28.1503756 21.865,28.155 C28.305,28.155 32.692,23.755 32.692,19.1 C32.692,13.817 27.508,10 21.782,10 L21.784,10.003 Z M18.602,19.094 C18.6019999,19.6457775 18.2695636,20.1432045 17.759749,20.3542671 C17.2499343,20.5653296 16.6631752,20.4484482 16.2731527,20.0581395 C15.8831302,19.6678309 15.7666792,19.0809862 15.9781156,18.5713265 C16.189552,18.0616668 16.6872227,17.7295955 17.239,17.73 C17.6006634,17.7299999 17.9474994,17.8737385 18.2031403,18.1295669 C18.4587811,18.3853954 18.6022653,18.7323367 18.602,19.094 Z M21.784,17.73 C21.0306836,17.73 20.42,18.3406836 20.42,19.094 C20.42,19.8473164 21.0306836,20.458 21.784,20.458 C22.5373164,20.458 23.148,19.8473164 23.148,19.094 C23.148,18.7322447 23.0042933,18.385306 22.7484936,18.1295064 C22.492694,17.8737067 22.1457553,17.73 21.784,17.73 Z M26.329,17.73 C25.5756836,17.73 24.965,18.3406836 24.965,19.094 C24.965,19.8473164 25.5756836,20.458 26.329,20.458 C27.0823164,20.458 27.693,19.8473164 27.693,19.094 C27.6930002,18.341074 27.0829258,17.730552 26.33,17.73 L26.329,17.73 Z"></path>\n  </g>\n</svg>\n'},338:function(module,__webpack_exports__,__webpack_require__){"use strict";var _collection__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66);const commonProps={width:_collection__WEBPACK_IMPORTED_MODULE_0__.j,height:_collection__WEBPACK_IMPORTED_MODULE_0__.b,layout:_collection__WEBPACK_IMPORTED_MODULE_0__.d,sizes:_collection__WEBPACK_IMPORTED_MODULE_0__.i,heights:_collection__WEBPACK_IMPORTED_MODULE_0__.c,media:_collection__WEBPACK_IMPORTED_MODULE_0__.e,placeholder:_collection__WEBPACK_IMPORTED_MODULE_0__.h,fallback:_collection__WEBPACK_IMPORTED_MODULE_0__.a,noloading:_collection__WEBPACK_IMPORTED_MODULE_0__.f,on:_collection__WEBPACK_IMPORTED_MODULE_0__.g};__webpack_exports__.a=commonProps},339:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(910),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const AmpState=({id:id,json:json})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default.a,{id:id,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(json)}})});AmpState.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,json:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},AmpState.__docgenInfo={description:"",methods:[],displayName:"AmpState",props:{id:{type:{name:"string"},required:!0,description:""},json:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.a=AmpState,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/State.js"]={name:"AmpState",docgenInfo:AmpState.__docgenInfo,path:"app/component/library/AMP/State.js"})},340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<?xml version="1.0" encoding="UTF-8"?>\n  <svg version="1.1" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">\n    <defs>\n      <filter id="a" x="-22.2%" y="-16.7%" width="144.4%" height="144.4%">\n        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>\n        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>\n        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>\n        <feMerge>\n          <feMergeNode in="shadowMatrixOuter1"/>\n          <feMergeNode in="SourceGraphic"/>\n        </feMerge>\n      </filter>\n    </defs>\n  <g fill="none" fill-rule="evenodd">\n    <g transform="translate(-985 -14770)">\n      <g transform="translate(220 14716)">\n        <g transform="translate(762 49)">\n          <g transform="translate(8 8)" filter="url(#a)">\n            <polygon id="b" points="12 7.5 12 28.5 28.5 18" fill="#fff" fill-rule="nonzero"/>\n            <polygon points="0 0 36 0 36 36 0 36"/>\n            <circle cx="18" cy="18" r="18" opacity=".5" stroke="#fff" stroke-width="2"/>\n          </g>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n'},341:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Frame__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(213);const ConditionalFrame=props=>{const{req:req,children:children,className:className}=props,noframe=req&&Object.prototype.hasOwnProperty.call(req.query,"noframe");return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:noframe?children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Frame__WEBPACK_IMPORTED_MODULE_4__.a,{className:className,children:children})})};ConditionalFrame.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(ConditionalFrame))``},342:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(64);const NoIndex=()=>!1;NoIndex.__docgenInfo={description:"",methods:[],displayName:"NoIndex"},__webpack_exports__.a=NoIndex,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NoIndex.js"]={name:"NoIndex",docgenInfo:NoIndex.__docgenInfo,path:"app/component/library/NoIndex.js"})},343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={"United Kingdom":"^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$",Ireland:"[A-Za-z0-9 -_]*","United States of America":"(^\\d{5}(?: [-\\s]\\d{4})?$)",Australia:"[A-Za-z0-9 -_]*",Canada:"[A-Za-z0-9 -_]*",Afghanistan:"[A-Za-z0-9 -_]*",Albania:"[A-Za-z0-9 -_]*",Algeria:"[A-Za-z0-9 -_]*","American Samoa":"[A-Za-z0-9 -_]*",Andorra:"[A-Za-z0-9 -_]*",Angola:"^$",Anguilla:"[A-Za-z0-9 -_]*",Antarctica:"[A-Za-z0-9 -_]*","Antigua and Barbuda":"^$",Argentina:"[A-Za-z0-9 -_]*",Armenia:"[A-Za-z0-9 -_]*",Aruba:"^$",Austria:"[A-Za-z0-9 -_]*",Azerbaijan:"[A-Za-z0-9 -_]*",Bahamas:"^$",Bahrain:"[A-Za-z0-9 -_]*",Bangladesh:"[A-Za-z0-9 -_]*",Barbados:"[A-Za-z0-9 -_]*",Belarus:"[A-Za-z0-9 -_]*",Belgium:"[A-Za-z0-9 -_]*",Belize:"^$",Benin:"^$",Bermuda:"[A-Za-z0-9 -_]*",Bhutan:"[A-Za-z0-9 -_]*",Bolivia:"^$","Bosnia and Herzegovina":"[A-Za-z0-9 -_]*",Botswana:"^$","Bouvet Island":"[A-Za-z0-9 -_]*",Brazil:"[A-Za-z0-9 -_]*","British Indian Ocean Territory":"[A-Za-z0-9 -_]*","Brunei Darussalam":"[A-Za-z0-9 -_]*",Bulgaria:"[A-Za-z0-9 -_]*","Burkina Faso":"^$",Burundi:"^$",Cambodia:"[A-Za-z0-9 -_]*",Cameroon:"^$","Cape Verde":"[A-Za-z0-9 -_]*","Cayman Islands":"[A-Za-z0-9 -_]*","Central African Republic":"^$",Chad:"[A-Za-z0-9 -_]*",Chile:"[A-Za-z0-9 -_]*",China:"[A-Za-z0-9 -_]*","Christmas Island":"[A-Za-z0-9 -_]*","Cocos (Keeling) Islands":"[A-Za-z0-9 -_]*",Colombia:"[A-Za-z0-9 -_]*",Comoros:"^$",Congo:"^$","Congo, The Democratic Republic of The":"^$","Cook Islands":"^$","Costa Rica":"[A-Za-z0-9 -_]*","Cote D’Ivoire":"^$",Croatia:"[A-Za-z0-9 -_]*",Cuba:"[A-Za-z0-9 -_]*",Cyprus:"[A-Za-z0-9 -_]*","Czech Republic":"[A-Za-z0-9 -_]*",Denmark:"[A-Za-z0-9 -_]*",Djibouti:"^$",Dominica:"^$","Dominican Republic":"[A-Za-z0-9 -_]*","Easter Island":"[A-Za-z0-9 -_]*",Ecuador:"[A-Za-z0-9 -_]*",Egypt:"[A-Za-z0-9 -_]*","El Salvador":"[A-Za-z0-9 -_]*","Equatorial Guinea":"^$",Eritrea:"^$",Estonia:"[A-Za-z0-9 -_]*",Ethiopia:"[A-Za-z0-9 -_]*","Falkland Islands (Malvinas)":"[A-Za-z0-9 -_]*","Faroe Islands":"[A-Za-z0-9 -_]*",Fiji:"^$",Finland:"[A-Za-z0-9 -_]*",France:"[A-Za-z0-9 -_]*","French Guiana":"[A-Za-z0-9 -_]*","French Polynesia":"[A-Za-z0-9 -_]*","French Southern Territories":"^$",Gabon:"[A-Za-z0-9 -_]*",Gambia:"^$",Georgia:"[A-Za-z0-9 -_]*",Germany:"[A-Za-z0-9 -_]*",Ghana:"^$",Gibraltar:"[A-Za-z0-9 -_]*",Greece:"[A-Za-z0-9 -_]*",Greenland:"[A-Za-z0-9 -_]*",Grenada:"^$",Guadeloupe:"[A-Za-z0-9 -_]*",Guam:"[A-Za-z0-9 -_]*",Guatemala:"[A-Za-z0-9 -_]*",Guinea:"[A-Za-z0-9 -_]*","Guinea-bissau":"[A-Za-z0-9 -_]*",Guyana:"^$",Haiti:"[A-Za-z0-9 -_]*","Heard Island and Mcdonald Islands":"^$",Honduras:"[A-Za-z0-9 -_]*","Hong Kong":"^$",Hungary:"[A-Za-z0-9 -_]*",Iceland:"[A-Za-z0-9 -_]*",India:"[A-Za-z0-9 -_]*",Indonesia:"[A-Za-z0-9 -_]*",Iran:"[A-Za-z0-9 -_]*",Iraq:"[A-Za-z0-9 -_]*",Israel:"[A-Za-z0-9 -_]*",Italy:"[A-Za-z0-9 -_]*",Jamaica:"[A-Za-z0-9 -_]*",Japan:"[A-Za-z0-9 -_]*",Jordan:"[A-Za-z0-9 -_]*",Kazakhstan:"[A-Za-z0-9 -_]*",Kenya:"[A-Za-z0-9 -_]*",Kiribati:"^$","Korea, North":"[A-Za-z0-9 -_]*","Korea, South":"[A-Za-z0-9 -_]*",Kosovo:"[A-Za-z0-9 -_]*",Kuwait:"[A-Za-z0-9 -_]*",Kyrgyzstan:"[A-Za-z0-9 -_]*",Laos:"[A-Za-z0-9 -_]*",Latvia:"[A-Za-z0-9 -_]*",Lebanon:"[A-Za-z0-9 -_]*",Lesotho:"[A-Za-z0-9 -_]*",Liberia:"[A-Za-z0-9 -_]*","Libyan Arab Jamahiriya":"^$",Liechtenstein:"[A-Za-z0-9 -_]*",Lithuania:"[A-Za-z0-9 -_]*",Luxembourg:"[A-Za-z0-9 -_]*",Macau:"^$",Macedonia:"[A-Za-z0-9 -_]*",Madagascar:"[A-Za-z0-9 -_]*",Malawi:"^$",Malaysia:"[A-Za-z0-9 -_]*",Maldives:"[A-Za-z0-9 -_]*",Mali:"^$",Malta:"[A-Za-z0-9 -_]*","Marshall Islands":"[A-Za-z0-9 -_]*",Martinique:"[A-Za-z0-9 -_]*",Mauritania:"^$",Mauritius:"[A-Za-z0-9 -_]*",Mayotte:"[A-Za-z0-9 -_]*",Mexico:"[A-Za-z0-9 -_]*","Micronesia, Federated States of":"[A-Za-z0-9 -_]*","Moldova, Republic of":"[A-Za-z0-9 -_]*",Monaco:"[A-Za-z0-9 -_]*",Mongolia:"[A-Za-z0-9 -_]*",Montenegro:"[A-Za-z0-9 -_]*",Montserrat:"[A-Za-z0-9 -_]*",Morocco:"[A-Za-z0-9 -_]*",Mozambique:"[A-Za-z0-9 -_]*",Myanmar:"[A-Za-z0-9 -_]*",Namibia:"[A-Za-z0-9 -_]*",Nauru:"^$",Nepal:"[A-Za-z0-9 -_]*",Netherlands:"[A-Za-z0-9 -_]*","Netherlands Antilles":"^$","New Caledonia":"[A-Za-z0-9 -_]*","New Zealand":"[A-Za-z0-9 -_]*",Nicaragua:"[A-Za-z0-9 -_]*",Niger:"[A-Za-z0-9 -_]*",Nigeria:"[A-Za-z0-9 -_]*",Niue:"^$","Norfolk Island":"[A-Za-z0-9 -_]*","Northern Mariana Islands":"[A-Za-z0-9 -_]*",Norway:"[A-Za-z0-9 -_]*",Oman:"[A-Za-z0-9 -_]*",Pakistan:"[A-Za-z0-9 -_]*",Palau:"[A-Za-z0-9 -_]*","Palestinian Territory":"[A-Za-z0-9 -_]*",Panama:"[A-Za-z0-9 -_]*","Papua New Guinea":"[A-Za-z0-9 -_]*",Paraguay:"[A-Za-z0-9 -_]*",Peru:"[A-Za-z0-9 -_]*",Philippines:"[A-Za-z0-9 -_]*",Pitcairn:"[A-Za-z0-9 -_]*",Poland:"[A-Za-z0-9 -_]*",Portugal:"[A-Za-z0-9 -_]*","Puerto Rico":"[A-Za-z0-9 -_]*",Qatar:"^$",Reunion:"[A-Za-z0-9 -_]*",Romania:"[A-Za-z0-9 -_]*",Russia:"[A-Za-z0-9 -_]*",Rwanda:"^$","Saint Helena":"[A-Za-z0-9 -_]*","Saint Kitts and Nevis":"^$","Saint Lucia":"[A-Za-z0-9 -_]*","Saint Pierre and Miquelon":"[A-Za-z0-9 -_]*","Saint Vincent and The Grenadines":"[A-Za-z0-9 -_]*",Samoa:"[A-Za-z0-9 -_]*","San Marino":"[A-Za-z0-9 -_]*","Sao Tome and Principe":"^$","Saudi Arabia":"[A-Za-z0-9 -_]*",Senegal:"[A-Za-z0-9 -_]*","Serbia and Montenegro":"[A-Za-z0-9 -_]*",Seychelles:"^$","Sierra Leone":"^$",Singapore:"[A-Za-z0-9 -_]*",Slovakia:"[A-Za-z0-9 -_]*",Slovenia:"[A-Za-z0-9 -_]*","Solomon Islands":"^$",Somalia:"[A-Za-z0-9 -_]*","South Africa":"[A-Za-z0-9 -_]*","South Georgia and The South Sandwich Islands":"[A-Za-z0-9 -_]*",Spain:"[A-Za-z0-9 -_]*","Sri Lanka":"[A-Za-z0-9 -_]*",Sudan:"[A-Za-z0-9 -_]*",Suriname:"^$","Svalbard and Jan Mayen":"[A-Za-z0-9 -_]*",Swaziland:"[A-Za-z0-9 -_]*",Sweden:"[A-Za-z0-9 -_]*",Switzerland:"[A-Za-z0-9 -_]*",Syria:"^$",Taiwan:"[A-Za-z0-9 -_]*",Tajikistan:"[A-Za-z0-9 -_]*","Tanzania, United Republic of":"[A-Za-z0-9 -_]*",Thailand:"[A-Za-z0-9 -_]*","Timor-Leste":"^$",Togo:"^$",Tokelau:"^$",Tonga:"^$","Trinidad and Tobago":"[A-Za-z0-9 -_]*",Tunisia:"[A-Za-z0-9 -_]*",Turkey:"[A-Za-z0-9 -_]*",Turkmenistan:"[A-Za-z0-9 -_]*","Turks and Caicos Islands":"[A-Za-z0-9 -_]*",Tuvalu:"^$",Uganda:"^$",Ukraine:"[A-Za-z0-9 -_]*","United Arab Emirates":"^$","United States Minor Outlying Islands":"[A-Za-z0-9 -_]*",Uruguay:"[A-Za-z0-9 -_]*",Uzbekistan:"[A-Za-z0-9 -_]*",Vanuatu:"^$","Vatican City":"[A-Za-z0-9 -_]*",Venezuela:"[A-Za-z0-9 -_]*",Vietnam:"[A-Za-z0-9 -_]*","Virgin Islands, British":"[A-Za-z0-9 -_]*","Virgin Islands, U.S.":"[A-Za-z0-9 -_]*","Wallis and Futuna":"[A-Za-z0-9 -_]*","Western Sahara":"[A-Za-z0-9 -_]*",Yemen:"^$",Zambia:"[A-Za-z0-9 -_]*",Zimbabwe:"^$"}},344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10.6 0L6 4.4 1.4 0 0 1.3 6 7l6-5.7z" fill-rule="evenodd"/>\n</svg>\n'},345:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var HTML=__webpack_require__(212),MPU=__webpack_require__(25);const Container=styled_components_browser_esm.default.div`
  max-width: 100%;
  margin: 0 0 20px;
  &.sticky {
    position: sticky;
    top: 94px;
  }
`,SidebarAd=props=>Object(jsx_runtime.jsx)(Container,{className:props.sticky?"sticky":"",children:Object(jsx_runtime.jsx)(MPU.a,{...props})});SidebarAd.propTypes={sticky:prop_types_default.a.bool,...MPU.a.propTypes},SidebarAd.__docgenInfo={description:"",methods:[],displayName:"SidebarAd",props:{sticky:{type:{name:"bool"},required:!1,description:""}},composes:["../Ads/MPU"]};var Sidebar_SidebarAd=SidebarAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/SidebarAd.js"]={name:"SidebarAd",docgenInfo:SidebarAd.__docgenInfo,path:"app/component/library/Sidebar/SidebarAd.js"});const Mpu1=({sticky:sticky,blockAds:blockAds,isBest:isBest})=>Object(jsx_runtime.jsx)(Sidebar_SidebarAd,{id:"mpu1","size-key":"DOUBLE_MPU",sticky:sticky,width:308,height:250,ampSizes:"300x250,300x600,320x480",isBest:isBest,blockAds:blockAds,"force-bulk":!0});Mpu1.propTypes={sticky:prop_types_default.a.bool,blockAds:prop_types_default.a.bool,isBest:prop_types_default.a.bool},Mpu1.__docgenInfo={description:"",methods:[],displayName:"Mpu1",props:{sticky:{type:{name:"bool"},required:!1,description:""},blockAds:{type:{name:"bool"},required:!1,description:""},isBest:{type:{name:"bool"},required:!1,description:""}}};var Ads_Mpu1=Mpu1;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/Ads/Mpu1.js"]={name:"Mpu1",docgenInfo:Mpu1.__docgenInfo,path:"app/component/library/Sidebar/Ads/Mpu1.js"});const Thirdparty03=({blockAds:blockAds,sticky:sticky})=>Object(jsx_runtime.jsx)(Sidebar_SidebarAd,{id:"thirdparty_03",sticky:sticky,width:300,height:250,sizes:"300x250",blockAds:blockAds,"force-bulk":!0});Thirdparty03.propTypes={blockAds:prop_types_default.a.bool,sticky:prop_types_default.a.bool},Thirdparty03.__docgenInfo={description:"",methods:[],displayName:"Thirdparty03",props:{blockAds:{type:{name:"bool"},required:!1,description:""},sticky:{type:{name:"bool"},required:!1,description:""}}};var Ads_Thirdparty03=Thirdparty03;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/Ads/Thirdparty03.js"]={name:"Thirdparty03",docgenInfo:Thirdparty03.__docgenInfo,path:"app/component/library/Sidebar/Ads/Thirdparty03.js"});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
  margin-bottom: 30px;
`,Headline=styled_components_browser_esm.default.h2`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 20px;
  letter-spacing: 1.14px;
  display: table;
  margin: auto;
  &:after {
    content: '';
    display: block;
    width: 113%;
    height: 4px;
    margin: 2px 0 8px -6.5%;
    mix-blend-mode: multiply;
    background: ${props=>props.theme.color.primary};
  }
`,ListItem=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 12px;
`,Link=styled_components_browser_esm.default.a`
  font-size: 16px;
  color: ${props=>props.theme.color.contrastDarker};
  text-decoration: none;
  font-weight: normal;
  line-height: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding-left: 10px;
  &:hover {
    color: ${props=>props.theme.color.primary};
  }
`,ImageWrapper=styled_components_browser_esm.default.a`
  position: relative;
  width: 96px;
  min-width: 96px;
  height: 64px;
  & img {
    object-fit: cover;
  }
`,FeedList=({className:className,src:src,items:items="items",title:title,length:length=5,prefix:prefix})=>Object(jsx_runtime.jsxs)(Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Headline,{children:title}),Object(jsx_runtime.jsx)("amp-list",{src:src,layout:"fixed-height",width:"auto",height:"370","max-items":length,items:items,children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsxs)(ListItem,{children:[Object(jsx_runtime.jsxs)(ImageWrapper,{href:"amp-template-link",children:[Object(jsx_runtime.jsx)("amp-img",{src:"amp-template-image",alt:"amp-template-title",layout:"fill"}),prefix&&prefix]}),Object(jsx_runtime.jsx)(Link,{href:"amp-template-link",children:"amp-template-title"})]})})})]});FeedList.propTypes={className:prop_types_default.a.string,src:prop_types_default.a.string.isRequired,items:prop_types_default.a.string,logo:prop_types_default.a.any,title:prop_types_default.a.any,length:prop_types_default.a.number,prefix:prop_types_default.a.any},FeedList.__docgenInfo={description:"",methods:[],displayName:"FeedList",props:{items:{defaultValue:{value:"'items'",computed:!1},type:{name:"string"},required:!1,description:""},length:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},logo:{type:{name:"any"},required:!1,description:""},title:{type:{name:"any"},required:!1,description:""},prefix:{type:{name:"any"},required:!1,description:""}}};var components_FeedList=FeedList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/components/FeedList.js"]={name:"FeedList",docgenInfo:FeedList.__docgenInfo,path:"app/component/library/Sidebar/components/FeedList.js"});const Indy100=props=>{const{configuration:configuration}=props,src=configuration.feeds.indy100.src,logo=configuration.feeds.indy100.logo;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,logo:logo})};Indy100.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_Indy100=Object(styled_components_browser_esm.default)(Indy100)``;const MostPopular=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items,title:"MOST POPULAR"})};MostPopular.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_MostPopular=Object(styled_components_browser_esm.default)(MostPopular)``,classnames=__webpack_require__(49),classnames_default=__webpack_require__.n(classnames),play=__webpack_require__(340);const PopularVideos=props=>{const{configuration:configuration,className:className}=props,src=configuration.feeds.videos.src,items=configuration.feeds.videos.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:classnames_default()(className,"popular-videos"),src:src,items:items,title:"POPULAR VIDEOS",length:3,prefix:Object(jsx_runtime.jsx)("span",{className:"play-icon",dangerouslySetInnerHTML:{__html:play.a}})})};PopularVideos.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.object.isRequired};var Sidebar_PopularVideos=Object(styled_components_browser_esm.default)(PopularVideos)`
  [role='list'] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  [role='listitem'] {
    position: relative;
    padding-bottom: 8px;
    width: calc(50% - 10px);
    flex-direction: column;
    .play-icon {
      position: absolute;
      width: 50px;
      height: 50px;
      opacity: 0.8;
      border-radius: 50%;
      margin: 10px;
      background-color: ${props=>props.theme.color.primary};
      svg circle {
        display: none;
      }
    }
    &:first-child {
      display: block;
      padding-bottom: 0;
      margin-bottom: 10px;
      width: 100%;
      a {
        &:first-child {
          width: 100%;
          display: block;
          height: 200px;
        }
        &:last-child {
          position: absolute;
          background: linear-gradient(180deg, transparent 0, #000);
          color: ${props=>props.theme.color.contrastLight};
          bottom: 0;
          font-family: ${props=>props.theme.fontFamily.secondaryFont};
          font-size: 20px;
          font-weight: 600;
          line-height: 1em;
          padding: 15px 10px 20px;
          &:hover {
            color: ${props=>props.theme.color.primary};
          }
        }
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      a {
        &:first-child {
          width: 140px;
          height: 93px;
        }
        &:last-child {
          font-size: 14px;
          font-family: ${props=>props.theme.fontFamily.secondaryFont};
          letter-spacing: normal;
          padding: 0;
          line-height: 18px;
          margin-top: 2px;
        }
      }
    }
  }
`;const SponsoredFeatures=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:"sponsored-features",src:src,items:items,title:"SPONSORED FEATURES",imgWidth:96})};SponsoredFeatures.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_SponsoredFeatures=Object(styled_components_browser_esm.default)(SponsoredFeatures)``,RequestProvider=__webpack_require__(8),Taboola=__webpack_require__(114);const TaboolaAmpWithStyle=Object(styled_components_browser_esm.default)(Taboola.b)`
  @media ${Styles.c.maxTablet} {
    display: none;
  }
`,TaboolaRightRail=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-right-rail",width:300,height:300,heights:["(min-width:507px) 324%","(min-width:461px) 338%","(min-width:408px) 351%","(min-width:376px) 368%","(min-width:347px) 385%","399%"],media:""+Styles.c.tablet,mode:"thumbnails-k-amp",placement:"Right Rail Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaAmpWithStyle,{id:"taboola-right-rail"});TaboolaRightRail.propTypes={res:prop_types_default.a.object.isRequired},TaboolaRightRail.__docgenInfo={description:"",methods:[],displayName:"TaboolaRightRail",props:{res:{type:{name:"object"},required:!0,description:""}}};var Sidebar_TaboolaRightRail=Object(RequestProvider.withRequest)(TaboolaRightRail);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/TaboolaRightRail.js"]={name:"TaboolaRightRail",docgenInfo:TaboolaRightRail.__docgenInfo,path:"app/component/library/Sidebar/TaboolaRightRail.js"});const Sidebar_Wrapper=styled_components_browser_esm.default.aside`
  flex: 0 0 312px;
  margin-left: 16px;

  @media ${Styles.c.maxLaptop} {
    display: none;
  }
`,componentMapping={MostPopular:Sidebar_MostPopular,indy100:Sidebar_Indy100,PopularVideos:Sidebar_PopularVideos,SponsoredFeatures:Sidebar_SponsoredFeatures};function Sidebar({sidebar:sidebar,configuration:configuration,isBest:isBest,article:article}){var _article$extra;const layout=sidebar.layoutSettings?sidebar.layoutSettings:[],isDisableAllAds=null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds,isSensitive=null==article?void 0:article.sensitive;let adIndex=0,thirdpartyShown=!1;return Object(jsx_runtime.jsx)(Sidebar_Wrapper,{children:null==layout?void 0:layout.map((comp,i)=>{switch(comp.type){case"Ad":{var _comp$adSource;const id="mpu_bottom_sb_"+adIndex,commonProps={sticky:i===layout.length-1,blockAds:isDisableAllAds||isSensitive};return"partner"!==(null===(_comp$adSource=comp.adSource)||void 0===_comp$adSource?void 0:_comp$adSource.toLowerCase())||thirdpartyShown?(adIndex+=1,1===adIndex?Object(jsx_runtime.jsx)(Ads_Mpu1,{isBest:isBest,...commonProps},"mpu1"):Object(jsx_runtime.jsx)(Sidebar_SidebarAd,{id:id,width:300,height:600,sizes:"120x600|300x250|160x600|300x600",...commonProps},id)):(thirdpartyShown=!0,Object(jsx_runtime.jsx)(Ads_Thirdparty03,{...commonProps},"Thirdparty03"))}case"MostPopular":case"indy100":case"PopularVideos":case"SponsoredFeatures":return Object(react.createElement)(componentMapping[comp.type],{key:comp.type+i,name:comp.name,configuration:configuration});case"Markup":return Object(jsx_runtime.jsx)(HTML.a,{data:comp},comp.type+i);case"Taboola":return isDisableAllAds||isSensitive?null:Object(jsx_runtime.jsx)(Sidebar_TaboolaRightRail,{name:comp.name},comp.type+i);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})})}Sidebar.propTypes={sidebar:prop_types_default.a.object.isRequired,sections:prop_types_default.a.array.isRequired,configuration:prop_types_default.a.object.isRequired,adTargeting:prop_types_default.a.object,isBest:prop_types_default.a.bool,article:prop_types_default.a.object};__webpack_exports__.a=Sidebar},346:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3),commentIcon=__webpack_require__(337);var withScript=__webpack_require__(162),helper=__webpack_require__(62),withCleanAmp=__webpack_require__(211);const Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  padding: 16px 0 0;
  @media ${Styles.c.laptop} {
    padding: 0;
  }
  & amp-social-share {
    margin: 0 18px 0 0;
    outline: none;
    border: solid 1px #e5e5e5;
    background-color: transparent;
    @media ${Styles.c.laptop} {
      margin: 0 12px 0 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`,WrapperContrast=Object(styled_components_browser_esm.default)(Wrapper)``,Comments=styled_components_browser_esm.default.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 0 0 4px;
`,CommentCounter=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.contrastLight};
  width: 26px;
  height: 26px;
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  background: ${props=>props.theme.color.primary};
  display: block;
  position: absolute;
  top: -12px;
  right: -12px;
  text-align: center;
  line-height: 26px;
`;function SocialShare({article:article,className:className,theme:theme="default",configuration:configuration}){let commentId=article.path&&article.path.split("-1-")[1];const Div=Object(helper.a)(theme,WrapperContrast,Wrapper);return Object(jsx_runtime.jsxs)(Div,{className:className,children:[Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":configuration.facebookAppId,width:"30",height:"30","aria-label":"Share to Facebook",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">\n    <path fill="#4b4b49" d="M20 13.6h-3.014V12c0-.826.072-1.346 1.336-1.346h1.598V8.11c-.778-.075-1.56-.112-2.342-.11-2.32 0-4.013 1.326-4.013 3.76v1.84H11v3.2h2.565V24h3.42v-7.202l2.623-.001L20 13.6z"/>\n</svg>'}}),Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:"30",height:"30","aria-label":"Share to Twitter","data-param-text":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">\n    <path fill="#4b4b49" d="M24.533 9.6c-.624.37-1.876.875-2.612 1.02l-.06.02c-.65-.642-1.541-1.04-2.528-1.04-1.988 0-3.6 1.612-3.6 3.6 0 .105-.008.297 0 .4-2.682 0-4.724-1.405-6.188-3.2-.159.4-.228 1.032-.228 1.625 0 1.121.876 2.222 2.24 2.904-.252.065-.529.111-.816.111-.465 0-.957-.122-1.408-.493v.04c0 1.567 1.663 2.633 3.141 2.93-.3.177-.905.195-1.2.195-.208 0-.944-.096-1.14-.133.41 1.284 1.894 2.006 3.307 2.032-1.105.867-1.873 1.188-4.136 1.188h-.772c1.43.917 3.252 1.601 5.078 1.601 5.944 0 9.322-4.53 9.322-8.8 0-.069-.001-.213-.004-.358 0-.014.004-.028.004-.042 0-.022-.006-.043-.006-.064l-.007-.263c.632-.456 1.18-1.025 1.613-1.673-.58.258-1.202.43-1.856.509.668-.4 1.616-1.354 1.856-2.109z"/>\n</svg>'}}),Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:"30",height:"30","aria-label":"Share by email","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">\n    <path fill="#4b4b49" fill-rule="evenodd" d="M21.75 10.5H9.25v10h12.5v-10zM20.5 13l-5 3.125-5-3.125v-1.25l5 3.125 5-3.125V13z" clip-rule="evenodd"/>\n    <mask id="rv5us2lhqa" width="13" height="11" x="9" y="10" maskUnits="userSpaceOnUse">\n        <path fill="#fff" fill-rule="evenodd" d="M21.75 10.5H9.25v10h12.5v-10zM20.5 13l-5 3.125-5-3.125v-1.25l5 3.125 5-3.125V13z" clip-rule="evenodd"/>\n    </mask>\n</svg>\n'}}),commentId&&Object(jsx_runtime.jsx)(Comments,{href:"#comments",dangerouslySetInnerHTML:{__html:commentIcon.a}}),commentId&&article.commentCount&&Object(jsx_runtime.jsx)(CommentCounter,{children:article.commentCount})]})}SocialShare.propTypes={article:prop_types_default.a.any.isRequired,configuration:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,theme:prop_types_default.a.string};const SocialShareWithScript=Object(withScript.a)(SocialShare)`
const buttons = document.querySelectorAll('amp-social-share');
buttons.forEach(async (button) => {
  button.addEventListener('click', async () => {
    const event_name = 'Article Premium Comment';
    const gigya_share_provider = button.getAttribute('type');
    const articleId = await AMP.getState('digitalData.article_id');

    const reportSuiteID = '${props=>{var _props$res$locals$con;return null===(_props$res$locals$con=props.res.locals.configuration.adobe)||void 0===_props$res$locals$con?void 0:_props$res$locals$con.reportSuiteId}}';
    const cacheBuster =
      's' + Math.floor(10000000000000 + Math.random() * 90000000000000);
    const queryParameters = [
      '?AQB=1',
      'ndh=0',
      't=' +
        (function () {
          let today = new Date();
          return (
            today.getDate() +
            '/' +
            today.getMonth() +
            '/' +
            today.getFullYear() +
            ' ' +
            today.getHours() +
            ':' +
            today.getMinutes() +
            ':' +
            today.getSeconds() +
            ' ' +
            today.getDay() +
            ' ' +
            today.getTimezoneOffset()
          );
        })(),
      'g=' + location.href.substring(0, 255),
      '-g=' + location.href.substring(255),
      'events=event10,event41',
      'c9=' + articleId,
      'c72=' + gigya_share_provider,
      'v72=' + gigya_share_provider,
      'pe=lnk_o',
      'pev2=' + event_name,
      'k=N',
      'AQE=1',
    ].join('&');

    let analyticsURL = [
      'https://ssc.standard.co.uk/b/ss/',
      reportSuiteID,
      '/1/JS-2.17.0/',
      cacheBuster,
      queryParameters,
    ].join('');

    const img = document.createElement('amp-img');
    img.setAttribute('src', encodeURI(analyticsURL));
    img.setAttribute('layout', 'fixed');
    img.setAttribute('width', '1');
    img.setAttribute('height', '1');
    img.style.position = 'absolute';
    document.body.appendChild(img);
  });
});
`,SocialShareButtons=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(SocialShareWithScript,{...props}):Object(jsx_runtime.jsx)(SocialShare,{...props});SocialShareButtons.propTypes={...SocialShare.propTypes,cleanAmp:prop_types_default.a.bool};__webpack_exports__.a=Object(withCleanAmp.a)(SocialShareButtons)},347:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),commentIcon=__webpack_require__(337);const Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  & amp-social-share {
    margin: 0 12px 0 0;
    outline: none;
    border-radius: 50%;
    &.amp-social-share-email {
      background-color: #dc062b;
    }
  }
`,Comments=styled_components_browser_esm.default.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 0 0 4px;
`,CommentCounter=styled_components_browser_esm.default.span`
  color: #fff;
  width: 26px;
  height: 26px;
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  background: ${props=>props.theme.color.primary};
  display: block;
  position: absolute;
  top: -12px;
  right: -12px;
  text-align: center;
  line-height: 26px;
`;function SocialShare({article:article,className:className,configuration:configuration}){let commentId=article.path&&article.path.split("-1-")[1];return Object(jsx_runtime.jsxs)(Wrapper,{className:className,children:[Object(jsx_runtime.jsx)("amp-social-share",{type:"whatsapp",width:"30",height:"30","aria-label":"Share by Whatsapp","data-param-subject":article.titleSocial||article.title}),Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:"30",height:"30","aria-label":"Share to Twitter","data-param-text":article.titleSocial||article.title}),configuration.facebookAppId&&Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":configuration.facebookAppId,width:"30",height:"30","aria-label":"Share to Facebook"}),Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:"30",height:"30","aria-label":"Share by email","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xml:space="preserve"><path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/><circle fill="#DC062B" cx="18" cy="18" r="17.938"/>\n<path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/></svg>'}}),commentId&&Object(jsx_runtime.jsx)(Comments,{href:"#comments",dangerouslySetInnerHTML:{__html:commentIcon.a}}),commentId&&article.commentCount&&Object(jsx_runtime.jsx)(CommentCounter,{children:article.commentCount})]})}SocialShare.propTypes={article:prop_types_default.a.any.isRequired,configuration:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,theme:prop_types_default.a.string},SocialShare.__docgenInfo={description:"",methods:[],displayName:"SocialShare",props:{article:{type:{name:"any"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},theme:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=SocialShare;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Insider/SocialShare.js"]={name:"SocialShare",docgenInfo:SocialShare.__docgenInfo,path:"app/component/library/Article/Insider/SocialShare.js"})},348:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" class="masthead" width="336" height="40" viewBox="0 0 336 40" fill="none">\n<path d="M0 0.247559H335.227V39.9998H0V0.247559Z" fill="white"/>\n<g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M53.1944 17.8643V13.6364C53.1944 11.3146 52.4899 10.361 51.329 10.361C49.7536 10.361 48.8006 12.309 48.5933 17.8643H53.1944ZM74.5831 16.2062C74.5831 14.2571 73.3809 13.6364 72.096 13.6364C71.2256 13.6364 70.1479 14.0917 69.7334 14.3827V28.0603C69.7334 29.7184 70.3552 30.2167 71.7228 30.4653V30.9207H60.324V30.4653C61.1117 30.2994 62.148 29.7598 62.148 27.9369V12.6822C62.148 10.8582 61.6502 10.361 60.324 10.1124V9.65652H69.9407L69.6921 13.8431C71.0183 11.356 73.3395 9.24146 76.5317 9.24146C79.3501 9.24146 82.1686 10.5693 82.1686 15.3766V27.9369C82.1686 29.3045 82.3758 30.1748 83.744 30.4653V30.9207H72.9664V30.4653C73.9613 30.2167 74.5831 29.5112 74.5831 27.9369V16.2062ZM86.0238 12.6822C86.0238 11.3146 85.6093 10.361 84.2831 10.1124V9.65652H93.6093V27.9369C93.6093 29.2626 94.1065 30.2994 95.4746 30.4653V30.9207H84.1585V30.4653C85.5261 30.2994 86.0238 29.2626 86.0238 27.9369V12.6822ZM93.8165 4.22638C93.8165 6.46437 91.9512 8.24757 89.7127 8.24757C87.4741 8.24757 85.6507 6.46437 85.6507 4.22638C85.6507 2.02973 87.4741 0.24707 89.7127 0.24707C91.9512 0.24707 93.8165 2.02973 93.8165 4.22638ZM109.9 16.2062C109.9 14.2571 108.697 13.6364 107.413 13.6364C106.542 13.6364 105.464 14.0917 105.049 14.3827V28.0603C105.049 29.7184 105.63 30.2167 107.039 30.4653V30.9207H95.8891V30.4653C96.635 30.2994 97.464 29.7598 97.464 27.9369V12.6822C97.464 10.8582 96.9668 10.361 95.64 10.1124V9.65652H105.257L105.008 13.8431C106.334 11.356 108.656 9.24146 111.848 9.24146C114.667 9.24146 117.485 10.5693 117.485 15.3766V27.9369C117.485 29.3045 117.692 30.1748 119.06 30.4653V30.9207H108.283V30.4653C109.278 30.2167 109.9 29.5112 109.9 27.9369V16.2062ZM130.998 16.0816C130.998 12.0604 130.542 10.2788 129.174 10.2788C127.724 10.2788 127.143 12.0604 127.143 16.0816V16.7453C127.143 20.7649 127.724 22.5481 129.174 22.5481C130.542 22.5481 130.998 20.7649 130.998 16.7453V16.0816ZM205.403 27.191C204.698 29.0145 202.294 31.1698 198.563 31.1698C194.667 31.1698 193.548 28.6408 193.548 26.1537V10.9828H191.683V10.4856C194.46 10.0297 198.48 7.70848 200.677 5.30403H201.133V9.65652H205.279V10.9828H201.133V25.5319C201.133 26.9414 201.796 27.7709 203.123 27.7709C204.034 27.7709 204.739 27.3151 205.029 26.9414L205.403 27.191ZM240.595 16.2062C240.595 14.2571 239.392 13.6364 238.107 13.6364C237.237 13.6364 236.159 14.0917 235.745 14.3827V28.0603C235.745 29.7184 236.325 30.2167 237.734 30.4653V30.9207H226.46V30.4653C227.248 30.2994 228.159 29.7598 228.159 27.9369V12.6822C228.159 10.8582 227.662 10.361 226.335 10.1124V9.65652H235.952L235.704 13.8431C237.03 11.356 239.351 9.24146 242.543 9.24146C245.362 9.24146 248.18 10.5693 248.18 15.3766V27.9369C248.18 29.3045 248.387 30.1748 249.755 30.4653V30.9207H238.978V30.4653C239.973 30.2167 240.595 29.5112 240.595 27.9369V16.2062ZM263.6 25.6151C263.6 27.4396 262.025 28.2268 260.989 28.2268C258.874 28.2268 257.796 26.7341 257.796 24.2888V13.8017C257.796 11.5219 259.331 10.5693 260.864 10.5693C262.191 10.5693 263.6 11.5637 263.6 13.4699V25.6151ZM2.29242 5.34537C2.29242 3.60406 1.6293 2.1543 -1.10645 1.94651V1.24257H22.3549V8.86935H21.5672C18.956 4.55821 18.0851 2.48506 15.3499 2.48506H10.9142V15.5431H12.7382C15.7225 15.5431 16.6348 14.2571 18.127 10.6509H18.7901V21.5939H18.127C16.6348 17.9883 15.7225 16.7034 12.7382 16.7034H10.9142V27.3978C10.9142 28.8899 11.4533 29.6776 13.6913 29.6776H14.9354C19.246 29.6776 20.4895 26.8173 23.2666 22.0922H24.013L23.1839 30.9207H-1.10645V30.2167C1.6293 30.01 2.29242 28.5586 2.29242 26.8173V5.34537ZM273.175 30.9207V30.4653C271.393 30.1748 271.185 29.3045 271.185 27.9369V1.24257H261.32V1.78113C263.351 2.02973 263.6 2.11296 263.6 3.23195V10.8582C262.854 9.98835 261.154 9.24146 258.957 9.24146C254.398 9.24146 249.672 12.8073 249.672 20.6827C249.672 27.9782 252.864 31.4179 257.465 31.4179C260.947 31.4179 262.895 29.3045 263.6 27.8117V30.9207H273.175ZM325.653 25.6151C325.653 27.4396 324.077 28.2268 323.04 28.2268C320.927 28.2268 319.849 26.7341 319.849 24.2888V13.8017C319.849 11.5219 321.382 10.5693 322.917 10.5693C324.243 10.5693 325.653 11.5637 325.653 13.4699V25.6151ZM335.227 30.9207V30.4653C333.445 30.1748 333.237 29.3045 333.237 27.9369V1.24257H323.372V1.78113C325.403 2.02973 325.653 2.11296 325.653 3.23195V10.8582C324.906 9.98835 323.207 9.24146 321.01 9.24146C316.45 9.24146 311.725 12.8073 311.725 20.6827C311.725 27.9782 314.916 31.4179 319.518 31.4179C322.999 31.4179 324.948 29.3045 325.653 27.8117V30.9207H335.227ZM284.284 27.7709V17.9464C283.87 20.1441 280.678 20.6414 280.678 24.4542V24.6207C280.678 26.486 281.962 27.8536 283.579 27.8536C283.787 27.8536 284.036 27.8117 284.284 27.7709ZM303.393 15.7498V27.191C303.393 29.2212 303.974 30.0503 305.756 30.4653V30.9207H294.107V30.4653C294.854 30.2994 295.807 29.7598 295.807 27.9369V12.6822C295.807 11.3146 295.31 10.361 293.984 10.1124V9.65652H303.559C303.393 11.6464 303.393 13.014 303.393 15.7498ZM312.263 13.2213C312.263 15.4593 310.398 17.2425 308.16 17.2425C305.921 17.2425 304.098 15.4593 304.098 13.2213C304.098 11.0247 305.921 9.24146 308.16 9.24146C310.398 9.24146 312.263 11.0247 312.263 13.2213ZM216.636 27.7709V17.9464C216.221 20.1441 213.029 20.6414 213.029 24.4542V24.6207C213.029 26.486 214.315 27.8536 215.931 27.8536C216.138 27.8536 216.387 27.8117 216.636 27.7709ZM119.599 16.3721C119.599 11.9788 123.827 9.24146 129.133 9.24146C130.791 9.24146 132.366 9.53194 133.775 10.0297C134.355 10.1124 134.895 10.1124 135.433 10.1124C137.506 10.1124 139.412 9.6984 141.278 8.86935V12.4755H141.029C139.951 12.3509 137.05 11.4392 135.019 10.6096C137.174 11.895 138.583 13.8431 138.583 16.3721C138.583 20.8486 134.355 23.6252 129.133 23.6252C124.242 23.6252 119.599 21.2637 119.599 16.3721ZM124.2 22.6313C123.827 22.9626 123.537 23.4184 123.537 23.9989C123.537 24.6615 123.91 25.2833 125.444 25.2833L133.568 25.367C138.915 25.4084 140.491 28.3922 140.491 30.8793C140.491 37.3871 133.029 39.9993 127.682 39.9993C120.884 39.9993 118.48 37.9675 118.48 35.5636C118.48 34.1128 119.931 32.6212 122.915 32.6212C123.33 32.6212 123.703 32.662 124.159 32.7039L124.2 32.8274C123.495 33.4083 123.039 34.2787 123.039 35.1905C123.039 36.9318 124.697 38.7144 129.091 38.7144C133.444 38.7144 136.179 36.9318 136.179 34.9418C136.179 33.2838 135.019 32.5793 131.993 32.4547L125.858 32.1648C121.381 31.9575 119.682 29.8017 119.682 27.3151C119.682 25.5737 121.133 23.2933 123.744 22.4229L124.2 22.6313ZM175.973 17.366C173.61 15.6666 171.661 13.3045 171.661 10.1543C171.661 4.72359 176.47 0.827509 183.433 0.827509C186.46 0.827509 189.319 1.53252 191.226 2.23646L191.02 9.24146H190.19C188.076 4.64144 186.626 2.1543 183.475 2.1543C181.071 2.1543 179.289 3.77105 179.289 6.34087C179.289 8.08112 180.449 9.53194 182.107 10.7347L186.543 14.0085C189.942 16.4956 192.055 18.4034 192.055 21.843C192.055 27.8536 186.252 31.3771 180.325 31.3771C176.594 31.3771 173.112 30.2994 171.413 29.3458L171.081 21.4291H171.91C174.48 26.9414 176.678 30.0503 180.159 30.0503C182.48 30.0503 184.304 28.6005 184.304 25.8637C184.304 23.7503 182.688 22.2581 180.573 20.7241L175.973 17.366ZM60.2413 24.0402C59.1217 27.9782 56.0134 31.3771 50.4168 31.3771C44.0336 31.3771 40.552 26.6927 40.552 21.2637C40.552 14.4235 44.6967 9.24146 51.495 9.24146C56.4692 9.24146 60.1999 12.309 60.1999 18.3615V19.1905H48.5933C48.5933 24.6615 51.2464 26.8173 54.1894 26.8173C56.1787 26.8173 58.2514 26.071 59.7854 23.8324L60.2413 24.0402ZM227.206 28.7659C225.797 30.2581 223.641 31.4179 220.947 31.4179C218.336 31.4179 216.967 30.2167 216.678 28.4335C215.599 30.0916 213.859 31.3771 211.247 31.3771C207.932 31.3771 205.609 29.1391 205.609 25.9883C205.609 22.2162 208.18 20.8486 212.284 19.771C215.599 18.9006 216.802 17.7392 216.802 15.2112V15.0453C216.802 12.4341 214.687 10.7347 212.076 10.7347C211.454 10.7347 210.791 10.8174 210.128 11.0247C212.035 11.19 213.61 12.7654 213.61 14.6721C213.61 16.7453 211.91 18.3615 209.796 18.3615C207.807 18.3615 206.273 16.7861 206.273 14.7967C206.273 11.356 210.957 9.24146 216.138 9.24146C221.154 9.24146 224.304 11.2314 224.304 14.9207C224.304 14.9626 224.304 19.8123 224.221 27.2313C224.221 28.1017 224.635 28.8072 225.548 28.8072C225.921 28.8072 226.419 28.6827 226.957 28.3922L227.206 28.7659ZM294.854 28.7659C293.445 30.2581 291.289 31.4179 288.595 31.4179C285.983 31.4179 284.616 30.2167 284.325 28.4335C283.248 30.0916 281.507 31.3771 278.895 31.3771C275.579 31.3771 273.258 29.1391 273.258 25.9883C273.258 22.2162 275.828 20.8486 279.932 19.771C283.248 18.9006 284.45 17.7392 284.45 15.2112V15.0453C284.45 12.4341 282.336 10.7347 279.725 10.7347C279.103 10.7347 278.44 10.8174 277.776 11.0247C279.683 11.19 281.258 12.7654 281.258 14.6721C281.258 16.7453 279.559 18.3615 277.445 18.3615C275.455 18.3615 273.921 16.7861 273.921 14.7967C273.921 11.356 278.605 9.24146 283.787 9.24146C288.802 9.24146 291.952 11.2314 291.952 14.9207C291.952 14.9626 291.952 19.8123 291.869 27.2313C291.869 28.1017 292.284 28.8072 293.196 28.8072C293.569 28.8072 294.066 28.6827 294.605 28.3922L294.854 28.7659ZM34.9973 30.9207H28.8627L23.1007 13.1381C22.4795 11.2727 21.7744 10.4023 20.9041 10.1124V9.65652H33.8783V10.1124C31.6398 10.4856 30.7694 11.356 31.3912 13.3872L35.3291 26.3615L38.5621 14.714C38.8526 13.6364 39.0179 12.8073 39.0179 12.0191C39.0179 10.6096 38.0649 10.2788 36.8626 10.1124V9.65652H43.4537V10.1124C42.2928 10.5274 41.4637 11.1079 40.3029 14.5476L34.9973 30.9207Z" fill="#1A1919"/>\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.637 22.68C162.682 22.6161 162.704 22.5495 162.669 22.4819C162.631 22.4073 162.564 22.3697 162.48 22.3643C162.448 22.3632 162.417 22.3611 162.386 22.3632C162.32 22.3675 162.277 22.4459 162.315 22.5007C162.393 22.6108 162.482 22.7079 162.637 22.68Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.378 16.2643C149.173 16.2149 148.986 16.1499 148.795 16.129C148.552 16.1027 148.315 16.0522 148.079 15.9942C147.991 15.9716 147.904 15.955 147.789 15.9829C147.987 16.0978 148.16 16.1982 148.334 16.2986C148.354 16.3104 148.374 16.3255 148.395 16.3325C148.433 16.3437 148.471 16.3556 148.51 16.3572C148.776 16.3733 149.042 16.3609 149.306 16.3217C149.325 16.319 149.341 16.2943 149.378 16.2643Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M155.287 14.0709C155.293 14.0908 155.293 14.1165 155.305 14.1348C155.336 14.1793 155.37 14.2234 155.408 14.2626C155.474 14.3313 155.511 14.3388 155.594 14.2862C155.75 14.189 155.917 14.1214 156.091 14.0725C156.552 13.9436 157.014 13.8636 157.485 14.0183C157.507 14.0258 157.531 14.0274 157.555 14.029C157.601 14.0328 157.644 13.9705 157.619 13.9307C157.599 13.8996 157.572 13.8658 157.541 13.8481C157.428 13.7842 157.304 13.76 157.178 13.7562C156.989 13.7503 156.8 13.7568 156.611 13.7476C156.219 13.7305 155.846 13.8244 155.477 13.9383C155.405 13.9613 155.324 13.9834 155.287 14.0709Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M163.55 17.06C163.583 16.9247 163.614 16.82 163.635 16.7132C163.641 16.6772 163.633 16.6321 163.614 16.601C163.513 16.4238 163.246 16.4195 163.147 16.5961C163.081 16.7148 163.064 16.8485 163.074 16.9838C163.077 17.0203 163.096 17.0584 163.117 17.0917C163.239 17.2995 163.397 17.4703 163.616 17.5782C163.687 17.6131 163.763 17.6389 163.829 17.6807C163.961 17.764 164.096 17.8445 164.216 17.9455C164.373 18.0776 164.435 18.266 164.47 18.4636C164.479 18.5136 164.465 18.5769 164.547 18.6059C164.592 18.454 164.622 18.3063 164.536 18.1608C164.447 18.0126 164.364 17.8606 164.261 17.7226C164.168 17.5981 164.059 17.4799 163.912 17.4123C163.747 17.3366 163.647 17.1975 163.55 17.06Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M161.063 28.7788C160.991 28.8314 160.943 28.8577 160.909 28.8943C160.81 29.0043 160.688 29.0736 160.546 29.101C160.376 29.1321 160.206 29.1638 160.034 29.1794C159.911 29.1933 159.784 29.1826 159.66 29.1794C159.454 29.1772 159.25 29.1617 159.047 29.1702C158.879 29.1772 158.732 29.2551 158.607 29.3727C158.482 29.4908 158.461 29.5966 158.58 29.7689C158.646 29.8645 158.75 29.9064 158.871 29.8833C158.988 29.8634 159.052 29.7969 159.062 29.6777C159.065 29.6492 159.078 29.6197 159.082 29.5987C159.225 29.516 159.365 29.4677 159.517 29.4586C159.642 29.4511 159.768 29.4398 159.893 29.4387C160.117 29.4376 160.33 29.3963 160.528 29.2916C160.598 29.2562 160.656 29.1949 160.727 29.1681C160.866 29.1123 160.953 29 161.046 28.8943C161.06 28.8776 161.054 28.8416 161.063 28.7788Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M157.305 19.2729C157.278 19.3954 157.326 19.4732 157.349 19.5538C157.397 19.7283 157.465 19.898 157.492 20.0741C157.513 20.2115 157.559 20.3302 157.63 20.4456C157.824 20.7598 158.019 21.0728 158.205 21.3923C158.342 21.6318 158.457 21.8809 158.547 22.1445C158.449 22.3636 158.406 22.5838 158.503 22.8238C158.551 22.7959 158.554 22.7577 158.564 22.7201C158.605 22.5607 158.644 22.3948 158.763 22.2734C158.862 22.1714 158.855 22.0699 158.811 21.9502C158.703 21.6538 158.554 21.3778 158.39 21.1093C158.239 20.8596 158.072 20.6218 157.909 20.3801C157.821 20.2491 157.659 19.9087 157.615 19.7616C157.561 19.5822 157.486 19.4126 157.305 19.2729Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M165.129 12.6556C165.132 12.6416 165.134 12.6277 165.136 12.6126C165.119 12.6003 165.103 12.5777 165.084 12.5756C164.796 12.5477 164.505 12.5187 164.213 12.5332C163.938 12.5466 163.662 12.5573 163.388 12.5697C163.309 12.574 163.23 12.5777 163.152 12.5858C162.668 12.6395 162.183 12.6862 161.709 12.8097C161.39 12.8929 161.065 12.9563 160.746 13.0341C160.249 13.1549 159.762 13.3123 159.28 13.4809C158.864 13.6269 158.453 13.7864 158.04 13.9405C157.988 13.9593 157.935 13.9802 157.891 14.0098C157.855 14.0329 157.831 14.0726 157.797 14.1112C157.899 14.2202 158.002 14.2986 158.129 14.3582C158.193 14.3233 158.255 14.29 158.316 14.2557C158.452 14.1773 158.582 14.0849 158.725 14.0221C159.049 13.8798 159.375 13.744 159.708 13.6194C159.986 13.5142 160.27 13.4202 160.556 13.3354C160.88 13.2387 161.209 13.1582 161.535 13.0696C161.997 12.9429 162.466 12.8279 162.942 12.77C163.607 12.6894 164.274 12.6395 164.945 12.6556C165.005 12.6577 165.068 12.6556 165.129 12.6556Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.446 22.2305C162.529 22.3175 162.64 22.3331 162.745 22.3605C162.833 22.3814 162.917 22.3749 162.999 22.3417C163.272 22.2262 163.397 21.8788 163.263 21.6103C163.239 21.5625 163.209 21.5153 163.184 21.468C163.108 21.3231 163.113 21.1797 163.2 21.0422C163.271 20.93 163.348 20.8221 163.428 20.7158C163.578 20.5198 163.791 20.3942 163.977 20.2379C164.24 20.0167 164.453 19.7606 164.55 19.4217C164.588 19.2897 164.574 19.1576 164.551 19.0265C164.548 19.0099 164.518 18.9879 164.5 18.9868C164.483 18.9868 164.453 19.0056 164.447 19.0233C164.425 19.0904 164.414 19.1608 164.392 19.2279C164.361 19.3256 164.344 19.4346 164.285 19.512C164.17 19.6591 164.048 19.8132 163.895 19.9168C163.7 20.05 163.522 20.2019 163.334 20.3426C163.034 20.567 162.79 20.8344 162.604 21.1614C162.461 21.4122 162.399 21.6683 162.429 21.9513C162.438 22.0361 162.44 22.1215 162.446 22.2305Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.489 9.64825C147.809 8.20226 146.588 6.45557 145.836 4.37598C145.794 4.39692 145.765 4.40551 145.743 4.42323C145.664 4.48874 145.637 4.57948 145.635 4.67667C145.632 4.83507 145.648 4.99024 145.706 5.14059C145.823 5.44987 145.964 5.7468 146.126 6.03568C146.395 6.51517 146.661 6.99681 147.008 7.42691C147.256 7.73243 147.494 8.04762 147.756 8.34025C148.14 8.7682 148.591 9.12527 149.053 9.4673C149.135 9.52798 149.217 9.58973 149.3 9.64772C149.347 9.67886 149.397 9.70356 149.489 9.64825Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.244 36.328C149.273 36.2647 149.287 36.2437 149.29 36.2238C149.306 36.0918 149.321 35.9586 149.333 35.8254C149.354 35.6053 149.393 35.3916 149.471 35.1816C149.588 34.8659 149.694 34.5459 149.827 34.2355C149.964 33.9177 150.068 33.5864 150.184 33.2615C150.265 33.0328 150.342 32.8008 150.42 32.5705C150.536 32.2284 150.648 31.8842 150.766 31.5433C150.822 31.3811 150.906 31.2281 150.923 31.0514C150.929 30.9918 150.96 30.9312 150.988 30.8753C151.028 30.7969 151.042 30.7137 151.056 30.6289C151.074 30.5123 151.114 30.4007 151.149 30.2884C151.166 30.2272 151.2 30.173 151.215 30.1118C151.245 29.9861 151.252 29.8626 151.177 29.7483C151.154 29.7144 151.13 29.6844 151.072 29.7064C151.015 29.7993 150.986 29.9147 150.947 30.0248C150.917 30.108 150.849 30.1182 150.782 30.0565C150.546 29.8374 150.439 29.5539 150.394 29.2425C150.379 29.1335 150.361 29.0255 150.344 28.9176C150.33 28.8387 150.296 28.7716 150.208 28.7275C150.188 28.7667 150.157 28.8 150.156 28.8328C150.155 28.974 150.155 29.1136 150.168 29.2554C150.182 29.4019 150.222 29.5491 150.229 29.6957C150.241 29.9077 150.234 30.1193 150.234 30.3314C150.234 30.4415 150.24 30.5515 150.234 30.6605C150.223 30.8565 150.207 31.0514 150.192 31.2469C150.178 31.4198 150.167 31.5916 150.146 31.7618C150.084 32.2714 149.952 32.7643 149.828 33.2594C149.755 33.5488 149.661 33.8328 149.601 34.1255C149.535 34.4509 149.424 34.7623 149.314 35.0726C149.205 35.3798 149.154 35.6944 149.149 36.0177C149.148 36.074 149.146 36.1304 149.159 36.182C149.168 36.2238 149.201 36.2577 149.244 36.328Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.398 11.415C146.306 11.5589 146.298 11.72 146.364 11.8827C146.43 12.047 146.531 12.1844 146.686 12.2779C146.733 12.3053 146.778 12.3353 146.807 12.3547C146.813 12.4905 146.798 12.6119 146.828 12.7214C146.909 13.0232 146.987 13.0817 147.266 13.079C147.479 13.0769 147.691 13.0618 147.903 13.0548C148.032 13.05 148.153 13.0205 148.267 12.9646C148.627 12.7864 148.986 12.6065 149.344 12.4261C149.37 12.4132 149.388 12.3879 149.429 12.3514C149.342 12.3198 149.277 12.2977 149.213 12.273C149.03 12.2032 148.842 12.1415 148.665 12.0588C148.367 11.9197 148.079 11.7527 147.776 11.6228C147.477 11.4966 147.205 11.3248 146.933 11.1524C146.755 11.0391 146.588 10.9038 146.432 10.7615C146.2 10.5484 145.997 10.3084 145.836 10.0345C145.817 10.0012 145.791 9.97062 145.765 9.94108C145.739 9.91263 145.709 9.8847 145.658 9.92122C145.636 10.0506 145.682 10.179 145.696 10.31C145.716 10.4984 145.789 10.6563 145.907 10.8007C146.066 10.9946 146.22 11.1938 146.398 11.415Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M150.339 11.5187C150.409 11.4569 150.382 11.4172 150.328 11.3802C149.985 11.1444 149.641 10.9093 149.298 10.6714C148.787 10.3192 148.258 9.99055 147.798 9.56904C147.508 9.30379 147.173 9.08848 146.911 8.79208C146.719 8.57408 146.52 8.35769 146.35 8.12358C146.039 7.69403 145.815 7.21561 145.629 6.71947C145.472 6.30441 145.424 5.8813 145.509 5.44368C145.514 5.41308 145.519 5.3814 145.524 5.35026C145.553 5.18488 145.443 5.05118 145.422 4.896C145.414 4.83479 145.38 4.77733 145.304 4.74512C145.2 4.82942 145.139 4.94432 145.095 5.06943C144.934 5.5253 144.966 5.98761 145.089 6.44079C145.221 6.92619 145.429 7.38582 145.672 7.82719C145.706 7.88733 145.734 7.95069 145.759 8.00438C145.637 8.20466 145.635 8.23903 145.69 8.43877C145.739 8.61811 145.83 8.77329 145.953 8.90967C146.105 9.07827 146.258 9.24795 146.429 9.39937C146.629 9.57549 146.809 9.77523 147.035 9.92128C147.471 10.2043 147.903 10.491 148.353 10.7493C148.804 11.0102 149.288 11.1987 149.78 11.3678C149.963 11.4312 150.156 11.4698 150.339 11.5187Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M153.435 13.4415C153.465 13.4163 153.497 13.4023 153.507 13.3787C153.522 13.3438 153.526 13.3014 153.524 13.2638C153.506 12.8944 153.515 12.5234 153.454 12.1561C153.403 11.8538 153.373 11.5472 153.299 11.2508C153.221 10.9383 153.114 10.6322 152.998 10.3321C152.866 9.98683 152.716 9.64856 152.563 9.31189C152.437 9.03268 152.304 8.75454 152.158 8.4866C151.966 8.13383 151.758 7.79072 151.555 7.44385C151.485 7.32197 151.409 7.20116 151.333 7.08195C151.314 7.0535 151.282 7.03309 151.23 6.98584C151.233 7.04866 151.226 7.08088 151.238 7.10558C151.262 7.16303 151.305 7.21404 151.324 7.27311C151.405 7.51795 151.468 7.77032 151.56 8.01141C151.661 8.27827 151.711 8.55641 151.76 8.83347C151.806 9.10409 151.814 9.38116 151.836 9.65446C151.867 10.0534 151.794 10.4389 151.66 10.8116C151.59 11.0033 151.488 11.1821 151.406 11.3695C151.301 11.6111 151.162 11.8259 150.943 11.9811C150.933 11.988 150.932 12.0079 150.922 12.0364C150.99 12.0503 151.055 12.0686 151.122 12.0788C151.453 12.1276 151.76 12.2468 152.048 12.4149C152.437 12.641 152.797 12.9078 153.158 13.1741C153.221 13.2203 153.273 13.281 153.33 13.3363C153.363 13.368 153.396 13.4013 153.435 13.4415Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M151.216 22.211C151.083 22.3324 150.961 22.4564 150.827 22.5633C150.618 22.7308 150.401 22.8881 150.187 23.0476C149.957 23.2205 150.044 23.2189 149.751 23.1002C149.694 23.0771 149.642 23.0363 149.594 22.9971C149.498 22.9155 149.405 22.8296 149.314 22.7447C149.258 22.69 149.2 22.6325 149.157 22.5676C148.969 22.2781 148.789 21.9823 148.69 21.6456C148.686 21.6327 148.673 21.6215 148.657 21.5973C148.603 21.5785 148.538 21.5554 148.47 21.5312C148.444 21.5656 148.422 21.5876 148.407 21.6129C148.283 21.8239 148.174 22.043 148.035 22.2411C147.822 22.5477 147.647 22.8725 147.472 23.1979C147.338 23.446 147.227 23.7075 147.108 23.9642C147.08 24.0254 147.047 24.0903 147.103 24.1612C147.159 24.1365 147.211 24.1183 147.26 24.093C147.354 24.0442 147.455 24.0313 147.558 24.0366C147.833 24.0533 148.103 24.0721 148.371 24.1596C148.752 24.2831 149.142 24.2611 149.491 24.0597C149.686 23.9464 149.889 23.8729 150.098 23.8058C150.286 23.7462 150.48 23.7145 150.68 23.7188C150.995 23.7252 151.307 23.6747 151.619 23.6404C151.666 23.635 151.713 23.6253 151.757 23.6098C151.927 23.5469 152.096 23.483 152.264 23.4149C152.43 23.3477 152.549 23.1926 152.735 23.1598C152.748 23.1577 152.76 23.141 152.773 23.1324C153.108 22.8913 153.313 22.5466 153.533 22.211C153.572 22.1498 153.576 22.0789 153.521 22.0145C153.497 22.0118 153.473 22.0022 153.452 22.0064C153.39 22.0177 153.329 22.0354 153.269 22.0516C153.132 22.0838 152.995 22.1342 152.856 22.1477C152.543 22.1783 152.229 22.1971 151.915 22.2089C151.679 22.218 151.443 22.211 151.216 22.211Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M148.415 39.1942C148.256 39.3097 148.226 39.3349 148.046 39.3666C147.806 39.4063 147.562 39.4359 147.32 39.4589C147.038 39.4836 146.755 39.4987 146.472 39.5175C146.449 39.5185 146.421 39.5186 146.404 39.5298C146.373 39.5513 146.334 39.576 146.323 39.6088C146.286 39.707 146.289 39.8101 146.339 39.9057C146.367 39.9588 146.412 39.9895 146.471 39.9916C146.542 39.9948 146.613 39.9948 146.684 39.9948C148.315 39.9916 149.945 39.9884 151.576 39.9841C151.639 39.9841 151.702 39.9852 151.765 39.9819C151.855 39.9766 151.888 39.9422 151.897 39.8488C151.899 39.8187 151.9 39.7859 151.899 39.7553C151.892 39.6131 151.853 39.5502 151.716 39.5196C151.54 39.4799 151.36 39.4557 151.182 39.4251C151.129 39.416 151.076 39.4074 151.029 39.3999C150.956 39.2479 150.963 39.0761 150.821 38.9553C150.753 38.9521 150.675 38.9397 150.598 38.9472C150.504 38.9542 150.409 38.9693 150.32 38.9982C150.168 39.0487 150.026 39.0278 149.881 38.9773C149.61 38.8828 149.367 38.7373 149.166 38.5316C149.096 38.4602 149.048 38.3668 148.997 38.2787C148.97 38.2326 148.965 38.1719 148.937 38.1246C148.869 38.0113 148.861 37.8889 148.871 37.7611C148.877 37.6978 148.882 37.6349 148.877 37.5721C148.863 37.3412 148.725 37.2301 148.499 37.265C148.461 37.2698 148.423 37.2838 148.384 37.2902C148.241 37.3112 148.134 37.2333 148.121 37.0905C148.116 37.0298 148.12 36.9627 148.142 36.9052C148.205 36.7361 148.265 36.5621 148.351 36.4048C148.598 35.9591 148.737 35.478 148.831 34.9808C148.903 34.6023 148.984 34.2259 149.053 33.8462C149.095 33.6143 149.149 33.3845 149.151 33.1477C149.153 32.8142 149.225 32.4921 149.313 32.172C149.378 31.9385 149.441 31.7011 149.501 31.4665C149.515 31.4139 149.519 31.3575 149.521 31.3038C149.53 31.0702 149.455 30.8393 149.516 30.6106C149.334 30.5446 149.329 30.5467 149.261 30.6767C149.247 30.704 149.234 30.7336 149.219 30.7615C149.009 31.1916 148.797 31.6228 148.587 32.0539C148.478 32.2762 148.411 32.5076 148.427 32.7584C148.444 33.0177 148.461 33.2765 148.48 33.5364C148.492 33.7168 148.495 33.8983 148.456 34.0777C148.414 34.2699 148.379 34.4637 148.332 34.6544C148.267 34.9207 148.187 35.1843 148.127 35.4539C148.057 35.7546 147.93 36.0338 147.803 36.3135C147.787 36.3495 147.767 36.386 147.739 36.4102C147.609 36.5235 147.545 36.6776 147.473 36.8252C147.348 37.0814 147.358 37.3321 147.545 37.5533C147.739 37.7842 147.851 38.0516 147.912 38.3367C147.951 38.5214 148.035 38.6734 148.143 38.82C148.231 38.9386 148.317 39.0584 148.415 39.1942Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.891 13.2978C146.784 13.3805 146.767 13.4659 146.804 13.5652C146.914 13.8568 147.062 14.1215 147.356 14.2944C147.222 14.5038 147.076 14.7041 147.082 14.9618C147.087 15.2083 147.121 15.4467 147.259 15.6571C147.289 15.6604 147.313 15.6668 147.335 15.6641C147.605 15.6276 147.869 15.6679 148.131 15.7253C148.254 15.7538 148.372 15.7651 148.5 15.7409C148.677 15.7076 148.86 15.7033 149.04 15.6926C149.197 15.6835 149.355 15.684 149.512 15.6759C149.585 15.6716 149.626 15.6142 149.606 15.5449C149.579 15.4547 149.542 15.3672 149.512 15.2775C149.464 15.1299 149.403 14.9827 149.436 14.8158C149.464 14.7991 149.49 14.7835 149.518 14.7685C149.742 14.6482 149.983 14.5811 150.236 14.5505C150.274 14.5457 150.316 14.5408 150.308 14.4726C150.252 14.4608 150.192 14.4399 150.131 14.4345C149.966 14.4206 149.801 14.4028 149.637 14.4071C149.368 14.4152 149.129 14.3169 148.889 14.2203C148.854 14.2069 148.821 14.1789 148.799 14.1489C148.729 14.0549 148.667 13.9545 148.643 13.8348C148.626 13.7564 148.649 13.7021 148.706 13.6474C148.848 13.5126 149.02 13.4396 149.201 13.3837C149.412 13.3198 149.623 13.2554 149.834 13.1958C149.947 13.1641 150.063 13.1394 150.178 13.1163C150.268 13.0975 150.351 13.1206 150.419 13.1834C150.6 13.3504 150.754 13.5373 150.842 13.7709C150.926 13.9915 151.016 14.2101 151.086 14.434C151.149 14.6284 151.189 14.8286 151.234 15.0284C151.246 15.0805 151.24 15.1368 151.239 15.1932C151.237 15.2947 151.23 15.3973 151.229 15.4998C151.227 15.5444 151.231 15.589 151.232 15.6351C151.268 15.6416 151.291 15.6469 151.313 15.648C151.491 15.6502 151.65 15.5798 151.813 15.5229C152.241 15.372 152.663 15.3753 153.069 15.5954C153.228 15.6818 153.378 15.7828 153.534 15.8741C153.594 15.9101 153.66 15.9364 153.724 15.9632C153.734 15.9675 153.756 15.9584 153.765 15.9482C153.775 15.939 153.782 15.9192 153.778 15.9079C153.771 15.8859 153.758 15.8655 153.744 15.8467C153.496 15.5197 153.283 15.1712 153.083 14.8147C152.844 14.3883 152.584 13.976 152.266 13.6044C152.036 13.3359 151.81 13.0626 151.527 12.8441C151.471 12.8017 151.414 12.7592 151.352 12.726C151.065 12.5729 150.754 12.4849 150.441 12.4059C150.338 12.3802 150.23 12.3571 150.101 12.3893C150.155 12.4688 150.2 12.5353 150.257 12.6191C150.18 12.6325 150.128 12.6454 150.077 12.6508C149.88 12.6728 149.685 12.7029 149.502 12.7754C149.306 12.8527 149.091 12.8881 148.922 13.0283C148.905 13.0428 148.879 13.046 148.857 13.0551C148.483 13.2044 148.097 13.3112 147.702 13.3859C147.429 13.4374 147.154 13.4508 146.891 13.2978Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.585 15.9761C146.468 15.9949 146.39 16.0786 146.297 16.1313C146.196 16.1876 146.145 16.2832 146.122 16.3987C146.101 16.5044 146.106 16.6038 146.151 16.6983C146.242 16.8905 146.33 17.0843 146.433 17.269C146.636 17.6288 146.875 17.9601 147.232 18.1856C147.248 18.1963 147.255 18.2232 147.27 18.2484C147.205 18.3526 147.112 18.4224 147.02 18.4949C146.75 18.7048 146.453 18.7553 146.129 18.6452C146.07 18.6259 146.011 18.6007 145.95 18.5856C145.78 18.5443 145.622 18.5556 145.495 18.6962C145.437 18.7601 145.37 18.8171 145.314 18.882C145.163 19.0555 145.085 19.2557 145.086 19.4872C145.087 19.5742 145.08 19.6606 145.088 19.7465C145.105 19.9403 145.08 20.124 144.951 20.2668C144.986 20.4091 145.074 20.4827 145.192 20.5203C145.323 20.5611 145.461 20.5696 145.582 20.5015C145.719 20.4236 145.86 20.4 146.013 20.4091C146.091 20.4134 146.171 20.4102 146.248 20.4C146.313 20.3914 146.356 20.3339 146.362 20.2673C146.372 20.146 146.346 20.0316 146.301 19.9216C146.268 19.8421 146.183 19.8061 146.085 19.8179C146.022 19.826 145.96 19.848 145.899 19.8426C145.782 19.8335 145.685 19.8711 145.589 19.9318C145.525 19.971 145.459 20.0193 145.359 19.9983C145.364 19.7444 145.423 19.5135 145.563 19.3078C145.65 19.1811 145.769 19.0973 145.928 19.07C146.106 19.0372 146.28 18.983 146.457 18.9491C146.669 18.9094 146.869 18.8466 147.046 18.7188C147.066 18.7048 147.096 18.7038 147.143 18.6919C147.133 18.7532 147.129 18.7918 147.12 18.8278C147.093 18.9502 147.066 19.0732 147.035 19.1945C147.008 19.3041 147.015 19.4098 147.044 19.521C147.095 19.7202 147.189 19.8829 147.37 19.9897C147.396 20.0053 147.416 20.0284 147.443 20.0515C147.424 20.102 147.406 20.1439 147.389 20.189C147.356 20.2749 147.318 20.3629 147.292 20.4531C147.222 20.6819 147.224 20.8956 147.385 21.098C147.494 21.2365 147.597 21.3686 147.757 21.4508C147.84 21.4948 147.904 21.4841 147.973 21.4298C148.028 21.3847 148.085 21.3434 148.143 21.3047C148.362 21.1549 148.609 21.076 148.865 21.0261C148.983 21.0019 149.063 20.9482 149.124 20.8446C149.25 20.6357 149.386 20.4322 149.519 20.2276C149.648 20.0284 149.792 19.841 149.985 19.6982C150.11 19.608 150.16 19.4861 150.174 19.3363C150.187 19.18 150.208 19.0227 150.244 18.8697C150.28 18.7177 150.339 18.5706 150.389 18.4213C150.425 18.3075 150.474 18.2023 150.562 18.1174C150.585 18.0959 150.591 18.0557 150.607 18.0127C150.549 18.0084 150.51 17.9998 150.472 18.0041C150.298 18.0234 150.146 17.9655 149.999 17.8833C149.965 17.8645 149.929 17.8473 149.897 17.8248C149.736 17.7099 149.553 17.6728 149.362 17.6696C149.299 17.6685 149.235 17.6685 149.173 17.6632C149.147 17.6605 149.122 17.6444 149.071 17.624C149.13 17.5891 149.163 17.5708 149.195 17.5499C149.295 17.4827 149.395 17.4838 149.508 17.5262C149.676 17.5912 149.849 17.647 150.022 17.6991C150.165 17.7426 150.313 17.7695 150.444 17.8473C150.529 17.8983 150.611 17.8758 150.683 17.8135C150.728 17.7748 150.768 17.7314 150.825 17.6771C150.866 17.7705 150.848 17.8495 150.861 17.9236C150.876 18.0095 150.896 18.0927 150.912 18.177C150.919 18.2168 150.933 18.257 150.928 18.2946C150.904 18.4509 150.964 18.5872 151.025 18.7247C151.082 18.8552 151.132 18.9862 151.194 19.114C151.248 19.2273 151.31 19.3374 151.378 19.4421C151.454 19.5629 151.559 19.6552 151.707 19.7347C151.703 19.6772 151.711 19.6354 151.698 19.6037C151.672 19.5387 151.634 19.4791 151.599 19.4168C151.486 19.2176 151.373 19.0206 151.261 18.8214C151.235 18.7741 151.203 18.7226 151.196 18.6699C151.168 18.4444 151.129 18.2173 151.131 17.9907C151.133 17.6922 151.167 17.3947 151.19 17.0972C151.199 16.9796 151.217 16.8636 151.228 16.7461C151.232 16.7004 151.229 16.6537 151.229 16.6022C151.124 16.5474 151.029 16.491 150.929 16.4502C150.865 16.4239 150.793 16.4185 150.723 16.4072C150.715 16.4056 150.703 16.425 150.681 16.4464C150.707 16.4722 150.731 16.4996 150.758 16.5232C150.788 16.5485 150.827 16.5656 150.851 16.5952C150.868 16.6156 150.882 16.6596 150.872 16.6773C150.854 16.7069 150.815 16.7428 150.785 16.7418C150.732 16.7418 150.68 16.7187 150.628 16.7015C150.568 16.6822 150.511 16.6526 150.45 16.6371C150.378 16.6199 150.277 16.7396 150.304 16.8089C150.312 16.8277 150.335 16.8497 150.354 16.854C150.392 16.862 150.432 16.862 150.472 16.861C150.599 16.8577 150.72 16.8873 150.833 16.9281C150.862 17.1042 150.847 17.1294 150.711 17.1472C150.703 17.1482 150.695 17.1493 150.687 17.1493C150.499 17.1482 150.313 17.2051 150.123 17.1751C150.078 17.1681 150.048 17.1939 150.039 17.2384C150.029 17.2878 150.062 17.3351 150.112 17.3399C150.151 17.3437 150.191 17.3405 150.229 17.3426C150.285 17.3442 150.339 17.3458 150.395 17.349C150.465 17.3539 150.507 17.3968 150.536 17.458C150.555 17.4972 150.56 17.5375 150.528 17.567C150.509 17.5848 150.472 17.6014 150.446 17.596C150.315 17.5719 150.185 17.5397 150.054 17.5123C149.922 17.4849 149.797 17.4462 149.681 17.3727C149.589 17.3141 149.487 17.2712 149.391 17.218C149.339 17.1906 149.284 17.1756 149.232 17.2019C148.986 17.3238 148.72 17.4033 148.488 17.5563C148.324 17.6642 148.162 17.7732 147.977 17.8511C147.855 17.9048 147.745 17.9048 147.639 17.8489C147.416 17.7314 147.198 17.6003 147.037 17.4006C146.854 17.1724 146.695 16.9313 146.601 16.6494C146.551 16.5012 146.53 16.3611 146.576 16.2107C146.599 16.1377 146.624 16.062 146.585 15.9761Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M153.431 10.5223C153.442 10.5217 153.452 10.5217 153.461 10.5206C153.452 10.4197 153.456 10.3161 153.43 10.2194C153.335 9.86181 153.233 9.50582 153.084 9.16539C152.882 8.70416 152.647 8.25849 152.406 7.81605C152.388 7.78115 152.364 7.74947 152.342 7.71618C152.21 7.5116 152.072 7.31024 151.947 7.10137C151.755 6.77652 151.571 6.4463 151.386 6.11661C151.297 5.95929 151.213 5.79981 151.125 5.64142C150.951 5.32462 150.77 5.01158 150.602 4.69209C150.484 4.4698 150.384 4.23837 150.272 4.01286C150.173 3.81687 150.078 3.61981 150.009 3.40987C149.972 3.29872 149.929 3.18864 149.888 3.07857C149.744 2.70378 149.599 2.33007 149.457 1.9542C149.399 1.8001 149.352 1.64278 149.291 1.48975C149.236 1.35121 149.167 1.21805 149.108 1.08059C149.004 0.833598 148.883 0.596804 148.725 0.378267C148.605 0.212351 148.45 0.0979813 148.265 0.0228088C148.222 0.00508961 148.172 -0.00350154 148.127 0.00133098C147.953 0.0217349 147.789 0.0732818 147.657 0.196243C147.449 0.390617 147.324 0.629558 147.262 0.906623C147.223 1.08596 147.181 1.80601 147.197 1.98803C147.201 2.03099 147.217 2.08361 147.146 2.11368C146.957 1.97139 146.734 1.91501 146.492 1.90964C146.273 1.90319 146.111 1.98803 146 2.17328C145.972 2.21999 145.948 2.26993 145.926 2.3204C145.802 2.60552 145.744 2.90567 145.742 3.2171C145.74 3.49685 145.794 3.76586 145.894 4.02467C145.991 4.28133 146.106 4.53155 146.21 4.78606C146.391 5.22421 146.624 5.63551 146.868 6.03822C147.1 6.42213 147.348 6.79639 147.597 7.16849C147.804 7.4767 148.01 7.78437 148.237 8.07593C148.537 8.46199 148.884 8.80564 149.239 9.1423C149.41 9.30393 149.569 9.48326 149.752 9.62878C150.048 9.86289 150.36 10.0766 150.666 10.2994C150.684 10.3118 150.707 10.3263 150.729 10.3284C150.749 10.3306 150.777 10.323 150.791 10.3091C150.805 10.2951 150.816 10.2645 150.812 10.2468C150.8 10.2114 150.782 10.1727 150.757 10.1469C150.661 10.0524 150.561 9.96329 150.463 9.87255C150.337 9.75389 150.209 9.63737 150.086 9.51602C149.973 9.40595 149.865 9.29104 149.756 9.17721C149.496 8.90444 149.211 8.65315 148.975 8.35514C148.834 8.17634 148.693 7.99807 148.546 7.82357C148.293 7.52341 148.07 7.19641 147.84 6.87747C147.398 6.26588 147.115 5.57215 146.84 4.87734C146.677 4.46604 146.59 4.03219 146.486 3.6037C146.427 3.35778 146.436 3.10273 146.476 2.85198C146.491 2.76016 146.526 2.66995 146.564 2.58404C146.616 2.46806 146.695 2.4337 146.835 2.44712C146.961 2.45893 147.002 2.49813 147.037 2.6329C147.139 3.02112 147.231 3.41148 147.347 3.79539C147.516 4.36133 147.718 4.91493 147.981 5.44543C148.252 5.98828 148.551 6.51503 148.919 7.00043C149.332 7.54704 149.782 8.06358 150.281 8.53502C150.378 8.6263 150.466 8.72832 150.567 8.81638C150.727 8.95598 150.893 9.08915 151.058 9.22231C151.105 9.2599 151.145 9.25023 151.162 9.17935C150.984 8.95384 150.806 8.72402 150.624 8.49743C150.368 8.17849 150.121 7.8531 149.912 7.50032C149.792 7.29736 149.681 7.08795 149.551 6.89196C149.303 6.51771 149.08 6.13218 148.894 5.72142C148.69 5.26931 148.455 4.83224 148.29 4.36348C148.277 4.3259 148.261 4.28992 148.242 4.25609C148.159 4.11058 148.115 3.95218 148.067 3.79378C148.005 3.59082 147.955 3.38356 147.879 3.18542C147.778 2.91802 147.732 2.63935 147.674 2.36336C147.602 2.0224 147.61 1.67392 147.604 1.32813C147.6 1.15523 147.688 0.996829 147.79 0.856149C147.817 0.819637 147.861 0.793327 147.901 0.769164C147.975 0.725135 148.051 0.725672 148.121 0.779903C148.228 0.860982 148.331 0.94582 148.394 1.06824C148.52 1.31255 148.651 1.55472 148.774 1.8001C149.025 2.30053 149.212 2.82889 149.48 3.3202C149.608 3.55484 149.72 3.79861 149.848 4.03326C150.096 4.48805 150.357 4.93802 150.603 5.39549C150.801 5.76276 151.033 6.10963 151.259 6.45865C151.485 6.80927 151.725 7.1497 151.946 7.50354C152.147 7.82303 152.326 8.15701 152.521 8.48025C152.647 8.6902 152.754 8.9082 152.848 9.13425C153.039 9.59871 153.236 10.0594 153.431 10.5223Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.323 30.2801C149.391 30.2887 149.42 30.2516 149.426 30.2001C149.432 30.1555 149.429 30.1061 149.42 30.061C149.369 29.8081 149.392 29.5595 149.449 29.3109C149.473 29.2116 149.497 29.1128 149.522 29.0134C149.553 28.8948 149.537 28.7858 149.492 28.6692C149.358 28.3213 149.295 27.9551 149.296 27.5825C149.298 26.9515 149.367 26.3276 149.53 25.7171C149.57 25.5619 149.648 25.4454 149.788 25.3697C149.921 25.2978 150.06 25.243 150.207 25.2135C150.374 25.1812 150.423 25.2124 150.461 25.3708C150.465 25.3858 150.466 25.4025 150.47 25.417C150.496 25.5399 150.523 25.6634 150.551 25.7874C150.694 26.4302 150.851 27.0729 150.904 27.735C150.906 27.758 150.909 27.7822 150.914 27.8042C150.981 28.0904 151.003 28.3798 150.991 28.6714C150.984 28.8298 150.984 28.9882 150.987 29.1444C150.987 29.1954 151.002 29.2459 151.01 29.2932C151.109 29.312 151.145 29.2577 151.165 29.1976C151.223 29.0365 151.28 28.8717 151.322 28.7047C151.421 28.3084 151.511 27.9089 151.565 27.5041C151.602 27.2302 151.631 26.9569 151.676 26.6852C151.698 26.558 151.702 26.4355 151.692 26.3094C151.685 26.231 151.673 26.152 151.669 26.0747C151.644 25.6511 151.629 25.2253 151.591 24.8027C151.58 24.6765 151.613 24.5938 151.688 24.5058C151.815 24.3559 151.934 24.1986 152.054 24.0424C152.079 24.0096 152.092 23.9731 152.041 23.9344C151.927 23.9522 151.832 24.0204 151.735 24.0864C151.37 24.3361 150.964 24.5122 150.587 24.7399C150.547 24.7646 150.501 24.7775 150.457 24.7973C150.122 24.9525 149.758 25.0384 149.434 25.222C149.394 25.2462 149.347 25.2618 149.302 25.2725C149.059 25.3386 148.817 25.4121 148.571 25.4642C148.241 25.5356 147.913 25.6172 147.592 25.7257C147.481 25.7633 147.363 25.7917 147.247 25.7998C146.941 25.8229 146.638 25.8438 146.332 25.7697C146.151 25.7257 145.994 25.6446 145.834 25.563C145.793 25.5421 145.761 25.5029 145.73 25.4674C145.659 25.3826 145.654 25.301 145.708 25.2328C145.754 25.1737 145.852 25.1657 145.943 25.2296C146.021 25.2849 146.108 25.3133 146.198 25.345C146.399 25.4148 146.607 25.4578 146.817 25.4927C147.184 25.5523 147.539 25.5431 147.871 25.3531C147.983 25.2881 148.108 25.2559 148.231 25.2505C148.456 25.2419 148.663 25.1657 148.875 25.1109C149.164 25.0373 149.448 24.9423 149.732 24.8532C149.845 24.8172 149.955 24.7742 150.063 24.727C150.48 24.5433 150.894 24.3549 151.311 24.1712C151.652 24.0236 151.96 23.8158 152.274 23.623C152.298 23.6091 152.327 23.587 152.301 23.5441C152.281 23.5462 152.258 23.5452 152.239 23.5537C152.085 23.6332 151.932 23.7121 151.779 23.7927C151.472 23.9543 151.151 24.0391 150.801 24.0026C150.593 23.9833 150.391 24.0236 150.201 24.103C149.991 24.1933 149.786 24.2921 149.584 24.3957C149.505 24.4365 149.432 24.4773 149.345 24.4923C149.259 24.5079 149.175 24.5299 149.091 24.5476C148.864 24.5981 148.637 24.6083 148.418 24.5165C148.217 24.4322 148.007 24.4188 147.792 24.4274C147.633 24.4343 147.481 24.4671 147.328 24.509C147.146 24.5584 146.962 24.5927 146.769 24.5772C146.578 24.5621 146.446 24.4671 146.336 24.3253C146.312 24.2942 146.297 24.2571 146.274 24.2249C146.216 24.1385 146.207 24.0547 146.252 23.9586C146.378 23.688 146.497 23.4131 146.622 23.1414C146.652 23.0786 146.697 23.0206 146.737 22.9631C146.834 22.8203 146.934 22.678 147.03 22.5341C147.215 22.2592 147.404 21.9891 147.646 21.7614C147.685 21.7254 147.714 21.6755 147.74 21.6293C147.747 21.6154 147.731 21.5842 147.718 21.5681C147.712 21.5601 147.687 21.5568 147.677 21.5622C147.604 21.6073 147.528 21.6492 147.462 21.7045C147.045 22.0465 146.688 22.4439 146.382 22.8863C146.352 22.9314 146.318 22.9728 146.29 23.0071C146.259 23.0093 146.243 23.0136 146.229 23.0104C145.799 22.9083 145.423 23.0238 145.073 23.2778C144.792 23.4823 144.53 23.7068 144.306 23.9753C144.217 24.0843 144.122 24.1922 144.013 24.2813C143.854 24.4123 143.677 24.509 143.456 24.4956C143.409 24.4913 143.359 24.5267 143.287 24.5509C143.344 24.597 143.374 24.6389 143.415 24.6523C143.615 24.7238 143.818 24.7887 144.035 24.7656C144.192 24.7479 144.349 24.7313 144.502 24.6996C144.617 24.6754 144.729 24.6346 144.838 24.5917C144.945 24.5476 145.049 24.4923 145.169 24.4365C145.441 24.0483 145.441 24.0483 145.646 23.9897C145.489 24.3275 145.367 24.6642 145.271 25.0132C145.201 25.0524 145.134 25.0932 145.065 25.1308C144.737 25.309 144.44 25.526 144.197 25.8127C144.166 25.8492 144.132 25.8814 144.098 25.9142C143.885 26.0999 143.673 26.2863 143.462 26.4731C143.439 26.493 143.411 26.5161 143.401 26.5435C143.372 26.624 143.339 26.7062 143.332 26.7899C143.326 26.8646 143.353 26.9419 143.365 27.0176C143.357 27.031 143.35 27.0439 143.341 27.0573C143.218 27.242 143.226 27.2828 143.415 27.4128C143.427 27.4235 143.439 27.4305 143.452 27.4412C143.482 27.7221 143.499 27.7409 143.765 27.8053C143.776 27.8375 143.787 27.8751 143.802 27.9121C143.884 28.1124 144.08 28.1597 144.236 28.0158C144.275 27.9782 144.312 27.9342 144.338 27.8858C144.415 27.7398 144.53 27.6383 144.68 27.5733C144.847 27.5019 144.957 27.3741 145.036 27.2136C145.103 27.0783 145.168 26.9451 145.204 26.7985C145.229 26.6965 145.264 26.5929 145.378 26.529C145.426 26.6272 145.461 26.7131 145.474 26.8076C145.494 26.9505 145.584 27.0321 145.713 27.0707C145.832 27.1089 145.955 27.1379 146.078 27.1642C146.216 27.1926 146.344 27.162 146.46 27.0804C146.536 27.0256 146.615 26.9736 146.691 26.9156C147.022 26.6632 147.352 26.4082 147.682 26.152C147.734 26.1134 147.786 26.0914 147.851 26.0812C148.045 26.0495 148.237 26.0076 148.43 25.9689C148.468 25.9614 148.506 25.9469 148.545 25.9426C148.588 25.9383 148.633 25.9056 148.686 25.9491C148.693 26.0199 148.685 26.0989 148.66 26.1714C148.575 26.4302 148.563 26.6986 148.572 26.966C148.59 27.4917 148.701 27.9959 148.919 28.4743C148.957 28.5602 149.009 28.6397 149.05 28.7256C149.1 28.8255 149.124 28.9313 149.119 29.0446C149.104 29.3614 149.154 29.6728 149.202 29.9821C149.218 30.0932 149.257 30.1952 149.323 30.2801Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.323 30.2801C149.257 30.1952 149.218 30.0932 149.202 29.9821C149.154 29.6728 149.104 29.3614 149.119 29.0446C149.124 28.9313 149.1 28.8255 149.05 28.7256C149.009 28.6397 148.957 28.5602 148.919 28.4743C148.701 27.9959 148.59 27.4917 148.572 26.966C148.563 26.6986 148.575 26.4302 148.66 26.1714C148.685 26.0989 148.693 26.0199 148.686 25.9491C148.633 25.9056 148.588 25.9383 148.545 25.9426C148.506 25.9469 148.468 25.9614 148.43 25.9689C148.237 26.0076 148.045 26.0495 147.851 26.0812C147.786 26.0914 147.734 26.1134 147.682 26.152C147.352 26.4082 147.022 26.6632 146.691 26.9156C146.615 26.9736 146.536 27.0256 146.46 27.0804C146.344 27.162 146.216 27.1926 146.078 27.1642C145.955 27.1379 145.832 27.1089 145.713 27.0707C145.584 27.0321 145.494 26.9505 145.474 26.8076C145.461 26.7131 145.426 26.6272 145.378 26.529C145.264 26.5929 145.229 26.6965 145.204 26.7985C145.168 26.9451 145.103 27.0783 145.036 27.2136C144.957 27.3741 144.847 27.5019 144.68 27.5733C144.53 27.6383 144.415 27.7398 144.338 27.8858C144.312 27.9342 144.275 27.9782 144.236 28.0158C144.08 28.1597 143.884 28.1124 143.802 27.9121C143.787 27.8751 143.776 27.8375 143.765 27.8053C143.499 27.7409 143.482 27.7221 143.452 27.4412C143.439 27.4305 143.427 27.4235 143.415 27.4128C143.226 27.2828 143.218 27.242 143.341 27.0573C143.35 27.0439 143.357 27.031 143.365 27.0176C143.353 26.9419 143.326 26.8646 143.332 26.7899C143.339 26.7062 143.372 26.624 143.401 26.5435C143.411 26.5161 143.439 26.493 143.462 26.4731C143.673 26.2863 143.885 26.0999 144.098 25.9142C144.132 25.8814 144.166 25.8492 144.197 25.8127C144.44 25.526 144.737 25.309 145.065 25.1308C145.134 25.0932 145.201 25.0524 145.271 25.0132C145.367 24.6642 145.489 24.3275 145.646 23.9897C145.441 24.0483 145.441 24.0483 145.169 24.4365C145.049 24.4923 144.945 24.5476 144.838 24.5917C144.729 24.6346 144.617 24.6754 144.502 24.6996C144.349 24.7313 144.192 24.7479 144.035 24.7656C143.818 24.7887 143.615 24.7238 143.415 24.6523C143.374 24.6389 143.344 24.597 143.287 24.5509C143.359 24.5267 143.409 24.4913 143.456 24.4956C143.677 24.509 143.854 24.4123 144.013 24.2813C144.122 24.1922 144.217 24.0843 144.306 23.9753C144.53 23.7068 144.792 23.4823 145.073 23.2778C145.423 23.0238 145.799 22.9083 146.229 23.0104C146.243 23.0136 146.259 23.0093 146.29 23.0071C146.318 22.9728 146.352 22.9314 146.382 22.8863C146.688 22.4439 147.045 22.0465 147.462 21.7045C147.528 21.6492 147.604 21.6073 147.677 21.5622C147.687 21.5568 147.712 21.5601 147.718 21.5681C147.731 21.5842 147.747 21.6154 147.74 21.6293C147.714 21.6755 147.685 21.7254 147.646 21.7614C147.404 21.9891 147.215 22.2592 147.03 22.5341C146.934 22.678 146.834 22.8203 146.737 22.9631C146.697 23.0206 146.652 23.0786 146.622 23.1414C146.497 23.4131 146.378 23.688 146.252 23.9586C146.207 24.0547 146.216 24.1385 146.274 24.2249C146.297 24.2571 146.312 24.2942 146.336 24.3253C146.446 24.4671 146.578 24.5621 146.769 24.5772C146.962 24.5927 147.146 24.5584 147.328 24.509C147.481 24.4671 147.633 24.4343 147.792 24.4274C148.007 24.4188 148.217 24.4322 148.418 24.5165C148.637 24.6083 148.864 24.5981 149.091 24.5476C149.175 24.5299 149.259 24.5079 149.345 24.4923C149.432 24.4773 149.505 24.4365 149.584 24.3957C149.786 24.2921 149.991 24.1933 150.201 24.103C150.391 24.0236 150.593 23.9833 150.801 24.0026C151.151 24.0391 151.472 23.9543 151.779 23.7927C151.932 23.7121 152.085 23.6332 152.239 23.5537C152.258 23.5452 152.281 23.5462 152.301 23.5441C152.327 23.587 152.298 23.6091 152.274 23.623C151.96 23.8158 151.652 24.0236 151.311 24.1712C150.894 24.3549 150.48 24.5433 150.063 24.727C149.955 24.7742 149.845 24.8172 149.732 24.8532C149.448 24.9423 149.164 25.0373 148.875 25.1109C148.663 25.1657 148.456 25.2419 148.231 25.2505C148.108 25.2559 147.983 25.2881 147.871 25.3531C147.539 25.5431 147.184 25.5523 146.817 25.4927C146.607 25.4578 146.399 25.4148 146.198 25.345C146.108 25.3133 146.021 25.2849 145.943 25.2296C145.852 25.1657 145.754 25.1737 145.708 25.2328C145.654 25.301 145.659 25.3826 145.73 25.4674C145.761 25.5029 145.793 25.5421 145.834 25.563C145.994 25.6446 146.151 25.7257 146.332 25.7697C146.638 25.8438 146.941 25.8229 147.247 25.7998C147.363 25.7917 147.481 25.7633 147.592 25.7257C147.913 25.6172 148.241 25.5356 148.571 25.4642C148.817 25.4121 149.059 25.3386 149.302 25.2725C149.347 25.2618 149.394 25.2462 149.434 25.222C149.758 25.0384 150.122 24.9525 150.457 24.7973C150.501 24.7775 150.547 24.7646 150.587 24.7399C150.964 24.5122 151.37 24.3361 151.735 24.0864C151.832 24.0204 151.927 23.9522 152.041 23.9344C152.092 23.9731 152.079 24.0096 152.054 24.0424C151.934 24.1986 151.815 24.3559 151.688 24.5058C151.613 24.5938 151.58 24.6765 151.591 24.8027C151.629 25.2253 151.644 25.6511 151.669 26.0747C151.673 26.152 151.685 26.231 151.692 26.3094C151.702 26.4355 151.698 26.558 151.676 26.6852C151.631 26.9569 151.602 27.2302 151.565 27.5041C151.511 27.9089 151.421 28.3084 151.322 28.7047C151.28 28.8717 151.223 29.0365 151.165 29.1976C151.145 29.2577 151.109 29.312 151.01 29.2932C151.002 29.2459 150.987 29.1954 150.987 29.1444C150.984 28.9882 150.984 28.8298 150.991 28.6714C151.003 28.3798 150.981 28.0904 150.914 27.8042C150.909 27.7822 150.906 27.758 150.904 27.735C150.851 27.0729 150.694 26.4302 150.551 25.7874C150.523 25.6634 150.496 25.5399 150.47 25.417C150.466 25.4025 150.465 25.3858 150.461 25.3708C150.423 25.2124 150.374 25.1812 150.207 25.2135C150.06 25.243 149.921 25.2978 149.788 25.3697C149.648 25.4454 149.57 25.5619 149.53 25.7171C149.367 26.3276 149.298 26.9515 149.296 27.5825C149.295 27.9551 149.358 28.3213 149.492 28.6692C149.537 28.7858 149.553 28.8948 149.522 29.0134C149.497 29.1128 149.473 29.2116 149.449 29.3109C149.392 29.5595 149.369 29.8081 149.42 30.061C149.429 30.1061 149.432 30.1555 149.426 30.2001C149.42 30.2516 149.391 30.2887 149.323 30.2801Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M153.431 10.5223C153.236 10.0594 153.039 9.59871 152.848 9.13425C152.754 8.9082 152.647 8.6902 152.521 8.48025C152.326 8.15701 152.147 7.82303 151.946 7.50354C151.725 7.1497 151.485 6.80927 151.259 6.45865C151.033 6.10963 150.801 5.76276 150.603 5.39549C150.357 4.93802 150.096 4.48805 149.848 4.03326C149.72 3.79861 149.608 3.55484 149.48 3.3202C149.212 2.82889 149.025 2.30053 148.774 1.8001C148.651 1.55472 148.52 1.31255 148.394 1.06824C148.331 0.94582 148.228 0.860982 148.121 0.779903C148.051 0.725672 147.975 0.725135 147.901 0.769164C147.861 0.793327 147.817 0.819637 147.79 0.856149C147.688 0.996829 147.6 1.15523 147.604 1.32813C147.61 1.67392 147.602 2.0224 147.674 2.36336C147.732 2.63935 147.778 2.91802 147.879 3.18542C147.955 3.38356 148.005 3.59082 148.067 3.79378C148.115 3.95218 148.159 4.11058 148.242 4.25609C148.261 4.28992 148.277 4.3259 148.29 4.36348C148.455 4.83224 148.69 5.26931 148.894 5.72142C149.08 6.13218 149.303 6.51771 149.551 6.89196C149.681 7.08795 149.792 7.29736 149.912 7.50032C150.121 7.8531 150.368 8.17849 150.624 8.49743C150.806 8.72402 150.984 8.95384 151.162 9.17935C151.145 9.25023 151.105 9.2599 151.058 9.22231C150.893 9.08915 150.727 8.95598 150.567 8.81638C150.466 8.72832 150.378 8.6263 150.281 8.53502C149.782 8.06358 149.332 7.54704 148.919 7.00043C148.551 6.51503 148.252 5.98828 147.981 5.44543C147.718 4.91493 147.516 4.36133 147.347 3.79539C147.231 3.41148 147.139 3.02112 147.037 2.6329C147.002 2.49813 146.961 2.45893 146.835 2.44712C146.695 2.4337 146.616 2.46806 146.564 2.58404C146.526 2.66995 146.491 2.76016 146.476 2.85198C146.436 3.10273 146.427 3.35778 146.486 3.6037C146.59 4.03219 146.677 4.46604 146.84 4.87734C147.115 5.57215 147.398 6.26588 147.84 6.87747C148.07 7.19641 148.293 7.52341 148.546 7.82357C148.693 7.99807 148.834 8.17634 148.975 8.35514C149.211 8.65315 149.496 8.90444 149.756 9.17721C149.865 9.29104 149.973 9.40595 150.086 9.51602C150.209 9.63737 150.337 9.75389 150.463 9.87255C150.561 9.96329 150.661 10.0524 150.757 10.1469C150.782 10.1727 150.8 10.2114 150.812 10.2468C150.816 10.2645 150.805 10.2951 150.791 10.3091C150.777 10.323 150.749 10.3306 150.729 10.3284C150.707 10.3263 150.684 10.3118 150.666 10.2994C150.36 10.0766 150.048 9.86289 149.752 9.62878C149.569 9.48326 149.41 9.30393 149.239 9.1423C148.884 8.80564 148.537 8.46199 148.237 8.07593C148.01 7.78437 147.804 7.4767 147.597 7.16849C147.348 6.79639 147.1 6.42213 146.868 6.03822C146.624 5.63551 146.391 5.22421 146.21 4.78606C146.106 4.53155 145.991 4.28133 145.894 4.02467C145.794 3.76586 145.74 3.49685 145.742 3.2171C145.744 2.90567 145.802 2.60552 145.926 2.3204C145.948 2.26993 145.972 2.21999 146 2.17328C146.111 1.98803 146.273 1.90319 146.492 1.90964C146.734 1.91501 146.957 1.97139 147.146 2.11368C147.217 2.08361 147.201 2.03099 147.197 1.98803C147.181 1.80601 147.223 1.08596 147.262 0.906623C147.324 0.629558 147.449 0.390617 147.657 0.196243C147.789 0.0732818 147.953 0.0217349 148.127 0.00133098C148.172 -0.00350154 148.222 0.00508961 148.265 0.0228088C148.45 0.0979813 148.605 0.212351 148.725 0.378267C148.883 0.596804 149.004 0.833598 149.108 1.08059C149.167 1.21805 149.236 1.35121 149.291 1.48975C149.352 1.64278 149.399 1.8001 149.457 1.9542C149.599 2.33007 149.744 2.70378 149.888 3.07857C149.929 3.18864 149.972 3.29872 150.009 3.40987C150.078 3.61981 150.173 3.81687 150.272 4.01286C150.384 4.23837 150.484 4.4698 150.602 4.69209C150.77 5.01158 150.951 5.32462 151.125 5.64142C151.213 5.79981 151.297 5.95929 151.386 6.11661C151.571 6.4463 151.755 6.77652 151.947 7.10137C152.072 7.31024 152.21 7.5116 152.342 7.71618C152.364 7.74947 152.388 7.78115 152.406 7.81605C152.647 8.25849 152.882 8.70416 153.084 9.16539C153.233 9.50582 153.335 9.86181 153.43 10.2194C153.456 10.3161 153.452 10.4197 153.461 10.5206C153.452 10.5217 153.442 10.5217 153.431 10.5223Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.585 15.9761C146.624 16.062 146.599 16.1377 146.576 16.2107C146.53 16.3611 146.551 16.5012 146.601 16.6494C146.695 16.9313 146.854 17.1724 147.037 17.4006C147.198 17.6003 147.416 17.7314 147.639 17.8489C147.745 17.9048 147.855 17.9048 147.977 17.8511C148.162 17.7732 148.324 17.6642 148.488 17.5563C148.72 17.4033 148.986 17.3238 149.232 17.2019C149.284 17.1756 149.339 17.1906 149.391 17.218C149.487 17.2712 149.589 17.3141 149.681 17.3727C149.797 17.4462 149.922 17.4849 150.054 17.5123C150.185 17.5397 150.315 17.5719 150.446 17.596C150.472 17.6014 150.509 17.5848 150.528 17.567C150.56 17.5375 150.555 17.4972 150.536 17.458C150.507 17.3968 150.465 17.3539 150.395 17.349C150.339 17.3458 150.285 17.3442 150.229 17.3426C150.191 17.3405 150.151 17.3437 150.112 17.3399C150.062 17.3351 150.029 17.2878 150.039 17.2384C150.048 17.1939 150.078 17.1681 150.123 17.1751C150.313 17.2051 150.499 17.1482 150.687 17.1493C150.695 17.1493 150.703 17.1482 150.711 17.1472C150.847 17.1294 150.862 17.1042 150.833 16.9281C150.72 16.8873 150.599 16.8577 150.472 16.861C150.432 16.862 150.392 16.862 150.354 16.854C150.335 16.8497 150.312 16.8277 150.304 16.8089C150.277 16.7396 150.378 16.6199 150.45 16.6371C150.511 16.6526 150.568 16.6822 150.628 16.7015C150.68 16.7187 150.732 16.7418 150.785 16.7418C150.815 16.7428 150.854 16.7069 150.872 16.6773C150.882 16.6596 150.868 16.6156 150.851 16.5952C150.827 16.5656 150.788 16.5485 150.758 16.5232C150.731 16.4996 150.707 16.4722 150.681 16.4464C150.703 16.425 150.715 16.4056 150.723 16.4072C150.793 16.4185 150.865 16.4239 150.929 16.4502C151.029 16.491 151.124 16.5474 151.229 16.6022C151.229 16.6537 151.232 16.7004 151.228 16.7461C151.217 16.8636 151.199 16.9796 151.19 17.0972C151.167 17.3947 151.133 17.6922 151.131 17.9907C151.129 18.2173 151.168 18.4444 151.196 18.6699C151.203 18.7226 151.235 18.7741 151.261 18.8214C151.373 19.0206 151.486 19.2176 151.599 19.4168C151.634 19.4791 151.672 19.5387 151.698 19.6037C151.711 19.6354 151.703 19.6772 151.707 19.7347C151.559 19.6552 151.454 19.5629 151.378 19.4421C151.31 19.3374 151.248 19.2273 151.194 19.114C151.132 18.9862 151.082 18.8552 151.025 18.7247C150.964 18.5872 150.904 18.4509 150.928 18.2946C150.933 18.257 150.919 18.2168 150.912 18.177C150.896 18.0927 150.876 18.0095 150.861 17.9236C150.848 17.8495 150.866 17.7705 150.825 17.6771C150.768 17.7314 150.728 17.7748 150.683 17.8135C150.611 17.8758 150.529 17.8983 150.444 17.8473C150.313 17.7695 150.165 17.7426 150.022 17.6991C149.849 17.647 149.676 17.5912 149.508 17.5262C149.395 17.4838 149.295 17.4827 149.195 17.5499C149.163 17.5708 149.13 17.5891 149.071 17.624C149.122 17.6444 149.147 17.6605 149.173 17.6632C149.235 17.6685 149.299 17.6685 149.362 17.6696C149.553 17.6728 149.736 17.7099 149.897 17.8248C149.929 17.8473 149.965 17.8645 149.999 17.8833C150.146 17.9655 150.298 18.0234 150.472 18.0041C150.51 17.9998 150.549 18.0084 150.607 18.0127C150.591 18.0557 150.585 18.0959 150.562 18.1174C150.474 18.2023 150.425 18.3075 150.389 18.4213C150.339 18.5706 150.28 18.7177 150.244 18.8697C150.208 19.0227 150.187 19.18 150.174 19.3363C150.16 19.4861 150.11 19.608 149.985 19.6982C149.792 19.841 149.648 20.0284 149.519 20.2276C149.386 20.4322 149.25 20.6357 149.124 20.8446C149.063 20.9482 148.983 21.0019 148.865 21.0261C148.609 21.076 148.362 21.1549 148.143 21.3047C148.085 21.3434 148.028 21.3847 147.973 21.4298C147.904 21.4841 147.84 21.4948 147.757 21.4508C147.597 21.3686 147.494 21.2365 147.385 21.098C147.224 20.8956 147.222 20.6819 147.292 20.4531C147.318 20.3629 147.356 20.2749 147.389 20.189C147.406 20.1439 147.424 20.102 147.443 20.0515C147.416 20.0284 147.396 20.0053 147.37 19.9897C147.189 19.8829 147.095 19.7202 147.044 19.521C147.015 19.4098 147.008 19.3041 147.035 19.1945C147.066 19.0732 147.093 18.9502 147.12 18.8278C147.129 18.7918 147.133 18.7532 147.143 18.6919C147.096 18.7038 147.066 18.7048 147.046 18.7188C146.869 18.8466 146.669 18.9094 146.457 18.9491C146.28 18.983 146.106 19.0372 145.928 19.07C145.769 19.0973 145.65 19.1811 145.563 19.3078C145.423 19.5135 145.364 19.7444 145.359 19.9983C145.459 20.0193 145.525 19.971 145.589 19.9318C145.685 19.8711 145.782 19.8335 145.899 19.8426C145.96 19.848 146.022 19.826 146.085 19.8179C146.183 19.8061 146.268 19.8421 146.301 19.9216C146.346 20.0316 146.372 20.146 146.362 20.2673C146.356 20.3339 146.313 20.3914 146.248 20.4C146.171 20.4102 146.091 20.4134 146.013 20.4091C145.86 20.4 145.719 20.4236 145.582 20.5015C145.461 20.5696 145.323 20.5611 145.192 20.5203C145.074 20.4827 144.986 20.4091 144.951 20.2668C145.08 20.124 145.105 19.9403 145.088 19.7465C145.08 19.6606 145.087 19.5742 145.086 19.4872C145.085 19.2557 145.163 19.0555 145.314 18.882C145.37 18.8171 145.437 18.7601 145.495 18.6962C145.622 18.5556 145.78 18.5443 145.95 18.5856C146.011 18.6007 146.07 18.6259 146.129 18.6452C146.453 18.7553 146.75 18.7048 147.02 18.4949C147.112 18.4224 147.205 18.3526 147.27 18.2484C147.255 18.2232 147.248 18.1963 147.232 18.1856C146.875 17.9601 146.636 17.6288 146.433 17.269C146.33 17.0843 146.242 16.8905 146.151 16.6983C146.106 16.6038 146.101 16.5044 146.122 16.3987C146.145 16.2832 146.196 16.1876 146.297 16.1313C146.39 16.0786 146.468 15.9949 146.585 15.9761Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.891 13.2978C147.154 13.4508 147.429 13.4374 147.702 13.3859C148.097 13.3112 148.483 13.2044 148.857 13.0551C148.879 13.046 148.905 13.0428 148.922 13.0283C149.091 12.8881 149.306 12.8527 149.502 12.7754C149.685 12.7029 149.88 12.6728 150.077 12.6508C150.128 12.6454 150.18 12.6325 150.257 12.6191C150.2 12.5353 150.155 12.4688 150.101 12.3893C150.23 12.3571 150.338 12.3802 150.441 12.4059C150.754 12.4849 151.065 12.5729 151.352 12.726C151.414 12.7592 151.471 12.8017 151.527 12.8441C151.81 13.0626 152.036 13.3359 152.266 13.6044C152.584 13.976 152.844 14.3883 153.083 14.8147C153.283 15.1712 153.496 15.5197 153.744 15.8467C153.758 15.8655 153.771 15.8859 153.778 15.9079C153.782 15.9192 153.775 15.939 153.765 15.9482C153.756 15.9584 153.734 15.9675 153.724 15.9632C153.66 15.9364 153.594 15.9101 153.534 15.8741C153.378 15.7828 153.228 15.6818 153.069 15.5954C152.663 15.3753 152.241 15.372 151.813 15.5229C151.65 15.5798 151.491 15.6502 151.313 15.648C151.291 15.6469 151.268 15.6416 151.232 15.6351C151.231 15.589 151.227 15.5444 151.229 15.4998C151.23 15.3973 151.237 15.2947 151.239 15.1932C151.24 15.1368 151.246 15.0805 151.234 15.0284C151.189 14.8286 151.149 14.6284 151.086 14.434C151.016 14.2101 150.926 13.9915 150.842 13.7709C150.754 13.5373 150.6 13.3504 150.419 13.1834C150.351 13.1206 150.268 13.0975 150.178 13.1163C150.063 13.1394 149.947 13.1641 149.834 13.1958C149.623 13.2554 149.412 13.3198 149.201 13.3837C149.02 13.4396 148.848 13.5126 148.706 13.6474C148.649 13.7021 148.626 13.7564 148.643 13.8348C148.667 13.9545 148.729 14.0549 148.799 14.1489C148.821 14.1789 148.854 14.2069 148.889 14.2203C149.129 14.3169 149.368 14.4152 149.637 14.4071C149.801 14.4028 149.966 14.4206 150.131 14.4345C150.192 14.4399 150.252 14.4608 150.308 14.4726C150.316 14.5408 150.274 14.5457 150.236 14.5505C149.983 14.5811 149.742 14.6482 149.518 14.7685C149.49 14.7835 149.464 14.7991 149.436 14.8158C149.403 14.9827 149.464 15.1299 149.512 15.2775C149.542 15.3672 149.579 15.4547 149.606 15.5449C149.626 15.6142 149.585 15.6716 149.512 15.6759C149.355 15.684 149.197 15.6835 149.04 15.6926C148.86 15.7033 148.677 15.7076 148.5 15.7409C148.372 15.7651 148.254 15.7538 148.131 15.7253C147.869 15.6679 147.605 15.6276 147.335 15.6641C147.313 15.6668 147.289 15.6604 147.259 15.6571C147.121 15.4467 147.087 15.2083 147.082 14.9618C147.076 14.7041 147.222 14.5038 147.356 14.2944C147.062 14.1215 146.914 13.8568 146.804 13.5652C146.767 13.4659 146.784 13.3805 146.891 13.2978Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M148.415 39.1942C148.317 39.0584 148.231 38.9386 148.143 38.82C148.035 38.6734 147.951 38.5214 147.912 38.3367C147.851 38.0516 147.739 37.7842 147.545 37.5533C147.358 37.3321 147.348 37.0814 147.473 36.8252C147.545 36.6776 147.609 36.5235 147.739 36.4102C147.767 36.386 147.787 36.3495 147.803 36.3135C147.93 36.0338 148.057 35.7546 148.127 35.4539C148.187 35.1843 148.267 34.9207 148.332 34.6544C148.379 34.4637 148.414 34.2699 148.456 34.0777C148.495 33.8983 148.492 33.7168 148.48 33.5364C148.461 33.2765 148.444 33.0177 148.427 32.7584C148.411 32.5076 148.478 32.2762 148.587 32.0539C148.797 31.6228 149.009 31.1916 149.219 30.7615C149.234 30.7336 149.247 30.704 149.261 30.6767C149.329 30.5467 149.334 30.5446 149.516 30.6106C149.455 30.8393 149.53 31.0702 149.521 31.3038C149.519 31.3575 149.515 31.4139 149.501 31.4665C149.441 31.7011 149.378 31.9385 149.313 32.172C149.225 32.4921 149.153 32.8142 149.151 33.1477C149.149 33.3845 149.095 33.6143 149.053 33.8462C148.984 34.2259 148.903 34.6023 148.831 34.9808C148.737 35.478 148.598 35.9591 148.351 36.4048C148.265 36.5621 148.205 36.7361 148.142 36.9052C148.12 36.9627 148.116 37.0298 148.121 37.0905C148.134 37.2333 148.241 37.3112 148.384 37.2902C148.423 37.2838 148.461 37.2698 148.499 37.265C148.725 37.2301 148.863 37.3412 148.877 37.5721C148.882 37.6349 148.877 37.6978 148.871 37.7611C148.861 37.8889 148.869 38.0113 148.937 38.1246C148.965 38.1719 148.97 38.2326 148.997 38.2787C149.048 38.3668 149.096 38.4602 149.166 38.5316C149.367 38.7373 149.61 38.8828 149.881 38.9773C150.026 39.0278 150.168 39.0487 150.32 38.9982C150.409 38.9693 150.504 38.9542 150.598 38.9472C150.675 38.9397 150.753 38.9521 150.821 38.9553C150.963 39.0761 150.956 39.2479 151.029 39.3999C151.076 39.4074 151.129 39.416 151.182 39.4251C151.36 39.4557 151.54 39.4799 151.716 39.5196C151.853 39.5502 151.892 39.6131 151.899 39.7553C151.9 39.7859 151.899 39.8187 151.897 39.8488C151.888 39.9422 151.855 39.9766 151.765 39.9819C151.702 39.9852 151.639 39.9841 151.576 39.9841C149.945 39.9884 148.315 39.9916 146.684 39.9948C146.613 39.9948 146.542 39.9948 146.471 39.9916C146.412 39.9895 146.367 39.9588 146.339 39.9057C146.289 39.8101 146.286 39.707 146.323 39.6088C146.334 39.576 146.373 39.5513 146.404 39.5298C146.421 39.5186 146.449 39.5185 146.472 39.5175C146.755 39.4987 147.038 39.4836 147.32 39.4589C147.562 39.4359 147.806 39.4063 148.046 39.3666C148.226 39.3349 148.256 39.3097 148.415 39.1942Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M151.216 22.211C151.443 22.211 151.679 22.218 151.915 22.2089C152.229 22.1971 152.543 22.1783 152.856 22.1477C152.995 22.1342 153.132 22.0838 153.269 22.0516C153.329 22.0354 153.39 22.0177 153.452 22.0064C153.473 22.0022 153.497 22.0118 153.521 22.0145C153.576 22.0789 153.572 22.1498 153.533 22.211C153.313 22.5466 153.108 22.8913 152.773 23.1324C152.76 23.141 152.748 23.1577 152.735 23.1598C152.549 23.1926 152.43 23.3477 152.264 23.4149C152.096 23.483 151.927 23.5469 151.757 23.6098C151.713 23.6253 151.666 23.635 151.619 23.6404C151.307 23.6747 150.995 23.7252 150.68 23.7188C150.48 23.7145 150.286 23.7462 150.098 23.8058C149.889 23.8729 149.686 23.9464 149.491 24.0597C149.142 24.2611 148.752 24.2831 148.371 24.1596C148.103 24.0721 147.833 24.0533 147.558 24.0366C147.455 24.0313 147.354 24.0442 147.26 24.093C147.211 24.1183 147.159 24.1365 147.103 24.1612C147.047 24.0903 147.08 24.0254 147.108 23.9642C147.227 23.7075 147.338 23.446 147.472 23.1979C147.647 22.8725 147.822 22.5477 148.035 22.2411C148.174 22.043 148.283 21.8239 148.407 21.6129C148.422 21.5876 148.444 21.5656 148.47 21.5312C148.538 21.5554 148.603 21.5785 148.657 21.5973C148.673 21.6215 148.686 21.6327 148.69 21.6456C148.789 21.9823 148.969 22.2781 149.157 22.5676C149.2 22.6325 149.258 22.69 149.314 22.7447C149.405 22.8296 149.498 22.9155 149.594 22.9971C149.642 23.0363 149.694 23.0771 149.751 23.1002C150.044 23.2189 149.957 23.2205 150.187 23.0476C150.401 22.8881 150.618 22.7308 150.827 22.5633C150.961 22.4564 151.083 22.3324 151.216 22.211Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M153.435 13.4415C153.396 13.4013 153.363 13.368 153.33 13.3363C153.273 13.281 153.221 13.2203 153.158 13.1741C152.797 12.9078 152.437 12.641 152.048 12.4149C151.76 12.2468 151.453 12.1276 151.122 12.0788C151.055 12.0686 150.99 12.0503 150.922 12.0364C150.932 12.0079 150.933 11.988 150.943 11.9811C151.162 11.8259 151.301 11.6111 151.406 11.3695C151.488 11.1821 151.59 11.0033 151.66 10.8116C151.794 10.4389 151.867 10.0534 151.836 9.65446C151.814 9.38116 151.806 9.10409 151.76 8.83347C151.711 8.55641 151.661 8.27827 151.56 8.01141C151.468 7.77032 151.405 7.51795 151.324 7.27311C151.305 7.21404 151.262 7.16303 151.238 7.10558C151.226 7.08088 151.233 7.04866 151.23 6.98584C151.282 7.03309 151.314 7.0535 151.333 7.08195C151.409 7.20116 151.485 7.32197 151.555 7.44385C151.758 7.79072 151.966 8.13383 152.158 8.4866C152.304 8.75454 152.437 9.03268 152.563 9.31189C152.716 9.64856 152.866 9.98683 152.998 10.3321C153.114 10.6322 153.221 10.9383 153.299 11.2508C153.373 11.5472 153.403 11.8538 153.454 12.1561C153.515 12.5234 153.506 12.8944 153.524 13.2638C153.526 13.3014 153.522 13.3438 153.507 13.3787C153.497 13.4023 153.465 13.4163 153.435 13.4415Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M150.339 11.5187C150.156 11.4698 149.963 11.4312 149.78 11.3678C149.288 11.1987 148.804 11.0102 148.353 10.7493C147.903 10.491 147.471 10.2043 147.035 9.92128C146.809 9.77523 146.629 9.57549 146.429 9.39937C146.258 9.24795 146.105 9.07827 145.953 8.90967C145.83 8.77329 145.739 8.61811 145.69 8.43877C145.635 8.23903 145.637 8.20466 145.759 8.00438C145.734 7.95069 145.706 7.88733 145.672 7.82719C145.429 7.38582 145.221 6.92619 145.089 6.44079C144.966 5.98761 144.934 5.5253 145.095 5.06943C145.139 4.94432 145.2 4.82942 145.304 4.74512C145.38 4.77733 145.414 4.83479 145.422 4.896C145.443 5.05118 145.553 5.18488 145.524 5.35026C145.519 5.3814 145.514 5.41308 145.509 5.44368C145.424 5.8813 145.472 6.30441 145.629 6.71947C145.815 7.21561 146.039 7.69403 146.35 8.12358C146.52 8.35769 146.719 8.57408 146.911 8.79208C147.173 9.08848 147.508 9.30379 147.798 9.56904C148.258 9.99055 148.787 10.3192 149.298 10.6714C149.641 10.9093 149.985 11.1444 150.328 11.3802C150.382 11.4172 150.409 11.4569 150.339 11.5187Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M146.398 11.415C146.22 11.1938 146.066 10.9946 145.907 10.8007C145.789 10.6563 145.716 10.4984 145.696 10.31C145.682 10.179 145.636 10.0506 145.658 9.92122C145.709 9.8847 145.739 9.91263 145.765 9.94108C145.791 9.97062 145.817 10.0012 145.836 10.0345C145.997 10.3084 146.2 10.5484 146.432 10.7615C146.588 10.9038 146.755 11.0391 146.933 11.1524C147.205 11.3248 147.477 11.4966 147.776 11.6228C148.079 11.7527 148.367 11.9197 148.665 12.0588C148.842 12.1415 149.03 12.2032 149.213 12.273C149.277 12.2977 149.342 12.3198 149.429 12.3514C149.388 12.3879 149.37 12.4132 149.344 12.4261C148.986 12.6065 148.627 12.7864 148.267 12.9646C148.153 13.0205 148.032 13.05 147.903 13.0548C147.691 13.0618 147.479 13.0769 147.266 13.079C146.987 13.0817 146.909 13.0232 146.828 12.7214C146.798 12.6119 146.813 12.4905 146.807 12.3547C146.778 12.3353 146.733 12.3053 146.686 12.2779C146.531 12.1844 146.43 12.047 146.364 11.8827C146.298 11.72 146.306 11.5589 146.398 11.415Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.244 36.328C149.201 36.2577 149.168 36.2238 149.159 36.182C149.146 36.1304 149.148 36.074 149.149 36.0177C149.154 35.6944 149.205 35.3798 149.314 35.0726C149.424 34.7623 149.535 34.4509 149.601 34.1255C149.661 33.8328 149.755 33.5488 149.828 33.2594C149.952 32.7643 150.084 32.2714 150.146 31.7618C150.167 31.5916 150.178 31.4198 150.192 31.2469C150.207 31.0514 150.223 30.8565 150.234 30.6605C150.24 30.5515 150.234 30.4415 150.234 30.3314C150.234 30.1193 150.241 29.9077 150.229 29.6957C150.222 29.5491 150.182 29.4019 150.168 29.2554C150.155 29.1136 150.155 28.974 150.156 28.8328C150.157 28.8 150.188 28.7667 150.208 28.7275C150.296 28.7716 150.33 28.8387 150.344 28.9176C150.361 29.0255 150.379 29.1335 150.394 29.2425C150.439 29.5539 150.546 29.8374 150.782 30.0565C150.849 30.1182 150.917 30.108 150.947 30.0248C150.986 29.9147 151.015 29.7993 151.072 29.7064C151.13 29.6844 151.154 29.7144 151.177 29.7483C151.252 29.8626 151.245 29.9861 151.215 30.1118C151.2 30.173 151.166 30.2272 151.149 30.2884C151.114 30.4007 151.074 30.5123 151.056 30.6289C151.042 30.7137 151.028 30.7969 150.988 30.8753C150.96 30.9312 150.929 30.9918 150.923 31.0514C150.906 31.2281 150.822 31.3811 150.766 31.5433C150.648 31.8842 150.536 32.2284 150.42 32.5705C150.342 32.8008 150.265 33.0328 150.184 33.2615C150.068 33.5864 149.964 33.9177 149.827 34.2355C149.694 34.5459 149.588 34.8659 149.471 35.1816C149.393 35.3916 149.354 35.6053 149.333 35.8254C149.321 35.9586 149.306 36.0918 149.29 36.2238C149.287 36.2437 149.273 36.2647 149.244 36.328Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.489 9.64825C149.397 9.70356 149.347 9.67886 149.3 9.64772C149.217 9.58973 149.135 9.52798 149.053 9.4673C148.591 9.12527 148.14 8.7682 147.756 8.34025C147.494 8.04762 147.256 7.73243 147.008 7.42691C146.661 6.99681 146.395 6.51517 146.126 6.03568C145.964 5.7468 145.823 5.44987 145.706 5.14059C145.648 4.99024 145.632 4.83507 145.635 4.67667C145.637 4.57948 145.664 4.48874 145.743 4.42323C145.765 4.40551 145.794 4.39692 145.836 4.37598C146.588 6.45557 147.809 8.20226 149.489 9.64825Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.446 22.2305C162.44 22.1215 162.438 22.0361 162.429 21.9513C162.399 21.6683 162.461 21.4122 162.604 21.1614C162.79 20.8344 163.034 20.567 163.334 20.3426C163.522 20.2019 163.7 20.05 163.895 19.9168C164.048 19.8132 164.17 19.6591 164.285 19.512C164.344 19.4346 164.361 19.3256 164.392 19.2279C164.414 19.1608 164.425 19.0904 164.447 19.0233C164.453 19.0056 164.483 18.9868 164.5 18.9868C164.518 18.9879 164.548 19.0099 164.551 19.0265C164.574 19.1576 164.588 19.2897 164.55 19.4217C164.453 19.7606 164.24 20.0167 163.977 20.2379C163.791 20.3942 163.578 20.5198 163.428 20.7158C163.348 20.8221 163.271 20.93 163.2 21.0422C163.113 21.1797 163.108 21.3231 163.184 21.468C163.209 21.5153 163.239 21.5625 163.263 21.6103C163.397 21.8788 163.272 22.2262 162.999 22.3417C162.917 22.3749 162.833 22.3814 162.745 22.3605C162.64 22.3331 162.529 22.3175 162.446 22.2305Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M165.129 12.6556C165.068 12.6556 165.005 12.6577 164.945 12.6556C164.274 12.6395 163.607 12.6894 162.942 12.77C162.466 12.8279 161.997 12.9429 161.535 13.0696C161.209 13.1582 160.88 13.2387 160.556 13.3354C160.27 13.4202 159.986 13.5142 159.708 13.6194C159.375 13.744 159.049 13.8798 158.725 14.0221C158.582 14.0849 158.452 14.1773 158.316 14.2557C158.255 14.29 158.193 14.3233 158.129 14.3582C158.002 14.2986 157.899 14.2202 157.797 14.1112C157.831 14.0726 157.855 14.0329 157.891 14.0098C157.935 13.9802 157.988 13.9593 158.04 13.9405C158.453 13.7864 158.864 13.6269 159.28 13.4809C159.762 13.3123 160.249 13.1549 160.746 13.0341C161.065 12.9563 161.39 12.8929 161.709 12.8097C162.183 12.6862 162.668 12.6395 163.152 12.5858C163.23 12.5777 163.309 12.574 163.388 12.5697C163.662 12.5573 163.938 12.5466 164.213 12.5332C164.505 12.5187 164.796 12.5477 165.084 12.5756C165.103 12.5777 165.119 12.6003 165.136 12.6126C165.134 12.6277 165.132 12.6416 165.129 12.6556Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M157.305 19.2729C157.486 19.4126 157.561 19.5822 157.615 19.7616C157.659 19.9087 157.821 20.2491 157.909 20.3801C158.072 20.6218 158.239 20.8596 158.39 21.1093C158.554 21.3778 158.703 21.6538 158.811 21.9502C158.855 22.0699 158.862 22.1714 158.763 22.2734C158.644 22.3948 158.605 22.5607 158.564 22.7201C158.554 22.7577 158.551 22.7959 158.503 22.8238C158.406 22.5838 158.449 22.3636 158.547 22.1445C158.457 21.8809 158.342 21.6318 158.205 21.3923C158.019 21.0728 157.824 20.7598 157.63 20.4456C157.559 20.3302 157.513 20.2115 157.492 20.0741C157.465 19.898 157.397 19.7283 157.349 19.5538C157.326 19.4732 157.278 19.3954 157.305 19.2729Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M161.063 28.7788C161.054 28.8416 161.06 28.8776 161.046 28.8943C160.953 29 160.866 29.1123 160.727 29.1681C160.656 29.1949 160.598 29.2562 160.528 29.2916C160.33 29.3963 160.117 29.4376 159.893 29.4387C159.768 29.4398 159.642 29.4511 159.517 29.4586C159.365 29.4677 159.225 29.516 159.082 29.5987C159.078 29.6197 159.065 29.6492 159.062 29.6777C159.052 29.7969 158.988 29.8634 158.871 29.8833C158.75 29.9064 158.646 29.8645 158.58 29.7689C158.461 29.5966 158.482 29.4908 158.607 29.3727C158.732 29.2551 158.879 29.1772 159.047 29.1702C159.25 29.1617 159.454 29.1772 159.66 29.1794C159.784 29.1826 159.911 29.1933 160.034 29.1794C160.206 29.1638 160.376 29.1321 160.546 29.101C160.688 29.0736 160.81 29.0043 160.909 28.8943C160.943 28.8577 160.991 28.8314 161.063 28.7788Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M163.55 17.06C163.647 17.1975 163.747 17.3366 163.912 17.4123C164.059 17.4799 164.168 17.5981 164.261 17.7226C164.364 17.8606 164.447 18.0126 164.536 18.1608C164.622 18.3063 164.592 18.454 164.547 18.6059C164.465 18.5769 164.479 18.5136 164.47 18.4636C164.435 18.266 164.373 18.0776 164.216 17.9455C164.096 17.8445 163.961 17.764 163.829 17.6807C163.763 17.6389 163.687 17.6131 163.616 17.5782C163.397 17.4703 163.239 17.2995 163.117 17.0917C163.096 17.0584 163.077 17.0203 163.074 16.9838C163.064 16.8485 163.081 16.7148 163.147 16.5961C163.246 16.4195 163.513 16.4238 163.614 16.601C163.633 16.6321 163.641 16.6772 163.635 16.7132C163.614 16.82 163.583 16.9247 163.55 17.06Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M155.287 14.0709C155.324 13.9834 155.405 13.9613 155.477 13.9383C155.846 13.8244 156.219 13.7305 156.611 13.7476C156.8 13.7568 156.989 13.7503 157.178 13.7562C157.304 13.76 157.428 13.7842 157.541 13.8481C157.572 13.8658 157.599 13.8996 157.619 13.9307C157.644 13.9705 157.601 14.0328 157.555 14.029C157.531 14.0274 157.507 14.0258 157.485 14.0183C157.014 13.8636 156.552 13.9436 156.091 14.0725C155.917 14.1214 155.75 14.189 155.594 14.2862C155.511 14.3388 155.474 14.3313 155.408 14.2626C155.37 14.2234 155.336 14.1793 155.305 14.1348C155.293 14.1165 155.293 14.0908 155.287 14.0709Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M149.378 16.2643C149.341 16.2943 149.325 16.319 149.306 16.3217C149.042 16.3609 148.776 16.3733 148.51 16.3572C148.471 16.3556 148.433 16.3437 148.395 16.3325C148.374 16.3255 148.354 16.3104 148.334 16.2986C148.16 16.1982 147.987 16.0978 147.789 15.9829C147.904 15.955 147.991 15.9716 148.079 15.9942C148.315 16.0522 148.552 16.1027 148.795 16.129C148.986 16.1499 149.173 16.2149 149.378 16.2643Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.637 22.68C162.482 22.7079 162.393 22.6108 162.315 22.5007C162.277 22.4459 162.32 22.3675 162.386 22.3632C162.417 22.3611 162.448 22.3632 162.48 22.3643C162.564 22.3697 162.631 22.4073 162.669 22.4819C162.704 22.5495 162.682 22.6161 162.637 22.68Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.595 23.8895C162.589 23.8873 162.585 23.8797 162.58 23.8786C162.575 23.8775 162.568 23.8829 162.563 23.8851C162.568 23.8884 162.572 23.8945 162.577 23.8945C162.583 23.8956 162.588 23.8912 162.595 23.8895Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M162.595 23.8895C162.588 23.8912 162.583 23.8956 162.577 23.8945C162.572 23.8945 162.568 23.8884 162.563 23.8851C162.568 23.8829 162.575 23.8775 162.58 23.8786C162.585 23.8797 162.589 23.8873 162.595 23.8895Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M153.575 23.8914C153.515 23.7915 153.494 23.6804 153.534 23.545C153.72 23.5418 153.907 23.5472 154.09 23.5284C154.277 23.5107 154.461 23.4683 154.646 23.4328C154.829 23.3995 155.007 23.3458 155.198 23.2325C155.111 23.3813 155.073 23.4253 154.947 23.4999C154.724 23.6342 154.492 23.7464 154.242 23.8221C154.107 23.8618 153.969 23.8914 153.832 23.9236C153.746 23.9413 153.661 23.9424 153.575 23.8914ZM160.532 24.0025C160.491 23.8892 160.448 23.8039 160.427 23.7126C160.375 23.4913 160.222 23.4108 160.015 23.3952C159.961 23.3909 159.905 23.3877 159.851 23.3899C159.677 23.3974 159.504 23.4119 159.331 23.414C159.062 23.4194 158.797 23.4054 158.554 23.2653C158.454 23.2062 158.349 23.1509 158.221 23.1676C158.166 23.174 158.098 23.1466 158.095 23.0838C158.082 22.8631 157.972 22.68 157.899 22.4819C157.651 21.801 157.249 21.2083 156.859 20.6074C156.803 20.5226 156.763 20.427 156.705 20.3432C156.579 20.1596 156.5 19.9572 156.437 19.7467C156.399 19.6205 156.357 19.497 156.317 19.373C156.28 19.374 156.252 19.3681 156.236 19.3773C156.098 19.4594 155.948 19.5024 155.797 19.5475C155.398 19.6678 154.999 19.7886 154.584 19.8423C154.532 19.8482 154.479 19.8745 154.434 19.9029C154.09 20.1134 153.719 20.2219 153.316 20.2289C153.263 20.2299 153.208 20.2418 153.156 20.2562C153.142 20.2605 153.132 20.2917 153.129 20.3126C153.126 20.3234 153.14 20.3432 153.151 20.3497C153.179 20.361 153.209 20.3706 153.239 20.3781C153.556 20.4453 153.876 20.4522 154.198 20.4093C154.398 20.3819 154.498 20.464 154.503 20.6633C154.506 20.7921 154.468 20.9129 154.41 21.0262C154.274 21.2872 154.103 21.5191 153.86 21.6942C153.783 21.7495 153.707 21.8021 153.664 21.8837C153.679 21.9938 153.752 22.0378 153.839 22.0609C153.892 22.076 153.948 22.0749 154.003 22.0829C154.093 22.0969 154.19 22.0883 154.275 22.1313C154.227 22.2784 154.225 22.2773 154.143 22.3482C154.084 22.3997 154.021 22.4502 153.972 22.5098C153.905 22.5898 153.925 22.6789 154.017 22.7262C154.064 22.7509 154.12 22.774 154.172 22.774C154.281 22.7761 154.392 22.7724 154.5 22.7552C154.737 22.7187 154.947 22.6075 155.158 22.5028C155.189 22.4878 155.223 22.4534 155.263 22.4921C155.18 22.6859 155.107 22.7772 154.955 22.8604C154.563 23.0752 154.155 23.225 153.696 23.2062C153.421 23.1939 153.416 23.2019 153.43 22.9335C153.434 22.8561 153.385 22.8078 153.317 22.8245C153.13 22.8749 153.014 23.0489 153.129 23.2422C153.156 23.2878 153.197 23.326 153.231 23.3657C153.221 23.4205 153.215 23.4672 153.204 23.5123C153.174 23.632 153.197 23.7496 153.227 23.8629C153.265 24.0025 153.347 24.1164 153.491 24.1754C153.647 24.2382 153.809 24.2866 153.973 24.278C154.239 24.2613 154.508 24.2339 154.764 24.1502C155.051 24.0557 155.325 23.9333 155.51 23.6793C155.583 23.5783 155.642 23.4666 155.703 23.356C155.852 23.086 155.945 22.7944 156.024 22.4964C156.056 22.3702 156.053 22.2478 156.004 22.1248C155.969 22.0378 155.931 21.9519 155.898 21.8628C155.859 21.7613 155.818 21.6582 155.79 21.5514C155.746 21.3919 155.779 21.2399 155.852 21.0944C155.896 21.0069 155.957 20.936 156.048 20.8979C156.096 20.877 156.143 20.8898 156.175 20.9317C156.194 20.9559 156.21 20.9849 156.22 21.0144C156.342 21.3409 156.502 21.6405 156.735 21.9047C157.017 22.2225 157.301 22.5372 157.609 22.8298C157.685 22.9045 157.744 22.9818 157.758 23.0908C157.765 23.1531 157.78 23.217 157.805 23.2723C157.918 23.5305 157.975 23.6036 158.268 23.5493C158.38 23.5295 158.49 23.5397 158.59 23.5901C158.769 23.6825 158.959 23.7276 159.154 23.7587C159.313 23.7851 159.455 23.8452 159.589 23.93C159.656 23.9708 159.724 24.017 159.797 24.0412C159.996 24.1115 160.197 24.1754 160.399 24.2339C160.737 24.336 161.076 24.4321 161.45 24.4417C161.385 24.5749 161.397 24.6957 161.45 24.8149C161.458 24.8359 161.457 24.8611 161.465 24.8831C161.491 24.9513 161.468 25.0082 161.423 25.056C161.387 25.0974 161.341 25.1296 161.305 25.1715C161.237 25.2482 161.166 25.3229 161.112 25.4077C160.891 25.7599 160.856 26.1439 160.938 26.5444C160.982 26.7678 161.037 26.9869 161.104 27.2049C161.226 27.5985 161.291 28.0012 161.243 28.4162C161.241 28.4425 161.258 28.479 161.279 28.4962C161.316 28.5241 161.36 28.5021 161.382 28.4731C161.435 28.4049 161.482 28.3325 161.525 28.2578C161.603 28.1247 161.599 27.9695 161.628 27.825C161.712 27.4105 161.701 26.9976 161.626 26.5842C161.61 26.5004 161.588 26.4166 161.57 26.3313C161.507 26.0075 161.531 25.9613 161.813 25.7997C161.894 25.7546 161.976 25.7036 162.043 25.6391C162.152 25.5334 162.205 25.4066 162.123 25.2547C162.102 25.2144 162.089 25.1704 162.069 25.1215C162.142 25.0544 162.232 25.0029 162.271 24.925C162.31 24.8487 162.296 24.7435 162.307 24.6485C162.348 24.6125 162.396 24.576 162.434 24.5443C162.447 24.4197 162.33 24.3848 162.289 24.2833C162.331 24.2801 162.359 24.2726 162.385 24.2737C162.479 24.278 162.574 24.2941 162.666 24.2833C162.833 24.2635 162.871 24.147 162.765 24.0192C162.739 23.9864 162.686 23.9698 162.695 23.9027C162.738 23.8903 162.784 23.8796 162.825 23.8629C162.928 23.8157 162.947 23.7222 162.877 23.631C162.821 23.5563 162.741 23.5252 162.657 23.5053C162.528 23.4747 162.396 23.4495 162.264 23.4215C162.232 23.334 162.252 23.2653 162.314 23.2009C162.382 23.1928 162.452 23.1864 162.521 23.1729C162.566 23.1654 162.614 23.152 162.653 23.13C162.796 23.0489 162.801 22.9619 162.668 22.8594C162.639 22.8363 162.605 22.8143 162.569 22.796C162.464 22.7439 162.353 22.6999 162.252 22.6381C162.092 22.5404 161.952 22.571 161.818 22.6832C161.771 22.7219 161.726 22.7659 161.689 22.8175C161.606 22.9313 161.534 23.0532 161.448 23.1665C161.351 23.2889 161.309 23.4285 161.308 23.5826C161.307 23.6836 161.319 23.7861 161.319 23.8892C161.317 24.0181 161.232 24.0976 161.106 24.0841C160.92 24.0621 160.733 24.0304 160.532 24.0025Z" fill="#DB334A"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M171.534 15.1656C171.502 14.9734 171.396 14.8402 171.264 14.7269C171.149 14.6313 171.027 14.5449 170.903 14.4622C170.765 14.372 170.626 14.278 170.478 14.2088C170.156 14.0616 169.829 13.9295 169.504 13.7905C169.475 13.7781 169.445 13.7674 169.414 13.7583C169.173 13.6885 168.932 13.6192 168.69 13.5505C168.584 13.5209 168.477 13.4968 168.371 13.4651C167.941 13.3368 167.508 13.2272 167.059 13.1714C166.795 13.1402 166.524 13.1563 166.264 13.0833C166.206 13.0667 166.14 13.0801 166.076 13.0812C166.021 13.0822 165.965 13.0887 165.911 13.0865C165.613 13.0715 165.315 13.0586 165.017 13.0828C164.853 13.0962 164.688 13.1086 164.523 13.129C164.212 13.1665 163.897 13.1789 163.589 13.2492C163.274 13.3201 162.954 13.3674 162.64 13.4372C162.286 13.5145 161.927 13.5719 161.586 13.697C161.018 13.907 160.43 14.0552 159.848 14.2243C159.486 14.3296 159.13 14.4552 158.772 14.575C158.408 14.6985 158.046 14.7564 157.663 14.6491C157.476 14.5954 157.275 14.5937 157.079 14.5766C157.051 14.5739 157.007 14.6093 156.992 14.6389C156.972 14.6764 156.999 14.7172 157.039 14.7317C157.143 14.7683 157.25 14.7978 157.353 14.8359C157.55 14.9095 157.755 14.9648 157.931 15.1189C157.846 15.121 157.762 15.1232 157.676 15.1259C157.551 15.1296 157.423 15.1221 157.299 15.1409C157.096 15.1737 156.892 15.1683 156.687 15.1758C156.441 15.1828 156.249 15.0689 156.075 14.9148C155.999 14.8477 155.935 14.7666 155.865 14.692C155.833 14.6587 155.801 14.6206 155.762 14.5964C155.741 14.5819 155.698 14.5798 155.677 14.5927C155.657 14.604 155.638 14.6453 155.643 14.6689C155.67 14.7838 155.7 14.8977 155.737 15.0093C155.794 15.1817 155.846 15.3551 155.836 15.5388C155.835 15.5758 155.837 15.6193 155.79 15.6354C155.773 15.6349 155.757 15.6376 155.743 15.6327C155.574 15.5758 155.481 15.4319 155.395 15.2961C155.201 14.9906 155.014 14.6802 154.844 14.3607C154.709 14.1041 154.596 13.8334 154.556 13.5397C154.545 13.4619 154.539 13.3835 154.53 13.3056C154.524 13.2616 154.498 13.2288 154.456 13.2272C154.42 13.2261 154.38 13.2374 154.349 13.2551C154.324 13.2707 154.309 13.3029 154.292 13.3298C154.195 13.4807 154.161 13.6498 154.165 13.8259C154.171 14.0219 154.186 14.2179 154.195 14.4155C154.201 14.5256 154.207 14.6356 154.203 14.7452C154.202 14.7876 154.175 14.8284 154.157 14.881C154.102 14.8531 154.056 14.8391 154.021 14.8107C153.942 14.7452 153.87 14.6721 153.795 14.604C153.744 14.5588 153.688 14.5379 153.614 14.5819C153.585 14.7634 153.618 14.9508 153.623 15.1366C153.625 15.186 153.67 15.2343 153.699 15.2805C153.785 15.4212 153.874 15.5592 153.96 15.7009C154.004 15.7745 154.031 15.8636 154.088 15.9254C154.152 15.9936 154.179 16.0714 154.197 16.1552C154.219 16.2545 154.236 16.3565 154.246 16.457C154.272 16.7174 154.254 16.9751 154.225 17.2345C154.189 17.5631 154.083 17.8643 153.912 18.1414C153.767 18.3749 153.6 18.5945 153.442 18.819C153.418 18.8539 153.397 18.885 153.435 18.9231C153.536 18.9092 153.604 18.8474 153.664 18.7717C153.727 18.6906 153.792 18.6117 153.859 18.5344C153.883 18.5049 153.912 18.4684 153.946 18.4592C154.056 18.4297 154.142 18.3626 154.235 18.304C154.325 18.2461 154.426 18.2235 154.529 18.2487C154.69 18.2869 154.842 18.3502 154.956 18.478C155.034 18.5661 155.112 18.6547 155.186 18.7454C155.269 18.8474 155.412 18.9001 155.519 18.8276C155.634 18.7497 155.757 18.7524 155.878 18.7277C156.221 18.6627 156.533 18.732 156.812 18.9419C156.844 18.964 156.871 18.9929 156.904 19.016C156.967 19.059 157.015 19.0574 157.075 19.008C157.349 18.7798 157.584 18.5188 157.77 18.2149C157.819 18.1349 157.87 18.0538 157.948 18.0211C158.143 18.0501 158.321 18.0818 158.5 18.1027C158.848 18.1424 159.172 18.0624 159.47 17.8804C159.564 17.8224 159.647 17.7521 159.703 17.6517C159.726 17.6119 159.76 17.5781 159.792 17.5384C159.882 17.5351 159.967 17.5378 160.053 17.5276C160.208 17.5083 160.367 17.4976 160.518 17.4557C160.814 17.3714 161.086 17.2259 161.361 17.0895C161.415 17.0626 161.46 17.0132 161.503 16.9681C161.544 16.9225 161.577 16.8693 161.617 16.8119C161.759 16.8575 161.899 16.8436 162.039 16.8264C162.424 16.777 162.751 16.6406 162.943 16.2583C162.99 16.2583 163.046 16.2588 163.1 16.2583C163.408 16.2545 163.714 16.2534 164.02 16.2169C164.213 16.1938 164.383 16.1257 164.55 16.0333C164.625 15.9925 164.668 15.9329 164.671 15.8443C164.671 15.8234 164.684 15.803 164.695 15.7745C164.736 15.7777 164.775 15.7772 164.812 15.7836C165.074 15.8362 165.335 15.8958 165.599 15.9426C165.825 15.9823 166.054 15.9769 166.28 15.9372C166.482 15.9012 166.505 15.825 166.375 15.6735C166.351 15.6451 166.309 15.6258 166.33 15.5613C166.399 15.535 166.475 15.5543 166.549 15.5715C166.788 15.6258 167.03 15.6467 167.274 15.6526C167.409 15.6558 167.542 15.6666 167.676 15.6612C167.872 15.6548 168.069 15.6435 168.264 15.6236C168.365 15.6139 168.466 15.5876 168.563 15.557C168.656 15.5291 168.7 15.4072 168.65 15.3251C168.619 15.2719 168.571 15.229 168.533 15.1796C168.516 15.1575 168.508 15.1296 168.492 15.0974C168.532 15.091 168.556 15.0824 168.577 15.0845C168.834 15.121 169.09 15.1677 169.347 15.1962C170.032 15.2708 170.715 15.2762 171.4 15.2112C171.444 15.2069 171.486 15.1828 171.534 15.1656ZM157.529 16.7958C157.479 16.8001 157.435 16.8103 157.393 16.8054C157.324 16.7968 157.258 16.7566 157.184 16.7958C157.116 16.8672 157.163 16.9617 157.133 17.0626C157.089 17.1008 157.03 17.1512 156.961 17.2103C156.964 17.2634 156.967 17.3241 156.97 17.3945C156.894 17.4449 156.817 17.4965 156.728 17.5539V17.8621C156.666 17.9368 156.603 17.9271 156.544 17.9003C156.494 17.8772 156.451 17.8417 156.405 17.8122C156.307 17.7472 156.213 17.6742 156.109 17.6189C156.002 17.5625 155.922 17.489 155.85 17.3896C155.625 17.0771 155.416 16.7533 155.215 16.4237C155.204 16.4059 155.204 16.3802 155.193 16.3367C155.42 16.2341 155.643 16.1944 155.869 16.1729C155.995 16.1611 156.121 16.1498 156.246 16.152C156.595 16.1611 156.936 16.0972 157.278 16.0505C157.31 16.0467 157.341 16.0376 157.372 16.0349C157.437 16.029 157.473 16.0585 157.486 16.124C157.526 16.3404 157.534 16.5595 157.529 16.7958Z" fill="#DB334A"/>\n</svg>\n'},349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withVideo}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(40);const withVideo=WrappedComponent=>{const WrappedComponentWithVideo=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"jw_player",data:{id:"w6YvMN4P",bundle:"jw_player_id",mid:16695,changed:"1589436714"}},{type:"image",data:{title:"video-placeholder.jpg",description:null,caption:"Video caption",copyright:"Video copyright",credit:"Video credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(255,150,150),id:"8406636",bundle:"remote_image",mid:16693,changed:"1589436714"}}]}});return WrappedComponentWithVideo.propTypes={...WrappedComponent.propTypes},WrappedComponentWithVideo}},350:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withGallery}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(40);const withGallery=WrappedComponent=>{const WrappedComponentWithGallery=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"gallery",data:{title:"Mock gallery",gallery:[{type:"image",data:{title:"Title 1",description:null,caption:null,copyright:"Copyright for image 1",credit:"Credit for image 1",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8358121",bundle:"remote_image",mid:2159,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 2",description:"Description 2",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8347086",bundle:"remote_image",mid:2160,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 3",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:"8347081",bundle:"remote_image",mid:2161,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 4",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(200,200,0),id:"8347071",bundle:"remote_image",mid:2162,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 5",description:"This is a description",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8347076",bundle:"remote_image",mid:2163,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],bundle:"gallery",mid:2171,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"something.jpg",description:null,caption:null,copyright:"This is the gallery copyright",credit:"This is the gallery credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,100,100),id:"8358111",bundle:"remote_image",mid:2157,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}});return WrappedComponentWithGallery.propTypes={...WrappedComponent.propTypes},WrappedComponentWithGallery}},40:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createImageFromString}));const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1,canvas.height=1;const createImage=(r=0,g=0,b=0)=>(ctx.fillStyle=`rgb(${r}, ${g}, ${b})`,ctx.fillRect(0,0,1,1),canvas.toDataURL("image/png","")),createImageFromString=(str="")=>{let hash=0;for(let i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash),hash&=hash;const rgb=[0,0,0];for(let i=0;i<3;i++)rgb[i]=hash>>8*i&255;return createImage(...rgb)};__webpack_exports__.b=createImage},478:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);const postData=[{data:{markup:"<p>Paragraph 1</p>"},type:"markup"},{data:{markup:"<p>Paragraph 2</p>"},type:"markup"},{data:{markup:"<p>Paragraph 3</p>"},type:"markup"}];__webpack_exports__.default=()=>({type:"liveblog",data:{id:1645,uuid:"b80ee485-4563-4969-b6f8-ba8b568bae46",status:0,updated:"1591935880",extra:[]},posts:[{type:"post",data:{name:"1645",title:null,id:1686,uuid:"2bdaa90b-01b1-4601-8e8e-f62e72142b94",scheduleTime:null,created:"1589445900",changed:"1589446080",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p>Hello and welcome to <em>The Independent</em>'s rolling coverage of something in the news.</p>"},type:"markup"}]},{type:"post",data:{name:"1645",title:null,id:1685,uuid:"7049ddde-8f65-41d5-aabc-5af58b865f76",scheduleTime:null,created:"1589446800",changed:"1589446626",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1684,uuid:"ee185f17-99ed-48bb-a82e-b839b93c56fd",scheduleTime:null,created:"1589448000",changed:"1589447577",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1683,uuid:"f0c085ce-53d0-405f-8e6a-6013f60b6b9c",scheduleTime:null,created:"1589449200",changed:"1589447948",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1682,uuid:"4272fcd5-94bc-44b7-8250-05ec3ec07e4a",scheduleTime:null,created:"1589450400",changed:"1589449282",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1681,uuid:"b4a5eff3-512f-4bd2-ac40-44375570d70d",scheduleTime:null,created:"1589451600",changed:"1589450838",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1680,uuid:"98a6f735-0abe-4886-a4c0-4b59ac90dcef",scheduleTime:null,created:"1589452800",changed:"1589452075",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1679,uuid:"98efc34e-9017-4bb9-826c-04868846f6a5",scheduleTime:null,created:"1589454000",changed:"1589453570",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1678,uuid:"61ec940f-dd8c-44ed-8b11-06406a87091d",scheduleTime:null,created:"1589455200",changed:"1589454730",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1677,uuid:"4b4bdf17-f2f7-409b-af03-7028eeb7f694",scheduleTime:null,created:"1589456400",changed:"1589454778",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p><strong>!!!!!!</strong></p>"},type:"markup"}]}],paging:{total:41,posts:10,offset:0,currentPage:1,totalPages:5}})},484:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(318),__webpack_require__(3)),_services_article__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(100),_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(336),_SocialShare__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(346);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  border-top: 1px solid ${props=>props.theme.color.navGrey};
  padding-bottom: 16px;
  align-items: baseline;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.laptop} {
    flex-direction: row;
    border-top: none;
  }
`,InnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  color: ${props=>props.theme.color.fontMedium};
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding-top: 16px;
  line-height: normal;
  display: flex;
  line-height: 24px;
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.laptop} {
    margin: auto 0;
    padding: 0;
    font-size: 14px;
  }
`,PublishedDate=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-flex;
`,Author=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div``,AuthorLink=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a`
  display: inline-block;
  font-weight: normal;
  text-decoration: none;
  color: ${props=>props.theme.color.fontMedium};
  border-bottom: 1px solid ${props=>props.theme.color.primary};
  &:hover {
    color: ${props=>props.theme.color.hover};
  }
`,ByAuthor=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span`
  font-weight: normal;
  color: ${props=>props.theme.color.fontMedium};
`,AuthorTwitterLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(AuthorLink)`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: normal;
  border-bottom: none;
  &:after {
    display: inline-block;
    content: ' | ';
    color: ${props=>props.theme.color.fontMedium};
    margin: 0 8px;
    font-size: 12px;
  }
`,AuthorDetails=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-block;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  line-height: normal;
  margin-right: 8px;
  :nth-last-child(2) {
    margin-right: 0;
    &:after {
      display: inline-block;
      content: ' | ';
      color: ${props=>props.theme.color.fontMedium};
      margin: 0 8px;
      font-size: 12px;
    }
  }
`,AuthorTitle=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span`
  padding-left: 6px;
`,ArticleMeta=props=>{var _article$authors;const{className:className,theme:theme,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(_services_article__WEBPACK_IMPORTED_MODULE_7__.a)(article),authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AuthorDetails,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ByAuthor,{children:"By "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorLink,{href:a.path,children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),a.jobTitle&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorTitle,{children:a.jobTitle})]}),a.twitter&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AuthorTwitterLink,{href:"https://twitter.com/"+a.twitter,children:["@",a.twitter]})]},a.id));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Author,{className:"author",children:[authors||"",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublishedDate,{className:"publish-date",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__.a,{date:dateToShowInTimestamp})})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SocialShare__WEBPACK_IMPORTED_MODULE_9__.a,{className:"social-share",article:article,theme:theme,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,article:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string},ArticleMeta.defaultProps={theme:"default"},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(ArticleMeta)},485:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(161),_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(77);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  max-width: 600px;
  height: 400px;
  background: ${props=>props.theme.color.contrastLight};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.contrastDarker};
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  box-shadow: 0px 0px 6px #8f8f8e;
  align-items: center;
  align-self: center;
  margin: 15% auto;
  box-sizing: border-box;

  .close {
    border: 0 none;
    background: 0;
    outline: 0;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 25px;
    padding: 0px;
    z-index: 10;
    font-size: 27px;
    line-height: 0;
    width: 17px;
    height: 17px;
    font-family: sans-serif;
  }

  form {
    width: 100%;
    max-width: 340px;
  }
`,H4=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h4`
  font-family: ${props=>props.theme.fontFamily.primaryFont};
  color: ${props=>props.theme.color.primary};
  font-weight: 400;
  margin: 0 0 16px 0;
  font-size: 26px;
  line-height: 30px;
`,P=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  margin: 0;
`,Link=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a`
  text-decoration: none;
  color: ${props=>props.theme.color.primary};
`,ForgotPassword=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
  text-align: right;
  a {
    font-size: 14px;
    color: ${props=>props.theme.color.primary};
    text-decoration: none;
  }
`,StyledFormSubmit=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_4__.a)`
  button {
    width: 224px;
  }
`,LoginModal=({req:{originalUrl:originalUrl}})=>{const returnUrl=originalUrl||"/";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{on:"tap:login-modal.close",className:"close",children:"✕"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(H4,{children:"Log in with Evening Standard"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{id:"login-page-form",className:"login-page-form",method:"post",target:"_top","action-xhr":"/internal-api/user/login/submit","verify-xhr":"/internal-api/user/login/verify","custom-validation-reporting":"interact-and-submit",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"returnUrl",defaultValue:returnUrl}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"loginEmail",fieldId:"login-page-form-email",displayName:"Email",requiredField:!0,valueMissingMsg:"Please enter a valid email"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"password",inputType:"password",showPassword:!1,fieldId:"login-page-form-password",displayName:"Password",requiredField:!0,valueMissingMsg:"Please enter a valid password"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ForgotPassword,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/forgotten-password",children:"Forgotten your password?"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledFormSubmit,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(P,{children:["Not registered? ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:"/register",children:"Register here"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"form-errors","submit-error":"true",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})})]})]})};LoginModal.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{req:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(LoginModal),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Modals/Login.js"]={name:"LoginModal",docgenInfo:LoginModal.__docgenInfo,path:"app/component/library/Modals/Login.js"})},53:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82);class MockArticleContent extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.a)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.d)(props.articleOverrides),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockArticleContent.propTypes={articleOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockArticleContent.defaultProps={articleOverrides:{},reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockArticleContent},62:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentThemeProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ComponentThemesProvider}));const ComponentThemeProvider=(theme,Dark,Default)=>"dark"===theme?Dark:Default,ComponentThemesProvider=(theme,Default,themes)=>themes[theme]||Default},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return JW_PLAYER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BRIGHTCOVE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return YOUTUBE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DUGOUT_VIDEO})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GALLERY})),__webpack_require__.d(__webpack_exports__,"d",(function(){return IMAGE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return POLAR}));const JW_PLAYER="jw_player",BRIGHTCOVE="brightcove",YOUTUBE="youtube",DUGOUT_VIDEO="dugout-video",GALLERY="gallery",IMAGE="image",POLAR="polar"},66:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return height})),__webpack_require__.d(__webpack_exports__,"j",(function(){return width})),__webpack_require__.d(__webpack_exports__,"d",(function(){return layout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return sizes})),__webpack_require__.d(__webpack_exports__,"c",(function(){return heights})),__webpack_require__.d(__webpack_exports__,"e",(function(){return media})),__webpack_require__.d(__webpack_exports__,"h",(function(){return placeholder})),__webpack_require__.d(__webpack_exports__,"a",(function(){return fallback})),__webpack_require__.d(__webpack_exports__,"f",(function(){return noloading})),__webpack_require__.d(__webpack_exports__,"g",(function(){return on}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(164);const height=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.width==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`);break;case"fixed-height":if(null==props[propName])return new Error(`Props 'height is required for layout '${props.layout}'`)}},width=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.height==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`)}},layout=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["container","fill","fixed","fixed-height","flex-item","intrinsic","nodisplay","responsive"]),sizes=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,heights=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,media=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,placeholder=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,fallback=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,noloading=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,on=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},74:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return setMockArticleOverrides})),__webpack_require__.d(__webpack_exports__,"i",(function(){return setMockSectionOverrides})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setMockMenuOverrides})),__webpack_require__.d(__webpack_exports__,"h",(function(){return setMockReqOverrides})),__webpack_require__.d(__webpack_exports__,"j",(function(){return setMockStaticArticleOverrides})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setMockConfigurationOverrides})),__webpack_require__.d(__webpack_exports__,"f",(function(){return setMockLocalsOverrides})),__webpack_require__.d(__webpack_exports__,"a",(function(){return setIsArticle})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setIsSection})),__webpack_require__.d(__webpack_exports__,"b",(function(){return setIsOther}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(40);var mockArticle=()=>({type:"article",id:"000",status:!0,title:"This is a title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{path:"",name:""}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{authorInfo:"London"},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,authors:[{name:"I am the Author",id:"1048",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:null,imageUrl:Object(createImage.b)(0,150,0),twitter:"SomeJourno",facebook:null,location:null,path:"/author/jack-de-menezes",description:null}],inlineImages:[],articleTypes:[],adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"This is a hero caption",copyright:"Hero copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"},localCaption:"This is a hero local caption"}}],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Left aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"left",localCaption:"Left aligned image"},id:"4dynb5l3"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Center aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"center",localCaption:"Center aligned image"},id:"4dynb5l4"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Right aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"right",localCaption:"Right aligned image"},id:"4dynb5l5"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}}],topics:[{name:"Coronavirus",path:"/topic/coronavirus",id:"2791",uuid:"5fb2cb72-e9f4-4fcf-b747-bbba4afe8c1b"},{name:"covid-19",path:"/topic/covid-19",id:"2792",uuid:"808643d7-50fd-401a-b9de-2ef4d182b5f8"},{name:"Boris Johnson",path:"/topic/boris-johnson",id:"2790",uuid:"ca965785-4801-48bd-b738-6d341a18867f"},{name:"second wave",path:"/topic/second-wave",id:"6215",uuid:"4eb366bc-4861-4af4-a625-7045cdc92344"},{name:"Quarantine",path:"/topic/quarantine",id:"3451",uuid:"b607d24f-b8b8-4e67-aeac-20170cbabd3d"},{name:"Schools",path:"/topic/schools",id:"2880",uuid:"0ffee463-3f17-4966-a9fd-6fcd4cc0c64b"},{name:"Oliver Dowden",path:"/topic/oliver-dowden",id:"4291",uuid:"9f5e5539-6d52-433e-b472-5d76a4d60813"}]}),newslettersConfig=__webpack_require__(327),publication=__webpack_require__(126),articleX2=__webpack_require__(328),article=__webpack_require__(10),articleX4=__webpack_require__(329),ad_replacement=type=>({"premium-ad":{AdReplacement:{type:"premium_ad",data:{name:"Premium ad name",link:"/",category:null,id:"25",uuid:"e935d011-f8f8-4b34-a286-874659e29322",image:{type:"image",data:{title:"ICYMI MPU",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:null,bundle:"remote_image",mid:632377,changed:"1595331176",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}}}},"premium-letter":{AdReplacement:{type:"premium_letter",data:{name:"Premium letter name",heading:"Premium letter heading",link:"/",author:{name:"Premium letter author",id:"28644",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:"I'm an author of premium letters",imageUrl:Object(createImage.b)(150,150,0),twitter:"SomeAuthor",facebook:null,location:null,path:"/author/some-journo",description:"Some journo with a job working here",extra:null},body:"<p>Bla Bla Blah.....</p>",id:"11",uuid:"f711b4ba-6623-4362-bbf8-413dcfe60da9"}}}}[type]||{}),articleX6PlusMPU=(articleOverrides,adReplacementType="none")=>({name:"6 articles + MPU",type:"ArticleX6PlusMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"mpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX6 plus MPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 6"}),...articleOverrides}],...ad_replacement(adReplacementType)}),articleX8=articleOverrides=>({name:"8 articles",type:"ArticleX8",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX8 article 1",heroType:"video"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 3 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 8"}),...articleOverrides}]}),articleX8PlusDMPU=(articleOverrides,adReplacementType="none")=>({name:"8 articles + DMPU",type:"ArticleX8PlusDMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"dmpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX8 plus DMPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 8"}),...articleOverrides}],...ad_replacement(adReplacementType)}),heroArticle=__webpack_require__(330),heroPlus2Articles=articleOverrides=>({name:"Hero + 2 Articles",type:"HeroPlus2Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X2 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 2",heroType:"video",live:!0}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 3"}),...articleOverrides}]}),heroPlus3Articles=articleOverrides=>({name:"Hero + 3 Articles",type:"HeroPlus3Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X3 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 4"}),...articleOverrides}]}),heroPlus6Articles=articleOverrides=>({name:"Hero + 6 Articles",type:"HeroPlus6Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X6 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 4"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 5"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 6"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 7"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 8"}),...articleOverrides}]}),more=__webpack_require__(257),title=__webpack_require__(331);var mockStaticArticle=()=>({type:"article",id:"2454",remoteId:null,status:!0,title:"Contact Evening Standard",titleShort:"Contact Evening Standard",titleSocial:"Contact Evening Standard",titleSEO:null,lead:"",path:"/service/contact-evening-standard-b2454.html",articleTypes:[{name:"Service",path:"/article-type/service",id:"6336",uuid:"dd3071b6-e9d5-4388-88b1-475b7dc4e5cc",changed:"1600680690"}],hierarchy:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],workflow:"Draft",sections:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],hero:null,photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:null,updated:1601652557,changed:1601652557,publish:1601652557,firstCreated:1601647345,firstPublished:1601649499,overrideDate:0,isLiveBlog:!1,wordCount:842,imageCount:0,contentSource:[{name:"Internal",id:"6343",uuid:"774920cf-9dc9-463f-82f4-4f5be8d25046"}],tags:null,chain:null,topics:null,people:null,teams:null,events:null,publications:[{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}}],sidebar:{type:"sidebar_layout",data:{name:"Evening Standard Default sidebar_layout",id:"3",uuid:"563fbb67-4ca6-4398-8f21-f5a921d9efae",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null},layoutSettings:[{type:"markup",name:"Sidebar Markup",id:"8e27in6o",markup:""},{type:"Ad",name:"Sidebar Ad",id:"cjr5sxmk",adSource:"DFP"},{type:"MostPopular",name:"Most Popular",id:"wx1oq1dr"},{type:"PopularVideos",name:"Popular Videos",id:"s7x7wdxw"},{type:"Ad",name:"Sidebar Ad",id:"ivutyz22",adSource:"DFP"},{type:"SponsoredFeatures",name:"Sponsored Features",id:"gvp80c5v"},{type:"Taboola",name:"Taboola",id:"594axpb8"},{type:"Ad",name:"Sidebar Ad",id:"xqot2o8k",adSource:"DFP"}]},adConfig:{type:"ad_config",data:{name:"standard.co.uk Ad Config",description:"Default config for the Evening Standard",id:"1",uuid:"a9620513-8ece-4f60-8772-9891b5faf6fd",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null,article:null},adConfig:[]},commenting:!0,priority:"4",images:null,OGImages:null,body:[{type:"markup",data:{markup:"<p>Here we set out some key information about who does what across our business and how you can contact them. You will find email addresses and phone numbers for our various departments. It will help us to answer your query quickly and fully if you direct it to the right place.</p>"},id:"r1nxh20s"},{type:"markup",data:{markup:'<p>If you have a story you think we might be interested to know about please email our news team at <a rel="nofollow" href="mailto:news@standard.co.uk">news@standard.co.uk</a>.</p>'},id:"3p070n38"},{type:"markup",data:{markup:'<p>For help with a technical problem relating to <a rel="nofollow" href="https://www.standard.co.uk">standard.co.uk</a> please contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>. For technical problems with the <strong>Evening Standard app</strong> please also contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>.</p>'},id:"gxezcti2"},{type:"markup",data:{markup:'<p>If you have a concern about editorial material that has appeared in the Evening Standard or on this website (or on our apps), please visit our <a href="/service/code-conduct-complaints-b2443.html">Code of Conduct and our complaints procedure page</a>.</p>'},id:"q2zu192k"},{type:"H2",data:{markup:"<h2>E-editions</h2>"},id:"6h1b1kxp"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:standardonline@newspaperdirect.com">standardonline@newspaperdirect.com</a></p>'},id:"c4q05nvq"},{type:"markup",data:{markup:"<p>(A subscription to the Evening Standard E-editions provides access to the newspaper on line each day and includes all magazines, supplements and any special features published in the news stand edition in the UK)</p>"},id:"i7bwr7w1"},{type:"H2",data:{markup:"<h2>Advertising</h2>"},id:"w2z77ycp"},{type:"markup",data:{markup:'<p>Click here to find out more about advertising in the Evening Standard <a rel="nofollow" href="http://esimedia.co.uk/">esimedia.co.uk</a></p>'},id:"vtf5a3ro"},{type:"H2",data:{markup:"<h2>Evening Standard promotions</h2>"},id:"iiim3is7"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:Davina.kesby@esimedia.co.uk">Davina.kesby@esimedia.co.uk</a></p>'},id:"ufrp2bvn"},{type:"H2",data:{markup:"<h2>Postal address:</h2>"},id:"z182wrw6"},{type:"markup",data:{markup:"<p>Evening Standard</p>"},id:"n5cbt5ya"},{type:"markup",data:{markup:"<p>ESI Media</p>"},id:"i76q9y94"},{type:"markup",data:{markup:"<p>2 Derry Street</p>"},id:"iloilefn"},{type:"markup",data:{markup:"<p>London W8 5TT​</p>"},id:"nju2j6g0"},{type:"markup",data:{markup:"<p>United Kingdom</p>"},id:"du1c8gio"},{type:"markup",data:{markup:"<p>Switchboard - 020 3367 7000</p>"},id:"l9418yeq"},{type:"H2",data:{markup:"<h2>Editorial contact details (newspaper)</h2>"},id:"2hw287zp"},{type:"markup",data:{markup:"<p>Editor: Emily Sheffield</p>"},id:"pj71460v"},{type:"markup",data:{markup:"<p>Editor in Chief: George Osborne</p>"},id:"8nr7kw5b"},{type:"markup",data:{markup:"<p>Deputy Editor: Charlotte Ross</p>"},id:"ymakbtx1"},{type:"markup",data:{markup:"<p>Executive Editor: Jack Lefley</p>"},id:"65cq0jwq"},{type:"listbulleted",data:{markup:"<ul><li>E-mail: syndication@standard.co.uk</li><li>Telephone: +44 (0)20 3615 2272 (text and video);</li><li>Telephone: +44 (0)20 3615 2277 (pictures)</li></ul>"},id:"g5v5akxt"},{type:"H3",data:{markup:"<h3>GO London</h3>"},id:"kq52bk6g"},{type:"markup",data:{markup:"<p>Editor: David Ellis</p>"},id:"5wqx9s06"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:david.ellis@standard.co.uk">david.ellis@standard.co.uk</a></p>'},id:"qyw79lzc"},{type:"H3",data:{markup:"<h3>Shopping</h3>"},id:"7tzarkvf"},{type:"markup",data:{markup:"<p>Editor: Jessica Reynolds</p>"},id:"u0rgahbi"},{type:"markup",data:{markup:'<p>E:<a rel="nofollow" href="mailto:jessica.reynolds@standard.co.uk"> jessica.reynolds@standard.co.uk</a></p>'},id:"vdgbm1ll"},{type:"H3",data:{markup:"<h3>Insider</h3>"},id:"23odz3fx"},{type:"markup",data:{markup:"<p>Editor: Lucy Pavia​</p>"},id:"5b6c2thb"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:lucy.pavia@standard.co.uk">lucy.pavia@standard.co.uk</a></p>'},id:"m7jzxvf2"},{type:"HR",data:{markup:""},id:"ri9jrypa"},{type:"H2",data:{markup:"<h2>Commercial contacts</h2>"},id:"bq15me4r"},{type:"markup",data:{markup:"<p>CEO: Charles Yardley</p>"},id:"hggk466j"},{type:"markup",data:{markup:"<p>Commercial director: James White</p>"},id:"yslu0zr0"},{type:"markup",data:{markup:"<p>Circulation Manager: Tim Freeman</p>"},id:"xh41dpiz"},{type:"markup",data:{markup:"<p>Classified Ad Director: Martin Smith</p>"},id:"wfrvboy7"},{type:"markup",data:{markup:'<p>Contact details: <a rel="nofollow" href="http://esimedia.co.uk/contact/">http://esimedia.co.uk/contact/</a></p>'},id:"g82tr3f4"},{type:"markup",data:{markup:""},id:"a0uws27l"}],extra:{products:[],starRating:0,isBreakingNews:!1,isHideNewsletterSignUp:!1,urlRedirect:"",featureTitle:"",isDisableAutoGallery:!1,isShowSponsoredCapsule:!1,isHideFromFIA:!1,isHideFromAMP:!1,isHideFromAppleNews:!1,authorInfo:"",isHideDisplayAds:!1,isHideHardCodedAds:!1,isHidePreRollAds:!1,displayDatePreference:"lastUpdatedDate",seoDescription:"",canonicalUrl:"",isDisableAllAds:!0,selectedCompetition:"",selectedSeason:"",selectedMatch:"",liveblog:"",liveblogKeypoints:"",liveblogKeypointsTitle:""},notes:[],grapeshot:["NONE"]});const mockWithRequest_mockArticle={},mockWithRequest_mockSection={},mockWithRequest_mockMenu={},mockReq={},mockWithRequest_mockConfiguration={},mockLocals={},mockWithRequest_mockStaticArticle={},mockRequestProps={res:{locals:mockLocals},req:mockReq,cleanAmp:!1,article:mockWithRequest_mockArticle,section:mockWithRequest_mockSection,menu:mockWithRequest_mockMenu,jsGlobals:{},configuration:mockWithRequest_mockConfiguration,staticArticle:mockWithRequest_mockStaticArticle},RequestProvider=__webpack_require__(8);RequestProvider.withRequest=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,...mockRequestProps}),RequestProvider.withRequestOnly=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,req:mockReq,res:{locals:{configuration:{}}}});const resetAndAssignOverrides=(mock,orig,overrides)=>{var obj;obj=mock,Object.keys(obj).forEach(key=>{delete obj[key]}),Object.assign(mock,orig,overrides)},setMockArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockArticle(),overrides)},setMockSectionOverrides=overrides=>{var articleOverrides;resetAndAssignOverrides(mockWithRequest_mockSection,{type:"section",section:{name:"News",path:"/",sourcePath:"news"},publication:"standard.co.uk",adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},components:[Object(heroArticle.a)(),Object(articleX2.a)(),{name:"3 articles",type:"ArticleX3",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX3 article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 2 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 3"}),...articleOverrides}]},Object(articleX4.a)(),articleX8(),heroPlus2Articles(),heroPlus3Articles(),heroPlus6Articles(),Object(title.a)(),articleX6PlusMPU(),articleX8PlusDMPU(),Object(more.a)()]},overrides)},setMockMenuOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockMenu,{fullMenu:{name:"standard.co.uk Full Nav",domain:"standard.co.uk",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"standard.co.uk Nav Bar",domain:"standard.co.uk",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},subnavMenu:{name:"standard.co.uk Nav Bar - Best",domain:"standard.co.uk",bundle:"15",id:"15",uuid:"0b898818-1b27-4f1a-bc61-6ee99af7a41c",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./",children:[{title:"Sub-submenu item 1",id:"sub-submenu_1",path:"./"},{title:"Sub-submenu item 2",id:"sub-submenu_2",path:"./"},{title:"Sub-submenu item 3",id:"sub-submenu_3",path:"./"}]},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"standard.co.uk Footer",domain:"standard.co.uk",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},overrides)},setMockReqOverrides=overrides=>{resetAndAssignOverrides(mockReq,{path:"",cookies:{},url:"",query:[]},overrides)},setMockStaticArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockStaticArticle(),overrides)},setMockConfigurationOverrides=overrides=>(resetAndAssignOverrides(mockWithRequest_mockConfiguration,{domain:"standard.co.uk",jsGlobals:{userComments:[]},baseUrl:"",articleThemes:{insider:["/insider"]},sectionThemes:{insider:["/insider"]},feeds:{mmm:{src:"/mockMostPopularFeed.json",items:"articles"}},subdomain:{static:"static-dev"},componentThemes:{voices:["/voices"]},subscriptionConfig:{uk:{premium:{monthly:{headerCopy:"premium monthly header copy",price:"£premium-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{introOffer:"premium anual intro offer"}},tide:{monthly:{headerCopy:"tide monthly header copy",price:"£tide-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{}},student:{}}},locale:"UK",jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},jwplayerPlayerIds:{default:{defaultPlayer:"XLzx33eA",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"9ygSIn9G",commercialPlayer:"liFHUI6p"},premium:{defaultPlayer:"5o5ADYp0",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"iFfmiGED",commercialPlayer:"liFHUI6p"},amp:{defaultPlayer:"OUuXFa7T",noAdsPlayer:"liFHUI6p",sensitivePlayer:"uc5S9Kil",inlinePlayer:"cEvdfzWH",commercialPlayer:"sQ67rESa"}},social:{},newslettersConfig:newslettersConfig.a[publication.a]},overrides),mockWithRequest_mockConfiguration),setMockLocalsOverrides=overrides=>{resetAndAssignOverrides(mockLocals,{cleanAmp:!1,article:mockWithRequest_mockArticle,configuration:mockWithRequest_mockConfiguration,menu:mockWithRequest_mockMenu,staticArticle:mockWithRequest_mockStaticArticle},overrides)},setIsArticle=()=>{delete mockRequestProps.section,mockRequestProps.article=mockWithRequest_mockArticle},setIsSection=()=>{delete mockRequestProps.article,mockRequestProps.section=mockWithRequest_mockSection},setIsOther=()=>{delete mockRequestProps.article,delete mockRequestProps.section}},77:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),classnames=__webpack_require__(49),classnames_default=__webpack_require__.n(classnames);const Icon=styled_components_browser_esm.default.span`
  height: 24px;
  width: 24px;
  display: inline-block;
  text-align: center;

  svg {
    fill: ${props=>props.theme.color.icons};
    width: auto;
    height: 24px;
  }
`,TextField=({className:className="",fieldName:fieldName,fieldId:fieldId,displayName:displayName="",helperText:helperText="",inputType:inputType="text",valueMissingMsg:valueMissingMsg="",patternMismatchMsg:patternMismatchMsg="",pattern:pattern=!1,requiredField:requiredField=!1,showPassword:showPassword=!1,value:value="",autocomplete:autocomplete=""})=>Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("input",{defaultValue:value,type:inputType,id:fieldId,name:fieldName,pattern:pattern||void 0,required:requiredField,"aria-controls":fieldId+"-helper-text","aria-describedby":fieldId+"-helper-text",autoComplete:autocomplete,className:classnames_default()("form-textfield",{className:className},{valid:value})}),Object(jsx_runtime.jsx)("label",{htmlFor:fieldId,children:displayName}),showPassword&&Object(jsx_runtime.jsxs)("a",{className:"show-password show",children:[Object(jsx_runtime.jsx)(Icon,{className:"hide-icon",dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">\n    <path fill="#787877" fill-rule="evenodd" d="M12 6.7a5 5 0 014.8 6.4l3 3c1.4-1.1 2.5-2.7 3.2-4.4a11.8 11.8 0 00-14.6-7L10.5 7l1.5-.2zm-8.6-4L2 4l2.7 2.7c-1.6 1.3-3 3-3.7 5a11.8 11.8 0 0015.3 6.6l3.4 3.5 1.4-1.4L3.4 2.6zm8.6 14a5 5 0 01-4.5-7.2L9 11.1l-.1.6a3 3 0 003.6 2.9l1.5 1.6c-.6.3-1.3.5-2.1.5zm3-5.4a3 3 0 00-2.7-2.6l2.7 2.6z" clip-rule="evenodd"/>\n  </svg>\n'}}),Object(jsx_runtime.jsx)(Icon,{className:"show-icon",dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 6c-6.667 0-12.36 4.147-14.667 10 2.307 5.853 8 10 14.667 10s12.36-4.147 14.667-10c-2.307-5.853-8-10-14.667-10zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667 6.667 2.987 6.667 6.667-2.987 6.667-6.667 6.667zM16 12c-2.213 0-4 1.787-4 4s1.787 4 4 4 4-1.787 4-4-1.787-4-4-4z" fill="#787877"/></svg>\n'}})]}),helperText&&Object(jsx_runtime.jsx)("span",{className:"help-text",id:fieldId+"-helper-text",children:helperText}),valueMissingMsg&&Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:valueMissingMsg}),patternMismatchMsg&&Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"patternMismatch","validation-for":fieldId,children:patternMismatchMsg}),Object(jsx_runtime.jsx)("span",{className:"error-text","visible-when-invalid":"customError","validation-for":fieldId})]});TextField.propTypes={className:prop_types_default.a.string,fieldName:prop_types_default.a.string.isRequired,fieldId:prop_types_default.a.string.isRequired,displayName:prop_types_default.a.string,helperText:prop_types_default.a.string,inputType:prop_types_default.a.string,valueMissingMsg:prop_types_default.a.string,patternMismatchMsg:prop_types_default.a.string,pattern:prop_types_default.a.string,requiredField:prop_types_default.a.bool,showPassword:prop_types_default.a.bool,value:prop_types_default.a.string,autocomplete:prop_types_default.a.string},TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},displayName:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},helperText:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},inputType:{defaultValue:{value:"'text'",computed:!1},type:{name:"string"},required:!1,description:""},valueMissingMsg:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},patternMismatchMsg:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},pattern:{defaultValue:{value:"false",computed:!1},type:{name:"string"},required:!1,description:""},requiredField:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},showPassword:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},autocomplete:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},fieldName:{type:{name:"string"},required:!0,description:""},fieldId:{type:{name:"string"},required:!0,description:""}}};var FormTextFieldInput=TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextFieldInput.js"]={name:"TextField",docgenInfo:TextField.__docgenInfo,path:"app/component/library/Forms/FormTextFieldInput.js"});const Fieldwrapper=styled_components_browser_esm.default.div`
  width: 100%;
  position: relative;
  margin-bottom: 22px;

  input {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 16px;
    font-weight: normal;
    letter-spacing: normal;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 20px 16px 16px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 4px;
    background: none;
    appearance: none;
  }

  .error-text,
  .help-text {
    position: absolute;
    display: block;
    top: 60px;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 0 0 0 16px;
    font-size: 12px;
    letter-spacing: normal;
    line-height: 1;
    z-index: 1;
    text-align: left;
  }

  .error-text {
    color: ${props=>props.theme.color.formError};
  }

  .user-invalid ~ .visible {
    opacity: 1;
    display: block;
  }

  .help-text {
    opacity: 0;
    color: ${props=>props.theme.color.font};
  }

  input:focus {
    outline: 0;
    ~ .help-text {
      opacity: 1;
    }
    ~ .error-text {
      opacity: 0;
    }
  }

  label {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    line-height: 1.15rem;
    left: 16px;
    right: initial;
    top: 31px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    position: absolute;
    transform-origin: left top;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
      color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    user-select: none;
    overflow: hidden;
    will-change: transform;
  }

  input.input-has-value ~ label {
    transform: translateY(-210%) scale(0.75);
    background: ${props=>props.theme.color.contrastLight};
    padding: 0 4px;
  }

  input.valid,
  input:focus,
  input.user-invalid:not(.valueMissing) {
    & ~ label {
      transform: translateY(-210%) scale(0.75);
      background: ${props=>props.theme.color.contrastLight};
      padding: 0 4px;
    }
  }
  /* keep this selector separate or Firefox breaks it */
  input:-webkit-autofill ~ label {
    transform: translateY(-210%) scale(0.75);
    background: ${props=>props.theme.color.contrastLight};
    padding: 0 4px;
  }

  input.user-invalid {
    border: 2px solid ${props=>props.theme.color.formError};
    & ~ label {
    }
  }
  input[required='true'].user-valid {
    border: 2px solid ${props=>props.theme.color.formSuccess};
  }

  input:focus {
    border: 2px solid ${props=>props.theme.color.formFocus};
  }

  input:hover {
  }

  .show-password {
    text-decoration: none;
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 16px;
    user-select: none;
    cursor: pointer;

    .show-icon {
      display: none;
    }
  }
  .show-password.show .hide-icon {
    display: none;
  }
  .show-password.show .show-icon {
    display: inline-block;
  }

  input[name='password'] {
    padding-right: 62px;
  }
`,FormTextField_TextField=({className:className,...passThroughProps})=>Object(jsx_runtime.jsx)(Fieldwrapper,{className:className,children:Object(jsx_runtime.jsx)(FormTextFieldInput,{...passThroughProps})});FormTextField_TextField.propTypes={className:prop_types_default.a.string},FormTextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=FormTextField_TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextField.js"]={name:"TextField",docgenInfo:FormTextField_TextField.__docgenInfo,path:"app/component/library/Forms/FormTextField.js"})},82:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),server_browser=__webpack_require__(254),es=__webpack_require__(921),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(332);const MPUModule=__webpack_require__(255);let mockMPUID=0;const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: silver;
    outline: dashed orange 2px;
    overflow: hidden;

    background: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        orange 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%
      ),
      linear-gradient(
        to top right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 0.8px),
        orange 50%,
        rgba(0, 0, 0, 0) calc(50% + 0.8px),
        rgba(0, 0, 0, 0) 100%
      );
  }

  p {
    font-family: Courier;
    font-size: 12px;
    margin: 0;
    padding: 0;
    text-shadow: -1px -1px 1px #fff, 1px -1px 1px #fff, -1px 1px 1px #fff,
      1px 1px 1px #fff;
  }
`,getMaxSize=sizesArr=>sizesArr.reduce((acc,item)=>{const area=item[0]*item[1];return area>acc.area?{max:item,area:area}:acc},{area:0}).max,getMaxSizeFromString=sizes=>getMaxSize((sizes=>sizes.split("|").map(sizeStr=>sizeStr.split("x").map(d=>Number(d))))(sizes)),MockMPU=props=>{const styles={},{cleanAmp:cleanAmp}=props.res.locals;let max,mpuSizeConfig;const id="mock_mpu_"+mockMPUID;return mockMPUID+=1,props.sizes?(max=getMaxSizeFromString(props.sizes),styles.width=max[0]+"px",styles.height=max[1]+"px"):props["size-key"]?mpuSizeConfig=ads.b[props["size-key"]]:(styles.width="300px",styles.height="250px"),Object(jsx_runtime.jsxs)(Wrapper,{className:props.className,children:[!cleanAmp&&props["size-key"]&&Object(jsx_runtime.jsx)("style",{children:mpuSizeConfig.map(breakPoint=>`\n@media (min-width: ${breakPoint.from}px) {\n  #${id} {\n${(breakPoint=>`\n${breakPoint.supportedSizes.length?"display: flex;":"display: none;"}\n${breakPoint.supportedSizes.length?(([width,height])=>`width: ${width}px; height: ${height}px;`)(getMaxSize(breakPoint.supportedSizes)):""}`)(breakPoint)}\n  }\n}\n`).join("")}),Object(jsx_runtime.jsxs)("div",{style:styles,id:id,children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:props.id})}),props.sizes&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:props.sizes.replace(max.join("x"),`<strong>${max.join("x")}</strong>`)}}),props["size-key"]&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("p",{children:props["size-key"]}),mpuSizeConfig.map(breakPoint=>Object(jsx_runtime.jsxs)("p",{children:[breakPoint.from,"+: ",!breakPoint.supportedSizes.length&&"n/a",breakPoint.supportedSizes.map(size=>size.join("x")).join("|")]},breakPoint.from))]})]})]})};MockMPU.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,sizes:prop_types_default.a.string,"size-key":prop_types_default.a.string,res:prop_types_default.a.object.isRequired},MPUModule.default=MockMPU;__webpack_require__(2086);var mockWithRequest=__webpack_require__(74),mergeDeepRight=__webpack_require__(696),Styles=__webpack_require__(3);const WithTheme=({domain:domain,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsxs)(styled_components_browser_esm.ThemeProvider,{theme:{...Object(mergeDeepRight.a)(Styles.e.default,Styles.e[domain]||{}),domain:domain},children:[Object(jsx_runtime.jsx)(Styles.a,{cleanAmp:cleanAmp}),Object(react.cloneElement)(children)]});WithTheme.propTypes={children:prop_types_default.a.element.isRequired,domain:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool},WithTheme.__docgenInfo={description:"",methods:[],displayName:"WithTheme",props:{children:{type:{name:"element"},required:!0,description:""},domain:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var components_WithTheme=WithTheme;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/WithTheme.js"]={name:"WithTheme",docgenInfo:WithTheme.__docgenInfo,path:"stories/helpers/components/WithTheme.js"});class Mocker_Mocker extends react.Component{constructor(props){super(props),this.setOverrides(props);const{domain:domain}=Object(mockWithRequest.e)(props.configurationOverrides);Object(mockWithRequest.f)(props.localsOverrides);const sheet=new styled_components_browser_esm.ServerStyleSheet;Object(server_browser.renderToString)(sheet.collectStyles(Object(jsx_runtime.jsx)(components_WithTheme,{domain:domain,cleanAmp:props.localsOverrides.cleanAmp,children:Object(react.cloneElement)(this.props.children)}))),this.css=sheet.instance.toString(),sheet.seal(),this.domain=domain}setOverrides(){}render(){return Object(jsx_runtime.jsxs)(es.a,{initialize:{languages:[{name:"English",code:"en"}],translation:{mostPopular:["Most Popular","alo"]},options:{defaultLanguage:"en",renderToStaticMarkup:server_browser.renderToStaticMarkup}},children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:this.css}}),Object(jsx_runtime.jsx)(components_WithTheme,{domain:this.domain,children:Object(react.cloneElement)(this.props.children)})]})}}Mocker_Mocker.propTypes={children:prop_types_default.a.element.isRequired,configurationOverrides:prop_types_default.a.object,localsOverrides:prop_types_default.a.object},Mocker_Mocker.defaultProps={configurationOverrides:{},localsOverrides:{}},Mocker_Mocker.__docgenInfo={description:"",methods:[{name:"setOverrides",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Mocker",props:{configurationOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},localsOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};__webpack_exports__.a=Mocker_Mocker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/Mocker.js"]={name:"Mocker",docgenInfo:Mocker_Mocker.__docgenInfo,path:"stories/helpers/components/Mocker.js"})},896:function(module){module.exports=JSON.parse('{"dirty-amp.js":"/_build/dirty-amp.32f27d89d94130c52b53.js","dirty-amp.js.map":"/_build/dirty-amp.32f27d89d94130c52b53.js.map","preview.js":"/_build/preview.79fa93dedd5debf7dbf1.js","preview.js.map":"/_build/preview.79fa93dedd5debf7dbf1.js.map","profile.js":"/_build/profile.d41d8cd98f00b204e980.js","profile.js.map":"/_build/profile.d41d8cd98f00b204e980.js.map","register.js":"/_build/register.359999e56a7029505852.js","register.js.map":"/_build/register.359999e56a7029505852.js.map","sar.js":"/_build/sar.3b7e38d55bbf65d0df49.js","sar.js.map":"/_build/sar.3b7e38d55bbf65d0df49.js.map","settings.js":"/_build/settings.ca49e00963cdd8ae81f1.js","settings.js.map":"/_build/settings.ca49e00963cdd8ae81f1.js.map","thankyou.js":"/_build/thankyou.5844e1adf8790b06e066.js","thankyou.js.map":"/_build/thankyou.5844e1adf8790b06e066.js.map","sw.js":"/_build/sw.js","sw.js.map":"/_build/sw.js.map"}')},91:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return TOP_BANNER})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WALLPAPER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return NATIVE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TABOOLA})),__webpack_require__.d(__webpack_exports__,"e",(function(){return adConfiguration})),__webpack_require__.d(__webpack_exports__,"f",(function(){return adConfigurationByType}));const TOP_BANNER="TopBanner",WALLPAPER="WallPaper",NATIVE="Native",TABOOLA="Taboola",adConfiguration=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.some(({type:type,value:value})=>type===needle&&!0===value),adConfigurationByType=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.find(({type:type})=>type===needle)||{}},922:function(module,exports,__webpack_require__){__webpack_require__(923),__webpack_require__(1274),__webpack_require__(1275),__webpack_require__(1472),__webpack_require__(1484),__webpack_require__(1486),__webpack_require__(1491),module.exports=__webpack_require__(2072)},945:function(module,exports){}},[[922,1,2]]]);
//# sourceMappingURL=main.8b9415dcc0360de69076.bundle.js.map