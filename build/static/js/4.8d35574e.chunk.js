(this["webpackJsonpoptions-strategies"]=this["webpackJsonpoptions-strategies"]||[]).push([[4],{41:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),c=a(14),s=a(0),o=a.n(s),i=a(47),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.error;return e?o.a.createElement("div",null,"Error: ",e.message):o.a.createElement("header",{className:"bg-info"},o.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center"},o.a.createElement("div",{className:"bg-info flex-fill"},o.a.createElement("h4",{className:"pl-2"},o.a.createElement(i.a,{className:"text-white",to:"/"},o.a.createElement("i",{className:"fa fa-globe icon32 pr-2"}),"Options Strategies"))),o.a.createElement("nav",{className:""},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link active text-white",to:"/"},o.a.createElement("i",{className:"fa fa-home icon32"}),o.a.createElement("label",{className:"menuLabel d-none d-md-block"},"Home"))),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link active text-white",to:"/strategy-builder"},o.a.createElement("i",{className:"fa fa-sellsy icon32"}),o.a.createElement("label",{className:"menuLabel d-none d-md-block"},"Strategy Builder")))))))}}]),a}(o.a.Component);t.a=m},42:function(e,t,a){"use strict";var n=a(12),r=a(13),l=a(15),c=a(14),s=a(0),o=a.n(s),i=a(46),m=a(45);new i.a;m.a.initialize("UA-171764678-1"),m.a.pageview(window.location.pathname+window.location.search);var h=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer bg-info border-top"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"foote_bottom_ul_amrc"},o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Privacy Policy")),o.a.createElement("li",null,o.a.createElement("a",{href:"/"},"Terms & Conditions"))),o.a.createElement("p",{className:"text-center"}," \xa9 Copyright 2020. All Rights Reserved."),o.a.createElement("ul",{className:"social_footer_ul"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.facebook.com/options.strategies.399"},o.a.createElement("i",{className:"fa fa-facebook"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/optionsstrateg4"},o.a.createElement("i",{className:"fa fa-twitter"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/options-strategies"},o.a.createElement("i",{className:"fa fa-linkedin"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/options20strategies/"},o.a.createElement("i",{className:"fa fa-instagram"}))))))}}]),a}(o.a.Component);t.a=h},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(12),r=a(13),l=(window&&window.location&&window.location.hostname,function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"getCall",value:function(e){return fetch(e,{method:"GET",headers:new Headers({"accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9","Content-Type":"application/json"})})}},{key:"postCall",value:function(e,t){return fetch(e,{method:"POST",body:JSON.stringify(t),headers:new Headers({"accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9","Content-Type":"application/json","set-cookie":""})})}}]),e}()),c=function(e){return function(e,t){return l.getCall("./api/option-chain-indices.json").then((function(e){return e.json()})).then((function(t){return e({type:"FetchData",data:t})})).catch((function(t){return e({type:"ERROR",msg:"Unable to fetch data"})}))}}},48:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(0),l=a.n(r),c=a(43),s=a(17),o=a(41),i=a(42),m=function(e){var t,a=Object(r.useState)(0),c=Object(n.a)(a,2),s=c[0],o=c[1],i=Object(r.useState)(!1),m=Object(n.a)(i,2),h=m[0],E=m[1],d=e.ExpDates;return d&&(t=l.a.createElement("select",{className:"form-control",value:s,onChange:function(t){o(t.target.value),e.onChildClick(t.target.value),E(!1),document.querySelectorAll(".trendShow").forEach((function(e){return e.classList.add("d-none")}))}},d.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"rows"},l.a.createElement("div",{className:"float-right"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},"Expiry Date")),t),l.a.createElement("div",{className:"form-check mb-2 mr-sm-2"},l.a.createElement("label",{className:"form-check-label"},"Underlying Index:  ",e.selectOptions," ",e.underlyingValue," As on ",e.timeStamp)),l.a.createElement("div",{className:"btn-group-toggle"},l.a.createElement("label",{className:"btn btn-secondary active",onClick:function(e){E(!h),h?document.querySelectorAll(".trendShow").forEach((function(e){return e.classList.add("d-none")})):document.querySelectorAll(".trendShow").forEach((function(e){return e.classList.remove("d-none")}))}},h?"Remove":"Show"," Trend")))))},h=a(47),E=function(e){var t,a=e.item;function n(e){var t=Math.abs(e);if(t>6)return 1;var a=1/(1+.2316419*t),n=((((1.330274429*a-1.821255978)*a+1.781477937)*a-.356563782)*a+.31938153)*a;return n=1-.3989423*Math.exp(e/2*-e)*n,e<0&&(n=1-n),n}function r(e,t){if(!(e&&e.strikePrice&&e.impliedVolatility&&e.lastPrice)){return{callPrice:0,delta:0,theta:0,gamma:0,vega:0,rho:0}}var a=e.underlyingValue,r=e.strikePrice,l=function(e){var t=new Date,a=new Date(e),n=Math.abs(a.getTime()-t.getTime());return Math.ceil(n/864e5)}(e.expiryDate),c=(e.lastPrice,e.impliedVolatility);if(e.lastPrice>0)return function(e,t,a,r,l,c,s){var o,i,m,h,E,d,u=a/100,p=c/100,g=r/365,f=0;if("CE"===s){var N=(Math.log(e/t)+(u-f+Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),w=(Math.log(e/t)+(u-f-Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),P=n(N),M=n(w);o=e*Math.exp(-1*f*g)*P-t*Math.exp(-1*u*g)*M,i=Math.exp(-1*f*g)*P,m=(e*(1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(N,2)/2))*p*Math.exp(-1*g*f)/(2*Math.sqrt(g))*-1+f*e*i-u*t*Math.exp(-1*u*g)*n(w))/365,h=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(N,2)/2)*Math.exp(-1*g*f)/(e*p*Math.sqrt(g)),E=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(N,2)/2)*Math.exp(-1*g*f)*e*Math.sqrt(g)/100,d=t*g*Math.exp(-1*u*g)*M*Math.exp(-1*f*g)/100}else{var S=(Math.log(e/t)+(u-f+Math.pow(p,2)/2)*g)/(p*Math.sqrt(g)),C=(Math.log(e/t)+(u-f-Math.pow(p,2)/2)*g)/(p*Math.sqrt(g));o=t*Math.exp(-1*u*g)*n(-1*C)-e*Math.exp(-1*f*g)*n(-1*S),i=Math.exp(-1*f*g)*(n(S)-1),m=(e*(1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(S,2)/2))*p*Math.exp(-1*g*f)*-1/(2*Math.sqrt(g))-f*e*n(-1*S)*Math.exp(-1*g*f)+u*t*Math.exp(-1*u*g)*n(-1*C))/365,h=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(S,2)/2)*Math.exp(-1*g*f)/(e*p*Math.sqrt(g)),E=1/Math.sqrt(6.28318)*Math.exp(-1*Math.pow(S,2)/2)*Math.exp(-1*g*f)*e*Math.sqrt(g)/100,d=-1*t*g*Math.exp(-1*u*g)*n(-1*C)*Math.exp(-1*f*g)/100}return{R:u.toFixed(2),V:p.toFixed(2),T:g.toFixed(2),D:f.toFixed(2),callPrice:o.toFixed(2),delta:i.toFixed(2),theta:m.toFixed(2),gamma:h.toFixed(2),vega:E.toFixed(2),rho:d.toFixed(2)}}(a,r,6.5,l,0,c,t)}if(a&&(a.CE&&a.CE.lastPrice>1||a.PE&&a.PE.lastPrice>1)){var c,s;if(a.CE&&a.CE.lastPrice){var o=r(a.CE,"CE"),i=a.CE.strikePrice<a.CE.underlyingValue?"bgMoccasin":"";c=l.a.createElement(l.a.Fragment,null,l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change<0&&a.CE.changeinOpenInterest<0?"BULLISH":"",a.CE.change>0&&a.CE.changeinOpenInterest>0?"BULLISH":"",a.CE.change>0&&a.CE.changeinOpenInterest<0?"BULLISH":"",a.CE.change<0&&a.CE.changeinOpenInterest>0?"BEARISH":""),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change<0&&a.CE.changeinOpenInterest<0?"Long Liquidation":"",a.CE.change<0&&a.CE.changeinOpenInterest>0?"Short Buildup":"",a.CE.change>0&&a.CE.changeinOpenInterest>0?"Long Buildup":"",a.CE.change>0&&a.CE.changeinOpenInterest<0?"Short covering":""),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.changeinOpenInterest>0?"UP":"DOWN"),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.change>0?"UP":"DOWN"),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.totalTradedVolume),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.openInterest),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyCe}"},a.CE.changeinOpenInterest),l.a.createElement("td",{className:i},o.rho),l.a.createElement("td",{className:i},o.vega),l.a.createElement("td",{className:i},o.gamma),l.a.createElement("td",{className:i},o.theta),l.a.createElement("td",{className:i},o.delta),l.a.createElement("td",{className:i},o.callPrice),l.a.createElement("td",{className:a.CE.change>0?"text-success":"text-danger"},a.CE.change.toFixed(2)),l.a.createElement("td",{className:i},l.a.createElement(h.a,{to:"/strategy-builder/"+a.CE.strikePrice+"/CE/"+a.CE.expiryDate},a.CE.lastPrice)),l.a.createElement("td",{className:i},a.CE.impliedVolatility))}else c=l.a.createElement(l.a.Fragment,null,l.a.createElement("th",{className:"trendShow d-none",colSpan:"9"}),l.a.createElement("th",{colSpan:"9"}));if(a.PE&&a.PE.lastPrice>1){var m=a.PE.strikePrice>a.PE.underlyingValue?"bgMoccasin":"",E=r(a.PE,"PE");s=l.a.createElement(l.a.Fragment,null,l.a.createElement("td",{className:m},a.PE.impliedVolatility),l.a.createElement("td",{className:m},l.a.createElement(h.a,{to:"/strategy-builder/"+a.PE.strikePrice+"/PE/"+a.PE.expiryDate},a.PE.lastPrice)),l.a.createElement("td",{className:a.PE.change>0?"text-success":"text-danger"},a.PE.change.toFixed(2)),l.a.createElement("td",{className:m},E.callPrice),l.a.createElement("td",{className:m},E.delta),l.a.createElement("td",{className:m},E.theta),l.a.createElement("td",{className:m},E.gamma),l.a.createElement("td",{className:m},E.vega),l.a.createElement("td",{className:m},E.rho),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.changeinOpenInterest),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.openInterest),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.totalTradedVolume),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change>0?"UP":"DOWN"),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.changeinOpenInterest>0?"UP":"DOWN"),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change<0&&a.PE.changeinOpenInterest<0?"Long Liquidation":"",a.PE.change<0&&a.PE.changeinOpenInterest>0?"Short Buildup":"",a.PE.change>0&&a.PE.changeinOpenInterest>0?"Long Buildup":"",a.PE.change>0&&a.PE.changeinOpenInterest<0?"Short covering":""),l.a.createElement("td",{className:"trendShow d-none {inTheMoneyPe}"},a.PE.change<0&&a.PE.changeinOpenInterest<0?"BULLISH":"",a.PE.change>0&&a.PE.changeinOpenInterest>0?"BULLISH":"",a.PE.change>0&&a.PE.changeinOpenInterest<0?"BULLISH":"",a.PE.change<0&&a.PE.changeinOpenInterest>0?"BEARISH":""))}else s=l.a.createElement(l.a.Fragment,null,l.a.createElement("th",{className:"trendShow d-none",colSpan:"9"}),l.a.createElement("th",{colSpan:"9"}));t=l.a.createElement("tr",{key:a.strikePrice},c,l.a.createElement("th",{className:"text-center"},a.strikePrice),s)}return l.a.createElement(l.a.Fragment,null,t)},d=function(e){var t=e.callPutData;return t?l.a.createElement("div",{className:"rows"},l.a.createElement("table",{className:"table table-sm table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"trendShow d-none text-center",colSpan:"7"},"Trend"),l.a.createElement("th",{className:"text-center",colSpan:"9"},"CE"),l.a.createElement("th",{className:"text-center"},"Strike"),l.a.createElement("th",{className:"text-center",colSpan:"9"},"PE"),l.a.createElement("th",{className:"trendShow d-none text-center",colSpan:"7"},"Trend")),l.a.createElement("tr",null,l.a.createElement("th",{className:"trendShow d-none"},"TREND"),l.a.createElement("th",{className:"trendShow d-none"},"Interpretation"),l.a.createElement("th",{className:"trendShow d-none"},"OI change"),l.a.createElement("th",{className:"trendShow d-none"},"price change"),l.a.createElement("th",{className:"trendShow d-none"},"VOLUME"),l.a.createElement("th",{className:"trendShow d-none"},"OI"),l.a.createElement("th",{className:"trendShow d-none"},"CHNG IN OI"),l.a.createElement("th",null,"Rho"),l.a.createElement("th",null,"Vega"),l.a.createElement("th",null,"Gamma"),l.a.createElement("th",null,"Theta"),l.a.createElement("th",null,"Delta"),l.a.createElement("th",null,"Theoretical Price"),l.a.createElement("th",null,"CHNG"),l.a.createElement("th",null,"LTP"),l.a.createElement("th",null,"IV"),l.a.createElement("th",{className:"text-center"},"Price"),l.a.createElement("th",null,"IV"),l.a.createElement("th",null,"LTP"),l.a.createElement("th",null,"CHNG"),l.a.createElement("th",null,"Theoretical Price"),l.a.createElement("th",null,"Delta"),l.a.createElement("th",null,"Theta"),l.a.createElement("th",null,"Gamma"),l.a.createElement("th",null,"Vega"),l.a.createElement("th",null,"Rho"),l.a.createElement("th",{className:"trendShow d-none"},"CHNG IN OI"),l.a.createElement("th",{className:"trendShow d-none"},"OI"),l.a.createElement("th",{className:"trendShow d-none"},"VOLUME"),l.a.createElement("th",{className:"trendShow d-none"},"price change"),l.a.createElement("th",{className:"trendShow d-none"},"OI change"),l.a.createElement("th",{className:"trendShow d-none"},"Interpretation"),l.a.createElement("th",{className:"trendShow d-none"},"TREND"))),l.a.createElement("tbody",null,t?t.map((function(e){return l.a.createElement(E,{key:e.strikePrice,item:e})})):""))):l.a.createElement("div",{className:"card"},"loading")};t.default=Object(s.b)((function(e){return{list:e.optionChainReducer.data}}),(function(e){return{onFetchData:function(t){return e(Object(c.a)(t))}}}))((function(e){var t=e.onFetchData,a=Object(r.useState)(0),c=Object(n.a)(a,2),h=c[0],E=c[1],u=Object(r.useState)(0),p=Object(n.a)(u,2),g=p[0],f=p[1],N=Object(s.c)((function(e){return e.optionChainReducer.data}));return N&&N.filtered&&0===h&&(E(N.filtered.data),N.filtered.data[0]&&N.filtered.data[0].PE||N.filtered.data[0]&&N.filtered.data[0].CE?f(N.filtered.data[0].PE.underlying):f("")),Object(r.useEffect)((function(){t("NIFTY")}),[]),l.a.createElement("div",{className:"rows"},l.a.createElement(o.a,null),l.a.createElement("div",{className:"container1 mt-4"},l.a.createElement(m,{ExpDates:N&&N.records.expiryDates,timeStamp:N&&N.records.timestamp,selectOptions:g,underlyingValue:N&&N.records.underlyingValue,onChildChange:function(e){t(e)},onChildClick:function(e){E(N.records.data.filter((function(t){return t.expiryDate===e})))}}),l.a.createElement(d,{callPutData:h})),l.a.createElement(i.a,null))}))}}]);
//# sourceMappingURL=4.8d35574e.chunk.js.map