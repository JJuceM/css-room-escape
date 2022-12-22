import React from "react";
import levels from './levels';
import $ from "jquery";

var level;  
var currentLevel = parseInt(localStorage.currentLevel,10) || 0; 
var levelTimeout = 1000; 
var finished = false;    

var blankProgress = {
  totalCorrect : 0,
  percentComplete : 0,
  lastPercentEvent : 0,
  guessHistory : {}
}

var progress = JSON.parse(localStorage.getItem("progress")) || blankProgress;


$(document).ready(function(){

  $(window).on("keydown",function(e){
    if(e.keyCode == 27) {
      closeMenu();
    }
  });

  $(".level-menu-toggle-wrapper").on("click",function(){
    if($(".menu-open").length == 0) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  $(".level-nav").on("click","a",function(){

    var direction;
    if($(this).hasClass("next")) {
      direction = "next";
    }

    addAnimation($(this),"link-jiggle");

    if(direction == "next") {
      currentLevel++;
      if(currentLevel >= levels.length) {
        currentLevel = levels.length - 1;
      }
    } else {
      currentLevel--;
      if(currentLevel < 0) {
        currentLevel = 0;
      }
    }

    loadLevel();
    return false;
  });

  // progress 리셋 and progress indicators
  $(".reset-progress").on("click",function(){
    resetProgress();
    return false;
  })

  $("input").on("keypress",function(e){
    e.stopPropagation();
    if(e.keyCode ==  13){
      enterHit();
      return false;
    }
  });

  $("input").on("keyup",function(e){
    e.stopPropagation();
    var length = $(this).val().length;
    if(length > 0) {
      $("input").removeClass("input-css");
    } else {
      $("input").addClass("input-css");
    }
  });

  $(".viewer").on("click",function(){
    $("input").focus();
  });

  $(".enter-btn").on("click",function(){
    enterHit();
  })

  $(".table-wrapper,.table-edge").css("opacity",0);

  buildLevelmenu();

  setTimeout(function(){
    loadLevel();
    $(".table-wrapper,.table-edge").css("opacity",1);
  },50);
});

function addAnimation(el, className){
  el.addClass("link-jiggle");
  el.one("animationend",function(e){
    $(e.target).removeClass("link-jiggle");
  })
}

function resetProgress(){
  currentLevel = 0;
  progress = blankProgress;
  localStorage.setItem("progress",JSON.stringify(progress));
  finished = false;

  $(".completed").removeClass("completed");
  loadLevel();
  closeMenu();
  $("#mCSB_2_container").css("top",0); // Strange element to reset scroll due to scroll plugin
}

function checkCompleted(levelNumber){
  if(progress.guessHistory[levelNumber]){
    if(progress.guessHistory[levelNumber].correct){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function buildLevelmenu(){
  for(var i = 0; i < levels.length; i++){
    var level = levels[i];
    var item = document.createElement("a");
    $(item).html("<span class='checkmark'></span><span class='level-number'>" + (i+1) + "</span>" + level.syntax);
    $(".level-menu .levels").append(item);

    if(checkCompleted(i)){
      $(item).addClass("completed");
    }

    $(item).on("click",function(){
      finished = false;
      currentLevel = $(this).index();
      loadLevel();
      closeMenu();
    });
  }
}

function closeMenu(){
  $(".rightFrame").removeClass("menu-open");
}

function openMenu(){
  $(".rightFrame").addClass("menu-open");
}

function enterHit(){
  $(".enter-btn").removeClass("enterhit");
  $(".enter-btn").width($(".enter-btn").width());
  $(".enter-btn").addClass("enterhit");
  var value = $("input").val();
  handleInput(value);
}

function handleInput(text){
  if(parseInt(text,10) > 0 && parseInt(text,10) < levels.length+1) {
    currentLevel = parseInt(text,10) - 1;
    loadLevel();
    return;
  }
  fireRule(text);
}

function fireRule(rule) {

  if(rule === ".strobe") {
    rule = null;
  }

  $(".shake").removeClass("shake");

  $(".strobe,.clean,.shake").each(function(){
    $(this).width($(this).width());
    $(this).removeAttr("style");
  });
  var baseTable = $('.table');
  try {
    $(".table").find(rule).not(baseTable);
  }
  catch(err) {
    rule = null;
  }

  var ruleSelected = $(".table").find(rule).not(baseTable);            
  var levelSelected = $(".table").find(level.selector).not(baseTable); 

  var win = false;

  if(ruleSelected.length == 0) {
    $(".viewer").addClass("shake");
  }

  if(ruleSelected.length == levelSelected.length && ruleSelected.length > 0){
    win = checkResults(ruleSelected,levelSelected,rule);
  }

  if(win){
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("clean");
    $("input").val("");
    $(".input-wrapper").css("opacity",.2);
    updateProgressUI(currentLevel, true);
    currentLevel++;

    if(currentLevel >= levels.length) {
      winGame();
    } else {
      setTimeout(function(){
        loadLevel();
      },levelTimeout);
    }
  } else {
    ruleSelected.removeClass("strobe");
    ruleSelected.addClass("shake");

    setTimeout(function(){
      $(".shake").removeClass("shake");
      $(".strobe").removeClass("strobe");
      levelSelected.addClass("strobe");
    },500);

    $(".result").fadeOut();
  }

  if(win){
    trackProgress(currentLevel-1, "correct");
  } else {
    trackProgress(currentLevel, "incorrect");
  }
}

function updateProgressUI(levelNumber, completed){
  if(completed) {
    $(".levels a:nth-child("+ (levelNumber+1) + ")").addClass("completed");
    $(".level-header").addClass("completed");
  } else {
    $(".level-header").removeClass("completed");
  }
}

function trackProgress(levelNumber, type){
  if(!progress.guessHistory[levelNumber]) {
    progress.guessHistory[levelNumber] = {
      correct : false,
      incorrectCount : 0,
      gaSent : false
    };
  }

  var levelStats = progress.guessHistory[levelNumber];

  if(type == "incorrect"){
    if(levelStats.correct == false) {
      levelStats.incorrectCount++;
    }
  } else {
    if(levelStats.correct == false) {
      levelStats.correct = true;
      progress.totalCorrect++;
      progress.percentComplete = progress.totalCorrect / levels.length;
      levelStats.gaSent = true;
      
    }
  }

  var increment = .1;
  if(progress.percentComplete >= progress.lastPercentEvent + increment) {
    progress.lastPercentEvent = progress.lastPercentEvent + increment;
   
  }

  localStorage.setItem("progress",JSON.stringify(progress));
}

function winGame(){
  $(".table").html('<span class="winner"><strong>You did it!</strong><br>You rock at CSS.</span>');
  addNametags();
  finished = true;
}

function checkResults(ruleSelected,levelSelected,rule){
  var ruleTable = $(".table").clone();
  ruleTable.find(".strobe").removeClass("strobe");
  ruleTable.find(rule).addClass("strobe");
  return($(".table").html() == ruleTable.html());
}

function getMarkup(el){
  var hasChildren = el.children.length > 0 ? true : false;
  var elName = el.tagName.toLowerCase();
  var wrapperEl = $("<div/>");
  var attributeString = "";
  $.each(el.attributes, function() {
    if(this.specified) {
     attributeString = attributeString + ' '  + this.name + '="' + this.value + '"';
   }
  });
  var attributeSpace = "";
  if(attributeString.length > 0){
    attributeSpace = " ";
  }
  if(hasChildren) {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + ">");
    $(el.children).each(function(i,el){
      wrapperEl.append(getMarkup(el));
    });
    wrapperEl.append("&lt;/" + elName +  "&gt;");
  } else {
    wrapperEl.text("<" + elName + attributeSpace + attributeString + " />");
  }
  return wrapperEl;
}

function loadBoard(){

  var boardString = level.board;
  var boardMarkup = "";
  var tableMarkup = "";
  var editorMarkup = "";

  var markupHolder = $("<div/>")

  $(level.boardMarkup).each(function(i,el){
    if(el.nodeType == 1){
      var result = getMarkup(el);
      markupHolder.append(result);
    }
  });

  $(".table").html(level.boardMarkup);
  addNametags();
  $(".table *").addClass("pop");


  $(".viewer-field").html('<div>&ltdiv class="table"&gt' + markupHolder.html() + '&lt/div&gt</div>');
}

function addNametags(){
  $(".nametags *").remove();
  $(".table-wrapper").css("transform","rotateX(0)");
  $(".table-wrapper").width($(".table-wrapper").width());

  $(".table *").each(function(){
    if($(this).attr("for")){
      var pos = $(this).position();
      var width = $(this).width();
      var nameTag = $("<div class='nametag'>" + $(this).attr("for") + "</div>");
      $(".nametags").append(nameTag);
      var tagPos = pos.left + (width/2) - nameTag.width()/2 + 12;
      nameTag.css("left",tagPos);
    }
  });

  $(".table-wrapper").css("transform","rotateX(20deg)");
}


function loadLevel(){
  if(currentLevel < 0 || currentLevel >= levels.length) {
    currentLevel = 0;
  }

  level = levels[currentLevel];

  $(".level-menu .current").removeClass("current");
  $(".level-menu div a").eq(currentLevel).addClass("current");

  var percent = (currentLevel+1)/levels.length * 100;
  $(".progress").css("width",percent + "%");

  localStorage.setItem("currentLevel",currentLevel);

  loadBoard();

  $(".level-header .level-text").html("Level " + (currentLevel+1) + " of " + levels.length);

  updateProgressUI(currentLevel, checkCompleted(currentLevel));

  $(".order").text(level.doThis);
  $("input").val("").focus();

  $(".input-wrapper").css("opacity",1);
  $(".result").text("");

  setTimeout(function(){
    $(".table " + level.selector).addClass("strobe");
    $(".pop").removeClass("pop");
  },200);

}
