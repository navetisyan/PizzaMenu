import {setCookie, getCookie} from "./localStorage"
import{renderMenuList} from "../views/menuList"
import{renderMenuPage} from "../views/menu"
import { renderProductMenuPage } from "../views/productMenu"
export const registerEventListeners = () => {
    //aystex linelu e amragrel knopkayi clic ivente
    document.querySelector('.btn-register').addEventListener("click", function(){
        renderMenuList();
        })
        // document.querySelector('.').addEventListener("click", function(){
        // renderMenuPage();
        // })
}
export const menuListEventListeners = () => {
    document.querySelector('.food').addEventListener("click", function(){
        renderMenuPage();
    })
}

    export const productMenuEventListeners = () =>{
        document.querySelector('.ingr').addEventListener("click", function(){
            renderProductMenuPage();
        })
    }
    