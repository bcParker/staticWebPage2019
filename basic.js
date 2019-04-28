// function myFunction() {
//   var x = document.getElementById('myLinks');
//   if (x.style.display === 'block') {
//     x.style.display = 'none';
//   } else {
//     x.style.display = 'block';
//   }
// }

function openNav() {
  document.getElementById('mySidebar').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
  document.getElementById('mySidebar').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}