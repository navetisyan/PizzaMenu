export const renderMenuList= () => {
    const wrapper = `<nav class="header"></nav> 
    
    <div id="mav">
        <h2>Սեղանի համար #</h2>
        <button id="btn">cansel</button>

    </div>

    <div class="container1">

           <button class="btnIcon"><i class="fas fa-align-justify"></i></button>

        <div class="yashik">
        <div class="cube"> <a href="#" class="cub" > <h2>Տաք Ուտստ</h2> </a></div>
        <div class="cube"> <a href="#"  class="cub"  > <h2> Խորտիկներ  </h2></a></div>
        <div class="cube">  <a href="#"  class="cub" ><h2>  Քաղցրավենիք </h2></a></div>
        <div class="cube">  <a href="#" class="cub" > <h2> Ըմպելիք </h2></a></div>
        <div class="cube"> <a href="#" class="cub" > <h2> Պիցցաներ </h2></a></div>
        <div class="cube"> <a href="#" class="cub" > <h2> Աղցաններ </h2> </a></div>
        </div>

    </div>
        

    `
    document.querySelector(".container1").innerHTML = wrapper;

    document.querySelector(".btnIcon").addEventListener("click", openHidelogin);

function openHidelogin() {
debugger
    let menyuHidden = document.querySelector(".btnIcon");
    const newLocal = menyuHidden.style.display;
    if (newLocal === '' || newLocal === 'none') {
        newLocal = 'block';
    } else {
        newLocal= 'none';
    };
};
}
