/**
 * Array Related Vars.
 */
export const Arr        = Array;
export const _Arrayprop = Arr.prototype;
export const _concat    = _Arrayprop.concat;
export const _filter    = _Arrayprop.filter;
export const _indexOf   = _Arrayprop.indexOf;
export const _map       = _Arrayprop.map;
export const _push      = _Arrayprop.push;
export const _some      = _Arrayprop.some;
export const _slice     = _Arrayprop.slice;
export const _splice    = _Arrayprop.splice;
export const _isArray   = Arr.isArray;

/**
 * Object Related Vars
 */
export const _obj = Object;


/**
 * General Vars
 */
export const win    = window;
export const doc    = win.document;
export const docEle = doc.documentElement;
export const celem  = doc.createElement.bind( doc );
export const body   = doc.body;
