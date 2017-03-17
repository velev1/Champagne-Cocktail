var $options = $("#options-container");
var $playerButton = $("#btnStatisticsPleyer");
$playerButton.on("click", function(e) {
    $options.css("background-color", "white")
    .css("opacity", "0.5")
    .css("border-radius", "10px");
    $options.hide();
    $options.fadeIn();
});


