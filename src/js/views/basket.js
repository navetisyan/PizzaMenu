export const renderBasketPage = () => {
    const wrapper = `<div class="coner">
    <div class="disp">
      <div class="backbutt"><button class="ar-btn"><i class="fas fa-arrow-left"></i></button></div>
      <div class="submenu"><button class="me-btn"><i class="fas fa-bars"></i></button></div>
    </div>
    <div class="div1">
        <div class="nkar"></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div class="ic"><i class="far fa-times-circle"></i></div>
    </div>
    <div class="div2">
        <div class="nkar"></div>
        <div>Պեպերոնի</div>
        <div>Գին՝ 350դր</div>
        <div>Քանակ՝ -[2]+ </div>
        <div>Արժեքը՝ 700դր</div>
        <div class="ic"><i class="far fa-times-circle"></i></div>
    </div>
    <div class="div3">
      <div class="nkar"></div>
      <div>Պեպերոնի</div>
      <div>Գին՝ 350դր</div>
      <div>Քանակ՝ -[2]+ </div>
      <div>Արժեքը՝ 700դր</div>
      <div class="ic"><i class="far fa-times-circle"></i></div>
  </div>
    <div class="div4">Ընդհանուր։ 2100դր</div>
    <button class="btn">Հ ա ս տ ա տ ե լ</button>
</div>`
    document.querySelector(".container1").innerHTML = wrapper;
}