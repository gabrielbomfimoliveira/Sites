!function(s){s.fn.jPushMenu=function(t){var o=s.extend({},s.fn.jPushMenu.defaultOptions,t);s("body").addClass(o.pushBodyClass),s(this).addClass("jPushMenuBtn"),s(this).click(function(t){t.stopPropagation();var e="",n="";s(this).is("."+o.showLeftClass)?(e=".cbp-spmenu-left",n="toright"):s(this).is("."+o.showRightClass)?(e=".cbp-spmenu-right",n="toleft"):s(this).is("."+o.showTopClass)?e=".cbp-spmenu-top":s(this).is("."+o.showBottomClass)&&(e=".cbp-spmenu-bottom"),""!=e&&(s(this).toggleClass(o.activeClass),s(e).toggleClass(o.menuOpenClass),s(this).is("."+o.pushBodyClass)&&""!=n&&s("body").toggleClass(o.pushBodyClass+"-"+n),s(".jPushMenuBtn").not(s(this)).toggleClass("disabled"))});var e=function(t){s(".jPushMenuBtn,body,.cbp-spmenu").removeClass("disabled "+t.activeClass+" "+t.menuOpenClass+" "+t.pushBodyClass+"-toleft "+t.pushBodyClass+"-toright")};o.closeOnClickOutside&&s(document).click(function(){e(o)})},s.fn.jPushMenu.defaultOptions={pushBodyClass:"push-body",showLeftClass:"menu-left",showRightClass:"menu-right",showTopClass:"menu-top",showBottomClass:"menu-bottom",activeClass:"menu-active",menuOpenClass:"menu-open",closeOnClickOutside:!0,closeOnClickLink:!0}}(jQuery);