/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ShortcutProvider:function(){return j},__unstableUseShortcutEventMatch:function(){return T},store:function(){return C},useShortcut:function(){return k}});var n={};e.r(n),e.d(n,{registerShortcut:function(){return i},unregisterShortcut:function(){return u}});var r={};e.r(r),e.d(r,{getAllShortcutKeyCombinations:function(){return w},getAllShortcutRawKeyCombinations:function(){return m},getCategoryShortcuts:function(){return R},getShortcutAliases:function(){return b},getShortcutDescription:function(){return S},getShortcutKeyCombination:function(){return g},getShortcutRepresentation:function(){return v}});var o=window.wp.data;var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_SHORTCUT":return{...e,[t.name]:{category:t.category,keyCombination:t.keyCombination,aliases:t.aliases,description:t.description}};case"UNREGISTER_SHORTCUT":const{[t.name]:n,...r}=e;return r}return e};function i(e){let{name:t,category:n,description:r,keyCombination:o,aliases:a}=e;return{type:"REGISTER_SHORTCUT",name:t,category:n,keyCombination:o,aliases:a,description:r}}function u(e){return{type:"UNREGISTER_SHORTCUT",name:e}}var c={};function s(e){return[e]}function l(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function f(e,t){var n,r=t||s;function o(e){var t,r,o,a,i,u=n,s=!0;for(t=0;t<e.length;t++){if(r=e[t],!(i=r)||"object"!=typeof i){s=!1;break}u.has(r)?u=u.get(r):(o=new WeakMap,u.set(r,o),u=o)}return u.has(c)||((a=function(){var e={clear:function(){e.head=null}};return e}()).isUniqueByDependants=s,u.set(c,a)),u.get(c)}function a(){n=new WeakMap}function i(){var t,n,a,i,u,c=arguments.length;for(i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];for((t=o(u=r.apply(null,i))).isUniqueByDependants||(t.lastDependants&&!l(u,t.lastDependants,0)&&t.clear(),t.lastDependants=u),n=t.head;n;){if(l(n.args,i,1))return n!==t.head&&(n.prev.next=n.next,n.next&&(n.next.prev=n.prev),n.next=t.head,n.prev=null,t.head.prev=n,t.head=n),n.val;n=n.next}return n={val:e.apply(null,i)},i[0]=null,n.args=i,t.head&&(t.head.prev=n,n.next=t.head),t.head=n,n.val}return i.getDependants=r,i.clear=a,a(),i}var d=window.wp.keycodes;const p=[],h={display:d.displayShortcut,raw:d.rawShortcut,ariaLabel:d.shortcutAriaLabel};function y(e,t){return e?e.modifier?h[t][e.modifier](e.character):e.character:null}function g(e,t){return e[t]?e[t].keyCombination:null}function v(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"display";const r=g(e,t);return y(r,n)}function S(e,t){return e[t]?e[t].description:null}function b(e,t){return e[t]&&e[t].aliases?e[t].aliases:p}const w=f(((e,t)=>[g(e,t),...b(e,t)].filter(Boolean)),((e,t)=>[e[t]])),m=f(((e,t)=>w(e,t).map((e=>y(e,"raw")))),((e,t)=>[e[t]])),R=f(((e,t)=>Object.entries(e).filter((e=>{let[,n]=e;return n.category===t})).map((e=>{let[t]=e;return t}))),(e=>[e])),C=(0,o.createReduxStore)("core/keyboard-shortcuts",{reducer:a,actions:n,selectors:r});(0,o.register)(C);var O=window.wp.element;function T(){const{getAllShortcutKeyCombinations:e}=(0,o.useSelect)(C);return function(t,n){return e(t).some((e=>{let{modifier:t,character:r}=e;return d.isKeyboardEvent[t](n,r)}))}}const E=(0,O.createContext)();function k(e,t){let{isDisabled:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=(0,O.useContext)(E),o=T(),a=(0,O.useRef)();a.current=t,(0,O.useEffect)((()=>{if(!n)return r.current.add(t),()=>{r.current.delete(t)};function t(t){o(e,t)&&a.current(t)}}),[e,n])}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}const{Provider:x}=E;function j(e){const t=(0,O.useRef)(new Set);return(0,O.createElement)(x,{value:t},(0,O.createElement)("div",D({},e,{onKeyDown:function(n){e.onKeyDown&&e.onKeyDown(n);for(const e of t.current)e(n)}})))}(window.wp=window.wp||{}).keyboardShortcuts=t}();