App({
    onLaunch: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(n) {
                e.globalData.screenWidth = n.windowWidth, e.globalData.screenHeight = n.windowHeight;
            }
        }), console.log(e.aldstatald);
        var n = wx.getStorageSync("configs");
        n || (n = this.initconfigs()), wx.setStorageSync("configs", n), wx.onUserCaptureScreen(function(n) {
            console.log("用户截屏了"),  e.util.request({
                url: "entry/wxapp/jieping",
                method: "post",
                data: {
                    user_id: e.globalData.user_id,
                    jieping: 0
                },
                success: function(n) {
                    console.log("截屏走接口");
                }
            });
        });
    },
    onShow: function() {},
    onHide: function() {},
    onError: function(n) {},
    util: require("we7/resource/js/util.js"),
    globalData: {
        userInfo: null,
        user_id: null,
        setup: null,
        zhuanfa_title: null,
        one_money: null,
        gohomeid: null,
        shouye: null,
        jiangpina: null,
        zhuanfa_img: null,
        indexof: 1,
        xsjiangpin_status: null
    },
    initconfigs: function() {
        var n = new Object(), e = new Object();
        e.id = "config1", e.name = "立论阶段", e.state = !0, e.time = 180, e.voice = 15, e.desc = "\n\n（一）正方一辩开篇立论，@\n（二）反方一辩开篇立论，@", 
        n.config1 = e;
        var t = new Object();
        t.id = "config2", t.name = "驳立论阶段", t.state = !0, t.time = 200, t.voice = 15, t.desc = "\n\n（一）正方二辩驳对方立论，@ \n（二）反方二辩驳对方立论，@", 
        n.config2 = t;
        var i = new Object();
        i.id = "config3", i.name = "置辩环节", i.state = !0, i.time = 120, i.voice = 10, i.desc = "\n\n（一）正方三辩提问反方一、二、四辩各一个问题，反方辩手分别回答，@ \n（二）反方三辩提问正方一、二、四辩各一个问题，正方辩手分别回答，@；", 
        n.config3 = i;
        var o = new Object();
        o.id = "config4", o.name = "自由辩论", o.state = !0, o.time = 100, o.voice = 5, o.desc = "\n\n自由辩论@", 
        n.config4 = o;
        var a = new Object();
        return a.id = "config5", a.name = "总结陈词", a.state = !0, a.time = 160, a.voice = 5, 
        a.desc = "\n\n（一）正方四辩总结陈词，@\n（二）反方四辩总结陈词，@", n.config5 = a, n;
    },
    siteInfo: require("siteinfo.js"),
    aldstat: require("/we7/resource/js/ald-stat.js"),
    aldstatald: require("/we7/resource/js/ald-stat-conf.js")
});