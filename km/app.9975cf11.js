if (window.__KM_BOOTED__) { throw new Error('km already booted'); }
window.__KM_BOOTED__ = true;
// assets/vendor/three.core.min.js
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
var t = "180";
var i = 0;
var r = 1;
var n = 2;
var h = 1;
var l = 2;
var c = 3;
var u = 0;
var d = 1;
var p = 2;
var m = 0;
var y = 1;
var g = 2;
var f = 3;
var x = 4;
var b = 5;
var v = 100;
var w = 101;
var M = 102;
var S = 103;
var _ = 104;
var A = 200;
var T = 201;
var z = 202;
var C = 203;
var I = 204;
var B = 205;
var k = 206;
var E = 207;
var R = 208;
var P = 209;
var O = 210;
var N = 211;
var V = 212;
var F = 213;
var L = 214;
var j = 0;
var D = 1;
var W = 2;
var U = 3;
var H = 4;
var q = 5;
var J = 6;
var X = 7;
var Y = 0;
var Z = 1;
var G = 2;
var $ = 0;
var Q = 1;
var K = 2;
var tt = 3;
var et = 4;
var st = 5;
var it = 6;
var rt = 7;
var ot = 300;
var ht = 301;
var lt = 302;
var ct = 303;
var ut = 304;
var dt = 306;
var pt = 1e3;
var mt = 1001;
var yt = 1002;
var gt = 1003;
var ft = 1004;
var bt = 1005;
var wt = 1006;
var Mt = 1007;
var _t = 1008;
var Tt = 1009;
var zt = 1010;
var Ct = 1011;
var It = 1012;
var Bt = 1013;
var kt = 1014;
var Et = 1015;
var Rt = 1016;
var Pt = 1017;
var Ot = 1018;
var Nt = 1020;
var Vt = 35902;
var Ft = 35899;
var Lt = 1021;
var jt = 1022;
var Dt = 1023;
var Wt = 1026;
var Ut = 1027;
var Ht = 1028;
var qt = 1029;
var Jt = 1030;
var Xt = 1031;
var Zt = 1033;
var Gt = 33776;
var $t = 33777;
var Qt = 33778;
var Kt = 33779;
var te = 35840;
var ee = 35841;
var se = 35842;
var ie = 35843;
var re = 36196;
var ne = 37492;
var ae = 37496;
var oe = 37808;
var he = 37809;
var le = 37810;
var ce = 37811;
var ue = 37812;
var de = 37813;
var pe = 37814;
var me = 37815;
var ye = 37816;
var ge = 37817;
var fe = 37818;
var xe = 37819;
var be = 37820;
var ve = 37821;
var we = 36492;
var Me = 36494;
var Se = 36495;
var _e = 36283;
var Ae = 36284;
var Te = 36285;
var ze = 36286;
var ke = 2300;
var Ee = 2301;
var Re = 2302;
var Pe = 2400;
var Oe = 2401;
var Ne = 2402;
var Ue = 3201;
var Je = 0;
var Xe = 1;
var Ye = "";
var Ze = "srgb";
var Ge = "srgb-linear";
var $e = "linear";
var Qe = "srgb";
var ts = 7680;
var ys = 512;
var gs = 513;
var fs = 514;
var xs = 515;
var bs = 516;
var vs = 517;
var ws = 518;
var Ms = 519;
var Ss = 35044;
var Rs = "300 es";
var Ps = 2e3;
var Os = 2001;
var Ls = class {
  addEventListener(t2, e2) {
    void 0 === this._listeners && (this._listeners = {});
    const s2 = this._listeners;
    void 0 === s2[t2] && (s2[t2] = []), -1 === s2[t2].indexOf(e2) && s2[t2].push(e2);
  }
  hasEventListener(t2, e2) {
    const s2 = this._listeners;
    return void 0 !== s2 && (void 0 !== s2[t2] && -1 !== s2[t2].indexOf(e2));
  }
  removeEventListener(t2, e2) {
    const s2 = this._listeners;
    if (void 0 === s2) return;
    const i2 = s2[t2];
    if (void 0 !== i2) {
      const t3 = i2.indexOf(e2);
      -1 !== t3 && i2.splice(t3, 1);
    }
  }
  dispatchEvent(t2) {
    const e2 = this._listeners;
    if (void 0 === e2) return;
    const s2 = e2[t2.type];
    if (void 0 !== s2) {
      t2.target = this;
      const e3 = s2.slice(0);
      for (let s3 = 0, i2 = e3.length; s3 < i2; s3++) e3[s3].call(this, t2);
      t2.target = null;
    }
  }
};
var js = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var Ds = 1234567;
var Ws = Math.PI / 180;
var Us = 180 / Math.PI;
function Hs() {
  const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, s2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0;
  return (js[255 & t2] + js[t2 >> 8 & 255] + js[t2 >> 16 & 255] + js[t2 >> 24 & 255] + "-" + js[255 & e2] + js[e2 >> 8 & 255] + "-" + js[e2 >> 16 & 15 | 64] + js[e2 >> 24 & 255] + "-" + js[63 & s2 | 128] + js[s2 >> 8 & 255] + "-" + js[s2 >> 16 & 255] + js[s2 >> 24 & 255] + js[255 & i2] + js[i2 >> 8 & 255] + js[i2 >> 16 & 255] + js[i2 >> 24 & 255]).toLowerCase();
}
function qs(t2, e2, s2) {
  return Math.max(e2, Math.min(s2, t2));
}
function Js(t2, e2) {
  return (t2 % e2 + e2) % e2;
}
function Xs(t2, e2, s2) {
  return (1 - s2) * t2 + s2 * e2;
}
function Ys(t2, e2) {
  switch (e2.constructor) {
    case Float32Array:
      return t2;
    case Uint32Array:
      return t2 / 4294967295;
    case Uint16Array:
      return t2 / 65535;
    case Uint8Array:
      return t2 / 255;
    case Int32Array:
      return Math.max(t2 / 2147483647, -1);
    case Int16Array:
      return Math.max(t2 / 32767, -1);
    case Int8Array:
      return Math.max(t2 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Zs(t2, e2) {
  switch (e2.constructor) {
    case Float32Array:
      return t2;
    case Uint32Array:
      return Math.round(4294967295 * t2);
    case Uint16Array:
      return Math.round(65535 * t2);
    case Uint8Array:
      return Math.round(255 * t2);
    case Int32Array:
      return Math.round(2147483647 * t2);
    case Int16Array:
      return Math.round(32767 * t2);
    case Int8Array:
      return Math.round(127 * t2);
    default:
      throw new Error("Invalid component type.");
  }
}
var Gs = { DEG2RAD: Ws, RAD2DEG: Us, generateUUID: Hs, clamp: qs, euclideanModulo: Js, mapLinear: function(t2, e2, s2, i2, r2) {
  return i2 + (t2 - e2) * (r2 - i2) / (s2 - e2);
}, inverseLerp: function(t2, e2, s2) {
  return t2 !== e2 ? (s2 - t2) / (e2 - t2) : 0;
}, lerp: Xs, damp: function(t2, e2, s2, i2) {
  return Xs(t2, e2, 1 - Math.exp(-s2 * i2));
}, pingpong: function(t2, e2 = 1) {
  return e2 - Math.abs(Js(t2, 2 * e2) - e2);
}, smoothstep: function(t2, e2, s2) {
  return t2 <= e2 ? 0 : t2 >= s2 ? 1 : (t2 = (t2 - e2) / (s2 - e2)) * t2 * (3 - 2 * t2);
}, smootherstep: function(t2, e2, s2) {
  return t2 <= e2 ? 0 : t2 >= s2 ? 1 : (t2 = (t2 - e2) / (s2 - e2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
}, randInt: function(t2, e2) {
  return t2 + Math.floor(Math.random() * (e2 - t2 + 1));
}, randFloat: function(t2, e2) {
  return t2 + Math.random() * (e2 - t2);
}, randFloatSpread: function(t2) {
  return t2 * (0.5 - Math.random());
}, seededRandom: function(t2) {
  void 0 !== t2 && (Ds = t2);
  let e2 = Ds += 1831565813;
  return e2 = Math.imul(e2 ^ e2 >>> 15, 1 | e2), e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
}, degToRad: function(t2) {
  return t2 * Ws;
}, radToDeg: function(t2) {
  return t2 * Us;
}, isPowerOfTwo: function(t2) {
  return !(t2 & t2 - 1) && 0 !== t2;
}, ceilPowerOfTwo: function(t2) {
  return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
}, floorPowerOfTwo: function(t2) {
  return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
}, setQuaternionFromProperEuler: function(t2, e2, s2, i2, r2) {
  const n2 = Math.cos, a2 = Math.sin, o2 = n2(s2 / 2), h2 = a2(s2 / 2), l2 = n2((e2 + i2) / 2), c2 = a2((e2 + i2) / 2), u2 = n2((e2 - i2) / 2), d2 = a2((e2 - i2) / 2), p2 = n2((i2 - e2) / 2), m2 = a2((i2 - e2) / 2);
  switch (r2) {
    case "XYX":
      t2.set(o2 * c2, h2 * u2, h2 * d2, o2 * l2);
      break;
    case "YZY":
      t2.set(h2 * d2, o2 * c2, h2 * u2, o2 * l2);
      break;
    case "ZXZ":
      t2.set(h2 * u2, h2 * d2, o2 * c2, o2 * l2);
      break;
    case "XZX":
      t2.set(o2 * c2, h2 * m2, h2 * p2, o2 * l2);
      break;
    case "YXY":
      t2.set(h2 * p2, o2 * c2, h2 * m2, o2 * l2);
      break;
    case "ZYZ":
      t2.set(h2 * m2, h2 * p2, o2 * c2, o2 * l2);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r2);
  }
}, normalize: Zs, denormalize: Ys };
var $s = class _$s {
  constructor(t2 = 0, e2 = 0) {
    _$s.prototype.isVector2 = true, this.x = t2, this.y = e2;
  }
  get width() {
    return this.x;
  }
  set width(t2) {
    this.x = t2;
  }
  get height() {
    return this.y;
  }
  set height(t2) {
    this.y = t2;
  }
  set(t2, e2) {
    return this.x = t2, this.y = e2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setComponent(t2, e2) {
    switch (t2) {
      case 0:
        this.x = e2;
        break;
      case 1:
        this.y = e2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this;
  }
  addVectors(t2, e2) {
    return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
  }
  addScaledVector(t2, e2) {
    return this.x += t2.x * e2, this.y += t2.y * e2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this;
  }
  subVectors(t2, e2) {
    return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  applyMatrix3(t2) {
    const e2 = this.x, s2 = this.y, i2 = t2.elements;
    return this.x = i2[0] * e2 + i2[3] * s2 + i2[6], this.y = i2[1] * e2 + i2[4] * s2 + i2[7], this;
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
  }
  clamp(t2, e2) {
    return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this;
  }
  clampScalar(t2, e2) {
    return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this;
  }
  clampLength(t2, e2) {
    const s2 = this.length();
    return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y;
  }
  cross(t2) {
    return this.x * t2.y - this.y * t2.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t2) {
    const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
    if (0 === e2) return Math.PI / 2;
    const s2 = this.dot(t2) / e2;
    return Math.acos(qs(s2, -1, 1));
  }
  distanceTo(t2) {
    return Math.sqrt(this.distanceToSquared(t2));
  }
  distanceToSquared(t2) {
    const e2 = this.x - t2.x, s2 = this.y - t2.y;
    return e2 * e2 + s2 * s2;
  }
  manhattanDistanceTo(t2) {
    return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, e2) {
    return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
  }
  lerpVectors(t2, e2, s2) {
    return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y;
  }
  fromArray(t2, e2 = 0) {
    return this.x = t2[e2], this.y = t2[e2 + 1], this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
  }
  fromBufferAttribute(t2, e2) {
    return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
  }
  rotateAround(t2, e2) {
    const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = this.x - t2.x, n2 = this.y - t2.y;
    return this.x = r2 * s2 - n2 * i2 + t2.x, this.y = r2 * i2 + n2 * s2 + t2.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
var Qs = class {
  constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
    this.isQuaternion = true, this._x = t2, this._y = e2, this._z = s2, this._w = i2;
  }
  static slerpFlat(t2, e2, s2, i2, r2, n2, a2) {
    let o2 = s2[i2 + 0], h2 = s2[i2 + 1], l2 = s2[i2 + 2], c2 = s2[i2 + 3];
    const u2 = r2[n2 + 0], d2 = r2[n2 + 1], p2 = r2[n2 + 2], m2 = r2[n2 + 3];
    if (0 === a2) return t2[e2 + 0] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, void (t2[e2 + 3] = c2);
    if (1 === a2) return t2[e2 + 0] = u2, t2[e2 + 1] = d2, t2[e2 + 2] = p2, void (t2[e2 + 3] = m2);
    if (c2 !== m2 || o2 !== u2 || h2 !== d2 || l2 !== p2) {
      let t3 = 1 - a2;
      const e3 = o2 * u2 + h2 * d2 + l2 * p2 + c2 * m2, s3 = e3 >= 0 ? 1 : -1, i3 = 1 - e3 * e3;
      if (i3 > Number.EPSILON) {
        const r4 = Math.sqrt(i3), n3 = Math.atan2(r4, e3 * s3);
        t3 = Math.sin(t3 * n3) / r4, a2 = Math.sin(a2 * n3) / r4;
      }
      const r3 = a2 * s3;
      if (o2 = o2 * t3 + u2 * r3, h2 = h2 * t3 + d2 * r3, l2 = l2 * t3 + p2 * r3, c2 = c2 * t3 + m2 * r3, t3 === 1 - a2) {
        const t4 = 1 / Math.sqrt(o2 * o2 + h2 * h2 + l2 * l2 + c2 * c2);
        o2 *= t4, h2 *= t4, l2 *= t4, c2 *= t4;
      }
    }
    t2[e2] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, t2[e2 + 3] = c2;
  }
  static multiplyQuaternionsFlat(t2, e2, s2, i2, r2, n2) {
    const a2 = s2[i2], o2 = s2[i2 + 1], h2 = s2[i2 + 2], l2 = s2[i2 + 3], c2 = r2[n2], u2 = r2[n2 + 1], d2 = r2[n2 + 2], p2 = r2[n2 + 3];
    return t2[e2] = a2 * p2 + l2 * c2 + o2 * d2 - h2 * u2, t2[e2 + 1] = o2 * p2 + l2 * u2 + h2 * c2 - a2 * d2, t2[e2 + 2] = h2 * p2 + l2 * d2 + a2 * u2 - o2 * c2, t2[e2 + 3] = l2 * p2 - a2 * c2 - o2 * u2 - h2 * d2, t2;
  }
  get x() {
    return this._x;
  }
  set x(t2) {
    this._x = t2, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t2) {
    this._y = t2, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t2) {
    this._z = t2, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t2) {
    this._w = t2, this._onChangeCallback();
  }
  set(t2, e2, s2, i2) {
    return this._x = t2, this._y = e2, this._z = s2, this._w = i2, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t2) {
    return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
  }
  setFromEuler(t2, e2 = true) {
    const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._order, a2 = Math.cos, o2 = Math.sin, h2 = a2(s2 / 2), l2 = a2(i2 / 2), c2 = a2(r2 / 2), u2 = o2(s2 / 2), d2 = o2(i2 / 2), p2 = o2(r2 / 2);
    switch (n2) {
      case "XYZ":
        this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
        break;
      case "YXZ":
        this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
        break;
      case "ZXY":
        this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
        break;
      case "ZYX":
        this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
        break;
      case "YZX":
        this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
        break;
      case "XZY":
        this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + n2);
    }
    return true === e2 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t2, e2) {
    const s2 = e2 / 2, i2 = Math.sin(s2);
    return this._x = t2.x * i2, this._y = t2.y * i2, this._z = t2.z * i2, this._w = Math.cos(s2), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t2) {
    const e2 = t2.elements, s2 = e2[0], i2 = e2[4], r2 = e2[8], n2 = e2[1], a2 = e2[5], o2 = e2[9], h2 = e2[2], l2 = e2[6], c2 = e2[10], u2 = s2 + a2 + c2;
    if (u2 > 0) {
      const t3 = 0.5 / Math.sqrt(u2 + 1);
      this._w = 0.25 / t3, this._x = (l2 - o2) * t3, this._y = (r2 - h2) * t3, this._z = (n2 - i2) * t3;
    } else if (s2 > a2 && s2 > c2) {
      const t3 = 2 * Math.sqrt(1 + s2 - a2 - c2);
      this._w = (l2 - o2) / t3, this._x = 0.25 * t3, this._y = (i2 + n2) / t3, this._z = (r2 + h2) / t3;
    } else if (a2 > c2) {
      const t3 = 2 * Math.sqrt(1 + a2 - s2 - c2);
      this._w = (r2 - h2) / t3, this._x = (i2 + n2) / t3, this._y = 0.25 * t3, this._z = (o2 + l2) / t3;
    } else {
      const t3 = 2 * Math.sqrt(1 + c2 - s2 - a2);
      this._w = (n2 - i2) / t3, this._x = (r2 + h2) / t3, this._y = (o2 + l2) / t3, this._z = 0.25 * t3;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t2, e2) {
    let s2 = t2.dot(e2) + 1;
    return s2 < 1e-8 ? (s2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = s2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = s2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = s2), this.normalize();
  }
  angleTo(t2) {
    return 2 * Math.acos(Math.abs(qs(this.dot(t2), -1, 1)));
  }
  rotateTowards(t2, e2) {
    const s2 = this.angleTo(t2);
    if (0 === s2) return this;
    const i2 = Math.min(1, e2 / s2);
    return this.slerp(t2, i2), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t2) {
    return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t2 = this.length();
    return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
  }
  multiply(t2) {
    return this.multiplyQuaternions(this, t2);
  }
  premultiply(t2) {
    return this.multiplyQuaternions(t2, this);
  }
  multiplyQuaternions(t2, e2) {
    const s2 = t2._x, i2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = e2._x, o2 = e2._y, h2 = e2._z, l2 = e2._w;
    return this._x = s2 * l2 + n2 * a2 + i2 * h2 - r2 * o2, this._y = i2 * l2 + n2 * o2 + r2 * a2 - s2 * h2, this._z = r2 * l2 + n2 * h2 + s2 * o2 - i2 * a2, this._w = n2 * l2 - s2 * a2 - i2 * o2 - r2 * h2, this._onChangeCallback(), this;
  }
  slerp(t2, e2) {
    if (0 === e2) return this;
    if (1 === e2) return this.copy(t2);
    const s2 = this._x, i2 = this._y, r2 = this._z, n2 = this._w;
    let a2 = n2 * t2._w + s2 * t2._x + i2 * t2._y + r2 * t2._z;
    if (a2 < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a2 = -a2) : this.copy(t2), a2 >= 1) return this._w = n2, this._x = s2, this._y = i2, this._z = r2, this;
    const o2 = 1 - a2 * a2;
    if (o2 <= Number.EPSILON) {
      const t3 = 1 - e2;
      return this._w = t3 * n2 + e2 * this._w, this._x = t3 * s2 + e2 * this._x, this._y = t3 * i2 + e2 * this._y, this._z = t3 * r2 + e2 * this._z, this.normalize(), this;
    }
    const h2 = Math.sqrt(o2), l2 = Math.atan2(h2, a2), c2 = Math.sin((1 - e2) * l2) / h2, u2 = Math.sin(e2 * l2) / h2;
    return this._w = n2 * c2 + this._w * u2, this._x = s2 * c2 + this._x * u2, this._y = i2 * c2 + this._y * u2, this._z = r2 * c2 + this._z * u2, this._onChangeCallback(), this;
  }
  slerpQuaternions(t2, e2, s2) {
    return this.copy(t2).slerp(e2, s2);
  }
  random() {
    const t2 = 2 * Math.PI * Math.random(), e2 = 2 * Math.PI * Math.random(), s2 = Math.random(), i2 = Math.sqrt(1 - s2), r2 = Math.sqrt(s2);
    return this.set(i2 * Math.sin(t2), i2 * Math.cos(t2), r2 * Math.sin(e2), r2 * Math.cos(e2));
  }
  equals(t2) {
    return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
  }
  fromArray(t2, e2 = 0) {
    return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
  }
  fromBufferAttribute(t2, e2) {
    return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t2) {
    return this._onChangeCallback = t2, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
};
var Ks = class _Ks {
  constructor(t2 = 0, e2 = 0, s2 = 0) {
    _Ks.prototype.isVector3 = true, this.x = t2, this.y = e2, this.z = s2;
  }
  set(t2, e2, s2) {
    return void 0 === s2 && (s2 = this.z), this.x = t2, this.y = e2, this.z = s2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this.z = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setZ(t2) {
    return this.z = t2, this;
  }
  setComponent(t2, e2) {
    switch (t2) {
      case 0:
        this.x = e2;
        break;
      case 1:
        this.y = e2;
        break;
      case 2:
        this.z = e2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this.z += t2, this;
  }
  addVectors(t2, e2) {
    return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
  }
  addScaledVector(t2, e2) {
    return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this.z -= t2, this;
  }
  subVectors(t2, e2) {
    return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this.z *= t2, this;
  }
  multiplyVectors(t2, e2) {
    return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
  }
  applyEuler(t2) {
    return this.applyQuaternion(ei.setFromEuler(t2));
  }
  applyAxisAngle(t2, e2) {
    return this.applyQuaternion(ei.setFromAxisAngle(t2, e2));
  }
  applyMatrix3(t2) {
    const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
    return this.x = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.y = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.z = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
  }
  applyNormalMatrix(t2) {
    return this.applyMatrix3(t2).normalize();
  }
  applyMatrix4(t2) {
    const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements, n2 = 1 / (r2[3] * e2 + r2[7] * s2 + r2[11] * i2 + r2[15]);
    return this.x = (r2[0] * e2 + r2[4] * s2 + r2[8] * i2 + r2[12]) * n2, this.y = (r2[1] * e2 + r2[5] * s2 + r2[9] * i2 + r2[13]) * n2, this.z = (r2[2] * e2 + r2[6] * s2 + r2[10] * i2 + r2[14]) * n2, this;
  }
  applyQuaternion(t2) {
    const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, h2 = 2 * (n2 * i2 - a2 * s2), l2 = 2 * (a2 * e2 - r2 * i2), c2 = 2 * (r2 * s2 - n2 * e2);
    return this.x = e2 + o2 * h2 + n2 * c2 - a2 * l2, this.y = s2 + o2 * l2 + a2 * h2 - r2 * c2, this.z = i2 + o2 * c2 + r2 * l2 - n2 * h2, this;
  }
  project(t2) {
    return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
  }
  unproject(t2) {
    return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
  }
  transformDirection(t2) {
    const e2 = this.x, s2 = this.y, i2 = this.z, r2 = t2.elements;
    return this.x = r2[0] * e2 + r2[4] * s2 + r2[8] * i2, this.y = r2[1] * e2 + r2[5] * s2 + r2[9] * i2, this.z = r2[2] * e2 + r2[6] * s2 + r2[10] * i2, this.normalize();
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
  }
  clamp(t2, e2) {
    return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this.z = qs(this.z, t2.z, e2.z), this;
  }
  clampScalar(t2, e2) {
    return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this.z = qs(this.z, t2, e2), this;
  }
  clampLength(t2, e2) {
    const s2 = this.length();
    return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y + this.z * t2.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, e2) {
    return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
  }
  lerpVectors(t2, e2, s2) {
    return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this;
  }
  cross(t2) {
    return this.crossVectors(this, t2);
  }
  crossVectors(t2, e2) {
    const s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = e2.x, a2 = e2.y, o2 = e2.z;
    return this.x = i2 * o2 - r2 * a2, this.y = r2 * n2 - s2 * o2, this.z = s2 * a2 - i2 * n2, this;
  }
  projectOnVector(t2) {
    const e2 = t2.lengthSq();
    if (0 === e2) return this.set(0, 0, 0);
    const s2 = t2.dot(this) / e2;
    return this.copy(t2).multiplyScalar(s2);
  }
  projectOnPlane(t2) {
    return ti.copy(this).projectOnVector(t2), this.sub(ti);
  }
  reflect(t2) {
    return this.sub(ti.copy(t2).multiplyScalar(2 * this.dot(t2)));
  }
  angleTo(t2) {
    const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
    if (0 === e2) return Math.PI / 2;
    const s2 = this.dot(t2) / e2;
    return Math.acos(qs(s2, -1, 1));
  }
  distanceTo(t2) {
    return Math.sqrt(this.distanceToSquared(t2));
  }
  distanceToSquared(t2) {
    const e2 = this.x - t2.x, s2 = this.y - t2.y, i2 = this.z - t2.z;
    return e2 * e2 + s2 * s2 + i2 * i2;
  }
  manhattanDistanceTo(t2) {
    return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
  }
  setFromSpherical(t2) {
    return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
  }
  setFromSphericalCoords(t2, e2, s2) {
    const i2 = Math.sin(e2) * t2;
    return this.x = i2 * Math.sin(s2), this.y = Math.cos(e2) * t2, this.z = i2 * Math.cos(s2), this;
  }
  setFromCylindrical(t2) {
    return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
  }
  setFromCylindricalCoords(t2, e2, s2) {
    return this.x = t2 * Math.sin(e2), this.y = s2, this.z = t2 * Math.cos(e2), this;
  }
  setFromMatrixPosition(t2) {
    const e2 = t2.elements;
    return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
  }
  setFromMatrixScale(t2) {
    const e2 = this.setFromMatrixColumn(t2, 0).length(), s2 = this.setFromMatrixColumn(t2, 1).length(), i2 = this.setFromMatrixColumn(t2, 2).length();
    return this.x = e2, this.y = s2, this.z = i2, this;
  }
  setFromMatrixColumn(t2, e2) {
    return this.fromArray(t2.elements, 4 * e2);
  }
  setFromMatrix3Column(t2, e2) {
    return this.fromArray(t2.elements, 3 * e2);
  }
  setFromEuler(t2) {
    return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
  }
  setFromColor(t2) {
    return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y && t2.z === this.z;
  }
  fromArray(t2, e2 = 0) {
    return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
  }
  fromBufferAttribute(t2, e2) {
    return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t2 = Math.random() * Math.PI * 2, e2 = 2 * Math.random() - 1, s2 = Math.sqrt(1 - e2 * e2);
    return this.x = s2 * Math.cos(t2), this.y = e2, this.z = s2 * Math.sin(t2), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
var ti = new Ks();
var ei = new Qs();
var si = class _si {
  constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
    _si.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2);
  }
  set(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
    const l2 = this.elements;
    return l2[0] = t2, l2[1] = i2, l2[2] = a2, l2[3] = e2, l2[4] = r2, l2[5] = o2, l2[6] = s2, l2[7] = n2, l2[8] = h2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t2) {
    const e2 = this.elements, s2 = t2.elements;
    return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], this;
  }
  extractBasis(t2, e2, s2) {
    return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), s2.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t2) {
    const e2 = t2.elements;
    return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
  }
  multiply(t2) {
    return this.multiplyMatrices(this, t2);
  }
  premultiply(t2) {
    return this.multiplyMatrices(t2, this);
  }
  multiplyMatrices(t2, e2) {
    const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[3], o2 = s2[6], h2 = s2[1], l2 = s2[4], c2 = s2[7], u2 = s2[2], d2 = s2[5], p2 = s2[8], m2 = i2[0], y2 = i2[3], g2 = i2[6], f2 = i2[1], x2 = i2[4], b2 = i2[7], v2 = i2[2], w2 = i2[5], M2 = i2[8];
    return r2[0] = n2 * m2 + a2 * f2 + o2 * v2, r2[3] = n2 * y2 + a2 * x2 + o2 * w2, r2[6] = n2 * g2 + a2 * b2 + o2 * M2, r2[1] = h2 * m2 + l2 * f2 + c2 * v2, r2[4] = h2 * y2 + l2 * x2 + c2 * w2, r2[7] = h2 * g2 + l2 * b2 + c2 * M2, r2[2] = u2 * m2 + d2 * f2 + p2 * v2, r2[5] = u2 * y2 + d2 * x2 + p2 * w2, r2[8] = u2 * g2 + d2 * b2 + p2 * M2, this;
  }
  multiplyScalar(t2) {
    const e2 = this.elements;
    return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
  }
  determinant() {
    const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8];
    return e2 * n2 * l2 - e2 * a2 * h2 - s2 * r2 * l2 + s2 * a2 * o2 + i2 * r2 * h2 - i2 * n2 * o2;
  }
  invert() {
    const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = l2 * n2 - a2 * h2, u2 = a2 * o2 - l2 * r2, d2 = h2 * r2 - n2 * o2, p2 = e2 * c2 + s2 * u2 + i2 * d2;
    if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m2 = 1 / p2;
    return t2[0] = c2 * m2, t2[1] = (i2 * h2 - l2 * s2) * m2, t2[2] = (a2 * s2 - i2 * n2) * m2, t2[3] = u2 * m2, t2[4] = (l2 * e2 - i2 * o2) * m2, t2[5] = (i2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (s2 * o2 - h2 * e2) * m2, t2[8] = (n2 * e2 - s2 * r2) * m2, this;
  }
  transpose() {
    let t2;
    const e2 = this.elements;
    return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
  }
  getNormalMatrix(t2) {
    return this.setFromMatrix4(t2).invert().transpose();
  }
  transposeIntoArray(t2) {
    const e2 = this.elements;
    return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
  }
  setUvTransform(t2, e2, s2, i2, r2, n2, a2) {
    const o2 = Math.cos(r2), h2 = Math.sin(r2);
    return this.set(s2 * o2, s2 * h2, -s2 * (o2 * n2 + h2 * a2) + n2 + t2, -i2 * h2, i2 * o2, -i2 * (-h2 * n2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
  }
  scale(t2, e2) {
    return this.premultiply(ii.makeScale(t2, e2)), this;
  }
  rotate(t2) {
    return this.premultiply(ii.makeRotation(-t2)), this;
  }
  translate(t2, e2) {
    return this.premultiply(ii.makeTranslation(t2, e2)), this;
  }
  makeTranslation(t2, e2) {
    return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
  }
  makeRotation(t2) {
    const e2 = Math.cos(t2), s2 = Math.sin(t2);
    return this.set(e2, -s2, 0, s2, e2, 0, 0, 0, 1), this;
  }
  makeScale(t2, e2) {
    return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
  }
  equals(t2) {
    const e2 = this.elements, s2 = t2.elements;
    for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== s2[t3]) return false;
    return true;
  }
  fromArray(t2, e2 = 0) {
    for (let s2 = 0; s2 < 9; s2++) this.elements[s2] = t2[s2 + e2];
    return this;
  }
  toArray(t2 = [], e2 = 0) {
    const s2 = this.elements;
    return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var ii = new si();
function ri(t2) {
  for (let e2 = t2.length - 1; e2 >= 0; --e2) if (t2[e2] >= 65535) return true;
  return false;
}
function oi(t2) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
}
function hi() {
  const t2 = oi("canvas");
  return t2.style.display = "block", t2;
}
var li = {};
function ci(t2) {
  t2 in li || (li[t2] = true, console.warn(t2));
}
function ui(t2, e2, s2) {
  return new Promise(function(i2, r2) {
    setTimeout(function n2() {
      switch (t2.clientWaitSync(e2, t2.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case t2.WAIT_FAILED:
          r2();
          break;
        case t2.TIMEOUT_EXPIRED:
          setTimeout(n2, s2);
          break;
        default:
          i2();
      }
    }, s2);
  });
}
var di = new si().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
var pi = new si().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function mi() {
  const t2 = { enabled: true, workingColorSpace: Ge, spaces: {}, convert: function(t3, e3, s3) {
    return false !== this.enabled && e3 !== s3 && e3 && s3 ? (this.spaces[e3].transfer === Qe && (t3.r = gi(t3.r), t3.g = gi(t3.g), t3.b = gi(t3.b)), this.spaces[e3].primaries !== this.spaces[s3].primaries && (t3.applyMatrix3(this.spaces[e3].toXYZ), t3.applyMatrix3(this.spaces[s3].fromXYZ)), this.spaces[s3].transfer === Qe && (t3.r = fi(t3.r), t3.g = fi(t3.g), t3.b = fi(t3.b)), t3) : t3;
  }, workingToColorSpace: function(t3, e3) {
    return this.convert(t3, this.workingColorSpace, e3);
  }, colorSpaceToWorking: function(t3, e3) {
    return this.convert(t3, e3, this.workingColorSpace);
  }, getPrimaries: function(t3) {
    return this.spaces[t3].primaries;
  }, getTransfer: function(t3) {
    return "" === t3 ? $e : this.spaces[t3].transfer;
  }, getToneMappingMode: function(t3) {
    return this.spaces[t3].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(t3, e3 = this.workingColorSpace) {
    return t3.fromArray(this.spaces[e3].luminanceCoefficients);
  }, define: function(t3) {
    Object.assign(this.spaces, t3);
  }, _getMatrix: function(t3, e3, s3) {
    return t3.copy(this.spaces[e3].toXYZ).multiply(this.spaces[s3].fromXYZ);
  }, _getDrawingBufferColorSpace: function(t3) {
    return this.spaces[t3].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(t3 = this.workingColorSpace) {
    return this.spaces[t3].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(e3, s3) {
    return ci("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), t2.workingToColorSpace(e3, s3);
  }, toWorkingColorSpace: function(e3, s3) {
    return ci("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), t2.colorSpaceToWorking(e3, s3);
  } }, e2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], s2 = [0.2126, 0.7152, 0.0722], i2 = [0.3127, 0.329];
  return t2.define({ [Ge]: { primaries: e2, whitePoint: i2, transfer: $e, toXYZ: di, fromXYZ: pi, luminanceCoefficients: s2, workingColorSpaceConfig: { unpackColorSpace: Ze }, outputColorSpaceConfig: { drawingBufferColorSpace: Ze } }, [Ze]: { primaries: e2, whitePoint: i2, transfer: Qe, toXYZ: di, fromXYZ: pi, luminanceCoefficients: s2, outputColorSpaceConfig: { drawingBufferColorSpace: Ze } } }), t2;
}
var yi = mi();
function gi(t2) {
  return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
}
function fi(t2) {
  return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
}
var xi;
var bi = class {
  static getDataURL(t2, e2 = "image/png") {
    if (/^data:/i.test(t2.src)) return t2.src;
    if ("undefined" == typeof HTMLCanvasElement) return t2.src;
    let s2;
    if (t2 instanceof HTMLCanvasElement) s2 = t2;
    else {
      void 0 === xi && (xi = oi("canvas")), xi.width = t2.width, xi.height = t2.height;
      const e3 = xi.getContext("2d");
      t2 instanceof ImageData ? e3.putImageData(t2, 0, 0) : e3.drawImage(t2, 0, 0, t2.width, t2.height), s2 = xi;
    }
    return s2.toDataURL(e2);
  }
  static sRGBToLinear(t2) {
    if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
      const e2 = oi("canvas");
      e2.width = t2.width, e2.height = t2.height;
      const s2 = e2.getContext("2d");
      s2.drawImage(t2, 0, 0, t2.width, t2.height);
      const i2 = s2.getImageData(0, 0, t2.width, t2.height), r2 = i2.data;
      for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = 255 * gi(r2[t3] / 255);
      return s2.putImageData(i2, 0, 0), e2;
    }
    if (t2.data) {
      const e2 = t2.data.slice(0);
      for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * gi(e2[t3] / 255)) : e2[t3] = gi(e2[t3]);
      return { data: e2, width: t2.width, height: t2.height };
    }
    return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
  }
};
var vi = 0;
var wi = class {
  constructor(t2 = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: vi++ }), this.uuid = Hs(), this.data = t2, this.dataReady = true, this.version = 0;
  }
  getSize(t2) {
    const e2 = this.data;
    return "undefined" != typeof HTMLVideoElement && e2 instanceof HTMLVideoElement ? t2.set(e2.videoWidth, e2.videoHeight, 0) : e2 instanceof VideoFrame ? t2.set(e2.displayHeight, e2.displayWidth, 0) : null !== e2 ? t2.set(e2.width, e2.height, e2.depth || 0) : t2.set(0, 0, 0), t2;
  }
  set needsUpdate(t2) {
    true === t2 && this.version++;
  }
  toJSON(t2) {
    const e2 = void 0 === t2 || "string" == typeof t2;
    if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
    const s2 = { uuid: this.uuid, url: "" }, i2 = this.data;
    if (null !== i2) {
      let t3;
      if (Array.isArray(i2)) {
        t3 = [];
        for (let e3 = 0, s3 = i2.length; e3 < s3; e3++) i2[e3].isDataTexture ? t3.push(Mi(i2[e3].image)) : t3.push(Mi(i2[e3]));
      } else t3 = Mi(i2);
      s2.url = t3;
    }
    return e2 || (t2.images[this.uuid] = s2), s2;
  }
};
function Mi(t2) {
  return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? bi.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
var Si = 0;
var _i = new Ks();
var Ai = class _Ai extends Ls {
  constructor(t2 = _Ai.DEFAULT_IMAGE, e2 = _Ai.DEFAULT_MAPPING, s2 = 1001, i2 = 1001, r2 = 1006, n2 = 1008, a2 = 1023, o2 = 1009, h2 = _Ai.DEFAULT_ANISOTROPY, l2 = "") {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Si++ }), this.uuid = Hs(), this.name = "", this.source = new wi(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = s2, this.wrapT = i2, this.magFilter = r2, this.minFilter = n2, this.anisotropy = h2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new $s(0, 0), this.repeat = new $s(1, 1), this.center = new $s(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new si(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = l2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t2 && t2.depth && t2.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(_i).x;
  }
  get height() {
    return this.source.getSize(_i).y;
  }
  get depth() {
    return this.source.getSize(_i).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t2 = null) {
    this.source.data = t2;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t2, e2) {
    this.updateRanges.push({ start: t2, count: e2 });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.renderTarget = t2.renderTarget, this.isRenderTargetTexture = t2.isRenderTargetTexture, this.isArrayTexture = t2.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
  }
  setValues(t2) {
    for (const e2 in t2) {
      const s2 = t2[e2];
      if (void 0 === s2) {
        console.warn(`THREE.Texture.setValues(): parameter '${e2}' has value of undefined.`);
        continue;
      }
      const i2 = this[e2];
      void 0 !== i2 ? i2 && s2 && i2.isVector2 && s2.isVector2 || i2 && s2 && i2.isVector3 && s2.isVector3 || i2 && s2 && i2.isMatrix3 && s2.isMatrix3 ? i2.copy(s2) : this[e2] = s2 : console.warn(`THREE.Texture.setValues(): property '${e2}' does not exist.`);
    }
  }
  toJSON(t2) {
    const e2 = void 0 === t2 || "string" == typeof t2;
    if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
    const s2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2 || (t2.textures[this.uuid] = s2), s2;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t2) {
    if (this.mapping !== ot) return t2;
    if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
      case pt:
        t2.x = t2.x - Math.floor(t2.x);
        break;
      case mt:
        t2.x = t2.x < 0 ? 0 : 1;
        break;
      case yt:
        1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
    }
    if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
      case pt:
        t2.y = t2.y - Math.floor(t2.y);
        break;
      case mt:
        t2.y = t2.y < 0 ? 0 : 1;
        break;
      case yt:
        1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
    }
    return this.flipY && (t2.y = 1 - t2.y), t2;
  }
  set needsUpdate(t2) {
    true === t2 && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t2) {
    true === t2 && this.pmremVersion++;
  }
};
Ai.DEFAULT_IMAGE = null, Ai.DEFAULT_MAPPING = ot, Ai.DEFAULT_ANISOTROPY = 1;
var Ti = class _Ti {
  constructor(t2 = 0, e2 = 0, s2 = 0, i2 = 1) {
    _Ti.prototype.isVector4 = true, this.x = t2, this.y = e2, this.z = s2, this.w = i2;
  }
  get width() {
    return this.z;
  }
  set width(t2) {
    this.z = t2;
  }
  get height() {
    return this.w;
  }
  set height(t2) {
    this.w = t2;
  }
  set(t2, e2, s2, i2) {
    return this.x = t2, this.y = e2, this.z = s2, this.w = i2, this;
  }
  setScalar(t2) {
    return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setZ(t2) {
    return this.z = t2, this;
  }
  setW(t2) {
    return this.w = t2, this;
  }
  setComponent(t2, e2) {
    switch (t2) {
      case 0:
        this.x = e2;
        break;
      case 1:
        this.y = e2;
        break;
      case 2:
        this.z = e2;
        break;
      case 3:
        this.w = e2;
        break;
      default:
        throw new Error("index is out of range: " + t2);
    }
    return this;
  }
  getComponent(t2) {
    switch (t2) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t2);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t2) {
    return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
  }
  addScalar(t2) {
    return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
  }
  addVectors(t2, e2) {
    return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
  }
  addScaledVector(t2, e2) {
    return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
  }
  subScalar(t2) {
    return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
  }
  subVectors(t2, e2) {
    return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
  }
  multiply(t2) {
    return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
  }
  multiplyScalar(t2) {
    return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
  }
  applyMatrix4(t2) {
    const e2 = this.x, s2 = this.y, i2 = this.z, r2 = this.w, n2 = t2.elements;
    return this.x = n2[0] * e2 + n2[4] * s2 + n2[8] * i2 + n2[12] * r2, this.y = n2[1] * e2 + n2[5] * s2 + n2[9] * i2 + n2[13] * r2, this.z = n2[2] * e2 + n2[6] * s2 + n2[10] * i2 + n2[14] * r2, this.w = n2[3] * e2 + n2[7] * s2 + n2[11] * i2 + n2[15] * r2, this;
  }
  divide(t2) {
    return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
  }
  divideScalar(t2) {
    return this.multiplyScalar(1 / t2);
  }
  setAxisAngleFromQuaternion(t2) {
    this.w = 2 * Math.acos(t2.w);
    const e2 = Math.sqrt(1 - t2.w * t2.w);
    return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
  }
  setAxisAngleFromRotationMatrix(t2) {
    let e2, s2, i2, r2;
    const n2 = 0.01, a2 = 0.1, o2 = t2.elements, h2 = o2[0], l2 = o2[4], c2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], y2 = o2[6], g2 = o2[10];
    if (Math.abs(l2 - u2) < n2 && Math.abs(c2 - m2) < n2 && Math.abs(p2 - y2) < n2) {
      if (Math.abs(l2 + u2) < a2 && Math.abs(c2 + m2) < a2 && Math.abs(p2 + y2) < a2 && Math.abs(h2 + d2 + g2 - 3) < a2) return this.set(1, 0, 0, 0), this;
      e2 = Math.PI;
      const t3 = (h2 + 1) / 2, o3 = (d2 + 1) / 2, f3 = (g2 + 1) / 2, x2 = (l2 + u2) / 4, b2 = (c2 + m2) / 4, v2 = (p2 + y2) / 4;
      return t3 > o3 && t3 > f3 ? t3 < n2 ? (s2 = 0, i2 = 0.707106781, r2 = 0.707106781) : (s2 = Math.sqrt(t3), i2 = x2 / s2, r2 = b2 / s2) : o3 > f3 ? o3 < n2 ? (s2 = 0.707106781, i2 = 0, r2 = 0.707106781) : (i2 = Math.sqrt(o3), s2 = x2 / i2, r2 = v2 / i2) : f3 < n2 ? (s2 = 0.707106781, i2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(f3), s2 = b2 / r2, i2 = v2 / r2), this.set(s2, i2, r2, e2), this;
    }
    let f2 = Math.sqrt((y2 - p2) * (y2 - p2) + (c2 - m2) * (c2 - m2) + (u2 - l2) * (u2 - l2));
    return Math.abs(f2) < 1e-3 && (f2 = 1), this.x = (y2 - p2) / f2, this.y = (c2 - m2) / f2, this.z = (u2 - l2) / f2, this.w = Math.acos((h2 + d2 + g2 - 1) / 2), this;
  }
  setFromMatrixPosition(t2) {
    const e2 = t2.elements;
    return this.x = e2[12], this.y = e2[13], this.z = e2[14], this.w = e2[15], this;
  }
  min(t2) {
    return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
  }
  max(t2) {
    return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
  }
  clamp(t2, e2) {
    return this.x = qs(this.x, t2.x, e2.x), this.y = qs(this.y, t2.y, e2.y), this.z = qs(this.z, t2.z, e2.z), this.w = qs(this.w, t2.w, e2.w), this;
  }
  clampScalar(t2, e2) {
    return this.x = qs(this.x, t2, e2), this.y = qs(this.y, t2, e2), this.z = qs(this.z, t2, e2), this.w = qs(this.w, t2, e2), this;
  }
  clampLength(t2, e2) {
    const s2 = this.length();
    return this.divideScalar(s2 || 1).multiplyScalar(qs(s2, t2, e2));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t2) {
    return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t2) {
    return this.normalize().multiplyScalar(t2);
  }
  lerp(t2, e2) {
    return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
  }
  lerpVectors(t2, e2, s2) {
    return this.x = t2.x + (e2.x - t2.x) * s2, this.y = t2.y + (e2.y - t2.y) * s2, this.z = t2.z + (e2.z - t2.z) * s2, this.w = t2.w + (e2.w - t2.w) * s2, this;
  }
  equals(t2) {
    return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
  }
  fromArray(t2, e2 = 0) {
    return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
  }
  fromBufferAttribute(t2, e2) {
    return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
var zi = class extends Ls {
  constructor(t2 = 1, e2 = 1, s2 = {}) {
    super(), s2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: wt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, s2), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = s2.depth, this.scissor = new Ti(0, 0, t2, e2), this.scissorTest = false, this.viewport = new Ti(0, 0, t2, e2);
    const i2 = { width: t2, height: e2, depth: s2.depth }, r2 = new Ai(i2);
    this.textures = [];
    const n2 = s2.count;
    for (let t3 = 0; t3 < n2; t3++) this.textures[t3] = r2.clone(), this.textures[t3].isRenderTargetTexture = true, this.textures[t3].renderTarget = this;
    this._setTextureOptions(s2), this.depthBuffer = s2.depthBuffer, this.stencilBuffer = s2.stencilBuffer, this.resolveDepthBuffer = s2.resolveDepthBuffer, this.resolveStencilBuffer = s2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = s2.depthTexture, this.samples = s2.samples, this.multiview = s2.multiview;
  }
  _setTextureOptions(t2 = {}) {
    const e2 = { minFilter: wt, generateMipmaps: false, flipY: false, internalFormat: null };
    void 0 !== t2.mapping && (e2.mapping = t2.mapping), void 0 !== t2.wrapS && (e2.wrapS = t2.wrapS), void 0 !== t2.wrapT && (e2.wrapT = t2.wrapT), void 0 !== t2.wrapR && (e2.wrapR = t2.wrapR), void 0 !== t2.magFilter && (e2.magFilter = t2.magFilter), void 0 !== t2.minFilter && (e2.minFilter = t2.minFilter), void 0 !== t2.format && (e2.format = t2.format), void 0 !== t2.type && (e2.type = t2.type), void 0 !== t2.anisotropy && (e2.anisotropy = t2.anisotropy), void 0 !== t2.colorSpace && (e2.colorSpace = t2.colorSpace), void 0 !== t2.flipY && (e2.flipY = t2.flipY), void 0 !== t2.generateMipmaps && (e2.generateMipmaps = t2.generateMipmaps), void 0 !== t2.internalFormat && (e2.internalFormat = t2.internalFormat);
    for (let t3 = 0; t3 < this.textures.length; t3++) {
      this.textures[t3].setValues(e2);
    }
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t2) {
    this.textures[0] = t2;
  }
  set depthTexture(t2) {
    null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== t2 && (t2.renderTarget = this), this._depthTexture = t2;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t2, e2, s2 = 1) {
    if (this.width !== t2 || this.height !== e2 || this.depth !== s2) {
      this.width = t2, this.height = e2, this.depth = s2;
      for (let i2 = 0, r2 = this.textures.length; i2 < r2; i2++) this.textures[i2].image.width = t2, this.textures[i2].image.height = e2, this.textures[i2].image.depth = s2, this.textures[i2].isArrayTexture = this.textures[i2].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
    for (let e2 = 0, s2 = t2.textures.length; e2 < s2; e2++) {
      this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true, this.textures[e2].renderTarget = this;
      const s3 = Object.assign({}, t2.textures[e2].image);
      this.textures[e2].source = new wi(s3);
    }
    return this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var Ci = class extends zi {
  constructor(t2 = 1, e2 = 1, s2 = {}) {
    super(t2, e2, s2), this.isWebGLRenderTarget = true;
  }
};
var Ii = class extends Ai {
  constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t2) {
    this.layerUpdates.add(t2);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var ki = class extends Ai {
  constructor(t2 = null, e2 = 1, s2 = 1, i2 = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: s2, depth: i2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
};
var Ri = class {
  constructor(t2 = new Ks(1 / 0, 1 / 0, 1 / 0), e2 = new Ks(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t2, this.max = e2;
  }
  set(t2, e2) {
    return this.min.copy(t2), this.max.copy(e2), this;
  }
  setFromArray(t2) {
    this.makeEmpty();
    for (let e2 = 0, s2 = t2.length; e2 < s2; e2 += 3) this.expandByPoint(Oi.fromArray(t2, e2));
    return this;
  }
  setFromBufferAttribute(t2) {
    this.makeEmpty();
    for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) this.expandByPoint(Oi.fromBufferAttribute(t2, e2));
    return this;
  }
  setFromPoints(t2) {
    this.makeEmpty();
    for (let e2 = 0, s2 = t2.length; e2 < s2; e2++) this.expandByPoint(t2[e2]);
    return this;
  }
  setFromCenterAndSize(t2, e2) {
    const s2 = Oi.copy(e2).multiplyScalar(0.5);
    return this.min.copy(t2).sub(s2), this.max.copy(t2).add(s2), this;
  }
  setFromObject(t2, e2 = false) {
    return this.makeEmpty(), this.expandByObject(t2, e2);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    return this.min.copy(t2.min), this.max.copy(t2.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t2) {
    return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t2) {
    return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
  }
  expandByPoint(t2) {
    return this.min.min(t2), this.max.max(t2), this;
  }
  expandByVector(t2) {
    return this.min.sub(t2), this.max.add(t2), this;
  }
  expandByScalar(t2) {
    return this.min.addScalar(-t2), this.max.addScalar(t2), this;
  }
  expandByObject(t2, e2 = false) {
    t2.updateWorldMatrix(false, false);
    const s2 = t2.geometry;
    if (void 0 !== s2) {
      const i3 = s2.getAttribute("position");
      if (true === e2 && void 0 !== i3 && true !== t2.isInstancedMesh) for (let e3 = 0, s3 = i3.count; e3 < s3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, Oi) : Oi.fromBufferAttribute(i3, e3), Oi.applyMatrix4(t2.matrixWorld), this.expandByPoint(Oi);
      else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Ni.copy(t2.boundingBox)) : (null === s2.boundingBox && s2.computeBoundingBox(), Ni.copy(s2.boundingBox)), Ni.applyMatrix4(t2.matrixWorld), this.union(Ni);
    }
    const i2 = t2.children;
    for (let t3 = 0, s3 = i2.length; t3 < s3; t3++) this.expandByObject(i2[t3], e2);
    return this;
  }
  containsPoint(t2) {
    return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
  }
  containsBox(t2) {
    return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
  }
  getParameter(t2, e2) {
    return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t2) {
    return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
  }
  intersectsSphere(t2) {
    return this.clampPoint(t2.center, Oi), Oi.distanceToSquared(t2.center) <= t2.radius * t2.radius;
  }
  intersectsPlane(t2) {
    let e2, s2;
    return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, s2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, s2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, s2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, s2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, s2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, s2 += t2.normal.z * this.min.z), e2 <= -t2.constant && s2 >= -t2.constant;
  }
  intersectsTriangle(t2) {
    if (this.isEmpty()) return false;
    this.getCenter(Ui), Hi.subVectors(this.max, Ui), Vi.subVectors(t2.a, Ui), Fi.subVectors(t2.b, Ui), Li.subVectors(t2.c, Ui), ji.subVectors(Fi, Vi), Di.subVectors(Li, Fi), Wi.subVectors(Vi, Li);
    let e2 = [0, -ji.z, ji.y, 0, -Di.z, Di.y, 0, -Wi.z, Wi.y, ji.z, 0, -ji.x, Di.z, 0, -Di.x, Wi.z, 0, -Wi.x, -ji.y, ji.x, 0, -Di.y, Di.x, 0, -Wi.y, Wi.x, 0];
    return !!Xi(e2, Vi, Fi, Li, Hi) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Xi(e2, Vi, Fi, Li, Hi) && (qi.crossVectors(ji, Di), e2 = [qi.x, qi.y, qi.z], Xi(e2, Vi, Fi, Li, Hi)));
  }
  clampPoint(t2, e2) {
    return e2.copy(t2).clamp(this.min, this.max);
  }
  distanceToPoint(t2) {
    return this.clampPoint(t2, Oi).distanceTo(t2);
  }
  getBoundingSphere(t2) {
    return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Oi).length()), t2;
  }
  intersect(t2) {
    return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t2) {
    return this.min.min(t2.min), this.max.max(t2.max), this;
  }
  applyMatrix4(t2) {
    return this.isEmpty() || (Pi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Pi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Pi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Pi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Pi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Pi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Pi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Pi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Pi)), this;
  }
  translate(t2) {
    return this.min.add(t2), this.max.add(t2), this;
  }
  equals(t2) {
    return t2.min.equals(this.min) && t2.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t2) {
    return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
  }
};
var Pi = [new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks(), new Ks()];
var Oi = new Ks();
var Ni = new Ri();
var Vi = new Ks();
var Fi = new Ks();
var Li = new Ks();
var ji = new Ks();
var Di = new Ks();
var Wi = new Ks();
var Ui = new Ks();
var Hi = new Ks();
var qi = new Ks();
var Ji = new Ks();
function Xi(t2, e2, s2, i2, r2) {
  for (let n2 = 0, a2 = t2.length - 3; n2 <= a2; n2 += 3) {
    Ji.fromArray(t2, n2);
    const a3 = r2.x * Math.abs(Ji.x) + r2.y * Math.abs(Ji.y) + r2.z * Math.abs(Ji.z), o2 = e2.dot(Ji), h2 = s2.dot(Ji), l2 = i2.dot(Ji);
    if (Math.max(-Math.max(o2, h2, l2), Math.min(o2, h2, l2)) > a3) return false;
  }
  return true;
}
var Yi = new Ri();
var Zi = new Ks();
var Gi = new Ks();
var $i = class {
  constructor(t2 = new Ks(), e2 = -1) {
    this.isSphere = true, this.center = t2, this.radius = e2;
  }
  set(t2, e2) {
    return this.center.copy(t2), this.radius = e2, this;
  }
  setFromPoints(t2, e2) {
    const s2 = this.center;
    void 0 !== e2 ? s2.copy(e2) : Yi.setFromPoints(t2).getCenter(s2);
    let i2 = 0;
    for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) i2 = Math.max(i2, s2.distanceToSquared(t2[e3]));
    return this.radius = Math.sqrt(i2), this;
  }
  copy(t2) {
    return this.center.copy(t2.center), this.radius = t2.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t2) {
    return t2.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t2) {
    return t2.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t2) {
    const e2 = this.radius + t2.radius;
    return t2.center.distanceToSquared(this.center) <= e2 * e2;
  }
  intersectsBox(t2) {
    return t2.intersectsSphere(this);
  }
  intersectsPlane(t2) {
    return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t2, e2) {
    const s2 = this.center.distanceToSquared(t2);
    return e2.copy(t2), s2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
  }
  getBoundingBox(t2) {
    return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
  }
  applyMatrix4(t2) {
    return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
  }
  translate(t2) {
    return this.center.add(t2), this;
  }
  expandByPoint(t2) {
    if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
    Zi.subVectors(t2, this.center);
    const e2 = Zi.lengthSq();
    if (e2 > this.radius * this.radius) {
      const t3 = Math.sqrt(e2), s2 = 0.5 * (t3 - this.radius);
      this.center.addScaledVector(Zi, s2 / t3), this.radius += s2;
    }
    return this;
  }
  union(t2) {
    return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Gi.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Zi.copy(t2.center).add(Gi)), this.expandByPoint(Zi.copy(t2.center).sub(Gi))), this);
  }
  equals(t2) {
    return t2.center.equals(this.center) && t2.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(t2) {
    return this.radius = t2.radius, this.center.fromArray(t2.center), this;
  }
};
var Qi = new Ks();
var Ki = new Ks();
var tr = new Ks();
var er = new Ks();
var sr = new Ks();
var ir = new Ks();
var rr = new Ks();
var nr = class {
  constructor(t2 = new Ks(), e2 = new Ks(0, 0, -1)) {
    this.origin = t2, this.direction = e2;
  }
  set(t2, e2) {
    return this.origin.copy(t2), this.direction.copy(e2), this;
  }
  copy(t2) {
    return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
  }
  at(t2, e2) {
    return e2.copy(this.origin).addScaledVector(this.direction, t2);
  }
  lookAt(t2) {
    return this.direction.copy(t2).sub(this.origin).normalize(), this;
  }
  recast(t2) {
    return this.origin.copy(this.at(t2, Qi)), this;
  }
  closestPointToPoint(t2, e2) {
    e2.subVectors(t2, this.origin);
    const s2 = e2.dot(this.direction);
    return s2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, s2);
  }
  distanceToPoint(t2) {
    return Math.sqrt(this.distanceSqToPoint(t2));
  }
  distanceSqToPoint(t2) {
    const e2 = Qi.subVectors(t2, this.origin).dot(this.direction);
    return e2 < 0 ? this.origin.distanceToSquared(t2) : (Qi.copy(this.origin).addScaledVector(this.direction, e2), Qi.distanceToSquared(t2));
  }
  distanceSqToSegment(t2, e2, s2, i2) {
    Ki.copy(t2).add(e2).multiplyScalar(0.5), tr.copy(e2).sub(t2).normalize(), er.copy(this.origin).sub(Ki);
    const r2 = 0.5 * t2.distanceTo(e2), n2 = -this.direction.dot(tr), a2 = er.dot(this.direction), o2 = -er.dot(tr), h2 = er.lengthSq(), l2 = Math.abs(1 - n2 * n2);
    let c2, u2, d2, p2;
    if (l2 > 0) if (c2 = n2 * o2 - a2, u2 = n2 * a2 - o2, p2 = r2 * l2, c2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
      const t3 = 1 / l2;
      c2 *= t3, u2 *= t3, d2 = c2 * (c2 + n2 * u2 + 2 * a2) + u2 * (n2 * c2 + u2 + 2 * o2) + h2;
    } else u2 = r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
    else u2 = -r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
    else u2 <= -p2 ? (c2 = Math.max(0, -(-n2 * r2 + a2)), u2 = c2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2) : u2 <= p2 ? (c2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + h2) : (c2 = Math.max(0, -(n2 * r2 + a2)), u2 = c2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2);
    else u2 = n2 > 0 ? -r2 : r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
    return s2 && s2.copy(this.origin).addScaledVector(this.direction, c2), i2 && i2.copy(Ki).addScaledVector(tr, u2), d2;
  }
  intersectSphere(t2, e2) {
    Qi.subVectors(t2.center, this.origin);
    const s2 = Qi.dot(this.direction), i2 = Qi.dot(Qi) - s2 * s2, r2 = t2.radius * t2.radius;
    if (i2 > r2) return null;
    const n2 = Math.sqrt(r2 - i2), a2 = s2 - n2, o2 = s2 + n2;
    return o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
  }
  intersectsSphere(t2) {
    return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
  }
  distanceToPlane(t2) {
    const e2 = t2.normal.dot(this.direction);
    if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
    const s2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
    return s2 >= 0 ? s2 : null;
  }
  intersectPlane(t2, e2) {
    const s2 = this.distanceToPlane(t2);
    return null === s2 ? null : this.at(s2, e2);
  }
  intersectsPlane(t2) {
    const e2 = t2.distanceToPoint(this.origin);
    if (0 === e2) return true;
    return t2.normal.dot(this.direction) * e2 < 0;
  }
  intersectBox(t2, e2) {
    let s2, i2, r2, n2, a2, o2;
    const h2 = 1 / this.direction.x, l2 = 1 / this.direction.y, c2 = 1 / this.direction.z, u2 = this.origin;
    return h2 >= 0 ? (s2 = (t2.min.x - u2.x) * h2, i2 = (t2.max.x - u2.x) * h2) : (s2 = (t2.max.x - u2.x) * h2, i2 = (t2.min.x - u2.x) * h2), l2 >= 0 ? (r2 = (t2.min.y - u2.y) * l2, n2 = (t2.max.y - u2.y) * l2) : (r2 = (t2.max.y - u2.y) * l2, n2 = (t2.min.y - u2.y) * l2), s2 > n2 || r2 > i2 ? null : ((r2 > s2 || isNaN(s2)) && (s2 = r2), (n2 < i2 || isNaN(i2)) && (i2 = n2), c2 >= 0 ? (a2 = (t2.min.z - u2.z) * c2, o2 = (t2.max.z - u2.z) * c2) : (a2 = (t2.max.z - u2.z) * c2, o2 = (t2.min.z - u2.z) * c2), s2 > o2 || a2 > i2 ? null : ((a2 > s2 || s2 != s2) && (s2 = a2), (o2 < i2 || i2 != i2) && (i2 = o2), i2 < 0 ? null : this.at(s2 >= 0 ? s2 : i2, e2)));
  }
  intersectsBox(t2) {
    return null !== this.intersectBox(t2, Qi);
  }
  intersectTriangle(t2, e2, s2, i2, r2) {
    sr.subVectors(e2, t2), ir.subVectors(s2, t2), rr.crossVectors(sr, ir);
    let n2, a2 = this.direction.dot(rr);
    if (a2 > 0) {
      if (i2) return null;
      n2 = 1;
    } else {
      if (!(a2 < 0)) return null;
      n2 = -1, a2 = -a2;
    }
    er.subVectors(this.origin, t2);
    const o2 = n2 * this.direction.dot(ir.crossVectors(er, ir));
    if (o2 < 0) return null;
    const h2 = n2 * this.direction.dot(sr.cross(er));
    if (h2 < 0) return null;
    if (o2 + h2 > a2) return null;
    const l2 = -n2 * er.dot(rr);
    return l2 < 0 ? null : this.at(l2 / a2, r2);
  }
  applyMatrix4(t2) {
    return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
  }
  equals(t2) {
    return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ar = class _ar {
  constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
    _ar.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2);
  }
  set(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
    const g2 = this.elements;
    return g2[0] = t2, g2[4] = e2, g2[8] = s2, g2[12] = i2, g2[1] = r2, g2[5] = n2, g2[9] = a2, g2[13] = o2, g2[2] = h2, g2[6] = l2, g2[10] = c2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = y2, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _ar().fromArray(this.elements);
  }
  copy(t2) {
    const e2 = this.elements, s2 = t2.elements;
    return e2[0] = s2[0], e2[1] = s2[1], e2[2] = s2[2], e2[3] = s2[3], e2[4] = s2[4], e2[5] = s2[5], e2[6] = s2[6], e2[7] = s2[7], e2[8] = s2[8], e2[9] = s2[9], e2[10] = s2[10], e2[11] = s2[11], e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], e2[15] = s2[15], this;
  }
  copyPosition(t2) {
    const e2 = this.elements, s2 = t2.elements;
    return e2[12] = s2[12], e2[13] = s2[13], e2[14] = s2[14], this;
  }
  setFromMatrix3(t2) {
    const e2 = t2.elements;
    return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t2, e2, s2) {
    return t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), s2.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t2, e2, s2) {
    return this.set(t2.x, e2.x, s2.x, 0, t2.y, e2.y, s2.y, 0, t2.z, e2.z, s2.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t2) {
    const e2 = this.elements, s2 = t2.elements, i2 = 1 / or.setFromMatrixColumn(t2, 0).length(), r2 = 1 / or.setFromMatrixColumn(t2, 1).length(), n2 = 1 / or.setFromMatrixColumn(t2, 2).length();
    return e2[0] = s2[0] * i2, e2[1] = s2[1] * i2, e2[2] = s2[2] * i2, e2[3] = 0, e2[4] = s2[4] * r2, e2[5] = s2[5] * r2, e2[6] = s2[6] * r2, e2[7] = 0, e2[8] = s2[8] * n2, e2[9] = s2[9] * n2, e2[10] = s2[10] * n2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
  }
  makeRotationFromEuler(t2) {
    const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z, n2 = Math.cos(s2), a2 = Math.sin(s2), o2 = Math.cos(i2), h2 = Math.sin(i2), l2 = Math.cos(r2), c2 = Math.sin(r2);
    if ("XYZ" === t2.order) {
      const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
      e2[0] = o2 * l2, e2[4] = -o2 * c2, e2[8] = h2, e2[1] = s3 + i3 * h2, e2[5] = t3 - r3 * h2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * h2, e2[6] = i3 + s3 * h2, e2[10] = n2 * o2;
    } else if ("YXZ" === t2.order) {
      const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
      e2[0] = t3 + r3 * a2, e2[4] = i3 * a2 - s3, e2[8] = n2 * h2, e2[1] = n2 * c2, e2[5] = n2 * l2, e2[9] = -a2, e2[2] = s3 * a2 - i3, e2[6] = r3 + t3 * a2, e2[10] = n2 * o2;
    } else if ("ZXY" === t2.order) {
      const t3 = o2 * l2, s3 = o2 * c2, i3 = h2 * l2, r3 = h2 * c2;
      e2[0] = t3 - r3 * a2, e2[4] = -n2 * c2, e2[8] = i3 + s3 * a2, e2[1] = s3 + i3 * a2, e2[5] = n2 * l2, e2[9] = r3 - t3 * a2, e2[2] = -n2 * h2, e2[6] = a2, e2[10] = n2 * o2;
    } else if ("ZYX" === t2.order) {
      const t3 = n2 * l2, s3 = n2 * c2, i3 = a2 * l2, r3 = a2 * c2;
      e2[0] = o2 * l2, e2[4] = i3 * h2 - s3, e2[8] = t3 * h2 + r3, e2[1] = o2 * c2, e2[5] = r3 * h2 + t3, e2[9] = s3 * h2 - i3, e2[2] = -h2, e2[6] = a2 * o2, e2[10] = n2 * o2;
    } else if ("YZX" === t2.order) {
      const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
      e2[0] = o2 * l2, e2[4] = r3 - t3 * c2, e2[8] = i3 * c2 + s3, e2[1] = c2, e2[5] = n2 * l2, e2[9] = -a2 * l2, e2[2] = -h2 * l2, e2[6] = s3 * c2 + i3, e2[10] = t3 - r3 * c2;
    } else if ("XZY" === t2.order) {
      const t3 = n2 * o2, s3 = n2 * h2, i3 = a2 * o2, r3 = a2 * h2;
      e2[0] = o2 * l2, e2[4] = -c2, e2[8] = h2 * l2, e2[1] = t3 * c2 + r3, e2[5] = n2 * l2, e2[9] = s3 * c2 - i3, e2[2] = i3 * c2 - s3, e2[6] = a2 * l2, e2[10] = r3 * c2 + t3;
    }
    return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
  }
  makeRotationFromQuaternion(t2) {
    return this.compose(lr, t2, cr);
  }
  lookAt(t2, e2, s2) {
    const i2 = this.elements;
    return pr.subVectors(t2, e2), 0 === pr.lengthSq() && (pr.z = 1), pr.normalize(), ur.crossVectors(s2, pr), 0 === ur.lengthSq() && (1 === Math.abs(s2.z) ? pr.x += 1e-4 : pr.z += 1e-4, pr.normalize(), ur.crossVectors(s2, pr)), ur.normalize(), dr.crossVectors(pr, ur), i2[0] = ur.x, i2[4] = dr.x, i2[8] = pr.x, i2[1] = ur.y, i2[5] = dr.y, i2[9] = pr.y, i2[2] = ur.z, i2[6] = dr.z, i2[10] = pr.z, this;
  }
  multiply(t2) {
    return this.multiplyMatrices(this, t2);
  }
  premultiply(t2) {
    return this.multiplyMatrices(t2, this);
  }
  multiplyMatrices(t2, e2) {
    const s2 = t2.elements, i2 = e2.elements, r2 = this.elements, n2 = s2[0], a2 = s2[4], o2 = s2[8], h2 = s2[12], l2 = s2[1], c2 = s2[5], u2 = s2[9], d2 = s2[13], p2 = s2[2], m2 = s2[6], y2 = s2[10], g2 = s2[14], f2 = s2[3], x2 = s2[7], b2 = s2[11], v2 = s2[15], w2 = i2[0], M2 = i2[4], S2 = i2[8], _2 = i2[12], A2 = i2[1], T2 = i2[5], z2 = i2[9], C2 = i2[13], I2 = i2[2], B2 = i2[6], k2 = i2[10], E2 = i2[14], R2 = i2[3], P2 = i2[7], O2 = i2[11], N2 = i2[15];
    return r2[0] = n2 * w2 + a2 * A2 + o2 * I2 + h2 * R2, r2[4] = n2 * M2 + a2 * T2 + o2 * B2 + h2 * P2, r2[8] = n2 * S2 + a2 * z2 + o2 * k2 + h2 * O2, r2[12] = n2 * _2 + a2 * C2 + o2 * E2 + h2 * N2, r2[1] = l2 * w2 + c2 * A2 + u2 * I2 + d2 * R2, r2[5] = l2 * M2 + c2 * T2 + u2 * B2 + d2 * P2, r2[9] = l2 * S2 + c2 * z2 + u2 * k2 + d2 * O2, r2[13] = l2 * _2 + c2 * C2 + u2 * E2 + d2 * N2, r2[2] = p2 * w2 + m2 * A2 + y2 * I2 + g2 * R2, r2[6] = p2 * M2 + m2 * T2 + y2 * B2 + g2 * P2, r2[10] = p2 * S2 + m2 * z2 + y2 * k2 + g2 * O2, r2[14] = p2 * _2 + m2 * C2 + y2 * E2 + g2 * N2, r2[3] = f2 * w2 + x2 * A2 + b2 * I2 + v2 * R2, r2[7] = f2 * M2 + x2 * T2 + b2 * B2 + v2 * P2, r2[11] = f2 * S2 + x2 * z2 + b2 * k2 + v2 * O2, r2[15] = f2 * _2 + x2 * C2 + b2 * E2 + v2 * N2, this;
  }
  multiplyScalar(t2) {
    const e2 = this.elements;
    return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
  }
  determinant() {
    const t2 = this.elements, e2 = t2[0], s2 = t2[4], i2 = t2[8], r2 = t2[12], n2 = t2[1], a2 = t2[5], o2 = t2[9], h2 = t2[13], l2 = t2[2], c2 = t2[6], u2 = t2[10], d2 = t2[14];
    return t2[3] * (+r2 * o2 * c2 - i2 * h2 * c2 - r2 * a2 * u2 + s2 * h2 * u2 + i2 * a2 * d2 - s2 * o2 * d2) + t2[7] * (+e2 * o2 * d2 - e2 * h2 * u2 + r2 * n2 * u2 - i2 * n2 * d2 + i2 * h2 * l2 - r2 * o2 * l2) + t2[11] * (+e2 * h2 * c2 - e2 * a2 * d2 - r2 * n2 * c2 + s2 * n2 * d2 + r2 * a2 * l2 - s2 * h2 * l2) + t2[15] * (-i2 * a2 * l2 - e2 * o2 * c2 + e2 * a2 * u2 + i2 * n2 * c2 - s2 * n2 * u2 + s2 * o2 * l2);
  }
  transpose() {
    const t2 = this.elements;
    let e2;
    return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
  }
  setPosition(t2, e2, s2) {
    const i2 = this.elements;
    return t2.isVector3 ? (i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z) : (i2[12] = t2, i2[13] = e2, i2[14] = s2), this;
  }
  invert() {
    const t2 = this.elements, e2 = t2[0], s2 = t2[1], i2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], y2 = t2[14], g2 = t2[15], f2 = c2 * y2 * h2 - m2 * u2 * h2 + m2 * o2 * d2 - a2 * y2 * d2 - c2 * o2 * g2 + a2 * u2 * g2, x2 = p2 * u2 * h2 - l2 * y2 * h2 - p2 * o2 * d2 + n2 * y2 * d2 + l2 * o2 * g2 - n2 * u2 * g2, b2 = l2 * m2 * h2 - p2 * c2 * h2 + p2 * a2 * d2 - n2 * m2 * d2 - l2 * a2 * g2 + n2 * c2 * g2, v2 = p2 * c2 * o2 - l2 * m2 * o2 - p2 * a2 * u2 + n2 * m2 * u2 + l2 * a2 * y2 - n2 * c2 * y2, w2 = e2 * f2 + s2 * x2 + i2 * b2 + r2 * v2;
    if (0 === w2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M2 = 1 / w2;
    return t2[0] = f2 * M2, t2[1] = (m2 * u2 * r2 - c2 * y2 * r2 - m2 * i2 * d2 + s2 * y2 * d2 + c2 * i2 * g2 - s2 * u2 * g2) * M2, t2[2] = (a2 * y2 * r2 - m2 * o2 * r2 + m2 * i2 * h2 - s2 * y2 * h2 - a2 * i2 * g2 + s2 * o2 * g2) * M2, t2[3] = (c2 * o2 * r2 - a2 * u2 * r2 - c2 * i2 * h2 + s2 * u2 * h2 + a2 * i2 * d2 - s2 * o2 * d2) * M2, t2[4] = x2 * M2, t2[5] = (l2 * y2 * r2 - p2 * u2 * r2 + p2 * i2 * d2 - e2 * y2 * d2 - l2 * i2 * g2 + e2 * u2 * g2) * M2, t2[6] = (p2 * o2 * r2 - n2 * y2 * r2 - p2 * i2 * h2 + e2 * y2 * h2 + n2 * i2 * g2 - e2 * o2 * g2) * M2, t2[7] = (n2 * u2 * r2 - l2 * o2 * r2 + l2 * i2 * h2 - e2 * u2 * h2 - n2 * i2 * d2 + e2 * o2 * d2) * M2, t2[8] = b2 * M2, t2[9] = (p2 * c2 * r2 - l2 * m2 * r2 - p2 * s2 * d2 + e2 * m2 * d2 + l2 * s2 * g2 - e2 * c2 * g2) * M2, t2[10] = (n2 * m2 * r2 - p2 * a2 * r2 + p2 * s2 * h2 - e2 * m2 * h2 - n2 * s2 * g2 + e2 * a2 * g2) * M2, t2[11] = (l2 * a2 * r2 - n2 * c2 * r2 - l2 * s2 * h2 + e2 * c2 * h2 + n2 * s2 * d2 - e2 * a2 * d2) * M2, t2[12] = v2 * M2, t2[13] = (l2 * m2 * i2 - p2 * c2 * i2 + p2 * s2 * u2 - e2 * m2 * u2 - l2 * s2 * y2 + e2 * c2 * y2) * M2, t2[14] = (p2 * a2 * i2 - n2 * m2 * i2 - p2 * s2 * o2 + e2 * m2 * o2 + n2 * s2 * y2 - e2 * a2 * y2) * M2, t2[15] = (n2 * c2 * i2 - l2 * a2 * i2 + l2 * s2 * o2 - e2 * c2 * o2 - n2 * s2 * u2 + e2 * a2 * u2) * M2, this;
  }
  scale(t2) {
    const e2 = this.elements, s2 = t2.x, i2 = t2.y, r2 = t2.z;
    return e2[0] *= s2, e2[4] *= i2, e2[8] *= r2, e2[1] *= s2, e2[5] *= i2, e2[9] *= r2, e2[2] *= s2, e2[6] *= i2, e2[10] *= r2, e2[3] *= s2, e2[7] *= i2, e2[11] *= r2, this;
  }
  getMaxScaleOnAxis() {
    const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], s2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
    return Math.sqrt(Math.max(e2, s2, i2));
  }
  makeTranslation(t2, e2, s2) {
    return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, s2, 0, 0, 0, 1), this;
  }
  makeRotationX(t2) {
    const e2 = Math.cos(t2), s2 = Math.sin(t2);
    return this.set(1, 0, 0, 0, 0, e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t2) {
    const e2 = Math.cos(t2), s2 = Math.sin(t2);
    return this.set(e2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, e2, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t2) {
    const e2 = Math.cos(t2), s2 = Math.sin(t2);
    return this.set(e2, -s2, 0, 0, s2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t2, e2) {
    const s2 = Math.cos(e2), i2 = Math.sin(e2), r2 = 1 - s2, n2 = t2.x, a2 = t2.y, o2 = t2.z, h2 = r2 * n2, l2 = r2 * a2;
    return this.set(h2 * n2 + s2, h2 * a2 - i2 * o2, h2 * o2 + i2 * a2, 0, h2 * a2 + i2 * o2, l2 * a2 + s2, l2 * o2 - i2 * n2, 0, h2 * o2 - i2 * a2, l2 * o2 + i2 * n2, r2 * o2 * o2 + s2, 0, 0, 0, 0, 1), this;
  }
  makeScale(t2, e2, s2) {
    return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, s2, 0, 0, 0, 0, 1), this;
  }
  makeShear(t2, e2, s2, i2, r2, n2) {
    return this.set(1, s2, r2, 0, t2, 1, n2, 0, e2, i2, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t2, e2, s2) {
    const i2 = this.elements, r2 = e2._x, n2 = e2._y, a2 = e2._z, o2 = e2._w, h2 = r2 + r2, l2 = n2 + n2, c2 = a2 + a2, u2 = r2 * h2, d2 = r2 * l2, p2 = r2 * c2, m2 = n2 * l2, y2 = n2 * c2, g2 = a2 * c2, f2 = o2 * h2, x2 = o2 * l2, b2 = o2 * c2, v2 = s2.x, w2 = s2.y, M2 = s2.z;
    return i2[0] = (1 - (m2 + g2)) * v2, i2[1] = (d2 + b2) * v2, i2[2] = (p2 - x2) * v2, i2[3] = 0, i2[4] = (d2 - b2) * w2, i2[5] = (1 - (u2 + g2)) * w2, i2[6] = (y2 + f2) * w2, i2[7] = 0, i2[8] = (p2 + x2) * M2, i2[9] = (y2 - f2) * M2, i2[10] = (1 - (u2 + m2)) * M2, i2[11] = 0, i2[12] = t2.x, i2[13] = t2.y, i2[14] = t2.z, i2[15] = 1, this;
  }
  decompose(t2, e2, s2) {
    const i2 = this.elements;
    let r2 = or.set(i2[0], i2[1], i2[2]).length();
    const n2 = or.set(i2[4], i2[5], i2[6]).length(), a2 = or.set(i2[8], i2[9], i2[10]).length();
    this.determinant() < 0 && (r2 = -r2), t2.x = i2[12], t2.y = i2[13], t2.z = i2[14], hr.copy(this);
    const o2 = 1 / r2, h2 = 1 / n2, l2 = 1 / a2;
    return hr.elements[0] *= o2, hr.elements[1] *= o2, hr.elements[2] *= o2, hr.elements[4] *= h2, hr.elements[5] *= h2, hr.elements[6] *= h2, hr.elements[8] *= l2, hr.elements[9] *= l2, hr.elements[10] *= l2, e2.setFromRotationMatrix(hr), s2.x = r2, s2.y = n2, s2.z = a2, this;
  }
  makePerspective(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
    const h2 = this.elements, l2 = 2 * r2 / (e2 - t2), c2 = 2 * r2 / (s2 - i2), u2 = (e2 + t2) / (e2 - t2), d2 = (s2 + i2) / (s2 - i2);
    let p2, m2;
    if (o2) p2 = r2 / (n2 - r2), m2 = n2 * r2 / (n2 - r2);
    else if (a2 === Ps) p2 = -(n2 + r2) / (n2 - r2), m2 = -2 * n2 * r2 / (n2 - r2);
    else {
      if (a2 !== Os) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a2);
      p2 = -n2 / (n2 - r2), m2 = -n2 * r2 / (n2 - r2);
    }
    return h2[0] = l2, h2[4] = 0, h2[8] = u2, h2[12] = 0, h2[1] = 0, h2[5] = c2, h2[9] = d2, h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
  }
  makeOrthographic(t2, e2, s2, i2, r2, n2, a2 = 2e3, o2 = false) {
    const h2 = this.elements, l2 = 2 / (e2 - t2), c2 = 2 / (s2 - i2), u2 = -(e2 + t2) / (e2 - t2), d2 = -(s2 + i2) / (s2 - i2);
    let p2, m2;
    if (o2) p2 = 1 / (n2 - r2), m2 = n2 / (n2 - r2);
    else if (a2 === Ps) p2 = -2 / (n2 - r2), m2 = -(n2 + r2) / (n2 - r2);
    else {
      if (a2 !== Os) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a2);
      p2 = -1 / (n2 - r2), m2 = -r2 / (n2 - r2);
    }
    return h2[0] = l2, h2[4] = 0, h2[8] = 0, h2[12] = u2, h2[1] = 0, h2[5] = c2, h2[9] = 0, h2[13] = d2, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
  }
  equals(t2) {
    const e2 = this.elements, s2 = t2.elements;
    for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== s2[t3]) return false;
    return true;
  }
  fromArray(t2, e2 = 0) {
    for (let s2 = 0; s2 < 16; s2++) this.elements[s2] = t2[s2 + e2];
    return this;
  }
  toArray(t2 = [], e2 = 0) {
    const s2 = this.elements;
    return t2[e2] = s2[0], t2[e2 + 1] = s2[1], t2[e2 + 2] = s2[2], t2[e2 + 3] = s2[3], t2[e2 + 4] = s2[4], t2[e2 + 5] = s2[5], t2[e2 + 6] = s2[6], t2[e2 + 7] = s2[7], t2[e2 + 8] = s2[8], t2[e2 + 9] = s2[9], t2[e2 + 10] = s2[10], t2[e2 + 11] = s2[11], t2[e2 + 12] = s2[12], t2[e2 + 13] = s2[13], t2[e2 + 14] = s2[14], t2[e2 + 15] = s2[15], t2;
  }
};
var or = new Ks();
var hr = new ar();
var lr = new Ks(0, 0, 0);
var cr = new Ks(1, 1, 1);
var ur = new Ks();
var dr = new Ks();
var pr = new Ks();
var mr = new ar();
var yr = new Qs();
var gr = class _gr {
  constructor(t2 = 0, e2 = 0, s2 = 0, i2 = _gr.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t2, this._y = e2, this._z = s2, this._order = i2;
  }
  get x() {
    return this._x;
  }
  set x(t2) {
    this._x = t2, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t2) {
    this._y = t2, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t2) {
    this._z = t2, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t2) {
    this._order = t2, this._onChangeCallback();
  }
  set(t2, e2, s2, i2 = this._order) {
    return this._x = t2, this._y = e2, this._z = s2, this._order = i2, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t2) {
    return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t2, e2 = this._order, s2 = true) {
    const i2 = t2.elements, r2 = i2[0], n2 = i2[4], a2 = i2[8], o2 = i2[1], h2 = i2[5], l2 = i2[9], c2 = i2[2], u2 = i2[6], d2 = i2[10];
    switch (e2) {
      case "XYZ":
        this._y = Math.asin(qs(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-l2, d2), this._z = Math.atan2(-n2, r2)) : (this._x = Math.atan2(u2, h2), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-qs(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, h2)) : (this._y = Math.atan2(-c2, r2), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(qs(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-c2, d2), this._z = Math.atan2(-n2, h2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
        break;
      case "ZYX":
        this._y = Math.asin(-qs(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-n2, h2));
        break;
      case "YZX":
        this._z = Math.asin(qs(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, h2), this._y = Math.atan2(-c2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
        break;
      case "XZY":
        this._z = Math.asin(-qs(n2, -1, 1)), Math.abs(n2) < 0.9999999 ? (this._x = Math.atan2(u2, h2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-l2, d2), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
    }
    return this._order = e2, true === s2 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t2, e2, s2) {
    return mr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(mr, e2, s2);
  }
  setFromVector3(t2, e2 = this._order) {
    return this.set(t2.x, t2.y, t2.z, e2);
  }
  reorder(t2) {
    return yr.setFromEuler(this), this.setFromQuaternion(yr, t2);
  }
  equals(t2) {
    return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
  }
  fromArray(t2) {
    return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
  }
  _onChange(t2) {
    return this._onChangeCallback = t2, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
gr.DEFAULT_ORDER = "XYZ";
var fr = class {
  constructor() {
    this.mask = 1;
  }
  set(t2) {
    this.mask = 1 << t2 >>> 0;
  }
  enable(t2) {
    this.mask |= 1 << t2;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t2) {
    this.mask ^= 1 << t2;
  }
  disable(t2) {
    this.mask &= ~(1 << t2);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t2) {
    return 0 !== (this.mask & t2.mask);
  }
  isEnabled(t2) {
    return !!(this.mask & 1 << t2);
  }
};
var xr = 0;
var br = new Ks();
var vr = new Qs();
var wr = new ar();
var Mr = new Ks();
var Sr = new Ks();
var _r = new Ks();
var Ar = new Qs();
var Tr = new Ks(1, 0, 0);
var zr = new Ks(0, 1, 0);
var Cr = new Ks(0, 0, 1);
var Ir = { type: "added" };
var Br = { type: "removed" };
var kr = { type: "childadded", child: null };
var Er = { type: "childremoved", child: null };
var Rr = class _Rr extends Ls {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: xr++ }), this.uuid = Hs(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Rr.DEFAULT_UP.clone();
    const t2 = new Ks(), e2 = new gr(), s2 = new Qs(), i2 = new Ks(1, 1, 1);
    e2._onChange(function() {
      s2.setFromEuler(e2, false);
    }), s2._onChange(function() {
      e2.setFromQuaternion(s2, void 0, false);
    }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: s2 }, scale: { configurable: true, enumerable: true, value: i2 }, modelViewMatrix: { value: new ar() }, normalMatrix: { value: new si() } }), this.matrix = new ar(), this.matrixWorld = new ar(), this.matrixAutoUpdate = _Rr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new fr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t2) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t2) {
    return this.quaternion.premultiply(t2), this;
  }
  setRotationFromAxisAngle(t2, e2) {
    this.quaternion.setFromAxisAngle(t2, e2);
  }
  setRotationFromEuler(t2) {
    this.quaternion.setFromEuler(t2, true);
  }
  setRotationFromMatrix(t2) {
    this.quaternion.setFromRotationMatrix(t2);
  }
  setRotationFromQuaternion(t2) {
    this.quaternion.copy(t2);
  }
  rotateOnAxis(t2, e2) {
    return vr.setFromAxisAngle(t2, e2), this.quaternion.multiply(vr), this;
  }
  rotateOnWorldAxis(t2, e2) {
    return vr.setFromAxisAngle(t2, e2), this.quaternion.premultiply(vr), this;
  }
  rotateX(t2) {
    return this.rotateOnAxis(Tr, t2);
  }
  rotateY(t2) {
    return this.rotateOnAxis(zr, t2);
  }
  rotateZ(t2) {
    return this.rotateOnAxis(Cr, t2);
  }
  translateOnAxis(t2, e2) {
    return br.copy(t2).applyQuaternion(this.quaternion), this.position.add(br.multiplyScalar(e2)), this;
  }
  translateX(t2) {
    return this.translateOnAxis(Tr, t2);
  }
  translateY(t2) {
    return this.translateOnAxis(zr, t2);
  }
  translateZ(t2) {
    return this.translateOnAxis(Cr, t2);
  }
  localToWorld(t2) {
    return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t2) {
    return this.updateWorldMatrix(true, false), t2.applyMatrix4(wr.copy(this.matrixWorld).invert());
  }
  lookAt(t2, e2, s2) {
    t2.isVector3 ? Mr.copy(t2) : Mr.set(t2, e2, s2);
    const i2 = this.parent;
    this.updateWorldMatrix(true, false), Sr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? wr.lookAt(Sr, Mr, this.up) : wr.lookAt(Mr, Sr, this.up), this.quaternion.setFromRotationMatrix(wr), i2 && (wr.extractRotation(i2.matrixWorld), vr.setFromRotationMatrix(wr), this.quaternion.premultiply(vr.invert()));
  }
  add(t2) {
    if (arguments.length > 1) {
      for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
      return this;
    }
    return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Ir), kr.child = t2, this.dispatchEvent(kr), kr.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
  }
  remove(t2) {
    if (arguments.length > 1) {
      for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
      return this;
    }
    const e2 = this.children.indexOf(t2);
    return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Br), Er.child = t2, this.dispatchEvent(Er), Er.child = null), this;
  }
  removeFromParent() {
    const t2 = this.parent;
    return null !== t2 && t2.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t2) {
    return this.updateWorldMatrix(true, false), wr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), wr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(wr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(Ir), kr.child = t2, this.dispatchEvent(kr), kr.child = null, this;
  }
  getObjectById(t2) {
    return this.getObjectByProperty("id", t2);
  }
  getObjectByName(t2) {
    return this.getObjectByProperty("name", t2);
  }
  getObjectByProperty(t2, e2) {
    if (this[t2] === e2) return this;
    for (let s2 = 0, i2 = this.children.length; s2 < i2; s2++) {
      const i3 = this.children[s2].getObjectByProperty(t2, e2);
      if (void 0 !== i3) return i3;
    }
  }
  getObjectsByProperty(t2, e2, s2 = []) {
    this[t2] === e2 && s2.push(this);
    const i2 = this.children;
    for (let r2 = 0, n2 = i2.length; r2 < n2; r2++) i2[r2].getObjectsByProperty(t2, e2, s2);
    return s2;
  }
  getWorldPosition(t2) {
    return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t2) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, t2, _r), t2;
  }
  getWorldScale(t2) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, Ar, t2), t2;
  }
  getWorldDirection(t2) {
    this.updateWorldMatrix(true, false);
    const e2 = this.matrixWorld.elements;
    return t2.set(e2[8], e2[9], e2[10]).normalize();
  }
  raycast() {
  }
  traverse(t2) {
    t2(this);
    const e2 = this.children;
    for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverse(t2);
  }
  traverseVisible(t2) {
    if (false === this.visible) return;
    t2(this);
    const e2 = this.children;
    for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) e2[s2].traverseVisible(t2);
  }
  traverseAncestors(t2) {
    const e2 = this.parent;
    null !== e2 && (t2(e2), e2.traverseAncestors(t2));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t2) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
    const e2 = this.children;
    for (let s2 = 0, i2 = e2.length; s2 < i2; s2++) {
      e2[s2].updateMatrixWorld(t2);
    }
  }
  updateWorldMatrix(t2, e2) {
    const s2 = this.parent;
    if (true === t2 && null !== s2 && s2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e2) {
      const t3 = this.children;
      for (let e3 = 0, s3 = t3.length; e3 < s3; e3++) {
        t3[e3].updateWorldMatrix(false, true);
      }
    }
  }
  toJSON(t2) {
    const e2 = void 0 === t2 || "string" == typeof t2, s2 = {};
    e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, s2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const i2 = {};
    function r2(e3, s3) {
      return void 0 === e3[s3.uuid] && (e3[s3.uuid] = s3.toJSON(t2)), s3.uuid;
    }
    if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), true === this.castShadow && (i2.castShadow = true), true === this.receiveShadow && (i2.receiveShadow = true), false === this.visible && (i2.visible = false), false === this.frustumCulled && (i2.frustumCulled = false), 0 !== this.renderOrder && (i2.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), i2.layers = this.layers.mask, i2.matrix = this.matrix.toArray(), i2.up = this.up.toArray(), false === this.matrixAutoUpdate && (i2.matrixAutoUpdate = false), this.isInstancedMesh && (i2.type = "InstancedMesh", i2.count = this.count, i2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i2.type = "BatchedMesh", i2.perObjectFrustumCulled = this.perObjectFrustumCulled, i2.sortObjects = this.sortObjects, i2.drawRanges = this._drawRanges, i2.reservedRanges = this._reservedRanges, i2.geometryInfo = this._geometryInfo.map((t3) => ({ ...t3, boundingBox: t3.boundingBox ? t3.boundingBox.toJSON() : void 0, boundingSphere: t3.boundingSphere ? t3.boundingSphere.toJSON() : void 0 })), i2.instanceInfo = this._instanceInfo.map((t3) => ({ ...t3 })), i2.availableInstanceIds = this._availableInstanceIds.slice(), i2.availableGeometryIds = this._availableGeometryIds.slice(), i2.nextIndexStart = this._nextIndexStart, i2.nextVertexStart = this._nextVertexStart, i2.geometryCount = this._geometryCount, i2.maxInstanceCount = this._maxInstanceCount, i2.maxVertexCount = this._maxVertexCount, i2.maxIndexCount = this._maxIndexCount, i2.geometryInitialized = this._geometryInitialized, i2.matricesTexture = this._matricesTexture.toJSON(t2), i2.indirectTexture = this._indirectTexture.toJSON(t2), null !== this._colorsTexture && (i2.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (i2.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (i2.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? i2.background = this.background.toJSON() : this.background.isTexture && (i2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i2.environment = this.environment.toJSON(t2).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i2.geometry = r2(t2.geometries, this.geometry);
      const e3 = this.geometry.parameters;
      if (void 0 !== e3 && void 0 !== e3.shapes) {
        const s3 = e3.shapes;
        if (Array.isArray(s3)) for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
          const i4 = s3[e4];
          r2(t2.shapes, i4);
        }
        else r2(t2.shapes, s3);
      }
    }
    if (this.isSkinnedMesh && (i2.bindMode = this.bindMode, i2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), i2.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
      const e3 = [];
      for (let s3 = 0, i3 = this.material.length; s3 < i3; s3++) e3.push(r2(t2.materials, this.material[s3]));
      i2.material = e3;
    } else i2.material = r2(t2.materials, this.material);
    if (this.children.length > 0) {
      i2.children = [];
      for (let e3 = 0; e3 < this.children.length; e3++) i2.children.push(this.children[e3].toJSON(t2).object);
    }
    if (this.animations.length > 0) {
      i2.animations = [];
      for (let e3 = 0; e3 < this.animations.length; e3++) {
        const s3 = this.animations[e3];
        i2.animations.push(r2(t2.animations, s3));
      }
    }
    if (e2) {
      const e3 = n2(t2.geometries), i3 = n2(t2.materials), r3 = n2(t2.textures), a2 = n2(t2.images), o2 = n2(t2.shapes), h2 = n2(t2.skeletons), l2 = n2(t2.animations), c2 = n2(t2.nodes);
      e3.length > 0 && (s2.geometries = e3), i3.length > 0 && (s2.materials = i3), r3.length > 0 && (s2.textures = r3), a2.length > 0 && (s2.images = a2), o2.length > 0 && (s2.shapes = o2), h2.length > 0 && (s2.skeletons = h2), l2.length > 0 && (s2.animations = l2), c2.length > 0 && (s2.nodes = c2);
    }
    return s2.object = i2, s2;
    function n2(t3) {
      const e3 = [];
      for (const s3 in t3) {
        const i3 = t3[s3];
        delete i3.metadata, e3.push(i3);
      }
      return e3;
    }
  }
  clone(t2) {
    return new this.constructor().copy(this, t2);
  }
  copy(t2, e2 = true) {
    if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
      const s2 = t2.children[e3];
      this.add(s2.clone());
    }
    return this;
  }
};
Rr.DEFAULT_UP = new Ks(0, 1, 0), Rr.DEFAULT_MATRIX_AUTO_UPDATE = true, Rr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var Pr = new Ks();
var Or = new Ks();
var Nr = new Ks();
var Vr = new Ks();
var Fr = new Ks();
var Lr = new Ks();
var jr = new Ks();
var Dr = new Ks();
var Wr = new Ks();
var Ur = new Ks();
var Hr = new Ti();
var qr = new Ti();
var Jr = new Ti();
var Xr = class _Xr {
  constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks()) {
    this.a = t2, this.b = e2, this.c = s2;
  }
  static getNormal(t2, e2, s2, i2) {
    i2.subVectors(s2, e2), Pr.subVectors(t2, e2), i2.cross(Pr);
    const r2 = i2.lengthSq();
    return r2 > 0 ? i2.multiplyScalar(1 / Math.sqrt(r2)) : i2.set(0, 0, 0);
  }
  static getBarycoord(t2, e2, s2, i2, r2) {
    Pr.subVectors(i2, e2), Or.subVectors(s2, e2), Nr.subVectors(t2, e2);
    const n2 = Pr.dot(Pr), a2 = Pr.dot(Or), o2 = Pr.dot(Nr), h2 = Or.dot(Or), l2 = Or.dot(Nr), c2 = n2 * h2 - a2 * a2;
    if (0 === c2) return r2.set(0, 0, 0), null;
    const u2 = 1 / c2, d2 = (h2 * o2 - a2 * l2) * u2, p2 = (n2 * l2 - a2 * o2) * u2;
    return r2.set(1 - d2 - p2, p2, d2);
  }
  static containsPoint(t2, e2, s2, i2) {
    return null !== this.getBarycoord(t2, e2, s2, i2, Vr) && (Vr.x >= 0 && Vr.y >= 0 && Vr.x + Vr.y <= 1);
  }
  static getInterpolation(t2, e2, s2, i2, r2, n2, a2, o2) {
    return null === this.getBarycoord(t2, e2, s2, i2, Vr) ? (o2.x = 0, o2.y = 0, "z" in o2 && (o2.z = 0), "w" in o2 && (o2.w = 0), null) : (o2.setScalar(0), o2.addScaledVector(r2, Vr.x), o2.addScaledVector(n2, Vr.y), o2.addScaledVector(a2, Vr.z), o2);
  }
  static getInterpolatedAttribute(t2, e2, s2, i2, r2, n2) {
    return Hr.setScalar(0), qr.setScalar(0), Jr.setScalar(0), Hr.fromBufferAttribute(t2, e2), qr.fromBufferAttribute(t2, s2), Jr.fromBufferAttribute(t2, i2), n2.setScalar(0), n2.addScaledVector(Hr, r2.x), n2.addScaledVector(qr, r2.y), n2.addScaledVector(Jr, r2.z), n2;
  }
  static isFrontFacing(t2, e2, s2, i2) {
    return Pr.subVectors(s2, e2), Or.subVectors(t2, e2), Pr.cross(Or).dot(i2) < 0;
  }
  set(t2, e2, s2) {
    return this.a.copy(t2), this.b.copy(e2), this.c.copy(s2), this;
  }
  setFromPointsAndIndices(t2, e2, s2, i2) {
    return this.a.copy(t2[e2]), this.b.copy(t2[s2]), this.c.copy(t2[i2]), this;
  }
  setFromAttributeAndIndices(t2, e2, s2, i2) {
    return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, s2), this.c.fromBufferAttribute(t2, i2), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
  }
  getArea() {
    return Pr.subVectors(this.c, this.b), Or.subVectors(this.a, this.b), 0.5 * Pr.cross(Or).length();
  }
  getMidpoint(t2) {
    return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t2) {
    return _Xr.getNormal(this.a, this.b, this.c, t2);
  }
  getPlane(t2) {
    return t2.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t2, e2) {
    return _Xr.getBarycoord(t2, this.a, this.b, this.c, e2);
  }
  getInterpolation(t2, e2, s2, i2, r2) {
    return _Xr.getInterpolation(t2, this.a, this.b, this.c, e2, s2, i2, r2);
  }
  containsPoint(t2) {
    return _Xr.containsPoint(t2, this.a, this.b, this.c);
  }
  isFrontFacing(t2) {
    return _Xr.isFrontFacing(this.a, this.b, this.c, t2);
  }
  intersectsBox(t2) {
    return t2.intersectsTriangle(this);
  }
  closestPointToPoint(t2, e2) {
    const s2 = this.a, i2 = this.b, r2 = this.c;
    let n2, a2;
    Fr.subVectors(i2, s2), Lr.subVectors(r2, s2), Dr.subVectors(t2, s2);
    const o2 = Fr.dot(Dr), h2 = Lr.dot(Dr);
    if (o2 <= 0 && h2 <= 0) return e2.copy(s2);
    Wr.subVectors(t2, i2);
    const l2 = Fr.dot(Wr), c2 = Lr.dot(Wr);
    if (l2 >= 0 && c2 <= l2) return e2.copy(i2);
    const u2 = o2 * c2 - l2 * h2;
    if (u2 <= 0 && o2 >= 0 && l2 <= 0) return n2 = o2 / (o2 - l2), e2.copy(s2).addScaledVector(Fr, n2);
    Ur.subVectors(t2, r2);
    const d2 = Fr.dot(Ur), p2 = Lr.dot(Ur);
    if (p2 >= 0 && d2 <= p2) return e2.copy(r2);
    const m2 = d2 * h2 - o2 * p2;
    if (m2 <= 0 && h2 >= 0 && p2 <= 0) return a2 = h2 / (h2 - p2), e2.copy(s2).addScaledVector(Lr, a2);
    const y2 = l2 * p2 - d2 * c2;
    if (y2 <= 0 && c2 - l2 >= 0 && d2 - p2 >= 0) return jr.subVectors(r2, i2), a2 = (c2 - l2) / (c2 - l2 + (d2 - p2)), e2.copy(i2).addScaledVector(jr, a2);
    const g2 = 1 / (y2 + m2 + u2);
    return n2 = m2 * g2, a2 = u2 * g2, e2.copy(s2).addScaledVector(Fr, n2).addScaledVector(Lr, a2);
  }
  equals(t2) {
    return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
  }
};
var Yr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
var Zr = { h: 0, s: 0, l: 0 };
var Gr = { h: 0, s: 0, l: 0 };
function $r(t2, e2, s2) {
  return s2 < 0 && (s2 += 1), s2 > 1 && (s2 -= 1), s2 < 1 / 6 ? t2 + 6 * (e2 - t2) * s2 : s2 < 0.5 ? e2 : s2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - s2) : t2;
}
var Qr = class {
  constructor(t2, e2, s2) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, s2);
  }
  set(t2, e2, s2) {
    if (void 0 === e2 && void 0 === s2) {
      const e3 = t2;
      e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
    } else this.setRGB(t2, e2, s2);
    return this;
  }
  setScalar(t2) {
    return this.r = t2, this.g = t2, this.b = t2, this;
  }
  setHex(t2, e2 = Ze) {
    return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, yi.colorSpaceToWorking(this, e2), this;
  }
  setRGB(t2, e2, s2, i2 = yi.workingColorSpace) {
    return this.r = t2, this.g = e2, this.b = s2, yi.colorSpaceToWorking(this, i2), this;
  }
  setHSL(t2, e2, s2, i2 = yi.workingColorSpace) {
    if (t2 = Js(t2, 1), e2 = qs(e2, 0, 1), s2 = qs(s2, 0, 1), 0 === e2) this.r = this.g = this.b = s2;
    else {
      const i3 = s2 <= 0.5 ? s2 * (1 + e2) : s2 + e2 - s2 * e2, r2 = 2 * s2 - i3;
      this.r = $r(r2, i3, t2 + 1 / 3), this.g = $r(r2, i3, t2), this.b = $r(r2, i3, t2 - 1 / 3);
    }
    return yi.colorSpaceToWorking(this, i2), this;
  }
  setStyle(t2, e2 = Ze) {
    function s2(e3) {
      void 0 !== e3 && parseFloat(e3) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
    }
    let i2;
    if (i2 = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
      let r2;
      const n2 = i2[1], a2 = i2[2];
      switch (n2) {
        case "rgb":
        case "rgba":
          if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e2);
          if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e2);
          break;
        case "hsl":
        case "hsla":
          if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return s2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e2);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t2);
      }
    } else if (i2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
      const s3 = i2[1], r2 = s3.length;
      if (3 === r2) return this.setRGB(parseInt(s3.charAt(0), 16) / 15, parseInt(s3.charAt(1), 16) / 15, parseInt(s3.charAt(2), 16) / 15, e2);
      if (6 === r2) return this.setHex(parseInt(s3, 16), e2);
      console.warn("THREE.Color: Invalid hex color " + t2);
    } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
    return this;
  }
  setColorName(t2, e2 = Ze) {
    const s2 = Yr[t2.toLowerCase()];
    return void 0 !== s2 ? this.setHex(s2, e2) : console.warn("THREE.Color: Unknown color " + t2), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t2) {
    return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
  }
  copySRGBToLinear(t2) {
    return this.r = gi(t2.r), this.g = gi(t2.g), this.b = gi(t2.b), this;
  }
  copyLinearToSRGB(t2) {
    return this.r = fi(t2.r), this.g = fi(t2.g), this.b = fi(t2.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t2 = Ze) {
    return yi.workingToColorSpace(Kr.copy(this), t2), 65536 * Math.round(qs(255 * Kr.r, 0, 255)) + 256 * Math.round(qs(255 * Kr.g, 0, 255)) + Math.round(qs(255 * Kr.b, 0, 255));
  }
  getHexString(t2 = Ze) {
    return ("000000" + this.getHex(t2).toString(16)).slice(-6);
  }
  getHSL(t2, e2 = yi.workingColorSpace) {
    yi.workingToColorSpace(Kr.copy(this), e2);
    const s2 = Kr.r, i2 = Kr.g, r2 = Kr.b, n2 = Math.max(s2, i2, r2), a2 = Math.min(s2, i2, r2);
    let o2, h2;
    const l2 = (a2 + n2) / 2;
    if (a2 === n2) o2 = 0, h2 = 0;
    else {
      const t3 = n2 - a2;
      switch (h2 = l2 <= 0.5 ? t3 / (n2 + a2) : t3 / (2 - n2 - a2), n2) {
        case s2:
          o2 = (i2 - r2) / t3 + (i2 < r2 ? 6 : 0);
          break;
        case i2:
          o2 = (r2 - s2) / t3 + 2;
          break;
        case r2:
          o2 = (s2 - i2) / t3 + 4;
      }
      o2 /= 6;
    }
    return t2.h = o2, t2.s = h2, t2.l = l2, t2;
  }
  getRGB(t2, e2 = yi.workingColorSpace) {
    return yi.workingToColorSpace(Kr.copy(this), e2), t2.r = Kr.r, t2.g = Kr.g, t2.b = Kr.b, t2;
  }
  getStyle(t2 = Ze) {
    yi.workingToColorSpace(Kr.copy(this), t2);
    const e2 = Kr.r, s2 = Kr.g, i2 = Kr.b;
    return t2 !== Ze ? `color(${t2} ${e2.toFixed(3)} ${s2.toFixed(3)} ${i2.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * s2)},${Math.round(255 * i2)})`;
  }
  offsetHSL(t2, e2, s2) {
    return this.getHSL(Zr), this.setHSL(Zr.h + t2, Zr.s + e2, Zr.l + s2);
  }
  add(t2) {
    return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
  }
  addColors(t2, e2) {
    return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
  }
  addScalar(t2) {
    return this.r += t2, this.g += t2, this.b += t2, this;
  }
  sub(t2) {
    return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
  }
  multiply(t2) {
    return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
  }
  multiplyScalar(t2) {
    return this.r *= t2, this.g *= t2, this.b *= t2, this;
  }
  lerp(t2, e2) {
    return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
  }
  lerpColors(t2, e2, s2) {
    return this.r = t2.r + (e2.r - t2.r) * s2, this.g = t2.g + (e2.g - t2.g) * s2, this.b = t2.b + (e2.b - t2.b) * s2, this;
  }
  lerpHSL(t2, e2) {
    this.getHSL(Zr), t2.getHSL(Gr);
    const s2 = Xs(Zr.h, Gr.h, e2), i2 = Xs(Zr.s, Gr.s, e2), r2 = Xs(Zr.l, Gr.l, e2);
    return this.setHSL(s2, i2, r2), this;
  }
  setFromVector3(t2) {
    return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
  }
  applyMatrix3(t2) {
    const e2 = this.r, s2 = this.g, i2 = this.b, r2 = t2.elements;
    return this.r = r2[0] * e2 + r2[3] * s2 + r2[6] * i2, this.g = r2[1] * e2 + r2[4] * s2 + r2[7] * i2, this.b = r2[2] * e2 + r2[5] * s2 + r2[8] * i2, this;
  }
  equals(t2) {
    return t2.r === this.r && t2.g === this.g && t2.b === this.b;
  }
  fromArray(t2, e2 = 0) {
    return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
  }
  toArray(t2 = [], e2 = 0) {
    return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
  }
  fromBufferAttribute(t2, e2) {
    return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
var Kr = new Qr();
Qr.NAMES = Yr;
var tn = 0;
var en = class extends Ls {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: tn++ }), this.uuid = Hs(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Qr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ts, this.stencilZFail = ts, this.stencilZPass = ts, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t2) {
    this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t2) {
    if (void 0 !== t2) for (const e2 in t2) {
      const s2 = t2[e2];
      if (void 0 === s2) {
        console.warn(`THREE.Material: parameter '${e2}' has value of undefined.`);
        continue;
      }
      const i2 = this[e2];
      void 0 !== i2 ? i2 && i2.isColor ? i2.set(s2) : i2 && i2.isVector3 && s2 && s2.isVector3 ? i2.copy(s2) : this[e2] = s2 : console.warn(`THREE.Material: '${e2}' is not a property of THREE.${this.type}.`);
    }
  }
  toJSON(t2) {
    const e2 = void 0 === t2 || "string" == typeof t2;
    e2 && (t2 = { textures: {}, images: {} });
    const s2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    function i2(t3) {
      const e3 = [];
      for (const s3 in t3) {
        const i3 = t3[s3];
        delete i3.metadata, e3.push(i3);
      }
      return e3;
    }
    if (s2.uuid = this.uuid, s2.type = this.type, "" !== this.name && (s2.name = this.name), this.color && this.color.isColor && (s2.color = this.color.getHex()), void 0 !== this.roughness && (s2.roughness = this.roughness), void 0 !== this.metalness && (s2.metalness = this.metalness), void 0 !== this.sheen && (s2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (s2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (s2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (s2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (s2.shininess = this.shininess), void 0 !== this.clearcoat && (s2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (s2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, s2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (s2.sheenColorMap = this.sheenColorMap.toJSON(t2).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (s2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t2).uuid), void 0 !== this.dispersion && (s2.dispersion = this.dispersion), void 0 !== this.iridescence && (s2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (s2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (s2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (s2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (s2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (s2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (s2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (s2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (s2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (s2.lightMap = this.lightMap.toJSON(t2).uuid, s2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s2.aoMap = this.aoMap.toJSON(t2).uuid, s2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s2.bumpMap = this.bumpMap.toJSON(t2).uuid, s2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s2.normalMap = this.normalMap.toJSON(t2).uuid, s2.normalMapType = this.normalMapType, s2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s2.displacementMap = this.displacementMap.toJSON(t2).uuid, s2.displacementScale = this.displacementScale, s2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (s2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (s2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (s2.combine = this.combine)), void 0 !== this.envMapRotation && (s2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (s2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (s2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (s2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (s2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (s2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (s2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (s2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (s2.size = this.size), null !== this.shadowSide && (s2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (s2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (s2.blending = this.blending), 0 !== this.side && (s2.side = this.side), true === this.vertexColors && (s2.vertexColors = true), this.opacity < 1 && (s2.opacity = this.opacity), true === this.transparent && (s2.transparent = true), 204 !== this.blendSrc && (s2.blendSrc = this.blendSrc), 205 !== this.blendDst && (s2.blendDst = this.blendDst), 100 !== this.blendEquation && (s2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (s2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (s2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (s2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (s2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (s2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (s2.depthFunc = this.depthFunc), false === this.depthTest && (s2.depthTest = this.depthTest), false === this.depthWrite && (s2.depthWrite = this.depthWrite), false === this.colorWrite && (s2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (s2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (s2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (s2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (s2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ts && (s2.stencilFail = this.stencilFail), this.stencilZFail !== ts && (s2.stencilZFail = this.stencilZFail), this.stencilZPass !== ts && (s2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (s2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (s2.rotation = this.rotation), true === this.polygonOffset && (s2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (s2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (s2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (s2.linewidth = this.linewidth), void 0 !== this.dashSize && (s2.dashSize = this.dashSize), void 0 !== this.gapSize && (s2.gapSize = this.gapSize), void 0 !== this.scale && (s2.scale = this.scale), true === this.dithering && (s2.dithering = true), this.alphaTest > 0 && (s2.alphaTest = this.alphaTest), true === this.alphaHash && (s2.alphaHash = true), true === this.alphaToCoverage && (s2.alphaToCoverage = true), true === this.premultipliedAlpha && (s2.premultipliedAlpha = true), true === this.forceSinglePass && (s2.forceSinglePass = true), true === this.wireframe && (s2.wireframe = true), this.wireframeLinewidth > 1 && (s2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (s2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (s2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (s2.flatShading = true), false === this.visible && (s2.visible = false), false === this.toneMapped && (s2.toneMapped = false), false === this.fog && (s2.fog = false), Object.keys(this.userData).length > 0 && (s2.userData = this.userData), e2) {
      const e3 = i2(t2.textures), r2 = i2(t2.images);
      e3.length > 0 && (s2.textures = e3), r2.length > 0 && (s2.images = r2);
    }
    return s2;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
    const e2 = t2.clippingPlanes;
    let s2 = null;
    if (null !== e2) {
      const t3 = e2.length;
      s2 = new Array(t3);
      for (let i2 = 0; i2 !== t3; ++i2) s2[i2] = e2[i2].clone();
    }
    return this.clippingPlanes = s2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t2) {
    true === t2 && this.version++;
  }
};
var sn = class extends en {
  constructor(t2) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Qr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new gr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
  }
};
var rn = nn();
function nn() {
  const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), s2 = new Uint32Array(t2), i2 = new Uint32Array(512), r2 = new Uint32Array(512);
  for (let t3 = 0; t3 < 256; ++t3) {
    const e3 = t3 - 127;
    e3 < -27 ? (i2[t3] = 0, i2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (i2[t3] = 1024 >> -e3 - 14, i2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (i2[t3] = e3 + 15 << 10, i2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (i2[t3] = 31744, i2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
  }
  const n2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
  for (let t3 = 1; t3 < 1024; ++t3) {
    let e3 = t3 << 13, s3 = 0;
    for (; !(8388608 & e3); ) e3 <<= 1, s3 -= 8388608;
    e3 &= -8388609, s3 += 947912704, n2[t3] = e3 | s3;
  }
  for (let t3 = 1024; t3 < 2048; ++t3) n2[t3] = 939524096 + (t3 - 1024 << 13);
  for (let t3 = 1; t3 < 31; ++t3) a2[t3] = t3 << 23;
  a2[31] = 1199570944, a2[32] = 2147483648;
  for (let t3 = 33; t3 < 63; ++t3) a2[t3] = 2147483648 + (t3 - 32 << 23);
  a2[63] = 3347054592;
  for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o2[t3] = 1024);
  return { floatView: e2, uint32View: s2, baseTable: i2, shiftTable: r2, mantissaTable: n2, exponentTable: a2, offsetTable: o2 };
}
var ln = new Ks();
var cn = new $s();
var un = 0;
var dn = class {
  constructor(t2, e2, s2 = false) {
    if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: un++ }), this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = s2, this.usage = Ss, this.updateRanges = [], this.gpuType = Et, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t2) {
    true === t2 && this.version++;
  }
  setUsage(t2) {
    return this.usage = t2, this;
  }
  addUpdateRange(t2, e2) {
    this.updateRanges.push({ start: t2, count: e2 });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t2) {
    return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
  }
  copyAt(t2, e2, s2) {
    t2 *= this.itemSize, s2 *= e2.itemSize;
    for (let i2 = 0, r2 = this.itemSize; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
    return this;
  }
  copyArray(t2) {
    return this.array.set(t2), this;
  }
  applyMatrix3(t2) {
    if (2 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) cn.fromBufferAttribute(this, e2), cn.applyMatrix3(t2), this.setXY(e2, cn.x, cn.y);
    else if (3 === this.itemSize) for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyMatrix3(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
    return this;
  }
  applyMatrix4(t2) {
    for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyMatrix4(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
    return this;
  }
  applyNormalMatrix(t2) {
    for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.applyNormalMatrix(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
    return this;
  }
  transformDirection(t2) {
    for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ln.fromBufferAttribute(this, e2), ln.transformDirection(t2), this.setXYZ(e2, ln.x, ln.y, ln.z);
    return this;
  }
  set(t2, e2 = 0) {
    return this.array.set(t2, e2), this;
  }
  getComponent(t2, e2) {
    let s2 = this.array[t2 * this.itemSize + e2];
    return this.normalized && (s2 = Ys(s2, this.array)), s2;
  }
  setComponent(t2, e2, s2) {
    return this.normalized && (s2 = Zs(s2, this.array)), this.array[t2 * this.itemSize + e2] = s2, this;
  }
  getX(t2) {
    let e2 = this.array[t2 * this.itemSize];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  setX(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
  }
  getY(t2) {
    let e2 = this.array[t2 * this.itemSize + 1];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  setY(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
  }
  getZ(t2) {
    let e2 = this.array[t2 * this.itemSize + 2];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  setZ(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
  }
  getW(t2) {
    let e2 = this.array[t2 * this.itemSize + 3];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  setW(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
  }
  setXY(t2, e2, s2) {
    return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this;
  }
  setXYZ(t2, e2, s2, i2) {
    return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this;
  }
  setXYZW(t2, e2, s2, i2, r2) {
    return t2 *= this.itemSize, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array), r2 = Zs(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = s2, this.array[t2 + 2] = i2, this.array[t2 + 3] = r2, this;
  }
  onUpload(t2) {
    return this.onUploadCallback = t2, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return "" !== this.name && (t2.name = this.name), this.usage !== Ss && (t2.usage = this.usage), t2;
  }
};
var fn = class extends dn {
  constructor(t2, e2, s2) {
    super(new Uint16Array(t2), e2, s2);
  }
};
var bn = class extends dn {
  constructor(t2, e2, s2) {
    super(new Uint32Array(t2), e2, s2);
  }
};
var wn = class extends dn {
  constructor(t2, e2, s2) {
    super(new Float32Array(t2), e2, s2);
  }
};
var Mn = 0;
var Sn = new ar();
var _n = new Rr();
var An = new Ks();
var Tn = new Ri();
var zn = new Ri();
var Cn = new Ks();
var In = class _In extends Ls {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Mn++ }), this.uuid = Hs(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t2) {
    return Array.isArray(t2) ? this.index = new (ri(t2) ? bn : fn)(t2, 1) : this.index = t2, this;
  }
  setIndirect(t2) {
    return this.indirect = t2, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t2) {
    return this.attributes[t2];
  }
  setAttribute(t2, e2) {
    return this.attributes[t2] = e2, this;
  }
  deleteAttribute(t2) {
    return delete this.attributes[t2], this;
  }
  hasAttribute(t2) {
    return void 0 !== this.attributes[t2];
  }
  addGroup(t2, e2, s2 = 0) {
    this.groups.push({ start: t2, count: e2, materialIndex: s2 });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t2, e2) {
    this.drawRange.start = t2, this.drawRange.count = e2;
  }
  applyMatrix4(t2) {
    const e2 = this.attributes.position;
    void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
    const s2 = this.attributes.normal;
    if (void 0 !== s2) {
      const e3 = new si().getNormalMatrix(t2);
      s2.applyNormalMatrix(e3), s2.needsUpdate = true;
    }
    const i2 = this.attributes.tangent;
    return void 0 !== i2 && (i2.transformDirection(t2), i2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t2) {
    return Sn.makeRotationFromQuaternion(t2), this.applyMatrix4(Sn), this;
  }
  rotateX(t2) {
    return Sn.makeRotationX(t2), this.applyMatrix4(Sn), this;
  }
  rotateY(t2) {
    return Sn.makeRotationY(t2), this.applyMatrix4(Sn), this;
  }
  rotateZ(t2) {
    return Sn.makeRotationZ(t2), this.applyMatrix4(Sn), this;
  }
  translate(t2, e2, s2) {
    return Sn.makeTranslation(t2, e2, s2), this.applyMatrix4(Sn), this;
  }
  scale(t2, e2, s2) {
    return Sn.makeScale(t2, e2, s2), this.applyMatrix4(Sn), this;
  }
  lookAt(t2) {
    return _n.lookAt(t2), _n.updateMatrix(), this.applyMatrix4(_n.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(An).negate(), this.translate(An.x, An.y, An.z), this;
  }
  setFromPoints(t2) {
    const e2 = this.getAttribute("position");
    if (void 0 === e2) {
      const e3 = [];
      for (let s2 = 0, i2 = t2.length; s2 < i2; s2++) {
        const i3 = t2[s2];
        e3.push(i3.x, i3.y, i3.z || 0);
      }
      this.setAttribute("position", new wn(e3, 3));
    } else {
      const s2 = Math.min(t2.length, e2.count);
      for (let i2 = 0; i2 < s2; i2++) {
        const s3 = t2[i2];
        e2.setXYZ(i2, s3.x, s3.y, s3.z || 0);
      }
      t2.length > e2.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e2.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Ri());
    const t2 = this.attributes.position, e2 = this.morphAttributes.position;
    if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Ks(-1 / 0, -1 / 0, -1 / 0), new Ks(1 / 0, 1 / 0, 1 / 0));
    if (void 0 !== t2) {
      if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, s2 = e2.length; t3 < s2; t3++) {
        const s3 = e2[t3];
        Tn.setFromBufferAttribute(s3), this.morphTargetsRelative ? (Cn.addVectors(this.boundingBox.min, Tn.min), this.boundingBox.expandByPoint(Cn), Cn.addVectors(this.boundingBox.max, Tn.max), this.boundingBox.expandByPoint(Cn)) : (this.boundingBox.expandByPoint(Tn.min), this.boundingBox.expandByPoint(Tn.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new $i());
    const t2 = this.attributes.position, e2 = this.morphAttributes.position;
    if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Ks(), 1 / 0);
    if (t2) {
      const s2 = this.boundingSphere.center;
      if (Tn.setFromBufferAttribute(t2), e2) for (let t3 = 0, s3 = e2.length; t3 < s3; t3++) {
        const s4 = e2[t3];
        zn.setFromBufferAttribute(s4), this.morphTargetsRelative ? (Cn.addVectors(Tn.min, zn.min), Tn.expandByPoint(Cn), Cn.addVectors(Tn.max, zn.max), Tn.expandByPoint(Cn)) : (Tn.expandByPoint(zn.min), Tn.expandByPoint(zn.max));
      }
      Tn.getCenter(s2);
      let i2 = 0;
      for (let e3 = 0, r2 = t2.count; e3 < r2; e3++) Cn.fromBufferAttribute(t2, e3), i2 = Math.max(i2, s2.distanceToSquared(Cn));
      if (e2) for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) {
        const n3 = e2[r2], a2 = this.morphTargetsRelative;
        for (let e3 = 0, r3 = n3.count; e3 < r3; e3++) Cn.fromBufferAttribute(n3, e3), a2 && (An.fromBufferAttribute(t2, e3), Cn.add(An)), i2 = Math.max(i2, s2.distanceToSquared(Cn));
      }
      this.boundingSphere.radius = Math.sqrt(i2), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t2 = this.index, e2 = this.attributes;
    if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
    const s2 = e2.position, i2 = e2.normal, r2 = e2.uv;
    false === this.hasAttribute("tangent") && this.setAttribute("tangent", new dn(new Float32Array(4 * s2.count), 4));
    const n2 = this.getAttribute("tangent"), a2 = [], o2 = [];
    for (let t3 = 0; t3 < s2.count; t3++) a2[t3] = new Ks(), o2[t3] = new Ks();
    const h2 = new Ks(), l2 = new Ks(), c2 = new Ks(), u2 = new $s(), d2 = new $s(), p2 = new $s(), m2 = new Ks(), y2 = new Ks();
    function g2(t3, e3, i3) {
      h2.fromBufferAttribute(s2, t3), l2.fromBufferAttribute(s2, e3), c2.fromBufferAttribute(s2, i3), u2.fromBufferAttribute(r2, t3), d2.fromBufferAttribute(r2, e3), p2.fromBufferAttribute(r2, i3), l2.sub(h2), c2.sub(h2), d2.sub(u2), p2.sub(u2);
      const n3 = 1 / (d2.x * p2.y - p2.x * d2.y);
      isFinite(n3) && (m2.copy(l2).multiplyScalar(p2.y).addScaledVector(c2, -d2.y).multiplyScalar(n3), y2.copy(c2).multiplyScalar(d2.x).addScaledVector(l2, -p2.x).multiplyScalar(n3), a2[t3].add(m2), a2[e3].add(m2), a2[i3].add(m2), o2[t3].add(y2), o2[e3].add(y2), o2[i3].add(y2));
    }
    let f2 = this.groups;
    0 === f2.length && (f2 = [{ start: 0, count: t2.count }]);
    for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
      const s4 = f2[e3], i3 = s4.start;
      for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) g2(t2.getX(e4 + 0), t2.getX(e4 + 1), t2.getX(e4 + 2));
    }
    const x2 = new Ks(), b2 = new Ks(), v2 = new Ks(), w2 = new Ks();
    function M2(t3) {
      v2.fromBufferAttribute(i2, t3), w2.copy(v2);
      const e3 = a2[t3];
      x2.copy(e3), x2.sub(v2.multiplyScalar(v2.dot(e3))).normalize(), b2.crossVectors(w2, e3);
      const s3 = b2.dot(o2[t3]) < 0 ? -1 : 1;
      n2.setXYZW(t3, x2.x, x2.y, x2.z, s3);
    }
    for (let e3 = 0, s3 = f2.length; e3 < s3; ++e3) {
      const s4 = f2[e3], i3 = s4.start;
      for (let e4 = i3, r3 = i3 + s4.count; e4 < r3; e4 += 3) M2(t2.getX(e4 + 0)), M2(t2.getX(e4 + 1)), M2(t2.getX(e4 + 2));
    }
  }
  computeVertexNormals() {
    const t2 = this.index, e2 = this.getAttribute("position");
    if (void 0 !== e2) {
      let s2 = this.getAttribute("normal");
      if (void 0 === s2) s2 = new dn(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", s2);
      else for (let t3 = 0, e3 = s2.count; t3 < e3; t3++) s2.setXYZ(t3, 0, 0, 0);
      const i2 = new Ks(), r2 = new Ks(), n2 = new Ks(), a2 = new Ks(), o2 = new Ks(), h2 = new Ks(), l2 = new Ks(), c2 = new Ks();
      if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
        const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
        i2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), n2.fromBufferAttribute(e2, m2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), a2.fromBufferAttribute(s2, d3), o2.fromBufferAttribute(s2, p2), h2.fromBufferAttribute(s2, m2), a2.add(l2), o2.add(l2), h2.add(l2), s2.setXYZ(d3, a2.x, a2.y, a2.z), s2.setXYZ(p2, o2.x, o2.y, o2.z), s2.setXYZ(m2, h2.x, h2.y, h2.z);
      }
      else for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3) i2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), n2.fromBufferAttribute(e2, t3 + 2), l2.subVectors(n2, r2), c2.subVectors(i2, r2), l2.cross(c2), s2.setXYZ(t3 + 0, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 1, l2.x, l2.y, l2.z), s2.setXYZ(t3 + 2, l2.x, l2.y, l2.z);
      this.normalizeNormals(), s2.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t2 = this.attributes.normal;
    for (let e2 = 0, s2 = t2.count; e2 < s2; e2++) Cn.fromBufferAttribute(t2, e2), Cn.normalize(), t2.setXYZ(e2, Cn.x, Cn.y, Cn.z);
  }
  toNonIndexed() {
    function t2(t3, e3) {
      const s3 = t3.array, i3 = t3.itemSize, r3 = t3.normalized, n3 = new s3.constructor(e3.length * i3);
      let a2 = 0, o2 = 0;
      for (let r4 = 0, h2 = e3.length; r4 < h2; r4++) {
        a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * i3;
        for (let t4 = 0; t4 < i3; t4++) n3[o2++] = s3[a2++];
      }
      return new dn(n3, i3, r3);
    }
    if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e2 = new _In(), s2 = this.index.array, i2 = this.attributes;
    for (const r3 in i2) {
      const n3 = t2(i2[r3], s2);
      e2.setAttribute(r3, n3);
    }
    const r2 = this.morphAttributes;
    for (const i3 in r2) {
      const n3 = [], a2 = r2[i3];
      for (let e3 = 0, i4 = a2.length; e3 < i4; e3++) {
        const i5 = t2(a2[e3], s2);
        n3.push(i5);
      }
      e2.morphAttributes[i3] = n3;
    }
    e2.morphTargetsRelative = this.morphTargetsRelative;
    const n2 = this.groups;
    for (let t3 = 0, s3 = n2.length; t3 < s3; t3++) {
      const s4 = n2[t3];
      e2.addGroup(s4.start, s4.count, s4.materialIndex);
    }
    return e2;
  }
  toJSON() {
    const t2 = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
      const e3 = this.parameters;
      for (const s3 in e3) void 0 !== e3[s3] && (t2[s3] = e3[s3]);
      return t2;
    }
    t2.data = { attributes: {} };
    const e2 = this.index;
    null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
    const s2 = this.attributes;
    for (const e3 in s2) {
      const i3 = s2[e3];
      t2.data.attributes[e3] = i3.toJSON(t2.data);
    }
    const i2 = {};
    let r2 = false;
    for (const e3 in this.morphAttributes) {
      const s3 = this.morphAttributes[e3], n3 = [];
      for (let e4 = 0, i3 = s3.length; e4 < i3; e4++) {
        const i4 = s3[e4];
        n3.push(i4.toJSON(t2.data));
      }
      n3.length > 0 && (i2[e3] = n3, r2 = true);
    }
    r2 && (t2.data.morphAttributes = i2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
    const n2 = this.groups;
    n2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(n2)));
    const a2 = this.boundingSphere;
    return null !== a2 && (t2.data.boundingSphere = a2.toJSON()), t2;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e2 = {};
    this.name = t2.name;
    const s2 = t2.index;
    null !== s2 && this.setIndex(s2.clone());
    const i2 = t2.attributes;
    for (const t3 in i2) {
      const s3 = i2[t3];
      this.setAttribute(t3, s3.clone(e2));
    }
    const r2 = t2.morphAttributes;
    for (const t3 in r2) {
      const s3 = [], i3 = r2[t3];
      for (let t4 = 0, r3 = i3.length; t4 < r3; t4++) s3.push(i3[t4].clone(e2));
      this.morphAttributes[t3] = s3;
    }
    this.morphTargetsRelative = t2.morphTargetsRelative;
    const n2 = t2.groups;
    for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
      const e4 = n2[t3];
      this.addGroup(e4.start, e4.count, e4.materialIndex);
    }
    const a2 = t2.boundingBox;
    null !== a2 && (this.boundingBox = a2.clone());
    const o2 = t2.boundingSphere;
    return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var Bn = new ar();
var kn = new nr();
var En = new $i();
var Rn = new Ks();
var Pn = new Ks();
var On = new Ks();
var Nn = new Ks();
var Vn = new Ks();
var Fn = new Ks();
var Ln = new Ks();
var jn = new Ks();
var Dn = class extends Rr {
  constructor(t2 = new In(), e2 = new sn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(t2, e2) {
    return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
  }
  updateMorphTargets() {
    const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
    if (e2.length > 0) {
      const s2 = t2[e2[0]];
      if (void 0 !== s2) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
          const e4 = s2[t3].name || String(t3);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
        }
      }
    }
  }
  getVertexPosition(t2, e2) {
    const s2 = this.geometry, i2 = s2.attributes.position, r2 = s2.morphAttributes.position, n2 = s2.morphTargetsRelative;
    e2.fromBufferAttribute(i2, t2);
    const a2 = this.morphTargetInfluences;
    if (r2 && a2) {
      Fn.set(0, 0, 0);
      for (let s3 = 0, i3 = r2.length; s3 < i3; s3++) {
        const i4 = a2[s3], o2 = r2[s3];
        0 !== i4 && (Vn.fromBufferAttribute(o2, t2), n2 ? Fn.addScaledVector(Vn, i4) : Fn.addScaledVector(Vn.sub(e2), i4));
      }
      e2.add(Fn);
    }
    return e2;
  }
  raycast(t2, e2) {
    const s2 = this.geometry, i2 = this.material, r2 = this.matrixWorld;
    if (void 0 !== i2) {
      if (null === s2.boundingSphere && s2.computeBoundingSphere(), En.copy(s2.boundingSphere), En.applyMatrix4(r2), kn.copy(t2.ray).recast(t2.near), false === En.containsPoint(kn.origin)) {
        if (null === kn.intersectSphere(En, Rn)) return;
        if (kn.origin.distanceToSquared(Rn) > (t2.far - t2.near) ** 2) return;
      }
      Bn.copy(r2).invert(), kn.copy(t2.ray).applyMatrix4(Bn), null !== s2.boundingBox && false === kn.intersectsBox(s2.boundingBox) || this._computeIntersections(t2, e2, kn);
    }
  }
  _computeIntersections(t2, e2, s2) {
    let i2;
    const r2 = this.geometry, n2 = this.material, a2 = r2.index, o2 = r2.attributes.position, h2 = r2.attributes.uv, l2 = r2.attributes.uv1, c2 = r2.attributes.normal, u2 = r2.groups, d2 = r2.drawRange;
    if (null !== a2) if (Array.isArray(n2)) for (let r3 = 0, o3 = u2.length; r3 < o3; r3++) {
      const o4 = u2[r3], p2 = n2[o4.materialIndex];
      for (let r4 = Math.max(o4.start, d2.start), n3 = Math.min(a2.count, Math.min(o4.start + o4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
        i2 = Wn(this, p2, t2, s2, h2, l2, c2, a2.getX(r4), a2.getX(r4 + 1), a2.getX(r4 + 2)), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = o4.materialIndex, e2.push(i2));
      }
    }
    else {
      for (let r3 = Math.max(0, d2.start), o3 = Math.min(a2.count, d2.start + d2.count); r3 < o3; r3 += 3) {
        i2 = Wn(this, n2, t2, s2, h2, l2, c2, a2.getX(r3), a2.getX(r3 + 1), a2.getX(r3 + 2)), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
      }
    }
    else if (void 0 !== o2) if (Array.isArray(n2)) for (let r3 = 0, a3 = u2.length; r3 < a3; r3++) {
      const a4 = u2[r3], p2 = n2[a4.materialIndex];
      for (let r4 = Math.max(a4.start, d2.start), n3 = Math.min(o2.count, Math.min(a4.start + a4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
        i2 = Wn(this, p2, t2, s2, h2, l2, c2, r4, r4 + 1, r4 + 2), i2 && (i2.faceIndex = Math.floor(r4 / 3), i2.face.materialIndex = a4.materialIndex, e2.push(i2));
      }
    }
    else {
      for (let r3 = Math.max(0, d2.start), a3 = Math.min(o2.count, d2.start + d2.count); r3 < a3; r3 += 3) {
        i2 = Wn(this, n2, t2, s2, h2, l2, c2, r3, r3 + 1, r3 + 2), i2 && (i2.faceIndex = Math.floor(r3 / 3), e2.push(i2));
      }
    }
  }
};
function Wn(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2) {
  t2.getVertexPosition(o2, Pn), t2.getVertexPosition(h2, On), t2.getVertexPosition(l2, Nn);
  const c2 = (function(t3, e3, s3, i3, r3, n3, a3, o3) {
    let h3;
    if (h3 = 1 === e3.side ? i3.intersectTriangle(a3, n3, r3, true, o3) : i3.intersectTriangle(r3, n3, a3, 0 === e3.side, o3), null === h3) return null;
    jn.copy(o3), jn.applyMatrix4(t3.matrixWorld);
    const l3 = s3.ray.origin.distanceTo(jn);
    return l3 < s3.near || l3 > s3.far ? null : { distance: l3, point: jn.clone(), object: t3 };
  })(t2, e2, s2, i2, Pn, On, Nn, Ln);
  if (c2) {
    const t3 = new Ks();
    Xr.getBarycoord(Ln, Pn, On, Nn, t3), r2 && (c2.uv = Xr.getInterpolatedAttribute(r2, o2, h2, l2, t3, new $s())), n2 && (c2.uv1 = Xr.getInterpolatedAttribute(n2, o2, h2, l2, t3, new $s())), a2 && (c2.normal = Xr.getInterpolatedAttribute(a2, o2, h2, l2, t3, new Ks()), c2.normal.dot(i2.direction) > 0 && c2.normal.multiplyScalar(-1));
    const e3 = { a: o2, b: h2, c: l2, normal: new Ks(), materialIndex: 0 };
    Xr.getNormal(Pn, On, Nn, e3.normal), c2.face = e3, c2.barycoord = t3;
  }
  return c2;
}
var Un = class _Un extends In {
  constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1, r2 = 1, n2 = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: s2, widthSegments: i2, heightSegments: r2, depthSegments: n2 };
    const a2 = this;
    i2 = Math.floor(i2), r2 = Math.floor(r2), n2 = Math.floor(n2);
    const o2 = [], h2 = [], l2 = [], c2 = [];
    let u2 = 0, d2 = 0;
    function p2(t3, e3, s3, i3, r3, n3, p3, m2, y2, g2, f2) {
      const x2 = n3 / y2, b2 = p3 / g2, v2 = n3 / 2, w2 = p3 / 2, M2 = m2 / 2, S2 = y2 + 1, _2 = g2 + 1;
      let A2 = 0, T2 = 0;
      const z2 = new Ks();
      for (let n4 = 0; n4 < _2; n4++) {
        const a3 = n4 * b2 - w2;
        for (let o3 = 0; o3 < S2; o3++) {
          const u3 = o3 * x2 - v2;
          z2[t3] = u3 * i3, z2[e3] = a3 * r3, z2[s3] = M2, h2.push(z2.x, z2.y, z2.z), z2[t3] = 0, z2[e3] = 0, z2[s3] = m2 > 0 ? 1 : -1, l2.push(z2.x, z2.y, z2.z), c2.push(o3 / y2), c2.push(1 - n4 / g2), A2 += 1;
        }
      }
      for (let t4 = 0; t4 < g2; t4++) for (let e4 = 0; e4 < y2; e4++) {
        const s4 = u2 + e4 + S2 * t4, i4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), n4 = u2 + (e4 + 1) + S2 * t4;
        o2.push(s4, i4, n4), o2.push(i4, r4, n4), T2 += 6;
      }
      a2.addGroup(d2, T2, f2), d2 += T2, u2 += A2;
    }
    p2("z", "y", "x", -1, -1, s2, e2, t2, n2, r2, 0), p2("z", "y", "x", 1, -1, s2, e2, -t2, n2, r2, 1), p2("x", "z", "y", 1, 1, t2, s2, e2, i2, n2, 2), p2("x", "z", "y", 1, -1, t2, s2, -e2, i2, n2, 3), p2("x", "y", "z", 1, -1, t2, e2, s2, i2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -s2, i2, r2, 5), this.setIndex(o2), this.setAttribute("position", new wn(h2, 3)), this.setAttribute("normal", new wn(l2, 3)), this.setAttribute("uv", new wn(c2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _Un(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
  }
};
function Hn(t2) {
  const e2 = {};
  for (const s2 in t2) {
    e2[s2] = {};
    for (const i2 in t2[s2]) {
      const r2 = t2[s2][i2];
      r2 && (r2.isColor || r2.isMatrix3 || r2.isMatrix4 || r2.isVector2 || r2.isVector3 || r2.isVector4 || r2.isTexture || r2.isQuaternion) ? r2.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[s2][i2] = null) : e2[s2][i2] = r2.clone() : Array.isArray(r2) ? e2[s2][i2] = r2.slice() : e2[s2][i2] = r2;
    }
  }
  return e2;
}
function qn(t2) {
  const e2 = {};
  for (let s2 = 0; s2 < t2.length; s2++) {
    const i2 = Hn(t2[s2]);
    for (const t3 in i2) e2[t3] = i2[t3];
  }
  return e2;
}
function Jn(t2) {
  const e2 = t2.getRenderTarget();
  return null === e2 ? t2.outputColorSpace : true === e2.isXRRenderTarget ? e2.texture.colorSpace : yi.workingColorSpace;
}
var Xn = { clone: Hn, merge: qn };
var Yn = class extends en {
  constructor(t2) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Hn(t2.uniforms), this.uniformsGroups = (function(t3) {
      const e2 = [];
      for (let s2 = 0; s2 < t3.length; s2++) e2.push(t3[s2].clone());
      return e2;
    })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
  }
  toJSON(t2) {
    const e2 = super.toJSON(t2);
    e2.glslVersion = this.glslVersion, e2.uniforms = {};
    for (const s3 in this.uniforms) {
      const i2 = this.uniforms[s3].value;
      i2 && i2.isTexture ? e2.uniforms[s3] = { type: "t", value: i2.toJSON(t2).uuid } : i2 && i2.isColor ? e2.uniforms[s3] = { type: "c", value: i2.getHex() } : i2 && i2.isVector2 ? e2.uniforms[s3] = { type: "v2", value: i2.toArray() } : i2 && i2.isVector3 ? e2.uniforms[s3] = { type: "v3", value: i2.toArray() } : i2 && i2.isVector4 ? e2.uniforms[s3] = { type: "v4", value: i2.toArray() } : i2 && i2.isMatrix3 ? e2.uniforms[s3] = { type: "m3", value: i2.toArray() } : i2 && i2.isMatrix4 ? e2.uniforms[s3] = { type: "m4", value: i2.toArray() } : e2.uniforms[s3] = { value: i2 };
    }
    Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
    const s2 = {};
    for (const t3 in this.extensions) true === this.extensions[t3] && (s2[t3] = true);
    return Object.keys(s2).length > 0 && (e2.extensions = s2), e2;
  }
};
var Zn = class extends Rr {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ar(), this.projectionMatrix = new ar(), this.projectionMatrixInverse = new ar(), this.coordinateSystem = Ps, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t2, e2) {
    return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
  }
  getWorldDirection(t2) {
    return super.getWorldDirection(t2).negate();
  }
  updateMatrixWorld(t2) {
    super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t2, e2) {
    super.updateWorldMatrix(t2, e2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Gn = new Ks();
var $n = new $s();
var Qn = new $s();
var Kn = class extends Zn {
  constructor(t2 = 50, e2 = 1, s2 = 0.1, i2 = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = s2, this.far = i2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t2, e2) {
    return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
  }
  setFocalLength(t2) {
    const e2 = 0.5 * this.getFilmHeight() / t2;
    this.fov = 2 * Us * Math.atan(e2), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t2 = Math.tan(0.5 * Ws * this.fov);
    return 0.5 * this.getFilmHeight() / t2;
  }
  getEffectiveFOV() {
    return 2 * Us * Math.atan(Math.tan(0.5 * Ws * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t2, e2, s2) {
    Gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e2.set(Gn.x, Gn.y).multiplyScalar(-t2 / Gn.z), Gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), s2.set(Gn.x, Gn.y).multiplyScalar(-t2 / Gn.z);
  }
  getViewSize(t2, e2) {
    return this.getViewBounds(t2, $n, Qn), e2.subVectors(Qn, $n);
  }
  setViewOffset(t2, e2, s2, i2, r2, n2) {
    this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t2 = this.near;
    let e2 = t2 * Math.tan(0.5 * Ws * this.fov) / this.zoom, s2 = 2 * e2, i2 = this.aspect * s2, r2 = -0.5 * i2;
    const n2 = this.view;
    if (null !== this.view && this.view.enabled) {
      const t3 = n2.fullWidth, a3 = n2.fullHeight;
      r2 += n2.offsetX * i2 / t3, e2 -= n2.offsetY * s2 / a3, i2 *= n2.width / t3, s2 *= n2.height / a3;
    }
    const a2 = this.filmOffset;
    0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + i2, e2, e2 - s2, t2, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t2) {
    const e2 = super.toJSON(t2);
    return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
  }
};
var ta = -90;
var ea = class extends Rr {
  constructor(t2, e2, s2) {
    super(), this.type = "CubeCamera", this.renderTarget = s2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i2 = new Kn(ta, 1, t2, e2);
    i2.layers = this.layers, this.add(i2);
    const r2 = new Kn(ta, 1, t2, e2);
    r2.layers = this.layers, this.add(r2);
    const n2 = new Kn(ta, 1, t2, e2);
    n2.layers = this.layers, this.add(n2);
    const a2 = new Kn(ta, 1, t2, e2);
    a2.layers = this.layers, this.add(a2);
    const o2 = new Kn(ta, 1, t2, e2);
    o2.layers = this.layers, this.add(o2);
    const h2 = new Kn(ta, 1, t2, e2);
    h2.layers = this.layers, this.add(h2);
  }
  updateCoordinateSystem() {
    const t2 = this.coordinateSystem, e2 = this.children.concat(), [s2, i2, r2, n2, a2, o2] = e2;
    for (const t3 of e2) this.remove(t3);
    if (t2 === Ps) s2.up.set(0, 1, 0), s2.lookAt(1, 0, 0), i2.up.set(0, 1, 0), i2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, 1), n2.lookAt(0, -1, 0), a2.up.set(0, 1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
    else {
      if (t2 !== Os) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
      s2.up.set(0, -1, 0), s2.lookAt(-1, 0, 0), i2.up.set(0, -1, 0), i2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, -1), n2.lookAt(0, -1, 0), a2.up.set(0, -1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
    }
    for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
  }
  update(t2, e2) {
    null === this.parent && this.updateMatrixWorld();
    const { renderTarget: s2, activeMipmapLevel: i2 } = this;
    this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
    const [r2, n2, a2, o2, h2, l2] = this.children, c2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
    t2.xr.enabled = false;
    const m2 = s2.texture.generateMipmaps;
    s2.texture.generateMipmaps = false, t2.setRenderTarget(s2, 0, i2), t2.render(e2, r2), t2.setRenderTarget(s2, 1, i2), t2.render(e2, n2), t2.setRenderTarget(s2, 2, i2), t2.render(e2, a2), t2.setRenderTarget(s2, 3, i2), t2.render(e2, o2), t2.setRenderTarget(s2, 4, i2), t2.render(e2, h2), s2.texture.generateMipmaps = m2, t2.setRenderTarget(s2, 5, i2), t2.render(e2, l2), t2.setRenderTarget(c2, u2, d2), t2.xr.enabled = p2, s2.texture.needsPMREMUpdate = true;
  }
};
var sa = class extends Ai {
  constructor(t2 = [], e2 = 301, s2, i2, r2, n2, a2, o2, h2, l2) {
    super(t2, e2, s2, i2, r2, n2, a2, o2, h2, l2), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t2) {
    this.image = t2;
  }
};
var ia = class extends Ci {
  constructor(t2 = 1, e2 = {}) {
    super(t2, t2, e2), this.isWebGLCubeRenderTarget = true;
    const s2 = { width: t2, height: t2, depth: 1 }, i2 = [s2, s2, s2, s2, s2, s2];
    this.texture = new sa(i2), this._setTextureOptions(e2), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(t2, e2) {
    this.texture.type = e2.type, this.texture.colorSpace = e2.colorSpace, this.texture.generateMipmaps = e2.generateMipmaps, this.texture.minFilter = e2.minFilter, this.texture.magFilter = e2.magFilter;
    const s2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i2 = new Un(5, 5, 5), r2 = new Yn({ name: "CubemapFromEquirect", uniforms: Hn(s2.uniforms), vertexShader: s2.vertexShader, fragmentShader: s2.fragmentShader, side: 1, blending: 0 });
    r2.uniforms.tEquirect.value = e2;
    const n2 = new Dn(i2, r2), a2 = e2.minFilter;
    e2.minFilter === _t && (e2.minFilter = wt);
    return new ea(1, 10, this).update(t2, n2), e2.minFilter = a2, n2.geometry.dispose(), n2.material.dispose(), this;
  }
  clear(t2, e2 = true, s2 = true, i2 = true) {
    const r2 = t2.getRenderTarget();
    for (let r3 = 0; r3 < 6; r3++) t2.setRenderTarget(this, r3), t2.clear(e2, s2, i2);
    t2.setRenderTarget(r2);
  }
};
var ra = class extends Rr {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
};
var na = { type: "move" };
var aa = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return null === this._hand && (this._hand = new ra(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return null === this._targetRay && (this._targetRay = new ra(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ks(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ks()), this._targetRay;
  }
  getGripSpace() {
    return null === this._grip && (this._grip = new ra(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ks(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ks()), this._grip;
  }
  dispatchEvent(t2) {
    return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
  }
  connect(t2) {
    if (t2 && t2.hand) {
      const e2 = this._hand;
      if (e2) for (const s2 of t2.hand.values()) this._getHandJoint(e2, s2);
    }
    return this.dispatchEvent({ type: "connected", data: t2 }), this;
  }
  disconnect(t2) {
    return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
  }
  update(t2, e2, s2) {
    let i2 = null, r2 = null, n2 = null;
    const a2 = this._targetRay, o2 = this._grip, h2 = this._hand;
    if (t2 && "visible-blurred" !== e2.session.visibilityState) {
      if (h2 && t2.hand) {
        n2 = true;
        for (const i4 of t2.hand.values()) {
          const t3 = e2.getJointPose(i4, s2), r4 = this._getHandJoint(h2, i4);
          null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.matrixWorldNeedsUpdate = true, r4.jointRadius = t3.radius), r4.visible = null !== t3;
        }
        const i3 = h2.joints["index-finger-tip"], r3 = h2.joints["thumb-tip"], a3 = i3.position.distanceTo(r3.position), o3 = 0.02, l2 = 5e-3;
        h2.inputState.pinching && a3 > o3 + l2 ? (h2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !h2.inputState.pinching && a3 <= o3 - l2 && (h2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
      } else null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, s2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false));
      null !== a2 && (i2 = e2.getPose(t2.targetRaySpace, s2), null === i2 && null !== r2 && (i2 = r2), null !== i2 && (a2.matrix.fromArray(i2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), a2.matrixWorldNeedsUpdate = true, i2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(i2.linearVelocity)) : a2.hasLinearVelocity = false, i2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(i2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(na)));
    }
    return null !== a2 && (a2.visible = null !== i2), null !== o2 && (o2.visible = null !== r2), null !== h2 && (h2.visible = null !== n2), this;
  }
  _getHandJoint(t2, e2) {
    if (void 0 === t2.joints[e2.jointName]) {
      const s2 = new ra();
      s2.matrixAutoUpdate = false, s2.visible = false, t2.joints[e2.jointName] = s2, t2.add(s2);
    }
    return t2.joints[e2.jointName];
  }
};
var la = class extends Rr {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new gr(), this.environmentIntensity = 1, this.environmentRotation = new gr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t2, e2) {
    return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
  }
  toJSON(t2) {
    const e2 = super.toJSON(t2);
    return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e2.object.environmentIntensity = this.environmentIntensity), e2.object.environmentRotation = this.environmentRotation.toArray(), e2;
  }
};
var ca = class {
  constructor(t2, e2) {
    this.isInterleavedBuffer = true, this.array = t2, this.stride = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.usage = Ss, this.updateRanges = [], this.version = 0, this.uuid = Hs();
  }
  onUploadCallback() {
  }
  set needsUpdate(t2) {
    true === t2 && this.version++;
  }
  setUsage(t2) {
    return this.usage = t2, this;
  }
  addUpdateRange(t2, e2) {
    this.updateRanges.push({ start: t2, count: e2 });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t2) {
    return this.array = new t2.array.constructor(t2.array), this.count = t2.count, this.stride = t2.stride, this.usage = t2.usage, this;
  }
  copyAt(t2, e2, s2) {
    t2 *= this.stride, s2 *= e2.stride;
    for (let i2 = 0, r2 = this.stride; i2 < r2; i2++) this.array[t2 + i2] = e2.array[s2 + i2];
    return this;
  }
  set(t2, e2 = 0) {
    return this.array.set(t2, e2), this;
  }
  clone(t2) {
    void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Hs()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e2 = new this.array.constructor(t2.arrayBuffers[this.array.buffer._uuid]), s2 = new this.constructor(e2, this.stride);
    return s2.setUsage(this.usage), s2;
  }
  onUpload(t2) {
    return this.onUploadCallback = t2, this;
  }
  toJSON(t2) {
    return void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Hs()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
};
var ua = new Ks();
var da = class _da {
  constructor(t2, e2, s2, i2 = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = t2, this.itemSize = e2, this.offset = s2, this.normalized = i2;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t2) {
    this.data.needsUpdate = t2;
  }
  applyMatrix4(t2) {
    for (let e2 = 0, s2 = this.data.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.applyMatrix4(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
    return this;
  }
  applyNormalMatrix(t2) {
    for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.applyNormalMatrix(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
    return this;
  }
  transformDirection(t2) {
    for (let e2 = 0, s2 = this.count; e2 < s2; e2++) ua.fromBufferAttribute(this, e2), ua.transformDirection(t2), this.setXYZ(e2, ua.x, ua.y, ua.z);
    return this;
  }
  getComponent(t2, e2) {
    let s2 = this.array[t2 * this.data.stride + this.offset + e2];
    return this.normalized && (s2 = Ys(s2, this.array)), s2;
  }
  setComponent(t2, e2, s2) {
    return this.normalized && (s2 = Zs(s2, this.array)), this.data.array[t2 * this.data.stride + this.offset + e2] = s2, this;
  }
  setX(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset] = e2, this;
  }
  setY(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 1] = e2, this;
  }
  setZ(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 2] = e2, this;
  }
  setW(t2, e2) {
    return this.normalized && (e2 = Zs(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 3] = e2, this;
  }
  getX(t2) {
    let e2 = this.data.array[t2 * this.data.stride + this.offset];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  getY(t2) {
    let e2 = this.data.array[t2 * this.data.stride + this.offset + 1];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  getZ(t2) {
    let e2 = this.data.array[t2 * this.data.stride + this.offset + 2];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  getW(t2) {
    let e2 = this.data.array[t2 * this.data.stride + this.offset + 3];
    return this.normalized && (e2 = Ys(e2, this.array)), e2;
  }
  setXY(t2, e2, s2) {
    return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this;
  }
  setXYZ(t2, e2, s2, i2) {
    return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this;
  }
  setXYZW(t2, e2, s2, i2, r2) {
    return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Zs(e2, this.array), s2 = Zs(s2, this.array), i2 = Zs(i2, this.array), r2 = Zs(r2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = s2, this.data.array[t2 + 2] = i2, this.data.array[t2 + 3] = r2, this;
  }
  clone(t2) {
    if (void 0 === t2) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t3 = [];
      for (let e2 = 0; e2 < this.count; e2++) {
        const s2 = e2 * this.data.stride + this.offset;
        for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
      }
      return new dn(new this.array.constructor(t3), this.itemSize, this.normalized);
    }
    return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new _da(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t2) {
    if (void 0 === t2) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t3 = [];
      for (let e2 = 0; e2 < this.count; e2++) {
        const s2 = e2 * this.data.stride + this.offset;
        for (let e3 = 0; e3 < this.itemSize; e3++) t3.push(this.data.array[s2 + e3]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t3, normalized: this.normalized };
    }
    return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.toJSON(t2)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
};
var pa = class extends en {
  constructor(t2) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Qr(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.rotation = t2.rotation, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
  }
};
var ma;
var ya = new Ks();
var ga = new Ks();
var fa = new Ks();
var xa = new $s();
var ba = new $s();
var va = new ar();
var wa = new Ks();
var Ma = new Ks();
var Sa = new Ks();
var _a = new $s();
var Aa = new $s();
var Ta = new $s();
var za = class extends Rr {
  constructor(t2 = new pa()) {
    if (super(), this.isSprite = true, this.type = "Sprite", void 0 === ma) {
      ma = new In();
      const t3 = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), e2 = new ca(t3, 5);
      ma.setIndex([0, 1, 2, 0, 2, 3]), ma.setAttribute("position", new da(e2, 3, 0, false)), ma.setAttribute("uv", new da(e2, 2, 3, false));
    }
    this.geometry = ma, this.material = t2, this.center = new $s(0.5, 0.5), this.count = 1;
  }
  raycast(t2, e2) {
    null === t2.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ga.setFromMatrixScale(this.matrixWorld), va.copy(t2.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t2.camera.matrixWorldInverse, this.matrixWorld), fa.setFromMatrixPosition(this.modelViewMatrix), t2.camera.isPerspectiveCamera && false === this.material.sizeAttenuation && ga.multiplyScalar(-fa.z);
    const s2 = this.material.rotation;
    let i2, r2;
    0 !== s2 && (r2 = Math.cos(s2), i2 = Math.sin(s2));
    const n2 = this.center;
    Ca(wa.set(-0.5, -0.5, 0), fa, n2, ga, i2, r2), Ca(Ma.set(0.5, -0.5, 0), fa, n2, ga, i2, r2), Ca(Sa.set(0.5, 0.5, 0), fa, n2, ga, i2, r2), _a.set(0, 0), Aa.set(1, 0), Ta.set(1, 1);
    let a2 = t2.ray.intersectTriangle(wa, Ma, Sa, false, ya);
    if (null === a2 && (Ca(Ma.set(-0.5, 0.5, 0), fa, n2, ga, i2, r2), Aa.set(0, 1), a2 = t2.ray.intersectTriangle(wa, Sa, Ma, false, ya), null === a2)) return;
    const o2 = t2.ray.origin.distanceTo(ya);
    o2 < t2.near || o2 > t2.far || e2.push({ distance: o2, point: ya.clone(), uv: Xr.getInterpolation(ya, wa, Ma, Sa, _a, Aa, Ta, new $s()), face: null, object: this });
  }
  copy(t2, e2) {
    return super.copy(t2, e2), void 0 !== t2.center && this.center.copy(t2.center), this.material = t2.material, this;
  }
};
function Ca(t2, e2, s2, i2, r2, n2) {
  xa.subVectors(t2, s2).addScalar(0.5).multiply(i2), void 0 !== r2 ? (ba.x = n2 * xa.x - r2 * xa.y, ba.y = r2 * xa.x + n2 * xa.y) : ba.copy(xa), t2.copy(e2), t2.x += ba.x, t2.y += ba.y, t2.applyMatrix4(va);
}
var Ia = new Ks();
var Ba = new Ks();
var Ea = new Ks();
var Ra = new Ti();
var Pa = new Ti();
var Oa = new Ks();
var Na = new ar();
var Va = new Ks();
var Fa = new $i();
var La = new ar();
var ja = new nr();
var Ha = new ar();
var qa = new ar();
var Ya = new ar();
var Za = new ar();
var $a = new Ri();
var Qa = new ar();
var Ka = new Dn();
var to = new $i();
var so = new Ks();
var io = new Ks();
var ro = new si();
var no = class {
  constructor(t2 = new Ks(1, 0, 0), e2 = 0) {
    this.isPlane = true, this.normal = t2, this.constant = e2;
  }
  set(t2, e2) {
    return this.normal.copy(t2), this.constant = e2, this;
  }
  setComponents(t2, e2, s2, i2) {
    return this.normal.set(t2, e2, s2), this.constant = i2, this;
  }
  setFromNormalAndCoplanarPoint(t2, e2) {
    return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
  }
  setFromCoplanarPoints(t2, e2, s2) {
    const i2 = so.subVectors(s2, e2).cross(io.subVectors(t2, e2)).normalize();
    return this.setFromNormalAndCoplanarPoint(i2, t2), this;
  }
  copy(t2) {
    return this.normal.copy(t2.normal), this.constant = t2.constant, this;
  }
  normalize() {
    const t2 = 1 / this.normal.length();
    return this.normal.multiplyScalar(t2), this.constant *= t2, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t2) {
    return this.normal.dot(t2) + this.constant;
  }
  distanceToSphere(t2) {
    return this.distanceToPoint(t2.center) - t2.radius;
  }
  projectPoint(t2, e2) {
    return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
  }
  intersectLine(t2, e2) {
    const s2 = t2.delta(so), i2 = this.normal.dot(s2);
    if (0 === i2) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
    const r2 = -(t2.start.dot(this.normal) + this.constant) / i2;
    return r2 < 0 || r2 > 1 ? null : e2.copy(t2.start).addScaledVector(s2, r2);
  }
  intersectsLine(t2) {
    const e2 = this.distanceToPoint(t2.start), s2 = this.distanceToPoint(t2.end);
    return e2 < 0 && s2 > 0 || s2 < 0 && e2 > 0;
  }
  intersectsBox(t2) {
    return t2.intersectsPlane(this);
  }
  intersectsSphere(t2) {
    return t2.intersectsPlane(this);
  }
  coplanarPoint(t2) {
    return t2.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t2, e2) {
    const s2 = e2 || ro.getNormalMatrix(t2), i2 = this.coplanarPoint(so).applyMatrix4(t2), r2 = this.normal.applyMatrix3(s2).normalize();
    return this.constant = -i2.dot(r2), this;
  }
  translate(t2) {
    return this.constant -= t2.dot(this.normal), this;
  }
  equals(t2) {
    return t2.normal.equals(this.normal) && t2.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var ao = new $i();
var oo = new $s(0.5, 0.5);
var ho = new Ks();
var lo = class {
  constructor(t2 = new no(), e2 = new no(), s2 = new no(), i2 = new no(), r2 = new no(), n2 = new no()) {
    this.planes = [t2, e2, s2, i2, r2, n2];
  }
  set(t2, e2, s2, i2, r2, n2) {
    const a2 = this.planes;
    return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(s2), a2[3].copy(i2), a2[4].copy(r2), a2[5].copy(n2), this;
  }
  copy(t2) {
    const e2 = this.planes;
    for (let s2 = 0; s2 < 6; s2++) e2[s2].copy(t2.planes[s2]);
    return this;
  }
  setFromProjectionMatrix(t2, e2 = 2e3, s2 = false) {
    const i2 = this.planes, r2 = t2.elements, n2 = r2[0], a2 = r2[1], o2 = r2[2], h2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = r2[6], d2 = r2[7], p2 = r2[8], m2 = r2[9], y2 = r2[10], g2 = r2[11], f2 = r2[12], x2 = r2[13], b2 = r2[14], v2 = r2[15];
    if (i2[0].setComponents(h2 - n2, d2 - l2, g2 - p2, v2 - f2).normalize(), i2[1].setComponents(h2 + n2, d2 + l2, g2 + p2, v2 + f2).normalize(), i2[2].setComponents(h2 + a2, d2 + c2, g2 + m2, v2 + x2).normalize(), i2[3].setComponents(h2 - a2, d2 - c2, g2 - m2, v2 - x2).normalize(), s2) i2[4].setComponents(o2, u2, y2, b2).normalize(), i2[5].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize();
    else if (i2[4].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize(), e2 === Ps) i2[5].setComponents(h2 + o2, d2 + u2, g2 + y2, v2 + b2).normalize();
    else {
      if (e2 !== Os) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
      i2[5].setComponents(o2, u2, y2, b2).normalize();
    }
    return this;
  }
  intersectsObject(t2) {
    if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), ao.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
    else {
      const e2 = t2.geometry;
      null === e2.boundingSphere && e2.computeBoundingSphere(), ao.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
    }
    return this.intersectsSphere(ao);
  }
  intersectsSprite(t2) {
    ao.center.set(0, 0, 0);
    const e2 = oo.distanceTo(t2.center);
    return ao.radius = 0.7071067811865476 + e2, ao.applyMatrix4(t2.matrixWorld), this.intersectsSphere(ao);
  }
  intersectsSphere(t2) {
    const e2 = this.planes, s2 = t2.center, i2 = -t2.radius;
    for (let t3 = 0; t3 < 6; t3++) {
      if (e2[t3].distanceToPoint(s2) < i2) return false;
    }
    return true;
  }
  intersectsBox(t2) {
    const e2 = this.planes;
    for (let s2 = 0; s2 < 6; s2++) {
      const i2 = e2[s2];
      if (ho.x = i2.normal.x > 0 ? t2.max.x : t2.min.x, ho.y = i2.normal.y > 0 ? t2.max.y : t2.min.y, ho.z = i2.normal.z > 0 ? t2.max.z : t2.min.z, i2.distanceToPoint(ho) < 0) return false;
    }
    return true;
  }
  containsPoint(t2) {
    const e2 = this.planes;
    for (let s2 = 0; s2 < 6; s2++) if (e2[s2].distanceToPoint(t2) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var co = new ar();
var uo = new lo();
var po = class _po {
  constructor() {
    this.coordinateSystem = Ps;
  }
  intersectsObject(t2, e2) {
    if (!e2.isArrayCamera || 0 === e2.cameras.length) return false;
    for (let s2 = 0; s2 < e2.cameras.length; s2++) {
      const i2 = e2.cameras[s2];
      if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsObject(t2)) return true;
    }
    return false;
  }
  intersectsSprite(t2, e2) {
    if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
    for (let s2 = 0; s2 < e2.cameras.length; s2++) {
      const i2 = e2.cameras[s2];
      if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsSprite(t2)) return true;
    }
    return false;
  }
  intersectsSphere(t2, e2) {
    if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
    for (let s2 = 0; s2 < e2.cameras.length; s2++) {
      const i2 = e2.cameras[s2];
      if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsSphere(t2)) return true;
    }
    return false;
  }
  intersectsBox(t2, e2) {
    if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
    for (let s2 = 0; s2 < e2.cameras.length; s2++) {
      const i2 = e2.cameras[s2];
      if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.intersectsBox(t2)) return true;
    }
    return false;
  }
  containsPoint(t2, e2) {
    if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
    for (let s2 = 0; s2 < e2.cameras.length; s2++) {
      const i2 = e2.cameras[s2];
      if (co.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), uo.setFromProjectionMatrix(co, i2.coordinateSystem, i2.reversedDepth), uo.containsPoint(t2)) return true;
    }
    return false;
  }
  clone() {
    return new _po();
  }
};
var fo = class {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(t2, e2, s2, i2) {
    const r2 = this.pool, n2 = this.list;
    this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
    const a2 = r2[this.index];
    n2.push(a2), this.index++, a2.start = t2, a2.count = e2, a2.z = s2, a2.index = i2;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
};
var xo = new ar();
var bo = new Qr(1, 1, 1);
var vo = new lo();
var wo = new po();
var Mo = new Ri();
var So = new $i();
var _o = new Ks();
var Ao = new Ks();
var To = new Ks();
var zo = new fo();
var Co = new Dn();
var Ro = class extends en {
  constructor(t2) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Qr(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
  }
};
var Po = new Ks();
var Oo = new Ks();
var No = new ar();
var Vo = new nr();
var Fo = new $i();
var Lo = new Ks();
var jo = new Ks();
var Do = class extends Rr {
  constructor(t2 = new In(), e2 = new Ro()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t2, e2) {
    return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
  }
  computeLineDistances() {
    const t2 = this.geometry;
    if (null === t2.index) {
      const e2 = t2.attributes.position, s2 = [0];
      for (let t3 = 1, i2 = e2.count; t3 < i2; t3++) Po.fromBufferAttribute(e2, t3 - 1), Oo.fromBufferAttribute(e2, t3), s2[t3] = s2[t3 - 1], s2[t3] += Po.distanceTo(Oo);
      t2.setAttribute("lineDistance", new wn(s2, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t2, e2) {
    const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Line.threshold, n2 = s2.drawRange;
    if (null === s2.boundingSphere && s2.computeBoundingSphere(), Fo.copy(s2.boundingSphere), Fo.applyMatrix4(i2), Fo.radius += r2, false === t2.ray.intersectsSphere(Fo)) return;
    No.copy(i2).invert(), Vo.copy(t2.ray).applyMatrix4(No);
    const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = this.isLineSegments ? 2 : 1, l2 = s2.index, c2 = s2.attributes.position;
    if (null !== l2) {
      const s3 = Math.max(0, n2.start), i3 = Math.min(l2.count, n2.start + n2.count);
      for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
        const s4 = l2.getX(r3), i4 = l2.getX(r3 + 1), n4 = Wo(this, t2, Vo, o2, s4, i4, r3);
        n4 && e2.push(n4);
      }
      if (this.isLineLoop) {
        const r3 = l2.getX(i3 - 1), n3 = l2.getX(s3), a3 = Wo(this, t2, Vo, o2, r3, n3, i3 - 1);
        a3 && e2.push(a3);
      }
    } else {
      const s3 = Math.max(0, n2.start), i3 = Math.min(c2.count, n2.start + n2.count);
      for (let r3 = s3, n3 = i3 - 1; r3 < n3; r3 += h2) {
        const s4 = Wo(this, t2, Vo, o2, r3, r3 + 1, r3);
        s4 && e2.push(s4);
      }
      if (this.isLineLoop) {
        const r3 = Wo(this, t2, Vo, o2, i3 - 1, s3, i3 - 1);
        r3 && e2.push(r3);
      }
    }
  }
  updateMorphTargets() {
    const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
    if (e2.length > 0) {
      const s2 = t2[e2[0]];
      if (void 0 !== s2) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
          const e4 = s2[t3].name || String(t3);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
        }
      }
    }
  }
};
function Wo(t2, e2, s2, i2, r2, n2, a2) {
  const o2 = t2.geometry.attributes.position;
  Po.fromBufferAttribute(o2, r2), Oo.fromBufferAttribute(o2, n2);
  if (s2.distanceSqToSegment(Po, Oo, Lo, jo) > i2) return;
  Lo.applyMatrix4(t2.matrixWorld);
  const h2 = e2.ray.origin.distanceTo(Lo);
  return h2 < e2.near || h2 > e2.far ? void 0 : { distance: h2, point: jo.clone().applyMatrix4(t2.matrixWorld), index: a2, face: null, faceIndex: null, barycoord: null, object: t2 };
}
var Uo = new Ks();
var Ho = new Ks();
var Xo = class extends en {
  constructor(t2) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Qr(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.size = t2.size, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
  }
};
var Yo = new ar();
var Zo = new nr();
var Go = new $i();
var $o = new Ks();
var Qo = class extends Rr {
  constructor(t2 = new In(), e2 = new Xo()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t2, e2) {
    return super.copy(t2, e2), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
  }
  raycast(t2, e2) {
    const s2 = this.geometry, i2 = this.matrixWorld, r2 = t2.params.Points.threshold, n2 = s2.drawRange;
    if (null === s2.boundingSphere && s2.computeBoundingSphere(), Go.copy(s2.boundingSphere), Go.applyMatrix4(i2), Go.radius += r2, false === t2.ray.intersectsSphere(Go)) return;
    Yo.copy(i2).invert(), Zo.copy(t2.ray).applyMatrix4(Yo);
    const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, h2 = s2.index, l2 = s2.attributes.position;
    if (null !== h2) {
      for (let s3 = Math.max(0, n2.start), r3 = Math.min(h2.count, n2.start + n2.count); s3 < r3; s3++) {
        const r4 = h2.getX(s3);
        $o.fromBufferAttribute(l2, r4), Ko($o, r4, o2, i2, t2, e2, this);
      }
    } else {
      for (let s3 = Math.max(0, n2.start), r3 = Math.min(l2.count, n2.start + n2.count); s3 < r3; s3++) $o.fromBufferAttribute(l2, s3), Ko($o, s3, o2, i2, t2, e2, this);
    }
  }
  updateMorphTargets() {
    const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
    if (e2.length > 0) {
      const s2 = t2[e2[0]];
      if (void 0 !== s2) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
          const e4 = s2[t3].name || String(t3);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
        }
      }
    }
  }
};
function Ko(t2, e2, s2, i2, r2, n2, a2) {
  const o2 = Zo.distanceSqToPoint(t2);
  if (o2 < s2) {
    const s3 = new Ks();
    Zo.closestPointToPoint(t2, s3), s3.applyMatrix4(i2);
    const h2 = r2.ray.origin.distanceTo(s3);
    if (h2 < r2.near || h2 > r2.far) return;
    n2.push({ distance: h2, distanceToRay: Math.sqrt(o2), point: s3, index: e2, face: null, faceIndex: null, barycoord: null, object: a2 });
  }
}
var ah = class extends Ai {
  constructor(t2, e2, s2, i2, r2, n2, a2, o2, h2) {
    super(t2, e2, s2, i2, r2, n2, a2, o2, h2), this.isCanvasTexture = true, this.needsUpdate = true;
  }
};
var oh = class extends Ai {
  constructor(t2, e2, s2 = 1014, i2, r2, n2, a2 = 1003, o2 = 1003, h2, l2 = 1026, c2 = 1) {
    if (l2 !== Wt && 1027 !== l2) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({ width: t2, height: e2, depth: c2 }, i2, r2, n2, a2, o2, l2, s2, h2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t2) {
    return super.copy(t2), this.source = new wi(Object.assign({}, t2.image)), this.compareFunction = t2.compareFunction, this;
  }
  toJSON(t2) {
    const e2 = super.toJSON(t2);
    return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
  }
};
var hh = class extends Ai {
  constructor(t2 = null) {
    super(), this.sourceTexture = t2, this.isExternalTexture = true;
  }
  copy(t2) {
    return super.copy(t2), this.sourceTexture = t2.sourceTexture, this;
  }
};
var lh = class _lh extends In {
  constructor(t2 = 1, e2 = 1, s2 = 4, i2 = 8, r2 = 1) {
    super(), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: s2, radialSegments: i2, heightSegments: r2 }, e2 = Math.max(0, e2), s2 = Math.max(1, Math.floor(s2)), i2 = Math.max(3, Math.floor(i2)), r2 = Math.max(1, Math.floor(r2));
    const n2 = [], a2 = [], o2 = [], h2 = [], l2 = e2 / 2, c2 = Math.PI / 2 * t2, u2 = e2, d2 = 2 * c2 + u2, p2 = 2 * s2 + r2, m2 = i2 + 1, y2 = new Ks(), g2 = new Ks();
    for (let f2 = 0; f2 <= p2; f2++) {
      let x2 = 0, b2 = 0, v2 = 0, w2 = 0;
      if (f2 <= s2) {
        const e3 = f2 / s2, i3 = e3 * Math.PI / 2;
        b2 = -l2 - t2 * Math.cos(i3), v2 = t2 * Math.sin(i3), w2 = -t2 * Math.cos(i3), x2 = e3 * c2;
      } else if (f2 <= s2 + r2) {
        const i3 = (f2 - s2) / r2;
        b2 = i3 * e2 - l2, v2 = t2, w2 = 0, x2 = c2 + i3 * u2;
      } else {
        const e3 = (f2 - s2 - r2) / s2, i3 = e3 * Math.PI / 2;
        b2 = l2 + t2 * Math.sin(i3), v2 = t2 * Math.cos(i3), w2 = t2 * Math.sin(i3), x2 = c2 + u2 + e3 * c2;
      }
      const M2 = Math.max(0, Math.min(1, x2 / d2));
      let S2 = 0;
      0 === f2 ? S2 = 0.5 / i2 : f2 === p2 && (S2 = -0.5 / i2);
      for (let t3 = 0; t3 <= i2; t3++) {
        const e3 = t3 / i2, s3 = e3 * Math.PI * 2, r3 = Math.sin(s3), n3 = Math.cos(s3);
        g2.x = -v2 * n3, g2.y = b2, g2.z = v2 * r3, a2.push(g2.x, g2.y, g2.z), y2.set(-v2 * n3, w2, v2 * r3), y2.normalize(), o2.push(y2.x, y2.y, y2.z), h2.push(e3 + S2, M2);
      }
      if (f2 > 0) {
        const t3 = (f2 - 1) * m2;
        for (let e3 = 0; e3 < i2; e3++) {
          const s3 = t3 + e3, i3 = t3 + e3 + 1, r3 = f2 * m2 + e3, a3 = f2 * m2 + e3 + 1;
          n2.push(s3, i3, r3), n2.push(i3, a3, r3);
        }
      }
    }
    this.setIndex(n2), this.setAttribute("position", new wn(a2, 3)), this.setAttribute("normal", new wn(o2, 3)), this.setAttribute("uv", new wn(h2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _lh(t2.radius, t2.height, t2.capSegments, t2.radialSegments, t2.heightSegments);
  }
};
var ch = class _ch extends In {
  constructor(t2 = 1, e2 = 32, s2 = 0, i2 = 2 * Math.PI) {
    super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: s2, thetaLength: i2 }, e2 = Math.max(3, e2);
    const r2 = [], n2 = [], a2 = [], o2 = [], h2 = new Ks(), l2 = new $s();
    n2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
    for (let r3 = 0, c2 = 3; r3 <= e2; r3++, c2 += 3) {
      const u2 = s2 + r3 / e2 * i2;
      h2.x = t2 * Math.cos(u2), h2.y = t2 * Math.sin(u2), n2.push(h2.x, h2.y, h2.z), a2.push(0, 0, 1), l2.x = (n2[c2] / t2 + 1) / 2, l2.y = (n2[c2 + 1] / t2 + 1) / 2, o2.push(l2.x, l2.y);
    }
    for (let t3 = 1; t3 <= e2; t3++) r2.push(t3, t3 + 1, 0);
    this.setIndex(r2), this.setAttribute("position", new wn(n2, 3)), this.setAttribute("normal", new wn(a2, 3)), this.setAttribute("uv", new wn(o2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _ch(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
  }
};
var uh = class _uh extends In {
  constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 32, r2 = 1, n2 = false, a2 = 0, o2 = 2 * Math.PI) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: s2, radialSegments: i2, heightSegments: r2, openEnded: n2, thetaStart: a2, thetaLength: o2 };
    const h2 = this;
    i2 = Math.floor(i2), r2 = Math.floor(r2);
    const l2 = [], c2 = [], u2 = [], d2 = [];
    let p2 = 0;
    const m2 = [], y2 = s2 / 2;
    let g2 = 0;
    function f2(s3) {
      const r3 = p2, n3 = new $s(), m3 = new Ks();
      let f3 = 0;
      const x2 = true === s3 ? t2 : e2, b2 = true === s3 ? 1 : -1;
      for (let t3 = 1; t3 <= i2; t3++) c2.push(0, y2 * b2, 0), u2.push(0, b2, 0), d2.push(0.5, 0.5), p2++;
      const v2 = p2;
      for (let t3 = 0; t3 <= i2; t3++) {
        const e3 = t3 / i2 * o2 + a2, s4 = Math.cos(e3), r4 = Math.sin(e3);
        m3.x = x2 * r4, m3.y = y2 * b2, m3.z = x2 * s4, c2.push(m3.x, m3.y, m3.z), u2.push(0, b2, 0), n3.x = 0.5 * s4 + 0.5, n3.y = 0.5 * r4 * b2 + 0.5, d2.push(n3.x, n3.y), p2++;
      }
      for (let t3 = 0; t3 < i2; t3++) {
        const e3 = r3 + t3, i3 = v2 + t3;
        true === s3 ? l2.push(i3, i3 + 1, e3) : l2.push(i3 + 1, i3, e3), f3 += 3;
      }
      h2.addGroup(g2, f3, true === s3 ? 1 : 2), g2 += f3;
    }
    !(function() {
      const n3 = new Ks(), f3 = new Ks();
      let x2 = 0;
      const b2 = (e2 - t2) / s2;
      for (let h3 = 0; h3 <= r2; h3++) {
        const l3 = [], g3 = h3 / r2, x3 = g3 * (e2 - t2) + t2;
        for (let t3 = 0; t3 <= i2; t3++) {
          const e3 = t3 / i2, r3 = e3 * o2 + a2, h4 = Math.sin(r3), m3 = Math.cos(r3);
          f3.x = x3 * h4, f3.y = -g3 * s2 + y2, f3.z = x3 * m3, c2.push(f3.x, f3.y, f3.z), n3.set(h4, b2, m3).normalize(), u2.push(n3.x, n3.y, n3.z), d2.push(e3, 1 - g3), l3.push(p2++);
        }
        m2.push(l3);
      }
      for (let s3 = 0; s3 < i2; s3++) for (let i3 = 0; i3 < r2; i3++) {
        const n4 = m2[i3][s3], a3 = m2[i3 + 1][s3], o3 = m2[i3 + 1][s3 + 1], h3 = m2[i3][s3 + 1];
        (t2 > 0 || 0 !== i3) && (l2.push(n4, a3, h3), x2 += 3), (e2 > 0 || i3 !== r2 - 1) && (l2.push(a3, o3, h3), x2 += 3);
      }
      h2.addGroup(g2, x2, 0), g2 += x2;
    })(), false === n2 && (t2 > 0 && f2(true), e2 > 0 && f2(false)), this.setIndex(l2), this.setAttribute("position", new wn(c2, 3)), this.setAttribute("normal", new wn(u2, 3)), this.setAttribute("uv", new wn(d2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _uh(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
  }
};
var dh = class _dh extends uh {
  constructor(t2 = 1, e2 = 1, s2 = 32, i2 = 1, r2 = false, n2 = 0, a2 = 2 * Math.PI) {
    super(0, t2, e2, s2, i2, r2, n2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: s2, heightSegments: i2, openEnded: r2, thetaStart: n2, thetaLength: a2 };
  }
  static fromJSON(t2) {
    return new _dh(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
  }
};
var ph = class _ph extends In {
  constructor(t2 = [], e2 = [], s2 = 1, i2 = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: s2, detail: i2 };
    const r2 = [], n2 = [];
    function a2(t3, e3, s3, i3) {
      const r3 = i3 + 1, n3 = [];
      for (let i4 = 0; i4 <= r3; i4++) {
        n3[i4] = [];
        const a3 = t3.clone().lerp(s3, i4 / r3), o3 = e3.clone().lerp(s3, i4 / r3), h3 = r3 - i4;
        for (let t4 = 0; t4 <= h3; t4++) n3[i4][t4] = 0 === t4 && i4 === r3 ? a3 : a3.clone().lerp(o3, t4 / h3);
      }
      for (let t4 = 0; t4 < r3; t4++) for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
        const s4 = Math.floor(e4 / 2);
        e4 % 2 == 0 ? (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4]), o2(n3[t4][s4])) : (o2(n3[t4][s4 + 1]), o2(n3[t4 + 1][s4 + 1]), o2(n3[t4 + 1][s4]));
      }
    }
    function o2(t3) {
      r2.push(t3.x, t3.y, t3.z);
    }
    function h2(e3, s3) {
      const i3 = 3 * e3;
      s3.x = t2[i3 + 0], s3.y = t2[i3 + 1], s3.z = t2[i3 + 2];
    }
    function l2(t3, e3, s3, i3) {
      i3 < 0 && 1 === t3.x && (n2[e3] = t3.x - 1), 0 === s3.x && 0 === s3.z && (n2[e3] = i3 / 2 / Math.PI + 0.5);
    }
    function c2(t3) {
      return Math.atan2(t3.z, -t3.x);
    }
    function u2(t3) {
      return Math.atan2(-t3.y, Math.sqrt(t3.x * t3.x + t3.z * t3.z));
    }
    !(function(t3) {
      const s3 = new Ks(), i3 = new Ks(), r3 = new Ks();
      for (let n3 = 0; n3 < e2.length; n3 += 3) h2(e2[n3 + 0], s3), h2(e2[n3 + 1], i3), h2(e2[n3 + 2], r3), a2(s3, i3, r3, t3);
    })(i2), (function(t3) {
      const e3 = new Ks();
      for (let s3 = 0; s3 < r2.length; s3 += 3) e3.x = r2[s3 + 0], e3.y = r2[s3 + 1], e3.z = r2[s3 + 2], e3.normalize().multiplyScalar(t3), r2[s3 + 0] = e3.x, r2[s3 + 1] = e3.y, r2[s3 + 2] = e3.z;
    })(s2), (function() {
      const t3 = new Ks();
      for (let e3 = 0; e3 < r2.length; e3 += 3) {
        t3.x = r2[e3 + 0], t3.y = r2[e3 + 1], t3.z = r2[e3 + 2];
        const s3 = c2(t3) / 2 / Math.PI + 0.5, i3 = u2(t3) / Math.PI + 0.5;
        n2.push(s3, 1 - i3);
      }
      (function() {
        const t4 = new Ks(), e3 = new Ks(), s3 = new Ks(), i3 = new Ks(), a3 = new $s(), o3 = new $s(), h3 = new $s();
        for (let u3 = 0, d2 = 0; u3 < r2.length; u3 += 9, d2 += 6) {
          t4.set(r2[u3 + 0], r2[u3 + 1], r2[u3 + 2]), e3.set(r2[u3 + 3], r2[u3 + 4], r2[u3 + 5]), s3.set(r2[u3 + 6], r2[u3 + 7], r2[u3 + 8]), a3.set(n2[d2 + 0], n2[d2 + 1]), o3.set(n2[d2 + 2], n2[d2 + 3]), h3.set(n2[d2 + 4], n2[d2 + 5]), i3.copy(t4).add(e3).add(s3).divideScalar(3);
          const p2 = c2(i3);
          l2(a3, d2 + 0, t4, p2), l2(o3, d2 + 2, e3, p2), l2(h3, d2 + 4, s3, p2);
        }
      })(), (function() {
        for (let t4 = 0; t4 < n2.length; t4 += 6) {
          const e3 = n2[t4 + 0], s3 = n2[t4 + 2], i3 = n2[t4 + 4], r3 = Math.max(e3, s3, i3), a3 = Math.min(e3, s3, i3);
          r3 > 0.9 && a3 < 0.1 && (e3 < 0.2 && (n2[t4 + 0] += 1), s3 < 0.2 && (n2[t4 + 2] += 1), i3 < 0.2 && (n2[t4 + 4] += 1));
        }
      })();
    })(), this.setAttribute("position", new wn(r2, 3)), this.setAttribute("normal", new wn(r2.slice(), 3)), this.setAttribute("uv", new wn(n2, 2)), 0 === i2 ? this.computeVertexNormals() : this.normalizeNormals();
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _ph(t2.vertices, t2.indices, t2.radius, t2.details);
  }
};
var mh = class _mh extends ph {
  constructor(t2 = 1, e2 = 0) {
    const s2 = (1 + Math.sqrt(5)) / 2, i2 = 1 / s2;
    super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, -i2, -s2, 0, -i2, s2, 0, i2, -s2, 0, i2, s2, 0, -s2, 0, -i2, s2, 0, -i2, -s2, 0, i2, s2, 0, i2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
  }
  static fromJSON(t2) {
    return new _mh(t2.radius, t2.detail);
  }
};
var yh = new Ks();
var gh = new Ks();
var fh = new Ks();
var xh = new Xr();
var bh = class extends In {
  constructor(t2 = null, e2 = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
      const s2 = 4, i2 = Math.pow(10, s2), r2 = Math.cos(Ws * e2), n2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = n2 ? n2.count : a2.count, h2 = [0, 0, 0], l2 = ["a", "b", "c"], c2 = new Array(3), u2 = {}, d2 = [];
      for (let t3 = 0; t3 < o2; t3 += 3) {
        n2 ? (h2[0] = n2.getX(t3), h2[1] = n2.getX(t3 + 1), h2[2] = n2.getX(t3 + 2)) : (h2[0] = t3, h2[1] = t3 + 1, h2[2] = t3 + 2);
        const { a: e3, b: s3, c: o3 } = xh;
        if (e3.fromBufferAttribute(a2, h2[0]), s3.fromBufferAttribute(a2, h2[1]), o3.fromBufferAttribute(a2, h2[2]), xh.getNormal(fh), c2[0] = `${Math.round(e3.x * i2)},${Math.round(e3.y * i2)},${Math.round(e3.z * i2)}`, c2[1] = `${Math.round(s3.x * i2)},${Math.round(s3.y * i2)},${Math.round(s3.z * i2)}`, c2[2] = `${Math.round(o3.x * i2)},${Math.round(o3.y * i2)},${Math.round(o3.z * i2)}`, c2[0] !== c2[1] && c2[1] !== c2[2] && c2[2] !== c2[0]) for (let t4 = 0; t4 < 3; t4++) {
          const e4 = (t4 + 1) % 3, s4 = c2[t4], i3 = c2[e4], n3 = xh[l2[t4]], a3 = xh[l2[e4]], o4 = `${s4}_${i3}`, p2 = `${i3}_${s4}`;
          p2 in u2 && u2[p2] ? (fh.dot(u2[p2].normal) <= r2 && (d2.push(n3.x, n3.y, n3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: h2[t4], index1: h2[e4], normal: fh.clone() });
        }
      }
      for (const t3 in u2) if (u2[t3]) {
        const { index0: e3, index1: s3 } = u2[t3];
        yh.fromBufferAttribute(a2, e3), gh.fromBufferAttribute(a2, s3), d2.push(yh.x, yh.y, yh.z), d2.push(gh.x, gh.y, gh.z);
      }
      this.setAttribute("position", new wn(d2, 3));
    }
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
};
var vh = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  getPointAt(t2, e2) {
    const s2 = this.getUtoTmapping(t2);
    return this.getPoint(s2, e2);
  }
  getPoints(t2 = 5) {
    const e2 = [];
    for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
    return e2;
  }
  getSpacedPoints(t2 = 5) {
    const e2 = [];
    for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPointAt(s2 / t2));
    return e2;
  }
  getLength() {
    const t2 = this.getLengths();
    return t2[t2.length - 1];
  }
  getLengths(t2 = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const e2 = [];
    let s2, i2 = this.getPoint(0), r2 = 0;
    e2.push(0);
    for (let n2 = 1; n2 <= t2; n2++) s2 = this.getPoint(n2 / t2), r2 += s2.distanceTo(i2), e2.push(r2), i2 = s2;
    return this.cacheArcLengths = e2, e2;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(t2, e2 = null) {
    const s2 = this.getLengths();
    let i2 = 0;
    const r2 = s2.length;
    let n2;
    n2 = e2 || t2 * s2[r2 - 1];
    let a2, o2 = 0, h2 = r2 - 1;
    for (; o2 <= h2; ) if (i2 = Math.floor(o2 + (h2 - o2) / 2), a2 = s2[i2] - n2, a2 < 0) o2 = i2 + 1;
    else {
      if (!(a2 > 0)) {
        h2 = i2;
        break;
      }
      h2 = i2 - 1;
    }
    if (i2 = h2, s2[i2] === n2) return i2 / (r2 - 1);
    const l2 = s2[i2];
    return (i2 + (n2 - l2) / (s2[i2 + 1] - l2)) / (r2 - 1);
  }
  getTangent(t2, e2) {
    const s2 = 1e-4;
    let i2 = t2 - s2, r2 = t2 + s2;
    i2 < 0 && (i2 = 0), r2 > 1 && (r2 = 1);
    const n2 = this.getPoint(i2), a2 = this.getPoint(r2), o2 = e2 || (n2.isVector2 ? new $s() : new Ks());
    return o2.copy(a2).sub(n2).normalize(), o2;
  }
  getTangentAt(t2, e2) {
    const s2 = this.getUtoTmapping(t2);
    return this.getTangent(s2, e2);
  }
  computeFrenetFrames(t2, e2 = false) {
    const s2 = new Ks(), i2 = [], r2 = [], n2 = [], a2 = new Ks(), o2 = new ar();
    for (let e3 = 0; e3 <= t2; e3++) {
      const s3 = e3 / t2;
      i2[e3] = this.getTangentAt(s3, new Ks());
    }
    r2[0] = new Ks(), n2[0] = new Ks();
    let h2 = Number.MAX_VALUE;
    const l2 = Math.abs(i2[0].x), c2 = Math.abs(i2[0].y), u2 = Math.abs(i2[0].z);
    l2 <= h2 && (h2 = l2, s2.set(1, 0, 0)), c2 <= h2 && (h2 = c2, s2.set(0, 1, 0)), u2 <= h2 && s2.set(0, 0, 1), a2.crossVectors(i2[0], s2).normalize(), r2[0].crossVectors(i2[0], a2), n2[0].crossVectors(i2[0], r2[0]);
    for (let e3 = 1; e3 <= t2; e3++) {
      if (r2[e3] = r2[e3 - 1].clone(), n2[e3] = n2[e3 - 1].clone(), a2.crossVectors(i2[e3 - 1], i2[e3]), a2.length() > Number.EPSILON) {
        a2.normalize();
        const t3 = Math.acos(qs(i2[e3 - 1].dot(i2[e3]), -1, 1));
        r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
      }
      n2[e3].crossVectors(i2[e3], r2[e3]);
    }
    if (true === e2) {
      let e3 = Math.acos(qs(r2[0].dot(r2[t2]), -1, 1));
      e3 /= t2, i2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
      for (let s3 = 1; s3 <= t2; s3++) r2[s3].applyMatrix4(o2.makeRotationAxis(i2[s3], e3 * s3)), n2[s3].crossVectors(i2[s3], r2[s3]);
    }
    return { tangents: i2, normals: r2, binormals: n2 };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t2) {
    return this.arcLengthDivisions = t2.arcLengthDivisions, this;
  }
  toJSON() {
    const t2 = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
  }
  fromJSON(t2) {
    return this.arcLengthDivisions = t2.arcLengthDivisions, this;
  }
};
var wh = class extends vh {
  constructor(t2 = 0, e2 = 0, s2 = 1, i2 = 1, r2 = 0, n2 = 2 * Math.PI, a2 = false, o2 = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = s2, this.yRadius = i2, this.aStartAngle = r2, this.aEndAngle = n2, this.aClockwise = a2, this.aRotation = o2;
  }
  getPoint(t2, e2 = new $s()) {
    const s2 = e2, i2 = 2 * Math.PI;
    let r2 = this.aEndAngle - this.aStartAngle;
    const n2 = Math.abs(r2) < Number.EPSILON;
    for (; r2 < 0; ) r2 += i2;
    for (; r2 > i2; ) r2 -= i2;
    r2 < Number.EPSILON && (r2 = n2 ? 0 : i2), true !== this.aClockwise || n2 || (r2 === i2 ? r2 = -i2 : r2 -= i2);
    const a2 = this.aStartAngle + t2 * r2;
    let o2 = this.aX + this.xRadius * Math.cos(a2), h2 = this.aY + this.yRadius * Math.sin(a2);
    if (0 !== this.aRotation) {
      const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), s3 = o2 - this.aX, i3 = h2 - this.aY;
      o2 = s3 * t3 - i3 * e3 + this.aX, h2 = s3 * e3 + i3 * t3 + this.aY;
    }
    return s2.set(o2, h2);
  }
  copy(t2) {
    return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
  }
};
var Mh = class extends wh {
  constructor(t2, e2, s2, i2, r2, n2) {
    super(t2, e2, s2, s2, i2, r2, n2), this.isArcCurve = true, this.type = "ArcCurve";
  }
};
function Sh() {
  let t2 = 0, e2 = 0, s2 = 0, i2 = 0;
  function r2(r3, n2, a2, o2) {
    t2 = r3, e2 = a2, s2 = -3 * r3 + 3 * n2 - 2 * a2 - o2, i2 = 2 * r3 - 2 * n2 + a2 + o2;
  }
  return { initCatmullRom: function(t3, e3, s3, i3, n2) {
    r2(e3, s3, n2 * (s3 - t3), n2 * (i3 - e3));
  }, initNonuniformCatmullRom: function(t3, e3, s3, i3, n2, a2, o2) {
    let h2 = (e3 - t3) / n2 - (s3 - t3) / (n2 + a2) + (s3 - e3) / a2, l2 = (s3 - e3) / a2 - (i3 - e3) / (a2 + o2) + (i3 - s3) / o2;
    h2 *= a2, l2 *= a2, r2(e3, s3, h2, l2);
  }, calc: function(r3) {
    const n2 = r3 * r3;
    return t2 + e2 * r3 + s2 * n2 + i2 * (n2 * r3);
  } };
}
var _h = new Ks();
var Ah = new Sh();
var Th = new Sh();
var zh = new Sh();
var Ch = class extends vh {
  constructor(t2 = [], e2 = false, s2 = "centripetal", i2 = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = s2, this.tension = i2;
  }
  getPoint(t2, e2 = new Ks()) {
    const s2 = e2, i2 = this.points, r2 = i2.length, n2 = (r2 - (this.closed ? 0 : 1)) * t2;
    let a2, o2, h2 = Math.floor(n2), l2 = n2 - h2;
    this.closed ? h2 += h2 > 0 ? 0 : (Math.floor(Math.abs(h2) / r2) + 1) * r2 : 0 === l2 && h2 === r2 - 1 && (h2 = r2 - 2, l2 = 1), this.closed || h2 > 0 ? a2 = i2[(h2 - 1) % r2] : (_h.subVectors(i2[0], i2[1]).add(i2[0]), a2 = _h);
    const c2 = i2[h2 % r2], u2 = i2[(h2 + 1) % r2];
    if (this.closed || h2 + 2 < r2 ? o2 = i2[(h2 + 2) % r2] : (_h.subVectors(i2[r2 - 1], i2[r2 - 2]).add(i2[r2 - 1]), o2 = _h), "centripetal" === this.curveType || "chordal" === this.curveType) {
      const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
      let e3 = Math.pow(a2.distanceToSquared(c2), t3), s3 = Math.pow(c2.distanceToSquared(u2), t3), i3 = Math.pow(u2.distanceToSquared(o2), t3);
      s3 < 1e-4 && (s3 = 1), e3 < 1e-4 && (e3 = s3), i3 < 1e-4 && (i3 = s3), Ah.initNonuniformCatmullRom(a2.x, c2.x, u2.x, o2.x, e3, s3, i3), Th.initNonuniformCatmullRom(a2.y, c2.y, u2.y, o2.y, e3, s3, i3), zh.initNonuniformCatmullRom(a2.z, c2.z, u2.z, o2.z, e3, s3, i3);
    } else "catmullrom" === this.curveType && (Ah.initCatmullRom(a2.x, c2.x, u2.x, o2.x, this.tension), Th.initCatmullRom(a2.y, c2.y, u2.y, o2.y, this.tension), zh.initCatmullRom(a2.z, c2.z, u2.z, o2.z, this.tension));
    return s2.set(Ah.calc(l2), Th.calc(l2), zh.calc(l2)), s2;
  }
  copy(t2) {
    super.copy(t2), this.points = [];
    for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
      const s3 = t2.points[e2];
      this.points.push(s3.clone());
    }
    return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
  }
  toJSON() {
    const t2 = super.toJSON();
    t2.points = [];
    for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
      const s3 = this.points[e2];
      t2.points.push(s3.toArray());
    }
    return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
  }
  fromJSON(t2) {
    super.fromJSON(t2), this.points = [];
    for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
      const s3 = t2.points[e2];
      this.points.push(new Ks().fromArray(s3));
    }
    return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
  }
};
function Ih(t2, e2, s2, i2, r2) {
  const n2 = 0.5 * (i2 - e2), a2 = 0.5 * (r2 - s2), o2 = t2 * t2;
  return (2 * s2 - 2 * i2 + n2 + a2) * (t2 * o2) + (-3 * s2 + 3 * i2 - 2 * n2 - a2) * o2 + n2 * t2 + s2;
}
function Bh(t2, e2, s2, i2) {
  return (function(t3, e3) {
    const s3 = 1 - t3;
    return s3 * s3 * e3;
  })(t2, e2) + (function(t3, e3) {
    return 2 * (1 - t3) * t3 * e3;
  })(t2, s2) + (function(t3, e3) {
    return t3 * t3 * e3;
  })(t2, i2);
}
function kh(t2, e2, s2, i2, r2) {
  return (function(t3, e3) {
    const s3 = 1 - t3;
    return s3 * s3 * s3 * e3;
  })(t2, e2) + (function(t3, e3) {
    const s3 = 1 - t3;
    return 3 * s3 * s3 * t3 * e3;
  })(t2, s2) + (function(t3, e3) {
    return 3 * (1 - t3) * t3 * t3 * e3;
  })(t2, i2) + (function(t3, e3) {
    return t3 * t3 * t3 * e3;
  })(t2, r2);
}
var Eh = class extends vh {
  constructor(t2 = new $s(), e2 = new $s(), s2 = new $s(), i2 = new $s()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
  }
  getPoint(t2, e2 = new $s()) {
    const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
    return s2.set(kh(t2, i2.x, r2.x, n2.x, a2.x), kh(t2, i2.y, r2.y, n2.y, a2.y)), s2;
  }
  copy(t2) {
    return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
  }
};
var Rh = class extends vh {
  constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks(), i2 = new Ks()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2, this.v3 = i2;
  }
  getPoint(t2, e2 = new Ks()) {
    const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
    return s2.set(kh(t2, i2.x, r2.x, n2.x, a2.x), kh(t2, i2.y, r2.y, n2.y, a2.y), kh(t2, i2.z, r2.z, n2.z, a2.z)), s2;
  }
  copy(t2) {
    return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
  }
};
var Ph = class extends vh {
  constructor(t2 = new $s(), e2 = new $s()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
  }
  getPoint(t2, e2 = new $s()) {
    const s2 = e2;
    return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
  }
  getPointAt(t2, e2) {
    return this.getPoint(t2, e2);
  }
  getTangent(t2, e2 = new $s()) {
    return e2.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t2, e2) {
    return this.getTangent(t2, e2);
  }
  copy(t2) {
    return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
  }
};
var Oh = class extends vh {
  constructor(t2 = new Ks(), e2 = new Ks()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
  }
  getPoint(t2, e2 = new Ks()) {
    const s2 = e2;
    return 1 === t2 ? s2.copy(this.v2) : (s2.copy(this.v2).sub(this.v1), s2.multiplyScalar(t2).add(this.v1)), s2;
  }
  getPointAt(t2, e2) {
    return this.getPoint(t2, e2);
  }
  getTangent(t2, e2 = new Ks()) {
    return e2.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t2, e2) {
    return this.getTangent(t2, e2);
  }
  copy(t2) {
    return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
  }
};
var Nh = class extends vh {
  constructor(t2 = new $s(), e2 = new $s(), s2 = new $s()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = s2;
  }
  getPoint(t2, e2 = new $s()) {
    const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
    return s2.set(Bh(t2, i2.x, r2.x, n2.x), Bh(t2, i2.y, r2.y, n2.y)), s2;
  }
  copy(t2) {
    return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
  }
};
var Vh = class extends vh {
  constructor(t2 = new Ks(), e2 = new Ks(), s2 = new Ks()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = s2;
  }
  getPoint(t2, e2 = new Ks()) {
    const s2 = e2, i2 = this.v0, r2 = this.v1, n2 = this.v2;
    return s2.set(Bh(t2, i2.x, r2.x, n2.x), Bh(t2, i2.y, r2.y, n2.y), Bh(t2, i2.z, r2.z, n2.z)), s2;
  }
  copy(t2) {
    return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
  }
};
var Fh = class extends vh {
  constructor(t2 = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
  }
  getPoint(t2, e2 = new $s()) {
    const s2 = e2, i2 = this.points, r2 = (i2.length - 1) * t2, n2 = Math.floor(r2), a2 = r2 - n2, o2 = i2[0 === n2 ? n2 : n2 - 1], h2 = i2[n2], l2 = i2[n2 > i2.length - 2 ? i2.length - 1 : n2 + 1], c2 = i2[n2 > i2.length - 3 ? i2.length - 1 : n2 + 2];
    return s2.set(Ih(a2, o2.x, h2.x, l2.x, c2.x), Ih(a2, o2.y, h2.y, l2.y, c2.y)), s2;
  }
  copy(t2) {
    super.copy(t2), this.points = [];
    for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
      const s3 = t2.points[e2];
      this.points.push(s3.clone());
    }
    return this;
  }
  toJSON() {
    const t2 = super.toJSON();
    t2.points = [];
    for (let e2 = 0, s2 = this.points.length; e2 < s2; e2++) {
      const s3 = this.points[e2];
      t2.points.push(s3.toArray());
    }
    return t2;
  }
  fromJSON(t2) {
    super.fromJSON(t2), this.points = [];
    for (let e2 = 0, s2 = t2.points.length; e2 < s2; e2++) {
      const s3 = t2.points[e2];
      this.points.push(new $s().fromArray(s3));
    }
    return this;
  }
};
var Lh = Object.freeze({ __proto__: null, ArcCurve: Mh, CatmullRomCurve3: Ch, CubicBezierCurve: Eh, CubicBezierCurve3: Rh, EllipseCurve: wh, LineCurve: Ph, LineCurve3: Oh, QuadraticBezierCurve: Nh, QuadraticBezierCurve3: Vh, SplineCurve: Fh });
var jh = class extends vh {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(t2) {
    this.curves.push(t2);
  }
  closePath() {
    const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
    if (!t2.equals(e2)) {
      const s2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Lh[s2](e2, t2));
    }
    return this;
  }
  getPoint(t2, e2) {
    const s2 = t2 * this.getLength(), i2 = this.getCurveLengths();
    let r2 = 0;
    for (; r2 < i2.length; ) {
      if (i2[r2] >= s2) {
        const t3 = i2[r2] - s2, n2 = this.curves[r2], a2 = n2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
        return n2.getPointAt(o2, e2);
      }
      r2++;
    }
    return null;
  }
  getLength() {
    const t2 = this.getCurveLengths();
    return t2[t2.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const t2 = [];
    let e2 = 0;
    for (let s2 = 0, i2 = this.curves.length; s2 < i2; s2++) e2 += this.curves[s2].getLength(), t2.push(e2);
    return this.cacheLengths = t2, t2;
  }
  getSpacedPoints(t2 = 40) {
    const e2 = [];
    for (let s2 = 0; s2 <= t2; s2++) e2.push(this.getPoint(s2 / t2));
    return this.autoClose && e2.push(e2[0]), e2;
  }
  getPoints(t2 = 12) {
    const e2 = [];
    let s2;
    for (let i2 = 0, r2 = this.curves; i2 < r2.length; i2++) {
      const n2 = r2[i2], a2 = n2.isEllipseCurve ? 2 * t2 : n2.isLineCurve || n2.isLineCurve3 ? 1 : n2.isSplineCurve ? t2 * n2.points.length : t2, o2 = n2.getPoints(a2);
      for (let t3 = 0; t3 < o2.length; t3++) {
        const i3 = o2[t3];
        s2 && s2.equals(i3) || (e2.push(i3), s2 = i3);
      }
    }
    return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
  }
  copy(t2) {
    super.copy(t2), this.curves = [];
    for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
      const s3 = t2.curves[e2];
      this.curves.push(s3.clone());
    }
    return this.autoClose = t2.autoClose, this;
  }
  toJSON() {
    const t2 = super.toJSON();
    t2.autoClose = this.autoClose, t2.curves = [];
    for (let e2 = 0, s2 = this.curves.length; e2 < s2; e2++) {
      const s3 = this.curves[e2];
      t2.curves.push(s3.toJSON());
    }
    return t2;
  }
  fromJSON(t2) {
    super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
    for (let e2 = 0, s2 = t2.curves.length; e2 < s2; e2++) {
      const s3 = t2.curves[e2];
      this.curves.push(new Lh[s3.type]().fromJSON(s3));
    }
    return this;
  }
};
var Dh = class extends jh {
  constructor(t2) {
    super(), this.type = "Path", this.currentPoint = new $s(), t2 && this.setFromPoints(t2);
  }
  setFromPoints(t2) {
    this.moveTo(t2[0].x, t2[0].y);
    for (let e2 = 1, s2 = t2.length; e2 < s2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
    return this;
  }
  moveTo(t2, e2) {
    return this.currentPoint.set(t2, e2), this;
  }
  lineTo(t2, e2) {
    const s2 = new Ph(this.currentPoint.clone(), new $s(t2, e2));
    return this.curves.push(s2), this.currentPoint.set(t2, e2), this;
  }
  quadraticCurveTo(t2, e2, s2, i2) {
    const r2 = new Nh(this.currentPoint.clone(), new $s(t2, e2), new $s(s2, i2));
    return this.curves.push(r2), this.currentPoint.set(s2, i2), this;
  }
  bezierCurveTo(t2, e2, s2, i2, r2, n2) {
    const a2 = new Eh(this.currentPoint.clone(), new $s(t2, e2), new $s(s2, i2), new $s(r2, n2));
    return this.curves.push(a2), this.currentPoint.set(r2, n2), this;
  }
  splineThru(t2) {
    const e2 = [this.currentPoint.clone()].concat(t2), s2 = new Fh(e2);
    return this.curves.push(s2), this.currentPoint.copy(t2[t2.length - 1]), this;
  }
  arc(t2, e2, s2, i2, r2, n2) {
    const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
    return this.absarc(t2 + a2, e2 + o2, s2, i2, r2, n2), this;
  }
  absarc(t2, e2, s2, i2, r2, n2) {
    return this.absellipse(t2, e2, s2, s2, i2, r2, n2), this;
  }
  ellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
    const h2 = this.currentPoint.x, l2 = this.currentPoint.y;
    return this.absellipse(t2 + h2, e2 + l2, s2, i2, r2, n2, a2, o2), this;
  }
  absellipse(t2, e2, s2, i2, r2, n2, a2, o2) {
    const h2 = new wh(t2, e2, s2, i2, r2, n2, a2, o2);
    if (this.curves.length > 0) {
      const t3 = h2.getPoint(0);
      t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
    }
    this.curves.push(h2);
    const l2 = h2.getPoint(1);
    return this.currentPoint.copy(l2), this;
  }
  copy(t2) {
    return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.currentPoint = this.currentPoint.toArray(), t2;
  }
  fromJSON(t2) {
    return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
  }
};
var Wh = class extends Dh {
  constructor(t2) {
    super(t2), this.uuid = Hs(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t2) {
    const e2 = [];
    for (let s2 = 0, i2 = this.holes.length; s2 < i2; s2++) e2[s2] = this.holes[s2].getPoints(t2);
    return e2;
  }
  extractPoints(t2) {
    return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
  }
  copy(t2) {
    super.copy(t2), this.holes = [];
    for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
      const s3 = t2.holes[e2];
      this.holes.push(s3.clone());
    }
    return this;
  }
  toJSON() {
    const t2 = super.toJSON();
    t2.uuid = this.uuid, t2.holes = [];
    for (let e2 = 0, s2 = this.holes.length; e2 < s2; e2++) {
      const s3 = this.holes[e2];
      t2.holes.push(s3.toJSON());
    }
    return t2;
  }
  fromJSON(t2) {
    super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
    for (let e2 = 0, s2 = t2.holes.length; e2 < s2; e2++) {
      const s3 = t2.holes[e2];
      this.holes.push(new Dh().fromJSON(s3));
    }
    return this;
  }
};
function Uh(t2, e2, s2 = 2) {
  const i2 = e2 && e2.length, r2 = i2 ? e2[0] * s2 : t2.length;
  let n2 = Hh(t2, 0, r2, s2, true);
  const a2 = [];
  if (!n2 || n2.next === n2.prev) return a2;
  let o2, h2, l2;
  if (i2 && (n2 = (function(t3, e3, s3, i3) {
    const r3 = [];
    for (let s4 = 0, n3 = e3.length; s4 < n3; s4++) {
      const a3 = Hh(t3, e3[s4] * i3, s4 < n3 - 1 ? e3[s4 + 1] * i3 : t3.length, i3, false);
      a3 === a3.next && (a3.steiner = true), r3.push(el(a3));
    }
    r3.sort($h);
    for (let t4 = 0; t4 < r3.length; t4++) s3 = Qh(r3[t4], s3);
    return s3;
  })(t2, e2, n2, s2)), t2.length > 80 * s2) {
    o2 = 1 / 0, h2 = 1 / 0;
    let e3 = -1 / 0, i3 = -1 / 0;
    for (let n3 = s2; n3 < r2; n3 += s2) {
      const s3 = t2[n3], r3 = t2[n3 + 1];
      s3 < o2 && (o2 = s3), r3 < h2 && (h2 = r3), s3 > e3 && (e3 = s3), r3 > i3 && (i3 = r3);
    }
    l2 = Math.max(e3 - o2, i3 - h2), l2 = 0 !== l2 ? 32767 / l2 : 0;
  }
  return Jh(n2, a2, s2, o2, h2, l2, 0), a2;
}
function Hh(t2, e2, s2, i2, r2) {
  let n2;
  if (r2 === (function(t3, e3, s3, i3) {
    let r3 = 0;
    for (let n3 = e3, a2 = s3 - i3; n3 < s3; n3 += i3) r3 += (t3[a2] - t3[n3]) * (t3[n3 + 1] + t3[a2 + 1]), a2 = n3;
    return r3;
  })(t2, e2, s2, i2) > 0) for (let r3 = e2; r3 < s2; r3 += i2) n2 = dl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
  else for (let r3 = s2 - i2; r3 >= e2; r3 -= i2) n2 = dl(r3 / i2 | 0, t2[r3], t2[r3 + 1], n2);
  return n2 && al(n2, n2.next) && (pl(n2), n2 = n2.next), n2;
}
function qh(t2, e2) {
  if (!t2) return t2;
  e2 || (e2 = t2);
  let s2, i2 = t2;
  do {
    if (s2 = false, i2.steiner || !al(i2, i2.next) && 0 !== nl(i2.prev, i2, i2.next)) i2 = i2.next;
    else {
      if (pl(i2), i2 = e2 = i2.prev, i2 === i2.next) break;
      s2 = true;
    }
  } while (s2 || i2 !== e2);
  return e2;
}
function Jh(t2, e2, s2, i2, r2, n2, a2) {
  if (!t2) return;
  !a2 && n2 && (function(t3, e3, s3, i3) {
    let r3 = t3;
    do {
      0 === r3.z && (r3.z = tl(r3.x, r3.y, e3, s3, i3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
    } while (r3 !== t3);
    r3.prevZ.nextZ = null, r3.prevZ = null, (function(t4) {
      let e4, s4 = 1;
      do {
        let i4, r4 = t4;
        t4 = null;
        let n3 = null;
        for (e4 = 0; r4; ) {
          e4++;
          let a3 = r4, o3 = 0;
          for (let t5 = 0; t5 < s4 && (o3++, a3 = a3.nextZ, a3); t5++) ;
          let h2 = s4;
          for (; o3 > 0 || h2 > 0 && a3; ) 0 !== o3 && (0 === h2 || !a3 || r4.z <= a3.z) ? (i4 = r4, r4 = r4.nextZ, o3--) : (i4 = a3, a3 = a3.nextZ, h2--), n3 ? n3.nextZ = i4 : t4 = i4, i4.prevZ = n3, n3 = i4;
          r4 = a3;
        }
        n3.nextZ = null, s4 *= 2;
      } while (e4 > 1);
    })(r3);
  })(t2, i2, r2, n2);
  let o2 = t2;
  for (; t2.prev !== t2.next; ) {
    const h2 = t2.prev, l2 = t2.next;
    if (n2 ? Yh(t2, i2, r2, n2) : Xh(t2)) e2.push(h2.i, t2.i, l2.i), pl(t2), t2 = l2.next, o2 = l2.next;
    else if ((t2 = l2) === o2) {
      a2 ? 1 === a2 ? Jh(t2 = Zh(qh(t2), e2), e2, s2, i2, r2, n2, 2) : 2 === a2 && Gh(t2, e2, s2, i2, r2, n2) : Jh(qh(t2), e2, s2, i2, r2, n2, 1);
      break;
    }
  }
}
function Xh(t2) {
  const e2 = t2.prev, s2 = t2, i2 = t2.next;
  if (nl(e2, s2, i2) >= 0) return false;
  const r2 = e2.x, n2 = s2.x, a2 = i2.x, o2 = e2.y, h2 = s2.y, l2 = i2.y, c2 = Math.min(r2, n2, a2), u2 = Math.min(o2, h2, l2), d2 = Math.max(r2, n2, a2), p2 = Math.max(o2, h2, l2);
  let m2 = i2.next;
  for (; m2 !== e2; ) {
    if (m2.x >= c2 && m2.x <= d2 && m2.y >= u2 && m2.y <= p2 && il(r2, o2, n2, h2, a2, l2, m2.x, m2.y) && nl(m2.prev, m2, m2.next) >= 0) return false;
    m2 = m2.next;
  }
  return true;
}
function Yh(t2, e2, s2, i2) {
  const r2 = t2.prev, n2 = t2, a2 = t2.next;
  if (nl(r2, n2, a2) >= 0) return false;
  const o2 = r2.x, h2 = n2.x, l2 = a2.x, c2 = r2.y, u2 = n2.y, d2 = a2.y, p2 = Math.min(o2, h2, l2), m2 = Math.min(c2, u2, d2), y2 = Math.max(o2, h2, l2), g2 = Math.max(c2, u2, d2), f2 = tl(p2, m2, e2, s2, i2), x2 = tl(y2, g2, e2, s2, i2);
  let b2 = t2.prevZ, v2 = t2.nextZ;
  for (; b2 && b2.z >= f2 && v2 && v2.z <= x2; ) {
    if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && il(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && nl(b2.prev, b2, b2.next) >= 0) return false;
    if (b2 = b2.prevZ, v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && il(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && nl(v2.prev, v2, v2.next) >= 0) return false;
    v2 = v2.nextZ;
  }
  for (; b2 && b2.z >= f2; ) {
    if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && il(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && nl(b2.prev, b2, b2.next) >= 0) return false;
    b2 = b2.prevZ;
  }
  for (; v2 && v2.z <= x2; ) {
    if (v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && il(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && nl(v2.prev, v2, v2.next) >= 0) return false;
    v2 = v2.nextZ;
  }
  return true;
}
function Zh(t2, e2) {
  let s2 = t2;
  do {
    const i2 = s2.prev, r2 = s2.next.next;
    !al(i2, r2) && ol(i2, s2, s2.next, r2) && cl(i2, r2) && cl(r2, i2) && (e2.push(i2.i, s2.i, r2.i), pl(s2), pl(s2.next), s2 = t2 = r2), s2 = s2.next;
  } while (s2 !== t2);
  return qh(s2);
}
function Gh(t2, e2, s2, i2, r2, n2) {
  let a2 = t2;
  do {
    let t3 = a2.next.next;
    for (; t3 !== a2.prev; ) {
      if (a2.i !== t3.i && rl(a2, t3)) {
        let o2 = ul(a2, t3);
        return a2 = qh(a2, a2.next), o2 = qh(o2, o2.next), Jh(a2, e2, s2, i2, r2, n2, 0), void Jh(o2, e2, s2, i2, r2, n2, 0);
      }
      t3 = t3.next;
    }
    a2 = a2.next;
  } while (a2 !== t2);
}
function $h(t2, e2) {
  let s2 = t2.x - e2.x;
  if (0 === s2 && (s2 = t2.y - e2.y, 0 === s2)) {
    s2 = (t2.next.y - t2.y) / (t2.next.x - t2.x) - (e2.next.y - e2.y) / (e2.next.x - e2.x);
  }
  return s2;
}
function Qh(t2, e2) {
  const s2 = (function(t3, e3) {
    let s3 = e3;
    const i3 = t3.x, r2 = t3.y;
    let n2, a2 = -1 / 0;
    if (al(t3, s3)) return s3;
    do {
      if (al(t3, s3.next)) return s3.next;
      if (r2 <= s3.y && r2 >= s3.next.y && s3.next.y !== s3.y) {
        const t4 = s3.x + (r2 - s3.y) * (s3.next.x - s3.x) / (s3.next.y - s3.y);
        if (t4 <= i3 && t4 > a2 && (a2 = t4, n2 = s3.x < s3.next.x ? s3 : s3.next, t4 === i3)) return n2;
      }
      s3 = s3.next;
    } while (s3 !== e3);
    if (!n2) return null;
    const o2 = n2, h2 = n2.x, l2 = n2.y;
    let c2 = 1 / 0;
    s3 = n2;
    do {
      if (i3 >= s3.x && s3.x >= h2 && i3 !== s3.x && sl(r2 < l2 ? i3 : a2, r2, h2, l2, r2 < l2 ? a2 : i3, r2, s3.x, s3.y)) {
        const e4 = Math.abs(r2 - s3.y) / (i3 - s3.x);
        cl(s3, t3) && (e4 < c2 || e4 === c2 && (s3.x > n2.x || s3.x === n2.x && Kh(n2, s3))) && (n2 = s3, c2 = e4);
      }
      s3 = s3.next;
    } while (s3 !== o2);
    return n2;
  })(t2, e2);
  if (!s2) return e2;
  const i2 = ul(s2, t2);
  return qh(i2, i2.next), qh(s2, s2.next);
}
function Kh(t2, e2) {
  return nl(t2.prev, t2, e2.prev) < 0 && nl(e2.next, t2, t2.next) < 0;
}
function tl(t2, e2, s2, i2, r2) {
  return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - s2) * r2 | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - i2) * r2 | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
}
function el(t2) {
  let e2 = t2, s2 = t2;
  do {
    (e2.x < s2.x || e2.x === s2.x && e2.y < s2.y) && (s2 = e2), e2 = e2.next;
  } while (e2 !== t2);
  return s2;
}
function sl(t2, e2, s2, i2, r2, n2, a2, o2) {
  return (r2 - a2) * (e2 - o2) >= (t2 - a2) * (n2 - o2) && (t2 - a2) * (i2 - o2) >= (s2 - a2) * (e2 - o2) && (s2 - a2) * (n2 - o2) >= (r2 - a2) * (i2 - o2);
}
function il(t2, e2, s2, i2, r2, n2, a2, o2) {
  return !(t2 === a2 && e2 === o2) && sl(t2, e2, s2, i2, r2, n2, a2, o2);
}
function rl(t2, e2) {
  return t2.next.i !== e2.i && t2.prev.i !== e2.i && !(function(t3, e3) {
    let s2 = t3;
    do {
      if (s2.i !== t3.i && s2.next.i !== t3.i && s2.i !== e3.i && s2.next.i !== e3.i && ol(s2, s2.next, t3, e3)) return true;
      s2 = s2.next;
    } while (s2 !== t3);
    return false;
  })(t2, e2) && (cl(t2, e2) && cl(e2, t2) && (function(t3, e3) {
    let s2 = t3, i2 = false;
    const r2 = (t3.x + e3.x) / 2, n2 = (t3.y + e3.y) / 2;
    do {
      s2.y > n2 != s2.next.y > n2 && s2.next.y !== s2.y && r2 < (s2.next.x - s2.x) * (n2 - s2.y) / (s2.next.y - s2.y) + s2.x && (i2 = !i2), s2 = s2.next;
    } while (s2 !== t3);
    return i2;
  })(t2, e2) && (nl(t2.prev, t2, e2.prev) || nl(t2, e2.prev, e2)) || al(t2, e2) && nl(t2.prev, t2, t2.next) > 0 && nl(e2.prev, e2, e2.next) > 0);
}
function nl(t2, e2, s2) {
  return (e2.y - t2.y) * (s2.x - e2.x) - (e2.x - t2.x) * (s2.y - e2.y);
}
function al(t2, e2) {
  return t2.x === e2.x && t2.y === e2.y;
}
function ol(t2, e2, s2, i2) {
  const r2 = ll(nl(t2, e2, s2)), n2 = ll(nl(t2, e2, i2)), a2 = ll(nl(s2, i2, t2)), o2 = ll(nl(s2, i2, e2));
  return r2 !== n2 && a2 !== o2 || (!(0 !== r2 || !hl(t2, s2, e2)) || (!(0 !== n2 || !hl(t2, i2, e2)) || (!(0 !== a2 || !hl(s2, t2, i2)) || !(0 !== o2 || !hl(s2, e2, i2)))));
}
function hl(t2, e2, s2) {
  return e2.x <= Math.max(t2.x, s2.x) && e2.x >= Math.min(t2.x, s2.x) && e2.y <= Math.max(t2.y, s2.y) && e2.y >= Math.min(t2.y, s2.y);
}
function ll(t2) {
  return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
}
function cl(t2, e2) {
  return nl(t2.prev, t2, t2.next) < 0 ? nl(t2, e2, t2.next) >= 0 && nl(t2, t2.prev, e2) >= 0 : nl(t2, e2, t2.prev) < 0 || nl(t2, t2.next, e2) < 0;
}
function ul(t2, e2) {
  const s2 = ml(t2.i, t2.x, t2.y), i2 = ml(e2.i, e2.x, e2.y), r2 = t2.next, n2 = e2.prev;
  return t2.next = e2, e2.prev = t2, s2.next = r2, r2.prev = s2, i2.next = s2, s2.prev = i2, n2.next = i2, i2.prev = n2, i2;
}
function dl(t2, e2, s2, i2) {
  const r2 = ml(t2, e2, s2);
  return i2 ? (r2.next = i2.next, r2.prev = i2, i2.next.prev = r2, i2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
}
function pl(t2) {
  t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
}
function ml(t2, e2, s2) {
  return { i: t2, x: e2, y: s2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
var yl = class {
  static triangulate(t2, e2, s2 = 2) {
    return Uh(t2, e2, s2);
  }
};
var gl = class _gl {
  static area(t2) {
    const e2 = t2.length;
    let s2 = 0;
    for (let i2 = e2 - 1, r2 = 0; r2 < e2; i2 = r2++) s2 += t2[i2].x * t2[r2].y - t2[r2].x * t2[i2].y;
    return 0.5 * s2;
  }
  static isClockWise(t2) {
    return _gl.area(t2) < 0;
  }
  static triangulateShape(t2, e2) {
    const s2 = [], i2 = [], r2 = [];
    fl(t2), xl(s2, t2);
    let n2 = t2.length;
    e2.forEach(fl);
    for (let t3 = 0; t3 < e2.length; t3++) i2.push(n2), n2 += e2[t3].length, xl(s2, e2[t3]);
    const a2 = yl.triangulate(s2, i2);
    for (let t3 = 0; t3 < a2.length; t3 += 3) r2.push(a2.slice(t3, t3 + 3));
    return r2;
  }
};
function fl(t2) {
  const e2 = t2.length;
  e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
}
function xl(t2, e2) {
  for (let s2 = 0; s2 < e2.length; s2++) t2.push(e2[s2].x), t2.push(e2[s2].y);
}
var bl = class _bl extends In {
  constructor(t2 = new Wh([new $s(0.5, 0.5), new $s(-0.5, 0.5), new $s(-0.5, -0.5), new $s(0.5, -0.5)]), e2 = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
    const s2 = this, i2 = [], r2 = [];
    for (let e3 = 0, s3 = t2.length; e3 < s3; e3++) {
      n2(t2[e3]);
    }
    function n2(t3) {
      const n3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, h2 = void 0 !== e2.depth ? e2.depth : 1;
      let l2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, c2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : c2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
      const m2 = e2.extrudePath, y2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : vl;
      let g2, f2, x2, b2, v2, w2 = false;
      m2 && (g2 = m2.getSpacedPoints(o2), w2 = true, l2 = false, f2 = m2.computeFrenetFrames(o2, false), x2 = new Ks(), b2 = new Ks(), v2 = new Ks()), l2 || (p2 = 0, c2 = 0, u2 = 0, d2 = 0);
      const M2 = t3.extractPoints(a2);
      let S2 = M2.shape;
      const _2 = M2.holes;
      if (!gl.isClockWise(S2)) {
        S2 = S2.reverse();
        for (let t4 = 0, e3 = _2.length; t4 < e3; t4++) {
          const e4 = _2[t4];
          gl.isClockWise(e4) && (_2[t4] = e4.reverse());
        }
      }
      function A2(t4) {
        const e3 = 1e-10 * 1e-10;
        let s3 = t4[0];
        for (let i3 = 1; i3 <= t4.length; i3++) {
          const r3 = i3 % t4.length, n4 = t4[r3], a3 = n4.x - s3.x, o3 = n4.y - s3.y, h3 = a3 * a3 + o3 * o3, l3 = Math.max(Math.abs(n4.x), Math.abs(n4.y), Math.abs(s3.x), Math.abs(s3.y));
          h3 <= e3 * l3 * l3 ? (t4.splice(r3, 1), i3--) : s3 = n4;
        }
      }
      A2(S2), _2.forEach(A2);
      const T2 = _2.length, z2 = S2;
      for (let t4 = 0; t4 < T2; t4++) {
        const e3 = _2[t4];
        S2 = S2.concat(e3);
      }
      function C2(t4, e3, s3) {
        return e3 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, s3);
      }
      const I2 = S2.length;
      function B2(t4, e3, s3) {
        let i3, r3, n4;
        const a3 = t4.x - e3.x, o3 = t4.y - e3.y, h3 = s3.x - t4.x, l3 = s3.y - t4.y, c3 = a3 * a3 + o3 * o3, u3 = a3 * l3 - o3 * h3;
        if (Math.abs(u3) > Number.EPSILON) {
          const u4 = Math.sqrt(c3), d3 = Math.sqrt(h3 * h3 + l3 * l3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, y3 = ((s3.x - l3 / d3 - p3) * l3 - (s3.y + h3 / d3 - m3) * h3) / (a3 * l3 - o3 * h3);
          i3 = p3 + a3 * y3 - t4.x, r3 = m3 + o3 * y3 - t4.y;
          const g3 = i3 * i3 + r3 * r3;
          if (g3 <= 2) return new $s(i3, r3);
          n4 = Math.sqrt(g3 / 2);
        } else {
          let t5 = false;
          a3 > Number.EPSILON ? h3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? h3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(l3) && (t5 = true), t5 ? (i3 = -o3, r3 = a3, n4 = Math.sqrt(c3)) : (i3 = a3, r3 = o3, n4 = Math.sqrt(c3 / 2));
        }
        return new $s(i3 / n4, r3 / n4);
      }
      const k2 = [];
      for (let t4 = 0, e3 = z2.length, s3 = e3 - 1, i3 = t4 + 1; t4 < e3; t4++, s3++, i3++) s3 === e3 && (s3 = 0), i3 === e3 && (i3 = 0), k2[t4] = B2(z2[t4], z2[s3], z2[i3]);
      const E2 = [];
      let R2, P2, O2 = k2.concat();
      for (let t4 = 0, e3 = T2; t4 < e3; t4++) {
        const e4 = _2[t4];
        R2 = [];
        for (let t5 = 0, s3 = e4.length, i3 = s3 - 1, r3 = t5 + 1; t5 < s3; t5++, i3++, r3++) i3 === s3 && (i3 = 0), r3 === s3 && (r3 = 0), R2[t5] = B2(e4[t5], e4[i3], e4[r3]);
        E2.push(R2), O2 = O2.concat(R2);
      }
      if (0 === p2) P2 = gl.triangulateShape(z2, _2);
      else {
        const t4 = [], e3 = [];
        for (let s3 = 0; s3 < p2; s3++) {
          const i3 = s3 / p2, r3 = c2 * Math.cos(i3 * Math.PI / 2), n4 = u2 * Math.sin(i3 * Math.PI / 2) + d2;
          for (let e4 = 0, s4 = z2.length; e4 < s4; e4++) {
            const s5 = C2(z2[e4], k2[e4], n4);
            L2(s5.x, s5.y, -r3), 0 === i3 && t4.push(s5);
          }
          for (let t5 = 0, s4 = T2; t5 < s4; t5++) {
            const s5 = _2[t5];
            R2 = E2[t5];
            const a3 = [];
            for (let t6 = 0, e4 = s5.length; t6 < e4; t6++) {
              const e5 = C2(s5[t6], R2[t6], n4);
              L2(e5.x, e5.y, -r3), 0 === i3 && a3.push(e5);
            }
            0 === i3 && e3.push(a3);
          }
        }
        P2 = gl.triangulateShape(t4, e3);
      }
      const N2 = P2.length, V2 = u2 + d2;
      for (let t4 = 0; t4 < I2; t4++) {
        const e3 = l2 ? C2(S2[t4], O2[t4], V2) : S2[t4];
        w2 ? (b2.copy(f2.normals[0]).multiplyScalar(e3.x), x2.copy(f2.binormals[0]).multiplyScalar(e3.y), v2.copy(g2[0]).add(b2).add(x2), L2(v2.x, v2.y, v2.z)) : L2(e3.x, e3.y, 0);
      }
      for (let t4 = 1; t4 <= o2; t4++) for (let e3 = 0; e3 < I2; e3++) {
        const s3 = l2 ? C2(S2[e3], O2[e3], V2) : S2[e3];
        w2 ? (b2.copy(f2.normals[t4]).multiplyScalar(s3.x), x2.copy(f2.binormals[t4]).multiplyScalar(s3.y), v2.copy(g2[t4]).add(b2).add(x2), L2(v2.x, v2.y, v2.z)) : L2(s3.x, s3.y, h2 / o2 * t4);
      }
      for (let t4 = p2 - 1; t4 >= 0; t4--) {
        const e3 = t4 / p2, s3 = c2 * Math.cos(e3 * Math.PI / 2), i3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
        for (let t5 = 0, e4 = z2.length; t5 < e4; t5++) {
          const e5 = C2(z2[t5], k2[t5], i3);
          L2(e5.x, e5.y, h2 + s3);
        }
        for (let t5 = 0, e4 = _2.length; t5 < e4; t5++) {
          const e5 = _2[t5];
          R2 = E2[t5];
          for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
            const r4 = C2(e5[t6], R2[t6], i3);
            w2 ? L2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + s3) : L2(r4.x, r4.y, h2 + s3);
          }
        }
      }
      function F2(t4, e3) {
        let s3 = t4.length;
        for (; --s3 >= 0; ) {
          const i3 = s3;
          let r3 = s3 - 1;
          r3 < 0 && (r3 = t4.length - 1);
          for (let t5 = 0, s4 = o2 + 2 * p2; t5 < s4; t5++) {
            const s5 = I2 * t5, n4 = I2 * (t5 + 1);
            D2(e3 + i3 + s5, e3 + r3 + s5, e3 + r3 + n4, e3 + i3 + n4);
          }
        }
      }
      function L2(t4, e3, s3) {
        n3.push(t4), n3.push(e3), n3.push(s3);
      }
      function j2(t4, e3, r3) {
        W2(t4), W2(e3), W2(r3);
        const n4 = i2.length / 3, a3 = y2.generateTopUV(s2, i2, n4 - 3, n4 - 2, n4 - 1);
        U2(a3[0]), U2(a3[1]), U2(a3[2]);
      }
      function D2(t4, e3, r3, n4) {
        W2(t4), W2(e3), W2(n4), W2(e3), W2(r3), W2(n4);
        const a3 = i2.length / 3, o3 = y2.generateSideWallUV(s2, i2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
        U2(o3[0]), U2(o3[1]), U2(o3[3]), U2(o3[1]), U2(o3[2]), U2(o3[3]);
      }
      function W2(t4) {
        i2.push(n3[3 * t4 + 0]), i2.push(n3[3 * t4 + 1]), i2.push(n3[3 * t4 + 2]);
      }
      function U2(t4) {
        r2.push(t4.x), r2.push(t4.y);
      }
      !(function() {
        const t4 = i2.length / 3;
        if (l2) {
          let t5 = 0, e3 = I2 * t5;
          for (let t6 = 0; t6 < N2; t6++) {
            const s3 = P2[t6];
            j2(s3[2] + e3, s3[1] + e3, s3[0] + e3);
          }
          t5 = o2 + 2 * p2, e3 = I2 * t5;
          for (let t6 = 0; t6 < N2; t6++) {
            const s3 = P2[t6];
            j2(s3[0] + e3, s3[1] + e3, s3[2] + e3);
          }
        } else {
          for (let t5 = 0; t5 < N2; t5++) {
            const e3 = P2[t5];
            j2(e3[2], e3[1], e3[0]);
          }
          for (let t5 = 0; t5 < N2; t5++) {
            const e3 = P2[t5];
            j2(e3[0] + I2 * o2, e3[1] + I2 * o2, e3[2] + I2 * o2);
          }
        }
        s2.addGroup(t4, i2.length / 3 - t4, 0);
      })(), (function() {
        const t4 = i2.length / 3;
        let e3 = 0;
        F2(z2, e3), e3 += z2.length;
        for (let t5 = 0, s3 = _2.length; t5 < s3; t5++) {
          const s4 = _2[t5];
          F2(s4, e3), e3 += s4.length;
        }
        s2.addGroup(t4, i2.length / 3 - t4, 1);
      })();
    }
    this.setAttribute("position", new wn(i2, 3)), this.setAttribute("uv", new wn(r2, 2)), this.computeVertexNormals();
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return (function(t3, e2, s2) {
      if (s2.shapes = [], Array.isArray(t3)) for (let e3 = 0, i2 = t3.length; e3 < i2; e3++) {
        const i3 = t3[e3];
        s2.shapes.push(i3.uuid);
      }
      else s2.shapes.push(t3.uuid);
      s2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (s2.options.extrudePath = e2.extrudePath.toJSON());
      return s2;
    })(this.parameters.shapes, this.parameters.options, t2);
  }
  static fromJSON(t2, e2) {
    const s2 = [];
    for (let i3 = 0, r2 = t2.shapes.length; i3 < r2; i3++) {
      const r3 = e2[t2.shapes[i3]];
      s2.push(r3);
    }
    const i2 = t2.options.extrudePath;
    return void 0 !== i2 && (t2.options.extrudePath = new Lh[i2.type]().fromJSON(i2)), new _bl(s2, t2.options);
  }
};
var vl = { generateTopUV: function(t2, e2, s2, i2, r2) {
  const n2 = e2[3 * s2], a2 = e2[3 * s2 + 1], o2 = e2[3 * i2], h2 = e2[3 * i2 + 1], l2 = e2[3 * r2], c2 = e2[3 * r2 + 1];
  return [new $s(n2, a2), new $s(o2, h2), new $s(l2, c2)];
}, generateSideWallUV: function(t2, e2, s2, i2, r2, n2) {
  const a2 = e2[3 * s2], o2 = e2[3 * s2 + 1], h2 = e2[3 * s2 + 2], l2 = e2[3 * i2], c2 = e2[3 * i2 + 1], u2 = e2[3 * i2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], y2 = e2[3 * n2], g2 = e2[3 * n2 + 1], f2 = e2[3 * n2 + 2];
  return Math.abs(o2 - c2) < Math.abs(a2 - l2) ? [new $s(a2, 1 - h2), new $s(l2, 1 - u2), new $s(d2, 1 - m2), new $s(y2, 1 - f2)] : [new $s(o2, 1 - h2), new $s(c2, 1 - u2), new $s(p2, 1 - m2), new $s(g2, 1 - f2)];
} };
var wl = class _wl extends ph {
  constructor(t2 = 1, e2 = 0) {
    const s2 = (1 + Math.sqrt(5)) / 2;
    super([-1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, 0, 0, -1, s2, 0, 1, s2, 0, -1, -s2, 0, 1, -s2, s2, 0, -1, s2, 0, 1, -s2, 0, -1, -s2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
  }
  static fromJSON(t2) {
    return new _wl(t2.radius, t2.detail);
  }
};
var Ml = class _Ml extends In {
  constructor(t2 = [new $s(0, -0.5), new $s(0.5, 0), new $s(0, 0.5)], e2 = 12, s2 = 0, i2 = 2 * Math.PI) {
    super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: s2, phiLength: i2 }, e2 = Math.floor(e2), i2 = qs(i2, 0, 2 * Math.PI);
    const r2 = [], n2 = [], a2 = [], o2 = [], h2 = [], l2 = 1 / e2, c2 = new Ks(), u2 = new $s(), d2 = new Ks(), p2 = new Ks(), m2 = new Ks();
    let y2 = 0, g2 = 0;
    for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
      case 0:
        y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
        break;
      case t2.length - 1:
        o2.push(m2.x, m2.y, m2.z);
        break;
      default:
        y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
    }
    for (let r3 = 0; r3 <= e2; r3++) {
      const d3 = s2 + r3 * l2 * i2, p3 = Math.sin(d3), m3 = Math.cos(d3);
      for (let s3 = 0; s3 <= t2.length - 1; s3++) {
        c2.x = t2[s3].x * p3, c2.y = t2[s3].y, c2.z = t2[s3].x * m3, n2.push(c2.x, c2.y, c2.z), u2.x = r3 / e2, u2.y = s3 / (t2.length - 1), a2.push(u2.x, u2.y);
        const i3 = o2[3 * s3 + 0] * p3, l3 = o2[3 * s3 + 1], d4 = o2[3 * s3 + 0] * m3;
        h2.push(i3, l3, d4);
      }
    }
    for (let s3 = 0; s3 < e2; s3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
      const i3 = e3 + s3 * t2.length, n3 = i3, a3 = i3 + t2.length, o3 = i3 + t2.length + 1, h3 = i3 + 1;
      r2.push(n3, a3, h3), r2.push(o3, h3, a3);
    }
    this.setIndex(r2), this.setAttribute("position", new wn(n2, 3)), this.setAttribute("uv", new wn(a2, 2)), this.setAttribute("normal", new wn(h2, 3));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _Ml(t2.points, t2.segments, t2.phiStart, t2.phiLength);
  }
};
var Sl = class _Sl extends ph {
  constructor(t2 = 1, e2 = 0) {
    super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
  }
  static fromJSON(t2) {
    return new _Sl(t2.radius, t2.detail);
  }
};
var _l = class __l extends In {
  constructor(t2 = 1, e2 = 1, s2 = 1, i2 = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: s2, heightSegments: i2 };
    const r2 = t2 / 2, n2 = e2 / 2, a2 = Math.floor(s2), o2 = Math.floor(i2), h2 = a2 + 1, l2 = o2 + 1, c2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], y2 = [];
    for (let t3 = 0; t3 < l2; t3++) {
      const e3 = t3 * u2 - n2;
      for (let s3 = 0; s3 < h2; s3++) {
        const i3 = s3 * c2 - r2;
        p2.push(i3, -e3, 0), m2.push(0, 0, 1), y2.push(s3 / a2), y2.push(1 - t3 / o2);
      }
    }
    for (let t3 = 0; t3 < o2; t3++) for (let e3 = 0; e3 < a2; e3++) {
      const s3 = e3 + h2 * t3, i3 = e3 + h2 * (t3 + 1), r3 = e3 + 1 + h2 * (t3 + 1), n3 = e3 + 1 + h2 * t3;
      d2.push(s3, i3, n3), d2.push(i3, r3, n3);
    }
    this.setIndex(d2), this.setAttribute("position", new wn(p2, 3)), this.setAttribute("normal", new wn(m2, 3)), this.setAttribute("uv", new wn(y2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new __l(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
  }
};
var Al = class _Al extends In {
  constructor(t2 = 0.5, e2 = 1, s2 = 32, i2 = 1, r2 = 0, n2 = 2 * Math.PI) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: s2, phiSegments: i2, thetaStart: r2, thetaLength: n2 }, s2 = Math.max(3, s2);
    const a2 = [], o2 = [], h2 = [], l2 = [];
    let c2 = t2;
    const u2 = (e2 - t2) / (i2 = Math.max(1, i2)), d2 = new Ks(), p2 = new $s();
    for (let t3 = 0; t3 <= i2; t3++) {
      for (let t4 = 0; t4 <= s2; t4++) {
        const i3 = r2 + t4 / s2 * n2;
        d2.x = c2 * Math.cos(i3), d2.y = c2 * Math.sin(i3), o2.push(d2.x, d2.y, d2.z), h2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, l2.push(p2.x, p2.y);
      }
      c2 += u2;
    }
    for (let t3 = 0; t3 < i2; t3++) {
      const e3 = t3 * (s2 + 1);
      for (let t4 = 0; t4 < s2; t4++) {
        const i3 = t4 + e3, r3 = i3, n3 = i3 + s2 + 1, o3 = i3 + s2 + 2, h3 = i3 + 1;
        a2.push(r3, n3, h3), a2.push(n3, o3, h3);
      }
    }
    this.setIndex(a2), this.setAttribute("position", new wn(o2, 3)), this.setAttribute("normal", new wn(h2, 3)), this.setAttribute("uv", new wn(l2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _Al(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
  }
};
var Tl = class _Tl extends In {
  constructor(t2 = new Wh([new $s(0, 0.5), new $s(-0.5, -0.5), new $s(0.5, -0.5)]), e2 = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
    const s2 = [], i2 = [], r2 = [], n2 = [];
    let a2 = 0, o2 = 0;
    if (false === Array.isArray(t2)) h2(t2);
    else for (let e3 = 0; e3 < t2.length; e3++) h2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
    function h2(t3) {
      const a3 = i2.length / 3, h3 = t3.extractPoints(e2);
      let l2 = h3.shape;
      const c2 = h3.holes;
      false === gl.isClockWise(l2) && (l2 = l2.reverse());
      for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
        const e4 = c2[t4];
        true === gl.isClockWise(e4) && (c2[t4] = e4.reverse());
      }
      const u2 = gl.triangulateShape(l2, c2);
      for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
        const e4 = c2[t4];
        l2 = l2.concat(e4);
      }
      for (let t4 = 0, e3 = l2.length; t4 < e3; t4++) {
        const e4 = l2[t4];
        i2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), n2.push(e4.x, e4.y);
      }
      for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
        const e4 = u2[t4], i3 = e4[0] + a3, r3 = e4[1] + a3, n3 = e4[2] + a3;
        s2.push(i3, r3, n3), o2 += 3;
      }
    }
    this.setIndex(s2), this.setAttribute("position", new wn(i2, 3)), this.setAttribute("normal", new wn(r2, 3)), this.setAttribute("uv", new wn(n2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return (function(t3, e2) {
      if (e2.shapes = [], Array.isArray(t3)) for (let s2 = 0, i2 = t3.length; s2 < i2; s2++) {
        const i3 = t3[s2];
        e2.shapes.push(i3.uuid);
      }
      else e2.shapes.push(t3.uuid);
      return e2;
    })(this.parameters.shapes, t2);
  }
  static fromJSON(t2, e2) {
    const s2 = [];
    for (let i2 = 0, r2 = t2.shapes.length; i2 < r2; i2++) {
      const r3 = e2[t2.shapes[i2]];
      s2.push(r3);
    }
    return new _Tl(s2, t2.curveSegments);
  }
};
var zl = class _zl extends In {
  constructor(t2 = 1, e2 = 32, s2 = 16, i2 = 0, r2 = 2 * Math.PI, n2 = 0, a2 = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: s2, phiStart: i2, phiLength: r2, thetaStart: n2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), s2 = Math.max(2, Math.floor(s2));
    const o2 = Math.min(n2 + a2, Math.PI);
    let h2 = 0;
    const l2 = [], c2 = new Ks(), u2 = new Ks(), d2 = [], p2 = [], m2 = [], y2 = [];
    for (let d3 = 0; d3 <= s2; d3++) {
      const g2 = [], f2 = d3 / s2;
      let x2 = 0;
      0 === d3 && 0 === n2 ? x2 = 0.5 / e2 : d3 === s2 && o2 === Math.PI && (x2 = -0.5 / e2);
      for (let s3 = 0; s3 <= e2; s3++) {
        const o3 = s3 / e2;
        c2.x = -t2 * Math.cos(i2 + o3 * r2) * Math.sin(n2 + f2 * a2), c2.y = t2 * Math.cos(n2 + f2 * a2), c2.z = t2 * Math.sin(i2 + o3 * r2) * Math.sin(n2 + f2 * a2), p2.push(c2.x, c2.y, c2.z), u2.copy(c2).normalize(), m2.push(u2.x, u2.y, u2.z), y2.push(o3 + x2, 1 - f2), g2.push(h2++);
      }
      l2.push(g2);
    }
    for (let t3 = 0; t3 < s2; t3++) for (let i3 = 0; i3 < e2; i3++) {
      const e3 = l2[t3][i3 + 1], r3 = l2[t3][i3], a3 = l2[t3 + 1][i3], h3 = l2[t3 + 1][i3 + 1];
      (0 !== t3 || n2 > 0) && d2.push(e3, r3, h3), (t3 !== s2 - 1 || o2 < Math.PI) && d2.push(r3, a3, h3);
    }
    this.setIndex(d2), this.setAttribute("position", new wn(p2, 3)), this.setAttribute("normal", new wn(m2, 3)), this.setAttribute("uv", new wn(y2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _zl(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
  }
};
var Cl = class _Cl extends ph {
  constructor(t2 = 1, e2 = 0) {
    super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
  }
  static fromJSON(t2) {
    return new _Cl(t2.radius, t2.detail);
  }
};
var Il = class _Il extends In {
  constructor(t2 = 1, e2 = 0.4, s2 = 12, i2 = 48, r2 = 2 * Math.PI) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: s2, tubularSegments: i2, arc: r2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
    const n2 = [], a2 = [], o2 = [], h2 = [], l2 = new Ks(), c2 = new Ks(), u2 = new Ks();
    for (let n3 = 0; n3 <= s2; n3++) for (let d2 = 0; d2 <= i2; d2++) {
      const p2 = d2 / i2 * r2, m2 = n3 / s2 * Math.PI * 2;
      c2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(p2), c2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(p2), c2.z = e2 * Math.sin(m2), a2.push(c2.x, c2.y, c2.z), l2.x = t2 * Math.cos(p2), l2.y = t2 * Math.sin(p2), u2.subVectors(c2, l2).normalize(), o2.push(u2.x, u2.y, u2.z), h2.push(d2 / i2), h2.push(n3 / s2);
    }
    for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
      const s3 = (i2 + 1) * t3 + e3 - 1, r3 = (i2 + 1) * (t3 - 1) + e3 - 1, a3 = (i2 + 1) * (t3 - 1) + e3, o3 = (i2 + 1) * t3 + e3;
      n2.push(s3, r3, o3), n2.push(r3, a3, o3);
    }
    this.setIndex(n2), this.setAttribute("position", new wn(a2, 3)), this.setAttribute("normal", new wn(o2, 3)), this.setAttribute("uv", new wn(h2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _Il(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
  }
};
var Bl = class _Bl extends In {
  constructor(t2 = 1, e2 = 0.4, s2 = 64, i2 = 8, r2 = 2, n2 = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: s2, radialSegments: i2, p: r2, q: n2 }, s2 = Math.floor(s2), i2 = Math.floor(i2);
    const a2 = [], o2 = [], h2 = [], l2 = [], c2 = new Ks(), u2 = new Ks(), d2 = new Ks(), p2 = new Ks(), m2 = new Ks(), y2 = new Ks(), g2 = new Ks();
    for (let a3 = 0; a3 <= s2; ++a3) {
      const x2 = a3 / s2 * r2 * Math.PI * 2;
      f2(x2, r2, n2, t2, d2), f2(x2 + 0.01, r2, n2, t2, p2), y2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(y2, g2), g2.crossVectors(m2, y2), m2.normalize(), g2.normalize();
      for (let t3 = 0; t3 <= i2; ++t3) {
        const r3 = t3 / i2 * Math.PI * 2, n3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
        c2.x = d2.x + (n3 * g2.x + p3 * m2.x), c2.y = d2.y + (n3 * g2.y + p3 * m2.y), c2.z = d2.z + (n3 * g2.z + p3 * m2.z), o2.push(c2.x, c2.y, c2.z), u2.subVectors(c2, d2).normalize(), h2.push(u2.x, u2.y, u2.z), l2.push(a3 / s2), l2.push(t3 / i2);
      }
    }
    for (let t3 = 1; t3 <= s2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
      const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, o3 = (i2 + 1) * (t3 - 1) + e3;
      a2.push(s3, r3, o3), a2.push(r3, n3, o3);
    }
    function f2(t3, e3, s3, i3, r3) {
      const n3 = Math.cos(t3), a3 = Math.sin(t3), o3 = s3 / e3 * t3, h3 = Math.cos(o3);
      r3.x = i3 * (2 + h3) * 0.5 * n3, r3.y = i3 * (2 + h3) * a3 * 0.5, r3.z = i3 * Math.sin(o3) * 0.5;
    }
    this.setIndex(a2), this.setAttribute("position", new wn(o2, 3)), this.setAttribute("normal", new wn(h2, 3)), this.setAttribute("uv", new wn(l2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  static fromJSON(t2) {
    return new _Bl(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
  }
};
var kl = class _kl extends In {
  constructor(t2 = new Vh(new Ks(-1, -1, 0), new Ks(-1, 1, 0), new Ks(1, 1, 0)), e2 = 64, s2 = 1, i2 = 8, r2 = false) {
    super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: s2, radialSegments: i2, closed: r2 };
    const n2 = t2.computeFrenetFrames(e2, r2);
    this.tangents = n2.tangents, this.normals = n2.normals, this.binormals = n2.binormals;
    const a2 = new Ks(), o2 = new Ks(), h2 = new $s();
    let l2 = new Ks();
    const c2 = [], u2 = [], d2 = [], p2 = [];
    function m2(r3) {
      l2 = t2.getPointAt(r3 / e2, l2);
      const h3 = n2.normals[r3], d3 = n2.binormals[r3];
      for (let t3 = 0; t3 <= i2; t3++) {
        const e3 = t3 / i2 * Math.PI * 2, r4 = Math.sin(e3), n3 = -Math.cos(e3);
        o2.x = n3 * h3.x + r4 * d3.x, o2.y = n3 * h3.y + r4 * d3.y, o2.z = n3 * h3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = l2.x + s2 * o2.x, a2.y = l2.y + s2 * o2.y, a2.z = l2.z + s2 * o2.z, c2.push(a2.x, a2.y, a2.z);
      }
    }
    !(function() {
      for (let t3 = 0; t3 < e2; t3++) m2(t3);
      m2(false === r2 ? e2 : 0), (function() {
        for (let t3 = 0; t3 <= e2; t3++) for (let s3 = 0; s3 <= i2; s3++) h2.x = t3 / e2, h2.y = s3 / i2, d2.push(h2.x, h2.y);
      })(), (function() {
        for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= i2; e3++) {
          const s3 = (i2 + 1) * (t3 - 1) + (e3 - 1), r3 = (i2 + 1) * t3 + (e3 - 1), n3 = (i2 + 1) * t3 + e3, a3 = (i2 + 1) * (t3 - 1) + e3;
          p2.push(s3, r3, a3), p2.push(r3, n3, a3);
        }
      })();
    })(), this.setIndex(p2), this.setAttribute("position", new wn(c2, 3)), this.setAttribute("normal", new wn(u2, 3)), this.setAttribute("uv", new wn(d2, 2));
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
  toJSON() {
    const t2 = super.toJSON();
    return t2.path = this.parameters.path.toJSON(), t2;
  }
  static fromJSON(t2) {
    return new _kl(new Lh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
  }
};
var El = class extends In {
  constructor(t2 = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
      const e2 = [], s2 = /* @__PURE__ */ new Set(), i2 = new Ks(), r2 = new Ks();
      if (null !== t2.index) {
        const n2 = t2.attributes.position, a2 = t2.index;
        let o2 = t2.groups;
        0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
        for (let t3 = 0, h2 = o2.length; t3 < h2; ++t3) {
          const h3 = o2[t3], l2 = h3.start;
          for (let t4 = l2, o3 = l2 + h3.count; t4 < o3; t4 += 3) for (let o4 = 0; o4 < 3; o4++) {
            const h4 = a2.getX(t4 + o4), l3 = a2.getX(t4 + (o4 + 1) % 3);
            i2.fromBufferAttribute(n2, h4), r2.fromBufferAttribute(n2, l3), true === Rl(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
          }
        }
      } else {
        const n2 = t2.attributes.position;
        for (let t3 = 0, a2 = n2.count / 3; t3 < a2; t3++) for (let a3 = 0; a3 < 3; a3++) {
          const o2 = 3 * t3 + a3, h2 = 3 * t3 + (a3 + 1) % 3;
          i2.fromBufferAttribute(n2, o2), r2.fromBufferAttribute(n2, h2), true === Rl(i2, r2, s2) && (e2.push(i2.x, i2.y, i2.z), e2.push(r2.x, r2.y, r2.z));
        }
      }
      this.setAttribute("position", new wn(e2, 3));
    }
  }
  copy(t2) {
    return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
  }
};
function Rl(t2, e2, s2) {
  const i2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
  return true !== s2.has(i2) && true !== s2.has(r2) && (s2.add(i2), s2.add(r2), true);
}
var Pl = Object.freeze({ __proto__: null, BoxGeometry: Un, CapsuleGeometry: lh, CircleGeometry: ch, ConeGeometry: dh, CylinderGeometry: uh, DodecahedronGeometry: mh, EdgesGeometry: bh, ExtrudeGeometry: bl, IcosahedronGeometry: wl, LatheGeometry: Ml, OctahedronGeometry: Sl, PlaneGeometry: _l, PolyhedronGeometry: ph, RingGeometry: Al, ShapeGeometry: Tl, SphereGeometry: zl, TetrahedronGeometry: Cl, TorusGeometry: Il, TorusKnotGeometry: Bl, TubeGeometry: kl, WireframeGeometry: El });
var Ul = class extends en {
  constructor(t2) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
  }
};
var Hl = class extends en {
  constructor(t2) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
  }
};
var Jl = class extends Ro {
  constructor(t2) {
    super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t2);
  }
  copy(t2) {
    return super.copy(t2), this.scale = t2.scale, this.dashSize = t2.dashSize, this.gapSize = t2.gapSize, this;
  }
};
function Xl(t2, e2) {
  return t2 && t2.constructor !== e2 ? "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2) : t2;
}
function Yl(t2) {
  return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
}
var Kl = class {
  constructor(t2, e2, s2, i2) {
    this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i2 ? i2 : new e2.constructor(s2), this.sampleValues = e2, this.valueSize = s2, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t2) {
    const e2 = this.parameterPositions;
    let s2 = this._cachedIndex, i2 = e2[s2], r2 = e2[s2 - 1];
    t: {
      e: {
        let n2;
        s: {
          i: if (!(t2 < i2)) {
            for (let n3 = s2 + 2; ; ) {
              if (void 0 === i2) {
                if (t2 < r2) break i;
                return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
              }
              if (s2 === n3) break;
              if (r2 = i2, i2 = e2[++s2], t2 < i2) break e;
            }
            n2 = e2.length;
            break s;
          }
          if (!(t2 >= r2)) {
            const a2 = e2[1];
            t2 < a2 && (s2 = 2, r2 = a2);
            for (let n3 = s2 - 2; ; ) {
              if (void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (s2 === n3) break;
              if (i2 = r2, r2 = e2[--s2 - 1], t2 >= r2) break e;
            }
            n2 = s2, s2 = 0;
            break s;
          }
          break t;
        }
        for (; s2 < n2; ) {
          const i3 = s2 + n2 >>> 1;
          t2 < e2[i3] ? n2 = i3 : s2 = i3 + 1;
        }
        if (i2 = e2[s2], r2 = e2[s2 - 1], void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (void 0 === i2) return s2 = e2.length, this._cachedIndex = s2, this.copySampleValue_(s2 - 1);
      }
      this._cachedIndex = s2, this.intervalChanged_(s2, r2, i2);
    }
    return this.interpolate_(s2, r2, t2, i2);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t2) {
    const e2 = this.resultBuffer, s2 = this.sampleValues, i2 = this.valueSize, r2 = t2 * i2;
    for (let t3 = 0; t3 !== i2; ++t3) e2[t3] = s2[r2 + t3];
    return e2;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
};
var tc = class extends Kl {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Pe, endingEnd: Pe };
  }
  intervalChanged_(t2, e2, s2) {
    const i2 = this.parameterPositions;
    let r2 = t2 - 2, n2 = t2 + 1, a2 = i2[r2], o2 = i2[n2];
    if (void 0 === a2) switch (this.getSettings_().endingStart) {
      case Oe:
        r2 = t2, a2 = 2 * e2 - s2;
        break;
      case Ne:
        r2 = i2.length - 2, a2 = e2 + i2[r2] - i2[r2 + 1];
        break;
      default:
        r2 = t2, a2 = s2;
    }
    if (void 0 === o2) switch (this.getSettings_().endingEnd) {
      case Oe:
        n2 = t2, o2 = 2 * s2 - e2;
        break;
      case Ne:
        n2 = 1, o2 = s2 + i2[1] - i2[0];
        break;
      default:
        n2 = t2 - 1, o2 = e2;
    }
    const h2 = 0.5 * (s2 - e2), l2 = this.valueSize;
    this._weightPrev = h2 / (e2 - a2), this._weightNext = h2 / (o2 - s2), this._offsetPrev = r2 * l2, this._offsetNext = n2 * l2;
  }
  interpolate_(t2, e2, s2, i2) {
    const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this._offsetPrev, c2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (s2 - e2) / (i2 - e2), m2 = p2 * p2, y2 = m2 * p2, g2 = -u2 * y2 + 2 * u2 * m2 - u2 * p2, f2 = (1 + u2) * y2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * y2 + (1.5 + d2) * m2 + 0.5 * p2, b2 = d2 * y2 - d2 * m2;
    for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = g2 * n2[l2 + t3] + f2 * n2[h2 + t3] + x2 * n2[o2 + t3] + b2 * n2[c2 + t3];
    return r2;
  }
};
var ec = class extends Kl {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
  interpolate_(t2, e2, s2, i2) {
    const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = (s2 - e2) / (i2 - e2), c2 = 1 - l2;
    for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = n2[h2 + t3] * c2 + n2[o2 + t3] * l2;
    return r2;
  }
};
var sc = class extends Kl {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
  interpolate_(t2) {
    return this.copySampleValue_(t2 - 1);
  }
};
var ic = class {
  constructor(t2, e2, s2, i2) {
    if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
    this.name = t2, this.times = Xl(e2, this.TimeBufferType), this.values = Xl(s2, this.ValueBufferType), this.setInterpolation(i2 || this.DefaultInterpolation);
  }
  static toJSON(t2) {
    const e2 = t2.constructor;
    let s2;
    if (e2.toJSON !== this.toJSON) s2 = e2.toJSON(t2);
    else {
      s2 = { name: t2.name, times: Xl(t2.times, Array), values: Xl(t2.values, Array) };
      const e3 = t2.getInterpolation();
      e3 !== t2.DefaultInterpolation && (s2.interpolation = e3);
    }
    return s2.type = t2.ValueTypeName, s2;
  }
  InterpolantFactoryMethodDiscrete(t2) {
    return new sc(this.times, this.values, this.getValueSize(), t2);
  }
  InterpolantFactoryMethodLinear(t2) {
    return new ec(this.times, this.values, this.getValueSize(), t2);
  }
  InterpolantFactoryMethodSmooth(t2) {
    return new tc(this.times, this.values, this.getValueSize(), t2);
  }
  setInterpolation(t2) {
    let e2;
    switch (t2) {
      case ke:
        e2 = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ee:
        e2 = this.InterpolantFactoryMethodLinear;
        break;
      case Re:
        e2 = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === e2) {
      const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (void 0 === this.createInterpolant) {
        if (t2 === this.DefaultInterpolation) throw new Error(e3);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("THREE.KeyframeTrack:", e3), this;
    }
    return this.createInterpolant = e2, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return ke;
      case this.InterpolantFactoryMethodLinear:
        return Ee;
      case this.InterpolantFactoryMethodSmooth:
        return Re;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(t2) {
    if (0 !== t2) {
      const e2 = this.times;
      for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] += t2;
    }
    return this;
  }
  scale(t2) {
    if (1 !== t2) {
      const e2 = this.times;
      for (let s2 = 0, i2 = e2.length; s2 !== i2; ++s2) e2[s2] *= t2;
    }
    return this;
  }
  trim(t2, e2) {
    const s2 = this.times, i2 = s2.length;
    let r2 = 0, n2 = i2 - 1;
    for (; r2 !== i2 && s2[r2] < t2; ) ++r2;
    for (; -1 !== n2 && s2[n2] > e2; ) --n2;
    if (++n2, 0 !== r2 || n2 !== i2) {
      r2 >= n2 && (n2 = Math.max(n2, 1), r2 = n2 - 1);
      const t3 = this.getValueSize();
      this.times = s2.slice(r2, n2), this.values = this.values.slice(r2 * t3, n2 * t3);
    }
    return this;
  }
  validate() {
    let t2 = true;
    const e2 = this.getValueSize();
    e2 - Math.floor(e2) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
    const s2 = this.times, i2 = this.values, r2 = s2.length;
    0 === r2 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
    let n2 = null;
    for (let e3 = 0; e3 !== r2; e3++) {
      const i3 = s2[e3];
      if ("number" == typeof i3 && isNaN(i3)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e3, i3), t2 = false;
        break;
      }
      if (null !== n2 && n2 > i3) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, e3, i3, n2), t2 = false;
        break;
      }
      n2 = i3;
    }
    if (void 0 !== i2 && Yl(i2)) for (let e3 = 0, s3 = i2.length; e3 !== s3; ++e3) {
      const s4 = i2[e3];
      if (isNaN(s4)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e3, s4), t2 = false;
        break;
      }
    }
    return t2;
  }
  optimize() {
    const t2 = this.times.slice(), e2 = this.values.slice(), s2 = this.getValueSize(), i2 = this.getInterpolation() === Re, r2 = t2.length - 1;
    let n2 = 1;
    for (let a2 = 1; a2 < r2; ++a2) {
      let r3 = false;
      const o2 = t2[a2];
      if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0])) if (i2) r3 = true;
      else {
        const t3 = a2 * s2, i3 = t3 - s2, n3 = t3 + s2;
        for (let a3 = 0; a3 !== s2; ++a3) {
          const s3 = e2[t3 + a3];
          if (s3 !== e2[i3 + a3] || s3 !== e2[n3 + a3]) {
            r3 = true;
            break;
          }
        }
      }
      if (r3) {
        if (a2 !== n2) {
          t2[n2] = t2[a2];
          const i3 = a2 * s2, r4 = n2 * s2;
          for (let t3 = 0; t3 !== s2; ++t3) e2[r4 + t3] = e2[i3 + t3];
        }
        ++n2;
      }
    }
    if (r2 > 0) {
      t2[n2] = t2[r2];
      for (let t3 = r2 * s2, i3 = n2 * s2, a2 = 0; a2 !== s2; ++a2) e2[i3 + a2] = e2[t3 + a2];
      ++n2;
    }
    return n2 !== t2.length ? (this.times = t2.slice(0, n2), this.values = e2.slice(0, n2 * s2)) : (this.times = t2, this.values = e2), this;
  }
  clone() {
    const t2 = this.times.slice(), e2 = this.values.slice(), s2 = new (0, this.constructor)(this.name, t2, e2);
    return s2.createInterpolant = this.createInterpolant, s2;
  }
};
ic.prototype.ValueTypeName = "", ic.prototype.TimeBufferType = Float32Array, ic.prototype.ValueBufferType = Float32Array, ic.prototype.DefaultInterpolation = Ee;
var rc = class extends ic {
  constructor(t2, e2, s2) {
    super(t2, e2, s2);
  }
};
rc.prototype.ValueTypeName = "bool", rc.prototype.ValueBufferType = Array, rc.prototype.DefaultInterpolation = ke, rc.prototype.InterpolantFactoryMethodLinear = void 0, rc.prototype.InterpolantFactoryMethodSmooth = void 0;
var nc = class extends ic {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
};
nc.prototype.ValueTypeName = "color";
var ac = class extends ic {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
};
ac.prototype.ValueTypeName = "number";
var oc = class extends Kl {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
  interpolate_(t2, e2, s2, i2) {
    const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = (s2 - e2) / (i2 - e2);
    let h2 = t2 * a2;
    for (let t3 = h2 + a2; h2 !== t3; h2 += 4) Qs.slerpFlat(r2, 0, n2, h2 - a2, n2, h2, o2);
    return r2;
  }
};
var hc = class extends ic {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
  InterpolantFactoryMethodLinear(t2) {
    return new oc(this.times, this.values, this.getValueSize(), t2);
  }
};
hc.prototype.ValueTypeName = "quaternion", hc.prototype.InterpolantFactoryMethodSmooth = void 0;
var lc = class extends ic {
  constructor(t2, e2, s2) {
    super(t2, e2, s2);
  }
};
lc.prototype.ValueTypeName = "string", lc.prototype.ValueBufferType = Array, lc.prototype.DefaultInterpolation = ke, lc.prototype.InterpolantFactoryMethodLinear = void 0, lc.prototype.InterpolantFactoryMethodSmooth = void 0;
var cc = class extends ic {
  constructor(t2, e2, s2, i2) {
    super(t2, e2, s2, i2);
  }
};
cc.prototype.ValueTypeName = "vector";
var pc = { enabled: false, files: {}, add: function(t2, e2) {
  false !== this.enabled && (this.files[t2] = e2);
}, get: function(t2) {
  if (false !== this.enabled) return this.files[t2];
}, remove: function(t2) {
  delete this.files[t2];
}, clear: function() {
  this.files = {};
} };
var mc = class {
  constructor(t2, e2, s2) {
    const i2 = this;
    let r2, n2 = false, a2 = 0, o2 = 0;
    const h2 = [];
    this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = s2, this.abortController = new AbortController(), this.itemStart = function(t3) {
      o2++, false === n2 && void 0 !== i2.onStart && i2.onStart(t3, a2, o2), n2 = true;
    }, this.itemEnd = function(t3) {
      a2++, void 0 !== i2.onProgress && i2.onProgress(t3, a2, o2), a2 === o2 && (n2 = false, void 0 !== i2.onLoad && i2.onLoad());
    }, this.itemError = function(t3) {
      void 0 !== i2.onError && i2.onError(t3);
    }, this.resolveURL = function(t3) {
      return r2 ? r2(t3) : t3;
    }, this.setURLModifier = function(t3) {
      return r2 = t3, this;
    }, this.addHandler = function(t3, e3) {
      return h2.push(t3, e3), this;
    }, this.removeHandler = function(t3) {
      const e3 = h2.indexOf(t3);
      return -1 !== e3 && h2.splice(e3, 2), this;
    }, this.getHandler = function(t3) {
      for (let e3 = 0, s3 = h2.length; e3 < s3; e3 += 2) {
        const s4 = h2[e3], i3 = h2[e3 + 1];
        if (s4.global && (s4.lastIndex = 0), s4.test(t3)) return i3;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
};
var yc = new mc();
var gc = class {
  constructor(t2) {
    this.manager = void 0 !== t2 ? t2 : yc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t2, e2) {
    const s2 = this;
    return new Promise(function(i2, r2) {
      s2.load(t2, i2, e2, r2);
    });
  }
  parse() {
  }
  setCrossOrigin(t2) {
    return this.crossOrigin = t2, this;
  }
  setWithCredentials(t2) {
    return this.withCredentials = t2, this;
  }
  setPath(t2) {
    return this.path = t2, this;
  }
  setResourcePath(t2) {
    return this.resourcePath = t2, this;
  }
  setRequestHeader(t2) {
    return this.requestHeader = t2, this;
  }
  abort() {
    return this;
  }
};
gc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Mc = /* @__PURE__ */ new WeakMap();
var Sc = class extends gc {
  constructor(t2) {
    super(t2);
  }
  load(t2, e2, s2, i2) {
    void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
    const r2 = this, n2 = pc.get(`image:${t2}`);
    if (void 0 !== n2) {
      if (true === n2.complete) r2.manager.itemStart(t2), setTimeout(function() {
        e2 && e2(n2), r2.manager.itemEnd(t2);
      }, 0);
      else {
        let t3 = Mc.get(n2);
        void 0 === t3 && (t3 = [], Mc.set(n2, t3)), t3.push({ onLoad: e2, onError: i2 });
      }
      return n2;
    }
    const a2 = oi("img");
    function o2() {
      l2(), e2 && e2(this);
      const s3 = Mc.get(this) || [];
      for (let t3 = 0; t3 < s3.length; t3++) {
        const e3 = s3[t3];
        e3.onLoad && e3.onLoad(this);
      }
      Mc.delete(this), r2.manager.itemEnd(t2);
    }
    function h2(e3) {
      l2(), i2 && i2(e3), pc.remove(`image:${t2}`);
      const s3 = Mc.get(this) || [];
      for (let t3 = 0; t3 < s3.length; t3++) {
        const i3 = s3[t3];
        i3.onError && i3.onError(e3);
      }
      Mc.delete(this), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
    }
    function l2() {
      a2.removeEventListener("load", o2, false), a2.removeEventListener("error", h2, false);
    }
    return a2.addEventListener("load", o2, false), a2.addEventListener("error", h2, false), "data:" !== t2.slice(0, 5) && void 0 !== this.crossOrigin && (a2.crossOrigin = this.crossOrigin), pc.add(`image:${t2}`, a2), r2.manager.itemStart(t2), a2.src = t2, a2;
  }
};
var Tc = class extends gc {
  constructor(t2) {
    super(t2);
  }
  load(t2, e2, s2, i2) {
    const r2 = new Ai(), n2 = new Sc(this.manager);
    return n2.setCrossOrigin(this.crossOrigin), n2.setPath(this.path), n2.load(t2, function(t3) {
      r2.image = t3, r2.needsUpdate = true, void 0 !== e2 && e2(r2);
    }, s2, i2), r2;
  }
};
var Ic = new ar();
var Bc = new Ks();
var kc = new Ks();
var Oc = new ar();
var Nc = new Ks();
var Vc = new Ks();
var jc = class extends Zn {
  constructor(t2 = -1, e2 = 1, s2 = 1, i2 = -1, r2 = 0.1, n2 = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = s2, this.bottom = i2, this.near = r2, this.far = n2, this.updateProjectionMatrix();
  }
  copy(t2, e2) {
    return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
  }
  setViewOffset(t2, e2, s2, i2, r2, n2) {
    null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = s2, this.view.offsetY = i2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), s2 = (this.right + this.left) / 2, i2 = (this.top + this.bottom) / 2;
    let r2 = s2 - t2, n2 = s2 + t2, a2 = i2 + e2, o2 = i2 - e2;
    if (null !== this.view && this.view.enabled) {
      const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r2 += t3 * this.view.offsetX, n2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r2, n2, a2, o2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t2) {
    const e2 = super.toJSON(t2);
    return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
  }
};
var au = new ar();
var ou = new ar();
var hu = new ar();
var cu = class extends Kn {
  constructor(t2 = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t2;
  }
};
var du = new Ks();
var pu = new Qs();
var mu = new Ks();
var yu = new Ks();
var gu = new Ks();
var bu = new Ks();
var vu = new Qs();
var wu = new Ks();
var Mu = new Ks();
var Tu = "\\[\\]\\.:\\/";
var zu = new RegExp("[" + Tu + "]", "g");
var Cu = "[^" + Tu + "]";
var Iu = "[^" + Tu.replace("\\.", "") + "]";
var Bu = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Cu) + /(WCOD+)?/.source.replace("WCOD", Iu) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Cu) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Cu) + "$");
var ku = ["material", "materials", "bones", "map"];
var Eu = class _Eu {
  constructor(t2, e2, s2) {
    this.path = e2, this.parsedPath = s2 || _Eu.parseTrackName(e2), this.node = _Eu.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t2, e2, s2) {
    return t2 && t2.isAnimationObjectGroup ? new _Eu.Composite(t2, e2, s2) : new _Eu(t2, e2, s2);
  }
  static sanitizeNodeName(t2) {
    return t2.replace(/\s/g, "_").replace(zu, "");
  }
  static parseTrackName(t2) {
    const e2 = Bu.exec(t2);
    if (null === e2) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
    const s2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, i2 = s2.nodeName && s2.nodeName.lastIndexOf(".");
    if (void 0 !== i2 && -1 !== i2) {
      const t3 = s2.nodeName.substring(i2 + 1);
      -1 !== ku.indexOf(t3) && (s2.nodeName = s2.nodeName.substring(0, i2), s2.objectName = t3);
    }
    if (null === s2.propertyName || 0 === s2.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
    return s2;
  }
  static findNode(t2, e2) {
    if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
    if (t2.skeleton) {
      const s2 = t2.skeleton.getBoneByName(e2);
      if (void 0 !== s2) return s2;
    }
    if (t2.children) {
      const s2 = function(t3) {
        for (let i3 = 0; i3 < t3.length; i3++) {
          const r2 = t3[i3];
          if (r2.name === e2 || r2.uuid === e2) return r2;
          const n2 = s2(r2.children);
          if (n2) return n2;
        }
        return null;
      }, i2 = s2(t2.children);
      if (i2) return i2;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t2, e2) {
    t2[e2] = this.targetObject[this.propertyName];
  }
  _getValue_array(t2, e2) {
    const s2 = this.resolvedProperty;
    for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) t2[e2++] = s2[i2];
  }
  _getValue_arrayElement(t2, e2) {
    t2[e2] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t2, e2) {
    this.resolvedProperty.toArray(t2, e2);
  }
  _setValue_direct(t2, e2) {
    this.targetObject[this.propertyName] = t2[e2];
  }
  _setValue_direct_setNeedsUpdate(t2, e2) {
    this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
    this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(t2, e2) {
    const s2 = this.resolvedProperty;
    for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
  }
  _setValue_array_setNeedsUpdate(t2, e2) {
    const s2 = this.resolvedProperty;
    for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
    const s2 = this.resolvedProperty;
    for (let i2 = 0, r2 = s2.length; i2 !== r2; ++i2) s2[i2] = t2[e2++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(t2, e2) {
    this.resolvedProperty[this.propertyIndex] = t2[e2];
  }
  _setValue_arrayElement_setNeedsUpdate(t2, e2) {
    this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
    this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(t2, e2) {
    this.resolvedProperty.fromArray(t2, e2);
  }
  _setValue_fromArray_setNeedsUpdate(t2, e2) {
    this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
    this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(t2, e2) {
    this.bind(), this.getValue(t2, e2);
  }
  _setValue_unbound(t2, e2) {
    this.bind(), this.setValue(t2, e2);
  }
  bind() {
    let t2 = this.node;
    const e2 = this.parsedPath, s2 = e2.objectName, i2 = e2.propertyName;
    let r2 = e2.propertyIndex;
    if (t2 || (t2 = _Eu.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
    if (s2) {
      let i3 = e2.objectIndex;
      switch (s2) {
        case "materials":
          if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
          if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
          t2 = t2.material.materials;
          break;
        case "bones":
          if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
          t2 = t2.skeleton.bones;
          for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === i3) {
            i3 = e3;
            break;
          }
          break;
        case "map":
          if ("map" in t2) {
            t2 = t2.map;
            break;
          }
          if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
          if (!t2.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
          t2 = t2.material.map;
          break;
        default:
          if (void 0 === t2[s2]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
          t2 = t2[s2];
      }
      if (void 0 !== i3) {
        if (void 0 === t2[i3]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
        t2 = t2[i3];
      }
    }
    const n2 = t2[i2];
    if (void 0 === n2) {
      const s3 = e2.nodeName;
      return void console.error("THREE.PropertyBinding: Trying to update property for track: " + s3 + "." + i2 + " but it wasn't found.", t2);
    }
    let a2 = this.Versioning.None;
    this.targetObject = t2, true === t2.isMaterial ? a2 = this.Versioning.NeedsUpdate : true === t2.isObject3D && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
    let o2 = this.BindingType.Direct;
    if (void 0 !== r2) {
      if ("morphTargetInfluences" === i2) {
        if (!t2.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
        if (!t2.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
        void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
      }
      o2 = this.BindingType.ArrayElement, this.resolvedProperty = n2, this.propertyIndex = r2;
    } else void 0 !== n2.fromArray && void 0 !== n2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = n2) : Array.isArray(n2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = n2) : this.propertyName = i2;
    this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
Eu.Composite = class {
  constructor(t2, e2, s2) {
    const i2 = s2 || Eu.parseTrackName(e2);
    this._targetGroup = t2, this._bindings = t2.subscribe_(e2, i2);
  }
  getValue(t2, e2) {
    this.bind();
    const s2 = this._targetGroup.nCachedObjects_, i2 = this._bindings[s2];
    void 0 !== i2 && i2.getValue(t2, e2);
  }
  setValue(t2, e2) {
    const s2 = this._bindings;
    for (let i2 = this._targetGroup.nCachedObjects_, r2 = s2.length; i2 !== r2; ++i2) s2[i2].setValue(t2, e2);
  }
  bind() {
    const t2 = this._bindings;
    for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].bind();
  }
  unbind() {
    const t2 = this._bindings;
    for (let e2 = this._targetGroup.nCachedObjects_, s2 = t2.length; e2 !== s2; ++e2) t2[e2].unbind();
  }
}, Eu.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Eu.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Eu.prototype.GetterByBindingType = [Eu.prototype._getValue_direct, Eu.prototype._getValue_array, Eu.prototype._getValue_arrayElement, Eu.prototype._getValue_toArray], Eu.prototype.SetterByBindingTypeAndVersioning = [[Eu.prototype._setValue_direct, Eu.prototype._setValue_direct_setNeedsUpdate, Eu.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_array, Eu.prototype._setValue_array_setNeedsUpdate, Eu.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_arrayElement, Eu.prototype._setValue_arrayElement_setNeedsUpdate, Eu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Eu.prototype._setValue_fromArray, Eu.prototype._setValue_fromArray_setNeedsUpdate, Eu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var Ou = new Float32Array(1);
var Uu = new ar();
var Qu = new $s();
var td = new Ks();
var ed = new Ks();
var sd = new Ks();
var id = new Ks();
var rd = new Ks();
var nd = new Ks();
var ad = new Ks();
var hd = new Ks();
var cd = new Ks();
var ud = new ar();
var dd = new ar();
var gd = new Ks();
var fd = new Qr();
var xd = new Qr();
var Md = new Ks();
var Sd = new Ks();
var _d = new Ks();
var Td = new Ks();
var zd = new Zn();
var Bd = new Ri();
var Pd = new Ks();
function Dd(t2, e2, s2, i2) {
  const r2 = (function(t3) {
    switch (t3) {
      case Tt:
      case zt:
        return { byteLength: 1, components: 1 };
      case It:
      case Ct:
      case Rt:
        return { byteLength: 2, components: 1 };
      case Pt:
      case Ot:
        return { byteLength: 2, components: 4 };
      case kt:
      case Bt:
      case Et:
        return { byteLength: 4, components: 1 };
      case Vt:
      case Ft:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`Unknown texture type ${t3}.`);
  })(i2);
  switch (s2) {
    case 1021:
      return t2 * e2;
    case Ht:
    case qt:
      return t2 * e2 / r2.components * r2.byteLength;
    case 1030:
    case 1031:
      return t2 * e2 * 2 / r2.components * r2.byteLength;
    case 1022:
      return t2 * e2 * 3 / r2.components * r2.byteLength;
    case Dt:
    case 1033:
      return t2 * e2 * 4 / r2.components * r2.byteLength;
    case 33776:
    case 33777:
      return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(t2, 16) * Math.max(e2, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(t2, 8) * Math.max(e2, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
    case 37496:
    case 37808:
      return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
    case 37809:
      return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 3) / 4) * 16;
    case 37810:
      return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 4) / 5) * 16;
    case 37811:
      return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 4) / 5) * 16;
    case 37812:
      return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 5) / 6) * 16;
    case 37813:
      return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 4) / 5) * 16;
    case 37814:
      return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 5) / 6) * 16;
    case 37815:
      return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 7) / 8) * 16;
    case 37816:
      return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 4) / 5) * 16;
    case 37817:
      return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 5) / 6) * 16;
    case 37818:
      return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 7) / 8) * 16;
    case 37819:
      return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 9) / 10) * 16;
    case 37820:
      return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 9) / 10) * 16;
    case 37821:
      return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${s2} format.`);
}
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

// assets/vendor/three.module.min.js
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Cn2() {
  let e2 = null, t2 = false, n2 = null, r2 = null;
  function i2(t3, a2) {
    n2(t3, a2), r2 = e2.requestAnimationFrame(i2);
  }
  return { start: function() {
    true !== t2 && null !== n2 && (r2 = e2.requestAnimationFrame(i2), t2 = true);
  }, stop: function() {
    e2.cancelAnimationFrame(r2), t2 = false;
  }, setAnimationLoop: function(e3) {
    n2 = e3;
  }, setContext: function(t3) {
    e2 = t3;
  } };
}
function Ln2(e2) {
  const t2 = /* @__PURE__ */ new WeakMap();
  return { get: function(e3) {
    return e3.isInterleavedBufferAttribute && (e3 = e3.data), t2.get(e3);
  }, remove: function(n2) {
    n2.isInterleavedBufferAttribute && (n2 = n2.data);
    const r2 = t2.get(n2);
    r2 && (e2.deleteBuffer(r2.buffer), t2.delete(n2));
  }, update: function(n2, r2) {
    if (n2.isInterleavedBufferAttribute && (n2 = n2.data), n2.isGLBufferAttribute) {
      const e3 = t2.get(n2);
      return void ((!e3 || e3.version < n2.version) && t2.set(n2, { buffer: n2.buffer, type: n2.type, bytesPerElement: n2.elementSize, version: n2.version }));
    }
    const i2 = t2.get(n2);
    if (void 0 === i2) t2.set(n2, (function(t3, n3) {
      const r3 = t3.array, i3 = t3.usage, a2 = r3.byteLength, o2 = e2.createBuffer();
      let s2;
      if (e2.bindBuffer(n3, o2), e2.bufferData(n3, r3, i3), t3.onUploadCallback(), r3 instanceof Float32Array) s2 = e2.FLOAT;
      else if ("undefined" != typeof Float16Array && r3 instanceof Float16Array) s2 = e2.HALF_FLOAT;
      else if (r3 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e2.HALF_FLOAT : e2.UNSIGNED_SHORT;
      else if (r3 instanceof Int16Array) s2 = e2.SHORT;
      else if (r3 instanceof Uint32Array) s2 = e2.UNSIGNED_INT;
      else if (r3 instanceof Int32Array) s2 = e2.INT;
      else if (r3 instanceof Int8Array) s2 = e2.BYTE;
      else if (r3 instanceof Uint8Array) s2 = e2.UNSIGNED_BYTE;
      else {
        if (!(r3 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r3);
        s2 = e2.UNSIGNED_BYTE;
      }
      return { buffer: o2, type: s2, bytesPerElement: r3.BYTES_PER_ELEMENT, version: t3.version, size: a2 };
    })(n2, r2));
    else if (i2.version < n2.version) {
      if (i2.size !== n2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      !(function(t3, n3, r3) {
        const i3 = n3.array, a2 = n3.updateRanges;
        if (e2.bindBuffer(r3, t3), 0 === a2.length) e2.bufferSubData(r3, 0, i3);
        else {
          a2.sort((e3, t5) => e3.start - t5.start);
          let t4 = 0;
          for (let e3 = 1; e3 < a2.length; e3++) {
            const n4 = a2[t4], r4 = a2[e3];
            r4.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, r4.start + r4.count - n4.start) : (++t4, a2[t4] = r4);
          }
          a2.length = t4 + 1;
          for (let t5 = 0, n4 = a2.length; t5 < n4; t5++) {
            const n5 = a2[t5];
            e2.bufferSubData(r3, n5.start * i3.BYTES_PER_ELEMENT, i3, n5.start, n5.count);
          }
          n3.clearUpdateRanges();
        }
        n3.onUploadCallback();
      })(i2.buffer, n2, r2), i2.version = n2.version;
    }
  } };
}
var Pn2 = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			return step( depth, compare );\n		#else\n			return step( compare, depth );\n		#endif\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			float hard_shadow = step( distribution.x, compare );\n		#else\n			float hard_shadow = step( compare, distribution.x );\n		#endif\n		if ( hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
var Un2 = { common: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new si() }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new si() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new si() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new si() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new si() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new si() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new si() }, normalScale: { value: new $s(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new si() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new si() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new si() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new si() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Qr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 }, uvTransform: { value: new si() } }, sprite: { diffuse: { value: new Qr(16777215) }, opacity: { value: 1 }, center: { value: new $s(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new si() }, alphaMap: { value: null }, alphaMapTransform: { value: new si() }, alphaTest: { value: 0 } } };
var Dn2 = { basic: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.fog]), vertexShader: Pn2.meshbasic_vert, fragmentShader: Pn2.meshbasic_frag }, lambert: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) } }]), vertexShader: Pn2.meshlambert_vert, fragmentShader: Pn2.meshlambert_frag }, phong: { uniforms: qn([Un2.common, Un2.specularmap, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) }, specular: { value: new Qr(1118481) }, shininess: { value: 30 } }]), vertexShader: Pn2.meshphong_vert, fragmentShader: Pn2.meshphong_frag }, standard: { uniforms: qn([Un2.common, Un2.envmap, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.roughnessmap, Un2.metalnessmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Pn2.meshphysical_vert, fragmentShader: Pn2.meshphysical_frag }, toon: { uniforms: qn([Un2.common, Un2.aomap, Un2.lightmap, Un2.emissivemap, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.gradientmap, Un2.fog, Un2.lights, { emissive: { value: new Qr(0) } }]), vertexShader: Pn2.meshtoon_vert, fragmentShader: Pn2.meshtoon_frag }, matcap: { uniforms: qn([Un2.common, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, Un2.fog, { matcap: { value: null } }]), vertexShader: Pn2.meshmatcap_vert, fragmentShader: Pn2.meshmatcap_frag }, points: { uniforms: qn([Un2.points, Un2.fog]), vertexShader: Pn2.points_vert, fragmentShader: Pn2.points_frag }, dashed: { uniforms: qn([Un2.common, Un2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Pn2.linedashed_vert, fragmentShader: Pn2.linedashed_frag }, depth: { uniforms: qn([Un2.common, Un2.displacementmap]), vertexShader: Pn2.depth_vert, fragmentShader: Pn2.depth_frag }, normal: { uniforms: qn([Un2.common, Un2.bumpmap, Un2.normalmap, Un2.displacementmap, { opacity: { value: 1 } }]), vertexShader: Pn2.meshnormal_vert, fragmentShader: Pn2.meshnormal_frag }, sprite: { uniforms: qn([Un2.sprite, Un2.fog]), vertexShader: Pn2.sprite_vert, fragmentShader: Pn2.sprite_frag }, background: { uniforms: { uvTransform: { value: new si() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Pn2.background_vert, fragmentShader: Pn2.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new si() } }, vertexShader: Pn2.backgroundCube_vert, fragmentShader: Pn2.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Pn2.cube_vert, fragmentShader: Pn2.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Pn2.equirect_vert, fragmentShader: Pn2.equirect_frag }, distanceRGBA: { uniforms: qn([Un2.common, Un2.displacementmap, { referencePosition: { value: new Ks() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Pn2.distanceRGBA_vert, fragmentShader: Pn2.distanceRGBA_frag }, shadow: { uniforms: qn([Un2.lights, Un2.fog, { color: { value: new Qr(0) }, opacity: { value: 1 } }]), vertexShader: Pn2.shadow_vert, fragmentShader: Pn2.shadow_frag } };
Dn2.physical = { uniforms: qn([Dn2.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new si() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new si() }, clearcoatNormalScale: { value: new $s(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new si() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new si() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new si() }, sheen: { value: 0 }, sheenColor: { value: new Qr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new si() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new si() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new si() }, transmissionSamplerSize: { value: new $s() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new si() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Qr(0) }, specularColor: { value: new Qr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new si() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new si() }, anisotropyVector: { value: new $s() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new si() } }]), vertexShader: Pn2.meshphysical_vert, fragmentShader: Pn2.meshphysical_frag };
var wn2 = { r: 0, b: 0, g: 0 };
var In2 = new gr();
var yn2 = new ar();
function Nn2(e2, t2, r2, i2, u2, f2, v2) {
  const E2 = new Qr(0);
  let S2, T2, M2 = true === f2 ? 0 : 1, x2 = null, R2 = 0, A2 = null;
  function b2(e3) {
    let n2 = true === e3.isScene ? e3.background : null;
    if (n2 && n2.isTexture) {
      n2 = (e3.backgroundBlurriness > 0 ? r2 : t2).get(n2);
    }
    return n2;
  }
  function C2(t3, n2) {
    t3.getRGB(wn2, Jn(e2)), i2.buffers.color.setClear(wn2.r, wn2.g, wn2.b, n2, v2);
  }
  return { getClearColor: function() {
    return E2;
  }, setClearColor: function(e3, t3 = 1) {
    E2.set(e3), M2 = t3, C2(E2, M2);
  }, getClearAlpha: function() {
    return M2;
  }, setClearAlpha: function(e3) {
    M2 = e3, C2(E2, M2);
  }, render: function(t3) {
    let n2 = false;
    const r3 = b2(t3);
    null === r3 ? C2(E2, M2) : r3 && r3.isColor && (C2(r3, 1), n2 = true);
    const a2 = e2.xr.getEnvironmentBlendMode();
    "additive" === a2 ? i2.buffers.color.setClear(0, 0, 0, 1, v2) : "alpha-blend" === a2 && i2.buffers.color.setClear(0, 0, 0, 0, v2), (e2.autoClear || n2) && (i2.buffers.depth.setTest(true), i2.buffers.depth.setMask(true), i2.buffers.color.setMask(true), e2.clear(e2.autoClearColor, e2.autoClearDepth, e2.autoClearStencil));
  }, addToRenderList: function(t3, n2) {
    const r3 = b2(n2);
    r3 && (r3.isCubeTexture || r3.mapping === dt) ? (void 0 === T2 && (T2 = new Dn(new Un(1, 1, 1), new Yn({ name: "BackgroundCubeMaterial", uniforms: Hn(Dn2.backgroundCube.uniforms), vertexShader: Dn2.backgroundCube.vertexShader, fragmentShader: Dn2.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), T2.geometry.deleteAttribute("normal"), T2.geometry.deleteAttribute("uv"), T2.onBeforeRender = function(e3, t4, n3) {
      this.matrixWorld.copyPosition(n3.matrixWorld);
    }, Object.defineProperty(T2.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), u2.update(T2)), In2.copy(n2.backgroundRotation), In2.x *= -1, In2.y *= -1, In2.z *= -1, r3.isCubeTexture && false === r3.isRenderTargetTexture && (In2.y *= -1, In2.z *= -1), T2.material.uniforms.envMap.value = r3, T2.material.uniforms.flipEnvMap.value = r3.isCubeTexture && false === r3.isRenderTargetTexture ? -1 : 1, T2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, T2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, T2.material.uniforms.backgroundRotation.value.setFromMatrix4(yn2.makeRotationFromEuler(In2)), T2.material.toneMapped = yi.getTransfer(r3.colorSpace) !== Qe, x2 === r3 && R2 === r3.version && A2 === e2.toneMapping || (T2.material.needsUpdate = true, x2 = r3, R2 = r3.version, A2 = e2.toneMapping), T2.layers.enableAll(), t3.unshift(T2, T2.geometry, T2.material, 0, 0, null)) : r3 && r3.isTexture && (void 0 === S2 && (S2 = new Dn(new _l(2, 2), new Yn({ name: "BackgroundMaterial", uniforms: Hn(Dn2.background.uniforms), vertexShader: Dn2.background.vertexShader, fragmentShader: Dn2.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), S2.geometry.deleteAttribute("normal"), Object.defineProperty(S2.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), u2.update(S2)), S2.material.uniforms.t2D.value = r3, S2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, S2.material.toneMapped = yi.getTransfer(r3.colorSpace) !== Qe, true === r3.matrixAutoUpdate && r3.updateMatrix(), S2.material.uniforms.uvTransform.value.copy(r3.matrix), x2 === r3 && R2 === r3.version && A2 === e2.toneMapping || (S2.material.needsUpdate = true, x2 = r3, R2 = r3.version, A2 = e2.toneMapping), S2.layers.enableAll(), t3.unshift(S2, S2.geometry, S2.material, 0, 0, null));
  }, dispose: function() {
    void 0 !== T2 && (T2.geometry.dispose(), T2.material.dispose(), T2 = void 0), void 0 !== S2 && (S2.geometry.dispose(), S2.material.dispose(), S2 = void 0);
  } };
}
function On2(e2, t2) {
  const n2 = e2.getParameter(e2.MAX_VERTEX_ATTRIBS), r2 = {}, i2 = c2(null);
  let a2 = i2, o2 = false;
  function s2(t3) {
    return e2.bindVertexArray(t3);
  }
  function l2(t3) {
    return e2.deleteVertexArray(t3);
  }
  function c2(e3) {
    const t3 = [], r3 = [], i3 = [];
    for (let e4 = 0; e4 < n2; e4++) t3[e4] = 0, r3[e4] = 0, i3[e4] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: t3, enabledAttributes: r3, attributeDivisors: i3, object: e3, attributes: {}, index: null };
  }
  function d2() {
    const e3 = a2.newAttributes;
    for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) e3[t3] = 0;
  }
  function u2(e3) {
    f2(e3, 0);
  }
  function f2(t3, n3) {
    const r3 = a2.newAttributes, i3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
    r3[t3] = 1, 0 === i3[t3] && (e2.enableVertexAttribArray(t3), i3[t3] = 1), o3[t3] !== n3 && (e2.vertexAttribDivisor(t3, n3), o3[t3] = n3);
  }
  function p2() {
    const t3 = a2.newAttributes, n3 = a2.enabledAttributes;
    for (let r3 = 0, i3 = n3.length; r3 < i3; r3++) n3[r3] !== t3[r3] && (e2.disableVertexAttribArray(r3), n3[r3] = 0);
  }
  function m2(t3, n3, r3, i3, a3, o3, s3) {
    true === s3 ? e2.vertexAttribIPointer(t3, n3, r3, a3, o3) : e2.vertexAttribPointer(t3, n3, r3, i3, a3, o3);
  }
  function h2() {
    _2(), o2 = true, a2 !== i2 && (a2 = i2, s2(a2.object));
  }
  function _2() {
    i2.geometry = null, i2.program = null, i2.wireframe = false;
  }
  return { setup: function(n3, i3, l3, h3, _3) {
    let g2 = false;
    const E2 = (function(t3, n4, i4) {
      const a3 = true === i4.wireframe;
      let o3 = r2[t3.id];
      void 0 === o3 && (o3 = {}, r2[t3.id] = o3);
      let s3 = o3[n4.id];
      void 0 === s3 && (s3 = {}, o3[n4.id] = s3);
      let l4 = s3[a3];
      void 0 === l4 && (l4 = c2(e2.createVertexArray()), s3[a3] = l4);
      return l4;
    })(h3, l3, i3);
    a2 !== E2 && (a2 = E2, s2(a2.object)), g2 = (function(e3, t3, n4, r3) {
      const i4 = a2.attributes, o3 = t3.attributes;
      let s3 = 0;
      const l4 = n4.getAttributes();
      for (const t4 in l4) {
        if (l4[t4].location >= 0) {
          const n5 = i4[t4];
          let r4 = o3[t4];
          if (void 0 === r4 && ("instanceMatrix" === t4 && e3.instanceMatrix && (r4 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (r4 = e3.instanceColor)), void 0 === n5) return true;
          if (n5.attribute !== r4) return true;
          if (r4 && n5.data !== r4.data) return true;
          s3++;
        }
      }
      return a2.attributesNum !== s3 || a2.index !== r3;
    })(n3, h3, l3, _3), g2 && (function(e3, t3, n4, r3) {
      const i4 = {}, o3 = t3.attributes;
      let s3 = 0;
      const l4 = n4.getAttributes();
      for (const t4 in l4) {
        if (l4[t4].location >= 0) {
          let n5 = o3[t4];
          void 0 === n5 && ("instanceMatrix" === t4 && e3.instanceMatrix && (n5 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (n5 = e3.instanceColor));
          const r4 = {};
          r4.attribute = n5, n5 && n5.data && (r4.data = n5.data), i4[t4] = r4, s3++;
        }
      }
      a2.attributes = i4, a2.attributesNum = s3, a2.index = r3;
    })(n3, h3, l3, _3), null !== _3 && t2.update(_3, e2.ELEMENT_ARRAY_BUFFER), (g2 || o2) && (o2 = false, (function(n4, r3, i4, a3) {
      d2();
      const o3 = a3.attributes, s3 = i4.getAttributes(), l4 = r3.defaultAttributeValues;
      for (const r4 in s3) {
        const i5 = s3[r4];
        if (i5.location >= 0) {
          let s4 = o3[r4];
          if (void 0 === s4 && ("instanceMatrix" === r4 && n4.instanceMatrix && (s4 = n4.instanceMatrix), "instanceColor" === r4 && n4.instanceColor && (s4 = n4.instanceColor)), void 0 !== s4) {
            const r5 = s4.normalized, o4 = s4.itemSize, l5 = t2.get(s4);
            if (void 0 === l5) continue;
            const c3 = l5.buffer, d3 = l5.type, p3 = l5.bytesPerElement, h4 = d3 === e2.INT || d3 === e2.UNSIGNED_INT || s4.gpuType === Bt;
            if (s4.isInterleavedBufferAttribute) {
              const t3 = s4.data, l6 = t3.stride, _4 = s4.offset;
              if (t3.isInstancedInterleavedBuffer) {
                for (let e3 = 0; e3 < i5.locationSize; e3++) f2(i5.location + e3, t3.meshPerAttribute);
                true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
              } else for (let e3 = 0; e3 < i5.locationSize; e3++) u2(i5.location + e3);
              e2.bindBuffer(e2.ARRAY_BUFFER, c3);
              for (let e3 = 0; e3 < i5.locationSize; e3++) m2(i5.location + e3, o4 / i5.locationSize, d3, r5, l6 * p3, (_4 + o4 / i5.locationSize * e3) * p3, h4);
            } else {
              if (s4.isInstancedBufferAttribute) {
                for (let e3 = 0; e3 < i5.locationSize; e3++) f2(i5.location + e3, s4.meshPerAttribute);
                true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
              } else for (let e3 = 0; e3 < i5.locationSize; e3++) u2(i5.location + e3);
              e2.bindBuffer(e2.ARRAY_BUFFER, c3);
              for (let e3 = 0; e3 < i5.locationSize; e3++) m2(i5.location + e3, o4 / i5.locationSize, d3, r5, o4 * p3, o4 / i5.locationSize * e3 * p3, h4);
            }
          } else if (void 0 !== l4) {
            const t3 = l4[r4];
            if (void 0 !== t3) switch (t3.length) {
              case 2:
                e2.vertexAttrib2fv(i5.location, t3);
                break;
              case 3:
                e2.vertexAttrib3fv(i5.location, t3);
                break;
              case 4:
                e2.vertexAttrib4fv(i5.location, t3);
                break;
              default:
                e2.vertexAttrib1fv(i5.location, t3);
            }
          }
        }
      }
      p2();
    })(n3, i3, l3, h3), null !== _3 && e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, t2.get(_3).buffer));
  }, reset: h2, resetDefaultState: _2, dispose: function() {
    h2();
    for (const e3 in r2) {
      const t3 = r2[e3];
      for (const e4 in t3) {
        const n3 = t3[e4];
        for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
        delete t3[e4];
      }
      delete r2[e3];
    }
  }, releaseStatesOfGeometry: function(e3) {
    if (void 0 === r2[e3.id]) return;
    const t3 = r2[e3.id];
    for (const e4 in t3) {
      const n3 = t3[e4];
      for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
      delete t3[e4];
    }
    delete r2[e3.id];
  }, releaseStatesOfProgram: function(e3) {
    for (const t3 in r2) {
      const n3 = r2[t3];
      if (void 0 === n3[e3.id]) continue;
      const i3 = n3[e3.id];
      for (const e4 in i3) l2(i3[e4].object), delete i3[e4];
      delete n3[e3.id];
    }
  }, initAttributes: d2, enableAttribute: u2, disableUnusedAttributes: p2 };
}
function Fn2(e2, t2, n2) {
  let r2;
  function i2(t3, i3, a2) {
    0 !== a2 && (e2.drawArraysInstanced(r2, t3, i3, a2), n2.update(i3, r2, a2));
  }
  this.setMode = function(e3) {
    r2 = e3;
  }, this.render = function(t3, i3) {
    e2.drawArrays(r2, t3, i3), n2.update(i3, r2, 1);
  }, this.renderInstances = i2, this.renderMultiDraw = function(e3, i3, a2) {
    if (0 === a2) return;
    t2.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r2, e3, 0, i3, 0, a2);
    let o2 = 0;
    for (let e4 = 0; e4 < a2; e4++) o2 += i3[e4];
    n2.update(o2, r2, 1);
  }, this.renderMultiDrawInstances = function(e3, a2, o2, s2) {
    if (0 === o2) return;
    const l2 = t2.get("WEBGL_multi_draw");
    if (null === l2) for (let t3 = 0; t3 < e3.length; t3++) i2(e3[t3], a2[t3], s2[t3]);
    else {
      l2.multiDrawArraysInstancedWEBGL(r2, e3, 0, a2, 0, s2, 0, o2);
      let t3 = 0;
      for (let e4 = 0; e4 < o2; e4++) t3 += a2[e4] * s2[e4];
      n2.update(t3, r2, 1);
    }
  };
}
function Bn2(e2, t2, n2, r2) {
  let i2;
  function a2(t3) {
    if ("highp" === t3) {
      if (e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.HIGH_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.HIGH_FLOAT).precision > 0) return "highp";
      t3 = "mediump";
    }
    return "mediump" === t3 && e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.MEDIUM_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let o2 = void 0 !== n2.precision ? n2.precision : "highp";
  const s2 = a2(o2);
  s2 !== o2 && (console.warn("THREE.WebGLRenderer:", o2, "not supported, using", s2, "instead."), o2 = s2);
  const l2 = true === n2.logarithmicDepthBuffer, c2 = true === n2.reversedDepthBuffer && t2.has("EXT_clip_control"), d2 = e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS), u2 = e2.getParameter(e2.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return { isWebGL2: true, getMaxAnisotropy: function() {
    if (void 0 !== i2) return i2;
    if (true === t2.has("EXT_texture_filter_anisotropic")) {
      const n3 = t2.get("EXT_texture_filter_anisotropic");
      i2 = e2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i2 = 0;
    return i2;
  }, getMaxPrecision: a2, textureFormatReadable: function(t3) {
    return t3 === Dt || r2.convert(t3) === e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_FORMAT);
  }, textureTypeReadable: function(n3) {
    const i3 = n3 === Rt && (t2.has("EXT_color_buffer_half_float") || t2.has("EXT_color_buffer_float"));
    return !(n3 !== Tt && r2.convert(n3) !== e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== Et && !i3);
  }, precision: o2, logarithmicDepthBuffer: l2, reversedDepthBuffer: c2, maxTextures: d2, maxVertexTextures: u2, maxTextureSize: e2.getParameter(e2.MAX_TEXTURE_SIZE), maxCubemapSize: e2.getParameter(e2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: e2.getParameter(e2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: e2.getParameter(e2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: e2.getParameter(e2.MAX_VARYING_VECTORS), maxFragmentUniforms: e2.getParameter(e2.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: u2 > 0, maxSamples: e2.getParameter(e2.MAX_SAMPLES) };
}
function Hn2(t2) {
  const n2 = this;
  let r2 = null, i2 = 0, a2 = false, o2 = false;
  const s2 = new no(), l2 = new si(), c2 = { value: null, needsUpdate: false };
  function d2(e2, t3, r3, i3) {
    const a3 = null !== e2 ? e2.length : 0;
    let o3 = null;
    if (0 !== a3) {
      if (o3 = c2.value, true !== i3 || null === o3) {
        const n3 = r3 + 4 * a3, i4 = t3.matrixWorldInverse;
        l2.getNormalMatrix(i4), (null === o3 || o3.length < n3) && (o3 = new Float32Array(n3));
        for (let t4 = 0, n4 = r3; t4 !== a3; ++t4, n4 += 4) s2.copy(e2[t4]).applyMatrix4(i4, l2), s2.normal.toArray(o3, n4), o3[n4 + 3] = s2.constant;
      }
      c2.value = o3, c2.needsUpdate = true;
    }
    return n2.numPlanes = a3, n2.numIntersection = 0, o3;
  }
  this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e2, t3) {
    const n3 = 0 !== e2.length || t3 || 0 !== i2 || a2;
    return a2 = t3, i2 = e2.length, n3;
  }, this.beginShadows = function() {
    o2 = true, d2(null);
  }, this.endShadows = function() {
    o2 = false;
  }, this.setGlobalState = function(e2, t3) {
    r2 = d2(e2, t3, 0);
  }, this.setState = function(e2, s3, l3) {
    const u2 = e2.clippingPlanes, f2 = e2.clipIntersection, p2 = e2.clipShadows, m2 = t2.get(e2);
    if (!a2 || null === u2 || 0 === u2.length || o2 && !p2) o2 ? d2(null) : (function() {
      c2.value !== r2 && (c2.value = r2, c2.needsUpdate = i2 > 0);
      n2.numPlanes = i2, n2.numIntersection = 0;
    })();
    else {
      const e3 = o2 ? 0 : i2, t3 = 4 * e3;
      let n3 = m2.clippingState || null;
      c2.value = n3, n3 = d2(u2, s3, t3, l3);
      for (let e4 = 0; e4 !== t3; ++e4) n3[e4] = r2[e4];
      m2.clippingState = n3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e3;
    }
  };
}
function Gn2(e2) {
  let t2 = /* @__PURE__ */ new WeakMap();
  function n2(e3, t3) {
    return t3 === ct ? e3.mapping = ht : t3 === ut && (e3.mapping = lt), e3;
  }
  function r2(e3) {
    const n3 = e3.target;
    n3.removeEventListener("dispose", r2);
    const i2 = t2.get(n3);
    void 0 !== i2 && (t2.delete(n3), i2.dispose());
  }
  return { get: function(i2) {
    if (i2 && i2.isTexture) {
      const a2 = i2.mapping;
      if (a2 === ct || a2 === ut) {
        if (t2.has(i2)) {
          return n2(t2.get(i2).texture, i2.mapping);
        }
        {
          const a3 = i2.image;
          if (a3 && a3.height > 0) {
            const o2 = new ia(a3.height);
            return o2.fromEquirectangularTexture(e2, i2), t2.set(i2, o2), i2.addEventListener("dispose", r2), n2(o2.texture, i2.mapping);
          }
          return null;
        }
      }
    }
    return i2;
  }, dispose: function() {
    t2 = /* @__PURE__ */ new WeakMap();
  } };
}
var Vn2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
var zn2 = 20;
var kn2 = new jc();
var Wn2 = new Qr();
var Xn2 = null;
var Yn2 = 0;
var Kn2 = 0;
var qn2 = false;
var jn2 = (1 + Math.sqrt(5)) / 2;
var Zn2 = 1 / jn2;
var $n2 = [new Ks(-jn2, Zn2, 0), new Ks(jn2, Zn2, 0), new Ks(-Zn2, 0, jn2), new Ks(Zn2, 0, jn2), new Ks(0, jn2, -Zn2), new Ks(0, jn2, Zn2), new Ks(-1, 1, -1), new Ks(1, 1, -1), new Ks(-1, 1, 1), new Ks(1, 1, 1)];
var Qn2 = new Ks();
var Jn2 = class {
  constructor(e2) {
    this._renderer = e2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e2, t2 = 0, n2 = 0.1, r2 = 100, i2 = {}) {
    const { size: a2 = 256, position: o2 = Qn2 } = i2;
    Xn2 = this._renderer.getRenderTarget(), Yn2 = this._renderer.getActiveCubeFace(), Kn2 = this._renderer.getActiveMipmapLevel(), qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a2);
    const s2 = this._allocateTargets();
    return s2.depthBuffer = true, this._sceneToCubeUV(e2, n2, r2, s2, o2), t2 > 0 && this._blur(s2, 0, 0, t2), this._applyPMREM(s2), this._cleanup(s2), s2;
  }
  fromEquirectangular(e2, t2 = null) {
    return this._fromTexture(e2, t2);
  }
  fromCubemap(e2, t2 = null) {
    return this._fromTexture(e2, t2);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial && (this._cubemapMaterial = rr2(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial && (this._equirectMaterial = nr2(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e2) {
    this._lodMax = Math.floor(Math.log2(e2)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
    for (let e2 = 0; e2 < this._lodPlanes.length; e2++) this._lodPlanes[e2].dispose();
  }
  _cleanup(e2) {
    this._renderer.setRenderTarget(Xn2, Yn2, Kn2), this._renderer.xr.enabled = qn2, e2.scissorTest = false, tr2(e2, 0, 0, e2.width, e2.height);
  }
  _fromTexture(e2, t2) {
    e2.mapping === ht || e2.mapping === lt ? this._setSize(0 === e2.image.length ? 16 : e2.image[0].width || e2.image[0].image.width) : this._setSize(e2.image.width / 4), Xn2 = this._renderer.getRenderTarget(), Yn2 = this._renderer.getActiveCubeFace(), Kn2 = this._renderer.getActiveMipmapLevel(), qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n2 = t2 || this._allocateTargets();
    return this._textureToCubeUV(e2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
  }
  _allocateTargets() {
    const e2 = 3 * Math.max(this._cubeSize, 112), t2 = 4 * this._cubeSize, n2 = { magFilter: wt, minFilter: wt, generateMipmaps: false, type: Rt, format: Dt, colorSpace: Ge, depthBuffer: false }, r2 = er2(e2, t2, n2);
    if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e2 || this._pingPongRenderTarget.height !== t2) {
      null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = er2(e2, t2, n2);
      const { _lodMax: r3 } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = (function(e3) {
        const t3 = [], n3 = [], r4 = [];
        let i2 = e3;
        const a2 = e3 - 4 + 1 + Vn2.length;
        for (let o2 = 0; o2 < a2; o2++) {
          const a3 = Math.pow(2, i2);
          n3.push(a3);
          let s2 = 1 / a3;
          o2 > e3 - 4 ? s2 = Vn2[o2 - e3 + 4 - 1] : 0 === o2 && (s2 = 0), r4.push(s2);
          const l2 = 1 / (a3 - 2), c2 = -l2, d2 = 1 + l2, u2 = [c2, c2, d2, c2, d2, d2, c2, c2, d2, d2, c2, d2], f2 = 6, p2 = 6, m2 = 3, h2 = 2, _2 = 1, g2 = new Float32Array(m2 * p2 * f2), v2 = new Float32Array(h2 * p2 * f2), E2 = new Float32Array(_2 * p2 * f2);
          for (let e4 = 0; e4 < f2; e4++) {
            const t4 = e4 % 3 * 2 / 3 - 1, n4 = e4 > 2 ? 0 : -1, r5 = [t4, n4, 0, t4 + 2 / 3, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4 + 1, 0];
            g2.set(r5, m2 * p2 * e4), v2.set(u2, h2 * p2 * e4);
            const i3 = [e4, e4, e4, e4, e4, e4];
            E2.set(i3, _2 * p2 * e4);
          }
          const S2 = new In();
          S2.setAttribute("position", new dn(g2, m2)), S2.setAttribute("uv", new dn(v2, h2)), S2.setAttribute("faceIndex", new dn(E2, _2)), t3.push(S2), i2 > 4 && i2--;
        }
        return { lodPlanes: t3, sizeLods: n3, sigmas: r4 };
      })(r3)), this._blurMaterial = (function(e3, t3, n3) {
        const r4 = new Float32Array(zn2), a2 = new Ks(0, 1, 0), o2 = new Yn({ name: "SphericalGaussianBlur", defines: { n: zn2, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a2 } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
        return o2;
      })(r3, e2, t2);
    }
    return r2;
  }
  _compileMaterial(e2) {
    const t2 = new Dn(this._lodPlanes[0], e2);
    this._renderer.compile(t2, kn2);
  }
  _sceneToCubeUV(e2, t2, n2, r2, i2) {
    const a2 = new Kn(90, 1, t2, n2), l2 = [1, -1, 1, 1, 1, 1], d2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, f2 = u2.autoClear, p2 = u2.toneMapping;
    u2.getClearColor(Wn2), u2.toneMapping = $, u2.autoClear = false;
    u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(r2), u2.clearDepth(), u2.setRenderTarget(null));
    const m2 = new sn({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false }), h2 = new Dn(new Un(), m2);
    let _2 = false;
    const g2 = e2.background;
    g2 ? g2.isColor && (m2.color.copy(g2), e2.background = null, _2 = true) : (m2.color.copy(Wn2), _2 = true);
    for (let t3 = 0; t3 < 6; t3++) {
      const n3 = t3 % 3;
      0 === n3 ? (a2.up.set(0, l2[t3], 0), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x + d2[t3], i2.y, i2.z)) : 1 === n3 ? (a2.up.set(0, 0, l2[t3]), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x, i2.y + d2[t3], i2.z)) : (a2.up.set(0, l2[t3], 0), a2.position.set(i2.x, i2.y, i2.z), a2.lookAt(i2.x, i2.y, i2.z + d2[t3]));
      const o2 = this._cubeSize;
      tr2(r2, n3 * o2, t3 > 2 ? o2 : 0, o2, o2), u2.setRenderTarget(r2), _2 && u2.render(h2, a2), u2.render(e2, a2);
    }
    h2.geometry.dispose(), h2.material.dispose(), u2.toneMapping = p2, u2.autoClear = f2, e2.background = g2;
  }
  _textureToCubeUV(e2, t2) {
    const n2 = this._renderer, r2 = e2.mapping === ht || e2.mapping === lt;
    r2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = rr2()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = nr2());
    const i2 = r2 ? this._cubemapMaterial : this._equirectMaterial, a2 = new Dn(this._lodPlanes[0], i2);
    i2.uniforms.envMap.value = e2;
    const s2 = this._cubeSize;
    tr2(t2, 0, 0, 3 * s2, 2 * s2), n2.setRenderTarget(t2), n2.render(a2, kn2);
  }
  _applyPMREM(e2) {
    const t2 = this._renderer, n2 = t2.autoClear;
    t2.autoClear = false;
    const r2 = this._lodPlanes.length;
    for (let t3 = 1; t3 < r2; t3++) {
      const n3 = Math.sqrt(this._sigmas[t3] * this._sigmas[t3] - this._sigmas[t3 - 1] * this._sigmas[t3 - 1]), i2 = $n2[(r2 - t3 - 1) % $n2.length];
      this._blur(e2, t3 - 1, t3, n3, i2);
    }
    t2.autoClear = n2;
  }
  _blur(e2, t2, n2, r2, i2) {
    const a2 = this._pingPongRenderTarget;
    this._halfBlur(e2, a2, t2, n2, r2, "latitudinal", i2), this._halfBlur(a2, e2, n2, n2, r2, "longitudinal", i2);
  }
  _halfBlur(e2, t2, n2, r2, i2, a2, s2) {
    const l2 = this._renderer, c2 = this._blurMaterial;
    "latitudinal" !== a2 && "longitudinal" !== a2 && console.error("blur direction must be either latitudinal or longitudinal!");
    const d2 = new Dn(this._lodPlanes[r2], c2), u2 = c2.uniforms, f2 = this._sizeLods[n2] - 1, p2 = isFinite(i2) ? Math.PI / (2 * f2) : 2 * Math.PI / 39, m2 = i2 / p2, h2 = isFinite(i2) ? 1 + Math.floor(3 * m2) : zn2;
    h2 > zn2 && console.warn(`sigmaRadians, ${i2}, is too large and will clip, as it requested ${h2} samples when the maximum is set to 20`);
    const _2 = [];
    let g2 = 0;
    for (let e3 = 0; e3 < zn2; ++e3) {
      const t3 = e3 / m2, n3 = Math.exp(-t3 * t3 / 2);
      _2.push(n3), 0 === e3 ? g2 += n3 : e3 < h2 && (g2 += 2 * n3);
    }
    for (let e3 = 0; e3 < _2.length; e3++) _2[e3] = _2[e3] / g2;
    u2.envMap.value = e2.texture, u2.samples.value = h2, u2.weights.value = _2, u2.latitudinal.value = "latitudinal" === a2, s2 && (u2.poleAxis.value = s2);
    const { _lodMax: v2 } = this;
    u2.dTheta.value = p2, u2.mipInt.value = v2 - n2;
    const E2 = this._sizeLods[r2];
    tr2(t2, 3 * E2 * (r2 > v2 - 4 ? r2 - v2 + 4 : 0), 4 * (this._cubeSize - E2), 3 * E2, 2 * E2), l2.setRenderTarget(t2), l2.render(d2, kn2);
  }
};
function er2(e2, t2, n2) {
  const r2 = new Ci(e2, t2, n2);
  return r2.texture.mapping = dt, r2.texture.name = "PMREM.cubeUv", r2.scissorTest = true, r2;
}
function tr2(e2, t2, n2, r2, i2) {
  e2.viewport.set(t2, n2, r2, i2), e2.scissor.set(t2, n2, r2, i2);
}
function nr2() {
  return new Yn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
}
function rr2() {
  return new Yn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ir2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
}
function ir2() {
  return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
function ar2(e2) {
  let t2 = /* @__PURE__ */ new WeakMap(), n2 = null;
  function r2(e3) {
    const n3 = e3.target;
    n3.removeEventListener("dispose", r2);
    const i2 = t2.get(n3);
    void 0 !== i2 && (t2.delete(n3), i2.dispose());
  }
  return { get: function(i2) {
    if (i2 && i2.isTexture) {
      const a2 = i2.mapping, o2 = a2 === ct || a2 === ut, s2 = a2 === ht || a2 === lt;
      if (o2 || s2) {
        let a3 = t2.get(i2);
        const l2 = void 0 !== a3 ? a3.texture.pmremVersion : 0;
        if (i2.isRenderTargetTexture && i2.pmremVersion !== l2) return null === n2 && (n2 = new Jn2(e2)), a3 = o2 ? n2.fromEquirectangular(i2, a3) : n2.fromCubemap(i2, a3), a3.texture.pmremVersion = i2.pmremVersion, t2.set(i2, a3), a3.texture;
        if (void 0 !== a3) return a3.texture;
        {
          const l3 = i2.image;
          return o2 && l3 && l3.height > 0 || s2 && l3 && (function(e3) {
            let t3 = 0;
            const n3 = 6;
            for (let r3 = 0; r3 < n3; r3++) void 0 !== e3[r3] && t3++;
            return t3 === n3;
          })(l3) ? (null === n2 && (n2 = new Jn2(e2)), a3 = o2 ? n2.fromEquirectangular(i2) : n2.fromCubemap(i2), a3.texture.pmremVersion = i2.pmremVersion, t2.set(i2, a3), i2.addEventListener("dispose", r2), a3.texture) : null;
        }
      }
    }
    return i2;
  }, dispose: function() {
    t2 = /* @__PURE__ */ new WeakMap(), null !== n2 && (n2.dispose(), n2 = null);
  } };
}
function or2(e2) {
  const t2 = {};
  function n2(n3) {
    if (void 0 !== t2[n3]) return t2[n3];
    let r2;
    switch (n3) {
      case "WEBGL_depth_texture":
        r2 = e2.getExtension("WEBGL_depth_texture") || e2.getExtension("MOZ_WEBGL_depth_texture") || e2.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r2 = e2.getExtension("EXT_texture_filter_anisotropic") || e2.getExtension("MOZ_EXT_texture_filter_anisotropic") || e2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r2 = e2.getExtension("WEBGL_compressed_texture_s3tc") || e2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r2 = e2.getExtension("WEBGL_compressed_texture_pvrtc") || e2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r2 = e2.getExtension(n3);
    }
    return t2[n3] = r2, r2;
  }
  return { has: function(e3) {
    return null !== n2(e3);
  }, init: function() {
    n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance"), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture"), n2("WEBGL_render_shared_exponent");
  }, get: function(e3) {
    const t3 = n2(e3);
    return null === t3 && ci("THREE.WebGLRenderer: " + e3 + " extension not supported."), t3;
  } };
}
function sr2(e2, t2, n2, r2) {
  const i2 = {}, a2 = /* @__PURE__ */ new WeakMap();
  function o2(e3) {
    const s3 = e3.target;
    null !== s3.index && t2.remove(s3.index);
    for (const e4 in s3.attributes) t2.remove(s3.attributes[e4]);
    s3.removeEventListener("dispose", o2), delete i2[s3.id];
    const l2 = a2.get(s3);
    l2 && (t2.remove(l2), a2.delete(s3)), r2.releaseStatesOfGeometry(s3), true === s3.isInstancedBufferGeometry && delete s3._maxInstanceCount, n2.memory.geometries--;
  }
  function s2(e3) {
    const n3 = [], r3 = e3.index, i3 = e3.attributes.position;
    let o3 = 0;
    if (null !== r3) {
      const e4 = r3.array;
      o3 = r3.version;
      for (let t3 = 0, r4 = e4.length; t3 < r4; t3 += 3) {
        const r5 = e4[t3 + 0], i4 = e4[t3 + 1], a3 = e4[t3 + 2];
        n3.push(r5, i4, i4, a3, a3, r5);
      }
    } else {
      if (void 0 === i3) return;
      {
        const e4 = i3.array;
        o3 = i3.version;
        for (let t3 = 0, r4 = e4.length / 3 - 1; t3 < r4; t3 += 3) {
          const e5 = t3 + 0, r5 = t3 + 1, i4 = t3 + 2;
          n3.push(e5, r5, r5, i4, i4, e5);
        }
      }
    }
    const s3 = new (ri(n3) ? bn : fn)(n3, 1);
    s3.version = o3;
    const l2 = a2.get(e3);
    l2 && t2.remove(l2), a2.set(e3, s3);
  }
  return { get: function(e3, t3) {
    return true === i2[t3.id] || (t3.addEventListener("dispose", o2), i2[t3.id] = true, n2.memory.geometries++), t3;
  }, update: function(n3) {
    const r3 = n3.attributes;
    for (const n4 in r3) t2.update(r3[n4], e2.ARRAY_BUFFER);
  }, getWireframeAttribute: function(e3) {
    const t3 = a2.get(e3);
    if (t3) {
      const n3 = e3.index;
      null !== n3 && t3.version < n3.version && s2(e3);
    } else s2(e3);
    return a2.get(e3);
  } };
}
function lr2(e2, t2, n2) {
  let r2, i2, a2;
  function o2(t3, o3, s2) {
    0 !== s2 && (e2.drawElementsInstanced(r2, o3, i2, t3 * a2, s2), n2.update(o3, r2, s2));
  }
  this.setMode = function(e3) {
    r2 = e3;
  }, this.setIndex = function(e3) {
    i2 = e3.type, a2 = e3.bytesPerElement;
  }, this.render = function(t3, o3) {
    e2.drawElements(r2, o3, i2, t3 * a2), n2.update(o3, r2, 1);
  }, this.renderInstances = o2, this.renderMultiDraw = function(e3, a3, o3) {
    if (0 === o3) return;
    t2.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r2, a3, 0, i2, e3, 0, o3);
    let s2 = 0;
    for (let e4 = 0; e4 < o3; e4++) s2 += a3[e4];
    n2.update(s2, r2, 1);
  }, this.renderMultiDrawInstances = function(e3, s2, l2, c2) {
    if (0 === l2) return;
    const d2 = t2.get("WEBGL_multi_draw");
    if (null === d2) for (let t3 = 0; t3 < e3.length; t3++) o2(e3[t3] / a2, s2[t3], c2[t3]);
    else {
      d2.multiDrawElementsInstancedWEBGL(r2, s2, 0, i2, e3, 0, c2, 0, l2);
      let t3 = 0;
      for (let e4 = 0; e4 < l2; e4++) t3 += s2[e4] * c2[e4];
      n2.update(t3, r2, 1);
    }
  };
}
function cr2(e2) {
  const t2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return { memory: { geometries: 0, textures: 0 }, render: t2, programs: null, autoReset: true, reset: function() {
    t2.calls = 0, t2.triangles = 0, t2.points = 0, t2.lines = 0;
  }, update: function(n2, r2, i2) {
    switch (t2.calls++, r2) {
      case e2.TRIANGLES:
        t2.triangles += i2 * (n2 / 3);
        break;
      case e2.LINES:
        t2.lines += i2 * (n2 / 2);
        break;
      case e2.LINE_STRIP:
        t2.lines += i2 * (n2 - 1);
        break;
      case e2.LINE_LOOP:
        t2.lines += i2 * n2;
        break;
      case e2.POINTS:
        t2.points += i2 * n2;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r2);
    }
  } };
}
function dr2(e2, n2, r2) {
  const i2 = /* @__PURE__ */ new WeakMap(), a2 = new Ti();
  return { update: function(o2, s2, l2) {
    const c2 = o2.morphTargetInfluences, d2 = s2.morphAttributes.position || s2.morphAttributes.normal || s2.morphAttributes.color, u2 = void 0 !== d2 ? d2.length : 0;
    let f2 = i2.get(s2);
    if (void 0 === f2 || f2.count !== u2) {
      let b2 = function() {
        R2.dispose(), i2.delete(s2), s2.removeEventListener("dispose", b2);
      };
      void 0 !== f2 && f2.texture.dispose();
      const p2 = void 0 !== s2.morphAttributes.position, m2 = void 0 !== s2.morphAttributes.normal, h2 = void 0 !== s2.morphAttributes.color, _2 = s2.morphAttributes.position || [], g2 = s2.morphAttributes.normal || [], v2 = s2.morphAttributes.color || [];
      let E2 = 0;
      true === p2 && (E2 = 1), true === m2 && (E2 = 2), true === h2 && (E2 = 3);
      let S2 = s2.attributes.position.count * E2, M2 = 1;
      S2 > n2.maxTextureSize && (M2 = Math.ceil(S2 / n2.maxTextureSize), S2 = n2.maxTextureSize);
      const x2 = new Float32Array(S2 * M2 * 4 * u2), R2 = new Ii(x2, S2, M2, u2);
      R2.type = Et, R2.needsUpdate = true;
      const A2 = 4 * E2;
      for (let C2 = 0; C2 < u2; C2++) {
        const L2 = _2[C2], P2 = g2[C2], U2 = v2[C2], D2 = S2 * M2 * 4 * C2;
        for (let w2 = 0; w2 < L2.count; w2++) {
          const I2 = w2 * A2;
          true === p2 && (a2.fromBufferAttribute(L2, w2), x2[D2 + I2 + 0] = a2.x, x2[D2 + I2 + 1] = a2.y, x2[D2 + I2 + 2] = a2.z, x2[D2 + I2 + 3] = 0), true === m2 && (a2.fromBufferAttribute(P2, w2), x2[D2 + I2 + 4] = a2.x, x2[D2 + I2 + 5] = a2.y, x2[D2 + I2 + 6] = a2.z, x2[D2 + I2 + 7] = 0), true === h2 && (a2.fromBufferAttribute(U2, w2), x2[D2 + I2 + 8] = a2.x, x2[D2 + I2 + 9] = a2.y, x2[D2 + I2 + 10] = a2.z, x2[D2 + I2 + 11] = 4 === U2.itemSize ? a2.w : 1);
        }
      }
      f2 = { count: u2, texture: R2, size: new $s(S2, M2) }, i2.set(s2, f2), s2.addEventListener("dispose", b2);
    }
    if (true === o2.isInstancedMesh && null !== o2.morphTexture) l2.getUniforms().setValue(e2, "morphTexture", o2.morphTexture, r2);
    else {
      let y2 = 0;
      for (let O2 = 0; O2 < c2.length; O2++) y2 += c2[O2];
      const N2 = s2.morphTargetsRelative ? 1 : 1 - y2;
      l2.getUniforms().setValue(e2, "morphTargetBaseInfluence", N2), l2.getUniforms().setValue(e2, "morphTargetInfluences", c2);
    }
    l2.getUniforms().setValue(e2, "morphTargetsTexture", f2.texture, r2), l2.getUniforms().setValue(e2, "morphTargetsTextureSize", f2.size);
  } };
}
function ur2(e2, t2, n2, r2) {
  let i2 = /* @__PURE__ */ new WeakMap();
  function a2(e3) {
    const t3 = e3.target;
    t3.removeEventListener("dispose", a2), n2.remove(t3.instanceMatrix), null !== t3.instanceColor && n2.remove(t3.instanceColor);
  }
  return { update: function(o2) {
    const s2 = r2.render.frame, l2 = o2.geometry, c2 = t2.get(o2, l2);
    if (i2.get(c2) !== s2 && (t2.update(c2), i2.set(c2, s2)), o2.isInstancedMesh && (false === o2.hasEventListener("dispose", a2) && o2.addEventListener("dispose", a2), i2.get(o2) !== s2 && (n2.update(o2.instanceMatrix, e2.ARRAY_BUFFER), null !== o2.instanceColor && n2.update(o2.instanceColor, e2.ARRAY_BUFFER), i2.set(o2, s2))), o2.isSkinnedMesh) {
      const e3 = o2.skeleton;
      i2.get(e3) !== s2 && (e3.update(), i2.set(e3, s2));
    }
    return c2;
  }, dispose: function() {
    i2 = /* @__PURE__ */ new WeakMap();
  } };
}
var fr2 = new Ai();
var pr2 = new oh(1, 1);
var mr2 = new Ii();
var hr2 = new ki();
var _r2 = new sa();
var gr2 = [];
var vr2 = [];
var Er2 = new Float32Array(16);
var Sr2 = new Float32Array(9);
var Tr2 = new Float32Array(4);
function Mr2(e2, t2, n2) {
  const r2 = e2[0];
  if (r2 <= 0 || r2 > 0) return e2;
  const i2 = t2 * n2;
  let a2 = gr2[i2];
  if (void 0 === a2 && (a2 = new Float32Array(i2), gr2[i2] = a2), 0 !== t2) {
    r2.toArray(a2, 0);
    for (let r3 = 1, i3 = 0; r3 !== t2; ++r3) i3 += n2, e2[r3].toArray(a2, i3);
  }
  return a2;
}
function xr2(e2, t2) {
  if (e2.length !== t2.length) return false;
  for (let n2 = 0, r2 = e2.length; n2 < r2; n2++) if (e2[n2] !== t2[n2]) return false;
  return true;
}
function Rr2(e2, t2) {
  for (let n2 = 0, r2 = t2.length; n2 < r2; n2++) e2[n2] = t2[n2];
}
function Ar2(e2, t2) {
  let n2 = vr2[t2];
  void 0 === n2 && (n2 = new Int32Array(t2), vr2[t2] = n2);
  for (let r2 = 0; r2 !== t2; ++r2) n2[r2] = e2.allocateTextureUnit();
  return n2;
}
function br2(e2, t2) {
  const n2 = this.cache;
  n2[0] !== t2 && (e2.uniform1f(this.addr, t2), n2[0] = t2);
}
function Cr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform2fv(this.addr, t2), Rr2(n2, t2);
  }
}
function Lr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else if (void 0 !== t2.r) n2[0] === t2.r && n2[1] === t2.g && n2[2] === t2.b || (e2.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform3fv(this.addr, t2), Rr2(n2, t2);
  }
}
function Pr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform4fv(this.addr, t2), Rr2(n2, t2);
  }
}
function Ur2(e2, t2) {
  const n2 = this.cache, r2 = t2.elements;
  if (void 0 === r2) {
    if (xr2(n2, t2)) return;
    e2.uniformMatrix2fv(this.addr, false, t2), Rr2(n2, t2);
  } else {
    if (xr2(n2, r2)) return;
    Tr2.set(r2), e2.uniformMatrix2fv(this.addr, false, Tr2), Rr2(n2, r2);
  }
}
function Dr2(e2, t2) {
  const n2 = this.cache, r2 = t2.elements;
  if (void 0 === r2) {
    if (xr2(n2, t2)) return;
    e2.uniformMatrix3fv(this.addr, false, t2), Rr2(n2, t2);
  } else {
    if (xr2(n2, r2)) return;
    Sr2.set(r2), e2.uniformMatrix3fv(this.addr, false, Sr2), Rr2(n2, r2);
  }
}
function wr2(e2, t2) {
  const n2 = this.cache, r2 = t2.elements;
  if (void 0 === r2) {
    if (xr2(n2, t2)) return;
    e2.uniformMatrix4fv(this.addr, false, t2), Rr2(n2, t2);
  } else {
    if (xr2(n2, r2)) return;
    Er2.set(r2), e2.uniformMatrix4fv(this.addr, false, Er2), Rr2(n2, r2);
  }
}
function Ir2(e2, t2) {
  const n2 = this.cache;
  n2[0] !== t2 && (e2.uniform1i(this.addr, t2), n2[0] = t2);
}
function yr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform2iv(this.addr, t2), Rr2(n2, t2);
  }
}
function Nr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform3iv(this.addr, t2), Rr2(n2, t2);
  }
}
function Or2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform4iv(this.addr, t2), Rr2(n2, t2);
  }
}
function Fr2(e2, t2) {
  const n2 = this.cache;
  n2[0] !== t2 && (e2.uniform1ui(this.addr, t2), n2[0] = t2);
}
function Br2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform2uiv(this.addr, t2), Rr2(n2, t2);
  }
}
function Hr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform3uiv(this.addr, t2), Rr2(n2, t2);
  }
}
function Gr2(e2, t2) {
  const n2 = this.cache;
  if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
  else {
    if (xr2(n2, t2)) return;
    e2.uniform4uiv(this.addr, t2), Rr2(n2, t2);
  }
}
function Vr2(e2, t2, n2) {
  const r2 = this.cache, i2 = n2.allocateTextureUnit();
  let a2;
  r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), this.type === e2.SAMPLER_2D_SHADOW ? (pr2.compareFunction = xs, a2 = pr2) : a2 = fr2, n2.setTexture2D(t2 || a2, i2);
}
function zr2(e2, t2, n2) {
  const r2 = this.cache, i2 = n2.allocateTextureUnit();
  r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTexture3D(t2 || hr2, i2);
}
function kr2(e2, t2, n2) {
  const r2 = this.cache, i2 = n2.allocateTextureUnit();
  r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTextureCube(t2 || _r2, i2);
}
function Wr2(e2, t2, n2) {
  const r2 = this.cache, i2 = n2.allocateTextureUnit();
  r2[0] !== i2 && (e2.uniform1i(this.addr, i2), r2[0] = i2), n2.setTexture2DArray(t2 || mr2, i2);
}
function Xr2(e2, t2) {
  e2.uniform1fv(this.addr, t2);
}
function Yr2(e2, t2) {
  const n2 = Mr2(t2, this.size, 2);
  e2.uniform2fv(this.addr, n2);
}
function Kr2(e2, t2) {
  const n2 = Mr2(t2, this.size, 3);
  e2.uniform3fv(this.addr, n2);
}
function qr2(e2, t2) {
  const n2 = Mr2(t2, this.size, 4);
  e2.uniform4fv(this.addr, n2);
}
function jr2(e2, t2) {
  const n2 = Mr2(t2, this.size, 4);
  e2.uniformMatrix2fv(this.addr, false, n2);
}
function Zr2(e2, t2) {
  const n2 = Mr2(t2, this.size, 9);
  e2.uniformMatrix3fv(this.addr, false, n2);
}
function $r2(e2, t2) {
  const n2 = Mr2(t2, this.size, 16);
  e2.uniformMatrix4fv(this.addr, false, n2);
}
function Qr2(e2, t2) {
  e2.uniform1iv(this.addr, t2);
}
function Jr2(e2, t2) {
  e2.uniform2iv(this.addr, t2);
}
function ei2(e2, t2) {
  e2.uniform3iv(this.addr, t2);
}
function ti2(e2, t2) {
  e2.uniform4iv(this.addr, t2);
}
function ni(e2, t2) {
  e2.uniform1uiv(this.addr, t2);
}
function ri2(e2, t2) {
  e2.uniform2uiv(this.addr, t2);
}
function ii2(e2, t2) {
  e2.uniform3uiv(this.addr, t2);
}
function ai(e2, t2) {
  e2.uniform4uiv(this.addr, t2);
}
function oi2(e2, t2, n2) {
  const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
  xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
  for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture2D(t2[e3] || fr2, a2[e3]);
}
function si2(e2, t2, n2) {
  const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
  xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
  for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture3D(t2[e3] || hr2, a2[e3]);
}
function li2(e2, t2, n2) {
  const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
  xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
  for (let e3 = 0; e3 !== i2; ++e3) n2.setTextureCube(t2[e3] || _r2, a2[e3]);
}
function ci2(e2, t2, n2) {
  const r2 = this.cache, i2 = t2.length, a2 = Ar2(n2, i2);
  xr2(r2, a2) || (e2.uniform1iv(this.addr, a2), Rr2(r2, a2));
  for (let e3 = 0; e3 !== i2; ++e3) n2.setTexture2DArray(t2[e3] || mr2, a2[e3]);
}
var di2 = class {
  constructor(e2, t2, n2) {
    this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = (function(e3) {
      switch (e3) {
        case 5126:
          return br2;
        case 35664:
          return Cr2;
        case 35665:
          return Lr2;
        case 35666:
          return Pr2;
        case 35674:
          return Ur2;
        case 35675:
          return Dr2;
        case 35676:
          return wr2;
        case 5124:
        case 35670:
          return Ir2;
        case 35667:
        case 35671:
          return yr2;
        case 35668:
        case 35672:
          return Nr2;
        case 35669:
        case 35673:
          return Or2;
        case 5125:
          return Fr2;
        case 36294:
          return Br2;
        case 36295:
          return Hr2;
        case 36296:
          return Gr2;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return Vr2;
        case 35679:
        case 36299:
        case 36307:
          return zr2;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return kr2;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return Wr2;
      }
    })(t2.type);
  }
};
var ui2 = class {
  constructor(e2, t2, n2) {
    this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = (function(e3) {
      switch (e3) {
        case 5126:
          return Xr2;
        case 35664:
          return Yr2;
        case 35665:
          return Kr2;
        case 35666:
          return qr2;
        case 35674:
          return jr2;
        case 35675:
          return Zr2;
        case 35676:
          return $r2;
        case 5124:
        case 35670:
          return Qr2;
        case 35667:
        case 35671:
          return Jr2;
        case 35668:
        case 35672:
          return ei2;
        case 35669:
        case 35673:
          return ti2;
        case 5125:
          return ni;
        case 36294:
          return ri2;
        case 36295:
          return ii2;
        case 36296:
          return ai;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
          return oi2;
        case 35679:
        case 36299:
        case 36307:
          return si2;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
          return li2;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
          return ci2;
      }
    })(t2.type);
  }
};
var fi2 = class {
  constructor(e2) {
    this.id = e2, this.seq = [], this.map = {};
  }
  setValue(e2, t2, n2) {
    const r2 = this.seq;
    for (let i2 = 0, a2 = r2.length; i2 !== a2; ++i2) {
      const a3 = r2[i2];
      a3.setValue(e2, t2[a3.id], n2);
    }
  }
};
var pi2 = /(\w+)(\])?(\[|\.)?/g;
function mi2(e2, t2) {
  e2.seq.push(t2), e2.map[t2.id] = t2;
}
function hi2(e2, t2, n2) {
  const r2 = e2.name, i2 = r2.length;
  for (pi2.lastIndex = 0; ; ) {
    const a2 = pi2.exec(r2), o2 = pi2.lastIndex;
    let s2 = a2[1];
    const l2 = "]" === a2[2], c2 = a2[3];
    if (l2 && (s2 |= 0), void 0 === c2 || "[" === c2 && o2 + 2 === i2) {
      mi2(n2, void 0 === c2 ? new di2(s2, e2, t2) : new ui2(s2, e2, t2));
      break;
    }
    {
      let e3 = n2.map[s2];
      void 0 === e3 && (e3 = new fi2(s2), mi2(n2, e3)), n2 = e3;
    }
  }
}
var _i2 = class {
  constructor(e2, t2) {
    this.seq = [], this.map = {};
    const n2 = e2.getProgramParameter(t2, e2.ACTIVE_UNIFORMS);
    for (let r2 = 0; r2 < n2; ++r2) {
      const n3 = e2.getActiveUniform(t2, r2);
      hi2(n3, e2.getUniformLocation(t2, n3.name), this);
    }
  }
  setValue(e2, t2, n2, r2) {
    const i2 = this.map[t2];
    void 0 !== i2 && i2.setValue(e2, n2, r2);
  }
  setOptional(e2, t2, n2) {
    const r2 = t2[n2];
    void 0 !== r2 && this.setValue(e2, n2, r2);
  }
  static upload(e2, t2, n2, r2) {
    for (let i2 = 0, a2 = t2.length; i2 !== a2; ++i2) {
      const a3 = t2[i2], o2 = n2[a3.id];
      false !== o2.needsUpdate && a3.setValue(e2, o2.value, r2);
    }
  }
  static seqWithValue(e2, t2) {
    const n2 = [];
    for (let r2 = 0, i2 = e2.length; r2 !== i2; ++r2) {
      const i3 = e2[r2];
      i3.id in t2 && n2.push(i3);
    }
    return n2;
  }
};
function gi2(e2, t2, n2) {
  const r2 = e2.createShader(t2);
  return e2.shaderSource(r2, n2), e2.compileShader(r2), r2;
}
var vi2 = 0;
var Ei2 = new si();
function Si2(e2, t2, n2) {
  const r2 = e2.getShaderParameter(t2, e2.COMPILE_STATUS), i2 = (e2.getShaderInfoLog(t2) || "").trim();
  if (r2 && "" === i2) return "";
  const a2 = /ERROR: 0:(\d+)/.exec(i2);
  if (a2) {
    const r3 = parseInt(a2[1]);
    return n2.toUpperCase() + "\n\n" + i2 + "\n\n" + (function(e3, t3) {
      const n3 = e3.split("\n"), r4 = [], i3 = Math.max(t3 - 6, 0), a3 = Math.min(t3 + 6, n3.length);
      for (let e4 = i3; e4 < a3; e4++) {
        const i4 = e4 + 1;
        r4.push(`${i4 === t3 ? ">" : " "} ${i4}: ${n3[e4]}`);
      }
      return r4.join("\n");
    })(e2.getShaderSource(t2), r3);
  }
  return i2;
}
function Ti2(e2, t2) {
  const n2 = (function(e3) {
    yi._getMatrix(Ei2, yi.workingColorSpace, e3);
    const t3 = `mat3( ${Ei2.elements.map((e4) => e4.toFixed(4))} )`;
    switch (yi.getTransfer(e3)) {
      case $e:
        return [t3, "LinearTransferOETF"];
      case Qe:
        return [t3, "sRGBTransferOETF"];
      default:
        return console.warn("THREE.WebGLProgram: Unsupported color space: ", e3), [t3, "LinearTransferOETF"];
    }
  })(t2);
  return [`vec4 ${e2}( vec4 value ) {`, `	return ${n2[1]}( vec4( value.rgb * ${n2[0]}, value.a ) );`, "}"].join("\n");
}
function Mi2(e2, t2) {
  let n2;
  switch (t2) {
    case Q:
      n2 = "Linear";
      break;
    case K:
      n2 = "Reinhard";
      break;
    case tt:
      n2 = "Cineon";
      break;
    case et:
      n2 = "ACESFilmic";
      break;
    case it:
      n2 = "AgX";
      break;
    case rt:
      n2 = "Neutral";
      break;
    case st:
      n2 = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t2), n2 = "Linear";
  }
  return "vec3 " + e2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
}
var xi2 = new Ks();
function Ri2() {
  yi.getLuminanceCoefficients(xi2);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${xi2.x.toFixed(4)}, ${xi2.y.toFixed(4)}, ${xi2.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
}
function Ai2(e2) {
  return "" !== e2;
}
function bi2(e2, t2) {
  const n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
  return e2.replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows);
}
function Ci2(e2, t2) {
  return e2.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
}
var Li2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Pi2(e2) {
  return e2.replace(Li2, Di2);
}
var Ui2 = /* @__PURE__ */ new Map();
function Di2(e2, t2) {
  let n2 = Pn2[t2];
  if (void 0 === n2) {
    const e3 = Ui2.get(t2);
    if (void 0 === e3) throw new Error("Can not resolve #include <" + t2 + ">");
    n2 = Pn2[e3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t2, e3);
  }
  return Pi2(n2);
}
var wi2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ii2(e2) {
  return e2.replace(wi2, yi2);
}
function yi2(e2, t2, n2, r2) {
  let i2 = "";
  for (let e3 = parseInt(t2); e3 < parseInt(n2); e3++) i2 += r2.replace(/\[\s*i\s*\]/g, "[ " + e3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e3);
  return i2;
}
function Ni2(e2) {
  let t2 = `precision ${e2.precision} float;
	precision ${e2.precision} int;
	precision ${e2.precision} sampler2D;
	precision ${e2.precision} samplerCube;
	precision ${e2.precision} sampler3D;
	precision ${e2.precision} sampler2DArray;
	precision ${e2.precision} sampler2DShadow;
	precision ${e2.precision} samplerCubeShadow;
	precision ${e2.precision} sampler2DArrayShadow;
	precision ${e2.precision} isampler2D;
	precision ${e2.precision} isampler3D;
	precision ${e2.precision} isamplerCube;
	precision ${e2.precision} isampler2DArray;
	precision ${e2.precision} usampler2D;
	precision ${e2.precision} usampler3D;
	precision ${e2.precision} usamplerCube;
	precision ${e2.precision} usampler2DArray;
	`;
  return "highp" === e2.precision ? t2 += "\n#define HIGH_PRECISION" : "mediump" === e2.precision ? t2 += "\n#define MEDIUM_PRECISION" : "lowp" === e2.precision && (t2 += "\n#define LOW_PRECISION"), t2;
}
function Oi2(e2, t2, n2, r2) {
  const i2 = e2.getContext(), o2 = n2.defines;
  let s2 = n2.vertexShader, l2 = n2.fragmentShader;
  const c2 = (function(e3) {
    let t3 = "SHADOWMAP_TYPE_BASIC";
    return e3.shadowMapType === h ? t3 = "SHADOWMAP_TYPE_PCF" : e3.shadowMapType === l ? t3 = "SHADOWMAP_TYPE_PCF_SOFT" : e3.shadowMapType === c && (t3 = "SHADOWMAP_TYPE_VSM"), t3;
  })(n2), d2 = (function(e3) {
    let t3 = "ENVMAP_TYPE_CUBE";
    if (e3.envMap) switch (e3.envMapMode) {
      case ht:
      case lt:
        t3 = "ENVMAP_TYPE_CUBE";
        break;
      case dt:
        t3 = "ENVMAP_TYPE_CUBE_UV";
    }
    return t3;
  })(n2), u2 = (function(e3) {
    let t3 = "ENVMAP_MODE_REFLECTION";
    e3.envMap && e3.envMapMode === lt && (t3 = "ENVMAP_MODE_REFRACTION");
    return t3;
  })(n2), f2 = (function(e3) {
    let t3 = "ENVMAP_BLENDING_NONE";
    if (e3.envMap) switch (e3.combine) {
      case Y:
        t3 = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Z:
        t3 = "ENVMAP_BLENDING_MIX";
        break;
      case G:
        t3 = "ENVMAP_BLENDING_ADD";
    }
    return t3;
  })(n2), p2 = (function(e3) {
    const t3 = e3.envMapCubeUVHeight;
    if (null === t3) return null;
    const n3 = Math.log2(t3) - 2, r3 = 1 / t3;
    return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: r3, maxMip: n3 };
  })(n2), m2 = (function(e3) {
    return [e3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ai2).join("\n");
  })(n2), h2 = (function(e3) {
    const t3 = [];
    for (const n3 in e3) {
      const r3 = e3[n3];
      false !== r3 && t3.push("#define " + n3 + " " + r3);
    }
    return t3.join("\n");
  })(o2), _2 = i2.createProgram();
  let g2, v2, E2 = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
  n2.isRawShaderMaterial ? (g2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(Ai2).join("\n"), g2.length > 0 && (g2 += "\n"), v2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(Ai2).join("\n"), v2.length > 0 && (v2 += "\n")) : (g2 = [Ni2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.batchingColor ? "#define USE_BATCHING_COLOR" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + u2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(Ai2).join("\n"), v2 = [Ni2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + u2 : "", n2.envMap ? "#define " + f2 : "", p2 ? "#define CUBEUV_TEXEL_WIDTH " + p2.texelWidth : "", p2 ? "#define CUBEUV_TEXEL_HEIGHT " + p2.texelHeight : "", p2 ? "#define CUBEUV_MAX_MIP " + p2.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.dispersion ? "#define USE_DISPERSION" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor || n2.batchingColor ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== $ ? "#define TONE_MAPPING" : "", n2.toneMapping !== $ ? Pn2.tonemapping_pars_fragment : "", n2.toneMapping !== $ ? Mi2("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", Pn2.colorspace_pars_fragment, Ti2("linearToOutputTexel", n2.outputColorSpace), Ri2(), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(Ai2).join("\n")), s2 = Pi2(s2), s2 = bi2(s2, n2), s2 = Ci2(s2, n2), l2 = Pi2(l2), l2 = bi2(l2, n2), l2 = Ci2(l2, n2), s2 = Ii2(s2), l2 = Ii2(l2), true !== n2.isRawShaderMaterial && (E2 = "#version 300 es\n", g2 = [m2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g2, v2 = ["#define varying in", n2.glslVersion === Rs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === Rs ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v2);
  const S2 = E2 + g2 + s2, T2 = E2 + v2 + l2, M2 = gi2(i2, i2.VERTEX_SHADER, S2), x2 = gi2(i2, i2.FRAGMENT_SHADER, T2);
  function R2(t3) {
    if (e2.debug.checkShaderErrors) {
      const n3 = i2.getProgramInfoLog(_2) || "", r3 = i2.getShaderInfoLog(M2) || "", a2 = i2.getShaderInfoLog(x2) || "", o3 = n3.trim(), s3 = r3.trim(), l3 = a2.trim();
      let c3 = true, d3 = true;
      if (false === i2.getProgramParameter(_2, i2.LINK_STATUS)) if (c3 = false, "function" == typeof e2.debug.onShaderError) e2.debug.onShaderError(i2, _2, M2, x2);
      else {
        const e3 = Si2(i2, M2, "vertex"), n4 = Si2(i2, x2, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i2.getError() + " - VALIDATE_STATUS " + i2.getProgramParameter(_2, i2.VALIDATE_STATUS) + "\n\nMaterial Name: " + t3.name + "\nMaterial Type: " + t3.type + "\n\nProgram Info Log: " + o3 + "\n" + e3 + "\n" + n4);
      }
      else "" !== o3 ? console.warn("THREE.WebGLProgram: Program Info Log:", o3) : "" !== s3 && "" !== l3 || (d3 = false);
      d3 && (t3.diagnostics = { runnable: c3, programLog: o3, vertexShader: { log: s3, prefix: g2 }, fragmentShader: { log: l3, prefix: v2 } });
    }
    i2.deleteShader(M2), i2.deleteShader(x2), A2 = new _i2(i2, _2), b2 = (function(e3, t4) {
      const n3 = {}, r3 = e3.getProgramParameter(t4, e3.ACTIVE_ATTRIBUTES);
      for (let i3 = 0; i3 < r3; i3++) {
        const r4 = e3.getActiveAttrib(t4, i3), a2 = r4.name;
        let o3 = 1;
        r4.type === e3.FLOAT_MAT2 && (o3 = 2), r4.type === e3.FLOAT_MAT3 && (o3 = 3), r4.type === e3.FLOAT_MAT4 && (o3 = 4), n3[a2] = { type: r4.type, location: e3.getAttribLocation(t4, a2), locationSize: o3 };
      }
      return n3;
    })(i2, _2);
  }
  let A2, b2;
  i2.attachShader(_2, M2), i2.attachShader(_2, x2), void 0 !== n2.index0AttributeName ? i2.bindAttribLocation(_2, 0, n2.index0AttributeName) : true === n2.morphTargets && i2.bindAttribLocation(_2, 0, "position"), i2.linkProgram(_2), this.getUniforms = function() {
    return void 0 === A2 && R2(this), A2;
  }, this.getAttributes = function() {
    return void 0 === b2 && R2(this), b2;
  };
  let P2 = false === n2.rendererExtensionParallelShaderCompile;
  return this.isReady = function() {
    return false === P2 && (P2 = i2.getProgramParameter(_2, 37297)), P2;
  }, this.destroy = function() {
    r2.releaseStatesOfProgram(this), i2.deleteProgram(_2), this.program = void 0;
  }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = vi2++, this.cacheKey = t2, this.usedTimes = 1, this.program = _2, this.vertexShader = M2, this.fragmentShader = x2, this;
}
var Fi2 = 0;
var Bi2 = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e2) {
    const t2 = e2.vertexShader, n2 = e2.fragmentShader, r2 = this._getShaderStage(t2), i2 = this._getShaderStage(n2), a2 = this._getShaderCacheForMaterial(e2);
    return false === a2.has(r2) && (a2.add(r2), r2.usedTimes++), false === a2.has(i2) && (a2.add(i2), i2.usedTimes++), this;
  }
  remove(e2) {
    const t2 = this.materialCache.get(e2);
    for (const e3 of t2) e3.usedTimes--, 0 === e3.usedTimes && this.shaderCache.delete(e3.code);
    return this.materialCache.delete(e2), this;
  }
  getVertexShaderID(e2) {
    return this._getShaderStage(e2.vertexShader).id;
  }
  getFragmentShaderID(e2) {
    return this._getShaderStage(e2.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e2) {
    const t2 = this.materialCache;
    let n2 = t2.get(e2);
    return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), t2.set(e2, n2)), n2;
  }
  _getShaderStage(e2) {
    const t2 = this.shaderCache;
    let n2 = t2.get(e2);
    return void 0 === n2 && (n2 = new Hi2(e2), t2.set(e2, n2)), n2;
  }
};
var Hi2 = class {
  constructor(e2) {
    this.id = Fi2++, this.code = e2, this.usedTimes = 0;
  }
};
function Gi2(e2, t2, n2, r2, i2, o2, s2) {
  const l2 = new fr(), d2 = new Bi2(), u2 = /* @__PURE__ */ new Set(), f2 = [], h2 = i2.logarithmicDepthBuffer, _2 = i2.vertexTextures;
  let g2 = i2.precision;
  const v2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function E2(e3) {
    return u2.add(e3), 0 === e3 ? "uv" : `uv${e3}`;
  }
  return { getParameters: function(o3, l3, f3, S2, T2) {
    const M2 = S2.fog, x2 = T2.geometry, R2 = o3.isMeshStandardMaterial ? S2.environment : null, A2 = (o3.isMeshStandardMaterial ? n2 : t2).get(o3.envMap || R2), b2 = A2 && A2.mapping === dt ? A2.image.height : null, C2 = v2[o3.type];
    null !== o3.precision && (g2 = i2.getMaxPrecision(o3.precision), g2 !== o3.precision && console.warn("THREE.WebGLProgram.getParameters:", o3.precision, "not supported, using", g2, "instead."));
    const L2 = x2.morphAttributes.position || x2.morphAttributes.normal || x2.morphAttributes.color, P2 = void 0 !== L2 ? L2.length : 0;
    let U2, w2, I2, y2, N2 = 0;
    if (void 0 !== x2.morphAttributes.position && (N2 = 1), void 0 !== x2.morphAttributes.normal && (N2 = 2), void 0 !== x2.morphAttributes.color && (N2 = 3), C2) {
      const e3 = Dn2[C2];
      U2 = e3.vertexShader, w2 = e3.fragmentShader;
    } else U2 = o3.vertexShader, w2 = o3.fragmentShader, d2.update(o3), I2 = d2.getVertexShaderID(o3), y2 = d2.getFragmentShaderID(o3);
    const O2 = e2.getRenderTarget(), B2 = e2.state.buffers.depth.getReversed(), H2 = true === T2.isInstancedMesh, G2 = true === T2.isBatchedMesh, V2 = !!o3.map, z2 = !!o3.matcap, k2 = !!A2, W2 = !!o3.aoMap, X2 = !!o3.lightMap, Y2 = !!o3.bumpMap, K2 = !!o3.normalMap, q2 = !!o3.displacementMap, j2 = !!o3.emissiveMap, Z2 = !!o3.metalnessMap, $2 = !!o3.roughnessMap, Q2 = o3.anisotropy > 0, J2 = o3.clearcoat > 0, ee2 = o3.dispersion > 0, te2 = o3.iridescence > 0, ne2 = o3.sheen > 0, re2 = o3.transmission > 0, ie2 = Q2 && !!o3.anisotropyMap, ae2 = J2 && !!o3.clearcoatMap, oe2 = J2 && !!o3.clearcoatNormalMap, se2 = J2 && !!o3.clearcoatRoughnessMap, le2 = te2 && !!o3.iridescenceMap, ce2 = te2 && !!o3.iridescenceThicknessMap, de2 = ne2 && !!o3.sheenColorMap, ue2 = ne2 && !!o3.sheenRoughnessMap, _e2 = !!o3.specularMap, ge2 = !!o3.specularColorMap, ve2 = !!o3.specularIntensityMap, Ee2 = re2 && !!o3.transmissionMap, Se2 = re2 && !!o3.thicknessMap, Te2 = !!o3.gradientMap, Me2 = !!o3.alphaMap, xe2 = o3.alphaTest > 0, Re2 = !!o3.alphaHash, Ae2 = !!o3.extensions;
    let be2 = $;
    o3.toneMapped && (null !== O2 && true !== O2.isXRRenderTarget || (be2 = e2.toneMapping));
    const Ce2 = { shaderID: C2, shaderType: o3.type, shaderName: o3.name, vertexShader: U2, fragmentShader: w2, defines: o3.defines, customVertexShaderID: I2, customFragmentShaderID: y2, isRawShaderMaterial: true === o3.isRawShaderMaterial, glslVersion: o3.glslVersion, precision: g2, batching: G2, batchingColor: G2 && null !== T2._colorsTexture, instancing: H2, instancingColor: H2 && null !== T2.instanceColor, instancingMorph: H2 && null !== T2.morphTexture, supportsVertexTextures: _2, outputColorSpace: null === O2 ? e2.outputColorSpace : true === O2.isXRRenderTarget ? O2.texture.colorSpace : Ge, alphaToCoverage: !!o3.alphaToCoverage, map: V2, matcap: z2, envMap: k2, envMapMode: k2 && A2.mapping, envMapCubeUVHeight: b2, aoMap: W2, lightMap: X2, bumpMap: Y2, normalMap: K2, displacementMap: _2 && q2, emissiveMap: j2, normalMapObjectSpace: K2 && o3.normalMapType === Xe, normalMapTangentSpace: K2 && o3.normalMapType === Je, metalnessMap: Z2, roughnessMap: $2, anisotropy: Q2, anisotropyMap: ie2, clearcoat: J2, clearcoatMap: ae2, clearcoatNormalMap: oe2, clearcoatRoughnessMap: se2, dispersion: ee2, iridescence: te2, iridescenceMap: le2, iridescenceThicknessMap: ce2, sheen: ne2, sheenColorMap: de2, sheenRoughnessMap: ue2, specularMap: _e2, specularColorMap: ge2, specularIntensityMap: ve2, transmission: re2, transmissionMap: Ee2, thicknessMap: Se2, gradientMap: Te2, opaque: false === o3.transparent && o3.blending === y && false === o3.alphaToCoverage, alphaMap: Me2, alphaTest: xe2, alphaHash: Re2, combine: o3.combine, mapUv: V2 && E2(o3.map.channel), aoMapUv: W2 && E2(o3.aoMap.channel), lightMapUv: X2 && E2(o3.lightMap.channel), bumpMapUv: Y2 && E2(o3.bumpMap.channel), normalMapUv: K2 && E2(o3.normalMap.channel), displacementMapUv: q2 && E2(o3.displacementMap.channel), emissiveMapUv: j2 && E2(o3.emissiveMap.channel), metalnessMapUv: Z2 && E2(o3.metalnessMap.channel), roughnessMapUv: $2 && E2(o3.roughnessMap.channel), anisotropyMapUv: ie2 && E2(o3.anisotropyMap.channel), clearcoatMapUv: ae2 && E2(o3.clearcoatMap.channel), clearcoatNormalMapUv: oe2 && E2(o3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: se2 && E2(o3.clearcoatRoughnessMap.channel), iridescenceMapUv: le2 && E2(o3.iridescenceMap.channel), iridescenceThicknessMapUv: ce2 && E2(o3.iridescenceThicknessMap.channel), sheenColorMapUv: de2 && E2(o3.sheenColorMap.channel), sheenRoughnessMapUv: ue2 && E2(o3.sheenRoughnessMap.channel), specularMapUv: _e2 && E2(o3.specularMap.channel), specularColorMapUv: ge2 && E2(o3.specularColorMap.channel), specularIntensityMapUv: ve2 && E2(o3.specularIntensityMap.channel), transmissionMapUv: Ee2 && E2(o3.transmissionMap.channel), thicknessMapUv: Se2 && E2(o3.thicknessMap.channel), alphaMapUv: Me2 && E2(o3.alphaMap.channel), vertexTangents: !!x2.attributes.tangent && (K2 || Q2), vertexColors: o3.vertexColors, vertexAlphas: true === o3.vertexColors && !!x2.attributes.color && 4 === x2.attributes.color.itemSize, pointsUvs: true === T2.isPoints && !!x2.attributes.uv && (V2 || Me2), fog: !!M2, useFog: true === o3.fog, fogExp2: !!M2 && M2.isFogExp2, flatShading: true === o3.flatShading && false === o3.wireframe, sizeAttenuation: true === o3.sizeAttenuation, logarithmicDepthBuffer: h2, reversedDepthBuffer: B2, skinning: true === T2.isSkinnedMesh, morphTargets: void 0 !== x2.morphAttributes.position, morphNormals: void 0 !== x2.morphAttributes.normal, morphColors: void 0 !== x2.morphAttributes.color, morphTargetsCount: P2, morphTextureStride: N2, numDirLights: l3.directional.length, numPointLights: l3.point.length, numSpotLights: l3.spot.length, numSpotLightMaps: l3.spotLightMap.length, numRectAreaLights: l3.rectArea.length, numHemiLights: l3.hemi.length, numDirLightShadows: l3.directionalShadowMap.length, numPointLightShadows: l3.pointShadowMap.length, numSpotLightShadows: l3.spotShadowMap.length, numSpotLightShadowsWithMaps: l3.numSpotLightShadowsWithMaps, numLightProbes: l3.numLightProbes, numClippingPlanes: s2.numPlanes, numClipIntersection: s2.numIntersection, dithering: o3.dithering, shadowMapEnabled: e2.shadowMap.enabled && f3.length > 0, shadowMapType: e2.shadowMap.type, toneMapping: be2, decodeVideoTexture: V2 && true === o3.map.isVideoTexture && yi.getTransfer(o3.map.colorSpace) === Qe, decodeVideoTextureEmissive: j2 && true === o3.emissiveMap.isVideoTexture && yi.getTransfer(o3.emissiveMap.colorSpace) === Qe, premultipliedAlpha: o3.premultipliedAlpha, doubleSided: o3.side === p, flipSided: o3.side === d, useDepthPacking: o3.depthPacking >= 0, depthPacking: o3.depthPacking || 0, index0AttributeName: o3.index0AttributeName, extensionClipCullDistance: Ae2 && true === o3.extensions.clipCullDistance && r2.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Ae2 && true === o3.extensions.multiDraw || G2) && r2.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: r2.has("KHR_parallel_shader_compile"), customProgramCacheKey: o3.customProgramCacheKey() };
    return Ce2.vertexUv1s = u2.has(1), Ce2.vertexUv2s = u2.has(2), Ce2.vertexUv3s = u2.has(3), u2.clear(), Ce2;
  }, getProgramCacheKey: function(t3) {
    const n3 = [];
    if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), void 0 !== t3.defines) for (const e3 in t3.defines) n3.push(e3), n3.push(t3.defines[e3]);
    return false === t3.isRawShaderMaterial && (!(function(e3, t4) {
      e3.push(t4.precision), e3.push(t4.outputColorSpace), e3.push(t4.envMapMode), e3.push(t4.envMapCubeUVHeight), e3.push(t4.mapUv), e3.push(t4.alphaMapUv), e3.push(t4.lightMapUv), e3.push(t4.aoMapUv), e3.push(t4.bumpMapUv), e3.push(t4.normalMapUv), e3.push(t4.displacementMapUv), e3.push(t4.emissiveMapUv), e3.push(t4.metalnessMapUv), e3.push(t4.roughnessMapUv), e3.push(t4.anisotropyMapUv), e3.push(t4.clearcoatMapUv), e3.push(t4.clearcoatNormalMapUv), e3.push(t4.clearcoatRoughnessMapUv), e3.push(t4.iridescenceMapUv), e3.push(t4.iridescenceThicknessMapUv), e3.push(t4.sheenColorMapUv), e3.push(t4.sheenRoughnessMapUv), e3.push(t4.specularMapUv), e3.push(t4.specularColorMapUv), e3.push(t4.specularIntensityMapUv), e3.push(t4.transmissionMapUv), e3.push(t4.thicknessMapUv), e3.push(t4.combine), e3.push(t4.fogExp2), e3.push(t4.sizeAttenuation), e3.push(t4.morphTargetsCount), e3.push(t4.morphAttributeCount), e3.push(t4.numDirLights), e3.push(t4.numPointLights), e3.push(t4.numSpotLights), e3.push(t4.numSpotLightMaps), e3.push(t4.numHemiLights), e3.push(t4.numRectAreaLights), e3.push(t4.numDirLightShadows), e3.push(t4.numPointLightShadows), e3.push(t4.numSpotLightShadows), e3.push(t4.numSpotLightShadowsWithMaps), e3.push(t4.numLightProbes), e3.push(t4.shadowMapType), e3.push(t4.toneMapping), e3.push(t4.numClippingPlanes), e3.push(t4.numClipIntersection), e3.push(t4.depthPacking);
    })(n3, t3), (function(e3, t4) {
      l2.disableAll(), t4.supportsVertexTextures && l2.enable(0);
      t4.instancing && l2.enable(1);
      t4.instancingColor && l2.enable(2);
      t4.instancingMorph && l2.enable(3);
      t4.matcap && l2.enable(4);
      t4.envMap && l2.enable(5);
      t4.normalMapObjectSpace && l2.enable(6);
      t4.normalMapTangentSpace && l2.enable(7);
      t4.clearcoat && l2.enable(8);
      t4.iridescence && l2.enable(9);
      t4.alphaTest && l2.enable(10);
      t4.vertexColors && l2.enable(11);
      t4.vertexAlphas && l2.enable(12);
      t4.vertexUv1s && l2.enable(13);
      t4.vertexUv2s && l2.enable(14);
      t4.vertexUv3s && l2.enable(15);
      t4.vertexTangents && l2.enable(16);
      t4.anisotropy && l2.enable(17);
      t4.alphaHash && l2.enable(18);
      t4.batching && l2.enable(19);
      t4.dispersion && l2.enable(20);
      t4.batchingColor && l2.enable(21);
      t4.gradientMap && l2.enable(22);
      e3.push(l2.mask), l2.disableAll(), t4.fog && l2.enable(0);
      t4.useFog && l2.enable(1);
      t4.flatShading && l2.enable(2);
      t4.logarithmicDepthBuffer && l2.enable(3);
      t4.reversedDepthBuffer && l2.enable(4);
      t4.skinning && l2.enable(5);
      t4.morphTargets && l2.enable(6);
      t4.morphNormals && l2.enable(7);
      t4.morphColors && l2.enable(8);
      t4.premultipliedAlpha && l2.enable(9);
      t4.shadowMapEnabled && l2.enable(10);
      t4.doubleSided && l2.enable(11);
      t4.flipSided && l2.enable(12);
      t4.useDepthPacking && l2.enable(13);
      t4.dithering && l2.enable(14);
      t4.transmission && l2.enable(15);
      t4.sheen && l2.enable(16);
      t4.opaque && l2.enable(17);
      t4.pointsUvs && l2.enable(18);
      t4.decodeVideoTexture && l2.enable(19);
      t4.decodeVideoTextureEmissive && l2.enable(20);
      t4.alphaToCoverage && l2.enable(21);
      e3.push(l2.mask);
    })(n3, t3), n3.push(e2.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
  }, getUniforms: function(e3) {
    const t3 = v2[e3.type];
    let n3;
    if (t3) {
      const e4 = Dn2[t3];
      n3 = Xn.clone(e4.uniforms);
    } else n3 = e3.uniforms;
    return n3;
  }, acquireProgram: function(t3, n3) {
    let r3;
    for (let e3 = 0, t4 = f2.length; e3 < t4; e3++) {
      const t5 = f2[e3];
      if (t5.cacheKey === n3) {
        r3 = t5, ++r3.usedTimes;
        break;
      }
    }
    return void 0 === r3 && (r3 = new Oi2(e2, n3, t3, o2), f2.push(r3)), r3;
  }, releaseProgram: function(e3) {
    if (0 === --e3.usedTimes) {
      const t3 = f2.indexOf(e3);
      f2[t3] = f2[f2.length - 1], f2.pop(), e3.destroy();
    }
  }, releaseShaderCache: function(e3) {
    d2.remove(e3);
  }, programs: f2, dispose: function() {
    d2.dispose();
  } };
}
function Vi2() {
  let e2 = /* @__PURE__ */ new WeakMap();
  return { has: function(t2) {
    return e2.has(t2);
  }, get: function(t2) {
    let n2 = e2.get(t2);
    return void 0 === n2 && (n2 = {}, e2.set(t2, n2)), n2;
  }, remove: function(t2) {
    e2.delete(t2);
  }, update: function(t2, n2, r2) {
    e2.get(t2)[n2] = r2;
  }, dispose: function() {
    e2 = /* @__PURE__ */ new WeakMap();
  } };
}
function zi2(e2, t2) {
  return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.material.id !== t2.material.id ? e2.material.id - t2.material.id : e2.z !== t2.z ? e2.z - t2.z : e2.id - t2.id;
}
function ki2(e2, t2) {
  return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.z !== t2.z ? t2.z - e2.z : e2.id - t2.id;
}
function Wi2() {
  const e2 = [];
  let t2 = 0;
  const n2 = [], r2 = [], i2 = [];
  function a2(n3, r3, i3, a3, o2, s2) {
    let l2 = e2[t2];
    return void 0 === l2 ? (l2 = { id: n3.id, object: n3, geometry: r3, material: i3, groupOrder: a3, renderOrder: n3.renderOrder, z: o2, group: s2 }, e2[t2] = l2) : (l2.id = n3.id, l2.object = n3, l2.geometry = r3, l2.material = i3, l2.groupOrder = a3, l2.renderOrder = n3.renderOrder, l2.z = o2, l2.group = s2), t2++, l2;
  }
  return { opaque: n2, transmissive: r2, transparent: i2, init: function() {
    t2 = 0, n2.length = 0, r2.length = 0, i2.length = 0;
  }, push: function(e3, t3, o2, s2, l2, c2) {
    const d2 = a2(e3, t3, o2, s2, l2, c2);
    o2.transmission > 0 ? r2.push(d2) : true === o2.transparent ? i2.push(d2) : n2.push(d2);
  }, unshift: function(e3, t3, o2, s2, l2, c2) {
    const d2 = a2(e3, t3, o2, s2, l2, c2);
    o2.transmission > 0 ? r2.unshift(d2) : true === o2.transparent ? i2.unshift(d2) : n2.unshift(d2);
  }, finish: function() {
    for (let n3 = t2, r3 = e2.length; n3 < r3; n3++) {
      const t3 = e2[n3];
      if (null === t3.id) break;
      t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
    }
  }, sort: function(e3, t3) {
    n2.length > 1 && n2.sort(e3 || zi2), r2.length > 1 && r2.sort(t3 || ki2), i2.length > 1 && i2.sort(t3 || ki2);
  } };
}
function Xi2() {
  let e2 = /* @__PURE__ */ new WeakMap();
  return { get: function(t2, n2) {
    const r2 = e2.get(t2);
    let i2;
    return void 0 === r2 ? (i2 = new Wi2(), e2.set(t2, [i2])) : n2 >= r2.length ? (i2 = new Wi2(), r2.push(i2)) : i2 = r2[n2], i2;
  }, dispose: function() {
    e2 = /* @__PURE__ */ new WeakMap();
  } };
}
function Yi2() {
  const e2 = {};
  return { get: function(t2) {
    if (void 0 !== e2[t2.id]) return e2[t2.id];
    let r2;
    switch (t2.type) {
      case "DirectionalLight":
        r2 = { direction: new Ks(), color: new Qr() };
        break;
      case "SpotLight":
        r2 = { position: new Ks(), direction: new Ks(), color: new Qr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        r2 = { position: new Ks(), color: new Qr(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        r2 = { direction: new Ks(), skyColor: new Qr(), groundColor: new Qr() };
        break;
      case "RectAreaLight":
        r2 = { color: new Qr(), position: new Ks(), halfWidth: new Ks(), halfHeight: new Ks() };
    }
    return e2[t2.id] = r2, r2;
  } };
}
var Ki2 = 0;
function qi2(e2, t2) {
  return (t2.castShadow ? 2 : 0) - (e2.castShadow ? 2 : 0) + (t2.map ? 1 : 0) - (e2.map ? 1 : 0);
}
function ji2(e2) {
  const n2 = new Yi2(), r2 = /* @__PURE__ */ (function() {
    const e3 = {};
    return { get: function(n3) {
      if (void 0 !== e3[n3.id]) return e3[n3.id];
      let r3;
      switch (n3.type) {
        case "DirectionalLight":
        case "SpotLight":
          r3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $s() };
          break;
        case "PointLight":
          r3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $s(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
      }
      return e3[n3.id] = r3, r3;
    } };
  })(), a2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let e3 = 0; e3 < 9; e3++) a2.probe.push(new Ks());
  const o2 = new Ks(), s2 = new ar(), l2 = new ar();
  return { setup: function(t2) {
    let i2 = 0, o3 = 0, s3 = 0;
    for (let e3 = 0; e3 < 9; e3++) a2.probe[e3].set(0, 0, 0);
    let l3 = 0, c2 = 0, d2 = 0, u2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, _2 = 0, g2 = 0, v2 = 0;
    t2.sort(qi2);
    for (let e3 = 0, E3 = t2.length; e3 < E3; e3++) {
      const E4 = t2[e3], S2 = E4.color, T2 = E4.intensity, M2 = E4.distance, x2 = E4.shadow && E4.shadow.map ? E4.shadow.map.texture : null;
      if (E4.isAmbientLight) i2 += S2.r * T2, o3 += S2.g * T2, s3 += S2.b * T2;
      else if (E4.isLightProbe) {
        for (let e4 = 0; e4 < 9; e4++) a2.probe[e4].addScaledVector(E4.sh.coefficients[e4], T2);
        v2++;
      } else if (E4.isDirectionalLight) {
        const e4 = n2.get(E4);
        if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), E4.castShadow) {
          const e5 = E4.shadow, t3 = r2.get(E4);
          t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, a2.directionalShadow[l3] = t3, a2.directionalShadowMap[l3] = x2, a2.directionalShadowMatrix[l3] = E4.shadow.matrix, p2++;
        }
        a2.directional[l3] = e4, l3++;
      } else if (E4.isSpotLight) {
        const e4 = n2.get(E4);
        e4.position.setFromMatrixPosition(E4.matrixWorld), e4.color.copy(S2).multiplyScalar(T2), e4.distance = M2, e4.coneCos = Math.cos(E4.angle), e4.penumbraCos = Math.cos(E4.angle * (1 - E4.penumbra)), e4.decay = E4.decay, a2.spot[d2] = e4;
        const t3 = E4.shadow;
        if (E4.map && (a2.spotLightMap[_2] = E4.map, _2++, t3.updateMatrices(E4), E4.castShadow && g2++), a2.spotLightMatrix[d2] = t3.matrix, E4.castShadow) {
          const e5 = r2.get(E4);
          e5.shadowIntensity = t3.intensity, e5.shadowBias = t3.bias, e5.shadowNormalBias = t3.normalBias, e5.shadowRadius = t3.radius, e5.shadowMapSize = t3.mapSize, a2.spotShadow[d2] = e5, a2.spotShadowMap[d2] = x2, h2++;
        }
        d2++;
      } else if (E4.isRectAreaLight) {
        const e4 = n2.get(E4);
        e4.color.copy(S2).multiplyScalar(T2), e4.halfWidth.set(0.5 * E4.width, 0, 0), e4.halfHeight.set(0, 0.5 * E4.height, 0), a2.rectArea[u2] = e4, u2++;
      } else if (E4.isPointLight) {
        const e4 = n2.get(E4);
        if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), e4.distance = E4.distance, e4.decay = E4.decay, E4.castShadow) {
          const e5 = E4.shadow, t3 = r2.get(E4);
          t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, t3.shadowCameraNear = e5.camera.near, t3.shadowCameraFar = e5.camera.far, a2.pointShadow[c2] = t3, a2.pointShadowMap[c2] = x2, a2.pointShadowMatrix[c2] = E4.shadow.matrix, m2++;
        }
        a2.point[c2] = e4, c2++;
      } else if (E4.isHemisphereLight) {
        const e4 = n2.get(E4);
        e4.skyColor.copy(E4.color).multiplyScalar(T2), e4.groundColor.copy(E4.groundColor).multiplyScalar(T2), a2.hemi[f2] = e4, f2++;
      }
    }
    u2 > 0 && (true === e2.has("OES_texture_float_linear") ? (a2.rectAreaLTC1 = Un2.LTC_FLOAT_1, a2.rectAreaLTC2 = Un2.LTC_FLOAT_2) : (a2.rectAreaLTC1 = Un2.LTC_HALF_1, a2.rectAreaLTC2 = Un2.LTC_HALF_2)), a2.ambient[0] = i2, a2.ambient[1] = o3, a2.ambient[2] = s3;
    const E2 = a2.hash;
    E2.directionalLength === l3 && E2.pointLength === c2 && E2.spotLength === d2 && E2.rectAreaLength === u2 && E2.hemiLength === f2 && E2.numDirectionalShadows === p2 && E2.numPointShadows === m2 && E2.numSpotShadows === h2 && E2.numSpotMaps === _2 && E2.numLightProbes === v2 || (a2.directional.length = l3, a2.spot.length = d2, a2.rectArea.length = u2, a2.point.length = c2, a2.hemi.length = f2, a2.directionalShadow.length = p2, a2.directionalShadowMap.length = p2, a2.pointShadow.length = m2, a2.pointShadowMap.length = m2, a2.spotShadow.length = h2, a2.spotShadowMap.length = h2, a2.directionalShadowMatrix.length = p2, a2.pointShadowMatrix.length = m2, a2.spotLightMatrix.length = h2 + _2 - g2, a2.spotLightMap.length = _2, a2.numSpotLightShadowsWithMaps = g2, a2.numLightProbes = v2, E2.directionalLength = l3, E2.pointLength = c2, E2.spotLength = d2, E2.rectAreaLength = u2, E2.hemiLength = f2, E2.numDirectionalShadows = p2, E2.numPointShadows = m2, E2.numSpotShadows = h2, E2.numSpotMaps = _2, E2.numLightProbes = v2, a2.version = Ki2++);
  }, setupView: function(e3, t2) {
    let n3 = 0, r3 = 0, i2 = 0, c2 = 0, d2 = 0;
    const u2 = t2.matrixWorldInverse;
    for (let t3 = 0, f2 = e3.length; t3 < f2; t3++) {
      const f3 = e3[t3];
      if (f3.isDirectionalLight) {
        const e4 = a2.directional[n3];
        e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), n3++;
      } else if (f3.isSpotLight) {
        const e4 = a2.spot[i2];
        e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), i2++;
      } else if (f3.isRectAreaLight) {
        const e4 = a2.rectArea[c2];
        e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), l2.identity(), s2.copy(f3.matrixWorld), s2.premultiply(u2), l2.extractRotation(s2), e4.halfWidth.set(0.5 * f3.width, 0, 0), e4.halfHeight.set(0, 0.5 * f3.height, 0), e4.halfWidth.applyMatrix4(l2), e4.halfHeight.applyMatrix4(l2), c2++;
      } else if (f3.isPointLight) {
        const e4 = a2.point[r3];
        e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), r3++;
      } else if (f3.isHemisphereLight) {
        const e4 = a2.hemi[d2];
        e4.direction.setFromMatrixPosition(f3.matrixWorld), e4.direction.transformDirection(u2), d2++;
      }
    }
  }, state: a2 };
}
function Zi2(e2) {
  const t2 = new ji2(e2), n2 = [], r2 = [];
  const i2 = { lightsArray: n2, shadowsArray: r2, camera: null, lights: t2, transmissionRenderTarget: {} };
  return { init: function(e3) {
    i2.camera = e3, n2.length = 0, r2.length = 0;
  }, state: i2, setupLights: function() {
    t2.setup(n2);
  }, setupLightsView: function(e3) {
    t2.setupView(n2, e3);
  }, pushLight: function(e3) {
    n2.push(e3);
  }, pushShadow: function(e3) {
    r2.push(e3);
  } };
}
function $i2(e2) {
  let t2 = /* @__PURE__ */ new WeakMap();
  return { get: function(n2, r2 = 0) {
    const i2 = t2.get(n2);
    let a2;
    return void 0 === i2 ? (a2 = new Zi2(e2), t2.set(n2, [a2])) : r2 >= i2.length ? (a2 = new Zi2(e2), i2.push(a2)) : a2 = i2[r2], a2;
  }, dispose: function() {
    t2 = /* @__PURE__ */ new WeakMap();
  } };
}
function Qi2(e2, n2, r2) {
  let i2 = new lo();
  const a2 = new $s(), s2 = new $s(), d2 = new Ti(), u2 = new Ul({ depthPacking: Ue }), f2 = new Hl(), p2 = {}, m2 = r2.maxTextureSize, h2 = { [u]: d, [d]: u, [p]: p }, g2 = new Yn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new $s() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), v2 = g2.clone();
  v2.defines.HORIZONTAL_PASS = 1;
  const E2 = new In();
  E2.setAttribute("position", new dn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const S2 = new Dn(E2, g2), T2 = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = h;
  let M2 = this.type;
  function x2(t2, r3) {
    const i3 = n2.update(S2);
    g2.defines.VSM_SAMPLES !== t2.blurSamples && (g2.defines.VSM_SAMPLES = t2.blurSamples, v2.defines.VSM_SAMPLES = t2.blurSamples, g2.needsUpdate = true, v2.needsUpdate = true), null === t2.mapPass && (t2.mapPass = new Ci(a2.x, a2.y)), g2.uniforms.shadow_pass.value = t2.map.texture, g2.uniforms.resolution.value = t2.mapSize, g2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.mapPass), e2.clear(), e2.renderBufferDirect(r3, null, i3, g2, S2, null), v2.uniforms.shadow_pass.value = t2.mapPass.texture, v2.uniforms.resolution.value = t2.mapSize, v2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.map), e2.clear(), e2.renderBufferDirect(r3, null, i3, v2, S2, null);
  }
  function R2(t2, n3, r3, i3) {
    let a3 = null;
    const o2 = true === r3.isPointLight ? t2.customDistanceMaterial : t2.customDepthMaterial;
    if (void 0 !== o2) a3 = o2;
    else if (a3 = true === r3.isPointLight ? f2 : u2, e2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || true === n3.alphaToCoverage) {
      const e3 = a3.uuid, t3 = n3.uuid;
      let r4 = p2[e3];
      void 0 === r4 && (r4 = {}, p2[e3] = r4);
      let i4 = r4[t3];
      void 0 === i4 && (i4 = a3.clone(), r4[t3] = i4, n3.addEventListener("dispose", b2)), a3 = i4;
    }
    if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, a3.side = i3 === c ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : h2[n3.side], a3.alphaMap = n3.alphaMap, a3.alphaTest = true === n3.alphaToCoverage ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, true === r3.isPointLight && true === a3.isMeshDistanceMaterial) {
      e2.properties.get(a3).light = r3;
    }
    return a3;
  }
  function A2(t2, r3, a3, o2, s3) {
    if (false === t2.visible) return;
    if (t2.layers.test(r3.layers) && (t2.isMesh || t2.isLine || t2.isPoints) && (t2.castShadow || t2.receiveShadow && s3 === c) && (!t2.frustumCulled || i2.intersectsObject(t2))) {
      t2.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, t2.matrixWorld);
      const i3 = n2.update(t2), l3 = t2.material;
      if (Array.isArray(l3)) {
        const n3 = i3.groups;
        for (let c2 = 0, d3 = n3.length; c2 < d3; c2++) {
          const d4 = n3[c2], u3 = l3[d4.materialIndex];
          if (u3 && u3.visible) {
            const n4 = R2(t2, u3, o2, s3);
            t2.onBeforeShadow(e2, t2, r3, a3, i3, n4, d4), e2.renderBufferDirect(a3, null, i3, n4, t2, d4), t2.onAfterShadow(e2, t2, r3, a3, i3, n4, d4);
          }
        }
      } else if (l3.visible) {
        const n3 = R2(t2, l3, o2, s3);
        t2.onBeforeShadow(e2, t2, r3, a3, i3, n3, null), e2.renderBufferDirect(a3, null, i3, n3, t2, null), t2.onAfterShadow(e2, t2, r3, a3, i3, n3, null);
      }
    }
    const l2 = t2.children;
    for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) A2(l2[e3], r3, a3, o2, s3);
  }
  function b2(e3) {
    e3.target.removeEventListener("dispose", b2);
    for (const t2 in p2) {
      const n3 = p2[t2], r3 = e3.target.uuid;
      if (r3 in n3) {
        n3[r3].dispose(), delete n3[r3];
      }
    }
  }
  this.render = function(t2, n3, r3) {
    if (false === T2.enabled) return;
    if (false === T2.autoUpdate && false === T2.needsUpdate) return;
    if (0 === t2.length) return;
    const o2 = e2.getRenderTarget(), l2 = e2.getActiveCubeFace(), c2 = e2.getActiveMipmapLevel(), u3 = e2.state;
    u3.setBlending(m), true === u3.buffers.depth.getReversed() ? u3.buffers.color.setClear(0, 0, 0, 0) : u3.buffers.color.setClear(1, 1, 1, 1), u3.buffers.depth.setTest(true), u3.setScissorTest(false);
    const f3 = M2 !== c && this.type === c, p3 = M2 === c && this.type !== c;
    for (let o3 = 0, l3 = t2.length; o3 < l3; o3++) {
      const l4 = t2[o3], c3 = l4.shadow;
      if (void 0 === c3) {
        console.warn("THREE.WebGLShadowMap:", l4, "has no shadow.");
        continue;
      }
      if (false === c3.autoUpdate && false === c3.needsUpdate) continue;
      a2.copy(c3.mapSize);
      const h3 = c3.getFrameExtents();
      if (a2.multiply(h3), s2.copy(c3.mapSize), (a2.x > m2 || a2.y > m2) && (a2.x > m2 && (s2.x = Math.floor(m2 / h3.x), a2.x = s2.x * h3.x, c3.mapSize.x = s2.x), a2.y > m2 && (s2.y = Math.floor(m2 / h3.y), a2.y = s2.y * h3.y, c3.mapSize.y = s2.y)), null === c3.map || true === f3 || true === p3) {
        const e3 = this.type !== c ? { minFilter: gt, magFilter: gt } : {};
        null !== c3.map && c3.map.dispose(), c3.map = new Ci(a2.x, a2.y, e3), c3.map.texture.name = l4.name + ".shadowMap", c3.camera.updateProjectionMatrix();
      }
      e2.setRenderTarget(c3.map), e2.clear();
      const _2 = c3.getViewportCount();
      for (let e3 = 0; e3 < _2; e3++) {
        const t3 = c3.getViewport(e3);
        d2.set(s2.x * t3.x, s2.y * t3.y, s2.x * t3.z, s2.y * t3.w), u3.viewport(d2), c3.updateMatrices(l4, e3), i2 = c3.getFrustum(), A2(n3, r3, c3.camera, l4, this.type);
      }
      true !== c3.isPointLightShadow && this.type === c && x2(c3, r3), c3.needsUpdate = false;
    }
    M2 = this.type, T2.needsUpdate = false, e2.setRenderTarget(o2, l2, c2);
  };
}
var Ji2 = { [j]: D, [W]: J, [H]: X, [U]: q, [D]: j, [J]: W, [X]: H, [q]: U };
function ea2(e2, t2) {
  const r2 = new function() {
    let t3 = false;
    const n2 = new Ti();
    let r3 = null;
    const i3 = new Ti(0, 0, 0, 0);
    return { setMask: function(n3) {
      r3 === n3 || t3 || (e2.colorMask(n3, n3, n3, n3), r3 = n3);
    }, setLocked: function(e3) {
      t3 = e3;
    }, setClear: function(t4, r4, a3, o3, s3) {
      true === s3 && (t4 *= o3, r4 *= o3, a3 *= o3), n2.set(t4, r4, a3, o3), false === i3.equals(n2) && (e2.clearColor(t4, r4, a3, o3), i3.copy(n2));
    }, reset: function() {
      t3 = false, r3 = null, i3.set(-1, 0, 0, 0);
    } };
  }(), i2 = new function() {
    let n2 = false, r3 = false, i3 = null, a3 = null, o3 = null;
    return { setReversed: function(e3) {
      if (r3 !== e3) {
        const n3 = t2.get("EXT_clip_control");
        e3 ? n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.ZERO_TO_ONE_EXT) : n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.NEGATIVE_ONE_TO_ONE_EXT), r3 = e3;
        const i4 = o3;
        o3 = null, this.setClear(i4);
      }
    }, getReversed: function() {
      return r3;
    }, setTest: function(t3) {
      t3 ? W2(e2.DEPTH_TEST) : X2(e2.DEPTH_TEST);
    }, setMask: function(t3) {
      i3 === t3 || n2 || (e2.depthMask(t3), i3 = t3);
    }, setFunc: function(t3) {
      if (r3 && (t3 = Ji2[t3]), a3 !== t3) {
        switch (t3) {
          case j:
            e2.depthFunc(e2.NEVER);
            break;
          case D:
            e2.depthFunc(e2.ALWAYS);
            break;
          case W:
            e2.depthFunc(e2.LESS);
            break;
          case U:
            e2.depthFunc(e2.LEQUAL);
            break;
          case H:
            e2.depthFunc(e2.EQUAL);
            break;
          case q:
            e2.depthFunc(e2.GEQUAL);
            break;
          case J:
            e2.depthFunc(e2.GREATER);
            break;
          case X:
            e2.depthFunc(e2.NOTEQUAL);
            break;
          default:
            e2.depthFunc(e2.LEQUAL);
        }
        a3 = t3;
      }
    }, setLocked: function(e3) {
      n2 = e3;
    }, setClear: function(t3) {
      o3 !== t3 && (r3 && (t3 = 1 - t3), e2.clearDepth(t3), o3 = t3);
    }, reset: function() {
      n2 = false, i3 = null, a3 = null, o3 = null, r3 = false;
    } };
  }(), a2 = new function() {
    let t3 = false, n2 = null, r3 = null, i3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
    return { setTest: function(n3) {
      t3 || (n3 ? W2(e2.STENCIL_TEST) : X2(e2.STENCIL_TEST));
    }, setMask: function(r4) {
      n2 === r4 || t3 || (e2.stencilMask(r4), n2 = r4);
    }, setFunc: function(t4, n3, o4) {
      r3 === t4 && i3 === n3 && a3 === o4 || (e2.stencilFunc(t4, n3, o4), r3 = t4, i3 = n3, a3 = o4);
    }, setOp: function(t4, n3, r4) {
      o3 === t4 && s3 === n3 && l3 === r4 || (e2.stencilOp(t4, n3, r4), o3 = t4, s3 = n3, l3 = r4);
    }, setLocked: function(e3) {
      t3 = e3;
    }, setClear: function(t4) {
      c2 !== t4 && (e2.clearStencil(t4), c2 = t4);
    }, reset: function() {
      t3 = false, n2 = null, r3 = null, i3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
    } };
  }(), o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap();
  let l2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new Qr(0, 0, 0), x2 = 0, R2 = false, A2 = null, b2 = null, C2 = null, L2 = null, P2 = null;
  const U2 = e2.getParameter(e2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let D2 = false, w2 = 0;
  const y2 = e2.getParameter(e2.VERSION);
  -1 !== y2.indexOf("WebGL") ? (w2 = parseFloat(/^WebGL (\d)/.exec(y2)[1]), D2 = w2 >= 1) : -1 !== y2.indexOf("OpenGL ES") && (w2 = parseFloat(/^OpenGL ES (\d)/.exec(y2)[1]), D2 = w2 >= 2);
  let N2 = null, O2 = {};
  const F2 = e2.getParameter(e2.SCISSOR_BOX), B2 = e2.getParameter(e2.VIEWPORT), H2 = new Ti().fromArray(F2), G2 = new Ti().fromArray(B2);
  function V2(t3, n2, r3, i3) {
    const a3 = new Uint8Array(4), o3 = e2.createTexture();
    e2.bindTexture(t3, o3), e2.texParameteri(t3, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(t3, e2.TEXTURE_MAG_FILTER, e2.NEAREST);
    for (let o4 = 0; o4 < r3; o4++) t3 === e2.TEXTURE_3D || t3 === e2.TEXTURE_2D_ARRAY ? e2.texImage3D(n2, 0, e2.RGBA, 1, 1, i3, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3) : e2.texImage2D(n2 + o4, 0, e2.RGBA, 1, 1, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3);
    return o3;
  }
  const z2 = {};
  function W2(t3) {
    true !== l2[t3] && (e2.enable(t3), l2[t3] = true);
  }
  function X2(t3) {
    false !== l2[t3] && (e2.disable(t3), l2[t3] = false);
  }
  z2[e2.TEXTURE_2D] = V2(e2.TEXTURE_2D, e2.TEXTURE_2D, 1), z2[e2.TEXTURE_CUBE_MAP] = V2(e2.TEXTURE_CUBE_MAP, e2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), z2[e2.TEXTURE_2D_ARRAY] = V2(e2.TEXTURE_2D_ARRAY, e2.TEXTURE_2D_ARRAY, 1, 1), z2[e2.TEXTURE_3D] = V2(e2.TEXTURE_3D, e2.TEXTURE_3D, 1, 1), r2.setClear(0, 0, 0, 1), i2.setClear(1), a2.setClear(0), W2(e2.DEPTH_TEST), i2.setFunc(U), j2(false), Z2(r), W2(e2.CULL_FACE), q2(m);
  const Y2 = { [v]: e2.FUNC_ADD, [w]: e2.FUNC_SUBTRACT, [M]: e2.FUNC_REVERSE_SUBTRACT };
  Y2[S] = e2.MIN, Y2[_] = e2.MAX;
  const K2 = { [A]: e2.ZERO, [T]: e2.ONE, [z]: e2.SRC_COLOR, [I]: e2.SRC_ALPHA, [O]: e2.SRC_ALPHA_SATURATE, [R]: e2.DST_COLOR, [k]: e2.DST_ALPHA, [C]: e2.ONE_MINUS_SRC_COLOR, [B]: e2.ONE_MINUS_SRC_ALPHA, [P]: e2.ONE_MINUS_DST_COLOR, [E]: e2.ONE_MINUS_DST_ALPHA, [N]: e2.CONSTANT_COLOR, [V]: e2.ONE_MINUS_CONSTANT_COLOR, [F]: e2.CONSTANT_ALPHA, [L]: e2.ONE_MINUS_CONSTANT_ALPHA };
  function q2(t3, n2, r3, i3, a3, o3, s3, l3, c2, d3) {
    if (t3 !== m) {
      if (false === m2 && (W2(e2.BLEND), m2 = true), t3 === b) a3 = a3 || n2, o3 = o3 || r3, s3 = s3 || i3, n2 === _2 && a3 === E2 || (e2.blendEquationSeparate(Y2[n2], Y2[a3]), _2 = n2, E2 = a3), r3 === g2 && i3 === v2 && o3 === S2 && s3 === T2 || (e2.blendFuncSeparate(K2[r3], K2[i3], K2[o3], K2[s3]), g2 = r3, v2 = i3, S2 = o3, T2 = s3), false !== l3.equals(M2) && c2 === x2 || (e2.blendColor(l3.r, l3.g, l3.b, c2), M2.copy(l3), x2 = c2), h2 = t3, R2 = false;
      else if (t3 !== h2 || d3 !== R2) {
        if (_2 === v && E2 === v || (e2.blendEquation(e2.FUNC_ADD), _2 = v, E2 = v), d3) switch (t3) {
          case y:
            e2.blendFuncSeparate(e2.ONE, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
            break;
          case g:
            e2.blendFunc(e2.ONE, e2.ONE);
            break;
          case f:
            e2.blendFuncSeparate(e2.ZERO, e2.ONE_MINUS_SRC_COLOR, e2.ZERO, e2.ONE);
            break;
          case x:
            e2.blendFuncSeparate(e2.DST_COLOR, e2.ONE_MINUS_SRC_ALPHA, e2.ZERO, e2.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", t3);
        }
        else switch (t3) {
          case y:
            e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
            break;
          case g:
            e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE, e2.ONE, e2.ONE);
            break;
          case f:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case x:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", t3);
        }
        g2 = null, v2 = null, S2 = null, T2 = null, M2.set(0, 0, 0), x2 = 0, h2 = t3, R2 = d3;
      }
    } else true === m2 && (X2(e2.BLEND), m2 = false);
  }
  function j2(t3) {
    A2 !== t3 && (t3 ? e2.frontFace(e2.CW) : e2.frontFace(e2.CCW), A2 = t3);
  }
  function Z2(t3) {
    t3 !== i ? (W2(e2.CULL_FACE), t3 !== b2 && (t3 === r ? e2.cullFace(e2.BACK) : t3 === n ? e2.cullFace(e2.FRONT) : e2.cullFace(e2.FRONT_AND_BACK))) : X2(e2.CULL_FACE), b2 = t3;
  }
  function $2(t3, n2, r3) {
    t3 ? (W2(e2.POLYGON_OFFSET_FILL), L2 === n2 && P2 === r3 || (e2.polygonOffset(n2, r3), L2 = n2, P2 = r3)) : X2(e2.POLYGON_OFFSET_FILL);
  }
  return { buffers: { color: r2, depth: i2, stencil: a2 }, enable: W2, disable: X2, bindFramebuffer: function(t3, n2) {
    return d2[t3] !== n2 && (e2.bindFramebuffer(t3, n2), d2[t3] = n2, t3 === e2.DRAW_FRAMEBUFFER && (d2[e2.FRAMEBUFFER] = n2), t3 === e2.FRAMEBUFFER && (d2[e2.DRAW_FRAMEBUFFER] = n2), true);
  }, drawBuffers: function(t3, n2) {
    let r3 = f2, i3 = false;
    if (t3) {
      r3 = u2.get(n2), void 0 === r3 && (r3 = [], u2.set(n2, r3));
      const a3 = t3.textures;
      if (r3.length !== a3.length || r3[0] !== e2.COLOR_ATTACHMENT0) {
        for (let t4 = 0, n3 = a3.length; t4 < n3; t4++) r3[t4] = e2.COLOR_ATTACHMENT0 + t4;
        r3.length = a3.length, i3 = true;
      }
    } else r3[0] !== e2.BACK && (r3[0] = e2.BACK, i3 = true);
    i3 && e2.drawBuffers(r3);
  }, useProgram: function(t3) {
    return p2 !== t3 && (e2.useProgram(t3), p2 = t3, true);
  }, setBlending: q2, setMaterial: function(t3, n2) {
    t3.side === p ? X2(e2.CULL_FACE) : W2(e2.CULL_FACE);
    let o3 = t3.side === d;
    n2 && (o3 = !o3), j2(o3), t3.blending === y && false === t3.transparent ? q2(m) : q2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), i2.setFunc(t3.depthFunc), i2.setTest(t3.depthTest), i2.setMask(t3.depthWrite), r2.setMask(t3.colorWrite);
    const s3 = t3.stencilWrite;
    a2.setTest(s3), s3 && (a2.setMask(t3.stencilWriteMask), a2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), a2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), $2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? W2(e2.SAMPLE_ALPHA_TO_COVERAGE) : X2(e2.SAMPLE_ALPHA_TO_COVERAGE);
  }, setFlipSided: j2, setCullFace: Z2, setLineWidth: function(t3) {
    t3 !== C2 && (D2 && e2.lineWidth(t3), C2 = t3);
  }, setPolygonOffset: $2, setScissorTest: function(t3) {
    t3 ? W2(e2.SCISSOR_TEST) : X2(e2.SCISSOR_TEST);
  }, activeTexture: function(t3) {
    void 0 === t3 && (t3 = e2.TEXTURE0 + U2 - 1), N2 !== t3 && (e2.activeTexture(t3), N2 = t3);
  }, bindTexture: function(t3, n2, r3) {
    void 0 === r3 && (r3 = null === N2 ? e2.TEXTURE0 + U2 - 1 : N2);
    let i3 = O2[r3];
    void 0 === i3 && (i3 = { type: void 0, texture: void 0 }, O2[r3] = i3), i3.type === t3 && i3.texture === n2 || (N2 !== r3 && (e2.activeTexture(r3), N2 = r3), e2.bindTexture(t3, n2 || z2[t3]), i3.type = t3, i3.texture = n2);
  }, unbindTexture: function() {
    const t3 = O2[N2];
    void 0 !== t3 && void 0 !== t3.type && (e2.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
  }, compressedTexImage2D: function() {
    try {
      e2.compressedTexImage2D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, compressedTexImage3D: function() {
    try {
      e2.compressedTexImage3D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, texImage2D: function() {
    try {
      e2.texImage2D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, texImage3D: function() {
    try {
      e2.texImage3D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, updateUBOMapping: function(t3, n2) {
    let r3 = s2.get(n2);
    void 0 === r3 && (r3 = /* @__PURE__ */ new WeakMap(), s2.set(n2, r3));
    let i3 = r3.get(t3);
    void 0 === i3 && (i3 = e2.getUniformBlockIndex(n2, t3.name), r3.set(t3, i3));
  }, uniformBlockBinding: function(t3, n2) {
    const r3 = s2.get(n2).get(t3);
    o2.get(n2) !== r3 && (e2.uniformBlockBinding(n2, r3, t3.__bindingPointIndex), o2.set(n2, r3));
  }, texStorage2D: function() {
    try {
      e2.texStorage2D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, texStorage3D: function() {
    try {
      e2.texStorage3D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, texSubImage2D: function() {
    try {
      e2.texSubImage2D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, texSubImage3D: function() {
    try {
      e2.texSubImage3D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, compressedTexSubImage2D: function() {
    try {
      e2.compressedTexSubImage2D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, compressedTexSubImage3D: function() {
    try {
      e2.compressedTexSubImage3D(...arguments);
    } catch (e3) {
      console.error("THREE.WebGLState:", e3);
    }
  }, scissor: function(t3) {
    false === H2.equals(t3) && (e2.scissor(t3.x, t3.y, t3.z, t3.w), H2.copy(t3));
  }, viewport: function(t3) {
    false === G2.equals(t3) && (e2.viewport(t3.x, t3.y, t3.z, t3.w), G2.copy(t3));
  }, reset: function() {
    e2.disable(e2.BLEND), e2.disable(e2.CULL_FACE), e2.disable(e2.DEPTH_TEST), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SCISSOR_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.SAMPLE_ALPHA_TO_COVERAGE), e2.blendEquation(e2.FUNC_ADD), e2.blendFunc(e2.ONE, e2.ZERO), e2.blendFuncSeparate(e2.ONE, e2.ZERO, e2.ONE, e2.ZERO), e2.blendColor(0, 0, 0, 0), e2.colorMask(true, true, true, true), e2.clearColor(0, 0, 0, 0), e2.depthMask(true), e2.depthFunc(e2.LESS), i2.setReversed(false), e2.clearDepth(1), e2.stencilMask(4294967295), e2.stencilFunc(e2.ALWAYS, 0, 4294967295), e2.stencilOp(e2.KEEP, e2.KEEP, e2.KEEP), e2.clearStencil(0), e2.cullFace(e2.BACK), e2.frontFace(e2.CCW), e2.polygonOffset(0, 0), e2.activeTexture(e2.TEXTURE0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), e2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), e2.useProgram(null), e2.lineWidth(1), e2.scissor(0, 0, e2.canvas.width, e2.canvas.height), e2.viewport(0, 0, e2.canvas.width, e2.canvas.height), l2 = {}, N2 = null, O2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new Qr(0, 0, 0), x2 = 0, R2 = false, A2 = null, b2 = null, C2 = null, L2 = null, P2 = null, H2.set(0, 0, e2.canvas.width, e2.canvas.height), G2.set(0, 0, e2.canvas.width, e2.canvas.height), r2.reset(), i2.reset(), a2.reset();
  } };
}
function ta2(e2, n2, r2, i2, a2, o2, s2) {
  const l2 = n2.has("WEBGL_multisampled_render_to_texture") ? n2.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), d2 = new $s(), u2 = /* @__PURE__ */ new WeakMap();
  let f2;
  const h2 = /* @__PURE__ */ new WeakMap();
  let _2 = false;
  try {
    _2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (e3) {
  }
  function g2(e3, t2) {
    return _2 ? new OffscreenCanvas(e3, t2) : oi("canvas");
  }
  function v2(e3, t2, n3) {
    let r3 = 1;
    const i3 = Q2(e3);
    if ((i3.width > n3 || i3.height > n3) && (r3 = n3 / Math.max(i3.width, i3.height)), r3 < 1) {
      if ("undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && e3 instanceof VideoFrame) {
        const n4 = Math.floor(r3 * i3.width), a3 = Math.floor(r3 * i3.height);
        void 0 === f2 && (f2 = g2(n4, a3));
        const o3 = t2 ? g2(n4, a3) : f2;
        o3.width = n4, o3.height = a3;
        return o3.getContext("2d").drawImage(e3, 0, 0, n4, a3), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + i3.width + "x" + i3.height + ") to (" + n4 + "x" + a3 + ")."), o3;
      }
      return "data" in e3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + i3.width + "x" + i3.height + ")."), e3;
    }
    return e3;
  }
  function E2(e3) {
    return e3.generateMipmaps;
  }
  function x2(t2) {
    e2.generateMipmap(t2);
  }
  function R2(t2) {
    return t2.isWebGLCubeRenderTarget ? e2.TEXTURE_CUBE_MAP : t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : t2.isWebGLArrayRenderTarget || t2.isCompressedArrayTexture ? e2.TEXTURE_2D_ARRAY : e2.TEXTURE_2D;
  }
  function A2(t2, r3, i3, a3, o3 = false) {
    if (null !== t2) {
      if (void 0 !== e2[t2]) return e2[t2];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + t2 + "'");
    }
    let s3 = r3;
    if (r3 === e2.RED && (i3 === e2.FLOAT && (s3 = e2.R32F), i3 === e2.HALF_FLOAT && (s3 = e2.R16F), i3 === e2.UNSIGNED_BYTE && (s3 = e2.R8)), r3 === e2.RED_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.R8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.R16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.R32UI), i3 === e2.BYTE && (s3 = e2.R8I), i3 === e2.SHORT && (s3 = e2.R16I), i3 === e2.INT && (s3 = e2.R32I)), r3 === e2.RG && (i3 === e2.FLOAT && (s3 = e2.RG32F), i3 === e2.HALF_FLOAT && (s3 = e2.RG16F), i3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8)), r3 === e2.RG_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RG16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RG32UI), i3 === e2.BYTE && (s3 = e2.RG8I), i3 === e2.SHORT && (s3 = e2.RG16I), i3 === e2.INT && (s3 = e2.RG32I)), r3 === e2.RGB_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RGB8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RGB16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RGB32UI), i3 === e2.BYTE && (s3 = e2.RGB8I), i3 === e2.SHORT && (s3 = e2.RGB16I), i3 === e2.INT && (s3 = e2.RGB32I)), r3 === e2.RGBA_INTEGER && (i3 === e2.UNSIGNED_BYTE && (s3 = e2.RGBA8UI), i3 === e2.UNSIGNED_SHORT && (s3 = e2.RGBA16UI), i3 === e2.UNSIGNED_INT && (s3 = e2.RGBA32UI), i3 === e2.BYTE && (s3 = e2.RGBA8I), i3 === e2.SHORT && (s3 = e2.RGBA16I), i3 === e2.INT && (s3 = e2.RGBA32I)), r3 === e2.RGB && (i3 === e2.UNSIGNED_INT_5_9_9_9_REV && (s3 = e2.RGB9_E5), i3 === e2.UNSIGNED_INT_10F_11F_11F_REV && (s3 = e2.R11F_G11F_B10F)), r3 === e2.RGBA) {
      const t3 = o3 ? $e : yi.getTransfer(a3);
      i3 === e2.FLOAT && (s3 = e2.RGBA32F), i3 === e2.HALF_FLOAT && (s3 = e2.RGBA16F), i3 === e2.UNSIGNED_BYTE && (s3 = t3 === Qe ? e2.SRGB8_ALPHA8 : e2.RGBA8), i3 === e2.UNSIGNED_SHORT_4_4_4_4 && (s3 = e2.RGBA4), i3 === e2.UNSIGNED_SHORT_5_5_5_1 && (s3 = e2.RGB5_A1);
    }
    return s3 !== e2.R16F && s3 !== e2.R32F && s3 !== e2.RG16F && s3 !== e2.RG32F && s3 !== e2.RGBA16F && s3 !== e2.RGBA32F || n2.get("EXT_color_buffer_float"), s3;
  }
  function b2(t2, n3) {
    let r3;
    return t2 ? null === n3 || n3 === kt || n3 === Nt ? r3 = e2.DEPTH24_STENCIL8 : n3 === Et ? r3 = e2.DEPTH32F_STENCIL8 : n3 === It && (r3 = e2.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n3 || n3 === kt || n3 === Nt ? r3 = e2.DEPTH_COMPONENT24 : n3 === Et ? r3 = e2.DEPTH_COMPONENT32F : n3 === It && (r3 = e2.DEPTH_COMPONENT16), r3;
  }
  function C2(e3, t2) {
    return true === E2(e3) || e3.isFramebufferTexture && e3.minFilter !== gt && e3.minFilter !== wt ? Math.log2(Math.max(t2.width, t2.height)) + 1 : void 0 !== e3.mipmaps && e3.mipmaps.length > 0 ? e3.mipmaps.length : e3.isCompressedTexture && Array.isArray(e3.image) ? t2.mipmaps.length : 1;
  }
  function L2(e3) {
    const t2 = e3.target;
    t2.removeEventListener("dispose", L2), (function(e4) {
      const t3 = i2.get(e4);
      if (void 0 === t3.__webglInit) return;
      const n3 = e4.source, r3 = h2.get(n3);
      if (r3) {
        const i3 = r3[t3.__cacheKey];
        i3.usedTimes--, 0 === i3.usedTimes && U2(e4), 0 === Object.keys(r3).length && h2.delete(n3);
      }
      i2.remove(e4);
    })(t2), t2.isVideoTexture && u2.delete(t2);
  }
  function P2(t2) {
    const n3 = t2.target;
    n3.removeEventListener("dispose", P2), (function(t3) {
      const n4 = i2.get(t3);
      t3.depthTexture && (t3.depthTexture.dispose(), i2.remove(t3.depthTexture));
      if (t3.isWebGLCubeRenderTarget) for (let t4 = 0; t4 < 6; t4++) {
        if (Array.isArray(n4.__webglFramebuffer[t4])) for (let r4 = 0; r4 < n4.__webglFramebuffer[t4].length; r4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4][r4]);
        else e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
        n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer[t4]);
      }
      else {
        if (Array.isArray(n4.__webglFramebuffer)) for (let t4 = 0; t4 < n4.__webglFramebuffer.length; t4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
        else e2.deleteFramebuffer(n4.__webglFramebuffer);
        if (n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer), n4.__webglMultisampledFramebuffer && e2.deleteFramebuffer(n4.__webglMultisampledFramebuffer), n4.__webglColorRenderbuffer) for (let t4 = 0; t4 < n4.__webglColorRenderbuffer.length; t4++) n4.__webglColorRenderbuffer[t4] && e2.deleteRenderbuffer(n4.__webglColorRenderbuffer[t4]);
        n4.__webglDepthRenderbuffer && e2.deleteRenderbuffer(n4.__webglDepthRenderbuffer);
      }
      const r3 = t3.textures;
      for (let t4 = 0, n5 = r3.length; t4 < n5; t4++) {
        const n6 = i2.get(r3[t4]);
        n6.__webglTexture && (e2.deleteTexture(n6.__webglTexture), s2.memory.textures--), i2.remove(r3[t4]);
      }
      i2.remove(t3);
    })(n3);
  }
  function U2(t2) {
    const n3 = i2.get(t2);
    e2.deleteTexture(n3.__webglTexture);
    const r3 = t2.source;
    delete h2.get(r3)[n3.__cacheKey], s2.memory.textures--;
  }
  let D2 = 0;
  function w2(t2, n3) {
    const a3 = i2.get(t2);
    if (t2.isVideoTexture && (function(e3) {
      const t3 = s2.render.frame;
      u2.get(e3) !== t3 && (u2.set(e3, t3), e3.update());
    })(t2), false === t2.isRenderTargetTexture && true !== t2.isExternalTexture && t2.version > 0 && a3.__version !== t2.version) {
      const e3 = t2.image;
      if (null === e3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else {
        if (false !== e3.complete) return void V2(a3, t2, n3);
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      }
    } else t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null);
    r2.bindTexture(e2.TEXTURE_2D, a3.__webglTexture, e2.TEXTURE0 + n3);
  }
  const I2 = { [pt]: e2.REPEAT, [mt]: e2.CLAMP_TO_EDGE, [yt]: e2.MIRRORED_REPEAT }, y2 = { [gt]: e2.NEAREST, [ft]: e2.NEAREST_MIPMAP_NEAREST, [bt]: e2.NEAREST_MIPMAP_LINEAR, [wt]: e2.LINEAR, [Mt]: e2.LINEAR_MIPMAP_NEAREST, [_t]: e2.LINEAR_MIPMAP_LINEAR }, N2 = { [ys]: e2.NEVER, [Ms]: e2.ALWAYS, [gs]: e2.LESS, [xs]: e2.LEQUAL, [fs]: e2.EQUAL, [ws]: e2.GEQUAL, [bs]: e2.GREATER, [vs]: e2.NOTEQUAL };
  function O2(t2, r3) {
    if (r3.type !== Et || false !== n2.has("OES_texture_float_linear") || r3.magFilter !== wt && r3.magFilter !== Mt && r3.magFilter !== bt && r3.magFilter !== _t && r3.minFilter !== wt && r3.minFilter !== Mt && r3.minFilter !== bt && r3.minFilter !== _t || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e2.texParameteri(t2, e2.TEXTURE_WRAP_S, I2[r3.wrapS]), e2.texParameteri(t2, e2.TEXTURE_WRAP_T, I2[r3.wrapT]), t2 !== e2.TEXTURE_3D && t2 !== e2.TEXTURE_2D_ARRAY || e2.texParameteri(t2, e2.TEXTURE_WRAP_R, I2[r3.wrapR]), e2.texParameteri(t2, e2.TEXTURE_MAG_FILTER, y2[r3.magFilter]), e2.texParameteri(t2, e2.TEXTURE_MIN_FILTER, y2[r3.minFilter]), r3.compareFunction && (e2.texParameteri(t2, e2.TEXTURE_COMPARE_MODE, e2.COMPARE_REF_TO_TEXTURE), e2.texParameteri(t2, e2.TEXTURE_COMPARE_FUNC, N2[r3.compareFunction])), true === n2.has("EXT_texture_filter_anisotropic")) {
      if (r3.magFilter === gt) return;
      if (r3.minFilter !== bt && r3.minFilter !== _t) return;
      if (r3.type === Et && false === n2.has("OES_texture_float_linear")) return;
      if (r3.anisotropy > 1 || i2.get(r3).__currentAnisotropy) {
        const o3 = n2.get("EXT_texture_filter_anisotropic");
        e2.texParameterf(t2, o3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r3.anisotropy, a2.getMaxAnisotropy())), i2.get(r3).__currentAnisotropy = r3.anisotropy;
      }
    }
  }
  function H2(t2, n3) {
    let r3 = false;
    void 0 === t2.__webglInit && (t2.__webglInit = true, n3.addEventListener("dispose", L2));
    const i3 = n3.source;
    let a3 = h2.get(i3);
    void 0 === a3 && (a3 = {}, h2.set(i3, a3));
    const o3 = (function(e3) {
      const t3 = [];
      return t3.push(e3.wrapS), t3.push(e3.wrapT), t3.push(e3.wrapR || 0), t3.push(e3.magFilter), t3.push(e3.minFilter), t3.push(e3.anisotropy), t3.push(e3.internalFormat), t3.push(e3.format), t3.push(e3.type), t3.push(e3.generateMipmaps), t3.push(e3.premultiplyAlpha), t3.push(e3.flipY), t3.push(e3.unpackAlignment), t3.push(e3.colorSpace), t3.join();
    })(n3);
    if (o3 !== t2.__cacheKey) {
      void 0 === a3[o3] && (a3[o3] = { texture: e2.createTexture(), usedTimes: 0 }, s2.memory.textures++, r3 = true), a3[o3].usedTimes++;
      const i4 = a3[t2.__cacheKey];
      void 0 !== i4 && (a3[t2.__cacheKey].usedTimes--, 0 === i4.usedTimes && U2(n3)), t2.__cacheKey = o3, t2.__webglTexture = a3[o3].texture;
    }
    return r3;
  }
  function G2(e3, t2, n3) {
    return Math.floor(Math.floor(e3 / n3) / t2);
  }
  function V2(t2, n3, s3) {
    let l3 = e2.TEXTURE_2D;
    (n3.isDataArrayTexture || n3.isCompressedArrayTexture) && (l3 = e2.TEXTURE_2D_ARRAY), n3.isData3DTexture && (l3 = e2.TEXTURE_3D);
    const c3 = H2(t2, n3), d3 = n3.source;
    r2.bindTexture(l3, t2.__webglTexture, e2.TEXTURE0 + s3);
    const u3 = i2.get(d3);
    if (d3.version !== u3.__version || true === c3) {
      r2.activeTexture(e2.TEXTURE0 + s3);
      const t3 = yi.getPrimaries(yi.workingColorSpace), i3 = n3.colorSpace === Ye ? null : yi.getPrimaries(n3.colorSpace), f3 = n3.colorSpace === Ye || t3 === i3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
      e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n3.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n3.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, f3);
      let m2 = v2(n3.image, false, a2.maxTextureSize);
      m2 = $2(n3, m2);
      const h3 = o2.convert(n3.format, n3.colorSpace), _3 = o2.convert(n3.type);
      let g3, S2 = A2(n3.internalFormat, h3, _3, n3.colorSpace, n3.isVideoTexture);
      O2(l3, n3);
      const T2 = n3.mipmaps, R3 = true !== n3.isVideoTexture, L3 = void 0 === u3.__version || true === c3, P3 = d3.dataReady, U3 = C2(n3, m2);
      if (n3.isDepthTexture) S2 = b2(n3.format === Ut, n3.type), L3 && (R3 ? r2.texStorage2D(e2.TEXTURE_2D, 1, S2, m2.width, m2.height) : r2.texImage2D(e2.TEXTURE_2D, 0, S2, m2.width, m2.height, 0, h3, _3, null));
      else if (n3.isDataTexture) if (T2.length > 0) {
        R3 && L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, T2[0].width, T2[0].height);
        for (let t4 = 0, n4 = T2.length; t4 < n4; t4++) g3 = T2[t4], R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, h3, _3, g3.data);
        n3.generateMipmaps = false;
      } else R3 ? (L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, m2.width, m2.height), P3 && (function(t4, n4, i4, a3) {
        const o3 = t4.updateRanges;
        if (0 === o3.length) r2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, n4.width, n4.height, i4, a3, n4.data);
        else {
          o3.sort((e3, t5) => e3.start - t5.start);
          let s4 = 0;
          for (let e3 = 1; e3 < o3.length; e3++) {
            const t5 = o3[s4], r3 = o3[e3], i5 = t5.start + t5.count, a4 = G2(r3.start, n4.width, 4), l5 = G2(t5.start, n4.width, 4);
            r3.start <= i5 + 1 && a4 === l5 && G2(r3.start + r3.count - 1, n4.width, 4) === a4 ? t5.count = Math.max(t5.count, r3.start + r3.count - t5.start) : (++s4, o3[s4] = r3);
          }
          o3.length = s4 + 1;
          const l4 = e2.getParameter(e2.UNPACK_ROW_LENGTH), c4 = e2.getParameter(e2.UNPACK_SKIP_PIXELS), d4 = e2.getParameter(e2.UNPACK_SKIP_ROWS);
          e2.pixelStorei(e2.UNPACK_ROW_LENGTH, n4.width);
          for (let t5 = 0, s5 = o3.length; t5 < s5; t5++) {
            const s6 = o3[t5], l5 = Math.floor(s6.start / 4), c5 = Math.ceil(s6.count / 4), d5 = l5 % n4.width, u4 = Math.floor(l5 / n4.width), f4 = c5, p2 = 1;
            e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, d5), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, u4), r2.texSubImage2D(e2.TEXTURE_2D, 0, d5, u4, f4, p2, i4, a3, n4.data);
          }
          t4.clearUpdateRanges(), e2.pixelStorei(e2.UNPACK_ROW_LENGTH, l4), e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, c4), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, d4);
        }
      })(n3, m2, h3, _3)) : r2.texImage2D(e2.TEXTURE_2D, 0, S2, m2.width, m2.height, 0, h3, _3, m2.data);
      else if (n3.isCompressedTexture) if (n3.isCompressedArrayTexture) {
        R3 && L3 && r2.texStorage3D(e2.TEXTURE_2D_ARRAY, U3, S2, T2[0].width, T2[0].height, m2.depth);
        for (let t4 = 0, i4 = T2.length; t4 < i4; t4++) if (g3 = T2[t4], n3.format !== Dt) if (null !== h3) if (R3) {
          if (P3) if (n3.layerUpdates.size > 0) {
            const i5 = Dd(g3.width, g3.height, n3.format, n3.type);
            for (const a3 of n3.layerUpdates) {
              const n4 = g3.data.subarray(a3 * i5 / g3.data.BYTES_PER_ELEMENT, (a3 + 1) * i5 / g3.data.BYTES_PER_ELEMENT);
              r2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, a3, g3.width, g3.height, 1, h3, n4);
            }
            n3.clearLayerUpdates();
          } else r2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, g3.data);
        } else r2.compressedTexImage3D(e2.TEXTURE_2D_ARRAY, t4, S2, g3.width, g3.height, m2.depth, 0, g3.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else R3 ? P3 && r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, _3, g3.data) : r2.texImage3D(e2.TEXTURE_2D_ARRAY, t4, S2, g3.width, g3.height, m2.depth, 0, h3, _3, g3.data);
      } else {
        R3 && L3 && r2.texStorage2D(e2.TEXTURE_2D, U3, S2, T2[0].width, T2[0].height);
        for (let t4 = 0, i4 = T2.length; t4 < i4; t4++) g3 = T2[t4], n3.format !== Dt ? null !== h3 ? R3 ? P3 && r2.compressedTexSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, g3.data) : r2.compressedTexImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, g3.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, g3.width, g3.height, 0, h3, _3, g3.data);
      }
      else if (n3.isDataArrayTexture) if (R3) {
        if (L3 && r2.texStorage3D(e2.TEXTURE_2D_ARRAY, U3, S2, m2.width, m2.height, m2.depth), P3) if (n3.layerUpdates.size > 0) {
          const t4 = Dd(m2.width, m2.height, n3.format, n3.type);
          for (const i4 of n3.layerUpdates) {
            const n4 = m2.data.subarray(i4 * t4 / m2.data.BYTES_PER_ELEMENT, (i4 + 1) * t4 / m2.data.BYTES_PER_ELEMENT);
            r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, i4, m2.width, m2.height, 1, h3, _3, n4);
          }
          n3.clearLayerUpdates();
        } else r2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data);
      } else r2.texImage3D(e2.TEXTURE_2D_ARRAY, 0, S2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
      else if (n3.isData3DTexture) R3 ? (L3 && r2.texStorage3D(e2.TEXTURE_3D, U3, S2, m2.width, m2.height, m2.depth), P3 && r2.texSubImage3D(e2.TEXTURE_3D, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data)) : r2.texImage3D(e2.TEXTURE_3D, 0, S2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
      else if (n3.isFramebufferTexture) {
        if (L3) if (R3) r2.texStorage2D(e2.TEXTURE_2D, U3, S2, m2.width, m2.height);
        else {
          let t4 = m2.width, n4 = m2.height;
          for (let i4 = 0; i4 < U3; i4++) r2.texImage2D(e2.TEXTURE_2D, i4, S2, t4, n4, 0, h3, _3, null), t4 >>= 1, n4 >>= 1;
        }
      } else if (T2.length > 0) {
        if (R3 && L3) {
          const t4 = Q2(T2[0]);
          r2.texStorage2D(e2.TEXTURE_2D, U3, S2, t4.width, t4.height);
        }
        for (let t4 = 0, n4 = T2.length; t4 < n4; t4++) g3 = T2[t4], R3 ? P3 && r2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3, _3, g3) : r2.texImage2D(e2.TEXTURE_2D, t4, S2, h3, _3, g3);
        n3.generateMipmaps = false;
      } else if (R3) {
        if (L3) {
          const t4 = Q2(m2);
          r2.texStorage2D(e2.TEXTURE_2D, U3, S2, t4.width, t4.height);
        }
        P3 && r2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, h3, _3, m2);
      } else r2.texImage2D(e2.TEXTURE_2D, 0, S2, h3, _3, m2);
      E2(n3) && x2(l3), u3.__version = d3.version, n3.onUpdate && n3.onUpdate(n3);
    }
    t2.__version = n3.version;
  }
  function z2(t2, n3, a3, s3, c3, d3) {
    const u3 = o2.convert(a3.format, a3.colorSpace), f3 = o2.convert(a3.type), p2 = A2(a3.internalFormat, u3, f3, a3.colorSpace), m2 = i2.get(n3), h3 = i2.get(a3);
    if (h3.__renderTarget = n3, !m2.__hasExternalTextures) {
      const t3 = Math.max(1, n3.width >> d3), i3 = Math.max(1, n3.height >> d3);
      c3 === e2.TEXTURE_3D || c3 === e2.TEXTURE_2D_ARRAY ? r2.texImage3D(c3, d3, p2, t3, i3, n3.depth, 0, u3, f3, null) : r2.texImage2D(c3, d3, p2, t3, i3, 0, u3, f3, null);
    }
    r2.bindFramebuffer(e2.FRAMEBUFFER, t2), Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, 0, j2(n3)) : (c3 === e2.TEXTURE_2D || c3 >= e2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= e2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e2.framebufferTexture2D(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, d3), r2.bindFramebuffer(e2.FRAMEBUFFER, null);
  }
  function k2(t2, n3, r3) {
    if (e2.bindRenderbuffer(e2.RENDERBUFFER, t2), n3.depthBuffer) {
      const i3 = n3.depthTexture, a3 = i3 && i3.isDepthTexture ? i3.type : null, o3 = b2(n3.stencilBuffer, a3), s3 = n3.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, c3 = j2(n3);
      Z2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : r3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, o3, n3.width, n3.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, s3, e2.RENDERBUFFER, t2);
    } else {
      const t3 = n3.textures;
      for (let i3 = 0; i3 < t3.length; i3++) {
        const a3 = t3[i3], s3 = o2.convert(a3.format, a3.colorSpace), c3 = o2.convert(a3.type), d3 = A2(a3.internalFormat, s3, c3, a3.colorSpace), u3 = j2(n3);
        r3 && false === Z2(n3) ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : Z2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, d3, n3.width, n3.height);
      }
    }
    e2.bindRenderbuffer(e2.RENDERBUFFER, null);
  }
  function W2(t2, n3) {
    if (n3 && n3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (r2.bindFramebuffer(e2.FRAMEBUFFER, t2), !n3.depthTexture || !n3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const a3 = i2.get(n3.depthTexture);
    a3.__renderTarget = n3, a3.__webglTexture && n3.depthTexture.image.width === n3.width && n3.depthTexture.image.height === n3.height || (n3.depthTexture.image.width = n3.width, n3.depthTexture.image.height = n3.height, n3.depthTexture.needsUpdate = true), w2(n3.depthTexture, 0);
    const o3 = a3.__webglTexture, s3 = j2(n3);
    if (n3.depthTexture.format === Wt) Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
    else {
      if (n3.depthTexture.format !== Ut) throw new Error("Unknown depthTexture format");
      Z2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
    }
  }
  function X2(t2) {
    const n3 = i2.get(t2), a3 = true === t2.isWebGLCubeRenderTarget;
    if (n3.__boundDepthTexture !== t2.depthTexture) {
      const e3 = t2.depthTexture;
      if (n3.__depthDisposeCallback && n3.__depthDisposeCallback(), e3) {
        const t3 = () => {
          delete n3.__boundDepthTexture, delete n3.__depthDisposeCallback, e3.removeEventListener("dispose", t3);
        };
        e3.addEventListener("dispose", t3), n3.__depthDisposeCallback = t3;
      }
      n3.__boundDepthTexture = e3;
    }
    if (t2.depthTexture && !n3.__autoAllocateDepthBuffer) {
      if (a3) throw new Error("target.depthTexture not supported in Cube render targets");
      const e3 = t2.texture.mipmaps;
      e3 && e3.length > 0 ? W2(n3.__webglFramebuffer[0], t2) : W2(n3.__webglFramebuffer, t2);
    } else if (a3) {
      n3.__webglDepthbuffer = [];
      for (let i3 = 0; i3 < 6; i3++) if (r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[i3]), void 0 === n3.__webglDepthbuffer[i3]) n3.__webglDepthbuffer[i3] = e2.createRenderbuffer(), k2(n3.__webglDepthbuffer[i3], t2, false);
      else {
        const r3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, a4 = n3.__webglDepthbuffer[i3];
        e2.bindRenderbuffer(e2.RENDERBUFFER, a4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, r3, e2.RENDERBUFFER, a4);
      }
    } else {
      const i3 = t2.texture.mipmaps;
      if (i3 && i3.length > 0 ? r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[0]) : r2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer), void 0 === n3.__webglDepthbuffer) n3.__webglDepthbuffer = e2.createRenderbuffer(), k2(n3.__webglDepthbuffer, t2, false);
      else {
        const r3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, i4 = n3.__webglDepthbuffer;
        e2.bindRenderbuffer(e2.RENDERBUFFER, i4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, r3, e2.RENDERBUFFER, i4);
      }
    }
    r2.bindFramebuffer(e2.FRAMEBUFFER, null);
  }
  const Y2 = [], q2 = [];
  function j2(e3) {
    return Math.min(a2.maxSamples, e3.samples);
  }
  function Z2(e3) {
    const t2 = i2.get(e3);
    return e3.samples > 0 && true === n2.has("WEBGL_multisampled_render_to_texture") && false !== t2.__useRenderToTexture;
  }
  function $2(e3, t2) {
    const n3 = e3.colorSpace, r3 = e3.format, i3 = e3.type;
    return true === e3.isCompressedTexture || true === e3.isVideoTexture || n3 !== Ge && n3 !== Ye && (yi.getTransfer(n3) === Qe ? r3 === Dt && i3 === Tt || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n3)), t2;
  }
  function Q2(e3) {
    return "undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement ? (d2.width = e3.naturalWidth || e3.width, d2.height = e3.naturalHeight || e3.height) : "undefined" != typeof VideoFrame && e3 instanceof VideoFrame ? (d2.width = e3.displayWidth, d2.height = e3.displayHeight) : (d2.width = e3.width, d2.height = e3.height), d2;
  }
  this.allocateTextureUnit = function() {
    const e3 = D2;
    return e3 >= a2.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + e3 + " texture units while this GPU supports only " + a2.maxTextures), D2 += 1, e3;
  }, this.resetTextureUnits = function() {
    D2 = 0;
  }, this.setTexture2D = w2, this.setTexture2DArray = function(t2, n3) {
    const a3 = i2.get(t2);
    false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? V2(a3, t2, n3) : r2.bindTexture(e2.TEXTURE_2D_ARRAY, a3.__webglTexture, e2.TEXTURE0 + n3);
  }, this.setTexture3D = function(t2, n3) {
    const a3 = i2.get(t2);
    false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? V2(a3, t2, n3) : r2.bindTexture(e2.TEXTURE_3D, a3.__webglTexture, e2.TEXTURE0 + n3);
  }, this.setTextureCube = function(t2, n3) {
    const s3 = i2.get(t2);
    t2.version > 0 && s3.__version !== t2.version ? (function(t3, n4, s4) {
      if (6 !== n4.image.length) return;
      const l3 = H2(t3, n4), c3 = n4.source;
      r2.bindTexture(e2.TEXTURE_CUBE_MAP, t3.__webglTexture, e2.TEXTURE0 + s4);
      const d3 = i2.get(c3);
      if (c3.version !== d3.__version || true === l3) {
        r2.activeTexture(e2.TEXTURE0 + s4);
        const t4 = yi.getPrimaries(yi.workingColorSpace), i3 = n4.colorSpace === Ye ? null : yi.getPrimaries(n4.colorSpace), u3 = n4.colorSpace === Ye || t4 === i3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
        e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n4.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n4.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n4.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
        const f3 = n4.isCompressedTexture || n4.image[0].isCompressedTexture, m2 = n4.image[0] && n4.image[0].isDataTexture, h3 = [];
        for (let e3 = 0; e3 < 6; e3++) h3[e3] = f3 || m2 ? m2 ? n4.image[e3].image : n4.image[e3] : v2(n4.image[e3], true, a2.maxCubemapSize), h3[e3] = $2(n4, h3[e3]);
        const _3 = h3[0], g3 = o2.convert(n4.format, n4.colorSpace), S2 = o2.convert(n4.type), T2 = A2(n4.internalFormat, g3, S2, n4.colorSpace), R3 = true !== n4.isVideoTexture, b3 = void 0 === d3.__version || true === l3, L3 = c3.dataReady;
        let P3, U3 = C2(n4, _3);
        if (O2(e2.TEXTURE_CUBE_MAP, n4), f3) {
          R3 && b3 && r2.texStorage2D(e2.TEXTURE_CUBE_MAP, U3, T2, _3.width, _3.height);
          for (let t5 = 0; t5 < 6; t5++) {
            P3 = h3[t5].mipmaps;
            for (let i4 = 0; i4 < P3.length; i4++) {
              const a3 = P3[i4];
              n4.format !== Dt ? null !== g3 ? R3 ? L3 && r2.compressedTexSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, 0, 0, a3.width, a3.height, g3, a3.data) : r2.compressedTexImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, T2, a3.width, a3.height, 0, a3.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, 0, 0, a3.width, a3.height, g3, S2, a3.data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, i4, T2, a3.width, a3.height, 0, g3, S2, a3.data);
            }
          }
        } else {
          if (P3 = n4.mipmaps, R3 && b3) {
            P3.length > 0 && U3++;
            const t5 = Q2(h3[0]);
            r2.texStorage2D(e2.TEXTURE_CUBE_MAP, U3, T2, t5.width, t5.height);
          }
          for (let t5 = 0; t5 < 6; t5++) if (m2) {
            R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, h3[t5].width, h3[t5].height, g3, S2, h3[t5].data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, T2, h3[t5].width, h3[t5].height, 0, g3, S2, h3[t5].data);
            for (let n5 = 0; n5 < P3.length; n5++) {
              const i4 = P3[n5].image[t5].image;
              R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, i4.width, i4.height, g3, S2, i4.data) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, T2, i4.width, i4.height, 0, g3, S2, i4.data);
            }
          } else {
            R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, g3, S2, h3[t5]) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, T2, g3, S2, h3[t5]);
            for (let n5 = 0; n5 < P3.length; n5++) {
              const i4 = P3[n5];
              R3 ? L3 && r2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, g3, S2, i4.image[t5]) : r2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, T2, g3, S2, i4.image[t5]);
            }
          }
        }
        E2(n4) && x2(e2.TEXTURE_CUBE_MAP), d3.__version = c3.version, n4.onUpdate && n4.onUpdate(n4);
      }
      t3.__version = n4.version;
    })(s3, t2, n3) : r2.bindTexture(e2.TEXTURE_CUBE_MAP, s3.__webglTexture, e2.TEXTURE0 + n3);
  }, this.rebindTextures = function(t2, n3, r3) {
    const a3 = i2.get(t2);
    void 0 !== n3 && z2(a3.__webglFramebuffer, t2, t2.texture, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, 0), void 0 !== r3 && X2(t2);
  }, this.setupRenderTarget = function(t2) {
    const n3 = t2.texture, a3 = i2.get(t2), l3 = i2.get(n3);
    t2.addEventListener("dispose", P2);
    const c3 = t2.textures, d3 = true === t2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
    if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = e2.createTexture()), l3.__version = n3.version, s2.memory.textures++), d3) {
      a3.__webglFramebuffer = [];
      for (let t3 = 0; t3 < 6; t3++) if (n3.mipmaps && n3.mipmaps.length > 0) {
        a3.__webglFramebuffer[t3] = [];
        for (let r3 = 0; r3 < n3.mipmaps.length; r3++) a3.__webglFramebuffer[t3][r3] = e2.createFramebuffer();
      } else a3.__webglFramebuffer[t3] = e2.createFramebuffer();
    } else {
      if (n3.mipmaps && n3.mipmaps.length > 0) {
        a3.__webglFramebuffer = [];
        for (let t3 = 0; t3 < n3.mipmaps.length; t3++) a3.__webglFramebuffer[t3] = e2.createFramebuffer();
      } else a3.__webglFramebuffer = e2.createFramebuffer();
      if (u3) for (let t3 = 0, n4 = c3.length; t3 < n4; t3++) {
        const n5 = i2.get(c3[t3]);
        void 0 === n5.__webglTexture && (n5.__webglTexture = e2.createTexture(), s2.memory.textures++);
      }
      if (t2.samples > 0 && false === Z2(t2)) {
        a3.__webglMultisampledFramebuffer = e2.createFramebuffer(), a3.__webglColorRenderbuffer = [], r2.bindFramebuffer(e2.FRAMEBUFFER, a3.__webglMultisampledFramebuffer);
        for (let n4 = 0; n4 < c3.length; n4++) {
          const r3 = c3[n4];
          a3.__webglColorRenderbuffer[n4] = e2.createRenderbuffer(), e2.bindRenderbuffer(e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
          const i3 = o2.convert(r3.format, r3.colorSpace), s3 = o2.convert(r3.type), l4 = A2(r3.internalFormat, i3, s3, r3.colorSpace, true === t2.isXRRenderTarget), d4 = j2(t2);
          e2.renderbufferStorageMultisample(e2.RENDERBUFFER, d4, l4, t2.width, t2.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + n4, e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
        }
        e2.bindRenderbuffer(e2.RENDERBUFFER, null), t2.depthBuffer && (a3.__webglDepthRenderbuffer = e2.createRenderbuffer(), k2(a3.__webglDepthRenderbuffer, t2, true)), r2.bindFramebuffer(e2.FRAMEBUFFER, null);
      }
    }
    if (d3) {
      r2.bindTexture(e2.TEXTURE_CUBE_MAP, l3.__webglTexture), O2(e2.TEXTURE_CUBE_MAP, n3);
      for (let r3 = 0; r3 < 6; r3++) if (n3.mipmaps && n3.mipmaps.length > 0) for (let i3 = 0; i3 < n3.mipmaps.length; i3++) z2(a3.__webglFramebuffer[r3][i3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + r3, i3);
      else z2(a3.__webglFramebuffer[r3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + r3, 0);
      E2(n3) && x2(e2.TEXTURE_CUBE_MAP), r2.unbindTexture();
    } else if (u3) {
      for (let n4 = 0, o3 = c3.length; n4 < o3; n4++) {
        const o4 = c3[n4], s3 = i2.get(o4);
        let l4 = e2.TEXTURE_2D;
        (t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (l4 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), r2.bindTexture(l4, s3.__webglTexture), O2(l4, o4), z2(a3.__webglFramebuffer, t2, o4, e2.COLOR_ATTACHMENT0 + n4, l4, 0), E2(o4) && x2(l4);
      }
      r2.unbindTexture();
    } else {
      let i3 = e2.TEXTURE_2D;
      if ((t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (i3 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), r2.bindTexture(i3, l3.__webglTexture), O2(i3, n3), n3.mipmaps && n3.mipmaps.length > 0) for (let r3 = 0; r3 < n3.mipmaps.length; r3++) z2(a3.__webglFramebuffer[r3], t2, n3, e2.COLOR_ATTACHMENT0, i3, r3);
      else z2(a3.__webglFramebuffer, t2, n3, e2.COLOR_ATTACHMENT0, i3, 0);
      E2(n3) && x2(i3), r2.unbindTexture();
    }
    t2.depthBuffer && X2(t2);
  }, this.updateRenderTargetMipmap = function(e3) {
    const t2 = e3.textures;
    for (let n3 = 0, a3 = t2.length; n3 < a3; n3++) {
      const a4 = t2[n3];
      if (E2(a4)) {
        const t3 = R2(e3), n4 = i2.get(a4).__webglTexture;
        r2.bindTexture(t3, n4), x2(t3), r2.unbindTexture();
      }
    }
  }, this.updateMultisampleRenderTarget = function(t2) {
    if (t2.samples > 0) {
      if (false === Z2(t2)) {
        const n3 = t2.textures, a3 = t2.width, o3 = t2.height;
        let s3 = e2.COLOR_BUFFER_BIT;
        const l3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, d3 = i2.get(t2), u3 = n3.length > 1;
        if (u3) for (let t3 = 0; t3 < n3.length; t3++) r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, null), r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, null, 0);
        r2.bindFramebuffer(e2.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        const f3 = t2.texture.mipmaps;
        f3 && f3.length > 0 ? r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer[0]) : r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
        for (let r3 = 0; r3 < n3.length; r3++) {
          if (t2.resolveDepthBuffer && (t2.depthBuffer && (s3 |= e2.DEPTH_BUFFER_BIT), t2.stencilBuffer && t2.resolveStencilBuffer && (s3 |= e2.STENCIL_BUFFER_BIT)), u3) {
            e2.framebufferRenderbuffer(e2.READ_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[r3]);
            const t3 = i2.get(n3[r3]).__webglTexture;
            e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, t3, 0);
          }
          e2.blitFramebuffer(0, 0, a3, o3, 0, 0, a3, o3, s3, e2.NEAREST), true === c2 && (Y2.length = 0, q2.length = 0, Y2.push(e2.COLOR_ATTACHMENT0 + r3), t2.depthBuffer && false === t2.resolveDepthBuffer && (Y2.push(l3), q2.push(l3), e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, q2)), e2.invalidateFramebuffer(e2.READ_FRAMEBUFFER, Y2));
        }
        if (r2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), u3) for (let t3 = 0; t3 < n3.length; t3++) {
          r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[t3]);
          const a4 = i2.get(n3[t3]).__webglTexture;
          r2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, a4, 0);
        }
        r2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
      } else if (t2.depthBuffer && false === t2.resolveDepthBuffer && c2) {
        const n3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
        e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, [n3]);
      }
    }
  }, this.setupDepthRenderbuffer = X2, this.setupFrameBufferTexture = z2, this.useMultisampledRTT = Z2;
}
function na2(e2, t2) {
  return { convert: function(n2, r2 = Ye) {
    let i2;
    const a2 = yi.getTransfer(r2);
    if (n2 === Tt) return e2.UNSIGNED_BYTE;
    if (n2 === Pt) return e2.UNSIGNED_SHORT_4_4_4_4;
    if (n2 === Ot) return e2.UNSIGNED_SHORT_5_5_5_1;
    if (n2 === Vt) return e2.UNSIGNED_INT_5_9_9_9_REV;
    if (n2 === Ft) return e2.UNSIGNED_INT_10F_11F_11F_REV;
    if (n2 === zt) return e2.BYTE;
    if (n2 === Ct) return e2.SHORT;
    if (n2 === It) return e2.UNSIGNED_SHORT;
    if (n2 === Bt) return e2.INT;
    if (n2 === kt) return e2.UNSIGNED_INT;
    if (n2 === Et) return e2.FLOAT;
    if (n2 === Rt) return e2.HALF_FLOAT;
    if (n2 === Lt) return e2.ALPHA;
    if (n2 === jt) return e2.RGB;
    if (n2 === Dt) return e2.RGBA;
    if (n2 === Wt) return e2.DEPTH_COMPONENT;
    if (n2 === Ut) return e2.DEPTH_STENCIL;
    if (n2 === Ht) return e2.RED;
    if (n2 === qt) return e2.RED_INTEGER;
    if (n2 === Jt) return e2.RG;
    if (n2 === Xt) return e2.RG_INTEGER;
    if (n2 === Zt) return e2.RGBA_INTEGER;
    if (n2 === Gt || n2 === $t || n2 === Qt || n2 === Kt) if (a2 === Qe) {
      if (i2 = t2.get("WEBGL_compressed_texture_s3tc_srgb"), null === i2) return null;
      if (n2 === Gt) return i2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n2 === $t) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n2 === Qt) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n2 === Kt) return i2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else {
      if (i2 = t2.get("WEBGL_compressed_texture_s3tc"), null === i2) return null;
      if (n2 === Gt) return i2.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n2 === $t) return i2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n2 === Qt) return i2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n2 === Kt) return i2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }
    if (n2 === te || n2 === ee || n2 === se || n2 === ie) {
      if (i2 = t2.get("WEBGL_compressed_texture_pvrtc"), null === i2) return null;
      if (n2 === te) return i2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n2 === ee) return i2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n2 === se) return i2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n2 === ie) return i2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }
    if (n2 === re || n2 === ne || n2 === ae) {
      if (i2 = t2.get("WEBGL_compressed_texture_etc"), null === i2) return null;
      if (n2 === re || n2 === ne) return a2 === Qe ? i2.COMPRESSED_SRGB8_ETC2 : i2.COMPRESSED_RGB8_ETC2;
      if (n2 === ae) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i2.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (n2 === oe || n2 === he || n2 === le || n2 === ce || n2 === ue || n2 === de || n2 === pe || n2 === me || n2 === ye || n2 === ge || n2 === fe || n2 === xe || n2 === be || n2 === ve) {
      if (i2 = t2.get("WEBGL_compressed_texture_astc"), null === i2) return null;
      if (n2 === oe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i2.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n2 === he) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i2.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n2 === le) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i2.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n2 === ce) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i2.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n2 === ue) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i2.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n2 === de) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i2.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n2 === pe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i2.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n2 === me) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i2.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n2 === ye) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i2.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n2 === ge) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i2.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n2 === fe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i2.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n2 === xe) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i2.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n2 === be) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i2.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n2 === ve) return a2 === Qe ? i2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i2.COMPRESSED_RGBA_ASTC_12x12_KHR;
    }
    if (n2 === we || n2 === Me || n2 === Se) {
      if (i2 = t2.get("EXT_texture_compression_bptc"), null === i2) return null;
      if (n2 === we) return a2 === Qe ? i2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n2 === Me) return i2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n2 === Se) return i2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    }
    if (n2 === _e || n2 === Ae || n2 === Te || n2 === ze) {
      if (i2 = t2.get("EXT_texture_compression_rgtc"), null === i2) return null;
      if (n2 === _e) return i2.COMPRESSED_RED_RGTC1_EXT;
      if (n2 === Ae) return i2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n2 === Te) return i2.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n2 === ze) return i2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    }
    return n2 === Nt ? e2.UNSIGNED_INT_24_8 : void 0 !== e2[n2] ? e2[n2] : null;
  } };
}
var ra2 = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e2, t2) {
    if (null === this.texture) {
      const n2 = new hh(e2.texture);
      e2.depthNear === t2.depthNear && e2.depthFar === t2.depthFar || (this.depthNear = e2.depthNear, this.depthFar = e2.depthFar), this.texture = n2;
    }
  }
  getMesh(e2) {
    if (null !== this.texture && null === this.mesh) {
      const t2 = e2.cameras[0].viewport, n2 = new Yn({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t2.z }, depthHeight: { value: t2.w } } });
      this.mesh = new Dn(new _l(20, 20), n2);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
};
var ia2 = class extends Ls {
  constructor(e2, n2) {
    super();
    const r2 = this;
    let a2 = null, o2 = 1, s2 = null, l2 = "local-floor", c2 = 1, d2 = null, u2 = null, f2 = null, p2 = null, m2 = null, h2 = null;
    const _2 = "undefined" != typeof XRWebGLBinding, g2 = new ra2(), v2 = {}, E2 = n2.getContextAttributes();
    let T2 = null, x2 = null;
    const R2 = [], A2 = [], b2 = new $s();
    let C2 = null;
    const L2 = new Kn();
    L2.viewport = new Ti();
    const P2 = new Kn();
    P2.viewport = new Ti();
    const D2 = [L2, P2], w2 = new cu();
    let I2 = null, N2 = null;
    function O2(e3) {
      const t2 = A2.indexOf(e3.inputSource);
      if (-1 === t2) return;
      const n3 = R2[t2];
      void 0 !== n3 && (n3.update(e3.inputSource, e3.frame, d2 || s2), n3.dispatchEvent({ type: e3.type, data: e3.inputSource }));
    }
    function F2() {
      a2.removeEventListener("select", O2), a2.removeEventListener("selectstart", O2), a2.removeEventListener("selectend", O2), a2.removeEventListener("squeeze", O2), a2.removeEventListener("squeezestart", O2), a2.removeEventListener("squeezeend", O2), a2.removeEventListener("end", F2), a2.removeEventListener("inputsourceschange", B2);
      for (let e3 = 0; e3 < R2.length; e3++) {
        const t2 = A2[e3];
        null !== t2 && (A2[e3] = null, R2[e3].disconnect(t2));
      }
      I2 = null, N2 = null, g2.reset();
      for (const e3 in v2) delete v2[e3];
      e2.setRenderTarget(T2), m2 = null, p2 = null, f2 = null, a2 = null, x2 = null, W2.stop(), r2.isPresenting = false, e2.setPixelRatio(C2), e2.setSize(b2.width, b2.height, false), r2.dispatchEvent({ type: "sessionend" });
    }
    function B2(e3) {
      for (let t2 = 0; t2 < e3.removed.length; t2++) {
        const n3 = e3.removed[t2], r3 = A2.indexOf(n3);
        r3 >= 0 && (A2[r3] = null, R2[r3].disconnect(n3));
      }
      for (let t2 = 0; t2 < e3.added.length; t2++) {
        const n3 = e3.added[t2];
        let r3 = A2.indexOf(n3);
        if (-1 === r3) {
          for (let e4 = 0; e4 < R2.length; e4++) {
            if (e4 >= A2.length) {
              A2.push(n3), r3 = e4;
              break;
            }
            if (null === A2[e4]) {
              A2[e4] = n3, r3 = e4;
              break;
            }
          }
          if (-1 === r3) break;
        }
        const i2 = R2[r3];
        i2 && i2.connect(n3);
      }
    }
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e3) {
      let t2 = R2[e3];
      return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getTargetRaySpace();
    }, this.getControllerGrip = function(e3) {
      let t2 = R2[e3];
      return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getGripSpace();
    }, this.getHand = function(e3) {
      let t2 = R2[e3];
      return void 0 === t2 && (t2 = new aa(), R2[e3] = t2), t2.getHandSpace();
    }, this.setFramebufferScaleFactor = function(e3) {
      o2 = e3, true === r2.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(e3) {
      l2 = e3, true === r2.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return d2 || s2;
    }, this.setReferenceSpace = function(e3) {
      d2 = e3;
    }, this.getBaseLayer = function() {
      return null !== p2 ? p2 : m2;
    }, this.getBinding = function() {
      return null === f2 && _2 && (f2 = new XRWebGLBinding(a2, n2)), f2;
    }, this.getFrame = function() {
      return h2;
    }, this.getSession = function() {
      return a2;
    }, this.setSession = async function(t2) {
      if (a2 = t2, null !== a2) {
        T2 = e2.getRenderTarget(), a2.addEventListener("select", O2), a2.addEventListener("selectstart", O2), a2.addEventListener("selectend", O2), a2.addEventListener("squeeze", O2), a2.addEventListener("squeezestart", O2), a2.addEventListener("squeezeend", O2), a2.addEventListener("end", F2), a2.addEventListener("inputsourceschange", B2), true !== E2.xrCompatible && await n2.makeXRCompatible(), C2 = e2.getPixelRatio(), e2.getSize(b2);
        if (_2 && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let t3 = null, r3 = null, i2 = null;
          E2.depth && (i2 = E2.stencil ? n2.DEPTH24_STENCIL8 : n2.DEPTH_COMPONENT24, t3 = E2.stencil ? Ut : Wt, r3 = E2.stencil ? Nt : kt);
          const s3 = { colorFormat: n2.RGBA8, depthFormat: i2, scaleFactor: o2 };
          f2 = this.getBinding(), p2 = f2.createProjectionLayer(s3), a2.updateRenderState({ layers: [p2] }), e2.setPixelRatio(1), e2.setSize(p2.textureWidth, p2.textureHeight, false), x2 = new Ci(p2.textureWidth, p2.textureHeight, { format: Dt, type: Tt, depthTexture: new oh(p2.textureWidth, p2.textureHeight, r3, void 0, void 0, void 0, void 0, void 0, void 0, t3), stencilBuffer: E2.stencil, colorSpace: e2.outputColorSpace, samples: E2.antialias ? 4 : 0, resolveDepthBuffer: false === p2.ignoreDepthValues, resolveStencilBuffer: false === p2.ignoreDepthValues });
        } else {
          const t3 = { antialias: E2.antialias, alpha: true, depth: E2.depth, stencil: E2.stencil, framebufferScaleFactor: o2 };
          m2 = new XRWebGLLayer(a2, n2, t3), a2.updateRenderState({ baseLayer: m2 }), e2.setPixelRatio(1), e2.setSize(m2.framebufferWidth, m2.framebufferHeight, false), x2 = new Ci(m2.framebufferWidth, m2.framebufferHeight, { format: Dt, type: Tt, colorSpace: e2.outputColorSpace, stencilBuffer: E2.stencil, resolveDepthBuffer: false === m2.ignoreDepthValues, resolveStencilBuffer: false === m2.ignoreDepthValues });
        }
        x2.isXRRenderTarget = true, this.setFoveation(c2), d2 = null, s2 = await a2.requestReferenceSpace(l2), W2.setContext(a2), W2.start(), r2.isPresenting = true, r2.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (null !== a2) return a2.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g2.getDepthTexture();
    };
    const H2 = new Ks(), G2 = new Ks();
    function V2(e3, t2) {
      null === t2 ? e3.matrixWorld.copy(e3.matrix) : e3.matrixWorld.multiplyMatrices(t2.matrixWorld, e3.matrix), e3.matrixWorldInverse.copy(e3.matrixWorld).invert();
    }
    this.updateCamera = function(e3) {
      if (null === a2) return;
      let t2 = e3.near, n3 = e3.far;
      null !== g2.texture && (g2.depthNear > 0 && (t2 = g2.depthNear), g2.depthFar > 0 && (n3 = g2.depthFar)), w2.near = P2.near = L2.near = t2, w2.far = P2.far = L2.far = n3, I2 === w2.near && N2 === w2.far || (a2.updateRenderState({ depthNear: w2.near, depthFar: w2.far }), I2 = w2.near, N2 = w2.far), w2.layers.mask = 6 | e3.layers.mask, L2.layers.mask = 3 & w2.layers.mask, P2.layers.mask = 5 & w2.layers.mask;
      const r3 = e3.parent, i2 = w2.cameras;
      V2(w2, r3);
      for (let e4 = 0; e4 < i2.length; e4++) V2(i2[e4], r3);
      2 === i2.length ? (function(e4, t3, n4) {
        H2.setFromMatrixPosition(t3.matrixWorld), G2.setFromMatrixPosition(n4.matrixWorld);
        const r4 = H2.distanceTo(G2), i3 = t3.projectionMatrix.elements, a3 = n4.projectionMatrix.elements, o3 = i3[14] / (i3[10] - 1), s3 = i3[14] / (i3[10] + 1), l3 = (i3[9] + 1) / i3[5], c3 = (i3[9] - 1) / i3[5], d3 = (i3[8] - 1) / i3[0], u3 = (a3[8] + 1) / a3[0], f3 = o3 * d3, p3 = o3 * u3, m3 = r4 / (-d3 + u3), h3 = m3 * -d3;
        if (t3.matrixWorld.decompose(e4.position, e4.quaternion, e4.scale), e4.translateX(h3), e4.translateZ(m3), e4.matrixWorld.compose(e4.position, e4.quaternion, e4.scale), e4.matrixWorldInverse.copy(e4.matrixWorld).invert(), -1 === i3[10]) e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse);
        else {
          const t4 = o3 + m3, n5 = s3 + m3, i4 = f3 - h3, a4 = p3 + (r4 - h3), d4 = l3 * s3 / n5 * t4, u4 = c3 * s3 / n5 * t4;
          e4.projectionMatrix.makePerspective(i4, a4, d4, u4, t4, n5), e4.projectionMatrixInverse.copy(e4.projectionMatrix).invert();
        }
      })(w2, L2, P2) : w2.projectionMatrix.copy(L2.projectionMatrix), (function(e4, t3, n4) {
        null === n4 ? e4.matrix.copy(t3.matrixWorld) : (e4.matrix.copy(n4.matrixWorld), e4.matrix.invert(), e4.matrix.multiply(t3.matrixWorld));
        e4.matrix.decompose(e4.position, e4.quaternion, e4.scale), e4.updateMatrixWorld(true), e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e4.isPerspectiveCamera && (e4.fov = 2 * Us * Math.atan(1 / e4.projectionMatrix.elements[5]), e4.zoom = 1);
      })(e3, w2, r3);
    }, this.getCamera = function() {
      return w2;
    }, this.getFoveation = function() {
      if (null !== p2 || null !== m2) return c2;
    }, this.setFoveation = function(e3) {
      c2 = e3, null !== p2 && (p2.fixedFoveation = e3), null !== m2 && void 0 !== m2.fixedFoveation && (m2.fixedFoveation = e3);
    }, this.hasDepthSensing = function() {
      return null !== g2.texture;
    }, this.getDepthSensingMesh = function() {
      return g2.getMesh(w2);
    }, this.getCameraTexture = function(e3) {
      return v2[e3];
    };
    let z2 = null;
    const W2 = new Cn2();
    W2.setAnimationLoop(function(t2, n3) {
      if (u2 = n3.getViewerPose(d2 || s2), h2 = n3, null !== u2) {
        const t3 = u2.views;
        null !== m2 && (e2.setRenderTargetFramebuffer(x2, m2.framebuffer), e2.setRenderTarget(x2));
        let n4 = false;
        t3.length !== w2.cameras.length && (w2.cameras.length = 0, n4 = true);
        for (let r3 = 0; r3 < t3.length; r3++) {
          const i3 = t3[r3];
          let a3 = null;
          if (null !== m2) a3 = m2.getViewport(i3);
          else {
            const t4 = f2.getViewSubImage(p2, i3);
            a3 = t4.viewport, 0 === r3 && (e2.setRenderTargetTextures(x2, t4.colorTexture, t4.depthStencilTexture), e2.setRenderTarget(x2));
          }
          let o3 = D2[r3];
          void 0 === o3 && (o3 = new Kn(), o3.layers.enable(r3), o3.viewport = new Ti(), D2[r3] = o3), o3.matrix.fromArray(i3.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(i3.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === r3 && (w2.matrix.copy(o3.matrix), w2.matrix.decompose(w2.position, w2.quaternion, w2.scale)), true === n4 && w2.cameras.push(o3);
        }
        const i2 = a2.enabledFeatures;
        if (i2 && i2.includes("depth-sensing") && "gpu-optimized" == a2.depthUsage && _2) {
          f2 = r2.getBinding();
          const e3 = f2.getDepthInformation(t3[0]);
          e3 && e3.isValid && e3.texture && g2.init(e3, a2.renderState);
        }
        if (i2 && i2.includes("camera-access") && _2) {
          e2.state.unbindTexture(), f2 = r2.getBinding();
          for (let e3 = 0; e3 < t3.length; e3++) {
            const n5 = t3[e3].camera;
            if (n5) {
              let e4 = v2[n5];
              e4 || (e4 = new hh(), v2[n5] = e4);
              const t4 = f2.getCameraImage(n5);
              e4.sourceTexture = t4;
            }
          }
        }
      }
      for (let e3 = 0; e3 < R2.length; e3++) {
        const t3 = A2[e3], r3 = R2[e3];
        null !== t3 && void 0 !== r3 && r3.update(t3, n3, d2 || s2);
      }
      z2 && z2(t2, n3), n3.detectedPlanes && r2.dispatchEvent({ type: "planesdetected", data: n3 }), h2 = null;
    }), this.setAnimationLoop = function(e3) {
      z2 = e3;
    }, this.dispose = function() {
    };
  }
};
var aa2 = new gr();
var oa2 = new ar();
function sa2(e2, t2) {
  function n2(e3, t3) {
    true === e3.matrixAutoUpdate && e3.updateMatrix(), t3.value.copy(e3.matrix);
  }
  function r2(e3, r3) {
    e3.opacity.value = r3.opacity, r3.color && e3.diffuse.value.copy(r3.color), r3.emissive && e3.emissive.value.copy(r3.emissive).multiplyScalar(r3.emissiveIntensity), r3.map && (e3.map.value = r3.map, n2(r3.map, e3.mapTransform)), r3.alphaMap && (e3.alphaMap.value = r3.alphaMap, n2(r3.alphaMap, e3.alphaMapTransform)), r3.bumpMap && (e3.bumpMap.value = r3.bumpMap, n2(r3.bumpMap, e3.bumpMapTransform), e3.bumpScale.value = r3.bumpScale, r3.side === d && (e3.bumpScale.value *= -1)), r3.normalMap && (e3.normalMap.value = r3.normalMap, n2(r3.normalMap, e3.normalMapTransform), e3.normalScale.value.copy(r3.normalScale), r3.side === d && e3.normalScale.value.negate()), r3.displacementMap && (e3.displacementMap.value = r3.displacementMap, n2(r3.displacementMap, e3.displacementMapTransform), e3.displacementScale.value = r3.displacementScale, e3.displacementBias.value = r3.displacementBias), r3.emissiveMap && (e3.emissiveMap.value = r3.emissiveMap, n2(r3.emissiveMap, e3.emissiveMapTransform)), r3.specularMap && (e3.specularMap.value = r3.specularMap, n2(r3.specularMap, e3.specularMapTransform)), r3.alphaTest > 0 && (e3.alphaTest.value = r3.alphaTest);
    const i2 = t2.get(r3), a2 = i2.envMap, o2 = i2.envMapRotation;
    a2 && (e3.envMap.value = a2, aa2.copy(o2), aa2.x *= -1, aa2.y *= -1, aa2.z *= -1, a2.isCubeTexture && false === a2.isRenderTargetTexture && (aa2.y *= -1, aa2.z *= -1), e3.envMapRotation.value.setFromMatrix4(oa2.makeRotationFromEuler(aa2)), e3.flipEnvMap.value = a2.isCubeTexture && false === a2.isRenderTargetTexture ? -1 : 1, e3.reflectivity.value = r3.reflectivity, e3.ior.value = r3.ior, e3.refractionRatio.value = r3.refractionRatio), r3.lightMap && (e3.lightMap.value = r3.lightMap, e3.lightMapIntensity.value = r3.lightMapIntensity, n2(r3.lightMap, e3.lightMapTransform)), r3.aoMap && (e3.aoMap.value = r3.aoMap, e3.aoMapIntensity.value = r3.aoMapIntensity, n2(r3.aoMap, e3.aoMapTransform));
  }
  return { refreshFogUniforms: function(t3, n3) {
    n3.color.getRGB(t3.fogColor.value, Jn(e2)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
  }, refreshMaterialUniforms: function(e3, i2, a2, o2, s2) {
    i2.isMeshBasicMaterial || i2.isMeshLambertMaterial ? r2(e3, i2) : i2.isMeshToonMaterial ? (r2(e3, i2), (function(e4, t3) {
      t3.gradientMap && (e4.gradientMap.value = t3.gradientMap);
    })(e3, i2)) : i2.isMeshPhongMaterial ? (r2(e3, i2), (function(e4, t3) {
      e4.specular.value.copy(t3.specular), e4.shininess.value = Math.max(t3.shininess, 1e-4);
    })(e3, i2)) : i2.isMeshStandardMaterial ? (r2(e3, i2), (function(e4, t3) {
      e4.metalness.value = t3.metalness, t3.metalnessMap && (e4.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e4.metalnessMapTransform));
      e4.roughness.value = t3.roughness, t3.roughnessMap && (e4.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e4.roughnessMapTransform));
      t3.envMap && (e4.envMapIntensity.value = t3.envMapIntensity);
    })(e3, i2), i2.isMeshPhysicalMaterial && (function(e4, t3, r3) {
      e4.ior.value = t3.ior, t3.sheen > 0 && (e4.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e4.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e4.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e4.sheenColorMapTransform)), t3.sheenRoughnessMap && (e4.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e4.sheenRoughnessMapTransform)));
      t3.clearcoat > 0 && (e4.clearcoat.value = t3.clearcoat, e4.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e4.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e4.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e4.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e4.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e4.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e4.clearcoatNormalMapTransform), e4.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === d && e4.clearcoatNormalScale.value.negate()));
      t3.dispersion > 0 && (e4.dispersion.value = t3.dispersion);
      t3.iridescence > 0 && (e4.iridescence.value = t3.iridescence, e4.iridescenceIOR.value = t3.iridescenceIOR, e4.iridescenceThicknessMinimum.value = t3.iridescenceThicknessRange[0], e4.iridescenceThicknessMaximum.value = t3.iridescenceThicknessRange[1], t3.iridescenceMap && (e4.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e4.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e4.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e4.iridescenceThicknessMapTransform)));
      t3.transmission > 0 && (e4.transmission.value = t3.transmission, e4.transmissionSamplerMap.value = r3.texture, e4.transmissionSamplerSize.value.set(r3.width, r3.height), t3.transmissionMap && (e4.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e4.transmissionMapTransform)), e4.thickness.value = t3.thickness, t3.thicknessMap && (e4.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e4.thicknessMapTransform)), e4.attenuationDistance.value = t3.attenuationDistance, e4.attenuationColor.value.copy(t3.attenuationColor));
      t3.anisotropy > 0 && (e4.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e4.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e4.anisotropyMapTransform)));
      e4.specularIntensity.value = t3.specularIntensity, e4.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e4.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e4.specularColorMapTransform));
      t3.specularIntensityMap && (e4.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e4.specularIntensityMapTransform));
    })(e3, i2, s2)) : i2.isMeshMatcapMaterial ? (r2(e3, i2), (function(e4, t3) {
      t3.matcap && (e4.matcap.value = t3.matcap);
    })(e3, i2)) : i2.isMeshDepthMaterial ? r2(e3, i2) : i2.isMeshDistanceMaterial ? (r2(e3, i2), (function(e4, n3) {
      const r3 = t2.get(n3).light;
      e4.referencePosition.value.setFromMatrixPosition(r3.matrixWorld), e4.nearDistance.value = r3.shadow.camera.near, e4.farDistance.value = r3.shadow.camera.far;
    })(e3, i2)) : i2.isMeshNormalMaterial ? r2(e3, i2) : i2.isLineBasicMaterial ? ((function(e4, t3) {
      e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
    })(e3, i2), i2.isLineDashedMaterial && (function(e4, t3) {
      e4.dashSize.value = t3.dashSize, e4.totalSize.value = t3.dashSize + t3.gapSize, e4.scale.value = t3.scale;
    })(e3, i2)) : i2.isPointsMaterial ? (function(e4, t3, r3, i3) {
      e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.size.value = t3.size * r3, e4.scale.value = 0.5 * i3, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.uvTransform));
      t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
      t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
    })(e3, i2, a2, o2) : i2.isSpriteMaterial ? (function(e4, t3) {
      e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.rotation.value = t3.rotation, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
      t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
      t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
    })(e3, i2) : i2.isShadowMaterial ? (e3.color.value.copy(i2.color), e3.opacity.value = i2.opacity) : i2.isShaderMaterial && (i2.uniformsNeedUpdate = false);
  } };
}
function la2(e2, t2, n2, r2) {
  let i2 = {}, a2 = {}, o2 = [];
  const s2 = e2.getParameter(e2.MAX_UNIFORM_BUFFER_BINDINGS);
  function l2(e3, t3, n3, r3) {
    const i3 = e3.value, a3 = t3 + "_" + n3;
    if (void 0 === r3[a3]) return r3[a3] = "number" == typeof i3 || "boolean" == typeof i3 ? i3 : i3.clone(), true;
    {
      const e4 = r3[a3];
      if ("number" == typeof i3 || "boolean" == typeof i3) {
        if (e4 !== i3) return r3[a3] = i3, true;
      } else if (false === e4.equals(i3)) return e4.copy(i3), true;
    }
    return false;
  }
  function c2(e3) {
    const t3 = { boundary: 0, storage: 0 };
    return "number" == typeof e3 || "boolean" == typeof e3 ? (t3.boundary = 4, t3.storage = 4) : e3.isVector2 ? (t3.boundary = 8, t3.storage = 8) : e3.isVector3 || e3.isColor ? (t3.boundary = 16, t3.storage = 12) : e3.isVector4 ? (t3.boundary = 16, t3.storage = 16) : e3.isMatrix3 ? (t3.boundary = 48, t3.storage = 48) : e3.isMatrix4 ? (t3.boundary = 64, t3.storage = 64) : e3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e3), t3;
  }
  function d2(t3) {
    const n3 = t3.target;
    n3.removeEventListener("dispose", d2);
    const r3 = o2.indexOf(n3.__bindingPointIndex);
    o2.splice(r3, 1), e2.deleteBuffer(i2[n3.id]), delete i2[n3.id], delete a2[n3.id];
  }
  return { bind: function(e3, t3) {
    const n3 = t3.program;
    r2.uniformBlockBinding(e3, n3);
  }, update: function(n3, u2) {
    let f2 = i2[n3.id];
    void 0 === f2 && (!(function(e3) {
      const t3 = e3.uniforms;
      let n4 = 0;
      const r3 = 16;
      for (let e4 = 0, i4 = t3.length; e4 < i4; e4++) {
        const i5 = Array.isArray(t3[e4]) ? t3[e4] : [t3[e4]];
        for (let e5 = 0, t4 = i5.length; e5 < t4; e5++) {
          const t5 = i5[e5], a3 = Array.isArray(t5.value) ? t5.value : [t5.value];
          for (let e6 = 0, i6 = a3.length; e6 < i6; e6++) {
            const i7 = c2(a3[e6]), o3 = n4 % r3, s3 = o3 % i7.boundary, l3 = o3 + s3;
            n4 += s3, 0 !== l3 && r3 - l3 < i7.storage && (n4 += r3 - l3), t5.__data = new Float32Array(i7.storage / Float32Array.BYTES_PER_ELEMENT), t5.__offset = n4, n4 += i7.storage;
          }
        }
      }
      const i3 = n4 % r3;
      i3 > 0 && (n4 += r3 - i3);
      e3.__size = n4, e3.__cache = {};
    })(n3), f2 = (function(t3) {
      const n4 = (function() {
        for (let e3 = 0; e3 < s2; e3++) if (-1 === o2.indexOf(e3)) return o2.push(e3), e3;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
      })();
      t3.__bindingPointIndex = n4;
      const r3 = e2.createBuffer(), i3 = t3.__size, a3 = t3.usage;
      return e2.bindBuffer(e2.UNIFORM_BUFFER, r3), e2.bufferData(e2.UNIFORM_BUFFER, i3, a3), e2.bindBuffer(e2.UNIFORM_BUFFER, null), e2.bindBufferBase(e2.UNIFORM_BUFFER, n4, r3), r3;
    })(n3), i2[n3.id] = f2, n3.addEventListener("dispose", d2));
    const p2 = u2.program;
    r2.updateUBOMapping(n3, p2);
    const m2 = t2.render.frame;
    a2[n3.id] !== m2 && (!(function(t3) {
      const n4 = i2[t3.id], r3 = t3.uniforms, a3 = t3.__cache;
      e2.bindBuffer(e2.UNIFORM_BUFFER, n4);
      for (let t4 = 0, n5 = r3.length; t4 < n5; t4++) {
        const n6 = Array.isArray(r3[t4]) ? r3[t4] : [r3[t4]];
        for (let r4 = 0, i3 = n6.length; r4 < i3; r4++) {
          const i4 = n6[r4];
          if (true === l2(i4, t4, r4, a3)) {
            const t5 = i4.__offset, n7 = Array.isArray(i4.value) ? i4.value : [i4.value];
            let r5 = 0;
            for (let a4 = 0; a4 < n7.length; a4++) {
              const o3 = n7[a4], s3 = c2(o3);
              "number" == typeof o3 || "boolean" == typeof o3 ? (i4.__data[0] = o3, e2.bufferSubData(e2.UNIFORM_BUFFER, t5 + r5, i4.__data)) : o3.isMatrix3 ? (i4.__data[0] = o3.elements[0], i4.__data[1] = o3.elements[1], i4.__data[2] = o3.elements[2], i4.__data[3] = 0, i4.__data[4] = o3.elements[3], i4.__data[5] = o3.elements[4], i4.__data[6] = o3.elements[5], i4.__data[7] = 0, i4.__data[8] = o3.elements[6], i4.__data[9] = o3.elements[7], i4.__data[10] = o3.elements[8], i4.__data[11] = 0) : (o3.toArray(i4.__data, r5), r5 += s3.storage / Float32Array.BYTES_PER_ELEMENT);
            }
            e2.bufferSubData(e2.UNIFORM_BUFFER, t5, i4.__data);
          }
        }
      }
      e2.bindBuffer(e2.UNIFORM_BUFFER, null);
    })(n3), a2[n3.id] = m2);
  }, dispose: function() {
    for (const t3 in i2) e2.deleteBuffer(i2[t3]);
    o2 = [], i2 = {}, a2 = {};
  } };
}
var ca2 = class {
  constructor(e2 = {}) {
    const { canvas: t2 = hi(), context: r2 = null, depth: a2 = true, stencil: o2 = false, alpha: s2 = false, antialias: l2 = false, premultipliedAlpha: d2 = true, preserveDrawingBuffer: u2 = false, powerPreference: m2 = "default", failIfMajorPerformanceCaveat: h2 = false, reversedDepthBuffer: g2 = false } = e2;
    let v2;
    if (this.isWebGLRenderer = true, null !== r2) {
      if ("undefined" != typeof WebGLRenderingContext && r2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      v2 = r2.getContextAttributes().alpha;
    } else v2 = s2;
    const T2 = new Uint32Array(4), M2 = new Int32Array(4);
    let x2 = null, R2 = null;
    const A2 = [], b2 = [];
    this.domElement = t2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = $, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const C2 = this;
    let L2 = false;
    this._outputColorSpace = Ze;
    let P2 = 0, U2 = 0, w2 = null, I2 = -1, N2 = null;
    const O2 = new Ti(), B2 = new Ti();
    let G2 = null;
    const V2 = new Qr(0);
    let z2 = 0, W2 = t2.width, X2 = t2.height, Y2 = 1, K2 = null, q2 = null;
    const j2 = new Ti(0, 0, W2, X2), Z2 = new Ti(0, 0, W2, X2);
    let $2 = false;
    const Q2 = new lo();
    let J2 = false, ee2 = false;
    const te2 = new ar(), ne2 = new Ks(), re2 = new Ti(), ie2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let ae2 = false;
    function oe2() {
      return null === w2 ? Y2 : 1;
    }
    let se2, le2, ce2, de2, ue2, pe2, me2, he2, _e2, ve2, Ee2, Se2, Te2, Me2, xe2, Re2, Ae2, be2, Ce2, Le2, Pe2, Ue2, De2, we2, Ie2 = r2;
    function ye2(e3, n2) {
      return t2.getContext(e3, n2);
    }
    try {
      const e3 = { alpha: true, depth: a2, stencil: o2, antialias: l2, premultipliedAlpha: d2, preserveDrawingBuffer: u2, powerPreference: m2, failIfMajorPerformanceCaveat: h2 };
      if ("setAttribute" in t2 && t2.setAttribute("data-engine", `three.js r${t}`), t2.addEventListener("webglcontextlost", Fe2, false), t2.addEventListener("webglcontextrestored", Be2, false), t2.addEventListener("webglcontextcreationerror", He2, false), null === Ie2) {
        const t3 = "webgl2";
        if (Ie2 = ye2(t3, e3), null === Ie2) throw ye2(t3) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (e3) {
      throw console.error("THREE.WebGLRenderer: " + e3.message), e3;
    }
    function Ne2() {
      se2 = new or2(Ie2), se2.init(), Ue2 = new na2(Ie2, se2), le2 = new Bn2(Ie2, se2, e2, Ue2), ce2 = new ea2(Ie2, se2), le2.reversedDepthBuffer && g2 && ce2.buffers.depth.setReversed(true), de2 = new cr2(Ie2), ue2 = new Vi2(), pe2 = new ta2(Ie2, se2, ce2, ue2, le2, Ue2, de2), me2 = new Gn2(C2), he2 = new ar2(C2), _e2 = new Ln2(Ie2), De2 = new On2(Ie2, _e2), ve2 = new sr2(Ie2, _e2, de2, De2), Ee2 = new ur2(Ie2, ve2, _e2, de2), Ce2 = new dr2(Ie2, le2, pe2), Re2 = new Hn2(ue2), Se2 = new Gi2(C2, me2, he2, se2, le2, De2, Re2), Te2 = new sa2(C2, ue2), Me2 = new Xi2(), xe2 = new $i2(se2), be2 = new Nn2(C2, me2, he2, ce2, Ee2, v2, d2), Ae2 = new Qi2(C2, Ee2, le2), we2 = new la2(Ie2, de2, le2, ce2), Le2 = new Fn2(Ie2, se2, de2), Pe2 = new lr2(Ie2, se2, de2), de2.programs = Se2.programs, C2.capabilities = le2, C2.extensions = se2, C2.properties = ue2, C2.renderLists = Me2, C2.shadowMap = Ae2, C2.state = ce2, C2.info = de2;
    }
    Ne2();
    const Oe2 = new ia2(C2, Ie2);
    function Fe2(e3) {
      e3.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L2 = true;
    }
    function Be2() {
      console.log("THREE.WebGLRenderer: Context Restored."), L2 = false;
      const e3 = de2.autoReset, t3 = Ae2.enabled, n2 = Ae2.autoUpdate, r3 = Ae2.needsUpdate, i2 = Ae2.type;
      Ne2(), de2.autoReset = e3, Ae2.enabled = t3, Ae2.autoUpdate = n2, Ae2.needsUpdate = r3, Ae2.type = i2;
    }
    function He2(e3) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e3.statusMessage);
    }
    function Ge2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", Ge2), (function(e4) {
        (function(e5) {
          const t4 = ue2.get(e5).programs;
          void 0 !== t4 && (t4.forEach(function(e6) {
            Se2.releaseProgram(e6);
          }), e5.isShaderMaterial && Se2.releaseShaderCache(e5));
        })(e4), ue2.remove(e4);
      })(t3);
    }
    function Ve2(e3, t3, n2) {
      true === e3.transparent && e3.side === p && false === e3.forceSinglePass ? (e3.side = d, e3.needsUpdate = true, $e2(e3, t3, n2), e3.side = u, e3.needsUpdate = true, $e2(e3, t3, n2), e3.side = p) : $e2(e3, t3, n2);
    }
    this.xr = Oe2, this.getContext = function() {
      return Ie2;
    }, this.getContextAttributes = function() {
      return Ie2.getContextAttributes();
    }, this.forceContextLoss = function() {
      const e3 = se2.get("WEBGL_lose_context");
      e3 && e3.loseContext();
    }, this.forceContextRestore = function() {
      const e3 = se2.get("WEBGL_lose_context");
      e3 && e3.restoreContext();
    }, this.getPixelRatio = function() {
      return Y2;
    }, this.setPixelRatio = function(e3) {
      void 0 !== e3 && (Y2 = e3, this.setSize(W2, X2, false));
    }, this.getSize = function(e3) {
      return e3.set(W2, X2);
    }, this.setSize = function(e3, n2, r3 = true) {
      Oe2.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (W2 = e3, X2 = n2, t2.width = Math.floor(e3 * Y2), t2.height = Math.floor(n2 * Y2), true === r3 && (t2.style.width = e3 + "px", t2.style.height = n2 + "px"), this.setViewport(0, 0, e3, n2));
    }, this.getDrawingBufferSize = function(e3) {
      return e3.set(W2 * Y2, X2 * Y2).floor();
    }, this.setDrawingBufferSize = function(e3, n2, r3) {
      W2 = e3, X2 = n2, Y2 = r3, t2.width = Math.floor(e3 * r3), t2.height = Math.floor(n2 * r3), this.setViewport(0, 0, e3, n2);
    }, this.getCurrentViewport = function(e3) {
      return e3.copy(O2);
    }, this.getViewport = function(e3) {
      return e3.copy(j2);
    }, this.setViewport = function(e3, t3, n2, r3) {
      e3.isVector4 ? j2.set(e3.x, e3.y, e3.z, e3.w) : j2.set(e3, t3, n2, r3), ce2.viewport(O2.copy(j2).multiplyScalar(Y2).round());
    }, this.getScissor = function(e3) {
      return e3.copy(Z2);
    }, this.setScissor = function(e3, t3, n2, r3) {
      e3.isVector4 ? Z2.set(e3.x, e3.y, e3.z, e3.w) : Z2.set(e3, t3, n2, r3), ce2.scissor(B2.copy(Z2).multiplyScalar(Y2).round());
    }, this.getScissorTest = function() {
      return $2;
    }, this.setScissorTest = function(e3) {
      ce2.setScissorTest($2 = e3);
    }, this.setOpaqueSort = function(e3) {
      K2 = e3;
    }, this.setTransparentSort = function(e3) {
      q2 = e3;
    }, this.getClearColor = function(e3) {
      return e3.copy(be2.getClearColor());
    }, this.setClearColor = function() {
      be2.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return be2.getClearAlpha();
    }, this.setClearAlpha = function() {
      be2.setClearAlpha(...arguments);
    }, this.clear = function(e3 = true, t3 = true, n2 = true) {
      let r3 = 0;
      if (e3) {
        let e4 = false;
        if (null !== w2) {
          const t4 = w2.texture.format;
          e4 = t4 === Zt || t4 === Xt || t4 === qt;
        }
        if (e4) {
          const e5 = w2.texture.type, t4 = e5 === Tt || e5 === kt || e5 === It || e5 === Nt || e5 === Pt || e5 === Ot, n3 = be2.getClearColor(), r4 = be2.getClearAlpha(), i2 = n3.r, a3 = n3.g, o3 = n3.b;
          t4 ? (T2[0] = i2, T2[1] = a3, T2[2] = o3, T2[3] = r4, Ie2.clearBufferuiv(Ie2.COLOR, 0, T2)) : (M2[0] = i2, M2[1] = a3, M2[2] = o3, M2[3] = r4, Ie2.clearBufferiv(Ie2.COLOR, 0, M2));
        } else r3 |= Ie2.COLOR_BUFFER_BIT;
      }
      t3 && (r3 |= Ie2.DEPTH_BUFFER_BIT), n2 && (r3 |= Ie2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Ie2.clear(r3);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t2.removeEventListener("webglcontextlost", Fe2, false), t2.removeEventListener("webglcontextrestored", Be2, false), t2.removeEventListener("webglcontextcreationerror", He2, false), be2.dispose(), Me2.dispose(), xe2.dispose(), ue2.dispose(), me2.dispose(), he2.dispose(), Ee2.dispose(), De2.dispose(), we2.dispose(), Se2.dispose(), Oe2.dispose(), Oe2.removeEventListener("sessionstart", ke2), Oe2.removeEventListener("sessionend", We2), Xe2.stop();
    }, this.renderBufferDirect = function(e3, t3, n2, r3, i2, a3) {
      null === t3 && (t3 = ie2);
      const o3 = i2.isMesh && i2.matrixWorld.determinant() < 0, s3 = (function(e4, t4, n3, r4, i3) {
        true !== t4.isScene && (t4 = ie2);
        pe2.resetTextureUnits();
        const a4 = t4.fog, o4 = r4.isMeshStandardMaterial ? t4.environment : null, s4 = null === w2 ? C2.outputColorSpace : true === w2.isXRRenderTarget ? w2.texture.colorSpace : Ge, l4 = (r4.isMeshStandardMaterial ? he2 : me2).get(r4.envMap || o4), c3 = true === r4.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, d4 = !!n3.attributes.tangent && (!!r4.normalMap || r4.anisotropy > 0), u4 = !!n3.morphAttributes.position, f3 = !!n3.morphAttributes.normal, p3 = !!n3.morphAttributes.color;
        let m4 = $;
        r4.toneMapped && (null !== w2 && true !== w2.isXRRenderTarget || (m4 = C2.toneMapping));
        const h4 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, _3 = void 0 !== h4 ? h4.length : 0, g3 = ue2.get(r4), v3 = R2.state.lights;
        if (true === J2 && (true === ee2 || e4 !== N2)) {
          const t5 = e4 === N2 && r4.id === I2;
          Re2.setState(r4, e4, t5);
        }
        let E2 = false;
        r4.version === g3.__version ? g3.needsLights && g3.lightsStateVersion !== v3.state.version || g3.outputColorSpace !== s4 || i3.isBatchedMesh && false === g3.batching ? E2 = true : i3.isBatchedMesh || true !== g3.batching ? i3.isBatchedMesh && true === g3.batchingColor && null === i3.colorTexture || i3.isBatchedMesh && false === g3.batchingColor && null !== i3.colorTexture || i3.isInstancedMesh && false === g3.instancing ? E2 = true : i3.isInstancedMesh || true !== g3.instancing ? i3.isSkinnedMesh && false === g3.skinning ? E2 = true : i3.isSkinnedMesh || true !== g3.skinning ? i3.isInstancedMesh && true === g3.instancingColor && null === i3.instanceColor || i3.isInstancedMesh && false === g3.instancingColor && null !== i3.instanceColor || i3.isInstancedMesh && true === g3.instancingMorph && null === i3.morphTexture || i3.isInstancedMesh && false === g3.instancingMorph && null !== i3.morphTexture || g3.envMap !== l4 || true === r4.fog && g3.fog !== a4 ? E2 = true : void 0 === g3.numClippingPlanes || g3.numClippingPlanes === Re2.numPlanes && g3.numIntersection === Re2.numIntersection ? (g3.vertexAlphas !== c3 || g3.vertexTangents !== d4 || g3.morphTargets !== u4 || g3.morphNormals !== f3 || g3.morphColors !== p3 || g3.toneMapping !== m4 || g3.morphTargetsCount !== _3) && (E2 = true) : E2 = true : E2 = true : E2 = true : E2 = true : (E2 = true, g3.__version = r4.version);
        let S2 = g3.currentProgram;
        true === E2 && (S2 = $e2(r4, t4, i3));
        let T3 = false, M3 = false, x3 = false;
        const A3 = S2.getUniforms(), b3 = g3.uniforms;
        ce2.useProgram(S2.program) && (T3 = true, M3 = true, x3 = true);
        r4.id !== I2 && (I2 = r4.id, M3 = true);
        if (T3 || N2 !== e4) {
          ce2.buffers.depth.getReversed() && true !== e4.reversedDepth && (e4._reversedDepth = true, e4.updateProjectionMatrix()), A3.setValue(Ie2, "projectionMatrix", e4.projectionMatrix), A3.setValue(Ie2, "viewMatrix", e4.matrixWorldInverse);
          const t5 = A3.map.cameraPosition;
          void 0 !== t5 && t5.setValue(Ie2, ne2.setFromMatrixPosition(e4.matrixWorld)), le2.logarithmicDepthBuffer && A3.setValue(Ie2, "logDepthBufFC", 2 / (Math.log(e4.far + 1) / Math.LN2)), (r4.isMeshPhongMaterial || r4.isMeshToonMaterial || r4.isMeshLambertMaterial || r4.isMeshBasicMaterial || r4.isMeshStandardMaterial || r4.isShaderMaterial) && A3.setValue(Ie2, "isOrthographic", true === e4.isOrthographicCamera), N2 !== e4 && (N2 = e4, M3 = true, x3 = true);
        }
        if (i3.isSkinnedMesh) {
          A3.setOptional(Ie2, i3, "bindMatrix"), A3.setOptional(Ie2, i3, "bindMatrixInverse");
          const e5 = i3.skeleton;
          e5 && (null === e5.boneTexture && e5.computeBoneTexture(), A3.setValue(Ie2, "boneTexture", e5.boneTexture, pe2));
        }
        i3.isBatchedMesh && (A3.setOptional(Ie2, i3, "batchingTexture"), A3.setValue(Ie2, "batchingTexture", i3._matricesTexture, pe2), A3.setOptional(Ie2, i3, "batchingIdTexture"), A3.setValue(Ie2, "batchingIdTexture", i3._indirectTexture, pe2), A3.setOptional(Ie2, i3, "batchingColorTexture"), null !== i3._colorsTexture && A3.setValue(Ie2, "batchingColorTexture", i3._colorsTexture, pe2));
        const L3 = n3.morphAttributes;
        void 0 === L3.position && void 0 === L3.normal && void 0 === L3.color || Ce2.update(i3, n3, S2);
        (M3 || g3.receiveShadow !== i3.receiveShadow) && (g3.receiveShadow = i3.receiveShadow, A3.setValue(Ie2, "receiveShadow", i3.receiveShadow));
        r4.isMeshGouraudMaterial && null !== r4.envMap && (b3.envMap.value = l4, b3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
        r4.isMeshStandardMaterial && null === r4.envMap && null !== t4.environment && (b3.envMapIntensity.value = t4.environmentIntensity);
        M3 && (A3.setValue(Ie2, "toneMappingExposure", C2.toneMappingExposure), g3.needsLights && (U3 = x3, (P3 = b3).ambientLightColor.needsUpdate = U3, P3.lightProbe.needsUpdate = U3, P3.directionalLights.needsUpdate = U3, P3.directionalLightShadows.needsUpdate = U3, P3.pointLights.needsUpdate = U3, P3.pointLightShadows.needsUpdate = U3, P3.spotLights.needsUpdate = U3, P3.spotLightShadows.needsUpdate = U3, P3.rectAreaLights.needsUpdate = U3, P3.hemisphereLights.needsUpdate = U3), a4 && true === r4.fog && Te2.refreshFogUniforms(b3, a4), Te2.refreshMaterialUniforms(b3, r4, Y2, X2, R2.state.transmissionRenderTarget[e4.id]), _i2.upload(Ie2, Qe2(g3), b3, pe2));
        var P3, U3;
        r4.isShaderMaterial && true === r4.uniformsNeedUpdate && (_i2.upload(Ie2, Qe2(g3), b3, pe2), r4.uniformsNeedUpdate = false);
        r4.isSpriteMaterial && A3.setValue(Ie2, "center", i3.center);
        if (A3.setValue(Ie2, "modelViewMatrix", i3.modelViewMatrix), A3.setValue(Ie2, "normalMatrix", i3.normalMatrix), A3.setValue(Ie2, "modelMatrix", i3.matrixWorld), r4.isShaderMaterial || r4.isRawShaderMaterial) {
          const e5 = r4.uniformsGroups;
          for (let t5 = 0, n4 = e5.length; t5 < n4; t5++) {
            const n5 = e5[t5];
            we2.update(n5, S2), we2.bind(n5, S2);
          }
        }
        return S2;
      })(e3, t3, n2, r3, i2);
      ce2.setMaterial(r3, o3);
      let l3 = n2.index, c2 = 1;
      if (true === r3.wireframe) {
        if (l3 = ve2.getWireframeAttribute(n2), void 0 === l3) return;
        c2 = 2;
      }
      const d3 = n2.drawRange, u3 = n2.attributes.position;
      let f2 = d3.start * c2, p2 = (d3.start + d3.count) * c2;
      null !== a3 && (f2 = Math.max(f2, a3.start * c2), p2 = Math.min(p2, (a3.start + a3.count) * c2)), null !== l3 ? (f2 = Math.max(f2, 0), p2 = Math.min(p2, l3.count)) : null != u3 && (f2 = Math.max(f2, 0), p2 = Math.min(p2, u3.count));
      const m3 = p2 - f2;
      if (m3 < 0 || m3 === 1 / 0) return;
      let h3;
      De2.setup(i2, r3, s3, n2, l3);
      let _2 = Le2;
      if (null !== l3 && (h3 = _e2.get(l3), _2 = Pe2, _2.setIndex(h3)), i2.isMesh) true === r3.wireframe ? (ce2.setLineWidth(r3.wireframeLinewidth * oe2()), _2.setMode(Ie2.LINES)) : _2.setMode(Ie2.TRIANGLES);
      else if (i2.isLine) {
        let e4 = r3.linewidth;
        void 0 === e4 && (e4 = 1), ce2.setLineWidth(e4 * oe2()), i2.isLineSegments ? _2.setMode(Ie2.LINES) : i2.isLineLoop ? _2.setMode(Ie2.LINE_LOOP) : _2.setMode(Ie2.LINE_STRIP);
      } else i2.isPoints ? _2.setMode(Ie2.POINTS) : i2.isSprite && _2.setMode(Ie2.TRIANGLES);
      if (i2.isBatchedMesh) if (null !== i2._multiDrawInstances) ci("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), _2.renderMultiDrawInstances(i2._multiDrawStarts, i2._multiDrawCounts, i2._multiDrawCount, i2._multiDrawInstances);
      else if (se2.get("WEBGL_multi_draw")) _2.renderMultiDraw(i2._multiDrawStarts, i2._multiDrawCounts, i2._multiDrawCount);
      else {
        const e4 = i2._multiDrawStarts, t4 = i2._multiDrawCounts, n3 = i2._multiDrawCount, a4 = l3 ? _e2.get(l3).bytesPerElement : 1, o4 = ue2.get(r3).currentProgram.getUniforms();
        for (let r4 = 0; r4 < n3; r4++) o4.setValue(Ie2, "_gl_DrawID", r4), _2.render(e4[r4] / a4, t4[r4]);
      }
      else if (i2.isInstancedMesh) _2.renderInstances(f2, m3, i2.count);
      else if (n2.isInstancedBufferGeometry) {
        const e4 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, t4 = Math.min(n2.instanceCount, e4);
        _2.renderInstances(f2, m3, t4);
      } else _2.render(f2, m3);
    }, this.compile = function(e3, t3, n2 = null) {
      null === n2 && (n2 = e3), R2 = xe2.get(n2), R2.init(t3), b2.push(R2), n2.traverseVisible(function(e4) {
        e4.isLight && e4.layers.test(t3.layers) && (R2.pushLight(e4), e4.castShadow && R2.pushShadow(e4));
      }), e3 !== n2 && e3.traverseVisible(function(e4) {
        e4.isLight && e4.layers.test(t3.layers) && (R2.pushLight(e4), e4.castShadow && R2.pushShadow(e4));
      }), R2.setupLights();
      const r3 = /* @__PURE__ */ new Set();
      return e3.traverse(function(e4) {
        if (!(e4.isMesh || e4.isPoints || e4.isLine || e4.isSprite)) return;
        const t4 = e4.material;
        if (t4) if (Array.isArray(t4)) for (let i2 = 0; i2 < t4.length; i2++) {
          const a3 = t4[i2];
          Ve2(a3, n2, e4), r3.add(a3);
        }
        else Ve2(t4, n2, e4), r3.add(t4);
      }), R2 = b2.pop(), r3;
    }, this.compileAsync = function(e3, t3, n2 = null) {
      const r3 = this.compile(e3, t3, n2);
      return new Promise((t4) => {
        function n3() {
          r3.forEach(function(e4) {
            ue2.get(e4).currentProgram.isReady() && r3.delete(e4);
          }), 0 !== r3.size ? setTimeout(n3, 10) : t4(e3);
        }
        null !== se2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
      });
    };
    let ze2 = null;
    function ke2() {
      Xe2.stop();
    }
    function We2() {
      Xe2.start();
    }
    const Xe2 = new Cn2();
    function Ye2(e3, t3, n2, r3) {
      if (false === e3.visible) return;
      if (e3.layers.test(t3.layers)) {
        if (e3.isGroup) n2 = e3.renderOrder;
        else if (e3.isLOD) true === e3.autoUpdate && e3.update(t3);
        else if (e3.isLight) R2.pushLight(e3), e3.castShadow && R2.pushShadow(e3);
        else if (e3.isSprite) {
          if (!e3.frustumCulled || Q2.intersectsSprite(e3)) {
            r3 && re2.setFromMatrixPosition(e3.matrixWorld).applyMatrix4(te2);
            const t4 = Ee2.update(e3), i3 = e3.material;
            i3.visible && x2.push(e3, t4, i3, n2, re2.z, null);
          }
        } else if ((e3.isMesh || e3.isLine || e3.isPoints) && (!e3.frustumCulled || Q2.intersectsObject(e3))) {
          const t4 = Ee2.update(e3), i3 = e3.material;
          if (r3 && (void 0 !== e3.boundingSphere ? (null === e3.boundingSphere && e3.computeBoundingSphere(), re2.copy(e3.boundingSphere.center)) : (null === t4.boundingSphere && t4.computeBoundingSphere(), re2.copy(t4.boundingSphere.center)), re2.applyMatrix4(e3.matrixWorld).applyMatrix4(te2)), Array.isArray(i3)) {
            const r4 = t4.groups;
            for (let a3 = 0, o3 = r4.length; a3 < o3; a3++) {
              const o4 = r4[a3], s3 = i3[o4.materialIndex];
              s3 && s3.visible && x2.push(e3, t4, s3, n2, re2.z, o4);
            }
          } else i3.visible && x2.push(e3, t4, i3, n2, re2.z, null);
        }
      }
      const i2 = e3.children;
      for (let e4 = 0, a3 = i2.length; e4 < a3; e4++) Ye2(i2[e4], t3, n2, r3);
    }
    function Ke2(e3, t3, n2, r3) {
      const i2 = e3.opaque, a3 = e3.transmissive, o3 = e3.transparent;
      R2.setupLightsView(n2), true === J2 && Re2.setGlobalState(C2.clippingPlanes, n2), r3 && ce2.viewport(O2.copy(r3)), i2.length > 0 && je2(i2, t3, n2), a3.length > 0 && je2(a3, t3, n2), o3.length > 0 && je2(o3, t3, n2), ce2.buffers.depth.setTest(true), ce2.buffers.depth.setMask(true), ce2.buffers.color.setMask(true), ce2.setPolygonOffset(false);
    }
    function qe2(e3, t3, n2, r3) {
      if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
      void 0 === R2.state.transmissionRenderTarget[r3.id] && (R2.state.transmissionRenderTarget[r3.id] = new Ci(1, 1, { generateMipmaps: true, type: se2.has("EXT_color_buffer_half_float") || se2.has("EXT_color_buffer_float") ? Rt : Tt, minFilter: _t, samples: 4, stencilBuffer: o2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: yi.workingColorSpace }));
      const i2 = R2.state.transmissionRenderTarget[r3.id], a3 = r3.viewport || O2;
      i2.setSize(a3.z * C2.transmissionResolutionScale, a3.w * C2.transmissionResolutionScale);
      const s3 = C2.getRenderTarget(), l3 = C2.getActiveCubeFace(), d3 = C2.getActiveMipmapLevel();
      C2.setRenderTarget(i2), C2.getClearColor(V2), z2 = C2.getClearAlpha(), z2 < 1 && C2.setClearColor(16777215, 0.5), C2.clear(), ae2 && be2.render(n2);
      const u3 = C2.toneMapping;
      C2.toneMapping = $;
      const f2 = r3.viewport;
      if (void 0 !== r3.viewport && (r3.viewport = void 0), R2.setupLightsView(r3), true === J2 && Re2.setGlobalState(C2.clippingPlanes, r3), je2(e3, n2, r3), pe2.updateMultisampleRenderTarget(i2), pe2.updateRenderTargetMipmap(i2), false === se2.has("WEBGL_multisampled_render_to_texture")) {
        let e4 = false;
        for (let i3 = 0, a4 = t3.length; i3 < a4; i3++) {
          const a5 = t3[i3], o3 = a5.object, s4 = a5.geometry, l4 = a5.material, d4 = a5.group;
          if (l4.side === p && o3.layers.test(r3.layers)) {
            const t4 = l4.side;
            l4.side = d, l4.needsUpdate = true, Ze2(o3, n2, r3, s4, l4, d4), l4.side = t4, l4.needsUpdate = true, e4 = true;
          }
        }
        true === e4 && (pe2.updateMultisampleRenderTarget(i2), pe2.updateRenderTargetMipmap(i2));
      }
      C2.setRenderTarget(s3, l3, d3), C2.setClearColor(V2, z2), void 0 !== f2 && (r3.viewport = f2), C2.toneMapping = u3;
    }
    function je2(e3, t3, n2) {
      const r3 = true === t3.isScene ? t3.overrideMaterial : null;
      for (let i2 = 0, a3 = e3.length; i2 < a3; i2++) {
        const a4 = e3[i2], o3 = a4.object, s3 = a4.geometry, l3 = a4.group;
        let c2 = a4.material;
        true === c2.allowOverride && null !== r3 && (c2 = r3), o3.layers.test(n2.layers) && Ze2(o3, t3, n2, s3, c2, l3);
      }
    }
    function Ze2(e3, t3, n2, r3, i2, a3) {
      e3.onBeforeRender(C2, t3, n2, r3, i2, a3), e3.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, e3.matrixWorld), e3.normalMatrix.getNormalMatrix(e3.modelViewMatrix), i2.onBeforeRender(C2, t3, n2, r3, e3, a3), true === i2.transparent && i2.side === p && false === i2.forceSinglePass ? (i2.side = d, i2.needsUpdate = true, C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), i2.side = u, i2.needsUpdate = true, C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), i2.side = p) : C2.renderBufferDirect(n2, t3, r3, i2, e3, a3), e3.onAfterRender(C2, t3, n2, r3, i2, a3);
    }
    function $e2(e3, t3, n2) {
      true !== t3.isScene && (t3 = ie2);
      const r3 = ue2.get(e3), i2 = R2.state.lights, a3 = R2.state.shadowsArray, o3 = i2.state.version, s3 = Se2.getParameters(e3, i2.state, a3, t3, n2), l3 = Se2.getProgramCacheKey(s3);
      let c2 = r3.programs;
      r3.environment = e3.isMeshStandardMaterial ? t3.environment : null, r3.fog = t3.fog, r3.envMap = (e3.isMeshStandardMaterial ? he2 : me2).get(e3.envMap || r3.environment), r3.envMapRotation = null !== r3.environment && null === e3.envMap ? t3.environmentRotation : e3.envMapRotation, void 0 === c2 && (e3.addEventListener("dispose", Ge2), c2 = /* @__PURE__ */ new Map(), r3.programs = c2);
      let d3 = c2.get(l3);
      if (void 0 !== d3) {
        if (r3.currentProgram === d3 && r3.lightsStateVersion === o3) return Je2(e3, s3), d3;
      } else s3.uniforms = Se2.getUniforms(e3), e3.onBeforeCompile(s3, C2), d3 = Se2.acquireProgram(s3, l3), c2.set(l3, d3), r3.uniforms = s3.uniforms;
      const u3 = r3.uniforms;
      return (e3.isShaderMaterial || e3.isRawShaderMaterial) && true !== e3.clipping || (u3.clippingPlanes = Re2.uniform), Je2(e3, s3), r3.needsLights = (function(e4) {
        return e4.isMeshLambertMaterial || e4.isMeshToonMaterial || e4.isMeshPhongMaterial || e4.isMeshStandardMaterial || e4.isShadowMaterial || e4.isShaderMaterial && true === e4.lights;
      })(e3), r3.lightsStateVersion = o3, r3.needsLights && (u3.ambientLightColor.value = i2.state.ambient, u3.lightProbe.value = i2.state.probe, u3.directionalLights.value = i2.state.directional, u3.directionalLightShadows.value = i2.state.directionalShadow, u3.spotLights.value = i2.state.spot, u3.spotLightShadows.value = i2.state.spotShadow, u3.rectAreaLights.value = i2.state.rectArea, u3.ltc_1.value = i2.state.rectAreaLTC1, u3.ltc_2.value = i2.state.rectAreaLTC2, u3.pointLights.value = i2.state.point, u3.pointLightShadows.value = i2.state.pointShadow, u3.hemisphereLights.value = i2.state.hemi, u3.directionalShadowMap.value = i2.state.directionalShadowMap, u3.directionalShadowMatrix.value = i2.state.directionalShadowMatrix, u3.spotShadowMap.value = i2.state.spotShadowMap, u3.spotLightMatrix.value = i2.state.spotLightMatrix, u3.spotLightMap.value = i2.state.spotLightMap, u3.pointShadowMap.value = i2.state.pointShadowMap, u3.pointShadowMatrix.value = i2.state.pointShadowMatrix), r3.currentProgram = d3, r3.uniformsList = null, d3;
    }
    function Qe2(e3) {
      if (null === e3.uniformsList) {
        const t3 = e3.currentProgram.getUniforms();
        e3.uniformsList = _i2.seqWithValue(t3.seq, e3.uniforms);
      }
      return e3.uniformsList;
    }
    function Je2(e3, t3) {
      const n2 = ue2.get(e3);
      n2.outputColorSpace = t3.outputColorSpace, n2.batching = t3.batching, n2.batchingColor = t3.batchingColor, n2.instancing = t3.instancing, n2.instancingColor = t3.instancingColor, n2.instancingMorph = t3.instancingMorph, n2.skinning = t3.skinning, n2.morphTargets = t3.morphTargets, n2.morphNormals = t3.morphNormals, n2.morphColors = t3.morphColors, n2.morphTargetsCount = t3.morphTargetsCount, n2.numClippingPlanes = t3.numClippingPlanes, n2.numIntersection = t3.numClipIntersection, n2.vertexAlphas = t3.vertexAlphas, n2.vertexTangents = t3.vertexTangents, n2.toneMapping = t3.toneMapping;
    }
    Xe2.setAnimationLoop(function(e3) {
      ze2 && ze2(e3);
    }), "undefined" != typeof self && Xe2.setContext(self), this.setAnimationLoop = function(e3) {
      ze2 = e3, Oe2.setAnimationLoop(e3), null === e3 ? Xe2.stop() : Xe2.start();
    }, Oe2.addEventListener("sessionstart", ke2), Oe2.addEventListener("sessionend", We2), this.render = function(e3, t3) {
      if (void 0 !== t3 && true !== t3.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      if (true === L2) return;
      if (true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), null === t3.parent && true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), true === Oe2.enabled && true === Oe2.isPresenting && (true === Oe2.cameraAutoUpdate && Oe2.updateCamera(t3), t3 = Oe2.getCamera()), true === e3.isScene && e3.onBeforeRender(C2, e3, t3, w2), R2 = xe2.get(e3, b2.length), R2.init(t3), b2.push(R2), te2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), Q2.setFromProjectionMatrix(te2, Ps, t3.reversedDepth), ee2 = this.localClippingEnabled, J2 = Re2.init(this.clippingPlanes, ee2), x2 = Me2.get(e3, A2.length), x2.init(), A2.push(x2), true === Oe2.enabled && true === Oe2.isPresenting) {
        const e4 = C2.xr.getDepthSensingMesh();
        null !== e4 && Ye2(e4, t3, -1 / 0, C2.sortObjects);
      }
      Ye2(e3, t3, 0, C2.sortObjects), x2.finish(), true === C2.sortObjects && x2.sort(K2, q2), ae2 = false === Oe2.enabled || false === Oe2.isPresenting || false === Oe2.hasDepthSensing(), ae2 && be2.addToRenderList(x2, e3), this.info.render.frame++, true === J2 && Re2.beginShadows();
      const n2 = R2.state.shadowsArray;
      Ae2.render(n2, e3, t3), true === J2 && Re2.endShadows(), true === this.info.autoReset && this.info.reset();
      const r3 = x2.opaque, i2 = x2.transmissive;
      if (R2.setupLights(), t3.isArrayCamera) {
        const n3 = t3.cameras;
        if (i2.length > 0) for (let t4 = 0, a3 = n3.length; t4 < a3; t4++) {
          qe2(r3, i2, e3, n3[t4]);
        }
        ae2 && be2.render(e3);
        for (let t4 = 0, r4 = n3.length; t4 < r4; t4++) {
          const r5 = n3[t4];
          Ke2(x2, e3, r5, r5.viewport);
        }
      } else i2.length > 0 && qe2(r3, i2, e3, t3), ae2 && be2.render(e3), Ke2(x2, e3, t3);
      null !== w2 && 0 === U2 && (pe2.updateMultisampleRenderTarget(w2), pe2.updateRenderTargetMipmap(w2)), true === e3.isScene && e3.onAfterRender(C2, e3, t3), De2.resetDefaultState(), I2 = -1, N2 = null, b2.pop(), b2.length > 0 ? (R2 = b2[b2.length - 1], true === J2 && Re2.setGlobalState(C2.clippingPlanes, R2.state.camera)) : R2 = null, A2.pop(), x2 = A2.length > 0 ? A2[A2.length - 1] : null;
    }, this.getActiveCubeFace = function() {
      return P2;
    }, this.getActiveMipmapLevel = function() {
      return U2;
    }, this.getRenderTarget = function() {
      return w2;
    }, this.setRenderTargetTextures = function(e3, t3, n2) {
      const r3 = ue2.get(e3);
      r3.__autoAllocateDepthBuffer = false === e3.resolveDepthBuffer, false === r3.__autoAllocateDepthBuffer && (r3.__useRenderToTexture = false), ue2.get(e3.texture).__webglTexture = t3, ue2.get(e3.depthTexture).__webglTexture = r3.__autoAllocateDepthBuffer ? void 0 : n2, r3.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(e3, t3) {
      const n2 = ue2.get(e3);
      n2.__webglFramebuffer = t3, n2.__useDefaultFramebuffer = void 0 === t3;
    };
    const et2 = Ie2.createFramebuffer();
    this.setRenderTarget = function(e3, t3 = 0, n2 = 0) {
      w2 = e3, P2 = t3, U2 = n2;
      let r3 = true, i2 = null, a3 = false, o3 = false;
      if (e3) {
        const s3 = ue2.get(e3);
        if (void 0 !== s3.__useDefaultFramebuffer) ce2.bindFramebuffer(Ie2.FRAMEBUFFER, null), r3 = false;
        else if (void 0 === s3.__webglFramebuffer) pe2.setupRenderTarget(e3);
        else if (s3.__hasExternalTextures) pe2.rebindTextures(e3, ue2.get(e3.texture).__webglTexture, ue2.get(e3.depthTexture).__webglTexture);
        else if (e3.depthBuffer) {
          const t4 = e3.depthTexture;
          if (s3.__boundDepthTexture !== t4) {
            if (null !== t4 && ue2.has(t4) && (e3.width !== t4.image.width || e3.height !== t4.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            pe2.setupDepthRenderbuffer(e3);
          }
        }
        const l3 = e3.texture;
        (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (o3 = true);
        const c2 = ue2.get(e3).__webglFramebuffer;
        e3.isWebGLCubeRenderTarget ? (i2 = Array.isArray(c2[t3]) ? c2[t3][n2] : c2[t3], a3 = true) : i2 = e3.samples > 0 && false === pe2.useMultisampledRTT(e3) ? ue2.get(e3).__webglMultisampledFramebuffer : Array.isArray(c2) ? c2[n2] : c2, O2.copy(e3.viewport), B2.copy(e3.scissor), G2 = e3.scissorTest;
      } else O2.copy(j2).multiplyScalar(Y2).floor(), B2.copy(Z2).multiplyScalar(Y2).floor(), G2 = $2;
      0 !== n2 && (i2 = et2);
      if (ce2.bindFramebuffer(Ie2.FRAMEBUFFER, i2) && r3 && ce2.drawBuffers(e3, i2), ce2.viewport(O2), ce2.scissor(B2), ce2.setScissorTest(G2), a3) {
        const r4 = ue2.get(e3.texture);
        Ie2.framebufferTexture2D(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, r4.__webglTexture, n2);
      } else if (o3) {
        const r4 = t3;
        for (let t4 = 0; t4 < e3.textures.length; t4++) {
          const i3 = ue2.get(e3.textures[t4]);
          Ie2.framebufferTextureLayer(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0 + t4, i3.__webglTexture, n2, r4);
        }
      } else if (null !== e3 && 0 !== n2) {
        const t4 = ue2.get(e3.texture);
        Ie2.framebufferTexture2D(Ie2.FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, t4.__webglTexture, n2);
      }
      I2 = -1;
    }, this.readRenderTargetPixels = function(e3, t3, n2, r3, i2, a3, o3, s3 = 0) {
      if (!e3 || !e3.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let l3 = ue2.get(e3).__webglFramebuffer;
      if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
        ce2.bindFramebuffer(Ie2.FRAMEBUFFER, l3);
        try {
          const o4 = e3.textures[s3], l4 = o4.format, c2 = o4.type;
          if (!le2.textureFormatReadable(l4)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          if (!le2.textureTypeReadable(c2)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          t3 >= 0 && t3 <= e3.width - r3 && n2 >= 0 && n2 <= e3.height - i2 && (e3.textures.length > 1 && Ie2.readBuffer(Ie2.COLOR_ATTACHMENT0 + s3), Ie2.readPixels(t3, n2, r3, i2, Ue2.convert(l4), Ue2.convert(c2), a3));
        } finally {
          const e4 = null !== w2 ? ue2.get(w2).__webglFramebuffer : null;
          ce2.bindFramebuffer(Ie2.FRAMEBUFFER, e4);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(e3, t3, n2, r3, i2, a3, o3, s3 = 0) {
      if (!e3 || !e3.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let l3 = ue2.get(e3).__webglFramebuffer;
      if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
        if (t3 >= 0 && t3 <= e3.width - r3 && n2 >= 0 && n2 <= e3.height - i2) {
          ce2.bindFramebuffer(Ie2.FRAMEBUFFER, l3);
          const o4 = e3.textures[s3], c2 = o4.format, d3 = o4.type;
          if (!le2.textureFormatReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!le2.textureTypeReadable(d3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const u3 = Ie2.createBuffer();
          Ie2.bindBuffer(Ie2.PIXEL_PACK_BUFFER, u3), Ie2.bufferData(Ie2.PIXEL_PACK_BUFFER, a3.byteLength, Ie2.STREAM_READ), e3.textures.length > 1 && Ie2.readBuffer(Ie2.COLOR_ATTACHMENT0 + s3), Ie2.readPixels(t3, n2, r3, i2, Ue2.convert(c2), Ue2.convert(d3), 0);
          const f2 = null !== w2 ? ue2.get(w2).__webglFramebuffer : null;
          ce2.bindFramebuffer(Ie2.FRAMEBUFFER, f2);
          const p2 = Ie2.fenceSync(Ie2.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return Ie2.flush(), await ui(Ie2, p2, 4), Ie2.bindBuffer(Ie2.PIXEL_PACK_BUFFER, u3), Ie2.getBufferSubData(Ie2.PIXEL_PACK_BUFFER, 0, a3), Ie2.deleteBuffer(u3), Ie2.deleteSync(p2), a3;
        }
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(e3, t3 = null, n2 = 0) {
      const r3 = Math.pow(2, -n2), i2 = Math.floor(e3.image.width * r3), a3 = Math.floor(e3.image.height * r3), o3 = null !== t3 ? t3.x : 0, s3 = null !== t3 ? t3.y : 0;
      pe2.setTexture2D(e3, 0), Ie2.copyTexSubImage2D(Ie2.TEXTURE_2D, n2, 0, 0, o3, s3, i2, a3), ce2.unbindTexture();
    };
    const tt2 = Ie2.createFramebuffer(), nt2 = Ie2.createFramebuffer();
    this.copyTextureToTexture = function(e3, t3, n2 = null, r3 = null, i2 = 0, a3 = null) {
      let o3, s3, l3, c2, d3, u3, f2, p2, m3;
      null === a3 && (0 !== i2 ? (ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), a3 = i2, i2 = 0) : a3 = 0);
      const h3 = e3.isCompressedTexture ? e3.mipmaps[a3] : e3.image;
      if (null !== n2) o3 = n2.max.x - n2.min.x, s3 = n2.max.y - n2.min.y, l3 = n2.isBox3 ? n2.max.z - n2.min.z : 1, c2 = n2.min.x, d3 = n2.min.y, u3 = n2.isBox3 ? n2.min.z : 0;
      else {
        const t4 = Math.pow(2, -i2);
        o3 = Math.floor(h3.width * t4), s3 = Math.floor(h3.height * t4), l3 = e3.isDataArrayTexture ? h3.depth : e3.isData3DTexture ? Math.floor(h3.depth * t4) : 1, c2 = 0, d3 = 0, u3 = 0;
      }
      null !== r3 ? (f2 = r3.x, p2 = r3.y, m3 = r3.z) : (f2 = 0, p2 = 0, m3 = 0);
      const _2 = Ue2.convert(t3.format), g3 = Ue2.convert(t3.type);
      let v3;
      t3.isData3DTexture ? (pe2.setTexture3D(t3, 0), v3 = Ie2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (pe2.setTexture2DArray(t3, 0), v3 = Ie2.TEXTURE_2D_ARRAY) : (pe2.setTexture2D(t3, 0), v3 = Ie2.TEXTURE_2D), Ie2.pixelStorei(Ie2.UNPACK_FLIP_Y_WEBGL, t3.flipY), Ie2.pixelStorei(Ie2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), Ie2.pixelStorei(Ie2.UNPACK_ALIGNMENT, t3.unpackAlignment);
      const E2 = Ie2.getParameter(Ie2.UNPACK_ROW_LENGTH), S2 = Ie2.getParameter(Ie2.UNPACK_IMAGE_HEIGHT), T3 = Ie2.getParameter(Ie2.UNPACK_SKIP_PIXELS), M3 = Ie2.getParameter(Ie2.UNPACK_SKIP_ROWS), x3 = Ie2.getParameter(Ie2.UNPACK_SKIP_IMAGES);
      Ie2.pixelStorei(Ie2.UNPACK_ROW_LENGTH, h3.width), Ie2.pixelStorei(Ie2.UNPACK_IMAGE_HEIGHT, h3.height), Ie2.pixelStorei(Ie2.UNPACK_SKIP_PIXELS, c2), Ie2.pixelStorei(Ie2.UNPACK_SKIP_ROWS, d3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_IMAGES, u3);
      const R3 = e3.isDataArrayTexture || e3.isData3DTexture, A3 = t3.isDataArrayTexture || t3.isData3DTexture;
      if (e3.isDepthTexture) {
        const n3 = ue2.get(e3), r4 = ue2.get(t3), h4 = ue2.get(n3.__renderTarget), _3 = ue2.get(r4.__renderTarget);
        ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, h4.__webglFramebuffer), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, _3.__webglFramebuffer);
        for (let n4 = 0; n4 < l3; n4++) R3 && (Ie2.framebufferTextureLayer(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, ue2.get(e3).__webglTexture, i2, u3 + n4), Ie2.framebufferTextureLayer(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, ue2.get(t3).__webglTexture, a3, m3 + n4)), Ie2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Ie2.DEPTH_BUFFER_BIT, Ie2.NEAREST);
        ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, null), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, null);
      } else if (0 !== i2 || e3.isRenderTargetTexture || ue2.has(e3)) {
        const n3 = ue2.get(e3), r4 = ue2.get(t3);
        ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, tt2), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, nt2);
        for (let e4 = 0; e4 < l3; e4++) R3 ? Ie2.framebufferTextureLayer(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, n3.__webglTexture, i2, u3 + e4) : Ie2.framebufferTexture2D(Ie2.READ_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, n3.__webglTexture, i2), A3 ? Ie2.framebufferTextureLayer(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, r4.__webglTexture, a3, m3 + e4) : Ie2.framebufferTexture2D(Ie2.DRAW_FRAMEBUFFER, Ie2.COLOR_ATTACHMENT0, Ie2.TEXTURE_2D, r4.__webglTexture, a3), 0 !== i2 ? Ie2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Ie2.COLOR_BUFFER_BIT, Ie2.NEAREST) : A3 ? Ie2.copyTexSubImage3D(v3, a3, f2, p2, m3 + e4, c2, d3, o3, s3) : Ie2.copyTexSubImage2D(v3, a3, f2, p2, c2, d3, o3, s3);
        ce2.bindFramebuffer(Ie2.READ_FRAMEBUFFER, null), ce2.bindFramebuffer(Ie2.DRAW_FRAMEBUFFER, null);
      } else A3 ? e3.isDataTexture || e3.isData3DTexture ? Ie2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3.data) : t3.isCompressedArrayTexture ? Ie2.compressedTexSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, h3.data) : Ie2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3) : e3.isDataTexture ? Ie2.texSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3.data) : e3.isCompressedTexture ? Ie2.compressedTexSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, h3.width, h3.height, _2, h3.data) : Ie2.texSubImage2D(Ie2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3);
      Ie2.pixelStorei(Ie2.UNPACK_ROW_LENGTH, E2), Ie2.pixelStorei(Ie2.UNPACK_IMAGE_HEIGHT, S2), Ie2.pixelStorei(Ie2.UNPACK_SKIP_PIXELS, T3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_ROWS, M3), Ie2.pixelStorei(Ie2.UNPACK_SKIP_IMAGES, x3), 0 === a3 && t3.generateMipmaps && Ie2.generateMipmap(v3), ce2.unbindTexture();
    }, this.initRenderTarget = function(e3) {
      void 0 === ue2.get(e3).__webglFramebuffer && pe2.setupRenderTarget(e3);
    }, this.initTexture = function(e3) {
      e3.isCubeTexture ? pe2.setTextureCube(e3, 0) : e3.isData3DTexture ? pe2.setTexture3D(e3, 0) : e3.isDataArrayTexture || e3.isCompressedArrayTexture ? pe2.setTexture2DArray(e3, 0) : pe2.setTexture2D(e3, 0), ce2.unbindTexture();
    }, this.resetState = function() {
      P2 = 0, U2 = 0, w2 = null, ce2.reset(), De2.reset();
    }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ps;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e2) {
    this._outputColorSpace = e2;
    const t2 = this.getContext();
    t2.drawingBufferColorSpace = yi._getDrawingBufferColorSpace(e2), t2.unpackColorSpace = yi._getUnpackColorSpace();
  }
};

// <stdin>
var embeddedTextures = { "ai": "data:image/webp;base64,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", "design": "data:image/webp;base64,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", "life": "data:image/webp;base64,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", "light-ai": "data:image/webp;base64,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", "light-design": "data:image/webp;base64,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", "light-life": "data:image/webp;base64,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", "light-product": "data:image/webp;base64,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", "light-terrain": "data:image/webp;base64,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", "light-web": "data:image/webp;base64,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", "product": "data:image/webp;base64,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", "terrain": "data:image/webp;base64,UklGRmikAABXRUJQVlA4IFykAAAQwAKdASoAAgACPhUIg0EhBTZFXQQAUSytk9Lole+OhkENccQdILYCdBzH+r2X9cfGD735gey9x/2Q+7vvn+b/43+O/c35t9LPvX/V+oD30enP+3/pv3k/2Xyx/43/u/4XvU/Vf/u/O/6F/1f/53+F/z3/g/yP0t9VH5me1D9xP2o93z1U/2v1IP6d/uuus9DPzdv/l+63xQfux+4ftC/+rs/+cXiH868WXSX9d/fvSEyd9xWo786/SORzmz+Z/1HoO/l/9c/5HpiyTu2GOLp38sX+r6iHkn/9HoL/RfUdEZCvUgux6EX/r9KpZwRhPW1kYUwc1V+ynJygLNxqKkwoNzGC6uPBCSO5i8r1TCvZZoUwp1CjVTLtylqvy/WCPrf8BKL1Bwcu3qD76PCgPv+LY0vr39V+AnjitSzYwTJ8cPauGjQ6NJGEWxkQy7VmXIDfTDeGOhr4Tqgv73eVQQNItRuqE4fZjF9lKmenmz785vziSbrrE+0Vx3pFH9A4ttlbIDUXAMh2xeERKOfNbo4s99Frzfssr3A8JxG7SgxGiacHluPvKniyq611mf7sTadkFhaC+S3w6O0oLtUGP/EjpA0H/gFuV+RX0Y+8Swm0UIBVytEznM6w+4ZWk+mloEkZTGMa9lHnxmg2WA0Nr1hecGmq0GcedeEITvDqwR/oEl5EZNBoU8cDEaew3THOUBmQUzdQn0B4daFfsN8AayP84znxfhCJICrhUfkzPReZqA4wrPMqIPRXME/wc7gbhdi5dnYkvbvuvmIoDdz2oAP7Ue4BurRg2BruQ9CDGH9mv0xFU6yTvgeh1UPGwgSbOrordQvjR0Ky1H9P/xTrL2UQx/GP21NiP7zIty1txpPw8Qu9JSm/lDk+Vh4M8Bjgfh43ytIUSyu9WUNDym0V6CSX5MOyCDioMuJoeF+5+IrfTk0M+pW4MS1P+3FSjqfONS/p1CkEknelu3twRvFBDzAwXmAsEN7GOro4n18H0udRNTJ259DUWTR2ICl072v8EjxdqKReFpzUTLyXjNu/tV7LOIJWrTzWu0shNidxNM7pq0AuLjUEwMgYuGred+CtbW3jtVcECH+xHxG1yFMOAFJKJTt8vqcbwjsdJDjEmd+Ia/7L/ZSoUirsB+yyNYMuw4+aJrHAlvrgEF4oHmDYuvPr+ye/q5mTBXZ4juXw1FVL+gVdl0e35r96d4T/TzJBYCsWw4gUOUjUe81BMODgJFV/h5hyzWHreoKsaDA2m8AYwQCTKVcJLraCec4KixMPIoQysI9H5Ihu7QlEMfSbLi/ukpfdAAMicJmSblsHJwI/fRkik87Hrw421LN+ZEuIMA45eB+ELuBBp0I88drJ0KtP2Aock2laXTmCzfZc0A+pUa+X7TGx6BvyMUb3DCD3qKcm7Wb4HPOeiRCG0pbcHNbsZ/xWH7isSFvdev/3YGji/yY079Rn7D/PWzthMIYtheqjcyk/XYjydUW70MdfrByGypJ4s+r1N/pXlT5VoogDOYlvuSulA4T9+Qfk17w2chC7u3GDxRAIo6DKyh2SpEaK3YnBGiJ97qz4ljA7DvUUuFPjdp1ogY5p3Eib82x9tI/bYLkKz/IzGzhNRDtWGwbLy12hVsEd3z5lGW2ktifig7KcRTjUCOAF+s17G4r4Wa3mdGTTS+n+h05xxah1pK1oY7on1gtYC4z6WIPbW450TPn93likVaLC/kXcbcNq1xDpNPUfby8wv0plEmhXY42p5LVYm3D7sfN1SDc4aFN/VahOXHqGkbET9C6RJuQuz0zeNpYWTFuoqM/OamdVHeG7C2iol+rhDgBJqpB5zvVWHwL1sjsyOtTJ+A6JGKNN5xP1Cxz9p39MULTcPCbA+C2daxGt04wIOlhsEAOy+qRsQ5rFGMf3fuP3FOzsVZFNAg9pCGkyEwGqL1qLtJum9k8PDFdPLdP3dKrbUU29nFyZ/blmKsSmxxFjBFC0eavSmgLPCf/3IWi4laIBkiekuuZAzv0lSjGAVcGarQqphRV1BfNgERNIh3vhaACbZaLSveos5alsAekuFpmSr/eQWapIMf4vAQt883A8YOQehAoyRD7g/4PJAPnrbA4lCtz5SIyi+QfXwZ+9u5TRbsf/bdbP32T2ZUbjBZDCJHDt8uiO76cXlGyZtw3JRBVdc3uWCfHtsIxVk2wn+M+MZEsGz8R7L/fBCSALHZCWJ7w+dniG2OkZGCc6BPZWtsMTb0032Z0glcufBnLmFRS2gncP53HtlMTiuFLrUuZ5lnfQjW+96wbByHH6BAt2hOnTr1uGCI9Q0q4MH3wn2zVA5Ot/FI7OWSjH/P6k3bueIGukhRz/HctIw+HkXSS6orTKuNto/zcD8QX6pGo96uDjqQLqYT7E+UmxhE2NPLN/mNKn5ax58o8H4nZ+eh9BQI/tYWaP1ZjJfbg2a+t8xPzR+Hu3cGN+kP9/e93JcBe2aSkLx94nQBCr2y+ov/54oklUPPCtajxYZ/beBqs9eFPP8v4d34DCzKmmhzZJCJ53okz+C0fYVb1DftCSLXVboKOhBr2mxyOOpGFGZwR4cShTR95R6KgKJPePkIjHqvp2jOfizus1WKK+BrEUm6PUDZMIYOCrzZBvUZ2SXrUUxrk1alumJ0txlhh+VtD/9n1uF8122fLqA7XaVRmJ+uWZ4DEAPJtd2sOO0E79NP7U9JdyzjyfXPSQdnJQ+y+S3GEGlf/dmCGohL/XdLFISOF2wzpcvBy/2E5qFpEeVjIO8+aPf2X0H7Wf2giDiopBzZbJuYL+Pmw9Q9nyz36MXaVR4Fx5MS2VqrApo1NqYzwZ7YP2MX4lZyAAjDdmX3SQVH5a8aeXWlrWnt8zivKTR02L5HENZui/wmNpzN+ABvhj4C3Ja3m0OV0cZknbTgsPUZ3obwhchSH1LlIGofd04XPmv1EAmMjpbfagrtTHunUV5tQ9Z4FtTvvnaWMNHzWjHhxvsvo3h+1qvkGcDnQ1XDPlwsjVwoteACtm/+0sk1yjqqj+7IeaKAmNbus0oCPTBV5uNo9wHohe9YdNPKTrxyEmBMaRcDTQKjAJ49D0dXeNsUzzUPn3fKLGZPNTvONAk2di68BdhbQHx2QmNWbRt0TNU5CKERgLvk7FwmYurLeOxiOSir096VoFGlcoEmjOlqwoBaJjWzHm3x561w4k7+rvF6Ba6DhYOHCFggKvs5MLzDA/M26Lwb/WVIAbSP0Ht/kRW0Hitpt+WXJCUM12AqjHGmC+JLeSI3Ro3YrFJ1WdkXJnhvxYM/jfOzhGxD7KnyzlS7qqIkMFCvNkH6wjri3wew2sepCZUsQUHU8fzbNZ/cRXCsMhYoM/0smV+WhRFE1mSqBr8d1uwmkPSMEeanCgBTYjMlyDdk1ERqwyIOrQCMhHbx2Kn7AeT29zfsCrAdA4csV7noSg8pOara18Gc7Vg+jRcQt5hujL/WxI8XwJVTK0uo6oFAPJNRDP+0WAaWgWlxK0gqAo8So16R4BA1oZCD5I8paC6RzJT37VQnUF8jzbTtLkk2N0UBdKM1XLjZvWxkCfaZNr5oVZ6dcKWyq3CzpLs/jKOnhebpU6W3bNDmDWVgZPerqsh3NVOpXePzF179u2lCOpXdcW+a4s5sizO4WzC0qxO2kVtFxQ9tf60qcDdANNV3EVxEGm7cem6WMKBmlQ8QoakuAC4NVdW/9+PR4klbQd7TszeLg+i19kNZs7DimKqtzE1WPAKV4YnEUtT2qxUS7Kq02NNt73F+5e0JMePsu42Odq2VWKfkphdGeCimhLAa8Dj4leX/bqOyA4NOr8WO0C89mi80jw/CrtPR2SdM5h7+I+Jastk7e9SfZKWy+R1hDo40m9EHlzR9kg1lHkhGcYkCgcl9d5K0bYyydYhaF9094JXqG4PIQGhX8sVQWCG93CrxPs+mxBwfN2AEg7rEY8BWokIPem94yzr3PoFuS1qRor+19Rws6yaBtOqvD/ktmE2U9/u663KSfBGLRn2JkE03BDRld50YwE9xMQoZ3mZwO2AH+TKnMOl0jRvOA8KcXbAxdDnzSzIyIdCdeYAMgzhaIzhc/qaKan8D7VISavIcczNvzKlEG4WVlVhyxH+YESyLa7ceZbhCbvvWv3/y0Bs6/Msh02gt0F+EEYF3+0Viq4Y2NalZftI+1rFQqisU2CGhCKMAqL6AAWK4G20/EIKar5laEWbon+taeMdd+vBh0Hb2hL7Wn4SyptvGL4Jzi1KzrZKZYlenPln0Z5+c+mrp8W3m4gPz4UKpBPiciwh85MvMbn2GtAe9Brij0+OFYBR3h9tjJvSdJS370BDYbPeDcnXl1db+sWqpfXzJZGyO4PiHR1Hnd91G91Cf4bfCtPILloM6hSUyEKt4BWpP6becRRvTlogNsXkJnvUB7ChHeN1CV1pogc77i27glS3+FOEIPMh8Pku7nRhRbT+vDcDt+69FcggHGVYKo543+ka1rkQraGvxnYgQPkIUN3y7SJXMN64sQADHSezHa6hvS8h5Ojp00v8nPgp5hA3vXjA/KjAaQ8yTaHs9IwNV453eGaaSjZF7VAsomYEjmkBoZWRuvzTSH6XYkWlaPUpPMPfgOaqYATNy4u03suQxW/+V044wmjiWF+v5Jo6Q6K5YsUUNUD/w6bCw1ypAoUpEUks/RHd9D0k5P+b5Z3WaUcPc2mbf7kAuJQMgVTj5bEP5u+RE/vlL+r5F2VXQWHoyMfx0GpuIpGS3nRXygzJ9oxpHUEjO5NgFLI9O47J+gdAa2DCQiTES7CtSK0CpCZYPynbxnnRbzfVfxnDDVOjP1t2glCCHIfDonVlSFBSooHzrRZCUYGItSN3I0Ttwbn20KqBxlqm6bUKytYFBODgDkrD7+dHHXKr8FY2DNANj6mqxeLcdLfN/UhvXUHxGIQk4SA6U8zjqhHfOJByFBAupNtFllGspcrgENyGmTTFNFQLjhHkfTmQttIOvGPuHCIa4sdf4QRBNJadCjOces/bjStMk1Btj7QbQ+FvzgxtLmfPXY2j/99G5iOE638o0Z8T95Me/a1H00s+bVcYUa7MJ7WjmL/HNrvved2Yt/Ec58GhG12aCO+87+moCNrfkdnO5hnPu54Y36ebAaqqQi0dHKjb9b0bgzhWO/RNXQgHIAOT5OkonJgJLHjanJWTdq1PRhIoos8ojcitLMCszxTwdL8ZEYLrNR5greh/KjOTVRme+wcjQNPBoUj0/K79p3X0lFLkdUTLzbYEiR0TzZyOoFwivo42j7Pc8n+TN2CaqDe5fUY8sr2fDeKtGdHbnXQka7ZEzl5zh0kKIB4nZgPhusH3FJH8EeLE5/ugsHZ0dpTgAgwvOlfnlX4+lo5/IwRVGkyIpI8VQKLrs2Ggpb2U14PmY8QMAVhS4vVgtJOWntxqPs27zs8ownBx1Yua2ngxKADlRrMifTvDm+EXcQlVrjQBgzCpbtxeJuh9IOQOFY1JvtDpzdsl5TYyP/5ZRgdPWVO1QtTDcPIJg3nzC3cYepFSJsp7HJI2KKaqnY2Esi2KPV8R+6pwxHqfEdefTgPvm8dtnbhTvJggyTjZirEq9szF6ve2T2wxGYNYoMFibMhEz8kMfzw4t0MkCXw3G4tvPXzkoEZBpVbmz62Vtg0cEZsMreWx92b1jHruRkUyd3J0K+RKSli2iA3Z2EL9djmBg+6phf9vcVZs5p1s4L8pmn6K7R/W98S6zRS+tU8ZfC2Pk+nBS3BmtYOeMPc+rrbslvlW2yFePtWiq2B1+3VOgeArK2bSKGsBucc5p/MIsd9CviaYQnqNuep1Yp9odWcWO800u1rj7fjdPv/Tgkpv8UxgvoI5BCRz7yiPv89r0dS6Yz0+6pr2qe8TlsAgujaU5eNLrJhXyLAGVq+2n1AoN4bNymA82BWNCPZ0ttFz2f9Lmgq3PtO/rXy9gSv3rNHMudof/bzRMuUWxOk5jCfz0JDwARzGaa1MqBakzne/ab08y0pqzdK4PsJUveDAISX3uuO1+4xNTfmGRcyyo78JJTdLv4n6C7kzxGHlnbxpuFijw52aq9by03ktVTjOhxw2xqZWNrD4X7wo2wtR5Ns+RdshcI2p0MUYo4K7/KCzWyeXz5BmmLOlpPxt/VgYexgUcP9v9r33nM0CjvCz8l1hYQzGijwpi4X0noF6NT0/eyBniaiMYZm9roNXBpGKJoXRryARz4rP3qHHJ3fRkZRwhlAYjeU3bwrZpoR1RIm5M91X2q5Z7tm6br/S03kcQAJKa6HVWOsuxhPN6Y32QLh1zkkskRPyp+1zNlzsa8sauS6fQAOVm6ROO32gmnRwmsWIen6HxDIDlI0BkS0yr+E1ixTz8GQ0axAdlpksOluD4t+b87J5bt0ezCBDkDcsfRj6mQ3Yw6KTMc5tvp4mZYSsviU+1wEIzibPCOtsOHf9DjeR+IFHHzbx1HHYJIQ8z8/xsF9z5de3MNG9NG8fpxlRH9LtD8JAnxPCmHppYQrN6OQ5IR7V0poYb7rZU7JIWdcYZGj6UPySy5pDxMmui/Vh/4mZ+wW++OxYGOAEf95YoIkw3vEi/Q3AXIF+gWj72fLl/cL+rrWaKMBvYXw2Dj9F54+SVHsAr0pSJX8bW97mFcMeSbDfDZUKjfL2ldvvqYmLzUm3oWPso5WmVjJbpKVO8lzpVRcX0ZywnfBNJecz9msGo5d7Ry0TlgpFH9jT/2S+jCu6vKIo3DjKvCfOp3fcE7nit9QQTpT0yUfN3nNzg+AbuHFCbvWK2juX2y8TxdaXFOolrntnVBe/6tsQxEOQYi93345+HgGDwI2ihzkJqQ6CPRVoPbWl7G2XDs0CuaVT8FuJhmVrOosBYxoVVod4iOyn0FAV+GMjEItysWdk2cfi0sIDwAttgVvtcU6/3tyHZFCpTgG9DyUjZK9sXMJdzknh7XhqS8MdWKcbtveCmAA81uy9F4960R+4qWMQNc+l2oIhoowBaUCpLsEzVPo/W/7BgGcVK+V8o2SdIzzL5vZHjbkgGd9DQb9GK5zMZ96zPbU+y8/WZfbyIpdcQhWuboPt3oOncsFNnEDSnBeMhEEvgxdARrrv/Xa08Xtb5tqJcvi0AwV1w8vX75hBgl9UFP9J1I48JyQuXcBLahfIKZSWCcsAcedfhZ5KnL1YO2ex5iCLotUVUSVhainDevSFD9qD7GSKuir5r5vll/nW4vPRn2dD4GWv/VewWZELvB55lp0UC8BAuxewJCQW7OFyQ/NIOGwUHwjHi96oIa9fLGrxBypjU2qQKc8dUQFFUGsJTlfpl5vL+F8Qn4FCOV+nIWZjhcqMalmAx9VpGPfx2IffsBD2zVO7vklEzZsCWsPmgopeioRCKipmkttumamrpp/NETUo8bbEoiYQQqzaPt1O8lRLAyvbz2F8W/m4qw063T7NlRdGhO/tHi+otr+lTAvOnaCHBYwdYUf2NUf0id2tO67Q+bhLx8lbfZE+Qv/wJmwsvmKnt5nzOtL+ufR0RFCOSoEmPQ08ORwnZsAAP7//NKhnc3aAJWuFeImz5//r/f/P9/9I71evy3nUxdHf9B29XZoIxeF5utwQ7FfOIIVxiOw4buRqy7kDND8xh2UqK4rgW712UlULMa8O4vDJpYHWCJsggYnsngEmi3G0Y0h1qsyUlwSqQ1FUGon3Auq6tlQcgCZiwyFKQkBeznZ0c+JGnXaLM3yoN3jfwC2NmJpT9kOHGmDpZjU/GA9TQsii3iIhvcVb/ehe3jwFORxGHGj+AYRiaU/VIaQJfV8QneNajyLv0yw0d6Wi4lsjo4EiRjTHIK1QgY2MRg5mqd1b6Spp4RYrkohqXJUphX3MUSAVMcpNJzqF2ybgC90Gy1G7p1fa4FvX6FRJUesMATHM25WG3nYoBB0sbQ1BClnK1u/HyXG3a7YXh4lUhARrC9r/6nqSds0MOGUeilFRKKaHATlzPtTclx5GOOU2ePM4zswdV+uVh7ph/iZZiugcfsTCebN9F276+31b2eOeL3wCWFSGXO3GGG8W09VGoFH7WYrXVBPSj+vgHQdPWu4JGE6jaaLCGyRniuPyDpuX0pSFPizGDuJia/51gGDfU/IM5TZHXZq6ajqT67t93RR3ZAfAzaK0JpLKKhxHc3iLYP78+izC3qP8WtatsfMJbSXMrHwb15SqNc7EeDuj7TTd/KulVYVtSOw34l6wh2sws0/XO/MnZH8HxXMKFv2VNMtbCaNxkJhBGFlEYOjejpJCFE9ZsMA03Fbdu70RmbMjyUld+/vbgBFQZwOOrrgaX+a6vtvvs1MzyQiNbdpXD88JKVm/4gXk93nKoESnCwKwjHIaiMfPhKExgJB1ZDrq+NTyt9qjMNuLC/7bGXU+cO/w91DtnpufH6XvwLVxa1UWqtTCbcJQgTLHTI/1Pt1tqesUW4eK5PcMcYypSEUew1miNn9JmxnSpmgxREgGYUePcjKUt1bDNeSSF6/vOf6smCT8gKgDCqpmPRIZZnYpQfeRsintm+2Js5X39C1iZuwBO5mpjLspE8grwDyQXAxuzI2K1cgxOLuPpn26w7n39jj2BTytU3fPJNF2M1jODVa75AV33vfF2LoB0vsCvEF5PEmXoUCquFakRJLEeOsOTOJs+SCpHaidwW/5JMt7MEUz9EeSUCILSHByZuWi/OW9R5k/9bRl7+FzUCx8gTTixG3cWq69qSpqFbe7ESJy3ay8cGrI3yEpo0oEZDJFo7Xogfma93AKwuxj2ZjBut8ni8oLy9/ga5TR9reqYPxpYKuI2WH+FmTiny1RcNg+5GbVZSrvxfgv85RYTG3WVmkkMNKPs5NCj6ZW+yQ7COL2MEG0/JbWl+kHy+yJgaOGbM5ROXUL7lB7Ksh1zZdK1FdrEOrD6Tz3/2U6r+xkv1tXxxKKHE8BmxKQDF+wUCRzg+qkcDZAd9Ek1jt7rJCoqfvEQ1olUmZE/tD39B7wvhtxO7uVr00oPOiHmWFrqEtxEHU0NUI/MkLIu2re2JCTAwRjC8meG9yrb9SDhRJRS6tD91B5J+DdYEQmTwPYeJOJZO+3l6Ugy9hxIZsu9wDfIv4tgbD5ylKezqhl6kMI+W2tVNTujkBK1SMjywTJs7t7gVMmKU/AgS5NWP0PcuVnHhvT6F2Bpk/0Evq9DItk7H310lMAanKN3BxIXDJMhLzCu2Xk9GR2/GP1i9pUCkomb96dncRaHMq7OT+yC6wT/X7+H+nT/M1F+Z2UKbmVJGQSYfbKUKNNnixTHDoKfiEu24rCN9OqW10VRhOancYamnjyEWhApy/UcHi6e6NIuJ4vC262qrf4cBhevNMbH+tCqACDRSOTHdTdawvqkf5/OXDU1PNWzZOagOTYuJN8Xj4lamb0IDKM+c5LUnf7L/br8WpsXK6g+V6f+u/q/sQlH+k/jeoggCK8SJpfUUjuAVskyZTDoncXr3lwQkB+euf2nRDqUiz2qA7Bt1q6PXyl4PcNhCqHQZ7xQtl2dMjgkqj472Zrc85dl0wF+SCiL06uesmB/6DqRTWm5LjQy7/SmZcloTW1bKgk0peHaVFGf4ovmbBvPPCbkHFIvzcI0iNLha3TuQEZlbtHVMSpKQNEBvAKLJMpVINwx4gYSL2wdmsXWQIyMCHgg3eBmNOkojlFTE2M8gb/5JN636x3fRkxXIsP7titgBUxBI7Kgu9JB2n7GuGCT7s5QRgAXo0NZfrRgFN3fhBdrwve02yr5ccIusBRkvbA0Ukn8NVOhRLwCcvF/y5ShDAn/FyTPmjqz2ZeWzsub6F8XKhp35/PEK/xi/m1KzUdBdNIVaFB5JTAD9zhmoZr1zNS6FirUid7n1va7dD2nvO+/to2TCtfjgA5TfIIS8B7PfVNeajeZbL4PGJxum7+rWOP5wB8ZBBmEtiZXY3RctUdCnEKziObArPyHSVBX88UY94YhN3ZzAR9aDCceNBKz+kMS99gsvZ3Fm5A/Pweau0AjnXGRMrtJxw2bPJI8/ukBCEwahj+jPM346NQDZutZYvKLtDiuP+Ii0cFnnzPx35ATxfvrZtblTeLyMEE1kX4VzxeKkOjZf8MtXhA5cKMWL5BUNgbIT2owSM1nkJKk0u3wzexaYlzVKFdmJGzeOaA7GkSyG8/zld1R1sVlblqW6Rsen7xGoDGpAyBffrF3Ih0qwq3Q61EGpTORwB3EmVArK+SRRbssnuOEwABT9KqK/YkDAo2I7kwrINq9OZGULnD0C26WkDYxAKovZHxJOSJuTShhG9H+uCn/onPK8WKyZb3x9pTxGqBS3pQqP6/eJebd49F3aUHl3qg8P2nlNKbrTDtakdpQ0Qb2NpNacdm32I05t2ER+Zzhq63uWImEOHD0TnWPFkfPKoJh3WhDSg7dzqsPC+SVXRgMjmwdlt2WgQTHpylAsnVZepncJodB+gNCZRGrB/IIGpygOb7bqjftxlRRSQZPQqJV+Z+P3RNC/FNE3tRag4f4iK8zUjrybDyt8ED+MEaBH99FKt3URUf7mdU2Hlh8thzQAE/op0aUMef9kwVfb6ZmxRIQqMh+U31CpWTOKyyW89E7unmMVZuM707ap08Mm3DAi8TBP2e2R17ypPQqidS1gFMT3o3ZGzhiw4+REHMGdHWcDUPAYZsV0yXLtLD1nR/beY99AUajGQsZLnRz43xQcUpE8E8QTWtxyMCCsBesg4j9GR+dPhbaNq3hlyw9nUnRv0EBf7/8Q7VO/0Bb5mWK4nzagU2vhbDKkEu7pfC9QG7zao2ITy8uFGLTENu1dxNyBXbJXGlEZZIDusWDPq+RM0JEoEEaRVaALd9lrNbekjyKnMtYujUPOfKANTOFxZgklUzvEUkuuIgPrNlD5o27sdFH5UNb8BytGUHDEAdoZDd7HoSFmY84qprfIRAb7mi6yFQFFDmiw/jKiJzrx9tKnvHpvG9xTtcH/B9CZLwkyUK1F7Ta5S3hLSQ9/diITh56vz6HumUm7PPA81E+Ge58fu3cf2suNqEQyp13ODiTCS6XeIfNIgRJJDKJvhMDQPT5Q2QL3Qk8G5nIc14Ly+hIOxo/B0++w0BwJXqSwKHLVLvEdTqG35zCtH9cQUVZDt1cLfy8t2oIRi+ndXcf4TBS9zIsQGadtRPT9QN38+6sNyTwrKO01j3JsMmeYW4sOk67l5i0NfpvvAsqNNjT99LsF03AL3f9zOW5njq0AfIw4Dzp6jnhHh2ZTzzv7c7LWxcov1ktlztlSiXKEXRpN7+rC5Pz1kJutlA6kWA11/EB3/RuzxuqtQT9goNlT35S/NhQ9mnpK/sMGPF7jCN7B2SE0ZuCsb50fAcYpt0Xc08ERJmz/a4fFHQmNfE6v3g4ZgPrOPCxCAHfov1JfVgWNdgCFt5tvEtGgRh8tidvgI//jyue4eWkCxZZZdplmQJPZ/QSNMj4FIQIAcJs1E4VUeEJTs0d+stEwvwerH9QJHvWsBJeK4msjbal+1sOBSViODCB4ekQIo/NQH2sjxOlClNkqBk7uCGw2cTjYUh83cUL/V6xv60bqCmxa0oOyGRp/TZRdWQfyRKFnLNIQwntoOV5EeJqle1RuC+xlYXd10cxqksRvsEE90yAITHysgr995L1lFUTnloRk0LsGA/6mG9MfCmozw5rGBqBybo4z7cc8jnZC0dVNtmCgQAIgNew99Ui1I/DjYssZ2hf0VgtC6wqPx5fJpgYfsTkgo3yapmd7cM3KDeLWdq3w6Lf4WO4awZlan3p4+yzEuJHyjhkI0jWljExzmztlLhBuqPUpsduPN1BB/dogoXWw0d9ktkhWwKyYKKBybjdgrsVYEqhRI4P1Hw3ogTaXTNrgKGGsLtcOxkbRmZ9t9ZHChNn0e6cFY0Wnq/nKG0nGz98n/nC0UfDtfY/+Y/e9zixmn3pKReVmy6CMKKmGOQDk19xndS/UgvzEZnh0gsunP63EYOw3MOZ5C1K4oojUmzZ0c9b4Gpe6lGeQNRfMMLRhmles2pKv9Et+tIWzd2V5kV7UQyP4VtR7tFD+nzgrjp6bAbKrz1t2nIXV1TsyIs68pytwr0BMccNA14gqL4EDG+02FzNrM2vbsUlTiOT6Ty+F2J8j1E3E1OwsThxPNWwjACKxpu5f6vBUbaDq6JQtFXapynvufWYBkMaiv2jRAyuFzU4Ab3t242zQfQwM5jskeYh98h3DTumn4Iy5S3Plx8NFLqxHvME4HTn3K9BJiAcffqyNmZ/42cdrwcAYIVAFVyOj8JA68G3PaZmeEvNYt5j9JsOtUnyDIiUC7oxLFRj2LrRrqG7PPZJVkK8LQdXpZQTSp0xx34TmewACGCY4vpQjLxzjfpxzdXunMfcANk1m5sUOM75L4Kuw0Gm0fQN4sKrNoYB4fYvA//1oDG1jgS2vt3pIz4BLJ6WueBMllBsxuM9LpJ0jaX+B0yAq+uFwB8fycK8b4rscaqin7ASZriRhAXeNUR6Ofz6hQTIfzQcvgmcZHd+1jn26SNqG32gyh7tBsmzmu6a4bOaZzb+rOohmF6L+/FbE5NFCoYQSZtaMjv9/r7bev0eO+50S/5wbly0jZufhK0z4c8ghulS/LVskN+l2699lvDhhtjylT+7rb1sSITUNwWCbjqNbW6VcsNlOpKD+lOU1W1I1OvGidIo6XLSl/o1CADMR0/Hp1E9YDeR0dApqEBysN8sFP8iiuumkR8/r7U839E2upsuP1PHuDU85wUnugxjyJ58iGHzsfOO9fQXOuK4SEt8hWUVGTyIMX9SvFV0GeubvoH6yvPV//UuT3ITvj9cyxxGbtrk/fRS55UKyqKs00WQvnBGv43krUyZ4HlQxAFeu4EjeGm+lE5GD9TanVNp9piA84AGuyg0dahQdQwDNVU+IcShIJ7HdAd79+um3T+OG7v4crN99xoFW3KvdJuqHYT/mLf/jgCwMqEgGOmpw6QQbMoVZ1EXzdO/LdvnlGBkHMPdrkpYiIwc6qaUTJ5joUzZJF3q7NPxlNwy7D7tx3jhhY8VeeuxyleV48ImzWXQhtj+TvGRA7/QtkGrd0iolNn++Auqwt49QSRjmqgRdlaShv2wxR+jz2uyWv5bnGxniMYmhsJDsOlVRLU6U+lqECQY1oXXuNBOavZG1WrYHi8+UZkjlfOTNP5nV/xftJ6TPnrwFpNvB2MrwhumB9uWh0rP42JfKuXt6wjKfp42oEHrUmFaUdI9shXbth/wKDlRtOqNV464UcimBPDI5mcI9b/JXCBg1k/O4Ip1o5C1k3AS2YFMIwfQ1scOURHcwVMYeaITpbiviJ1aypM9pJsF/onmmYXsfXJbq7kAE108Gc4Ligl30TWA0+gOPjXOGubzg9SmX7GAy8vJt/Pk7tMrlqZPGKv+b+zu3Vww0JQlk0V4Ll0SlZYMZXns6Q8MLvG6xkePi3TP224z+gmo8/+j8/Zpv66bTU9NuG4bWbQCnLeZR0rvu0+YRiNx5gvWGwUaLo4P9cEBV3GH+wguFqIT/WcNUKhgrBg2It8zmXPDxSNMiKZ8YTG46P9L3TxHSd8GjR3Ke8g/cPASS7a0REjxt17tIFDwNSK776rZFjC/iH5XY+ASycQZRlHLRK/8/CS5wfbNeX9QARhaPs5cRQw0PVztJ87m5+GpuHGQseWz9wWWGKkMzmSsn6wjqnJ57zl14Omo7KGFWWyu1s9RagQY+71hvolqrqtAoJPVmbkSl0JKT7OA067H5NYUiOXwTh6uLEqmAM7FbGDdV2dkEFLVPN1P2U3GWH/ogFCofg5YFtD7uMTlIsGroG8GV3DlqDUSpSvv2F5bwucGP2eHVtDrYEaBl1rLn08xCGgIfST77vXaRuxqybZrDhSD+bO4LRhE/sALIBXSknWPVHbO08H86f6T8lXUErqEgOk1K7uKJplc1+J4FbSUaAASTr9zkvj6uQtBU2I5OpDQuiSmAcIrma6CK+yIdQYNVBefGfazCwLzBFVxNdDi1qjuBPdjm8EbO2xo3SPony6ql8UQtuBYHh9AgrZqBUngnqRMf9T4SXXVIcvGE8JpYdLPqqzaKfKSpXr5YfghxZCinN3Bl0O7NP+jwOPsk6hsjpa1xRdCOa9G8TKK3qjfNfTPrZ5vIxDsg3RbCox114ZoE6POEFgJtL5Zcatzh+hghshOL8VUTTypY/Uqq4aR9cQs2b2IrFcjrJ2mcI43G6f8UWmgPt6ygUbxF+R/F684pBHHVj8zgpr7S2L51LhnFWbtmaAkOgEiLgz/UhbhNc8ayi6hvHJR6Nl+Gx4P7lgPJw++9RzQQKlVzgDFSdFqGqe2uM8VPJy4ri4YZxmwOY62nYksmr5+P4sKlvVDwsPx/q/pviB8oVq5LofC/MaThjJFIFAwTklkJ1LwolllwRmnUDHOLeCTZJiLEt23lmltzLAXIvnw35hawZXxhVF4tVaNXL51UA5JX+LEr0P8Aez+3H4es8Jt3h8Y7YFLiAy0NWwb+HG6r6a7ETtPOR7YkIkBNYN6Mg4gHK7opwUPP/tkKH/lMHBlx/ynSvyAJzEfShHsEsjy0TkIPd8oPzjF7EyliszTl8hTXDamh+Gav0ykq+XUG7c3t1HoUtq8gPTuEMp9BoFml9jk0Otcu27SIAxSKtY8EjfHzbIcjpq7HdtuEPglPKVEHAG/DSvNg8tUGh1JeujrFv5OFpRrx5tt0i3Pia4xZb+5iFyFsUSUfj/P9Aob+tFw4LbHkxVFnUlP4YIHcFU+46WHpY0g2PIkTIqIbGnyImDuo0RvrDAO9g7lRtnXRQJqjNpFGMF7JG0NuZzcwvDz2ekwEvUnaNPNsFHlL1u5NtoMe7x373yQQfeuuJF2QOkMVOBv5Fr08RjMxO/cquJcE/ku4H0YaMk0nbkT1hdXNxuQ+f0wV53n1cmVsVR3hzqTdrF61MlWMBAHzBagsNVbxz7nd8hdi9eiwKtPQ6bWA8FRCOGvX+tJduAn3EtRSewv1mHJP4DY7dLWUADgyfops3i3vYzXcelGqF6llwgRbeml0w6uIxkoXchlw6NRmDZKStoZR84eaW0xvi4PMyM/7GeTAiD7Jz5JO1tlYH1GpqZ5wZO6VS/1FHHu0i2vBulXu5dOchCVXQJfbNF+KBUa4yi+TeTWJjbI82oNWQO6c6I7WznoMQ7InpuuB3ywUS19nmmULWzVV22E/0sZOshfBcMMVQoC4dhu+Q56XkswvRa/N6CWMOxB9AtZFngDILWtmVGi1jqnEDHuSdJ7Cs3EwXPMfT+daeRQoDgItBPuew5AdQyyJnuw76h6Ch/rk9+XY0VkKueLZ16aipT0QrYOciiDhplgbn4EZw4LYZ/x80GFVz9Flq9GkNxCk827mLCcn46v8G4LIx8Ywwa7dTRSFjOObkCP4gn39q+34Yiat7mMJDcvPErMrkpGT+Vy01Ay7GZkzGGLWtgMrvkqBC1WSWwajXNbm7OSfz0wK9D/8chq0ay36ExNifCW2f35Qbe3nRe5qHoJ32FWwjJoZCyZadqAKFSvVHacx49LuEhdFvSyv+nsb7S7lprAbDkTPnZJkg5hjaLlS0R+KWrIUi4LL4kf9KuLwgTqEclcDp7XCN8aeDphy1FxANLRG90wYLQvPkwMRL5/2yJRRFrPeFvq/YXcH4/Tj1j+0Ye2zRgpCFSoJ1fvzUIvfIW7NuZeTMGqBAa05DMz7m4UEr6n7OC0pchtvH/viXt6EOV7FGYJwD6+VPzoxYY9K1Rbc1u2Ns5UTGVbz8RKBs3sKNwSNLvgduzEWLQPH3BP/Y+IrWQN369nBM68NLUVvXXwwcKc+TuirZu9kkVp9toPCNr5hziyXxEMKt2Ap9p8Z2abjT6Kw6wrL9uv2kPU1A1lIlWApHpnRSLnjWqgDwcvPO1lQ+9AHDM1PzhsIsqNNYfsGMiNtG5bC4571xJhSKYyRtaYMA9mnbPGKJuv66+pXK83qD6AvAgLWyhKCmNnvZL6a4wgyEWM885jfg5ICzmHwriC0KSAtqJN8bTZlh/ncOLRKHdZ+336lyGzpj10/t8z2hKmYErUO1uz6ttr/fwmUCkJeWhDRe5nilZQTSFxcGjtW0PFkyjUGRhb96njjh9/BGOHQ7T8hc5rRgr1kzAwth6qlrvVNrtydfxPMyciOWvA+YbkYwiZwNScQc+xxpV3BubDjFADCLT2pul2Oi7e+HibhVP1dv6KAXLAA8FeUUoJk22//Gx/an/DJdj+XEhNf1Y6bAoRaXYDKoRS1+DQa7sHo0K60dtHLCUeIHzViEaiq8VX/kwUdNQyc9jQ2oOrzxPQByZ3xjICTTIac9r463iIZi8Tp4Q3MWDNLRfBXmGUMG69iDYZhB77JtfYH8za86oNnJFApmaZ2dkrsqRiPRE8xUtEtGxFUsKPRCO8JZe5HYK2geRxeN1y3O7yqg//jHHo2ycP7VSeqbMxJG6J2QjGaczbK3rSQEXVNurX3qgm+IPkpBh4Sso6DWtlaCDTGd5T125tPgYHb3XwtuLwrIT2HdrL1yOGWbto6qdmpDRMmzhpUahr6rr9/W6PELySW/lxtgqp9JgbJwEXiPKGTtO2Px0yoZb0GF4R93XZQXNWeoqjmltZ+1Q0pDCS19SLkP5T69a38z2FqTOXZVsfhefKgsmGG7uAyhDdQ9vt8pIuzcxtk+rg+vYKu63xhrzV2Ein52BcekqNDtLSGpMm+eVuGnwIE+3DdWSOOZ22qPM+d/ihnHtiJWghPnrZlidxDbZ+qeYrX7FClUwMcl1WJ2PNva5QP/I9O9i/+3/ifRxw+de4w8zt6ReGP5RLrMTlB7KJUjbdy+c0Qj60/IpiXqIKpaTUJ55oe8EXyaq27HCt7vDri4hW+YSVjEe0r4v55wWSLGYw2qqjFFLOMr3/UoZiUFM1vucvQtr+0n5vyJcODKpadTEb+w/IhRRG0bjPV3J/Z2cFKaIPWXPJ0GGyHS6X3dYGxraGOL7OSP6wRdsn6xJGSpCKRiUJsM5oTaXXygfZJBGpYtIPA/4lk7/3zT5HIUGTP833BRAT1yR9Pt/XqP0DmXjiO9/LJc9zNQRfxUYoCrsjHTRD2kingBDurXlkP3cdlsiMyQq5JJMmxu8e3ff0be/YvIyUL1uCTIXcyCtGTIH9cKxp9CvAvKgqOYv++CP1qjGzni8sQiAb+NlbjTgHOCCAg3ZkxjxasTKS1uGxIARSKOTXqeJhDWLY/Xt4YIjlP6fo15RVJ1lOEugq3GFcSBghUwEY3hX819ZYqu3Un5MLLkegK3bXQj0+9I9SZBfuUlCsjFvqMuIA3Bu5qypu61H8i4JaEmgGKknZoHI5XJ+8qIbM/rvIiU1c2ZNKMt5HOL4xFL+UA1vrBCQ2VCvgnzp/KssJl1lrJZzLvnLJAPRo4tDmV9aaoie2PJgQkR3uve1cQ9SLGP1xHw1djtQrcSy66Yl7eSNN/Xldo8NCGzkQTU9jt0JbA7xFBTWLqUmfj0uaLiAQXdLGF1gN54sUkd4+BqDMGctLtsFpqPcx5TJi+iDaY1WxyE7JLpa/KY070QhvNSCrnsmoL/O2aNChoy974XqlBf1SXXZoI2rAad0QVWORHaVxm1Eg1UkMiDUUt6BNsYeMq8dHrytADrKaFwfGcpKJIFLq3ggzGBdmuSue24lpTlge744QsLin9ajrR8iyrr08J337sTUOkze3qgAH2ttYx9lPbF6ANBUEfmomo3+42gWAlmhWkebU4BIB5dIFBxmLB7SQgw9sW4Qzi8QqecWIGJGgL3fs6AusztIYF+/f3eN9SFuQoNcG1drm9lSsc6c7bpETFIg4qExaFJV6sqldKjT5TqDDsD67FJSBbDbRE9p069AJOHoTrHvCNDaIQpD6drfGjokG0xO1xuu4SWPcqlSAbzFfQbMtAS5iFp96rQKRdZQD2SiGZ9DNYxSW5/9G7uUDwbCl03ppdn//FU6qjyab773gUZkVCk7BIsR87+ZKVsmIKskEy0FWv4xI/FwvlJyBQf70YnLASzrC+fgY7yLjUtuduxW62bnGw7JnOjALvrW5jkeNre1ChI3EEfThYE25e7UNLiW0ZoQnktBtFaZ+ttgnL1sAsoLPB/p27Y4Qs7Tq6BR81hY0z77gu1HMt9TR48BysNwzkYeuVXSfhEpqaGpZd8E2k6T/tOE3GEHTYlv60L0q0nVMxxMS8dl2sFXAQbZaurnBkeI3Myf15P51Uu76RwzufV4rlCimI10hs2QvhBBflFupXRZjdiLlvaKipl/BsNFSEQuCSyxf9orD/OZ8yvDhlVkNmIdhynh2X4IUR3NC3LMTCpPIi+9iB0KNcrPJTstbnSYTUOP8KrvzTNCCJ8tFyPk7W/7slThb3LDw1CZXAOZMB26zxPwhjNI4VBFe1X4cngOgfNwdAcGIEzG/m8JbxfVJ14C8jLOGMxPFv1Q3tORklK+FA5AqWEdmVEazJO1z+OiYxV20sFY9/IIW8NmCMOarPhzM2KDCfP+q0SxL2+XDqDN5k54HYV4sdGAIvk1hFjm5mXiZjOc5GPQk/aUhDSbELQLxFJScID0jTJMe9ZD6rvdi4ptMKAea9JT7zNSxuKBZ8oVszoc+UlIfHHvkWGiWIGq5sbIxF9n8jCaU+v+ExdNlDFrg3R5MD4Qs0Y4ZXmQfUGsTLhGbExDixtK3QdKlHB+ZAhDt9Iuk+LDMfzGYeZWjNKqMr0P47rh83UisQbcK6bO+vZVzsVjEaMsVPjizyjhozAi2dTuSdT71HagxiiQSQNp1hIWqYHZAEN4rg8k3CzATsJZZT+L7V+p/ffk+S3d93V5JAbNUdyzkDbNILdLwRmZm7IciyCQmhjItTTEbaSVk0WWpsOHKyNNkxfF9U2AiOz0d0mZKqpyQxAs423sFYX53lkzM3l/fVte6AReOBU7r6c0Y0E5Ph2hgG4A5cXjT3/wFVT1KFm1reEL1nfc7iDvI7H+rD2S4TqN1typAR809j+kkrqwGtAeFt9ccqopVRQRVyB+Sh0LlZ9UvLT+lk1z0C/iuKeLYkOrWyImwqzsoWVB11Kbu6AUcYre4/BTWWknF5gtefJIjQH2XzlGsbp+zbxtgHXKyhwSQPV9PcA+SC3rxR2kjOrhjjOEhI+guovEcvG42lxWEpwjfk/ZXZTrUxfUu3Cg7cFt8t80xrqP+y+bAYl+34v2Fy4Y1yQhBly5v0K55bjO/LPEFxrkH2ucLBkcpzh8ypbGA1vFeE/IvA+BscPLCNZIPohRoNVVBRcPEKhbP2VEiOWgU843xr+yvk57WBwW5Y2V9OYg1ti7JD38OXCk0DHIzQkHQ5hFXp+Tp+hUEewtuJjMNJ840Q2DAU4PYcyZI8KmxZRCmYHvXD8Mt4xuph7dBOeoFmcMpWsv8QSSaGNHx6MHLaDLW7mpAUsEnnlLpPrx5PvIrP2xiTHF39y43qReH9e8OuTXgZTUPpRwZElNIDhqIUFCx9BD7mg5AhyRhxwhnnXyfv+H7lb8nqy/kar0Wk+cznMXlgaxl2ttZ34qGEIEcKqprjHVGsmkmsHWJ4wwC//8a9Q1ASoSnRGPvblqhu8HqNI/t1JclV7GvPdSbmjZD2mOH17HlYpPwHVA8+ACxnl0LXgDU8uKDDy5yut3BxEyjzSgMk9mxx7Sum63e1ZXmo8DbYhaS7Tz0MVmLN+hxSyET9YEJOxft1tiyt+SbxxCPqiCU+CvDURZeYYynGRW+2mrbfus10IueJn3ypH7K3MuCo7Ptfdxt2OZmXWeZ5m7RrJsrkoSoq3ioTwdB6wHYovNJ84RRyCX6v/44yx/MIDacT/ynEoyFJ/BQixDclVKooHHvZGUOnrsREo0Mx9XWvt+ECCfj3aOAF96gbo1lJSfi4mmBfEBB4uaDNeYdRH2XssmkahRQtrSSquEw2n8lsUFi1dnQUtPG0Z96hkS08Ejckh3DbDmJ5n2kWuKqQ8AZfedPGzkNw46f0DCIoDmRQ6B1U3rxQeGRZnIfjaYthN1JlsDy1+o7qNZhkfTUoIX5da7Oty+rRPMN8OZrdw/RJhCL9n3cxjAfVVd/xJykarrpjzK87iLn9bxsMne/LR7f9qBfMBKQp9lUtpmMfHgZNc0jE/8FnzdkHilzpOQhKCZakRtx32g7ULO9Ssry/2dwaVhFoB4xS1BWttWq8ft3B0YuAYRPVCv++3a2TP3OcHZCZJDGapUwwBOdswzMqmK8glZ8BR6m1qcE72kJyrK6NpUVqNhai4osgjzXSHmSV38H9DDxMh+f9l18DhSESiLa3bJYzn0rVi3jkTsPuCumXV4+kdf9YYRyK9V5TKwd3iv0akTAWnR4sqla6cDI5Zk0TqaJhQSYrBZNGFF6HPQaqPcahJB3VILSSod/dRWBJXH3huHbCU/puuQDPeSx+zvY8Y90djkWKHTojWYheeziBy/v5/f6M9y8jfqS1qERkKm2nu+r/ujAG7BgLXk+INEvhXC2LfqlS9wu7rHyGOk0aXlXNL7w9ANlDYC6Uc3yoWhMcASLteDfizChaDX7zDnCtiplK717eRHq3bgcQhJIqulGl/D/ajiieHAH6XaO/zarRGBKzUAosWx1Lp7X4X7BJnY41uLri66gjX7Atpu1kfp8plkGajNsQrFCI5rCepYfaMIpy+82+H+ICHxVaetVVVl2+9o1d01o6rtOpjKBaUgjXJfQJ5180UaP0Op8SMfKdkp1hUDVF90g3HWjqrgSZfHy1uTt9Rb6mXT3TSFLP602+I1jTQv+Sv5owD+8DmLP1vWNUcmgiB8ak/QA9JiHfvVOX+pdhCoYQcy9DjpyuLYDH7ZWHDiEgUvQE7Ftw6Rdmkh73p1kUkbGyGta59dMq2DXy2wnI4hjHxat6xtZ4kyITux25YiWKvEf2mK72HI0nTOdCLU3hROswkjXVpVfleSxmUcSQxOiPbjbD8VNiWCj1LM+fRJ+SxqF6hzWC4lJfYhCFB6uv31CsxrfkdcRT3zWUWVJjK1QAnFzrH3X42h5hjJlGSUZ7asDEGTvz4G+1wOfnZlfpVcWGx7FVt9TihEFEXN2YYr1vzUL5qQOUS428jdTc4rdt5hKJddRJVrLxC6tQwsfkjM+uV2jrPrWXeSF9h6l46aZLM9iRsIj2BHGui1OWQaALNUbYhKgZVIh+DchguZE+/S2+NblsHjHrxJ76iQMlg4r7YwBdIHAuTqhsxRptM6pAE/e6mW2eVV3J2VXxmq+OhvHIBpHnw31aTBpta8HvoNV/jWxYa7CQu76ScFc9RdKsvKHo4l512uIlMrLSli1TFtiajoxtXay1iYRuwS7jSz17kYeDq7b3o6ztc/5IM2feVV9tDBUAgUJzFT/sKushBXeUEHIWULGx4bG8C6liGUOXpKRxQTeR8SOmk3gb0SxcWjxRC8fID8hPHRCHEBfo+Zk563f9HxgIg5UvbItWcXXNQqXGLI6DStBm/Mjni/dCF1gQq/a7n7+psCgj4EnFMZXoFebCy3esSB00faD/vgpt8K2ekE3QY05YMcNJ3NXJ5cV1P19xU/zQqgPIc3Ge+dvitZQNPBsXBN9mtnOe4kvCDlMomY0iSCcHt4h0EllYwlAALaqUHNBkXLBTRwgrePQdY3J9QWn8d+ENGa69+aTOy96xhRAOVz8D/Woq7oGQGJZ8NGRNRJgEELNT9mc/E9obWlVb6T9boBCoywV5Pr9DHn0wKFxt9/Nawjg9wqp7AZbAMTMqDNSCajw0q9Cuw9pyA0tWLsypmm+BPGofm1cRB9u87nUDwNEDuOEePdwtFDOIzMYfAoxSV3M0RX1lJCpw9w9p4+cKuHZVSq8D9COZwFZMdlGoNYD3KS2r/O865rk9aXCLOf5iYl2oB+kMRbEFU0mL8pQmtOua0ekYWRwGW6wzvSnm4jt4XrczknhW9z+x36bKL34kcW/VwNthg4Y6tlthrvcOhGg1KVt7HuWA6A8J5T3z5SOkFYl5on8jYNS7wD+U73vBoAYwnL0exGohhQ4xCnexXTzmEpEDkBvvrLYTnIZ4QlJcE/txwYfKLpACQORwKkkLAoN5Gf3ZQcWMzXJ9gPwrf+avOonJaK92HaZ9QaHo6HFPjSw4BN9FgEChs9eGZ4ID0Q1NTK9c3sXhTgFKANUWkgt0bpReMQyozQPoFae3WiFu0hf1jgRe4MmLB2Z3rl4p2QuA9gC3va2ehSutTxWBQeLzAEIcHmXQUuMFlXgH45DhuCBoOHSolDVrh9Kqirvak3owoStugvWZeTFncHKfYIrdIK4anop9imFESPTTOP5ifIRUwP4ARZciqGOaG7P+nCElfW0O88rdvUPYH/VYVuFrp7HuvThPk+Lm1kVKd/tH1CNwL3WpYEgzWsZAqc4+dV1BNjkSdiamUVVW172oUOU0yLYlVcd9GQu6RmsP64hcJCYoEhE0qOSYA8oehogod4xsDrX98lc0I51GnTXcvz+/5p3U9TUtq0SJvHEi8579yei11Jg8031bWm61h7Z8rbc/C06EHxnWdcca7PEn1wm2AOfj7Sxysx7Qf3YnywXc5mnTZxGcIubUmVDylDOI+M4FWxjrVV3CYvX8SJveFxhs6yq1TAZXIJO1fHR5tix+hDQGusb84iD5ftrNvXLj2fnMNVdG2ZiuMJZ65NQN29AGbvPDnDfueGH2q8ClZWxZpmydn0T9wukx4cIEomo5zeCzW+bO6f1NXm82isOQCkPnqbjrJIUJ/o9S2kL3xeJokG2oKXgBUl38IIMJ3rRPTY+F6TNCi3tEIQKxAj1ccPD+p7Y9+UuCu1/zpI3m95eMryuBu4Yuhwe/Vkvm3EBbqpavBtHYGorBvB3D2JThRcCVBk085AVmSJSOAV1YBcpGDwpDw127dKuLC4LnVnT/VtodXnIVdS7+HvsdrFCvGcZ0dUkAVrFqLhOpMjbpJyG/z6pOPmBADDQLn3mT0hq3/FlV13kTtBRmgrSCHLnMOPBeEU5Soxrx+/ec3XUJ5t6leZfSHsiILTHy9htQP3tVhf+5zddi819a2/NwGA9uBhlWFB5evmVjG+MdN79YaBHlvEGGsP4cMe+xYVJhQ8yGuiQRxA51HPfN2yDiVcymWcbqdErsk7H7e4O49PIJgbWJs3M/gsEizB6rzbypVH7dfiX/EeyW4wtaXLmithip/jKB0dIzzydkftfvfs8M62JtnaIq41D9V5DD697qn4NQpveG/Abo0ZBbHyVImEkVCUsPBbk8yJg/W5NPvbv58kXpMYa7BbPSFKg4q7+ntBxLWkA7+ZxLwgYSG9jvKcQKSA1jrgw4GqFVc4GtnMNldbcOZftU9cZI6QDBPAeemOWRgiOJkVVzRRaPcVW9fBIJcplKvvYqX02davLbREWSEkzoZvR66UmPnSWvu3l7w1IkIHszHbqfTM22ibAWmoGuhz/Wc/xllVBel4+mA9wYunGRTwNUqf9zND2EyroQlB5xWufEsMXF60VPGy4NqwLgiOPvHsJ+Jq1Bkdr5WLunXc+OMqYZtwbuv5OCcYOIIJEdUVLA9bXIHQTg3lXSaWZhvGUN5vHI5eZPIHnMn4CJCCfV5URXHumynw5kr0xVsvj1RmF2Rx4ZgBqFMf35HM528yRFwFXBKHpkhzhVbAUkOrlyRrhHBpuL/rUnTZKDLZNk5HfYwqqWorLogUiySTQpTWYp+o3NGzmZyYmV8p21JtqZlvJAdl62QWe67NR5H48taOW2AllqezCGB7R4ZHIwX3QIEChTNWK1uddtwVkHUih28e1zLWlSge6XcakoRxzmuS46xf7/wwuc54fooYimq0YsexeT1oDHh3ZzfxzlM0LULHKD8QUIOo/Hp63ctUwBLXsFjYwmJiVjESgr89jWFi1OkgDCQ7sEYQRBOqyDGKW0OpfyGznR0s5i5OTArggOQ/6kIq3Hv9gkVpu8adMeb0Y7XyQUiKtreTDBYa8keT/MgNpncXu0TlJ7RaTF1Zv0ZnT2OUirgRnwcOIdI/v75l2+FtOUcJMJ9dQPSH4iypkfNItalePpDjzrBF4XXq00jmTFdezOI01rccWKnSSWi33N8yb6aQcecVJrKdl5Pwv7Olsch7HbjbhvnAtj2QWdM+4/lLXKDSUG3segfl3bt6EhsIpkw7h6AERywmqW1wuFAsqZoA5LC0ill2B1KWwU7ozBx4CHXAOiOMi0/6t97jfpbTVaWvY0jFKhVOGnRY6AdWO2Z6cQA/voIdbO4Ff//rBEx83obarVtnhfdvvqN8/2IcDmlyK1sWJTjZMgEqdUAe6ruT2mxSmcS+Hv47CnG83ky6mx5127PGdu+dhe8cwECnpTLW+p0qryjwZiA6fgIQUaRhvHj5aX4tzt+CU9qfrNPeLp7LgGS2BR3IUF6vJdLe5TRbNGSHNI2ArfglUMe9AOigzzNNTd6vd1ZfedTJeqP2SMW7ahGUYiLZA/9ExKuNDPvG8E9p4wWej2eA6rCC4vIcfjMmOBAT+ZZget7GaysHpzex0JXohvFZNa1XWDRwBNHaTEjEpETyHtrr6W4khr9pFAQyGnqiGsYEdM8VNPLfskvoJgL6jjgr8tHnk0NpL1boFG6vKaCeCKkN2GMYa5VZO9hN4EPgIS2uPMrrh7kk+o8fic6aOhWjFZ+5sF3VKlUzkHM3jGP4/35VyRxArwBRPrn5sg/SFPgefb20d8etPvZDAn96r8il5nxSOZGoJXNwSkGdKOEU3d+PujQ7Io+d1Lb2JrumaJBL+OVq7YMqOwqbssCrncewBZN9aTkvKUJmJw4Da5MHU+E6puV2yX2gOikhcgyTLFoGqb1fo6/p+v8C99Md1hmK6YmkgCn+2my4aFd8J5mA2dE0G/ZhyNpLYIF+3b4n/jnH/5NnfKCv2s4S0eq7y/qf7Zx4f/hrgrEAmeorfx6wgWY+2UPOxhmf4gcfYKu00QZDMP3cHx9qj/aa7/ISeveWhYtOvsER2n9KNIEUs8Rnh1AZeiVHy16TpZzyX7ichJpIAfphWM0qVvaSGcG8D4U+jdr3LGVZWjeTsX8iJQ6USuUtUnztJ7R3kO1Z9m3JkS/l8SbFevByxke76Es3qeF8OkdP8aPG4/bSQGjPoLFuVyn4HeqgrvlGt3izj6rFeuj0Hkr1MtI9BGihub90F9z6fHSqPmUIfiAgtw+UPb9J8jjVfT54+YGuG9oni7VJ1axm+pQYMfbHWsxmjOoJXlQx4VFjUu6jJd0Ge+NsZHGM8fWv2YowGoOPmcgizqb95u0QWOtW4NaZvAbFZWxEmdoW/ovoBqnT3IONqc/wkJA0EI6iMrHzvDAErL9xOJpaNpB96eyxyuapeZkKrQ6Jsma9wb/inDERcNK0HJH853HKnyrcIahk44HJ9qSxqKBHf/UO05Sr6BunRvEe8BvoKvk7pdz2KslcyDdR03KN1cUkML560DeoT+y4pDr/oN+ZXCiz0ir1C9BEmX6ObY1hetHZmOGhwVYm2chgHk1ebEpX2bldvA+3m4FyKW/nr6ES/TAUs3pcZMvX9y7xOjpHh+rFYw6TzgsbOJVG2qIj/I9A1wJTKWZHJydlOgegWH5OM6nC7JpdjnJrJwAVHEHWqhOPhbvbCxQjqszgP7Am7fjfiooLJ4fxVG22M0kndUvun7SnGwudorpkgTpnrvFYap4uYlDe9Hb4TOSoFMcsguEHdWDJQ6PIsWCQjwM0BDzUXlUpurY1raHo8qhpEIAn0fmYOz2rTt+C+8s7Jy/deq2oCgzmEVHAQZ3oRC0f5BtNbIss6qc852tCfpBv10v88gocbwAq6gweOR9Ez2wnwTlkJaijdJmKOSV39fd72yUKk5ik1UMBjDdm9/hrFvyUXpOrEkNmYsz8hwVbDDFPx0MiVeNjyNeC1zQi/y418zFA0f6hi4TvbcQs7In3wkzEqszBdDrp2SiyU4KEP5y6ZzXyFK7IC7T8Em3ozBIvmyMeiGvKFUegf0MZr6vGhESMNPeBpUbNjUW+KVN8dlMo+gbJrYCuDJSOgw06mNKc9N6GKIQeb3RXtmaX5MyTfd7YouNT+RwMh5Yl+KOqyadKD3QA/vhxESkT0iDx3wSBb5/e4seEIXJFXTBvSVpUetvWtW0qmgbLkRFS2tPYGrdXbk6dD82392FedxBh4Dsxkc61Z7PIwqe9TLZqccLDAOtHGGxVKSR1cSFHUFZcWesiOP+oG8m9b4CgpMl4VwKTHgOnsK8qSrYK1iYQhjLVbMNmdIq3egRw59YEduVjNRGZD8FECUk/RdvkvfXA6T0ruYlMJwIYjocY6uH2FKF0F2dCGNyI/Tli9aY+CW2qwt12vjEKHKdr/5WV0mmzbWbJRdd0u62Hcu+rNvifaa/JdTGS4mtI7YQMUC/EbmmQ5ox69vwsilyXksyAETPVkaK71Kvhe3YqKGhYApcRi/in2pKh/jFQkLpiCzeHFkiyEauC77FO8T8mrTRNpUc1vgfjM8l/89i7HhvEW44D3S2cpPrjt7gxdI+VOtPvdWVbKANw6MgzhmCp/Uc4AMZqH/eTwataMrqhpnSN+wK+7F/UhdryU5XfymTiE95e9e4NOsJLu3TAHMLBCHt0hmejPnHFneFyjrtpcpY4W3xFppN6NovDoLbbjMyJHImvKd+Rqd2jV3OK0LB/lam5GctMyoT+yjFffVYF+3NPZ0dp4BtUDxbWTKUyEtIJnuWeFR9Q8xd584O+CFO5P8i3xCZrPj26K4++b/is8qbrVFwYZROYszwtYx8p9R0BuHhySB0tR3uIarCv3d6CaSQd94S3JZ1RA39QigTHOf+W8sqtfRrXv5cIdiqbqFdAFdE5hgDhbElVaH1oDkp/CYgFObFhu+ArOKEDPXii2ABHlVHylL4NiuvFMdrGqADSleebBm3qxTImwGOC1Hw7Eder4tLk2NWGCay4GQkWrbhJDIO+2L+pExCC+pm5v0g28Sxo/WqXCXFYT65MW0jpw1va4AI2dT5PYjAenrkSmaxLtc0U86Bm4E02xZWk7bxzAQyLV4VktD5J6Ox5cxarDlbxy1RDpIKleYAgA6/OU+PRNUuM8qfO0RAJhwLxN+sBOnJmlSrZrE0yBizFc/HBJ+PGo4FeTSorNa4fBaMig8iaAo003CCO5/mzcTfVGl/Z/gvbZ+Q4AU2SyZT7+eOZreKLS8/CFHpmh/ZV8ALxDUVCoDK6ICuslTBvS1+4MMvyLzMxe1nzl0r/vREAi/Ad92AKDhC+Hopgh1X1Qjxz13FtDvLY1R4yPVjSnMS75IK2JPpTC4i4p8ejYQSMRcD1wRTlLcmA6mU8GD6ARtbVQ4wYcDfZFwNajIncmkWMIXJ4itivdYfuVcVsJ8TRVQOU4ip74DuH/buJsO4vL/chkRezxZqmEG84pBXA3z+Efwdph8jGCxTGOJTIN0Y+es158ch97vTmRTMPiYs2u2N3sejWckvYDasoFAKjCo8q0sr+Te2xXMSTRHohO6YcqqUs+IhXH22NMabRPeZrRGiXhfWprHger58srwIZPLABnC+fStmTMko1Hz30bPaU+VngcZ5+T/qFZPr/UxOwB1RpnB7INtm5z2j+Qwanjb9fSwAna7qOp44bSymBkKUtAIgvfz4sKr3eh2WYK8m7E1cazXEVb5DTUOsjT7qjVwVgSATR4oreKoyIozGoreZwHdizStIQSDcK8+2hcn97dVIDiFYXA6b+scR8YyStxWYZFucgVetEGnZtBupmUeDiZlAEhBUkz5eYmscFssLnD92R5aOjn+ksEKaUb5j65sLT7cFjdtvQwygZzo40mRyIayIbRF9Lyltrf4o/Ox6gzHQx8S9uirNMUNH3NjRTtGBZL++HGFluSVQ4WTZv8drflE1ytho8BCZuQLy8WCybDkjPt88wU+0UwVFHjhSgdISgH26HbXKx0/CgvhZ9m1CCSqezQWT2nNUE9Kxo/h87bsdtQngmxG5Pyx90HCMNjGvKLb2muHAMqqr2yEgGTHD2O4HBcwIsZoNcXGyOj/rojMKwBkuOvA3k2O4LO8LAmvTA/YA2PW6F2SHbD2CHSwrNQRD7xpA8kV6Lc5sbvzIPq936e94CAxOqS3VwEOuUx3pojcOF0ffT/NLvYTy9unLzORCL7pUrLBYnr28YBjtWk4Fwj18zDN+qCYv++Y7Nco0hOkc05XyHABXPS/MXjLxICXqnC8IvT3IsAVw8tDMob0kGcE9ZG2M6yBLBxk8W0zL3aO8kYuN499/CkAjKDkUmCpbh1L3edDcZhHC4xAqEtJM4sYeo6QkH0O2Pmpre5GKXQhqSy/z8Z107Oh/nfDv7x33T2FBvtNbb5EvfgUx6oqF0IliOHb4TLJtDJkrPmmh16Bszk4Ih4Wgt374Jqn4Fv8tLln6Sz9xlEa3RVIVP6XLjysTAyBpUtSwz3eoXr2G1X/7E6DdIb82ClWKP47AnzdJP7gF39fEbIJWcIonSKgsz+MO96WrtudnJ/Ob5xJ73V0UTr0motLLpCZB3/ZZ+o2bDYZRZ/mYiemYs4m8cFBxC3r4YLw8HjGlTFcADtuEEzVREtd25l7o+9YyubQMK92D8UX3C6cbZ6joQwYhX9eAR9fMiTgO1BNE8AF2GHfmV8HHMEUWQqDSk0TJr6swcQnSeI3DbYosQ4dQMJHz18lwUP8FaPkdGAnTWnxkJA8WwS3jbWwPOx9lBZY/VC4v3OIaiyLfkbt1e22MqOaX0Th4roeKHzLHFTXLlU9I+qoVchIipUabN2ZsUxRbXkz9WdgHyL6zWkuwmB4OyfbSAWcpA2iagRySo0ggBZqV9VgDKxPxwQUMjWqCNcG7rwKiMND025OndV1/iCQtaWk2hGQUP94tsGrDB9e7pc/kQpAwFD/V8mSRd1GH24BpAEK7NU2XK7EeArLWeFkGQfOjGt4GfDdCGyh3PT66Bp1Y6C6W1Jwf9HSVDWMu49LWnww4OE2upkoLYkNIjuOOO2sMFkUqu/qtokqSbienq97vtDErlV/JmSeI7mOv+v6uWXY3aBxPgBvWjT1d67iC1OeWlo/R3nf7zJii531qy3CULG0NfwinYsLwuJH809Ytz4yUXi5p6kFymU0YKObRC0LISf/mIqsKdONYrf6LH5POqGqMLp6G+dOE0bYt/44E4fGl1uMcT86mnjkktHgP07/D2KfwLYv2wHDM6Mx+kY/Qfsw5OWSRkULjno4r0h+juxqLD+thR51Q9m8FTpxOTXt/+5i0TJzhhwpuroCTXCodhS8gjAIHYqBs2ddQYSNfah5O76LRw1RdnAhEnimDwVoSdSm2Nf/0KIEnjUcGKNFQrGhBCJ3d1OQ+ol/fKUJtbP8X6+IoFoWYyodtRteS7PZ2cadH6Lc2jtIQDB5SxCZ+e2iwaNVE5gae3s/NKGp8kBHUPSBRXeA/izVuubBWiWuBlkqpf9aRpFvebsiicMQlKqHV3Aybzovx/5CdxFuZmymy3heexXtX7UXdmmf3nK/hDC9v3dgqUnfcZ2kAiRZY0TUraZonP9iOELaLfc2xSzA4L6X9Ln7KD7OWuGRXxIxL+hx0qafpaON1ZD+KxEgXynQQT1UIXGAhZAOKdIivyPzMqVM2+X9IExATPVMepqfiIYHnLVADGOFAeX9hckXINrXPyfMGtpQMPW3Q+nQBzhN5F6zZtluvviJrwt4nqIygBqx3Tg/SRg8SaVws2M+tPShGeDOm4+L+9LreZmfL2izDjFCzx05hlugKjTcQB3pZmbWM2QoEzS/jrQo4YOtSfhcD2kfxn6ylUlu8NaCCoO5LWammbpllyuGJ5Dq7AmmrKhmnO1Bj0IpOLOdi2fJEWcGiUAPuxw/m1aB+t1rEPjIgaM4blxNm8WIv0Rhh2rfF7Vu+rb/Axeb5FbzuU3Pk/jNe+me3dutU6L5qD9rgHDG1tVaEkd2K39JDPfvuxUDaJVUETnoraI+0NF2uAMmZL/O9kzPf9oGgCgvZE9G1NzHufA8DeH++W00lC7COP0un2RNwjJ3e9p4pju9IRF2eh4ZyAXBgAZencD624XkIl6pjBVJ8uyvAZc6QCxD5ITutFXi4m94JtQieZRHoDlKpDUxVs+kbRqYYKU1yUz1DvWJS4+DfKYFaSNFKz11QEt7hLMMCFK/dkkOj4MIjq9sYuFYw2w10G8p13LX4EzyvESrCBt+UL7MjvzYAXlEUj7gkRRJpcZLcCnUN5KKJ6fWt/7cSGtBFYSmULh/3M2rIBIPx9ObKdvDQYrJEb+zeFXeKJMNo30aHFCoTyRJ2cHVJW9MID+ho9wZZwjHJfIS9hWyfGJ5+NQjgmN370IS4UbNA4t0udYPZHeH7MFQAnFLzXMPtZVYlQPgX2XKBliK+oJcUsoSVN58pY8jhuWig1lhY/AAiWhMXGMdnpe9gcs3Y8lQsqSW5vs+tdN1IvUUQpow5q4koeRdUdB2Z1pDytcmWoBalKmB3aqATif4/dnQhGjP4sU3LuqPthKcLJMpC2ibHaaJI+8sc882puLsCdR/QT4mjSkC5cbnLPprdu7CrBBNh5AAtgS7e1HoG+fY7AOwjNWKn7BTG4e8naU/N9Q4KBhGOZTA0mvw4hAfPsgD0ejFmGbMxb0NM+IMh+p0PZxvP/EGhVmxB5g50SnxLrHkForDX0o/6HPpbIvhmtf4npIPYLXOgD84rpL45DzXh5gPRODMRUgJa4kJlqG2EZqpMCQfNmd7lHc66n27tHHQ0XCa5wlaG74GqlotbNGyC38/fTYLdKrEO0UNCEdoqDP+ogCEFxGWH4HlRCFYAegpx008hFHcY4c//z0CD2xOL4fdi0ElYnbWGMPqH8Cv3morOGmrxVgMCnahvwIEAAAbvKGUVGvbyCIA6+WLdZdoc9Cm2hR4AOR4IF8GpgZovvg04Y4YJSGee+bv8XaLSkD6bIVAal6/YOqYKkVQV26XF503jvV4Z2A/xsk/0U/BFAJrrVD3SvDs1dPe4R/9ZGdPhq38g6mt7YV76KiLKvfx77JpQGhcRRWUWXPWP3zWh7OVzHdWkty7MTY9j8K61gNlXr2rWt2dzpLixnuc0fZkB6IagTpRn6+/QN9ehVXkwJgJXJbTPkU91lI5ILOrhUysTgGyF0kDENcXxtIr9F97aGezL9wLJEM+bz0H6T7xzmbd9Hi4f/TC/3yhx2fTNmYJeecbEm8biet+st9N22iSUXwA3GYn1JC64nMsPQPD/qbg6N30x9cFSqX/y3qj/rcyV9xPsrpbcb4xJLk4LgIzyOWeA1NnUrgQvY4fsK9kYZFjhJX4Gu8vRBH2DWIhW/HjAk+i9REVuz+L01clKkpzd1OQA2lSH2GofGHIClIIXgD/5ChTLeomf6xNfNL/RWhMpu+Q+sLoAwaAR9sBTyJrmjKc4a2MQNFvrv2psrxatEGo47V4c2E5cy7ze1WOr5PJvd29y6qmnOiZZ14DzFZLzfb/ZXtVnYrT58g5z6DUQ8N3brC6CJ4K9NeqeF6ygqmHFtqUBLtFUioPxugrFah6/eyr0rqS01mDu/t4xEdB3KG2ZjEf4bgsQ6SqwDi+hjyUKc+fMAmUtw+ZAPcifAQESfe0fanVXkymrX8BbKCjgYhQ61B+ym5e9ZVdvhhrHzq9FoE/mcSfR2cFMpDdTYiizJeyrOkW4GvGmogI3IuATVNnbpOScRWMLf0G1VoeKRpVI66ZRGHtpt1o2nrNeKH4apSXq8r7/BWBoJjgqAZxdnCILF3YGKVFJgPTWmbVgGZ+hMeAwNIgA0423SqKEdQ+9ijurVc6kGnD57oqHvPVvq5G8ngNpisVwtRienwd4nzMsRQ9TlsizKb/g2+8MsOL40nTIhlE3US9aFetZM5IH7xeCNTmhgtwQ4AEzX+UhaXvwzxEPxryuNqcunNZd7Cq+9yMlyncVq0Z5ROPb6rFotHPt8fCz6IzRbwqpZLZgIUzW5iolxrw4ZZx0cQmYvp+yMvyEM3JF2a16m2Q0IEAnHvwJhtS8q3eALKHUxL1S6dY6a8aYyqkPRH8WaTIHCNHLElZI+7sQc+W/ZQrXHsnY3xGKRcks0QVAfMxvL0mdsLl9zj98Z5Wri4L2s/B4xiEumqxQ7/UNI4r+sujJ9VZe4wNEvnPeWD4S5q8cpqQQblvHkxXfbeQV/N8yUuPKYAcSAOoF2JxqT3iYz6m/iTwFp6wWo6u+EYIEdv+qxujPEIqDHkg9A7c26ayYYsOh+XsNr8/CpInnWgGIsmXv32MnFFW2eJOintGU8QBJa3juSZ7WZvmKam9e3Pd1yBIkA8Ny/NjY0MJzA5u6z8U4v6cxV4s7meF3rxXjR78vt7Gx0Z2hcDewiwp43BiER7finUWawGwW6gADy9K74WXV+9XYSTQWc/JOvxfRh0GtaFeS9sPazqxH3kdU2UOmxFhBKa7+QOxP9abi5J+MeedaAv8YKPWySYTdRpCwoN2AKH1F5TMO7titkZKgJ+fRIPolKLD0nHjsr8KlNwbW+EwwUCBdJTWwEo8dC0LJ+NPSacST1jMIjenoJdyfBHlDtqOK7Hadaf1Tv9+mwcYZQyddWu+cdk/tZru5G5PIq73DM6IzTELTs9YrMGp4mwOnDNFHVNapgg59JcKiAuVu02PyO9an4JtCPpKx8qkFKHdN+1eMnrkhpVIYGfK/wnvD7ekEdcCfBMLo+xCcY4Vh5CawOtVuQjMu+K+4zaX8TjF5/Sz/umVPXJZ12mHItTOUld2pT72MuZMTArup+1bV5JYPxHtz6n7w+EBBa4khiN5lTikSfjbZhKXI03BC71cawlBTahWm9ZBufeu37t5yT+r9mia52CMKWljxvSQSUcLwmxXWlf7AN7ahjvqKuAyS+L2LwJ2Rm0hXAAOG/JlCS/iSNxkiUx7zmVypN1uFZBF5AL7NKxQleuzGbgdnBoQtAZkF9VgIhMszr4Bivw7qCjx2wATdTAFVpNSHc5djFdqqEwK8CElGftR3YYpKZpuBTox+nRpKCsk4+Yu2kZcMiI8pCgRULT6fZ/Z+bs0GopQlMCkiTsYwwXKTC9f6PoAJ4eOm8i1sMFyynTm8CvZniPJd///vsqnQGC7gKvGTkqZR9LHZ+jBSDQTdmLvxvjPkf2H5gUTbeyM1YfLqwhhH8ERBCHlz244jh5G81+FbGuCWG4OQtUKfWJJ1yqROf6vDMAx/csP5aIszzbO+BPEhStriIm/cEkJsLqvWqGAGSmY0iXcQMawpmJJBCftTlS0BW6fewFKlG/RWx/a+XXvF/i8g0XNV3aNd6Zl+KIZoxbrXtbTtzGV3vlP2OMuTJIk1ECkAiRg6Hp5wrePDuDbkumkRQl9zBZ+9if9WnsR4OkGqmOrmmae0zkGt76D5y4nkiLETgDKdSkyxNrO+MaUVfK8Uz5IkmLtuvjPeEG+I4cY9dCeTWAbd3ygMB1V+TPcQWfjd6KQJgQRnCbYc3bU6mJvYkngjwidElM1Ag+0U74ryF+qz2PzDfSVyDRAiPQfGtU+lZYHW0KW1tMSMFXMB2uIxhfnyApPuBFDWo3B6LvmoIpWhMWCt2xzH+/kXDL4aRR8zzjGPLgV9Ly6PgexlAbijqDGdIuWNxhV8Xdk6zzqSIxGe/4crraQ0lUVrYb3ShY03OYM41WTwtpD0hoPgqepR6TeE3L4A9cpJmPj6tKx1n7vjcfBODT2p+1yOm8Ps38ST0itkGF2AGZwfDDieKfQspsPZsbDoqVGoQRKolwx9bED5fmiGt5ooAC1FeMJnBDr3rtXhks+yGzJZmwkKxSZ5CumvOJnC8HZo9NcQQg6McWiCj60rPK6sTMxj2ziJ3kM2IvNe4+IBna5RR8GGd2EaU3b3wgRPpzVvNC/wcFcEuwqT8KXGI5sDKpXXsoyPaiC4aUBQTUSo/NReZA8Ob0DrQEbFQiJoF0inZ2cDsxULvVMQuaVRq3J1O7vXgXLGxCAm2mCZoE+MjFQuXewxHGuR3vZc0QfKBKv7FxUEq7V3+ur5uWHZ7Yrv/sjUj3gEJNr9rq7J0rxVpwsHJzAIvhVgPZLslextAulfWVLXYpwDJ4cdSLLzpIuTgmVvNCpbztQkdhqbpGDwZZLwX7l36gCaKsxIByu6UoW1nmvQuiH3F7vsUp6cavBVD7Hp/Hzg70Vo8faDyHyL8Q48C4pvQNM7ZE4zyQL52HIw98Y33YmFUISTncLE7EJXMnOSFDb1902vCvp0DVu01LOqWL/Z7EjLuJ434f/LizhpugY0V1hIwLTvGuJWUyHsXKCEhDWyIydNDkABwVeRkrihJmIRlcOyUNukNdfvKPN46MhylonJ78w5IesYxmSvy8Fn928EuT2LGhmQ9ApnuvMd7p1/TfE6VHIPH8GYHkRHvIcAOJh9eCJpwOQsaky1FgV5Lr538JJysP/+jfc0hsbxqidyPmMvpdpqIteKcPTu/J0i6KD+N9L64nmHfXp/sTn7w+eSD12fUx0z96O6glzCe3mlnw+B6FiQAzl1EgldQLZaEDLeU3wAenMFrjuXK6ygM0dy1OEwetL38pnFlKmF1hCkPTgzwU67IADJ6xw76rsRu/v1CZ57/07fjIV3sLeztA8LWK30f6wLU3U+7rGUBDm0QvOIUemElpFEcYAQhkcrLnLUzMFymYomnPoL6RhgSh8cOUkqIMOnNKb8/mL7kpfDRN8aFQ94VN5E5IvUZ4qo63S5XqpnomitxBObSj4IyAi8q0lw/zfo0JnjO96QObrv7Sd487vECLyaCGwaihc8DlkhOxrcgSLPQW4y3Nu3onAgi7ljIBUlMyP6rvYE3CYtUKmyjvjUj9T+K/UEgF2M95/a/l0MxM8fk3Fgaz7HCxW96rlDwBv36wILZUCs2xNjEQhYciLGAQjvBLRfLeRQTAOCriwAziTUZ6zr8AdbyIrNsisv55MLrE7fVevp2pSLovSLTnEpzAAkYBKMsb5qNKB/jQrbhFer4RgWPoSHkk7COS4Sv645VGfuWOVASv7wWoUxAS5EsGNiYwxMHmHOQYYusEO88pN2oqLl6KrI6ZAagiL2LA0YKldDRHBx3tEPGmFlcYyll+mv0fQVCrOUCk/RbQlN6nnvDlEtcoEBohi3rYWeBl0IDIDFY0st3GTrIeAS6TQANLJiiiwUQg/WhipI4bhCbBliJPrcGdfCyvIsssJrGISA36XpdCD7/8Nhw2XFa231NkrJVHFe5sg66Mkzjhl/Aa3jXTXmL38x332EFBxF8b07H4Z3YRZsPsueXfR016aywW6ymECvAxG2ve239+8lJ0xnFRRp4BpuJYhCP4+Pjmi9Jj26ot6m2LAbQ7pQjBwt5XaPz1VVt+GDjjPa4+A0kunnnkUEcPUS7SSGumzlLEhDsjgNULDPvCkE8HHJf4aRiXJdN9x3ECoKmcaNB+w+RlR/bO88/VqCQB3cpyBDTV2gRrPzeBepjKoWOLj94fMns0vn13wVS6xcgTL+Se8jq7v0hi67Ww+wLcW/y0rIHHgHQpIKh7qLDQeyL4NFDjV2uAyzPr13aomH48Z+O+DSgeXvrK3waFqUHC0vOOjEHrbRyt3Oxs9wMfWH66OsFtsMIIpxyia3yKQP5lsf5mgpgRiWauFtBjsLrzMCg/e4vJX4TX/hR2PHdT+N/+BEJtmVmRVgCwIViX07HyHnCs7MVMrpeNzpCyI3h8cuShDf+KHS6b+tNehqpHInkIMIqWTWnNcw7bEvjd7O9mVr0b0Mbrcz0QCb6sT82+8TVryJ30e+wZ1O69kV9O7TvDARwUkbycDXiZGDKfnH/Jjh4XT/lQEHgDAAEGtrxs+D0HiqpMx64vEhwtG9nwEFL/YD6xUHshNor8+l8WluSawXBcK6YE5Nx4NIIrOKKQcu1bV1gmxAZ6h7LYFq0SWHLxHhvJyOAFTaEBUq5IjXVoa2CLkSNAOdlWl52zSqm1aHOSxIoQZ45wFCZaNqVXjxKoQkTR9EF48gEZuaGekPmwAwegVEK7avt5DVAKWIxz3oVWW2vaYQF+swepO26RXrSSCibix3/3UGq3I3cI+4tqCYss6Pj/BGcwMsrJdXpJg0qrJyKcdxqNVPIAALD0MWH9b5DQfgUD8SxFW0iXpDBpaWVMXD+nA+mzid/Gvaks6oFPhhamxbCc5+expmNP7gIGxhZ8Xwr8bIkge0ey8Q/5fFAV6HXL7befZfTy6s02K+SPcdb4VjHni3oiTqFU/2MiDnxh/JWAxSoz9bJ6KA+TrSbcIACnaMGveVzliQSuXIiXtt/kk+913nPNbTuwfwvt3wQ0hXHt7ZmL73kFeZsLJIg6lcay0Lm62/hJJrO9jzgy3iTwyYlvFRTbCrPdC/79DnI72EEkx2TH0HoWrc6l8zKMBLFqw50qX/8M5G//b9yuGBxuxf1M5f8MKoXbgkdayVeUyzsJIRr5JLuUWLMHUoodU9unPZRaxyCR2duUub70TmhqnY74WBJu6WfNpIZPFWjX/v+ehvmrCaAFqdx0TEbVsqu3KDS5P6XuPvVjHha3xpiU7cmPjZDtW5ER9QTSIHVexmtiU5qtiF/3v2OKuWGXEJRa1cHI+qAuZ1JUoH9j/P9WizZyjTRz3ShTVG4stcFPL1+gwiZtZhUTg7UJLdVVT4LnEUf01d15dpqxtJvfaBuOqHuOXTH5x/egfNocjDEf38c/vizD1s8U40aaXwgX1gGgw9ukZX50TeJuf4+/FMS2oAwYOz1CEZ6mer6nDq6tI5BdbUZrBOQ5Bb/Dt+ITK6wamqtUFpu1PNFOnDUp3A3UufRrAiqlGuo5Srkb1J8dnqbhcB6e0vCAH7ZUJ4pMtI9k1orxTYibPWbud/vThkmMZX1wb9JV2u8pQ8c54Key/5o7LpukhbA7K0Y9cMescEv/LwYfoqwMCiU4me+0Nd497Mlgh9rhD9u+mKBmeJhOshwpkE7sCp6nwHsucY9/F6jAuqDZns3VKbF36b0BhFAZAyzs/kplhBXe8sEfHiRUcunxmfnwSkdkDu8DTV5gqQyRyyhrMRbmHGc2eJMIy2n8PbZeDYYxJcDvZCycwXl2XDlpbmslwRfT9OJxMCqQt16i5QYke47DZQjr1DEGj28GlxjJO1L5xZ9/lpFa6l6/wP5F1l3XN5+HNaY347ShayT8BaiJTYKocD/qTVazBrN0aT3STFlIeKtQUXXpog0l0oNUJ6ZWnf5fjKSzEJQFGHwBsybqPzkIb55hWC2Mervh+sXh8uGsG7Ek+N9R/MJGPtoqtmVZhYZedjPLrVAeMozH3KnWeVjcIn9lAxlJp6OI7Ub8uG0rg7kIsCIn4XoyNiQ+N+DROZGYKzJb8a/uVv05r+BXBYip98w07fGx1K48jiiXl8SAJfZlGfmD252xFH1W5m4WoOPGrs7rpOVihon0fX4XIvtO0q47/yBa0jU+VdKLTDRNVyjWX3uulNrrlWE507Rc9+tVBWyUGtgN26uDP1+AB92VdK480t0JBD3M9WYQiWszizlGTP83dTilpMVCwvzGnlX8h6kUYIy96UU+TgvYPzLbXyWwiFOZ6SRgKC49wZmoc2WLa8iLaXHCZFYPCnKXExqvQnirVYJuTEIFTTb8G18oxdyy/DJBzK0V2IQCh1ljCSFpZL5KlcPUUQfFKcXGcSeQ117uB3Z7sZtaipTXNycwZudAOCiAKKZCglAR+qCFKLrNJK3gNbBJmKIU28HEHQVWdDUvL+0bvxUZBH4pTNPcCPDrzI8eCmw+Q0CYegOoiHOqnklLJY3Uv2RUhyvHS18ywsojEAbN+99LeofBnjt45ewMqkWZZ+kKLGcnz+hYOu9h+eoGaCL9ykJpZaN5F2DF5bmExAFBCzB4J9rLIdayPrQJN6a0mdHYqNETr470KKG8xySTYykNPuLo+N2ylOico/vtk6LDKa/32rq7ezmKm2CDidsw18DJNPY7gE0BsapqKnplVsQ6x0NbQYKohAD5YhxjReaGs1YNR4hm6PDqV3+ZOsm4fMgzfrxINAroUrHim33wJ/UgToumkIRsVPlh+SyzDUM1c323SXLvmI5gaZVV2cfJLuiyJ52gwp2Qqhwmb3JuUn8UhIo544KumFZ9d+dWy8KWeN+eS29XCqmxwppOReCU/eSQUjT7c1J9QNgDeeuzQGWRqQPc2Zcd4/dahbbenE6RzKCH/2LtxeYAuxTT6OEeJ5MP1S4/7+YllHhng48lYoUrNyAo8nHFo7UY8S3JGjYTZIf8V6VS8WAkcQZjjarH5H06f57SvEHH/wQY5ZmcVo3VbUTML/plyxTJwmxd5YU0huKvSc62KYXRhIZkBv98wT42cV9H5mp2S8n4/4A4Us6/Ez7N1hUmZSI00NS+R0q6MxO5lfA06Uaxie+RDU3X8hMUESRjAd4GEyoFEDxa8qV4QTe91lKxKHgww5jcwDM7X7QJXwkTAo4XxE11z2Xpzx87nH79PLgHvvEM5GGZNWAavo1p86ARWURz8TbWwDnMopIFaxs9rB4otnJflEE0MUnLV//WFPY6vIplCNkTy8qKJA3sao2+dNymfEXVCfpfpGOSXy1UUjHwkjGtUDj0QCngQG6KbQ5X0wKx7XzEhS8X5kPHHC33LNnZwnlRjntASoRjHB8CiF00V6QLmCGQmlwVilp8XkZSrxu0zJ3irLC5zayUjpFH2vkJZnR61puWYWkKLC1LX+Y5N+BVa3YHqrmt+Z+0Sy1yjTRCGGCZYmKc7SSionW9hJh54ugZwjtGpXL7vNKKVwbdTE2KrDasE6gy0bVZkXwHdVT/VlXHh4nPDS+CZ/y2FWEdrvXgOHYVQQRG13p12NfkCOf3iwBZg6fTkcMg3PghH80VbCTMUYaVFOpYNUdMSKuiEdCCe5yufrmM6Kw8Pt6Df33zpeh0NfK/fPZbieIp+igQqRNC+OjP/guqZtvoCVzioLMcMCBpXPm0rkG/XK+5I206uDqosMnXV7VnMS3J5HuH+GjF9JL4dD4H9dUIwjA7/uEyOyUY+ZNKfOHqQYqwZJiEtZvFNFOvIY26BmqbcSdd5fCJzIwgFpHmigkMbsvFg5u52APNQiH8kDYCCTd0UJ+xR/WqG61OBuv65RtGnd7ZwACZRouBOtmMexhFYmAZsoipiuZ0TO7RrsTAguDH+ETm3CYpZofJmPWGiyIEOvG+tPGQVrLrQ6PkyubfDd+OEnDs6y8kl9Aigk/cSdDKN/qyKNBXc9R8aNyYhsEcuTRkj7u3YV3d9wjPwMglU5zbmu+/ceHSaybXb0fhwxfWurjhOM8w73iZ6d5vFdfhviT0FGQ38+O1yy/KuGd/FfgRsR5jp351f7MVZUaM2uPQ8zpKZg20TbbJ2hSl5YYyBlYoAEAD8SCyRtPzWHTTjf67lx72Dbsw/gDL9ysCM0SbIFMAYlEUVHqFpUlEYVPxYjk1I26+3p2Esq6YAzu/jiEGbtnQ1lKGTuFuBgHud6jwAJaY2xzO1NsFRjXGM1e+unjN44PRMYE8um55Jg9RS5z2kCuG3O53LMtgl6z/tKRslhbw/hbPx3A9UvY8Cte6n5noQqXIxkaqRU5VRjtFGmQmQe3KrPXWhJc9hxdaKx3kYSTYqTk2uxjt8SEPYp2oN+nUYxaynv1XKtxK3gwwaAavfASg0inbk/iF4q4N2mjaqGCpkJ9sKQTcFh7jUfemivQDMv3hE9N3vA9yOS8iUiizDwVKw64MHa2hyMCOl9hXXjwQOQLa/eW/Pd/L7frpm3gRuscdkwPRETUxrpnqo/aqLXZlopotpIneZdV5SjmvV2RKJ1nAskiIs2GBiSaEQa1GuVwCVZ1xSOy7pVEqTK6aymFbnTtJ1HY3ic8kiJRCKAyrf9549uKekIZ+t7Ouyxa+nbxv3842yCK9mAs3nhHtBvKgnyN8hK2d7Art5Vv/pTHJ45Wy/GcHT+AptMA2EMQ0vXOJrTaZz1zTmZvQKKfcPy4rBr7jo1d0VL7YhY6BhvVyu19tixTgq6eEzOVXhkYqp3i8oqGEDTxIc0D4B2CIoS07q+WSY2OIEwzAtLaplwCT425LoLVFLgHN0f2NceoMBtxoBMWldVsL7IjL/bpaqnO06y9Zd3d6q9w5+2FSD1eGVIHKpj+fykLW86zygtMCFi1cLZbXYWRZ6P6Vv5QoCrAfiI4U47SV8jZakc6uLGrzdKB0hVkBWpVSAcRoPxnQ3gpoHUY7Ckuc/5ISets1aI1yQGfAzhE3dgStTb2eFOLzOXSKrkFqsPP8lrnj6fYIUvjghHtaKjUT9QOkjYH5M+BX0oE/ZCFyMCXYQO6BH4zWUsFYMWp/SpJeHXM/3f4fTE88ZP+rsU7vnu3wBV+5GVxi+/S4Gh1+91z/vva38Ayur3i3kWRqvVmWOv7MizWODiBW3c8o1I2IA5zThoK7llNMOi0UP8bufngM5caoAhbaSmMp01fZ5bbchIn8kPq/bQIaCANf8jwZIZO39eAnXgGTmE8YvRu32hC9uGmaGFcBy7l6q0WkKTqrMpssQnBMBiTaUBpXFPGBIViG/g4pnyX2BX1/m4q3IPQDfvZC03ImMFFlwE6RXIBaQ606UfFlzxq2iiHw+VlGabcP3FtzecxJz43GGmmvSHTh7WKmoO2lEPs1zsWarjN/mUElgEHIvw9Aap8ba41UaupF7xJpaMnCRgDyqikYhJhxoXI+5szezl0g1PNqosfq5fSk7bOS2AQkCyGcUGwX0vkMjjrDMdG9RTdlrYZpqpLZw40qBW8Z7r1MPkmAz4ZgEhteDJDTxfkAKsqb7n+sbJm/Lp6vNzeaJmXE7ZJny5d2ra+QzjCdCCujfOI3lWLCsJdiKOggGDSm7BrWdmlXd6DaUA+aSGV5tb28HXi0bHCeZoYAlL/q8s3iyYWFXgxY+g99wItfrdroT2VEIwPwl7ANCo9QYSJ05BIPvkZxKV64kw5vWTE39qdNxru/6hZ4pd3hPcmU/17HCONY5LIlpQ8GKSyrBmBzsvqcbtAjjCSrPvUPE4mtERISrNRkk+bAEuIpYHZ8i7sBgLvLtL5M1wnxLYzDWakC/IVFGfQXQzfKX0xfti0lyYCqbQpwoLNtYwOmDX6m5PSw8nfNkfljvZ1uFnRGyGVYxhSLseFYyrwIIsER9XWDrJayLPwaeKswS8kf6uCxlM2WWPEjgG/2ayKFAqGJviNCrYHZ+0U87t9s9h/Du8LddXM8A/4gAjKZsGtmIW96ma9q8uE9mM1IeY+cAYPkKulxVwvS/yKVZegW5IGTq7+qK+WDsa5TtRudKOPgKLkE8JWoUnpQtkfMMWkkJ5cY4JLI43IutgmM5JkSZd4XWlXJaaGSmK+mhRO7Aey98SQsO45mNX+Ms0Vz6fMOQ2qBr+reaL/4tHxDTmx04tFDIChv0oPznXvIZASVXxDKLSjSfr5x54JYmd/uluk6jdk7PmCEPPZGnT4MQiWaQdroj+baD+8WvfEXuqlrfl8my2NWYRqrSr++dRFJW6dCPOTODa9/iXz97v+/uyfIyA04l1xu8/Zi2+vXhUCns/qFMEZ28JVTW6wp1oNvTr2fDQUMETZRFrTgJGbYkWkFbixsCX+XnyxT8h/tOqd9VdcOrcsv+c7CbM6CnvVLgqprm0yOAojvvxzD7RYnS6amnIcmAlK0Aj7t34PiNb8LrL1dYUz2daIr4JqYvlJYB8zAwxxIrpUq5pnZ+IhFvwOPeeQ3LNhAKlTQkxm32zpNiv9fEjbrF23KzbsWGHGUdjPQ7JYtuNhLVDDcNBM9cSdpNPhLWtzI6yDsPh9pAP1PoFgwXW6betlfunomY1OhRB6Q76g8ELeWi4WmwkLECqiYVns29f3W2oJY1Vq7f4RQlf5y0UZl3RzZaRZTu2GAsFaZO1VjFOgoRb0UXdoJwh/2RyHabxOlLeGQOcjH1zqaAvkJGUpzzCrYYpbP+P5TiRuB+SqpRPaHfA8nrITkVDSL/PugOxiHcWP0iZ6il4UegXzMDFYfLhR2eQKG+XthL7VKxCJs64OxxNplQ2rxk94H9vXMEBZxQFNOM6Nn7NubFW6qZZBfqtFEpZdyASRaXBxZGfIsAFRyEd7ztqd6J6p1b2ghoU0bImjiubHXzXHi6ArFQwzn4CV/YWeR34SunCI4hqND04+vpGXFvzQ1DEP90VANcDdLv2R98wBb3tgGggXdSQKzSosfjxrka7AscoxRUDRKJywdTDCKvBd+VuL7nEeCdhJtdvDpxNx8+JZ2pm04vAdusPm1aE1a7BbmOT6oI3IxVjOT1qOq6oPR2VLjC7BdSc0//Hg1uiSkGpMfAWokufFDZZognRyDPi+iHuz2CgRHcW2F//BD76zcMWf9af+DEY/TrWgcjTZ8pcoNp0YI8+j4NtP9pH8i7m0Zu1MX/CjlAhNKvr2iUZkT3BHw19eg+My8b/rHKk3BoPssskZS4VPcFCfCixtSkFjT8LbiOVWjtB67v1VnqG5qXPu7MCMeC+nBYCnDDNJqTUawvUfpIw8hrwLUEFcwrGvhrTGknCUe9e9y53gaWgu+1TGGz9XtO2GR3DMfrHnRM5sINN0gqLFTMYHeSLrgg+eybw8Ba1jLnD9TD16O4Uv0LsYgRpddJdiAYxKbbVAycQY9rtCHURPJRhqRbb562eDdpXxsovV7ANEdTDtIzAndit5Wc3W+kK4BMgjmNrMrhCL8y3l0gc+riGjm0JevqJwjPjLvs5N35lgNbqE+t2KMXUU6nq04nYuDn0xfR+WKZov9pIJgNO6Gzu3pvcSt55a4AIIAU29vGkL2/dsC71w11/6xm5sPzZXV3SiccOnrQoUz0O7yLw5Wgo5foVwnWPxq/jTXIhSNv8BKCtwD0+cDl+YtHgCeeyQv7Gi9DT4QzH2JcI2uRADEcogrRsHvxvppsaMSdO5XX684y/M1ue2ql8RZ0kmdaTa8TTcHSXxrlr6i9PQwpB9d/8eoOWrjhTq8lAnihhhim16pIbm7v5DZjcnMrAoKJyekIw2yrdfZYodiyQ74qZXSsjWZlL26D3BW+EfHlaDpFn2LxCdqyLdo0xcsMdNyi4Yw5NeMs/SSGaokh2ttsp1aIME9N2VOdGRM6Rr8qswPEUGcQXxNy77fN8N+Dlemqs4+DCNyX2s7pE2cZJuPOc+/2v8J0pcLNgKZ5FpGM5VjYx57zOdMquOP9vaMgwQ7bEs5aSsN6o84g07IGY7cVqXb5O3lYc3PNNob/cVQJ8bxWaiJXMobwAmYl0uWPhxRQdAJylRpQCiqcMJL3fzgzlsfBJ28qPIdqkv66T5QNMXCvzGD6koaHPwg7/5rIrCnfxphbfO9HskcisGb+wtIGBBuFg5tiA5kCeqDSIFdluZ+gnZf/sHWqo+1eQ67Jem9oXMIqwAIyfIsltPyf/6Crj323QZ0gf4piOeDl92H4NGQa7hkjVjZuLj6LnAIcppBdd8VmHvkmxDleueO7irfCgXy5cMOQIQVtGMCM9a+Ae9DiiX83+MyqJMdvY/bwZhe+gIhzIBn9YVcmOqz2k+k0L/pv3j8Q75upC036c21KRudhI39xAbToLFqrszMCco/g+4U42jfmXYznS3RL8zZvClc+ZTjkEFSz97U82TTfJJ1TgqVRY41f886o3MjSieaNWvwVIgjRsmeas/5s6W5UraX5fBP8t35WEikPySowxpmO5gPwbsk4QpkSRA0MsjeLblRVt7pa7O17yIBvI5VMmZY/p+Qwi94qyYhyCNDE2oRHN65tIJMZeadrAdaKxYOQzf2VbGMwSksF014ayS0pRVFbdn4vL+5h2YOVvUVkpr3sPymMAerlpsi0Vu3GZ1YQ7wnIVZD3eGtCh69uaVdN7OfSauTEhjYanuv44KM0aG6VOWZgyCfcZFt0Tawxj5TsQLj6l3I2TPm7UtzBdtcBMOY0AsUj4Cay62cH481V6MKoc569ThuNveMsiLvH/0R3zwJFi7IVIe9+yFXmcLSORPEyDNTDRLf36svwpwVRoGxJ5EgEX125ojy9zd30qZrD2cgawIctlKO9MbxODmyPKrHsmTOaizV1E16dvSBlkQOOxCLtgdckUQqMWdFFP1elCPww9aeogq0Kj4CchTZIlfKkAlhgW/8XR4WWQ8RZFkRc4ede2QE5iJmMUNrT6S8ohRa0i+IHkzco1AA10yOEPd0dRiNg7X7rbF9nverl8risEoqyJPwc1LBVq2fHnpU79TfmlT3ujDyYOG2FFrlyMDb94TYdhRXXTyKXAlMY4+f+u0YA79zEc/1b3qBR/LZ+OVdEQG5rDh97tKEgSzjV7U+aIRV/C1Wy9kTLOSr6vwol/Su8QRiI5rAVOAjlkB5SxvuJ+D9xAo9zAcR17nHDjFQaA2lFo99CYv2v8xKvm5/Mb9Aoao0QgvRtJTXcS6vvzWZXQe4F/JJw74KlBxqZsSB6hKpRGckhHEO2spwZ+SKQ3SjPAS0TsuicUQRAJtnSWl5K2yqB8t6k8hcebt4K8xG5xLJMipRQvvxiaam1O2X+Bzo4V4OnVgPZx81ok0cWJDOvA06Li8ltfY4NBsFLVaEnZLU1BrSPhNtDbXN6HefHoTsHjXLK5cKpjegD5p/+vnqx6NgF75dLXEGMgzQz0Z6NsygzbxjWHvi3EsIPAUJY3/T7EOJe6Jem7amV2xBzrLodEmoekgtl/lS7c3gpmGE0APIBlrs92O8OjRhvFnC5G/F4PUKUtFpOE+WnTtFnAP3NOCJqizGzKPj2SEsVLDI2crl4Y192XNOxm5L+VGXsp58HdKSYZ0rRg2l8ZXN+qUGmi21TZX4yYm2Kj43Kbh0ZO1TCX0urdQk14SKshUBYTv5AvBKhNQxIZcOsSO2w7ug9ir7k4Zog0UxefoPHVP6fVoOR/71rsznwFGi/u0dbEy/u8bOWuUpqWIXMG1UqDYpTeqAAJeMF0h3FSg6M5IwHIDRbITtCTTCVyKHSJfZ1VmD5mriyt0QUwWnnPysxCVhO/kuRXUnSpwTRPz1ppj5fVvweZ9D1gtA6YaA1nOzHaqK46akmMLriAwTW9o9rIuEhDCC9DpvxcjaVyvskPS3S00JxTAOHIYurPuB48uvn38B+yUBQrNCruQHvZvinjYayH/UPn//5j5kZYE1LDvh+7cVnXTcVeLpZOXO41ETPQza76hYMx28erGjAckL0Y/80b0NFW2PUNzCmvpfgpfxR1A84l9lQCCKPl9llO7cFyrL0nv4JZBd06p/16AiuxA2ZpNv4ehyg/ZZBvm9loDPO4FUVpyaa1ET6AWdq5dYP99k9V/zs43baKplzwNFe7DgoqhbPoTn+1+LsUU5jgekgJpgxE0IzUNctgE64sUDATjkdMjohoyYVUjX4lPZArVnW+XdkbdjXCeh8ue0IWEwUHD18Kz5WXTsxdiS3nMZsvX5vGXhpnLPS0MGu4vUH9EmjSNZpXi0vzS+ZdPpmJic+5S8/vgv5+SQ4Q0BwYf8WtvEBOb3xCiVltViop+xqaaUm3RmsVJ578+se4HzaYI2KZr8ZKp5AdCH+sjSGouyBY3aBeAR1VGEEOsbxKQw9/zmzu3P3wAE4bBQIkxibAMnIa/tapeZhMGtCj2NH6VoS9pvFq7KLtpxCmAnI4W5EyfYTWIk6GdL10g6qtO9mtEzOnF4Wqd2j42WCSkgTu24vMAXqLKELQAAAAAgRFDCCh0DYee8e5GH00lp0ayjIQCCTMgIeHEDgbueWmmkI9XaUKhiLDb7xvEJp+s6PtHtTNVXNhhMB8X1uGDotwjupoUV91hEZ6r76Z0E13P6Lp9CLgA+SU6he59q2Ts6oufWewTy3UIqkCRFn2wo5RZzRnxtpCYtZ0PCqvCQ68lyjcXfKMlUDDRAjXgPIgDU9LFI+8AlCxwO5aJSGn8DiVja5p5/eTUof/YBGGm928REMMs4Lat6AmUuTXAAAUKookU1jL9DIzDFd3ujwEFnaXX0SwznW5lDnPTnRK4s0XvRbQN28qzIPwHjTbHKQSV7Zw2OGHsKf/c/CN7Y/S2oQcUCcHsCRC0GnJLJpuUh7QG8+1CVnOVwCkYEv3UFQTchls3qu4ZbjIekdu4eAplUYGFytaj/Eb7b2+7gtLqQQMONd8Tz6P+wFRQSDsJyqkNymGe9ipHQeHlW/tFG7wCQYNW1Xf0k19u2RCFLT5YbRRmw9phKamJYIO6UyR9s0Rwu9FVIBuCwd0URaK7timYuA6T1ie949Bx6jCuQB6d7HHDLTgFq8bL2EbKEmbRNUTB1EvVtrZmXDoiBg4s1uR3mT4sAdbAmt740Gu7WW+zKv7RjHTnv3KmJNoVSwXwZ/qXIifFvK9l274xIGzIjmmjJRRDXv/U/wxORSdrDoW2npaNrkrhMZnWYCcrwRQYgLuhRPU1sPGjOUx6H293vmBv2Kb7Dsa7ge5vpdadSEstwd6+sLoj64jOlVD5R98AcHVUoUxVwgF7h9HKmj0ewIOhQ3bDfOlfaGcl3cBJQ0ZD9CZ1jfxkgGtRj+UILrcrDMuYoaqZMsT5AoSvKIgRwDJ6Y+Sq6PnM/gCOn84w05ulx39TjawF695JkBKZlkr5PjB8W8GI1prylsFDFFNDnhxexEwpQLMwozcL/g3YMwqPpXWmSykevzy30yUHBeVKMP0zAhqFZ2GmyejLUQY1OO54avPanfvmO/05Nb2Cm9W1LTzcmM3Q/f6VcCpPi3pSpNY7FWwgG5aKX1oBW7jDpnwQzs3L2YEHp2rAxnryB/MfjU9GKKHOL9WfmBZKyvIAyzbQT4jmcguP5rEtiFh4kLAMD/67UWaqaIogHC7F1aqc2JfuVrZpw9nn1biznrIPSKMLzIbx5MZzuqJAb1/+g60OfAn2tMLOJPY9KFtdLq3rxjOSWAKTs6TeO8XKdX2erkzmIxWiWO6eYOmpvHKnEwPO+bqaxhsKoHNcYeHZ0JdOBuY3Yq7JpGtL9URp9v9mX9Ub8hzfZ2qW/zsnKaowZsqf2troi4BpUX3OCAb3ovjCk1fqnlDOw8LI+UzezVtsWGJpn4YphpvRUgbTXrk1VPWrkYkXALaK+WmOgP7DcegNbMTpuNUpNMYZmuqBm1b2uH50urDUI2TWwXIn9g8JcV8kQeuHfFj7LurnfsXWtkaycsOqYX9cgHvyEhZfh38xwxDJOcAdcX4DNYvEGrA9LXmONteNzSADdAvi2FK5sBLqsBFBTvL67pxm/hhIEeXifjelYuHuCtMOyp/eJ2eoMOuj3mf5gYbEDoTYRpxVTawLs7RyS+IdSq28t67AdSn0SEhCywPywC+slP1VnGfIZeujVLCEJp2M8UqHRdQy2x28ioJZWCVcono40OtymsbrFdLsmfAdPNAxlmQjxvo7s0o4shJYJfiFGmqb4ZCmIA5U0ajOuvH/IOepeF5GgrW+Tyzd+ecfFAHK5gOLXBjYZ46mwZdJ8vEc3QdN5y3VgxnMS9drkytYvOs1yWMnK2LzNxhoDkvT/0q+QxWXbq/jNfnBbBf7u5ox1Q5Yx2QHE5WuyInP9tBUdmkOtYbB0jvQHSTxJOODq/JomO9JD1qhOjNUryNkfnqhrzO0qkEZ19C7PRgEqt8FykMVtlYrPgEkmYsROD2qT0qXGElEIVhbvtiuNdu2O2QkhzxTnjqen61r/+tMIFZq2B0RPDFPpHiuN+24svHKxi1xI44MvLEOoYCtvgPG4ab70RywfeP+zIbq9jCpzV/AwydxS619Uv9YW+6vYdXGK7fm5MMD7NAk5v23EPewLyEINpai4pSS6Wdw/qRac50A75tczyLkAXYHRkHEpwRmlas8c2spvY+w7dZ+dNYon4w0RMqqPSfEXUmd1n4FDayV48MqA9WKU6ebDzzoyWz05uZTAiiMMwZkyXGnay1DviGnqORzW/RLZVPD/jZ49/TiSJwKDqB++mUssbsvLzNXpUS5EP3UfkNc9X79TFadvf0hf2x0W8x8h4P/+Aqb/7XaMxmtZjJDQPno3we7ixuYAHtITHRiV7lcFIz65WueMokRX28wA3HmnpyCdVGRAQGQ92I40TMQaFIWHzu0tB8l5jySkONAPf/2ss7TNTVNLc9c2dlvw2kJGw1yn40kzOPsFVZDYXq5e+eXkYmqJpoVLHc9czZX9ervfw6dU673JQd1ndWPb9L96WWW0IH34tA2PwPe+jBTv0Mk89l0PszorwLggZ+M+JdiZ1ccQ2VotOKXtbSvNV+HpbymvVbCjVerSy15yRI5MVI3mfDy3YmxhAzPZJjdJO3ixwZC6yR9IqL12uZzf8SwN8FcNLzbYP+M3LOcP//IGngm5KOIf5K+bnKnvp+2IN5IBpHdG7bqgNt2BwyIM5Ry4h5ajaxoyyNWxYj7G4kmuUT+O8EA9QETk6Vb3NXjNNm1ERxlaOfhyWaDHvrA6Q1g2CQNLIdMwTHYqPAw1JaKfMeXDW0u/YMPoB8iJzeCBvCeRRIXsWKbR8aoEFZxQFaT5klloqGN5AD706Eu5KMtG2VbtMI8/YfT7rwL6OT63B4+viCH0r7nVwVMyTNAgnPAdZ8bKxPDXceKWUK5QomY8SXvdrTtGyauaHiR4yqU9SA2Wk8zYACfuxuhyTluy+7r79E0ZQ0VUlEFcKeXVrgO1+F7KLFipY/HHQyoMbUTrvtusl5wmNBWd2GhaheKbFspNwurcHT4pIgbkKvS4/sfLoWjVgGIvbUL7WLa8U4gfJvMKwSfif3IKk5E1nQtEArUFi3afQaePAJTcTgvrFwgkdkhSM5IG5YHDEUi1MvfX6+/chthBERiP0eDZIyLU2oHzkdVNcZA/wgWrjJnakli5qJbuaeh3lWdeuOEKg55e3gLfFwQCFSaNRiXtrO2fSWGhmhwLHvazBGCCFn/9YpMKttJevknIV52Y95nVVfnKaplODAgkO2q9i7EsxwtmBuawTvXD1nHdD/9B6q22Y9AugpYL7lr05MU25pyLWt05hnPe+eUWAtCZhF+GvFK83mmitne/7+yF4PYGUAy98ASgqsomsp5Z2IN3krrQw7QZGX9RYjXaZu/obrUVOVtWo9t5aKkoWLHO+EpORQ+zWzjM+y+Ju8SXb5u58v4CDLR7v1MkqkbfMULOH7/2vwurFANK9CzhEIRGTggaU9PeE62ubvJaA4++aYpQ1oSws8EzuYxuK8F5WKhIli+eW6MxVH//Mwfou1TZgkWKRL2lD0dEvimV0KxfHZxXESHORnqS1z52ivU9svHx/JLEvPvlsI1unnxYocD5uYoYW3bzTUPgEuT4HYsy5hI0JVi3r3k63RITcb/UVAs5h9byQKgjFK7lNHPde6iodMv5E10u1jbo1jci/6Kafo+/AwgPmHga4QO8nEkrSbMmcZL7DgT409udOeiCVviVqvL0l/XeMFFS6G9hP8fHQ9rkO0KEwXaGn6OwtXyOjLxRSl/I8Gso39jhcIVUvOhrzULM3z0qhdt0C1Xcq+SsslY/jFlIS0J+e7zWfW6ZZq1Hvwj5gAuvaE60zTYXQ2SRcua8PnzEW7rGeSFtkKh+TLyg/VAz58pW9OY7fi0pe5HhZpcbvfdwixM+4wBGJO+yqZkA+9GPEG93gjHNJscp5ex7H3M8tzSXCGW5/GZiDNzLg128M9/Ln5V0J5sIXeNvze7qsmPdTHuv89giJ5j5NfhFkl/5RioTb0Jtjh7R7NlMFbE2fI50QedxW0BXohg7XiWMwCrzhVPbSK1/zt0gv2TWxZpF7+X1CQj7NlgrC0LXw07n2UiGsHfEKCLalcR1LWnahWoLqKMvINwrDalMAa1orAs2+dFw/7QL3uRerZNnTqcpt/IIp2xqm8r+FPpMnhyQNwZoQPeWljkN8A4ks7vX0v+uzEbzXbI9Kb79+JQ8iLVei+5EoYZViookn8F5icw8fDn4qmoNcjnztd9iPuRwTRyP+vOl13xpgaFlARk5AnKQ1v0CLYOOnuc1xC4puJW0UzpSYkz6QNRLnyo084SgXvTl5ZhzYhkM+FqPeXj3il2C78IJY+mwNlJOr+Q4Fwdx6P69XCVhYlxW11ksQ3cd7V41BAMKKxfp2AGvll1AYy4EWgh+WLgmdjlpbc67GCGvTuew+kBQ+r4OxZx8IpTHxea2OJbXq2CkpfHxtvlCr41ln4xpZGy+AwaJ4fTTRKpVs52G/AQRuHNvG2W3mMvuBlROVwfbTde7Z/W9RiDQ6pHWBChV4bJTq7A+3qZdne9YHdeDKAnXozBlMy4vxfObl+0Vewz07E7fIbFpyXPK+kvpCMRgdbmvwjQqEgIJiSiVUBaLNqs2mTz3J9XOU4uAOx7XO5cLOTFUo+/kcIoBlUxewVAULUdMfVa+OdHNimnyrhQXRfRkI0MwVrcTWPM8eAFlsULgxFFQlwSQPhZQ5J4qTenlBEjb/gHEXh9WSOUdEj8HUm+rAfpW5arRRF0+HiIrnBFu35hv/PwTgb+zgYhMzRhm+jsT6TQ66Nwi9CNd6v4tX4IcDM1qzAPcv6YzdrImDLI3HSpdVuhNETlhJQni6lKP4hCWeH4VqlZCJTD7XH6d0TaO8T1W+d/qd4MAiqP2Gmm4kzNYHFgKu/9EZXMPl4/aEXo6DkxezMho2AKNT+fq2sbz05z+cP5k0D1q3/FGzYKNHQ/wSmFSne8wUM6gAPgWCf7hqdD6azjzpU3VOLggrGPa/cKV0RPM6/KKyse2P1Pyzozuu8TAMCGfTxEyl4WQO8uald6gaHovJb4jBsAlxI5xxbCuObXBvA5SHycR8G6W4QWOXnDMyXLVbgaQRVdW+CjC/b+wpEFs9o3Wmp56uQ3fZMTSq9M6Mvfq+R45zUKTdRmcZiWsnHwr5HaY4EhoH9k4LZwUVFIa83IvjyTDBHpEHZlq3/A1ovsxeqfapP7Po8eoIYtLNUh9Sf7Hxw8nmSEpNwsbyjLD9ZM6aAiVxwAXq5IoIg0/xlFJas+fhdiIVCu6KaBKlVIx609STVkmM7dWEs1Ty9sBnHcsd24krnNkVr5CWHok7gCpR51ESKOzSaN/p61OhYQUg72R7msdNK0lJQOpkJosJBqvV0a6RiVxZU/5ekWU7Kk9YPgEYrMqKbxEsne055HhIHjNS9VhQA6NbZX8/BwlAqFLZd/mYnFZC/3dW7S7ICl4Lp0LHXfhjV/5hM7IyzT1HrvvBjRaB/P7e8kFLqGQU2Y6zgN5UmrUu2YwgmQLyjIE1tRLxWdhbzcGbbqR4ToLzu5JXnbipgTimqcmPjp8GrdErtuhEPw6cBQ51POjOusR82Xf+P+uQOWpf6Q7u+LgpaYVo20nLiEY6kM3lxrVnMYqmIfP9iKtvB2nnv2q8LxNptlCocwdqwo7dxjcKzjUEItpOPSBfDjZVUBanAhQW+o84Msmtz+Ld4higsM4Lu5ujTha3j2Gt78/QTZIHCCHy5eSDh5n0UIwJJW6j2C0eozQnuWZ8tBGPMfRm+cv12RKxTMEHSZVRWvy7DUllTet/v8C86jlPJp0LyzSk8WlinXCOHq4tfu1Rjm8cxSLHCGBUqm0PPd7kdORuvcKdTM92uDxZnn2kNmB5R0qNFbOWRN2jnjN+5IKqdzrzyz1+OibtWuDvIqTxXBmyov+lEm4JwsskYv/S6L43w5MpHEPk8Ks5z0bfAkSoXrAJXpT095vhk9UTktYYt3p8zqR2PqxqZj+ZYmlJe9g/JwMwrUrfYRrT7hfc65XJKC+SJknoTXAQ2uhijbMJxyu00i9PUO42jsrt9hcpQ/3rdEQ2ERhQrvvsHxqrUCabwxxpj1unYHBSzQLATgP3CE2v+GwPnmvy6z6SRScq7x3VjzV7vdgb/ou87hDKYXsYK7FRfBeVcVpps/NR4NkcxnxBmxkO+vjA56EzXiR7JPTw2OHByRsmJSDMwYiD1YMD+qE2pSEIl4fJRY8Fu0NKVGCa4NAul/v7TnHhaOXNoupjtgWLDiKnTWgmc5ZLgOOjMkWKOjZcuRF860ZpiKxxri1KM//JMKOlk8fv0f+lEYEfwxk3wTIJpd3u3GNjRp+MA8cVsOCwiZUX09sVe8R7jOZgAjfkEf3REImriyMy+BUnLucRZiFnPn7I2cCDii8bXwjJgHmofCYVU719utpZO1055Squi6v5KTEZrH6+xyPiXtlHS+HO+KTh/xaQjM2na6fQSdbtL5MWe76fwLivvCR84o0q8ALnZqGzUE/I8Xi6eS9+qXpvpZ/mz72U9VaeULePenGoNBlMDNaY3rt1yQnjuN6orKOp7M+jU1rrGAYl+VHDa8kN+P9VphsVJpZuUMni/ELcwLzSVoV3Aqheqr9GVqS1xOMqa+x3gVNOX2LO63SirMN7IWeAjHq0YROPgCXl5gJ21BEO8okFkQUVaW65knDiKVZY4c/MZBsEl4Kj4YmQbI8j8sRGu4CyrsiOOrJ+Dsd5H9px+TdTBCJUlzO98eze3e+YmJ8PEC1zIMsjGTe79yYv9Mduu5c2Gz94psG8seOBDP8wCWfK/Vm/kqKe/gtnpI5CeWx7DUM75eBYTMFYxe0Q11/VqnaRnYb2Hoy7hn0vMQOs+Zb/UKwwDdC6MQGVeHfgXxtaR0z5KN+mfna2+6aLpWSrZnU8UnCe/6jFADcb8OmiV9E6A5ZJfYVIyTatp8nE4s2gtNryNsArdhHh0YN4rxGWA+SPIAU0YbFRP6dmPcr4fsebug0R+o5neldkqZJda0h4EkuIxTpBTyQMInmK4f4LubtWM7tIzljlhzw3MyPCQo8CL2wNH+iZfYywd4UvFk59Dj6VgmvBIKENubGZrx9Wj/RmcpSwIyNhOKBaNiPbKgXSHXTYN9HLUakiV5h6DqagdLPNHa7ZT3ucItj6qf4bnGH5GefM4DSTjGUcrXy3VHswffYG68hphx4+FRUAfwzK0AVjyWM6F9rn1K7MucSDh2EYFviSkrnsjwufK8Oy4+g12Caz71Uagd0WBPo7FfpHSGR9Ax4y2PdFPowfh3tHUP9Lw463lhE12rxbJ8aSRzzpoCTHdT7fYQTyaD3EYKsYC0/bhQSBIx6JRU2ni7kP2kz5hIOHn6U6I6wjmhi3Q3E9eXOkPWMWR3gFkKAS87Svz3wVhYlsegNRteDXZCfRJImGtqsgmzdaCEN+mlfhCOpYn6yNxBHDJUDH1X+dws0XLpKKLOXqHBG+mQuUZe6eqM9VuaSAuMBhhPiltfWwxSEoU9S1QFkzwpa1yznPT6TMRDdj0h/VbmOCMO5PHFmCVSUsFRYQWaeP2ah7P8z/VbArW0kn2VpJhGSFZBeiNyO1L0WHuJw51CiCnb4YvGyUtHo40c1bnrShIOryzGs3HX+2yUw55eRwqsrbJvVqzqU96U3D1Ed3rr3em9aNecFmNEXpfYK3OuST//fSj/1opDgvq+Ex6aiwnP0j9V+NKaFMC8CjyGX2+exzA5I0QESH9Ob+cq9Eltz//PQp1bD2mpKZJNSKR6n1rqdrV9oI/76/XhLVR35oaASlybyV07LVPi0AEFaOiLf9bdf8RfdORHedwLgALOr1tQY2i0EE0qlHUWZOBd6+ji+rqxoM5r41GBvY+Wg7HC5ApbO1L+emFv5/HkDcBac2ZYb+KXe7cEMVFQlghuoWraMoW3urpGg9vWFKvk8JeGH5BTZ/BE90HT5C+SQAJGVNCJX/ubXI0ht5GKHsQKUjujfXwKlfaS34Bm1OGPwfmOmKhzda6XmQMM/5CWyGbOxXGfzryPBis4HhfZsnlnS0ohZDTXQasLha8UsXeV2pd9Hp+E7/+DhDMDDlOIvdFzC0QQnZbsT0Vosen9dcoV9UQcbc/TtN9N/QAooGDpf46ZWAOU/LcI8UCPYZCYMraZrXtV0/0yJ7tfXcPMNwekS2tlzny7RnHC5bqNmEE96qoBDCmidhoenV2DPnFo+wcXzGQo4PcAWUfRrvVrqXd0ybuBM5TvC2/ERx4cieqGZ1YEBDdcYBjItBs7s3H/ABgvVYGxCAqB2eap1QmP/OPY32FSEA3vSdeU69/kmYFRi/6IH54MyqpqWbz9UrF2W3KvRPCnWmZUrz5UVPlEDlj96V3xmPUQXmeoPdJ3jahhk4YDYuwBDEqK/OgYdyhx/KY2k2Nms2wb3hHvOcOn5cCACGB28TeFsbrLapuEe0CWWNY+nATND55Y17nm+L0ICJCgK31OgyHrKm4otAOSzao4265vL1Ei3WLQz/aVL4Vbzc0WRCwXRGZQ087J2xtIMlHFqD6U3fFtVLN9ZWV+LpotXyI/AbOxCU17eoIXY+ijo5aRPFI3rwOtAWkb/3ETV4FSfuaRuFPu7q7QDhH90RCytkM495aLg1Iis1BUeZShReXR+SLCfzyVBHDZlBq4hg4r0t3+lFgVG61HP5EtO2m/5GCvXflJe4jXMUk9GYimqS6DXoKecLjnfG5W0KRU6bksIDcSpaKF9A6eGVoYI0Lzy6Zg4fuEV3Li0H8NQqzQQM0qTBt0tpQ/dIz3Ub9WgBaW2uyap5bj/O+Co1Mv3/05vER/vFEqn+sqW5FZp+y8bbO5N97hGe76aVmGbmtpKtIo/EZU0e3Fwo5JdjUoJdQCyJdifZmaXTWrkGo11U3VRxg3I3F/BQKC5OhX3pVywXgpOY2/EzvA8h+kqjmYkUY1KpUoBO1mMFwYwpwRWQ9ULmPTMGK2tlFxcsjDQzkIIOkoEQ0vxzG71GwEhIxkl0ZfvT1UBJYSuU6rGuV5QhnO6n9IepW349V2+xdxSmpcJ8MvI4lr2scvlDwWUklrsCQQO/ogNr9sAlZ7hXtCsuYtjoiRkXYaDdYrz5310BgVqGX5DmBCCK5Basxp0mtAryzVFJfG5Rzn8rO1MfM5vZQPAIL8w97Xq+nHuIeHlRuLJbc4Mp1bYwvvYp3EqpdAFuJJ+bTbaDJJV8lpa73IQwAaOOFh1TYlN2iqjmOi/3lFMLGs1+k0GWoO25R7+iKmtXXgxjQNeKOZJGD7uAW/ouJVN5ky1+IOJzVl3QDsWe+MpJuFqzasbGwyQ3+uaR+XNvDefyRwDz0TmkuS0yWh3kXNfG8ssgYkmNKRtQulQKxCZfGykpgIEUlJsRGDGrm3hHDJIEhZOvjXrG7J+y9kPcWr9jRUZhqBpUCCfRYli/lm1p/09qRHp9JePfn1rVnZtqBF6/LBFK87SkJWH0oTyZ6j578QhE06psJtE6IfijD+dmgz60P+PKAioupHnD/KyzbMDpBonbyzLhdBpvEe1ixXDqOZSOvBcSNsEG6DpP4DVDui/Jk8O9hwFeYhTlQmJmxLGmPtxMSmmzFXRGcZa+ZuXx0RzyU2Q5kY4OxfmRNdjvgdRdzR1F4XqaIbH1NVVHjqCw2o++nnEr8sDdemCc2bfpXi8/mcu3JXkXLKtglJ47kYyGOgK1Ct8OPO+1hlv8ZyIkStwXZRzADcgAil7QMVqt56PWxrvvDelw9aQETfvWbxheJm3t5tQOmUXnnhnkbgjMMw7l5dLBeb54lj7Jz2/RwZYkBuKdCIm77b+BgAULZj0qzZODqT/emLkxGtCK0la/Bc9VKCRUAcVhtHfdAvz2Gl4Ur+Wd9f+ObN/5NfkoiINuH75VHFTZ6dLQr4J/LvEjMtYMrX596T/cg2zyrYdhBdGgF/yTxqNSkMseagtNeiX70lGC5z/opoyXjYPqcEUt0+heQdTLM2q0/Tud0xMcTEFdetyMmveKllVloP57RvoCP0wFHbMlTRmmbAnJLeKbktQDbwLEQGbLMuj9raqSNS1pEbOFL5k/4G4ewPBra9EQd4Zca/a9+oioMbP5BQ4ah2IgKyuegPCyrMG138aJXNV2S4AQZ4lMoZRWgCvANvhYGoGYaaLdOCRJUb676ypoBFy/Zrvey8DuiqKeiYLA3tAidqCE8ocAYdXuiwXrOpAd8Onz39N23FcXSv3MaWJZGMafkhiWTs5nkSEY+MQ7ZntOdb3fjXQzPIZyosFHHD7VGXUOyjIXTDkY6JI292Ovdae1K3DJA8Vj4bCR7d2TUd6t8HxjF9XTUKY4BZtUVuDC4ez/dKoIOPULgfHp32ZHro2I9dHELlMRfctqK+SElBsxRZYTnRD9oR6XLFvHeGe4OTs3fv+lJfJ7MZOqKI/k4FYdJ0mC8CFKdkKhPDD9sEMfLD5dzL/f20e4zPruxwzmsWihSFajXXesGvqXp5MWXgjoR4qXmt1NY4aJbu9B2XidFddDUwSOH+kNYAAAA", "web": "data:image/webp;base64,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" };
var universe = document.querySelector("#universe");
var viewport = document.querySelector("#viewport");
var marker = document.querySelector(".home-marker");
var detail = document.querySelector("#detail");
var status = document.querySelector("#status");
var sceneMessage = document.querySelector(".scene-message");
var playButton = document.querySelector("#play");
var fullscreen = document.querySelector("#fullscreen");
var motion = matchMedia("(prefers-reduced-motion: reduce)");
var compact = matchMedia("(max-aspect-ratio: 5/4)");
var TAU = Math.PI * 2;
var referenceWorldWidth = 12.14;
var layouts = {
  dark: {
    reference: { x: 615, y: 351.5, width: 1214, height: 683 },
    home: [626.3, 367.8, 137.8],
    satellites: [[272.3, 271.8, 15.8], [635.4, 125.9, 14.8], [1029.7, 288.5, 15.7], [378.8, 533, 16.6], [892, 538.8, 17]]
  },
  light: {
    reference: { x: 772.5, y: 440.5, width: 1531, height: 861 },
    home: [788.3, 443.3, 180.9],
    satellites: [[337.2, 313.3, 28.5], [747, 144.4, 26.8], [1234.6, 324, 30], [534, 658.7, 29.9], [1119.5, 661.7, 31.6]]
  }
};
var themeToggle = document.querySelector("#theme-toggle");
var themeMeta = document.querySelector('meta[name="theme-color"]');
var themeStorageKey = "a-better-me-color-theme";
var theme = "light";
function textureName(name) {
  return theme === "light" ? `light-${name}` : name;
}
var topics = [
  {
    id: "life",
    name: "\u751F\u6D3B\u7075\u611F",
    en: "LIFE & INSPIRATION",
    subtitle: "\u5728\u65E5\u5E38\u4E2D\u53D1\u73B0\u4E0D\u5E73\u51E1",
    description: "\u7559\u610F\u8857\u89D2\u7684\u5149\u5F71\u3001\u4E00\u6B21\u5BF9\u8BDD\u548C\u7A81\u7136\u5192\u51FA\u6765\u7684\u5FF5\u5934\u3002\u7528\u4E00\u5F20\u7167\u7247\u6216\u4E00\u53E5\u8BDD\u8BB0\u4E0B\u6765\uFF0C\u6162\u6162\u79EF\u6512\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7075\u611F\u3002",
    rgb: "108,244,243",
    color: 5894378,
    depth: 0.54,
    mobile: [-2.51, 1.45],
    tilt: -0.52
  },
  {
    id: "ai",
    name: "AI \u4EBA\u5DE5\u667A\u80FD",
    en: "ARTIFICIAL INTELLIGENCE",
    subtitle: "\u63A2\u7D22 AI \u4E0E\u4EBA\u7C7B\u534F\u4F5C\u7684\u672A\u6765",
    description: "\u628A\u4E00\u4E2A\u6A21\u7CCA\u7684\u60F3\u6CD5\u4EA4\u7ED9 AI\uFF0C\u4E00\u8D77\u8BD5\u51FA\u51E0\u79CD\u53EF\u80FD\u7684\u505A\u6CD5\u3002\u901A\u8FC7\u63D0\u95EE\u3001\u9A8C\u8BC1\u548C\u53CD\u590D\u8C03\u6574\uFF0C\u628A\u6709\u7528\u7684\u7ED3\u679C\u53D8\u6210\u81EA\u5DF1\u7684\u4F5C\u54C1\u3002",
    rgb: "179,121,255",
    color: 10976767,
    depth: -1.21,
    mobile: [0, 4.17],
    tilt: 0.08
  },
  {
    id: "web",
    name: "\u524D\u7AEF\u5F00\u53D1",
    en: "FRONT-END DEVELOPMENT",
    subtitle: "\u6784\u5EFA\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C",
    description: "\u4ECE\u9875\u9762\u7ED3\u6784\u5230\u4EA4\u4E92\u53CD\u9988\uFF0C\u6BCF\u4E2A\u7EC6\u8282\u90FD\u5F71\u54CD\u4F7F\u7528\u611F\u53D7\u3002\u7528 HTML\u3001CSS \u548C JavaScript \u628A\u60F3\u6CD5\u505A\u6210\u4E00\u4E2A\u80FD\u8BBF\u95EE\u3001\u80FD\u64CD\u4F5C\u7684\u754C\u9762\u3002",
    rgb: "91,172,255",
    color: 4695039,
    depth: 0.2,
    mobile: [2.38, 2.86],
    tilt: 0.47
  },
  {
    id: "product",
    name: "\u4EA7\u54C1\u601D\u8003",
    en: "PRODUCT THINKING",
    subtitle: "\u4ECE 0 \u5230 1 \u7684\u521B\u9020\u8FC7\u7A0B",
    description: "\u4ECE\u4E00\u4E2A\u5177\u4F53\u95EE\u9898\u5F00\u59CB\uFF0C\u60F3\u6E05\u695A\u8C01\u4F1A\u9047\u5230\u5B83\u3002\u505A\u4E00\u4E2A\u5C0F\u539F\u578B\u7ED9\u771F\u5B9E\u7528\u6237\u8BD5\u7528\uFF0C\u518D\u7528\u6536\u5230\u7684\u53CD\u9988\u51B3\u5B9A\u4E0B\u4E00\u6B65\u3002",
    rgb: "255,201,112",
    color: 16761446,
    depth: 0.84,
    mobile: [-2.38, -2.32],
    tilt: -0.39
  },
  {
    id: "design",
    name: "\u8BBE\u8BA1\u7F8E\u5B66",
    en: "DESIGN & AESTHETICS",
    subtitle: "\u8BA9\u6280\u672F\u4E0E\u7F8E\u597D\u878D\u5408",
    description: "\u7528\u6784\u56FE\u3001\u7559\u767D\u3001\u8272\u5F69\u548C\u52A8\u6548\u5F15\u5BFC\u6CE8\u610F\u529B\u3002\u8BA9\u9875\u9762\u4E0A\u7684\u4FE1\u606F\u5BB9\u6613\u627E\u5230\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u64CD\u4F5C\u7684\u7ED3\u679C\u4E00\u76EE\u4E86\u7136\u3002",
    rgb: "255,145,216",
    color: 16745167,
    depth: 0.57,
    mobile: [2.34, -3.34],
    tilt: 0.42
  }
];
var view;
var selected = -1;
var lastTopic = null;
var dots = detail.querySelector(".dots");
var titleMetrics = { width: 150, height: 52 };
var labelMetrics = /* @__PURE__ */ new Map([[marker, titleMetrics]]);
var labelObserver = new ResizeObserver((entries) => {
  for (const { target } of entries) {
    if (!target.offsetWidth || !target.offsetHeight) continue;
    Object.assign(labelMetrics.get(target), { width: target.offsetWidth, height: target.offsetHeight });
  }
});
labelObserver.observe(marker);
for (const [i2, topic] of topics.entries()) {
  topic.button = document.querySelector(`[data-topic="${topic.id}"]`);
  topic.plate = topic.button.querySelector(".nameplate");
  topic.label = { width: 148, height: 49 };
  topic.screen = {};
  topic.guide = document.createElement("span");
  topic.guide.className = "planet-guide";
  topic.guide.setAttribute("aria-hidden", "true");
  topic.button.append(topic.guide);
  labelMetrics.set(topic.plate, topic.label);
  labelObserver.observe(topic.plate);
  topic.button.addEventListener("click", () => {
    lastTopic = topic.button;
    selectTopic(i2);
  });
  topic.dot = document.createElement("button");
  topic.dot.type = "button";
  topic.dot.setAttribute("aria-label", topic.name);
  topic.dot.addEventListener("click", () => selectTopic(i2));
  dots.append(topic.dot);
}
function selectTopic(index) {
  selected = (index + topics.length) % topics.length;
  const topic = topics[selected];
  for (const item of topics) {
    item.button.classList.toggle("active", item === topic);
    item.dot.setAttribute("aria-current", String(item === topic));
  }
  detail.style.setProperty("--accent", topic.rgb);
  detail.querySelector("#detail-title").textContent = topic.name;
  detail.querySelector(".detail-en").textContent = topic.en;
  detail.querySelector(".detail-subtitle").textContent = topic.subtitle;
  detail.querySelector(".detail-description").textContent = topic.description;
  setDetailTexture(topic);
  if (!detail.open) {
    detail.showModal();
    detail.querySelector(".close").focus();
  }
  view?.focus(topic);
}
detail.querySelector(".close").addEventListener("click", () => detail.close());
detail.querySelector("#previous").addEventListener("click", () => selectTopic(selected - 1));
detail.querySelector("#next").addEventListener("click", () => selectTopic(selected + 1));
detail.addEventListener("click", (event) => {
  if (event.target === detail) detail.close();
});
detail.addEventListener("close", () => {
  for (const topic of topics) topic.button.classList.remove("active");
  view?.releaseFocus();
  lastTopic?.focus({ preventScroll: true });
});
detail.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    selectTopic(selected + (event.key === "ArrowRight" ? 1 : -1));
  }
});
function setDetailTexture(topic) {
  const name = textureName(topic.id);
  detail.querySelector("img").src = embeddedTextures[name];
}
function fitArtwork() {
  const frameWidth = Math.max(viewport.clientWidth, 1);
  const frameHeight = Math.max(viewport.clientHeight, 1);
  const reference = layouts[theme].reference;
  const scale = Math.min(frameWidth / reference.width, frameHeight / reference.height);
  return { frameWidth, frameHeight, width: reference.width * scale };
}
function showGraphicsError(message) {
  universe.classList.add("fallback");
  sceneMessage.textContent = message;
}
function setTheme(next) {
  theme = next;
  const light = theme === "light";
  document.documentElement.dataset.theme = theme;
  themeMeta.content = light ? "#f7f8fc" : "#0e1120";
  const label = light ? "\u5207\u6362\u5230\u6DF1\u8272\u4E3B\u9898" : "\u5207\u6362\u5230\u6D45\u8272\u4E3B\u9898";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  themeToggle.querySelector("span").textContent = light ? "\u6DF1\u8272" : "\u6D45\u8272";
  if (detail.open) setDetailTexture(topics[selected]);
  view?.setTheme();
}
try {
  const stored = localStorage.getItem(themeStorageKey);
  if (stored === "dark" || stored === "light") theme = stored;
} catch {
}
setTheme(theme);
window.addEventListener("message",(e)=>{const d=e&&e.data;if(d&&d.type==="km-theme"&&(d.theme==="light"||d.theme==="dark")&&d.theme!==theme)setTheme(d.theme);});
try{window.parent&&window.parent.postMessage({type:"km-ready"},"*")}catch(e){}
themeToggle.addEventListener("click", () => {
  setTheme(theme === "light" ? "dark" : "light");
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
  }
  status.textContent = theme === "light" ? "\u5DF2\u5207\u6362\u5230\u6D45\u8272\u4E3B\u9898" : "\u5DF2\u5207\u6362\u5230\u6DF1\u8272\u4E3B\u9898";
});
function worldPoint(x2, y2, z2 = 0) {
  const reference = layouts[theme].reference;
  const scale = reference.width / referenceWorldWidth;
  return new Ks((x2 - reference.x) / scale, (reference.y - y2) / scale, z2);
}
var labelDirections = [
  [1, 0],
  [-1, 0],
  [1, -1],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [0, -1],
  [0, 1]
];
function overlapArea(a2, b2) {
  const x2 = Math.min(a2.right + 4, b2.right) - Math.max(a2.left - 4, b2.left);
  const y2 = Math.min(a2.bottom + 4, b2.bottom) - Math.max(a2.top - 4, b2.top);
  return Math.max(0, x2) * Math.max(0, y2);
}
function nearestPoint(box, x2, y2) {
  return [
    Gs.clamp(x2, box.left, box.right),
    Gs.clamp(y2, box.top, box.bottom)
  ];
}
function fitLabel(topic, bounds, blocked, center) {
  const { x: x2, y: y2, radius } = topic.screen;
  const { width, height } = topic.label;
  const outward = Math.hypot(x2 - center.x, y2 - center.y) || 1;
  const previous = topic.labelSlot;
  let bestScore = Infinity;
  let bestBox;
  for (let row = 0; row < 6; row++) {
    const distance = radius + 8 + row * Math.max(18, height * 0.62);
    for (const [index, [dx, dy]] of labelDirections.entries()) {
      const left = Gs.clamp(x2 + (dx * distance - (1 - dx) * width / 2), bounds.left, bounds.right - width);
      const top = Gs.clamp(y2 + (dy * distance - (1 - dy) * height / 2), bounds.top, bounds.bottom - height);
      const box = { left, top, right: left + width, bottom: top + height };
      const [endX, endY] = nearestPoint(box, x2, y2);
      const connection = Math.hypot(endX - x2, endY - y2);
      const crowding = blocked.reduce((total, item) => total + overlapArea(box, item), 0);
      const inward = 11 * (1 - (dx * (x2 - center.x) + dy * (y2 - center.y)) / (outward * Math.hypot(dx, dy)));
      const switching = previous && (previous.index !== index || previous.row !== row) ? 14 : 0;
      const score = crowding * 60 + connection + inward + switching + row * 3;
      if (score < bestScore) {
        bestScore = score;
        bestBox = { ...box, index, row };
      }
    }
  }
  return bestBox;
}
function positionGuide(topic, box) {
  const { x: x2, y: y2, radius } = topic.screen;
  const [endX, endY] = nearestPoint(box, x2, y2);
  const angle = Math.atan2(endY - y2, endX - x2);
  const start = radius + 2;
  const length = Math.max(0, Math.hypot(endX - x2, endY - y2) - start - 2);
  const style = topic.guide.style;
  style.setProperty("--guide-length", `${length.toFixed(2)}px`);
  style.setProperty("--guide-transform", `translate(${(Math.cos(angle) * start).toFixed(2)}px,${(Math.sin(angle) * start).toFixed(2)}px) rotate(${angle.toFixed(4)}rad)`);
}
var sphereVertex = (
  /* glsl */
  `
  varying vec3 local;
  varying vec3 normalView;
  void main() {
    local = normalize(position);
    normalView = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
);
var sphereFragment = (
  /* glsl */
  `
  uniform sampler2D surface;
  uniform vec3 tint;
  varying vec3 local;
  varying vec3 normalView;
  void main() {
    vec3 p = normalize(local);
    vec3 n = normalize(normalView);
    vec2 uv = p.xy*.5+.5;
    vec3 albedo = texture2D(surface, uv).rgb;
    vec2 alternate = vec2(.5 + .39*p.z, .5 + .46*p.y);
    vec3 back = texture2D(surface, alternate).rgb * .7;
    albedo = mix(back, albedo, smoothstep(-.32,.35,p.z));
    float illumination = clamp(dot(n, normalize(vec3(-.35, .65, .7))), 0.0, 1.0);
    float rim = pow(1.0-max(0.,n.z),2.25);
    vec3 litColor = albedo*(.75+.65*illumination)
      + tint*(rim*(.17 + .64*illumination) + .013);
    gl_FragColor = vec4(litColor,1.);
    #include <colorspace_fragment>
  }
`
);
function makeSphere(radius, surface, tint) {
  const material = new Yn({
    vertexShader: sphereVertex,
    fragmentShader: sphereFragment,
    uniforms: {
      surface: { value: surface },
      tint: { value: new Qr(tint) }
    }
  });
  return new Dn(new zl(radius, 72, 48), material);
}
function haloTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  for (const [stop, alpha] of [[0, 1], [0.12, 0.71], [0.3, 0.31], [0.58, 0.1], [0.82, 0.025], [1, 0]]) {
    gradient.addColorStop(stop, `rgba(255,255,255,${alpha})`);
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  return new ah(canvas);
}
function halo(map, tint, size, opacity) {
  const material = new pa({
    map,
    color: tint,
    opacity,
    transparent: true,
    depthWrite: false,
    blending: g
  });
  const sprite = new za(material);
  sprite.scale.set(size, size, 1);
  return sprite;
}
function makeRing(inner, outer, tint, opacity) {
  const geometry = new Al(inner, outer, 200, 3);
  const material = new Yn({
    side: p,
    transparent: true,
    depthWrite: false,
    blending: g,
    uniforms: {
      inner: { value: inner },
      outer: { value: outer },
      tint: { value: new Qr(tint) },
      fade: { value: 1 },
      brightness: { value: opacity },
      time: { value: 0 },
      daylight: { value: 0 }
    },
    vertexShader: (
      /* glsl */
      `
      varying vec2 point;
      void main() {
        point = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }
    `
    ),
    fragmentShader: (
      /* glsl */
      `
      uniform float inner, outer, fade, brightness, time, daylight;
      uniform vec3 tint;
      varying vec2 point;
      float band(float x,float y,float w) { float offset = (x-y)/w; return exp(-offset*offset); }
      void main() {
        float radius = length(point);
        float t = (radius-inner)/(outer-inner);
        float angle = atan(point.y,point.x);
        float restrained = smoothstep(0.,.12,t)*(1.-smoothstep(.89,1.,t));
        float light = band(t,.43,.025)*.94 + band(t,.47,.10)*.28
          + band(t,.12,.009)*.4 + band(t,.62,.013)*.39
          + band(t,.82,.008)*.46 + band(t,.93,.007)*.55;
        light += (.035 + pow(.5 + .5*sin(t*680.+2.*sin(angle*4.)),4.)*.105) * restrained;
        light *= .60 + .40*cos(angle+.76) + .19*sin(angle*3.+time*.12);
        vec3 sunlit = mix(tint*.64, vec3(1.,.87,.66), band(t,.43,.095)*.88);
        vec3 twilight = mix(tint, vec3(1.,.83,.78), band(t,.43,.12)*.75);
        vec3 color = mix(twilight,sunlit,daylight);
        gl_FragColor = vec4(color, fade*brightness*light);
        #include <colorspace_fragment>
      }
    `
    )
  });
  return new Dn(geometry, material);
}
function path(points, color, opacity, dashed = false) {
  const geometry = new In().setFromPoints(points);
  const options = { color, opacity, transparent: true, depthWrite: false, blending: g };
  const material = dashed ? new Jl({ ...options, dashSize: 0.023, gapSize: 0.035 }) : new Ro(options);
  const line = new Do(geometry, material);
  line.computeLineDistances();
  return line;
}
function ellipse(rx, ry, angle, depth, segments = 200) {
  return Array.from({ length: segments + 1 }, (_2, i2) => {
    const a2 = i2 / segments * TAU;
    const x2 = Math.cos(a2) * rx;
    const y2 = Math.sin(a2) * ry;
    return new Ks(x2 * Math.cos(angle) - y2 * Math.sin(angle), x2 * Math.sin(angle) + y2 * Math.cos(angle), Math.sin(a2) * depth);
  });
}
function randomizer(seed) {
  return () => {
    seed = Math.imul(1664525, seed) + 1013904223 >>> 0;
    return seed / 4294967296;
  };
}
function makeStars(amount) {
  const random = randomizer(88273);
  const locations = [];
  const metrics = [];
  for (let i2 = 0; i2 < amount; i2++) {
    locations.push((random() - 0.5) * 18, (random() - 0.5) * 17, -7 - random() * 8);
    metrics.push(i2 % 18 === 0 ? 9.2 : 0.75 + random() * 1.55, random(), random());
  }
  const geometry = new In();
  geometry.setAttribute("position", new wn(locations, 3));
  geometry.setAttribute("metric", new wn(metrics, 3));
  const material = new Yn({
    transparent: true,
    depthWrite: false,
    blending: g,
    uniforms: { time: { value: 0 }, fade: { value: 0.2 }, pixelRatio: { value: 1 }, daylight: { value: 0 } },
    vertexShader: (
      /* glsl */
      `
      attribute vec3 metric;
      uniform float time, pixelRatio;
      varying vec3 brightness;
      void main() {
        float cycle = .5+.5*sin(time*(.72+metric.y*1.33)+metric.y*75.);
        float flare = step(6.,metric.x)*pow(smoothstep(.60,.99,cycle),2.);
        brightness = vec3((.22+.69*cycle)*(.45+.55*metric.z),metric.y,flare);
        gl_PointSize = metric.x*(.82+.36*flare)*pixelRatio;
        gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.);
      }
    `
    ),
    fragmentShader: (
      /* glsl */
      `
      uniform float fade, daylight;
      varying vec3 brightness;
      void main() {
        vec2 p = abs(gl_PointCoord-.5)*2.;
        float d = length(p);
        float core = exp(-d*d*6.7)*brightness.x;
        float rays = exp(-min(p.x,p.y)*18.-max(p.x,p.y)*3.7)*brightness.z;
        float halo = exp(-d*d*3.7)*brightness.z*.16;
        float alpha = (core*.78+rays*.60+halo)*fade*(1.-smoothstep(.63,1.,d));
        vec3 blue = vec3(.64+brightness.y*.33,.76+brightness.y*.23,1.);
        vec3 dawn = mix(vec3(.46,.54,.77),vec3(.86,.64,.34),brightness.y);
        gl_FragColor = vec4(mix(blue,dawn,daylight),alpha);
      }
    `
    )
  });
  return new Qo(geometry, material);
}
function makeMeteor() {
  const material = new Yn({
    transparent: true,
    depthWrite: false,
    blending: g,
    uniforms: {
      strength: { value: 0 },
      tint: { value: new Qr(10468095) },
      coreTint: { value: new Qr(15923199) }
    },
    vertexShader: (
      /* glsl */
      `
      varying vec2 point;
      void main() {
        point = uv;
        gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.);
      }
    `
    ),
    fragmentShader: (
      /* glsl */
      `
      uniform float strength;
      uniform vec3 tint, coreTint;
      varying vec2 point;
      void main() {
        float y = abs(point.y-.5)*2.;
        float headX = (point.x-.87)/.075;
        float headY = y/.37;
        float head = exp(-headX*headX-headY*headY);
        float tail = pow(point.x,1.8)*(1.-smoothstep(.88,1.,point.x));
        float streak = exp(-y*y*77.);
        float diffuse = exp(-y*y*9.);
        float alpha = (tail*(streak*.72+diffuse*.20)+head*.86)*strength;
        gl_FragColor = vec4(mix(tint,coreTint,head),min(alpha,1.));
        #include <colorspace_fragment>
      }
    `
    )
  });
  const meteor = new Dn(new _l(1, 1), material);
  meteor.name = "meteor";
  meteor.visible = false;
  return meteor;
}
async function createExperience() {
  const renderer = new ca2({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = Ze;
  viewport.append(renderer.domElement);
  const scene = new la();
  const camera = new jc(-6.07, 6.07, 3.415, -3.415, 0.1, 85);
  camera.position.z = 24;
  const system = new ra();
  system.rotation.order = "YXZ";
  scene.add(system);
  const loader = new Tc();
  const baseNames = ["terrain", ...topics.map((topic) => topic.id)];
  const names = [...baseNames, ...baseNames.map((name) => `light-${name}`)];
  const textures = Object.fromEntries(await Promise.all(names.map(async (name) => {
    const image = await loader.loadAsync(embeddedTextures[name]);
    image.colorSpace = Ze;
    return [name, image];
  })));
  const glow = haloTexture();
  const home = makeSphere(1, textures.terrain, 8232447);
  const light = halo(glow, 4548607, 6.8, 0);
  const underside = halo(glow, 6651647, 4.7, 0);
  underside.scale.y = 1.4;
  const mainRing = makeRing(1.46, 2.82, 7902719, 0.96);
  system.add(light, underside, home, mainRing);
  const stars = makeStars(2250);
  stars.name = "twinkling stars";
  scene.add(stars);
  const meteors = [0.75, 1.07, 1.52].map((nextAt) => {
    const mesh = makeMeteor();
    scene.add(mesh);
    return { mesh, nextAt, flight: null };
  });
  const orbits = [
    path(ellipse(3.78, 1.1, 0.25, 1.84), 7904767, 0.36),
    path(ellipse(4.14, 1.65, -0.1, 2.05), 7048697, 0.31, true),
    path(ellipse(4.36, 1.2, 0.52, 2.4), 7435769, 0.38, true),
    path(ellipse(2.63, 2.63, 0, 0.12), 7506906, 0.26),
    path(ellipse(1.97, 1.97, 0, 0.12), 8560105, 0.22),
    path(ellipse(3, 2.1, -0.69, 1.37), 8156662, 0.22, true)
  ];
  const darkOrbits = orbits.map((line) => line.material.color.clone());
  const lightOrbits = [12946741, 11768745, 12622686, 14003054, 11185353, 9078964];
  const orbitGroup = new ra();
  orbitGroup.add(...orbits);
  system.add(orbitGroup);
  const motes = [
    halo(glow, 12637695, 0.24, 0.32),
    halo(glow, 13417215, 0.17, 0.28),
    halo(glow, 9943807, 0.22, 0.35)
  ];
  system.add(...motes);
  for (const topic of topics) {
    const texture = textures[topic.id];
    topic.anchor = new ra();
    topic.sphere = makeSphere(1, texture, topic.color);
    topic.glow = halo(glow, topic.color, 0.93, 0);
    topic.glow.position.z = -0.22;
    topic.ring = makeRing(0.2, 0.43, topic.color, 0.76);
    topic.ring.rotation.set(1.18, 0, topic.tilt, "ZXY");
    topic.anchor.add(topic.glow, topic.sphere, topic.ring);
    topic.natal = new Ks();
    system.add(topic.anchor);
  }
  const size = { width: 1, height: 1 };
  const target = { x: 0, y: 0, zoom: 1 };
  const current = { x: 0, y: 0, zoom: 1 };
  const projected = new Ks();
  const focusPoint = new Ks();
  const homePoint = new Ks();
  const visibleHomeCenter = new Ks();
  const homeScreen = {};
  const desiredCenter = new Ks();
  let activeTopic = null;
  let auto = false;
  let suspended = false;
  let frame = 0;
  let previousTime = performance.now();
  let animationTime = 0;
  let skyTime = 0;
  const randomSky = randomizer(39271);
  let width = 6.07;
  let height = 3.415;
  let oldCamera = null;
  const pointers = /* @__PURE__ */ new Map();
  let dragDistance = 0;
  let pinch = 0;
  function resize() {
    const artwork = fitArtwork();
    size.width = artwork.frameWidth;
    size.height = artwork.frameHeight;
    const aspect = size.width / size.height;
    const worldUnitsPerPixel = compact.matches ? Math.max(3.42 / size.width, 4.85 / size.height) * 2 : referenceWorldWidth / artwork.width;
    width = worldUnitsPerPixel * size.width / 2;
    height = width / aspect;
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    const dpr = Math.min(devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(size.width, size.height, false);
    stars.material.uniforms.pixelRatio.value = dpr;
    universe.classList.toggle("compact", compact.matches);
    universe.style.setProperty("--type-scale", compact.matches ? Math.min(1, size.width / 390) : Gs.clamp(artwork.width / layouts.dark.reference.width, 0.54, 1.75));
    home.position.copy(compact.matches ? new Ks(0, 0.5, 0) : homePoint);
    mainRing.position.copy(home.position);
    light.position.copy(home.position).z = -1.7;
    underside.position.copy(home.position).add(new Ks(0, -1.34, -0.6));
    orbitGroup.scale.set(compact.matches ? 0.74 : 1, compact.matches ? 1.13 : 1, 1);
  }
  function setRingDaylight(ring, lightMode) {
    ring.material.uniforms.daylight.value = Number(lightMode);
    ring.material.blending = lightMode ? y : g;
  }
  function updatePalette() {
    const layout = layouts[theme];
    const lightMode = theme === "light";
    const [x2, y2, radius] = layout.home;
    const scale = layout.reference.width / referenceWorldWidth;
    homePoint.copy(worldPoint(x2, y2));
    home.scale.setScalar(radius / scale);
    home.material.uniforms.surface.value = textures[textureName("terrain")];
    home.material.uniforms.tint.value.setHex(lightMode ? 16766347 : 8232447);
    mainRing.rotation.set(1.32, 0, lightMode ? 0.268 : 0.219, "ZXY");
    mainRing.scale.setScalar(lightMode ? 1.04 : 1);
    mainRing.material.uniforms.tint.value.setHex(lightMode ? 16759638 : 7902719);
    setRingDaylight(mainRing, lightMode);
    light.material.color.setHex(lightMode ? 16762997 : 4548607);
    underside.material.color.setHex(lightMode ? 16770470 : 6651647);
    const blending = lightMode ? y : g;
    light.material.blending = blending;
    underside.material.blending = blending;
    stars.material.blending = blending;
    stars.material.uniforms.daylight.value = Number(lightMode);
    for (const { mesh } of meteors) {
      mesh.material.blending = blending;
      mesh.material.uniforms.tint.value.setHex(lightMode ? 12423501 : 10468095);
      mesh.material.uniforms.coreTint.value.setHex(lightMode ? 14924141 : 15923199);
    }
    orbits.forEach((line, i2) => {
      line.material.blending = blending;
      if (lightMode) line.material.color.setHex(lightOrbits[i2]);
      else line.material.color.copy(darkOrbits[i2]);
    });
    motes.forEach((mote, i2) => {
      mote.material.blending = blending;
      mote.material.color.setHex(lightMode ? [15120236, 16243883, 13408586][i2] : [12637695, 13417215, 9943807][i2]);
    });
    topics.forEach((topic, i2) => {
      const [px, py, planetRadius] = layout.satellites[i2];
      const texture = textures[textureName(topic.id)];
      topic.natal.copy(worldPoint(px, py, topic.depth));
      topic.sphere.scale.setScalar(planetRadius / scale);
      topic.sphere.material.uniforms.surface.value = texture;
      topic.ring.scale.setScalar(lightMode ? 1.25 : 1);
      setRingDaylight(topic.ring, lightMode);
      topic.glow.material.blending = blending;
    });
    if (!universe.classList.contains("fallback")) resize();
  }
  function setAuto(next) {
    auto = next;
    playButton.setAttribute("aria-pressed", String(auto));
    playButton.setAttribute("aria-label", auto ? "\u6682\u505C\u81EA\u52A8\u5DE1\u822A" : "\u5F00\u542F\u81EA\u52A8\u5DE1\u822A");
  }
  function reset(announce = true) {
    const pitch = 0.23;
    Object.assign(target, { x: pitch, y: 0, zoom: 1 });
    Object.assign(current, target);
    camera.position.set(0, 0, 24);
    animationTime = 0;
    activeTopic = null;
    oldCamera = null;
    for (const topic of topics) {
      topic.labelSlot = { index: topic.natal.x < 0 ? 1 : 0, row: 0 };
    }
    setAuto(false);
    if (announce) status.textContent = "\u5DF2\u56DE\u5230\u521D\u59CB 3D \u89C6\u89D2";
  }
  function showProjection(element, mesh, screen, topic) {
    mesh.getWorldPosition(projected);
    const worldRadius = topic ? topic.sphere.scale.x * mesh.scale.x : home.scale.x;
    let occluded = false;
    if (topic) {
      const dx = projected.x - visibleHomeCenter.x;
      const dy = projected.y - visibleHomeCenter.y;
      const disc = home.scale.x ** 2 - dx * dx - dy * dy;
      occluded = disc > 0 && projected.z + worldRadius < visibleHomeCenter.z + Math.sqrt(disc);
    }
    projected.project(camera);
    screen.x = (projected.x * 0.5 + 0.5) * size.width;
    screen.y = (0.5 - projected.y * 0.5) * size.height;
    screen.radius = worldRadius * current.zoom * size.width / (2 * width);
    element.style.setProperty("--x", `${screen.x.toFixed(2)}px`);
    element.style.setProperty("--y", `${screen.y.toFixed(2)}px`);
    if (topic) {
      const padding = screen.radius;
      const outside = screen.x < -padding || screen.x > size.width + padding || screen.y < -padding || screen.y > size.height + padding;
      element.hidden = outside || occluded;
    }
  }
  function placeTourLabels() {
    const edge = 8;
    const bounds = { left: edge, top: edge, right: size.width - edge, bottom: size.height - (compact.matches ? 82 : 54) };
    const visible = topics.filter((topic) => !topic.button.hidden);
    const blocked = visible.map(({ screen: { x: x2, y: y2, radius } }) => ({
      left: x2 - radius,
      top: y2 - radius,
      right: x2 + radius,
      bottom: y2 + radius
    }));
    if (!activeTopic) {
      const top = homeScreen.y - titleMetrics.height * (theme === "light" ? 0.58 : 0.74);
      blocked.push({
        left: homeScreen.x - titleMetrics.width / 2,
        top,
        right: homeScreen.x + titleMetrics.width / 2,
        bottom: top + titleMetrics.height
      });
    }
    for (const topic of visible) {
      const box = fitLabel(topic, bounds, blocked, homeScreen);
      topic.labelSlot = box;
      blocked.push(box);
      topic.button.style.setProperty(
        "--label-shift",
        `translate(${(box.left - topic.screen.x).toFixed(2)}px,${(box.top - topic.screen.y).toFixed(2)}px)`
      );
      positionGuide(topic, box);
    }
  }
  function moveMeteors() {
    const unit = width * 2 / (size.width * camera.zoom);
    const tailPixels = Gs.clamp(size.width * 0.104, 68, 185);
    for (const [index, track] of meteors.entries()) {
      const meteor = track.mesh;
      meteor.visible = false;
      if (motion.matches) continue;
      if (skyTime >= track.nextAt) {
        const direction = track.flight ? randomSky() < 0.5 ? -1 : 1 : index === 1 ? -1 : 1;
        track.flight = {
          start: skyTime,
          duration: 0.97 + randomSky() * 0.46,
          x: direction > 0 ? 0.07 + randomSky() * 0.21 : 0.74 + randomSky() * 0.2,
          y: 0.06 + index * 0.105 + randomSky() * 0.135,
          dx: direction * (0.21 + randomSky() * 0.22),
          dy: 0.12 + randomSky() * 0.13
        };
        track.nextAt = skyTime + track.flight.duration + 3.9 + randomSky() * 4.2;
      }
      const flight = track.flight;
      if (!flight) continue;
      const progress = (skyTime - flight.start) / flight.duration;
      if (progress >= 1) continue;
      const variety = 1 - index * 0.11;
      const angle = Math.atan2(-flight.dy * size.height, flight.dx * size.width);
      const trail = tailPixels * unit * variety;
      const headX = camera.position.x + ((flight.x + flight.dx * progress) * 2 - 1) * width / camera.zoom;
      const headY = camera.position.y + (1 - (flight.y + flight.dy * progress) * 2) * height / camera.zoom;
      meteor.position.set(headX - Math.cos(angle) * trail * 0.37, headY - Math.sin(angle) * trail * 0.37, -5.8);
      meteor.scale.set(trail, 9.5 * unit * variety, 1);
      meteor.rotation.z = angle;
      meteor.material.uniforms.strength.value = Math.sin(Math.PI * progress) ** 0.65 * variety * (theme === "light" ? 0.76 : 1);
      meteor.visible = true;
    }
  }
  function draw(now) {
    const dt2 = Gs.clamp((now - previousTime) * 1e-3, 0, 0.06);
    previousTime = now;
    const still = motion.matches && !auto;
    if (!still) animationTime += dt2;
    if (!motion.matches) skyTime += dt2;
    if (auto && !activeTopic) {
      target.y += dt2 * 0.21;
      target.x = Math.sin(animationTime * 0.32) * 0.31;
    }
    const adjust = still ? 1 : 1 - Math.exp(-dt2 * 8);
    current.x = Gs.lerp(current.x, target.x, adjust);
    current.y = Gs.lerp(current.y, target.y, adjust);
    current.zoom = Gs.lerp(current.zoom, target.zoom, adjust);
    system.rotation.set(current.x, current.y, 0, "YXZ");
    home.rotation.y = 0.18 + Math.sin(animationTime * 0.16) * 0.22;
    mainRing.material.uniforms.time.value = animationTime;
    const daytime = theme === "light";
    light.material.opacity = daytime ? 0.39 : 0.47;
    underside.material.opacity = daytime ? 0.46 : 0.59;
    for (const [i2, line] of orbits.entries()) line.material.opacity = i2 === 0 ? 0.53 : i2 === 1 ? 0.45 : 0.26;
    stars.material.uniforms.time.value = skyTime;
    stars.material.uniforms.fade.value = daytime ? 0.58 : 0.97;
    stars.rotation.y = current.y * 0.075;
    stars.rotation.x = current.x * 0.11;
    for (const [i2, topic] of topics.entries()) {
      const anchor = topic.anchor;
      if (compact.matches) anchor.position.set(topic.mobile[0], topic.mobile[1], topic.depth * 0.6);
      else anchor.position.copy(topic.natal);
      const bob = still ? 0 : 0.12 * Math.sin(animationTime * (0.57 + i2 * 0.05) + i2 * 1.2);
      anchor.position.y += bob;
      anchor.position.x += bob * 0.46;
      topic.sphere.rotation.y = Math.sin(animationTime * 0.25 + i2) * 0.48;
      topic.glow.material.opacity = (topic === activeTopic ? 0.91 : 0.64) * (daytime ? 0.58 : 1);
      const scale = topic === activeTopic ? 1.6 : compact.matches ? 1.21 : 1;
      anchor.scale.lerp(new Ks(scale, scale, scale), adjust);
    }
    for (const [i2, mote] of motes.entries()) {
      const angle = animationTime * (0.32 + i2 * 0.07) + 1.95 * i2;
      mote.position.set(Math.cos(angle) * 3.77, Math.sin(angle) * 1.1, Math.sin(angle) * 1.84);
      mote.position.applyAxisAngle(Rr.DEFAULT_UP.clone().set(0, 0, 1), 0.25);
      mote.material.opacity = 0.61;
    }
    system.updateMatrixWorld(true);
    if (activeTopic) {
      activeTopic.anchor.getWorldPosition(focusPoint);
      desiredCenter.set(
        focusPoint.x + (compact.matches ? 0 : width * 0.29) / current.zoom,
        focusPoint.y - (compact.matches ? height * 0.35 : 0) / current.zoom,
        0
      );
    } else desiredCenter.set(0, 0, 0);
    camera.position.x = Gs.lerp(camera.position.x, desiredCenter.x, adjust);
    camera.position.y = Gs.lerp(camera.position.y, desiredCenter.y, adjust);
    camera.zoom = current.zoom;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    moveMeteors();
    home.getWorldPosition(visibleHomeCenter);
    showProjection(marker, home, homeScreen);
    marker.style.opacity = activeTopic ? 0 : 1;
    for (const topic of topics) showProjection(topic.button, topic.anchor, topic.screen, topic);
    placeTourLabels();
    renderer.render(scene, camera);
    frame = requestAnimationFrame(draw);
  }
  function focus(topic) {
    if (!activeTopic) oldCamera = { ...target };
    activeTopic = topic;
    target.zoom = compact.matches ? 1.36 : 1.68;
  }
  function releaseFocus() {
    activeTopic = null;
    if (!oldCamera) return;
    Object.assign(target, { x: oldCamera.x, y: oldCamera.y, zoom: oldCamera.zoom });
    oldCamera = null;
  }
  function zoomBy(factor) {
    target.zoom = Gs.clamp(target.zoom * factor, 0.65, 2.3);
  }
  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    viewport.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, [event.clientX, event.clientY]);
    if (pointers.size === 1) dragDistance = 0;
    if (pointers.size === 2) {
      const [a2, b2] = pointers.values();
      pinch = Math.hypot(a2[0] - b2[0], a2[1] - b2[1]);
    }
  });
  viewport.addEventListener("pointermove", (event) => {
    const old = pointers.get(event.pointerId);
    if (!old) return;
    pointers.set(event.pointerId, [event.clientX, event.clientY]);
    if (pointers.size >= 2) {
      const [a2, b2] = pointers.values();
      const distance = Math.hypot(a2[0] - b2[0], a2[1] - b2[1]);
      if (pinch > 4) zoomBy(distance / pinch);
      pinch = distance;
      return;
    }
    const dx = event.clientX - old[0];
    const dy = event.clientY - old[1];
    dragDistance += Math.hypot(dx, dy);
    if (dragDistance < 3) return;
    setAuto(false);
    target.y += dx * 55e-4;
    target.x = Gs.clamp(target.x + dy * 55e-4, -1.15, 1.15);
  });
  for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) {
    viewport.addEventListener(type, (event) => pointers.delete(event.pointerId));
  }
  universe.addEventListener("wheel", (event) => {
    if (detail.open) return;
    event.preventDefault();
    zoomBy(Math.exp(-Gs.clamp(event.deltaY, -140, 140) * 11e-4));
  }, { passive: false });
  window.addEventListener("keydown", (event) => {
    if (detail.open || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === "+" || event.key === "=") zoomBy(1.13);
    else if (event.key === "-") zoomBy(1 / 1.13);
    else if (event.key === "0") reset();
    else if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      setAuto(false);
      if (event.key === "ArrowLeft") target.y -= 0.17;
      if (event.key === "ArrowRight") target.y += 0.17;
      if (event.key === "ArrowUp") target.x = Math.max(-1.15, target.x - 0.13);
      if (event.key === "ArrowDown") target.x = Math.min(1.15, target.x + 0.13);
    } else return;
    event.preventDefault();
  });
  document.querySelector("#reset").addEventListener("click", () => reset());
  playButton.addEventListener("click", () => setAuto(!auto));
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    suspended = true;
    cancelAnimationFrame(frame);
    setAuto(false);
    showGraphicsError("3D \u753B\u9762\u5DF2\u4E2D\u65AD\uFF0C\u6B63\u5728\u7B49\u5F85\u6D4F\u89C8\u5668\u6062\u590D\u3002");
  });
  renderer.domElement.addEventListener("webglcontextrestored", () => {
    suspended = false;
    universe.classList.remove("fallback");
    resize();
    reset(false);
    previousTime = performance.now();
    frame = requestAnimationFrame(draw);
  });
  function animateWhenVisible() {
    cancelAnimationFrame(frame);
    if (!document.hidden && !suspended) {
      previousTime = performance.now();
      frame = requestAnimationFrame(draw);
    }
  }
  document.addEventListener("visibilitychange", animateWhenVisible);
  updatePalette();
  reset(false);
  universe.classList.add("ready");
  draw(performance.now());
  return { focus, releaseFocus, resize, setTheme: updatePalette };
}
fullscreen.hidden = !document.fullscreenEnabled;
fullscreen.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await universe.requestFullscreen();
  } catch {
    status.textContent = "\u6D4F\u89C8\u5668\u65E0\u6CD5\u5207\u6362\u5168\u5C4F";
  }
});
function syncSize() {
  if (view && !universe.classList.contains("fallback")) view.resize();
}
var sizeObserver = new ResizeObserver(syncSize);
sizeObserver.observe(viewport);
document.addEventListener("fullscreenchange", () => {
  fullscreen.setAttribute("aria-label", document.fullscreenElement ? "\u9000\u51FA\u5168\u5C4F" : "\u8FDB\u5165\u5168\u5C4F");
  syncSize();
});
try {
  view = await createExperience();
} catch (error) {
  console.warn("3D scene could not start", error);
  showGraphicsError("\u65E0\u6CD5\u542F\u52A8 3D\u3002\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668\u6253\u5F00\u3002");
}
