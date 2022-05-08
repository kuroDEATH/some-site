/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



const burger = document.querySelector('.header__burger');
const list = document.querySelector('.header__list');

burger.addEventListener('click', () => {
    console.log('object');
    burger.classList.toggle('open-menu');
    list.classList.toggle('open-menu');
    document.body.classList.toggle('fixed-page');
});
/******/ })()
;