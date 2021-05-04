import {getIndexHtml} from "./get-index-html"
import {getMenuHtml} from "./get-menu-html"
import {getContactHtml} from "./get-contact-html"
import {pageLoad} from "./page-load";

let content = pageLoad();

//---

let main;
let menu;
let contact;

updateTabs();
addEventListeners();

function updateTabs(){
    main = document.getElementById("main-tab");
    menu = document.getElementById("menu-tab");
    contact = document.getElementById("contact-tab");
}

function addEventListeners(){
    main.addEventListener('click', () => {
        content.innerHTML = getIndexHtml();
        updateTabs();
        addEventListeners();
    })
    
    menu.addEventListener('click', () => {
        content.innerHTML = getMenuHtml();
        updateTabs();
        addEventListeners();
    })
    
    contact.addEventListener('click', () => {
        content.innerHTML = getContactHtml();
        updateTabs();
        addEventListeners();
    })
}