var _Page;

function _defineProperty(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var app = getApp();

Page((_defineProperty(_Page = {
    data: {},
    onLoad: function(e) {
        var a = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: a
        }), wx.showShareMenu({
            withShareTicket: !0
        });
        app.globalData.user_id;
        var t = app.globalData.zhuanfa_title, n = this;
        n.setData({
            zhuanfa_title: t
        }), app.util.request({
            url: "entry/wxapp/goumai",
            method: "POST",
            success: function(e) {
                var a = e.data.data;
                n.setData({
                    goumai: a
                });
            },
            fail: function() {}
        });
    },
    pay: function(e) {
        var a = e.currentTarget.dataset.id, t = this;
        t.data.daka;
        t.setData({
            goods_id: a
        }), app.util.request({
            url: "entry/wxapp/pay",
            method: "POST",
            dataType: "json",
            data: {
                user_id: t.data.user_id,
                goods_id: t.data.goods_id
            },
            success: function(e) {
                e.data;
                wx.requestPayment({
                    timeStamp: e.data.data.timeStamp + "",
                    nonceStr: e.data.data.nonceStr,
                    package: e.data.data.package,
                    signType: "MD5",
                    paySign: e.data.data.sign,
                    success: function(e) {
                        t.data.state;
                        t.home();
                    },
                    fail: function() {
                        t.data.user_id;
                        null == t.data.user_id && wx.showModal({
                            title: "提示",
                            content: "请退出小程序重新获取授权信息",
                            success: function(e) {
                                e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
                            }
                        });
                    }
                }), countdown(t);
            },
            fail: function(e) {
                var a = e.data.data.return_msg;
                wx.showModal({
                    title: "提示",
                    content: a,
                    success: function(e) {
                        e.confirm ? console.log("用户点击确定") : e.cancel && console.log("用户点击取消");
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        wx.navigateBack({
            delta: 2
        });
    },
    onPullDownRefresh: function() {},
    onShareAppMessage: function() {
        return console.log(111), {
            title: "打卡小程序",
            desc: "欢迎大家使用",
            path: "/hc_daka/pages/include/include"
        };
    }
}, "onReady", function() {}), _defineProperty(_Page, "onHide", function() {}), _defineProperty(_Page, "onUnload", function() {}), 
_defineProperty(_Page, "onShareAppMessage", function() {
    return {
        title: that.data.zhuanfa_title,
        path: "/hc_zhili/pages/index/index",
        success: function(e) {
            var a = e.shareTickets;
            if (0 == a.length) return !1;
            a[0], wx.getShareInfo({
                success: function(e) {
                    var a = e.encryptedData, t = e.iv;
                    app.util.request({
                        url: "entry/wxapp/zhanfa",
                        method: "POST",
                        data: {
                            shareTicket: shareTicket,
                            encryptedData: a,
                            iv: t
                        },
                        success: function(e) {
                            var a = e;
                            console.log(a), that.home(), that.setData({
                                series_chixuday: series_chixuday
                            });
                        },
                        fail: function() {}
                    });
                }
            });
        },
        fail: function(e) {
            var a = e.message;
            wx.showModal({
                title: a,
                content: "模态弹窗",
                success: function(e) {
                    e.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                }
            });
        }
    };
}), _defineProperty(_Page, "onShareAppMessage", function() {
    return console.log(111), {
        title: "打卡小程序",
        desc: "欢迎大家使用",
        path: "/hc_daka/pages/include/include"
    };
}), _defineProperty(_Page, "onReady", function() {}), _defineProperty(_Page, "onHide", function() {}), 
_defineProperty(_Page, "onUnload", function() {
    wx.navigateBack({
        delta: 2
    });
}), _defineProperty(_Page, "onShareAppMessage", function() {
    return {
        title: that.data.zhuanfa_title,
        path: "/hc_zhili/pages/index/index",
        success: function(e) {
            var a = e.shareTickets;
            if (0 == a.length) return !1;
            a[0], wx.getShareInfo({
                success: function(e) {
                    var a = e.encryptedData, t = e.iv;
                    app.util.request({
                        url: "entry/wxapp/zhanfa",
                        method: "POST",
                        data: {
                            shareTicket: shareTicket,
                            encryptedData: a,
                            iv: t
                        },
                        success: function(e) {
                            var a = e;
                            console.log(a), that.home(), that.setData({
                                series_chixuday: series_chixuday
                            });
                        },
                        fail: function() {}
                    });
                }
            });
        },
        fail: function(e) {
            var a = e.message;
            wx.showModal({
                title: a,
                content: "模态弹窗",
                success: function(e) {
                    e.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                }
            });
        }
    };
}), _defineProperty(_Page, "onShareAppMessage", function(e) {
    var o = this;
    return "button" === e.from && console.log(e.target), {
        title: o.data.zhuanfa_title,
        desc: "欢迎大家使用",
        path: "/hc_zhili/pages/index/index",
        success: function(e) {
            var n = e.shareTickets;
            if (0 == n.length) return !1;
            wx.login({
                success: function(e) {
                    var a = e.code;
                    o.setData({
                        code: a
                    }), wx.getShareInfo({
                        shareTicket: n[0],
                        success: function(e) {
                            n[0];
                            var a = e.encryptedData, t = e.iv;
                            app.util.request({
                                url: "entry/wxapp/zhanfa",
                                method: "POST",
                                data: {
                                    encryptedData: a,
                                    iv: t,
                                    code: o.data.code
                                },
                                success: function(e) {
                                    var a = e;
                                    console.log(a), o.home(), o.setData({});
                                },
                                fail: function() {}
                            });
                        }
                    });
                }
            });
        },
        fail: function(e) {}
    };
}), _Page));