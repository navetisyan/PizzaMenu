export const renderProductMenuPage = () => {
    const product = `<div id="text" class="text">
    <h1>Պեպերոնի</h1>
</div>
<div class="main">
    <div class="pizzaMain">
        <div class="pizzaImage">
        <img class="imgPizza" src="./image/pizza2.png" alt=""></div>
        <div id="text" class="pizzaGin">
            Գին՝  ֏350
        </div>
    </div>
    <div class="ingr">
        <div id="text" class="ingText">
            <h2>Բաղադրություն</h2>
        </div>
        <div id="text" class="whatIn">
            Պանիր +/- <br>
            Երշիկ 
        </div>
        <div id="text" class="count">
            Քանակ՝  <br>
            Կտոր +/- 
        </div>
    </div>
</div>
<footer class="fut"> <button id="text">Ավելացնել զամբյուղ</button> </footer>`
      document.querySelector(".container1").innerHTML = product;
    }
