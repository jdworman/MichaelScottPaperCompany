(function(m){var l=window.AmazonUIPageJS||window.P,r=l._namespace||l.attributeErrors,e=r?r("PageRefreshAsset"):l;e.guardFatal?e.guardFatal(m)(e,window):e.execute(function(){m(e,window)})})(function(m,l,r){m.when("A","page-refresh-state","web-ajax-utility","alt-page-refresh-measurement").register("page-refresh-handler",function(e,h,g,d){var a={},c=e.$,k=r,f=function(b,a){var d=this;d.clientId=b;d.persistentParams={};d.pageRefreshUrlParams="";d.deviceType="";d.doPageRefresh=function(f,k,h,l){d.persistentParams=
c.extend(!0,d.persistentParams,k.Persistent);var m={};c.extend(!0,m,d.persistentParams,k["Non-Persistent"]);k=a;var r=e.contains(k,"?");k=k+(r?"&":"?")+((f?"asin="+f:"")+(d.pageRefreshUrlParams?d.pageRefreshUrlParams:""));for(var v in m)null!=m[v]&&(f=m[v],r=k.slice(-1),k+="?"===r||"&"===r?"":"&",k+=v+"="+f);g.getInstance(b,k,h,l).getContent()};d.addParams=function(b){d.persistentParams=c.extend(!0,d.persistentParams,b);return!0};d.removeParams=function(b){e.each(b,function(b,a){delete d.persistentParams[b]});
return!0};d.createCustomParamsMap=function(b,a){var d={Persistent:{},"Non-Persistent":{}};c.each(b,function(b,a){d.Persistent[b]=a});c.each(a,function(b,a){d["Non-Persistent"][b]=a});return d};d.startMeasurement=function(b,a,c,d){k&&k.start(b,a,c,d)};d.stampImageLoad=function(b){k&&k.stampImageLoad(b)};d.stampFeature=function(b,a){k&&k.stampFeature(b,a)};(function(){var b=h.pageRefreshData;d.pageRefreshUrlParams=b.pageRefreshUrlParams;d.deviceType=b.deviceType})()};return{getHandlerInstance:function(b,
e,g){(null==b||""===b)&&l.ueLogError&&l.ueLogError({message:"Invalid ClientId"},{logLevel:"FATAL",attribution:"PageRefreshAPI",message:"Invalid ClientId passed to getHandlerInstance of dpRefreshHandler"});a[b]||(a[b]=new f(b,e));k||(e=g.config,k=new d(c,e.atf.marker,e.cf.marker),k.init(g.storeID,g.productGroupID));return a[b]}}});m.when("A","page-refresh-handler").register("dp-refresh-handler",function(e,h){function g(d,a,c){this.featureTriggeringRefresh=d.featureName;this.deviceType=
(this.deviceTypeStateData=e.state("detail-page-device-type"))&&this.deviceTypeStateData.deviceType?this.deviceTypeStateData.deviceType:"web";this.pageRefreshUrl=a&&a.pageRefreshUrl?a.pageRefreshUrl:"/gp/twister/ajaxv2";this.clientId="PageRefresh_"+this.deviceType+"_Client";this.DPRefreshHandler=h.getHandlerInstance(this.clientId,this.pageRefreshUrl,c)}g.prototype={doPageRefresh:function(d,a,c,e){try{this.DPRefreshHandler.doPageRefresh(d,a,c,e)}catch(f){l.ueLogError&&l.ueLogError(f,{logLevel:"ERROR",
attribution:this.featureTriggeringRefresh,message:"This error is caused by the doPageRefresh method triggered by - "+this.featureTriggeringRefresh})}},createCustomParamsMap:function(d,a){var c={};try{c=this.DPRefreshHandler.createCustomParamsMap(d,a)}catch(e){l.ueLogError&&l.ueLogError(e,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the createCustomParamsMap method triggered by - "+this.featureTriggeringRefresh})}return c},addParams:function(d){return d&&
"object"==typeof d?this.DPRefreshHandler.addParams(d):!1},removeParams:function(d){return d&&"object"==typeof d?this.DPRefreshHandler.removeParams(d):!1},startMeasurement:function(d,a,c,e){try{this.DPRefreshHandler.startMeasurement(d,a,c,e)}catch(f){l.ueLogError&&l.ueLogError(f,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampImageLoad:function(d){try{this.DPRefreshHandler.stampImageLoad(d)}catch(a){l.ueLogError&&
l.ueLogError(a,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampFeature:function(d,a){try{this.DPRefreshHandler.stampFeature(d,a)}catch(c){l.ueLogError&&l.ueLogError(c,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}}};return g});m.when("A","jQuery").register("alt-page-refresh-ajax-scope",
function(e,h){return function(e,d,a){this.scopeName=d;this.url=a;ues("t0",d,l.newTwisterInteractionStartTime);ues("ctb",d,"1");this.signalMarker=function(a){!this.markers[a]||0>=this.markers[a].conditions||0===--this.markers[a].conditions&&"function"==typeof this.markers[a].handler&&this.markers[a].handler()};this.addlongPoleTag=function(a,c){a=a.toLowerCase();this.markers[a]&&0==this.markers[a].conditions&&0==this.markers[a].conditions&&l.ue&&"function"===typeof ue.tag&&ue.tag(c)};this.postData=
function(){var a=this.scopeName;e.ajax({url:this.url,dataType:"text",timeout:4E4,error:function(){},success:function(c,b,d){ues("id",a,c);uex("ld",a)}})};var c=this;this.markers={image:{conditions:1,handler:function(){uet("ne",d);c.signalMarker("af")}},af:{conditions:Twister.atfMarkerCount?Twister.atfMarkerCount:2,handler:function(){uet("af",d);uet("cf",d);c.signalMarker("cf")}},cf:{conditions:Twister.cfMarkerCount?Twister.cfMarkerCount:2,handler:function(){uet("cf",d);c.postData()}}}}});m.when("A",
"jQuery","alt-page-refresh-ajax-scope").register("alt-page-refresh-measurement",function(e,h,g){return function(d,a,c){this.atfMarker=a;this.cfMarker=c;this.scopeCount={};this.ajaxScopes={};this.url="";this.init=function(a,c){this.url="/gp/twister/dynamic-update/ajax-measurement.html/?s="+a+"&pgid="+c+"&deviceType="+Twister.deviceType;Twister.isInstaTwisterEnabled&&(this.url+="&ptd="+Twister.productTypeName)};this.start=function(a,c,b,e){if(l.ue){this.scopeCount[a]||(this.scopeCount[a]=0);var h=a+
(this.scopeCount[a]+1);this.scopeCount[a]++;var m=this.url;c&&(m+="&dimensionType="+c);"undefined"!==typeof b&&(m+="&dimensionCount="+b);"undefined"!==typeof e&&(m+="&dimensionsDisplayType="+e);this.ajaxScopes[a]=new g(d,h,m)}};this.stampImageLoad=function(a){this.ajaxScopes[a]&&(this.ajaxScopes[a].signalMarker("image"),Twister.cfImageLongPollTag&&this.ajaxScopes[a].addlongPoleTag("cf",Twister.cfImageLongPollTag))};this.stampFeature=function(a,c){this.ajaxScopes[c]&&(a===this.atfMarker&&this.ajaxScopes[c].signalMarker("af"),
a===this.cfMarker&&(this.ajaxScopes[c].signalMarker("cf"),Twister.cfHtmlLongPollTag&&this.ajaxScopes[c].addlongPoleTag("cf",Twister.cfHtmlLongPollTag)))};this.stampCustomMetrics=function(a,c){this.ajaxScopes[c]&&uet(a,this.ajaxScopes[c].scopeName)}}});m.when("A","ready").register("page-refresh-state",function(e){var h=e.state("page-refresh-data");e=e.state("detail-page-device-type");var g={};"undefined"!==typeof h&&(g.pageRefreshUrlParams=h.pageRefreshUrlParams);"undefined"!==typeof e&&(g.deviceType=
e.deviceType);return{pageRefreshData:g}});m.when("A","jQuery","dp-js-logger").register("web-ajax-utility",function(e,h,g){function d(a,b,c,d){this.scope=a;this.url=b;this.options=c;this.status=0;this.selected=!1;this.error=this.successData=this.xhr=this._status=r;this.chunks=[];this.doNotAbort=d||!1}function a(){var a=Date.now();k=k||[];3<=k.length&&1E3<a-k[0]&&(l.ue&&l.ue.count&&l.ue.count("pageRefresh:robotDetected",k.length),m.log("Detected robot exceeding number of request threshold:"+k.length,
"ERROR","pageRefreshRequests"),k=[]);if(0<k.length)for(;0<k.length&&1E3<a-k[0];)k.shift();k.push(a)}var c=new g("WebAjaxUtility");d._objects={};var k=[];d.prototype._callback=function(){var a=arguments[0],b=Array.prototype.slice.call(arguments,1);"function"===typeof a&&a.apply(self,b)};d.prototype._canAbort=function(){return!this.doNotAbort&&1===this.status};d.prototype._isAborted=function(){return 3===this.status};d.prototype._getUrl=function(){return this.url};d.prototype._abort=function(){if(1===
this.status)try{this.ajaxRequestRefence.abort(),this.status=3}catch(a){c.logFatal(a,{message:" Could not abort ajax request."})}};d.prototype._flushChunkData=function(){var a=this;a.chunks.length&&h.map(a.chunks,function(b){a._callback(a.options.chunk,b)})};d.prototype._request=function(){var c=this;a();c.ajaxRequestRefence=e.get(c.url,{params:c.options.params,success:function(b,a,d){c.status=4;c.successData=b;c._status=a;c.xhr=d;c.selected&&c._callback(c.options.success,b,a,d)},error:function(a,
d,e){c.status=2;c.xhr=a;c._status=d;c.error=e;c.selected&&c._callback(c.options.error,a,d,e)},abort:function(a){c.status=3;c.xhr=a;c.selected&&c._callback(c.options.abort,a)},chunk:function(a){a&&(c.chunks.push(a),c.selected&&c._callback(c.options.chunk,a))},timeout:c.options.timeout||4E4})};d.prototype.getContent=function(){d._abortRequestsExcept(this);this.selected=!0;0===this.status?(this.status=1,this._request()):1===this.status?this._flushChunkData():4===this.status&&(this._flushChunkData(),
this._callback(this.options.success,this.successData,this._status,this.xhr),e.trigger("a:pageUpdate"))};d._abortRequestsExcept=function(a){h.each(d._objects[a.scope],function(b,c){c._canAbort()&&b!==a._getUrl()&&c._abort()})};d.getInstance=function(a,b,c,e){if(!a||!b||"object"!==typeof c)throw"Incorrect parameter passed.";d._objects[a]=d._objects[a]||{};var g=d._objects[a][b];g&&g._isAborted()&&(delete d._objects[a][b],g=r);g||(d._objects[a][b]=new d(a,b,c,e,this));return d._objects[a][b]};return d});
m.when("A").register("state-aware-critical-features",function(e){return function(){var e=[];this.add=function(g,d){for(var a=g.featureName,c=!1,k=0;k<e.length;k++)if(e[k].featureName===a){c=!0;break}if(c)throw"Critical Feature "+g.featureName+" already registered for State Aware Messaging!";c={};c.featureName=a;c.callback=d;e.push(c)};this.getAllCriticalFeatures=function(){return e}}});m.when("A","state-aware-parameter-handler").register("state-aware-feature-consolidator",function(e,h){return{getStateAwareParameters:function(){return h.getStateAwareParameters()}}});
m.when("A","state-aware-critical-features","state-aware-parameters").register("state-aware-parameter-handler",function(e,h,g){return new function(){var d=new h,a=new g;this.registerCriticalFeature=function(a,e){try{if("function"===typeof e)d.add(a,e);else throw"callback needs to be a function!";}catch(f){l.ueLogError&&l.ueLogError(f,{logLevel:"ERROR",attribution:a.featureName,message:"StateAwareExceptionMessaging:- This error is caused by the feature "+a.featureName+" while registering itself as a critical feature for State Aware Messaging. "+
f})}};this.getStateAwareParameters=function(){for(var c=d.getAllCriticalFeatures(),e=0;e<c.length;e++){var f=c[e],b=f.featureName,f=f.callback.apply();try{a.putParameters(b,f)}catch(g){l.ueLogError&&l.ueLogError(g,{logLevel:"ERROR",attribution:b,message:"StateAwareMessaging:- This error is caused by the feature "+b+" while injecting state aware parameters. "+g})}}return a.getAllStateAwareParameters()}}});m.when("A").register("state-aware-parameters",function(){return function(){var e={};this.putParameters=
function(h,g){var d=!0;for(feature in e)if(e.hasOwnProperty(feature)&&h!==feature){var a=this.getParameters(feature);if(d){var d=g,c=!1;for(paramKey in d)if(d.hasOwnProperty(paramKey)&&a.hasOwnProperty(paramKey)){c=!0;break}d=!c}}if(d)for(paramKey in g)g.hasOwnProperty(paramKey)&&(a=g[paramKey],e[h]||(e[h]={}),e[h][paramKey]=a);else throw"Duplicate Parameters found for other Critical Feature!";};this.getParameters=function(h){return e[h]};this.getAllStateAwareParameters=function(){var h={},g;for(g in e)if(e.hasOwnProperty(g)){var d=
this.getParameters(g),a;for(a in d)d.hasOwnProperty(a)&&(h[a]=d[a])}return h}}});m.when("A").register("page-refresh-utils",function(e){var h=e.$,g={intermediateEOS:1,EOS:1};return{fadeInFeatures:function(d){h.each(d,function(a,e){"#"!==e[0]&&(d[a]="#"+e)});var a=d.join(",");h(a).addClass("js-feature-refresh-overlay");h(a).css("opacity",.5)},refreshFeature:function(d){var a=d.Value;d=d.FeatureName;if(!g[d]){var c,e;try{d&&a&&a.content&&(e=a.content[d],"undefined"!==typeof e&&(c=h("#"+d),c.html(e),
c.removeClass("js-feature-refresh-overlay"),c.css("opacity","")))}catch(f){a={message:"Error in feature"+(d||"NoFeatureName"),logLevel:"FATAL"},l.ueLogError&&l.ueLogError(f,a)}}},removeOverlayForAllFeatures:function(d){d=h("body").find(".js-feature-refresh-overlay");for(var a=0;a<d.length;a++){var c=d[a];h(c).removeClass("js-feature-refresh-overlay");h(c).css("opacity","")}}}})});