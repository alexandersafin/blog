(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tags"], {
    1280: function (t, a, n) {
        "use strict";
        var e = n("d7aa"), i = n.n(e);
        i.a
    }, "173f": function (t, a, n) {
        "use strict";
        n.r(a);
        var e = function () {
            var t = this, a = t.$createElement, n = t._self._c || a;
            return n("div", {
                staticClass: "Tags",
                class: t.className
            }, [n("div", {staticClass: "Tags-Title Title"}, [t._v(" Темы ")]), n("div", {staticClass: "Tags-Content"}, t._l(t.tags, (function (a) {
                return n("div", {
                    key: a.id,
                    staticClass: "Tag",
                    style: {
                        marginBottom: t.marginBottom * a.weight + "px",
                        marginLeft: t.marginLeft * a.weight + "px",
                        paddingRight: t.padding * a.weight + "px",
                        paddingLeft: t.padding * a.weight + "px",
                        fontSize: t.fontSize * a.weight + "rem"
                    },
                    on: {
                        click: function (n) {
                            return t.onClickTag(a.name)
                        }
                    }
                }, [t._v(" #" + t._s(a.name) + " ")])
            })), 0)])
        }, i = [], s = n("5530"), c = n("2f62"), o = {
            props: {className: String},
            data: function () {
                return {fontSize: 3, marginLeft: 50, marginBottom: 15, padding: 25}
            },
            computed: Object(s["a"])({}, Object(c["mapGetters"])(["tags"])),
            methods: Object(s["a"])({}, Object(c["mapMutations"])(["setSelectedTag"]), {}, Object(c["mapActions"])(["getTags"]), {
                onClickTag: function (t) {
                    this.$router.push("/tag/".concat(t))
                }
            }),
            mounted: function () {
                this.getTags()
            }
        }, g = o, r = (n("1280"), n("2877")), d = Object(r["a"])(g, e, i, !1, null, null, null);
        a["default"] = d.exports
    }, d7aa: function (t, a, n) {
    }
}]);
//# sourceMappingURL=tags.cc637194.js.map