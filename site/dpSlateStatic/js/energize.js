!function(){if("ontouchstart"in window){var e,t,i,o,n,r,s={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},i=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},o=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var i=t.changedTouches[0],o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),o.simulated=!0,t.target.dispatchEvent(o)}},n=function(e){var t=Date.now(),i=t-s.time,o=e.clientX,n=e.clientY,l=[Math.abs(s.x-o),Math.abs(s.y-n)],a=r(e.target,"A")||e.target,c=a.nodeName,u="A"===c,d=window.navigator.standalone&&u&&e.target.getAttribute("href");return s.time=t,s.x=o,s.y=n,(!e.simulated&&(500>i||1500>i&&l[0]<50&&l[1]<50)||d)&&(e.preventDefault(),e.stopPropagation(),!d)?!1:(d&&(window.location=a.getAttribute("href")),void(a&&a.classList&&(a.classList.add("energize-focus"),window.setTimeout(function(){a.classList.remove("energize-focus")},150))))},r=function(e,t){for(var i=e;i!==document.body;){if(!i||i.nodeName===t)return i;i=i.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",i,!1),document.addEventListener("touchend",o,!1),document.addEventListener("click",n,!0)}}();