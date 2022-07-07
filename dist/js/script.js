const locationInfo=document.querySelector("#location"),currentInfo=document.querySelector("#current"),feelslikeInfo=document.querySelector("#feelslike"),cityInput=document.querySelector(".search-bar__input"),btn=document.querySelector(".search-bar__btn");btn.addEventListener("click",getCity),cityInput.addEventListener("keydown",handleKey);const notify={usedArr:new Array(10),getLen:function(){for(let e=0,t=this.usedArr.length;e<t;e++)if(!this.usedArr[e])return this.usedArr[e]=!0,e},show:function(e,t={}){const{bgClass:n,duration:o,delay:i}={bgClass:"alert-primary",duration:1e3,delay:2e3,...t},a=document.createElement("div");a.className="notify-box alert",a.classList.add(`${n}`),a.style.transition=`transform ${o}ms`,a.innerHTML=e,document.querySelector("body").appendChild(a);const r=this.getLen();a.style.top=r*a.offsetHeight+"px",requestAnimationFrame((()=>{a.classList.add("show-notify"),setTimeout((()=>{a.classList.remove("show-notify"),setTimeout((()=>{a.parentNode.removeChild(a),this.usedArr[r]=!1}),`${o+300}`)}),`${i}`)}))}};function validateCity(e){return!!/^[a-zA-Z]+(?:[\s-]+[a-zA-Z]+)*$/gm.test(e)||(notify.show("You have to enter a valid City name"),!1)}async function getData(e="London"){const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=48348f2c8bbd4fcea39152147220507&q=${e}&days=3`);return await t.json()}function getCity(){validateCity(cityInput.value)&&getData(cityInput.value).then(setInfo)}function handleKey(e){"Enter"===e.key&&getCity()}let flag=null;function setInfo(e){locationInfo.innerText=e.location.name+", "+e.location.country,currentInfo.innerText=e.current.temp_c+"°";const t=document.getElementById("info__block-img");let n=document.createElement("img");null!==flag&&t.removeChild(flag);let o=e.current.condition.icon;n.src=`${o}`,flag=t.appendChild(n),feelslikeInfo.innerText=e.current.feelslike_c+"°"}function clearThemes(){$("html").attr("class","")}$((function(){$(".theme-box__btn-day").click((function(){clearThemes(),$("html").addClass("day")})),$(".theme-box__btn-night").click((function(){clearThemes(),$("html").addClass("night")}))}));