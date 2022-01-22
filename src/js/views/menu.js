
export const renderMenuPage = () => {
    const wrapper = `<div class="pizza">
    <div class="cards">
        <div class="card ">
            <div class="sec1">
                <img src="./image/pizza1.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="card">
            <div class="sec1">
                <img src="./image/pizza2.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
        <div class="card">
            <div class="sec1">
                <img src="./image/pizza3.png" alt="" class="imgpiz">
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec2">
                Cheese Pizza <br>
                1pcs: ֏350
            </div>
            <hr class="hrst" style="border: 1px solid black;">
            <div class="sec3">
                <h3>Ingredients</h3>
                <ol style="list-style-type: inherit;">
                    <li>chesse</li>
                    <li>tomato</li>
                    <li>pepper</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="load"> <p>Loading...</p> </div>
    <footer class="filter"> <button class="knopka" id="text">Filter</button> </footer>
    </div>
    `
    document.querySelector(".container1").innerHTML = wrapper;
}