(function(a,c,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(d){b(d,a,c);return d.mobile})}else{b(a.jQuery,a,c)}}(this,document,function(c,b,a,d){(function(e){e.mobile={}}(c));(function(f,g){var e={touch:"ontouchend" in a};f.mobile.support=f.mobile.support||{};f.extend(f.support,e);f.extend(f.mobile.support,e)}(c));(function(B,K,j,q){var J="virtualMouseBindings",f="virtualTouchID",e="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),A="clientX clientY pageX pageY screenX screenY".split(" "),G=B.event.mouseHooks?B.event.mouseHooks.props:[],C=B.event.props.concat(G),E={},L=0,w=0,v=0,t=false,O=[],l=false,V=false,y="addEventListener" in j,x=B(j),I=1,R=0,g;B.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};function u(i){while(i&&typeof i.originalEvent!=="undefined"){i=i.originalEvent}return i}function m(X,Y){var ag=X.type,ah,af,Z,W,ad,ac,ab,aa,ae;X=B.Event(X);X.type=Y;ah=X.originalEvent;af=B.event.props;if(ag.search(/^(mouse|click)/)>-1){af=C}if(ah){for(ab=af.length,W;ab;){W=af[--ab];X[W]=ah[W]}}if(ag.search(/mouse(down|up)|click/)>-1&&!X.which){X.which=1}if(ag.search(/^touch/)!==-1){Z=u(ah);ag=Z.touches;ad=Z.changedTouches;ac=(ag&&ag.length)?ag[0]:((ad&&ad.length)?ad[0]:q);if(ac){for(aa=0,ae=A.length;aa<ae;aa++){W=A[aa];X[W]=ac[W]}}}return X}function T(Y){var W={},i,X;while(Y){i=B.data(Y,J);for(X in i){if(i[X]){W[X]=W.hasVirtualBinding=true}}Y=Y.parentNode}return W}function F(X,W){var i;while(X){i=B.data(X,J);if(i&&(!W||i[W])){return X}X=X.parentNode}return null}function N(){V=false}function o(){V=true}function U(){R=0;O.length=0;l=false;o()}function s(){N()}function z(){D();L=setTimeout(function(){L=0;U()},B.vmouse.resetTimerDuration)}function D(){if(L){clearTimeout(L);L=0}}function r(X,Y,i){var W;if((i&&i[X])||(!i&&F(Y.target,X))){W=m(Y,X);B(Y.target).trigger(W)}return W}function n(W){var X=B.data(W.target,f);if(!l&&(!R||R!==X)){var i=r("v"+W.type,W);if(i){if(i.isDefaultPrevented()){W.preventDefault()}if(i.isPropagationStopped()){W.stopPropagation()}if(i.isImmediatePropagationStopped()){W.stopImmediatePropagation()}}}}function S(X){var Z=u(X).touches,Y,i;if(Z&&Z.length===1){Y=X.target;i=T(Y);if(i.hasVirtualBinding){R=I++;B.data(Y,f,R);D();s();t=false;var W=u(X).touches[0];w=W.pageX;v=W.pageY;r("vmouseover",X,i);r("vmousedown",X,i)}}}function M(i){if(V){return}if(!t){r("vmousecancel",i,T(i.target))}t=true;z()}function h(Z){if(V){return}var X=u(Z).touches[0],W=t,Y=B.vmouse.moveDistanceThreshold,i=T(Z.target);t=t||(Math.abs(X.pageX-w)>Y||Math.abs(X.pageY-v)>Y);if(t&&!W){r("vmousecancel",Z,i)}r("vmousemove",Z,i);z()}function k(Y){if(V){return}o();var i=T(Y.target),X;r("vmouseup",Y,i);if(!t){var W=r("vclick",Y,i);if(W&&W.isDefaultPrevented()){X=u(Y).changedTouches[0];O.push({touchID:R,x:X.clientX,y:X.clientY});l=true}}r("vmouseout",Y,i);t=false;z()}function H(W){var X=B.data(W,J),i;if(X){for(i in X){if(X[i]){return true}}}return false}function Q(){}function p(i){var W=i.substr(1);return{setup:function(Y,X){if(!H(this)){B.data(this,J,{})}var Z=B.data(this,J);Z[i]=true;E[i]=(E[i]||0)+1;if(E[i]===1){x.bind(W,n)}B(this).bind(W,Q);if(y){E.touchstart=(E.touchstart||0)+1;if(E.touchstart===1){x.bind("touchstart",S).bind("touchend",k).bind("touchmove",h).bind("scroll",M)}}},teardown:function(Y,X){--E[i];if(!E[i]){x.unbind(W,n)}if(y){--E.touchstart;if(!E.touchstart){x.unbind("touchstart",S).unbind("touchmove",h).unbind("touchend",k).unbind("scroll",M)}}var Z=B(this),aa=B.data(this,J);if(aa){aa[i]=false}Z.unbind(W,Q);if(!H(this)){Z.removeData(J)}}}}for(var P=0;P<e.length;P++){B.event.special[e[P]]=p(e[P])}if(y){j.addEventListener("click",function(aa){var X=O.length,ab=aa.target,ad,ac,ae,Z,W,Y;if(X){ad=aa.clientX;ac=aa.clientY;g=B.vmouse.clickDistanceThreshold;ae=ab;while(ae){for(Z=0;Z<X;Z++){W=O[Z];Y=0;if((ae===ab&&Math.abs(W.x-ad)<g&&Math.abs(W.y-ac)<g)||B.data(ae,f)===W.touchID){aa.preventDefault();aa.stopPropagation();return}}ae=ae.parentNode}}},true)}})(c,b,a);(function(h,m,e){var f=h(a);h.each(("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop").split(" "),function(p,o){h.fn[o]=function(q){return q?this.bind(o,q):this.trigger(o)};if(h.attrFn){h.attrFn[o]=true}});var i=h.mobile.support.touch,j="touchmove scroll",n=i?"touchstart":"mousedown",l=i?"touchend":"mouseup",g=i?"touchmove":"mousemove";function k(r,o,q){var p=q.type;q.type=o;h.event.dispatch.call(r,q);q.type=p}h.event.special.scrollstart={enabled:true,setup:function(){var o=this,r=h(o),q,s;function p(t,u){q=u;k(o,q?"scrollstart":"scrollstop",t)}r.bind(j,function(t){if(!h.event.special.scrollstart.enabled){return}if(!q){p(t,true)}clearTimeout(s);s=setTimeout(function(){p(t,false)},50)})}};h.event.special.tap={tapholdThreshold:750,setup:function(){var o=this,p=h(o);p.bind("vmousedown",function(t){if(t.which&&t.which!==1){return false}var s=t.target,q=t.originalEvent,w;function r(){clearTimeout(w)}function v(){r();p.unbind("vclick",u).unbind("vmouseup",r);f.unbind("vmousecancel",v)}function u(x){v();if(s===x.target){k(o,"tap",x)}}p.bind("vmouseup",r).bind("vclick",u);f.bind("vmousecancel",v);w=setTimeout(function(){k(o,"taphold",h.Event("taphold",{target:s}))},h.event.special.tap.tapholdThreshold)})}};h.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(o){var p=o.originalEvent.touches?o.originalEvent.touches[0]:o;return{time:(new Date()).getTime(),coords:[p.pageX,p.pageY],origin:h(o.target)}},stop:function(o){var p=o.originalEvent.touches?o.originalEvent.touches[0]:o;return{time:(new Date()).getTime(),coords:[p.pageX,p.pageY]}},handleSwipe:function(p,o){if(o.time-p.time<h.event.special.swipe.durationThreshold&&Math.abs(p.coords[0]-o.coords[0])>h.event.special.swipe.horizontalDistanceThreshold&&Math.abs(p.coords[1]-o.coords[1])<h.event.special.swipe.verticalDistanceThreshold){p.origin.trigger("swipe").trigger(p.coords[0]>o.coords[0]?"swipeleft":"swiperight")}},setup:function(){var o=this,p=h(o);p.bind(n,function(r){var t=h.event.special.swipe.start(r),q;function s(u){if(!t){return}q=h.event.special.swipe.stop(u);if(Math.abs(t.coords[0]-q.coords[0])>h.event.special.swipe.scrollSupressionThreshold){u.preventDefault()}}p.bind(g,s).one(l,function(){p.unbind(g,s);if(t&&q){h.event.special.swipe.handleSwipe(t,q)}t=q=e})})}};h.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(p,o){h.event.special[p]={setup:function(){h(this).bind(o,h.noop)}}})})(c,this)}));