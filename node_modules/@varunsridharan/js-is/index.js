import { _isArray, _obj } from "@varunsridharan/js-vars";

export function isObjectType( data, type ) {
	type = `[object ${type}]` || `[object]`;
	return ( _obj.prototype.toString.call( data ) === type );
}

export function isType( data, type ) {
	return ( typeof data === type );
}

export function isNodeType( x, type ) {
	return !!x && x.nodeType === type;
}

export function isObject( value ) {
	return isType( value, 'object' );
}

export function isNull( value ) {
	return value === null;
}

export function isArguments( value ) {
	return isObjectType( value, 'Arguments' ) || ( !isNull( value ) && isObject( value ) && 'callee' in value );
}

export function isArray( value ) {
	return ( _isArray && _isArray( value ) || isObjectType( value, 'Array' ) );
}

export function isBoolean( value ) {
	return value === true || value === false || isObjectType( value, 'Boolean' );
}

export function isTrue( value ) {
	return value === true;
}

export function isFalse( value ) {
	return value === false;
}

export function isDate( value ) {
	return ( isObjectType( value, 'Date' ) );
}

export function isError( value ) {
	return ( isObjectType( value, 'Error' ) );
}

export function isFunction( value ) {
	return ( isObjectType( value, 'Function' ) || isType( value, 'function' ) );
}

export function isNan( value ) {
	return Number.isNaN( value );
}

export function isNumber( value ) {
	return isType( value, 'number' );
}

export function isNumeric( value ) {
	return Number.isFinite( value );
}

export function isString( value ) {
	return isObjectType( value, 'String' );
}

export function isUndefined( value ) {
	return ( value === void 0 || isType( value, 'undefined' ) );
}

export function isPlainObject( value ) {
	if( !isType( value, 'object' ) || isNull( value ) ) {
		return false;
	}
	const proto = _obj.getPrototypeOf( value );
	return isNull( proto ) || proto === _obj.prototype;
}

export function isWindow( x ) {
	return !!x && x === x.window;
}

export function isElement( x ) {
	return isNodeType( x, 1 );
}

export function isDocument( x ) {
	return isNodeType( x, 9 );
}
