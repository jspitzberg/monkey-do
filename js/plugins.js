
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(a){function h(){var b=this;if(this.isShown&&this.settings.keyboard){a(document).bind("keyup.modal",function(a){if(a.which==27){b.hide()}})}else if(!this.isShown){a(document).unbind("keyup.modal")}}function g(){this.$backdrop.remove();this.$backdrop=null}function f(c){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.settings.backdrop){var f=a.support.transition&&e;this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(document.body);if(this.settings.backdrop!="static"){this.$backdrop.click(a.proxy(this.hide,this))}if(f){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");f?this.$backdrop.one(b,c):c()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(b,a.proxy(g,this)):g.call(this)}else if(c){c()}}function e(a){this.$element.hide().trigger("hidden");f.call(this)}function d(){var a=this,c=setTimeout(function(){a.$element.unbind(b);e.call(a)},500);this.$element.one(b,function(){clearTimeout(c);e.call(a)})}"use strict";var b;a(document).ready(function(){a.support.transition=function(){var a=document.body||document.documentElement,b=a.style,c=b.transition!==undefined||b.WebkitTransition!==undefined||b.MozTransition!==undefined||b.MsTransition!==undefined||b.OTransition!==undefined;return c}();if(a.support.transition){b="TransitionEnd";if(a.browser.webkit){b="webkitTransitionEnd"}else if(a.browser.mozilla){b="transitionend"}else if(a.browser.opera){b="oTransitionEnd"}}});var c=function(b,c){this.settings=a.extend({},a.fn.modal.defaults,c);this.$element=a(b).delegate(".close","click.modal",a.proxy(this.hide,this));if(this.settings.show){this.show()}return this};c.prototype={toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var c=this;this.isShown=true;this.$element.trigger("show");h.call(this);f.call(this,function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.appendTo(document.body).show();if(d){c.$element[0].offsetWidth}c.$element.addClass("in");d?c.$element.one(b,function(){c.$element.trigger("shown")}):c.$element.trigger("shown")});return this},hide:function(b){b&&b.preventDefault();if(!this.isShown){return this}var c=this;this.isShown=false;h.call(this);this.$element.trigger("hide").removeClass("in");a.support.transition&&this.$element.hasClass("fade")?d.call(this):e.call(this);return this}};a.fn.modal=function(b){var d=this.data("modal");if(!d){if(typeof b=="string"){b={show:/show|toggle/.test(b)}}return this.each(function(){a(this).data("modal",new c(this,b))})}if(b===true){return d}if(typeof b=="string"){d[b]()}else if(d){d.toggle()}return this};a.fn.modal.Modal=c;a.fn.modal.defaults={backdrop:false,keyboard:false,show:false};a(document).ready(function(){a("body").delegate("[data-controls-modal]","click",function(b){b.preventDefault();var c=a(this).data("show",true);a("#"+c.attr("data-controls-modal")).modal(c.data())})})}(window.jQuery||window.ender)


/* =========================================================
 * cookies
 * http://www.active.com/SiteFiles/3/templates/javascripts/application.js?ver=4.13.1
 * ========================================================= */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}