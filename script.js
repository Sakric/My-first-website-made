var checkOpenStatus = function () {
    var d = new Date();
    var date = d.getHours();
    var day = d.getDay();
    if ((date > 8) && (date < 20) && (day != 0)) {
        y = "<span style=\"color:#07ed11\">Mes Dirbme!</span>";
    } else {
        y = "<span style=\"color:#fc4b1c\">Šio metu nedirbame!</span>";
    }
    document.getElementById("open-close").innerHTML = y;
    setTimeout(checkOpenStatus,15000);
};

    checkOpenStatus();

    function Siusti() {
      alert("Jūsų žinute sėkmingai įsiūsta");
      location.reload();
    }

    function myFunction(id) {
        var i = document.getElementById(id).value
        if(i > 0){
        document.getElementById(id).value =  --i;}
        }
        function myFunctions(id) {
        var i = document.getElementById(id).value
        if( i < 9){
        document.getElementById(id).value = ++i;}
        }
              $(document).ready(function(){
                $('.btn').click(function(){
                  $('.items').toggleClass("show");
                  $('ul li').toggleClass("hide");
                });
              });

              function filtras() {
                var x = document.getElementById("filtras");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
                }
              }