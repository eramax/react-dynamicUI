//import React from 'react'

export default class Utils {
  static has(obj, varName) {
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
    if (Utils.has(prop, 'Values')) str += prop['Values']
    if (Utils.has(prop, 'Indexs')) {
      str += prop['Indexs'].map(item => handler.getVar2(scope + '.' + item))
    }
    if (Utils.has(prop, 'Funcs')) {
      prop['Funcs'].map(
        item => (
          console.log(item.FuncName),
          handler
            [item.FuncName]
            //Utils.FuncParms(item.Paramaters, handler, scope)
            ()
        )
      )
    }
    return str
  }

  static FuncParms = (Paramaters, handler, scope) => {
    let params = {}
    for (let key in Paramaters) {
      params['inp'] = Utils.PropVal('Friends', handler, scope)
    }
    console.log(params)
    return params
  }

  static PropFunCall = (prop, handler, scope) => () =>
    prop.map(item => handler[item.FuncName]())

  static IsVoidComponent = TagType =>
    Utils.voidComponents.indexOf(TagType) !== -1

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
