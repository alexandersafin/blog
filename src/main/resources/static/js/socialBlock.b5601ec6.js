(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["socialBlock"], {
    4205: function (e, t, i) {
        "use strict";
        i.r(t);
        var s = function () {
            var e = this, t = e.$createElement, s = e._self._c || t;
            return s("div", {
                staticClass: "SocialBlock",
                class: e.className
            }, [s("div", {
                staticClass: "SocialBlock-Item SocialBlock-Like", on: {
                    click: function (t) {
                        return e.$emit("like")
                    }
                }
            }, [s("svg", {staticClass: "SocialBlock-Icon Icon Icon--like"}, [s("use", {attrs: {"xlink:href": i("5754") + "#like"}})]), s("div", {staticClass: "SocialBlock-Text"}, [e._v(" " + e._s(e.likeCount) + " ")])]), s("div", {
                staticClass: "SocialBlock-Item SocialBlock-Like",
                on: {
                    click: function (t) {
                        return e.$emit("dislike")
                    }
                }
            }, [s("svg", {staticClass: "SocialBlock-Icon Icon Icon--dislike"}, [s("use", {attrs: {"xlink:href": i("5754") + "#like"}})]), s("div", {staticClass: "SocialBlock-Text"}, [e._v(" " + e._s(e.dislikeCount) + " ")])]), e.isPreview ? s("div", {
                staticClass: "SocialBlock-Item",
                attrs: {title: "Количество комментариев"}
            }, [s("svg", {staticClass: "SocialBlock-Icon Icon Icon--comments"}, [s("use", {attrs: {"xlink:href": i("5754") + "#comments"}})]), s("div", {staticClass: "SocialBlock-Text"}, [e._v(" " + e._s(e.commentCount) + " ")])]) : e._e(), s("div", {
                staticClass: "SocialBlock-Item",
                attrs: {title: "Количество просмотров"}
            }, [s("svg", {staticClass: "SocialBlock-Icon Icon Icon--views"}, [s("use", {attrs: {"xlink:href": i("5754") + "#views"}})]), s("div", {staticClass: "SocialBlock-Text"}, [e._v(" " + e._s(e.viewCount) + " ")])])])
        }, c = [], l = (i("a9e3"), {
            props: {
                isPreview: {type: Boolean, required: !1},
                className: {type: String, required: !1},
                likeCount: {type: Number, required: !0, default: 0},
                dislikeCount: {type: Number, required: !0, default: 0},
                commentCount: {type: Number, required: !0, default: 0},
                viewCount: {type: Number, required: !0, default: 0}
            }
        }), o = l, a = (i("72ef"), i("2877")), n = Object(a["a"])(o, s, c, !1, null, null, null);
        t["default"] = n.exports
    }, "72ef": function (e, t, i) {
        "use strict";
        var s = i("e13e"), c = i.n(s);
        c.a
    }, e13e: function (e, t, i) {
    }
}]);
//# sourceMappingURL=socialBlock.b5601ec6.js.map