jQuery(document).ready(function(t){function o(){"object"!=typeof window.maxFoundry.maxmodal&&(window.maxFoundry.maxmodal=new maxModal,window.maxFoundry.maxmodal.init()),"object"!=typeof window.maxFoundry.maxAjax&&(window.maxFoundry.maxAjax=new maxAjax,window.maxFoundry.maxAjax.init()),this.maxmodal=window.maxFoundry.maxmodal,this.maxajax=window.maxFoundry.maxAjax}$=t,(o.prototype={parent:"body",is_active:!1,maxmodal:null,maxajax:null,callback:null,useShortCodeOptions:!0,shortcodeData:null,getPage:1,ajaxSuccessHandler:null}).init=function(t){void 0!==t&&(void 0!==t.callback&&(this.callback=t.callback||null),void 0!==t.useShortCodeOptions&&(this.useShortCodeOptions=t.useShortCodeOptions),void 0!==t.parent&&(this.parent=t.parent)),this.ajaxSuccessHandler=$.proxy(this.putContent,this),$(document).off("click",".pagination span, .pagination-links a",$.proxy(this.doPagination,this)),$(document).on("click",".pagination span, .pagination-links a",$.proxy(this.doPagination,this)),$(document).off("media_button_content_buttons_load",$.proxy(this.hookButtonAction,this)),$(document).on("media_button_content_buttons_load",$.proxy(this.hookButtonAction,this)),$(document).off("media_button_content_shortcode_options",$.proxy(this.hookShortCodeAction,this)),$(document).on("media_button_content_shortcode_options",$.proxy(this.hookShortCodeAction,this))},o.prototype.openModal=function(){this.maxmodal.newModal("media-popup"),this.maxmodal.parent=this.parent,this.maxmodal.setTitle(mbtrans.windowtitle),this.maxmodal.setContent('<span class="loading"></span>'),this.maxmodal.show(),this.maxajax.showSpinner($(".loading")),this.loadButtons(),this.is_active=!0},o.prototype.loadButtons=function(){var t=this.maxajax.ajaxInit();t.plugin_action="getAjaxButtons",t.page=this.getPage,this.maxajax.ajaxPost(t,this.ajaxSuccessHandler)},o.prototype.putContent=function(t){t=JSON.parse(t);this.maxajax.removeSpinner(),void 0!==t.output&&this.maxmodal.setContent(t.output),void 0!==t.action&&$(document).trigger("media_button_content_"+t.action,t)},o.prototype.hookButtonAction=function(){$(document).off("click",".button-list"),$(document).on("click",".button-list",$.proxy(function(t){var o=$(t.target);void 0===$(o).data("button")&&(o=$(o).parents(".button-list"));var a=$(o).data("button");$(".button-list").removeClass("selected"),$(o).addClass("selected"),$(".controls .button-primary").data("button",a),this.maxmodal.currentModal.find(".controls .button-primary").removeClass("disabled")},this)),$(document).off("click",".button-preview a"),$(document).on("click",".button-preview a",function(t){t.preventDefault()}),this.maxmodal.resetControls(),this.useShortCodeOptions?this.maxmodal.addControl(mbtrans.use,"",$.proxy(this.shortCodeOptions,this)):this.maxmodal.addControl(mbtrans.insert,"",$.proxy(this.selectAction,this)),this.maxmodal.setControls(),this.maxmodal.currentModal.find(".controls .button-primary").addClass("disabled"),this.maxmodal.checkResize()},o.prototype.hookShortCodeAction=function(t,o){this.shortcodeData=o.shortcodeData;var a=o.button_id;this.maxmodal.resetControls(),this.maxmodal.addControl(mbtrans.insert,"",$.proxy(this.selectAction,this)),this.maxmodal.setControls(),$(this.maxmodal.currentModal).find(".controls .button-primary").data("button",a),$(this.maxmodal.currentModal).find(".more-options a").off("click"),$(this.maxmodal.currentModal).find(".more-options a").on("click",$.proxy(function(t){$(this.maxmodal.currentModal).find(".more-field").show(),$(t.target).parents(".option .more").hide(),this.maxmodal.checkResize()},this)),this.maxmodal.checkResize()},o.prototype.selectAction=function(t){if(t.preventDefault(),!$(t.target).hasClass("disabled")){var o=$(t.target).data("button");void 0===o||parseInt(o)<=0||("function"==typeof this.callback?this.callback(o,$(t.target)):(this.buttonToEditor(o),this.close()))}},o.prototype.shortCodeOptions=function(t){if(t.preventDefault(),!$(t.target).hasClass("disabled")){var o=$(t.target).data("button"),a=this.maxajax.ajaxInit();a.plugin_action="mediaShortcodeOptions",a.button_id=o,this.maxajax.ajaxPost(a,this.ajaxSuccessHandler)}},o.prototype.doPagination=function(t){if(t.preventDefault(),$(t.target).hasClass("disabled"))return!1;var o=$(t.target).data("page");o<=1&&(o=1),this.getPage=o,this.loadButtons()},o.prototype.generateShortcode=function(t){var o='[maxbutton id="'+t+'"';return void 0!==this.shortcodeData&&$(this.shortcodeData).each(function(t,a){var n=$('input[name="'+a.name+'"]'),i=$('input[name="'+a.name+'"]').val();if("checkbox"==n.attr("type")){var e=n.is(":checked");e!=a.original&&(o+=e?" "+a.shortcode+'="'+a.checked+'"':" "+a.shortcode+'="'+a.unchecked+'"')}else i!=a.original&&(o+=" "+a.shortcode+'="'+i+'"')}),o+=" ] "},o.prototype.buttonToEditor=function(t){shortcode=this.generateShortcode(t),window.send_to_editor(shortcode,t)},o.prototype.close=function(){this.maxmodal.close()},void 0===window.maxFoundry&&(window.maxFoundry={}),window.maxFoundry.maxMedia=o});