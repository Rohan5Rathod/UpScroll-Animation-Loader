var tl = gsap.timeline(); 

tl
.to(".fs",{
    height:0,
    duration:2,
    ease:Expo.easeInOut
})
.to(".elem",{
    height:"100%",
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})
.to(".white",{
    height:"100%",
    duration:2,
    delay:-1.6,
    ease:Expo.easeInOut
})

document.querySelectorAll(".reveal")
.forEach(function(elem){
    let spanParent = document.createElement("span"); /* inside create span tag */
    let spanChild = document.createElement("span");

    spanParent.classList.add("parent"); /* inside create span class name */ 
    spanChild.classList.add("child");

    spanChild.textContent = elem.textContent;
    spanParent.appendChild(spanChild) /* put inside span to span */

    elem.innerHTML = "";
    elem.appendChild(spanParent);
})