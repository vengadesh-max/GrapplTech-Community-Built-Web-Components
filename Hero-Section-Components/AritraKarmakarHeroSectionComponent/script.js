document.addEventListener('DOMContentLoaded', () =>{

    let heroSignUp = document.querySelector('.heroSectionButton');
    let navSignUp = document.querySelector('.navLogin');
    let modelImage = document.querySelector('.rightImage');

    heroSignUp.addEventListener('mouseover', () =>{
        heroSignUp.style.transform = 'translateY(-7px)';
        heroSignUp.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px';
        addCommonEffects(heroSignUp);
    })

    heroSignUp.addEventListener('mouseout', () =>{
        heroSignUp.style.transform = 'none';
        heroSignUp.style.boxShadow =  'rgba(0, 0, 0, 0.24) 0px 3px 8px';
        removeCommonEffects(heroSignUp);
    })

    navSignUp.addEventListener('mouseover', () =>{
        addCommonEffects(navSignUp);
    })

    navSignUp.addEventListener('mouseout', () =>{
        removeCommonEffects(navSignUp);
    })

    function addCommonEffects(element){
        element.style.backgroundColor = '#DCDCDC';
        element.style.color = '#041124';
    }

    function removeCommonEffects(element){
        element.style.backgroundColor = '#041124';
        element.style.color = '#DCDCDC';
    }

    //handle active navbar options
    let navElements = document.querySelectorAll('.navEl');
    navElements.forEach(element =>{
        element.addEventListener('click', () =>{
            
            //remove active class from all elements
            navElements.forEach(el => el.classList.remove('active'));

            //add active class only to the currently selected element
            element.classList.add('active');

            //further code can be added to make changes to content or make api calls as per needed or as per active nav Element.
        })
    })

})