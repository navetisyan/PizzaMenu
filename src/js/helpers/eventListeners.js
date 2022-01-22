import {setCookie, getCookie} from "./localStorage"
export const registerEventListeners = () => {
    //aystex linelu e amragrel knopkayi clic ivente
    document.querySelector('.register').addEventListener(function(){
        console.log('amragrel clicked');
        setCookie(5); //orinak 5
        })
}