(()=>{var n=class{constructor(e){this.themeChangeEvent="colorSchemeChange";this.media=window.matchMedia("(prefers-color-scheme: dark)");this.bindMatchMedia(),this.currentTheme=document.documentElement.dataset.scheme,this.dispatchEvent(),e&&this.bindClick(e)}bindClick(e){e.addEventListener("click",t=>{this.isDark()?this.currentTheme="light":this.currentTheme="dark",this.setScheme()})}isDark(){return this.currentTheme=="dark"}dispatchEvent(){let e=new CustomEvent(this.themeChangeEvent,{detail:this.currentTheme});window.dispatchEvent(e)}setScheme(){document.documentElement.dataset.scheme=this.currentTheme,this.dispatchEvent()}bindMatchMedia(){this.media.addEventListener("change",e=>{e.matches?(this.currentTheme="dark",this.setScheme()):(this.currentTheme="light",this.setScheme())})}},l=n;var a=class{constructor(){this.button=document.querySelector(".nav-toggle");this.header=document.querySelector(".header");this.navElem=document.querySelector(".navigation");this.bindMenuButton()}toggleMenu(){this.header.classList.contains("active")?(this.header.classList.remove("active"),this.button.classList.remove("active")):(this.header.classList.add("active"),this.button.classList.add("active"))}toggleHeight(e){e?(this.navElem.style.height="auto",this.navElem.style.height=window.getComputedStyle(this.navElem).height):this.navElem.style.height="0"}bindMenuButton(){this.button.addEventListener("click",()=>{this.toggleMenu()})}},o=a;var m="h2, h3, h4",c=class{constructor(){this.tocElem=document.querySelector("#TableOfContents");this.content=document.querySelector(".post-content");this.tocElem&&(this.foldUl(),this.bindScroll())}foldUl(){this.tocElem.querySelectorAll("ul").forEach(e=>{e.querySelectorAll("li").forEach(t=>{t.querySelectorAll("ul").forEach(i=>{i.style.display="none"})})})}showTable(e){if(this.findParents(e).forEach(t=>{t.style.display="block"}),e.nextElementSibling){let t=e.nextElementSibling;t.style.display="block"}}findParents(e){let t=[];for(;e&&e!==this.tocElem;e=e.parentElement)e.tagName.toLowerCase()=="ul"&&t.push(e);return t}removeClass(e){this.tocElem.querySelectorAll("a").forEach(t=>{t.classList.remove(e)})}handleToc(){let e=this.content.querySelectorAll(m);e.length>0&&e.forEach(t=>{let i=t;if(document.documentElement.scrollTop>=i.offsetTop-100){let d=i.getAttribute("id");this.removeClass("active"),this.foldUl();let s=this.tocElem.querySelector('[href="#'+d+'"]');s&&(s.classList.add("active"),this.showTable(s))}})}bindScroll(){window.addEventListener("scroll",()=>{this.handleToc()})}},h=c;var u=()=>{new l(document.getElementById("dark-mode-toggle")),new o,new h};window.addEventListener("load",()=>{setTimeout(function(){u()},0)});})();