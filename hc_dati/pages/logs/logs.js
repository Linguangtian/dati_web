var app = getApp();

Page({
    data: {
        logs: []
    },
    onLoad: function() {
        app.register(), wx.login({
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
                        c.setData({
                            open_id: t
                        }), wx.getUserInfo({
                            success: function(a) {
                                console.log(222);
                                var t = c.data.open_id, e = a.userInfo, s = e.nickName, n = e.avatarUrl, i = e.gender, o = e.province, u = e.city, d = e.country;
                                o = e.province;
                                app.util.request({
                                    url: "entry/wxapp/zhuce",
                                    method: "POST",
                                    data: {
                                        open_id: t,
                                        nickName: s,
                                        avatarUrl: n,
                                        gender: i,
                                        city: u,
                                        country: d,
                                        province: o
                                    },
                                    success: function(a) {
                                        var t = a.data.data, e = a.data.message;
                                        app.globalData.user_id = a.data.data, c.setData({
                                            user_id: t,
                                            state: e
                                        }), app.util.request({
                                            url: "entry/wxapp/home",
                                            method: "POST",
                                            data: {
                                                user_id: c.data.user_id
                                            },
                                            success: function(a) {
                                                var t = a.data.data.periods, e = a.data.data.setup, s = a.data.data.stact, n = a.data.data.time, i = a.data.data.shenhe, o = a.data.data.shouqi, u = a.data.data.jianchi, d = a.data.data.setup.uniacid, r = a.data.data.setup.startime;
                                                c.setData({
                                                    periods: t,
                                                    setup: e,
                                                    time: n,
                                                    jianchi: u,
                                                    shouqi: o,
                                                    shenhe: i,
                                                    kaishi: d,
                                                    jieshu: r,
                                                    stact: s
                                                });
                                            },
                                            fail: function() {}
                                        });
                                    },
                                    fail: function(a) {
                                        console.log("失败");
                                    }
                                }), app.util.request({
                                    url: "entry/wxapp/time",
                                    method: "POST"
                                });
                            }
                        });
                    }
                });
            }
        });
        var c = this;
        app.getUserInfo(function(a) {
            c.setData({
                userInfo: a
            });
        });
        var a = app.globalData.user_id;
        c.setData({
            user_id: a
        }), app.util.request({
            url: "entry/wxapp/zhanji",
            method: "POST",
            data: {
                user_id: a
            },
            success: function(a) {
                for (var t = a.data.data, e = a.data.data.mingxi, s = 0; s < e.length; s++) {
                    var n = e[s].status;
                    n = 2 == n ? "打卡成功" : 1 == n ? "正在打卡" : "打卡失败", c.setData({
                        status: n
                    });
                }
                c.setData({
                    myzhan: t,
                    mingxi: e
                });
            }
        });
    },
    index: function() {
        wx.navigateTo({
            url: "../index/index"
        });
    },
    savsd: function() {
        wx.navigateTo({
            url: "../codex/codex"
        });
    },
    onShow: function() {
        console.log("页面显示");
    },
    onHide: function() {
        console.log("页面隐藏");
    },
    tixian: function() {
        var i = this;
        app.util.request({
            url: "entry/wxapp/tixian",
            method: "POST",
            data: {
                user_id: i.data.user_id
            },
            success: function(a) {
                "SUCCESS" == a.data.data.result_code ? (setTimeout(function() {
                    wx.showToast({
                        title: "提现成功",
                        icon: "success",
                        duration: 2e3
                    });
                }, 2e3), app.util.request({
                    url: "entry/wxapp/zhanji",
                    method: "POST",
                    data: {
                        user_id: i.data.user_id
                    },
                    success: function(a) {
                        for (var t = a.data.data, e = a.data.data.mingxi, s = 0; s < e.length; s++) {
                            var n = e[s].status;
                            n = 2 == n ? "打卡成功" : 1 == n ? "正在打卡" : "打卡失败", i.setData({
                                status: n
                            });
                        }
                        i.setData({
                            myzhan: t,
                            mingxi: e
                        });
                    }
                })) : (setTimeout(function() {
                    wx.showToast({
                        title: "提现失败",
                        icon: "success",
                        duration: 2e3
                    });
                }, 2e3), app.util.request({
                    url: "entry/wxapp/zhanji",
                    method: "POST",
                    data: {
                        user_id: i.data.user_id
                    },
                    success: function(a) {
                        for (var t = a.data.data, e = a.data.data.mingxi, s = 0; s < e.length; s++) {
                            var n = e[s].status;
                            n = 2 == n ? "打卡成功" : 1 == n ? "正在打卡" : "打卡失败", i.setData({
                                status: n
                            });
                        }
                        i.setData({
                            myzhan: t,
                            mingxi: e
                        });
                    }
                }));
            },
            fail: function() {}
        });
    },
    onShareAppMessage: function(a) {
        return "button" === a.from && console.log(a.target), {
            title: "我的战绩",
            desc: "快来一起跟我打卡吧",
            path: "/hc_daka/pages/logs/logs",
            success: function(a) {},
            fail: function(a) {}
        };
    }
});