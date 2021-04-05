var linkContainer = document.getElementById("bar");
var links = linkContainer.getElementsByClassName("link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
function menu(id){
    show(id)
    if(id=='opt1'){
        hide("opt2")
        hide("opt3")
        
    }
    if(id=='opt2'){
        hide("opt1")
        hide("opt3")
        
    }
    if(id=='opt3'){
        hide("opt1")
        hide("opt2")
        dismessage()
    }
}

function hide(id){
    document.getElementById(id).style.display="none"
}
function show(id){
    document.getElementById(id).style.display="block"
}
//skill page
document.getElementById("firstleftimg").onmouseover = function() {message();lefthover();};
document.getElementById("firstrightimg").onmouseover = function() {message();righthover();};
document.getElementById("secleftimg").onmouseover = function() {message();seclefthover();};
document.getElementById("secrightimg").onmouseover = function() {message();secrighthover();};
function message() {
    document.getElementById("msg").style.display="none";
  }
  function lefthover() {
    document.getElementById("onemidleft").style.display="block";
    document.getElementById("onemidright").style.display="none";
    opacity1("firstleftimg")
    opacity06("firstrightimg")
  }
  function righthover() {
    document.getElementById("onemidright").style.display="block";
    document.getElementById("onemidleft").style.display="none";
    opacity06("firstleftimg")
    opacity1("firstrightimg")
  }
  function seclefthover() {
    document.getElementById("twomidleft").style.display="block";
    document.getElementById("twomidright").style.display="none";
    opacity1("secleftimg")
    opacity06("secrightimg")
  }
  function secrighthover() {
    document.getElementById("twomidright").style.display="block";
    document.getElementById("twomidleft").style.display="none";
    opacity06("secleftimg")
    opacity1("secrightimg")
  }
  function dismessage() {
    document.getElementById("msg").style.display="block";
    document.getElementById("onemidright").style.display="none";
    document.getElementById("onemidleft").style.display="none";
    document.getElementById("twomidright").style.display="none";
    document.getElementById("twomidleft").style.display="none";
    opacity06("firstleftimg")
    opacity06("firstrightimg")
    opacity06("secleftimg")
    opacity06("secrightimg")

  }
  function opacity1(id) {
    document.getElementById(id).style.opacity=1;
  }
  function opacity06(id) {
    document.getElementById(id).style.opacity=0.6;
  }




//contact
document.getElementById("popovers").onclick = function() {contact();};
function contact() {
  if(document.getElementById("contact").style.display=="none")
  {
    show("contact")
  }
  else{
    hide("contact")
  }
}

//sidebar
