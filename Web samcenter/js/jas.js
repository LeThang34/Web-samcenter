//T

let btnMoblie = document.querySelector('.btn_mb')
let btnTablet = document.querySelector('.btn_mtb')
console.log(btnTablet)
let btnW = document.querySelector('.btn_dh')
let btnHP = document.querySelector('.btn_hp')
let btnPK = document.querySelector('.btn_pk')

let lst_mb = document.querySelector('.list_mb')
let lst_tb = document.querySelector('.list_tb')
let lst_w = document.querySelector('.list_w')
let lst_hp = document.querySelector('.list_hp')
let lst_pk = document.querySelector('.list_pk')

btnMoblie.addEventListener('click', function () {
    lst_mb.classList.add('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')    
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')

});

btnTablet.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.add('active')
    lst_w.classList.remove('active')    
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')
});
btnW.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.add('active')
    lst_hp.classList.remove('active')
    lst_pk.classList.remove('active')
});
btnHP.addEventListener('click', function () {
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')    
    lst_hp.classList.add('active')
    lst_pk.classList.remove('active')
});
btnPK.addEventListener('click', function () {
    lst_pk.classList.add('active')
    lst_mb.classList.remove('active')
    lst_tb.classList.remove('active')
    lst_w.classList.remove('active')    
    lst_hp.classList.remove('active')
   
});


