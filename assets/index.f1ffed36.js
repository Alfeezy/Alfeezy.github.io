(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(a){if(a.ep)return;a.ep=!0;const d=s(a);fetch(a.href,d)}})();function ae(){}function xt(e){return e()}function vt(){return Object.create(null)}function xe(e){e.forEach(xt)}function wt(e){return typeof e=="function"}function $t(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ye;function D(e,t){return ye||(ye=document.createElement("a")),ye.href=t,e===ye.href}function Mt(e){return Object.keys(e).length===0}let we=!1;function At(){we=!0}function Dt(){we=!1}function Nt(e,t,s,i){for(;e<t;){const a=e+(t-e>>1);s(a)<=i?e=a+1:t=a}return e}function Vt(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let c=0;c<t.length;c++){const y=t[c];y.claim_order!==void 0&&l.push(y)}t=l}const s=new Int32Array(t.length+1),i=new Int32Array(t.length);s[0]=-1;let a=0;for(let l=0;l<t.length;l++){const c=t[l].claim_order,y=(a>0&&t[s[a]].claim_order<=c?a+1:Nt(1,a,p=>t[s[p]].claim_order,c))-1;i[l]=s[y]+1;const _=y+1;s[_]=l,a=Math.max(_,a)}const d=[],o=[];let m=t.length-1;for(let l=s[a]+1;l!=0;l=i[l-1]){for(d.push(t[l-1]);m>=l;m--)o.push(t[m]);m--}for(;m>=0;m--)o.push(t[m]);d.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<d.length&&o[l].claim_order>=d[c].claim_order;)c++;const y=c<d.length?d[c]:null;e.insertBefore(o[l],y)}}function n(e,t){if(we){for(Vt(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Lt(e,t,s){we&&!s?n(e,t):(t.parentNode!==e||t.nextSibling!=s)&&e.insertBefore(t,s||null)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function ue(e){return document.createTextNode(e)}function x(){return ue(" ")}function r(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function v(e){return Array.from(e.childNodes)}function Bt(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function kt(e,t,s,i,a=!1){Bt(e);const d=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const m=e[o];if(t(m)){const l=s(m);return l===void 0?e.splice(o,1):e[o]=l,a||(e.claim_info.last_index=o),m}}for(let o=e.claim_info.last_index-1;o>=0;o--){const m=e[o];if(t(m)){const l=s(m);return l===void 0?e.splice(o,1):e[o]=l,a?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,m}}return i()})();return d.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,d}function St(e,t,s,i){return kt(e,a=>a.nodeName===t,a=>{const d=[];for(let o=0;o<a.attributes.length;o++){const m=a.attributes[o];s[m.name]||d.push(m.name)}d.forEach(o=>a.removeAttribute(o))},()=>i(t))}function f(e,t,s){return St(e,t,s,u)}function be(e,t){return kt(e,s=>s.nodeType===3,s=>{const i=""+t;if(s.data.startsWith(i)){if(s.data.length!==i.length)return s.splitText(i.length)}else s.data=i},()=>ue(t),!0)}function w(e){return be(e," ")}function I(e,t,s,i){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,i?"important":"")}let He;function fe(e){He=e}const ne=[],pt=[];let ie=[];const gt=[],Ct=Promise.resolve();let je=!1;function Pt(){je||(je=!0,Ct.then(Et))}function qe(e){ie.push(e)}const We=new Set;let le=0;function Et(){if(le!==0)return;const e=He;do{try{for(;le<ne.length;){const t=ne[le];le++,fe(t),zt(t.$$)}}catch(t){throw ne.length=0,le=0,t}for(fe(null),ne.length=0,le=0;pt.length;)pt.pop()();for(let t=0;t<ie.length;t+=1){const s=ie[t];We.has(s)||(We.add(s),s())}ie.length=0}while(ne.length);for(;gt.length;)gt.pop()();je=!1,We.clear(),fe(e)}function zt(e){if(e.fragment!==null){e.update(),xe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(qe)}}function Gt(e){const t=[],s=[];ie.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),ie=t}const Ot=new Set;function Wt(e,t){e&&e.i&&(Ot.delete(e),e.i(t))}function jt(e,t,s,i){const{fragment:a,after_update:d}=e.$$;a&&a.m(t,s),i||qe(()=>{const o=e.$$.on_mount.map(xt).filter(wt);e.$$.on_destroy?e.$$.on_destroy.push(...o):xe(o),e.$$.on_mount=[]}),d.forEach(qe)}function qt(e,t){const s=e.$$;s.fragment!==null&&(Gt(s.after_update),xe(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Ht(e,t){e.$$.dirty[0]===-1&&(ne.push(e),Pt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Tt(e,t,s,i,a,d,o,m=[-1]){const l=He;fe(e);const c=e.$$={fragment:null,ctx:[],props:d,update:ae,not_equal:a,bound:vt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:vt(),dirty:m,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let y=!1;if(c.ctx=s?s(e,t.props||{},(_,p,...k)=>{const $=k.length?k[0]:p;return c.ctx&&a(c.ctx[_],c.ctx[_]=$)&&(!c.skip_bound&&c.bound[_]&&c.bound[_]($),y&&Ht(e,_)),p}):[],c.update(),y=!0,xe(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){At();const _=v(t.target);c.fragment&&c.fragment.l(_),_.forEach(h)}else c.fragment&&c.fragment.c();t.intro&&Wt(e.$$.fragment),jt(e,t.target,t.anchor,t.customElement),Dt(),Et()}fe(l)}class Rt{$destroy(){qt(this,1),this.$destroy=ae}$on(t,s){if(!wt(s))return ae;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const a=i.indexOf(s);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!Mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Kt="/assets/Couch.f1fb217e.svg",Ut="/assets/Keyboard.9e2cf705.svg",Xt="/assets/Lamp.5c7bd1e8.svg",Ft="/assets/Screen.0da3441f.svg",Jt="/assets/SpeakerL.08f21c82.svg",Qt="/assets/SpeakerR.25d528d8.svg",Yt="/assets/Table.1759aac1.svg",Zt="/assets/Platform.2bfd3b60.svg",er="/assets/LargePillar.3ab05ae4.svg",tr="/assets/SmallPillar.4e6b11ef.svg",rr="/assets/Car.dc433fd9.svg",sr="/assets/Bridge.97a8a4ee.svg",lr="/assets/mounties.c6961747.mp3";function nr(e){let t,s,i,a,d,o,m,l,c,y,_,p,k,$,me,g,b,M,B,ke,S,G,Te,Ee,N,C,O,Re,Ie,W,j,Ke,$e,P,q,H,Ue,Me,V,T,R,Xe,Ae,K,U,Fe,De,L,X,F,Je,Ne,J,Q,Qe,Ve,ce,Le,Y,Be,Se,Z,Ce,Pe,te,ze,re,z,ee,Ge,Oe,oe;return{c(){t=u("main"),s=u("div"),i=u("div"),a=u("div"),d=u("img"),m=x(),l=u("div"),c=u("img"),_=x(),p=u("div"),k=u("div"),$=u("img"),g=x(),b=u("div"),M=u("img"),ke=x(),S=u("div"),G=u("img"),Ee=x(),N=u("a"),C=u("div"),O=u("img"),Ie=x(),W=u("div"),j=u("img"),$e=x(),P=u("a"),q=u("div"),H=u("img"),Me=x(),V=u("a"),T=u("div"),R=u("img"),Ae=x(),K=u("div"),U=u("img"),De=x(),L=u("a"),X=u("div"),F=u("img"),Ne=x(),J=u("div"),Q=u("img"),Ve=x(),ce=u("div"),Le=x(),Y=u("div"),Be=ue("Tell me with few letters, where you at right now?"),Se=x(),Z=u("div"),Ce=ue("Loading"),Pe=x(),te=u("center"),ze=x(),re=u("div"),z=u("div"),ee=u("span"),Ge=ue("ALONE...ALONE..."),Oe=x(),oe=u("div"),this.h()},l(de){t=f(de,"MAIN",{});var he=v(t);s=f(he,"DIV",{id:!0});var A=v(s);i=f(A,"DIV",{id:!0,style:!0});var se=v(i);a=f(se,"DIV",{href:!0,class:!0,style:!0});var Ye=v(a);d=f(Ye,"IMG",{src:!0,class:!0,alt:!0}),Ye.forEach(h),m=w(se),l=f(se,"DIV",{href:!0,class:!0,style:!0});var Ze=v(l);c=f(Ze,"IMG",{src:!0,class:!0,alt:!0}),Ze.forEach(h),_=w(se),p=f(se,"DIV",{style:!0});var E=v(p);k=f(E,"DIV",{href:!0,target:!0,class:!0,style:!0});var et=v(k);$=f(et,"IMG",{src:!0,class:!0,alt:!0}),et.forEach(h),g=w(E),b=f(E,"DIV",{href:!0,target:!0,class:!0,style:!0});var tt=v(b);M=f(tt,"IMG",{src:!0,class:!0,alt:!0}),tt.forEach(h),ke=w(E),S=f(E,"DIV",{href:!0,target:!0,class:!0,style:!0});var rt=v(S);G=f(rt,"IMG",{src:!0,class:!0,alt:!0}),rt.forEach(h),Ee=w(E),N=f(E,"A",{class:!0,href:!0,target:!0});var ve=v(N);C=f(ve,"DIV",{href:!0,target:!0,class:!0,style:!0});var st=v(C);O=f(st,"IMG",{src:!0,class:!0,alt:!0}),st.forEach(h),Ie=w(ve),W=f(ve,"DIV",{class:!0,style:!0});var lt=v(W);j=f(lt,"IMG",{src:!0,class:!0,alt:!0}),lt.forEach(h),ve.forEach(h),$e=w(E),P=f(E,"A",{class:!0,href:!0,target:!0});var nt=v(P);q=f(nt,"DIV",{class:!0,style:!0});var at=v(q);H=f(at,"IMG",{src:!0,class:!0,alt:!0}),at.forEach(h),nt.forEach(h),Me=w(E),V=f(E,"A",{class:!0,href:!0,target:!0});var pe=v(V);T=f(pe,"DIV",{class:!0,style:!0});var it=v(T);R=f(it,"IMG",{src:!0,class:!0,alt:!0}),it.forEach(h),Ae=w(pe),K=f(pe,"DIV",{class:!0,style:!0});var ct=v(K);U=f(ct,"IMG",{src:!0,class:!0,alt:!0}),ct.forEach(h),pe.forEach(h),De=w(E),L=f(E,"A",{class:!0,href:!0,target:!0});var ge=v(L);X=f(ge,"DIV",{class:!0,style:!0});var ot=v(X);F=f(ot,"IMG",{src:!0,class:!0,alt:!0}),ot.forEach(h),Ne=w(ge),J=f(ge,"DIV",{class:!0,style:!0});var dt=v(J);Q=f(dt,"IMG",{src:!0,class:!0,alt:!0}),dt.forEach(h),ge.forEach(h),E.forEach(h),se.forEach(h),Ve=w(A),ce=f(A,"DIV",{class:!0}),v(ce).forEach(h),Le=w(A),Y=f(A,"DIV",{id:!0,class:!0});var ut=v(Y);Be=be(ut,"Tell me with few letters, where you at right now?"),ut.forEach(h),Se=w(A),Z=f(A,"DIV",{id:!0,class:!0});var ft=v(Z);Ce=be(ft,"Loading"),ft.forEach(h),Pe=w(A),te=f(A,"CENTER",{id:!0,class:!0});var It=v(te);It.forEach(h),ze=w(A),re=f(A,"DIV",{class:!0});var mt=v(re);z=f(mt,"DIV",{class:!0});var _e=v(z);ee=f(_e,"SPAN",{id:!0,class:!0});var ht=v(ee);Ge=be(ht,"ALONE...ALONE..."),ht.forEach(h),Oe=w(_e),oe=f(_e,"DIV",{id:!0}),v(oe).forEach(h),_e.forEach(h),mt.forEach(h),A.forEach(h),he.forEach(h),this.h()},h(){D(d.src,o=sr)||r(d,"src",o),r(d,"class","bridge svelte-689163"),r(d,"alt","bridge"),r(a,"href",""),r(a,"class","item-bg svelte-689163"),I(a,"transform","translate(-700px, -300px)"),D(c.src,y=rr)||r(c,"src",y),r(c,"class","car svelte-689163"),r(c,"alt","car"),r(l,"href",""),r(l,"class","item-bg svelte-689163"),I(l,"transform","translate(-456px, 300px)"),D($.src,me=Zt)||r($,"src",me),r($,"class","platform-svg platform svelte-689163"),r($,"alt","platform"),r(k,"href",""),r(k,"target","_blank"),r(k,"class","item svelte-689163"),I(k,"transform","translate(-265px, -130px)"),D(M.src,B=er)||r(M,"src",B),r(M,"class","platform-svg large-pillar svelte-689163"),r(M,"alt","small pillar"),r(b,"href",""),r(b,"target","_blank"),r(b,"class","item svelte-689163"),I(b,"transform","translate(-400px, -200px)"),D(G.src,Te=tr)||r(G,"src",Te),r(G,"class","platform-svg small-pillar svelte-689163"),r(G,"alt","small pillar"),r(S,"href",""),r(S,"target","_blank"),r(S,"class","item svelte-689163"),I(S,"transform","translate(400px, -200px)"),D(O.src,Re=Kt)||r(O,"src",Re),r(O,"class","item-svg couch svelte-689163"),r(O,"alt","couch"),r(C,"href",""),r(C,"target","_blank"),r(C,"class","item svelte-689163"),I(C,"transform","translate(-140px, -20px)"),D(j.src,Ke=Xt)||r(j,"src",Ke),r(j,"class","item-svg lamp svelte-689163"),r(j,"alt","lamp"),r(W,"class","item svelte-689163"),I(W,"transform","translate(-200px, -130px)"),r(N,"class","item-group svelte-689163"),r(N,"href","https://www.instagram.com/beenfabo/"),r(N,"target","_blank"),D(H.src,Ue=Ft)||r(H,"src",Ue),r(H,"class","item-svg screen svelte-689163"),r(H,"alt","screen"),r(q,"class","item svelte-689163"),I(q,"transform","translate(110px, -175px)"),r(P,"class","item-group svelte-689163"),r(P,"href","https://www.youtube.com/channel/UCVUKGnUaezaRcRwJXP887SQ"),r(P,"target","_blank"),D(R.src,Xe=Yt)||r(R,"src",Xe),r(R,"class","item-svg table svelte-689163"),r(R,"alt","table"),r(T,"class","item svelte-689163"),I(T,"transform","translate(50px, -95px)"),D(U.src,Fe=Ut)||r(U,"src",Fe),r(U,"class","item-svg keyboard svelte-689163"),r(U,"alt","keyboard"),r(K,"class","item svelte-689163"),I(K,"transform","translate(87px, -74px)"),r(V,"class","item-group svelte-689163"),r(V,"href","https://www.linktr.ee/beenfabo"),r(V,"target","_blank"),D(F.src,Je=Jt)||r(F,"src",Je),r(F,"class","item-svg speaker svelte-689163"),r(F,"alt","speaker-l"),r(X,"class","item svelte-689163"),I(X,"transform","translate(65px, -160px)"),D(Q.src,Qe=Qt)||r(Q,"src",Qe),r(Q,"class","item-svg speaker svelte-689163"),r(Q,"alt","speaker-r"),r(J,"class","item svelte-689163"),I(J,"transform","translate(165px, -100px)"),r(L,"class","item-group svelte-689163"),r(L,"href","https://distrokid.com/hyperfollow/fb7/kobe-yr"),r(L,"target","_blank"),I(p,"scale","100%"),r(i,"id","orig"),I(i,"display","none"),r(ce,"class","overlay svelte-689163"),r(Y,"id","secrets"),r(Y,"class","svelte-689163"),r(Z,"id","date"),r(Z,"class","date-text svelte-689163"),r(te,"id","secret"),r(te,"class","secret-holder svelte-689163"),r(ee,"id","word-content"),r(ee,"class","symbol svelte-689163"),r(oe,"id","symbol-wrapper"),r(z,"class","alone-wrapper svelte-689163"),r(re,"class","scalar"),r(s,"id","main-wrapper")},m(de,he){Lt(de,t,he),n(t,s),n(s,i),n(i,a),n(a,d),n(i,m),n(i,l),n(l,c),n(i,_),n(i,p),n(p,k),n(k,$),n(p,g),n(p,b),n(b,M),n(p,ke),n(p,S),n(S,G),n(p,Ee),n(p,N),n(N,C),n(C,O),n(N,Ie),n(N,W),n(W,j),n(p,$e),n(p,P),n(P,q),n(q,H),n(p,Me),n(p,V),n(V,T),n(T,R),n(V,Ae),n(V,K),n(K,U),n(p,De),n(p,L),n(L,X),n(X,F),n(L,Ne),n(L,J),n(J,Q),n(s,Ve),n(s,ce),n(s,Le),n(s,Y),n(Y,Be),n(s,Se),n(s,Z),n(Z,Ce),n(s,Pe),n(s,te),n(s,ze),n(s,re),n(re,z),n(z,ee),n(ee,Ge),n(z,Oe),n(z,oe)},p:ae,i:ae,o:ae,d(de){de&&h(t)}}}const ar=30,_t=.93,yt=.005,bt="wyarn?";function ir(e,t){return Math.atan2(t,e)*180/Math.PI}function cr(e){let t=new Audio(lr);const s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)),i=Math.round((new Date-new Date("3/10/2023"))/6e5)/100;let a,d,o=[],m=[],l={x:0,y:0},c,y=0,_=!1;function p(){m=[];for(let g=0;g<d;g++)m.push({x:Math.cos(g*2*Math.PI/Math.max(1,d))*a,y:Math.sin(g*2*Math.PI/Math.max(1,d))*a})}function k(){for(let g=0;g<o.length;g++)o[g].update(g),o[g].draw();c++,document.getElementById("date").style.transform=`translate(${(l.x-document.body.clientWidth/2)/4-document.getElementById("date").offsetWidth/2}px, ${5+(l.y-document.body.clientHeight/2)/4}px)`,document.getElementById("secret").style.transform=`translate(${l.x-document.body.clientWidth/2-document.getElementById("secret").offsetWidth/2}px, ${l.y-document.body.clientHeight/2-30}px)`;for(let g of m)g.x+=Math.random()-.5,g.y+=Math.random()-.5;c%20||(_&&t.volume<.99&&(t.volume+=.01),document.getElementById("date").textContent=document.getElementById("date").textContent.split(".").length==4?"loading":document.getElementById("date").textContent+".",c=1,m.push(m.shift())),s&&(l.x*=1+(Math.random()-.5)*(i/500),l.y*=1+(Math.random()-.5)*(i/500),l.x+=(document.body.clientWidth/2-l.x)/300,l.y+=(document.body.clientHeight/2-l.y)/300)}function $(){k(),setTimeout(function(){$()},1e3/ar)}class me{constructor(b,M,B){this.elem=B,this.x=b,this.y=M,this.vx=1,this.vy=1}update(b){this.vx+=(l.x-m[b].x-this.x)*yt,this.vy+=(l.y-m[b].y-this.y)*yt,this.vx=this.vx*_t,this.vy=this.vy*_t,this.x+=this.vx,this.y+=this.vy}draw(){this.elem.style.transform=`translate(${this.x}px, ${this.y}px) rotate(${ir(l.x-this.x,l.y-this.y)-90}deg)`}}return window.addEventListener("load",g=>{document.getElementById("date").style["font-size"]=i+"px",document.querySelector("#orig").remove(),l={x:document.body.clientWidth/2,y:document.body.clientHeight/2},document.getElementById("word-content").classList;const b=document.getElementById("word-content").textContent;d=b.length,a=Math.min(document.body.clientWidth/4,document.body.clientHeight/4),p();for(let M=0;M<b.length;M++){let B=document.createElement("div");B.classList.value=document.getElementById("word-content").classList.value,B.appendChild(document.createTextNode(b[M])),document.getElementById("symbol-wrapper").append(B),o.push(new me(document.body.clientWidth/2,document.body.clientHeight/2,B))}$()}),window.onresize=function(){a=Math.min(document.body.clientWidth/4,document.body.clientHeight/4),l={x:document.body.clientWidth/2,y:document.body.clientHeight/2},p()},document.onmousemove=function(g){c%10||(c=1,m.push(m.shift())),s||(l={x:g.clientX,y:g.clientY})},document.onkeypress=function(g){!_&&bt[y]==g.key?(y++,document.getElementById("secret").textContent+="\u2022"):(y=0,document.getElementById("secret").textContent=""),y==bt.length&&(_=!0,console.log("Secret Mode Unlocked"),t.volume=0,t.play())},[]}class or extends Rt{constructor(t){super(),Tt(this,t,cr,nr,$t,{})}}new or({target:document.getElementById("app")});
