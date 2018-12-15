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
    return str
  }
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
