var app = getApp(), canRun = !0;

Page({
    data: {},
    getUserInfo: function(t) {
        var o = this;
        canRun && (canRun = !1, setTimeout(function() {
            console.log("函数节流"), canRun = !0;
        }, 5e3), wx.showLoading({
            title: "登录中"
        }), wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] ? o.login(t) : wx.showModal({
                    title: "提示",
                    content: "获取用户信息失败,需要授权才能继续使用！",
                    showCancel: !1,
                    confirmText: "授权",
                    success: function(a) {
                        a.confirm && wx.openSetting({
                            success: function(a) {
                                a.authSetting["scope.userInfo"] ? wx.showToast({
                                    title: "授权成功"
                                }) : wx.showToast({
                                    title: "未授权..."
                                });
                            }
                        });
                    }
                });
            }
        }));
    },
    onShow: function() {
        this.bgl();
    },
    register: function(u) {
        var t = this;
        wx.getStorage({
            key: "user",
            success: function(a) {
                var t = a.data.detail, o = a.data.detail.openid, n = (t = t.userInfo).country, e = t.province, i = t.city, c = t.gender, s = t.nickName, r = t.avatarUrl;
                app.util.request({
                    url: "entry/wxapp/zhuce",
                    method: "post",
                    dataType: "json",
                    data: {
                        open_id: o,
                        nickName: s,
                        gender: c,
                        country: n,
                        province: e,
                        city: i,
                        avatarUrl: r
                    },
                    success: function(a) {
                        app.globalData.user_id = a.data.data, "function" == typeof u && u(a.data.data), 
                        wx.reLaunch({
                            url: "../index/index"
                        });
                    }
                });
            },
            fail: function(a) {
                t.setData({});
            }
        });
    },
    xiangqig: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../education/education?id=" + t
        });
    },
    bgl: function() {
        var o = this;
        app.util.request({
            url: "entry/wxapp/bgl",
            method: "post",
            dataType: "json",
            success: function(a) {
                var t = a.data.data;
                o.setData({
                    denglu_bgk: t
                });
            }
        });
    },
    login: function(o) {
        var n = this;
        app.globalData.userInfo ? "function" == typeof cb && cb(app.globalData.userInfo) : wx.login({
            success: function(a) {
                var t = o.detail;
                app.globalData.userInfo = t.userInfo, t.act = "autologin", t.code = a.code, app.util.request({
                    url: "entry/wxapp/getopenid",
                    method: "post",
                    dataType: "json",
                    data: t,
                    success: function(a) {
                        0 == a.data.errno && (t.openid = a.data.data, app.globalData.userInfo = t, wx.setStorageSync("user", o), 
                        "function" == typeof cb && cb(app.globalData.userInfo), n.register(function(a) {
                            wx.reLaunch({
                                url: "../index/index"
                            });
                        }));
                    }
                });
            },
            fail: function(a) {
                console.log("获取失败");
            }
        });
    },
    Headcolor: function() {
        var c = this;
        app.util.request({
            url: "entry/wxapp/Headcolor",
            method: "POST",
            success: function(a) {
                var t = a.data.data.config.search_color, o = a.data.data.config.share_icon;
                a.data.data.config.head_color;
                app.globalData.Headcolor = a.data.data.config.head_color;
                var n = a.data.data.config.title, e = a.data.data.yesno, i = a.data.data.config.loginbg;
                c.setData({
                    search_color: t,
                    share_icon: o,
                    yesno: e,
                    loginbg: i
                }), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: app.globalData.Headcolor
                }), wx.setNavigationBarTitle({
                    title: n
                });
            },
            fail: function(a) {
                console.log("失败" + a);
            }
        });
    }
});