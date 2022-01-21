export const renderMenuPage = () => {
    const wrapper = `<nav class="header"></nav>
    <div class="pizza-container">
    <div class="pizza">
        <div class="product-items">
            <div class="product-img">
                <img class="img-pizza" src="./image/pizza1.png" alt="">
            </div>
            <hr>
            <div class="product-price">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr>
            <div class="product-ingredient">
                <h3>Ingredients</h3>
                <ol>
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="product-items">
            <div class="product-img">
                <img class="img-pizza" src="./image/pizza2.png" alt="">
            </div>
            <hr>
            <div class="product-price">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr>
            <div class="product-ingredinet">
                <h3>Ingredients</h3>
                <ol>
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="product-items">
            <div class="product-img">
                <img class="img-pizza" src="./image/pizza3.png" alt="">
            </div>
            <hr>
            <div class="product-price">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr>
            <div class="product-ingredient">
                <h3>Ingredients</h3>
                <ol>
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
    </div>
    </div>
    `
    document.querySelector(".container1").innerHTML += wrapper;
}