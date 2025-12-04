var Af = Object.defineProperty;
var Lf = (i, e, t) =>
  e in i
    ? Af(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var _ = (i, e, t) => (Lf(i, typeof e != "symbol" ? e + "" : e, t), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const s = {};
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = t(n);
    fetch(n.href, s);
  }
})();
function Vr(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function Jd(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    (i.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Xt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Mi = { duration: 0.5, overwrite: !1, delay: 0 },
  Sl,
  pt,
  Pe,
  nr = 1e8,
  we = 1 / nr,
  Ia = Math.PI * 2,
  If = Ia / 4,
  Rf = 0,
  eu = Math.sqrt,
  Nf = Math.cos,
  Ff = Math.sin,
  tt = function (e) {
    return typeof e == "string";
  },
  Fe = function (e) {
    return typeof e == "function";
  },
  Jr = function (e) {
    return typeof e == "number";
  },
  El = function (e) {
    return typeof e > "u";
  },
  Ar = function (e) {
    return typeof e == "object";
  },
  It = function (e) {
    return e !== !1;
  },
  Tl = function () {
    return typeof window < "u";
  },
  Ys = function (e) {
    return Fe(e) || tt(e);
  },
  tu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  mt = Array.isArray,
  Ra = /(?:-?\.?\d|\.)+/gi,
  ru = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  mi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ca = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  nu = /[+-]=-?[.\d]+/,
  iu = /[^,'"\[\]\s]+/gi,
  Hf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ae,
  _r,
  Na,
  Ol,
  Kt = {},
  Mo = {},
  su,
  ou = function (e) {
    return (Mo = Xn(e, Kt)) && gt;
  },
  Ml = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ms = function (e, t) {
    return !t && console.warn(e);
  },
  au = function (e, t) {
    return (e && (Kt[e] = t) && Mo && (Mo[e] = t)) || Kt;
  },
  gs = function () {
    return 0;
  },
  qf = { suppressEvents: !0, isStart: !0, kill: !1 },
  ho = { suppressEvents: !0, kill: !1 },
  Bf = { suppressEvents: !0 },
  xl = {},
  gn = [],
  Fa = {},
  lu,
  Gt = {},
  da = {},
  fc = 30,
  fo = [],
  Dl = "",
  Pl = function (e) {
    var t = e[0],
      r,
      n;
    if ((Ar(t) || Fe(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
      for (n = fo.length; n-- && !fo[n].targetTest(t); );
      r = fo[n];
    }
    for (n = e.length; n--; )
      (e[n] && (e[n]._gsap || (e[n]._gsap = new Cu(e[n], r)))) ||
        e.splice(n, 1);
    return e;
  },
  Bn = function (e) {
    return e._gsap || Pl(ir(e))[0]._gsap;
  },
  cu = function (e, t, r) {
    return (r = e[t]) && Fe(r)
      ? e[t]()
      : (El(r) && e.getAttribute && e.getAttribute(t)) || r;
  },
  Rt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  ze = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  et = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  $i = function (e, t) {
    var r = t.charAt(0),
      n = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n
    );
  },
  zf = function (e, t) {
    for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; );
    return n < r;
  },
  xo = function () {
    var e = gn.length,
      t = gn.slice(0),
      r,
      n;
    for (Fa = {}, gn.length = 0, r = 0; r < e; r++)
      (n = t[r]),
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
  },
  du = function (e, t, r, n) {
    gn.length && !pt && xo(),
      e.render(t, r, n || (pt && t < 0 && (e._initted || e._startAt))),
      gn.length && !pt && xo();
  },
  uu = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(iu).length < 2
      ? t
      : tt(e)
      ? e.trim()
      : e;
  },
  hu = function (e) {
    return e;
  },
  or = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Vf = function (e) {
    return function (t, r) {
      for (var n in r)
        n in t || (n === "duration" && e) || n === "ease" || (t[n] = r[n]);
    };
  },
  Xn = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  pc = function i(e, t) {
    for (var r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = Ar(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e;
  },
  Do = function (e, t) {
    var r = {},
      n;
    for (n in e) n in t || (r[n] = e[n]);
    return r;
  },
  Qi = function (e) {
    var t = e.parent || Ae,
      r = e.keyframes ? Vf(mt(e.keyframes)) : or;
    if (It(e.inherit))
      for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Gf = function (e, t) {
    for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; );
    return r < 0;
  },
  fu = function (e, t, r, n, s) {
    r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
    var o = e[n],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[r]), (e[r] = t)),
      t._next ? (t._next._prev = t) : (e[n] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  Xo = function (e, t, r, n) {
    r === void 0 && (r = "_first"), n === void 0 && (n = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[r] === t && (e[r] = o),
      o ? (o._prev = s) : e[n] === t && (e[n] = s),
      (t._next = t._prev = t.parent = null);
  },
  bn = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  zn = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  Uf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Ha = function (e, t, r, n) {
    return (
      e._startAt &&
      (pt
        ? e._startAt.revert(ho)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, n))
    );
  },
  Wf = function i(e) {
    return !e || (e._ts && i(e.parent));
  },
  mc = function (e) {
    return e._repeat ? xi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  xi = function (e, t) {
    var r = Math.floor((e /= t));
    return e && r === e ? r - 1 : r;
  },
  Po = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Ko = function (e) {
    return (e._end = et(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || we) || 0)
    ));
  },
  Zo = function (e, t) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = et(
          r._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Ko(e),
        r._dirty || zn(r, e)),
      e
    );
  },
  pu = function (e, t) {
    var r;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((r = Po(e.rawTime(), t)),
        (!t._dur || Fs(0, t.totalDuration(), r) - t._tTime > we) &&
          t.render(r, !0)),
      zn(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -we;
    }
  },
  Er = function (e, t, r, n) {
    return (
      t.parent && bn(t),
      (t._start = et(
        (Jr(r) ? r : r || e !== Ae ? er(e, r, t) : e._time) + t._delay
      )),
      (t._end = et(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      fu(e, t, "_first", "_last", e._sort ? "_start" : 0),
      qa(t) || (e._recent = t),
      n || pu(e, t),
      e._ts < 0 && Zo(e, e._tTime),
      e
    );
  },
  mu = function (e, t) {
    return (
      (Kt.ScrollTrigger || Ml("scrollTrigger", t)) &&
      Kt.ScrollTrigger.create(t, e)
    );
  },
  gu = function (e, t, r, n, s) {
    if ((Cl(e, t, s), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !pt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      lu !== Wt.frame
    )
      return gn.push(e), (e._lazy = [s, n]), 1;
  },
  jf = function i(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
  },
  qa = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Yf = function (e, t, r, n) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && jf(e) && !(!e._initted && qa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !qa(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      d,
      h;
    if (
      (a &&
        e._repeat &&
        ((l = Fs(0, e._tDur, t)),
        (d = xi(l, a)),
        e._yoyo && d & 1 && (o = 1 - o),
        d !== xi(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || pt || n || e._zTime === we || (!t && e._zTime))
    ) {
      if (!e._initted && gu(e, t, n, r, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (r ? we : 0),
          r || (r = t && !h),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      t < 0 && Ha(e, t, r, !0),
        e._onUpdate && !r && Yt(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Yt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && bn(e, 1),
          !r &&
            !pt &&
            (Yt(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Xf = function (e, t, r) {
    var n;
    if (r > t)
      for (n = e._first; n && n._start <= r; ) {
        if (n.data === "isPause" && n._start > t) return n;
        n = n._next;
      }
    else
      for (n = e._last; n && n._start >= r; ) {
        if (n.data === "isPause" && n._start < t) return n;
        n = n._prev;
      }
  },
  Di = function (e, t, r, n) {
    var s = e._repeat,
      o = et(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !n && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : et(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !n && Zo(e, (e._tTime = e._tDur * a)),
      e.parent && Ko(e),
      r || zn(e.parent, e),
      e
    );
  },
  gc = function (e) {
    return e instanceof Tt ? zn(e) : Di(e, e._dur);
  },
  Kf = { _start: 0, endTime: gs, totalDuration: gs },
  er = function i(e, t, r) {
    var n = e.labels,
      s = e._recent || Kf,
      o = e.duration() >= nr ? s.endTime(!1) : e._dur,
      a,
      l,
      c;
    return tt(t) && (isNaN(t) || t in n)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (a < 0 ? s : r).totalDuration() / 100 : 1))
          : a < 0
          ? (t in n || (n[t] = o), n[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            c && r && (l = (l / 100) * (mt(r) ? r[0] : r).totalDuration()),
            a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  Ji = function (e, t, r) {
    var n = Jr(t[1]),
      s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (a = o, l = r; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = It(l.vars.inherit) && l.parent);
      (o.immediateRender = It(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new Ue(t[0], o, t[s + 1]);
  },
  Sn = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Fs = function (e, t, r) {
    return r < e ? e : r > t ? t : r;
  },
  ft = function (e, t) {
    return !tt(e) || !(t = Hf.exec(e)) ? "" : t[1];
  },
  Zf = function (e, t, r) {
    return Sn(r, function (n) {
      return Fs(e, t, n);
    });
  },
  Ba = [].slice,
  vu = function (e, t) {
    return (
      e &&
      Ar(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Ar(e[0]))) &&
      !e.nodeType &&
      e !== _r
    );
  },
  Qf = function (e, t, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (n) {
        var s;
        return (tt(n) && !t) || vu(n, 1)
          ? (s = r).push.apply(s, ir(n))
          : r.push(n);
      }) || r
    );
  },
  ir = function (e, t, r) {
    return Pe && !t && Pe.selector
      ? Pe.selector(e)
      : tt(e) && !r && (Na || !Pi())
      ? Ba.call((t || Ol).querySelectorAll(e), 0)
      : mt(e)
      ? Qf(e, r)
      : vu(e)
      ? Ba.call(e, 0)
      : e
      ? [e]
      : [];
  },
  za = function (e) {
    return (
      (e = ir(e)[0] || ms("Invalid scope") || {}),
      function (t) {
        var r = e.current || e.nativeElement || e;
        return ir(
          t,
          r.querySelectorAll
            ? r
            : r === e
            ? ms("Invalid scope") || Ol.createElement("div")
            : e
        );
      }
    );
  },
  yu = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  $u = function (e) {
    if (Fe(e)) return e;
    var t = Ar(e) ? e : { each: e },
      r = Vn(t.ease),
      n = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = n > 0 && n < 1,
      l = isNaN(n) || a,
      c = t.axis,
      d = n,
      h = n;
    return (
      tt(n)
        ? (d = h = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && l && ((d = n[0]), (h = n[1])),
      function (u, f, p) {
        var m = (p || t).length,
          g = o[m],
          y,
          v,
          b,
          $,
          E,
          T,
          S,
          O,
          D;
        if (!g) {
          if (((D = t.grid === "auto" ? 0 : (t.grid || [1, nr])[1]), !D)) {
            for (
              S = -nr;
              S < (S = p[D++].getBoundingClientRect().left) && D < m;

            );
            D < m && D--;
          }
          for (
            g = o[m] = [],
              y = l ? Math.min(D, m) * d - 0.5 : n % D,
              v = D === nr ? 0 : l ? (m * h) / D - 0.5 : (n / D) | 0,
              S = 0,
              O = nr,
              T = 0;
            T < m;
            T++
          )
            (b = (T % D) - y),
              ($ = v - ((T / D) | 0)),
              (g[T] = E = c ? Math.abs(c === "y" ? $ : b) : eu(b * b + $ * $)),
              E > S && (S = E),
              E < O && (O = E);
          n === "random" && yu(g),
            (g.max = S - O),
            (g.min = O),
            (g.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (D > m
                    ? m - 1
                    : c
                    ? c === "y"
                      ? m / D
                      : D
                    : Math.max(D, m / D)) ||
                0) * (n === "edges" ? -1 : 1)),
            (g.b = m < 0 ? s - m : s),
            (g.u = ft(t.amount || t.each) || 0),
            (r = r && m < 0 ? Du(r) : r);
        }
        return (
          (m = (g[u] - g.min) / g.max || 0),
          et(g.b + (r ? r(m) : m) * g.v) + g.u
        );
      }
    );
  },
  Va = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var n = et(Math.round(parseFloat(r) / e) * e * t);
      return (n - (n % 1)) / t + (Jr(r) ? 0 : ft(r));
    };
  },
  bu = function (e, t) {
    var r = mt(e),
      n,
      s;
    return (
      !r &&
        Ar(e) &&
        ((n = r = e.radius || nr),
        e.values
          ? ((e = ir(e.values)), (s = !Jr(e[0])) && (n *= n))
          : (e = Va(e.increment))),
      Sn(
        t,
        r
          ? Fe(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= n ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    c = nr,
                    d = 0,
                    h = e.length,
                    u,
                    f;
                  h--;

                )
                  s
                    ? ((u = e[h].x - a), (f = e[h].y - l), (u = u * u + f * f))
                    : (u = Math.abs(e[h] - a)),
                    u < c && ((c = u), (d = h));
                return (
                  (d = !n || c <= n ? e[d] : o),
                  s || d === o || Jr(o) ? d : d + ft(o)
                );
              }
          : Va(e)
      )
    );
  },
  _u = function (e, t, r, n) {
    return Sn(mt(e) ? !t : r === !0 ? !!(r = 0) : !n, function () {
      return mt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) *
                r *
                n
            ) / n;
    });
  },
  Jf = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return function (n) {
      return t.reduce(function (s, o) {
        return o(s);
      }, n);
    };
  },
  e0 = function (e, t) {
    return function (r) {
      return e(parseFloat(r)) + (t || ft(r));
    };
  },
  t0 = function (e, t, r) {
    return Su(e, t, 0, 1, r);
  },
  wu = function (e, t, r) {
    return Sn(r, function (n) {
      return e[~~t(n)];
    });
  },
  r0 = function i(e, t, r) {
    var n = t - e;
    return mt(e)
      ? wu(e, i(0, e.length), t)
      : Sn(r, function (s) {
          return ((n + ((s - e) % n)) % n) + e;
        });
  },
  n0 = function i(e, t, r) {
    var n = t - e,
      s = n * 2;
    return mt(e)
      ? wu(e, i(0, e.length - 1), t)
      : Sn(r, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > n ? s - o : o);
        });
  },
  vs = function (e) {
    for (var t = 0, r = "", n, s, o, a; ~(n = e.indexOf("random(", t)); )
      (o = e.indexOf(")", n)),
        (a = e.charAt(n + 7) === "["),
        (s = e.substr(n + 7, o - n - 7).match(a ? iu : Ra)),
        (r +=
          e.substr(t, n - t) + _u(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return r + e.substr(t, e.length - t);
  },
  Su = function (e, t, r, n, s) {
    var o = t - e,
      a = n - r;
    return Sn(s, function (l) {
      return r + (((l - e) / o) * a || 0);
    });
  },
  i0 = function i(e, t, r, n) {
    var s = isNaN(e + t)
      ? 0
      : function (f) {
          return (1 - f) * e + f * t;
        };
    if (!s) {
      var o = tt(e),
        a = {},
        l,
        c,
        d,
        h,
        u;
      if ((r === !0 && (n = 1) && (r = null), o))
        (e = { p: e }), (t = { p: t });
      else if (mt(e) && !mt(t)) {
        for (d = [], h = e.length, u = h - 2, c = 1; c < h; c++)
          d.push(i(e[c - 1], e[c]));
        h--,
          (s = function (p) {
            p *= h;
            var m = Math.min(u, ~~p);
            return d[m](p - m);
          }),
          (r = t);
      } else n || (e = Xn(mt(e) ? [] : {}, e));
      if (!d) {
        for (l in t) kl.call(a, e, l, "get", t[l]);
        s = function (p) {
          return Il(p, a) || (o ? e.p : e);
        };
      }
    }
    return Sn(r, s);
  },
  vc = function (e, t, r) {
    var n = e.labels,
      s = nr,
      o,
      a,
      l;
    for (o in n)
      (a = n[o] - t),
        a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Yt = function (e, t, r) {
    var n = e.vars,
      s = n[t],
      o = Pe,
      a = e._ctx,
      l,
      c,
      d;
    if (s)
      return (
        (l = n[t + "Params"]),
        (c = n.callbackScope || e),
        r && gn.length && xo(),
        a && (Pe = a),
        (d = l ? s.apply(c, l) : s.call(c)),
        (Pe = o),
        d
      );
  },
  Gi = function (e) {
    return (
      bn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!pt),
      e.progress() < 1 && Yt(e, "onInterrupt"),
      e
    );
  },
  gi,
  Eu = [],
  Tu = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Tl() || e.headless)) {
        var t = e.name,
          r = Fe(e),
          n =
            t && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: gs,
            render: Il,
            add: kl,
            kill: b0,
            modifier: $0,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Ll,
            aliases: {},
            register: 0,
          };
        if ((Pi(), e !== n)) {
          if (Gt[t]) return;
          or(n, or(Do(e, s), o)),
            Xn(n.prototype, Xn(s, Do(e, o))),
            (Gt[(n.prop = t)] = n),
            e.targetTest && (fo.push(n), (xl[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        au(t, n), e.register && e.register(gt, n, Nt);
      } else Eu.push(e);
  },
  $e = 255,
  Ui = {
    aqua: [0, $e, $e],
    lime: [0, $e, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, $e],
    navy: [0, 0, 128],
    white: [$e, $e, $e],
    olive: [128, 128, 0],
    yellow: [$e, $e, 0],
    orange: [$e, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [$e, 0, 0],
    pink: [$e, 192, 203],
    cyan: [0, $e, $e],
    transparent: [$e, $e, $e, 0],
  },
  ua = function (e, t, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (r - t) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? t + (r - t) * (2 / 3 - e) * 6
        : t) *
        $e +
        0.5) |
        0
    );
  },
  Ou = function (e, t, r) {
    var n = e ? (Jr(e) ? [e >> 16, (e >> 8) & $e, e & $e] : 0) : Ui.black,
      s,
      o,
      a,
      l,
      c,
      d,
      h,
      u,
      f,
      p;
    if (!n) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ui[e]))
        n = Ui[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (n = parseInt(e.substr(1, 6), 16)),
            [n >> 16, (n >> 8) & $e, n & $e, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (n = [e >> 16, (e >> 8) & $e, e & $e]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((n = p = e.match(Ra)), !t))
          (l = (+n[0] % 360) / 360),
            (c = +n[1] / 100),
            (d = +n[2] / 100),
            (o = d <= 0.5 ? d * (c + 1) : d + c - d * c),
            (s = d * 2 - o),
            n.length > 3 && (n[3] *= 1),
            (n[0] = ua(l + 1 / 3, s, o)),
            (n[1] = ua(l, s, o)),
            (n[2] = ua(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (n = e.match(ru)), r && n.length < 4 && (n[3] = 1), n;
      } else n = e.match(Ra) || Ui.transparent;
      n = n.map(Number);
    }
    return (
      t &&
        !p &&
        ((s = n[0] / $e),
        (o = n[1] / $e),
        (a = n[2] / $e),
        (h = Math.max(s, o, a)),
        (u = Math.min(s, o, a)),
        (d = (h + u) / 2),
        h === u
          ? (l = c = 0)
          : ((f = h - u),
            (c = d > 0.5 ? f / (2 - h - u) : f / (h + u)),
            (l =
              h === s
                ? (o - a) / f + (o < a ? 6 : 0)
                : h === o
                ? (a - s) / f + 2
                : (s - o) / f + 4),
            (l *= 60)),
        (n[0] = ~~(l + 0.5)),
        (n[1] = ~~(c * 100 + 0.5)),
        (n[2] = ~~(d * 100 + 0.5))),
      r && n.length < 4 && (n[3] = 1),
      n
    );
  },
  Mu = function (e) {
    var t = [],
      r = [],
      n = -1;
    return (
      e.split(vn).forEach(function (s) {
        var o = s.match(mi) || [];
        t.push.apply(t, o), r.push((n += o.length + 1));
      }),
      (t.c = r),
      t
    );
  },
  yc = function (e, t, r) {
    var n = "",
      s = (e + n).match(vn),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      c,
      d,
      h;
    if (!s) return e;
    if (
      ((s = s.map(function (u) {
        return (
          (u = Ou(u, t, 1)) &&
          o +
            (t ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) +
            ")"
        );
      })),
      r && ((d = Mu(e)), (l = r.c), l.join(n) !== d.c.join(n)))
    )
      for (c = e.replace(vn, "1").split(mi), h = c.length - 1; a < h; a++)
        n +=
          c[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (d.length ? d : s.length ? s : r).shift());
    if (!c)
      for (c = e.split(vn), h = c.length - 1; a < h; a++) n += c[a] + s[a];
    return n + c[h];
  },
  vn = (function () {
    var i =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ui) i += "|" + e + "\\b";
    return new RegExp(i + ")", "gi");
  })(),
  s0 = /hsl[a]?\(/,
  xu = function (e) {
    var t = e.join(" "),
      r;
    if (((vn.lastIndex = 0), vn.test(t)))
      return (
        (r = s0.test(t)),
        (e[1] = yc(e[1], r)),
        (e[0] = yc(e[0], r, Mu(e[1]))),
        !0
      );
  },
  ys,
  Wt = (function () {
    var i = Date.now,
      e = 500,
      t = 33,
      r = i(),
      n = r,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      d,
      h,
      u,
      f,
      p = function m(g) {
        var y = i() - n,
          v = g === !0,
          b,
          $,
          E,
          T;
        if (
          ((y > e || y < 0) && (r += y - t),
          (n += y),
          (E = n - r),
          (b = E - o),
          (b > 0 || v) &&
            ((T = ++h.frame),
            (u = E - h.time * 1e3),
            (h.time = E = E / 1e3),
            (o += b + (b >= s ? 4 : s - b)),
            ($ = 1)),
          v || (l = c(m)),
          $)
        )
          for (f = 0; f < a.length; f++) a[f](E, u, T, g);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (g) {
          return u / (1e3 / (g || 60));
        },
        wake: function () {
          su &&
            (!Na &&
              Tl() &&
              ((_r = Na = window),
              (Ol = _r.document || {}),
              (Kt.gsap = gt),
              (_r.gsapVersions || (_r.gsapVersions = [])).push(gt.version),
              ou(Mo || _r.GreenSockGlobals || (!_r.gsap && _r) || {}),
              Eu.forEach(Tu)),
            (d = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && h.sleep(),
            (c =
              d ||
              function (g) {
                return setTimeout(g, (o - h.time * 1e3 + 1) | 0);
              }),
            (ys = 1),
            p(2));
        },
        sleep: function () {
          (d ? cancelAnimationFrame : clearTimeout)(l), (ys = 0), (c = gs);
        },
        lagSmoothing: function (g, y) {
          (e = g || 1 / 0), (t = Math.min(y || 33, e));
        },
        fps: function (g) {
          (s = 1e3 / (g || 240)), (o = h.time * 1e3 + s);
        },
        add: function (g, y, v) {
          var b = y
            ? function ($, E, T, S) {
                g($, E, T, S), h.remove(b);
              }
            : g;
          return h.remove(g), a[v ? "unshift" : "push"](b), Pi(), b;
        },
        remove: function (g, y) {
          ~(y = a.indexOf(g)) && a.splice(y, 1) && f >= y && f--;
        },
        _listeners: a,
      }),
      h
    );
  })(),
  Pi = function () {
    return !ys && Wt.wake();
  },
  ce = {},
  o0 = /^[\d.\-M][\d.\-,\s]/,
  a0 = /["']/g,
  l0 = function (e) {
    for (
      var t = {},
        r = e.substr(1, e.length - 3).split(":"),
        n = r[0],
        s = 1,
        o = r.length,
        a,
        l,
        c;
      s < o;
      s++
    )
      (l = r[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, a)),
        (t[n] = isNaN(c) ? c.replace(a0, "").trim() : +c),
        (n = l.substr(a + 1).trim());
    return t;
  },
  c0 = function (e) {
    var t = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      n = e.indexOf("(", t);
    return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r);
  },
  d0 = function (e) {
    var t = (e + "").split("("),
      r = ce[t[0]];
    return r && t.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [l0(t[1])] : c0(e).split(",").map(uu)
        )
      : ce._CE && o0.test(e)
      ? ce._CE("", e)
      : r;
  },
  Du = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Pu = function i(e, t) {
    for (var r = e._first, n; r; )
      r instanceof Tt
        ? i(r, t)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== t &&
          (r.timeline
            ? i(r.timeline, t)
            : ((n = r._ease),
              (r._ease = r._yEase),
              (r._yEase = n),
              (r._yoyo = t))),
        (r = r._next);
  },
  Vn = function (e, t) {
    return (e && (Fe(e) ? e : ce[e] || d0(e))) || t;
  },
  ni = function (e, t, r, n) {
    r === void 0 &&
      (r = function (l) {
        return 1 - t(1 - l);
      }),
      n === void 0 &&
        (n = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: r, easeInOut: n },
      o;
    return (
      Rt(e, function (a) {
        (ce[a] = Kt[a] = s), (ce[(o = a.toLowerCase())] = r);
        for (var l in s)
          ce[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = ce[a + "." + l] = s[l];
      }),
      s
    );
  },
  ku = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ha = function i(e, t, r) {
    var n = t >= 1 ? t : 1,
      s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Ia) * (Math.asin(1 / n) || 0),
      a = function (d) {
        return d === 1 ? 1 : n * Math.pow(2, -10 * d) * Ff((d - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (c) {
              return 1 - a(1 - c);
            }
          : ku(a);
    return (
      (s = Ia / s),
      (l.config = function (c, d) {
        return i(e, c, d);
      }),
      l
    );
  },
  fa = function i(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      n =
        e === "out"
          ? r
          : e === "in"
          ? function (s) {
              return 1 - r(1 - s);
            }
          : ku(r);
    return (
      (n.config = function (s) {
        return i(e, s);
      }),
      n
    );
  };
Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, e) {
  var t = e < 5 ? e + 1 : e;
  ni(
    i + ",Power" + (t - 1),
    e
      ? function (r) {
          return Math.pow(r, t);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, t);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, t) / 2
        : 1 - Math.pow((1 - r) * 2, t) / 2;
    }
  );
});
ce.Linear.easeNone = ce.none = ce.Linear.easeIn;
ni("Elastic", ha("in"), ha("out"), ha());
(function (i, e) {
  var t = 1 / e,
    r = 2 * t,
    n = 2.5 * t,
    s = function (a) {
      return a < t
        ? i * a * a
        : a < r
        ? i * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < n
        ? i * (a -= 2.25 / e) * a + 0.9375
        : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  ni(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
ni("Expo", function (i) {
  return i ? Math.pow(2, 10 * (i - 1)) : 0;
});
ni("Circ", function (i) {
  return -(eu(1 - i * i) - 1);
});
ni("Sine", function (i) {
  return i === 1 ? 1 : -Nf(i * If) + 1;
});
ni("Back", fa("in"), fa("out"), fa());
ce.SteppedEase =
  ce.steps =
  Kt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          n = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - we;
        return function (a) {
          return (((n * Fs(0, o, a)) | 0) + s) * r;
        };
      },
    };
Mi.ease = ce["quad.out"];
Rt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (i) {
    return (Dl += i + "," + i + "Params,");
  }
);
var Cu = function (e, t) {
    (this.id = Rf++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : cu),
      (this.set = t ? t.getSetter : Ll);
  },
  $s = (function () {
    function i(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Di(this, +t.duration, 1, 1),
        (this.data = t.data),
        Pe && ((this._ctx = Pe), Pe.data.push(this)),
        ys || Wt.wake();
    }
    var e = i.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Di(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, n) {
        if ((Pi(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Zo(this, r), !s._dp || s.parent || pu(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            Er(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !n) ||
            (this._initted && Math.abs(this._zTime) === we) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), du(this, r, n)),
          this
        );
      }),
      (e.time = function (r, n) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + mc(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              n
            )
          : this._time;
      }),
      (e.totalProgress = function (r, n) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, n)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (r, n) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                mc(this),
              n
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (r, n) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * s, n)
          : this._repeat
          ? xi(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (r, n) {
        if (!arguments.length) return this._rts === -we ? 0 : this._rts;
        if (this._rts === r) return this;
        var s =
          this.parent && this._ts ? Po(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -we ? 0 : this._rts),
          this.totalTime(Fs(-Math.abs(this._delay), this._tDur, s), n !== !1),
          Ko(this),
          Uf(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== we &&
                      (this._tTime -= we)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var n = this.parent || this._dp;
          return (
            n && (n._sort || !this.parent) && Er(n, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (It(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var n = this.parent || this._dp;
        return n
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Po(n.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = Bf);
        var n = pt;
        return (
          (pt = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (pt = n),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var n = this, s = arguments.length ? r : n.rawTime(); n; )
          (s = n._start + s / (Math.abs(n._ts) || 1)), (n = n._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : s;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), gc(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var n = this._time;
          return (this._rDelay = r), gc(this), n ? this.time(n) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, n) {
        return this.totalTime(er(this, r), It(n));
      }),
      (e.restart = function (r, n) {
        return this.play().totalTime(r ? -this._delay : 0, It(n));
      }),
      (e.play = function (r, n) {
        return r != null && this.seek(r, n), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, n) {
        return (
          r != null && this.seek(r || this.totalDuration(), n),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, n) {
        return r != null && this.seek(r, n), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -we : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -we), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          n = this._start,
          s;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (s = r.rawTime(!0)) >= n &&
            s < this.endTime(!0) - we)
        );
      }),
      (e.eventCallback = function (r, n, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (n
              ? ((o[r] = n),
                s && (o[r + "Params"] = s),
                r === "onUpdate" && (this._onUpdate = n))
              : delete o[r],
            this)
          : o[r];
      }),
      (e.then = function (r) {
        var n = this;
        return new Promise(function (s) {
          var o = Fe(r) ? r : hu,
            a = function () {
              var c = n.then;
              (n.then = null),
                Fe(o) && (o = o(n)) && (o.then || o === n) && (n.then = c),
                s(o),
                (n.then = c);
            };
          (n._initted && n.totalProgress() === 1 && n._ts >= 0) ||
          (!n._tTime && n._ts < 0)
            ? a()
            : (n._prom = a);
        });
      }),
      (e.kill = function () {
        Gi(this);
      }),
      i
    );
  })();
or($s.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -we,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Tt = (function (i) {
  Jd(e, i);
  function e(r, n) {
    var s;
    return (
      r === void 0 && (r = {}),
      (s = i.call(this, r) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!r.smoothChildTiming),
      (s.autoRemoveChildren = !!r.autoRemoveChildren),
      (s._sort = It(r.sortChildren)),
      Ae && Er(r.parent || Ae, Vr(s), n),
      r.reversed && s.reverse(),
      r.paused && s.paused(!0),
      r.scrollTrigger && mu(Vr(s), r.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (n, s, o) {
      return Ji(0, arguments, this), this;
    }),
    (t.from = function (n, s, o) {
      return Ji(1, arguments, this), this;
    }),
    (t.fromTo = function (n, s, o, a) {
      return Ji(2, arguments, this), this;
    }),
    (t.set = function (n, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Qi(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ue(n, s, er(this, o), 1),
        this
      );
    }),
    (t.call = function (n, s, o) {
      return Er(this, Ue.delayedCall(0, n, s), o);
    }),
    (t.staggerTo = function (n, s, o, a, l, c, d) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = d),
        (o.parent = this),
        new Ue(n, o, er(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (n, s, o, a, l, c, d) {
      return (
        (o.runBackwards = 1),
        (Qi(o).immediateRender = It(o.immediateRender)),
        this.staggerTo(n, s, o, a, l, c, d)
      );
    }),
    (t.staggerFromTo = function (n, s, o, a, l, c, d, h) {
      return (
        (a.startAt = o),
        (Qi(a).immediateRender = It(a.immediateRender)),
        this.staggerTo(n, s, a, l, c, d, h)
      );
    }),
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        d = n <= 0 ? 0 : et(n),
        h = this._zTime < 0 != n < 0 && (this._initted || !c),
        u,
        f,
        p,
        m,
        g,
        y,
        v,
        b,
        $,
        E,
        T,
        S;
      if (
        (this !== Ae && d > l && n >= 0 && (d = l), d !== this._tTime || o || h)
      ) {
        if (
          (a !== this._time &&
            c &&
            ((d += this._time - a), (n += this._time - a)),
          (u = d),
          ($ = this._start),
          (b = this._ts),
          (y = !b),
          h && (c || (a = this._zTime), (n || !s) && (this._zTime = n)),
          this._repeat)
        ) {
          if (
            ((T = this._yoyo),
            (g = c + this._rDelay),
            this._repeat < -1 && n < 0)
          )
            return this.totalTime(g * 100 + n, s, o);
          if (
            ((u = et(d % g)),
            d === l
              ? ((m = this._repeat), (u = c))
              : ((m = ~~(d / g)),
                m && m === d / g && ((u = c), m--),
                u > c && (u = c)),
            (E = xi(this._tTime, g)),
            !a &&
              this._tTime &&
              E !== m &&
              this._tTime - E * g - this._dur <= 0 &&
              (E = m),
            T && m & 1 && ((u = c - u), (S = 1)),
            m !== E && !this._lock)
          ) {
            var O = T && E & 1,
              D = O === (T && m & 1);
            if (
              (m < E && (O = !O),
              (a = O ? 0 : d % c ? c : d),
              (this._lock = 1),
              (this.render(a || (S ? 0 : et(m * g)), s, !c)._lock = 0),
              (this._tTime = d),
              !s && this.parent && Yt(this, "onRepeat"),
              this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              D &&
                ((this._lock = 2),
                (a = O ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !S && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
            Pu(this, S);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = Xf(this, et(a), et(u))), v && (d -= u - (u = v._start))),
          (this._tTime = d),
          (this._time = u),
          (this._act = !b),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = n),
            (a = 0)),
          !a && u && !s && !m && (Yt(this, "onStart"), this._tTime !== d))
        )
          return this;
        if (u >= a && n >= 0)
          for (f = this._first; f; ) {
            if (
              ((p = f._next), (f._act || u >= f._start) && f._ts && v !== f)
            ) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (u - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (u - f._start) * f._ts,
                  s,
                  o
                ),
                u !== this._time || (!this._ts && !y))
              ) {
                (v = 0), p && (d += this._zTime = -we);
                break;
              }
            }
            f = p;
          }
        else {
          f = this._last;
          for (var x = n < 0 ? n : u; f; ) {
            if (((p = f._prev), (f._act || x <= f._end) && f._ts && v !== f)) {
              if (f.parent !== this) return this.render(n, s, o);
              if (
                (f.render(
                  f._ts > 0
                    ? (x - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (x - f._start) * f._ts,
                  s,
                  o || (pt && (f._initted || f._startAt))
                ),
                u !== this._time || (!this._ts && !y))
              ) {
                (v = 0), p && (d += this._zTime = x ? -we : we);
                break;
              }
            }
            f = p;
          }
        }
        if (
          v &&
          !s &&
          (this.pause(),
          (v.render(u >= a ? 0 : -we)._zTime = u >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = $), Ko(this), this.render(n, s, o);
        this._onUpdate && !s && Yt(this, "onUpdate", !0),
          ((d === l && this._tTime >= this.totalDuration()) || (!d && a)) &&
            ($ === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((n || !c) &&
                ((d === l && this._ts > 0) || (!d && this._ts < 0)) &&
                bn(this, 1),
              !s &&
                !(n < 0 && !a) &&
                (d || a || !l) &&
                (Yt(
                  this,
                  d === l && n >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (n, s) {
      var o = this;
      if ((Jr(s) || (s = er(this, s, n)), !(n instanceof $s))) {
        if (mt(n))
          return (
            n.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (tt(n)) return this.addLabel(n, s);
        if (Fe(n)) n = Ue.delayedCall(0, n);
        else return this;
      }
      return this !== n ? Er(this, n, s) : this;
    }),
    (t.getChildren = function (n, s, o, a) {
      n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -nr);
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof Ue
            ? s && l.push(c)
            : (o && l.push(c), n && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (n) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === n) return s[o];
    }),
    (t.remove = function (n) {
      return tt(n)
        ? this.removeLabel(n)
        : Fe(n)
        ? this.killTweensOf(n)
        : (Xo(this, n),
          n === this._recent && (this._recent = this._last),
          zn(this));
    }),
    (t.totalTime = function (n, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = et(
              Wt.time -
                (this._ts > 0
                  ? n / this._ts
                  : (this.totalDuration() - n) / -this._ts)
            )),
          i.prototype.totalTime.call(this, n, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (n, s) {
      return (this.labels[n] = er(this, s)), this;
    }),
    (t.removeLabel = function (n) {
      return delete this.labels[n], this;
    }),
    (t.addPause = function (n, s, o) {
      var a = Ue.delayedCall(0, s || gs, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), Er(this, a, er(this, n))
      );
    }),
    (t.removePause = function (n) {
      var s = this._first;
      for (n = er(this, n); s; )
        s._start === n && s.data === "isPause" && bn(s), (s = s._next);
    }),
    (t.killTweensOf = function (n, s, o) {
      for (var a = this.getTweensOf(n, o), l = a.length; l--; )
        un !== a[l] && a[l].kill(n, s);
      return this;
    }),
    (t.getTweensOf = function (n, s) {
      for (var o = [], a = ir(n), l = this._first, c = Jr(s), d; l; )
        l instanceof Ue
          ? zf(l._targets, a) &&
            (c
              ? (!un || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (d = l.getTweensOf(a, s)).length && o.push.apply(o, d),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (n, s) {
      s = s || {};
      var o = this,
        a = er(o, n),
        l = s,
        c = l.startAt,
        d = l.onStart,
        h = l.onStartParams,
        u = l.immediateRender,
        f,
        p = Ue.to(
          o,
          or(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (c && "time" in c ? c.time : o._time)) / o.timeScale()
                ) ||
                we,
              onStart: function () {
                if ((o.pause(), !f)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (a - (c && "time" in c ? c.time : o._time)) /
                        o.timeScale()
                    );
                  p._dur !== g && Di(p, g, 0, 1).render(p._time, !0, !0),
                    (f = 1);
                }
                d && d.apply(p, h || []);
              },
            },
            s
          )
        );
      return u ? p.render(0) : p;
    }),
    (t.tweenFromTo = function (n, s, o) {
      return this.tweenTo(s, or({ startAt: { time: er(this, n) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (n) {
      return n === void 0 && (n = this._time), vc(this, er(this, n));
    }),
    (t.previousLabel = function (n) {
      return n === void 0 && (n = this._time), vc(this, er(this, n), 1);
    }),
    (t.currentLabel = function (n) {
      return arguments.length
        ? this.seek(n, !0)
        : this.previousLabel(this._time + we);
    }),
    (t.shiftChildren = function (n, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += n), (a._end += n)), (a = a._next);
      if (s) for (c in l) l[c] >= o && (l[c] += n);
      return zn(this);
    }),
    (t.invalidate = function (n) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(n), (s = s._next);
      return i.prototype.invalidate.call(this, n);
    }),
    (t.clear = function (n) {
      n === void 0 && (n = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        zn(this)
      );
    }),
    (t.totalDuration = function (n) {
      var s = 0,
        o = this,
        a = o._last,
        l = nr,
        c,
        d,
        h;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -n : n)
        );
      if (o._dirty) {
        for (h = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (d = a._start),
            d > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (Er(o, a, d - a._delay, 1)._lock = 0))
              : (l = d),
            d < 0 &&
              a._ts &&
              ((s -= d),
              ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                ((o._start += d / o._ts), (o._time -= d), (o._tTime -= d)),
              o.shiftChildren(-d, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c);
        Di(o, o === Ae && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (n) {
      if ((Ae._ts && (du(Ae, Po(n, Ae)), (lu = Wt.frame)), Wt.frame >= fc)) {
        fc += Xt.autoSleep || 120;
        var s = Ae._first;
        if ((!s || !s._ts) && Xt.autoSleep && Wt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Wt.sleep();
        }
      }
    }),
    e
  );
})($s);
or(Tt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var u0 = function (e, t, r, n, s, o, a) {
    var l = new Nt(this._pt, e, t, 0, 1, Fu, null, s),
      c = 0,
      d = 0,
      h,
      u,
      f,
      p,
      m,
      g,
      y,
      v;
    for (
      l.b = r,
        l.e = n,
        r += "",
        n += "",
        (y = ~n.indexOf("random(")) && (n = vs(n)),
        o && ((v = [r, n]), o(v, e, t), (r = v[0]), (n = v[1])),
        u = r.match(ca) || [];
      (h = ca.exec(n));

    )
      (p = h[0]),
        (m = n.substring(c, h.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === "rgba(" && (f = 1),
        p !== u[d++] &&
          ((g = parseFloat(u[d - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: m || d === 1 ? m : ",",
            s: g,
            c: p.charAt(1) === "=" ? $i(g, p) - g : parseFloat(p) - g,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = ca.lastIndex));
    return (
      (l.c = c < n.length ? n.substring(c, n.length) : ""),
      (l.fp = a),
      (nu.test(n) || y) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  kl = function (e, t, r, n, s, o, a, l, c, d) {
    Fe(n) && (n = n(s || 0, e, o));
    var h = e[t],
      u =
        r !== "get"
          ? r
          : Fe(h)
          ? c
            ? e[
                t.indexOf("set") || !Fe(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : h,
      f = Fe(h) ? (c ? g0 : Ru) : Al,
      p;
    if (
      (tt(n) &&
        (~n.indexOf("random(") && (n = vs(n)),
        n.charAt(1) === "=" &&
          ((p = $i(u, n) + (ft(u) || 0)), (p || p === 0) && (n = p))),
      !d || u !== n || Ga)
    )
      return !isNaN(u * n) && n !== ""
        ? ((p = new Nt(
            this._pt,
            e,
            t,
            +u || 0,
            n - (u || 0),
            typeof h == "boolean" ? y0 : Nu,
            0,
            f
          )),
          c && (p.fp = c),
          a && p.modifier(a, this, e),
          (this._pt = p))
        : (!h && !(t in e) && Ml(t, n),
          u0.call(this, e, t, u, n, f, l || Xt.stringFilter, c));
  },
  h0 = function (e, t, r, n, s) {
    if (
      (Fe(e) && (e = es(e, s, t, r, n)),
      !Ar(e) || (e.style && e.nodeType) || mt(e) || tu(e))
    )
      return tt(e) ? es(e, s, t, r, n) : e;
    var o = {},
      a;
    for (a in e) o[a] = es(e[a], s, t, r, n);
    return o;
  },
  Au = function (e, t, r, n, s, o) {
    var a, l, c, d;
    if (
      Gt[e] &&
      (a = new Gt[e]()).init(
        s,
        a.rawVars ? t[e] : h0(t[e], n, s, o, r),
        r,
        n,
        o
      ) !== !1 &&
      ((r._pt = l = new Nt(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      r !== gi)
    )
      for (c = r._ptLookup[r._targets.indexOf(s)], d = a._props.length; d--; )
        c[a._props[d]] = l;
    return a;
  },
  un,
  Ga,
  Cl = function i(e, t, r) {
    var n = e.vars,
      s = n.ease,
      o = n.startAt,
      a = n.immediateRender,
      l = n.lazy,
      c = n.onUpdate,
      d = n.runBackwards,
      h = n.yoyoEase,
      u = n.keyframes,
      f = n.autoRevert,
      p = e._dur,
      m = e._startAt,
      g = e._targets,
      y = e.parent,
      v = y && y.data === "nested" ? y.vars.targets : g,
      b = e._overwrite === "auto" && !Sl,
      $ = e.timeline,
      E,
      T,
      S,
      O,
      D,
      x,
      L,
      w,
      P,
      k,
      R,
      I,
      N;
    if (
      ($ && (!u || !s) && (s = "none"),
      (e._ease = Vn(s, Mi.ease)),
      (e._yEase = h ? Du(Vn(h === !0 ? s : h, Mi.ease)) : 0),
      h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !$ && !!n.runBackwards),
      !$ || (u && !n.stagger))
    ) {
      if (
        ((w = g[0] ? Bn(g[0]).harness : 0),
        (I = w && n[w.prop]),
        (E = Do(n, xl)),
        m &&
          (m._zTime < 0 && m.progress(1),
          t < 0 && d && a && !f ? m.render(-1, !0) : m.revert(d && p ? ho : qf),
          (m._lazy = 0)),
        o)
      ) {
        if (
          (bn(
            (e._startAt = Ue.set(
              g,
              or(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !m && It(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Yt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (pt || (!a && !f)) && e._startAt.revert(ho),
          a && p && t <= 0 && r <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (d && p && !m) {
        if (
          (t && (a = !1),
          (S = or(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !m && It(l),
              immediateRender: a,
              stagger: 0,
              parent: y,
            },
            E
          )),
          I && (S[w.prop] = I),
          bn((e._startAt = Ue.set(g, S))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (pt ? e._startAt.revert(ho) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          i(e._startAt, we, we);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (p && It(l)) || (l && !p), T = 0;
        T < g.length;
        T++
      ) {
        if (
          ((D = g[T]),
          (L = D._gsap || Pl(g)[T]._gsap),
          (e._ptLookup[T] = k = {}),
          Fa[L.id] && gn.length && xo(),
          (R = v === g ? T : v.indexOf(D)),
          w &&
            (P = new w()).init(D, I || E, e, R, v) !== !1 &&
            ((e._pt = O =
              new Nt(e._pt, D, P.name, 0, 1, P.render, P, 0, P.priority)),
            P._props.forEach(function (q) {
              k[q] = O;
            }),
            P.priority && (x = 1)),
          !w || I)
        )
          for (S in E)
            Gt[S] && (P = Au(S, E, e, R, D, v))
              ? P.priority && (x = 1)
              : (k[S] = O =
                  kl.call(e, D, S, "get", E[S], R, v, 0, n.stringFilter));
        e._op && e._op[T] && e.kill(D, e._op[T]),
          b &&
            e._pt &&
            ((un = e),
            Ae.killTweensOf(D, k, e.globalTime(t)),
            (N = !e.parent),
            (un = 0)),
          e._pt && l && (Fa[L.id] = 1);
      }
      x && Hu(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !N),
      u && t <= 0 && $.render(nr, !0, !0);
  },
  f0 = function (e, t, r, n, s, o, a, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      d,
      h,
      u,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], u = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((d = u[f][t]), d && d.d && d.d._pt))
          for (d = d.d._pt; d && d.p !== t && d.fp !== t; ) d = d._next;
        if (!d)
          return (
            (Ga = 1),
            (e.vars[t] = "+=0"),
            Cl(e, a),
            (Ga = 0),
            l ? ms(t + " not eligible for reset") : 1
          );
        c.push(d);
      }
    for (f = c.length; f--; )
      (h = c[f]),
        (d = h._pt || h),
        (d.s = (n || n === 0) && !s ? n : d.s + (n || 0) + o * d.c),
        (d.c = r - d.s),
        h.e && (h.e = ze(r) + ft(h.e)),
        h.b && (h.b = d.s + ft(h.b));
  },
  p0 = function (e, t) {
    var r = e[0] ? Bn(e[0]).harness : 0,
      n = r && r.aliases,
      s,
      o,
      a,
      l;
    if (!n) return t;
    s = Xn({}, t);
    for (o in n)
      if (o in s) for (l = n[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  m0 = function (e, t, r, n) {
    var s = t.ease || n || "power1.inOut",
      o,
      a;
    if (mt(t))
      (a = r[e] || (r[e] = [])),
        t.forEach(function (l, c) {
          return a.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = r[o] || (r[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  es = function (e, t, r, n, s) {
    return Fe(e)
      ? e.call(t, r, n, s)
      : tt(e) && ~e.indexOf("random(")
      ? vs(e)
      : e;
  },
  Lu = Dl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Iu = {};
Rt(Lu + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
  return (Iu[i] = 1);
});
var Ue = (function (i) {
  Jd(e, i);
  function e(r, n, s, o) {
    var a;
    typeof n == "number" && ((s.duration = n), (n = s), (s = null)),
      (a = i.call(this, o ? n : Qi(n)) || this);
    var l = a.vars,
      c = l.duration,
      d = l.delay,
      h = l.immediateRender,
      u = l.stagger,
      f = l.overwrite,
      p = l.keyframes,
      m = l.defaults,
      g = l.scrollTrigger,
      y = l.yoyoEase,
      v = n.parent || Ae,
      b = (mt(r) || tu(r) ? Jr(r[0]) : "length" in n) ? [r] : ir(r),
      $,
      E,
      T,
      S,
      O,
      D,
      x,
      L;
    if (
      ((a._targets = b.length
        ? Pl(b)
        : ms(
            "GSAP target " + r + " not found. https://gsap.com",
            !Xt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = f),
      p || u || Ys(c) || Ys(d))
    ) {
      if (
        ((n = a.vars),
        ($ = a.timeline =
          new Tt({
            data: "nested",
            defaults: m || {},
            targets: v && v.data === "nested" ? v.vars.targets : b,
          })),
        $.kill(),
        ($.parent = $._dp = Vr(a)),
        ($._start = 0),
        u || Ys(c) || Ys(d))
      ) {
        if (((S = b.length), (x = u && $u(u)), Ar(u)))
          for (O in u) ~Lu.indexOf(O) && (L || (L = {}), (L[O] = u[O]));
        for (E = 0; E < S; E++)
          (T = Do(n, Iu)),
            (T.stagger = 0),
            y && (T.yoyoEase = y),
            L && Xn(T, L),
            (D = b[E]),
            (T.duration = +es(c, Vr(a), E, D, b)),
            (T.delay = (+es(d, Vr(a), E, D, b) || 0) - a._delay),
            !u &&
              S === 1 &&
              T.delay &&
              ((a._delay = d = T.delay), (a._start += d), (T.delay = 0)),
            $.to(D, T, x ? x(E, D, b) : 0),
            ($._ease = ce.none);
        $.duration() ? (c = d = 0) : (a.timeline = 0);
      } else if (p) {
        Qi(or($.vars.defaults, { ease: "none" })),
          ($._ease = Vn(p.ease || n.ease || "none"));
        var w = 0,
          P,
          k,
          R;
        if (mt(p))
          p.forEach(function (I) {
            return $.to(b, I, ">");
          }),
            $.duration();
        else {
          T = {};
          for (O in p)
            O === "ease" || O === "easeEach" || m0(O, p[O], T, p.easeEach);
          for (O in T)
            for (
              P = T[O].sort(function (I, N) {
                return I.t - N.t;
              }),
                w = 0,
                E = 0;
              E < P.length;
              E++
            )
              (k = P[E]),
                (R = {
                  ease: k.e,
                  duration: ((k.t - (E ? P[E - 1].t : 0)) / 100) * c,
                }),
                (R[O] = k.v),
                $.to(b, R, w),
                (w += R.duration);
          $.duration() < c && $.to({}, { duration: c - $.duration() });
        }
      }
      c || a.duration((c = $.duration()));
    } else a.timeline = 0;
    return (
      f === !0 && !Sl && ((un = Vr(a)), Ae.killTweensOf(b), (un = 0)),
      Er(v, Vr(a), s),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (h ||
        (!c &&
          !p &&
          a._start === et(v._time) &&
          It(h) &&
          Wf(Vr(a)) &&
          v.data !== "nested")) &&
        ((a._tTime = -we), a.render(Math.max(0, -d) || 0)),
      g && mu(Vr(a), g),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (n, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        d = n < 0,
        h = n > l - we && !d ? l : n < we ? 0 : n,
        u,
        f,
        p,
        m,
        g,
        y,
        v,
        b,
        $;
      if (!c) Yf(this, n, s, o);
      else if (
        h !== this._tTime ||
        !n ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== d)
      ) {
        if (((u = h), (b = this.timeline), this._repeat)) {
          if (((m = c + this._rDelay), this._repeat < -1 && d))
            return this.totalTime(m * 100 + n, s, o);
          if (
            ((u = et(h % m)),
            h === l
              ? ((p = this._repeat), (u = c))
              : ((p = ~~(h / m)),
                p && p === et(h / m) && ((u = c), p--),
                u > c && (u = c)),
            (y = this._yoyo && p & 1),
            y && (($ = this._yEase), (u = c - u)),
            (g = xi(this._tTime, m)),
            u === a && !o && this._initted && p === g)
          )
            return (this._tTime = h), this;
          p !== g &&
            (b && this._yEase && Pu(b, y),
            this.vars.repeatRefresh &&
              !y &&
              !this._lock &&
              this._time !== m &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(et(m * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (gu(this, d ? n : u, o, s, h)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && p !== g))
            return this;
          if (c !== this._dur) return this.render(n, s, o);
        }
        if (
          ((this._tTime = h),
          (this._time = u),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = ($ || this._ease)(u / c)),
          this._from && (this.ratio = v = 1 - v),
          u && !a && !s && !p && (Yt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (f = this._pt; f; ) f.r(v, f.d), (f = f._next);
        (b && b.render(n < 0 ? n : b._dur * b._ease(u / this._dur), s, o)) ||
          (this._startAt && (this._zTime = n)),
          this._onUpdate &&
            !s &&
            (d && Ha(this, n, s, o), Yt(this, "onUpdate")),
          this._repeat &&
            p !== g &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            Yt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (d && !this._onUpdate && Ha(this, n, !0, !0),
            (n || !c) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              bn(this, 1),
            !s &&
              !(d && !a) &&
              (h || a || y) &&
              (Yt(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (n) {
      return (
        (!n || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(n),
        i.prototype.invalidate.call(this, n)
      );
    }),
    (t.resetTo = function (n, s, o, a, l) {
      ys || Wt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        d;
      return (
        this._initted || Cl(this, c),
        (d = this._ease(c / this._dur)),
        f0(this, n, s, o, a, d, c, l)
          ? this.resetTo(n, s, o, a, 1)
          : (Zo(this, 0),
            this.parent ||
              fu(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (n, s) {
      if ((s === void 0 && (s = "all"), !n && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Gi(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(n, s, un && un.vars.overwrite !== !0)
            ._first || Gi(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Di(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = n ? ir(n) : a,
        c = this._ptLookup,
        d = this._pt,
        h,
        u,
        f,
        p,
        m,
        g,
        y;
      if ((!s || s === "all") && Gf(a, l))
        return s === "all" && (this._pt = 0), Gi(this);
      for (
        h = this._op = this._op || [],
          s !== "all" &&
            (tt(s) &&
              ((m = {}),
              Rt(s, function (v) {
                return (m[v] = 1);
              }),
              (s = m)),
            (s = p0(a, s))),
          y = a.length;
        y--;

      )
        if (~l.indexOf(a[y])) {
          (u = c[y]),
            s === "all"
              ? ((h[y] = s), (p = u), (f = {}))
              : ((f = h[y] = h[y] || {}), (p = s));
          for (m in p)
            (g = u && u[m]),
              g &&
                ((!("kill" in g.d) || g.d.kill(m) === !0) && Xo(this, g, "_pt"),
                delete u[m]),
              f !== "all" && (f[m] = 1);
        }
      return this._initted && !this._pt && d && Gi(this), this;
    }),
    (e.to = function (n, s) {
      return new e(n, s, arguments[2]);
    }),
    (e.from = function (n, s) {
      return Ji(1, arguments);
    }),
    (e.delayedCall = function (n, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: n,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (n, s, o) {
      return Ji(2, arguments);
    }),
    (e.set = function (n, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(n, s);
    }),
    (e.killTweensOf = function (n, s, o) {
      return Ae.killTweensOf(n, s, o);
    }),
    e
  );
})($s);
or(Ue.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Rt("staggerTo,staggerFrom,staggerFromTo", function (i) {
  Ue[i] = function () {
    var e = new Tt(),
      t = Ba.call(arguments, 0);
    return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
  };
});
var Al = function (e, t, r) {
    return (e[t] = r);
  },
  Ru = function (e, t, r) {
    return e[t](r);
  },
  g0 = function (e, t, r, n) {
    return e[t](n.fp, r);
  },
  v0 = function (e, t, r) {
    return e.setAttribute(t, r);
  },
  Ll = function (e, t) {
    return Fe(e[t]) ? Ru : El(e[t]) && e.setAttribute ? v0 : Al;
  },
  Nu = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  y0 = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Fu = function (e, t) {
    var r = t._pt,
      n = "";
    if (!e && t.b) n = t.b;
    else if (e === 1 && t.e) n = t.e;
    else {
      for (; r; )
        (n =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          n),
          (r = r._next);
      n += t.c;
    }
    t.set(t.t, t.p, n, t);
  },
  Il = function (e, t) {
    for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  $0 = function (e, t, r, n) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === n && s.modifier(e, t, r), (s = o);
  },
  b0 = function (e) {
    for (var t = this._pt, r, n; t; )
      (n = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Xo(this, t, "_pt")
          : t.dep || (r = 1),
        (t = n);
    return !r;
  },
  _0 = function (e, t, r, n) {
    n.mSet(e, t, n.m.call(n.tween, r, n.mt), n);
  },
  Hu = function (e) {
    for (var t = e._pt, r, n, s, o; t; ) {
      for (r = t._next, n = s; n && n.pr > t.pr; ) n = n._next;
      (t._prev = n ? n._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = n) ? (n._prev = t) : (o = t),
        (t = r);
    }
    e._pt = s;
  },
  Nt = (function () {
    function i(t, r, n, s, o, a, l, c, d) {
      (this.t = r),
        (this.s = s),
        (this.c = o),
        (this.p = n),
        (this.r = a || Nu),
        (this.d = l || this),
        (this.set = c || Al),
        (this.pr = d || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = i.prototype;
    return (
      (e.modifier = function (r, n, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = _0),
          (this.m = r),
          (this.mt = s),
          (this.tween = n);
      }),
      i
    );
  })();
Rt(
  Dl +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (i) {
    return (xl[i] = 1);
  }
);
Kt.TweenMax = Kt.TweenLite = Ue;
Kt.TimelineLite = Kt.TimelineMax = Tt;
Ae = new Tt({
  sortChildren: !1,
  defaults: Mi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Xt.stringFilter = xu;
var Gn = [],
  po = {},
  w0 = [],
  $c = 0,
  S0 = 0,
  pa = function (e) {
    return (po[e] || w0).map(function (t) {
      return t();
    });
  },
  Ua = function () {
    var e = Date.now(),
      t = [];
    e - $c > 2 &&
      (pa("matchMediaInit"),
      Gn.forEach(function (r) {
        var n = r.queries,
          s = r.conditions,
          o,
          a,
          l,
          c;
        for (a in n)
          (o = _r.matchMedia(n[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (c = 1));
        c && (r.revert(), l && t.push(r));
      }),
      pa("matchMediaRevert"),
      t.forEach(function (r) {
        return r.onMatch(r, function (n) {
          return r.add(null, n);
        });
      }),
      ($c = e),
      pa("matchMedia"));
  },
  qu = (function () {
    function i(t, r) {
      (this.selector = r && za(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = S0++),
        t && this.add(t);
    }
    var e = i.prototype;
    return (
      (e.add = function (r, n, s) {
        Fe(r) && ((s = n), (n = r), (r = Fe));
        var o = this,
          a = function () {
            var c = Pe,
              d = o.selector,
              h;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = za(s)),
              (Pe = o),
              (h = n.apply(o, arguments)),
              Fe(h) && o._r.push(h),
              (Pe = c),
              (o.selector = d),
              (o.isReverted = !1),
              h
            );
          };
        return (
          (o.last = a),
          r === Fe
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : r
            ? (o[r] = a)
            : a
        );
      }),
      (e.ignore = function (r) {
        var n = Pe;
        (Pe = null), r(this), (Pe = n);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof i
              ? r.push.apply(r, n.getTweens())
              : n instanceof Ue &&
                  !(n.parent && n.parent.data === "nested") &&
                  r.push(n);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, n) {
        var s = this;
        if (
          (r
            ? (function () {
                for (var a = s.getTweens(), l = s.data.length, c; l--; )
                  (c = s.data[l]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (d) {
                        return a.splice(a.indexOf(d), 1);
                      }));
                for (
                  a
                    .map(function (d) {
                      return {
                        g:
                          d._dur ||
                          d._delay ||
                          (d._sat && !d._sat.vars.immediateRender)
                            ? d.globalTime(0)
                            : -1 / 0,
                        t: d,
                      };
                    })
                    .sort(function (d, h) {
                      return h.g - d.g || -1 / 0;
                    })
                    .forEach(function (d) {
                      return d.t.revert(r);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof Tt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Ue) && c.revert && c.revert(r);
                s._r.forEach(function (d) {
                  return d(r, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          n)
        )
          for (var o = Gn.length; o--; )
            Gn[o].id === this.id && Gn.splice(o, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      i
    );
  })(),
  E0 = (function () {
    function i(t) {
      (this.contexts = []), (this.scope = t), Pe && Pe.data.push(this);
    }
    var e = i.prototype;
    return (
      (e.add = function (r, n, s) {
        Ar(r) || (r = { matches: r });
        var o = new qu(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          d;
        Pe && !o.selector && (o.selector = Pe.selector),
          this.contexts.push(o),
          (n = o.add("onMatch", n)),
          (o.queries = r);
        for (c in r)
          c === "all"
            ? (d = 1)
            : ((l = _r.matchMedia(r[c])),
              l &&
                (Gn.indexOf(o) < 0 && Gn.push(o),
                (a[c] = l.matches) && (d = 1),
                l.addListener
                  ? l.addListener(Ua)
                  : l.addEventListener("change", Ua)));
        return (
          d &&
            n(o, function (h) {
              return o.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (n) {
          return n.kill(r, !0);
        });
      }),
      i
    );
  })(),
  ko = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      t.forEach(function (n) {
        return Tu(n);
      });
    },
    timeline: function (e) {
      return new Tt(e);
    },
    getTweensOf: function (e, t) {
      return Ae.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, n) {
      tt(e) && (e = ir(e)[0]);
      var s = Bn(e || {}).get,
        o = r ? hu : uu;
      return (
        r === "native" && (r = ""),
        e &&
          (t
            ? o(((Gt[t] && Gt[t].get) || s)(e, t, r, n))
            : function (a, l, c) {
                return o(((Gt[a] && Gt[a].get) || s)(e, a, l, c));
              })
      );
    },
    quickSetter: function (e, t, r) {
      if (((e = ir(e)), e.length > 1)) {
        var n = e.map(function (d) {
            return gt.quickSetter(d, t, r);
          }),
          s = n.length;
        return function (d) {
          for (var h = s; h--; ) n[h](d);
        };
      }
      e = e[0] || {};
      var o = Gt[t],
        a = Bn(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        c = o
          ? function (d) {
              var h = new o();
              (gi._pt = 0),
                h.init(e, r ? d + r : d, gi, 0, [e]),
                h.render(1, h),
                gi._pt && Il(1, gi);
            }
          : a.set(e, l);
      return o
        ? c
        : function (d) {
            return c(e, l, r ? d + r : d, a, 1);
          };
    },
    quickTo: function (e, t, r) {
      var n,
        s = gt.to(
          e,
          Xn(((n = {}), (n[t] = "+=0.1"), (n.paused = !0), n), r || {})
        ),
        o = function (l, c, d) {
          return s.resetTo(t, l, c, d);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return Ae.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Vn(e.ease, Mi.ease)), pc(Mi, e || {});
    },
    config: function (e) {
      return pc(Xt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        n = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (n || "").split(",").forEach(function (a) {
        return (
          a && !Gt[a] && !Kt[a] && ms(t + " effect requires " + a + " plugin.")
        );
      }),
        (da[t] = function (a, l, c) {
          return r(ir(a), or(l || {}, s), c);
        }),
        o &&
          (Tt.prototype[t] = function (a, l, c) {
            return this.add(da[t](a, Ar(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      ce[e] = Vn(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Vn(e, t) : ce;
    },
    getById: function (e) {
      return Ae.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var r = new Tt(e),
        n,
        s;
      for (
        r.smoothChildTiming = It(e.smoothChildTiming),
          Ae.remove(r),
          r._dp = 0,
          r._time = r._tTime = Ae._time,
          n = Ae._first;
        n;

      )
        (s = n._next),
          (t ||
            !(
              !n._dur &&
              n instanceof Ue &&
              n.vars.onComplete === n._targets[0]
            )) &&
            Er(r, n, n._start - n._delay),
          (n = s);
      return Er(Ae, r, 0), r;
    },
    context: function (e, t) {
      return e ? new qu(e, t) : Pe;
    },
    matchMedia: function (e) {
      return new E0(e);
    },
    matchMediaRefresh: function () {
      return (
        Gn.forEach(function (e) {
          var t = e.conditions,
            r,
            n;
          for (n in t) t[n] && ((t[n] = !1), (r = 1));
          r && e.revert();
        }) || Ua()
      );
    },
    addEventListener: function (e, t) {
      var r = po[e] || (po[e] = []);
      ~r.indexOf(t) || r.push(t);
    },
    removeEventListener: function (e, t) {
      var r = po[e],
        n = r && r.indexOf(t);
      n >= 0 && r.splice(n, 1);
    },
    utils: {
      wrap: r0,
      wrapYoyo: n0,
      distribute: $u,
      random: _u,
      snap: bu,
      normalize: t0,
      getUnit: ft,
      clamp: Zf,
      splitColor: Ou,
      toArray: ir,
      selector: za,
      mapRange: Su,
      pipe: Jf,
      unitize: e0,
      interpolate: i0,
      shuffle: yu,
    },
    install: ou,
    effects: da,
    ticker: Wt,
    updateRoot: Tt.updateRoot,
    plugins: Gt,
    globalTimeline: Ae,
    core: {
      PropTween: Nt,
      globals: au,
      Tween: Ue,
      Timeline: Tt,
      Animation: $s,
      getCache: Bn,
      _removeLinkedListItem: Xo,
      reverting: function () {
        return pt;
      },
      context: function (e) {
        return e && Pe && (Pe.data.push(e), (e._ctx = Pe)), Pe;
      },
      suppressOverwrites: function (e) {
        return (Sl = e);
      },
    },
  };
Rt("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
  return (ko[i] = Ue[i]);
});
Wt.add(Tt.updateRoot);
gi = ko.to({}, { duration: 0 });
var T0 = function (e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
      r = r._next;
    return r;
  },
  O0 = function (e, t) {
    var r = e._targets,
      n,
      s,
      o;
    for (n in t)
      for (s = r.length; s--; )
        (o = e._ptLookup[s][n]),
          o &&
            (o = o.d) &&
            (o._pt && (o = T0(o, n)),
            o && o.modifier && o.modifier(t[n], e, r[s], n));
  },
  ma = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (n, s, o) {
        o._onInit = function (a) {
          var l, c;
          if (
            (tt(s) &&
              ((l = {}),
              Rt(s, function (d) {
                return (l[d] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          O0(a, s);
        };
      },
    };
  },
  gt =
    ko.registerPlugin(
      {
        name: "attr",
        init: function (e, t, r, n, s) {
          var o, a, l;
          this.tween = r;
          for (o in t)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[o],
                n,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var r = t._pt; r; )
            pt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
        },
      },
      ma("roundProps", Va),
      ma("modifiers"),
      ma("snap", bu)
    ) || ko;
Ue.version = Tt.version = gt.version = "3.12.5";
su = 1;
Tl() && Pi();
ce.Power0;
ce.Power1;
ce.Power2;
ce.Power3;
ce.Power4;
ce.Linear;
ce.Quad;
ce.Cubic;
ce.Quart;
ce.Quint;
ce.Strong;
ce.Elastic;
ce.Back;
ce.SteppedEase;
ce.Bounce;
ce.Sine;
ce.Expo;
ce.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var bc,
  hn,
  bi,
  Rl,
  Ln,
  _c,
  Nl,
  M0 = function () {
    return typeof window < "u";
  },
  en = {},
  Dn = 180 / Math.PI,
  _i = Math.PI / 180,
  ii = Math.atan2,
  wc = 1e8,
  Fl = /([A-Z])/g,
  x0 = /(left|right|width|margin|padding|x)/i,
  D0 = /[\s,\(]\S/,
  Tr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Wa = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  P0 = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  k0 = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  C0 = function (e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Bu = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  zu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  A0 = function (e, t, r) {
    return (e.style[t] = r);
  },
  L0 = function (e, t, r) {
    return e.style.setProperty(t, r);
  },
  I0 = function (e, t, r) {
    return (e._gsap[t] = r);
  },
  R0 = function (e, t, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  N0 = function (e, t, r, n, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = r), o.renderTransform(s, o);
  },
  F0 = function (e, t, r, n, s) {
    var o = e._gsap;
    (o[t] = r), o.renderTransform(s, o);
  },
  Le = "transform",
  Ft = Le + "Origin",
  H0 = function i(e, t) {
    var r = this,
      n = this.target,
      s = n.style,
      o = n._gsap;
    if (e in en && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Tr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (r.tfm[a] = Gr(n, a));
              })
            : (this.tfm[e] = o.x ? o[e] : Gr(n, e)),
          e === Ft && (this.tfm.zOrigin = o.zOrigin);
      else
        return Tr.transform.split(",").forEach(function (a) {
          return i.call(r, a, t);
        });
      if (this.props.indexOf(Le) >= 0) return;
      o.svg &&
        ((this.svgo = n.getAttribute("data-svg-origin")),
        this.props.push(Ft, t, "")),
        (e = Le);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Vu = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  q0 = function () {
    var e = this.props,
      t = this.target,
      r = t.style,
      n = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (r[e[s]] = e[s + 2])
        : r.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(Fl, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) n[o] = this.tfm[o];
      n.svg &&
        (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = Nl()),
        (!s || !s.isStart) &&
          !r[Le] &&
          (Vu(r),
          n.zOrigin &&
            r[Ft] &&
            ((r[Ft] += " " + n.zOrigin + "px"),
            (n.zOrigin = 0),
            n.renderTransform()),
          (n.uncache = 1));
    }
  },
  Gu = function (e, t) {
    var r = { target: e, props: [], revert: q0, save: H0 };
    return (
      e._gsap || gt.core.getCache(e),
      t &&
        t.split(",").forEach(function (n) {
          return r.save(n);
        }),
      r
    );
  },
  Uu,
  ja = function (e, t) {
    var r = hn.createElementNS
      ? hn.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : hn.createElement(e);
    return r && r.style ? r : hn.createElement(e);
  },
  Pr = function i(e, t, r) {
    var n = getComputedStyle(e);
    return (
      n[t] ||
      n.getPropertyValue(t.replace(Fl, "-$1").toLowerCase()) ||
      n.getPropertyValue(t) ||
      (!r && i(e, ki(t) || t, 1)) ||
      ""
    );
  },
  Sc = "O,Moz,ms,Ms,Webkit".split(","),
  ki = function (e, t, r) {
    var n = t || Ln,
      s = n.style,
      o = 5;
    if (e in s && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Sc[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Sc[o] : "") + e;
  },
  Ya = function () {
    M0() &&
      window.document &&
      ((bc = window),
      (hn = bc.document),
      (bi = hn.documentElement),
      (Ln = ja("div") || { style: {} }),
      ja("div"),
      (Le = ki(Le)),
      (Ft = Le + "Origin"),
      (Ln.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Uu = !!ki("perspective")),
      (Nl = gt.core.reverting),
      (Rl = 1));
  },
  ga = function i(e) {
    var t = ja(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      n = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (bi.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = i);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      r && (n ? r.insertBefore(this, n) : r.appendChild(this)),
      bi.removeChild(t),
      (this.style.cssText = s),
      o
    );
  },
  Ec = function (e, t) {
    for (var r = t.length; r--; )
      if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
  },
  Wu = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = ga.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === ga || (t = ga.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Ec(e, ["x", "cx", "x1"]) || 0,
            y: +Ec(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  ju = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Wu(e));
  },
  Kn = function (e, t) {
    if (t) {
      var r = e.style,
        n;
      t in en && t !== Ft && (t = Le),
        r.removeProperty
          ? ((n = t.substr(0, 2)),
            (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            r.removeProperty(
              n === "--" ? t : t.replace(Fl, "-$1").toLowerCase()
            ))
          : r.removeAttribute(t);
    }
  },
  fn = function (e, t, r, n, s, o) {
    var a = new Nt(e._pt, t, r, 0, 1, o ? zu : Bu);
    return (e._pt = a), (a.b = n), (a.e = s), e._props.push(r), a;
  },
  Tc = { deg: 1, rad: 1, turn: 1 },
  B0 = { grid: 1, flex: 1 },
  _n = function i(e, t, r, n) {
    var s = parseFloat(r) || 0,
      o = (r + "").trim().substr((s + "").length) || "px",
      a = Ln.style,
      l = x0.test(t),
      c = e.tagName.toLowerCase() === "svg",
      d = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      u = n === "px",
      f = n === "%",
      p,
      m,
      g,
      y;
    if (n === o || !s || Tc[n] || Tc[o]) return s;
    if (
      (o !== "px" && !u && (s = i(e, t, r, "px")),
      (y = e.getCTM && ju(e)),
      (f || o === "%") && (en[t] || ~t.indexOf("adius")))
    )
      return (
        (p = y ? e.getBBox()[l ? "width" : "height"] : e[d]),
        ze(f ? (s / p) * h : (s / 100) * p)
      );
    if (
      ((a[l ? "width" : "height"] = h + (u ? o : n)),
      (m =
        ~t.indexOf("adius") || (n === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      y && (m = (e.ownerSVGElement || {}).parentNode),
      (!m || m === hn || !m.appendChild) && (m = hn.body),
      (g = m._gsap),
      g && f && g.width && l && g.time === Wt.time && !g.uncache)
    )
      return ze((s / g.width) * h);
    if (f && (t === "height" || t === "width")) {
      var v = e.style[t];
      (e.style[t] = h + n), (p = e[d]), v ? (e.style[t] = v) : Kn(e, t);
    } else
      (f || o === "%") &&
        !B0[Pr(m, "display")] &&
        (a.position = Pr(e, "position")),
        m === e && (a.position = "static"),
        m.appendChild(Ln),
        (p = Ln[d]),
        m.removeChild(Ln),
        (a.position = "absolute");
    return (
      l && f && ((g = Bn(m)), (g.time = Wt.time), (g.width = m[d])),
      ze(u ? (p * s) / h : p && s ? (h / p) * s : 0)
    );
  },
  Gr = function (e, t, r, n) {
    var s;
    return (
      Rl || Ya(),
      t in Tr &&
        t !== "transform" &&
        ((t = Tr[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      en[t] && t !== "transform"
        ? ((s = _s(e, n)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : Ao(Pr(e, Ft)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || n || ~(s + "").indexOf("calc(")) &&
            (s =
              (Co[t] && Co[t](e, t, r)) ||
              Pr(e, t) ||
              cu(e, t) ||
              (t === "opacity" ? 1 : 0))),
      r && !~(s + "").trim().indexOf(" ") ? _n(e, t, s, r) + r : s
    );
  },
  z0 = function (e, t, r, n) {
    if (!r || r === "none") {
      var s = ki(t, e, 1),
        o = s && Pr(e, s, 1);
      o && o !== r
        ? ((t = s), (r = o))
        : t === "borderColor" && (r = Pr(e, "borderTopColor"));
    }
    var a = new Nt(this._pt, e.style, t, 0, 1, Fu),
      l = 0,
      c = 0,
      d,
      h,
      u,
      f,
      p,
      m,
      g,
      y,
      v,
      b,
      $,
      E;
    if (
      ((a.b = r),
      (a.e = n),
      (r += ""),
      (n += ""),
      n === "auto" &&
        ((m = e.style[t]),
        (e.style[t] = n),
        (n = Pr(e, t) || n),
        m ? (e.style[t] = m) : Kn(e, t)),
      (d = [r, n]),
      xu(d),
      (r = d[0]),
      (n = d[1]),
      (u = r.match(mi) || []),
      (E = n.match(mi) || []),
      E.length)
    ) {
      for (; (h = mi.exec(n)); )
        (g = h[0]),
          (v = n.substring(l, h.index)),
          p
            ? (p = (p + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (p = 1),
          g !== (m = u[c++] || "") &&
            ((f = parseFloat(m) || 0),
            ($ = m.substr((f + "").length)),
            g.charAt(1) === "=" && (g = $i(f, g) + $),
            (y = parseFloat(g)),
            (b = g.substr((y + "").length)),
            (l = mi.lastIndex - b.length),
            b ||
              ((b = b || Xt.units[t] || $),
              l === n.length && ((n += b), (a.e += b))),
            $ !== b && (f = _n(e, t, m, b) || 0),
            (a._pt = {
              _next: a._pt,
              p: v || c === 1 ? v : ",",
              s: f,
              c: y - f,
              m: (p && p < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < n.length ? n.substring(l, n.length) : "";
    } else a.r = t === "display" && n === "none" ? zu : Bu;
    return nu.test(n) && (a.e = 0), (this._pt = a), a;
  },
  Oc = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  V0 = function (e) {
    var t = e.split(" "),
      r = t[0],
      n = t[1] || "50%";
    return (
      (r === "top" || r === "bottom" || n === "left" || n === "right") &&
        ((e = r), (r = n), (n = e)),
      (t[0] = Oc[r] || r),
      (t[1] = Oc[n] || n),
      t.join(" ")
    );
  },
  G0 = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var r = t.t,
        n = r.style,
        s = t.u,
        o = r._gsap,
        a,
        l,
        c;
      if (s === "all" || s === !0) (n.cssText = ""), (l = 1);
      else
        for (s = s.split(","), c = s.length; --c > -1; )
          (a = s[c]),
            en[a] && ((l = 1), (a = a === "transformOrigin" ? Ft : Le)),
            Kn(r, a);
      l &&
        (Kn(r, Le),
        o &&
          (o.svg && r.removeAttribute("transform"),
          _s(r, 1),
          (o.uncache = 1),
          Vu(n)));
    }
  },
  Co = {
    clearProps: function (e, t, r, n, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Nt(e._pt, t, r, 0, 0, G0));
        return (o.u = n), (o.pr = -10), (o.tween = s), e._props.push(r), 1;
      }
    },
  },
  bs = [1, 0, 0, 1, 0, 0],
  Yu = {},
  Xu = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Mc = function (e) {
    var t = Pr(e, Le);
    return Xu(t) ? bs : t.substr(7).match(ru).map(ze);
  },
  Hl = function (e, t) {
    var r = e._gsap || Bn(e),
      n = e.style,
      s = Mc(e),
      o,
      a,
      l,
      c;
    return r.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? bs : s)
      : (s === bs &&
          !e.offsetParent &&
          e !== bi &&
          !r.svg &&
          ((l = n.display),
          (n.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((c = 1), (a = e.nextElementSibling), bi.appendChild(e)),
          (s = Mc(e)),
          l ? (n.display = l) : Kn(e, "display"),
          c &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : bi.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Xa = function (e, t, r, n, s, o) {
    var a = e._gsap,
      l = s || Hl(e, !0),
      c = a.xOrigin || 0,
      d = a.yOrigin || 0,
      h = a.xOffset || 0,
      u = a.yOffset || 0,
      f = l[0],
      p = l[1],
      m = l[2],
      g = l[3],
      y = l[4],
      v = l[5],
      b = t.split(" "),
      $ = parseFloat(b[0]) || 0,
      E = parseFloat(b[1]) || 0,
      T,
      S,
      O,
      D;
    r
      ? l !== bs &&
        (S = f * g - p * m) &&
        ((O = $ * (g / S) + E * (-m / S) + (m * v - g * y) / S),
        (D = $ * (-p / S) + E * (f / S) - (f * v - p * y) / S),
        ($ = O),
        (E = D))
      : ((T = Wu(e)),
        ($ = T.x + (~b[0].indexOf("%") ? ($ / 100) * T.width : $)),
        (E = T.y + (~(b[1] || b[0]).indexOf("%") ? (E / 100) * T.height : E))),
      n || (n !== !1 && a.smooth)
        ? ((y = $ - c),
          (v = E - d),
          (a.xOffset = h + (y * f + v * m) - y),
          (a.yOffset = u + (y * p + v * g) - v))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = $),
      (a.yOrigin = E),
      (a.smooth = !!n),
      (a.origin = t),
      (a.originIsAbsolute = !!r),
      (e.style[Ft] = "0px 0px"),
      o &&
        (fn(o, a, "xOrigin", c, $),
        fn(o, a, "yOrigin", d, E),
        fn(o, a, "xOffset", h, a.xOffset),
        fn(o, a, "yOffset", u, a.yOffset)),
      e.setAttribute("data-svg-origin", $ + " " + E);
  },
  _s = function (e, t) {
    var r = e._gsap || new Cu(e);
    if ("x" in r && !t && !r.uncache) return r;
    var n = e.style,
      s = r.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      c = Pr(e, Ft) || "0",
      d,
      h,
      u,
      f,
      p,
      m,
      g,
      y,
      v,
      b,
      $,
      E,
      T,
      S,
      O,
      D,
      x,
      L,
      w,
      P,
      k,
      R,
      I,
      N,
      q,
      F,
      M,
      j,
      ne,
      ue,
      oe,
      ve;
    return (
      (d = h = u = m = g = y = v = b = $ = 0),
      (f = p = 1),
      (r.svg = !!(e.getCTM && ju(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (n[Le] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[Le] !== "none" ? l[Le] : "")),
        (n.scale = n.rotate = n.translate = "none")),
      (S = Hl(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((q = e.getBBox()),
            (c = r.xOrigin - q.x + "px " + (r.yOrigin - q.y) + "px"),
            (N = ""))
          : (N = !t && e.getAttribute("data-svg-origin")),
        Xa(e, N || c, !!N || r.originIsAbsolute, r.smooth !== !1, S)),
      (E = r.xOrigin || 0),
      (T = r.yOrigin || 0),
      S !== bs &&
        ((L = S[0]),
        (w = S[1]),
        (P = S[2]),
        (k = S[3]),
        (d = R = S[4]),
        (h = I = S[5]),
        S.length === 6
          ? ((f = Math.sqrt(L * L + w * w)),
            (p = Math.sqrt(k * k + P * P)),
            (m = L || w ? ii(w, L) * Dn : 0),
            (v = P || k ? ii(P, k) * Dn + m : 0),
            v && (p *= Math.abs(Math.cos(v * _i))),
            r.svg && ((d -= E - (E * L + T * P)), (h -= T - (E * w + T * k))))
          : ((ve = S[6]),
            (ue = S[7]),
            (M = S[8]),
            (j = S[9]),
            (ne = S[10]),
            (oe = S[11]),
            (d = S[12]),
            (h = S[13]),
            (u = S[14]),
            (O = ii(ve, ne)),
            (g = O * Dn),
            O &&
              ((D = Math.cos(-O)),
              (x = Math.sin(-O)),
              (N = R * D + M * x),
              (q = I * D + j * x),
              (F = ve * D + ne * x),
              (M = R * -x + M * D),
              (j = I * -x + j * D),
              (ne = ve * -x + ne * D),
              (oe = ue * -x + oe * D),
              (R = N),
              (I = q),
              (ve = F)),
            (O = ii(-P, ne)),
            (y = O * Dn),
            O &&
              ((D = Math.cos(-O)),
              (x = Math.sin(-O)),
              (N = L * D - M * x),
              (q = w * D - j * x),
              (F = P * D - ne * x),
              (oe = k * x + oe * D),
              (L = N),
              (w = q),
              (P = F)),
            (O = ii(w, L)),
            (m = O * Dn),
            O &&
              ((D = Math.cos(O)),
              (x = Math.sin(O)),
              (N = L * D + w * x),
              (q = R * D + I * x),
              (w = w * D - L * x),
              (I = I * D - R * x),
              (L = N),
              (R = q)),
            g &&
              Math.abs(g) + Math.abs(m) > 359.9 &&
              ((g = m = 0), (y = 180 - y)),
            (f = ze(Math.sqrt(L * L + w * w + P * P))),
            (p = ze(Math.sqrt(I * I + ve * ve))),
            (O = ii(R, I)),
            (v = Math.abs(O) > 2e-4 ? O * Dn : 0),
            ($ = oe ? 1 / (oe < 0 ? -oe : oe) : 0)),
        r.svg &&
          ((N = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !Xu(Pr(e, Le))),
          N && e.setAttribute("transform", N))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (s
          ? ((f *= -1), (v += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((p *= -1), (v += v <= 0 ? 180 : -180))),
      (t = t || r.uncache),
      (r.x =
        d -
        ((r.xPercent =
          d &&
          ((!t && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        o),
      (r.y =
        h -
        ((r.yPercent =
          h &&
          ((!t && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        o),
      (r.z = u + o),
      (r.scaleX = ze(f)),
      (r.scaleY = ze(p)),
      (r.rotation = ze(m) + a),
      (r.rotationX = ze(g) + a),
      (r.rotationY = ze(y) + a),
      (r.skewX = v + a),
      (r.skewY = b + a),
      (r.transformPerspective = $ + o),
      (r.zOrigin = parseFloat(c.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
        (n[Ft] = Ao(c)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = Xt.force3D),
      (r.renderTransform = r.svg ? W0 : Uu ? Ku : U0),
      (r.uncache = 0),
      r
    );
  },
  Ao = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  va = function (e, t, r) {
    var n = ft(t);
    return ze(parseFloat(t) + parseFloat(_n(e, "x", r + "px", n))) + n;
  },
  U0 = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Ku(e, t);
  },
  On = "0deg",
  Fi = "0px",
  Mn = ") ",
  Ku = function (e, t) {
    var r = t || this,
      n = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.z,
      c = r.rotation,
      d = r.rotationY,
      h = r.rotationX,
      u = r.skewX,
      f = r.skewY,
      p = r.scaleX,
      m = r.scaleY,
      g = r.transformPerspective,
      y = r.force3D,
      v = r.target,
      b = r.zOrigin,
      $ = "",
      E = (y === "auto" && e && e !== 1) || y === !0;
    if (b && (h !== On || d !== On)) {
      var T = parseFloat(d) * _i,
        S = Math.sin(T),
        O = Math.cos(T),
        D;
      (T = parseFloat(h) * _i),
        (D = Math.cos(T)),
        (o = va(v, o, S * D * -b)),
        (a = va(v, a, -Math.sin(T) * -b)),
        (l = va(v, l, O * D * -b + b));
    }
    g !== Fi && ($ += "perspective(" + g + Mn),
      (n || s) && ($ += "translate(" + n + "%, " + s + "%) "),
      (E || o !== Fi || a !== Fi || l !== Fi) &&
        ($ +=
          l !== Fi || E
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + Mn),
      c !== On && ($ += "rotate(" + c + Mn),
      d !== On && ($ += "rotateY(" + d + Mn),
      h !== On && ($ += "rotateX(" + h + Mn),
      (u !== On || f !== On) && ($ += "skew(" + u + ", " + f + Mn),
      (p !== 1 || m !== 1) && ($ += "scale(" + p + ", " + m + Mn),
      (v.style[Le] = $ || "translate(0, 0)");
  },
  W0 = function (e, t) {
    var r = t || this,
      n = r.xPercent,
      s = r.yPercent,
      o = r.x,
      a = r.y,
      l = r.rotation,
      c = r.skewX,
      d = r.skewY,
      h = r.scaleX,
      u = r.scaleY,
      f = r.target,
      p = r.xOrigin,
      m = r.yOrigin,
      g = r.xOffset,
      y = r.yOffset,
      v = r.forceCSS,
      b = parseFloat(o),
      $ = parseFloat(a),
      E,
      T,
      S,
      O,
      D;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (d = parseFloat(d)),
      d && ((d = parseFloat(d)), (c += d), (l += d)),
      l || c
        ? ((l *= _i),
          (c *= _i),
          (E = Math.cos(l) * h),
          (T = Math.sin(l) * h),
          (S = Math.sin(l - c) * -u),
          (O = Math.cos(l - c) * u),
          c &&
            ((d *= _i),
            (D = Math.tan(c - d)),
            (D = Math.sqrt(1 + D * D)),
            (S *= D),
            (O *= D),
            d &&
              ((D = Math.tan(d)),
              (D = Math.sqrt(1 + D * D)),
              (E *= D),
              (T *= D))),
          (E = ze(E)),
          (T = ze(T)),
          (S = ze(S)),
          (O = ze(O)))
        : ((E = h), (O = u), (T = S = 0)),
      ((b && !~(o + "").indexOf("px")) || ($ && !~(a + "").indexOf("px"))) &&
        ((b = _n(f, "x", o, "px")), ($ = _n(f, "y", a, "px"))),
      (p || m || g || y) &&
        ((b = ze(b + p - (p * E + m * S) + g)),
        ($ = ze($ + m - (p * T + m * O) + y))),
      (n || s) &&
        ((D = f.getBBox()),
        (b = ze(b + (n / 100) * D.width)),
        ($ = ze($ + (s / 100) * D.height))),
      (D =
        "matrix(" + E + "," + T + "," + S + "," + O + "," + b + "," + $ + ")"),
      f.setAttribute("transform", D),
      v && (f.style[Le] = D);
  },
  j0 = function (e, t, r, n, s) {
    var o = 360,
      a = tt(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? Dn : 1),
      c = l - n,
      d = n + c + "deg",
      h,
      u;
    return (
      a &&
        ((h = s.split("_")[1]),
        h === "short" && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        h === "cw" && c < 0
          ? (c = ((c + o * wc) % o) - ~~(c / o) * o)
          : h === "ccw" && c > 0 && (c = ((c - o * wc) % o) - ~~(c / o) * o)),
      (e._pt = u = new Nt(e._pt, t, r, n, c, P0)),
      (u.e = d),
      (u.u = "deg"),
      e._props.push(r),
      u
    );
  },
  xc = function (e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  },
  Y0 = function (e, t, r) {
    var n = xc({}, r._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = r.style,
      a,
      l,
      c,
      d,
      h,
      u,
      f,
      p;
    n.svg
      ? ((c = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (o[Le] = t),
        (a = _s(r, 1)),
        Kn(r, Le),
        r.setAttribute("transform", c))
      : ((c = getComputedStyle(r)[Le]),
        (o[Le] = t),
        (a = _s(r, 1)),
        (o[Le] = c));
    for (l in en)
      (c = n[l]),
        (d = a[l]),
        c !== d &&
          s.indexOf(l) < 0 &&
          ((f = ft(c)),
          (p = ft(d)),
          (h = f !== p ? _n(r, l, c, p) : parseFloat(c)),
          (u = parseFloat(d)),
          (e._pt = new Nt(e._pt, a, l, h, u - h, Wa)),
          (e._pt.u = p || 0),
          e._props.push(l));
    xc(a, n);
  };
Rt("padding,margin,Width,Radius", function (i, e) {
  var t = "Top",
    r = "Right",
    n = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, r, n, s] : [t + s, t + r, n + r, n + s]).map(function (a) {
      return e < 2 ? i + a : "border" + a + i;
    });
  Co[e > 1 ? "border" + i : i] = function (a, l, c, d, h) {
    var u, f;
    if (arguments.length < 4)
      return (
        (u = o.map(function (p) {
          return Gr(a, p, c);
        })),
        (f = u.join(" ")),
        f.split(u[0]).length === 5 ? u[0] : f
      );
    (u = (d + "").split(" ")),
      (f = {}),
      o.forEach(function (p, m) {
        return (f[p] = u[m] = u[m] || u[((m - 1) / 2) | 0]);
      }),
      a.init(l, f, h);
  };
});
var ql = {
  name: "css",
  register: Ya,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, r, n, s) {
    var o = this._props,
      a = e.style,
      l = r.vars.startAt,
      c,
      d,
      h,
      u,
      f,
      p,
      m,
      g,
      y,
      v,
      b,
      $,
      E,
      T,
      S,
      O;
    Rl || Ya(),
      (this.styles = this.styles || Gu(e)),
      (O = this.styles.props),
      (this.tween = r);
    for (m in t)
      if (m !== "autoRound" && ((d = t[m]), !(Gt[m] && Au(m, t, r, n, e, s)))) {
        if (
          ((f = typeof d),
          (p = Co[m]),
          f === "function" && ((d = d.call(r, n, e, s)), (f = typeof d)),
          f === "string" && ~d.indexOf("random(") && (d = vs(d)),
          p)
        )
          p(this, e, m, d, r) && (S = 1);
        else if (m.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (d += ""),
            (vn.lastIndex = 0),
            vn.test(c) || ((g = ft(c)), (y = ft(d))),
            y ? g !== y && (c = _n(e, m, c, y) + y) : g && (d += g),
            this.add(a, "setProperty", c, d, n, s, 0, 0, m),
            o.push(m),
            O.push(m, 0, a[m]);
        else if (f !== "undefined") {
          if (
            (l && m in l
              ? ((c = typeof l[m] == "function" ? l[m].call(r, n, e, s) : l[m]),
                tt(c) && ~c.indexOf("random(") && (c = vs(c)),
                ft(c + "") ||
                  c === "auto" ||
                  (c += Xt.units[m] || ft(Gr(e, m)) || ""),
                (c + "").charAt(1) === "=" && (c = Gr(e, m)))
              : (c = Gr(e, m)),
            (u = parseFloat(c)),
            (v = f === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
            v && (d = d.substr(2)),
            (h = parseFloat(d)),
            m in Tr &&
              (m === "autoAlpha" &&
                (u === 1 && Gr(e, "visibility") === "hidden" && h && (u = 0),
                O.push("visibility", 0, a.visibility),
                fn(
                  this,
                  a,
                  "visibility",
                  u ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = Tr[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (b = m in en),
            b)
          ) {
            if (
              (this.styles.save(m),
              $ ||
                ((E = e._gsap),
                (E.renderTransform && !t.parseTransform) ||
                  _s(e, t.parseTransform),
                (T = t.smoothOrigin !== !1 && E.smooth),
                ($ = this._pt =
                  new Nt(this._pt, a, Le, 0, 1, E.renderTransform, E, 0, -1)),
                ($.dep = 1)),
              m === "scale")
            )
              (this._pt = new Nt(
                this._pt,
                E,
                "scaleY",
                E.scaleY,
                (v ? $i(E.scaleY, v + h) : h) - E.scaleY || 0,
                Wa
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              O.push(Ft, 0, a[Ft]),
                (d = V0(d)),
                E.svg
                  ? Xa(e, d, 0, T, 0, this)
                  : ((y = parseFloat(d.split(" ")[2]) || 0),
                    y !== E.zOrigin && fn(this, E, "zOrigin", E.zOrigin, y),
                    fn(this, a, m, Ao(c), Ao(d)));
              continue;
            } else if (m === "svgOrigin") {
              Xa(e, d, 1, T, 0, this);
              continue;
            } else if (m in Yu) {
              j0(this, E, m, u, v ? $i(u, v + d) : d);
              continue;
            } else if (m === "smoothOrigin") {
              fn(this, E, "smooth", E.smooth, d);
              continue;
            } else if (m === "force3D") {
              E[m] = d;
              continue;
            } else if (m === "transform") {
              Y0(this, d, e);
              continue;
            }
          } else m in a || (m = ki(m) || m);
          if (b || ((h || h === 0) && (u || u === 0) && !D0.test(d) && m in a))
            (g = (c + "").substr((u + "").length)),
              h || (h = 0),
              (y = ft(d) || (m in Xt.units ? Xt.units[m] : g)),
              g !== y && (u = _n(e, m, c, y)),
              (this._pt = new Nt(
                this._pt,
                b ? E : a,
                m,
                u,
                (v ? $i(u, v + h) : h) - u,
                !b && (y === "px" || m === "zIndex") && t.autoRound !== !1
                  ? C0
                  : Wa
              )),
              (this._pt.u = y || 0),
              g !== y && y !== "%" && ((this._pt.b = c), (this._pt.r = k0));
          else if (m in a) z0.call(this, e, m, c, v ? v + d : d);
          else if (m in e) this.add(e, m, c || e[m], v ? v + d : d, n, s);
          else if (m !== "parseTransform") {
            Ml(m, d);
            continue;
          }
          b || (m in a ? O.push(m, 0, a[m]) : O.push(m, 1, c || e[m])),
            o.push(m);
        }
      }
    S && Hu(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Nl())
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    else t.styles.revert();
  },
  get: Gr,
  aliases: Tr,
  getSetter: function (e, t, r) {
    var n = Tr[t];
    return (
      n && n.indexOf(",") < 0 && (t = n),
      t in en && t !== Ft && (e._gsap.x || Gr(e, "x"))
        ? r && _c === r
          ? t === "scale"
            ? R0
            : I0
          : (_c = r || {}) && (t === "scale" ? N0 : F0)
        : e.style && !El(e.style[t])
        ? A0
        : ~t.indexOf("-")
        ? L0
        : Ll(e, t)
    );
  },
  core: { _removeProperty: Kn, _getMatrix: Hl },
};
gt.utils.checkPrefix = ki;
gt.core.getStyleSaver = Gu;
(function (i, e, t, r) {
  var n = Rt(i + "," + e + "," + t, function (s) {
    en[s] = 1;
  });
  Rt(e, function (s) {
    (Xt.units[s] = "deg"), (Yu[s] = 1);
  }),
    (Tr[n[13]] = i + "," + e),
    Rt(r, function (s) {
      var o = s.split(":");
      Tr[o[1]] = n[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Rt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (i) {
    Xt.units[i] = "px";
  }
);
gt.registerPlugin(ql);
var C = gt.registerPlugin(ql) || gt;
C.core.Tween;
function Dc(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, r.key, r);
  }
}
function X0(i, e, t) {
  return e && Dc(i.prototype, e), t && Dc(i, t), i;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
  mo,
  jt,
  pn,
  mn,
  wi,
  Zu,
  Pn,
  ts,
  Qu,
  Wr,
  ur,
  Ju,
  eh = function () {
    return (
      it ||
      (typeof window < "u" && (it = window.gsap) && it.registerPlugin && it)
    );
  },
  th = 1,
  vi = [],
  se = [],
  kr = [],
  rs = Date.now,
  Ka = function (e, t) {
    return t;
  },
  K0 = function () {
    var e = ts.core,
      t = e.bridge || {},
      r = e._scrollers,
      n = e._proxies;
    r.push.apply(r, se),
      n.push.apply(n, kr),
      (se = r),
      (kr = n),
      (Ka = function (o, a) {
        return t[o](a);
      });
  },
  yn = function (e, t) {
    return ~kr.indexOf(e) && kr[kr.indexOf(e) + 1][t];
  },
  ns = function (e) {
    return !!~Qu.indexOf(e);
  },
  $t = function (e, t, r, n, s) {
    return e.addEventListener(t, r, { passive: n !== !1, capture: !!s });
  },
  yt = function (e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  },
  Xs = "scrollLeft",
  Ks = "scrollTop",
  Za = function () {
    return (Wr && Wr.isPressed) || se.cache++;
  },
  Lo = function (e, t) {
    var r = function n(s) {
      if (s || s === 0) {
        th && (jt.history.scrollRestoration = "manual");
        var o = Wr && Wr.isPressed;
        (s = n.v = Math.round(s) || (Wr && Wr.iOS ? 1 : 0)),
          e(s),
          (n.cacheID = se.cache),
          o && Ka("ss", s);
      } else
        (t || se.cache !== n.cacheID || Ka("ref")) &&
          ((n.cacheID = se.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (r.offset = 0), e && r;
  },
  Ot = {
    s: Xs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Lo(function (i) {
      return arguments.length
        ? jt.scrollTo(i, Xe.sc())
        : jt.pageXOffset || pn[Xs] || mn[Xs] || wi[Xs] || 0;
    }),
  },
  Xe = {
    s: Ks,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ot,
    sc: Lo(function (i) {
      return arguments.length
        ? jt.scrollTo(Ot.sc(), i)
        : jt.pageYOffset || pn[Ks] || mn[Ks] || wi[Ks] || 0;
    }),
  },
  Lt = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || it.utils.toArray)(e)[0] ||
      (typeof e == "string" && it.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  wn = function (e, t) {
    var r = t.s,
      n = t.sc;
    ns(e) && (e = pn.scrollingElement || mn);
    var s = se.indexOf(e),
      o = n === Xe.sc ? 1 : 2;
    !~s && (s = se.push(e) - 1), se[s + o] || $t(e, "scroll", Za);
    var a = se[s + o],
      l =
        a ||
        (se[s + o] =
          Lo(yn(e, r), !0) ||
          (ns(e)
            ? n
            : Lo(function (c) {
                return arguments.length ? (e[r] = c) : e[r];
              })));
    return (
      (l.target = e),
      a || (l.smooth = it.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Qa = function (e, t, r) {
    var n = e,
      s = e,
      o = rs(),
      a = o,
      l = t || 50,
      c = Math.max(500, l * 3),
      d = function (p, m) {
        var g = rs();
        m || g - o > l
          ? ((s = n), (n = p), (a = o), (o = g))
          : r
          ? (n += p)
          : (n = s + ((p - s) / (g - a)) * (o - a));
      },
      h = function () {
        (s = n = r ? 0 : n), (a = o = 0);
      },
      u = function (p) {
        var m = a,
          g = s,
          y = rs();
        return (
          (p || p === 0) && p !== n && d(p),
          o === a || y - a > c
            ? 0
            : ((n + (r ? g : -g)) / ((r ? y : o) - m)) * 1e3
        );
      };
    return { update: d, reset: h, getVelocity: u };
  },
  Hi = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Pc = function (e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  },
  rh = function () {
    (ts = it.core.globals().ScrollTrigger), ts && ts.core && K0();
  },
  nh = function (e) {
    return (
      (it = e || eh()),
      !mo &&
        it &&
        typeof document < "u" &&
        document.body &&
        ((jt = window),
        (pn = document),
        (mn = pn.documentElement),
        (wi = pn.body),
        (Qu = [jt, pn, mn, wi]),
        it.utils.clamp,
        (Ju = it.core.context || function () {}),
        (Pn = "onpointerenter" in wi ? "pointer" : "mouse"),
        (Zu = Ve.isTouch =
          jt.matchMedia &&
          jt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in jt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ur = Ve.eventTypes =
          (
            "ontouchstart" in mn
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in mn
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (th = 0);
        }, 500),
        rh(),
        (mo = 1)),
      mo
    );
  };
Ot.op = Xe;
se.cache = 0;
var Ve = (function () {
  function i(t) {
    this.init(t);
  }
  var e = i.prototype;
  return (
    (e.init = function (r) {
      mo || nh(it) || console.warn("Please gsap.registerPlugin(Observer)"),
        ts || rh();
      var n = r.tolerance,
        s = r.dragMinimum,
        o = r.type,
        a = r.target,
        l = r.lineHeight,
        c = r.debounce,
        d = r.preventDefault,
        h = r.onStop,
        u = r.onStopDelay,
        f = r.ignore,
        p = r.wheelSpeed,
        m = r.event,
        g = r.onDragStart,
        y = r.onDragEnd,
        v = r.onDrag,
        b = r.onPress,
        $ = r.onRelease,
        E = r.onRight,
        T = r.onLeft,
        S = r.onUp,
        O = r.onDown,
        D = r.onChangeX,
        x = r.onChangeY,
        L = r.onChange,
        w = r.onToggleX,
        P = r.onToggleY,
        k = r.onHover,
        R = r.onHoverEnd,
        I = r.onMove,
        N = r.ignoreCheck,
        q = r.isNormalizer,
        F = r.onGestureStart,
        M = r.onGestureEnd,
        j = r.onWheel,
        ne = r.onEnable,
        ue = r.onDisable,
        oe = r.onClick,
        ve = r.scrollSpeed,
        Ee = r.capture,
        ie = r.allowClicks,
        de = r.lockAxis,
        fe = r.onLockAxis;
      (this.target = a = Lt(a) || mn),
        (this.vars = r),
        f && (f = it.utils.toArray(f)),
        (n = n || 1e-9),
        (s = s || 0),
        (p = p || 1),
        (ve = ve || 1),
        (o = o || "wheel,touch,pointer"),
        (c = c !== !1),
        l || (l = parseFloat(jt.getComputedStyle(wi).lineHeight) || 22);
      var Te,
        Z,
        B,
        G,
        Q,
        pe,
        Oe,
        A = this,
        He = 0,
        Ke = 0,
        st = r.passive || !d,
        _e = wn(a, Ot),
        Zt = wn(a, Xe),
        cr = _e(),
        Lr = Zt(),
        qe =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          ur[0] === "pointerdown",
        mr = ns(a),
        Me = a.ownerDocument || pn,
        Ht = [0, 0, 0],
        ot = [0, 0, 0],
        at = 0,
        Ir = function () {
          return (at = rs());
        },
        xe = function (Y, he) {
          return (
            ((A.event = Y) && f && ~f.indexOf(Y.target)) ||
            (he && qe && Y.pointerType !== "touch") ||
            (N && N(Y, he))
          );
        },
        Rr = function () {
          A._vx.reset(), A._vy.reset(), Z.pause(), h && h(A);
        },
        gr = function () {
          var Y = (A.deltaX = Pc(Ht)),
            he = (A.deltaY = Pc(ot)),
            H = Math.abs(Y) >= n,
            ee = Math.abs(he) >= n;
          L && (H || ee) && L(A, Y, he, Ht, ot),
            H &&
              (E && A.deltaX > 0 && E(A),
              T && A.deltaX < 0 && T(A),
              D && D(A),
              w && A.deltaX < 0 != He < 0 && w(A),
              (He = A.deltaX),
              (Ht[0] = Ht[1] = Ht[2] = 0)),
            ee &&
              (O && A.deltaY > 0 && O(A),
              S && A.deltaY < 0 && S(A),
              x && x(A),
              P && A.deltaY < 0 != Ke < 0 && P(A),
              (Ke = A.deltaY),
              (ot[0] = ot[1] = ot[2] = 0)),
            (G || B) && (I && I(A), B && (v(A), (B = !1)), (G = !1)),
            pe && !(pe = !1) && fe && fe(A),
            Q && (j(A), (Q = !1)),
            (Te = 0);
        },
        rn = function (Y, he, H) {
          (Ht[H] += Y),
            (ot[H] += he),
            A._vx.update(Y),
            A._vy.update(he),
            c ? Te || (Te = requestAnimationFrame(gr)) : gr();
        },
        nn = function (Y, he) {
          de &&
            !Oe &&
            ((A.axis = Oe = Math.abs(Y) > Math.abs(he) ? "x" : "y"), (pe = !0)),
            Oe !== "y" && ((Ht[2] += Y), A._vx.update(Y, !0)),
            Oe !== "x" && ((ot[2] += he), A._vy.update(he, !0)),
            c ? Te || (Te = requestAnimationFrame(gr)) : gr();
        },
        vr = function (Y) {
          if (!xe(Y, 1)) {
            Y = Hi(Y, d);
            var he = Y.clientX,
              H = Y.clientY,
              ee = he - A.x,
              W = H - A.y,
              K = A.isDragging;
            (A.x = he),
              (A.y = H),
              (K ||
                Math.abs(A.startX - he) >= s ||
                Math.abs(A.startY - H) >= s) &&
                (v && (B = !0),
                K || (A.isDragging = !0),
                nn(ee, W),
                K || (g && g(A)));
          }
        },
        Nr = (A.onPress = function (J) {
          xe(J, 1) ||
            (J && J.button) ||
            ((A.axis = Oe = null),
            Z.pause(),
            (A.isPressed = !0),
            (J = Hi(J)),
            (He = Ke = 0),
            (A.startX = A.x = J.clientX),
            (A.startY = A.y = J.clientY),
            A._vx.reset(),
            A._vy.reset(),
            $t(q ? a : Me, ur[1], vr, st, !0),
            (A.deltaX = A.deltaY = 0),
            b && b(A));
        }),
        te = (A.onRelease = function (J) {
          if (!xe(J, 1)) {
            yt(q ? a : Me, ur[1], vr, !0);
            var Y = !isNaN(A.y - A.startY),
              he = A.isDragging,
              H =
                he &&
                (Math.abs(A.x - A.startX) > 3 || Math.abs(A.y - A.startY) > 3),
              ee = Hi(J);
            !H &&
              Y &&
              (A._vx.reset(),
              A._vy.reset(),
              d &&
                ie &&
                it.delayedCall(0.08, function () {
                  if (rs() - at > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (Me.createEvent) {
                      var W = Me.createEvent("MouseEvents");
                      W.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        jt,
                        1,
                        ee.screenX,
                        ee.screenY,
                        ee.clientX,
                        ee.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        J.target.dispatchEvent(W);
                    }
                  }
                })),
              (A.isDragging = A.isGesturing = A.isPressed = !1),
              h && he && !q && Z.restart(!0),
              y && he && y(A),
              $ && $(A, H);
          }
        }),
        Fr = function (Y) {
          return (
            Y.touches &&
            Y.touches.length > 1 &&
            (A.isGesturing = !0) &&
            F(Y, A.isDragging)
          );
        },
        Pt = function () {
          return (A.isGesturing = !1) || M(A);
        },
        kt = function (Y) {
          if (!xe(Y)) {
            var he = _e(),
              H = Zt();
            rn((he - cr) * ve, (H - Lr) * ve, 1),
              (cr = he),
              (Lr = H),
              h && Z.restart(!0);
          }
        },
        Ct = function (Y) {
          if (!xe(Y)) {
            (Y = Hi(Y, d)), j && (Q = !0);
            var he =
              (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? jt.innerHeight : 1) *
              p;
            rn(Y.deltaX * he, Y.deltaY * he, 0), h && !q && Z.restart(!0);
          }
        },
        Hr = function (Y) {
          if (!xe(Y)) {
            var he = Y.clientX,
              H = Y.clientY,
              ee = he - A.x,
              W = H - A.y;
            (A.x = he),
              (A.y = H),
              (G = !0),
              h && Z.restart(!0),
              (ee || W) && nn(ee, W);
          }
        },
        qr = function (Y) {
          (A.event = Y), k(A);
        },
        Qt = function (Y) {
          (A.event = Y), R(A);
        },
        En = function (Y) {
          return xe(Y) || (Hi(Y, d) && oe(A));
        };
      (Z = A._dc = it.delayedCall(u || 0.25, Rr).pause()),
        (A.deltaX = A.deltaY = 0),
        (A._vx = Qa(0, 50, !0)),
        (A._vy = Qa(0, 50, !0)),
        (A.scrollX = _e),
        (A.scrollY = Zt),
        (A.isDragging = A.isGesturing = A.isPressed = !1),
        Ju(this),
        (A.enable = function (J) {
          return (
            A.isEnabled ||
              ($t(mr ? Me : a, "scroll", Za),
              o.indexOf("scroll") >= 0 && $t(mr ? Me : a, "scroll", kt, st, Ee),
              o.indexOf("wheel") >= 0 && $t(a, "wheel", Ct, st, Ee),
              ((o.indexOf("touch") >= 0 && Zu) || o.indexOf("pointer") >= 0) &&
                ($t(a, ur[0], Nr, st, Ee),
                $t(Me, ur[2], te),
                $t(Me, ur[3], te),
                ie && $t(a, "click", Ir, !0, !0),
                oe && $t(a, "click", En),
                F && $t(Me, "gesturestart", Fr),
                M && $t(Me, "gestureend", Pt),
                k && $t(a, Pn + "enter", qr),
                R && $t(a, Pn + "leave", Qt),
                I && $t(a, Pn + "move", Hr)),
              (A.isEnabled = !0),
              J && J.type && Nr(J),
              ne && ne(A)),
            A
          );
        }),
        (A.disable = function () {
          A.isEnabled &&
            (vi.filter(function (J) {
              return J !== A && ns(J.target);
            }).length || yt(mr ? Me : a, "scroll", Za),
            A.isPressed &&
              (A._vx.reset(), A._vy.reset(), yt(q ? a : Me, ur[1], vr, !0)),
            yt(mr ? Me : a, "scroll", kt, Ee),
            yt(a, "wheel", Ct, Ee),
            yt(a, ur[0], Nr, Ee),
            yt(Me, ur[2], te),
            yt(Me, ur[3], te),
            yt(a, "click", Ir, !0),
            yt(a, "click", En),
            yt(Me, "gesturestart", Fr),
            yt(Me, "gestureend", Pt),
            yt(a, Pn + "enter", qr),
            yt(a, Pn + "leave", Qt),
            yt(a, Pn + "move", Hr),
            (A.isEnabled = A.isPressed = A.isDragging = !1),
            ue && ue(A));
        }),
        (A.kill = A.revert =
          function () {
            A.disable();
            var J = vi.indexOf(A);
            J >= 0 && vi.splice(J, 1), Wr === A && (Wr = 0);
          }),
        vi.push(A),
        q && ns(a) && (Wr = A),
        A.enable(m);
    }),
    X0(i, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
Ve.version = "3.12.5";
Ve.create = function (i) {
  return new Ve(i);
};
Ve.register = nh;
Ve.getAll = function () {
  return vi.slice();
};
Ve.getById = function (i) {
  return vi.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
eh() && it.registerPlugin(Ve);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var V,
  fi,
  le,
  Ce,
  hr,
  Se,
  ih,
  Io,
  ws,
  is,
  Wi,
  Zs,
  ut,
  Qo,
  Ja,
  wt,
  kc,
  Cc,
  pi,
  sh,
  ya,
  oh,
  _t,
  el,
  ah,
  lh,
  on,
  tl,
  Bl,
  Si,
  zl,
  Ro,
  rl,
  $a,
  Qs = 1,
  ht = Date.now,
  ba = ht(),
  sr = 0,
  ji = 0,
  Ac = function (e, t, r) {
    var n = Vt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
  },
  Lc = function (e, t) {
    return t && (!Vt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Z0 = function i() {
    return ji && requestAnimationFrame(i);
  },
  Ic = function () {
    return (Qo = 1);
  },
  Rc = function () {
    return (Qo = 0);
  },
  wr = function (e) {
    return e;
  },
  Yi = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ch = function () {
    return typeof window < "u";
  },
  dh = function () {
    return V || (ch() && (V = window.gsap) && V.registerPlugin && V);
  },
  Zn = function (e) {
    return !!~ih.indexOf(e);
  },
  uh = function (e) {
    return (
      (e === "Height" ? zl : le["inner" + e]) ||
      hr["client" + e] ||
      Se["client" + e]
    );
  },
  hh = function (e) {
    return (
      yn(e, "getBoundingClientRect") ||
      (Zn(e)
        ? function () {
            return (bo.width = le.innerWidth), (bo.height = zl), bo;
          }
        : function () {
            return Ur(e);
          })
    );
  },
  Q0 = function (e, t, r) {
    var n = r.d,
      s = r.d2,
      o = r.a;
    return (o = yn(e, "getBoundingClientRect"))
      ? function () {
          return o()[n];
        }
      : function () {
          return (t ? uh(s) : e["client" + s]) || 0;
        };
  },
  J0 = function (e, t) {
    return !t || ~kr.indexOf(e)
      ? hh(e)
      : function () {
          return bo;
        };
  },
  Or = function (e, t) {
    var r = t.s,
      n = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (o = yn(e, r))
        ? o() - hh(e)()[s]
        : Zn(e)
        ? (hr[r] || Se[r]) - uh(n)
        : e[r] - e["offset" + n]
    );
  },
  Js = function (e, t) {
    for (var r = 0; r < pi.length; r += 3)
      (!t || ~t.indexOf(pi[r + 1])) && e(pi[r], pi[r + 1], pi[r + 2]);
  },
  Vt = function (e) {
    return typeof e == "string";
  },
  Mt = function (e) {
    return typeof e == "function";
  },
  Xi = function (e) {
    return typeof e == "number";
  },
  kn = function (e) {
    return typeof e == "object";
  },
  qi = function (e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  },
  _a = function (e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  si = Math.abs,
  fh = "left",
  ph = "top",
  Vl = "right",
  Gl = "bottom",
  Un = "width",
  Wn = "height",
  ss = "Right",
  os = "Left",
  as = "Top",
  ls = "Bottom",
  Ge = "padding",
  tr = "margin",
  Ci = "Width",
  Ul = "Height",
  je = "px",
  rr = function (e) {
    return le.getComputedStyle(e);
  },
  ep = function (e) {
    var t = rr(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Nc = function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Ur = function (e, t) {
    var r =
        t &&
        rr(e)[Ja] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        V.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      n = e.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  },
  No = function (e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  mh = function (e) {
    var t = [],
      r = e.labels,
      n = e.duration(),
      s;
    for (s in r) t.push(r[s] / n);
    return t;
  },
  tp = function (e) {
    return function (t) {
      return V.utils.snap(mh(e), t);
    };
  },
  Wl = function (e) {
    var t = V.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (n, s) {
          return n - s;
        });
    return r
      ? function (n, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return t(n);
          if (s > 0) {
            for (n -= o, a = 0; a < r.length; a++) if (r[a] >= n) return r[a];
            return r[a - 1];
          } else for (a = r.length, n += o; a--; ) if (r[a] <= n) return r[a];
          return r[0];
        }
      : function (n, s, o) {
          o === void 0 && (o = 0.001);
          var a = t(n);
          return !s || Math.abs(a - n) < o || a - n < 0 == s < 0
            ? a
            : t(s < 0 ? n - e : n + e);
        };
  },
  rp = function (e) {
    return function (t, r) {
      return Wl(mh(e))(t, r.direction);
    };
  },
  eo = function (e, t, r, n) {
    return r.split(",").forEach(function (s) {
      return e(t, s, n);
    });
  },
  Je = function (e, t, r, n, s) {
    return e.addEventListener(t, r, { passive: !n, capture: !!s });
  },
  Qe = function (e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  },
  to = function (e, t, r) {
    (r = r && r.wheelHandler), r && (e(t, "wheel", r), e(t, "touchmove", r));
  },
  Fc = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  ro = { toggleActions: "play", anticipatePin: 0 },
  Fo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  go = function (e, t) {
    if (Vt(e)) {
      var r = e.indexOf("="),
        n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in Fo
            ? Fo[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  no = function (e, t, r, n, s, o, a, l) {
    var c = s.startColor,
      d = s.endColor,
      h = s.fontSize,
      u = s.indent,
      f = s.fontWeight,
      p = Ce.createElement("div"),
      m = Zn(r) || yn(r, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      y = m ? Se : r,
      v = e.indexOf("start") !== -1,
      b = v ? c : d,
      $ =
        "border-color:" +
        b +
        ";font-size:" +
        h +
        ";color:" +
        b +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      ($ += "position:" + ((g || l) && m ? "fixed;" : "absolute;")),
      (g || l || !m) &&
        ($ += (n === Xe ? Vl : Gl) + ":" + (o + parseFloat(u)) + "px;"),
      a &&
        ($ +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = $),
      (p.innerText = t || t === 0 ? e + "-" + t : e),
      y.children[0] ? y.insertBefore(p, y.children[0]) : y.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      vo(p, 0, n, v),
      p
    );
  },
  vo = function (e, t, r, n) {
    var s = { display: "block" },
      o = r[n ? "os2" : "p2"],
      a = r[n ? "p2" : "os2"];
    (e._isFlipped = n),
      (s[r.a + "Percent"] = n ? -100 : 0),
      (s[r.a] = n ? "1px" : 0),
      (s["border" + o + Ci] = 1),
      (s["border" + a + Ci] = 0),
      (s[r.p] = t + "px"),
      V.set(e, s);
  },
  re = [],
  nl = {},
  Ss,
  Hc = function () {
    return ht() - sr > 34 && (Ss || (Ss = requestAnimationFrame(jr)));
  },
  oi = function () {
    (!_t || !_t.isPressed || _t.startX > Se.clientWidth) &&
      (se.cache++,
      _t ? Ss || (Ss = requestAnimationFrame(jr)) : jr(),
      sr || Jn("scrollStart"),
      (sr = ht()));
  },
  wa = function () {
    (lh = le.innerWidth), (ah = le.innerHeight);
  },
  Ki = function () {
    se.cache++,
      !ut &&
        !oh &&
        !Ce.fullscreenElement &&
        !Ce.webkitFullscreenElement &&
        (!el ||
          lh !== le.innerWidth ||
          Math.abs(le.innerHeight - ah) > le.innerHeight * 0.25) &&
        Io.restart(!0);
  },
  Qn = {},
  np = [],
  gh = function i() {
    return Qe(U, "scrollEnd", i) || In(!0);
  },
  Jn = function (e) {
    return (
      (Qn[e] &&
        Qn[e].map(function (t) {
          return t();
        })) ||
      np
    );
  },
  zt = [],
  vh = function (e) {
    for (var t = 0; t < zt.length; t += 5)
      (!e || (zt[t + 4] && zt[t + 4].query === e)) &&
        ((zt[t].style.cssText = zt[t + 1]),
        zt[t].getBBox && zt[t].setAttribute("transform", zt[t + 2] || ""),
        (zt[t + 3].uncache = 1));
  },
  jl = function (e, t) {
    var r;
    for (wt = 0; wt < re.length; wt++)
      (r = re[wt]),
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    (Ro = !0), t && vh(t), t || Jn("revert");
  },
  yh = function (e, t) {
    se.cache++,
      (t || !St) &&
        se.forEach(function (r) {
          return Mt(r) && r.cacheID++ && (r.rec = 0);
        }),
      Vt(e) && (le.history.scrollRestoration = Bl = e);
  },
  St,
  jn = 0,
  qc,
  ip = function () {
    if (qc !== jn) {
      var e = (qc = jn);
      requestAnimationFrame(function () {
        return e === jn && In(!0);
      });
    }
  },
  $h = function () {
    Se.appendChild(Si),
      (zl = (!_t && Si.offsetHeight) || le.innerHeight),
      Se.removeChild(Si);
  },
  Bc = function (e) {
    return ws(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  },
  In = function (e, t) {
    if (sr && !e && !Ro) {
      Je(U, "scrollEnd", gh);
      return;
    }
    $h(),
      (St = U.isRefreshing = !0),
      se.forEach(function (n) {
        return Mt(n) && ++n.cacheID && (n.rec = n());
      });
    var r = Jn("refreshInit");
    sh && U.sort(),
      t || jl(),
      se.forEach(function (n) {
        Mt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
      }),
      re.slice(0).forEach(function (n) {
        return n.refresh();
      }),
      (Ro = !1),
      re.forEach(function (n) {
        if (n._subPinOffset && n.pin) {
          var s = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = n.pin[s];
          n.revert(!0, 1), n.adjustPinSpacing(n.pin[s] - o), n.refresh();
        }
      }),
      (rl = 1),
      Bc(!0),
      re.forEach(function (n) {
        var s = Or(n.scroller, n._dir),
          o = n.vars.end === "max" || (n._endClamp && n.end > s),
          a = n._startClamp && n.start >= s;
        (o || a) &&
          n.setPositions(
            a ? s - 1 : n.start,
            o ? Math.max(a ? s : n.start + 1, s) : n.end,
            !0
          );
      }),
      Bc(!1),
      (rl = 0),
      r.forEach(function (n) {
        return n && n.render && n.render(-1);
      }),
      se.forEach(function (n) {
        Mt(n) &&
          (n.smooth &&
            requestAnimationFrame(function () {
              return (n.target.style.scrollBehavior = "smooth");
            }),
          n.rec && n(n.rec));
      }),
      yh(Bl, 1),
      Io.pause(),
      jn++,
      (St = 2),
      jr(2),
      re.forEach(function (n) {
        return Mt(n.vars.onRefresh) && n.vars.onRefresh(n);
      }),
      (St = U.isRefreshing = !1),
      Jn("refresh");
  },
  il = 0,
  yo = 1,
  cs,
  jr = function (e) {
    if (e === 2 || (!St && !Ro)) {
      (U.isUpdating = !0), cs && cs.update(0);
      var t = re.length,
        r = ht(),
        n = r - ba >= 50,
        s = t && re[0].scroll();
      if (
        ((yo = il > s ? -1 : 1),
        St || (il = s),
        n &&
          (sr && !Qo && r - sr > 200 && ((sr = 0), Jn("scrollEnd")),
          (Wi = ba),
          (ba = r)),
        yo < 0)
      ) {
        for (wt = t; wt-- > 0; ) re[wt] && re[wt].update(0, n);
        yo = 1;
      } else for (wt = 0; wt < t; wt++) re[wt] && re[wt].update(0, n);
      U.isUpdating = !1;
    }
    Ss = 0;
  },
  sl = [
    fh,
    ph,
    Gl,
    Vl,
    tr + ls,
    tr + ss,
    tr + as,
    tr + os,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  $o = sl.concat([
    Un,
    Wn,
    "boxSizing",
    "max" + Ci,
    "max" + Ul,
    "position",
    tr,
    Ge,
    Ge + as,
    Ge + ss,
    Ge + ls,
    Ge + os,
  ]),
  sp = function (e, t, r) {
    Ei(r);
    var n = e._gsap;
    if (n.spacerIsNative) Ei(n.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Sa = function (e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var s = sl.length, o = t.style, a = e.style, l; s--; )
        (l = sl[s]), (o[l] = r[l]);
      (o.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (o.display = "inline-block"),
        (a[Gl] = a[Vl] = "auto"),
        (o.flexBasis = r.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Un] = No(e, Ot) + je),
        (o[Wn] = No(e, Xe) + je),
        (o[Ge] = a[tr] = a[ph] = a[fh] = "0"),
        Ei(n),
        (a[Un] = a["max" + Ci] = r[Un]),
        (a[Wn] = a["max" + Ul] = r[Wn]),
        (a[Ge] = r[Ge]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  op = /([A-Z])/g,
  Ei = function (e) {
    if (e) {
      var t = e.t.style,
        r = e.length,
        n = 0,
        s,
        o;
      for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; n < r; n += 2)
        (o = e[n + 1]),
          (s = e[n]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace(op, "-$1").toLowerCase());
    }
  },
  io = function (e) {
    for (var t = $o.length, r = e.style, n = [], s = 0; s < t; s++)
      n.push($o[s], r[$o[s]]);
    return (n.t = e), n;
  },
  ap = function (e, t, r) {
    for (var n = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), n.push(a, a in t ? t[a] : e[o + 1]);
    return (n.t = e.t), n;
  },
  bo = { left: 0, top: 0 },
  zc = function (e, t, r, n, s, o, a, l, c, d, h, u, f, p) {
    Mt(e) && (e = e(l)),
      Vt(e) &&
        e.substr(0, 3) === "max" &&
        (e = u + (e.charAt(4) === "=" ? go("0" + e.substr(3), r) : 0));
    var m = f ? f.time() : 0,
      g,
      y,
      v;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Xi(e)))
      f &&
        (e = V.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          u,
          e
        )),
        a && vo(a, r, n, !0);
    else {
      Mt(t) && (t = t(l));
      var b = (e || "0").split(" "),
        $,
        E,
        T,
        S;
      (v = Lt(t, l) || Se),
        ($ = Ur(v) || {}),
        (!$ || (!$.left && !$.top)) &&
          rr(v).display === "none" &&
          ((S = v.style.display),
          (v.style.display = "block"),
          ($ = Ur(v)),
          S ? (v.style.display = S) : v.style.removeProperty("display")),
        (E = go(b[0], $[n.d])),
        (T = go(b[1] || "0", r)),
        (e = $[n.p] - c[n.p] - d + E + s - T),
        a && vo(a, T, n, r - T < 20 || (a._isStart && T > 20)),
        (r -= r - T);
    }
    if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), o)) {
      var O = e + r,
        D = o._isStart;
      (g = "scroll" + n.d2),
        vo(
          o,
          O,
          n,
          (D && O > 20) ||
            (!D && (h ? Math.max(Se[g], hr[g]) : o.parentNode[g]) <= O + 1)
        ),
        h &&
          ((c = Ur(a)),
          h && (o.style[n.op.p] = c[n.op.p] - n.op.m - o._offset + je));
    }
    return (
      f &&
        v &&
        ((g = Ur(v)),
        f.seek(u),
        (y = Ur(v)),
        (f._caScrollDist = g[n.p] - y[n.p]),
        (e = (e / f._caScrollDist) * u)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  lp = /(webkit|moz|length|cssText|inset)/i,
  Vc = function (e, t, r, n) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === Se) {
        (e._stOrig = s.cssText), (a = rr(e));
        for (o in a)
          !+o &&
            !lp.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = r), (s.left = n);
      } else s.cssText = e._stOrig;
      (V.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  bh = function (e, t, r) {
    var n = t,
      s = n;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== n &&
          a !== s &&
          Math.abs(a - n) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), r && r()),
        (s = n),
        (n = o),
        o
      );
    };
  },
  so = function (e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), V.set(e, n);
  },
  Gc = function (e, t) {
    var r = wn(e, t),
      n = "_scroll" + t.p2,
      s = function o(a, l, c, d, h) {
        var u = o.tween,
          f = l.onComplete,
          p = {};
        c = c || r();
        var m = bh(r, c, function () {
          u.kill(), (o.tween = 0);
        });
        return (
          (h = (d && h) || 0),
          (d = d || a - c),
          u && u.kill(),
          (l[n] = a),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[n] = function () {
            return m(c + d * u.ratio + h * u.ratio * u.ratio);
          }),
          (l.onUpdate = function () {
            se.cache++, o.tween && jr();
          }),
          (l.onComplete = function () {
            (o.tween = 0), f && f.call(u);
          }),
          (u = o.tween = V.to(e, l)),
          u
        );
      };
    return (
      (e[n] = r),
      (r.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Je(e, "wheel", r.wheelHandler),
      U.isTouch && Je(e, "touchmove", r.wheelHandler),
      s
    );
  },
  U = (function () {
    function i(t, r) {
      fi ||
        i.register(V) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        tl(this),
        this.init(t, r);
    }
    var e = i.prototype;
    return (
      (e.init = function (r, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !ji)
        ) {
          this.update = this.refresh = this.kill = wr;
          return;
        }
        r = Nc(Vt(r) || Xi(r) || r.nodeType ? { trigger: r } : r, ro);
        var s = r,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          d = s.onRefresh,
          h = s.scrub,
          u = s.trigger,
          f = s.pin,
          p = s.pinSpacing,
          m = s.invalidateOnRefresh,
          g = s.anticipatePin,
          y = s.onScrubComplete,
          v = s.onSnapComplete,
          b = s.once,
          $ = s.snap,
          E = s.pinReparent,
          T = s.pinSpacer,
          S = s.containerAnimation,
          O = s.fastScrollEnd,
          D = s.preventOverlaps,
          x =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? Ot
              : Xe,
          L = !h && h !== 0,
          w = Lt(r.scroller || le),
          P = V.core.getCache(w),
          k = Zn(w),
          R =
            ("pinType" in r
              ? r.pinType
              : yn(w, "pinType") || (k && "fixed")) === "fixed",
          I = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          N = L && r.toggleActions.split(" "),
          q = "markers" in r ? r.markers : ro.markers,
          F = k ? 0 : parseFloat(rr(w)["border" + x.p2 + Ci]) || 0,
          M = this,
          j =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(M);
            },
          ne = Q0(w, k, x),
          ue = J0(w, k),
          oe = 0,
          ve = 0,
          Ee = 0,
          ie = wn(w, x),
          de,
          fe,
          Te,
          Z,
          B,
          G,
          Q,
          pe,
          Oe,
          A,
          He,
          Ke,
          st,
          _e,
          Zt,
          cr,
          Lr,
          qe,
          mr,
          Me,
          Ht,
          ot,
          at,
          Ir,
          xe,
          Rr,
          gr,
          rn,
          nn,
          vr,
          Nr,
          te,
          Fr,
          Pt,
          kt,
          Ct,
          Hr,
          qr,
          Qt;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = x),
          (g *= 45),
          (M.scroller = w),
          (M.scroll = S ? S.time.bind(S) : ie),
          (Z = ie()),
          (M.vars = r),
          (n = n || r.animation),
          "refreshPriority" in r &&
            ((sh = 1), r.refreshPriority === -9999 && (cs = M)),
          (P.tweenScroll = P.tweenScroll || {
            top: Gc(w, Xe),
            left: Gc(w, Ot),
          }),
          (M.tweenTo = de = P.tweenScroll[x.p]),
          (M.scrubDuration = function (H) {
            (Fr = Xi(H) && H),
              Fr
                ? te
                  ? te.duration(H)
                  : (te = V.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Fr,
                      paused: !0,
                      onComplete: function () {
                        return y && y(M);
                      },
                    }))
                : (te && te.progress(1).kill(), (te = 0));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !M.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (M.animation = n.pause()),
            (n.scrollTrigger = M),
            M.scrubDuration(h),
            (vr = 0),
            l || (l = n.vars.id)),
          $ &&
            ((!kn($) || $.push) && ($ = { snapTo: $ }),
            "scrollBehavior" in Se.style &&
              V.set(k ? [Se, hr] : w, { scrollBehavior: "auto" }),
            se.forEach(function (H) {
              return (
                Mt(H) &&
                H.target === (k ? Ce.scrollingElement || hr : w) &&
                (H.smooth = !1)
              );
            }),
            (Te = Mt($.snapTo)
              ? $.snapTo
              : $.snapTo === "labels"
              ? tp(n)
              : $.snapTo === "labelsDirectional"
              ? rp(n)
              : $.directional !== !1
              ? function (H, ee) {
                  return Wl($.snapTo)(H, ht() - ve < 500 ? 0 : ee.direction);
                }
              : V.utils.snap($.snapTo)),
            (Pt = $.duration || { min: 0.1, max: 2 }),
            (Pt = kn(Pt) ? is(Pt.min, Pt.max) : is(Pt, Pt)),
            (kt = V.delayedCall($.delay || Fr / 2 || 0.1, function () {
              var H = ie(),
                ee = ht() - ve < 500,
                W = de.tween;
              if (
                (ee || Math.abs(M.getVelocity()) < 10) &&
                !W &&
                !Qo &&
                oe !== H
              ) {
                var K = (H - G) / _e,
                  Ze = n && !L ? n.totalProgress() : K,
                  ae = ee ? 0 : ((Ze - Nr) / (ht() - Wi)) * 1e3 || 0,
                  Be = V.utils.clamp(-K, 1 - K, (si(ae / 2) * ae) / 0.185),
                  lt = K + ($.inertia === !1 ? 0 : Be),
                  Re,
                  De,
                  ye = $,
                  dr = ye.onStart,
                  ke = ye.onInterrupt,
                  qt = ye.onComplete;
                if (
                  ((Re = Te(lt, M)),
                  Xi(Re) || (Re = lt),
                  (De = Math.round(G + Re * _e)),
                  H <= Q && H >= G && De !== H)
                ) {
                  if (W && !W._initted && W.data <= si(De - H)) return;
                  $.inertia === !1 && (Be = Re - K),
                    de(
                      De,
                      {
                        duration: Pt(
                          si(
                            (Math.max(si(lt - Ze), si(Re - Ze)) * 0.185) /
                              ae /
                              0.05 || 0
                          )
                        ),
                        ease: $.ease || "power3",
                        data: si(De - H),
                        onInterrupt: function () {
                          return kt.restart(!0) && ke && ke(M);
                        },
                        onComplete: function () {
                          M.update(),
                            (oe = ie()),
                            n &&
                              (te
                                ? te.resetTo(
                                    "totalProgress",
                                    Re,
                                    n._tTime / n._tDur
                                  )
                                : n.progress(Re)),
                            (vr = Nr =
                              n && !L ? n.totalProgress() : M.progress),
                            v && v(M),
                            qt && qt(M);
                        },
                      },
                      H,
                      Be * _e,
                      De - H - Be * _e
                    ),
                    dr && dr(M, de.tween);
                }
              } else M.isActive && oe !== H && kt.restart(!0);
            }).pause())),
          l && (nl[l] = M),
          (u = M.trigger = Lt(u || (f !== !0 && f))),
          (Qt = u && u._gsap && u._gsap.stRevert),
          Qt && (Qt = Qt(M)),
          (f = f === !0 ? u : Lt(f)),
          Vt(a) && (a = { targets: u, className: a }),
          f &&
            (p === !1 ||
              p === tr ||
              (p =
                !p &&
                f.parentNode &&
                f.parentNode.style &&
                rr(f.parentNode).display === "flex"
                  ? !1
                  : Ge),
            (M.pin = f),
            (fe = V.core.getCache(f)),
            fe.spacer
              ? (Zt = fe.pinState)
              : (T &&
                  ((T = Lt(T)),
                  T && !T.nodeType && (T = T.current || T.nativeElement),
                  (fe.spacerIsNative = !!T),
                  T && (fe.spacerState = io(T))),
                (fe.spacer = qe = T || Ce.createElement("div")),
                qe.classList.add("pin-spacer"),
                l && qe.classList.add("pin-spacer-" + l),
                (fe.pinState = Zt = io(f))),
            r.force3D !== !1 && V.set(f, { force3D: !0 }),
            (M.spacer = qe = fe.spacer),
            (nn = rr(f)),
            (Ir = nn[p + x.os2]),
            (Me = V.getProperty(f)),
            (Ht = V.quickSetter(f, x.a, je)),
            Sa(f, qe, nn),
            (Lr = io(f))),
          q)
        ) {
          (Ke = kn(q) ? Nc(q, Fc) : Fc),
            (A = no("scroller-start", l, w, x, Ke, 0)),
            (He = no("scroller-end", l, w, x, Ke, 0, A)),
            (mr = A["offset" + x.op.d2]);
          var En = Lt(yn(w, "content") || w);
          (pe = this.markerStart = no("start", l, En, x, Ke, mr, 0, S)),
            (Oe = this.markerEnd = no("end", l, En, x, Ke, mr, 0, S)),
            S && (qr = V.quickSetter([pe, Oe], x.a, je)),
            !R &&
              !(kr.length && yn(w, "fixedMarkers") === !0) &&
              (ep(k ? Se : w),
              V.set([A, He], { force3D: !0 }),
              (Rr = V.quickSetter(A, x.a, je)),
              (rn = V.quickSetter(He, x.a, je)));
        }
        if (S) {
          var J = S.vars.onUpdate,
            Y = S.vars.onUpdateParams;
          S.eventCallback("onUpdate", function () {
            M.update(0, 0, 1), J && J.apply(S, Y || []);
          });
        }
        if (
          ((M.previous = function () {
            return re[re.indexOf(M) - 1];
          }),
          (M.next = function () {
            return re[re.indexOf(M) + 1];
          }),
          (M.revert = function (H, ee) {
            if (!ee) return M.kill(!0);
            var W = H !== !1 || !M.enabled,
              K = ut;
            W !== M.isReverted &&
              (W &&
                ((Ct = Math.max(ie(), M.scroll.rec || 0)),
                (Ee = M.progress),
                (Hr = n && n.progress())),
              pe &&
                [pe, Oe, A, He].forEach(function (Ze) {
                  return (Ze.style.display = W ? "none" : "block");
                }),
              W && ((ut = M), M.update(W)),
              f &&
                (!E || !M.isActive) &&
                (W ? sp(f, qe, Zt) : Sa(f, qe, rr(f), xe)),
              W || M.update(W),
              (ut = K),
              (M.isReverted = W));
          }),
          (M.refresh = function (H, ee, W, K) {
            if (!((ut || !M.enabled) && !ee)) {
              if (f && H && sr) {
                Je(i, "scrollEnd", gh);
                return;
              }
              !St && j && j(M),
                (ut = M),
                de.tween && !W && (de.tween.kill(), (de.tween = 0)),
                te && te.pause(),
                m && n && n.revert({ kill: !1 }).invalidate(),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1);
              var Ze = ne(),
                ae = ue(),
                Be = S ? S.duration() : Or(w, x),
                lt = _e <= 0.01,
                Re = 0,
                De = K || 0,
                ye = kn(W) ? W.end : r.end,
                dr = r.endTrigger || u,
                ke = kn(W)
                  ? W.start
                  : r.start || (r.start === 0 || !u ? 0 : f ? "0 0" : "0 100%"),
                qt = (M.pinnedContainer =
                  r.pinnedContainer && Lt(r.pinnedContainer, M)),
                yr = (u && Math.max(0, re.indexOf(M))) || 0,
                rt = yr,
                nt,
                ct,
                Tn,
                Ws,
                dt,
                We,
                $r,
                la,
                hc,
                Ii,
                br,
                Ri,
                js;
              for (
                q &&
                kn(W) &&
                ((Ri = V.getProperty(A, x.p)), (js = V.getProperty(He, x.p)));
                rt--;

              )
                (We = re[rt]),
                  We.end || We.refresh(0, 1) || (ut = M),
                  ($r = We.pin),
                  $r &&
                    ($r === u || $r === f || $r === qt) &&
                    !We.isReverted &&
                    (Ii || (Ii = []), Ii.unshift(We), We.revert(!0, !0)),
                  We !== re[rt] && (yr--, rt--);
              for (
                Mt(ke) && (ke = ke(M)),
                  ke = Ac(ke, "start", M),
                  G =
                    zc(
                      ke,
                      u,
                      Ze,
                      x,
                      ie(),
                      pe,
                      A,
                      M,
                      ae,
                      F,
                      R,
                      Be,
                      S,
                      M._startClamp && "_startClamp"
                    ) || (f ? -0.001 : 0),
                  Mt(ye) && (ye = ye(M)),
                  Vt(ye) &&
                    !ye.indexOf("+=") &&
                    (~ye.indexOf(" ")
                      ? (ye = (Vt(ke) ? ke.split(" ")[0] : "") + ye)
                      : ((Re = go(ye.substr(2), Ze)),
                        (ye = Vt(ke)
                          ? ke
                          : (S
                              ? V.utils.mapRange(
                                  0,
                                  S.duration(),
                                  S.scrollTrigger.start,
                                  S.scrollTrigger.end,
                                  G
                                )
                              : G) + Re),
                        (dr = u))),
                  ye = Ac(ye, "end", M),
                  Q =
                    Math.max(
                      G,
                      zc(
                        ye || (dr ? "100% 0" : Be),
                        dr,
                        Ze,
                        x,
                        ie() + Re,
                        Oe,
                        He,
                        M,
                        ae,
                        F,
                        R,
                        Be,
                        S,
                        M._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Re = 0,
                  rt = yr;
                rt--;

              )
                (We = re[rt]),
                  ($r = We.pin),
                  $r &&
                    We.start - We._pinPush <= G &&
                    !S &&
                    We.end > 0 &&
                    ((nt =
                      We.end -
                      (M._startClamp ? Math.max(0, We.start) : We.start)),
                    (($r === u && We.start - We._pinPush < G) || $r === qt) &&
                      isNaN(ke) &&
                      (Re += nt * (1 - We.progress)),
                    $r === f && (De += nt));
              if (
                ((G += Re),
                (Q += Re),
                M._startClamp && (M._startClamp += Re),
                M._endClamp &&
                  !St &&
                  ((M._endClamp = Q || -0.001), (Q = Math.min(Q, Or(w, x)))),
                (_e = Q - G || ((G -= 0.01) && 0.001)),
                lt && (Ee = V.utils.clamp(0, 1, V.utils.normalize(G, Q, Ct))),
                (M._pinPush = De),
                pe &&
                  Re &&
                  ((nt = {}),
                  (nt[x.a] = "+=" + Re),
                  qt && (nt[x.p] = "-=" + ie()),
                  V.set([pe, Oe], nt)),
                f && !(rl && M.end >= Or(w, x)))
              )
                (nt = rr(f)),
                  (Ws = x === Xe),
                  (Tn = ie()),
                  (ot = parseFloat(Me(x.a)) + De),
                  !Be &&
                    Q > 1 &&
                    ((br = (k ? Ce.scrollingElement || hr : w).style),
                    (br = {
                      style: br,
                      value: br["overflow" + x.a.toUpperCase()],
                    }),
                    k &&
                      rr(Se)["overflow" + x.a.toUpperCase()] !== "scroll" &&
                      (br.style["overflow" + x.a.toUpperCase()] = "scroll")),
                  Sa(f, qe, nt),
                  (Lr = io(f)),
                  (ct = Ur(f, !0)),
                  (la = R && wn(w, Ws ? Ot : Xe)()),
                  p
                    ? ((xe = [p + x.os2, _e + De + je]),
                      (xe.t = qe),
                      (rt = p === Ge ? No(f, x) + _e + De : 0),
                      rt &&
                        (xe.push(x.d, rt + je),
                        qe.style.flexBasis !== "auto" &&
                          (qe.style.flexBasis = rt + je)),
                      Ei(xe),
                      qt &&
                        re.forEach(function (Ni) {
                          Ni.pin === qt &&
                            Ni.vars.pinSpacing !== !1 &&
                            (Ni._subPinOffset = !0);
                        }),
                      R && ie(Ct))
                    : ((rt = No(f, x)),
                      rt &&
                        qe.style.flexBasis !== "auto" &&
                        (qe.style.flexBasis = rt + je)),
                  R &&
                    ((dt = {
                      top: ct.top + (Ws ? Tn - G : la) + je,
                      left: ct.left + (Ws ? la : Tn - G) + je,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (dt[Un] = dt["max" + Ci] = Math.ceil(ct.width) + je),
                    (dt[Wn] = dt["max" + Ul] = Math.ceil(ct.height) + je),
                    (dt[tr] =
                      dt[tr + as] =
                      dt[tr + ss] =
                      dt[tr + ls] =
                      dt[tr + os] =
                        "0"),
                    (dt[Ge] = nt[Ge]),
                    (dt[Ge + as] = nt[Ge + as]),
                    (dt[Ge + ss] = nt[Ge + ss]),
                    (dt[Ge + ls] = nt[Ge + ls]),
                    (dt[Ge + os] = nt[Ge + os]),
                    (cr = ap(Zt, dt, E)),
                    St && ie(0)),
                  n
                    ? ((hc = n._initted),
                      ya(1),
                      n.render(n.duration(), !0, !0),
                      (at = Me(x.a) - ot + _e + De),
                      (gr = Math.abs(_e - at) > 1),
                      R && gr && cr.splice(cr.length - 2, 2),
                      n.render(0, !0, !0),
                      hc || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      ya(0))
                    : (at = _e),
                  br &&
                    (br.value
                      ? (br.style["overflow" + x.a.toUpperCase()] = br.value)
                      : br.style.removeProperty("overflow-" + x.a));
              else if (u && ie() && !S)
                for (ct = u.parentNode; ct && ct !== Se; )
                  ct._pinOffset && ((G -= ct._pinOffset), (Q -= ct._pinOffset)),
                    (ct = ct.parentNode);
              Ii &&
                Ii.forEach(function (Ni) {
                  return Ni.revert(!1, !0);
                }),
                (M.start = G),
                (M.end = Q),
                (Z = B = St ? Ct : ie()),
                !S && !St && (Z < Ct && ie(Ct), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (ve = ht()),
                kt && ((oe = -1), kt.restart(!0)),
                (ut = 0),
                n &&
                  L &&
                  (n._initted || Hr) &&
                  n.progress() !== Hr &&
                  n.progress(Hr || 0, !0).render(n.time(), !0, !0),
                (lt || Ee !== M.progress || S || m) &&
                  (n &&
                    !L &&
                    n.totalProgress(
                      S && G < -0.001 && !Ee ? V.utils.normalize(G, Q, 0) : Ee,
                      !0
                    ),
                  (M.progress = lt || (Z - G) / _e === Ee ? 0 : Ee)),
                f && p && (qe._pinOffset = Math.round(M.progress * at)),
                te && te.invalidate(),
                isNaN(Ri) ||
                  ((Ri -= V.getProperty(A, x.p)),
                  (js -= V.getProperty(He, x.p)),
                  so(A, x, Ri),
                  so(pe, x, Ri - (K || 0)),
                  so(He, x, js),
                  so(Oe, x, js - (K || 0))),
                lt && !St && M.update(),
                d && !St && !st && ((st = !0), d(M), (st = !1));
            }
          }),
          (M.getVelocity = function () {
            return ((ie() - B) / (ht() - Wi)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            qi(M.callbackAnimation),
              n &&
                (te
                  ? te.progress(1)
                  : n.paused()
                  ? L || qi(n, M.direction < 0, 1)
                  : qi(n, n.reversed()));
          }),
          (M.labelToScroll = function (H) {
            return (
              (n &&
                n.labels &&
                (G || M.refresh() || G) + (n.labels[H] / n.duration()) * _e) ||
              0
            );
          }),
          (M.getTrailing = function (H) {
            var ee = re.indexOf(M),
              W =
                M.direction > 0 ? re.slice(0, ee).reverse() : re.slice(ee + 1);
            return (
              Vt(H)
                ? W.filter(function (K) {
                    return K.vars.preventOverlaps === H;
                  })
                : W
            ).filter(function (K) {
              return M.direction > 0 ? K.end <= G : K.start >= Q;
            });
          }),
          (M.update = function (H, ee, W) {
            if (!(S && !W && !H)) {
              var K = St === !0 ? Ct : M.scroll(),
                Ze = H ? 0 : (K - G) / _e,
                ae = Ze < 0 ? 0 : Ze > 1 ? 1 : Ze || 0,
                Be = M.progress,
                lt,
                Re,
                De,
                ye,
                dr,
                ke,
                qt,
                yr;
              if (
                (ee &&
                  ((B = Z),
                  (Z = S ? ie() : K),
                  $ && ((Nr = vr), (vr = n && !L ? n.totalProgress() : ae))),
                g &&
                  f &&
                  !ut &&
                  !Qs &&
                  sr &&
                  (!ae && G < K + ((K - B) / (ht() - Wi)) * g
                    ? (ae = 1e-4)
                    : ae === 1 &&
                      Q > K + ((K - B) / (ht() - Wi)) * g &&
                      (ae = 0.9999)),
                ae !== Be && M.enabled)
              ) {
                if (
                  ((lt = M.isActive = !!ae && ae < 1),
                  (Re = !!Be && Be < 1),
                  (ke = lt !== Re),
                  (dr = ke || !!ae != !!Be),
                  (M.direction = ae > Be ? 1 : -1),
                  (M.progress = ae),
                  dr &&
                    !ut &&
                    ((De = ae && !Be ? 0 : ae === 1 ? 1 : Be === 1 ? 2 : 3),
                    L &&
                      ((ye =
                        (!ke && N[De + 1] !== "none" && N[De + 1]) || N[De]),
                      (yr =
                        n &&
                        (ye === "complete" || ye === "reset" || ye in n)))),
                  D &&
                    (ke || yr) &&
                    (yr || h || !n) &&
                    (Mt(D)
                      ? D(M)
                      : M.getTrailing(D).forEach(function (Tn) {
                          return Tn.endAnimation();
                        })),
                  L ||
                    (te && !ut && !Qs
                      ? (te._dp._time - te._start !== te._time &&
                          te.render(te._dp._time - te._start),
                        te.resetTo
                          ? te.resetTo("totalProgress", ae, n._tTime / n._tDur)
                          : ((te.vars.totalProgress = ae),
                            te.invalidate().restart()))
                      : n && n.totalProgress(ae, !!(ut && (ve || H)))),
                  f)
                ) {
                  if ((H && p && (qe.style[p + x.os2] = Ir), !R))
                    Ht(Yi(ot + at * ae));
                  else if (dr) {
                    if (
                      ((qt = !H && ae > Be && Q + 1 > K && K + 1 >= Or(w, x)),
                      E)
                    )
                      if (!H && (lt || qt)) {
                        var rt = Ur(f, !0),
                          nt = K - G;
                        Vc(
                          f,
                          Se,
                          rt.top + (x === Xe ? nt : 0) + je,
                          rt.left + (x === Xe ? 0 : nt) + je
                        );
                      } else Vc(f, qe);
                    Ei(lt || qt ? cr : Lr),
                      (gr && ae < 1 && lt) ||
                        Ht(ot + (ae === 1 && !qt ? at : 0));
                  }
                }
                $ && !de.tween && !ut && !Qs && kt.restart(!0),
                  a &&
                    (ke || (b && ae && (ae < 1 || !$a))) &&
                    ws(a.targets).forEach(function (Tn) {
                      return Tn.classList[lt || b ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !L && !H && o(M),
                  dr && !ut
                    ? (L &&
                        (yr &&
                          (ye === "complete"
                            ? n.pause().totalProgress(1)
                            : ye === "reset"
                            ? n.restart(!0).pause()
                            : ye === "restart"
                            ? n.restart(!0)
                            : n[ye]()),
                        o && o(M)),
                      (ke || !$a) &&
                        (c && ke && _a(M, c),
                        I[De] && _a(M, I[De]),
                        b && (ae === 1 ? M.kill(!1, 1) : (I[De] = 0)),
                        ke || ((De = ae === 1 ? 1 : 3), I[De] && _a(M, I[De]))),
                      O &&
                        !lt &&
                        Math.abs(M.getVelocity()) > (Xi(O) ? O : 2500) &&
                        (qi(M.callbackAnimation),
                        te
                          ? te.progress(1)
                          : qi(n, ye === "reverse" ? 1 : !ae, 1)))
                    : L && o && !ut && o(M);
              }
              if (rn) {
                var ct = S ? (K / S.duration()) * (S._caScrollDist || 0) : K;
                Rr(ct + (A._isFlipped ? 1 : 0)), rn(ct);
              }
              qr && qr((-K / S.duration()) * (S._caScrollDist || 0));
            }
          }),
          (M.enable = function (H, ee) {
            M.enabled ||
              ((M.enabled = !0),
              Je(w, "resize", Ki),
              k || Je(w, "scroll", oi),
              j && Je(i, "refreshInit", j),
              H !== !1 && ((M.progress = Ee = 0), (Z = B = oe = ie())),
              ee !== !1 && M.refresh());
          }),
          (M.getTween = function (H) {
            return H && de ? de.tween : te;
          }),
          (M.setPositions = function (H, ee, W, K) {
            if (S) {
              var Ze = S.scrollTrigger,
                ae = S.duration(),
                Be = Ze.end - Ze.start;
              (H = Ze.start + (Be * H) / ae), (ee = Ze.start + (Be * ee) / ae);
            }
            M.refresh(
              !1,
              !1,
              {
                start: Lc(H, W && !!M._startClamp),
                end: Lc(ee, W && !!M._endClamp),
              },
              K
            ),
              M.update();
          }),
          (M.adjustPinSpacing = function (H) {
            if (xe && H) {
              var ee = xe.indexOf(x.d) + 1;
              (xe[ee] = parseFloat(xe[ee]) + H + je),
                (xe[1] = parseFloat(xe[1]) + H + je),
                Ei(xe);
            }
          }),
          (M.disable = function (H, ee) {
            if (
              M.enabled &&
              (H !== !1 && M.revert(!0, !0),
              (M.enabled = M.isActive = !1),
              ee || (te && te.pause()),
              (Ct = 0),
              fe && (fe.uncache = 1),
              j && Qe(i, "refreshInit", j),
              kt && (kt.pause(), de.tween && de.tween.kill() && (de.tween = 0)),
              !k)
            ) {
              for (var W = re.length; W--; )
                if (re[W].scroller === w && re[W] !== M) return;
              Qe(w, "resize", Ki), k || Qe(w, "scroll", oi);
            }
          }),
          (M.kill = function (H, ee) {
            M.disable(H, ee), te && !ee && te.kill(), l && delete nl[l];
            var W = re.indexOf(M);
            W >= 0 && re.splice(W, 1),
              W === wt && yo > 0 && wt--,
              (W = 0),
              re.forEach(function (K) {
                return K.scroller === M.scroller && (W = 1);
              }),
              W || St || (M.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                H && n.revert({ kill: !1 }),
                ee || n.kill()),
              pe &&
                [pe, Oe, A, He].forEach(function (K) {
                  return K.parentNode && K.parentNode.removeChild(K);
                }),
              cs === M && (cs = 0),
              f &&
                (fe && (fe.uncache = 1),
                (W = 0),
                re.forEach(function (K) {
                  return K.pin === f && W++;
                }),
                W || (fe.spacer = 0)),
              r.onKill && r.onKill(M);
          }),
          re.push(M),
          M.enable(!1, !1),
          Qt && Qt(M),
          n && n.add && !_e)
        ) {
          var he = M.update;
          (M.update = function () {
            (M.update = he), G || Q || M.refresh();
          }),
            V.delayedCall(0.01, M.update),
            (_e = 0.01),
            (G = Q = 0);
        } else M.refresh();
        f && ip();
      }),
      (i.register = function (r) {
        return (
          fi ||
            ((V = r || dh()), ch() && window.document && i.enable(), (fi = ji)),
          fi
        );
      }),
      (i.defaults = function (r) {
        if (r) for (var n in r) ro[n] = r[n];
        return ro;
      }),
      (i.disable = function (r, n) {
        (ji = 0),
          re.forEach(function (o) {
            return o[n ? "kill" : "disable"](r);
          }),
          Qe(le, "wheel", oi),
          Qe(Ce, "scroll", oi),
          clearInterval(Zs),
          Qe(Ce, "touchcancel", wr),
          Qe(Se, "touchstart", wr),
          eo(Qe, Ce, "pointerdown,touchstart,mousedown", Ic),
          eo(Qe, Ce, "pointerup,touchend,mouseup", Rc),
          Io.kill(),
          Js(Qe);
        for (var s = 0; s < se.length; s += 3)
          to(Qe, se[s], se[s + 1]), to(Qe, se[s], se[s + 2]);
      }),
      (i.enable = function () {
        if (
          ((le = window),
          (Ce = document),
          (hr = Ce.documentElement),
          (Se = Ce.body),
          V &&
            ((ws = V.utils.toArray),
            (is = V.utils.clamp),
            (tl = V.core.context || wr),
            (ya = V.core.suppressOverwrites || wr),
            (Bl = le.history.scrollRestoration || "auto"),
            (il = le.pageYOffset),
            V.core.globals("ScrollTrigger", i),
            Se))
        ) {
          (ji = 1),
            (Si = document.createElement("div")),
            (Si.style.height = "100vh"),
            (Si.style.position = "absolute"),
            $h(),
            Z0(),
            Ve.register(V),
            (i.isTouch = Ve.isTouch),
            (on =
              Ve.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (el = Ve.isTouch === 1),
            Je(le, "wheel", oi),
            (ih = [le, Ce, hr, Se]),
            V.matchMedia
              ? ((i.matchMedia = function (l) {
                  var c = V.matchMedia(),
                    d;
                  for (d in l) c.add(d, l[d]);
                  return c;
                }),
                V.addEventListener("matchMediaInit", function () {
                  return jl();
                }),
                V.addEventListener("matchMediaRevert", function () {
                  return vh();
                }),
                V.addEventListener("matchMedia", function () {
                  In(0, 1), Jn("matchMedia");
                }),
                V.matchMedia("(orientation: portrait)", function () {
                  return wa(), wa;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            wa(),
            Je(Ce, "scroll", oi);
          var r = Se.style,
            n = r.borderTopStyle,
            s = V.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              o = Ur(Se),
              Xe.m = Math.round(o.top + Xe.sc()) || 0,
              Ot.m = Math.round(o.left + Ot.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              Zs = setInterval(Hc, 250),
              V.delayedCall(0.5, function () {
                return (Qs = 0);
              }),
              Je(Ce, "touchcancel", wr),
              Je(Se, "touchstart", wr),
              eo(Je, Ce, "pointerdown,touchstart,mousedown", Ic),
              eo(Je, Ce, "pointerup,touchend,mouseup", Rc),
              Ja = V.utils.checkPrefix("transform"),
              $o.push(Ja),
              fi = ht(),
              Io = V.delayedCall(0.2, In).pause(),
              pi = [
                Ce,
                "visibilitychange",
                function () {
                  var l = le.innerWidth,
                    c = le.innerHeight;
                  Ce.hidden
                    ? ((kc = l), (Cc = c))
                    : (kc !== l || Cc !== c) && Ki();
                },
                Ce,
                "DOMContentLoaded",
                In,
                le,
                "load",
                In,
                le,
                "resize",
                Ki,
              ],
              Js(Je),
              re.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < se.length;
            a += 3
          )
            to(Qe, se[a], se[a + 1]), to(Qe, se[a], se[a + 2]);
        }
      }),
      (i.config = function (r) {
        "limitCallbacks" in r && ($a = !!r.limitCallbacks);
        var n = r.syncInterval;
        (n && clearInterval(Zs)) || ((Zs = n) && setInterval(Hc, n)),
          "ignoreMobileResize" in r &&
            (el = i.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Js(Qe) || Js(Je, r.autoRefreshEvents || "none"),
            (oh = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (i.scrollerProxy = function (r, n) {
        var s = Lt(r),
          o = se.indexOf(s),
          a = Zn(s);
        ~o && se.splice(o, a ? 6 : 2),
          n && (a ? kr.unshift(le, n, Se, n, hr, n) : kr.unshift(s, n));
      }),
      (i.clearMatchMedia = function (r) {
        re.forEach(function (n) {
          return n._ctx && n._ctx.query === r && n._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (r, n, s) {
        var o = (Vt(r) ? Lt(r) : r).getBoundingClientRect(),
          a = o[s ? Un : Wn] * n || 0;
        return s
          ? o.right - a > 0 && o.left + a < le.innerWidth
          : o.bottom - a > 0 && o.top + a < le.innerHeight;
      }),
      (i.positionInViewport = function (r, n, s) {
        Vt(r) && (r = Lt(r));
        var o = r.getBoundingClientRect(),
          a = o[s ? Un : Wn],
          l =
            n == null
              ? a / 2
              : n in Fo
              ? Fo[n] * a
              : ~n.indexOf("%")
              ? (parseFloat(n) * a) / 100
              : parseFloat(n) || 0;
        return s ? (o.left + l) / le.innerWidth : (o.top + l) / le.innerHeight;
      }),
      (i.killAll = function (r) {
        if (
          (re.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          r !== !0)
        ) {
          var n = Qn.killAll || [];
          (Qn = {}),
            n.forEach(function (s) {
              return s();
            });
        }
      }),
      i
    );
  })();
U.version = "3.12.5";
U.saveStyles = function (i) {
  return i
    ? ws(i).forEach(function (e) {
        if (e && e.style) {
          var t = zt.indexOf(e);
          t >= 0 && zt.splice(t, 5),
            zt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              V.core.getCache(e),
              tl()
            );
        }
      })
    : zt;
};
U.revert = function (i, e) {
  return jl(!i, e);
};
U.create = function (i, e) {
  return new U(i, e);
};
U.refresh = function (i) {
  return i ? Ki() : (fi || U.register()) && In(!0);
};
U.update = function (i) {
  return ++se.cache && jr(i === !0 ? 2 : 0);
};
U.clearScrollMemory = yh;
U.maxScroll = function (i, e) {
  return Or(i, e ? Ot : Xe);
};
U.getScrollFunc = function (i, e) {
  return wn(Lt(i), e ? Ot : Xe);
};
U.getById = function (i) {
  return nl[i];
};
U.getAll = function () {
  return re.filter(function (i) {
    return i.vars.id !== "ScrollSmoother";
  });
};
U.isScrolling = function () {
  return !!sr;
};
U.snapDirectional = Wl;
U.addEventListener = function (i, e) {
  var t = Qn[i] || (Qn[i] = []);
  ~t.indexOf(e) || t.push(e);
};
U.removeEventListener = function (i, e) {
  var t = Qn[i],
    r = t && t.indexOf(e);
  r >= 0 && t.splice(r, 1);
};
U.batch = function (i, e) {
  var t = [],
    r = {},
    n = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (c, d) {
      var h = [],
        u = [],
        f = V.delayedCall(n, function () {
          d(h, u), (h = []), (u = []);
        }).pause();
      return function (p) {
        h.length || f.restart(!0),
          h.push(p.trigger),
          u.push(p),
          s <= h.length && f.progress(1);
      };
    },
    a;
  for (a in e)
    r[a] =
      a.substr(0, 2) === "on" && Mt(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    Mt(s) &&
      ((s = s()),
      Je(U, "refresh", function () {
        return (s = e.batchMax());
      })),
    ws(i).forEach(function (l) {
      var c = {};
      for (a in r) c[a] = r[a];
      (c.trigger = l), t.push(U.create(c));
    }),
    t
  );
};
var Uc = function (e, t, r, n) {
    return (
      t > n ? e(n) : t < 0 && e(0),
      r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  },
  Ea = function i(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Ve.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === hr && i(Se, t);
  },
  oo = { auto: 1, scroll: 1 },
  cp = function (e) {
    var t = e.event,
      r = e.target,
      n = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || V.core.getCache(s),
      a = ht(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== Se &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(oo[(l = rr(s)).overflowY] || oo[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== r &&
        !Zn(s) &&
        (oo[(l = rr(s)).overflowY] || oo[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || n === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  _h = function (e, t, r, n) {
    return Ve.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && cp),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return r && Je(Ce, Ve.eventTypes[0], jc, !1, !0);
      },
      onDisable: function () {
        return Qe(Ce, Ve.eventTypes[0], jc, !0);
      },
    });
  },
  dp = /(input|label|select|textarea)/i,
  Wc,
  jc = function (e) {
    var t = dp.test(e.target.tagName);
    (t || Wc) && ((e._gsapAllow = !0), (Wc = t));
  },
  up = function (e) {
    kn(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      r = t.normalizeScrollX,
      n = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      a,
      l,
      c = Lt(e.target) || hr,
      d = V.core.globals().ScrollSmoother,
      h = d && d.get(),
      u =
        on &&
        ((e.content && Lt(e.content)) ||
          (h && e.content !== !1 && !h.smooth() && h.content())),
      f = wn(c, Xe),
      p = wn(c, Ot),
      m = 1,
      g =
        (Ve.isTouch && le.visualViewport
          ? le.visualViewport.scale * le.visualViewport.width
          : le.outerWidth) / le.innerWidth,
      y = 0,
      v = Mt(n)
        ? function () {
            return n(a);
          }
        : function () {
            return n || 2.8;
          },
      b,
      $,
      E = _h(c, e.type, !0, s),
      T = function () {
        return ($ = !1);
      },
      S = wr,
      O = wr,
      D = function () {
        (l = Or(c, Xe)),
          (O = is(on ? 1 : 0, l)),
          r && (S = is(0, Or(c, Ot))),
          (b = jn);
      },
      x = function () {
        (u._gsap.y = Yi(parseFloat(u._gsap.y) + f.offset) + "px"),
          (u.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(u._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0);
      },
      L = function () {
        if ($) {
          requestAnimationFrame(T);
          var q = Yi(a.deltaY / 2),
            F = O(f.v - q);
          if (u && F !== f.v + f.offset) {
            f.offset = F - f.v;
            var M = Yi((parseFloat(u && u._gsap.y) || 0) - f.offset);
            (u.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (u._gsap.y = M + "px"),
              (f.cacheID = se.cache),
              jr();
          }
          return !0;
        }
        f.offset && x(), ($ = !0);
      },
      w,
      P,
      k,
      R,
      I = function () {
        D(),
          w.isActive() &&
            w.vars.scrollY > l &&
            (f() > l ? w.progress(1) && f(l) : w.resetTo("scrollY", l));
      };
    return (
      u && V.set(u, { y: "+=0" }),
      (e.ignoreCheck = function (N) {
        return (
          (on && N.type === "touchmove" && L()) ||
          (m > 1.05 && N.type !== "touchstart") ||
          a.isGesturing ||
          (N.touches && N.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        $ = !1;
        var N = m;
        (m = Yi(((le.visualViewport && le.visualViewport.scale) || 1) / g)),
          w.pause(),
          N !== m && Ea(c, m > 1.01 ? !0 : r ? !1 : "x"),
          (P = p()),
          (k = f()),
          D(),
          (b = jn);
      }),
      (e.onRelease = e.onGestureStart =
        function (N, q) {
          if ((f.offset && x(), !q)) R.restart(!0);
          else {
            se.cache++;
            var F = v(),
              M,
              j;
            r &&
              ((M = p()),
              (j = M + (F * 0.05 * -N.velocityX) / 0.227),
              (F *= Uc(p, M, j, Or(c, Ot))),
              (w.vars.scrollX = S(j))),
              (M = f()),
              (j = M + (F * 0.05 * -N.velocityY) / 0.227),
              (F *= Uc(f, M, j, Or(c, Xe))),
              (w.vars.scrollY = O(j)),
              w.invalidate().duration(F).play(0.01),
              ((on && w.vars.scrollY >= l) || M >= l - 1) &&
                V.to({}, { onUpdate: I, duration: F });
          }
          o && o(N);
        }),
      (e.onWheel = function () {
        w._ts && w.pause(), ht() - y > 1e3 && ((b = 0), (y = ht()));
      }),
      (e.onChange = function (N, q, F, M, j) {
        if (
          (jn !== b && D(),
          q && r && p(S(M[2] === q ? P + (N.startX - N.x) : p() + q - M[1])),
          F)
        ) {
          f.offset && x();
          var ne = j[2] === F,
            ue = ne ? k + N.startY - N.y : f() + F - j[1],
            oe = O(ue);
          ne && ue !== oe && (k += oe - ue), f(oe);
        }
        (F || q) && jr();
      }),
      (e.onEnable = function () {
        Ea(c, r ? !1 : "x"),
          U.addEventListener("refresh", I),
          Je(le, "resize", I),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = p.smooth = !1)),
          E.enable();
      }),
      (e.onDisable = function () {
        Ea(c, !0),
          Qe(le, "resize", I),
          U.removeEventListener("refresh", I),
          E.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Ve(e)),
      (a.iOS = on),
      on && !f() && f(1),
      on && V.ticker.add(wr),
      (R = a._dc),
      (w = V.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: bh(f, f(), function () {
            return w.pause();
          }),
        },
        onUpdate: jr,
        onComplete: R.vars.onComplete,
      })),
      a
    );
  };
U.sort = function (i) {
  return re.sort(
    i ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
U.observe = function (i) {
  return new Ve(i);
};
U.normalizeScroll = function (i) {
  if (typeof i > "u") return _t;
  if (i === !0 && _t) return _t.enable();
  if (i === !1) {
    _t && _t.kill(), (_t = i);
    return;
  }
  var e = i instanceof Ve ? i : up(i);
  return _t && _t.target === e.target && _t.kill(), Zn(e.target) && (_t = e), e;
};
U.core = {
  _getVelocityProp: Qa,
  _inputObserver: _h,
  _scrollers: se,
  _proxies: kr,
  bridge: {
    ss: function () {
      sr || Jn("scrollStart"), (sr = ht());
    },
    ref: function () {
      return ut;
    },
  },
};
dh() && V.registerPlugin(U);
var Yc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Es = {},
  hp = {
    get exports() {
      return Es;
    },
    set exports(i) {
      Es = i;
    },
  };
(function (i) {
  (function (e) {
    var t = function () {},
      r =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function (d) {
          return setTimeout(d, 16);
        };
    function n() {
      var d = this;
      (d.reads = []), (d.writes = []), (d.raf = r.bind(e));
    }
    n.prototype = {
      constructor: n,
      runTasks: function (d) {
        for (var h; (h = d.shift()); ) h();
      },
      measure: function (d, h) {
        var u = h ? d.bind(h) : d;
        return this.reads.push(u), s(this), u;
      },
      mutate: function (d, h) {
        var u = h ? d.bind(h) : d;
        return this.writes.push(u), s(this), u;
      },
      clear: function (d) {
        return a(this.reads, d) || a(this.writes, d);
      },
      extend: function (d) {
        if (typeof d != "object") throw new Error("expected object");
        var h = Object.create(this);
        return l(h, d), (h.fastdom = this), h.initialize && h.initialize(), h;
      },
      catch: null,
    };
    function s(d) {
      d.scheduled || ((d.scheduled = !0), d.raf(o.bind(null, d)));
    }
    function o(d) {
      var h = d.writes,
        u = d.reads,
        f;
      try {
        t("flushing reads", u.length),
          d.runTasks(u),
          t("flushing writes", h.length),
          d.runTasks(h);
      } catch (p) {
        f = p;
      }
      if (((d.scheduled = !1), (u.length || h.length) && s(d), f))
        if ((t("task errored", f.message), d.catch)) d.catch(f);
        else throw f;
    }
    function a(d, h) {
      var u = d.indexOf(h);
      return !!~u && !!d.splice(u, 1);
    }
    function l(d, h) {
      for (var u in h) h.hasOwnProperty(u) && (d[u] = h[u]);
    }
    var c = (e.fastdom = e.fastdom || new n());
    i.exports = c;
  })(typeof window < "u" ? window : typeof Yc < "u" ? Yc : globalThis);
})(hp);
const fp = (i) => {
    Es.measure(i);
  },
  Ti = (i) => {
    Es.mutate(i);
  };
var pp = function (i) {
  var e = {},
    t = [];
  (i = i || this),
    (i.on = function (r, n, s) {
      return (e[r] = e[r] || []).push([n, s]), i;
    }),
    (i.off = function (r, n) {
      r || (e = {});
      for (var s = e[r] || t, o = (s.length = n ? s.length : 0); o--; )
        n == s[o][0] && s.splice(o, 1);
      return i;
    }),
    (i.emit = function (r) {
      for (
        var n,
          s = e[r] || t,
          o = s.length > 0 ? s.slice(0, s.length) : s,
          a = 0;
        (n = o[a++]);

      )
        n[0].apply(n[1], t.slice.call(arguments, 1));
      return i;
    });
};
const mp = "LOADER_INIT",
  gp = "HT_RESIZE",
  vp = "OBSERVER_HEIGHT_CHANGED",
  _o = "REGISTER_LOADER",
  wo = "UN_REGISTER_LOADER",
  yp = "AFTER_LOADER_INIT",
  ds = "PAGE_ONE",
  wh = "PAGE_INIT",
  Rn = "PAGE_LOADED",
  $p = "PAGE_LOADED_ONE",
  Ut = "PAGE_ENTER",
  Sh = "PAGE_BEFORE_LEAVE",
  Yl = "PAGE_LEAVE",
  bp = "PAGE_AFTER_LEAVE",
  X = new pp();
var Ta = /iPhone/i,
  Xc = /iPod/i,
  Kc = /iPad/i,
  Zc = /\biOS-universal(?:.+)Mac\b/i,
  Oa = /\bAndroid(?:.+)Mobile\b/i,
  Qc = /Android/i,
  ai = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  ao = /Silk/i,
  Br = /Windows Phone/i,
  Jc = /\bWindows(?:.+)ARM\b/i,
  ed = /BlackBerry/i,
  td = /BB10/i,
  rd = /Opera Mini/i,
  nd = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  id = /Mobile(?:.+)Firefox\b/i,
  sd = function (i) {
    return (
      typeof i < "u" &&
      i.platform === "MacIntel" &&
      typeof i.maxTouchPoints == "number" &&
      i.maxTouchPoints > 1 &&
      typeof MSStream > "u"
    );
  };
function _p(i) {
  return function (e) {
    return e.test(i);
  };
}
function wp(i) {
  var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !i && typeof navigator < "u"
    ? (e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      })
    : typeof i == "string"
    ? (e.userAgent = i)
    : i &&
      i.userAgent &&
      (e = {
        userAgent: i.userAgent,
        platform: i.platform,
        maxTouchPoints: i.maxTouchPoints || 0,
      });
  var t = e.userAgent,
    r = t.split("[FBAN");
  typeof r[1] < "u" && (t = r[0]),
    (r = t.split("Twitter")),
    typeof r[1] < "u" && (t = r[0]);
  var n = _p(t),
    s = {
      apple: {
        phone: n(Ta) && !n(Br),
        ipod: n(Xc),
        tablet: !n(Ta) && (n(Kc) || sd(e)) && !n(Br),
        universal: n(Zc),
        device: (n(Ta) || n(Xc) || n(Kc) || n(Zc) || sd(e)) && !n(Br),
      },
      amazon: { phone: n(ai), tablet: !n(ai) && n(ao), device: n(ai) || n(ao) },
      android: {
        phone: (!n(Br) && n(ai)) || (!n(Br) && n(Oa)),
        tablet: !n(Br) && !n(ai) && !n(Oa) && (n(ao) || n(Qc)),
        device:
          (!n(Br) && (n(ai) || n(ao) || n(Oa) || n(Qc))) || n(/\bokhttp\b/i),
      },
      windows: { phone: n(Br), tablet: n(Jc), device: n(Br) || n(Jc) },
      other: {
        blackberry: n(ed),
        blackberry10: n(td),
        opera: n(rd),
        firefox: n(id),
        chrome: n(nd),
        device: n(ed) || n(td) || n(rd) || n(id) || n(nd),
      },
      any: !1,
      phone: !1,
      tablet: !1,
    };
  return (
    (s.any =
      s.apple.device || s.android.device || s.windows.device || s.other.device),
    (s.phone = s.apple.phone || s.android.phone || s.windows.phone),
    (s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet),
    s
  );
}
const Sp = (i, e) => {
    let t;
    return (...r) => {
      clearTimeout(t),
        (t = setTimeout(() => {
          i.apply(void 0, r);
        }, e));
    };
  },
  Ep = () =>
    !!(
      navigator.userAgent.match(/Mac/) &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2
    ),
  Tp = () => {
    const i = navigator.userAgent || navigator.vendor || window.opera;
    return i.indexOf("FBAN") > -1 || i.indexOf("FBAV") > -1;
  },
  od = (i) =>
    i
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-"),
  Op = () =>
    !(
      !("IntersectionObserver" in window) ||
      !("IntersectionObserverEntry" in window) ||
      !("intersectionRatio" in window.IntersectionObserverEntry.prototype)
    ),
  Eh = () => wp(navigator.userAgent).any || Ep() || Tp(),
  Mp = () => window.innerWidth >= 1200;
function Th(i, e, t) {
  return Math.max(i, Math.min(e, t));
}
class xp {
  constructor() {
    (this.isRunning = !1),
      (this.value = 0),
      (this.from = 0),
      (this.to = 0),
      (this.currentTime = 0);
  }
  advance(e) {
    var t;
    if (!this.isRunning) return;
    let r = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      const n = Th(0, this.currentTime / this.duration, 1);
      r = n >= 1;
      const s = r ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * s;
    } else
      this.lerp
        ? ((this.value = (function (s, o, a, l) {
            return (function (d, h, u) {
              return (1 - u) * d + u * h;
            })(s, o, 1 - Math.exp(-a * l));
          })(this.value, this.to, 60 * this.lerp, e)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (r = !0)))
        : ((this.value = this.to), (r = !0));
    r && this.stop(),
      (t = this.onUpdate) === null ||
        t === void 0 ||
        t.call(this, this.value, r);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, t, { lerp: r, duration: n, easing: s, onStart: o, onUpdate: a }) {
    (this.from = this.value = e),
      (this.to = t),
      (this.lerp = r),
      (this.duration = n),
      (this.easing = s),
      (this.currentTime = 0),
      (this.isRunning = !0),
      o == null || o(),
      (this.onUpdate = a);
  }
}
class Dp {
  constructor(e, t, { autoResize: r = !0, debounce: n = 250 } = {}) {
    (this.wrapper = e),
      (this.content = t),
      (this.width = 0),
      (this.height = 0),
      (this.scrollHeight = 0),
      (this.scrollWidth = 0),
      (this.resize = () => {
        this.onWrapperResize(), this.onContentResize();
      }),
      (this.onWrapperResize = () => {
        this.wrapper instanceof Window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      }),
      (this.onContentResize = () => {
        this.wrapper instanceof Window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      }),
      r &&
        ((this.debouncedResize = (function (o, a) {
          let l;
          return function (...c) {
            let d = this;
            clearTimeout(l),
              (l = setTimeout(() => {
                (l = void 0), o.apply(d, c);
              }, a));
          };
        })(this.resize, n)),
        this.wrapper instanceof Window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var e, t;
    (e = this.wrapperResizeObserver) === null || e === void 0 || e.disconnect(),
      (t = this.contentResizeObserver) === null ||
        t === void 0 ||
        t.disconnect(),
      this.wrapper === window &&
        this.debouncedResize &&
        window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class Oh {
  constructor() {
    this.events = {};
  }
  emit(e, ...t) {
    var r;
    let n = this.events[e] || [];
    for (let s = 0, o = n.length; s < o; s++)
      (r = n[s]) === null || r === void 0 || r.call(n, ...t);
  }
  on(e, t) {
    var r;
    return (
      (!((r = this.events[e]) === null || r === void 0) && r.push(t)) ||
        (this.events[e] = [t]),
      () => {
        var n;
        this.events[e] =
          (n = this.events[e]) === null || n === void 0
            ? void 0
            : n.filter((s) => t !== s);
      }
    );
  }
  off(e, t) {
    var r;
    this.events[e] =
      (r = this.events[e]) === null || r === void 0
        ? void 0
        : r.filter((n) => t !== n);
  }
  destroy() {
    this.events = {};
  }
}
const ad = 100 / 6,
  sn = { passive: !1 };
class Pp {
  constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    (this.element = e),
      (this.options = t),
      (this.touchStart = { x: 0, y: 0 }),
      (this.lastDelta = { x: 0, y: 0 }),
      (this.window = { width: 0, height: 0 }),
      (this.emitter = new Oh()),
      (this.onTouchStart = (r) => {
        const { clientX: n, clientY: s } = r.targetTouches
          ? r.targetTouches[0]
          : r;
        (this.touchStart.x = n),
          (this.touchStart.y = s),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: r });
      }),
      (this.onTouchMove = (r) => {
        const { clientX: n, clientY: s } = r.targetTouches
            ? r.targetTouches[0]
            : r,
          o = -(n - this.touchStart.x) * this.options.touchMultiplier,
          a = -(s - this.touchStart.y) * this.options.touchMultiplier;
        (this.touchStart.x = n),
          (this.touchStart.y = s),
          (this.lastDelta = { x: o, y: a }),
          this.emitter.emit("scroll", { deltaX: o, deltaY: a, event: r });
      }),
      (this.onTouchEnd = (r) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: r,
        });
      }),
      (this.onWheel = (r) => {
        let { deltaX: n, deltaY: s, deltaMode: o } = r;
        (n *= o === 1 ? ad : o === 2 ? this.window.width : 1),
          (s *= o === 1 ? ad : o === 2 ? this.window.height : 1),
          (n *= this.options.wheelMultiplier),
          (s *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: n, deltaY: s, event: r });
      }),
      (this.onWindowResize = () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      }),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, sn),
      this.element.addEventListener("touchstart", this.onTouchStart, sn),
      this.element.addEventListener("touchmove", this.onTouchMove, sn),
      this.element.addEventListener("touchend", this.onTouchEnd, sn);
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, sn),
      this.element.removeEventListener("touchstart", this.onTouchStart, sn),
      this.element.removeEventListener("touchmove", this.onTouchMove, sn),
      this.element.removeEventListener("touchend", this.onTouchEnd, sn);
  }
}
class kp {
  constructor({
    wrapper: e = window,
    content: t = document.documentElement,
    eventsTarget: r = e,
    smoothWheel: n = !0,
    syncTouch: s = !1,
    syncTouchLerp: o = 0.075,
    touchInertiaMultiplier: a = 35,
    duration: l,
    easing: c = ($) => Math.min(1, 1.001 - Math.pow(2, -10 * $)),
    lerp: d = 0.1,
    infinite: h = !1,
    orientation: u = "vertical",
    gestureOrientation: f = "vertical",
    touchMultiplier: p = 1,
    wheelMultiplier: m = 1,
    autoResize: g = !0,
    prevent: y,
    virtualScroll: v,
    __experimental__naiveDimensions: b = !1,
  } = {}) {
    (this._isScrolling = !1),
      (this._isStopped = !1),
      (this._isLocked = !1),
      (this._preventNextNativeScrollEvent = !1),
      (this._resetVelocityTimeout = null),
      (this.time = 0),
      (this.userData = {}),
      (this.lastVelocity = 0),
      (this.velocity = 0),
      (this.direction = 0),
      (this.animate = new xp()),
      (this.emitter = new Oh()),
      (this.onPointerDown = ($) => {
        $.button === 1 && this.reset();
      }),
      (this.onVirtualScroll = ($) => {
        if (
          typeof this.options.virtualScroll == "function" &&
          this.options.virtualScroll($) === !1
        )
          return;
        const { deltaX: E, deltaY: T, event: S } = $;
        if (
          (this.emitter.emit("virtual-scroll", {
            deltaX: E,
            deltaY: T,
            event: S,
          }),
          S.ctrlKey)
        )
          return;
        const O = S.type.includes("touch"),
          D = S.type.includes("wheel");
        if (
          ((this.isTouching =
            S.type === "touchstart" || S.type === "touchmove"),
          this.options.syncTouch &&
            O &&
            S.type === "touchstart" &&
            !this.isStopped &&
            !this.isLocked)
        )
          return void this.reset();
        const x = E === 0 && T === 0,
          L =
            (this.options.gestureOrientation === "vertical" && T === 0) ||
            (this.options.gestureOrientation === "horizontal" && E === 0);
        if (x || L) return;
        let w = S.composedPath();
        w = w.slice(0, w.indexOf(this.rootElement));
        const P = this.options.prevent;
        if (
          w.find((N) => {
            var q, F, M, j, ne;
            return (
              N instanceof HTMLElement &&
              ((typeof P == "function" && (P == null ? void 0 : P(N))) ||
                ((q = N.hasAttribute) === null || q === void 0
                  ? void 0
                  : q.call(N, "data-lenis-prevent")) ||
                (O &&
                  ((F = N.hasAttribute) === null || F === void 0
                    ? void 0
                    : F.call(N, "data-lenis-prevent-touch"))) ||
                (D &&
                  ((M = N.hasAttribute) === null || M === void 0
                    ? void 0
                    : M.call(N, "data-lenis-prevent-wheel"))) ||
                (((j = N.classList) === null || j === void 0
                  ? void 0
                  : j.contains("lenis")) &&
                  !(
                    !((ne = N.classList) === null || ne === void 0) &&
                    ne.contains("lenis-stopped")
                  )))
            );
          })
        )
          return;
        if (this.isStopped || this.isLocked) return void S.preventDefault();
        if (!((this.options.syncTouch && O) || (this.options.smoothWheel && D)))
          return (this.isScrolling = "native"), void this.animate.stop();
        S.preventDefault();
        let k = T;
        this.options.gestureOrientation === "both"
          ? (k = Math.abs(T) > Math.abs(E) ? T : E)
          : this.options.gestureOrientation === "horizontal" && (k = E);
        const R = O && this.options.syncTouch,
          I = O && S.type === "touchend" && Math.abs(k) > 5;
        I && (k = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + k,
            Object.assign(
              { programmatic: !1 },
              R
                ? { lerp: I ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }
            )
          );
      }),
      (this.onNativeScroll = () => {
        if (
          (this._resetVelocityTimeout !== null &&
            (clearTimeout(this._resetVelocityTimeout),
            (this._resetVelocityTimeout = null)),
          this._preventNextNativeScrollEvent)
        )
          this._preventNextNativeScrollEvent = !1;
        else if (this.isScrolling === !1 || this.isScrolling === "native") {
          const $ = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - $),
            (this.direction = Math.sign(this.animatedScroll - $)),
            (this.isScrolling = "native"),
            this.emit(),
            this.velocity !== 0 &&
              (this._resetVelocityTimeout = setTimeout(() => {
                (this.lastVelocity = this.velocity),
                  (this.velocity = 0),
                  (this.isScrolling = !1),
                  this.emit();
              }, 400));
        }
      }),
      (window.lenisVersion = "1.1.13"),
      (e && e !== document.documentElement && e !== document.body) ||
        (e = window),
      (this.options = {
        wrapper: e,
        content: t,
        eventsTarget: r,
        smoothWheel: n,
        syncTouch: s,
        syncTouchLerp: o,
        touchInertiaMultiplier: a,
        duration: l,
        easing: c,
        lerp: d,
        infinite: h,
        gestureOrientation: f,
        orientation: u,
        touchMultiplier: p,
        wheelMultiplier: m,
        autoResize: g,
        prevent: y,
        virtualScroll: v,
        __experimental__naiveDimensions: b,
      }),
      (this.dimensions = new Dp(e, t, { autoResize: g })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        !1
      ),
      (this.virtualScroll = new Pp(r, {
        touchMultiplier: p,
        wheelMultiplier: m,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1
      ),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName();
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  off(e, t) {
    return this.emitter.off(e, t);
  }
  setScroll(e) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = e)
      : (this.rootElement.scrollTop = e);
  }
  resize() {
    this.dimensions.resize(),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(e) {
    const t = e - (this.time || e);
    (this.time = e), this.animate.advance(0.001 * t);
  }
  scrollTo(
    e,
    {
      offset: t = 0,
      immediate: r = !1,
      lock: n = !1,
      duration: s = this.options.duration,
      easing: o = this.options.easing,
      lerp: a = this.options.lerp,
      onStart: l,
      onComplete: c,
      force: d = !1,
      programmatic: h = !0,
      userData: u,
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || d) {
      if (typeof e == "string" && ["top", "left", "start"].includes(e)) e = 0;
      else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
        e = this.limit;
      else {
        let f;
        if (
          (typeof e == "string"
            ? (f = document.querySelector(e))
            : e instanceof HTMLElement && e != null && e.nodeType && (f = e),
          f)
        ) {
          if (this.options.wrapper !== window) {
            const m = this.rootElement.getBoundingClientRect();
            t -= this.isHorizontal ? m.left : m.top;
          }
          const p = f.getBoundingClientRect();
          e = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
        }
      }
      if (typeof e == "number") {
        if (
          ((e += t),
          (e = Math.round(e)),
          this.options.infinite
            ? h && (this.targetScroll = this.animatedScroll = this.scroll)
            : (e = Th(0, e, this.limit)),
          e === this.targetScroll)
        )
          return l == null || l(this), void (c == null || c(this));
        if (((this.userData = u ?? {}), r))
          return (
            (this.animatedScroll = this.targetScroll = e),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            c == null || c(this),
            void (this.userData = {})
          );
        h || (this.targetScroll = e),
          this.animate.fromTo(this.animatedScroll, e, {
            duration: s,
            easing: o,
            lerp: a,
            onStart: () => {
              n && (this.isLocked = !0),
                (this.isScrolling = "smooth"),
                l == null || l(this);
            },
            onUpdate: (f, p) => {
              (this.isScrolling = "smooth"),
                (this.lastVelocity = this.velocity),
                (this.velocity = f - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = f),
                this.setScroll(this.scroll),
                h && (this.targetScroll = f),
                p || this.emit(),
                p &&
                  (this.reset(),
                  this.emit(),
                  c == null || c(this),
                  (this.userData = {}),
                  this.preventNextNativeScrollEvent());
            },
          });
      }
    }
  }
  preventNextNativeScrollEvent() {
    (this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      });
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? (function (t, r) {
          return ((t % r) + r) % r;
        })(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(e) {
    this._isScrolling !== e &&
      ((this._isScrolling = e), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(e) {
    this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(e) {
    this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let e = "lenis";
    return (
      this.isStopped && (e += " lenis-stopped"),
      this.isLocked && (e += " lenis-locked"),
      this.isScrolling && (e += " lenis-scrolling"),
      this.isScrolling === "smooth" && (e += " lenis-smooth"),
      e
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      (this.rootElement.className =
        `${this.rootElement.className} ${this.className}`.trim());
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className
      .replace(/lenis(-\w+)?/g, "")
      .trim();
  }
}
class Cp {
  constructor() {
    _(this, "isTouch");
    _(this, "isEnabled");
    _(this, "lenis");
    _(this, "idRaf");
    (this.isEnabled = !1),
      (this.idRaf = null),
      (this.isTouch = Eh()),
      (this.raf = this.raf.bind(this)),
      (this.enabled = this.enabled.bind(this)),
      (this.pageLeave = this.pageLeave.bind(this)),
      this.bindEvent();
  }
  init() {
    (this.lenis = new kp()), this.lenis.stop();
  }
  disabled() {
    var e;
    (this.isEnabled = !1),
      (e = this.lenis) == null || e.stop(),
      this.idRaf && cancelAnimationFrame(this.idRaf);
  }
  enabled() {
    var e;
    (e = this.lenis) == null || e.start(),
      this.isTouch ||
        ((this.isEnabled = !0), (this.idRaf = requestAnimationFrame(this.raf)));
  }
  raf(e) {
    var t;
    (t = this.lenis) == null || t.raf(e),
      this.isEnabled && (this.idRaf = requestAnimationFrame(this.raf));
  }
  scrollTo(e, t) {
    if (this.lenis) this.lenis.scrollTo(e, t);
    else if (typeof e == "number") window.scrollTo(0, e);
    else {
      const r = document.querySelector(e);
      r == null || r.scrollIntoView({ behavior: "smooth" });
    }
  }
  pageLeave() {
    this.disabled(), window.scrollTo(0, 0);
  }
  bindEvent() {
    X.on(Yl, this.pageLeave), X.on(Ut, this.enabled);
  }
}
const ge = new Cp();
class Ap {
  constructor() {
    _(this, "offsetResponsive");
    _(this, "viewSize");
    _(this, "winSize");
    _(this, "maxScrollHeight");
    _(this, "isSmoothScrolling");
    _(this, "isPageEnter");
    _(this, "isResing");
    _(this, "scrollHistory");
    _(this, "DOM");
    _(this, "isResizeObserver");
    _(this, "clearEvents");
    _(this, "clearDoms");
    _(this, "timeOutResize");
    _(this, "isTouchDevice");
    _(this, "isScreenPc");
    _(this, "isFirstLoad");
    _(this, "pageLoadState");
    _(this, "isPageLoaded");
    (this.offsetResponsive = { xl: 1600, lg: 1320, md: 1024, sm: 768 }),
      (this.viewSize = {
        mobile: { x: 375, y: 635 },
        tablet: { x: 900, y: 1024 },
      }),
      (this.maxScrollHeight = 0),
      (this.isSmoothScrolling = !0),
      (this.isPageEnter = !1),
      (this.isFirstLoad = !0),
      (this.pageLoadState = "idle"),
      (this.isPageLoaded = !1),
      (this.scrollHistory = []),
      (this.isScreenPc = !0),
      (this.isResing = !1),
      (this.DOM = {
        main:
          document.querySelector("[data-scroll-container]") || document.body,
      }),
      (this.isResizeObserver = !!window.ResizeObserver),
      (this.clearEvents = []),
      (this.clearDoms = []),
      (this.winSize = {
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight,
        devicePixelRatio: Math.min(window.devicePixelRatio, 1.5),
      }),
      (this.timeOutResize = null),
      (this.isTouchDevice = Eh()),
      this.handleResize(),
      this.bindEvent(),
      this.emitEvent();
  }
  isScrolled() {
    return (ge == null ? void 0 : ge.lenis.scroll) > 0;
  }
  getScrollTop() {
    return ge != null && ge.lenis ? (ge == null ? void 0 : ge.lenis.scroll) : 0;
  }
  getSize() {
    return this.winSize;
  }
  handleResize() {
    (this.isScreenPc = Mp()),
      Es.mutate(() => {
        (this.winSize = {
          width: window.innerWidth,
          height: window.innerHeight,
        }),
          (this.winSize.aspectRatio = this.winSize.width / this.winSize.height),
          (this.winSize.devicePixelRatio = Math.min(
            window.devicePixelRatio,
            1.5
          ));
      }),
      (this.isResing = !0);
  }
  aspectRatio() {
    var e;
    return ((e = this.winSize) == null ? void 0 : e.aspectRatio) || 1;
  }
  bindEvent() {
    window.addEventListener("resize", this.handleResize.bind(this)),
      this.isResizeObserver &&
        new ResizeObserver(() => {
          (this.isResing = !0),
            this.timeOutResize && clearTimeout(this.timeOutResize),
            (this.timeOutResize = setTimeout(() => {
              X.emit(vp), (this.isResing = !1);
            }, 350));
        }).observe(this.DOM.main);
  }
  addClearEvent(e) {
    this.clearEvents.push(e);
  }
  addClearDom(e) {
    this.clearDoms.push(e);
  }
  runClearEvents() {
    for (let e = 0; e < this.clearEvents.length; e++) this.clearEvents[e]();
    this.clearEvents = [];
  }
  runClearDoms() {
    for (let e = 0; e < this.clearDoms.length; e++)
      typeof this.clearDoms[e] == "function" && this.clearDoms[e]();
    this.clearDoms = [];
  }
  pageBeforeLeave({ path: e }) {
    const t = ge == null ? void 0 : ge.lenis.scroll;
    this.scrollHistory.length === 0
      ? (this.scrollHistory[0] = { path: e, scrollTop: t })
      : this.scrollHistory.length === 1
      ? (this.scrollHistory[1] = { path: e, scrollTop: t })
      : ((this.scrollHistory[0] = this.scrollHistory[1]),
        (this.scrollHistory[1] = { path: e, scrollTop: t })),
      (this.isPageEnter = !1),
      this.runClearEvents();
  }
  emitEvent() {
    X.on(gp, () => (this.isResing = !1)),
      X.on(ds, () => {
        (this.isFirstLoad = !0),
          (this.pageLoadState = "first-load"),
          (this.isPageEnter = !1);
      }),
      X.on(Ut, () => {
        (this.isPageEnter = !0),
          this.isFirstLoad
            ? ((this.pageLoadState = "first-load"), (this.isFirstLoad = !1))
            : this.pageLoadState !== "transition" &&
              (this.pageLoadState = "transition");
      }),
      X.on(Rn, () => {
        this.isPageLoaded = !0;
      }),
      X.on(Sh, (e) => {
        this.pageBeforeLeave(e),
          (this.pageLoadState = "transition"),
          (this.isPageLoaded = !1);
      }),
      X.on(Yl, this.runClearDoms.bind(this));
  }
}
const Ye = new Ap(),
  Mh = (i) => {
    const e = i();
    e && Ye.addClearEvent(e);
  },
  be = (i) => {
    i && Ye.addClearEvent(i);
  },
  Lp = (i) => {
    i && Ye.addClearDom(i);
  },
  ei = (i) => {
    requestAnimationFrame(i);
  },
  So = (i, e, t, r, n) =>
    parseFloat((((i - e) * (n - r)) / (t - e) + r).toFixed(3)),
  ld = (i, e, t, r, n) =>
    parseFloat((((i - e) * (n - r)) / (t - e) + r).toFixed(3)),
  Ip = (i) => {
    const e = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return i / e;
  };
class Rp {
  constructor(e, t, r = {}) {
    _(this, "element");
    _(this, "callback");
    _(this, "threshold");
    _(this, "debounceDelay");
    _(this, "isWindow");
    _(this, "previousSize", null);
    _(this, "resizeObserver", null);
    _(this, "windowResizeHandler", null);
    _(this, "timeoutId", null);
    _(this, "lastEventSize", null);
    (this.element = e),
      (this.callback = t),
      (this.threshold = r.threshold ?? 20),
      (this.debounceDelay = r.debounceDelay ?? 250),
      (this.isWindow = e === null),
      this.init();
  }
  init() {
    const e = this.getSize();
    e &&
      ((this.previousSize = {
        width: Math.round(e.width),
        height: Math.round(e.height),
        el: e.el,
      }),
      (this.lastEventSize = {
        width: Math.round(e.width),
        height: Math.round(e.height),
      }));
    const t = () => {
      this.shouldHandleResizeEvent() && this.triggerDebounce();
    };
    (this.windowResizeHandler = t),
      window.addEventListener("resize", this.windowResizeHandler);
  }
  triggerDebounce(e = "width") {
    this.timeoutId && clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        this.handleResize(!1, e);
      }, this.debounceDelay));
  }
  shouldHandleResizeEvent() {
    const e = this.getSize();
    if (!e) return !1;
    if (!this.lastEventSize)
      return (
        (this.lastEventSize = {
          width: Math.round(e.width),
          height: Math.round(e.height),
        }),
        !0
      );
    const t = Math.abs(Math.round(e.width) - this.lastEventSize.width),
      r = Math.abs(Math.round(e.height) - this.lastEventSize.height);
    return t < this.threshold && r < this.threshold
      ? !1
      : ((this.lastEventSize = {
          width: Math.round(e.width),
          height: Math.round(e.height),
        }),
        !0);
  }
  getSize() {
    if (this.isWindow)
      return { width: window.innerWidth, height: window.innerHeight, el: null };
    if (!this.element || !this.element.isConnected) return null;
    const e = this.element.getBoundingClientRect();
    return {
      width: Math.round(e.width),
      height: Math.round(e.height),
      el: this.element,
    };
  }
  getPreviousSize() {
    return this.previousSize;
  }
  setPreviousSize() {
    const e = this.getSize();
    e &&
      (this.previousSize = {
        width: Math.round(e.width),
        height: Math.round(e.height),
        el: e.el,
      });
  }
  isMobile() {
    const e = this.getSize();
    return e ? e.width < 768 : !1;
  }
  isTablet() {
    const e = this.getSize();
    return e ? e.width >= 768 && e.width < 992 : !1;
  }
  isDesktop() {
    const e = this.getSize();
    return e ? e.width >= 992 : !1;
  }
  getDeviceType() {
    return this.isMobile() ? "mobile" : this.isTablet() ? "tablet" : "desktop";
  }
  handleResize(e = !1, t = "width") {
    const r = this.getSize();
    if (!r) return;
    if (!this.previousSize) {
      (this.previousSize = {
        width: Math.round(r.width),
        height: Math.round(r.height),
        el: r.el,
      }),
        e && this.callback(r, null);
      return;
    }
    const n = Math.abs(
        Math.round(r.width) - Math.round(this.previousSize.width)
      ),
      s = Math.abs(Math.round(r.height) - Math.round(this.previousSize.height));
    if (!e) {
      const o = n >= this.threshold,
        a = s >= this.threshold;
      if (t === "width" ? !o : (t === "height" || !o) && !a) return;
    }
    this.callback(r, this.previousSize),
      (this.previousSize = {
        width: Math.round(r.width),
        height: Math.round(r.height),
        el: r.el,
      });
  }
  checkResize(e = "width") {
    this.triggerDebounce(e);
  }
  destroy() {
    this.timeoutId && clearTimeout(this.timeoutId),
      this.resizeObserver &&
        (this.resizeObserver.disconnect(), (this.resizeObserver = null)),
      this.windowResizeHandler &&
        (window.removeEventListener("resize", this.windowResizeHandler),
        (this.windowResizeHandler = null)),
      (this.previousSize = null),
      (this.lastEventSize = null),
      (this.element = null);
  }
}
function Hs(i, e, t = {}) {
  const r = new Rp(i, e, t);
  return {
    getSize: r.getSize.bind(r),
    getPreviousSize: r.getPreviousSize.bind(r),
    isMobile: r.isMobile.bind(r),
    isTablet: r.isTablet.bind(r),
    isDesktop: r.isDesktop.bind(r),
    getDeviceType: r.getDeviceType.bind(r),
    setPreviousSize: r.setPreviousSize.bind(r),
    destroy: r.destroy.bind(r),
  };
}
function cd(i, e) {
  let t;
  return function (...r) {
    const n = this;
    t && clearTimeout(t),
      (t = setTimeout(() => {
        i.apply(n, r);
      }, e));
  };
}
function dd(i) {
  const e = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return i * e;
}
var Qd;
(Qd = document.fonts) == null ||
  Qd.ready.then(() => {
    var i;
    return ((i = document.fonts) == null ? void 0 : i.status) === "loaded"
      ? null
      : new Promise((e) => {
          let t = 5;
          const r = () => {
            var n;
            if (((n = document.fonts) == null ? void 0 : n.status) === "loaded")
              return e(null);
            (t *= 2), setTimeout(r, t);
          };
          setTimeout(r, 5);
        });
  });
async function xh(i = () => {}) {
  try {
    document.fonts.ready.then(async () => {
      var e;
      await new Promise((t) => setTimeout(t, 50)),
        ((e = document.fonts) == null ? void 0 : e.status) === "loaded"
          ? i()
          : setTimeout(() => {
              xh(i);
            }, 50);
    });
  } catch {
    i();
  }
}
const Dh = ({ element: i, action: e }) => {
  const t = (r) => {
    !i || i.contains(r.target) || e();
  };
  document.addEventListener("mousedown", t, { passive: !0 }),
    document.addEventListener("touchstart", t, { passive: !0 });
};
let Dt = null;
const Jo = () => (
  Dt ||
    (Dt = Hs(null, () => {}, {
      threshold: 0,
      debounceDelay: 0,
      immediate: !0,
    })),
  Dt
);
typeof window < "u" && Jo();
const Et = () => (
    Dt || Jo(),
    (Dt == null ? void 0 : Dt.isDesktop()) ?? window.innerWidth >= 991
  ),
  ea = () => (
    Dt || Jo(), (Dt == null ? void 0 : Dt.isMobile()) ?? window.innerWidth < 768
  ),
  Np = () => (
    Dt || Jo(),
    (Dt == null ? void 0 : Dt.isTablet()) ??
      (window.innerWidth >= 768 && window.innerWidth <= 991)
  ),
  Ph = (i) => {
    const e = new ResizeObserver(() => {
      const t = document.body.scrollHeight;
      let r = null;
      r && clearTimeout(r),
        (r = setTimeout(() => {
          document.body.scrollHeight === t && i();
        }, 150));
    });
    return e.observe(document.body), () => e.disconnect();
  },
  kh = (i) => {
    const e = i.getBoundingClientRect(),
      t = window.innerHeight || document.documentElement.clientHeight,
      r = window.innerWidth || document.documentElement.clientWidth;
    return e.top < t && e.bottom > 0 && e.left < r && e.right > 0;
  },
  qs = ({
    el: i,
    elObServer: e = null,
    animIn: t,
    offsetPercent: r = null,
    animUnset: n,
    inScreen: s,
    outScreen: o,
    start: a,
  }) => {
    let l = null,
      c = null,
      d = null,
      h = !1,
      u = null;
    const f = !!i.getAttribute("data-enteronly"),
      p = i.getAttribute("data-trigger-for");
    p && (c = document.getElementById(p));
    const m = i.hasAttribute("data-start-now"),
      g = kh(i),
      y = m || g,
      v = (O) => {
        if (!h) return;
        let { isPageEnter: D, pageLoadState: x, isFirstLoad: L } = Ye;
        if (L === void 0 || x === "idle") {
          const w = () => {
            const P = Ye;
            (P.pageLoadState !== "idle" || P.isFirstLoad !== void 0) &&
              ((D = P.isPageEnter),
              (x = P.pageLoadState),
              (L = P.isFirstLoad),
              X.off(ds, w),
              v());
          };
          X.on(ds, w),
            setTimeout(() => {
              const P = Ye;
              if (P.pageLoadState !== "idle" || P.isFirstLoad !== void 0)
                (D = P.isPageEnter),
                  (x = P.pageLoadState),
                  (L = P.isFirstLoad),
                  X.off(ds, w),
                  v();
              else return;
            }, 0);
          return;
        }
        if (D || x === "first-load") {
          const w = Ye.isScrolled()
            ? parseFloat(i.getAttribute("delay-enter") || "0")
            : parseFloat(i.getAttribute("delay-trigger") || "0");
          i.classList.add("anim-in"), t && t(w, x);
        }
        s && s(x);
      },
      b = () => {
        const O = () => {
            h = !0;
            const { pageLoadState: x } = Ye,
              L = parseFloat(i.getAttribute("delay-enter") || "0");
            console.log("delay", L),
              i.classList.add("anim-in"),
              t && t(L, x),
              s && s(x);
          },
          { isPageEnter: D } = Ye;
        D ? O() : X.on(Ut, O);
      },
      $ = () => {
        const { isPageLoaded: O, isPageEnter: D } = Ye,
          x = D || O;
        if ((parseFloat(i.getAttribute("delay-trigger") || "0"), !x)) {
          (u = () => {
            const { isPageLoaded: L, isPageEnter: w } = Ye;
            (L || w) && (E(), u && (X.off(Rn, u), X.off(Ut, u), (u = null)));
          }),
            X.on(Rn, u),
            X.on(Ut, u),
            setTimeout(() => {
              const { isPageLoaded: L, isPageEnter: w } = Ye;
              (L || w) && u && (E(), X.off(Rn, u), X.off(Ut, u), (u = null));
            }, 0);
          return;
        }
        E();
      },
      E = (O) => {
        const { winSize: D } = Ye;
        r === null &&
          fp(() => {
            const { height: x, top: L } = i.getBoundingClientRect();
            L >= D.height &&
              ((r = So(x / D.height, 0, 1, 0.3, 0)),
              (r = Math.max(Math.min(r, 0.3), 0)));
          }),
          (r = Number(i.getAttribute("data-threshold") || 0) || r),
          ei(
            p
              ? () => {
                  (d = new IntersectionObserver(
                    (x) => {
                      const L = x[0].isIntersecting;
                      (h = L), L ? v() : o && o();
                    },
                    { threshold: r || 0 }
                  )),
                    d.observe(i);
                }
              : () => {
                  (l = U.create({
                    trigger: e || i,
                    start: a || `${Number(r) * 90}% 95%`,
                    onEnter: () => {
                      (h = !0), v();
                    },
                    onLeave: () => {
                      f && !s && !o && (n && n(), S(), (h = !1)), o && o();
                    },
                  })),
                    Ph(l.refresh.bind(l));
                }
          );
      },
      T = () => h,
      S = () => {
        X.off(Ut, v),
          u && (X.off(Rn, u), X.off(Ut, u), (u = null)),
          l && l.kill(),
          p && c && (d == null || d.unobserve(c), d == null || d.disconnect());
      };
    return Mh(() => (y ? b() : $(), S)), { getIsVisible: T, removeEvent: S };
  },
  Fp = {},
  li = "2.4rem",
  zr = 0,
  Hp = 0.7,
  ud = 1,
  qp = { DEFAULT: "default", FADE_TRAN: "fade_tran" };
class us {
  constructor(e, t = {}, r = !1) {
    _(this, "el");
    _(this, "options");
    _(this, "isManual");
    _(this, "removeEvent");
    _(this, "isInitialized", !1);
    _(this, "isDestroyed", !1);
    (this.el = e), (this.options = t), (this.isManual = r), this.initialize();
  }
  initialize() {
    this.el.classList.add(Fp.fade);
    const e = this.getDefaultConfig();
    this.mergeOptions(e),
      this.setInitialState(),
      this.isManual || this.setupAnimationHelper();
  }
  getDefaultConfig() {
    switch (this.options.type) {
      case qp.FADE_TRAN:
        return this.getFadeTranConfig();
      default:
        return this.getDefaultFadeConfig();
    }
  }
  getFadeTranConfig() {
    return (
      C.set(this.el, { opacity: zr, y: li }),
      {
        to: {
          keyframes: [
            { opacity: 1, ease: "power3.inOut", duration: 0.8 },
            { y: 0, ease: "power3.out", duration: 0.8, delay: -0.6 },
          ],
          delay: this.options.delay ?? 0,
        },
        out: { opacity: zr, y: -30, ease: "power3.inOut", duration: 0.6 },
        from: { opacity: zr, y: li },
        fromTo: { from: { opacity: 1, y: "0" }, to: { opacity: zr, y: li } },
      }
    );
  }
  getDefaultFadeConfig() {
    return (
      C.set(this.el, { opacity: zr }),
      {
        to: {
          opacity: 1,
          ease: "power3.inOut",
          duration: ud,
          delay: this.options.delay ?? 0,
          clearProps: "all",
        },
        out: { opacity: zr, y: "-2.4rem", ease: "power3.inOut", duration: 0.6 },
        from: { opacity: zr, y: li },
        fromTo: { from: { opacity: zr, y: li }, to: { opacity: 1, y: "0" } },
      }
    );
  }
  mergeOptions(e) {
    (this.options.to = { ...e.to, ...this.options.to }),
      (this.options.out = { ...e.out, ...this.options.out }),
      (this.options.from = { ...e.from, ...this.options.from }),
      (this.options.fromTo = { ...e.fromTo, ...this.options.fromTo });
  }
  setInitialState() {
    this.options.from && C.set(this.el, this.options.from);
  }
  setupAnimationHelper() {
    Ti(() => {
      const { removeEvent: e } = qs({
        el: this.el,
        animIn: (t, r) => {
          this.animIn(t, r), e();
        },
        start: this.options.start,
      });
      (this.removeEvent = e),
        be(() => {
          e();
        });
    });
  }
  animInit() {
    (this.isInitialized && !this.isDestroyed) ||
      ((this.isInitialized = !0),
      (this.isDestroyed = !1),
      C.set(this.el, { opacity: zr, y: li }));
  }
  animIn(e = 0, t) {
    var n;
    if (!this.options.to) return;
    const r = {
      ...this.options.to,
      delay: (this.getNumericValue(this.options.to.delay) ?? 0) + e,
    };
    if (t === "transition") {
      const s = this.getNumericValue(r.duration) ?? ud;
      r.duration = s * Hp;
    }
    C.killTweensOf(this.el),
      C.to(this.el, r),
      (n = this.removeEvent) == null || n.call(this);
  }
  animInFormTo(e = 0) {
    var t, r;
    !((t = this.options.fromTo) != null && t.from) ||
      !((r = this.options.fromTo) != null && r.to) ||
      (C.killTweensOf(this.el),
      C.fromTo(
        this.el,
        { ...this.options.fromTo.from },
        { ...this.options.fromTo.to, delay: e ?? this.options.delay ?? 0 }
      ));
  }
  animOut({ delay: e, onComplete: t = () => {}, option: r } = {}) {
    var o;
    if (!this.options.out) return;
    const n = e ?? this.options.delay ?? 0,
      s = {
        ...((r == null ? void 0 : r.out) ?? { ...this.options.out, y: "0px" }),
        delay: n,
      };
    C.killTweensOf(this.el),
      C.to(this.el, { ...s, onComplete: t }),
      (o = this.removeEvent) == null || o.call(this);
  }
  getNumericValue(e) {
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const t = parseFloat(e);
      return isNaN(t) ? void 0 : t;
    }
  }
  destroy() {
    (this.isDestroyed = !0),
      (this.isInitialized = !1),
      this.removeEvent && (this.removeEvent(), (this.removeEvent = void 0)),
      C.killTweensOf(this.el);
  }
}
/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var xt,
  Ch,
  Yr,
  Mr,
  $n,
  Ah,
  Lh,
  lo,
  Ih = function () {
    return typeof window < "u";
  },
  Rh = function () {
    return xt || (Ih() && (xt = window.gsap) && xt.registerPlugin && xt);
  },
  Nh = function (e) {
    return typeof e == "string";
  },
  hd = function (e) {
    return typeof e == "function";
  },
  Ts = function (e, t) {
    var r = t === "x" ? "Width" : "Height",
      n = "scroll" + r,
      s = "client" + r;
    return e === Yr || e === Mr || e === $n
      ? Math.max(Mr[n], $n[n]) - (Yr["inner" + r] || Mr[s] || $n[s])
      : e[n] - e["offset" + r];
  },
  Os = function (e, t) {
    var r = "scroll" + (t === "x" ? "Left" : "Top");
    return (
      e === Yr &&
        (e.pageXOffset != null
          ? (r = "page" + t.toUpperCase() + "Offset")
          : (e = Mr[r] != null ? Mr : $n)),
      function () {
        return e[r];
      }
    );
  },
  Bp = function (e, t, r, n) {
    if ((hd(e) && (e = e(t, r, n)), typeof e != "object"))
      return Nh(e) && e !== "max" && e.charAt(1) !== "="
        ? { x: e, y: e }
        : { y: e };
    if (e.nodeType) return { y: e, x: e };
    var s = {},
      o;
    for (o in e) s[o] = o !== "onAutoKill" && hd(e[o]) ? e[o](t, r, n) : e[o];
    return s;
  },
  Fh = function (e, t) {
    if (((e = Ah(e)[0]), !e || !e.getBoundingClientRect))
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var r = e.getBoundingClientRect(),
      n = !t || t === Yr || t === $n,
      s = n
        ? {
            top:
              Mr.clientTop -
              (Yr.pageYOffset || Mr.scrollTop || $n.scrollTop || 0),
            left:
              Mr.clientLeft -
              (Yr.pageXOffset || Mr.scrollLeft || $n.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      o = { x: r.left - s.left, y: r.top - s.top };
    return !n && t && ((o.x += Os(t, "x")()), (o.y += Os(t, "y")())), o;
  },
  fd = function (e, t, r, n, s) {
    return !isNaN(e) && typeof e != "object"
      ? parseFloat(e) - s
      : Nh(e) && e.charAt(1) === "="
      ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + n - s
      : e === "max"
      ? Ts(t, r) - s
      : Math.min(Ts(t, r), Fh(e, t)[r] - s);
  },
  pd = function () {
    (xt = Rh()),
      Ih() &&
        xt &&
        typeof document < "u" &&
        document.body &&
        ((Yr = window),
        ($n = document.body),
        (Mr = document.documentElement),
        (Ah = xt.utils.toArray),
        xt.config({ autoKillThreshold: 7 }),
        (Lh = xt.config()),
        (Ch = 1));
  },
  Bs = {
    version: "3.12.5",
    name: "scrollTo",
    rawVars: 1,
    register: function (e) {
      (xt = e), pd();
    },
    init: function (e, t, r, n, s) {
      Ch || pd();
      var o = this,
        a = xt.getProperty(e, "scrollSnapType");
      (o.isWin = e === Yr),
        (o.target = e),
        (o.tween = r),
        (t = Bp(t, n, e, s)),
        (o.vars = t),
        (o.autoKill = !!t.autoKill),
        (o.getX = Os(e, "x")),
        (o.getY = Os(e, "y")),
        (o.x = o.xPrev = o.getX()),
        (o.y = o.yPrev = o.getY()),
        lo || (lo = xt.core.globals().ScrollTrigger),
        xt.getProperty(e, "scrollBehavior") === "smooth" &&
          xt.set(e, { scrollBehavior: "auto" }),
        a &&
          a !== "none" &&
          ((o.snap = 1),
          (o.snapInline = e.style.scrollSnapType),
          (e.style.scrollSnapType = "none")),
        t.x != null
          ? (o.add(o, "x", o.x, fd(t.x, e, "x", o.x, t.offsetX || 0), n, s),
            o._props.push("scrollTo_x"))
          : (o.skipX = 1),
        t.y != null
          ? (o.add(o, "y", o.y, fd(t.y, e, "y", o.y, t.offsetY || 0), n, s),
            o._props.push("scrollTo_y"))
          : (o.skipY = 1);
    },
    render: function (e, t) {
      for (
        var r = t._pt,
          n = t.target,
          s = t.tween,
          o = t.autoKill,
          a = t.xPrev,
          l = t.yPrev,
          c = t.isWin,
          d = t.snap,
          h = t.snapInline,
          u,
          f,
          p,
          m,
          g;
        r;

      )
        r.r(e, r.d), (r = r._next);
      (u = c || !t.skipX ? t.getX() : a),
        (f = c || !t.skipY ? t.getY() : l),
        (p = f - l),
        (m = u - a),
        (g = Lh.autoKillThreshold),
        t.x < 0 && (t.x = 0),
        t.y < 0 && (t.y = 0),
        o &&
          (!t.skipX && (m > g || m < -g) && u < Ts(n, "x") && (t.skipX = 1),
          !t.skipY && (p > g || p < -g) && f < Ts(n, "y") && (t.skipY = 1),
          t.skipX &&
            t.skipY &&
            (s.kill(),
            t.vars.onAutoKill &&
              t.vars.onAutoKill.apply(s, t.vars.onAutoKillParams || []))),
        c
          ? Yr.scrollTo(t.skipX ? u : t.x, t.skipY ? f : t.y)
          : (t.skipY || (n.scrollTop = t.y), t.skipX || (n.scrollLeft = t.x)),
        d &&
          (e === 1 || e === 0) &&
          ((f = n.scrollTop),
          (u = n.scrollLeft),
          h
            ? (n.style.scrollSnapType = h)
            : n.style.removeProperty("scroll-snap-type"),
          (n.scrollTop = f + 1),
          (n.scrollLeft = u + 1),
          (n.scrollTop = f),
          (n.scrollLeft = u)),
        (t.xPrev = t.x),
        (t.yPrev = t.y),
        lo && lo.update();
    },
    kill: function (e) {
      var t = e === "scrollTo",
        r = this._props.indexOf(e);
      return (
        (t || e === "scrollTo_x") && (this.skipX = 1),
        (t || e === "scrollTo_y") && (this.skipY = 1),
        r > -1 && this._props.splice(r, 1),
        !this._props.length
      );
    },
  };
Bs.max = Ts;
Bs.getOffset = Fh;
Bs.buildGetter = Os;
Rh() && xt.registerPlugin(Bs);
var me = gt.registerPlugin(ql) || gt;
me.core.Tween;
const zp = "_parallax_1tj1t_1",
  Vp = "_inner_1tj1t_7",
  co = { parallax: zp, inner: Vp };
class Xl {
  constructor({ el: e, offset: t, scale: r, direction: n }) {
    _(this, "DOM");
    _(this, "offset");
    _(this, "scale");
    _(this, "direction");
    _(this, "scrollTriggers", []);
    _(this, "removeEvent", null);
    _(this, "timeline", null);
    (this.DOM = { el: e }),
      (this.offset = t || 0),
      (this.scale = r || 1.1),
      (this.direction = n || -1),
      !ea() && (this.init(), be(this.destroy.bind(this)));
  }
  init() {
    var n;
    const e = (n = this.DOM.el) == null ? void 0 : n.querySelector("img");
    if (!e) return;
    for (; this.DOM.el.firstChild; )
      this.DOM.el.removeChild(this.DOM.el.firstChild);
    const t = document.createElement("div");
    (t.style.scale = `${this.scale}`),
      (t.style.transformOrigin = `${
        this.direction > 0 ? "bottom" : "top"
      } center`),
      t.classList.add(co.inner),
      e.classList.add(co.parallax),
      t.appendChild(e),
      this.DOM.el.appendChild(t),
      (this.DOM.elInner = t);
    const { removeEvent: r } = qs({
      el: this.DOM.elInner,
      animIn: (s, o) => {
        this.animIn(o), r == null || r();
      },
    });
    this.removeEvent = r;
  }
  animIn(e) {
    if (!this.DOM.elInner) return;
    const t = ((this.scale * 100 - 100) * this.direction) / 2,
      r = U.create({
        trigger: this.DOM.elInner,
        start: "top-=100% bottom",
        once: !0,
        onEnter: () => {
          U.refresh();
        },
      });
    this.scrollTriggers.push(r);
    const n = kh(this.DOM.elInner),
      s = (this.DOM.el.getBoundingClientRect().top / window.innerHeight) * 100;
    (this.timeline = C.timeline({
      scrollTrigger: {
        trigger: this.DOM.elInner,
        start: `top ${n ? `+=${s}%` : "bottom+=5%"}`,
        end: "bottom top",
        scrub: 1,
      },
    }).fromTo(this.DOM.elInner, { y: `-${t}%` }, { y: `${t}%` })),
      this.timeline.scrollTrigger &&
        this.scrollTriggers.push(this.timeline.scrollTrigger);
  }
  destroy() {
    if (
      (this.removeEvent && (this.removeEvent(), (this.removeEvent = null)),
      this.timeline && (this.timeline.kill(), (this.timeline = null)),
      this.scrollTriggers.forEach((e) => {
        try {
          e.disable(), e.kill();
        } catch {}
      }),
      (this.scrollTriggers = []),
      this.DOM.elInner && this.DOM.el)
    ) {
      const e = this.DOM.elInner.querySelector("img");
      e &&
        (C.killTweensOf(e),
        C.set(e, { clearProps: "all" }),
        e.classList.contains(co.parallax) && e.classList.remove(co.parallax),
        this.DOM.elInner.parentNode === this.DOM.el &&
          this.DOM.el.removeChild(this.DOM.elInner),
        this.DOM.el.appendChild(e)),
        C.killTweensOf(this.DOM.elInner);
      const t = this.DOM.elInner.querySelectorAll("*");
      t.length && C.killTweensOf(t),
        C.set(this.DOM.elInner, { clearProps: "all" });
    }
    if (this.DOM.el) {
      const e = this.DOM.el.querySelectorAll("*");
      e.length && C.killTweensOf(e),
        C.killTweensOf(this.DOM.el),
        C.set(this.DOM.el, { clearProps: "all" });
    }
    U.refresh(), (this.DOM.elInner = void 0);
  }
}
const Gp = "_counter_blgcs_1",
  Up = "_counter_text_blgcs_4",
  Wp = "_textSpacing_blgcs_34",
  Bi = { counter: Gp, counter_text: Up, textSpacing: Wp };
class hs {
  constructor(e, t, r) {
    _(this, "DOM");
    _(this, "textSplit");
    _(this, "input");
    _(this, "old");
    _(this, "isSpecial");
    _(this, "planPricing");
    _(this, "resizeHandler", null);
    (this.DOM = { el: e, listChars: [] }),
      ei(this.init.bind(this)),
      (this.old = [1, 1, 0]),
      (this.input = t),
      (this.isSpecial = r),
      (this.resizeHandler = Hs(
        null,
        () => {
          this.handleResize();
        },
        { threshold: 50, debounceDelay: 250, immediate: !1 }
      )),
      this.resizeHandler.setPreviousSize(),
      be(this.clear.bind(this));
  }
  initParticles() {
    this.init();
  }
  init() {
    try {
      const e = window.SplitText || C.SplitText;
      if (!e) {
        console.warn(
          "SplitText is not available. Please include GSAP SplitText plugin."
        );
        return;
      }
      const t = new e(this.DOM.el, { type: "chars", charsClass: "char" });
      C.killTweensOf([this.DOM.el, ...this.DOM.listChars]),
        (this.textSplit = t),
        this.DOM.el.classList.add(Bi.counter);
      const r = t.chars,
        n = globalThis.getComputedStyle(this.DOM.el).fontSize;
      if (!(r != null && r.length)) return;
      for (const s in r) {
        const o = r[s],
          a = document.createElement("span"),
          l = o.innerText === "1";
        if (
          (a.classList.add(Bi.counter_text),
          (a.style.height = n),
          l && o.classList.add("char__one"),
          this.isSpecial && o.classList.add("char__special"),
          !isNaN(parseFloat(o.innerText)))
        ) {
          const c = parseFloat(o.innerText);
          a.insertAdjacentHTML(
            "beforeend",
            `<span data-value="${c}"
                  class=${l ? `${Bi.textSpacing}` : ""}>
                  <span>&ndash;</span>
                        ${Array(c + 1)
                          .join("0")
                          .split("0")
                          .map(
                            (u, f) => `
                                <span>
                                ${f}
                                </span>
                            `
                          )
                          .join("")}
        			</span>`
          ),
            o.removeChild(o.firstChild),
            o.appendChild(a);
          const d = a.querySelector("span[data-value]");
          this.DOM.listChars.push(d);
          const { removeEvent: h } = qs({
            el: this.DOM.el,
            animIn: (u, f) => {
              this.animIn(u, f), h();
            },
          });
          be(() => {
            h(), this.revert();
          });
        }
      }
      this.DOM.listChars.length > 0 &&
        (this.old = this.DOM.listChars.map((s) =>
          parseInt(s.getAttribute("data-value") || "0")
        ));
    } catch (e) {
      console.warn("Failed to initialize SplitText:", e);
    }
  }
  handleResize() {
    var e;
    if (
      (console.log("handleResize________________"),
      !(!((e = this.DOM) != null && e.el) || !this.DOM.el.isConnected))
    )
      try {
        this.revert(), (this.DOM.listChars = []), this.init(), this.animIn();
      } catch (t) {
        console.warn("TextCounter handleResize failed:", t);
      }
  }
  animIn(e, t, r) {
    const n = t === "first-load" ? 1.2 : 0.8,
      s = t === "first-load" ? 0.025 : 0.015;
    C.to(this.DOM.listChars, {
      duration: n,
      ease: "power1",
      y: (o, a) =>
        `-${(parseInt(a.getAttribute("data-value") || "0") + 1) * 100}%`,
      stagger: { amount: s, from: "end" },
      onComplete: () => {
        r == null || r();
      },
      delay: e,
    });
  }
  createNumberArray(e) {
    const t = e.toString().split(""),
      r = this.DOM.listChars.length;
    for (let n = 0; t.length < r; n++)
      t[0] === "-" && (t[0] = "0"), t.unshift("0");
    return t.map((n) => parseInt(n));
  }
  createNumberHTML(e, t, r) {
    var s;
    const n = r.querySelectorAll("span[data-value]");
    for (let o = 0; o < n.length; o++) {
      const a = n[o],
        l = t[o] ?? 0,
        c = e[o] ?? 0,
        d = this.calcDeltaBetweenNumbers();
      a.setAttribute("data-between", "10"),
        a.setAttribute("data-value", String(c)),
        a.setAttribute("data-old-value", String(l)),
        (a.innerHTML = d.join(""));
      const h = (s = a.parentElement) == null ? void 0 : s.parentElement;
      h &&
        (c === 1
          ? (h.classList.add("char__one"), h.classList.remove(Bi.textSpacing))
          : (h.classList.remove("char__one"),
            h.classList.remove(Bi.textSpacing)));
    }
    return r;
  }
  calcDeltaBetweenNumbers() {
    return Array.from({ length: 10 }, (t, r) => 9 - r).map(
      (t) => `<span>${t}</span>`
    );
  }
  animateNumber(e) {
    if (!this.DOM.listChars || this.DOM.listChars.length === 0) {
      console.warn(
        "TextCounter: listChars not initialized. Call init() first."
      );
      return;
    }
    const t = this.createNumberArray(e),
      r = this.DOM.listChars.length;
    for (
      (!this.old || this.old.length === 0) &&
      (this.old = this.DOM.listChars.map((n) =>
        parseInt(n.getAttribute("data-value") || "0")
      ));
      this.old.length < r;

    )
      this.old.unshift(0);
    this.old.length > r && (this.old = this.old.slice(-r)),
      this.createNumberHTML(t, this.old, this.DOM.el),
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const n = Array.from(
            this.DOM.el.querySelectorAll("span[data-between]")
          );
          C.killTweensOf([...n]);
          for (const s of n) {
            const o = Number(s.getAttribute("data-old-value") || "0"),
              a = Number(s.getAttribute("data-value") || "0"),
              l = (9 - o) * 100,
              c = (9 - a) * 100;
            if (o === a) {
              C.set(s, { y: `-${l}%` });
              continue;
            }
            C.set(s, { y: `-${l}%` }),
              C.to(s, {
                duration: 1,
                ease: "ease",
                y: `-${c}%`,
                stagger: { amount: 0.025, from: "end" },
              });
          }
          this.old = t;
        });
      });
  }
  revert() {
    var e;
    C.killTweensOf(this.DOM.el),
      (e = this.textSplit) == null || e.revert(),
      (this.textSplit = null),
      (this.DOM.listChars = []),
      (this.old = [1, 1, 0]);
  }
  clear() {
    this.resizeHandler &&
      (this.resizeHandler.destroy(), (this.resizeHandler = null)),
      this.revert();
  }
}
const jp = "_text__fade_n49h1_1",
  Yp = { text__fade: jp };
class Hh {
  constructor(e, t = {}) {
    _(this, "onHover");
    _(this, "DOM");
    _(this, "options");
    _(this, "removeEvent");
    (this.DOM = { el: e }), (this.options = { ...t }), this.addAnimType();
  }
  addAnimType() {
    this.DOM.el.classList.add(Yp.fade);
    let e;
    switch (this.options.type) {
      case "fade_tran":
        C.set(this.DOM.el, { opacity: 0, y: "2.4rem" }),
          (e = {
            to: {
              keyframes: [
                { opacity: 1, ease: "power3.inOut", duration: 0.8 },
                { y: 0, ease: "power3.out", duration: 0.8, delay: -0.6 },
              ],
              delay: this.options.delay || 0,
            },
            out: { opacity: 0, y: -30, ease: "power3.inOut", duration: 0.6 },
          });
        break;
      default:
        C.set(this.DOM.el, { opacity: 0, y: "2rem" }),
          (e = {
            to: {
              opacity: 1,
              ease: "power3.inOut",
              duration: 1,
              y: 0,
              delay: this.options.delay || 0,
              clearProps: "all",
            },
            out: { opacity: 0, ease: "power3.inOut", duration: 0.6 },
          });
        break;
    }
    (this.options.to = { ...e.to, ...this.options.to }),
      (this.options.out = { ...e.out, ...this.options.out }),
      Ti(() => {
        const { removeEvent: t } = qs({
          el: this.DOM.el,
          animIn: (r, n) => {
            this.animIn(r, n), t();
          },
          start: this.options.start,
        });
        (this.removeEvent = t),
          be(() => {
            t();
          });
      }),
      this.options.from && C.set(this.DOM.el, this.options.from);
  }
  animIn(e = 0, t) {
    const r = Object.assign({ delay: 0 }, this.options.to);
    (r.delay += e),
      t === "transition" && (r.duration = (r.duration || 1) * 0.7),
      C.killTweensOf(this.DOM.el),
      this.options.to && C.to(this.DOM.el, r),
      this.removeEvent && this.removeEvent();
  }
}
const Ma = 110,
  Xp = 1e3,
  Kp = 20,
  Zp = 250;
class fs {
  constructor(e, t, r = !1) {
    _(this, "el");
    _(this, "splitText", null);
    _(this, "animation", null);
    _(this, "options");
    _(this, "isManual");
    _(this, "resizeHandler", null);
    _(this, "removeEvent", null);
    _(this, "hasAnimated", !1);
    _(this, "timeout", null);
    _(this, "isInitialized", !1);
    _(this, "isDestroyed", !1);
    (this.el = e),
      (this.isManual = r),
      (this.options = t ?? {}),
      be(this.clear.bind(this)),
      this.isManual || this.animInit();
  }
  animInit() {
    (this.isInitialized && !this.isDestroyed) ||
      ((this.isInitialized = !0),
      (this.isDestroyed = !1),
      ei(this.waitingLoadedFonts.bind(this)),
      this.setupResizeHandler());
  }
  setupResizeHandler() {
    this.resizeHandler = Hs(
      null,
      () => {
        this.handleResize();
      },
      { threshold: Kp, debounceDelay: Zp, immediate: !1 }
    );
  }
  handleResize() {
    var e;
    if (
      (e = this.el) != null &&
      e.isConnected &&
      !(this.removeEvent === null && !this.hasAnimated)
    )
      try {
        if (this.hasAnimated) {
          this.updateSplitText();
          return;
        }
        this.cleanupBeforeReinit(),
          this.initSplitText(),
          this.setupAnimHelper();
      } catch (t) {
        console.warn("TextMask handleResize failed:", t);
      }
  }
  cleanupBeforeReinit() {
    this.removeEvent && (this.removeEvent(), (this.removeEvent = null)),
      this.animation &&
        (C.killTweensOf(this.animation), (this.animation = null)),
      this.revertSplitText();
  }
  updateSplitText() {
    var e, t;
    try {
      this.animation &&
        (C.killTweensOf(this.animation), (this.animation = null)),
        this.revertSplitText(),
        this.initSplitText(),
        (t = (e = this.splitText) == null ? void 0 : e.lines) != null &&
          t.length &&
          C.set(this.splitText.lines, { yPercent: 0 });
    } catch (r) {
      console.warn("TextMask updateSplitText failed:", r);
    }
  }
  revertSplitText() {
    var e;
    (e = this.splitText) != null &&
      e.revert &&
      (this.splitText.revert(), (this.splitText = null));
  }
  getSplitTextClass() {
    return window.SplitText || C.SplitText || null;
  }
  initSplitText() {
    var e, t;
    if (!(this.splitText && !this.isDestroyed))
      try {
        const r = this.getSplitTextClass();
        if (!r) {
          console.warn(
            "SplitText is not available. Please include GSAP SplitText plugin."
          );
          return;
        }
        (this.splitText = new r(this.el, {
          type: "words,lines",
          linesClass: "line",
          charsClass: "char",
          wordsClass: "word",
        })),
          (t = (e = this.splitText) == null ? void 0 : e.lines) != null &&
            t.length &&
            (this.wrapLinesWithMask(),
            C.set(this.splitText.lines, { yPercent: Ma }));
      } catch (r) {
        console.warn("Failed to initialize SplitText:", r);
      }
  }
  wrapLinesWithMask() {
    var e;
    (e = this.splitText) != null &&
      e.lines &&
      this.splitText.lines.forEach((t) => {
        const r = document.createElement("div");
        r.classList.add("line__mask");
        const n = t.parentNode;
        n && (n.insertBefore(r, t), r.appendChild(t));
      });
  }
  setupAnimHelper() {
    const { removeEvent: e } = qs({
      el: this.el,
      animIn: (t, r) => {
        this.animIn(t, r), e == null || e();
      },
    });
    this.removeEvent = e;
  }
  waitingLoadedFonts() {
    xh(() => {
      this.init();
    });
  }
  init() {
    (this.isInitialized && !this.isDestroyed && this.splitText) ||
      (this.initSplitText(), this.isManual || this.setupAnimHelper());
  }
  animIn(e, t) {
    var n, s;
    if (
      (this.animation &&
        (C.killTweensOf(this.animation), (this.animation = null)),
      !(
        (s = (n = this.splitText) == null ? void 0 : n.lines) != null &&
        s.length
      ))
    )
      return;
    const r = this.getAnimConfig(e, t);
    this.animation = C.to(this.splitText.lines, r);
  }
  getAnimConfig(e, t) {
    var s;
    const r = e ?? ((s = this.options) == null ? void 0 : s.delay) ?? 0,
      n = () => {
        this.hasAnimated = !0;
      };
    return t === "first-load"
      ? {
          yPercent: 0,
          duration: 1.2,
          ease: "power3",
          stagger: 0.1,
          delay: r,
          onComplete: n,
        }
      : {
          yPercent: 0,
          duration: 0.8,
          ease: "power2",
          stagger: 0.05,
          delay: r,
          onComplete: n,
        };
  }
  animInFormTo(e) {
    var t, r;
    (t = this.splitText) != null &&
      t.lines &&
      (this.animation = C.fromTo(
        this.splitText.lines,
        { yPercent: Ma },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power2",
          delay: e ?? ((r = this.options) == null ? void 0 : r.delay) ?? 0,
        }
      ));
  }
  animOut(e) {
    var t, r;
    (t = this.splitText) != null &&
      t.lines &&
      (this.animation = C.to(this.splitText.lines, {
        yPercent: -Ma,
        duration: 0.8,
        ease: "power2",
        stagger: 0.05,
        delay: e ?? ((r = this.options) == null ? void 0 : r.delay) ?? 0,
      }));
  }
  revert() {
    this.animation && (C.killTweensOf(this.animation), (this.animation = null)),
      this.revertSplitText(),
      (this.isDestroyed = !0),
      (this.isInitialized = !1);
  }
  clear() {
    this.timeout && (clearTimeout(this.timeout), (this.timeout = null)),
      (this.timeout = setTimeout(() => {
        this.destroy();
      }, Xp));
  }
  destroy() {
    var e;
    (this.isDestroyed = !0),
      (this.isInitialized = !1),
      (this.hasAnimated = !1),
      this.animation &&
        (C.killTweensOf(this.animation), (this.animation = null)),
      this.removeEvent && (this.removeEvent(), (this.removeEvent = null)),
      this.resizeHandler &&
        (this.resizeHandler.destroy(), (this.resizeHandler = null)),
      (e = this.splitText) != null &&
        e.revert &&
        requestAnimationFrame(() => {
          var t;
          (t = this.splitText) != null &&
            t.revert &&
            (this.splitText.revert(), (this.splitText = null));
        });
  }
}
const Qp = "bloom",
  xa = "play";
C.registerPlugin(U);
class Jp extends HTMLElement {
  constructor() {
    super(...arguments);
    _(this, "scrollTrigger");
  }
  connectedCallback() {
    this.classList.add(Qp), this.init();
  }
  disconnectedCallback() {
    this.destroy();
  }
  init() {
    if (this.scrollTrigger) return;
    const t = this.parentElement,
      r = C.timeline({
        scrollTrigger: {
          trigger: t || this,
          start: "top bottom",
          end: "bottom top",
          onToggle: (n) => {
            n.isActive ? this.classList.add(xa) : this.classList.remove(xa);
          },
        },
      });
    this.scrollTrigger = r.scrollTrigger;
  }
  destroy() {
    var t;
    (t = this.scrollTrigger) == null || t.kill(),
      (this.scrollTrigger = void 0),
      this.classList.remove(xa);
  }
}
customElements.get("bloom-element") ||
  customElements.define("bloom-element", Jp);
const md = "c7-toast-container",
  e1 = 3600,
  t1 = 200;
let Sr = null,
  r1 = 0;
const Xr = new Map(),
  n1 = () => {
    if (typeof document > "u") return null;
    if (Sr && document.body.contains(Sr)) return Sr;
    const i = document.getElementById(md);
    if (i) return (Sr = i), Sr;
    const e = document.createElement("div");
    return (
      (e.id = md),
      (e.className = "c7-toast-container"),
      e.setAttribute("role", "status"),
      document.body.appendChild(e),
      (Sr = e),
      Sr
    );
  },
  i1 = () => {
    const i = "http://www.w3.org/2000/svg",
      e = document.createElementNS(i, "svg");
    e.setAttribute("viewBox", "0 0 24 24"),
      e.setAttribute("fill", "none"),
      e.setAttribute("stroke", "currentColor"),
      e.setAttribute("width", "12"),
      e.setAttribute("height", "12"),
      e.setAttribute("stroke-width", "1.5"),
      e.setAttribute("stroke-linecap", "round"),
      e.setAttribute("stroke-linejoin", "round");
    const t = document.createElementNS(i, "line");
    t.setAttribute("x1", "18"),
      t.setAttribute("y1", "6"),
      t.setAttribute("x2", "6"),
      t.setAttribute("y2", "18");
    const r = document.createElementNS(i, "line");
    return (
      r.setAttribute("x1", "6"),
      r.setAttribute("y1", "6"),
      r.setAttribute("x2", "18"),
      r.setAttribute("y2", "18"),
      e.appendChild(t),
      e.appendChild(r),
      e
    );
  },
  qh = (i) => {
    const e = Xr.get(i);
    e != null &&
      e.timeoutId &&
      (window.clearTimeout(e.timeoutId), (e.timeoutId = void 0));
  },
  s1 = (i) => {
    const e = Xr.get(i);
    e &&
      (e.element.remove(),
      Xr.delete(i),
      Xr.size === 0 && Sr && (Sr.remove(), (Sr = null)));
  },
  Ho = (i) => {
    const e = Xr.get(i);
    e &&
      (qh(i),
      e.element.classList.remove("c7-toast--visible"),
      e.element.classList.add("c7-toast--leaving"),
      window.setTimeout(() => {
        s1(i);
      }, t1));
  },
  gd = (i, e) => {
    if (e <= 0) return;
    const t = window.setTimeout(() => Ho(i), e),
      r = Xr.get(i);
    r && (r.timeoutId = t);
  },
  o1 = (i) => {
    const e = document.createElement("div");
    (e.className = "c7-toast"), (e.dataset.type = i.type);
    const t = document.createElement("div");
    t.className = "c7-toast__content";
    const r = document.createElement("p");
    if (
      ((r.className = "c7-toast__title"),
      (r.textContent = i.title),
      r.setAttribute("data-toast-title", "true"),
      t.appendChild(r),
      i.description)
    ) {
      const s = document.createElement("p");
      (s.className = "c7-toast__description"),
        (s.textContent = i.description),
        s.setAttribute("data-toast-description", "true"),
        t.appendChild(s);
    }
    const n = document.createElement("button");
    return (
      (n.type = "button"),
      (n.className = "c7-toast__close"),
      n.setAttribute("aria-label", "Dismiss notification"),
      n.appendChild(i1()),
      n.addEventListener("click", () => Ho(i.id)),
      e.appendChild(t),
      e.appendChild(n),
      requestAnimationFrame(() => {
        e.classList.add("c7-toast--visible");
      }),
      e
    );
  },
  a1 = (i, e) => {
    i.dataset.type = e.type;
    const t = i.querySelector("[data-toast-title]");
    t && (t.textContent = e.title);
    const r = i.querySelector("[data-toast-description]");
    if (e.description)
      if (r) r.textContent = e.description;
      else {
        const n = document.createElement("p");
        (n.className = "c7-toast__description"),
          (n.textContent = e.description),
          n.setAttribute("data-toast-description", "true");
        const s = i.querySelector(".c7-toast__content");
        s == null || s.appendChild(n);
      }
    else r && r.remove();
  },
  l1 = (i) => {
    const e = n1();
    if (!e) return;
    const t = Xr.get(i.id);
    if (t) {
      a1(t.element, i), qh(i.id), gd(i.id, i.duration);
      return;
    }
    const r = o1(i);
    e.appendChild(r), Xr.set(i.id, { element: r }), gd(i.id, i.duration);
  },
  An = (i, e) => {
    if (typeof document > "u" || !i) return;
    const {
        description: t,
        duration: r = e1,
        type: n = "default",
        id: s,
      } = e || {},
      o = s ?? `toast-${++r1}`;
    l1({ id: o, title: i, description: t, duration: r, type: n });
  },
  Bh = {
    default: (i, e) => An(i, { ...e, type: "default" }),
    success: (i, e) => An(i, { ...e, type: "success" }),
    info: (i, e) => An(i, { ...e, type: "info" }),
    warning: (i, e) => An(i, { ...e, type: "warning" }),
    error: (i, e) => An(i, { ...e, type: "error" }),
    dismiss: (i) => {
      typeof i > "u" ? [...Xr.keys()].forEach((e) => Ho(e)) : Ho(i);
    },
  };
typeof window < "u" && ((window.toast = Bh), (window.showToast = An));
class c1 {
  constructor(e) {
    _(this, "form");
    _(this, "errorElements", new Map());
    (this.form = e), this.initErrorElements();
  }
  initErrorElements() {
    var e;
    (e = this.form) == null ||
      e.querySelectorAll(".input-field").forEach((t) => {
        let r = t.querySelector(".input-error");
        r ||
          ((r = document.createElement("div")),
          r.classList.add("txt", "txt-14", "input-error"),
          (r.innerHTML = ""),
          t.appendChild(r));
        const n = t.querySelector("input"),
          s = t.querySelector("textarea"),
          o = n || s;
        o &&
          (this.errorElements.set(o, r),
          C.set(r, { height: 0, overwrite: "auto" }));
      });
  }
  showErrors(e) {
    var t;
    !this.form ||
      !e ||
      (t = this.form) == null ||
      t.querySelectorAll(".input-field").forEach((r) => {
        const n = r.querySelector("input"),
          s = r.querySelector("textarea"),
          o = n || s;
        if (!o) return;
        const a = this.errorElements.get(o);
        if (!a) return;
        const l = o.getAttribute("name"),
          c = e[l];
        e.hasOwnProperty(l)
          ? (C.to(a, {
              duration: 0.5,
              ease: "power3.out",
              marginTop: "0.8rem",
              height: "auto",
              overwrite: "auto",
            }),
            (a.innerHTML = c),
            r.classList.add("on-error"))
          : (this.hideError(o), r.classList.remove("on-error"));
      });
  }
  hideError(e) {
    const t = this.errorElements.get(e);
    if (!t) return;
    const r = e.closest(".input-field");
    r &&
      C.to(t, {
        duration: 0.5,
        ease: "power3.out",
        marginTop: 0,
        height: 0,
        overwrite: "auto",
        onComplete: () => {
          (t.innerHTML = ""), r.classList.remove("on-error");
        },
      });
  }
  clearAllErrors() {
    this.errorElements.forEach((e, t) => {
      const r = t.closest(".input-field");
      C.to(e, {
        duration: 0.6,
        ease: "power3.out",
        height: 0,
        overwrite: "auto",
        onComplete: () => {
          (e.innerHTML = ""), r == null || r.classList.remove("on-error");
        },
      });
    });
  }
  clear() {
    this.errorElements.forEach((e, t) => {
      C.killTweensOf(e);
      const r = t.closest(".input-field");
      r == null || r.classList.remove("on-error");
    }),
      this.errorElements.clear();
  }
  destroy() {
    this.clear(), (this.form = null);
  }
}
class d1 {
  constructor(e, t, r) {
    _(this, "form");
    _(this, "validator");
    _(this, "errorManager");
    (this.form = e), (this.validator = t), (this.errorManager = r);
  }
  submit() {
    const e = { status: !1 },
      t = this.validator.mapFormToObject(this.form),
      r = this.validator.mapObjectFormToValidate(this.form, t),
      { errorObj: n, isValidated: s } = this.validator.validateForm({
        formsObj: t,
        rules: r,
      });
    return s
      ? ((e.status = !0), { success: e })
      : ((e.status = !1), { errorObj: n, success: e });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { errorObj: t, success: r } = this.submit();
    r.status
      ? setTimeout(() => {
          this.showSuccessMessage();
        }, 200)
      : (t && this.errorManager.showErrors(t), e.preventDefault());
  }
  showSuccessMessage() {
    var t, r;
    const e =
      (r =
        (t = this == null ? void 0 : this.form) == null
          ? void 0
          : t.parentElement) == null
        ? void 0
        : r.querySelector(".f-submit-success");
    e &&
      C.to(e, {
        display: "block !important",
        duration: 0.1,
        onComplete: () => {
          C.to(e, {
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            pointerEvents: "all",
          });
        },
      });
  }
  reset() {
    var e;
    this.form.reset(),
      (e = this.errorManager) == null || e.clearAllErrors(),
      this.showSuccessMessage();
  }
  destroy() {
    var t, r;
    const e =
      (r =
        (t = this == null ? void 0 : this.form) == null
          ? void 0
          : t.parentElement) == null
        ? void 0
        : r.querySelector(".f-submit-success");
    e && C.killTweensOf(e),
      (this.form = null),
      (this.validator = null),
      (this.errorManager = null);
  }
}
const u1 = {
  version: 4,
  country_calling_codes: {
    1: [
      "US",
      "AG",
      "AI",
      "AS",
      "BB",
      "BM",
      "BS",
      "CA",
      "DM",
      "DO",
      "GD",
      "GU",
      "JM",
      "KN",
      "KY",
      "LC",
      "MP",
      "MS",
      "PR",
      "SX",
      "TC",
      "TT",
      "VC",
      "VG",
      "VI",
    ],
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    880: ["BD"],
    886: ["TW"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"],
  },
  countries: {
    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    AD: [
      "376",
      "00",
      "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
      [6, 8, 9],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
      ],
    ],
    AE: [
      "971",
      "00",
      "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
      [5, 6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
        ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
      ],
      "0",
    ],
    AF: [
      "93",
      "00",
      "[2-7]\\d{8}",
      [9],
      [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]],
      "0",
    ],
    AG: [
      "1",
      "011",
      "(?:268|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([457]\\d{6})$|1",
      "268$1",
      0,
      "268",
    ],
    AI: [
      "1",
      "011",
      "(?:264|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2457]\\d{6})$|1",
      "264$1",
      0,
      "264",
    ],
    AL: [
      "355",
      "00",
      "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
      [6, 7, 8, 9],
      [
        ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
      ],
      "0",
    ],
    AM: [
      "374",
      "00",
      "(?:[1-489]\\d|55|60|77)\\d{6}",
      [8],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"],
      ],
      "0",
    ],
    AO: [
      "244",
      "00",
      "[29]\\d{8}",
      [9],
      [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
    ],
    AR: [
      "54",
      "00",
      "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
      [10, 11],
      [
        [
          "(\\d{4})(\\d{2})(\\d{4})",
          "$1 $2-$3",
          [
            "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
            "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
            "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
            "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
          ],
          "0$1",
          1,
        ],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
        [
          "(\\d)(\\d{4})(\\d{2})(\\d{4})",
          "$2 15-$3-$4",
          [
            "9(?:2[2-469]|3[3-578])",
            "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
            "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
            "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
            "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
          ],
          "0$1",
          0,
          "$1 $2 $3-$4",
        ],
        [
          "(\\d)(\\d{2})(\\d{4})(\\d{4})",
          "$2 15-$3-$4",
          ["91"],
          "0$1",
          0,
          "$1 $2 $3-$4",
        ],
        ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
        [
          "(\\d)(\\d{3})(\\d{3})(\\d{4})",
          "$2 15-$3-$4",
          ["9"],
          "0$1",
          0,
          "$1 $2 $3-$4",
        ],
      ],
      "0",
      0,
      "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
      "9$1",
    ],
    AS: [
      "1",
      "011",
      "(?:[58]\\d\\d|684|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([267]\\d{6})$|1",
      "684$1",
      0,
      "684",
    ],
    AT: [
      "43",
      "00",
      "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
        ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
        ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
        [
          "(\\d{3})(\\d{3,10})",
          "$1 $2",
          [
            "(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
            "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
          ],
          "0$1",
        ],
        ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"],
      ],
      "0",
    ],
    AU: [
      "61",
      "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
      "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
      [5, 6, 7, 8, 9, 10, 12],
      [
        ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]],
      ],
      "0",
      0,
      "(183[12])|0",
      0,
      0,
      0,
      [
        [
          "(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",
          [9],
        ],
        [
          "4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",
          [9],
        ],
        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
        ["190[0-26]\\d{6}", [10]],
        0,
        0,
        0,
        ["163\\d{2,6}", [5, 6, 7, 8, 9]],
        ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
      ],
      "0011",
    ],
    AW: [
      "297",
      "00",
      "(?:[25-79]\\d\\d|800)\\d{4}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
    ],
    AX: [
      "358",
      "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
      "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
      [5, 6, 7, 8, 9, 10, 11, 12],
      0,
      "0",
      0,
      0,
      0,
      0,
      "18",
      0,
      "00",
    ],
    AZ: [
      "994",
      "00",
      "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"],
          "(0$1)",
        ],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"],
      ],
      "0",
    ],
    BA: [
      "387",
      "00",
      "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
      [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"],
      ],
      "0",
    ],
    BB: [
      "1",
      "011",
      "(?:246|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "246$1",
      0,
      "246",
    ],
    BD: [
      "880",
      "00",
      "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
      [6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
        [
          "(\\d{3})(\\d{3,7})",
          "$1-$2",
          [
            "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
          ],
          "0$1",
        ],
        ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
        ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
      ],
      "0",
    ],
    BE: [
      "32",
      "00",
      "4\\d{8}|[1-9]\\d{7}",
      [8, 9],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
        [
          "(\\d)(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[239]|4[23]"],
          "0$1",
        ],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"],
      ],
      "0",
    ],
    BF: [
      "226",
      "00",
      "(?:[025-7]\\d|44)\\d{6}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]],
    ],
    BG: [
      "359",
      "00",
      "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
      [6, 7, 8, 9, 12],
      [
        ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
        ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{2,3})",
          "$1 $2 $3",
          ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
          "0$1",
        ],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
      ],
      "0",
    ],
    BH: [
      "973",
      "00",
      "[136-9]\\d{7}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]],
    ],
    BI: [
      "257",
      "00",
      "(?:[267]\\d|31)\\d{6}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],
    ],
    BJ: [
      "229",
      "00",
      "(?:01\\d|8)\\d{7}",
      [8, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]],
      ],
    ],
    BL: [
      "590",
      "00",
      "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
      [9],
      0,
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
        [
          "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
        ],
        ["80[0-5]\\d{6}"],
        0,
        0,
        0,
        0,
        0,
        ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
      ],
    ],
    BM: [
      "1",
      "011",
      "(?:441|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "441$1",
      0,
      "441",
    ],
    BN: [
      "673",
      "00",
      "[2-578]\\d{6}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
    ],
    BO: [
      "591",
      "00(?:1\\d)?",
      "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",
      [8, 9],
      [
        ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
        ["(\\d{8})", "$1", ["[67]"]],
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]],
      ],
      "0",
      0,
      "0(1\\d)?",
    ],
    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    BR: [
      "55",
      "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
      "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
      [8, 9, 10, 11],
      [
        [
          "(\\d{4})(\\d{4})",
          "$1-$2",
          ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"],
        ],
        ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
        [
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2-$3",
          ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
          "($1)",
        ],
        [
          "(\\d{2})(\\d{5})(\\d{4})",
          "$1 $2-$3",
          ["[16][1-9]|[2-57-9]"],
          "($1)",
        ],
      ],
      "0",
      0,
      "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
      "$2",
    ],
    BS: [
      "1",
      "011",
      "(?:242|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([3-8]\\d{6})$|1",
      "242$1",
      0,
      "242",
    ],
    BT: [
      "975",
      "00",
      "[178]\\d{7}|[2-8]\\d{6}",
      [7, 8],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]],
      ],
    ],
    BW: [
      "267",
      "00",
      "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
      [7, 8, 10],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]],
      ],
    ],
    BY: [
      "375",
      "810",
      "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
      [6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
        ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
        [
          "(\\d{4})(\\d{2})(\\d{3})",
          "$1 $2-$3",
          [
            "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
            "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
          ],
          "8 0$1",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2-$3-$4",
          ["1(?:[56]|7[467])|2[1-3]"],
          "8 0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"],
      ],
      "8",
      0,
      "0|80?",
      0,
      0,
      0,
      0,
      "8~10",
    ],
    BZ: [
      "501",
      "00",
      "(?:0800\\d|[2-8])\\d{6}",
      [7, 11],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
        ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
      ],
    ],
    CA: [
      "1",
      "011",
      "[2-9]\\d{9}|3\\d{6}",
      [7, 10],
      0,
      "1",
      0,
      0,
      0,
      0,
      0,
      [
        [
          "(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",
          [10],
        ],
        ["", [10]],
        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
        ["900[2-9]\\d{6}", [10]],
        [
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",
          [10],
        ],
        0,
        ["310\\d{4}", [7]],
        0,
        ["600[2-9]\\d{6}", [10]],
      ],
    ],
    CC: [
      "61",
      "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
      "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
      [6, 7, 8, 9, 10, 12],
      0,
      "0",
      0,
      "([59]\\d{7})$|0",
      "8$1",
      0,
      0,
      [
        [
          "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
          [9],
        ],
        [
          "4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",
          [9],
        ],
        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
        ["190[0-26]\\d{6}", [10]],
        0,
        0,
        0,
        0,
        ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
      ],
      "0011",
    ],
    CD: [
      "243",
      "00",
      "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
      [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
        ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"],
      ],
      "0",
    ],
    CF: [
      "236",
      "00",
      "(?:[27]\\d{3}|8776)\\d{4}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],
    ],
    CG: [
      "242",
      "00",
      "222\\d{6}|(?:0\\d|80)\\d{7}",
      [9],
      [
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
      ],
    ],
    CH: [
      "41",
      "00",
      "8\\d{11}|[2-9]\\d{8}",
      [9, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[2-79]|81"],
          "0$1",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["8"],
          "0$1",
        ],
      ],
      "0",
    ],
    CI: [
      "225",
      "00",
      "[02]\\d{9}",
      [10],
      [
        ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]],
      ],
    ],
    CK: [
      "682",
      "00",
      "[2-578]\\d{4}",
      [5],
      [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],
    ],
    CL: [
      "56",
      "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
      "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
      [9, 10, 11],
      [
        ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]],
        [
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],
          "($1)",
        ],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
        ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]],
      ],
    ],
    CM: [
      "237",
      "00",
      "[26]\\d{8}|88\\d{6,7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
        [
          "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["[26]|88"],
        ],
      ],
    ],
    CN: [
      "86",
      "00|1(?:[12]\\d|79)\\d\\d00",
      "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",
      [7, 8, 9, 10, 11, 12],
      [
        [
          "(\\d{2})(\\d{5,6})",
          "$1 $2",
          [
            "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
            "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
            "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
          ],
          "0$1",
        ],
        [
          "(\\d{3})(\\d{5,6})",
          "$1 $2",
          [
            "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
            "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
            "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
            "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
          ],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
        [
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          [
            "10|2(?:[02-57-9]|1[1-9])",
            "10|2(?:[02-57-9]|1[1-9])",
            "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
          ],
          "0$1",
          1,
        ],
        [
          "(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          [
            "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
          ],
          "0$1",
          1,
        ],
        ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1],
      ],
      "0",
      0,
      "(1(?:[12]\\d|79)\\d\\d)|0",
      0,
      0,
      0,
      0,
      "00",
    ],
    CO: [
      "57",
      "00(?:4(?:[14]4|56)|[579])",
      "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",
      [8, 10, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
        ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]],
        ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"],
      ],
      "0",
      0,
      "0([3579]|4(?:[14]4|56))?",
    ],
    CR: [
      "506",
      "00",
      "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
      [8, 10],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]],
      ],
      0,
      0,
      "(19(?:0[0-2468]|1[09]|20|66|77|99))",
    ],
    CU: [
      "53",
      "119",
      "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
      [6, 7, 8, 10],
      [
        ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
        ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
        ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"],
      ],
      "0",
    ],
    CV: [
      "238",
      "0",
      "(?:[2-59]\\d\\d|800)\\d{4}",
      [7],
      [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],
    ],
    CW: [
      "599",
      "00",
      "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
      [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      "[69]",
    ],
    CX: [
      "61",
      "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
      "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
      [6, 7, 8, 9, 10, 12],
      0,
      "0",
      0,
      "([59]\\d{7})$|0",
      "8$1",
      0,
      0,
      [
        [
          "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
          [9],
        ],
        [
          "4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",
          [9],
        ],
        ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
        ["190[0-26]\\d{6}", [10]],
        0,
        0,
        0,
        0,
        ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
        ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]],
      ],
      "0011",
    ],
    CY: [
      "357",
      "00",
      "(?:[279]\\d|[58]0)\\d{6}",
      [8],
      [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
    ],
    CZ: [
      "420",
      "00",
      "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
      [9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
        ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
      ],
    ],
    DE: [
      "49",
      "00",
      "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      [
        ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
        [
          "(\\d{3})(\\d{3,12})",
          "$1 $2",
          [
            "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
            "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
          ],
          "0$1",
        ],
        [
          "(\\d{4})(\\d{2,11})",
          "$1 $2",
          [
            "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
            "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
          ],
          "0$1",
        ],
        ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
        ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
        ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
        ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
        ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
        ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
        ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
        ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
        [
          "(\\d{5})(\\d{6})",
          "$1 $2",
          ["15[03568]", "15(?:[0568]|3[13])"],
          "0$1",
        ],
        ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
        ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"],
      ],
      "0",
    ],
    DJ: [
      "253",
      "00",
      "(?:2\\d|77)\\d{6}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],
    ],
    DK: [
      "45",
      "00",
      "[2-9]\\d{7}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],
    ],
    DM: [
      "1",
      "011",
      "(?:[58]\\d\\d|767|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-7]\\d{6})$|1",
      "767$1",
      0,
      "767",
    ],
    DO: [
      "1",
      "011",
      "(?:[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      0,
      0,
      0,
      "8001|8[024]9",
    ],
    DZ: [
      "213",
      "00",
      "(?:[1-4]|[5-79]\\d|80)\\d{7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
      ],
      "0",
    ],
    EC: [
      "593",
      "00",
      "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
      [8, 9, 10, 11],
      [
        [
          "(\\d)(\\d{3})(\\d{4})",
          "$1 $2-$3",
          ["[2-7]"],
          "(0$1)",
          0,
          "$1-$2-$3",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]],
      ],
      "0",
    ],
    EE: [
      "372",
      "00",
      "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
      [7, 8, 10],
      [
        [
          "(\\d{3})(\\d{4})",
          "$1 $2",
          [
            "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
            "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
          ],
        ],
        [
          "(\\d{4})(\\d{3,4})",
          "$1 $2",
          ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"],
        ],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
      ],
    ],
    EG: [
      "20",
      "00",
      "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
      [8, 9, 10],
      [
        ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
        [
          "(\\d{2})(\\d{6,7})",
          "$1 $2",
          ["1[35]|[4-6]|8[2468]|9[235-7]"],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"],
      ],
      "0",
    ],
    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    ER: [
      "291",
      "00",
      "[178]\\d{6}",
      [7],
      [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],
      "0",
    ],
    ES: [
      "34",
      "00",
      "[5-9]\\d{8}",
      [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]],
      ],
    ],
    ET: [
      "251",
      "00",
      "(?:11|[2-579]\\d)\\d{7}",
      [9],
      [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]],
      "0",
    ],
    FI: [
      "358",
      "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
      "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
      [5, 6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
        ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"],
        ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
        ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
        [
          "(\\d)(\\d{4,9})",
          "$1 $2",
          ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
          "0$1",
        ],
      ],
      "0",
      0,
      0,
      0,
      0,
      "1[03-79]|[2-9]",
      0,
      "00",
    ],
    FJ: [
      "679",
      "0(?:0|52)",
      "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
      [7, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    FK: ["500", "00", "[2-7]\\d{4}", [5]],
    FM: [
      "691",
      "00",
      "(?:[39]\\d\\d|820)\\d{4}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],
    ],
    FO: [
      "298",
      "00",
      "[2-9]\\d{5}",
      [6],
      [["(\\d{6})", "$1", ["[2-9]"]]],
      0,
      0,
      "(10(?:01|[12]0|88))",
    ],
    FR: [
      "33",
      "00",
      "[1-9]\\d{8}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
        [
          "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["[1-79]"],
          "0$1",
        ],
      ],
      "0",
    ],
    GA: [
      "241",
      "00",
      "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
      [7, 8],
      [
        ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"],
      ],
      0,
      0,
      "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
      "$1",
    ],
    GB: [
      "44",
      "00",
      "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
      [7, 9, 10],
      [
        [
          "(\\d{3})(\\d{4})",
          "$1 $2",
          ["800", "8001", "80011", "800111", "8001111"],
          "0$1",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3",
          ["845", "8454", "84546", "845464"],
          "0$1",
        ],
        ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
        [
          "(\\d{5})(\\d{4,5})",
          "$1 $2",
          [
            "1(?:38|5[23]|69|76|94)",
            "1(?:(?:38|69)7|5(?:24|39)|768|946)",
            "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
          ],
          "0$1",
        ],
        ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
        [
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
          "0$1",
        ],
        ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
      ],
      "0",
      0,
      "0|180020",
      0,
      0,
      0,
      [
        [
          "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
          [9, 10],
        ],
        [
          "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
          [10],
        ],
        ["80[08]\\d{7}|800\\d{6}|8001111"],
        [
          "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
          [7, 10],
        ],
        ["70\\d{8}", [10]],
        0,
        ["(?:3[0347]|55)\\d{8}", [10]],
        [
          "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
          [10],
        ],
        ["56\\d{8}", [10]],
      ],
      0,
      " x",
    ],
    GD: [
      "1",
      "011",
      "(?:473|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "473$1",
      0,
      "473",
    ],
    GE: [
      "995",
      "00",
      "(?:[3-57]\\d\\d|800)\\d{6}",
      [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
      ],
      "0",
    ],
    GF: [
      "594",
      "00",
      "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",
      [9],
      [
        [
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[5-7]|9[47]"],
          "0$1",
        ],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"],
      ],
      "0",
    ],
    GG: [
      "44",
      "00",
      "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
      [7, 9, 10],
      0,
      "0",
      0,
      "([25-9]\\d{5})$|0|180020",
      "1481$1",
      0,
      0,
      [
        ["1481[25-9]\\d{5}", [10]],
        ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
        ["80[08]\\d{7}|800\\d{6}|8001111"],
        ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]],
        ["70\\d{8}", [10]],
        0,
        ["(?:3[0347]|55)\\d{8}", [10]],
        [
          "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
          [10],
        ],
        ["56\\d{8}", [10]],
      ],
    ],
    GH: [
      "233",
      "00",
      "(?:[235]\\d{3}|800)\\d{5}",
      [8, 9],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
      ],
      "0",
    ],
    GI: [
      "350",
      "00",
      "(?:[25]\\d|60)\\d{6}",
      [8],
      [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]],
    ],
    GL: [
      "299",
      "00",
      "(?:19|[2-689]\\d|70)\\d{4}",
      [6],
      [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
    ],
    GM: [
      "220",
      "00",
      "[2-9]\\d{6}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
    ],
    GN: [
      "224",
      "00",
      "722\\d{6}|(?:3|6\\d)\\d{7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
      ],
    ],
    GP: [
      "590",
      "00",
      "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        [
          "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}",
        ],
        [
          "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
        ],
        ["80[0-5]\\d{6}"],
        0,
        0,
        0,
        0,
        0,
        ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
      ],
    ],
    GQ: [
      "240",
      "00",
      "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
      ],
    ],
    GR: [
      "30",
      "00",
      "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
      [10, 11, 12],
      [
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
        [
          "(\\d{4})(\\d{6})",
          "$1 $2",
          ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"],
        ],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
        ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]],
      ],
    ],
    GT: [
      "502",
      "00",
      "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
      [8, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
      ],
    ],
    GU: [
      "1",
      "011",
      "(?:[58]\\d\\d|671|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "671$1",
      0,
      "671",
    ],
    GW: [
      "245",
      "00",
      "[49]\\d{8}|4\\d{6}",
      [7, 9],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]],
      ],
    ],
    GY: [
      "592",
      "001",
      "(?:[2-8]\\d{3}|9008)\\d{3}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
    ],
    HK: [
      "852",
      "00(?:30|5[09]|[126-9]?)",
      "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
      [5, 6, 7, 8, 9, 11],
      [
        ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    HN: [
      "504",
      "00",
      "8\\d{10}|[237-9]\\d{7}",
      [8, 11],
      [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]],
    ],
    HR: [
      "385",
      "00",
      "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
      [7, 8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
      ],
      "0",
    ],
    HT: [
      "509",
      "00",
      "[2-589]\\d{7}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]],
    ],
    HU: [
      "36",
      "00",
      "[235-7]\\d{8}|[1-9]\\d{7}",
      [8, 9],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
        [
          "(\\d{2})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
          "(06 $1)",
        ],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"],
      ],
      "06",
    ],
    ID: [
      "62",
      "00[89]",
      "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
      [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
        ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
        ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
        ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
        ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
        ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
        ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
      ],
      "0",
    ],
    IE: [
      "353",
      "00",
      "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
      [7, 8, 9, 10],
      [
        [
          "(\\d{2})(\\d{5})",
          "$1 $2",
          ["2[24-9]|47|58|6[237-9]|9[35-9]"],
          "(0$1)",
        ],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
        ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
        [
          "(\\d{2})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["[2569]|4[1-69]|7[14]"],
          "(0$1)",
        ],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
        ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
      ],
      "0",
    ],
    IL: [
      "972",
      "0(?:0|1[2-9])",
      "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
      [7, 8, 9, 10, 11, 12],
      [
        ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
        ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
        ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
        ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
        ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]],
      ],
      "0",
    ],
    IM: [
      "44",
      "00",
      "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
      [10],
      0,
      "0",
      0,
      "([25-8]\\d{5})$|0|180020",
      "1624$1",
      0,
      "74576|(?:16|7[56])24",
    ],
    IN: [
      "91",
      "00",
      "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
      [8, 9, 10, 11, 12, 13],
      [
        [
          "(\\d{8})",
          "$1",
          [
            "5(?:0|2[23]|3[03]|[67]1|88)",
            "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
            "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
          ],
          0,
          1,
        ],
        ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
        [
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          [
            "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
            "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
            "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
          ],
          "0$1",
          1,
        ],
        [
          "(\\d{3})(\\d{3})(\\d{4})",
          "$1 $2 $3",
          [
            "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
            "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
          ],
          "0$1",
          1,
        ],
        [
          "(\\d{4})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          [
            "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
            "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
            "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689])\\d|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
          ],
          "0$1",
          1,
        ],
        ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
        [
          "(\\d{4})(\\d{2,4})(\\d{4})",
          "$1 $2 $3",
          ["1(?:6|8[06])", "1(?:6|8[06]0)"],
          0,
          1,
        ],
        ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1],
      ],
      "0",
    ],
    IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    IQ: [
      "964",
      "00",
      "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
      [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
      ],
      "0",
    ],
    IR: [
      "98",
      "00",
      "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
      [4, 5, 6, 7, 10],
      [
        ["(\\d{4,5})", "$1", ["96"], "0$1"],
        [
          "(\\d{2})(\\d{4,5})",
          "$1 $2",
          [
            "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
          ],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
      ],
      "0",
    ],
    IS: [
      "354",
      "00|1(?:0(?:01|[12]0)|100)",
      "(?:38\\d|[4-9])\\d{6}",
      [7, 9],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    IT: [
      "39",
      "00",
      "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
      [6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
        [
          "(\\d{3})(\\d{3,6})",
          "$1 $2",
          [
            "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
            "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))",
          ],
        ],
        ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]],
        ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
        ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      [
        [
          "0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
        ],
        ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
        ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
        [
          "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
          [6, 8, 9, 10],
        ],
        ["1(?:78\\d|99)\\d{6}", [9, 10]],
        ["3[2-8]\\d{9,10}", [11, 12]],
        0,
        0,
        ["55\\d{8}", [10]],
        ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]],
      ],
    ],
    JE: [
      "44",
      "00",
      "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
      [10],
      0,
      "0",
      0,
      "([0-24-8]\\d{5})$|0|180020",
      "1534$1",
      0,
      0,
      [
        ["1534[0-24-8]\\d{5}"],
        ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
        ["80(?:07(?:35|81)|8901)\\d{4}"],
        [
          "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
        ],
        ["701511\\d{4}"],
        0,
        [
          "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
        ],
        [
          "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
        ],
        ["56\\d{8}"],
      ],
    ],
    JM: [
      "1",
      "011",
      "(?:[58]\\d\\d|658|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      0,
      0,
      0,
      "658|876",
    ],
    JO: [
      "962",
      "00",
      "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",
      [8, 9],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"],
      ],
      "0",
    ],
    JP: [
      "81",
      "010",
      "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
      [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
        [
          "(\\d{4})(\\d)(\\d{4})",
          "$1-$2-$3",
          [
            "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
            "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
            "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
          ],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
        [
          "(\\d)(\\d{4})(\\d{4})",
          "$1-$2-$3",
          [
            "3|4(?:2[09]|7[01])|6[1-9]",
            "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]",
          ],
          "0$1",
        ],
        [
          "(\\d{2})(\\d{3})(\\d{4})",
          "$1-$2-$3",
          [
            "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
            "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
          ],
          "0$1",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{4})",
          "$1-$2-$3",
          ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"],
      ],
      "0",
      0,
      "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0",
      "$1",
    ],
    KE: [
      "254",
      "000",
      "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
      [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
      ],
      "0",
    ],
    KG: [
      "996",
      "00",
      "8\\d{9}|[235-9]\\d{8}",
      [9, 10],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"],
      ],
      "0",
    ],
    KH: [
      "855",
      "00[14-9]",
      "1\\d{9}|[1-9]\\d{7,8}",
      [8, 9, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
      ],
      "0",
    ],
    KI: [
      "686",
      "00",
      "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
      [5, 8],
      0,
      "0",
    ],
    KM: [
      "269",
      "00",
      "[3478]\\d{6}",
      [7],
      [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],
    ],
    KN: [
      "1",
      "011",
      "(?:[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-7]\\d{6})$|1",
      "869$1",
      0,
      "869",
    ],
    KP: [
      "850",
      "00|99",
      "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
      [8, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
      ],
      "0",
    ],
    KR: [
      "82",
      "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
      "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
      [5, 6, 8, 9, 10, 11, 12, 13, 14],
      [
        [
          "(\\d{2})(\\d{3,4})",
          "$1-$2",
          ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
          "0$1",
        ],
        ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
        ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
        ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"],
      ],
      "0",
      0,
      "0(8(?:[1-46-8]|5\\d\\d))?",
    ],
    KW: [
      "965",
      "00",
      "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
      [7, 8],
      [
        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]],
      ],
    ],
    KY: [
      "1",
      "011",
      "(?:345|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "345$1",
      0,
      "345",
    ],
    KZ: [
      "7",
      "810",
      "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
      [10, 14],
      0,
      "8",
      0,
      0,
      0,
      0,
      "33622|7",
      0,
      "8~10",
    ],
    LA: [
      "856",
      "00",
      "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
      [8, 9, 10],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"],
      ],
      "0",
    ],
    LB: [
      "961",
      "00",
      "[27-9]\\d{7}|[13-9]\\d{6}",
      [7, 8],
      [
        [
          "(\\d)(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]],
      ],
      "0",
    ],
    LC: [
      "1",
      "011",
      "(?:[58]\\d\\d|758|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-8]\\d{6})$|1",
      "758$1",
      0,
      "758",
    ],
    LI: [
      "423",
      "00",
      "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
      [7, 9],
      [
        [
          "(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3",
          ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
        ],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
      ],
      "0",
      0,
      "(1001)|0",
    ],
    LK: [
      "94",
      "00",
      "[1-9]\\d{8}",
      [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
      ],
      "0",
    ],
    LR: [
      "231",
      "00",
      "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
      [7, 8, 9],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"],
      ],
      "0",
    ],
    LS: [
      "266",
      "00",
      "(?:[256]\\d\\d|800)\\d{5}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],
    ],
    LT: [
      "370",
      "00",
      "(?:[3469]\\d|52|[78]0)\\d{6}",
      [8],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
        ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1],
        ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1],
      ],
      "0",
      0,
      "[08]",
    ],
    LU: [
      "352",
      "00",
      "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
      [4, 5, 6, 7, 8, 9, 10, 11],
      [
        [
          "(\\d{2})(\\d{3})",
          "$1 $2",
          ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
        ],
        [
          "(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3",
          ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
        ],
        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
        [
          "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
          "$1 $2 $3 $4",
          ["2(?:[0367]|4[3-8])"],
        ],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
        [
          "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
          "$1 $2 $3 $4 $5",
          ["2(?:[0367]|4[3-8])"],
        ],
        [
          "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
          "$1 $2 $3 $4",
          ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
        ],
      ],
      0,
      0,
      "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
    ],
    LV: [
      "371",
      "00",
      "(?:[268]\\d|78|90)\\d{6}",
      [8],
      [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]],
    ],
    LY: [
      "218",
      "00",
      "[2-9]\\d{8}",
      [9],
      [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
      "0",
    ],
    MA: [
      "212",
      "00",
      "[5-8]\\d{8}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
        [
          "(\\d{4})(\\d{5})",
          "$1-$2",
          ["5(?:[19]|2[2-46-9]|3[3-9])|8(?:0[89]|92)"],
          "0$1",
        ],
        ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        [
          "5(?:(?:18|4[0679]|5[03])\\d|2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9]))\\d{5}",
        ],
        ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"],
        ["80[0-7]\\d{6}"],
        ["89\\d{7}"],
        0,
        0,
        0,
        0,
        ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"],
      ],
    ],
    MC: [
      "377",
      "00",
      "(?:[3489]|[67]\\d)\\d{7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
        [
          "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4 $5",
          ["[67]"],
          "0$1",
        ],
      ],
      "0",
    ],
    MD: [
      "373",
      "00",
      "(?:[235-7]\\d|[89]0)\\d{6}",
      [8],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
      ],
      "0",
    ],
    ME: [
      "382",
      "00",
      "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
      [8, 9],
      [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
      "0",
    ],
    MF: [
      "590",
      "00",
      "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
      [9],
      0,
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
        [
          "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
        ],
        ["80[0-5]\\d{6}"],
        0,
        0,
        0,
        0,
        0,
        ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
      ],
    ],
    MG: [
      "261",
      "00",
      "[23]\\d{8}",
      [9],
      [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]],
      "0",
      0,
      "([24-9]\\d{6})$|0",
      "20$1",
    ],
    MH: [
      "692",
      "011",
      "329\\d{4}|(?:[256]\\d|45)\\d{5}",
      [7],
      [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
      "1",
    ],
    MK: [
      "389",
      "00",
      "[2-578]\\d{7}",
      [8],
      [
        [
          "(\\d)(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["2|34[47]|4(?:[37]7|5[47]|64)"],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"],
      ],
      "0",
    ],
    ML: [
      "223",
      "00",
      "[24-9]\\d{7}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]],
    ],
    MM: [
      "95",
      "00",
      "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
      [6, 7, 8, 9, 10],
      [
        ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
        [
          "(\\d{2})(\\d{2})(\\d{3})",
          "$1 $2 $3",
          [
            "4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]",
          ],
          "0$1",
        ],
        [
          "(\\d)(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["[12]|452|678|86", "[12]|452|6788|86"],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
        [
          "(\\d)(\\d{3})(\\d{4,6})",
          "$1 $2 $3",
          ["9(?:2[0-4]|[35-9]|4[137-9])"],
          "0$1",
        ],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
        ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
        ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
      ],
      "0",
    ],
    MN: [
      "976",
      "001",
      "[12]\\d{7,9}|[5-9]\\d{7}",
      [8, 9, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
        [
          "(\\d{4})(\\d{5,6})",
          "$1 $2",
          [
            "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
            "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
          ],
          "0$1",
        ],
        ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"],
      ],
      "0",
    ],
    MO: [
      "853",
      "00",
      "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
      [7, 8],
      [
        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]],
      ],
    ],
    MP: [
      "1",
      "011",
      "[58]\\d{9}|(?:67|90)0\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "670$1",
      0,
      "670",
    ],
    MQ: [
      "596",
      "00",
      "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",
      [9],
      [
        [
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[5-79]|8(?:0[6-9]|[36])"],
          "0$1",
        ],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
      ],
      "0",
    ],
    MR: [
      "222",
      "00",
      "(?:[2-4]\\d\\d|800)\\d{5}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],
    ],
    MS: [
      "1",
      "011",
      "(?:[58]\\d\\d|664|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([34]\\d{6})$|1",
      "664$1",
      0,
      "664",
    ],
    MT: [
      "356",
      "00",
      "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],
    ],
    MU: [
      "230",
      "0(?:0|[24-7]0|3[03])",
      "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
      [7, 8, 10],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
        ["(\\d{5})(\\d{5})", "$1 $2", ["8"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "020",
    ],
    MV: [
      "960",
      "0(?:0|19)",
      "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
      [7, 10],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    MW: [
      "265",
      "00",
      "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
      [7, 9],
      [
        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"],
      ],
      "0",
    ],
    MX: [
      "52",
      "0[09]",
      "[2-9]\\d{9}",
      [10],
      [
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    MY: [
      "60",
      "00",
      "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
      [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{3,4})",
          "$1-$2 $3",
          [
            "1(?:[02469]|[378][1-9]|53)|8",
            "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8",
          ],
          "0$1",
        ],
        ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
        ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"],
      ],
      "0",
    ],
    MZ: [
      "258",
      "00",
      "(?:2|8\\d)\\d{7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
      ],
    ],
    NA: [
      "264",
      "00",
      "[68]\\d{7,8}",
      [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
      ],
      "0",
    ],
    NC: [
      "687",
      "00",
      "(?:050|[2-57-9]\\d\\d)\\d{3}",
      [6],
      [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]],
    ],
    NE: [
      "227",
      "00",
      "[027-9]\\d{7}",
      [8],
      [
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
        [
          "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[089]|2[013]|7[0467]"],
        ],
      ],
    ],
    NF: [
      "672",
      "00",
      "[13]\\d{5}",
      [6],
      [
        ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
        ["(\\d)(\\d{5})", "$1 $2", ["[13]"]],
      ],
      0,
      0,
      "([0-258]\\d{4})$",
      "3$1",
    ],
    NG: [
      "234",
      "009",
      "(?:20|9\\d)\\d{8}|[78]\\d{9,13}",
      [10, 11, 12, 13, 14],
      [
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
        ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"],
      ],
      "0",
    ],
    NI: [
      "505",
      "00",
      "(?:1800|[25-8]\\d{3})\\d{4}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],
    ],
    NL: [
      "31",
      "00",
      "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
      [5, 6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
        ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
        [
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"],
      ],
      "0",
    ],
    NO: [
      "47",
      "00",
      "(?:0|[2-9]\\d{3})\\d{4}",
      [5, 8],
      [
        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      "[02-689]|7[0-8]",
    ],
    NP: [
      "977",
      "00",
      "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
      [8, 10, 11],
      [
        ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
        [
          "(\\d{2})(\\d{6})",
          "$1-$2",
          ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
          "0$1",
        ],
        ["(\\d{3})(\\d{7})", "$1-$2", ["9"]],
      ],
      "0",
    ],
    NR: [
      "674",
      "00",
      "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]],
    ],
    NU: [
      "683",
      "00",
      "(?:[4-7]|888\\d)\\d{3}",
      [4, 7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
    ],
    NZ: [
      "64",
      "0(?:0|161)",
      "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
      [5, 6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
        [
          "(\\d{3})(\\d{2})(\\d{2,3})",
          "$1 $2 $3",
          ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
          "0$1",
        ],
        [
          "(\\d)(\\d{3})(\\d{4})",
          "$1 $2 $3",
          ["24|[346]|7[2-57-9]|9[2-9]"],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{3,5})",
          "$1 $2 $3",
          ["2(?:[169]|7[0-35-9])|7"],
          "0$1",
        ],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    OM: [
      "968",
      "00",
      "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
      [7, 8, 9],
      [
        ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
        ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
      ],
    ],
    PA: [
      "507",
      "00",
      "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
      [7, 8, 10, 11],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
        ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
      ],
    ],
    PE: [
      "51",
      "00|19(?:1[124]|77|90)00",
      "(?:[14-8]|9\\d)\\d{7}",
      [8, 9],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
        ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
      " Anexo ",
    ],
    PF: [
      "689",
      "00",
      "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
      [6, 8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
      ],
    ],
    PG: [
      "675",
      "00|140[1-3]",
      "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
      [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    PH: [
      "63",
      "00",
      "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
      [6, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
        [
          "(\\d{4})(\\d{4,6})",
          "$1 $2",
          [
            "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
            "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
          ],
          "(0$1)",
        ],
        [
          "(\\d{5})(\\d{4})",
          "$1 $2",
          ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
          "(0$1)",
        ],
        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
        ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
      ],
      "0",
    ],
    PK: [
      "92",
      "00",
      "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
      [8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
        ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
        [
          "(\\d{3})(\\d{6,7})",
          "$1 $2",
          [
            "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
            "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
          ],
          "(0$1)",
        ],
        [
          "(\\d{2})(\\d{7,8})",
          "$1 $2",
          ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
          "(0$1)",
        ],
        ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
        ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3 $4",
          ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
          "(0$1)",
        ],
        [
          "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3 $4",
          ["[24-9]"],
          "(0$1)",
        ],
      ],
      "0",
    ],
    PL: [
      "48",
      "00",
      "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
      [6, 7, 8, 9, 10],
      [
        ["(\\d{5})", "$1", ["19"]],
        ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
        [
          "(\\d{2})(\\d{2})(\\d{3})",
          "$1 $2 $3",
          [
            "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
            "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
          ],
        ],
        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
        [
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"],
        ],
        [
          "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["1[2-8]|[2-7]|8[1-79]|9[145]"],
        ],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]],
      ],
    ],
    PM: [
      "508",
      "00",
      "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",
      [6, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
      ],
      "0",
    ],
    PR: [
      "1",
      "011",
      "(?:[589]\\d\\d|787)\\d{7}",
      [10],
      0,
      "1",
      0,
      0,
      0,
      0,
      "787|939",
    ],
    PS: [
      "970",
      "00",
      "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
      [8, 9, 10],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
      ],
      "0",
    ],
    PT: [
      "351",
      "00",
      "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
      [9],
      [
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]],
      ],
    ],
    PW: [
      "680",
      "01[12]",
      "(?:[24-8]\\d\\d|345|900)\\d{4}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
    ],
    PY: [
      "595",
      "00",
      "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
      [6, 7, 8, 9, 10, 11],
      [
        ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
        [
          "(\\d{2})(\\d{5})",
          "$1 $2",
          ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
          "(0$1)",
        ],
        [
          "(\\d{3})(\\d{4,5})",
          "$1 $2",
          ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
          "(0$1)",
        ],
        [
          "(\\d{2})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
          "(0$1)",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
        ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
      ],
      "0",
    ],
    QA: [
      "974",
      "00",
      "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
      [7, 8, 9, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]],
      ],
    ],
    RE: [
      "262",
      "00",
      "709\\d{6}|(?:26|[689]\\d)\\d{7}",
      [9],
      [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]],
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
        [
          "(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}",
        ],
        ["80\\d{7}"],
        ["89[1-37-9]\\d{6}"],
        0,
        0,
        0,
        0,
        ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
        ["8(?:1[019]|2[0156]|84|90)\\d{6}"],
      ],
    ],
    RO: [
      "40",
      "00",
      "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
      [6, 9],
      [
        ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
        ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      " int ",
    ],
    RS: [
      "381",
      "00",
      "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
      [6, 7, 8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
        ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"],
      ],
      "0",
    ],
    RU: [
      "7",
      "810",
      "8\\d{13}|[347-9]\\d{9}",
      [10, 14],
      [
        [
          "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          [
            "7(?:1[0-8]|2[1-9])",
            "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
            "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
          ],
          "8 ($1)",
          1,
        ],
        [
          "(\\d{5})(\\d)(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          [
            "7(?:1[0-68]|2[1-9])",
            "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
            "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
          ],
          "8 ($1)",
          1,
        ],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
        [
          "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2-$3-$4",
          ["[349]|8(?:[02-7]|1[1-8])"],
          "8 ($1)",
          1,
        ],
        ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"],
      ],
      "8",
      0,
      0,
      0,
      0,
      0,
      [
        [
          "336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}",
          [10],
        ],
        ["9\\d{9}", [10]],
        ["8(?:0[04]|108\\d{3})\\d{7}"],
        ["80[39]\\d{7}", [10]],
        ["808\\d{7}", [10]],
      ],
      "8~10",
    ],
    RW: [
      "250",
      "00",
      "(?:06|[27]\\d\\d|[89]00)\\d{6}",
      [8, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
      ],
      "0",
    ],
    SA: [
      "966",
      "00",
      "(?:[15]\\d|800|92)\\d{7}",
      [9, 10],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
      ],
      "0",
    ],
    SB: [
      "677",
      "0[01]",
      "[6-9]\\d{6}|[1-6]\\d{4}",
      [5, 7],
      [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]],
    ],
    SC: [
      "248",
      "010|0[0-2]",
      "(?:[2489]\\d|64)\\d{5}",
      [7],
      [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    SD: [
      "249",
      "00",
      "[19]\\d{8}",
      [9],
      [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],
      "0",
    ],
    SE: [
      "46",
      "00",
      "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
      [6, 7, 8, 9, 10, 12],
      [
        [
          "(\\d{2})(\\d{2,3})(\\d{2})",
          "$1-$2 $3",
          ["20"],
          "0$1",
          0,
          "$1 $2 $3",
        ],
        ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"],
        [
          "(\\d{2})(\\d{3})(\\d{2})",
          "$1-$2 $3",
          ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
          "0$1",
          0,
          "$1 $2 $3",
        ],
        [
          "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
          "$1-$2 $3 $4",
          ["8"],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d{3})(\\d{2,3})(\\d{2})",
          "$1-$2 $3",
          [
            "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
          ],
          "0$1",
          0,
          "$1 $2 $3",
        ],
        [
          "(\\d{3})(\\d{2,3})(\\d{3})",
          "$1-$2 $3",
          ["9(?:00|39|44)"],
          "0$1",
          0,
          "$1 $2 $3",
        ],
        [
          "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
          "$1-$2 $3 $4",
          ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1-$2 $3 $4",
          ["10|7"],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d)(\\d{3})(\\d{3})(\\d{2})",
          "$1-$2 $3 $4",
          ["8"],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
          "$1-$2 $3 $4",
          [
            "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
          ],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
          "$1-$2 $3 $4",
          ["9"],
          "0$1",
          0,
          "$1 $2 $3 $4",
        ],
        [
          "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
          "$1-$2 $3 $4 $5",
          ["[26]"],
          "0$1",
          0,
          "$1 $2 $3 $4 $5",
        ],
      ],
      "0",
    ],
    SG: [
      "65",
      "0[0-3]\\d",
      "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
      [8, 10, 11],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
        ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
      ],
    ],
    SH: [
      "290",
      "00",
      "(?:[256]\\d|8)\\d{3}",
      [4, 5],
      0,
      0,
      0,
      0,
      0,
      0,
      "[256]",
    ],
    SI: [
      "386",
      "00|10(?:22|66|88|99)",
      "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
      [5, 6, 7, 8],
      [
        ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
        ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
        [
          "(\\d{2})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          ["[37][01]|4[0139]|51|6"],
          "0$1",
        ],
        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    SJ: [
      "47",
      "00",
      "0\\d{4}|(?:[489]\\d|79)\\d{6}",
      [5, 8],
      0,
      0,
      0,
      0,
      0,
      0,
      "79",
    ],
    SK: [
      "421",
      "00",
      "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
      [6, 7, 9],
      [
        ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
        [
          "(\\d{2})(\\d{2})(\\d{2,3})",
          "$1 $2 $3",
          ["[3-5][1-8]1", "[3-5][1-8]1[67]"],
          "0$1",
        ],
        ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
      ],
      "0",
    ],
    SL: [
      "232",
      "00",
      "(?:[237-9]\\d|66)\\d{6}",
      [8],
      [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],
      "0",
    ],
    SM: [
      "378",
      "00",
      "(?:0549|[5-7]\\d)\\d{6}",
      [8, 10],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
        ["(\\d{4})(\\d{6})", "$1 $2", ["0"]],
      ],
      0,
      0,
      "([89]\\d{5})$",
      "0549$1",
    ],
    SN: [
      "221",
      "00",
      "(?:[378]\\d|93)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
      ],
    ],
    SO: [
      "252",
      "00",
      "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
      [6, 7, 8, 9],
      [
        ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
        ["(\\d{6})", "$1", ["[134]"]],
        ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
        ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
        ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]],
      ],
      "0",
    ],
    SR: [
      "597",
      "00",
      "(?:[2-5]|[6-8]\\d|90)\\d{5}",
      [6, 7],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
        ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
        ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]],
      ],
    ],
    SS: [
      "211",
      "00",
      "[19]\\d{8}",
      [9],
      [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],
      "0",
    ],
    ST: [
      "239",
      "00",
      "(?:22|9\\d)\\d{5}",
      [7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],
    ],
    SV: [
      "503",
      "00",
      "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
      [7, 8, 11],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
      ],
    ],
    SX: [
      "1",
      "011",
      "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "(5\\d{6})$|1",
      "721$1",
      0,
      "721",
    ],
    SY: [
      "963",
      "00",
      "[1-359]\\d{8}|[1-5]\\d{7}",
      [8, 9],
      [
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1],
      ],
      "0",
    ],
    SZ: [
      "268",
      "00",
      "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
      [8, 9],
      [
        ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
        ["(\\d{5})(\\d{4})", "$1 $2", ["9"]],
      ],
    ],
    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    TC: [
      "1",
      "011",
      "(?:[58]\\d\\d|649|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-479]\\d{6})$|1",
      "649$1",
      0,
      "649",
    ],
    TD: [
      "235",
      "00|16",
      "(?:22|30|[689]\\d|77)\\d{6}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
    ],
    TG: [
      "228",
      "00",
      "[279]\\d{7}",
      [8],
      [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],
    ],
    TH: [
      "66",
      "00[1-9]",
      "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
      [8, 9, 10, 13],
      [
        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
      ],
      "0",
    ],
    TJ: [
      "992",
      "810",
      "(?:[0-57-9]\\d|66)\\d{7}",
      [9],
      [
        ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
        ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "8~10",
    ],
    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    TL: [
      "670",
      "00",
      "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
      [7, 8],
      [
        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
        ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
      ],
    ],
    TM: [
      "993",
      "810",
      "(?:[1-6]\\d|71)\\d{6}",
      [8],
      [
        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
        ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"],
      ],
      "8",
      0,
      0,
      0,
      0,
      0,
      0,
      "8~10",
    ],
    TN: [
      "216",
      "00",
      "[2-57-9]\\d{7}",
      [8],
      [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],
    ],
    TO: [
      "676",
      "00",
      "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
      [5, 7],
      [
        ["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]],
      ],
    ],
    TR: [
      "90",
      "00",
      "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
      [7, 10, 12, 13],
      [
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1],
        [
          "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"],
          "0$1",
          1,
        ],
        [
          "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
          "$1 $2 $3 $4",
          ["[24][1-8]|3[1-9]"],
          "(0$1)",
          1,
        ],
        ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1],
      ],
      "0",
    ],
    TT: [
      "1",
      "011",
      "(?:[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-46-8]\\d{6})$|1",
      "868$1",
      0,
      "868",
    ],
    TV: [
      "688",
      "00",
      "(?:2|7\\d\\d|90)\\d{4}",
      [5, 6, 7],
      [
        ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
        ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
      ],
    ],
    TW: [
      "886",
      "0(?:0[25-79]|19)",
      "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
      [7, 8, 9, 10, 11],
      [
        ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
        [
          "(\\d)(\\d{3,4})(\\d{4})",
          "$1 $2 $3",
          [
            "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
            "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
          ],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
        ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "#",
    ],
    TZ: [
      "255",
      "00[056]",
      "(?:[25-8]\\d|41|90)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
      ],
      "0",
    ],
    UA: [
      "380",
      "00",
      "[89]\\d{9}|[3-9]\\d{8}",
      [9, 10],
      [
        [
          "(\\d{3})(\\d{3})(\\d{3})",
          "$1 $2 $3",
          [
            "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
            "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
          ],
          "0$1",
        ],
        [
          "(\\d{4})(\\d{5})",
          "$1 $2",
          [
            "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
            "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])",
          ],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      "0~0",
    ],
    UG: [
      "256",
      "00[057]",
      "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
      [9],
      [
        ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
        ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"],
      ],
      "0",
    ],
    US: [
      "1",
      "011",
      "[2-9]\\d{9}|3\\d{6}",
      [10],
      [
        ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"],
      ],
      "1",
      0,
      0,
      0,
      0,
      0,
      [
        [
          "3052(?:0[0-8]|[1-9]\\d)\\d{4}|(?:2742|305[3-9])\\d{6}|(?:472|983)[2-47-9]\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}",
        ],
        [""],
        ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
        ["900[2-9]\\d{6}"],
        [
          "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
        ],
        0,
        0,
        0,
        ["305209\\d{4}"],
      ],
    ],
    UY: [
      "598",
      "0(?:0|1[3-9]\\d)",
      "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      [
        ["(\\d{4,5})", "$1", ["21"]],
        ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
        ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
        ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
        ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]],
      ],
      "0",
      0,
      0,
      0,
      0,
      0,
      0,
      "00",
      " int. ",
    ],
    UZ: [
      "998",
      "00",
      "(?:20|33|[5-9]\\d)\\d{7}",
      [9],
      [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]],
    ],
    VA: [
      "39",
      "00",
      "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
      [6, 7, 8, 9, 10, 11, 12],
      0,
      0,
      0,
      0,
      0,
      0,
      "06698",
    ],
    VC: [
      "1",
      "011",
      "(?:[58]\\d\\d|784|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-7]\\d{6})$|1",
      "784$1",
      0,
      "784",
    ],
    VE: [
      "58",
      "00",
      "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
      [10],
      [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]],
      "0",
    ],
    VG: [
      "1",
      "011",
      "(?:284|[58]\\d\\d|900)\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-578]\\d{6})$|1",
      "284$1",
      0,
      "284",
    ],
    VI: [
      "1",
      "011",
      "[58]\\d{9}|(?:34|90)0\\d{7}",
      [10],
      0,
      "1",
      0,
      "([2-9]\\d{6})$|1",
      "340$1",
      0,
      "340",
    ],
    VN: [
      "84",
      "00",
      "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
      [7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
        ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1],
      ],
      "0",
    ],
    VU: [
      "678",
      "00",
      "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
      [5, 7],
      [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
    ],
    WF: [
      "681",
      "00",
      "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
      [6, 9],
      [
        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
      ],
    ],
    WS: [
      "685",
      "0",
      "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
      [5, 6, 7, 10],
      [
        ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
        ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
        ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
      ],
    ],
    XK: [
      "383",
      "00",
      "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
      [8, 9, 10, 11, 12],
      [
        ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
        ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"],
      ],
      "0",
    ],
    YE: [
      "967",
      "00",
      "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
      [7, 8, 9],
      [
        [
          "(\\d)(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          ["[1-6]|7(?:[24-6]|8[0-7])"],
          "0$1",
        ],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
      ],
      "0",
    ],
    YT: [
      "262",
      "00",
      "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
      [9],
      0,
      "0",
      0,
      0,
      0,
      0,
      0,
      [
        ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
        [
          "(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}",
        ],
        ["80\\d{7}"],
        0,
        0,
        0,
        0,
        0,
        ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"],
      ],
    ],
    ZA: [
      "27",
      "00",
      "[1-79]\\d{8}|8\\d{4,9}",
      [5, 6, 7, 8, 9, 10],
      [
        ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
      ],
      "0",
    ],
    ZM: [
      "260",
      "00",
      "800\\d{6}|(?:21|[579]\\d|63)\\d{7}",
      [9],
      [
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
        ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"],
      ],
      "0",
    ],
    ZW: [
      "263",
      "00",
      "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
      [5, 6, 7, 8, 9, 10],
      [
        [
          "(\\d{3})(\\d{3,5})",
          "$1 $2",
          [
            "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
          ],
          "0$1",
        ],
        ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
        ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
        [
          "(\\d{2})(\\d{7})",
          "$1 $2",
          [
            "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
            "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
          ],
          "(0$1)",
        ],
        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
        [
          "(\\d{3})(\\d{3})(\\d{3,4})",
          "$1 $2 $3",
          [
            "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
            "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
          ],
          "0$1",
        ],
        ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
        [
          "(\\d{2})(\\d{3,5})",
          "$1 $2",
          [
            "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
          ],
          "0$1",
        ],
        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
        ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"],
      ],
      "0",
    ],
  },
  nonGeographic: {
    800: [
      "800",
      0,
      "(?:00|[1-9]\\d)\\d{6}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]],
    ],
    808: [
      "808",
      0,
      "[1-9]\\d{7}",
      [8],
      [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]],
    ],
    870: [
      "870",
      0,
      "7\\d{11}|[235-7]\\d{8}",
      [9, 12],
      [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      [
        0,
        ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],
        0,
        0,
        0,
        0,
        0,
        0,
        ["2\\d{8}", [9]],
      ],
    ],
    878: [
      "878",
      0,
      "10\\d{10}",
      [12],
      [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]],
    ],
    881: [
      "881",
      0,
      "6\\d{9}|[0-36-9]\\d{8}",
      [9, 10],
      [
        ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
        ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, ["6\\d{9}|[0-36-9]\\d{8}"]],
    ],
    882: [
      "882",
      0,
      "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
      [7, 8, 9, 10, 11, 12],
      [
        ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
        ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
        ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
        [
          "(\\d{2})(\\d{4})(\\d{4})",
          "$1 $2 $3",
          ["10|23|3(?:[15]|4[57])|4|51"],
        ],
        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
        ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      [
        0,
        [
          "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
          [7, 8, 9, 10, 12],
        ],
        0,
        0,
        0,
        ["348[57]\\d{7}", [11]],
        0,
        0,
        [
          "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",
        ],
      ],
    ],
    883: [
      "883",
      0,
      "(?:[1-4]\\d|51)\\d{6,10}",
      [8, 9, 10, 11, 12],
      [
        [
          "(\\d{3})(\\d{3})(\\d{2,8})",
          "$1 $2 $3",
          ["[14]|2[24-689]|3[02-689]|51[24-9]"],
        ],
        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
        ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
        ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]],
      ],
      0,
      0,
      0,
      0,
      0,
      0,
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        [
          "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
        ],
      ],
    ],
    888: [
      "888",
      0,
      "\\d{11}",
      [11],
      [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, 0, 0, 0, 0, 0, ["\\d{11}"]],
    ],
    979: [
      "979",
      0,
      "[1359]\\d{8}",
      [9],
      [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],
      0,
      0,
      0,
      0,
      0,
      0,
      [0, 0, 0, ["[1359]\\d{8}"]],
    ],
  },
};
function h1(i, e) {
  var t = Array.prototype.slice.call(e);
  return t.push(u1), i.apply(this, t);
}
function vd(i, e) {
  (i = i.split("-")), (e = e.split("-"));
  for (var t = i[0].split("."), r = e[0].split("."), n = 0; n < 3; n++) {
    var s = Number(t[n]),
      o = Number(r[n]);
    if (s > o) return 1;
    if (o > s) return -1;
    if (!isNaN(s) && isNaN(o)) return 1;
    if (isNaN(s) && !isNaN(o)) return -1;
  }
  return i[1] && e[1]
    ? i[1] > e[1]
      ? 1
      : i[1] < e[1]
      ? -1
      : 0
    : !i[1] && e[1]
    ? 1
    : i[1] && !e[1]
    ? -1
    : 0;
}
var f1 = {}.constructor;
function Yn(i) {
  return i != null && i.constructor === f1;
}
function Ai(i) {
  return (
    (Ai =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ai(i)
  );
}
function ta(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function yd(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, p1(r.key), r);
  }
}
function ra(i, e, t) {
  return (
    e && yd(i.prototype, e),
    t && yd(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function p1(i) {
  var e = m1(i, "string");
  return Ai(e) == "symbol" ? e : e + "";
}
function m1(i, e) {
  if (Ai(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (Ai(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
var g1 = "1.2.0",
  v1 = "1.7.35",
  $d = " ext. ",
  y1 = /^\d+$/,
  vt = (function () {
    function i(e) {
      ta(this, i), zh(e), (this.metadata = e), Vh.call(this, e);
    }
    return ra(i, [
      {
        key: "getCountries",
        value: function () {
          return Object.keys(this.metadata.countries).filter(function (t) {
            return t !== "001";
          });
        },
      },
      {
        key: "getCountryMetadata",
        value: function (t) {
          return this.metadata.countries[t];
        },
      },
      {
        key: "nonGeographic",
        value: function () {
          if (!(this.v1 || this.v2 || this.v3))
            return this.metadata.nonGeographic || this.metadata.nonGeographical;
        },
      },
      {
        key: "hasCountry",
        value: function (t) {
          return this.getCountryMetadata(t) !== void 0;
        },
      },
      {
        key: "hasCallingCode",
        value: function (t) {
          if (this.getCountryCodesForCallingCode(t)) return !0;
          if (this.nonGeographic()) {
            if (this.nonGeographic()[t]) return !0;
          } else {
            var r = this.countryCallingCodes()[t];
            if (r && r.length === 1 && r[0] === "001") return !0;
          }
        },
      },
      {
        key: "isNonGeographicCallingCode",
        value: function (t) {
          return this.nonGeographic()
            ? !!this.nonGeographic()[t]
            : !this.getCountryCodesForCallingCode(t);
        },
      },
      {
        key: "country",
        value: function (t) {
          return this.selectNumberingPlan(t);
        },
      },
      {
        key: "selectNumberingPlan",
        value: function (t, r) {
          if ((t && y1.test(t) && ((r = t), (t = null)), t && t !== "001")) {
            if (!this.hasCountry(t))
              throw new Error("Unknown country: ".concat(t));
            this.numberingPlan = new bd(this.getCountryMetadata(t), this);
          } else if (r) {
            if (!this.hasCallingCode(r))
              throw new Error("Unknown calling code: ".concat(r));
            this.numberingPlan = new bd(this.getNumberingPlanMetadata(r), this);
          } else this.numberingPlan = void 0;
          return this;
        },
      },
      {
        key: "getCountryCodesForCallingCode",
        value: function (t) {
          var r = this.countryCallingCodes()[t];
          if (r) return r.length === 1 && r[0].length === 3 ? void 0 : r;
        },
      },
      {
        key: "getCountryCodeForCallingCode",
        value: function (t) {
          var r = this.getCountryCodesForCallingCode(t);
          if (r) return r[0];
        },
      },
      {
        key: "getNumberingPlanMetadata",
        value: function (t) {
          var r = this.getCountryCodeForCallingCode(t);
          if (r) return this.getCountryMetadata(r);
          if (this.nonGeographic()) {
            var n = this.nonGeographic()[t];
            if (n) return n;
          } else {
            var s = this.countryCallingCodes()[t];
            if (s && s.length === 1 && s[0] === "001")
              return this.metadata.countries["001"];
          }
        },
      },
      {
        key: "countryCallingCode",
        value: function () {
          return this.numberingPlan.callingCode();
        },
      },
      {
        key: "IDDPrefix",
        value: function () {
          return this.numberingPlan.IDDPrefix();
        },
      },
      {
        key: "defaultIDDPrefix",
        value: function () {
          return this.numberingPlan.defaultIDDPrefix();
        },
      },
      {
        key: "nationalNumberPattern",
        value: function () {
          return this.numberingPlan.nationalNumberPattern();
        },
      },
      {
        key: "possibleLengths",
        value: function () {
          return this.numberingPlan.possibleLengths();
        },
      },
      {
        key: "formats",
        value: function () {
          return this.numberingPlan.formats();
        },
      },
      {
        key: "nationalPrefixForParsing",
        value: function () {
          return this.numberingPlan.nationalPrefixForParsing();
        },
      },
      {
        key: "nationalPrefixTransformRule",
        value: function () {
          return this.numberingPlan.nationalPrefixTransformRule();
        },
      },
      {
        key: "leadingDigits",
        value: function () {
          return this.numberingPlan.leadingDigits();
        },
      },
      {
        key: "hasTypes",
        value: function () {
          return this.numberingPlan.hasTypes();
        },
      },
      {
        key: "type",
        value: function (t) {
          return this.numberingPlan.type(t);
        },
      },
      {
        key: "ext",
        value: function () {
          return this.numberingPlan.ext();
        },
      },
      {
        key: "countryCallingCodes",
        value: function () {
          return this.v1
            ? this.metadata.country_phone_code_to_countries
            : this.metadata.country_calling_codes;
        },
      },
      {
        key: "chooseCountryByCountryCallingCode",
        value: function (t) {
          return this.selectNumberingPlan(t);
        },
      },
      {
        key: "hasSelectedNumberingPlan",
        value: function () {
          return this.numberingPlan !== void 0;
        },
      },
    ]);
  })(),
  bd = (function () {
    function i(e, t) {
      ta(this, i),
        (this.globalMetadataObject = t),
        (this.metadata = e),
        Vh.call(this, t.metadata);
    }
    return ra(i, [
      {
        key: "callingCode",
        value: function () {
          return this.metadata[0];
        },
      },
      {
        key: "getDefaultCountryMetadataForRegion",
        value: function () {
          return this.globalMetadataObject.getNumberingPlanMetadata(
            this.callingCode()
          );
        },
      },
      {
        key: "IDDPrefix",
        value: function () {
          if (!(this.v1 || this.v2)) return this.metadata[1];
        },
      },
      {
        key: "defaultIDDPrefix",
        value: function () {
          if (!(this.v1 || this.v2)) return this.metadata[12];
        },
      },
      {
        key: "nationalNumberPattern",
        value: function () {
          return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
        },
      },
      {
        key: "possibleLengths",
        value: function () {
          if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
        },
      },
      {
        key: "_getFormats",
        value: function (t) {
          return t[this.v1 ? 2 : this.v2 ? 3 : 4];
        },
      },
      {
        key: "formats",
        value: function () {
          var t = this,
            r =
              this._getFormats(this.metadata) ||
              this._getFormats(this.getDefaultCountryMetadataForRegion()) ||
              [];
          return r.map(function (n) {
            return new $1(n, t);
          });
        },
      },
      {
        key: "nationalPrefix",
        value: function () {
          return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
        },
      },
      {
        key: "_getNationalPrefixFormattingRule",
        value: function (t) {
          return t[this.v1 ? 4 : this.v2 ? 5 : 6];
        },
      },
      {
        key: "nationalPrefixFormattingRule",
        value: function () {
          return (
            this._getNationalPrefixFormattingRule(this.metadata) ||
            this._getNationalPrefixFormattingRule(
              this.getDefaultCountryMetadataForRegion()
            )
          );
        },
      },
      {
        key: "_nationalPrefixForParsing",
        value: function () {
          return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
        },
      },
      {
        key: "nationalPrefixForParsing",
        value: function () {
          return this._nationalPrefixForParsing() || this.nationalPrefix();
        },
      },
      {
        key: "nationalPrefixTransformRule",
        value: function () {
          return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
        },
      },
      {
        key: "_getNationalPrefixIsOptionalWhenFormatting",
        value: function () {
          return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
        },
      },
      {
        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
        value: function () {
          return (
            this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) ||
            this._getNationalPrefixIsOptionalWhenFormatting(
              this.getDefaultCountryMetadataForRegion()
            )
          );
        },
      },
      {
        key: "leadingDigits",
        value: function () {
          return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
        },
      },
      {
        key: "types",
        value: function () {
          return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
        },
      },
      {
        key: "hasTypes",
        value: function () {
          return this.types() && this.types().length === 0
            ? !1
            : !!this.types();
        },
      },
      {
        key: "type",
        value: function (t) {
          if (this.hasTypes() && _d(this.types(), t))
            return new _1(_d(this.types(), t), this);
        },
      },
      {
        key: "ext",
        value: function () {
          return this.v1 || this.v2 ? $d : this.metadata[13] || $d;
        },
      },
    ]);
  })(),
  $1 = (function () {
    function i(e, t) {
      ta(this, i), (this._format = e), (this.metadata = t);
    }
    return ra(i, [
      {
        key: "pattern",
        value: function () {
          return this._format[0];
        },
      },
      {
        key: "format",
        value: function () {
          return this._format[1];
        },
      },
      {
        key: "leadingDigitsPatterns",
        value: function () {
          return this._format[2] || [];
        },
      },
      {
        key: "nationalPrefixFormattingRule",
        value: function () {
          return (
            this._format[3] || this.metadata.nationalPrefixFormattingRule()
          );
        },
      },
      {
        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
        value: function () {
          return (
            !!this._format[4] ||
            this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
          );
        },
      },
      {
        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
        value: function () {
          return (
            this.usesNationalPrefix() &&
            !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
          );
        },
      },
      {
        key: "usesNationalPrefix",
        value: function () {
          return !!(
            this.nationalPrefixFormattingRule() &&
            !b1.test(this.nationalPrefixFormattingRule())
          );
        },
      },
      {
        key: "internationalFormat",
        value: function () {
          return this._format[5] || this.format();
        },
      },
    ]);
  })(),
  b1 = /^\(?\$1\)?$/,
  _1 = (function () {
    function i(e, t) {
      ta(this, i), (this.type = e), (this.metadata = t);
    }
    return ra(i, [
      {
        key: "pattern",
        value: function () {
          return this.metadata.v1 ? this.type : this.type[0];
        },
      },
      {
        key: "possibleLengths",
        value: function () {
          if (!this.metadata.v1)
            return this.type[1] || this.metadata.possibleLengths();
        },
      },
    ]);
  })();
function _d(i, e) {
  switch (e) {
    case "FIXED_LINE":
      return i[0];
    case "MOBILE":
      return i[1];
    case "TOLL_FREE":
      return i[2];
    case "PREMIUM_RATE":
      return i[3];
    case "PERSONAL_NUMBER":
      return i[4];
    case "VOICEMAIL":
      return i[5];
    case "UAN":
      return i[6];
    case "PAGER":
      return i[7];
    case "VOIP":
      return i[8];
    case "SHARED_COST":
      return i[9];
  }
}
function zh(i) {
  if (!i)
    throw new Error(
      "[libphonenumber-js] `metadata` argument not passed. Check your arguments."
    );
  if (!Yn(i) || !Yn(i.countries))
    throw new Error(
      "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
        Yn(i)
          ? "an object of shape: { " + Object.keys(i).join(", ") + " }"
          : "a " + w1(i) + ": " + i,
        "."
      )
    );
}
var w1 = function (e) {
  return Ai(e);
};
function Kl(i, e) {
  if (((e = new vt(e)), e.hasCountry(i)))
    return e.selectNumberingPlan(i).countryCallingCode();
  throw new Error("Unknown country: ".concat(i));
}
function Vh(i) {
  var e = i.version;
  typeof e == "number"
    ? ((this.v1 = e === 1),
      (this.v2 = e === 2),
      (this.v3 = e === 3),
      (this.v4 = e === 4))
    : e
    ? vd(e, g1) === -1
      ? (this.v2 = !0)
      : vd(e, v1) === -1
      ? (this.v3 = !0)
      : (this.v4 = !0)
    : (this.v1 = !0);
}
function S1(i, e) {
  var t = (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (t) return (t = t.call(i)).next.bind(t);
  if (
    Array.isArray(i) ||
    (t = E1(i)) ||
    (e && i && typeof i.length == "number")
  ) {
    t && (i = t);
    var r = 0;
    return function () {
      return r >= i.length ? { done: !0 } : { done: !1, value: i[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function E1(i, e) {
  if (i) {
    if (typeof i == "string") return wd(i, e);
    var t = {}.toString.call(i).slice(8, -1);
    return (
      t === "Object" && i.constructor && (t = i.constructor.name),
      t === "Map" || t === "Set"
        ? Array.from(i)
        : t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? wd(i, e)
        : void 0
    );
  }
}
function wd(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = i[t];
  return r;
}
function T1(i, e) {
  for (var t = i.slice(), r = S1(e), n; !(n = r()).done; ) {
    var s = n.value;
    i.indexOf(s) < 0 && t.push(s);
  }
  return t.sort(function (o, a) {
    return o - a;
  });
}
function Zl(i, e, t) {
  return Gh(i, e, void 0, t);
}
function Gh(i, e, t, r) {
  e && ((r = new vt(r.metadata)), r.selectNumberingPlan(e));
  var n = r.type(t),
    s = (n && n.possibleLengths()) || r.possibleLengths();
  if (!s) return "IS_POSSIBLE";
  if (t === "FIXED_LINE_OR_MOBILE") {
    if (!r.type("FIXED_LINE")) return Gh(i, e, "MOBILE", r);
    var o = r.type("MOBILE");
    o && (s = T1(s, o.possibleLengths()));
  } else if (t && !n) return "INVALID_LENGTH";
  var a = i.length,
    l = s[0];
  return l === a
    ? "IS_POSSIBLE"
    : l > a
    ? "TOO_SHORT"
    : s[s.length - 1] < a
    ? "TOO_LONG"
    : s.indexOf(a, 1) >= 0
    ? "IS_POSSIBLE"
    : "INVALID_LENGTH";
}
function O1(i, e, t) {
  if ((e === void 0 && (e = {}), (t = new vt(t)), e.v2)) {
    if (!i.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    t.selectNumberingPlan(i.countryCallingCode);
  } else {
    if (!i.phone) return !1;
    if (i.country) {
      if (!t.hasCountry(i.country))
        throw new Error("Unknown country: ".concat(i.country));
      t.selectNumberingPlan(i.country);
    } else {
      if (!i.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      t.selectNumberingPlan(i.countryCallingCode);
    }
  }
  if (t.possibleLengths()) return Uh(i.phone || i.nationalNumber, i.country, t);
  if (
    i.countryCallingCode &&
    t.isNonGeographicCallingCode(i.countryCallingCode)
  )
    return !0;
  throw new Error(
    'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.'
  );
}
function Uh(i, e, t) {
  switch (Zl(i, e, t)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function tn(i, e) {
  return (i = i || ""), new RegExp("^(?:" + e + ")$").test(i);
}
function M1(i, e) {
  var t = (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (t) return (t = t.call(i)).next.bind(t);
  if (
    Array.isArray(i) ||
    (t = x1(i)) ||
    (e && i && typeof i.length == "number")
  ) {
    t && (i = t);
    var r = 0;
    return function () {
      return r >= i.length ? { done: !0 } : { done: !1, value: i[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x1(i, e) {
  if (i) {
    if (typeof i == "string") return Sd(i, e);
    var t = {}.toString.call(i).slice(8, -1);
    return (
      t === "Object" && i.constructor && (t = i.constructor.name),
      t === "Map" || t === "Set"
        ? Array.from(i)
        : t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? Sd(i, e)
        : void 0
    );
  }
}
function Sd(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = i[t];
  return r;
}
var D1 = [
  "MOBILE",
  "PREMIUM_RATE",
  "TOLL_FREE",
  "SHARED_COST",
  "VOIP",
  "PERSONAL_NUMBER",
  "PAGER",
  "UAN",
  "VOICEMAIL",
];
function Ql(i, e, t) {
  if (((e = e || {}), !(!i.country && !i.countryCallingCode))) {
    (t = new vt(t)), t.selectNumberingPlan(i.country, i.countryCallingCode);
    var r = e.v2 ? i.nationalNumber : i.phone;
    if (tn(r, t.nationalNumberPattern())) {
      if (Da(r, "FIXED_LINE", t))
        return (t.type("MOBILE") && t.type("MOBILE").pattern() === "") ||
          !t.type("MOBILE") ||
          Da(r, "MOBILE", t)
          ? "FIXED_LINE_OR_MOBILE"
          : "FIXED_LINE";
      for (var n = M1(D1), s; !(s = n()).done; ) {
        var o = s.value;
        if (Da(r, o, t)) return o;
      }
    }
  }
}
function Da(i, e, t) {
  return (
    (e = t.type(e)),
    !e ||
    !e.pattern() ||
    (e.possibleLengths() && e.possibleLengths().indexOf(i.length) < 0)
      ? !1
      : tn(i, e.pattern())
  );
}
function Wh(i, e, t) {
  if (
    ((e = e || {}),
    (t = new vt(t)),
    t.selectNumberingPlan(i.country, i.countryCallingCode),
    t.hasTypes())
  )
    return Ql(i, e, t.metadata) !== void 0;
  var r = e.v2 ? i.nationalNumber : i.phone;
  return tn(r, t.nationalNumberPattern());
}
function P1(i, e, t) {
  var r = new vt(t),
    n = r.getCountryCodesForCallingCode(i);
  return n
    ? n.filter(function (s) {
        return k1(e, s, t);
      })
    : [];
}
function k1(i, e, t) {
  var r = new vt(t);
  return (
    r.selectNumberingPlan(e),
    r.numberingPlan.possibleLengths().indexOf(i.length) >= 0
  );
}
var Jl = 2,
  C1 = 17,
  A1 = 3,
  pr = "0-9０-９٠-٩۰-۹",
  L1 = "-‐-―−ー－",
  I1 = "／/",
  R1 = "．.",
  N1 = "  ­​⁠　",
  F1 = "()（）［］\\[\\]",
  H1 = "~⁓∼～",
  qo = "".concat(L1).concat(I1).concat(R1).concat(N1).concat(F1).concat(H1),
  ec = "+＋",
  q1 = new RegExp("([" + pr + "])");
function B1(i, e, t, r) {
  if (e) {
    var n = new vt(r);
    n.selectNumberingPlan(e, t);
    var s = new RegExp(n.IDDPrefix());
    if (i.search(s) === 0) {
      i = i.slice(i.match(s)[0].length);
      var o = i.match(q1);
      if (!(o && o[1] != null && o[1].length > 0 && o[1] === "0")) return i;
    }
  }
}
function z1(i, e) {
  if (i && e.numberingPlan.nationalPrefixForParsing()) {
    var t = new RegExp(
        "^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")"
      ),
      r = t.exec(i);
    if (r) {
      var n,
        s,
        o = r.length - 1,
        a = o > 0 && r[o];
      if (e.nationalPrefixTransformRule() && a)
        (n = i.replace(t, e.nationalPrefixTransformRule())),
          o > 1 && (s = r[1]);
      else {
        var l = r[0];
        (n = i.slice(l.length)), a && (s = r[1]);
      }
      var c;
      if (a) {
        var d = i.indexOf(r[1]),
          h = i.slice(0, d);
        h === e.numberingPlan.nationalPrefix() &&
          (c = e.numberingPlan.nationalPrefix());
      } else c = r[0];
      return { nationalNumber: n, nationalPrefix: c, carrierCode: s };
    }
  }
  return { nationalNumber: i };
}
function V1(i, e) {
  var t = (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (t) return (t = t.call(i)).next.bind(t);
  if (
    Array.isArray(i) ||
    (t = G1(i)) ||
    (e && i && typeof i.length == "number")
  ) {
    t && (i = t);
    var r = 0;
    return function () {
      return r >= i.length ? { done: !0 } : { done: !1, value: i[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G1(i, e) {
  if (i) {
    if (typeof i == "string") return Ed(i, e);
    var t = {}.toString.call(i).slice(8, -1);
    return (
      t === "Object" && i.constructor && (t = i.constructor.name),
      t === "Map" || t === "Set"
        ? Array.from(i)
        : t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? Ed(i, e)
        : void 0
    );
  }
}
function Ed(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = i[t];
  return r;
}
function U1(i, e) {
  var t = e.countries,
    r = e.metadata;
  r = new vt(r);
  for (var n = V1(t), s; !(s = n()).done; ) {
    var o = s.value;
    if ((r.selectNumberingPlan(o), r.leadingDigits())) {
      if (i && i.search(r.leadingDigits()) === 0) return o;
    } else if (Ql({ phone: i, country: o }, void 0, r.metadata)) return o;
  }
}
var W1 = !1;
function jh(i, e) {
  var t = e.nationalNumber,
    r = e.metadata;
  if (W1 && r.isNonGeographicCallingCode(i)) return "001";
  var n = r.getCountryCodesForCallingCode(i);
  if (n)
    return n.length === 1
      ? n[0]
      : U1(t, { countries: n, metadata: r.metadata });
}
function ol(i, e, t) {
  var r = z1(i, t),
    n = r.carrierCode,
    s = r.nationalNumber;
  if (s !== i) {
    if (!j1(i, s, t)) return { nationalNumber: i };
    if (
      t.numberingPlan.possibleLengths() &&
      (e ||
        (e = jh(t.numberingPlan.callingCode(), {
          nationalNumber: s,
          metadata: t,
        })),
      !Y1(s, e, t))
    )
      return { nationalNumber: i };
  }
  return { nationalNumber: s, carrierCode: n };
}
function j1(i, e, t) {
  return !(
    tn(i, t.nationalNumberPattern()) && !tn(e, t.nationalNumberPattern())
  );
}
function Y1(i, e, t) {
  switch (Zl(i, e, t)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function X1(i, e, t, r, n) {
  var s = e || t ? Kl(e || t, n) : r;
  if (i.indexOf(s) === 0) {
    (n = new vt(n)), n.selectNumberingPlan(e || t, s);
    var o = i.slice(s.length),
      a = ol(o, e, n),
      l = a.nationalNumber,
      c = ol(i, e, n),
      d = c.nationalNumber;
    if (
      (!tn(d, n.nationalNumberPattern()) && tn(l, n.nationalNumberPattern())) ||
      Zl(d, e, n) === "TOO_LONG"
    )
      return { countryCallingCode: s, number: o };
  }
  return { number: i };
}
function Yh(i, e, t, r, n) {
  if (!i) return {};
  var s;
  if (i[0] !== "+") {
    var o = B1(i, e || t, r, n);
    if (o && o !== i) (s = !0), (i = "+" + o);
    else {
      if (e || t || r) {
        var a = X1(i, e, t, r, n),
          l = a.countryCallingCode,
          c = a.number;
        if (l)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: l,
            number: c,
          };
      }
      return { number: i };
    }
  }
  if (i[1] === "0") return {};
  n = new vt(n);
  for (var d = 2; d - 1 <= A1 && d <= i.length; ) {
    var h = i.slice(1, d);
    if (n.hasCallingCode(h))
      return (
        n.selectNumberingPlan(h),
        {
          countryCallingCodeSource: s
            ? "FROM_NUMBER_WITH_IDD"
            : "FROM_NUMBER_WITH_PLUS_SIGN",
          countryCallingCode: h,
          number: i.slice(d),
        }
      );
    d++;
  }
  return {};
}
function K1(i) {
  return i.replace(new RegExp("[".concat(qo, "]+"), "g"), " ").trim();
}
var Z1 = /(\$\d)/;
function Q1(i, e, t) {
  var r = t.useInternationalFormat,
    n = t.withNationalPrefix;
  t.carrierCode, t.metadata;
  var s = i.replace(
    new RegExp(e.pattern()),
    r
      ? e.internationalFormat()
      : n && e.nationalPrefixFormattingRule()
      ? e.format().replace(Z1, e.nationalPrefixFormattingRule())
      : e.format()
  );
  return r ? K1(s) : s;
}
var J1 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function em(i, e, t) {
  var r = new vt(t);
  if ((r.selectNumberingPlan(i, e), r.defaultIDDPrefix()))
    return r.defaultIDDPrefix();
  if (J1.test(r.IDDPrefix())) return r.IDDPrefix();
}
var tm = ";ext=",
  ci = function (e) {
    return "([".concat(pr, "]{1,").concat(e, "})");
  };
function Xh(i) {
  var e = "20",
    t = "15",
    r = "9",
    n = "6",
    s = "[  \\t,]*",
    o = "[:\\.．]?[  \\t,-]*",
    a = "#?",
    l = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)",
    c = "(?:[xｘ#＃~～]|int|ｉｎｔ)",
    d = "[- ]+",
    h = "[  \\t]*",
    u = "(?:,{2}|;)",
    f = tm + ci(e),
    p = s + l + o + ci(e) + a,
    m = s + c + o + ci(r) + a,
    g = d + ci(n) + "#",
    y = h + u + o + ci(t) + a,
    v = h + "(?:,)+" + o + ci(r) + a;
  return f + "|" + p + "|" + m + "|" + g + "|" + y + "|" + v;
}
var rm = "[" + pr + "]{" + Jl + "}",
  nm = "[" + ec + "]{0,1}(?:[" + qo + "]*[" + pr + "]){3,}[" + qo + pr + "]*",
  im = new RegExp("^[" + ec + "]{0,1}(?:[" + qo + "]*[" + pr + "]){1,2}$", "i"),
  sm = nm + "(?:" + Xh() + ")?",
  om = new RegExp("^" + rm + "$|^" + sm + "$", "i");
function al(i) {
  return i.length >= Jl && om.test(i);
}
function am(i) {
  return im.test(i);
}
function lm(i) {
  var e = i.number,
    t = i.ext;
  if (!e) return "";
  if (e[0] !== "+")
    throw new Error(
      '"formatRFC3966()" expects "number" to be in E.164 format.'
    );
  return "tel:".concat(e).concat(t ? ";ext=" + t : "");
}
var Td = {
  formatExtension: function (e, t, r) {
    return "".concat(e).concat(r.ext()).concat(t);
  },
};
function cm(i, e, t, r) {
  if (
    (t ? (t = hm({}, Td, t)) : (t = Td),
    (r = new vt(r)),
    i.country && i.country !== "001")
  ) {
    if (!r.hasCountry(i.country))
      throw new Error("Unknown country: ".concat(i.country));
    r.selectNumberingPlan(i.country);
  } else if (i.countryCallingCode) r.selectNumberingPlan(i.countryCallingCode);
  else return i.phone || "";
  var n = r.countryCallingCode(),
    s = t.v2 ? i.nationalNumber : i.phone,
    o;
  switch (e) {
    case "NATIONAL":
      return s
        ? ((o = Bo(s, i.carrierCode, "NATIONAL", r, t)),
          Pa(o, i.ext, r, t.formatExtension))
        : "";
    case "INTERNATIONAL":
      return s
        ? ((o = Bo(s, null, "INTERNATIONAL", r, t)),
          (o = "+".concat(n, " ").concat(o)),
          Pa(o, i.ext, r, t.formatExtension))
        : "+".concat(n);
    case "E.164":
      return "+".concat(n).concat(s);
    case "RFC3966":
      return lm({ number: "+".concat(n).concat(s), ext: i.ext });
    case "IDD":
      if (!t.fromCountry) return;
      var a = um(s, i.carrierCode, n, t.fromCountry, r);
      return Pa(a, i.ext, r, t.formatExtension);
    default:
      throw new Error(
        'Unknown "format" argument passed to "formatNumber()": "'.concat(e, '"')
      );
  }
}
function Bo(i, e, t, r, n) {
  var s = dm(r.formats(), i);
  return s
    ? Q1(i, s, {
        useInternationalFormat: t === "INTERNATIONAL",
        withNationalPrefix: !(
          s.nationalPrefixIsOptionalWhenFormattingInNationalFormat() &&
          n &&
          n.nationalPrefix === !1
        ),
        carrierCode: e,
        metadata: r,
      })
    : i;
}
function dm(i, e) {
  return fm(i, function (t) {
    if (t.leadingDigitsPatterns().length > 0) {
      var r = t.leadingDigitsPatterns()[t.leadingDigitsPatterns().length - 1];
      if (e.search(r) !== 0) return !1;
    }
    return tn(e, t.pattern());
  });
}
function Pa(i, e, t, r) {
  return e ? r(i, e, t) : i;
}
function um(i, e, t, r, n) {
  var s = Kl(r, n.metadata);
  if (s === t) {
    var o = Bo(i, e, "NATIONAL", n);
    return t === "1" ? t + " " + o : o;
  }
  var a = em(r, void 0, n.metadata);
  if (a)
    return ""
      .concat(a, " ")
      .concat(t, " ")
      .concat(Bo(i, null, "INTERNATIONAL", n));
}
function hm() {
  for (var i = 1, e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  for (; i < t.length; ) {
    if (t[i]) for (var n in t[i]) t[0][n] = t[i][n];
    i++;
  }
  return t[0];
}
function fm(i, e) {
  for (var t = 0; t < i.length; ) {
    if (e(i[t])) return i[t];
    t++;
  }
}
function Ms(i) {
  return (
    (Ms =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ms(i)
  );
}
function Od(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(i, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function Md(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Od(Object(t), !0).forEach(function (r) {
          pm(i, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
      : Od(Object(t)).forEach(function (r) {
          Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return i;
}
function pm(i, e, t) {
  return (
    (e = Kh(e)) in i
      ? Object.defineProperty(i, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = t),
    i
  );
}
function mm(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xd(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, Kh(r.key), r);
  }
}
function gm(i, e, t) {
  return (
    e && xd(i.prototype, e),
    t && xd(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function Kh(i) {
  var e = vm(i, "string");
  return Ms(e) == "symbol" ? e : e + "";
}
function vm(i, e) {
  if (Ms(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (Ms(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
var ym = (function () {
    function i(e, t, r) {
      if ((mm(this, i), !e)) throw new TypeError("First argument is required");
      if (typeof e != "string")
        throw new TypeError("First argument must be a string");
      if (e[0] === "+" && !t)
        throw new TypeError("`metadata` argument not passed");
      if (Yn(t) && Yn(t.countries)) {
        r = t;
        var n = e;
        if (!_m.test(n))
          throw new Error(
            'Invalid `number` argument passed: must consist of a "+" followed by digits'
          );
        var s = Yh(n, void 0, void 0, void 0, r),
          o = s.countryCallingCode,
          a = s.number;
        if (((t = a), (e = o), !t))
          throw new Error("Invalid `number` argument passed: too short");
      }
      if (!t) throw new TypeError("`nationalNumber` argument is required");
      if (typeof t != "string")
        throw new TypeError("`nationalNumber` argument must be a string");
      zh(r);
      var l = bm(e, r),
        c = l.country,
        d = l.countryCallingCode;
      (this.country = c),
        (this.countryCallingCode = d),
        (this.nationalNumber = t),
        (this.number = "+" + this.countryCallingCode + this.nationalNumber),
        (this.getMetadata = function () {
          return r;
        });
    }
    return gm(i, [
      {
        key: "setExt",
        value: function (t) {
          this.ext = t;
        },
      },
      {
        key: "getPossibleCountries",
        value: function () {
          return this.country
            ? [this.country]
            : P1(
                this.countryCallingCode,
                this.nationalNumber,
                this.getMetadata()
              );
        },
      },
      {
        key: "isPossible",
        value: function () {
          return O1(this, { v2: !0 }, this.getMetadata());
        },
      },
      {
        key: "isValid",
        value: function () {
          return Wh(this, { v2: !0 }, this.getMetadata());
        },
      },
      {
        key: "isNonGeographic",
        value: function () {
          var t = new vt(this.getMetadata());
          return t.isNonGeographicCallingCode(this.countryCallingCode);
        },
      },
      {
        key: "isEqual",
        value: function (t) {
          return this.number === t.number && this.ext === t.ext;
        },
      },
      {
        key: "getType",
        value: function () {
          return Ql(this, { v2: !0 }, this.getMetadata());
        },
      },
      {
        key: "format",
        value: function (t, r) {
          return cm(
            this,
            t,
            r ? Md(Md({}, r), {}, { v2: !0 }) : { v2: !0 },
            this.getMetadata()
          );
        },
      },
      {
        key: "formatNational",
        value: function (t) {
          return this.format("NATIONAL", t);
        },
      },
      {
        key: "formatInternational",
        value: function (t) {
          return this.format("INTERNATIONAL", t);
        },
      },
      {
        key: "getURI",
        value: function (t) {
          return this.format("RFC3966", t);
        },
      },
    ]);
  })(),
  $m = function (e) {
    return /^[A-Z]{2}$/.test(e);
  };
function bm(i, e) {
  var t,
    r,
    n = new vt(e);
  return (
    $m(i)
      ? ((t = i), n.selectNumberingPlan(t), (r = n.countryCallingCode()))
      : (r = i),
    { country: t, countryCallingCode: r }
  );
}
var _m = /^\+\d+$/;
function Li(i) {
  return (
    (Li =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Li(i)
  );
}
function Dd(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, Sm(r.key), r);
  }
}
function wm(i, e, t) {
  return (
    e && Dd(i.prototype, e),
    t && Dd(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function Sm(i) {
  var e = Em(i, "string");
  return Li(e) == "symbol" ? e : e + "";
}
function Em(i, e) {
  if (Li(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (Li(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function Tm(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Om(i, e, t) {
  return (
    (e = Ds(e)),
    Mm(
      i,
      tc() ? Reflect.construct(e, t || [], Ds(i).constructor) : e.apply(i, t)
    )
  );
}
function Mm(i, e) {
  if (e && (Li(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return xm(i);
}
function xm(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function Dm(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (i.prototype = Object.create(e && e.prototype, {
    constructor: { value: i, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    e && xs(i, e);
}
function ll(i) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (ll = function (r) {
      if (r === null || !km(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (e !== void 0) {
        if (e.has(r)) return e.get(r);
        e.set(r, n);
      }
      function n() {
        return Pm(r, arguments, Ds(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        xs(n, r)
      );
    }),
    ll(i)
  );
}
function Pm(i, e, t) {
  if (tc()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, e);
  var n = new (i.bind.apply(i, r))();
  return t && xs(n, t.prototype), n;
}
function tc() {
  try {
    var i = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (tc = function () {
    return !!i;
  })();
}
function km(i) {
  try {
    return Function.toString.call(i).indexOf("[native code]") !== -1;
  } catch {
    return typeof i == "function";
  }
}
function xs(i, e) {
  return (
    (xs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, r) {
          return (t.__proto__ = r), t;
        }),
    xs(i, e)
  );
}
function Ds(i) {
  return (
    (Ds = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Ds(i)
  );
}
var an = (function (i) {
    function e(t) {
      var r;
      return (
        Tm(this, e),
        (r = Om(this, e, [t])),
        Object.setPrototypeOf(r, e.prototype),
        (r.name = r.constructor.name),
        r
      );
    }
    return Dm(e, i), wm(e);
  })(ll(Error)),
  Pd = new RegExp("(?:" + Xh() + ")$", "i");
function Cm(i) {
  var e = i.search(Pd);
  if (e < 0) return {};
  for (var t = i.slice(0, e), r = i.match(Pd), n = 1; n < r.length; ) {
    if (r[n]) return { number: t, ext: r[n] };
    n++;
  }
}
var Am = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  "１": "1",
  "２": "2",
  "３": "3",
  "４": "4",
  "５": "5",
  "６": "6",
  "７": "7",
  "８": "8",
  "９": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};
function Lm(i) {
  return Am[i];
}
function Im(i, e) {
  var t = (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (t) return (t = t.call(i)).next.bind(t);
  if (
    Array.isArray(i) ||
    (t = Rm(i)) ||
    (e && i && typeof i.length == "number")
  ) {
    t && (i = t);
    var r = 0;
    return function () {
      return r >= i.length ? { done: !0 } : { done: !1, value: i[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rm(i, e) {
  if (i) {
    if (typeof i == "string") return kd(i, e);
    var t = {}.toString.call(i).slice(8, -1);
    return (
      t === "Object" && i.constructor && (t = i.constructor.name),
      t === "Map" || t === "Set"
        ? Array.from(i)
        : t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? kd(i, e)
        : void 0
    );
  }
}
function kd(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = i[t];
  return r;
}
function Cd(i) {
  for (var e = "", t = Im(i.split("")), r; !(r = t()).done; ) {
    var n = r.value;
    e += Nm(n, e) || "";
  }
  return e;
}
function Nm(i, e, t) {
  if (i === "+") {
    if (e) {
      typeof t == "function" && t("end");
      return;
    }
    return "+";
  }
  return Lm(i);
}
var Zh = "+",
  Fm = "[\\-\\.\\(\\)]?",
  Ad = "([" + pr + "]|" + Fm + ")",
  Hm = "^\\" + Zh + Ad + "*[" + pr + "]" + Ad + "*$",
  qm = new RegExp(Hm, "g"),
  cl = pr,
  Bm = "[" + cl + "]+((\\-)*[" + cl + "])*",
  zm = "a-zA-Z",
  Vm = "[" + zm + "]+((\\-)*[" + cl + "])*",
  Gm = "^(" + Bm + "\\.)*" + Vm + "\\.?$",
  Um = new RegExp(Gm, "g"),
  Ld = "tel:",
  dl = ";phone-context=",
  Wm = ";isub=";
function jm(i) {
  var e = i.indexOf(dl);
  if (e < 0) return null;
  var t = e + dl.length;
  if (t >= i.length) return "";
  var r = i.indexOf(";", t);
  return r >= 0 ? i.substring(t, r) : i.substring(t);
}
function Ym(i) {
  return i === null ? !0 : i.length === 0 ? !1 : qm.test(i) || Um.test(i);
}
function Xm(i, e) {
  var t = e.extractFormattedPhoneNumber,
    r = jm(i);
  if (!Ym(r)) throw new an("NOT_A_NUMBER");
  var n;
  if (r === null) n = t(i) || "";
  else {
    (n = ""), r.charAt(0) === Zh && (n += r);
    var s = i.indexOf(Ld),
      o;
    s >= 0 ? (o = s + Ld.length) : (o = 0);
    var a = i.indexOf(dl);
    n += i.substring(o, a);
  }
  var l = n.indexOf(Wm);
  if ((l > 0 && (n = n.substring(0, l)), n !== "")) return n;
}
var Km = 250,
  Zm = new RegExp("[" + ec + pr + "]"),
  Qm = new RegExp("[^" + pr + "#]+$");
function Id(i, e, t) {
  if (
    ((e = e || {}),
    (t = new vt(t)),
    e.defaultCountry && !t.hasCountry(e.defaultCountry))
  )
    throw e.v2
      ? new an("INVALID_COUNTRY")
      : new Error("Unknown country: ".concat(e.defaultCountry));
  var r = eg(i, e.v2, e.extract),
    n = r.number,
    s = r.ext,
    o = r.error;
  if (!n) {
    if (e.v2)
      throw o === "TOO_SHORT" ? new an("TOO_SHORT") : new an("NOT_A_NUMBER");
    return {};
  }
  var a = rg(n, e.defaultCountry, e.defaultCallingCode, t),
    l = a.country,
    c = a.nationalNumber,
    d = a.countryCallingCode,
    h = a.countryCallingCodeSource,
    u = a.carrierCode;
  if (!t.hasSelectedNumberingPlan()) {
    if (e.v2) throw new an("INVALID_COUNTRY");
    return {};
  }
  if (!c || c.length < Jl) {
    if (e.v2) throw new an("TOO_SHORT");
    return {};
  }
  if (c.length > C1) {
    if (e.v2) throw new an("TOO_LONG");
    return {};
  }
  if (e.v2) {
    var f = new ym(d, c, t.metadata);
    return (
      l && (f.country = l),
      u && (f.carrierCode = u),
      s && (f.ext = s),
      (f.__countryCallingCodeSource = h),
      f
    );
  }
  var p = (e.extended ? t.hasSelectedNumberingPlan() : l)
    ? tn(c, t.nationalNumberPattern())
    : !1;
  return e.extended
    ? {
        country: l,
        countryCallingCode: d,
        carrierCode: u,
        valid: p,
        possible: p
          ? !0
          : !!(e.extended === !0 && t.possibleLengths() && Uh(c, l, t)),
        phone: c,
        ext: s,
      }
    : p
    ? tg(l, c, s)
    : {};
}
function Jm(i, e, t) {
  if (i) {
    if (i.length > Km) {
      if (t) throw new an("TOO_LONG");
      return;
    }
    if (e === !1) return i;
    var r = i.search(Zm);
    if (!(r < 0)) return i.slice(r).replace(Qm, "");
  }
}
function eg(i, e, t) {
  var r = Xm(i, {
    extractFormattedPhoneNumber: function (o) {
      return Jm(o, t, e);
    },
  });
  if (!r) return {};
  if (!al(r)) return am(r) ? { error: "TOO_SHORT" } : {};
  var n = Cm(r);
  return n.ext ? n : { number: r };
}
function tg(i, e, t) {
  var r = { country: i, phone: e };
  return t && (r.ext = t), r;
}
function rg(i, e, t, r) {
  var n = Yh(Cd(i), void 0, e, t, r.metadata),
    s = n.countryCallingCodeSource,
    o = n.countryCallingCode,
    a = n.number,
    l;
  if (o) r.selectNumberingPlan(o);
  else if (a && (e || t))
    r.selectNumberingPlan(e, t), e && (l = e), (o = t || Kl(e, r.metadata));
  else return {};
  if (!a) return { countryCallingCodeSource: s, countryCallingCode: o };
  var c = ol(Cd(a), l, r),
    d = c.nationalNumber,
    h = c.carrierCode,
    u = jh(o, { nationalNumber: d, metadata: r });
  return (
    u && ((l = u), u === "001" || r.selectNumberingPlan(l)),
    {
      country: l,
      countryCallingCode: o,
      countryCallingCodeSource: s,
      nationalNumber: d,
      carrierCode: h,
    }
  );
}
function ng(i) {
  var e = i[0],
    t = i[1],
    r = i[2],
    n = i[3],
    s,
    o = {},
    a;
  if (typeof e == "string")
    Yn(t)
      ? (r ? ((o = t), (a = r)) : (a = t),
        al(e) ? (s = Id(e, void 0, a)) : (s = {}))
      : (n ? ((o = r), (a = n)) : (a = r),
        al(e) ? (s = Id(e, { defaultCountry: t }, a)) : (s = {}));
  else if (Yn(e)) (s = e), r ? ((o = t), (a = r)) : (a = t);
  else
    throw new TypeError(
      "A phone number must either be a string or an object of shape { phone, [country] }."
    );
  return { input: s, options: o, metadata: a };
}
function ig() {
  var i = ng(arguments),
    e = i.input,
    t = i.options,
    r = i.metadata;
  return e.phone ? Wh(e, t, r) : !1;
}
function sg() {
  return h1(ig, arguments);
}
class og {
  constructor() {
    _(this, "REGEXP", {
      email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g,
      phone: /^[\d\s\-\+\(\)]+$/g,
      text: /^[a-zA-Z\s]+$/gi,
      number: /^[0-9]+$/g,
    });
    _(this, "ERROR_MESSAGE", {
      required: (e) => `Please fill the ${e} field`,
      regexp: {
        email: "Invalid email format",
        phone: "Phone not like format",
        text: "Text not like format",
        number: "Number not like format",
        default: "Field not like format",
      },
    });
  }
  required(e) {
    return { required: { message: e || "", required: !0 } };
  }
  isValidPhoneNumber(e, t) {
    try {
      return sg(e, t);
    } catch {
      return !1;
    }
  }
  getFieldLabel(e) {
    return e.placeholder ? e.placeholder : this.formatFieldName(e.name);
  }
  formatFieldName(e) {
    return e
      .replace(/([A-Z])/g, " $1")
      .replace(/[_-]/g, " ")
      .split(" ")
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
      .join(" ")
      .trim();
  }
  regexp(e, t) {
    return { regexp: { regexp: e, message: t || "" } };
  }
  mapFormToObject(e) {
    return Array.from(e.elements)
      .filter((r) => {
        const n = r;
        return n.type !== "submit" && n.name && n.name.trim() !== "";
      })
      .reduce((r, n) => {
        const s = n,
          { name: o, value: a } = s,
          l = this.getFieldLabel(s);
        return { ...r, [o]: { value: a || "", name: l, validType: [] } };
      }, {});
  }
  mapObjectFormToValidate(e, t) {
    return Object.entries(t).reduce((n, s) => {
      const o = s[0],
        a = s[1],
        l = a.validType,
        c = Array.from(e.elements).filter((h) => h.type !== "submit"),
        d = ["email", "phone"];
      for (const h of c) {
        const u = h.name,
          f = h.type,
          p = h.required || !1;
        if (o === u) {
          if (p) {
            const y = h.getAttribute("mess-required") || void 0,
              v = this.required(y);
            l.unshift(v);
          }
          const m = !!h.getAttribute("cus-regexp");
          if (d.includes(f) || m) {
            const y = h.getAttribute("mess-regexp") || void 0,
              v = h.getAttribute("cus-regexp") || void 0,
              b = this.regexp(v || f, y);
            l.unshift(b);
          }
        }
      }
      return { ...n, [o]: a };
    }, {});
  }
  validateForm({ formsObj: e, rules: t }) {
    var n, s;
    const r = {};
    for (const o in t) {
      if (!e[o]) continue;
      const a = e[o].value,
        l = typeof a == "string" ? a.trim() : String(a || "").trim();
      for (const c of t[o].validType) {
        if ((n = c.required) != null && n.required && (!l || l === "false")) {
          r[o] =
            ((s = c.required) == null ? void 0 : s.message) ||
            this.ERROR_MESSAGE.required(e[o].name);
          break;
        }
        if (c.regexp && l) {
          const d = c.regexp.regexp;
          let h;
          if (d in this.REGEXP) {
            const u = this.REGEXP[d];
            h = new RegExp(u.source, u.flags);
          } else
            try {
              h = new RegExp(d);
            } catch {
              console.warn(`Invalid regexp pattern: ${d}`);
              continue;
            }
          if (!h.test(l)) {
            r[o] =
              c.regexp.message ||
              this.ERROR_MESSAGE.regexp[d] ||
              this.ERROR_MESSAGE.regexp.default;
            break;
          }
        }
        if (o === "phone" && l) {
          const d = Object.values(e).find((u) => u.name === "countryCode"),
            h = (d == null ? void 0 : d.value) || "US";
          if (!this.isValidPhoneNumber(l, h)) {
            r[o] = "Invalid phone number for your country code";
            break;
          }
        }
      }
    }
    return { errorObj: r, isValidated: Object.keys(r).length === 0 };
  }
}
class Ps {
  constructor(e) {
    _(this, "DOM");
    _(this, "validator");
    _(this, "errorManager");
    _(this, "submitAction");
    _(this, "payload", {});
    _(this, "isSubmitting", !1);
    _(this, "inputHandlers", new Map());
    _(this, "btnSubmitHandler", null);
    _(this, "btnCloseHandler", null);
    _(this, "telInputHandler", null);
    _(this, "customSubmitHandler", null);
    _(this, "closeForm", () => {
      var t, r, n;
      const e =
        (n =
          (r = (t = this.DOM) == null ? void 0 : t.form) == null
            ? void 0
            : r.parentElement) == null
          ? void 0
          : n.querySelector(".f-submit-success-ic-close");
      e &&
        ((this.btnCloseHandler = () => {
          var s, o;
          (s = this.DOM) != null &&
            s.formMessage &&
            C.to((o = this.DOM) == null ? void 0 : o.formMessage, {
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              pointerEvents: "none",
            });
        }),
        e.addEventListener("click", this.btnCloseHandler));
    });
    (this.DOM = { form: e, formMessage: null }),
      (this.validator = new og()),
      (this.errorManager = new c1(e)),
      (this.submitAction = new d1(e, this.validator, this.errorManager)),
      this.buildPayloadFromForm(),
      this.setupRealtimePayloadTracking(),
      this.formHandler(),
      be(this.clear.bind(this));
  }
  getSubmitButton() {
    var e, t;
    return (t = (e = this.DOM) == null ? void 0 : e.form) == null
      ? void 0
      : t.querySelector('button[type="submit"], input[type="submit"]');
  }
  setSubmittingState(e) {
    var n;
    if (!((n = this.DOM) != null && n.form) || this.isSubmitting === e) return;
    this.isSubmitting = e;
    const t = this.getSubmitButton(),
      r = () => {
        var s;
        (s = this.DOM) == null ||
          s.form.dispatchEvent(
            new CustomEvent("form:submitting", {
              detail: {
                submitting: this.isSubmitting,
                payload: this.getPayload(),
                button: t,
              },
            })
          );
      };
    if (t) {
      const s = "formSubmitOriginalLabel",
        o = t.dataset,
        a = t instanceof HTMLInputElement ? t.value : t.textContent || "";
      if (e) {
        o[s] || (o[s] = a.trim());
        const l = o[s] || "",
          c = l.endsWith("ing...") ? l : `${l}ing...`;
        t instanceof HTMLInputElement ? (t.value = c) : (t.textContent = c),
          t.classList.add("is-submitting"),
          t.setAttribute("aria-busy", "true"),
          t.setAttribute("disabled", "true");
      } else {
        const l = o[s];
        l !== void 0 &&
          (t instanceof HTMLInputElement ? (t.value = l) : (t.textContent = l)),
          t.classList.remove("is-submitting"),
          t.removeAttribute("aria-busy"),
          t.removeAttribute("disabled");
      }
    }
    r();
  }
  buildPayloadFromForm() {
    this.payload = this.serializeFormData();
  }
  dispatchSubmitEvent(e) {
    var t, r;
    (t = this.DOM) != null &&
      t.form &&
      ((r = this.DOM) == null ||
        r.form.dispatchEvent(
          new CustomEvent("form:submitted", {
            detail: { result: e, payload: this.getPayload() },
          })
        ));
  }
  dispatchToastEvent(e, t, r) {
    var n, s;
    (n = this.DOM) != null &&
      n.form &&
      ((s = this.DOM) == null ||
        s.form.dispatchEvent(
          new CustomEvent("form:toast", {
            detail: {
              stage: e,
              message: t,
              toastType: r,
              payload: this.getPayload(),
            },
          })
        ));
  }
  getToastMessage(e) {
    var r, n;
    const t =
      (n = (r = this.DOM) == null ? void 0 : r.form) == null
        ? void 0
        : n.dataset;
    return t
      ? e === "success"
        ? t.successToast || null
        : e === "error"
        ? t.errorToast || null
        : t.pendingToast || null
      : null;
  }
  showSubmitToast(e, t) {
    const r = e === "success" ? "Success" : "Error";
    let n;
    e === "success"
      ? (n =
          this.getToastMessage(e) ||
          "Thanks! Your submission has been received.")
      : t
      ? t instanceof Error
        ? (n = t.message || "Something went wrong. Please review the form.")
        : (n = String(t))
      : (n =
          this.getToastMessage(e) ||
          "Something went wrong. Please review the form.");
    const s = e === "success" ? "success" : "error";
    this.dispatchToastEvent(e, n, s),
      console.log("title", r),
      An(r, {
        type: s,
        description: n,
        duration: e === "success" ? 3200 : 3800,
      });
  }
  serializeFormData() {
    var r;
    const e = {};
    return (
      new FormData((r = this.DOM) == null ? void 0 : r.form).forEach((n, s) => {
        e[s] !== void 0
          ? Array.isArray(e[s])
            ? e[s].push(n)
            : (e[s] = [e[s], n])
          : (e[s] = n);
      }),
      e
    );
  }
  setupRealtimePayloadTracking() {
    var r, n;
    const e = (s, o) => {
        var l;
        const a =
          (l = this.DOM) == null ? void 0 : l.form.elements.namedItem(s);
        if (!a) {
          this.payload[s] = o;
          return;
        }
        if ((a.type === "checkbox" || a.type === "radio") && !a.checked) {
          Array.isArray(this.payload[s])
            ? ((this.payload[s] = this.payload[s].filter((c) => c !== o)),
              this.payload[s].length === 0 && delete this.payload[s])
            : delete this.payload[s];
          return;
        }
        this.payload[s] !== void 0 &&
        (a.type === "checkbox" || a.type === "radio")
          ? Array.isArray(this.payload[s])
            ? this.payload[s].includes(o) || this.payload[s].push(o)
            : (this.payload[s] = [this.payload[s], o])
          : (this.payload[s] = o);
      },
      t = (s) => {
        const o = s.target;
        !o ||
          !o.name ||
          ("checked" in o
            ? (o.checked || o.type === "radio" || o.type === "checkbox") &&
              e(o.name, o.value)
            : e(o.name, o.value));
      };
    (r = this.DOM) == null || r.form.addEventListener("input", t),
      (n = this.DOM) == null || n.form.addEventListener("change", t);
  }
  getPayload() {
    return { ...this.payload };
  }
  setSubmitHandler(e) {
    this.customSubmitHandler = e;
  }
  submitForm() {
    return this.submitAction.submit();
  }
  formHandler() {
    this.inputInteractionInit(), this.closeForm();
    const e = this.getSubmitButton();
    e &&
      ((this.btnSubmitHandler = (t) => {
        t.preventDefault(),
          this.buildPayloadFromForm(),
          this.setSubmittingState(!0);
        try {
          const r = this.submitForm();
          r instanceof Promise
            ? r
                .then((n) => this.handleSubmitResult(n, t))
                .catch((n) => {
                  console.error("[FormSubmit] submit promise rejected:", n),
                    this.setSubmittingState(!1);
                })
            : this.handleSubmitResult(r, t);
        } catch (r) {
          console.error("[FormSubmit] submit error:", r),
            this.setSubmittingState(!1);
        }
      }),
      e.addEventListener("click", this.btnSubmitHandler));
  }
  handleSubmitResult(e, t) {
    var l, c;
    let r;
    if (this.customSubmitHandler)
      try {
        r = this.customSubmitHandler(e, t, this.getPayload());
      } catch (d) {
        console.error("[FormSubmit] submit handler error:", d);
      }
    const { errorObj: n, success: s } = e;
    this.dispatchSubmitEvent(e);
    const o = r instanceof Promise,
      a = () => this.setSubmittingState(!1);
    if (s.status) {
      (l = this.errorManager) == null || l.clearAllErrors();
      const d = () => {
        setTimeout(() => this.reset(), 200);
      };
      o && r
        ? r
            .then(() => {
              d(), this.showSubmitToast("success");
            })
            .catch((h) => {
              console.error("[FormSubmit] submit handler promise error:", h),
                this.showSubmitToast("error", h);
            })
            .finally(() => a())
        : (d(), a());
    } else
      n && ((c = this.errorManager) == null || c.showErrors(n)),
        o && r
          ? r
              .catch((d) =>
                console.error("[FormSubmit] submit handler promise error:", d)
              )
              .finally(() => a())
          : a();
  }
  inputInteractionInit() {
    var t, r, n, s, o, a, l;
    (this.DOM.formMessage =
      (n =
        (r = (t = this.DOM) == null ? void 0 : t.form) == null
          ? void 0
          : r.parentElement) == null
        ? void 0
        : n.querySelector(".f-submit-success")),
      (o = (s = this.DOM) == null ? void 0 : s.form) == null ||
        o.querySelectorAll(".input-field").forEach((c) => {
          const d = () => {
              var f;
              return (f = c.parentElement) == null
                ? void 0
                : f.classList.add("active");
            },
            h = () => {
              var f;
              return (f = c.parentElement) == null
                ? void 0
                : f.classList.remove("active");
            },
            u = () => {
              var f, p;
              c.value
                ? (f = c.parentElement) == null || f.classList.add("filled")
                : (p = c.parentElement) == null || p.classList.remove("filled");
            };
          c.addEventListener("focus", d),
            c.addEventListener("blur", h),
            c.addEventListener("input", u),
            c.addEventListener("change", u),
            u(),
            this.inputHandlers.set(c, {
              focus: d,
              blur: h,
              input: u,
              change: u,
            });
        });
    const e =
      (l = (a = this.DOM) == null ? void 0 : a.form) == null
        ? void 0
        : l.querySelector('[type="tel"]');
    e &&
      ((this.telInputHandler = (c) => {
        const d = c.target;
        d.value = d.value.replace(/[^\d\s+-.]/g, "");
      }),
      e.addEventListener("input", this.telInputHandler));
  }
  active(e) {
    e && this.errorManager.showErrors(e);
  }
  reset() {
    var e, t, r;
    (e = this.DOM) == null || e.form.reset(),
      (t = this.errorManager) == null || t.clearAllErrors(),
      (r = this.submitAction) == null || r.reset(),
      (this.payload = {}),
      this.buildPayloadFromForm();
  }
  clear() {
    var n, s, o, a, l, c, d, h, u, f, p;
    const e =
      (s = (n = this.DOM) == null ? void 0 : n.form) == null
        ? void 0
        : s.querySelector('[type="submit"]');
    e &&
      this.btnSubmitHandler &&
      (e.removeEventListener("click", this.btnSubmitHandler),
      (this.btnSubmitHandler = null));
    const t =
      (l =
        (a = (o = this.DOM) == null ? void 0 : o.form) == null
          ? void 0
          : a.parentElement) == null
        ? void 0
        : l.querySelector(".f-submit-success-ic-close");
    t &&
      this.btnCloseHandler &&
      (t.removeEventListener("click", this.btnCloseHandler),
      (this.btnCloseHandler = null)),
      this.inputHandlers.forEach((m, g) => {
        g.removeEventListener("focus", m.focus),
          g.removeEventListener("blur", m.blur),
          g.removeEventListener("input", m.input),
          g.removeEventListener("change", m.change);
      }),
      this.inputHandlers.clear();
    const r =
      (d = (c = this.DOM) == null ? void 0 : c.form) == null
        ? void 0
        : d.querySelector('[type="tel"]');
    r &&
      this.telInputHandler &&
      (r.removeEventListener("input", this.telInputHandler),
      (this.telInputHandler = null)),
      (h = this.errorManager) == null || h.clear(),
      (u = this.submitAction) == null || u.destroy(),
      (this.customSubmitHandler = null),
      this.setSubmittingState(!1),
      C.killTweensOf((f = this.DOM) == null ? void 0 : f.form),
      C.killTweensOf((p = this.DOM) == null ? void 0 : p.formMessage);
  }
  destroy() {
    this.clear(),
      (this.DOM.form = null),
      (this.DOM.formMessage = null),
      (this.validator = null),
      (this.errorManager = null),
      (this.submitAction = null);
  }
}
class ag extends HTMLElement {
  constructor() {
    super();
    _(this, "formSubmit", null);
  }
  connectedCallback() {
    console.log("FormSubscription connected"),
      setTimeout(() => {
        this.initForm();
      }, 0);
  }
  initForm() {
    const t = this.querySelector("form");
    if (!t) {
      console.warn("FormSubscription: form element not found.");
      return;
    }
    this.formSubmit && this.formSubmit.destroy(),
      (this.formSubmit = new Ps(t)),
      this.formSubmit.setSubmitHandler((r, n, s) => {
        console.log("FormSubscription submit payload", s);
      });
  }
  disconnectedCallback() {
    console.log("FormSubscription disconnected"),
      this.formSubmit && (this.formSubmit.destroy(), (this.formSubmit = null));
  }
}
customElements.get("form-subscription") ||
  customElements.define("form-subscription", ag);
class lg extends HTMLElement {
  constructor() {
    super();
    _(this, "formSubBtnWrap", null);
    _(this, "handleClick", null);
    _(this, "handleResize", null);
    _(this, "formSubmit", null);
    _(this, "formIsOpen", !1);
  }
  connectedCallback() {
    console.log("FormSubEffect connected"),
      setTimeout(() => {
        this.handleOpenFormSub(), this.initForm();
      }, 0);
  }
  disconnectedCallback() {
    console.log("FormSubEffect disconnected"), this.clear();
  }
  initForm() {
    const t = this.querySelector("form");
    if (!t) {
      console.warn("FormSubEffect: form element not found.");
      return;
    }
    this.formSubmit && this.formSubmit.destroy(),
      (this.formSubmit = new Ps(t)),
      this.formSubmit.setSubmitHandler((r, n, s) => {
        console.log("FormSubEffect submit payload", s);
      });
  }
  handleOpenFormSub() {
    const t = this,
      r = t.querySelector(".form-sub-inner-right-main"),
      n = t.querySelector(".form-sub-inner-right-main-wrap"),
      s = t.querySelector(".form-sub-btn-wrap"),
      o = t.querySelector(".form-sub-btn-main");
    if (r && n && s && o) {
      const a = () => {
        const c = r.getBoundingClientRect().height;
        n.style.height = `${c}px`;
      };
      (this.formSubBtnWrap = s),
        (this.handleClick = () => {
          this.formIsOpen ||
            ((this.formIsOpen = !0), a(), (o.style.pointerEvents = "auto"));
        }),
        this.formSubBtnWrap.addEventListener("click", this.handleClick);
      let l = window.innerWidth;
      (this.handleResize = () => {
        const c = window.innerWidth;
        l !== c && ((l = c), a());
      }),
        window.addEventListener("resize", this.handleResize);
    }
  }
  clear() {
    this.formSubmit && (this.formSubmit.destroy(), (this.formSubmit = null)),
      this.formSubBtnWrap &&
        this.handleClick &&
        this.formSubBtnWrap.removeEventListener("click", this.handleClick),
      this.handleResize &&
        window.removeEventListener("resize", this.handleResize),
      (this.formSubBtnWrap = null),
      (this.handleClick = null),
      (this.handleResize = null),
      (this.formIsOpen = !1);
  }
}
customElements.get("form-subscription-effect") ||
  customElements.define("form-subscription-effect", lg);
class cg {
  constructor() {
    _(this, "DOM");
    this.DOM = { el: document.querySelector("body") };
  }
  init() {
    this.loadImages(),
      this.handleStatusInput(),
      this.handleBtnHoverFormSubmit();
  }
  maskText(e) {
    const t = e.querySelectorAll("[data-text-mask]");
    t.length &&
      t.forEach((r) => {
        var a;
        const n = r,
          s = ((a = n.textContent) == null ? void 0 : a.trim()) || "",
          o = n.getAttribute("delay-trigger");
        s && new fs(n, { delay: o ? parseFloat(o) : 0 });
      });
  }
  fadeWrap(e) {
    const t = e.querySelectorAll("[data-fade]");
    t.length &&
      t.forEach((r) => {
        const n = r.getAttribute("delay-trigger");
        new us(r, { type: "fade_tran", delay: n ? parseFloat(n) : 0 });
      });
  }
  fadeText(e) {
    const t = e.querySelectorAll("[data-text-fade]");
    t.length &&
      t.forEach((r) => {
        const n = r.getAttribute("delay-trigger");
        new Hh(r, { delay: n ? parseFloat(n) : 0 });
      });
  }
  parrallaxImage(e) {
    const t = e.querySelectorAll("[data-parallax]");
    t.length &&
      t.forEach((r) => {
        const n = parseFloat(r.getAttribute("data-scale") || "1.1"),
          s = parseInt(r.getAttribute("data-direction") || "-1");
        new Xl({ el: r, offset: 20, direction: s, scale: n ?? 1.15 });
      });
  }
  countText(e) {
    const t = e.querySelectorAll("[data-text-counter]");
    t.length &&
      t.forEach((r) => {
        new hs(r);
      });
  }
  loadImages() {
    const e = document.querySelectorAll("img");
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      if (r.getAttribute("srcset")) {
        const s = r.getAttribute("width") || r.width,
          o = r.getBoundingClientRect().y;
        if (
          (r.setAttribute("sizes", `(max-width: ${s}px) 100vw, ${s}px`),
          o > window.innerHeight)
        ) {
          const a = r.srcset.split(" ")[0];
          r.style.background = `url(${a}) no-repeat center / cover`;
        }
      }
    }
  }
  handleBtnHoverFormSubmit() {
    this.DOM.el.querySelectorAll(".form-btn-wrap").forEach((t) => {
      const r = t == null ? void 0 : t.querySelector(".btn-primary");
      t == null ||
        t.addEventListener("mouseenter", () => {
          r == null || r.classList.add("hover");
        }),
        t == null ||
          t.addEventListener("mouseleave", () => {
            r == null || r.classList.remove("hover");
          });
    });
  }
  handleStatusInput() {
    const e = document.querySelector(".input-search"),
      t = document.querySelector(".clear-input"),
      r = document.querySelector(".list-search-result-wrapper"),
      n = document.querySelector(".result-wrapper");
    if (!(!e || !t || !n || !r))
      if (window.location.pathname === "/support-center")
        (n.style.display = "none"),
          e.addEventListener("input", (s) => {
            s.target.value !== ""
              ? ((t.style.opacity = "1"), (n.style.display = "block"))
              : ((t.style.opacity = "0"), (n.style.display = "none")),
              cd(() => {
                const o = r.querySelectorAll(".result-search-item"),
                  a = document.querySelector(".result-search-counter-top");
                a &&
                  (o.length === 0
                    ? (a.style.opacity = "0")
                    : (a.style.opacity = "1"));
              }, 500)();
          }),
          t.addEventListener("click", () => {
            (t.style.opacity = "0"),
              window.location.pathname === "/support-center" &&
                (n.style.display = "none");
          });
      else {
        const s = document.querySelector(".result-search-counter-top");
        if (!s) return;
        (s.style.opacity = "0"),
          e.addEventListener("input", (o) => {
            o.target.value !== ""
              ? (t.style.opacity = "1")
              : ((t.style.opacity = "0"), (s.style.opacity = "0")),
              cd(() => {
                const a = r.querySelectorAll(".result-search-item"),
                  l = document.querySelector(".result-search-counter-top");
                if (l)
                  if (a.length === 0) l.style.opacity = "0";
                  else {
                    if (a.length !== 0 && o.target.value === "") {
                      l.style.opacity = "0";
                      return;
                    }
                    l.style.opacity = "1";
                  }
              }, 500)();
          });
      }
  }
}
const z = new cg();
class dg {
  constructor() {
    _(this, "container", null);
    this.updateContainer();
  }
  updateContainer() {
    (this.container = document.querySelector('[data-barba="container"]')),
      this.container ||
        (this.container = document.querySelector("[data-page]")),
      this.container || (this.container = document.body);
  }
  info() {
    console.log(
      "%c🎨 Animation Debug Commands",
      "color: #9C27B0; font-weight: bold;",
      `

%cBasic Controls:`,
      "color: #2196F3; font-weight: bold;",
      `
  debugAnim.start()        - Start all animations on current page`,
      `
  debugAnim.stop()         - Stop all animations`,
      `
  debugAnim.replay()       - Replay all animations`,
      `
  debugAnim.clear()        - Clear all animations and ScrollTriggers`,
      `

%cState Info:`,
      "color: #4CAF50; font-weight: bold;",
      `
  debugAnim.state()        - Show current page state (first-load/transition)`,
      `
  debugAnim.list()         - List all animation elements on page`,
      `
  debugAnim.scrollTriggers() - Show all active ScrollTriggers`,
      `

%cTest Individual Animations:`,
      "color: #FF9800; font-weight: bold;",
      `
  debugAnim.testMask()     - Test mask text animation`,
      `
  debugAnim.testFade()     - Test fade animation`,
      `
  debugAnim.testFadeText() - Test fade text animation`,
      `
  debugAnim.testCounter()  - Test counter animation`,
      `
  debugAnim.testParallax() - Test parallax animation`,
      `

%cAdvanced:`,
      "color: #9C27B0; font-weight: bold;",
      `
  debugAnim.emitEnter()    - Manually trigger PAGE_ENTER event`,
      `
  debugAnim.refreshST()    - Refresh all ScrollTriggers`,
      `
  debugAnim.killAllGsap()  - Kill all GSAP animations`
    );
  }
  state() {
    const { pageLoadState: e, isFirstLoad: t, isPageEnter: r } = Ye;
    console.log(
      "%c📊 Page State Info",
      "color: #4CAF50; font-size: 14px; font-weight: bold;",
      `

%cCurrent State:`,
      "color: #666;",
      `%c${e}`,
      `color: ${
        e === "first-load" ? "#4CAF50" : "#FF9800"
      }; font-weight: bold;`,
      `
%cIs First Load:`,
      "color: #666;",
      `%c${t}`,
      `color: ${t ? "#4CAF50" : "#999"}; font-weight: bold;`,
      `
%cIs Page Enter:`,
      "color: #666;",
      `%c${r}`,
      `color: ${r ? "#4CAF50" : "#999"}; font-weight: bold;`,
      `
%cWindow Size:`,
      "color: #666;",
      `%c${Ye.winSize.width} x ${Ye.winSize.height}`,
      "color: #2196F3; font-weight: bold;"
    );
  }
  list() {
    if ((this.updateContainer(), !this.container)) return;
    const e = this.container.querySelectorAll("[data-text-mask]"),
      t = this.container.querySelectorAll("[data-fade]"),
      r = this.container.querySelectorAll("[data-text-fade]"),
      n = this.container.querySelectorAll("[data-text-counter]"),
      s = this.container.querySelectorAll("[data-parallax]");
    console.log(
      "%c📋 Animation Elements on Current Page",
      "color: #4CAF50; font-size: 14px; font-weight: bold;",
      `

%c[data-text-mask]:`,
      "color: #666;",
      `%c${e.length} elements`,
      "color: #2196F3; font-weight: bold;",
      `
%c[data-fade]:`,
      "color: #666;",
      `%c${t.length} elements`,
      "color: #2196F3; font-weight: bold;",
      `
%c[data-text-fade]:`,
      "color: #666;",
      `%c${r.length} elements`,
      "color: #2196F3; font-weight: bold;",
      `
%c[data-text-counter]:`,
      "color: #666;",
      `%c${n.length} elements`,
      "color: #2196F3; font-weight: bold;",
      `
%c[data-parallax]:`,
      "color: #666;",
      `%c${s.length} elements`,
      "color: #2196F3; font-weight: bold;"
    );
  }
  start() {
    if ((this.updateContainer(), !!this.container))
      try {
        z.maskText(this.container),
          z.fadeText(this.container),
          z.countText(this.container),
          z.fadeWrap(this.container),
          z.parrallaxImage(this.container);
      } catch {}
  }
  stop() {
    C.globalTimeline.pause();
  }
  resume() {
    C.globalTimeline.resume();
  }
  replay() {
    this.clear(),
      setTimeout(() => {
        this.start();
      }, 300);
  }
  clear() {
    this.updateContainer(),
      this.container &&
        (C.killTweensOf(this.container),
        C.killTweensOf(this.container.querySelectorAll("*"))),
      U.getAll().forEach((e) => e.kill());
  }
  scrollTriggers() {
    const e = U.getAll();
    e.length > 0
      ? e.forEach((t, r) => {
          var n;
          console.log(`ScrollTrigger #${r + 1}:`, {
            trigger: t.trigger,
            start: t.start,
            end: t.end,
            scrub: (n = t.vars) == null ? void 0 : n.scrub,
            pin: t.pin,
          });
        })
      : console.log("No active ScrollTriggers");
  }
  testMask() {
    var t;
    this.updateContainer();
    const e =
      (t = this.container) == null
        ? void 0
        : t.querySelector("[data-text-mask]");
    e && new fs(e);
  }
  testFade() {
    var t;
    this.updateContainer();
    const e =
      (t = this.container) == null ? void 0 : t.querySelector("[data-fade]");
    e && new us(e, { type: "fade_tran" });
  }
  testFadeText() {
    var t;
    this.updateContainer();
    const e =
      (t = this.container) == null
        ? void 0
        : t.querySelector("[data-text-fade]");
    e && new Hh(e);
  }
  testCounter() {
    var t;
    this.updateContainer();
    const e =
      (t = this.container) == null
        ? void 0
        : t.querySelector("[data-text-counter]");
    e && new hs(e);
  }
  testParallax() {
    var t;
    this.updateContainer();
    const e =
      (t = this.container) == null
        ? void 0
        : t.querySelector("[data-parallax]");
    e && new Xl({ el: e, offset: 30, direction: -1 });
  }
  emitEnter() {
    X.emit(Ut);
  }
  refreshST() {
    U.refresh();
  }
  killAllGsap() {
    C.killTweensOf("*");
  }
  toggleState() {
    const t = Ye.pageLoadState === "first-load" ? "transition" : "first-load";
    (Ye.pageLoadState = t), this.state();
  }
  setState(e) {
    (Ye.pageLoadState = e), this.state();
  }
}
const ug = new dg();
typeof window < "u" && (window.debugAnim = ug);
class hg {
  constructor() {
    _(this, "el");
    _(this, "isGrid");
    _(this, "cleanup");
    (this.el = document.querySelector(".grid-debug")),
      (this.isGrid = localStorage.getItem("isGrid") === "true"),
      this.el && (this.el.style.display = this.isGrid ? "block" : "none"),
      this.init(),
      be(this.clear.bind(this));
  }
  init() {
    if (!this.el) return;
    const e = (t) => {
      const r = t.which || t.keyCode;
      !!t.shiftKey &&
        r === 71 &&
        ((this.isGrid = !this.isGrid),
        (this.el.style.display = this.isGrid ? "block" : "none"),
        localStorage.setItem("isGrid", String(this.isGrid)));
    };
    window.addEventListener("keydown", e),
      (this.cleanup = () => {
        window.removeEventListener("keydown", e);
      });
  }
  clear() {
    this.cleanup && (this.cleanup(), (this.cleanup = void 0));
  }
}
class fg {
  constructor() {
    _(this, "DOM");
    _(this, "btnBackTopHandler", null);
    _(this, "eventListeners");
    _(this, "parallaxInstance", null);
    _(this, "moveTo", null);
    _(this, "listImageChange", null);
    _(this, "imgInner", null);
    (this.DOM = { el: document.querySelector(".footer") }),
      (this.eventListeners = []),
      (this.parallaxInstance = null),
      (this.moveTo = null),
      (this.listImageChange = null),
      (this.imgInner = null),
      be(this.clear.bind(this));
  }
  init() {
    this.destroy(),
      this.updateDOM(),
      this.DOM.el && (this.hander(), this.initMotion(), this.animateIn());
  }
  updateDOM() {
    this.DOM = { el: document.querySelector(".footer") };
  }
  addEventListener(e, t, r) {
    e.addEventListener(t, r),
      this.eventListeners.push({ element: e, event: t, handler: r });
  }
  initMotion() {
    this.DOM.el &&
      (z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el));
  }
  animateIn() {
    if (!this.DOM.el) return;
    const e = this.DOM.el.querySelectorAll(".footer > *");
    C.fromTo(
      e,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      }
    );
  }
  hander() {
    var t;
    const e =
      (t = this.DOM.el) == null
        ? void 0
        : t.querySelector(".footer-bottom-inner-back");
    C.registerPlugin(Bs),
      (this.btnBackTopHandler = () => {
        C.to(window, { scrollTo: 0, duration: 1.2, ease: "power3.inOut" });
      }),
      e == null || e.addEventListener("click", this.btnBackTopHandler);
  }
  movingImageFooter() {
    var s, o, a;
    if (!this.DOM.el) return;
    this.imgInner =
      (s = this.DOM.el) == null
        ? void 0
        : s.querySelector(".footer-middle-inner-img");
    const e =
      (o = this.DOM.el) == null
        ? void 0
        : o.querySelector(".footer-middle-list-imgs");
    e &&
      (this.parallaxInstance = new Xl({
        el: e,
        offset: 25,
        direction: 1,
        scale: 1.3,
      })),
      (this.listImageChange =
        (a = this.DOM.el) == null
          ? void 0
          : a.querySelectorAll(".footer-middle-list-imgs-item")),
      this.imgInner &&
        (this.moveTo = C.quickTo(this.imgInner, "x", {
          duration: 0.9,
          ease: "power3.out",
        }));
    const t = (l) => {
      var c;
      (c = this.listImageChange) == null ||
        c.forEach((d, h) => {
          h === l
            ? C.to(d, {
                opacity: 1,
                ease: "power3.out",
                duration: 0.6,
                willChange: "opacity",
              })
            : C.to(d, { opacity: 0, ease: "power3.out", duration: 0.6 });
        });
    };
    t(1), this.imgInner && (this.imgInner.style.willChange = "transform");
    const r = (l) => {
        var p;
        if (!this.DOM.el || !this.imgInner || !this.moveTo) return;
        const d = l.pageX,
          h = ld(d, 0, window.innerWidth, -1, 1),
          u = Math.floor(
            ld(
              d,
              0,
              window.innerWidth,
              0,
              ((p = this.listImageChange) == null ? void 0 : p.length) || 3
            )
          ),
          f = (this.DOM.el.clientWidth - this.imgInner.clientWidth) / 2;
        this.moveTo(h * f), t(u);
      },
      n = () => {
        this.moveTo && (this.moveTo(0), t(1));
      };
    this.addEventListener(this.DOM.el, "mousemove", r),
      this.addEventListener(this.DOM.el, "mouseleave", n);
  }
  resetMovingImageFooter() {}
  clear() {
    this.destroy();
  }
  destroy() {
    var t;
    this.eventListeners.forEach(({ element: r, event: n, handler: s }) => {
      r.removeEventListener(n, s);
    }),
      (this.eventListeners = []);
    const e =
      (t = this.DOM.el) == null
        ? void 0
        : t.querySelector(".footer-bottom-inner-back");
    if (
      (e &&
        this.btnBackTopHandler &&
        (e.removeEventListener("click", this.btnBackTopHandler),
        (this.btnBackTopHandler = null)),
      this.DOM.el)
    ) {
      const r = this.DOM.el.querySelectorAll(".footer > *");
      C.killTweensOf(
        [this.DOM.el, ...Array.from(r), this.imgInner].filter(Boolean)
      ),
        this.listImageChange &&
          C.killTweensOf(Array.from(this.listImageChange));
    }
    this.parallaxInstance &&
      typeof this.parallaxInstance.destroy == "function" &&
      (this.parallaxInstance.destroy(), (this.parallaxInstance = null)),
      (this.moveTo = null),
      (this.listImageChange = null),
      (this.imgInner = null);
  }
}
const ul = new fg();
class pg {
  constructor() {
    _(this, "DOM");
    _(this, "isOpenMenu");
    _(this, "eventListeners");
    _(this, "timeouts");
    _(this, "scrollHandler");
    _(this, "resizeCleanup");
    _(this, "mobileNavResizeHandler", null);
    _(this, "previousDeviceType", null);
    _(this, "tmpTypeColorHeader");
    _(this, "typeColorHeader");
    var e;
    (this.DOM = {
      wrap: document.querySelector(".header-wrap"),
      el: document.querySelector(".header-container"),
      footer: document.querySelector(".footer"),
      secondaryBtn: document.querySelector(".btn-secondary"),
      mainLinks: document.querySelectorAll(".header-main-menu-link"),
      dropdownLinks: document.querySelectorAll(".header-dropdown-inner-item"),
    }),
      (this.isOpenMenu = !1),
      (this.eventListeners = []),
      (this.timeouts = []),
      (this.scrollHandler = null),
      (this.resizeCleanup = null),
      (this.typeColorHeader =
        ((e = this.DOM.wrap) == null ? void 0 : e.getAttribute("data-type")) ||
        ""),
      (this.tmpTypeColorHeader = this.typeColorHeader);
  }
  init() {
    var e;
    this.destroy(),
      this.updateDOM(),
      (this.typeColorHeader =
        ((e = this.DOM.wrap) == null ? void 0 : e.getAttribute("data-type")) ||
        ""),
      (this.tmpTypeColorHeader = this.typeColorHeader),
      this.show(),
      this.handleDropdownToggle(),
      this.handleOpenNavMobile(),
      this.setupMobileNavResizeHandler(),
      this.detectActiveCurrentPage();
  }
  updateDOM() {
    this.DOM = {
      wrap: document.querySelector(".header-wrap"),
      el: document.querySelector(".header-container"),
      footer: document.querySelector(".footer"),
      secondaryBtn: document.querySelector(".btn-secondary"),
      mainLinks: document.querySelectorAll(".header-main-menu-link"),
      dropdownLinks: document.querySelectorAll(".header-dropdown-inner-item"),
    };
  }
  addEventListener(e, t, r) {
    e.addEventListener(t, r),
      this.eventListeners.push({ element: e, event: t, handler: r });
  }
  addTimeout(e) {
    this.timeouts.push(e);
  }
  show() {
    let e = 0,
      t = null;
    if (!this.DOM.el) return;
    let r = !1,
      n = !1;
    const s = this.DOM.el.querySelector(".header-dropdown-overlay"),
      o = () => {
        if (this.DOM.el && this.DOM.el instanceof HTMLElement) {
          const d = this.DOM.el.offsetHeight;
          document.documentElement.style.setProperty(
            "--header-height",
            `${d}px`
          );
        }
      };
    o(),
      (window.pageYOffset || document.documentElement.scrollTop || 0) <=
      this.DOM.el.clientHeight * 2
        ? document.body.classList.add("header-visible")
        : document.body.classList.remove("header-visible");
    const l = () => {
        var d;
        t && clearTimeout(t),
          (d = this.DOM.el) == null || d.classList.add("scrollDown"),
          (n = !0);
      },
      c = () => {
        t && clearTimeout(t),
          s &&
            (C.killTweensOf(s),
            C.to(s, {
              opacity: 0,
              ease: "power3.out",
              overwrite: "auto",
              duration: 0.8,
            })),
          this.handleResetDropdown(),
          (t = setTimeout(() => {
            var d;
            (n = !1),
              r ||
                (d = this.DOM.el) == null ||
                d.classList.remove("scrollDown");
          }, 550)),
          t && this.addTimeout(t);
      };
    this.DOM.el &&
      (this.addEventListener(this.DOM.el, "mouseenter", l),
      this.addEventListener(this.DOM.el, "mouseleave", c)),
      (this.scrollHandler = () => {
        var m, g, y, v, b, $, E, T;
        if (!this.DOM.el) return;
        (this.tmpTypeColorHeader =
          ((m = this.DOM.wrap) == null
            ? void 0
            : m.getAttribute("data-type")) || ""),
          o();
        const d = window.pageYOffset || document.documentElement.scrollTop || 0;
        r = d > this.DOM.el.clientHeight;
        const h =
            ((g = this.DOM.footer) == null
              ? void 0
              : g.getBoundingClientRect().y) -
              this.DOM.el.clientHeight <
            0,
          f = (e < d && d > this.DOM.el.clientHeight * 2) || h,
          p = e > d && !h;
        if (f)
          this.DOM.el.classList.add("header-is-hidden"),
            document.body.classList.remove("header-visible"),
            this.handleResetDropdown();
        else if (p)
          if (
            (this.DOM.el.classList.remove("header-is-hidden"),
            document.body.classList.add("header-visible"),
            r)
          )
            this.DOM.el.classList.add("scrollDown");
          else {
            if (n) return;
            this.DOM.el.classList.remove("scrollDown");
          }
        (e = d),
          d > 10
            ? ((y = this.DOM.el) == null || y.classList.add("scrolled"),
              (v = this.DOM.wrap) == null ||
                v.setAttribute("data-type", "dark"),
              (b = this.DOM.secondaryBtn) == null ||
                b.setAttribute("data-type", "dark"))
            : (($ = this.DOM.el) == null || $.classList.remove("scrolled"),
              (E = this.DOM.wrap) == null ||
                E.setAttribute("data-type", this.typeColorHeader),
              (T = this.DOM.secondaryBtn) == null ||
                T.setAttribute("data-type", this.typeColorHeader));
      }),
      this.addEventListener(window, "scroll", this.scrollHandler);
  }
  handleResetDropdown() {
    if (!this.DOM.el) return;
    this.DOM.el.querySelectorAll(".header-main-menu-dropdown").forEach((t) => {
      const r = t.querySelector(".header-main-menu-dropdown-ic"),
        n = t.querySelector(".header-dropdown");
      !r ||
        !n ||
        (C.killTweensOf([n, r]),
        C.to(r, {
          ease: "power3.out",
          duration: 0.4,
          rotate: 0,
          overwrite: "auto",
        }),
        C.to(n, {
          ease: "power3.out",
          y: 50,
          boxShadow: "none",
          pointerEvents: "none",
          opacity: 0,
          zIndex: 1,
          overwrite: "auto",
        }));
    });
  }
  handleDropdownToggle() {
    if (!this.DOM.el) return;
    this.DOM.el.querySelectorAll(".header-main-menu-dropdown").forEach((t) => {
      const r = t.querySelector(".header-main-menu-dropdown-ic"),
        n = t.querySelector(".header-dropdown");
      C.set(".header-dropdown", { y: 50 });
      const s = () => {
          !n ||
            !r ||
            (C.killTweensOf([n, r]),
            C.killTweensOf(t),
            C.to(r, {
              ease: "power3.out",
              duration: 0.4,
              rotate: 180,
              overwrite: "auto",
            }),
            C.to(n, {
              ease: "power3.out",
              opacity: 1,
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              y: 0,
              pointerEvents: "all",
              overwrite: "auto",
              zIndex: 2,
            }));
        },
        o = this.handleResetDropdown.bind(this);
      this.resizeCleanup = Ph(() => {
        if (this.DOM.el && this.DOM.el instanceof HTMLElement) {
          const a = this.DOM.el.offsetHeight;
          document.documentElement.style.setProperty(
            "--header-height",
            `${a}px`
          );
        }
        this.addEventListener(t, "mouseenter", s),
          this.addEventListener(t, "mouseleave", o);
      });
    });
  }
  handleIconToggleMobile(e) {
    var n, s;
    const t =
        (n = this.DOM.el) == null
          ? void 0
          : n.querySelector(".header-main-ham"),
      r =
        (s = this.DOM.wrap) == null
          ? void 0
          : s.querySelector(".header-container");
    t &&
      (t.classList.toggle("active", e),
      r == null || r.classList.toggle("active", e));
  }
  resetNavMobile() {
    var n, s;
    const e =
        (n = this.DOM.wrap) == null
          ? void 0
          : n.querySelector(".header-sidebar"),
      t = (s = this.DOM.el) == null ? void 0 : s.classList.contains("scrolled");
    if (!e) return;
    C.set(e, {
      opacity: 0,
      xPercent: 100,
      pointerEvents: "none",
      overwrite: "auto",
    }),
      (this.isOpenMenu = !1),
      this.handleIconToggleMobile(!1),
      ge.enabled();
    const r = setTimeout(() => {
      var o, a, l, c, d, h;
      t
        ? ((o = this.DOM.wrap) == null || o.setAttribute("data-type", "dark"),
          (l =
            (a = this.DOM.el) == null
              ? void 0
              : a.querySelector(".btn-secondary")) == null ||
            l.setAttribute("data-type", "dark"))
        : ((c = this.DOM.wrap) == null ||
            c.setAttribute("data-type", this.tmpTypeColorHeader),
          (h =
            (d = this.DOM.el) == null
              ? void 0
              : d.querySelector(".btn-secondary")) == null ||
            h.setAttribute("data-type", this.tmpTypeColorHeader));
    }, 100);
    this.addTimeout(r);
  }
  handleOpenNavMobile() {
    var s, o;
    const e =
        (s = this.DOM.wrap) == null
          ? void 0
          : s.querySelector(".header-main-ham"),
      t =
        (o = this.DOM.wrap) == null
          ? void 0
          : o.querySelector(".header-sidebar");
    if (!e || !t) return;
    const r = this.eventListeners.find(
      (a) => a.element === e && a.event === "click"
    );
    r &&
      (e.removeEventListener("click", r.handler),
      (this.eventListeners = this.eventListeners.filter((a) => a !== r))),
      this.resetNavMobile();
    const n = () => {
      if (this.isOpenMenu) {
        this.isOpenMenu = !1;
        const a = setTimeout(() => {
          var l, c, d;
          (l = this.DOM.wrap) == null ||
            l.setAttribute("data-type", this.tmpTypeColorHeader),
            (d =
              (c = this.DOM.el) == null
                ? void 0
                : c.querySelector(".btn-secondary")) == null ||
              d.setAttribute("data-type", this.tmpTypeColorHeader);
        }, 100);
        this.addTimeout(a),
          ge.enabled(),
          this.handleIconToggleMobile(!1),
          C.to(t, {
            opacity: 0,
            duration: 0.6,
            xPercent: 100,
            ease: "power3.out",
            pointerEvents: "none",
            overwrite: "auto",
          });
        return;
      } else {
        this.isOpenMenu = !0;
        const a = setTimeout(() => {
          var l, c, d;
          (l = this.DOM.wrap) == null || l.setAttribute("data-type", "light"),
            (d =
              (c = this.DOM.el) == null
                ? void 0
                : c.querySelector(".btn-secondary")) == null ||
              d.setAttribute("data-type", "light");
        }, 100);
        this.addTimeout(a),
          ge.disabled(),
          this.handleIconToggleMobile(!0),
          C.to(t, {
            opacity: 1,
            xPercent: 0,
            pointerEvents: "all",
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
      }
    };
    e.addEventListener("click", n),
      this.eventListeners.push({ element: e, event: "click", handler: n });
  }
  setupMobileNavResizeHandler() {
    this.mobileNavResizeHandler &&
      (this.mobileNavResizeHandler.destroy(),
      (this.mobileNavResizeHandler = null)),
      (this.mobileNavResizeHandler = Hs(
        null,
        () => {
          var t;
          const e =
            (t = this.mobileNavResizeHandler) == null
              ? void 0
              : t.getDeviceType();
          e &&
            e !== this.previousDeviceType &&
            ((this.previousDeviceType = e), this.handleOpenNavMobile());
        },
        { threshold: 0, debounceDelay: 100, immediate: !0 }
      )),
      (this.previousDeviceType = this.mobileNavResizeHandler.getDeviceType());
  }
  detectActiveCurrentPage() {
    const e = this.DOM.mainLinks;
    if (!e) return;
    e.forEach((r) => {
      const n = r.classList.contains("w--current"),
        s = r.querySelector(".txt");
      n
        ? (s == null || s.classList.add("hover_line_active"),
          s == null || s.classList.remove("hover_line"))
        : (s == null || s.classList.remove("hover_line_active"),
          s == null || s.classList.add("hover_line"));
    });
    const t = this.DOM.dropdownLinks;
    t &&
      t.forEach((r) => {
        const n = r.classList.contains("w--current");
        r == null || r.classList.toggle("dropdown-link-active", n);
      });
  }
  destroy() {
    var r, n, s, o;
    if (
      (this.eventListeners.forEach(({ element: a, event: l, handler: c }) => {
        a.removeEventListener(l, c);
      }),
      (this.eventListeners = []),
      this.timeouts.forEach((a) => {
        clearTimeout(a);
      }),
      (this.timeouts = []),
      this.DOM.el)
    ) {
      C.killTweensOf(this.DOM.el), C.set(this.DOM.el, { clearProps: "all" });
      const a = Array.from(this.DOM.el.querySelectorAll(".header-dropdown")),
        l = Array.from(
          this.DOM.el.querySelectorAll(".header-main-menu-dropdown-ic")
        ),
        c = this.DOM.el.querySelector(".header-dropdown-overlay"),
        d = this.DOM.el.querySelector(".header-mobile-nav"),
        h = Array.from(
          this.DOM.el.querySelectorAll(".header-btn-menu-icon-line")
        );
      C.killTweensOf([...a, ...l, c, d, ...h].filter(Boolean));
    }
    if ((this.handleResetDropdown(), this.isOpenMenu)) {
      (this.isOpenMenu = !1),
        (r = this.DOM.wrap) == null || r.classList.remove("isOpenMenu"),
        ge.enabled();
      const a =
        (n = this.DOM.el) == null ? void 0 : n.querySelector(".header-sidebar");
      a &&
        (C.killTweensOf(a),
        C.set(a, { opacity: 0, xPercent: 100, pointerEvents: "none" })),
        this.handleIconToggleMobile(!1);
    }
    this.resizeCleanup && (this.resizeCleanup(), (this.resizeCleanup = null)),
      this.mobileNavResizeHandler &&
        (this.mobileNavResizeHandler.destroy(),
        (this.mobileNavResizeHandler = null)),
      (this.previousDeviceType = null),
      (this.scrollHandler = null),
      this.DOM.el &&
        this.DOM.el.classList.remove(
          "header-is-hidden",
          "scrollDown",
          "isOpenMenu",
          "scrolled",
          "active"
        ),
      this.DOM.wrap && this.DOM.wrap.classList.remove("isOpenMenu");
    const e =
        (s = this.DOM.el) == null
          ? void 0
          : s.querySelector(".header-main-ham"),
      t =
        (o = this.DOM.wrap) == null
          ? void 0
          : o.querySelector(".header-container");
    e && e.classList.remove("active"),
      t && t.classList.remove("active"),
      document.body.classList.remove(
        "header-visible",
        "header-header-is-hidden"
      ),
      document.documentElement.style.removeProperty("--header-height");
  }
}
const hl = new pg();
const mg = ({
  el: i,
  isGsap: e = !0,
  isDebug: t,
  inScreen: r,
  onEnterBack: n,
  outScreen: s,
  threshold: o = 0,
  onToggle: a,
  onToggleOb: l,
  start: c,
  end: d,
}) => {
  let h = !1,
    u = null,
    f;
  return (
    !Op() || e
      ? ei(() => {
          u = U.create({
            trigger: i,
            start: c || `top+=${o * 100}% bottom`,
            end: d || "bottom top",
            markers: t,
            onToggle: (g) => {
              (h = g.isActive), a && a(g), h ? r && r() : s && s();
            },
            onEnterBack: n,
            invalidateOnRefresh: !0,
          });
        })
      : ei(() => {
          (f = new IntersectionObserver(
            (g) => {
              (h = g[0].isIntersecting), l && l(h), h ? r && r() : s && s();
            },
            { threshold: o }
          )),
            f.observe(i);
        }),
    {
      isInViewPointer: () => h,
      removeOb: () => {
        f && (f.unobserve(i), f.disconnect()),
          (h = !1),
          u == null || u.kill(),
          (u = null);
      },
    }
  );
};
(() => {
  function i(...r) {
    const n = r.length;
    for (let s = 0; s < n; s++) {
      const o = r[s];
      o.nodeType === 1 || o.nodeType === 11
        ? this.appendChild(o)
        : this.appendChild(document.createTextNode(String(o)));
    }
  }
  function e(...r) {
    for (; this.lastChild; ) this.removeChild(this.lastChild);
    r.length && this.append(...r);
  }
  function t(...r) {
    const n = this.parentNode;
    let s = r.length;
    if (n)
      for (s || n.removeChild(this); s--; ) {
        let o = r[s];
        typeof o != "object"
          ? (o = this.ownerDocument.createTextNode(o))
          : o.parentNode && o.parentNode.removeChild(o),
          s ? n.insertBefore(this.previousSibling, o) : n.replaceChild(o, this);
      }
  }
  typeof Element < "u" &&
    (Element.prototype.append ||
      ((Element.prototype.append = i), (DocumentFragment.prototype.append = i)),
    Element.prototype.replaceChildren ||
      ((Element.prototype.replaceChildren = e),
      (DocumentFragment.prototype.replaceChildren = e)),
    Element.prototype.replaceWith ||
      ((Element.prototype.replaceWith = t),
      (DocumentFragment.prototype.replaceWith = t)));
})();
function Nn(i, e) {
  return Object.getOwnPropertyNames(Object(i)).reduce((t, r) => {
    const n = Object.getOwnPropertyDescriptor(Object(i), r),
      s = Object.getOwnPropertyDescriptor(Object(e), r);
    return Object.defineProperty(t, r, s || n);
  }, {});
}
function zs(i) {
  return typeof i == "string";
}
function rc(i) {
  return Array.isArray(i);
}
function uo(i = {}) {
  const e = Nn(i);
  let t;
  return (
    e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
    t !== void 0 &&
      (e.types = (zs(t) || rc(t) ? String(t) : "")
        .split(",")
        .map((r) => String(r).trim())
        .filter((r) => /((line)|(word)|(char))/i.test(r))),
    (e.absolute || e.position) &&
      (e.absolute = e.absolute || /absolute/.test(i.position)),
    e
  );
}
function nc(i) {
  const e = zs(i) || rc(i) ? String(i) : "";
  return {
    none: !e,
    lines: /line/i.test(e),
    words: /word/i.test(e),
    chars: /char/i.test(e),
  };
}
function na(i) {
  return i !== null && typeof i == "object";
}
function gg(i) {
  return na(i) && /^(1|3|11)$/.test(i.nodeType);
}
function vg(i) {
  return typeof i == "number" && i > -1 && i % 1 === 0;
}
function yg(i) {
  return na(i) && vg(i.length);
}
function ti(i) {
  return rc(i)
    ? i
    : i == null
    ? []
    : yg(i)
    ? Array.prototype.slice.call(i)
    : [i];
}
function Rd(i) {
  let e = i;
  return (
    zs(i) &&
      (/^(#[a-z]\w+)$/.test(i.trim())
        ? (e = document.getElementById(i.trim().slice(1)))
        : (e = document.querySelectorAll(i))),
    ti(e).reduce((t, r) => [...t, ...ti(r).filter(gg)], [])
  );
}
const { entries: $g, keys: h3, values: f3 } = Object,
  zo = "_splittype",
  Kr = {};
let bg = 0;
function xr(i, e, t) {
  if (!na(i)) return console.warn("[data.set] owner is not an object"), null;
  const r = i[zo] || (i[zo] = ++bg),
    n = Kr[r] || (Kr[r] = {});
  return (
    t === void 0
      ? e &&
        Object.getPrototypeOf(e) === Object.prototype &&
        (Kr[r] = { ...n, ...e })
      : e !== void 0 && (n[e] = t),
    t
  );
}
function Fn(i, e) {
  const t = na(i) ? i[zo] : null,
    r = (t && Kr[t]) || {};
  return e === void 0 ? r : r[e];
}
function Qh(i) {
  const e = i && i[zo];
  e && (delete i[e], delete Kr[e]);
}
function _g() {
  $g(Kr).forEach(([i, { isRoot: e, isSplit: t }]) => {
    (!e || !t) && ((Kr[i] = null), delete Kr[i]);
  });
}
function wg(i, e = " ") {
  return (i ? String(i) : "").trim().replace(/\s+/g, " ").split(e);
}
const ic = "\\ud800-\\udfff",
  Jh = "\\u0300-\\u036f\\ufe20-\\ufe23",
  ef = "\\u20d0-\\u20f0",
  tf = "\\ufe0e\\ufe0f",
  Sg = `[${ic}]`,
  fl = `[${Jh}${ef}]`,
  pl = "\\ud83c[\\udffb-\\udfff]",
  Eg = `(?:${fl}|${pl})`,
  rf = `[^${ic}]`,
  nf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  sf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  of = "\\u200d",
  af = `${Eg}?`,
  lf = `[${tf}]?`,
  Tg = "(?:" + of + "(?:" + [rf, nf, sf].join("|") + ")" + lf + af + ")*",
  Og = lf + af + Tg,
  Mg = `(?:${[`${rf}${fl}?`, fl, nf, sf, Sg].join("|")}
)`,
  xg = RegExp(`${pl}(?=${pl})|${Mg}${Og}`, "g"),
  Dg = [of, ic, Jh, ef, tf],
  Pg = RegExp(`[${Dg.join("")}]`);
function kg(i) {
  return i.split("");
}
function cf(i) {
  return Pg.test(i);
}
function Cg(i) {
  return i.match(xg) || [];
}
function Ag(i) {
  return cf(i) ? Cg(i) : kg(i);
}
function Lg(i) {
  return i == null ? "" : String(i);
}
function Ig(i, e = "") {
  return (i = Lg(i)), i && zs(i) && !e && cf(i) ? Ag(i) : i.split(e);
}
function ml(i, e) {
  const t = document.createElement(i);
  return (
    e &&
      Object.keys(e).forEach((r) => {
        const n = e[r],
          s = zs(n) ? n.trim() : n;
        s === null ||
          s === "" ||
          (r === "children" ? t.append(...ti(s)) : t.setAttribute(r, s));
      }),
    t
  );
}
var sc = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div",
};
function Rg(i, e) {
  e = Nn(sc, e);
  const t = nc(e.types),
    r = e.tagName,
    n = i.nodeValue,
    s = document.createDocumentFragment();
  let o = [],
    a = [];
  return (
    /^\s/.test(n) && s.append(" "),
    (o = wg(n).reduce((l, c, d, h) => {
      let u, f;
      return (
        t.chars &&
          (f = Ig(c).map((p) => {
            const m = ml(r, {
              class: `${e.splitClass} ${e.charClass}`,
              style: "display: inline-block;",
              children: p,
            });
            return xr(m, "isChar", !0), (a = [...a, m]), m;
          })),
        t.words || t.lines
          ? ((u = ml(r, {
              class: `${e.wordClass} ${e.splitClass}`,
              style: `display: inline-block; ${
                t.words && e.absolute ? "position: relative;" : ""
              }`,
              children: t.chars ? f : c,
            })),
            xr(u, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
            s.appendChild(u))
          : f.forEach((p) => {
              s.appendChild(p);
            }),
        d < h.length - 1 && s.append(" "),
        t.words ? l.concat(u) : l
      );
    }, [])),
    /\s$/.test(n) && s.append(" "),
    i.replaceWith(s),
    { words: o, chars: a }
  );
}
function df(i, e) {
  const t = i.nodeType,
    r = { words: [], chars: [] };
  if (!/(1|3|11)/.test(t)) return r;
  if (t === 3 && /\S/.test(i.nodeValue)) return Rg(i, e);
  const n = ti(i.childNodes);
  if (n.length && (xr(i, "isSplit", !0), !Fn(i).isRoot)) {
    (i.style.display = "inline-block"), (i.style.position = "relative");
    const s = i.nextSibling,
      o = i.previousSibling,
      a = i.textContent || "",
      l = s ? s.textContent : " ",
      c = o ? o.textContent : " ";
    xr(i, {
      isWordEnd: /\s$/.test(a) || /^\s/.test(l),
      isWordStart: /^\s/.test(a) || /\s$/.test(c),
    });
  }
  return n.reduce((s, o) => {
    const { words: a, chars: l } = df(o, e);
    return { words: [...s.words, ...a], chars: [...s.chars, ...l] };
  }, r);
}
function Ng(i, e, t, r) {
  if (!t.absolute) return { top: e ? i.offsetTop : null };
  const n = i.offsetParent,
    [s, o] = r;
  let a = 0,
    l = 0;
  if (n && n !== document.body) {
    const m = n.getBoundingClientRect();
    (a = m.x + s), (l = m.y + o);
  }
  const { width: c, height: d, x: h, y: u } = i.getBoundingClientRect(),
    f = u + o - l,
    p = h + s - a;
  return { width: c, height: d, top: f, left: p };
}
function uf(i) {
  Fn(i).isWord
    ? (Qh(i), i.replaceWith(...i.childNodes))
    : ti(i.children).forEach((e) => uf(e));
}
const Fg = () => document.createDocumentFragment();
function Hg(i, e, t) {
  const r = nc(e.types),
    n = e.tagName,
    s = i.getElementsByTagName("*"),
    o = [];
  let a = [],
    l = null,
    c,
    d,
    h,
    u = [];
  const f = i.parentElement,
    p = i.nextElementSibling,
    m = Fg(),
    g = window.getComputedStyle(i),
    y = g.textAlign,
    b = parseFloat(g.fontSize) * 0.2;
  return (
    e.absolute &&
      ((h = { left: i.offsetLeft, top: i.offsetTop, width: i.offsetWidth }),
      (d = i.offsetWidth),
      (c = i.offsetHeight),
      xr(i, { cssWidth: i.style.width, cssHeight: i.style.height })),
    ti(s).forEach(($) => {
      const E = $.parentElement === i,
        { width: T, height: S, top: O, left: D } = Ng($, E, e, t);
      /^br$/i.test($.nodeName) ||
        (r.lines &&
          E &&
          ((l === null || O - l >= b) && ((l = O), o.push((a = []))),
          a.push($)),
        e.absolute && xr($, { top: O, left: D, width: T, height: S }));
    }),
    f && f.removeChild(i),
    r.lines &&
      ((u = o.map(($) => {
        const E = ml(n, {
          class: `${e.splitClass} ${e.lineClass}`,
          style: `display: block; text-align: ${y}; width: 100%;`,
        });
        xr(E, "isLine", !0);
        const T = { height: 0, top: 1e4 };
        return (
          m.appendChild(E),
          $.forEach((S, O, D) => {
            const { isWordEnd: x, top: L, height: w } = Fn(S),
              P = D[O + 1];
            (T.height = Math.max(T.height, w)),
              (T.top = Math.min(T.top, L)),
              E.appendChild(S),
              x && Fn(P).isWordStart && E.append(" ");
          }),
          e.absolute && xr(E, { height: T.height, top: T.top }),
          E
        );
      })),
      r.words || uf(m),
      i.replaceChildren(m)),
    e.absolute &&
      ((i.style.width = `${i.style.width || d}px`),
      (i.style.height = `${c}px`),
      ti(s).forEach(($) => {
        const { isLine: E, top: T, left: S, width: O, height: D } = Fn($),
          x = Fn($.parentElement),
          L = !E && x.isLine;
        ($.style.top = `${L ? T - x.top : T}px`),
          ($.style.left = E ? `${h.left}px` : `${S - (L ? h.left : 0)}px`),
          ($.style.height = `${D}px`),
          ($.style.width = E ? `${h.width}px` : `${O}px`),
          ($.style.position = "absolute");
      })),
    f && (p ? f.insertBefore(i, p) : f.appendChild(i)),
    u
  );
}
let di = Nn(sc, {});
class Vo {
  static get data() {
    return Kr;
  }
  static get defaults() {
    return di;
  }
  static set defaults(e) {
    di = Nn(di, uo(e));
  }
  static setDefaults(e) {
    return (di = Nn(di, uo(e))), sc;
  }
  static revert(e) {
    Rd(e).forEach((t) => {
      const { isSplit: r, html: n, cssWidth: s, cssHeight: o } = Fn(t);
      r &&
        ((t.innerHTML = n),
        (t.style.width = s || ""),
        (t.style.height = o || ""),
        Qh(t));
    });
  }
  static create(e, t) {
    return new Vo(e, t);
  }
  constructor(e, t) {
    (this.isSplit = !1),
      (this.settings = Nn(di, uo(t))),
      (this.elements = Rd(e)),
      this.split();
  }
  split(e) {
    this.revert(),
      this.elements.forEach((n) => {
        xr(n, "html", n.innerHTML);
      }),
      (this.lines = []),
      (this.words = []),
      (this.chars = []);
    const t = [window.pageXOffset, window.pageYOffset];
    e !== void 0 && (this.settings = Nn(this.settings, uo(e)));
    const r = nc(this.settings.types);
    r.none ||
      (this.elements.forEach((n) => {
        xr(n, "isRoot", !0);
        const { words: s, chars: o } = df(n, this.settings);
        (this.words = [...this.words, ...s]),
          (this.chars = [...this.chars, ...o]);
      }),
      this.elements.forEach((n) => {
        if (r.lines || this.settings.absolute) {
          const s = Hg(n, this.settings, t);
          this.lines = [...this.lines, ...s];
        }
      }),
      (this.isSplit = !0),
      window.scrollTo(t[0], t[1]),
      _g());
  }
  revert() {
    this.isSplit &&
      ((this.lines = null),
      (this.words = null),
      (this.chars = null),
      (this.isSplit = !1)),
      Vo.revert(this.elements);
  }
}
class qg {
  constructor() {
    _(this, "DOM");
    _(this, "isReady");
    _(this, "inited");
    _(this, "windowIsBlur");
    _(this, "isSimpleLoader");
    _(this, "minProgress");
    _(this, "processing");
    _(this, "registerCount");
    _(this, "lowNet");
    _(this, "strokeDashoffset");
    _(this, "obServerAPI");
    _(this, "idAnimationLoop");
    _(this, "runAnimation");
    _(this, "delayPageEnter");
    _(this, "delaLoadingOut");
    (this.registerLoader = this.registerLoader.bind(this)),
      (this.unRegisterLoader = this.unRegisterLoader.bind(this)),
      this.init();
  }
  init() {
    (this.DOM = { main: document.querySelector(".page-loading") }),
      document.body.classList.add("js-ready", "is-loading"),
      X.emit(mp),
      (this.inited = !!this.DOM.main),
      (this.isReady = !1),
      (this.windowIsBlur = !1),
      (this.isSimpleLoader = !1),
      (this.minProgress = 98),
      (this.delayPageEnter = 0.4),
      (this.delaLoadingOut = 0.4),
      (this.processing = { delta: 0, percentStuck: 0, runWidth: 0 }),
      (this.registerCount = 0),
      (this.lowNet = 0),
      (this.strokeDashoffset = 829),
      (this.hideLoading = this.hideLoading.bind(this)),
      Mh(
        () => (
          X.on(_o, this.registerLoader),
          X.on(wo, this.unRegisterLoader),
          window.addEventListener("DOMContentLoaded", this.hideLoading),
          () => {
            X.off(_o, this.registerLoader),
              X.off(wo, this.unRegisterLoader),
              window.removeEventListener("DOMContentLoaded", this.hideLoading);
          }
        )
      );
  }
  simpleLoaded() {
    var e;
    (e = this.DOM.main) == null || e.classList.add("is-simple"),
      (this.isSimpleLoader = !0),
      this.pageLoaded();
  }
  simple() {
    (this.obServerAPI = mg({ el: document.body })),
      (this.isSimpleLoader = !0),
      (this.isReady = !0),
      X.emit(yp),
      document.body.classList.add("is-ready");
  }
  hideLoading() {
    X.emit(wh);
  }
  hide() {
    Ti(() => {
      this.DOM.main && (this.DOM.main.style.visibility = "hidden");
    });
  }
  async pageLoaded() {
    var e, t, r;
    if (
      (this.idAnimationLoop && cancelAnimationFrame(this.idAnimationLoop),
      document.body.classList.remove("is-loading"),
      document.body.classList.remove("is-simple"),
      this.isSimpleLoader)
    ) {
      if (!this.DOM.main) return;
      if (
        ((t =
          (e = document.body) == null
            ? void 0
            : e.querySelector("[data-page]")) == null
          ? void 0
          : t.getAttribute("data-page")) === "home"
      ) {
        const s = C.timeline(),
          o = this.DOM.main.querySelector(".page-loading-content-first"),
          a = new Vo(o, { types: "words, lines" }),
          l =
            (r = this.DOM.main.querySelector(".page-loading-content-logo")) ==
            null
              ? void 0
              : r.querySelector("img");
        o.classList.add("text__mask"),
          a.lines &&
            a.lines.forEach((m) => {
              const g = document.createElement("div");
              g.appendChild(m), g.classList.add("line__mask"), o.appendChild(g);
            }),
          C.set(".page-loading-content-first", {
            opacity: 1,
            onComplete: () => {
              var m;
              (m = a.lines) != null &&
                m.length &&
                C.set(a.lines, { y: "110%" }),
                (o.style.transform = "translateY(0%)");
            },
          });
        const c = 0.6,
          d = 0.6,
          h = 0.06,
          u = 0.5,
          f = 0.6,
          p = "-=0.3";
        s.to(a.lines, { y: "0%", duration: c, ease: "power3.out", stagger: h })
          .to(a.lines, { y: "-110%", duration: d, ease: "power3.inOut" })
          .to(l, { y: "0%", duration: u, ease: "power3.out" }, p)
          .to(l, {
            y: "-110%",
            overwrite: "auto",
            opacity: 0,
            duration: f,
            ease: "power3.inOut",
          })
          .to(
            this.DOM.main,
            {
              opacity: 0,
              duration: this.delayPageEnter,
              ease: "power3.inOut",
              onStart: () => {
                document.body.classList.remove("is-loading");
              },
              onComplete: () => {
                setTimeout(() => this.hide(), 100), X.emit(Ut);
              },
            },
            "-=0.1"
          );
      } else
        C.to(this.DOM.main, {
          opacity: 0,
          duration: this.delayPageEnter,
          ease: "power3.inOut",
          onStart: () => {
            document.body.classList.remove("is-loading");
          },
          onComplete: () => {
            X.emit(Ut), setTimeout(() => this.hide(), 100);
          },
        });
    } else
      setTimeout(() => {
        X.emit(Ut);
      }, 100);
  }
  registerLoader() {
    this.registerCount++, X.emit(_o);
  }
  unRegisterLoader() {
    this.registerCount--, X.emit(wo);
  }
}
const Go = new qg();
function Nd(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(
        i,
        typeof (n = (function (s, o) {
          if (typeof s != "object" || s === null) return s;
          var a = s[Symbol.toPrimitive];
          if (a !== void 0) {
            var l = a.call(s, "string");
            if (typeof l != "object") return l;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(s);
        })(r.key)) == "symbol"
          ? n
          : String(n),
        r
      );
  }
  var n;
}
function oc(i, e, t) {
  return (
    e && Nd(i.prototype, e),
    t && Nd(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function Dr() {
  return (
    (Dr = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
          }
          return i;
        }),
    Dr.apply(this, arguments)
  );
}
function ia(i, e) {
  (i.prototype = Object.create(e.prototype)),
    (i.prototype.constructor = i),
    ks(i, e);
}
function gl(i) {
  return (
    (gl = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    gl(i)
  );
}
function ks(i, e) {
  return (
    (ks = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, r) {
          return (t.__proto__ = r), t;
        }),
    ks(i, e)
  );
}
function Bg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function vl(i, e, t) {
  return (
    (vl = Bg()
      ? Reflect.construct.bind()
      : function (r, n, s) {
          var o = [null];
          o.push.apply(o, n);
          var a = new (Function.bind.apply(r, o))();
          return s && ks(a, s.prototype), a;
        }),
    vl.apply(null, arguments)
  );
}
function yl(i) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (yl = function (t) {
      if (
        t === null ||
        Function.toString.call(t).indexOf("[native code]") === -1
      )
        return t;
      if (typeof t != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (e !== void 0) {
        if (e.has(t)) return e.get(t);
        e.set(t, r);
      }
      function r() {
        return vl(t, arguments, gl(this).constructor);
      }
      return (
        (r.prototype = Object.create(t.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ks(r, t)
      );
    }),
    yl(i)
  );
}
function zg(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
var cn,
  Vg = function () {
    (this.before = void 0),
      (this.beforeLeave = void 0),
      (this.leave = void 0),
      (this.afterLeave = void 0),
      (this.beforeEnter = void 0),
      (this.enter = void 0),
      (this.afterEnter = void 0),
      (this.after = void 0);
  };
(function (i) {
  (i[(i.off = 0)] = "off"),
    (i[(i.error = 1)] = "error"),
    (i[(i.warning = 2)] = "warning"),
    (i[(i.info = 3)] = "info"),
    (i[(i.debug = 4)] = "debug");
})(cn || (cn = {}));
var Fd = cn.off,
  Hn = (function () {
    function i(t) {
      (this.t = void 0), (this.t = t);
    }
    (i.getLevel = function () {
      return Fd;
    }),
      (i.setLevel = function (t) {
        return (Fd = cn[t]);
      });
    var e = i.prototype;
    return (
      (e.error = function () {
        this.i(console.error, cn.error, [].slice.call(arguments));
      }),
      (e.warn = function () {
        this.i(console.warn, cn.warning, [].slice.call(arguments));
      }),
      (e.info = function () {
        this.i(console.info, cn.info, [].slice.call(arguments));
      }),
      (e.debug = function () {
        this.i(console.log, cn.debug, [].slice.call(arguments));
      }),
      (e.i = function (t, r, n) {
        r <= i.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(n));
      }),
      i
    );
  })();
function ui(i) {
  return i.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Hd(i) {
  return i && i.sensitive ? "" : "i";
}
var Cr = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper",
  },
  qn = new ((function () {
    function i() {
      (this.o = Cr),
        (this.u = void 0),
        (this.h = { after: null, before: null, parent: null });
    }
    var e = i.prototype;
    return (
      (e.toString = function (t) {
        return t.outerHTML;
      }),
      (e.toDocument = function (t) {
        return (
          this.u || (this.u = new DOMParser()),
          this.u.parseFromString(t, "text/html")
        );
      }),
      (e.toElement = function (t) {
        var r = document.createElement("div");
        return (r.innerHTML = t), r;
      }),
      (e.getHtml = function (t) {
        return t === void 0 && (t = document), this.toString(t.documentElement);
      }),
      (e.getWrapper = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        );
      }),
      (e.getContainer = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        );
      }),
      (e.removeContainer = function (t) {
        document.body.contains(t) && (this.v(t), t.parentNode.removeChild(t));
      }),
      (e.addContainer = function (t, r) {
        var n = this.getContainer() || this.h.before;
        n
          ? this.l(t, n)
          : this.h.after
          ? this.h.after.parentNode.insertBefore(t, this.h.after)
          : this.h.parent
          ? this.h.parent.appendChild(t)
          : r.appendChild(t);
      }),
      (e.getSibling = function () {
        return this.h;
      }),
      (e.getNamespace = function (t) {
        t === void 0 && (t = document);
        var r = t.querySelector(
          "[" + this.o.prefix + "-" + this.o.namespace + "]"
        );
        return r
          ? r.getAttribute(this.o.prefix + "-" + this.o.namespace)
          : null;
      }),
      (e.getHref = function (t) {
        if (t.tagName && t.tagName.toLowerCase() === "a") {
          if (typeof t.href == "string") return t.href;
          var r = t.getAttribute("href") || t.getAttribute("xlink:href");
          if (r) return this.resolveUrl(r.baseVal || r);
        }
        return null;
      }),
      (e.resolveUrl = function () {
        var t = [].slice.call(arguments).length;
        if (t === 0)
          throw new Error(
            "resolveUrl requires at least one argument; got none."
          );
        var r = document.createElement("base");
        if (((r.href = arguments[0]), t === 1)) return r.href;
        var n = document.getElementsByTagName("head")[0];
        n.insertBefore(r, n.firstChild);
        for (var s, o = document.createElement("a"), a = 1; a < t; a++)
          (o.href = arguments[a]), (r.href = s = o.href);
        return n.removeChild(r), s;
      }),
      (e.l = function (t, r) {
        r.parentNode.insertBefore(t, r.nextSibling);
      }),
      (e.v = function (t) {
        return (
          (this.h = {
            after: t.nextElementSibling,
            before: t.previousElementSibling,
            parent: t.parentElement,
          }),
          this.h
        );
      }),
      i
    );
  })())(),
  Gg = (function () {
    function i() {
      (this.p = void 0), (this.m = []), (this.P = -1);
    }
    var e = i.prototype;
    return (
      (e.init = function (t, r) {
        this.p = "barba";
        var n = {
          data: {},
          ns: r,
          scroll: { x: window.scrollX, y: window.scrollY },
          url: t,
        };
        (this.P = 0), this.m.push(n);
        var s = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history && window.history.replaceState(s, "", t);
      }),
      (e.change = function (t, r, n) {
        if (n && n.state) {
          var s = n.state,
            o = s.index;
          (r = this.g(this.P - o)), this.replace(s.states), (this.P = o);
        } else this.add(t, r);
        return r;
      }),
      (e.add = function (t, r, n, s) {
        var o = n ?? this.R(r),
          a = {
            data: s ?? {},
            ns: "tmp",
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
        switch (o) {
          case "push":
            (this.P = this.size), this.m.push(a);
            break;
          case "replace":
            this.set(this.P, a);
        }
        var l = { from: this.p, index: this.P, states: [].concat(this.m) };
        switch (o) {
          case "push":
            window.history && window.history.pushState(l, "", t);
            break;
          case "replace":
            window.history && window.history.replaceState(l, "", t);
        }
      }),
      (e.store = function (t, r) {
        var n = r || this.P,
          s = this.get(n);
        (s.data = Dr({}, s.data, t)), this.set(n, s);
        var o = { from: this.p, index: this.P, states: [].concat(this.m) };
        window.history.replaceState(o, "");
      }),
      (e.update = function (t, r) {
        var n = r || this.P,
          s = Dr({}, this.get(n), t);
        this.set(n, s);
      }),
      (e.remove = function (t) {
        t ? this.m.splice(t, 1) : this.m.pop(), this.P--;
      }),
      (e.clear = function () {
        (this.m = []), (this.P = -1);
      }),
      (e.replace = function (t) {
        this.m = t;
      }),
      (e.get = function (t) {
        return this.m[t];
      }),
      (e.set = function (t, r) {
        return (this.m[t] = r);
      }),
      (e.R = function (t) {
        var r = "push",
          n = t,
          s = Cr.prefix + "-" + Cr.history;
        return (
          n.hasAttribute && n.hasAttribute(s) && (r = n.getAttribute(s)), r
        );
      }),
      (e.g = function (t) {
        return Math.abs(t) > 1
          ? t > 0
            ? "forward"
            : "back"
          : t === 0
          ? "popstate"
          : t > 0
          ? "back"
          : "forward";
      }),
      oc(i, [
        {
          key: "current",
          get: function () {
            return this.m[this.P];
          },
        },
        {
          key: "previous",
          get: function () {
            return this.P < 1 ? null : this.m[this.P - 1];
          },
        },
        {
          key: "size",
          get: function () {
            return this.m.length;
          },
        },
      ]),
      i
    );
  })(),
  hf = new Gg(),
  Uo = function (i, e) {
    try {
      var t = (function () {
        if (!e.next.html)
          return Promise.resolve(i).then(function (r) {
            var n = e.next;
            if (r) {
              var s = qn.toElement(r.html);
              (n.namespace = qn.getNamespace(s)),
                (n.container = qn.getContainer(s)),
                (n.url = r.url),
                (n.html = r.html),
                hf.update({ ns: n.namespace });
              var o = qn.toDocument(r.html);
              document.title = o.title;
            }
          });
      })();
      return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
    } catch (r) {
      return Promise.reject(r);
    }
  },
  ff = function i(e, t, r) {
    return e instanceof RegExp
      ? (function (n, s) {
          if (!s) return n;
          for (
            var o = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, l = o.exec(n.source);
            l;

          )
            s.push({
              name: l[1] || a++,
              prefix: "",
              suffix: "",
              modifier: "",
              pattern: "",
            }),
              (l = o.exec(n.source));
          return n;
        })(e, t)
      : Array.isArray(e)
      ? (function (n, s, o) {
          var a = n.map(function (l) {
            return i(l, s, o).source;
          });
          return new RegExp("(?:".concat(a.join("|"), ")"), Hd(o));
        })(e, t, r)
      : (function (n, s, o) {
          return (function (a, l, c) {
            c === void 0 && (c = {});
            for (
              var d = c.strict,
                h = d !== void 0 && d,
                u = c.start,
                f = u === void 0 || u,
                p = c.end,
                m = p === void 0 || p,
                g = c.encode,
                y =
                  g === void 0
                    ? function (I) {
                        return I;
                      }
                    : g,
                v = c.delimiter,
                b = v === void 0 ? "/#?" : v,
                $ = c.endsWith,
                E = "[".concat(ui($ === void 0 ? "" : $), "]|$"),
                T = "[".concat(ui(b), "]"),
                S = f ? "^" : "",
                O = 0,
                D = a;
              O < D.length;
              O++
            ) {
              var x = D[O];
              if (typeof x == "string") S += ui(y(x));
              else {
                var L = ui(y(x.prefix)),
                  w = ui(y(x.suffix));
                if (x.pattern)
                  if ((l && l.push(x), L || w))
                    if (x.modifier === "+" || x.modifier === "*") {
                      var P = x.modifier === "*" ? "?" : "";
                      S += "(?:"
                        .concat(L, "((?:")
                        .concat(x.pattern, ")(?:")
                        .concat(w)
                        .concat(L, "(?:")
                        .concat(x.pattern, "))*)")
                        .concat(w, ")")
                        .concat(P);
                    } else
                      S += "(?:"
                        .concat(L, "(")
                        .concat(x.pattern, ")")
                        .concat(w, ")")
                        .concat(x.modifier);
                  else
                    S +=
                      x.modifier === "+" || x.modifier === "*"
                        ? "((?:".concat(x.pattern, ")").concat(x.modifier, ")")
                        : "(".concat(x.pattern, ")").concat(x.modifier);
                else S += "(?:".concat(L).concat(w, ")").concat(x.modifier);
              }
            }
            if (m)
              h || (S += "".concat(T, "?")),
                (S += c.endsWith ? "(?=".concat(E, ")") : "$");
            else {
              var k = a[a.length - 1],
                R =
                  typeof k == "string"
                    ? T.indexOf(k[k.length - 1]) > -1
                    : k === void 0;
              h || (S += "(?:".concat(T, "(?=").concat(E, "))?")),
                R || (S += "(?=".concat(T, "|").concat(E, ")"));
            }
            return new RegExp(S, Hd(c));
          })(
            (function (a, l) {
              l === void 0 && (l = {});
              for (
                var c = (function (w) {
                    for (var P = [], k = 0; k < w.length; ) {
                      var R = w[k];
                      if (R !== "*" && R !== "+" && R !== "?")
                        if (R !== "\\")
                          if (R !== "{")
                            if (R !== "}")
                              if (R !== ":")
                                if (R !== "(")
                                  P.push({
                                    type: "CHAR",
                                    index: k,
                                    value: w[k++],
                                  });
                                else {
                                  var I = 1,
                                    N = "";
                                  if (w[(F = k + 1)] === "?")
                                    throw new TypeError(
                                      'Pattern cannot start with "?" at '.concat(
                                        F
                                      )
                                    );
                                  for (; F < w.length; )
                                    if (w[F] !== "\\") {
                                      if (w[F] === ")") {
                                        if (--I == 0) {
                                          F++;
                                          break;
                                        }
                                      } else if (
                                        w[F] === "(" &&
                                        (I++, w[F + 1] !== "?")
                                      )
                                        throw new TypeError(
                                          "Capturing groups are not allowed at ".concat(
                                            F
                                          )
                                        );
                                      N += w[F++];
                                    } else N += w[F++] + w[F++];
                                  if (I)
                                    throw new TypeError(
                                      "Unbalanced pattern at ".concat(k)
                                    );
                                  if (!N)
                                    throw new TypeError(
                                      "Missing pattern at ".concat(k)
                                    );
                                  P.push({
                                    type: "PATTERN",
                                    index: k,
                                    value: N,
                                  }),
                                    (k = F);
                                }
                              else {
                                for (var q = "", F = k + 1; F < w.length; ) {
                                  var M = w.charCodeAt(F);
                                  if (
                                    !(
                                      (M >= 48 && M <= 57) ||
                                      (M >= 65 && M <= 90) ||
                                      (M >= 97 && M <= 122) ||
                                      M === 95
                                    )
                                  )
                                    break;
                                  q += w[F++];
                                }
                                if (!q)
                                  throw new TypeError(
                                    "Missing parameter name at ".concat(k)
                                  );
                                P.push({ type: "NAME", index: k, value: q }),
                                  (k = F);
                              }
                            else
                              P.push({
                                type: "CLOSE",
                                index: k,
                                value: w[k++],
                              });
                          else
                            P.push({ type: "OPEN", index: k, value: w[k++] });
                        else
                          P.push({
                            type: "ESCAPED_CHAR",
                            index: k++,
                            value: w[k++],
                          });
                      else
                        P.push({ type: "MODIFIER", index: k, value: w[k++] });
                    }
                    return P.push({ type: "END", index: k, value: "" }), P;
                  })(a),
                  d = l.prefixes,
                  h = d === void 0 ? "./" : d,
                  u = "[^".concat(ui(l.delimiter || "/#?"), "]+?"),
                  f = [],
                  p = 0,
                  m = 0,
                  g = "",
                  y = function (w) {
                    if (m < c.length && c[m].type === w) return c[m++].value;
                  },
                  v = function (w) {
                    var P = y(w);
                    if (P !== void 0) return P;
                    var k = c[m],
                      R = k.index;
                    throw new TypeError(
                      "Unexpected "
                        .concat(k.type, " at ")
                        .concat(R, ", expected ")
                        .concat(w)
                    );
                  },
                  b = function () {
                    for (var w, P = ""; (w = y("CHAR") || y("ESCAPED_CHAR")); )
                      P += w;
                    return P;
                  };
                m < c.length;

              ) {
                var $ = y("CHAR"),
                  E = y("NAME"),
                  T = y("PATTERN");
                if (E || T)
                  h.indexOf((O = $ || "")) === -1 && ((g += O), (O = "")),
                    g && (f.push(g), (g = "")),
                    f.push({
                      name: E || p++,
                      prefix: O,
                      suffix: "",
                      pattern: T || u,
                      modifier: y("MODIFIER") || "",
                    });
                else {
                  var S = $ || y("ESCAPED_CHAR");
                  if (S) g += S;
                  else if ((g && (f.push(g), (g = "")), y("OPEN"))) {
                    var O = b(),
                      D = y("NAME") || "",
                      x = y("PATTERN") || "",
                      L = b();
                    v("CLOSE"),
                      f.push({
                        name: D || (x ? p++ : ""),
                        pattern: D && !x ? u : x,
                        prefix: O,
                        suffix: L,
                        modifier: y("MODIFIER") || "",
                      });
                  } else v("END");
                }
              }
              return f;
            })(n, o),
            s,
            o
          );
        })(e, t, r);
  },
  Ug = {
    __proto__: null,
    update: Uo,
    nextTick: function () {
      return new Promise(function (i) {
        window.requestAnimationFrame(i);
      });
    },
    pathToRegexp: ff,
  },
  pf = function () {
    return window.location.origin;
  },
  Cs = function (i) {
    return i === void 0 && (i = window.location.href), dn(i).port;
  },
  dn = function (i) {
    var e,
      t = i.match(/:\d+/);
    if (t === null) /^http/.test(i) && (e = 80), /^https/.test(i) && (e = 443);
    else {
      var r = t[0].substring(1);
      e = parseInt(r, 10);
    }
    var n,
      s = i.replace(pf(), ""),
      o = {},
      a = s.indexOf("#");
    a >= 0 && ((n = s.slice(a + 1)), (s = s.slice(0, a)));
    var l = s.indexOf("?");
    return (
      l >= 0 && ((o = mf(s.slice(l + 1))), (s = s.slice(0, l))),
      { hash: n, path: s, port: e, query: o }
    );
  },
  mf = function (i) {
    return i.split("&").reduce(function (e, t) {
      var r = t.split("=");
      return (e[r[0]] = r[1]), e;
    }, {});
  },
  $l = function (i) {
    return (
      i === void 0 && (i = window.location.href),
      i.replace(/(\/#.*|\/|#.*)$/, "")
    );
  },
  Wg = {
    __proto__: null,
    getHref: function () {
      return window.location.href;
    },
    getAbsoluteHref: function (i, e) {
      return e === void 0 && (e = document.baseURI), new URL(i, e).href;
    },
    getOrigin: pf,
    getPort: Cs,
    getPath: function (i) {
      return i === void 0 && (i = window.location.href), dn(i).path;
    },
    getQuery: function (i, e) {
      return (
        e === void 0 && (e = !1), e ? JSON.stringify(dn(i).query) : dn(i).query
      );
    },
    getHash: function (i) {
      return dn(i).hash;
    },
    parse: dn,
    parseQuery: mf,
    clean: $l,
  };
function jg(i, e, t, r, n) {
  return (
    e === void 0 && (e = 2e3),
    new Promise(function (s, o) {
      var a = new XMLHttpRequest();
      (a.onreadystatechange = function () {
        if (a.readyState === XMLHttpRequest.DONE) {
          if (a.status === 200) {
            var l =
              a.responseURL !== "" && a.responseURL !== i ? a.responseURL : i;
            s({ html: a.responseText, url: Dr({ href: l }, dn(l)) }),
              r.update(i, { status: "fulfilled", target: l });
          } else if (a.status) {
            var c = { status: a.status, statusText: a.statusText };
            t(i, c), o(c), r.update(i, { status: "rejected" });
          }
        }
      }),
        (a.ontimeout = function () {
          var l = new Error("Timeout error [" + e + "]");
          t(i, l), o(l), r.update(i, { status: "rejected" });
        }),
        (a.onerror = function () {
          var l = new Error("Fetch error");
          t(i, l), o(l), r.update(i, { status: "rejected" });
        }),
        a.open("GET", i),
        (a.timeout = e),
        a.setRequestHeader(
          "Accept",
          "text/html,application/xhtml+xml,application/xml"
        ),
        a.setRequestHeader("x-barba", "yes"),
        n.all().forEach(function (l, c) {
          a.setRequestHeader(c, l);
        }),
        a.send();
    })
  );
}
function Yg(i) {
  return (
    !!i &&
    (typeof i == "object" || typeof i == "function") &&
    typeof i.then == "function"
  );
}
function yi(i, e) {
  return (
    e === void 0 && (e = {}),
    function () {
      var t = arguments,
        r = !1,
        n = new Promise(function (s, o) {
          e.async = function () {
            return (
              (r = !0),
              function (l, c) {
                l ? o(l) : s(c);
              }
            );
          };
          var a = i.apply(e, [].slice.call(t));
          r || (Yg(a) ? a.then(s, o) : s(a));
        });
      return n;
    }
  );
}
var ln = new ((function (i) {
    function e() {
      var r;
      return (
        ((r = i.call(this) || this).logger = new Hn("@barba/core")),
        (r.all = [
          "ready",
          "page",
          "reset",
          "currentAdded",
          "currentRemoved",
          "nextAdded",
          "nextRemoved",
          "beforeOnce",
          "once",
          "afterOnce",
          "before",
          "beforeLeave",
          "leave",
          "afterLeave",
          "beforeEnter",
          "enter",
          "afterEnter",
          "after",
        ]),
        (r.registered = new Map()),
        r.init(),
        r
      );
    }
    ia(e, i);
    var t = e.prototype;
    return (
      (t.init = function () {
        var r = this;
        this.registered.clear(),
          this.all.forEach(function (n) {
            r[n] ||
              (r[n] = function (s, o) {
                r.registered.has(n) || r.registered.set(n, new Set()),
                  r.registered.get(n).add({ ctx: o || {}, fn: s });
              });
          });
      }),
      (t.do = function (r) {
        var n = arguments,
          s = this;
        if (this.registered.has(r)) {
          var o = Promise.resolve();
          return (
            this.registered.get(r).forEach(function (a) {
              o = o.then(function () {
                return yi(a.fn, a.ctx).apply(void 0, [].slice.call(n, 1));
              });
            }),
            o.catch(function (a) {
              s.logger.debug("Hook error [" + r + "]"), s.logger.error(a);
            })
          );
        }
        return Promise.resolve();
      }),
      (t.clear = function () {
        var r = this;
        this.all.forEach(function (n) {
          delete r[n];
        }),
          this.init();
      }),
      (t.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var r = [];
        this.registered.forEach(function (n, s) {
          return r.push(s);
        }),
          this.logger.info("Registered hooks: " + r.join(","));
      }),
      e
    );
  })(Vg))(),
  gf = (function () {
    function i(e) {
      if (((this.k = void 0), (this.O = []), typeof e == "boolean")) this.k = e;
      else {
        var t = Array.isArray(e) ? e : [e];
        this.O = t.map(function (r) {
          return ff(r);
        });
      }
    }
    return (
      (i.prototype.checkHref = function (e) {
        if (typeof this.k == "boolean") return this.k;
        var t = dn(e).path;
        return this.O.some(function (r) {
          return r.exec(t) !== null;
        });
      }),
      i
    );
  })(),
  Xg = (function (i) {
    function e(r) {
      var n;
      return ((n = i.call(this, r) || this).T = new Map()), n;
    }
    ia(e, i);
    var t = e.prototype;
    return (
      (t.set = function (r, n, s, o, a) {
        return (
          this.T.set(r, { action: s, request: n, status: o, target: a ?? r }),
          { action: s, request: n, status: o, target: a }
        );
      }),
      (t.get = function (r) {
        return this.T.get(r);
      }),
      (t.getRequest = function (r) {
        return this.T.get(r).request;
      }),
      (t.getAction = function (r) {
        return this.T.get(r).action;
      }),
      (t.getStatus = function (r) {
        return this.T.get(r).status;
      }),
      (t.getTarget = function (r) {
        return this.T.get(r).target;
      }),
      (t.has = function (r) {
        return !this.checkHref(r) && this.T.has(r);
      }),
      (t.delete = function (r) {
        return this.T.delete(r);
      }),
      (t.update = function (r, n) {
        var s = Dr({}, this.T.get(r), n);
        return this.T.set(r, s), s;
      }),
      e
    );
  })(gf),
  Kg = (function () {
    function i() {
      this.A = new Map();
    }
    var e = i.prototype;
    return (
      (e.set = function (t, r) {
        return this.A.set(t, r), { name: r };
      }),
      (e.get = function (t) {
        return this.A.get(t);
      }),
      (e.all = function () {
        return this.A;
      }),
      (e.has = function (t) {
        return this.A.has(t);
      }),
      (e.delete = function (t) {
        return this.A.delete(t);
      }),
      (e.clear = function () {
        return this.A.clear();
      }),
      i
    );
  })(),
  Zg = function () {
    return !window.history.pushState;
  },
  Qg = function (i) {
    return !i.el || !i.href;
  },
  Jg = function (i) {
    var e = i.event;
    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
  },
  e2 = function (i) {
    var e = i.el;
    return e.hasAttribute("target") && e.target === "_blank";
  },
  t2 = function (i) {
    var e = i.el;
    return (
      (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
      (e.hostname !== void 0 && window.location.hostname !== e.hostname)
    );
  },
  r2 = function (i) {
    var e = i.el;
    return e.port !== void 0 && Cs() !== Cs(e.href);
  },
  n2 = function (i) {
    var e = i.el;
    return e.getAttribute && typeof e.getAttribute("download") == "string";
  },
  i2 = function (i) {
    return i.el.hasAttribute(Cr.prefix + "-" + Cr.prevent);
  },
  s2 = function (i) {
    return !!i.el.closest("[" + Cr.prefix + "-" + Cr.prevent + '="all"]');
  },
  o2 = function (i) {
    var e = i.href;
    return $l(e) === $l() && Cs(e) === Cs();
  },
  a2 = (function (i) {
    function e(r) {
      var n;
      return (
        ((n = i.call(this, r) || this).suite = []),
        (n.tests = new Map()),
        n.init(),
        n
      );
    }
    ia(e, i);
    var t = e.prototype;
    return (
      (t.init = function () {
        this.add("pushState", Zg),
          this.add("exists", Qg),
          this.add("newTab", Jg),
          this.add("blank", e2),
          this.add("corsDomain", t2),
          this.add("corsPort", r2),
          this.add("download", n2),
          this.add("preventSelf", i2),
          this.add("preventAll", s2),
          this.add("sameUrl", o2, !1);
      }),
      (t.add = function (r, n, s) {
        s === void 0 && (s = !0), this.tests.set(r, n), s && this.suite.push(r);
      }),
      (t.run = function (r, n, s, o) {
        return this.tests.get(r)({ el: n, event: s, href: o });
      }),
      (t.checkLink = function (r, n, s) {
        var o = this;
        return this.suite.some(function (a) {
          return o.run(a, r, n, s);
        });
      }),
      e
    );
  })(gf),
  ka = (function (i) {
    function e(t, r) {
      var n;
      return (
        r === void 0 && (r = "Barba error"),
        ((n =
          i.call.apply(i, [this].concat([].slice.call(arguments, 2))) ||
          this).error = void 0),
        (n.label = void 0),
        (n.error = t),
        (n.label = r),
        Error.captureStackTrace && Error.captureStackTrace(zg(n), e),
        (n.name = "BarbaError"),
        n
      );
    }
    return ia(e, i), e;
  })(yl(Error)),
  l2 = (function () {
    function i(t) {
      t === void 0 && (t = []),
        (this.logger = new Hn("@barba/core")),
        (this.all = []),
        (this.page = []),
        (this.once = []),
        (this.j = [
          { name: "namespace", type: "strings" },
          { name: "custom", type: "function" },
        ]),
        t && (this.all = this.all.concat(t)),
        this.update();
    }
    var e = i.prototype;
    return (
      (e.add = function (t, r) {
        t === "rule"
          ? this.j.splice(r.position || 0, 0, r.value)
          : this.all.push(r),
          this.update();
      }),
      (e.resolve = function (t, r) {
        var n = this;
        r === void 0 && (r = {});
        var s = r.once ? this.once : this.page;
        s = s.filter(
          r.self
            ? function (u) {
                return u.name && u.name === "self";
              }
            : function (u) {
                return !u.name || u.name !== "self";
              }
        );
        var o = new Map(),
          a = s.find(function (u) {
            var f = !0,
              p = {};
            return r.self && u.name === "self"
              ? (o.set(u, p), !0)
              : (n.j.reverse().forEach(function (m) {
                  f &&
                    ((f = n.M(u, m, t, p)),
                    u.from &&
                      u.to &&
                      (f = n.M(u, m, t, p, "from") && n.M(u, m, t, p, "to")),
                    u.from && !u.to && (f = n.M(u, m, t, p, "from")),
                    !u.from && u.to && (f = n.M(u, m, t, p, "to")));
                }),
                o.set(u, p),
                f);
          }),
          l = o.get(a),
          c = [];
        if ((c.push(r.once ? "once" : "page"), r.self && c.push("self"), l)) {
          var d,
            h = [a];
          Object.keys(l).length > 0 && h.push(l),
            (d = this.logger).info.apply(
              d,
              ["Transition found [" + c.join(",") + "]"].concat(h)
            );
        } else this.logger.info("No transition found [" + c.join(",") + "]");
        return a;
      }),
      (e.update = function () {
        var t = this;
        (this.all = this.all
          .map(function (r) {
            return t.N(r);
          })
          .sort(function (r, n) {
            return r.priority - n.priority;
          })
          .reverse()
          .map(function (r) {
            return delete r.priority, r;
          })),
          (this.page = this.all.filter(function (r) {
            return r.leave !== void 0 || r.enter !== void 0;
          })),
          (this.once = this.all.filter(function (r) {
            return r.once !== void 0;
          }));
      }),
      (e.M = function (t, r, n, s, o) {
        var a = !0,
          l = !1,
          c = t,
          d = r.name,
          h = d,
          u = d,
          f = d,
          p = o ? c[o] : c,
          m = o === "to" ? n.next : n.current;
        if (o ? p && p[d] : p[d]) {
          switch (r.type) {
            case "strings":
            default:
              var g = Array.isArray(p[h]) ? p[h] : [p[h]];
              m[h] && g.indexOf(m[h]) !== -1 && (l = !0),
                g.indexOf(m[h]) === -1 && (a = !1);
              break;
            case "object":
              var y = Array.isArray(p[u]) ? p[u] : [p[u]];
              m[u]
                ? (m[u].name && y.indexOf(m[u].name) !== -1 && (l = !0),
                  y.indexOf(m[u].name) === -1 && (a = !1))
                : (a = !1);
              break;
            case "function":
              p[f](n) ? (l = !0) : (a = !1);
          }
          l && (o ? ((s[o] = s[o] || {}), (s[o][d] = c[o][d])) : (s[d] = c[d]));
        }
        return a;
      }),
      (e.S = function (t, r, n) {
        var s = 0;
        return (
          (t[r] || (t.from && t.from[r]) || (t.to && t.to[r])) &&
            ((s += Math.pow(10, n)),
            t.from && t.from[r] && (s += 1),
            t.to && t.to[r] && (s += 2)),
          s
        );
      }),
      (e.N = function (t) {
        var r = this;
        t.priority = 0;
        var n = 0;
        return (
          this.j.forEach(function (s, o) {
            n += r.S(t, s.name, o + 1);
          }),
          (t.priority = n),
          t
        );
      }),
      i
    );
  })();
function zi(i, e) {
  try {
    var t = i();
  } catch (r) {
    return e(r);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
var c2 = (function () {
    function i(t) {
      t === void 0 && (t = []),
        (this.logger = new Hn("@barba/core")),
        (this.store = void 0),
        (this.C = !1),
        (this.store = new l2(t));
    }
    var e = i.prototype;
    return (
      (e.get = function (t, r) {
        return this.store.resolve(t, r);
      }),
      (e.doOnce = function (t) {
        var r = t.data,
          n = t.transition;
        try {
          var s = function () {
              o.C = !1;
            },
            o = this,
            a = n || {};
          o.C = !0;
          var l = zi(
            function () {
              return Promise.resolve(o.L("beforeOnce", r, a)).then(function () {
                return Promise.resolve(o.once(r, a)).then(function () {
                  return Promise.resolve(o.L("afterOnce", r, a)).then(
                    function () {}
                  );
                });
              });
            },
            function (c) {
              (o.C = !1),
                o.logger.debug("Transition error [before/after/once]"),
                o.logger.error(c);
            }
          );
          return Promise.resolve(l && l.then ? l.then(s) : s());
        } catch (c) {
          return Promise.reject(c);
        }
      }),
      (e.doPage = function (t) {
        var r = t.data,
          n = t.transition,
          s = t.page,
          o = t.wrapper;
        try {
          var a = function (u) {
              l.C = !1;
            },
            l = this,
            c = n || {},
            d = c.sync === !0 || !1;
          l.C = !0;
          var h = zi(
            function () {
              function u() {
                return Promise.resolve(l.L("before", r, c)).then(function () {
                  function p(g) {
                    return Promise.resolve(l.remove(r)).then(function () {
                      return Promise.resolve(l.L("after", r, c)).then(
                        function () {}
                      );
                    });
                  }
                  var m = (function () {
                    if (d)
                      return zi(
                        function () {
                          return Promise.resolve(l.add(r, o)).then(function () {
                            return Promise.resolve(
                              l.L("beforeLeave", r, c)
                            ).then(function () {
                              return Promise.resolve(
                                l.L("beforeEnter", r, c)
                              ).then(function () {
                                return Promise.resolve(
                                  Promise.all([l.leave(r, c), l.enter(r, c)])
                                ).then(function () {
                                  return Promise.resolve(
                                    l.L("afterLeave", r, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      l.L("afterEnter", r, c)
                                    ).then(function () {});
                                  });
                                });
                              });
                            });
                          });
                        },
                        function (b) {
                          if (l.H(b))
                            throw new ka(b, "Transition error [sync]");
                        }
                      );
                    var g = function (b) {
                        return zi(
                          function () {
                            var $ = (function () {
                              if (y !== !1)
                                return Promise.resolve(l.add(r, o)).then(
                                  function () {
                                    return Promise.resolve(
                                      l.L("beforeEnter", r, c)
                                    ).then(function () {
                                      return Promise.resolve(
                                        l.enter(r, c, y)
                                      ).then(function () {
                                        return Promise.resolve(
                                          l.L("afterEnter", r, c)
                                        ).then(function () {});
                                      });
                                    });
                                  }
                                );
                            })();
                            if ($ && $.then) return $.then(function () {});
                          },
                          function ($) {
                            if (l.H($))
                              throw new ka(
                                $,
                                "Transition error [before/after/enter]"
                              );
                          }
                        );
                      },
                      y = !1,
                      v = zi(
                        function () {
                          return Promise.resolve(l.L("beforeLeave", r, c)).then(
                            function () {
                              return Promise.resolve(
                                Promise.all([l.leave(r, c), Uo(s, r)]).then(
                                  function (b) {
                                    return b[0];
                                  }
                                )
                              ).then(function (b) {
                                return (
                                  (y = b),
                                  Promise.resolve(l.L("afterLeave", r, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            }
                          );
                        },
                        function (b) {
                          if (l.H(b))
                            throw new ka(
                              b,
                              "Transition error [before/after/leave]"
                            );
                        }
                      );
                    return v && v.then ? v.then(g) : g();
                  })();
                  return m && m.then ? m.then(p) : p();
                });
              }
              var f = (function () {
                if (d) return Promise.resolve(Uo(s, r)).then(function () {});
              })();
              return f && f.then ? f.then(u) : u();
            },
            function (u) {
              throw (
                ((l.C = !1),
                u.name && u.name === "BarbaError"
                  ? (l.logger.debug(u.label), l.logger.error(u.error), u)
                  : (l.logger.debug("Transition error [page]"),
                    l.logger.error(u),
                    u))
              );
            }
          );
          return Promise.resolve(h && h.then ? h.then(a) : a());
        } catch (u) {
          return Promise.reject(u);
        }
      }),
      (e.once = function (t, r) {
        try {
          return Promise.resolve(ln.do("once", t, r)).then(function () {
            return r.once ? yi(r.once, r)(t) : Promise.resolve();
          });
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (e.leave = function (t, r) {
        try {
          return Promise.resolve(ln.do("leave", t, r)).then(function () {
            return r.leave ? yi(r.leave, r)(t) : Promise.resolve();
          });
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (e.enter = function (t, r, n) {
        try {
          return Promise.resolve(ln.do("enter", t, r)).then(function () {
            return r.enter ? yi(r.enter, r)(t, n) : Promise.resolve();
          });
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      (e.add = function (t, r) {
        try {
          return (
            qn.addContainer(t.next.container, r),
            ln.do("nextAdded", t),
            Promise.resolve()
          );
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (e.remove = function (t) {
        try {
          return (
            qn.removeContainer(t.current.container),
            ln.do("currentRemoved", t),
            Promise.resolve()
          );
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.H = function (t) {
        return t.message
          ? !/Timeout error|Fetch error/.test(t.message)
          : !t.status;
      }),
      (e.L = function (t, r, n) {
        try {
          return Promise.resolve(ln.do(t, r, n)).then(function () {
            return n[t] ? yi(n[t], n)(r) : Promise.resolve();
          });
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      oc(i, [
        {
          key: "isRunning",
          get: function () {
            return this.C;
          },
          set: function (t) {
            this.C = t;
          },
        },
        {
          key: "hasOnce",
          get: function () {
            return this.store.once.length > 0;
          },
        },
        {
          key: "hasSelf",
          get: function () {
            return this.store.all.some(function (t) {
              return t.name === "self";
            });
          },
        },
        {
          key: "shouldWait",
          get: function () {
            return this.store.all.some(function (t) {
              return (t.to && !t.to.route) || t.sync;
            });
          },
        },
      ]),
      i
    );
  })(),
  d2 = (function () {
    function i(e) {
      var t = this;
      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
        (this.byNamespace = new Map()),
        e.length !== 0 &&
          (e.forEach(function (r) {
            t.byNamespace.set(r.namespace, r);
          }),
          this.names.forEach(function (r) {
            ln[r](t._(r));
          }));
    }
    return (
      (i.prototype._ = function (e) {
        var t = this;
        return function (r) {
          var n = e.match(/enter/i) ? r.next : r.current,
            s = t.byNamespace.get(n.namespace);
          return s && s[e] ? yi(s[e], s)(r) : Promise.resolve();
        };
      }),
      i
    );
  })();
Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (i) {
      var e = this;
      do {
        if (e.matches(i)) return e;
        e = e.parentElement || e.parentNode;
      } while (e !== null && e.nodeType === 1);
      return null;
    });
var u2 = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  },
  qd = new ((function () {
    function i() {
      (this.version = "2.10.3"),
        (this.schemaPage = u2),
        (this.Logger = Hn),
        (this.logger = new Hn("@barba/core")),
        (this.plugins = []),
        (this.timeout = void 0),
        (this.cacheIgnore = void 0),
        (this.cacheFirstPage = void 0),
        (this.prefetchIgnore = void 0),
        (this.preventRunning = void 0),
        (this.hooks = ln),
        (this.cache = void 0),
        (this.headers = void 0),
        (this.prevent = void 0),
        (this.transitions = void 0),
        (this.views = void 0),
        (this.dom = qn),
        (this.helpers = Ug),
        (this.history = hf),
        (this.request = jg),
        (this.url = Wg),
        (this.D = void 0),
        (this.B = void 0),
        (this.q = void 0),
        (this.F = void 0);
    }
    var e = i.prototype;
    return (
      (e.use = function (t, r) {
        var n = this.plugins;
        n.indexOf(t) > -1
          ? this.logger.warn("Plugin [" + t.name + "] already installed.")
          : typeof t.install == "function"
          ? (t.install(this, r), n.push(t))
          : this.logger.warn(
              "Plugin [" + t.name + '] has no "install" method.'
            );
      }),
      (e.init = function (t) {
        var r = t === void 0 ? {} : t,
          n = r.transitions,
          s = n === void 0 ? [] : n,
          o = r.views,
          a = o === void 0 ? [] : o,
          l = r.schema,
          c = l === void 0 ? Cr : l,
          d = r.requestError,
          h = r.timeout,
          u = h === void 0 ? 2e3 : h,
          f = r.cacheIgnore,
          p = f !== void 0 && f,
          m = r.cacheFirstPage,
          g = m !== void 0 && m,
          y = r.prefetchIgnore,
          v = y !== void 0 && y,
          b = r.preventRunning,
          $ = b !== void 0 && b,
          E = r.prevent,
          T = E === void 0 ? null : E,
          S = r.debug,
          O = r.logLevel;
        if (
          (Hn.setLevel(
            (S !== void 0 && S) === !0 ? "debug" : O === void 0 ? "off" : O
          ),
          this.logger.info(this.version),
          Object.keys(c).forEach(function (L) {
            Cr[L] && (Cr[L] = c[L]);
          }),
          (this.B = d),
          (this.timeout = u),
          (this.cacheIgnore = p),
          (this.cacheFirstPage = g),
          (this.prefetchIgnore = v),
          (this.preventRunning = $),
          (this.q = this.dom.getWrapper()),
          !this.q)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this.I();
        var D = this.data.current;
        if (!D.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new Xg(p)),
          (this.headers = new Kg()),
          (this.prevent = new a2(v)),
          (this.transitions = new c2(s)),
          (this.views = new d2(a)),
          T !== null)
        ) {
          if (typeof T != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", T);
        }
        this.history.init(D.url.href, D.namespace),
          g &&
            this.cache.set(
              D.url.href,
              Promise.resolve({ html: D.html, url: D.url }),
              "init",
              "fulfilled"
            ),
          (this.U = this.U.bind(this)),
          (this.$ = this.$.bind(this)),
          (this.X = this.X.bind(this)),
          this.G(),
          this.plugins.forEach(function (L) {
            return L.init();
          });
        var x = this.data;
        (x.trigger = "barba"),
          (x.next = x.current),
          (x.current = Dr({}, this.schemaPage)),
          this.hooks.do("ready", x),
          this.once(x),
          this.I();
      }),
      (e.destroy = function () {
        this.I(),
          this.J(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (e.force = function (t) {
        window.location.assign(t);
      }),
      (e.go = function (t, r, n) {
        var s;
        if (
          (r === void 0 && (r = "barba"),
          (this.F = null),
          this.transitions.isRunning)
        )
          this.force(t);
        else if (
          !(s =
            r === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t) &&
                this.url.getQuery(this.history.current.url, !0) ===
                  this.url.getQuery(t, !0)
              : this.prevent.run("sameUrl", null, null, t)) ||
          this.transitions.hasSelf
        )
          return (
            (r = this.history.change(
              this.cache.has(t) ? this.cache.get(t).target : t,
              r,
              n
            )),
            n && (n.stopPropagation(), n.preventDefault()),
            this.page(t, r, n ?? void 0, s)
          );
      }),
      (e.once = function (t) {
        try {
          var r = this;
          return Promise.resolve(r.hooks.do("beforeEnter", t)).then(
            function () {
              function n() {
                return Promise.resolve(r.hooks.do("afterEnter", t)).then(
                  function () {}
                );
              }
              var s = (function () {
                if (r.transitions.hasOnce) {
                  var o = r.transitions.get(t, { once: !0 });
                  return Promise.resolve(
                    r.transitions.doOnce({ transition: o, data: t })
                  ).then(function () {});
                }
              })();
              return s && s.then ? s.then(n) : n();
            }
          );
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (e.page = function (t, r, n, s) {
        try {
          var o,
            a = function () {
              var h = l.data;
              return Promise.resolve(l.hooks.do("page", h)).then(function () {
                var u = (function (f, p) {
                  try {
                    var m =
                      ((g = l.transitions.get(h, { once: !1, self: s })),
                      Promise.resolve(
                        l.transitions.doPage({
                          data: h,
                          page: o,
                          transition: g,
                          wrapper: l.q,
                        })
                      ).then(function () {
                        l.I();
                      }));
                  } catch {
                    return p();
                  }
                  var g;
                  return m && m.then ? m.then(void 0, p) : m;
                })(0, function () {
                  Hn.getLevel() === 0 && l.force(h.next.url.href);
                });
                if (u && u.then) return u.then(function () {});
              });
            },
            l = this;
          if (
            ((l.data.next.url = Dr({ href: t }, l.url.parse(t))),
            (l.data.trigger = r),
            (l.data.event = n),
            l.cache.has(t))
          )
            o = l.cache.update(t, { action: "click" }).request;
          else {
            var c = l.request(
              t,
              l.timeout,
              l.onRequestError.bind(l, r),
              l.cache,
              l.headers
            );
            c.then(function (h) {
              h.url.href !== t && l.history.add(h.url.href, r, "replace");
            }),
              (o = l.cache.set(t, c, "click", "pending").request);
          }
          var d = (function () {
            if (l.transitions.shouldWait)
              return Promise.resolve(Uo(o, l.data)).then(function () {});
          })();
          return Promise.resolve(d && d.then ? d.then(a) : a());
        } catch (h) {
          return Promise.reject(h);
        }
      }),
      (e.onRequestError = function (t) {
        this.transitions.isRunning = !1;
        var r = [].slice.call(arguments, 1),
          n = r[0],
          s = r[1],
          o = this.cache.getAction(n);
        return (
          this.cache.delete(n),
          (this.B && this.B(t, o, n, s) === !1) ||
            (o === "click" && this.force(n)),
          !1
        );
      }),
      (e.prefetch = function (t) {
        var r = this;
        (t = this.url.getAbsoluteHref(t)),
          this.cache.has(t) ||
            this.cache.set(
              t,
              this.request(
                t,
                this.timeout,
                this.onRequestError.bind(this, "barba"),
                this.cache,
                this.headers
              ).catch(function (n) {
                r.logger.error(n);
              }),
              "prefetch",
              "pending"
            );
      }),
      (e.G = function () {
        this.prefetchIgnore !== !0 &&
          (document.addEventListener("mouseover", this.U),
          document.addEventListener("touchstart", this.U)),
          document.addEventListener("click", this.$),
          window.addEventListener("popstate", this.X);
      }),
      (e.J = function () {
        this.prefetchIgnore !== !0 &&
          (document.removeEventListener("mouseover", this.U),
          document.removeEventListener("touchstart", this.U)),
          document.removeEventListener("click", this.$),
          window.removeEventListener("popstate", this.X);
      }),
      (e.U = function (t) {
        var r = this,
          n = this.W(t);
        if (n) {
          var s = this.url.getAbsoluteHref(this.dom.getHref(n));
          this.prevent.checkHref(s) ||
            this.cache.has(s) ||
            this.cache.set(
              s,
              this.request(
                s,
                this.timeout,
                this.onRequestError.bind(this, n),
                this.cache,
                this.headers
              ).catch(function (o) {
                r.logger.error(o);
              }),
              "enter",
              "pending"
            );
        }
      }),
      (e.$ = function (t) {
        var r = this.W(t);
        if (r) {
          if (this.transitions.isRunning && this.preventRunning)
            return t.preventDefault(), void t.stopPropagation();
          (this.F = t), this.go(this.dom.getHref(r), r, t);
        }
      }),
      (e.X = function (t) {
        this.go(this.url.getHref(), "popstate", t);
      }),
      (e.W = function (t) {
        for (var r = t.target; r && !this.dom.getHref(r); ) r = r.parentNode;
        if (r && !this.prevent.checkLink(r, t, this.dom.getHref(r))) return r;
      }),
      (e.I = function () {
        var t = this.url.getHref(),
          r = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: Dr({ href: t }, this.url.parse(t)),
          };
        (this.D = {
          current: r,
          event: void 0,
          next: Dr({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      oc(i, [
        {
          key: "data",
          get: function () {
            return this.D;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this.q;
          },
        },
      ]),
      i
    );
  })())(),
  h2 =
    window.requestIdleCallback ||
    function (i) {
      var e = Date.now();
      return setTimeout(function () {
        i({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - e));
          },
        });
      }, 1);
    },
  f2 = new ((function () {
    function i() {
      (this.name = "@barba/prefetch"),
        (this.version = "2.2.0"),
        (this.barba = void 0),
        (this.logger = void 0),
        (this.observer = void 0),
        (this.root = void 0),
        (this.timeout = void 0),
        (this.limit = void 0),
        (this.toPrefetch = new Set());
    }
    var e = i.prototype;
    return (
      (e.install = function (t, r) {
        var n = r === void 0 ? {} : r,
          s = n.root,
          o = s === void 0 ? document.body : s,
          a = n.timeout,
          l = a === void 0 ? 2e3 : a,
          c = n.limit,
          d = c === void 0 ? 0 : c;
        (this.logger = new t.Logger(this.name)),
          this.logger.info(this.version),
          (this.barba = t),
          (this.root = o),
          (this.timeout = l),
          (this.limit = d);
      }),
      (e.init = function () {
        var t = this;
        this.barba.prefetchIgnore
          ? this.logger.warn("barba.prefetchIgnore is enabled")
          : this.barba.cacheIgnore
          ? this.logger.warn("barba.cacheIgnore is enabled")
          : ((this.observer = new IntersectionObserver(function (r) {
              r.forEach(function (n) {
                if (n.isIntersecting) {
                  var s = n.target,
                    o = t.barba.url.getAbsoluteHref(t.barba.dom.getHref(s));
                  t.toPrefetch.has(o) &&
                    (t.observer.unobserve(s),
                    t.barba.cache.has(o)
                      ? t.barba.cache.update(o, { action: "prefetch" })
                      : t.barba.cache.set(
                          o,
                          t.barba
                            .request(
                              o,
                              t.barba.timeout,
                              t.barba.onRequestError.bind(t.barba, "barba"),
                              t.barba.cache,
                              t.barba.headers
                            )
                            .catch(function (a) {
                              t.logger.error(a);
                            }),
                          "prefetch",
                          "pending"
                        ));
                }
              });
            })),
            this.observe(),
            this.barba.hooks.after(this.observe, this));
      }),
      (e.observe = function () {
        var t = this;
        h2(
          function () {
            var r = Array.from(t.root.querySelectorAll("a"));
            t.limit > 0 && (r = r.slice(0, t.limit)),
              r.forEach(function (n) {
                var s = n,
                  o = t.barba.dom.getHref(s);
                t.barba.cache.has(o) ||
                  t.barba.prevent.checkHref(o) ||
                  t.barba.prevent.checkLink(s, {}, o) ||
                  (t.observer.observe(n), t.toPrefetch.add(o));
              });
          },
          { timeout: this.timeout }
        );
      }),
      i
    );
  })())();
class p2 {
  constructor() {
    _(this, "DOM");
    this.DOM = { main: document.querySelector(".page-effect") };
  }
  animIn() {
    return (
      (document.body.style.pointerEvents = "none"),
      Ti(() => {
        C.to(this.DOM.main, {
          opacity: 1,
          duration: 0.3,
          pointerEvents: "all",
        });
      }),
      new Promise((e) => {
        setTimeout(() => {
          e();
        }, Go.delayPageEnter * 1e3);
      })
    );
  }
  animOut(e) {
    Ti(() => {
      C.to(this.DOM.main, {
        opacity: 0,
        duration: 0.6,
        pointerEvents: "none",
        onComplete: () => {
          e && e();
        },
      });
    }),
      setTimeout(() => {
        e && e(),
          Ti(() => {
            var t;
            (document.body.style.pointerEvents = "auto"),
              (t = this.DOM.main) == null || t.classList.remove("is-loading");
          });
      }, Go.delayPageEnter * 1e3);
  }
}
function ac(i) {
  return typeof i == "number";
}
function bl(i) {
  return typeof i == "string";
}
function sa(i) {
  return typeof i == "boolean";
}
function Bd(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function Ie(i) {
  return Math.abs(i);
}
function lc(i) {
  return Math.sign(i);
}
function ps(i, e) {
  return Ie(i - e);
}
function m2(i, e) {
  if (i === 0 || e === 0 || Ie(i) <= Ie(e)) return 0;
  const t = ps(Ie(i), Ie(e));
  return Ie(t / i);
}
function g2(i) {
  return Math.round(i * 100) / 100;
}
function As(i) {
  return Ls(i).map(Number);
}
function fr(i) {
  return i[Vs(i)];
}
function Vs(i) {
  return Math.max(0, i.length - 1);
}
function cc(i, e) {
  return e === Vs(i);
}
function zd(i, e = 0) {
  return Array.from(Array(i), (t, r) => e + r);
}
function Ls(i) {
  return Object.keys(i);
}
function vf(i, e) {
  return [i, e].reduce(
    (t, r) => (
      Ls(r).forEach((n) => {
        const s = t[n],
          o = r[n],
          a = Bd(s) && Bd(o);
        t[n] = a ? vf(s, o) : o;
      }),
      t
    ),
    {}
  );
}
function _l(i, e) {
  return typeof e.MouseEvent < "u" && i instanceof e.MouseEvent;
}
function v2(i, e) {
  const t = { start: r, center: n, end: s };
  function r() {
    return 0;
  }
  function n(l) {
    return s(l) / 2;
  }
  function s(l) {
    return e - l;
  }
  function o(l, c) {
    return bl(i) ? t[i](l) : i(e, l, c);
  }
  return { measure: o };
}
function Is() {
  let i = [];
  function e(n, s, o, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in n)
      n.addEventListener(s, o, a), (l = () => n.removeEventListener(s, o, a));
    else {
      const c = n;
      c.addListener(o), (l = () => c.removeListener(o));
    }
    return i.push(l), r;
  }
  function t() {
    i = i.filter((n) => n());
  }
  const r = { add: e, clear: t };
  return r;
}
function y2(i, e, t, r) {
  const n = Is(),
    s = 1e3 / 60;
  let o = null,
    a = 0,
    l = 0;
  function c() {
    n.add(i, "visibilitychange", () => {
      i.hidden && p();
    });
  }
  function d() {
    f(), n.clear();
  }
  function h(g) {
    if (!l) return;
    o || ((o = g), t(), t());
    const y = g - o;
    for (o = g, a += y; a >= s; ) t(), (a -= s);
    const v = a / s;
    r(v), l && (l = e.requestAnimationFrame(h));
  }
  function u() {
    l || (l = e.requestAnimationFrame(h));
  }
  function f() {
    e.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0);
  }
  function p() {
    (o = null), (a = 0);
  }
  return { init: c, destroy: d, start: u, stop: f, update: t, render: r };
}
function $2(i, e) {
  const t = e === "rtl",
    r = i === "y",
    n = r ? "y" : "x",
    s = r ? "x" : "y",
    o = !r && t ? -1 : 1,
    a = d(),
    l = h();
  function c(p) {
    const { height: m, width: g } = p;
    return r ? m : g;
  }
  function d() {
    return r ? "top" : t ? "right" : "left";
  }
  function h() {
    return r ? "bottom" : t ? "left" : "right";
  }
  function u(p) {
    return p * o;
  }
  return {
    scroll: n,
    cross: s,
    startEdge: a,
    endEdge: l,
    measureSize: c,
    direction: u,
  };
}
function ri(i = 0, e = 0) {
  const t = Ie(i - e);
  function r(c) {
    return c < i;
  }
  function n(c) {
    return c > e;
  }
  function s(c) {
    return r(c) || n(c);
  }
  function o(c) {
    return s(c) ? (r(c) ? i : e) : c;
  }
  function a(c) {
    return t ? c - t * Math.ceil((c - e) / t) : c;
  }
  return {
    length: t,
    max: e,
    min: i,
    constrain: o,
    reachedAny: s,
    reachedMax: n,
    reachedMin: r,
    removeOffset: a,
  };
}
function yf(i, e, t) {
  const { constrain: r } = ri(0, i),
    n = i + 1;
  let s = o(e);
  function o(u) {
    return t ? Ie((n + u) % n) : r(u);
  }
  function a() {
    return s;
  }
  function l(u) {
    return (s = o(u)), h;
  }
  function c(u) {
    return d().set(a() + u);
  }
  function d() {
    return yf(i, a(), t);
  }
  const h = { get: a, set: l, add: c, clone: d };
  return h;
}
function b2(i, e, t, r, n, s, o, a, l, c, d, h, u, f, p, m, g, y, v) {
  const { cross: b, direction: $ } = i,
    E = ["INPUT", "SELECT", "TEXTAREA"],
    T = { passive: !1 },
    S = Is(),
    O = Is(),
    D = ri(50, 225).constrain(f.measure(20)),
    x = { mouse: 300, touch: 400 },
    L = { mouse: 500, touch: 600 },
    w = p ? 43 : 25;
  let P = !1,
    k = 0,
    R = 0,
    I = !1,
    N = !1,
    q = !1,
    F = !1;
  function M(B) {
    if (!v) return;
    function G(pe) {
      (sa(v) || v(B, pe)) && Ee(pe);
    }
    const Q = e;
    S.add(Q, "dragstart", (pe) => pe.preventDefault(), T)
      .add(Q, "touchmove", () => {}, T)
      .add(Q, "touchend", () => {})
      .add(Q, "touchstart", G)
      .add(Q, "mousedown", G)
      .add(Q, "touchcancel", de)
      .add(Q, "contextmenu", de)
      .add(Q, "click", fe, !0);
  }
  function j() {
    S.clear(), O.clear();
  }
  function ne() {
    const B = F ? t : e;
    O.add(B, "touchmove", ie, T)
      .add(B, "touchend", de)
      .add(B, "mousemove", ie, T)
      .add(B, "mouseup", de);
  }
  function ue(B) {
    const G = B.nodeName || "";
    return E.includes(G);
  }
  function oe() {
    return (p ? L : x)[F ? "mouse" : "touch"];
  }
  function ve(B, G) {
    const Q = h.add(lc(B) * -1),
      pe = d.byDistance(B, !p).distance;
    return p || Ie(B) < D
      ? pe
      : g && G
      ? pe * 0.5
      : d.byIndex(Q.get(), 0).distance;
  }
  function Ee(B) {
    const G = _l(B, r);
    (F = G),
      (q = p && G && !B.buttons && P),
      (P = ps(n.get(), o.get()) >= 2),
      !(G && B.button !== 0) &&
        (ue(B.target) ||
          ((I = !0),
          s.pointerDown(B),
          c.useFriction(0).useDuration(0),
          n.set(o),
          ne(),
          (k = s.readPoint(B)),
          (R = s.readPoint(B, b)),
          u.emit("pointerDown")));
  }
  function ie(B) {
    if (!_l(B, r) && B.touches.length >= 2) return de(B);
    const Q = s.readPoint(B),
      pe = s.readPoint(B, b),
      Oe = ps(Q, k),
      A = ps(pe, R);
    if (!N && !F && (!B.cancelable || ((N = Oe > A), !N))) return de(B);
    const He = s.pointerMove(B);
    Oe > m && (q = !0),
      c.useFriction(0.3).useDuration(0.75),
      a.start(),
      n.add($(He)),
      B.preventDefault();
  }
  function de(B) {
    const Q = d.byDistance(0, !1).index !== h.get(),
      pe = s.pointerUp(B) * oe(),
      Oe = ve($(pe), Q),
      A = m2(pe, Oe),
      He = w - 10 * A,
      Ke = y + A / 50;
    (N = !1),
      (I = !1),
      O.clear(),
      c.useDuration(He).useFriction(Ke),
      l.distance(Oe, !p),
      (F = !1),
      u.emit("pointerUp");
  }
  function fe(B) {
    q && (B.stopPropagation(), B.preventDefault(), (q = !1));
  }
  function Te() {
    return I;
  }
  return { init: M, destroy: j, pointerDown: Te };
}
function _2(i, e) {
  let r, n;
  function s(h) {
    return h.timeStamp;
  }
  function o(h, u) {
    const p = `client${(u || i.scroll) === "x" ? "X" : "Y"}`;
    return (_l(h, e) ? h : h.touches[0])[p];
  }
  function a(h) {
    return (r = h), (n = h), o(h);
  }
  function l(h) {
    const u = o(h) - o(n),
      f = s(h) - s(r) > 170;
    return (n = h), f && (r = h), u;
  }
  function c(h) {
    if (!r || !n) return 0;
    const u = o(n) - o(r),
      f = s(h) - s(r),
      p = s(h) - s(n) > 170,
      m = u / f;
    return f && !p && Ie(m) > 0.1 ? m : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: c, readPoint: o };
}
function w2() {
  function i(t) {
    const { offsetTop: r, offsetLeft: n, offsetWidth: s, offsetHeight: o } = t;
    return {
      top: r,
      right: n + s,
      bottom: r + o,
      left: n,
      width: s,
      height: o,
    };
  }
  return { measure: i };
}
function S2(i) {
  function e(r) {
    return i * (r / 100);
  }
  return { measure: e };
}
function E2(i, e, t, r, n, s, o) {
  const a = [i].concat(r);
  let l,
    c,
    d = [],
    h = !1;
  function u(g) {
    return n.measureSize(o.measure(g));
  }
  function f(g) {
    if (!s) return;
    (c = u(i)), (d = r.map(u));
    function y(v) {
      for (const b of v) {
        if (h) return;
        const $ = b.target === i,
          E = r.indexOf(b.target),
          T = $ ? c : d[E],
          S = u($ ? i : r[E]);
        if (Ie(S - T) >= 0.5) {
          g.reInit(), e.emit("resize");
          break;
        }
      }
    }
    (l = new ResizeObserver((v) => {
      (sa(s) || s(g, v)) && y(v);
    })),
      t.requestAnimationFrame(() => {
        a.forEach((v) => l.observe(v));
      });
  }
  function p() {
    (h = !0), l && l.disconnect();
  }
  return { init: f, destroy: p };
}
function T2(i, e, t, r, n, s) {
  let o = 0,
    a = 0,
    l = n,
    c = s,
    d = i.get(),
    h = 0;
  function u() {
    const T = r.get() - i.get(),
      S = !l;
    let O = 0;
    return (
      S
        ? ((o = 0), t.set(r), i.set(r), (O = T))
        : (t.set(i), (o += T / l), (o *= c), (d += o), i.add(o), (O = d - h)),
      (a = lc(O)),
      (h = d),
      E
    );
  }
  function f() {
    const T = r.get() - e.get();
    return Ie(T) < 0.001;
  }
  function p() {
    return l;
  }
  function m() {
    return a;
  }
  function g() {
    return o;
  }
  function y() {
    return b(n);
  }
  function v() {
    return $(s);
  }
  function b(T) {
    return (l = T), E;
  }
  function $(T) {
    return (c = T), E;
  }
  const E = {
    direction: m,
    duration: p,
    velocity: g,
    seek: u,
    settled: f,
    useBaseFriction: v,
    useBaseDuration: y,
    useFriction: $,
    useDuration: b,
  };
  return E;
}
function O2(i, e, t, r, n) {
  const s = n.measure(10),
    o = n.measure(50),
    a = ri(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !i.reachedAny(t.get()) || !i.reachedAny(e.get()));
  }
  function d(f) {
    if (!c()) return;
    const p = i.reachedMin(e.get()) ? "min" : "max",
      m = Ie(i[p] - e.get()),
      g = t.get() - e.get(),
      y = a.constrain(m / o);
    t.subtract(g * y),
      !f &&
        Ie(g) < s &&
        (t.set(i.constrain(t.get())), r.useDuration(25).useBaseFriction());
  }
  function h(f) {
    l = !f;
  }
  return { shouldConstrain: c, constrain: d, toggleActive: h };
}
function M2(i, e, t, r, n) {
  const s = ri(-e + i, 0),
    o = h(),
    a = d(),
    l = u();
  function c(p, m) {
    return ps(p, m) <= 1;
  }
  function d() {
    const p = o[0],
      m = fr(o),
      g = o.lastIndexOf(p),
      y = o.indexOf(m) + 1;
    return ri(g, y);
  }
  function h() {
    return t
      .map((p, m) => {
        const { min: g, max: y } = s,
          v = s.constrain(p),
          b = !m,
          $ = cc(t, m);
        return b ? y : $ || c(g, v) ? g : c(y, v) ? y : v;
      })
      .map((p) => parseFloat(p.toFixed(3)));
  }
  function u() {
    if (e <= i + n) return [s.max];
    if (r === "keepSnaps") return o;
    const { min: p, max: m } = a;
    return o.slice(p, m);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function x2(i, e, t) {
  const r = e[0],
    n = t ? r - i : fr(e);
  return { limit: ri(n, r) };
}
function D2(i, e, t, r) {
  const s = e.min + 0.1,
    o = e.max + 0.1,
    { reachedMin: a, reachedMax: l } = ri(s, o);
  function c(u) {
    return u === 1 ? l(t.get()) : u === -1 ? a(t.get()) : !1;
  }
  function d(u) {
    if (!c(u)) return;
    const f = i * (u * -1);
    r.forEach((p) => p.add(f));
  }
  return { loop: d };
}
function P2(i) {
  const { max: e, length: t } = i;
  function r(s) {
    const o = s - e;
    return t ? o / -t : 0;
  }
  return { get: r };
}
function k2(i, e, t, r, n) {
  const { startEdge: s, endEdge: o } = i,
    { groupSlides: a } = n,
    l = h().map(e.measure),
    c = u(),
    d = f();
  function h() {
    return a(r)
      .map((m) => fr(m)[o] - m[0][s])
      .map(Ie);
  }
  function u() {
    return r.map((m) => t[s] - m[s]).map((m) => -Ie(m));
  }
  function f() {
    return a(c)
      .map((m) => m[0])
      .map((m, g) => m + l[g]);
  }
  return { snaps: c, snapsAligned: d };
}
function C2(i, e, t, r, n, s) {
  const { groupSlides: o } = n,
    { min: a, max: l } = r,
    c = d();
  function d() {
    const u = o(s),
      f = !i || e === "keepSnaps";
    return t.length === 1
      ? [s]
      : f
      ? u
      : u.slice(a, l).map((p, m, g) => {
          const y = !m,
            v = cc(g, m);
          if (y) {
            const b = fr(g[0]) + 1;
            return zd(b);
          }
          if (v) {
            const b = Vs(s) - fr(g)[0] + 1;
            return zd(b, fr(g)[0]);
          }
          return p;
        });
  }
  return { slideRegistry: c };
}
function A2(i, e, t, r, n) {
  const { reachedAny: s, removeOffset: o, constrain: a } = r;
  function l(p) {
    return p.concat().sort((m, g) => Ie(m) - Ie(g))[0];
  }
  function c(p) {
    const m = i ? o(p) : a(p),
      g = e
        .map((v, b) => ({ diff: d(v - m, 0), index: b }))
        .sort((v, b) => Ie(v.diff) - Ie(b.diff)),
      { index: y } = g[0];
    return { index: y, distance: m };
  }
  function d(p, m) {
    const g = [p, p + t, p - t];
    if (!i) return p;
    if (!m) return l(g);
    const y = g.filter((v) => lc(v) === m);
    return y.length ? l(y) : fr(g) - t;
  }
  function h(p, m) {
    const g = e[p] - n.get(),
      y = d(g, m);
    return { index: p, distance: y };
  }
  function u(p, m) {
    const g = n.get() + p,
      { index: y, distance: v } = c(g),
      b = !i && s(g);
    if (!m || b) return { index: y, distance: p };
    const $ = e[y] - v,
      E = p + d($, 0);
    return { index: y, distance: E };
  }
  return { byDistance: u, byIndex: h, shortcut: d };
}
function L2(i, e, t, r, n, s, o) {
  function a(h) {
    const u = h.distance,
      f = h.index !== e.get();
    s.add(u),
      u && (r.duration() ? i.start() : (i.update(), i.render(1), i.update())),
      f && (t.set(e.get()), e.set(h.index), o.emit("select"));
  }
  function l(h, u) {
    const f = n.byDistance(h, u);
    a(f);
  }
  function c(h, u) {
    const f = e.clone().set(h),
      p = n.byIndex(f.get(), u);
    a(p);
  }
  return { distance: l, index: c };
}
function I2(i, e, t, r, n, s, o, a) {
  const l = { passive: !0, capture: !0 };
  let c = 0;
  function d(f) {
    if (!a) return;
    function p(m) {
      if (new Date().getTime() - c > 10) return;
      o.emit("slideFocusStart"), (i.scrollLeft = 0);
      const v = t.findIndex((b) => b.includes(m));
      ac(v) && (n.useDuration(0), r.index(v, 0), o.emit("slideFocus"));
    }
    s.add(document, "keydown", h, !1),
      e.forEach((m, g) => {
        s.add(
          m,
          "focus",
          (y) => {
            (sa(a) || a(f, y)) && p(g);
          },
          l
        );
      });
  }
  function h(f) {
    f.code === "Tab" && (c = new Date().getTime());
  }
  return { init: d };
}
function Zi(i) {
  let e = i;
  function t() {
    return e;
  }
  function r(l) {
    e = o(l);
  }
  function n(l) {
    e += o(l);
  }
  function s(l) {
    e -= o(l);
  }
  function o(l) {
    return ac(l) ? l : l.get();
  }
  return { get: t, set: r, add: n, subtract: s };
}
function $f(i, e) {
  const t = i.scroll === "x" ? o : a,
    r = e.style;
  let n = null,
    s = !1;
  function o(u) {
    return `translate3d(${u}px,0px,0px)`;
  }
  function a(u) {
    return `translate3d(0px,${u}px,0px)`;
  }
  function l(u) {
    if (s) return;
    const f = g2(i.direction(u));
    f !== n && ((r.transform = t(f)), (n = f));
  }
  function c(u) {
    s = !u;
  }
  function d() {
    s ||
      ((r.transform = ""),
      e.getAttribute("style") || e.removeAttribute("style"));
  }
  return { clear: d, to: l, toggleActive: c };
}
function R2(i, e, t, r, n, s, o, a, l) {
  const d = As(n),
    h = As(n).reverse(),
    u = y().concat(v());
  function f(S, O) {
    return S.reduce((D, x) => D - n[x], O);
  }
  function p(S, O) {
    return S.reduce((D, x) => (f(D, O) > 0 ? D.concat([x]) : D), []);
  }
  function m(S) {
    return s.map((O, D) => ({
      start: O - r[D] + 0.5 + S,
      end: O + e - 0.5 + S,
    }));
  }
  function g(S, O, D) {
    const x = m(O);
    return S.map((L) => {
      const w = D ? 0 : -t,
        P = D ? t : 0,
        k = D ? "end" : "start",
        R = x[L][k];
      return {
        index: L,
        loopPoint: R,
        slideLocation: Zi(-1),
        translate: $f(i, l[L]),
        target: () => (a.get() > R ? w : P),
      };
    });
  }
  function y() {
    const S = o[0],
      O = p(h, S);
    return g(O, t, !1);
  }
  function v() {
    const S = e - o[0] - 1,
      O = p(d, S);
    return g(O, -t, !0);
  }
  function b() {
    return u.every(({ index: S }) => {
      const O = d.filter((D) => D !== S);
      return f(O, e) <= 0.1;
    });
  }
  function $() {
    u.forEach((S) => {
      const { target: O, translate: D, slideLocation: x } = S,
        L = O();
      L !== x.get() && (D.to(L), x.set(L));
    });
  }
  function E() {
    u.forEach((S) => S.translate.clear());
  }
  return { canLoop: b, clear: E, loop: $, loopPoints: u };
}
function N2(i, e, t) {
  let r,
    n = !1;
  function s(l) {
    if (!t) return;
    function c(d) {
      for (const h of d)
        if (h.type === "childList") {
          l.reInit(), e.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((d) => {
      n || ((sa(t) || t(l, d)) && c(d));
    })),
      r.observe(i, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (n = !0);
  }
  return { init: s, destroy: o };
}
function F2(i, e, t, r) {
  const n = {};
  let s = null,
    o = null,
    a,
    l = !1;
  function c() {
    (a = new IntersectionObserver(
      (p) => {
        l ||
          (p.forEach((m) => {
            const g = e.indexOf(m.target);
            n[g] = m;
          }),
          (s = null),
          (o = null),
          t.emit("slidesInView"));
      },
      { root: i.parentElement, threshold: r }
    )),
      e.forEach((p) => a.observe(p));
  }
  function d() {
    a && a.disconnect(), (l = !0);
  }
  function h(p) {
    return Ls(n).reduce((m, g) => {
      const y = parseInt(g),
        { isIntersecting: v } = n[y];
      return ((p && v) || (!p && !v)) && m.push(y), m;
    }, []);
  }
  function u(p = !0) {
    if (p && s) return s;
    if (!p && o) return o;
    const m = h(p);
    return p && (s = m), p || (o = m), m;
  }
  return { init: c, destroy: d, get: u };
}
function H2(i, e, t, r, n, s) {
  const { measureSize: o, startEdge: a, endEdge: l } = i,
    c = t[0] && n,
    d = p(),
    h = m(),
    u = t.map(o),
    f = g();
  function p() {
    if (!c) return 0;
    const v = t[0];
    return Ie(e[a] - v[a]);
  }
  function m() {
    if (!c) return 0;
    const v = s.getComputedStyle(fr(r));
    return parseFloat(v.getPropertyValue(`margin-${l}`));
  }
  function g() {
    return t
      .map((v, b, $) => {
        const E = !b,
          T = cc($, b);
        return E ? u[b] + d : T ? u[b] + h : $[b + 1][a] - v[a];
      })
      .map(Ie);
  }
  return { slideSizes: u, slideSizesWithGaps: f, startGap: d, endGap: h };
}
function q2(i, e, t, r, n, s, o, a, l) {
  const { startEdge: c, endEdge: d, direction: h } = i,
    u = ac(t);
  function f(y, v) {
    return As(y)
      .filter((b) => b % v === 0)
      .map((b) => y.slice(b, b + v));
  }
  function p(y) {
    return y.length
      ? As(y)
          .reduce((v, b, $) => {
            const E = fr(v) || 0,
              T = E === 0,
              S = b === Vs(y),
              O = n[c] - s[E][c],
              D = n[c] - s[b][d],
              x = !r && T ? h(o) : 0,
              L = !r && S ? h(a) : 0,
              w = Ie(D - L - (O + x));
            return $ && w > e + l && v.push(b), S && v.push(y.length), v;
          }, [])
          .map((v, b, $) => {
            const E = Math.max($[b - 1] || 0);
            return y.slice(E, v);
          })
      : [];
  }
  function m(y) {
    return u ? f(y, t) : p(y);
  }
  return { groupSlides: m };
}
function B2(i, e, t, r, n, s, o) {
  const {
      align: a,
      axis: l,
      direction: c,
      startIndex: d,
      loop: h,
      duration: u,
      dragFree: f,
      dragThreshold: p,
      inViewThreshold: m,
      slidesToScroll: g,
      skipSnaps: y,
      containScroll: v,
      watchResize: b,
      watchSlides: $,
      watchDrag: E,
      watchFocus: T,
    } = s,
    S = 2,
    O = w2(),
    D = O.measure(e),
    x = t.map(O.measure),
    L = $2(l, c),
    w = L.measureSize(D),
    P = S2(w),
    k = v2(a, w),
    R = !h && !!v,
    I = h || !!v,
    {
      slideSizes: N,
      slideSizesWithGaps: q,
      startGap: F,
      endGap: M,
    } = H2(L, D, x, t, I, n),
    j = q2(L, w, g, h, D, x, F, M, S),
    { snaps: ne, snapsAligned: ue } = k2(L, k, D, x, j),
    oe = -fr(ne) + fr(q),
    { snapsContained: ve, scrollContainLimit: Ee } = M2(w, oe, ue, v, S),
    ie = R ? ve : ue,
    { limit: de } = x2(oe, ie, h),
    fe = yf(Vs(ie), d, h),
    Te = fe.clone(),
    Z = As(t),
    B = ({
      dragHandler: at,
      scrollBody: Ir,
      scrollBounds: xe,
      options: { loop: Rr },
    }) => {
      Rr || xe.constrain(at.pointerDown()), Ir.seek();
    },
    G = (
      {
        scrollBody: at,
        translate: Ir,
        location: xe,
        offsetLocation: Rr,
        previousLocation: gr,
        scrollLooper: rn,
        slideLooper: nn,
        dragHandler: vr,
        animation: Nr,
        eventHandler: te,
        scrollBounds: Fr,
        options: { loop: Pt },
      },
      kt
    ) => {
      const Ct = at.settled(),
        Hr = !Fr.shouldConstrain(),
        qr = Pt ? Ct : Ct && Hr,
        Qt = qr && !vr.pointerDown();
      Qt && Nr.stop();
      const En = xe.get() * kt + gr.get() * (1 - kt);
      Rr.set(En),
        Pt && (rn.loop(at.direction()), nn.loop()),
        Ir.to(Rr.get()),
        Qt && te.emit("settle"),
        qr || te.emit("scroll");
    },
    Q = y2(
      r,
      n,
      () => B(ot),
      (at) => G(ot, at)
    ),
    pe = 0.68,
    Oe = ie[fe.get()],
    A = Zi(Oe),
    He = Zi(Oe),
    Ke = Zi(Oe),
    st = Zi(Oe),
    _e = T2(A, Ke, He, st, u, pe),
    Zt = A2(h, ie, oe, de, st),
    cr = L2(Q, fe, Te, _e, Zt, st, o),
    Lr = P2(de),
    qe = Is(),
    mr = F2(e, t, o, m),
    { slideRegistry: Me } = C2(R, v, ie, Ee, j, Z),
    Ht = I2(i, t, Me, cr, _e, qe, o, T),
    ot = {
      ownerDocument: r,
      ownerWindow: n,
      eventHandler: o,
      containerRect: D,
      slideRects: x,
      animation: Q,
      axis: L,
      dragHandler: b2(
        L,
        i,
        r,
        n,
        st,
        _2(L, n),
        A,
        Q,
        cr,
        _e,
        Zt,
        fe,
        o,
        P,
        f,
        p,
        y,
        pe,
        E
      ),
      eventStore: qe,
      percentOfView: P,
      index: fe,
      indexPrevious: Te,
      limit: de,
      location: A,
      offsetLocation: Ke,
      previousLocation: He,
      options: s,
      resizeHandler: E2(e, o, n, t, L, b, O),
      scrollBody: _e,
      scrollBounds: O2(de, Ke, st, _e, P),
      scrollLooper: D2(oe, de, Ke, [A, Ke, He, st]),
      scrollProgress: Lr,
      scrollSnapList: ie.map(Lr.get),
      scrollSnaps: ie,
      scrollTarget: Zt,
      scrollTo: cr,
      slideLooper: R2(L, w, oe, N, q, ne, ie, Ke, t),
      slideFocus: Ht,
      slidesHandler: N2(e, o, $),
      slidesInView: mr,
      slideIndexes: Z,
      slideRegistry: Me,
      slidesToScroll: j,
      target: st,
      translate: $f(L, e),
    };
  return ot;
}
function z2() {
  let i = {},
    e;
  function t(c) {
    e = c;
  }
  function r(c) {
    return i[c] || [];
  }
  function n(c) {
    return r(c).forEach((d) => d(e, c)), l;
  }
  function s(c, d) {
    return (i[c] = r(c).concat([d])), l;
  }
  function o(c, d) {
    return (i[c] = r(c).filter((h) => h !== d)), l;
  }
  function a() {
    i = {};
  }
  const l = { init: t, emit: n, off: o, on: s, clear: a };
  return l;
}
const V2 = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function G2(i) {
  function e(s, o) {
    return vf(s, o || {});
  }
  function t(s) {
    const o = s.breakpoints || {},
      a = Ls(o)
        .filter((l) => i.matchMedia(l).matches)
        .map((l) => o[l])
        .reduce((l, c) => e(l, c), {});
    return e(s, a);
  }
  function r(s) {
    return s
      .map((o) => Ls(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(i.matchMedia);
  }
  return { mergeOptions: e, optionsAtMedia: t, optionsMediaQueries: r };
}
function U2(i) {
  let e = [];
  function t(s, o) {
    return (
      (e = o.filter(({ options: a }) => i.optionsAtMedia(a).active !== !1)),
      e.forEach((a) => a.init(s, i)),
      o.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    e = e.filter((s) => s.destroy());
  }
  return { init: t, destroy: r };
}
function Gs(i, e, t) {
  const r = i.ownerDocument,
    n = r.defaultView,
    s = G2(n),
    o = U2(s),
    a = Is(),
    l = z2(),
    { mergeOptions: c, optionsAtMedia: d, optionsMediaQueries: h } = s,
    { on: u, off: f, emit: p } = l,
    m = L;
  let g = !1,
    y,
    v = c(V2, Gs.globalOptions),
    b = c(v),
    $ = [],
    E,
    T,
    S;
  function O() {
    const { container: Z, slides: B } = b;
    T = (bl(Z) ? i.querySelector(Z) : Z) || i.children[0];
    const Q = bl(B) ? T.querySelectorAll(B) : B;
    S = [].slice.call(Q || T.children);
  }
  function D(Z) {
    const B = B2(i, T, S, r, n, Z, l);
    if (Z.loop && !B.slideLooper.canLoop()) {
      const G = Object.assign({}, Z, { loop: !1 });
      return D(G);
    }
    return B;
  }
  function x(Z, B) {
    g ||
      ((v = c(v, Z)),
      (b = d(v)),
      ($ = B || $),
      O(),
      (y = D(b)),
      h([v, ...$.map(({ options: G }) => G)]).forEach((G) =>
        a.add(G, "change", L)
      ),
      b.active &&
        (y.translate.to(y.location.get()),
        y.animation.init(),
        y.slidesInView.init(),
        y.slideFocus.init(Te),
        y.eventHandler.init(Te),
        y.resizeHandler.init(Te),
        y.slidesHandler.init(Te),
        y.options.loop && y.slideLooper.loop(),
        T.offsetParent && S.length && y.dragHandler.init(Te),
        (E = o.init(Te, $))));
  }
  function L(Z, B) {
    const G = j();
    w(), x(c({ startIndex: G }, Z), B), l.emit("reInit");
  }
  function w() {
    y.dragHandler.destroy(),
      y.eventStore.clear(),
      y.translate.clear(),
      y.slideLooper.clear(),
      y.resizeHandler.destroy(),
      y.slidesHandler.destroy(),
      y.slidesInView.destroy(),
      y.animation.destroy(),
      o.destroy(),
      a.clear();
  }
  function P() {
    g || ((g = !0), a.clear(), w(), l.emit("destroy"), l.clear());
  }
  function k(Z, B, G) {
    !b.active ||
      g ||
      (y.scrollBody.useBaseFriction().useDuration(B === !0 ? 0 : b.duration),
      y.scrollTo.index(Z, G || 0));
  }
  function R(Z) {
    const B = y.index.add(1).get();
    k(B, Z, -1);
  }
  function I(Z) {
    const B = y.index.add(-1).get();
    k(B, Z, 1);
  }
  function N() {
    return y.index.add(1).get() !== j();
  }
  function q() {
    return y.index.add(-1).get() !== j();
  }
  function F() {
    return y.scrollSnapList;
  }
  function M() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function j() {
    return y.index.get();
  }
  function ne() {
    return y.indexPrevious.get();
  }
  function ue() {
    return y.slidesInView.get();
  }
  function oe() {
    return y.slidesInView.get(!1);
  }
  function ve() {
    return E;
  }
  function Ee() {
    return y;
  }
  function ie() {
    return i;
  }
  function de() {
    return T;
  }
  function fe() {
    return S;
  }
  const Te = {
    canScrollNext: N,
    canScrollPrev: q,
    containerNode: de,
    internalEngine: Ee,
    destroy: P,
    off: f,
    on: u,
    emit: p,
    plugins: ve,
    previousScrollSnap: ne,
    reInit: m,
    rootNode: ie,
    scrollNext: R,
    scrollPrev: I,
    scrollProgress: M,
    scrollSnapList: F,
    scrollTo: k,
    selectedScrollSnap: j,
    slideNodes: fe,
    slidesInView: ue,
    slidesNotInView: oe,
  };
  return x(e, t), setTimeout(() => l.emit("init"), 0), Te;
}
Gs.globalOptions = void 0;
class Ne {
  constructor({
    classSlide: e,
    idBtnPrev: t,
    idBtnNext: r,
    options: n,
    wrapElement: s,
    dotsElement: o,
  }) {
    _(this, "emblaApi", null);
    _(this, "prevBtn", null);
    _(this, "nextBtn", null);
    _(this, "classSlide");
    _(this, "idBtnPrev");
    _(this, "idBtnNext");
    _(this, "options");
    _(this, "wrapElement");
    _(this, "dotsElement");
    _(this, "clickHandlers", {});
    (this.classSlide = e),
      (this.idBtnPrev = t),
      (this.idBtnNext = r),
      (this.options = n),
      (this.wrapElement = s),
      (this.dotsElement = o),
      this.init(),
      be(this.destroy.bind(this));
  }
  init() {
    var r;
    this.emblaApi && this.cleanup();
    const e =
      ((r = this.wrapElement) == null
        ? void 0
        : r.querySelector(this.classSlide)) ||
      document.querySelector(this.classSlide);
    if (!e) return;
    const t = Gs(e, {
      align: "start",
      container: ".container",
      ...this.options,
    });
    if (this.idBtnPrev && this.idBtnNext) {
      if (
        ((this.prevBtn = document.getElementById(this.idBtnPrev)),
        (this.nextBtn = document.getElementById(this.idBtnNext)),
        !this.prevBtn || !this.nextBtn)
      ) {
        this.emblaApi = t;
        return;
      }
      const n = () => {
        var s, o;
        (s = this.prevBtn) == null ||
          s.classList.toggle("disabled", !t.canScrollPrev()),
          (o = this.nextBtn) == null ||
            o.classList.toggle("disabled", !t.canScrollNext());
      };
      t.on("select", n),
        t.on("reInit", n),
        n(),
        (this.clickHandlers.prev = () => t.scrollPrev()),
        (this.clickHandlers.next = () => t.scrollNext()),
        this.prevBtn.addEventListener("click", this.clickHandlers.prev),
        this.nextBtn.addEventListener("click", this.clickHandlers.next);
    }
    t.on("init", () => {
      t.reInit(), console.log("Re-inited!");
    }),
      (this.emblaApi = t),
      this.dotsElement && this.addDotBtnsAndClickHandlers();
  }
  addDotBtnsAndClickHandlers() {
    var n, s, o, a, l;
    let e = [];
    const t = () => {
        var d, h;
        if (!this.dotsElement) return;
        this.dotsElement.innerHTML =
          ((h = (d = this.emblaApi) == null ? void 0 : d.scrollSnapList()) ==
          null
            ? void 0
            : h
                .map(() => '<button class="embla__dot" type="button"></button>')
                .join("")) || "";
        const c = (u) => {
          var f;
          (f = this.emblaApi) == null || f.scrollTo(u);
        };
        (e = Array.from(this.dotsElement.querySelectorAll(".embla__dot"))),
          e.forEach((u, f) => {
            u.addEventListener("click", () => c(f), !1);
          });
      },
      r = () => {
        var h, u;
        const c =
            ((h = this.emblaApi) == null ? void 0 : h.previousScrollSnap()) ||
            0,
          d =
            ((u = this.emblaApi) == null ? void 0 : u.selectedScrollSnap()) ||
            0;
        e[c].classList.remove("embla__dot--selected"),
          e[d].classList.add("embla__dot--selected");
      };
    return (
      (s = (n = this.emblaApi) == null ? void 0 : n.on("init", t)) == null ||
        s.on("reInit", t),
      (o = this.emblaApi) == null || o.on("init", r),
      (a = this.emblaApi) == null || a.on("reInit", r),
      (l = this.emblaApi) == null || l.on("select", r),
      () => {
        e.forEach((c) => {
          c.innerHTML = "";
        });
      }
    );
  }
  cleanup() {
    this.prevBtn &&
      this.clickHandlers.prev &&
      this.prevBtn.removeEventListener("click", this.clickHandlers.prev),
      this.nextBtn &&
        this.clickHandlers.next &&
        this.nextBtn.removeEventListener("click", this.clickHandlers.next),
      (this.clickHandlers = {}),
      this.emblaApi &&
        (this.emblaApi.off("reInit", () => {}),
        this.emblaApi.off("init", () => {}),
        this.emblaApi.on("destroy", this.addDotBtnsAndClickHandlers()),
        this.emblaApi.destroy(),
        (this.emblaApi = null));
  }
  destroy() {
    this.cleanup(), (this.prevBtn = null), (this.nextBtn = null);
  }
}
class bf {
  constructor(e, t) {
    _(this, "DOM");
    _(this, "info");
    (this.DOM = { el: e }),
      (this.info = t),
      this.setValue(),
      this.closeModal(),
      be(this.clear.bind(this));
  }
  setValue() {
    const e = this.DOM.el.querySelector("#data-modal-img");
    e.setAttribute("src", this.info.avatar),
      e.setAttribute("alt", this.info.name);
    const t = this.DOM.el.querySelector("#data-modal-name");
    t.textContent = this.info.name;
    const r = this.DOM.el.querySelector("#data-modal-role");
    r.textContent = this.info.role;
    const n = this.DOM.el.querySelector("#data-modal-location");
    n.textContent = this.info.location;
    const s = this.DOM.el.querySelector("#data-modal-desc");
    s.textContent = this.info.description;
    const o = this.DOM.el.querySelector("#data-modal-linked");
    o.setAttribute("href", this.info.linked),
      o.setAttribute("target", "_blank");
    const a = this.DOM.el.querySelector("#data-modal-personal-link");
    a.setAttribute("href", this.info.personal_link),
      a.setAttribute("target", "_blank");
  }
  showModal() {
    this.DOM.el.querySelector(".member-modal-wrapper").classList.add("active");
    const t = this.DOM.el.querySelector(".member-modal-content");
    t.scrollTop = 0;
  }
  closeModal() {
    const e = this.DOM.el.querySelector(".member-modal-wrapper"),
      t = e.querySelector(".member-modal-top-close"),
      r = e.querySelector(".member-modal-overlay");
    t.addEventListener("click", () => {
      e.classList.remove("active");
    }),
      r.addEventListener("click", () => {
        e.classList.remove("active");
      });
  }
  clear() {
    const e = this.DOM.el.querySelector(".member-modal-wrapper"),
      t = e.querySelector(".member-modal-top-close");
    e
      .querySelector(".member-modal-overlay")
      .removeEventListener("click", () => {
        e.classList.remove("active");
      }),
      t.removeEventListener("click", () => {
        e.classList.remove("active");
      });
  }
}
class W2 {
  constructor(e) {
    _(this, "DOM");
    _(this, "accordionHandlers", new Map());
    _(this, "modalDetailMemberHandlers", new Map());
    _(this, "emblaSlides", []);
    _(this, "navTimeout", null);
    _(this, "filterHandlers", { items: new Map(), navs: new Map() });
    _(this, "clickOutsideHandlers", {});
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.updateSlideLength(".embla__news__container", ".embla__news__slide"),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".embla-news",
          idBtnPrev: "btn-news-prev",
          idBtnNext: "btn-news-next",
          wrapElement: this.DOM.el,
        })
      ),
      this.handleAccordion(),
      this.slideValues(),
      this.slidePeople(),
      this.handleOpenModalMember(),
      this.handleDropDown();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  handleAccordion() {
    const e = this.DOM.el.querySelectorAll(".about-mission-item-title"),
      t = this.DOM.el.querySelectorAll(".about-mission-img"),
      r = (n) => {
        t.forEach((s, o) => {
          n === o
            ? C.fromTo(
                s,
                { scale: 1.1, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.5,
                  ease: "power3.out",
                  overwrite: "auto",
                }
              )
            : C.to(s, {
                scale: 0.9,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                overwrite: "auto",
              });
        });
      };
    r(0),
      e.forEach((n, s) => {
        const o = () => {
          r(s);
        };
        n == null || n.addEventListener("click", o),
          this.accordionHandlers.set(n, o);
      });
  }
  slideValues() {
    Et() ||
      this.emblaSlides.push(
        new Ne({
          classSlide: ".about-values-container",
          idBtnPrev: "btn-about-prev",
          idBtnNext: "btn-about-next",
          wrapElement: this.DOM.el,
        })
      );
  }
  slidePeople() {
    ea() &&
      this.emblaSlides.push(
        new Ne({
          classSlide: ".about-people-slide",
          idBtnPrev: "btn-about-people-prev",
          idBtnNext: "btn-about-people-next",
          wrapElement: this.DOM.el,
        })
      );
  }
  handleOpenModalMember() {
    this.DOM.el.querySelectorAll(".member").forEach((t) => {
      const r = () => {
        var o, a;
        const n = t.querySelector(".member-inner-avatar img");
        new bf(this.DOM.el, {
          avatar: n.getAttribute("src") || "",
          name: t.getAttribute("data-name") || "",
          role: t.getAttribute("data-role") || "",
          location: t.getAttribute("data-location") || "",
          description: t.getAttribute("data-desc") || "",
          linked:
            ((o = t.querySelector("#member-linked")) == null
              ? void 0
              : o.getAttribute("href")) || "",
          personal_link:
            ((a = t.querySelector("#member-personal-link")) == null
              ? void 0
              : a.getAttribute("href")) || "",
        }).showModal();
      };
      t.addEventListener("click", r), this.modalDetailMemberHandlers.set(t, r);
    });
  }
  updateSlideLength(e, t) {
    const r = this.DOM.el.querySelector(e);
    if (!r) return;
    const n = r.querySelectorAll(t);
    if (!n) return;
    const s = n.length;
    console.log("emblaNode", r),
      r.style.setProperty("--slide-count", s.toString());
  }
  handleDropDown() {
    const e = this.DOM.el.querySelector(".about-filter"),
      t = this.DOM.el.querySelector(".about-filter-trigger"),
      r = this.DOM.el.querySelector(".about-filter-dropdown"),
      n = this.DOM.el.querySelector(".about-people-form-dropdown-trigger"),
      s = this.DOM.el.querySelectorAll(".about-filter-dropdown-item");
    if (!t || !r) return;
    this.navTimeout &&
      (clearTimeout(this.navTimeout), (this.navTimeout = null)),
      (this.navTimeout = setTimeout(() => {
        this.DOM.el.querySelectorAll(".btn-nav-count").forEach((l) => {
          var d;
          const c = () => {
            ge.lenis.scrollTo(0, { offset: 100, duration: 1 });
          };
          l.addEventListener("click", c),
            (d = this.filterHandlers.navs) == null || d.set(l, c);
        });
      }, 1e3)),
      (this.filterHandlers.trigger = () => {
        r.classList.contains("active")
          ? (r.classList.remove("active"),
            t == null || t.classList.remove("active"))
          : (r.classList.add("active"), t == null || t.classList.add("active"));
      }),
      (this.filterHandlers.mouseEnter = () => {
        r.classList.add("active"), t == null || t.classList.add("active");
      }),
      (this.filterHandlers.mouseLeave = () => {
        r.classList.remove("active"), t == null || t.classList.remove("active");
      }),
      t &&
        this.filterHandlers.trigger &&
        t.removeEventListener("click", this.filterHandlers.trigger),
      t == null || t.addEventListener("click", this.filterHandlers.trigger),
      e &&
        this.filterHandlers.mouseEnter &&
        e.removeEventListener("mouseenter", this.filterHandlers.mouseEnter),
      e == null ||
        e.addEventListener("mouseenter", this.filterHandlers.mouseEnter),
      e &&
        this.filterHandlers.mouseLeave &&
        e.removeEventListener("mouseleave", this.filterHandlers.mouseLeave),
      e == null ||
        e.addEventListener("mouseleave", this.filterHandlers.mouseLeave),
      s.forEach((a) => {
        var c;
        const l = () => {
          const h = a.querySelector("input").getAttribute("data-text-value");
          h ? (n.textContent = h) : (n.textContent = "All"),
            r.classList.remove("active"),
            t == null || t.classList.remove("active");
        };
        a.addEventListener("click", l),
          (c = this.filterHandlers.items) == null || c.set(a, l);
      });
    const o = () => {
      r.classList.remove("active"), t == null || t.classList.remove("active");
    };
    (this.clickOutsideHandlers.mousedown = (a) => {
      !r || r.contains(a.target) || o();
    }),
      (this.clickOutsideHandlers.touchstart = (a) => {
        !r || r.contains(a.target) || o();
      }),
      document.addEventListener(
        "mousedown",
        this.clickOutsideHandlers.mousedown,
        { passive: !0 }
      ),
      document.addEventListener(
        "touchstart",
        this.clickOutsideHandlers.touchstart,
        { passive: !0 }
      );
  }
  destroy() {
    var r, n, s, o, a, l;
    this.navTimeout &&
      (clearTimeout(this.navTimeout), (this.navTimeout = null)),
      this.emblaSlides.forEach((c) => {
        c && typeof c.destroy == "function" && c.destroy();
      }),
      (this.emblaSlides = []),
      this.accordionHandlers.forEach((c, d) => {
        try {
          d && d.parentNode && d.removeEventListener("click", c);
        } catch {}
      }),
      this.accordionHandlers.clear(),
      this.modalDetailMemberHandlers.forEach((c, d) => {
        try {
          d && d.parentNode && d.removeEventListener("click", c);
        } catch {}
      }),
      this.modalDetailMemberHandlers.clear();
    const e =
        (r = this.DOM.el) == null
          ? void 0
          : r.querySelector(".about-filter-trigger"),
      t = (n = this.DOM.el) == null ? void 0 : n.querySelector(".about-filter");
    if (e && this.filterHandlers.trigger) {
      try {
        e.removeEventListener("click", this.filterHandlers.trigger);
      } catch {}
      this.filterHandlers.trigger = void 0;
    }
    if (t && this.filterHandlers.mouseEnter) {
      try {
        t.removeEventListener("mouseenter", this.filterHandlers.mouseEnter);
      } catch {}
      this.filterHandlers.mouseEnter = void 0;
    }
    if (t && this.filterHandlers.mouseLeave) {
      try {
        t.removeEventListener("mouseleave", this.filterHandlers.mouseLeave);
      } catch {}
      this.filterHandlers.mouseLeave = void 0;
    }
    if (
      ((s = this.filterHandlers.items) == null ||
        s.forEach((c, d) => {
          try {
            d && d.parentNode && d.removeEventListener("click", c);
          } catch {}
        }),
      (o = this.filterHandlers.items) == null || o.clear(),
      (a = this.filterHandlers.navs) == null ||
        a.forEach((c, d) => {
          try {
            d && d.parentNode && d.removeEventListener("click", c);
          } catch {}
        }),
      (l = this.filterHandlers.navs) == null || l.clear(),
      this.clickOutsideHandlers.mousedown &&
        (document.removeEventListener(
          "mousedown",
          this.clickOutsideHandlers.mousedown
        ),
        (this.clickOutsideHandlers.mousedown = void 0)),
      this.clickOutsideHandlers.touchstart &&
        (document.removeEventListener(
          "touchstart",
          this.clickOutsideHandlers.touchstart
        ),
        (this.clickOutsideHandlers.touchstart = void 0)),
      this.DOM.el)
    )
      try {
        C.killTweensOf(this.DOM.el);
        const c = this.DOM.el.querySelectorAll("*");
        c.length && C.killTweensOf(c);
      } catch {}
    (this.filterHandlers = { items: new Map(), navs: new Map() }),
      (this.clickOutsideHandlers = {});
  }
}
const Vd = [
  { value: "AL", text: "Albania" },
  { value: "AR", text: "Argentina" },
  { value: "AU", text: "Australia" },
  { value: "AT", text: "Austria" },
  { value: "BS", text: "Bahamas" },
  { value: "BY", text: "Belarus" },
  { value: "BE", text: "Belgium" },
  { value: "BZ", text: "Belize" },
  { value: "BM", text: "Bermuda" },
  { value: "BO", text: "Bolivia" },
  { value: "BR", text: "Brazil" },
  { value: "BN", text: "Brunei" },
  { value: "BG", text: "Bulgaria" },
  { value: "KH", text: "Cambodia" },
  { value: "CA", text: "Canada" },
  { value: "KY", text: "Cayman Islands" },
  { value: "CL", text: "Chile" },
  { value: "CN", text: "China" },
  { value: "CO", text: "Colombia" },
  { value: "CR", text: "Costa Rica" },
  { value: "HR", text: "Croatia" },
  { value: "CY", text: "Cyprus" },
  { value: "CZ", text: "Czech Republic" },
  { value: "DK", text: "Denmark" },
  { value: "DO", text: "Dominican Republic" },
  { value: "SV", text: "El Salvador" },
  { value: "FI", text: "Finland" },
  { value: "FR", text: "France" },
  { value: "PF", text: "French Polynesia" },
  { value: "GA", text: "Gabon" },
  { value: "GE", text: "Georgia" },
  { value: "DE", text: "Germany" },
  { value: "GR", text: "Greece" },
  { value: "GU", text: "Guam" },
  { value: "GT", text: "Guatemala" },
  { value: "HN", text: "Honduras" },
  { value: "HK", text: "Hong Kong" },
  { value: "HU", text: "Hungary" },
  { value: "IS", text: "Iceland" },
  { value: "IN", text: "India" },
  { value: "ID", text: "Indonesia" },
  { value: "IE", text: "Ireland" },
  { value: "IL", text: "Israel" },
  { value: "IT", text: "Italy" },
  { value: "JP", text: "Japan" },
  { value: "KE", text: "Kenya" },
  { value: "KR", text: "Korea" },
  { value: "KW", text: "Kuwait" },
  { value: "LV", text: "Latvia" },
  { value: "LB", text: "Lebanon" },
  { value: "LI", text: "Liechtenstein" },
  { value: "LU", text: "Luxembourg" },
  { value: "MG", text: "Madagascar" },
  { value: "MY", text: "Malaysia" },
  { value: "MT", text: "Malta" },
  { value: "MR", text: "Mauritania" },
  { value: "MX", text: "Mexico" },
  { value: "MD", text: "Moldova" },
  { value: "MC", text: "Monaco" },
  { value: "ME", text: "Montenegro" },
  { value: "MA", text: "Morocco" },
  { value: "MM", text: "Myanmar" },
  { value: "NL", text: "Netherlands" },
  { value: "NC", text: "New Caledonia" },
  { value: "NZ", text: "New Zealand" },
  { value: "NO", text: "Norway" },
  { value: "PA", text: "Panama" },
  { value: "PY", text: "Paraguay" },
  { value: "PE", text: "Peru" },
  { value: "PH", text: "Philippines" },
  { value: "PL", text: "Poland" },
  { value: "PT", text: "Portugal" },
  { value: "PR", text: "Puerto Rico" },
  { value: "RO", text: "Romania" },
  { value: "SA", text: "Saudi Arabia" },
  { value: "SN", text: "Senegal" },
  { value: "RS", text: "Serbia" },
  { value: "SG", text: "Singapore" },
  { value: "SK", text: "Slovakia" },
  { value: "SI", text: "Slovenia" },
  { value: "ZA", text: "South Africa" },
  { value: "ES", text: "Spain" },
  { value: "SD", text: "Sudan" },
  { value: "SZ", text: "Swaziland" },
  { value: "SE", text: "Sweden" },
  { value: "CH", text: "Switzerland" },
  { value: "TW", text: "Taiwan" },
  { value: "TH", text: "Thailand" },
  { value: "TR", text: "Turkey" },
  { value: "AE", text: "United Arab Emirates" },
  { value: "GB", text: "United Kingdom" },
  { value: "US", text: "United States" },
];
class j2 {
  constructor(e) {
    _(this, "DOM");
    _(this, "formSubmit", null);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.initSelectCountry(), this.initForm();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  initSelectCountry() {
    const e = this.DOM.el.querySelector('[data-name="countryCode"]');
    e &&
      (Vd.forEach((t) => {
        const r = document.createElement("option");
        (r.value = t.value),
          (r.textContent = t.text),
          t.value === "US" && (r.selected = !0),
          e.appendChild(r);
      }),
      console.log(Vd));
  }
  initForm() {
    const e = this.DOM.el.querySelector("#wf-form-contact-form");
    e &&
      ((this.formSubmit = new Ps(e)),
      this.formSubmit.setSubmitHandler((t, r, n) =>
        this.handleSubmitResult(t, n)
      ));
  }
  async handleSubmitResult(e, t) {
    if (e.success.status)
      try {
        console.log("submit contact payload", t);
        const r = JSON.stringify({
            ...t,
            isSubscribe: t.isSubscribed === "on",
          }),
          n = await fetch(
            "https://global-api.commerce7.com/v1/sales-site/contact-us",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: r,
            }
          );
        if (!n.ok) {
          let s = "API request failed";
          try {
            const o = await n.json();
            if (
              o.message &&
              ((s = o.message),
              o.errors && Array.isArray(o.errors) && o.errors.length > 0)
            ) {
              const a = o.errors
                .map((l) => `${l.field}: ${l.message}`)
                .join(", ");
              s += `: ${a}`;
            }
          } catch {
            s = n.statusText || s;
          }
          throw new Error(s);
        }
      } catch (r) {
        throw (console.error("Failed to submit contact form", r), r);
      }
  }
  destroy() {
    this.formSubmit && (this.formSubmit.destroy(), (this.formSubmit = null)),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
const Y2 = {
  direction: "forward",
  speed: 2,
  startDelay: 1e3,
  active: !0,
  breakpoints: {},
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  rootNode: null,
};
function X2(i, e) {
  const t = i.rootNode();
  return (e && e(t)) || t;
}
function dc(i = {}) {
  let e,
    t,
    r,
    n,
    s = 0,
    o = !1,
    a = !1,
    l;
  function c(D, x) {
    t = D;
    const { mergeOptions: L, optionsAtMedia: w } = x,
      P = L(Y2, dc.globalOptions),
      k = L(P, i);
    if (((e = w(k)), t.scrollSnapList().length <= 1)) return;
    (n = e.startDelay), (r = !1), (l = t.internalEngine().scrollBody);
    const { eventStore: R } = t.internalEngine(),
      I = !!t.internalEngine().options.watchDrag,
      N = X2(t, e.rootNode);
    I && t.on("pointerDown", p),
      I && !e.stopOnInteraction && t.on("pointerUp", m),
      e.stopOnMouseEnter && R.add(N, "mouseenter", g),
      e.stopOnMouseEnter && !e.stopOnInteraction && R.add(N, "mouseleave", y),
      e.stopOnFocusIn && t.on("slideFocusStart", u),
      e.stopOnFocusIn &&
        !e.stopOnInteraction &&
        R.add(t.containerNode(), "focusout", h),
      e.playOnInit && h();
  }
  function d() {
    t
      .off("pointerDown", p)
      .off("pointerUp", m)
      .off("slideFocusStart", u)
      .off("settle", v),
      u(),
      (r = !0),
      (o = !1);
  }
  function h() {
    if (r || o) return;
    t.emit("autoScroll:play");
    const D = t.internalEngine(),
      { ownerWindow: x } = D;
    (s = x.setTimeout(() => {
      (D.scrollBody = f(D)), D.animation.start();
    }, n)),
      (o = !0);
  }
  function u() {
    if (r || !o) return;
    t.emit("autoScroll:stop");
    const D = t.internalEngine(),
      { ownerWindow: x } = D;
    (D.scrollBody = l), x.clearTimeout(s), (s = 0), (o = !1);
  }
  function f(D) {
    const {
        location: x,
        previousLocation: L,
        offsetLocation: w,
        target: P,
        scrollTarget: k,
        index: R,
        indexPrevious: I,
        limit: { reachedMin: N, reachedMax: q, constrain: F },
        options: { loop: M },
      } = D,
      j = e.direction === "forward" ? -1 : 1,
      ne = () => fe;
    let ue = 0,
      oe = 0,
      ve = x.get(),
      Ee = 0,
      ie = !1;
    function de() {
      let Te = 0;
      L.set(x),
        (ue = j * e.speed),
        (ve += ue),
        x.add(ue),
        P.set(x),
        (Te = ve - Ee),
        (oe = Math.sign(Te)),
        (Ee = ve);
      const Z = k.byDistance(0, !1).index;
      R.get() !== Z && (I.set(R.get()), R.set(Z), t.emit("select"));
      const B = e.direction === "forward" ? N(w.get()) : q(w.get());
      if (!M && B) {
        ie = !0;
        const G = F(x.get());
        x.set(G), P.set(x), u();
      }
      return fe;
    }
    const fe = {
      direction: () => oe,
      duration: () => -1,
      velocity: () => ue,
      settled: () => ie,
      seek: de,
      useBaseFriction: ne,
      useBaseDuration: ne,
      useFriction: ne,
      useDuration: ne,
    };
    return fe;
  }
  function p() {
    a || u();
  }
  function m() {
    a || b();
  }
  function g() {
    (a = !0), u();
  }
  function y() {
    (a = !1), h();
  }
  function v() {
    t.off("settle", v), h();
  }
  function b() {
    t.on("settle", v);
  }
  function $(D) {
    typeof D < "u" && (n = D), h();
  }
  function E() {
    o && u();
  }
  function T() {
    o && (u(), b());
  }
  function S() {
    return o;
  }
  return {
    name: "autoScroll",
    options: i,
    init: c,
    destroy: d,
    play: $,
    stop: E,
    reset: T,
    isPlaying: S,
  };
}
dc.globalOptions = void 0;
class oa {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaApi", null);
    (this.DOM = { el: e }), this.init(), be(this.clear.bind(this));
  }
  init() {
    this.cloneSlide(), this.appendSlide(this.DOM.el);
  }
  appendSlide(e) {
    this.emblaApi = Gs(
      e,
      {
        align: "start",
        skipSnaps: !1,
        loop: !0,
        dragFree: !0,
        containScroll: !1,
        watchDrag: !1,
      },
      [
        dc({
          stopOnInteraction: !1,
          stopOnFocusIn: !1,
          stopOnMouseEnter: !1,
          speed: 1,
        }),
      ]
    );
  }
  cloneSlide() {
    const e = this.DOM.el.querySelectorAll(".sc-marquee-grs-item"),
      t = this.DOM.el.querySelector(".sc-marquee-grs-inner");
    e.forEach((r) => {
      const n = r.cloneNode(!0);
      t.appendChild(n);
    });
  }
  clear() {
    this.emblaApi && (this.emblaApi.destroy(), (this.emblaApi = null));
  }
}
let K2 = class {
  constructor(e) {
    _(this, "DOM");
    _(this, "memberHandlers", new Map());
    _(this, "shareSocialHandlers", new Map());
    _(this, "copyUrlHandler", null);
    _(this, "modalHandlers", {});
    _(this, "countdownInterval", null);
    _(this, "btnSubscribeHandler", null);
    _(this, "emblaSlides", []);
    _(this, "formSubmit", null);
    _(this, "formRegisterSubmit", null);
    _(this, "countdownCounters", {});
    _(this, "countdownAnimationComplete", !1);
    _(this, "countdownObserver", null);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.emblaSlides.push(
      new Ne({
        classSlide: ".embla-event-slide",
        idBtnPrev: "btn-event-prev",
        idBtnNext: "btn-event-next",
        wrapElement: this.DOM.el,
      })
    );
    const e = this.DOM.el.querySelector(".event-marquee-grs");
    e && new oa(e),
      this.handleOpenModalMember(),
      this.handleSlidePeople(),
      this.updateSlideLength(
        ".embla__event__container",
        ".embla__event__slide"
      ),
      this.copyCurrentUrl(),
      this.handleCountDownTimeStart(),
      this.handleOpenSubscribeModal(),
      this.checkCountMemberTimeline(),
      this.initFormHero(),
      this.initFormRegister(),
      this.handleShareSocial();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  handleOpenModalMember() {
    this.DOM.el.querySelectorAll(".member").forEach((t) => {
      const r = () => {
        var o, a;
        const n = t.querySelector(".member-inner-avatar img");
        new bf(this.DOM.el, {
          avatar: n.getAttribute("src") || "",
          name: t.getAttribute("data-name") || "",
          role: t.getAttribute("data-role") || "",
          location: t.getAttribute("data-location") || "",
          description: t.getAttribute("data-desc") || "",
          linked:
            ((o = t.querySelector("#member-linked")) == null
              ? void 0
              : o.getAttribute("href")) || "",
          personal_link:
            ((a = t.querySelector("#member-personal-link")) == null
              ? void 0
              : a.getAttribute("href")) || "",
        }).showModal();
      };
      t.addEventListener("click", r), this.memberHandlers.set(t, r);
    });
  }
  handleSlidePeople() {
    ea() &&
      (this.updateSlideLength(".event-people-main", ".event-people-item"),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".event-people-main-wrap",
          wrapElement: this.DOM.el,
        })
      ));
  }
  updateSlideLength(e, t) {
    const r = document.querySelector(e);
    if (!r) return;
    const n = r.querySelectorAll(t);
    if (!n) return;
    const s = n.length;
    r.style && r.style.setProperty("--slide-count", s.toString());
  }
  copyCurrentUrl() {
    const e = window.location.href,
      t = this.DOM.el.querySelector("#btn-copy-url");
    t &&
      ((this.copyUrlHandler = () => {
        navigator.clipboard.writeText(e).then(() => {
          Bh.success("Link copied", {
            description: "The event link has been copied to your clipboard.",
            duration: 2e3,
          });
        });
      }),
      t.addEventListener("click", this.copyUrlHandler));
  }
  handleCountDownTimeStart() {
    const e = this.DOM.el.querySelector(".event-countdown-inner-time");
    if (!e) return;
    const t = e.getAttribute("data-time-start") || "";
    function r(p) {
      const m = p.match(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/);
      if (!m) return null;
      const [, g, y, v, b, $] = m;
      return new Date(
        Number(v),
        Number(y) - 1,
        Number(g),
        Number(b),
        Number($),
        0
      );
    }
    const n = e.querySelector("#time-start-day"),
      s = e.querySelector("#time-start-hour"),
      o = e.querySelector("#time-start-minute");
    if (!n || !s || !o) return;
    const a = r(t);
    if (!a) return;
    const l = new Date();
    let c = a.getTime() - l.getTime();
    c < 0 && (c = 0);
    const d = Math.floor(c / (1e3 * 60 * 60 * 24)),
      h = Math.floor((c / (1e3 * 60 * 60)) % 24),
      u = Math.floor((c / (1e3 * 60)) % 60);
    (n.textContent = String(d).padStart(2, "0")),
      (s.textContent = String(h).padStart(2, "0")),
      (o.textContent = String(u).padStart(2, "0")),
      (this.countdownCounters.days = new hs(n)),
      (this.countdownCounters.hours = new hs(s)),
      (this.countdownCounters.minutes = new hs(o));
    let f = !1;
    (this.countdownObserver = new IntersectionObserver(
      (p) => {
        p.forEach((m) => {
          m.isIntersecting &&
            !f &&
            !this.countdownAnimationComplete &&
            ((f = !0),
            setTimeout(() => {
              this.countdownAnimationComplete ||
                ((this.countdownAnimationComplete = !0),
                this.startCountdownInterval(a)),
                this.countdownObserver &&
                  (this.countdownObserver.disconnect(),
                  (this.countdownObserver = null));
            }, 3e3));
        });
      },
      { threshold: 0.1 }
    )),
      this.countdownObserver.observe(e);
  }
  startCountdownInterval(e) {
    const t = () => {
      const r = new Date();
      let n = e.getTime() - r.getTime();
      n < 0 && (n = 0);
      const s = Math.floor(n / (1e3 * 60 * 60 * 24)),
        o = Math.floor((n / (1e3 * 60 * 60)) % 24),
        a = Math.floor((n / (1e3 * 60)) % 60),
        l = parseInt(String(s).padStart(3, "0")),
        c = parseInt(String(o).padStart(3, "0")),
        d = parseInt(String(a).padStart(3, "0"));
      if (
        (this.countdownCounters.days &&
          this.countdownCounters.days.animateNumber(l),
        this.countdownCounters.hours &&
          this.countdownCounters.hours.animateNumber(c),
        this.countdownCounters.minutes &&
          this.countdownCounters.minutes.animateNumber(d),
        e)
      ) {
        const h = new Date();
        e.getTime() - h.getTime() <= 0 &&
          this.countdownInterval &&
          clearInterval(this.countdownInterval);
      }
    };
    t(),
      (this.countdownInterval = setInterval(() => {
        t();
      }, 1e3));
  }
  handleOpenSubscribeModal() {
    const e = this.DOM.el.querySelector(".event-hero-btn"),
      t = this.DOM.el.querySelector(".event-sub-modal"),
      r = this.DOM.el.querySelector(".event-sub-modal-overlay"),
      n = this.DOM.el.querySelector(".event-sub-modal-content-close");
    if (!e || !t || !r || !n) return;
    const s = () => {
      t.classList.remove("active"), ge.enabled();
    };
    (this.modalHandlers.overlay = s),
      (this.modalHandlers.close = s),
      r.addEventListener("click", s),
      n == null || n.addEventListener("click", s),
      (this.btnSubscribeHandler = () => {
        t.classList.add("active"), ge.disabled();
      }),
      e.addEventListener("click", this.btnSubscribeHandler);
  }
  checkCountMemberTimeline() {
    this.DOM.el
      .querySelector(".event-agenda")
      .querySelectorAll(".event-agenda-item")
      .forEach((r) => {
        if (
          r.querySelectorAll(".event-agenda-item-people-avatar").length === 0
        ) {
          const s = r.querySelector(".event-agenda-item-people-collection");
          s && (s.style.display = "none");
        }
      });
  }
  initFormHero() {
    const e = this.DOM.el.querySelector("#wf-form-Event-Register-Form");
    e &&
      ((this.formSubmit = new Ps(e)),
      this.formSubmit.setSubmitHandler(async (t, r, n) => {
        t.success.status &&
          (console.log("validate result hero", t.success.status),
          console.log("submit hero payload", n),
          this.showSuccessModal());
      }));
  }
  initFormRegister() {
    const e = this.DOM.el.querySelector("#wf-form-Event-Join-Form");
    e &&
      ((this.formRegisterSubmit = new Ps(e)),
      this.formRegisterSubmit.setSubmitHandler(async (t, r, n) => {
        t.success.status &&
          (console.log("validate result register", t.success.status),
          console.log("submit register payload", n));
      }));
  }
  handleShareSocial() {
    this.DOM.el.querySelectorAll("[data-share]").forEach((t) => {
      const r = () => {
        const n = encodeURIComponent(window.location.href),
          s = encodeURIComponent(document.title),
          o = t.getAttribute("data-share");
        if (!o) return;
        const a = o;
        let l = "";
        switch (a) {
          case "facebook":
            l = `https://www.facebook.com/sharer/sharer.php?u=${n}`;
            break;
          case "linkedin":
            l = `https://www.linkedin.com/shareArticle?mini=true&url=${n}&title=${s}`;
            break;
          case "whatsapp":
            l = `https://api.whatsapp.com/send?text=${s}%20${n}`;
            break;
          case "email":
            l = `mailto:?subject=${s}&body=Check this out: ${n}`;
            break;
          default:
            console.warn(`Platform "${a}" is not supported.`);
            return;
        }
        a === "email"
          ? (window.location.href = l)
          : window.open(l, "share-dialog", "width=600,height=400");
      };
      t.addEventListener("click", r), this.shareSocialHandlers.set(t, r);
    });
  }
  showSuccessModal() {
    const e = this.DOM.el.querySelectorAll(".event-form-right-success");
    e != null &&
      e.length &&
      e.forEach((t) => {
        t.classList.remove("hidden");
      });
  }
  clearSuccessModal() {
    const e = this.DOM.el.querySelectorAll(".event-form-right-success");
    e != null &&
      e.length &&
      e.forEach((t) => {
        t.classList.add("hidden");
      });
  }
  destroy() {
    this.clearSuccessModal(),
      this.emblaSlides.forEach((s) => {
        s && typeof s.destroy == "function" && s.destroy();
      }),
      (this.emblaSlides = []),
      this.memberHandlers.forEach((s, o) => {
        o.removeEventListener("click", s);
      }),
      this.memberHandlers.clear(),
      this.shareSocialHandlers.forEach((s, o) => {
        o.removeEventListener("click", s);
      }),
      this.shareSocialHandlers.clear();
    const e = this.DOM.el.querySelector("#btn-copy-url");
    e &&
      this.copyUrlHandler &&
      (e.removeEventListener("click", this.copyUrlHandler),
      (this.copyUrlHandler = null));
    const t = this.DOM.el.querySelector(".event-sub-modal-overlay"),
      r = this.DOM.el.querySelector(".event-sub-modal-content-close"),
      n = this.DOM.el.querySelector(".event-hero-btn");
    t &&
      this.modalHandlers.overlay &&
      t.removeEventListener("click", this.modalHandlers.overlay),
      r &&
        this.modalHandlers.close &&
        r.removeEventListener("click", this.modalHandlers.close),
      n &&
        this.btnSubscribeHandler &&
        (n.removeEventListener("click", this.btnSubscribeHandler),
        (this.btnSubscribeHandler = null)),
      this.countdownInterval &&
        (clearInterval(this.countdownInterval),
        (this.countdownInterval = null)),
      this.countdownObserver &&
        (this.countdownObserver.disconnect(), (this.countdownObserver = null)),
      this.countdownCounters.days &&
        (this.countdownCounters.days.clear(),
        (this.countdownCounters.days = void 0)),
      this.countdownCounters.hours &&
        (this.countdownCounters.hours.clear(),
        (this.countdownCounters.hours = void 0)),
      this.countdownCounters.seconds &&
        (this.countdownCounters.seconds.clear(),
        (this.countdownCounters.seconds = void 0)),
      (this.countdownAnimationComplete = !1),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*")),
      this.formSubmit && (this.formSubmit.destroy(), (this.formSubmit = null)),
      this.formRegisterSubmit &&
        (this.formRegisterSubmit.destroy(), (this.formRegisterSubmit = null));
  }
};
const Ca = 600;
class Z2 {
  constructor(e) {
    _(this, "DOM");
    _(this, "feedbackEmblaApi", null);
    _(this, "listItem", []);
    _(this, "listItemSave", []);
    _(this, "elements", {});
    _(this, "throttledScrollPrev", null);
    _(this, "throttledScrollNext", null);
    _(this, "throttledSelectCountry", null);
    _(this, "animationList", []);
    _(this, "sectionObserver", null);
    _(this, "hasTriggeredInitialAnimation", !1);
    _(this, "carouselSelectHandler", null);
    _(this, "config", {
      selectors: {
        feedbackWrap: ".home-feedback",
        dropdown: ".dropdown",
        trigger: ".home-feedback-nav",
        dropdownLabel: "[data-dropdown-current]",
        emblaNode: ".embla-feedback",
        prevBtn: "prev",
        nextBtn: "next",
        wrapperFeedback: ".home-feedback-main-inner",
        feedbackItem: ".home-feedback-item",
        dropdownInner: ".dropdowon-inner-grid",
      },
      emblaConfig: { align: "center", loop: !0, watchDrag: !1 },
    });
    (this.DOM = { el: e }), this.initThrottledFunctions();
  }
  initThrottledFunctions() {
    (this.throttledScrollPrev = this.throttle(() => {
      this.feedbackEmblaApi && this.feedbackEmblaApi.scrollPrev(!0);
    }, Ca)),
      (this.throttledScrollNext = this.throttle(() => {
        this.feedbackEmblaApi && this.feedbackEmblaApi.scrollNext(!0);
      }, Ca)),
      (this.throttledSelectCountry = this.throttle((e, t, r, n) => {
        this.selectCountry(e, t, r, n);
      }, Ca));
  }
  throttle(e, t) {
    let r = 0;
    return (...n) => {
      const s = Date.now();
      s - r >= t && ((r = s), e(...n));
    };
  }
  init() {
    try {
      this.cacheElements(), this.handleFeedback();
    } catch {}
  }
  cacheElements() {
    const { selectors: e } = this.config;
    this.elements = {
      feedbackWrap: this.DOM.el.querySelector(e.feedbackWrap),
      dropdownMain: this.DOM.el.querySelector(e.dropdown),
      trigger: this.DOM.el.querySelector(e.trigger),
      dropdownLabel: this.DOM.el.querySelector(e.dropdownLabel),
      emblaNode: this.DOM.el.querySelector(e.emblaNode),
      prevBtn: document.getElementById(e.prevBtn),
      nextBtn: document.getElementById(e.nextBtn),
      wrapperFeedback: this.DOM.el.querySelector(e.wrapperFeedback),
    };
  }
  handleFeedback() {
    this.validateElements() &&
      (this.initDropdown(),
      this.bindDropdownEvents(),
      this.activateFirstCountry(),
      this.initCarousel(),
      this.effectActiveItem(),
      this.setupSectionObserver());
  }
  validateElements() {
    return !(
      [
        "feedbackWrap",
        "dropdownMain",
        "trigger",
        "dropdownLabel",
        "wrapperFeedback",
      ].filter((r) => !this.elements[r]).length > 0
    );
  }
  initDropdown() {
    const { feedbackWrap: e, dropdownLabel: t } = this.elements;
    if (!e || !t) return;
    const r = e.querySelectorAll(this.config.selectors.feedbackItem),
      n = this.buildDropdownData(r);
    (this.listItem = Array.from(r)),
      (this.listItemSave = [...this.listItem]),
      this.renderDropdownItems(n);
  }
  buildDropdownData(e) {
    const t = new Map();
    return (
      e.forEach((r) => {
        const n = r.getAttribute("data-country");
        n && t.set(n, r.innerHTML);
      }),
      t
    );
  }
  renderDropdownItems(e) {
    var r;
    const t = this.DOM.el.querySelector(this.config.selectors.dropdownInner);
    t &&
      (e.forEach((n, s) => {
        const o = this.createDropdownItem(s, n);
        t.appendChild(o);
      }),
      (r = t.firstChild) == null || r.remove());
  }
  createDropdownItem(e, t) {
    const r = document.createElement("div");
    return (
      (r.innerHTML = t),
      r.classList.add("dropdown-inner-item"),
      r.setAttribute("data-country", e),
      (r.textContent = e),
      r
    );
  }
  bindDropdownEvents() {
    const { trigger: e, dropdownMain: t, dropdownLabel: r } = this.elements;
    !e ||
      !t ||
      !r ||
      (this.bindTriggerEvents(e, t),
      this.bindDropdownItemEvents(t, r),
      this.bindClickOutsideEvents(e, t));
  }
  bindTriggerEvents(e, t) {
    e.addEventListener("click", () => {
      e.classList.add("is-active"), t.classList.add("is-active");
    });
  }
  bindDropdownItemEvents(e, t) {
    this.DOM.el.querySelectorAll(".dropdown-inner-item").forEach((n) => {
      n.addEventListener("click", (s) => {
        s.preventDefault(), s.stopPropagation();
        const o = n.getAttribute("data-country");
        !o ||
          !this.throttledSelectCountry ||
          this.throttledSelectCountry(o, n, e, t);
      });
    });
  }
  selectCountry(e, t, r, n) {
    this.DOM.el.querySelectorAll(".dropdown-inner-item").forEach((s) => {
      s.classList.remove("is-active");
    }),
      t.classList.add("is-active"),
      this.updateCarouselForCountry(e),
      (n.textContent = e),
      this.closeDropdown(r);
  }
  bindClickOutsideEvents(e, t) {
    Dh({ element: e, action: () => this.closeDropdown(t) });
  }
  closeDropdown(e) {
    const { trigger: t } = this.elements;
    t && (e.classList.remove("is-active"), t.classList.remove("is-active"));
  }
  updateCarouselForCountry(e) {
    var s;
    const { wrapperFeedback: t } = this.elements;
    if (!t) return;
    const r =
      ((s = this.feedbackEmblaApi) == null ? void 0 : s.selectedScrollSnap()) ??
      0;
    !!this.feedbackEmblaApi &&
    this.animationList.length > 0 &&
    this.animationList[r]
      ? this.animateSlideOut(r, void 0, () => {
          this.performCountryUpdate(e, t);
        })
      : this.performCountryUpdate(e, t);
  }
  performCountryUpdate(e, t) {
    this.killGsapSlideFeedback(),
      this.cleanupCarouselEvents(),
      this.cleanupAnimationInstances(),
      this.clearCurrentItems(),
      this.addItemsForCountry(e, t),
      this.initCarousel(),
      this.effectActiveItem(),
      this.hasTriggeredInitialAnimation && this.triggerFirstSlideAnimation();
  }
  clearCurrentItems() {
    this.listItem.forEach((e) => {
      e.remove();
    });
  }
  addItemsForCountry(e, t) {
    this.listItemSave
      .filter((r) => r.getAttribute("data-country") === e)
      .forEach((r) => t.appendChild(r));
  }
  activateFirstCountry() {
    if (this.listItemSave.length === 0) return;
    const t = this.listItemSave[0].getAttribute("data-country");
    t && this.setActiveCountry(t);
  }
  setActiveCountry(e) {
    const { dropdownLabel: t } = this.elements;
    if (!t) return;
    t.textContent = e;
    const r = this.DOM.el.querySelector(`[data-country="${e}"]`);
    r && r.classList.add("is-active");
  }
  initCarousel() {
    const { emblaNode: e, prevBtn: t, nextBtn: r } = this.elements;
    this.validateCarouselElements(e, t, r) &&
      (this.destroyExistingCarousel(), this.createCarousel(e, t, r));
  }
  validateCarouselElements(e, t, r) {
    return !(!e || !t || !r);
  }
  destroyExistingCarousel() {
    this.cleanupCarouselEvents(),
      this.feedbackEmblaApi &&
        (this.feedbackEmblaApi.destroy(), (this.feedbackEmblaApi = null));
  }
  cleanupCarouselEvents() {
    this.feedbackEmblaApi &&
      this.carouselSelectHandler &&
      (this.feedbackEmblaApi.off("select", this.carouselSelectHandler),
      (this.carouselSelectHandler = null));
  }
  createCarousel(e, t, r) {
    const { emblaConfig: n } = this.config,
      s = Gs(e, n);
    this.setupCarouselEvents(s, t, r), (this.feedbackEmblaApi = s);
  }
  setupCarouselEvents(e, t, r) {
    const n = () => {
      t.classList.toggle("disabled", !e.canScrollPrev()),
        r.classList.toggle("disabled", !e.canScrollNext());
    };
    e.on("select", n),
      e.on("reInit", n),
      e.on("init", () => e.reInit()),
      this.throttledScrollPrev &&
        this.throttledScrollNext &&
        (t.addEventListener("click", this.throttledScrollPrev),
        r.addEventListener("click", this.throttledScrollNext)),
      n();
  }
  effectActiveItem({ reInit: e } = {}) {
    var r;
    const t = (r = this.feedbackEmblaApi) == null ? void 0 : r.slideNodes();
    t &&
      (e ||
        (this.cleanupAnimationInstances(),
        this.createAnimationInstances(t),
        this.initAnimationInstances()),
      this.setupCarouselSelectHandler());
  }
  createAnimationInstances(e) {
    (this.animationList = []),
      e.forEach((t) => {
        const r = t.querySelector(".home-feedback-item-user-name .txt"),
          n = t.querySelector(".home-feedback-item-user-position .txt"),
          s = t.querySelector(".home-feedback-item-content-fb .heading"),
          o = t.querySelector(".home-feedback-item-img"),
          a = t.querySelector(".home-feedback-item-user-avatar"),
          l = r ? new fs(r, {}, !0) : null,
          c = n ? new fs(n, {}, !0) : null,
          d = s ? new fs(s, {}, !0) : null,
          h = a || null,
          u = h
            ? new us(
                h,
                {
                  fromTo: {
                    from: { opacity: 0, y: "2rem" },
                    to: { opacity: 1, y: "0px" },
                  },
                },
                !0
              )
            : null,
          f = o || null,
          p = f
            ? new us(
                f,
                {
                  fromTo: {
                    from: { opacity: 0, y: "0px" },
                    to: { opacity: 1, y: "0px" },
                  },
                },
                !0
              )
            : null,
          m = t,
          g = new us(
            m,
            {
              fromTo: {
                from: { opacity: 0, y: "0px" },
                to: { opacity: 1, y: "0px" },
              },
            },
            !0
          );
        this.animationList.push({
          nameMask: l,
          nameEl: r || null,
          positionMask: c,
          positionEl: n || null,
          contentMask: d,
          contentEl: s || null,
          fadeMap: p,
          fadeMapEl: f,
          slideFade: g,
          slideFadeEl: m,
          avatarFade: u,
          avatarEl: h,
        });
      });
  }
  initAnimationInstances() {
    this.animationList.forEach((e) => {
      var t, r, n, s, o, a;
      (t = e.nameMask) == null || t.animInit(),
        (r = e.positionMask) == null || r.animInit(),
        (n = e.contentMask) == null || n.animInit(),
        (s = e.fadeMap) == null || s.animInit(),
        (o = e.slideFade) == null || o.animInit(),
        (a = e.avatarFade) == null || a.animInit();
    });
  }
  animateSlideIn(e) {
    if (!this.animationList[e]) return;
    const {
      nameMask: t,
      positionMask: r,
      contentMask: n,
      fadeMap: s,
      slideFade: o,
      avatarFade: a,
    } = this.animationList[e];
    t == null || t.animInFormTo(),
      r == null || r.animInFormTo(),
      n == null || n.animInFormTo(),
      s == null || s.animInFormTo(),
      o == null || o.animInFormTo(),
      a == null || a.animInFormTo();
  }
  animateSlideOut(e, t, r) {
    if (!this.animationList[e]) {
      r == null || r();
      return;
    }
    const {
      nameMask: n,
      positionMask: s,
      contentMask: o,
      fadeMap: a,
      slideFade: l,
      avatarFade: c,
    } = this.animationList[e];
    if (!n || !s || !o) {
      r == null || r();
      return;
    }
    n.animOut(),
      s.animOut(),
      o.animOut(),
      a == null || a.animOut(),
      c == null || c.animOut({ option: { out: { y: "-2rem" } } }),
      l == null ||
        l.animOut({
          onComplete: () => {
            t !== void 0 && this.animateSlideIn(t), r == null || r();
          },
        });
  }
  setupCarouselSelectHandler() {
    var t;
    const e = (r) => {
      const n = r.selectedScrollSnap(),
        s = r.previousScrollSnap();
      this.animateSlideOut(s, n);
    };
    this.carouselSelectHandler &&
      this.feedbackEmblaApi &&
      this.feedbackEmblaApi.off("select", this.carouselSelectHandler),
      (this.carouselSelectHandler = e),
      (t = this.feedbackEmblaApi) == null || t.on("select", e);
  }
  triggerFirstSlideAnimation() {
    this.animationList.length !== 0 &&
      setTimeout(() => {
        this.animateSlideIn(0);
      }, 100);
  }
  setupSectionObserver() {
    const { feedbackWrap: e } = this.elements;
    if (!e) return;
    const t = { root: null, rootMargin: "0px", threshold: 0.2 };
    (this.sectionObserver = new IntersectionObserver((r) => {
      r.forEach((n) => {
        var s;
        n.isIntersecting &&
          !this.hasTriggeredInitialAnimation &&
          ((this.hasTriggeredInitialAnimation = !0),
          this.triggerFirstSlideAnimation(),
          (s = this.sectionObserver) == null || s.unobserve(n.target));
      });
    }, t)),
      this.sectionObserver.observe(e);
  }
  cleanupAnimationInstances() {
    this.animationList.forEach((e) => {
      e.nameMask && e.nameMask.revert(),
        e.positionMask && e.positionMask.revert(),
        e.contentMask && e.contentMask.revert(),
        e.fadeMap && e.fadeMap.destroy(),
        e.slideFade && e.slideFade.destroy(),
        e.avatarFade && e.avatarFade.destroy();
    }),
      (this.animationList = []);
  }
  killGsapSlideFeedback() {
    const e = this.DOM.el;
    if (!e) return;
    const t = [
        ".home-feedback-item-user-name .txt .line",
        ".home-feedback-item-user-position .txt .line",
        ".home-feedback-item-content-fb .heading .line__mask .line",
        ".home-feedback-item-content-fb .heading .line__mask",
        ".home-feedback-item-user-avatar",
        ".home-feedback-item-img-wrap",
      ],
      r = [];
    t.forEach((n) => {
      e.querySelectorAll(n).forEach((o) => {
        r.push(o);
      });
    }),
      r.length > 0 && C.killTweensOf(r);
  }
  destroy() {
    this.sectionObserver &&
      (this.sectionObserver.disconnect(), (this.sectionObserver = null)),
      this.killGsapSlideFeedback(),
      this.cleanupCarouselEvents(),
      this.cleanupAnimationInstances(),
      this.destroyExistingCarousel();
    const { prevBtn: e, nextBtn: t } = this.elements;
    e &&
      this.throttledScrollPrev &&
      e.removeEventListener("click", this.throttledScrollPrev),
      t &&
        this.throttledScrollNext &&
        t.removeEventListener("click", this.throttledScrollNext),
      (this.elements = {}),
      (this.listItem = []),
      (this.listItemSave = []),
      (this.hasTriggeredInitialAnimation = !1),
      (this.carouselSelectHandler = null),
      (this.throttledScrollPrev = null),
      (this.throttledScrollNext = null),
      (this.throttledSelectCountry = null);
  }
}
class Q2 {
  constructor(e) {
    _(this, "DOM");
    _(this, "scrollTrigger", null);
    _(this, "timeline", null);
    _(this, "tagHandlers", new Map());
    _(this, "dotHandlers", new Map());
    _(this, "timeoutDots", null);
    _(this, "animationElements", {});
    (this.DOM = { el: e }), be(this.clear.bind(this));
  }
  init() {
    const e = this.DOM.el.querySelector(".home-tool"),
      t = e == null ? void 0 : e.querySelector(".home-tool-inner");
    (this.DOM.tool = e),
      (this.DOM.toolInner = t),
      this.updateDom(),
      this.initAnimationToolSection(),
      this.handleHoverTagToolSection(),
      this.initDotsLoop();
  }
  initAnimationToolSection() {
    if (!this.DOM.tool || !this.DOM.toolInner) return;
    const e = this.DOM.tool.querySelector(".home-tool-sc-2-img"),
      t = this.DOM.tool.querySelector(".home-tool-sc1-title"),
      r = this.DOM.tool.querySelector(".home-tool-sc-2-heading"),
      n = this.DOM.tool.querySelector(".home-tool-line"),
      s = this.DOM.tool.querySelector(".home-tool-actions"),
      o = this.DOM.tool.querySelector(".home-tool-action-sub"),
      a = this.DOM.tool.querySelector(".home-tool-action-btn");
    if (
      ((this.animationElements = {
        imgWrap: e,
        headingSC1: t,
        headingSC2: r,
        line: n,
        tags: s,
        sub: o,
        btn: a,
      }),
      !r || !e || !t)
    )
      return;
    me.set(r, { opacity: 0, y: "33vh" }),
      me.set(e, { y: "36vh" }),
      (n || s || o || a) &&
        me.set([n, s, o, a, e].filter(Boolean), {
          opacity: 0,
          pointerEvents: "none",
        });
    const l = me.timeline({
      scrollTrigger: {
        trigger: this.DOM.tool,
        start: "top top",
        end: "bottom bottom",
        pin: this.DOM.toolInner,
        scrub: 1,
      },
    });
    (this.timeline = l),
      l.scrollTrigger && (this.scrollTrigger = l.scrollTrigger),
      l
        .to(t, { opacity: 0, ease: "power3.out" })
        .to([r, e], { opacity: 1, ease: "none" })
        .to([r, e], { y: "0%", ease: "none" })
        .fromTo(e, { scale: 1.95 }, { scale: 1, ease: "none" }, "<")
        .to([o, s, a, n], { opacity: 1, pointerEvents: "auto", ease: "none" });
  }
  updateDom() {
    var e, t, r, n, s;
    (this.DOM.tags =
      (e = this.DOM.tool) == null
        ? void 0
        : e.querySelector(".home-tool-actions")),
      (this.DOM.btns =
        (t = this.DOM.tags) == null ? void 0 : t.querySelectorAll(".btn")),
      (this.DOM.images =
        (r = this.DOM.toolInner) == null
          ? void 0
          : r.querySelectorAll(".home-tool-sc-img-wrap")),
      (this.DOM.descs =
        (n = this.DOM.toolInner) == null
          ? void 0
          : n.querySelectorAll(".home-tool-action-sub-list-item")),
      (this.DOM.mainLinkBtn =
        (s = this.DOM.toolInner) == null
          ? void 0
          : s.querySelector(".home-tool-action-btn-link"));
  }
  initActiveFirstItem(e) {
    var t, r, n, s;
    !this.DOM.images ||
      !this.DOM.descs ||
      !this.DOM.btns ||
      (me.set(this.DOM.images, { opacity: 0 }),
      me.set(this.DOM.descs, { opacity: 0 }),
      (t = this.DOM.images) == null ||
        t.forEach((o) => {
          o.getAttribute("data-solution-img") === e &&
            me.set(o, { opacity: 1 });
        }),
      (r = this.DOM.descs) == null ||
        r.forEach((o) => {
          o.getAttribute("data-solution-desc") === e &&
            me.set(o, { opacity: 1 });
        }),
      (n = this.DOM.btns) == null ||
        n.forEach((o) => {
          o.textContent === e && o.classList.add("active");
        }),
      (s = this.DOM.mainLinkBtn) == null ||
        s.setAttribute(
          "href",
          `${window.location.origin}/solution/${od(e ?? "") || ""}`
        ));
  }
  handleHoverTagToolSection() {
    var r, n, s;
    const e =
        (r = this.DOM.toolInner) == null
          ? void 0
          : r.querySelector(".home-tool-action-btn-link .btn"),
      t =
        (s = (n = this.DOM.btns) == null ? void 0 : n[0]) == null
          ? void 0
          : s.textContent;
    t &&
      (this.initActiveFirstItem(t),
      !(!this.DOM.btns || !e || !this.DOM.mainLinkBtn) &&
        this.DOM.btns.forEach((o) => {
          const a = () => {
            var c, d, h, u, f;
            const l =
              (c = o.querySelector(".btn-ins-txt")) == null
                ? void 0
                : c.textContent;
            (d = this.DOM.images) == null ||
              d.forEach((p) => {
                p.getAttribute("data-solution-img") === l
                  ? me.to(p, { opacity: 1, duration: 0.5, ease: "power3.out" })
                  : me.to(p, { opacity: 0, duration: 0.5, ease: "power3.out" });
              }),
              (h = this.DOM.descs) == null ||
                h.forEach((p) => {
                  p.getAttribute("data-solution-desc") === l
                    ? me.to(p, {
                        opacity: 1,
                        duration: 0.5,
                        ease: "power3.out",
                      })
                    : me.to(p, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power3.out",
                      });
                }),
              (e.querySelector(".btn-inner-txt").textContent = `See ${
                l ?? ""
              }`),
              (u = this.DOM.btns) == null ||
                u.forEach((p) => {
                  var m;
                  ((m = p.querySelector(".btn-ins-txt")) == null
                    ? void 0
                    : m.textContent) === l
                    ? p.classList.add("active")
                    : p.classList.remove("active");
                }),
              (f = this.DOM.mainLinkBtn) == null ||
                f.setAttribute(
                  "href",
                  `${window.location.origin}/solution/${od(l ?? "") || ""}`
                );
          };
          o.addEventListener("click", a), this.tagHandlers.set(o, a);
        }));
  }
  initDotsLoop() {
    const e = this.DOM.el.querySelector("#dots-line"),
      t = e == null ? void 0 : e.querySelectorAll("path");
    !t ||
      !this.DOM.btns ||
      t.length !== this.DOM.btns.length ||
      this.DOM.btns.forEach((r, n) => {
        const s = t[n];
        if (!s) return;
        me.set(s, { stroke: "#A1B3BF", duration: 0.5, ease: "power3.out" });
        const o = s.getTotalLength(),
          a = (10 / 480) * o * 3;
        r.classList.contains("active") &&
          me.to(s, { stroke: "#134160", duration: 0.5, ease: "power3.out" }),
          me.to(s, {
            strokeDashoffset: o,
            repeat: -1,
            ease: "linear",
            duration: a,
          });
        const l = () => {
            r.classList.contains("active") ||
              me.to(s, {
                stroke: "#134160",
                duration: 0.5,
                ease: "power3.out",
              });
          },
          c = () => {
            r.classList.contains("active") ||
              me.to(s, {
                stroke: "#A1B3BF",
                duration: 0.5,
                ease: "power3.out",
              });
          },
          d = () => {
            this.timeoutDots = setTimeout(() => {
              var h;
              (h = this.DOM.btns) == null ||
                h.forEach((u, f) => {
                  u.classList.contains("active")
                    ? me.to(t[f], {
                        stroke: "#134160",
                        duration: 0.5,
                        ease: "power3.out",
                      })
                    : me.to(t[f], {
                        stroke: "#A1B3BF",
                        duration: 0.5,
                        ease: "power3.out",
                      });
                });
            }, 300);
          };
        r.addEventListener("mouseenter", l),
          r.addEventListener("mouseleave", c),
          r.addEventListener("click", d),
          this.dotHandlers.set(r, { mouseenter: l, mouseleave: c, click: d });
      });
  }
  clear() {
    var u;
    this.scrollTrigger &&
      (this.scrollTrigger.kill(), (this.scrollTrigger = null)),
      this.timeline && (this.timeline.kill(), (this.timeline = null));
    const {
        imgWrap: e,
        headingSC1: t,
        headingSC2: r,
        line: n,
        tags: s,
        sub: o,
        btn: a,
        bgBlue: l,
      } = this.animationElements,
      c = [t, r, e, n, s, o, a, l].filter(Boolean);
    if (
      (c.length && me.killTweensOf(c),
      r && me.set(r, { clearProps: "all" }),
      e && me.set(e, { clearProps: "all" }),
      t && me.set(t, { clearProps: "all" }),
      l && me.set(l, { clearProps: "all" }),
      (n || s || o || a) &&
        [n, s, o, a].filter(Boolean).forEach((f) => {
          f && me.set(f, { clearProps: "all" });
        }),
      this.DOM.tool)
    ) {
      me.killTweensOf(this.DOM.tool);
      const f = this.DOM.tool.querySelectorAll("*");
      f.length && me.killTweensOf(f);
    }
    const d =
        (u = this.DOM.el) == null ? void 0 : u.querySelector("#dots-line"),
      h = d == null ? void 0 : d.querySelectorAll("path");
    h &&
      h.length &&
      (me.killTweensOf(h),
      h.forEach((f) => {
        me.set(f, { clearProps: "all" });
      })),
      this.tagHandlers.forEach((f, p) => {
        try {
          p && p.parentNode && p.removeEventListener("click", f);
        } catch {}
      }),
      this.tagHandlers.clear(),
      this.dotHandlers.forEach((f, p) => {
        try {
          p &&
            p.parentNode &&
            (p.removeEventListener("mouseenter", f.mouseenter),
            p.removeEventListener("mouseleave", f.mouseleave),
            p.removeEventListener("click", f.click));
        } catch {}
      }),
      this.dotHandlers.clear(),
      this.timeoutDots &&
        (clearTimeout(this.timeoutDots), (this.timeoutDots = null)),
      (this.animationElements = {});
  }
}
class J2 {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlide", null);
    _(this, "emblaToolSlideMobile", null);
    _(this, "feedback", null);
    _(this, "tool", null);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    (this.feedback = new Z2(this.DOM.el)),
      this.feedback.init(),
      (this.tool = new Q2(this.DOM.el)),
      this.tool.init(),
      (this.emblaSlide = new Ne({
        classSlide: ".embla-cate",
        idBtnPrev: "btn-home-cs-prev",
        idBtnNext: "btn-home-cs-next",
        wrapElement: this.DOM.el,
      }));
    const e = this.DOM.el.querySelector(".sc-marquee-grs");
    if ((e && new oa(e), !Et())) {
      this.updateSlideLength(
        ".home-tool-mobile-items",
        ".home-tool-mobile-item"
      );
      const t = this.DOM.el.querySelector(".home-tool-mobile-dots");
      this.emblaToolSlideMobile = new Ne({
        classSlide: ".home-tool-mobile-wrap",
        wrapElement: this.DOM.el,
        dotsElement: t,
      });
    }
    this.updateSlideLength(".embla__cate__container", ".embla__cate__slide");
  }
  initParticles() {
    console.count("initParticles__home___"), this.init(), this.initMotion();
  }
  destroy() {
    this.feedback &&
      typeof this.feedback.destroy == "function" &&
      (this.feedback.destroy(), (this.feedback = null)),
      this.tool &&
        typeof this.tool.clear == "function" &&
        (this.tool.clear(), (this.tool = null)),
      this.emblaSlide &&
        typeof this.emblaSlide.destroy == "function" &&
        (this.emblaSlide.destroy(), (this.emblaSlide = null)),
      this.emblaToolSlideMobile &&
        typeof this.emblaToolSlideMobile.destroy == "function" &&
        (this.emblaToolSlideMobile.destroy(),
        (this.emblaToolSlideMobile = null)),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
  updateSlideLength(e, t) {
    const r = this.DOM.el.querySelector(".embla-visible");
    if (!r) return;
    const n = Ip(r.offsetWidth),
      s = document.querySelector(e);
    if (!s) return;
    const o = s.querySelectorAll(t);
    if (!o) return;
    const a = o.length;
    s.style.setProperty("--slide-count", a.toString()),
      s.style.setProperty("--slide-size", `${n}rem`);
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el),
      z.parrallaxImage(this.DOM.el);
  }
}
class ev {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlides", []);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.initEmblaMostUsedPartner(), this.initEmblaFeaturedAppsPartner();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  initEmblaFeaturedAppsPartner() {
    const e = this.DOM.el.querySelector(".partner-featured-apps-left");
    if (!e) return;
    this.emblaSlides.push(
      new Ne({
        classSlide: ".partner-featured-apps-left",
        idBtnPrev: "btn-partner-featured-apps-prev",
        idBtnNext: "btn-partner-featured-apps-next",
        wrapElement: this.DOM.el,
      })
    );
    const t = e.querySelectorAll(".partner-card-container"),
      r = e.querySelector(".partner-featured-apps-left-inner");
    if (r) for (; r.firstChild; ) r.removeChild(r.firstChild);
    const n = Array.from(t);
    let s = 4;
    Et() || (s = 2);
    const o = [];
    for (let a = 0; a < n.length; a += s) o.push(n.slice(a, a + s));
    o.forEach((a) => {
      const l = document.createElement("div");
      l.classList.add("partner-featured-apps-item"),
        r == null || r.appendChild(l),
        a.forEach((c) => {
          l.appendChild(c);
        });
    });
  }
  initEmblaMostUsedPartner() {
    const e = this.DOM.el.querySelector(".embla-partner__viewport");
    if (!e) return;
    this.emblaSlides.push(
      new Ne({
        classSlide: ".embla-partner__viewport",
        idBtnPrev: "btn-partner-most-used-prev",
        idBtnNext: "btn-partner-most-used-next",
        wrapElement: this.DOM.el,
      })
    );
    const t = e.querySelectorAll(".partner-card-container"),
      r = e.querySelector(".embla-partner__container");
    if (r) for (; r.firstChild; ) r.removeChild(r.firstChild);
    const n = Array.from(t);
    let s = 6;
    Et() || (s = 2);
    const o = [];
    for (let a = 0; a < n.length; a += s) o.push(n.slice(a, a + s));
    o.forEach((a) => {
      const l = document.createElement("div");
      l.classList.add("partner-featured-apps-item"),
        r == null || r.appendChild(l),
        a.forEach((c) => {
          l.appendChild(c);
        });
    });
  }
  destroy() {
    this.emblaSlides.forEach((e) => {
      e && typeof e.destroy == "function" && e.destroy();
    }),
      (this.emblaSlides = []),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
class tv {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlides", []);
    (this.DOM = { el: e }),
      this.slideBoostCards(),
      this.slidTemplateCards(),
      be(this.destroy.bind(this)),
      Lp(this.destroy.bind(this));
  }
  init() {
    this.slideBoostCards();
  }
  initParticles() {
    this.init();
    const e = this.DOM.el.querySelectorAll(".sc-marquee-grs");
    e.length &&
      e.forEach((t) => {
        new oa(t);
      }),
      this.initMotions();
  }
  slideBoostCards() {
    Et() ||
      this.emblaSlides.push(
        new Ne({
          classSlide: ".pricing-boost-cards-embla",
          wrapElement: this.DOM.el,
        })
      );
  }
  slidTemplateCards() {
    const e = new Ne({
      classSlide: ".pricing-templates-slide",
      idBtnPrev: "embla-button-prev",
      idBtnNext: "embla-button-next",
      wrapElement: this.DOM.el,
    });
    this.emblaSlides.push(e);
  }
  initMotions() {
    z.parrallaxImage(this.DOM.el),
      z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  destroy() {
    this.emblaSlides.forEach((e) => {
      e && typeof e.destroy == "function" && e.destroy();
    }),
      (this.emblaSlides = []),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
class _f {
  constructor() {
    _(this, "itemHandlers", new Map());
    _(this, "resizeHandler", null);
    this.handleHoverItem(),
      this.setupResizeHandler(),
      be(this.clear.bind(this));
  }
  setupResizeHandler() {
    this.resizeHandler = Hs(
      null,
      () => {
        this.handleHoverItem();
      },
      { threshold: 20, debounceDelay: 150, immediate: !1 }
    );
  }
  handleHoverItem() {
    var s;
    this.clear();
    const e = document.querySelectorAll(".cta-support-content-item");
    if (e.length === 0) return;
    const t = (s = this.resizeHandler) == null ? void 0 : s.getSize();
    if (t ? t.width < 1024 : window.innerWidth < 1024) {
      e.forEach((o) => {
        o.classList.add("active");
      });
      return;
    }
    const n = (o) => {
      e.forEach((a, l) => {
        l === o ? a.classList.add("active") : a.classList.remove("active");
      });
    };
    n(0),
      e.forEach((o, a) => {
        const l = () => {
            n(a);
          },
          c = () => {};
        o.addEventListener("mouseenter", l),
          o.addEventListener("mouseleave", c),
          this.itemHandlers.set(o, { mouseenter: l, mouseleave: c });
      });
  }
  clear() {
    this.itemHandlers.forEach((e, t) => {
      t.removeEventListener("mouseenter", e.mouseenter),
        t.removeEventListener("mouseleave", e.mouseleave);
    }),
      this.itemHandlers.clear();
  }
  destroy() {
    this.resizeHandler &&
      (this.resizeHandler.destroy(), (this.resizeHandler = null)),
      this.clear();
  }
}
class rv {
  constructor(e) {
    _(this, "DOM");
    _(this, "paginationTimeout", null);
    _(this, "scrollToSectionTimeout", null);
    _(this, "paginationHandlers", new Map());
    _(this, "filterHandlers", {
      items: new Map(),
      navs: new Map(),
      pagination: new Map(),
    });
    _(this, "ctaSupport", null);
    _(this, "navTimeout", null);
    _(this, "scrollTriggers", []);
    _(this, "clickOutsideHandlers", {});
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    (this.ctaSupport = new _f()),
      this.handleScrollTopEventPagination(),
      this.handleDropDown(),
      this.handleDrawLine(),
      this.handlePagination();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el),
      z.parrallaxImage(this.DOM.el);
  }
  handleDrawLine() {
    Et() &&
      (this.scrollTriggers.forEach((e) => e.kill()),
      (this.scrollTriggers = []),
      requestAnimationFrame(() => {
        const e = this.DOM.el.querySelectorAll(".product-update-main-item");
        if (e.length === 0) {
          console.warn("No product items found for drawLine");
          return;
        }
        U.refresh(),
          e.forEach((t, r) => {
            const n = t.querySelector(
              ".product-update-main-item-line-i.active"
            );
            if (!n) return;
            n.style.willChange = "transform";
            const s = U.create({
              trigger: t,
              start: () => `top ${r === 0 ? "bottom" : "center"}`,
              scrub: 1,
              end: "bottom center",
              onUpdate: ({ progress: o }) => {
                n.style.transform = `scaleY(${o})`;
              },
            });
            this.scrollTriggers.push(s);
          });
      }));
  }
  handlePagination() {
    setTimeout(() => {
      var t, r;
      (t = this.filterHandlers.pagination) == null ||
        t.forEach((n, s) => {
          s.removeEventListener("click", n);
        }),
        (r = this.filterHandlers.pagination) == null || r.clear();
      const e = this.DOM.el.querySelectorAll(".btn-page-count");
      e.length !== 0 &&
        e.forEach((n) => {
          var o;
          const s = (a) => {
            a.preventDefault(),
              setTimeout(() => {
                this.waitForDOMUpdate(() => {
                  this.handleDrawLine(),
                    setTimeout(() => {
                      this.handlePagination();
                    }, 500);
                });
              }, 700);
          };
          n.addEventListener("click", s),
            (o = this.filterHandlers.pagination) == null || o.set(n, s);
        });
    }, 1e3);
  }
  waitForDOMUpdate(e, t = 20, r = 100) {
    let n = 0;
    const s = this.DOM.el.querySelectorAll(".product-update-main-item").length,
      o = () => {
        n++;
        const a = this.DOM.el.querySelectorAll(
          ".product-update-main-item"
        ).length;
        if (a > 0 && (a !== s || n === 1)) {
          requestAnimationFrame(() => {
            setTimeout(e, 50);
          });
          return;
        }
        if (n >= t) {
          console.warn("DOM update timeout, proceeding anyway"), e();
          return;
        }
        setTimeout(o, r);
      };
    o();
  }
  handleDropDown() {
    const e = this.DOM.el.querySelector(".product-filter"),
      t = this.DOM.el.querySelector(".product-filter-trigger"),
      r = this.DOM.el.querySelector(".product-filter-dropdown"),
      n = this.DOM.el.querySelector(".product-filter-placeholder .txt"),
      s = this.DOM.el.querySelectorAll(".product-filter-dropdown-item");
    if (!t || !r) return;
    (this.navTimeout = setTimeout(() => {
      this.DOM.el.querySelectorAll(".btn-nav-count").forEach((l) => {
        var d;
        const c = () => {
          ge.lenis.scrollTo(0, { offset: 100, duration: 1 });
        };
        l.addEventListener("click", c),
          (d = this.filterHandlers.navs) == null || d.set(l, c);
      });
    }, 1e3)),
      (this.filterHandlers.trigger = () => {
        r.classList.contains("active")
          ? (r.classList.remove("active"),
            t == null || t.classList.remove("active"))
          : (r.classList.add("active"), t == null || t.classList.add("active"));
      }),
      (this.filterHandlers.mouseEnter = () => {
        r.classList.add("active"), t == null || t.classList.add("active");
      }),
      (this.filterHandlers.mouseLeave = () => {
        r.classList.remove("active"), t == null || t.classList.remove("active");
      }),
      t == null || t.addEventListener("click", this.filterHandlers.trigger),
      e == null ||
        e.addEventListener("mouseenter", this.filterHandlers.mouseEnter),
      e == null ||
        e.addEventListener("mouseleave", this.filterHandlers.mouseLeave),
      s.forEach((a) => {
        var c;
        const l = () => {
          const h = a.querySelector("input").getAttribute("fs-list-value");
          h ? (n.textContent = h) : (n.textContent = "All"),
            r.classList.remove("active"),
            t == null || t.classList.remove("active");
        };
        a.addEventListener("click", l),
          (c = this.filterHandlers.items) == null || c.set(a, l);
      });
    const o = () => {
      r.classList.remove("active"), t == null || t.classList.remove("active");
    };
    (this.clickOutsideHandlers.mousedown = (a) => {
      !r || r.contains(a.target) || o();
    }),
      (this.clickOutsideHandlers.touchstart = (a) => {
        !r || r.contains(a.target) || o();
      }),
      document.addEventListener(
        "mousedown",
        this.clickOutsideHandlers.mousedown,
        { passive: !0 }
      ),
      document.addEventListener(
        "touchstart",
        this.clickOutsideHandlers.touchstart,
        { passive: !0 }
      );
  }
  handleScrollTopEventPagination() {
    this.paginationTimeout = setTimeout(() => {
      const e = this.DOM.el.querySelector(".nav-counts"),
        t = this.DOM.el.querySelectorAll(".nav-btn"),
        r = e.querySelectorAll("a");
      if (!r) return;
      const n = () => {
        this.scrollToSectionTimeout = setTimeout(() => {
          C.to(window, {
            scrollTo: ".product-hero",
            duration: 0.8,
            ease: "power3.inOut",
          });
        }, 600);
      };
      r.forEach((s) => {
        const o = () => {
          s.classList.contains("w--current") || n();
        };
        s.addEventListener("click", o), this.paginationHandlers.set(s, o);
      }),
        t.forEach((s) => {
          const o = () => {
            n();
          };
          s.addEventListener("click", o), this.paginationHandlers.set(s, o);
        });
    }, 3e3);
  }
  destroy() {
    var r, n, s, o, a, l;
    this.navTimeout &&
      (clearTimeout(this.navTimeout), (this.navTimeout = null)),
      this.paginationTimeout &&
        (clearTimeout(this.paginationTimeout), (this.paginationTimeout = null)),
      this.scrollToSectionTimeout &&
        (clearTimeout(this.scrollToSectionTimeout),
        (this.scrollToSectionTimeout = null)),
      this.paginationHandlers.forEach((c, d) => {
        try {
          d && d.parentNode && d.removeEventListener("click", c);
        } catch {}
      }),
      this.paginationHandlers.clear(),
      this.scrollTriggers.forEach((c) => c.kill()),
      (this.scrollTriggers = []),
      U.refresh();
    const e = this.DOM.el.querySelector(".product-filter-trigger"),
      t = this.DOM.el.querySelector(".product-filter");
    e &&
      this.filterHandlers.trigger &&
      (e.removeEventListener("click", this.filterHandlers.trigger),
      (this.filterHandlers.trigger = void 0)),
      t &&
        this.filterHandlers.mouseEnter &&
        (t.removeEventListener("mouseenter", this.filterHandlers.mouseEnter),
        (this.filterHandlers.mouseEnter = void 0)),
      t &&
        this.filterHandlers.mouseLeave &&
        (t.removeEventListener("mouseleave", this.filterHandlers.mouseLeave),
        (this.filterHandlers.mouseLeave = void 0)),
      (r = this.filterHandlers.items) == null ||
        r.forEach((c, d) => {
          d.removeEventListener("click", c);
        }),
      (n = this.filterHandlers.items) == null || n.clear(),
      (s = this.filterHandlers.navs) == null ||
        s.forEach((c, d) => {
          d.removeEventListener("click", c);
        }),
      (o = this.filterHandlers.navs) == null || o.clear(),
      (a = this.filterHandlers.pagination) == null ||
        a.forEach((c, d) => {
          d.removeEventListener("click", c);
        }),
      (l = this.filterHandlers.pagination) == null || l.clear(),
      this.clickOutsideHandlers.mousedown &&
        (document.removeEventListener(
          "mousedown",
          this.clickOutsideHandlers.mousedown
        ),
        (this.clickOutsideHandlers.mousedown = void 0)),
      this.clickOutsideHandlers.touchstart &&
        (document.removeEventListener(
          "touchstart",
          this.clickOutsideHandlers.touchstart
        ),
        (this.clickOutsideHandlers.touchstart = void 0)),
      this.ctaSupport &&
        typeof this.ctaSupport.clear == "function" &&
        (this.ctaSupport.clear(), (this.ctaSupport = null)),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
class nv {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlide", null);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.updateSlideLength(
      ".embla__more__cate__container",
      ".embla__more__cate__slide"
    ),
      (this.emblaSlide = new Ne({
        classSlide: ".article-more-cards",
        idBtnPrev: "btn-resource-detail-prev",
        idBtnNext: "btn-resource-detail-next",
        wrapElement: this.DOM.el,
      }));
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  updateSlideLength(e, t) {
    const r = document.querySelector(e);
    if (!r) return;
    const n = r.querySelectorAll(t);
    if (!n) return;
    const s = n.length;
    r.style.setProperty("--slide-count", s.toString());
  }
  destroy() {
    this.emblaSlide &&
      typeof this.emblaSlide.destroy == "function" &&
      (this.emblaSlide.destroy(), (this.emblaSlide = null)),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
/*! @vimeo/player v2.29.7 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ function iv(
  i,
  e
) {
  var t =
    i == null
      ? null
      : (typeof Symbol < "u" && i[Symbol.iterator]) || i["@@iterator"];
  if (t != null) {
    var r,
      n,
      s,
      o,
      a = [],
      l = !0,
      c = !1;
    try {
      if (((s = (t = t.call(i)).next), e === 0)) {
        if (Object(t) !== t) return;
        l = !1;
      } else
        for (
          ;
          !(l = (r = s.call(t)).done) && (a.push(r.value), a.length !== e);
          l = !0
        );
    } catch (d) {
      (c = !0), (n = d);
    } finally {
      try {
        if (!l && t.return != null && ((o = t.return()), Object(o) !== o))
          return;
      } finally {
        if (c) throw n;
      }
    }
    return a;
  }
}
function Gd(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e &&
      (r = r.filter(function (n) {
        return Object.getOwnPropertyDescriptor(i, n).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function Ud(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Gd(Object(t), !0).forEach(function (r) {
          Eo(i, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
      : Gd(Object(t)).forEach(function (r) {
          Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return i;
}
function bt() {
  bt = function () {
    return i;
  };
  var i = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    r =
      Object.defineProperty ||
      function (w, P, k) {
        w[P] = k.value;
      },
    n = typeof Symbol == "function" ? Symbol : {},
    s = n.iterator || "@@iterator",
    o = n.asyncIterator || "@@asyncIterator",
    a = n.toStringTag || "@@toStringTag";
  function l(w, P, k) {
    return (
      Object.defineProperty(w, P, {
        value: k,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      w[P]
    );
  }
  try {
    l({}, "");
  } catch {
    l = function (P, k, R) {
      return (P[k] = R);
    };
  }
  function c(w, P, k, R) {
    var I = P && P.prototype instanceof u ? P : u,
      N = Object.create(I.prototype),
      q = new D(R || []);
    return r(N, "_invoke", { value: E(w, k, q) }), N;
  }
  function d(w, P, k) {
    try {
      return { type: "normal", arg: w.call(P, k) };
    } catch (R) {
      return { type: "throw", arg: R };
    }
  }
  i.wrap = c;
  var h = {};
  function u() {}
  function f() {}
  function p() {}
  var m = {};
  l(m, s, function () {
    return this;
  });
  var g = Object.getPrototypeOf,
    y = g && g(g(x([])));
  y && y !== e && t.call(y, s) && (m = y);
  var v = (p.prototype = u.prototype = Object.create(m));
  function b(w) {
    ["next", "throw", "return"].forEach(function (P) {
      l(w, P, function (k) {
        return this._invoke(P, k);
      });
    });
  }
  function $(w, P) {
    function k(I, N, q, F) {
      var M = d(w[I], w, N);
      if (M.type !== "throw") {
        var j = M.arg,
          ne = j.value;
        return ne && typeof ne == "object" && t.call(ne, "__await")
          ? P.resolve(ne.__await).then(
              function (ue) {
                k("next", ue, q, F);
              },
              function (ue) {
                k("throw", ue, q, F);
              }
            )
          : P.resolve(ne).then(
              function (ue) {
                (j.value = ue), q(j);
              },
              function (ue) {
                return k("throw", ue, q, F);
              }
            );
      }
      F(M.arg);
    }
    var R;
    r(this, "_invoke", {
      value: function (I, N) {
        function q() {
          return new P(function (F, M) {
            k(I, N, F, M);
          });
        }
        return (R = R ? R.then(q, q) : q());
      },
    });
  }
  function E(w, P, k) {
    var R = "suspendedStart";
    return function (I, N) {
      if (R === "executing") throw new Error("Generator is already running");
      if (R === "completed") {
        if (I === "throw") throw N;
        return L();
      }
      for (k.method = I, k.arg = N; ; ) {
        var q = k.delegate;
        if (q) {
          var F = T(q, k);
          if (F) {
            if (F === h) continue;
            return F;
          }
        }
        if (k.method === "next") k.sent = k._sent = k.arg;
        else if (k.method === "throw") {
          if (R === "suspendedStart") throw ((R = "completed"), k.arg);
          k.dispatchException(k.arg);
        } else k.method === "return" && k.abrupt("return", k.arg);
        R = "executing";
        var M = d(w, P, k);
        if (M.type === "normal") {
          if (((R = k.done ? "completed" : "suspendedYield"), M.arg === h))
            continue;
          return { value: M.arg, done: k.done };
        }
        M.type === "throw" &&
          ((R = "completed"), (k.method = "throw"), (k.arg = M.arg));
      }
    };
  }
  function T(w, P) {
    var k = P.method,
      R = w.iterator[k];
    if (R === void 0)
      return (
        (P.delegate = null),
        (k === "throw" &&
          w.iterator.return &&
          ((P.method = "return"),
          (P.arg = void 0),
          T(w, P),
          P.method === "throw")) ||
          (k !== "return" &&
            ((P.method = "throw"),
            (P.arg = new TypeError(
              "The iterator does not provide a '" + k + "' method"
            )))),
        h
      );
    var I = d(R, w.iterator, P.arg);
    if (I.type === "throw")
      return (P.method = "throw"), (P.arg = I.arg), (P.delegate = null), h;
    var N = I.arg;
    return N
      ? N.done
        ? ((P[w.resultName] = N.value),
          (P.next = w.nextLoc),
          P.method !== "return" && ((P.method = "next"), (P.arg = void 0)),
          (P.delegate = null),
          h)
        : N
      : ((P.method = "throw"),
        (P.arg = new TypeError("iterator result is not an object")),
        (P.delegate = null),
        h);
  }
  function S(w) {
    var P = { tryLoc: w[0] };
    1 in w && (P.catchLoc = w[1]),
      2 in w && ((P.finallyLoc = w[2]), (P.afterLoc = w[3])),
      this.tryEntries.push(P);
  }
  function O(w) {
    var P = w.completion || {};
    (P.type = "normal"), delete P.arg, (w.completion = P);
  }
  function D(w) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      w.forEach(S, this),
      this.reset(!0);
  }
  function x(w) {
    if (w) {
      var P = w[s];
      if (P) return P.call(w);
      if (typeof w.next == "function") return w;
      if (!isNaN(w.length)) {
        var k = -1,
          R = function I() {
            for (; ++k < w.length; )
              if (t.call(w, k)) return (I.value = w[k]), (I.done = !1), I;
            return (I.value = void 0), (I.done = !0), I;
          };
        return (R.next = R);
      }
    }
    return { next: L };
  }
  function L() {
    return { value: void 0, done: !0 };
  }
  return (
    (f.prototype = p),
    r(v, "constructor", { value: p, configurable: !0 }),
    r(p, "constructor", { value: f, configurable: !0 }),
    (f.displayName = l(p, a, "GeneratorFunction")),
    (i.isGeneratorFunction = function (w) {
      var P = typeof w == "function" && w.constructor;
      return (
        !!P && (P === f || (P.displayName || P.name) === "GeneratorFunction")
      );
    }),
    (i.mark = function (w) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(w, p)
          : ((w.__proto__ = p), l(w, a, "GeneratorFunction")),
        (w.prototype = Object.create(v)),
        w
      );
    }),
    (i.awrap = function (w) {
      return { __await: w };
    }),
    b($.prototype),
    l($.prototype, o, function () {
      return this;
    }),
    (i.AsyncIterator = $),
    (i.async = function (w, P, k, R, I) {
      I === void 0 && (I = Promise);
      var N = new $(c(w, P, k, R), I);
      return i.isGeneratorFunction(P)
        ? N
        : N.next().then(function (q) {
            return q.done ? q.value : N.next();
          });
    }),
    b(v),
    l(v, a, "Generator"),
    l(v, s, function () {
      return this;
    }),
    l(v, "toString", function () {
      return "[object Generator]";
    }),
    (i.keys = function (w) {
      var P = Object(w),
        k = [];
      for (var R in P) k.push(R);
      return (
        k.reverse(),
        function I() {
          for (; k.length; ) {
            var N = k.pop();
            if (N in P) return (I.value = N), (I.done = !1), I;
          }
          return (I.done = !0), I;
        }
      );
    }),
    (i.values = x),
    (D.prototype = {
      constructor: D,
      reset: function (w) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(O),
          !w)
        )
          for (var P in this)
            P.charAt(0) === "t" &&
              t.call(this, P) &&
              !isNaN(+P.slice(1)) &&
              (this[P] = void 0);
      },
      stop: function () {
        this.done = !0;
        var w = this.tryEntries[0].completion;
        if (w.type === "throw") throw w.arg;
        return this.rval;
      },
      dispatchException: function (w) {
        if (this.done) throw w;
        var P = this;
        function k(M, j) {
          return (
            (N.type = "throw"),
            (N.arg = w),
            (P.next = M),
            j && ((P.method = "next"), (P.arg = void 0)),
            !!j
          );
        }
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var I = this.tryEntries[R],
            N = I.completion;
          if (I.tryLoc === "root") return k("end");
          if (I.tryLoc <= this.prev) {
            var q = t.call(I, "catchLoc"),
              F = t.call(I, "finallyLoc");
            if (q && F) {
              if (this.prev < I.catchLoc) return k(I.catchLoc, !0);
              if (this.prev < I.finallyLoc) return k(I.finallyLoc);
            } else if (q) {
              if (this.prev < I.catchLoc) return k(I.catchLoc, !0);
            } else {
              if (!F) throw new Error("try statement without catch or finally");
              if (this.prev < I.finallyLoc) return k(I.finallyLoc);
            }
          }
        }
      },
      abrupt: function (w, P) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var R = this.tryEntries[k];
          if (
            R.tryLoc <= this.prev &&
            t.call(R, "finallyLoc") &&
            this.prev < R.finallyLoc
          ) {
            var I = R;
            break;
          }
        }
        I &&
          (w === "break" || w === "continue") &&
          I.tryLoc <= P &&
          P <= I.finallyLoc &&
          (I = null);
        var N = I ? I.completion : {};
        return (
          (N.type = w),
          (N.arg = P),
          I
            ? ((this.method = "next"), (this.next = I.finallyLoc), h)
            : this.complete(N)
        );
      },
      complete: function (w, P) {
        if (w.type === "throw") throw w.arg;
        return (
          w.type === "break" || w.type === "continue"
            ? (this.next = w.arg)
            : w.type === "return"
            ? ((this.rval = this.arg = w.arg),
              (this.method = "return"),
              (this.next = "end"))
            : w.type === "normal" && P && (this.next = P),
          h
        );
      },
      finish: function (w) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var k = this.tryEntries[P];
          if (k.finallyLoc === w)
            return this.complete(k.completion, k.afterLoc), O(k), h;
        }
      },
      catch: function (w) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var k = this.tryEntries[P];
          if (k.tryLoc === w) {
            var R = k.completion;
            if (R.type === "throw") {
              var I = R.arg;
              O(k);
            }
            return I;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (w, P, k) {
        return (
          (this.delegate = { iterator: x(w), resultName: P, nextLoc: k }),
          this.method === "next" && (this.arg = void 0),
          h
        );
      },
    }),
    i
  );
}
function Wd(i, e, t, r, n, s, o) {
  try {
    var a = i[s](o),
      l = a.value;
  } catch (c) {
    t(c);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(r, n);
}
function Cn(i) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, n) {
      var s = i.apply(e, t);
      function o(l) {
        Wd(s, r, n, o, a, "next", l);
      }
      function a(l) {
        Wd(s, r, n, o, a, "throw", l);
      }
      o(void 0);
    });
  };
}
function wf(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jd(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(i, Tf(r.key), r);
  }
}
function Sf(i, e, t) {
  return (
    e && jd(i.prototype, e),
    t && jd(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function Eo(i, e, t) {
  return (
    (e = Tf(e)),
    e in i
      ? Object.defineProperty(i, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[e] = t),
    i
  );
}
function sv(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (i.prototype = Object.create(e && e.prototype, {
    constructor: { value: i, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    e && Ns(i, e);
}
function Rs(i) {
  return (
    (Rs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Rs(i)
  );
}
function Ns(i, e) {
  return (
    (Ns = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Ns(i, e)
  );
}
function Ef() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function To(i, e, t) {
  return (
    Ef()
      ? (To = Reflect.construct.bind())
      : (To = function (n, s, o) {
          var a = [null];
          a.push.apply(a, s);
          var l = Function.bind.apply(n, a),
            c = new l();
          return o && Ns(c, o.prototype), c;
        }),
    To.apply(null, arguments)
  );
}
function ov(i) {
  return Function.toString.call(i).indexOf("[native code]") !== -1;
}
function wl(i) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (wl = function (r) {
      if (r === null || !ov(r)) return r;
      if (typeof r != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(r)) return e.get(r);
        e.set(r, n);
      }
      function n() {
        return To(r, arguments, Rs(this).constructor);
      }
      return (
        (n.prototype = Object.create(r.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ns(n, r)
      );
    }),
    wl(i)
  );
}
function Oo(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function av(i, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Oo(i);
}
function lv(i) {
  var e = Ef();
  return function () {
    var r = Rs(i),
      n;
    if (e) {
      var s = Rs(this).constructor;
      n = Reflect.construct(r, arguments, s);
    } else n = r.apply(this, arguments);
    return av(this, n);
  };
}
function cv(i, e) {
  return dv(i) || iv(i, e) || uv(i, e) || hv();
}
function dv(i) {
  if (Array.isArray(i)) return i;
}
function uv(i, e) {
  if (i) {
    if (typeof i == "string") return Yd(i, e);
    var t = Object.prototype.toString.call(i).slice(8, -1);
    if (
      (t === "Object" && i.constructor && (t = i.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(i);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Yd(i, e);
  }
}
function Yd(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
  return r;
}
function hv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fv(i, e) {
  if (typeof i != "object" || i === null) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function Tf(i) {
  var e = fv(i, "string");
  return typeof e == "symbol" ? e : String(e);
}
var pv = typeof global < "u" && {}.toString.call(global) === "[object global]",
  mv = typeof Bun < "u",
  gv = typeof Deno < "u",
  Of = pv || mv || gv;
function Xd(i, e) {
  return i.indexOf(e.toLowerCase()) === 0
    ? i
    : ""
        .concat(e.toLowerCase())
        .concat(i.substr(0, 1).toUpperCase())
        .concat(i.substr(1));
}
function vv(i) {
  return !!(
    i &&
    i.nodeType === 1 &&
    "nodeName" in i &&
    i.ownerDocument &&
    i.ownerDocument.defaultView
  );
}
function yv(i) {
  return !isNaN(parseFloat(i)) && isFinite(i) && Math.floor(i) == i;
}
function Zr(i) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    i
  );
}
function Mf(i) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(i);
}
function $v(i) {
  for (
    var e = (i || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
      t = ((e && e[1]) || "").replace("player.", ""),
      r = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
      n = 0,
      s = r;
    n < s.length;
    n++
  ) {
    var o = s[n];
    if (t.endsWith(o)) return t;
  }
  return "vimeo.com";
}
function xf() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = i.id,
    t = i.url,
    r = e || t;
  if (!r)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (yv(r)) return "https://vimeo.com/".concat(r);
  if (Zr(r)) return r.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(r, "” is not a vimeo.com url."));
}
var Kd = function (e, t, r) {
  var n =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : "addEventListener",
    s =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : "removeEventListener",
    o = typeof t == "string" ? [t] : t;
  return (
    o.forEach(function (a) {
      e[n](a, r);
    }),
    {
      cancel: function () {
        return o.forEach(function (l) {
          return e[s](l, r);
        });
      },
    }
  );
};
function aa(i) {
  var e =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
  if (!i || !e || typeof e.querySelectorAll != "function") return null;
  for (var t = e.querySelectorAll("iframe"), r = 0; r < t.length; r++)
    if (t[r] && t[r].contentWindow === i) return t[r];
  return null;
}
var bv = typeof Array.prototype.indexOf < "u",
  _v = typeof window < "u" && typeof window.postMessage < "u";
if (!Of && (!bv || !_v))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var Oi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function wv(i, e) {
  return (e = { exports: {} }), i(e, e.exports), e.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function (i) {
  if (i.WeakMap) return;
  var e = Object.prototype.hasOwnProperty,
    t =
      Object.defineProperty &&
      (function () {
        try {
          return Object.defineProperty({}, "x", { value: 1 }).x === 1;
        } catch {}
      })(),
    r = function (s, o, a) {
      t
        ? Object.defineProperty(s, o, {
            configurable: !0,
            writable: !0,
            value: a,
          })
        : (s[o] = a);
    };
  i.WeakMap = (function () {
    function s() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if ((r(this, "_id", a("_WeakMap")), arguments.length > 0))
        throw new TypeError("WeakMap iterable is not supported");
    }
    r(s.prototype, "delete", function (c) {
      if ((o(this, "delete"), !n(c))) return !1;
      var d = c[this._id];
      return d && d[0] === c ? (delete c[this._id], !0) : !1;
    }),
      r(s.prototype, "get", function (c) {
        if ((o(this, "get"), !!n(c))) {
          var d = c[this._id];
          if (d && d[0] === c) return d[1];
        }
      }),
      r(s.prototype, "has", function (c) {
        if ((o(this, "has"), !n(c))) return !1;
        var d = c[this._id];
        return !!(d && d[0] === c);
      }),
      r(s.prototype, "set", function (c, d) {
        if ((o(this, "set"), !n(c)))
          throw new TypeError("Invalid value used as weak map key");
        var h = c[this._id];
        return h && h[0] === c
          ? ((h[1] = d), this)
          : (r(c, this._id, [c, d]), this);
      });
    function o(c, d) {
      if (!n(c) || !e.call(c, "_id"))
        throw new TypeError(
          d + " method called on incompatible receiver " + typeof c
        );
    }
    function a(c) {
      return c + "_" + l() + "." + l();
    }
    function l() {
      return Math.random().toString().substring(2);
    }
    return r(s, "_polyfill", !0), s;
  })();
  function n(s) {
    return Object(s) === s;
  }
})(
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Oi
);
var Jt = wv(function (i) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function (t, r, n) {
      (r[t] = r[t] || n()), i.exports && (i.exports = r[t]);
    })("Promise", Oi, function () {
      var t,
        r,
        n,
        s = Object.prototype.toString,
        o =
          typeof setImmediate < "u"
            ? function (b) {
                return setImmediate(b);
              }
            : setTimeout;
      try {
        Object.defineProperty({}, "x", {}),
          (t = function (b, $, E, T) {
            return Object.defineProperty(b, $, {
              value: E,
              writable: !0,
              configurable: T !== !1,
            });
          });
      } catch {
        t = function ($, E, T) {
          return ($[E] = T), $;
        };
      }
      n = (function () {
        var b, $, E;
        function T(S, O) {
          (this.fn = S), (this.self = O), (this.next = void 0);
        }
        return {
          add: function (O, D) {
            (E = new T(O, D)),
              $ ? ($.next = E) : (b = E),
              ($ = E),
              (E = void 0);
          },
          drain: function () {
            var O = b;
            for (b = $ = r = void 0; O; ) O.fn.call(O.self), (O = O.next);
          },
        };
      })();
      function a(v, b) {
        n.add(v, b), r || (r = o(n.drain));
      }
      function l(v) {
        var b,
          $ = typeof v;
        return (
          v != null && ($ == "object" || $ == "function") && (b = v.then),
          typeof b == "function" ? b : !1
        );
      }
      function c() {
        for (var v = 0; v < this.chain.length; v++)
          d(
            this,
            this.state === 1 ? this.chain[v].success : this.chain[v].failure,
            this.chain[v]
          );
        this.chain.length = 0;
      }
      function d(v, b, $) {
        var E, T;
        try {
          b === !1
            ? $.reject(v.msg)
            : (b === !0 ? (E = v.msg) : (E = b.call(void 0, v.msg)),
              E === $.promise
                ? $.reject(TypeError("Promise-chain cycle"))
                : (T = l(E))
                ? T.call(E, $.resolve, $.reject)
                : $.resolve(E));
        } catch (S) {
          $.reject(S);
        }
      }
      function h(v) {
        var b,
          $ = this;
        if (!$.triggered) {
          ($.triggered = !0), $.def && ($ = $.def);
          try {
            (b = l(v))
              ? a(function () {
                  var E = new p($);
                  try {
                    b.call(
                      v,
                      function () {
                        h.apply(E, arguments);
                      },
                      function () {
                        u.apply(E, arguments);
                      }
                    );
                  } catch (T) {
                    u.call(E, T);
                  }
                })
              : (($.msg = v), ($.state = 1), $.chain.length > 0 && a(c, $));
          } catch (E) {
            u.call(new p($), E);
          }
        }
      }
      function u(v) {
        var b = this;
        b.triggered ||
          ((b.triggered = !0),
          b.def && (b = b.def),
          (b.msg = v),
          (b.state = 2),
          b.chain.length > 0 && a(c, b));
      }
      function f(v, b, $, E) {
        for (var T = 0; T < b.length; T++)
          (function (O) {
            v.resolve(b[O]).then(function (x) {
              $(O, x);
            }, E);
          })(T);
      }
      function p(v) {
        (this.def = v), (this.triggered = !1);
      }
      function m(v) {
        (this.promise = v),
          (this.state = 0),
          (this.triggered = !1),
          (this.chain = []),
          (this.msg = void 0);
      }
      function g(v) {
        if (typeof v != "function") throw TypeError("Not a function");
        if (this.__NPO__ !== 0) throw TypeError("Not a promise");
        this.__NPO__ = 1;
        var b = new m(this);
        (this.then = function (E, T) {
          var S = {
            success: typeof E == "function" ? E : !0,
            failure: typeof T == "function" ? T : !1,
          };
          return (
            (S.promise = new this.constructor(function (D, x) {
              if (typeof D != "function" || typeof x != "function")
                throw TypeError("Not a function");
              (S.resolve = D), (S.reject = x);
            })),
            b.chain.push(S),
            b.state !== 0 && a(c, b),
            S.promise
          );
        }),
          (this.catch = function (E) {
            return this.then(void 0, E);
          });
        try {
          v.call(
            void 0,
            function (E) {
              h.call(b, E);
            },
            function (E) {
              u.call(b, E);
            }
          );
        } catch ($) {
          u.call(b, $);
        }
      }
      var y = t({}, "constructor", g, !1);
      return (
        (g.prototype = y),
        t(y, "__NPO__", 0, !1),
        t(g, "resolve", function (b) {
          var $ = this;
          return b && typeof b == "object" && b.__NPO__ === 1
            ? b
            : new $(function (T, S) {
                if (typeof T != "function" || typeof S != "function")
                  throw TypeError("Not a function");
                T(b);
              });
        }),
        t(g, "reject", function (b) {
          return new this(function (E, T) {
            if (typeof E != "function" || typeof T != "function")
              throw TypeError("Not a function");
            T(b);
          });
        }),
        t(g, "all", function (b) {
          var $ = this;
          return s.call(b) != "[object Array]"
            ? $.reject(TypeError("Not an array"))
            : b.length === 0
            ? $.resolve([])
            : new $(function (T, S) {
                if (typeof T != "function" || typeof S != "function")
                  throw TypeError("Not a function");
                var O = b.length,
                  D = Array(O),
                  x = 0;
                f(
                  $,
                  b,
                  function (w, P) {
                    (D[w] = P), ++x === O && T(D);
                  },
                  S
                );
              });
        }),
        t(g, "race", function (b) {
          var $ = this;
          return s.call(b) != "[object Array]"
            ? $.reject(TypeError("Not an array"))
            : new $(function (T, S) {
                if (typeof T != "function" || typeof S != "function")
                  throw TypeError("Not a function");
                f(
                  $,
                  b,
                  function (D, x) {
                    T(x);
                  },
                  S
                );
              });
        }),
        g
      );
    });
  }),
  Qr = new WeakMap();
function Vi(i, e, t) {
  var r = Qr.get(i.element) || {};
  e in r || (r[e] = []), r[e].push(t), Qr.set(i.element, r);
}
function Wo(i, e) {
  var t = Qr.get(i.element) || {};
  return t[e] || [];
}
function jo(i, e, t) {
  var r = Qr.get(i.element) || {};
  if (!r[e]) return !0;
  if (!t) return (r[e] = []), Qr.set(i.element, r), !0;
  var n = r[e].indexOf(t);
  return (
    n !== -1 && r[e].splice(n, 1),
    Qr.set(i.element, r),
    r[e] && r[e].length === 0
  );
}
function Sv(i, e) {
  var t = Wo(i, e);
  if (t.length < 1) return !1;
  var r = t.shift();
  return jo(i, e, r), r;
}
function Ev(i, e) {
  var t = Qr.get(i);
  Qr.set(e, t), Qr.delete(i);
}
function Us(i) {
  if (typeof i == "string")
    try {
      i = JSON.parse(i);
    } catch (e) {
      return console.warn(e), {};
    }
  return i;
}
function xn(i, e, t) {
  if (!(!i.element.contentWindow || !i.element.contentWindow.postMessage)) {
    var r = { method: e };
    t !== void 0 && (r.value = t);
    var n = parseFloat(
      navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
    );
    n >= 8 && n < 10 && (r = JSON.stringify(r)),
      i.element.contentWindow.postMessage(r, i.origin);
  }
}
function Tv(i, e) {
  e = Us(e);
  var t = [],
    r;
  if (e.event) {
    if (e.event === "error") {
      var n = Wo(i, e.data.method);
      n.forEach(function (o) {
        var a = new Error(e.data.message);
        (a.name = e.data.name), o.reject(a), jo(i, e.data.method, o);
      });
    }
    (t = Wo(i, "event:".concat(e.event))), (r = e.data);
  } else if (e.method) {
    var s = Sv(i, e.method);
    s && (t.push(s), (r = e.value));
  }
  t.forEach(function (o) {
    try {
      if (typeof o == "function") {
        o.call(i, r);
        return;
      }
      o.resolve(r);
    } catch {}
  });
}
var Ov = [
  "airplay",
  "audio_tracks",
  "audiotrack",
  "autopause",
  "autoplay",
  "background",
  "byline",
  "cc",
  "chapter_id",
  "chapters",
  "chromecast",
  "color",
  "colors",
  "controls",
  "dnt",
  "end_time",
  "fullscreen",
  "height",
  "id",
  "initial_quality",
  "interactive_params",
  "keyboard",
  "loop",
  "maxheight",
  "max_quality",
  "maxwidth",
  "min_quality",
  "muted",
  "play_button_position",
  "playsinline",
  "portrait",
  "preload",
  "progress_bar",
  "quality",
  "quality_selector",
  "responsive",
  "skipping_forward",
  "speed",
  "start_time",
  "texttrack",
  "thumbnail_id",
  "title",
  "transcript",
  "transparent",
  "unmute_button",
  "url",
  "vimeo_logo",
  "volume",
  "watch_full_video",
  "width",
];
function Df(i) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Ov.reduce(function (t, r) {
    var n = i.getAttribute("data-vimeo-".concat(r));
    return (n || n === "") && (t[r] = n === "" ? 1 : n), t;
  }, e);
}
function uc(i, e) {
  var t = i.html;
  if (!e) throw new TypeError("An element must be provided");
  if (e.getAttribute("data-vimeo-initialized") !== null)
    return e.querySelector("iframe");
  var r = document.createElement("div");
  return (
    (r.innerHTML = t),
    e.appendChild(r.firstChild),
    e.setAttribute("data-vimeo-initialized", "true"),
    e.querySelector("iframe")
  );
}
function Pf(i) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (r, n) {
    if (!Zr(i)) throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
    var s = $v(i),
      o = "https://"
        .concat(s, "/api/oembed.json?url=")
        .concat(encodeURIComponent(i));
    for (var a in e)
      e.hasOwnProperty(a) &&
        (o += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
    var l =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    l.open("GET", o, !0),
      (l.onload = function () {
        if (l.status === 404) {
          n(new Error("“".concat(i, "” was not found.")));
          return;
        }
        if (l.status === 403) {
          n(new Error("“".concat(i, "” is not embeddable.")));
          return;
        }
        try {
          var c = JSON.parse(l.responseText);
          if (c.domain_status_code === 403) {
            uc(c, t), n(new Error("“".concat(i, "” is not embeddable.")));
            return;
          }
          r(c);
        } catch (d) {
          n(d);
        }
      }),
      (l.onerror = function () {
        var c = l.status ? " (".concat(l.status, ")") : "";
        n(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              c,
              "."
            )
          )
        );
      }),
      l.send();
  });
}
function Mv() {
  var i =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(i.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = function (n) {
      "console" in window &&
        console.error &&
        console.error("There was an error creating an embed: ".concat(n));
    };
  e.forEach(function (r) {
    try {
      if (r.getAttribute("data-vimeo-defer") !== null) return;
      var n = Df(r),
        s = xf(n);
      Pf(s, n, r)
        .then(function (o) {
          return uc(o, r);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
function xv() {
  var i =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = function (r) {
      if (Zr(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
        var n = r.source ? aa(r.source, i) : null;
        if (n) {
          var s = n.parentElement;
          s.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
        }
      }
    };
    window.addEventListener("message", e);
  }
}
function Dv() {
  var i =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = function (r) {
      if (Zr(r.origin)) {
        var n = Us(r.data);
        if (!(!n || n.event !== "ready")) {
          var s = r.source ? aa(r.source, i) : null;
          if (s && Mf(s.src)) {
            var o = new Yo(s);
            o.callMethod("appendVideoMetadata", window.location.href);
          }
        }
      }
    };
    window.addEventListener("message", e);
  }
}
function Pv() {
  var i =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = function (n) {
        "console" in window &&
          console.error &&
          console.error("There was an error getting video Id: ".concat(n));
      },
      t = function (n) {
        if (Zr(n.origin)) {
          var s = Us(n.data);
          if (!(!s || s.event !== "ready")) {
            var o = n.source ? aa(n.source, i) : null;
            if (o && Mf(o.src)) {
              var a = new Yo(o);
              a.getVideoId()
                .then(function (l) {
                  var c = new RegExp(
                    "[?&]vimeo_t_".concat(l, "=([^&#]*)")
                  ).exec(window.location.href);
                  if (c && c[1]) {
                    var d = decodeURI(c[1]);
                    a.setCurrentTime(d);
                  }
                })
                .catch(e);
            }
          }
        }
      };
    window.addEventListener("message", t);
  }
}
function kv() {
  if (!window.VimeoDRMEmbedsUpdated) {
    window.VimeoDRMEmbedsUpdated = !0;
    var i = function (t) {
      if (Zr(t.origin)) {
        var r = Us(t.data);
        if (!(!r || r.event !== "drminitfailed")) {
          var n = t.source ? aa(t.source) : null;
          if (n) {
            var s = n.getAttribute("allow") || "",
              o = s.includes("encrypted-media");
            if (!o) {
              n.setAttribute("allow", "".concat(s, "; encrypted-media"));
              var a = new URL(n.getAttribute("src"));
              a.searchParams.set("forcereload", "drm"),
                n.setAttribute("src", a.toString());
              return;
            }
          }
        }
      }
    };
    window.addEventListener("message", i);
  }
}
function Cv() {
  var i = (function () {
      for (
        var r,
          n = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          s = 0,
          o = n.length,
          a = {};
        s < o;
        s++
      )
        if (((r = n[s]), r && r[1] in document)) {
          for (s = 0; s < r.length; s++) a[n[0][s]] = r[s];
          return a;
        }
      return !1;
    })(),
    e = {
      fullscreenchange: i.fullscreenchange,
      fullscreenerror: i.fullscreenerror,
    },
    t = {
      request: function (n) {
        return new Promise(function (s, o) {
          var a = function c() {
            t.off("fullscreenchange", c), s();
          };
          t.on("fullscreenchange", a), (n = n || document.documentElement);
          var l = n[i.requestFullscreen]();
          l instanceof Promise && l.then(a).catch(o);
        });
      },
      exit: function () {
        return new Promise(function (n, s) {
          if (!t.isFullscreen) {
            n();
            return;
          }
          var o = function l() {
            t.off("fullscreenchange", l), n();
          };
          t.on("fullscreenchange", o);
          var a = document[i.exitFullscreen]();
          a instanceof Promise && a.then(o).catch(s);
        });
      },
      on: function (n, s) {
        var o = e[n];
        o && document.addEventListener(o, s);
      },
      off: function (n, s) {
        var o = e[n];
        o && document.removeEventListener(o, s);
      },
    };
  return (
    Object.defineProperties(t, {
      isFullscreen: {
        get: function () {
          return !!document[i.fullscreenElement];
        },
      },
      element: {
        enumerable: !0,
        get: function () {
          return document[i.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: !0,
        get: function () {
          return !!document[i.fullscreenEnabled];
        },
      },
    }),
    t
  );
}
var Av = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  Lv = (function (i) {
    sv(t, i);
    var e = lv(t);
    function t(r, n) {
      var s,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        a = arguments.length > 3 ? arguments[3] : void 0;
      return (
        wf(this, t),
        (s = e.call(this)),
        Eo(Oo(s), "logger", void 0),
        Eo(Oo(s), "speedAdjustment", 0),
        Eo(
          Oo(s),
          "adjustSpeed",
          (function () {
            var l = Cn(
              bt().mark(function c(d, h) {
                var u;
                return bt().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        if (s.speedAdjustment !== h) {
                          p.next = 2;
                          break;
                        }
                        return p.abrupt("return");
                      case 2:
                        return (p.next = 4), d.getPlaybackRate();
                      case 4:
                        return (
                          (p.t0 = p.sent),
                          (p.t1 = s.speedAdjustment),
                          (p.t2 = p.t0 - p.t1),
                          (p.t3 = h),
                          (u = p.t2 + p.t3),
                          s.log("New playbackRate:  ".concat(u)),
                          (p.next = 12),
                          d.setPlaybackRate(u)
                        );
                      case 12:
                        s.speedAdjustment = h;
                      case 13:
                      case "end":
                        return p.stop();
                    }
                }, c);
              })
            );
            return function (c, d) {
              return l.apply(this, arguments);
            };
          })()
        ),
        (s.logger = a),
        s.init(n, r, Ud(Ud({}, Av), o)),
        s
      );
    }
    return (
      Sf(t, [
        {
          key: "disconnect",
          value: function () {
            this.dispatchEvent(new Event("disconnect"));
          },
        },
        {
          key: "init",
          value: (function () {
            var r = Cn(
              bt().mark(function s(o, a, l) {
                var c = this,
                  d,
                  h,
                  u;
                return bt().wrap(
                  function (p) {
                    for (;;)
                      switch ((p.prev = p.next)) {
                        case 0:
                          return (
                            (p.next = 2), this.waitForTOReadyState(o, "open")
                          );
                        case 2:
                          if (l.role !== "viewer") {
                            p.next = 10;
                            break;
                          }
                          return (p.next = 5), this.updatePlayer(o, a, l);
                        case 5:
                          (d = Kd(o, "change", function () {
                            return c.updatePlayer(o, a, l);
                          })),
                            (h = this.maintainPlaybackPosition(o, a, l)),
                            this.addEventListener("disconnect", function () {
                              h.cancel(), d.cancel();
                            }),
                            (p.next = 14);
                          break;
                        case 10:
                          return (p.next = 12), this.updateTimingObject(o, a);
                        case 12:
                          (u = Kd(
                            a,
                            ["seeked", "play", "pause", "ratechange"],
                            function () {
                              return c.updateTimingObject(o, a);
                            },
                            "on",
                            "off"
                          )),
                            this.addEventListener("disconnect", function () {
                              return u.cancel();
                            });
                        case 14:
                        case "end":
                          return p.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
            function n(s, o, a) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "updateTimingObject",
          value: (function () {
            var r = Cn(
              bt().mark(function s(o, a) {
                var l, c, d, h, u;
                return bt().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        return (
                          (p.next = 2),
                          Promise.all([
                            a.getCurrentTime(),
                            a.getPaused(),
                            a.getPlaybackRate(),
                          ])
                        );
                      case 2:
                        (l = p.sent),
                          (c = cv(l, 3)),
                          (d = c[0]),
                          (h = c[1]),
                          (u = c[2]),
                          o.update({ position: d, velocity: h ? 0 : u });
                      case 8:
                      case "end":
                        return p.stop();
                    }
                }, s);
              })
            );
            function n(s, o) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "updatePlayer",
          value: (function () {
            var r = Cn(
              bt().mark(function s(o, a, l) {
                var c, d, h;
                return bt().wrap(
                  function (f) {
                    for (;;)
                      switch ((f.prev = f.next)) {
                        case 0:
                          if (
                            ((c = o.query()),
                            (d = c.position),
                            (h = c.velocity),
                            typeof d == "number" && a.setCurrentTime(d),
                            typeof h != "number")
                          ) {
                            f.next = 25;
                            break;
                          }
                          if (h !== 0) {
                            f.next = 11;
                            break;
                          }
                          return (f.next = 6), a.getPaused();
                        case 6:
                          if (((f.t0 = f.sent), f.t0 !== !1)) {
                            f.next = 9;
                            break;
                          }
                          a.pause();
                        case 9:
                          f.next = 25;
                          break;
                        case 11:
                          if (!(h > 0)) {
                            f.next = 25;
                            break;
                          }
                          return (f.next = 14), a.getPaused();
                        case 14:
                          if (((f.t1 = f.sent), f.t1 !== !0)) {
                            f.next = 19;
                            break;
                          }
                          return (
                            (f.next = 18),
                            a.play().catch(
                              (function () {
                                var p = Cn(
                                  bt().mark(function m(g) {
                                    return bt().wrap(function (v) {
                                      for (;;)
                                        switch ((v.prev = v.next)) {
                                          case 0:
                                            if (
                                              !(
                                                g.name === "NotAllowedError" &&
                                                l.autoPlayMuted
                                              )
                                            ) {
                                              v.next = 5;
                                              break;
                                            }
                                            return (v.next = 3), a.setMuted(!0);
                                          case 3:
                                            return (
                                              (v.next = 5),
                                              a.play().catch(function (b) {
                                                return console.error(
                                                  "Couldn't play the video from TimingSrcConnector. Error:",
                                                  b
                                                );
                                              })
                                            );
                                          case 5:
                                          case "end":
                                            return v.stop();
                                        }
                                    }, m);
                                  })
                                );
                                return function (m) {
                                  return p.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 18:
                          this.updatePlayer(o, a, l);
                        case 19:
                          return (f.next = 21), a.getPlaybackRate();
                        case 21:
                          if (((f.t2 = f.sent), (f.t3 = h), f.t2 === f.t3)) {
                            f.next = 25;
                            break;
                          }
                          a.setPlaybackRate(h);
                        case 25:
                        case "end":
                          return f.stop();
                      }
                  },
                  s,
                  this
                );
              })
            );
            function n(s, o, a) {
              return r.apply(this, arguments);
            }
            return n;
          })(),
        },
        {
          key: "maintainPlaybackPosition",
          value: function (n, s, o) {
            var a = this,
              l = o.allowedDrift,
              c = o.maxAllowedDrift,
              d = o.minCheckInterval,
              h = o.maxRateAdjustment,
              u = o.maxTimeToCatchUp,
              f = Math.min(u, Math.max(d, c)) * 1e3,
              p = (function () {
                var g = Cn(
                  bt().mark(function y() {
                    var v, b, $, E, T;
                    return bt().wrap(function (O) {
                      for (;;)
                        switch ((O.prev = O.next)) {
                          case 0:
                            if (((O.t0 = n.query().velocity === 0), O.t0)) {
                              O.next = 6;
                              break;
                            }
                            return (O.next = 4), s.getPaused();
                          case 4:
                            (O.t1 = O.sent), (O.t0 = O.t1 === !0);
                          case 6:
                            if (!O.t0) {
                              O.next = 8;
                              break;
                            }
                            return O.abrupt("return");
                          case 8:
                            return (
                              (O.t2 = n.query().position),
                              (O.next = 11),
                              s.getCurrentTime()
                            );
                          case 11:
                            if (
                              ((O.t3 = O.sent),
                              (v = O.t2 - O.t3),
                              (b = Math.abs(v)),
                              a.log("Drift: ".concat(v)),
                              !(b > c))
                            ) {
                              O.next = 22;
                              break;
                            }
                            return (O.next = 18), a.adjustSpeed(s, 0);
                          case 18:
                            s.setCurrentTime(n.query().position),
                              a.log("Resync by currentTime"),
                              (O.next = 29);
                            break;
                          case 22:
                            if (!(b > l)) {
                              O.next = 29;
                              break;
                            }
                            return (
                              ($ = b / u),
                              (E = h),
                              (T = $ < E ? (E - $) / 2 : E),
                              (O.next = 28),
                              a.adjustSpeed(s, T * Math.sign(v))
                            );
                          case 28:
                            a.log("Resync by playbackRate");
                          case 29:
                          case "end":
                            return O.stop();
                        }
                    }, y);
                  })
                );
                return function () {
                  return g.apply(this, arguments);
                };
              })(),
              m = setInterval(function () {
                return p();
              }, f);
            return {
              cancel: function () {
                return clearInterval(m);
              },
            };
          },
        },
        {
          key: "log",
          value: function (n) {
            var s;
            (s = this.logger) === null ||
              s === void 0 ||
              s.call(this, "TimingSrcConnector: ".concat(n));
          },
        },
        {
          key: "waitForTOReadyState",
          value: function (n, s) {
            return new Promise(function (o) {
              var a = function l() {
                n.readyState === s
                  ? o()
                  : n.addEventListener("readystatechange", l, { once: !0 });
              };
              a();
            });
          },
        },
      ]),
      t
    );
  })(wl(EventTarget)),
  hi = new WeakMap(),
  Aa = new WeakMap(),
  At = {},
  Yo = (function () {
    function i(e) {
      var t = this,
        r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (wf(this, i),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 &&
            window.console &&
            console.warn &&
            console.warn(
              "A jQuery object with multiple elements was passed, using the first element."
            ),
          (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !vv(e))
      )
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      if (e.nodeName !== "IFRAME") {
        var n = e.querySelector("iframe");
        n && (e = n);
      }
      if (e.nodeName === "IFRAME" && !Zr(e.getAttribute("src") || ""))
        throw new Error("The player element passed isn’t a Vimeo embed.");
      if (hi.has(e)) return hi.get(e);
      (this._window = e.ownerDocument.defaultView),
        (this.element = e),
        (this.origin = "*");
      var s = new Jt(function (a, l) {
        if (
          ((t._onMessage = function (h) {
            if (!(!Zr(h.origin) || t.element.contentWindow !== h.source)) {
              t.origin === "*" && (t.origin = h.origin);
              var u = Us(h.data),
                f = u && u.event === "error",
                p = f && u.data && u.data.method === "ready";
              if (p) {
                var m = new Error(u.data.message);
                (m.name = u.data.name), l(m);
                return;
              }
              var g = u && u.event === "ready",
                y = u && u.method === "ping";
              if (g || y) {
                t.element.setAttribute("data-ready", "true"), a();
                return;
              }
              Tv(t, u);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var c = Df(e, r),
            d = xf(c);
          Pf(d, c, e)
            .then(function (h) {
              var u = uc(h, e);
              return (
                (t.element = u),
                (t._originalElement = e),
                Ev(e, u),
                hi.set(t.element, t),
                h
              );
            })
            .catch(l);
        }
      });
      if (
        (Aa.set(this, s),
        hi.set(this.element, this),
        this.element.nodeName === "IFRAME" && xn(this, "ping"),
        At.isEnabled)
      ) {
        var o = function () {
          return At.exit();
        };
        (this.fullscreenchangeHandler = function () {
          At.isFullscreen
            ? Vi(t, "event:exitFullscreen", o)
            : jo(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              xn(t, "fullscreenchange", At.isFullscreen);
            });
        }),
          At.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      Sf(
        i,
        [
          {
            key: "callMethod",
            value: function (t) {
              for (
                var r = this,
                  n = arguments.length,
                  s = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                s[o - 1] = arguments[o];
              if (t == null)
                throw new TypeError("You must pass a method name.");
              return new Jt(function (a, l) {
                return r
                  .ready()
                  .then(function () {
                    Vi(r, t, { resolve: a, reject: l }),
                      s.length === 0 ? (s = {}) : s.length === 1 && (s = s[0]),
                      xn(r, t, s);
                  })
                  .catch(l);
              });
            },
          },
          {
            key: "get",
            value: function (t) {
              var r = this;
              return new Jt(function (n, s) {
                return (
                  (t = Xd(t, "get")),
                  r
                    .ready()
                    .then(function () {
                      Vi(r, t, { resolve: n, reject: s }), xn(r, t);
                    })
                    .catch(s)
                );
              });
            },
          },
          {
            key: "set",
            value: function (t, r) {
              var n = this;
              return new Jt(function (s, o) {
                if (((t = Xd(t, "set")), r == null))
                  throw new TypeError("There must be a value to set.");
                return n
                  .ready()
                  .then(function () {
                    Vi(n, t, { resolve: s, reject: o }), xn(n, t, r);
                  })
                  .catch(o);
              });
            },
          },
          {
            key: "on",
            value: function (t, r) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (!r) throw new TypeError("You must pass a callback function.");
              if (typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var n = Wo(this, "event:".concat(t));
              n.length === 0 &&
                this.callMethod("addEventListener", t).catch(function () {}),
                Vi(this, "event:".concat(t), r);
            },
          },
          {
            key: "off",
            value: function (t, r) {
              if (!t) throw new TypeError("You must pass an event name.");
              if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
              var n = jo(this, "event:".concat(t), r);
              n &&
                this.callMethod("removeEventListener", t).catch(function (
                  s
                ) {});
            },
          },
          {
            key: "loadVideo",
            value: function (t) {
              return this.callMethod("loadVideo", t);
            },
          },
          {
            key: "ready",
            value: function () {
              var t =
                Aa.get(this) ||
                new Jt(function (r, n) {
                  n(new Error("Unknown player. Probably unloaded."));
                });
              return Jt.resolve(t);
            },
          },
          {
            key: "addCuePoint",
            value: function (t) {
              var r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              return this.callMethod("addCuePoint", { time: t, data: r });
            },
          },
          {
            key: "removeCuePoint",
            value: function (t) {
              return this.callMethod("removeCuePoint", t);
            },
          },
          {
            key: "enableTextTrack",
            value: function (t, r) {
              if (!t) throw new TypeError("You must pass a language.");
              return this.callMethod("enableTextTrack", {
                language: t,
                kind: r,
              });
            },
          },
          {
            key: "disableTextTrack",
            value: function () {
              return this.callMethod("disableTextTrack");
            },
          },
          {
            key: "pause",
            value: function () {
              return this.callMethod("pause");
            },
          },
          {
            key: "play",
            value: function () {
              return this.callMethod("play");
            },
          },
          {
            key: "requestFullscreen",
            value: function () {
              return At.isEnabled
                ? At.request(this.element)
                : this.callMethod("requestFullscreen");
            },
          },
          {
            key: "exitFullscreen",
            value: function () {
              return At.isEnabled
                ? At.exit()
                : this.callMethod("exitFullscreen");
            },
          },
          {
            key: "getFullscreen",
            value: function () {
              return At.isEnabled
                ? Jt.resolve(At.isFullscreen)
                : this.get("fullscreen");
            },
          },
          {
            key: "requestPictureInPicture",
            value: function () {
              return this.callMethod("requestPictureInPicture");
            },
          },
          {
            key: "exitPictureInPicture",
            value: function () {
              return this.callMethod("exitPictureInPicture");
            },
          },
          {
            key: "getPictureInPicture",
            value: function () {
              return this.get("pictureInPicture");
            },
          },
          {
            key: "remotePlaybackPrompt",
            value: function () {
              return this.callMethod("remotePlaybackPrompt");
            },
          },
          {
            key: "unload",
            value: function () {
              return this.callMethod("unload");
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              return new Jt(function (r) {
                if (
                  (Aa.delete(t),
                  hi.delete(t.element),
                  t._originalElement &&
                    (hi.delete(t._originalElement),
                    t._originalElement.removeAttribute(
                      "data-vimeo-initialized"
                    )),
                  t.element &&
                    t.element.nodeName === "IFRAME" &&
                    t.element.parentNode &&
                    (t.element.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== t.element.parentNode
                      ? t.element.parentNode.parentNode.removeChild(
                          t.element.parentNode
                        )
                      : t.element.parentNode.removeChild(t.element)),
                  t.element &&
                    t.element.nodeName === "DIV" &&
                    t.element.parentNode)
                ) {
                  t.element.removeAttribute("data-vimeo-initialized");
                  var n = t.element.querySelector("iframe");
                  n &&
                    n.parentNode &&
                    (n.parentNode.parentNode &&
                    t._originalElement &&
                    t._originalElement !== n.parentNode
                      ? n.parentNode.parentNode.removeChild(n.parentNode)
                      : n.parentNode.removeChild(n));
                }
                t._window.removeEventListener("message", t._onMessage),
                  At.isEnabled &&
                    At.off("fullscreenchange", t.fullscreenchangeHandler),
                  r();
              });
            },
          },
          {
            key: "getAutopause",
            value: function () {
              return this.get("autopause");
            },
          },
          {
            key: "setAutopause",
            value: function (t) {
              return this.set("autopause", t);
            },
          },
          {
            key: "getBuffered",
            value: function () {
              return this.get("buffered");
            },
          },
          {
            key: "getCameraProps",
            value: function () {
              return this.get("cameraProps");
            },
          },
          {
            key: "setCameraProps",
            value: function (t) {
              return this.set("cameraProps", t);
            },
          },
          {
            key: "getChapters",
            value: function () {
              return this.get("chapters");
            },
          },
          {
            key: "getCurrentChapter",
            value: function () {
              return this.get("currentChapter");
            },
          },
          {
            key: "getColor",
            value: function () {
              return this.get("color");
            },
          },
          {
            key: "getColors",
            value: function () {
              return Jt.all([
                this.get("colorOne"),
                this.get("colorTwo"),
                this.get("colorThree"),
                this.get("colorFour"),
              ]);
            },
          },
          {
            key: "setColor",
            value: function (t) {
              return this.set("color", t);
            },
          },
          {
            key: "setColors",
            value: function (t) {
              if (!Array.isArray(t))
                return new Jt(function (s, o) {
                  return o(new TypeError("Argument must be an array."));
                });
              var r = new Jt(function (s) {
                  return s(null);
                }),
                n = [
                  t[0] ? this.set("colorOne", t[0]) : r,
                  t[1] ? this.set("colorTwo", t[1]) : r,
                  t[2] ? this.set("colorThree", t[2]) : r,
                  t[3] ? this.set("colorFour", t[3]) : r,
                ];
              return Jt.all(n);
            },
          },
          {
            key: "getCuePoints",
            value: function () {
              return this.get("cuePoints");
            },
          },
          {
            key: "getCurrentTime",
            value: function () {
              return this.get("currentTime");
            },
          },
          {
            key: "setCurrentTime",
            value: function (t) {
              return this.set("currentTime", t);
            },
          },
          {
            key: "getDuration",
            value: function () {
              return this.get("duration");
            },
          },
          {
            key: "getEnded",
            value: function () {
              return this.get("ended");
            },
          },
          {
            key: "getLoop",
            value: function () {
              return this.get("loop");
            },
          },
          {
            key: "setLoop",
            value: function (t) {
              return this.set("loop", t);
            },
          },
          {
            key: "setMuted",
            value: function (t) {
              return this.set("muted", t);
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.get("muted");
            },
          },
          {
            key: "getPaused",
            value: function () {
              return this.get("paused");
            },
          },
          {
            key: "getPlaybackRate",
            value: function () {
              return this.get("playbackRate");
            },
          },
          {
            key: "setPlaybackRate",
            value: function (t) {
              return this.set("playbackRate", t);
            },
          },
          {
            key: "getPlayed",
            value: function () {
              return this.get("played");
            },
          },
          {
            key: "getQualities",
            value: function () {
              return this.get("qualities");
            },
          },
          {
            key: "getQuality",
            value: function () {
              return this.get("quality");
            },
          },
          {
            key: "setQuality",
            value: function (t) {
              return this.set("quality", t);
            },
          },
          {
            key: "getRemotePlaybackAvailability",
            value: function () {
              return this.get("remotePlaybackAvailability");
            },
          },
          {
            key: "getRemotePlaybackState",
            value: function () {
              return this.get("remotePlaybackState");
            },
          },
          {
            key: "getSeekable",
            value: function () {
              return this.get("seekable");
            },
          },
          {
            key: "getSeeking",
            value: function () {
              return this.get("seeking");
            },
          },
          {
            key: "getTextTracks",
            value: function () {
              return this.get("textTracks");
            },
          },
          {
            key: "getVideoEmbedCode",
            value: function () {
              return this.get("videoEmbedCode");
            },
          },
          {
            key: "getVideoId",
            value: function () {
              return this.get("videoId");
            },
          },
          {
            key: "getVideoTitle",
            value: function () {
              return this.get("videoTitle");
            },
          },
          {
            key: "getVideoWidth",
            value: function () {
              return this.get("videoWidth");
            },
          },
          {
            key: "getVideoHeight",
            value: function () {
              return this.get("videoHeight");
            },
          },
          {
            key: "getVideoUrl",
            value: function () {
              return this.get("videoUrl");
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.get("volume");
            },
          },
          {
            key: "setVolume",
            value: function (t) {
              return this.set("volume", t);
            },
          },
          {
            key: "setTimingSrc",
            value: (function () {
              var e = Cn(
                bt().mark(function r(n, s) {
                  var o = this,
                    a;
                  return bt().wrap(
                    function (c) {
                      for (;;)
                        switch ((c.prev = c.next)) {
                          case 0:
                            if (n) {
                              c.next = 2;
                              break;
                            }
                            throw new TypeError(
                              "A Timing Object must be provided."
                            );
                          case 2:
                            return (c.next = 4), this.ready();
                          case 4:
                            return (
                              (a = new Lv(this, n, s)),
                              xn(this, "notifyTimingObjectConnect"),
                              a.addEventListener("disconnect", function () {
                                return xn(o, "notifyTimingObjectDisconnect");
                              }),
                              c.abrupt("return", a)
                            );
                          case 8:
                          case "end":
                            return c.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
              function t(r, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ],
        [
          {
            key: "isVimeoUrl",
            value: function (t) {
              return Zr(t);
            },
          },
        ]
      ),
      i
    );
  })();
Of || ((At = Cv()), Mv(), xv(), Dv(), Pv(), kv());
const Iv = "e34ae6821841bc91dd84380edccfbf65",
  Rv = "https://api.vimeo.com",
  Nv = Rv,
  Fv = Iv,
  Hv = async ({ url: i, options: e }) => {
    try {
      const t = await fetch(`${Nv}/${i}`, {
        headers: { Authorization: `Bearer ${Fv}` },
        ...e,
      });
      if (!t.ok) throw new Error("Video fetch failed");
      return await t.json();
    } catch {
      return null;
    }
  },
  qv = async (i) => {
    const e = Cf(i);
    if (!e) return null;
    const t = `videos/${e}`;
    return await Hv({ url: t });
  },
  kf = async (i) => {
    const e = await qv(i);
    if (!e) return null;
    const { pictures: t, width: r, height: n, play: s, embed: o } = e;
    return t ? { pictures: t, width: r, height: n, play: s, embed: o } : null;
  },
  Cf = (i) => {
    if (i.startsWith("http")) {
      const e = i.match(/vimeo\.com\/(\d+)/);
      if (e && e[1]) return e[1];
    }
    return i;
  },
  Bv = "#resources-wn";
class zv {
  constructor(e) {
    _(this, "DOM");
    _(this, "scrollHandler", null);
    _(this, "scrollPinTagHandler", null);
    _(this, "pinTagObserver", null);
    _(this, "pinTagSentinels", []);
    _(this, "resourcesSectionObserver", null);
    _(this, "sectionHighlightObserver", null);
    _(this, "sectionHighlightTargets", []);
    _(this, "emblaSlides", []);
    _(this, "magneticHandlers", new Map());
    _(this, "videoClickHandler", null);
    _(this, "modalCloseHandlers", []);
    _(this, "categoryFilterHandlers", new Map());
    _(this, "vimeoPlayers", []);
    _(this, "paginationTimeout", null);
    _(this, "paginationHandlers", new Map());
    _(this, "resourcesSectionTrigger", null);
    _(this, "clickToSectionHandlers", new Map());
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    new _f(),
      this.updateSlideLength(".embla__cate__container", ".embla__cate__slide"),
      this.updateSlideLength(".embla__cs__container", ".embla__cs__slide"),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".embla-cate",
          idBtnPrev: "btn-cate-prev",
          idBtnNext: "btn-cate-next",
          wrapElement: this.DOM.el,
        })
      ),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".embla-cs-slide",
          idBtnPrev: "btn-case-studies-prev",
          idBtnNext: "btn-case-studies-next",
          wrapElement: this.DOM.el,
        })
      ),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".embla-la-slide",
          idBtnPrev: "btn-la-prev",
          idBtnNext: "btn-la-next",
          wrapElement: this.DOM.el,
        })
      ),
      this.emblaSlides.push(
        new Ne({
          classSlide: ".embla-video-hub-slide",
          idBtnPrev: "btn-video-hub-prev",
          idBtnNext: "btn-video-hub-next",
          wrapElement: this.DOM.el,
        })
      ),
      this.emblaSlides.push(
        new Ne({ classSlide: ".embla-rs", wrapElement: this.DOM.el })
      ),
      C.registerPlugin(U),
      this.pinTagResources(),
      this.handleApiVimeoVideoSlide(),
      this.handleApiAcademyVideoIntroV2(),
      this.handleInitSlideCustom(),
      this.handleSelectCategoryMobile(),
      this.handleMagneticHover(),
      this.detectSectionCurrent(),
      this.initResourcesSectionObserver(),
      this.handleScrollTopEventPagination(),
      this.scrollHorizontalTags(),
      this.handleClickToSection();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  async handleApiVimeoVideoSlide() {
    const e = this.DOM.el.querySelectorAll(".video-hub-card");
    e.length !== 0 &&
      (await Promise.all(
        Array.from(e).map(async (t) => {
          var s;
          const r = t.getAttribute("data-vimeo");
          if (!r) return;
          const n = await kf(r);
          n &&
            ((s = t.querySelector(".img")) == null ||
              s.setAttribute("src", n.pictures.base_link));
        })
      ));
  }
  async handleApiAcademyVideoIntroV2() {
    const e = this.DOM.el.querySelector(".resources-acadamy-inner-left");
    if (!e) return;
    let t = e.getAttribute("data-video");
    if (!t) return;
    const r = this.DOM.el.querySelector(".resources-acadamy-inner-left-img");
    for (; r.firstChild; ) r.removeChild(r.firstChild);
    t = Cf(t);
    const n = new Yo(r, { id: Number(t), background: !0, responsive: !0 });
    this.vimeoPlayers.push(n),
      (this.videoClickHandler = () => {
        n == null || n.pause(), n == null || n.setCurrentTime(0);
        const s = this.DOM.el.querySelector(".modal-video-inner"),
          o = new Yo(s, { id: Number(t), controls: !0, autoplay: !0 });
        this.vimeoPlayers.push(o),
          this.handleToggleModalVideo(o, !0, () => {
            n == null || n.play();
          });
      }),
      e.addEventListener("click", this.videoClickHandler);
  }
  async handleToggleModalVideo(e, t, r) {
    const n = this.DOM.el.querySelector(".modal-video"),
      s = this.DOM.el.querySelector(".modal-video-overlay"),
      o = () => {
        C.to(n, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "none",
        }),
          e == null || e.pause(),
          e == null || e.setCurrentTime(0),
          e == null || e.destroy(),
          r == null || r();
      };
    t &&
      (C.to(n, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: "auto",
      }),
      e.on("loaded", () => {
        e == null || e.play();
      })),
      s && (s.addEventListener("click", o), this.modalCloseHandlers.push(o));
    const a = n == null ? void 0 : n.querySelector(".modal-video-close");
    a && (a.addEventListener("click", o), this.modalCloseHandlers.push(o));
  }
  scrollHorizontalTags() {
    Np() &&
      this.emblaSlides.push(
        new Ne({
          classSlide: ".resources-cate-tags",
          options: { dragFree: !0 },
        })
      );
  }
  pinTagResources() {
    this.scrollHandler &&
      (window.removeEventListener("scroll", this.scrollHandler),
      (this.scrollHandler = null)),
      this.pinTagObserver &&
        (this.pinTagObserver.disconnect(), (this.pinTagObserver = null)),
      this.pinTagSentinels.forEach((y) => {
        try {
          y && y.parentNode && y.parentNode.removeChild(y);
        } catch {}
      }),
      (this.pinTagSentinels = []);
    const e = this.DOM.el.querySelector(".resources-cate-tags-wrap"),
      t = this.DOM.el.querySelector(".resources-cate-tags-wrap-mobile");
    e && (C.killTweensOf(e), C.set(e, { clearProps: "all" })),
      t && (C.killTweensOf(t), C.set(t, { clearProps: "all" }));
    const r = document.querySelector(".resources-sections"),
      n = document.querySelector(".header-container");
    let s;
    if ((Et() ? (s = e) : (s = t), !r || !n || !s)) return;
    let o = !1;
    (this.scrollHandler = () => {}),
      window.addEventListener("scroll", this.scrollHandler);
    const a = (y) => {
      const v = this.DOM.el.querySelector(".cate-filter-trigger");
      v &&
        C.to(v, {
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
          borderBottomColor: y ? "transparent" : "#092a3d33",
        });
    };
    let l = !1,
      c = !1;
    const d = (y) => {
        if (o === y) return;
        o = y;
        const v = Et()
            ? this.DOM.el.querySelector(".resources-cate-tags-wrap")
            : this.DOM.el.querySelector(".resources-cate-tags-wrap-mobile"),
          b = document.querySelector(".header-container");
        !v || !b || Et() || a(y);
      },
      h = () => {
        d(!l && c);
      },
      u = r.offsetHeight,
      f = s.offsetHeight,
      p = Et() ? u - f : u - f - 50,
      m = document.createElement("div");
    m.classList.add("sentinel-top"),
      (m.style.position = "absolute"),
      (m.style.top = "0"),
      (m.style.left = "0"),
      (m.style.width = "1px"),
      (m.style.height = "1px"),
      (m.style.pointerEvents = "none"),
      (m.style.visibility = "hidden"),
      r.insertBefore(m, r.firstChild);
    const g = document.createElement("div");
    g.classList.add("sentinel-bottom"),
      (g.style.position = "absolute"),
      (g.style.top = `${p}px`),
      (g.style.left = "0"),
      (g.style.width = "1px"),
      (g.style.height = "1px"),
      (g.style.pointerEvents = "none"),
      (g.style.visibility = "hidden"),
      r.appendChild(g),
      (this.pinTagObserver = new IntersectionObserver(
        (y) => {
          y.forEach((v) => {
            v.target === m
              ? (l = v.isIntersecting)
              : v.target === g && (c = v.isIntersecting);
          }),
            h();
        },
        { root: null, rootMargin: "0px", threshold: 0 }
      )),
      this.pinTagSentinels.push(m, g),
      this.pinTagObserver.observe(m),
      this.pinTagObserver.observe(g);
  }
  initResourcesSectionObserver() {
    const e = document.querySelector(".resources-sections");
    if (!e) return;
    const t = this.DOM.el.querySelector(".resources-cate-tags-wrap"),
      r = this.DOM.el.querySelector(".resources-cate-tags-wrap-mobile"),
      n = Et() ? t : r,
      s = document.querySelector(".header-container");
    if (!n || !s) return;
    const o = Et() ? t : r;
    o &&
      (this.resourcesSectionTrigger = U.create({
        trigger: e,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onEnter: () => {
          o.classList.add("pin"), s.classList.add("unBoxShadow");
        },
        onLeave: () => {
          o.classList.remove("pin"), s.classList.remove("unBoxShadow");
        },
        onEnterBack: () => {
          o.classList.add("pin"), s.classList.add("unBoxShadow");
        },
        onLeaveBack: () => {
          o.classList.remove("pin"), s.classList.remove("unBoxShadow");
        },
      }));
  }
  detectSectionCurrent() {
    var p, m;
    this.sectionHighlightObserver &&
      (this.sectionHighlightTargets.forEach((g) => {
        var y;
        try {
          (y = this.sectionHighlightObserver) == null || y.unobserve(g);
        } catch {}
      }),
      this.sectionHighlightObserver.disconnect(),
      (this.sectionHighlightObserver = null)),
      (this.sectionHighlightTargets = []);
    const e = Array.from(this.DOM.el.querySelectorAll("[data-section]")).filter(
      Boolean
    );
    if (e.length === 0) return;
    const t = this.DOM.el.querySelector(".resources-cate-tags");
    if (!t) return;
    const r = Array.from(t.querySelectorAll(".resources-cate-tags-item"));
    if (!r.length) return;
    const n = (g) => (g ? g.replace("#", "") : null),
      s = r.find((g) => g.getAttribute("data-scroll-section") === Bv),
      o = (s == null ? void 0 : s.getAttribute("data-scroll-section")) ?? null,
      a =
        n(o) ||
        ((p = e[0]) == null ? void 0 : p.getAttribute("data-section")) ||
        n(
          (m = r[0]) == null ? void 0 : m.getAttribute("data-scroll-section")
        ) ||
        null;
    let l = a;
    const c = new Map(),
      d = (g) => {
        !g ||
          g === l ||
          (r.forEach((y) => {
            const v = y.getAttribute("data-scroll-section") === `#${g}`;
            y.classList.toggle("active", v);
          }),
          (l = g));
      };
    r.forEach((g) => {
      const y = l ? g.getAttribute("data-scroll-section") === `#${l}` : !1;
      g.classList.toggle("active", y);
    });
    const h = () => {
        let g = a,
          y = 0;
        c.forEach((v, b) => {
          v > y && ((y = v), (g = b));
        }),
          g && d(g);
      },
      u = dd(4),
      f = Array.from({ length: 11 }, (g, y) => y / 10);
    (this.sectionHighlightObserver = new IntersectionObserver(
      (g) => {
        g.forEach((y) => {
          const v = y.target.getAttribute("data-section");
          v && (y.isIntersecting ? c.set(v, y.intersectionRatio) : c.delete(v));
        }),
          h();
      },
      { root: null, rootMargin: `-${u}px 0px -${u}px 0px`, threshold: f }
    )),
      e.forEach((g) => {
        var y;
        return (y = this.sectionHighlightObserver) == null
          ? void 0
          : y.observe(g);
      }),
      (this.sectionHighlightTargets = e);
  }
  handleInitSlideCustom() {
    var o, a;
    const e = new Ne({
      classSlide: ".embla_featured",
      idBtnPrev: "btn-featured-prev",
      idBtnNext: "btn-featured-next",
      wrapElement: this.DOM.el,
    });
    this.emblaSlides.push(e);
    const t = Array.from(
        this.DOM.el.querySelectorAll(".resources-hero-card-img")
      ),
      r = Array.from(
        this.DOM.el.querySelectorAll(".resources-hero-card-content-item-wrap")
      );
    let n = null;
    const s = this.DOM.el.querySelector(".resources-hero-card-link");
    (o = e.emblaApi) == null ||
      o.on("init", (l) => {
        const c = l.selectedScrollSnap(),
          d = r[c].getAttribute("data-event-slug");
        (n = d ? `${window.location.origin}/event/${d}` : null),
          s.setAttribute("href", n || "#");
      }),
      (a = e.emblaApi) == null ||
        a.on("select", (l) => {
          const c = l.selectedScrollSnap();
          t[c].classList.add("active"), t[c].classList.remove("is-hidden");
          const d = r[c].getAttribute("data-event-slug");
          (n = d ? `${window.location.origin}/event/${d}` : null),
            s.setAttribute("href", n || "#"),
            t.forEach((h) => {
              h !== t[c] && h.classList.add("is-hidden");
            });
        });
  }
  handleSelectCategoryMobile() {
    const e = this.DOM.el.querySelector(".cate-filter"),
      t = this.DOM.el.querySelector(".cate-filter-trigger"),
      r = this.DOM.el.querySelector(".cate-filter-dropdown"),
      n = this.DOM.el.querySelector(".cate-filter-placeholder .txt"),
      s = this.DOM.el.querySelectorAll(".cate-filter-dropdown-item"),
      o = () => {
        r.classList.toggle("active"), t == null || t.classList.toggle("active");
      };
    t == null || t.addEventListener("click", o),
      this.categoryFilterHandlers.set(t, o),
      s.forEach((a) => {
        const l = () => {
          var d;
          const c =
            (d = a.querySelector(".txt")) == null ? void 0 : d.textContent;
          (n.textContent = c || "All"),
            r.classList.remove("active"),
            t == null || t.classList.remove("active"),
            C.to(window, {
              scrollTo: a.getAttribute("data-scroll-section") || "#",
              duration: 0.8,
              ease: "power3.inOut",
            });
        };
        a.addEventListener("click", l), this.categoryFilterHandlers.set(a, l);
      }),
      (this.scrollPinTagHandler = () => {
        r.classList.remove("active"), t == null || t.classList.remove("active");
      }),
      Dh({
        element: e,
        action: () => {
          r.classList.remove("active"),
            t == null || t.classList.remove("active");
        },
      }),
      window.addEventListener("scroll", this.scrollPinTagHandler);
  }
  updateSlideLength(e, t) {
    const r = document.querySelector(e);
    if (!r) return;
    const n = r.querySelectorAll(t);
    if (!n) return;
    const s = n.length;
    r.style.setProperty("--slide-count", s.toString());
  }
  handleMagneticHover() {
    const e = this.DOM.el.querySelector(".resources-acadamy-inner-left-btn"),
      t = dd(5);
    let r = !1;
    const n = (a) => {
        if (!r) return;
        const l = e.getBoundingClientRect(),
          c = l.left + l.width / 2,
          d = l.top + l.height / 2,
          h = (a.clientX - c) * (t / 100),
          u = (a.clientY - d) * (t / 100);
        C.to(e, {
          x: h,
          y: u,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
      s = () => {
        r = !0;
      },
      o = () => {
        (r = !1),
          C.to(e, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
      };
    e.addEventListener("mouseenter", s),
      e.addEventListener("mouseleave", o),
      document.addEventListener("mousemove", n),
      this.magneticHandlers.set(e, {
        mousemove: n,
        mouseenter: s,
        mouseleave: o,
      });
  }
  handleScrollTopEventPagination() {
    this.paginationTimeout = setTimeout(() => {
      const e = this.DOM.el.querySelector(".resources-upcoming-page"),
        t = this.DOM.el.querySelectorAll(".event-paginate-btn"),
        r = e.querySelectorAll("a");
      r &&
        (r.forEach((n) => {
          const s = () => {
            n.classList.contains("w--current") ||
              !document.querySelector(".resources-upcoming-inner") ||
              C.to(window, {
                scrollTo: ".resources-upcoming-scroll",
                duration: 0.8,
                ease: "power3.inOut",
              });
          };
          n.addEventListener("click", s), this.paginationHandlers.set(n, s);
        }),
        t.forEach((n) => {
          const s = () => {
            C.to(window, {
              scrollTo: ".resources-upcoming-scroll",
              duration: 0.8,
              ease: "power3.inOut",
            });
          };
          n.addEventListener("click", s), this.paginationHandlers.set(n, s);
        }));
    }, 3e3);
  }
  handleClickToSection() {
    this.DOM.el.querySelectorAll(".resources-cate-tags-item").forEach((t) => {
      const r = () => {
        const n = t.getAttribute("data-scroll-section");
        n &&
          (ge == null ||
            ge.scrollTo(n, {
              duration: 0.8,
              easing: (s) => 1 - Math.pow(1 - s, 3),
            }));
      };
      t.addEventListener("click", r), this.clickToSectionHandlers.set(t, r);
    });
  }
  destroy() {
    if (
      (this.paginationTimeout &&
        (clearTimeout(this.paginationTimeout), (this.paginationTimeout = null)),
      this.paginationHandlers.forEach((u, f) => {
        try {
          f && f.parentNode && f.removeEventListener("click", u);
        } catch {}
      }),
      this.paginationHandlers.clear(),
      this.emblaSlides.forEach((u) => {
        u && typeof u.destroy == "function" && u.destroy();
      }),
      (this.emblaSlides = []),
      this.pinTagObserver &&
        (this.pinTagObserver.disconnect(), (this.pinTagObserver = null)),
      this.pinTagSentinels.forEach((u) => {
        try {
          u && u.parentNode && u.parentNode.removeChild(u);
        } catch {}
      }),
      (this.pinTagSentinels = []),
      this.scrollHandler &&
        (window.removeEventListener("scroll", this.scrollHandler),
        (this.scrollHandler = null)),
      this.magneticHandlers.forEach((u, f) => {
        try {
          f &&
            f.parentNode &&
            (f.removeEventListener("mouseenter", u.mouseenter),
            f.removeEventListener("mouseleave", u.mouseleave),
            document.removeEventListener("mousemove", u.mousemove));
        } catch {}
        C.killTweensOf(f), C.set(f, { clearProps: "x,y" });
      }),
      this.magneticHandlers.clear(),
      this.resourcesSectionTrigger)
    ) {
      try {
        this.resourcesSectionTrigger.disable(),
          this.resourcesSectionTrigger.kill();
      } catch {}
      this.resourcesSectionTrigger = null;
    }
    if (this.resourcesSectionObserver) {
      const u = this.DOM.el.querySelector(".resources-cate-tags-wrap"),
        f = this.DOM.el.querySelector(".resources-cate-tags-wrap-mobile"),
        p = Et() ? u : f;
      p && this.resourcesSectionObserver.unobserve(p),
        this.resourcesSectionObserver.disconnect(),
        (this.resourcesSectionObserver = null);
    }
    if (
      (this.sectionHighlightObserver &&
        (this.sectionHighlightTargets.forEach((u) => {
          var f;
          try {
            (f = this.sectionHighlightObserver) == null || f.unobserve(u);
          } catch {}
        }),
        this.sectionHighlightObserver.disconnect(),
        (this.sectionHighlightObserver = null)),
      (this.sectionHighlightTargets = []),
      this.videoClickHandler)
    ) {
      const u = this.DOM.el.querySelector(".resources-acadamy-inner-left");
      u && u.removeEventListener("click", this.videoClickHandler),
        (this.videoClickHandler = null);
    }
    this.vimeoPlayers.forEach((u) => {
      try {
        u.pause(), u.destroy();
      } catch {}
    }),
      (this.vimeoPlayers = []);
    const e = this.DOM.el.querySelector(".modal-video-overlay"),
      t = this.DOM.el.querySelector(".modal-video-close");
    this.modalCloseHandlers.forEach((u) => {
      try {
        e && e.removeEventListener("click", u),
          t && t.removeEventListener("click", u);
      } catch {}
    }),
      (this.modalCloseHandlers = []),
      this.categoryFilterHandlers.forEach((u, f) => {
        try {
          f && f.parentNode && f.removeEventListener("click", u);
        } catch {}
      }),
      this.categoryFilterHandlers.clear(),
      this.scrollPinTagHandler &&
        (window.removeEventListener("scroll", this.scrollPinTagHandler),
        (this.scrollPinTagHandler = null));
    const r = this.DOM.el.querySelector(".resources-cate-tags-wrap"),
      n = this.DOM.el.querySelector(".resources-cate-tags-wrap-mobile"),
      s = document.querySelector(".header-container"),
      o = this.DOM.el.querySelector(".cate-filter-trigger"),
      a = this.DOM.el.querySelector(".cate-filter-dropdown"),
      l = this.DOM.el.querySelector(".resources-cate-tags"),
      c = l == null ? void 0 : l.querySelectorAll(".resources-cate-tags-item"),
      d = this.DOM.el.querySelectorAll(".resources-hero-card-img");
    r &&
      (r.classList.remove("pin"),
      C.killTweensOf(r),
      C.set(r, { clearProps: "all" })),
      n &&
        (n.classList.remove("pin"),
        C.killTweensOf(n),
        C.set(n, { clearProps: "all" })),
      s && s.classList.remove("unBoxShadow"),
      o &&
        (o.classList.remove("active"),
        C.killTweensOf(o),
        C.set(o, { clearProps: "all" })),
      a && a.classList.remove("active"),
      c &&
        c.forEach((u) => {
          u.classList.remove("active");
        }),
      d &&
        d.forEach((u) => {
          u.classList.remove("active", "is-hidden");
        }),
      this.clickToSectionHandlers.forEach((u, f) => {
        f.removeEventListener("click", u);
      }),
      this.clickToSectionHandlers.clear();
    const h = [
      r,
      n,
      o,
      ...Array.from(this.DOM.el.querySelectorAll("[data-section]")),
      ...Array.from(this.DOM.el.querySelectorAll(".cate-filter-trigger")),
    ].filter(Boolean);
    h.length &&
      (C.killTweensOf(h),
      h.forEach((u) => {
        C.set(u, { clearProps: "all" });
      })),
      document.body.classList.remove(
        "resources-section-visible",
        "resources-section-hidden"
      ),
      U.refresh();
  }
}
class Vv {
  constructor(e) {
    _(this, "DOM");
    (this.DOM = { el: e }), this.init(), be(this.clear.bind(this));
  }
  init() {}
  clear() {}
}
class Gv {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlides", []);
    _(this, "stickyCardStackTimeline", null);
    _(this, "stickyCardStackTriggers", []);
    _(this, "stickyCardStackTimelines", []);
    _(this, "stickyCardStackElements", []);
    _(this, "stackImageTrigger", null);
    _(this, "stackImageElements", []);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.slideFeedback(),
      this.detectOnlyOneThumbnail(),
      new Vv(this.DOM.el),
      this.emblaSlides.push(
        new Ne({ classSlide: ".embla-visible", wrapElement: this.DOM.el })
      );
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    this.createStickyCardStack(),
      this.createStackImage(),
      z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el),
      z.parrallaxImage(this.DOM.el);
    const e = this.DOM.el.querySelectorAll(".home-hero-brands-wrap");
    e.length &&
      e.forEach((t) => {
        new oa(t);
      });
  }
  slideFeedback() {
    const e = new Ne({
      classSlide: ".solution-feedbacks-inner-slider",
      idBtnPrev: "btn-solution-feedbacks-btn-prev",
      idBtnNext: "btn-solution-feedbacks-btn-next",
      wrapElement: this.DOM.el,
    });
    if ((this.emblaSlides.push(e), e.emblaApi)) {
      const t = Array.from(
        this.DOM.el.querySelectorAll(
          ".solution-feedbacks-inner-bottom-info-item"
        )
      );
      e.emblaApi.on("init", (r) => {
        var s;
        const n = r.selectedScrollSnap();
        (s = t[n]) == null || s.classList.remove("is-hidden");
      }),
        e.emblaApi.on("select", (r) => {
          var s;
          const n = r.selectedScrollSnap();
          (s = t[n]) == null || s.classList.remove("is-hidden"),
            t.forEach((o) => {
              o !== t[n] && o.classList.add("is-hidden");
            });
        });
    }
  }
  createStickyCardStack() {
    var s;
    if (ea()) return;
    this.cleanupStickyCardStack();
    const e = this.DOM.el.querySelectorAll(".solution-feature-card");
    if (!e.length) return;
    const t = this.DOM.el.querySelector(".feature-card-bg");
    if (!t) return;
    const r = ((s = e[0]) == null ? void 0 : s.offsetHeight) || 0;
    if (!r) return;
    const n = C.timeline({
      scrollTrigger: {
        trigger: t,
        start: "top top",
        end: () => `bottom center-=${r}`,
        scrub: 1,
      },
    });
    (this.stickyCardStackTimeline = n),
      n.scrollTrigger && this.stickyCardStackTriggers.push(n.scrollTrigger),
      e.forEach((o, a, l) => {
        const c = o.querySelector(".feature-card-bg") || o;
        this.stickyCardStackElements.push({ card: o, cardInner: c });
        const d = l.length > 1 ? So(a - 1, 0, l.length - 2, 0.8, 1) : 1,
          h = So(a, 0, l.length - 1, 0, r * 0.3),
          u = r / 4;
        C.set(o, { y: h, top: `${u}px`, willChange: "transform," });
        const f = C.timeline({
          scrollTrigger: {
            trigger: o,
            start: () => `top top+=${r / 2}`,
            end: "+=100%",
            scrub: 1,
          },
        });
        this.stickyCardStackTimelines.push(f),
          f.scrollTrigger && this.stickyCardStackTriggers.push(f.scrollTrigger),
          f.to(c, {
            scale: d,
            yPercent: -15,
            transformOrigin: "top center",
            ease: "power3",
            willChange: "transform",
          }),
          a !== l.length - 1 &&
            f.to(c, { opacity: 0, ease: "power3.out" }, "<");
      });
  }
  createStackImage() {
    if (!Et()) return;
    this.cleanupStackImage();
    const e = this.DOM.el.querySelectorAll(".solution-card-left:not(.dsk)"),
      t = Array.from(this.DOM.el.querySelectorAll(".solution-card-right.dsk")),
      r = this.DOM.el.querySelector(
        ".solution-cards:not(.solution-cards-desk)"
      );
    if (!t.length || !r) return;
    this.stackImageElements = t;
    const n = (s) => {
      t.forEach((o, a) => {
        s === a
          ? C.to(o, {
              opacity: 1,
              ease: "power3",
              duration: 1,
              overwrite: "auto",
              willChange: "opacity",
            })
          : C.to(o, {
              opacity: 0,
              ease: "power3",
              duration: 1,
              overwrite: "auto",
              willChange: "opacity",
            });
      });
    };
    this.stackImageTrigger = U.create({
      trigger: r,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: ({ progress: s }) => {
        const o = Math.floor(So(s, 0, 1, 0, e.length - 1));
        n(o);
      },
    });
  }
  cleanupStackImage() {
    if (this.stackImageTrigger) {
      try {
        this.stackImageTrigger.disable(), this.stackImageTrigger.kill();
      } catch (e) {
        console.error(e);
      }
      this.stackImageTrigger = null;
    }
    this.stackImageElements.forEach((e) => {
      e &&
        e.parentNode &&
        (C.killTweensOf(e),
        C.set(e, { clearProps: "all" }),
        e.style.removeProperty("will-change"));
    }),
      (this.stackImageElements = []);
  }
  cleanupStickyCardStack() {
    this.stickyCardStackTriggers.forEach((e) => {
      if (e)
        try {
          e.disable(), e.kill();
        } catch (t) {
          console.error(t);
        }
    }),
      (this.stickyCardStackTriggers = []),
      this.stickyCardStackTimelines.forEach((e) => {
        e && e.kill();
      }),
      (this.stickyCardStackTimelines = []),
      this.stickyCardStackTimeline &&
        (this.stickyCardStackTimeline.kill(),
        (this.stickyCardStackTimeline = null)),
      this.stickyCardStackElements.forEach(({ card: e, cardInner: t }) => {
        e &&
          e.parentNode &&
          (C.killTweensOf(e),
          C.set(e, { clearProps: "all" }),
          e.style.removeProperty("top"),
          e.style.removeProperty("will-change")),
          t &&
            t.parentNode &&
            (C.killTweensOf(t), C.set(t, { clearProps: "all" }));
      }),
      (this.stickyCardStackElements = []),
      U.refresh();
  }
  detectOnlyOneThumbnail() {
    if (Et()) return;
    if (
      this.DOM.el.querySelector(".solution-hero-img-2.w-condition-invisible")
    ) {
      const t = this.DOM.el.querySelector(".solution-hero-img");
      t && (t.style.width = "100%");
    }
  }
  destroy() {
    this.emblaSlides.forEach((e) => {
      e && typeof e.destroy == "function" && e.destroy();
    }),
      (this.emblaSlides = []),
      this.cleanupStickyCardStack(),
      this.cleanupStackImage(),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*")),
      U.refresh();
  }
}
class Uv {
  constructor(e) {
    _(this, "DOM");
    _(this, "navigateHandlers", new Map());
    _(this, "searchHandlers", {});
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    this.handleTotalArticle(),
      this.handleNavigateArticle(),
      this.handleSearchQuery();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  handleTotalArticle() {
    const e = this.DOM.el.querySelectorAll(".sc-result-card-wrap");
    e.length &&
      Sp(() => {
        for (let t = 0; t < e.length; t++) {
          const r = e[t].querySelectorAll(".w-dyn-item"),
            n = e[t].querySelector(".sc-result-card-content-total");
          if (!n) return;
          const s = r.length;
          s ? (n.innerHTML = `${s}`) : (n.innerHTML = "0");
        }
      }, 1200)();
  }
  handleNavigateArticle() {
    var r;
    const e = this.DOM.el.querySelectorAll(".sc-articles-list-item-txt"),
      t =
        (r = this.DOM.el.querySelector(".sc-inner-right-heading")) == null
          ? void 0
          : r.textContent;
    t &&
      e.forEach((n) => {
        const s = () => {
          localStorage.setItem("sc-category", t);
        };
        n.addEventListener("click", s), this.navigateHandlers.set(n, s);
      });
  }
  handleSearchQuery() {
    const e = this.DOM.el.querySelector(".sc-hero-wrapper-form-input"),
      t = this.DOM.el.querySelector(".sc-inner-left-search-go");
    e &&
      ((this.searchHandlers.input = (r) => {
        var s;
        const n = (s = r.currentTarget) == null ? void 0 : s.value.trim();
        n !== ""
          ? t == null || t.classList.add("active")
          : t == null || t.classList.remove("active"),
          r.key === "Enter" &&
            n !== "" &&
            (window.location.href = `/search?query=${n}`);
      }),
      (this.searchHandlers.keydown = (r) => {
        var s;
        const n = (s = r.currentTarget) == null ? void 0 : s.value.trim();
        n !== ""
          ? t == null || t.classList.add("active")
          : t == null || t.classList.remove("active"),
          r.key === "Enter" &&
            n !== "" &&
            (window.location.href = `/search?query=${n}`);
      }),
      (this.searchHandlers.btnClick = () => {
        const r = e.value.trim();
        r !== "" && (window.location.href = `/search?query=${r}`);
      }),
      e.addEventListener("input", this.searchHandlers.input),
      e.addEventListener("keydown", this.searchHandlers.keydown),
      t == null || t.addEventListener("click", this.searchHandlers.btnClick));
  }
  destroy() {
    this.navigateHandlers.forEach((r, n) => {
      n.removeEventListener("click", r);
    }),
      this.navigateHandlers.clear();
    const e = this.DOM.el.querySelector(".sc-hero-wrapper-form-input"),
      t = this.DOM.el.querySelector(".sc-inner-left-search-go");
    e &&
      this.searchHandlers.input &&
      e.removeEventListener("input", this.searchHandlers.input),
      e &&
        this.searchHandlers.keydown &&
        e.removeEventListener("keydown", this.searchHandlers.keydown),
      t &&
        this.searchHandlers.btnClick &&
        t.removeEventListener("click", this.searchHandlers.btnClick),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
class Wv {
  constructor(e) {
    _(this, "DOM");
    _(this, "emblaSlide", null);
    (this.DOM = { el: e }), be(this.destroy.bind(this));
  }
  init() {
    (this.emblaSlide = new Ne({
      classSlide: ".video-more-cards",
      idBtnPrev: "btn-video-prev",
      idBtnNext: "btn-video-next",
      wrapElement: this.DOM.el,
    })),
      this.handleApiVimeoVideoSlide();
  }
  initParticles() {
    this.init(), this.initMotion();
  }
  initMotion() {
    z.maskText(this.DOM.el),
      z.fadeText(this.DOM.el),
      z.parrallaxImage(this.DOM.el),
      z.countText(this.DOM.el),
      z.fadeWrap(this.DOM.el);
  }
  async handleApiVimeoVideoSlide() {
    const e = this.DOM.el.querySelectorAll(".video-hub-card");
    e.length !== 0 &&
      (await Promise.all(
        Array.from(e).map(async (t) => {
          var s;
          const r = t.getAttribute("data-vimeo");
          if (!r) return;
          const n = await kf(r);
          n &&
            ((s = t.querySelector(".img")) == null ||
              s.setAttribute("src", n.pictures.base_link));
        })
      ));
  }
  destroy() {
    this.emblaSlide &&
      typeof this.emblaSlide.destroy == "function" &&
      (this.emblaSlide.destroy(), (this.emblaSlide = null)),
      C.killTweensOf(this.DOM.el),
      C.killTweensOf(this.DOM.el.querySelectorAll("*"));
  }
}
class ar {
  constructor(e) {
    _(this, "sections");
    this.sections = Object.values(e).map((t) => new t());
  }
  initOnce(e) {
    console.log("this.sections________", this.sections),
      this.sections.forEach((t) => {
        t.initOnce && t.initOnce(e);
      });
  }
  initEnter(e) {
    this.sections.forEach((t) => {
      t.initEnter ? t.initEnter(e) : t.init && t.init(e);
    });
  }
  destroy(e) {
    this.sections.forEach((t) => {
      t.destroy && t.destroy(), t.cleanTrigger && t.cleanTrigger();
    });
  }
  cleanAllTriggers() {
    U.getAll().forEach((e) => {
      e.kill();
    });
  }
}
class lr {
  constructor(e) {
    _(this, "instance", null);
    this.PageClass = e;
  }
  initOnce(e) {
    var r, n, s;
    const t =
      ((r = e == null ? void 0 : e.next) == null ? void 0 : r.container) ||
      document.querySelector('[data-barba="container"]');
    t &&
      ((this.instance = new this.PageClass(t)),
      (s = (n = this.instance) == null ? void 0 : n.initParticles) == null ||
        s.call(n),
      X.emit(Rn),
      X.emit($p));
  }
  initEnter(e) {
    var s, o, a, l;
    const t = e,
      r = (s = t == null ? void 0 : t.current) == null ? void 0 : s.container,
      n =
        ((o = t == null ? void 0 : t.next) == null ? void 0 : o.container) ||
        document.querySelector('[data-barba="container"]');
    if (
      (this.instance &&
        ((l = (a = this.instance).destroy) == null || l.call(a),
        (this.instance = null)),
      r && r.parentNode && r !== n)
    )
      try {
        r.isConnected && r.remove();
      } catch (c) {
        console.warn("Failed to remove old container:", c);
      }
    n &&
      n.isConnected &&
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          var c, d;
          n.isConnected &&
            ((this.instance = new this.PageClass(n)),
            (d = (c = this.instance) == null ? void 0 : c.initParticles) ==
              null || d.call(c));
        });
      });
  }
  destroy() {
    var e, t;
    this.instance &&
      ((t = (e = this.instance).destroy) == null || t.call(e),
      (this.instance = null));
  }
}
class jv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(J2);
        }
      },
    });
  }
}
class Yv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(W2);
        }
      },
    });
  }
}
class Xv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(K2);
        }
      },
    });
  }
}
class Kv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(ev);
        }
      },
    });
  }
}
class Zv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(nv);
        }
      },
    });
  }
}
class Qv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(Wv);
        }
      },
    });
  }
}
class Jv extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(zv);
        }
      },
    });
  }
}
class e3 extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(Gv);
        }
      },
    });
  }
}
class t3 extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(j2);
        }
      },
    });
  }
}
class r3 extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(tv);
        }
      },
    });
  }
}
class n3 extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(rv);
        }
      },
    });
  }
}
class i3 extends ar {
  constructor() {
    super({
      Main: class extends lr {
        constructor() {
          super(Uv);
        }
      },
    });
  }
}
const La = {
    home: new jv(),
    about: new Yv(),
    event: new Xv(),
    partner: new Kv(),
    "resource-detail": new Zv(),
    resources: new Jv(),
    "video-detail": new Qv(),
    solution: new e3(),
    contact: new t3(),
    pricing: new r3(),
    "product-update": new n3(),
    "support-center": new i3(),
  },
  Bt = (i) => ({
    namespace: i,
    afterEnter(e) {
      setTimeout(() => {
        var r, n, s;
        !((r = e == null ? void 0 : e.current) != null && r.container)
          ? (n = La[i]) == null || n.initOnce(e)
          : (s = La[i]) == null || s.initEnter(e);
      }, 10);
    },
    beforeLeave(e) {
      var t;
      (t = La[i]) == null || t.destroy(e);
    },
  }),
  s3 = [
    Bt("home"),
    Bt("about"),
    Bt("event"),
    Bt("partner"),
    Bt("resource-detail"),
    Bt("resources"),
    Bt("video-detail"),
    Bt("solution"),
    Bt("contact"),
    Bt("pricing"),
    Bt("product-update"),
    Bt("support-center"),
    Bt("changelog"),
  ],
  o3 = () => {
    var i, e, t, r, n;
    window.FinsweetAttributes &&
      ((e = (i = window.FinsweetAttributes).destroys) == null || e.call(i),
      (n =
        (r =
          (t = window.FinsweetAttributes.modules) == null ? void 0 : t.list) ==
        null
          ? void 0
          : r.restart) == null || n.call(r)),
      window.fsAttributes.accordion &&
        (window.fsAttributes.accordion.destroy(),
        window.fsAttributes.accordion.init()),
      window.Webflow && (window.Webflow.destroy(), window.Webflow.ready());
  };
class a3 {
  constructor() {
    _(this, "registerLoadCounter");
    _(this, "DOM");
    _(this, "postType");
    _(this, "fakeLoadingDone");
    _(this, "timeout");
    _(this, "isLeave");
    _(this, "isBeforeLeave");
    _(this, "isOne");
    _(this, "template");
    _(this, "pageFader");
    _(this, "interVal");
    (this.isOne = !1),
      (this.isLeave = !1),
      (this.isBeforeLeave = !1),
      (this.timeout = (e) => new Promise((t) => setTimeout(t, e))),
      (this.template = "default"),
      (this.interVal = null),
      (this.registerLoadCounter = 0),
      (this.postType = ""),
      (this.fakeLoadingDone = !1),
      (this.registerLoader = this.registerLoader.bind(this)),
      (this.unRegisterLoader = this.unRegisterLoader.bind(this));
  }
  init() {
    ei(() => {
      (this.pageFader = new p2()), this.bindEvent();
    }),
      (this.DOM = {
        menuItems: document.querySelectorAll(".menu-item"),
        bodyNext: null,
        main: document.querySelector(".main"),
      }),
      this.barbaInit();
  }
  checkPageLoaded() {
    return new Promise((e) => {
      this.interVal = setInterval(() => {
        this.registerLoadCounter || e();
      }, 50);
    });
  }
  log(e, t) {
    console.log(`[Barba] ${e}`, t || "");
  }
  updateBodyFromNextPage(e) {
    const t = document.createElement("html");
    t.innerHTML = e.match(/<html[^>]*>(.+?)<\/html>/gs)[0] || "";
    const r = t.querySelector("body");
    r &&
      (document.body.setAttribute("class", r.classList.value),
      this.updateMenuItemActive(r),
      setTimeout(() => {
        console.log(
          "_________________remove pageNext and bodyNext_________________"
        ),
          t.remove(),
          r.remove();
      }, 50));
  }
  async handlePageEnter(e, t) {
    var r, n, s, o;
    this.log("enter - Entering new page", {
      currentUrl: (r = e == null ? void 0 : e.current) == null ? void 0 : r.url,
      nextUrl: (n = e == null ? void 0 : e.next) == null ? void 0 : n.url,
      container:
        (s = e == null ? void 0 : e.next) == null ? void 0 : s.container,
    }),
      (e.next.container.style.opacity = "0"),
      e.next &&
        e.next.html &&
        (this.updateBodyFromNextPage(e.next.html),
        await ((o = this.pageFader) == null ? void 0 : o.animIn()),
        t(),
        document.body.style.removeProperty("background"),
        (e.next.container.style.opacity = "1"),
        X.emit(Yl),
        this.log("enter - Page fade in complete"));
  }
  async handlePageAfter(e, t) {
    var r;
    X.emit(bp),
      X.emit(wh),
      this.log("after - Waiting for resources to load..."),
      await this.checkPageLoaded(),
      X.emit(Rn),
      this.log("after - Resources loaded, emitting PAGE_LOADED"),
      t(),
      (this.isLeave = !1),
      (this.isBeforeLeave = !1),
      this.log("after - Running page fade out"),
      (r = this.pageFader) == null || r.animOut(),
      this.log("after - Re-initializing header"),
      hl.init(),
      this.log("after - Re-initializing footer"),
      ul.init(),
      this.log(
        "after - Re-initializing global functions (Webflow, fsAttributes, etc.)"
      ),
      setTimeout(() => {
        o3();
      }, 100),
      setTimeout(() => {
        X.emit(Ut),
          ge.enabled(),
          ge.scrollTo(0),
          this.log(
            "after - Page transition fully complete, emitting PAGE_ENTER"
          );
      }, 50);
  }
  barbaInit() {
    console.log("baba init________________");
    const e = this;
    try {
      qd.use(f2),
        qd.init({
          preventRunning: !0,
          timeout: 5e3,
          debug: !0,
          transitions: [
            {
              name: "default-transition",
              sync: !0,
              async beforeOnce(t) {
                var r, n;
                e.log("beforeOnce - First load initialization", {
                  url:
                    (r = t == null ? void 0 : t.next) == null ? void 0 : r.url,
                  container:
                    (n = t == null ? void 0 : t.next) == null
                      ? void 0
                      : n.container,
                }),
                  ge.init();
              },
              async once(t) {
                var r, n;
                e.log("once - First load complete", {
                  url:
                    (r = t == null ? void 0 : t.next) == null ? void 0 : r.url,
                  container:
                    (n = t == null ? void 0 : t.next) == null
                      ? void 0
                      : n.container,
                }),
                  X.emit(ds),
                  ge.scrollTo(0);
              },
              async beforeLeave(t) {
                var r, n;
                e.log("beforeLeave - Starting page transition", {
                  currentUrl:
                    (r = t == null ? void 0 : t.current) == null
                      ? void 0
                      : r.url,
                  nextUrl:
                    (n = t == null ? void 0 : t.next) == null ? void 0 : n.url,
                  trigger: t == null ? void 0 : t.trigger,
                }),
                  X.emit(Sh, t.current.url),
                  ge.disabled(),
                  (e.isBeforeLeave = !0),
                  setTimeout(() => {
                    hl.destroy(), ul.destroy();
                  }, 100);
              },
              async leave(t) {
                var r, n;
                e.log("leave - Leaving current page", {
                  currentUrl:
                    (r = t == null ? void 0 : t.current) == null
                      ? void 0
                      : r.url,
                  nextUrl:
                    (n = t == null ? void 0 : t.next) == null ? void 0 : n.url,
                }),
                  (e.isLeave = !0);
              },
              enter: async function (t) {
                const r = this.async();
                await e.handlePageEnter(t, r);
              },
              async after(t) {
                const r = this.async();
                await e.handlePageAfter(t, r);
              },
            },
          ],
          views: s3,
        });
    } catch (t) {
      console.error(t);
    }
  }
  updateMenuItemActive(e) {
    e.querySelectorAll(".menu-item").forEach((t, r) => {
      this.DOM.menuItems[r] &&
        this.DOM.menuItems[r].setAttribute(
          "class",
          t.getAttribute("class") || ""
        );
    });
  }
  registerLoader() {
    this.registerLoadCounter += 1;
  }
  unRegisterLoader() {
    this.registerLoadCounter -= 1;
  }
  bindEvent() {
    X.on(_o, this.registerLoader), X.on(wo, this.unRegisterLoader);
  }
}
const l3 = new a3();
class c3 {
  constructor() {
    _(this, "isEnabled");
    _(this, "isProduction");
    (this.isProduction = !0),
      this.isProduction ? (this.isEnabled = !1) : (this.isEnabled = !0);
  }
  get enabled() {
    return this.isEnabled;
  }
  get dev() {
    return !this.isProduction;
  }
  addDevParamToLinks() {
    if (!this.isEnabled) return;
    document.querySelectorAll("a[href]").forEach((t) => {
      const r = t.getAttribute("href");
      if (
        !(
          !r ||
          r.includes("?dev=") ||
          r.startsWith("#") ||
          r.startsWith("mailto:") ||
          r.startsWith("tel:") ||
          r.startsWith("javascript:")
        )
      )
        try {
          const n = new URL(r, window.location.origin);
          n.origin === window.location.origin &&
            (n.searchParams.set("dev", "true"),
            t.setAttribute("href", n.pathname + n.search + n.hash));
        } catch {
          if (r.startsWith("/") || r.startsWith("./") || !r.includes("://")) {
            const s = r.includes("?") ? "&" : "?";
            t.setAttribute("href", `${r}${s}dev=true`);
          }
        }
    });
  }
  log(e, t) {
    this.isEnabled && console.log(`[DevMode] ${e}`, t || "");
  }
  warn(e, t) {
    this.isEnabled && console.warn(`[DevMode] ${e}`, t || "");
  }
  error(e, t) {
    this.isEnabled && console.error(`[DevMode] ${e}`, t || "");
  }
  init() {
    this.isEnabled && this.log("Dev mode enabled");
  }
}
const Zd = new c3();
C.registerPlugin(U);
class d3 {
  constructor() {
    _(this, "checkAssets", async () => {
      try {
        if ((await fetch("http://localhost:5173/dist/assets/index.js")).ok)
          return console.log("Assets check: index.js is accessible (200)"), !0;
      } catch (e) {
        console.error("Assets check failed:", e);
      }
      return !1;
    });
    this.init();
  }
  async init() {
    const e = await this.checkAssets();
    if (
      (console.log("isHasAssets", e), console.log("dev", Zd.dev), e && !Zd.dev)
    ) {
      console.log("Js on production - skipping initialization");
      return;
    } else console.log("Js on development - initializing");
    this.bindEvents(), z.init(), hl.init(), ul.init(), new hg(), l3.init();
  }
  bindEvents() {
    Go.simple(), Go.simpleLoaded();
  }
}
new d3();
