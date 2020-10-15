(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42);const getHero=(type,title)=>({video:[{type:"jw_player",data:{id:"gzjttWAQ",bundle:"jw_player_id",mid:41424,changed:"1593649785"}},{type:"image",data:{title:"coronavirus.jpg",description:null,caption:"Video caption",copyright:"EPA",credit:"EPA",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8499441",bundle:"remote_image",mid:41422,changed:"1593649785",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],image:[{type:"image",data:{title:"hero.jpg",description:null,caption:"Hero caption",copyright:"AFP",credit:"AFP",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8420361",bundle:"remote_image",mid:25231,changed:"1589940955",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}[type]);__webpack_exports__.a=({title:title,heroType:heroType="image",live:live=!1,articleType:articleType="Liveblog"})=>({type:"article",id:"2233",status:!0,title:"Image "+title,titleShort:`Image ${title} - short`,titleSocial:`Image ${title} - social`,titleSEO:null,lead:"<p>The leader</p>",path:"/",articleTypes:[{name:articleType,path:"/article-type/liveblog",id:"16733"}],hierarchy:[{name:"hierarchy 1",path:"/",id:"869"},{name:"hierarchy 2",path:"/news/world",id:"954"},{name:"hierarchy 3",path:"/news/world/middle-east",id:"965"}],workflow:"Draft",sections:[{name:"section 1",path:"/",id:"869"},{name:"section 2",path:"/",id:"954"},{name:"section 3",path:"/",id:"965"}],hero:getHero(heroType,title),photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:[{name:"Author Name",id:null,email:null,firstName:null,lastName:null,imageUrl:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(title+"-author")}],updated:1593764687,changed:1593764680,publish:1589885019,unPublish:1909232586,isLiveBlog:live})},101:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return heroType})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getHeroType})),__webpack_require__.d(__webpack_exports__,"a",(function(){return findDateBasedOnPreference})),__webpack_require__.d(__webpack_exports__,"d",(function(){return internalLinkCount}));var _constants_heroType__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65);const heroType=hero=>{const priorityList=[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.c,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.f];if(!hero)return[];return{...hero.filter(e=>priorityList.includes(e.type)).sort((a,b)=>priorityList.indexOf(a.type)-priorityList.indexOf(b.type))[0]||hero[0],isHero:!0}},getHeroType=hero=>{const articleType=hero?heroType(hero).type:_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d;return[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b].includes(articleType)?"video":articleType},findDateBasedOnPreference=({extra:extra,overrideDate:overrideDate,firstPublished:firstPublished,updated:updated})=>{switch(extra.displayDatePreference){case"publishedDate":return firstPublished;case"lastUpdatedDate":return updated;case"vanityDate":return overrideDate;default:return overrideDate||updated||firstPublished}},linkCount=(body,domain,urlMatcher)=>{let counter=0;return body.filter(x=>"markup"===x.type).map(x=>{var _x$data;return null===(_x$data=x.data)||void 0===_x$data?void 0:_x$data.markup}).filter(Boolean).forEach(markup=>{const matches=markup.match(/href="(.*?)"/g);if(matches){const links=null==matches?void 0:matches.map(x=>x.slice(6,-1)).filter(urlMatcher);counter+=links.length}}),counter},internalLinkCount=(body,domain)=>linkCount(body,0,url=>url.match(new RegExp("^\\/\\w|^\\/\\/"+domain)))},115:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return TaboolaDiv})),__webpack_require__.d(__webpack_exports__,"a",(function(){return TaboolaAmp}));var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),config_config=__webpack_require__(164),classes=__webpack_require__(160),collection=__webpack_require__(66),helpers=__webpack_require__(165);const layoutProps={height:collection.b,width:collection.j,layout:collection.d,sizes:collection.i,heights:collection.c,media:collection.e,placeholder:collection.h,fallback:collection.a,noloading:collection.f,"disable-inline-width":helpers.a};const AmpEmbed=props=>{const{heights:heights,consentNotificationId:consentNotificationId,loadingStrategy:loadingStrategy,adContainerId:adContainerId,...others}=props;return Object(jsx_runtime.jsx)("amp-embed",{heights:(null==heights?void 0:heights.join(","))||"","data-consent-notification-id":consentNotificationId,"data-loading-strategy":loadingStrategy,"data-ad-container-id":adContainerId,"data-block-on-consent":"_till_responded",...others})};AmpEmbed.propTypes={...layoutProps,id:prop_types_default.a.string,className:prop_types_default.a.string,type:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,consentNotificationId:prop_types_default.a.string,loadingStrategy:prop_types_default.a.number,adContainerId:prop_types_default.a.string};var Embed=AmpEmbed;const DivRoot=props=>{const{id:id,className:className}=props;return Object(jsx_runtime.jsx)("div",{...props,id:id,className:Object(classes.a)(className,"taboola")})};DivRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string};const TaboolaDiv=DivRoot,AmpRoot=props=>{var _config$taboola;const{id:id,height:height,heights:heights,width:width,mode:mode,placement:placement,res:{locals:{domain:domain}}}=props,config=config_config.a.getPublications()[domain],publisher=null==config||null===(_config$taboola=config.taboola)||void 0===_config$taboola?void 0:_config$taboola.publisherId;return publisher?Object(jsx_runtime.jsx)(Embed,{id:id,type:"taboola",layout:"responsive",height:height,heights:heights,width:width,"data-publisher":publisher,"data-mode":mode,"data-placement":placement,"data-target_type":"mix","data-article":"auto"}):null};AmpRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,domain:prop_types_default.a.string.isRequired,height:prop_types_default.a.number,heights:prop_types_default.a.array,width:prop_types_default.a.number,mode:prop_types_default.a.string.isRequired,placement:prop_types_default.a.string.isRequired,res:prop_types_default.a.object.isRequired};const TaboolaAmp=Object(RequestProvider.withRequest)(AmpRoot),Taboola=props=>{const{res:{locals:{cleanAmp:cleanAmp}}}=props;return cleanAmp?Object(jsx_runtime.jsx)(TaboolaAmp,{...props}):Object(jsx_runtime.jsx)(TaboolaDiv,{...props})};Taboola.propTypes={res:prop_types_default.a.object.isRequired};__webpack_exports__.c=Object(RequestProvider.withRequest)(Taboola)},127:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PUBLICATION_UK}));const PUBLICATION_UK="standard.co.uk"},1278:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(254)},142:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83);class MockStaticPageData extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.b)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockStaticPageData.propTypes={reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockStaticPageData.defaultProps={reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockStaticPageData},1494:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(150),_clientLogger=__webpack_require__(85),_configFilename=__webpack_require__(1495);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1495:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(254),storybook_amp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(891);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_amp__WEBPACK_IMPORTED_MODULE_1__.withAmpDecorator),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({actions:{argTypesRegex:"^on[A-Z].*"},amp:{isEnabled:!0,styles:""},layout:"fullscreen"})},159:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const AmpAd=({width:width,height:height,type:type,src:src,dataSlot:dataSlot,json:json,config:config,ampRefresh:ampRefresh,ampSizes:ampSizes,ampSizeValidation:ampSizeValidation,...props})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-ad",{width:width,height:height,type:type,src:src,"data-multi-size":ampSizes,"data-slot":dataSlot,json:json?JSON.stringify(json):null,"rtc-config":config?JSON.stringify(config):null,"data-enable-refresh":ampRefresh,"data-multi-size-validation":ampSizeValidation,"data-block-on-consent":"_till_responded",...props});AmpAd.propTypes={width:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,height:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,dataSlot:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,json:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,config:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,ampRefresh:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,ampSizes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,ampSizeValidation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool},AmpAd.__docgenInfo={description:"",methods:[],displayName:"AmpAd",props:{width:{type:{name:"number"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""},dataSlot:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampSizeValidation:{type:{name:"bool"},required:!1,description:""}}},__webpack_exports__.a=AmpAd,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Ad.js"]={name:"AmpAd",docgenInfo:AmpAd.__docgenInfo,path:"app/component/library/AMP/Ad.js"})},160:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getClassName}));const getClassName=(...classNames)=>classNames.filter(name=>"object"==typeof name&&null!==name?Object.entries(name).filter(([,value])=>!!value).map(([key])=>key).join(" "):!!name).join(" ")},162:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
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
`,Submit=({className:className,children:children})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlobalStyle,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubmitButton,{className:"form-submit",name:"submitBtn",type:"submit",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-loader"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubmitButton,{className:"disabled-submit",disabled:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"})})]});Submit.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(Submit)``},163:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),crypto_browserify=__webpack_require__(910),crypto_browserify_default=__webpack_require__.n(crypto_browserify),bundle_min=__webpack_require__(911),bundle_min_default=__webpack_require__.n(bundle_min),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),Common=__webpack_require__(337);const AmpScript=({children:children,...props})=>Object(jsx_runtime.jsx)("amp-script",{...props,children:children});AmpScript.propTypes={...Common.a,src:prop_types_default.a.string,script:prop_types_default.a.string,sandbox:prop_types_default.a.oneOf(["allow-forms"]),"max-age":prop_types_default.a.string},AmpScript.__docgenInfo={description:"",methods:[],displayName:"AmpScript",props:{src:{type:{name:"string"},required:!1,description:""},script:{type:{name:"string"},required:!1,description:""},sandbox:{type:{name:"enum",value:[{value:"'allow-forms'",computed:!1}]},required:!1,description:""},"max-age":{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Script=AmpScript;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Script.js"]={name:"AmpScript",docgenInfo:AmpScript.__docgenInfo,path:"app/component/library/AMP/Script.js"});let buildAllHash=(()=>{let hashes=[];return hash=>(hashes.includes(hash)||hashes.push(hash),hashes.join(" "))})();__webpack_exports__.a=(WrappedComponent,scriptProps)=>(snippet,...exprs)=>Object(RequestProvider.withRequest)(props=>{const script=exprs.reduce((result,expr,index)=>result+("function"==typeof expr?expr(props):expr)+snippet[index+1],snippet[0]),prefix=(null==scriptProps?void 0:scriptProps.script)?scriptProps.script+"-":"script-",minified=bundle_min_default.a.minify(script),hash=(script=>"sha384-"+crypto_browserify_default.a.createHash("sha384").update(script,"utf-8").digest("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"))(minified.code),allHash=buildAllHash(hash),[id]=Object(react.useState)(`${prefix}${hash.slice(-6)}`);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Script,{...scriptProps,script:id,children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}),Object(jsx_runtime.jsx)("script",{type:"text/plain",target:"amp-script",id:id,dangerouslySetInnerHTML:{__html:minified.code}}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{name:"amp-script-src",content:allHash}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-script",src:"https://cdn.ampproject.org/v0/amp-script-0.1.js"})]})]})})},164:function(module,__webpack_exports__,__webpack_require__){"use strict";var ConfigManager=__webpack_require__(898),ConfigManager_default=__webpack_require__.n(ConfigManager),manifest=__webpack_require__(899),menu=__webpack_require__(185),publication=__webpack_require__(127),newslettersConfig=__webpack_require__(328);const publicationConfig={[publication.a]:{projectId:"5d79bce7-5d2b-427e-a6c4-b89b6c7bf048",apiKey:"ed467bcf-98ee-4ed9-894e-c49be4ab97e7",namespace:"esi"}};const configManager=new ConfigManager_default.a({adobe:{reportSuiteId:"indepes"},adYouLike:{placement:"e05810a932723951bec2eb55202fd0cc",campaign:"fa3c00f1a0a5815c3ce09b75e7a28e2b"},apester:{token:"5afeb141e48334000111c6ac",alternateToken:"5bbe30dfc3ecd7c158342081"},articleThemes:{insider:["/insider"]},brightcove:{account:"624246174001",player:"BJXA5Px6f"},chartbeat:{uid:"62356"},comscore:{clientId:"10476312"},criteo:{lineItemRanges:"0..4.99:0.01;5..9.95:0.05;10..49.5:0.5;50..100:1",networkId:1680},cse:{id:"001589649871138454759:x1pxwcegkc8"},facebookAppId:"235586169789578",feeds:{mmm:{src:"/api/most-popular-article?section=news&limit=5",items:"articles"},videos:{src:"/api/most-popular-article?section=mediatype_video&limit=3",items:"articles"},chartbeat:{src:"https://www.standard.co.uk/pwamp/layout_component/chartbeat-top?feed=insider",items:"."}},ga:{id:"UA-28120322-1"},gtm:{containerId:"GTM-K26356Q"},indexExchange:{siteId:"197231",scriptUrl:"//js-sec.indexww.com/ht/p/184658-111437137524152.js"},logoUrl:"/img/logo.png",manifest:manifest,jwplayerPlayerIds:{default:{defaultPlayer:"Ad1SlkR8",noAdsPlayer:"xaXhfSI0",sensitivePlayer:"hKY5LbS1",inlinePlayer:"uuyz2YmO",commercialPlayer:"xaXhfSI0"},amp:{defaultPlayer:"DJ4UFK81",noAdsPlayer:"imXF4cgx",sensitivePlayer:"yv0FGKVC",inlinePlayer:"BcAN9VUM",commercialPlayer:"imXF4cgx"}},jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},sectionThemes:{insider:["/insider"]},social:{facebook:"https://www.facebook.com/eveningstandard",twitter:"https://twitter.com/standardnews"},subdomain:{static:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).ES_SUBDOMAIN_STATIC},taboola:{accountIds:{base:1036135},publisherId:"eslmedia-theindependent",ampBelowArticleMode:"thumbnails-e1"},permutive:(publication=>publicationConfig[publication]?publicationConfig[publication]:(console.error("No permutive config found for "+publication),{}))(publication.a),menuIds:{[menu.d]:2,[menu.e]:1,[menu.c]:3,[menu.a]:15},googleCaptchaV3Key:"6LdjO88ZAAAAANrVlvQVuU-88Hv9ly51pUhtcm__",googleCaptchaV3Secret:"6LdjO88ZAAAAAHQ93NC_nB3a268-HkyCh5VVcG41",cmp:{enabled:"true"===Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).CMP_ENABLED},gigya:{api_key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_KEY,datacenter:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_DATACENTER,api_secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_SECRET},sailthru:{key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_KEY,secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_SECRET},pressReader:{secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_SECRET,domain:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_DOMAIN},newslettersConfig:newslettersConfig.a[publication.a],fastly:{token:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_TOKEN,serviceId:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_ID},trackonomics:{customerId:"esimedia_t58ukgmjkf95_eveningstandard"}}),sidebarSlot=[1,2,5],articleSlots=size=>Array.apply(null,{length:size}).map(Number.call,Number).map(n=>n+1);configManager.addPublication(publication.a,{atexEnabled:!0,chartbeatApiKey:"cf0b9565bddfde442d7b02a5ffd7d419",description:"Latest London news, business, sport, showbiz and entertainment from the London Evening Standard."}),configManager.addAdConfig({ampAd:{type:"doubleclick","data-slot":"/8057/","data-multi-size-validation":"false","rtc-config":'{ "vendors": { "lotame": { "CLIENT_ID": "4810", "AD_NETWORK": "DC" } } }',json:'{"targeting":{"pos":[], "test": true }}'},sidebarSlot:sidebarSlot,articleSlot:articleSlots(10).filter(n=>!sidebarSlot.includes(n)),cleanAmpArticleSlot:articleSlots(10)});__webpack_exports__.a=configManager},165:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isEmptyStringOnly})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isResponsiveRequired}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const isEmptyStringOnly=function(props,propName){if(""!==props[propName]&&void 0!==props[propName])return new Error(`Only empty string is allowed for ${propName} attribute`)},isResponsiveRequired=function(props){if("responsive"!==props.layout)return new Error("Required responsive layout");prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array(...arguments)}},185:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return FOOTER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ES_BEST})),__webpack_require__.d(__webpack_exports__,"d",(function(){return FULL_NAV})),__webpack_require__.d(__webpack_exports__,"e",(function(){return NAV_BAR})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ES_BEST_ID}));const FOOTER="footer",ES_BEST="es_best",FULL_NAV="full_nav",NAV_BAR="nav_bar",ES_BEST_ID="15"},186:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(348);const Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
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
`,Select=({fieldName:fieldName,fieldId:fieldId,options:options,displayName:displayName="",helperText:helperText="",fieldRequired:fieldRequired=!1,validationMsg:validationMsg="",defaultValue:defaultValue="",inlineFlexGrow:inlineFlexGrow=""})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{inlineFlexGrow:inlineFlexGrow,className:inlineFlexGrow?"inline":"",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{name:fieldName,id:fieldId,required:fieldRequired,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-select",{valid:defaultValue}),defaultValue:defaultValue,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"",disabled:!0}),options]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{dangerouslySetInnerHTML:{__html:_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__.a}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:fieldId,children:displayName}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mdc-line-ripple"}),validationMsg&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:validationMsg}),helperText&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"help-text",children:helperText})]});Select.propTypes={fieldName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,fieldId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,displayName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,helperText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fieldRequired:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,validationMsg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,inlineFlexGrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Select)``},2075:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(254).configure)([__webpack_require__(2076)],module,!1)}).call(this,__webpack_require__(80)(module))},2076:function(module,exports,__webpack_require__){var map={"./Article/AMP/Page.stories.js":2077,"./Article/ArticlePage.stories.js":2223,"./Article/GalleryArticle.stories.js":2204,"./Article/ProductReviewArticle.stories.js":2205,"./Article/VideoArticle.stories.js":2206,"./Other/Components/Byline.stories.js":2207,"./Other/Components/LoginModal.stories.js":2208,"./Section/SectionPage.stories.js":2219,"./StaticPages/Profile.stories.js":2221};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2076},2077:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AMPArticlePageStory",(function(){return AMPArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPGalleryArticlePageStory",(function(){return AMPGalleryArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPVideoArticlePageStory",(function(){return AMPVideoArticlePageStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(353),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(352);const ArticlePage=__webpack_require__(252).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a),MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/AMP/Page",component:ArticlePage};const AMPArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPArticlePageStory.storyName="Full article page",AMPArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPGalleryArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Gallery Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPGalleryArticlePageStory.storyName="Full gallery article page",AMPGalleryArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPVideoArticlePageStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Video Article!!!"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPVideoArticlePageStory.storyName="Full video article page",AMPVideoArticlePageStory.parameters={amp:{isEnabled:!0}},AMPArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPArticlePageStory",docgenInfo:AMPArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPGalleryArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPGalleryArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPGalleryArticlePageStory",docgenInfo:AMPGalleryArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPVideoArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPVideoArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPVideoArticlePageStory",docgenInfo:AMPVideoArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"})},2089:function(module,exports,__webpack_require__){const ampTemplateModule=__webpack_require__(646),templateHTML=ampTemplateModule.default({styles:"",title:"ES Storybook"});ampTemplateModule.default=()=>({replace:(storyCodeMarker,content)=>templateHTML.replace("</head>",'\n<script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"><\/script>\n<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>\n<script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"><\/script>\n\n<script>\n// fix time to 01/07/2020\nDate = class extends Date {\n  constructor(options) {\n    super(options ?? 1593558000000);\n  }\n};\n<\/script>\n<style type="text/css">\n[id^="jwplayer"] {\n  background: hotpink;\n  position: relative;\n}\n\n[id^="jwplayer"]:before {\n  content: "VIDEO PLAYER";\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 15px);\n  left: 0;\n  color: white;\n}\n\n.show-in-storybook {\n  display: flex !important; /* Override [amp-access][amp-access-hide] */\n}\n</style></head>').replace('<script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>',"").replace(storyCodeMarker,content).replace(/<excessremovablewrapper>/g,"").replace(/<\/excessremovablewrapper>/g,"")})},2095:function(module,exports){},2097:function(module,exports){},2109:function(module,exports){},2111:function(module,exports){},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const Embed=__webpack_require__(2).default.div`
  display: flex;
  clear: both;
  width: 100%;
  max-width: 100%;
  > * {
    margin: auto;
  }
`,HTMLEmbed=({data:{markup:markup}})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Embed,{dangerouslySetInnerHTML:{__html:markup}});HTMLEmbed.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired},HTMLEmbed.__docgenInfo={description:"",methods:[],displayName:"HTMLEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}},__webpack_exports__.a=HTMLEmbed,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/HTML.js"]={name:"HTMLEmbed",docgenInfo:HTMLEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/HTML.js"})},213:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8);__webpack_exports__.a=WrappedComponent=>({...props})=>Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(({res:{locals:{cleanAmp:cleanAmp}}})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent,{cleanAmp:cleanAmp,...props})))},2136:function(module,exports){},2138:function(module,exports){},2139:function(module,exports){},214:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment),services_article=__webpack_require__(101);const getDataByType=(req,res)=>{const{cleanAmp:cleanAmp,configuration:{domain:domain}}=res.locals;let data={};if(res.locals.article){var _article$authors,_article$topics;const article=res.locals.article,{path:path,publish:publish}=article,channels=path.slice(1).split("/").slice(0,-1),utc=moment_default.a.unix(publish).utc(),publishedTime=utc.format("hh:mm:ss"),publishedDate=utc.format("dddd, D MMMM YYYY");data={page_type:"liveblog"===(null==article?void 0:article.type)?"Live Blog Article":"Article",site_sections:channels.join(":"),is_amp_page:cleanAmp,article_premium_status:(null==article?void 0:article.premium)?"premium":"free",article_id:(null==article?void 0:article.remoteId)||(null==article?void 0:article.id),article_title:null==article?void 0:article.title,article_author:null==article||null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(x=>x.name).join(","),article_category:"",article_publication_time:publishedTime,published_date:publishedDate,first_published_date:publishedDate,homepage_section:"",article_page_filename:path.split("/").slice(-1)[0],lead_media_item:Object(services_article.b)(article.hero),article_topic_tags:null==article||null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(x=>x.name).join(","),word_count:null==article?void 0:article.wordCount,internal_links_count:article.body?Object(services_article.d)(article.body,domain):0}}if(res.locals.section){const feed=res.locals.section,{path:path}=feed.section,channels=path.slice(1).split("/");data={page_type:"/"===path?"frontpage":path.startsWith("/topic/")?"Topic":path.startsWith("/author/")?"Author":"Channel frontpage",site_sections:channels.join(":"),is_topic_page:cleanAmp}}return data},getAmpState=(req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!0,...getDataByType(0,res)}};var Styles=__webpack_require__(3),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
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
`,ModalHeader=({heading:heading,backFn:backFn})=>Object(jsx_runtime.jsxs)("div",{className:"modal-header",children:[backFn&&Object(jsx_runtime.jsx)(BackButton,{on:backFn,role:"button"}),Object(jsx_runtime.jsx)("span",{children:heading}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]});ModalHeader.propTypes={heading:prop_types_default.a.string.isRequired,backFn:prop_types_default.a.string};const AmpConsent=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-consent",src:"https://cdn.ampproject.org/v0/amp-consent-0.1.js"}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-geo",src:"https://cdn.ampproject.org/v0/amp-geo-0.1.js"})]}),Object(jsx_runtime.jsx)("amp-geo",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({ISOCountryGroups:{eea:["preset-eea"]}})}})}),Object(jsx_runtime.jsxs)("amp-consent",{layout:"nodisplay",id:"consent-element",children:[Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({consentInstanceId:"my-consent",promptUI:"consent-ui",consentRequired:!1,geoOverride:{eea:{consentRequired:!0}}})}}),Object(jsx_runtime.jsxs)(Wrapper,{id:"consent-ui",children:[Object(jsx_runtime.jsxs)(Modal,{id:"acceptScreen",children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Our use of cookies"}),Object(jsx_runtime.jsxs)("p",{children:["We and our partners use cookies and other technologies to help us understand how readers use our website, and to deliver relevant content and advertising. Click “Accept” to consent to the use of this technology and the processing of your personal data for these purposes. More information is available in our"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"cookie notice"}),". If you do not agree, click to manage your options."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:manageScreen.show,acceptScreen.hide",role:"button",className:"secondary",children:"Manage"})]}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]}),Object(jsx_runtime.jsxs)(Modal,{id:"manageScreen",hidden:!0,children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Options",backFn:"tap:manageScreen.hide,acceptScreen.show"}),Object(jsx_runtime.jsxs)("p",{children:["Choosing to accept cookies from our advertising partner Google will allow you to receive personalised advertising. If you choose to decline, the advertising made available throughout the site will not be tailored to you. For more information, please read our cookie notice"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.reject",role:"button",className:"secondary",children:"Decline"})]})]})]})]})]}):null;AmpConsent.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AmpConsent.__docgenInfo={description:"",methods:[],displayName:"AmpConsent",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var AMP_AmpConsent=Object(RequestProvider.withRequest)(AmpConsent);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/AmpConsent.js"]={name:"AmpConsent",docgenInfo:AmpConsent.__docgenInfo,path:"app/component/library/AMP/AmpConsent.js"});const AmpAnalytics=({type:type,configJson:configJson,...others})=>Object(jsx_runtime.jsx)("amp-analytics",{type:type,...others,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(configJson)}})});AmpAnalytics.propTypes={type:prop_types_default.a.string.isRequired,configJson:prop_types_default.a.object.isRequired},AmpAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpAnalytics",props:{type:{type:{name:"string"},required:!0,description:""},configJson:{type:{name:"object"},required:!0,description:""}}};var Analytics=AmpAnalytics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics.js"]={name:"AmpAnalytics",docgenInfo:AmpAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics.js"});const AmpComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"comscore",configJson:{vars:{c2:configuration.comscore.clientId},extraUrlParams:{comscorekw:"amp"}}}):null)};AmpComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Comscore=Object(RequestProvider.withRequest)(AmpComscoreAnalytics),State=__webpack_require__(338);const AmpAuth=({article:article,section:section,configuration:configuration})=>{const regSourceSection=article&&article.sections&&article.sections[0].name||section&&section.section&&section.section.name||"News",regSourceMethod=encodeURIComponent((article?"Article":"Section")+"+Signpost"),newsletterKey=((article,section,config)=>{if(!config)return;let key="receiveHeadlinesNews";if(section&&section.components){const comp=section.components.find(comp=>"NewsLetterSignup"===comp.type);comp&&(key=comp.newsletterTarget)}if(article&&article.sections){const articleSections=[...article.sections].reverse();key=Object.keys(config).find(newsletter=>articleSections.find(section=>config[newsletter].section===section.name))}return key})(article,section,configuration.newslettersConfig),json={authorization:"/internal-api/login-authorization.json?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",noPingback:"true",login:{"sign-in":"/login?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL","register-newsletter":`/register?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL&regSourceSection=${regSourceSection}&regSourceMethod=${regSourceMethod}${newsletterKey&&"&newsletter="+newsletterKey}`},authorizationFallbackResponse:{error:"true",fullName:"",loggedIn:!1,nickname:!1,subscriber:!1}};return Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{id:"amp-access",type:"application/json",children:JSON.stringify(json)})})};AmpAuth.propTypes={article:prop_types_default.a.object,section:prop_types_default.a.object,configuration:prop_types_default.a.object},AmpAuth.__docgenInfo={description:"",methods:[],displayName:"AmpAuth",props:{article:{type:{name:"object"},required:!1,description:""},section:{type:{name:"object"},required:!1,description:""},configuration:{type:{name:"object"},required:!1,description:""}}};var library_AmpAuth=Object(RequestProvider.withRequest)(AmpAuth);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AmpAuth.js"]={name:"AmpAuth",docgenInfo:AmpAuth.__docgenInfo,path:"app/component/library/AmpAuth.js"});const functionString=(()=>{const referrer=document.referrer?new URL(document.referrer):"",getCookie=function(name,defaultValue=!1){const match=document.cookie.match(new RegExp("(^|;|\\s+)"+name+"=(.*?)[;|$]"));return match?decodeURIComponent(match[2]):defaultValue},d=new Date,YYYY=new Intl.DateTimeFormat("en",{year:"numeric",timezone:"UTC"}).format(d),MM=new Intl.DateTimeFormat("en",{month:"2-digit",timezone:"UTC"}).format(d),DD=new Intl.DateTimeFormat("en",{day:"2-digit",timezone:"UTC"}).format(d),hh=new Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1,timezone:"UTC"}).format(d),mm=new Intl.DateTimeFormat("en",{minute:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0"),ss=new Intl.DateTimeFormat("en",{second:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0");var name;Object.assign(window.digitalData,{page_title:document.title,page_query:document.location.search,page_name:document.location.pathname,page_previous_url:referrer&&referrer.protocol+"://"+referrer.host+referrer.pathname,page_previous_path:referrer&&referrer.pathname,page_previous_query:referrer&&referrer.search,timestamp:`${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,gigya_logged_in_status:(name="esi_auth",!1!==getCookie(name)?"logged in":"not logged in"),gigya_uid:getCookie("esi_guid"),gigya_registration_date:getCookie("esi_registration_date"),gigya_share_provider:"",gigya_demographics:getCookie("esi_demographics"),gigya_sign_on_provider:getCookie("esi_sign_on_provider"),gigya_user_status:getCookie("esi_user_status","anonymous")})}).toString().match(/{([\s|\S]+)}/m)[1],AdobeAnalytics=props=>{const{req:req,res:res,res:{locals:{cleanAmp:cleanAmp}}}=props,ampData=((req,res)=>{const{locals:{configuration:{domain:domain,subdomain:subdomain}}}=res;return{requests:{base:"//${host}",iframeMessage:"${base}/iframe/launch.html"},vars:{host:`${subdomain.static}.${domain}`},extraUrlParams:{page_url:"${canonicalUrl}",actual_url:"${sourceUrl}",page_domain:"${sourceHost}",page_path:"${sourcePath}",page_title:"${title}",page_query:"",page_name:"${sourcePath}",page_categories:"",page_type:"",page_previous_url:"${documentReferrer}",page_previous_path:"",page_previous_query:"",...getDataByType(0,res)}}})(0,res),webData=((req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!1,...getDataByType(0,res)}})(req,res),jsonString=JSON.stringify(webData);return cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics_nativeConfig",configJson:ampData}):Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{children:`digitalData = ${jsonString}; ${functionString}`})})};AdobeAnalytics.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AdobeAnalytics.__docgenInfo={description:"",methods:[],displayName:"AdobeAnalytics",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Adobe=Object(RequestProvider.withRequest)(AdobeAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Adobe.js"]={name:"AdobeAnalytics",docgenInfo:AdobeAnalytics.__docgenInfo,path:"app/component/library/Analytics/Adobe.js"});const getChartbeatVars=res=>{const{locals:{domain:domain,configuration:{chartbeat:chartbeat}}}=res,title=(({locals:{article:article}})=>null==article?void 0:article.title)(res),sections=(({locals:{article:article,section:section}})=>{var _section$section,_article$sections,_article$sections$;return[...(null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path.split("/").slice(1))||[],...[Object(services_article.b)(null==article?void 0:article.hero)].filter(x=>x).map(x=>"mediatype_"+x),(null==article?void 0:article.premium)?"article-typepremium":"article-typenon-premium",...(null==article||null===(_article$sections=article.sections)||void 0===_article$sections||null===(_article$sections$=_article$sections[0])||void 0===_article$sections$?void 0:_article$sections$.path.split("/").slice(1))||[],...((null==article?void 0:article.topics)||[]).map(({path:path})=>path.split("/").slice(1).join("-"))].join()})(res),authors=(({locals:{article:article}})=>article?(article.authors||[]).map(({name:name})=>name).join():"")(res);return{uid:(null==chartbeat?void 0:chartbeat.uid)||null,domain:domain,title:title,sections:sections,authors:authors}},ChartbeatAnalytics=({res:res,res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"chartbeat",configJson:{vars:{...getChartbeatVars(res)}}}):null;ChartbeatAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ChartbeatAnalytics.__docgenInfo={description:"",methods:[],displayName:"ChartbeatAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Chartbeat=Object(RequestProvider.withRequest)(ChartbeatAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Chartbeat.js"]={name:"ChartbeatAnalytics",docgenInfo:ChartbeatAnalytics.__docgenInfo,path:"app/component/library/Analytics/Chartbeat.js"});const ComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco,comsoreClientId;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:(comsoreClientId=configuration.comscore.clientId,`\nvar _comscore = _comscore || [];\n_comscore.push({ c1: "2", c2: ${comsoreClientId} });\n(function() {\n  var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;\n  s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/${comsoreClientId}/cs.js";\n  el.parentNode.insertBefore(s, el);\n})();`)}}))};ComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Analytics_Comscore=Object(RequestProvider.withRequest)(ComscoreAnalytics);const GoogleAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:{ga:{id:id}}}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"googleanalytics",id:"analytics2",configJson:{vars:{account:id},triggers:{defaultPageview:{on:"visible",request:"pageview"}}}}):null;GoogleAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},GoogleAnalytics.__docgenInfo={description:"",methods:[],displayName:"GoogleAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Google=Object(RequestProvider.withRequest)(GoogleAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Google.js"]={name:"GoogleAnalytics",docgenInfo:GoogleAnalytics.__docgenInfo,path:"app/component/library/Analytics/Google.js"});var icons_facebookIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 32"><path d="M18 12v6h-6v14H6V18H0v-6h6V9.5c0-1.2.2-2.5.6-3.8.4-1.3.9-2.4 1.6-3.2C9 1.6 9.8 1 10.7.6c.9-.4 2-.6 3-.6H18v6h-4.2c-.5 0-.9.2-1.3.5-.3.4-.5.8-.5 1.3V12h6z"></path></svg>\n';var icons_stampES='<svg class="stamp-es" viewBox="0 0 1024 1040" xmlns="http://www.w3.org/2000/svg"><g transform="translate(26 242)" fill="none" fill-rule="evenodd"><path d="M555.56 291.73c-41.638-29.923-75.96-71.52-75.96-126.98C479.6 69.129 564.324.53 687.02.53c53.33 0 103.73 12.408 137.31 24.805l-3.633 123.34h-14.62c-37.241-81.002-62.809-124.79-118.32-124.79-42.362 0-73.767 28.465-73.767 73.712 0 30.647 20.447 56.196 49.667 77.362l78.144 57.654c59.891 43.789 97.141 77.372 97.141 137.94 0 105.84-102.25 167.87-206.69 167.87-65.737 0-127.1-18.973-157.04-35.765l-5.846-139.4h14.61c45.29 97.069 84 151.81 145.36 151.81 40.893 0 73.022-25.539 73.022-73.712 0-37.223-28.476-63.496-65.727-90.503l-81.072-59.122zM60.028 80.608c0-30.667-11.682-56.196-59.891-59.856V8.354h413.41v134.29h-13.886c-46.005-75.914-61.36-112.4-109.55-112.4h-78.163v229.9h32.139c52.586 0 68.665-22.633 94.958-86.129h11.682v192.68h-11.682c-26.293-63.486-42.372-86.12-94.958-86.12h-32.139v188.3c0 26.283 9.499 40.149 48.933 40.149h21.925c75.95 0 97.866-50.364 146.8-133.56h13.151l-14.61 155.45H.137v-12.398c48.208-3.65 59.891-29.199 59.891-59.856V80.61z" fill="#000"/><circle cx="902.5" cy="482.5" r="57.5" fill="#C51A32"/></g></svg>';var icons_twitterIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29.2"><path d="M31.8 4.6c.7-.1 1.4-.3 2.1-.5s1.4-.4 2.1-.8c-.5.7-1 1.4-1.6 2-.6.6-1.3 1.2-2.1 1.8V8c0 1.7-.2 3.4-.6 5-.4 1.6-1 3.2-1.8 4.8-.8 1.6-1.7 3-3 4.3-1.2 1.3-2.7 2.5-4.3 3.6-1.6 1.1-3.4 1.9-5.3 2.5-1.9.5-3.9.8-6.1.8-2.1 0-4.1-.3-6-.8-1.7-.4-3.5-1.2-5.2-2.3.2 0 .4.1.7.1h1.1c1.8 0 3.4-.3 4.9-.8 1.5-.5 2.9-1.3 4.3-2.4-.8 0-1.6-.1-2.3-.4-.7-.3-1.4-.6-2-1.1-.6-.5-1.2-1-1.6-1.6-.4-.6-.8-1.3-1-2.1.1.1.3.1.5.1h.8c.3 0 .7 0 1-.1s.6-.1 1-.2c-.9-.2-1.7-.5-2.4-.9s-1.3-1-1.9-1.6c-.6-.7-1-1.4-1.2-2.2-.3-.8-.4-1.6-.4-2.6.5.3 1 .5 1.5.6.5.2 1.1.3 1.8.3-1.1-.8-1.9-1.6-2.5-2.7-.5-.8-.8-2-.8-3.3 0-.6.1-1.2.3-1.9.2-.6.4-1.2.8-1.8 1 1.2 2.1 2.3 3.2 3.2S8 6.3 9.3 6.9c1.3.6 2.6 1.1 4 1.5 1.4.3 2.9.5 4.4.6-.1-.3-.2-.5-.2-.8v-.9c0-1 .2-2 .5-2.8.4-.9.9-1.6 1.6-2.4.7-.7 1.5-1.3 2.4-1.6 1-.3 1.9-.5 3-.5s2 .2 2.9.6 1.7.9 2.4 1.7c.8-.2 1.6-.4 2.3-.7.8-.3 1.6-.6 2.3-1-.3.8-.6 1.6-1.2 2.3-.4.6-1.1 1.2-1.9 1.7z"></path></svg>\n';const FooterWrapper=styled_components_browser_esm.default.footer`
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
`,GTM=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$gtm;const gtmContainerId=null==configuration||null===(_configuration$gtm=configuration.gtm)||void 0===_configuration$gtm?void 0:_configuration$gtm.containerId;return gtmContainerId&&!cleanAmp?Object(jsx_runtime.jsx)("noscript",{children:Object(jsx_runtime.jsx)(Frame,{src:"https://www.googletagmanager.com/ns.html?id="+gtmContainerId,height:0,width:0})}):null};GTM.propTypes={res:prop_types_default.a.object.isRequired};var library_GTM=Object(RequestProvider.withRequest)(GTM),classes=__webpack_require__(160),closeIcon=__webpack_require__(259),logo=__webpack_require__(350);const SearchWrapper=styled_components_browser_esm.default.div``,SearchInput=styled_components_browser_esm.default.div`
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
`;var Header_SearchField=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)(SearchWrapper,{children:Object(jsx_runtime.jsxs)(SearchInput,{className:"search-input",children:[Object(jsx_runtime.jsx)("div",{id:"searchBox0"}),Object(jsx_runtime.jsx)("div",{id:"quickSearchresults0",className:"quick-searchresults"})]})}))``,constants_menu=__webpack_require__(185);var icons_expandIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 24"><path d="M0 21.2L9.2 12 0 2.8 2.9 0l12 12-12 12L0 21.2z"></path></svg>\n';const TertiaryList=styled_components_browser_esm.default.ul`
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
`,withScript=__webpack_require__(163);const FullMenuWrapper=styled_components_browser_esm.default.div`
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
`,Header=props=>{const{className:className,cleanAmp:cleanAmp,menu:menu}=props,hasSubNav=menu.subnavMenu;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(HeaderWrapper,{className:Object(classes.a)(className,hasSubNav?"has-subnav":""),id:"header",children:[Object(jsx_runtime.jsxs)(FirstRowWrapper,{children:[Object(jsx_runtime.jsx)(LogoWrapper,{href:"/",dangerouslySetInnerHTML:{__html:logo.a+icons_stampES},"aria-label":"Back to homepage",className:"es-logo"}),Object(jsx_runtime.jsxs)(LoginRegister,{children:[Object(jsx_runtime.jsx)("a",{"amp-access":"NOT loggedIn",href:"/register",className:"login-button register",children:"Register"}),Object(jsx_runtime.jsx)("a",{on:"tap:login-modal.open","amp-access":"NOT loggedIn",className:"login-button",children:"Login"}),Object(jsx_runtime.jsx)("a",{href:"/user/logout","amp-access":"loggedIn","amp-access-hide":"true",className:"login-button",children:"Logout"}),Object(jsx_runtime.jsx)("a",{href:"/profile","amp-access":"loggedIn","amp-access-hide":"true",className:"login-button",children:"My account"}),Object(jsx_runtime.jsx)(SearchButton,{className:"search-toggle","data-on":"tap:header.toggleClass(class='search-visible')","aria-label":"Open Search",role:"button",tabIndex:"0",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 43.7 43.8">\n  <path d="M31.2 27.5L43.7 40 40 43.8 27.5 31.3v-2l-.6-.7c-1.4 1.2-3.1 2.2-4.9 2.9-1.8.7-3.7 1.1-5.7 1.1-2.2 0-4.3-.4-6.3-1.3s-3.7-2-5.2-3.5-2.6-3.2-3.5-5.2c-.9-2-1.3-4.1-1.3-6.3 0-2.3.4-4.4 1.3-6.4s2-3.7 3.5-5.2S8 2.1 9.9 1.3C11.9.4 14 0 16.2 0c2.3 0 4.4.4 6.4 1.3s3.7 2 5.2 3.5S30.4 8 31.3 10c.9 2 1.3 4.1 1.3 6.4 0 2-.4 3.9-1.1 5.7s-1.7 3.4-2.9 4.8l.6.7h2zm-15 0c3.1 0 5.8-1.1 8-3.3 2.2-2.2 3.3-4.9 3.3-7.9 0-3.1-1.1-5.8-3.3-8C22 6.1 19.4 5 16.2 5c-3.1 0-5.7 1.1-7.9 3.3-2.2 2.2-3.3 4.8-3.3 8 0 3.1 1.1 5.7 3.3 7.9 2.2 2.2 4.8 3.3 7.9 3.3z"/>\n</svg>\n'+closeIcon.a}}),Object(jsx_runtime.jsx)(HamburgerMenu,{"data-on":"tap:body.toggleClass(class='full-menu-visible')","aria-label":"Open full menu",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)(MenuButton,{"aria-label":"Open full menu",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 45 30">\n  <path d="M0 0h45v5H0V0zm0 17.5v-5h45v5H0zM0 30v-5h45v5H0z"></path>\n</svg>\n'+closeIcon.a}})})]})]}),!cleanAmp&&Object(jsx_runtime.jsx)(MenuWrapper,{children:Object(jsx_runtime.jsx)(Menu_SectionMenu,{menu:menu.navbarMenu})}),menu.subnavMenu&&Object(jsx_runtime.jsx)(Best_SubNavMenu,{menu:menu.subnavMenu}),!cleanAmp&&Object(jsx_runtime.jsx)(Header_SearchField,{})]}),Object(jsx_runtime.jsx)(Menu_FullMenu,{menu:menu.fullMenu})]})};Header.propTypes={className:prop_types_default.a.any,headerStyle:prop_types_default.a.any,menu:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{className:{type:{name:"any"},required:!1,description:""},headerStyle:{type:{name:"any"},required:!1,description:""},menu:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};var library_Header=Object(RequestProvider.withRequest)(Header);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"app/component/library/Header.js"});var Login=__webpack_require__(488);const LoginModal_Wrapper=styled_components_browser_esm.default.div`
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
`},2144:function(module,exports){},2146:function(module,exports){},2153:function(module,exports){},2155:function(module,exports){},216:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props}))`
  height: 0;
`},2173:function(module,exports){},2175:function(module,exports){},2187:function(module,exports){},2190:function(module,exports){},2200:function(module,exports,__webpack_require__){var map={"./af":756,"./af.js":756,"./ar":757,"./ar-dz":758,"./ar-dz.js":758,"./ar-kw":759,"./ar-kw.js":759,"./ar-ly":760,"./ar-ly.js":760,"./ar-ma":761,"./ar-ma.js":761,"./ar-sa":762,"./ar-sa.js":762,"./ar-tn":763,"./ar-tn.js":763,"./ar.js":757,"./az":764,"./az.js":764,"./be":765,"./be.js":765,"./bg":766,"./bg.js":766,"./bm":767,"./bm.js":767,"./bn":768,"./bn-bd":769,"./bn-bd.js":769,"./bn.js":768,"./bo":770,"./bo.js":770,"./br":771,"./br.js":771,"./bs":772,"./bs.js":772,"./ca":773,"./ca.js":773,"./cs":774,"./cs.js":774,"./cv":775,"./cv.js":775,"./cy":776,"./cy.js":776,"./da":777,"./da.js":777,"./de":778,"./de-at":779,"./de-at.js":779,"./de-ch":780,"./de-ch.js":780,"./de.js":778,"./dv":781,"./dv.js":781,"./el":782,"./el.js":782,"./en-au":783,"./en-au.js":783,"./en-ca":784,"./en-ca.js":784,"./en-gb":785,"./en-gb.js":785,"./en-ie":786,"./en-ie.js":786,"./en-il":787,"./en-il.js":787,"./en-in":788,"./en-in.js":788,"./en-nz":789,"./en-nz.js":789,"./en-sg":790,"./en-sg.js":790,"./eo":791,"./eo.js":791,"./es":792,"./es-do":793,"./es-do.js":793,"./es-mx":794,"./es-mx.js":794,"./es-us":795,"./es-us.js":795,"./es.js":792,"./et":796,"./et.js":796,"./eu":797,"./eu.js":797,"./fa":798,"./fa.js":798,"./fi":799,"./fi.js":799,"./fil":800,"./fil.js":800,"./fo":801,"./fo.js":801,"./fr":802,"./fr-ca":803,"./fr-ca.js":803,"./fr-ch":804,"./fr-ch.js":804,"./fr.js":802,"./fy":805,"./fy.js":805,"./ga":806,"./ga.js":806,"./gd":807,"./gd.js":807,"./gl":808,"./gl.js":808,"./gom-deva":809,"./gom-deva.js":809,"./gom-latn":810,"./gom-latn.js":810,"./gu":811,"./gu.js":811,"./he":812,"./he.js":812,"./hi":813,"./hi.js":813,"./hr":814,"./hr.js":814,"./hu":815,"./hu.js":815,"./hy-am":816,"./hy-am.js":816,"./id":817,"./id.js":817,"./is":818,"./is.js":818,"./it":819,"./it-ch":820,"./it-ch.js":820,"./it.js":819,"./ja":821,"./ja.js":821,"./jv":822,"./jv.js":822,"./ka":823,"./ka.js":823,"./kk":824,"./kk.js":824,"./km":825,"./km.js":825,"./kn":826,"./kn.js":826,"./ko":827,"./ko.js":827,"./ku":828,"./ku.js":828,"./ky":829,"./ky.js":829,"./lb":830,"./lb.js":830,"./lo":831,"./lo.js":831,"./lt":832,"./lt.js":832,"./lv":833,"./lv.js":833,"./me":834,"./me.js":834,"./mi":835,"./mi.js":835,"./mk":836,"./mk.js":836,"./ml":837,"./ml.js":837,"./mn":838,"./mn.js":838,"./mr":839,"./mr.js":839,"./ms":840,"./ms-my":841,"./ms-my.js":841,"./ms.js":840,"./mt":842,"./mt.js":842,"./my":843,"./my.js":843,"./nb":844,"./nb.js":844,"./ne":845,"./ne.js":845,"./nl":846,"./nl-be":847,"./nl-be.js":847,"./nl.js":846,"./nn":848,"./nn.js":848,"./oc-lnc":849,"./oc-lnc.js":849,"./pa-in":850,"./pa-in.js":850,"./pl":851,"./pl.js":851,"./pt":852,"./pt-br":853,"./pt-br.js":853,"./pt.js":852,"./ro":854,"./ro.js":854,"./ru":855,"./ru.js":855,"./sd":856,"./sd.js":856,"./se":857,"./se.js":857,"./si":858,"./si.js":858,"./sk":859,"./sk.js":859,"./sl":860,"./sl.js":860,"./sq":861,"./sq.js":861,"./sr":862,"./sr-cyrl":863,"./sr-cyrl.js":863,"./sr.js":862,"./ss":864,"./ss.js":864,"./sv":865,"./sv.js":865,"./sw":866,"./sw.js":866,"./ta":867,"./ta.js":867,"./te":868,"./te.js":868,"./tet":869,"./tet.js":869,"./tg":870,"./tg.js":870,"./th":871,"./th.js":871,"./tk":872,"./tk.js":872,"./tl-ph":873,"./tl-ph.js":873,"./tlh":874,"./tlh.js":874,"./tr":875,"./tr.js":875,"./tzl":876,"./tzl.js":876,"./tzm":877,"./tzm-latn":878,"./tzm-latn.js":878,"./tzm.js":877,"./ug-cn":879,"./ug-cn.js":879,"./uk":880,"./uk.js":880,"./ur":881,"./ur.js":881,"./uz":882,"./uz-latn":883,"./uz-latn.js":883,"./uz.js":882,"./vi":884,"./vi.js":884,"./x-pseudo":885,"./x-pseudo.js":885,"./yo":886,"./yo.js":886,"./zh-cn":887,"./zh-cn.js":887,"./zh-hk":888,"./zh-hk.js":888,"./zh-mo":889,"./zh-mo.js":889,"./zh-tw":890,"./zh-tw.js":890};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2200},2204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(353);const ArticlePage=__webpack_require__(252).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Gallery",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(481).default()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"})},2205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleReviewStory",(function(){return ArticleReviewStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(42);const ArticlePage=__webpack_require__(252).default;__webpack_exports__.default={title:"Article/Review",component:ArticlePage};const configReview={body:[{type:"markup",data:{markup:'<p dir="ltr">A review article</p>'}}],extra:{verdict:[{type:"markup",data:{markup:"<p>There’s no competition: the Severin SM3587 Spuma 700 Plus Induction Milk Frother delivers the best results with the highest degree of flexibility, being adaptable for different kinds of milks (including non-dairy) and ensuring there’s the correct variation in froth style for different coffees - after all, any coffee aficionado will tell you, one foam does not fit all. There’s no escaping from the premium price point, though, and if what you’re looking for is a simpler but still effective frother for homemade foamy coffees with a lesser degree of pedantic accuracy, then the Dualit Milk Frother delivers excellent value and a stylish look at less than half the price. It just depends what kind of coffee drinker you are.</p>"},id:"8wsv22av",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p>ESBest product reviews are unbiased, independent advice you can trust. On some occasions, we earn revenue if you click the links and buy the products, but we never allow this to bias our coverage. The reviews are compiled through a mix of expert opinion and real-world testing.</p>"},id:"y6aszy8a",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p><strong>Follow us on Instagram, Facebook and Twitter</strong></p>"},id:"ezia7ftp",editorState:{setSelectionPosition:null}}],products:[{type:"product",data:{id:1,title:"Severin SM3587 Spuma 700 Plus Induction Milk Frother",price:"115.99",vendorLink:"/",vendorName:"Amazon",priceComparison:"Home Spares (£139.95)",body:[{type:"markup",data:{markup:"<p>Coffee geeks, assemble. This premium piece of equipment has no fewer than 13 function settings for heating and frothing different kinds of milk to different styles for all your favourite coffees, from macchiatos to lattes and flat whites. It even enables chocolate melting for hot chocs and mochas, and can also be used for heating baby food or mulled wine. Best still, there’s no fiddly accuracy or barista skills needed - just tell it to go and it does. It can froth up to 350ml of milk in one go - enough for plenty of cups, and looks the part while it does it. There’s not really anything not to like, although if we’re being hyper-critical it is quite noisy. It’s hard to mind when the results are as good as they are though - making the only real sticking point the premium price.</p>"},id:"q0gg521i",editorState:{setSelectionPosition:null}}],image:{id:"o8nqtx7t",data:{title:"milk fother",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23293,changed:"1600273376",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}},{type:"product",data:{id:2,title:"Judge Milk Frother",price:"32",vendorLink:"/",vendorName:"Amazon",priceComparison:"",body:[{type:"markup",data:{markup:"<p>Before milk frothers were a thing, if you wanted hot milk you needed a hob and saucepan, which is clearly the inspiration for this retro-looking frother. It looks a bit old fashioned, but feels really sturdy and is super easy to use and clean. The milk frothed easily and produced a hot stable foam, perfect for a cappuccino or flat white. While it doesn’t have some of the bells and whistles of the more modern-looking, pricier models, if you are wanting to froth and heat milk simply and quickly this does exactly what you need it to and at a good price too.</p>"},id:"qsbe3xz9",editorState:{setSelectionPosition:null}}],image:{id:"2r3urpvi",data:{title:"milk frother",description:"test",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23294,changed:"1600273594",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}}]}},ArticleReviewStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configReview,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});ArticleReviewStory.storyName="Product review article",ArticleReviewStory.parameters={amp:{isEnabled:!0}},ArticleReviewStory.__docgenInfo={description:"",methods:[],displayName:"ArticleReviewStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ProductReviewArticle.stories.js"]={name:"ArticleReviewStory",docgenInfo:ArticleReviewStory.__docgenInfo,path:"stories/Article/ProductReviewArticle.stories.js"})},2206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(33),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(352);const ArticlePage=__webpack_require__(252).default,MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Video",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article page",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(481).default()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"})},2207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleAllTypesStory",(function(){return ArticleMetaSingleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleNoTypesStory",(function(){return ArticleMetaSingleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTwitterStory",(function(){return ArticleMetaSingleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTitleStory",(function(){return ArticleMetaSingleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleAllTypesStory",(function(){return ArticleMetaMultipleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleNoTypesStory",(function(){return ArticleMetaMultipleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTwitterStory",(function(){return ArticleMetaMultipleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTitleStory",(function(){return ArticleMetaMultipleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleAllTypesStoryContrast",(function(){return ArticleMetaSingleAllTypesStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleNoTypesStoryContrast",(function(){return ArticleMetaSingleNoTypesStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTwitterStoryContrast",(function(){return ArticleMetaSingleJustTwitterStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTitleStoryContrast",(function(){return ArticleMetaSingleJustTitleStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleAllTypesStoryContrast",(function(){return ArticleMetaMultipleAllTypesStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleNoTypesStoryContrast",(function(){return ArticleMetaMultipleNoTypesStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTwitterStoryContrast",(function(){return ArticleMetaMultipleJustTwitterStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTitleStoryContrast",(function(){return ArticleMetaMultipleJustTitleStoryContrast})),__webpack_require__.d(__webpack_exports__,"ArticleMetaInsiderStory",(function(){return ArticleMetaInsiderStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(33);const ArticleMeta=__webpack_require__(487).default,ArticleMetaInsider=__webpack_require__(343).default;__webpack_exports__.default={title:"Other/Components/Article Meta",component:ArticleMeta};const ContrastWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  background: #000;
`,configSingleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleAllTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleAllTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleAllTypesStory.storyName="Single, all types",ArticleMetaSingleAllTypesStory.parameters={waitFor:".author"};const configSingleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleNoTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleNoTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleNoTypesStory.storyName="Single, no types",ArticleMetaSingleNoTypesStory.parameters={waitFor:".author"};const configSingleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTwitterStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleJustTwitter,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTwitterStory.storyName="Single, just Twitter",ArticleMetaSingleJustTwitterStory.parameters={waitFor:".author"};const configSingleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTitleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleJustTitle,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTitleStory.storyName="Single, just title",ArticleMetaSingleJustTitleStory.parameters={waitFor:".author"};const configMultipleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleAllTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleAllTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleAllTypesStory.storyName="Multiple, all types",ArticleMetaMultipleAllTypesStory.parameters={waitFor:".author"};const configMultipleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleNoTypesStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleNoTypes,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleNoTypesStory.storyName="Multiple, no types",ArticleMetaMultipleNoTypesStory.parameters={waitFor:".author"};const configMultipleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTwitterStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleJustTwitter,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTwitterStory.storyName="Multiple, just Twitter",ArticleMetaMultipleJustTwitterStory.parameters={waitFor:".author"};const configMultipleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTitleStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleJustTitle,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTitleStory.storyName="Multiple, just title",ArticleMetaMultipleJustTitleStory.parameters={waitFor:".author"};const configSingleAllTypesContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleAllTypesStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleAllTypesContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaSingleAllTypesStoryContrast.storyName="Single, all types, contrast",ArticleMetaSingleAllTypesStoryContrast.parameters={waitFor:".author"};const configSingleNoTypesContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleNoTypesStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleNoTypesContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaSingleNoTypesStoryContrast.storyName="Single, no types, contrast",ArticleMetaSingleNoTypesStoryContrast.parameters={waitFor:".author"};const configSingleJustTwitterContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTwitterStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleJustTwitterContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaSingleJustTwitterStoryContrast.storyName="Single, just Twitter, contrast",ArticleMetaSingleJustTwitterStoryContrast.parameters={waitFor:".author"};const configSingleJustTitleContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTitleStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configSingleJustTitleContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaSingleJustTitleStoryContrast.storyName="Single, just title, contrast",ArticleMetaSingleJustTitleStoryContrast.parameters={waitFor:".author"};const configMultipleAllTypesContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleAllTypesStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleAllTypesContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaMultipleAllTypesStoryContrast.storyName="Multiple, all types, contrast",ArticleMetaMultipleAllTypesStoryContrast.parameters={waitFor:".author"};const configMultipleNoTypesContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleNoTypesStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleNoTypesContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaMultipleNoTypesStoryContrast.storyName="Multiple, no types, contrast",ArticleMetaMultipleNoTypesStoryContrast.parameters={waitFor:".author"};const configMultipleJustTwitterContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTwitterStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleJustTwitterContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaMultipleJustTwitterStoryContrast.storyName="Multiple, just Twitter, contrast",ArticleMetaMultipleJustTwitterStoryContrast.parameters={waitFor:".author"};const configMultipleJustTitleContrast={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTitleStoryContrast=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configMultipleJustTitleContrast,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContrastWrapper,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{theme:"dark"})})});ArticleMetaMultipleJustTitleStoryContrast.storyName="Multiple, just title, contrast",ArticleMetaMultipleJustTitleStoryContrast.parameters={waitFor:".author"};const configInsider={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",location:"London",path:"/author/sophia-sleigh"}]},ArticleMetaInsiderStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_2__.a,{articleOverrides:configInsider,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMetaInsider,{})});ArticleMetaInsiderStory.storyName="Insider",ArticleMetaInsiderStory.parameters={waitFor:".author"},ArticleMetaSingleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleAllTypesStory",docgenInfo:ArticleMetaSingleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleNoTypesStory",docgenInfo:ArticleMetaSingleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTwitterStory",docgenInfo:ArticleMetaSingleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTitleStory",docgenInfo:ArticleMetaSingleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleAllTypesStory",docgenInfo:ArticleMetaMultipleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleNoTypesStory",docgenInfo:ArticleMetaMultipleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTwitterStory",docgenInfo:ArticleMetaMultipleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTitleStory",docgenInfo:ArticleMetaMultipleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleAllTypesStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleAllTypesStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleAllTypesStoryContrast",docgenInfo:ArticleMetaSingleAllTypesStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleNoTypesStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleNoTypesStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleNoTypesStoryContrast",docgenInfo:ArticleMetaSingleNoTypesStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTwitterStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTwitterStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTwitterStoryContrast",docgenInfo:ArticleMetaSingleJustTwitterStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTitleStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTitleStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTitleStoryContrast",docgenInfo:ArticleMetaSingleJustTitleStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleAllTypesStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleAllTypesStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleAllTypesStoryContrast",docgenInfo:ArticleMetaMultipleAllTypesStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleNoTypesStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleNoTypesStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleNoTypesStoryContrast",docgenInfo:ArticleMetaMultipleNoTypesStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTwitterStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTwitterStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTwitterStoryContrast",docgenInfo:ArticleMetaMultipleJustTwitterStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTitleStoryContrast.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTitleStoryContrast"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTitleStoryContrast",docgenInfo:ArticleMetaMultipleJustTitleStoryContrast.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaInsiderStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaInsiderStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaInsiderStory",docgenInfo:ArticleMetaInsiderStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"})},2208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoginModalComponentStory",(function(){return LoginModalComponentStory}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(142);const Login=__webpack_require__(488).default;__webpack_exports__.default={title:"Other/Components/Login",component:Login};const LoginModalComponentStory=()=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Login,{})});LoginModalComponentStory.storyName="Login modal",LoginModalComponentStory.parameters={waitFor:".login-page-form",emulateViewports:[{width:620,height:500}]},LoginModalComponentStory.__docgenInfo={description:"",methods:[],displayName:"LoginModalComponentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/LoginModal.stories.js"]={name:"LoginModalComponentStory",docgenInfo:LoginModalComponentStory.__docgenInfo,path:"stories/Other/Components/LoginModal.stories.js"})},2211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(92),page=__webpack_require__(335),TopBanner=__webpack_require__(336),WallPaper=__webpack_require__(216),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),Styles=__webpack_require__(3);const AuthorWrapper=styled_components_browser_esm.default.div`
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
`,AuthorRow=({author:author})=>{let authorDetails=[];return author.jobTitle&&authorDetails.push(Object(jsx_runtime.jsx)("span",{children:author.jobTitle})),author.twitter&&authorDetails.push(Object(jsx_runtime.jsxs)("a",{href:"https://twitter.com/"+author.twitter,children:["@",author.twitter]})),Object(jsx_runtime.jsxs)(AuthorWrapper,{children:[author.imageUrl&&Object(jsx_runtime.jsx)(AuthorImage,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:author.imageUrl,width:75,height:75,layout:"responsive"})}),Object(jsx_runtime.jsxs)(AuthorInfo,{children:[Object(jsx_runtime.jsx)(AuthorName,{children:author.name}),authorDetails&&Object(jsx_runtime.jsx)(AuthorDetails,{children:authorDetails})]}),author.description&&Object(jsx_runtime.jsx)(AuthorDesc,{children:author.description})]})};AuthorRow.propTypes={author:prop_types_default.a.object.isRequired},AuthorRow.__docgenInfo={description:"",methods:[],displayName:"AuthorRow",props:{author:{type:{name:"object"},required:!0,description:""}}};var Author_AuthorRow=AuthorRow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Author/AuthorRow.js"]={name:"AuthorRow",docgenInfo:AuthorRow.__docgenInfo,path:"app/component/library/Author/AuthorRow.js"});var Frame=__webpack_require__(214),helper=__webpack_require__(28);var ColumnWrapper=styled_components_browser_esm.default.div`
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
`;var ArticleCapsule=__webpack_require__(77);var icons_GalleryInsider=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><title>Icon/Gallery</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g fill="#fff" fill-rule="nonzero"><rect width="40" height="40"/></g><g transform="translate(8 8)"><polygon id="b" points="0 0 24 0 24 24 0 24"/><g transform="translate(2 4)" fill="#000" fill-rule="nonzero"><rect id="a" y="2" width="4" height="11"/><path d="m5 15h10v-15h-10v15zm2-13h6v11h-6v-11z"/><rect x="16" y="2" width="4" height="11"/></g></g></g></svg>\n'}}))`
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
  ${ArticleCapsule.a} {
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
  ${ArticleCapsule.a} {
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
`;var article_ArticleItem=Object(styled_components_browser_esm.default)(({className:className,srcset:srcset,type:type,componentStyle:componentStyle,data:{path:path,titleShort:titleShort,authors:authors,title:title,hero:hero,sections:sections,sponsorName:sponsorName,lead:lead,isLiveBlog:isLiveBlog,photoArticle:photoArticle},showAuthor:showAuthor=!1,hasImage:hasImage})=>{const ThemedWrapper=Object(helper.b)(componentStyle,Wrapper,{insider:WrapperInsider}),videoArticle=hero&&hero.some(({type:type})=>"brightcove"===type||"youtube"===type||"jw_player"===type||"dugout-video"===type);return Object(jsx_runtime.jsxs)(ThemedWrapper,{className:className?[className,"article"].join(" "):"article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,srcset:srcset,path:path,type:type,componentStyle:componentStyle}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(ArticleCapsule.a,{className:videoArticle&&hasImage&&!isLiveBlog?[className,"media-video"].join(" "):className,sections:sections,sponsorName:sponsorName,isLiveBlog:isLiveBlog,path:path,children:"insider"!==componentStyle&&article_ArticleIcon(photoArticle,videoArticle,"insider"===componentStyle)}),showAuthor&&authors&&Object(jsx_runtime.jsx)(ArticleAuthor,{authors:authors}),Object(jsx_runtime.jsx)(article_ArticleHeadline,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})}),"insider"===componentStyle&&"PortraitArticle"!==type&&authors&&Object(jsx_runtime.jsx)(ArticleAuthorInsider,{author:authors[0]}),"PortraitArticle"===type&&Object(jsx_runtime.jsxs)("a",{href:path,className:"portrait-wrapper",children:[Object(jsx_runtime.jsx)(Lead,{className:"lead",children:lead}),Object(jsx_runtime.jsx)(ReadMore,{href:path,children:"Open Gallery"})]}),Object(jsx_runtime.jsx)(components_HighlightBlock,{path:path})]}),"FeaturedArtistX1"===type&&Object(jsx_runtime.jsx)(ReadMore,{href:path,children:"Read More"})]})})`
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
`;const ArticleHero_Wrapper=styled_components_browser_esm.default.div``,WrapperContrast=styled_components_browser_esm.default.div``;var article_ArticleHero=Object(styled_components_browser_esm.default)(({className:className,heroSrcset:heroSrcset,componentStyle:componentStyle,data:{path:path,titleShort:titleShort,capsuleSection:capsuleSection,authors:authors,title:title,hero:hero,sections:sections,photoArticle:photoArticle,isLiveBlog:isLiveBlog,sponsorName:sponsorName,relatedLinks:relatedLinks,showRelatedLinks:showRelatedLinks,showLead:showLead,lead:lead},showAuthor:showAuthor})=>{const ThemedWrapper=Object(helper.b)(componentStyle,ArticleHero_Wrapper,{insider:WrapperContrast}),videoArticle=hero&&hero.some(({type:type})=>"brightcove"===type||"youtube"===type||"jw_player"===type||"dugout-video"===type);return Object(jsx_runtime.jsxs)(ThemedWrapper,{className:className?[className,"hero-article"].join(" "):"hero-article",children:[Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,heroSrcset:heroSrcset,path:path}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(ArticleCapsule.a,{className:videoArticle&&!isLiveBlog?[className,"media-video"].join(" "):className,sections:sections,isLiveBlog:isLiveBlog,override:capsuleSection,sponsorName:sponsorName,children:article_ArticleIcon(photoArticle,videoArticle,"insider"===componentStyle)}),Object(jsx_runtime.jsxs)(article_ArticleHeadline,{children:[showAuthor&&authors&&Object(jsx_runtime.jsx)(ArticleAuthor,{authors:authors}),Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})]}),showLead&&lead&&Object(jsx_runtime.jsx)(article_ArticleLead,{html:lead}),showRelatedLinks&&relatedLinks&&Object(jsx_runtime.jsx)(article_ArticleRelated,{relatedLinks:relatedLinks}),Object(jsx_runtime.jsx)(components_HighlightBlock,{path:path})]})]})})`
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
`,FeaturedArtist=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props;return Object(jsx_runtime.jsxs)(FeaturedArtistWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[952,640,280]})]})};FeaturedArtist.propTypes={data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},FeaturedArtist.__docgenInfo={description:"",methods:[],displayName:"FeaturedArtist",props:{data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Insider_FeaturedArtist=FeaturedArtist;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/Insider/FeaturedArtist.js"]={name:"FeaturedArtist",docgenInfo:FeaturedArtist.__docgenInfo,path:"app/component/library/Section/components/Insider/FeaturedArtist.js"});var Carousel=__webpack_require__(161),Carousel_default=__webpack_require__.n(Carousel);var article_ArticleHeadshot=Object(styled_components_browser_esm.default)(({className:className,data:{path:path,titleShort:titleShort,title:title,hero:hero},componentStyle:componentStyle,type:type})=>Object(jsx_runtime.jsx)("div",{className:className?[className,"headshot"].join(" "):"headshot",children:Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(article_ArticleHeadline,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})}),Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,path:path,type:type,componentStyle:componentStyle})]})}))`
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
  ${ArticleCapsule.a} {
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
`,Sidebar=__webpack_require__(349),MPU=__webpack_require__(25);const ArticleX2_Wrapper=styled_components_browser_esm.default.div`
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
`;var Section_Title=Object(styled_components_browser_esm.default)(({className:className,componentStyle:componentStyle,data:{labelText:labelText,labelLink:labelLink}})=>Object(jsx_runtime.jsx)(components_ComponentTitle,{className:className,name:labelText,url:labelLink,titleStyle:componentStyle}))``,play=__webpack_require__(344);var icons_Play=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:play.a}}))`
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
`,VideoCapsule=Object(styled_components_browser_esm.default)(ArticleCapsule.a)`
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
`,VIP=props=>{const{data:{labelLink:labelLink,labelText:labelText,heroAlignment:heroAlignment,articles:articles}}=props;let heroClass="position-left";return"Right"===heroAlignment&&(heroClass="position-right"),"Middle"===heroAlignment&&(heroClass="position-middle"),Object(jsx_runtime.jsxs)(VIP_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),articles&&Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[968,640,280],heroAlignment:heroAlignment,className:heroClass,useHero:!0})]})};VIP.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any,className:prop_types_default.a.any},VIP.__docgenInfo={description:"",methods:[],displayName:"VIP",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""},className:{type:{name:"any"},required:!1,description:""}}};var Section_VIP=VIP;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/VIP.js"]={name:"VIP",docgenInfo:VIP.__docgenInfo,path:"app/component/library/Section/VIP.js"});var layout_Component=__webpack_require__(922),Component_default=__webpack_require__.n(layout_Component);const VoucherWrapper=styled_components_browser_esm.default.div`
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
  ${ArticleCapsule.a} {
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
`,ArticleLink=styled_components_browser_esm.default.a``,Content=styled_components_browser_esm.default.div``,VoucherArticles=({className:className,data:{url:url,best_offer_text:best_offer_text,logo:logo,sections:sections=[{name:"VOUCHER CODE",path:"/voucher-codes"}]}})=>Object(jsx_runtime.jsxs)(VoucherWrapper,{className:className,children:[Object(jsx_runtime.jsx)(ArticleLink,{href:url,children:Object(jsx_runtime.jsx)(Image_default.a,{src:logo,width:230,height:153,layout:"responsive"})}),Object(jsx_runtime.jsx)(ArticleCapsule.a,{sections:sections}),Object(jsx_runtime.jsx)(Content,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:url,title:best_offer_text})})]});VoucherArticles.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired,sectionTheme:prop_types_default.a.any};const Voucher_FlowWrapper=styled_components_browser_esm.default.div`
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
`},2216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),classnames=__webpack_require__(51),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3),ConditionalFrame=__webpack_require__(345),NoIndex=__webpack_require__(346);const Wrapper=styled_components_browser_esm.default.section`
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
`,Comments=({mockTestData:mockTestData=null,className:className})=>Object(jsx_runtime.jsx)(Wrapper,{className:classnames_default()(className,"tab","comments"),children:mockTestData?Object(jsx_runtime.jsx)(CommentList,{className:"list",children:mockTestData.map(comment=>Object(jsx_runtime.jsx)(CommentTemplate,{className:"comment-template",dangerouslySetInnerHTML:{__html:comment}},comment.slice(0,1)))}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(MessageWrapper,{className:"loading",children:Object(jsx_runtime.jsx)("p",{children:"Loading comments..."})}),Object(jsx_runtime.jsxs)(CommentTemplate,{className:"comment-template hidden",children:[Object(jsx_runtime.jsxs)("div",{className:"comment-meta",children:[Object(jsx_runtime.jsx)("span",{className:"date"}),Object(jsx_runtime.jsxs)("div",{className:"options",children:[Object(jsx_runtime.jsx)("span",{className:"ellipsis",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>\n</svg>\n'}}),Object(jsx_runtime.jsxs)("div",{className:"edit",children:[Object(jsx_runtime.jsx)("a",{className:"link view",href:"#comments",target:"_blank",children:"View"}),Object(jsx_runtime.jsx)("button",{className:"delete",children:"Delete"})]})]})]}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("h4",{className:"title"})}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("p",{className:"message"})})]}),Object(jsx_runtime.jsx)(CommentList,{className:"list"}),Object(jsx_runtime.jsx)(NextButtonWrapper,{className:"hidden next-btns"})]})});Comments.propTypes={className:prop_types_default.a.string,mockTestData:prop_types_default.a.array},Comments.__docgenInfo={description:"",methods:[],displayName:"Comments",props:{mockTestData:{defaultValue:{value:"null",computed:!1},type:{name:"array"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};var ProfileComments=Object(RequestProvider.withRequest)(Comments);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileComments.js"]={name:"Comments",docgenInfo:Comments.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileComments.js"});var postCodePatterns=__webpack_require__(347),FormSelect=__webpack_require__(186),FormSubmit=__webpack_require__(162),FormTextField=__webpack_require__(78);const ProfileDetails_Wrapper=styled_components_browser_esm.default.div`
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
`,Profile=props=>{const{data:data,activeTab:activeTab="newsletters",mockTestData:mockTestData=null}=props,accInfo=data&&data.accInfo,profile=accInfo&&accInfo.profile;return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:"light-bkg",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Profile"})}),Object(jsx_runtime.jsxs)(Profile_Wrapper,{className:"profile-wrapper",children:[Object(jsx_runtime.jsx)(Profile_ProfileNav,{profile:profile,activeTab:activeTab}),Object(jsx_runtime.jsxs)(TabContainer,{children:[Object(jsx_runtime.jsx)(Profile_ProfileNewsletters,{className:classnames_default()("",{active:"newsletters"===activeTab}),accInfo:accInfo}),Object(jsx_runtime.jsx)(Profile_ProfileDetails,{profile:profile,className:classnames_default()("",{active:"details"===activeTab})}),Object(jsx_runtime.jsx)(Profile_ProfilePassword,{className:classnames_default()("",{active:"password"===activeTab})}),Object(jsx_runtime.jsx)(ProfileComments,{mockTestData:mockTestData,className:classnames_default()("",{active:"comments"===activeTab})})]})]})]})};Profile.propTypes={data:prop_types_default.a.object.isRequired,activeTab:prop_types_default.a.string,mockTestData:prop_types_default.a.array};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Profile))``},2219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultSectionStory",(function(){return DefaultSectionStory})),__webpack_require__.d(__webpack_exports__,"InsiderSectionStory",(function(){return InsiderSectionStory})),__webpack_require__.d(__webpack_exports__,"EsBestSectionStory",(function(){return EsBestSectionStory})),__webpack_require__.d(__webpack_exports__,"AuthorSectionStory",(function(){return AuthorSectionStory}));var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(83);class MockSection_MockSection extends Mocker.a{setOverrides(props){Object(mockWithRequest.c)(),Object(mockWithRequest.i)(props.sectionOverrides),Object(mockWithRequest.g)(props.menuOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockSection_MockSection.propTypes={sectionOverrides:prop_types_default.a.object,menuOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockSection_MockSection.defaultProps={sectionOverrides:{},menuOverrides:{},reqOverrides:{},...Mocker.a.defaultProps};var components_MockSection=MockSection_MockSection,createImage=__webpack_require__(42),articleX2=__webpack_require__(329),articleX4=__webpack_require__(330),article=__webpack_require__(10),heroArticle=__webpack_require__(331),more=__webpack_require__(258),portraitArticle=articleOverrides=>({name:"Portrait Article",type:"PortraitArticle",labelText:null,labelLink:null,articles:[{...Object(article.a)({title:"Portrait article title will be here"}),...articleOverrides}]}),title=__webpack_require__(332);const SectionPage=__webpack_require__(2211).default;__webpack_exports__.default={title:"Section/Page",component:SectionPage};const DefaultSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});DefaultSectionStory.storyName="Full section page",DefaultSectionStory.parameters={amp:{isEnabled:!0}};const InsiderSectionStory=()=>{return Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/insider"},sectionOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"},components:[Object(heroArticle.a)(),Object(title.a)(),Object(articleX2.a)({isLiveBlog:!1}),Object(articleX4.a)(),Object(more.a)(),{name:"Featured Artist 1 Article",type:"FeaturedArtistX1",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"Featured Artist 1 Article"}),...articleOverrides}]},portraitArticle(),Object(more.a)()]},menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});var articleOverrides};InsiderSectionStory.storyName="Insider section",InsiderSectionStory.parameters={amp:{isEnabled:!0}};const EsBestSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/shopping/esbest"},sectionOverrides:{section:{name:"ES Best Home",path:"/shopping/esbest",sourcePath:"esbest"}},children:Object(jsx_runtime.jsx)(SectionPage,{})});EsBestSectionStory.storyName="EsBest section",EsBestSectionStory.parameters={amp:{isEnabled:!0}};const AuthorSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},sectionOverrides:{section:{name:"Lizzie test",id:"6223",remoteId:null,email:"elizabeth.hill@independent.co.uk",firstName:null,lastName:null,jobTitle:"Product Manager",imageUrl:Object(createImage.b)(0,150,0),twitter:"standardnews",facebook:"eveningstandard",location:"London",path:"/author/lizzie-test",description:"Lizzie is a Product Manager for ES & H&P",extra:{instagram:"evening.standard",snapchat:"eveningstandard",signatureImageUrl:null}},type:"author"},children:Object(jsx_runtime.jsx)(SectionPage,{})});AuthorSectionStory.storyName="Author section page",AuthorSectionStory.parameters={amp:{isEnabled:!0}},DefaultSectionStory.__docgenInfo={description:"",methods:[],displayName:"DefaultSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"DefaultSectionStory",docgenInfo:DefaultSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),InsiderSectionStory.__docgenInfo={description:"",methods:[],displayName:"InsiderSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"InsiderSectionStory",docgenInfo:InsiderSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),EsBestSectionStory.__docgenInfo={description:"",methods:[],displayName:"EsBestSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"EsBestSectionStory",docgenInfo:EsBestSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),AuthorSectionStory.__docgenInfo={description:"",methods:[],displayName:"AuthorSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"AuthorSectionStory",docgenInfo:AuthorSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"})},2220:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var ConditionalFrame=__webpack_require__(345),NoIndex=__webpack_require__(346),postCodePatterns=__webpack_require__(347),chevronDown=__webpack_require__(348);var FormSelect=__webpack_require__(186),FormSubmit=__webpack_require__(162),FormTextField=__webpack_require__(78);const Wrapper=styled_components_browser_esm.default.section`
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
`,Register=props=>{var _query$icn;const{className:className,req:{query:query},configuration:configuration}=props,newsletter=null===(_query$icn=query.icn)||void 0===_query$icn?void 0:_query$icn.toLowerCase(),premium=Object.prototype.hasOwnProperty.call(query,"premium"),donation=Object.prototype.hasOwnProperty.call(query,"donations"),shortform=premium||donation,{newslettersConfig:newslettersConfig}=configuration,newsletterData=newsletter&&newslettersConfig&&newslettersConfig[newsletter],headerStyle=null==newsletter?void 0:newsletter.substring(4);return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:newsletter?"newsletter-benefits":"",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Register"})}),Object(jsx_runtime.jsxs)(ConditionalWrapper,{newsletter:newsletter,children:[Object(jsx_runtime.jsxs)(Span,{children:[newsletterData&&Object(jsx_runtime.jsx)(H1,{className:headerStyle,children:newsletterData.regTitle}),"_es_insider__benefits"===newsletter&&Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/insiderLogo.svg",layout:"fixed",width:"112px",height:"50px"})]}),Object(jsx_runtime.jsxs)(Register_Wrapper,{newsletter:newsletter,className:shortform?"short-form":"",children:[!newsletterData&&Object(jsx_runtime.jsxs)(Breadcrumb,{children:[Object(jsx_runtime.jsx)("a",{href:"/",children:"Home"})," > Register"]}),newsletterData&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:newsletterData.description})}),Object(jsx_runtime.jsx)("p",{children:newsletterData.label})]}),Object(jsx_runtime.jsx)(H2,{className:"reg-title",children:"Create your account"}),Object(jsx_runtime.jsxs)(P,{children:["Gain access to our newsletters, competitions, article commenting and other exclusive"," ",Object(jsx_runtime.jsxs)(Link,{href:"/service/why-register-9636948.html",children:["community benefits"," ",Object(jsx_runtime.jsx)(Register_Icon,{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n  </svg>\n'}})]})]}),Object(jsx_runtime.jsx)(Register_RegisterForm,{}),Object(jsx_runtime.jsxs)(P,{children:["Registered? ",Object(jsx_runtime.jsx)(Link,{href:"/login",children:"Log in here"})]})]}),newsletterData&&Object(jsx_runtime.jsx)(ImageWrapper,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:newsletterData.imageSrc,layout:"responsive",width:" 389",height:"1088"})})]})]})};Register.propTypes={className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Register))``},2221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProfilePageNewsletterStory",(function(){return ProfilePageNewsletterStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageDetailsStory",(function(){return ProfilePageDetailsStory})),__webpack_require__.d(__webpack_exports__,"ProfilePagePasswordStory",(function(){return ProfilePagePasswordStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageCommentsStory",(function(){return ProfilePageCommentsStory})),__webpack_require__.d(__webpack_exports__,"RegisterPageStory",(function(){return RegisterPageStory})),__webpack_require__.d(__webpack_exports__,"BenefitsPageStory",(function(){return BenefitsPageStory}));var jsx_runtime=__webpack_require__(0);var mockComment=()=>['\n  <div class="comment-meta">\n    <span class="date">1 hour ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <h4 class="title">\n      Brexit deal breaches will harm hope of trade deal, Brussels chief warns Boris Johnson\n    </h4>\n  </a>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <p class="message">\n      first test message\n    </p>\n  </a>\n','<div class="comment-meta">\n    <span class="date">4 days ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <h4 class="title">\n      Premier League confirm plan to finish season should government restrictions allow\n    </h4>\n  </a>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <p class="message">\n      second test message\n    </p>\n  </a>\n'];var mockUser=()=>({accInfo:{UID:"448c524f687b423d9b83ec06ec7727fe",data:{receiveFoodNews:!1,receiveLifestyleNews:!1,regSourceSection:"",receiveInteriors:!1,receiveTheWeekender:!1,terms:!0,receiveGoingOutNews:!1,receiveThirdPartyOffers:!0,receiveInsider:!1,receiveESOffers:!1,receiveHeadlinesNews:!0,receiveFootballNews:!1,receivePropertyNews:!1,regSourceMethod:""},profile:{firstName:"Tim",lastName:"Tester",nickname:"Commenter",age:18,birthYear:2001,country:"United Kingdom",email:"tim.test@Test.co.uk",gender:"m",zip:"sw18 2qr"}}}),MockStaticPage=__webpack_require__(142);const ProfilePage=__webpack_require__(2216).default,RegisterPage=__webpack_require__(2220).default;__webpack_exports__.default={title:"Profile/Page",component:ProfilePage};const ProfilePageNewsletterStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{data:mockUser()})});ProfilePageNewsletterStory.storyName="Profile newsletters";const ProfilePageDetailsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"details",data:mockUser()})});ProfilePageDetailsStory.storyName="Profile details";const ProfilePagePasswordStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"password",data:mockUser()})});ProfilePagePasswordStory.storyName="Profile password";const ProfilePageCommentsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"comments",mockTestData:mockComment(),data:mockUser()})});ProfilePageCommentsStory.storyName="Profile comments";const RegisterPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/Register",isService:!0},children:Object(jsx_runtime.jsx)(RegisterPage,{})});RegisterPageStory.storyName="Register Page";const BenefitsPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/register?icn=_ES_news__Benefits",isService:!0,query:{icn:"_ES_news__Benefits"}},children:Object(jsx_runtime.jsx)(RegisterPage,{})});BenefitsPageStory.storyName="Benefits Page",ProfilePageNewsletterStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageNewsletterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageNewsletterStory",docgenInfo:ProfilePageNewsletterStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageDetailsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageDetailsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageDetailsStory",docgenInfo:ProfilePageDetailsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePagePasswordStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePagePasswordStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePagePasswordStory",docgenInfo:ProfilePagePasswordStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageCommentsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageCommentsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageCommentsStory",docgenInfo:ProfilePageCommentsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),RegisterPageStory.__docgenInfo={description:"",methods:[],displayName:"RegisterPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"RegisterPageStory",docgenInfo:RegisterPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),BenefitsPageStory.__docgenInfo={description:"",methods:[],displayName:"BenefitsPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"BenefitsPageStory",docgenInfo:BenefitsPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"})},2223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticlePageStory",(function(){return ArticlePageStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory})),__webpack_require__.d(__webpack_exports__,"ArticleLinkEmbedStory",(function(){return ArticleLinkEmbedStory})),__webpack_require__.d(__webpack_exports__,"StaticArticleStory",(function(){return StaticArticleStory}));var jsx_runtime=__webpack_require__(0),MockArticle=__webpack_require__(33),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(83);class MockStaticArticle_MockStaticArticleContent extends Mocker.a{setOverrides(props){Object(mockWithRequest.a)(),Object(mockWithRequest.j)(props.articleOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockStaticArticle_MockStaticArticleContent.propTypes={setMockStaticArticleOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockStaticArticle_MockStaticArticleContent.defaultProps={setMockStaticArticleOverridess:{},reqOverrides:{},...Mocker.a.defaultProps};var MockStaticArticle=MockStaticArticle_MockStaticArticleContent,createImage=__webpack_require__(42);const ArticlePage=__webpack_require__(252).default;__webpack_exports__.default={title:"Article/Page",component:ArticlePage};const ArticlePageStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticlePageStory.storyName="Default article",ArticlePageStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(481).default()},children:Object(jsx_runtime.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article";const ArticleLinkEmbedStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"article-link",data:{markup:"",url:"https://www.standard.co.uk/",image:{url:Object(createImage.b)(0,0,150),width:null,height:null,type:"jpg"},title:"London sees more than 6,200 new coronavirus cases in a week",description:"Covid-19’s grip on London is growing with more than 6,200 new cases in a week, official figures reveal today. They show there were 6,273 cases in the seven days to October 4, up from 3,965 in the previous week. Redbridge, in East London, and Richmond, in South West London, have both now gone above the 100 new cases per 100,000 in a week, a level which community leaders have previously indicated is a possible trigger for further restrictions."},id:"unfk9h48"}]},children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticleLinkEmbedStory.storyName="Article with embedded article link";const StaticArticleStory=()=>Object(jsx_runtime.jsx)(MockStaticArticle,{reqOverrides:{path:"/service/contact-evening-standard-b2454.html"},articleOverrides:{section:{name:"Contact",path:"/service/contact-evening-standard-b2454.html",sourcePath:"Contact"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});StaticArticleStory.storyName="Static Article",ArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"ArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticlePageStory",docgenInfo:ArticlePageStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),ArticleLinkEmbedStory.__docgenInfo={description:"",methods:[],displayName:"ArticleLinkEmbedStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticleLinkEmbedStory",docgenInfo:ArticleLinkEmbedStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),StaticArticleStory.__docgenInfo={description:"",methods:[],displayName:"StaticArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"StaticArticleStory",docgenInfo:StaticArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"})},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var RequestProvider=__webpack_require__(8),compose=__webpack_require__(182),Ad=__webpack_require__(256),jsx_runtime=__webpack_require__(0),ads=__webpack_require__(333);const createAdUnitPath=(page,pageType,id,cleanAmp,thirdPartyAd)=>{const hierarchy=page.hierarchy?page.hierarchy.map(({path:path,sourcePath:sourcePath})=>(sourcePath||path).split("/").slice(-1)[0]):page.section.path.split("/").slice(1),{networkId:networkId,adUnitHomepage:adUnitHomepage,thirdPartyUnitHomepage:thirdPartyUnitHomepage}=ads.a[page.adConfig.data.publication.domain],ampAppend=cleanAmp?"_amp":"";return[networkId,`${thirdPartyAd?thirdPartyUnitHomepage:adUnitHomepage}${ampAppend}`,...["hp","main"].map((unit,i)=>hierarchy[i]?`${hierarchy[i]}${ampAppend}`:`${unit}${ampAppend}`).map(unit=>"es_"+unit),""+pageType,""+id.replace(/_\d+$/,"")]};__webpack_exports__.a=Object(compose.a)(RequestProvider.withRequest,MPU=>{const MPUWithAdUnitPathArr=({id:id,cleanAmp:cleanAmp,article:article,section:section,jsGlobals:jsGlobals,thirdPartyAd:thirdPartyAd=!1,...props})=>Object(jsx_runtime.jsx)(MPU,{id:id,cleanAmp:cleanAmp,adUnitPathArr:createAdUnitPath(article||section,jsGlobals.pageType,id,cleanAmp,thirdPartyAd),...props}),{adUnitPathArr:adUnitPathArr,...propTypes}=MPU.propTypes;return MPUWithAdUnitPathArr.propTypes=propTypes,MPUWithAdUnitPathArr})(Ad.default)},252:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleContent",(function(){return ArticleContent}));var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(64),RequestProvider=__webpack_require__(8),utils_adData=__webpack_require__(902),page=__webpack_require__(903),themes=__webpack_require__(904),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),config=__webpack_require__(164),ads=__webpack_require__(92),services_article=__webpack_require__(101),util_page=__webpack_require__(335),TopBanner=__webpack_require__(336),WallPaper=__webpack_require__(216),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
  position: absolute;
  top: 0;
  left: 0;
`,ThirdParty=({id:id,sizes:sizes})=>Object(jsx_runtime.jsx)(Root,{children:Object(jsx_runtime.jsx)(MPU.a,{id:id,"force-bulk":!0,sizes:sizes})});ThirdParty.propTypes={id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string},ThirdParty.__docgenInfo={description:"",methods:[],displayName:"ThirdParty",props:{id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""}}};var Ads_ThirdParty=ThirdParty;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ThirdParty.js"]={name:"ThirdParty",docgenInfo:ThirdParty.__docgenInfo,path:"app/component/library/Article/Ads/ThirdParty.js"});const Trackonomics=({cleanAmp:cleanAmp,config:{customerId:customerId}})=>{const jsonObject={output:"https://cdn-magiclinks.trackonomics.net/client/static/amp_redirect/${customerId}.html?rand=${random}&source=SOURCE_URL&anchor_href=${href}&ref=DOCUMENT_REFERRER",vars:{customerId:customerId},attribute:{href:"(.*((amp\\.trackonomics\\.net)|(awin1\\.com)|(anrdoezrs\\.net)|(jdoqocy\\.com)|(tqlkg\\.com)|(tkqlhce\\.com)|(jdoqocy\\.com)|(kqzyfj\\.com)|(ftjcfx\\.com)|(lduhtrp\\.net)|(jqoqocy\\.com)|(Kqzfj\\.com)|(dpbolvw\\.net)|(\\/(c)\\/([0-9]+)\\/([0-9]+)\\/([0-9]+))|(2cw9\\.net)|(w6fg\\.net)|(7ymy\\.net)|(zz6n\\.net)|(a4v3ci\\.net)|(dttq\\.net)|(5oih\\.net)|(njih\\.net)|(rfvk\\.net)|(rt8x\\.net)|(43k8\\.net)|(7eer\\.net)|(uzvs\\.net)|(u44t\\.net)|(pvxt\\.net)|(vaz6fn\\.net)|(ojrq\\.net)|(mvvx\\.net)|(yx69dc\\.net)|(awb5\\.net)|(k7qtpo\\.net)|(8odi\\.net)|(mp5l\\.net)|(evyy\\.net)|(fx3vf7\\.net)|(2npn3e\\.net)|(i9pljp\\.net)|(l9vx\\.net)|(75r4\\.net)|(ulnv\\.net)|(74rjtv\\.net)|(trw6mw\\.net)|(xwrk\\.net)|(dgdrgu\\.net)|(tnu8\\.net)|(pq2o\\.net)|(snlv\\.net)|(yfb7\\.net)|(vzck\\.net)|(glg9ob\\.net)|(5f77\\.net)|(sk2bvq\\.net)|(iln8\\.net)|(7tiv\\.net)|(o93x\\.net)|(yfh6ag\\.net)|(zfrcsk\\.net)|(kwpkyy\\.net)|(6cqhdo\\.net)|(fziv\\.net)|(f9tmep\\.net)|(bwa8\\.net)|(74az\\.net)|(gnv2\\.net)|(uidg\\.net)|(i3zp\\.net)|(ssxmnr\\.net)|(l9yg\\.net)|(ixmz\\.net)|(fmtgqt\\.net)|(uydo\\.net)|(2lsp\\.net)|(oie8\\.net)|(7mh5\\.net)|(tmfhgn\\.net)|(ngi2ba\\.net)|(bs6l\\.net)|(fdf2\\.net)|(ruqo\\.net)|(bts6\\.net)|(yxku6p\\.net)|(xhuc\\.net)|(b9i7\\.net)|(vzffua\\.net)|(oteh\\.net)|(uskn\\.net)|(kxyi\\.net)|(hyyc7q\\.net)|(5ad6\\.net)|(n76h\\.net)|(quvl\\.net)|(qflm\\.net)|(8hwt\\.net)|(ig9i\\.net)|(d2lsjo\\.net)|(9quv\\.net)|(rao4\\.net)|(xikq\\.net)|(72mu89\\.net)|(xrx2ci\\.net)|(q4ew\\.net)|(j4ib\\.net)|(wrrv\\.net)|(uqzq\\.net)|(mw46\\.net)|(z6vo\\.net)|(g39l\\.net)|(2det\\.net)|(ibfwsl\\.net)|(jtlo\\.net)|(dfjeo3\\.net)|(wqi6\\.net)|(jgpt48\\.net)|(eccsr4\\.net)|(myi4\\.net)|(j4df\\.net)|(s7so\\.net)|(w2wxmz\\.net)|(64ud\\.net)|(6rfywi\\.net)|(rrmo\\.net)|(2m8f\\.net)|(fu4n\\.net)|(ryvx\\.net)|(mjs4\\.net)|(bn5x\\.net)|(7xde\\.net)|(5vju\\.net)|(7zd4df\\.net)|(xuok\\.net)|(o64jx9\\.net)|(am3t9s\\.net)|(w2t6\\.net)|(xr64\\.net)|(vayb\\.net)|(ygwk\\.net)|(ioym\\.net)|(dg6u\\.net)|(oyuv\\.net)|(otg8\\.net)|(8ujrgu\\.net)|(3qag\\.net)|(3f64ir\\.net)|(hrlo\\.net)|(fjbu\\.net)|(fqik\\.net)|(43wo\\.net)|(ncw6\\.net)|(9nz77o\\.net)|(xk3g\\.net)|(p7qb\\.net)|(mvqw\\.net)|(ntaf\\.net)|(iypa\\.net)|(rv5k\\.net)|(wjx7\\.net)|(5d3x\\.net)|(saq2\\.net)|(vegb\\.net)|(pxi6\\.net)|(b54k\\.net)|(njv3dp\\.net)|(nob9\\.net)|(t8puue\\.net)|(briy\\.net)|(bpu9\\.net)|(voq9\\.net)|(8aog\\.net)|(dodxnr\\.net)|(igs4ds\\.net)|(w9v5\\.net)|(exgl\\.net)|(3uu8\\.net)|(ei7w\\.net)|(vjggsg\\.net)|(79ic8e\\.net)|(6noy\\.net)|(zrjdwn\\.net)|(vdcy\\.net)|(8ne3\\.net)|(tk2x2c\\.net)|(2xc8\\.net)|(3tvl\\.net)|(tkjf\\.net)|(r69o\\.net)|(o5kg\\.net)|(74wq\\.net)|(zc5a\\.net)|(e8i7\\.net)|(bvrd\\.net)|(r2oa\\.net)|(uisv\\.net)|(uqhv\\.net)|(y8uw\\.net)|(o67m\\.net)|(ydow\\.net)|(mlvy\\.net)|(liln\\.net)|(ga3c\\.net)|(szey\\.net)|(2lka\\.net)|(opfm\\.net)|(rhq9ml\\.net)|(jvam\\.net)|(uqog\\.net)|(ork2\\.net)|(nwh3qn\\.net)|(znqymu\\.net)|(wsslc4\\.net)|(8kt6\\.net)|(9pctbx\\.net)|(7voo\\.net)|(ifmu\\.net)|(fzsu\\.net)|(9j4c\\.net)|(ow29pp\\.net)|(sgur\\.net)|(icjj\\.net)|(27exom\\.net)|(6ywx\\.net)|(upvt\\.net)|(4paxeq\\.net)|(ue8cqz\\.net)|(2su64p\\.net)|(wo8g\\.net)|(lvuv\\.net)|(36c4\\.net)|(vzew\\.net)|(hmqldu\\.net)|(m768hc\\.net)|(7no9\\.net)|(xuvt\\.net)|(pfm4\\.net)|(3lki\\.net)|(p73z\\.net)|(i3f2\\.net)|(7isk\\.net)|(7z5k\\.net)|(brvi\\.net)|(fi2z\\.net)|(znvt\\.net)|(tpeipe\\.net)|(imlz\\.net)|(audw\\.net)|(rqu9\\.net)|(hjef\\.net)|(ln72\\.net)|(a5fp\\.net)|(juo2\\.net)|(ir2by2\\.net)|(tf77py\\.net)|(eszb\\.net)|(2gib\\.net)|(bop8\\.net)|(nsji\\.net)|(mpye\\.net)|(hs9x\\.net)|(vocq\\.net)|(msafflnk\\.net)|(8zwg\\.net)|(58dp\\.net)|(973t\\.net)|(hu6f\\.net)|(5kd8\\.net)|(ue7a\\.net)|(i8h2\\.net)|(7orgeq\\.net)|(mp4l\\.net)|(6wfgdb\\.net)|(ayxtyv\\.net)|(h4km\\.net)|(mxu9\\.net)|(w9iork\\.net)|(ftcv\\.net)|(6eld\\.net)|(atkw\\.net)|(nkwcmr\\.net)|(vwz6\\.net)|(xovt\\.net)|(lkze4s\\.net)|(uxsi\\.net)|(wkq9\\.net)|(8utb\\.net)|(2j9x\\.net)|(kk2kau\\.net)|(iy7a\\.net)|(2xje\\.net)|(vqi8\\.net)|(keof\\.net)|(givvml\\.net)|(x57o\\.net)|(33qw\\.net)|(nbq93e\\.net)|(tlir\\.net)|(7st3op\\.net)|(l3km\\.net)|(pb6g\\.net)|(hj2i\\.net)|(8f6i\\.net)|(tql5\\.net)|(otpb\\.net)|(2gfm\\.net)|(whij\\.net)|(9zpg\\.net)|(8mz3uu\\.net)|(8hslpj\\.net)|(nrku7u\\.net)|(xg6r\\.net)|(jyae\\.net)|(o3ae\\.net)|(9vn7kv\\.net)|(rw9xb6\\.net)|(z5dw\\.net)|(wk5q\\.net)|(e9jo\\.net)|(r7kg\\.net)|(uikc\\.net)|(258o\\.net)|(eyip\\.net)|(c9ftyd\\.net)|(a9yw\\.net)|(krg4\\.net)|(et7l\\.net)|(wd2f\\.net)|(nvaz\\.net)|(ozkewk\\.net)|(5sfo\\.net)|(qumg\\.net)|(5l5h\\.net)|(cwv7\\.net)|(qbt4\\.net)|(ytuz\\.net)|(3xvk\\.net)|(zlyuo6\\.net)|(58mq\\.net)|(z27l\\.net)|(iqoc\\.net)|(eqjw\\.net)|(dbapeb\\.net)|(hgphc2\\.net)|(wnbi\\.net)|(te8rfv\\.net)|(qyiv3c\\.net)|(jv6k\\.net)|(9rwv\\.net)|(zgkv\\.net)|(p5ld\\.net)|(s4lle7\\.net)|(eqcm\\.net)|(wsktbf\\.net)|(7ema\\.net)|(2rch\\.net)|(y6mxrg\\.net)|(cmuw\\.net)|(jedg\\.net)|(wmempi\\.net)|(lmwjx3\\.net)|(zpn8dk\\.net)|(z724\\.net)|(zihf\\.net)|(i5md\\.net)|(yaub\\.net)|(syuh\\.net)|(htuy\\.net)|(pbj2\\.net)|(zvq6\\.net)|(rg35\\.net)|(8ibi\\.net)|(kbp968\\.net)|(5zd6\\.net)|(n72aat\\.net)|(aiy7\\.net)|(nnh2\\.net)|(z6rjha\\.net)|(7fdy\\.net)|(8bvm\\.net)|(qodh\\.net)|(jwpdsd\\.net)|(otegtm\\.net)|(2t23\\.net)|(i5em\\.net)|(xibx\\.net)|(xlwzq3\\.net)|(deg5\\.net)|(3anx\\.net)|(78cfvm\\.net)|(57ib\\.net)|(6dny\\.net)|(auhm\\.net)|(tm7566\\.net)|(tm7516\\.net)|(tm7569\\.net)|(tm7559\\.net)|(tm7560\\.net)|(tm7562\\.net)|(tm8534\\.net)|(lusg\\.net)|(bxvfun\\.net)|(8bga\\.net)|(22o6\\.net)|(ebml\\.net)|(9q66\\.net)|(i679\\.net)|(attfm2\\.net)|(ztk5\\.net)|(dubn\\.net)|(yuxg\\.net)|(2nm686\\.net)|(meqk\\.net)|(kd4a\\.net)|(e2rq\\.net)|(m43q4j\\.net)|(hblm3c\\.net)|(yvzx\\.net)|(vp6l\\.net)|(u97e\\.net)|(5rmr\\.net)|(qyov\\.net)|(yoxl\\.net)|(e54b\\.net)|(akum7z\\.net)|(hg7mxc\\.net)|(pdy5\\.net)|(aqpq\\.net)|(mivh\\.net)|(eqwh\\.net)|(vx83\\.net)|(vtdix3\\.net)|(xvtl\\.net)|(ulvh\\.net)|(cw3o\\.net)|(zvcr\\.net)|(eat8mo\\.net)|(ikkr9x\\.net)|(6x7g\\.net)|(bzi2vw\\.net)|(43a8\\.net)|(gfpv\\.net)|(sjv\\.io)|(pxf\\.io)|(affiliates\\.abebooks\\.com)|(go\\.corsair\\.com)|(go\\.gemvara\\.com)|(go\\.jewelry\\.com)|(go\\.web\\.plus\\.espn\\.com)|(goto\\.bodybuilding\\.com)|(goto\\.carters\\.com)|(goto\\.grocery\\.walmart\\.com)|(goto\\.kayosports\\.com\\.au)|(goto\\.target\\.com)|(goto\\.walmart\\.com)|(hpn\\.houzz\\.com)|(linkto\\.hrblock\\.com)|(partners\\.alamo\\.com)|(partners\\.enterprise\\.com)|(partners\\.hostgator\\.com)|(partners\\.hotwire\\.com)|(partners\\.nationalcar\\.com)|(refer\\.turo\\.com)|(tracking\\.maxcdn\\.com)|(tracking\\.stackpath\\.com)|(hpn\\.houzz\\.co\\.uk)|(partners\\.wantable\\.co)|(click\\.linksynergy\\.com)|(shareasale\\.com)|(shrsl\\.com)|(go\\.redirectingat\\.com)|(go\\.skimresources\\.com)|(pepperjamnetwork\\.com)|(pjtra\\.com\\/t\\/)|(gopjn\\.com\\/t\\/)|(pjatr\\.com\\/t\\/)|(pntra\\.com\\/t\\/)|(pntrs\\.com\\/t\\/)|(pntrac\\.com\\/t\\/)|(tradedoubler\\.com\\/click)|(pf\\.tradedoubler\\.com\\/pf\\/)|(track\\.webgains\\.com)|(prf\\.hn\\/click)|(avantlink\\.com\\/click)|(redirect\\.viglink\\.com)).*)"}};return cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("a",{href:"https://amp.trackonomics.net"}),Object(jsx_runtime.jsx)("amp-link-rewriter",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(jsonObject)}})})]}):Object(jsx_runtime.jsx)("script",{id:"funnel-relay-installer","data-property-id":"PROPERTY_ID","data-customer-id":customerId,src:`https://cdn-magiclinks.trackonomics.net/client/static/v2/${customerId}.js`,async:"async"})};Trackonomics.propTypes={cleanAmp:prop_types_default.a.bool,config:prop_types_default.a.object},Trackonomics.__docgenInfo={description:"",methods:[],displayName:"Trackonomics",props:{cleanAmp:{type:{name:"bool"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""}}};var Ads_Trackonomics=Trackonomics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Trackonomics.js"]={name:"Trackonomics",docgenInfo:Trackonomics.__docgenInfo,path:"app/component/library/Article/Ads/Trackonomics.js"});var Styles=__webpack_require__(3);var Article_ColumnWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 12px;
  @media ${Styles.c.tablet} {
    margin: 0 auto;
    max-width: 554px;
    padding: 0;
  }
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: ${props=>props.isService?"0 213px 0 160px":"0 16px"};
  }
`,react=__webpack_require__(4),utils_scoreboard=__webpack_require__(905),Ad=__webpack_require__(159),logo=__webpack_require__(350);const NewsletterSignup_Wrapper=styled_components_browser_esm.default.div`
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
`,NewsletterSignup=({data:data={},isMenu:isMenu=!1,configuration:configuration})=>{const newsletterConfig=configuration.hubspot,path=data.section?data.section.path:data.path;if(!newsletterConfig||!path)return null;let formData={...newsletterConfig.default,title:configuration.name,page:data.type||"NL Page",portalId:newsletterConfig.portalId};return formData.section=data.section?data.section.name:data.sections?data.sections.slice(-1)[0].name:"Newsletter",Object.keys(newsletterConfig.customSections).forEach(section=>{path.includes(section)&&(formData={...formData,...newsletterConfig.customSections[section]})}),Object(jsx_runtime.jsx)(NewsletterSignup_Wrapper,{children:Object(jsx_runtime.jsxs)(InnerWrapper,{className:isMenu?"menu-newsletter":"",children:[Object(jsx_runtime.jsx)(Logo,{dangerouslySetInnerHTML:{__html:logo.a}}),Object(jsx_runtime.jsxs)(Header,{children:[Object(jsx_runtime.jsx)("span",{children:"Sign up"})," to our ",formData.newsletterName," newsletter"]}),Object(jsx_runtime.jsxs)("form",{id:isMenu?"menu-newsletter-signup-form":"newsletter-signup-form",method:"POST","action-xhr":"/internal-api/newsletter",target:"_top",children:[Object(jsx_runtime.jsx)("input",{name:"email",type:"email","aria-label":"Email",className:"newsletter-email",placeholder:"Enter your email",required:!0}),Object(jsx_runtime.jsx)("input",{name:"opt_in",type:"hidden",readOnly:!0,value:formData.list}),Object(jsx_runtime.jsx)("input",{name:"source",type:"hidden",readOnly:!0,value:`${formData.title} in ${formData.page}`}),Object(jsx_runtime.jsx)("input",{name:"source_url",type:"hidden",readOnly:!0,value:path}),Object(jsx_runtime.jsx)("input",{name:"source_website_category",type:"hidden",readOnly:!0,value:formData.section}),Object(jsx_runtime.jsx)("input",{name:"site_id",type:"hidden",readOnly:!0,value:formData.portalId}),Object(jsx_runtime.jsx)("input",{name:"form_id",type:"hidden",readOnly:!0,value:formData.guid}),Object(jsx_runtime.jsx)("input",{type:"submit",value:"Sign up",className:"newsletter-submit"}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:`Thanks,  {{email}} has been added to our newsletter.\n            If this is the first time you have subscribed to emails from JPIMedia Ltd, the publishers of ${formData.title}, please check your inbox to verify your email address.`})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Sorry, there seem to be some issues. Please try again later."})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message",submitting:"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Submitting..."})})]})]})})};NewsletterSignup.propTypes={domain:prop_types_default.a.string,data:prop_types_default.a.object,isMenu:prop_types_default.a.bool,configuration:prop_types_default.a.object.isRequired},NewsletterSignup.__docgenInfo={description:"",methods:[],displayName:"NewsletterSignup",props:{data:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},isMenu:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},domain:{type:{name:"string"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var library_NewsletterSignup=NewsletterSignup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NewsletterSignup.js"]={name:"NewsletterSignup",docgenInfo:NewsletterSignup.__docgenInfo,path:"app/component/library/NewsletterSignup.js"});const Apester=({token:token})=>token?Object(jsx_runtime.jsx)("interaction",{className:"apester-media","data-token":token}):null;Apester.propTypes={token:prop_types_default.a.string},Apester.__docgenInfo={description:"",methods:[],displayName:"Apester",props:{token:{type:{name:"string"},required:!1,description:""}}};var Ads_Apester=Apester;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Apester.js"]={name:"Apester",docgenInfo:Apester.__docgenInfo,path:"app/component/library/Article/Ads/Apester.js"});const ArticlePrompt=()=>Object(jsx_runtime.jsx)("div",{id:"article-im-prompt"},"article-im-prompt");ArticlePrompt.__docgenInfo={description:"",methods:[],displayName:"ArticlePrompt"};var Ads_ArticlePrompt=ArticlePrompt;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ArticlePrompt.js"]={name:"ArticlePrompt",docgenInfo:ArticlePrompt.__docgenInfo,path:"app/component/library/Article/Ads/ArticlePrompt.js"});var Common=__webpack_require__(337);const AmpIframe=(props,{children:children})=>Object(jsx_runtime.jsx)("amp-iframe",{...props,children:children});AmpIframe.propTypes={...Common.a,src:prop_types_default.a.string.isRequired,srcdoc:prop_types_default.a.any,frameborder:prop_types_default.a.any,allowfullscreen:prop_types_default.a.any,allowpaymentrequest:prop_types_default.a.any,allowtransparency:prop_types_default.a.any,referrerpolicy:prop_types_default.a.any,sandbox:prop_types_default.a.string},AmpIframe.__docgenInfo={description:"",methods:[],displayName:"AmpIframe",props:{src:{type:{name:"string"},required:!0,description:""},srcdoc:{type:{name:"any"},required:!1,description:""},frameborder:{type:{name:"any"},required:!1,description:""},allowfullscreen:{type:{name:"any"},required:!1,description:""},allowpaymentrequest:{type:{name:"any"},required:!1,description:""},allowtransparency:{type:{name:"any"},required:!1,description:""},referrerpolicy:{type:{name:"any"},required:!1,description:""},sandbox:{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Iframe=AmpIframe;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Iframe.js"]={name:"AmpIframe",docgenInfo:AmpIframe.__docgenInfo,path:"app/component/library/AMP/Iframe.js"});const DefaultWrapper=styled_components_browser_esm.default.div`
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
`,PartnerAds=props=>Object(jsx_runtime.jsxs)(PartnerAds_Container,{...props,children:[Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_1",width:245,height:210,"size-key":"PARTNERADS","force-bulk":!0}),Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_2","size-key":"PARTNERADS",width:245,height:210,"force-bulk":!0})]});PartnerAds.__docgenInfo={description:"",methods:[],displayName:"PartnerAds"};var Ads_PartnerAds=PartnerAds;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/PartnerAds.js"]={name:"PartnerAds",docgenInfo:PartnerAds.__docgenInfo,path:"app/component/library/Article/Ads/PartnerAds.js"});var Taboola=__webpack_require__(115);const TaboolaBelowArticle1=({cleanAmp:cleanAmp,jsGlobals:jsGlobals})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-1",width:101,height:100,heights:["(min-width:1514px) 74%","(min-width:1096px) 81%","(min-width:801px) 90%","(min-width:581px) 102%","(min-width:420px) 119%","(min-width:390px) 361%","389%"],placement:"Below Article Thumbnails - AMP",mode:jsGlobals.taboola.ampBelowArticleMode||"thumbnails-e1"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-1",className:"taboola-below-article"});TaboolaBelowArticle1.propTypes={cleanAmp:prop_types_default.a.bool,jsGlobals:prop_types_default.a.object.isRequired},TaboolaBelowArticle1.defaultProps={cleanAmp:!1},TaboolaBelowArticle1.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle1",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""}}};var Ads_TaboolaBelowArticle1=Object(RequestProvider.withRequest)(TaboolaBelowArticle1);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle1.js"]={name:"TaboolaBelowArticle1",docgenInfo:TaboolaBelowArticle1.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle1.js"});const TaboolaBelowArticle2=({cleanAmp:cleanAmp})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-2",width:100,height:100,heights:["(min-width:1645px) 72%","(min-width:1185px) 78%","(min-width:836px) 86%","(min-width:590px) 98%","(min-width:420px) 115%","(min-width:400px) 348%","373%"],placement:"Below Article Thumbnails - AMP Below",mode:"thumbnails-e2"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-2",className:"taboola-below-article"});TaboolaBelowArticle2.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaBelowArticle2.defaultProps={cleanAmp:!1},TaboolaBelowArticle2.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle2",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaBelowArticle2=Object(RequestProvider.withRequest)(TaboolaBelowArticle2);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle2.js"]={name:"TaboolaBelowArticle2",docgenInfo:TaboolaBelowArticle2.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle2.js"});const TaboolaWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.laptop} {
    display: none;
  }
`,TaboolaDiv=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)("div",{id:"taboola-carousel-thumbnails"}))``,TaboolaInline=({cleanAmp:cleanAmp})=>Object(jsx_runtime.jsx)(TaboolaWrapper,{children:cleanAmp?Object(jsx_runtime.jsx)(Taboola.c,{id:"taboola-carousel-thumbnails",width:300,height:300,media:""+Styles.c.maxLaptop,mode:"alternating-thumbnails-d1",placement:"Carousel Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaDiv,{id:"taboola-carousel-thumbnails"})});TaboolaInline.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaInline.defaultProps={cleanAmp:!1},TaboolaInline.__docgenInfo={description:"",methods:[],displayName:"TaboolaInline",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaInline=Object(RequestProvider.withRequest)(TaboolaInline);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaInline.js"]={name:"TaboolaInline",docgenInfo:TaboolaInline.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaInline.js"});var classes=__webpack_require__(160),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),helper=__webpack_require__(28);const ImageWrapper=styled_components_browser_esm.default.figure`
  clear: both;
  margin: 0;
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
    padding: 8px;
  }
  @media ${Styles.c.laptop} {
    header & {
      padding: 8px 0;
    }
  }
`,CaptionText=styled_components_browser_esm.default.span`
  margin-right: 0.2em;
`,Copyright=styled_components_browser_esm.default.span`
  font-style: italic;
`,CaptionContrast=Object(styled_components_browser_esm.default)(Caption)`
  color: ${props=>props.theme.color.contrastLight};
`,ArticleImage=({data:data,srcSet:srcSet,theme:theme,children:children})=>{if(!data||!data.url)return null;const{align:align,url:url,caption:caption,copyright:copyright,width:width,height:height}=data,CaptionDiv=Object(helper.a)(theme,CaptionContrast,Caption);let StyledWrapper=ImageWrapper;return"left"===align&&(StyledWrapper=ImageWrapperLeft),"right"===align&&(StyledWrapper=ImageWrapperRight),Object(jsx_runtime.jsxs)(StyledWrapper,{children:[Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=968&h=645",alt:caption,height:height||645,width:width||968,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"}),children&&children,(caption||copyright)&&Object(jsx_runtime.jsxs)(CaptionDiv,{children:[caption&&Object(jsx_runtime.jsx)(CaptionText,{children:caption}),copyright&&Object(jsx_runtime.jsxs)(Copyright,{className:"copyright",children:["(",copyright,")"]})]})]})};ArticleImage.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,children:prop_types_default.a.any,theme:prop_types_default.a.string},ArticleImage.defaultProps={theme:"default",children:null},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{theme:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""}}};var Embeds_Image=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Image.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Article/Embeds/Image.js"});var striptags=__webpack_require__(906),striptags_default=__webpack_require__.n(striptags),Brightcove=__webpack_require__(907),Brightcove_default=__webpack_require__.n(Brightcove);const Brightcove_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,BrightcoveEmbed=props=>{const{data:data,theme:theme}=props;return Object(jsx_runtime.jsx)(Brightcove_Wrapper,{children:Object(jsx_runtime.jsx)(Brightcove_default.a,{data:data,"data-param-brand-colour":theme.color.primary})})};BrightcoveEmbed.propTypes={data:prop_types_default.a.any.isRequired,theme:prop_types_default.a.object.isRequired},BrightcoveEmbed.__docgenInfo={description:"",methods:[],displayName:"BrightcoveEmbed",props:{data:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"object"},required:!0,description:""}}};var Embeds_Brightcove=Object(styled_components_browser_esm.withTheme)(BrightcoveEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Brightcove.js"]={name:"BrightcoveEmbed",docgenInfo:BrightcoveEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Brightcove.js"});var Dugout=__webpack_require__(908),Dugout_default=__webpack_require__.n(Dugout);const VideoCaption_Caption=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,children:children}))`
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
`,DugoutPlayerEmbed=({data:data})=>Object(jsx_runtime.jsxs)(DugoutPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Dugout_default.a,{data:data}),data.localCaption&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.localCaption})]});DugoutPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired},DugoutPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"DugoutPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var DugoutPlayer=DugoutPlayerEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/DugoutPlayer.js"]={name:"DugoutPlayerEmbed",docgenInfo:DugoutPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/DugoutPlayer.js"});var classnames=__webpack_require__(51),classnames_default=__webpack_require__.n(classnames),uniqueId=__webpack_require__(909),uniqueId_default=__webpack_require__.n(uniqueId),withScript=__webpack_require__(163);var icons_Gallery=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#EC1A2E"><path d="M9 9c0-.552.448-1 1.001-1 .553 0 .999.448.999 1s-.446 1-.999 1C9.448 10 9 9.552 9 9zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM24 4v14H4v-3H0V0h21v4h3zM4 13V4h15V2H2v11h2zm18-7H6v10h16V6z" fill-rule="nonzero"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`,Carousel=__webpack_require__(161),Carousel_default=__webpack_require__.n(Carousel),Lightbox=__webpack_require__(912),Lightbox_default=__webpack_require__.n(Lightbox),State=__webpack_require__(338),closeIcon=__webpack_require__(259);var icons_Close=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:closeIcon.a}}))`
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
    padding-bottom: 8px;
    @media ${Styles.c.tablet} {
      padding-bottom: 16px;
    }
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
  @media ${Styles.c.tablet} {
    margin-top: 16px;
  }
  > * {
    width: calc(33.334% - 6px);
    min-height: 67px;

    &:nth-child(3) {
      display: none;
    }

    @media ${Styles.c.tablet} {
      width: calc(25% - 12px);

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
`,Gallery_Gallery=Object(styled_components_browser_esm.default)(props=>{const{className:className,data:{title:title,gallery:gallery,width:width,height:height},srcSet:srcSet,req:{path:path}}=props,[id]=Object(react.useState)(uniqueId_default()("gallery-")),galleryTheme=path.includes("/insider")?"insider":"default",ThemedGallery=Object(helper.b)(galleryTheme,GalleryDefault,{insider:GalleryInsider});return Object(jsx_runtime.jsx)(Gallery_GalleryWrapper,{className:classnames_default()("gallery",className),children:Object(jsx_runtime.jsxs)(ThemedGallery,{children:[Object(jsx_runtime.jsxs)("div",{role:"button",tabIndex:"0",on:"tap:"+id,className:"gallery-btn",children:[Object(jsx_runtime.jsxs)(Gallery_GalleryHeader,{children:[Object(jsx_runtime.jsxs)(Gallery_GalleryTitle,{children:[Object(jsx_runtime.jsx)(GalleryIcon,{}),title]}),Object(jsx_runtime.jsx)(GalleryButton,{role:"button",tabIndex:"0",children:"Open Gallery"})]}),Object(jsx_runtime.jsxs)(GalleryInner,{children:[Object(jsx_runtime.jsx)(GalleryMain,{children:null==gallery?void 0:gallery.filter(image=>image).slice(0,1).map(({data:{url:url,caption:caption,id:id}})=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=968&h=645",alt:caption,height:height||645,width:width||968,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"},id))}),Object(jsx_runtime.jsx)(GalleryThumbs,{children:null==gallery?void 0:gallery.filter(image=>image).slice(1,5).map(({data:{url:url,caption:caption,id:id}})=>Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=230&h=152",alt:caption,height:152,width:230,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"},id))})]})]}),Object(jsx_runtime.jsx)(Gallery_Lightbox,{id:id,title:title,gallery:gallery})]})})})`
  box-shadow: 0 1px 4px 0 rgba(30, 30, 28, 0.2);
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
          content: 'Show all ${props=>props.data.gallery.length}';
          color: ${props=>props.theme.color.contrastLight};
          font-size: 12px;
          position: absolute;
          top: 75%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 1;
          @media ${Styles.c.tablet} {
            font-size: 16px;
          }
        }
        &:after {
          background: transparent url(/img/icons/gallery_navigation_48.svg)
            no-repeat;
          position: absolute;
          content: '';
          width: 100%;
          height: 24px;
          background-size: contain;
          top: 30%;
          background-position: center;
          @media ${Styles.c.tablet} {
            height: 36px;
          }
          @media ${Styles.c.laptop} {
            height: 48px;
          }
        }
      }
    }
  }
`;Gallery_Gallery.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,req:prop_types_default.a.object.isRequired};const GalleryWithScript=Object(withScript.a)(Gallery_Gallery)`
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
`,GalleryView=({res:res,res:{locals:{cleanAmp:cleanAmp}},...props})=>cleanAmp?Object(jsx_runtime.jsx)(GalleryWithScript,{res:res,...props}):Object(jsx_runtime.jsx)(Gallery_Gallery,{res:res,...props});GalleryView.propTypes={...Gallery_Gallery.propTypes,cleanAmp:prop_types_default.a.bool},GalleryView.defaultTypes={cleanAmp:!1};var Embeds_Gallery=Object(RequestProvider.withRequest)(GalleryView),Instagram=__webpack_require__(914),Instagram_default=__webpack_require__.n(Instagram);const Instagram_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;
`;function InstagramEmbed(props){return Object(jsx_runtime.jsx)(Instagram_Wrapper,{children:Object(jsx_runtime.jsx)(Instagram_default.a,{...props})})}InstagramEmbed.propTypes={data:prop_types_default.a.any.isRequired},InstagramEmbed.__docgenInfo={description:"",methods:[],displayName:"InstagramEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Instagram=InstagramEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Instagram.js"]={name:"InstagramEmbed",docgenInfo:InstagramEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Instagram.js"});var JWPlayer=__webpack_require__(915),JWPlayer_default=__webpack_require__.n(JWPlayer);const VideoMeta=playerData=>{var _playerData$data,_playerData$data$extr;const widestMp4=(data=>{var _data$data,_data$data$extra;const sources=null==data||null===(_data$data=data.data)||void 0===_data$data||null===(_data$data$extra=_data$data.extra)||void 0===_data$data$extra?void 0:_data$data$extra.sources;let widestMp4,w=0;return sources&&sources.forEach(source=>{source.width>w&&"video/mp4"===source.type&&(w=source.width,widestMp4=source)}),widestMp4})(playerData),duration=null==playerData||null===(_playerData$data=playerData.data)||void 0===_playerData$data||null===(_playerData$data$extr=_playerData$data.extra)||void 0===_playerData$data$extr?void 0:_playerData$data$extr.duration;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[duration&&Object(jsx_runtime.jsx)("meta",{property:"og:video:duration",content:duration}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video",content:widestMp4.file}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:width",content:widestMp4.width}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:height",content:widestMp4.height}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:type",content:"video/mp4"})]})};VideoMeta.propTypes={data:prop_types_default.a.object.isRequired};var Head_VideoMeta=VideoMeta;const JWPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,DivForJWPlayer=styled_components_browser_esm.default.div`
  width: 100%;
  padding-top: 56.25%;
