/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
    navdrawerContainer.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  navdrawerContainer.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });














  var townList = ["BA", "TN", "BO"],
      castleNameList = ["Bratislava", "Trencin", "Bojnice"],
      castleLinkList = ["http://en.wikipedia.org/wiki/Bratislava_Castle", "http://en.wikipedia.org/wiki/Tren%C4%8D%C3%ADn_Castle", "http://en.wikipedia.org/wiki/Bojnice_Castle"],
      castleImgList = ["http://cdn1.travelbird.com/thumbnail/image/offer-social/20405/ZVAV7LWF", "http://farm4.static.flickr.com/3011/2636572467_1235e5078e.jpg",  "https://pbs.twimg.com/media/B6nERIbIQAA9GBx.jpg"],
      castleNameSelector = $(".castleName"),
      castleLinkSelector = $(".castleLink"),
      castleImgSelector = $(".imgwrap img"),
      townSelector= $(".town"),
      next = $(".next"),
      previous = $(".previous"),
      nextPrevious = $(".next, .previous"),
      infoIcon = $(".icon.info");

  var getTownClass = function(clickedElement) {
    var townClass = clickedElement.attr("data-town"),
        currentTownClass = townSelector.attr("class").split(" "),
        townName = clickedElement.attr("data-town-name");

    townSelector.removeClass(currentTownClass[1]);
    townSelector.addClass(townClass);
    castleNameSelector.text(townName);
    nextPrevious.attr("data-town", townClass);
  };

  castleNameSelector.text("Bratislava");
  nextPrevious.attr("data-town", "BA");
  castleLinkSelector.attr("href", castleLinkList[0]);
  castleImgSelector.attr("src", castleImgList[0]);

  $(".townSelection").on("click", function() {
    var clickedElement = $(this);
    getTownClass(clickedElement);
  });

  next.on("click", function() {
    var currentTown = $(this).attr("data-town"),
        townOrder = townList.indexOf(currentTown),
        nextTown = townList[townOrder+1],
        nextCaslteName = castleNameList[townOrder+1],
        nextCastleLink = castleLinkList[townOrder+1],
        nextImgLink = castleImgList[townOrder+1];

      nextPrevious.attr("data-town", nextTown);

      if (townList.length == townOrder+1) {
        nextPrevious.attr("data-town", townList[0]);
        townSelector.removeClass(currentTown);
        townSelector.addClass(townList[0]);        
        castleNameSelector.text(castleNameList[0]);        
        castleLinkSelector.attr("href", castleLinkList[0]);
        castleImgSelector.attr("src", castleImgList[0]);        
      }

      if(nextTown == undefined){
        nextTown = townList[0]; 
      }

      townSelector.removeClass(currentTown);
      townSelector.addClass(nextTown);
      castleNameSelector.text(nextCaslteName);
      castleLinkSelector.attr("href", nextCastleLink);
      castleImgSelector.attr("src", nextImgLink);      
  });  

  previous.on("click", function() {
    var currentTown = $(this).attr("data-town"),
        townOrder = townList.indexOf(currentTown),
        previousTown = townList[townOrder-1],
        nextCaslteName = castleNameList[townOrder-1],
        nextLinkName = castleLinkList[townOrder-1],
        nextImgName = castleImgList[townOrder-1];

      nextPrevious.attr("data-town", previousTown);
      
      if ( townOrder == 0) {
        console.log("currentTown "+currentTown);
        console.log("townList.length-1 "+townList[townList.length-1]);
        townSelector.removeClass(currentTown);
        townSelector.addClass(townList[townList.length-1]);        
        castleNameSelector.text(castleNameList[castleNameList.length-1]);
        castleLinkSelector.attr("href", castleLinkList[castleLinkList.length-1]);
        castleImgSelector.attr("src", castleImgList[castleImgList.length-1]);
        nextPrevious.attr("data-town", townList[townList.length-1]);
      }

      if(previousTown == undefined){
        previousTown = townList.length-1; 
      }

      townSelector.removeClass(currentTown);
      townSelector.addClass(previousTown);
      castleNameSelector.text(nextCaslteName);
      castleLinkSelector.attr("href", nextLinkName);
      castleImgSelector.attr("src", nextImgName);
  });

  infoIcon.on("click",function(){
    $(this).parent().toggleClass("open");
    $(this).parent().parent().toggleClass("open");
  });


})();
