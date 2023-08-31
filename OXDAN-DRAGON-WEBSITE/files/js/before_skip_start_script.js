function waithide()
{

  var obj = document.getElementById("thisone");
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
        obj.style.display='none';

    }, 1600);

    window.open('skip_start.html', "_self");

}

function playSound() {
  setTimeout(() => {
      document.getElementById('mySound').play();
      document.getElementById('mySound').addEventListener('ended', function() {
        document.getElementById('mySound_2').play();
      });
      
  }, 500)

  document.onkeypress = function(e) {

    var obj = document.getElementById("thisone");
  obj.style.opacity = '0';
  window.setTimeout(
    function removethis()
    {
        obj.style.display='none';

    }, 300);

    window.open('skip_start.html', "_self");

  }
}