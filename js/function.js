
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
    var agradecimiento = document.getElementById('agradecimiento');
    document.getElementById('agradecimiento').style.display = 'none';
  }