"use strict";function getMoveDirection(e,n,t,a){if(isPhone)return t=t-e,e=a-n,Math.abs(t)<2&&Math.abs(e)<2?DIRECTIONS.UNDIRECTED:-135<=(a=180*Math.atan2(e,t)/Math.PI)&&a<=-45?DIRECTIONS.UP:45<a&&a<135?DIRECTIONS.DOWN:135<=a&&a<=180||-180<=a&&a<-135?DIRECTIONS.LEFT:-45<=a&&a<=45?DIRECTIONS.RIGHT:DIRECTIONS.UNDIRECTED}function loadIntro(){document[hiddenProperty]||loadIntro.loaded||(setTimeout(()=>{$(".wrap").classList.add("in"),setTimeout(()=>{$(".content-subtitle").innerHTML="<span>".concat([...subtitle].join("</span><span>"),"</span>")},270)},0),loadIntro.loaded=!0)}function switchPage(){var e;switchPage.switched||((e={intro:$(".content-intro"),path:$(".shape-wrap path"),shape:$("svg.shape")}).shape.style.transformOrigin="50% 0%",anime({targets:e.intro,duration:1100,easing:"easeInOutSine",translateY:"-200vh"}),anime({targets:e.shape,scaleY:[{value:[.8,1.8],duration:550,easing:"easeInQuad"},{value:1,duration:550,easing:"easeOutQuad"}]}),anime({targets:e.path,duration:1100,easing:"easeOutQuad",d:e.path.getAttribute("pathdata:id"),complete:function(e){canvas&&(cancelAnimationFrame(animationID),canvas.parentElement.removeChild(canvas),canvas=null)}}),switchPage.switched=!0)}function loadMain(){loadMain.loaded||(setTimeout(()=>{$(".card-inner").classList.add("in")},400),loadMain.loaded=!0)}function loadAll(){loadAll.loaded||(switchPage(),loadMain(),loadAll.loaded=!0)}window.hiddenProperty="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,window.DIRECTIONS={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT",UNDIRECTED:"UNDIRECTED"},window.isPhone=/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent),window.visibilityChangeEvent=hiddenProperty.replace(/hidden/i,"visibilitychange"),window.addEventListener(visibilityChangeEvent,loadIntro),window.addEventListener("DOMContentLoaded",loadIntro);var enterEl=$(".enter");enterEl.addEventListener("click",loadAll),enterEl.addEventListener("touchenter",loadAll),document.body.addEventListener("mousewheel",loadAll,{passive:!0}),$(".arrow").addEventListener("mouseenter",loadAll),isPhone&&(document.addEventListener("touchstart",function(e){window.startx=e.touches[0].pageX,window.starty=e.touches[0].pageY},{passive:!0}),document.addEventListener("touchend",function(e){var n=e.changedTouches[0].pageX,e=e.changedTouches[0].pageY;getMoveDirection(startx,starty,n,e)===DIRECTIONS.UP&&loadAll()},{passive:!0}));