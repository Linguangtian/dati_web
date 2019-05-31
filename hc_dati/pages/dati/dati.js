function _defineProperty(a, t, i) {
    return t in a ? Object.defineProperty(a, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = i, a;
}

var timera, app = getApp(), canRun = !0;

Page({
    data: {
        time: 3,
        shouye: 0,
        bianhua: 0,
        tr: 5,
        shi: !0,
        cheng: !0,
        index: "",
        shuli: 0,
        shifou: 1,
        tifhu: 1,
        xaun: !1,
        jiangpina: "",
        award: ""
    },
    onLoad: function(a) {
        wx.setNavigationBarColor({
            frontColor: "#ffffff",
            backgroundColor: app.globalData.toubu_color
        });
        var t = app.globalData.xsjiangpin_status, i = this.data.jiangpina;
        i = 1 == t ? "领奖品" : "去答题", this.setData({
            jiangpina: i
        });
        var e = a.shuzi, n = a.cid, o = a.zhuanfaqun;
        wx.showShareMenu({
            withShareTicket: !0
        });
        var s = app.globalData.xcx_name;
        wx.setNavigationBarTitle({
            title: s
        });
        var u = this;
        u.setData({
            shuzitwo: e,
            cid: n,
            jiangpina: i,
            zhuanfaqun: o
        });
        u.data.wcf;
        wx.getUserInfo({
            success: function(a) {
                app.globalData.userInfo = a.userInfo, u.setData({
                    userInfo: a.userInfo,
                    hasUserInfo: !0
                });
            }
        });
        app.globalData.user_id;
        u.canyu(), u.dati(), u.startTime();
    },
    redpacket: function() {
        wx.navigateTo({
            url: "../redpacket/redpacket"
        });
    },
    pay: function() {
        var t = this;
        app.util.request({
            url: "entry/wxapp/Payjihui",
            method: "POST",
            dataType: "json",
            data: {
                user_id: app.globalData.user_id,
                cid: t.data.cid
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
                        app.util.request({
                            url: "entry/wxapp/jihuipay",
                            method: "POST",
                            dataType: "json",
                            data: {
                                cid: t.data.cid
                            },
                            success: function(a) {
                                t.data.shi, t.data.shuli;
                                t.dati(), t.timeclear(), t.startTimetwo(), t.setData({
                                    shi: !0,
                                    shuli: t.data.shuli
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    submitInfo: function(a) {
        console.log("GG 敌方军团已同意投降 4票赞成 0票反对");
        var t = a.detail.formId;
        this.setData({
            formid: t
        }), app.util.request({
            url: "entry/wxapp/formid",
            method: "POST",
            data: {
                user_id: app.globalData.user_id,
                formid: this.data.formid
            },
            success: function(a) {
                console.log("打印成功后返回参数"), console.log(t), console.log(a);
            }
        });
    },
    xiaxi: function() {
        wx.navigateBack({
            delta: 1
        }), app.globalData.shouye = 1;
    },
    dong: function() {
        this.data.n;
        var a = wx.createAnimation(_defineProperty({
            transformOrigin: "50% 50%",
            duration: 1e3,
            timingFunction: "ease",
            delay: 0
        }, "transformOrigin", "60% 20%"));
        (this.animation = a).rotate(20).step(), this.setData({
            animationData: a.export()
        }), setTimeout(function() {
            this.setData({
                animationData: a.export()
            });
        }.bind(this), 200);
    },
    guan: function() {
        var a = this.data.cheng;
        this.setData({
            cheng: !a
        });
    },
    startTime: function() {
        var a = this;
        setTimeout(function() {
            if (1 == a.data.time) {
                a.data.shouye;
                return setTimeout(function() {
                    a.startTimetwo();
                }, 300), void a.setData({
                    time: "开始",
                    shouye: 1
                });
            }
            a.setData({
                time: a.data.time - 1
            }), a.startTime();
        }, 1e3);
    },
    startTimetwo: function() {
        var t = this;
        timera = setTimeout(function() {
            if (0 == t.data.dao) {
                var a = t.data.index;
                t.data.shi;
                if ("" == a) {
                    t.data.dao;
                    t.setData({
                        shi: !1,
                        dao: 0
                    });
                }
                return t.setData({
                    shi: !1,
                    dao: 0,
                    prompt: "时间到了哦~"
                }), void console.log(111);
            }
            t.setData({
                dao: t.data.dao - 1
            }), t.startTimetwo();
        }, 1e3);
    },
    timeclear: function() {
        this.setData({
            dao: this.data.chutime
        });
    },
    jieshu: function() {
        app.util.request({
            url: "entry/wxapp/jiesu",
            method: "POST",
            data: {
                numbera: this.data.shuli,
                status: 0,
                cid: this.data.cid
            },
            success: function(a) {
                a.data.data;
                app.globalData.award = a.data.data, console.log(app.globalData.award);
            }
        });
    },
    dianii: function(a) {
        if (canRun) {
            wx.getNetworkType({
                success: function(a) {
                    "none" == a.networkType && (console.log("退出"), wx.navigateBack({
                        delta: 1
                    }));
                }
            }), 2 == (s = this).data.twy && s.zanting();
            var t = a.currentTarget.dataset.index;
            s.setData({
                index: t
            });
            var i = s.data.daan;
            if (t == i) {
                var e, n = "topic[" + i + "].classname", o = s.data.shuli + 1;
                if (o == s.data.shuzitwo) {
                    clearTimeout(timera);
                    this.data.shifou;
                    app.globalData.shouye = null;
                    var s, u = (s = this).data.tifhu;
                    s.setData({
                        tifhu: u
                    }), app.util.request({
                        url: "entry/wxapp/jiesu",
                        method: "POST",
                        data: {
                            numbera: s.data.shuzitwo,
                            status: 1,
                            cid: s.data.cid
                        },
                        success: function(a) {
                            console.log("打印jiesu接口"), console.log(a);
                            var t = a.data.data, i = s.data.cheng;
                            s.setData({
                                award: t,
                                cheng: !i
                            }), app.globalData.award = a.data.data;
                        }
                    });
                } else {
                    u = s.data.tifhu + 1;
                    s.setData({
                        tifhu: u
                    }), s.dati();
                }
                s.setData((_defineProperty(e = {}, n, "lv"), _defineProperty(e, "index", ""), _defineProperty(e, "shuli", o), 
                e)), wx.showToast({
                    title: "恭喜答对",
                    icon: "success",
                    image: "../../resource/images/20180206172516.png",
                    duration: 500,
                    mask: !1
                }), s.playAudio(s.data.dui_mp3), s.timeclear();
            } else {
                var d;
                clearTimeout(timera), s.playAudio(s.data.cuo_mp3);
                var c = "topic[" + i + "].classname", r = "topic[" + t + "].classname";
                s.setData((_defineProperty(d = {}, c, "lv"), _defineProperty(d, r, "hei"), _defineProperty(d, "prompt", "答错了哦~"), 
                d));
                var l = s.data.shi;
                setTimeout(function() {
                    s.setData({
                        shi: !l
                    });
                }, 200), app.util.request({
                    url: "entry/wxapp/jiesu",
                    method: "POST",
                    data: {
                        numbera: s.data.shuli,
                        status: 0,
                        cid: s.data.cid
                    },
                    success: function(a) {
                        console.log("打印jiesu接口"), console.log(a);
                        var t = a.data.data;
                        s.setData({
                            award: t
                        }), app.globalData.award = a.data.data;
                    }
                });
            }
            canRun = !1, setTimeout(function() {
                canRun = !0;
            }, 300);
        }
    },
    qu: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onReady: function() {},
    dati: function() {
        var l = this;
        app.util.request({
            url: "entry/wxapp/dati1",
            method: "POST",
            data: {
                tifhu: l.data.tifhu,
                id: app.globalData.gohomeid,
                cid: l.data.cid
            },
            success: function(a) {
                var t = a.data.data, i = t.daan1, e = t.xuanxiang, n = t.timu, o = t.twy;
                if (null != i && console.log("结束结束"), 1 == o) {
                    var s = t.tupian;
                    l.setData({
                        tupian: s
                    });
                }
                if (2 == o) {
                    var u = t.yinyue, d = t.time, c = t.yinyue_end_time;
                    l.setData({
                        yinyue: u,
                        musictime: d,
                        dao: c
                    });
                } else if (2 != o) {
                    var r = t.time;
                    c = t.time;
                    l.setData({
                        chutime: r,
                        dao: c
                    });
                }
                l.setData({
                    topic: e,
                    daan: i,
                    timu: n,
                    twy: o
                });
            }
        });
    },
    kai: function() {
        var a = this;
        console.log("点击开始"), a.dong();
        a.data.xaun;
        a.setData({
            xaun: !0
        }), a.playdianjiAudio(a.data.yinyue);
    },
    zanting: function() {
        var a = this;
        a.animation.rotate(0).step(), console.log(a.animation);
        a.data.xaun;
        a.setData({
            animationData: a.animation.export(),
            xaun: !1
        }), wx.stopBackgroundAudio();
    },
    playAudio: function(i) {
        wx.getSystemInfo({
            success: function(a) {
                if (0 <= a.system.indexOf("iOS")) wx.playBackgroundAudio({
                    title: "播放",
                    dataUrl: i,
                    complete: function() {
                        wx.onBackgroundAudioStop(function(a) {});
                    }
                }); else {
                    var t = wx.getBackgroundAudioManager();
                    t.src = i, t.onStop(function(a) {}), t.onEnded(function(a) {});
                }
            }
        });
    },
    playdianjiAudio: function(i) {
        var e = this;
        wx.getSystemInfo({
            success: function(a) {
                if (0 <= a.system.indexOf("iOS")) wx.playBackgroundAudio({
                    title: "播放",
                    dataUrl: i,
                    complete: function() {
                        wx.onBackgroundAudioStop(function(a) {});
                        var t = setInterval(function() {
                            wx.getBackgroundAudioPlayerState({
                                success: function(a) {
                                    parseInt(a.currentPosition) == e.data.musictime && (wx.stopBackgroundAudio(), console.log("暂停"), 
                                    clearInterval(t), e.zanting());
                                },
                                fail: function(a) {}
                            });
                        }, 500);
                    }
                }); else {
                    var t = wx.getBackgroundAudioManager();
                    t.src = i, t.onTimeUpdate(function(a) {
                        var t = setInterval(function() {
                            wx.getBackgroundAudioPlayerState({
                                success: function(a) {
                                    parseInt(a.currentPosition) == e.data.musictime && (wx.stopBackgroundAudio(), console.log("暂停"), 
                                    e.zanting(), clearInterval(t));
                                },
                                fail: function(a) {}
                            });
                        }, 1e3);
                    });
                }
            }
        });
    },
    canyu: function() {
        var r = this;
        app.util.request({
            url: "entry/wxapp/canyu",
            method: "POST",
            data: {
                user_id: app.globalData.user_id
            },
            success: function(a) {
                var t = a.data.data, i = t.kaishi_mp3, e = t.dui_mp3, n = t.cuo_mp3, o = t.fuhuo_money, s = t.fh_zhifu_status, u = t.fh_zhifu_img, d = t.fh_zhuanfa_img, c = t.fuhuo_text;
                r.setData({
                    award: t,
                    kaishi_mp3: i,
                    dui_mp3: e,
                    cuo_mp3: n,
                    fuhuo_money: o,
                    fh_zhifu_status: s,
                    fh_zhifu_img: u,
                    fh_zhuanfa_img: d,
                    fuhuo_text: c
                }), setTimeout(function() {
                    r.playAudio(i);
                }, 200);
            }
        });
    },
    guanbix: function() {
        var a = this.data.shi;
        this.setData({
            shi: !a
        });
    },
    tiao: function() {
        this.data.shifou;
        app.globalData.shouye = 1, wx.navigateBack({
            delta: 1
        }), this.jieshu();
    },
    onShow: function() {
        this.data.shouye;
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(a) {
        var n = this;
        return "button" === a.from && console.log(a.target), {
            title: app.globalData.zhuanfa_title,
            desc: "欢迎大家使用",
            path: "/hc_dati/pages/index/index",
            imageUrl: app.globalData.zhuanfa_img,
            success: function(a) {
                var e = a.shareTickets;
                if (null == e && wx.showModal({
                    title: "分享失败",
                    content: n.data.zhuanfaqun,
                    success: function(a) {
                        a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                    }
                }), 0 == e.length) return !1;
                wx.login({
                    success: function(a) {
                        var t = a.code;
                        n.setData({
                            code: t
                        }), wx.getShareInfo({
                            shareTicket: e[0],
                            success: function(a) {
                                e[0];
                                var t = a.encryptedData, i = a.iv;
                                app.util.request({
                                    url: "entry/wxapp/jihui",
                                    method: "POST",
                                    data: {
                                        encryptedData: t,
                                        iv: i,
                                        code: n.data.code,
                                        cid: n.data.cid
                                    },
                                    success: function(a) {
                                        var t = a.data.data, i = a.data.message;
                                        if (1 == t) {
                                            var e = n.data.shi;
                                            n.data.shuli;
                                            n.dati(), n.timeclear(), n.startTimetwo(), n.setData({
                                                shi: !e,
                                                shuli: n.data.shuli,
                                                msa: i
                                            });
                                        } else wx.showModal({
                                            title: "分享失败",
                                            content: "请转发不同的群，转发次数有限请谅解",
                                            success: function(a) {
                                                a.confirm ? console.log("用户点击确定") : console.log("用户点击取消");
                                            }
                                        });
                                        n.setData({
                                            jihuia: t
                                        });
                                    },
                                    fail: function(a) {
                                        console.log(a);
                                    }
                                });
                            },
                            fail: function(a) {
                                console.log(a);
                            }
                        });
                    }
                });
            },
            fail: function(a) {}
        };
    }
});