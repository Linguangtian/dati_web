var WxParse = require("../../../wxParse/wxParse.js"), app = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var t = a.jiangpin_id, n = this, e = a.stacrrt, o = a.name, i = app.globalData.user_id;
        n.setData({
            jiangpin_id: t,
            stacrrt: e,
            user_id: i,
            name: o
        }), wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: app.globalData.toubu_color
        }), app.util.request({
            url: "entry/wxapp/jiangpinxq",
            method: "POST",
            data: {
                id: t
            },
            success: function(a) {
                var t = a.data.data.content;
                WxParse.wxParse("article", "html", t, n, 5);
            },
            fail: function(a) {
                console.log("失败");
            }
        });
    },
    xiangqif: function() {
        var u = this;
        app.util.request({
            url: "entry/wxapp/lingjiang",
            method: "POST",
            data: {
                user_id: u.data.user_id,
                stact: u.data.stacrrt
            },
            success: function(a) {
                var t = a.data.data.lj_stact;
                u.setData({
                    lj_stact: t
                }), 0 == t ? wx.showModal({
                    title: "提示",
                    content: "您不能领取该奖品",
                    success: function(a) {
                        a.confirm && console.log("用户点击确定");
                    }
                }) : wx.chooseAddress({
                    success: function(a) {
                        var t = a.userName, n = a.postalCode, e = a.provinceName, o = a.cityName, i = a.countyName, s = a.detailInfo, r = a.telNumber, c = a.nationalCode;
                        app.util.request({
                            url: "entry/wxapp/fajiang",
                            method: "POST",
                            data: {
                                jiangpin_id: u.data.jiangpin_id,
                                user_id: u.data.user_id,
                                stact: u.data.stacrrt,
                                userName: t,
                                postalCode: n,
                                provinceName: e,
                                cityName: o,
                                countyName: i,
                                detailInfo: s,
                                telNumber: r,
                                nationalCode: c
                            },
                            success: function(a) {
                                1 == a.data.data && wx.showToast({
                                    title: "领取成功",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});