`,getPlayerIdAndType=(playerIds,props)=>{const{configuration:{jwplayerPlayerTypes:jwplayerPlayerTypes},isHero:isHero=!1,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}=props;return isCommercial?{playerId:playerIds.commercialPlayer,playerType:jwplayerPlayerTypes.commercialPlayerType}:isSensitive?{playerId:playerIds.sensitivePlayer,playerType:jwplayerPlayerTypes.sensitivePlayerType}:isHero?{playerId:playerIds.defaultPlayer,playerType:jwplayerPlayerTypes.defaultPlayerType}:{playerId:playerIds.inlinePlayer,playerType:jwplayerPlayerTypes.inlinePlayerType}},JWPlayerEmbed=props=>{const{data:data,isHero:isHero=!1,res:{locals:{cleanAmp:cleanAmp}}}=props,id=(({id:id,mediaid:mediaid})=>id||mediaid)(data),{playerId:playerId,playerType:playerType}=(props=>{const{configuration:{jwplayerPlayerIds:jwplayerPlayerIds},res:{locals:{cleanAmp:cleanAmp}}}=props;return getPlayerIdAndType(cleanAmp?jwplayerPlayerIds.amp:jwplayerPlayerIds.default,props)})(props),customParams=((props,videoId,playerType)=>{const{jsGlobals:{gs_channels:gs_channels,topictags:topictags,pageId:pageId}}=props;return`videoID%3D${videoId}%26articleId%3D${pageId&&Number.isNaN(pageId)?pageId.replace(/\D/g,""):pageId}%26gs_channels%3D${gs_channels&&gs_channels.join()}%26playertype%3D${playerType}%26topictags%3D${topictags&&topictags.join()}`})(props,id,playerType),adUnit=(props=>{const{jsGlobals:{videoAdUnitPath:videoAdUnitPath}}=props;return videoAdUnitPath})(props);if(cleanAmp||!isHero)return Object(jsx_runtime.jsxs)(JWPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)(JWPlayer_default.a,{data:{id:id,...data},playerId:playerId,playerType:playerType,useAmpIframe:!0,placeholder:!0,ampIframeSrc:"/jwplayer-amp-video-iframe.html",useIframe:!isHero,runJWPlayerSetup:!1,"data-param-customparams":customParams,"data-param-adunit":adUnit}),data.title&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.title})]});{const uid="jwplayer-hero-player",defaults=(id=>({playlist:"//cdn.jwplayer.com/v2/media/"+id,autoPause:{viewability:!0,pauseAds:!0}}))(id);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)("script",{src:`//cdn.jwplayer.com/libraries/${playerId}.js`,async:!0,onLoad:`var event = new CustomEvent("jwplayerLoaded", { detail: { uid: "${uid}", playerType: "${playerType}", data: ${JSON.stringify(defaults)}}});document.dispatchEvent(event);`,"data-jwplayer-uid":uid,"data-jwplayer-player-type":playerType,"data-jwplayer-data":JSON.stringify(defaults)}),Object(jsx_runtime.jsx)(DivForJWPlayer,{id:uid})]})}};JWPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired,res:prop_types_default.a.any.isRequired,isHero:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool,isSensitive:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},JWPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"JWPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""},res:{type:{name:"any"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""},isSensitive:{type:{name:"bool"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var Embeds_JWPlayer=Object(RequestProvider.withRequest)(JWPlayerEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/JWPlayer.js"]={name:"JWPlayerEmbed",docgenInfo:JWPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/JWPlayer.js"});var Playbuzz=__webpack_require__(916),Playbuzz_default=__webpack_require__.n(Playbuzz);const Playbuzz_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,PlayBuzzEmbed=({data:data})=>Object(jsx_runtime.jsx)(Playbuzz_Wrapper,{children:Object(jsx_runtime.jsx)(Playbuzz_default.a,{data:data})});PlayBuzzEmbed.propTypes={data:prop_types_default.a.any.isRequired},PlayBuzzEmbed.__docgenInfo={description:"",methods:[],displayName:"PlayBuzzEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Playbuzz=PlayBuzzEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Playbuzz.js"]={name:"PlayBuzzEmbed",docgenInfo:PlayBuzzEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Playbuzz.js"});var Twitter=__webpack_require__(917),Twitter_default=__webpack_require__.n(Twitter);const Twitter_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`;function TwitterEmbed({data:data}){return Object(jsx_runtime.jsx)(Twitter_Wrapper,{children:Object(jsx_runtime.jsx)(Twitter_default.a,{data:data})})}TwitterEmbed.propTypes={data:prop_types_default.a.any.isRequired},TwitterEmbed.__docgenInfo={description:"",methods:[],displayName:"TwitterEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Twitter=TwitterEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Twitter.js"]={name:"TwitterEmbed",docgenInfo:TwitterEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Twitter.js"});var Youtube=__webpack_require__(918),Youtube_default=__webpack_require__.n(Youtube);const Youtube_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,YoutubeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Youtube_Wrapper,{children:Object(jsx_runtime.jsx)(Youtube_default.a,{data:data})});YoutubeEmbed.propTypes={data:prop_types_default.a.any.isRequired},YoutubeEmbed.__docgenInfo={description:"",methods:[],displayName:"YoutubeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Youtube=YoutubeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Youtube.js"]={name:"YoutubeEmbed",docgenInfo:YoutubeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Youtube.js"});const ParagraphWrapper=styled_components_browser_esm.default.div`
  p {
    margin: 20px 0;
    line-height: 28px;
    max-width: ${props=>props.isService?"968px":"607px"};
  }
  a {
    color: ${props=>props.theme.color.primary};
  }
  &:first-child p {
    font-weight: 700;
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
`,InsiderParagraphWrapper=Object(styled_components_browser_esm.default)(ParagraphWrapper)`
  p {
    color: ${props=>props.theme.color.secondary};
    font-family: ${props=>props.theme.fontFamily.insiderSectra};
  }
  &:first-child p {
    &::first-letter {
      font-family: ${props=>props.theme.fontFamily.insiderDisplay};
      color: ${props=>props.theme.color.contrastDarker};
      line-height: 73px;
      margin: 13px 17px 0 0;
      font-size: 104px;
      float: left;
      font-weight: 500;
    }
  }
`,Markup=({data:{markup:markup},polar:polar,style:style="default",isService:isService})=>{const ThemedParagraphWrapper=Object(helper.b)(style,ParagraphWrapper,{insider:InsiderParagraphWrapper});return Object(jsx_runtime.jsx)(ThemedParagraphWrapper,{isService:isService,id:polar&&"native-content-content",children:Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})})};Markup.propTypes={data:prop_types_default.a.any.isRequired,polar:prop_types_default.a.bool,style:prop_types_default.a.string.isRequired,isService:prop_types_default.a.bool},Markup.__docgenInfo={description:"",methods:[],displayName:"Markup",props:{style:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},polar:{type:{name:"bool"},required:!1,description:""},isService:{type:{name:"bool"},required:!1,description:""}}};var Article_Markup=Markup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Markup.js"]={name:"Markup",docgenInfo:Markup.__docgenInfo,path:"app/component/library/Article/Markup.js"});const ReadMore_Wrapper=styled_components_browser_esm.default.aside`
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
`,Product=({className:className,product:{data:{title:title,image:image,body:body,vendorLink:vendorLink,vendorName:vendorName,price:price,priceComparison:priceComparison}}})=>Object(jsx_runtime.jsx)(Product_Wrapper,{children:Object(jsx_runtime.jsxs)("div",{className:Object(classes.a)(className,"product"),children:[Object(jsx_runtime.jsx)(ProductTitle,{className:"product-title",children:title}),Object(jsx_runtime.jsx)(Embeds_Image,{data:image.data,srcSet:[320,640],showCaption:!1}),Object(jsx_runtime.jsx)(ProductBody,{children:renderBody(body)}),vendorLink&&Object(jsx_runtime.jsxs)(ProductMeta,{children:[Object(jsx_runtime.jsx)(ProductLink,{rel:"noreferrer",href:vendorLink,className:"product-buy",target:"_blank",children:"Buy now"}),price&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",Object(jsx_runtime.jsx)("span",{className:"product-currency",children:"£"}),Object(jsx_runtime.jsx)("span",{className:"product-price",children:price.replace(".00","")})]}),vendorName&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[", ",Object(jsx_runtime.jsx)("span",{className:"product-source",children:vendorName})]})]}),Object(jsx_runtime.jsx)(Best_PriceComparison,{url:priceComparison})]})});Product.propTypes={className:prop_types_default.a.string,product:prop_types_default.a.array.isRequired},Product.__docgenInfo={description:"",methods:[],displayName:"Product",props:{className:{type:{name:"string"},required:!1,description:""},product:{type:{name:"array"},required:!0,description:""}}};var Best_Product=Product;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Best/Product.js"]={name:"Product",docgenInfo:Product.__docgenInfo,path:"app/component/library/Article/Best/Product.js"});const Products=({className:className,products:products})=>Object(jsx_runtime.jsx)("div",{className:className,children:products&&products.map((product,index)=>Object(jsx_runtime.jsx)(Best_Product,{product:product},index))});Products.propTypes={className:prop_types_default.a.string,products:prop_types_default.a.array.isRequired};var Best_Products=Object(styled_components_browser_esm.default)(Products)``;const Verdict=({className:className,verdict:verdict})=>Object(jsx_runtime.jsx)("div",{className:className,children:renderBody(verdict)});Verdict.propTypes={className:prop_types_default.a.string,verdict:prop_types_default.a.array.isRequired},Verdict.__docgenInfo={description:"",methods:[],displayName:"Verdict",props:{className:{type:{name:"string"},required:!1,description:""},verdict:{type:{name:"array"},required:!0,description:""}}};var Best_Verdict=Verdict;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Best/Verdict.js"]={name:"Verdict",docgenInfo:Verdict.__docgenInfo,path:"app/component/library/Article/Best/Verdict.js"});const ArticleLink_Wrapper=styled_components_browser_esm.default.div``,ArticleLink_Title=styled_components_browser_esm.default.h3`
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
`,BlockQuote=({className:className,data:data,req:{cookies:cookies}})=>{const{align:align,markup:markup,cite:cite}=data,Wrapper=(align=>{switch(align){case"left":return LeftWrapper;case"right":return RightWrapper;case"none":return CenterWrapper}return CenterWrapper})(align);return Object(jsx_runtime.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?"subscribed":""}`,children:[Object(jsx_runtime.jsx)(icons_Quote,{}),Object(jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:markup}}),cite&&Object(jsx_runtime.jsx)(Cite,{children:cite})]})};BlockQuote.propTypes={data:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired},BlockQuote.__docgenInfo={description:"",methods:[],displayName:"BlockQuote",props:{data:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_BlockQuote=Object(RequestProvider.withRequest)(BlockQuote);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/BlockQuote.js"]={name:"BlockQuote",docgenInfo:BlockQuote.__docgenInfo,path:"app/component/library/Article/Embeds/BlockQuote.js"});var Facebook=__webpack_require__(919),Facebook_default=__webpack_require__.n(Facebook);const Facebook_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;

  .article-liveblog {
    max-width: none;
  }
`,FacebookEmbed=({data:data})=>Object(jsx_runtime.jsx)(Facebook_Wrapper,{children:Object(jsx_runtime.jsx)(Facebook_default.a,{data:data})});FacebookEmbed.propTypes={data:prop_types_default.a.any.isRequired},FacebookEmbed.__docgenInfo={description:"",methods:[],displayName:"FacebookEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Facebook=FacebookEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Facebook.js"]={name:"FacebookEmbed",docgenInfo:FacebookEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Facebook.js"});var HTML=__webpack_require__(212),amp_Iframe=__webpack_require__(920),Iframe_default=__webpack_require__.n(amp_Iframe);const IframeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Iframe_default.a,{data:data});IframeEmbed.propTypes={data:prop_types_default.a.any.isRequired},IframeEmbed.__docgenInfo={description:"",methods:[],displayName:"IframeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Iframe=IframeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Iframe.js"]={name:"IframeEmbed",docgenInfo:IframeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Iframe.js"});const InfoBox_LeftWrapper=styled_components_browser_esm.default.figure`
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
`;function NumberBox(props){const{className:className,data:{align:align,title:title,markup:markup},req:{cookies:cookies}}=props,Wrapper=(align=>{switch(align){case"left":return NumberBox_LeftWrapper;case"right":return NumberBox_RightWrapper;case"centre":return CentreWrapper}return NumberBox_LeftWrapper})(align),titleSize=title?title.length:0,titleLength=titleSize>10?10:titleSize;return Object(jsx_runtime.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?" subscribed":""}`,children:[Object(jsx_runtime.jsx)(NumberBox_Number,{className:"number-length-"+titleLength,children:title}),Object(jsx_runtime.jsx)(NumberBox_Content,{dangerouslySetInnerHTML:{__html:markup}})]})}NumberBox.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,req:prop_types_default.a.object.isRequired},NumberBox.__docgenInfo={description:"",methods:[],displayName:"NumberBox",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_NumberBox=Object(RequestProvider.withRequest)(NumberBox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/NumberBox.js"]={name:"NumberBox",docgenInfo:NumberBox.__docgenInfo,path:"app/component/library/Article/Embeds/NumberBox.js"});var withCleanAmp=__webpack_require__(213);const Related_Wrapper=styled_components_browser_esm.default.aside`
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
`,RelatedArticleList=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(RelatedWithScript,{...props}):Object(jsx_runtime.jsx)(Related,{...props});RelatedArticleList.propTypes={...Related.propTypes,cleanAmp:prop_types_default.a.bool};var Embeds_Related=Object(withCleanAmp.a)(RelatedArticleList),ScoreBoard=__webpack_require__(921),ScoreBoard_default=__webpack_require__.n(ScoreBoard);const Scoreboard_Root=styled_components_browser_esm.default.div`
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
`;Table.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object};var Embeds_Table=Table,SocialShare=__webpack_require__(339),Article_SocialShare=__webpack_require__(351);const ReuseContentLink=styled_components_browser_esm.default.a`
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
`,ApesterWithToken=(WrappedComponent=Ads_Apester,()=>Object(jsx_runtime.jsx)(TokenProviderWithRequest,{children:Object(jsx_runtime.jsx)(WrappedComponent,{})}));var WrappedComponent;const embedMap={blockquote:Embeds_BlockQuote,brightcove:Embeds_Brightcove,facebook:Embeds_Facebook,gallery:Embeds_Gallery,image:Embeds_Image,H2:Embeds_MarkupEmbed,H3:Embeds_MarkupEmbed,H4:Embeds_MarkupEmbed,H5:Embeds_MarkupEmbed,H6:Embeds_MarkupEmbed,html:HTML.a,infobox:Embeds_InfoBox,iframe:Embeds_Iframe,instagram:Embeds_Instagram,listbulleted:Embeds_MarkupEmbed,listnumbered:Embeds_MarkupEmbed,numberbox:Embeds_NumberBox,playbuzz:Embeds_Playbuzz,readMore:Article_ReadMore,related:Embeds_Related,table:Embeds_Table,twitter:Embeds_Twitter,"video-youtube":Embeds_Youtube,"video-dugout":DugoutPlayer,"dugout-video":DugoutPlayer,youtube:Embeds_Youtube,"article-link":Embeds_ArticleLink},isValidToCount=markup=>{return(str=markup,str.replace(/(<([^>]+)>)/gi,"")).length>=100;var str},ContentWrapper=({adToggle:adToggle,style:style,domain:domain,article:article,cleanAmp:cleanAmp,isService:isService,configuration:configuration,isBest:isBest,req:{query:query}})=>{var _article$extra,_article$body,_content;const{extra:{products:products,verdict:verdict},hierarchy:hierarchy,liveblog:liveblog}=article,blockAds=(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds)||(null==article?void 0:article.sensitive)||isBest,isLazy=Object.keys(query).includes("__lazy__");let paragraphCount=0,mpuBottomId=0,thirdPartyId=1,mpu1Displaying=!1,holdAd=!1,thirdPartyDesktopDisplaying=!1,thirdPartyMobileDisplaying=!1,doubleAdBlocker=!1,content=null===(_article$body=article.body)||void 0===_article$body?void 0:_article$body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).reduce((acc,snippet,index)=>{const key=`${snippet.type}${index}`;switch(snippet.type){case"markup":if(!(3!==index||article.sensitive||isBest||isService)){if(2===paragraphCount&&(mpu1Displaying=!0,acc.push(Object(jsx_runtime.jsx)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,className:"pb-20"},"mpu1-markup-ad"))),acc.push(Object(jsx_runtime.jsx)(Ads_ArticlePrompt,{},"article-prompt"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)),!(3!==paragraphCount&&4!==paragraphCount||isBest||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;3===paragraphCount?(thirdPartyDesktopDisplaying=!0,thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount&&(thirdPartyMobileDisplaying=!0,thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"),acc.push(Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,thirdPartyAd:!0,"force-bulk":!isLazy})},"thirdparty0"+thirdPartyId))}return isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),acc}if(!(2!==paragraphCount||holdAd||doubleAdBlocker||isService||mpu1Displaying))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(react.createElement)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,key:"mpu1-markup-ad"}),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(!((3!==paragraphCount||thirdPartyDesktopDisplaying)&&(4!==paragraphCount||thirdPartyMobileDisplaying)&&10!==paragraphCount||isBest||holdAd||isService||doubleAdBlocker||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;return 3===paragraphCount?(thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount?(thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"):10===paragraphCount&&(thirdPartyId++,thirdPartyClasses="teads",sizeKey="THIRD_PARTY_ARTICLE_BODY"),doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,ampSizeValidation:!1,thirdPartyAd:!0,"force-bulk":!0})},"thirdparty0"+thirdPartyId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]}return 6!==paragraphCount||isBest||article.sensitive||holdAd||isService||article.isCommercial||"insider"===style||doubleAdBlocker?8!==paragraphCount||holdAd||isBest||isService||article.isCommercial||"insider"===style||blockAds||doubleAdBlocker?paragraphCount%4==0&&paragraphCount>=12&&!isService&&!holdAd&&!doubleAdBlocker?(mpuBottomId++,doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ContentWrapper_MpuWrapper,{children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"bottom_mpu_"+mpuBottomId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,className:"mobile-only","force-bulk":!0})},"bottom_mpu_"+mpuBottomId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]):(isValidToCount(snippet.data.markup)&&!holdAd?(paragraphCount++,doubleAdBlocker=!1):isValidToCount(snippet.data.markup)&&holdAd&&((paragraphCount=>paragraphCount>1&&paragraphCount<5||10===paragraphCount||6===paragraphCount||paragraphCount%4==0&&paragraphCount>=8)(paragraphCount)?((3===paragraphCount&&thirdPartyDesktopDisplaying||4===paragraphCount&&thirdPartyMobileDisplaying)&&(holdAd=!1,paragraphCount++),holdAd=!1):(holdAd=!1,paragraphCount++)),[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,polar:article.polar,isService:isService,style:style},key)]):(doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,cleanAmp?Object(jsx_runtime.jsx)(Ad.a,{id:"triple-lift",width:300,height:297,type:"triplelift",src:"https://ib.3lift.com/ttj?inv_code=esi_independent_inarticle_AMP"},"triple-lift"):Object(jsx_runtime.jsx)(ApesterWithToken,{},"apester"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]):(doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(Ads_TaboolaInline,{},"Taboola-Inline"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]);case"listbulleted":case"listnumbered":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data,isService:isService},key)]}case"video-jwplayer":return[...acc,Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data,isHero:article.isLiveBlog,isCommercial:article.isCommercial,isSensitive:article.sensitive},key)];case"image":case"gallery":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{srcSet:[320,640],data:snippet.data},key)]}case"HR":return[...acc,Object(jsx_runtime.jsx)("hr",{},key)];default:{const Component=embedMap[snippet.type];return Component?(holdAd=!0,[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]):(console.log("TODO: define component type",snippet.type),[...acc,Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},key)])}}},[]);null===(_content=content)||void 0===_content||_content.splice(Math.ceil(content.length/2),0,Object(jsx_runtime.jsx)(library_NewsletterSignup,{domain:domain,data:article,configuration:configuration},"newsletter")),(hierarchy||[]).length&&"sport"===hierarchy[0].path.split("/")[1]&&content.unshift(Object(jsx_runtime.jsx)(Ads_Fresh8,{},"Fresh8")),products&&content.push(Object(jsx_runtime.jsx)(Best_Products,{products:products},"Products")),verdict&&content.push(Object(jsx_runtime.jsx)(Best_Verdict,{verdict:verdict},"Verdict")),cleanAmp&&(content=((content,isBest)=>{const markupIndexesArr=content.map(({key:key})=>key).reduce((acc,key,index)=>(null==key?void 0:key.startsWith("markup"))?[...acc,index]:acc,[]),fourthParaIndex=markupIndexesArr[3],tenthParaIndex=markupIndexesArr[9],teadsIndexes=[...fourthParaIndex?[fourthParaIndex]:[],...tenthParaIndex?[tenthParaIndex]:[]];let thirdPartyIndex=1;return content.reduce((acc,item,index)=>{if(teadsIndexes.includes(index)){const adId="thirdparty0"+thirdPartyIndex;return thirdPartyIndex+=1,[...acc,item,Object(jsx_runtime.jsx)(ThirdPartyAmp,{id:adId,isBest:isBest},adId)]}return[...acc,item]},[])})(content,isBest));const scoreboard=Object(utils_scoreboard.scoreboardData)(article);return Object(jsx_runtime.jsxs)(ContentWrapper_Wrapper,{className:article.polar?"sponsored-article":"",children:[scoreboard&&Object(jsx_runtime.jsx)(Scoreboard,{scoreboard:scoreboard,cleamAmp:cleanAmp}),content,liveblog&&Object(jsx_runtime.jsx)(Embeds_LiveBlog,{...liveblog}),"insider"===style?Object(jsx_runtime.jsx)(SocialShare.a,{className:"insider-social-share",article:article,configuration:configuration}):!isService&&Object(jsx_runtime.jsx)(Article_ShareBarSyndication,{}),article.topics&&Object(jsx_runtime.jsx)(Article_Topics,{topics:article.topics,style:style}),"insider"!==style&&!isService&&!blockAds&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!article.isCommercial&&adToggle(ads.b)&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle1,{}),Object(jsx_runtime.jsx)(Ads_PartnerAds,{id:"partners"}),!article.isCommercial&&adToggle(ads.b)&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle2,{})]})]})};ContentWrapper.propTypes={style:prop_types_default.a.string,articleBodyConfig:prop_types_default.a.object.isRequired,adToggle:prop_types_default.a.func.isRequired,article:prop_types_default.a.object.isRequired,domain:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,req:prop_types_default.a.object.isRequired,isBest:prop_types_default.a.bool.isRequired,isService:prop_types_default.a.bool.isRequired};var Article_ContentWrapper=Object(RequestProvider.withRequest)(ContentWrapper),ArticleMeta=__webpack_require__(487);const Breadcrumb=Object(styled_components_browser_esm.default)(({className:className,hierarchy:hierarchy})=>Object(jsx_runtime.jsx)("nav",{className:className,children:hierarchy.map(({path:path,name:name},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:name},index))}))`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  text-align: left;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  padding: 16px 12px;
  @media ${Styles.c.laptop} {
    padding: 16px 0;
  }
  a {
    text-decoration: none;
    color: ${props=>props.theme.color.primary};
    &:after {
      color: ${props=>props.theme.color.contrastDarker};
      content: '›';
      margin-left: 3px;
      margin-right: 3px;
    }
    &:last-child:after {
      display: none;
    }
    &:hover {
      color: ${props=>props.theme.color.hover};
    }
  }
`;Breadcrumb.propTypes={hierarchy:prop_types_default.a.any.isRequired};var Article_Breadcrumb=Breadcrumb;const Headline_Headline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("h1",{className:className,children:children}))``;Headline_Headline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Headline=Headline_Headline,heroType=__webpack_require__(65);const PolarImage_ImageWrapper=styled_components_browser_esm.default.figure`
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
`;var Article_PersistentPlayer=Object(withCleanAmp.a)(StyledPersistentPlayer);const Hero=({className:className,hero:hero,theme:theme="default",isCommercial:isCommercial=!1,isSensitive:isSensitive=!1})=>{if(!Array.isArray(hero))return null;return(hero=>{if(!hero)return null;switch(hero.type){case heroType.e:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(Embeds_JWPlayer,{className:className,data:hero.data,isHero:!0,isCommercial:isCommercial,isSensitive:isSensitive})});case heroType.b:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(DugoutPlayer,{className:className,data:hero.data})});case heroType.a:return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:hero.data});case heroType.g:return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:hero.data});case heroType.d:return Object(jsx_runtime.jsx)(Embeds_Image,{data:hero.data,srcSet:[320,640,990],theme:theme});case heroType.c:return Object(jsx_runtime.jsx)(Embeds_Gallery,{data:hero.data,srcSet:[320,640,990]});case heroType.f:return Object(jsx_runtime.jsx)(ThirdParty_PolarImage,{});default:return null}})(Object(services_article.c)(hero))};Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{theme:{defaultValue:{value:"'default'",computed:!1},required:!1},isCommercial:{defaultValue:{value:"false",computed:!1},required:!1},isSensitive:{defaultValue:{value:"false",computed:!1},required:!1}}};var Article_Hero=Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Hero.js"]={name:"Hero",docgenInfo:Hero.__docgenInfo,path:"app/component/library/Article/Hero.js"});const Subheadline=({className:className,html:html})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:html}});Subheadline.propTypes={className:prop_types_default.a.string,html:prop_types_default.a.string.isRequired};var Article_Subheadline=Object(styled_components_browser_esm.default)(Subheadline)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
`;const Header_ContentWrapper=styled_components_browser_esm.default.div``,Inner=styled_components_browser_esm.default.div`
  margin: 0 auto;
  @media ${Styles.c.tablet} and ${Styles.c.maxLaptop} {
    width: ${props=>props.isService?"554px":"auto"};
  }
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: ${props=>props.isService?"0 213px 0 160px":"0 16px"};
    box-sizing: border-box;
  }
`,VideoHeader=styled_components_browser_esm.default.header`
  background: ${props=>props.theme.color.contrastDarker};
  ${Header_ContentWrapper} {
    margin: 0 12px;
    @media ${Styles.c.laptop} {
      margin: 0;
    }
  }
  ${Article_Breadcrumb} {
    color: ${props=>props.theme.color.contrastLight};
    a {
      color: ${props=>props.theme.color.contrastLight};
      &:after {
        color: ${props=>props.theme.color.contrastLight};
      }
    }
  }
  ${Article_Headline} {
    color: ${props=>props.theme.color.contrastLight};
    font-size: 28px;
    margin: 0;
    padding: 20px 0 16px;
    line-height: 32px;
    @media ${Styles.c.tablet} {
      font-size: 40px;
      line-height: 44px;
    }
    @media ${Styles.c.laptop} {
      font-size: 48px;
      line-height: 52px;
    }
  }
  ${Article_Subheadline} {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    color: ${props=>props.theme.color.contrastLight};
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding-bottom: 16px;
    @media ${Styles.c.tablet} {
      font-size: 19px;
      line-height: 23px;
    }
  }
`,ImageHeader=styled_components_browser_esm.default.header`
  ${Header_ContentWrapper} {
    margin: 0 12px;
    @media ${Styles.c.tablet} {
      margin: ${props=>props.isService?"0":"0 12px"};
    }
    @media ${Styles.c.laptop} {
      margin: 0;
    }
  }
  ${Article_Breadcrumb} {
    @media ${Styles.c.tablet} {
      padding: ${props=>props.isService?"16px 0px":"16px 12px"};
    }
    @media ${Styles.c.laptop} {
      padding: 16px 0;
    }
  }
  ${Article_Headline} {
    color: ${props=>props.theme.color.contrastDarker};
    font-size: 28px;
    margin: 0;
    padding-bottom: 16px;
    @media ${Styles.c.tablet} {
      font-size: 40px;
      line-height: 44px;
    }
    @media ${Styles.c.laptop} {
      font-size: 48px;
      line-height: 52px;
      padding-bottom: ${props=>props.isService?"12px":"16px"};
    }
  }
  ${Article_Subheadline} {
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding-bottom: 16px;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    @media ${Styles.c.tablet} {
      line-height: 23px;
      font-size: 19px;
    }
  }
`,Header_Header=props=>{var _article$hero,_article$hero$,_article$hero2,_article$hero2$,_article$hero3,_article$hero3$;const{article:article,isService:isService}=props,isVideo="brightcove"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)||"youtube"===(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||"jw_player"===(null===(_article$hero3=article.hero)||void 0===_article$hero3||null===(_article$hero3$=_article$hero3[0])||void 0===_article$hero3$?void 0:_article$hero3$.type),ThemedHeader=Object(helper.b)(isVideo?"video":"image",ImageHeader,{video:VideoHeader});return Object(jsx_runtime.jsx)(ThemedHeader,{isService:isService,children:Object(jsx_runtime.jsxs)(Inner,{isService:isService,children:[Object(jsx_runtime.jsx)(Article_Breadcrumb,{hierarchy:article.hierarchy}),isVideo&&Object(jsx_runtime.jsx)(Article_Hero,{hero:article.hero,isCommercial:article.isCommercial,isSensitive:article.isSensitive}),Object(jsx_runtime.jsxs)(Header_ContentWrapper,{children:[Object(jsx_runtime.jsx)(Article_Headline,{children:article.title}),article.lead&&Object(jsx_runtime.jsx)(Article_Subheadline,{html:article.lead}),!isService&&Object(jsx_runtime.jsx)(ArticleMeta.default,{theme:isVideo?"dark":"contrast"})]}),!isVideo&&Object(jsx_runtime.jsx)(Article_Hero,{hero:article.hero})]})})};Header_Header.propTypes={article:prop_types_default.a.object.isRequired,isService:prop_types_default.a.bool};var Article_Header=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Header_Header))`
  display: flex;
  flex-direction: column;
`,ArticleCapsule=__webpack_require__(77),Insider_ArticleMeta=__webpack_require__(343);const Insider_Header_ContentWrapper=styled_components_browser_esm.default.div`
  text-align: center;
`,InsiderHeadline=Object(styled_components_browser_esm.default)(Article_Headline)`
  color: ${props=>props.theme.color.contrastDarker};
  font-size: 30px;
  font-family: ${props=>props.theme.fontFamily.insiderDisplay};
  font-weight: 700;
  line-height: 37px;
  margin: 0;
  padding-bottom: 16px;
  @media ${Styles.c.tablet} {
    font-size: 35px;
    line-height: 43px;
  }
`,InsiderSubheadline=Object(styled_components_browser_esm.default)(Article_Subheadline)`
  font-size: 18px;
  line-height: 22px;
  color: ${props=>props.theme.color.fontMedium};
  font-family: ${props=>props.theme.fontFamily.insiderFine};
  font-weight: normal;
  margin: 0;
  padding-bottom: 16px;
  @media ${Styles.c.tablet} {
    font-size: 24px;
    line-height: 30px;
  }
`,HeaderWrapper=styled_components_browser_esm.default.header`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  box-sizing: border-box;
  @media ${Styles.c.laptop} {
    > figure {
      margin: 0 16px;
    }
  }
  ${ArticleCapsule.a} {
    color: ${props=>props.theme.color.fontMedium};
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: ${props=>props.theme.fontSize.insiderCapsule};
    margin: 8px;
    text-transform: unset;
    line-height: 1.25;
    text-align: left;
    @media ${Styles.c.tablet} {
      text-align: center;
    }
  }
  figcaption {
    position: relative;
    text-align: left;
    @media ${Styles.c.tablet} {
      position: absolute;
      z-index: 10;
      margin-left: 114px;
      margin-top: -98px;
      padding: 0;
    }
    @media ${Styles.c.laptop} {
      margin-left: 74px;
      margin-top: -74px;
    }
  }
`,Header_ImageHeader=styled_components_browser_esm.default.div`
  padding: 0 12px;
  @media ${Styles.c.tablet} {
    width: calc(100% - 214px);
    margin: 0 auto;
    position: relative;
    top: -107px;
    margin-bottom: -107px;
    background: #fff;
    padding: 34px 8px 16px;
    box-sizing: border-box;
  }
  @media ${Styles.c.laptop} {
    width: calc(100% - 164px);
    top: -82px;
    margin-bottom: -82px;
    padding: 34px 82px 16px;
  }
  ${ArticleCapsule.a} {
    text-align: center;
  }
`,Header_VideoHeader=styled_components_browser_esm.default.div`
  background: ${props=>props.theme.color.contrastDarker};
  margin: 0 auto;
  ${Insider_Header_ContentWrapper} {
    padding: 0 12px;
  }
  ${ArticleCapsule.a}, ${InsiderHeadline}, ${InsiderSubheadline} {
    color: ${props=>props.theme.color.contrastLight};
    margin: 8px 0;
  }
  ${Insider_ArticleMeta.default} * {
    color: ${props=>props.theme.color.contrastLight};
  }
`,Header_GalleryHeader=styled_components_browser_esm.default.div`
  padding: 0 12px;
`,Insider_Header_Header=props=>{var _article$hero,_article$hero$,_article$hero2,_article$hero2$;const{article:article,article:{hierarchy:hierarchy,title:title,lead:lead,hero:hero}}=props,isGallery="gallery"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type),isVideo="jw_player"===(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type),ThemedHeader=isGallery?Header_GalleryHeader:Object(helper.b)(isVideo?"video":isGallery?"gallery":"image",Header_ImageHeader,{video:Header_VideoHeader});return Object(jsx_runtime.jsxs)(HeaderWrapper,{children:[!isGallery&&!isVideo&&Object(jsx_runtime.jsx)(Article_Hero,{hero:hero}),Object(jsx_runtime.jsxs)(ThemedHeader,{children:[isVideo&&Object(jsx_runtime.jsx)(Article_Hero,{hero:hero,isCommercial:article.isCommercial,isSensitive:article.isSensitive}),Object(jsx_runtime.jsxs)(Insider_Header_ContentWrapper,{children:[Object(jsx_runtime.jsx)(ArticleCapsule.a,{sections:hierarchy}),Object(jsx_runtime.jsx)(InsiderHeadline,{children:title}),Object(jsx_runtime.jsx)(InsiderSubheadline,{html:lead}),Object(jsx_runtime.jsx)(Insider_ArticleMeta.default,{})]})]}),isGallery&&Object(jsx_runtime.jsx)(Article_Hero,{hero:hero})]})};Insider_Header_Header.propTypes={article:prop_types_default.a.object.isRequired,style:prop_types_default.a.any};var Insider_Header=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Insider_Header_Header))`
  display: flex;
  flex-direction: column;
`,Frame=__webpack_require__(214),Sidebar=__webpack_require__(349);const setAdData=(position,article)=>{const adConfig=config.a.getAdConfig();if(!article.sections)return;let adData=Object.assign({},adConfig.ampAd);return adData.json=JSON.parse(adData.json),adData.json.targeting={pos:[position],test:Object(utils_adData.getTestTargeting)(),pageid:Object(page.getPageId)(article)},adData.json.targeting.pagetype="article",adData.json.targeting.section=article&&article.sections[0].path.split("/"),adData["data-slot"]+=`${article.sidebar&&article.sidebar.data&&article.sidebar.data.publication.addUnitId}/${article.sections[0].name.toLowerCase().replace(/\s/g,"-")}`,adData.json=JSON.stringify(adData.json),adData},ArticleContent=styled_components_browser_esm.default.article`
  background-color: ${props=>props.theme.color.contrastLight};
`,Article=props=>{const{className:className,req:{path:path},article:article,cleanAmp:cleanAmp,jsGlobals:jsGlobals,configuration:configuration}=props,adToggle=article.adConfig?Object(ads.e)(article):()=>{},adToggleByType=article.adConfig?Object(ads.f)(article):()=>{},articleType=Object(services_article.c)(article.hero).type,articleStyle=Object(themes.getArticleTheme)(path,configuration),ThemedHeader=Object(helper.b)(articleStyle,Article_Header,{insider:Insider_Header}),isBest=(article.sections?article.sections[0]:{}).path.includes("/shopping/esbest"),isService=article.articleTypes.some(({name:name})=>"Service"===name),hasSideBar=!cleanAmp&&!isService;return Object(jsx_runtime.jsxs)(Frame.a,{isService:isService,className:className,style:articleStyle,isBest:isBest,children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(util_page.a)({article:article},configuration.name)}),article.structuredData&&Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(article.structuredData.article)})||"",Object(jsx_runtime.jsx)("meta",{property:"og:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:configuration.baseUrl+article.path}),Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:article.lead&&article.lead.replace(/"/g,"&quote;")}),article.hero&&article.hero.filter(({type:type})=>"image"===type).map((media,index)=>{if(0===index)return[Object(jsx_runtime.jsx)("meta",{property:"og:image",content:configuration.baseUrl+media.data.url},index+"ogImage"),Object(jsx_runtime.jsx)("meta",{property:"og:image:secure_url",content:configuration.baseUrl+media.data.url},index+"ogImageSecure")]}).filter(x=>!!x),cleanAmp&&isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-link-rewriter",src:"https://cdn.ampproject.org/v0/amp-link-rewriter-0.1.js"})]}),Object(jsx_runtime.jsxs)(ArticleContent,{children:[article.adConfig&&!isService&&adToggle(ads.c)&&Object(jsx_runtime.jsx)(TopBanner.a,{width:"320",height:"50",cleanAmp:cleanAmp,data:setAdData("top",article)}),!cleanAmp&&!isBest&&"insider"!==articleStyle&&Object(jsx_runtime.jsx)(Ads_ThirdParty,{id:"thirdparty_05",sizes:"9x9"}),!cleanAmp&&!isBest&&adToggle(ads.a)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),!cleanAmp&&!isBest&&adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),Object(jsx_runtime.jsx)(ThemedHeader,{article:article,type:articleType,isService:isService}),Object(jsx_runtime.jsxs)(Article_ColumnWrapper,{isService:isService,children:[Object(jsx_runtime.jsx)(Article_ContentWrapper,{className:"article-content",adToggle:adToggle,articleBodyConfig:adToggleByType("ArticleBody"),style:articleStyle,isBest:isBest,isService:isService}),hasSideBar&&Object(jsx_runtime.jsx)(Sidebar.a,{sections:article.sections,sidebar:article.sidebar,configuration:configuration,adTargeting:jsGlobals.adTargeting,article:article,isBest:isBest})]})]}),isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)(Ads_Trackonomics,{cleanAmp:cleanAmp,config:configuration.trackonomics})]})};Article.propTypes={className:prop_types_default.a.any,req:prop_types_default.a.object.isRequired,article:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Article.__docgenInfo={description:"",methods:[],displayName:"Article",props:{className:{type:{name:"any"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""},article:{type:{name:"object"},required:!0,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};__webpack_exports__.default=Object(RequestProvider.withRequest)(Article);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Article.js"]={name:"Article",docgenInfo:Article.__docgenInfo,path:"app/component/pages/Article.js"})},256:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Ad=__webpack_require__(159),react=__webpack_require__(4),RequestProvider=__webpack_require__(8),config_config=__webpack_require__(164);const ConfigProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{const adProps=Object.keys(Ad.a.propTypes),config=config_config.a.getConfig();return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),config:{vendors:{...config.indexExchange?{indexexchange:{SITE_ID:config.indexExchange.siteId}}:{},...config.criteo?{criteo:{LINE_ITEM_RANGES:config.criteo.lineItemRanges,NETWORK_ID:config.criteo.networkId}}:{}},urls:["https://esi.amp.permutive.com/rtc?type=doubleclick"],timeoutMillis:750}})});const AmpStickyAd=({children:children})=>Object(jsx_runtime.jsx)("amp-sticky-ad",{layout:"nodisplay",children:children});AmpStickyAd.propTypes={children:prop_types_default.a.element},AmpStickyAd.__docgenInfo={description:"",methods:[],displayName:"AmpStickyAd",props:{children:{type:{name:"element"},required:!1,description:""}}};var StickyAd=AmpStickyAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/StickyAd.js"]={name:"AmpStickyAd",docgenInfo:AmpStickyAd.__docgenInfo,path:"app/component/library/AMP/StickyAd.js"});const TargetingJSONProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{var _ref,_article$hero,_article$hero$,_article$hero2,_article$hero2$;const adProps=Object.keys(Ad.a.propTypes),{article:article,section:section,jsGlobals:{topictags:topictags}={}}=props.res.locals;return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),json:{targeting:{tile:props.id,gs_channels:(null==article?void 0:article.grapeshot)||(null==section?void 0:section.grapeshot)||[],docFormat:"amp",pagetype:"section",topictags:topictags,...article?{article:null===(_ref=article.remoteId||article.id)||void 0===_ref?void 0:_ref.replace(/\D/g,""),pagetype:"jw_player"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)?"video":(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||""}:{}}}})});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,AdIndex=styled_components_browser_esm.default.div`
  display: none;
