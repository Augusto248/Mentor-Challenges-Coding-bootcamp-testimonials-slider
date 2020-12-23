$(document).ready(function()
{
    button_left=$("#slid-left-tanya");
    button_right=$("#slid-right-john");

    $(button_left).click(button_left_click);
    $(button_right).click(button_right_click);

});

function button_left_click()
{
    card_john=$(".card--tanya");
    $(card_john).css("display","none");

    card_john=$(".card--john");
    $(card_john).css("display","flex");
}

function button_right_click()
{
    card_john=$(".card--john");
    $(card_john).css("display","none");

    card_john=$(".card--tanya");
    $(card_john).css("display","flex");
}

