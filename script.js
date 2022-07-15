let sun = document.querySelector('#sun');
let sunreflection = document.querySelector('#sun-reflection');
let header = document.querySelector('header');
let solarpower = document.querySelector('#solar-power')
let btn = document.querySelector('#btn')
let frontmountains = document.querySelector('#front-mountains')
let palmeiras = document.querySelector('#palmeiras')

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    sun.style.top = -(value * 1.0 + 200) + "px";
    palmeiras.style.top = -(value * 0.2) + "px";
    frontmountains.style.top = value * 0.5 + "px";
    sunreflection.style.top = value * 1.0 + "px";
    header.style.top = value * 0.1 + "px";
    solarpower.style.top = value * 0.3 + "px";
    btn.style.marginTop = value * 2 + "px";
})