/**
 * Created by caelumtian on 16/8/29.
 */
const ua = window.navigator.userAgent;

let browser = {
    name: "unknown",
    version: "0.0.0"
};
let matched;

if((matched = ua.match(/(?:Chrome|CriOS)\/([\d\.]+)/))) {
    browser = {
        name: "Chrome",
        isChrome: true,
        version: matched[1]
    };
    if(ua.match(/Version\/[\d+\.]+\s*Chrome]/)) {
        browser.name = "Chrome Webview";
        browser.isWebview = true;
    }
}else if(ua.match(/iPhone|iPad|iPod/)) {
    if(ua.match(/Safari/) && (matched = ua.match(/Version\/([\d\.]+)/))) {
        browser = {
            name: "Safari",
            isSafari: true,
            version: matched[1]
        }
    }else if((matched = ua.match(/OS ([\d_\.]+) like Mac OS X/))) {
        browser = {
            name: "iOS Webview",
            isWebview: true,
            version: matched[1].split('_').join(".")
        }
    }
}else if((matched = ua.match(/MISE\s([\d\.]+)/)) || (matched = ua.match(/IEMobile\/([\d\.]+)/))) {
    browser = {
        version: matched[1]
    };
    if(ua.match(/IEMobile/)) {
        browser.name = "IEMobile";
        browser.isIEMobile = true;
    }else {
        browser.name = "IE";
        browser.isIE = true;
    }
    if(ua.match(/Android|iPhone/)) {
        browser.isIELikeWebkit = true;
    }
}else if(!!ua.match(/Safari/) && (matched = ua.match(/Android[\s\/]([\d\.]+)/))) {
    browser = {
        name: "Android",
        isAndroid: true,
        version: matched[1]
    }
}else if((mathced = ua.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))) {
    browser = {
        name: "UC",
        isUC: true,
        version: matched[1]
    }
}else if((matched = ua.match(/MQQBrowser\/([\d\.]+)/))) {
    browser = {
        name: "QQ",
        isQQ: true,
        version: matched[1]
    }
}else if((matched = ua.match(/(?:Firefox|FxiOS)\/([\d\.]+)/))) {
    browser = {
        name: "Firefox",
        isFirefox: true,
        version: matched[1]
    }
}

export default browser;
