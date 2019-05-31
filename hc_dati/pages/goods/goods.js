var WxParse = require("../../../wxParse/wxParse.js"), app = getApp();

Page({
    data: {
        cheng: !0,
        jiangpin_status: 0,
        lj_stact: 0
    },
    onLoad: function(a) {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: app.globalData.toubu_color
        });
        var t = a.id, e = this;
        e.setData({
            jiang: t
        }), app.util.request({
            url: "entry/wxapp/pxjiangpinxq",
            method: "POST",
            data: {
                id: t
            },
            success: function(a) {
                console.log("接口成功");
                var t = a.data.data, o = a.data.data.content;
                WxParse.wxParse("article", "html", o, e, 5);
                var n = a.data.data.jiangpin_status;
                console.log(n), e.setData({
                    goods: t,
                    jiangpin_status: n
                });
            },
            fail: function(a) {
                console.log("失败");
            }
        });
    },
    Challenge: function(a) {
        this.data.jiangpin_status;
        var t = this.data.jiang;
        app.util.request({
            url: "entry/wxapp/pxlingjiang",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                id: t
            },
            success: function(a) {
                var t = a.data.data.lj_stact;
                app.globalData.lj_stact = a.data.data.lj_stact, 0 == t ? wx.showModal({
                    title: "提示",
                    content: "您不能领取该奖品",
                    success: function(a) {
                        a.confirm && console.log("用户点击确定");
                    }
                }) : wx.chooseAddress({
                    success: function(a) {
                        var t = a.userName, o = a.postalCode, n = a.provinceName, e = a.cityName, i = a.countyName, s = a.detailInfo, l = a.telNumber, c = a.nationalCode, u = this;
                        app.util.request({
                            url: "entry/wxapp/pxfajiang",
                            method: "POST",
                            data: {
                                lj_stact: app.globalData.lj_stact,
                                user_id: app.globalData.user_id,
                                userName: t,
                                postalCode: o,
                                provinceName: n,
                                cityName: e,
                                countyName: i,
                                detailInfo: s,
                                telNumber: l,
                                nationalCode: c
                            },
                            success: function(a) {
                                if (1 == a.data.data) {
                                    wx.showModal({
                                        title: "提示",
                                        content: "领取成功",
                                        success: function(a) {
                                            a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                                        }
                                    });
                                    u.data.id;
                                }
                            },
                            fail: function(a) {
                                console.log(a);
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    jiangpin: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/pxjiangpinxq",
            method: "POST",
            data: {
                id: id
            },
            success: function(a) {
                console.log("接口成功");
                var t = a.data.data, o = a.data.data.content;
                WxParse.wxParse("article", "html", o, e, 5);
                var n = a.data.data.jiangpin_status;
                console.log(n), e.setData({
                    goods: t,
                    jiangpin_status: n
                });
            },
            fail: function(a) {
                console.log("失败");
            }
        });
    },
    tiao: function() {
        app.globalData.indexOf = 1, wx.navigateBack({
            delta: 0
        });
    },
    redto: function() {
        app.util.request({
            url: "entry/wxapp/pxfahongbao",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                lj_stact: app.globalData.lj_stact
            },
            success: function(a) {
                var t = a.data.data.money;
                wx.navigateTo({
                    url: "../redto/redto?dhasi=" + t
                });
            }
        });
    },
    onShow: function() {},
    qu: function() {
        wx.navigateBack({
            delta: 0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});