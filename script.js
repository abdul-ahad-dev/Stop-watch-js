let s_btn = document.getElementById('start-btn');
let e_btns = document.querySelectorAll('btns')
s_btn.addEventListener("click", () => {
    let btnsContainer = document.getElementById('button-container');
    btnsContainer.style.display = 'flex';
    s_btn.style.display = 'none'
    document.getElementById('holder').style.display = 'none'
    let time =  document.getElementById('time').style.margin = "40% 0 1em 0"
})