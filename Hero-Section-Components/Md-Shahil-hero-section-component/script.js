// script.js

document.addEventListener('DOMContentLoaded', () =>{
    //handle active navbar options
    let navTabs = document.querySelectorAll('.navTab');
    navTabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            
            //remove active class from all tab
            navTabs.forEach(t => t.classList.remove('active'));

            //add active class only to the currently selected tab
            tab.classList.add('active');

            //further lines of code.
        })
    })
})
