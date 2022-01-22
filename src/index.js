import { renderFilterPage } from "./js/views/filter";
import { renderMenuList }  from "./js/views/menuList";
import router from "./js/routing";

renderFilterPage ();

 
 
document.querySelector(".btn").addEventListener("click",function(){
   
   renderMenuList(); 
})