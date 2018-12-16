export default class Utils {
  static has(obj, varName) {
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
  static PropVal = (prop, handler) => {
    let str = ''
    if (Utils.has(prop, 'Values')) str += prop['Values']
    if (Utils.has(prop, 'Funcs')) {
      prop['Funcs'].map(
        item => (console.log(item.FuncName), handler[item.FuncName]())
      )
    }
    return str
  }

  static PropFunCall = (prop, handler) => () =>
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
