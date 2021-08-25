import './stylestoggle.css'

const ToggleCustom = ()=>{
return (
    <div class="toggleContainer">
          <div class="chooseTypeToggle">
    <label for="toggle-input" class="toggle">
    <span class="income">Доход</span>
      <input type="checkbox" class="toggle__input" id="toggle-input" />
      <div class="toggle__bar">
        <div class="toggle__spin"></div>
      </div>
      <span class="outcome">Расход</span>
    </label>

    </div>
    </div>

);
}



export default ToggleCustom;