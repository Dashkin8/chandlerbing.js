// ==UserScript==
// @name         bing2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Fedulova Daria
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let search = document.getElementsByName("search")[0];

let keywords = ["Установка и настройка Git", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];

if (search !== undefined) {
   let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if(i == keyword.length) {
      clearInterval(timerId);
      search.click();
    }
  }, 400);

    } else if (location.hostname == "napli.ru") {
  console.log("Мы на целевом сайте!");
      setInterval(() => {
  let index = getRandom(0, links.length);
  if (getRandom(0, 101) > 70) {
    location.href = "https://www.bing.com/";
  }
  if (links[index].href.indexOf("napli.ru") !== -1) links[index].click();
  }, getRandom(3000, 5000));

} else {
    let nextPingPage = true;
for (let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
let link = links[i];
       nextPingPage = false;
console.log("Нашел строку " + links);
setTimeout(() => {
        link.click();
      }, getRandom(2000, 3000));
      break;
    }
}
    if (document.querySelector(".sb_pagS_bp").innerText == "2") {
    nextPingPage = false;
    location.href = "https://www.bing.com/";
  }
  if (nextPingPage) {
    setTimeout(() => {
      document.querySelector(".sb_pagN_bp").click();
    }, getRandom(2000, 4000))
}
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
