/**
 * Created by tuyao on 2017/3/2.
 */

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

$(window).keydown(function (e) {
    if (e.keyCode == '116') {

        window.location.reload(1);

        return false;
    }
})


$(".go-back").click(function()
{

    window.history.go(-1);

});

$(".link-btn").click(function()
{
    var url=$(this).attr("data-next");

    if(url)
    {
        $(".next-col").hide();
        $(this).next().show();
    }
});

$(function()
{

    require('electron').webFrame.setZoomLevelLimits(1,1);

});

//$("body").append("<div onclick='window.location.reload();' style='width:200px;height:200px;position: absolute;right:0;bottom:0;background: #000;z-index:10000;'></div>")