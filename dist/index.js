module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.r(t),n.d(t,"ReCaptcha",(function(){return v})),n.d(t,"loadReCaptcha",(function(){return h}));var r=n(0),o=n.n(r);n(1);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s,y=function(){return"undefined"!=typeof window&&void 0!==window.grecaptcha&&void 0!==window.grecaptcha.execute},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,n,r,a=u(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),d(l(t=a.call(this,e)),"execute",(function(){var e=t.props,n=e.sitekey,r=e.verifyCallback,o=e.action;t.state.ready&&window.grecaptcha.execute(n,{action:o}).then((function(e){void 0!==r&&r(e)}))})),d(l(t),"_updateReadyState",(function(){y()&&(t.setState((function(){return{ready:!0}})),clearInterval(s))})),t.state={ready:y()},t}return t=f,(n=[{key:"componentDidMount",value:function(){this.state.ready?this.execute():s=setInterval(this._updateReadyState,1e3)}},{key:"componentDidUpdate",value:function(e,t){this.state.ready&&!t.ready&&this.execute()}},{key:"componentWillUnmount",value:function(){clearInterval(s)}},{key:"render",value:function(){return this.state.ready?o.a.createElement("div",{id:this.props.elementID,"data-verifycallbackname":this.props.verifyCallbackName}):o.a.createElement("div",{id:this.props.elementID,className:"g-recaptcha"})}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component);b.defaultProps={elementID:"g-recaptcha",verifyCallbackName:"verifyCallback"};var v=b,h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=document.createElement("script");!window.onLoadCaptchaV3Callback&&t&&(window.onLoadCaptchaV3Callback=t),n.src="https://www.recaptcha.net/recaptcha/api.js?onload=onLoadCaptchaV3Callback&render=".concat(e),document.body.appendChild(n)}}]);