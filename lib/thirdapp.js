/**
 * Created by caelumtian on 16/8/29.
 */
const ua = window.navigator.userAgent;
let thirdapp = {};

if(!!ua.match(/MicroMessage/i)) {
    thirdapp = {
        appname: "WeiXin",
        isWeiXin: true
    }
}else if(!!ua.match(/QQ/i)) {
    thirdapp = {
        appname: "QQ",
        isQQ: true
    }
}

export default thirdapp;