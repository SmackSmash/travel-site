!function(n){var o={};function i(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}i.m=n,i.c=o,i.p="",i(0)}([function(t,e,n){"use strict";var o=s(n(1)),i=s(n(2)),r=s(n(4)),a=s(n(6));function s(t){return t&&t.__esModule?t:{default:t}}new o.default,new i.default(".feature-item","100%"),new i.default(".testimonial","90%"),new r.default,new a.default},function(t,e){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0});var n=(function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(i,[{key:"events",value:function(){this.menuIcon.addEventListener("click",this.toggleMenu.bind(this))}},{key:"toggleMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}]),i);function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.siteHeader=document.querySelector(".site-header"),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.events()}e.default=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r,a=n(3);(r=a)&&r.__esModule;var s=(o(l,[{key:"hideInitially",value:function(){var t=!0,e=!1,n=void 0;try{for(var o,i=this.itemsToReveal[Symbol.iterator]();!(t=(o=i.next()).done);t=!0)o.value.classList.add("reveal-item")}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}}},{key:"createWaypoints",value:function(){var e=this,t=!0,n=!1,o=void 0;try{for(var i,r=function(){var t=i.value;new Waypoint({element:t,handler:function(){t.classList.add("reveal-item--is-visible")},offset:e.offset})},a=this.itemsToReveal[Symbol.iterator]();!(t=(i=a.next()).done);t=!0)r()}catch(t){n=!0,o=t}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}}}]),l);function l(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),this.itemsToReveal=document.querySelectorAll(t),this.offset=e,this.hideInitially(),this.createWaypoints()}e.default=s},function(t,e){!function(){"use strict";function e(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+n,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,n+=1}var n=0,r={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var n in r)e.push(r[n]);for(var o=0,i=e.length;o<i;o++)e[o][t]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){for(var t in e.Context.refreshAll(),r)r[t].enabled=!0;return this},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}function n(t){this.element=t,this.Adapter=y.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+o,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,i[t.waypointContextKey]=this,o+=1,y.windowContext||(y.windowContext=!0,y.windowContext=new n(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var o=0,i={},y=window.Waypoint,t=window.onload;n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete i[this.key])},n.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,y.requestAnimationFrame(t))})},n.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){e.didScroll&&!y.isTouch||(e.didScroll=!0,y.requestAnimationFrame(t))})},n.prototype.handleResize=function(){y.Context.refreshAll()},n.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var o=e[n],i=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[n]){var a=this.waypoints[n][r];if(null!==a.triggerPoint){var s=o.oldScroll<a.triggerPoint,l=o.newScroll>=a.triggerPoint;(s&&l||!s&&!l)&&(a.queueTrigger(i),t[a.group.id]=a.group)}}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?y.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?y.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var o=0,i=t.length;o<i;o++)t[o].destroy()},n.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),o={};for(var i in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[i];for(var a in this.waypoints[i]){var s,l,u,c,h=this.waypoints[i][a],d=h.options.offset,f=h.triggerPoint,p=0,m=null==f;h.element!==h.element.window&&(p=h.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(h):"string"==typeof d&&(d=parseFloat(d),-1<h.options.offset.indexOf("%")&&(d=Math.ceil(r.contextDimension*d/100))),s=r.contextScroll-r.contextOffset,h.triggerPoint=Math.floor(p+s-d),l=f<r.oldScroll,u=h.triggerPoint>=r.oldScroll,c=!l&&!u,!m&&(l&&u)?(h.queueTrigger(r.backward),o[h.group.id]=h.group):!m&&c?(h.queueTrigger(r.forward),o[h.group.id]=h.group):m&&r.oldScroll>=h.triggerPoint&&(h.queueTrigger(r.forward),o[h.group.id]=h.group)}}return y.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in i)i[t].refresh()},n.findByElement=function(t){return i[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},y.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},y.Context=n}(),function(){"use strict";function a(t,e){return t.triggerPoint-e.triggerPoint}function s(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],n="up"===t||"left"===t;e.sort(n?s:a);for(var o=0,i=e.length;o<i;o+=1){var r=e[o];!r.options.continuous&&o!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(a);var e=o.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(a);var e=o.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return n[t.axis][t.name]||new e(t)},o.Group=e}(),function(){"use strict";function o(t){return t===t.window}function i(t){return o(t)?t:t.defaultView}function t(t){this.element=t,this.handlers={}}var e=window.Waypoint;t.prototype.innerHeight=function(){return o(this.element)?this.element.innerHeight:this.element.clientHeight},t.prototype.innerWidth=function(){return o(this.element)?this.element.innerWidth:this.element.clientWidth},t.prototype.off=function(t,e){function n(t,e,n){for(var o=0,i=e.length-1;o<i;o++){var r=e[o];n&&n!==r||t.removeEventListener(r)}}var o=t.split("."),i=o[0],r=o[1],a=this.element;if(r&&this.handlers[r]&&i)n(a,this.handlers[r][i],e),this.handlers[r][i]=[];else if(i)for(var s in this.handlers)n(a,this.handlers[s][i]||[],e),this.handlers[s][i]=[];else if(r&&this.handlers[r]){for(var l in this.handlers[r])n(a,this.handlers[r][l],e);this.handlers[r]={}}},t.prototype.offset=function(){if(!this.element.ownerDocument)return null;var t=this.element.ownerDocument.documentElement,e=i(this.element.ownerDocument),n={top:0,left:0};return this.element.getBoundingClientRect&&(n=this.element.getBoundingClientRect()),{top:n.top+e.pageYOffset-t.clientTop,left:n.left+e.pageXOffset-t.clientLeft}},t.prototype.on=function(t,e){var n=t.split("."),o=n[0],i=n[1]||"__default",r=this.handlers[i]=this.handlers[i]||{};(r[o]=r[o]||[]).push(e),this.element.addEventListener(o,e)},t.prototype.outerHeight=function(t){var e,n=this.innerHeight();return t&&!o(this.element)&&(e=window.getComputedStyle(this.element),n+=parseInt(e.marginTop,10),n+=parseInt(e.marginBottom,10)),n},t.prototype.outerWidth=function(t){var e,n=this.innerWidth();return t&&!o(this.element)&&(e=window.getComputedStyle(this.element),n+=parseInt(e.marginLeft,10),n+=parseInt(e.marginRight,10)),n},t.prototype.scrollLeft=function(){var t=i(this.element);return t?t.pageXOffset:this.element.scrollLeft},t.prototype.scrollTop=function(){var t=i(this.element);return t?t.pageYOffset:this.element.scrollTop},t.extend=function(){function t(t,e){if("object"==typeof t&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}for(var e=Array.prototype.slice.call(arguments),n=1,o=e.length;n<o;n++)t(e[0],e[n]);return e[0]},t.inArray=function(t,e,n){return null==e?-1:e.indexOf(t,n)},t.isEmptyObject=function(t){for(var e in t)return!1;return!0},e.adapters.push({name:"noframework",Adapter:t}),e.Adapter=t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}a(n(3));var r=a(n(5));function a(t){return t&&t.__esModule?t:{default:t}}var s=(o(l,[{key:"refreshWaypoints",value:function(){var t=!0,e=!1,n=void 0;try{for(var o,i=this.lazyImages[Symbol.iterator]();!(t=(o=i.next()).done);t=!0)o.value.addEventListener("load",function(){Waypoint.refreshAll()})}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}}},{key:"addSmoothScrolling",value:function(){new r.default('a[href*="#"]')}},{key:"createHeaderWaypoint",value:function(){var t=this;new Waypoint({element:this.headerTriggerElement,handler:function(){t.siteHeader.classList.toggle("site-header--dark")}})}},{key:"createPageSectionWaypoints",value:function(){var s=this,t=!0,e=!1,n=void 0;try{for(var o,i=function(){var a=o.value;new Waypoint({element:a,handler:function(t){if("down"==t){var e=!0,n=!1,o=void 0;try{for(var i,r=s.headerLinks[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)i.value.classList.remove("is-current-link")}catch(t){n=!0,o=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw o}}document.querySelector(a.getAttribute("data-matching-link")).classList.add("is-current-link")}},offset:"18%"}),new Waypoint({element:a,handler:function(t){if("up"==t){var e=!0,n=!1,o=void 0;try{for(var i,r=s.headerLinks[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)i.value.classList.remove("is-current-link")}catch(t){n=!0,o=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw o}}document.querySelector(a.getAttribute("data-matching-link")).classList.add("is-current-link")}},offset:"-40%"})},r=this.pageSections[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)i()}catch(t){e=!0,n=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw n}}}}]),l);function l(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),this.lazyImages=document.querySelectorAll(".lazyload"),this.siteHeader=document.querySelector(".site-header"),this.headerTriggerElement=document.querySelector(".large-hero__title"),this.createHeaderWaypoint(),this.pageSections=document.querySelectorAll(".page-section"),this.headerLinks=document.querySelectorAll(".primary-nav a"),this.createPageSectionWaypoints(),this.addSmoothScrolling(),this.refreshWaypoints()}e.default=s},function(i,r,t){var a;(function(t){var e,n;function o(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),"function"!=typeof window.CustomEvent&&(o.prototype=window.Event.prototype,window.CustomEvent=o),function(){for(var r=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),o=Math.max(0,16-(n-r)),i=window.setTimeout(function(){t(n+o)},o);return r=n+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),e=void 0!==t?t:"undefined"!=typeof window?window:this,n=function(O){"use strict";function q(){var n={};return Array.prototype.forEach.call(arguments,function(t){for(var e in t){if(!t.hasOwnProperty(e))return;n[e]=t[e]}}),n}function r(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,r="",a=n.charCodeAt(0);++i<o;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+r}function C(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function T(t,e,n,o){if(e.emitEvents&&"function"==typeof O.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(i)}}var L={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0};return function(o,t){var x,i,A,E,k={cancelScroll:function(t){cancelAnimationFrame(E),E=null,t||T("scrollCancel",x)}};k.animateScroll=function(a,s,t){k.cancelScroll();var l=q(x||L,t||{}),u="[object Number]"===Object.prototype.toString.call(a),e=u||!a.tagName?null:a;if(u||e){var c=O.pageYOffset;l.header&&!A&&(A=document.querySelector(l.header));var n,o,i,h,r,d,f,p,m=function(t){return t?(e=t,parseInt(O.getComputedStyle(e).height,10)+t.offsetTop):0;var e}(A),y=u?a:function(t,e,n,o){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-e-n,0),o&&(i=Math.min(i,C()-O.innerHeight)),i}(e,m,parseInt("function"==typeof l.offset?l.offset(a,s):l.offset,10),l.clip),v=y-c,g=C(),w=0,S=(n=v,i=(o=l).speedAsDuration?o.speed:Math.abs(n/1e3*o.speed),o.durationMax&&i>o.durationMax?o.durationMax:o.durationMin&&i<o.durationMin?o.durationMin:parseInt(i,10)),b=function(t){var e,n,o;h||(h=t),w+=t-h,d=c+v*(n=r=1<(r=0===S?0:w/S)?1:r,"easeInQuad"===(e=l).easing&&(o=n*n),"easeOutQuad"===e.easing&&(o=n*(2-n)),"easeInOutQuad"===e.easing&&(o=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===e.easing&&(o=n*n*n),"easeOutCubic"===e.easing&&(o=--n*n*n+1),"easeInOutCubic"===e.easing&&(o=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===e.easing&&(o=n*n*n*n),"easeOutQuart"===e.easing&&(o=1- --n*n*n*n),"easeInOutQuart"===e.easing&&(o=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===e.easing&&(o=n*n*n*n*n),"easeOutQuint"===e.easing&&(o=1+--n*n*n*n*n),"easeInOutQuint"===e.easing&&(o=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),e.customEasing&&(o=e.customEasing(n)),o||n),O.scrollTo(0,Math.floor(d)),function(t,e){var n,o,i,r=O.pageYOffset;if(t==e||r==e||(c<e&&O.innerHeight+r)>=g)return k.cancelScroll(!0),o=e,i=u,0===(n=a)&&document.body.focus(),i||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),O.scrollTo(0,o)),T("scrollStop",l,a,s),!(E=h=null)}(d,y)||(E=O.requestAnimationFrame(b),h=t)};0===O.pageYOffset&&O.scrollTo(0,0),f=a,p=l,u||history.pushState&&p.updateURL&&history.pushState({smoothScroll:JSON.stringify(p),anchor:f.id},document.title,f===document.documentElement?"#top":"#"+f.id),T("scrollStart",l,a,s),k.cancelScroll(!0),O.requestAnimationFrame(b)}};function e(t){if(!("matchMedia"in O&&O.matchMedia("(prefers-reduced-motion)").matches)&&!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(i=t.target.closest(o))&&"a"===i.tagName.toLowerCase()&&!t.target.closest(x.ignore)&&i.hostname===O.location.hostname&&i.pathname===O.location.pathname&&/#/.test(i.href)){var e,n=r(i.hash);if("#"===n){if(!x.topOnEmptyHash)return;e=document.documentElement}else e=document.querySelector(n);(e=e||"#top"!==n?e:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var e=O.location.hash;e=e||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:e||O.pageYOffset},document.title,e||O.location.href)}}(x),k.animateScroll(e,i))}}function n(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(x)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(r(history.state.anchor)))||k.animateScroll(e,null,{updateURL:!1})}}return k.destroy=function(){x&&(document.removeEventListener("click",e,!1),O.removeEventListener("popstate",n,!1),k.cancelScroll(),E=A=i=x=null)},function(){if(!("querySelector"in document&&"addEventListener"in O&&"requestAnimationFrame"in O&&"closest"in O.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";k.destroy(),x=q(L,t||{}),A=x.header?document.querySelector(x.header):null,document.addEventListener("click",e,!1),x.updateURL&&x.popstate&&O.addEventListener("popstate",n,!1)}(),k}},void 0===(a=function(){return n(e)}.apply(r,[]))||(i.exports=a)}).call(r,function(){return this}())},function(t,e){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(e,"__esModule",{value:!0});var n=(function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(i,[{key:"events",value:function(){var e=this;this.openModalButton.addEventListener("click",this.openModal.bind(this)),this.closeModalButton.addEventListener("click",this.closeModal.bind(this)),document.addEventListener("keyup",function(t){"Escape"==t.key&&e.closeModal()})}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}}]),i);function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.openModalButton=document.querySelector(".open-modal"),this.modal=document.querySelector(".modal"),this.closeModalButton=document.querySelector(".modal__close"),this.events()}e.default=n}]);