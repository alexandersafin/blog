(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moderationBlock"], {
    2007: function (t, e, a) {
        "use strict";
        var i = a("c201"), o = a.n(i);
        o.a
    }, "32d2": function (t, e, a) {
        "use strict";
        a.r(e);
        var i = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "ModerationBlock",
                class: t.className
            }, [a("div", {staticClass: "ModerationBlock-Section"}, [a("router-link", {
                staticClass: "ModerationBlock-Link",
                attrs: {to: {name: "edit", params: {id: "" + t.id}}}
            }, [t._v(" Редактировать ")])], 1), t.myPosts ? t._e() : a("div", {staticClass: "ModerationBlock-Section"}, ["declined" !== t.param ? a("div", {
                staticClass: "ModerationBlock-Link",
                on: {click: t.onDeclne}
            }, [t._v(" Отклонить ")]) : t._e(), "accepted" !== t.param ? a("div", {
                staticClass: "ModerationBlock-Link",
                on: {click: t.onAccept}
            }, [t._v(" Утвердить ")]) : t._e()])])
        }, o = [], c = (a("a9e3"), {
            props: {
                className: {type: String, required: !1},
                id: {type: Number, required: !0},
                myPosts: {type: Boolean, required: !1, default: !1}
            }, computed: {
                param: function () {
                    return this.$route.params.pathMatch
                }
            }, methods: {
                onDeclne: function () {
                    this.$emit("moderated", "decline")
                }, onAccept: function () {
                    this.$emit("moderated", "accept")
                }
            }
        }), n = c, s = (a("2007"), a("2877")), r = Object(s["a"])(n, i, o, !1, null, null, null);
        e["default"] = r.exports
    }, c201: function (t, e, a) {
    }
}]);
//# sourceMappingURL=moderationBlock.b68add48.js.map