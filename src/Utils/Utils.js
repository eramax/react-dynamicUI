//import React from 'react'
import set from 'set-value'

export default class Utils {
  static has = (obj, varName) => {
    // if (Utils.IsArray(obj)) return obj.indexOf(varName) || null
    if (typeof obj === 'undefined' || obj === null || !(varName in obj))
      return null
    return obj[varName]
  }
  static IsFunc = x => {
    return typeof x === 'function'
  }
  static IsArray = x => {
    return x.constructor === Array
  }
  static PropVal = (prop, handler, scope) => {
    let str = ''
    if (Utils.has(prop, 'Values')) {
      prop['Values'].map(item => (str += item + ' '))
    }
    if (Utils.has(prop, 'Indexs')) {
      str +=
        prop['Indexs'].map(item => handler.getVar(scope + '.' + item)) + ' '
    }
    if (Utils.has(prop, 'Funcs')) {
      str += prop['Funcs'].map(
        item =>
          handler[item.FuncName](
            Utils.FuncParms(item.Paramaters, handler, scope)
          ) + ' '
      )
    }
    return str.trimEnd()
  }

  static FuncParms = (Paramaters, handler, scope) => {
    let params = {}
    let idx
    Paramaters.map(
      item => (
        (idx = Utils.TrimIndex(scope + '.' + String(item.Index))),
        (params[item.ParameterName] = item.SendByRefence
          ? idx
          : item.DefaultVal || handler.getVar(idx))
      )
    )
    return params
  }
  static TrimIndex = s => (s[s.length - 1] === '.' ? s.slice(0, -1) : s)

  static PropFunCall = (prop, handler, scope) => () =>
    prop.map(item => Utils.FuncCaller(item, handler, scope))

  static FuncCaller(func, handler, scope) {
    handler[func.FuncName](Utils.FuncParms(func.Paramaters, handler, scope))
    if ('NextFuncs' in func)
      func.NextFuncs.map(next => Utils.FuncCaller(next, handler, scope))
  }

  static IsVoidComponent = TagType =>
    Utils.voidComponents.indexOf(TagType) !== -1

  static getVal = (p, o) =>
    p.reduce((xs, x) => (xs && (xs[x] || xs[x] === 0) ? xs[x] : null), o)

  static getter = (store, s) => {
    s = s.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
    s = s.replace(/^\./, '') // strip a leading dot
    var a = s.split('.')
    return Utils.getVal(a, store)
  }

  static Setter = (store, s, newVal) => {
    set(store, s, newVal)
    return store
  }
  static Remover = (o, s) => {
    let b = o
    s = s.replace(/\[(\w+)\]/g, '.$1') // convert indexes to properties
    s = s.replace(/^\./, '') // strip a leading dot
    var a = s.split('.')
    var k
    for (var i = 0, n = a.length; i < n; ++i) {
      k = a[i]
      if (k in o) {
        if (i === n - 1) {
          o = o.splice(k, 1)
        } else o = o[k]
      } else {
        return
      }
    }
    return b
  }

  static voidComponents = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
  ]
}