`,AugmentedAmpAd=(WrappedComponent=>{const WrappedComponentWithAMPSickyAd=({ampStickyAd:ampStickyAd,...props})=>ampStickyAd?Object(jsx_runtime.jsx)(StickyAd,{children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}):Object(jsx_runtime.jsx)(WrappedComponent,{...props});return WrappedComponentWithAMPSickyAd.propTypes={...WrappedComponent.propTypes},WrappedComponentWithAMPSickyAd})((WrappedComponent=>props=>Object(jsx_runtime.jsx)(TargetingJSONProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))((WrappedComponent=Ad.a,props=>Object(jsx_runtime.jsx)(ConfigProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))));var WrappedComponent;const Ad_Ad=props=>{const{cleanAmp:cleanAmp,id:id,className:className,refreshAtIndex:refreshAtIndex,refreshStateId:refreshStateId,sizes:sizes,height:height,width:width,isVideo:isVideo,ampSizes:ampSizes,adUnitPathArr:adUnitPathArr,ampStickyAd:ampStickyAd,ampRefresh:ampRefresh,ampSizeValidation:ampSizeValidation}=props;return Object(jsx_runtime.jsx)(Wrapper,{className:className,children:cleanAmp?Object(jsx_runtime.jsx)(AugmentedAmpAd,{id:id,width:width,height:height,type:"doubleclick",dataSlot:"/"+adUnitPathArr.join("/"),"data-multi-size":ampSizes,ampSizeValidation:ampSizeValidation,ampStickyAd:ampStickyAd,ampSizes:ampSizes,ampRefresh:ampRefresh}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[refreshStateId&&Object(jsx_runtime.jsx)(AdIndex,{id:id+"_adIndex","amp-bind-text":`floor(${refreshStateId}.currentIndex / ${refreshAtIndex})`}),Object(jsx_runtime.jsx)("div",{"data-mpu":!0,"data-is-video":isVideo,"data-tile-name":id,"data-ad-unit-path":"/"+adUnitPathArr.join("/"),"data-sizes":sizes,"data-desktop-sizes":props["desktop-sizes"],"data-tablet-sizes":props["tablet-sizes"],"data-mobile-sizes":props["mobile-sizes"],"data-size-key":props["size-key"],"data-refresh-check":!!refreshStateId,"data-force-bulk":props["force-bulk"]})]})})};Ad_Ad.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string,"desktop-sizes":prop_types_default.a.string,"tablet-sizes":prop_types_default.a.string,"mobile-sizes":prop_types_default.a.string,"size-key":prop_types_default.a.string,refreshAtIndex:prop_types_default.a.number,refreshStateId:prop_types_default.a.string,height:prop_types_default.a.number,width:prop_types_default.a.number,isVideo:prop_types_default.a.bool,"force-bulk":prop_types_default.a.bool,ampSizes:prop_types_default.a.string,ampRefresh:prop_types_default.a.number,adUnitPathArr:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,ampStickyAd:prop_types_default.a.bool,ampSizeValidation:prop_types_default.a.bool},Ad_Ad.defaultProps={cleanAmp:!1,refreshAtIndex:1,height:250,width:300,ampStickyAd:!1,ampSizeValidation:!0,isVideo:!1},Ad_Ad.__docgenInfo={description:"",methods:[],displayName:"Ad",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},refreshAtIndex:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"250",computed:!1},type:{name:"number"},required:!1,description:""},width:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:""},ampStickyAd:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ampSizeValidation:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""},"desktop-sizes":{type:{name:"string"},required:!1,description:""},"tablet-sizes":{type:{name:"string"},required:!1,description:""},"mobile-sizes":{type:{name:"string"},required:!1,description:""},"size-key":{type:{name:"string"},required:!1,description:""},refreshStateId:{type:{name:"string"},required:!1,description:""},"force-bulk":{type:{name:"bool"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},adUnitPathArr:{type:{name:"arrayOf",value:{name:"string"}},required:!0,description:""}}};__webpack_exports__.default=Ad_Ad;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Ad.js"]={name:"Ad",docgenInfo:Ad_Ad.__docgenInfo,path:"app/component/library/Ads/Ad.js"})},258:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"More",type:"More",labelText:"More",labelLink:"/news",linkTitle:"More",linkUrl:"/news"})},259:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"/></svg>\n'},28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentThemeProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ComponentThemesProvider}));const ComponentThemeProvider=(theme,Dark,Default)=>"dark"===theme?Dark:Default,ComponentThemesProvider=(theme,Default,themes)=>themes[theme]||Default},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return sectionColours})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themes})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"c",(function(){return device})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breakPoints}));var styled_components_browser_esm=__webpack_require__(2);const themes={default:{fontFamily:{primaryFont:"'Standard Text', serif",secondaryFont:"'Standard Sans', sans-serif",insiderDisplay:"GTSectraDisplay",insiderFine:"GTSectraFine",insiderSectra:"GTSectra",insiderCapsule:"StandardSansCond"},fontImports:"\n // Standard Text\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-RegularWEB.woff2') format('woff2'),\n    url('/fonts/StandardText-RegularWEB.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-ItalicWEB.woff2') format('woff2'),\n    url('/fonts/StandardText-ItalicWEB.woff') format('woff');\n    font-weight: normal;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldWEB.woff2') format('woff2'),\n    url('/fonts/StandardText-BoldWEB.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldItalicWEB.woff2') format('woff2'),\n    url('/fonts/Standard-ExtraboldItalicWEB.woff') format('woff');\n    font-weight: bold;\n    font-style: italic;\n  }\n  // Standard Sans\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-RegularWEB.woff') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-RegularWEB.woff') format('woff');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 500;\n    font-style: normal;\n    src: url('/fonts/StandardSans-MediumWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-MediumWEB.woff') format('woff');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-BoldWEB.woff') format('woff');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-BoldWEB.woff') format('woff');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-ExtraboldWEB.woff') format('woff');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-ExtraboldWEB.woff') format('woff');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: normal;\n    src: url('/fonts/StandardSans-LightWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-LightWEB.woff') format('woff');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: italic;\n    src: url('/fonts/StandardSans-ItalicWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-ItalicWEB.woff') format('woff');\n  }\n   @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: italic;\n    src: url('/fonts/StandardSans-LightItalicWEB.woff2') format('woff2'),\n    url('/fonts/StandardSans-LightItalicWEB.woff') format('woff');\n  }\n  // GTSectraDisplay\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Display-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium-Italic.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Display-Medium-Italic.woff') format('woff');\n    font-weight: 500;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Bold.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Display-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n  }\n  // GTSectraFine\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Regular.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Fine-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Medium.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Fine-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Bold.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Fine-Bold.woff') format('woff');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n  font-family: 'GTSectra';\n  src: url('/fonts/GT-Sectra-Regular.woff2') format('woff2'),\n  url('/fonts/GT-Sectra-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n }\n\n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Medium.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Bold.woff2') format('woff2'),\n    url('/fonts/GT-Sectra-Bold.woff') format('woff');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-RegularWEB.woff2') format('woff2'),\n    url('/fonts/StandardSansCond-RegularWEB.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-LightWEB.woff2') format('woff2'),\n    url('/fonts/StandardSansCond-LightWEB.woff') format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n",fontSize:{list:"14px",insiderCapsule:"16px"},fontWeight:{thin:300,normal:500,bold:700,black:900},color:{primary:"#DC062B",secondary:"#111",headlineBg:"#f29100",divider:"#f5f5f5",hover:"#b00522",fontTitle:"#3A3A3A",fontCapsule:"#8f8f8e",fontMedium:"#4b4b49",contrastLight:"#FFF",contrastLightHover:"#f8cdd5",contrastGrey:"#d6d6d6",contrastDark:"#202020",contrastDarker:"#1e1e1c",icons:"#787877",bgGrey:"#ececec",formGrey:"#bcbcbb",formFocus:"#276fbf",formSuccess:"#157f1f",formError:"#a20021",navGrey:"#e9e9e8",standardGrey:"#bdbdbd",standardBlue:"#303f9f",galleryDarkGrey:"#4b4b49",galleryBlack:"#353533"}}},sectionColours={news:"303F9F",showbiz:"EC2327",go:"F70A9A",lifestyle:"00ABE6",sport:"F29100",fashion:"822081",shopping:"FF59C6",business:"A21043",comment:"00A9C0"},breakPoints={mobileS:320,mobileM:375,mobileL:425,tabletS:595,tablet:768,laptop:1e3,desktop:2560},minWidth=val=>`(min-width: ${val}px)`,maxWidth=val=>`(max-width: ${val-1}px)`,device={mobileS:minWidth(breakPoints.mobileS),mobileM:minWidth(breakPoints.mobileM),mobileL:minWidth(breakPoints.mobileL),tabletS:minWidth(breakPoints.tabletS),tablet:minWidth(breakPoints.tablet),laptop:minWidth(breakPoints.laptop),desktop:minWidth(breakPoints.desktop),maxMobileS:maxWidth(breakPoints.mobileS),maxMobileM:maxWidth(breakPoints.mobileM),maxMobileL:maxWidth(breakPoints.mobileL),maxTabletS:maxWidth(breakPoints.tabletS),maxTablet:maxWidth(breakPoints.tablet),maxLaptop:maxWidth(breakPoints.laptop),maxDesktop:maxWidth(breakPoints.desktop),adBreakpointMedium:"(min-width: 1300px)",adBreakpointLarge:"(min-width: 1600px)"},GlobalStyles=styled_components_browser_esm.createGlobalStyle`
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
`},328:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NewslettersConfig}));const NewslettersConfig={"standard.co.uk":{_es_news__benefits:{regSourceNewsletter:"_ES_news__Benefits",section:"ES NEWS",title:"ES NEWS",description:"The biggest and best news stories from London and around the world emailed to you every day. Evening Standard News email features the top five stories of the day plus a collection of articles selected just for you.",label:"From breaking news to in-depth investigations and exclusives - be the first to know about the stories that really matter.",type:"news",regTitle:"NEWS",imageSrc:"/img/es-news-newsletter.png"},_es_food__benefits:{regSourceNewsletter:"_ES_food__Benefits",section:"ES FOOD",title:"ES FOOD",description:"Sign up to our Evening Standard Food newsletter for the latest restaurant news and reviews, recipes and food trends from London and beyond.",label:"We we&#39;ll deliver the tastiest content direct to your inbox every Tuesday lunchtime, from bars to brasseries, burgers and Burgundy.",type:"news",regTitle:"FOOD",imageSrc:"/img/es-food-news.png"},_es_weekender__benefits:{regSourceNewsletter:"_ES_weekender__Benefits",section:"ES WEEKENDER",title:"ES WEEKENDER",description:"Sign up to our Weekender newsletter for the latest competitions, offers and giveaways from Evening Standard.",label:"Every Thursday, we bring you a newsletter packed with opportunities to win top prizes - from holidays and theatre tickets to exclusive experiences, plus offers from your favourite brands.",type:"news",regTitle:"WEEKENDER",imageSrc:"/img/es-weekender-news.png"},_es_football__benefits:{regSourceNewsletter:"_ES_football__Benefits",section:"ES FOOTBALL",title:"ES FOOTBALL",description:"Receive the top football news from inside the capital every Monday and Friday with Evening Standard&#39;s football news update.",label:"Evening Standard Football tackles the talking points from London&#39;s biggest football stories, bringing you closer to the action with a brand you can trust.</br>Live, comment, discussion and debate. We&#39;ve got the whole game covered.",type:"news",regTitle:"FOOTBALL",imageSrc:"/img/es-football-news.png"},_es_lifestyle__benefits:{regSourceNewsletter:"_ES_lifestyle__Benefits",section:"ES LIFESTYLE",title:"ES LIFESTYLE",description:"Get the latest fashion, food, fitness and travel updates straight to your inbox every Monday from Evening Standard Lifestyle team.",label:"With interviews, trends, galleries and shoppable guides all included - The Lifestyle Edit is your way to stay in the know. </br> See you next Monday!",type:"news",regTitle:"LIFESTYLE",imageSrc:"/img/es-lifestyle-news.png"},_es_insider__benefits:{regSourceNewsletter:"_ES_Insider__Benefits",section:"ES INSIDER",title:"ES INSIDER",description:"The inside track on the coolest people, the most exclusive places and the hottest new luxury launches delivered straight to your inbox.",label:"With royal news, interviews and celebrity lifestyle trends, our dedicated trans-Atlantic team will help you stay ahead of the curve on all things VIP.",type:"news",regTitle:"",imageSrc:"/img/es-insider-news.png"}}}},329:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"2 articles",type:"ArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 2",heroType:"video",live:!0}),...articleOverrides}]})},33:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83);class MockArticleContent extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.a)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.d)(props.articleOverrides),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockArticleContent.propTypes={articleOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockArticleContent.defaultProps={articleOverrides:{},reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockArticleContent},330:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"4 articles",type:"ArticleX4",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 2"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 3",heroType:"video"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 4",heroType:"video"}),...articleOverrides}]})},331:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"Hero Article",type:"HeroArticle",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"Hero article headline"}),...articleOverrides}]})},332:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"Title",type:"Title",labelText:"This is a section title component",labelLink:null,commercialBadgeTerm:null,commercialBadgeImage:null,commercialBadgeLink:null})},333:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return size})),__webpack_require__.d(__webpack_exports__,"a",(function(){return publicationConfig}));var _constants_publication__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(127),_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);const fullBanner=[970,250],tabletBanner=[728,90],mobileBanner=[320,50],gutterSmall=[120,600],gutterMedium=[160,600],doubleMPU=[300,600],singleMPU=[300,250],thirdParty=[280,290],thirdParty1x1=[1,1],DOUBLE_OR_SINGLES_MPU={from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[singleMPU,doubleMPU],conditionalAd:{if:singleMPU,then:singleMPU,tileNameExtra:"_bottom"}},size={TOP_BANNER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[fullBanner,tabletBanner]}],BOTTOM_BANNER:[{from:0,supportedSizes:[mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner,mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],GUTTER:[{from:0,supportedSizes:[gutterSmall]},{from:1300,supportedSizes:[gutterSmall,gutterMedium]},{from:1600,supportedSizes:[gutterSmall,gutterMedium,doubleMPU]}],SKIN:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[[4,4]]}],PARTNERADS:[{from:0,supportedSizes:[[245,210]]}],SINGLE_MPU:[{from:0,supportedSizes:[singleMPU]}],SINGLE_MPU_ONLY_MOBILE:[{from:0,supportedSizes:[singleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SINGLE_MPU_ONLY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU]}],DOUBLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]}],DOUBLE_OR_SINGLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],DOUBLE_MPU_EXTRA:[{from:0,supportedSizes:[singleMPU,doubleMPU]},DOUBLE_OR_SINGLES_MPU],DOUBLE_MPU_EXTRA_NOT_MOBILE:[{from:0,supportedSizes:[singleMPU]},DOUBLE_OR_SINGLES_MPU],THIRD_PARTY:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_NOT_MOBILE:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_ARTICLE_BODY:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],THIRD_PARTY_ARTICLE_BODY_MOBILE:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],THIRD_PARTY_ARTICLE_BODY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],GALLERY_MPU:[{from:0,supportedSizes:[]},{...DOUBLE_OR_SINGLES_MPU,from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop}],INSIDER_BANNER:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[tabletBanner,fullBanner]}]},publicationConfig=(_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,{[_constants_publication__WEBPACK_IMPORTED_MODULE_0__.a]:{networkId:"71347885",adUnitHomepage:"_main_eveningstandard",thirdPartyUnitHomepage:"_partner_eveningstandard"}})},335:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return pageTitle}));var ramda__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(181),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(87);const pageTitle=({article:article,section:section},siteName)=>{const title=Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("title",article);if(title)return title+" | "+siteName;const sectionName=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","name"])(section);return sectionName?sectionName+" | "+siteName:void 0===article&&void 0===section?"Page not found | "+siteName:siteName}},336:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_Ad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(256),_MPU__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
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
`;__webpack_exports__.a=StyledTopBanner},337:function(module,__webpack_exports__,__webpack_require__){"use strict";var _collection__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66);const commonProps={width:_collection__WEBPACK_IMPORTED_MODULE_0__.j,height:_collection__WEBPACK_IMPORTED_MODULE_0__.b,layout:_collection__WEBPACK_IMPORTED_MODULE_0__.d,sizes:_collection__WEBPACK_IMPORTED_MODULE_0__.i,heights:_collection__WEBPACK_IMPORTED_MODULE_0__.c,media:_collection__WEBPACK_IMPORTED_MODULE_0__.e,placeholder:_collection__WEBPACK_IMPORTED_MODULE_0__.h,fallback:_collection__WEBPACK_IMPORTED_MODULE_0__.a,noloading:_collection__WEBPACK_IMPORTED_MODULE_0__.f,on:_collection__WEBPACK_IMPORTED_MODULE_0__.g};__webpack_exports__.a=commonProps},338:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(913),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const AmpState=({id:id,json:json})=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default.a,{id:id,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(json)}})});AmpState.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,json:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},AmpState.__docgenInfo={description:"",methods:[],displayName:"AmpState",props:{id:{type:{name:"string"},required:!0,description:""},json:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.a=AmpState,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/State.js"]={name:"AmpState",docgenInfo:AmpState.__docgenInfo,path:"app/component/library/AMP/State.js"})},339:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_icons_commentIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(340),_icons_emailIcon_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(341);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div`
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
`,Comments=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.a`
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: 0 0 0 4px;
`,CommentCounter=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.span`
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
`;function SocialShare({article:article,className:className,configuration:configuration}){let commentId=article.path&&article.path.split("-1-")[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-social-share",{type:"whatsapp",width:"30",height:"30","aria-label":"Share by Whatsapp","data-param-subject":article.titleSocial||article.title}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-social-share",{type:"twitter",width:"30",height:"30","aria-label":"Share to Twitter","data-param-text":article.titleSocial||article.title}),configuration.facebookAppId&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-social-share",{type:"facebook","data-param-app_id":configuration.facebookAppId,width:"30",height:"30","aria-label":"Share to Facebook"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-social-share",{type:"email",width:"30",height:"30","aria-label":"Share by email","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:_icons_emailIcon_js__WEBPACK_IMPORTED_MODULE_4__.a}}),commentId&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comments,{href:"#comments",dangerouslySetInnerHTML:{__html:_icons_commentIcon__WEBPACK_IMPORTED_MODULE_3__.a}}),commentId&&article.commentCount&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CommentCounter,{children:article.commentCount})]})}SocialShare.propTypes={article:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,configuration:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,theme:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},SocialShare.__docgenInfo={description:"",methods:[],displayName:"SocialShare",props:{article:{type:{name:"any"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},theme:{type:{name:"string"},required:!1,description:""}}},__webpack_exports__.a=SocialShare,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Insider/SocialShare.js"]={name:"SocialShare",docgenInfo:SocialShare.__docgenInfo,path:"app/component/library/Article/Insider/SocialShare.js"})},340:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g transform="translate(-0.875000, 0.000000)" fill-rule="nonzero">\n      <circle stroke-width="2" cx="20.875" cy="20" r="19" fill="none"></circle>\n      <path d="M21.784,11.821 C26.797,11.821 30.875,15.087 30.875,19.103 C30.875,23.573 26.198,26.34 21.866,26.34 C20.5157322,26.3186946 19.1740384,26.1210208 17.875,25.752 C16.6845754,26.5230061 15.3694046,27.0816239 13.988,27.403 C14.4692648,26.1707668 14.6565573,24.8432844 14.535,23.526 C13.3718451,22.3456178 12.7118911,20.7600792 12.694,19.103 C12.694,15.089 16.771,11.824 21.784,11.824 L21.784,11.821 Z M21.784,10.003 C16.022,10.003 10.875,13.845 10.875,19.103 C10.8795758,20.9726004 11.5379197,22.7817195 12.736,24.217 C12.786,25.878 11.806,28.265 10.924,30.003 C13.4403283,29.591776 15.8831076,28.8152477 18.175,27.698 C19.3823722,27.9969519 20.6211759,28.1503756 21.865,28.155 C28.305,28.155 32.692,23.755 32.692,19.1 C32.692,13.817 27.508,10 21.782,10 L21.784,10.003 Z M18.602,19.094 C18.6019999,19.6457775 18.2695636,20.1432045 17.759749,20.3542671 C17.2499343,20.5653296 16.6631752,20.4484482 16.2731527,20.0581395 C15.8831302,19.6678309 15.7666792,19.0809862 15.9781156,18.5713265 C16.189552,18.0616668 16.6872227,17.7295955 17.239,17.73 C17.6006634,17.7299999 17.9474994,17.8737385 18.2031403,18.1295669 C18.4587811,18.3853954 18.6022653,18.7323367 18.602,19.094 Z M21.784,17.73 C21.0306836,17.73 20.42,18.3406836 20.42,19.094 C20.42,19.8473164 21.0306836,20.458 21.784,20.458 C22.5373164,20.458 23.148,19.8473164 23.148,19.094 C23.148,18.7322447 23.0042933,18.385306 22.7484936,18.1295064 C22.492694,17.8737067 22.1457553,17.73 21.784,17.73 Z M26.329,17.73 C25.5756836,17.73 24.965,18.3406836 24.965,19.094 C24.965,19.8473164 25.5756836,20.458 26.329,20.458 C27.0823164,20.458 27.693,19.8473164 27.693,19.094 C27.6930002,18.341074 27.0829258,17.730552 26.33,17.73 L26.329,17.73 Z"></path>\n  </g>\n</svg>\n'},341:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xml:space="preserve"><path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/><circle fill="#DC062B" cx="18" cy="18" r="17.938"/>\n<path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/></svg>'},342:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),moment_timezone__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(319),moment_timezone__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const FormattedDate=({date:date,width:width,height:height})=>{const unixDate=moment_timezone__WEBPACK_IMPORTED_MODULE_1___default.a.unix(date),formattedDate=unixDate.tz("Europe/London").format("dddd DD MMMM YYYY HH:mm"),dateStr=unixDate.toISOString();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-timeago",{datetime:dateStr,cutoff:604800,locale:"en",width:width,height:height||"18",children:formattedDate})};FormattedDate.propTypes={date:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,width:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,height:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number},FormattedDate.__docgenInfo={description:"",methods:[],displayName:"FormattedDate",props:{date:{type:{name:"number"},required:!0,description:""},width:{type:{name:"number"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""}}},__webpack_exports__.a=FormattedDate,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/FormattedDate.js"]={name:"FormattedDate",docgenInfo:FormattedDate.__docgenInfo,path:"app/component/library/Article/Embeds/FormattedDate.js"})},343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(319),__webpack_require__(3)),_services_article__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(101),_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(342),_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(339);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
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
`,ArticleMeta=props=>{var _article$authors;const{className:className,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(_services_article__WEBPACK_IMPORTED_MODULE_7__.a)(article),authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>{var _article$extra;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorLink,{href:a.path,className:"author",children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.authorInfo)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Location,{children:article.extra.authorInfo},a.id)]},a.id)});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InnerWrapper,{children:[authors||"",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublishedDate,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__.a,{date:dateToShowInTimestamp})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__.a,{article:article,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,article:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string},__webpack_exports__.default=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(ArticleMeta))``},344:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<?xml version="1.0" encoding="UTF-8"?>\n  <svg version="1.1" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">\n    <defs>\n      <filter id="a" x="-22.2%" y="-16.7%" width="144.4%" height="144.4%">\n        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>\n        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>\n        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>\n        <feMerge>\n          <feMergeNode in="shadowMatrixOuter1"/>\n          <feMergeNode in="SourceGraphic"/>\n        </feMerge>\n      </filter>\n    </defs>\n  <g fill="none" fill-rule="evenodd">\n    <g transform="translate(-985 -14770)">\n      <g transform="translate(220 14716)">\n        <g transform="translate(762 49)">\n          <g transform="translate(8 8)" filter="url(#a)">\n            <polygon id="b" points="12 7.5 12 28.5 28.5 18" fill="#fff" fill-rule="nonzero"/>\n            <polygon points="0 0 36 0 36 36 0 36"/>\n            <circle cx="18" cy="18" r="18" opacity=".5" stroke="#fff" stroke-width="2"/>\n          </g>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n'},345:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Frame__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(214);const ConditionalFrame=props=>{const{req:req,children:children,className:className}=props,noframe=req&&Object.prototype.hasOwnProperty.call(req.query,"noframe");return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:noframe?children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Frame__WEBPACK_IMPORTED_MODULE_4__.a,{className:className,children:children})})};ConditionalFrame.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(ConditionalFrame))``},346:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(64);const NoIndex=()=>!1;NoIndex.__docgenInfo={description:"",methods:[],displayName:"NoIndex"},__webpack_exports__.a=NoIndex,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NoIndex.js"]={name:"NoIndex",docgenInfo:NoIndex.__docgenInfo,path:"app/component/library/NoIndex.js"})},347:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={"United Kingdom":"^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$",Ireland:"[A-Za-z0-9 -_]*","United States of America":"(^\\d{5}(?: [-\\s]\\d{4})?$)",Australia:"[A-Za-z0-9 -_]*",Canada:"[A-Za-z0-9 -_]*",Afghanistan:"[A-Za-z0-9 -_]*",Albania:"[A-Za-z0-9 -_]*",Algeria:"[A-Za-z0-9 -_]*","American Samoa":"[A-Za-z0-9 -_]*",Andorra:"[A-Za-z0-9 -_]*",Angola:"^$",Anguilla:"[A-Za-z0-9 -_]*",Antarctica:"[A-Za-z0-9 -_]*","Antigua and Barbuda":"^$",Argentina:"[A-Za-z0-9 -_]*",Armenia:"[A-Za-z0-9 -_]*",Aruba:"^$",Austria:"[A-Za-z0-9 -_]*",Azerbaijan:"[A-Za-z0-9 -_]*",Bahamas:"^$",Bahrain:"[A-Za-z0-9 -_]*",Bangladesh:"[A-Za-z0-9 -_]*",Barbados:"[A-Za-z0-9 -_]*",Belarus:"[A-Za-z0-9 -_]*",Belgium:"[A-Za-z0-9 -_]*",Belize:"^$",Benin:"^$",Bermuda:"[A-Za-z0-9 -_]*",Bhutan:"[A-Za-z0-9 -_]*",Bolivia:"^$","Bosnia and Herzegovina":"[A-Za-z0-9 -_]*",Botswana:"^$","Bouvet Island":"[A-Za-z0-9 -_]*",Brazil:"[A-Za-z0-9 -_]*","British Indian Ocean Territory":"[A-Za-z0-9 -_]*","Brunei Darussalam":"[A-Za-z0-9 -_]*",Bulgaria:"[A-Za-z0-9 -_]*","Burkina Faso":"^$",Burundi:"^$",Cambodia:"[A-Za-z0-9 -_]*",Cameroon:"^$","Cape Verde":"[A-Za-z0-9 -_]*","Cayman Islands":"[A-Za-z0-9 -_]*","Central African Republic":"^$",Chad:"[A-Za-z0-9 -_]*",Chile:"[A-Za-z0-9 -_]*",China:"[A-Za-z0-9 -_]*","Christmas Island":"[A-Za-z0-9 -_]*","Cocos (Keeling) Islands":"[A-Za-z0-9 -_]*",Colombia:"[A-Za-z0-9 -_]*",Comoros:"^$",Congo:"^$","Congo, The Democratic Republic of The":"^$","Cook Islands":"^$","Costa Rica":"[A-Za-z0-9 -_]*","Cote D’Ivoire":"^$",Croatia:"[A-Za-z0-9 -_]*",Cuba:"[A-Za-z0-9 -_]*",Cyprus:"[A-Za-z0-9 -_]*","Czech Republic":"[A-Za-z0-9 -_]*",Denmark:"[A-Za-z0-9 -_]*",Djibouti:"^$",Dominica:"^$","Dominican Republic":"[A-Za-z0-9 -_]*","Easter Island":"[A-Za-z0-9 -_]*",Ecuador:"[A-Za-z0-9 -_]*",Egypt:"[A-Za-z0-9 -_]*","El Salvador":"[A-Za-z0-9 -_]*","Equatorial Guinea":"^$",Eritrea:"^$",Estonia:"[A-Za-z0-9 -_]*",Ethiopia:"[A-Za-z0-9 -_]*","Falkland Islands (Malvinas)":"[A-Za-z0-9 -_]*","Faroe Islands":"[A-Za-z0-9 -_]*",Fiji:"^$",Finland:"[A-Za-z0-9 -_]*",France:"[A-Za-z0-9 -_]*","French Guiana":"[A-Za-z0-9 -_]*","French Polynesia":"[A-Za-z0-9 -_]*","French Southern Territories":"^$",Gabon:"[A-Za-z0-9 -_]*",Gambia:"^$",Georgia:"[A-Za-z0-9 -_]*",Germany:"[A-Za-z0-9 -_]*",Ghana:"^$",Gibraltar:"[A-Za-z0-9 -_]*",Greece:"[A-Za-z0-9 -_]*",Greenland:"[A-Za-z0-9 -_]*",Grenada:"^$",Guadeloupe:"[A-Za-z0-9 -_]*",Guam:"[A-Za-z0-9 -_]*",Guatemala:"[A-Za-z0-9 -_]*",Guinea:"[A-Za-z0-9 -_]*","Guinea-bissau":"[A-Za-z0-9 -_]*",Guyana:"^$",Haiti:"[A-Za-z0-9 -_]*","Heard Island and Mcdonald Islands":"^$",Honduras:"[A-Za-z0-9 -_]*","Hong Kong":"^$",Hungary:"[A-Za-z0-9 -_]*",Iceland:"[A-Za-z0-9 -_]*",India:"[A-Za-z0-9 -_]*",Indonesia:"[A-Za-z0-9 -_]*",Iran:"[A-Za-z0-9 -_]*",Iraq:"[A-Za-z0-9 -_]*",Israel:"[A-Za-z0-9 -_]*",Italy:"[A-Za-z0-9 -_]*",Jamaica:"[A-Za-z0-9 -_]*",Japan:"[A-Za-z0-9 -_]*",Jordan:"[A-Za-z0-9 -_]*",Kazakhstan:"[A-Za-z0-9 -_]*",Kenya:"[A-Za-z0-9 -_]*",Kiribati:"^$","Korea, North":"[A-Za-z0-9 -_]*","Korea, South":"[A-Za-z0-9 -_]*",Kosovo:"[A-Za-z0-9 -_]*",Kuwait:"[A-Za-z0-9 -_]*",Kyrgyzstan:"[A-Za-z0-9 -_]*",Laos:"[A-Za-z0-9 -_]*",Latvia:"[A-Za-z0-9 -_]*",Lebanon:"[A-Za-z0-9 -_]*",Lesotho:"[A-Za-z0-9 -_]*",Liberia:"[A-Za-z0-9 -_]*","Libyan Arab Jamahiriya":"^$",Liechtenstein:"[A-Za-z0-9 -_]*",Lithuania:"[A-Za-z0-9 -_]*",Luxembourg:"[A-Za-z0-9 -_]*",Macau:"^$",Macedonia:"[A-Za-z0-9 -_]*",Madagascar:"[A-Za-z0-9 -_]*",Malawi:"^$",Malaysia:"[A-Za-z0-9 -_]*",Maldives:"[A-Za-z0-9 -_]*",Mali:"^$",Malta:"[A-Za-z0-9 -_]*","Marshall Islands":"[A-Za-z0-9 -_]*",Martinique:"[A-Za-z0-9 -_]*",Mauritania:"^$",Mauritius:"[A-Za-z0-9 -_]*",Mayotte:"[A-Za-z0-9 -_]*",Mexico:"[A-Za-z0-9 -_]*","Micronesia, Federated States of":"[A-Za-z0-9 -_]*","Moldova, Republic of":"[A-Za-z0-9 -_]*",Monaco:"[A-Za-z0-9 -_]*",Mongolia:"[A-Za-z0-9 -_]*",Montenegro:"[A-Za-z0-9 -_]*",Montserrat:"[A-Za-z0-9 -_]*",Morocco:"[A-Za-z0-9 -_]*",Mozambique:"[A-Za-z0-9 -_]*",Myanmar:"[A-Za-z0-9 -_]*",Namibia:"[A-Za-z0-9 -_]*",Nauru:"^$",Nepal:"[A-Za-z0-9 -_]*",Netherlands:"[A-Za-z0-9 -_]*","Netherlands Antilles":"^$","New Caledonia":"[A-Za-z0-9 -_]*","New Zealand":"[A-Za-z0-9 -_]*",Nicaragua:"[A-Za-z0-9 -_]*",Niger:"[A-Za-z0-9 -_]*",Nigeria:"[A-Za-z0-9 -_]*",Niue:"^$","Norfolk Island":"[A-Za-z0-9 -_]*","Northern Mariana Islands":"[A-Za-z0-9 -_]*",Norway:"[A-Za-z0-9 -_]*",Oman:"[A-Za-z0-9 -_]*",Pakistan:"[A-Za-z0-9 -_]*",Palau:"[A-Za-z0-9 -_]*","Palestinian Territory":"[A-Za-z0-9 -_]*",Panama:"[A-Za-z0-9 -_]*","Papua New Guinea":"[A-Za-z0-9 -_]*",Paraguay:"[A-Za-z0-9 -_]*",Peru:"[A-Za-z0-9 -_]*",Philippines:"[A-Za-z0-9 -_]*",Pitcairn:"[A-Za-z0-9 -_]*",Poland:"[A-Za-z0-9 -_]*",Portugal:"[A-Za-z0-9 -_]*","Puerto Rico":"[A-Za-z0-9 -_]*",Qatar:"^$",Reunion:"[A-Za-z0-9 -_]*",Romania:"[A-Za-z0-9 -_]*",Russia:"[A-Za-z0-9 -_]*",Rwanda:"^$","Saint Helena":"[A-Za-z0-9 -_]*","Saint Kitts and Nevis":"^$","Saint Lucia":"[A-Za-z0-9 -_]*","Saint Pierre and Miquelon":"[A-Za-z0-9 -_]*","Saint Vincent and The Grenadines":"[A-Za-z0-9 -_]*",Samoa:"[A-Za-z0-9 -_]*","San Marino":"[A-Za-z0-9 -_]*","Sao Tome and Principe":"^$","Saudi Arabia":"[A-Za-z0-9 -_]*",Senegal:"[A-Za-z0-9 -_]*","Serbia and Montenegro":"[A-Za-z0-9 -_]*",Seychelles:"^$","Sierra Leone":"^$",Singapore:"[A-Za-z0-9 -_]*",Slovakia:"[A-Za-z0-9 -_]*",Slovenia:"[A-Za-z0-9 -_]*","Solomon Islands":"^$",Somalia:"[A-Za-z0-9 -_]*","South Africa":"[A-Za-z0-9 -_]*","South Georgia and The South Sandwich Islands":"[A-Za-z0-9 -_]*",Spain:"[A-Za-z0-9 -_]*","Sri Lanka":"[A-Za-z0-9 -_]*",Sudan:"[A-Za-z0-9 -_]*",Suriname:"^$","Svalbard and Jan Mayen":"[A-Za-z0-9 -_]*",Swaziland:"[A-Za-z0-9 -_]*",Sweden:"[A-Za-z0-9 -_]*",Switzerland:"[A-Za-z0-9 -_]*",Syria:"^$",Taiwan:"[A-Za-z0-9 -_]*",Tajikistan:"[A-Za-z0-9 -_]*","Tanzania, United Republic of":"[A-Za-z0-9 -_]*",Thailand:"[A-Za-z0-9 -_]*","Timor-Leste":"^$",Togo:"^$",Tokelau:"^$",Tonga:"^$","Trinidad and Tobago":"[A-Za-z0-9 -_]*",Tunisia:"[A-Za-z0-9 -_]*",Turkey:"[A-Za-z0-9 -_]*",Turkmenistan:"[A-Za-z0-9 -_]*","Turks and Caicos Islands":"[A-Za-z0-9 -_]*",Tuvalu:"^$",Uganda:"^$",Ukraine:"[A-Za-z0-9 -_]*","United Arab Emirates":"^$","United States Minor Outlying Islands":"[A-Za-z0-9 -_]*",Uruguay:"[A-Za-z0-9 -_]*",Uzbekistan:"[A-Za-z0-9 -_]*",Vanuatu:"^$","Vatican City":"[A-Za-z0-9 -_]*",Venezuela:"[A-Za-z0-9 -_]*",Vietnam:"[A-Za-z0-9 -_]*","Virgin Islands, British":"[A-Za-z0-9 -_]*","Virgin Islands, U.S.":"[A-Za-z0-9 -_]*","Wallis and Futuna":"[A-Za-z0-9 -_]*","Western Sahara":"[A-Za-z0-9 -_]*",Yemen:"^$",Zambia:"[A-Za-z0-9 -_]*",Zimbabwe:"^$"}},348:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10.6 0L6 4.4 1.4 0 0 1.3 6 7l6-5.7z" fill-rule="evenodd"/>\n</svg>\n'},349:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var HTML=__webpack_require__(212),MPU=__webpack_require__(25);const Container=styled_components_browser_esm.default.div`
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
`,FeedList=({className:className,src:src,items:items="items",title:title,length:length=5,prefix:prefix})=>Object(jsx_runtime.jsxs)(Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Headline,{children:title}),Object(jsx_runtime.jsx)("amp-list",{src:src,layout:"fixed-height",width:"auto",height:"370","max-items":length,items:items,children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsxs)(ListItem,{children:[Object(jsx_runtime.jsxs)(ImageWrapper,{href:"amp-template-link",children:[Object(jsx_runtime.jsx)("amp-img",{src:"amp-template-image",alt:"amp-template-title",layout:"fill"}),prefix&&prefix]}),Object(jsx_runtime.jsx)(Link,{href:"amp-template-link",children:"amp-template-title"})]})})})]});FeedList.propTypes={className:prop_types_default.a.string,src:prop_types_default.a.string.isRequired,items:prop_types_default.a.string,logo:prop_types_default.a.any,title:prop_types_default.a.any,length:prop_types_default.a.number,prefix:prop_types_default.a.any},FeedList.__docgenInfo={description:"",methods:[],displayName:"FeedList",props:{items:{defaultValue:{value:"'items'",computed:!1},type:{name:"string"},required:!1,description:""},length:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},logo:{type:{name:"any"},required:!1,description:""},title:{type:{name:"any"},required:!1,description:""},prefix:{type:{name:"any"},required:!1,description:""}}};var components_FeedList=FeedList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/components/FeedList.js"]={name:"FeedList",docgenInfo:FeedList.__docgenInfo,path:"app/component/library/Sidebar/components/FeedList.js"});const Indy100=props=>{const{configuration:configuration}=props,src=configuration.feeds.indy100.src,logo=configuration.feeds.indy100.logo;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,logo:logo})};Indy100.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_Indy100=Object(styled_components_browser_esm.default)(Indy100)``;const MostPopular=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items,title:"MOST POPULAR"})};MostPopular.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_MostPopular=Object(styled_components_browser_esm.default)(MostPopular)``,classnames=__webpack_require__(51),classnames_default=__webpack_require__.n(classnames),play=__webpack_require__(344);const PopularVideos=props=>{const{configuration:configuration,className:className}=props,src=configuration.feeds.videos.src,items=configuration.feeds.videos.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:classnames_default()(className,"popular-videos"),src:src,items:items,title:"POPULAR VIDEOS",length:3,prefix:Object(jsx_runtime.jsx)("span",{className:"play-icon",dangerouslySetInnerHTML:{__html:play.a}})})};PopularVideos.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.object.isRequired};var Sidebar_PopularVideos=Object(styled_components_browser_esm.default)(PopularVideos)`
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
`;const SponsoredFeatures=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:"sponsored-features",src:src,items:items,title:"SPONSORED FEATURES",imgWidth:96})};SponsoredFeatures.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_SponsoredFeatures=Object(styled_components_browser_esm.default)(SponsoredFeatures)``,RequestProvider=__webpack_require__(8),Taboola=__webpack_require__(115);const TaboolaAmpWithStyle=Object(styled_components_browser_esm.default)(Taboola.b)`
  @media ${Styles.c.maxTablet} {
    display: none;
  }
`,TaboolaRightRail=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-right-rail",width:300,height:300,heights:["(min-width:507px) 324%","(min-width:461px) 338%","(min-width:408px) 351%","(min-width:376px) 368%","(min-width:347px) 385%","399%"],media:""+Styles.c.tablet,mode:"thumbnails-k-amp",placement:"Right Rail Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaAmpWithStyle,{id:"taboola-right-rail"});TaboolaRightRail.propTypes={res:prop_types_default.a.object.isRequired},TaboolaRightRail.__docgenInfo={description:"",methods:[],displayName:"TaboolaRightRail",props:{res:{type:{name:"object"},required:!0,description:""}}};var Sidebar_TaboolaRightRail=Object(RequestProvider.withRequest)(TaboolaRightRail);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/TaboolaRightRail.js"]={name:"TaboolaRightRail",docgenInfo:TaboolaRightRail.__docgenInfo,path:"app/component/library/Sidebar/TaboolaRightRail.js"});const Sidebar_Wrapper=styled_components_browser_esm.default.aside`
  flex: 0 0 312px;
  margin-left: 16px;

  @media ${Styles.c.maxLaptop} {
    display: none;
  }
`,componentMapping={MostPopular:Sidebar_MostPopular,indy100:Sidebar_Indy100,PopularVideos:Sidebar_PopularVideos,SponsoredFeatures:Sidebar_SponsoredFeatures};function Sidebar({sidebar:sidebar,configuration:configuration,isBest:isBest,article:article}){var _article$extra;const layout=sidebar.layoutSettings?sidebar.layoutSettings:[],isDisableAllAds=null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds,isSensitive=null==article?void 0:article.sensitive;let adIndex=0,thirdpartyShown=!1;return Object(jsx_runtime.jsx)(Sidebar_Wrapper,{children:null==layout?void 0:layout.map((comp,i)=>{switch(comp.type){case"Ad":{var _comp$adSource;const id="mpu_bottom_sb_"+adIndex,commonProps={sticky:i===layout.length-1,blockAds:isDisableAllAds||isSensitive};return"partner"!==(null===(_comp$adSource=comp.adSource)||void 0===_comp$adSource?void 0:_comp$adSource.toLowerCase())||thirdpartyShown?(adIndex+=1,1===adIndex?Object(jsx_runtime.jsx)(Ads_Mpu1,{isBest:isBest,...commonProps},"mpu1"):Object(jsx_runtime.jsx)(Sidebar_SidebarAd,{id:id,width:300,height:600,sizes:"120x600|300x250|160x600|300x600",...commonProps},id)):(thirdpartyShown=!0,Object(jsx_runtime.jsx)(Ads_Thirdparty03,{...commonProps},"Thirdparty03"))}case"MostPopular":case"indy100":case"PopularVideos":case"SponsoredFeatures":return Object(react.createElement)(componentMapping[comp.type],{key:comp.type+i,name:comp.name,configuration:configuration});case"Markup":return Object(jsx_runtime.jsx)(HTML.a,{data:comp},comp.type+i);case"Taboola":return isDisableAllAds||isSensitive?null:Object(jsx_runtime.jsx)(Sidebar_TaboolaRightRail,{name:comp.name},comp.type+i);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})})}Sidebar.propTypes={sidebar:prop_types_default.a.object.isRequired,sections:prop_types_default.a.array.isRequired,configuration:prop_types_default.a.object.isRequired,adTargeting:prop_types_default.a.object,isBest:prop_types_default.a.bool,article:prop_types_default.a.object};__webpack_exports__.a=Sidebar},350:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg version="1.1" class=\'masthead\' viewBox="0 0 319 40" xmlns="http://www.w3.org/2000/svg"><title>ES_Masthead</title><desc>Created with Sketch.</desc><g fill="none" fill-rule="evenodd"><g transform="translate(0 .20815)" fill="#1D1D1B"><path d="m54.442 17.492v-4.1854c0-2.2984-0.69973-3.2419-1.8525-3.2419-1.5639 0-2.5103 1.9287-2.7161 7.4273h4.5687zm21.239-1.641c0-1.9293-1.1942-2.5443-2.47-2.5443-0.86418 0-1.9342 0.45165-2.3459 0.73827v13.54c0 1.6416 0.61751 2.1345 1.9756 2.3804v0.4511h-11.319v-0.4511c0.78195-0.16394 1.8111-0.69811 1.8111-2.5031v-15.1c0-1.8055-0.49445-2.2979-1.8111-2.5438v-0.45165h9.549l-0.24667 4.1441c1.3167-2.4618 3.6217-4.5545 6.7915-4.5545 2.7984 0 5.5973 1.3137 5.5973 6.0734v12.432c0 1.3539 0.20584 2.2154 1.5645 2.5031v0.4511h-10.702v-0.4511c0.98834-0.24591 1.6058-0.94402 1.6058-2.5031v-11.612zm11.36-3.4884c0-1.3544-0.41167-2.2979-1.7284-2.5438v-0.45165h9.2604v18.095c0 1.3132 0.4939 2.3391 1.852 2.5031v0.4511h-11.236v-0.4511c1.3575-0.16394 1.852-1.1899 1.852-2.5031v-15.1zm7.7379-8.3702c0 2.2154-1.8525 3.9802-4.0748 3.9802-2.2228 0-4.0339-1.7648-4.0339-3.9802 0-2.1752 1.8111-3.9389 4.0339-3.9389 2.2223 0 4.0748 1.7637 4.0748 3.9389zm15.97 11.859c0-1.9293-1.1936-2.5443-2.4695-2.5443-0.86418 0-1.9353 0.45165-2.347 0.73827v13.54c0 1.6416 0.57667 2.1345 1.9761 2.3804v0.4511h-11.072v-0.4511c0.74112-0.16394 1.5639-0.69811 1.5639-2.5031v-15.1c0-1.8055-0.49334-2.2979-1.8111-2.5438v-0.45165h9.5496l-0.24722 4.1441c1.3172-2.4618 3.6223-4.5545 6.7915-4.5545 2.7995 0 5.5978 1.3137 5.5978 6.0734v12.432c0 1.3539 0.20584 2.2154 1.5639 2.5031v0.4511h-10.701v-0.4511c0.98779-0.24591 1.6053-0.94402 1.6053-2.5031v-11.612zm20.95-0.12378c0-3.9802-0.45251-5.7439-1.8106-5.7439-1.4408 0-2.017 1.7637-2.017 5.7439v0.65685c0 3.9796 0.57612 5.7444 2.017 5.7444 1.3581 0 1.8106-1.7648 1.8106-5.7444v-0.65685zm47.093 10.997c-0.69973 1.8055-3.0875 3.9389-6.7915 3.9389-3.8689 0-4.9803-2.5031-4.9803-4.9649v-15.018h-1.852v-0.49236c2.7575-0.4511 6.7495-2.749 8.9315-5.1288h0.45306v4.308h4.1156v1.3132h-4.1156v14.402c0 1.3951 0.65834 2.2159 1.975 2.2159 0.90557 0 1.6053-0.4511 1.8934-0.82079l0.37084 0.24646zm34.945-10.873c0-1.9293-1.1936-2.5443-2.4695-2.5443-0.86418 0-1.9347 0.45165-2.3464 0.73827v13.54c0 1.6416 0.57667 2.1345 1.9756 2.3804v0.4511h-11.195v-0.4511c0.78196-0.16394 1.6875-0.69811 1.6875-2.5031v-15.1c0-1.8055-0.4939-2.2979-1.8111-2.5438v-0.45165h9.549l-0.24667 4.1441c1.3172-2.4618 3.6217-4.5545 6.7909-4.5545 2.7995 0 5.5978 1.3137 5.5978 6.0734v12.432c0 1.3539 0.20584 2.2154 1.5645 2.5031v0.4511h-10.702v-0.4511c0.98779-0.24591 1.6053-0.94402 1.6053-2.5031v-11.612zm22.844 9.3142c0 1.8055-1.5645 2.5845-2.5931 2.5845-2.0992 0-3.1698-1.4771-3.1698-3.8982v-10.381c0-2.2566 1.5231-3.2001 3.0461-3.2001 1.3167 0 2.7167 0.98473 2.7167 2.8722v12.022zm-232.68-20.065c0-1.7241-0.65834-3.1594-3.375-3.3651v-0.69701h23.297v7.5499h-0.78251c-2.5925-4.2679-3.4578-6.3193-6.1734-6.3193h-4.4048v12.925h1.8111c2.9634 0 3.8695-1.2724 5.3512-4.8422h0.65834v10.833h-0.65834c-1.4817-3.5692-2.3878-4.8417-5.3512-4.8417h-1.8111v10.586c0 1.4776 0.53528 2.2572 2.7575 2.2572h1.2356c4.2801 0 5.5151-2.8315 8.2726-7.5087h0.74112l-0.82334 8.7393h-24.12v-0.69701c2.7167-0.2052 3.375-1.6416 3.375-3.3651v-21.254zm242.19 25.316v-0.4511c-1.7697-0.28772-1.9756-1.1492-1.9756-2.5031v-26.424h-9.7962v0.53307c2.017 0.24591 2.2642 0.32843 2.2642 1.4364v7.5494c-0.74112-0.8615-2.4286-1.6003-4.6101-1.6003-4.5273 0-9.2201 3.5296-9.2201 11.325 0 7.2215 3.1698 10.627 7.7379 10.627 3.4578 0 5.3926-2.0927 6.0923-3.5698v3.0774h9.5076zm52.109-5.2515c0 1.8055-1.5645 2.5845-2.5936 2.5845-2.0992 0-3.1698-1.4771-3.1698-3.8982v-10.381c0-2.2566 1.5231-3.2001 3.0461-3.2001 1.3178 0 2.7172 0.98473 2.7172 2.8722v12.022zm9.5071 5.2515v-0.4511c-1.7697-0.28772-1.9756-1.1492-1.9756-2.5031v-26.424h-9.7957v0.53307c2.0164 0.24591 2.2642 0.32843 2.2642 1.4364v7.5494c-0.74112-0.8615-2.4286-1.6003-4.6106-1.6003-4.5278 0-9.2196 3.5296-9.2196 11.325 0 7.2215 3.1692 10.627 7.7379 10.627 3.4573 0 5.392-2.0927 6.0923-3.5698v3.0774h9.5071zm-50.585-3.1181v-9.7246c-0.41112 2.1746-3.5803 2.667-3.5803 6.442v0.16394c0 1.8468 1.2753 3.2012 2.8806 3.2012 0.20639 0 0.45306-0.04181 0.69973-0.082519zm18.974-11.899v11.325c0 2.0102 0.57722 2.831 2.3464 3.2413v0.4511h-11.567v-0.4511c0.74167-0.16394 1.6881-0.69811 1.6881-2.5031v-15.1c0-1.3544-0.49334-2.2979-1.8106-2.5438v-0.45165h9.5082c-0.16555 1.97-0.16555 3.3233-0.16555 6.0321zm8.8084-2.5031c0 2.2154-1.852 3.9802-4.0748 3.9802s-4.0334-1.7648-4.0334-3.9802c0-2.1746 1.8106-3.9395 4.0334-3.9395s4.0748 1.7648 4.0748 3.9395zm-160.02 9.3747c-0.33829 0.32214-0.59301 0.75325-0.59301 1.2933 0 0.65685 0.36973 1.2724 1.8934 1.2724l8.0673 0.081969c5.3092 0.04126 6.8737 2.9954 6.8737 5.4573 0 6.442-7.409 9.027-12.719 9.027-6.7501 0-9.1368-2.0107-9.1368-4.3906 0-1.4364 1.4403-2.9124 4.4037-2.9124 0.41167 0 0.78251 0.040159 1.235 0.081419l0.040836 0.12323c-0.69973 0.57433-1.1528 1.4358-1.1528 2.3386 0 1.7235 1.6467 3.4878 6.0095 3.4878 4.322 0 7.0387-1.7643 7.0387-3.7343 0-1.641-1.1528-2.3386-4.1575-2.4618l-6.0912-0.28717c-4.4456-0.2052-6.1331-2.3386-6.1331-4.8004 0-1.6977 1.3975-3.9132 3.9182-4.8026-2.3575-1.1413-4.0004-3.1396-4.0004-6.03 0-4.3493 4.1984-7.0581 9.4662-7.0581 1.6467 0 3.2111 0.28772 4.6101 0.78008 0.57667 0.081969 1.1114 0.081969 1.6467 0.081969 2.0578 0 3.9512-0.41039 5.8042-1.2306v3.5692h-0.24778c-1.07-0.12268-3.9512-1.0254-5.9681-1.8462 2.1406 1.2719 3.5395 3.2001 3.5395 5.7037 0 4.4313-4.1978 7.1802-9.3846 7.1802-1.7551 0-3.4781-0.30548-4.9629-0.9242zm65.062 5.0276c-0.24722 0.040709-0.4939 0.082519-0.69973 0.082519-1.6053 0-2.8817-1.3544-2.8817-3.2012v-0.16394c0-3.775 3.1698-4.2673 3.5814-6.442v9.7246zm-40.378-10.299c-2.3464-1.6823-4.2806-4.0209-4.2806-7.139 0-5.3758 4.7745-9.2322 11.689-9.2322 3.0053 0 5.8456 0.69756 7.7379 1.3946l-0.20473 6.9343h-0.82389c-2.0986-4.5539-3.5395-7.0158-6.6679-7.0158-2.3873 0-4.157 1.6003-4.157 4.1441 0 1.723 1.1522 3.1594 2.7989 4.3493l4.4037 3.2413c3.375 2.4618 5.4742 4.3498 5.4742 7.7551 0 5.9502-5.7623 9.4374-11.648 9.4374-3.7045 0-7.1623-1.0667-8.8498-2.0107l-0.32945-7.8371h0.82334c2.5523 5.4573 4.7337 8.5347 8.1915 8.5347 2.3045 0 4.1151-1.4358 4.1151-4.1441 0-2.0927-1.6047-3.5698-3.7039-5.0881l-4.5687-3.3239zm-88.128 6.6065c-1.1114 3.8982-4.1984 7.2628-9.7548 7.2628-6.339 0-9.7962-4.6365-9.7962-10.012 0-6.7704 4.1156-11.9 10.866-11.9 4.9395 0 8.644 3.0367 8.644 9.0276v0.82024h-11.525c0 5.4165 2.6345 7.5499 5.5565 7.5499 1.9756 0 4.0334-0.73827 5.557-2.9542l0.45251 0.2052zm139 4.6777c-1.3995 1.4771-3.54 2.6258-6.2154 2.6258-2.5931 0-3.9517-1.1894-4.2392-2.9542-1.0706 1.6416-2.7995 2.9135-5.3926 2.9135-3.2928 0-5.5978-2.2154-5.5978-5.3346 0-3.7332 2.5523-5.0876 6.627-6.1543 3.2928-0.86205 4.4864-2.0107 4.4864-4.5138v-0.16394c0-2.585-2.0992-4.2673-4.6923-4.2673-0.61751 0-1.2758 0.081969-1.9342 0.28717 1.8934 0.16394 3.4578 1.723 3.4578 3.6105 0 2.052-1.6881 3.6523-3.7873 3.6523-1.9756 0-3.4987-1.5591-3.4987-3.5291 0-3.4058 4.6514-5.4985 9.7962-5.4985 4.9803 0 8.1082 1.97 8.1082 5.6217 0 0.040709 0 4.8417-0.082224 12.186 0 0.8615 0.41167 1.5596 1.3172 1.5596 0.37028 0 0.86473-0.12323 1.3995-0.41039l0.24722 0.36913zm67.172 0c-1.3995 1.4771-3.5395 2.6258-6.2154 2.6258-2.5931 0-3.9512-1.1894-4.2392-2.9542-1.07 1.6416-2.7989 2.9135-5.3915 2.9135-3.2928 0-5.5978-2.2154-5.5978-5.3346 0-3.7332 2.5517-5.0876 6.6265-6.1543 3.2928-0.86205 4.4859-2.0107 4.4859-4.5138v-0.16394c0-2.585-2.0986-4.2673-4.6917-4.2673-0.61751 0-1.2758 0.081969-1.9347 0.28717 1.8939 0.16394 3.4573 1.723 3.4573 3.6105 0 2.052-1.6875 3.6523-3.7862 3.6523-1.9761 0-3.4992-1.5591-3.4992-3.5291 0-3.4058 4.6514-5.4985 9.7968-5.4985 4.9803 0 8.1076 1.97 8.1076 5.6217 0 0.040709 0 4.8417-0.082224 12.186 0 0.8615 0.41222 1.5596 1.3178 1.5596 0.36973 0 0.86418-0.12323 1.3995-0.41039l0.24667 0.36913zm-231.24 2.1334h-6.0912l-5.7215-17.603c-0.61696-1.8462-1.3172-2.7077-2.1814-2.9949v-0.45165h12.883v0.45165c-2.2228 0.36913-3.0875 1.2306-2.47 3.2413l3.9103 12.843 3.2106-11.53c0.28806-1.0667 0.45251-1.8869 0.45251-2.667 0-1.3951-0.9464-1.723-2.14-1.8875v-0.45165h6.5442v0.45165c-1.1528 0.41039-1.9756 0.98528-3.1284 4.3906l-5.2684 16.207z"></path></g><ellipse cx="313.65" cy="26.087" rx="4.5229" ry="4.5217" fill="#DD052B"></ellipse></g></svg>\n'},351:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),commentIcon=__webpack_require__(340),emailIcon=__webpack_require__(341);var withScript=__webpack_require__(163),helper=__webpack_require__(28),withCleanAmp=__webpack_require__(213);const Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  position: relative;
  padding-bottom: 16px;
  & amp-social-share {
    margin: 0 12px 0 0;
    outline: none;
    border-radius: 50%;
    &.amp-social-share-email {
      background-color: #dc062b;
    }
  }
`,WrapperContrast=Object(styled_components_browser_esm.default)(Wrapper)``,Comments=styled_components_browser_esm.default.a`
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
`;function SocialShare({article:article,className:className,theme:theme="default",configuration:configuration}){let commentId=article.path&&article.path.split("-1-")[1];const Div=Object(helper.a)(theme,WrapperContrast,Wrapper);return Object(jsx_runtime.jsxs)(Div,{className:className,children:[Object(jsx_runtime.jsx)("amp-social-share",{type:"whatsapp",width:"30",height:"30","aria-label":"Share by Whatsapp","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#25D366" viewBox="0 0 36 36">\n    <circle cx="18" cy="18" r="18" fill="#25D366"/>\n    <path fill="#fff" d="M25.467 10.565C23.522 8.578 20.832 7.5 18.086 7.5c-5.837 0-10.529 4.71-10.472 10.443 0 1.816.515 3.576 1.374 5.165L7.5 28.5l5.55-1.419c1.545.851 3.262 1.249 4.979 1.249 5.779 0 10.471-4.711 10.471-10.443 0-2.782-1.087-5.392-3.033-7.322zM18.086 26.57c-1.545 0-3.09-.397-4.406-1.192l-.344-.17-3.318.852.858-3.236-.229-.34c-2.518-4.03-1.316-9.365 2.804-11.862 4.12-2.498 9.441-1.306 11.96 2.78 2.517 4.087 1.315 9.366-2.805 11.863-1.316.851-2.918 1.305-4.52 1.305zm5.035-6.3l-.63-.284s-.915-.397-1.487-.68c-.057 0-.114-.057-.172-.057-.171 0-.286.056-.4.113 0 0-.057.057-.858.965-.058.113-.172.17-.287.17h-.057c-.057 0-.171-.056-.229-.113l-.286-.114c-.63-.284-1.201-.624-1.66-1.078-.114-.114-.285-.227-.4-.34-.4-.398-.8-.852-1.087-1.363l-.057-.113c-.057-.057-.057-.114-.114-.227 0-.114 0-.227.057-.284 0 0 .229-.284.4-.454.115-.114.172-.284.286-.398.115-.17.172-.397.115-.567-.057-.284-.744-1.816-.916-2.157-.114-.17-.229-.227-.4-.284h-.63c-.114 0-.229.057-.343.057l-.057.057c-.115.057-.23.17-.344.227-.114.114-.171.227-.286.34-.4.511-.63 1.136-.63 1.76 0 .454.115.908.287 1.305l.057.17c.515 1.079 1.202 2.044 2.117 2.895l.23.227c.17.17.343.284.457.454 1.202 1.022 2.575 1.76 4.12 2.157.172.057.4.057.572.114h.572c.286 0 .63-.114.859-.227.171-.114.286-.114.4-.227l.115-.114c.114-.113.229-.17.343-.284.114-.113.229-.227.286-.34.114-.227.172-.511.229-.795v-.397s-.057-.057-.172-.114z"/>\n</svg>\n'}}),Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:"30",height:"30","aria-label":"Share to Twitter","data-param-text":article.titleSocial||article.title}),Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":configuration.facebookAppId,width:"30",height:"30","aria-label":"Share to Facebook"}),Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:"30",height:"30","aria-label":"Share by email","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:emailIcon.a}}),commentId&&Object(jsx_runtime.jsx)(Comments,{href:"#comments",dangerouslySetInnerHTML:{__html:commentIcon.a}}),commentId&&article.commentCount&&Object(jsx_runtime.jsx)(CommentCounter,{children:article.commentCount})]})}SocialShare.propTypes={article:prop_types_default.a.any.isRequired,configuration:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,theme:prop_types_default.a.string};const SocialShareWithScript=Object(withScript.a)(SocialShare)`
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
`,SocialShareButtons=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(SocialShareWithScript,{...props}):Object(jsx_runtime.jsx)(SocialShare,{...props});SocialShareButtons.propTypes={...SocialShare.propTypes,cleanAmp:prop_types_default.a.bool};__webpack_exports__.a=Object(withCleanAmp.a)(SocialShareButtons)},352:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withVideo}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(42);const withVideo=WrappedComponent=>{const WrappedComponentWithVideo=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"jw_player",data:{id:"w6YvMN4P",bundle:"jw_player_id",mid:16695,changed:"1589436714"}},{type:"image",data:{title:"video-placeholder.jpg",description:null,caption:"Video caption",copyright:"Video copyright",credit:"Video credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(255,150,150),id:"8406636",bundle:"remote_image",mid:16693,changed:"1589436714"}}]}});return WrappedComponentWithVideo.propTypes={...WrappedComponent.propTypes},WrappedComponentWithVideo}},353:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withGallery}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(42);const withGallery=WrappedComponent=>{const WrappedComponentWithGallery=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"gallery",data:{title:"Mock gallery",gallery:[{type:"image",data:{title:"Title 1",description:null,caption:null,copyright:"Copyright for image 1",credit:"Credit for image 1",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8358121",bundle:"remote_image",mid:2159,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 2",description:"Description 2",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8347086",bundle:"remote_image",mid:2160,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 3",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:"8347081",bundle:"remote_image",mid:2161,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 4",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(200,200,0),id:"8347071",bundle:"remote_image",mid:2162,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 5",description:"This is a description",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8347076",bundle:"remote_image",mid:2163,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],bundle:"gallery",mid:2171,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"something.jpg",description:null,caption:null,copyright:"This is the gallery copyright",credit:"This is the gallery credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,100,100),id:"8358111",bundle:"remote_image",mid:2157,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}});return WrappedComponentWithGallery.propTypes={...WrappedComponent.propTypes},WrappedComponentWithGallery}},42:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createImageFromString}));const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1,canvas.height=1;const createImage=(r=0,g=0,b=0)=>(ctx.fillStyle=`rgb(${r}, ${g}, ${b})`,ctx.fillRect(0,0,1,1),canvas.toDataURL("image/png","")),createImageFromString=(str="")=>{let hash=0;for(let i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash),hash&=hash;const rgb=[0,0,0];for(let i=0;i<3;i++)rgb[i]=hash>>8*i&255;return createImage(...rgb)};__webpack_exports__.b=createImage},481:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);const postData=[{data:{markup:"<p>Paragraph 1</p>"},type:"markup"},{data:{markup:"<p>Paragraph 2</p>"},type:"markup"},{data:{markup:"<p>Paragraph 3</p>"},type:"markup"}];__webpack_exports__.default=()=>({type:"liveblog",data:{id:1645,uuid:"b80ee485-4563-4969-b6f8-ba8b568bae46",status:0,updated:"1591935880",extra:[]},posts:[{type:"post",data:{name:"1645",title:null,id:1686,uuid:"2bdaa90b-01b1-4601-8e8e-f62e72142b94",scheduleTime:null,created:"1589445900",changed:"1589446080",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p>Hello and welcome to <em>The Independent</em>'s rolling coverage of something in the news.</p>"},type:"markup"}]},{type:"post",data:{name:"1645",title:null,id:1685,uuid:"7049ddde-8f65-41d5-aabc-5af58b865f76",scheduleTime:null,created:"1589446800",changed:"1589446626",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1684,uuid:"ee185f17-99ed-48bb-a82e-b839b93c56fd",scheduleTime:null,created:"1589448000",changed:"1589447577",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1683,uuid:"f0c085ce-53d0-405f-8e6a-6013f60b6b9c",scheduleTime:null,created:"1589449200",changed:"1589447948",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1682,uuid:"4272fcd5-94bc-44b7-8250-05ec3ec07e4a",scheduleTime:null,created:"1589450400",changed:"1589449282",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1681,uuid:"b4a5eff3-512f-4bd2-ac40-44375570d70d",scheduleTime:null,created:"1589451600",changed:"1589450838",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1680,uuid:"98a6f735-0abe-4886-a4c0-4b59ac90dcef",scheduleTime:null,created:"1589452800",changed:"1589452075",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1679,uuid:"98efc34e-9017-4bb9-826c-04868846f6a5",scheduleTime:null,created:"1589454000",changed:"1589453570",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1678,uuid:"61ec940f-dd8c-44ed-8b11-06406a87091d",scheduleTime:null,created:"1589455200",changed:"1589454730",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1677,uuid:"4b4bdf17-f2f7-409b-af03-7028eeb7f694",scheduleTime:null,created:"1589456400",changed:"1589454778",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p><strong>!!!!!!</strong></p>"},type:"markup"}]}],paging:{total:41,posts:10,offset:0,currentPage:1,totalPages:5}})},487:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(319),__webpack_require__(3)),_services_article__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(101),_helper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(28),_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(342),_SocialShare__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(351);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: flex;
  flex-direction: column;
`,InnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  color: ${props=>props.theme.color.fontMedium};
  font-size: 14px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding-bottom: 16px;

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    display: flex;
  }
`,InnerWrapperContrast=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(InnerWrapper)`
  color: ${props=>props.theme.color.contrastLight};
`,PublishedDate=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  color: ${props=>props.theme.color.fontMedium};
  display: inline-block;
  text-align: left;
  line-height: 1.5em;
  vertical-align: top;
`,PublishedDateContrast=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(PublishedDate)`
  color: ${props=>props.theme.color.contrastLight};
`,Author=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-block;
  font-family: ${props=>props.theme.fontFamily.primaryFont};
`,AuthorLink=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a`
  display: inline-block;
  font-weight: 500;
  text-decoration: none;
  color: ${props=>props.theme.color.primary};
  margin-bottom: 8px;
  &:hover {
    color: ${props=>props.theme.color.hover};
  }

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__.c.tablet} {
    margin-bottom: 0;
  }
`,AuthorLinkContrast=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(AuthorLink)`
  color: ${props=>props.theme.color.contrastLight};
  &:hover {
    color: ${props=>props.theme.color.contrastLightHover};
  }
`,AuthorTwitterLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(AuthorLink)`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: normal;
  &:after {
    display: inline-block;
    content: ' | ';
    color: ${props=>props.theme.color.fontMedium};
    margin: 0 6px;
  }
`,AuthorTwitterLinkContrast=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(AuthorTwitterLink)`
  color: ${props=>props.theme.color.contrastLight};
  &:hover {
    color: ${props=>props.theme.color.contrastLightHover};
  }
  &:after {
    color: ${props=>props.theme.color.contrastLight};
  }
`,AuthorDetails=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  display: inline-block;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  line-height: 1.5em;
  &:after {
    display: inline-block;
    content: ' | ';
    color: ${props=>props.theme.color.fontMedium};
    margin: 0 6px;
  }
`,AuthorDetailsContrast=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(AuthorDetails)`
  &:after {
    color: ${props=>props.theme.color.contrastLight};
  }
`,AuthorTitle=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span`
  padding-left: 6px;
`,ArticleMeta=props=>{var _article$authors;const{className:className,theme:theme,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(_services_article__WEBPACK_IMPORTED_MODULE_7__.a)(article),StyledAuthorDetails="dark"===theme?AuthorDetailsContrast:AuthorDetails,StyledAuthorLink="dark"===theme?AuthorLinkContrast:AuthorLink,StyledAuthorTwitterLink="dark"===theme?AuthorTwitterLinkContrast:AuthorTwitterLink,authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledAuthorDetails,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledAuthorLink,{href:a.path,children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),a.jobTitle&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorTitle,{children:a.jobTitle})]}),a.twitter&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledAuthorTwitterLink,{href:"https://twitter.com/"+a.twitter,children:["@",a.twitter]})]},a.id)),InnerDiv=Object(_helper__WEBPACK_IMPORTED_MODULE_8__.a)(theme,InnerWrapperContrast,InnerWrapper),DateDiv=Object(_helper__WEBPACK_IMPORTED_MODULE_8__.a)(theme,PublishedDateContrast,PublishedDate);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InnerDiv,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Author,{className:"author",children:authors||""}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DateDiv,{className:"publish-date",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_9__.a,{date:dateToShowInTimestamp})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SocialShare__WEBPACK_IMPORTED_MODULE_10__.a,{className:"social-share",article:article,theme:theme,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,article:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string},ArticleMeta.defaultProps={theme:"default"},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(ArticleMeta)},488:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(162),_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(78);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
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
`,LoginModal=({req:{originalUrl:originalUrl}})=>{const returnUrl=originalUrl||"/";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{on:"tap:login-modal.close",className:"close",children:"✕"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(H4,{children:"Log in with Evening Standard"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{id:"login-page-form",className:"login-page-form",method:"post",target:"_top","action-xhr":"/internal-api/user/login/submit","verify-xhr":"/internal-api/user/login/verify","custom-validation-reporting":"interact-and-submit",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"returnUrl",defaultValue:returnUrl}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"loginEmail",fieldId:"login-page-form-email",displayName:"Email",requiredField:!0,valueMissingMsg:"Please enter a valid email"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"password",inputType:"password",showPassword:!1,fieldId:"login-page-form-password",displayName:"Password",requiredField:!0,valueMissingMsg:"Please enter a valid password"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ForgotPassword,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/forgotten-password",children:"Forgotten your password?"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledFormSubmit,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(P,{children:["Not registered? ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:"/register",children:"Register here"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"form-errors","submit-error":"true",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})})]})]})};LoginModal.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{req:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(LoginModal),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Modals/Login.js"]={name:"LoginModal",docgenInfo:LoginModal.__docgenInfo,path:"app/component/library/Modals/Login.js"})},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return JW_PLAYER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BRIGHTCOVE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return YOUTUBE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DUGOUT_VIDEO})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GALLERY})),__webpack_require__.d(__webpack_exports__,"d",(function(){return IMAGE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return POLAR}));const JW_PLAYER="jw_player",BRIGHTCOVE="brightcove",YOUTUBE="youtube",DUGOUT_VIDEO="dugout-video",GALLERY="gallery",IMAGE="image",POLAR="polar"},66:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return height})),__webpack_require__.d(__webpack_exports__,"j",(function(){return width})),__webpack_require__.d(__webpack_exports__,"d",(function(){return layout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return sizes})),__webpack_require__.d(__webpack_exports__,"c",(function(){return heights})),__webpack_require__.d(__webpack_exports__,"e",(function(){return media})),__webpack_require__.d(__webpack_exports__,"h",(function(){return placeholder})),__webpack_require__.d(__webpack_exports__,"a",(function(){return fallback})),__webpack_require__.d(__webpack_exports__,"f",(function(){return noloading})),__webpack_require__.d(__webpack_exports__,"g",(function(){return on}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(165);const height=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.width==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`);break;case"fixed-height":if(null==props[propName])return new Error(`Props 'height is required for layout '${props.layout}'`)}},width=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.height==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`)}},layout=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["container","fill","fixed","fixed-height","flex-item","intrinsic","nodisplay","responsive"]),sizes=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,heights=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,media=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,placeholder=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,fallback=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,noloading=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,on=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},74:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return setMockArticleOverrides})),__webpack_require__.d(__webpack_exports__,"i",(function(){return setMockSectionOverrides})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setMockMenuOverrides})),__webpack_require__.d(__webpack_exports__,"h",(function(){return setMockReqOverrides})),__webpack_require__.d(__webpack_exports__,"j",(function(){return setMockStaticArticleOverrides})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setMockConfigurationOverrides})),__webpack_require__.d(__webpack_exports__,"f",(function(){return setMockLocalsOverrides})),__webpack_require__.d(__webpack_exports__,"a",(function(){return setIsArticle})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setIsSection})),__webpack_require__.d(__webpack_exports__,"b",(function(){return setIsOther}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(42);var mockArticle=()=>({type:"article",id:"000",status:!0,title:"This is a title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{path:"",name:""}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{authorInfo:"London"},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,authors:[{name:"I am the Author",id:"1048",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:null,imageUrl:Object(createImage.b)(0,150,0),twitter:"SomeJourno",facebook:null,location:null,path:"/author/jack-de-menezes",description:null}],inlineImages:[],articleTypes:[],adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"This is a hero caption",copyright:"Hero copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"},localCaption:"This is a hero local caption"}}],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Left aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"left",localCaption:"Left aligned image"},id:"4dynb5l3"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Center aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"center",localCaption:"Center aligned image"},id:"4dynb5l4"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Right aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"right",localCaption:"Right aligned image"},id:"4dynb5l5"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}}],topics:[{name:"Coronavirus",path:"/topic/coronavirus",id:"2791",uuid:"5fb2cb72-e9f4-4fcf-b747-bbba4afe8c1b"},{name:"covid-19",path:"/topic/covid-19",id:"2792",uuid:"808643d7-50fd-401a-b9de-2ef4d182b5f8"},{name:"Boris Johnson",path:"/topic/boris-johnson",id:"2790",uuid:"ca965785-4801-48bd-b738-6d341a18867f"},{name:"second wave",path:"/topic/second-wave",id:"6215",uuid:"4eb366bc-4861-4af4-a625-7045cdc92344"},{name:"Quarantine",path:"/topic/quarantine",id:"3451",uuid:"b607d24f-b8b8-4e67-aeac-20170cbabd3d"},{name:"Schools",path:"/topic/schools",id:"2880",uuid:"0ffee463-3f17-4966-a9fd-6fcd4cc0c64b"},{name:"Oliver Dowden",path:"/topic/oliver-dowden",id:"4291",uuid:"9f5e5539-6d52-433e-b472-5d76a4d60813"}]}),newslettersConfig=__webpack_require__(328),publication=__webpack_require__(127),articleX2=__webpack_require__(329),article=__webpack_require__(10),articleX4=__webpack_require__(330),ad_replacement=type=>({"premium-ad":{AdReplacement:{type:"premium_ad",data:{name:"Premium ad name",link:"/",category:null,id:"25",uuid:"e935d011-f8f8-4b34-a286-874659e29322",image:{type:"image",data:{title:"ICYMI MPU",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:null,bundle:"remote_image",mid:632377,changed:"1595331176",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}}}},"premium-letter":{AdReplacement:{type:"premium_letter",data:{name:"Premium letter name",heading:"Premium letter heading",link:"/",author:{name:"Premium letter author",id:"28644",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:"I'm an author of premium letters",imageUrl:Object(createImage.b)(150,150,0),twitter:"SomeAuthor",facebook:null,location:null,path:"/author/some-journo",description:"Some journo with a job working here",extra:null},body:"<p>Bla Bla Blah.....</p>",id:"11",uuid:"f711b4ba-6623-4362-bbf8-413dcfe60da9"}}}}[type]||{}),articleX6PlusMPU=(articleOverrides,adReplacementType="none")=>({name:"6 articles + MPU",type:"ArticleX6PlusMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"mpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX6 plus MPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 6"}),...articleOverrides}],...ad_replacement(adReplacementType)}),articleX8=articleOverrides=>({name:"8 articles",type:"ArticleX8",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX8 article 1",heroType:"video"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 3 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 8"}),...articleOverrides}]}),articleX8PlusDMPU=(articleOverrides,adReplacementType="none")=>({name:"8 articles + DMPU",type:"ArticleX8PlusDMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"dmpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX8 plus DMPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 8"}),...articleOverrides}],...ad_replacement(adReplacementType)}),heroArticle=__webpack_require__(331),heroPlus2Articles=articleOverrides=>({name:"Hero + 2 Articles",type:"HeroPlus2Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X2 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 2",heroType:"video",live:!0}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 3"}),...articleOverrides}]}),heroPlus3Articles=articleOverrides=>({name:"Hero + 3 Articles",type:"HeroPlus3Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X3 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 4"}),...articleOverrides}]}),heroPlus6Articles=articleOverrides=>({name:"Hero + 6 Articles",type:"HeroPlus6Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X6 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 4"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 5"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 6"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 7"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 8"}),...articleOverrides}]}),more=__webpack_require__(258),title=__webpack_require__(332);var mockStaticArticle=()=>({type:"article",id:"2454",remoteId:null,status:!0,title:"Contact Evening Standard",titleShort:"Contact Evening Standard",titleSocial:"Contact Evening Standard",titleSEO:null,lead:"",path:"/service/contact-evening-standard-b2454.html",articleTypes:[{name:"Service",path:"/article-type/service",id:"6336",uuid:"dd3071b6-e9d5-4388-88b1-475b7dc4e5cc",changed:"1600680690"}],hierarchy:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],workflow:"Draft",sections:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],hero:null,photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:null,updated:1601652557,changed:1601652557,publish:1601652557,firstCreated:1601647345,firstPublished:1601649499,overrideDate:0,isLiveBlog:!1,wordCount:842,imageCount:0,contentSource:[{name:"Internal",id:"6343",uuid:"774920cf-9dc9-463f-82f4-4f5be8d25046"}],tags:null,chain:null,topics:null,people:null,teams:null,events:null,publications:[{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}}],sidebar:{type:"sidebar_layout",data:{name:"Evening Standard Default sidebar_layout",id:"3",uuid:"563fbb67-4ca6-4398-8f21-f5a921d9efae",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null},layoutSettings:[{type:"markup",name:"Sidebar Markup",id:"8e27in6o",markup:""},{type:"Ad",name:"Sidebar Ad",id:"cjr5sxmk",adSource:"DFP"},{type:"MostPopular",name:"Most Popular",id:"wx1oq1dr"},{type:"PopularVideos",name:"Popular Videos",id:"s7x7wdxw"},{type:"Ad",name:"Sidebar Ad",id:"ivutyz22",adSource:"DFP"},{type:"SponsoredFeatures",name:"Sponsored Features",id:"gvp80c5v"},{type:"Taboola",name:"Taboola",id:"594axpb8"},{type:"Ad",name:"Sidebar Ad",id:"xqot2o8k",adSource:"DFP"}]},adConfig:{type:"ad_config",data:{name:"standard.co.uk Ad Config",description:"Default config for the Evening Standard",id:"1",uuid:"a9620513-8ece-4f60-8772-9891b5faf6fd",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null,article:null},adConfig:[]},commenting:!0,priority:"4",images:null,OGImages:null,body:[{type:"markup",data:{markup:"<p>Here we set out some key information about who does what across our business and how you can contact them. You will find email addresses and phone numbers for our various departments. It will help us to answer your query quickly and fully if you direct it to the right place.</p>"},id:"r1nxh20s"},{type:"markup",data:{markup:'<p>If you have a story you think we might be interested to know about please email our news team at <a rel="nofollow" href="mailto:news@standard.co.uk">news@standard.co.uk</a>.</p>'},id:"3p070n38"},{type:"markup",data:{markup:'<p>For help with a technical problem relating to <a rel="nofollow" href="https://www.standard.co.uk">standard.co.uk</a> please contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>. For technical problems with the <strong>Evening Standard app</strong> please also contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>.</p>'},id:"gxezcti2"},{type:"markup",data:{markup:'<p>If you have a concern about editorial material that has appeared in the Evening Standard or on this website (or on our apps), please visit our <a href="/service/code-conduct-complaints-b2443.html">Code of Conduct and our complaints procedure page</a>.</p>'},id:"q2zu192k"},{type:"H2",data:{markup:"<h2>E-editions</h2>"},id:"6h1b1kxp"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:standardonline@newspaperdirect.com">standardonline@newspaperdirect.com</a></p>'},id:"c4q05nvq"},{type:"markup",data:{markup:"<p>(A subscription to the Evening Standard E-editions provides access to the newspaper on line each day and includes all magazines, supplements and any special features published in the news stand edition in the UK)</p>"},id:"i7bwr7w1"},{type:"H2",data:{markup:"<h2>Advertising</h2>"},id:"w2z77ycp"},{type:"markup",data:{markup:'<p>Click here to find out more about advertising in the Evening Standard <a rel="nofollow" href="http://esimedia.co.uk/">esimedia.co.uk</a></p>'},id:"vtf5a3ro"},{type:"H2",data:{markup:"<h2>Evening Standard promotions</h2>"},id:"iiim3is7"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:Davina.kesby@esimedia.co.uk">Davina.kesby@esimedia.co.uk</a></p>'},id:"ufrp2bvn"},{type:"H2",data:{markup:"<h2>Postal address:</h2>"},id:"z182wrw6"},{type:"markup",data:{markup:"<p>Evening Standard</p>"},id:"n5cbt5ya"},{type:"markup",data:{markup:"<p>ESI Media</p>"},id:"i76q9y94"},{type:"markup",data:{markup:"<p>2 Derry Street</p>"},id:"iloilefn"},{type:"markup",data:{markup:"<p>London W8 5TT​</p>"},id:"nju2j6g0"},{type:"markup",data:{markup:"<p>United Kingdom</p>"},id:"du1c8gio"},{type:"markup",data:{markup:"<p>Switchboard - 020 3367 7000</p>"},id:"l9418yeq"},{type:"H2",data:{markup:"<h2>Editorial contact details (newspaper)</h2>"},id:"2hw287zp"},{type:"markup",data:{markup:"<p>Editor: Emily Sheffield</p>"},id:"pj71460v"},{type:"markup",data:{markup:"<p>Editor in Chief: George Osborne</p>"},id:"8nr7kw5b"},{type:"markup",data:{markup:"<p>Deputy Editor: Charlotte Ross</p>"},id:"ymakbtx1"},{type:"markup",data:{markup:"<p>Executive Editor: Jack Lefley</p>"},id:"65cq0jwq"},{type:"listbulleted",data:{markup:"<ul><li>E-mail: syndication@standard.co.uk</li><li>Telephone: +44 (0)20 3615 2272 (text and video);</li><li>Telephone: +44 (0)20 3615 2277 (pictures)</li></ul>"},id:"g5v5akxt"},{type:"H3",data:{markup:"<h3>GO London</h3>"},id:"kq52bk6g"},{type:"markup",data:{markup:"<p>Editor: David Ellis</p>"},id:"5wqx9s06"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:david.ellis@standard.co.uk">david.ellis@standard.co.uk</a></p>'},id:"qyw79lzc"},{type:"H3",data:{markup:"<h3>Shopping</h3>"},id:"7tzarkvf"},{type:"markup",data:{markup:"<p>Editor: Jessica Reynolds</p>"},id:"u0rgahbi"},{type:"markup",data:{markup:'<p>E:<a rel="nofollow" href="mailto:jessica.reynolds@standard.co.uk"> jessica.reynolds@standard.co.uk</a></p>'},id:"vdgbm1ll"},{type:"H3",data:{markup:"<h3>Insider</h3>"},id:"23odz3fx"},{type:"markup",data:{markup:"<p>Editor: Lucy Pavia​</p>"},id:"5b6c2thb"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:lucy.pavia@standard.co.uk">lucy.pavia@standard.co.uk</a></p>'},id:"m7jzxvf2"},{type:"HR",data:{markup:""},id:"ri9jrypa"},{type:"H2",data:{markup:"<h2>Commercial contacts</h2>"},id:"bq15me4r"},{type:"markup",data:{markup:"<p>CEO: Charles Yardley</p>"},id:"hggk466j"},{type:"markup",data:{markup:"<p>Commercial director: James White</p>"},id:"yslu0zr0"},{type:"markup",data:{markup:"<p>Circulation Manager: Tim Freeman</p>"},id:"xh41dpiz"},{type:"markup",data:{markup:"<p>Classified Ad Director: Martin Smith</p>"},id:"wfrvboy7"},{type:"markup",data:{markup:'<p>Contact details: <a rel="nofollow" href="http://esimedia.co.uk/contact/">http://esimedia.co.uk/contact/</a></p>'},id:"g82tr3f4"},{type:"markup",data:{markup:""},id:"a0uws27l"}],extra:{products:[],starRating:0,isBreakingNews:!1,isHideNewsletterSignUp:!1,urlRedirect:"",featureTitle:"",isDisableAutoGallery:!1,isShowSponsoredCapsule:!1,isHideFromFIA:!1,isHideFromAMP:!1,isHideFromAppleNews:!1,authorInfo:"",isHideDisplayAds:!1,isHideHardCodedAds:!1,isHidePreRollAds:!1,displayDatePreference:"lastUpdatedDate",seoDescription:"",canonicalUrl:"",isDisableAllAds:!0,selectedCompetition:"",selectedSeason:"",selectedMatch:"",liveblog:"",liveblogKeypoints:"",liveblogKeypointsTitle:""},notes:[],grapeshot:["NONE"]});const mockWithRequest_mockArticle={},mockWithRequest_mockSection={},mockWithRequest_mockMenu={},mockReq={},mockWithRequest_mockConfiguration={},mockLocals={},mockWithRequest_mockStaticArticle={},mockRequestProps={res:{locals:mockLocals},req:mockReq,cleanAmp:!1,article:mockWithRequest_mockArticle,section:mockWithRequest_mockSection,menu:mockWithRequest_mockMenu,jsGlobals:{},configuration:mockWithRequest_mockConfiguration,staticArticle:mockWithRequest_mockStaticArticle},RequestProvider=__webpack_require__(8);RequestProvider.withRequest=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,...mockRequestProps}),RequestProvider.withRequestOnly=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,req:mockReq,res:{locals:{configuration:{}}}});const resetAndAssignOverrides=(mock,orig,overrides)=>{var obj;obj=mock,Object.keys(obj).forEach(key=>{delete obj[key]}),Object.assign(mock,orig,overrides)},setMockArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockArticle(),overrides)},setMockSectionOverrides=overrides=>{var articleOverrides;resetAndAssignOverrides(mockWithRequest_mockSection,{type:"section",section:{name:"News",path:"/",sourcePath:"news"},publication:"standard.co.uk",adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},components:[Object(heroArticle.a)(),Object(articleX2.a)(),{name:"3 articles",type:"ArticleX3",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX3 article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 2 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 3"}),...articleOverrides}]},Object(articleX4.a)(),articleX8(),heroPlus2Articles(),heroPlus3Articles(),heroPlus6Articles(),Object(title.a)(),articleX6PlusMPU(),articleX8PlusDMPU(),Object(more.a)()]},overrides)},setMockMenuOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockMenu,{fullMenu:{name:"standard.co.uk Full Nav",domain:"standard.co.uk",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"standard.co.uk Nav Bar",domain:"standard.co.uk",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},subnavMenu:{name:"standard.co.uk Nav Bar - Best",domain:"standard.co.uk",bundle:"15",id:"15",uuid:"0b898818-1b27-4f1a-bc61-6ee99af7a41c",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./",children:[{title:"Sub-submenu item 1",id:"sub-submenu_1",path:"./"},{title:"Sub-submenu item 2",id:"sub-submenu_2",path:"./"},{title:"Sub-submenu item 3",id:"sub-submenu_3",path:"./"}]},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"standard.co.uk Footer",domain:"standard.co.uk",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},overrides)},setMockReqOverrides=overrides=>{resetAndAssignOverrides(mockReq,{path:"",cookies:{},url:"",query:[]},overrides)},setMockStaticArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockStaticArticle(),overrides)},setMockConfigurationOverrides=overrides=>(resetAndAssignOverrides(mockWithRequest_mockConfiguration,{domain:"standard.co.uk",jsGlobals:{userComments:[]},baseUrl:"",articleThemes:{insider:["/insider"]},sectionThemes:{insider:["/insider"]},feeds:{mmm:{src:"/mockMostPopularFeed.json",items:"articles"}},subdomain:{static:"static-dev"},componentThemes:{voices:["/voices"]},subscriptionConfig:{uk:{premium:{monthly:{headerCopy:"premium monthly header copy",price:"£premium-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{introOffer:"premium anual intro offer"}},tide:{monthly:{headerCopy:"tide monthly header copy",price:"£tide-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{}},student:{}}},locale:"UK",jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},jwplayerPlayerIds:{default:{defaultPlayer:"XLzx33eA",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"9ygSIn9G",commercialPlayer:"liFHUI6p"},premium:{defaultPlayer:"5o5ADYp0",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"iFfmiGED",commercialPlayer:"liFHUI6p"},amp:{defaultPlayer:"OUuXFa7T",noAdsPlayer:"liFHUI6p",sensitivePlayer:"uc5S9Kil",inlinePlayer:"cEvdfzWH",commercialPlayer:"sQ67rESa"}},social:{},newslettersConfig:newslettersConfig.a[publication.a]},overrides),mockWithRequest_mockConfiguration),setMockLocalsOverrides=overrides=>{resetAndAssignOverrides(mockLocals,{cleanAmp:!1,article:mockWithRequest_mockArticle,configuration:mockWithRequest_mockConfiguration,menu:mockWithRequest_mockMenu,staticArticle:mockWithRequest_mockStaticArticle},overrides)},setIsArticle=()=>{delete mockRequestProps.section,mockRequestProps.article=mockWithRequest_mockArticle},setIsSection=()=>{delete mockRequestProps.article,mockRequestProps.section=mockWithRequest_mockSection},setIsOther=()=>{delete mockRequestProps.article,delete mockRequestProps.section}},77:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);const ArticleCapsule=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(({children:children,className:className,sections:sections,override:override,sponsorName:sponsorName,isLiveBlog:isLiveBlog,path:path})=>{let title=sections&&sections[sections.length-1].name;return sponsorName&&!sections.filter(s=>"Must Read"===s.name).length&&(title="Promoted content"),isLiveBlog&&(title="LIVE",className+=" live-blog"),override&&!isLiveBlog&&(title=override.name,path=override.path),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:className?[className,"capsule"].join(" "):"capsule",href:path,children:[children,title]})})`
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
`;__webpack_exports__.a=ArticleCapsule},78:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),classnames=__webpack_require__(51),classnames_default=__webpack_require__.n(classnames);const Icon=styled_components_browser_esm.default.span`
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
`,FormTextField_TextField=({className:className,...passThroughProps})=>Object(jsx_runtime.jsx)(Fieldwrapper,{className:className,children:Object(jsx_runtime.jsx)(FormTextFieldInput,{...passThroughProps})});FormTextField_TextField.propTypes={className:prop_types_default.a.string},FormTextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=FormTextField_TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextField.js"]={name:"TextField",docgenInfo:FormTextField_TextField.__docgenInfo,path:"app/component/library/Forms/FormTextField.js"})},83:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),server_browser=__webpack_require__(255),es=__webpack_require__(924),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(333);const MPUModule=__webpack_require__(256);let mockMPUID=0;const Wrapper=styled_components_browser_esm.default.div`
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
`,getMaxSize=sizesArr=>sizesArr.reduce((acc,item)=>{const area=item[0]*item[1];return area>acc.area?{max:item,area:area}:acc},{area:0}).max,getMaxSizeFromString=sizes=>getMaxSize((sizes=>sizes.split("|").map(sizeStr=>sizeStr.split("x").map(d=>Number(d))))(sizes)),MockMPU=props=>{const styles={},{cleanAmp:cleanAmp}=props.res.locals;let max,mpuSizeConfig;const id="mock_mpu_"+mockMPUID;return mockMPUID+=1,props.sizes?(max=getMaxSizeFromString(props.sizes),styles.width=max[0]+"px",styles.height=max[1]+"px"):props["size-key"]?mpuSizeConfig=ads.b[props["size-key"]]:(styles.width="300px",styles.height="250px"),Object(jsx_runtime.jsxs)(Wrapper,{className:props.className,children:[!cleanAmp&&props["size-key"]&&Object(jsx_runtime.jsx)("style",{children:mpuSizeConfig.map(breakPoint=>`\n@media (min-width: ${breakPoint.from}px) {\n  #${id} {\n${(breakPoint=>`\n${breakPoint.supportedSizes.length?"display: flex;":"display: none;"}\n${breakPoint.supportedSizes.length?(([width,height])=>`width: ${width}px; height: ${height}px;`)(getMaxSize(breakPoint.supportedSizes)):""}`)(breakPoint)}\n  }\n}\n`).join("")}),Object(jsx_runtime.jsxs)("div",{style:styles,id:id,children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:props.id})}),props.sizes&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:props.sizes.replace(max.join("x"),`<strong>${max.join("x")}</strong>`)}}),props["size-key"]&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("p",{children:props["size-key"]}),mpuSizeConfig.map(breakPoint=>Object(jsx_runtime.jsxs)("p",{children:[breakPoint.from,"+: ",!breakPoint.supportedSizes.length&&"n/a",breakPoint.supportedSizes.map(size=>size.join("x")).join("|")]},breakPoint.from))]})]})]})};MockMPU.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,sizes:prop_types_default.a.string,"size-key":prop_types_default.a.string,res:prop_types_default.a.object.isRequired},MPUModule.default=MockMPU;__webpack_require__(2089);var mockWithRequest=__webpack_require__(74),mergeDeepRight=__webpack_require__(699),Styles=__webpack_require__(3);const WithTheme=({domain:domain,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsxs)(styled_components_browser_esm.ThemeProvider,{theme:{...Object(mergeDeepRight.a)(Styles.e.default,Styles.e[domain]||{}),domain:domain},children:[Object(jsx_runtime.jsx)(Styles.a,{cleanAmp:cleanAmp}),Object(react.cloneElement)(children)]});WithTheme.propTypes={children:prop_types_default.a.element.isRequired,domain:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool},WithTheme.__docgenInfo={description:"",methods:[],displayName:"WithTheme",props:{children:{type:{name:"element"},required:!0,description:""},domain:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var components_WithTheme=WithTheme;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/WithTheme.js"]={name:"WithTheme",docgenInfo:WithTheme.__docgenInfo,path:"stories/helpers/components/WithTheme.js"});class Mocker_Mocker extends react.Component{constructor(props){super(props),this.setOverrides(props);const{domain:domain}=Object(mockWithRequest.e)(props.configurationOverrides);Object(mockWithRequest.f)(props.localsOverrides);const sheet=new styled_components_browser_esm.ServerStyleSheet;Object(server_browser.renderToString)(sheet.collectStyles(Object(jsx_runtime.jsx)(components_WithTheme,{domain:domain,cleanAmp:props.localsOverrides.cleanAmp,children:Object(react.cloneElement)(this.props.children)}))),this.css=sheet.instance.toString(),sheet.seal(),this.domain=domain}setOverrides(){}render(){return Object(jsx_runtime.jsxs)(es.a,{initialize:{languages:[{name:"English",code:"en"}],translation:{mostPopular:["Most Popular","alo"]},options:{defaultLanguage:"en",renderToStaticMarkup:server_browser.renderToStaticMarkup}},children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:this.css}}),Object(jsx_runtime.jsx)(components_WithTheme,{domain:this.domain,children:Object(react.cloneElement)(this.props.children)})]})}}Mocker_Mocker.propTypes={children:prop_types_default.a.element.isRequired,configurationOverrides:prop_types_default.a.object,localsOverrides:prop_types_default.a.object},Mocker_Mocker.defaultProps={configurationOverrides:{},localsOverrides:{}},Mocker_Mocker.__docgenInfo={description:"",methods:[{name:"setOverrides",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Mocker",props:{configurationOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},localsOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};__webpack_exports__.a=Mocker_Mocker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/Mocker.js"]={name:"Mocker",docgenInfo:Mocker_Mocker.__docgenInfo,path:"stories/helpers/components/Mocker.js"})},899:function(module){module.exports=JSON.parse('{"dirty-amp.js":"/_build/dirty-amp.32f27d89d94130c52b53.js","dirty-amp.js.map":"/_build/dirty-amp.32f27d89d94130c52b53.js.map","preview.js":"/_build/preview.79fa93dedd5debf7dbf1.js","preview.js.map":"/_build/preview.79fa93dedd5debf7dbf1.js.map","profile.js":"/_build/profile.d41d8cd98f00b204e980.js","profile.js.map":"/_build/profile.d41d8cd98f00b204e980.js.map","register.js":"/_build/register.359999e56a7029505852.js","register.js.map":"/_build/register.359999e56a7029505852.js.map","sar.js":"/_build/sar.3b7e38d55bbf65d0df49.js","sar.js.map":"/_build/sar.3b7e38d55bbf65d0df49.js.map","settings.js":"/_build/settings.ca49e00963cdd8ae81f1.js","settings.js.map":"/_build/settings.ca49e00963cdd8ae81f1.js.map","thankyou.js":"/_build/thankyou.5844e1adf8790b06e066.js","thankyou.js.map":"/_build/thankyou.5844e1adf8790b06e066.js.map","sw.js":"/_build/sw.js","sw.js.map":"/_build/sw.js.map"}')},92:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return TOP_BANNER})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WALLPAPER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return NATIVE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TABOOLA})),__webpack_require__.d(__webpack_exports__,"e",(function(){return adConfiguration})),__webpack_require__.d(__webpack_exports__,"f",(function(){return adConfigurationByType}));const TOP_BANNER="TopBanner",WALLPAPER="WallPaper",NATIVE="Native",TABOOLA="Taboola",adConfiguration=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.some(({type:type,value:value})=>type===needle&&!0===value),adConfigurationByType=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.find(({type:type})=>type===needle)||{}},925:function(module,exports,__webpack_require__){__webpack_require__(926),__webpack_require__(1277),__webpack_require__(1278),__webpack_require__(1475),__webpack_require__(1487),__webpack_require__(1489),__webpack_require__(1494),module.exports=__webpack_require__(2075)},948:function(module,exports){}},[[925,1,2]]]);
//# sourceMappingURL=main.5e1becdcf695e2d2289a.bundle.js.map