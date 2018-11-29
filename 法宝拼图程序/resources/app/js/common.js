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

   /* let  fs = require('fs');
    let  join = require('path').join;

    function findSync(startPath) {
        let result=[];
        function finder(path) {
            let files=fs.readdirSync(path);
            files.forEach((val,index) => {
                let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()) finder(fPath);
            if(stats.isFile()) result.push(fPath);
        });

        }
        finder(startPath);
        return result;
    }
    let fileNames=findSync('./resources/app/img/3开始游戏页面/素材/掉落的玩具');
    var list=[];
    for(var i=0;i<fileNames.length;i++)
    {
        var a=fileNames[i].split("\\")[6];
        list.push(a.split(".")[0]);
    }
    console.log(JSON.stringify(list));*/


});

//$("body").append("<div onclick='window.location.reload();' style='width:200px;height:200px;position: absolute;right:0;bottom:0;background: #000;z-index:10000;'></div>")