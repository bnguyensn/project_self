webpackJsonp([0],{11:function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(c(o.parts[i],n));d[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var n=[],t={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],c=r[3],s={css:a,media:l,sourceMap:c};t[i]?t[i].parts.push(s):n.push(t[i]={id:i,parts:[s]})}return n}function r(e,n){var t=m(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),y.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=y.indexOf(e);n>=0&&y.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",r(e,n),n}function l(e){var n=document.createElement("link");return n.rel="stylesheet",r(e,n),n}function c(e,n){var t,o,r;if(n.singleton){var c=g++;t=b||(b=a(n)),o=s.bind(null,t,c,!1),r=s.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(n),o=f.bind(null,t),r=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),o=u.bind(null,t),r=function(){i(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function s(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function u(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,o=n.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}},p=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,y=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.singleton&&(n.singleton=p()),void 0===n.insertAt&&(n.insertAt="bottom");var r=o(e);return t(r,n),function(e){for(var i=[],a=0;a<r.length;a++){var l=r[a],c=d[l.id];c.refs--,i.push(c)}if(e){t(o(e),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete d[c.id]}}}};var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},16:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return c.a.createElement("div",{id:"greeting"},c.a.createElement("span",{className:"block color-teal"},"Hello,"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("span",{className:"block text-justify"},"Congratulations on finding my site! Feel free to explore around and may you find what you need.",c.a.createElement("br",null),c.a.createElement("br",null),"Much love,"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("a",{className:"block text-right",href:"https://twitter.com/bnguyensn",target:"blank"},"@bnguyensn"))}var l=t(0),c=t.n(l),s=t(50),u=(t.n(s),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),f=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),u(n,[{key:"render",value:function(){return c.a.createElement("div",{id:"content-container"},c.a.createElement("div",{className:"wrapper",id:"content"},c.a.createElement(a,null)))}}]),n}(l.Component);n.a=f},17:function(e,n){},18:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return c.a.createElement("nav",{id:"nav"},c.a.createElement("span",null,c.a.createElement("a",{href:"/projects"},"Projects")),c.a.createElement("span",null,c.a.createElement("a",{href:"/about"},"About")))}var l=t(0),c=t.n(l),s=t(51),u=(t.n(s),function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}()),f=function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),u(n,[{key:"render",value:function(){return c.a.createElement("div",{id:"header-container"},c.a.createElement("div",{className:"wrapper",id:"header"},c.a.createElement(a,null)))}}]),n}(l.Component);n.a=f},21:function(e,n,t){var o=t(25);"string"==typeof o&&(o=[[e.i,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},22:function(e,n){e.exports=ReactDOM},23:function(e,n,t){n=e.exports=t(6)(),n.push([e.i,"/* ===== RESPONSIVE WEB DESIGN ===== */\n\n/* Each row should be wrapped in a <div> */\n/* The sum of columns inside a row should add up to 12 */\n\n/* Prevent other elements from ignoring the columns' flow within the page */\n\n.row::after {\n    content: '';\n    clear: both;\n    display: block;\n}\n\n/* Mobile first */\n\n[class*='col-'] {\n    width: 100%;\n    float: left;\n}\n\n.mobile-hide {\n    display: none;\n}\n\n/* Desktop/tablet second */\n\n@media only screen and (min-width: 768px) {\n    .col-1 {width: 8.33%;}\n    .col-2 {width: 16.66%;}\n    .col-3 {width: 25%;}\n    .col-4 {width: 33.33%;}\n    .col-5 {width: 41.66%;}\n    .col-6 {width: 50%;}\n    .col-7 {width: 58.33%;}\n    .col-8 {width: 66.66%;}\n    .col-9 {width: 75%;}\n    .col-10 {width: 83.33%;}\n    .col-11 {width: 91.66%;}\n    .col-12 {width: 100%;}\n\n    .mobile-hide {\n        display: block;\n    }\n\n    .mobile-show {\n        display: none;\n    }\n}\n\n\n\n/* ===== MAIN CONTENT ===== */\n\n#content {\n    padding: 20px;\n}\n\n#greeting {\n    cursor: text;\n}",""])},24:function(e,n,t){n=e.exports=t(6)(),n.push([e.i,"/* ===== HEADER ===== */\n\n#header {\n    padding: 10px;\n    text-align: right;\n}\n\n#header span {\n    display: inline-block;\n    margin: 0 10px;\n    border-bottom: 1px solid #03A9F4; /* Light Blue 500 */\n}\n\n\n\n\n\n\n\n\n/* Header (Mobile) */\n\n#header-mobile {\n    height: 20px;\n    /* Note this container has a similar height to the icon elements it contains */\n    /* This is to vertically align the container's child elements */\n}\n\n#header-mobile div {\n    display: inline-block;\n    width: 50%;\n    height: 20px;\n    /* There are 2 main elements under #header-mobile, hence the width of each should be 50% */\n    /* Text-aligning rules are set inline directly within the .html file */\n}\n\n#header-mobile i {\n    line-height: 20px;\n    /* The line height of the icon element is equal to the height of its container */\n    /* This vertically center the icon element */\n}\n\n/* Nav Overlay (Mobile) */\n/* This is the overlay appearing when the menu button is clicked */\n\n#nav-overlay-m {\n    position: fixed; top: 40px; left: 0;\n    /* The overlay is positioned immediately below the header */\n    /* The header has a height of 20px, but we have to add in 10px x 2 to account for the padding*/\n\n    width: 100%; height: 100%;\n    background-color: #212121;\n    opacity: .9; filter: alpha(opacity = 90);\n\n    padding: 10px;\n}\n\n#nav-overlay-m div {\n    padding: 5px;\n    text-align: right;\n}\n\n#nav-overlay-m a {\n    color: #fafafa;\n}\n\n/* Header (Desktop) */\n\n#header-desktop {\n    height: 20px;\n\n    line-height: 20px;\n    /* Setting line-height to >= font-size will vertically align single-line inline elements */\n\n    font-size: 18px;\n}\n\n#logo-title {\n    color: #66bb6a;\n}\n\n/* Nav Bar (Desktop) */\n\n#nav-d {\n    color: #fafafa;\n}\n\n/*#nav-d:before {  // 08/01/2017: Don't know what this relates to...\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    height: 100%;\n}*/\n\n#nav-d a {\n    display: inline-block;\n    padding: 0 10px 0 10px;\n    color: #fafafa;\n}\n\n#nav-d a:hover {\n    color: #2196F3;\n}",""])},25:function(e,n,t){n=e.exports=t(6)(),n.push([e.i,"* {\n    /* Make padding and border are included in the total width and height of elements */\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    background-color: #f5f5f5;\n    /*font: 14px 'Open Sans', sans-serif;*/\n    font: 18px 'Gentium Basic', serif;\n}\n\na {\n    color: #03A9F4; /* Light Blue 500 */\n    text-decoration: none;\n}\n\n.wrapper {\n    /* Center content horizontally when the screen is large */\n    max-width: 414px; /* Breakpoint is 768px */\n    margin: 0 auto; /* This center the class horizontally */\n}\n\n.hidden {display: none;}\n.block {display: block;}\n.inline-block {display: inline-block;}\n.text-left {text-align: left;}\n.text-center {text-align: center;}\n.text-right {text-align: right;}\n.text-justify {text-align: justify;}\n.text-bold {font-weight: bold;}\n.color-teal {color: #009688; /* Teal 500 */}\n\n/* ===== RESPONSIVE WEB DESIGN ===== */\n\n/* Change the size of certain elements to fit different screens */\n\n@media only screen and (max-width: 414px) {\n    body {\n        font-size: 18px;\n    }\n}\n\n/* ===== Snippets ===== */\n\n/* Google's material design icon guidelines */\n\n/* Rules for sizing the icon. */\n.material-icons.md-18 { font-size: 18px; }\n.material-icons.md-24 { font-size: 24px; }\n.material-icons.md-36 { font-size: 36px; }\n.material-icons.md-48 { font-size: 48px; }\n\n/* Rules for using icons as black on a light background. */\n.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }\n\n/* Rules for using icons as white on a dark background. */\n.material-icons.md-light { color: rgba(255, 255, 255, 1); }\n.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }",""])},50:function(e,n,t){var o=t(23);"string"==typeof o&&(o=[[e.i,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},51:function(e,n,t){var o=t(24);"string"==typeof o&&(o=[[e.i,o,""]]);t(11)(o,{});o.locals&&(e.exports=o.locals)},55:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),i=t(22),a=t.n(i),l=t(16),c=t(18),s=t(17),u=(t.n(s),t(21));t.n(u);a.a.render(r.a.createElement(c.a,null),document.getElementById("root-header")),a.a.render(r.a.createElement(l.a,null),document.getElementById("root-content"))},6:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}}},[55]);