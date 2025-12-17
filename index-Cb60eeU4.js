(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(o){if(o.ep)return;o.ep=!0;const f=i(o);fetch(o.href,f)}})();function xy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _f={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function EE(){if(a_)return al;a_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(l,o,f){var h=null;if(f!==void 0&&(h=""+f),o.key!==void 0&&(h=""+o.key),"key"in o){f={};for(var m in o)m!=="key"&&(f[m]=o[m])}else f=o;return o=f.ref,{$$typeof:a,type:l,key:h,ref:o!==void 0?o:null,props:f}}return al.Fragment=t,al.jsx=i,al.jsxs=i,al}var l_;function SE(){return l_||(l_=1,_f.exports=EE()),_f.exports}var k=SE(),yf={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function TE(){if(r_)return Z;r_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),b=Symbol.iterator;function L(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,he={};function pe(T,I,B){this.props=T,this.context=I,this.refs=he,this.updater=B||H}pe.prototype.isReactComponent={},pe.prototype.setState=function(T,I){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,I,"setState")},pe.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function Me(){}Me.prototype=pe.prototype;function Re(T,I,B){this.props=T,this.context=I,this.refs=he,this.updater=B||H}var Xe=Re.prototype=new Me;Xe.constructor=Re,Q(Xe,pe.prototype),Xe.isPureReactComponent=!0;var zt=Array.isArray;function et(){}var ie={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function At(T,I,B){var q=B.ref;return{$$typeof:a,type:T,key:I,ref:q!==void 0?q:null,props:B}}function dn(T,I){return At(T.type,I,T.props)}function Ht(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function tt(T){var I={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(B){return I[B]})}var mn=/\/+/g;function Y(T,I){return typeof T=="object"&&T!==null&&T.key!=null?tt(""+T.key):I.toString(36)}function Oe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(et,et):(T.status="pending",T.then(function(I){T.status==="pending"&&(T.status="fulfilled",T.value=I)},function(I){T.status==="pending"&&(T.status="rejected",T.reason=I)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function R(T,I,B,q,W){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var ye=!1;if(T===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(T.$$typeof){case a:case t:ye=!0;break;case E:return ye=T._init,R(ye(T._payload),I,B,q,W)}}if(ye)return W=W(T),ye=q===""?"."+Y(T,0):q,zt(W)?(B="",ye!=null&&(B=ye.replace(mn,"$&/")+"/"),R(W,I,B,"",function(ha){return ha})):W!=null&&(Ht(W)&&(W=dn(W,B+(W.key==null||T&&T.key===W.key?"":(""+W.key).replace(mn,"$&/")+"/")+ye)),I.push(W)),1;ye=0;var ft=q===""?".":q+":";if(zt(T))for(var Be=0;Be<T.length;Be++)q=T[Be],se=ft+Y(q,Be),ye+=R(q,I,B,se,W);else if(Be=L(T),typeof Be=="function")for(T=Be.call(T),Be=0;!(q=T.next()).done;)q=q.value,se=ft+Y(q,Be++),ye+=R(q,I,B,se,W);else if(se==="object"){if(typeof T.then=="function")return R(Oe(T),I,B,q,W);throw I=String(T),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(T,I,B){if(T==null)return T;var q=[],W=0;return R(T,q,"","",function(se){return I.call(B,se,W++)}),q}function G(T){if(T._status===-1){var I=T._result;I=I(),I.then(function(B){(T._status===0||T._status===-1)&&(T._status=1,T._result=B)},function(B){(T._status===0||T._status===-1)&&(T._status=2,T._result=B)}),T._status===-1&&(T._status=0,T._result=I)}if(T._status===1)return T._result.default;throw T._result}var ue=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ce={map:z,forEach:function(T,I,B){z(T,function(){I.apply(this,arguments)},B)},count:function(T){var I=0;return z(T,function(){I++}),I},toArray:function(T){return z(T,function(I){return I})||[]},only:function(T){if(!Ht(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Z.Activity=v,Z.Children=ce,Z.Component=pe,Z.Fragment=i,Z.Profiler=o,Z.PureComponent=Re,Z.StrictMode=l,Z.Suspense=g,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Z.__COMPILER_RUNTIME={__proto__:null,c:function(T){return ie.H.useMemoCache(T)}},Z.cache=function(T){return function(){return T.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(T,I,B){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var q=Q({},T.props),W=T.key;if(I!=null)for(se in I.key!==void 0&&(W=""+I.key),I)!ot.call(I,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&I.ref===void 0||(q[se]=I[se]);var se=arguments.length-2;if(se===1)q.children=B;else if(1<se){for(var ye=Array(se),ft=0;ft<se;ft++)ye[ft]=arguments[ft+2];q.children=ye}return At(T.type,W,q)},Z.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},Z.createElement=function(T,I,B){var q,W={},se=null;if(I!=null)for(q in I.key!==void 0&&(se=""+I.key),I)ot.call(I,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(W[q]=I[q]);var ye=arguments.length-2;if(ye===1)W.children=B;else if(1<ye){for(var ft=Array(ye),Be=0;Be<ye;Be++)ft[Be]=arguments[Be+2];W.children=ft}if(T&&T.defaultProps)for(q in ye=T.defaultProps,ye)W[q]===void 0&&(W[q]=ye[q]);return At(T,se,W)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(T){return{$$typeof:m,render:T}},Z.isValidElement=Ht,Z.lazy=function(T){return{$$typeof:E,_payload:{_status:-1,_result:T},_init:G}},Z.memo=function(T,I){return{$$typeof:p,type:T,compare:I===void 0?null:I}},Z.startTransition=function(T){var I=ie.T,B={};ie.T=B;try{var q=T(),W=ie.S;W!==null&&W(B,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(et,ue)}catch(se){ue(se)}finally{I!==null&&B.types!==null&&(I.types=B.types),ie.T=I}},Z.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Z.use=function(T){return ie.H.use(T)},Z.useActionState=function(T,I,B){return ie.H.useActionState(T,I,B)},Z.useCallback=function(T,I){return ie.H.useCallback(T,I)},Z.useContext=function(T){return ie.H.useContext(T)},Z.useDebugValue=function(){},Z.useDeferredValue=function(T,I){return ie.H.useDeferredValue(T,I)},Z.useEffect=function(T,I){return ie.H.useEffect(T,I)},Z.useEffectEvent=function(T){return ie.H.useEffectEvent(T)},Z.useId=function(){return ie.H.useId()},Z.useImperativeHandle=function(T,I,B){return ie.H.useImperativeHandle(T,I,B)},Z.useInsertionEffect=function(T,I){return ie.H.useInsertionEffect(T,I)},Z.useLayoutEffect=function(T,I){return ie.H.useLayoutEffect(T,I)},Z.useMemo=function(T,I){return ie.H.useMemo(T,I)},Z.useOptimistic=function(T,I){return ie.H.useOptimistic(T,I)},Z.useReducer=function(T,I,B){return ie.H.useReducer(T,I,B)},Z.useRef=function(T){return ie.H.useRef(T)},Z.useState=function(T){return ie.H.useState(T)},Z.useSyncExternalStore=function(T,I,B){return ie.H.useSyncExternalStore(T,I,B)},Z.useTransition=function(){return ie.H.useTransition()},Z.version="19.2.3",Z}var o_;function ah(){return o_||(o_=1,yf.exports=TE()),yf.exports}var Ne=ah();const CE=xy(Ne);var vf={exports:{}},ll={},bf={exports:{}},Ef={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function wE(){return u_||(u_=1,(function(a){function t(R,z){var G=R.length;R.push(z);e:for(;0<G;){var ue=G-1>>>1,ce=R[ue];if(0<o(ce,z))R[ue]=z,R[G]=ce,G=ue;else break e}}function i(R){return R.length===0?null:R[0]}function l(R){if(R.length===0)return null;var z=R[0],G=R.pop();if(G!==z){R[0]=G;e:for(var ue=0,ce=R.length,T=ce>>>1;ue<T;){var I=2*(ue+1)-1,B=R[I],q=I+1,W=R[q];if(0>o(B,G))q<ce&&0>o(W,B)?(R[ue]=W,R[q]=G,ue=q):(R[ue]=B,R[I]=G,ue=I);else if(q<ce&&0>o(W,G))R[ue]=W,R[q]=G,ue=q;else break e}}return z}function o(R,z){var G=R.sortIndex-z.sortIndex;return G!==0?G:R.id-z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();a.unstable_now=function(){return h.now()-m}}var g=[],p=[],E=1,v=null,b=3,L=!1,H=!1,Q=!1,he=!1,pe=typeof setTimeout=="function"?setTimeout:null,Me=typeof clearTimeout=="function"?clearTimeout:null,Re=typeof setImmediate<"u"?setImmediate:null;function Xe(R){for(var z=i(p);z!==null;){if(z.callback===null)l(p);else if(z.startTime<=R)l(p),z.sortIndex=z.expirationTime,t(g,z);else break;z=i(p)}}function zt(R){if(Q=!1,Xe(R),!H)if(i(g)!==null)H=!0,et||(et=!0,tt());else{var z=i(p);z!==null&&Oe(zt,z.startTime-R)}}var et=!1,ie=-1,ot=5,At=-1;function dn(){return he?!0:!(a.unstable_now()-At<ot)}function Ht(){if(he=!1,et){var R=a.unstable_now();At=R;var z=!0;try{e:{H=!1,Q&&(Q=!1,Me(ie),ie=-1),L=!0;var G=b;try{t:{for(Xe(R),v=i(g);v!==null&&!(v.expirationTime>R&&dn());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,b=v.priorityLevel;var ce=ue(v.expirationTime<=R);if(R=a.unstable_now(),typeof ce=="function"){v.callback=ce,Xe(R),z=!0;break t}v===i(g)&&l(g),Xe(R)}else l(g);v=i(g)}if(v!==null)z=!0;else{var T=i(p);T!==null&&Oe(zt,T.startTime-R),z=!1}}break e}finally{v=null,b=G,L=!1}z=void 0}}finally{z?tt():et=!1}}}var tt;if(typeof Re=="function")tt=function(){Re(Ht)};else if(typeof MessageChannel<"u"){var mn=new MessageChannel,Y=mn.port2;mn.port1.onmessage=Ht,tt=function(){Y.postMessage(null)}}else tt=function(){pe(Ht,0)};function Oe(R,z){ie=pe(function(){R(a.unstable_now())},z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(R){R.callback=null},a.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<R?Math.floor(1e3/R):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_next=function(R){switch(b){case 1:case 2:case 3:var z=3;break;default:z=b}var G=b;b=z;try{return R()}finally{b=G}},a.unstable_requestPaint=function(){he=!0},a.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=b;b=R;try{return z()}finally{b=G}},a.unstable_scheduleCallback=function(R,z,G){var ue=a.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ue+G:ue):G=ue,R){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=G+ce,R={id:E++,callback:z,priorityLevel:R,startTime:G,expirationTime:ce,sortIndex:-1},G>ue?(R.sortIndex=G,t(p,R),i(g)===null&&R===i(p)&&(Q?(Me(ie),ie=-1):Q=!0,Oe(zt,G-ue))):(R.sortIndex=ce,t(g,R),H||L||(H=!0,et||(et=!0,tt()))),R},a.unstable_shouldYield=dn,a.unstable_wrapCallback=function(R){var z=b;return function(){var G=b;b=z;try{return R.apply(this,arguments)}finally{b=G}}}})(Ef)),Ef}var c_;function AE(){return c_||(c_=1,bf.exports=wE()),bf.exports}var Sf={exports:{}},ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function NE(){if(f_)return ut;f_=1;var a=ah();function t(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function f(g,p,E){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:g,containerInfo:p,implementation:E}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ut.createPortal=function(g,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return f(g,p,null,E)},ut.flushSync=function(g){var p=h.T,E=l.p;try{if(h.T=null,l.p=2,g)return g()}finally{h.T=p,l.p=E,l.d.f()}},ut.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,l.d.C(g,p))},ut.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},ut.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var E=p.as,v=m(E,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?l.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:L}):E==="script"&&l.d.X(g,{crossOrigin:v,integrity:b,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ut.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);l.d.M(g,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&l.d.M(g)},ut.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,v=m(E,p.crossOrigin);l.d.L(g,E,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ut.preloadModule=function(g,p){if(typeof g=="string")if(p){var E=m(p.as,p.crossOrigin);l.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else l.d.m(g)},ut.requestFormReset=function(g){l.d.r(g)},ut.unstable_batchedUpdates=function(g,p){return g(p)},ut.useFormState=function(g,p,E){return h.H.useFormState(g,p,E)},ut.useFormStatus=function(){return h.H.useHostTransitionStatus()},ut.version="19.2.3",ut}var h_;function RE(){if(h_)return Sf.exports;h_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Sf.exports=NE(),Sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function OE(){if(d_)return ll;d_=1;var a=AE(),t=ah(),i=RE();function l(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(l(188))}function p(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(l(188));return n!==e?null:e}for(var s=e,r=n;;){var u=s.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){s=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===s)return g(u),e;if(c===r)return g(u),n;c=c.sibling}throw Error(l(188))}if(s.return!==r.return)s=u,r=c;else{for(var d=!1,_=u.child;_;){if(_===s){d=!0,s=u,r=c;break}if(_===r){d=!0,r=u,s=c;break}_=_.sibling}if(!d){for(_=c.child;_;){if(_===s){d=!0,s=c,r=u;break}if(_===r){d=!0,r=c,s=u;break}_=_.sibling}if(!d)throw Error(l(189))}}if(s.alternate!==r)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:n}function E(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=E(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),he=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),Me=Symbol.for("react.consumer"),Re=Symbol.for("react.context"),Xe=Symbol.for("react.forward_ref"),zt=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),dn=Symbol.for("react.memo_cache_sentinel"),Ht=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=Ht&&e[Ht]||e["@@iterator"],typeof e=="function"?e:null)}var mn=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===mn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case pe:return"Profiler";case he:return"StrictMode";case zt:return"Suspense";case et:return"SuspenseList";case At:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case Re:return e.displayName||"Context";case Me:return(e._context.displayName||"Context")+".Consumer";case Xe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ie:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case ot:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}var Oe=Array.isArray,R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ue=[],ce=-1;function T(e){return{current:e}}function I(e){0>ce||(e.current=ue[ce],ue[ce]=null,ce--)}function B(e,n){ce++,ue[ce]=e.current,e.current=n}var q=T(null),W=T(null),se=T(null),ye=T(null);function ft(e,n){switch(B(se,n),B(W,e),B(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rg(n),e=Og(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(q),B(q,e)}function Be(){I(q),I(W),I(se)}function ha(e){e.memoizedState!==null&&B(ye,e);var n=q.current,s=Og(n,e.type);n!==s&&(B(W,e),B(q,s))}function Gl(e){W.current===e&&(I(q),I(W)),ye.current===e&&(I(ye),tl._currentValue=G)}var Jo,sd;function Oi(e){if(Jo===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Jo=n&&n[1]||"",sd=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jo+e+sd}var $o=!1;function eu(e,n){if(!e||$o)return"";$o=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(O){var N=O}Reflect.construct(e,[],D)}else{try{D.call()}catch(O){N=O}e.call(D.prototype)}}else{try{throw Error()}catch(O){N=O}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),d=c[0],_=c[1];if(d&&_){var y=d.split(`
`),A=_.split(`
`);for(u=r=0;r<y.length&&!y[r].includes("DetermineComponentFrameRoot");)r++;for(;u<A.length&&!A[u].includes("DetermineComponentFrameRoot");)u++;if(r===y.length||u===A.length)for(r=y.length-1,u=A.length-1;1<=r&&0<=u&&y[r]!==A[u];)u--;for(;1<=r&&0<=u;r--,u--)if(y[r]!==A[u]){if(r!==1||u!==1)do if(r--,u--,0>u||y[r]!==A[u]){var x=`
`+y[r].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=r&&0<=u);break}}}finally{$o=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Oi(s):""}function J0(e,n){switch(e.tag){case 26:case 27:case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return e.child!==n&&n!==null?Oi("Suspense Fallback"):Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 15:return eu(e.type,!1);case 11:return eu(e.type.render,!1);case 1:return eu(e.type,!0);case 31:return Oi("Activity");default:return""}}function ad(e){try{var n="",s=null;do n+=J0(e,s),s=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tu=Object.prototype.hasOwnProperty,nu=a.unstable_scheduleCallback,iu=a.unstable_cancelCallback,$0=a.unstable_shouldYield,e1=a.unstable_requestPaint,Nt=a.unstable_now,t1=a.unstable_getCurrentPriorityLevel,ld=a.unstable_ImmediatePriority,rd=a.unstable_UserBlockingPriority,Pl=a.unstable_NormalPriority,n1=a.unstable_LowPriority,od=a.unstable_IdlePriority,i1=a.log,s1=a.unstable_setDisableYieldValue,da=null,Rt=null;function Gn(e){if(typeof i1=="function"&&s1(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(da,e)}catch{}}var Ot=Math.clz32?Math.clz32:r1,a1=Math.log,l1=Math.LN2;function r1(e){return e>>>=0,e===0?32:31-(a1(e)/l1|0)|0}var Yl=256,Ql=262144,Fl=4194304;function xi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,n,s){var r=e.pendingLanes;if(r===0)return 0;var u=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var _=r&134217727;return _!==0?(r=_&~c,r!==0?u=xi(r):(d&=_,d!==0?u=xi(d):s||(s=_&~e,s!==0&&(u=xi(s))))):(_=r&~c,_!==0?u=xi(_):d!==0?u=xi(d):s||(s=r&~e,s!==0&&(u=xi(s)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,s=n&-n,c>=s||c===32&&(s&4194048)!==0)?n:u}function ma(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function o1(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(){var e=Fl;return Fl<<=1,(Fl&62914560)===0&&(Fl=4194304),e}function su(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function pa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function u1(e,n,s,r,u,c){var d=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var _=e.entanglements,y=e.expirationTimes,A=e.hiddenUpdates;for(s=d&~s;0<s;){var x=31-Ot(s),D=1<<x;_[x]=0,y[x]=-1;var N=A[x];if(N!==null)for(A[x]=null,x=0;x<N.length;x++){var O=N[x];O!==null&&(O.lane&=-536870913)}s&=~D}r!==0&&cd(e,r,0),c!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~n))}function cd(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|s&261930}function fd(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var r=31-Ot(s),u=1<<r;u&n|e[r]&n&&(e[r]|=n),s&=~u}}function hd(e,n){var s=n&-n;return s=(s&42)!==0?1:au(s),(s&(e.suspendedLanes|n))!==0?0:s}function au(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dd(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:Jg(e.type))}function md(e,n){var s=z.p;try{return z.p=e,n()}finally{z.p=s}}var Pn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Pn,pt="__reactProps$"+Pn,rs="__reactContainer$"+Pn,ru="__reactEvents$"+Pn,c1="__reactListeners$"+Pn,f1="__reactHandles$"+Pn,pd="__reactResources$"+Pn,ga="__reactMarker$"+Pn;function ou(e){delete e[nt],delete e[pt],delete e[ru],delete e[c1],delete e[f1]}function os(e){var n=e[nt];if(n)return n;for(var s=e.parentNode;s;){if(n=s[rs]||s[nt]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=Ug(e);e!==null;){if(s=e[nt])return s;e=Ug(e)}return n}e=s,s=e.parentNode}return null}function us(e){if(e=e[nt]||e[rs]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function _a(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(l(33))}function cs(e){var n=e[pd];return n||(n=e[pd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ke(e){e[ga]=!0}var gd=new Set,_d={};function Mi(e,n){fs(e,n),fs(e+"Capture",n)}function fs(e,n){for(_d[e]=n,e=0;e<n.length;e++)gd.add(n[e])}var h1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yd={},vd={};function d1(e){return tu.call(vd,e)?!0:tu.call(yd,e)?!1:h1.test(e)?vd[e]=!0:(yd[e]=!0,!1)}function Kl(e,n,s){if(d1(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function Zl(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function pn(e,n,s,r){if(r===null)e.removeAttribute(s);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+r)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function m1(e,n,s){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){s=""+d,c.call(this,d)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(d){s=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function uu(e){if(!e._valueTracker){var n=bd(e)?"checked":"value";e._valueTracker=m1(e,n,""+e[n])}}function Ed(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),r="";return e&&(r=bd(e)?e.checked?"true":"false":e.value),e=r,e!==s?(n.setValue(e),!0):!1}function Wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var p1=/[\n"\\]/g;function jt(e){return e.replace(p1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cu(e,n,s,r,u,c,d,_){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Bt(n)):e.value!==""+Bt(n)&&(e.value=""+Bt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?fu(e,d,Bt(n)):s!=null?fu(e,d,Bt(s)):r!=null&&e.removeAttribute("value"),u==null&&c!=null&&(e.defaultChecked=!!c),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Bt(_):e.removeAttribute("name")}function Sd(e,n,s,r,u,c,d,_){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||s!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){uu(e);return}s=s!=null?""+Bt(s):"",n=n!=null?""+Bt(n):s,_||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=_?e.checked:!!r,e.defaultChecked=!!r,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),uu(e)}function fu(e,n,s){n==="number"&&Wl(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function hs(e,n,s,r){if(e=e.options,n){n={};for(var u=0;u<s.length;u++)n["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=n.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&r&&(e[s].defaultSelected=!0)}else{for(s=""+Bt(s),n=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,s){if(n!=null&&(n=""+Bt(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Bt(s):""}function Cd(e,n,s,r){if(n==null){if(r!=null){if(s!=null)throw Error(l(92));if(Oe(r)){if(1<r.length)throw Error(l(93));r=r[0]}s=r}s==null&&(s=""),n=s}s=Bt(n),e.defaultValue=s,r=e.textContent,r===s&&r!==""&&r!==null&&(e.value=r),uu(e)}function ds(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var g1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,n,s){var r=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,s):typeof s!="number"||s===0||g1.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function Ad(e,n,s){if(n!=null&&typeof n!="object")throw Error(l(62));if(e=e.style,s!=null){for(var r in s)!s.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&s[u]!==r&&wd(e,u,r)}else for(var c in n)n.hasOwnProperty(c)&&wd(e,c,n[c])}function hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return y1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function gn(){}var du=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,ps=null;function Nd(e){var n=us(e);if(n&&(e=n.stateNode)){var s=e[pt]||null;e:switch(e=n.stateNode,n.type){case"input":if(cu(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var r=s[n];if(r!==e&&r.form===e.form){var u=r[pt]||null;if(!u)throw Error(l(90));cu(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<s.length;n++)r=s[n],r.form===e.form&&Ed(r)}break e;case"textarea":Td(e,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&hs(e,!!s.multiple,n,!1)}}}var pu=!1;function Rd(e,n,s){if(pu)return e(n,s);pu=!0;try{var r=e(n);return r}finally{if(pu=!1,(ms!==null||ps!==null)&&(Br(),ms&&(n=ms,e=ps,ps=ms=null,Nd(n),e)))for(n=0;n<e.length;n++)Nd(e[n])}}function ya(e,n){var s=e.stateNode;if(s===null)return null;var r=s[pt]||null;if(r===null)return null;s=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,n,typeof s));return s}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(_n)try{var va={};Object.defineProperty(va,"passive",{get:function(){gu=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{gu=!1}var Yn=null,_u=null,$l=null;function Od(){if($l)return $l;var e,n=_u,s=n.length,r,u="value"in Yn?Yn.value:Yn.textContent,c=u.length;for(e=0;e<s&&n[e]===u[e];e++);var d=s-e;for(r=1;r<=d&&n[s-r]===u[c-r];r++);return $l=u.slice(e,1<r?1-r:void 0)}function er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function xd(){return!1}function gt(e){function n(s,r,u,c,d){this._reactName=s,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(s=e[_],this[_]=s?s(c):c[_]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?tr:xd,this.isPropagationStopped=xd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),n}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=gt(Di),ba=v({},Di,{view:0,detail:0}),v1=gt(ba),yu,vu,Ea,ir=v({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ea&&(Ea&&e.type==="mousemove"?(yu=e.screenX-Ea.screenX,vu=e.screenY-Ea.screenY):vu=yu=0,Ea=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Md=gt(ir),b1=v({},ir,{dataTransfer:0}),E1=gt(b1),S1=v({},ba,{relatedTarget:0}),bu=gt(S1),T1=v({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=gt(T1),w1=v({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A1=gt(w1),N1=v({},Di,{data:0}),Dd=gt(N1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=x1[e])?!!n[e]:!1}function Eu(){return M1}var D1=v({},ba,{key:function(e){if(e.key){var n=R1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=gt(D1),k1=v({},ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Id=gt(k1),L1=v({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),U1=gt(L1),z1=v({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=gt(z1),B1=v({},ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=gt(B1),q1=v({},Di,{newState:0,oldState:0}),V1=gt(q1),G1=[9,13,27,32],Su=_n&&"CompositionEvent"in window,Sa=null;_n&&"documentMode"in document&&(Sa=document.documentMode);var P1=_n&&"TextEvent"in window&&!Sa,kd=_n&&(!Su||Sa&&8<Sa&&11>=Sa),Ld=" ",Ud=!1;function zd(e,n){switch(e){case"keyup":return G1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gs=!1;function Y1(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Ud=!0,Ld);case"textInput":return e=n.data,e===Ld&&Ud?null:e;default:return null}}function Q1(e,n){if(gs)return e==="compositionend"||!Su&&zd(e,n)?(e=Od(),$l=_u=Yn=null,gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!F1[e.type]:n==="textarea"}function jd(e,n,s,r){ms?ps?ps.push(r):ps=[r]:ms=r,n=Qr(n,"onChange"),0<n.length&&(s=new nr("onChange","change",null,s,r),e.push({event:s,listeners:n}))}var Ta=null,Ca=null;function X1(e){Sg(e,0)}function sr(e){var n=_a(e);if(Ed(n))return e}function qd(e,n){if(e==="change")return n}var Vd=!1;if(_n){var Tu;if(_n){var Cu="oninput"in document;if(!Cu){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Cu=typeof Gd.oninput=="function"}Tu=Cu}else Tu=!1;Vd=Tu&&(!document.documentMode||9<document.documentMode)}function Pd(){Ta&&(Ta.detachEvent("onpropertychange",Yd),Ca=Ta=null)}function Yd(e){if(e.propertyName==="value"&&sr(Ca)){var n=[];jd(n,Ca,e,mu(e)),Rd(X1,n)}}function K1(e,n,s){e==="focusin"?(Pd(),Ta=n,Ca=s,Ta.attachEvent("onpropertychange",Yd)):e==="focusout"&&Pd()}function Z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(Ca)}function W1(e,n){if(e==="click")return sr(n)}function J1(e,n){if(e==="input"||e==="change")return sr(n)}function $1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var xt=typeof Object.is=="function"?Object.is:$1;function wa(e,n){if(xt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),r=Object.keys(n);if(s.length!==r.length)return!1;for(r=0;r<s.length;r++){var u=s[r];if(!tu.call(n,u)||!xt(e[u],n[u]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,n){var s=Qd(e);e=0;for(var r;s;){if(s.nodeType===3){if(r=e+s.textContent.length,e<=n&&r>=n)return{node:s,offset:n-e};e=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Qd(s)}}function Xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wl(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Wl(e.document)}return n}function wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var eb=_n&&"documentMode"in document&&11>=document.documentMode,_s=null,Au=null,Aa=null,Nu=!1;function Zd(e,n,s){var r=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nu||_s==null||_s!==Wl(r)||(r=_s,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&wa(Aa,r)||(Aa=r,r=Qr(Au,"onSelect"),0<r.length&&(n=new nr("onSelect","select",null,n,s),e.push({event:n,listeners:r}),n.target=_s)))}function Ii(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var ys={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionrun:Ii("Transition","TransitionRun"),transitionstart:Ii("Transition","TransitionStart"),transitioncancel:Ii("Transition","TransitionCancel"),transitionend:Ii("Transition","TransitionEnd")},Ru={},Wd={};_n&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function ki(e){if(Ru[e])return Ru[e];if(!ys[e])return e;var n=ys[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Wd)return Ru[e]=n[s];return e}var Jd=ki("animationend"),$d=ki("animationiteration"),em=ki("animationstart"),tb=ki("transitionrun"),nb=ki("transitionstart"),ib=ki("transitioncancel"),tm=ki("transitionend"),nm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Kt(e,n){nm.set(e,n),Mi(n,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],vs=0,xu=0;function lr(){for(var e=vs,n=xu=vs=0;n<e;){var s=qt[n];qt[n++]=null;var r=qt[n];qt[n++]=null;var u=qt[n];qt[n++]=null;var c=qt[n];if(qt[n++]=null,r!==null&&u!==null){var d=r.pending;d===null?u.next=u:(u.next=d.next,d.next=u),r.pending=u}c!==0&&im(s,u,c)}}function rr(e,n,s,r){qt[vs++]=e,qt[vs++]=n,qt[vs++]=s,qt[vs++]=r,xu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mu(e,n,s,r){return rr(e,n,s,r),or(e)}function Li(e,n){return rr(e,null,null,n),or(e)}function im(e,n,s){e.lanes|=s;var r=e.alternate;r!==null&&(r.lanes|=s);for(var u=!1,c=e.return;c!==null;)c.childLanes|=s,r=c.alternate,r!==null&&(r.childLanes|=s),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(u=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,u&&n!==null&&(u=31-Ot(s),e=c.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=s|536870912),c):null}function or(e){if(50<Xa)throw Xa=0,jc=null,Error(l(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var bs={};function sb(e,n,s,r){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,n,s,r){return new sb(e,n,s,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,n){var s=e.alternate;return s===null?(s=Mt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function sm(e,n){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ur(e,n,s,r,u,c){var d=0;if(r=e,typeof e=="function")Du(e)&&(d=1);else if(typeof e=="string")d=uE(e,s,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case At:return e=Mt(31,s,n,u),e.elementType=At,e.lanes=c,e;case Q:return Ui(s.children,u,c,n);case he:d=8,u|=24;break;case pe:return e=Mt(12,s,n,u|2),e.elementType=pe,e.lanes=c,e;case zt:return e=Mt(13,s,n,u),e.elementType=zt,e.lanes=c,e;case et:return e=Mt(19,s,n,u),e.elementType=et,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:d=10;break e;case Me:d=9;break e;case Xe:d=11;break e;case ie:d=14;break e;case ot:d=16,r=null;break e}d=29,s=Error(l(130,e===null?"null":typeof e,"")),r=null}return n=Mt(d,s,n,u),n.elementType=e,n.type=r,n.lanes=c,n}function Ui(e,n,s,r){return e=Mt(7,e,r,n),e.lanes=s,e}function Iu(e,n,s){return e=Mt(6,e,null,n),e.lanes=s,e}function am(e){var n=Mt(18,null,null,0);return n.stateNode=e,n}function ku(e,n,s){return n=Mt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lm=new WeakMap;function Vt(e,n){if(typeof e=="object"&&e!==null){var s=lm.get(e);return s!==void 0?s:(n={value:e,source:n,stack:ad(n)},lm.set(e,n),n)}return{value:e,source:n,stack:ad(n)}}var Es=[],Ss=0,cr=null,Na=0,Gt=[],Pt=0,Qn=null,an=1,ln="";function vn(e,n){Es[Ss++]=Na,Es[Ss++]=cr,cr=e,Na=n}function rm(e,n,s){Gt[Pt++]=an,Gt[Pt++]=ln,Gt[Pt++]=Qn,Qn=e;var r=an;e=ln;var u=32-Ot(r)-1;r&=~(1<<u),s+=1;var c=32-Ot(n)+u;if(30<c){var d=u-u%5;c=(r&(1<<d)-1).toString(32),r>>=d,u-=d,an=1<<32-Ot(n)+u|s<<u|r,ln=c+e}else an=1<<c|s<<u|r,ln=e}function Lu(e){e.return!==null&&(vn(e,1),rm(e,1,0))}function Uu(e){for(;e===cr;)cr=Es[--Ss],Es[Ss]=null,Na=Es[--Ss],Es[Ss]=null;for(;e===Qn;)Qn=Gt[--Pt],Gt[Pt]=null,ln=Gt[--Pt],Gt[Pt]=null,an=Gt[--Pt],Gt[Pt]=null}function om(e,n){Gt[Pt++]=an,Gt[Pt++]=ln,Gt[Pt++]=Qn,an=n.id,ln=n.overflow,Qn=e}var it=null,De=null,fe=!1,Fn=null,Yt=!1,zu=Error(l(519));function Xn(e){var n=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ra(Vt(n,e)),zu}function um(e){var n=e.stateNode,s=e.type,r=e.memoizedProps;switch(n[nt]=e,n[pt]=r,s){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(s=0;s<Za.length;s++)le(Za[s],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":le("invalid",n),Sd(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":le("invalid",n);break;case"textarea":le("invalid",n),Cd(n,r.value,r.defaultValue,r.children)}s=r.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||r.suppressHydrationWarning===!0||Ag(n.textContent,s)?(r.popover!=null&&(le("beforetoggle",n),le("toggle",n)),r.onScroll!=null&&le("scroll",n),r.onScrollEnd!=null&&le("scrollend",n),r.onClick!=null&&(n.onclick=gn),n=!0):n=!1,n||Xn(e,!0)}function cm(e){for(it=e.return;it;)switch(it.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:it=it.return}}function Ts(e){if(e!==it)return!1;if(!fe)return cm(e),fe=!0,!1;var n=e.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||tf(e.type,e.memoizedProps)),s=!s),s&&De&&Xn(e),cm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=Lg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));De=Lg(e)}else n===27?(n=De,oi(e.type)?(e=rf,rf=null,De=e):De=n):De=it?Ft(e.stateNode.nextSibling):null;return!0}function zi(){De=it=null,fe=!1}function Hu(){var e=Fn;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Fn=null),e}function Ra(e){Fn===null?Fn=[e]:Fn.push(e)}var Bu=T(null),Hi=null,bn=null;function Kn(e,n,s){B(Bu,n._currentValue),n._currentValue=s}function En(e){e._currentValue=Bu.current,I(Bu)}function ju(e,n,s){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===s)break;e=e.return}}function qu(e,n,s,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var c=u.dependencies;if(c!==null){var d=u.child;c=c.firstContext;e:for(;c!==null;){var _=c;c=u;for(var y=0;y<n.length;y++)if(_.context===n[y]){c.lanes|=s,_=c.alternate,_!==null&&(_.lanes|=s),ju(c.return,s,e),r||(d=null);break e}c=_.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(l(341));d.lanes|=s,c=d.alternate,c!==null&&(c.lanes|=s),ju(d,s,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function Cs(e,n,s,r){e=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var _=u.type;xt(u.pendingProps.value,d.value)||(e!==null?e.push(_):e=[_])}}else if(u===ye.current){if(d=u.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}u=u.return}e!==null&&qu(n,e,s,r),n.flags|=262144}function fr(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bi(e){Hi=e,bn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return fm(Hi,e)}function hr(e,n){return Hi===null&&Bi(e),fm(e,n)}function fm(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},bn===null){if(e===null)throw Error(l(308));bn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else bn=bn.next=n;return s}var ab=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},lb=a.unstable_scheduleCallback,rb=a.unstable_NormalPriority,Ve={$$typeof:Re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new ab,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&lb(rb,function(){e.controller.abort()})}var xa=null,Gu=0,ws=0,As=null;function ob(e,n){if(xa===null){var s=xa=[];Gu=0,ws=Qc(),As={status:"pending",value:void 0,then:function(r){s.push(r)}}}return Gu++,n.then(hm,hm),n}function hm(){if(--Gu===0&&xa!==null){As!==null&&(As.status="fulfilled");var e=xa;xa=null,ws=0,As=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ub(e,n){var s=[],r={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<s.length;u++)(0,s[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),r}var dm=R.S;R.S=function(e,n){Zp=Nt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ob(e,n),dm!==null&&dm(e,n)};var ji=T(null);function Pu(){var e=ji.current;return e!==null?e:Ae.pooledCache}function dr(e,n){n===null?B(ji,ji.current):B(ji,n.pool)}function mm(){var e=Pu();return e===null?null:{parent:Ve._currentValue,pool:e}}var Ns=Error(l(460)),Yu=Error(l(474)),mr=Error(l(542)),pr={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(gn,gn),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e;default:if(typeof n.status=="string")n.then(gn,gn);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e}throw Vi=n,Ns}}function qi(e){try{var n=e._init;return n(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vi=s,Ns):s}}var Vi=null;function _m(){if(Vi===null)throw Error(l(459));var e=Vi;return Vi=null,e}function ym(e){if(e===Ns||e===mr)throw Error(l(483))}var Rs=null,Ma=0;function gr(e){var n=Ma;return Ma+=1,Rs===null&&(Rs=[]),gm(Rs,e,n)}function Da(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _r(e,n){throw n.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vm(e){function n(C,S){if(e){var w=C.deletions;w===null?(C.deletions=[S],C.flags|=16):w.push(S)}}function s(C,S){if(!e)return null;for(;S!==null;)n(C,S),S=S.sibling;return null}function r(C){for(var S=new Map;C!==null;)C.key!==null?S.set(C.key,C):S.set(C.index,C),C=C.sibling;return S}function u(C,S){return C=yn(C,S),C.index=0,C.sibling=null,C}function c(C,S,w){return C.index=w,e?(w=C.alternate,w!==null?(w=w.index,w<S?(C.flags|=67108866,S):w):(C.flags|=67108866,S)):(C.flags|=1048576,S)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function _(C,S,w,M){return S===null||S.tag!==6?(S=Iu(w,C.mode,M),S.return=C,S):(S=u(S,w),S.return=C,S)}function y(C,S,w,M){var P=w.type;return P===Q?x(C,S,w.props.children,M,w.key):S!==null&&(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&qi(P)===S.type)?(S=u(S,w.props),Da(S,w),S.return=C,S):(S=ur(w.type,w.key,w.props,null,C.mode,M),Da(S,w),S.return=C,S)}function A(C,S,w,M){return S===null||S.tag!==4||S.stateNode.containerInfo!==w.containerInfo||S.stateNode.implementation!==w.implementation?(S=ku(w,C.mode,M),S.return=C,S):(S=u(S,w.children||[]),S.return=C,S)}function x(C,S,w,M,P){return S===null||S.tag!==7?(S=Ui(w,C.mode,M,P),S.return=C,S):(S=u(S,w),S.return=C,S)}function D(C,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Iu(""+S,C.mode,w),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case L:return w=ur(S.type,S.key,S.props,null,C.mode,w),Da(w,S),w.return=C,w;case H:return S=ku(S,C.mode,w),S.return=C,S;case ot:return S=qi(S),D(C,S,w)}if(Oe(S)||tt(S))return S=Ui(S,C.mode,w,null),S.return=C,S;if(typeof S.then=="function")return D(C,gr(S),w);if(S.$$typeof===Re)return D(C,hr(C,S),w);_r(C,S)}return null}function N(C,S,w,M){var P=S!==null?S.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return P!==null?null:_(C,S,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case L:return w.key===P?y(C,S,w,M):null;case H:return w.key===P?A(C,S,w,M):null;case ot:return w=qi(w),N(C,S,w,M)}if(Oe(w)||tt(w))return P!==null?null:x(C,S,w,M,null);if(typeof w.then=="function")return N(C,S,gr(w),M);if(w.$$typeof===Re)return N(C,S,hr(C,w),M);_r(C,w)}return null}function O(C,S,w,M,P){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(w)||null,_(S,C,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case L:return C=C.get(M.key===null?w:M.key)||null,y(S,C,M,P);case H:return C=C.get(M.key===null?w:M.key)||null,A(S,C,M,P);case ot:return M=qi(M),O(C,S,w,M,P)}if(Oe(M)||tt(M))return C=C.get(w)||null,x(S,C,M,P,null);if(typeof M.then=="function")return O(C,S,w,gr(M),P);if(M.$$typeof===Re)return O(C,S,w,hr(S,M),P);_r(S,M)}return null}function j(C,S,w,M){for(var P=null,de=null,V=S,$=S=0,oe=null;V!==null&&$<w.length;$++){V.index>$?(oe=V,V=null):oe=V.sibling;var me=N(C,V,w[$],M);if(me===null){V===null&&(V=oe);break}e&&V&&me.alternate===null&&n(C,V),S=c(me,S,$),de===null?P=me:de.sibling=me,de=me,V=oe}if($===w.length)return s(C,V),fe&&vn(C,$),P;if(V===null){for(;$<w.length;$++)V=D(C,w[$],M),V!==null&&(S=c(V,S,$),de===null?P=V:de.sibling=V,de=V);return fe&&vn(C,$),P}for(V=r(V);$<w.length;$++)oe=O(V,C,$,w[$],M),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?$:oe.key),S=c(oe,S,$),de===null?P=oe:de.sibling=oe,de=oe);return e&&V.forEach(function(di){return n(C,di)}),fe&&vn(C,$),P}function F(C,S,w,M){if(w==null)throw Error(l(151));for(var P=null,de=null,V=S,$=S=0,oe=null,me=w.next();V!==null&&!me.done;$++,me=w.next()){V.index>$?(oe=V,V=null):oe=V.sibling;var di=N(C,V,me.value,M);if(di===null){V===null&&(V=oe);break}e&&V&&di.alternate===null&&n(C,V),S=c(di,S,$),de===null?P=di:de.sibling=di,de=di,V=oe}if(me.done)return s(C,V),fe&&vn(C,$),P;if(V===null){for(;!me.done;$++,me=w.next())me=D(C,me.value,M),me!==null&&(S=c(me,S,$),de===null?P=me:de.sibling=me,de=me);return fe&&vn(C,$),P}for(V=r(V);!me.done;$++,me=w.next())me=O(V,C,$,me.value,M),me!==null&&(e&&me.alternate!==null&&V.delete(me.key===null?$:me.key),S=c(me,S,$),de===null?P=me:de.sibling=me,de=me);return e&&V.forEach(function(bE){return n(C,bE)}),fe&&vn(C,$),P}function Te(C,S,w,M){if(typeof w=="object"&&w!==null&&w.type===Q&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case L:e:{for(var P=w.key;S!==null;){if(S.key===P){if(P=w.type,P===Q){if(S.tag===7){s(C,S.sibling),M=u(S,w.props.children),M.return=C,C=M;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ot&&qi(P)===S.type){s(C,S.sibling),M=u(S,w.props),Da(M,w),M.return=C,C=M;break e}s(C,S);break}else n(C,S);S=S.sibling}w.type===Q?(M=Ui(w.props.children,C.mode,M,w.key),M.return=C,C=M):(M=ur(w.type,w.key,w.props,null,C.mode,M),Da(M,w),M.return=C,C=M)}return d(C);case H:e:{for(P=w.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===w.containerInfo&&S.stateNode.implementation===w.implementation){s(C,S.sibling),M=u(S,w.children||[]),M.return=C,C=M;break e}else{s(C,S);break}else n(C,S);S=S.sibling}M=ku(w,C.mode,M),M.return=C,C=M}return d(C);case ot:return w=qi(w),Te(C,S,w,M)}if(Oe(w))return j(C,S,w,M);if(tt(w)){if(P=tt(w),typeof P!="function")throw Error(l(150));return w=P.call(w),F(C,S,w,M)}if(typeof w.then=="function")return Te(C,S,gr(w),M);if(w.$$typeof===Re)return Te(C,S,hr(C,w),M);_r(C,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,S!==null&&S.tag===6?(s(C,S.sibling),M=u(S,w),M.return=C,C=M):(s(C,S),M=Iu(w,C.mode,M),M.return=C,C=M),d(C)):s(C,S)}return function(C,S,w,M){try{Ma=0;var P=Te(C,S,w,M);return Rs=null,P}catch(V){if(V===Ns||V===mr)throw V;var de=Mt(29,V,null,C.mode);return de.lanes=M,de.return=C,de}finally{}}}var Gi=vm(!0),bm=vm(!1),Zn=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,s){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ge&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=or(e),im(e,null,s),n}return rr(e,r,n,s),or(e)}function Ia(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,fd(e,s)}}function Xu(e,n){var s=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,s===r)){var u=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var d={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};c===null?u=c=d:c=c.next=d,s=s.next}while(s!==null);c===null?u=c=n:c=c.next=n}else u=c=n;s={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var Ku=!1;function ka(){if(Ku){var e=As;if(e!==null)throw e}}function La(e,n,s,r){Ku=!1;var u=e.updateQueue;Zn=!1;var c=u.firstBaseUpdate,d=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var y=_,A=y.next;y.next=null,d===null?c=A:d.next=A,d=y;var x=e.alternate;x!==null&&(x=x.updateQueue,_=x.lastBaseUpdate,_!==d&&(_===null?x.firstBaseUpdate=A:_.next=A,x.lastBaseUpdate=y))}if(c!==null){var D=u.baseState;d=0,x=A=y=null,_=c;do{var N=_.lane&-536870913,O=N!==_.lane;if(O?(re&N)===N:(r&N)===N){N!==0&&N===ws&&(Ku=!0),x!==null&&(x=x.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var j=e,F=_;N=n;var Te=s;switch(F.tag){case 1:if(j=F.payload,typeof j=="function"){D=j.call(Te,D,N);break e}D=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=F.payload,N=typeof j=="function"?j.call(Te,D,N):j,N==null)break e;D=v({},D,N);break e;case 2:Zn=!0}}N=_.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=u.callbacks,O===null?u.callbacks=[N]:O.push(N))}else O={lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},x===null?(A=x=O,y=D):x=x.next=O,d|=N;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;O=_,_=O.next,O.next=null,u.lastBaseUpdate=O,u.shared.pending=null}}while(!0);x===null&&(y=D),u.baseState=y,u.firstBaseUpdate=A,u.lastBaseUpdate=x,c===null&&(u.shared.lanes=0),ii|=d,e.lanes=d,e.memoizedState=D}}function Em(e,n){if(typeof e!="function")throw Error(l(191,e));e.call(n)}function Sm(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Em(s[e],n)}var Os=T(null),yr=T(0);function Tm(e,n){e=xn,B(yr,e),B(Os,n),xn=e|n.baseLanes}function Zu(){B(yr,xn),B(Os,Os.current)}function Wu(){xn=yr.current,I(Os),I(yr)}var Dt=T(null),Qt=null;function $n(e){var n=e.alternate;B(je,je.current&1),B(Dt,e),Qt===null&&(n===null||Os.current!==null||n.memoizedState!==null)&&(Qt=e)}function Ju(e){B(je,je.current),B(Dt,e),Qt===null&&(Qt=e)}function Cm(e){e.tag===22?(B(je,je.current),B(Dt,e),Qt===null&&(Qt=e)):ei()}function ei(){B(je,je.current),B(Dt,Dt.current)}function It(e){I(Dt),Qt===e&&(Qt=null),I(je)}var je=T(0);function vr(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||af(s)||lf(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sn=0,J=null,Ee=null,Ge=null,br=!1,xs=!1,Pi=!1,Er=0,Ua=0,Ms=null,cb=0;function ze(){throw Error(l(321))}function $u(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!xt(e[s],n[s]))return!1;return!0}function ec(e,n,s,r,u,c){return Sn=c,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?rp:pc,Pi=!1,c=s(r,u),Pi=!1,xs&&(c=Am(n,s,r,u)),wm(e),c}function wm(e){R.H=Ba;var n=Ee!==null&&Ee.next!==null;if(Sn=0,Ge=Ee=J=null,br=!1,Ua=0,Ms=null,n)throw Error(l(300));e===null||Pe||(e=e.dependencies,e!==null&&fr(e)&&(Pe=!0))}function Am(e,n,s,r){J=e;var u=0;do{if(xs&&(Ms=null),Ua=0,xs=!1,25<=u)throw Error(l(301));if(u+=1,Ge=Ee=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=op,c=n(s,r)}while(xs);return c}function fb(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?za(n):n,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(J.flags|=1024),n}function tc(){var e=Er!==0;return Er=0,e}function nc(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function ic(e){if(br){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}br=!1}Sn=0,Ge=Ee=J=null,xs=!1,Ua=Er=0,Ms=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?J.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Ee===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=Ge===null?J.memoizedState:Ge.next;if(n!==null)Ge=n,Ee=e;else{if(e===null)throw J.alternate===null?Error(l(467)):Error(l(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ge===null?J.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Sr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function za(e){var n=Ua;return Ua+=1,Ms===null&&(Ms=[]),e=gm(Ms,e,n),n=J,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?rp:pc),e}function Tr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return za(e);if(e.$$typeof===Re)return st(e)}throw Error(l(438,String(e)))}function sc(e){var n=null,s=J.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=Sr(),J.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),r=0;r<e;r++)s[r]=dn;return n.index++,s}function Tn(e,n){return typeof n=="function"?n(e):n}function Cr(e){var n=qe();return ac(n,Ee,e)}function ac(e,n,s){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=s;var u=e.baseQueue,c=r.pending;if(c!==null){if(u!==null){var d=u.next;u.next=c.next,c.next=d}n.baseQueue=u=c,r.pending=null}if(c=e.baseState,u===null)e.memoizedState=c;else{n=u.next;var _=d=null,y=null,A=n,x=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(re&D)===D:(Sn&D)===D){var N=A.revertLane;if(N===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===ws&&(x=!0);else if((Sn&N)===N){A=A.next,N===ws&&(x=!0);continue}else D={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(_=y=D,d=c):y=y.next=D,J.lanes|=N,ii|=N;D=A.action,Pi&&s(c,D),c=A.hasEagerState?A.eagerState:s(c,D)}else N={lane:D,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(_=y=N,d=c):y=y.next=N,J.lanes|=D,ii|=D;A=A.next}while(A!==null&&A!==n);if(y===null?d=c:y.next=_,!xt(c,e.memoizedState)&&(Pe=!0,x&&(s=As,s!==null)))throw s;e.memoizedState=c,e.baseState=d,e.baseQueue=y,r.lastRenderedState=c}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function lc(e){var n=qe(),s=n.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var r=s.dispatch,u=s.pending,c=n.memoizedState;if(u!==null){s.pending=null;var d=u=u.next;do c=e(c,d.action),d=d.next;while(d!==u);xt(c,n.memoizedState)||(Pe=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),s.lastRenderedState=c}return[c,r]}function Nm(e,n,s){var r=J,u=qe(),c=fe;if(c){if(s===void 0)throw Error(l(407));s=s()}else s=n();var d=!xt((Ee||u).memoizedState,s);if(d&&(u.memoizedState=s,Pe=!0),u=u.queue,uc(xm.bind(null,r,u,e),[e]),u.getSnapshot!==n||d||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,Ds(9,{destroy:void 0},Om.bind(null,r,u,s,n),null),Ae===null)throw Error(l(349));c||(Sn&127)!==0||Rm(r,n,s)}return s}function Rm(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=J.updateQueue,n===null?(n=Sr(),J.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Om(e,n,s,r){n.value=s,n.getSnapshot=r,Mm(n)&&Dm(e)}function xm(e,n,s){return s(function(){Mm(n)&&Dm(e)})}function Mm(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!xt(e,s)}catch{return!0}}function Dm(e){var n=Li(e,2);n!==null&&Et(n,e,2)}function rc(e){var n=ht();if(typeof e=="function"){var s=e;if(e=s(),Pi){Gn(!0);try{s()}finally{Gn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},n}function Im(e,n,s,r){return e.baseState=s,ac(e,Ee,typeof r=="function"?r:Tn)}function hb(e,n,s,r,u){if(Nr(e))throw Error(l(485));if(e=n.action,e!==null){var c={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};R.T!==null?s(!0):c.isTransition=!1,r(c),s=n.pending,s===null?(c.next=n.pending=c,km(n,c)):(c.next=s.next,n.pending=s.next=c)}}function km(e,n){var s=n.action,r=n.payload,u=e.state;if(n.isTransition){var c=R.T,d={};R.T=d;try{var _=s(u,r),y=R.S;y!==null&&y(d,_),Lm(e,n,_)}catch(A){oc(e,n,A)}finally{c!==null&&d.types!==null&&(c.types=d.types),R.T=c}}else try{c=s(u,r),Lm(e,n,c)}catch(A){oc(e,n,A)}}function Lm(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(r){Um(e,n,r)},function(r){return oc(e,n,r)}):Um(e,n,s)}function Um(e,n,s){n.status="fulfilled",n.value=s,zm(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,km(e,s)))}function oc(e,n,s){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=s,zm(n),n=n.next;while(n!==r)}e.action=null}function zm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hm(e,n){return n}function Bm(e,n){if(fe){var s=Ae.formState;if(s!==null){e:{var r=J;if(fe){if(De){t:{for(var u=De,c=Yt;u.nodeType!==8;){if(!c){u=null;break t}if(u=Ft(u.nextSibling),u===null){u=null;break t}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){De=Ft(u.nextSibling),r=u.data==="F!";break e}}Xn(r)}r=!1}r&&(n=s[0])}}return s=ht(),s.memoizedState=s.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},s.queue=r,s=sp.bind(null,J,r),r.dispatch=s,r=rc(!1),c=mc.bind(null,J,!1,r.queue),r=ht(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,s=hb.bind(null,J,u,c,s),u.dispatch=s,r.memoizedState=e,[n,s,!1]}function jm(e){var n=qe();return qm(n,Ee,e)}function qm(e,n,s){if(n=ac(e,n,Hm)[0],e=Cr(Tn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=za(n)}catch(d){throw d===Ns?mr:d}else r=n;n=qe();var u=n.queue,c=u.dispatch;return s!==n.memoizedState&&(J.flags|=2048,Ds(9,{destroy:void 0},db.bind(null,u,s),null)),[r,c,e]}function db(e,n){e.action=n}function Vm(e){var n=qe(),s=Ee;if(s!==null)return qm(n,s,e);qe(),n=n.memoizedState,s=qe();var r=s.queue.dispatch;return s.memoizedState=e,[n,r,!1]}function Ds(e,n,s,r){return e={tag:e,create:s,deps:r,inst:n,next:null},n=J.updateQueue,n===null&&(n=Sr(),J.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(r=s.next,s.next=e,e.next=r,n.lastEffect=e),e}function Gm(){return qe().memoizedState}function wr(e,n,s,r){var u=ht();J.flags|=e,u.memoizedState=Ds(1|n,{destroy:void 0},s,r===void 0?null:r)}function Ar(e,n,s,r){var u=qe();r=r===void 0?null:r;var c=u.memoizedState.inst;Ee!==null&&r!==null&&$u(r,Ee.memoizedState.deps)?u.memoizedState=Ds(n,c,s,r):(J.flags|=e,u.memoizedState=Ds(1|n,c,s,r))}function Pm(e,n){wr(8390656,8,e,n)}function uc(e,n){Ar(2048,8,e,n)}function mb(e){J.flags|=4;var n=J.updateQueue;if(n===null)n=Sr(),J.updateQueue=n,n.events=[e];else{var s=n.events;s===null?n.events=[e]:s.push(e)}}function Ym(e){var n=qe().memoizedState;return mb({ref:n,nextImpl:e}),function(){if((ge&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return Ar(4,2,e,n)}function Fm(e,n){return Ar(4,4,e,n)}function Xm(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Km(e,n,s){s=s!=null?s.concat([e]):null,Ar(4,4,Xm.bind(null,n,e),s)}function cc(){}function Zm(e,n){var s=qe();n=n===void 0?null:n;var r=s.memoizedState;return n!==null&&$u(n,r[1])?r[0]:(s.memoizedState=[e,n],e)}function Wm(e,n){var s=qe();n=n===void 0?null:n;var r=s.memoizedState;if(n!==null&&$u(n,r[1]))return r[0];if(r=e(),Pi){Gn(!0);try{e()}finally{Gn(!1)}}return s.memoizedState=[r,n],r}function fc(e,n,s){return s===void 0||(Sn&1073741824)!==0&&(re&261930)===0?e.memoizedState=n:(e.memoizedState=s,e=Jp(),J.lanes|=e,ii|=e,s)}function Jm(e,n,s,r){return xt(s,n)?s:Os.current!==null?(e=fc(e,s,r),xt(e,n)||(Pe=!0),e):(Sn&42)===0||(Sn&1073741824)!==0&&(re&261930)===0?(Pe=!0,e.memoizedState=s):(e=Jp(),J.lanes|=e,ii|=e,n)}function $m(e,n,s,r,u){var c=z.p;z.p=c!==0&&8>c?c:8;var d=R.T,_={};R.T=_,mc(e,!1,n,s);try{var y=u(),A=R.S;if(A!==null&&A(_,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var x=ub(y,r);Ha(e,n,x,Ut(e))}else Ha(e,n,r,Ut(e))}catch(D){Ha(e,n,{then:function(){},status:"rejected",reason:D},Ut())}finally{z.p=c,d!==null&&_.types!==null&&(d.types=_.types),R.T=d}}function pb(){}function hc(e,n,s,r){if(e.tag!==5)throw Error(l(476));var u=ep(e).queue;$m(e,u,n,G,s===null?pb:function(){return tp(e),s(r)})}function ep(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:G},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function tp(e){var n=ep(e);n.next===null&&(n=e.alternate.memoizedState),Ha(e,n.next.queue,{},Ut())}function dc(){return st(tl)}function np(){return qe().memoizedState}function ip(){return qe().memoizedState}function gb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ut();e=Wn(s);var r=Jn(n,e,s);r!==null&&(Et(r,n,s),Ia(r,n,s)),n={cache:Vu()},e.payload=n;return}n=n.return}}function _b(e,n,s){var r=Ut();s={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nr(e)?ap(n,s):(s=Mu(e,n,s,r),s!==null&&(Et(s,e,r),lp(s,n,r)))}function sp(e,n,s){var r=Ut();Ha(e,n,s,r)}function Ha(e,n,s,r){var u={lane:r,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Nr(e))ap(n,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var d=n.lastRenderedState,_=c(d,s);if(u.hasEagerState=!0,u.eagerState=_,xt(_,d))return rr(e,n,u,0),Ae===null&&lr(),!1}catch{}finally{}if(s=Mu(e,n,u,r),s!==null)return Et(s,e,r),lp(s,n,r),!0}return!1}function mc(e,n,s,r){if(r={lane:2,revertLane:Qc(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nr(e)){if(n)throw Error(l(479))}else n=Mu(e,s,r,2),n!==null&&Et(n,e,2)}function Nr(e){var n=e.alternate;return e===J||n!==null&&n===J}function ap(e,n){xs=br=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function lp(e,n,s){if((s&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,s|=r,n.lanes=s,fd(e,s)}}var Ba={readContext:st,use:Tr,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};Ba.useEffectEvent=ze;var rp={readContext:st,use:Tr,useCallback:function(e,n){return ht().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:Pm,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,wr(4194308,4,Xm.bind(null,n,e),s)},useLayoutEffect:function(e,n){return wr(4194308,4,e,n)},useInsertionEffect:function(e,n){wr(4,2,e,n)},useMemo:function(e,n){var s=ht();n=n===void 0?null:n;var r=e();if(Pi){Gn(!0);try{e()}finally{Gn(!1)}}return s.memoizedState=[r,n],r},useReducer:function(e,n,s){var r=ht();if(s!==void 0){var u=s(n);if(Pi){Gn(!0);try{s(n)}finally{Gn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=_b.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var n=ht();return e={current:e},n.memoizedState=e},useState:function(e){e=rc(e);var n=e.queue,s=sp.bind(null,J,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:cc,useDeferredValue:function(e,n){var s=ht();return fc(s,e,n)},useTransition:function(){var e=rc(!1);return e=$m.bind(null,J,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var r=J,u=ht();if(fe){if(s===void 0)throw Error(l(407));s=s()}else{if(s=n(),Ae===null)throw Error(l(349));(re&127)!==0||Rm(r,n,s)}u.memoizedState=s;var c={value:s,getSnapshot:n};return u.queue=c,Pm(xm.bind(null,r,c,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},Om.bind(null,r,c,s,n),null),s},useId:function(){var e=ht(),n=Ae.identifierPrefix;if(fe){var s=ln,r=an;s=(r&~(1<<32-Ot(r)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Er++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=cb++,n="_"+n+"r_"+s.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:dc,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=ht();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=mc.bind(null,J,!0,s),s.dispatch=n,[e,n]},useMemoCache:sc,useCacheRefresh:function(){return ht().memoizedState=gb.bind(null,J)},useEffectEvent:function(e){var n=ht(),s={impl:e};return n.memoizedState=s,function(){if((ge&2)!==0)throw Error(l(440));return s.impl.apply(void 0,arguments)}}},pc={readContext:st,use:Tr,useCallback:Zm,useContext:st,useEffect:uc,useImperativeHandle:Km,useInsertionEffect:Qm,useLayoutEffect:Fm,useMemo:Wm,useReducer:Cr,useRef:Gm,useState:function(){return Cr(Tn)},useDebugValue:cc,useDeferredValue:function(e,n){var s=qe();return Jm(s,Ee.memoizedState,e,n)},useTransition:function(){var e=Cr(Tn)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Nm,useId:np,useHostTransitionStatus:dc,useFormState:jm,useActionState:jm,useOptimistic:function(e,n){var s=qe();return Im(s,Ee,e,n)},useMemoCache:sc,useCacheRefresh:ip};pc.useEffectEvent=Ym;var op={readContext:st,use:Tr,useCallback:Zm,useContext:st,useEffect:uc,useImperativeHandle:Km,useInsertionEffect:Qm,useLayoutEffect:Fm,useMemo:Wm,useReducer:lc,useRef:Gm,useState:function(){return lc(Tn)},useDebugValue:cc,useDeferredValue:function(e,n){var s=qe();return Ee===null?fc(s,e,n):Jm(s,Ee.memoizedState,e,n)},useTransition:function(){var e=lc(Tn)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:za(e),n]},useSyncExternalStore:Nm,useId:np,useHostTransitionStatus:dc,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var s=qe();return Ee!==null?Im(s,Ee,e,n):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:sc,useCacheRefresh:ip};op.useEffectEvent=Ym;function gc(e,n,s,r){n=e.memoizedState,s=s(r,n),s=s==null?n:v({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var _c={enqueueSetState:function(e,n,s){e=e._reactInternals;var r=Ut(),u=Wn(r);u.payload=n,s!=null&&(u.callback=s),n=Jn(e,u,r),n!==null&&(Et(n,e,r),Ia(n,e,r))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var r=Ut(),u=Wn(r);u.tag=1,u.payload=n,s!=null&&(u.callback=s),n=Jn(e,u,r),n!==null&&(Et(n,e,r),Ia(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=Ut(),r=Wn(s);r.tag=2,n!=null&&(r.callback=n),n=Jn(e,r,s),n!==null&&(Et(n,e,s),Ia(n,e,s))}};function up(e,n,s,r,u,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,d):n.prototype&&n.prototype.isPureReactComponent?!wa(s,r)||!wa(u,c):!0}function cp(e,n,s,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,r),n.state!==e&&_c.enqueueReplaceState(n,n.state,null)}function Yi(e,n){var s=n;if("ref"in n){s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}if(e=e.defaultProps){s===n&&(s=v({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function fp(e){ar(e)}function hp(e){console.error(e)}function dp(e){ar(e)}function Rr(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mp(e,n,s){try{var r=e.onCaughtError;r(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yc(e,n,s){return s=Wn(s),s.tag=3,s.payload={element:null},s.callback=function(){Rr(e,n)},s}function pp(e){return e=Wn(e),e.tag=3,e}function gp(e,n,s,r){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;e.payload=function(){return u(c)},e.callback=function(){mp(n,s,r)}}var d=s.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){mp(n,s,r),typeof u!="function"&&(si===null?si=new Set([this]):si.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})})}function yb(e,n,s,r,u){if(s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=s.alternate,n!==null&&Cs(n,s,u,!0),s=Dt.current,s!==null){switch(s.tag){case 31:case 13:return Qt===null?jr():s.alternate===null&&He===0&&(He=3),s.flags&=-257,s.flags|=65536,s.lanes=u,r===pr?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([r]):n.add(r),Gc(e,r,u)),!1;case 22:return s.flags|=65536,r===pr?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([r]):s.add(r)),Gc(e,r,u)),!1}throw Error(l(435,s.tag))}return Gc(e,r,u),jr(),!1}if(fe)return n=Dt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==zu&&(e=Error(l(422),{cause:r}),Ra(Vt(e,s)))):(r!==zu&&(n=Error(l(423),{cause:r}),Ra(Vt(n,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Vt(r,s),u=yc(e.stateNode,r,u),Xu(e,u),He!==4&&(He=2)),!1;var c=Error(l(520),{cause:r});if(c=Vt(c,s),Fa===null?Fa=[c]:Fa.push(c),He!==4&&(He=2),n===null)return!0;r=Vt(r,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=yc(s.stateNode,r,e),Xu(s,e),!1;case 1:if(n=s.type,c=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))))return s.flags|=65536,u&=-u,s.lanes|=u,u=pp(u),gp(u,e,s,r),Xu(s,u),!1}s=s.return}while(s!==null);return!1}var vc=Error(l(461)),Pe=!1;function at(e,n,s,r){n.child=e===null?bm(n,null,s,r):Gi(n,e.child,s,r)}function _p(e,n,s,r,u){s=s.render;var c=n.ref;if("ref"in r){var d={};for(var _ in r)_!=="ref"&&(d[_]=r[_])}else d=r;return Bi(n),r=ec(e,n,s,d,c,u),_=tc(),e!==null&&!Pe?(nc(e,n,u),Cn(e,n,u)):(fe&&_&&Lu(n),n.flags|=1,at(e,n,r,u),n.child)}function yp(e,n,s,r,u){if(e===null){var c=s.type;return typeof c=="function"&&!Du(c)&&c.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=c,vp(e,n,c,r,u)):(e=ur(s.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!Nc(e,u)){var d=c.memoizedProps;if(s=s.compare,s=s!==null?s:wa,s(d,r)&&e.ref===n.ref)return Cn(e,n,u)}return n.flags|=1,e=yn(c,r),e.ref=n.ref,e.return=n,n.child=e}function vp(e,n,s,r,u){if(e!==null){var c=e.memoizedProps;if(wa(c,r)&&e.ref===n.ref)if(Pe=!1,n.pendingProps=r=c,Nc(e,u))(e.flags&131072)!==0&&(Pe=!0);else return n.lanes=e.lanes,Cn(e,n,u)}return bc(e,n,s,r,u)}function bp(e,n,s,r){var u=r.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|s:s,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return Ep(e,n,c,s,r)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dr(n,c!==null?c.cachePool:null),c!==null?Tm(n,c):Zu(),Cm(n);else return r=n.lanes=536870912,Ep(e,n,c!==null?c.baseLanes|s:s,s,r)}else c!==null?(dr(n,c.cachePool),Tm(n,c),ei(),n.memoizedState=null):(e!==null&&dr(n,null),Zu(),ei());return at(e,n,u,s),n.child}function ja(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ep(e,n,s,r,u){var c=Pu();return c=c===null?null:{parent:Ve._currentValue,pool:c},n.memoizedState={baseLanes:s,cachePool:c},e!==null&&dr(n,null),Zu(),Cm(n),e!==null&&Cs(e,n,r,!0),n.childLanes=u,null}function Or(e,n){return n=Mr({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Sp(e,n,s){return Gi(n,e.child,null,s),e=Or(n,n.pendingProps),e.flags|=2,It(n),n.memoizedState=null,e}function vb(e,n,s){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(fe){if(r.mode==="hidden")return e=Or(n,r),n.lanes=536870912,ja(null,e);if(Ju(n),(e=De)?(e=kg(e,Yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},s=am(e),s.return=n,n.child=s,it=n,De=null)):e=null,e===null)throw Xn(n);return n.lanes=536870912,null}return Or(n,r)}var c=e.memoizedState;if(c!==null){var d=c.dehydrated;if(Ju(n),u)if(n.flags&256)n.flags&=-257,n=Sp(e,n,s);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(l(558));else if(Pe||Cs(e,n,s,!1),u=(s&e.childLanes)!==0,Pe||u){if(r=Ae,r!==null&&(d=hd(r,s),d!==0&&d!==c.retryLane))throw c.retryLane=d,Li(e,d),Et(r,e,d),vc;jr(),n=Sp(e,n,s)}else e=c.treeContext,De=Ft(d.nextSibling),it=n,fe=!0,Fn=null,Yt=!1,e!==null&&om(n,e),n=Or(n,r),n.flags|=4096;return n}return e=yn(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function xr(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(n.flags|=4194816)}}function bc(e,n,s,r,u){return Bi(n),s=ec(e,n,s,r,void 0,u),r=tc(),e!==null&&!Pe?(nc(e,n,u),Cn(e,n,u)):(fe&&r&&Lu(n),n.flags|=1,at(e,n,s,u),n.child)}function Tp(e,n,s,r,u,c){return Bi(n),n.updateQueue=null,s=Am(n,r,s,u),wm(e),r=tc(),e!==null&&!Pe?(nc(e,n,c),Cn(e,n,c)):(fe&&r&&Lu(n),n.flags|=1,at(e,n,s,c),n.child)}function Cp(e,n,s,r,u){if(Bi(n),n.stateNode===null){var c=bs,d=s.contextType;typeof d=="object"&&d!==null&&(c=st(d)),c=new s(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=_c,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Qu(n),d=s.contextType,c.context=typeof d=="object"&&d!==null?st(d):bs,c.state=n.memoizedState,d=s.getDerivedStateFromProps,typeof d=="function"&&(gc(n,s,d,r),c.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&_c.enqueueReplaceState(c,c.state,null),La(n,r,c,u),ka(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){c=n.stateNode;var _=n.memoizedProps,y=Yi(s,_);c.props=y;var A=c.context,x=s.contextType;d=bs,typeof x=="object"&&x!==null&&(d=st(x));var D=s.getDerivedStateFromProps;x=typeof D=="function"||typeof c.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,x||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_||A!==d)&&cp(n,c,r,d),Zn=!1;var N=n.memoizedState;c.state=N,La(n,r,c,u),ka(),A=n.memoizedState,_||N!==A||Zn?(typeof D=="function"&&(gc(n,s,D,r),A=n.memoizedState),(y=Zn||up(n,s,y,r,N,A,d))?(x||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),c.props=r,c.state=A,c.context=d,r=y):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Fu(e,n),d=n.memoizedProps,x=Yi(s,d),c.props=x,D=n.pendingProps,N=c.context,A=s.contextType,y=bs,typeof A=="object"&&A!==null&&(y=st(A)),_=s.getDerivedStateFromProps,(A=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==D||N!==y)&&cp(n,c,r,y),Zn=!1,N=n.memoizedState,c.state=N,La(n,r,c,u),ka();var O=n.memoizedState;d!==D||N!==O||Zn||e!==null&&e.dependencies!==null&&fr(e.dependencies)?(typeof _=="function"&&(gc(n,s,_,r),O=n.memoizedState),(x=Zn||up(n,s,x,r,N,O,y)||e!==null&&e.dependencies!==null&&fr(e.dependencies))?(A||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,O,y),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,O,y)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=O),c.props=r,c.state=O,c.context=y,r=x):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),r=!1)}return c=r,xr(e,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,s=r&&typeof s.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&r?(n.child=Gi(n,e.child,null,u),n.child=Gi(n,null,s,u)):at(e,n,s,u),n.memoizedState=c.state,e=n.child):e=Cn(e,n,u),e}function wp(e,n,s,r){return zi(),n.flags|=256,at(e,n,s,r),n.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:mm()}}function Tc(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=Lt),e}function Ap(e,n,s){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(fe){if(u?$n(n):ei(),(e=De)?(e=kg(e,Yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},s=am(e),s.return=n,n.child=s,it=n,De=null)):e=null,e===null)throw Xn(n);return lf(e)?n.lanes=32:n.lanes=536870912,null}var _=r.children;return r=r.fallback,u?(ei(),u=n.mode,_=Mr({mode:"hidden",children:_},u),r=Ui(r,u,s,null),_.return=n,r.return=n,_.sibling=r,n.child=_,r=n.child,r.memoizedState=Sc(s),r.childLanes=Tc(e,d,s),n.memoizedState=Ec,ja(null,r)):($n(n),Cc(n,_))}var y=e.memoizedState;if(y!==null&&(_=y.dehydrated,_!==null)){if(c)n.flags&256?($n(n),n.flags&=-257,n=wc(e,n,s)):n.memoizedState!==null?(ei(),n.child=e.child,n.flags|=128,n=null):(ei(),_=r.fallback,u=n.mode,r=Mr({mode:"visible",children:r.children},u),_=Ui(_,u,s,null),_.flags|=2,r.return=n,_.return=n,r.sibling=_,n.child=r,Gi(n,e.child,null,s),r=n.child,r.memoizedState=Sc(s),r.childLanes=Tc(e,d,s),n.memoizedState=Ec,n=ja(null,r));else if($n(n),lf(_)){if(d=_.nextSibling&&_.nextSibling.dataset,d)var A=d.dgst;d=A,r=Error(l(419)),r.stack="",r.digest=d,Ra({value:r,source:null,stack:null}),n=wc(e,n,s)}else if(Pe||Cs(e,n,s,!1),d=(s&e.childLanes)!==0,Pe||d){if(d=Ae,d!==null&&(r=hd(d,s),r!==0&&r!==y.retryLane))throw y.retryLane=r,Li(e,r),Et(d,e,r),vc;af(_)||jr(),n=wc(e,n,s)}else af(_)?(n.flags|=192,n.child=e.child,n=null):(e=y.treeContext,De=Ft(_.nextSibling),it=n,fe=!0,Fn=null,Yt=!1,e!==null&&om(n,e),n=Cc(n,r.children),n.flags|=4096);return n}return u?(ei(),_=r.fallback,u=n.mode,y=e.child,A=y.sibling,r=yn(y,{mode:"hidden",children:r.children}),r.subtreeFlags=y.subtreeFlags&65011712,A!==null?_=yn(A,_):(_=Ui(_,u,s,null),_.flags|=2),_.return=n,r.return=n,r.sibling=_,n.child=r,ja(null,r),r=n.child,_=e.child.memoizedState,_===null?_=Sc(s):(u=_.cachePool,u!==null?(y=Ve._currentValue,u=u.parent!==y?{parent:y,pool:y}:u):u=mm(),_={baseLanes:_.baseLanes|s,cachePool:u}),r.memoizedState=_,r.childLanes=Tc(e,d,s),n.memoizedState=Ec,ja(e.child,r)):($n(n),s=e.child,e=s.sibling,s=yn(s,{mode:"visible",children:r.children}),s.return=n,s.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=s,n.memoizedState=null,s)}function Cc(e,n){return n=Mr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mr(e,n){return e=Mt(22,e,null,n),e.lanes=0,e}function wc(e,n,s){return Gi(n,e.child,null,s),e=Cc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Np(e,n,s){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ju(e.return,n,s)}function Ac(e,n,s,r,u,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:s,tailMode:u,treeForkCount:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=s,d.tailMode=u,d.treeForkCount=c)}function Rp(e,n,s){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var d=je.current,_=(d&2)!==0;if(_?(d=d&1|2,n.flags|=128):d&=1,B(je,d),at(e,n,r,s),r=fe?Na:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Np(e,s,n);else if(e.tag===19)Np(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=n.child,u=null;s!==null;)e=s.alternate,e!==null&&vr(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=n.child,n.child=null):(u=s.sibling,s.sibling=null),Ac(n,!1,u,s,c,r);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vr(e)===null){n.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Ac(n,!0,s,null,c,r);break;case"together":Ac(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Cn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),ii|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Cs(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,s=yn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=yn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Nc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fr(e)))}function bb(e,n,s){switch(n.tag){case 3:ft(n,n.stateNode.containerInfo),Kn(n,Ve,e.memoizedState.cache),zi();break;case 27:case 5:ha(n);break;case 4:ft(n,n.stateNode.containerInfo);break;case 10:Kn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ju(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?($n(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Ap(e,n,s):($n(n),e=Cn(e,n,s),e!==null?e.sibling:null);$n(n);break;case 19:var u=(e.flags&128)!==0;if(r=(s&n.childLanes)!==0,r||(Cs(e,n,s,!1),r=(s&n.childLanes)!==0),u){if(r)return Rp(e,n,s);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),B(je,je.current),r)break;return null;case 22:return n.lanes=0,bp(e,n,s,n.pendingProps);case 24:Kn(n,Ve,e.memoizedState.cache)}return Cn(e,n,s)}function Op(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)Pe=!0;else{if(!Nc(e,s)&&(n.flags&128)===0)return Pe=!1,bb(e,n,s);Pe=(e.flags&131072)!==0}else Pe=!1,fe&&(n.flags&1048576)!==0&&rm(n,Na,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=qi(n.elementType),n.type=e,typeof e=="function")Du(e)?(r=Yi(e,r),n.tag=1,n=Cp(null,n,e,r,s)):(n.tag=0,n=bc(null,n,e,r,s));else{if(e!=null){var u=e.$$typeof;if(u===Xe){n.tag=11,n=_p(null,n,e,r,s);break e}else if(u===ie){n.tag=14,n=yp(null,n,e,r,s);break e}}throw n=Y(e)||e,Error(l(306,n,""))}}return n;case 0:return bc(e,n,n.type,n.pendingProps,s);case 1:return r=n.type,u=Yi(r,n.pendingProps),Cp(e,n,r,u,s);case 3:e:{if(ft(n,n.stateNode.containerInfo),e===null)throw Error(l(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,Fu(e,n),La(n,r,null,s);var d=n.memoizedState;if(r=d.cache,Kn(n,Ve,r),r!==c.cache&&qu(n,[Ve],s,!0),ka(),r=d.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=wp(e,n,r,s);break e}else if(r!==u){u=Vt(Error(l(424)),n),Ra(u),n=wp(e,n,r,s);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Ft(e.firstChild),it=n,fe=!0,Fn=null,Yt=!0,s=bm(n,null,r,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(zi(),r===u){n=Cn(e,n,s);break e}at(e,n,r,s)}n=n.child}return n;case 26:return xr(e,n),e===null?(s=jg(n.type,null,n.pendingProps,null))?n.memoizedState=s:fe||(s=n.type,e=n.pendingProps,r=Fr(se.current).createElement(s),r[nt]=n,r[pt]=e,lt(r,s,e),Ke(r),n.stateNode=r):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ha(n),e===null&&fe&&(r=n.stateNode=zg(n.type,n.pendingProps,se.current),it=n,Yt=!0,u=De,oi(n.type)?(rf=u,De=Ft(r.firstChild)):De=u),at(e,n,n.pendingProps.children,s),xr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&fe&&((u=r=De)&&(r=Zb(r,n.type,n.pendingProps,Yt),r!==null?(n.stateNode=r,it=n,De=Ft(r.firstChild),Yt=!1,u=!0):u=!1),u||Xn(n)),ha(n),u=n.type,c=n.pendingProps,d=e!==null?e.memoizedProps:null,r=c.children,tf(u,c)?r=null:d!==null&&tf(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=ec(e,n,fb,null,null,s),tl._currentValue=u),xr(e,n),at(e,n,r,s),n.child;case 6:return e===null&&fe&&((e=s=De)&&(s=Wb(s,n.pendingProps,Yt),s!==null?(n.stateNode=s,it=n,De=null,e=!0):e=!1),e||Xn(n)),null;case 13:return Ap(e,n,s);case 4:return ft(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gi(n,null,r,s):at(e,n,r,s),n.child;case 11:return _p(e,n,n.type,n.pendingProps,s);case 7:return at(e,n,n.pendingProps,s),n.child;case 8:return at(e,n,n.pendingProps.children,s),n.child;case 12:return at(e,n,n.pendingProps.children,s),n.child;case 10:return r=n.pendingProps,Kn(n,n.type,r.value),at(e,n,r.children,s),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Bi(n),u=st(u),r=r(u),n.flags|=1,at(e,n,r,s),n.child;case 14:return yp(e,n,n.type,n.pendingProps,s);case 15:return vp(e,n,n.type,n.pendingProps,s);case 19:return Rp(e,n,s);case 31:return vb(e,n,s);case 22:return bp(e,n,s,n.pendingProps);case 24:return Bi(n),r=st(Ve),e===null?(u=Pu(),u===null&&(u=Ae,c=Vu(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=s),u=c),n.memoizedState={parent:r,cache:u},Qu(n),Kn(n,Ve,u)):((e.lanes&s)!==0&&(Fu(e,n),La(n,null,null,s),ka()),u=e.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Kn(n,Ve,r)):(r=c.cache,Kn(n,Ve,r),r!==u.cache&&qu(n,[Ve],s,!0))),at(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(l(156,n.tag))}function wn(e){e.flags|=4}function Rc(e,n,s,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw Vi=pr,Yu}else e.flags&=-16777217}function xp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yg(n))if(ng())e.flags|=8192;else throw Vi=pr,Yu}function Dr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ud():536870912,e.lanes|=n,Us|=n)}function qa(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var r=null;s!==null;)s.alternate!==null&&(r=s),s=s.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,r=0;if(n)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=s,n}function Eb(e,n,s){var r=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return s=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),En(Ve),Be(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ts(n)?wn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),Ie(n),null;case 26:var u=n.type,c=n.memoizedState;return e===null?(wn(n),c!==null?(Ie(n),xp(n,c)):(Ie(n),Rc(n,u,null,r,s))):c?c!==e.memoizedState?(wn(n),Ie(n),xp(n,c)):(Ie(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&wn(n),Ie(n),Rc(n,u,e,r,s)),null;case 27:if(Gl(n),s=se.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&wn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ie(n),null}e=q.current,Ts(n)?um(n):(e=zg(u,r,s),n.stateNode=e,wn(n))}return Ie(n),null;case 5:if(Gl(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&wn(n);else{if(!r){if(n.stateNode===null)throw Error(l(166));return Ie(n),null}if(c=q.current,Ts(n))um(n);else{var d=Fr(se.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?d.createElement("select",{is:r.is}):d.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?d.createElement(u,{is:r.is}):d.createElement(u)}}c[nt]=n,c[pt]=r;e:for(d=n.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}n.stateNode=c;e:switch(lt(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&wn(n)}}return Ie(n),Rc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,s),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&wn(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(e=se.current,Ts(n)){if(e=n.stateNode,s=n.memoizedProps,r=null,u=it,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[nt]=n,e=!!(e.nodeValue===s||r!==null&&r.suppressHydrationWarning===!0||Ag(e.nodeValue,s)),e||Xn(n,!0)}else e=Fr(e).createTextNode(r),e[nt]=n,n.stateNode=e}return Ie(n),null;case 31:if(s=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ts(n),s!==null){if(e===null){if(!r)throw Error(l(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[nt]=n}else zi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),e=!1}else s=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return n.flags&256?(It(n),n):(It(n),null);if((n.flags&128)!==0)throw Error(l(558))}return Ie(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ts(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[nt]=n}else zi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(It(n),n):(It(n),null)}return It(n),(n.flags&128)!==0?(n.lanes=s,n):(s=r!==null,e=e!==null&&e.memoizedState!==null,s&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),s!==e&&s&&(n.child.flags|=8192),Dr(n,n.updateQueue),Ie(n),null);case 4:return Be(),e===null&&Zc(n.stateNode.containerInfo),Ie(n),null;case 10:return En(n.type),Ie(n),null;case 19:if(I(je),r=n.memoizedState,r===null)return Ie(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)qa(r,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=vr(e),c!==null){for(n.flags|=128,qa(r,!1),e=c.updateQueue,n.updateQueue=e,Dr(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)sm(s,e),s=s.sibling;return B(je,je.current&1|2),fe&&vn(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Nt()>zr&&(n.flags|=128,u=!0,qa(r,!1),n.lanes=4194304)}else{if(!u)if(e=vr(c),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dr(n,e),qa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!fe)return Ie(n),null}else 2*Nt()-r.renderingStartTime>zr&&s!==536870912&&(n.flags|=128,u=!0,qa(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(e=r.last,e!==null?e.sibling=c:n.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Nt(),e.sibling=null,s=je.current,B(je,u?s&1|2:s&1),fe&&vn(n,r.treeForkCount),e):(Ie(n),null);case 22:case 23:return It(n),Wu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(s&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),s=n.updateQueue,s!==null&&Dr(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==s&&(n.flags|=2048),e!==null&&I(ji),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),En(Ve),Ie(n),null;case 25:return null;case 30:return null}throw Error(l(156,n.tag))}function Sb(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return En(Ve),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Gl(n),null;case 31:if(n.memoizedState!==null){if(It(n),n.alternate===null)throw Error(l(340));zi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(It(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));zi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(je),null;case 4:return Be(),null;case 10:return En(n.type),null;case 22:case 23:return It(n),Wu(),e!==null&&I(ji),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return En(Ve),null;case 25:return null;default:return null}}function Mp(e,n){switch(Uu(n),n.tag){case 3:En(Ve),Be();break;case 26:case 27:case 5:Gl(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&It(n);break;case 13:It(n);break;case 19:I(je);break;case 10:En(n.type);break;case 22:case 23:It(n),Wu(),e!==null&&I(ji);break;case 24:En(Ve)}}function Va(e,n){try{var s=n.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var u=r.next;s=u;do{if((s.tag&e)===e){r=void 0;var c=s.create,d=s.inst;r=c(),d.destroy=r}s=s.next}while(s!==u)}}catch(_){be(n,n.return,_)}}function ti(e,n,s){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&e)===e){var d=r.inst,_=d.destroy;if(_!==void 0){d.destroy=void 0,u=n;var y=s,A=_;try{A()}catch(x){be(u,y,x)}}}r=r.next}while(r!==c)}}catch(x){be(n,n.return,x)}}function Dp(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{Sm(n,s)}catch(r){be(e,e.return,r)}}}function Ip(e,n,s){s.props=Yi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(r){be(e,n,r)}}function Ga(e,n){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof s=="function"?e.refCleanup=s(r):s.current=r}}catch(u){be(e,n,u)}}function rn(e,n){var s=e.ref,r=e.refCleanup;if(s!==null)if(typeof r=="function")try{r()}catch(u){be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){be(e,n,u)}else s.current=null}function kp(e){var n=e.type,s=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break e;case"img":s.src?r.src=s.src:s.srcSet&&(r.srcset=s.srcSet)}}catch(u){be(e,e.return,u)}}function Oc(e,n,s){try{var r=e.stateNode;Pb(r,e.type,s,n),r[pt]=n}catch(u){be(e,e.return,u)}}function Lp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oi(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mc(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(e),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=gn));else if(r!==4&&(r===27&&oi(e.type)&&(s=e.stateNode,n=null),e=e.child,e!==null))for(Mc(e,n,s),e=e.sibling;e!==null;)Mc(e,n,s),e=e.sibling}function Ir(e,n,s){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(r!==4&&(r===27&&oi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Ir(e,n,s),e=e.sibling;e!==null;)Ir(e,n,s),e=e.sibling}function Up(e){var n=e.stateNode,s=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);lt(n,r,s),n[nt]=e,n[pt]=s}catch(c){be(e,e.return,c)}}var An=!1,Ye=!1,Dc=!1,zp=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Tb(e,n){if(e=e.containerInfo,$c=eo,e=Kd(e),wu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var r=s.getSelection&&s.getSelection();if(r&&r.rangeCount!==0){s=r.anchorNode;var u=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var d=0,_=-1,y=-1,A=0,x=0,D=e,N=null;t:for(;;){for(var O;D!==s||u!==0&&D.nodeType!==3||(_=d+u),D!==c||r!==0&&D.nodeType!==3||(y=d+r),D.nodeType===3&&(d+=D.nodeValue.length),(O=D.firstChild)!==null;)N=D,D=O;for(;;){if(D===e)break t;if(N===s&&++A===u&&(_=d),N===c&&++x===r&&(y=d),(O=D.nextSibling)!==null)break;D=N,N=D.parentNode}D=O}s=_===-1||y===-1?null:{start:_,end:y}}else s=null}s=s||{start:0,end:0}}else s=null;for(ef={focusedElem:e,selectionRange:s},eo=!1,Ze=n;Ze!==null;)if(n=Ze,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ze=e;else for(;Ze!==null;){switch(n=Ze,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,s=n,u=c.memoizedProps,c=c.memoizedState,r=s.stateNode;try{var j=Yi(s.type,u);e=r.getSnapshotBeforeUpdate(j,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(F){be(s,s.return,F)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)sf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=n.sibling,e!==null){e.return=n.return,Ze=e;break}Ze=n.return}}function Hp(e,n,s){var r=s.flags;switch(s.tag){case 0:case 11:case 15:Rn(e,s),r&4&&Va(5,s);break;case 1:if(Rn(e,s),r&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(d){be(s,s.return,d)}else{var u=Yi(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){be(s,s.return,d)}}r&64&&Dp(s),r&512&&Ga(s,s.return);break;case 3:if(Rn(e,s),r&64&&(e=s.updateQueue,e!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{Sm(e,n)}catch(d){be(s,s.return,d)}}break;case 27:n===null&&r&4&&Up(s);case 26:case 5:Rn(e,s),n===null&&r&4&&kp(s),r&512&&Ga(s,s.return);break;case 12:Rn(e,s);break;case 31:Rn(e,s),r&4&&qp(e,s);break;case 13:Rn(e,s),r&4&&Vp(e,s),r&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Db.bind(null,s),Jb(e,s))));break;case 22:if(r=s.memoizedState!==null||An,!r){n=n!==null&&n.memoizedState!==null||Ye,u=An;var c=Ye;An=r,(Ye=n)&&!c?On(e,s,(s.subtreeFlags&8772)!==0):Rn(e,s),An=u,Ye=c}break;case 30:break;default:Rn(e,s)}}function Bp(e){var n=e.alternate;n!==null&&(e.alternate=null,Bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ou(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,_t=!1;function Nn(e,n,s){for(s=s.child;s!==null;)jp(e,n,s),s=s.sibling}function jp(e,n,s){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(da,s)}catch{}switch(s.tag){case 26:Ye||rn(s,n),Nn(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Ye||rn(s,n);var r=Le,u=_t;oi(s.type)&&(Le=s.stateNode,_t=!1),Nn(e,n,s),Ja(s.stateNode),Le=r,_t=u;break;case 5:Ye||rn(s,n);case 6:if(r=Le,u=_t,Le=null,Nn(e,n,s),Le=r,_t=u,Le!==null)if(_t)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(s.stateNode)}catch(c){be(s,n,c)}else try{Le.removeChild(s.stateNode)}catch(c){be(s,n,c)}break;case 18:Le!==null&&(_t?(e=Le,Dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ps(e)):Dg(Le,s.stateNode));break;case 4:r=Le,u=_t,Le=s.stateNode.containerInfo,_t=!0,Nn(e,n,s),Le=r,_t=u;break;case 0:case 11:case 14:case 15:ti(2,s,n),Ye||ti(4,s,n),Nn(e,n,s);break;case 1:Ye||(rn(s,n),r=s.stateNode,typeof r.componentWillUnmount=="function"&&Ip(s,n,r)),Nn(e,n,s);break;case 21:Nn(e,n,s);break;case 22:Ye=(r=Ye)||s.memoizedState!==null,Nn(e,n,s),Ye=r;break;default:Nn(e,n,s)}}function qp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ps(e)}catch(s){be(n,n.return,s)}}}function Vp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ps(e)}catch(s){be(n,n.return,s)}}function Cb(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new zp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new zp),n;default:throw Error(l(435,e.tag))}}function kr(e,n){var s=Cb(e);n.forEach(function(r){if(!s.has(r)){s.add(r);var u=Ib.bind(null,e,r);r.then(u,u)}})}function yt(e,n){var s=n.deletions;if(s!==null)for(var r=0;r<s.length;r++){var u=s[r],c=e,d=n,_=d;e:for(;_!==null;){switch(_.tag){case 27:if(oi(_.type)){Le=_.stateNode,_t=!1;break e}break;case 5:Le=_.stateNode,_t=!1;break e;case 3:case 4:Le=_.stateNode.containerInfo,_t=!0;break e}_=_.return}if(Le===null)throw Error(l(160));jp(c,d,u),Le=null,_t=!1,c=u.alternate,c!==null&&(c.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gp(n,e),n=n.sibling}var Zt=null;function Gp(e,n){var s=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(n,e),vt(e),r&4&&(ti(3,e,e.return),Va(3,e),ti(5,e,e.return));break;case 1:yt(n,e),vt(e),r&512&&(Ye||s===null||rn(s,s.return)),r&64&&An&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?r:s.concat(r))));break;case 26:var u=Zt;if(yt(n,e),vt(e),r&512&&(Ye||s===null||rn(s,s.return)),r&4){var c=s!==null?s.memoizedState:null;if(r=e.memoizedState,s===null)if(r===null)if(e.stateNode===null){e:{r=e.type,s=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":c=u.getElementsByTagName("title")[0],(!c||c[ga]||c[nt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=u.createElement(r),u.head.insertBefore(c,u.querySelector("head > title"))),lt(c,r,s),c[nt]=e,Ke(c),r=c;break e;case"link":var d=Gg("link","href",u).get(r+(s.href||""));if(d){for(var _=0;_<d.length;_++)if(c=d[_],c.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&c.getAttribute("rel")===(s.rel==null?null:s.rel)&&c.getAttribute("title")===(s.title==null?null:s.title)&&c.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){d.splice(_,1);break t}}c=u.createElement(r),lt(c,r,s),u.head.appendChild(c);break;case"meta":if(d=Gg("meta","content",u).get(r+(s.content||""))){for(_=0;_<d.length;_++)if(c=d[_],c.getAttribute("content")===(s.content==null?null:""+s.content)&&c.getAttribute("name")===(s.name==null?null:s.name)&&c.getAttribute("property")===(s.property==null?null:s.property)&&c.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&c.getAttribute("charset")===(s.charSet==null?null:s.charSet)){d.splice(_,1);break t}}c=u.createElement(r),lt(c,r,s),u.head.appendChild(c);break;default:throw Error(l(468,r))}c[nt]=e,Ke(c),r=c}e.stateNode=r}else Pg(u,e.type,e.stateNode);else e.stateNode=Vg(u,r,e.memoizedProps);else c!==r?(c===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):c.count--,r===null?Pg(u,e.type,e.stateNode):Vg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,s.memoizedProps)}break;case 27:yt(n,e),vt(e),r&512&&(Ye||s===null||rn(s,s.return)),s!==null&&r&4&&Oc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(yt(n,e),vt(e),r&512&&(Ye||s===null||rn(s,s.return)),e.flags&32){u=e.stateNode;try{ds(u,"")}catch(j){be(e,e.return,j)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Oc(e,u,s!==null?s.memoizedProps:u)),r&1024&&(Dc=!0);break;case 6:if(yt(n,e),vt(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,s=e.stateNode;try{s.nodeValue=r}catch(j){be(e,e.return,j)}}break;case 3:if(Zr=null,u=Zt,Zt=Xr(n.containerInfo),yt(n,e),Zt=u,vt(e),r&4&&s!==null&&s.memoizedState.isDehydrated)try{Ps(n.containerInfo)}catch(j){be(e,e.return,j)}Dc&&(Dc=!1,Pp(e));break;case 4:r=Zt,Zt=Xr(e.stateNode.containerInfo),yt(n,e),vt(e),Zt=r;break;case 12:yt(n,e),vt(e);break;case 31:yt(n,e),vt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 13:yt(n,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ur=Nt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 22:u=e.memoizedState!==null;var y=s!==null&&s.memoizedState!==null,A=An,x=Ye;if(An=A||u,Ye=x||y,yt(n,e),Ye=x,An=A,vt(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(s===null||y||An||Ye||Qi(e)),s=null,n=e;;){if(n.tag===5||n.tag===26){if(s===null){y=s=n;try{if(c=y.stateNode,u)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=y.stateNode;var D=y.memoizedProps.style,N=D!=null&&D.hasOwnProperty("display")?D.display:null;_.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(j){be(y,y.return,j)}}}else if(n.tag===6){if(s===null){y=n;try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(j){be(y,y.return,j)}}}else if(n.tag===18){if(s===null){y=n;try{var O=y.stateNode;u?Ig(O,!0):Ig(y.stateNode,!1)}catch(j){be(y,y.return,j)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(s=r.retryQueue,s!==null&&(r.retryQueue=null,kr(e,s))));break;case 19:yt(n,e),vt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,kr(e,r)));break;case 30:break;case 21:break;default:yt(n,e),vt(e)}}function vt(e){var n=e.flags;if(n&2){try{for(var s,r=e.return;r!==null;){if(Lp(r)){s=r;break}r=r.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var u=s.stateNode,c=xc(e);Ir(e,c,u);break;case 5:var d=s.stateNode;s.flags&32&&(ds(d,""),s.flags&=-33);var _=xc(e);Ir(e,_,d);break;case 3:case 4:var y=s.stateNode.containerInfo,A=xc(e);Mc(e,A,y);break;default:throw Error(l(161))}}catch(x){be(e,e.return,x)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Rn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hp(e,n.alternate,n),n=n.sibling}function Qi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ti(4,n,n.return),Qi(n);break;case 1:rn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Ip(n,n.return,s),Qi(n);break;case 27:Ja(n.stateNode);case 26:case 5:rn(n,n.return),Qi(n);break;case 22:n.memoizedState===null&&Qi(n);break;case 30:Qi(n);break;default:Qi(n)}e=e.sibling}}function On(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,c=n,d=c.flags;switch(c.tag){case 0:case 11:case 15:On(u,c,s),Va(4,c);break;case 1:if(On(u,c,s),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(A){be(r,r.return,A)}if(r=c,u=r.updateQueue,u!==null){var _=r.stateNode;try{var y=u.shared.hiddenCallbacks;if(y!==null)for(u.shared.hiddenCallbacks=null,u=0;u<y.length;u++)Em(y[u],_)}catch(A){be(r,r.return,A)}}s&&d&64&&Dp(c),Ga(c,c.return);break;case 27:Up(c);case 26:case 5:On(u,c,s),s&&r===null&&d&4&&kp(c),Ga(c,c.return);break;case 12:On(u,c,s);break;case 31:On(u,c,s),s&&d&4&&qp(u,c);break;case 13:On(u,c,s),s&&d&4&&Vp(u,c);break;case 22:c.memoizedState===null&&On(u,c,s),Ga(c,c.return);break;case 30:break;default:On(u,c,s)}n=n.sibling}}function Ic(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Oa(s))}function kc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e))}function Wt(e,n,s,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yp(e,n,s,r),n=n.sibling}function Yp(e,n,s,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Wt(e,n,s,r),u&2048&&Va(9,n);break;case 1:Wt(e,n,s,r);break;case 3:Wt(e,n,s,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Oa(e)));break;case 12:if(u&2048){Wt(e,n,s,r),e=n.stateNode;try{var c=n.memoizedProps,d=c.id,_=c.onPostCommit;typeof _=="function"&&_(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){be(n,n.return,y)}}else Wt(e,n,s,r);break;case 31:Wt(e,n,s,r);break;case 13:Wt(e,n,s,r);break;case 23:break;case 22:c=n.stateNode,d=n.alternate,n.memoizedState!==null?c._visibility&2?Wt(e,n,s,r):Pa(e,n):c._visibility&2?Wt(e,n,s,r):(c._visibility|=2,Is(e,n,s,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ic(d,n);break;case 24:Wt(e,n,s,r),u&2048&&kc(n.alternate,n);break;default:Wt(e,n,s,r)}}function Is(e,n,s,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,d=n,_=s,y=r,A=d.flags;switch(d.tag){case 0:case 11:case 15:Is(c,d,_,y,u),Va(8,d);break;case 23:break;case 22:var x=d.stateNode;d.memoizedState!==null?x._visibility&2?Is(c,d,_,y,u):Pa(c,d):(x._visibility|=2,Is(c,d,_,y,u)),u&&A&2048&&Ic(d.alternate,d);break;case 24:Is(c,d,_,y,u),u&&A&2048&&kc(d.alternate,d);break;default:Is(c,d,_,y,u)}n=n.sibling}}function Pa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,r=n,u=r.flags;switch(r.tag){case 22:Pa(s,r),u&2048&&Ic(r.alternate,r);break;case 24:Pa(s,r),u&2048&&kc(r.alternate,r);break;default:Pa(s,r)}n=n.sibling}}var Ya=8192;function ks(e,n,s){if(e.subtreeFlags&Ya)for(e=e.child;e!==null;)Qp(e,n,s),e=e.sibling}function Qp(e,n,s){switch(e.tag){case 26:ks(e,n,s),e.flags&Ya&&e.memoizedState!==null&&cE(s,Zt,e.memoizedState,e.memoizedProps);break;case 5:ks(e,n,s);break;case 3:case 4:var r=Zt;Zt=Xr(e.stateNode.containerInfo),ks(e,n,s),Zt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ya,Ya=16777216,ks(e,n,s),Ya=r):ks(e,n,s));break;default:ks(e,n,s)}}function Fp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Qa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Ze=r,Kp(r,e)}Fp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xp(e),e=e.sibling}function Xp(e){switch(e.tag){case 0:case 11:case 15:Qa(e),e.flags&2048&&ti(9,e,e.return);break;case 3:Qa(e);break;case 12:Qa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Lr(e)):Qa(e);break;default:Qa(e)}}function Lr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];Ze=r,Kp(r,e)}Fp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ti(8,n,n.return),Lr(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,Lr(n));break;default:Lr(n)}e=e.sibling}}function Kp(e,n){for(;Ze!==null;){var s=Ze;switch(s.tag){case 0:case 11:case 15:ti(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var r=s.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oa(s.memoizedState.cache)}if(r=s.child,r!==null)r.return=s,Ze=r;else e:for(s=e;Ze!==null;){r=Ze;var u=r.sibling,c=r.return;if(Bp(r),r===s){Ze=null;break e}if(u!==null){u.return=c,Ze=u;break e}Ze=c}}}var wb={getCacheForType:function(e){var n=st(Ve),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s},cacheSignal:function(){return st(Ve).controller.signal}},Ab=typeof WeakMap=="function"?WeakMap:Map,ge=0,Ae=null,ae=null,re=0,ve=0,kt=null,ni=!1,Ls=!1,Lc=!1,xn=0,He=0,ii=0,Fi=0,Uc=0,Lt=0,Us=0,Fa=null,bt=null,zc=!1,Ur=0,Zp=0,zr=1/0,Hr=null,si=null,Qe=0,ai=null,zs=null,Mn=0,Hc=0,Bc=null,Wp=null,Xa=0,jc=null;function Ut(){return(ge&2)!==0&&re!==0?re&-re:R.T!==null?Qc():dd()}function Jp(){if(Lt===0)if((re&536870912)===0||fe){var e=Ql;Ql<<=1,(Ql&3932160)===0&&(Ql=262144),Lt=e}else Lt=536870912;return e=Dt.current,e!==null&&(e.flags|=32),Lt}function Et(e,n,s){(e===Ae&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Hs(e,0),li(e,re,Lt,!1)),pa(e,s),((ge&2)===0||e!==Ae)&&(e===Ae&&((ge&2)===0&&(Fi|=s),He===4&&li(e,re,Lt,!1)),on(e))}function $p(e,n,s){if((ge&6)!==0)throw Error(l(327));var r=!s&&(n&127)===0&&(n&e.expiredLanes)===0||ma(e,n),u=r?Ob(e,n):Vc(e,n,!0),c=r;do{if(u===0){Ls&&!r&&li(e,n,0,!1);break}else{if(s=e.current.alternate,c&&!Nb(s)){u=Vc(e,n,!1),c=!1;continue}if(u===2){if(c=n,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var _=e;u=Fa;var y=_.current.memoizedState.isDehydrated;if(y&&(Hs(_,d).flags|=256),d=Vc(_,d,!1),d!==2){if(Lc&&!y){_.errorRecoveryDisabledLanes|=c,Fi|=c,u=4;break e}c=bt,bt=u,c!==null&&(bt===null?bt=c:bt.push.apply(bt,c))}u=d}if(c=!1,u!==2)continue}}if(u===1){Hs(e,0),li(e,n,0,!0);break}e:{switch(r=e,c=u,c){case 0:case 1:throw Error(l(345));case 4:if((n&4194048)!==n)break;case 6:li(r,n,Lt,!ni);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((n&62914560)===n&&(u=Ur+300-Nt(),10<u)){if(li(r,n,Lt,!ni),Xl(r,0,!0)!==0)break e;Mn=n,r.timeoutHandle=xg(eg.bind(null,r,s,bt,Hr,zc,n,Lt,Fi,Us,ni,c,"Throttled",-0,0),u);break e}eg(r,s,bt,Hr,zc,n,Lt,Fi,Us,ni,c,null,-0,0)}}break}while(!0);on(e)}function eg(e,n,s,r,u,c,d,_,y,A,x,D,N,O){if(e.timeoutHandle=-1,D=n.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Qp(n,c,D);var j=(c&62914560)===c?Ur-Nt():(c&4194048)===c?Zp-Nt():0;if(j=fE(D,j),j!==null){Mn=c,e.cancelPendingCommit=j(og.bind(null,e,n,c,s,r,u,d,_,y,x,D,null,N,O)),li(e,c,d,!A);return}}og(e,n,c,s,r,u,d,_,y)}function Nb(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var r=0;r<s.length;r++){var u=s[r],c=u.getSnapshot;u=u.value;try{if(!xt(c(),u))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function li(e,n,s,r){n&=~Uc,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var c=31-Ot(u),d=1<<c;r[c]=-1,u&=~d}s!==0&&cd(e,s,n)}function Br(){return(ge&6)===0?(Ka(0),!1):!0}function qc(){if(ae!==null){if(ve===0)var e=ae.return;else e=ae,bn=Hi=null,ic(e),Rs=null,Ma=0,e=ae;for(;e!==null;)Mp(e.alternate,e),e=e.return;ae=null}}function Hs(e,n){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Fb(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Mn=0,qc(),Ae=e,ae=s=yn(e.current,null),re=n,ve=0,kt=null,ni=!1,Ls=ma(e,n),Lc=!1,Us=Lt=Uc=Fi=ii=He=0,bt=Fa=null,zc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),c=1<<u;n|=e[u],r&=~c}return xn=n,lr(),s}function tg(e,n){J=null,R.H=Ba,n===Ns||n===mr?(n=_m(),ve=3):n===Yu?(n=_m(),ve=4):ve=n===vc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kt=n,ae===null&&(He=1,Rr(e,Vt(n,e.current)))}function ng(){var e=Dt.current;return e===null?!0:(re&4194048)===re?Qt===null:(re&62914560)===re||(re&536870912)!==0?e===Qt:!1}function ig(){var e=R.H;return R.H=Ba,e===null?Ba:e}function sg(){var e=R.A;return R.A=wb,e}function jr(){He=4,ni||(re&4194048)!==re&&Dt.current!==null||(Ls=!0),(ii&134217727)===0&&(Fi&134217727)===0||Ae===null||li(Ae,re,Lt,!1)}function Vc(e,n,s){var r=ge;ge|=2;var u=ig(),c=sg();(Ae!==e||re!==n)&&(Hr=null,Hs(e,n)),n=!1;var d=He;e:do try{if(ve!==0&&ae!==null){var _=ae,y=kt;switch(ve){case 8:qc(),d=6;break e;case 3:case 2:case 9:case 6:Dt.current===null&&(n=!0);var A=ve;if(ve=0,kt=null,Bs(e,_,y,A),s&&Ls){d=0;break e}break;default:A=ve,ve=0,kt=null,Bs(e,_,y,A)}}Rb(),d=He;break}catch(x){tg(e,x)}while(!0);return n&&e.shellSuspendCounter++,bn=Hi=null,ge=r,R.H=u,R.A=c,ae===null&&(Ae=null,re=0,lr()),d}function Rb(){for(;ae!==null;)ag(ae)}function Ob(e,n){var s=ge;ge|=2;var r=ig(),u=sg();Ae!==e||re!==n?(Hr=null,zr=Nt()+500,Hs(e,n)):Ls=ma(e,n);e:do try{if(ve!==0&&ae!==null){n=ae;var c=kt;t:switch(ve){case 1:ve=0,kt=null,Bs(e,n,c,1);break;case 2:case 9:if(pm(c)){ve=0,kt=null,lg(n);break}n=function(){ve!==2&&ve!==9||Ae!==e||(ve=7),on(e)},c.then(n,n);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:pm(c)?(ve=0,kt=null,lg(n)):(ve=0,kt=null,Bs(e,n,c,7));break;case 5:var d=null;switch(ae.tag){case 26:d=ae.memoizedState;case 5:case 27:var _=ae;if(d?Yg(d):_.stateNode.complete){ve=0,kt=null;var y=_.sibling;if(y!==null)ae=y;else{var A=_.return;A!==null?(ae=A,qr(A)):ae=null}break t}}ve=0,kt=null,Bs(e,n,c,5);break;case 6:ve=0,kt=null,Bs(e,n,c,6);break;case 8:qc(),He=6;break e;default:throw Error(l(462))}}xb();break}catch(x){tg(e,x)}while(!0);return bn=Hi=null,R.H=r,R.A=u,ge=s,ae!==null?0:(Ae=null,re=0,lr(),He)}function xb(){for(;ae!==null&&!$0();)ag(ae)}function ag(e){var n=Op(e.alternate,e,xn);e.memoizedProps=e.pendingProps,n===null?qr(e):ae=n}function lg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=Tp(s,n,n.pendingProps,n.type,void 0,re);break;case 11:n=Tp(s,n,n.pendingProps,n.type.render,n.ref,re);break;case 5:ic(n);default:Mp(s,n),n=ae=sm(n,xn),n=Op(s,n,xn)}e.memoizedProps=e.pendingProps,n===null?qr(e):ae=n}function Bs(e,n,s,r){bn=Hi=null,ic(n),Rs=null,Ma=0;var u=n.return;try{if(yb(e,u,n,s,re)){He=1,Rr(e,Vt(s,e.current)),ae=null;return}}catch(c){if(u!==null)throw ae=u,c;He=1,Rr(e,Vt(s,e.current)),ae=null;return}n.flags&32768?(fe||r===1?e=!0:Ls||(re&536870912)!==0?e=!1:(ni=e=!0,(r===2||r===9||r===3||r===6)&&(r=Dt.current,r!==null&&r.tag===13&&(r.flags|=16384))),rg(n,e)):qr(n)}function qr(e){var n=e;do{if((n.flags&32768)!==0){rg(n,ni);return}e=n.return;var s=Eb(n.alternate,n,xn);if(s!==null){ae=s;return}if(n=n.sibling,n!==null){ae=n;return}ae=n=e}while(n!==null);He===0&&(He=5)}function rg(e,n){do{var s=Sb(e.alternate,e);if(s!==null){s.flags&=32767,ae=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){ae=e;return}ae=e=s}while(e!==null);He=6,ae=null}function og(e,n,s,r,u,c,d,_,y){e.cancelPendingCommit=null;do Vr();while(Qe!==0);if((ge&6)!==0)throw Error(l(327));if(n!==null){if(n===e.current)throw Error(l(177));if(c=n.lanes|n.childLanes,c|=xu,u1(e,s,c,d,_,y),e===Ae&&(ae=Ae=null,re=0),zs=n,ai=e,Mn=s,Hc=c,Bc=u,Wp=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,kb(Pl,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=R.T,R.T=null,u=z.p,z.p=2,d=ge,ge|=4;try{Tb(e,n,s)}finally{ge=d,z.p=u,R.T=r}}Qe=1,ug(),cg(),fg()}}function ug(){if(Qe===1){Qe=0;var e=ai,n=zs,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=R.T,R.T=null;var r=z.p;z.p=2;var u=ge;ge|=4;try{Gp(n,e);var c=ef,d=Kd(e.containerInfo),_=c.focusedElem,y=c.selectionRange;if(d!==_&&_&&_.ownerDocument&&Xd(_.ownerDocument.documentElement,_)){if(y!==null&&wu(_)){var A=y.start,x=y.end;if(x===void 0&&(x=A),"selectionStart"in _)_.selectionStart=A,_.selectionEnd=Math.min(x,_.value.length);else{var D=_.ownerDocument||document,N=D&&D.defaultView||window;if(N.getSelection){var O=N.getSelection(),j=_.textContent.length,F=Math.min(y.start,j),Te=y.end===void 0?F:Math.min(y.end,j);!O.extend&&F>Te&&(d=Te,Te=F,F=d);var C=Fd(_,F),S=Fd(_,Te);if(C&&S&&(O.rangeCount!==1||O.anchorNode!==C.node||O.anchorOffset!==C.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var w=D.createRange();w.setStart(C.node,C.offset),O.removeAllRanges(),F>Te?(O.addRange(w),O.extend(S.node,S.offset)):(w.setEnd(S.node,S.offset),O.addRange(w))}}}}for(D=[],O=_;O=O.parentNode;)O.nodeType===1&&D.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<D.length;_++){var M=D[_];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}eo=!!$c,ef=$c=null}finally{ge=u,z.p=r,R.T=s}}e.current=n,Qe=2}}function cg(){if(Qe===2){Qe=0;var e=ai,n=zs,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=R.T,R.T=null;var r=z.p;z.p=2;var u=ge;ge|=4;try{Hp(e,n.alternate,n)}finally{ge=u,z.p=r,R.T=s}}Qe=3}}function fg(){if(Qe===4||Qe===3){Qe=0,e1();var e=ai,n=zs,s=Mn,r=Wp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qe=5:(Qe=0,zs=ai=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(si=null),lu(s),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(da,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=R.T,u=z.p,z.p=2,R.T=null;try{for(var c=e.onRecoverableError,d=0;d<r.length;d++){var _=r[d];c(_.value,{componentStack:_.stack})}}finally{R.T=n,z.p=u}}(Mn&3)!==0&&Vr(),on(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===jc?Xa++:(Xa=0,jc=e):Xa=0,Ka(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Oa(n)))}function Vr(){return ug(),cg(),fg(),dg()}function dg(){if(Qe!==5)return!1;var e=ai,n=Hc;Hc=0;var s=lu(Mn),r=R.T,u=z.p;try{z.p=32>s?32:s,R.T=null,s=Bc,Bc=null;var c=ai,d=Mn;if(Qe=0,zs=ai=null,Mn=0,(ge&6)!==0)throw Error(l(331));var _=ge;if(ge|=4,Xp(c.current),Yp(c,c.current,d,s),ge=_,Ka(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(da,c)}catch{}return!0}finally{z.p=u,R.T=r,hg(e,n)}}function mg(e,n,s){n=Vt(s,n),n=yc(e.stateNode,n,2),e=Jn(e,n,2),e!==null&&(pa(e,2),on(e))}function be(e,n,s){if(e.tag===3)mg(e,e,s);else for(;n!==null;){if(n.tag===3){mg(n,e,s);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){e=Vt(s,e),s=pp(2),r=Jn(n,s,2),r!==null&&(gp(s,r,n,e),pa(r,2),on(r));break}}n=n.return}}function Gc(e,n,s){var r=e.pingCache;if(r===null){r=e.pingCache=new Ab;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(s)||(Lc=!0,u.add(s),e=Mb.bind(null,e,n,s),n.then(e,e))}function Mb(e,n,s){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ae===e&&(re&s)===s&&(He===4||He===3&&(re&62914560)===re&&300>Nt()-Ur?(ge&2)===0&&Hs(e,0):Uc|=s,Us===re&&(Us=0)),on(e)}function pg(e,n){n===0&&(n=ud()),e=Li(e,n),e!==null&&(pa(e,n),on(e))}function Db(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),pg(e,s)}function Ib(e,n){var s=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(n),pg(e,s)}function kb(e,n){return nu(e,n)}var Gr=null,js=null,Pc=!1,Pr=!1,Yc=!1,ri=0;function on(e){e!==js&&e.next===null&&(js===null?Gr=js=e:js=js.next=e),Pr=!0,Pc||(Pc=!0,Ub())}function Ka(e,n){if(!Yc&&Pr){Yc=!0;do for(var s=!1,r=Gr;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var d=r.suspendedLanes,_=r.pingedLanes;c=(1<<31-Ot(42|e)+1)-1,c&=u&~(d&~_),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(s=!0,vg(r,c))}else c=re,c=Xl(r,r===Ae?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ma(r,c)||(s=!0,vg(r,c));r=r.next}while(s);Yc=!1}}function Lb(){gg()}function gg(){Pr=Pc=!1;var e=0;ri!==0&&Qb()&&(e=ri);for(var n=Nt(),s=null,r=Gr;r!==null;){var u=r.next,c=_g(r,n);c===0?(r.next=null,s===null?Gr=u:s.next=u,u===null&&(js=s)):(s=r,(e!==0||(c&3)!==0)&&(Pr=!0)),r=u}Qe!==0&&Qe!==5||Ka(e),ri!==0&&(ri=0)}function _g(e,n){for(var s=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-Ot(c),_=1<<d,y=u[d];y===-1?((_&s)===0||(_&r)!==0)&&(u[d]=o1(_,n)):y<=n&&(e.expiredLanes|=_),c&=~_}if(n=Ae,s=re,s=Xl(e,e===n?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,s===0||e===n&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&iu(r),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||ma(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(r!==null&&iu(r),lu(s)){case 2:case 8:s=rd;break;case 32:s=Pl;break;case 268435456:s=od;break;default:s=Pl}return r=yg.bind(null,e),s=nu(s,r),e.callbackPriority=n,e.callbackNode=s,n}return r!==null&&r!==null&&iu(r),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Vr()&&e.callbackNode!==s)return null;var r=re;return r=Xl(e,e===Ae?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:($p(e,r,n),_g(e,Nt()),e.callbackNode!=null&&e.callbackNode===s?yg.bind(null,e):null)}function vg(e,n){if(Vr())return null;$p(e,n,!0)}function Ub(){Xb(function(){(ge&6)!==0?nu(ld,Lb):gg()})}function Qc(){if(ri===0){var e=ws;e===0&&(e=Yl,Yl<<=1,(Yl&261888)===0&&(Yl=256)),ri=e}return ri}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function Eg(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function zb(e,n,s,r,u){if(n==="submit"&&s&&s.stateNode===u){var c=bg((u[pt]||null).action),d=r.submitter;d&&(n=(n=d[pt]||null)?bg(n.formAction):d.getAttribute("formAction"),n!==null&&(c=n,d=null));var _=new nr("action","action",null,r,u);e.push({event:_,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ri!==0){var y=d?Eg(u,d):new FormData(u);hc(s,{pending:!0,data:y,method:u.method,action:c},null,y)}}else typeof c=="function"&&(_.preventDefault(),y=d?Eg(u,d):new FormData(u),hc(s,{pending:!0,data:y,method:u.method,action:c},c,y))},currentTarget:u}]})}}for(var Fc=0;Fc<Ou.length;Fc++){var Xc=Ou[Fc],Hb=Xc.toLowerCase(),Bb=Xc[0].toUpperCase()+Xc.slice(1);Kt(Hb,"on"+Bb)}Kt(Jd,"onAnimationEnd"),Kt($d,"onAnimationIteration"),Kt(em,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(tb,"onTransitionRun"),Kt(nb,"onTransitionStart"),Kt(ib,"onTransitionCancel"),Kt(tm,"onTransitionEnd"),fs("onMouseEnter",["mouseout","mouseover"]),fs("onMouseLeave",["mouseout","mouseover"]),fs("onPointerEnter",["pointerout","pointerover"]),fs("onPointerLeave",["pointerout","pointerover"]),Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Za));function Sg(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var r=e[s],u=r.event;r=r.listeners;e:{var c=void 0;if(n)for(var d=r.length-1;0<=d;d--){var _=r[d],y=_.instance,A=_.currentTarget;if(_=_.listener,y!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=A;try{c(u)}catch(x){ar(x)}u.currentTarget=null,c=y}else for(d=0;d<r.length;d++){if(_=r[d],y=_.instance,A=_.currentTarget,_=_.listener,y!==c&&u.isPropagationStopped())break e;c=_,u.currentTarget=A;try{c(u)}catch(x){ar(x)}u.currentTarget=null,c=y}}}}function le(e,n){var s=n[ru];s===void 0&&(s=n[ru]=new Set);var r=e+"__bubble";s.has(r)||(Tg(n,e,2,!1),s.add(r))}function Kc(e,n,s){var r=0;n&&(r|=4),Tg(s,e,r,n)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function Zc(e){if(!e[Yr]){e[Yr]=!0,gd.forEach(function(s){s!=="selectionchange"&&(jb.has(s)||Kc(s,!1,e),Kc(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yr]||(n[Yr]=!0,Kc("selectionchange",!1,n))}}function Tg(e,n,s,r){switch(Jg(n)){case 2:var u=mE;break;case 8:u=pE;break;default:u=hf}s=u.bind(null,n,s,e),u=void 0,!gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,s,{capture:!0,passive:u}):e.addEventListener(n,s,!0):u!==void 0?e.addEventListener(n,s,{passive:u}):e.addEventListener(n,s,!1)}function Wc(e,n,s,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var _=r.stateNode.containerInfo;if(_===u)break;if(d===4)for(d=r.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;_!==null;){if(d=os(_),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){r=c=d;continue e}_=_.parentNode}}r=r.return}Rd(function(){var A=c,x=mu(s),D=[];e:{var N=nm.get(e);if(N!==void 0){var O=nr,j=e;switch(e){case"keypress":if(er(s)===0)break e;case"keydown":case"keyup":O=I1;break;case"focusin":j="focus",O=bu;break;case"focusout":j="blur",O=bu;break;case"beforeblur":case"afterblur":O=bu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=E1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=U1;break;case Jd:case $d:case em:O=C1;break;case tm:O=H1;break;case"scroll":case"scrollend":O=v1;break;case"wheel":O=j1;break;case"copy":case"cut":case"paste":O=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Id;break;case"toggle":case"beforetoggle":O=V1}var F=(n&4)!==0,Te=!F&&(e==="scroll"||e==="scrollend"),C=F?N!==null?N+"Capture":null:N;F=[];for(var S=A,w;S!==null;){var M=S;if(w=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||w===null||C===null||(M=ya(S,C),M!=null&&F.push(Wa(S,M,w))),Te)break;S=S.return}0<F.length&&(N=new O(N,j,null,s,x),D.push({event:N,listeners:F}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&s!==du&&(j=s.relatedTarget||s.fromElement)&&(os(j)||j[rs]))break e;if((O||N)&&(N=x.window===x?x:(N=x.ownerDocument)?N.defaultView||N.parentWindow:window,O?(j=s.relatedTarget||s.toElement,O=A,j=j?os(j):null,j!==null&&(Te=f(j),F=j.tag,j!==Te||F!==5&&F!==27&&F!==6)&&(j=null)):(O=null,j=A),O!==j)){if(F=Md,M="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(F=Id,M="onPointerLeave",C="onPointerEnter",S="pointer"),Te=O==null?N:_a(O),w=j==null?N:_a(j),N=new F(M,S+"leave",O,s,x),N.target=Te,N.relatedTarget=w,M=null,os(x)===A&&(F=new F(C,S+"enter",j,s,x),F.target=w,F.relatedTarget=Te,M=F),Te=M,O&&j)t:{for(F=qb,C=O,S=j,w=0,M=C;M;M=F(M))w++;M=0;for(var P=S;P;P=F(P))M++;for(;0<w-M;)C=F(C),w--;for(;0<M-w;)S=F(S),M--;for(;w--;){if(C===S||S!==null&&C===S.alternate){F=C;break t}C=F(C),S=F(S)}F=null}else F=null;O!==null&&Cg(D,N,O,F,!1),j!==null&&Te!==null&&Cg(D,Te,j,F,!0)}}e:{if(N=A?_a(A):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var de=qd;else if(Bd(N))if(Vd)de=J1;else{de=Z1;var V=K1}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?A&&hu(A.elementType)&&(de=qd):de=W1;if(de&&(de=de(e,A))){jd(D,de,s,x);break e}V&&V(e,N,A),e==="focusout"&&A&&N.type==="number"&&A.memoizedProps.value!=null&&fu(N,"number",N.value)}switch(V=A?_a(A):window,e){case"focusin":(Bd(V)||V.contentEditable==="true")&&(_s=V,Au=A,Aa=null);break;case"focusout":Aa=Au=_s=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Zd(D,s,x);break;case"selectionchange":if(eb)break;case"keydown":case"keyup":Zd(D,s,x)}var $;if(Su)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else gs?zd(e,s)&&(oe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(kd&&s.locale!=="ko"&&(gs||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&gs&&($=Od()):(Yn=x,_u="value"in Yn?Yn.value:Yn.textContent,gs=!0)),V=Qr(A,oe),0<V.length&&(oe=new Dd(oe,e,null,s,x),D.push({event:oe,listeners:V}),$?oe.data=$:($=Hd(s),$!==null&&(oe.data=$)))),($=P1?Y1(e,s):Q1(e,s))&&(oe=Qr(A,"onBeforeInput"),0<oe.length&&(V=new Dd("onBeforeInput","beforeinput",null,s,x),D.push({event:V,listeners:oe}),V.data=$)),zb(D,e,A,s,x)}Sg(D,n)})}function Wa(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Qr(e,n){for(var s=n+"Capture",r=[];e!==null;){var u=e,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=ya(e,s),u!=null&&r.unshift(Wa(e,u,c)),u=ya(e,n),u!=null&&r.push(Wa(e,u,c))),e.tag===3)return r;e=e.return}return[]}function qb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,s,r,u){for(var c=n._reactName,d=[];s!==null&&s!==r;){var _=s,y=_.alternate,A=_.stateNode;if(_=_.tag,y!==null&&y===r)break;_!==5&&_!==26&&_!==27||A===null||(y=A,u?(A=ya(s,c),A!=null&&d.unshift(Wa(s,A,y))):u||(A=ya(s,c),A!=null&&d.push(Wa(s,A,y)))),s=s.return}d.length!==0&&e.push({event:n,listeners:d})}var Vb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(Vb,`
`).replace(Gb,"")}function Ag(e,n){return n=wg(n),wg(e)===n}function Se(e,n,s,r,u,c){switch(s){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ds(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ds(e,""+r);break;case"className":Zl(e,"class",r);break;case"tabIndex":Zl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,s,r);break;case"style":Ad(e,r,c);break;case"data":if(n!=="object"){Zl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Jl(""+r),e.setAttribute(s,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(s==="formAction"?(n!=="input"&&Se(e,n,"name",u.name,u,null),Se(e,n,"formEncType",u.formEncType,u,null),Se(e,n,"formMethod",u.formMethod,u,null),Se(e,n,"formTarget",u.formTarget,u,null)):(Se(e,n,"encType",u.encType,u,null),Se(e,n,"method",u.method,u,null),Se(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(s);break}r=Jl(""+r),e.setAttribute(s,r);break;case"onClick":r!=null&&(e.onclick=gn);break;case"onScroll":r!=null&&le("scroll",e);break;case"onScrollEnd":r!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}s=Jl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""+r):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":r===!0?e.setAttribute(s,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(s,r):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(s,r):e.removeAttribute(s);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(s):e.setAttribute(s,r);break;case"popover":le("beforetoggle",e),le("toggle",e),Kl(e,"popover",r);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=_1.get(s)||s,Kl(e,s,r))}}function Jc(e,n,s,r,u,c){switch(s){case"style":Ad(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(s=r.__html,s!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof r=="string"?ds(e,r):(typeof r=="number"||typeof r=="bigint")&&ds(e,""+r);break;case"onScroll":r!=null&&le("scroll",e);break;case"onScrollEnd":r!=null&&le("scrollend",e);break;case"onClick":r!=null&&(e.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_d.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),n=s.slice(2,u?s.length-7:void 0),c=e[pt]||null,c=c!=null?c[s]:null,typeof c=="function"&&e.removeEventListener(n,c,u),typeof r=="function")){typeof c!="function"&&c!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,r,u);break e}s in e?e[s]=r:r===!0?e.setAttribute(s,""):Kl(e,s,r)}}}function lt(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var r=!1,u=!1,c;for(c in s)if(s.hasOwnProperty(c)){var d=s[c];if(d!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Se(e,n,c,d,s,null)}}u&&Se(e,n,"srcSet",s.srcSet,s,null),r&&Se(e,n,"src",s.src,s,null);return;case"input":le("invalid",e);var _=c=d=u=null,y=null,A=null;for(r in s)if(s.hasOwnProperty(r)){var x=s[r];if(x!=null)switch(r){case"name":u=x;break;case"type":d=x;break;case"checked":y=x;break;case"defaultChecked":A=x;break;case"value":c=x;break;case"defaultValue":_=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(l(137,n));break;default:Se(e,n,r,x,s,null)}}Sd(e,c,_,y,A,d,u,!1);return;case"select":le("invalid",e),r=d=c=null;for(u in s)if(s.hasOwnProperty(u)&&(_=s[u],_!=null))switch(u){case"value":c=_;break;case"defaultValue":d=_;break;case"multiple":r=_;default:Se(e,n,u,_,s,null)}n=c,s=d,e.multiple=!!r,n!=null?hs(e,!!r,n,!1):s!=null&&hs(e,!!r,s,!0);return;case"textarea":le("invalid",e),c=u=r=null;for(d in s)if(s.hasOwnProperty(d)&&(_=s[d],_!=null))switch(d){case"value":r=_;break;case"defaultValue":u=_;break;case"children":c=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(l(91));break;default:Se(e,n,d,_,s,null)}Cd(e,r,u,c);return;case"option":for(y in s)if(s.hasOwnProperty(y)&&(r=s[y],r!=null))switch(y){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Se(e,n,y,r,s,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(r=0;r<Za.length;r++)le(Za[r],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in s)if(s.hasOwnProperty(A)&&(r=s[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,n));default:Se(e,n,A,r,s,null)}return;default:if(hu(n)){for(x in s)s.hasOwnProperty(x)&&(r=s[x],r!==void 0&&Jc(e,n,x,r,s,void 0));return}}for(_ in s)s.hasOwnProperty(_)&&(r=s[_],r!=null&&Se(e,n,_,r,s,null))}function Pb(e,n,s,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,d=null,_=null,y=null,A=null,x=null;for(O in s){var D=s[O];if(s.hasOwnProperty(O)&&D!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":y=D;default:r.hasOwnProperty(O)||Se(e,n,O,null,r,D)}}for(var N in r){var O=r[N];if(D=s[N],r.hasOwnProperty(N)&&(O!=null||D!=null))switch(N){case"type":c=O;break;case"name":u=O;break;case"checked":A=O;break;case"defaultChecked":x=O;break;case"value":d=O;break;case"defaultValue":_=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,n));break;default:O!==D&&Se(e,n,N,O,r,D)}}cu(e,d,_,y,A,x,c,u);return;case"select":O=d=_=N=null;for(c in s)if(y=s[c],s.hasOwnProperty(c)&&y!=null)switch(c){case"value":break;case"multiple":O=y;default:r.hasOwnProperty(c)||Se(e,n,c,null,r,y)}for(u in r)if(c=r[u],y=s[u],r.hasOwnProperty(u)&&(c!=null||y!=null))switch(u){case"value":N=c;break;case"defaultValue":_=c;break;case"multiple":d=c;default:c!==y&&Se(e,n,u,c,r,y)}n=_,s=d,r=O,N!=null?hs(e,!!s,N,!1):!!r!=!!s&&(n!=null?hs(e,!!s,n,!0):hs(e,!!s,s?[]:"",!1));return;case"textarea":O=N=null;for(_ in s)if(u=s[_],s.hasOwnProperty(_)&&u!=null&&!r.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Se(e,n,_,null,r,u)}for(d in r)if(u=r[d],c=s[d],r.hasOwnProperty(d)&&(u!=null||c!=null))switch(d){case"value":N=u;break;case"defaultValue":O=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==c&&Se(e,n,d,u,r,c)}Td(e,N,O);return;case"option":for(var j in s)if(N=s[j],s.hasOwnProperty(j)&&N!=null&&!r.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:Se(e,n,j,null,r,N)}for(y in r)if(N=r[y],O=s[y],r.hasOwnProperty(y)&&N!==O&&(N!=null||O!=null))switch(y){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Se(e,n,y,N,r,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in s)N=s[F],s.hasOwnProperty(F)&&N!=null&&!r.hasOwnProperty(F)&&Se(e,n,F,null,r,N);for(A in r)if(N=r[A],O=s[A],r.hasOwnProperty(A)&&N!==O&&(N!=null||O!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,n));break;default:Se(e,n,A,N,r,O)}return;default:if(hu(n)){for(var Te in s)N=s[Te],s.hasOwnProperty(Te)&&N!==void 0&&!r.hasOwnProperty(Te)&&Jc(e,n,Te,void 0,r,N);for(x in r)N=r[x],O=s[x],!r.hasOwnProperty(x)||N===O||N===void 0&&O===void 0||Jc(e,n,x,N,r,O);return}}for(var C in s)N=s[C],s.hasOwnProperty(C)&&N!=null&&!r.hasOwnProperty(C)&&Se(e,n,C,null,r,N);for(D in r)N=r[D],O=s[D],!r.hasOwnProperty(D)||N===O||N==null&&O==null||Se(e,n,D,N,r,O)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,s=performance.getEntriesByType("resource"),r=0;r<s.length;r++){var u=s[r],c=u.transferSize,d=u.initiatorType,_=u.duration;if(c&&_&&Ng(d)){for(d=0,_=u.responseEnd,r+=1;r<s.length;r++){var y=s[r],A=y.startTime;if(A>_)break;var x=y.transferSize,D=y.initiatorType;x&&Ng(D)&&(y=y.responseEnd,d+=x*(y<_?1:(_-A)/(y-A)))}if(--r,n+=8*(c+d)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $c=null,ef=null;function Fr(e){return e.nodeType===9?e:e.ownerDocument}function Rg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nf=null;function Qb(){var e=window.event;return e&&e.type==="popstate"?e===nf?!1:(nf=e,!0):(nf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,Fb=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,Xb=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(Kb)}:xg;function Kb(e){setTimeout(function(){throw e})}function oi(e){return e==="head"}function Dg(e,n){var s=n,r=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(r===0){e.removeChild(u),Ps(n);return}r--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")r++;else if(s==="html")Ja(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ja(s);for(var c=s.firstChild;c;){var d=c.nextSibling,_=c.nodeName;c[ga]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&c.rel.toLowerCase()==="stylesheet"||s.removeChild(c),c=d}}else s==="body"&&Ja(e.ownerDocument.body);s=u}while(s);Ps(n)}function Ig(e,n){var s=e;e=0;do{var r=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=r}while(s)}function sf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sf(s),ou(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Zb(e,n,s,r){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function Wb(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ft(e.nextSibling),e===null))return null;return e}function kg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ft(e.nextSibling),e===null))return null;return e}function af(e){return e.data==="$?"||e.data==="$~"}function lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jb(e,n){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||s.readyState!=="loading")n();else{var r=function(){n(),s.removeEventListener("DOMContentLoaded",r)};s.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rf=null;function Lg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(n===0)return Ft(e.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return e;n--}else s!=="/$"&&s!=="/&"||n++}e=e.previousSibling}return null}function zg(e,n,s){switch(n=Fr(s),e){case"html":if(e=n.documentElement,!e)throw Error(l(452));return e;case"head":if(e=n.head,!e)throw Error(l(453));return e;case"body":if(e=n.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ja(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ou(e)}var Xt=new Map,Hg=new Set;function Xr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Dn=z.d;z.d={f:$b,r:eE,D:tE,C:nE,L:iE,m:sE,X:lE,S:aE,M:rE};function $b(){var e=Dn.f(),n=Br();return e||n}function eE(e){var n=us(e);n!==null&&n.tag===5&&n.type==="form"?tp(n):Dn.r(e)}var qs=typeof document>"u"?null:document;function Bg(e,n,s){var r=qs;if(r&&typeof n=="string"&&n){var u=jt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),Hg.has(u)||(Hg.add(u),e={rel:e,crossOrigin:s,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),lt(n,"link",e),Ke(n),r.head.appendChild(n)))}}function tE(e){Dn.D(e),Bg("dns-prefetch",e,null)}function nE(e,n){Dn.C(e,n),Bg("preconnect",e,n)}function iE(e,n,s){Dn.L(e,n,s);var r=qs;if(r&&e&&n){var u='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+jt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+jt(s.imageSizes)+'"]')):u+='[href="'+jt(e)+'"]';var c=u;switch(n){case"style":c=Vs(e);break;case"script":c=Gs(e)}Xt.has(c)||(e=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Xt.set(c,e),r.querySelector(u)!==null||n==="style"&&r.querySelector($a(c))||n==="script"&&r.querySelector(el(c))||(n=r.createElement("link"),lt(n,"link",e),Ke(n),r.head.appendChild(n)))}}function sE(e,n){Dn.m(e,n);var s=qs;if(s&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+jt(r)+'"][href="'+jt(e)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Gs(e)}if(!Xt.has(c)&&(e=v({rel:"modulepreload",href:e},n),Xt.set(c,e),s.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(el(c)))return}r=s.createElement("link"),lt(r,"link",e),Ke(r),s.head.appendChild(r)}}}function aE(e,n,s){Dn.S(e,n,s);var r=qs;if(r&&e){var u=cs(r).hoistableStyles,c=Vs(e);n=n||"default";var d=u.get(c);if(!d){var _={loading:0,preload:null};if(d=r.querySelector($a(c)))_.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Xt.get(c))&&of(e,s);var y=d=r.createElement("link");Ke(y),lt(y,"link",e),y._p=new Promise(function(A,x){y.onload=A,y.onerror=x}),y.addEventListener("load",function(){_.loading|=1}),y.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Kr(d,n,r)}d={type:"stylesheet",instance:d,count:1,state:_},u.set(c,d)}}}function lE(e,n){Dn.X(e,n);var s=qs;if(s&&e){var r=cs(s).hoistableScripts,u=Gs(e),c=r.get(u);c||(c=s.querySelector(el(u)),c||(e=v({src:e,async:!0},n),(n=Xt.get(u))&&uf(e,n),c=s.createElement("script"),Ke(c),lt(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function rE(e,n){Dn.M(e,n);var s=qs;if(s&&e){var r=cs(s).hoistableScripts,u=Gs(e),c=r.get(u);c||(c=s.querySelector(el(u)),c||(e=v({src:e,async:!0,type:"module"},n),(n=Xt.get(u))&&uf(e,n),c=s.createElement("script"),Ke(c),lt(c,"link",e),s.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function jg(e,n,s,r){var u=(u=se.current)?Xr(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Vs(s.href),s=cs(u).hoistableStyles,r=s.get(n),r||(r={type:"style",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Vs(s.href);var c=cs(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector($a(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Xt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Xt.set(e,s),c||oE(u,e,s,d.state))),n&&r===null)throw Error(l(528,""));return d}if(n&&r!==null)throw Error(l(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Gs(s),s=cs(u).hoistableScripts,r=s.get(n),r||(r={type:"script",instance:null,count:0,state:null},s.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Vs(e){return'href="'+jt(e)+'"'}function $a(e){return'link[rel="stylesheet"]['+e+"]"}function qg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function oE(e,n,s,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),lt(n,"link",s),Ke(n),e.head.appendChild(n))}function Gs(e){return'[src="'+jt(e)+'"]'}function el(e){return"script[async]"+e}function Vg(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+jt(s.href)+'"]');if(r)return n.instance=r,Ke(r),r;var u=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ke(r),lt(r,"style",u),Kr(r,s.precedence,e),n.instance=r;case"stylesheet":u=Vs(s.href);var c=e.querySelector($a(u));if(c)return n.state.loading|=4,n.instance=c,Ke(c),c;r=qg(s),(u=Xt.get(u))&&of(r,u),c=(e.ownerDocument||e).createElement("link"),Ke(c);var d=c;return d._p=new Promise(function(_,y){d.onload=_,d.onerror=y}),lt(c,"link",r),n.state.loading|=4,Kr(c,s.precedence,e),n.instance=c;case"script":return c=Gs(s.src),(u=e.querySelector(el(c)))?(n.instance=u,Ke(u),u):(r=s,(u=Xt.get(c))&&(r=v({},s),uf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ke(u),lt(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(l(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kr(r,s.precedence,e));return n.instance}function Kr(e,n,s){for(var r=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,d=0;d<r.length;d++){var _=r[d];if(_.dataset.precedence===n)c=_;else if(c!==u)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zr=null;function Gg(e,n,s){if(Zr===null){var r=new Map,u=Zr=new Map;u.set(s,r)}else u=Zr,r=u.get(s),r||(r=new Map,u.set(s,r));if(r.has(e))return r;for(r.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var c=s[u];if(!(c[ga]||c[nt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(n)||"";d=e+d;var _=r.get(d);_?_.push(c):r.set(d,[c])}}return r}function Pg(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function uE(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cE(e,n,s,r){if(s.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Vs(r.href),c=n.querySelector($a(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wr.bind(e),n.then(e,e)),s.state.loading|=4,s.instance=c,Ke(c);return}c=n.ownerDocument||n,r=qg(r),(u=Xt.get(u))&&of(r,u),c=c.createElement("link"),Ke(c);var d=c;d._p=new Promise(function(_,y){d.onload=_,d.onerror=y}),lt(c,"link",r),s.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Wr.bind(e),n.addEventListener("load",s),n.addEventListener("error",s))}}var cf=0;function fE(e,n){return e.stylesheets&&e.count===0&&$r(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var r=setTimeout(function(){if(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&cf===0&&(cf=62500*Yb());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$r(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>cf?50:800)+n);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Wr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$r(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jr=null;function $r(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jr=new Map,n.forEach(hE,e),Jr=null,Wr.call(e))}function hE(e,n){if(!(n.state.loading&4)){var s=Jr.get(e);if(s)var r=s.get(null);else{s=new Map,Jr.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var d=u[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(s.set(d.dataset.precedence,d),r=d)}r&&s.set(null,r)}u=n.instance,d=u.getAttribute("data-precedence"),c=s.get(d)||r,c===r&&s.set(null,u),s.set(d,u),this.count++,r=Wr.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var tl={$$typeof:Re,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function dE(e,n,s,r,u,c,d,_,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=su(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.hiddenUpdates=su(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Qg(e,n,s,r,u,c,d,_,y,A,x,D){return e=new dE(e,n,s,d,y,A,x,D,_),n=1,c===!0&&(n|=24),c=Mt(3,null,null,n),e.current=c,c.stateNode=e,n=Vu(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:s,cache:n},Qu(c),e}function Fg(e){return e?(e=bs,e):bs}function Xg(e,n,s,r,u,c){u=Fg(u),r.context===null?r.context=u:r.pendingContext=u,r=Wn(n),r.payload={element:s},c=c===void 0?null:c,c!==null&&(r.callback=c),s=Jn(e,r,n),s!==null&&(Et(s,e,n),Ia(s,e,n))}function Kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function ff(e,n){Kg(e,n),(e=e.alternate)&&Kg(e,n)}function Zg(e){if(e.tag===13||e.tag===31){var n=Li(e,67108864);n!==null&&Et(n,e,67108864),ff(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=Ut();n=au(n);var s=Li(e,n);s!==null&&Et(s,e,n),ff(e,n)}}var eo=!0;function mE(e,n,s,r){var u=R.T;R.T=null;var c=z.p;try{z.p=2,hf(e,n,s,r)}finally{z.p=c,R.T=u}}function pE(e,n,s,r){var u=R.T;R.T=null;var c=z.p;try{z.p=8,hf(e,n,s,r)}finally{z.p=c,R.T=u}}function hf(e,n,s,r){if(eo){var u=df(r);if(u===null)Wc(e,n,r,to,s),$g(e,r);else if(_E(u,e,n,s,r))r.stopPropagation();else if($g(e,r),n&4&&-1<gE.indexOf(e)){for(;u!==null;){var c=us(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=xi(c.pendingLanes);if(d!==0){var _=c;for(_.pendingLanes|=2,_.entangledLanes|=2;d;){var y=1<<31-Ot(d);_.entanglements[1]|=y,d&=~y}on(c),(ge&6)===0&&(zr=Nt()+500,Ka(0))}}break;case 31:case 13:_=Li(c,2),_!==null&&Et(_,c,2),Br(),ff(c,2)}if(c=df(r),c===null&&Wc(e,n,r,to,s),c===u)break;u=c}u!==null&&r.stopPropagation()}else Wc(e,n,r,null,s)}}function df(e){return e=mu(e),mf(e)}var to=null;function mf(e){if(to=null,e=os(e),e!==null){var n=f(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=h(n),e!==null)return e;e=null}else if(s===31){if(e=m(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(t1()){case ld:return 2;case rd:return 8;case Pl:case n1:return 32;case od:return 268435456;default:return 32}default:return 32}}var pf=!1,ui=null,ci=null,fi=null,nl=new Map,il=new Map,hi=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":ci=null;break;case"mouseover":case"mouseout":fi=null;break;case"pointerover":case"pointerout":nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(n.pointerId)}}function sl(e,n,s,r,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:s,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=us(n),n!==null&&Zg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _E(e,n,s,r,u){switch(n){case"focusin":return ui=sl(ui,e,n,s,r,u),!0;case"dragenter":return ci=sl(ci,e,n,s,r,u),!0;case"mouseover":return fi=sl(fi,e,n,s,r,u),!0;case"pointerover":var c=u.pointerId;return nl.set(c,sl(nl.get(c)||null,e,n,s,r,u)),!0;case"gotpointercapture":return c=u.pointerId,il.set(c,sl(il.get(c)||null,e,n,s,r,u)),!0}return!1}function e_(e){var n=os(e.target);if(n!==null){var s=f(n);if(s!==null){if(n=s.tag,n===13){if(n=h(s),n!==null){e.blockedOn=n,md(e.priority,function(){Wg(s)});return}}else if(n===31){if(n=m(s),n!==null){e.blockedOn=n,md(e.priority,function(){Wg(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=df(e.nativeEvent);if(s===null){s=e.nativeEvent;var r=new s.constructor(s.type,s);du=r,s.target.dispatchEvent(r),du=null}else return n=us(s),n!==null&&Zg(n),e.blockedOn=s,!1;n.shift()}return!0}function t_(e,n,s){no(e)&&s.delete(n)}function yE(){pf=!1,ui!==null&&no(ui)&&(ui=null),ci!==null&&no(ci)&&(ci=null),fi!==null&&no(fi)&&(fi=null),nl.forEach(t_),il.forEach(t_)}function io(e,n){e.blockedOn===n&&(e.blockedOn=null,pf||(pf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,yE)))}var so=null;function n_(e){so!==e&&(so=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){so===e&&(so=null);for(var n=0;n<e.length;n+=3){var s=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(mf(r||s)===null)continue;break}var c=us(s);c!==null&&(e.splice(n,3),n-=3,hc(c,{pending:!0,data:u,method:s.method,action:r},r,u))}}))}function Ps(e){function n(y){return io(y,e)}ui!==null&&io(ui,e),ci!==null&&io(ci,e),fi!==null&&io(fi,e),nl.forEach(n),il.forEach(n);for(var s=0;s<hi.length;s++){var r=hi[s];r.blockedOn===e&&(r.blockedOn=null)}for(;0<hi.length&&(s=hi[0],s.blockedOn===null);)e_(s),s.blockedOn===null&&hi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(r=0;r<s.length;r+=3){var u=s[r],c=s[r+1],d=u[pt]||null;if(typeof c=="function")d||n_(s);else if(d){var _=null;if(c&&c.hasAttribute("formAction")){if(u=c,d=c[pt]||null)_=d.formAction;else if(mf(u)!==null)continue}else _=d.action;typeof _=="function"?s[r+1]=_:(s.splice(r,3),r-=3),n_(s)}}}function i_(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return u=d})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(s,20)}function s(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gf(e){this._internalRoot=e}ao.prototype.render=gf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));var s=n.current,r=Ut();Xg(s,r,e,n,null,null)},ao.prototype.unmount=gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xg(e.current,2,null,e,null,null),Br(),n[rs]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var n=dd();e={blockedOn:null,target:e,priority:n};for(var s=0;s<hi.length&&n!==0&&n<hi[s].priority;s++);hi.splice(s,0,e),s===0&&e_(e)}};var s_=t.version;if(s_!=="19.2.3")throw Error(l(527,s_,"19.2.3"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(n),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var vE={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{da=lo.inject(vE),Rt=lo}catch{}}return ll.createRoot=function(e,n){if(!o(e))throw Error(l(299));var s=!1,r="",u=fp,c=hp,d=dp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Qg(e,1,!1,null,null,s,r,null,u,c,d,i_),e[rs]=n.current,Zc(e),new gf(n)},ll.hydrateRoot=function(e,n,s){if(!o(e))throw Error(l(299));var r=!1,u="",c=fp,d=hp,_=dp,y=null;return s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(c=s.onUncaughtError),s.onCaughtError!==void 0&&(d=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.formState!==void 0&&(y=s.formState)),n=Qg(e,1,!0,n,s??null,r,u,y,c,d,_,i_),n.context=Fg(null),s=n.current,r=Ut(),r=au(r),u=Wn(r),u.callback=null,Jn(s,u,r),s=r,n.current.lanes=s,pa(n,s),on(n),e[rs]=n.current,Zc(e),new ao(n)},ll.version="19.2.3",ll}var m_;function xE(){if(m_)return vf.exports;m_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),vf.exports=OE(),vf.exports}var ME=xE();const DE=xy(ME);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,l)=>l?l.toUpperCase():i.toLowerCase()),p_=a=>{const t=kE(a);return t.charAt(0).toUpperCase()+t.slice(1)},My=(...a)=>a.filter((t,i,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===i).join(" ").trim(),LE=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Ne.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:o="",children:f,iconNode:h,...m},g)=>Ne.createElement("svg",{ref:g,...UE,width:t,height:t,stroke:a,strokeWidth:l?Number(i)*24/Number(t):i,className:My("lucide",o),...!f&&!LE(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,E])=>Ne.createElement(p,E)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(a,t)=>{const i=Ne.forwardRef(({className:l,...o},f)=>Ne.createElement(zE,{ref:f,iconNode:t,className:My(`lucide-${IE(p_(a))}`,`lucide-${a}`,l),...o}));return i.displayName=p_(a),i};/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],BE=fn("circle-alert",HE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qE=fn("eye-off",jE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],GE=fn("ghost",VE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],YE=fn("log-out",PE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],FE=fn("refresh-cw",QE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}],["path",{d:"m9 17-5-5 5-5",key:"nvlc11"}]],Tf=fn("reply",XE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],ZE=fn("send",KE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],JE=fn("sparkles",WE);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],eS=fn("user",$E);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nS=fn("x",tS),iS=()=>{};var g_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(a,t){if(!a)throw sa(t)},sa=function(a){return new Error("Firebase Database ("+Dy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&l+1<a.length&&(a.charCodeAt(l+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++l)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},sS=function(a){const t=[];let i=0,l=0;for(;i<a.length;){const o=a[i++];if(o<128)t[l++]=String.fromCharCode(o);else if(o>191&&o<224){const f=a[i++];t[l++]=String.fromCharCode((o&31)<<6|f&63)}else if(o>239&&o<365){const f=a[i++],h=a[i++],m=a[i++],g=((o&7)<<18|(f&63)<<12|(h&63)<<6|m&63)-65536;t[l++]=String.fromCharCode(55296+(g>>10)),t[l++]=String.fromCharCode(56320+(g&1023))}else{const f=a[i++],h=a[i++];t[l++]=String.fromCharCode((o&15)<<12|(f&63)<<6|h&63)}}return t.join("")},lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,t){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let o=0;o<a.length;o+=3){const f=a[o],h=o+1<a.length,m=h?a[o+1]:0,g=o+2<a.length,p=g?a[o+2]:0,E=f>>2,v=(f&3)<<4|m>>4;let b=(m&15)<<2|p>>6,L=p&63;g||(L=64,h||(b=64)),l.push(i[E],i[v],i[b],i[L])}return l.join("")},encodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(a):this.encodeByteArray(Iy(a),t)},decodeString(a,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(a):sS(this.decodeStringToByteArray(a,t))},decodeStringToByteArray(a,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let o=0;o<a.length;){const f=i[a.charAt(o++)],m=o<a.length?i[a.charAt(o)]:0;++o;const p=o<a.length?i[a.charAt(o)]:64;++o;const v=o<a.length?i[a.charAt(o)]:64;if(++o,f==null||m==null||p==null||v==null)throw new aS;const b=f<<2|m>>4;if(l.push(b),p!==64){const L=m<<4&240|p>>2;if(l.push(L),v!==64){const H=p<<6&192|v;l.push(H)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class aS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(a){const t=Iy(a);return lh.encodeByteArray(t,!0)},go=function(a){return ky(a).replace(/\./g,"")},_o=function(a){try{return lh.decodeString(a,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(a){return Ly(void 0,a)}function Ly(a,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!rS(i)||(a[i]=Ly(a[i],t[i]));return a}function rS(a){return a!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=()=>oS().__FIREBASE_DEFAULTS__,cS=()=>{if(typeof process>"u"||typeof g_>"u")return;const a=g_.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},fS=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=a&&_o(a[1]);return t&&JSON.parse(t)},rh=()=>{try{return iS()||uS()||cS()||fS()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},Uy=a=>{var t,i;return(i=(t=rh())==null?void 0:t.emulatorHosts)==null?void 0:i[a]},hS=a=>{const t=Uy(a);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const l=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),l]:[t.substring(0,i),l]},zy=()=>{var a;return(a=rh())==null?void 0:a.config},Hy=a=>{var t;return(t=rh())==null?void 0:t[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,l)=>{i?this.reject(i):this.resolve(l),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,l))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function By(a){return(await fetch(a,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(a,t){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},l=t||"demo-project",o=a.iat||0,f=a.sub||a.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${l}`,aud:l,iat:o,exp:o+3600,auth_time:o,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}},...a};return[go(JSON.stringify(i)),go(JSON.stringify(h)),""].join(".")}const hl={};function mS(){const a={prod:[],emulator:[]};for(const t of Object.keys(hl))hl[t]?a.emulator.push(t):a.prod.push(t);return a}function pS(a){let t=document.getElementById(a),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",a),i=!0),{created:i,element:t}}let __=!1;function jy(a,t){if(typeof window>"u"||typeof document>"u"||!aa(window.location.host)||hl[a]===t||hl[a]||__)return;hl[a]=t;function i(b){return`__firebase__banner__${b}`}const l="__firebase__banner",f=mS().prod.length>0;function h(){const b=document.getElementById(l);b&&b.remove()}function m(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function g(b,L){b.setAttribute("width","24"),b.setAttribute("id",L),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function p(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{__=!0,h()},b}function E(b,L){b.setAttribute("id",L),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function v(){const b=pS(l),L=i("text"),H=document.getElementById(L)||document.createElement("span"),Q=i("learnmore"),he=document.getElementById(Q)||document.createElement("a"),pe=i("preprendIcon"),Me=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const Re=b.element;m(Re),E(he,Q);const Xe=p();g(Me,pe),Re.append(Me,H,he,Xe),document.body.appendChild(Re)}f?(H.innerText="Preview backend disconnected.",Me.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Me.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function gS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _S(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function qy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const a=dt();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function vS(){return Dy.NODE_ADMIN===!0}function bS(){try{return typeof indexedDB=="object"}catch{return!1}}function ES(){return new Promise((a,t)=>{try{let i=!0;const l="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(l);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(l),a(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var f;t(((f=o.error)==null?void 0:f.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class Ri extends Error{constructor(t,i,l){super(i),this.code=t,this.customData=l,this.name=SS,Object.setPrototypeOf(this,Ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(t,i,l){this.service=t,this.serviceName=i,this.errors=l}create(t,...i){const l=i[0]||{},o=`${this.service}/${t}`,f=this.errors[t],h=f?TS(f,l):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Ri(o,m,l)}}function TS(a,t){return a.replace(CS,(i,l)=>{const o=t[l];return o!=null?String(o):`<${l}?>`})}const CS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(a){return JSON.parse(a)}function $e(a){return JSON.stringify(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=function(a){let t={},i={},l={},o="";try{const f=a.split(".");t=Sl(_o(f[0])||""),i=Sl(_o(f[1])||""),o=f[2],l=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:l,signature:o}},wS=function(a){const t=Vy(a),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},AS=function(a){const t=Vy(a).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(a,t){return Object.prototype.hasOwnProperty.call(a,t)}function $s(a,t){if(Object.prototype.hasOwnProperty.call(a,t))return a[t]}function Hf(a){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t))return!1;return!0}function yo(a,t,i){const l={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(l[o]=t.call(i,a[o],o,a));return l}function $i(a,t){if(a===t)return!0;const i=Object.keys(a),l=Object.keys(t);for(const o of i){if(!l.includes(o))return!1;const f=a[o],h=t[o];if(y_(f)&&y_(h)){if(!$i(f,h))return!1}else if(f!==h)return!1}for(const o of l)if(!i.includes(o))return!1;return!0}function y_(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(a){const t=[];for(const[i,l]of Object.entries(a))Array.isArray(l)?l.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(l));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const l=this.W_;if(typeof t=="string")for(let v=0;v<16;v++)l[v]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let v=0;v<16;v++)l[v]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let v=16;v<80;v++){const b=l[v-3]^l[v-8]^l[v-14]^l[v-16];l[v]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],f=this.chain_[1],h=this.chain_[2],m=this.chain_[3],g=this.chain_[4],p,E;for(let v=0;v<80;v++){v<40?v<20?(p=m^f&(h^m),E=1518500249):(p=f^h^m,E=1859775393):v<60?(p=f&h|m&(f|h),E=2400959708):(p=f^h^m,E=3395469782);const b=(o<<5|o>>>27)+p+g+E+l[v]&4294967295;g=m,m=h,h=(f<<30|f>>>2)&4294967295,f=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+f&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const l=i-this.blockSize;let o=0;const f=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=l;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(f[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(f),h=0;break}}else for(;o<i;)if(f[h]=t[o],++h,++o,h===this.blockSize){this.compress_(f),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let l=0;for(let o=0;o<5;o++)for(let f=24;f>=0;f-=8)t[l]=this.chain_[o]>>f&255,++l;return t}}function RS(a,t){const i=new OS(a,t);return i.subscribe.bind(i)}class OS{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(l=>{this.error(l)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,l){let o;if(t===void 0&&i===void 0&&l===void 0)throw new Error("Missing Observer.");xS(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:l},o.next===void 0&&(o.next=Cf),o.error===void 0&&(o.error=Cf),o.complete===void 0&&(o.complete=Cf);const f=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),f}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(l){typeof console<"u"&&console.error&&console.error(l)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xS(a,t){if(typeof a!="object"||a===null)return!1;for(const i of t)if(i in a&&typeof a[i]=="function")return!0;return!1}function Cf(){}function uh(a,t){return`${a} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=function(a){const t=[];let i=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);if(o>=55296&&o<=56319){const f=o-55296;l++,U(l<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(l)-56320;o=65536+(f<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Bo=function(a){let t=0;for(let i=0;i<a.length;i++){const l=a.charCodeAt(i);l<128?t++:l<2048?t+=2:l>=55296&&l<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(a){return a&&a._delegate?a._delegate:a}class es{constructor(t,i,l){this.name=t,this.instanceFactory=i,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const l=new Ho;if(this.instancesDeferred.set(i,l),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&l.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(t==null?void 0:t.optional)??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(l)return null;throw o}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kS(t))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[i,l]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const f=this.getOrInitializeService({instanceIdentifier:o});l.resolve(f)}catch{}}}}clearInstance(t=Xi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xi){return this.instances.has(t)}getOptions(t=Xi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,l=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:l,options:i});for(const[f,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(f);l===m&&h.resolve(o)}return o}onInit(t,i){const l=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(l)??new Set;o.add(t),this.onInitCallbacks.set(l,o);const f=this.instances.get(l);return f&&t(f,l),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const l=this.onInitCallbacks.get(i);if(l)for(const o of l)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let l=this.instances.get(t);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:IS(t),options:i}),this.instances.set(t,l),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(l,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,l)}catch{}return l||null}normalizeInstanceIdentifier(t=Xi){return this.component?this.component.multipleInstances?t:Xi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IS(a){return a===Xi?void 0:a}function kS(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new DS(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ce||(Ce={}));const US={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},zS=Ce.INFO,HS={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},BS=(a,t,...i)=>{if(t<a.logLevel)return;const l=new Date().toISOString(),o=HS[t];if(o)console[o](`[${l}]  ${a.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ch{constructor(t){this.name=t,this._logLevel=zS,this._logHandler=BS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?US[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...t),this._logHandler(this,Ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...t),this._logHandler(this,Ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...t),this._logHandler(this,Ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...t),this._logHandler(this,Ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...t),this._logHandler(this,Ce.ERROR,...t)}}const jS=(a,t)=>t.some(i=>a instanceof i);let v_,b_;function qS(){return v_||(v_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VS(){return b_||(b_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gy=new WeakMap,Bf=new WeakMap,Py=new WeakMap,wf=new WeakMap,fh=new WeakMap;function GS(a){const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("success",f),a.removeEventListener("error",h)},f=()=>{i(vi(a.result)),o()},h=()=>{l(a.error),o()};a.addEventListener("success",f),a.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Gy.set(i,a)}).catch(()=>{}),fh.set(t,a),t}function PS(a){if(Bf.has(a))return;const t=new Promise((i,l)=>{const o=()=>{a.removeEventListener("complete",f),a.removeEventListener("error",h),a.removeEventListener("abort",h)},f=()=>{i(),o()},h=()=>{l(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",f),a.addEventListener("error",h),a.addEventListener("abort",h)});Bf.set(a,t)}let jf={get(a,t,i){if(a instanceof IDBTransaction){if(t==="done")return Bf.get(a);if(t==="objectStoreNames")return a.objectStoreNames||Py.get(a);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return vi(a[t])},set(a,t,i){return a[t]=i,!0},has(a,t){return a instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in a}};function YS(a){jf=a(jf)}function QS(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const l=a.call(Af(this),t,...i);return Py.set(l,t.sort?t.sort():[t]),vi(l)}:VS().includes(a)?function(...t){return a.apply(Af(this),t),vi(Gy.get(this))}:function(...t){return vi(a.apply(Af(this),t))}}function FS(a){return typeof a=="function"?QS(a):(a instanceof IDBTransaction&&PS(a),jS(a,qS())?new Proxy(a,jf):a)}function vi(a){if(a instanceof IDBRequest)return GS(a);if(wf.has(a))return wf.get(a);const t=FS(a);return t!==a&&(wf.set(a,t),fh.set(t,a)),t}const Af=a=>fh.get(a);function XS(a,t,{blocked:i,upgrade:l,blocking:o,terminated:f}={}){const h=indexedDB.open(a,t),m=vi(h);return l&&h.addEventListener("upgradeneeded",g=>{l(vi(h.result),g.oldVersion,g.newVersion,vi(h.transaction),g)}),i&&h.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),m.then(g=>{f&&g.addEventListener("close",()=>f()),o&&g.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}const KS=["get","getKey","getAll","getAllKeys","count"],ZS=["put","add","delete","clear"],Nf=new Map;function E_(a,t){if(!(a instanceof IDBDatabase&&!(t in a)&&typeof t=="string"))return;if(Nf.get(t))return Nf.get(t);const i=t.replace(/FromIndex$/,""),l=t!==i,o=ZS.includes(i);if(!(i in(l?IDBIndex:IDBObjectStore).prototype)||!(o||KS.includes(i)))return;const f=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let p=g.store;return l&&(p=p.index(m.shift())),(await Promise.all([p[i](...m),o&&g.done]))[0]};return Nf.set(t,f),f}YS(a=>({...a,get:(t,i,l)=>E_(t,i)||a.get(t,i,l),has:(t,i)=>!!E_(t,i)||a.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(JS(i)){const l=i.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(i=>i).join(" ")}}function JS(a){const t=a.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qf="@firebase/app",S_="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new ch("@firebase/app"),$S="@firebase/app-compat",eT="@firebase/analytics-compat",tT="@firebase/analytics",nT="@firebase/app-check-compat",iT="@firebase/app-check",sT="@firebase/auth",aT="@firebase/auth-compat",lT="@firebase/database",rT="@firebase/data-connect",oT="@firebase/database-compat",uT="@firebase/functions",cT="@firebase/functions-compat",fT="@firebase/installations",hT="@firebase/installations-compat",dT="@firebase/messaging",mT="@firebase/messaging-compat",pT="@firebase/performance",gT="@firebase/performance-compat",_T="@firebase/remote-config",yT="@firebase/remote-config-compat",vT="@firebase/storage",bT="@firebase/storage-compat",ET="@firebase/firestore",ST="@firebase/ai",TT="@firebase/firestore-compat",CT="firebase",wT="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="[DEFAULT]",AT={[qf]:"fire-core",[$S]:"fire-core-compat",[tT]:"fire-analytics",[eT]:"fire-analytics-compat",[iT]:"fire-app-check",[nT]:"fire-app-check-compat",[sT]:"fire-auth",[aT]:"fire-auth-compat",[lT]:"fire-rtdb",[rT]:"fire-data-connect",[oT]:"fire-rtdb-compat",[uT]:"fire-fn",[cT]:"fire-fn-compat",[fT]:"fire-iid",[hT]:"fire-iid-compat",[dT]:"fire-fcm",[mT]:"fire-fcm-compat",[pT]:"fire-perf",[gT]:"fire-perf-compat",[_T]:"fire-rc",[yT]:"fire-rc-compat",[vT]:"fire-gcs",[bT]:"fire-gcs-compat",[ET]:"fire-fst",[TT]:"fire-fst-compat",[ST]:"fire-vertex","fire-js":"fire-js",[CT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,NT=new Map,Gf=new Map;function T_(a,t){try{a.container.addComponent(t)}catch(i){zn.debug(`Component ${t.name} failed to register with FirebaseApp ${a.name}`,i)}}function ea(a){const t=a.name;if(Gf.has(t))return zn.debug(`There were multiple attempts to register component ${t}.`),!1;Gf.set(t,a);for(const i of Tl.values())T_(i,a);for(const i of NT.values())T_(i,a);return!0}function hh(a,t){const i=a.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),a.container.getProvider(t)}function Jt(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new Il("app","Firebase",RT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,i,l){this._isDeleted=!1,this._options={...t},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=wT;function Yy(a,t={}){let i=a;typeof t!="object"&&(t={name:t});const l={name:Vf,automaticDataCollectionEnabled:!0,...t},o=l.name;if(typeof o!="string"||!o)throw bi.create("bad-app-name",{appName:String(o)});if(i||(i=zy()),!i)throw bi.create("no-options");const f=Tl.get(o);if(f){if($i(i,f.options)&&$i(l,f.config))return f;throw bi.create("duplicate-app",{appName:o})}const h=new LS(o);for(const g of Gf.values())h.addComponent(g);const m=new OT(i,l,h);return Tl.set(o,m),m}function dh(a=Vf){const t=Tl.get(a);if(!t&&a===Vf&&zy())return Yy();if(!t)throw bi.create("no-app",{appName:a});return t}function xT(){return Array.from(Tl.values())}function Ei(a,t,i){let l=AT[a]??a;i&&(l+=`-${i}`);const o=l.match(/\s|\//),f=t.match(/\s|\//);if(o||f){const h=[`Unable to register library "${l}" with version "${t}":`];o&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),o&&f&&h.push("and"),f&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zn.warn(h.join(" "));return}ea(new es(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="firebase-heartbeat-database",DT=1,Cl="firebase-heartbeat-store";let Rf=null;function Qy(){return Rf||(Rf=XS(MT,DT,{upgrade:(a,t)=>{switch(t){case 0:try{a.createObjectStore(Cl)}catch(i){console.warn(i)}}}}).catch(a=>{throw bi.create("idb-open",{originalErrorMessage:a.message})})),Rf}async function IT(a){try{const i=(await Qy()).transaction(Cl),l=await i.objectStore(Cl).get(Fy(a));return await i.done,l}catch(t){if(t instanceof Ri)zn.warn(t.message);else{const i=bi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zn.warn(i.message)}}}async function C_(a,t){try{const l=(await Qy()).transaction(Cl,"readwrite");await l.objectStore(Cl).put(t,Fy(a)),await l.done}catch(i){if(i instanceof Ri)zn.warn(i.message);else{const l=bi.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});zn.warn(l.message)}}}function Fy(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1024,LT=30;class UT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new HT(i),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=w_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(h=>h.date===f))return;if(this._heartbeatsCache.heartbeats.push({date:f,agent:o}),this._heartbeatsCache.heartbeats.length>LT){const h=BT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(l){zn.warn(l)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=w_(),{heartbeatsToSend:l,unsentEntries:o}=zT(this._heartbeatsCache.heartbeats),f=go(JSON.stringify({version:2,heartbeats:l}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(i){return zn.warn(i),""}}}function w_(){return new Date().toISOString().substring(0,10)}function zT(a,t=kT){const i=[];let l=a.slice();for(const o of a){const f=i.find(h=>h.agent===o.agent);if(f){if(f.dates.push(o.date),A_(i)>t){f.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),A_(i)>t){i.pop();break}l=l.slice(1)}return{heartbeatsToSend:i,unsentEntries:l}}class HT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bS()?ES().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await IT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const l=await this.read();return C_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const l=await this.read();return C_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function A_(a){return go(JSON.stringify({version:2,heartbeats:a})).length}function BT(a){if(a.length===0)return-1;let t=0,i=a[0].date;for(let l=1;l<a.length;l++)a[l].date<i&&(i=a[l].date,t=l);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(a){ea(new es("platform-logger",t=>new WS(t),"PRIVATE")),ea(new es("heartbeat",t=>new UT(t),"PRIVATE")),Ei(qf,S_,a),Ei(qf,S_,"esm2020"),Ei("fire-js","")}jT("");var qT="firebase",VT="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei(qT,VT,"app");function Xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GT=Xy,Ky=new Il("auth","Firebase",Xy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new ch("@firebase/auth");function PT(a,...t){vo.logLevel<=Ce.WARN&&vo.warn(`Auth (${ra}): ${a}`,...t)}function co(a,...t){vo.logLevel<=Ce.ERROR&&vo.error(`Auth (${ra}): ${a}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(a,...t){throw mh(a,...t)}function un(a,...t){return mh(a,...t)}function Zy(a,t,i){const l={...GT(),[t]:i};return new Il("auth","Firebase",l).create(t,{appName:a.name})}function Si(a){return Zy(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(a,...t){if(typeof a!="string"){const i=t[0],l=[...t.slice(1)];return l[0]&&(l[0].appName=a.name),a._errorFactory.create(i,...l)}return Ky.create(a,...t)}function K(a,t,...i){if(!a)throw mh(t,...i)}function In(a){const t="INTERNAL ASSERTION FAILED: "+a;throw co(t),new Error(t)}function Bn(a,t){a||In(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.href)||""}function YT(){return N_()==="http:"||N_()==="https:"}function N_(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YT()||_S()||"connection"in navigator)?navigator.onLine:!0}function FT(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,i){this.shortDelay=t,this.longDelay=i,Bn(i>t,"Short delay should be less than long delay!"),this.isMobile=oh()||qy()}get(){return QT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(a,t){Bn(a.emulator,"Emulator should always be set here");const{url:i}=a.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static initialize(t,i,l){this.fetchImpl=t,i&&(this.headersImpl=i),l&&(this.responseImpl=l)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZT=new kl(3e4,6e4);function jo(a,t){return a.tenantId&&!t.tenantId?{...t,tenantId:a.tenantId}:t}async function oa(a,t,i,l,o={}){return Jy(a,o,async()=>{let f={},h={};l&&(t==="GET"?h=l:f={body:JSON.stringify(l)});const m=la({key:a.config.apiKey,...h}).slice(1),g=await a._getAdditionalHeaders();g["Content-Type"]="application/json",a.languageCode&&(g["X-Firebase-Locale"]=a.languageCode);const p={method:t,headers:g,...f};return gS()||(p.referrerPolicy="no-referrer"),a.emulatorConfig&&aa(a.emulatorConfig.host)&&(p.credentials="include"),Wy.fetch()(await ev(a,a.config.apiHost,i,m),p)})}async function Jy(a,t,i){a._canInitEmulator=!1;const l={...XT,...t};try{const o=new WT(a),f=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await f.json();if("needConfirmation"in h)throw ro(a,"account-exists-with-different-credential",h);if(f.ok&&!("errorMessage"in h))return h;{const m=f.ok?h.errorMessage:h.error.message,[g,p]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(a,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw ro(a,"email-already-in-use",h);if(g==="USER_DISABLED")throw ro(a,"user-disabled",h);const E=l[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Zy(a,E,p);Hn(a,E)}}catch(o){if(o instanceof Ri)throw o;Hn(a,"network-request-failed",{message:String(o)})}}async function $y(a,t,i,l,o={}){const f=await oa(a,t,i,l,o);return"mfaPendingCredential"in f&&Hn(a,"multi-factor-auth-required",{_serverResponse:f}),f}async function ev(a,t,i,l){const o=`${t}${i}?${l}`,f=a,h=f.config.emulator?ph(a.config,o):`${a.config.apiScheme}://${o}`;return KT.includes(i)&&(await f._persistenceManagerAvailable,f._getPersistenceType()==="COOKIE")?f._getPersistence()._getFinalTarget(h).toString():h}class WT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,l)=>{this.timer=setTimeout(()=>l(un(this.auth,"network-request-failed")),ZT.get())})}}function ro(a,t,i){const l={appName:a.name};i.email&&(l.email=i.email),i.phoneNumber&&(l.phoneNumber=i.phoneNumber);const o=un(a,t,l);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(a,t){return oa(a,"POST","/v1/accounts:delete",t)}async function bo(a,t){return oa(a,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(a){if(a)try{const t=new Date(Number(a));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function $T(a,t=!1){const i=mt(a),l=await i.getIdToken(t),o=gh(l);K(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const f=typeof o.firebase=="object"?o.firebase:void 0,h=f==null?void 0:f.sign_in_provider;return{claims:o,token:l,authTime:dl(Of(o.auth_time)),issuedAtTime:dl(Of(o.iat)),expirationTime:dl(Of(o.exp)),signInProvider:h||null,signInSecondFactor:(f==null?void 0:f.sign_in_second_factor)||null}}function Of(a){return Number(a)*1e3}function gh(a){const[t,i,l]=a.split(".");if(t===void 0||i===void 0||l===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const o=_o(i);return o?JSON.parse(o):(co("Failed to decode base64 JWT payload"),null)}catch(o){return co("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function R_(a){const t=gh(a);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(a,t,i=!1){if(i)return t;try{return await t}catch(l){throw l instanceof Ri&&eC(l)&&a.auth.currentUser===a&&await a.auth.signOut(),l}}function eC({code:a}){return a==="auth/user-disabled"||a==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const l=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=dl(this.lastLoginAt),this.creationTime=dl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(a){var v;const t=a.auth,i=await a.getIdToken(),l=await wl(a,bo(t,{idToken:i}));K(l==null?void 0:l.users.length,t,"internal-error");const o=l.users[0];a._notifyReloadListener(o);const f=(v=o.providerUserInfo)!=null&&v.length?tv(o.providerUserInfo):[],h=iC(a.providerData,f),m=a.isAnonymous,g=!(a.email&&o.passwordHash)&&!(h!=null&&h.length),p=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Yf(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(a,E)}async function nC(a){const t=mt(a);await Eo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function iC(a,t){return[...a.filter(l=>!t.some(o=>o.providerId===l.providerId)),...t]}function tv(a){return a.map(({providerId:t,...i})=>({providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(a,t){const i=await Jy(a,{},async()=>{const l=la({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:f}=a.config,h=await ev(a,o,"/v1/token",`key=${f}`),m=await a._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:l};return a.emulatorConfig&&aa(a.emulatorConfig.host)&&(g.credentials="include"),Wy.fetch()(h,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function aC(a,t){return oa(a,"POST","/v2/accounts:revokeToken",jo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):R_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){K(t.length!==0,"internal-error");const i=R_(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:l,refreshToken:o,expiresIn:f}=await sC(t,i);this.updateTokensAndExpiration(l,o,Number(f))}updateTokensAndExpiration(t,i,l){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+l*1e3}static fromJSON(t,i){const{refreshToken:l,accessToken:o,expirationTime:f}=i,h=new Xs;return l&&(K(typeof l=="string","internal-error",{appName:t}),h.refreshToken=l),o&&(K(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),f&&(K(typeof f=="number","internal-error",{appName:t}),h.expirationTime=f),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(a,t){K(typeof a=="string"||typeof a>"u","internal-error",{appName:t})}class en{constructor({uid:t,auth:i,stsTokenManager:l,...o}){this.providerId="firebase",this.proactiveRefresh=new tC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const i=await wl(this,this.stsTokenManager.getToken(this.auth,t));return K(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return $T(this,t)}reload(){return nC(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>({...i})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new en({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let l=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),l=!0),i&&await Eo(this),await this.auth._persistUserIfCurrent(this),l&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Si(this.auth));const t=await this.getIdToken();return await wl(this,JT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){const l=i.displayName??void 0,o=i.email??void 0,f=i.phoneNumber??void 0,h=i.photoURL??void 0,m=i.tenantId??void 0,g=i._redirectEventId??void 0,p=i.createdAt??void 0,E=i.lastLoginAt??void 0,{uid:v,emailVerified:b,isAnonymous:L,providerData:H,stsTokenManager:Q}=i;K(v&&Q,t,"internal-error");const he=Xs.fromJSON(this.name,Q);K(typeof v=="string",t,"internal-error"),mi(l,t.name),mi(o,t.name),K(typeof b=="boolean",t,"internal-error"),K(typeof L=="boolean",t,"internal-error"),mi(f,t.name),mi(h,t.name),mi(m,t.name),mi(g,t.name),mi(p,t.name),mi(E,t.name);const pe=new en({uid:v,auth:t,email:o,emailVerified:b,displayName:l,isAnonymous:L,photoURL:h,phoneNumber:f,tenantId:m,stsTokenManager:he,createdAt:p,lastLoginAt:E});return H&&Array.isArray(H)&&(pe.providerData=H.map(Me=>({...Me}))),g&&(pe._redirectEventId=g),pe}static async _fromIdTokenResponse(t,i,l=!1){const o=new Xs;o.updateFromServerResponse(i);const f=new en({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:l});return await Eo(f),f}static async _fromGetAccountInfoResponse(t,i,l){const o=i.users[0];K(o.localId!==void 0,"internal-error");const f=o.providerUserInfo!==void 0?tv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(f!=null&&f.length),m=new Xs;m.updateFromIdToken(l);const g=new en({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Yf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(f!=null&&f.length)};return Object.assign(g,p),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Map;function kn(a){Bn(a instanceof Function,"Expected a class definition");let t=O_.get(a);return t?(Bn(t instanceof a,"Instance stored in cache mismatched with class"),t):(t=new a,O_.set(a,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}nv.type="NONE";const x_=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(a,t,i){return`firebase:${a}:${t}:${i}`}class Ks{constructor(t,i,l){this.persistence=t,this.auth=i,this.userKey=l;const{config:o,name:f}=this.auth;this.fullUserKey=fo(this.userKey,o.apiKey,f),this.fullPersistenceKey=fo("persistence",o.apiKey,f),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await bo(this.auth,{idToken:t}).catch(()=>{});return i?en._fromGetAccountInfoResponse(this.auth,i,t):null}return en._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,l="authUser"){if(!i.length)return new Ks(kn(x_),t,l);const o=(await Promise.all(i.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let f=o[0]||kn(x_);const h=fo(l,t.config.apiKey,t.name);let m=null;for(const p of i)try{const E=await p._get(h);if(E){let v;if(typeof E=="string"){const b=await bo(t,{idToken:E}).catch(()=>{});if(!b)break;v=await en._fromGetAccountInfoResponse(t,b,E)}else v=en._fromJSON(t,E);p!==f&&(m=v),f=p;break}}catch{}const g=o.filter(p=>p._shouldAllowMigration);return!f._shouldAllowMigration||!g.length?new Ks(f,t,l):(f=g[0],m&&await f._set(h,m.toJSON()),await Promise.all(i.map(async p=>{if(p!==f)try{await p._remove(h)}catch{}})),new Ks(f,t,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(a){const t=a.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(iv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ov(t))return"Blackberry";if(uv(t))return"Webos";if(sv(t))return"Safari";if((t.includes("chrome/")||av(t))&&!t.includes("edge/"))return"Chrome";if(rv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,l=a.match(i);if((l==null?void 0:l.length)===2)return l[1]}return"Other"}function iv(a=dt()){return/firefox\//i.test(a)}function sv(a=dt()){const t=a.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function av(a=dt()){return/crios\//i.test(a)}function lv(a=dt()){return/iemobile/i.test(a)}function rv(a=dt()){return/android/i.test(a)}function ov(a=dt()){return/blackberry/i.test(a)}function uv(a=dt()){return/webos/i.test(a)}function _h(a=dt()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function lC(a=dt()){var t;return _h(a)&&!!((t=window.navigator)!=null&&t.standalone)}function rC(){return yS()&&document.documentMode===10}function cv(a=dt()){return _h(a)||rv(a)||uv(a)||ov(a)||/windows phone/i.test(a)||lv(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(a,t=[]){let i;switch(a){case"Browser":i=M_(dt());break;case"Worker":i=`${M_(dt())}-${a}`;break;default:i=a}const l=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${ra}/${l}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const l=f=>new Promise((h,m)=>{try{const g=t(f);h(g)}catch(g){m(g)}});l.onAbort=i,this.queue.push(l);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const l of this.queue)await l(t),l.onAbort&&i.push(l.onAbort)}catch(l){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:l==null?void 0:l.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(a,t={}){return oa(a,"GET","/v2/passwordPolicy",jo(a,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=6;class fC{constructor(t){var l;const i=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??cC,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((l=t.allowedNonAlphanumericCharacters)==null?void 0:l.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,i),this.validatePasswordCharacterOptions(t,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(t,i){const l=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;l&&(i.meetsMinPasswordLength=t.length>=l),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let l;for(let o=0;o<t.length;o++)l=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,l>="a"&&l<="z",l>="A"&&l<="Z",l>="0"&&l<="9",this.allowedNonAlphanumericCharacters.includes(l))}updatePasswordCharacterOptionsStatuses(t,i,l,o,f){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=l)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t,i,l,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=l,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D_(this),this.idTokenSubscription=new D_(this),this.beforeStateQueue=new oC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(f=>this._resolvePersistenceManagerAvailable=f)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=kn(i)),this._initializationPromise=this.queue(async()=>{var l,o,f;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,t),(l=this._resolvePersistenceManagerAvailable)==null||l.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((f=this.currentUser)==null?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await bo(this,{idToken:t}),l=await en._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(l)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var f;if(Jt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let l=i,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(f=this.redirectUser)==null?void 0:f._redirectEventId,m=l==null?void 0:l._redirectEventId,g=await this.tryRedirectSignIn(t);(!h||h===m)&&(g!=null&&g.user)&&(l=g.user,o=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(l)}catch(h){l=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Eo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=FT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Jt(this.app))return Promise.reject(Si(this));const i=t?mt(t):null;return i&&K(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Jt(this.app)?Promise.reject(Si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await uC(this),i=new fC(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Il("auth","Firebase",t())}onAuthStateChanged(t,i,l){return this.registerStateListener(this.authStateSubscription,t,i,l)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,l){return this.registerStateListener(this.idTokenSubscription,t,i,l)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const l=this.onAuthStateChanged(()=>{l(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),l={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(l.tenantId=this.tenantId),await aC(this,l)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,i){const l=await this.getOrInitRedirectPersistenceManager(i);return t===null?l.removeCurrentUser():l.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&kn(t)||this._popupRedirectResolver;K(i,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[kn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,l;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===t?this._currentUser:((l=this.redirectUser)==null?void 0:l._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,l,o){if(this._deleted)return()=>{};const f=typeof i=="function"?i:i.next.bind(i);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(m,this,"internal-error"),m.then(()=>{h||f(this.currentUser)}),typeof i=="function"){const g=t.addObserver(i,l,o);return()=>{h=!0,g()}}else{const g=t.addObserver(i);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const l=await this._getAppCheckToken();return l&&(t["X-Firebase-AppCheck"]=l),t}async _getAppCheckToken(){var i;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return t!=null&&t.error&&PT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qo(a){return mt(a)}class D_{constructor(t){this.auth=t,this.observer=null,this.addObserver=RS(i=>this.observer=i)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dC(a){yh=a}function mC(a){return yh.loadJS(a)}function pC(){return yh.gapiScript}function gC(a){return`__${a}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(a,t){const i=hh(a,"auth");if(i.isInitialized()){const o=i.getImmediate(),f=i.getOptions();if($i(f,t??{}))return o;Hn(o,"already-initialized")}return i.initialize({options:t})}function yC(a,t){const i=(t==null?void 0:t.persistence)||[],l=(Array.isArray(i)?i:[i]).map(kn);t!=null&&t.errorMap&&a._updateErrorMap(t.errorMap),a._initializeWithPersistence(l,t==null?void 0:t.popupRedirectResolver)}function vC(a,t,i){const l=qo(a);K(/^https?:\/\//.test(t),l,"invalid-emulator-scheme");const o=!1,f=hv(t),{host:h,port:m}=bC(t),g=m===null?"":`:${m}`,p={url:`${f}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:f.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!l._canInitEmulator){K(l.config.emulator&&l.emulatorConfig,l,"emulator-config-failed"),K($i(p,l.config.emulator)&&$i(E,l.emulatorConfig),l,"emulator-config-failed");return}l.config.emulator=p,l.emulatorConfig=E,l.settings.appVerificationDisabledForTesting=!0,aa(h)?(By(`${f}//${h}${g}`),jy("Auth",!0)):EC()}function hv(a){const t=a.indexOf(":");return t<0?"":a.substr(0,t+1)}function bC(a){const t=hv(a),i=/(\/\/)?([^?#/]+)/.exec(a.substr(t.length));if(!i)return{host:"",port:null};const l=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(l);if(o){const f=o[1];return{host:f,port:I_(l.substr(f.length+1))}}else{const[f,h]=l.split(":");return{host:f,port:I_(h)}}}function I_(a){if(!a)return null;const t=Number(a);return isNaN(t)?null:t}function EC(){function a(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return In("not implemented")}_getIdTokenResponse(t){return In("not implemented")}_linkToIdToken(t,i){return In("not implemented")}_getReauthenticationResolver(t){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(a,t){return $y(a,"POST","/v1/accounts:signInWithIdp",jo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="http://localhost";class ts extends dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new ts(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Hn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:l,signInMethod:o,...f}=i;if(!l||!o)return null;const h=new ts(l,o);return h.idToken=f.idToken||void 0,h.accessToken=f.accessToken||void 0,h.secret=f.secret,h.nonce=f.nonce,h.pendingToken=f.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Zs(t,i)}_linkToIdToken(t,i){const l=this.buildRequest();return l.idToken=i,Zs(t,l)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Zs(t,i)}buildRequest(){const t={requestUri:SC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=la(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends mv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Ll{constructor(){super("facebook.com")}static credential(t){return ts._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pi.credentialFromTaggedObject(t)}static credentialFromError(t){return pi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pi.credential(t.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return ts._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return gi.credentialFromTaggedObject(t)}static credentialFromError(t){return gi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:l}=t;if(!i&&!l)return null;try{return gi.credential(i,l)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Ll{constructor(){super("github.com")}static credential(t){return ts._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _i.credentialFromTaggedObject(t)}static credentialFromError(t){return _i.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _i.credential(t.oauthAccessToken)}catch{return null}}}_i.GITHUB_SIGN_IN_METHOD="github.com";_i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Ll{constructor(){super("twitter.com")}static credential(t,i){return ts._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return yi.credentialFromTaggedObject(t)}static credentialFromError(t){return yi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:l}=t;if(!i||!l)return null;try{return yi.credential(i,l)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(a,t){return $y(a,"POST","/v1/accounts:signUp",jo(a,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,l,o=!1){const f=await en._fromIdTokenResponse(t,l,o),h=k_(l);return new Ci({user:f,providerId:h,_tokenResponse:l,operationType:i})}static async _forOperation(t,i,l){await t._updateTokensIfNecessary(l,!0);const o=k_(l);return new Ci({user:t,providerId:o,_tokenResponse:l,operationType:i})}}function k_(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(a){var o;if(Jt(a.app))return Promise.reject(Si(a));const t=qo(a);if(await t._initializationPromise,(o=t.currentUser)!=null&&o.isAnonymous)return new Ci({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await TC(t,{returnSecureToken:!0}),l=await Ci._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Ri{constructor(t,i,l,o){super(i.code,i.message),this.operationType=l,this.user=o,Object.setPrototypeOf(this,So.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:l}}static _fromErrorAndOperation(t,i,l,o){return new So(t,i,l,o)}}function pv(a,t,i,l){return(t==="reauthenticate"?i._getReauthenticationResolver(a):i._getIdTokenResponse(a)).catch(f=>{throw f.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(a,f,t,l):f})}async function CC(a,t,i=!1){const l=await wl(a,t._linkToIdToken(a.auth,await a.getIdToken()),i);return Ci._forOperation(a,"link",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(a,t,i=!1){const{auth:l}=a;if(Jt(l.app))return Promise.reject(Si(l));const o="reauthenticate";try{const f=await wl(a,pv(l,o,t,a),i);K(f.idToken,l,"internal-error");const h=gh(f.idToken);K(h,l,"internal-error");const{sub:m}=h;return K(a.uid===m,l,"user-mismatch"),Ci._forOperation(a,o,f)}catch(f){throw(f==null?void 0:f.code)==="auth/user-not-found"&&Hn(l,"user-mismatch"),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(a,t,i=!1){if(Jt(a.app))return Promise.reject(Si(a));const l="signIn",o=await pv(a,l,t),f=await Ci._fromIdTokenResponse(a,l,o);return i||await a._updateCurrentUser(f.user),f}function NC(a,t,i,l){return mt(a).onIdTokenChanged(t,i,l)}function RC(a,t,i){return mt(a).beforeAuthStateChanged(t,i)}function OC(a,t,i,l){return mt(a).onAuthStateChanged(t,i,l)}function xC(a){return mt(a).signOut()}const To="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(To,"1"),this.storage.removeItem(To),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=1e3,DC=10;class _v extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const l=this.storage.getItem(i),o=this.localCache[i];l!==o&&t(i,o,l)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const l=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(l);!i&&this.localCache[l]===h||this.notifyListeners(l,h)},f=this.storage.getItem(l);rC()&&f!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,DC):o()}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,l)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:l}),!0)})},MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}_v.type="LOCAL";const IC=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}yv.type="SESSION";const vv=yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(a){return Promise.all(a.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const l=new Vo(t);return this.receivers.push(l),l}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:l,eventType:o,data:f}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:l,eventType:o});const m=Array.from(h).map(async p=>p(i.origin,f)),g=await kC(m);i.ports[0].postMessage({status:"done",eventId:l,eventType:o,response:g})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(a="",t=10){let i="";for(let l=0;l<t;l++)i+=Math.floor(Math.random()*10);return a+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,l=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let f,h;return new Promise((m,g)=>{const p=vh("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},l);h={messageChannel:o,onMessage(v){const b=v;if(b.data.eventId===p)switch(b.data.status){case"ack":clearTimeout(E),f=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(f),m(b.data.response);break;default:clearTimeout(E),clearTimeout(f),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:p,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function UC(a){cn().location.href=a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function zC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HC(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)==null?void 0:a.controller)||null}function BC(){return bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="firebaseLocalStorageDb",jC=1,Co="firebaseLocalStorage",Sv="fbase_key";class Ul{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Go(a,t){return a.transaction([Co],t?"readwrite":"readonly").objectStore(Co)}function qC(){const a=indexedDB.deleteDatabase(Ev);return new Ul(a).toPromise()}function Qf(){const a=indexedDB.open(Ev,jC);return new Promise((t,i)=>{a.addEventListener("error",()=>{i(a.error)}),a.addEventListener("upgradeneeded",()=>{const l=a.result;try{l.createObjectStore(Co,{keyPath:Sv})}catch(o){i(o)}}),a.addEventListener("success",async()=>{const l=a.result;l.objectStoreNames.contains(Co)?t(l):(l.close(),await qC(),t(await Qf()))})})}async function U_(a,t,i){const l=Go(a,!0).put({[Sv]:t,value:i});return new Ul(l).toPromise()}async function VC(a,t){const i=Go(a,!1).get(t),l=await new Ul(i).toPromise();return l===void 0?null:l.value}function z_(a,t){const i=Go(a,!0).delete(t);return new Ul(i).toPromise()}const GC=800,PC=3;class Tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const l=await this._openDb();return await t(l)}catch(l){if(i++>PC)throw l;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(BC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var i,l;if(this.activeServiceWorker=await zC(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(i=t[0])!=null&&i.fulfilled&&(l=t[0])!=null&&l.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||HC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qf();return await U_(t,To,"1"),await z_(t,To),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(l=>U_(l,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(l=>VC(l,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>z_(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const f=Go(o,!1).getAll();return new Ul(f).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],l=new Set;if(t.length!==0)for(const{fbase_key:o,value:f}of t)l.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(f)&&(this.notifyListeners(o,f),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!l.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const l=this.listeners[t];if(l)for(const o of Array.from(l))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tv.type="LOCAL";const YC=Tv;new kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(a,t){return t?kn(t):(K(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends dv{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Zs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Zs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function FC(a){return AC(a.auth,new bh(a),a.bypassAuthState)}function XC(a){const{auth:t,user:i}=a;return K(i,t,"internal-error"),wC(i,new bh(a),a.bypassAuthState)}async function KC(a){const{auth:t,user:i}=a;return K(i,t,"internal-error"),CC(i,new bh(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(t,i,l,o,f=!1){this.auth=t,this.resolver=l,this.user=o,this.bypassAuthState=f,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(l){this.reject(l)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:l,postBody:o,tenantId:f,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:i,sessionId:l,tenantId:f||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return KC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:Hn(this.auth,"internal-error")}}resolve(t){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new kl(2e3,1e4);class Qs extends Cv{constructor(t,i,l,o,f){super(t,i,o,f),this.provider=l,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const t=vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,l;if((l=(i=this.authWindow)==null?void 0:i.window)!=null&&l.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ZC.get())};t()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="pendingRedirect",ho=new Map;class JC extends Cv{constructor(t,i,l=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,l),this.eventId=null}async execute(){let t=ho.get(this.auth._key());if(!t){try{const l=await $C(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(l)}catch(i){t=()=>Promise.reject(i)}ho.set(this.auth._key(),t)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $C(a,t){const i=nw(t),l=tw(a);if(!await l._isAvailable())return!1;const o=await l._get(i)==="true";return await l._remove(i),o}function ew(a,t){ho.set(a._key(),t)}function tw(a){return kn(a._redirectPersistence)}function nw(a){return fo(WC,a.config.apiKey,a.name)}async function iw(a,t,i=!1){if(Jt(a.app))return Promise.reject(Si(a));const l=qo(a),o=QC(l,t),h=await new JC(l,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await l._persistUserIfCurrent(h.user),await l._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=600*1e3;class aw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(l=>{this.isEventForConsumer(t,l)&&(i=!0,this.sendToConsumer(t,l),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!lw(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var l;if(t.error&&!wv(t)){const o=((l=t.error.code)==null?void 0:l.split("auth/")[1])||"internal-error";i.onError(un(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const l=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&l}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sw&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(t))}saveEventToCache(t){this.cachedEventUids.add(H_(t)),this.lastProcessedEventTime=Date.now()}}function H_(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(t=>t).join("-")}function wv({type:a,error:t}){return a==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function lw(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wv(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(a,t={}){return oa(a,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uw=/^https?/;async function cw(a){if(a.config.emulator)return;const{authorizedDomains:t}=await rw(a);for(const i of t)try{if(fw(i))return}catch{}Hn(a,"unauthorized-domain")}function fw(a){const t=Pf(),{protocol:i,hostname:l}=new URL(t);if(a.startsWith("chrome-extension://")){const h=new URL(a);return h.hostname===""&&l===""?i==="chrome-extension:"&&a.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===l}if(!uw.test(i))return!1;if(ow.test(a))return l===a;const o=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(l)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=new kl(3e4,6e4);function B_(){const a=cn().___jsl;if(a!=null&&a.H){for(const t of Object.keys(a.H))if(a.H[t].r=a.H[t].r||[],a.H[t].L=a.H[t].L||[],a.H[t].r=[...a.H[t].L],a.CP)for(let i=0;i<a.CP.length;i++)a.CP[i]=null}}function dw(a){return new Promise((t,i)=>{var o,f,h;function l(){B_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{B_(),i(un(a,"network-request-failed"))},timeout:hw.get()})}if((f=(o=cn().gapi)==null?void 0:o.iframes)!=null&&f.Iframe)t(gapi.iframes.getContext());else if((h=cn().gapi)!=null&&h.load)l();else{const m=gC("iframefcb");return cn()[m]=()=>{gapi.load?l():i(un(a,"network-request-failed"))},mC(`${pC()}?onload=${m}`).catch(g=>i(g))}}).catch(t=>{throw mo=null,t})}let mo=null;function mw(a){return mo=mo||dw(a),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new kl(5e3,15e3),gw="__/auth/iframe",_w="emulator/auth/iframe",yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bw(a){const t=a.config;K(t.authDomain,a,"auth-domain-config-required");const i=t.emulator?ph(t,_w):`https://${a.config.authDomain}/${gw}`,l={apiKey:t.apiKey,appName:a.name,v:ra},o=vw.get(a.config.apiHost);o&&(l.eid=o);const f=a._getFrameworks();return f.length&&(l.fw=f.join(",")),`${i}?${la(l).slice(1)}`}async function Ew(a){const t=await mw(a),i=cn().gapi;return K(i,a,"internal-error"),t.open({where:document.body,url:bw(a),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yw,dontclear:!0},l=>new Promise(async(o,f)=>{await l.restyle({setHideOnLeave:!1});const h=un(a,"network-request-failed"),m=cn().setTimeout(()=>{f(h)},pw.get());function g(){cn().clearTimeout(m),o(l)}l.ping(g).then(g,()=>{f(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tw=500,Cw=600,ww="_blank",Aw="http://localhost";class j_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(a,t,i,l=Tw,o=Cw){const f=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-l)/2,0).toString();let m="";const g={...Sw,width:l.toString(),height:o.toString(),top:f,left:h},p=dt().toLowerCase();i&&(m=av(p)?ww:i),iv(p)&&(t=t||Aw,g.scrollbars="yes");const E=Object.entries(g).reduce((b,[L,H])=>`${b}${L}=${H},`,"");if(lC(p)&&m!=="_self")return Rw(t||"",m),new j_(null);const v=window.open(t||"",m,E);K(v,a,"popup-blocked");try{v.focus()}catch{}return new j_(v)}function Rw(a,t){const i=document.createElement("a");i.href=a,i.target=t;const l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="__/auth/handler",xw="emulator/auth/handler",Mw=encodeURIComponent("fac");async function q_(a,t,i,l,o,f){K(a.config.authDomain,a,"auth-domain-config-required"),K(a.config.apiKey,a,"invalid-api-key");const h={apiKey:a.config.apiKey,appName:a.name,authType:i,redirectUrl:l,v:ra,eventId:o};if(t instanceof mv){t.setDefaultLanguage(a.languageCode),h.providerId=t.providerId||"",Hf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,v]of Object.entries({}))h[E]=v}if(t instanceof Ll){const E=t.getScopes().filter(v=>v!=="");E.length>0&&(h.scopes=E.join(","))}a.tenantId&&(h.tid=a.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await a._getAppCheckToken(),p=g?`#${Mw}=${encodeURIComponent(g)}`:"";return`${Dw(a)}?${la(m).slice(1)}${p}`}function Dw({config:a}){return a.emulator?ph(a,xw):`https://${a.authDomain}/${Ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="webStorageSupport";class Iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=iw,this._overrideRedirectResult=ew}async _openPopup(t,i,l,o){var h;Bn((h=this.eventManagers[t._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const f=await q_(t,i,l,Pf(),o);return Nw(t,f,vh())}async _openRedirect(t,i,l,o){await this._originValidation(t);const f=await q_(t,i,l,Pf(),o);return UC(f),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:f}=this.eventManagers[i];return o?Promise.resolve(o):(Bn(f,"If manager is not set, promise should be"),f)}const l=this.initAndGetManager(t);return this.eventManagers[i]={promise:l},l.catch(()=>{delete this.eventManagers[i]}),l}async initAndGetManager(t){const i=await Ew(t),l=new aw(t);return i.register("authEvent",o=>(K(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:l.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:l},this.iframes[t._key()]=i,l}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(xf,{type:xf},o=>{var h;const f=(h=o==null?void 0:o[0])==null?void 0:h[xf];f!==void 0&&i(!!f),Hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=cw(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return cv()||sv()||_h()}}const kw=Iw;var V_="@firebase/auth",G_="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(l=>{t((l==null?void 0:l.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zw(a){ea(new es("auth",(t,{options:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),f=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=l.options;K(h&&!h.includes(":"),"invalid-api-key",{appName:l.name});const g={apiKey:h,authDomain:m,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fv(a)},p=new hC(l,o,f,g);return yC(p,i),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,l)=>{t.getProvider("auth-internal").initialize()})),ea(new es("auth-internal",t=>{const i=qo(t.getProvider("auth").getImmediate());return(l=>new Lw(l))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ei(V_,G_,Uw(a)),Ei(V_,G_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=300,Bw=Hy("authIdTokenMaxAge")||Hw;let P_=null;const jw=a=>async t=>{const i=t&&await t.getIdTokenResult(),l=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(l&&l>Bw)return;const o=i==null?void 0:i.token;P_!==o&&(P_=o,await fetch(a,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function qw(a=dh()){const t=hh(a,"auth");if(t.isInitialized())return t.getImmediate();const i=_C(a,{popupRedirectResolver:kw,persistence:[YC,IC,vv]}),l=Hy("authTokenSyncURL");if(l&&typeof isSecureContext=="boolean"&&isSecureContext){const f=new URL(l,location.origin);if(location.origin===f.origin){const h=jw(f.toString());RC(i,h,()=>h(i.currentUser)),NC(i,m=>h(m))}}const o=Uy("auth");return o&&vC(i,`http://${o}`),i}function Vw(){var a;return((a=document.getElementsByTagName("head"))==null?void 0:a[0])??document}dC({loadJS(a){return new Promise((t,i)=>{const l=document.createElement("script");l.setAttribute("src",a),l.onload=t,l.onerror=o=>{const f=un("internal-error");f.customData=o,i(f)},l.type="text/javascript",l.charset="UTF-8",Vw().appendChild(l)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zw("Browser");var Y_={};const Q_="@firebase/database",F_="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Av="";function Gw(a){Av=a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$e(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Sl(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return hn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const t=window[a];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Pw(t)}}catch{}return new Yw},Zi=Nv("localStorage"),Qw=Nv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new ch("@firebase/database"),Fw=(function(){let a=1;return function(){return a++}})(),Rv=function(a){const t=MS(a),i=new NS;i.update(t);const l=i.digest();return lh.encodeByteArray(l)},zl=function(...a){let t="";for(let i=0;i<a.length;i++){const l=a[i];Array.isArray(l)||l&&typeof l=="object"&&typeof l.length=="number"?t+=zl.apply(null,l):typeof l=="object"?t+=$e(l):t+=l,t+=" "}return t};let ml=null,X_=!0;const Xw=function(a,t){U(!0,"Can't turn on custom loggers persistently."),Ws.logLevel=Ce.VERBOSE,ml=Ws.log.bind(Ws)},ct=function(...a){if(X_===!0&&(X_=!1,ml===null&&Qw.get("logging_enabled")===!0&&Xw()),ml){const t=zl.apply(null,a);ml(t)}},Hl=function(a){return function(...t){ct(a,...t)}},Ff=function(...a){const t="FIREBASE INTERNAL ERROR: "+zl(...a);Ws.error(t)},jn=function(...a){const t=`FIREBASE FATAL ERROR: ${zl(...a)}`;throw Ws.error(t),new Error(t)},Ct=function(...a){const t="FIREBASE WARNING: "+zl(...a);Ws.warn(t)},Kw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eh=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},Zw=function(a){if(document.readyState==="complete")a();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},ns="[MIN_NAME]",wi="[MAX_NAME]",ua=function(a,t){if(a===t)return 0;if(a===ns||t===wi)return-1;if(t===ns||a===wi)return 1;{const i=K_(a),l=K_(t);return i!==null?l!==null?i-l===0?a.length-t.length:i-l:-1:l!==null?1:a<t?-1:1}},Ww=function(a,t){return a===t?0:a<t?-1:1},rl=function(a,t){if(t&&a in t)return t[a];throw new Error("Missing required key ("+a+") in object: "+$e(t))},Sh=function(a){if(typeof a!="object"||a===null)return $e(a);const t=[];for(const l in a)t.push(l);t.sort();let i="{";for(let l=0;l<t.length;l++)l!==0&&(i+=","),i+=$e(t[l]),i+=":",i+=Sh(a[t[l]]);return i+="}",i},Ov=function(a,t){const i=a.length;if(i<=t)return[a];const l=[];for(let o=0;o<i;o+=t)o+t>i?l.push(a.substring(o,i)):l.push(a.substring(o,o+t));return l};function wt(a,t){for(const i in a)a.hasOwnProperty(i)&&t(i,a[i])}const xv=function(a){U(!Eh(a),"Invalid JSON number");const t=11,i=52,l=(1<<t-1)-1;let o,f,h,m,g;a===0?(f=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-l)?(m=Math.min(Math.floor(Math.log(a)/Math.LN2),l),f=m+l,h=Math.round(a*Math.pow(2,i-m)-Math.pow(2,i))):(f=0,h=Math.round(a/Math.pow(2,1-l-i))));const p=[];for(g=i;g;g-=1)p.push(h%2?1:0),h=Math.floor(h/2);for(g=t;g;g-=1)p.push(f%2?1:0),f=Math.floor(f/2);p.push(o?1:0),p.reverse();const E=p.join("");let v="";for(g=0;g<64;g+=8){let b=parseInt(E.substr(g,8),2).toString(16);b.length===1&&(b="0"+b),v=v+b}return v.toLowerCase()},Jw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$w=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function eA(a,t){let i="Unknown Error";a==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?i="Client doesn't have permission to access the desired data.":a==="unavailable"&&(i="The service is unavailable");const l=new Error(a+" at "+t._path.toString()+": "+i);return l.code=a.toUpperCase(),l}const tA=new RegExp("^-?(0*)\\d{1,10}$"),nA=-2147483648,iA=2147483647,K_=function(a){if(tA.test(a)){const t=Number(a);if(t>=nA&&t<=iA)return t}return null},ca=function(a){try{a()}catch(t){setTimeout(()=>{const i=t.stack||"";throw Ct("Exception was thrown by user callback.",i),t},Math.floor(0))}},sA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pl=function(a,t){const i=setTimeout(a,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Jt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(l=>this.appCheck=l)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,l)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)==null||i.get().then(l=>l.addTokenListener(t))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(t,i,l){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=l,this.auth_=null,this.auth_=l.getImmediate({optional:!0}),this.auth_||l.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,l)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,l):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(t)}}class po{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}po.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="5",Mv="v",Dv="s",Iv="r",kv="f",Lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Uv="ls",zv="p",Xf="ac",Hv="websocket",Bv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t,i,l,o,f=!1,h="",m=!1,g=!1,p=null){this.secure=i,this.namespace=l,this.webSocketOnly=o,this.nodeAdmin=f,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=g,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Zi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function rA(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function qv(a,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let l;if(t===Hv)l=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(t===Bv)l=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);rA(a)&&(i.ns=a.namespace);const o=[];return wt(i,(f,h)=>{o.push(f+"="+h)}),l+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.counters_={}}incrementCounter(t,i=1){hn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return lS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={},Df={};function Ch(a){const t=a.toString();return Mf[t]||(Mf[t]=new oA),Mf[t]}function uA(a,t){const i=a.toString();return Df[i]||(Df[i]=t()),Df[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const l=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<l.length;++o)l[o]&&ca(()=>{this.onMessage_(l[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="start",fA="close",hA="pLPCommand",dA="pRTLPCB",Vv="id",Gv="pw",Pv="ser",mA="cb",pA="seg",gA="ts",_A="d",yA="dframe",Yv=1870,Qv=30,vA=Yv-Qv,bA=25e3,EA=3e4;class Fs{constructor(t,i,l,o,f,h,m){this.connId=t,this.repoInfo=i,this.applicationId=l,this.appCheckToken=o,this.authToken=f,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hl(t),this.stats_=Ch(i),this.urlFn=g=>(this.appCheckToken&&(g[Xf]=this.appCheckToken),qv(i,Bv,g))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new cA(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EA)),Zw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wh((...f)=>{const[h,m,g,p,E]=f;if(this.incrementIncomingBytes_(f),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Z_)this.id=m,this.password=g;else if(h===fA)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...f)=>{const[h,m]=f;this.incrementIncomingBytes_(f),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const l={};l[Z_]="t",l[Pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(l[mA]=this.scriptTagHolder.uniqueCallbackIdentifier),l[Mv]=Th,this.transportSessionId&&(l[Dv]=this.transportSessionId),this.lastSessionId&&(l[Uv]=this.lastSessionId),this.applicationId&&(l[zv]=this.applicationId),this.appCheckToken&&(l[Xf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(l[Iv]=kv);const o=this.urlFn(l);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fs.forceAllow_=!0}static forceDisallow(){Fs.forceDisallow_=!0}static isAvailable(){return Fs.forceAllow_?!0:!Fs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jw()&&!$w()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=$e(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=ky(i),o=Ov(l,vA);for(let f=0;f<o.length;f++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[f]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const l={};l[yA]="t",l[Vv]=t,l[Gv]=i,this.myDisconnFrame.src=this.urlFn(l),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=$e(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class wh{constructor(t,i,l,o){this.onDisconnect=l,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Fw(),window[hA+this.uniqueCallbackIdentifier]=t,window[dA+this.uniqueCallbackIdentifier]=i,this.myIFrame=wh.createIFrame_();let f="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(f='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+f+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){ct("frame writing exception"),m.stack&&ct(m.stack),ct(m)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||ct("No IE domain setting required")}catch{const l=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+l+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Vv]=this.myID,t[Gv]=this.myPW,t[Pv]=this.currentSerial;let i=this.urlFn(t),l="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qv+l.length<=Yv;){const h=this.pendingSegs.shift();l=l+"&"+pA+o+"="+h.seg+"&"+gA+o+"="+h.ts+"&"+_A+o+"="+h.d,o++}return i=i+l,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,l){this.pendingSegs.push({seg:t,ts:i,d:l}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const l=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(l,Math.floor(bA)),f=()=>{clearTimeout(o),l()};this.addTag(t,f)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const l=this.myIFrame.doc.createElement("script");l.type="text/javascript",l.async=!0,l.src=t,l.onload=l.onreadystatechange=function(){const o=l.readyState;(!o||o==="loaded"||o==="complete")&&(l.onload=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),i())},l.onerror=()=>{ct("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(l)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=16384,TA=45e3;let wo=null;typeof MozWebSocket<"u"?wo=MozWebSocket:typeof WebSocket<"u"&&(wo=WebSocket);class $t{constructor(t,i,l,o,f,h,m){this.connId=t,this.applicationId=l,this.appCheckToken=o,this.authToken=f,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hl(this.connId),this.stats_=Ch(i),this.connURL=$t.connectionURL_(i,h,m,o,l),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,l,o,f){const h={};return h[Mv]=Th,typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(h[Iv]=kv),i&&(h[Dv]=i),l&&(h[Uv]=l),o&&(h[Xf]=o),f&&(h[zv]=f),qv(t,Hv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zi.set("previous_websocket_failure",!0);try{let l;vS(),this.mySock=new wo(this.connURL,[],l)}catch(l){this.log_("Error instantiating WebSocket.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=l=>{this.handleIncomingFrame(l)},this.mySock.onerror=l=>{this.log_("WebSocket error.  Closing connection.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,l=navigator.userAgent.match(i);l&&l.length>1&&parseFloat(l[1])<4.4&&(t=!0)}return!t&&wo!==null&&!$t.forceDisallow_}static previouslyFailed(){return Zi.isInMemoryStorage||Zi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const l=Sl(i);this.onMessage(l)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const l=this.extractFrameCount_(i);l!==null&&this.appendFrame_(l)}}send(t){this.resetKeepAlive();const i=$e(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const l=Ov(i,SA);l.length>1&&this.sendString_(String(l.length));for(let o=0;o<l.length;o++)this.sendString_(l[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TA))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static get ALL_TRANSPORTS(){return[Fs,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=$t&&$t.isAvailable();let l=i&&!$t.previouslyFailed();if(t.webSocketOnly&&(i||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),l=!0),l)this.transports_=[$t];else{const o=this.transports_=[];for(const f of Al.ALL_TRANSPORTS)f&&f.isAvailable()&&o.push(f);Al.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Al.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=6e4,wA=5e3,AA=10*1024,NA=100*1024,If="t",W_="d",RA="s",J_="r",OA="e",$_="o",ey="a",ty="n",ny="p",xA="h";class MA{constructor(t,i,l,o,f,h,m,g,p,E){this.id=t,this.repoInfo_=i,this.applicationId_=l,this.appCheckToken_=o,this.authToken_=f,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=g,this.onKill_=p,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hl("c:"+this.id+":"),this.transportManager_=new Al(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),l=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,l)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=pl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(If in t){const i=t[If];i===ey?this.upgradeIfSecondaryHealthy_():i===J_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===$_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=rl("t",t),l=rl("d",t);if(i==="c")this.onSecondaryControl_(l);else if(i==="d")this.pendingDataMessages.push(l);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ny,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ey,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ty,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=rl("t",t),l=rl("d",t);i==="c"?this.onControl_(l):i==="d"&&this.onDataMessage_(l)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=rl(If,t);if(W_ in t){const l=t[W_];if(i===xA){const o={...l};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===ty){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===RA?this.onConnectionShutdown_(l):i===J_?this.onReset_(l):i===OA?Ff("Server Error: "+l):i===$_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ff("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,l=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Th!==l&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),l=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,l),pl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CA))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ny,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{put(t,i,l,o){}merge(t,i,l,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,l){}onDisconnectMerge(t,i,l){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const l=[...this.listeners_[t]];for(let o=0;o<l.length;o++)l[o].callback.apply(l[o].context,i)}}on(t,i,l){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:l});const o=this.getInitialEvent(t);o&&i.apply(l,o)}off(t,i,l){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let f=0;f<o.length;f++)if(o[f].callback===i&&(!l||l===o[f].context)){o.splice(f,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Xv{static getInstance(){return new Ao}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=32,sy=768;class we{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let l=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[l]=this.pieces_[o],l++);this.pieces_.length=l,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function _e(){return new we("")}function ee(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function Ai(a){return a.pieces_.length-a.pieceNum_}function xe(a){let t=a.pieceNum_;return t<a.pieces_.length&&t++,new we(a.pieces_,t)}function Kv(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function DA(a){let t="";for(let i=a.pieceNum_;i<a.pieces_.length;i++)a.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(a.pieces_[i])));return t||"/"}function Zv(a,t=0){return a.pieces_.slice(a.pieceNum_+t)}function Wv(a){if(a.pieceNum_>=a.pieces_.length)return null;const t=[];for(let i=a.pieceNum_;i<a.pieces_.length-1;i++)t.push(a.pieces_[i]);return new we(t,0)}function Fe(a,t){const i=[];for(let l=a.pieceNum_;l<a.pieces_.length;l++)i.push(a.pieces_[l]);if(t instanceof we)for(let l=t.pieceNum_;l<t.pieces_.length;l++)i.push(t.pieces_[l]);else{const l=t.split("/");for(let o=0;o<l.length;o++)l[o].length>0&&i.push(l[o])}return new we(i,0)}function te(a){return a.pieceNum_>=a.pieces_.length}function St(a,t){const i=ee(a),l=ee(t);if(i===null)return t;if(i===l)return St(xe(a),xe(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+a+")")}function Ah(a,t){if(Ai(a)!==Ai(t))return!1;for(let i=a.pieceNum_,l=t.pieceNum_;i<=a.pieces_.length;i++,l++)if(a.pieces_[i]!==t.pieces_[l])return!1;return!0}function tn(a,t){let i=a.pieceNum_,l=t.pieceNum_;if(Ai(a)>Ai(t))return!1;for(;i<a.pieces_.length;){if(a.pieces_[i]!==t.pieces_[l])return!1;++i,++l}return!0}class IA{constructor(t,i){this.errorPrefix_=i,this.parts_=Zv(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let l=0;l<this.parts_.length;l++)this.byteLength_+=Bo(this.parts_[l]);Jv(this)}}function kA(a,t){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(t),a.byteLength_+=Bo(t),Jv(a)}function LA(a){const t=a.parts_.pop();a.byteLength_-=Bo(t),a.parts_.length>0&&(a.byteLength_-=1)}function Jv(a){if(a.byteLength_>sy)throw new Error(a.errorPrefix_+"has a key path longer than "+sy+" bytes ("+a.byteLength_+").");if(a.parts_.length>iy)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iy+") or object contains a cycle "+Ki(a))}function Ki(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Xv{static getInstance(){return new Nh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const l=!document[t];l!==this.visible_&&(this.visible_=l,this.trigger("visible",l))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=1e3,UA=300*1e3,ay=30*1e3,zA=1.3,HA=3e4,BA="server_kill",ly=3;class Un extends Fv{constructor(t,i,l,o,f,h,m,g){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=l,this.onConnectStatus_=o,this.onServerInfoUpdate_=f,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=g,this.id=Un.nextPersistentConnectionId_++,this.log_=Hl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ol,this.maxReconnectDelay_=UA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ao.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,l){const o=++this.requestNumber_,f={r:o,a:t,b:i};this.log_($e(f)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(f),l&&(this.requestCBHash_[o]=l)}get(t){this.initConnection_();const i=new Ho,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?i.resolve(m):i.reject(m)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const f=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(f),i.promise}listen(t,i,l,o){this.initConnection_();const f=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+f),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(f),"listen() called twice for same path/queryId.");const m={onComplete:o,hashFn:i,query:t,tag:l};this.listens.get(h).set(f,m),this.connected_&&this.sendListen_(m)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,l=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(l)})}sendListen_(t){const i=t.query,l=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+l+" for "+o);const f={p:l},h="q";t.tag&&(f.q=i._queryObject,f.t=t.tag),f.h=t.hashFn(),this.sendRequest(h,f,m=>{const g=m.d,p=m.s;Un.warnOnListenWarnings_(g,i),(this.listens.get(l)&&this.listens.get(l).get(o))===t&&(this.log_("listen response",m),p!=="ok"&&this.removeListen_(l,o),t.onComplete&&t.onComplete(p,g))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&hn(t,"w")){const l=$s(t,"w");if(Array.isArray(l)&&~l.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',f=i._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${f} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||AS(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ay)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=wS(t)?"auth":"gauth",l={cred:t};this.authOverride_===null?l.noauth=!0:typeof this.authOverride_=="object"&&(l.authvar=this.authOverride_),this.sendRequest(i,l,o=>{const f=o.s,h=o.d||"error";this.authToken_===t&&(f==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(f,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,l=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,l)})}unlisten(t,i){const l=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+l+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(l,o)&&this.connected_&&this.sendUnlisten_(l,o,t._queryObject,i)}sendUnlisten_(t,i,l,o){this.log_("Unlisten on "+t+" for "+i);const f={p:t},h="n";o&&(f.q=l,f.t=o),this.sendRequest(h,f)}onDisconnectPut(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:l})}onDisconnectMerge(t,i,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,l):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:l})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,l,o){const f={p:i,d:l};this.log_("onDisconnect "+t,f),this.sendRequest(t,f,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,l,o){this.putInternal("p",t,i,l,o)}merge(t,i,l,o){this.putInternal("m",t,i,l,o)}putInternal(t,i,l,o,f){this.initConnection_();const h={p:i,d:l};f!==void 0&&(h.h=f),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,l=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,l,f=>{this.log_(i+" response",f),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(f.s,f.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,l=>{if(l.s!=="ok"){const f=l.d;this.log_("reportStats","Error sending stats: "+f)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$e(t));const i=t.r,l=this.requestCBHash_[i];l&&(delete this.requestCBHash_[i],l(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Ff("Unrecognized action received from server: "+$e(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ol,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ol,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HA&&(this.reconnectDelay_=ol),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),l=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Un.nextConnectionId_++,f=this.lastSessionId;let h=!1,m=null;const g=function(){m?m.close():(h=!0,l())},p=function(v){U(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(v)};this.realtime_={close:g,sendRequest:p};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,b]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);h?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=b&&b.token,m=new MA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,l,L=>{Ct(L+" ("+this.repoInfo_.toString()+")"),this.interrupt(BA)},f))}catch(v){this.log_("Failed to get token: "+v),h||(this.repoInfo_.nodeAdmin&&Ct(v),g())}}}interrupt(t){ct("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ct("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Hf(this.interruptReasons_)&&(this.reconnectDelay_=ol,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let l;i?l=i.map(f=>Sh(f)).join("$"):l="default";const o=this.removeListen_(t,l);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const l=new we(t).toString();let o;if(this.listens.has(l)){const f=this.listens.get(l);o=f.get(i),f.delete(i),f.size===0&&this.listens.delete(l)}else o=void 0;return o}onAuthRevoked_(t,i){ct("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ly&&(this.reconnectDelay_=ay,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){ct("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ly&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Av.replace(/\./g,"-")]=1,oh()?t["framework.cordova"]=1:qy()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ao.getInstance().currentlyOnline();return Hf(this.interruptReasons_)&&t}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ne(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const l=new ne(ns,t),o=new ne(ns,i);return this.compare(l,o)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo;class $v extends Po{static get __EMPTY_NODE(){return oo}static set __EMPTY_NODE(t){oo=t}compare(t,i){return ua(t.name,i.name)}isDefinedOn(t){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ne.MIN}maxPost(){return new ne(wi,oo)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ne(t,oo)}toString(){return".key"}}const Ji=new $v;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,i,l,o,f=null){this.isReverse_=o,this.resultGenerator_=f,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?l(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Je{constructor(t,i,l,o,f){this.key=t,this.value=i,this.color=l??Je.RED,this.left=o??Tt.EMPTY_NODE,this.right=f??Tt.EMPTY_NODE}copy(t,i,l,o,f){return new Je(t??this.key,i??this.value,l??this.color,o??this.left,f??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,l){let o=this;const f=l(t,o.key);return f<0?o=o.copy(null,null,null,o.left.insert(t,i,l),null):f===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,l)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let l,o;if(l=this,i(t,l.key)<0)!l.left.isEmpty()&&!l.left.isRed_()&&!l.left.left.isRed_()&&(l=l.moveRedLeft_()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed_()&&(l=l.rotateRight_()),!l.right.isEmpty()&&!l.right.isRed_()&&!l.right.left.isRed_()&&(l=l.moveRedRight_()),i(t,l.key)===0){if(l.right.isEmpty())return Tt.EMPTY_NODE;o=l.right.min_(),l=l.copy(o.key,o.value,null,null,l.right.removeMin_())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class jA{copy(t,i,l,o,f){return this}insert(t,i,l){return new Je(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(t,i=Tt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new Tt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(t){return new Tt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(t){let i,l=this.root_;for(;!l.isEmpty();){if(i=this.comparator_(t,l.key),i===0)return l.value;i<0?l=l.left:i>0&&(l=l.right)}return null}getPredecessorKey(t){let i,l=this.root_,o=null;for(;!l.isEmpty();)if(i=this.comparator_(t,l.key),i===0){if(l.left.isEmpty())return o?o.key:null;for(l=l.left;!l.right.isEmpty();)l=l.right;return l.key}else i<0?l=l.left:i>0&&(o=l,l=l.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new uo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new uo(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new uo(this.root_,null,this.comparator_,!0,t)}}Tt.EMPTY_NODE=new jA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(a,t){return ua(a.name,t.name)}function Rh(a,t){return ua(a,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf;function VA(a){Kf=a}const e0=function(a){return typeof a=="number"?"number:"+xv(a):"string:"+a},t0=function(a){if(a.isLeafNode()){const t=a.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&hn(t,".sv"),"Priority must be a string or number.")}else U(a===Kf||a.isEmpty(),"priority of unexpected type.");U(a===Kf||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry;class We{static set __childrenNodeConstructor(t){ry=t}static get __childrenNodeConstructor(){return ry}constructor(t,i=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),t0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new We(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return te(t)?this:ee(t)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const l=ee(t);return l===null?i:i.isEmpty()&&l!==".priority"?this:(U(l!==".priority"||Ai(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(l,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+e0(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=xv(this.value_):t+=this.value_,this.lazyHash_=Rv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===We.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof We.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,l=typeof this.value_,o=We.VALUE_TYPE_ORDER.indexOf(i),f=We.VALUE_TYPE_ORDER.indexOf(l);return U(o>=0,"Unknown leaf type: "+i),U(f>=0,"Unknown leaf type: "+l),o===f?l==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:f-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0,i0;function GA(a){n0=a}function PA(a){i0=a}class YA extends Po{compare(t,i){const l=t.node.getPriority(),o=i.node.getPriority(),f=l.compareTo(o);return f===0?ua(t.name,i.name):f}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(wi,new We("[PRIORITY-POST]",i0))}makePost(t,i){const l=n0(t);return new ne(i,new We("[PRIORITY-POST]",l))}toString(){return".priority"}}const Ue=new YA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=Math.log(2);class FA{constructor(t){const i=f=>parseInt(Math.log(f)/QA,10),l=f=>parseInt(Array(f+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=l(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const No=function(a,t,i,l){a.sort(t);const o=function(g,p){const E=p-g;let v,b;if(E===0)return null;if(E===1)return v=a[g],b=i?i(v):v,new Je(b,v.node,Je.BLACK,null,null);{const L=parseInt(E/2,10)+g,H=o(g,L),Q=o(L+1,p);return v=a[L],b=i?i(v):v,new Je(b,v.node,Je.BLACK,H,Q)}},f=function(g){let p=null,E=null,v=a.length;const b=function(H,Q){const he=v-H,pe=v;v-=H;const Me=o(he+1,pe),Re=a[he],Xe=i?i(Re):Re;L(new Je(Xe,Re.node,Q,null,Me))},L=function(H){p?(p.left=H,p=H):(E=H,p=H)};for(let H=0;H<g.count;++H){const Q=g.nextBitIsOne(),he=Math.pow(2,g.count-(H+1));Q?b(he,Je.BLACK):(b(he,Je.BLACK),b(he,Je.RED))}return E},h=new FA(a.length),m=f(h);return new Tt(l||t,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;const Ys={};class Ln{static get Default(){return U(Ys&&Ue,"ChildrenNode.ts has not been loaded"),kf=kf||new Ln({".priority":Ys},{".priority":Ue}),kf}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=$s(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof Tt?i:null}hasIndex(t){return hn(this.indexSet_,t.toString())}addIndex(t,i){U(t!==Ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const l=[];let o=!1;const f=i.getIterator(ne.Wrap);let h=f.getNext();for(;h;)o=o||t.isDefinedOn(h.node),l.push(h),h=f.getNext();let m;o?m=No(l,t.getCompare()):m=Ys;const g=t.toString(),p={...this.indexSet_};p[g]=t;const E={...this.indexes_};return E[g]=m,new Ln(E,p)}addToIndexes(t,i){const l=yo(this.indexes_,(o,f)=>{const h=$s(this.indexSet_,f);if(U(h,"Missing index implementation for "+f),o===Ys)if(h.isDefinedOn(t.node)){const m=[],g=i.getIterator(ne.Wrap);let p=g.getNext();for(;p;)p.name!==t.name&&m.push(p),p=g.getNext();return m.push(t),No(m,h.getCompare())}else return Ys;else{const m=i.get(t.name);let g=o;return m&&(g=g.remove(new ne(t.name,m))),g.insert(t,t.node)}});return new Ln(l,this.indexSet_)}removeFromIndexes(t,i){const l=yo(this.indexes_,o=>{if(o===Ys)return o;{const f=i.get(t.name);return f?o.remove(new ne(t.name,f)):o}});return new Ln(l,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;class X{static get EMPTY_NODE(){return ul||(ul=new X(new Tt(Rh),null,Ln.Default))}constructor(t,i,l){this.children_=t,this.priorityNode_=i,this.indexMap_=l,this.lazyHash_=null,this.priorityNode_&&t0(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ul}updatePriority(t){return this.children_.isEmpty()?this:new X(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?ul:i}}getChild(t){const i=ee(t);return i===null?this:this.getImmediateChild(i).getChild(xe(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const l=new ne(t,i);let o,f;i.isEmpty()?(o=this.children_.remove(t),f=this.indexMap_.removeFromIndexes(l,this.children_)):(o=this.children_.insert(t,i),f=this.indexMap_.addToIndexes(l,this.children_));const h=o.isEmpty()?ul:this.priorityNode_;return new X(o,h,f)}}updateChild(t,i){const l=ee(t);if(l===null)return i;{U(ee(t)!==".priority"||Ai(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(l).updateChild(xe(t),i);return this.updateImmediateChild(l,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let l=0,o=0,f=!0;if(this.forEachChild(Ue,(h,m)=>{i[h]=m.val(t),l++,f&&X.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):f=!1}),!t&&f&&o<2*l){const h=[];for(const m in i)h[m]=i[m];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+e0(this.getPriority().val())+":"),this.forEachChild(Ue,(i,l)=>{const o=l.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Rv(t)}return this.lazyHash_}getPredecessorChildName(t,i,l){const o=this.resolveIndex_(l);if(o){const f=o.getPredecessorKey(new ne(t,i));return f?f.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.minKey();return l&&l.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ne(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const l=i.maxKey();return l&&l.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ne(i,this.children_.get(i)):null}forEachChild(t,i){const l=this.resolveIndex_(t);return l?l.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ne.Wrap);let f=o.peek();for(;f!=null&&i.compare(f,t)<0;)o.getNext(),f=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const l=this.resolveIndex_(i);if(l)return l.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ne.Wrap);let f=o.peek();for(;f!=null&&i.compare(f,t)>0;)o.getNext(),f=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Bl?-1:0}withIndex(t){if(t===Ji||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new X(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Ji||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const l=this.getIterator(Ue),o=i.getIterator(Ue);let f=l.getNext(),h=o.getNext();for(;f&&h;){if(f.name!==h.name||!f.node.equals(h.node))return!1;f=l.getNext(),h=o.getNext()}return f===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Ji?null:this.indexMap_.get(t.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XA extends X{constructor(){super(new Tt(Rh),X.EMPTY_NODE,Ln.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return X.EMPTY_NODE}isEmpty(){return!1}}const Bl=new XA;Object.defineProperties(ne,{MIN:{value:new ne(ns,X.EMPTY_NODE)},MAX:{value:new ne(wi,Bl)}});$v.__EMPTY_NODE=X.EMPTY_NODE;We.__childrenNodeConstructor=X;VA(Bl);PA(Bl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=!0;function rt(a,t=null){if(a===null)return X.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(t=a[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const i=a;return new We(i,rt(t))}if(!(a instanceof Array)&&KA){const i=[];let l=!1;if(wt(a,(h,m)=>{if(h.substring(0,1)!=="."){const g=rt(m);g.isEmpty()||(l=l||!g.getPriority().isEmpty(),i.push(new ne(h,g)))}}),i.length===0)return X.EMPTY_NODE;const f=No(i,qA,h=>h.name,Rh);if(l){const h=No(i,Ue.getCompare());return new X(f,rt(t),new Ln({".priority":h},{".priority":Ue}))}else return new X(f,rt(t),Ln.Default)}else{let i=X.EMPTY_NODE;return wt(a,(l,o)=>{if(hn(a,l)&&l.substring(0,1)!=="."){const f=rt(o);(f.isLeafNode()||!f.isEmpty())&&(i=i.updateImmediateChild(l,f))}}),i.updatePriority(rt(t))}}GA(rt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends Po{constructor(t){super(),this.indexPath_=t,U(!te(t)&&ee(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const l=this.extractChild(t.node),o=this.extractChild(i.node),f=l.compareTo(o);return f===0?ua(t.name,i.name):f}makePost(t,i){const l=rt(t),o=X.EMPTY_NODE.updateChild(this.indexPath_,l);return new ne(i,o)}maxPost(){const t=X.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new ne(wi,t)}toString(){return Zv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA extends Po{compare(t,i){const l=t.node.compareTo(i.node);return l===0?ua(t.name,i.name):l}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(t,i){const l=rt(t);return new ne(i,l)}toString(){return".value"}}const s0=new ZA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(a){return{type:"value",snapshotNode:a}}function ta(a,t){return{type:"child_added",snapshotNode:t,childName:a}}function Nl(a,t){return{type:"child_removed",snapshotNode:t,childName:a}}function Rl(a,t,i){return{type:"child_changed",snapshotNode:t,childName:a,oldSnap:i}}function WA(a,t){return{type:"child_moved",snapshotNode:t,childName:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.index_=t}updateChild(t,i,l,o,f,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=t.getImmediateChild(i);return m.getChild(o).equals(l.getChild(o))&&m.isEmpty()===l.isEmpty()||(h!=null&&(l.isEmpty()?t.hasChild(i)?h.trackChildChange(Nl(i,m)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(ta(i,l)):h.trackChildChange(Rl(i,l,m))),t.isLeafNode()&&l.isEmpty())?t:t.updateImmediateChild(i,l).withIndex(this.index_)}updateFullNode(t,i,l){return l!=null&&(t.isLeafNode()||t.forEachChild(Ue,(o,f)=>{i.hasChild(o)||l.trackChildChange(Nl(o,f))}),i.isLeafNode()||i.forEachChild(Ue,(o,f)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(f)||l.trackChildChange(Rl(o,f,h))}else l.trackChildChange(ta(o,f))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?X.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.indexedFilter_=new xh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Ol.getStartPost_(t),this.endPost_=Ol.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,l=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&l}updateChild(t,i,l,o,f,h){return this.matches(new ne(i,l))||(l=X.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,l,o,f,h)}updateFullNode(t,i,l){i.isLeafNode()&&(i=X.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(X.EMPTY_NODE);const f=this;return i.forEachChild(Ue,(h,m)=>{f.matches(new ne(h,m))||(o=o.updateImmediateChild(h,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const l=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?l<=0:l<0},this.withinEndPost=i=>{const l=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?l<=0:l<0},this.rangedFilter_=new Ol(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,l,o,f,h){return this.rangedFilter_.matches(new ne(i,l))||(l=X.EMPTY_NODE),t.getImmediateChild(i).equals(l)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,l,o,f,h):this.fullLimitUpdateChild_(t,i,l,f,h)}updateFullNode(t,i,l){let o;if(i.isLeafNode()||i.isEmpty())o=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=X.EMPTY_NODE.withIndex(this.index_);let f;this.reverse_?f=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):f=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;f.hasNext()&&h<this.limit_;){const m=f.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))o=o.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(X.EMPTY_NODE);let f;this.reverse_?f=o.getReverseIterator(this.index_):f=o.getIterator(this.index_);let h=0;for(;f.hasNext();){const m=f.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:o=o.updateImmediateChild(m.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,l)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,l,o,f){let h;if(this.reverse_){const v=this.index_.getCompare();h=(b,L)=>v(L,b)}else h=this.index_.getCompare();const m=t;U(m.numChildren()===this.limit_,"");const g=new ne(i,l),p=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),E=this.rangedFilter_.matches(g);if(m.hasChild(i)){const v=m.getImmediateChild(i);let b=o.getChildAfterChild(this.index_,p,this.reverse_);for(;b!=null&&(b.name===i||m.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const L=b==null?1:h(b,g);if(E&&!l.isEmpty()&&L>=0)return f!=null&&f.trackChildChange(Rl(i,l,v)),m.updateImmediateChild(i,l);{f!=null&&f.trackChildChange(Nl(i,v));const Q=m.updateImmediateChild(i,X.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(f!=null&&f.trackChildChange(ta(b.name,b.node)),Q.updateImmediateChild(b.name,b.node)):Q}}else return l.isEmpty()?t:E&&h(p,g)>=0?(f!=null&&(f.trackChildChange(Nl(p.name,p.node)),f.trackChildChange(ta(i,l))),m.updateImmediateChild(i,l).updateImmediateChild(p.name,X.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ns}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const t=new Mh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function $A(a){return a.loadsAllData()?new xh(a.getIndex()):a.hasLimit()?new JA(a):new Ol(a)}function eN(a,t){const i=a.copy();return i.limitSet_=!0,i.limit_=t,i.viewFrom_="r",i}function tN(a,t){const i=a.copy();return i.index_=t,i}function oy(a){const t={};if(a.isDefault())return t;let i;if(a.index_===Ue?i="$priority":a.index_===s0?i="$value":a.index_===Ji?i="$key":(U(a.index_ instanceof Oh,"Unrecognized index type!"),i=a.index_.toString()),t.orderBy=$e(i),a.startSet_){const l=a.startAfterSet_?"startAfter":"startAt";t[l]=$e(a.indexStartValue_),a.startNameSet_&&(t[l]+=","+$e(a.indexStartName_))}if(a.endSet_){const l=a.endBeforeSet_?"endBefore":"endAt";t[l]=$e(a.indexEndValue_),a.endNameSet_&&(t[l]+=","+$e(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?t.limitToFirst=a.limit_:t.limitToLast=a.limit_),t}function uy(a){const t={};if(a.startSet_&&(t.sp=a.indexStartValue_,a.startNameSet_&&(t.sn=a.indexStartName_),t.sin=!a.startAfterSet_),a.endSet_&&(t.ep=a.indexEndValue_,a.endNameSet_&&(t.en=a.indexEndName_),t.ein=!a.endBeforeSet_),a.limitSet_){t.l=a.limit_;let i=a.viewFrom_;i===""&&(a.isViewFromLeft()?i="l":i="r"),t.vf=i}return a.index_!==Ue&&(t.i=a.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Fv{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,l,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=l,this.appCheckTokenProvider_=o,this.log_=Hl("p:rest:"),this.listens_={}}listen(t,i,l,o){const f=t._path.toString();this.log_("Listen called for "+f+" "+t._queryIdentifier);const h=Ro.getListenId_(t,l),m={};this.listens_[h]=m;const g=oy(t._queryParams);this.restRequest_(f+".json",g,(p,E)=>{let v=E;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(f,v,!1,l),$s(this.listens_,h)===m){let b;p?p===401?b="permission_denied":b="rest_error:"+p:b="ok",o(b,null)}})}unlisten(t,i){const l=Ro.getListenId_(t,i);delete this.listens_[l]}get(t){const i=oy(t._queryParams),l=t._path.toString(),o=new Ho;return this.restRequest_(l+".json",i,(f,h)=>{let m=h;f===404&&(m=null,f=null),f===null?(this.onDataUpdate_(l,m,!1,null),o.resolve(m)):o.reject(new Error(m))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},l){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,f])=>{o&&o.accessToken&&(i.auth=o.accessToken),f&&f.token&&(i.ac=f.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+la(i);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(l&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let g=null;if(m.status>=200&&m.status<300){try{g=Sl(m.responseText)}catch{Ct("Failed to parse JSON response for "+h+": "+m.responseText)}l(null,g)}else m.status!==401&&m.status!==404&&Ct("Got unsuccessful REST response for "+h+" Status: "+m.status),l(m.status);l=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return{value:null,children:new Map}}function l0(a,t,i){if(te(t))a.value=i,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(t,i);else{const l=ee(t);a.children.has(l)||a.children.set(l,Oo());const o=a.children.get(l);t=xe(t),l0(o,t,i)}}function Zf(a,t,i){a.value!==null?i(t,a.value):iN(a,(l,o)=>{const f=new we(t.toString()+"/"+l);Zf(o,f,i)})}function iN(a,t){a.children.forEach((i,l)=>{t(l,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i={...t};return this.last_&&wt(this.last_,(l,o)=>{i[l]=i[l]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=10*1e3,aN=30*1e3,lN=300*1e3;class rN{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new sN(t);const l=cy+(aN-cy)*Math.random();pl(this.reportStats_.bind(this),Math.floor(l))}reportStats_(){const t=this.statsListener_.get(),i={};let l=!1;wt(t,(o,f)=>{f>0&&hn(this.statsToReport_,o)&&(i[o]=f,l=!0)}),l&&this.server_.reportStats(i),pl(this.reportStats_.bind(this),Math.floor(Math.random()*2*lN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function r0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ih(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,i,l){this.path=t,this.affectedTree=i,this.revert=l,this.type=nn.ACK_USER_WRITE,this.source=r0()}operationForChild(t){if(te(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new we(t));return new xo(_e(),i,this.revert)}}else return U(ee(this.path)===t,"operationForChild called for unrelated child."),new xo(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,i){this.source=t,this.path=i,this.type=nn.LISTEN_COMPLETE}operationForChild(t){return te(this.path)?new xl(this.source,_e()):new xl(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,i,l){this.source=t,this.path=i,this.snap=l,this.type=nn.OVERWRITE}operationForChild(t){return te(this.path)?new is(this.source,_e(),this.snap.getImmediateChild(t)):new is(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,i,l){this.source=t,this.path=i,this.children=l,this.type=nn.MERGE}operationForChild(t){if(te(this.path)){const i=this.children.subtree(new we(t));return i.isEmpty()?null:i.value?new is(this.source,_e(),i.value):new Ml(this.source,_e(),i)}else return U(ee(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ml(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,i,l){this.node_=t,this.fullyInitialized_=i,this.filtered_=l}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(te(t))return this.isFullyInitialized()&&!this.filtered_;const i=ee(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function uN(a,t,i,l){const o=[],f=[];return t.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&f.push(WA(h.childName,h.snapshotNode))}),cl(a,o,"child_removed",t,l,i),cl(a,o,"child_added",t,l,i),cl(a,o,"child_moved",f,l,i),cl(a,o,"child_changed",t,l,i),cl(a,o,"value",t,l,i),o}function cl(a,t,i,l,o,f){const h=l.filter(m=>m.type===i);h.sort((m,g)=>fN(a,m,g)),h.forEach(m=>{const g=cN(a,m,f);o.forEach(p=>{p.respondsTo(m.type)&&t.push(p.createEvent(g,a.query_))})})}function cN(a,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,a.index_)),t}function fN(a,t,i){if(t.childName==null||i.childName==null)throw sa("Should only compare child_ events.");const l=new ne(t.childName,t.snapshotNode),o=new ne(i.childName,i.snapshotNode);return a.index_.compare(l,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(a,t){return{eventCache:a,serverCache:t}}function gl(a,t,i,l){return Yo(new ss(t,i,l),a.serverCache)}function o0(a,t,i,l){return Yo(a.eventCache,new ss(t,i,l))}function Wf(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function as(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;const hN=()=>(Lf||(Lf=new Tt(Ww)),Lf);class ke{static fromObject(t){let i=new ke(null);return wt(t,(l,o)=>{i=i.set(new we(l),o)}),i}constructor(t,i=hN()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:_e(),value:this.value};if(te(t))return null;{const l=ee(t),o=this.children.get(l);if(o!==null){const f=o.findRootMostMatchingPathAndValue(xe(t),i);return f!=null?{path:Fe(new we(l),f.path),value:f.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(te(t))return this;{const i=ee(t),l=this.children.get(i);return l!==null?l.subtree(xe(t)):new ke(null)}}set(t,i){if(te(t))return new ke(i,this.children);{const l=ee(t),f=(this.children.get(l)||new ke(null)).set(xe(t),i),h=this.children.insert(l,f);return new ke(this.value,h)}}remove(t){if(te(t))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const i=ee(t),l=this.children.get(i);if(l){const o=l.remove(xe(t));let f;return o.isEmpty()?f=this.children.remove(i):f=this.children.insert(i,o),this.value===null&&f.isEmpty()?new ke(null):new ke(this.value,f)}else return this}}get(t){if(te(t))return this.value;{const i=ee(t),l=this.children.get(i);return l?l.get(xe(t)):null}}setTree(t,i){if(te(t))return i;{const l=ee(t),f=(this.children.get(l)||new ke(null)).setTree(xe(t),i);let h;return f.isEmpty()?h=this.children.remove(l):h=this.children.insert(l,f),new ke(this.value,h)}}fold(t){return this.fold_(_e(),t)}fold_(t,i){const l={};return this.children.inorderTraversal((o,f)=>{l[o]=f.fold_(Fe(t,o),i)}),i(t,this.value,l)}findOnPath(t,i){return this.findOnPath_(t,_e(),i)}findOnPath_(t,i,l){const o=this.value?l(i,this.value):!1;if(o)return o;if(te(t))return null;{const f=ee(t),h=this.children.get(f);return h?h.findOnPath_(xe(t),Fe(i,f),l):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,_e(),i)}foreachOnPath_(t,i,l){if(te(t))return this;{this.value&&l(i,this.value);const o=ee(t),f=this.children.get(o);return f?f.foreachOnPath_(xe(t),Fe(i,o),l):new ke(null)}}foreach(t){this.foreach_(_e(),t)}foreach_(t,i){this.children.inorderTraversal((l,o)=>{o.foreach_(Fe(t,l),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,l)=>{l.value&&t(i,l.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.writeTree_=t}static empty(){return new sn(new ke(null))}}function _l(a,t,i){if(te(t))return new sn(new ke(i));{const l=a.writeTree_.findRootMostValueAndPath(t);if(l!=null){const o=l.path;let f=l.value;const h=St(o,t);return f=f.updateChild(h,i),new sn(a.writeTree_.set(o,f))}else{const o=new ke(i),f=a.writeTree_.setTree(t,o);return new sn(f)}}}function fy(a,t,i){let l=a;return wt(i,(o,f)=>{l=_l(l,Fe(t,o),f)}),l}function hy(a,t){if(te(t))return sn.empty();{const i=a.writeTree_.setTree(t,new ke(null));return new sn(i)}}function Jf(a,t){return ls(a,t)!=null}function ls(a,t){const i=a.writeTree_.findRootMostValueAndPath(t);return i!=null?a.writeTree_.get(i.path).getChild(St(i.path,t)):null}function dy(a){const t=[],i=a.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(Ue,(l,o)=>{t.push(new ne(l,o))}):a.writeTree_.children.inorderTraversal((l,o)=>{o.value!=null&&t.push(new ne(l,o.value))}),t}function Ti(a,t){if(te(t))return a;{const i=ls(a,t);return i!=null?new sn(new ke(i)):new sn(a.writeTree_.subtree(t))}}function $f(a){return a.writeTree_.isEmpty()}function na(a,t){return u0(_e(),a.writeTree_,t)}function u0(a,t,i){if(t.value!=null)return i.updateChild(a,t.value);{let l=null;return t.children.inorderTraversal((o,f)=>{o===".priority"?(U(f.value!==null,"Priority writes must always be leaf nodes"),l=f.value):i=u0(Fe(a,o),f,i)}),!i.getChild(a).isEmpty()&&l!==null&&(i=i.updateChild(Fe(a,".priority"),l)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(a,t){return d0(t,a)}function dN(a,t,i,l,o){U(l>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:t,snap:i,writeId:l,visible:o}),o&&(a.visibleWrites=_l(a.visibleWrites,t,i)),a.lastWriteId=l}function mN(a,t){for(let i=0;i<a.allWrites.length;i++){const l=a.allWrites[i];if(l.writeId===t)return l}return null}function pN(a,t){const i=a.allWrites.findIndex(m=>m.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const l=a.allWrites[i];a.allWrites.splice(i,1);let o=l.visible,f=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const m=a.allWrites[h];m.visible&&(h>=i&&gN(m,l.path)?o=!1:tn(l.path,m.path)&&(f=!0)),h--}if(o){if(f)return _N(a),!0;if(l.snap)a.visibleWrites=hy(a.visibleWrites,l.path);else{const m=l.children;wt(m,g=>{a.visibleWrites=hy(a.visibleWrites,Fe(l.path,g))})}return!0}else return!1}function gN(a,t){if(a.snap)return tn(a.path,t);for(const i in a.children)if(a.children.hasOwnProperty(i)&&tn(Fe(a.path,i),t))return!0;return!1}function _N(a){a.visibleWrites=c0(a.allWrites,yN,_e()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function yN(a){return a.visible}function c0(a,t,i){let l=sn.empty();for(let o=0;o<a.length;++o){const f=a[o];if(t(f)){const h=f.path;let m;if(f.snap)tn(i,h)?(m=St(i,h),l=_l(l,m,f.snap)):tn(h,i)&&(m=St(h,i),l=_l(l,_e(),f.snap.getChild(m)));else if(f.children){if(tn(i,h))m=St(i,h),l=fy(l,m,f.children);else if(tn(h,i))if(m=St(h,i),te(m))l=fy(l,_e(),f.children);else{const g=$s(f.children,ee(m));if(g){const p=g.getChild(xe(m));l=_l(l,_e(),p)}}}else throw sa("WriteRecord should have .snap or .children")}}return l}function f0(a,t,i,l,o){if(!l&&!o){const f=ls(a.visibleWrites,t);if(f!=null)return f;{const h=Ti(a.visibleWrites,t);if($f(h))return i;if(i==null&&!Jf(h,_e()))return null;{const m=i||X.EMPTY_NODE;return na(h,m)}}}else{const f=Ti(a.visibleWrites,t);if(!o&&$f(f))return i;if(!o&&i==null&&!Jf(f,_e()))return null;{const h=function(p){return(p.visible||o)&&(!l||!~l.indexOf(p.writeId))&&(tn(p.path,t)||tn(t,p.path))},m=c0(a.allWrites,h,t),g=i||X.EMPTY_NODE;return na(m,g)}}}function vN(a,t,i){let l=X.EMPTY_NODE;const o=ls(a.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Ue,(f,h)=>{l=l.updateImmediateChild(f,h)}),l;if(i){const f=Ti(a.visibleWrites,t);return i.forEachChild(Ue,(h,m)=>{const g=na(Ti(f,new we(h)),m);l=l.updateImmediateChild(h,g)}),dy(f).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}else{const f=Ti(a.visibleWrites,t);return dy(f).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}}function bN(a,t,i,l,o){U(l||o,"Either existingEventSnap or existingServerSnap must exist");const f=Fe(t,i);if(Jf(a.visibleWrites,f))return null;{const h=Ti(a.visibleWrites,f);return $f(h)?o.getChild(i):na(h,o.getChild(i))}}function EN(a,t,i,l){const o=Fe(t,i),f=ls(a.visibleWrites,o);if(f!=null)return f;if(l.isCompleteForChild(i)){const h=Ti(a.visibleWrites,o);return na(h,l.getNode().getImmediateChild(i))}else return null}function SN(a,t){return ls(a.visibleWrites,t)}function TN(a,t,i,l,o,f,h){let m;const g=Ti(a.visibleWrites,t),p=ls(g,_e());if(p!=null)m=p;else if(i!=null)m=na(g,i);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const E=[],v=h.getCompare(),b=f?m.getReverseIteratorFrom(l,h):m.getIteratorFrom(l,h);let L=b.getNext();for(;L&&E.length<o;)v(L,l)!==0&&E.push(L),L=b.getNext();return E}else return[]}function CN(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Mo(a,t,i,l){return f0(a.writeTree,a.treePath,t,i,l)}function Lh(a,t){return vN(a.writeTree,a.treePath,t)}function my(a,t,i,l){return bN(a.writeTree,a.treePath,t,i,l)}function Do(a,t){return SN(a.writeTree,Fe(a.treePath,t))}function wN(a,t,i,l,o,f){return TN(a.writeTree,a.treePath,t,i,l,o,f)}function Uh(a,t,i){return EN(a.writeTree,a.treePath,t,i)}function h0(a,t){return d0(Fe(a.treePath,t),a.writeTree)}function d0(a,t){return{treePath:a,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,l=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(l!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(l);if(o){const f=o.type;if(i==="child_added"&&f==="child_removed")this.changeMap.set(l,Rl(l,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&f==="child_added")this.changeMap.delete(l);else if(i==="child_removed"&&f==="child_changed")this.changeMap.set(l,Nl(l,o.oldSnap));else if(i==="child_changed"&&f==="child_added")this.changeMap.set(l,ta(l,t.snapshotNode));else if(i==="child_changed"&&f==="child_changed")this.changeMap.set(l,Rl(l,t.snapshotNode,o.oldSnap));else throw sa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(l,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{getCompleteChild(t){return null}getChildAfterChild(t,i,l){return null}}const m0=new NN;class zh{constructor(t,i,l=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=l}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const l=this.optCompleteServerCache_!=null?new ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uh(this.writes_,t,l)}}getChildAfterChild(t,i,l){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:as(this.viewCache_),f=wN(this.writes_,o,i,1,l,t);return f.length===0?null:f[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(a){return{filter:a}}function ON(a,t){U(t.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function xN(a,t,i,l,o){const f=new AN;let h,m;if(i.type===nn.OVERWRITE){const p=i;p.source.fromUser?h=eh(a,t,p.path,p.snap,l,o,f):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered()&&!te(p.path),h=Io(a,t,p.path,p.snap,l,o,m,f))}else if(i.type===nn.MERGE){const p=i;p.source.fromUser?h=DN(a,t,p.path,p.children,l,o,f):(U(p.source.fromServer,"Unknown source."),m=p.source.tagged||t.serverCache.isFiltered(),h=th(a,t,p.path,p.children,l,o,m,f))}else if(i.type===nn.ACK_USER_WRITE){const p=i;p.revert?h=LN(a,t,p.path,l,o,f):h=IN(a,t,p.path,p.affectedTree,l,o,f)}else if(i.type===nn.LISTEN_COMPLETE)h=kN(a,t,i.path,l,f);else throw sa("Unknown operation type: "+i.type);const g=f.getChanges();return MN(t,h,g),{viewCache:h,changes:g}}function MN(a,t,i){const l=t.eventCache;if(l.isFullyInitialized()){const o=l.getNode().isLeafNode()||l.getNode().isEmpty(),f=Wf(a);(i.length>0||!a.eventCache.isFullyInitialized()||o&&!l.getNode().equals(f)||!l.getNode().getPriority().equals(f.getPriority()))&&i.push(a0(Wf(t)))}}function p0(a,t,i,l,o,f){const h=t.eventCache;if(Do(l,i)!=null)return t;{let m,g;if(te(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=as(t),E=p instanceof X?p:X.EMPTY_NODE,v=Lh(l,E);m=a.filter.updateFullNode(t.eventCache.getNode(),v,f)}else{const p=Mo(l,as(t));m=a.filter.updateFullNode(t.eventCache.getNode(),p,f)}else{const p=ee(i);if(p===".priority"){U(Ai(i)===1,"Can't have a priority with additional path components");const E=h.getNode();g=t.serverCache.getNode();const v=my(l,i,E,g);v!=null?m=a.filter.updatePriority(E,v):m=h.getNode()}else{const E=xe(i);let v;if(h.isCompleteForChild(p)){g=t.serverCache.getNode();const b=my(l,i,h.getNode(),g);b!=null?v=h.getNode().getImmediateChild(p).updateChild(E,b):v=h.getNode().getImmediateChild(p)}else v=Uh(l,p,t.serverCache);v!=null?m=a.filter.updateChild(h.getNode(),p,v,E,o,f):m=h.getNode()}}return gl(t,m,h.isFullyInitialized()||te(i),a.filter.filtersNodes())}}function Io(a,t,i,l,o,f,h,m){const g=t.serverCache;let p;const E=h?a.filter:a.filter.getIndexedFilter();if(te(i))p=E.updateFullNode(g.getNode(),l,null);else if(E.filtersNodes()&&!g.isFiltered()){const L=g.getNode().updateChild(i,l);p=E.updateFullNode(g.getNode(),L,null)}else{const L=ee(i);if(!g.isCompleteForPath(i)&&Ai(i)>1)return t;const H=xe(i),he=g.getNode().getImmediateChild(L).updateChild(H,l);L===".priority"?p=E.updatePriority(g.getNode(),he):p=E.updateChild(g.getNode(),L,he,H,m0,null)}const v=o0(t,p,g.isFullyInitialized()||te(i),E.filtersNodes()),b=new zh(o,v,f);return p0(a,v,i,o,b,m)}function eh(a,t,i,l,o,f,h){const m=t.eventCache;let g,p;const E=new zh(o,t,f);if(te(i))p=a.filter.updateFullNode(t.eventCache.getNode(),l,h),g=gl(t,p,!0,a.filter.filtersNodes());else{const v=ee(i);if(v===".priority")p=a.filter.updatePriority(t.eventCache.getNode(),l),g=gl(t,p,m.isFullyInitialized(),m.isFiltered());else{const b=xe(i),L=m.getNode().getImmediateChild(v);let H;if(te(b))H=l;else{const Q=E.getCompleteChild(v);Q!=null?Kv(b)===".priority"&&Q.getChild(Wv(b)).isEmpty()?H=Q:H=Q.updateChild(b,l):H=X.EMPTY_NODE}if(L.equals(H))g=t;else{const Q=a.filter.updateChild(m.getNode(),v,H,b,E,h);g=gl(t,Q,m.isFullyInitialized(),a.filter.filtersNodes())}}}return g}function py(a,t){return a.eventCache.isCompleteForChild(t)}function DN(a,t,i,l,o,f,h){let m=t;return l.foreach((g,p)=>{const E=Fe(i,g);py(t,ee(E))&&(m=eh(a,m,E,p,o,f,h))}),l.foreach((g,p)=>{const E=Fe(i,g);py(t,ee(E))||(m=eh(a,m,E,p,o,f,h))}),m}function gy(a,t,i){return i.foreach((l,o)=>{t=t.updateChild(l,o)}),t}function th(a,t,i,l,o,f,h,m){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let g=t,p;te(i)?p=l:p=new ke(null).setTree(i,l);const E=t.serverCache.getNode();return p.children.inorderTraversal((v,b)=>{if(E.hasChild(v)){const L=t.serverCache.getNode().getImmediateChild(v),H=gy(a,L,b);g=Io(a,g,new we(v),H,o,f,h,m)}}),p.children.inorderTraversal((v,b)=>{const L=!t.serverCache.isCompleteForChild(v)&&b.value===null;if(!E.hasChild(v)&&!L){const H=t.serverCache.getNode().getImmediateChild(v),Q=gy(a,H,b);g=Io(a,g,new we(v),Q,o,f,h,m)}}),g}function IN(a,t,i,l,o,f,h){if(Do(o,i)!=null)return t;const m=t.serverCache.isFiltered(),g=t.serverCache;if(l.value!=null){if(te(i)&&g.isFullyInitialized()||g.isCompleteForPath(i))return Io(a,t,i,g.getNode().getChild(i),o,f,m,h);if(te(i)){let p=new ke(null);return g.getNode().forEachChild(Ji,(E,v)=>{p=p.set(new we(E),v)}),th(a,t,i,p,o,f,m,h)}else return t}else{let p=new ke(null);return l.foreach((E,v)=>{const b=Fe(i,E);g.isCompleteForPath(b)&&(p=p.set(E,g.getNode().getChild(b)))}),th(a,t,i,p,o,f,m,h)}}function kN(a,t,i,l,o){const f=t.serverCache,h=o0(t,f.getNode(),f.isFullyInitialized()||te(i),f.isFiltered());return p0(a,h,i,l,m0,o)}function LN(a,t,i,l,o,f){let h;if(Do(l,i)!=null)return t;{const m=new zh(l,t,o),g=t.eventCache.getNode();let p;if(te(i)||ee(i)===".priority"){let E;if(t.serverCache.isFullyInitialized())E=Mo(l,as(t));else{const v=t.serverCache.getNode();U(v instanceof X,"serverChildren would be complete if leaf node"),E=Lh(l,v)}E=E,p=a.filter.updateFullNode(g,E,f)}else{const E=ee(i);let v=Uh(l,E,t.serverCache);v==null&&t.serverCache.isCompleteForChild(E)&&(v=g.getImmediateChild(E)),v!=null?p=a.filter.updateChild(g,E,v,xe(i),m,f):t.eventCache.getNode().hasChild(E)?p=a.filter.updateChild(g,E,X.EMPTY_NODE,xe(i),m,f):p=g,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Mo(l,as(t)),h.isLeafNode()&&(p=a.filter.updateFullNode(p,h,f)))}return h=t.serverCache.isFullyInitialized()||Do(l,_e())!=null,gl(t,p,h,a.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const l=this.query_._queryParams,o=new xh(l.getIndex()),f=$A(l);this.processor_=RN(f);const h=i.serverCache,m=i.eventCache,g=o.updateFullNode(X.EMPTY_NODE,h.getNode(),null),p=f.updateFullNode(X.EMPTY_NODE,m.getNode(),null),E=new ss(g,h.isFullyInitialized(),o.filtersNodes()),v=new ss(p,m.isFullyInitialized(),f.filtersNodes());this.viewCache_=Yo(v,E),this.eventGenerator_=new oN(this.query_)}get query(){return this.query_}}function zN(a){return a.viewCache_.serverCache.getNode()}function HN(a,t){const i=as(a.viewCache_);return i&&(a.query._queryParams.loadsAllData()||!te(t)&&!i.getImmediateChild(ee(t)).isEmpty())?i.getChild(t):null}function _y(a){return a.eventRegistrations_.length===0}function BN(a,t){a.eventRegistrations_.push(t)}function yy(a,t,i){const l=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(f=>{const h=f.createCancelEvent(i,o);h&&l.push(h)})}if(t){let o=[];for(let f=0;f<a.eventRegistrations_.length;++f){const h=a.eventRegistrations_[f];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(f+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return l}function vy(a,t,i,l){t.type===nn.MERGE&&t.source.queryId!==null&&(U(as(a.viewCache_),"We should always have a full cache before handling merges"),U(Wf(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,f=xN(a.processor_,o,t,i,l);return ON(a.processor_,f.viewCache),U(f.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=f.viewCache,g0(a,f.changes,f.viewCache.eventCache.getNode(),null)}function jN(a,t){const i=a.viewCache_.eventCache,l=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(Ue,(f,h)=>{l.push(ta(f,h))}),i.isFullyInitialized()&&l.push(a0(i.getNode())),g0(a,l,i.getNode(),t)}function g0(a,t,i,l){const o=l?[l]:a.eventRegistrations_;return uN(a.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class qN{constructor(){this.views=new Map}}function VN(a){U(!ko,"__referenceConstructor has already been defined"),ko=a}function GN(){return U(ko,"Reference.ts has not been loaded"),ko}function PN(a){return a.views.size===0}function Hh(a,t,i,l){const o=t.source.queryId;if(o!==null){const f=a.views.get(o);return U(f!=null,"SyncTree gave us an op for an invalid query."),vy(f,t,i,l)}else{let f=[];for(const h of a.views.values())f=f.concat(vy(h,t,i,l));return f}}function YN(a,t,i,l,o){const f=t._queryIdentifier,h=a.views.get(f);if(!h){let m=Mo(i,o?l:null),g=!1;m?g=!0:l instanceof X?(m=Lh(i,l),g=!1):(m=X.EMPTY_NODE,g=!1);const p=Yo(new ss(m,g,!1),new ss(l,o,!1));return new UN(t,p)}return h}function QN(a,t,i,l,o,f){const h=YN(a,t,l,o,f);return a.views.has(t._queryIdentifier)||a.views.set(t._queryIdentifier,h),BN(h,i),jN(h,i)}function FN(a,t,i,l){const o=t._queryIdentifier,f=[];let h=[];const m=Ni(a);if(o==="default")for(const[g,p]of a.views.entries())h=h.concat(yy(p,i,l)),_y(p)&&(a.views.delete(g),p.query._queryParams.loadsAllData()||f.push(p.query));else{const g=a.views.get(o);g&&(h=h.concat(yy(g,i,l)),_y(g)&&(a.views.delete(o),g.query._queryParams.loadsAllData()||f.push(g.query)))}return m&&!Ni(a)&&f.push(new(GN())(t._repo,t._path)),{removed:f,events:h}}function _0(a){const t=[];for(const i of a.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Js(a,t){let i=null;for(const l of a.views.values())i=i||HN(l,t);return i}function y0(a,t){if(t._queryParams.loadsAllData())return Qo(a);{const l=t._queryIdentifier;return a.views.get(l)}}function v0(a,t){return y0(a,t)!=null}function Ni(a){return Qo(a)!=null}function Qo(a){for(const t of a.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;function XN(a){U(!Lo,"__referenceConstructor has already been defined"),Lo=a}function KN(){return U(Lo,"Reference.ts has not been loaded"),Lo}let ZN=1;class by{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ke(null),this.pendingWriteTree_=CN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b0(a,t,i,l,o){return dN(a.pendingWriteTree_,t,i,l,o),o?jl(a,new is(r0(),t,i)):[]}function Wi(a,t,i=!1){const l=mN(a.pendingWriteTree_,t);if(pN(a.pendingWriteTree_,t)){let f=new ke(null);return l.snap!=null?f=f.set(_e(),!0):wt(l.children,h=>{f=f.set(new we(h),!0)}),jl(a,new xo(l.path,f,i))}else return[]}function Fo(a,t,i){return jl(a,new is(Dh(),t,i))}function WN(a,t,i){const l=ke.fromObject(i);return jl(a,new Ml(Dh(),t,l))}function JN(a,t){return jl(a,new xl(Dh(),t))}function $N(a,t,i){const l=jh(a,i);if(l){const o=qh(l),f=o.path,h=o.queryId,m=St(f,t),g=new xl(Ih(h),m);return Vh(a,f,g)}else return[]}function nh(a,t,i,l,o=!1){const f=t._path,h=a.syncPointTree_.get(f);let m=[];if(h&&(t._queryIdentifier==="default"||v0(h,t))){const g=FN(h,t,i,l);PN(h)&&(a.syncPointTree_=a.syncPointTree_.remove(f));const p=g.removed;if(m=g.events,!o){const E=p.findIndex(b=>b._queryParams.loadsAllData())!==-1,v=a.syncPointTree_.findOnPath(f,(b,L)=>Ni(L));if(E&&!v){const b=a.syncPointTree_.subtree(f);if(!b.isEmpty()){const L=nR(b);for(let H=0;H<L.length;++H){const Q=L[H],he=Q.query,pe=T0(a,Q);a.listenProvider_.startListening(yl(he),Uo(a,he),pe.hashFn,pe.onComplete)}}}!v&&p.length>0&&!l&&(E?a.listenProvider_.stopListening(yl(t),null):p.forEach(b=>{const L=a.queryToTagMap.get(Xo(b));a.listenProvider_.stopListening(yl(b),L)}))}iR(a,p)}return m}function eR(a,t,i,l){const o=jh(a,l);if(o!=null){const f=qh(o),h=f.path,m=f.queryId,g=St(h,t),p=new is(Ih(m),g,i);return Vh(a,h,p)}else return[]}function tR(a,t,i,l){const o=jh(a,l);if(o){const f=qh(o),h=f.path,m=f.queryId,g=St(h,t),p=ke.fromObject(i),E=new Ml(Ih(m),g,p);return Vh(a,h,E)}else return[]}function Ey(a,t,i,l=!1){const o=t._path;let f=null,h=!1;a.syncPointTree_.foreachOnPath(o,(b,L)=>{const H=St(b,o);f=f||Js(L,H),h=h||Ni(L)});let m=a.syncPointTree_.get(o);m?(h=h||Ni(m),f=f||Js(m,_e())):(m=new qN,a.syncPointTree_=a.syncPointTree_.set(o,m));let g;f!=null?g=!0:(g=!1,f=X.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((L,H)=>{const Q=Js(H,_e());Q&&(f=f.updateImmediateChild(L,Q))}));const p=v0(m,t);if(!p&&!t._queryParams.loadsAllData()){const b=Xo(t);U(!a.queryToTagMap.has(b),"View does not exist, but we have a tag");const L=sR();a.queryToTagMap.set(b,L),a.tagToQueryMap.set(L,b)}const E=kh(a.pendingWriteTree_,o);let v=QN(m,t,i,E,f,g);if(!p&&!h&&!l){const b=y0(m,t);v=v.concat(aR(a,t,b))}return v}function Bh(a,t,i){const o=a.pendingWriteTree_,f=a.syncPointTree_.findOnPath(t,(h,m)=>{const g=St(h,t),p=Js(m,g);if(p)return p});return f0(o,t,f,i,!0)}function jl(a,t){return E0(t,a.syncPointTree_,null,kh(a.pendingWriteTree_,_e()))}function E0(a,t,i,l){if(te(a.path))return S0(a,t,i,l);{const o=t.get(_e());i==null&&o!=null&&(i=Js(o,_e()));let f=[];const h=ee(a.path),m=a.operationForChild(h),g=t.children.get(h);if(g&&m){const p=i?i.getImmediateChild(h):null,E=h0(l,h);f=f.concat(E0(m,g,p,E))}return o&&(f=f.concat(Hh(o,a,l,i))),f}}function S0(a,t,i,l){const o=t.get(_e());i==null&&o!=null&&(i=Js(o,_e()));let f=[];return t.children.inorderTraversal((h,m)=>{const g=i?i.getImmediateChild(h):null,p=h0(l,h),E=a.operationForChild(h);E&&(f=f.concat(S0(E,m,g,p)))}),o&&(f=f.concat(Hh(o,a,l,i))),f}function T0(a,t){const i=t.query,l=Uo(a,i);return{hashFn:()=>(zN(t)||X.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return l?$N(a,i._path,l):JN(a,i._path);{const f=eA(o,i);return nh(a,i,null,f)}}}}function Uo(a,t){const i=Xo(t);return a.queryToTagMap.get(i)}function Xo(a){return a._path.toString()+"$"+a._queryIdentifier}function jh(a,t){return a.tagToQueryMap.get(t)}function qh(a){const t=a.indexOf("$");return U(t!==-1&&t<a.length-1,"Bad queryKey."),{queryId:a.substr(t+1),path:new we(a.substr(0,t))}}function Vh(a,t,i){const l=a.syncPointTree_.get(t);U(l,"Missing sync point for query tag that we're tracking");const o=kh(a.pendingWriteTree_,t);return Hh(l,i,o,null)}function nR(a){return a.fold((t,i,l)=>{if(i&&Ni(i))return[Qo(i)];{let o=[];return i&&(o=_0(i)),wt(l,(f,h)=>{o=o.concat(h)}),o}})}function yl(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(KN())(a._repo,a._path):a}function iR(a,t){for(let i=0;i<t.length;++i){const l=t[i];if(!l._queryParams.loadsAllData()){const o=Xo(l),f=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(f)}}}function sR(){return ZN++}function aR(a,t,i){const l=t._path,o=Uo(a,t),f=T0(a,i),h=a.listenProvider_.startListening(yl(t),o,f.hashFn,f.onComplete),m=a.syncPointTree_.subtree(l);if(o)U(!Ni(m.value),"If we're adding a query, it shouldn't be shadowed");else{const g=m.fold((p,E,v)=>{if(!te(p)&&E&&Ni(E))return[Qo(E).query];{let b=[];return E&&(b=b.concat(_0(E).map(L=>L.query))),wt(v,(L,H)=>{b=b.concat(H)}),b}});for(let p=0;p<g.length;++p){const E=g[p];a.listenProvider_.stopListening(yl(E),Uo(a,E))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Gh(i)}node(){return this.node_}}class Ph{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Fe(this.path_,t);return new Ph(this.syncTree_,i)}node(){return Bh(this.syncTree_,this.path_)}}const lR=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},Sy=function(a,t,i){if(!a||typeof a!="object")return a;if(U(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return rR(a[".sv"],t,i);if(typeof a[".sv"]=="object")return oR(a[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},rR=function(a,t,i){switch(a){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+a)}},oR=function(a,t,i){a.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const l=a.increment;typeof l!="number"&&U(!1,"Unexpected increment value: "+l);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return l;const h=o.getValue();return typeof h!="number"?l:h+l},uR=function(a,t,i,l){return Yh(t,new Ph(i,a),l)},C0=function(a,t,i){return Yh(a,new Gh(t),i)};function Yh(a,t,i){const l=a.getPriority().val(),o=Sy(l,t.getImmediateChild(".priority"),i);let f;if(a.isLeafNode()){const h=a,m=Sy(h.getValue(),t,i);return m!==h.getValue()||o!==h.getPriority().val()?new We(m,rt(o)):a}else{const h=a;return f=h,o!==h.getPriority().val()&&(f=f.updatePriority(new We(o))),h.forEachChild(Ue,(m,g)=>{const p=Yh(g,t.getImmediateChild(m),i);p!==g&&(f=f.updateImmediateChild(m,p))}),f}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t="",i=null,l={children:{},childCount:0}){this.name=t,this.parent=i,this.node=l}}function Fh(a,t){let i=t instanceof we?t:new we(t),l=a,o=ee(i);for(;o!==null;){const f=$s(l.node.children,o)||{children:{},childCount:0};l=new Qh(o,l,f),i=xe(i),o=ee(i)}return l}function fa(a){return a.node.value}function w0(a,t){a.node.value=t,ih(a)}function A0(a){return a.node.childCount>0}function cR(a){return fa(a)===void 0&&!A0(a)}function Ko(a,t){wt(a.node.children,(i,l)=>{t(new Qh(i,a,l))})}function N0(a,t,i,l){i&&t(a),Ko(a,o=>{N0(o,t,!0)})}function fR(a,t,i){let l=a.parent;for(;l!==null;){if(t(l))return!0;l=l.parent}return!1}function ql(a){return new we(a.parent===null?a.name:ql(a.parent)+"/"+a.name)}function ih(a){a.parent!==null&&hR(a.parent,a.name,a)}function hR(a,t,i){const l=cR(i),o=hn(a.node.children,t);l&&o?(delete a.node.children[t],a.node.childCount--,ih(a)):!l&&!o&&(a.node.children[t]=i.node,a.node.childCount++,ih(a))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=/[\[\].#$\/\u0000-\u001F\u007F]/,mR=/[\[\].#$\u0000-\u001F\u007F]/,Uf=10*1024*1024,R0=function(a){return typeof a=="string"&&a.length!==0&&!dR.test(a)},O0=function(a){return typeof a=="string"&&a.length!==0&&!mR.test(a)},pR=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),O0(a)},Ty=function(a){return a===null||typeof a=="string"||typeof a=="number"&&!Eh(a)||a&&typeof a=="object"&&hn(a,".sv")},x0=function(a,t,i,l){l&&t===void 0||Xh(uh(a,"value"),t,i)},Xh=function(a,t,i){const l=i instanceof we?new IA(i,a):i;if(t===void 0)throw new Error(a+"contains undefined "+Ki(l));if(typeof t=="function")throw new Error(a+"contains a function "+Ki(l)+" with contents = "+t.toString());if(Eh(t))throw new Error(a+"contains "+t.toString()+" "+Ki(l));if(typeof t=="string"&&t.length>Uf/3&&Bo(t)>Uf)throw new Error(a+"contains a string greater than "+Uf+" utf8 bytes "+Ki(l)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,f=!1;if(wt(t,(h,m)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(f=!0,!R0(h)))throw new Error(a+" contains an invalid key ("+h+") "+Ki(l)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kA(l,h),Xh(a,m,l),LA(l)}),o&&f)throw new Error(a+' contains ".value" child '+Ki(l)+" in addition to actual children.")}},Kh=function(a,t,i,l){if(!O0(i))throw new Error(uh(a,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gR=function(a,t,i,l){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Kh(a,t,i)},Zh=function(a,t){if(ee(t)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},_R=function(a,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!R0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!pR(i))throw new Error(uh(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wh(a,t){let i=null;for(let l=0;l<t.length;l++){const o=t[l],f=o.getPath();i!==null&&!Ah(f,i.path)&&(a.eventLists_.push(i),i=null),i===null&&(i={events:[],path:f}),i.events.push(o)}i&&a.eventLists_.push(i)}function M0(a,t,i){Wh(a,i),D0(a,l=>Ah(l,t))}function qn(a,t,i){Wh(a,i),D0(a,l=>tn(l,t)||tn(t,l))}function D0(a,t){a.recursionDepth_++;let i=!0;for(let l=0;l<a.eventLists_.length;l++){const o=a.eventLists_[l];if(o){const f=o.path;t(f)?(vR(a.eventLists_[l]),a.eventLists_[l]=null):i=!1}}i&&(a.eventLists_=[]),a.recursionDepth_--}function vR(a){for(let t=0;t<a.events.length;t++){const i=a.events[t];if(i!==null){a.events[t]=null;const l=i.getEventRunner();ml&&ct("event: "+i.toString()),ca(l)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="repo_interrupt",ER=25;class SR{constructor(t,i,l,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=l,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new Qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TR(a,t,i){if(a.stats_=Ch(a.repoInfo_),a.forceRestClient_||sA())a.server_=new Ro(a.repoInfo_,(l,o,f,h)=>{Cy(a,l,o,f,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>wy(a,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(i)}catch(l){throw new Error("Invalid authOverride provided: "+l)}}a.persistentConnection_=new Un(a.repoInfo_,t,(l,o,f,h)=>{Cy(a,l,o,f,h)},l=>{wy(a,l)},l=>{CR(a,l)},a.authTokenProvider_,a.appCheckProvider_,i),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(l=>{a.server_.refreshAuthToken(l)}),a.appCheckProvider_.addTokenChangeListener(l=>{a.server_.refreshAppCheckToken(l.token)}),a.statsReporter_=uA(a.repoInfo_,()=>new rN(a.stats_,a.server_)),a.infoData_=new nN,a.infoSyncTree_=new by({startListening:(l,o,f,h)=>{let m=[];const g=a.infoData_.getNode(l._path);return g.isEmpty()||(m=Fo(a.infoSyncTree_,l._path,g),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),$h(a,"connected",!1),a.serverSyncTree_=new by({startListening:(l,o,f,h)=>(a.server_.listen(l,f,o,(m,g)=>{const p=h(m,g);qn(a.eventQueue_,l._path,p)}),[]),stopListening:(l,o)=>{a.server_.unlisten(l,o)}})}function I0(a){const i=a.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Jh(a){return lR({timestamp:I0(a)})}function Cy(a,t,i,l,o){a.dataUpdateCount++;const f=new we(t);i=a.interceptServerDataCallback_?a.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(l){const g=yo(i,p=>rt(p));h=tR(a.serverSyncTree_,f,g,o)}else{const g=rt(i);h=eR(a.serverSyncTree_,f,g,o)}else if(l){const g=yo(i,p=>rt(p));h=WN(a.serverSyncTree_,f,g)}else{const g=rt(i);h=Fo(a.serverSyncTree_,f,g)}let m=f;h.length>0&&(m=Zo(a,f)),qn(a.eventQueue_,m,h)}function wy(a,t){$h(a,"connected",t),t===!1&&AR(a)}function CR(a,t){wt(t,(i,l)=>{$h(a,i,l)})}function $h(a,t,i){const l=new we("/.info/"+t),o=rt(i);a.infoData_.updateSnapshot(l,o);const f=Fo(a.infoSyncTree_,l,o);qn(a.eventQueue_,l,f)}function k0(a){return a.nextWriteId_++}function wR(a,t,i,l,o){ed(a,"set",{path:t.toString(),value:i,priority:l});const f=Jh(a),h=rt(i,l),m=Bh(a.serverSyncTree_,t),g=C0(h,m,f),p=k0(a),E=b0(a.serverSyncTree_,t,g,p,!0);Wh(a.eventQueue_,E),a.server_.put(t.toString(),h.val(!0),(b,L)=>{const H=b==="ok";H||Ct("set at "+t+" failed: "+b);const Q=Wi(a.serverSyncTree_,p,!H);qn(a.eventQueue_,t,Q),OR(a,o,b,L)});const v=B0(a,t);Zo(a,v),qn(a.eventQueue_,v,[])}function AR(a){ed(a,"onDisconnectEvents");const t=Jh(a),i=Oo();Zf(a.onDisconnect_,_e(),(o,f)=>{const h=uR(o,f,a.serverSyncTree_,t);l0(i,o,h)});let l=[];Zf(i,_e(),(o,f)=>{l=l.concat(Fo(a.serverSyncTree_,o,f));const h=B0(a,o);Zo(a,h)}),a.onDisconnect_=Oo(),qn(a.eventQueue_,_e(),l)}function NR(a,t,i){let l;ee(t._path)===".info"?l=Ey(a.infoSyncTree_,t,i):l=Ey(a.serverSyncTree_,t,i),M0(a.eventQueue_,t._path,l)}function Ay(a,t,i){let l;ee(t._path)===".info"?l=nh(a.infoSyncTree_,t,i):l=nh(a.serverSyncTree_,t,i),M0(a.eventQueue_,t._path,l)}function RR(a){a.persistentConnection_&&a.persistentConnection_.interrupt(bR)}function ed(a,...t){let i="";a.persistentConnection_&&(i=a.persistentConnection_.id+":"),ct(i,...t)}function OR(a,t,i,l){t&&ca(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let f=o;l&&(f+=": "+l);const h=new Error(f);h.code=o,t(h)}})}function L0(a,t,i){return Bh(a.serverSyncTree_,t,i)||X.EMPTY_NODE}function td(a,t=a.transactionQueueTree_){if(t||Wo(a,t),fa(t)){const i=z0(a,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&xR(a,ql(t),i)}else A0(t)&&Ko(t,i=>{td(a,i)})}function xR(a,t,i){const l=i.map(p=>p.currentWriteId),o=L0(a,t,l);let f=o;const h=o.hash();for(let p=0;p<i.length;p++){const E=i[p];U(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const v=St(t,E.path);f=f.updateChild(v,E.currentOutputSnapshotRaw)}const m=f.val(!0),g=t;a.server_.put(g.toString(),m,p=>{ed(a,"transaction put response",{path:g.toString(),status:p});let E=[];if(p==="ok"){const v=[];for(let b=0;b<i.length;b++)i[b].status=2,E=E.concat(Wi(a.serverSyncTree_,i[b].currentWriteId)),i[b].onComplete&&v.push(()=>i[b].onComplete(null,!0,i[b].currentOutputSnapshotResolved)),i[b].unwatcher();Wo(a,Fh(a.transactionQueueTree_,t)),td(a,a.transactionQueueTree_),qn(a.eventQueue_,t,E);for(let b=0;b<v.length;b++)ca(v[b])}else{if(p==="datastale")for(let v=0;v<i.length;v++)i[v].status===3?i[v].status=4:i[v].status=0;else{Ct("transaction at "+g.toString()+" failed: "+p);for(let v=0;v<i.length;v++)i[v].status=4,i[v].abortReason=p}Zo(a,t)}},h)}function Zo(a,t){const i=U0(a,t),l=ql(i),o=z0(a,i);return MR(a,o,l),l}function MR(a,t,i){if(t.length===0)return;const l=[];let o=[];const h=t.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<t.length;m++){const g=t[m],p=St(i,g.path);let E=!1,v;if(U(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)E=!0,v=g.abortReason,o=o.concat(Wi(a.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=ER)E=!0,v="maxretry",o=o.concat(Wi(a.serverSyncTree_,g.currentWriteId,!0));else{const b=L0(a,g.path,h);g.currentInputSnapshot=b;const L=t[m].update(b.val());if(L!==void 0){Xh("transaction failed: Data returned ",L,g.path);let H=rt(L);typeof L=="object"&&L!=null&&hn(L,".priority")||(H=H.updatePriority(b.getPriority()));const he=g.currentWriteId,pe=Jh(a),Me=C0(H,b,pe);g.currentOutputSnapshotRaw=H,g.currentOutputSnapshotResolved=Me,g.currentWriteId=k0(a),h.splice(h.indexOf(he),1),o=o.concat(b0(a.serverSyncTree_,g.path,Me,g.currentWriteId,g.applyLocally)),o=o.concat(Wi(a.serverSyncTree_,he,!0))}else E=!0,v="nodata",o=o.concat(Wi(a.serverSyncTree_,g.currentWriteId,!0))}qn(a.eventQueue_,i,o),o=[],E&&(t[m].status=2,(function(b){setTimeout(b,Math.floor(0))})(t[m].unwatcher),t[m].onComplete&&(v==="nodata"?l.push(()=>t[m].onComplete(null,!1,t[m].currentInputSnapshot)):l.push(()=>t[m].onComplete(new Error(v),!1,null))))}Wo(a,a.transactionQueueTree_);for(let m=0;m<l.length;m++)ca(l[m]);td(a,a.transactionQueueTree_)}function U0(a,t){let i,l=a.transactionQueueTree_;for(i=ee(t);i!==null&&fa(l)===void 0;)l=Fh(l,i),t=xe(t),i=ee(t);return l}function z0(a,t){const i=[];return H0(a,t,i),i.sort((l,o)=>l.order-o.order),i}function H0(a,t,i){const l=fa(t);if(l)for(let o=0;o<l.length;o++)i.push(l[o]);Ko(t,o=>{H0(a,o,i)})}function Wo(a,t){const i=fa(t);if(i){let l=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[l]=i[o],l++);i.length=l,w0(t,i.length>0?i:void 0)}Ko(t,l=>{Wo(a,l)})}function B0(a,t){const i=ql(U0(a,t)),l=Fh(a.transactionQueueTree_,t);return fR(l,o=>{zf(a,o)}),zf(a,l),N0(l,o=>{zf(a,o)}),i}function zf(a,t){const i=fa(t);if(i){const l=[];let o=[],f=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(f===h-1,"All SENT items should be at beginning of queue."),f=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Wi(a.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&l.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));f===-1?w0(t,void 0):i.length=f+1,qn(a.eventQueue_,ql(t),o);for(let h=0;h<l.length;h++)ca(l[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(a){let t="";const i=a.split("/");for(let l=0;l<i.length;l++)if(i[l].length>0){let o=i[l];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function IR(a){const t={};a.charAt(0)==="?"&&(a=a.substring(1));for(const i of a.split("&")){if(i.length===0)continue;const l=i.split("=");l.length===2?t[decodeURIComponent(l[0])]=decodeURIComponent(l[1]):Ct(`Invalid query segment '${i}' in query '${a}'`)}return t}const Ny=function(a,t){const i=kR(a),l=i.namespace;i.domain==="firebase.com"&&jn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!l||l==="undefined")&&i.domain!=="localhost"&&jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||Kw();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new jv(i.host,i.secure,l,o,t,"",l!==i.subdomain),path:new we(i.pathString)}},kR=function(a){let t="",i="",l="",o="",f="",h=!0,m="https",g=443;if(typeof a=="string"){let p=a.indexOf("//");p>=0&&(m=a.substring(0,p-1),a=a.substring(p+2));let E=a.indexOf("/");E===-1&&(E=a.length);let v=a.indexOf("?");v===-1&&(v=a.length),t=a.substring(0,Math.min(E,v)),E<v&&(o=DR(a.substring(E,v)));const b=IR(a.substring(Math.min(a.length,v)));p=t.indexOf(":"),p>=0?(h=m==="https"||m==="wss",g=parseInt(t.substring(p+1),10)):p=t.length;const L=t.slice(0,p);if(L.toLowerCase()==="localhost")i="localhost";else if(L.split(".").length<=2)i=L;else{const H=t.indexOf(".");l=t.substring(0,H).toLowerCase(),i=t.substring(H+1),f=l}"ns"in b&&(f=b.ns)}return{host:t,port:g,domain:i,subdomain:l,secure:h,scheme:m,pathString:o,namespace:f}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",LR=(function(){let a=0;const t=[];return function(i){const l=i===a;a=i;let o;const f=new Array(8);for(o=7;o>=0;o--)f[o]=Ry.charAt(i%64),i=Math.floor(i/64);U(i===0,"Cannot push at time == 0");let h=f.join("");if(l){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=Ry.charAt(t[o]);return U(h.length===20,"nextPushId: Length should be 20."),h}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(t,i,l,o){this.eventType=t,this.eventRegistration=i,this.snapshot=l,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$e(this.snapshot.exportVal())}}class q0{constructor(t,i,l){this.eventRegistration=t,this.error=i,this.path=l}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,i,l,o){this._repo=t,this._path=i,this._queryParams=l,this._orderByCalled=o}get key(){return te(this._path)?null:Kv(this._path)}get ref(){return new Vn(this._repo,this._path)}get _queryIdentifier(){const t=uy(this._queryParams),i=Sh(t);return i==="{}"?"default":i}get _queryObject(){return uy(this._queryParams)}isEqual(t){if(t=mt(t),!(t instanceof Vl))return!1;const i=this._repo===t._repo,l=Ah(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&l&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+DA(this._path)}}function zR(a,t){if(a._orderByCalled===!0)throw new Error(t+": You can't combine multiple orderBy calls.")}function HR(a){let t=null,i=null;if(a.hasStart()&&(t=a.getIndexStartValue()),a.hasEnd()&&(i=a.getIndexEndValue()),a.getIndex()===Ji){const l="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(a.hasStart()){if(a.getIndexStartName()!==ns)throw new Error(l);if(typeof t!="string")throw new Error(o)}if(a.hasEnd()){if(a.getIndexEndName()!==wi)throw new Error(l);if(typeof i!="string")throw new Error(o)}}else if(a.getIndex()===Ue){if(t!=null&&!Ty(t)||i!=null&&!Ty(i))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(U(a.getIndex()instanceof Oh||a.getIndex()===s0,"unknown index type."),t!=null&&typeof t=="object"||i!=null&&typeof i=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Vn extends Vl{constructor(t,i){super(t,i,new Mh,!1)}get parent(){const t=Wv(this._path);return t===null?null:new Vn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Dl{constructor(t,i,l){this._node=t,this.ref=i,this._index=l}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new we(t),l=ia(this.ref,t);return new Dl(this._node.getChild(i),l,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(l,o)=>t(new Dl(o,ia(this.ref,l),Ue)))}hasChild(t){const i=new we(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vl(a,t){return a=mt(a),a._checkNotDeleted("ref"),t!==void 0?ia(a._root,t):a._root}function ia(a,t){return a=mt(a),ee(a._path)===null?gR("child","path",t):Kh("child","path",t),new Vn(a._repo,Fe(a._path,t))}function V0(a,t){a=mt(a),Zh("push",a._path),x0("push",t,a._path,!0);const i=I0(a._repo),l=LR(i),o=ia(a,l),f=ia(a,l);let h;return t!=null?h=G0(f,t).then(()=>f):h=Promise.resolve(f),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function BR(a){return Zh("remove",a._path),G0(a,null)}function G0(a,t){a=mt(a),Zh("set",a._path),x0("set",t,a._path,!1);const i=new Ho;return wR(a._repo,a._path,t,null,i.wrapCallback(()=>{})),i.promise}class nd{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const l=i._queryParams.getIndex();return new j0("value",this,new Dl(t.snapshotNode,new Vn(i._repo,i._path),l))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new q0(this,t,i):null}matches(t){return t instanceof nd?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class id{constructor(t,i){this.eventType=t,this.callbackContext=i}respondsTo(t){let i=t==="children_added"?"child_added":t;return i=i==="children_removed"?"child_removed":i,this.eventType===i}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new q0(this,t,i):null}createEvent(t,i){U(t.childName!=null,"Child events should have a childName.");const l=ia(new Vn(i._repo,i._path),t.childName),o=i._queryParams.getIndex();return new j0(t.type,this,new Dl(t.snapshotNode,l,o),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof id?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function P0(a,t,i,l,o){let f;if(typeof l=="object"&&(f=void 0,o=l),typeof l=="function"&&(f=l),o&&o.onlyOnce){const g=i,p=(E,v)=>{Ay(a._repo,a,m),g(E,v)};p.userCallback=i.userCallback,p.context=i.context,i=p}const h=new UR(i,f||void 0),m=t==="value"?new nd(h):new id(t,h);return NR(a._repo,a,m),()=>Ay(a._repo,a,m)}function jR(a,t,i,l){return P0(a,"value",t,i,l)}function qR(a,t,i,l){return P0(a,"child_added",t,i,l)}class Y0{}class VR extends Y0{constructor(t){super(),this._limit=t,this.type="limitToLast"}_apply(t){if(t._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Vl(t._repo,t._path,eN(t._queryParams,this._limit),t._orderByCalled)}}function Q0(a){if(typeof a!="number"||Math.floor(a)!==a||a<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new VR(a)}class GR extends Y0{constructor(t){super(),this._path=t,this.type="orderByChild"}_apply(t){zR(t,"orderByChild");const i=new we(this._path);if(te(i))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const l=new Oh(i),o=tN(t._queryParams,l);return HR(o),new Vl(t._repo,t._path,o,!0)}}function PR(a){return Kh("orderByChild","path",a),new GR(a)}function F0(a,...t){let i=mt(a);for(const l of t)i=l._apply(i);return i}VN(Vn);XN(Vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="FIREBASE_DATABASE_EMULATOR_HOST",sh={};let QR=!1;function FR(a,t,i,l){const o=t.lastIndexOf(":"),f=t.substring(0,o),h=aa(f);a.repoInfo_=new jv(t,h,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,i),l&&(a.authTokenProvider_=l)}function XR(a,t,i,l,o){let f=l||a.options.databaseURL;f===void 0&&(a.options.projectId||jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",a.options.projectId),f=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=Ny(f,o),m=h.repoInfo,g;typeof process<"u"&&Y_&&(g=Y_[YR]),g?(f=`http://${g}?ns=${m.namespace}`,h=Ny(f,o),m=h.repoInfo):h.repoInfo.secure;const p=new lA(a.name,a.options,t);_R("Invalid Firebase Database URL",h),te(h.path)||jn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=ZR(m,a,p,new aA(a,i));return new WR(E,a)}function KR(a,t){const i=sh[t];(!i||i[a.key]!==a)&&jn(`Database ${t}(${a.repoInfo_}) has already been deleted.`),RR(a),delete i[a.key]}function ZR(a,t,i,l){let o=sh[t.name];o||(o={},sh[t.name]=o);let f=o[a.toURLString()];return f&&jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),f=new SR(a,QR,i,l),o[a.toURLString()]=f,f}class WR{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&jn("Cannot call "+t+" on a deleted database.")}}function JR(a=dh(),t){const i=hh(a,"database").getImmediate({identifier:t});if(!i._instanceStarted){const l=hS("database");l&&$R(i,...l)}return i}function $R(a,t,i,l={}){a=mt(a),a._checkNotDeleted("useEmulator");const o=`${t}:${i}`,f=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&$i(l,f.repoInfo_.emulatorOptions))return;jn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(f.repoInfo_.nodeAdmin)l.mockUserToken&&jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new po(po.OWNER);else if(l.mockUserToken){const m=typeof l.mockUserToken=="string"?l.mockUserToken:dS(l.mockUserToken,a.app.options.projectId);h=new po(m)}aa(t)&&(By(t),jy("Database",!0)),FR(f,o,l,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(a){Gw(ra),ea(new es("database",(t,{instanceIdentifier:i})=>{const l=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),f=t.getProvider("app-check-internal");return XR(l,o,f,i)},"PUBLIC").setMultipleInstances(!0)),Ei(Q_,F_,a),Ei(Q_,F_,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2={".sv":"timestamp"};function n2(){return t2}Un.prototype.simpleListen=function(a,t){this.sendRequest("q",{p:a},t)};Un.prototype.echo=function(a,t){this.sendRequest("echo",{d:a},t)};e2();const i2={apiKey:"AIzaSyABZ0cV_uVNRUyEBb6d8XiAyepEritY7Uk",authDomain:"ghost-d48ab.firebaseapp.com",databaseURL:"https://ghost-d48ab-default-rtdb.firebaseio.com",projectId:"ghost-d48ab",storageBucket:"ghost-d48ab.firebasestorage.app",messagingSenderId:"571108471028",appId:"1:571108471028:web:d9e1d78cb4828081a22ea1",measurementId:"G-JGSHZWL4WZ"},s2="ghost-d48ab",bl=s2.replace(/[.#$[\]]/g,"_"),X0=xT().length===0?Yy(i2):dh(),fl=qw(X0),El=JR(X0),a2=["👻","🔥","💜","💀","👁️","✨","🌑"],l2=a=>{const[t,i]=Ne.useState([]);return Ne.useEffect(()=>{if(!a)return;const o=F0(vl(El,`artifacts/${bl}/public/data/reactions`),Q0(10)),f=qR(o,h=>{const m=h.val();if(!m||!m.timestamp)return;if(Date.now()-m.timestamp<1e4){const p={id:Math.random().toString(36).substr(2,9),emoji:m.emoji,left:Math.random()*80+10,size:Math.random()*1.5+1.5,duration:Math.random()*2+3,delay:0,wobble:Math.random()*40-20};i(E=>[...E,p]),setTimeout(()=>{i(E=>E.filter(v=>v.id!==p.id))},(p.duration+1)*1e3)}});return()=>f()},[a]),{floatingEmojis:t,triggerReaction:o=>{a&&V0(vl(El,`artifacts/${bl}/public/data/reactions`),{emoji:o,senderId:a.uid,timestamp:Date.now()}).catch(f=>console.error("Reaction failed",f))}}},r2=()=>{const[a,t]=Ne.useState(!1);return{enabled:a,toggleMode:()=>t(l=>!l)}},o2=({emojis:a})=>k.jsxs("div",{className:"absolute inset-0 pointer-events-none z-50 overflow-hidden",children:[k.jsx("style",{children:`
        @keyframes libraryFloatUp {
          0% { opacity: 0; transform: translateY(0) scale(0.5); }
          10% { opacity: 1; transform: translateY(-50px) scale(1.1); }
          50% { transform: translateY(-40vh) scale(1) translateX(var(--wobble)); }
          100% { opacity: 0; transform: translateY(-80vh) scale(0.8) translateX(calc(var(--wobble) * -1)); }
        }
      `}),a.map(t=>k.jsx("div",{className:"absolute bottom-20 transition-transform will-change-transform",style:{left:`${t.left}%`,fontSize:`${t.size}rem`,animation:`libraryFloatUp ${t.duration}s ease-out forwards`,"--wobble":`${t.wobble}px`},children:t.emoji},t.id))]}),u2=({onReact:a})=>k.jsx("div",{className:"flex items-center justify-center gap-1 mb-2 animate-slide-up",children:a2.map(t=>k.jsx("button",{onClick:()=>a(t),className:"group relative p-2 rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95",children:k.jsx("span",{className:"text-xl filter drop-shadow-md group-hover:scale-110 transition-transform block",children:t})},t))}),zo=["from-pink-500 to-rose-600 shadow-pink-500/20","from-violet-500 to-purple-600 shadow-purple-500/20","from-cyan-400 to-blue-600 shadow-cyan-500/20","from-emerald-400 to-teal-600 shadow-emerald-500/20","from-orange-400 to-red-600 shadow-orange-500/20","from-fuchsia-500 to-pink-600 shadow-fuchsia-500/20"],Oy=["NeonPhantom","CyberSoul","MidnightWalker","VoidEcho","ShadowDancer","GlitchWraith","DigitalSpectre","NebulaDrifter"],K0=()=>Oy[Math.floor(Math.random()*Oy.length)],c2=()=>zo[Math.floor(Math.random()*zo.length)],Z0=()=>{const a=Ne.useRef(null);return Ne.useEffect(()=>{const t=a.current;if(!t)return;const i=t.getContext("2d");if(!i)return;let l;const o=[],f=()=>{t.width=window.innerWidth,t.height=window.innerHeight};window.addEventListener("resize",f),f();for(let m=0;m<60;m++)o.push({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*2+.5,alpha:Math.random()*.5+.1,phase:Math.random()*Math.PI*2,speed:.01+Math.random()*.02});const h=()=>{i.clearRect(0,0,t.width,t.height),o.forEach(m=>{m.x+=m.vx,m.y+=m.vy,m.phase+=m.speed,m.x<0&&(m.x=t.width),m.x>t.width&&(m.x=0),m.y<0&&(m.y=t.height),m.y>t.height&&(m.y=0);const g=m.alpha+Math.sin(m.phase)*.15;i.fillStyle=`rgba(167, 139, 250, ${Math.max(0,g)})`,i.beginPath(),i.arc(m.x,m.y,m.size,0,Math.PI*2),i.fill()}),l=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",f),cancelAnimationFrame(l)}},[]),k.jsx("canvas",{ref:a,className:"absolute inset-0 pointer-events-none z-0 mix-blend-screen"})};function f2(){const[a,t]=Ne.useState(null),[i,l]=Ne.useState(null),[o,f]=Ne.useState({name:"",color:"",id:""}),[h,m]=Ne.useState("LOGIN"),[g,p]=Ne.useState([]),[E,v]=Ne.useState(""),[b,L]=Ne.useState(null),[H,Q]=Ne.useState(null),he=Ne.useRef(null),pe=Ne.useRef(null),{enabled:Me,toggleMode:Re}=r2(),{floatingEmojis:Xe,triggerReaction:zt}=l2(a);Ne.useEffect(()=>{(async()=>{if(!fl.currentUser)try{await L_(fl)}catch(R){R.code==="auth/admin-restricted-operation"?l("Configuration Missing: Enable 'Anonymous' in Firebase Console."):l(`Connection Error: ${R.message}`)}})();const Oe=OC(fl,R=>{if(R){t(R),l(null);const z=localStorage.getItem("ghost_profile");z&&(f(JSON.parse(z)),m("CHAT"))}else t(null),m("LOGIN")});return()=>Oe()},[]),Ne.useEffect(()=>{if(!a||h!=="CHAT")return;const Y=F0(vl(El,`artifacts/${bl}/public/data/ghost_messages`),PR("timestamp"),Q0(50)),Oe=jR(Y,R=>{const z=R.val();if(z){const G=Object.entries(z).map(([ue,ce])=>({id:ue,...ce}));G.sort((ue,ce)=>(ue.timestamp||0)-(ce.timestamp||0)),p(G)}else p([]);et()},R=>{tt("Disconnected from the void.")});return()=>Oe()},[a,h]),Ne.useEffect(()=>{b&&pe.current&&pe.current.focus()},[b]);const et=()=>{setTimeout(()=>{var Y;(Y=he.current)==null||Y.scrollIntoView({behavior:"smooth"})},100)},ie=(Y,Oe)=>{if(!a)return;const R={name:Y||K0(),color:Oe||c2(),id:a.uid};f(R),localStorage.setItem("ghost_profile",JSON.stringify(R)),m("CHAT")},ot=()=>{localStorage.removeItem("ghost_profile"),xC(fl),m("LOGIN"),f({name:"",color:"",id:""})},At=async Y=>{if(!(!Y.trim()||!a))try{const Oe=vl(El,`artifacts/${bl}/public/data/ghost_messages`),R={text:Y,senderId:a.uid,senderName:o.name,senderColor:o.color,isPoltergeist:Me,timestamp:n2()};b&&(R.replyTo={id:b.id,senderName:b.senderName,text:b.text}),await V0(Oe,R),L(null),et()}catch{tt("Failed to broadcast.")}},dn=async Y=>{Y==null||Y.preventDefault(),E.trim()&&(await At(E),v(""))},Ht=Y=>{zt(Y),At(Y)};Ne.useEffect(()=>{if(!a)return;const Y=setInterval(()=>{const Oe=Date.now();g.forEach(R=>{R.senderId===a.uid&&R.isPoltergeist&&Oe-(R.timestamp||Oe)>30500&&BR(vl(El,`artifacts/${bl}/public/data/ghost_messages/${R.id}`)).catch(G=>console.error("Cleanup failed",G))})},5e3);return()=>clearInterval(Y)},[a,g]);const tt=Y=>{Q(Y),setTimeout(()=>Q(null),4e3)},mn=async()=>{l(null);try{await L_(fl)}catch(Y){Y.code==="auth/admin-restricted-operation"?l("Configuration Missing: Enable 'Anonymous' in Firebase Console."):l(Y.message)}};return h==="LOGIN"?k.jsx(h2,{onJoin:ie,isAuthReady:!!a,authError:i,onRetry:mn}):k.jsxs("div",{className:"flex flex-col h-screen w-full bg-[#050505] text-slate-200 font-sans overflow-hidden relative selection:bg-purple-500/30",children:[k.jsx(Z0,{}),k.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(24,24,27,0)_0%,_rgba(0,0,0,0.8)_100%)] z-0 pointer-events-none"}),k.jsx("div",{className:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] z-0 mix-blend-overlay"}),k.jsx("style",{children:`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes pulse-glow { 0%, 100% { opacity: 0.5; box-shadow: 0 0 15px rgba(167, 139, 250, 0.1); } 50% { opacity: 1; box-shadow: 0 0 25px rgba(167, 139, 250, 0.3); } }
        .animate-status { animation: pulse-glow 3s infinite; }

        @keyframes glitch { 0% { transform: translate(0) } 20% { transform: translate(-1px, 1px) } 40% { transform: translate(-1px, -1px) } 60% { transform: translate(1px, 1px) } 80% { transform: translate(1px, -1px) } 100% { transform: translate(0) } }
        .glitch-hover:hover { animation: glitch 0.2s cubic-bezier(.25, .46, .45, .94) both infinite; color: #d8b4fe; text-shadow: 2px 2px #4c1d95; }
        
        @keyframes messageEnter { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-enter { animation: messageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }

        @keyframes fadeOut { from { opacity: 1; filter: blur(0px); } to { opacity: 0; filter: blur(4px); } }
      `}),k.jsx(o2,{emojis:Xe}),H&&k.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-enter",children:k.jsxs("div",{className:"bg-slate-900/80 backdrop-blur-md border border-purple-500/30 px-6 py-2 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.2)] flex items-center gap-2",children:[k.jsx(JE,{size:14,className:"text-purple-400"}),k.jsx("span",{className:"text-xs font-medium text-purple-100 tracking-wide",children:H})]})}),k.jsxs("header",{className:"relative z-20 h-16 border-b border-white/5 bg-black/20 backdrop-blur-2xl flex items-center justify-between px-6 shadow-2xl",children:[k.jsxs("div",{className:"flex items-center gap-3 group cursor-default",children:[k.jsx("div",{className:"p-2 animate-float",children:k.jsx("img",{src:"/logo.png",alt:"GhostChat Logo",className:"w-[32px] h-[32px] drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]"})}),k.jsxs("div",{children:[k.jsx("h1",{className:"font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight leading-none glitch-hover transition-all cursor-pointer",children:"GhostChat"}),k.jsxs("div",{className:"flex items-center gap-1.5 mt-1",children:[k.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-status"}),k.jsx("span",{className:"text-[9px] font-semibold text-slate-500 uppercase tracking-widest",children:"Live Channel"})]})]})]}),k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsxs("div",{className:"hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-default",children:[k.jsx("div",{className:`w-2 h-2 rounded-full bg-gradient-to-r ${o.color} shadow-lg`}),k.jsx("span",{className:"text-xs font-bold text-slate-300 tracking-wide",children:o.name})]}),k.jsx("button",{onClick:Re,className:`p-2.5 rounded-xl transition-all duration-300 ${Me?"bg-red-500/10 text-red-400 shadow-[0_0_15px_rgba(248,113,113,0.3)]":"text-slate-500 hover:text-white hover:bg-white/10"}`,title:Me?"Disable Poltergeist Mode":"Enable Poltergeist Mode",children:Me?k.jsx(qE,{size:18}):k.jsx(GE,{size:18})}),k.jsx("button",{onClick:ot,className:"p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300 hover:rotate-90 active:scale-90",title:"Disconnect",children:k.jsx(YE,{size:18})})]})]}),k.jsxs("main",{className:"relative z-10 flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent",children:[k.jsx("div",{className:"flex justify-center py-6 animate-slide-up",children:k.jsxs("div",{className:"group relative flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/10 cursor-help",children:[k.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-all"}),k.jsx("span",{className:"text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors",children:"Encrypted Frequency"})]})}),g.map((Y,Oe)=>{const R=a?Y.senderId===a.uid:!1,z=Oe===0||g[Oe-1].senderId!==Y.senderId,G=Date.now()-(Y.timestamp||Date.now()),ue=5e3,ce=3e4,T=ce-ue,I=Y.isPoltergeist&&G<ce;return Y.isPoltergeist&&G>=ce?null:k.jsxs("div",{className:`flex flex-col ${R?"items-end":"items-start"} group animate-enter`,style:I?{animation:`messageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards, fadeOut ${ue}ms ease-out forwards`,animationDelay:`0s, ${Math.max(0,T-G)}ms`}:{},children:[z&&k.jsx("div",{className:`flex items-center gap-2 mb-1.5 opacity-60 ${R?"flex-row-reverse":"flex-row"} transition-opacity group-hover:opacity-100`,children:k.jsx("span",{className:`text-[10px] font-bold tracking-wide ${R?"text-indigo-300":"text-slate-400"}`,children:Y.senderName})}),k.jsxs("div",{className:`max-w-[85%] md:max-w-[65%] px-5 py-3.5 rounded-[1.2rem] text-sm leading-relaxed relative transition-all duration-300 
                  ${R?"bg-gradient-to-br from-indigo-600/90 to-violet-700/90 text-white rounded-tr-sm shadow-[0_4px_15px_rgba(79,70,229,0.3)]":"bg-white/5 backdrop-blur-md border border-white/5 text-slate-200 rounded-tl-sm hover:bg-white/10 shadow-lg"}
                `,children:[Y.replyTo&&k.jsxs("div",{className:`mb-2 pb-2 border-b border-white/10 text-[11px] ${R?"text-indigo-200/70":"text-slate-400"}`,children:[k.jsxs("div",{className:"flex items-center gap-1 font-bold mb-0.5 opacity-80",children:[k.jsx(Tf,{size:10,className:"scale-x-[-1]"}),Y.replyTo.senderName]}),k.jsxs("div",{className:"truncate opacity-60 italic",children:['"',Y.replyTo.text,'"']})]}),Y.text,k.jsx("button",{onClick:()=>L(Y),className:`absolute top-1/2 -translate-y-1/2 ${R?"-left-10":"-right-10"} p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-white`,title:"Reply",children:k.jsx(Tf,{size:14,className:"scale-x-[-1]"})})]})]},Y.id)}),k.jsx("div",{ref:he})]}),k.jsxs("footer",{className:"relative z-20 p-4 pt-0",children:[k.jsx(u2,{onReact:Ht}),b&&k.jsxs("div",{className:"flex items-center justify-between bg-indigo-900/30 border border-white/10 border-b-0 rounded-t-2xl px-5 py-2 mx-2 -mb-2 z-0 backdrop-blur-xl animate-slide-up",children:[k.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-300 overflow-hidden",children:[k.jsx(Tf,{size:14,className:"scale-x-[-1] text-indigo-400 shrink-0"}),k.jsxs("div",{className:"flex flex-col",children:[k.jsxs("span",{className:"font-bold text-indigo-300",children:["Replying to ",b.senderName]}),k.jsxs("span",{className:"opacity-60 truncate max-w-[200px] md:max-w-md italic",children:['"',b.text,'"']})]})]}),k.jsx("button",{onClick:()=>L(null),className:"p-1.5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors",children:k.jsx(nS,{size:14})})]}),k.jsxs("div",{className:`
          relative bg-black/40 backdrop-blur-3xl border border-white/10 transition-all duration-500 rounded-3xl p-1.5 flex items-end gap-2 shadow-2xl focus-within:border-white/20 z-10
        `,children:[k.jsx("div",{className:"flex-1 relative",children:k.jsx("textarea",{ref:pe,value:E,onChange:Y=>v(Y.target.value),onKeyDown:Y=>{Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),dn())},placeholder:"Broadcast a message...",className:"w-full bg-transparent text-white text-base px-4 py-3.5 focus:outline-none resize-none min-h-[50px] max-h-[120px] scrollbar-hide rounded-xl transition-colors placeholder:text-slate-600",rows:1})}),k.jsx("button",{type:"submit",onClick:dn,disabled:!E.trim(),className:"p-3.5 mb-1 rounded-[1rem] shadow-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:scale-100 bg-white text-black hover:bg-slate-200",children:k.jsx(ZE,{size:18,className:"ml-0.5",strokeWidth:2.5})})]})]})]})}function h2({onJoin:a,isAuthReady:t,authError:i,onRetry:l}){const[o,f]=Ne.useState(""),[h,m]=Ne.useState(zo[0]);return k.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-[#030304] relative overflow-hidden p-6 font-sans selection:bg-indigo-500/30 selection:text-white",children:[k.jsx(Z0,{}),k.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[150px] animate-pulse"}),k.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[150px] animate-pulse"}),k.jsxs("div",{className:"w-full max-w-sm bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative z-10 animate-slide-up ring-1 ring-white/5",children:[k.jsx("style",{children:`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
          .animate-float { animation: float 6s ease-in-out infinite; }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}),k.jsxs("div",{className:"text-center mb-10",children:[k.jsx("div",{className:"w-24 h-24 flex items-center justify-center mx-auto mb-6 animate-float",children:k.jsx("img",{src:"/logo.png",alt:"GhostChat Logo",className:"w-[80px] h-[80px] drop-shadow-[0_0_25px_rgba(167,139,250,0.6)]"})}),k.jsx("h1",{className:"text-4xl font-bold text-white mb-2 tracking-tight",children:"GhostChat"}),k.jsx("p",{className:"text-slate-400 text-sm font-medium tracking-wide",children:"Enter the void. Leave no trace."})]}),k.jsxs("div",{className:"space-y-8",children:[i&&k.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 text-red-300 p-4 rounded-2xl flex flex-col gap-2 text-sm",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(BE,{size:16,className:"shrink-0"}),k.jsx("p",{className:"font-bold",children:"Access Denied"})]}),k.jsx("p",{className:"text-xs opacity-80 leading-relaxed",children:i}),k.jsxs("button",{onClick:l,className:"flex items-center gap-2 mt-2 text-xs font-bold text-white bg-red-500/20 hover:bg-red-500/30 py-2.5 px-4 rounded-xl transition self-start",children:[k.jsx(FE,{size:12})," Retry Connection"]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 ml-2",children:"Identify Yourself"}),k.jsxs("div",{className:"relative group",children:[k.jsx(eS,{className:"absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors",size:20}),k.jsx("input",{type:"text",value:o,onChange:g=>f(g.target.value),placeholder:K0(),className:"w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-4 text-white text-base placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all hover:bg-black/50 hover:border-white/20"})]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 ml-2",children:"Aura Color"}),k.jsx("div",{className:"grid grid-cols-6 gap-2",children:zo.map(g=>k.jsx("button",{onClick:()=>m(g),className:`w-full aspect-square rounded-xl bg-gradient-to-br ${g} transition-all duration-300 ${h===g?"ring-2 ring-white scale-110 shadow-lg":"opacity-40 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0"}`},g))})]}),k.jsx("button",{onClick:()=>a(o,h),disabled:!t,className:`w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-900/20 transition-all transform 
              ${t?"bg-white text-black hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]":"bg-white/10 text-slate-500 cursor-not-allowed"}`,children:t?"Connect to Channel":"Initializing..."})]}),k.jsx("div",{className:"mt-8 text-center",children:k.jsx("p",{className:"text-[10px] text-slate-600 font-bold uppercase tracking-widest hover:text-slate-400 transition-colors cursor-default",children:"End-to-End Encrypted"})})]})]})}const W0=document.getElementById("root");if(!W0)throw new Error("Could not find root element to mount to");const d2=DE.createRoot(W0);d2.render(k.jsx(CE.StrictMode,{children:k.jsx(f2,{})}));
