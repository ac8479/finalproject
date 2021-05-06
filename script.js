var rellax = new Rellax('.rellax');

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

AOS.init();
new Glide('.glide').mount()
