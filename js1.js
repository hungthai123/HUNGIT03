window.onload = function() {

    /* animation */
    let els= document.querySelectorAll(".forum");
    for (let e of els)
        e.classList.add("wow");

    let eveEles= document.querySelectorAll(".forum:nth-child(even)");
    for ( let e of eveEles)
        e.classList.add("animate__backInLeft");
    
    let oddEles= document.querySelectorAll(".forum:nth-child(odd)");
    for (let e of oddEles)
        e.classList.add("animate__backInRight");

    /* INIT */
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
}
