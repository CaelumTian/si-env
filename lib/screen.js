/**
 * 返回屏幕信息
 * dpr 设备像素比
 * vw  设备宽度
 * vh  设备高度
 * scale 设备缩放比
 * @return {Object}
 */
let screen = {};

screen.dpr = window.devicePixelRatio;
screen.vw = window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
screen.vh = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;

let match = document.querySelector("meta[name=viewport]").getAttribute("content").match(/initial\-scale=([\d\.]+)/);
if(match) {
    screen.scale = parseFloat(match[1]);
}else {
    screen.scale = parseFloat((1 / screen.dpr).toFixed(2));
}

export default device;
