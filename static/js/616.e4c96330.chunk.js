"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{4669:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(8881),r="LoaderPhone_styleLoader__8hJ6M",a=n(184),s=function(){return(0,a.jsx)("div",{className:r,children:(0,a.jsx)(o.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},2616:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return ve},default:function(){return he}});var o=n(9434),r=n(2791),a=n(4942),s=n(9439),i=n(1413);function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n(3433);function l(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var d=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o},f=["theme","type"],m=["delay","staleId"],p=function(e){return"number"==typeof e&&!isNaN(e)},v=function(e){return"string"==typeof e},h=function(e){return"function"==typeof e},g=function(e){return v(e)||h(e)?e:null},y=function(e){return(0,r.isValidElement)(e)||v(e)||h(e)||p(e)};function E(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,s=e.collapse,i=void 0===s||s,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,s=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,m=e.isIn,p=a?"".concat(t,"--").concat(s):t,v=a?"".concat(n,"--").concat(s):n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,u.Z)(n)))};(e=t.classList).add.apply(e,(0,u.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};m||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[m]),r.createElement(r.Fragment,null,o)}}function T(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},b=function(e){var t=e.theme,n=e.type,o=c(e,f);return r.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},C={info:function(e){return r.createElement(b,(0,i.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(b,(0,i.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(b,(0,i.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(b,(0,i.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function N(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,s.Z)(t,2)[1],o=(0,r.useState)([]),a=(0,s.Z)(o,2),l=a[0],d=a[1],f=(0,r.useRef)(null),E=(0,r.useRef)(new Map).current,b=function(e){return-1!==l.indexOf(e)},N=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:b,getToast:function(e){return E.get(e)}}).current;function I(e){var t=e.containerId;!N.props.limit||t&&N.containerId!==t||(N.count-=N.queue.length,N.queue=[])}function x(e){d((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function O(){var e=N.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function Z(e,t){var o=t.delay,a=t.staleId,u=c(t,m);if(y(e)&&!function(e){return!f.current||N.props.enableMultiContainer&&e.containerId!==N.props.containerId||E.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,d=u.updateId,b=u.data,I=N.props,Z=function(){return x(l)},R=null==d;R&&N.count++;var w,j,k=(0,i.Z)((0,i.Z)((0,i.Z)({},I),{},{style:I.toastStyle,key:N.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var t=(0,s.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:l,updateId:d,data:b,closeToast:Z,isIn:!1,className:g(u.className||I.toastClassName),bodyClassName:g(u.bodyClassName||I.bodyClassName),progressClassName:g(u.progressClassName||I.progressClassName),autoClose:!u.isLoading&&(w=u.autoClose,j=I.autoClose,!1===w||p(w)&&w>0?w:j),deleteToast:function(){var e=T(E.get(l),"removed");E.delete(l),_.emit(4,e);var t=N.queue.length;if(N.count=null==l?N.count-N.displayedToast:N.count-1,N.count<0&&(N.count=0),t>0){var o=null==l?N.props.limit:1;if(1===t||1===o)N.displayedToast++,O();else{var r=o>t?t:o;N.displayedToast=r;for(var a=0;a<r;a++)O()}}else n()}});k.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,s=null,i={theme:t,type:n};return!1===a||(h(a)?s=a(i):(0,r.isValidElement)(a)?s=(0,r.cloneElement)(a,i):v(a)||p(a)?s=a:o?s=C.spinner():function(e){return e in C}(n)&&(s=C[n](i))),s}(k),h(u.onOpen)&&(k.onOpen=u.onOpen),h(u.onClose)&&(k.onClose=u.onClose),k.closeButton=I.closeButton,!1===u.closeButton||y(u.closeButton)?k.closeButton=u.closeButton:!0===u.closeButton&&(k.closeButton=!y(I.closeButton)||I.closeButton);var M=e;(0,r.isValidElement)(e)&&!v(e.type)?M=(0,r.cloneElement)(e,{closeToast:Z,toastProps:k,data:b}):h(e)&&(M=e({closeToast:Z,toastProps:k,data:b})),I.limit&&I.limit>0&&N.count>I.limit&&R?N.queue.push({toastContent:M,toastProps:k,staleId:a}):p(o)?setTimeout((function(){L(M,k,a)}),o):L(M,k,a)}}function L(e,t,n){var o=t.toastId;n&&E.delete(n);var r={content:e,props:t};E.set(o,r),d((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),_.emit(4,T(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return N.containerId=e.containerId,_.cancelEmit(3).on(0,Z).on(1,(function(e){return f.current&&x(e)})).on(5,I).emit(2,N),function(){E.clear(),_.emit(3,N)}}),[]),(0,r.useEffect)((function(){N.props=e,N.isToastActive=b,N.displayedToast=l.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(E.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:b}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function x(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){var t=(0,r.useState)(!1),n=(0,s.Z)(t,2),o=n[0],a=n[1],i=(0,r.useState)(!1),c=(0,s.Z)(i,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,r.useRef)(e),p=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,E=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",N),document.addEventListener("mouseup",O),document.addEventListener("touchmove",N),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=x(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function _(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=s&&f.y>=o&&f.y<=r?C():b()}}function b(){a(!0)}function C(){a(!1)}function N(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&C(),f.x=I(t),f.y=x(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",N),document.removeEventListener("touchend",O);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,r.useEffect)((function(){m.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),h(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;h(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",b),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var Z={onMouseDown:T,onTouchStart:T,onMouseUp:_,onTouchEnd:_};return p&&v&&(Z.onMouseEnter=C,Z.onMouseLeave=b),E&&(Z.onClick=function(e){y&&y(e),f.canCloseOnClick&&g()}),{playToast:b,pauseToast:C,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:Z}}function Z(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t=e.delay,n=e.isRunning,o=e.closeToast,s=e.type,c=void 0===s?"default":s,u=e.hide,l=e.className,f=e.style,m=e.controlledProgress,p=e.progress,v=e.rtl,g=e.isIn,y=e.theme,E=u||m&&0===p,T=(0,i.Z)((0,i.Z)({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:E?0:1});m&&(T.transform="scaleX(".concat(p,")"));var _=d("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":v}),b=h(l)?l({rtl:v,type:c,defaultClassName:_}):d(_,l);return r.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:b,style:T},m&&p>=1?"onTransitionEnd":"onAnimationEnd",m&&p<1?null:function(){g&&o()}))}var R=function(e){var t=O(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,s=t.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,f=e.onClick,m=e.type,p=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,E=e.className,T=e.style,_=e.bodyClassName,b=e.bodyStyle,C=e.progressClassName,N=e.progressStyle,I=e.updateId,x=e.role,R=e.progress,w=e.rtl,j=e.toastId,k=e.deleteToast,M=e.isIn,P=e.isLoading,D=e.iconOut,F=e.closeOnClick,A=e.theme,S=d("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":F}),B=h(E)?E({rtl:w,position:y,type:m,defaultClassName:S}):d(S,E),z=!!R||!l,q={closeToast:v,type:m,theme:A},H=null;return!1===c||(H=h(c)?c(q):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,q):Z(q)),r.createElement(g,{isIn:M,done:k,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,i.Z)((0,i.Z)({id:j,onClick:f,className:B},s),{},{style:T,ref:a}),r.createElement("div",(0,i.Z)((0,i.Z)({},M&&{role:x}),{},{className:h(_)?_({type:m}):d("Toastify__toast-body",_),style:b}),null!=D&&r.createElement("div",{className:d("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},D),r.createElement("div",null,u)),H,r.createElement(L,(0,i.Z)((0,i.Z)({},I&&!z?{key:"pb-".concat(I)}:{}),{},{rtl:w,theme:A,delay:l,isRunning:n,isIn:M,closeToast:v,hide:p,type:m,style:N,className:C,controlledProgress:z,progress:R||0}))))},w=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=E(w("bounce",!0)),k=(E(w("slide",!0)),E(w("zoom")),E(w("flip")),(0,r.forwardRef)((function(e,t){var n=N(e),o=n.getToastToRender,a=n.containerRef,s=n.isToastActive,c=e.className,u=e.style,l=e.rtl,f=e.containerId;function m(e){var t=d("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return h(c)?c({position:e,rtl:l,defaultClassName:t}):d(t,g(c))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,i.Z)({},u):(0,i.Z)((0,i.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:m(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(R,(0,i.Z)((0,i.Z)({},a),{},{isIn:s(a.toastId),style:(0,i.Z)((0,i.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));k.displayName="ToastContainer",k.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:Z,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,P=new Map,D=[],F=1;function A(){return""+F++}function S(e){return e&&(v(e.toastId)||p(e.toastId))?e.toastId:A()}function B(e,t){return P.size>0?_.emit(0,e,t):D.push({content:e,options:t}),t.toastId}function z(e,t){return(0,i.Z)((0,i.Z)({},t),{},{type:t&&t.type||e,toastId:S(t)})}function q(e){return function(t,n){return B(t,z(e,n))}}function H(e,t){return B(e,z("default",t))}H.loading=function(e,t){return B(e,z("default",(0,i.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},H.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=v(r)?H.loading(r,n):H.loading(r.render,(0,i.Z)((0,i.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=(0,i.Z)((0,i.Z)((0,i.Z)({type:e},c),n),{},{data:r}),s=v(t)?{render:t}:t;return o?H.update(o,(0,i.Z)((0,i.Z)({},a),s)):H(s.render,(0,i.Z)((0,i.Z)({},a),s)),r}H.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(e,t){return B(e,z("default",(0,i.Z)({theme:"dark"},t)))},H.dismiss=function(e){P.size>0?_.emit(1,e):D=D.filter((function(t){return null!=e&&t.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},H.isActive=function(e){var t=!1;return P.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},H.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=P.get(n||M);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,i.Z)((0,i.Z)((0,i.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:A()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,B(s,a)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(e){M=e.containerId||e,P.set(M,e),D.forEach((function(e){_.emit(0,e.content,e.options)})),D=[]})).on(3,(function(e){P.delete(e.containerId||e),0===P.size&&_.off(0).off(1).off(5)}));var Q=n(6639),U=function(e){return e.contacts.contacts},V=function(e){return e.contacts.isLoading},G=function(e){return e.contacts.error},K=function(e){return e.contacts.filter},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},Y="ContactForm_form__dhl+T",W="ContactForm_labelText__JB4h1",J="ContactForm_imputForm__qzGyq",$="ContactForm_buttonForm__RQPsC",ee=n(184),te=function(){var e=(0,o.I0)(),t=(0,r.useState)(" "),n=(0,s.Z)(t,2),a=n[0],i=n[1],c=(0,r.useState)(" "),u=(0,s.Z)(c,2),l=u[0],d=u[1],f=function(e){var t=e.currentTarget,n=t.name,o=t.value;switch(n){case"name":i(o);break;case"number":d(o);break;default:return}};return(0,ee.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:X(),name:a,number:l};e((0,Q.uK)(n)),i(" "),d(" ")},className:Y,children:[(0,ee.jsxs)("label",{children:[(0,ee.jsx)("p",{className:W,children:"Name"}),(0,ee.jsx)("input",{className:J,type:"text",name:"name",value:a,onChange:f,placeholder:"username: ",required:!0})]}),(0,ee.jsxs)("label",{children:[(0,ee.jsx)("p",{className:W,children:"Number"}),(0,ee.jsx)("input",{className:J,type:"tel",name:"number",value:l,onChange:f,placeholder:"Enter number tel:",required:!0})]}),(0,ee.jsx)("button",{className:$,type:"submit",children:"Add contact"})]})},ne="ContactList_contactList__UFVCg",oe="ContactElements_contactElements__XX5lQ",re="ContactElements_itemName__95nsE",ae="ContactElements_itemNumber__+In2l",se="ContactElements_buttonForm__mRKFG",ie=function(e){var t=e.id,n=e.name,o=e.number,r=e.onDelete;return(0,ee.jsxs)("li",{className:oe,children:[(0,ee.jsxs)("span",{className:re,children:[" ",n,":"]}),(0,ee.jsxs)("span",{className:ae,children:[" ",o]}),(0,ee.jsx)("button",{className:se,type:"button",onClick:function(){return r(t)},children:"Delay"})]},t)},ce=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.contacts.contacts})),n=(0,o.v9)((function(e){return e.filter.filter})),r=t.filter((function(e){return e.name.toLowerCase().includes(n.trim().toLowerCase())}));function a(t){e((0,Q.zY)(t))}return(0,ee.jsx)("ul",{className:ne,children:r.map((function(e){var t=e.id,n=e.name,o=e.number;return(0,ee.jsx)(ie,{name:n,id:t,number:o,onDelete:a},t)}))})},ue=n(4669),le=n(6895),de="Filter_filter__vxThR",fe="Filter_filterTitle__5SDqd",me="Filter_filterImput__amMjC",pe=function(){var e=(0,o.I0)(),t=(0,o.v9)(K);return(0,ee.jsx)("div",{className:de,children:(0,ee.jsxs)("label",{htmlFor:"filter",children:[(0,ee.jsx)("p",{className:fe,children:"FIND CONTACT BY NAME"}),(0,ee.jsx)("input",{className:me,type:"text",name:"filter",id:"filter",value:t,onChange:function(t){e((0,le.c)(t.target.value))},placeholder:" Username: ",required:!0})]})})},ve=function(){var e=(0,o.v9)(U),t=(0,o.v9)(V),n=(0,o.v9)(G),a=(0,o.I0)();return(0,r.useEffect)((function(){a((0,Q.yF)())}),[a]),(0,r.useEffect)((function(){"ERR_BAD_REQUEST"!==n?n&&H.error(n):H.error("Sorry! There are some problems! Try again later.")}),[n]),(0,ee.jsxs)("section",{className:"styledSection",children:[null!==n&&(0,ee.jsxs)("p",{children:[" Ooops... ",n]}),t&&(0,ee.jsx)(ue.Z,{}),(0,ee.jsx)("h1",{className:"titlePhone",children:"PHONEBOOKS "}),(0,ee.jsx)(te,{}),(0,ee.jsx)("h2",{className:"titleContact",children:"CONTACTS"}),e.length>1&&(0,ee.jsx)(pe,{}),(0,ee.jsx)(ce,{})]})},he=ve}}]);
//# sourceMappingURL=616.e4c96330.chunk.js.map