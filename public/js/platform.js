var OSBV = getOSAndBrowser()
if(OSBV.browser == 'IE'){
    document.getElementById('lowVer').innerHTML = '当前浏览器暂不支持，推荐您使用新版chrome 、firefox、edge浏览器'
}else{
}
// 全面判断浏览器版本+操作系统
function getOSAndBrowser() {
    var os = navigator.platform
    var userAgent = navigator.userAgent
    var info = ''
    var obj = {}
    var tempArray = ''
    // 判断操作系统
    if (os.indexOf('Win') > -1) {
        if (userAgent.indexOf('Windows NT 5.0') > -1) {
            info += 'Win2000'
            obj.OS = 'Win2000'
        } else if (userAgent.indexOf('Windows NT 5.1') > -1) {
            info += 'WinXP'
            obj.OS = 'WinXP'
        } else if (userAgent.indexOf('Windows NT 5.2') > -1) {
            info += 'Win2003'
            obj.OS = 'Win2003'
        } else if (userAgent.indexOf('Windows NT 6.0') > -1) {
            info += 'WindowsVista'
            obj.OS = 'WindowsVista'
        } else if (userAgent.indexOf('Windows NT 6.1') > -1 || userAgent.indexOf('Windows 7') > -1) {
            info += 'Win7'
            obj.OS = 'Win7'
        } else if (userAgent.indexOf('Windows NT 6.2') > -1 || userAgent.indexOf('Windows 8') > -1) {
            info += 'Win8'
            obj.OS = 'Win8'
        } else if (userAgent.indexOf('Windows NT 6.3') > -1 || userAgent.indexOf('Windows 8.1') > -1) {
            info += 'Win8.1'
            obj.OS = 'Win8.1'
        } else if (userAgent.indexOf('Windows NT 10.0') > -1 || userAgent.indexOf('Windows 10') > -1) {
            info += 'Win10'
            obj.OS = 'Win10'
        } else {
            info += 'Other'
            obj.OS = 'Other'
        }
    } else if (os.indexOf('Mac') > -1) {
        info += 'Mac'
        obj.OS = 'Mac'
    } else if (os.indexOf('X11') > -1) {
        info += 'Unix'
        obj.OS = 'Unix'
    } else if (os.indexOf('Linux') > -1) {
        info += 'Linux'
        obj.OS = 'Linux'
    } else {
        info += 'Other'
        obj.OS = 'Other'
    }
    info += '/'
    // 判断浏览器版本
    var isOpera = userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera // 判断是否IE浏览器
    var isEdge = userAgent.toLowerCase().indexOf('edge') > -1 && !isIE // 判断是否IE的Edge浏览器
    var isIE11 = (userAgent.toLowerCase().indexOf('trident') > -1 && userAgent.indexOf('rv') > -1)

    if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
        tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent)
        info += tempArray[1] + tempArray[2]
        obj.browser = tempArray[1]
        obj.browserVer = tempArray[2]
    } else if (isIE) {
        var version = ''
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp['$1'])
        if (fIEVersion === 7) {
            version = 'IE7'
        } else if (fIEVersion === 8) {
            version = 'IE8'
        } else if (fIEVersion === 9) {
            version = 'IE9'
        } else if (fIEVersion === 10) {
            version = 'IE10'
        } else {
            version = '0';
            obj.browserVer = '0'
        }

        info += version
        obj.browser = 'IE'
        obj.browserVer = fIEVersion
    } else if (isEdge) {
        info += 'Edge'
        obj.browser = 'Edge'
        obj.browserVer = ''
    } else if (isIE11) {
        info += 'IE11'
        obj.browser = 'IE'
        obj.browserVer = '11'
    } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
        tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent)
        info += tempArray[1] + tempArray[2]
        obj.browser = tempArray[1]
        obj.browserVer = tempArray[2]
    } else if (/[Vv]ersion\/\d+\.\d+\.\d+(\.\d)* *[Ss]afari/.test(userAgent)) {
        tempArray = /[Vv]ersion\/(\d+\.\d+\.\d+)(\.\d)* *([Ss]afari)/.exec(userAgent)
        info += tempArray[3] + tempArray[1]
        obj.browser = tempArray[3]
        obj.browserVer = tempArray[1]
    } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
        tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent)
        info += tempArray[1] + tempArray[2]
        obj.browser = tempArray[1]
        obj.browserVer = tempArray[2]
    } else {
        info += 'unknown'
        obj.browser = 'unknown'
        obj.browserVer = 'unknown'
    }
    obj.info = info
    return obj
}
