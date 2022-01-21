export const renderProductPage = () => {
    const product = `<div class="text">
    <h2>Պեպերոնի</h2>
</div>
<div class="main">
    <div class="pizzaMain">
        <div class="pizzaImage">nkar peperoni</div>
        <div class="pizzaGin">
            Գին՝  ֏350
        </div>
    </div>
    <div class="ingr">
        <div class="ingText">
            <h3>Բաղադրություն</h3>
        </div>
        <div class="whatIn">
            Պանիր +/- <br>
            Երշիկ 
        </div>
        <div class="count">
            Քանակ՝  <br>
            Կտոր +/- 
        </div>
    </div>
</div>
<footer> <button>Ավելացնել զամբյուղ</button> </footer>`
      document.querySelector(".container1").innerHTML = product;
    }
