/**
 * Created by Administrator on 2016/1/17.
 */
var userEx = /^([0-9a-zA-Z]*@[0-9a-zA-Z]*\.(com|cn)|(13|14|15|18)\d{9})$/;
var passWordEx = /^[0-9a-zA-Z]{6,12}$/;
var nameEx = /^u4e00-\u9fa5{10}$/;
$(function(){
    $("#username").on("focus",function(){
        userFocus();
    });
    $("#username").on("blur",function(){
        userBlur();
    });
    $("#password").on("focus",function(){
        passwordFocus();
    });
    $("#password").on("blur",function(){
        passwordBlur();
    });
    $("#authCode").on("focus",function(){
       codeFocus();
    });
//    $("#authCode").on("blur",function(){
//        codeBlur();
//    });
});
function userFocus(){
   $(".user").css({
       border:"1px solid #000"
   });
    $(".verifyInfo1").show().html("请输入11位手机号码或者邮箱");
}
function userBlur(){
    $(".user").css({
        border:"1px solid #e5e5e5"
    });
    $(".verifyInfo1").hide();
}
function passwordFocus(){
    $(".paw").css({
        border:"1px solid #000"
    });
    $(".verifyInfo2").show().html("请输入密码");
}
function passwordBlur(){
    $(".paw").css({
        border:"1px solid #e5e5e5"
    });
    $(".verifyInfo2").hide();
}
function codeFocus(){
    $(".authCode").css({
        border:"1px solid #000"
    });
    $(".verifyInfo3").show().html("请输入图片中的字符不区分大小写");
}
