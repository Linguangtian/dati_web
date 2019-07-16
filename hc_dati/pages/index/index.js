var _data, _Page, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, _NumberAnimate = require("../../../NumberAnimate.js"), _NumberAnimate2 = _interopRequireDefault(_NumberAnimate);

function _interopRequireDefault(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function _defineProperty(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var app = getApp(), WxParse = require("../../../wxParse/wxParse.js"), col1H = 0, col2H = 0;
var  canRun = !0;
Page((_defineProperty(_Page = {
    data: (_data = {
        userInfo: {},
        status: 0,
        device: null,
        indexof: 1,
        homeurl: "",
        config: null,
        top_one: !0,
        shipai: !0,
        daka: !0,
        dakatwo: !0,
        yi: 1,
        times: !0,
        imgUrls: [ "智力榜", "群内智力榜" ],
        currentNavtab: 0,
        moretab: 0,
        kepart: [ "kepart", "", "", "", "" ],
        zhankai: !0
    }, _defineProperty(_data, "kepart", 0), _defineProperty(_data, "gui", !0), _defineProperty(_data, "daka_two", !0), 
    _defineProperty(_data, "zhuangtai", 1), _defineProperty(_data, "stacrrt", 0), _defineProperty(_data, "detailss", 0), 
    _defineProperty(_data, "keparta", 0), _defineProperty(_data, "jia", 0), _defineProperty(_data, "tiao", 5), 
    _defineProperty(_data, "tiaotwo", 5), _defineProperty(_data, "ycsavu", !1), _defineProperty(_data, "ycsavua", !1), 
    _defineProperty(_data, "chao", !0), _defineProperty(_data, "audi", !0), _defineProperty(_data, "boss", 0), 
    _defineProperty(_data, "stake", 2), _defineProperty(_data, "actionSheetHidden", !0), 
    _defineProperty(_data, "actionSheetItems", []), _defineProperty(_data, "title", ""), 
    _defineProperty(_data, "desc", ""), _defineProperty(_data, "voice", 0), _defineProperty(_data, "leftAnimationData", {}), 
    _defineProperty(_data, "rightAnimationData", {}), _defineProperty(_data, "leftTime", 0), 
    _defineProperty(_data, "rightTime", 0), _defineProperty(_data, "src", ""), _defineProperty(_data, "paoma", 0), 
    _defineProperty(_data, "guitwo", !0), _defineProperty(_data, "vertical", !0), _defineProperty(_data, "autoplay", !0), 
    _defineProperty(_data, "interval", 2e3), _defineProperty(_data, "circular", !0), 
    _defineProperty(_data, "indicatordots", !1), _defineProperty(_data, "showModalStatus", !1), 
    _defineProperty(_data, "fangda", {}), _defineProperty(_data, "tanch", !1), _defineProperty(_data, "system", ""), 
    _defineProperty(_data, "flow", null), _defineProperty(_data, "lj_stact", 0), _data),
    qirhuav: function(a) {
        var t = a.currentTarget.dataset.index;
        this.setData({
            boss: t
        });
    },
    onLoad: function(a) {
        var ea = this, t = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: t
        });
        var e = a.user_id;
        console.log(e + "邀请"), ea.setData({
            getuser_id: e
        }), wx.showShareMenu({
            withShareTicket: !0
        }), wx.getSystemInfo({
            success: function(a) {
                var t = a.windowHeight, e = a.system.substring(0, 3);
                console.log(e), ea.setData({
                    animationShowHeight: t,
                    system: e
                });
            }
        });
        var i = new Date();
        parseInt(i.getHours());
        app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: ea.data.user_id
            },
            success: function(a) {
                var t, e = a.data.data.jieping, i = a.data.data.status, n = a.data.data.toubu, o = (a.data.data.guize, 
                a.data.data.zfan), d = a.data.data.guize1, s = a.data.data.guize2, u = a.data.data.guize3, r = a.data.data.guize4, c = a.data.data.canyucishu, g = a.data.data.daoh;
                app.globalData.zhuanfa_title = a.data.data.zhuanfa_title;
                var l = a.data.data.zhuanfa_title, p = a.data.data.xcx_name;
                app.globalData.xcx_name = a.data.data.xcx_name;
                var h = a.data.data.stake, f = a.data.data.fenlei, _ = a.data.data.fenlei_status, m = a.data.data.fenleiname, y = (a.data.data.zhuanfa_img, 
                a.data.data.huodejihuistr);
                app.globalData.zhuanfa_img = a.data.data.zhuanfa_img;
                var v = a.data.data.huodejihuititle, x = a.data.data.huodejihuitext, w = a.data.data.gonggao, D = a.data.data.shenhe, P = a.data.data.shenhe_status, b = a.data.data.guanggao1_img, S = a.data.data.guanggao1_appid, T = a.data.data.guanggao1_page, z = a.data.data.guanggao1_shenhe, j = a.data.data.guanggao2_img, q = a.data.data.guanggao2_appid, k = a.data.data.guanggao2_page, I = a.data.data.guanggao2_shenhe, O = a.data.data.guanggao3_img, M = a.data.data.guanggao3_appid, A = a.data.data.guanggao3_page, N = a.data.data.guanggao3_shenhe, H = a.data.data.pay_status, B = a.data.data.shouyename, C = a.data.data.shouye_img, F = a.data.data.paihangbangname, U = a.data.data.paihangbang_img, V = a.data.data.wodename, W = a.data.data.wode_img, Y = (x = a.data.data.huodejihuitext, 
                a.data.data.fenlei_img), R = a.data.data.bg_color, E = (a.data.data.lahei_status, 
                a.data.data.dibu_color), L = a.data.data.yanse_bg, G = a.data.data.lianxi, J = a.data.data.pxend_time, K = a.data.data.pxnum_img, Q = a.data.data.pxdaojishi_img, X = a.data.data.pxguize_img, Z = a.data.data.xsjiangpin_status;
                app.globalData.xsjiangpin_status = a.data.data.xsjiangpin_status;
                var $ = a.data.data.liuliangzhu;
                console.log("liuliangzhu", void 0 === $ ? "undefined" : _typeof($));
                var aa = a.data.data.pxbpx_bkg, ta = a.data.data.zhuanfaqun;
                a.data.data.toubu_color;
                app.globalData.toubu_color = a.data.data.toubu_color, ea.setData((_defineProperty(t = {
                    guanggao1_img: b,
                    guanggao1_appid: S,
                    guanggao1_page: T,
                    guanggao1_shenhe: z,
                    guanggao2_img: j,
                    guanggao2_appid: q,
                    guanggao2_page: k,
                    guanggao2_shenhe: I,
                    guanggao3_img: O,
                    guanggao3_appid: M,
                    guanggao3_page: A,
                    guanggao3_shenhe: N,
                    status: i,
                    jiaoyu_shenhe: D,
                    toubu: n,
                    zfan: o,
                    daoh: g,
                    canyucishu: c,
                    zhuanfa_title: l,
                    stake: h,
                    fenlei: f,
                    fenlei_status: _,
                    fenleiname: m,
                    guize1: d,
                    guize2: s,
                    guize3: u,
                    guize4: r,
                    jieping_one: e,
                    huodejihuistr: y,
                    huodejihuititle: v,
                    huodejihuitext: x,
                    gonggao: w,
                    shenhe_status: P,
                    pay_status: H,
                    shouyename: B,
                    shouye_img: C,
                    paihangbangname: F,
                    paihangbang_img: U,
                    wodename: V,
                    wode_img: W
                }, "huodejihuitext", x), _defineProperty(t, "fenlei_img", Y), _defineProperty(t, "bg_color", R), 
                _defineProperty(t, "dibu_color", E), _defineProperty(t, "yanse_bg", L), _defineProperty(t, "lianxi", G), 
                _defineProperty(t, "djs_time", J), _defineProperty(t, "pxnum_img", K), _defineProperty(t, "pxguize_img", X), 
                _defineProperty(t, "pxdaojishi_img", Q), _defineProperty(t, "xsjiangpin_status", Z), 
                _defineProperty(t, "liuliangzhu", $), _defineProperty(t, "pxbpx_bkg", aa), _defineProperty(t, "zhuanfaqun", ta), 
                t)), wx.setNavigationBarColor({
                    frontColor: "#ffffff",
                    backgroundColor: app.globalData.toubu_color
                }), console.log(ea.data.user_id), wx.setNavigationBarTitle({
                    title: p,
                    backgroundColor: R
                });
            },
            fail: function() {}
        }), ea.paihangbang(), ea.goumai(), ea.jiangpin(), ea.overdue();
    },
    quaca: function() {
        this.data.lj_stact;
        this.setData({
            lj_stact: 0
        });
    },
    redpacket: function() {
        app.util.request({
            url: "entry/wxapp/pxfahongbao",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                lj_stact: app.globalData.lj_stact
            },
            success: function(a) {
                var t = a.data.data.money, e = a.data.data.hongbao_guanggao, i = a.data.data.time;
                wx.navigateTo({
                    url: "../redto/redto?dhasi=" + t + "&time=" + i + "&hongbao_guanggao=" + e
                });
            }
        });
    },
    submitInfo: function(a) {
        console.log("获取id");
        var t = a.detail.formId;
        console.log(t), console.log("获取formid结束"), this.setData({
            formid: t
        }), app.util.request({
            url: "entry/wxapp/formid",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                formid: this.data.formid
            },
            success: function(a) {}
        });
    },
    xiangqig: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../education/education?id=" + t
        });
    },
    gao: function() {
        var a = this, t = a.data.tiao, e = a.data.yili.length;
        a.data.ycsavu;
        e <= (t += 5) && a.setData({
            ycsavu: !0
        }), a.setData({
            tiao: t
        });
    },
    tanchua_guan: function() {

        var a = this.data.tanch;
        this.setData({
            tanch: !a
        });
    },
    gaotwo: function() {
        var a = this, t = a.data.tiaotwo, e = a.data.zhililist;
        a.data.ycsavua;
        e <= (t += 5) && a.setData({
            ycsavua: !0
        }), a.setData({
            tiaotwo: t
        });
    },
    goods: function(a) {
        var n = this, o = a.currentTarget.dataset.id;
        app.util.request({
            url: "entry/wxapp/pxjiangpinxq",
            method: "POST",
            data: {
                id: o
            },
            success: function(a) {
                console.log("接口成功");
                var t = a.data.data, e = a.data.data.content;
                WxParse.wxParse("article", "html", e, n, 5);
                var i = a.data.data.jiangpin_status;
                console.log(i), n.setData({
                    goods: t,
                    jiangpin_status: i
                }), 1 == i ? app.util.request({
                    url: "entry/wxapp/pxlingjiang",
                    method: "POST",
                    data: {
                        user_id: app.globalData.user_id,
                        id: o
                    },
                    success: function(a) {
                        var t = a.data.data.lj_stact;
                        app.globalData.lj_stact = a.data.data.lj_stact, n.setData({
                            lj_stact: t
                        }), 0 == t && wx.showModal({
                            title: "提示",
                            content: "您不能领取该奖品",
                            success: function(a) {
                                a.confirm && console.log("用户点击确定");
                            }
                        });
                    }
                }) : wx.navigateTo({
                    url: "../goods/goods?id=" + o
                });
            },
            fail: function(a) {
                console.log("失败");
            }
        });
    },
    overdue: function() {
        var t = this;
        1 != t.data.stake && wx.checkSession({
            success: function(a) {
                console.log("未过期", a), t.register(function(a) {});
            },
            fail: function(a) {
                console.log("已过期"), wx.navigateTo({
                    url: "../register/register"
                });
            }
        });
    },
    register: function(r) {
        var c = this;
        wx.getStorage({
            key: "user",
            success: function(a) {
                var t = a.data.detail.userInfo;
                app.globalData.userInfo = a.data.detail.userInfo;
                var e = a.data.detail.openid, i = (t = a.data.detail.userInfo).country, n = t.province, o = t.city, d = t.gender, s = t.nickName, u = t.avatarUrl;
                c.setData({
                    userInfo: t
                }), "" != e ? app.util.request({
                    url: "entry/wxapp/zhuce",
                    method: "post",
                    dataType: "json",
                    data: {
                        open_id: e,
                        nickName: s,
                        gender: d,
                        country: i,
                        province: n,
                        city: o,
                        avatarUrl: u
                    },
                    success: function(a) {
                        app.globalData.user_id = a.data.data;
                        var t = a.data.data;
                        c.setData({
                            user_id: t
                        }), console.log(c.data.user_id), c.home(), "function" == typeof r && r(a.data.data);
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                }) : wx.navigateTo({
                    url: "../register/register"
                });
            },
            fail: function(a) {
                wx.navigateTo({
                    url: "../register/register"
                });
            }
        });
    },
    withdraw: function() {
        wx.navigateTo({
            url: "../withdraw/withdraw"
        });
    },
    fangda: function() {
        var a = wx.createAnimation({
            duration: 2e3,
            timingFunction: "ease"
        });
        (this.animation = a).opacity(1).scale(2).step(), setTimeout(function() {
            this.setData({
                fangda: a.export()
            });
        }.bind(this), 500);
    },
    guize: function() {
        var a = this.data.gui;
        this.data.chao;
        this.setData({
            gui: !a,
            chao: !1
        });
    },







    guizetwoac: function() {
        var o = this, a = o.data.guitwo;
        o.data.chao;
        o.setData({
            guitwo: !a,
            chao: !1
        }), app.util.request({
            url: "entry/wxapp/pxguize",
            method: "POST",
            success: function(a) {
                var t = a.data.data.pxguize1, e = a.data.data.pxguize2, i = a.data.data.pxguize3, n = a.data.data.pxguize4;
                o.setData({
                    pxguize1: t,
                    pxguize2: e,
                    pxguize3: i,
                    pxguize4: n
                });
            }
        });
    },
    kefu: function(a) {
        var e = this;
        app.util.request({
            url: "entry/wxapp/kefu",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    fsbtu: t,
                    fenxiaa: !0
                });
            },
            fail: function(a) {}
        });
    },
    guanzhu: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/guanzhu",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {},
            fail: function(a) {}
        }), app.util.request({
            url: "entry/wxapp/kefu",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    fsbtu: t,
                    fenxiaa: !0
                });
            },
            fail: function(a) {}
        });
    },
    gbtwo: function() {
        var a = this.data.dakatwo;
        this.data.chao;
        this.setData({
            dakatwo: !a,
            chao: !0
        });
    },
    canyu: function() {
        var s = this;
        app.util.request({
            url: "entry/wxapp/tiaozhan",
            method: "POST",
            data: {
                user_id: s.data.user_id
            },
            success: function(a) {
                var t = a.data.data, e = t.mp3_url, i = t.cid, n = (t.setup_number, t.status, t.toubu, 
                t.shuzi), o = t.shibai_mp3, d = t.zhuanfaqun;
                s.setData({
                    mp3url: e,
                    cid: i,
                    shibai_mp3: o,
                    zhuanfaqun: d
                }), wx.navigateTo({
                    url: "../dati/dati?cid=" + s.data.cid + "&shuzi=" + n + "&zhuanfaqun=" + d
                });
            },
            fail: function(a) {
                wx.showModal({
                    title: "提示",
                    content: "您没有答题机会了",
                    success: function(a) {
                        a.confirm;
                    }
                });
            }
        });
    },
    tianzhu: function() {
            if(canRun) {
                this.canyu();
                canRun = !1, setTimeout(function() {
                    canRun = !0;
                }, 1000)
            }
        },
    switchChange: function(a) {
        var t = a.target.id, e = this.data.configs, i = e[t];
        i || (i = new Object(), e[t] = i), i.state = a.detail.value, this.setData({
            configs: e
        }), wx.setStorageSync("configs", e);
    },
    sliderChange: function(a) {
        var t = a.target.id, e = this.data.configs, i = e[t];
        i || (i = new Object(), e[t] = i), i.time = a.detail.value, this.setData({
            configs: e
        }), wx.setStorageSync("configs", e);
    },
    radioChange: function(a) {
        var t = a.target.id, e = this.data.configs, i = e[t];
        i || (i = new Object(), e[t] = i), i.voice = a.detail.value, this.setData({
            configs: e
        }), wx.setStorageSync("configs", e);
    },
    paihangbang: function() {
        var u = this;
        app.util.request({
            url: "entry/wxapp/zhili",
            method: "POST",
            data: {
                user_id: u.data.user_id
            },
            success: function(a) {
                var t = a.data.data, e = a.data.data.setup.jiazhi, i = t.yili, n = t.zhili, o = t.huojiang, d = a.data.data.tankuang, s = a.data.data.setup.tongcheng;
                if (app.globalData.jiangpina = a.data.data.setup.tongcheng, 0 == d) {
                    u.data.tanch;
                    u.setData({
                        tanch: !1
                    });
                } else {
                    u.data.tanch;
                    u.setData({
                        tanch: !0
                    });
                }
                u.setData({
                    brains: t,
                    yili: i,
                    jiazhi: e,
                    zhililist: n,
                    huojiang: o,
                    jiangpina: s
                });
            },
            fail: function(a) {}
        });
    },
    qunpaihang: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/qunnei",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    qunpai: t
                });
            },
            fail: function() {}
        });
    },
    jiangpin: function() {
        var i = this;
        app.util.request({
            url: "entry/wxapp/jiangpin",
            method: "POST",
            data: {
                user_id: i.data.user_id
            },
            success: function(a) {
                var t = a.data.data.jiangpin, e = a.data.data.tishi;
                i.setData({
                    jiangpin: t,
                    tishi: e
                });
            },
            fail: function() {}
        });
    },
    wining: function() {
        wx.navigateTo({
            url: "../wining/wining"
        });
    },




    gb_dui: function() {
        var a = this.data.gui;
        this.data.chao;
        this.setData({
            gui: !a,
            chao: !0
        });
    },
    gb_duitwo: function() {
        var a = this.data.guitwo;
        this.data.chao;
        this.setData({
            guitwo: !a,
            chao: !0
        });
    },
    qiehuf: function(a) {
        var e = this, t = a.currentTarget.dataset.index, i = Number(a.currentTarget.dataset.index) + 1;
        e.setData({
            moretab: t,
            stacrrt: i
        }), app.util.request({
            url: "entry/wxapp/jiangpin",
            method: "POST",
            data: {
                stact: i
            },
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    award: t
                });
            },
            fail: function(a) {}
        });
    },
    tiaozhan: function() {
        var e = this, a = e.data.daka;
        e.data.chao;
        e.setData({
            daka: !a,
            chao: !1
        }), app.util.request({
            url: "entry/wxapp/goumai",
            method: "POST",
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    goumai: t
                });
            },
            fail: function() {}
        });
    },
    goumai: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/goumai",
            method: "POST",
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    goumai: t
                });
            },
            fail: function() {}
        });
    },
    hdgd: function() {
        var e = this, a = e.data.daka;
        e.data.audi;
        wx.stopBackgroundAudio();
        var t = e.data.chao;
        e.setData({
            chao: !t
        }), app.util.request({
            url: "entry/wxapp/goumai",
            method: "POST",
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    goumai: t
                });
            },
            fail: function() {}
        }), this.setData({
            audi: !0,
            daka: !a
        });
    },
    gyudaiia: function(a) {
        var t = a.currentTarget.dataset.zhuangtai;
        wx.navigateTo({
            url: "../codex/codex?zhuangtai=" + t
        });
    },
    deploy: function() {
        var a = this.data.zhankai;
        this.setData({
            zhankai: !a
        });
    },
    xiangqif: function(a) {
        var t = a.currentTarget.dataset.name, e = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../rich/rich?jiangpin_id=" + e + "&stacrrt=" + this.data.stacrrt + "&name" + t
        });
    },
    tiao: function() {
        wx.navigateToMiniProgram({
            appId: this.data.guanggao_appid,
            path: this.data.guanggao_lujing,
            extraData: {
                user_id: this.data.user_id
            },
            envVersion: "release",
            success: function(a) {
                console.log("成功");
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    tiaoe: function(a) {
        var t = a.currentTarget.dataset.id, e = a.currentTarget.dataset.page;
        wx.navigateToMiniProgram({
            appId: t,
            path: e,
            extraData: {
                user_id: this.data.user_id
            },
            envVersion: "release",
            success: function(a) {
                console.log("成功");
            },
            fail: function(a) {}
        });
    },
    asd: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateToMiniProgram({
            appId: t,
            path: this.data.guanggao_lujing,
            extraData: {
                user_id: this.data.user_id
            },
            envVersion: "release",
            success: function(a) {
                console.log("成功");
            },
            fail: function(a) {
                console.log(a);
            }
        });
    },
    yaoqing: function() {
        var a = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        (this.animation = a).translateY(this.data.animationShowHeight).step(), this.setData({
            animationData: a.export(),
            showModalStatus: !0
        }), setTimeout(function() {
            a.translateY(0).step(), this.setData({
                animationData: a.export()
            });
        }.bind(this), 200);
    },
    quxiaocd: function() {
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "linear",
            delay: 0
        });
        (this.animation = a).translateY(this.data.animationShowHeight).step(), this.setData({
            animationData: a.export()
        }), setTimeout(function() {
            a.translateY(0).step(), this.setData({
                animationData: a.export(),
                showModalStatus: !1
            });
        }.bind(this), 200);
    },
    fenxaiocsdad: function() {
        this.setData({
            showModalStatus: !1
        });
    },
    chuxaifa: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/zhuanfa",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data.img;
                e.setData({
                    ofFriendsimg: t
                });
            }
        }), this.setData({
            fenxia: !0
        });
    },
    ofFriends: function() {
        var e = this;
        app.util.request({
            url: "entry/wxapp/zhuanfa",
            method: "POST",
            data: {
                user_id: e.data.user_id
            },
            success: function(a) {
                var t = a.data.data.img;
                e.setData({
                    ofFriendsimg: t
                });
            }
        }), this.setData({
            fenxia: !0,
            showModalStatus: !1
        });
    },
    baocun: function() {
        wx.downloadFile({
            url: this.data.ofFriendsimg,
            success: function(a) {
                console.log(a);
                var t = a.tempFilePath;
                wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                }), wx.saveImageToPhotosAlbum({
                    filePath: t
                });
            }
        });
    },
    baocuntwo: function() {
        wx.downloadFile({
            url: this.data.fsbtu,
            success: function(a) {
                console.log(a);
                var t = a.tempFilePath;
                wx.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                }), wx.saveImageToPhotosAlbum({
                    filePath: t
                });
            }
        });
    },
    duabnb: function() {
        this.setData({
            fenxia: !1,
            showModalStatus: !1
        });
    },
    duabnbtrwi: function() {
        this.setData({
            fenxiaa: !1
        });
    },
    ufjbg: function() {
        wx.navigateTo({
            url: "../success/success"
        });
    },
    run2: function() {
        var a = this, t = setInterval(function() {
            -a.data.marqueeDistance2 < a.data.length ? a.setData({
                marqueeDistance2: a.data.marqueeDistance2 - a.data.marqueePace,
                marquee2copy_status: a.data.length + a.data.marqueeDistance2 <= a.data.windowWidth + a.data.marquee2_margin
            }) : (-a.data.marqueeDistance2 >= a.data.marquee2_margin ? (a.setData({
                marqueeDistance2: a.data.marquee2_margin
            }), clearInterval(t)) : (clearInterval(t), a.setData({
                marqueeDistance2: -a.data.windowWidth
            })), a.run2());
        }, a.data.intervala);
    },
    onShow: function() {
        console.log("显示");
        var a = app.globalData.award;
        console.log(a);
        app.globalData.indexof;
        this.setData({
            awards: a
        });
        var t = wx.getStorageSync("configs", t), e = [], i = !0;
        for (var n in t) {
            var o = t[n];
            if (o.state) {
                if (i) {
                    var d = o.desc.replace(/@/g, o.time + "秒");
                    this.setData({
                        dad: o.name,
                        desc: d,
                        leftTime: o.time,
                        rightTime: o.time,
                        voice: o.voice
                    }), i = !1;
                }
                e.push({
                    name: o.name,
                    id: o.id
                });
            }
        }
        this.setData({
            actionSheetItems: e
        }), console.log(app.globalData.shouye), console.log("页面显示");
        var s = this;
        wx.getSystemInfo({
            success: function(a) {
                a.windowHeight;
            }
        });
        s.data.gui;
        s.setData({
            gui: !0
        });
        var u = app.globalData.shouye;
        console.log("show显示 shouye"), console.log(u);
        var r = s.data.audi;
        1 == u && (s.fangda(), s.setData({
            audi: !r
        }), s.playAudio(s.data.shibai_mp3), setTimeout(function() {}.bind(), 500));
    },
    playAudio: function(e) {
       /* wx.getSystemInfo({
            success: function(a) {
                if (0 <= a.system.indexOf("iOS")) wx.playBackgroundAudio({
                    title: "播放",
                    dataUrl: e,
                    complete: function() {
                        wx.onBackgroundAudioStop(function(a) {});
                    }
                }); else {
                    var t = wx.getBackgroundAudioManager();
                    t.src = e, t.onStop(function(a) {}), t.onEnded(function(a) {});
                }
            }
        });*/
    },
    fenxiangaa: function() {
        app.globalData.shouye = null, wx.stopBackgroundAudio();
    },
    fenxiangaaa: function() {
        app.globalData.shouye = null, wx.stopBackgroundAudio(), app.util.request({
            url: "entry/wxapp/kefu",
            method: "POST",
            data: {
                user_id: this.data.user_id
            },
            success: function(a) {
                console.log(a.data);
            },
            fail: function(a) {
                console.log("失败");
            }
        });
    },
    onHide: function() {
        app.globalData.shouye = null, console.log(app.globalData.shouye), console.log("页面隐藏");
    },
    home: function() {
        var P = this, a = P.data.gohomeid;
        null == a && (a = ""), P.setData({
            gohomeid: a
        }), app.globalData.gohomeid = P.data.gohomeid, app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: P.data.user_id,
                id: P.data.gohomeid
            },
            success: function(a) {
                a.data.data.zhuanfa_img;
                app.globalData.zhuanfa_img = a.data.data.zhuanfa_img;
                var t = a.data.data.status, e = a.data.data.toubu, i = (a.data.data.guize, a.data.data.zfan), n = a.data.data.canyucishu, o = a.data.data.daoh, d = a.data.data.zhuanfa_title, s = a.data.data.stake, u = a.data.data.jieping, r = a.data.data.lahei_status, c = a.data.data.guanggao1_img, g = a.data.data.guanggao1_appid, l = a.data.data.guanggao1_page, p = a.data.data.guanggao1_shenhe, h = a.data.data.guanggao2_img, f = a.data.data.guanggao2_appid, _ = a.data.data.guanggao2_page, m = a.data.data.guanggao2_shenhe, y = a.data.data.guanggao3_img, v = a.data.data.guanggao3_appid, x = a.data.data.guanggao3_page, w = a.data.data.guanggao3_shenhe, D = a.data.data.bg_color;
                P.setData({
                    status: t,
                    toubu: e,
                    zfan: i,
                    daoh: o,
                    canyucishu: n,
                    zhuanfa_title: d,
                    stake: s,
                    guanggao1_img: c,
                    guanggao1_appid: g,
                    guanggao1_page: l,
                    guanggao1_shenhe: p,
                    guanggao2_img: h,
                    guanggao2_appid: f,
                    guanggao2_page: _,
                    guanggao2_shenhe: m,
                    guanggao3_img: y,
                    guanggao3_appid: v,
                    guanggao3_page: x,
                    guanggao3_shenhe: w,
                    bg_color: D
                }), 1 == u && "1" == r && wx.navigateBack({
                    delta: 0
                });
            },
            fail: function() {}
        });
    },
    pay: function(a) {
        app.globalData.shouye = null;
        var t = a.currentTarget.dataset.id, e = this, i = (e.data.chao, e.data.pay_status);
        e.data.daka;
        e.setData({
            shipai: !0,
            daka: !0,
            dakatwo: !0,
            goods_id: t,
            chao: !0
        }), 0 == i && app.util.request({
            url: "entry/wxapp/pay",
            method: "POST",
            dataType: "json",
            data: {
                user_id: e.data.user_id,
                goods_id: e.data.goods_id
            },
            success: function(a) {
                console.log(a);
                a.data;
                wx.requestPayment({
                    timeStamp: a.data.data.timeStamp + "",
                    nonceStr: a.data.data.nonceStr,
                    package: a.data.data.package,
                    signType: "MD5",
                    paySign: a.data.data.sign + "",
                    success: function(a) {
                        e.data.state;
                        console.log("成功"), e.home();
                    },
                    fail: function(a) {
                        console.log(a);
                        e.data.user_id;
                        null == e.data.user_id && wx.showModal({
                            title: "提示",
                            content: "请退出小程序重新获取授权信息",
                            success: function(a) {
                                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                            }
                        });
                    },
                    complete: function(a) {
                        console.log(a);
                    }
                });
            },
            fail: function(a) {
                var t = a.data.data.return_msg;
                wx.showModal({
                    title: "提示",
                    content: t,
                    success: function(a) {
                        a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                    }
                });
            }
        }), 1 == i && app.util.request({
            url: "entry/wxapp/pay1",
            method: "POST",
            dataType: "json",
            data: {
                user_id: e.data.user_id,
                goods_id: e.data.goods_id
            },
            success: function(a) {
                console.log(a);
                a.data;
                wx.requestPayment({
                    timeStamp: a.data.data.timeStamp + "",
                    nonceStr: a.data.data.nonceStr,
                    package: a.data.data.package,
                    signType: "MD5",
                    paySign: a.data.data.paySign + "",
                    success: function(a) {
                        e.data.state;
                        console.log("成功"), e.home();
                    },
                    fail: function(a) {
                        console.log(a);
                        e.data.user_id;
                        null == e.data.user_id && wx.showModal({
                            title: "提示",
                            content: "请退出小程序重新获取授权信息",
                            success: function(a) {
                                a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                            }
                        });
                    },
                    complete: function(a) {
                        console.log(a);
                    }
                });
            },
            fail: function(a) {
                var t = a.data.data.return_msg;
                wx.showModal({
                    title: "提示",
                    content: t,
                    success: function(a) {
                        a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                    }
                });
            }
        }), 2 == i && app.util.request({
            url: "entry/wxapp/buy",
            method: "POST",
            dataType: "json",
            data: {
                user_id: e.data.user_id,
                goods_id: e.data.goods_id
            },
            success: function(a) {},
            fail: function(a) {}
        });
    },
    tongzhi: function() {
        this.data.daka, this.data.shipai;
        this.setData({
            daka: !0,
            shipai: !0
        });
    },
    gb: function() {
        var n = this, a = n.data.daka;
        n.data.chao;
        n.setData({
            daka: !a,
            chao: !0
        }), app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: n.data.user_id
            },
            success: function(a) {
                var t = a.data.data.periods, e = a.data.data.setup, i = a.data.data.time;
                n.setData({
                    periods: t,
                    setup: e,
                    time: i
                });
            }
        });
    },
    shi: function() {
        var i = this, a = i.data.shipai;
        i.setData({
            shipai: !a
        }), app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: i.data.user_id
            },
            success: function(a) {
                var t = a.data.data.periods, e = a.data.data.setup;
                i.setData({
                    periods: t,
                    setup: e
                });
            }
        });
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    Challenge: function(a) {
        app.globalData.shouye = null;
        var r = this, t = a.currentTarget.dataset.id;
        r.setData({
            jiangpin_id: t
        }), app.util.request({
            url: "entry/wxapp/lingjiang",
            method: "POST",
            data: {
                user_id: r.data.user_id
            },
            success: function(a) {
                var t = a.data.data.lj_stact;
                r.setData({
                    lj_stact: t
                }), 0 == t ? wx.showModal({
                    title: "提示",
                    content: "您不能领取该奖品",
                    success: function(a) {
                        a.confirm && console.log("用户点击确定");
                    }
                }) : wx.chooseAddress({
                    success: function(a) {
                        var t = a.userName, e = a.postalCode, i = a.provinceName, n = a.cityName, o = a.countyName, d = a.detailInfo, s = a.telNumber, u = a.nationalCode;
                        app.util.request({
                            url: "entry/wxapp/fajiang",
                            method: "POST",
                            data: {
                                jiangpin_id: r.data.jiangpin_id,
                                user_id: r.data.user_id,
                                stact: r.data.stacrrt,
                                userName: t,
                                postalCode: e,
                                provinceName: i,
                                cityName: n,
                                countyName: o,
                                detailInfo: d,
                                telNumber: s,
                                nationalCode: u
                            },
                            success: function(a) {
                                1 == a.data.data && (wx.showModal({
                                    title: "提示",
                                    content: "领取成功",
                                    success: function(a) {
                                        a.confirm ? console.log("用户点击确定") : a.cancel && console.log("用户点击取消");
                                    }
                                }), r.jiangpin());
                            }
                        });
                    }
                });
            }
        });
    },
    lingqu: function() {
        wx.navigateTo({
            url: "../adventure/adventure"
        });
    },
    qie: function(a) {
        var t = this;
        if (t.data.currentNavtab === a.target.dataset.index) return !1;
        t.setData({
            currentNavtab: a.target.dataset.index
        });
        var e = a.currentTarget.dataset.index;
        t.setData({
            currentNavtab: a.currentTarget.dataset.index
        }), 0 == e && t.paihangbang(), 1 == e && t.qunpaihang(), 2 == e && t.jiangpin();
    },
    tab_slide: function(a) {
        this.setData({
            currentNavtab: a.detail.current
        });
    },
    tzcgqlj: function() {
        this.setData({
            indexof: 2
        });
    },
    buganxin: function() {
        var a = this.data.daka_two;
        this.setData({
            daka_two: !a
        });
    },
    savsdtwo: function(a) {
        var n = this, t = a.currentTarget.dataset.indexof;
        n.data.audi;
        n.setData({
            indexof: t
        }), app.util.request({
            url: "entry/wxapp/fenlei",
            method: "POST",
            success: function(a) {
                var t = a.data.data.fenlei, e = a.data.data.fenlei_bgimg, i = a.data.data.guanzhu_str;
                n.setData({
                    fenlei_pic: t,
                    fenlei_beijing: e,
                    guanzhu_str: i
                });
            }
        });
    },
    savsd: function(a) {
        var t = a.currentTarget.dataset.indexof, i = this;
        i.data.audi;
        i.setData({
            indexof: t,
            audi: !0
        }), i.qunpaihang(), i.paihangbang(), i.timetime();
        var e = i.data.stacrrt;
        i.setData({
            zhuangtai: e
        }), app.util.request({
            url: "entry/wxapp/pxjiangpin",
            method: "POST",
            success: function(a) {
                var t = a.data.data.jiangpin, e = a.data.data.canyucishu;
                i.setData({
                    jiangpintom: t,
                    canyucishu: e
                }), i.num(e);
            }
        });
    },
    num: function(a) {
        var t = this;
        this.setData({
            num1: ""
        });
        var e = a, i = new _NumberAnimate2.default({
            from: e,
            speed: 2e3,
            refreshTime: 100,
            decimals: 0,
            onUpdate: function() {
                t.setData({
                    num1: i.tempValue
                });
            }
        });
    },
    gohome: function(a) {
        var t = a.currentTarget.dataset.id;
        this.setData({
            indexof: 1,
            gohomeid: t
        }), this.home();
    },
    succession: function(a) {
        var s = this, t = a.currentTarget.dataset.zhuangtai;
        s.setData({
            stact_two: t,
            zhuangtai: t
        }), app.util.request({
            url: "entry/wxapp/chixuHome",
            method: "POST",
            data: {
                zhuangtai: t,
                user_id: s.data.user_id
            },
            success: function(a) {
                var t = a.data.data.chixu.day, e = a.data.data.chixu.endtime, i = a.data.data.chixu.starttime, n = a.data.data.chixu.djs_time, o = a.data.data.chixu.an_status, d = a.data.data.chixu.daka_str;
                s.setData({
                    series_chixuday: t,
                    series_endtime: e,
                    series_starttime: i,
                    djs_time: n,
                    an_status: o,
                    daka_str: d
                });
            },
            fail: function() {}
        });
    },
    index: function(a) {
        var t = a.currentTarget.dataset.indexof;
        app.globalData.shouye = null, app.globalData.gohomeid = "";
        var c = this;
        c.setData({
            gohomeid: ""
        });
        c.data.audi;
        app.util.request({
            url: "entry/wxapp/home",
            method: "POST",
            data: {
                user_id: c.data.user_id,
                id: ""
            },
            success: function(a) {
                a.data.data.zhuanfa_img;
                app.globalData.zhuanfa_img = a.data.data.zhuanfa_img;
                var t = a.data.data.status, e = a.data.data.toubu, i = a.data.data.guize, n = a.data.data.zfan;
                WxParse.wxParse("article", "html", i, c, 5);
                var o = a.data.data.canyucishu, d = a.data.data.daoh, s = a.data.data.zhuanfa_title, u = a.data.data.stake, r = a.data.data.bg_color;
                c.setData({
                    status: t,
                    toubu: e,
                    zfan: n,
                    daoh: d,
                    canyucishu: o,
                    zhuanfa_title: s,
                    stake: u,
                    bg_color: r
                });
            },
            fail: function() {}
        }), wx.stopBackgroundAudio(), c.setData({
            indexof: t,
            audi: !0
        });
    },
    guafen: function(a) {
        var t = a.currentTarget.dataset.indexof;
        app.globalData.shouye = null;
        this.data.audi;
        wx.stopBackgroundAudio(), this.setD, this.setData({
            indexof: t,
            audi: !0
        }), this.wode();
    },
    zailai: function() {
        this.data.audi;
        app.globalData.shouye = null, wx.stopBackgroundAudio(), this.setData({
            audi: !0
        });
    },
    wode: function() {
        var u = this;
        app.util.request({
            url: "entry/wxapp/wode",
            method: "POST",
            data: {
                user_id: u.data.user_id
            },
            success: function(a) {
                var t = a.data.data.guanggao, e = a.data.data.jihui, i = a.data.data.wawa, n = a.data.data.yitiaozhan, o = a.data.data.yqm, d = a.data.data.lianxiwomen_pic, s = a.data.data.wodejiangpin_pic;
                u.setData({
                    guanggao: t,
                    jihui: e,
                    wawa: i,
                    yitiaozhan: n,
                    yqm: o,
                    lianxiwomen_pic: d,
                    wodejiangpin_pic: s
                });
            },
            fail: function() {}
        });
    },
    tousu: function() {
        wx.navigateTo({
            url: "../complaint/complaint"
        });
    },
    jiayi: function() {
        var a = this.data.yi;
        a++, this.setData({
            yi: a
        });
    },
    onShareAppMessage: function() {
        return console.log(111), {
            title: "打卡小程序",
            desc: "欢迎大家使用",
            path: "/hc_daka/pages/include/include"
        };
    },
    timetime: function() {
        var u = this.data.djs_time - Date.parse(new Date()) / 1e3, r = setInterval(function() {
            var a = u, t = Math.floor(a / 3600 / 24), e = t.toString();
            1 == e.length && (e = "0" + e);
            var i = Math.floor((a - 3600 * t * 24) / 3600), n = i.toString();
            1 == n.length && (n = "0" + n);
            var o = Math.floor((a - 3600 * t * 24 - 3600 * i) / 60), d = o.toString();
            1 == d.length && (d = "0" + d);
            var s = (a - 3600 * t * 24 - 3600 * i - 60 * o).toString();
            1 == s.length && (s = "0" + s), this.setData({
                countDownDay: e,
                countDownHour: n,
                countDownMinute: d,
                countDownSecond: s
            }), --u < 0 && (clearInterval(r), this.setData({
                countDownDay: "00",
                countDownHour: "00",
                countDownMinute: "00",
                countDownSecond: "00"
            }));
        }.bind(this), 1e3);
    }
}, "onHide", function() {
    wx.onBackgroundAudioStop(), app.globalData.shouy = "";
    this.data.lj_stact;
    this.setData({
        lj_stact: 0
    }), this.animation.opacity(0).scale(0).step(), this.setData({
        fangda: this.animation.export()
    });
}), _defineProperty(_Page, "onUnload", function() {
    wx.onBackgroundAudioStop();
}), _defineProperty(_Page, "onShareAppMessage", function(a) {
    var n = this;
    return "button" === a.from ? console.log(a.target) : console.log("不是按钮"), {
        title: n.data.zhuanfa_title,
        desc: "欢迎大家使用",
        path: "/hc_dati/pages/index/index",
        imageUrl: app.globalData.zhuanfa_img,
        success: function(a) {
            var i = a.shareTickets;
            if (null == i && wx.showModal({
                title: "信息提示",
                content: n.data.zhuanfaqun,
                success: function(a) {
                    a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                }
            }), 0 == i.length) return !1;
            wx.login({
                success: function(a) {
                    var t = a.code;
                    n.setData({
                        code: t
                    }), wx.getShareInfo({
                        shareTicket: i[0],
                        success: function(a) {
                            i[0];
                            var t = a.encryptedData, e = a.iv;
                            n.data.daka, n.data.dakatwo;
                            app.util.request({
                                url: "entry/wxapp/zhanfa",
                                method: "POST",
                                data: {
                                    encryptedData: t,
                                    iv: e,
                                    code: n.data.code
                                },
                                success: function(a) {
                                    n.data.chao;
                                    var t = a.data.data;
                                    if (n.setData({
                                        chao: !0
                                    }), 1 == t) {
                                        var e = a;
                                        console.log(e), n.home(), n.wode(), n.setData({
                                            daka: !0,
                                            dakatwo: !0
                                        }), wx.showModal({
                                            title: "提示",
                                            content: "分享成功，您免费获得一次挑战机会。",
                                            success: function(a) {
                                                a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                                            }
                                        });
                                    } else wx.showModal({
                                        title: "信息提示",
                                        content: "请转发不同的群，转发次数有限请谅解",
                                        success: function(a) {
                                            a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                                        }
                                    });
                                },
                                fail: function() {
                                    wx.showModal({
                                        title: "信息提示",
                                        content: "请转发到群,不要转发到个人",
                                        success: function(a) {
                                            a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        },
        fail: function(a) {}
    };
}), _defineProperty(_Page, "actionSheetTap", function(a) {
    this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
    });
}), _defineProperty(_Page, "actionSheetChange", function(a) {
    this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
    });
}), _defineProperty(_Page, "bindItemTap", function(a) {
    this.leftStop(), this.rightStop();
    var t = a.target.id, e = wx.getStorageSync("configs")[t], i = e.desc.replace(/@/g, e.time + "秒");
    this.setData({
        title: e.name,
        desc: i,
        actionSheetHidden: !0,
        leftTime: e.time,
        rightTime: e.time,
        voice: e.voice
    });
}), _defineProperty(_Page, "leftStop", function() {
    clearInterval(this.leftInterval), this.leftInterval = 0, this.audioPause();
}), _defineProperty(_Page, "leftStart", function() {
    if (this.rightStop(), this.leftInterval && 0 != this.leftInterval) this.leftStop(); else {
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        a.rotate(this.leftMove += 100).step(), this.setData({
            leftAnimationData: a.export()
        });
        var t = this, e = setInterval(function() {
            t.data.leftTime <= 0 ? t.leftStop() : (t.data.leftTime <= t.data.voice && t.audioPlay(), 
            a.rotate(t.leftMove += 100).step(), t.setData({
                leftAnimationData: a.export()
            }), t.setData({
                leftTime: t.data.leftTime - 1
            }));
        }, 1e3);
        this.leftInterval = e;
    }
}), _defineProperty(_Page, "rightStop", function() {
    clearInterval(this.rightInterval), this.rightInterval = 0, this.audioPause();
}), _defineProperty(_Page, "rightStart", function() {
    if (this.leftStop(), this.rightInterval && 0 != this.rightInterval) this.rightStop(); else {
        var a = wx.createAnimation({
            duration: 1e3,
            timingFunction: "ease"
        });
        a.rotate(this.rightMove += 100).step(), console.log("aaa"), this.setData({
            rightAnimationData: a.export()
        });
        var t = this, e = setInterval(function() {
            t.data.rightTime <= 0 ? t.rightStop() : (a.rotate(t.rightMove += 100).step(), t.setData({
                rightAnimationData: a.export()
            }), t.setData({
                rightTime: t.data.rightTime - 1
            }));
        }, 1e3);
        this.rightInterval = e;
    }
}), _defineProperty(_Page, "audioPlay", function() {
    this.audioCtx.play();
}), _defineProperty(_Page, "audioPause", function() {
    this.audioCtx.pause();
}), _Page));