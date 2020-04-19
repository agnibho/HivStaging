$(document).ready(function(){
  $("#adult-criteria-list").find("a").each(function(item){
    $(this).click(function(e){
      e.preventDefault();
      if($(this).hasClass("active")){
        $(this).removeClass("active");
      }
      else{
        $(this).addClass("active");
      }
    });
  });
  $("#adult-none").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $("#adult-criteria-list").find("a").each(function(item){
        $(this).removeClass("disabled");
      });
    }
    else{
      $(this).addClass("active");
      $("#adult-criteria-list").find("a").each(function(item){
        $(this).removeClass("active");
        $(this).addClass("disabled");
      });
    }
  });
  $(".wl").find("a").each(function(item){
    $(this).click(function(){
      $(this).siblings().each(function(){
        $(this).removeClass("active");
      });
    });
  });
  $("#adult-calc").click(function(){
    selected=$("#adult-criteria-list").find("a.active, li.active");
    if(selected.filter("[data-stage='adult-4']").length>0){
      $("#adult-result").text("Clinical Stage 4");
    }
    else if(selected.filter("[data-stage='adult-3']").length>0){
      $("#adult-result").text("Clinical Stage 3");
    }
    else if(selected.filter("[data-stage='adult-2']").length>0){
      $("#adult-result").text("Clinical Stage 2");
    }
    else if(selected.filter("[data-stage='adult-1']").length>0){
      $("#adult-result").text("Clinical Stage 1");
    }
    else{
      $("#adult-result").text("Insuffient Data. Please choose one or more options");
    }
  });
  $("#adult-clear").click(function(){
    $("#adult-result").text("");
    $("#adult-criteria-list").find("a, li").each(function(){
      $(this).removeClass("active disabled");
    });
  });

// Child

  $("#child-criteria-list").find("a").each(function(item){
    $(this).click(function(e){
      e.preventDefault();
      if($(this).hasClass("active")){
        $(this).removeClass("active");
      }
      else{
        $(this).addClass("active");
      }
    });
  });
  $("#child-none").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $("#child-criteria-list").find("a").each(function(item){
        $(this).removeClass("disabled");
      });
    }
    else{
      $(this).addClass("active");
      $("#child-criteria-list").find("a").each(function(item){
        $(this).removeClass("active");
        $(this).addClass("disabled");
      });
    }
  });
  $(".wl").find("a").each(function(item){
    $(this).click(function(){
      $(this).siblings().each(function(){
        $(this).removeClass("active");
      });
    });
  });
  $("#child-calc").click(function(){
    selected=$("#child-criteria-list").find("a.active, li.active");
    if(selected.filter("[data-stage='child-4']").length>0){
      $("#child-result").text("Clinical Stage 4");
    }
    else if(selected.filter("[data-stage='child-3']").length>0){
      $("#child-result").text("Clinical Stage 3");
    }
    else if(selected.filter("[data-stage='child-2']").length>0){
      $("#child-result").text("Clinical Stage 2");
    }
    else if(selected.filter("[data-stage='child-1']").length>0){
      $("#child-result").text("Clinical Stage 1");
    }
    else{
      $("#child-result").text("Insuffient Data. Please choose one or more options");
    }
  });
  $("#child-clear").click(function(){
    $("#child-result").text("");
    $("#child-criteria-list").find("a, li").each(function(){
      $(this).removeClass("active disabled");
    });
  });
  $("#ref").click(function(){
    cordova.InAppBrowser.open("http://www.who.int/hiv/pub/guidelines/HIVstaging150307.pdf", "_system");
  });

});
