(this["webpackJsonpoptions-strategies"]=this["webpackJsonpoptions-strategies"]||[]).push([[1],{22:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(12),u=a(13),i=a(15),l=a(14),b=a(37),O=a(38),j=a(39),d=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,48))})),A=r.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,49))})),p=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cards"},r.a.createElement(b.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(O.a,null,r.a.createElement(j.a,{path:"/strategy-builder/:strike/:opt/:date",component:A}),r.a.createElement(j.a,{path:"/strategy-builder",component:A}),r.a.createElement(j.a,{path:"/OptionChain",component:d}),r.a.createElement(j.a,{path:"",component:d})))))}}]),a}(n.Component),E=a(5),f=a(20),h=a(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);var m=a(1),T={data:null,error:"",filt:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FetchData":return Object(m.a)(Object(m.a)({},e),{},{data:t.data});default:return e}},g={webInfo:null,skill:null,country:null,error:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEADERDATA":return Object(m.a)(Object(m.a)({},e),{},{webInfo:t.data});case"SKILLDATA":return Object(m.a)(Object(m.a)({},e),{},{skill:t.data});case"COUNTRYDATA":return Object(m.a)(Object(m.a)({},e),{},{country:t.data});case"CITYDATA":return Object(m.a)(Object(m.a)({},e),{},{city:t.data});case"COMPANYDATA":return Object(m.a)(Object(m.a)({},e),{},{company:t.data});case"INDUSTRYDATA":return Object(m.a)(Object(m.a)({},e),{},{industries:t.data});case"WORKTYPEDATA":return Object(m.a)(Object(m.a)({},e),{},{worktypes:t.data});case"LANGUAGEDATA":return Object(m.a)(Object(m.a)({},e),{},{languages:t.data});case"USERDATA":return Object(m.a)(Object(m.a)({},e),{},{users:t.data});case"JOBAPPLYSTATUSDATA":return Object(m.a)(Object(m.a)({},e),{},{jobApplyStatus:t.data});case"ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.msg});default:return e}},v={info:null,error:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILEDATA":return Object(m.a)(Object(m.a)({},e),{},{info:t.data});case"SKILL":return e.info.jobSkill=t.data.skill,Object(m.a)({},e);case"PROFILEUPDATE":return e.info.users=t.data.users,Object(m.a)({},e);case"INDUSTRY":return e.info.jobIndustry=t.data.industry,Object(m.a)({},e);case"EXPERIENCE":return e.info.userExp=t.data.employment,Object(m.a)({},e);case"LANGUAGE":return e.info.jobLanguage=t.data.language,Object(m.a)({},e);case"WORKTYPE":return e.info.jobWorkType=t.data.workType,Object(m.a)({},e);case"CITY":return e.info.jobCity=t.data.city,Object(m.a)({},e);case"ACCESS":return e.info.jobAccess=t.data.jobAccess,Object(m.a)({},e);case"POSTJOB":return e.postJob=t.data,Object(m.a)({},e);case"APPLYJOB":return e.info.jobApplyText=t.data.jobApplyText,Object(m.a)({},e);case"FETCHAPPLYJOB":return e.info.jobApply=t.data,Object(m.a)({},e);case"FETCHVIEWJOB":return e.info.jobView=t.data,Object(m.a)({},e);case"APPLYJOBUPDATE":return Object(m.a)({},e);case"VERIFYDATA":return Object(m.a)(Object(m.a)({},e),{},{webVerify:t.data});case"ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.msg});default:return e}},D=Object(E.c)({optionChainReducer:y,headerReducer:R,profileReducer:P}),w=Object(E.d)(D,Object(E.a)(f.a));o.a.hydrate(r.a.createElement(h.a,{store:w},r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,2,3]]]);
//# sourceMappingURL=main.4124cbe6.chunk.js.map