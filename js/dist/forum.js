(() => {
  var e = {
      n: (o) => {
        var r = o && o.__esModule ? () => o.default : () => o;
        return e.d(r, { a: r }), r;
      },
      d: (o, r) => {
        for (var t in r) e.o(r, t) && !e.o(o, t) && Object.defineProperty(o, t, { enumerable: !0, get: r[t] });
      },
      o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
      r: (e) => {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    o = {};
  (() => {
    'use strict';
    e.r(o);
    const r = flarum.core.compat['common/app'];
    e.n(r)().initializers.add('blomstra/save-sorting-preferences', function () {});
    const t = flarum.core.compat['common/components/Dropdown'];
    var n = e.n(t);
    const a = flarum.core.compat['forum/app'];
    var c = e.n(a);
    const s = flarum.core.compat['forum/components/IndexPage'];
    var u = e.n(s);
    const i = flarum.core.compat['common/extend'],
      l = flarum.core.compat['common/utils/ItemList'];
    var d = e.n(l);
    const p = flarum.core.compat['common/components/Button'];
    var f = e.n(p);
    c().initializers.add('blomstra/save-sorting-preferences', function () {
      var e = c().search.params().sort;
      c().data.session.userId &&
        (e ||
          m.request({ method: 'GET', url: '/api/sorting-preference' }).then(function (o) {
            (e = o.data.attributes.sort), m.redraw();
          }),
        (0, i.override)(u().prototype, 'viewItems', function (o) {
          var r = new (d())(),
            t = c().discussions.sortMap(),
            a = Object.keys(t).reduce(function (e, o) {
              return (e[o] = c().translator.trans('core.forum.index_sort.' + o + '_button')), e;
            }, {});
          return (
            r.add(
              'sort',
              m(
                n(),
                {
                  buttonClassName: 'Button',
                  label:
                    a[e] ||
                    Object.keys(t).map(function (e) {
                      return a[e];
                    })[0],
                  accessibleToggleLabel: c().translator.trans('core.forum.index_sort.toggle_dropdown_accessible_label'),
                },
                Object.keys(a).map(function (o) {
                  var r = a[o],
                    n = (e || Object.keys(t)[0]) === o;
                  return m(
                    f(),
                    {
                      icon: !n || 'fas fa-check',
                      onclick: function () {
                        c().search.changeSort.bind(c().search, o)(), (e = o);
                      },
                      active: n,
                    },
                    r
                  );
                })
              )
            ),
            r
          );
        }));
    });
  })(),
    (module.exports = o);
})();
//# sourceMappingURL=forum.js.map
