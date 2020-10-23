(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(module,__webpack_exports__,__webpack_require__){"use strict";var _helpers_createImage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(41);const getHero=(type,title)=>({video:[{type:"jw_player",data:{id:"gzjttWAQ",bundle:"jw_player_id",mid:41424,changed:"1593649785"}},{type:"image",data:{title:"coronavirus.jpg",description:null,caption:"Video caption",copyright:"EPA",credit:"EPA",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8499441",bundle:"remote_image",mid:41422,changed:"1593649785",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],image:[{type:"image",data:{title:"hero.jpg",description:null,caption:"Hero caption",copyright:"AFP",credit:"AFP",alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(`${title}-${type}`),id:"8420361",bundle:"remote_image",mid:25231,changed:"1589940955",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}[type]);__webpack_exports__.a=({title:title,heroType:heroType="image",live:live=!1,articleType:articleType="Liveblog"})=>({type:"article",id:"2233",status:!0,title:"Image "+title,titleShort:`Image ${title} - short`,titleSocial:`Image ${title} - social`,titleSEO:null,lead:"<p>The leader</p>",path:"/",articleTypes:[{name:articleType,path:"/article-type/liveblog",id:"16733"}],hierarchy:[{name:"hierarchy 1",path:"/",id:"869"},{name:"hierarchy 2",path:"/news/world",id:"954"},{name:"hierarchy 3",path:"/news/world/middle-east",id:"965"}],workflow:"Draft",sections:[{name:"section 1",path:"/",id:"869"},{name:"section 2",path:"/",id:"954"},{name:"section 3",path:"/",id:"965"}],hero:getHero(heroType,title),photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:[{name:"Author Name",id:null,email:null,firstName:null,lastName:null,imageUrl:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_0__.a)(title+"-author")}],updated:1593764687,changed:1593764680,publish:1589885019,unPublish:1909232586,isLiveBlog:live})},108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getClassName}));const getClassName=(...classNames)=>classNames.filter(name=>"object"==typeof name&&null!==name?Object.entries(name).filter(([,value])=>!!value).map(([key])=>key).join(" "):!!name).join(" ")},117:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return TaboolaDiv})),__webpack_require__.d(__webpack_exports__,"a",(function(){return TaboolaAmp}));var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),config_config=__webpack_require__(164),classes=__webpack_require__(108),collection=__webpack_require__(65),helpers=__webpack_require__(166);const layoutProps={height:collection.b,width:collection.j,layout:collection.d,sizes:collection.i,heights:collection.c,media:collection.e,placeholder:collection.h,fallback:collection.a,noloading:collection.f,"disable-inline-width":helpers.a};const AmpEmbed=props=>{const{heights:heights,consentNotificationId:consentNotificationId,loadingStrategy:loadingStrategy,adContainerId:adContainerId,...others}=props;return Object(jsx_runtime.jsx)("amp-embed",{heights:(null==heights?void 0:heights.join(","))||"","data-consent-notification-id":consentNotificationId,"data-loading-strategy":loadingStrategy,"data-ad-container-id":adContainerId,"data-block-on-consent":"_till_responded",...others})};AmpEmbed.propTypes={...layoutProps,id:prop_types_default.a.string,className:prop_types_default.a.string,type:prop_types_default.a.string.isRequired,src:prop_types_default.a.string,json:prop_types_default.a.object,consentNotificationId:prop_types_default.a.string,loadingStrategy:prop_types_default.a.number,adContainerId:prop_types_default.a.string};var Embed=AmpEmbed;const DivRoot=props=>{const{id:id,className:className}=props;return Object(jsx_runtime.jsx)("div",{...props,id:id,className:Object(classes.a)(className,"taboola")})};DivRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string};const TaboolaDiv=DivRoot,AmpRoot=props=>{var _config$taboola;const{id:id,height:height,heights:heights,width:width,mode:mode,placement:placement,res:{locals:{domain:domain}}}=props,config=config_config.a.getPublications()[domain],publisher=null==config||null===(_config$taboola=config.taboola)||void 0===_config$taboola?void 0:_config$taboola.publisherId;return publisher?Object(jsx_runtime.jsx)(Embed,{id:id,type:"taboola",layout:"responsive",height:height,heights:heights,width:width,"data-publisher":publisher,"data-mode":mode,"data-placement":placement,"data-target_type":"mix","data-article":"auto"}):null};AmpRoot.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,domain:prop_types_default.a.string.isRequired,height:prop_types_default.a.number,heights:prop_types_default.a.array,width:prop_types_default.a.number,mode:prop_types_default.a.string.isRequired,placement:prop_types_default.a.string.isRequired,res:prop_types_default.a.object.isRequired};const TaboolaAmp=Object(RequestProvider.withRequest)(AmpRoot),Taboola=props=>{const{res:{locals:{cleanAmp:cleanAmp}}}=props;return cleanAmp?Object(jsx_runtime.jsx)(TaboolaAmp,{...props}):Object(jsx_runtime.jsx)(TaboolaDiv,{...props})};Taboola.propTypes={res:prop_types_default.a.object.isRequired};__webpack_exports__.c=Object(RequestProvider.withRequest)(Taboola)},1273:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(254)},128:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment),services_article=__webpack_require__(77);const getDataByType=(req,res)=>{const{cleanAmp:cleanAmp,configuration:{domain:domain}}=res.locals;let data={};if(res.locals.article){var _article$authors,_article$topics;const article=res.locals.article,{path:path,publish:publish}=article,channels=path.slice(1).split("/").slice(0,-1),utc=moment_default.a.unix(publish).utc(),publishedTime=utc.format("hh:mm:ss"),publishedDate=utc.format("dddd, D MMMM YYYY");data={page_type:"liveblog"===(null==article?void 0:article.type)?"Live Blog Article":"Article",site_sections:channels.join(":"),is_amp_page:cleanAmp,article_premium_status:(null==article?void 0:article.premium)?"premium":"free",article_id:(null==article?void 0:article.remoteId)||(null==article?void 0:article.id),article_title:null==article?void 0:article.title,article_author:null==article||null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(x=>x.name).join(","),article_category:"",article_publication_time:publishedTime,published_date:publishedDate,first_published_date:publishedDate,homepage_section:"",article_page_filename:path.split("/").slice(-1)[0],lead_media_item:Object(services_article.c)(article.hero),article_topic_tags:null==article||null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(x=>x.name).join(","),word_count:null==article?void 0:article.wordCount,internal_links_count:article.body?Object(services_article.e)(article.body,domain):0}}if(res.locals.section){const feed=res.locals.section,{path:path}=feed.section,channels=path.slice(1).split("/");data={page_type:"/"===path?"frontpage":path.startsWith("/topic/")?"Topic":path.startsWith("/author/")?"Author":"Channel frontpage",site_sections:channels.join(":"),is_topic_page:cleanAmp}}return data},getAmpState=(req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!0,...getDataByType(0,res)}};var Styles=__webpack_require__(3),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
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
`,Helmet=__webpack_require__(50);const COOKIE_URL="https://www.standard.co.uk/service/cookie-policy-7785319.html",Wrapper=styled_components_browser_esm.default.div`
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
`,ModalHeader=({heading:heading,backFn:backFn})=>Object(jsx_runtime.jsxs)("div",{className:"modal-header",children:[backFn&&Object(jsx_runtime.jsx)(BackButton,{on:backFn,role:"button"}),Object(jsx_runtime.jsx)("span",{children:heading}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]});ModalHeader.propTypes={heading:prop_types_default.a.string.isRequired,backFn:prop_types_default.a.string};const AmpConsent=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-consent",src:"https://cdn.ampproject.org/v0/amp-consent-0.1.js"}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-geo",src:"https://cdn.ampproject.org/v0/amp-geo-0.1.js"})]}),Object(jsx_runtime.jsx)("amp-geo",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({ISOCountryGroups:{eea:["preset-eea"]}})}})}),Object(jsx_runtime.jsxs)("amp-consent",{layout:"nodisplay",id:"consent-element",children:[Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({consentInstanceId:"my-consent",promptUI:"consent-ui",consentRequired:!1,geoOverride:{eea:{consentRequired:!0}}})}}),Object(jsx_runtime.jsxs)(Wrapper,{id:"consent-ui",children:[Object(jsx_runtime.jsxs)(Modal,{id:"acceptScreen",children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Our use of cookies"}),Object(jsx_runtime.jsxs)("p",{children:["We and our partners use cookies and other technologies to help us understand how readers use our website, and to deliver relevant content and advertising. Click “Accept” to consent to the use of this technology and the processing of your personal data for these purposes. More information is available in our"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"cookie notice"}),". If you do not agree, click to manage your options."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:manageScreen.show,acceptScreen.hide",role:"button",className:"secondary",children:"Manage"})]}),Object(jsx_runtime.jsx)(CloseButton,{on:"tap:consent-element.dismiss",role:"button"})]}),Object(jsx_runtime.jsxs)(Modal,{id:"manageScreen",hidden:!0,children:[Object(jsx_runtime.jsx)(ModalHeader,{heading:"Options",backFn:"tap:manageScreen.hide,acceptScreen.show"}),Object(jsx_runtime.jsxs)("p",{children:["Choosing to accept cookies from our advertising partner Google will allow you to receive personalised advertising. If you choose to decline, the advertising made available throughout the site will not be tailored to you. For more information, please read our cookie notice"," ",Object(jsx_runtime.jsx)("a",{href:COOKIE_URL,target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(jsx_runtime.jsxs)(ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.accept",role:"button",children:"Accept"}),Object(jsx_runtime.jsx)(ConsentButton,{on:"tap:consent-element.reject",role:"button",className:"secondary",children:"Decline"})]})]})]})]})]}):null;AmpConsent.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AmpConsent.__docgenInfo={description:"",methods:[],displayName:"AmpConsent",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var AMP_AmpConsent=Object(RequestProvider.withRequest)(AmpConsent);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/AmpConsent.js"]={name:"AmpConsent",docgenInfo:AmpConsent.__docgenInfo,path:"app/component/library/AMP/AmpConsent.js"});const AmpAnalytics=({type:type,configJson:configJson,...others})=>Object(jsx_runtime.jsx)("amp-analytics",{type:type,...others,children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(configJson)}})});AmpAnalytics.propTypes={type:prop_types_default.a.string.isRequired,configJson:prop_types_default.a.object.isRequired},AmpAnalytics.__docgenInfo={description:"",methods:[],displayName:"AmpAnalytics",props:{type:{type:{name:"string"},required:!0,description:""},configJson:{type:{name:"object"},required:!0,description:""}}};var Analytics=AmpAnalytics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Analytics.js"]={name:"AmpAnalytics",docgenInfo:AmpAnalytics.__docgenInfo,path:"app/component/library/AMP/Analytics.js"});const AmpComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"comscore",configJson:{vars:{c2:configuration.comscore.clientId},extraUrlParams:{comscorekw:"amp"}}}):null)};AmpComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Comscore=Object(RequestProvider.withRequest)(AmpComscoreAnalytics),State=__webpack_require__(340);const AmpAuth=({article:article,section:section,configuration:configuration})=>{const regSourceSection=article&&article.sections&&article.sections[0].name||section&&section.section&&section.section.name||"News",regSourceMethod=encodeURIComponent((article?"Article":"Section")+"+Signpost"),newsletterKey=((article,section,config)=>{if(!config)return;let key="receiveHeadlinesNews";if(section&&section.components){const comp=section.components.find(comp=>"NewsLetterSignup"===comp.type);comp&&(key=comp.newsletterTarget)}if(article&&article.sections){const articleSections=[...article.sections].reverse();key=Object.keys(config).find(newsletter=>articleSections.find(section=>config[newsletter].section===section.name))}return key})(article,section,configuration.newslettersConfig),json={authorization:"/internal-api/login-authorization.json?rid=READER_ID&url=CANONICAL_URL&ref=DOCUMENT_REFERRER&_=RANDOM",noPingback:"true",login:{"sign-in":"/login?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL","register-newsletter":`/register?noframe&rid=READER_ID&url=SOURCE_URL&return=RETURN_URL&regSourceSection=${regSourceSection}&regSourceMethod=${regSourceMethod}${newsletterKey&&"&newsletter="+newsletterKey}`},authorizationFallbackResponse:{error:"true",fullName:"",loggedIn:!1,nickname:!1,subscriber:!1}};return Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{id:"amp-access",type:"application/json",children:JSON.stringify(json)})})};AmpAuth.propTypes={article:prop_types_default.a.object,section:prop_types_default.a.object,configuration:prop_types_default.a.object},AmpAuth.__docgenInfo={description:"",methods:[],displayName:"AmpAuth",props:{article:{type:{name:"object"},required:!1,description:""},section:{type:{name:"object"},required:!1,description:""},configuration:{type:{name:"object"},required:!1,description:""}}};var library_AmpAuth=Object(RequestProvider.withRequest)(AmpAuth);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AmpAuth.js"]={name:"AmpAuth",docgenInfo:AmpAuth.__docgenInfo,path:"app/component/library/AmpAuth.js"});const functionString=(()=>{const referrer=document.referrer?new URL(document.referrer):"",getCookie=function(name,defaultValue=!1){const match=document.cookie.match(new RegExp("(^|;|\\s+)"+name+"=(.*?)[;|$]"));return match?decodeURIComponent(match[2]):defaultValue},d=new Date,YYYY=new Intl.DateTimeFormat("en",{year:"numeric",timezone:"UTC"}).format(d),MM=new Intl.DateTimeFormat("en",{month:"2-digit",timezone:"UTC"}).format(d),DD=new Intl.DateTimeFormat("en",{day:"2-digit",timezone:"UTC"}).format(d),hh=new Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1,timezone:"UTC"}).format(d),mm=new Intl.DateTimeFormat("en",{minute:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0"),ss=new Intl.DateTimeFormat("en",{second:"2-digit",timezone:"UTC"}).format(d).padStart(2,"0");var name;Object.assign(window.digitalData,{page_title:document.title,page_query:document.location.search,page_name:document.location.pathname,page_previous_url:referrer&&referrer.protocol+"://"+referrer.host+referrer.pathname,page_previous_path:referrer&&referrer.pathname,page_previous_query:referrer&&referrer.search,timestamp:`${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,gigya_logged_in_status:(name="esi_auth",!1!==getCookie(name)?"logged in":"not logged in"),gigya_uid:getCookie("esi_guid"),gigya_registration_date:getCookie("esi_registration_date"),gigya_share_provider:"",gigya_demographics:getCookie("esi_demographics"),gigya_sign_on_provider:getCookie("esi_sign_on_provider"),gigya_user_status:getCookie("esi_user_status","anonymous")})}).toString().match(/{([\s|\S]+)}/m)[1],AdobeAnalytics=props=>{const{req:req,res:res,res:{locals:{cleanAmp:cleanAmp}}}=props,ampData=((req,res)=>{const{locals:{configuration:{domain:domain,subdomain:subdomain}}}=res;return{requests:{base:"//${host}",iframeMessage:"${base}/iframe/launch.html"},vars:{host:`${subdomain.static}.${domain}`},extraUrlParams:{page_url:"${canonicalUrl}",actual_url:"${sourceUrl}",page_domain:"${sourceHost}",page_path:"${sourcePath}",page_title:"${title}",page_query:"",page_name:"${sourcePath}",page_categories:"",page_type:"",page_previous_url:"${documentReferrer}",page_previous_path:"",page_previous_query:"",...getDataByType(0,res)}}})(0,res),webData=((req,res)=>{const{originalUrl:originalUrl}=req,{domain:domain,baseUrl:baseUrl}=res.locals.configuration;return{page_url:`${baseUrl}${originalUrl}`,actual_url:`${baseUrl}${originalUrl}`,page_domain:domain,page_path:originalUrl,is_amp_page:!1,...getDataByType(0,res)}})(req,res),jsonString=JSON.stringify(webData);return cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"adobeanalytics_nativeConfig",configJson:ampData}):Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("script",{children:`digitalData = ${jsonString}; ${functionString}`})})};AdobeAnalytics.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired},AdobeAnalytics.__docgenInfo={description:"",methods:[],displayName:"AdobeAnalytics",props:{res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Adobe=Object(RequestProvider.withRequest)(AdobeAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Adobe.js"]={name:"AdobeAnalytics",docgenInfo:AdobeAnalytics.__docgenInfo,path:"app/component/library/Analytics/Adobe.js"});const getChartbeatVars=res=>{const{locals:{domain:domain,configuration:{chartbeat:chartbeat}}}=res,title=(({locals:{article:article}})=>null==article?void 0:article.title)(res),sections=(({locals:{article:article,section:section}})=>{var _section$section,_article$sections,_article$sections$;return[...(null==section||null===(_section$section=section.section)||void 0===_section$section?void 0:_section$section.path.split("/").slice(1))||[],...[Object(services_article.c)(null==article?void 0:article.hero)].filter(x=>x).map(x=>"mediatype_"+x),(null==article?void 0:article.premium)?"article-typepremium":"article-typenon-premium",...(null==article||null===(_article$sections=article.sections)||void 0===_article$sections||null===(_article$sections$=_article$sections[0])||void 0===_article$sections$?void 0:_article$sections$.path.split("/").slice(1))||[],...((null==article?void 0:article.topics)||[]).map(({path:path})=>path.split("/").slice(1).join("-"))].join()})(res),authors=(({locals:{article:article}})=>article?(article.authors||[]).map(({name:name})=>name).join():"")(res);return{uid:(null==chartbeat?void 0:chartbeat.uid)||null,domain:domain,title:title,sections:sections,authors:authors}},ChartbeatAnalytics=({res:res,res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"chartbeat",configJson:{vars:{...getChartbeatVars(res)}}}):null;ChartbeatAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},ChartbeatAnalytics.__docgenInfo={description:"",methods:[],displayName:"ChartbeatAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Chartbeat=Object(RequestProvider.withRequest)(ChartbeatAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Chartbeat.js"]={name:"ChartbeatAnalytics",docgenInfo:ChartbeatAnalytics.__docgenInfo,path:"app/component/library/Analytics/Chartbeat.js"});const ComscoreAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:configuration}}})=>{var _configuration$comsco,comsoreClientId;return(null==configuration||null===(_configuration$comsco=configuration.comscore)||void 0===_configuration$comsco?void 0:_configuration$comsco.clientId)&&(cleanAmp?null:Object(jsx_runtime.jsx)("script",{dangerouslySetInnerHTML:{__html:(comsoreClientId=configuration.comscore.clientId,`\nvar _comscore = _comscore || [];\n_comscore.push({ c1: "2", c2: ${comsoreClientId} });\n(function() {\n  var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;\n  s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/${comsoreClientId}/cs.js";\n  el.parentNode.insertBefore(s, el);\n})();`)}}))};ComscoreAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired};var Analytics_Comscore=Object(RequestProvider.withRequest)(ComscoreAnalytics);const GoogleAnalytics=({res:{locals:{cleanAmp:cleanAmp,configuration:{ga:{id:id}}}}})=>cleanAmp?Object(jsx_runtime.jsx)(Analytics,{type:"googleanalytics",id:"analytics2",configJson:{vars:{account:id},triggers:{defaultPageview:{on:"visible",request:"pageview"}}}}):null;GoogleAnalytics.propTypes={config:prop_types_default.a.object,res:prop_types_default.a.object.isRequired},GoogleAnalytics.__docgenInfo={description:"",methods:[],displayName:"GoogleAnalytics",props:{config:{type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""}}};var Google=Object(RequestProvider.withRequest)(GoogleAnalytics);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Analytics/Google.js"]={name:"GoogleAnalytics",docgenInfo:GoogleAnalytics.__docgenInfo,path:"app/component/library/Analytics/Google.js"});var icons_facebookIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 32"><path d="M18 12v6h-6v14H6V18H0v-6h6V9.5c0-1.2.2-2.5.6-3.8.4-1.3.9-2.4 1.6-3.2C9 1.6 9.8 1 10.7.6c.9-.4 2-.6 3-.6H18v6h-4.2c-.5 0-.9.2-1.3.5-.3.4-.5.8-.5 1.3V12h6z"></path></svg>\n';var icons_twitterIcon='\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 29.2"><path d="M31.8 4.6c.7-.1 1.4-.3 2.1-.5s1.4-.4 2.1-.8c-.5.7-1 1.4-1.6 2-.6.6-1.3 1.2-2.1 1.8V8c0 1.7-.2 3.4-.6 5-.4 1.6-1 3.2-1.8 4.8-.8 1.6-1.7 3-3 4.3-1.2 1.3-2.7 2.5-4.3 3.6-1.6 1.1-3.4 1.9-5.3 2.5-1.9.5-3.9.8-6.1.8-2.1 0-4.1-.3-6-.8-1.7-.4-3.5-1.2-5.2-2.3.2 0 .4.1.7.1h1.1c1.8 0 3.4-.3 4.9-.8 1.5-.5 2.9-1.3 4.3-2.4-.8 0-1.6-.1-2.3-.4-.7-.3-1.4-.6-2-1.1-.6-.5-1.2-1-1.6-1.6-.4-.6-.8-1.3-1-2.1.1.1.3.1.5.1h.8c.3 0 .7 0 1-.1s.6-.1 1-.2c-.9-.2-1.7-.5-2.4-.9s-1.3-1-1.9-1.6c-.6-.7-1-1.4-1.2-2.2-.3-.8-.4-1.6-.4-2.6.5.3 1 .5 1.5.6.5.2 1.1.3 1.8.3-1.1-.8-1.9-1.6-2.5-2.7-.5-.8-.8-2-.8-3.3 0-.6.1-1.2.3-1.9.2-.6.4-1.2.8-1.8 1 1.2 2.1 2.3 3.2 3.2S8 6.3 9.3 6.9c1.3.6 2.6 1.1 4 1.5 1.4.3 2.9.5 4.4.6-.1-.3-.2-.5-.2-.8v-.9c0-1 .2-2 .5-2.8.4-.9.9-1.6 1.6-2.4.7-.7 1.5-1.3 2.4-1.6 1-.3 1.9-.5 3-.5s2 .2 2.9.6 1.7.9 2.4 1.7c.8-.2 1.6-.4 2.3-.7.8-.3 1.6-.6 2.3-1-.3.8-.6 1.6-1.2 2.3-.4.6-1.1 1.2-1.9 1.7z"></path></svg>\n';const FooterWrapper=styled_components_browser_esm.default.footer`
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
`,Footer=props=>{var _footerMenu$menu;const{menu:{footerMenu:footerMenu},configuration:configuration}=props;return Object(jsx_runtime.jsxs)(FooterWrapper,{children:[Object(jsx_runtime.jsx)(Logo,{href:"/",dangerouslySetInnerHTML:{__html:'<svg class="stamp-es" viewBox="0 0 1024 1040" xmlns="http://www.w3.org/2000/svg"><g transform="translate(26 242)" fill="none" fill-rule="evenodd"><path d="M555.56 291.73c-41.638-29.923-75.96-71.52-75.96-126.98C479.6 69.129 564.324.53 687.02.53c53.33 0 103.73 12.408 137.31 24.805l-3.633 123.34h-14.62c-37.241-81.002-62.809-124.79-118.32-124.79-42.362 0-73.767 28.465-73.767 73.712 0 30.647 20.447 56.196 49.667 77.362l78.144 57.654c59.891 43.789 97.141 77.372 97.141 137.94 0 105.84-102.25 167.87-206.69 167.87-65.737 0-127.1-18.973-157.04-35.765l-5.846-139.4h14.61c45.29 97.069 84 151.81 145.36 151.81 40.893 0 73.022-25.539 73.022-73.712 0-37.223-28.476-63.496-65.727-90.503l-81.072-59.122zM60.028 80.608c0-30.667-11.682-56.196-59.891-59.856V8.354h413.41v134.29h-13.886c-46.005-75.914-61.36-112.4-109.55-112.4h-78.163v229.9h32.139c52.586 0 68.665-22.633 94.958-86.129h11.682v192.68h-11.682c-26.293-63.486-42.372-86.12-94.958-86.12h-32.139v188.3c0 26.283 9.499 40.149 48.933 40.149h21.925c75.95 0 97.866-50.364 146.8-133.56h13.151l-14.61 155.45H.137v-12.398c48.208-3.65 59.891-29.199 59.891-59.856V80.61z" fill="#000"/><circle cx="902.5" cy="482.5" r="57.5" fill="#C51A32"/></g></svg>'},"aria-label":"Back to homepage",className:"logo"}),Object(jsx_runtime.jsxs)(FollowUs,{children:[Object(jsx_runtime.jsx)(SocialTitle,{children:"Follow us:"}),Object(jsx_runtime.jsxs)(SocialLinkWrapper,{children:[Object(jsx_runtime.jsx)(SocialLink,{rel:"noopener","aria-label":`Visit ${configuration.name} on Facebook`,href:configuration.social.facebook,dangerouslySetInnerHTML:{__html:icons_facebookIcon}},"facebook"),Object(jsx_runtime.jsx)(SocialLink,{rel:"noopener","aria-label":`Visit ${configuration.name} on Twitter`,href:configuration.social.twitter,dangerouslySetInnerHTML:{__html:icons_twitterIcon}},"twitter")]})]}),Object(jsx_runtime.jsx)(FooterMenu,{children:footerMenu&&(null==footerMenu||null===(_footerMenu$menu=footerMenu.menu)||void 0===_footerMenu$menu?void 0:_footerMenu$menu.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(FooterLink,{children:!/^\//.test(path)&&Object(jsx_runtime.jsx)(Link,{rel:"noopener",href:path,children:title})||Object(jsx_runtime.jsx)(Link,{href:path,children:title})},title+index)))})]})};Footer.propTypes={configuration:prop_types_default.a.object.isRequired,menu:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired};var library_Footer=Object(RequestProvider.withRequest)(Footer);const Frame=styled_components_browser_esm.default.iframe`
  display: none;
  visibility: hidden;
`,GTM=({res:{locals:{configuration:configuration,cleanAmp:cleanAmp}}})=>{var _configuration$gtm;const gtmContainerId=null==configuration||null===(_configuration$gtm=configuration.gtm)||void 0===_configuration$gtm?void 0:_configuration$gtm.containerId;return gtmContainerId&&!cleanAmp?Object(jsx_runtime.jsx)("noscript",{children:Object(jsx_runtime.jsx)(Frame,{src:"https://www.googletagmanager.com/ns.html?id="+gtmContainerId,height:0,width:0})}):null};GTM.propTypes={res:prop_types_default.a.object.isRequired};var library_GTM=Object(RequestProvider.withRequest)(GTM),classes=__webpack_require__(108),closeIcon=__webpack_require__(259),logo=__webpack_require__(345);const SearchWrapper=styled_components_browser_esm.default.div``,SearchInput=styled_components_browser_esm.default.div`
  z-index: 5;
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
`;var Header_SearchField=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)(SearchWrapper,{children:Object(jsx_runtime.jsxs)(SearchInput,{className:"search-input",children:[Object(jsx_runtime.jsx)("div",{id:"searchBox0"}),Object(jsx_runtime.jsx)("div",{id:"quickSearchresults0",className:"quick-searchresults"})]})}))``;var withScript=__webpack_require__(165);const FullMenuWrapper=styled_components_browser_esm.default.div`
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
`,FullMenu=({menu:{menu:menu},configuration:configuration})=>Object(jsx_runtime.jsxs)(FullMenuWrapper,{id:"full-menu",children:[Object(jsx_runtime.jsx)("nav",{children:Object(jsx_runtime.jsx)(List,{children:null==menu?void 0:menu.map(({title:title,children:children,path:path},index)=>Object(jsx_runtime.jsx)("li",{className:"hover-section",children:Object(jsx_runtime.jsxs)("div",{id:"sectionMenu"+index,children:[Object(jsx_runtime.jsxs)("div",{className:"section-header",children:[Object(jsx_runtime.jsx)("a",{className:"link list-header",href:path,children:title}),children&&Object(jsx_runtime.jsx)("span",{on:`tap:sectionMenu${index}.toggleClass('class'='open-section')`,className:"expand",role:"button",tabIndex:"0",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.9 24"><path d="M0 21.2L9.2 12 0 2.8 2.9 0l12 12-12 12L0 21.2z"></path></svg>\n'}})]}),children&&Object(jsx_runtime.jsx)("ul",{className:"section-list",children:children.map(({title:title,path:path},index)=>Object(jsx_runtime.jsx)(SectionItem,{children:Object(jsx_runtime.jsx)("a",{className:"link",href:path,children:title})},title+index))})]})},title+index))})}),Object(jsx_runtime.jsxs)(SocialWrapper,{children:[Object(jsx_runtime.jsx)("h2",{children:"Follow us:"}),Object(jsx_runtime.jsx)("a",{rel:"noopener",href:configuration.facebookPage,className:"link",dangerouslySetInnerHTML:{__html:icons_facebookIcon}}),Object(jsx_runtime.jsx)("a",{rel:"noopener",href:configuration.twitterPage,className:"link",dangerouslySetInnerHTML:{__html:icons_twitterIcon}})]})]});FullMenu.propTypes={menu:prop_types_default.a.object,configuration:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired};const FullMenuWithScript=Object(withScript.a)(FullMenu)`
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
`,Menu=({res:{locals:{cleanAmp:cleanAmp}},...props})=>cleanAmp?Object(jsx_runtime.jsx)(FullMenuWithScript,{...props}):Object(jsx_runtime.jsx)(FullMenu,{...props});Menu.propTypes={...FullMenu.propTypes,res:prop_types_default.a.object.isRequired};var Menu_FullMenu=Object(RequestProvider.withRequest)(Menu),chevronDown=__webpack_require__(214);const border=(height,colourKey)=>({theme:{color:color}})=>`\n  content: "";\n  position: absolute;\n  height: ${height}px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: ${color[colourKey]};\n`,border1px=border(1,"navGrey"),border2px=border(2,"galleryDarkGrey"),borderActiveItem=border(2,"primary"),MenuWrapper=styled_components_browser_esm.default.div`
  display: none;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
  height: ${"40px"};

  &:after {
    ${border1px}
  }

  @media ${Styles.c.laptop} {
    display: flex;
    .collapsed & {
      height: 50px;
      position: absolute;
      top: 0;
      left: ${"274px"};
      width: calc(100% - 387px);
      &:before {
        content: '';
        background: ${props=>props.theme.color.contrastLight};
        width: 400px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 100%;
        z-index: 1;
      }
    }
    &.show-overflow-menu {
      overflow: visible;
      > div {
        &:after {
          ${border1px}
        }
      }
      &:after {
        content: '';
        background: ${props=>props.theme.color.navGrey};
        width: 400px;
        height: 1px;
        position: absolute;
        top: 99px;
        right: 0;
        left: 100%;
        z-index: 1;
      }
    }
    .full-menu-visible & {
      display: none;
    }
  }
`,MenuWrapperInner=styled_components_browser_esm.default.div`
  position: absolute;
  width: calc(100% - 100px);
  padding-right: 100px;
  top: 0;
  left: 0;
  .collapsed & {
    left: -${"274px"};
    width: calc(100% + ${"274px"} - 100px);
    background-color: ${props=>props.theme.color.contrastLight};
    @media ${Styles.c.adBreakpointLarge} {
      width: calc(100% + ${"274px"});
    }
  }
  @media ${Styles.c.adBreakpointLarge} {
    width: 100%;
    padding-right: 0;
  }
`,SectionList=styled_components_browser_esm.default.ul`
  display: flex;
  margin: 0 0 0 -6px;
  padding: 0;
  list-style: none;
  height: 100%;
  background-color: ${props=>props.theme.color.contrastLight};
  .show-overflow-menu & {
    flex-wrap: wrap;
  }
`,ListItem=styled_components_browser_esm.default.li`
  height: 100%;
  white-space: nowrap;
  padding: 0 26px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${"40px"};
  position: relative;
  &:before {
    display: none;
    ${borderActiveItem}
  }
  &:hover:before,
  &.active:before {
    display: block;
  }
  .collapsed & {
    height: ${"50px"};
    &:first-child {
      margin-left: ${"274px"};
    }
  }
  &:hover,
  &.active {
    font-weight: 500;
    > a {
      color: ${props=>props.theme.color.contrastDarker};
    }
  }
`,SubSectionList=Object(styled_components_browser_esm.default)(SectionList)`
  background: ${props=>props.theme.color.primary};
  position: absolute;
  z-index: 1;
  width: 230px;
  padding: 0;
  left: 0;
  list-style: none;
  display: none;
  transition: opacity 0.1s;
  top: ${"40px"};
  margin: 0;
  height: unset;
  ${Object.keys(Styles.d).map(item=>`\n      &.${item} {\n        background: #${Styles.d[item]};\n      }\n    `)}
  .collapsed & {
    top: 50px;
  }
  &:hover,
  .menu-navbar-item:hover &,
  .menu-navbar-item.delay-hover & {
    display: flex;
    flex-direction: column;
  }
`,SubSectionListItem=styled_components_browser_esm.default.li`
  border-bottom: 1px solid ${props=>props.theme.color.contrastLight};
  padding: 8px 21px 11px;
  font-weight: initial;
  &:last-child {
    border-bottom: 0;
  }
  &:hover,
  &.active {
    box-shadow: inset 0 0 400px 110px rgba(0, 0, 0, 0.2);
  }
`,BaseLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.fontMedium};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  letter-spacing: 0.7px;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  text-transform: uppercase;
  &:before {
    display: block;
    content: attr(data-title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`,SectionLink=Object(styled_components_browser_esm.default)(BaseLink)`
  &:hover,
  &.active {
    color: ${props=>props.theme.color.contrastDarker};
  }
`,SubSectionLink=Object(styled_components_browser_esm.default)(BaseLink)`
  color: ${props=>props.theme.color.contrastLight};
`,ShowMore=Object(styled_components_browser_esm.default)(BaseLink)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  display: flex;
  align-items: center;
  height: ${"40px"};
  cursor: pointer;
  display: flex;
  user-select: none;
  justify-content: space-evenly;
  background: ${props=>props.theme.color.contrastLight};
  z-index: 1;

  .collapsed & {
    height: ${"50px"};
  }
  &:before {
    content: '';
    width: 46px;
    position: absolute;
    left: -46px;
    top: 0;
    visibility: visible;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .show-overflow-menu & {
    &:after {
      display: block;
      ${border2px}
    }
  }
  @media ${Styles.c.adBreakpointLarge} {
    display: none;
    .collapsed & {
      display: flex;
    }
  }
`,SectionMenu=({menu:menu,className:className})=>{if(!menu||!Array.isArray(menu.menu))return null;const{menu:listMenu}=menu;return Object(jsx_runtime.jsx)(MenuWrapper,{id:"primaryMenu",children:Object(jsx_runtime.jsxs)(MenuWrapperInner,{children:[Object(jsx_runtime.jsxs)(ShowMore,{"data-on":"tap:primaryMenu.toggleClass(class='show-overflow-menu')",children:[Object(jsx_runtime.jsx)("span",{children:"More"}),Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:chevronDown.a}})]}),Object(jsx_runtime.jsx)(SectionList,{children:listMenu.map(({title:title,children:children,path:path,active:active},index)=>Object(jsx_runtime.jsxs)(ListItem,{className:Object(classes.a)("menu-navbar-item",active?"active":""),children:[Object(jsx_runtime.jsx)(SectionLink,{href:path,"data-title":title,className:!0===active?"active":"",children:title}),children&&Object(jsx_runtime.jsx)(SubSectionList,{className:Object(classes.a)(className,"hover-menu "+(null==path?void 0:path.split("/")[1])),children:children.map(({title:title,path:path,active:active},i)=>Object(jsx_runtime.jsx)(SubSectionListItem,{className:Object(classes.a)(className,active?"active":""),children:Object(jsx_runtime.jsx)(SubSectionLink,{href:path,"data-title":title,className:!0===active?"active":"",children:title})},title+i))})]},title+index))})]})})};SectionMenu.propTypes={menu:prop_types_default.a.object,className:prop_types_default.a.string};var Menu_SectionMenu=SectionMenu;const HeaderWrapper=styled_components_browser_esm.default.header`
  width: 100%;
  z-index: 100;
  background: ${props=>props.theme.color.contrastLight};
  position: sticky;
  top: 0;
  &:after {
    ${border1px}
    z-index: 4;
  }
  &.collapsed {
    border-bottom: none;
  }
  .hidden {
    width: 0;
    display: none;
  }
`,TopWrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  position: relative;
  &:after {
    ${border1px}
  }
  @media ${Styles.c.laptop} {
    height: 80px;
    .collapsed & {
      height: ${"50px"};
      > * {
        position: relative;
        z-index: 8001;
      }
    }
  }
`,HamburgerMenu=styled_components_browser_esm.default.div`
  padding-left: 20px;
  margin: auto 0;
  svg {
    display: none;
    &:first-child {
      display: block;
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
  width: 24px;
  height: 24px;
`,SearchButton=Object(styled_components_browser_esm.default)(MenuButton)`
  position: relative;
  padding-right: 20px;
  width: auto;
  height: auto;
  svg {
    display: none;
    &:first-child {
      display: block;
    }
  }
  .search-visible & {
    overflow: hidden;
    z-index: 2;
    margin-bottom: 7px;
    svg {
      display: block;
      height: 18px;
      &:first-child {
        display: none;
      }
    }
  }
`,LogoWrapper=styled_components_browser_esm.default.a`
  text-align: center;
  margin: auto;
  width: 100%;
  line-height: 0;
  @media ${Styles.c.laptop} {
    .collapsed & {
      text-align: left;
      margin-left: 24px;
      width: auto;
      margin-right: auto;
      svg {
        width: 184px;
        height: 22px;
      }
    }
  }
  @media ${Styles.c.maxLaptop} {
    svg {
      width: 203px;
      height: 24px;
    }
  }
`,Header=props=>{const{className:className,cleanAmp:cleanAmp,menu:menu}=props,hasSubNav=menu.subnavMenu;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(HeaderWrapper,{className:Object(classes.a)(className,hasSubNav?"has-subnav":""),id:"header",children:[Object(jsx_runtime.jsxs)(TopWrapper,{children:[Object(jsx_runtime.jsx)(HamburgerMenu,{"data-on":"tap:body.toggleClass(class='full-menu-visible')","aria-label":"Open full menu",role:"button",tabIndex:"0",children:Object(jsx_runtime.jsx)(MenuButton,{"aria-label":"Open full menu",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#1E1E1C" fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" clip-rule="evenodd"/></svg>\n'+closeIcon.a}})}),Object(jsx_runtime.jsx)(LogoWrapper,{href:"/",dangerouslySetInnerHTML:{__html:logo.a},"aria-label":"Back to homepage",className:"es-logo"}),Object(jsx_runtime.jsx)(SearchButton,{className:"search-toggle","data-on":"tap:header.toggleClass(class='search-visible')","aria-label":"Open Search",role:"button",tabIndex:"0",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#1E1E1C" fill-rule="evenodd" d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 001.57-4.23 6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" clip-rule="evenodd"/></svg>\n'+closeIcon.a}})]}),!cleanAmp&&Object(jsx_runtime.jsx)(Menu_SectionMenu,{menu:menu.navbarMenu}),!cleanAmp&&Object(jsx_runtime.jsx)(Header_SearchField,{})]}),Object(jsx_runtime.jsx)(Menu_FullMenu,{menu:menu.fullMenu})]})};Header.propTypes={className:prop_types_default.a.any,headerStyle:prop_types_default.a.any,menu:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{className:{type:{name:"any"},required:!1,description:""},headerStyle:{type:{name:"any"},required:!1,description:""},menu:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};var library_Header=Object(RequestProvider.withRequest)(Header);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"app/component/library/Header.js"});var Login=__webpack_require__(482);const LoginModal_Wrapper=styled_components_browser_esm.default.div`
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
`,Frame_Frame=({className:className,children:children,componentStyle:componentStyle,section:section,article:article,req:req,res:res,req:{flowPreview:flowPreview},res:{locals:{configuration:configuration,cleanAmp:cleanAmp}},isService:isService,isBest:isBest})=>{var _configuration$cmp,_configuration$cmp2;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.ga)&&Object(jsx_runtime.jsx)(Google,{}),(null==configuration?void 0:configuration.chartbeat)&&Object(jsx_runtime.jsx)(Chartbeat,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Comscore,{}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(Adobe,{}),(null==configuration?void 0:configuration.taboola)&&Object(jsx_runtime.jsx)(Taboola,{}),(null==configuration||null===(_configuration$cmp=configuration.cmp)||void 0===_configuration$cmp?void 0:_configuration$cmp.enabled)&&Object(jsx_runtime.jsx)(Scripts_Quantcast,{}),(null==configuration||null===(_configuration$cmp2=configuration.cmp)||void 0===_configuration$cmp2?void 0:_configuration$cmp2.enabled)&&Object(jsx_runtime.jsx)(AMP_AmpConsent,{})]}),(null==configuration?void 0:configuration.adobe)&&Object(jsx_runtime.jsx)(State.a,{id:"digitalData",json:getAmpState(req,res)}),(article||section)&&!isService&&!isBest&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(OutOfPageSlotMPU,{id:"out-of-page",sizes:"1x1","force-bulk":!0,width:1,height:1}),!cleanAmp&&Object(jsx_runtime.jsx)(Ads_Skin,{}),Object(jsx_runtime.jsx)(Ads_Gutter,{})]}),Object(jsx_runtime.jsxs)("div",{className:className,role:"",tabIndex:"",children:[Object(jsx_runtime.jsx)(library_Header,{headerStyle:componentStyle}),Object(jsx_runtime.jsx)(library_LoginModal,{}),Object(jsx_runtime.jsx)(FrameInner,{id:"frameInner",children:children}),Object(jsx_runtime.jsx)(library_Footer,{}),(section||article)&&!isService&&!isBest&&Object(jsx_runtime.jsx)(library_StickyFooter,{cleanAmp:cleanAmp}),Object(jsx_runtime.jsx)("amp-install-serviceworker",{src:"/sw.js",layout:"nodisplay"})]}),!flowPreview&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(null==configuration?void 0:configuration.gtm)&&Object(jsx_runtime.jsx)(library_GTM,{}),(null==configuration?void 0:configuration.comscore)&&Object(jsx_runtime.jsx)(Analytics_Comscore,{}),Object(jsx_runtime.jsx)(library_AmpAuth,{})]})]})};Frame_Frame.propTypes={section:prop_types_default.a.object,article:prop_types_default.a.object,className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any,req:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isService:prop_types_default.a.bool.isRequired,isBest:prop_types_default.a.bool.isRequired},Frame_Frame.defaultProps={className:""};__webpack_exports__.a=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Frame_Frame))`
  flex-direction: column;
`},130:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PUBLICATION_UK}));const PUBLICATION_UK="standard.co.uk"},1489:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(152),_clientLogger=__webpack_require__(86),_configFilename=__webpack_require__(1490);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1490:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(254),storybook_amp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(886);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_amp__WEBPACK_IMPORTED_MODULE_1__.withAmpDecorator),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({actions:{argTypesRegex:"^on[A-Z].*"},amp:{isEnabled:!0,styles:""},layout:"fullscreen"})},161:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const AmpAd=({width:width,height:height,type:type,src:src,dataSlot:dataSlot,json:json,config:config,ampRefresh:ampRefresh,ampSizes:ampSizes,ampSizeValidation:ampSizeValidation,...props})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-ad",{width:width,height:height,type:type,src:src,"data-multi-size":ampSizes,"data-slot":dataSlot,json:json?JSON.stringify(json):null,"rtc-config":config?JSON.stringify(config):null,"data-enable-refresh":ampRefresh,"data-multi-size-validation":ampSizeValidation,"data-block-on-consent":"_till_responded",...props});AmpAd.propTypes={width:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,height:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,dataSlot:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,json:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,config:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,ampRefresh:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,ampSizes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,ampSizeValidation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool},AmpAd.__docgenInfo={description:"",methods:[],displayName:"AmpAd",props:{width:{type:{name:"number"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},type:{type:{name:"string"},required:!0,description:""},dataSlot:{type:{name:"string"},required:!0,description:""},src:{type:{name:"string"},required:!1,description:""},json:{type:{name:"object"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampSizeValidation:{type:{name:"bool"},required:!1,description:""}}},__webpack_exports__.a=AmpAd,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Ad.js"]={name:"AmpAd",docgenInfo:AmpAd.__docgenInfo,path:"app/component/library/AMP/Ad.js"})},163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(50);const NoIndex=()=>!1;NoIndex.__docgenInfo={description:"",methods:[],displayName:"NoIndex"},__webpack_exports__.a=NoIndex,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NoIndex.js"]={name:"NoIndex",docgenInfo:NoIndex.__docgenInfo,path:"app/component/library/NoIndex.js"})},164:function(module,__webpack_exports__,__webpack_require__){"use strict";var ConfigManager=__webpack_require__(893),ConfigManager_default=__webpack_require__.n(ConfigManager),manifest=__webpack_require__(894);var publication=__webpack_require__(130),newslettersConfig=__webpack_require__(328);const publicationConfig={[publication.a]:{projectId:"5d79bce7-5d2b-427e-a6c4-b89b6c7bf048",apiKey:"ed467bcf-98ee-4ed9-894e-c49be4ab97e7",namespace:"esi"}};const configManager=new ConfigManager_default.a({adobe:{reportSuiteId:"indepes"},adYouLike:{placement:"e05810a932723951bec2eb55202fd0cc",campaign:"fa3c00f1a0a5815c3ce09b75e7a28e2b"},apester:{token:"56338a17cdaa05026826b266",alternateToken:"5af4c249a357970001605174"},articleThemes:{insider:["/insider"]},brightcove:{account:"624246174001",player:"BJXA5Px6f"},chartbeat:{uid:"62356"},comscore:{clientId:"10476312"},criteo:{lineItemRanges:"0..4.99:0.01;5..9.95:0.05;10..49.5:0.5;50..100:1",networkId:1680},cse:{id:"001589649871138454759:x1pxwcegkc8"},facebookAppId:"235586169789578",feeds:{mmm:{src:"/api/most-popular-article?section=news&limit=5",items:"articles"},videos:{src:"/api/most-popular-article?section=mediatype_video&limit=3",items:"articles"},chartbeat:{src:"https://www.standard.co.uk/pwamp/layout_component/chartbeat-top?feed=insider",items:"."}},ga:{id:"UA-28120322-1"},gtm:{containerId:"GTM-K26356Q"},indexExchange:{siteId:"197231",scriptUrl:"//js-sec.indexww.com/ht/p/184658-111437137524152.js"},logoUrl:"/img/logo.png",manifest:manifest,jwplayerPlayerIds:{default:{defaultPlayer:"Ad1SlkR8",noAdsPlayer:"xaXhfSI0",sensitivePlayer:"hKY5LbS1",inlinePlayer:"uuyz2YmO",commercialPlayer:"xaXhfSI0"},amp:{defaultPlayer:"DJ4UFK81",noAdsPlayer:"imXF4cgx",sensitivePlayer:"yv0FGKVC",inlinePlayer:"BcAN9VUM",commercialPlayer:"imXF4cgx"}},jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},sectionThemes:{insider:["/insider"]},social:{facebook:"https://www.facebook.com/eveningstandard",twitter:"https://twitter.com/standardnews"},subdomain:{static:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).ES_SUBDOMAIN_STATIC},taboola:{accountIds:{base:1036135},publisherId:"eslmedia-theindependent",ampBelowArticleMode:"thumbnails-e1"},permutive:(publication=>publicationConfig[publication]?publicationConfig[publication]:(console.error("No permutive config found for "+publication),{}))(publication.a),menuIds:{full_nav:3,nav_bar:5,footer:2,es_best:11},googleCaptchaV3Key:"6LdjO88ZAAAAANrVlvQVuU-88Hv9ly51pUhtcm__",googleCaptchaV3Secret:"6LdjO88ZAAAAAHQ93NC_nB3a268-HkyCh5VVcG41",cmp:{enabled:"true"===Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).CMP_ENABLED},gigya:{api_key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_KEY,datacenter:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_DATACENTER,api_secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).GIGYA_SECRET},sailthru:{key:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_KEY,secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SAILTHRU_SECRET},pressReader:{secret:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_SECRET,domain:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PRESSREADER_DOMAIN},newslettersConfig:newslettersConfig.a[publication.a],fastly:{token:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_TOKEN,serviceId:Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).FASTLY_ID},trackonomics:{customerId:"esimedia_t58ukgmjkf95_eveningstandard"}}),sidebarSlot=[1,2,5],articleSlots=size=>Array.apply(null,{length:size}).map(Number.call,Number).map(n=>n+1);configManager.addPublication(publication.a,{atexEnabled:!0,chartbeatApiKey:"cf0b9565bddfde442d7b02a5ffd7d419",description:"Latest London news, business, sport, showbiz and entertainment from the London Evening Standard."}),configManager.addAdConfig({ampAd:{type:"doubleclick","data-slot":"/8057/","data-multi-size-validation":"false","rtc-config":'{ "vendors": { "lotame": { "CLIENT_ID": "4810", "AD_NETWORK": "DC" } } }',json:'{"targeting":{"pos":[], "test": true }}'},sidebarSlot:sidebarSlot,articleSlot:articleSlots(10).filter(n=>!sidebarSlot.includes(n)),cleanAmpArticleSlot:articleSlots(10)});__webpack_exports__.a=configManager},165:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),Helmet=__webpack_require__(50),RequestProvider=__webpack_require__(8),crypto_browserify=__webpack_require__(900),crypto_browserify_default=__webpack_require__.n(crypto_browserify),bundle_min=__webpack_require__(901),bundle_min_default=__webpack_require__.n(bundle_min),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),Common=__webpack_require__(339);const AmpScript=({children:children,...props})=>Object(jsx_runtime.jsx)("amp-script",{...props,children:children});AmpScript.propTypes={...Common.a,src:prop_types_default.a.string,script:prop_types_default.a.string,sandbox:prop_types_default.a.oneOf(["allow-forms"]),"max-age":prop_types_default.a.string},AmpScript.__docgenInfo={description:"",methods:[],displayName:"AmpScript",props:{src:{type:{name:"string"},required:!1,description:""},script:{type:{name:"string"},required:!1,description:""},sandbox:{type:{name:"enum",value:[{value:"'allow-forms'",computed:!1}]},required:!1,description:""},"max-age":{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Script=AmpScript;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Script.js"]={name:"AmpScript",docgenInfo:AmpScript.__docgenInfo,path:"app/component/library/AMP/Script.js"});let buildAllHash=(()=>{let hashes=[];return hash=>(hashes.includes(hash)||hashes.push(hash),hashes.join(" "))})();__webpack_exports__.a=(WrappedComponent,scriptProps)=>(snippet,...exprs)=>Object(RequestProvider.withRequest)(props=>{const script=exprs.reduce((result,expr,index)=>result+("function"==typeof expr?expr(props):expr)+snippet[index+1],snippet[0]),prefix=(null==scriptProps?void 0:scriptProps.script)?scriptProps.script+"-":"script-",minified=bundle_min_default.a.minify(script),hash=(script=>"sha384-"+crypto_browserify_default.a.createHash("sha384").update(script,"utf-8").digest("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"))(minified.code),allHash=buildAllHash(hash),[id]=Object(react.useState)(`${prefix}${hash.slice(-6)}`);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Script,{...scriptProps,script:id,children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}),Object(jsx_runtime.jsx)("script",{type:"text/plain",target:"amp-script",id:id,dangerouslySetInnerHTML:{__html:minified.code}}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("meta",{name:"amp-script-src",content:allHash}),Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-script",src:"https://cdn.ampproject.org/v0/amp-script-0.1.js"})]})]})})},166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isEmptyStringOnly})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isResponsiveRequired}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const isEmptyStringOnly=function(props,propName){if(""!==props[propName]&&void 0!==props[propName])return new Error(`Only empty string is allowed for ${propName} attribute`)},isResponsiveRequired=function(props){if("responsive"!==props.layout)return new Error("Required responsive layout");prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array(...arguments)}},186:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(214);const Fieldwrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
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
`,Select=({fieldName:fieldName,fieldId:fieldId,options:options,displayName:displayName="",helperText:helperText="",fieldRequired:fieldRequired=!1,validationMsg:validationMsg="",defaultValue:defaultValue="",inlineFlexGrow:inlineFlexGrow=""})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{inlineFlexGrow:inlineFlexGrow,className:inlineFlexGrow?"inline":"",children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{name:fieldName,id:fieldId,required:fieldRequired,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("form-select",{valid:defaultValue}),defaultValue:defaultValue,children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"",disabled:!0}),options]}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{dangerouslySetInnerHTML:{__html:_icons_chevronDown__WEBPACK_IMPORTED_MODULE_4__.a}}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:fieldId,children:displayName}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mdc-line-ripple"}),validationMsg&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"error-text","visible-when-invalid":"valueMissing","validation-for":fieldId,children:validationMsg}),helperText&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"help-text",children:helperText})]});Select.propTypes={fieldName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,fieldId:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,options:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,displayName:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,helperText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,fieldRequired:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,validationMsg:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,inlineFlexGrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Select)``},2070:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(254).configure)([__webpack_require__(2071)],module,!1)}).call(this,__webpack_require__(80)(module))},2071:function(module,exports,__webpack_require__){var map={"./Article/AMP/Page.stories.js":2072,"./Article/ArticlePage.stories.js":2228,"./Article/GalleryArticle.stories.js":2204,"./Article/ProductReviewArticle.stories.js":2205,"./Article/VideoArticle.stories.js":2206,"./Other/Components/Byline.stories.js":2207,"./Other/Components/LoginModal.stories.js":2209,"./Other/Pages/Archive.stories.js":2226,"./Other/Pages/Topics.stories.js":2225,"./Section/SectionPage.stories.js":2222,"./StaticPages/Profile.stories.js":2224};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2071},2072:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AMPArticlePageStory",(function(){return AMPArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPGalleryArticlePageStory",(function(){return AMPGalleryArticlePageStory})),__webpack_require__.d(__webpack_exports__,"AMPVideoArticlePageStory",(function(){return AMPVideoArticlePageStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(346),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(347);const ArticlePage=__webpack_require__(252).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a),MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_3__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/AMP/Page",component:ArticlePage};const AMPArticlePageStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Article!!!"},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPArticlePageStory.storyName="Full article page",AMPArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPGalleryArticlePageStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Gallery Article!!!"},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPGalleryArticlePageStory.storyName="Full gallery article page",AMPGalleryArticlePageStory.parameters={amp:{isEnabled:!0}};const AMPVideoArticlePageStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{localsOverrides:{cleanAmp:!0},articleOverrides:{title:"AMP Video Article!!!"},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});AMPVideoArticlePageStory.storyName="Full video article page",AMPVideoArticlePageStory.parameters={amp:{isEnabled:!0}},AMPArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPArticlePageStory",docgenInfo:AMPArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPGalleryArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPGalleryArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPGalleryArticlePageStory",docgenInfo:AMPGalleryArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"}),AMPVideoArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"AMPVideoArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/AMP/Page.stories.js"]={name:"AMPVideoArticlePageStory",docgenInfo:AMPVideoArticlePageStory.__docgenInfo,path:"stories/Article/AMP/Page.stories.js"})},2084:function(module,exports,__webpack_require__){const ampTemplateModule=__webpack_require__(641),templateHTML=ampTemplateModule.default({styles:"",title:"ES Storybook"});ampTemplateModule.default=()=>({replace:(storyCodeMarker,content)=>templateHTML.replace("</head>",'\n<script async custom-element="amp-timeago" src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"><\/script>\n<script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"><\/script>\n<script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"><\/script>\n\n<script>\n// fix time to 01/07/2020\nDate = class extends Date {\n  constructor(options) {\n    super(options ?? 1593558000000);\n  }\n};\n<\/script>\n<style type="text/css">\n[id^="jwplayer"] {\n  background: hotpink;\n  position: relative;\n}\n\n[id^="jwplayer"]:before {\n  content: "VIDEO PLAYER";\n  font-family: sans-serif;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: calc(50% - 15px);\n  left: 0;\n  color: white;\n}\n\n.show-in-storybook {\n  display: flex !important; /* Override [amp-access][amp-access-hide] */\n}\n</style></head>').replace('<script async custom-element="amp-autocomplete" src="https://cdn.ampproject.org/v0/amp-autocomplete-0.1.js"><\/script>',"").replace(storyCodeMarker,content).replace(/<excessremovablewrapper>/g,"").replace(/<\/excessremovablewrapper>/g,"")})},2086:function(module,exports,__webpack_require__){var map={"./af":695,"./af.js":695,"./ar":696,"./ar-dz":697,"./ar-dz.js":697,"./ar-kw":698,"./ar-kw.js":698,"./ar-ly":699,"./ar-ly.js":699,"./ar-ma":700,"./ar-ma.js":700,"./ar-sa":701,"./ar-sa.js":701,"./ar-tn":702,"./ar-tn.js":702,"./ar.js":696,"./az":703,"./az.js":703,"./be":704,"./be.js":704,"./bg":705,"./bg.js":705,"./bm":706,"./bm.js":706,"./bn":707,"./bn-bd":708,"./bn-bd.js":708,"./bn.js":707,"./bo":709,"./bo.js":709,"./br":710,"./br.js":710,"./bs":711,"./bs.js":711,"./ca":712,"./ca.js":712,"./cs":713,"./cs.js":713,"./cv":714,"./cv.js":714,"./cy":715,"./cy.js":715,"./da":716,"./da.js":716,"./de":717,"./de-at":718,"./de-at.js":718,"./de-ch":719,"./de-ch.js":719,"./de.js":717,"./dv":720,"./dv.js":720,"./el":721,"./el.js":721,"./en-au":722,"./en-au.js":722,"./en-ca":723,"./en-ca.js":723,"./en-gb":724,"./en-gb.js":724,"./en-ie":725,"./en-ie.js":725,"./en-il":726,"./en-il.js":726,"./en-in":727,"./en-in.js":727,"./en-nz":728,"./en-nz.js":728,"./en-sg":729,"./en-sg.js":729,"./eo":730,"./eo.js":730,"./es":731,"./es-do":732,"./es-do.js":732,"./es-mx":733,"./es-mx.js":733,"./es-us":734,"./es-us.js":734,"./es.js":731,"./et":735,"./et.js":735,"./eu":736,"./eu.js":736,"./fa":737,"./fa.js":737,"./fi":738,"./fi.js":738,"./fil":739,"./fil.js":739,"./fo":740,"./fo.js":740,"./fr":741,"./fr-ca":742,"./fr-ca.js":742,"./fr-ch":743,"./fr-ch.js":743,"./fr.js":741,"./fy":744,"./fy.js":744,"./ga":745,"./ga.js":745,"./gd":746,"./gd.js":746,"./gl":747,"./gl.js":747,"./gom-deva":748,"./gom-deva.js":748,"./gom-latn":749,"./gom-latn.js":749,"./gu":750,"./gu.js":750,"./he":751,"./he.js":751,"./hi":752,"./hi.js":752,"./hr":753,"./hr.js":753,"./hu":754,"./hu.js":754,"./hy-am":755,"./hy-am.js":755,"./id":756,"./id.js":756,"./is":757,"./is.js":757,"./it":758,"./it-ch":759,"./it-ch.js":759,"./it.js":758,"./ja":760,"./ja.js":760,"./jv":761,"./jv.js":761,"./ka":762,"./ka.js":762,"./kk":763,"./kk.js":763,"./km":764,"./km.js":764,"./kn":765,"./kn.js":765,"./ko":766,"./ko.js":766,"./ku":767,"./ku.js":767,"./ky":768,"./ky.js":768,"./lb":769,"./lb.js":769,"./lo":770,"./lo.js":770,"./lt":771,"./lt.js":771,"./lv":772,"./lv.js":772,"./me":773,"./me.js":773,"./mi":774,"./mi.js":774,"./mk":775,"./mk.js":775,"./ml":776,"./ml.js":776,"./mn":777,"./mn.js":777,"./mr":778,"./mr.js":778,"./ms":779,"./ms-my":780,"./ms-my.js":780,"./ms.js":779,"./mt":781,"./mt.js":781,"./my":782,"./my.js":782,"./nb":783,"./nb.js":783,"./ne":784,"./ne.js":784,"./nl":785,"./nl-be":786,"./nl-be.js":786,"./nl.js":785,"./nn":787,"./nn.js":787,"./oc-lnc":788,"./oc-lnc.js":788,"./pa-in":789,"./pa-in.js":789,"./pl":790,"./pl.js":790,"./pt":791,"./pt-br":792,"./pt-br.js":792,"./pt.js":791,"./ro":793,"./ro.js":793,"./ru":794,"./ru.js":794,"./sd":795,"./sd.js":795,"./se":796,"./se.js":796,"./si":797,"./si.js":797,"./sk":798,"./sk.js":798,"./sl":799,"./sl.js":799,"./sq":800,"./sq.js":800,"./sr":801,"./sr-cyrl":802,"./sr-cyrl.js":802,"./sr.js":801,"./ss":803,"./ss.js":803,"./sv":804,"./sv.js":804,"./sw":805,"./sw.js":805,"./ta":806,"./ta.js":806,"./te":807,"./te.js":807,"./tet":808,"./tet.js":808,"./tg":809,"./tg.js":809,"./th":810,"./th.js":810,"./tk":811,"./tk.js":811,"./tl-ph":812,"./tl-ph.js":812,"./tlh":813,"./tlh.js":813,"./tr":814,"./tr.js":814,"./tzl":815,"./tzl.js":815,"./tzm":816,"./tzm-latn":817,"./tzm-latn.js":817,"./tzm.js":816,"./ug-cn":818,"./ug-cn.js":818,"./uk":819,"./uk.js":819,"./ur":820,"./ur.js":820,"./uz":821,"./uz-latn":822,"./uz-latn.js":822,"./uz.js":821,"./vi":823,"./vi.js":823,"./x-pseudo":824,"./x-pseudo.js":824,"./yo":825,"./yo.js":825,"./zh-cn":826,"./zh-cn.js":826,"./zh-hk":827,"./zh-hk.js":827,"./zh-mo":828,"./zh-mo.js":828,"./zh-tw":829,"./zh-tw.js":829};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=2086},2093:function(module,exports){},2095:function(module,exports){},2107:function(module,exports){},2109:function(module,exports){},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8);__webpack_exports__.a=WrappedComponent=>({...props})=>Object(react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(({res:{locals:{cleanAmp:cleanAmp}}})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent,{cleanAmp:cleanAmp,...props})))},213:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const Embed=__webpack_require__(2).default.div`
  display: flex;
  clear: both;
  width: 100%;
  max-width: 100%;
  > * {
    margin: auto;
  }
`,HTMLEmbed=({data:{markup:markup}})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Embed,{dangerouslySetInnerHTML:{__html:markup}});HTMLEmbed.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired},HTMLEmbed.__docgenInfo={description:"",methods:[],displayName:"HTMLEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}},__webpack_exports__.a=HTMLEmbed,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/HTML.js"]={name:"HTMLEmbed",docgenInfo:HTMLEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/HTML.js"})},2134:function(module,exports){},2136:function(module,exports){},2137:function(module,exports){},214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10.6 0L6 4.4 1.4 0 0 1.3 6 7l6-5.7z" fill-rule="evenodd"/>\n</svg>\n'},2142:function(module,exports){},2144:function(module,exports){},2151:function(module,exports){},2153:function(module,exports){},216:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(props=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{...props}))`
  height: 0;
`},2171:function(module,exports){},2173:function(module,exports){},2185:function(module,exports){},2188:function(module,exports){},2198:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.22727" stroke="#F8CDD5" stroke-width="1.54545"/><circle cx="12" cy="11.9999" r="5.55556" fill="#DC062B"/></svg>'},2199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11.6998L14.0427 6.2998L11.4046 6.2998L15.3618 11.6998L11.4046 17.0998L14.0427 17.0998L18 11.6998ZM13.7954 11.6998L9.83817 6.2998L7.2 6.2998L11.1573 11.6998L7.2 17.0998L9.83817 17.0998L13.7954 11.6998Z" fill="#DC062B"/></svg>'},2200:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19"><path fill="#4B4B49" fill-rule="evenodd" d="M15 8.75H5.872l4.193-4.192L9 3.5l-6 6 6 6 1.057-1.057-4.185-4.193H15v-1.5z" clip-rule="evenodd"/></svg>'},2201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19"><path fill="#4B4B49" fill-rule="evenodd" d="M9.5 3.5L8.443 4.558l4.184 4.192H3.5v1.5h9.127l-4.184 4.193L9.5 15.5l6-6-6-6z" clip-rule="evenodd"/></svg>'},2202:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2.97705C6.47 2.97705 2 7.45705 2 12.9771C2 18.4971 6.47 22.9771 11.99 22.9771C17.52 22.9771 22 18.4971 22 12.9771C22 7.45705 17.52 2.97705 11.99 2.97705ZM12 20.977C7.58001 20.977 4.00001 17.397 4.00001 12.977C4.00001 8.55703 7.58001 4.97703 12 4.97703C16.42 4.97703 20 8.55703 20 12.977C20 17.397 16.42 20.977 12 20.977ZM12.5 7.97707H11V13.9771L16.25 17.1271L17 15.8971L12.5 13.2271V7.97707Z" fill="#1E1E1C"/></svg>'},2204:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(346);const ArticlePage=__webpack_require__(252).default,MockArticleWithGallery=Object(_helpers_withGallery__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Gallery",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(476).default()},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithGallery,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/GalleryArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/GalleryArticle.stories.js"})},2205:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleReviewStory",(function(){return ArticleReviewStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41);const ArticlePage=__webpack_require__(252).default;__webpack_exports__.default={title:"Article/Review",component:ArticlePage};const configReview={body:[{type:"markup",data:{markup:'<p dir="ltr">A review article</p>'}}],extra:{verdict:[{type:"markup",data:{markup:"<p>There’s no competition: the Severin SM3587 Spuma 700 Plus Induction Milk Frother delivers the best results with the highest degree of flexibility, being adaptable for different kinds of milks (including non-dairy) and ensuring there’s the correct variation in froth style for different coffees - after all, any coffee aficionado will tell you, one foam does not fit all. There’s no escaping from the premium price point, though, and if what you’re looking for is a simpler but still effective frother for homemade foamy coffees with a lesser degree of pedantic accuracy, then the Dualit Milk Frother delivers excellent value and a stylish look at less than half the price. It just depends what kind of coffee drinker you are.</p>"},id:"8wsv22av",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p>ESBest product reviews are unbiased, independent advice you can trust. On some occasions, we earn revenue if you click the links and buy the products, but we never allow this to bias our coverage. The reviews are compiled through a mix of expert opinion and real-world testing.</p>"},id:"y6aszy8a",editorState:{setSelectionPosition:null}},{type:"markup",data:{markup:"<p><strong>Follow us on Instagram, Facebook and Twitter</strong></p>"},id:"ezia7ftp",editorState:{setSelectionPosition:null}}],products:[{type:"product",data:{id:1,title:"Severin SM3587 Spuma 700 Plus Induction Milk Frother",price:"115.99",vendorLink:"/",vendorName:"Amazon",priceComparison:"Home Spares (£139.95)",body:[{type:"markup",data:{markup:"<p>Coffee geeks, assemble. This premium piece of equipment has no fewer than 13 function settings for heating and frothing different kinds of milk to different styles for all your favourite coffees, from macchiatos to lattes and flat whites. It even enables chocolate melting for hot chocs and mochas, and can also be used for heating baby food or mulled wine. Best still, there’s no fiddly accuracy or barista skills needed - just tell it to go and it does. It can froth up to 350ml of milk in one go - enough for plenty of cups, and looks the part while it does it. There’s not really anything not to like, although if we’re being hyper-critical it is quite noisy. It’s hard to mind when the results are as good as they are though - making the only real sticking point the premium price.</p>"},id:"q0gg521i",editorState:{setSelectionPosition:null}}],image:{id:"o8nqtx7t",data:{title:"milk fother",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23293,changed:"1600273376",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}},{type:"product",data:{id:2,title:"Judge Milk Frother",price:"32",vendorLink:"/",vendorName:"Amazon",priceComparison:"",body:[{type:"markup",data:{markup:"<p>Before milk frothers were a thing, if you wanted hot milk you needed a hob and saucepan, which is clearly the inspiration for this retro-looking frother. It looks a bit old fashioned, but feels really sturdy and is super easy to use and clean. The milk frothed easily and produced a hot stable foam, perfect for a cappuccino or flat white. While it doesn’t have some of the bells and whistles of the more modern-looking, pricier models, if you are wanting to froth and heat milk simply and quickly this does exactly what you need it to and at a good price too.</p>"},id:"qsbe3xz9",editorState:{setSelectionPosition:null}}],image:{id:"2r3urpvi",data:{title:"milk frother",description:"test",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(_helpers_createImage__WEBPACK_IMPORTED_MODULE_2__.b)(100,100,100),id:null,bundle:"remote_image",mid:23294,changed:"1600273594",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null}}}}]}},ArticleReviewStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configReview,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});ArticleReviewStory.storyName="Product review article",ArticleReviewStory.parameters={amp:{isEnabled:!0}},ArticleReviewStory.__docgenInfo={description:"",methods:[],displayName:"ArticleReviewStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ProductReviewArticle.stories.js"]={name:"ArticleReviewStory",docgenInfo:ArticleReviewStory.__docgenInfo,path:"stories/Article/ProductReviewArticle.stories.js"})},2206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultArticleStory",(function(){return DefaultArticleStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54),_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(347);const ArticlePage=__webpack_require__(252).default,MockArticleWithVideo=Object(_helpers_withVideo__WEBPACK_IMPORTED_MODULE_2__.a)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a);__webpack_exports__.default={title:"Article/Video",component:ArticlePage};const DefaultArticleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});DefaultArticleStory.storyName="Default article page",DefaultArticleStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(476).default()},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockArticleWithVideo,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article",DefaultArticleStory.__docgenInfo={description:"",methods:[],displayName:"DefaultArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"DefaultArticleStory",docgenInfo:DefaultArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/VideoArticle.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/VideoArticle.stories.js"})},2207:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleAllTypesStory",(function(){return ArticleMetaSingleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleNoTypesStory",(function(){return ArticleMetaSingleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTwitterStory",(function(){return ArticleMetaSingleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaSingleJustTitleStory",(function(){return ArticleMetaSingleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleAllTypesStory",(function(){return ArticleMetaMultipleAllTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleNoTypesStory",(function(){return ArticleMetaMultipleNoTypesStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTwitterStory",(function(){return ArticleMetaMultipleJustTwitterStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaMultipleJustTitleStory",(function(){return ArticleMetaMultipleJustTitleStory})),__webpack_require__.d(__webpack_exports__,"ArticleMetaInsiderStory",(function(){return ArticleMetaInsiderStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54);const ArticleMeta=__webpack_require__(483).default,ArticleMetaInsider=__webpack_require__(2208).default;__webpack_exports__.default={title:"Other/Components/Article Meta",component:ArticleMeta};const configSingleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleAllTypesStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleAllTypes,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleAllTypesStory.storyName="Single, all types",ArticleMetaSingleAllTypesStory.parameters={waitFor:".author"};const configSingleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleNoTypesStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleNoTypes,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleNoTypesStory.storyName="Single, no types",ArticleMetaSingleNoTypesStory.parameters={waitFor:".author"};const configSingleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTwitterStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleJustTwitter,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTwitterStory.storyName="Single, just Twitter",ArticleMetaSingleJustTwitterStory.parameters={waitFor:".author"};const configSingleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"}]},ArticleMetaSingleJustTitleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configSingleJustTitle,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaSingleJustTitleStory.storyName="Single, just title",ArticleMetaSingleJustTitleStory.parameters={waitFor:".author"};const configMultipleAllTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleAllTypesStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleAllTypes,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleAllTypesStory.storyName="Multiple, all types",ArticleMetaMultipleAllTypesStory.parameters={waitFor:".author"};const configMultipleNoTypes={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleNoTypesStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleNoTypes,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleNoTypesStory.storyName="Multiple, no types",ArticleMetaMultipleNoTypesStory.parameters={waitFor:".author"};const configMultipleJustTwitter={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:null,twitter:"SophiaSleigh",path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:null,twitter:"JoeMurphy",path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTwitterStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleJustTwitter,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTwitterStory.storyName="Multiple, just Twitter",ArticleMetaMultipleJustTwitterStory.parameters={waitFor:".author"};const configMultipleJustTitle={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",jobTitle:"reporter",twitter:null,path:"/author/sophia-sleigh"},{name:"Joe Murphy",id:"6250",jobTitle:"health reporter",twitter:null,path:"/author/joe-murphy"}]},ArticleMetaMultipleJustTitleStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configMultipleJustTitle,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMeta,{})});ArticleMetaMultipleJustTitleStory.storyName="Multiple, just title",ArticleMetaMultipleJustTitleStory.parameters={waitFor:".author"};const configInsider={overrideDate:1595588482,authors:[{name:"Sophia Sleigh",id:"6249",location:"London",path:"/author/sophia-sleigh"}]},ArticleMetaInsiderStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockArticle__WEBPACK_IMPORTED_MODULE_1__.a,{articleOverrides:configInsider,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleMetaInsider,{})});ArticleMetaInsiderStory.storyName="Insider",ArticleMetaInsiderStory.parameters={waitFor:".author"},ArticleMetaSingleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleAllTypesStory",docgenInfo:ArticleMetaSingleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleNoTypesStory",docgenInfo:ArticleMetaSingleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTwitterStory",docgenInfo:ArticleMetaSingleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaSingleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaSingleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaSingleJustTitleStory",docgenInfo:ArticleMetaSingleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleAllTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleAllTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleAllTypesStory",docgenInfo:ArticleMetaMultipleAllTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleNoTypesStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleNoTypesStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleNoTypesStory",docgenInfo:ArticleMetaMultipleNoTypesStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTwitterStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTwitterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTwitterStory",docgenInfo:ArticleMetaMultipleJustTwitterStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaMultipleJustTitleStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaMultipleJustTitleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaMultipleJustTitleStory",docgenInfo:ArticleMetaMultipleJustTitleStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"}),ArticleMetaInsiderStory.__docgenInfo={description:"",methods:[],displayName:"ArticleMetaInsiderStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/Byline.stories.js"]={name:"ArticleMetaInsiderStory",docgenInfo:ArticleMetaInsiderStory.__docgenInfo,path:"stories/Other/Components/Byline.stories.js"})},2208:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(319),__webpack_require__(3)),_services_article__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(77),_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(337),_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(348);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
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
`,ArticleMeta=props=>{var _article$authors;const{className:className,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(_services_article__WEBPACK_IMPORTED_MODULE_7__.b)(article),authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>{var _article$extra;return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthorLink,{href:a.path,className:"author",children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.authorInfo)&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Location,{children:article.extra.authorInfo},a.id)]},a.id)});return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{className:className,children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InnerWrapper,{children:[authors||"",Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublishedDate,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Embeds_FormattedDate__WEBPACK_IMPORTED_MODULE_8__.a,{date:dateToShowInTimestamp})})]}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Insider_SocialShare__WEBPACK_IMPORTED_MODULE_9__.a,{article:article,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,article:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,theme:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string},__webpack_exports__.default=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(ArticleMeta))``},2209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoginModalComponentStory",(function(){return LoginModalComponentStory}));var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93);const Login=__webpack_require__(482).default;__webpack_exports__.default={title:"Other/Components/Login",component:Login};const LoginModalComponentStory=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_helpers_components_MockStaticPage__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Login,{})});LoginModalComponentStory.storyName="Login modal",LoginModalComponentStory.parameters={waitFor:".login-page-form",emulateViewports:[{width:620,height:500}]},LoginModalComponentStory.__docgenInfo={description:"",methods:[],displayName:"LoginModalComponentStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Components/LoginModal.stories.js"]={name:"LoginModalComponentStory",docgenInfo:LoginModalComponentStory.__docgenInfo,path:"stories/Other/Components/LoginModal.stories.js"})},2210:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react_helmet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(50),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),moment__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),moment__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),_library_Frame__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(128),_library_NoIndex__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(163);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div`
  padding-top: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_7__.c.laptop} {
    padding: 32px 0;
  }

  a {
    color: ${props=>props.theme.color.contrastDarker};
  }
  a:hover {
    color: ${props=>props.theme.color.primary};
  }
`,Header=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div`
  text-align: center;
  position: relative;

  a.back {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    display: inline-block;
    width: 80px;
    color: ${props=>props.theme.color.contrastDarker};
    text-transform: uppercase;
    font-weight: 500;
    &:hover {
      color: ${props=>props.theme.color.primary};
    }
  }
`,H1=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: ${props=>props.theme.color.contrastDarker};
  text-transform: uppercase;
  letter-spacing: 1.14px;
  border-bottom: solid 4px ${props=>props.theme.color.primary};
  margin: auto;
  display: inline-block;
  padding-top: 30px;

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_7__.c.tabletS} {
    padding-top: 0;
  }

  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_7__.c.tablet} {
    display: inline-block;
  }

  &.withDate {
    @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_7__.c.tablet} {
      padding-left: 0;
    }
  }
`,SectionWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div``,Section=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.section`
  margin: 0 20px;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.h2`
  background-color: transparent;
  line-height: 0.8;
  font-size: 24px;
  font-weight: 400;
  border-left: none;
  border-right: none;
  border-top: none;
  padding: 15px 0;
  border-bottom: 1px solid #b8b8b8;

  &:focus {
    outline-color: ${props=>props.theme.color.primary};
  }
`,ArticleList=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul`
  padding: 16px 0;
  list-style: none;
`,Article=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.li`
  border: none;
  margin: 10px 20px;
  font-size: 17px;
  font-weight: 400;
  line-height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.contrastDarker};
`,ArticleLink=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.a`
  text-decoration: none;
`,ArticleTimeStamp=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.p`
  font-size: 16px;
  line-height: 100%;
  width: 50px;
  min-width: 50px;
  margin: 0;
`,MonthWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
`,Months=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.li`
  width: 300px;
`,MonthList=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
  margin-right: 16px;
  list-style: none;
`,MonthName=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.h3`
  font-size: 16px;
  font-weight: 700;
  padding: 20px 0;
  line-height: 16px;
  margin: 0;
`,Li=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.li`
  font-size: 16px;
  text-align: center;
  margin-bottom: 15px;
`,Link=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.a`
  line-height: 1.3;
  text-decoration: none;
  font-size: 16px;
  color: ${props=>props.theme.color.indyBase};
  font-weight: 400;
`,InactiveDays=styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span`
  color: #b8b8b8;
`,MonthSection=props=>{const{monthNames:monthNames,month:month,year:year}=props,days=(month=>{const days=[],firstDate=moment__WEBPACK_IMPORTED_MODULE_4___default()(month,"YYYY-MM-DD"),startDate=moment__WEBPACK_IMPORTED_MODULE_4___default()([firstDate.year(),firstDate.month()]),endDate=moment__WEBPACK_IMPORTED_MODULE_4___default()(startDate).endOf("month").format("D")-1,now=moment__WEBPACK_IMPORTED_MODULE_4___default()(),weekday=startDate.day()>0?startDate.day()-1:6;for(let i=0;i<=endDate+weekday;i++)if(i<weekday)days.push(null);else{const currentDay=i-weekday+1,currentDate=moment__WEBPACK_IMPORTED_MODULE_4___default()([firstDate.year(),firstDate.month(),currentDay]);currentDate.isValid()&&currentDate.diff(now)<0?days.push({day:currentDay,data:!0}):days.push({day:currentDay,data:null})}return days})(`${year.text}-${month}`);return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Months,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonthName,{children:monthNames[month-1]}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonthList,{children:days.map((date,index)=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Li,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[date&&date.data&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:`/archive/${year.text}-${padWithZero(month)}-${padWithZero(date.day)}`,children:date.day}),date&&!date.data&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(InactiveDays,{children:date.day})]})},index))})]})};MonthSection.propTypes={monthNames:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,month:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,year:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired};const YearSection=props=>{const{monthNames:monthNames,year:year}=props,current=new Date,currentMonth=current.getMonth()+1,currentYear=current.getFullYear(),limit=year.text===currentYear?currentMonth:12;return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Section,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{href:"#"+year.text,children:year.text}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionWrapper,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonthWrapper,{children:[...Array(limit).keys()].map(x=>x+1).map(month=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MonthSection,{month:month,monthNames:monthNames,year:year})},month))})})]},year.text)};YearSection.propTypes={monthNames:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,year:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired};const padWithZero=number=>String(number).padStart(2,"0"),Archive=props=>{const{className:className,data:data}=props,{years:years,articles:articles,params:params}=data,monthNames=moment__WEBPACK_IMPORTED_MODULE_4___default.a.months();return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_library_Frame__WEBPACK_IMPORTED_MODULE_8__.a,{className:className,children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_library_NoIndex__WEBPACK_IMPORTED_MODULE_9__.a,{}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"Archive"})}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header,{children:[params&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/archive",className:"back",children:"< Back"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(H1,{className:params?"withDate":"",children:["Archive"," ",params?":  "+moment__WEBPACK_IMPORTED_MODULE_4___default()(data.params).format("MMMM D, YYYY"):""]})]}),!articles&&years&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-accordion",{expand:!0,children:years.map((year,index)=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(YearSection,{year:year,monthNames:monthNames},index))}),articles&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleList,{children:articles.map(item=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleTimeStamp,{children:item.time}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArticleLink,{href:""+item.link,children:item.title})]},item.link))})]})]})};Archive.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,data:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired},__webpack_exports__.default=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_3__.withRequest)(Archive))``},2211:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_library_Frame__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(128),_library_NoIndex__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(163);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  padding-top: 16px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  @media ${_config_theme_Styles__WEBPACK_IMPORTED_MODULE_5__.c.laptop} {
    padding: 32px 16px;
  }
`,TitleWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div`
  text-align: center;
  margin-bottom: 10px;
`,Title=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: ${props=>props.theme.color.contrastDarker};
  text-transform: uppercase;
  letter-spacing: 1.14px;
  border-bottom: solid 4px ${props=>props.theme.color.primary};
  margin: auto;
  display: inline-block;
`,ListSection=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.section`
  margin: 0 20px;
`,List=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ol`
  max-width: 1280px;
  list-style: none;
  column-width: 130px;
  clear: both;
  list-style: none;
  padding-left: 0;
`,ListItem=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.li`
  margin-bottom: 10px;
`,Link=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.a`
  display: block;
  font-size: 17px;
  line-height: normal;
  color: ${props=>props.theme.color.contrastDarker};
  &:hover {
    color: ${props=>props.theme.color.primary};
  }
`,MenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ul`
  margin: 0 20px;
  padding: 0;
`,MenuItem=styled_components__WEBPACK_IMPORTED_MODULE_4__.default.li`
  display: inline-block;
  margin-right: 6px;
  list-style: none;
  break-inside: avoid-column;
  line-height: 16px;
  font-size: 16px;
  margin-bottom: 10px;
  a {
    min-width: 20px;
    padding: 4px 0;
    display: inline-block;
    text-align: center;
    color: ${props=>props.theme.color.primary};
    &:hover {
      color: ${props=>props.theme.color.contrastDarker};
    }
  }
  &:after {
    content: '|';
    padding-left: 2px;
    color: #b8b8b8;
  }
  &:last-child:after {
    display: none;
  }
`,LetterMenu=()=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuContainer,{children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter,index)=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuItem,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/topics-list/"+letter,children:letter})},index))}),Topics=props=>{const{className:className,data:data}=props;return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_library_Frame__WEBPACK_IMPORTED_MODULE_6__.a,{className:className,children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_library_NoIndex__WEBPACK_IMPORTED_MODULE_7__.a,{}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:"Topics"})}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(TitleWrapper,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{children:"Topics"})}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(LetterMenu,{}),data&&Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListSection,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(List,{children:data.map(topic=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItem,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:topic.path,children:topic.name})},topic.link))})})]})]})};Topics.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,res:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,data:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,configuration:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired},__webpack_exports__.default=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_2__.withRequest)(Topics))`
  justify-content: center;
`},2214:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(50),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(94),page=__webpack_require__(335),TopBanner=__webpack_require__(336),WallPaper=__webpack_require__(216),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),Styles=__webpack_require__(3);const AuthorWrapper=styled_components_browser_esm.default.div`
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
`,AuthorRow=({author:author})=>{let authorDetails=[];return author.jobTitle&&authorDetails.push(Object(jsx_runtime.jsx)("span",{children:author.jobTitle})),author.twitter&&authorDetails.push(Object(jsx_runtime.jsxs)("a",{href:"https://twitter.com/"+author.twitter,children:["@",author.twitter]})),Object(jsx_runtime.jsxs)(AuthorWrapper,{children:[author.imageUrl&&Object(jsx_runtime.jsx)(AuthorImage,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:author.imageUrl,width:75,height:75,layout:"responsive"})}),Object(jsx_runtime.jsxs)(AuthorInfo,{children:[Object(jsx_runtime.jsx)(AuthorName,{children:author.name}),authorDetails&&Object(jsx_runtime.jsx)(AuthorDetails,{children:authorDetails})]}),author.description&&Object(jsx_runtime.jsx)(AuthorDesc,{children:author.description})]})};AuthorRow.propTypes={author:prop_types_default.a.object.isRequired},AuthorRow.__docgenInfo={description:"",methods:[],displayName:"AuthorRow",props:{author:{type:{name:"object"},required:!0,description:""}}};var Author_AuthorRow=AuthorRow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Author/AuthorRow.js"]={name:"AuthorRow",docgenInfo:AuthorRow.__docgenInfo,path:"app/component/library/Author/AuthorRow.js"});var Frame=__webpack_require__(128),helper=__webpack_require__(69);var ColumnWrapper=styled_components_browser_esm.default.div`
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
`,FeaturedArtist=props=>{const{data:{labelLink:labelLink,labelText:labelText},componentStyle:componentStyle}=props;return Object(jsx_runtime.jsxs)(FeaturedArtistWrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink,titleStyle:componentStyle}),Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[952,640,280]})]})};FeaturedArtist.propTypes={data:prop_types_default.a.any.isRequired,componentStyle:prop_types_default.a.any},FeaturedArtist.__docgenInfo={description:"",methods:[],displayName:"FeaturedArtist",props:{data:{type:{name:"any"},required:!0,description:""},componentStyle:{type:{name:"any"},required:!1,description:""}}};var Insider_FeaturedArtist=FeaturedArtist;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/components/Insider/FeaturedArtist.js"]={name:"FeaturedArtist",docgenInfo:FeaturedArtist.__docgenInfo,path:"app/component/library/Section/components/Insider/FeaturedArtist.js"});var Carousel=__webpack_require__(162),Carousel_default=__webpack_require__.n(Carousel);var article_ArticleHeadshot=Object(styled_components_browser_esm.default)(({className:className,data:{path:path,titleShort:titleShort,title:title,hero:hero},componentStyle:componentStyle,type:type})=>Object(jsx_runtime.jsx)("div",{className:className?[className,"headshot"].join(" "):"headshot",children:Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(article_ArticleHeadline,{children:Object(jsx_runtime.jsx)(article_ArticleTitle,{path:path,title:title,titleShort:titleShort})}),Object(jsx_runtime.jsx)(article_ArticleImage,{hero:hero,path:path,type:type,componentStyle:componentStyle})]})}))`
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
`,Sidebar=__webpack_require__(344),MPU=__webpack_require__(25);const ArticleX2_Wrapper=styled_components_browser_esm.default.div`
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
`;var Section_Title=Object(styled_components_browser_esm.default)(({className:className,componentStyle:componentStyle,data:{labelText:labelText,labelLink:labelLink}})=>Object(jsx_runtime.jsx)(components_ComponentTitle,{className:className,name:labelText,url:labelLink,titleStyle:componentStyle}))``,play=__webpack_require__(341);var icons_Play=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:play.a}}))`
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
`,VIP=props=>{const{data:{labelLink:labelLink,labelText:labelText,heroAlignment:heroAlignment,articles:articles}}=props;let heroClass="position-left";return"Right"===heroAlignment&&(heroClass="position-right"),"Middle"===heroAlignment&&(heroClass="position-middle"),Object(jsx_runtime.jsxs)(VIP_Wrapper,{children:[labelText&&Object(jsx_runtime.jsx)(components_ComponentTitle,{name:labelText,url:labelLink}),articles&&Object(jsx_runtime.jsx)(components_ArticleRow,{...props,srcset:[968,640,280],heroAlignment:heroAlignment,className:heroClass,useHero:!0})]})};VIP.propTypes={data:prop_types_default.a.any.isRequired,labelText:prop_types_default.a.any,labelLink:prop_types_default.a.any,className:prop_types_default.a.any},VIP.__docgenInfo={description:"",methods:[],displayName:"VIP",props:{data:{type:{name:"any"},required:!0,description:""},labelText:{type:{name:"any"},required:!1,description:""},labelLink:{type:{name:"any"},required:!1,description:""},className:{type:{name:"any"},required:!1,description:""}}};var Section_VIP=VIP;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Section/VIP.js"]={name:"VIP",docgenInfo:VIP.__docgenInfo,path:"app/component/library/Section/VIP.js"});var layout_Component=__webpack_require__(917),Component_default=__webpack_require__.n(layout_Component);const VoucherWrapper=styled_components_browser_esm.default.div`
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
`},2219:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(50),RequestProvider=__webpack_require__(8),classnames=__webpack_require__(40),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3),ConditionalFrame=__webpack_require__(342),NoIndex=__webpack_require__(163);const Wrapper=styled_components_browser_esm.default.section`
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
`,Comments=({mockTestData:mockTestData=null,className:className})=>Object(jsx_runtime.jsx)(Wrapper,{className:classnames_default()(className,"tab","comments"),children:mockTestData?Object(jsx_runtime.jsx)(CommentList,{className:"list",children:mockTestData.map(comment=>Object(jsx_runtime.jsx)(CommentTemplate,{className:"comment-template",dangerouslySetInnerHTML:{__html:comment}},comment.slice(0,1)))}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(MessageWrapper,{className:"loading",children:Object(jsx_runtime.jsx)("p",{children:"Loading comments..."})}),Object(jsx_runtime.jsxs)(CommentTemplate,{className:"comment-template hidden",children:[Object(jsx_runtime.jsxs)("div",{className:"comment-meta",children:[Object(jsx_runtime.jsx)("span",{className:"date"}),Object(jsx_runtime.jsxs)("div",{className:"options",children:[Object(jsx_runtime.jsx)("span",{className:"ellipsis",dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>\n</svg>\n'}}),Object(jsx_runtime.jsxs)("div",{className:"edit",children:[Object(jsx_runtime.jsx)("a",{className:"link view",href:"#comments",target:"_blank",children:"View"}),Object(jsx_runtime.jsx)("button",{className:"delete",children:"Delete"})]})]})]}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("h4",{className:"title"})}),Object(jsx_runtime.jsx)("a",{href:"#comments",target:"_blank",className:"link",children:Object(jsx_runtime.jsx)("p",{className:"message"})})]}),Object(jsx_runtime.jsx)(CommentList,{className:"list"}),Object(jsx_runtime.jsx)(NextButtonWrapper,{className:"hidden next-btns"})]})});Comments.propTypes={className:prop_types_default.a.string,mockTestData:prop_types_default.a.array},Comments.__docgenInfo={description:"",methods:[],displayName:"Comments",props:{mockTestData:{defaultValue:{value:"null",computed:!1},type:{name:"array"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""}}};var ProfileComments=Object(RequestProvider.withRequest)(Comments);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/StaticPage/Profile/ProfileComments.js"]={name:"Comments",docgenInfo:Comments.__docgenInfo,path:"app/component/library/StaticPage/Profile/ProfileComments.js"});var postCodePatterns=__webpack_require__(343),FormSelect=__webpack_require__(186),FormSubmit=__webpack_require__(83),FormTextField=__webpack_require__(78);const ProfileDetails_Wrapper=styled_components_browser_esm.default.div`
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
`,Profile=props=>{const{data:data,activeTab:activeTab="newsletters",mockTestData:mockTestData=null}=props,accInfo=data&&data.accInfo,profile=accInfo&&accInfo.profile;return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:"light-bkg",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Profile"})}),Object(jsx_runtime.jsxs)(Profile_Wrapper,{className:"profile-wrapper",children:[Object(jsx_runtime.jsx)(Profile_ProfileNav,{profile:profile,activeTab:activeTab}),Object(jsx_runtime.jsxs)(TabContainer,{children:[Object(jsx_runtime.jsx)(Profile_ProfileNewsletters,{className:classnames_default()("",{active:"newsletters"===activeTab}),accInfo:accInfo}),Object(jsx_runtime.jsx)(Profile_ProfileDetails,{profile:profile,className:classnames_default()("",{active:"details"===activeTab})}),Object(jsx_runtime.jsx)(Profile_ProfilePassword,{className:classnames_default()("",{active:"password"===activeTab})}),Object(jsx_runtime.jsx)(ProfileComments,{mockTestData:mockTestData,className:classnames_default()("",{active:"comments"===activeTab})})]})]})]})};Profile.propTypes={data:prop_types_default.a.object.isRequired,activeTab:prop_types_default.a.string,mockTestData:prop_types_default.a.array};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Profile))``},2222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultSectionStory",(function(){return DefaultSectionStory})),__webpack_require__.d(__webpack_exports__,"InsiderSectionStory",(function(){return InsiderSectionStory})),__webpack_require__.d(__webpack_exports__,"EsBestSectionStory",(function(){return EsBestSectionStory})),__webpack_require__.d(__webpack_exports__,"AuthorSectionStory",(function(){return AuthorSectionStory}));var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(84);class MockSection_MockSection extends Mocker.a{setOverrides(props){Object(mockWithRequest.c)(),Object(mockWithRequest.i)(props.sectionOverrides),Object(mockWithRequest.g)(props.menuOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockSection_MockSection.propTypes={sectionOverrides:prop_types_default.a.object,menuOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockSection_MockSection.defaultProps={sectionOverrides:{},menuOverrides:{},reqOverrides:{},...Mocker.a.defaultProps};var components_MockSection=MockSection_MockSection,createImage=__webpack_require__(41),articleX2=__webpack_require__(329),articleX4=__webpack_require__(330),article=__webpack_require__(10),heroArticle=__webpack_require__(331),more=__webpack_require__(258),portraitArticle=articleOverrides=>({name:"Portrait Article",type:"PortraitArticle",labelText:null,labelLink:null,articles:[{...Object(article.a)({title:"Portrait article title will be here"}),...articleOverrides}]}),title=__webpack_require__(332);const SectionPage=__webpack_require__(2214).default;__webpack_exports__.default={title:"Section/Page",component:SectionPage};const DefaultSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});DefaultSectionStory.storyName="Full section page",DefaultSectionStory.parameters={amp:{isEnabled:!0}};const InsiderSectionStory=()=>{return Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/insider"},sectionOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"},components:[Object(heroArticle.a)(),Object(title.a)(),Object(articleX2.a)({isLiveBlog:!1}),Object(articleX4.a)(),Object(more.a)(),{name:"Featured Artist 1 Article",type:"FeaturedArtistX1",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"Featured Artist 1 Article"}),...articleOverrides}]},portraitArticle(),Object(more.a)()]},menuOverrides:{subnavMenu:{}},children:Object(jsx_runtime.jsx)(SectionPage,{})});var articleOverrides};InsiderSectionStory.storyName="Insider section",InsiderSectionStory.parameters={amp:{isEnabled:!0}};const EsBestSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{reqOverrides:{path:"/shopping/esbest"},sectionOverrides:{section:{name:"ES Best Home",path:"/shopping/esbest",sourcePath:"esbest"}},children:Object(jsx_runtime.jsx)(SectionPage,{})});EsBestSectionStory.storyName="EsBest section",EsBestSectionStory.parameters={amp:{isEnabled:!0}};const AuthorSectionStory=()=>Object(jsx_runtime.jsx)(components_MockSection,{menuOverrides:{subnavMenu:{}},sectionOverrides:{section:{name:"Lizzie test",id:"6223",remoteId:null,email:"elizabeth.hill@independent.co.uk",firstName:null,lastName:null,jobTitle:"Product Manager",imageUrl:Object(createImage.b)(0,150,0),twitter:"standardnews",facebook:"eveningstandard",location:"London",path:"/author/lizzie-test",description:"Lizzie is a Product Manager for ES & H&P",extra:{instagram:"evening.standard",snapchat:"eveningstandard",signatureImageUrl:null}},type:"author"},children:Object(jsx_runtime.jsx)(SectionPage,{})});AuthorSectionStory.storyName="Author section page",AuthorSectionStory.parameters={amp:{isEnabled:!0}},DefaultSectionStory.__docgenInfo={description:"",methods:[],displayName:"DefaultSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"DefaultSectionStory",docgenInfo:DefaultSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),InsiderSectionStory.__docgenInfo={description:"",methods:[],displayName:"InsiderSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"InsiderSectionStory",docgenInfo:InsiderSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),EsBestSectionStory.__docgenInfo={description:"",methods:[],displayName:"EsBestSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"EsBestSectionStory",docgenInfo:EsBestSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"}),AuthorSectionStory.__docgenInfo={description:"",methods:[],displayName:"AuthorSectionStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Section/SectionPage.stories.js"]={name:"AuthorSectionStory",docgenInfo:AuthorSectionStory.__docgenInfo,path:"stories/Section/SectionPage.stories.js"})},2223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(50),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var ConditionalFrame=__webpack_require__(342),NoIndex=__webpack_require__(163),postCodePatterns=__webpack_require__(343),chevronDown=__webpack_require__(214);var FormSelect=__webpack_require__(186),FormSubmit=__webpack_require__(83),FormTextField=__webpack_require__(78);const Wrapper=styled_components_browser_esm.default.section`
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
  &.news_benefits {
    color: ${props=>props.theme.color.standardBlue};
  }
  &.food_benefits {
    color: #f70a9a;
  }
  &.football_benefits {
    color: #f29100;
    width: 320px;
  }
  &.lifestyle_benefits {
    color: #00abe6;
  }
  &.weekender_benefits {
    color: #822081;
    width: 320px;
    @media ${Styles.c.mobileL} {
      width: 400px;
    }
  }
  &.insider_benefits {
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
  padding: 12px;
  margin: 16px 0px;
  font-size: 16px;
  font-weight: 400;

  @media ${Styles.c.tabletS} {
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
`,Register=props=>{var _query$icn;const{className:className,req:{query:query},configuration:configuration}=props,newsletter=null===(_query$icn=query.icn)||void 0===_query$icn?void 0:_query$icn.toLowerCase(),premium=Object.prototype.hasOwnProperty.call(query,"premium"),donation=Object.prototype.hasOwnProperty.call(query,"donations"),shortform=premium||donation,{newslettersConfig:newslettersConfig}=configuration,newsletterData=newsletter&&newslettersConfig&&newslettersConfig[newsletter],headerStyle=null==newsletter?void 0:newsletter.substring(4);return Object(jsx_runtime.jsxs)(ConditionalFrame.a,{className:newsletter?"newsletter-benefits":"",children:[Object(jsx_runtime.jsx)(NoIndex.a,{}),Object(jsx_runtime.jsx)(Helmet.Helmet,{children:Object(jsx_runtime.jsx)("title",{children:"Register"})}),Object(jsx_runtime.jsxs)(ConditionalWrapper,{newsletter:newsletter,children:[Object(jsx_runtime.jsxs)(Span,{children:[newsletterData&&Object(jsx_runtime.jsx)(H1,{className:headerStyle,children:newsletterData.regTitle}),"_es_insider__benefits"===newsletter&&Object(jsx_runtime.jsx)(Image_default.a,{src:"/img/insiderLogo.svg",layout:"fixed",width:"112px",height:"50px"})]}),Object(jsx_runtime.jsxs)(Register_Wrapper,{newsletter:newsletter,className:shortform?"short-form":"",children:[!newsletterData&&Object(jsx_runtime.jsxs)(Breadcrumb,{children:[Object(jsx_runtime.jsx)("a",{href:"/",children:"Home"})," > Register"]}),newsletterData&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:newsletterData.description})}),Object(jsx_runtime.jsx)("p",{children:newsletterData.label})]}),Object(jsx_runtime.jsx)(H2,{className:"reg-title",children:"Create your account"}),Object(jsx_runtime.jsxs)(P,{children:["Gain access to our newsletters, competitions, article commenting and other exclusive"," ",Object(jsx_runtime.jsxs)(Link,{href:"/service/why-register-9636948.html",children:["community benefits",Object(jsx_runtime.jsx)(Register_Icon,{dangerouslySetInnerHTML:{__html:'\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>\n  </svg>\n'}})]})]}),newsletterData&&Object(jsx_runtime.jsx)(P,{children:Object(jsx_runtime.jsx)(Link,{href:"/Register",children:"Register and sign up to the newsletter"})}),!newsletterData&&Object(jsx_runtime.jsx)(Register_RegisterForm,{}),Object(jsx_runtime.jsxs)(P,{children:["Registered? ",Object(jsx_runtime.jsx)(Link,{href:"/login",children:"Log in here"})]})]}),newsletterData&&Object(jsx_runtime.jsx)(ImageWrapper,{children:Object(jsx_runtime.jsx)(Image_default.a,{src:newsletterData.imageSrc,layout:"responsive",width:" 389",height:"1088"})})]})]})};Register.propTypes={className:prop_types_default.a.string,req:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired};__webpack_exports__.default=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Register))``},2224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProfilePageNewsletterStory",(function(){return ProfilePageNewsletterStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageDetailsStory",(function(){return ProfilePageDetailsStory})),__webpack_require__.d(__webpack_exports__,"ProfilePagePasswordStory",(function(){return ProfilePagePasswordStory})),__webpack_require__.d(__webpack_exports__,"ProfilePageCommentsStory",(function(){return ProfilePageCommentsStory})),__webpack_require__.d(__webpack_exports__,"RegisterPageStory",(function(){return RegisterPageStory})),__webpack_require__.d(__webpack_exports__,"BenefitsPageStory",(function(){return BenefitsPageStory}));var jsx_runtime=__webpack_require__(0);var mockComment=()=>['\n  <div class="comment-meta">\n    <span class="date">1 hour ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <h4 class="title">\n      Brexit deal breaches will harm hope of trade deal, Brussels chief warns Boris Johnson\n    </h4>\n  </a>\n  <a href="/news/politics/boris-johnson-brexit-deal-ursula-von-der-leyen-a4548586.html" target="_blank" class="link">\n    <p class="message">\n      first test message\n    </p>\n  </a>\n','<div class="comment-meta">\n    <span class="date">4 days ago</span>\n    <div class="options">\n      <span class="ellipsis">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M0 0h24v24H0z" fill="none"></path> <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>\n        </svg>\n      </span>\n      <div class="edit">\n        <a class="link view" href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank">\n          View\n        </a>\n        <button class="delete" data-stream-id="a4429581" data-comment-id="67219d10e8744334b9bc7e57eb5a20c5">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <h4 class="title">\n      Premier League confirm plan to finish season should government restrictions allow\n    </h4>\n  </a>\n  <a href="/sport/football/premier-league-project-restart-date-coronavirus-covid-19-a4429581.html" target="_blank" class="link">\n    <p class="message">\n      second test message\n    </p>\n  </a>\n'];var mockUser=()=>({accInfo:{UID:"448c524f687b423d9b83ec06ec7727fe",data:{receiveFoodNews:!1,receiveLifestyleNews:!1,regSourceSection:"",receiveInteriors:!1,receiveTheWeekender:!1,terms:!0,receiveGoingOutNews:!1,receiveThirdPartyOffers:!0,receiveInsider:!1,receiveESOffers:!1,receiveHeadlinesNews:!0,receiveFootballNews:!1,receivePropertyNews:!1,regSourceMethod:""},profile:{firstName:"Tim",lastName:"Tester",nickname:"Commenter",age:18,birthYear:2001,country:"United Kingdom",email:"tim.test@Test.co.uk",gender:"m",zip:"sw18 2qr"}}}),MockStaticPage=__webpack_require__(93);const ProfilePage=__webpack_require__(2219).default,RegisterPage=__webpack_require__(2223).default;__webpack_exports__.default={title:"Profile/Page",component:ProfilePage};const ProfilePageNewsletterStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{data:mockUser()})});ProfilePageNewsletterStory.storyName="Profile newsletters";const ProfilePageDetailsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"details",data:mockUser()})});ProfilePageDetailsStory.storyName="Profile details";const ProfilePagePasswordStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"password",data:mockUser()})});ProfilePagePasswordStory.storyName="Profile password";const ProfilePageCommentsStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ProfilePage,{activeTab:"comments",mockTestData:mockComment(),data:mockUser()})});ProfilePageCommentsStory.storyName="Profile comments";const RegisterPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/Register",isService:!0},children:Object(jsx_runtime.jsx)(RegisterPage,{})});RegisterPageStory.storyName="Register Page";const BenefitsPageStory=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{reqOverrides:{path:"/register?icn=_ES_news_Benefits",isService:!0,query:{icn:"_ES_news_Benefits"}},children:Object(jsx_runtime.jsx)(RegisterPage,{})});BenefitsPageStory.storyName="Benefits Page",ProfilePageNewsletterStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageNewsletterStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageNewsletterStory",docgenInfo:ProfilePageNewsletterStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageDetailsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageDetailsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageDetailsStory",docgenInfo:ProfilePageDetailsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePagePasswordStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePagePasswordStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePagePasswordStory",docgenInfo:ProfilePagePasswordStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),ProfilePageCommentsStory.__docgenInfo={description:"",methods:[],displayName:"ProfilePageCommentsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"ProfilePageCommentsStory",docgenInfo:ProfilePageCommentsStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),RegisterPageStory.__docgenInfo={description:"",methods:[],displayName:"RegisterPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"RegisterPageStory",docgenInfo:RegisterPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"}),BenefitsPageStory.__docgenInfo={description:"",methods:[],displayName:"BenefitsPageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/StaticPages/Profile.stories.js"]={name:"BenefitsPageStory",docgenInfo:BenefitsPageStory.__docgenInfo,path:"stories/StaticPages/Profile.stories.js"})},2225:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TopicsPageIndex",(function(){return TopicsPageIndex}));var jsx_runtime=__webpack_require__(0),mockTopicsList=[{name:"a12",path:"/topic/a12",id:"4296",uuid:"f7792acd-38a5-4b3e-ac08-5fc66fe6bcb9",changed:"1588344527"},{name:"A406",path:"/topic/a406",id:"6014",uuid:"99021cdd-299c-4c23-9ec8-7a8111fb80aa",changed:"1588348555"},{name:"Aaron Wan-Bissaka",path:"/topic/aaron-wan-bissaka",id:"6986",uuid:"3fa32e16-52ff-4ba7-81d4-482300c411f6",changed:"1602592501"},{name:"B&Q",path:"/topic/bq",id:"4419",uuid:"00ea67ad-f814-4d4e-98d9-bba3d45adc74",changed:"1588344527"},{name:"B&Q",path:"/topic/bq-0",id:"5256",uuid:"65ee0765-40f5-4c5a-bff8-228dd8d9aab0",changed:"1588349579"},{name:"BA",path:"/topic/ba",id:"3940",uuid:"829207cc-8a5c-4b5b-b03c-69b60cc57b1e",changed:"1588344527"},{name:"Cabinet",path:"/topic/cabinet-0",id:"6225",uuid:"8de4ca79-f752-4128-9345-ff24ac641d1c",changed:"1600078115"},{name:"Cabinet",path:"/topic/cabinet",id:"3243",uuid:"9fad733f-4919-4b0a-abbc-381795a87282",changed:"1588344527"},{name:"Cabinet Office",path:"/topic/cabinet-office",id:"4048",uuid:"158cdadc-2ebe-4c1c-8646-c80753e24090",changed:"1588344527"},{name:"d-day",path:"/topic/d-day",id:"5004",uuid:"f19de5a7-0f74-4de5-aa2a-212e329db269",changed:"1588348555"},{name:"Dagenham",path:"/topic/dagenham",id:"2876",uuid:"00c2e360-825f-48e2-ab47-8dc18839ca96",changed:"1588343108"},{name:"Daisy Edgar-Jones",path:"/topic/daisy-edgar-jones",id:"4165",uuid:"b7f6d1be-6f2e-42fb-a1d5-f0b9bc70d0fc",changed:"1588344527"},{name:"EA Sports",path:"/topic/ea-sports",id:"3122",uuid:"07be8655-7e1e-4161-96fb-7f480130a5eb",changed:"1588344527"},{name:"Ealing",path:"/topic/ealing",id:"4403",uuid:"79bbabb1-8768-4c26-860f-5dbbd5a18434",changed:"1588344527"},{name:"Ealing",path:"/topic/ealing-0",id:"6072",uuid:"5a7f41fd-3fe0-4fcc-a5d0-c3d82397f74b",changed:"1588349579"},{name:"F1",path:"/topic/f1-0",id:"6659",uuid:"dc2be5f8-a07b-43a9-9d27-ea4a3258f34f",changed:"1602583867"},{name:"F1",path:"/topic/f1",id:"3268",uuid:"10429b5e-6c38-492a-92b6-1d105fd994c4",changed:"1588344527"},{name:"FA Cup",path:"/topic/fa-cup",id:"4922",uuid:"5bdfea31-d27a-48db-90cb-dada9ffc4c84",changed:"1588348555"},{name:"Gabby Logan",path:"/topic/gabby-logan",id:"4054",uuid:"66d24a65-4043-4b4b-9f78-f4fad62e0b49",changed:"1588344527"},{name:"Gabon",path:"/topic/gabon",id:"3704",uuid:"1bfe4bd7-9ffc-4245-86e9-dcdcd931746b",changed:"1588344527"},{name:"Gabriel Martinelli",path:"/topic/gabriel-martinelli",id:"6557",uuid:"2cff6297-95e1-4e48-829e-ae9c0c5c3af8",changed:"1602583867"},{name:"At home with",path:"/topic/home",id:"3164",uuid:"4c7805f4-80db-4be2-96e7-f79bb7437d65",changed:"1588344527"},{name:"at-home beauty",path:"/topic/home-beauty",id:"3584",uuid:"bf9bebd5-1bce-4c0b-a680-377a8328190a",changed:"1588344527"},{name:"H.E.R.",path:"/topic/her",id:"7885",uuid:"3dcc2e75-7110-4a16-a426-7cdac033c202",changed:"1603050601"},{name:"I Can See Your Voice",path:"/topic/i-can-see-your-voice",id:"7101",uuid:"06016797-279b-4631-acd7-50d7980d529f",changed:"1602630301"},{name:"I'm a Celeb",path:"/topic/im-a-celeb",id:"7425",uuid:"8ba8798e-d737-4f1a-9c65-73b35cb016c0",changed:"1602758101"},{name:"I'm A Celebrity... Get Me Out Of Here!",path:"/topic/im-celebrity-get-me-out-here-0",id:"6916",uuid:"b3f07edf-09ac-43e0-9192-2aa02be7b4f3",changed:"1602583867"},{name:"J.Lo",path:"/topic/jlo",id:"4979",uuid:"2edf7ab4-16c8-4c40-a38b-a305fe6b49e1",changed:"1588348555"},{name:"jacina ardern",path:"/topic/jacina-ardern",id:"7803",uuid:"e0c4301c-e1fb-407f-9740-2a155dec795f",changed:"1602930301"},{name:"Jacinda Ardern",path:"/topic/jacinda-ardern",id:"4170",uuid:"09d7ad6c-376a-4059-93b2-bb0904a9b159",changed:"1588344527"},{name:"K Beauty",path:"/topic/k-beauty",id:"6754",uuid:"8e08689e-e777-40d3-a9bb-85b4219c7627",changed:"1602583867"},{name:"K-pop",path:"/topic/k-pop",id:"4213",uuid:"30e1a5b7-02e1-480a-a50e-3c7db6870ce5",changed:"1588344527"},{name:"Kae Tempest",path:"/topic/kae-tempest",id:"7667",uuid:"9a727914-1908-4cd0-ac28-6476fc162d72",changed:"1602844201"},{name:"A Level Results",path:"/topic/level-results",id:"6251",uuid:"843e6def-66f1-4e6c-b7e8-be57f10d3ad1",changed:"1600254532"},{name:"A-Level",path:"/topic/level",id:"6573",uuid:"51ec37f0-c08b-495b-a04a-c4e1788752e3",changed:"1602583867"},{name:"A-levels",path:"/topic/levels",id:"4962",uuid:"7698c37e-a68e-4258-b665-9e1583e3d1bc",changed:"1588348555"},{name:"AS Monaco",path:"/topic/monaco",id:"3579",uuid:"164c7e4d-dd0b-455f-b909-c4ca909b9696",changed:"1588344527"},{name:"M&S",path:"/topic/ms",id:"4266",uuid:"f7cacb77-4251-40b1-943d-bdabb93d2edd",changed:"1588344527"},{name:"M6",path:"/topic/m6",id:"3344",uuid:"14d806a6-773d-4501-8de6-e580d801c3d4",changed:"1588344527"},{name:"N'Golo Kante",path:"/topic/ngolo-kante",id:"7268",uuid:"f8cb2915-caa7-4b14-9cdd-5dbf96eae7d9",changed:"1602681601"},{name:"Nadine Coyle",path:"/topic/nadine-coyle",id:"6767",uuid:"0c731dfb-f58b-4785-b521-b833aa959651",changed:"1602583867"},{name:"Nadine Leopold",path:"/topic/nadine-leopold",id:"3091",uuid:"bf355c20-3823-43f8-8fbd-8148eb0ef6a9",changed:"1588344527"},{name:"Oasis",path:"/topic/oasis",id:"3413",uuid:"b076da8c-f53f-4701-9733-3e467345aba5",changed:"1588344527"},{name:"Oasis",path:"/topic/oasis-0",id:"7154",uuid:"625a072d-f777-4fc3-9ce6-7af2d0d3aa5b",changed:"1602665401"},{name:"Ocean",path:"/topic/ocean",id:"6367",uuid:"02077c72-19c8-4783-9f69-f15db873eff2",changed:"1602583867"},{name:"Pablo Mari",path:"/topic/pablo-mari",id:"4415",uuid:"30ce740e-2e64-4680-8c85-02213db7bd8f",changed:"1588344527"},{name:"Paddington",path:"/topic/paddington",id:"3634",uuid:"54827795-a321-47c8-96ea-87e539642a87",changed:"1588344527"},{name:"Paddington",path:"/topic/paddington-0",id:"5833",uuid:"bcf2e285-ac96-439a-b20e-4e64900fe584",changed:"1588349579"},{name:"Q&A",path:"/topic/qa",id:"3799",uuid:"4e8f4027-1106-4a23-a15c-b77bd928a52b",changed:"1588344527"},{name:"QAnon",path:"/topic/qanon",id:"7605",uuid:"e9cf7965-15f7-4588-8903-1936c2346662",changed:"1602836701"},{name:"qipco british champions day",path:"/topic/qipco-british-champions-day",id:"7795",uuid:"ac903c6e-e207-4a3d-b3f0-3e3ab02af89b",changed:"1602918301"},{name:"AS Roma",path:"/topic/roma",id:"3859",uuid:"19f42326-d67b-4e27-b6ec-e83b775007e5",changed:"1588344527"},{name:"r number",path:"/topic/r-number",id:"7783",uuid:"f86f32c2-d89f-4c14-bef8-8af9318cfbce",changed:"1602876001"},{name:"r rate",path:"/topic/r-rate",id:"7761",uuid:"0c392035-92b9-4f7e-b040-6c66ce922711",changed:"1602863101"},{name:"Sacha Baron Cohen",path:"/topic/sacha-baron-cohen",id:"3488",uuid:"ed0ea718-389a-456f-95e9-09a8d6e9ba05",changed:"1588344527"},{name:"Sacha Baron Cohen",path:"/topic/sacha-baron-cohen-0",id:"7591",uuid:"f35196dd-ec9d-4c8f-8b2f-dbdee340941c",changed:"1602835801"},{name:"Sadio Mane",path:"/topic/sadio-mane",id:"5136",uuid:"70f0dcb3-e028-419e-9090-fb10d976c4e4",changed:"1588348555"},{name:"tahnoon nimer",path:"/topic/tahnoon-nimer",id:"3152",uuid:"38c61edc-363d-435f-bc26-95e66fcf9505",changed:"1588344527"},{name:"Taji Cove",path:"/topic/taji-cove",id:"7419",uuid:"8c8e3689-6558-40a6-8e5c-741f5d898abd",changed:"1602757201"},{name:"Takumi Minamino",path:"/topic/takumi-minamino",id:"3667",uuid:"73f64785-ff76-4d90-961e-1f420bb92d1d",changed:"1588344527"},{name:"UEFA",path:"/topic/uefa",id:"3247",uuid:"b0d8fcaa-a0a2-408a-a998-469070777576",changed:"1588344527"},{name:"UEFA Champions League",path:"/topic/uefa-champions-league",id:"4140",uuid:"d0a3466f-708e-4118-aa9b-4ca3bc72695a",changed:"1588344527"},{name:"UEFA Europa League",path:"/topic/uefa-europa-league",id:"4141",uuid:"36271ad6-aa39-41f5-b085-a575034523de",changed:"1588344527"},{name:"V&A",path:"/topic/va",id:"6145",uuid:"fa43cc1f-8da0-42b5-b90e-f04856084d4d",changed:"1588348555"},{name:"Vaccine",path:"/topic/vaccine-0",id:"6504",uuid:"97409fd8-992c-44f8-aed5-4692e5bd5400",changed:"1602583867"},{name:"Vaccine",path:"/topic/vaccine",id:"3557",uuid:"bf2bd26b-ceaa-48b6-ac9e-c84ba91fdc0f",changed:"1588344527"},{name:"The Wanted",path:"/topic/wanted",id:"6726",uuid:"08ffc900-6867-441b-9aa1-07c4ba8d74b9",changed:"1602583867"},{name:"The Weeknd",path:"/topic/weeknd",id:"4788",uuid:"10fcb2a5-39fb-4907-a95a-caa6f215123d",changed:"1588348555"},{name:"Waitrose",path:"/topic/waitrose-0",id:"7441",uuid:"830b7aa8-7727-47a1-9691-632518dd1c86",changed:"1602761101"},{name:"xande silva",path:"/topic/xande-silva",id:"4510",uuid:"4eb56fcc-adc2-47ff-9697-602317091c67",changed:"1588344527"},{name:"Xavi",path:"/topic/xavi",id:"4873",uuid:"32027d35-ce6b-456a-95ce-4450225f51f0",changed:"1588348555"},{name:"Xbox",path:"/topic/xbox",id:"2859",uuid:"8c46991b-28c1-496e-951a-7bee17c64d2e",changed:"1588343108"},{name:"Yoga",path:"/topic/yoga",id:"3758",uuid:"81d2409f-8e71-43f6-a1e8-53bf9d149b64",changed:"1588344527"},{name:"Yolanda Hadid",path:"/topic/yolanda-hadid",id:"3396",uuid:"89bc1bb9-b682-4b47-8c34-328f3bbdfada",changed:"1588344527"},{name:"York",path:"/topic/york",id:"3673",uuid:"30767798-a0d6-4c75-ab9d-949ac3121d68",changed:"1588344527"},{name:"A-Z of Music",path:"/topic/z-music",id:"3719",uuid:"7608491b-fe73-4336-a647-f78d5b916cc6",changed:"1588344527"},{name:"Zabou",path:"/topic/zabou",id:"6097",uuid:"ecc873a8-ef39-4af7-8d72-515f89e270e8",changed:"1588348555"},{name:"Zack Steffen",path:"/topic/zack-steffen",id:"4506",uuid:"43e83d30-c0e0-43dd-abc7-8fb88efbe947",changed:"1588344527"}],MockStaticPage=__webpack_require__(93);const TopicsPage=__webpack_require__(2211).default;__webpack_exports__.default={title:"Other/Pages/Topics List",component:TopicsPage};const TopicsPageIndex=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(TopicsPage,{data:mockTopicsList})});TopicsPageIndex.storyName="Topics index",TopicsPageIndex.__docgenInfo={description:"",methods:[],displayName:"TopicsPageIndex"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Pages/Topics.stories.js"]={name:"TopicsPageIndex",docgenInfo:TopicsPageIndex.__docgenInfo,path:"stories/Other/Pages/Topics.stories.js"})},2226:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArchivePageIndex",(function(){return ArchivePageIndex})),__webpack_require__.d(__webpack_exports__,"ArchivePageDate",(function(){return ArchivePageDate}));var jsx_runtime=__webpack_require__(0);const mockArchiveIndex={years:[{text:2020,link:"/2020"},{text:2019,link:"/2019"},{text:2018,link:"/2018"},{text:2017,link:"/2017"},{text:2016,link:"/2016"},{text:2015,link:"/2015"},{text:2014,link:"/2014"},{text:2013,link:"/2013"},{text:2012,link:"/2012"},{text:2011,link:"/2011"},{text:2010,link:"/2010"},{text:2009,link:"/2009"},{text:2008,link:"/2008"},{text:2007,link:"/2007"},{text:2006,link:"/2006"},{text:2005,link:"/2005"},{text:2004,link:"/2004"},{text:2003,link:"/2003"},{text:2002,link:"/2002"},{text:2001,link:"/2001"},{text:2e3,link:"/2000"}],params:""},mockArchiveDate={years:[],articles:[{title:"Support for coronavirus strategy slumps as new testing chaos is exposed",link:"/news/politics/coronavirus-strategy-testing-chaos-poll-support-b2441.html",time:"10:45",timestamp:"1602063923"},{title:"Boris promises return of low deposit first-time buyer mortgages",link:"/homesandproperty/first-time-buyer-mortgage-scheme-boris-johnson-a4565401.html",time:"11:55",timestamp:"1602068101"}],params:"2020-10-07"};var MockStaticPage=__webpack_require__(93);const ArchivePage=__webpack_require__(2210).default;__webpack_exports__.default={title:"Other/Pages/Archive",component:ArchivePage};const ArchivePageIndex=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ArchivePage,{data:mockArchiveIndex})});ArchivePageIndex.storyName="Archive index";const ArchivePageDate=()=>Object(jsx_runtime.jsx)(MockStaticPage.a,{children:Object(jsx_runtime.jsx)(ArchivePage,{data:mockArchiveDate})});ArchivePageDate.storyName="Archive date",ArchivePageIndex.__docgenInfo={description:"",methods:[],displayName:"ArchivePageIndex"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Pages/Archive.stories.js"]={name:"ArchivePageIndex",docgenInfo:ArchivePageIndex.__docgenInfo,path:"stories/Other/Pages/Archive.stories.js"}),ArchivePageDate.__docgenInfo={description:"",methods:[],displayName:"ArchivePageDate"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Other/Pages/Archive.stories.js"]={name:"ArchivePageDate",docgenInfo:ArchivePageDate.__docgenInfo,path:"stories/Other/Pages/Archive.stories.js"})},2228:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticlePageStory",(function(){return ArticlePageStory})),__webpack_require__.d(__webpack_exports__,"LiveBlogStory",(function(){return LiveBlogStory})),__webpack_require__.d(__webpack_exports__,"InsiderArticleStory",(function(){return InsiderArticleStory})),__webpack_require__.d(__webpack_exports__,"ArticleLinkEmbedStory",(function(){return ArticleLinkEmbedStory})),__webpack_require__.d(__webpack_exports__,"StaticArticleStory",(function(){return StaticArticleStory}));var jsx_runtime=__webpack_require__(0),MockArticle=__webpack_require__(54),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),mockWithRequest=__webpack_require__(74),Mocker=__webpack_require__(84);class MockStaticArticle_MockStaticArticleContent extends Mocker.a{setOverrides(props){Object(mockWithRequest.a)(),Object(mockWithRequest.j)(props.articleOverrides),Object(mockWithRequest.h)(props.reqOverrides)}}MockStaticArticle_MockStaticArticleContent.propTypes={setMockStaticArticleOverrides:prop_types_default.a.object,reqOverrides:prop_types_default.a.object,...Mocker.a.propTypes},MockStaticArticle_MockStaticArticleContent.defaultProps={setMockStaticArticleOverridess:{},reqOverrides:{},...Mocker.a.defaultProps};var MockStaticArticle=MockStaticArticle_MockStaticArticleContent,createImage=__webpack_require__(41);const ArticlePage=__webpack_require__(252).default;__webpack_exports__.default={title:"Article/Page",component:ArticlePage};const ArticlePageStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticlePageStory.storyName="Default article",ArticlePageStory.parameters={amp:{isEnabled:!0}};const LiveBlogStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{isLiveBlog:!0,liveblog:__webpack_require__(476).default()},children:Object(jsx_runtime.jsx)(ArticlePage,{})});LiveBlogStory.storyName="Live blog article";const InsiderArticleStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{reqOverrides:{path:"/insider"},articleOverrides:{section:{name:"Insider",path:"/insider",sourcePath:"insider"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});InsiderArticleStory.storyName="Insider article";const ArticleLinkEmbedStory=()=>Object(jsx_runtime.jsx)(MockArticle.a,{articleOverrides:{body:[{type:"article-link",data:{markup:"",url:"https://www.standard.co.uk/",image:{url:Object(createImage.b)(0,0,150),width:null,height:null,type:"jpg"},title:"London sees more than 6,200 new coronavirus cases in a week",description:"Covid-19’s grip on London is growing with more than 6,200 new cases in a week, official figures reveal today. They show there were 6,273 cases in the seven days to October 4, up from 3,965 in the previous week. Redbridge, in East London, and Richmond, in South West London, have both now gone above the 100 new cases per 100,000 in a week, a level which community leaders have previously indicated is a possible trigger for further restrictions."},id:"unfk9h48"}]},children:Object(jsx_runtime.jsx)(ArticlePage,{})});ArticleLinkEmbedStory.storyName="Article with embedded article link";const StaticArticleStory=()=>Object(jsx_runtime.jsx)(MockStaticArticle,{reqOverrides:{path:"/service/contact-evening-standard-b2454.html"},articleOverrides:{section:{name:"Contact",path:"/service/contact-evening-standard-b2454.html",sourcePath:"Contact"}},children:Object(jsx_runtime.jsx)(ArticlePage,{})});StaticArticleStory.storyName="Static Article",ArticlePageStory.__docgenInfo={description:"",methods:[],displayName:"ArticlePageStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticlePageStory",docgenInfo:ArticlePageStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),LiveBlogStory.__docgenInfo={description:"",methods:[],displayName:"LiveBlogStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"LiveBlogStory",docgenInfo:LiveBlogStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),InsiderArticleStory.__docgenInfo={description:"",methods:[],displayName:"InsiderArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"InsiderArticleStory",docgenInfo:InsiderArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),ArticleLinkEmbedStory.__docgenInfo={description:"",methods:[],displayName:"ArticleLinkEmbedStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"ArticleLinkEmbedStory",docgenInfo:ArticleLinkEmbedStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"}),StaticArticleStory.__docgenInfo={description:"",methods:[],displayName:"StaticArticleStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Article/ArticlePage.stories.js"]={name:"StaticArticleStory",docgenInfo:StaticArticleStory.__docgenInfo,path:"stories/Article/ArticlePage.stories.js"})},25:function(module,__webpack_exports__,__webpack_require__){"use strict";var RequestProvider=__webpack_require__(8),compose=__webpack_require__(183),Ad=__webpack_require__(256),jsx_runtime=__webpack_require__(0),ads=__webpack_require__(333);const createAdUnitPath=(page,pageType,id,cleanAmp,thirdPartyAd)=>{const hierarchy=page.hierarchy?page.hierarchy.map(({path:path,sourcePath:sourcePath})=>(sourcePath||path).split("/").slice(-1)[0]):page.section.path.split("/").slice(1),{networkId:networkId,adUnitHomepage:adUnitHomepage,thirdPartyUnitHomepage:thirdPartyUnitHomepage}=ads.a[page.adConfig.data.publication.domain],ampAppend=cleanAmp?"_amp":"";return[networkId,`${thirdPartyAd?thirdPartyUnitHomepage:adUnitHomepage}${ampAppend}`,...["hp","main"].map((unit,i)=>hierarchy[i]?`${hierarchy[i]}${ampAppend}`:`${unit}${ampAppend}`).map(unit=>"es_"+unit),""+pageType,""+id.replace(/_\d+$/,"")]};__webpack_exports__.a=Object(compose.a)(RequestProvider.withRequest,MPU=>{const MPUWithAdUnitPathArr=({id:id,cleanAmp:cleanAmp,article:article,section:section,jsGlobals:jsGlobals,thirdPartyAd:thirdPartyAd=!1,...props})=>Object(jsx_runtime.jsx)(MPU,{id:id,cleanAmp:cleanAmp,adUnitPathArr:createAdUnitPath(article||section,jsGlobals.pageType,id,cleanAmp,thirdPartyAd),...props}),{adUnitPathArr:adUnitPathArr,...propTypes}=MPU.propTypes;return MPUWithAdUnitPathArr.propTypes=propTypes,MPUWithAdUnitPathArr})(Ad.default)},252:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ArticleContent",(function(){return ArticleContent}));var jsx_runtime=__webpack_require__(0),Helmet=__webpack_require__(50),RequestProvider=__webpack_require__(8),utils_adData=__webpack_require__(897),utils_page=__webpack_require__(898),themes=__webpack_require__(899),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),config=__webpack_require__(164),Styles=__webpack_require__(3),ads=__webpack_require__(94),services_article=__webpack_require__(77),util_page=__webpack_require__(335),TopBanner=__webpack_require__(336),WallPaper=__webpack_require__(216),MPU=__webpack_require__(25);const Root=styled_components_browser_esm.default.div`
  position: absolute;
  top: 0;
  left: 0;
`,ThirdParty=({id:id,sizes:sizes})=>Object(jsx_runtime.jsx)(Root,{children:Object(jsx_runtime.jsx)(MPU.a,{id:id,"force-bulk":!0,sizes:sizes})});ThirdParty.propTypes={id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string},ThirdParty.__docgenInfo={description:"",methods:[],displayName:"ThirdParty",props:{id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""}}};var Ads_ThirdParty=ThirdParty;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ThirdParty.js"]={name:"ThirdParty",docgenInfo:ThirdParty.__docgenInfo,path:"app/component/library/Article/Ads/ThirdParty.js"});const Trackonomics=({cleanAmp:cleanAmp,config:{customerId:customerId}})=>{const jsonObject={output:"https://cdn-magiclinks.trackonomics.net/client/static/amp_redirect/${customerId}.html?rand=${random}&source=SOURCE_URL&anchor_href=${href}&ref=DOCUMENT_REFERRER",vars:{customerId:customerId},attribute:{href:"(.*((amp\\.trackonomics\\.net)|(awin1\\.com)|(anrdoezrs\\.net)|(jdoqocy\\.com)|(tqlkg\\.com)|(tkqlhce\\.com)|(jdoqocy\\.com)|(kqzyfj\\.com)|(ftjcfx\\.com)|(lduhtrp\\.net)|(jqoqocy\\.com)|(Kqzfj\\.com)|(dpbolvw\\.net)|(\\/(c)\\/([0-9]+)\\/([0-9]+)\\/([0-9]+))|(2cw9\\.net)|(w6fg\\.net)|(7ymy\\.net)|(zz6n\\.net)|(a4v3ci\\.net)|(dttq\\.net)|(5oih\\.net)|(njih\\.net)|(rfvk\\.net)|(rt8x\\.net)|(43k8\\.net)|(7eer\\.net)|(uzvs\\.net)|(u44t\\.net)|(pvxt\\.net)|(vaz6fn\\.net)|(ojrq\\.net)|(mvvx\\.net)|(yx69dc\\.net)|(awb5\\.net)|(k7qtpo\\.net)|(8odi\\.net)|(mp5l\\.net)|(evyy\\.net)|(fx3vf7\\.net)|(2npn3e\\.net)|(i9pljp\\.net)|(l9vx\\.net)|(75r4\\.net)|(ulnv\\.net)|(74rjtv\\.net)|(trw6mw\\.net)|(xwrk\\.net)|(dgdrgu\\.net)|(tnu8\\.net)|(pq2o\\.net)|(snlv\\.net)|(yfb7\\.net)|(vzck\\.net)|(glg9ob\\.net)|(5f77\\.net)|(sk2bvq\\.net)|(iln8\\.net)|(7tiv\\.net)|(o93x\\.net)|(yfh6ag\\.net)|(zfrcsk\\.net)|(kwpkyy\\.net)|(6cqhdo\\.net)|(fziv\\.net)|(f9tmep\\.net)|(bwa8\\.net)|(74az\\.net)|(gnv2\\.net)|(uidg\\.net)|(i3zp\\.net)|(ssxmnr\\.net)|(l9yg\\.net)|(ixmz\\.net)|(fmtgqt\\.net)|(uydo\\.net)|(2lsp\\.net)|(oie8\\.net)|(7mh5\\.net)|(tmfhgn\\.net)|(ngi2ba\\.net)|(bs6l\\.net)|(fdf2\\.net)|(ruqo\\.net)|(bts6\\.net)|(yxku6p\\.net)|(xhuc\\.net)|(b9i7\\.net)|(vzffua\\.net)|(oteh\\.net)|(uskn\\.net)|(kxyi\\.net)|(hyyc7q\\.net)|(5ad6\\.net)|(n76h\\.net)|(quvl\\.net)|(qflm\\.net)|(8hwt\\.net)|(ig9i\\.net)|(d2lsjo\\.net)|(9quv\\.net)|(rao4\\.net)|(xikq\\.net)|(72mu89\\.net)|(xrx2ci\\.net)|(q4ew\\.net)|(j4ib\\.net)|(wrrv\\.net)|(uqzq\\.net)|(mw46\\.net)|(z6vo\\.net)|(g39l\\.net)|(2det\\.net)|(ibfwsl\\.net)|(jtlo\\.net)|(dfjeo3\\.net)|(wqi6\\.net)|(jgpt48\\.net)|(eccsr4\\.net)|(myi4\\.net)|(j4df\\.net)|(s7so\\.net)|(w2wxmz\\.net)|(64ud\\.net)|(6rfywi\\.net)|(rrmo\\.net)|(2m8f\\.net)|(fu4n\\.net)|(ryvx\\.net)|(mjs4\\.net)|(bn5x\\.net)|(7xde\\.net)|(5vju\\.net)|(7zd4df\\.net)|(xuok\\.net)|(o64jx9\\.net)|(am3t9s\\.net)|(w2t6\\.net)|(xr64\\.net)|(vayb\\.net)|(ygwk\\.net)|(ioym\\.net)|(dg6u\\.net)|(oyuv\\.net)|(otg8\\.net)|(8ujrgu\\.net)|(3qag\\.net)|(3f64ir\\.net)|(hrlo\\.net)|(fjbu\\.net)|(fqik\\.net)|(43wo\\.net)|(ncw6\\.net)|(9nz77o\\.net)|(xk3g\\.net)|(p7qb\\.net)|(mvqw\\.net)|(ntaf\\.net)|(iypa\\.net)|(rv5k\\.net)|(wjx7\\.net)|(5d3x\\.net)|(saq2\\.net)|(vegb\\.net)|(pxi6\\.net)|(b54k\\.net)|(njv3dp\\.net)|(nob9\\.net)|(t8puue\\.net)|(briy\\.net)|(bpu9\\.net)|(voq9\\.net)|(8aog\\.net)|(dodxnr\\.net)|(igs4ds\\.net)|(w9v5\\.net)|(exgl\\.net)|(3uu8\\.net)|(ei7w\\.net)|(vjggsg\\.net)|(79ic8e\\.net)|(6noy\\.net)|(zrjdwn\\.net)|(vdcy\\.net)|(8ne3\\.net)|(tk2x2c\\.net)|(2xc8\\.net)|(3tvl\\.net)|(tkjf\\.net)|(r69o\\.net)|(o5kg\\.net)|(74wq\\.net)|(zc5a\\.net)|(e8i7\\.net)|(bvrd\\.net)|(r2oa\\.net)|(uisv\\.net)|(uqhv\\.net)|(y8uw\\.net)|(o67m\\.net)|(ydow\\.net)|(mlvy\\.net)|(liln\\.net)|(ga3c\\.net)|(szey\\.net)|(2lka\\.net)|(opfm\\.net)|(rhq9ml\\.net)|(jvam\\.net)|(uqog\\.net)|(ork2\\.net)|(nwh3qn\\.net)|(znqymu\\.net)|(wsslc4\\.net)|(8kt6\\.net)|(9pctbx\\.net)|(7voo\\.net)|(ifmu\\.net)|(fzsu\\.net)|(9j4c\\.net)|(ow29pp\\.net)|(sgur\\.net)|(icjj\\.net)|(27exom\\.net)|(6ywx\\.net)|(upvt\\.net)|(4paxeq\\.net)|(ue8cqz\\.net)|(2su64p\\.net)|(wo8g\\.net)|(lvuv\\.net)|(36c4\\.net)|(vzew\\.net)|(hmqldu\\.net)|(m768hc\\.net)|(7no9\\.net)|(xuvt\\.net)|(pfm4\\.net)|(3lki\\.net)|(p73z\\.net)|(i3f2\\.net)|(7isk\\.net)|(7z5k\\.net)|(brvi\\.net)|(fi2z\\.net)|(znvt\\.net)|(tpeipe\\.net)|(imlz\\.net)|(audw\\.net)|(rqu9\\.net)|(hjef\\.net)|(ln72\\.net)|(a5fp\\.net)|(juo2\\.net)|(ir2by2\\.net)|(tf77py\\.net)|(eszb\\.net)|(2gib\\.net)|(bop8\\.net)|(nsji\\.net)|(mpye\\.net)|(hs9x\\.net)|(vocq\\.net)|(msafflnk\\.net)|(8zwg\\.net)|(58dp\\.net)|(973t\\.net)|(hu6f\\.net)|(5kd8\\.net)|(ue7a\\.net)|(i8h2\\.net)|(7orgeq\\.net)|(mp4l\\.net)|(6wfgdb\\.net)|(ayxtyv\\.net)|(h4km\\.net)|(mxu9\\.net)|(w9iork\\.net)|(ftcv\\.net)|(6eld\\.net)|(atkw\\.net)|(nkwcmr\\.net)|(vwz6\\.net)|(xovt\\.net)|(lkze4s\\.net)|(uxsi\\.net)|(wkq9\\.net)|(8utb\\.net)|(2j9x\\.net)|(kk2kau\\.net)|(iy7a\\.net)|(2xje\\.net)|(vqi8\\.net)|(keof\\.net)|(givvml\\.net)|(x57o\\.net)|(33qw\\.net)|(nbq93e\\.net)|(tlir\\.net)|(7st3op\\.net)|(l3km\\.net)|(pb6g\\.net)|(hj2i\\.net)|(8f6i\\.net)|(tql5\\.net)|(otpb\\.net)|(2gfm\\.net)|(whij\\.net)|(9zpg\\.net)|(8mz3uu\\.net)|(8hslpj\\.net)|(nrku7u\\.net)|(xg6r\\.net)|(jyae\\.net)|(o3ae\\.net)|(9vn7kv\\.net)|(rw9xb6\\.net)|(z5dw\\.net)|(wk5q\\.net)|(e9jo\\.net)|(r7kg\\.net)|(uikc\\.net)|(258o\\.net)|(eyip\\.net)|(c9ftyd\\.net)|(a9yw\\.net)|(krg4\\.net)|(et7l\\.net)|(wd2f\\.net)|(nvaz\\.net)|(ozkewk\\.net)|(5sfo\\.net)|(qumg\\.net)|(5l5h\\.net)|(cwv7\\.net)|(qbt4\\.net)|(ytuz\\.net)|(3xvk\\.net)|(zlyuo6\\.net)|(58mq\\.net)|(z27l\\.net)|(iqoc\\.net)|(eqjw\\.net)|(dbapeb\\.net)|(hgphc2\\.net)|(wnbi\\.net)|(te8rfv\\.net)|(qyiv3c\\.net)|(jv6k\\.net)|(9rwv\\.net)|(zgkv\\.net)|(p5ld\\.net)|(s4lle7\\.net)|(eqcm\\.net)|(wsktbf\\.net)|(7ema\\.net)|(2rch\\.net)|(y6mxrg\\.net)|(cmuw\\.net)|(jedg\\.net)|(wmempi\\.net)|(lmwjx3\\.net)|(zpn8dk\\.net)|(z724\\.net)|(zihf\\.net)|(i5md\\.net)|(yaub\\.net)|(syuh\\.net)|(htuy\\.net)|(pbj2\\.net)|(zvq6\\.net)|(rg35\\.net)|(8ibi\\.net)|(kbp968\\.net)|(5zd6\\.net)|(n72aat\\.net)|(aiy7\\.net)|(nnh2\\.net)|(z6rjha\\.net)|(7fdy\\.net)|(8bvm\\.net)|(qodh\\.net)|(jwpdsd\\.net)|(otegtm\\.net)|(2t23\\.net)|(i5em\\.net)|(xibx\\.net)|(xlwzq3\\.net)|(deg5\\.net)|(3anx\\.net)|(78cfvm\\.net)|(57ib\\.net)|(6dny\\.net)|(auhm\\.net)|(tm7566\\.net)|(tm7516\\.net)|(tm7569\\.net)|(tm7559\\.net)|(tm7560\\.net)|(tm7562\\.net)|(tm8534\\.net)|(lusg\\.net)|(bxvfun\\.net)|(8bga\\.net)|(22o6\\.net)|(ebml\\.net)|(9q66\\.net)|(i679\\.net)|(attfm2\\.net)|(ztk5\\.net)|(dubn\\.net)|(yuxg\\.net)|(2nm686\\.net)|(meqk\\.net)|(kd4a\\.net)|(e2rq\\.net)|(m43q4j\\.net)|(hblm3c\\.net)|(yvzx\\.net)|(vp6l\\.net)|(u97e\\.net)|(5rmr\\.net)|(qyov\\.net)|(yoxl\\.net)|(e54b\\.net)|(akum7z\\.net)|(hg7mxc\\.net)|(pdy5\\.net)|(aqpq\\.net)|(mivh\\.net)|(eqwh\\.net)|(vx83\\.net)|(vtdix3\\.net)|(xvtl\\.net)|(ulvh\\.net)|(cw3o\\.net)|(zvcr\\.net)|(eat8mo\\.net)|(ikkr9x\\.net)|(6x7g\\.net)|(bzi2vw\\.net)|(43a8\\.net)|(gfpv\\.net)|(sjv\\.io)|(pxf\\.io)|(affiliates\\.abebooks\\.com)|(go\\.corsair\\.com)|(go\\.gemvara\\.com)|(go\\.jewelry\\.com)|(go\\.web\\.plus\\.espn\\.com)|(goto\\.bodybuilding\\.com)|(goto\\.carters\\.com)|(goto\\.grocery\\.walmart\\.com)|(goto\\.kayosports\\.com\\.au)|(goto\\.target\\.com)|(goto\\.walmart\\.com)|(hpn\\.houzz\\.com)|(linkto\\.hrblock\\.com)|(partners\\.alamo\\.com)|(partners\\.enterprise\\.com)|(partners\\.hostgator\\.com)|(partners\\.hotwire\\.com)|(partners\\.nationalcar\\.com)|(refer\\.turo\\.com)|(tracking\\.maxcdn\\.com)|(tracking\\.stackpath\\.com)|(hpn\\.houzz\\.co\\.uk)|(partners\\.wantable\\.co)|(click\\.linksynergy\\.com)|(shareasale\\.com)|(shrsl\\.com)|(go\\.redirectingat\\.com)|(go\\.skimresources\\.com)|(pepperjamnetwork\\.com)|(pjtra\\.com\\/t\\/)|(gopjn\\.com\\/t\\/)|(pjatr\\.com\\/t\\/)|(pntra\\.com\\/t\\/)|(pntrs\\.com\\/t\\/)|(pntrac\\.com\\/t\\/)|(tradedoubler\\.com\\/click)|(pf\\.tradedoubler\\.com\\/pf\\/)|(track\\.webgains\\.com)|(prf\\.hn\\/click)|(avantlink\\.com\\/click)|(redirect\\.viglink\\.com)).*)"}};return cleanAmp?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("a",{href:"https://amp.trackonomics.net"}),Object(jsx_runtime.jsx)("amp-link-rewriter",{layout:"nodisplay",children:Object(jsx_runtime.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(jsonObject)}})})]}):Object(jsx_runtime.jsx)("script",{id:"funnel-relay-installer","data-property-id":"PROPERTY_ID","data-customer-id":customerId,src:`https://cdn-magiclinks.trackonomics.net/client/static/v2/${customerId}.js`,async:"async"})};Trackonomics.propTypes={cleanAmp:prop_types_default.a.bool,config:prop_types_default.a.object},Trackonomics.__docgenInfo={description:"",methods:[],displayName:"Trackonomics",props:{cleanAmp:{type:{name:"bool"},required:!1,description:""},config:{type:{name:"object"},required:!1,description:""}}};var Ads_Trackonomics=Trackonomics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Trackonomics.js"]={name:"Trackonomics",docgenInfo:Trackonomics.__docgenInfo,path:"app/component/library/Article/Ads/Trackonomics.js"});var ArticleMeta=__webpack_require__(483);var Article_ColumnWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 12px;
  @media ${Styles.c.laptop} {
    max-width: 1000px;
    padding: ${props=>props.isService?"0 213px 0 160px":"0 16px"};
    margin: 0 auto;
  }
`,react=__webpack_require__(4),utils_scoreboard=__webpack_require__(902),Ad=__webpack_require__(161),logo=__webpack_require__(345);const NewsletterSignup_Wrapper=styled_components_browser_esm.default.div`
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
`,NewsletterSignup=({data:data={},isMenu:isMenu=!1,configuration:configuration})=>{const newsletterConfig=configuration.hubspot,path=data.section?data.section.path:data.path;if(!newsletterConfig||!path)return null;let formData={...newsletterConfig.default,title:configuration.name,page:data.type||"NL Page",portalId:newsletterConfig.portalId};return formData.section=data.section?data.section.name:data.sections?data.sections.slice(-1)[0].name:"Newsletter",Object.keys(newsletterConfig.customSections).forEach(section=>{path.includes(section)&&(formData={...formData,...newsletterConfig.customSections[section]})}),Object(jsx_runtime.jsx)(NewsletterSignup_Wrapper,{children:Object(jsx_runtime.jsxs)(InnerWrapper,{className:isMenu?"menu-newsletter":"",children:[Object(jsx_runtime.jsx)(Logo,{dangerouslySetInnerHTML:{__html:logo.a}}),Object(jsx_runtime.jsxs)(Header,{children:[Object(jsx_runtime.jsx)("span",{children:"Sign up"})," to our ",formData.newsletterName," newsletter"]}),Object(jsx_runtime.jsxs)("form",{id:isMenu?"menu-newsletter-signup-form":"newsletter-signup-form",method:"POST","action-xhr":"/internal-api/newsletter",target:"_top",children:[Object(jsx_runtime.jsx)("input",{name:"email",type:"email","aria-label":"Email",className:"newsletter-email",placeholder:"Enter your email",required:!0}),Object(jsx_runtime.jsx)("input",{name:"opt_in",type:"hidden",readOnly:!0,value:formData.list}),Object(jsx_runtime.jsx)("input",{name:"source",type:"hidden",readOnly:!0,value:`${formData.title} in ${formData.page}`}),Object(jsx_runtime.jsx)("input",{name:"source_url",type:"hidden",readOnly:!0,value:path}),Object(jsx_runtime.jsx)("input",{name:"source_website_category",type:"hidden",readOnly:!0,value:formData.section}),Object(jsx_runtime.jsx)("input",{name:"site_id",type:"hidden",readOnly:!0,value:formData.portalId}),Object(jsx_runtime.jsx)("input",{name:"form_id",type:"hidden",readOnly:!0,value:formData.guid}),Object(jsx_runtime.jsx)("input",{type:"submit",value:"Sign up",className:"newsletter-submit"}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-success":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:`Thanks,  {{email}} has been added to our newsletter.\n            If this is the first time you have subscribed to emails from JPIMedia Ltd, the publishers of ${formData.title}, please check your inbox to verify your email address.`})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message","submit-error":"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Sorry, there seem to be some issues. Please try again later."})}),Object(jsx_runtime.jsx)("div",{className:"newsletter-message",submitting:"true",children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:"Submitting..."})})]})]})})};NewsletterSignup.propTypes={domain:prop_types_default.a.string,data:prop_types_default.a.object,isMenu:prop_types_default.a.bool,configuration:prop_types_default.a.object.isRequired},NewsletterSignup.__docgenInfo={description:"",methods:[],displayName:"NewsletterSignup",props:{data:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},isMenu:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},domain:{type:{name:"string"},required:!1,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var library_NewsletterSignup=NewsletterSignup;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/NewsletterSignup.js"]={name:"NewsletterSignup",docgenInfo:NewsletterSignup.__docgenInfo,path:"app/component/library/NewsletterSignup.js"});const Apester=({token:token})=>token?Object(jsx_runtime.jsx)("interaction",{className:"apester-media","data-token":token}):null;Apester.propTypes={token:prop_types_default.a.string},Apester.__docgenInfo={description:"",methods:[],displayName:"Apester",props:{token:{type:{name:"string"},required:!1,description:""}}};var Ads_Apester=Apester;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Apester.js"]={name:"Apester",docgenInfo:Apester.__docgenInfo,path:"app/component/library/Article/Ads/Apester.js"});const ArticlePrompt=()=>Object(jsx_runtime.jsx)("div",{id:"article-im-prompt"},"article-im-prompt");ArticlePrompt.__docgenInfo={description:"",methods:[],displayName:"ArticlePrompt"};var Ads_ArticlePrompt=ArticlePrompt;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/ArticlePrompt.js"]={name:"ArticlePrompt",docgenInfo:ArticlePrompt.__docgenInfo,path:"app/component/library/Article/Ads/ArticlePrompt.js"});var Common=__webpack_require__(339);const AmpIframe=(props,{children:children})=>Object(jsx_runtime.jsx)("amp-iframe",{...props,children:children});AmpIframe.propTypes={...Common.a,src:prop_types_default.a.string.isRequired,srcdoc:prop_types_default.a.any,frameborder:prop_types_default.a.any,allowfullscreen:prop_types_default.a.any,allowpaymentrequest:prop_types_default.a.any,allowtransparency:prop_types_default.a.any,referrerpolicy:prop_types_default.a.any,sandbox:prop_types_default.a.string},AmpIframe.__docgenInfo={description:"",methods:[],displayName:"AmpIframe",props:{src:{type:{name:"string"},required:!0,description:""},srcdoc:{type:{name:"any"},required:!1,description:""},frameborder:{type:{name:"any"},required:!1,description:""},allowfullscreen:{type:{name:"any"},required:!1,description:""},allowpaymentrequest:{type:{name:"any"},required:!1,description:""},allowtransparency:{type:{name:"any"},required:!1,description:""},referrerpolicy:{type:{name:"any"},required:!1,description:""},sandbox:{type:{name:"string"},required:!1,description:""}},composes:["./props/Common"]};var Iframe=AmpIframe;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/Iframe.js"]={name:"AmpIframe",docgenInfo:AmpIframe.__docgenInfo,path:"app/component/library/AMP/Iframe.js"});const DefaultWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.maxMobileL} {
    display: none;
  }
`,MobileWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.mobileL} {
    display: none;
  }
`,AMPIframe=({height:height})=>Object(jsx_runtime.jsx)(Iframe,{sandbox:"allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",layout:"fixed-height",height:height,src:"https://fresh8.co/5d555a36ba73f3001a5be799/adtag?isAdTag=true",frameborder:"0",children:Object(jsx_runtime.jsx)("amp-img",{layout:"fill",src:"/img/1x1.png",placeholder:!0})});AMPIframe.propTypes={height:prop_types_default.a.number.isRequired};const Fresh8=()=>Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(DefaultWrapper,{children:Object(jsx_runtime.jsx)(AMPIframe,{height:118})}),Object(jsx_runtime.jsx)(MobileWrapper,{children:Object(jsx_runtime.jsx)(AMPIframe,{height:150})})]});Fresh8.__docgenInfo={description:"",methods:[],displayName:"Fresh8"};var Ads_Fresh8=Fresh8;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/Fresh8.js"]={name:"Fresh8",docgenInfo:Fresh8.__docgenInfo,path:"app/component/library/Article/Ads/Fresh8.js"});const TokenProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,res:{locals:locals}})=>{var _locals$article;const{apester:apester}=config.a.getConfig(),isSport=((sectionName,sections)=>sections.some(({name:name})=>name.toLowerCase()===sectionName))("sport",(null===(_locals$article=locals.article)||void 0===_locals$article?void 0:_locals$article.sections)||[]);return Object(react.cloneElement)(children,{token:isSport?apester.alternateToken:apester.token})});const Container=styled_components_browser_esm.default.div`
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
`,PartnerAds=props=>Object(jsx_runtime.jsxs)(PartnerAds_Container,{...props,children:[Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_1",width:245,height:210,"size-key":"PARTNERADS","force-bulk":!0}),Object(jsx_runtime.jsx)(MPU.a,{id:"partner_ad_2","size-key":"PARTNERADS",width:245,height:210,"force-bulk":!0})]});PartnerAds.__docgenInfo={description:"",methods:[],displayName:"PartnerAds"};var Ads_PartnerAds=PartnerAds;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/PartnerAds.js"]={name:"PartnerAds",docgenInfo:PartnerAds.__docgenInfo,path:"app/component/library/Article/Ads/PartnerAds.js"});var Taboola=__webpack_require__(117);const TaboolaBelowArticle1=({cleanAmp:cleanAmp,jsGlobals:jsGlobals})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-1",width:101,height:100,heights:["(min-width:1514px) 74%","(min-width:1096px) 81%","(min-width:801px) 90%","(min-width:581px) 102%","(min-width:420px) 119%","(min-width:390px) 361%","389%"],placement:"Below Article Thumbnails - AMP",mode:jsGlobals.taboola.ampBelowArticleMode||"thumbnails-e1"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-1",className:"taboola-below-article"});TaboolaBelowArticle1.propTypes={cleanAmp:prop_types_default.a.bool,jsGlobals:prop_types_default.a.object.isRequired},TaboolaBelowArticle1.defaultProps={cleanAmp:!1},TaboolaBelowArticle1.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle1",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""}}};var Ads_TaboolaBelowArticle1=Object(RequestProvider.withRequest)(TaboolaBelowArticle1);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle1.js"]={name:"TaboolaBelowArticle1",docgenInfo:TaboolaBelowArticle1.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle1.js"});const TaboolaBelowArticle2=({cleanAmp:cleanAmp})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-below-article-2",width:100,height:100,heights:["(min-width:1645px) 72%","(min-width:1185px) 78%","(min-width:836px) 86%","(min-width:590px) 98%","(min-width:420px) 115%","(min-width:400px) 348%","373%"],placement:"Below Article Thumbnails - AMP Below",mode:"thumbnails-e2"}):Object(jsx_runtime.jsx)(Taboola.b,{id:"taboola-below-article-2",className:"taboola-below-article"});TaboolaBelowArticle2.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaBelowArticle2.defaultProps={cleanAmp:!1},TaboolaBelowArticle2.__docgenInfo={description:"",methods:[],displayName:"TaboolaBelowArticle2",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaBelowArticle2=Object(RequestProvider.withRequest)(TaboolaBelowArticle2);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaBelowArticle2.js"]={name:"TaboolaBelowArticle2",docgenInfo:TaboolaBelowArticle2.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaBelowArticle2.js"});const TaboolaWrapper=styled_components_browser_esm.default.div`
  @media ${Styles.c.laptop} {
    display: none;
  }
`,TaboolaDiv=Object(styled_components_browser_esm.default)(()=>Object(jsx_runtime.jsx)("div",{id:"taboola-carousel-thumbnails"}))``,TaboolaInline=({cleanAmp:cleanAmp})=>Object(jsx_runtime.jsx)(TaboolaWrapper,{children:cleanAmp?Object(jsx_runtime.jsx)(Taboola.c,{id:"taboola-carousel-thumbnails",width:300,height:300,media:""+Styles.c.maxLaptop,mode:"alternating-thumbnails-d1",placement:"Carousel Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaDiv,{id:"taboola-carousel-thumbnails"})});TaboolaInline.propTypes={cleanAmp:prop_types_default.a.bool},TaboolaInline.defaultProps={cleanAmp:!1},TaboolaInline.__docgenInfo={description:"",methods:[],displayName:"TaboolaInline",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};var Ads_TaboolaInline=Object(RequestProvider.withRequest)(TaboolaInline);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Ads/TaboolaInline.js"]={name:"TaboolaInline",docgenInfo:TaboolaInline.__docgenInfo,path:"app/component/library/Article/Ads/TaboolaInline.js"});var classes=__webpack_require__(108),Image=__webpack_require__(73),Image_default=__webpack_require__.n(Image),helper=__webpack_require__(69);const ImageWrapper=styled_components_browser_esm.default.figure`
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
  color: ${props=>props.theme.color.fontCapsule};
  font-size: ${props=>props.theme.fontSize.list};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding-top: 8px;
  line-height: 21px;
  @media ${Styles.c.laptop} {
    font-size: 14px;
    text-transform: uppercase;
  }
  header & {
    padding: 8px 0 0 12px;
    color: ${props=>props.theme.color.fontMedium};
    display: block;
    text-transform: capitalize;
    @media ${Styles.c.laptop} {
      position: absolute;
      padding: 8px;
      bottom: 0;
      color: ${props=>props.theme.color.contrastLight};
    }
  }
`,CaptionText=styled_components_browser_esm.default.span``,Copyright=styled_components_browser_esm.default.span``,CaptionContrast=Object(styled_components_browser_esm.default)(Caption)`
  color: ${props=>props.theme.color.contrastLight};
`,ArticleImage=({data:data,srcSet:srcSet,theme:theme,children:children,isHero:isHero})=>{if(!data||!data.url)return null;const{align:align,url:url,caption:caption,copyright:copyright,width:width,height:height}=data,CaptionDiv=Object(helper.a)(theme,CaptionContrast,Caption);let StyledWrapper=ImageWrapper;return"left"===align&&(StyledWrapper=ImageWrapperLeft),"right"===align&&(StyledWrapper=ImageWrapperRight),Object(jsx_runtime.jsxs)(StyledWrapper,{children:[Object(jsx_runtime.jsx)(Image_default.a,{src:url.startsWith("data:")?url:url+"?w=968&h=645",alt:caption,height:height||645,width:width||968,srcset:url.startsWith("data:")?null:srcSet.map(size=>url+`?w=${size} ${size}w`).join(", "),layout:"responsive"}),children&&children,(caption||copyright)&&Object(jsx_runtime.jsxs)(CaptionDiv,{children:[!isHero&&"(",caption&&Object(jsx_runtime.jsxs)(CaptionText,{children:[caption," /"]}),copyright&&Object(jsx_runtime.jsxs)(Copyright,{className:"copyright",children:[" ",copyright]}),!isHero&&")"]})]})};ArticleImage.propTypes={data:prop_types_default.a.object.isRequired,srcSet:prop_types_default.a.array.isRequired,children:prop_types_default.a.any,isHero:prop_types_default.a.bool,theme:prop_types_default.a.string},ArticleImage.defaultProps={theme:"default",children:null},ArticleImage.__docgenInfo={description:"",methods:[],displayName:"ArticleImage",props:{theme:{defaultValue:{value:"'default'",computed:!1},type:{name:"string"},required:!1,description:""},children:{defaultValue:{value:"null",computed:!1},type:{name:"any"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""},srcSet:{type:{name:"array"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""}}};var Embeds_Image=ArticleImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Image.js"]={name:"ArticleImage",docgenInfo:ArticleImage.__docgenInfo,path:"app/component/library/Article/Embeds/Image.js"});var striptags=__webpack_require__(903),striptags_default=__webpack_require__.n(striptags),Brightcove=__webpack_require__(904),Brightcove_default=__webpack_require__.n(Brightcove);const Brightcove_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,BrightcoveEmbed=props=>{const{data:data,theme:theme}=props;return Object(jsx_runtime.jsx)(Brightcove_Wrapper,{children:Object(jsx_runtime.jsx)(Brightcove_default.a,{data:data,"data-param-brand-colour":theme.color.primary})})};BrightcoveEmbed.propTypes={data:prop_types_default.a.any.isRequired,theme:prop_types_default.a.object.isRequired},BrightcoveEmbed.__docgenInfo={description:"",methods:[],displayName:"BrightcoveEmbed",props:{data:{type:{name:"any"},required:!0,description:""},theme:{type:{name:"object"},required:!0,description:""}}};var Embeds_Brightcove=Object(styled_components_browser_esm.withTheme)(BrightcoveEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Brightcove.js"]={name:"BrightcoveEmbed",docgenInfo:BrightcoveEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Brightcove.js"});var Dugout=__webpack_require__(905),Dugout_default=__webpack_require__.n(Dugout);const VideoCaption_Caption=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,children:children}))`
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
`,DugoutPlayerEmbed=({data:data})=>Object(jsx_runtime.jsxs)(DugoutPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Dugout_default.a,{data:data}),data.localCaption&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.localCaption})]});DugoutPlayerEmbed.propTypes={data:prop_types_default.a.any.isRequired},DugoutPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"DugoutPlayerEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var DugoutPlayer=DugoutPlayerEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/DugoutPlayer.js"]={name:"DugoutPlayerEmbed",docgenInfo:DugoutPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/DugoutPlayer.js"});var classnames=__webpack_require__(40),classnames_default=__webpack_require__.n(classnames),uniqueId=__webpack_require__(906),uniqueId_default=__webpack_require__.n(uniqueId),withScript=__webpack_require__(165);var icons_Gallery=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#EC1A2E"><path d="M9 9c0-.552.448-1 1.001-1 .553 0 .999.448.999 1s-.446 1-.999 1C9.448 10 9 9.552 9 9zm6.2 0l-1.7 2.6-1.3-1.6L9 14h10l-3.8-5zM24 4v14H4v-3H0V0h21v4h3zM4 13V4h15V2H2v11h2zm18-7H6v10h16V6z" fill-rule="nonzero"/></svg>\n'}}))`
  display: flex;
  align-items: center;
  width: 1em;
`,Carousel=__webpack_require__(162),Carousel_default=__webpack_require__.n(Carousel),Lightbox=__webpack_require__(907),Lightbox_default=__webpack_require__.n(Lightbox),State=__webpack_require__(340),closeIcon=__webpack_require__(259);var icons_Close=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:closeIcon.a}}))`
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
`,GalleryView=({res:res,res:{locals:{cleanAmp:cleanAmp}},...props})=>cleanAmp?Object(jsx_runtime.jsx)(GalleryWithScript,{res:res,...props}):Object(jsx_runtime.jsx)(Gallery_Gallery,{res:res,...props});GalleryView.propTypes={...Gallery_Gallery.propTypes,cleanAmp:prop_types_default.a.bool},GalleryView.defaultTypes={cleanAmp:!1};var Embeds_Gallery=Object(RequestProvider.withRequest)(GalleryView),Instagram=__webpack_require__(909),Instagram_default=__webpack_require__.n(Instagram);const Instagram_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;
`;function InstagramEmbed(props){return Object(jsx_runtime.jsx)(Instagram_Wrapper,{children:Object(jsx_runtime.jsx)(Instagram_default.a,{...props})})}InstagramEmbed.propTypes={data:prop_types_default.a.any.isRequired},InstagramEmbed.__docgenInfo={description:"",methods:[],displayName:"InstagramEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Instagram=InstagramEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Instagram.js"]={name:"InstagramEmbed",docgenInfo:InstagramEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Instagram.js"});var JWPlayer=__webpack_require__(910),JWPlayer_default=__webpack_require__.n(JWPlayer);const VideoMeta=playerData=>{var _playerData$data,_playerData$data$extr;const widestMp4=(data=>{var _data$data,_data$data$extra;const sources=null==data||null===(_data$data=data.data)||void 0===_data$data||null===(_data$data$extra=_data$data.extra)||void 0===_data$data$extra?void 0:_data$data$extra.sources;let widestMp4,w=0;return sources&&sources.forEach(source=>{source.width>w&&"video/mp4"===source.type&&(w=source.width,widestMp4=source)}),widestMp4})(playerData),duration=null==playerData||null===(_playerData$data=playerData.data)||void 0===_playerData$data||null===(_playerData$data$extr=_playerData$data.extra)||void 0===_playerData$data$extr?void 0:_playerData$data$extr.duration;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[duration&&Object(jsx_runtime.jsx)("meta",{property:"og:video:duration",content:duration}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video",content:widestMp4.file}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:width",content:widestMp4.width}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:height",content:widestMp4.height}),widestMp4&&Object(jsx_runtime.jsx)("meta",{property:"og:video:type",content:"video/mp4"})]})};VideoMeta.propTypes={data:prop_types_default.a.object.isRequired};var Head_VideoMeta=VideoMeta;const JWPlayer_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,getPlayerIdAndType=(playerIds,props)=>{const{configuration:{jwplayerPlayerTypes:jwplayerPlayerTypes},isHero:isHero=!1,isCommercial:isCommercial=!1,isSensitive:isSensitive=!1}=props;return isCommercial?{playerId:playerIds.commercialPlayer,playerType:jwplayerPlayerTypes.commercialPlayerType}:isSensitive?{playerId:playerIds.sensitivePlayer,playerType:jwplayerPlayerTypes.sensitivePlayerType}:isHero?{playerId:playerIds.defaultPlayer,playerType:jwplayerPlayerTypes.defaultPlayerType}:{playerId:playerIds.inlinePlayer,playerType:jwplayerPlayerTypes.inlinePlayerType}},JWPlayerEmbed=props=>{const{data:data,isHero:isHero=!1}=props,id=(({id:id,mediaid:mediaid})=>id||mediaid)(data),{playerId:playerId,playerType:playerType}=(props=>{const{configuration:{jwplayerPlayerIds:jwplayerPlayerIds},res:{locals:{cleanAmp:cleanAmp}}}=props;return getPlayerIdAndType(cleanAmp?jwplayerPlayerIds.amp:jwplayerPlayerIds.default,props)})(props),customParams=((props,videoId,playerType)=>{const{jsGlobals:{gs_channels:gs_channels,topictags:topictags,pageId:pageId}}=props;return`videoID%3D${videoId}%26articleId%3D${pageId&&Number.isNaN(pageId)?pageId.replace(/\D/g,""):pageId}%26gs_channels%3D${gs_channels&&gs_channels.join()}%26playertype%3D${playerType}%26topictags%3D${topictags&&topictags.join()}`})(props,id,playerType),adUnit=(props=>{const{jsGlobals:{videoAdUnitPath:videoAdUnitPath}}=props;return videoAdUnitPath})(props);return Object(jsx_runtime.jsxs)(JWPlayer_Wrapper,{children:[Object(jsx_runtime.jsx)(Head_VideoMeta,{data:data}),Object(jsx_runtime.jsx)(JWPlayer_default.a,{data:{id:id,...data},playerId:playerId,playerType:playerType,useAmpIframe:!0,placeholder:!0,ampIframeSrc:"/jwplayer-amp-video-iframe.html",useIframe:!isHero,runJWPlayerSetup:!1,"data-param-customparams":customParams,"data-param-adunit":adUnit}),data.title&&Object(jsx_runtime.jsx)(VideoCaption,{children:data.title})]})};JWPlayerEmbed.propTypes={data:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired,isHero:prop_types_default.a.bool,isCommercial:prop_types_default.a.bool,isSensitive:prop_types_default.a.bool,cleanAmp:prop_types_default.a.bool},JWPlayerEmbed.__docgenInfo={description:"",methods:[],displayName:"JWPlayerEmbed",props:{data:{type:{name:"object"},required:!0,description:""},res:{type:{name:"object"},required:!0,description:""},isHero:{type:{name:"bool"},required:!1,description:""},isCommercial:{type:{name:"bool"},required:!1,description:""},isSensitive:{type:{name:"bool"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var Embeds_JWPlayer=Object(RequestProvider.withRequest)(JWPlayerEmbed);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/JWPlayer.js"]={name:"JWPlayerEmbed",docgenInfo:JWPlayerEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/JWPlayer.js"});var Playbuzz=__webpack_require__(911),Playbuzz_default=__webpack_require__.n(Playbuzz);const Playbuzz_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,PlayBuzzEmbed=({data:data})=>Object(jsx_runtime.jsx)(Playbuzz_Wrapper,{children:Object(jsx_runtime.jsx)(Playbuzz_default.a,{data:data})});PlayBuzzEmbed.propTypes={data:prop_types_default.a.any.isRequired},PlayBuzzEmbed.__docgenInfo={description:"",methods:[],displayName:"PlayBuzzEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Playbuzz=PlayBuzzEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Playbuzz.js"]={name:"PlayBuzzEmbed",docgenInfo:PlayBuzzEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Playbuzz.js"});var Twitter=__webpack_require__(912),Twitter_default=__webpack_require__.n(Twitter);const Twitter_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  width: 100%;
  max-width: 100%;
`;function TwitterEmbed({data:data}){return Object(jsx_runtime.jsx)(Twitter_Wrapper,{children:Object(jsx_runtime.jsx)(Twitter_default.a,{data:data})})}TwitterEmbed.propTypes={data:prop_types_default.a.any.isRequired},TwitterEmbed.__docgenInfo={description:"",methods:[],displayName:"TwitterEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Twitter=TwitterEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Twitter.js"]={name:"TwitterEmbed",docgenInfo:TwitterEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Twitter.js"});var Youtube=__webpack_require__(913),Youtube_default=__webpack_require__.n(Youtube);const Youtube_Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,YoutubeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Youtube_Wrapper,{children:Object(jsx_runtime.jsx)(Youtube_default.a,{data:data})});YoutubeEmbed.propTypes={data:prop_types_default.a.any.isRequired},YoutubeEmbed.__docgenInfo={description:"",methods:[],displayName:"YoutubeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Youtube=YoutubeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Youtube.js"]={name:"YoutubeEmbed",docgenInfo:YoutubeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Youtube.js"});const ParagraphWrapper=styled_components_browser_esm.default.div`
  p {
    margin: 22px 0;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    max-width: ${props=>props.isService?"968px":"100%"};
    @media ${Styles.c.laptop} {
      font-size: 20px;
      line-height: 30px;
    }
  }
  a {
    color: ${props=>props.theme.color.contrastDarker};
    border-bottom: 1px solid ${props=>props.theme.color.contrastDarker};
    &:hover {
      color: ${props=>props.theme.color.hover};
      border-bottom-color: ${props=>props.theme.color.hover};
    }
  }
  &:first-child {
    > p {
      font-weight: 500;
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
  color: ${props=>props.theme.color.contrastDarker};
  line-height: 56px;
  font-family: ${props=>props.theme.fontFamily.standardDisplay};
  font-weight: ${props=>props.theme.fontWeight.bold};
  text-transform: uppercase;
  display: block;
  align-items: center;
  float: left;
  height: 52px;
  margin-right: 8px;
  @media ${Styles.c.laptop} {
    font-size: 70px;
    height: 60px;
    line-height: 65px;
  }
`,BigLetter=({letter:letter})=>Object(jsx_runtime.jsx)(BigLetter_Wrapper,{children:letter});BigLetter.propTypes={letter:prop_types_default.a.string.isRequired},BigLetter.__docgenInfo={description:"",methods:[],displayName:"BigLetter",props:{letter:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/BigLetter.js"]={name:"BigLetter",docgenInfo:BigLetter.__docgenInfo,path:"app/component/library/Article/BigLetter.js"});var FormSubmit=__webpack_require__(83);const CommentActionLightbox_Wrapper=styled_components_browser_esm.default.div`
  border-top: 1px solid ${props=>props.theme.color.bgGrey};
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  overflow-x: hidden;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &.hide,
  & .hide {
    display: none;
  }
`,FormWrapper=styled_components_browser_esm.default.div`
  max-width: 600px;
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
`,CloseBtn=styled_components_browser_esm.default.button`
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
`,CommentActionLightbox_Header=styled_components_browser_esm.default.h4`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 31px;
  line-height: 1.3;
  font-weight: 400;
  margin: 16px 0;
`,Body=styled_components_browser_esm.default.p`
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 16px;
`,ButtonWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`,StyledFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: flex-end;

  button {
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    padding: 14px;
    background: ${props=>props.theme.color.contrastLight};
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
    height: auto;
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: none;
    white-space: nowrap;
  }
`,CancelButton=styled_components_browser_esm.default.button`
  display: inline-block;
  margin: 0 20px 0 0;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  padding: 14px;
  background: ${props=>props.theme.color.contrastLight};
  border: 1px solid ${props=>props.theme.color.formGrey};
  border-radius: 5px;
  height: auto;
  text-decoration: none;
  max-width: 120px;
  width: 50%;
  color: ${props=>props.theme.color.formGrey};
  border-color: ${props=>props.theme.color.formGrey};
`,ResponseMessage=styled_components_browser_esm.default.span``,CommentActionLightbox=({action:action,header:header,body:body="",submitText:submitText=""})=>Object(jsx_runtime.jsx)(CommentActionLightbox_Wrapper,{className:`comment-${action} hide`,children:Object(jsx_runtime.jsxs)(FormWrapper,{children:[Object(jsx_runtime.jsx)(CloseBtn,{className:"close",children:"✕"}),Object(jsx_runtime.jsx)(CommentActionLightbox_Header,{children:header}),Object(jsx_runtime.jsxs)("form",{className:action,method:"post","action-xhr":`/internal-api/comments-${action}/submit`,children:[Object(jsx_runtime.jsx)(Body,{className:"body-text",children:body}),Object(jsx_runtime.jsx)("input",{name:"streamID",type:"hidden",defaultValue:""}),Object(jsx_runtime.jsx)("input",{name:"commentID",type:"hidden",defaultValue:""}),Object(jsx_runtime.jsxs)(ButtonWrapper,{className:"form-buttons",children:[Object(jsx_runtime.jsx)(CancelButton,{className:"cancel-btn",children:"Cancel"}),Object(jsx_runtime.jsx)(StyledFormSubmit,{children:submitText})]}),Object(jsx_runtime.jsx)(ResponseMessage,{className:"response-message"})]})]})});CommentActionLightbox.propTypes={action:prop_types_default.a.string.isRequired,header:prop_types_default.a.string.isRequired,body:prop_types_default.a.string,submitText:prop_types_default.a.string},CommentActionLightbox.__docgenInfo={description:"",methods:[],displayName:"CommentActionLightbox",props:{body:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},submitText:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},action:{type:{name:"string"},required:!0,description:""},header:{type:{name:"string"},required:!0,description:""}}};var Comments_CommentActionLightbox=CommentActionLightbox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentActionLightbox.js"]={name:"CommentActionLightbox",docgenInfo:CommentActionLightbox.__docgenInfo,path:"app/component/library/Article/Comments/CommentActionLightbox.js"});const CommentHeader_Wrapper=styled_components_browser_esm.default.div`
  border-top: 1px solid ${props=>props.theme.color.navGrey};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,H5=styled_components_browser_esm.default.h5`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props=>props.theme.color.contrastDarker};
  margin: 16px 0 0;
  display: flex;
  align-items: center;
  span {
    margin: 0 6px 0 0;
  }
`,GuidelineTerms=styled_components_browser_esm.default.button`
  font-size: 14px;
  font-weight: 400;
  color: ${props=>props.theme.color.fontMedium};
  text-decoration: underline;
  outline: none;
`,GuidelineContent=styled_components_browser_esm.default.div`
  text-align: left;
  font-size: 15px;
  margin: 0;
  line-height: 22px;
  font-weight: 400;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  color: ${props=>props.theme.color.fontMedium};

  h6 {
    font-size: 17px;
    line-height: 22px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.14px;
    margin: 16px auto;
    max-width: 227px;
  }
  h5:after {
    content: '';
    display: block;
    width: 113%;
    height: 4px;
    margin: 2px 0 8px -7%;
    mix-blend-mode: multiply;
    background: ${props=>props.theme.color.secondary};
  }

  ul {
    list-style-type: disc;
    padding: 0 0 0 20px;
    margin: 0;
  }
  li {
    margin: 0 0 16px;
    font-size: 15px;
    line-height: 1.3;
  }
  p {
    font-size: 14px;
    line-height: 1.3;
    margin: 16px 0;
  }
  a {
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: underline;
  }

  .guideline-open & {
    opacity: 1;
    max-height: 260px;
  }
`,CommentHeader=({className:className})=>Object(jsx_runtime.jsxs)(CommentHeader_Wrapper,{className:className,children:[Object(jsx_runtime.jsxs)(H5,{children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n  <svg width="26px" height="25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 25">\n    <path fill="#1E1E1C" fill-rule="evenodd" d="M23.1 6H20v9H6.3v3H19l4.2 4V6zM18 13V2H2v15l4.2-4H18z" clip-rule="evenodd"/>\n  </svg>'}}),"Discussion"]}),Object(jsx_runtime.jsx)(GuidelineTerms,{className:"guideline-terms",children:"Guidelines"}),Object(jsx_runtime.jsxs)(GuidelineContent,{className:"guideline-content",children:[Object(jsx_runtime.jsx)("h6",{children:"COMMUNITY GUIDELINES"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:"You may not agree with our views, or other users’, but please respond to them respectfully"}),Object(jsx_runtime.jsx)("li",{children:"Swearing, personal abuse, racism, sexism, homophobia and other discriminatory or inciteful language is not acceptable"}),Object(jsx_runtime.jsx)("li",{children:"Do not impersonate other users or reveal private information about third parties"}),Object(jsx_runtime.jsx)("li",{children:"We reserve the right to delete inappropriate posts and ban offending users without notification"})]}),Object(jsx_runtime.jsxs)("p",{className:"guideline-terms",children:["You can find our Community Guidelines in full"," ",Object(jsx_runtime.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.standard.co.uk/service/community-guidelines-9729850.html",children:"here."})]})]})]});CommentHeader.propTypes={className:prop_types_default.a.string},CommentHeader.__docgenInfo={description:"",methods:[],displayName:"CommentHeader",props:{className:{type:{name:"string"},required:!1,description:""}}};var Comments_CommentHeader=CommentHeader;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentHeader.js"]={name:"CommentHeader",docgenInfo:CommentHeader.__docgenInfo,path:"app/component/library/Article/Comments/CommentHeader.js"});const CommentCard_Wrapper=styled_components_browser_esm.default.div`
  border-top: 1px solid ${props=>props.theme.color.bgGrey};
  font-size: 16px;
  line-height: 1.3;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  color: ${props=>props.theme.color.fontMedium};
`,CommentMeta=styled_components_browser_esm.default.div`
  display: flex;
  align-items: center;
  margin: 0 0 6px;
  padding: 16px 0 0;
  font-size: 16px;
  .comment-username {
    margin: 0;
    color: ${props=>props.theme.color.secondary};
  }
  .comment-date {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    color: ${props=>props.theme.color.formGrey};
    margin: 0 0 0 8px;
  }
`,CommentBody=styled_components_browser_esm.default.p`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.8px;
  margin: 0 0 10px;
  white-space: pre-wrap;
`,CommentActions=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  &.hide,
  & .hide {
    display: none;
  }
`,ActionButtons=styled_components_browser_esm.default.div`
  display: flex;
  flex-wrap: nowrap;
`,CommentActionButton=styled_components_browser_esm.default.button`
  color: ${props=>props.theme.color.fontMedium};
  font-size: 14px;
  margin: 0 0 0 12px;
  outline: none;
  text-decoration: underline;
  display: flex;
  align-items: center;

  svg {
    margin: 0 7px 0 0;
    fill: ${props=>props.theme.color.secondary};
  }

  &:hover {
    text-decoration: underline;
  }
  &.hide {
    display: none;
  }
`,CommentIcons=styled_components_browser_esm.default.div`
  flex-grow: 0;
  justify-content: flex-end;
  display: flex;
`,CommentVote=styled_components_browser_esm.default.button`
  display: flex;
  align-items: center;
  color: ${props=>props.theme.color.formGrey};
  outline: none;
  font-size: 16px;

  &:first-of-type {
    padding: 0 6px 0 0;
  }

  svg {
    fill: ${props=>props.theme.color.formGrey};
  }
  span {
    padding: 0 3px;
  }

  &.comment-vote-flag.flagged {
    svg {
      fill: ${props=>props.theme.color.primary};
    }
  }
`,CommentReplyForm=styled_components_browser_esm.default.div``,CommentReplies=styled_components_browser_esm.default.div`
  margin: 0 0 0 10%;
`,CommentCard=({className:className})=>Object(jsx_runtime.jsxs)(CommentCard_Wrapper,{className:className,children:[Object(jsx_runtime.jsxs)(CommentMeta,{children:[Object(jsx_runtime.jsx)("span",{className:"comment-username"}),Object(jsx_runtime.jsx)("span",{className:"comment-date"})]}),Object(jsx_runtime.jsx)(CommentBody,{className:"comment-body"}),Object(jsx_runtime.jsxs)(CommentActions,{className:"comment-actions",children:[Object(jsx_runtime.jsxs)(CommentIcons,{children:[Object(jsx_runtime.jsxs)(CommentVote,{"data-vote":"pos","data-default-vote":"pos",className:"comment-vote",children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n  <svg width="16px" height="15px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">\n    <path fill-rule="evenodd" d="M10.6 1.5L5.3 6.9v9.6h9.2l2.7-6.5V6.9H11l.9-4-1.3-1.3zm-9.8 6h3v9h-3v-9z" clip-rule="evenodd"/>\n  </svg>\n'}}),Object(jsx_runtime.jsx)("span",{children:"0"})]}),Object(jsx_runtime.jsxs)(CommentVote,{"data-vote":"neg","data-default-vote":"neg",className:"comment-vote",children:[Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n  <svg width="16px" height="15px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">\n    <path fill-rule="evenodd" d="M.8 8v3.3H7l-.9 4 1.3 1.2 5.3-5.4V1.5H3.6L.7 8zm13.4-6.5h3v9h-3v-9z" clip-rule="evenodd"/>\n  </svg>\n'}}),Object(jsx_runtime.jsx)("span",{children:"0"})]})]}),Object(jsx_runtime.jsxs)(ActionButtons,{children:[Object(jsx_runtime.jsx)(CommentActionButton,{className:"comment-reply",children:"Reply"}),Object(jsx_runtime.jsx)(CommentActionButton,{className:"comment-vote-flag",children:"Flag"}),Object(jsx_runtime.jsx)(CommentActionButton,{className:"comment-delete",children:"Delete"})]})]}),Object(jsx_runtime.jsx)(CommentReplyForm,{className:"comment-reply-form"}),Object(jsx_runtime.jsx)(CommentReplies,{className:"comment-replies"})]});CommentCard.propTypes={className:prop_types_default.a.string},CommentCard.__docgenInfo={description:"",methods:[],displayName:"CommentCard",props:{className:{type:{name:"string"},required:!1,description:""}}};var Comments_CommentCard=CommentCard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentCard.js"]={name:"CommentCard",docgenInfo:CommentCard.__docgenInfo,path:"app/component/library/Article/Comments/CommentCard.js"});const CommentOrder_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
`,CommentOrder_H5=styled_components_browser_esm.default.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props=>props.theme.color.fontMedium};
  margin: 3px 0;
`,SortButton=styled_components_browser_esm.default.button`
  font-size: 14px;
  font-weight: 400;
  color: ${props=>props.theme.color.fontMedium};
  text-decoration: underline;
  outline: none;
`,List=styled_components_browser_esm.default.ul`
  position: absolute;
  display: none;
  margin: 0;
  list-style: none;
  justify-content: space-evenly;
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};

  background: ${props=>props.theme.color.contrastLight};
  padding: 12px;
  border: 1px solid ${props=>props.theme.color.secondary};
  border-radius: 2px;
  right: 0;
  top: 25px;

  li {
    font-size: 14px;
    line-height: 1.3;
    outline: none;
    flex-grow: 1;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    color: ${props=>props.theme.color.fontMedium};

    &.active {
      color: ${props=>props.theme.color.secondary};
      font-weight: 500;
    }
  }

  &.open {
    display: block;
  }
`,CommentOrder=({className:className})=>Object(jsx_runtime.jsxs)(CommentOrder_Wrapper,{className:className,children:[Object(jsx_runtime.jsxs)(CommentOrder_H5,{className:"comment-count",children:[Object(jsx_runtime.jsx)("span",{className:"count",children:"0"})," ",Object(jsx_runtime.jsx)("span",{className:"plural",children:"comments"})]}),Object(jsx_runtime.jsx)(SortButton,{className:"comment-sort-button",children:"Sort by"}),Object(jsx_runtime.jsxs)(List,{className:"comment-order",children:[Object(jsx_runtime.jsx)("li",{"data-order":"dateDesc",className:"active",children:"Newest first"}),Object(jsx_runtime.jsx)("li",{"data-order":"dateAsc",children:"Oldest first"}),Object(jsx_runtime.jsx)("li",{"data-order":"votesDesc",children:"Most liked"})]})]});CommentOrder.propTypes={className:prop_types_default.a.string},CommentOrder.__docgenInfo={description:"",methods:[],displayName:"CommentOrder",props:{className:{type:{name:"string"},required:!1,description:""}}};var Comments_CommentOrder=CommentOrder;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentOrder.js"]={name:"CommentOrder",docgenInfo:CommentOrder.__docgenInfo,path:"app/component/library/Article/Comments/CommentOrder.js"});const CommentSetName_Wrapper=styled_components_browser_esm.default.div`
  form {
    padding: 0 0 8px;
    p {
      margin: 0 0 8px;
      font-size: 18px;
      font-weight: 500;
    }
    .error-text,
    .form-success {
      color: ${props=>props.theme.color.primary};
    }
  }
`,FieldWrapper=styled_components_browser_esm.default.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 8px;

  input {
    flex-grow: 1;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    padding: 8px 16px;
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
    outline: none;
  }

  @media ${Styles.c.mobileL} {
    margin: 0 12px 0 0;
  }
`,CommentingFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  margin: 12px 0 0 0;
  width: 100%;

  button {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    padding: 14px 28px;
    background: ${props=>props.theme.color.contrastLight};
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
    height: auto;
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: none;

    &.btn-loader {
      border-top: 2px solid ${props=>props.theme.color.primary};
    }
    &:disabled {
      opacity: 0.5;
    }
  }

  @media ${Styles.c.mobileL} {
    width: auto;
    margin: 0 0 0 12px;
  }
`,CommentSetName=({className:className})=>Object(jsx_runtime.jsx)(CommentSetName_Wrapper,{className:className,children:Object(jsx_runtime.jsx)("div",{"amp-access":"NOT nickname","amp-access-hide":"true",children:Object(jsx_runtime.jsxs)("form",{method:"post",className:"create-username submit-once","action-xhr":"/internal-api/comments-nickname/submit",children:[Object(jsx_runtime.jsx)("p",{children:"Create a commenting name to join in"}),Object(jsx_runtime.jsxs)(FieldWrapper,{children:[Object(jsx_runtime.jsx)("input",{name:"nickname",required:!0,placeholder:"Type a name...",type:"text",pattern:"^[A-Za-z0-9]{0,40}$"}),Object(jsx_runtime.jsx)(CommentingFormSubmit,{})]}),Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsx)("span",{className:"error-text form-response"})})]})})});CommentSetName.propTypes={className:prop_types_default.a.string},CommentSetName.__docgenInfo={description:"",methods:[],displayName:"CommentSetName",props:{className:{type:{name:"string"},required:!1,description:""}}};var Comments_CommentSetName=CommentSetName;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentSetName.js"]={name:"CommentSetName",docgenInfo:CommentSetName.__docgenInfo,path:"app/component/library/Article/Comments/CommentSetName.js"});const CommentReplyForm_Wrapper=styled_components_browser_esm.default.div`
  margin: 10px 0;
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  textarea {
    width: 100%;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    box-sizing: border-box;
    display: flex;
    resize: none;
    border-radius: 2px;
    outline: none;
    color: ${props=>props.theme.color.fontMedium};
    flex-grow: 1;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    padding: 18px 16px 0;
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
  }
`,ReplyFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: flex-end;
  width: calc(50% - 6px);

  button {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    padding: 14px 39px;
    background: ${props=>props.theme.color.contrastLight};
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
    height: auto;
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: none;
  }

  @media ${Styles.c.mobileL} {
    width: auto;
  }
`,CommentReplyForm_CancelButton=styled_components_browser_esm.default.button`
  display: inline-block;
  margin: 0 12px 0 0;
  color: ${props=>props.theme.color.fontMedium};
  width: calc(50% - 6px);
  background-color: ${props=>props.theme.color.bgGrey};
  border-color: ${props=>props.theme.color.bgGrey};
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  padding: 14px;
  border: 1px solid ${props=>props.theme.color.bgGrey};
  border-radius: 5px;

  @media ${Styles.c.mobileL} {
    width: 120px;
  }
`,CommentReplyForm_ButtonWrapper=styled_components_browser_esm.default.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 10px 0 0;
  width: 100%;

  @media ${Styles.c.mobileL} {
    width: auto;
    margin: 10px 0;
  }
`,ErrorMessage=styled_components_browser_esm.default.span`
  align-self: center;
  justify-self: flex-start;
  flex-grow: 1;
  width: 100%;
`,CommentReplyForm_CommentReplyForm=({className:className,article:article})=>Object(jsx_runtime.jsxs)(CommentReplyForm_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)("div",{"amp-access":"NOT nickname","amp-access-hide":"true",children:Object(jsx_runtime.jsx)(Comments_CommentSetName,{})}),Object(jsx_runtime.jsx)("div",{"amp-access":"nickname","amp-access-hide":"true",children:Object(jsx_runtime.jsxs)("form",{className:"reply submit-once",method:"post","action-xhr":"/internal-api/comments-post/submit",children:[Object(jsx_runtime.jsx)("textarea",{name:"comment",required:!0,placeholder:"Type your comment..."}),Object(jsx_runtime.jsx)("input",{name:"streamID",type:"hidden",value:article.remoteId||"b"+article.id}),Object(jsx_runtime.jsx)("input",{name:"parentID",type:"hidden",value:""}),Object(jsx_runtime.jsx)("input",{name:"streamTitle",type:"hidden",value:article.title}),Object(jsx_runtime.jsx)("input",{name:"streamURL",type:"hidden",value:article.path}),Object(jsx_runtime.jsxs)(CommentReplyForm_ButtonWrapper,{children:[Object(jsx_runtime.jsx)(ErrorMessage,{className:"error-message"}),Object(jsx_runtime.jsx)(CommentReplyForm_CancelButton,{className:"cancel-btn",children:"Cancel"}),Object(jsx_runtime.jsx)(ReplyFormSubmit,{children:"Post"})]})]})})]});CommentReplyForm_CommentReplyForm.propTypes={className:prop_types_default.a.string,article:prop_types_default.a.object.isRequired},CommentReplyForm_CommentReplyForm.__docgenInfo={description:"",methods:[],displayName:"CommentReplyForm",props:{className:{type:{name:"string"},required:!1,description:""},article:{type:{name:"object"},required:!0,description:""}}};var Comments_CommentReplyForm=CommentReplyForm_CommentReplyForm;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentReplyForm.js"]={name:"CommentReplyForm",docgenInfo:CommentReplyForm_CommentReplyForm.__docgenInfo,path:"app/component/library/Article/Comments/CommentReplyForm.js"});const CommentList_Wrapper=styled_components_browser_esm.default.div`
  font-size: 16px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  position: relative;
`,HiddenTemplates=styled_components_browser_esm.default.div`
  display: none;
`,EmptyMessage=styled_components_browser_esm.default.p`
  padding: 40px 20px;
  margin: 0;
  text-align: center;
  font-size: 16px;
  &.hide {
    display: none;
  }
`,ListWrapper=styled_components_browser_esm.default.div`
  max-height: 300px;
  overflow: hidden;
  .expanded & {
    max-height: none;
  }
`,ShowAllButton=styled_components_browser_esm.default.button`
  display: none;
  margin: 0 auto;
  color: ${props=>props.theme.color.contrastLight};
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  width: 145px;
  height: 40px;
  background-color: ${props=>props.theme.color.secondary};
  border-color: ${props=>props.theme.color.secondary};

  &:disabled {
    background-color: ${props=>props.theme.color.formGrey};
  }
  &.active {
    display: block;
  }
`,ReadMoreButton=Object(styled_components_browser_esm.default)(ShowAllButton)`
  display: block;
  margin: 20px auto 16px;

  &:before {
    position: absolute;
    bottom: 55px;
    left: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 50px 0;
    background-image: ${props=>`linear-gradient(transparent, ${props.theme.color.contrastLight})`};
    content: ' ';
  }

  .expanded &,
  &.hidden {
    display: none;
  }
`,CommentList=({className:className,article:article})=>Object(jsx_runtime.jsxs)(CommentList_Wrapper,{className:classnames_default()("comment-list",className),"data-stream-id":article.remoteId||"b"+article.id,"data-order":"dateDesc",children:[Object(jsx_runtime.jsxs)(HiddenTemplates,{children:[Object(jsx_runtime.jsx)(Comments_CommentCard,{className:"comment-template"}),Object(jsx_runtime.jsx)(Comments_CommentReplyForm,{className:"comment-reply-template",article:article})]}),Object(jsx_runtime.jsx)(Comments_CommentOrder,{}),Object(jsx_runtime.jsx)(EmptyMessage,{className:"empty-message",children:"There are no comments yet"}),Object(jsx_runtime.jsx)(ListWrapper,{className:"comment-list-wrapper"}),Object(jsx_runtime.jsx)(ShowAllButton,{className:"show-all-btn",children:"Show all comments"}),Object(jsx_runtime.jsx)(ReadMoreButton,{className:"read-more-btn hidden",children:"Read more"})]});CommentList.propTypes={className:prop_types_default.a.string,article:prop_types_default.a.object.isRequired},CommentList.__docgenInfo={description:"",methods:[],displayName:"CommentList",props:{className:{type:{name:"string"},required:!1,description:""},article:{type:{name:"object"},required:!0,description:""}}};var Comments_CommentList=Object(RequestProvider.withRequest)(CommentList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentList.js"]={name:"CommentList",docgenInfo:CommentList.__docgenInfo,path:"app/component/library/Article/Comments/CommentList.js"});const CommentForm_Wrapper=styled_components_browser_esm.default.div`
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  textarea {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    box-sizing: border-box;
    display: flex;
    resize: none;
    border-radius: 2px;
    outline: none;
    color: ${props=>props.theme.color.fontMedium};
    flex-grow: 1;
    margin: 0;
    font-size: 16px;
    line-height: 19px;
    padding: 18px 16px 0;
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;

    &:disabled {
      background-color: ${props=>props.theme.color.navGrey};
    }
  }

  @media ${Styles.c.mobileL} {
    margin: 0 12px 0 0;
  }
`,CommentForm_CommentingFormSubmit=Object(styled_components_browser_esm.default)(FormSubmit.a)`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  justify-content: flex-end;
  width: 100%;

  button {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    padding: 14px 39px;
    background: ${props=>props.theme.color.contrastLight};
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 5px;
    height: auto;
    color: ${props=>props.theme.color.fontMedium};
    text-decoration: none;
  }

  @media ${Styles.c.mobileL} {
    width: auto;
    margin: 0 0 0 12px;
  }
`,CommentForm_ErrorMessage=styled_components_browser_esm.default.span`
  align-self: center;
  justify-self: flex-start;
  flex-grow: 1;
  width: 100%;
  margin: 12px 0;
`,CommentForm=({className:className,article:article})=>Object(jsx_runtime.jsx)(CommentForm_Wrapper,{className:className,children:Object(jsx_runtime.jsx)("div",{"amp-access":"nickname","amp-access-hide":"true",children:Object(jsx_runtime.jsxs)("form",{className:"post-new-comment",method:"post","action-xhr":"/internal-api/comments-post/submit",target:"_blank",noValidate:!0,children:[Object(jsx_runtime.jsx)("textarea",{name:"comment",placeholder:"Type your comment...",required:!0}),Object(jsx_runtime.jsx)("input",{name:"streamID",type:"hidden",value:article.remoteId||"b"+article.id}),Object(jsx_runtime.jsx)("input",{name:"streamTitle",type:"hidden",value:article.title}),Object(jsx_runtime.jsx)("input",{name:"streamURL",type:"hidden",value:article.path}),Object(jsx_runtime.jsx)(CommentForm_CommentingFormSubmit,{children:"Post"}),Object(jsx_runtime.jsx)(CommentForm_ErrorMessage,{className:"error-message"})]})})});CommentForm.propTypes={className:prop_types_default.a.string,article:prop_types_default.a.object.isRequired},CommentForm.__docgenInfo={description:"",methods:[],displayName:"CommentForm",props:{className:{type:{name:"string"},required:!1,description:""},article:{type:{name:"object"},required:!0,description:""}}};var Comments_CommentForm=Object(RequestProvider.withRequest)(CommentForm);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentForm.js"]={name:"CommentForm",docgenInfo:CommentForm.__docgenInfo,path:"app/component/library/Article/Comments/CommentForm.js"});const CommentLoggedOut_Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,LoggedOutHeader=styled_components_browser_esm.default.h5`
  font-size: 22px;
  text-align: center;
  line-height: 35px;
  margin: 0 auto;
  font-weight: 500;
`,P=styled_components_browser_esm.default.p`
  color: ${props=>props.theme.color.formGrey};
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`,RegisterButton=styled_components_browser_esm.default.a`
  font-size: 18px;
  line-height: 22px;
  border-radius: 2px;
  border: 1px solid ${props=>props.theme.color.navGrey};
  width: 100%;
  font-weight: 500;
  padding: 10px 15px;
  margin: 0 auto;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: ${props=>props.theme.color.contrastDarker};
  box-sizing: border-box;
`,LoginButton=styled_components_browser_esm.default.button`
  padding: 0;
  margin: 0;
  border: none;
  color: ${props=>props.theme.color.contrastDarker};
  font-size: 14px;
  font-weight: 500;
`,CommentLoggedOut=({className:className})=>Object(jsx_runtime.jsxs)(CommentLoggedOut_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(LoggedOutHeader,{children:"Be part of the conversation"}),Object(jsx_runtime.jsx)(RegisterButton,{href:"/register",children:"Register now"}),Object(jsx_runtime.jsxs)(P,{children:["Already registered?"," ",Object(jsx_runtime.jsx)(LoginButton,{on:"tap:login-modal.open",children:"Log in"})]})]});CommentLoggedOut.propTypes={className:prop_types_default.a.string},CommentLoggedOut.__docgenInfo={description:"",methods:[],displayName:"CommentLoggedOut",props:{className:{type:{name:"string"},required:!1,description:""}}};var Comments_CommentLoggedOut=CommentLoggedOut;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentLoggedOut.js"]={name:"CommentLoggedOut",docgenInfo:CommentLoggedOut.__docgenInfo,path:"app/component/library/Article/Comments/CommentLoggedOut.js"});const CommentNewCommentWrapper_Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding: 20px 0 0;
`,CommentFormWrapper=styled_components_browser_esm.default.div`
  position: relative;

  a {
    text-decoration: none;
    color: ${props=>props.theme.color.secondary};

    &:hover {
      opacity: 0.9;
    }
  }
`,CommentPostForm=({className:className})=>Object(jsx_runtime.jsxs)(CommentNewCommentWrapper_Wrapper,{id:"comment-form",className:className,children:[Object(jsx_runtime.jsx)("div",{className:"logged-out","amp-access":"NOT loggedIn",children:Object(jsx_runtime.jsx)(Comments_CommentLoggedOut,{})}),Object(jsx_runtime.jsx)("div",{className:"logged-in","amp-access":"loggedIn","amp-access-hide":"true",children:Object(jsx_runtime.jsxs)(CommentFormWrapper,{children:[Object(jsx_runtime.jsx)(Comments_CommentSetName,{}),Object(jsx_runtime.jsx)(Comments_CommentForm,{})]})})]});CommentPostForm.propTypes={className:prop_types_default.a.string},CommentPostForm.__docgenInfo={description:"",methods:[],displayName:"CommentPostForm",props:{className:{type:{name:"string"},required:!1,description:""}}};var CommentNewCommentWrapper=CommentPostForm;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentNewCommentWrapper.js"]={name:"CommentPostForm",docgenInfo:CommentPostForm.__docgenInfo,path:"app/component/library/Article/Comments/CommentNewCommentWrapper.js"});const CommentContainer_Wrapper=styled_components_browser_esm.default.div`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
`,CommentsContainer=({className:className})=>Object(jsx_runtime.jsxs)(CommentContainer_Wrapper,{id:"comments",className:className,children:[Object(jsx_runtime.jsx)(Comments_CommentActionLightbox,{action:"delete",header:"Delete Comment",body:"Are you sure you want to delete this comment?",submitText:"Delete comment"}),Object(jsx_runtime.jsx)(Comments_CommentActionLightbox,{action:"flag",header:"Report Comment",body:"Are you sure you want to mark this comment as inappropriate?",submitText:"Flag comment"}),Object(jsx_runtime.jsx)(Comments_CommentHeader,{}),Object(jsx_runtime.jsx)(CommentNewCommentWrapper,{}),Object(jsx_runtime.jsx)(Comments_CommentList,{className:"comments-list"})]});CommentsContainer.propTypes={className:prop_types_default.a.string},CommentsContainer.__docgenInfo={description:"",methods:[],displayName:"CommentsContainer",props:{className:{type:{name:"string"},required:!1,description:""}}};var CommentContainer=CommentsContainer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Comments/CommentContainer.js"]={name:"CommentsContainer",docgenInfo:CommentsContainer.__docgenInfo,path:"app/component/library/Article/Comments/CommentContainer.js"});const ArticleLink_Wrapper=styled_components_browser_esm.default.div``,ArticleLink_Title=styled_components_browser_esm.default.h3`
  line-height: 27px;
  font-size: 1.17em;
  margin: 0.8em 0 16px;
`,ArticleLink_Link=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.primary};
`,ArticleLink_Description=styled_components_browser_esm.default.p``,ArticleLink=props=>{const{className:className,data:{url:url,image:image,title:title,description:description}}=props;return Object(jsx_runtime.jsxs)(ArticleLink_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Embeds_Image,{data:image,srcSet:[640]}),Object(jsx_runtime.jsx)(ArticleLink_Title,{children:title&&Object(jsx_runtime.jsx)(ArticleLink_Link,{href:url,children:title})}),description&&Object(jsx_runtime.jsx)(ArticleLink_Description,{dangerouslySetInnerHTML:{__html:description}})]})};ArticleLink.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string},ArticleLink.__docgenInfo={description:"",methods:[],displayName:"ArticleLink",props:{data:{type:{name:"any"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""}}};var Embeds_ArticleLink=ArticleLink;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/ArticleLink.js"]={name:"ArticleLink",docgenInfo:ArticleLink.__docgenInfo,path:"app/component/library/Article/Embeds/ArticleLink.js"});const BlockQuoteText=styled_components_browser_esm.default.figure`
  margin: 0;
  border-top: 1px solid ${props=>props.theme.color.navGrey};
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  blockquote {
    margin: 0;
  }
  p {
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    line-height: 42px;
    margin: 24px 0;
    color: ${props=>props.theme.color.contrastDarker};
    @media ${Styles.c.laptop} {
      font-size: 36px;
      line-height: 54px;
      margin: 30px 0 17px;
    }
    &:after {
      content: '”';
    }
    &:before {
      content: '“';
    }
  }
`,BlockQuote=({data:data})=>{const{markup:markup}=data;return Object(jsx_runtime.jsx)(BlockQuoteText,{dangerouslySetInnerHTML:{__html:markup}})};BlockQuote.propTypes={data:prop_types_default.a.object.isRequired},BlockQuote.__docgenInfo={description:"",methods:[],displayName:"BlockQuote",props:{data:{type:{name:"object"},required:!0,description:""}}};var Embeds_BlockQuote=Object(RequestProvider.withRequest)(BlockQuote);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/BlockQuote.js"]={name:"BlockQuote",docgenInfo:BlockQuote.__docgenInfo,path:"app/component/library/Article/Embeds/BlockQuote.js"});var Facebook=__webpack_require__(914),Facebook_default=__webpack_require__.n(Facebook);const Facebook_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  max-width: 500px;
  margin: 0 auto;

  .article-liveblog {
    max-width: none;
  }
`,FacebookEmbed=({data:data})=>Object(jsx_runtime.jsx)(Facebook_Wrapper,{children:Object(jsx_runtime.jsx)(Facebook_default.a,{data:data})});FacebookEmbed.propTypes={data:prop_types_default.a.any.isRequired},FacebookEmbed.__docgenInfo={description:"",methods:[],displayName:"FacebookEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Facebook=FacebookEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Facebook.js"]={name:"FacebookEmbed",docgenInfo:FacebookEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Facebook.js"});var HTML=__webpack_require__(213),amp_Iframe=__webpack_require__(915),Iframe_default=__webpack_require__.n(amp_Iframe);const IframeEmbed=({data:data})=>Object(jsx_runtime.jsx)(Iframe_default.a,{data:data});IframeEmbed.propTypes={data:prop_types_default.a.any.isRequired},IframeEmbed.__docgenInfo={description:"",methods:[],displayName:"IframeEmbed",props:{data:{type:{name:"any"},required:!0,description:""}}};var Embeds_Iframe=IframeEmbed;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Iframe.js"]={name:"IframeEmbed",docgenInfo:IframeEmbed.__docgenInfo,path:"app/component/library/Article/Embeds/Iframe.js"});const LeftWrapper=styled_components_browser_esm.default.figure`
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
`,CenterWrapper=styled_components_browser_esm.default.figure`
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
`,RightWrapper=styled_components_browser_esm.default.figure`
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
`;function InfoBox(props){const{className:className,data:{align:align,title:title,subHeadline:subHeadline,markup:markup},req:{cookies:cookies}}=props,Wrapper=(align=>{switch(align){case"left":return LeftWrapper;case"right":return RightWrapper;case"none":return CenterWrapper}return CenterWrapper})(align);return Object(jsx_runtime.jsxs)(Wrapper,{className:Object(classes.a)(className,cookies.subscriber?"subscribed":""),children:[Object(jsx_runtime.jsx)(InfoBox_Title,{children:title}),subHeadline&&Object(jsx_runtime.jsx)(Subheader,{children:subHeadline}),Object(jsx_runtime.jsx)(InfoBox_Content,{dangerouslySetInnerHTML:{__html:markup}})]})}InfoBox.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,req:prop_types_default.a.object.isRequired},InfoBox.__docgenInfo={description:"",methods:[],displayName:"InfoBox",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_InfoBox=Object(RequestProvider.withRequest)(InfoBox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/InfoBox.js"]={name:"InfoBox",docgenInfo:InfoBox.__docgenInfo,path:"app/component/library/Article/Embeds/InfoBox.js"});var icons_Refresh=Object(styled_components_browser_esm.default)(({className:className})=>Object(jsx_runtime.jsx)("span",{className:className,dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">\n    <path fill="#DC062B" fill-rule="evenodd" d="M8.25 6.167v3.75l3.188 1.89.577-.96-2.64-1.568V6.167H8.25zm7.5 1.5v-5.25l-1.98 1.98c-1.215-1.223-2.902-1.98-4.77-1.98-3.728 0-6.75 3.022-6.75 6.75 0 3.727 3.022 6.75 6.75 6.75 3.727 0 6.75-3.023 6.75-6.75h-1.5c0 2.895-2.355 5.25-5.25 5.25s-5.25-2.355-5.25-5.25c0-2.896 2.355-5.25 5.25-5.25 1.447 0 2.76.592 3.713 1.537L10.5 7.667h5.25z" clip-rule="evenodd"/>\n</svg>'}}))``;const AdWrapper=styled_components_browser_esm.default.div`
  position: relative;
  color: ${props=>props.theme.color.indyBase};
  background-color: ${props=>props.theme.color.greyscaleGrey};
  margin-bottom: 50px;
  & .mobile-only {
    @media ${Styles.c.laptop} {
      display: none;
    }
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    background: ${props=>props.theme.color.navGrey};
    left: 0;
    right: 0;
    bottom: -25px;

    @media ${Styles.c.maxLaptop} {
      left: 12px;
      right: 12px;
    }
  }
`,Ad_Content=styled_components_browser_esm.default.div`
  text-align: center;
  padding: 16px;
  position: relative;
`,Post=({children:children,className:className,data:data})=>Object(jsx_runtime.jsx)(AdWrapper,{className:className,"data-sort-time":data.created-1,id:"ad-"+data.id,children:Object(jsx_runtime.jsx)(Ad_Content,{children:children})});Post.propTypes={children:prop_types_default.a.node,className:prop_types_default.a.string,data:prop_types_default.a.object.isRequired},Post.__docgenInfo={description:"",methods:[],displayName:"Post",props:{children:{type:{name:"node"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"object"},required:!0,description:""}}};var LiveBlog_Ad=Post;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Ad.js"]={name:"Post",docgenInfo:Post.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Ad.js"});const Header_Wrapper=styled_components_browser_esm.default.h3`
  position: relative;
  border-top: 4px solid ${props=>props.theme.color.primary};
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  color: ${props=>props.theme.color.primary};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-weight: ${props=>props.theme.fontWeight.normal};
  font-size: 18px;
  line-height: 27px;
  padding: 16px 0 16px 30px;
  &:before {
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    background: transparent
      url('data:image/svg+xml; utf8, ${encodeURIComponent(__webpack_require__(2198).default)}')
      no-repeat;
    background-size: 24px;
    position: absolute;
    left: 0;
    top: 19px;
  }
  @media ${Styles.c.tablet} {
    font-size: 22px;
  }
`,Header_Header=({children:children})=>Object(jsx_runtime.jsx)(Header_Wrapper,{children:children});Header_Header.propTypes={children:prop_types_default.a.node},Header_Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{type:{name:"node"},required:!1,description:""}}};var LiveBlog_Header=Header_Header;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Header.js"]={name:"Header",docgenInfo:Header_Header.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Header.js"});const KeyPointsRoot=styled_components_browser_esm.default.aside`
  margin-bottom: 12px;
  background-color: ${props=>props.theme.color.bkg};
  border-top: 4px solid ${props=>props.theme.color.borderDark};

  h2 {
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    font-size: 18px;
    padding: 16px 0 12px;
    margin: 0;
    border-bottom: 1px solid ${props=>props.theme.color.navGrey};
    @media ${Styles.c.tablet} {
      font-size: 22px;
    }
  }

  @media ${Styles.c.tablet} {
    margin-bottom: 24px;
  }
`,KeyPointList=styled_components_browser_esm.default.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    color: ${props=>props.theme.color.contrastDarker};
    font-weight: ${props=>props.theme.fontWeight.normal};
    font-size: 18px;
    position: relative;
    padding: 12px 0 12px 32px;
    border-bottom: 1px solid ${props=>props.theme.color.navGrey};
    &:before {
      content: '';
      width: 24px;
      height: 24px;
      display: block;
      background: transparent
        url('data:image/svg+xml; utf8, ${encodeURIComponent(__webpack_require__(2199).default)}')
        no-repeat;
      background-size: 24px;
      position: absolute;
      left: 0;
      top: 13px;
    }
    a {
      color: ${props=>props.theme.color.contrastDarker};
      text-decoration: underline;
      text-decoration-color: ${props=>props.theme.color.primary};
    }
    @media ${Styles.c.tablet} {
      font-size: 22px;
    }
  }
`,KeyPoints=({keypointsTitle:keypointsTitle,keypoints:keypoints})=>Object(jsx_runtime.jsxs)(KeyPointsRoot,{children:[Object(jsx_runtime.jsx)("h2",{children:keypointsTitle||"Key Points"}),Object(jsx_runtime.jsx)(KeyPointList,{dangerouslySetInnerHTML:{__html:keypoints}})]});KeyPoints.propTypes={keypointsTitle:prop_types_default.a.string,keypoints:prop_types_default.a.string.isRequired},KeyPoints.__docgenInfo={description:"",methods:[],displayName:"KeyPoints",props:{keypointsTitle:{type:{name:"string"},required:!1,description:""},keypoints:{type:{name:"string"},required:!0,description:""}}};var LiveBlog_KeyPoints=KeyPoints;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/KeyPoints.js"]={name:"KeyPoints",docgenInfo:KeyPoints.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/KeyPoints.js"});var LiveBlog_Pagination=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("div",{className:props.className,...props,children:props.children}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  > * {
    flex: 1;
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
    color: ${props=>props.theme.color.fontMedium};
    font-size: 18px;
    font-weight: ${props=>props.theme.fontWeight.normal};
    padding: 15px 20px 14px;
    border: 1px solid ${props=>props.theme.color.formGrey};
    border-radius: 2px;
    text-align: center;
  }
  > span {
    background-color: #f4f4f4;
  }
  > *:first-child {
    margin-right: 8px;
    &:before {
      content: '';
      position: relative;
      top: 4px;
      background-size: 18px 19px;
      background-image: url('data:image/svg+xml; utf8, ${encodeURIComponent(__webpack_require__(2200).default)}');
      background-repeat: no-repeat;
      display: inline-block;
      width: 18px;
      height: 19px;
      margin: 0 3px;
    }
  }
  > *:last-child {
    margin-left: 8px;
    &:after {
      content: '';
      position: relative;
      top: 4px;
      background-size: 19px 19px;
      background-image: url('data:image/svg+xml; utf8, ${encodeURIComponent(__webpack_require__(2201).default)}');
      background-repeat: no-repeat;
      display: inline-block;
      width: 19px;
      height: 19px;
      margin: 0 3px;
    }
  }
`,moment=__webpack_require__(6),moment_default=__webpack_require__.n(moment);var Embeds_BlockQuoteLiveBlog=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)(Embeds_BlockQuote,{...props}))`
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
  position: relative;
  color: ${props=>props.theme.color.indyBase};
  background-color: ${props=>props.theme.color.greyscaleGrey};
  margin-bottom: 50px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    background: ${props=>props.theme.color.navGrey};
    left: 0;
    right: 0;
    bottom: -25px;

    @media ${Styles.c.maxLaptop} {
      left: 12px;
      right: 12px;
    }
  }
`,PostAnchor=styled_components_browser_esm.default.a`
  position: relative;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 14px;
  line-height: 29px;
  height: 29px;
  font-weight: ${props=>props.theme.fontWeight.normal};
  color: ${props=>props.theme.color.fontMedium};
  display: block;
  padding: 24px 0 0 40px;
  &:hover {
    color: ${props=>props.theme.color.borderDark};
    cursor: pointer;
  }
  &:before {
    content: "";
    background-size: 16px 17px;
    background-image: url("data:image/svg+xml; utf8, ${encodeURIComponent(__webpack_require__(2202).default)}");
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 17px;
    position absolute;
    top: 29px;
    left: 16px;
  }
  * {
    display: inline-block;
    height: 29px;
  }
`,Post_PostContent=styled_components_browser_esm.default.div`
  padding: 16px;
  position: relative;
  font-weight: ${props=>props.theme.fontWeight.thin};
  p {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 16px;
  }
`,PostHeading=styled_components_browser_esm.default.h3`
  margin: 0 0 16px;
  line-height: 26px;
  font-size: 22px;
  font-weight: 700;
`,Post_Post=({data:data,json:json})=>Object(jsx_runtime.jsxs)(PostWrapper,{"data-sort-time":data.created,"data-update-time":data.changed,id:"post-"+data.id,children:[Object(jsx_runtime.jsx)(PostAnchor,{href:"#post-"+data.id,children:Object(jsx_runtime.jsx)("amp-timeago",{layout:"fixed-height",height:"29",datetime:moment_default.a.unix(data.changed).toISOString(),locale:"en",children:data.changed})}),Object(jsx_runtime.jsxs)(Post_PostContent,{children:[data.title&&Object(jsx_runtime.jsx)(PostHeading,{children:data.title}),Object(jsx_runtime.jsx)(LiveBlog_PostContent,{items:json})]})]});Post_Post.propTypes={data:prop_types_default.a.object,json:prop_types_default.a.array},Post_Post.__docgenInfo={description:"",methods:[],displayName:"Post",props:{data:{type:{name:"object"},required:!1,description:""},json:{type:{name:"array"},required:!1,description:""}}};var LiveBlog_Post=Post_Post;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog/Post.js"]={name:"Post",docgenInfo:Post_Post.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog/Post.js"});const LiveBlog_Wrapper=styled_components_browser_esm.default.div`
  clear: both;
  margin: 20px 0;

  .notMobile {
    display: none;
    @media ${Styles.c.tablet} {
      display: inline;
    }
  }

  @media ${Styles.c.maxLaptop} {
    div[items] {
      margin: 0 -12px;
    }
  }
`,MpuWrapper=styled_components_browser_esm.default.div`
  display: none;
  @media ${Styles.c.laptop} {
    display: block;
  }
`,UpdateButton=Object(styled_components_browser_esm.default)(props=>Object(jsx_runtime.jsx)("button",{className:props.className,update:"",...props,children:props.children}))`
  color: ${props=>props.theme.color.primary};
  background-color: ${props=>props.theme.color.highlight};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  border: 1px solid ${props=>props.theme.color.formGrey};
  border-radius: 2px;
  display: flex;
  width: 100%;
  padding: 16px 20px 15px;
  font-size: 18px;
  font-weight: ${props=>props.theme.fontWeight.normal};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  ${icons_Refresh} {
    position: relative;
    top: 2px;
    margin-left: 4px;
  }
  &.amp-active[update] {
    display: flex;
  }
`,LiveBlog=({article:article,data:{uuid:uuid,status:status},req:{query:{page:page=1},cookies:cookies},res:{locals:{cleanAmp:cleanAmp}},posts:posts,paging:paging,keypoints:keypoints,keypointsTitle:keypointsTitle})=>Object(jsx_runtime.jsxs)(LiveBlog_Wrapper,{children:[keypoints&&Object(jsx_runtime.jsx)(LiveBlog_KeyPoints,{keypoints:keypoints,keypointsTitle:keypointsTitle}),1===status&&Object(jsx_runtime.jsx)(LiveBlog_Header,{children:"Live updates"}),Object(jsx_runtime.jsxs)("amp-live-list",{id:uuid,"data-max-items-per-page":paging.posts,children:[Object(jsx_runtime.jsxs)(UpdateButton,{on:`tap:${uuid}.update`,children:["Show latest updates ",Object(jsx_runtime.jsx)(icons_Refresh,{})]}),Object(jsx_runtime.jsx)("div",{items:"",children:posts.map(({data:data,postJson:postJson},index)=>Object(jsx_runtime.jsxs)(react.Fragment,{children:[Object(jsx_runtime.jsx)(LiveBlog_Post,{data:data,json:postJson}),(index+1)%3==0&&!cookies.subscriber&&Object(jsx_runtime.jsx)(LiveBlog_Ad,{className:8!==index?"mobile-only":"",data:data,children:8!==index?Object(jsx_runtime.jsx)(MPU.a,{id:"blog_mpu_"+Math.round((index+1)/3),"force-bulk":!0}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Ads_TaboolaInline,{cleanAmp:cleanAmp}),Object(jsx_runtime.jsx)(MpuWrapper,{children:Object(jsx_runtime.jsx)(MPU.a,{id:"blog_mpu_"+Math.round((index+1)/3),"force-bulk":!0})})]})})]},data.uuid))}),paging.totalPages>1&&Object(jsx_runtime.jsxs)(LiveBlog_Pagination,{pagination:"",children:[page>1?Object(jsx_runtime.jsxs)("a",{href:2===page?article.path:"?page="+(page-1),children:["Latest",Object(jsx_runtime.jsx)("span",{className:"notMobile",children:" updates"})]}):Object(jsx_runtime.jsxs)("span",{children:["Latest",Object(jsx_runtime.jsx)("span",{className:"notMobile",children:" updates"})]}),page<paging.totalPages?Object(jsx_runtime.jsxs)("a",{href:"?page="+(page+1),children:["Older",Object(jsx_runtime.jsx)("span",{className:"notMobile",children:" updates"})]}):Object(jsx_runtime.jsxs)("span",{children:["Older",Object(jsx_runtime.jsx)("span",{className:"notMobile",children:" updates"})]})]})]})]});LiveBlog.propTypes={res:prop_types_default.a.object.isRequired,req:prop_types_default.a.object.isRequired,article:prop_types_default.a.object.isRequired,data:prop_types_default.a.object.isRequired,keypoints:prop_types_default.a.string.isRequired,keypointsTitle:prop_types_default.a.string,posts:prop_types_default.a.array,paging:prop_types_default.a.object},LiveBlog.defaultProps={keypointsTitle:"",posts:[],paging:{total:0,posts:0}},LiveBlog.__docgenInfo={description:"",methods:[],displayName:"LiveBlog",props:{keypointsTitle:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},posts:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},paging:{defaultValue:{value:"{\n  total: 0,\n  posts: 0,\n}",computed:!1},type:{name:"object"},required:!1,description:""},res:{type:{name:"object"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""},article:{type:{name:"object"},required:!0,description:""},data:{type:{name:"object"},required:!0,description:""},keypoints:{type:{name:"string"},required:!0,description:""}}};var Embeds_LiveBlog=Object(RequestProvider.withRequest)(LiveBlog);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/LiveBlog.js"]={name:"LiveBlog",docgenInfo:LiveBlog.__docgenInfo,path:"app/component/library/Article/Embeds/LiveBlog.js"});const MarkupEmbed=({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:markup}});MarkupEmbed.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,isService:prop_types_default.a.bool};var Embeds_MarkupEmbed=Object(styled_components_browser_esm.default)(MarkupEmbed)`
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
`;const WrapperDefaults=styled_components_browser_esm.default.figure`
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
`,NumberBox_LeftWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
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
`,NumberBox_RightWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
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
`,CentreWrapper=Object(styled_components_browser_esm.default)(WrapperDefaults)`
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
`;function NumberBox(props){const{className:className,data:{align:align,title:title,markup:markup},req:{cookies:cookies}}=props,Wrapper=(align=>{switch(align){case"left":return NumberBox_LeftWrapper;case"right":return NumberBox_RightWrapper;case"centre":return CentreWrapper}return NumberBox_LeftWrapper})(align),titleSize=title?title.length:0,titleLength=titleSize>10?10:titleSize;return Object(jsx_runtime.jsxs)(Wrapper,{className:`${className||""}${cookies.subscriber?" subscribed":""}`,children:[Object(jsx_runtime.jsx)(NumberBox_Number,{className:"number-length-"+titleLength,children:title}),Object(jsx_runtime.jsx)(NumberBox_Content,{dangerouslySetInnerHTML:{__html:markup}})]})}NumberBox.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.any.isRequired,req:prop_types_default.a.object.isRequired},NumberBox.__docgenInfo={description:"",methods:[],displayName:"NumberBox",props:{className:{type:{name:"string"},required:!1,description:""},data:{type:{name:"any"},required:!0,description:""},req:{type:{name:"object"},required:!0,description:""}}};var Embeds_NumberBox=Object(RequestProvider.withRequest)(NumberBox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/NumberBox.js"]={name:"NumberBox",docgenInfo:NumberBox.__docgenInfo,path:"app/component/library/Article/Embeds/NumberBox.js"});var withCleanAmp=__webpack_require__(212);const Related_Wrapper=styled_components_browser_esm.default.aside`
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
`,Related_List=styled_components_browser_esm.default.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`,RelatedItems=Object(styled_components_browser_esm.default)(({className:className,links:links})=>Object(jsx_runtime.jsx)(Related_List,{className:["article-container",className].join(" "),children:links.filter(link=>link&&Object.keys(link).length>0).map((link,index)=>Object(jsx_runtime.jsx)(ItemList,{className:"related-item",children:Object(jsx_runtime.jsx)(Related_Content,{href:link.href,target:"_blank","data-vars-event-id":"c29","data-vars-item-name":"related - "+link.href,children:link.title})},index))}))``,Related=({data:{align:align,title:title,links:links}})=>Object(jsx_runtime.jsxs)(Related_Wrapper,{className:"align-"+align,children:[Object(jsx_runtime.jsx)(Headline,{children:title}),Object(jsx_runtime.jsx)(RelatedItems,{links:links})]});Related.propTypes={data:prop_types_default.a.any.isRequired,className:prop_types_default.a.string};const RelatedWithScript=Object(withScript.a)(Related)`
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
`,RelatedArticleList=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(RelatedWithScript,{...props}):Object(jsx_runtime.jsx)(Related,{...props});RelatedArticleList.propTypes={...Related.propTypes,cleanAmp:prop_types_default.a.bool};var Embeds_Related=Object(withCleanAmp.a)(RelatedArticleList),ScoreBoard=__webpack_require__(916),ScoreBoard_default=__webpack_require__.n(ScoreBoard);const Scoreboard_Root=styled_components_browser_esm.default.div`
  margin: 0 0 16px 0;
`,Scoreboard_ScoreBoard=props=>Object(jsx_runtime.jsx)(Scoreboard_Root,{children:Object(jsx_runtime.jsx)(ScoreBoard_default.a,{...props,show_crests:"true",show_logo:"false",show_title:"false"})});Scoreboard_ScoreBoard.__docgenInfo={description:"",methods:[],displayName:"ScoreBoard"};var Scoreboard=Scoreboard_ScoreBoard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Scoreboard.js"]={name:"ScoreBoard",docgenInfo:Scoreboard_ScoreBoard.__docgenInfo,path:"app/component/library/Article/Embeds/Scoreboard.js"});const LineSeperator=styled_components_browser_esm.default.hr`
  border-width: 2px;
  border-color: ${props=>props.theme.color.contrastDarker};
`,Seperator=({className:className})=>Object(jsx_runtime.jsx)(LineSeperator,{className:className});Seperator.propTypes={className:prop_types_default.a.string},Seperator.__docgenInfo={description:"",methods:[],displayName:"Seperator",props:{className:{type:{name:"string"},required:!1,description:""}}};var Embeds_Seperator=Seperator;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/Seperator.js"]={name:"Seperator",docgenInfo:Seperator.__docgenInfo,path:"app/component/library/Article/Embeds/Seperator.js"});const Table=Object(styled_components_browser_esm.default)(({className:className,data:{markup:markup}})=>Object(jsx_runtime.jsx)("div",{className:className,children:Object(jsx_runtime.jsx)("excessremovablewrapper",{dangerouslySetInnerHTML:{__html:markup}})}))`
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
`;Table.propTypes={className:prop_types_default.a.string,data:prop_types_default.a.object};var Embeds_Table=Table,SocialShare=__webpack_require__(348);const ShareBarSyndication_Wrapper=styled_components_browser_esm.default.aside`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${Styles.c.tablet} {
    flex-direction: row;
  }
`,ShowCommentsButton=styled_components_browser_esm.default.button`
  color: ${props=>props.theme.color.galleryDarkGrey};
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  border: 1px solid ${props=>props.theme.color.formGrey};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  height: 50px;
  padding: 12px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  width: 100%;

  span {
    display: flex;
    margin: 3px 0 0 6px;
  }
`,ReuseContentLink=styled_components_browser_esm.default.a`
  color: ${props=>props.theme.color.fontMedium};
  display: block;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  font-size: 12px;
  line-height: 18px;
  text-decoration: underline;
  margin: 12px auto;
  text-align: center;
  white-space: nowrap;
  width: 100%;

  @media ${Styles.c.tablet} {
    margin: 0 40px;
    width: auto;
  }
`,ShareBarSyndication=({article:article})=>{const ReuseContentHref="/syndication/reuse-permission-form?url="+article.path;return Object(jsx_runtime.jsxs)(ShareBarSyndication_Wrapper,{children:[article.commenting&&Object(jsx_runtime.jsxs)(ShowCommentsButton,{on:"tap:comments.scrollTo",children:["Comments",Object(jsx_runtime.jsx)("span",{dangerouslySetInnerHTML:{__html:'\n<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none">\n<path fill="#4B4B49" fill-rule="evenodd" d="M15 9.6l-1-1-4.3 4.1V3.6H8.3v9.1L4 8.5 3 9.5l6 6 6-6z" clip-rule="evenodd"/>\n</svg>\n'}})]}),Object(jsx_runtime.jsx)(ReuseContentLink,{href:ReuseContentHref,children:"Reuse content"})]})};ShareBarSyndication.propTypes={article:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired},ShareBarSyndication.__docgenInfo={description:"",methods:[],displayName:"ShareBarSyndication",props:{article:{type:{name:"object"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""}}};var Article_ShareBarSyndication=Object(RequestProvider.withRequest)(ShareBarSyndication);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/ShareBarSyndication.js"]={name:"ShareBarSyndication",docgenInfo:ShareBarSyndication.__docgenInfo,path:"app/component/library/Article/ShareBarSyndication.js"});const Topics_Wrapper=styled_components_browser_esm.default.aside`
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  margin-bottom: 16px;
  padding: 6px 0;
  font-size: 12px;
  border-top: 1px solid ${props=>props.theme.color.navGrey};
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  @media ${Styles.c.laptop} {
    font-size: 14px;
  }
`,TopicsTitle=styled_components_browser_esm.default.span`
  color: ${props=>props.theme.color.fontMedium};
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 0.7px;
  margin-right: 16px;
  @media ${Styles.c.laptop} {
    line-height: 21px;
  }
`,TopicsListItem=styled_components_browser_esm.default.a`
  display: inline-block;
  text-transform: capitalize;
  line-height: 18px;
  color: ${props=>props.theme.color.fontMedium};
  margin: 6px 8px 6px 0;
  font-weight: 500;
  border-radius: 2px;
  border: 1px solid ${props=>props.theme.color.formGrey};
  padding: 4px 8px;
  @media ${Styles.c.laptop} {
    line-height: 21px;
  }
  &:hover {
    color: ${props=>props.theme.color.hover};
  }
`,Topics=({className:className,topics:topics})=>Object(jsx_runtime.jsxs)(Topics_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(TopicsTitle,{children:"More About "}),topics.map(({name:name,path:path},index)=>Object(jsx_runtime.jsx)(TopicsListItem,{href:path,dangerouslySetInnerHTML:{__html:name}},index))]});Topics.propTypes={className:prop_types_default.a.string,topics:prop_types_default.a.array.isRequired},Topics.__docgenInfo={description:"",methods:[],displayName:"Topics",props:{className:{type:{name:"string"},required:!1,description:""},topics:{type:{name:"array"},required:!0,description:""}}};var Article_Topics=Topics;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Topics.js"]={name:"Topics",docgenInfo:Topics.__docgenInfo,path:"app/component/library/Article/Topics.js"});const ContentWrapper_Wrapper=styled_components_browser_esm.default.div`
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
`,ApesterWithToken=(WrappedComponent=Ads_Apester,()=>Object(jsx_runtime.jsx)(TokenProviderWithRequest,{children:Object(jsx_runtime.jsx)(WrappedComponent,{})}));var WrappedComponent;const embedMap={blockquote:Embeds_BlockQuote,brightcove:Embeds_Brightcove,facebook:Embeds_Facebook,gallery:Embeds_Gallery,image:Embeds_Image,H2:Embeds_MarkupEmbed,H3:Embeds_MarkupEmbed,H4:Embeds_MarkupEmbed,H5:Embeds_MarkupEmbed,H6:Embeds_MarkupEmbed,html:HTML.a,infobox:Embeds_InfoBox,iframe:Embeds_Iframe,instagram:Embeds_Instagram,listbulleted:Embeds_MarkupEmbed,listnumbered:Embeds_MarkupEmbed,numberbox:Embeds_NumberBox,playbuzz:Embeds_Playbuzz,readMore:Article_ReadMore,related:Embeds_Related,table:Embeds_Table,twitter:Embeds_Twitter,"video-youtube":Embeds_Youtube,"video-dugout":DugoutPlayer,"dugout-video":DugoutPlayer,youtube:Embeds_Youtube,"article-link":Embeds_ArticleLink},isValidToCount=markup=>{return(str=markup,str.replace(/(<([^>]+)>)/gi,"")).length>=100;var str},ContentWrapper=({adToggle:adToggle,style:style,domain:domain,article:article,cleanAmp:cleanAmp,isService:isService,configuration:configuration,isBest:isBest,isInsider:isInsider,req:{query:query}})=>{var _article$extra,_article$body,_content;const{extra:{products:products,verdict:verdict},hierarchy:hierarchy,liveblog:liveblog}=article,blockAds=(null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds)||(null==article?void 0:article.sensitive)||isBest,isLazy=Object.keys(query).includes("__lazy__");let paragraphCount=0,mpuBottomId=0,thirdPartyId=1,mpu1Displaying=!1,holdAd=!1,thirdPartyDesktopDisplaying=!1,thirdPartyMobileDisplaying=!1,doubleAdBlocker=!1,content=null===(_article$body=article.body)||void 0===_article$body?void 0:_article$body.filter(x=>x.type).filter(readmoreOnce()).filter(removeEmptySnippet()).reduce((acc,snippet,index)=>{const key=`${snippet.type}${index}`;switch(snippet.type){case"markup":if(!(3!==index||article.sensitive||isBest||isService)){if(2===paragraphCount&&(mpu1Displaying=!0,acc.push(Object(jsx_runtime.jsx)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,className:"pb-20"},"mpu1-markup-ad"))),acc.push(Object(jsx_runtime.jsx)(Ads_ArticlePrompt,{},"article-prompt"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)),!(3!==paragraphCount&&4!==paragraphCount||isBest||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;3===paragraphCount?(thirdPartyDesktopDisplaying=!0,thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount&&(thirdPartyMobileDisplaying=!0,thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"),acc.push(Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,thirdPartyAd:!0,"force-bulk":!isLazy})},"thirdparty0"+thirdPartyId))}return isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),acc}if(!(2!==paragraphCount||holdAd||doubleAdBlocker||isService||mpu1Displaying))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(react.createElement)(Mpu1MarkupAd,{cleanAmp:cleanAmp,isBest:isBest,key:"mpu1-markup-ad"}),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(!((3!==paragraphCount||thirdPartyDesktopDisplaying)&&(4!==paragraphCount||thirdPartyMobileDisplaying)&&10!==paragraphCount||isBest||holdAd||isService||doubleAdBlocker||article.isCommercial||cleanAmp)){let sizeKey,thirdPartyClasses;return 3===paragraphCount?(thirdPartyClasses="desktop-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_DESKTOP"):4===paragraphCount?(thirdPartyClasses="mobile-only teads",sizeKey="THIRD_PARTY_ARTICLE_BODY_MOBILE"):10===paragraphCount&&(thirdPartyId++,thirdPartyClasses="teads",sizeKey="THIRD_PARTY_ARTICLE_BODY"),doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ThirdPartyWrapper,{className:thirdPartyClasses,children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"thirdparty0"+thirdPartyId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,"size-key":sizeKey,ampSizeValidation:!1,thirdPartyAd:!0,"force-bulk":!0})},"thirdparty0"+thirdPartyId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)]}if(!(6!==paragraphCount||isBest||article.sensitive||holdAd||isService||article.isCommercial||isInsider||doubleAdBlocker))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(Ads_TaboolaInline,{},"Taboola-Inline"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(!(8!==paragraphCount||holdAd||isBest||isService||article.isCommercial||isInsider||blockAds||doubleAdBlocker))return doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,cleanAmp?Object(jsx_runtime.jsx)(Ad.a,{id:"triple-lift",width:300,height:297,type:"triplelift",src:"https://ib.3lift.com/ttj?inv_code=esi_standard_inarticle_AMP"},"triple-lift"):Object(jsx_runtime.jsx)(ApesterWithToken,{},"apester"),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(paragraphCount%4==0&&paragraphCount>=12&&!isService&&!holdAd&&!isBest&&!doubleAdBlocker)return mpuBottomId++,doubleAdBlocker=!0,isValidToCount(snippet.data.markup)&&(paragraphCount++,doubleAdBlocker=!1),[...acc,Object(jsx_runtime.jsx)(ContentWrapper_MpuWrapper,{children:Object(jsx_runtime.jsx)(Ads_MarkupAd,{id:"bottom_mpu_"+mpuBottomId,cleanAmp:cleanAmp,blockAds:blockAds,isBest:isBest,className:"mobile-only","force-bulk":!0})},"bottom_mpu_"+mpuBottomId),Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,style:style},key)];if(0===index&&!isInsider){const re=/(?<=>)[^<\s]/,{markup:markup}=snippet.data,matched=markup.match(re);if(matched){const position=matched.index,letter=matched[0],markupMinusLetter=markup.substr(0,position)+markup.substr(position+1);return[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:{...snippet.data,markup:markupMinusLetter},polar:article.polar,prefix:Object(jsx_runtime.jsx)(BigLetter,{letter:letter}),style:style},key)]}}return isValidToCount(snippet.data.markup)&&!holdAd?(paragraphCount++,doubleAdBlocker=!1):isValidToCount(snippet.data.markup)&&holdAd&&((paragraphCount=>paragraphCount>1&&paragraphCount<5||10===paragraphCount||6===paragraphCount||paragraphCount%4==0&&paragraphCount>=8)(paragraphCount)?((3===paragraphCount&&thirdPartyDesktopDisplaying||4===paragraphCount&&thirdPartyMobileDisplaying)&&(holdAd=!1,paragraphCount++),holdAd=!1):(holdAd=!1,paragraphCount++)),[...acc,Object(jsx_runtime.jsx)(Article_Markup,{data:snippet.data,polar:article.polar,isService:isService,style:style},key)];case"listbulleted":case"listnumbered":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data,isService:isService},key)]}case"video-jwplayer":return[...acc,Object(jsx_runtime.jsx)(Embeds_JWPlayer,{data:snippet.data,isHero:article.isLiveBlog,isCommercial:article.isCommercial,isSensitive:article.sensitive},key)];case"image":case"gallery":{const Component=embedMap[snippet.type];return[...acc,Object(jsx_runtime.jsx)(Component,{srcSet:[320,640],data:snippet.data},key)]}case"HR":return[...acc,Object(jsx_runtime.jsx)(Embeds_Seperator,{},key)];default:{const Component=embedMap[snippet.type];return Component?(holdAd=!0,[...acc,Object(jsx_runtime.jsx)(Component,{data:snippet.data},key)]):(console.log("TODO: define component type",snippet.type),[...acc,Object(jsx_runtime.jsxs)("div",{style:{color:"red"},children:["TODO: define component type ",snippet.type]},key)])}}},[]);null===(_content=content)||void 0===_content||_content.splice(Math.ceil(content.length/2),0,Object(jsx_runtime.jsx)(library_NewsletterSignup,{domain:domain,data:article,configuration:configuration},"newsletter")),(hierarchy||[]).length&&"sport"===hierarchy[0].path.split("/")[1]&&content.unshift(Object(jsx_runtime.jsx)(Ads_Fresh8,{},"Fresh8")),products&&content.push(Object(jsx_runtime.jsx)(Best_Products,{products:products},"Products")),verdict&&content.push(Object(jsx_runtime.jsx)(Best_Verdict,{verdict:verdict},"Verdict")),cleanAmp&&(content=((content,isBest)=>{const markupIndexesArr=content.map(({key:key})=>key).reduce((acc,key,index)=>(null==key?void 0:key.startsWith("markup"))?[...acc,index]:acc,[]),fourthParaIndex=markupIndexesArr[3],tenthParaIndex=markupIndexesArr[9],teadsIndexes=[...fourthParaIndex?[fourthParaIndex]:[],...tenthParaIndex?[tenthParaIndex]:[]];let thirdPartyIndex=1;return content.reduce((acc,item,index)=>{if(teadsIndexes.includes(index)){const adId="thirdparty0"+thirdPartyIndex;return thirdPartyIndex+=1,[...acc,item,Object(jsx_runtime.jsx)(ThirdPartyAmp,{id:adId,isBest:isBest},adId)]}return[...acc,item]},[])})(content,isBest));const scoreboard=Object(utils_scoreboard.scoreboardData)(article);return Object(jsx_runtime.jsxs)(ContentWrapper_Wrapper,{className:article.polar?"sponsored-article":"",children:[scoreboard&&Object(jsx_runtime.jsx)(Scoreboard,{scoreboard:scoreboard,cleamAmp:cleanAmp}),content,liveblog&&Object(jsx_runtime.jsx)(Embeds_LiveBlog,{...liveblog}),isInsider&&Object(jsx_runtime.jsx)(SocialShare.a,{className:"insider-social-share",article:article,configuration:configuration}),article.topics&&Object(jsx_runtime.jsx)(Article_Topics,{topics:article.topics,style:style}),!isInsider&&!isService&&Object(jsx_runtime.jsx)(Article_ShareBarSyndication,{}),"insider"!==style&&!isService&&Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!article.isCommercial&&adToggle(ads.b)&&!blockAds&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle1,{}),!blockAds&&Object(jsx_runtime.jsx)(Ads_PartnerAds,{id:"partners"}),!cleanAmp&&article.commenting&&Object(jsx_runtime.jsx)(CommentContainer,{}),!article.isCommercial&&adToggle(ads.b)&&!blockAds&&Object(jsx_runtime.jsx)(Ads_TaboolaBelowArticle2,{})]})]})};ContentWrapper.propTypes={style:prop_types_default.a.string,articleBodyConfig:prop_types_default.a.object.isRequired,adToggle:prop_types_default.a.func.isRequired,article:prop_types_default.a.object.isRequired,domain:prop_types_default.a.object,configuration:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired,req:prop_types_default.a.object.isRequired,isBest:prop_types_default.a.bool,isService:prop_types_default.a.bool,isInsider:prop_types_default.a.bool};var Article_ContentWrapper=Object(RequestProvider.withRequest)(ContentWrapper);const Breadcrumb=Object(styled_components_browser_esm.default)(({className:className,hierarchy:hierarchy})=>Object(jsx_runtime.jsx)("nav",{className:className,children:hierarchy.map(({path:path,name:name},index)=>Object(jsx_runtime.jsx)("a",{href:path,children:name},index))}))`
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
`;Headline_Headline.propTypes={className:prop_types_default.a.string,children:prop_types_default.a.any.isRequired};var Article_Headline=Headline_Headline,heroType=__webpack_require__(64);const PolarImage_ImageWrapper=styled_components_browser_esm.default.figure`
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
`;var Article_PersistentPlayer=Object(withCleanAmp.a)(StyledPersistentPlayer);const Hero=({className:className,hero:hero,theme:theme="default",isCommercial:isCommercial=!1,isSensitive:isSensitive=!1})=>{if(!Array.isArray(hero))return null;return(hero=>{if(!hero)return null;switch(hero.type){case heroType.e:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(Embeds_JWPlayer,{className:className,data:hero.data,isHero:!0,isCommercial:isCommercial,isSensitive:isSensitive})});case heroType.b:return Object(jsx_runtime.jsx)(Article_PersistentPlayer,{children:Object(jsx_runtime.jsx)(DugoutPlayer,{className:className,data:hero.data})});case heroType.a:return Object(jsx_runtime.jsx)(Embeds_Brightcove,{data:hero.data});case heroType.g:return Object(jsx_runtime.jsx)(Embeds_Youtube,{data:hero.data});case heroType.d:return Object(jsx_runtime.jsx)(Embeds_Image,{data:hero.data,srcSet:[320,640,990],theme:theme,isHero:!0});case heroType.c:return Object(jsx_runtime.jsx)(Embeds_Gallery,{data:hero.data,srcSet:[320,640,990],isHero:!0});case heroType.f:return Object(jsx_runtime.jsx)(ThirdParty_PolarImage,{});default:return null}})(Object(services_article.d)(hero))};Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{theme:{defaultValue:{value:"'default'",computed:!1},required:!1},isCommercial:{defaultValue:{value:"false",computed:!1},required:!1},isSensitive:{defaultValue:{value:"false",computed:!1},required:!1}}};var Article_Hero=Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Hero.js"]={name:"Hero",docgenInfo:Hero.__docgenInfo,path:"app/component/library/Article/Hero.js"});const Subheadline=Object(styled_components_browser_esm.default)(({className:className,children:children})=>Object(jsx_runtime.jsx)("div",{className:className,dangerouslySetInnerHTML:{__html:children}}))`
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
  background-color: ${props=>props.isVideo||props.isLiveBlog?props.theme.color.greyscaleGrey:"transparent"};
  box-shadow: ${props=>props.isVideo||props.isLiveBlog?"0 1px 0 0 "+props.theme.color.navGrey:"0"};
  margin-bottom: ${props=>props.isVideo||props.isLiveBlog?"16px":"0"};
  padding-bottom: 16px;

  ${Header_ContentWrapper} {
    margin: 0 12px;
    @media ${Styles.c.laptop} {
      margin: 0;
    }
  }
`,Article_Header_Header=props=>{var _article$hero;const{article:article,isService:isService}=props,isVideo=null===(_article$hero=article.hero)||void 0===_article$hero?void 0:_article$hero.some(({type:type})=>/youtube|brightcove|jw_player/.test(type)),isLiveBlog=article.isLiveBlog;return Object(jsx_runtime.jsx)(HeaderWrapper,{isService:isService,isVideo:isVideo,isLiveBlog:isLiveBlog,children:Object(jsx_runtime.jsxs)(Inner,{isService:isService,children:[Object(jsx_runtime.jsx)(Article_Breadcrumb,{hierarchy:article.hierarchy}),Object(jsx_runtime.jsxs)(Header_ContentWrapper,{children:[Object(jsx_runtime.jsx)(Article_Headline,{children:article.title}),article.lead&&Object(jsx_runtime.jsx)(Article_Subheadline,{children:article.lead})]}),Object(jsx_runtime.jsx)(Article_Hero,{hero:article.hero,isCommercial:article.isCommercial,isSensitive:article.isSensitive})]})})};Article_Header_Header.propTypes={article:prop_types_default.a.object.isRequired,isVideo:prop_types_default.a.bool,isService:prop_types_default.a.bool};var Article_Header=Object(styled_components_browser_esm.default)(Object(RequestProvider.withRequest)(Article_Header_Header))`
  display: flex;
  flex-direction: column;
`,Frame=__webpack_require__(128);const ArticleMeta_ArticleMeta=({article:article,res:{locals:{configuration:{name:name,baseUrl:baseUrl,domain:domain}}}})=>{var _article$hierarchy,_article$hierarchy2,_article$topics;const authorNames=(article=>{var _article$authors;const names=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name);return null==names?void 0:names.join(", ")})(article),internalLinkCountValue=Object(services_article.e)(article.body,domain),externalLinkCountValue=Object(services_article.a)(article.body,domain),videoLinkCountValue=Object(services_article.f)(article.body,article.hero),section=(null===(_article$hierarchy=article.hierarchy)||void 0===_article$hierarchy?void 0:_article$hierarchy.length)&&article.hierarchy[0].name,subsection=(null===(_article$hierarchy2=article.hierarchy)||void 0===_article$hierarchy2?void 0:_article$hierarchy2.length)>1&&article.hierarchy[1].name,keywords=(null===(_article$topics=article.topics)||void 0===_article$topics?void 0:_article$topics.map(a=>a.name))||[];article.premium&&keywords.push("Independent Premium");const firstImage=article.OGImages&&article.OGImages.filter(({type:type})=>"image"===type)[0],firstImageUrl=firstImage?/^http/.test(firstImage.data.url)?firstImage.data.url:baseUrl+firstImage.data.url:null;return Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[article.tags&&Object(jsx_runtime.jsx)("meta",{property:"article:tag",content:article.tags}),section&&Object(jsx_runtime.jsx)("meta",{property:"article:section",content:section}),subsection&&Object(jsx_runtime.jsx)("meta",{property:"article:subsection",content:subsection}),authorNames&&Object(jsx_runtime.jsx)("meta",{property:"article:author_name",content:authorNames}),authorNames&&Object(jsx_runtime.jsx)("meta",{name:"author",content:authorNames}),Object(jsx_runtime.jsx)("meta",{property:"article:content_type",content:"story"}),Object(jsx_runtime.jsx)("meta",{property:"article:word_count",content:article.wordCount||0}),Object(jsx_runtime.jsx)("meta",{property:"article:image_count",content:article.imageCount||0}),Object(jsx_runtime.jsx)("meta",{property:"article:video_count",content:videoLinkCountValue}),Object(jsx_runtime.jsx)("meta",{property:"article:internal_link_count",content:internalLinkCountValue}),Object(jsx_runtime.jsx)("meta",{name:"publisher",content:"Evening Standard"}),Object(jsx_runtime.jsx)("meta",{name:"date",content:new Date(1e3*article.publish).toISOString()}),Object(jsx_runtime.jsx)("meta",{property:"article:external_link_count",content:externalLinkCountValue}),Object(jsx_runtime.jsx)("meta",{property:"og:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{name:"twitter:title",content:article.titleSocial||article.title}),Object(jsx_runtime.jsx)("meta",{property:"og:url",content:baseUrl+article.path}),Object(jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),"The Independent"===name&&Object(jsx_runtime.jsx)("meta",{property:"twitter:site",content:"@independent"}),Object(jsx_runtime.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(jsx_runtime.jsx)("meta",{property:"og:description",content:article.leadAsText||""}),Object(jsx_runtime.jsx)("meta",{property:"twitter:description",content:article.leadAsText||""}),Object(jsx_runtime.jsx)("meta",{property:"twitter:image",content:firstImageUrl}),firstImageUrl&&Object(jsx_runtime.jsx)("meta",{property:"og:image",content:firstImageUrl}),firstImageUrl&&Object(jsx_runtime.jsx)("meta",{property:"og:image:secure_url",content:firstImageUrl}),keywords&&Object(jsx_runtime.jsx)("meta",{name:"keywords",content:keywords})]})};ArticleMeta_ArticleMeta.propTypes={article:prop_types_default.a.object.isRequired,res:prop_types_default.a.object.isRequired};var Head_ArticleMeta=Object(RequestProvider.withRequest)(ArticleMeta_ArticleMeta),Sidebar=__webpack_require__(344);const setAdData=(position,article)=>{const adConfig=config.a.getAdConfig();if(!article.sections)return;let adData=Object.assign({},adConfig.ampAd);return adData.json=JSON.parse(adData.json),adData.json.targeting={pos:[position],test:Object(utils_adData.getTestTargeting)(),pageid:Object(utils_page.getPageId)(article)},adData.json.targeting.pagetype="article",adData.json.targeting.section=article&&article.sections[0].path.split("/"),adData["data-slot"]+=`${article.sidebar&&article.sidebar.data&&article.sidebar.data.publication.addUnitId}/${article.sections[0].name.toLowerCase().replace(/\s/g,"-")}`,adData.json=JSON.stringify(adData.json),adData},ArticleContent=styled_components_browser_esm.default.article`
  background-color: ${props=>props.theme.color.contrastLight};
`,BylineContentWrapper=styled_components_browser_esm.default.div`
  width: 100%;
  @media ${Styles.c.laptop} {
    border-right: ${props=>props.isService?"none":"1px solid "+props.theme.color.navGrey};
    padding-right: 15px;
  }
  &.article-insider {
    border-right: none;
    padding-right: 0;
  }
`,Article=props=>{const{className:className,req:{path:path,originalUrl:originalUrl},article:article,cleanAmp:cleanAmp,jsGlobals:jsGlobals,configuration:configuration}=props,{baseUrl:baseUrl}=configuration,fullUrl=baseUrl+originalUrl,adToggle=article.adConfig?Object(ads.e)(article):()=>{},adToggleByType=article.adConfig?Object(ads.f)(article):()=>{},articleType=Object(services_article.d)(article.hero).type,articleStyle=Object(themes.getArticleTheme)(path,configuration),isBest=(article.sections?article.sections[0]:{}).path.includes("/shopping/esbest"),isService=article.articleTypes.some(({name:name})=>"Service"===name),hasSideBar=!cleanAmp&&!isService;return Object(jsx_runtime.jsxs)(Frame.a,{isService:isService,className:className,style:articleStyle,children:[Object(jsx_runtime.jsx)(Head_ArticleMeta,{article:article}),Object(jsx_runtime.jsxs)(Helmet.Helmet,{children:[Object(jsx_runtime.jsx)("title",{children:Object(util_page.a)({article:article},configuration.name)}),article.structuredData&&Object(jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(article.structuredData.article)})||"",!cleanAmp&&Object(jsx_runtime.jsx)("link",{rel:"amphtml",href:/\?/.test(fullUrl)?fullUrl.replace(/\?/,"?amp&"):fullUrl+"?amp"}),cleanAmp&&isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)("script",{async:"","custom-element":"amp-link-rewriter",src:"https://cdn.ampproject.org/v0/amp-link-rewriter-0.1.js"})]}),Object(jsx_runtime.jsxs)(ArticleContent,{children:[article.adConfig&&!isService&&adToggle(ads.c)&&Object(jsx_runtime.jsx)(TopBanner.a,{width:"320",height:"50",cleanAmp:cleanAmp,data:setAdData("top",article)}),!cleanAmp&&!isBest&&"insider"!==articleStyle&&Object(jsx_runtime.jsx)(Ads_ThirdParty,{id:"thirdparty_05",sizes:"9x9"}),!cleanAmp&&!isBest&&adToggle(ads.a)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"nativeBanner"}),!cleanAmp&&!isBest&&adToggle(ads.d)&&Object(jsx_runtime.jsx)(WallPaper.a,{id:"adSlotWallpaper"}),Object(jsx_runtime.jsx)(Article_Header,{article:article,type:articleType,isService:isService}),Object(jsx_runtime.jsxs)(Article_ColumnWrapper,{isService:isService,children:[Object(jsx_runtime.jsxs)(BylineContentWrapper,{isService:isService,children:[!isService&&Object(jsx_runtime.jsx)(ArticleMeta.default,{}),Object(jsx_runtime.jsx)(Article_ContentWrapper,{className:"article-content",adToggle:adToggle,articleBodyConfig:adToggleByType("ArticleBody"),style:articleStyle,isBest:isBest,isService:isService})]}),hasSideBar&&Object(jsx_runtime.jsx)(Sidebar.a,{sections:article.sections,sidebar:article.sidebar,configuration:configuration,adTargeting:jsGlobals.adTargeting,article:article,isBest:isBest})]})]}),isBest&&configuration.trackonomics&&Object(jsx_runtime.jsx)(Ads_Trackonomics,{cleanAmp:cleanAmp,config:configuration.trackonomics})]})};Article.propTypes={className:prop_types_default.a.any,req:prop_types_default.a.object.isRequired,article:prop_types_default.a.object.isRequired,jsGlobals:prop_types_default.a.object.isRequired,configuration:prop_types_default.a.object.isRequired,cleanAmp:prop_types_default.a.bool.isRequired},Article.__docgenInfo={description:"",methods:[],displayName:"Article",props:{className:{type:{name:"any"},required:!1,description:""},req:{type:{name:"object"},required:!0,description:""},article:{type:{name:"object"},required:!0,description:""},jsGlobals:{type:{name:"object"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},cleanAmp:{type:{name:"bool"},required:!0,description:""}}};__webpack_exports__.default=Object(RequestProvider.withRequest)(Article);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/pages/Article.js"]={name:"Article",docgenInfo:Article.__docgenInfo,path:"app/component/pages/Article.js"})},256:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Ad=__webpack_require__(161),react=__webpack_require__(4),RequestProvider=__webpack_require__(8),config_config=__webpack_require__(164);const ConfigProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{const adProps=Object.keys(Ad.a.propTypes),config=config_config.a.getConfig();return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),config:{vendors:{...config.indexExchange?{indexexchange:{SITE_ID:config.indexExchange.siteId}}:{},...config.criteo?{criteo:{LINE_ITEM_RANGES:config.criteo.lineItemRanges,NETWORK_ID:config.criteo.networkId}}:{}},urls:["https://esi.amp.permutive.com/rtc?type=doubleclick"],timeoutMillis:750}})});const AmpStickyAd=({children:children})=>Object(jsx_runtime.jsx)("amp-sticky-ad",{layout:"nodisplay",children:children});AmpStickyAd.propTypes={children:prop_types_default.a.element},AmpStickyAd.__docgenInfo={description:"",methods:[],displayName:"AmpStickyAd",props:{children:{type:{name:"element"},required:!1,description:""}}};var StickyAd=AmpStickyAd;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/StickyAd.js"]={name:"AmpStickyAd",docgenInfo:AmpStickyAd.__docgenInfo,path:"app/component/library/AMP/StickyAd.js"});const TargetingJSONProviderWithRequest=Object(RequestProvider.withRequest)(({children:children,...props})=>{var _ref,_article$hero,_article$hero$,_article$hero2,_article$hero2$;const adProps=Object.keys(Ad.a.propTypes),{article:article,section:section,jsGlobals:{topictags:topictags}={}}=props.res.locals;return Object(react.cloneElement)(children,{...adProps.reduce((acc,key)=>({...acc,[key]:props[key]}),{}),json:{targeting:{tile:props.id,gs_channels:(null==article?void 0:article.grapeshot)||(null==section?void 0:section.grapeshot)||[],docFormat:"amp",pagetype:"section",topictags:topictags,...article?{article:null===(_ref=article.remoteId||article.id)||void 0===_ref?void 0:_ref.replace(/\D/g,""),pagetype:"jw_player"===(null===(_article$hero=article.hero)||void 0===_article$hero||null===(_article$hero$=_article$hero[0])||void 0===_article$hero$?void 0:_article$hero$.type)?"video":(null===(_article$hero2=article.hero)||void 0===_article$hero2||null===(_article$hero2$=_article$hero2[0])||void 0===_article$hero2$?void 0:_article$hero2$.type)||""}:{}}}})});const Wrapper=styled_components_browser_esm.default.div`
  max-width: 100%;
`,AdIndex=styled_components_browser_esm.default.div`
  display: none;
`,AugmentedAmpAd=(WrappedComponent=>{const WrappedComponentWithAMPSickyAd=({ampStickyAd:ampStickyAd,...props})=>ampStickyAd?Object(jsx_runtime.jsx)(StickyAd,{children:Object(jsx_runtime.jsx)(WrappedComponent,{...props})}):Object(jsx_runtime.jsx)(WrappedComponent,{...props});return WrappedComponentWithAMPSickyAd.propTypes={...WrappedComponent.propTypes},WrappedComponentWithAMPSickyAd})((WrappedComponent=>props=>Object(jsx_runtime.jsx)(TargetingJSONProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))((WrappedComponent=Ad.a,props=>Object(jsx_runtime.jsx)(ConfigProviderWithRequest,{...props,children:Object(jsx_runtime.jsx)(WrappedComponent,{})}))));var WrappedComponent;const Ad_Ad=props=>{const{cleanAmp:cleanAmp,id:id,className:className,refreshAtIndex:refreshAtIndex,refreshStateId:refreshStateId,sizes:sizes,height:height,width:width,isVideo:isVideo,ampSizes:ampSizes,adUnitPathArr:adUnitPathArr,ampStickyAd:ampStickyAd,ampRefresh:ampRefresh,ampSizeValidation:ampSizeValidation}=props;return Object(jsx_runtime.jsx)(Wrapper,{className:className,children:cleanAmp?Object(jsx_runtime.jsx)(AugmentedAmpAd,{id:id,width:width,height:height,type:"doubleclick",dataSlot:"/"+adUnitPathArr.join("/"),"data-multi-size":ampSizes,ampSizeValidation:ampSizeValidation,ampStickyAd:ampStickyAd,ampSizes:ampSizes,ampRefresh:ampRefresh}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[refreshStateId&&Object(jsx_runtime.jsx)(AdIndex,{id:id+"_adIndex","amp-bind-text":`floor(${refreshStateId}.currentIndex / ${refreshAtIndex})`}),Object(jsx_runtime.jsx)("div",{"data-mpu":!0,"data-is-video":isVideo,"data-tile-name":id,"data-ad-unit-path":"/"+adUnitPathArr.join("/"),"data-sizes":sizes,"data-desktop-sizes":props["desktop-sizes"],"data-tablet-sizes":props["tablet-sizes"],"data-mobile-sizes":props["mobile-sizes"],"data-size-key":props["size-key"],"data-refresh-check":!!refreshStateId,"data-force-bulk":props["force-bulk"]})]})})};Ad_Ad.propTypes={className:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool,id:prop_types_default.a.string.isRequired,sizes:prop_types_default.a.string,"desktop-sizes":prop_types_default.a.string,"tablet-sizes":prop_types_default.a.string,"mobile-sizes":prop_types_default.a.string,"size-key":prop_types_default.a.string,refreshAtIndex:prop_types_default.a.number,refreshStateId:prop_types_default.a.string,height:prop_types_default.a.number,width:prop_types_default.a.number,isVideo:prop_types_default.a.bool,"force-bulk":prop_types_default.a.bool,ampSizes:prop_types_default.a.string,ampRefresh:prop_types_default.a.number,adUnitPathArr:prop_types_default.a.arrayOf(prop_types_default.a.string).isRequired,ampStickyAd:prop_types_default.a.bool,ampSizeValidation:prop_types_default.a.bool},Ad_Ad.defaultProps={cleanAmp:!1,refreshAtIndex:1,height:250,width:300,ampStickyAd:!1,ampSizeValidation:!0,isVideo:!1},Ad_Ad.__docgenInfo={description:"",methods:[],displayName:"Ad",props:{cleanAmp:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},refreshAtIndex:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"250",computed:!1},type:{name:"number"},required:!1,description:""},width:{defaultValue:{value:"300",computed:!1},type:{name:"number"},required:!1,description:""},ampStickyAd:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ampSizeValidation:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},isVideo:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},id:{type:{name:"string"},required:!0,description:""},sizes:{type:{name:"string"},required:!1,description:""},"desktop-sizes":{type:{name:"string"},required:!1,description:""},"tablet-sizes":{type:{name:"string"},required:!1,description:""},"mobile-sizes":{type:{name:"string"},required:!1,description:""},"size-key":{type:{name:"string"},required:!1,description:""},refreshStateId:{type:{name:"string"},required:!1,description:""},"force-bulk":{type:{name:"bool"},required:!1,description:""},ampSizes:{type:{name:"string"},required:!1,description:""},ampRefresh:{type:{name:"number"},required:!1,description:""},adUnitPathArr:{type:{name:"arrayOf",value:{name:"string"}},required:!0,description:""}}};__webpack_exports__.default=Ad_Ad;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Ads/Ad.js"]={name:"Ad",docgenInfo:Ad_Ad.__docgenInfo,path:"app/component/library/Ads/Ad.js"})},258:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"More",type:"More",labelText:"More",labelLink:"/news",linkTitle:"More",linkUrl:"/news"})},259:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28"><path d="M16.8 14L28 25.2 25.2 28 14 16.8 2.9 28 0 25.2 11.2 14 0 2.8 2.9 0 14 11.2 25.2 0 28 2.8 16.8 14z"/></svg>\n'},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return sectionColours})),__webpack_require__.d(__webpack_exports__,"e",(function(){return themes})),__webpack_require__.d(__webpack_exports__,"a",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"c",(function(){return device})),__webpack_require__.d(__webpack_exports__,"b",(function(){return breakPoints}));var styled_components_browser_esm=__webpack_require__(2);const themes={default:{fontFamily:{primaryFont:"'Standard Text', serif",secondaryFont:"'Standard Sans', sans-serif",insiderDisplay:"GTSectraDisplay",insiderFine:"GTSectraFine",insiderSectra:"GTSectra",insiderCapsule:"StandardSansCond",standardDisplay:"Standard Display"},fontImports:"\n // Standard Text\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-RegularWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n   @font-face {\n    font-family: 'Standard Text';\n    font-weight: 500;\n    font-style: normal;\n    src: url('/fonts/StandardText-MediumWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-ItalicWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldWEB.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Standard Text';\n    src: url('/fonts/StandardText-BoldItalicWEB.woff2') format('woff2');\n    font-weight: bold;\n    font-style: italic;\n  }\n  // Standard Sans\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: normal;\n    src: url('/fonts/StandardSans-RegularWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 500;\n    font-style: normal;\n    src: url('/fonts/StandardSans-MediumWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: bold;\n    font-style: normal;\n    src: url('/fonts/StandardSans-BoldWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2');\n    /*unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 900;\n    font-style: normal;\n    src: url('/fonts/StandardSans-ExtraboldWEB.woff2') format('woff2');\n    /*unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;*/\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: normal;\n    src: url('/fonts/StandardSans-LightWEB.woff2') format('woff2');\n  }\n  @font-face {\n    font-family: 'Standard Sans';\n    font-weight: normal;\n    font-style: italic;\n    src: url('/fonts/StandardSans-ItalicWEB.woff2') format('woff2');\n  }\n   @font-face {\n    font-family: 'Standard Sans';\n    font-weight: 300;\n    font-style: italic;\n    src: url('/fonts/StandardSans-LightItalicWEB.woff2') format('woff2');\n  }\n  // GTSectraDisplay\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Medium-Italic.woff2') format('woff2');\n    font-weight: 500;\n    font-style: italic;\n  }\n  @font-face {\n    font-family: 'GTSectraDisplay';\n    src: url('/fonts/GT-Sectra-Display-Bold.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n  // GTSectraFine\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Regular.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectraFine';\n    src: url('/fonts/GT-Sectra-Fine-Bold.woff2') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n  font-family: 'GTSectra';\n  src: url('/fonts/GT-Sectra-Regular.woff2') format('woff2');\n  font-weight: normal;\n  font-style: normal;\n }\n\n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-style: normal;\n  }\n  \n  @font-face {\n    font-family: 'GTSectra';\n    src: url('/fonts/GT-Sectra-Bold.woff2') format('woff2');\n    font-weight: 700;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-RegularWEB.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'StandardSansCond';\n    src: url('/fonts/StandardSansCond-LightWEB.woff2') format('woff2');\n    font-weight: 300;\n    font-style: normal;\n  }\n  // Standard Display Bold\n   @font-face {\n    font-family: 'Standard Display';\n    src: url('/fonts/StandardDisplay-Bold.woff2') format('woff2');\n    font-weight: bold;\n    font-style: normal;\n  }\n",fontSize:{list:"14px",insiderCapsule:"16px"},fontWeight:{thin:300,normal:500,bold:700,black:900},color:{primary:"#dc062b",secondary:"#111",headlineBg:"#f29100",divider:"#f5f5f5",hover:"#b00522",fontTitle:"#3A3A3A",fontCapsule:"#8f8f8e",fontMedium:"#4b4b49",contrastLight:"#FFF",contrastLightHover:"#f8cdd5",contrastGrey:"#d6d6d6",contrastDark:"#202020",contrastDarker:"#1e1e1c",icons:"#787877",bgGrey:"#ececec",formGrey:"#bcbcbb",formFocus:"#276fbf",formSuccess:"#157f1f",formError:"#a20021",navGrey:"#e9e9e8",standardGrey:"#bdbdbd",standardBlue:"#303f9f",galleryDarkGrey:"#4b4b49",galleryBlack:"#353533",greyscaleGrey:"#fbfbfa"}}},sectionColours={news:"303F9F",showbiz:"EC2327",go:"F70A9A",lifestyle:"00ABE6",sport:"F29100",fashion:"822081",shopping:"FF59C6",business:"A21043",comment:"00A9C0",insider:"AE7F87",reveller:"B81451",escapist:"FFD400",tech:"E6007D",culture:"0E5029"},breakPoints={mobileS:320,mobileM:375,mobileL:425,tabletS:595,tablet:768,laptop:1e3,desktop:2560},minWidth=val=>`(min-width: ${val}px)`,maxWidth=val=>`(max-width: ${val-1}px)`,device={mobileS:minWidth(breakPoints.mobileS),mobileM:minWidth(breakPoints.mobileM),mobileL:minWidth(breakPoints.mobileL),tabletS:minWidth(breakPoints.tabletS),tablet:minWidth(breakPoints.tablet),laptop:minWidth(breakPoints.laptop),desktop:minWidth(breakPoints.desktop),maxMobileS:maxWidth(breakPoints.mobileS),maxMobileM:maxWidth(breakPoints.mobileM),maxMobileL:maxWidth(breakPoints.mobileL),maxTabletS:maxWidth(breakPoints.tabletS),maxTablet:maxWidth(breakPoints.tablet),maxLaptop:maxWidth(breakPoints.laptop),maxDesktop:maxWidth(breakPoints.desktop),adBreakpointMedium:"(min-width: 1300px)",adBreakpointLarge:"(min-width: 1600px)"},GlobalStyles=styled_components_browser_esm.createGlobalStyle`
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
    font-family: ${props=>props.theme.fontFamily.secondaryFont};
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
`},328:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return NewslettersConfig}));const NewslettersConfig={"standard.co.uk":{_es_news_benefits:{regSourceNewsletter:"_ES_news_Benefits",section:"ES NEWS",title:"ES NEWS",description:"The biggest and best news stories from London and around the world emailed to you every day. Evening Standard News email features the top five stories of the day plus a collection of articles selected just for you.",label:"From breaking news to in-depth investigations and exclusives - be the first to know about the stories that really matter.",type:"news",regTitle:"NEWS",imageSrc:"/img/es-news-newsletter.png"},_es_food_benefits:{regSourceNewsletter:"_ES_food_Benefits",section:"ES FOOD",title:"ES FOOD",description:"Sign up to our Evening Standard Food newsletter for the latest restaurant news and reviews, recipes and food trends from London and beyond.",label:"We we'll deliver the tastiest content direct to your inbox every Tuesday lunchtime, from bars to brasseries, burgers and Burgundy.",type:"news",regTitle:"FOOD",imageSrc:"/img/es-food-news.png"},_es_weekender_benefits:{regSourceNewsletter:"_ES_weekender_Benefits",section:"ES WEEKENDER",title:"ES WEEKENDER",description:"Sign up to our Weekender newsletter for the latest competitions, offers and giveaways from Evening Standard.",label:"Every Thursday, we bring you a newsletter packed with opportunities to win top prizes - from holidays and theatre tickets to exclusive experiences, plus offers from your favourite brands.",type:"news",regTitle:"WEEKENDER",imageSrc:"/img/es-weekender-news.png"},_es_football_benefits:{regSourceNewsletter:"_ES_football_Benefits",section:"ES FOOTBALL",title:"ES FOOTBALL",description:"Receive the top football news from inside the capital every Monday and Friday with Evening Standard's football news update.",label:"Evening Standard Football tackles the talking points from London's biggest football stories, bringing you closer to the action with a brand you can trust. Live, comment, discussion and debate. We've got the whole game covered.",type:"news",regTitle:"FOOTBALL",imageSrc:"/img/es-football-news.png"},_es_lifestyle_benefits:{regSourceNewsletter:"_ES_lifestyle_Benefits",section:"ES LIFESTYLE",title:"ES LIFESTYLE",description:"Get the latest fashion, food, fitness and travel updates straight to your inbox every Monday from Evening Standard Lifestyle team.",label:"With interviews, trends, galleries and shoppable guides all included - The Lifestyle Edit is your way to stay in the know. </br> See you next Monday!",type:"news",regTitle:"LIFESTYLE",imageSrc:"/img/es-lifestyle-news.png"},_es_insider_benefits:{regSourceNewsletter:"_ES_Insider_Benefits",section:"ES INSIDER",title:"ES INSIDER",description:"The inside track on the coolest people, the most exclusive places and the hottest new luxury launches delivered straight to your inbox.",label:"With royal news, interviews and celebrity lifestyle trends, our dedicated trans-Atlantic team will help you stay ahead of the curve on all things VIP.",type:"news",regTitle:"",imageSrc:"/img/es-insider-news.png"}}}},329:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"2 articles",type:"ArticleX2",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX2 article 2",heroType:"video",live:!0}),...articleOverrides}]})},330:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"4 articles",type:"ArticleX4",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 1"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 2"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 3",heroType:"video"}),...articleOverrides},{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"ArticleX4 article 4",heroType:"video"}),...articleOverrides}]})},331:function(module,__webpack_exports__,__webpack_require__){"use strict";var _article__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);__webpack_exports__.a=articleOverrides=>({name:"Hero Article",type:"HeroArticle",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(_article__WEBPACK_IMPORTED_MODULE_0__.a)({title:"Hero article headline"}),...articleOverrides}]})},332:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=()=>({name:"Title",type:"Title",labelText:"This is a section title component",labelLink:null,commercialBadgeTerm:null,commercialBadgeImage:null,commercialBadgeLink:null})},333:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return size})),__webpack_require__.d(__webpack_exports__,"a",(function(){return publicationConfig}));var _constants_publication__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(130),_theme_Styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);const fullBanner=[970,250],tabletBanner=[728,90],mobileBanner=[320,50],gutterSmall=[120,600],gutterMedium=[160,600],doubleMPU=[300,600],singleMPU=[300,250],thirdParty=[280,290],thirdParty1x1=[1,1],DOUBLE_OR_SINGLES_MPU={from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[singleMPU,doubleMPU],conditionalAd:{if:singleMPU,then:singleMPU,tileNameExtra:"_bottom"}},size={TOP_BANNER:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[fullBanner,tabletBanner]}],BOTTOM_BANNER:[{from:0,supportedSizes:[mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner,mobileBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],GUTTER:[{from:0,supportedSizes:[gutterSmall]},{from:1300,supportedSizes:[gutterSmall,gutterMedium]},{from:1600,supportedSizes:[gutterSmall,gutterMedium,doubleMPU]}],SKIN:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[[4,4]]}],PARTNERADS:[{from:0,supportedSizes:[[245,210]]}],SINGLE_MPU:[{from:0,supportedSizes:[singleMPU]}],SINGLE_MPU_ONLY_MOBILE:[{from:0,supportedSizes:[singleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],SINGLE_MPU_ONLY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU]}],DOUBLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]}],DOUBLE_OR_SINGLE_MPU:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],DOUBLE_MPU_EXTRA:[{from:0,supportedSizes:[singleMPU,doubleMPU]},DOUBLE_OR_SINGLES_MPU],DOUBLE_MPU_EXTRA_NOT_MOBILE:[{from:0,supportedSizes:[singleMPU]},DOUBLE_OR_SINGLES_MPU],THIRD_PARTY:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_NOT_MOBILE:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[thirdParty]}],THIRD_PARTY_ARTICLE_BODY:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],THIRD_PARTY_ARTICLE_BODY_MOBILE:[{from:0,supportedSizes:[singleMPU,thirdParty1x1]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[]}],THIRD_PARTY_ARTICLE_BODY_DESKTOP:[{from:0,supportedSizes:[]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[singleMPU,thirdParty1x1]}],GALLERY_MPU:[{from:0,supportedSizes:[]},{...DOUBLE_OR_SINGLES_MPU,from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop}],INSIDER_BANNER:[{from:0,supportedSizes:[singleMPU,doubleMPU]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,supportedSizes:[tabletBanner]},{from:_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.laptop,supportedSizes:[tabletBanner,fullBanner]}]},publicationConfig=(_theme_Styles__WEBPACK_IMPORTED_MODULE_1__.b.tablet,{[_constants_publication__WEBPACK_IMPORTED_MODULE_0__.a]:{networkId:"71347885",adUnitHomepage:"_main_eveningstandard",thirdPartyUnitHomepage:"_partner_eveningstandard"}})},335:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return pageTitle}));var ramda__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(182),ramda__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88);const pageTitle=({article:article,section:section},siteName)=>{const title=Object(ramda__WEBPACK_IMPORTED_MODULE_0__.a)("title",article);if(title)return title+" | "+siteName;const sectionName=Object(ramda__WEBPACK_IMPORTED_MODULE_1__.a)(["section","name"])(section);return sectionName?sectionName+" | "+siteName:void 0===article&&void 0===section?"Page not found | "+siteName:siteName}},336:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_config_theme_Styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_Ad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(256),_MPU__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div`
  height: auto;
  padding: 0;
  width: 100%;
`,TopBanner=({className:className,...rest})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper,{className:className,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MPU__WEBPACK_IMPORTED_MODULE_4__.a,{id:"top_banner","size-key":"TOP_BANNER","force-bulk":!0,...rest})}),{id:id,adUnitPathArr:adUnitPathArr,...TopBannerPropTypes}=_Ad__WEBPACK_IMPORTED_MODULE_3__.default.propTypes;TopBanner.propTypes={...TopBannerPropTypes};const StyledTopBanner=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(TopBanner)`
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
`;__webpack_exports__.a=StyledTopBanner},337:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),moment_timezone__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(319),moment_timezone__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const FormattedDate=({date:date,width:width,height:height})=>{const unixDate=moment_timezone__WEBPACK_IMPORTED_MODULE_1___default.a.unix(date),formattedDate=unixDate.tz("Europe/London").format("DD MMMM YYYY"),dateStr=unixDate.toISOString();return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("amp-timeago",{datetime:dateStr,cutoff:604800,locale:"en",width:width,height:height||"18",children:formattedDate})};FormattedDate.propTypes={date:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,width:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,height:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number},FormattedDate.__docgenInfo={description:"",methods:[],displayName:"FormattedDate",props:{date:{type:{name:"string"},required:!0,description:""},width:{type:{name:"number"},required:!1,description:""},height:{type:{name:"number"},required:!1,description:""}}},__webpack_exports__.a=FormattedDate,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Embeds/FormattedDate.js"]={name:"FormattedDate",docgenInfo:FormattedDate.__docgenInfo,path:"app/component/library/Article/Embeds/FormattedDate.js"})},338:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g transform="translate(-0.875000, 0.000000)" fill-rule="nonzero">\n      <circle stroke-width="2" cx="20.875" cy="20" r="19" fill="none"></circle>\n      <path d="M21.784,11.821 C26.797,11.821 30.875,15.087 30.875,19.103 C30.875,23.573 26.198,26.34 21.866,26.34 C20.5157322,26.3186946 19.1740384,26.1210208 17.875,25.752 C16.6845754,26.5230061 15.3694046,27.0816239 13.988,27.403 C14.4692648,26.1707668 14.6565573,24.8432844 14.535,23.526 C13.3718451,22.3456178 12.7118911,20.7600792 12.694,19.103 C12.694,15.089 16.771,11.824 21.784,11.824 L21.784,11.821 Z M21.784,10.003 C16.022,10.003 10.875,13.845 10.875,19.103 C10.8795758,20.9726004 11.5379197,22.7817195 12.736,24.217 C12.786,25.878 11.806,28.265 10.924,30.003 C13.4403283,29.591776 15.8831076,28.8152477 18.175,27.698 C19.3823722,27.9969519 20.6211759,28.1503756 21.865,28.155 C28.305,28.155 32.692,23.755 32.692,19.1 C32.692,13.817 27.508,10 21.782,10 L21.784,10.003 Z M18.602,19.094 C18.6019999,19.6457775 18.2695636,20.1432045 17.759749,20.3542671 C17.2499343,20.5653296 16.6631752,20.4484482 16.2731527,20.0581395 C15.8831302,19.6678309 15.7666792,19.0809862 15.9781156,18.5713265 C16.189552,18.0616668 16.6872227,17.7295955 17.239,17.73 C17.6006634,17.7299999 17.9474994,17.8737385 18.2031403,18.1295669 C18.4587811,18.3853954 18.6022653,18.7323367 18.602,19.094 Z M21.784,17.73 C21.0306836,17.73 20.42,18.3406836 20.42,19.094 C20.42,19.8473164 21.0306836,20.458 21.784,20.458 C22.5373164,20.458 23.148,19.8473164 23.148,19.094 C23.148,18.7322447 23.0042933,18.385306 22.7484936,18.1295064 C22.492694,17.8737067 22.1457553,17.73 21.784,17.73 Z M26.329,17.73 C25.5756836,17.73 24.965,18.3406836 24.965,19.094 C24.965,19.8473164 25.5756836,20.458 26.329,20.458 C27.0823164,20.458 27.693,19.8473164 27.693,19.094 C27.6930002,18.341074 27.0829258,17.730552 26.33,17.73 L26.329,17.73 Z"></path>\n  </g>\n</svg>\n'},339:function(module,__webpack_exports__,__webpack_require__){"use strict";var _collection__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65);const commonProps={width:_collection__WEBPACK_IMPORTED_MODULE_0__.j,height:_collection__WEBPACK_IMPORTED_MODULE_0__.b,layout:_collection__WEBPACK_IMPORTED_MODULE_0__.d,sizes:_collection__WEBPACK_IMPORTED_MODULE_0__.i,heights:_collection__WEBPACK_IMPORTED_MODULE_0__.c,media:_collection__WEBPACK_IMPORTED_MODULE_0__.e,placeholder:_collection__WEBPACK_IMPORTED_MODULE_0__.h,fallback:_collection__WEBPACK_IMPORTED_MODULE_0__.a,noloading:_collection__WEBPACK_IMPORTED_MODULE_0__.f,on:_collection__WEBPACK_IMPORTED_MODULE_0__.g};__webpack_exports__.a=commonProps},340:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(908),_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);const AmpState=({id:id,json:json})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_brightsites_flow_core_lib_component_amp_State__WEBPACK_IMPORTED_MODULE_1___default.a,{id:id,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(json)}})});AmpState.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,json:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},AmpState.__docgenInfo={description:"",methods:[],displayName:"AmpState",props:{id:{type:{name:"string"},required:!0,description:""},json:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.a=AmpState,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/AMP/State.js"]={name:"AmpState",docgenInfo:AmpState.__docgenInfo,path:"app/component/library/AMP/State.js"})},341:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<?xml version="1.0" encoding="UTF-8"?>\n  <svg version="1.1" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">\n    <defs>\n      <filter id="a" x="-22.2%" y="-16.7%" width="144.4%" height="144.4%">\n        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>\n        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/>\n        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>\n        <feMerge>\n          <feMergeNode in="shadowMatrixOuter1"/>\n          <feMergeNode in="SourceGraphic"/>\n        </feMerge>\n      </filter>\n    </defs>\n  <g fill="none" fill-rule="evenodd">\n    <g transform="translate(-985 -14770)">\n      <g transform="translate(220 14716)">\n        <g transform="translate(762 49)">\n          <g transform="translate(8 8)" filter="url(#a)">\n            <polygon id="b" points="12 7.5 12 28.5 28.5 18" fill="#fff" fill-rule="nonzero"/>\n            <polygon points="0 0 36 0 36 36 0 36"/>\n            <circle cx="18" cy="18" r="18" opacity=".5" stroke="#fff" stroke-width="2"/>\n          </g>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n'},342:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Frame__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(128);const ConditionalFrame=props=>{const{req:req,children:children,className:className}=props,noframe=req&&Object.prototype.hasOwnProperty.call(req.query,"noframe");return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:noframe?children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Frame__WEBPACK_IMPORTED_MODULE_4__.a,{className:className,children:children})})};ConditionalFrame.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(ConditionalFrame))``},343:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={"United Kingdom":"^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$",Ireland:"[A-Za-z0-9 -_]*","United States of America":"(^\\d{5}(?: [-\\s]\\d{4})?$)",Australia:"[A-Za-z0-9 -_]*",Canada:"[A-Za-z0-9 -_]*",Afghanistan:"[A-Za-z0-9 -_]*",Albania:"[A-Za-z0-9 -_]*",Algeria:"[A-Za-z0-9 -_]*","American Samoa":"[A-Za-z0-9 -_]*",Andorra:"[A-Za-z0-9 -_]*",Angola:"^$",Anguilla:"[A-Za-z0-9 -_]*",Antarctica:"[A-Za-z0-9 -_]*","Antigua and Barbuda":"^$",Argentina:"[A-Za-z0-9 -_]*",Armenia:"[A-Za-z0-9 -_]*",Aruba:"^$",Austria:"[A-Za-z0-9 -_]*",Azerbaijan:"[A-Za-z0-9 -_]*",Bahamas:"^$",Bahrain:"[A-Za-z0-9 -_]*",Bangladesh:"[A-Za-z0-9 -_]*",Barbados:"[A-Za-z0-9 -_]*",Belarus:"[A-Za-z0-9 -_]*",Belgium:"[A-Za-z0-9 -_]*",Belize:"^$",Benin:"^$",Bermuda:"[A-Za-z0-9 -_]*",Bhutan:"[A-Za-z0-9 -_]*",Bolivia:"^$","Bosnia and Herzegovina":"[A-Za-z0-9 -_]*",Botswana:"^$","Bouvet Island":"[A-Za-z0-9 -_]*",Brazil:"[A-Za-z0-9 -_]*","British Indian Ocean Territory":"[A-Za-z0-9 -_]*","Brunei Darussalam":"[A-Za-z0-9 -_]*",Bulgaria:"[A-Za-z0-9 -_]*","Burkina Faso":"^$",Burundi:"^$",Cambodia:"[A-Za-z0-9 -_]*",Cameroon:"^$","Cape Verde":"[A-Za-z0-9 -_]*","Cayman Islands":"[A-Za-z0-9 -_]*","Central African Republic":"^$",Chad:"[A-Za-z0-9 -_]*",Chile:"[A-Za-z0-9 -_]*",China:"[A-Za-z0-9 -_]*","Christmas Island":"[A-Za-z0-9 -_]*","Cocos (Keeling) Islands":"[A-Za-z0-9 -_]*",Colombia:"[A-Za-z0-9 -_]*",Comoros:"^$",Congo:"^$","Congo, The Democratic Republic of The":"^$","Cook Islands":"^$","Costa Rica":"[A-Za-z0-9 -_]*","Cote D’Ivoire":"^$",Croatia:"[A-Za-z0-9 -_]*",Cuba:"[A-Za-z0-9 -_]*",Cyprus:"[A-Za-z0-9 -_]*","Czech Republic":"[A-Za-z0-9 -_]*",Denmark:"[A-Za-z0-9 -_]*",Djibouti:"^$",Dominica:"^$","Dominican Republic":"[A-Za-z0-9 -_]*","Easter Island":"[A-Za-z0-9 -_]*",Ecuador:"[A-Za-z0-9 -_]*",Egypt:"[A-Za-z0-9 -_]*","El Salvador":"[A-Za-z0-9 -_]*","Equatorial Guinea":"^$",Eritrea:"^$",Estonia:"[A-Za-z0-9 -_]*",Ethiopia:"[A-Za-z0-9 -_]*","Falkland Islands (Malvinas)":"[A-Za-z0-9 -_]*","Faroe Islands":"[A-Za-z0-9 -_]*",Fiji:"^$",Finland:"[A-Za-z0-9 -_]*",France:"[A-Za-z0-9 -_]*","French Guiana":"[A-Za-z0-9 -_]*","French Polynesia":"[A-Za-z0-9 -_]*","French Southern Territories":"^$",Gabon:"[A-Za-z0-9 -_]*",Gambia:"^$",Georgia:"[A-Za-z0-9 -_]*",Germany:"[A-Za-z0-9 -_]*",Ghana:"^$",Gibraltar:"[A-Za-z0-9 -_]*",Greece:"[A-Za-z0-9 -_]*",Greenland:"[A-Za-z0-9 -_]*",Grenada:"^$",Guadeloupe:"[A-Za-z0-9 -_]*",Guam:"[A-Za-z0-9 -_]*",Guatemala:"[A-Za-z0-9 -_]*",Guinea:"[A-Za-z0-9 -_]*","Guinea-bissau":"[A-Za-z0-9 -_]*",Guyana:"^$",Haiti:"[A-Za-z0-9 -_]*","Heard Island and Mcdonald Islands":"^$",Honduras:"[A-Za-z0-9 -_]*","Hong Kong":"^$",Hungary:"[A-Za-z0-9 -_]*",Iceland:"[A-Za-z0-9 -_]*",India:"[A-Za-z0-9 -_]*",Indonesia:"[A-Za-z0-9 -_]*",Iran:"[A-Za-z0-9 -_]*",Iraq:"[A-Za-z0-9 -_]*",Israel:"[A-Za-z0-9 -_]*",Italy:"[A-Za-z0-9 -_]*",Jamaica:"[A-Za-z0-9 -_]*",Japan:"[A-Za-z0-9 -_]*",Jordan:"[A-Za-z0-9 -_]*",Kazakhstan:"[A-Za-z0-9 -_]*",Kenya:"[A-Za-z0-9 -_]*",Kiribati:"^$","Korea, North":"[A-Za-z0-9 -_]*","Korea, South":"[A-Za-z0-9 -_]*",Kosovo:"[A-Za-z0-9 -_]*",Kuwait:"[A-Za-z0-9 -_]*",Kyrgyzstan:"[A-Za-z0-9 -_]*",Laos:"[A-Za-z0-9 -_]*",Latvia:"[A-Za-z0-9 -_]*",Lebanon:"[A-Za-z0-9 -_]*",Lesotho:"[A-Za-z0-9 -_]*",Liberia:"[A-Za-z0-9 -_]*","Libyan Arab Jamahiriya":"^$",Liechtenstein:"[A-Za-z0-9 -_]*",Lithuania:"[A-Za-z0-9 -_]*",Luxembourg:"[A-Za-z0-9 -_]*",Macau:"^$",Macedonia:"[A-Za-z0-9 -_]*",Madagascar:"[A-Za-z0-9 -_]*",Malawi:"^$",Malaysia:"[A-Za-z0-9 -_]*",Maldives:"[A-Za-z0-9 -_]*",Mali:"^$",Malta:"[A-Za-z0-9 -_]*","Marshall Islands":"[A-Za-z0-9 -_]*",Martinique:"[A-Za-z0-9 -_]*",Mauritania:"^$",Mauritius:"[A-Za-z0-9 -_]*",Mayotte:"[A-Za-z0-9 -_]*",Mexico:"[A-Za-z0-9 -_]*","Micronesia, Federated States of":"[A-Za-z0-9 -_]*","Moldova, Republic of":"[A-Za-z0-9 -_]*",Monaco:"[A-Za-z0-9 -_]*",Mongolia:"[A-Za-z0-9 -_]*",Montenegro:"[A-Za-z0-9 -_]*",Montserrat:"[A-Za-z0-9 -_]*",Morocco:"[A-Za-z0-9 -_]*",Mozambique:"[A-Za-z0-9 -_]*",Myanmar:"[A-Za-z0-9 -_]*",Namibia:"[A-Za-z0-9 -_]*",Nauru:"^$",Nepal:"[A-Za-z0-9 -_]*",Netherlands:"[A-Za-z0-9 -_]*","Netherlands Antilles":"^$","New Caledonia":"[A-Za-z0-9 -_]*","New Zealand":"[A-Za-z0-9 -_]*",Nicaragua:"[A-Za-z0-9 -_]*",Niger:"[A-Za-z0-9 -_]*",Nigeria:"[A-Za-z0-9 -_]*",Niue:"^$","Norfolk Island":"[A-Za-z0-9 -_]*","Northern Mariana Islands":"[A-Za-z0-9 -_]*",Norway:"[A-Za-z0-9 -_]*",Oman:"[A-Za-z0-9 -_]*",Pakistan:"[A-Za-z0-9 -_]*",Palau:"[A-Za-z0-9 -_]*","Palestinian Territory":"[A-Za-z0-9 -_]*",Panama:"[A-Za-z0-9 -_]*","Papua New Guinea":"[A-Za-z0-9 -_]*",Paraguay:"[A-Za-z0-9 -_]*",Peru:"[A-Za-z0-9 -_]*",Philippines:"[A-Za-z0-9 -_]*",Pitcairn:"[A-Za-z0-9 -_]*",Poland:"[A-Za-z0-9 -_]*",Portugal:"[A-Za-z0-9 -_]*","Puerto Rico":"[A-Za-z0-9 -_]*",Qatar:"^$",Reunion:"[A-Za-z0-9 -_]*",Romania:"[A-Za-z0-9 -_]*",Russia:"[A-Za-z0-9 -_]*",Rwanda:"^$","Saint Helena":"[A-Za-z0-9 -_]*","Saint Kitts and Nevis":"^$","Saint Lucia":"[A-Za-z0-9 -_]*","Saint Pierre and Miquelon":"[A-Za-z0-9 -_]*","Saint Vincent and The Grenadines":"[A-Za-z0-9 -_]*",Samoa:"[A-Za-z0-9 -_]*","San Marino":"[A-Za-z0-9 -_]*","Sao Tome and Principe":"^$","Saudi Arabia":"[A-Za-z0-9 -_]*",Senegal:"[A-Za-z0-9 -_]*","Serbia and Montenegro":"[A-Za-z0-9 -_]*",Seychelles:"^$","Sierra Leone":"^$",Singapore:"[A-Za-z0-9 -_]*",Slovakia:"[A-Za-z0-9 -_]*",Slovenia:"[A-Za-z0-9 -_]*","Solomon Islands":"^$",Somalia:"[A-Za-z0-9 -_]*","South Africa":"[A-Za-z0-9 -_]*","South Georgia and The South Sandwich Islands":"[A-Za-z0-9 -_]*",Spain:"[A-Za-z0-9 -_]*","Sri Lanka":"[A-Za-z0-9 -_]*",Sudan:"[A-Za-z0-9 -_]*",Suriname:"^$","Svalbard and Jan Mayen":"[A-Za-z0-9 -_]*",Swaziland:"[A-Za-z0-9 -_]*",Sweden:"[A-Za-z0-9 -_]*",Switzerland:"[A-Za-z0-9 -_]*",Syria:"^$",Taiwan:"[A-Za-z0-9 -_]*",Tajikistan:"[A-Za-z0-9 -_]*","Tanzania, United Republic of":"[A-Za-z0-9 -_]*",Thailand:"[A-Za-z0-9 -_]*","Timor-Leste":"^$",Togo:"^$",Tokelau:"^$",Tonga:"^$","Trinidad and Tobago":"[A-Za-z0-9 -_]*",Tunisia:"[A-Za-z0-9 -_]*",Turkey:"[A-Za-z0-9 -_]*",Turkmenistan:"[A-Za-z0-9 -_]*","Turks and Caicos Islands":"[A-Za-z0-9 -_]*",Tuvalu:"^$",Uganda:"^$",Ukraine:"[A-Za-z0-9 -_]*","United Arab Emirates":"^$","United States Minor Outlying Islands":"[A-Za-z0-9 -_]*",Uruguay:"[A-Za-z0-9 -_]*",Uzbekistan:"[A-Za-z0-9 -_]*",Vanuatu:"^$","Vatican City":"[A-Za-z0-9 -_]*",Venezuela:"[A-Za-z0-9 -_]*",Vietnam:"[A-Za-z0-9 -_]*","Virgin Islands, British":"[A-Za-z0-9 -_]*","Virgin Islands, U.S.":"[A-Za-z0-9 -_]*","Wallis and Futuna":"[A-Za-z0-9 -_]*","Western Sahara":"[A-Za-z0-9 -_]*",Yemen:"^$",Zambia:"[A-Za-z0-9 -_]*",Zimbabwe:"^$"}},344:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=__webpack_require__(3);var HTML=__webpack_require__(213),MPU=__webpack_require__(25);const Container=styled_components_browser_esm.default.div`
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
`,FeedList=({className:className,src:src,items:items="items",title:title,length:length=5,prefix:prefix})=>Object(jsx_runtime.jsxs)(Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(Headline,{children:title}),Object(jsx_runtime.jsx)("amp-list",{src:src,layout:"fixed-height",width:"auto",height:"370","max-items":length,items:items,children:Object(jsx_runtime.jsx)("template",{type:"amp-mustache",children:Object(jsx_runtime.jsxs)(ListItem,{children:[Object(jsx_runtime.jsxs)(ImageWrapper,{href:"amp-template-link",children:[Object(jsx_runtime.jsx)("amp-img",{src:"amp-template-image",alt:"amp-template-title",layout:"fill"}),prefix&&prefix]}),Object(jsx_runtime.jsx)(Link,{href:"amp-template-link",children:"amp-template-title"})]})})})]});FeedList.propTypes={className:prop_types_default.a.string,src:prop_types_default.a.string.isRequired,items:prop_types_default.a.string,logo:prop_types_default.a.any,title:prop_types_default.a.any,length:prop_types_default.a.number,prefix:prop_types_default.a.any},FeedList.__docgenInfo={description:"",methods:[],displayName:"FeedList",props:{items:{defaultValue:{value:"'items'",computed:!1},type:{name:"string"},required:!1,description:""},length:{defaultValue:{value:"5",computed:!1},type:{name:"number"},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},logo:{type:{name:"any"},required:!1,description:""},title:{type:{name:"any"},required:!1,description:""},prefix:{type:{name:"any"},required:!1,description:""}}};var components_FeedList=FeedList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/components/FeedList.js"]={name:"FeedList",docgenInfo:FeedList.__docgenInfo,path:"app/component/library/Sidebar/components/FeedList.js"});const Indy100=props=>{const{configuration:configuration}=props,src=configuration.feeds.indy100.src,logo=configuration.feeds.indy100.logo;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,logo:logo})};Indy100.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_Indy100=Object(styled_components_browser_esm.default)(Indy100)``;const MostPopular=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,src:src,items:items,title:"MOST POPULAR"})};MostPopular.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_MostPopular=Object(styled_components_browser_esm.default)(MostPopular)``,classnames=__webpack_require__(40),classnames_default=__webpack_require__.n(classnames),play=__webpack_require__(341);const PopularVideos=props=>{const{configuration:configuration,className:className}=props,src=configuration.feeds.videos.src,items=configuration.feeds.videos.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:classnames_default()(className,"popular-videos"),src:src,items:items,title:"POPULAR VIDEOS",length:3,prefix:Object(jsx_runtime.jsx)("span",{className:"play-icon",dangerouslySetInnerHTML:{__html:play.a}})})};PopularVideos.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.object.isRequired};var Sidebar_PopularVideos=Object(styled_components_browser_esm.default)(PopularVideos)`
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
`;const SponsoredFeatures=props=>{const{configuration:configuration}=props,src=configuration.feeds.mmm.src,items=configuration.feeds.mmm.items;return Object(jsx_runtime.jsx)(components_FeedList,{...props,className:"sponsored-features",src:src,items:items,title:"SPONSORED FEATURES",imgWidth:96})};SponsoredFeatures.propTypes={configuration:prop_types_default.a.object.isRequired};var Sidebar_SponsoredFeatures=Object(styled_components_browser_esm.default)(SponsoredFeatures)``,RequestProvider=__webpack_require__(8),Taboola=__webpack_require__(117);const TaboolaAmpWithStyle=Object(styled_components_browser_esm.default)(Taboola.b)`
  @media ${Styles.c.maxTablet} {
    display: none;
  }
`,TaboolaRightRail=({res:{locals:{cleanAmp:cleanAmp}}})=>cleanAmp?Object(jsx_runtime.jsx)(Taboola.a,{id:"taboola-right-rail",width:300,height:300,heights:["(min-width:507px) 324%","(min-width:461px) 338%","(min-width:408px) 351%","(min-width:376px) 368%","(min-width:347px) 385%","399%"],media:""+Styles.c.tablet,mode:"thumbnails-k-amp",placement:"Right Rail Thumbnails"}):Object(jsx_runtime.jsx)(TaboolaAmpWithStyle,{id:"taboola-right-rail"});TaboolaRightRail.propTypes={res:prop_types_default.a.object.isRequired},TaboolaRightRail.__docgenInfo={description:"",methods:[],displayName:"TaboolaRightRail",props:{res:{type:{name:"object"},required:!0,description:""}}};var Sidebar_TaboolaRightRail=Object(RequestProvider.withRequest)(TaboolaRightRail);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Sidebar/TaboolaRightRail.js"]={name:"TaboolaRightRail",docgenInfo:TaboolaRightRail.__docgenInfo,path:"app/component/library/Sidebar/TaboolaRightRail.js"});const Sidebar_Wrapper=styled_components_browser_esm.default.aside`
  flex: 0 0 300px;
  margin-left: 13px;

  @media ${Styles.c.maxLaptop} {
    display: none;
  }
`,componentMapping={MostPopular:Sidebar_MostPopular,indy100:Sidebar_Indy100,PopularVideos:Sidebar_PopularVideos,SponsoredFeatures:Sidebar_SponsoredFeatures};function Sidebar({sidebar:sidebar,configuration:configuration,isBest:isBest,article:article}){var _article$extra;const layout=sidebar.layoutSettings?sidebar.layoutSettings:[],isDisableAllAds=null===(_article$extra=article.extra)||void 0===_article$extra?void 0:_article$extra.isDisableAllAds,isSensitive=null==article?void 0:article.sensitive;let adIndex=0,thirdpartyShown=!1;return Object(jsx_runtime.jsx)(Sidebar_Wrapper,{children:null==layout?void 0:layout.map((comp,i)=>{switch(comp.type){case"Ad":{var _comp$adSource;const id="mpu_bottom_sb_"+adIndex,commonProps={sticky:i===layout.length-1,blockAds:isDisableAllAds||isSensitive};return"partner"!==(null===(_comp$adSource=comp.adSource)||void 0===_comp$adSource?void 0:_comp$adSource.toLowerCase())||thirdpartyShown?(adIndex+=1,1===adIndex?Object(jsx_runtime.jsx)(Ads_Mpu1,{isBest:isBest,...commonProps},"mpu1"):Object(jsx_runtime.jsx)(Sidebar_SidebarAd,{id:id,width:300,height:600,sizes:"120x600|300x250|160x600|300x600",...commonProps},id)):(thirdpartyShown=!0,Object(jsx_runtime.jsx)(Ads_Thirdparty03,{...commonProps},"Thirdparty03"))}case"MostPopular":case"indy100":case"PopularVideos":case"SponsoredFeatures":return Object(react.createElement)(componentMapping[comp.type],{key:comp.type+i,name:comp.name,configuration:configuration});case"Markup":return Object(jsx_runtime.jsx)(HTML.a,{data:comp},comp.type+i);case"Taboola":return isDisableAllAds||isSensitive?null:Object(jsx_runtime.jsx)(Sidebar_TaboolaRightRail,{name:comp.name},comp.type+i);default:return Object(jsx_runtime.jsxs)("p",{style:{color:"red"},children:["Undefined component: ",comp.type]},"undefined"+i)}})})}Sidebar.propTypes={sidebar:prop_types_default.a.object.isRequired,sections:prop_types_default.a.array.isRequired,configuration:prop_types_default.a.object.isRequired,adTargeting:prop_types_default.a.object,isBest:prop_types_default.a.bool,article:prop_types_default.a.object};__webpack_exports__.a=Sidebar},345:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a='\n<svg xmlns="http://www.w3.org/2000/svg" class="masthead" width="327" height="39" viewBox="0 0 336 40" fill="none"><path d="M0 .248h335.227V40H0V.248z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M53.194 17.864v-4.228c0-2.321-.704-3.275-1.865-3.275-1.575 0-2.528 1.948-2.736 7.503h4.601zm21.39-1.658c0-1.949-1.203-2.57-2.488-2.57-.87 0-1.948.456-2.363.747V28.06c0 1.658.622 2.157 1.99 2.405v.456H60.324v-.456c.788-.166 1.824-.705 1.824-2.528V12.682c0-1.824-.498-2.321-1.824-2.57v-.455h9.617l-.249 4.186c1.326-2.487 3.648-4.602 6.84-4.602 2.818 0 5.637 1.328 5.637 6.136v12.56c0 1.367.207 2.238 1.575 2.528v.456H72.966v-.456c.995-.248 1.617-.954 1.617-2.528v-11.73zm11.44-3.524c0-1.367-.415-2.321-1.74-2.57v-.455h9.325v18.28c0 1.326.498 2.362 1.866 2.528v.456H84.159v-.456c1.367-.166 1.865-1.202 1.865-2.528V12.682zm7.793-8.456c0 2.238-1.866 4.022-4.104 4.022-2.239 0-4.062-1.784-4.062-4.022 0-2.196 1.823-3.979 4.062-3.979 2.238 0 4.104 1.783 4.104 3.98zm16.083 11.98c0-1.949-1.203-2.57-2.487-2.57-.871 0-1.949.456-2.364.747V28.06c0 1.658.581 2.157 1.99 2.405v.456h-11.15v-.456c.746-.166 1.575-.705 1.575-2.528V12.682c0-1.824-.497-2.321-1.824-2.57v-.455h9.617l-.249 4.186c1.326-2.487 3.648-4.602 6.84-4.602 2.819 0 5.637 1.328 5.637 6.136v12.56c0 1.367.207 2.238 1.575 2.528v.456h-10.777v-.456c.995-.248 1.617-.954 1.617-2.528v-11.73zm21.098-.124c0-4.022-.456-5.803-1.824-5.803-1.45 0-2.031 1.781-2.031 5.803v.663c0 4.02.581 5.803 2.031 5.803 1.368 0 1.824-1.783 1.824-5.803v-.663zm74.405 11.109c-.705 1.824-3.109 3.979-6.84 3.979-3.896 0-5.015-2.53-5.015-5.016V10.983h-1.865v-.497c2.777-.456 6.797-2.778 8.994-5.182h.456v4.353h4.146v1.326h-4.146v14.549c0 1.41.663 2.239 1.99 2.239.911 0 1.616-.456 1.906-.83l.374.25zm35.192-10.985c0-1.949-1.203-2.57-2.488-2.57-.87 0-1.948.456-2.362.747V28.06c0 1.658.58 2.157 1.989 2.405v.456H226.46v-.456c.788-.166 1.699-.705 1.699-2.528V12.682c0-1.824-.497-2.321-1.824-2.57v-.455h9.617l-.248 4.186c1.326-2.487 3.647-4.602 6.839-4.602 2.819 0 5.637 1.328 5.637 6.136v12.56c0 1.367.207 2.238 1.575 2.528v.456h-10.777v-.456c.995-.248 1.617-.954 1.617-2.528v-11.73zm23.005 9.41c0 1.824-1.575 2.61-2.611 2.61-2.115 0-3.193-1.492-3.193-3.937V13.802c0-2.28 1.535-3.233 3.068-3.233 1.327 0 2.736.995 2.736 2.9v12.146zM2.292 5.345c0-1.742-.663-3.192-3.398-3.4v-.703h23.46v7.626h-.787c-2.611-4.31-3.482-6.384-6.217-6.384h-4.436v13.058h1.824c2.985 0 3.897-1.286 5.389-4.892h.663v10.943h-.663c-1.492-3.606-2.404-4.89-5.389-4.89h-1.824v10.694c0 1.492.54 2.28 2.777 2.28h1.244c4.311 0 5.554-2.86 8.332-7.586h.746l-.83 8.829h-24.29v-.704c2.736-.207 3.4-1.658 3.4-3.4V5.345zM273.175 30.92v-.456c-1.782-.29-1.99-1.16-1.99-2.528V1.243h-9.865v.538c2.031.249 2.28.332 2.28 1.451v7.626c-.746-.87-2.446-1.617-4.643-1.617-4.559 0-9.285 3.566-9.285 11.442 0 7.295 3.192 10.735 7.793 10.735 3.482 0 5.43-2.113 6.135-3.606v3.109h9.575zm52.478-5.306c0 1.825-1.576 2.612-2.613 2.612-2.113 0-3.191-1.493-3.191-3.938V13.802c0-2.28 1.533-3.233 3.068-3.233 1.326 0 2.736.995 2.736 2.9v12.146zm9.574 5.306v-.456c-1.782-.29-1.99-1.16-1.99-2.528V1.243h-9.865v.538c2.031.249 2.281.332 2.281 1.451v7.626c-.747-.87-2.446-1.617-4.643-1.617-4.56 0-9.285 3.566-9.285 11.442 0 7.295 3.191 10.735 7.793 10.735 3.481 0 5.43-2.113 6.135-3.606v3.109h9.574zm-50.943-3.15v-9.825c-.414 2.198-3.606 2.695-3.606 6.508v.167c0 1.865 1.284 3.233 2.901 3.233.208 0 .457-.042.705-.083zm19.109-12.021V27.19c0 2.03.581 2.86 2.363 3.274v.456h-11.649v-.456c.747-.166 1.7-.705 1.7-2.528V12.682c0-1.367-.497-2.321-1.823-2.57v-.455h9.575c-.166 1.99-.166 3.357-.166 6.093zm8.87-2.529c0 2.238-1.865 4.021-4.103 4.021-2.239 0-4.062-1.783-4.062-4.02 0-2.197 1.823-3.98 4.062-3.98 2.238 0 4.103 1.783 4.103 3.98zm-95.627 14.55v-9.825c-.415 2.198-3.607 2.695-3.607 6.508v.167c0 1.865 1.286 3.233 2.902 3.233.207 0 .456-.042.705-.083zm-97.037-11.399c0-4.393 4.228-7.13 9.534-7.13 1.658 0 3.233.29 4.642.788.58.082 1.12.082 1.658.082 2.073 0 3.979-.414 5.845-1.243v3.607h-.249c-1.078-.125-3.979-1.037-6.01-1.866 2.155 1.285 3.564 3.233 3.564 5.762 0 4.477-4.228 7.253-9.45 7.253-4.891 0-9.534-2.361-9.534-7.253zm4.601 6.26c-.373.33-.663.786-.663 1.367 0 .663.373 1.284 1.907 1.284l8.124.084c5.347.041 6.923 3.025 6.923 5.512 0 6.508-7.462 9.12-12.809 9.12-6.798 0-9.202-2.032-9.202-4.435 0-1.451 1.451-2.943 4.435-2.943.415 0 .788.041 1.244.083l.041.123c-.705.581-1.161 1.452-1.161 2.364 0 1.74 1.658 3.523 6.052 3.523 4.353 0 7.088-1.782 7.088-3.772 0-1.658-1.16-2.363-4.186-2.487l-6.135-.29c-4.477-.207-6.176-2.363-6.176-4.85 0-1.741 1.451-4.022 4.062-4.892l.456.208zm51.773-5.266c-2.363-1.7-4.312-4.061-4.312-7.212 0-5.43 4.809-9.326 11.772-9.326 3.027 0 5.886.705 7.793 1.408l-.206 7.005h-.83c-2.114-4.6-3.564-7.087-6.715-7.087-2.404 0-4.186 1.617-4.186 4.187 0 1.74 1.16 3.19 2.818 4.394l4.436 3.274c3.399 2.487 5.512 4.394 5.512 7.834 0 6.01-5.803 9.534-11.73 9.534-3.731 0-7.213-1.078-8.912-2.031l-.332-7.917h.829c2.57 5.512 4.768 8.621 8.249 8.621 2.321 0 4.145-1.45 4.145-4.186 0-2.114-1.616-3.606-3.731-5.14l-4.6-3.358zM60.241 24.04c-1.12 3.938-4.228 7.337-9.824 7.337-6.383 0-9.865-4.684-9.865-10.113 0-6.84 4.145-12.023 10.943-12.023 4.974 0 8.705 3.068 8.705 9.12v.83H48.593c0 5.47 2.653 7.626 5.596 7.626 1.99 0 4.062-.746 5.596-2.985l.456.208zm166.965 4.726c-1.409 1.492-3.565 2.652-6.259 2.652-2.611 0-3.98-1.201-4.269-2.985-1.079 1.659-2.819 2.944-5.431 2.944-3.315 0-5.638-2.238-5.638-5.389 0-3.772 2.571-5.14 6.675-6.217 3.315-.87 4.518-2.032 4.518-4.56v-.166c0-2.61-2.115-4.31-4.726-4.31a6.53 6.53 0 00-1.948.29c1.907.165 3.482 1.74 3.482 3.647 0 2.073-1.7 3.69-3.814 3.69-1.989 0-3.523-1.576-3.523-3.565 0-3.441 4.684-5.556 9.865-5.556 5.016 0 8.166 1.99 8.166 5.68 0 .042 0 4.891-.083 12.31 0 .87.414 1.576 1.327 1.576.373 0 .871-.124 1.409-.415l.249.374zm67.648 0c-1.409 1.492-3.565 2.652-6.259 2.652-2.612 0-3.979-1.201-4.27-2.985-1.077 1.659-2.818 2.944-5.43 2.944-3.316 0-5.637-2.238-5.637-5.389 0-3.772 2.57-5.14 6.674-6.217 3.316-.87 4.518-2.032 4.518-4.56v-.166c0-2.61-2.114-4.31-4.725-4.31a6.54 6.54 0 00-1.949.29c1.907.165 3.482 1.74 3.482 3.647 0 2.073-1.699 3.69-3.813 3.69-1.99 0-3.524-1.576-3.524-3.565 0-3.441 4.684-5.556 9.866-5.556 5.015 0 8.165 1.99 8.165 5.68 0 .042 0 4.891-.083 12.31 0 .87.415 1.576 1.327 1.576.373 0 .87-.124 1.409-.415l.249.374zM34.997 30.92h-6.134L23.1 13.138c-.621-1.865-1.327-2.736-2.197-3.026v-.455h12.974v.455c-2.238.374-3.109 1.244-2.487 3.275l3.938 12.974 3.233-11.647c.29-1.078.456-1.907.456-2.695 0-1.41-.953-1.74-2.155-1.907v-.455h6.59v.455c-1.16.415-1.99.996-3.15 4.436L34.997 30.92z" fill="#1A1919"/><path fill-rule="evenodd" clip-rule="evenodd" d="M162.637 22.68c.045-.064.067-.13.032-.198a.214.214 0 00-.189-.118c-.032 0-.063-.003-.094 0-.066.003-.109.082-.071.137.078.11.167.207.322.179zM149.378 16.264c-.205-.05-.392-.114-.583-.135a5.46 5.46 0 01-.716-.135.552.552 0 00-.29-.011l.545.316c.02.011.04.027.061.034.038.01.076.023.115.024.266.016.532.004.796-.035.019-.003.035-.028.072-.058zM155.287 14.07c.006.02.006.046.018.065.031.044.065.088.103.128.066.068.103.076.186.023.156-.097.323-.165.497-.213.461-.13.923-.21 1.394-.055.022.008.046.01.07.011.046.004.089-.059.064-.098a.253.253 0 00-.078-.083.772.772 0 00-.363-.092c-.189-.006-.378 0-.567-.008-.392-.018-.765.076-1.134.19-.072.023-.153.045-.19.133zM163.55 17.06c.033-.135.064-.24.085-.347a.175.175 0 00-.021-.112c-.101-.177-.368-.181-.467-.005a.682.682 0 00-.073.388.254.254 0 00.043.108c.122.207.28.378.499.486.071.035.147.06.213.103.132.083.267.163.387.264.157.133.219.321.254.519.009.05-.005.113.077.142.045-.152.075-.3-.011-.445-.089-.148-.172-.3-.275-.438a.942.942 0 00-.349-.31c-.165-.076-.265-.215-.362-.353zM161.063 28.779c-.072.052-.12.079-.154.115a.642.642 0 01-.363.207c-.17.031-.34.063-.512.078-.123.014-.25.004-.374 0-.206-.002-.41-.017-.613-.009a.682.682 0 00-.44.203c-.125.118-.146.224-.027.396.066.096.17.137.291.114.117-.02.181-.086.191-.205.003-.029.016-.058.02-.08a.97.97 0 01.435-.14c.125-.007.251-.018.376-.02.224 0 .437-.042.635-.146.07-.036.128-.097.199-.124.139-.056.226-.168.319-.274.014-.016.008-.052.017-.115zM157.305 19.273c-.027.122.021.2.044.28.048.175.116.345.143.521a.97.97 0 00.138.372c.194.314.389.627.575.946.137.24.252.489.342.753-.098.219-.141.439-.044.679.048-.028.051-.066.061-.104.041-.16.08-.325.199-.447.099-.102.092-.203.048-.323a4.723 4.723 0 00-.421-.84c-.151-.25-.318-.488-.481-.73a3.36 3.36 0 01-.294-.618c-.054-.18-.129-.35-.31-.49zM165.129 12.656a.544.544 0 00.007-.043c-.017-.013-.033-.035-.052-.037-.288-.028-.579-.057-.871-.043-.275.014-.551.024-.825.037-.079.004-.158.008-.236.016-.484.053-.969.1-1.443.224-.319.083-.644.146-.963.224-.497.12-.984.278-1.466.447-.416.146-.827.305-1.24.46a.686.686 0 00-.149.069c-.036.023-.06.063-.094.101.102.11.205.188.332.247l.187-.102c.136-.079.266-.171.409-.234.324-.142.65-.278.983-.403.278-.105.562-.199.848-.284.324-.096.653-.177.979-.265a9.838 9.838 0 011.407-.3c.665-.08 1.332-.13 2.003-.114.06.002.123 0 .184 0zM162.446 22.23c.083.087.194.103.299.13.088.021.172.015.254-.018a.545.545 0 00.264-.732c-.024-.047-.054-.095-.079-.142a.402.402 0 01.016-.426c.071-.112.148-.22.228-.326.15-.196.363-.322.549-.478.263-.221.476-.477.573-.816a.865.865 0 00.001-.396c-.003-.016-.033-.038-.051-.04-.017 0-.047.02-.053.037-.022.067-.033.138-.055.205-.031.098-.048.207-.107.284-.115.147-.237.301-.39.405-.195.133-.373.285-.561.426-.3.224-.544.491-.73.818-.143.251-.205.507-.175.79.009.085.011.17.017.28zM149.489 9.648c-1.68-1.446-2.901-3.192-3.653-5.272-.042.02-.071.03-.093.047-.079.066-.106.156-.108.254-.003.158.013.313.071.464.117.309.258.606.42.895.269.48.535.96.882 1.39.248.306.486.622.748.914.384.428.835.785 1.297 1.127.082.061.164.123.247.18.047.032.097.057.189.001zM149.244 36.328c.029-.063.043-.084.046-.104.016-.132.031-.265.043-.399.021-.22.06-.433.138-.643.117-.316.223-.636.356-.947.137-.317.241-.649.357-.974.081-.228.158-.46.236-.69.116-.343.228-.687.346-1.028.056-.162.14-.315.157-.492.006-.06.037-.12.065-.176a.819.819 0 00.068-.246c.018-.117.058-.228.093-.34.017-.062.051-.116.066-.177.03-.126.037-.25-.038-.364-.023-.034-.047-.064-.105-.042-.057.093-.086.209-.125.319-.03.083-.098.093-.165.032-.236-.22-.343-.503-.388-.814-.015-.11-.033-.217-.05-.325a.241.241 0 00-.136-.19c-.02.039-.051.072-.052.105-.001.141-.001.28.012.422.014.147.054.294.061.44.012.213.005.424.005.636 0 .11.006.22 0 .33-.011.195-.027.39-.042.586-.014.173-.025.345-.046.515-.062.51-.194 1.002-.318 1.497-.073.29-.167.574-.227.867-.066.325-.177.636-.287.947-.109.307-.16.621-.165.945-.001.056-.003.112.01.164.009.042.042.076.085.146zM146.398 11.415a.49.49 0 00-.034.468.783.783 0 00.322.395c.047.027.092.057.121.077.006.136-.009.257.021.366.081.302.159.36.438.358.213-.002.425-.017.637-.024a.891.891 0 00.364-.09c.36-.179.719-.358 1.077-.539.026-.013.044-.038.085-.075-.087-.031-.152-.053-.216-.078-.183-.07-.371-.131-.548-.214-.298-.14-.586-.306-.889-.436a5.816 5.816 0 01-.843-.47 3.705 3.705 0 01-.501-.392 3.17 3.17 0 01-.596-.726.586.586 0 00-.071-.094c-.026-.028-.056-.056-.107-.02-.022.13.024.258.038.389.02.188.093.346.211.49.159.195.313.394.491.615z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M150.339 11.519c.07-.062.043-.102-.011-.139-.343-.236-.687-.47-1.03-.709-.511-.352-1.04-.68-1.5-1.102-.29-.265-.625-.48-.887-.777-.192-.218-.391-.434-.561-.668-.311-.43-.535-.908-.721-1.405a2.298 2.298 0 01-.12-1.275l.015-.094c.029-.165-.081-.299-.102-.454a.184.184 0 00-.118-.15.698.698 0 00-.209.323c-.161.456-.129.919-.006 1.372.132.485.34.945.583 1.386.034.06.062.124.087.177-.122.2-.124.235-.069.435.049.18.14.334.263.47.152.17.305.339.476.49.2.176.38.376.606.522.436.283.868.57 1.318.828.451.261.935.45 1.427.619.183.063.376.102.559.15zM153.435 13.441c.03-.025.062-.039.072-.062a.264.264 0 00.017-.115c-.018-.37-.009-.74-.07-1.108-.051-.302-.081-.609-.155-.905a7.801 7.801 0 00-.301-.919 18.074 18.074 0 00-.435-1.02c-.126-.28-.259-.557-.405-.825-.192-.353-.4-.696-.603-1.043a9.23 9.23 0 00-.222-.362c-.019-.029-.051-.049-.103-.096.003.063-.004.095.008.12.024.057.067.108.086.167.081.245.144.497.236.738.101.267.151.545.2.822.046.271.054.548.076.821.031.4-.042.785-.176 1.158-.07.191-.172.37-.254.558-.105.241-.244.456-.463.611-.01.007-.011.027-.021.055.068.014.133.033.2.043.331.049.638.168.926.336.389.226.749.493 1.11.76.063.045.115.106.172.161l.105.105zM151.216 22.211c-.133.121-.255.245-.389.352-.209.168-.426.325-.64.485-.23.173-.143.17-.436.052a.643.643 0 01-.157-.103 8.17 8.17 0 01-.28-.252 1.135 1.135 0 01-.157-.177c-.188-.29-.368-.586-.467-.922-.004-.013-.017-.024-.033-.049a30.716 30.716 0 01-.187-.066c-.026.035-.048.057-.063.082-.124.21-.233.43-.372.628a9.723 9.723 0 00-.563.957c-.134.248-.245.51-.364.766-.028.061-.061.126-.005.197.056-.024.108-.043.157-.068a.57.57 0 01.298-.056c.275.016.545.035.813.123.381.123.771.101 1.12-.1.195-.114.398-.187.607-.254.188-.06.382-.091.582-.087.315.006.627-.044.939-.079a.636.636 0 00.138-.03c.17-.063.339-.127.507-.195.166-.067.285-.222.471-.255.013-.002.025-.019.038-.028.335-.24.54-.585.76-.921.039-.061.043-.132-.012-.196-.024-.003-.048-.013-.069-.009-.062.012-.123.03-.183.046-.137.032-.274.082-.413.096-.313.03-.627.05-.941.06-.236.01-.472.003-.699.003zM148.415 39.194c-.159.116-.189.14-.369.173-.24.04-.484.069-.726.092-.282.025-.565.04-.848.058-.023.002-.051.002-.068.013-.031.021-.07.046-.081.079a.355.355 0 00.016.297.15.15 0 00.132.086c.071.003.142.003.213.003l4.892-.01c.063 0 .126 0 .189-.003.09-.005.123-.04.132-.133a.97.97 0 00.002-.094c-.007-.142-.046-.205-.183-.235-.176-.04-.356-.064-.534-.095l-.153-.025c-.073-.152-.066-.324-.208-.445-.068-.003-.146-.015-.223-.008a1.19 1.19 0 00-.278.051.655.655 0 01-.439-.02 1.825 1.825 0 01-.715-.446c-.07-.072-.118-.165-.169-.253-.027-.046-.032-.107-.06-.154a.588.588 0 01-.066-.364c.006-.063.011-.126.006-.189-.014-.23-.152-.342-.378-.307-.038.005-.076.019-.115.025-.143.021-.25-.057-.263-.2a.431.431 0 01.021-.185c.063-.169.123-.343.209-.5.247-.446.386-.927.48-1.424.072-.379.153-.755.222-1.135.042-.232.096-.461.098-.698.002-.334.074-.656.162-.976.065-.233.128-.47.188-.705a.746.746 0 00.02-.163c.009-.234-.066-.465-.005-.693-.182-.066-.187-.064-.255.066-.014.027-.027.057-.042.085-.21.43-.422.86-.632 1.292a1.381 1.381 0 00-.16.704c.017.26.034.518.053.778.012.18.015.362-.024.542-.042.192-.077.386-.124.576-.065.267-.145.53-.205.8-.07.3-.197.58-.324.86a.274.274 0 01-.064.096c-.13.114-.194.268-.266.415-.125.256-.115.507.072.728.194.231.306.499.367.784.039.184.123.336.231.483.088.119.174.238.272.374zM146.891 13.298c-.107.082-.124.168-.087.267.11.292.258.556.552.73-.134.209-.28.41-.274.667.005.246.039.485.177.695.03.003.054.01.076.007.27-.036.534.004.796.061a.87.87 0 00.369.016c.177-.033.36-.038.54-.048.157-.01.315-.009.472-.017.073-.004.114-.062.094-.131-.027-.09-.064-.178-.094-.268-.048-.147-.109-.294-.076-.461.028-.017.054-.033.082-.048.224-.12.465-.187.718-.218.038-.004.08-.01.072-.077-.056-.012-.116-.033-.177-.039-.165-.013-.33-.031-.494-.027-.269.008-.508-.09-.748-.187a.213.213 0 01-.09-.071.789.789 0 01-.156-.314c-.017-.079.006-.133.063-.188.142-.134.314-.207.495-.263.211-.064.422-.129.633-.188.113-.032.229-.057.344-.08a.263.263 0 01.241.067c.181.167.335.354.423.588.084.22.174.44.244.663.063.194.103.395.148.594.012.053.006.109.005.165-.002.102-.009.204-.01.307-.002.044.002.089.003.135.036.007.059.012.081.013.178.002.337-.068.5-.125.428-.151.85-.148 1.256.072.159.087.309.188.465.28.06.035.126.061.19.088.01.005.032-.005.041-.015.01-.009.017-.029.013-.04a.214.214 0 00-.034-.061 8.898 8.898 0 01-.661-1.032 7.411 7.411 0 00-.817-1.21c-.23-.27-.456-.542-.739-.76a1.355 1.355 0 00-.175-.119c-.287-.153-.598-.241-.911-.32a.663.663 0 00-.34-.017l.156.23c-.077.014-.129.026-.18.032a2.215 2.215 0 00-.575.124c-.196.078-.411.113-.58.253-.017.015-.043.018-.065.027-.374.15-.76.256-1.155.33-.273.052-.548.066-.811-.087zM146.585 15.976c-.117.019-.195.103-.288.155-.101.057-.152.152-.175.268a.465.465 0 00.029.3c.091.191.179.385.282.57.203.36.442.691.799.917.016.01.023.037.038.062-.065.105-.158.174-.25.247a.9.9 0 01-.891.15c-.059-.02-.118-.044-.179-.06-.17-.04-.328-.03-.455.111-.058.064-.125.121-.181.186a.887.887 0 00-.228.605c.001.087-.006.174.002.26.017.193-.008.377-.137.52a.333.333 0 00.241.253c.131.041.269.05.39-.018a.749.749 0 01.431-.093c.078.004.158.001.235-.009.065-.009.108-.066.114-.133a.742.742 0 00-.061-.345c-.033-.08-.118-.116-.216-.104-.063.008-.125.03-.186.025a.49.49 0 00-.31.089c-.064.039-.13.087-.23.066.005-.254.064-.485.204-.69a.539.539 0 01.365-.238c.178-.033.352-.087.529-.12.212-.04.412-.103.589-.231.02-.014.05-.015.097-.027-.01.061-.014.1-.023.136-.027.122-.054.245-.085.367a.646.646 0 00.009.326c.051.2.145.362.326.469.026.015.046.038.073.062l-.054.137c-.033.086-.071.174-.097.264-.07.229-.068.443.093.645.109.139.212.27.372.353.083.044.147.033.216-.021a1.894 1.894 0 01.892-.404.36.36 0 00.259-.181c.126-.21.262-.413.395-.617.129-.2.273-.387.466-.53.125-.09.175-.212.189-.362.013-.156.034-.313.07-.466.036-.152.095-.3.145-.449a.696.696 0 01.173-.304c.023-.021.029-.061.045-.104-.058-.005-.097-.013-.135-.009-.174.02-.326-.039-.473-.12-.034-.02-.07-.037-.102-.06a.916.916 0 00-.535-.154c-.063-.002-.127-.002-.189-.007-.026-.003-.051-.019-.102-.039.059-.035.092-.053.124-.074.1-.067.2-.066.313-.024.168.065.341.121.514.173.143.044.291.07.422.148.085.051.167.029.239-.034.045-.038.085-.082.142-.136.041.093.023.172.036.247.015.085.035.169.051.253.007.04.021.08.016.118-.024.156.036.292.097.43.057.13.107.261.169.389.054.113.116.223.184.328.076.12.181.213.329.293-.004-.058.004-.1-.009-.131-.026-.065-.064-.125-.099-.187-.113-.2-.226-.396-.338-.596-.026-.047-.058-.098-.065-.151-.028-.226-.067-.453-.065-.68.002-.298.036-.595.059-.893.009-.117.027-.233.038-.35.004-.047.001-.093.001-.145-.105-.055-.2-.111-.3-.152-.064-.026-.136-.031-.206-.043-.008-.001-.02.018-.042.04.026.025.05.053.077.076.03.026.069.043.093.072.017.02.031.065.021.082-.018.03-.057.066-.087.065-.053 0-.105-.023-.157-.04-.06-.02-.117-.05-.178-.065-.072-.017-.173.103-.146.172.008.019.031.04.05.045a.513.513 0 00.118.007.987.987 0 01.361.067c.029.176.014.201-.122.22l-.024.001c-.188 0-.374.056-.564.026-.045-.007-.075.019-.084.063-.01.05.023.097.073.102.039.004.079 0 .117.003.056.001.11.003.166.006.07.005.112.048.141.109.019.04.024.08-.008.109-.019.018-.056.034-.082.029-.131-.024-.261-.056-.392-.084a1.093 1.093 0 01-.373-.14c-.092-.058-.194-.1-.29-.154-.052-.027-.107-.042-.159-.016-.246.122-.512.201-.744.354-.164.108-.326.217-.511.295a.367.367 0 01-.338-.002c-.223-.118-.441-.249-.602-.448a2.439 2.439 0 01-.436-.752.689.689 0 01-.025-.438c.023-.073.048-.149.009-.235z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M153.431 10.522l.03-.001c-.009-.101-.005-.205-.031-.302a7.25 7.25 0 00-.346-1.054 17.57 17.57 0 00-.678-1.349c-.018-.035-.042-.067-.064-.1-.132-.204-.27-.406-.395-.615-.192-.324-.376-.655-.561-.984-.089-.158-.173-.317-.261-.476-.174-.316-.355-.63-.523-.949-.118-.222-.218-.454-.33-.68a4.368 4.368 0 01-.263-.602c-.037-.111-.08-.221-.121-.331-.144-.375-.289-.749-.431-1.125-.058-.154-.105-.311-.166-.464-.055-.139-.124-.272-.183-.41a3.507 3.507 0 00-.383-.702 1.03 1.03 0 00-.46-.355.292.292 0 00-.138-.022.8.8 0 00-.47.195 1.344 1.344 0 00-.395.71c-.039.18-.081.9-.065 1.082.004.043.02.096-.051.126a1.095 1.095 0 00-.654-.204.513.513 0 00-.492.263 1.284 1.284 0 00-.074.147 2.261 2.261 0 00-.032 1.705c.097.256.212.507.316.761.181.438.414.85.658 1.252.232.384.48.758.729 1.13.207.309.413.616.64.908.3.386.647.73 1.002 1.066.171.162.33.341.513.487.296.234.608.448.914.67a.147.147 0 00.063.03.085.085 0 00.062-.02c.014-.014.025-.044.021-.062a.274.274 0 00-.055-.1c-.096-.095-.196-.184-.294-.274-.126-.12-.254-.236-.377-.357-.113-.11-.221-.225-.33-.339-.26-.273-.545-.524-.781-.822a21.106 21.106 0 00-.429-.531c-.253-.3-.476-.628-.706-.947-.442-.611-.725-1.305-1-2-.163-.411-.25-.845-.354-1.273a1.92 1.92 0 01-.01-.752c.015-.092.05-.182.088-.268.052-.116.131-.15.271-.137.126.012.167.051.202.186.102.388.194.778.31 1.162.169.566.371 1.12.634 1.65.271.543.57 1.07.938 1.555.413.547.863 1.064 1.362 1.535.097.091.185.193.286.281.16.14.326.273.491.406.047.038.087.028.104-.043-.178-.225-.356-.455-.538-.682a8.651 8.651 0 01-.712-.997c-.12-.203-.231-.412-.361-.608a8.363 8.363 0 01-.657-1.17c-.204-.453-.439-.89-.604-1.359a.66.66 0 00-.048-.107c-.083-.145-.127-.304-.175-.462-.062-.203-.112-.41-.188-.609-.101-.267-.147-.546-.205-.822-.072-.34-.064-.69-.07-1.035-.004-.173.084-.331.186-.472.027-.036.071-.063.111-.087.074-.044.15-.043.22.01.107.082.21.167.273.29.126.244.257.486.38.731.251.5.438 1.029.706 1.52.128.235.24.479.368.713.248.455.509.905.755 1.362.198.368.43.715.656 1.064.226.35.466.69.687 1.045.201.319.38.653.575.976.126.21.233.428.327.654.191.465.388.925.583 1.388zM149.323 30.28c.068.009.097-.028.103-.08a.435.435 0 00-.006-.139 1.758 1.758 0 01.029-.75l.073-.298a.539.539 0 00-.03-.344 2.987 2.987 0 01-.196-1.087 7.29 7.29 0 01.234-1.865.513.513 0 01.258-.347c.133-.072.272-.127.419-.157.167-.032.216 0 .254.158.004.015.005.032.009.046l.081.37c.143.643.3 1.286.353 1.948a.524.524 0 00.01.07c.067.285.089.575.077.866a7.474 7.474 0 00-.004.473c0 .051.015.102.023.15.099.018.135-.036.155-.096a5.24 5.24 0 00.157-.493c.099-.397.189-.796.243-1.2.037-.275.066-.548.111-.82.022-.127.026-.25.016-.376-.007-.078-.019-.157-.023-.234-.025-.424-.04-.85-.078-1.272a.365.365 0 01.097-.297c.127-.15.246-.307.366-.464.025-.032.038-.069-.013-.108-.114.018-.209.086-.306.152-.365.25-.771.426-1.148.654-.04.025-.086.038-.13.057-.335.155-.699.241-1.023.425a.465.465 0 01-.132.05c-.243.067-.485.14-.731.192-.33.072-.658.153-.979.262a1.394 1.394 0 01-.345.074c-.306.023-.609.044-.915-.03-.181-.044-.338-.125-.498-.207-.041-.02-.073-.06-.104-.096-.071-.084-.076-.166-.022-.234.046-.06.144-.067.235-.003.078.055.165.083.255.115.201.07.409.113.619.148.367.06.722.05 1.054-.14a.785.785 0 01.36-.103c.225-.008.432-.084.644-.14.289-.073.573-.168.857-.257.113-.036.223-.079.331-.126.417-.184.831-.372 1.248-.556.341-.147.649-.355.963-.548.024-.014.053-.036.027-.079-.02.002-.043.001-.062.01-.154.08-.307.158-.46.239-.307.161-.628.246-.978.21-.208-.02-.41.02-.6.1-.21.09-.415.19-.617.293-.079.04-.152.081-.239.096-.086.016-.17.038-.254.056-.227.05-.454.06-.673-.031a1.436 1.436 0 00-.626-.09 2.09 2.09 0 00-.464.082 1.62 1.62 0 01-.559.068.585.585 0 01-.433-.252c-.024-.03-.039-.068-.062-.1a.25.25 0 01-.022-.266c.126-.271.245-.546.37-.818.03-.062.075-.12.115-.178.097-.143.197-.285.293-.429.185-.275.374-.545.616-.773a.534.534 0 00.094-.132c.007-.014-.009-.045-.022-.06-.006-.009-.031-.012-.041-.007-.073.045-.149.087-.215.142-.417.343-.774.74-1.08 1.182-.03.045-.064.087-.092.121-.031.002-.047.007-.061.003-.43-.102-.806.014-1.156.268a4.197 4.197 0 00-.767.697 2.126 2.126 0 01-.293.306c-.159.131-.336.228-.557.215-.047-.005-.097.03-.169.055.057.046.087.088.128.101.2.072.403.137.62.114.157-.018.314-.035.467-.066.115-.025.227-.065.336-.108.107-.044.211-.1.331-.155.272-.389.272-.389.477-.447a6.49 6.49 0 00-.375 1.023c-.07.04-.137.08-.206.118a2.972 2.972 0 00-.868.682c-.031.036-.065.068-.099.101-.213.186-.425.372-.636.56-.023.019-.051.042-.061.07-.029.08-.062.162-.069.246-.006.075.021.152.033.228l-.024.04c-.123.184-.115.225.074.355l.037.028c.03.281.047.3.313.364.011.032.022.07.037.107.082.2.278.248.434.104a.542.542 0 00.102-.13.677.677 0 01.342-.313.705.705 0 00.356-.36c.067-.135.132-.268.168-.415.025-.101.06-.205.174-.269a.912.912 0 01.096.279c.02.143.11.224.239.263.119.038.242.067.365.093a.476.476 0 00.382-.084c.076-.054.155-.106.231-.164.331-.253.661-.508.991-.764a.364.364 0 01.169-.07c.194-.033.386-.074.579-.113.038-.008.076-.022.115-.026.043-.005.088-.037.141.006a.534.534 0 01-.026.222 2.275 2.275 0 00-.088.795c.018.526.129 1.03.347 1.508.038.086.09.166.131.252.05.1.074.205.069.319-.015.316.035.628.083.937a.624.624 0 00.121.298z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M149.323 30.28a.624.624 0 01-.121-.298c-.048-.31-.098-.62-.083-.937a.638.638 0 00-.069-.32c-.041-.085-.093-.165-.131-.25a3.924 3.924 0 01-.347-1.509 2.275 2.275 0 01.088-.795.534.534 0 00.026-.222c-.053-.043-.098-.01-.141-.006-.039.004-.077.018-.115.026-.193.039-.385.08-.579.112a.364.364 0 00-.169.071c-.33.256-.66.511-.991.764-.076.058-.155.11-.231.164a.476.476 0 01-.382.084 3.782 3.782 0 01-.365-.093c-.129-.039-.219-.12-.239-.263a.912.912 0 00-.096-.279c-.114.064-.149.168-.174.27-.036.146-.101.28-.168.415a.705.705 0 01-.356.36.677.677 0 00-.342.312.542.542 0 01-.102.13c-.156.144-.352.096-.434-.104-.015-.037-.026-.075-.037-.107-.266-.064-.283-.083-.313-.364-.013-.01-.025-.017-.037-.028-.189-.13-.197-.171-.074-.356.009-.013.016-.026.024-.04-.012-.075-.039-.152-.033-.227.007-.084.04-.166.069-.246.01-.028.038-.051.061-.07.211-.188.423-.374.636-.56.034-.033.068-.065.099-.101.243-.287.54-.504.868-.682.069-.038.136-.079.206-.118a6.49 6.49 0 01.375-1.023c-.205.058-.205.058-.477.447-.12.055-.224.11-.331.155a2.117 2.117 0 01-.336.108c-.153.031-.31.048-.467.066-.217.023-.42-.042-.62-.114-.041-.013-.071-.055-.128-.101.072-.024.122-.06.169-.055.221.013.398-.084.557-.215.109-.089.204-.197.293-.306.224-.268.486-.493.767-.697.35-.254.726-.37 1.156-.268.014.004.03 0 .061-.003.028-.034.062-.076.092-.12.306-.443.663-.84 1.08-1.183.066-.055.142-.097.215-.142.01-.005.035-.002.041.006.013.016.029.047.022.061a.534.534 0 01-.094.132c-.242.228-.431.498-.616.773-.096.144-.196.286-.293.43-.04.057-.085.115-.115.177-.125.272-.244.547-.37.818a.25.25 0 00.022.266c.023.032.038.07.062.1.11.142.242.237.433.252a1.62 1.62 0 00.559-.068 2.09 2.09 0 01.464-.082c.215-.008.425.005.626.09.219.091.446.081.673.03.084-.017.168-.04.254-.055.087-.015.16-.056.239-.096.202-.104.407-.203.617-.293.19-.08.392-.12.6-.1.35.036.671-.049.978-.21l.46-.24c.019-.008.042-.007.062-.009.026.043-.003.065-.027.079-.314.193-.622.4-.963.548-.417.184-.831.372-1.248.556-.108.047-.218.09-.331.126-.284.09-.568.184-.857.258-.212.055-.419.13-.644.14a.785.785 0 00-.36.102c-.332.19-.687.2-1.054.14a3.753 3.753 0 01-.619-.148c-.09-.032-.177-.06-.255-.115-.091-.064-.189-.056-.235.003-.054.068-.049.15.022.234.031.036.063.075.104.096.16.082.317.163.498.207.306.074.609.053.915.03.116-.008.234-.037.345-.074.321-.109.649-.19.979-.262.246-.052.488-.125.731-.191a.465.465 0 00.132-.051c.324-.184.688-.27 1.023-.425.044-.02.09-.032.13-.057.377-.228.783-.404 1.148-.654.097-.066.192-.134.306-.152.051.04.038.076.013.108-.12.157-.239.314-.366.464a.365.365 0 00-.097.297c.038.422.053.848.078 1.272.004.077.016.156.023.234.01.127.006.249-.016.376-.045.272-.074.545-.111.82-.054.404-.144.803-.243 1.2a5.24 5.24 0 01-.157.493c-.02.06-.056.114-.155.095-.008-.047-.023-.098-.023-.149a7.474 7.474 0 01.004-.473 3.206 3.206 0 00-.077-.867.524.524 0 01-.01-.069c-.053-.662-.21-1.305-.353-1.948a27.879 27.879 0 01-.081-.37c-.004-.015-.005-.031-.009-.046-.038-.159-.087-.19-.254-.157-.147.029-.286.084-.419.156a.513.513 0 00-.258.347 7.29 7.29 0 00-.234 1.866c-.001.372.062.738.196 1.086a.539.539 0 01.03.344l-.073.298c-.057.248-.08.497-.029.75a.435.435 0 01.006.14c-.006.05-.035.088-.103.08zM153.431 10.522c-.195-.463-.392-.923-.583-1.388a4.982 4.982 0 00-.327-.654c-.195-.323-.374-.657-.575-.976-.221-.354-.461-.695-.687-1.045-.226-.35-.458-.696-.656-1.064-.246-.457-.507-.907-.755-1.362-.128-.234-.24-.478-.368-.713-.268-.491-.455-1.02-.706-1.52-.123-.245-.254-.487-.38-.732a.882.882 0 00-.273-.288c-.07-.054-.146-.055-.22-.01-.04.023-.084.05-.111.086-.102.14-.19.3-.186.472.006.346-.002.694.07 1.035.058.276.104.555.205.822.076.199.126.406.188.609.048.158.092.317.175.462a.66.66 0 01.048.107c.165.47.4.906.604 1.358.186.411.409.797.657 1.171.13.196.241.405.361.608.209.353.456.678.712.997.182.227.36.457.538.682-.017.071-.057.08-.104.043-.165-.133-.331-.266-.491-.406-.101-.088-.189-.19-.286-.281A12.308 12.308 0 01148.919 7a9.772 9.772 0 01-.938-1.555 10.387 10.387 0 01-.634-1.65c-.116-.384-.208-.774-.31-1.162-.035-.135-.076-.174-.202-.186-.14-.013-.219.021-.271.137a1.123 1.123 0 00-.088.268c-.04.25-.049.506.01.752.104.428.191.862.354 1.273.275.695.558 1.389 1 2 .23.32.453.646.706.947.147.174.288.352.429.531.236.298.521.55.781.822.109.114.217.229.33.339.123.121.251.238.377.357.098.09.198.18.294.274a.274.274 0 01.055.1c.004.018-.007.048-.021.062a.085.085 0 01-.062.02.147.147 0 01-.063-.03c-.306-.222-.618-.436-.914-.67-.183-.146-.342-.325-.513-.487a9.67 9.67 0 01-1.002-1.066c-.227-.292-.433-.6-.64-.908a29.151 29.151 0 01-.729-1.13 9.244 9.244 0 01-.658-1.252c-.104-.254-.219-.505-.316-.761a2.261 2.261 0 01.032-1.704c.022-.051.046-.101.074-.148a.513.513 0 01.492-.263c.242.005.465.061.654.204.071-.03.055-.083.051-.126a7.115 7.115 0 01.065-1.081c.062-.277.187-.516.395-.71a.8.8 0 01.47-.196.292.292 0 01.138.022c.185.075.34.19.46.355.158.219.279.456.383.703.059.137.128.27.183.409.061.153.108.31.166.464.142.376.287.75.431 1.125.041.11.084.22.121.33.069.21.164.408.263.604.112.225.212.457.33.68.168.319.349.632.523.948.088.159.172.318.261.476.185.33.369.66.561.984.125.21.263.41.395.615.022.033.046.065.064.1.241.442.476.888.678 1.35.149.34.251.696.346 1.053.026.097.022.2.031.302l-.03.001zM146.585 15.976c.039.086.014.162-.009.235a.689.689 0 00.025.438c.094.282.253.523.436.752.161.2.379.33.602.448a.367.367 0 00.338.002c.185-.078.347-.187.511-.295.232-.153.498-.232.744-.354.052-.026.107-.011.159.016.096.053.198.096.29.155.116.073.241.112.373.14.131.027.261.059.392.083.026.005.063-.011.082-.029.032-.03.027-.07.008-.109-.029-.061-.071-.104-.141-.109a5.754 5.754 0 00-.166-.006c-.038-.003-.078 0-.117-.003a.084.084 0 01-.073-.102c.009-.044.039-.07.084-.063.19.03.376-.027.564-.026.008 0 .016 0 .024-.002.136-.018.151-.043.122-.219a.987.987 0 00-.361-.067.513.513 0 01-.118-.007c-.019-.004-.042-.026-.05-.045-.027-.07.074-.19.146-.172.061.016.118.045.178.064.052.018.104.04.157.04.03.002.069-.034.087-.064.01-.017-.004-.061-.021-.082-.024-.03-.063-.046-.093-.072-.027-.023-.051-.05-.077-.077.022-.021.034-.04.042-.039.07.012.142.017.206.043.1.041.195.097.3.152 0 .052.003.098-.001.144-.011.118-.029.234-.038.351-.023.298-.057.595-.059.894-.002.226.037.453.065.679.007.053.039.104.065.151.112.2.225.397.338.596.035.062.073.122.099.187.013.031.005.073.009.13a.834.834 0 01-.329-.292 2.876 2.876 0 01-.184-.328c-.062-.128-.112-.259-.169-.39-.061-.137-.121-.273-.097-.43.005-.037-.009-.077-.016-.117-.016-.084-.036-.168-.051-.253-.013-.075.005-.154-.036-.247-.057.054-.097.098-.142.137-.072.062-.154.084-.239.033-.131-.078-.279-.104-.422-.148a7.095 7.095 0 01-.514-.173c-.113-.042-.213-.043-.313.024-.032.02-.065.04-.124.074.051.02.076.037.102.04.062.005.126.005.189.006.191.003.374.04.535.155.032.022.068.04.102.058.147.082.299.14.473.121.038-.004.077.004.135.009-.016.043-.022.083-.045.104a.696.696 0 00-.173.304c-.05.15-.109.297-.145.449-.036.153-.057.31-.07.466-.014.15-.064.272-.189.362a1.96 1.96 0 00-.466.53c-.133.204-.269.408-.395.617a.36.36 0 01-.259.181 1.894 1.894 0 00-.892.404c-.069.054-.133.065-.216.02-.16-.081-.263-.213-.372-.352-.161-.202-.163-.416-.093-.645.026-.09.064-.178.097-.264l.054-.137c-.027-.024-.047-.047-.073-.062-.181-.107-.275-.27-.326-.469a.646.646 0 01-.009-.326c.031-.122.058-.245.085-.367.009-.036.013-.075.023-.136-.047.012-.077.013-.097.027-.177.128-.377.19-.589.23-.177.034-.351.088-.529.121a.539.539 0 00-.365.238c-.14.206-.199.436-.204.69.1.021.166-.027.23-.066a.49.49 0 01.31-.09c.061.006.123-.016.186-.024.098-.012.183.024.216.104.045.11.071.224.061.345-.006.067-.049.124-.114.133-.077.01-.157.013-.235.01a.749.749 0 00-.431.091c-.121.069-.259.06-.39.02a.333.333 0 01-.241-.254c.129-.143.154-.327.137-.52-.008-.086-.001-.173-.002-.26a.887.887 0 01.228-.605c.056-.065.123-.122.181-.186.127-.14.285-.152.455-.11.061.015.12.04.179.06a.9.9 0 00.891-.151c.092-.073.185-.142.25-.247-.015-.025-.022-.052-.038-.062-.357-.226-.596-.557-.799-.917-.103-.185-.191-.378-.282-.57a.465.465 0 01-.029-.3c.023-.116.074-.211.175-.268.093-.052.171-.136.288-.155zM146.891 13.298c.263.153.538.14.811.088a6.223 6.223 0 001.155-.33c.022-.01.048-.013.065-.028.169-.14.384-.175.58-.253.183-.072.378-.102.575-.124.051-.006.103-.018.18-.032l-.156-.23a.663.663 0 01.34.017c.313.079.624.167.911.32.062.033.119.076.175.118.283.219.509.492.739.76.318.372.578.784.817 1.21.2.357.413.706.661 1.033.014.019.027.039.034.06.004.012-.003.032-.013.041-.009.01-.031.02-.041.015-.064-.027-.13-.053-.19-.089-.156-.091-.306-.192-.465-.279-.406-.22-.828-.223-1.256-.072-.163.057-.322.127-.5.125-.022-.001-.045-.006-.081-.013-.001-.046-.005-.09-.003-.135.001-.103.008-.205.01-.307.001-.056.007-.112-.005-.165-.045-.2-.085-.4-.148-.594-.07-.224-.16-.442-.244-.663a1.549 1.549 0 00-.423-.588.263.263 0 00-.241-.067 4.708 4.708 0 00-.344.08c-.211.06-.422.124-.633.188a1.208 1.208 0 00-.495.263c-.057.055-.08.11-.063.188.024.12.086.22.156.314.022.03.055.058.09.071.24.097.479.195.748.187.164-.004.329.014.494.027.061.006.121.027.177.039.008.068-.034.073-.072.077-.253.031-.494.098-.718.218-.028.015-.054.031-.082.048-.033.167.028.314.076.461.03.09.067.178.094.268.02.07-.021.127-.094.13-.157.009-.315.008-.472.018-.18.01-.363.015-.54.048a.87.87 0 01-.369-.016c-.262-.057-.526-.097-.796-.06-.022.002-.046-.005-.076-.008-.138-.21-.172-.449-.177-.695-.006-.258.14-.458.274-.668-.294-.173-.442-.437-.552-.729-.037-.1-.02-.184.087-.267zM148.415 39.194c-.098-.136-.184-.255-.272-.374a1.23 1.23 0 01-.231-.483 1.766 1.766 0 00-.367-.784c-.187-.22-.197-.472-.072-.728.072-.147.136-.302.266-.415a.274.274 0 00.064-.096c.127-.28.254-.56.324-.86.06-.27.14-.533.205-.8.047-.19.082-.384.124-.576.039-.18.036-.361.024-.542-.019-.26-.036-.518-.053-.778-.016-.25.051-.482.16-.704l.632-1.293c.015-.027.028-.057.042-.084.068-.13.073-.132.255-.066-.061.228.014.46.005.693a.746.746 0 01-.02.163c-.06.234-.123.472-.188.705-.088.32-.16.642-.162.976-.002.236-.056.466-.098.698-.069.38-.15.756-.222 1.135-.094.497-.233.978-.48 1.424-.086.157-.146.331-.209.5a.431.431 0 00-.021.185c.013.143.12.221.263.2.039-.006.077-.02.115-.025.226-.035.364.076.378.307.005.063 0 .126-.006.19a.588.588 0 00.066.363c.028.047.033.108.06.154.051.088.099.181.169.253.201.205.444.35.715.445.145.05.287.072.439.021a1.19 1.19 0 01.278-.05c.077-.008.155.004.223.007.142.121.135.293.208.445l.153.025c.178.03.358.055.534.095.137.03.176.093.183.235a.97.97 0 01-.002.094c-.009.093-.042.128-.132.133-.063.003-.126.002-.189.002-1.631.004-3.261.008-4.892.01-.071 0-.142 0-.213-.002a.15.15 0 01-.132-.086.355.355 0 01-.016-.297c.011-.033.05-.058.081-.08.017-.01.045-.01.068-.012.283-.018.566-.033.848-.058.242-.023.486-.053.726-.092.18-.032.21-.057.369-.173z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M151.216 22.211c.227 0 .463.007.699-.002.314-.012.628-.03.941-.061.139-.014.276-.064.413-.096.06-.017.121-.034.183-.046.021-.004.045.006.069.009.055.064.051.135.012.196-.22.336-.425.68-.76.921-.013.009-.025.026-.038.028-.186.033-.305.188-.471.255-.168.068-.337.132-.507.195a.636.636 0 01-.138.03c-.312.035-.624.085-.939.079-.2-.005-.394.027-.582.087-.209.067-.412.14-.607.254-.349.201-.739.223-1.12.1-.268-.088-.538-.107-.813-.123a.57.57 0 00-.298.056c-.049.025-.101.044-.157.068-.056-.07-.023-.136.005-.197.119-.256.23-.518.364-.766.175-.326.35-.65.563-.957.139-.198.248-.417.372-.628.015-.025.037-.047.063-.082l.187.066c.016.024.029.036.033.049.099.336.279.632.467.922.043.064.101.122.157.177.091.085.184.17.28.252.048.04.1.08.157.103.293.119.206.12.436-.052.214-.16.431-.317.64-.485.134-.107.256-.23.389-.352zM153.435 13.441a4.178 4.178 0 00-.105-.105c-.057-.055-.109-.116-.172-.162-.361-.266-.721-.533-1.11-.76a2.575 2.575 0 00-.926-.335c-.067-.01-.132-.029-.2-.043.01-.028.011-.048.021-.055.219-.155.358-.37.463-.611.082-.188.184-.367.254-.558.134-.373.207-.759.176-1.158-.022-.273-.03-.55-.076-.82a4.517 4.517 0 00-.2-.823c-.092-.24-.155-.493-.236-.738-.019-.059-.062-.11-.086-.167-.012-.025-.005-.057-.008-.12.052.047.084.067.103.096.076.12.152.24.222.362.203.347.411.69.603 1.043.146.268.279.546.405.825.153.337.303.675.435 1.02.116.3.223.606.301.919.074.296.104.603.155.905.061.367.052.738.07 1.108a.264.264 0 01-.017.115c-.01.023-.042.037-.072.063zM150.339 11.519c-.183-.05-.376-.088-.559-.151-.492-.17-.976-.358-1.427-.619-.45-.258-.882-.545-1.318-.828-.226-.146-.406-.346-.606-.522a6.078 6.078 0 01-.476-.49 1.15 1.15 0 01-.263-.47c-.055-.2-.053-.234.069-.435-.025-.053-.053-.117-.087-.177a6.338 6.338 0 01-.583-1.386c-.123-.453-.155-.916.006-1.372a.698.698 0 01.209-.324c.076.032.11.09.118.151.021.155.131.289.102.454l-.015.094c-.085.437-.037.86.12 1.275.186.497.41.975.721 1.405.17.234.369.45.561.668.262.296.597.512.887.777.46.422.989.75 1.5 1.102.343.238.687.473 1.03.71.054.036.081.076.011.138zM146.398 11.415c-.178-.221-.332-.42-.491-.614a.906.906 0 01-.211-.491c-.014-.131-.06-.26-.038-.389.051-.036.081-.008.107.02.026.03.052.06.071.093.161.274.364.514.596.727.156.143.323.278.501.391.272.173.544.345.843.47.303.13.591.298.889.437.177.083.365.144.548.214.064.025.129.047.216.078-.041.037-.059.062-.085.075-.358.18-.717.36-1.077.539a.891.891 0 01-.364.09c-.212.007-.424.022-.637.024-.279.003-.357-.056-.438-.358-.03-.11-.015-.23-.021-.366a2.344 2.344 0 00-.121-.077.783.783 0 01-.322-.395.49.49 0 01.034-.468zM149.244 36.328c-.043-.07-.076-.104-.085-.146-.013-.052-.011-.108-.01-.164.005-.324.056-.638.165-.945.11-.31.221-.622.287-.947.06-.293.154-.577.227-.867.124-.495.256-.988.318-1.497.021-.17.032-.342.046-.515.015-.196.031-.39.042-.587.006-.108 0-.218 0-.329 0-.212.007-.423-.005-.635-.007-.147-.047-.294-.061-.44a4.265 4.265 0 01-.012-.423c.001-.033.032-.066.052-.105a.241.241 0 01.136.19c.017.108.035.216.05.325.045.31.152.594.388.814.067.061.135.051.165-.032.039-.11.068-.226.125-.319.058-.022.082.008.105.042.075.115.068.238.038.364-.015.061-.049.115-.066.176-.035.113-.075.224-.093.34a.819.819 0 01-.068.247c-.028.056-.059.117-.065.176-.017.177-.101.33-.157.492-.118.341-.23.685-.346 1.028-.078.23-.155.462-.236.69-.116.325-.22.657-.357.974-.133.31-.239.63-.356.947-.078.21-.117.423-.138.643-.012.134-.027.267-.043.399-.003.02-.017.04-.046.104z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M149.489 9.648c-.092.056-.142.03-.189 0-.083-.058-.165-.12-.247-.18-.462-.343-.913-.7-1.297-1.128-.262-.292-.5-.608-.748-.913-.347-.43-.613-.912-.882-1.391a6.605 6.605 0 01-.42-.895 1.205 1.205 0 01-.071-.464c.002-.098.029-.188.108-.254.022-.017.051-.026.093-.047.752 2.08 1.973 3.826 3.653 5.272zM162.446 22.23c-.006-.108-.008-.194-.017-.279-.03-.283.032-.539.175-.79.186-.327.43-.594.73-.818.188-.141.366-.293.561-.426.153-.104.275-.258.39-.405.059-.077.076-.186.107-.284.022-.067.033-.138.055-.205.006-.017.036-.036.053-.036.018 0 .048.023.051.04a.865.865 0 01-.001.395c-.097.339-.31.595-.573.816-.186.156-.399.282-.549.478-.08.106-.157.214-.228.326a.402.402 0 00-.016.426c.025.047.055.095.079.142a.545.545 0 01-.264.732.408.408 0 01-.254.018c-.105-.027-.216-.043-.299-.13zM165.129 12.656c-.061 0-.124.002-.184 0a13.867 13.867 0 00-2.003.114 9.838 9.838 0 00-1.407.3c-.326.088-.655.169-.979.265-.286.085-.57.18-.848.284-.333.125-.659.26-.983.403-.143.063-.273.155-.409.234l-.187.102a1.056 1.056 0 01-.332-.247c.034-.038.058-.078.094-.101a.686.686 0 01.149-.07c.413-.154.824-.313 1.24-.46.482-.168.969-.325 1.466-.446.319-.078.644-.141.963-.224.474-.124.959-.17 1.443-.224.078-.008.157-.012.236-.016.274-.013.55-.023.825-.037.292-.014.583.015.871.043.019.002.035.024.052.037a.544.544 0 01-.007.043zM157.305 19.273c.181.14.256.31.31.489.044.147.206.487.294.618.163.242.33.48.481.73.164.268.313.544.421.84.044.12.051.221-.048.323-.119.122-.158.288-.199.447-.01.038-.013.076-.061.104-.097-.24-.054-.46.044-.68a4.324 4.324 0 00-.342-.752c-.186-.32-.381-.632-.575-.946a.97.97 0 01-.138-.372c-.027-.176-.095-.346-.143-.52-.023-.08-.071-.159-.044-.281zM161.063 28.779c-.009.063-.003.099-.017.115-.093.106-.18.218-.319.274-.071.027-.129.088-.199.124a1.346 1.346 0 01-.635.147c-.125 0-.251.012-.376.02a.97.97 0 00-.435.14c-.004.02-.017.05-.02.079-.01.119-.074.185-.191.205a.274.274 0 01-.291-.114c-.119-.172-.098-.278.027-.396a.682.682 0 01.44-.203c.203-.008.407.007.613.01.124.003.251.013.374 0 .172-.016.342-.048.512-.079a.642.642 0 00.363-.207c.034-.036.082-.063.154-.115zM163.55 17.06c.097.138.197.277.362.352a.942.942 0 01.349.31c.103.139.186.29.275.439.086.145.056.293.011.445-.082-.03-.068-.092-.077-.142-.035-.198-.097-.386-.254-.518-.12-.102-.255-.182-.387-.265-.066-.042-.142-.068-.213-.103a1.189 1.189 0 01-.499-.486.254.254 0 01-.043-.108.682.682 0 01.073-.388c.099-.177.366-.172.467.005a.175.175 0 01.021.112c-.021.107-.052.212-.085.347zM155.287 14.07c.037-.087.118-.109.19-.132.369-.114.742-.208 1.134-.19.189.009.378.002.567.008.126.004.25.028.363.092a.253.253 0 01.078.083c.025.04-.018.102-.064.098-.024-.002-.048-.003-.07-.01-.471-.155-.933-.075-1.394.053a1.905 1.905 0 00-.497.214c-.083.053-.12.045-.186-.023a1.025 1.025 0 01-.103-.128c-.012-.018-.012-.044-.018-.064zM149.378 16.264c-.037.03-.053.055-.072.058-.264.039-.53.051-.796.035-.039-.001-.077-.013-.115-.024-.021-.007-.041-.023-.061-.034l-.545-.316a.552.552 0 01.29.011c.236.058.473.109.716.135.191.02.378.086.583.135zM162.637 22.68c-.155.028-.244-.07-.322-.18-.038-.054.005-.133.071-.137.031-.002.062 0 .094.001a.214.214 0 01.189.118c.035.067.013.134-.032.198zM162.595 23.89c-.006-.003-.01-.01-.015-.011-.005-.002-.012.004-.017.006.005.003.009.01.014.01.006 0 .011-.004.018-.005z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M162.595 23.89c-.007.001-.012.006-.018.005-.005 0-.009-.007-.014-.01.005-.002.012-.008.017-.006.005 0 .009.008.015.01z" fill="#DB334A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M153.575 23.891a.41.41 0 01-.041-.346c.186-.003.373.002.556-.017.187-.017.371-.06.556-.095.183-.034.361-.087.552-.2-.087.148-.125.192-.251.267a3.116 3.116 0 01-.705.322c-.135.04-.273.07-.41.102a.34.34 0 01-.257-.033zm6.957.112c-.041-.114-.084-.2-.105-.29-.052-.222-.205-.302-.412-.318a1.383 1.383 0 00-.164-.005c-.174.007-.347.022-.52.024-.269.005-.534-.009-.777-.149-.1-.059-.205-.114-.333-.097-.055.006-.123-.021-.126-.084-.013-.22-.123-.404-.196-.602-.248-.681-.65-1.274-1.04-1.875-.056-.084-.096-.18-.154-.264a2.094 2.094 0 01-.268-.596c-.038-.127-.08-.25-.12-.374-.037.001-.065-.005-.081.004-.138.082-.288.125-.439.17-.399.12-.798.242-1.213.295a.376.376 0 00-.15.06c-.344.211-.715.32-1.118.327a.659.659 0 00-.16.027c-.014.005-.024.036-.027.057-.003.01.011.03.022.037.028.011.058.02.088.028.317.067.637.074.959.031.2-.027.3.055.305.254a.755.755 0 01-.093.363 1.845 1.845 0 01-.55.668c-.077.056-.153.108-.196.19.015.11.088.154.175.177.053.015.109.014.164.022.09.014.187.005.272.048-.048.147-.05.146-.132.217-.059.052-.122.102-.171.162-.067.08-.047.169.045.216a.354.354 0 00.155.048c.109.002.22-.002.328-.019.237-.036.447-.147.658-.252.031-.015.065-.05.105-.01-.083.193-.156.284-.308.367-.392.215-.8.365-1.259.346-.275-.012-.28-.004-.266-.273.004-.077-.045-.125-.113-.108-.187.05-.303.224-.188.417.027.046.068.084.102.124-.01.055-.016.101-.027.146a.694.694 0 00.023.35c.038.14.12.254.264.313.156.063.318.112.482.103.266-.017.535-.044.791-.128.287-.094.561-.217.746-.47.073-.102.132-.213.193-.324.149-.27.242-.562.321-.86a.585.585 0 00-.02-.371c-.035-.087-.073-.173-.106-.262-.039-.102-.08-.205-.108-.312a.624.624 0 01.062-.457.39.39 0 01.196-.196.101.101 0 01.127.034.285.285 0 01.045.082c.122.327.282.627.515.89.282.319.566.633.874.926a.438.438 0 01.149.26.614.614 0 00.047.182c.113.259.17.332.463.277a.507.507 0 01.322.041c.179.093.369.138.564.169.159.026.301.086.435.171.067.04.135.087.208.111.199.07.4.134.602.193.338.102.677.198 1.051.208a.415.415 0 000 .373c.008.02.007.046.015.068.026.068.003.125-.042.173-.036.041-.082.074-.118.116-.068.076-.139.15-.193.236-.221.352-.256.736-.174 1.136.044.224.099.443.166.66.122.395.187.797.139 1.212a.108.108 0 00.036.08c.037.028.081.006.103-.023.053-.068.1-.14.143-.215.078-.133.074-.288.103-.433a3.257 3.257 0 00-.002-1.24c-.016-.085-.038-.168-.056-.254-.063-.323-.039-.37.243-.531.081-.045.163-.096.23-.16.109-.107.162-.233.08-.385-.021-.04-.034-.085-.054-.133.073-.068.163-.12.202-.197.039-.076.025-.181.036-.277.041-.035.089-.072.127-.104.013-.124-.104-.16-.145-.26.042-.004.07-.011.096-.01.094.004.189.02.281.01.167-.02.205-.137.099-.265-.026-.033-.079-.05-.07-.116.043-.013.089-.023.13-.04.103-.047.122-.14.052-.232a.36.36 0 00-.22-.126c-.129-.03-.261-.055-.393-.083-.032-.088-.012-.157.05-.221.068-.008.138-.015.207-.028a.413.413 0 00.132-.043c.143-.081.148-.168.015-.27a.59.59 0 00-.099-.064c-.105-.052-.216-.096-.317-.158-.16-.098-.3-.067-.434.045a.719.719 0 00-.129.134c-.083.114-.155.236-.241.35a.654.654 0 00-.14.416c-.001.1.011.203.011.306-.002.13-.087.209-.213.195-.186-.022-.373-.054-.574-.081zM171.534 15.166a.723.723 0 00-.27-.44 4.25 4.25 0 00-.361-.264c-.138-.09-.277-.184-.425-.253-.322-.147-.649-.28-.974-.418a.806.806 0 00-.09-.033c-.241-.07-.482-.139-.724-.207-.106-.03-.213-.054-.319-.086a8.059 8.059 0 00-1.312-.294c-.264-.03-.535-.015-.795-.088-.058-.016-.124-.003-.188-.002-.055.001-.111.008-.165.005a6.804 6.804 0 00-.894-.003c-.164.013-.329.026-.494.046-.311.037-.626.05-.934.12-.315.071-.635.118-.949.188-.354.078-.713.135-1.054.26-.568.21-1.156.358-1.738.527-.362.106-.718.231-1.076.351-.364.123-.726.181-1.109.074-.187-.054-.388-.055-.584-.072-.028-.003-.072.032-.087.062-.02.037.007.078.047.093.104.036.211.066.314.104.197.073.402.129.578.283a37.9 37.9 0 00-.255.007c-.125.004-.253-.004-.377.015-.203.033-.407.027-.612.035-.246.007-.438-.107-.612-.261-.076-.067-.14-.148-.21-.223-.032-.033-.064-.071-.103-.096-.021-.014-.064-.016-.085-.003-.02.011-.039.052-.034.076.027.115.057.229.094.34.057.173.109.346.099.53-.001.037.001.08-.046.096-.017 0-.033.003-.047-.002-.169-.057-.262-.201-.348-.337a14.145 14.145 0 01-.551-.935 2.495 2.495 0 01-.288-.821c-.011-.078-.017-.156-.026-.234-.006-.044-.032-.077-.074-.079a.213.213 0 00-.107.028c-.025.016-.04.048-.057.075a.86.86 0 00-.127.496c.006.196.021.392.03.59.006.11.012.22.008.33-.001.042-.028.082-.046.135-.055-.028-.101-.042-.136-.07-.079-.066-.151-.139-.226-.207-.051-.045-.107-.066-.181-.022-.029.181.004.369.009.555.002.049.047.097.076.143.086.141.175.28.261.42.044.075.071.164.128.225a.456.456 0 01.109.23c.022.1.039.201.049.302.026.26.008.518-.021.777-.036.33-.142.63-.313.907-.145.234-.312.454-.47.678-.024.035-.045.066-.007.104.101-.014.169-.076.229-.151.063-.081.128-.16.195-.238.024-.03.053-.066.087-.075.11-.03.196-.096.289-.155a.37.37 0 01.294-.055.793.793 0 01.427.229c.078.088.156.177.23.267.083.102.226.155.333.083.115-.078.238-.076.359-.1.343-.065.655.004.934.214.032.022.059.05.092.074.063.043.111.041.171-.008.274-.228.509-.49.695-.793.049-.08.1-.161.178-.194.195.03.373.06.552.082.348.04.672-.04.97-.223a.635.635 0 00.233-.228c.023-.04.057-.074.089-.114.09-.003.175 0 .261-.01.155-.02.314-.03.465-.072.296-.085.568-.23.843-.366.054-.027.099-.077.142-.122.041-.046.074-.099.114-.156.142.046.282.032.422.014.385-.049.712-.185.904-.568h.157c.308-.003.614-.005.92-.041.193-.023.363-.091.53-.184a.21.21 0 00.121-.189c0-.02.013-.041.024-.07.041.004.08.003.117.01.262.052.523.112.787.159.226.04.455.034.681-.006.202-.036.225-.112.095-.263-.024-.029-.066-.048-.045-.113.069-.026.145-.007.219.01.239.055.481.076.725.082.135.003.268.014.402.008.196-.006.393-.018.588-.037.101-.01.202-.036.299-.067.093-.028.137-.15.087-.232-.031-.053-.079-.096-.117-.145-.017-.022-.025-.05-.041-.083.04-.006.064-.015.085-.012.257.036.513.083.77.111.685.075 1.368.08 2.053.015.044-.004.086-.028.134-.045zm-14.005 1.63c-.05.004-.094.014-.136.01-.069-.01-.135-.05-.209-.01-.068.071-.021.166-.051.267l-.172.147.009.184c-.076.05-.153.103-.242.16v.308c-.062.075-.125.065-.184.038-.05-.023-.093-.058-.139-.088-.098-.065-.192-.138-.296-.193a.73.73 0 01-.259-.23 15.13 15.13 0 01-.635-.965c-.011-.018-.011-.044-.022-.087.227-.103.45-.143.676-.164.126-.012.252-.023.377-.021.349.01.69-.055 1.032-.102.032-.003.063-.012.094-.015.065-.006.101.023.114.089.04.216.048.436.043.672z" fill="#DB334A"/></svg>\n'},346:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withGallery}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(41);const withGallery=WrappedComponent=>{const WrappedComponentWithGallery=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"gallery",data:{title:"Mock gallery",gallery:[{type:"image",data:{title:"Title 1",description:null,caption:null,copyright:"Copyright for image 1",credit:"Credit for image 1",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8358121",bundle:"remote_image",mid:2159,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 2",description:"Description 2",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8347086",bundle:"remote_image",mid:2160,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 3",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:"8347081",bundle:"remote_image",mid:2161,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 4",description:null,caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(200,200,0),id:"8347071",bundle:"remote_image",mid:2162,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"Title 5",description:"This is a description",caption:null,copyright:null,credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(100,0,0),id:"8347076",bundle:"remote_image",mid:2163,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}],bundle:"gallery",mid:2171,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}},{type:"image",data:{title:"something.jpg",description:null,caption:null,copyright:"This is the gallery copyright",credit:"This is the gallery credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(100,100,100),id:"8358111",bundle:"remote_image",mid:2157,changed:"1588227459",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}]}});return WrappedComponentWithGallery.propTypes={...WrappedComponent.propTypes},WrappedComponentWithGallery}},347:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withVideo}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(41);const withVideo=WrappedComponent=>{const WrappedComponentWithVideo=({articleOverrides:articleOverrides={},...props})=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,articleOverrides:{...articleOverrides,hero:[{type:"jw_player",data:{id:"w6YvMN4P",bundle:"jw_player_id",mid:16695,changed:"1589436714"}},{type:"image",data:{title:"video-placeholder.jpg",description:null,caption:"Video caption",copyright:"Video copyright",credit:"Video credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(255,150,150),id:"8406636",bundle:"remote_image",mid:16693,changed:"1589436714"}}]}});return WrappedComponentWithVideo.propTypes={...WrappedComponent.propTypes},WrappedComponentWithVideo}},348:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),commentIcon=__webpack_require__(338);const Wrapper=styled_components_browser_esm.default.div`
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
`;function SocialShare({article:article,className:className,configuration:configuration}){let commentId=article.path&&article.path.split("-1-")[1];return Object(jsx_runtime.jsxs)(Wrapper,{className:className,children:[Object(jsx_runtime.jsx)("amp-social-share",{type:"whatsapp",width:"30",height:"30","aria-label":"Share by Whatsapp","data-param-subject":article.titleSocial||article.title}),Object(jsx_runtime.jsx)("amp-social-share",{type:"twitter",width:"30",height:"30","aria-label":"Share to Twitter","data-param-text":article.titleSocial||article.title}),configuration.facebookAppId&&Object(jsx_runtime.jsx)("amp-social-share",{type:"facebook","data-param-app_id":configuration.facebookAppId,width:"30",height:"30","aria-label":"Share to Facebook"}),Object(jsx_runtime.jsx)("amp-social-share",{type:"email",width:"30",height:"30","aria-label":"Share by email","data-param-subject":article.titleSocial||article.title,dangerouslySetInnerHTML:{__html:'\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xml:space="preserve"><path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/><circle fill="#DC062B" cx="18" cy="18" r="17.938"/>\n<path fill="#FFFFFF" d="M27.229,11.118H8.77v14.768h18.459V11.118L27.229,11.118z M25.385,14.809L18,19.425l-7.384-4.616v-1.846 L18,17.579l7.385-4.616V14.809z"/></svg>'}}),commentId&&Object(jsx_runtime.jsx)(Comments,{href:"#comments",dangerouslySetInnerHTML:{__html:commentIcon.a}}),commentId&&article.commentCount&&Object(jsx_runtime.jsx)(CommentCounter,{children:article.commentCount})]})}SocialShare.propTypes={article:prop_types_default.a.any.isRequired,configuration:prop_types_default.a.object.isRequired,className:prop_types_default.a.string,theme:prop_types_default.a.string},SocialShare.__docgenInfo={description:"",methods:[],displayName:"SocialShare",props:{article:{type:{name:"any"},required:!0,description:""},configuration:{type:{name:"object"},required:!0,description:""},className:{type:{name:"string"},required:!1,description:""},theme:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=SocialShare;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Article/Insider/SocialShare.js"]={name:"SocialShare",docgenInfo:SocialShare.__docgenInfo,path:"app/component/library/Article/Insider/SocialShare.js"})},41:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createImageFromString}));const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1,canvas.height=1;const createImage=(r=0,g=0,b=0)=>(ctx.fillStyle=`rgb(${r}, ${g}, ${b})`,ctx.fillRect(0,0,1,1),canvas.toDataURL("image/png","")),createImageFromString=(str="")=>{let hash=0;for(let i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash),hash&=hash;const rgb=[0,0,0];for(let i=0;i<3;i++)rgb[i]=hash>>8*i&255;return createImage(...rgb)};__webpack_exports__.b=createImage},476:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);const postData=[{data:{markup:"<p>Paragraph 1</p>"},type:"markup"},{data:{markup:"<p>Paragraph 2</p>"},type:"markup"},{data:{markup:"<p>Paragraph 3</p>"},type:"markup"}];__webpack_exports__.default=()=>({type:"liveblog",data:{id:1645,uuid:"b80ee485-4563-4969-b6f8-ba8b568bae46",status:1,updated:"1591935880",extra:[]},posts:[{type:"post",data:{name:"1645",title:null,id:1686,uuid:"2bdaa90b-01b1-4601-8e8e-f62e72142b94",scheduleTime:null,created:"1589445900",changed:"1589446080",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p>Hello and welcome to <em>The Evening Standard</em>'s rolling coverage of something in the news.</p>"},type:"markup"}]},{type:"post",data:{name:"1645",title:"Post Title 1",id:1685,uuid:"7049ddde-8f65-41d5-aabc-5af58b865f76",scheduleTime:null,created:"1589446800",changed:"1589446626",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:"Post Title 2",id:1684,uuid:"ee185f17-99ed-48bb-a82e-b839b93c56fd",scheduleTime:null,created:"1589448000",changed:"1589447577",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:"Post Title 3",id:1683,uuid:"f0c085ce-53d0-405f-8e6a-6013f60b6b9c",scheduleTime:null,created:"1589449200",changed:"1589447948",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:"Post Title 4",id:1682,uuid:"4272fcd5-94bc-44b7-8250-05ec3ec07e4a",scheduleTime:null,created:"1589450400",changed:"1589449282",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:"Post Title 5",id:1681,uuid:"b4a5eff3-512f-4bd2-ac40-44375570d70d",scheduleTime:null,created:"1589451600",changed:"1589450838",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1680,uuid:"98a6f735-0abe-4886-a4c0-4b59ac90dcef",scheduleTime:null,created:"1589452800",changed:"1589452075",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1679,uuid:"98efc34e-9017-4bb9-826c-04868846f6a5",scheduleTime:null,created:"1589454000",changed:"1589453570",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1678,uuid:"61ec940f-dd8c-44ed-8b11-06406a87091d",scheduleTime:null,created:"1589455200",changed:"1589454730",container:1645,extra:{authorName:"Author Name"}},postJson:postData},{type:"post",data:{name:"1645",title:null,id:1677,uuid:"4b4bdf17-f2f7-409b-af03-7028eeb7f694",scheduleTime:null,created:"1589456400",changed:"1589454778",container:1645,extra:{authorName:"Author Name"}},postJson:[{data:{markup:"<p><strong>!!!!!!</strong></p>"},type:"markup"}]}],paging:{total:41,posts:10,offset:0,currentPage:1,totalPages:5},keypoints:'\n<ul>\n  <li>First key point</li>\n  <li><a href="/">Second key point</a></li>\n  <li><a href="/">Key point number three</a></li>\n</ul>',keypointsTitle:"Key points (this could be any title)"})},482:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_Forms_FormSubmit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(83),_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(78);const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`
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
`,LoginModal=({req:{originalUrl:originalUrl}})=>{const returnUrl=originalUrl||"/";return Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{on:"tap:login-modal.close",className:"close",children:"✕"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(H4,{children:"Log in with Evening Standard"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{id:"login-page-form",className:"login-page-form",method:"post",target:"_top","action-xhr":"/internal-api/user/login/submit","verify-xhr":"/internal-api/user/login/verify","custom-validation-reporting":"interact-and-submit",children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"returnUrl",defaultValue:returnUrl}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"loginEmail",fieldId:"login-page-form-email",displayName:"Email",requiredField:!0,valueMissingMsg:"Please enter a valid email"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_FormTextField__WEBPACK_IMPORTED_MODULE_5__.a,{fieldName:"password",inputType:"password",showPassword:!1,fieldId:"login-page-form-password",displayName:"Password",requiredField:!0,valueMissingMsg:"Please enter a valid password"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(ForgotPassword,{children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"/forgotten-password",children:"Forgotten your password?"})}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledFormSubmit,{}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(P,{children:["Not registered? ",Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:"/register",children:"Register here"})]}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"form-errors","submit-error":"true",children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("template",{type:"amp-mustache",children:"amp-template-message"})})]})]})};LoginModal.propTypes={req:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired},LoginModal.__docgenInfo={description:"",methods:[],displayName:"LoginModal",props:{req:{type:{name:"object"},required:!0,description:""}}},__webpack_exports__.default=Object(_brightsites_flow_core_lib_providers_RequestProvider__WEBPACK_IMPORTED_MODULE_1__.withRequest)(LoginModal),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Modals/Login.js"]={name:"LoginModal",docgenInfo:LoginModal.__docgenInfo,path:"app/component/library/Modals/Login.js"})},483:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),RequestProvider=__webpack_require__(8),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),Styles=(__webpack_require__(319),__webpack_require__(3)),services_article=__webpack_require__(77),FormattedDate=__webpack_require__(337),commentIcon=__webpack_require__(338);var withScript=__webpack_require__(165),helper=__webpack_require__(69),withCleanAmp=__webpack_require__(212);const Wrapper=styled_components_browser_esm.default.div`
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
`,SocialShareButtons=({cleanAmp:cleanAmp,...props})=>cleanAmp?Object(jsx_runtime.jsx)(SocialShareWithScript,{...props}):Object(jsx_runtime.jsx)(SocialShare,{...props});SocialShareButtons.propTypes={...SocialShare.propTypes,cleanAmp:prop_types_default.a.bool};var Article_SocialShare=Object(withCleanAmp.a)(SocialShareButtons);const ArticleMeta_Wrapper=styled_components_browser_esm.default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid ${props=>props.theme.color.navGrey};
  border-top: 1px solid ${props=>props.theme.color.navGrey};
  padding-bottom: 16px;
  align-items: baseline;
  @media ${Styles.c.laptop} {
    flex-direction: row;
    border-top: none;
  }
`,InnerWrapper=styled_components_browser_esm.default.div`
  color: ${props=>props.theme.color.fontMedium};
  font-size: 12px;
  font-family: ${props=>props.theme.fontFamily.secondaryFont};
  padding-top: 16px;
  line-height: normal;
  display: flex;
  line-height: 24px;
  @media ${Styles.c.laptop} {
    margin: auto 0;
    padding: 0;
    font-size: 14px;
  }
`,PublishedDate=styled_components_browser_esm.default.div`
  display: inline-flex;
`,Author=styled_components_browser_esm.default.div``,AuthorLink=styled_components_browser_esm.default.a`
  display: inline-block;
  font-weight: normal;
  text-decoration: none;
  color: ${props=>props.theme.color.fontMedium};
  border-bottom: 1px solid ${props=>props.theme.color.primary};
  &:hover {
    color: ${props=>props.theme.color.hover};
  }
`,ByAuthor=styled_components_browser_esm.default.span`
  font-weight: normal;
  color: ${props=>props.theme.color.fontMedium};
`,AuthorTwitterLink=Object(styled_components_browser_esm.default)(AuthorLink)`
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
`,AuthorDetails=styled_components_browser_esm.default.div`
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
`,AuthorTitle=styled_components_browser_esm.default.span`
  padding-left: 6px;
`,ArticleMeta=props=>{var _article$authors;const{className:className,theme:theme,article:article,configuration:configuration}=props,dateToShowInTimestamp=Object(services_article.b)(article),authors=null===(_article$authors=article.authors)||void 0===_article$authors?void 0:_article$authors.map(a=>Object(jsx_runtime.jsxs)(react.Fragment,{children:[Object(jsx_runtime.jsxs)(AuthorDetails,{children:[Object(jsx_runtime.jsx)(ByAuthor,{children:"By "}),Object(jsx_runtime.jsx)(AuthorLink,{href:a.path,children:a.firstName&&a.lastName?`${a.firstName} ${a.lastName}`:a.name}),a.jobTitle&&Object(jsx_runtime.jsx)(AuthorTitle,{children:a.jobTitle})]}),a.twitter&&Object(jsx_runtime.jsxs)(AuthorTwitterLink,{href:"https://twitter.com/"+a.twitter,children:["@",a.twitter]})]},a.id));return Object(jsx_runtime.jsxs)(ArticleMeta_Wrapper,{className:className,children:[Object(jsx_runtime.jsx)(InnerWrapper,{children:Object(jsx_runtime.jsxs)(Author,{className:"author",children:[authors||"",Object(jsx_runtime.jsx)(PublishedDate,{className:"publish-date",children:Object(jsx_runtime.jsx)(FormattedDate.a,{date:dateToShowInTimestamp})})]})}),Object(jsx_runtime.jsx)(Article_SocialShare,{className:"social-share",article:article,theme:theme,configuration:configuration})]})};ArticleMeta.propTypes={className:prop_types_default.a.string,configuration:prop_types_default.a.any,article:prop_types_default.a.object.isRequired,theme:prop_types_default.a.string},ArticleMeta.defaultProps={theme:"default"};__webpack_exports__.default=Object(RequestProvider.withRequest)(ArticleMeta)},54:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(84);class MockArticleContent extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.a)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.d)(props.articleOverrides),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockArticleContent.propTypes={articleOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockArticleContent.defaultProps={articleOverrides:{},reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockArticleContent},64:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return JW_PLAYER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BRIGHTCOVE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return YOUTUBE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DUGOUT_VIDEO})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GALLERY})),__webpack_require__.d(__webpack_exports__,"d",(function(){return IMAGE})),__webpack_require__.d(__webpack_exports__,"f",(function(){return POLAR}));const JW_PLAYER="jw_player",BRIGHTCOVE="brightcove",YOUTUBE="youtube",DUGOUT_VIDEO="dugout-video",GALLERY="gallery",IMAGE="image",POLAR="polar"},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return height})),__webpack_require__.d(__webpack_exports__,"j",(function(){return width})),__webpack_require__.d(__webpack_exports__,"d",(function(){return layout})),__webpack_require__.d(__webpack_exports__,"i",(function(){return sizes})),__webpack_require__.d(__webpack_exports__,"c",(function(){return heights})),__webpack_require__.d(__webpack_exports__,"e",(function(){return media})),__webpack_require__.d(__webpack_exports__,"h",(function(){return placeholder})),__webpack_require__.d(__webpack_exports__,"a",(function(){return fallback})),__webpack_require__.d(__webpack_exports__,"f",(function(){return noloading})),__webpack_require__.d(__webpack_exports__,"g",(function(){return on}));var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(166);const height=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.width==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`);break;case"fixed-height":if(null==props[propName])return new Error(`Props 'height is required for layout '${props.layout}'`)}},width=function(props,propName){switch(props.layout){case"fixed":case"intrinsic":case"responsive":if(props.height==props[propName]==void 0)return new Error(`Props 'width' or 'height is required for layout '${props.layout}'`)}},layout=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["container","fill","fixed","fixed-height","flex-item","intrinsic","nodisplay","responsive"]),sizes=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,heights=_helpers__WEBPACK_IMPORTED_MODULE_1__.b,media=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,placeholder=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,fallback=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,noloading=_helpers__WEBPACK_IMPORTED_MODULE_1__.a,on=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string},69:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ComponentThemeProvider})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ComponentThemesProvider}));const ComponentThemeProvider=(theme,Dark,Default)=>"dark"===theme?Dark:Default,ComponentThemesProvider=(theme,Default,themes)=>themes[theme]||Default},74:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return setMockArticleOverrides})),__webpack_require__.d(__webpack_exports__,"i",(function(){return setMockSectionOverrides})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setMockMenuOverrides})),__webpack_require__.d(__webpack_exports__,"h",(function(){return setMockReqOverrides})),__webpack_require__.d(__webpack_exports__,"j",(function(){return setMockStaticArticleOverrides})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setMockConfigurationOverrides})),__webpack_require__.d(__webpack_exports__,"f",(function(){return setMockLocalsOverrides})),__webpack_require__.d(__webpack_exports__,"a",(function(){return setIsArticle})),__webpack_require__.d(__webpack_exports__,"c",(function(){return setIsSection})),__webpack_require__.d(__webpack_exports__,"b",(function(){return setIsOther}));var jsx_runtime=__webpack_require__(0),createImage=__webpack_require__(41);var mockArticle=()=>({type:"article",id:"000",status:!0,title:"This is a title",titleShort:"This is a short title",lead:"This is the lead",sidebar:{data:{publication:{}},layoutSettings:[{type:"Ad"},{type:"Ad"}]},sections:[{path:"",name:""}],hierarchy:[{path:"./",name:"Crumb 1",sourcePath:"/crumb1"},{path:"./",name:"Crumb 2",sourcePath:"/crumb2"}],extra:{authorInfo:"London"},updated:"1588169959",publish:"1588169959",unPublish:"2145916800",isLiveBlog:!1,commenting:!0,authors:[{name:"I am the Author",id:"1048",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:null,imageUrl:Object(createImage.b)(0,150,0),twitter:"SomeJourno",facebook:null,location:null,path:"/author/jack-de-menezes",description:null}],inlineImages:[],articleTypes:[],adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},hero:[{type:"image",data:{title:"Old-Trafford-hosts-the-Manchester-derby.jpg",description:null,caption:"This is a hero caption",copyright:"Hero copyright",credit:"Hero credit",alt:null,doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:"8291876",bundle:"remote_image",mid:1038,changed:"1588226995",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"},localCaption:"This is a hero local caption"}}],body:[{type:"markup",data:{markup:'<p dir="ltr">Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Left aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"left",localCaption:"Left aligned image"},id:"4dynb5l3"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Center aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"center",localCaption:"Center aligned image"},id:"4dynb5l4"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}},{type:"image",data:{title:" Image title",caption:"Right aligned image",copyright:"Evening Standard",credit:null,alt:"Sample image",doNotReuse:!1,url:Object(createImage.b)(0,0,150),id:null,bundle:"remote_image",mid:22515,changed:"1596016353",workflow:{name:"Published",id:"2776",uuid:"2c103021-4868-4f64-8f4f-a8ada9d49cdf"},notes:null,align:"right",localCaption:"Right aligned image"},id:"4dynb5l5"},{type:"markup",data:{markup:'<p dir="ltr">Paragraph 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla est. Quam lacus suspendisse faucibus interdum. Malesuada nunc vel risus commodo viverra maecenas. Amet justo donec enim diam vulputate ut pharetra. Auctor eu augue ut lectus arcu. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Ac ut consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Metus vulputate eu scelerisque felis imperdiet. Massa tincidunt dui ut ornare. Pulvinar mattis nunc sed blandit libero volutpat. Sit amet consectetur adipiscing elit pellentesque.</p>'}}],topics:[{name:"Coronavirus",path:"/topic/coronavirus",id:"2791",uuid:"5fb2cb72-e9f4-4fcf-b747-bbba4afe8c1b"},{name:"covid-19",path:"/topic/covid-19",id:"2792",uuid:"808643d7-50fd-401a-b9de-2ef4d182b5f8"},{name:"Boris Johnson",path:"/topic/boris-johnson",id:"2790",uuid:"ca965785-4801-48bd-b738-6d341a18867f"},{name:"second wave",path:"/topic/second-wave",id:"6215",uuid:"4eb366bc-4861-4af4-a625-7045cdc92344"},{name:"Quarantine",path:"/topic/quarantine",id:"3451",uuid:"b607d24f-b8b8-4e67-aeac-20170cbabd3d"},{name:"Schools",path:"/topic/schools",id:"2880",uuid:"0ffee463-3f17-4966-a9fd-6fcd4cc0c64b"},{name:"Oliver Dowden",path:"/topic/oliver-dowden",id:"4291",uuid:"9f5e5539-6d52-433e-b472-5d76a4d60813"}]}),newslettersConfig=__webpack_require__(328),publication=__webpack_require__(130),articleX2=__webpack_require__(329),article=__webpack_require__(10),articleX4=__webpack_require__(330),ad_replacement=type=>({"premium-ad":{AdReplacement:{type:"premium_ad",data:{name:"Premium ad name",link:"/",category:null,id:"25",uuid:"e935d011-f8f8-4b34-a286-874659e29322",image:{type:"image",data:{title:"ICYMI MPU",description:"description",caption:null,copyright:"copyright",credit:null,alt:null,doNotReuse:!1,url:Object(createImage.b)(0,150,0),id:null,bundle:"remote_image",mid:632377,changed:"1595331176",workflow:{name:"Published",id:"24351",uuid:"0aec8f50-c466-4dc0-a885-b40ed69b6851"}}}}}},"premium-letter":{AdReplacement:{type:"premium_letter",data:{name:"Premium letter name",heading:"Premium letter heading",link:"/",author:{name:"Premium letter author",id:"28644",remoteId:"9191",email:null,firstName:null,lastName:null,jobTitle:"I'm an author of premium letters",imageUrl:Object(createImage.b)(150,150,0),twitter:"SomeAuthor",facebook:null,location:null,path:"/author/some-journo",description:"Some journo with a job working here",extra:null},body:"<p>Bla Bla Blah.....</p>",id:"11",uuid:"f711b4ba-6623-4362-bbf8-413dcfe60da9"}}}}[type]||{}),articleX6PlusMPU=(articleOverrides,adReplacementType="none")=>({name:"6 articles + MPU",type:"ArticleX6PlusMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"mpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX6 plus MPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX6 plus MPU article 6"}),...articleOverrides}],...ad_replacement(adReplacementType)}),articleX8=articleOverrides=>({name:"8 articles",type:"ArticleX8",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX8 article 1",heroType:"video"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 3 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 article 8"}),...articleOverrides}]}),articleX8PlusDMPU=(articleOverrides,adReplacementType="none")=>({name:"8 articles + DMPU",type:"ArticleX8PlusDMPU",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",ad:{type:"dmpu",alignment:"Right",adSource:"commercial"},articles:[{...Object(article.a)({title:"ArticleX8 plus DMPU article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 2"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 3"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 4"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 5"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 6"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 7"}),...articleOverrides},{...Object(article.a)({title:"ArticleX8 plus DMPU article 8"}),...articleOverrides}],...ad_replacement(adReplacementType)}),heroArticle=__webpack_require__(331),heroPlus2Articles=articleOverrides=>({name:"Hero + 2 Articles",type:"HeroPlus2Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X2 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 2",heroType:"video",live:!0}),...articleOverrides},{...Object(article.a)({title:"Hero + X2 article 3"}),...articleOverrides}]}),heroPlus3Articles=articleOverrides=>({name:"Hero + 3 Articles",type:"HeroPlus3Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X3 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X3 article 4"}),...articleOverrides}]}),heroPlus6Articles=articleOverrides=>({name:"Hero + 6 Articles",type:"HeroPlus6Articles",labelText:null,labelLink:null,useAuthorImage:!1,heroAlignment:"Left",contentSource:"Default",articles:[{...Object(article.a)({title:"Hero + X6 article 1"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 2"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 3"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 4"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 5"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 6"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 7"}),...articleOverrides},{...Object(article.a)({title:"Hero + X6 article 8"}),...articleOverrides}]}),more=__webpack_require__(258),title=__webpack_require__(332);var mockStaticArticle=()=>({type:"article",id:"2454",remoteId:null,status:!0,title:"Contact Evening Standard",titleShort:"Contact Evening Standard",titleSocial:"Contact Evening Standard",titleSEO:null,lead:"",path:"/service/contact-evening-standard-b2454.html",articleTypes:[{name:"Service",path:"/article-type/service",id:"6336",uuid:"dd3071b6-e9d5-4388-88b1-475b7dc4e5cc",changed:"1600680690"}],hierarchy:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],workflow:"Draft",sections:[{name:"Service",path:"/service",id:"250",uuid:"10a3a493-d9bc-4200-9ea6-7f4839044709",sourceId:"5461",sourceName:"Service",sourcePath:"service",changed:"1593773093"}],hero:null,photoArticle:!1,sponsorPrefix:null,sponsorName:null,sponsorURL:null,sponsorImage:null,sponsorLogo:"",sponsorMoreFrom:[],premium:!1,sensitive:!1,authors:null,updated:1601652557,changed:1601652557,publish:1601652557,firstCreated:1601647345,firstPublished:1601649499,overrideDate:0,isLiveBlog:!1,wordCount:842,imageCount:0,contentSource:[{name:"Internal",id:"6343",uuid:"774920cf-9dc9-463f-82f4-4f5be8d25046"}],tags:null,chain:null,topics:null,people:null,teams:null,events:null,publications:[{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}}],sidebar:{type:"sidebar_layout",data:{name:"Evening Standard Default sidebar_layout",id:"3",uuid:"563fbb67-4ca6-4398-8f21-f5a921d9efae",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null},layoutSettings:[{type:"markup",name:"Sidebar Markup",id:"8e27in6o",markup:""},{type:"Ad",name:"Sidebar Ad",id:"cjr5sxmk",adSource:"DFP"},{type:"MostPopular",name:"Most Popular",id:"wx1oq1dr"},{type:"PopularVideos",name:"Popular Videos",id:"s7x7wdxw"},{type:"Ad",name:"Sidebar Ad",id:"ivutyz22",adSource:"DFP"},{type:"SponsoredFeatures",name:"Sponsored Features",id:"gvp80c5v"},{type:"Taboola",name:"Taboola",id:"594axpb8"},{type:"Ad",name:"Sidebar Ad",id:"xqot2o8k",adSource:"DFP"}]},adConfig:{type:"ad_config",data:{name:"standard.co.uk Ad Config",description:"Default config for the Evening Standard",id:"1",uuid:"a9620513-8ece-4f60-8772-9891b5faf6fd",publication:{name:"Evening Standard",domain:"standard.co.uk",url:"https://www.standard.co.uk/",sectionRoot:{name:"Evening Standard",path:"/evening-standard",id:"118",uuid:"af867b36-dff2-4df2-b1ac-05dc1b4ce000",sourceId:"1",sourceName:"Evening Standard",sourcePath:"evening-standard",changed:"1593773093"},logoIcon:"https://www.standard.co.uk/img/shortcut-icons/icon-96x96.png",addUnitId:null,AmpContainerId:null,Ga360Id:null,id:"7",uuid:"da8828d2-b088-4187-bbeb-1dadaddd2141",town:null,region:null,parselyApiKey:null,facebookPage:null,twitterPage:null,twitterAt:null,GoogleCustomSeachId:null,buyPhotoUrl:null,Description:null,facebookAppId:null,facebookFbPages:null,siteKey:null,environment:{web:"https://standard-web-dev.brightsites.co.uk/",cms:"https://standard-cms-dev.brightsites.co.uk/",api:"https://standard-api-dev.brightsites.co.uk/"}},section:null,article:null},adConfig:[]},commenting:!0,priority:"4",images:null,OGImages:null,body:[{type:"markup",data:{markup:"<p>Here we set out some key information about who does what across our business and how you can contact them. You will find email addresses and phone numbers for our various departments. It will help us to answer your query quickly and fully if you direct it to the right place.</p>"},id:"r1nxh20s"},{type:"markup",data:{markup:'<p>If you have a story you think we might be interested to know about please email our news team at <a rel="nofollow" href="mailto:news@standard.co.uk">news@standard.co.uk</a>.</p>'},id:"3p070n38"},{type:"markup",data:{markup:'<p>For help with a technical problem relating to <a rel="nofollow" href="https://www.standard.co.uk">standard.co.uk</a> please contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>. For technical problems with the <strong>Evening Standard app</strong> please also contact <a rel="nofollow" href="https://eveningstandard.zendesk.com/hc/en-us/requests/new">Customer Services</a>.</p>'},id:"gxezcti2"},{type:"markup",data:{markup:'<p>If you have a concern about editorial material that has appeared in the Evening Standard or on this website (or on our apps), please visit our <a href="/service/code-conduct-complaints-b2443.html">Code of Conduct and our complaints procedure page</a>.</p>'},id:"q2zu192k"},{type:"H2",data:{markup:"<h2>E-editions</h2>"},id:"6h1b1kxp"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:standardonline@newspaperdirect.com">standardonline@newspaperdirect.com</a></p>'},id:"c4q05nvq"},{type:"markup",data:{markup:"<p>(A subscription to the Evening Standard E-editions provides access to the newspaper on line each day and includes all magazines, supplements and any special features published in the news stand edition in the UK)</p>"},id:"i7bwr7w1"},{type:"H2",data:{markup:"<h2>Advertising</h2>"},id:"w2z77ycp"},{type:"markup",data:{markup:'<p>Click here to find out more about advertising in the Evening Standard <a rel="nofollow" href="http://esimedia.co.uk/">esimedia.co.uk</a></p>'},id:"vtf5a3ro"},{type:"H2",data:{markup:"<h2>Evening Standard promotions</h2>"},id:"iiim3is7"},{type:"markup",data:{markup:'<p><a rel="nofollow" href="mailto:Davina.kesby@esimedia.co.uk">Davina.kesby@esimedia.co.uk</a></p>'},id:"ufrp2bvn"},{type:"H2",data:{markup:"<h2>Postal address:</h2>"},id:"z182wrw6"},{type:"markup",data:{markup:"<p>Evening Standard</p>"},id:"n5cbt5ya"},{type:"markup",data:{markup:"<p>ESI Media</p>"},id:"i76q9y94"},{type:"markup",data:{markup:"<p>2 Derry Street</p>"},id:"iloilefn"},{type:"markup",data:{markup:"<p>London W8 5TT​</p>"},id:"nju2j6g0"},{type:"markup",data:{markup:"<p>United Kingdom</p>"},id:"du1c8gio"},{type:"markup",data:{markup:"<p>Switchboard - 020 3367 7000</p>"},id:"l9418yeq"},{type:"H2",data:{markup:"<h2>Editorial contact details (newspaper)</h2>"},id:"2hw287zp"},{type:"markup",data:{markup:"<p>Editor: Emily Sheffield</p>"},id:"pj71460v"},{type:"markup",data:{markup:"<p>Editor in Chief: George Osborne</p>"},id:"8nr7kw5b"},{type:"markup",data:{markup:"<p>Deputy Editor: Charlotte Ross</p>"},id:"ymakbtx1"},{type:"markup",data:{markup:"<p>Executive Editor: Jack Lefley</p>"},id:"65cq0jwq"},{type:"listbulleted",data:{markup:"<ul><li>E-mail: syndication@standard.co.uk</li><li>Telephone: +44 (0)20 3615 2272 (text and video);</li><li>Telephone: +44 (0)20 3615 2277 (pictures)</li></ul>"},id:"g5v5akxt"},{type:"H3",data:{markup:"<h3>GO London</h3>"},id:"kq52bk6g"},{type:"markup",data:{markup:"<p>Editor: David Ellis</p>"},id:"5wqx9s06"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:david.ellis@standard.co.uk">david.ellis@standard.co.uk</a></p>'},id:"qyw79lzc"},{type:"H3",data:{markup:"<h3>Shopping</h3>"},id:"7tzarkvf"},{type:"markup",data:{markup:"<p>Editor: Jessica Reynolds</p>"},id:"u0rgahbi"},{type:"markup",data:{markup:'<p>E:<a rel="nofollow" href="mailto:jessica.reynolds@standard.co.uk"> jessica.reynolds@standard.co.uk</a></p>'},id:"vdgbm1ll"},{type:"H3",data:{markup:"<h3>Insider</h3>"},id:"23odz3fx"},{type:"markup",data:{markup:"<p>Editor: Lucy Pavia​</p>"},id:"5b6c2thb"},{type:"markup",data:{markup:'<p>E: <a rel="nofollow" href="mailto:lucy.pavia@standard.co.uk">lucy.pavia@standard.co.uk</a></p>'},id:"m7jzxvf2"},{type:"HR",data:{markup:""},id:"ri9jrypa"},{type:"H2",data:{markup:"<h2>Commercial contacts</h2>"},id:"bq15me4r"},{type:"markup",data:{markup:"<p>CEO: Charles Yardley</p>"},id:"hggk466j"},{type:"markup",data:{markup:"<p>Commercial director: James White</p>"},id:"yslu0zr0"},{type:"markup",data:{markup:"<p>Circulation Manager: Tim Freeman</p>"},id:"xh41dpiz"},{type:"markup",data:{markup:"<p>Classified Ad Director: Martin Smith</p>"},id:"wfrvboy7"},{type:"markup",data:{markup:'<p>Contact details: <a rel="nofollow" href="http://esimedia.co.uk/contact/">http://esimedia.co.uk/contact/</a></p>'},id:"g82tr3f4"},{type:"markup",data:{markup:""},id:"a0uws27l"}],extra:{products:[],starRating:0,isBreakingNews:!1,isHideNewsletterSignUp:!1,urlRedirect:"",featureTitle:"",isDisableAutoGallery:!1,isShowSponsoredCapsule:!1,isHideFromFIA:!1,isHideFromAMP:!1,isHideFromAppleNews:!1,authorInfo:"",isHideDisplayAds:!1,isHideHardCodedAds:!1,isHidePreRollAds:!1,displayDatePreference:"lastUpdatedDate",seoDescription:"",canonicalUrl:"",isDisableAllAds:!0,selectedCompetition:"",selectedSeason:"",selectedMatch:"",liveblog:"",liveblogKeypoints:"",liveblogKeypointsTitle:""},notes:[],grapeshot:["NONE"]});const mockWithRequest_mockArticle={},mockWithRequest_mockSection={},mockWithRequest_mockMenu={},mockReq={},mockWithRequest_mockConfiguration={},mockLocals={},mockWithRequest_mockStaticArticle={},mockRequestProps={res:{locals:mockLocals},req:mockReq,cleanAmp:!1,article:mockWithRequest_mockArticle,section:mockWithRequest_mockSection,menu:mockWithRequest_mockMenu,jsGlobals:{},configuration:mockWithRequest_mockConfiguration,staticArticle:mockWithRequest_mockStaticArticle},RequestProvider=__webpack_require__(8);RequestProvider.withRequest=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,...mockRequestProps}),RequestProvider.withRequestOnly=WrappedComponent=>props=>Object(jsx_runtime.jsx)(WrappedComponent,{...props,req:mockReq,res:{locals:{configuration:{}}}});const resetAndAssignOverrides=(mock,orig,overrides)=>{var obj;obj=mock,Object.keys(obj).forEach(key=>{delete obj[key]}),Object.assign(mock,orig,overrides)},setMockArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockArticle(),overrides)},setMockSectionOverrides=overrides=>{var articleOverrides;resetAndAssignOverrides(mockWithRequest_mockSection,{type:"section",section:{name:"News",path:"/",sourcePath:"news"},publication:"standard.co.uk",adConfig:{data:{publication:{domain:"standard.co.uk"}},adConfig:[]},components:[Object(heroArticle.a)(),Object(articleX2.a)(),{name:"3 articles",type:"ArticleX3",labelText:null,labelLink:null,useAuthorImage:!1,contentSource:"Default",articles:[{...Object(article.a)({title:"ArticleX3 article 1"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 2 (Commercial)",articleType:"Commercial"}),...articleOverrides},{...Object(article.a)({title:"ArticleX3 article 3"}),...articleOverrides}]},Object(articleX4.a)(),articleX8(),heroPlus2Articles(),heroPlus3Articles(),heroPlus6Articles(),Object(title.a)(),articleX6PlusMPU(),articleX8PlusDMPU(),Object(more.a)()]},overrides)},setMockMenuOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockMenu,{fullMenu:{name:"standard.co.uk Full Nav",domain:"standard.co.uk",bundle:"full_nav",id:"2",uuid:"fullmenu-uuid",menu:[{title:"Menu item 1",id:"nav_1",path:"./",children:[{title:"Subnav 1",id:"subnav_1",path:"./"},{title:"Subnav 2",id:"subnav_1",path:"./"},{title:"Subnav 3",id:"subnav_1"},{title:"Subnav 4",id:"subnav_1",path:"./"},{title:"Subnav 5",id:"subnav_1",path:"./"},{title:"Subnav 6",id:"subnav_1",path:"./"},{title:"Subnav 7",id:"subnav_1",path:"./"},{title:"Subnav 8",id:"subnav_1",path:"./"}],expanded:!1},{title:"Menu item 2",id:"nav_2",path:"./"},{title:"Menu item 3",id:"nav_2"},{title:"Menu item 4",id:"nav_3",path:"./"},{title:"Menu item 5",id:"nav_4",path:"./"}]},navbarMenu:{name:"standard.co.uk Nav Bar",domain:"standard.co.uk",bundle:"nav_bar",id:"1",uuid:"navbar-menu-uuid",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./"},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},subnavMenu:{name:"standard.co.uk Nav Bar - Best",domain:"standard.co.uk",bundle:"15",id:"15",uuid:"0b898818-1b27-4f1a-bc61-6ee99af7a41c",menu:[{title:"Nav item 1",id:"nav_1",path:"/",children:[{title:"Submenu item 1",id:"submenu_1",path:"./",children:[{title:"Sub-submenu item 1",id:"sub-submenu_1",path:"./"},{title:"Sub-submenu item 2",id:"sub-submenu_2",path:"./"},{title:"Sub-submenu item 3",id:"sub-submenu_3",path:"./"}]},{title:"Submenu item 2",id:"submenu_2",path:"./"},{title:"Submenu item 3",id:"submenu_3",path:"./"},{title:"Submenu item 4",id:"submenu_4",path:"./"},{title:"Submenu item 5",id:"submenu_5",path:"./"},{title:"Submenu item 6",id:"submenu_6",path:"./"}],active:!0},{title:"Nav item 2",id:"nav_2",path:"./"},{title:"Nav item 3",id:"nav_3",path:"./"},{title:"Nav item 4",id:"nav_4",path:"./"},{title:"Nav item 5",id:"nav_5",path:"./"}]},footerMenu:{name:"standard.co.uk Footer",domain:"standard.co.uk",bundle:"footer",id:"3",uuid:"e19e5d3a-574e-476d-9f24-05c9b0489d2f",menu:[{title:"Footer column 1",id:"footer_col_1",children:[{title:"Item 1",id:"footer_1_1",path:"./"},{title:"Item 2",id:"footer_1_2",path:"./"}],expanded:!0},{title:"Footer column 2",id:"footer_col_2",children:[{title:"Item 1",id:"footer_2_1",path:"./"},{title:"Item 2",id:"footer_2_2",path:"./"},{title:"Item 3",id:"footer_2_3",path:"./"}],expanded:!0},{title:"Footer column 3",id:"footer_col_3",children:[{title:"Item 1",id:"footer_3_1",path:"./"},{title:"Item 2",id:"footer_3_2",path:"./"},{title:"Item 3",id:"footer_3_3",path:"./"}],expanded:!0},{title:"Footer column 4",id:"footer_col_4",children:[{title:"Item 1",id:"footer_4_1",path:"./"},{title:"Item 2",id:"footer_4_2",path:"./"},{title:"Item 3",id:"footer_4_3",path:"./"},{title:"Item 4",id:"footer_4_4",path:"./"}],expanded:!0},{title:"Footer column 5",id:"footer_col_5",children:[{title:"Item 1",id:"footer_5_1",path:"./"},{title:"Item 2",id:"footer_5_2",path:"./"},{title:"Item 3",id:"footer_5_3",path:"./"},{title:"Item 4",id:"footer_5_4",path:"./"},{title:"Item 5",id:"footer_5_5",path:"./"}],expanded:!0}]}},overrides)},setMockReqOverrides=overrides=>{resetAndAssignOverrides(mockReq,{path:"",cookies:{},url:"",query:[]},overrides)},setMockStaticArticleOverrides=overrides=>{resetAndAssignOverrides(mockWithRequest_mockArticle,mockStaticArticle(),overrides)},setMockConfigurationOverrides=overrides=>(resetAndAssignOverrides(mockWithRequest_mockConfiguration,{domain:"standard.co.uk",jsGlobals:{userComments:[]},baseUrl:"",articleThemes:{insider:["/insider"]},sectionThemes:{insider:["/insider"]},feeds:{mmm:{src:"/mockMostPopularFeed.json",items:"articles"}},subdomain:{static:"static-dev"},componentThemes:{voices:["/voices"]},subscriptionConfig:{uk:{premium:{monthly:{headerCopy:"premium monthly header copy",price:"£premium-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{introOffer:"premium anual intro offer"}},tide:{monthly:{headerCopy:"tide monthly header copy",price:"£tide-monthly",introOfferSubtitle:"intro offer subtitle"},annual:{}},student:{}}},locale:"UK",jwplayerPlayerTypes:{defaultPlayerType:"autoplay",noAdsPlayerType:"autoplay",sensitivePlayerType:"clicktoplay",inlinePlayerType:"clicktoplay",commercialPlayerType:"autoplay"},jwplayerPlayerIds:{default:{defaultPlayer:"XLzx33eA",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"9ygSIn9G",commercialPlayer:"liFHUI6p"},premium:{defaultPlayer:"5o5ADYp0",noAdsPlayer:"sQ67rESa",sensitivePlayer:"QoL8Kre2",inlinePlayer:"iFfmiGED",commercialPlayer:"liFHUI6p"},amp:{defaultPlayer:"OUuXFa7T",noAdsPlayer:"liFHUI6p",sensitivePlayer:"uc5S9Kil",inlinePlayer:"cEvdfzWH",commercialPlayer:"sQ67rESa"}},social:{},newslettersConfig:newslettersConfig.a[publication.a]},overrides),mockWithRequest_mockConfiguration),setMockLocalsOverrides=overrides=>{resetAndAssignOverrides(mockLocals,{cleanAmp:!1,article:mockWithRequest_mockArticle,configuration:mockWithRequest_mockConfiguration,menu:mockWithRequest_mockMenu,staticArticle:mockWithRequest_mockStaticArticle},overrides)},setIsArticle=()=>{delete mockRequestProps.section,mockRequestProps.article=mockWithRequest_mockArticle},setIsSection=()=>{delete mockRequestProps.article,mockRequestProps.section=mockWithRequest_mockSection},setIsOther=()=>{delete mockRequestProps.article,delete mockRequestProps.section}},77:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return heroType})),__webpack_require__.d(__webpack_exports__,"c",(function(){return getHeroType})),__webpack_require__.d(__webpack_exports__,"b",(function(){return findDateBasedOnPreference})),__webpack_require__.d(__webpack_exports__,"e",(function(){return internalLinkCount})),__webpack_require__.d(__webpack_exports__,"a",(function(){return externalLinkCount})),__webpack_require__.d(__webpack_exports__,"f",(function(){return videoLinkCount}));var _constants_heroType__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64);const heroType=hero=>{const priorityList=[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.c,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.f];if(!hero)return[];return{...hero.filter(e=>priorityList.includes(e.type)).sort((a,b)=>priorityList.indexOf(a.type)-priorityList.indexOf(b.type))[0]||hero[0],isHero:!0}},getHeroType=hero=>{const articleType=hero?heroType(hero).type:_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.d;return[_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.e,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.a,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.g,_constants_heroType__WEBPACK_IMPORTED_MODULE_0__.b].includes(articleType)?"video":articleType},findDateBasedOnPreference=({extra:extra,overrideDate:overrideDate,firstPublished:firstPublished,updated:updated})=>{switch(extra.displayDatePreference){case"publishedDate":return firstPublished;case"lastUpdatedDate":return updated;case"vanityDate":return overrideDate;default:return overrideDate||updated||firstPublished}},linkCount=(body,domain,urlMatcher)=>{let counter=0;return body.filter(x=>"markup"===x.type).map(x=>{var _x$data;return null===(_x$data=x.data)||void 0===_x$data?void 0:_x$data.markup}).filter(Boolean).forEach(markup=>{const matches=markup.match(/href="(.*?)"/g);if(matches){const links=null==matches?void 0:matches.map(x=>x.slice(6,-1)).filter(urlMatcher);counter+=links.length}}),counter},internalLinkCount=(body,domain)=>linkCount(body,0,url=>url.match(new RegExp("^\\/\\w|^\\/\\/"+domain))),externalLinkCount=(body,domain)=>linkCount(body,0,url=>!url.match(new RegExp("^\\/\\w|^\\/\\/"+domain))),videoLinkCount=(body,hero)=>{const markups=body.filter(x=>"video-jwplayer"===x.type||"jw_player"===x.type).map(x=>{var _x$data2;return null===(_x$data2=x.data)||void 0===_x$data2?void 0:_x$data2.markup}),totalHeroVideos="video"===getHeroType(hero)?1:0;return markups.length+totalHeroVideos}},78:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),classnames=__webpack_require__(40),classnames_default=__webpack_require__.n(classnames);const Icon=styled_components_browser_esm.default.span`
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
`,FormTextField_TextField=({className:className,...passThroughProps})=>Object(jsx_runtime.jsx)(Fieldwrapper,{className:className,children:Object(jsx_runtime.jsx)(FormTextFieldInput,{...passThroughProps})});FormTextField_TextField.propTypes={className:prop_types_default.a.string},FormTextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{className:{type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=FormTextField_TextField;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/component/library/Forms/FormTextField.js"]={name:"TextField",docgenInfo:FormTextField_TextField.__docgenInfo,path:"app/component/library/Forms/FormTextField.js"})},83:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2);const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
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
`,Submit=({className:className,children:children})=>Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fieldwrapper,{className:className,children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(GlobalStyle,{}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubmitButton,{className:"form-submit",name:"submitBtn",type:"submit",children:[Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-loader"})]}),Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubmitButton,{className:"disabled-submit",disabled:!0,children:Object(react_jsx_runtime_js__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"btn-text",children:children||"Submit"})})]});Submit.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string},__webpack_exports__.a=Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(Submit)``},84:function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__(0),react=__webpack_require__(4),server_browser=__webpack_require__(255),es=__webpack_require__(919),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(2),ads=__webpack_require__(333);const MPUModule=__webpack_require__(256);let mockMPUID=0;const Wrapper=styled_components_browser_esm.default.div`
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
`,getMaxSize=sizesArr=>sizesArr.reduce((acc,item)=>{const area=item[0]*item[1];return area>acc.area?{max:item,area:area}:acc},{area:0}).max,getMaxSizeFromString=sizes=>getMaxSize((sizes=>sizes.split("|").map(sizeStr=>sizeStr.split("x").map(d=>Number(d))))(sizes)),MockMPU=props=>{const styles={},{cleanAmp:cleanAmp}=props.res.locals;let max,mpuSizeConfig;const id="mock_mpu_"+mockMPUID;return mockMPUID+=1,props.sizes?(max=getMaxSizeFromString(props.sizes),styles.width=max[0]+"px",styles.height=max[1]+"px"):props["size-key"]?mpuSizeConfig=ads.b[props["size-key"]]:(styles.width="300px",styles.height="250px"),Object(jsx_runtime.jsxs)(Wrapper,{className:props.className,children:[!cleanAmp&&props["size-key"]&&Object(jsx_runtime.jsx)("style",{children:mpuSizeConfig.map(breakPoint=>`\n@media (min-width: ${breakPoint.from}px) {\n  #${id} {\n${(breakPoint=>`\n${breakPoint.supportedSizes.length?"display: flex;":"display: none;"}\n${breakPoint.supportedSizes.length?(([width,height])=>`width: ${width}px; height: ${height}px;`)(getMaxSize(breakPoint.supportedSizes)):""}`)(breakPoint)}\n  }\n}\n`).join("")}),Object(jsx_runtime.jsxs)("div",{style:styles,id:id,children:[Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsx)("strong",{children:props.id})}),props.sizes&&Object(jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:props.sizes.replace(max.join("x"),`<strong>${max.join("x")}</strong>`)}}),props["size-key"]&&Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("p",{children:props["size-key"]}),mpuSizeConfig.map(breakPoint=>Object(jsx_runtime.jsxs)("p",{children:[breakPoint.from,"+: ",!breakPoint.supportedSizes.length&&"n/a",breakPoint.supportedSizes.map(size=>size.join("x")).join("|")]},breakPoint.from))]})]})]})};MockMPU.propTypes={id:prop_types_default.a.string.isRequired,className:prop_types_default.a.string,sizes:prop_types_default.a.string,"size-key":prop_types_default.a.string,res:prop_types_default.a.object.isRequired},MPUModule.default=MockMPU;__webpack_require__(2084);var mockWithRequest=__webpack_require__(74),mergeDeepRight=__webpack_require__(694),Styles=__webpack_require__(3);const WithTheme=({domain:domain,cleanAmp:cleanAmp,children:children})=>Object(jsx_runtime.jsxs)(styled_components_browser_esm.ThemeProvider,{theme:{...Object(mergeDeepRight.a)(Styles.e.default,Styles.e[domain]||{}),domain:domain},children:[Object(jsx_runtime.jsx)(Styles.a,{cleanAmp:cleanAmp}),Object(react.cloneElement)(children)]});WithTheme.propTypes={children:prop_types_default.a.element.isRequired,domain:prop_types_default.a.string,cleanAmp:prop_types_default.a.bool},WithTheme.__docgenInfo={description:"",methods:[],displayName:"WithTheme",props:{children:{type:{name:"element"},required:!0,description:""},domain:{type:{name:"string"},required:!1,description:""},cleanAmp:{type:{name:"bool"},required:!1,description:""}}};var components_WithTheme=WithTheme;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/WithTheme.js"]={name:"WithTheme",docgenInfo:WithTheme.__docgenInfo,path:"stories/helpers/components/WithTheme.js"});class Mocker_Mocker extends react.Component{constructor(props){super(props),this.setOverrides(props);const{domain:domain}=Object(mockWithRequest.e)(props.configurationOverrides);Object(mockWithRequest.f)(props.localsOverrides);const sheet=new styled_components_browser_esm.ServerStyleSheet;Object(server_browser.renderToString)(sheet.collectStyles(Object(jsx_runtime.jsx)(components_WithTheme,{domain:domain,cleanAmp:props.localsOverrides.cleanAmp,children:Object(react.cloneElement)(this.props.children)}))),this.css=sheet.instance.toString(),sheet.seal(),this.domain=domain}setOverrides(){}render(){return Object(jsx_runtime.jsxs)(es.a,{initialize:{languages:[{name:"English",code:"en"}],translation:{mostPopular:["Most Popular","alo"]},options:{defaultLanguage:"en",renderToStaticMarkup:server_browser.renderToStaticMarkup}},children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:this.css}}),Object(jsx_runtime.jsx)(components_WithTheme,{domain:this.domain,children:Object(react.cloneElement)(this.props.children)})]})}}Mocker_Mocker.propTypes={children:prop_types_default.a.element.isRequired,configurationOverrides:prop_types_default.a.object,localsOverrides:prop_types_default.a.object},Mocker_Mocker.defaultProps={configurationOverrides:{},localsOverrides:{}},Mocker_Mocker.__docgenInfo={description:"",methods:[{name:"setOverrides",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Mocker",props:{configurationOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},localsOverrides:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""}}};__webpack_exports__.a=Mocker_Mocker;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/helpers/components/Mocker.js"]={name:"Mocker",docgenInfo:Mocker_Mocker.__docgenInfo,path:"stories/helpers/components/Mocker.js"})},894:function(module){module.exports=JSON.parse('{"dirty-amp.js":"/_build/dirty-amp.4155cc40e7d0753a4ef5.js","dirty-amp.js.map":"/_build/dirty-amp.4155cc40e7d0753a4ef5.js.map","preview.js":"/_build/preview.79fa93dedd5debf7dbf1.js","preview.js.map":"/_build/preview.79fa93dedd5debf7dbf1.js.map","profile.js":"/_build/profile.945353563283ce992399.js","profile.js.map":"/_build/profile.945353563283ce992399.js.map","register.js":"/_build/register.359999e56a7029505852.js","register.js.map":"/_build/register.359999e56a7029505852.js.map","sar.js":"/_build/sar.3b7e38d55bbf65d0df49.js","sar.js.map":"/_build/sar.3b7e38d55bbf65d0df49.js.map","settings.js":"/_build/settings.ca49e00963cdd8ae81f1.js","settings.js.map":"/_build/settings.ca49e00963cdd8ae81f1.js.map","thankyou.js":"/_build/thankyou.5844e1adf8790b06e066.js","thankyou.js.map":"/_build/thankyou.5844e1adf8790b06e066.js.map","sw.js":"/_build/sw.js","sw.js.map":"/_build/sw.js.map"}')},920:function(module,exports,__webpack_require__){__webpack_require__(921),__webpack_require__(1272),__webpack_require__(1273),__webpack_require__(1470),__webpack_require__(1482),__webpack_require__(1484),__webpack_require__(1489),module.exports=__webpack_require__(2070)},93:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_Mocker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(84);class MockStaticPageData extends _Mocker__WEBPACK_IMPORTED_MODULE_2__.a{setOverrides(props){Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.b)(),Object(_mockWithRequest__WEBPACK_IMPORTED_MODULE_1__.h)(props.reqOverrides)}}MockStaticPageData.propTypes={reqOverrides:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.propTypes},MockStaticPageData.defaultProps={reqOverrides:{},..._Mocker__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps},__webpack_exports__.a=MockStaticPageData},94:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return TOP_BANNER})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WALLPAPER})),__webpack_require__.d(__webpack_exports__,"a",(function(){return NATIVE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return TABOOLA})),__webpack_require__.d(__webpack_exports__,"e",(function(){return adConfiguration})),__webpack_require__.d(__webpack_exports__,"f",(function(){return adConfigurationByType}));const TOP_BANNER="TopBanner",WALLPAPER="WallPaper",NATIVE="Native",TABOOLA="Taboola",adConfiguration=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.some(({type:type,value:value})=>type===needle&&!0===value),adConfigurationByType=({adConfig:{adConfig:adConfig}})=>needle=>adConfig.find(({type:type})=>type===needle)||{}},943:function(module,exports){}},[[920,1,2]]]);
//# sourceMappingURL=main.1355974e81c485399fd4.bundle.js.map