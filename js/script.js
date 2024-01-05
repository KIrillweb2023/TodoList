"use strict"

const singin = document.querySelector('.tab-singin');
const singup = document.querySelector('.tab-singup');
const formIN = document.querySelector('.singin__form');
const formUP = document.querySelector('.singup__form');

tabs_user(singin, singup, "active", formIN, formUP);

function tabs_user(singin, singup, active, formIN, formUP){
    singin.addEventListener('click', (e) =>{
        singin.classList.add(active);
        singup.classList.remove(active);
        formIN.style.display = 'block';
        formUP.style.display = 'none';
    });
    singup.addEventListener('click', (e) =>{
        singin.classList.remove(active);
        singup.classList.add(active);
        formIN.style.display = 'none';
        formUP.style.display = 'block';
    });
}

const buttonContinue = document.querySelector('.main__wrapper__welcome_btn');
const blockItem = document.querySelector('.singin');
const wrapper = document.querySelector('.main__wrapper');
const section = document.querySelector('.main');
continue_form(buttonContinue, blockItem, document.querySelector('.main__wrapper__welcome'), section, wrapper);

function continue_form(btn, item, welcome, section, wrapper){
    btn.addEventListener('click', (e) =>{
        item.style.display = "flex";
        item.setAttribute('id', 'open');
        welcome.style.display = 'none';

        if(item.getAttribute('id')){
            section.style.paddingTop = "";
            wrapper.style.top = "";
            console.log(1);
        }
    });
    if(!item.getAttribute('id')){
        section.style.paddingTop = "200px";
        wrapper.style.top = "300px";
        console.log(1);
    }

    
}

const inputs = document.querySelectorAll('.input-password');
const see = document.querySelector('.input-see');
see_password(inputs, see)

function see_password(inputs, btn){
    btn.addEventListener('mousedown', (e) =>{
        inputs.forEach(item => {
            item.setAttribute('type', 'text');
        });
    });
    btn.addEventListener('mouseup', (e) =>{
        inputs.forEach(item => {
            item.setAttribute('type', 'password');
        });
    });
}





 