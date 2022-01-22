import {menuListEventListeners} from "../helpers/eventListeners"
export const renderMenuList= () => {
    const wrapper = `<div class="menuList-container"><button class="btnIcon"><i class="fas fa-align-justify"></i></button>

        <div class="yashik">
        <div class="cube"> <div class="cub food" > <h2>Տաք Ուտստ</h2> </div></div>
        <div class="cube"> <div class="cub" > <h2> Խորտիկներ  </h2></div></div>
        <div class="cube"> <div class="cub" > <h2>  Քաղցրավենիք </h2></div></div>
        <div class="cube"> <div class="cub" > <h2> Ըմպելիք </h2></div></div>
        <div class="cube"> <div class="cub" > <h2> Պիցցաներ </h2></div></div>
        <div class="cube"> <div class="cub" > <h2> Աղցաններ </h2> </div></div>
        </div>
        </div>`
    document.querySelector(".container1").innerHTML = wrapper;
    menuListEventListeners();

// function openHidelogin() {
//     let menyuHidden = document.querySelector(".btnIcon");
//     const newLocal = menyuHidden.style.display;
//     if (newLocal === '' || newLocal === 'none') {
//         newLocal = 'block';
//     } else {
//         newLocal= 'none';
//     };
// };
 }
