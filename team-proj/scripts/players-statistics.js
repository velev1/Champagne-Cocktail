//Test
var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
var $charts = $("#charts-container");

$options.css("background-color", "white") // Вместо .css ще е .addClass() след като има готов във css файла със същите стойности
    .css("opacity", "0")
    .css("border-radius", "10px");

$charts.css("background-color", "white") // Вместо .css ще е .addClass() след като има готов във css файла със същите стойности
    .css("opacity", "0")
    .css("border-radius", "10px");

//$options.hide();
//$charts.hide();
$playerButton.on("click", function (e) {
    //$options.fadeToggle();
    if ($charts.css("opacity") == 0.8) { //close
        $charts.animate({
            opacity: "0"
        }, 500);
    }
    else { //open
        $charts.animate({
            opacity: "0.8"
        }, 500);
    }
    if ($options.css("opacity") == 0.8) { //close
        console.log($options.css("opacity"))
        $options.animate({
            opacity: "0"
        }, 500);
    }
    else {
        $options.animate({ //open
            opacity: "0.8"
        }, 500);
    }
});


