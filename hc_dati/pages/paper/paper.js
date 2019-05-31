var _Page;

function _defineProperty(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var app = getApp();

function countdown(a) {
    var t = a.data.daojishi || [], e = new Date().getTime() / 1e3, n = t - (e = parseInt(e)) || [];
    a.setData({
        clock: dateformat(n)
    }), n <= 0 && a.setData({
        clock: "开始打卡"
    }), setTimeout(function() {
        n -= 1, countdown(a);
    }, 1e3);
}

function dateformat(a) {
    var t = Math.floor(a);
    Math.floor(t / 3600 / 24);
    return Math.floor(t / 3600 % 24) + "时" + Math.floor(t / 60 % 60) + "分" + Math.floor(t % 60) + "秒";
}

Page((_defineProperty(_Page = {
    data: {
        yi: 1,
        stactyu: 0,
        stactt: 1
    },
    onLoad: function(a) {
        var s = this;
        wx.login({
            success: function(a) {
                console.log(111);
                var t = a.code;
                app.util.request({
                    url: "entry/wxapp/getopenid",
                    method: "POST",
                    data: {
                        code: t
                    },
                    dataType: "json",
                    success: function(a) {
                        var t = a.data.data;
                        s.setData({
                            open_id: t
                        }), wx.getUserInfo({
                            success: function(a) {
                                console.log(222);
                                var t = s.data.open_id, e = a.userInfo, n = e.nickName, o = e.avatarUrl, i = e.gender, d = e.province, r = e.city, u = e.country;
                                d = e.province;
                                s.setData({
                                    nickName: n,
                                    avatarUrl: o
                                }), app.util.request({
                                    url: "entry/wxapp/zhuce",
                                    method: "POST",
                                    data: {
                                        open_id: t,
                                        nickName: n,
                                        avatarUrl: o,
                                        gender: i,
                                        city: r,
                                        country: u,
                                        province: d
                                    },
                                    success: function(a) {
                                        var t = a.data.data, e = a.data.message;
                                        app.globalData.user_id = a.data.data, s.setData({
                                            user_id: t,
                                            state: e
                                        }), app.util.request({
                                            url: "entry/wxapp/hongbao",
                                            method: "POST",
                                            data: {
                                                user_id: s.data.user_id
                                            },
                                            success: function(a) {
                                                var t = a.data.data.stacttwo, e = a.data.data.newdaka, n = a.data.data.level, o = a.data.data.qichuang, i = a.data.data.yingyu, d = a.data.data.yundong, r = a.data.data.daojishi;
                                                s.setData({
                                                    stactyu: t,
                                                    level: n,
                                                    qichuang: o,
                                                    yingyu: i,
                                                    newdaka: e,
                                                    yundong: d,
                                                    daojishi: r
                                                });
                                            },
                                            fail: function() {}
                                        }), 0 == s.data.stactyu || s.home();
                                    },
                                    fail: function(a) {
                                        console.log("失败");
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }), countdown(s);
    },
    home: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data.setup.one_money;
                app.globalData.user_id = a.data.data.setup.one_money, e.setData({
                    one_money: t
                });
            },
            fail: function() {}
        });
    },
    jiayi: function() {
        var a = this.data.yi;
        a++, this.setData({
            yi: a
        });
    }
}, "jiayi", function(a) {
    var t = a.currentTarget.dataset.stactt, r = this;
    r.setData({
        stactt: t
    }), app.util.request({
        url: "entry/wxapp/jiayi",
        method: "POST",
        data: {
            user_id: r.data.user_id,
            stact: r.data.stactt
        },
        success: function(a) {
            a.data;
            app.util.request({
                url: "entry/wxapp/hongbao",
                method: "POST",
                data: {
                    user_id: r.data.user_id
                },
                success: function(a) {
                    var t = a.data.data.newdaka, e = a.data.data.level, n = a.data.data.qichuang, o = a.data.data.yingyu, i = a.data.data.yundong, d = a.data.data.daojishi;
                    r.setData({
                        level: e,
                        qichuang: n,
                        yingyu: o,
                        newdaka: t,
                        yundong: i,
                        daojishi: d
                    });
                },
                fail: function() {}
            });
        }
    });
}), _defineProperty(_Page, "tiao", function() {
    wx.navigateTo({
        url: "../index/index"
    });
}), _defineProperty(_Page, "fous", function() {
    wx.navigateTo({
        url: "../found/found"
    });
}), _defineProperty(_Page, "onReady", function() {}), _defineProperty(_Page, "onShow", function() {}), 
_defineProperty(_Page, "onHide", function() {}), _defineProperty(_Page, "onUnload", function() {}), 
_defineProperty(_Page, "onPullDownRefresh", function() {}), _defineProperty(_Page, "onReachBottom", function() {}), 
_defineProperty(_Page, "onShareAppMessage", function(a) {
    return {
        title: this.data.one_money,
        desc: "欢迎大家使用",
        path: "/hc_daka/pages/index/index",
        success: function(a) {},
        fail: function(a) {}
    };
}), _Page));