$(document).ready(function() {
  $("#user_log pre").hide();
  $("#user_log div").click(function() {
    $("#user_log pre").slideToggle(500);
  });
  $("#add_user h2").click(function() {
    $("#add_user form").slideToggle(500);
  });
  //	$("#item_list").show(1000);
  $("#header").fadeIn(1000, function() {
    /*		$("#admin_bar").slideDown(250);*/
  });
  setTimeout(loadAllPictures, 250);
  $(document).scroll(function() {
    try {
      var lm = document.getElementById("loadmore");
      if (lm != null && isScrolledIntoView(lm, 500)) {
        var next = $("#loadmore").attr("value");
        if (next != "loading") {
          $("#loadmore").attr("value", "loading")
            //console.log("load "+next);
          var url = document.location.href.replace("a=search", "a=loadmore");
          try {
            url = "?" + url.split("?")[1]
          } catch (e) {
            alert(e)
          }
          $.ajax({
            url: url + "&itemFrom=" + next,
            context: document.body
          }).done(function(data) {
            $("#loadmore").remove();
            $("#item_list").append(data);
          });
        }
      }
    } catch (e) {
      alert(e)
    }
  });
});

function isScrolledIntoView(elem, offset) {
  try {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom + offset) && (elemTop >= docViewTop - offset));
  } catch (e) {
    alert("isScrolledIntoView()\n" + e)
  }
  return false;
}

function loadAllPictures() {
  /*
  $("#item_list .png_alpha").each(function(){
  	var realsrc = $(this).attr("thumbsrc");
  	if(realsrc!=""){ this.src = realsrc; }

  });
  //*/
}

function Ajax(request, file) {
  var xhr = null;
  if (file == null) {
    file = "action.php";
  }
  var method = "POST";
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    alert("Your browser does not support this web page");
  }
  xhr.open(method, file, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(request);
  return xhr;
}

function UpdateLog() {
  xhr = Ajax('a=log', 'index.php');
  div = document.getElementById('user_log');
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      div.innerHTML = xhr.responseText;
    }
  }
  return false;
}

function LoginForm() {
  var user = document.getElementById('log_user');
  var pass = document.getElementById('log_pass');

  if (user.value == '') {
    alert('Hey Ho!\n Please enter a user name first...\n if you need an access refer to 1.866.651.6366');
    return false;
  }
  if (pass.value == '') {
    alert('Access require also a password.');
    return false;
  }
  return true;
}

function SearchCheck() {
  var fld = document.getElementById("v");
  //	fld.value = fld.value.replace(/-/gi, '*');
  //	fld.value = fld.value.replace(/_/gi, '*');
  if (fld.value.length < 1) {
    fld.value = "Search for an item...";
    fld.select();
    return false;
  }
  return true;
}
