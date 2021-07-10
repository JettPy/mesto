(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.name,this._image=t.link,this._likes=t.likes,this._id=t._id,this._owner=t.owner,this._createdAt=t.createdAt,this._cardSelector=n,this._handlerCardClick=r,this._handlerCardDelite=o,this._handlerCardLike=i,this._userId=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0);return this._templateImage=e.querySelector(".element__image"),this._templateTitle=e.querySelector(".element__title"),this._templateLikes=e.querySelector(".element__likes"),this._likeButton=e.querySelector(".button_type_like"),e}},{key:"handleLikeClick",value:function(e){this._likes=e,this._likeButton.classList.toggle("button_active"),this._templateLikes.textContent=this._likes.length}},{key:"handleDeleteClick",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this,t=this._element.querySelector(".button_type_like"),n=this._element.querySelector(".button_type_delete"),r=this._element.querySelector(".button_type_image");t.addEventListener("click",(function(){e._handlerCardLike(e)})),this._owner._id===this._userId?n.addEventListener("click",(function(){e._handlerCardDelite(e)})):n.remove(),n.addEventListener("click",(function(){e._handlerCardDelite(e)})),r.addEventListener("click",(function(){e._handlerCardClick(e._image,e._title)}))}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._setEventListeners(),this._templateImage.src=this._image,this._templateImage.alt=this._title,this._templateTitle.textContent=this._title,this._templateLikes.textContent=this._likes.length,this._likes.some((function(t){return e._userId===t._id}))&&this._likeButton.classList.toggle("button_active"),this._element}},{key:"getId",value:function(){return this._id}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"refreshForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){this._clear();for(var e=this._renderedItems.length-1;e>=0;--e)this.addItem(this._renderer(this._renderedItems[e]))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".button_type_close"),n=this._popup.querySelector(".dialog-window");t.addEventListener("click",(function(){e.close()})),n.addEventListener("mousedown",(function(e){e.stopPropagation()})),this._popup.addEventListener("mousedown",(function(t){e.close()}))}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t,f(_(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),u}(s);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handler=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._submitButton=n._popup.querySelector(".popup__button"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){m(g(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;m(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handler(t,e._getInputValues())}))}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}}])&&v(t.prototype,n),u}(s);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.statusSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._statusElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,status:this._statusElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.status;this._nameElement.textContent=t,this._statusElement.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}},{key:"getId",value:function(){return this._id}},{key:"setId",value:function(e){this._id=e}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardsUrl=t.baseUrl+"/cards",this._userUrl=t.baseUrl+"/users/me",this._likesUrl=t.baseUrl+"/cards/likes/",this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._userUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{headers:this._headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e,t){return fetch(this._userUrl,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch(this._cardsUrl,{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this._cardsUrl+"/"+e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch(this._likesUrl+e,{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch(this._likesUrl+e,{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch(this._userUrl+"/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&C(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handler=t,n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;P(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handler(t)}))}},{key:"setCurrentCard",value:function(e){this._card=e}},{key:"getCurrentCard",value:function(){return this._card}}])&&I(t.prototype,n),u}(s),B=document.querySelector(".button_type_edit"),T=document.querySelector(".button_type_add"),x=document.querySelector(".profile__avatar-button"),D=document.querySelector(".popup__input_field_name"),A=document.querySelector(".popup__input_field_status"),V=new w({nameSelector:".profile__name",statusSelector:".profile__status",avatarSelector:".profile__avatar"}),F=new E(".popup_place_profile",(function(e,t){e.preventDefault(),F.renderLoading(!0),Q.updateUserInfo(t.name,t.status).then((function(){V.setUserInfo(t),F.close()})).catch((function(e){console.log(e)})).finally((function(){F.renderLoading(!1)}))})),N=new E(".popup_place_add-element",(function(e,t){e.preventDefault(),N.renderLoading(!0),Q.addCard(t.title,t.image).then((function(e){var t;t=$(e),W.addItem(t),N.close()})).catch((function(e){console.log(e)})).finally((function(){N.renderLoading(!1)}))})),H=new d(".popup_place_element-image"),J=new E(".popup_place_edit-avatar",(function(e,t){e.preventDefault(),J.renderLoading(!0),Q.updateAvatar(t.avatar).then((function(){V.setUserAvatar(t.avatar),J.close()})).catch((function(e){console.log(e)})).finally((function(){J.renderLoading(!1)}))})),M=new U(".popup_place_delite-element",(function(e){e.preventDefault();var t=M.getCurrentCard();Q.deleteCard(t.getId()).then((function(){t.handleDeleteClick(),M.close()})).catch((function(e){console.log(e)}))})),z=new o(e,document.forms.profile),G=new o(e,document.forms.element),K=new o(e,document.forms.avatar),Q=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-25",headers:{authorization:"bd192512-52fc-48cd-9611-18a277475c8c","Content-Type":"application/json"}}),W=void 0;function X(e,t){H.open(e,t)}function Y(e){M.setCurrentCard(e),M.open()}function Z(e){var t=this,n=e.getId();return(this._likes.some((function(e){return t._userId===e._id}))?Q.dislike(n):Q.like(n)).then((function(t){e.handleLikeClick(t.likes)})).catch((function(e){console.log(e)}))}function $(e){return new n(e,"#element",X,Y,Z,V.getId()).generateCard()}B.addEventListener("click",(function(){var e=V.getUserInfo();D.value=e.name,A.value=e.status,z.refreshForm(),F.open()})),T.addEventListener("click",(function(){G.refreshForm(),N.open()})),x.addEventListener("click",(function(){K.refreshForm(),J.open()})),Promise.all([Q.getUserInfo(),Q.getInitialCards()]).then((function(e){var t,n;t=e[0],V.setUserInfo({name:t.name,status:t.about}),V.setUserAvatar(t.avatar),V.setId(t._id),n=e[1],(W=new u({items:n,renderer:function(e){return $(e)}},".elements")).renderItems()})).catch((function(e){console.log(e)})),F.setEventListeners(),N.setEventListeners(),H.setEventListeners(),J.setEventListeners(),M.setEventListeners(),z.enableValidation(),G.enableValidation(),K.enableValidation()})();