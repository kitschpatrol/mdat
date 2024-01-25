#!/usr/bin/env node
var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __require = /* @__PURE__ */ ((x) =>
	typeof require !== 'undefined'
		? require
		: typeof Proxy !== 'undefined'
			? new Proxy(x, {
					get: (a, b) => (typeof require !== 'undefined' ? require : a)[b],
				})
			: x)(function (x) {
	if (typeof require !== 'undefined') return require.apply(this, arguments)
	throw Error('Dynamic require of "' + x + '" is not supported')
})
var __commonJS = (cb, mod) =>
	function __require2() {
		return (
			mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
		)
	}
var __export = (target, all3) => {
	for (var name in all3) __defProp(target, name, { get: all3[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === 'object') || typeof from === 'function') {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
				})
	}
	return to
}
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		// If the importer is in node compatibility mode or this is not an ESM
		// file that has been converted to a CommonJS file using a Babel-
		// compatible transform (i.e. "__esModule" has not been set), then set
		// "default" to the CommonJS "module.exports" for node compatibility.
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, 'default', { value: mod, enumerable: true })
			: target,
		mod,
	)
)

// ../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/unicode.js
var require_unicode = __commonJS({
	'../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/unicode.js'(exports, module) {
		module.exports.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/
		module.exports.ID_Start =
			/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/
		module.exports.ID_Continue =
			/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	},
})

// ../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/util.js
var require_util = __commonJS({
	'../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/util.js'(exports, module) {
		var unicode = require_unicode()
		module.exports = {
			isSpaceSeparator(c) {
				return typeof c === 'string' && unicode.Space_Separator.test(c)
			},
			isIdStartChar(c) {
				return (
					typeof c === 'string' &&
					((c >= 'a' && c <= 'z') ||
						(c >= 'A' && c <= 'Z') ||
						c === '$' ||
						c === '_' ||
						unicode.ID_Start.test(c))
				)
			},
			isIdContinueChar(c) {
				return (
					typeof c === 'string' &&
					((c >= 'a' && c <= 'z') ||
						(c >= 'A' && c <= 'Z') ||
						(c >= '0' && c <= '9') ||
						c === '$' ||
						c === '_' ||
						c === '\u200C' ||
						c === '\u200D' ||
						unicode.ID_Continue.test(c))
				)
			},
			isDigit(c) {
				return typeof c === 'string' && /[0-9]/.test(c)
			},
			isHexDigit(c) {
				return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
			},
		}
	},
})

// ../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/parse.js
var require_parse = __commonJS({
	'../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/parse.js'(exports, module) {
		var util2 = require_util()
		var source
		var parseState
		var stack
		var pos
		var line
		var column
		var token
		var key
		var root2
		module.exports = function parse2(text5, reviver) {
			source = String(text5)
			parseState = 'start'
			stack = []
			pos = 0
			line = 1
			column = 0
			token = void 0
			key = void 0
			root2 = void 0
			do {
				token = lex()
				parseStates[parseState]()
			} while (token.type !== 'eof')
			if (typeof reviver === 'function') {
				return internalize({ '': root2 }, '', reviver)
			}
			return root2
		}
		function internalize(holder, name, reviver) {
			const value = holder[name]
			if (value != null && typeof value === 'object') {
				if (Array.isArray(value)) {
					for (let i = 0; i < value.length; i++) {
						const key2 = String(i)
						const replacement = internalize(value, key2, reviver)
						if (replacement === void 0) {
							delete value[key2]
						} else {
							Object.defineProperty(value, key2, {
								value: replacement,
								writable: true,
								enumerable: true,
								configurable: true,
							})
						}
					}
				} else {
					for (const key2 in value) {
						const replacement = internalize(value, key2, reviver)
						if (replacement === void 0) {
							delete value[key2]
						} else {
							Object.defineProperty(value, key2, {
								value: replacement,
								writable: true,
								enumerable: true,
								configurable: true,
							})
						}
					}
				}
			}
			return reviver.call(holder, name, value)
		}
		var lexState
		var buffer
		var doubleQuote
		var sign
		var c
		function lex() {
			lexState = 'default'
			buffer = ''
			doubleQuote = false
			sign = 1
			for (;;) {
				c = peek()
				const token2 = lexStates[lexState]()
				if (token2) {
					return token2
				}
			}
		}
		function peek() {
			if (source[pos]) {
				return String.fromCodePoint(source.codePointAt(pos))
			}
		}
		function read() {
			const c2 = peek()
			if (c2 === '\n') {
				line++
				column = 0
			} else if (c2) {
				column += c2.length
			} else {
				column++
			}
			if (c2) {
				pos += c2.length
			}
			return c2
		}
		var lexStates = {
			default() {
				switch (c) {
					case '	':
					case '\v':
					case '\f':
					case ' ':
					case '\xA0':
					case '\uFEFF':
					case '\n':
					case '\r':
					case '\u2028':
					case '\u2029':
						read()
						return
					case '/':
						read()
						lexState = 'comment'
						return
					case void 0:
						read()
						return newToken('eof')
				}
				if (util2.isSpaceSeparator(c)) {
					read()
					return
				}
				return lexStates[parseState]()
			},
			comment() {
				switch (c) {
					case '*':
						read()
						lexState = 'multiLineComment'
						return
					case '/':
						read()
						lexState = 'singleLineComment'
						return
				}
				throw invalidChar(read())
			},
			multiLineComment() {
				switch (c) {
					case '*':
						read()
						lexState = 'multiLineCommentAsterisk'
						return
					case void 0:
						throw invalidChar(read())
				}
				read()
			},
			multiLineCommentAsterisk() {
				switch (c) {
					case '*':
						read()
						return
					case '/':
						read()
						lexState = 'default'
						return
					case void 0:
						throw invalidChar(read())
				}
				read()
				lexState = 'multiLineComment'
			},
			singleLineComment() {
				switch (c) {
					case '\n':
					case '\r':
					case '\u2028':
					case '\u2029':
						read()
						lexState = 'default'
						return
					case void 0:
						read()
						return newToken('eof')
				}
				read()
			},
			value() {
				switch (c) {
					case '{':
					case '[':
						return newToken('punctuator', read())
					case 'n':
						read()
						literal('ull')
						return newToken('null', null)
					case 't':
						read()
						literal('rue')
						return newToken('boolean', true)
					case 'f':
						read()
						literal('alse')
						return newToken('boolean', false)
					case '-':
					case '+':
						if (read() === '-') {
							sign = -1
						}
						lexState = 'sign'
						return
					case '.':
						buffer = read()
						lexState = 'decimalPointLeading'
						return
					case '0':
						buffer = read()
						lexState = 'zero'
						return
					case '1':
					case '2':
					case '3':
					case '4':
					case '5':
					case '6':
					case '7':
					case '8':
					case '9':
						buffer = read()
						lexState = 'decimalInteger'
						return
					case 'I':
						read()
						literal('nfinity')
						return newToken('numeric', Infinity)
					case 'N':
						read()
						literal('aN')
						return newToken('numeric', NaN)
					case '"':
					case "'":
						doubleQuote = read() === '"'
						buffer = ''
						lexState = 'string'
						return
				}
				throw invalidChar(read())
			},
			identifierNameStartEscape() {
				if (c !== 'u') {
					throw invalidChar(read())
				}
				read()
				const u = unicodeEscape()
				switch (u) {
					case '$':
					case '_':
						break
					default:
						if (!util2.isIdStartChar(u)) {
							throw invalidIdentifier()
						}
						break
				}
				buffer += u
				lexState = 'identifierName'
			},
			identifierName() {
				switch (c) {
					case '$':
					case '_':
					case '\u200C':
					case '\u200D':
						buffer += read()
						return
					case '\\':
						read()
						lexState = 'identifierNameEscape'
						return
				}
				if (util2.isIdContinueChar(c)) {
					buffer += read()
					return
				}
				return newToken('identifier', buffer)
			},
			identifierNameEscape() {
				if (c !== 'u') {
					throw invalidChar(read())
				}
				read()
				const u = unicodeEscape()
				switch (u) {
					case '$':
					case '_':
					case '\u200C':
					case '\u200D':
						break
					default:
						if (!util2.isIdContinueChar(u)) {
							throw invalidIdentifier()
						}
						break
				}
				buffer += u
				lexState = 'identifierName'
			},
			sign() {
				switch (c) {
					case '.':
						buffer = read()
						lexState = 'decimalPointLeading'
						return
					case '0':
						buffer = read()
						lexState = 'zero'
						return
					case '1':
					case '2':
					case '3':
					case '4':
					case '5':
					case '6':
					case '7':
					case '8':
					case '9':
						buffer = read()
						lexState = 'decimalInteger'
						return
					case 'I':
						read()
						literal('nfinity')
						return newToken('numeric', sign * Infinity)
					case 'N':
						read()
						literal('aN')
						return newToken('numeric', NaN)
				}
				throw invalidChar(read())
			},
			zero() {
				switch (c) {
					case '.':
						buffer += read()
						lexState = 'decimalPoint'
						return
					case 'e':
					case 'E':
						buffer += read()
						lexState = 'decimalExponent'
						return
					case 'x':
					case 'X':
						buffer += read()
						lexState = 'hexadecimal'
						return
				}
				return newToken('numeric', sign * 0)
			},
			decimalInteger() {
				switch (c) {
					case '.':
						buffer += read()
						lexState = 'decimalPoint'
						return
					case 'e':
					case 'E':
						buffer += read()
						lexState = 'decimalExponent'
						return
				}
				if (util2.isDigit(c)) {
					buffer += read()
					return
				}
				return newToken('numeric', sign * Number(buffer))
			},
			decimalPointLeading() {
				if (util2.isDigit(c)) {
					buffer += read()
					lexState = 'decimalFraction'
					return
				}
				throw invalidChar(read())
			},
			decimalPoint() {
				switch (c) {
					case 'e':
					case 'E':
						buffer += read()
						lexState = 'decimalExponent'
						return
				}
				if (util2.isDigit(c)) {
					buffer += read()
					lexState = 'decimalFraction'
					return
				}
				return newToken('numeric', sign * Number(buffer))
			},
			decimalFraction() {
				switch (c) {
					case 'e':
					case 'E':
						buffer += read()
						lexState = 'decimalExponent'
						return
				}
				if (util2.isDigit(c)) {
					buffer += read()
					return
				}
				return newToken('numeric', sign * Number(buffer))
			},
			decimalExponent() {
				switch (c) {
					case '+':
					case '-':
						buffer += read()
						lexState = 'decimalExponentSign'
						return
				}
				if (util2.isDigit(c)) {
					buffer += read()
					lexState = 'decimalExponentInteger'
					return
				}
				throw invalidChar(read())
			},
			decimalExponentSign() {
				if (util2.isDigit(c)) {
					buffer += read()
					lexState = 'decimalExponentInteger'
					return
				}
				throw invalidChar(read())
			},
			decimalExponentInteger() {
				if (util2.isDigit(c)) {
					buffer += read()
					return
				}
				return newToken('numeric', sign * Number(buffer))
			},
			hexadecimal() {
				if (util2.isHexDigit(c)) {
					buffer += read()
					lexState = 'hexadecimalInteger'
					return
				}
				throw invalidChar(read())
			},
			hexadecimalInteger() {
				if (util2.isHexDigit(c)) {
					buffer += read()
					return
				}
				return newToken('numeric', sign * Number(buffer))
			},
			string() {
				switch (c) {
					case '\\':
						read()
						buffer += escape()
						return
					case '"':
						if (doubleQuote) {
							read()
							return newToken('string', buffer)
						}
						buffer += read()
						return
					case "'":
						if (!doubleQuote) {
							read()
							return newToken('string', buffer)
						}
						buffer += read()
						return
					case '\n':
					case '\r':
						throw invalidChar(read())
					case '\u2028':
					case '\u2029':
						separatorChar(c)
						break
					case void 0:
						throw invalidChar(read())
				}
				buffer += read()
			},
			start() {
				switch (c) {
					case '{':
					case '[':
						return newToken('punctuator', read())
				}
				lexState = 'value'
			},
			beforePropertyName() {
				switch (c) {
					case '$':
					case '_':
						buffer = read()
						lexState = 'identifierName'
						return
					case '\\':
						read()
						lexState = 'identifierNameStartEscape'
						return
					case '}':
						return newToken('punctuator', read())
					case '"':
					case "'":
						doubleQuote = read() === '"'
						lexState = 'string'
						return
				}
				if (util2.isIdStartChar(c)) {
					buffer += read()
					lexState = 'identifierName'
					return
				}
				throw invalidChar(read())
			},
			afterPropertyName() {
				if (c === ':') {
					return newToken('punctuator', read())
				}
				throw invalidChar(read())
			},
			beforePropertyValue() {
				lexState = 'value'
			},
			afterPropertyValue() {
				switch (c) {
					case ',':
					case '}':
						return newToken('punctuator', read())
				}
				throw invalidChar(read())
			},
			beforeArrayValue() {
				if (c === ']') {
					return newToken('punctuator', read())
				}
				lexState = 'value'
			},
			afterArrayValue() {
				switch (c) {
					case ',':
					case ']':
						return newToken('punctuator', read())
				}
				throw invalidChar(read())
			},
			end() {
				throw invalidChar(read())
			},
		}
		function newToken(type, value) {
			return {
				type,
				value,
				line,
				column,
			}
		}
		function literal(s) {
			for (const c2 of s) {
				const p = peek()
				if (p !== c2) {
					throw invalidChar(read())
				}
				read()
			}
		}
		function escape() {
			const c2 = peek()
			switch (c2) {
				case 'b':
					read()
					return '\b'
				case 'f':
					read()
					return '\f'
				case 'n':
					read()
					return '\n'
				case 'r':
					read()
					return '\r'
				case 't':
					read()
					return '	'
				case 'v':
					read()
					return '\v'
				case '0':
					read()
					if (util2.isDigit(peek())) {
						throw invalidChar(read())
					}
					return '\0'
				case 'x':
					read()
					return hexEscape()
				case 'u':
					read()
					return unicodeEscape()
				case '\n':
				case '\u2028':
				case '\u2029':
					read()
					return ''
				case '\r':
					read()
					if (peek() === '\n') {
						read()
					}
					return ''
				case '1':
				case '2':
				case '3':
				case '4':
				case '5':
				case '6':
				case '7':
				case '8':
				case '9':
					throw invalidChar(read())
				case void 0:
					throw invalidChar(read())
			}
			return read()
		}
		function hexEscape() {
			let buffer2 = ''
			let c2 = peek()
			if (!util2.isHexDigit(c2)) {
				throw invalidChar(read())
			}
			buffer2 += read()
			c2 = peek()
			if (!util2.isHexDigit(c2)) {
				throw invalidChar(read())
			}
			buffer2 += read()
			return String.fromCodePoint(parseInt(buffer2, 16))
		}
		function unicodeEscape() {
			let buffer2 = ''
			let count = 4
			while (count-- > 0) {
				const c2 = peek()
				if (!util2.isHexDigit(c2)) {
					throw invalidChar(read())
				}
				buffer2 += read()
			}
			return String.fromCodePoint(parseInt(buffer2, 16))
		}
		var parseStates = {
			start() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				push2()
			},
			beforePropertyName() {
				switch (token.type) {
					case 'identifier':
					case 'string':
						key = token.value
						parseState = 'afterPropertyName'
						return
					case 'punctuator':
						pop()
						return
					case 'eof':
						throw invalidEOF()
				}
			},
			afterPropertyName() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				parseState = 'beforePropertyValue'
			},
			beforePropertyValue() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				push2()
			},
			beforeArrayValue() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				if (token.type === 'punctuator' && token.value === ']') {
					pop()
					return
				}
				push2()
			},
			afterPropertyValue() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				switch (token.value) {
					case ',':
						parseState = 'beforePropertyName'
						return
					case '}':
						pop()
				}
			},
			afterArrayValue() {
				if (token.type === 'eof') {
					throw invalidEOF()
				}
				switch (token.value) {
					case ',':
						parseState = 'beforeArrayValue'
						return
					case ']':
						pop()
				}
			},
			end() {},
		}
		function push2() {
			let value
			switch (token.type) {
				case 'punctuator':
					switch (token.value) {
						case '{':
							value = {}
							break
						case '[':
							value = []
							break
					}
					break
				case 'null':
				case 'boolean':
				case 'numeric':
				case 'string':
					value = token.value
					break
			}
			if (root2 === void 0) {
				root2 = value
			} else {
				const parent = stack[stack.length - 1]
				if (Array.isArray(parent)) {
					parent.push(value)
				} else {
					Object.defineProperty(parent, key, {
						value,
						writable: true,
						enumerable: true,
						configurable: true,
					})
				}
			}
			if (value !== null && typeof value === 'object') {
				stack.push(value)
				if (Array.isArray(value)) {
					parseState = 'beforeArrayValue'
				} else {
					parseState = 'beforePropertyName'
				}
			} else {
				const current = stack[stack.length - 1]
				if (current == null) {
					parseState = 'end'
				} else if (Array.isArray(current)) {
					parseState = 'afterArrayValue'
				} else {
					parseState = 'afterPropertyValue'
				}
			}
		}
		function pop() {
			stack.pop()
			const current = stack[stack.length - 1]
			if (current == null) {
				parseState = 'end'
			} else if (Array.isArray(current)) {
				parseState = 'afterArrayValue'
			} else {
				parseState = 'afterPropertyValue'
			}
		}
		function invalidChar(c2) {
			if (c2 === void 0) {
				return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
			}
			return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`)
		}
		function invalidEOF() {
			return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
		}
		function invalidIdentifier() {
			column -= 5
			return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`)
		}
		function separatorChar(c2) {
			console.warn(
				`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`,
			)
		}
		function formatChar(c2) {
			const replacements = {
				"'": "\\'",
				'"': '\\"',
				'\\': '\\\\',
				'\b': '\\b',
				'\f': '\\f',
				'\n': '\\n',
				'\r': '\\r',
				'	': '\\t',
				'\v': '\\v',
				'\0': '\\0',
				'\u2028': '\\u2028',
				'\u2029': '\\u2029',
			}
			if (replacements[c2]) {
				return replacements[c2]
			}
			if (c2 < ' ') {
				const hexString = c2.charCodeAt(0).toString(16)
				return '\\x' + ('00' + hexString).substring(hexString.length)
			}
			return c2
		}
		function syntaxError(message) {
			const err = new SyntaxError(message)
			err.lineNumber = line
			err.columnNumber = column
			return err
		}
	},
})

// ../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/stringify.js
var require_stringify = __commonJS({
	'../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/stringify.js'(exports, module) {
		var util2 = require_util()
		module.exports = function stringify(value, replacer, space) {
			const stack = []
			let indent2 = ''
			let propertyList
			let replacerFunc
			let gap = ''
			let quote
			if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
				space = replacer.space
				quote = replacer.quote
				replacer = replacer.replacer
			}
			if (typeof replacer === 'function') {
				replacerFunc = replacer
			} else if (Array.isArray(replacer)) {
				propertyList = []
				for (const v of replacer) {
					let item
					if (typeof v === 'string') {
						item = v
					} else if (typeof v === 'number' || v instanceof String || v instanceof Number) {
						item = String(v)
					}
					if (item !== void 0 && propertyList.indexOf(item) < 0) {
						propertyList.push(item)
					}
				}
			}
			if (space instanceof Number) {
				space = Number(space)
			} else if (space instanceof String) {
				space = String(space)
			}
			if (typeof space === 'number') {
				if (space > 0) {
					space = Math.min(10, Math.floor(space))
					gap = '          '.substr(0, space)
				}
			} else if (typeof space === 'string') {
				gap = space.substr(0, 10)
			}
			return serializeProperty('', { '': value })
			function serializeProperty(key, holder) {
				let value2 = holder[key]
				if (value2 != null) {
					if (typeof value2.toJSON5 === 'function') {
						value2 = value2.toJSON5(key)
					} else if (typeof value2.toJSON === 'function') {
						value2 = value2.toJSON(key)
					}
				}
				if (replacerFunc) {
					value2 = replacerFunc.call(holder, key, value2)
				}
				if (value2 instanceof Number) {
					value2 = Number(value2)
				} else if (value2 instanceof String) {
					value2 = String(value2)
				} else if (value2 instanceof Boolean) {
					value2 = value2.valueOf()
				}
				switch (value2) {
					case null:
						return 'null'
					case true:
						return 'true'
					case false:
						return 'false'
				}
				if (typeof value2 === 'string') {
					return quoteString(value2, false)
				}
				if (typeof value2 === 'number') {
					return String(value2)
				}
				if (typeof value2 === 'object') {
					return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2)
				}
				return void 0
			}
			function quoteString(value2) {
				const quotes = {
					"'": 0.1,
					'"': 0.2,
				}
				const replacements = {
					"'": "\\'",
					'"': '\\"',
					'\\': '\\\\',
					'\b': '\\b',
					'\f': '\\f',
					'\n': '\\n',
					'\r': '\\r',
					'	': '\\t',
					'\v': '\\v',
					'\0': '\\0',
					'\u2028': '\\u2028',
					'\u2029': '\\u2029',
				}
				let product = ''
				for (let i = 0; i < value2.length; i++) {
					const c = value2[i]
					switch (c) {
						case "'":
						case '"':
							quotes[c]++
							product += c
							continue
						case '\0':
							if (util2.isDigit(value2[i + 1])) {
								product += '\\x00'
								continue
							}
					}
					if (replacements[c]) {
						product += replacements[c]
						continue
					}
					if (c < ' ') {
						let hexString = c.charCodeAt(0).toString(16)
						product += '\\x' + ('00' + hexString).substring(hexString.length)
						continue
					}
					product += c
				}
				const quoteChar =
					quote || Object.keys(quotes).reduce((a, b) => (quotes[a] < quotes[b] ? a : b))
				product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar])
				return quoteChar + product + quoteChar
			}
			function serializeObject(value2) {
				if (stack.indexOf(value2) >= 0) {
					throw TypeError('Converting circular structure to JSON5')
				}
				stack.push(value2)
				let stepback = indent2
				indent2 = indent2 + gap
				let keys2 = propertyList || Object.keys(value2)
				let partial = []
				for (const key of keys2) {
					const propertyString = serializeProperty(key, value2)
					if (propertyString !== void 0) {
						let member = serializeKey(key) + ':'
						if (gap !== '') {
							member += ' '
						}
						member += propertyString
						partial.push(member)
					}
				}
				let final
				if (partial.length === 0) {
					final = '{}'
				} else {
					let properties
					if (gap === '') {
						properties = partial.join(',')
						final = '{' + properties + '}'
					} else {
						let separator = ',\n' + indent2
						properties = partial.join(separator)
						final = '{\n' + indent2 + properties + ',\n' + stepback + '}'
					}
				}
				stack.pop()
				indent2 = stepback
				return final
			}
			function serializeKey(key) {
				if (key.length === 0) {
					return quoteString(key, true)
				}
				const firstChar = String.fromCodePoint(key.codePointAt(0))
				if (!util2.isIdStartChar(firstChar)) {
					return quoteString(key, true)
				}
				for (let i = firstChar.length; i < key.length; i++) {
					if (!util2.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
						return quoteString(key, true)
					}
				}
				return key
			}
			function serializeArray(value2) {
				if (stack.indexOf(value2) >= 0) {
					throw TypeError('Converting circular structure to JSON5')
				}
				stack.push(value2)
				let stepback = indent2
				indent2 = indent2 + gap
				let partial = []
				for (let i = 0; i < value2.length; i++) {
					const propertyString = serializeProperty(String(i), value2)
					partial.push(propertyString !== void 0 ? propertyString : 'null')
				}
				let final
				if (partial.length === 0) {
					final = '[]'
				} else {
					if (gap === '') {
						let properties = partial.join(',')
						final = '[' + properties + ']'
					} else {
						let separator = ',\n' + indent2
						let properties = partial.join(separator)
						final = '[\n' + indent2 + properties + ',\n' + stepback + ']'
					}
				}
				stack.pop()
				indent2 = stepback
				return final
			}
		}
	},
})

// ../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js
var require_lib = __commonJS({
	'../../node_modules/.pnpm/json5@2.2.3/node_modules/json5/lib/index.js'(exports, module) {
		var parse2 = require_parse()
		var stringify = require_stringify()
		var JSON5 = {
			parse: parse2,
			stringify,
		}
		module.exports = JSON5
	},
})

// ../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js
var require_extend = __commonJS({
	'../../node_modules/.pnpm/extend@3.0.2/node_modules/extend/index.js'(exports, module) {
		'use strict'
		var hasOwn = Object.prototype.hasOwnProperty
		var toStr = Object.prototype.toString
		var defineProperty = Object.defineProperty
		var gOPD = Object.getOwnPropertyDescriptor
		var isArray = function isArray2(arr) {
			if (typeof Array.isArray === 'function') {
				return Array.isArray(arr)
			}
			return toStr.call(arr) === '[object Array]'
		}
		var isPlainObject2 = function isPlainObject3(obj) {
			if (!obj || toStr.call(obj) !== '[object Object]') {
				return false
			}
			var hasOwnConstructor = hasOwn.call(obj, 'constructor')
			var hasIsPrototypeOf =
				obj.constructor &&
				obj.constructor.prototype &&
				hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')
			if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
				return false
			}
			var key
			for (key in obj) {
			}
			return typeof key === 'undefined' || hasOwn.call(obj, key)
		}
		var setProperty = function setProperty2(target, options) {
			if (defineProperty && options.name === '__proto__') {
				defineProperty(target, options.name, {
					enumerable: true,
					configurable: true,
					value: options.newValue,
					writable: true,
				})
			} else {
				target[options.name] = options.newValue
			}
		}
		var getProperty = function getProperty2(obj, name) {
			if (name === '__proto__') {
				if (!hasOwn.call(obj, name)) {
					return void 0
				} else if (gOPD) {
					return gOPD(obj, name).value
				}
			}
			return obj[name]
		}
		module.exports = function extend2() {
			var options, name, src, copy, copyIsArray, clone
			var target = arguments[0]
			var i = 1
			var length = arguments.length
			var deep = false
			if (typeof target === 'boolean') {
				deep = target
				target = arguments[1] || {}
				i = 2
			}
			if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
				target = {}
			}
			for (; i < length; ++i) {
				options = arguments[i]
				if (options != null) {
					for (name in options) {
						src = getProperty(target, name)
						copy = getProperty(options, name)
						if (target !== copy) {
							if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
								if (copyIsArray) {
									copyIsArray = false
									clone = src && isArray(src) ? src : []
								} else {
									clone = src && isPlainObject2(src) ? src : {}
								}
								setProperty(target, { name, newValue: extend2(deep, clone, copy) })
							} else if (typeof copy !== 'undefined') {
								setProperty(target, { name, newValue: copy })
							}
						}
					}
				}
			}
			return target
		}
	},
})

// ../../node_modules/.pnpm/irregular-plurals@3.5.0/node_modules/irregular-plurals/irregular-plurals.json
var require_irregular_plurals = __commonJS({
	'../../node_modules/.pnpm/irregular-plurals@3.5.0/node_modules/irregular-plurals/irregular-plurals.json'(
		exports,
		module,
	) {
		module.exports = {
			addendum: 'addenda',
			aircraft: 'aircraft',
			alga: 'algae',
			alumna: 'alumnae',
			alumnus: 'alumni',
			alveolus: 'alveoli',
			amoeba: 'amoebae',
			analysis: 'analyses',
			antenna: 'antennae',
			antithesis: 'antitheses',
			apex: 'apices',
			appendix: 'appendices',
			automaton: 'automata',
			axis: 'axes',
			bacillus: 'bacilli',
			bacterium: 'bacteria',
			baculum: 'bacula',
			barracks: 'barracks',
			basis: 'bases',
			beau: 'beaux',
			bison: 'bison',
			buffalo: 'buffalo',
			bureau: 'bureaus',
			cactus: 'cacti',
			calf: 'calves',
			carcinoma: 'carcinomata',
			carp: 'carp',
			census: 'censuses',
			chassis: 'chassis',
			cherub: 'cherubim',
			child: 'children',
			château: 'ch\xE2teaus',
			cloaca: 'cloacae',
			cod: 'cod',
			codex: 'codices',
			concerto: 'concerti',
			consortium: 'consortia',
			corpus: 'corpora',
			crisis: 'crises',
			criterion: 'criteria',
			curriculum: 'curricula',
			cystoma: 'cystomata',
			datum: 'data',
			deer: 'deer',
			diagnosis: 'diagnoses',
			die: 'dice',
			dwarf: 'dwarfs',
			echo: 'echoes',
			elf: 'elves',
			elk: 'elk',
			ellipsis: 'ellipses',
			embargo: 'embargoes',
			emphasis: 'emphases',
			erratum: 'errata',
			'faux pas': 'faux pas',
			fez: 'fezes',
			firmware: 'firmware',
			fish: 'fish',
			focus: 'foci',
			foot: 'feet',
			formula: 'formulae',
			fungus: 'fungi',
			gallows: 'gallows',
			genus: 'genera',
			glomerulus: 'glomeruli',
			goose: 'geese',
			graffito: 'graffiti',
			grouse: 'grouse',
			half: 'halves',
			hamulus: 'hamuli',
			hero: 'heroes',
			hippopotamus: 'hippopotami',
			hoof: 'hooves',
			hovercraft: 'hovercraft',
			hypothesis: 'hypotheses',
			iliac: 'ilia',
			incubus: 'incubi',
			index: 'indices',
			interstitium: 'interstitia',
			kakapo: 'kakapo',
			knife: 'knives',
			larva: 'larvae',
			leaf: 'leaves',
			libretto: 'libretti',
			life: 'lives',
			loaf: 'loaves',
			loculus: 'loculi',
			locus: 'loci',
			louse: 'lice',
			man: 'men',
			matrix: 'matrices',
			means: 'means',
			measles: 'measles',
			media: 'media',
			medium: 'media',
			memorandum: 'memoranda',
			millennium: 'millennia',
			minutia: 'minutiae',
			moose: 'moose',
			mouse: 'mice',
			nebula: 'nebulae',
			nemesis: 'nemeses',
			neurosis: 'neuroses',
			news: 'news',
			nucleolus: 'nucleoli',
			nucleus: 'nuclei',
			oasis: 'oases',
			occiput: 'occipita',
			offspring: 'offspring',
			omphalos: 'omphaloi',
			opus: 'opera',
			ovum: 'ova',
			ox: 'oxen',
			paralysis: 'paralyses',
			parenthesis: 'parentheses',
			person: 'people',
			phenomenon: 'phenomena',
			phylum: 'phyla',
			pike: 'pike',
			polyhedron: 'polyhedra',
			potato: 'potatoes',
			primus: 'primi',
			prognosis: 'prognoses',
			quiz: 'quizzes',
			radius: 'radii',
			referendum: 'referenda',
			salmon: 'salmon',
			scarf: 'scarves',
			scrotum: 'scrota',
			self: 'selves',
			seminoma: 'seminomata',
			series: 'series',
			sheep: 'sheep',
			shelf: 'shelves',
			shrimp: 'shrimp',
			simulacrum: 'simulacra',
			soliloquy: 'soliloquies',
			spacecraft: 'spacecraft',
			species: 'species',
			spectrum: 'spectra',
			squid: 'squid',
			stimulus: 'stimuli',
			stratum: 'strata',
			swine: 'swine',
			syconium: 'syconia',
			syllabus: 'syllabi',
			symposium: 'symposia',
			synopsis: 'synopses',
			synthesis: 'syntheses',
			tableau: 'tableaus',
			testis: 'testes',
			that: 'those',
			thesis: 'theses',
			thief: 'thieves',
			this: 'these',
			thrombus: 'thrombi',
			tomato: 'tomatoes',
			tooth: 'teeth',
			torus: 'tori',
			trout: 'trout',
			tuna: 'tuna',
			umbilicus: 'umbilici',
			uterus: 'uteri',
			vertebra: 'vertebrae',
			vertex: 'vertices',
			veto: 'vetoes',
			vita: 'vitae',
			vortex: 'vortices',
			watercraft: 'watercraft',
			wharf: 'wharves',
			wife: 'wives',
			wolf: 'wolves',
			woman: 'women',
		}
	},
})

// ../../node_modules/.pnpm/irregular-plurals@3.5.0/node_modules/irregular-plurals/index.js
var require_irregular_plurals2 = __commonJS({
	'../../node_modules/.pnpm/irregular-plurals@3.5.0/node_modules/irregular-plurals/index.js'(
		exports,
		module,
	) {
		'use strict'
		var irregularPlurals2 = require_irregular_plurals()
		module.exports = new Map(Object.entries(irregularPlurals2))
	},
})

// ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10
var wrapAnsi16 =
	(offset = 0) =>
	(code3) =>
		`\x1B[${code3 + offset}m`
var wrapAnsi256 =
	(offset = 0) =>
	(code3) =>
		`\x1B[${38 + offset};5;${code3}m`
var wrapAnsi16m =
	(offset = 0) =>
	(red, green, blue) =>
		`\x1B[${38 + offset};2;${red};${green};${blue}m`
var styles = {
	modifier: {
		reset: [0, 0],
		// 21 isn't widely supported and 22 does the same thing
		bold: [1, 22],
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		overline: [53, 55],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29],
	},
	color: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		// Bright color
		blackBright: [90, 39],
		gray: [90, 39],
		// Alias of `blackBright`
		grey: [90, 39],
		// Alias of `blackBright`
		redBright: [91, 39],
		greenBright: [92, 39],
		yellowBright: [93, 39],
		blueBright: [94, 39],
		magentaBright: [95, 39],
		cyanBright: [96, 39],
		whiteBright: [97, 39],
	},
	bgColor: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49],
		// Bright color
		bgBlackBright: [100, 49],
		bgGray: [100, 49],
		// Alias of `bgBlackBright`
		bgGrey: [100, 49],
		// Alias of `bgBlackBright`
		bgRedBright: [101, 49],
		bgGreenBright: [102, 49],
		bgYellowBright: [103, 49],
		bgBlueBright: [104, 49],
		bgMagentaBright: [105, 49],
		bgCyanBright: [106, 49],
		bgWhiteBright: [107, 49],
	},
}
var modifierNames = Object.keys(styles.modifier)
var foregroundColorNames = Object.keys(styles.color)
var backgroundColorNames = Object.keys(styles.bgColor)
var colorNames = [...foregroundColorNames, ...backgroundColorNames]
function assembleStyles() {
	const codes = /* @__PURE__ */ new Map()
	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\x1B[${style[0]}m`,
				close: `\x1B[${style[1]}m`,
			}
			group[styleName] = styles[styleName]
			codes.set(style[0], style[1])
		}
		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false,
		})
	}
	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false,
	})
	styles.color.close = '\x1B[39m'
	styles.bgColor.close = '\x1B[49m'
	styles.color.ansi = wrapAnsi16()
	styles.color.ansi256 = wrapAnsi256()
	styles.color.ansi16m = wrapAnsi16m()
	styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET)
	styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET)
	styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET)
	Object.defineProperties(styles, {
		rgbToAnsi256: {
			value(red, green, blue) {
				if (red === green && green === blue) {
					if (red < 8) {
						return 16
					}
					if (red > 248) {
						return 231
					}
					return Math.round(((red - 8) / 247) * 24) + 232
				}
				return (
					16 +
					36 * Math.round((red / 255) * 5) +
					6 * Math.round((green / 255) * 5) +
					Math.round((blue / 255) * 5)
				)
			},
			enumerable: false,
		},
		hexToRgb: {
			value(hex) {
				const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16))
				if (!matches) {
					return [0, 0, 0]
				}
				let [colorString] = matches
				if (colorString.length === 3) {
					colorString = [...colorString].map((character) => character + character).join('')
				}
				const integer = Number.parseInt(colorString, 16)
				return [
					/* eslint-disable no-bitwise */
					(integer >> 16) & 255,
					(integer >> 8) & 255,
					integer & 255,
					/* eslint-enable no-bitwise */
				]
			},
			enumerable: false,
		},
		hexToAnsi256: {
			value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
			enumerable: false,
		},
		ansi256ToAnsi: {
			value(code3) {
				if (code3 < 8) {
					return 30 + code3
				}
				if (code3 < 16) {
					return 90 + (code3 - 8)
				}
				let red
				let green
				let blue
				if (code3 >= 232) {
					red = ((code3 - 232) * 10 + 8) / 255
					green = red
					blue = red
				} else {
					code3 -= 16
					const remainder = code3 % 36
					red = Math.floor(code3 / 36) / 5
					green = Math.floor(remainder / 6) / 5
					blue = (remainder % 6) / 5
				}
				const value = Math.max(red, green, blue) * 2
				if (value === 0) {
					return 30
				}
				let result = 30 + ((Math.round(blue) << 2) | (Math.round(green) << 1) | Math.round(red))
				if (value === 2) {
					result += 60
				}
				return result
			},
			enumerable: false,
		},
		rgbToAnsi: {
			value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
			enumerable: false,
		},
		hexToAnsi: {
			value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
			enumerable: false,
		},
	})
	return styles
}
var ansiStyles = assembleStyles()
var ansi_styles_default = ansiStyles

// ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/supports-color/index.js
import process2 from 'node:process'
import os from 'node:os'
import tty from 'node:tty'
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
	const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--'
	const position2 = argv.indexOf(prefix + flag)
	const terminatorPosition = argv.indexOf('--')
	return position2 !== -1 && (terminatorPosition === -1 || position2 < terminatorPosition)
}
var { env } = process2
var flagForceColor
if (
	hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')
) {
	flagForceColor = 0
} else if (
	hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')
) {
	flagForceColor = 1
}
function envForceColor() {
	if ('FORCE_COLOR' in env) {
		if (env.FORCE_COLOR === 'true') {
			return 1
		}
		if (env.FORCE_COLOR === 'false') {
			return 0
		}
		return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3)
	}
}
function translateLevel(level) {
	if (level === 0) {
		return false
	}
	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3,
	}
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
	const noFlagForceColor = envForceColor()
	if (noFlagForceColor !== void 0) {
		flagForceColor = noFlagForceColor
	}
	const forceColor = sniffFlags ? flagForceColor : noFlagForceColor
	if (forceColor === 0) {
		return 0
	}
	if (sniffFlags) {
		if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
			return 3
		}
		if (hasFlag('color=256')) {
			return 2
		}
	}
	if ('TF_BUILD' in env && 'AGENT_NAME' in env) {
		return 1
	}
	if (haveStream && !streamIsTTY && forceColor === void 0) {
		return 0
	}
	const min = forceColor || 0
	if (env.TERM === 'dumb') {
		return min
	}
	if (process2.platform === 'win32') {
		const osRelease = os.release().split('.')
		if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2
		}
		return 1
	}
	if ('CI' in env) {
		if ('GITHUB_ACTIONS' in env || 'GITEA_ACTIONS' in env) {
			return 3
		}
		if (
			['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'BUILDKITE', 'DRONE'].some(
				(sign) => sign in env,
			) ||
			env.CI_NAME === 'codeship'
		) {
			return 1
		}
		return min
	}
	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
	}
	if (env.COLORTERM === 'truecolor') {
		return 3
	}
	if (env.TERM === 'xterm-kitty') {
		return 3
	}
	if ('TERM_PROGRAM' in env) {
		const version = Number.parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
		switch (env.TERM_PROGRAM) {
			case 'iTerm.app': {
				return version >= 3 ? 3 : 2
			}
			case 'Apple_Terminal': {
				return 2
			}
		}
	}
	if (/-256(color)?$/i.test(env.TERM)) {
		return 2
	}
	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1
	}
	if ('COLORTERM' in env) {
		return 1
	}
	return min
}
function createSupportsColor(stream, options = {}) {
	const level = _supportsColor(stream, {
		streamIsTTY: stream && stream.isTTY,
		...options,
	})
	return translateLevel(level)
}
var supportsColor = {
	stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
	stderr: createSupportsColor({ isTTY: tty.isatty(2) }),
}
var supports_color_default = supportsColor

// ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/utilities.js
function stringReplaceAll(string3, substring, replacer) {
	let index2 = string3.indexOf(substring)
	if (index2 === -1) {
		return string3
	}
	const substringLength = substring.length
	let endIndex = 0
	let returnValue = ''
	do {
		returnValue += string3.slice(endIndex, index2) + substring + replacer
		endIndex = index2 + substringLength
		index2 = string3.indexOf(substring, endIndex)
	} while (index2 !== -1)
	returnValue += string3.slice(endIndex)
	return returnValue
}
function stringEncaseCRLFWithFirstIndex(string3, prefix, postfix, index2) {
	let endIndex = 0
	let returnValue = ''
	do {
		const gotCR = string3[index2 - 1] === '\r'
		returnValue +=
			string3.slice(endIndex, gotCR ? index2 - 1 : index2) +
			prefix +
			(gotCR ? '\r\n' : '\n') +
			postfix
		endIndex = index2 + 1
		index2 = string3.indexOf('\n', endIndex)
	} while (index2 !== -1)
	returnValue += string3.slice(endIndex)
	return returnValue
}

// ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default
var GENERATOR = Symbol('GENERATOR')
var STYLER = Symbol('STYLER')
var IS_EMPTY = Symbol('IS_EMPTY')
var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']
var styles2 = /* @__PURE__ */ Object.create(null)
var applyOptions = (object, options = {}) => {
	if (
		options.level &&
		!(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)
	) {
		throw new Error('The `level` option should be an integer from 0 to 3')
	}
	const colorLevel = stdoutColor ? stdoutColor.level : 0
	object.level = options.level === void 0 ? colorLevel : options.level
}
var chalkFactory = (options) => {
	const chalk2 = (...strings) => strings.join(' ')
	applyOptions(chalk2, options)
	Object.setPrototypeOf(chalk2, createChalk.prototype)
	return chalk2
}
function createChalk(options) {
	return chalkFactory(options)
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype)
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
	styles2[styleName] = {
		get() {
			const builder = createBuilder(
				this,
				createStyler(style.open, style.close, this[STYLER]),
				this[IS_EMPTY],
			)
			Object.defineProperty(this, styleName, { value: builder })
			return builder
		},
	}
}
styles2.visible = {
	get() {
		const builder = createBuilder(this, this[STYLER], true)
		Object.defineProperty(this, 'visible', { value: builder })
		return builder
	},
}
var getModelAnsi = (model, level, type, ...arguments_) => {
	if (model === 'rgb') {
		if (level === 'ansi16m') {
			return ansi_styles_default[type].ansi16m(...arguments_)
		}
		if (level === 'ansi256') {
			return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_))
		}
		return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_))
	}
	if (model === 'hex') {
		return getModelAnsi('rgb', level, type, ...ansi_styles_default.hexToRgb(...arguments_))
	}
	return ansi_styles_default[type][model](...arguments_)
}
var usedModels = ['rgb', 'hex', 'ansi256']
for (const model of usedModels) {
	styles2[model] = {
		get() {
			const { level } = this
			return function (...arguments_) {
				const styler = createStyler(
					getModelAnsi(model, levelMapping[level], 'color', ...arguments_),
					ansi_styles_default.color.close,
					this[STYLER],
				)
				return createBuilder(this, styler, this[IS_EMPTY])
			}
		},
	}
	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1)
	styles2[bgModel] = {
		get() {
			const { level } = this
			return function (...arguments_) {
				const styler = createStyler(
					getModelAnsi(model, levelMapping[level], 'bgColor', ...arguments_),
					ansi_styles_default.bgColor.close,
					this[STYLER],
				)
				return createBuilder(this, styler, this[IS_EMPTY])
			}
		},
	}
}
var proto = Object.defineProperties(() => {}, {
	...styles2,
	level: {
		enumerable: true,
		get() {
			return this[GENERATOR].level
		},
		set(level) {
			this[GENERATOR].level = level
		},
	},
})
var createStyler = (open, close, parent) => {
	let openAll
	let closeAll
	if (parent === void 0) {
		openAll = open
		closeAll = close
	} else {
		openAll = parent.openAll + open
		closeAll = close + parent.closeAll
	}
	return {
		open,
		close,
		openAll,
		closeAll,
		parent,
	}
}
var createBuilder = (self2, _styler, _isEmpty) => {
	const builder = (...arguments_) =>
		applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '))
	Object.setPrototypeOf(builder, proto)
	builder[GENERATOR] = self2
	builder[STYLER] = _styler
	builder[IS_EMPTY] = _isEmpty
	return builder
}
var applyStyle = (self2, string3) => {
	if (self2.level <= 0 || !string3) {
		return self2[IS_EMPTY] ? '' : string3
	}
	let styler = self2[STYLER]
	if (styler === void 0) {
		return string3
	}
	const { openAll, closeAll } = styler
	if (string3.includes('\x1B')) {
		while (styler !== void 0) {
			string3 = stringReplaceAll(string3, styler.close, styler.open)
			styler = styler.parent
		}
	}
	const lfIndex = string3.indexOf('\n')
	if (lfIndex !== -1) {
		string3 = stringEncaseCRLFWithFirstIndex(string3, closeAll, openAll, lfIndex)
	}
	return openAll + string3 + closeAll
}
Object.defineProperties(createChalk.prototype, styles2)
var chalk = createChalk()
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 })
var source_default = chalk

// src/lib/log.ts
var isNode = process?.versions?.node !== void 0
var log = {
	verbose: false,
	// Intended for temporary logging
	log(...data) {
		if (!this.verbose) return
		const levelPrefix = source_default.gray('[Log]')
		if (isNode) {
			console.warn(levelPrefix, ...data)
		} else {
			console.log(levelPrefix, ...data)
		}
	},
	logPrefixed(prefix, ...data) {
		this.info(source_default.blue(`[${prefix}]`), ...data)
	},
	info(...data) {
		if (!this.verbose) return
		const levelPrefix = source_default.green('[Info]')
		if (isNode) {
			console.warn(levelPrefix, ...data)
		} else {
			console.info(levelPrefix, ...data)
		}
	},
	infoPrefixed(prefix, ...data) {
		this.info(source_default.blue(`[${prefix}]`), ...data)
	},
	warn(...data) {
		console.warn(source_default.yellow('[Warning]'), ...data)
	},
	warnPrefixed(prefix, ...data) {
		this.warn(source_default.blue(`[${prefix}]`), ...data)
	},
	error(...data) {
		console.error(source_default.red('[Error]'), ...data)
	},
	errorPrefixed(prefix, ...data) {
		this.error(source_default.blue(`[${prefix}]`), ...data)
	},
}
var log_default = log

// src/lib/parse.ts
var import_json5 = __toESM(require_lib(), 1)
function parseCommentText(text5) {
	const match = /^\s*<!--\/*[\s#-]*(.+)\s*-->\s*$/.exec(text5)?.at(1)?.trim()
	if (match === void 0) return void 0
	const parts = /^([^\s({]+)[\s()]*({.+})?\)?$/g.exec(match)
	if (parts === null) return void 0
	const keyword = parts.at(1)
	if (keyword === void 0) return void 0
	const rawArgs = parts.at(2)
	const args = rawArgs ? import_json5.default.parse(rawArgs) : void 0
	return { args, keyword }
}

// ../../node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {}
function toString(value, options) {
	const settings = options || emptyOptions
	const includeImageAlt =
		typeof settings.includeImageAlt === 'boolean' ? settings.includeImageAlt : true
	const includeHtml = typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true
	return one(value, includeImageAlt, includeHtml)
}
function one(value, includeImageAlt, includeHtml) {
	if (node(value)) {
		if ('value' in value) {
			return value.type === 'html' && !includeHtml ? '' : value.value
		}
		if (includeImageAlt && 'alt' in value && value.alt) {
			return value.alt
		}
		if ('children' in value) {
			return all(value.children, includeImageAlt, includeHtml)
		}
	}
	if (Array.isArray(value)) {
		return all(value, includeImageAlt, includeHtml)
	}
	return ''
}
function all(values, includeImageAlt, includeHtml) {
	const result = []
	let index2 = -1
	while (++index2 < values.length) {
		result[index2] = one(values[index2], includeImageAlt, includeHtml)
	}
	return result.join('')
}
function node(value) {
	return Boolean(value && typeof value === 'object')
}

// ../../node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
var characterEntities = {
	AElig: '\xC6',
	AMP: '&',
	Aacute: '\xC1',
	Abreve: '\u0102',
	Acirc: '\xC2',
	Acy: '\u0410',
	Afr: '\u{1D504}',
	Agrave: '\xC0',
	Alpha: '\u0391',
	Amacr: '\u0100',
	And: '\u2A53',
	Aogon: '\u0104',
	Aopf: '\u{1D538}',
	ApplyFunction: '\u2061',
	Aring: '\xC5',
	Ascr: '\u{1D49C}',
	Assign: '\u2254',
	Atilde: '\xC3',
	Auml: '\xC4',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	Barwed: '\u2306',
	Bcy: '\u0411',
	Because: '\u2235',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	Bfr: '\u{1D505}',
	Bopf: '\u{1D539}',
	Breve: '\u02D8',
	Bscr: '\u212C',
	Bumpeq: '\u224E',
	CHcy: '\u0427',
	COPY: '\xA9',
	Cacute: '\u0106',
	Cap: '\u22D2',
	CapitalDifferentialD: '\u2145',
	Cayleys: '\u212D',
	Ccaron: '\u010C',
	Ccedil: '\xC7',
	Ccirc: '\u0108',
	Cconint: '\u2230',
	Cdot: '\u010A',
	Cedilla: '\xB8',
	CenterDot: '\xB7',
	Cfr: '\u212D',
	Chi: '\u03A7',
	CircleDot: '\u2299',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	Colon: '\u2237',
	Colone: '\u2A74',
	Congruent: '\u2261',
	Conint: '\u222F',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	Coproduct: '\u2210',
	CounterClockwiseContourIntegral: '\u2233',
	Cross: '\u2A2F',
	Cscr: '\u{1D49E}',
	Cup: '\u22D3',
	CupCap: '\u224D',
	DD: '\u2145',
	DDotrahd: '\u2911',
	DJcy: '\u0402',
	DScy: '\u0405',
	DZcy: '\u040F',
	Dagger: '\u2021',
	Darr: '\u21A1',
	Dashv: '\u2AE4',
	Dcaron: '\u010E',
	Dcy: '\u0414',
	Del: '\u2207',
	Delta: '\u0394',
	Dfr: '\u{1D507}',
	DiacriticalAcute: '\xB4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '`',
	DiacriticalTilde: '\u02DC',
	Diamond: '\u22C4',
	DifferentialD: '\u2146',
	Dopf: '\u{1D53B}',
	Dot: '\xA8',
	DotDot: '\u20DC',
	DotEqual: '\u2250',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\xA8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	Downarrow: '\u21D3',
	Dscr: '\u{1D49F}',
	Dstrok: '\u0110',
	ENG: '\u014A',
	ETH: '\xD0',
	Eacute: '\xC9',
	Ecaron: '\u011A',
	Ecirc: '\xCA',
	Ecy: '\u042D',
	Edot: '\u0116',
	Efr: '\u{1D508}',
	Egrave: '\xC8',
	Element: '\u2208',
	Emacr: '\u0112',
	EmptySmallSquare: '\u25FB',
	EmptyVerySmallSquare: '\u25AB',
	Eogon: '\u0118',
	Eopf: '\u{1D53C}',
	Epsilon: '\u0395',
	Equal: '\u2A75',
	EqualTilde: '\u2242',
	Equilibrium: '\u21CC',
	Escr: '\u2130',
	Esim: '\u2A73',
	Eta: '\u0397',
	Euml: '\xCB',
	Exists: '\u2203',
	ExponentialE: '\u2147',
	Fcy: '\u0424',
	Ffr: '\u{1D509}',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	Fopf: '\u{1D53D}',
	ForAll: '\u2200',
	Fouriertrf: '\u2131',
	Fscr: '\u2131',
	GJcy: '\u0403',
	GT: '>',
	Gamma: '\u0393',
	Gammad: '\u03DC',
	Gbreve: '\u011E',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	Gcy: '\u0413',
	Gdot: '\u0120',
	Gfr: '\u{1D50A}',
	Gg: '\u22D9',
	Gopf: '\u{1D53E}',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\u{1D4A2}',
	Gt: '\u226B',
	HARDcy: '\u042A',
	Hacek: '\u02C7',
	Hat: '^',
	Hcirc: '\u0124',
	Hfr: '\u210C',
	HilbertSpace: '\u210B',
	Hopf: '\u210D',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	Hstrok: '\u0126',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	IEcy: '\u0415',
	IJlig: '\u0132',
	IOcy: '\u0401',
	Iacute: '\xCD',
	Icirc: '\xCE',
	Icy: '\u0418',
	Idot: '\u0130',
	Ifr: '\u2111',
	Igrave: '\xCC',
	Im: '\u2111',
	Imacr: '\u012A',
	ImaginaryI: '\u2148',
	Implies: '\u21D2',
	Int: '\u222C',
	Integral: '\u222B',
	Intersection: '\u22C2',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	Iogon: '\u012E',
	Iopf: '\u{1D540}',
	Iota: '\u0399',
	Iscr: '\u2110',
	Itilde: '\u0128',
	Iukcy: '\u0406',
	Iuml: '\xCF',
	Jcirc: '\u0134',
	Jcy: '\u0419',
	Jfr: '\u{1D50D}',
	Jopf: '\u{1D541}',
	Jscr: '\u{1D4A5}',
	Jsercy: '\u0408',
	Jukcy: '\u0404',
	KHcy: '\u0425',
	KJcy: '\u040C',
	Kappa: '\u039A',
	Kcedil: '\u0136',
	Kcy: '\u041A',
	Kfr: '\u{1D50E}',
	Kopf: '\u{1D542}',
	Kscr: '\u{1D4A6}',
	LJcy: '\u0409',
	LT: '<',
	Lacute: '\u0139',
	Lambda: '\u039B',
	Lang: '\u27EA',
	Laplacetrf: '\u2112',
	Larr: '\u219E',
	Lcaron: '\u013D',
	Lcedil: '\u013B',
	Lcy: '\u041B',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	LeftRightArrow: '\u2194',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	Leftarrow: '\u21D0',
	Leftrightarrow: '\u21D4',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	LessLess: '\u2AA1',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	Lfr: '\u{1D50F}',
	Ll: '\u22D8',
	Lleftarrow: '\u21DA',
	Lmidot: '\u013F',
	LongLeftArrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	LongRightArrow: '\u27F6',
	Longleftarrow: '\u27F8',
	Longleftrightarrow: '\u27FA',
	Longrightarrow: '\u27F9',
	Lopf: '\u{1D543}',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	Lscr: '\u2112',
	Lsh: '\u21B0',
	Lstrok: '\u0141',
	Lt: '\u226A',
	Map: '\u2905',
	Mcy: '\u041C',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\u{1D510}',
	MinusPlus: '\u2213',
	Mopf: '\u{1D544}',
	Mscr: '\u2133',
	Mu: '\u039C',
	NJcy: '\u040A',
	Nacute: '\u0143',
	Ncaron: '\u0147',
	Ncedil: '\u0145',
	Ncy: '\u041D',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\n',
	Nfr: '\u{1D511}',
	NoBreak: '\u2060',
	NonBreakingSpace: '\xA0',
	Nopf: '\u2115',
	Not: '\u2AEC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	Nscr: '\u{1D4A9}',
	Ntilde: '\xD1',
	Nu: '\u039D',
	OElig: '\u0152',
	Oacute: '\xD3',
	Ocirc: '\xD4',
	Ocy: '\u041E',
	Odblac: '\u0150',
	Ofr: '\u{1D512}',
	Ograve: '\xD2',
	Omacr: '\u014C',
	Omega: '\u03A9',
	Omicron: '\u039F',
	Oopf: '\u{1D546}',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	Or: '\u2A54',
	Oscr: '\u{1D4AA}',
	Oslash: '\xD8',
	Otilde: '\xD5',
	Otimes: '\u2A37',
	Ouml: '\xD6',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	PartialD: '\u2202',
	Pcy: '\u041F',
	Pfr: '\u{1D513}',
	Phi: '\u03A6',
	Pi: '\u03A0',
	PlusMinus: '\xB1',
	Poincareplane: '\u210C',
	Popf: '\u2119',
	Pr: '\u2ABB',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	Prime: '\u2033',
	Product: '\u220F',
	Proportion: '\u2237',
	Proportional: '\u221D',
	Pscr: '\u{1D4AB}',
	Psi: '\u03A8',
	QUOT: '"',
	Qfr: '\u{1D514}',
	Qopf: '\u211A',
	Qscr: '\u{1D4AC}',
	RBarr: '\u2910',
	REG: '\xAE',
	Racute: '\u0154',
	Rang: '\u27EB',
	Rarr: '\u21A0',
	Rarrtl: '\u2916',
	Rcaron: '\u0158',
	Rcedil: '\u0156',
	Rcy: '\u0420',
	Re: '\u211C',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	Rfr: '\u211C',
	Rho: '\u03A1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	Rightarrow: '\u21D2',
	Ropf: '\u211D',
	RoundImplies: '\u2970',
	Rrightarrow: '\u21DB',
	Rscr: '\u211B',
	Rsh: '\u21B1',
	RuleDelayed: '\u29F4',
	SHCHcy: '\u0429',
	SHcy: '\u0428',
	SOFTcy: '\u042C',
	Sacute: '\u015A',
	Sc: '\u2ABC',
	Scaron: '\u0160',
	Scedil: '\u015E',
	Scirc: '\u015C',
	Scy: '\u0421',
	Sfr: '\u{1D516}',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	Sigma: '\u03A3',
	SmallCircle: '\u2218',
	Sopf: '\u{1D54A}',
	Sqrt: '\u221A',
	Square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	Sscr: '\u{1D4AE}',
	Star: '\u22C6',
	Sub: '\u22D0',
	Subset: '\u22D0',
	SubsetEqual: '\u2286',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	Sup: '\u22D1',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	Supset: '\u22D1',
	THORN: '\xDE',
	TRADE: '\u2122',
	TSHcy: '\u040B',
	TScy: '\u0426',
	Tab: '	',
	Tau: '\u03A4',
	Tcaron: '\u0164',
	Tcedil: '\u0162',
	Tcy: '\u0422',
	Tfr: '\u{1D517}',
	Therefore: '\u2234',
	Theta: '\u0398',
	ThickSpace: '\u205F\u200A',
	ThinSpace: '\u2009',
	Tilde: '\u223C',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	Topf: '\u{1D54B}',
	TripleDot: '\u20DB',
	Tscr: '\u{1D4AF}',
	Tstrok: '\u0166',
	Uacute: '\xDA',
	Uarr: '\u219F',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	Ubreve: '\u016C',
	Ucirc: '\xDB',
	Ucy: '\u0423',
	Udblac: '\u0170',
	Ufr: '\u{1D518}',
	Ugrave: '\xD9',
	Umacr: '\u016A',
	UnderBar: '_',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	Uopf: '\u{1D54C}',
	UpArrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	UpEquilibrium: '\u296E',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	Uparrow: '\u21D1',
	Updownarrow: '\u21D5',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	Upsilon: '\u03A5',
	Uring: '\u016E',
	Uscr: '\u{1D4B0}',
	Utilde: '\u0168',
	Uuml: '\xDC',
	VDash: '\u22AB',
	Vbar: '\u2AEB',
	Vcy: '\u0412',
	Vdash: '\u22A9',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	Verbar: '\u2016',
	Vert: '\u2016',
	VerticalBar: '\u2223',
	VerticalLine: '|',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\u{1D519}',
	Vopf: '\u{1D54D}',
	Vscr: '\u{1D4B1}',
	Vvdash: '\u22AA',
	Wcirc: '\u0174',
	Wedge: '\u22C0',
	Wfr: '\u{1D51A}',
	Wopf: '\u{1D54E}',
	Wscr: '\u{1D4B2}',
	Xfr: '\u{1D51B}',
	Xi: '\u039E',
	Xopf: '\u{1D54F}',
	Xscr: '\u{1D4B3}',
	YAcy: '\u042F',
	YIcy: '\u0407',
	YUcy: '\u042E',
	Yacute: '\xDD',
	Ycirc: '\u0176',
	Ycy: '\u042B',
	Yfr: '\u{1D51C}',
	Yopf: '\u{1D550}',
	Yscr: '\u{1D4B4}',
	Yuml: '\u0178',
	ZHcy: '\u0416',
	Zacute: '\u0179',
	Zcaron: '\u017D',
	Zcy: '\u0417',
	Zdot: '\u017B',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	Zfr: '\u2128',
	Zopf: '\u2124',
	Zscr: '\u{1D4B5}',
	aacute: '\xE1',
	abreve: '\u0103',
	ac: '\u223E',
	acE: '\u223E\u0333',
	acd: '\u223F',
	acirc: '\xE2',
	acute: '\xB4',
	acy: '\u0430',
	aelig: '\xE6',
	af: '\u2061',
	afr: '\u{1D51E}',
	agrave: '\xE0',
	alefsym: '\u2135',
	aleph: '\u2135',
	alpha: '\u03B1',
	amacr: '\u0101',
	amalg: '\u2A3F',
	amp: '&',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\xC5',
	angzarr: '\u237C',
	aogon: '\u0105',
	aopf: '\u{1D552}',
	ap: '\u2248',
	apE: '\u2A70',
	apacir: '\u2A6F',
	ape: '\u224A',
	apid: '\u224B',
	apos: "'",
	approx: '\u2248',
	approxeq: '\u224A',
	aring: '\xE5',
	ascr: '\u{1D4B6}',
	ast: '*',
	asymp: '\u2248',
	asympeq: '\u224D',
	atilde: '\xE3',
	auml: '\xE4',
	awconint: '\u2233',
	awint: '\u2A11',
	bNot: '\u2AED',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	barvee: '\u22BD',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	bfr: '\u{1D51F}',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '=\u20E5',
	bnequiv: '\u2261\u20E5',
	bnot: '\u2310',
	bopf: '\u{1D553}',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxDL: '\u2557',
	boxDR: '\u2554',
	boxDl: '\u2556',
	boxDr: '\u2553',
	boxH: '\u2550',
	boxHD: '\u2566',
	boxHU: '\u2569',
	boxHd: '\u2564',
	boxHu: '\u2567',
	boxUL: '\u255D',
	boxUR: '\u255A',
	boxUl: '\u255C',
	boxUr: '\u2559',
	boxV: '\u2551',
	boxVH: '\u256C',
	boxVL: '\u2563',
	boxVR: '\u2560',
	boxVh: '\u256B',
	boxVl: '\u2562',
	boxVr: '\u255F',
	boxbox: '\u29C9',
	boxdL: '\u2555',
	boxdR: '\u2552',
	boxdl: '\u2510',
	boxdr: '\u250C',
	boxh: '\u2500',
	boxhD: '\u2565',
	boxhU: '\u2568',
	boxhd: '\u252C',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxuL: '\u255B',
	boxuR: '\u2558',
	boxul: '\u2518',
	boxur: '\u2514',
	boxv: '\u2502',
	boxvH: '\u256A',
	boxvL: '\u2561',
	boxvR: '\u255E',
	boxvh: '\u253C',
	boxvl: '\u2524',
	boxvr: '\u251C',
	bprime: '\u2035',
	breve: '\u02D8',
	brvbar: '\xA6',
	bscr: '\u{1D4B7}',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\\',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	bumpeq: '\u224F',
	cacute: '\u0107',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	ccaps: '\u2A4D',
	ccaron: '\u010D',
	ccedil: '\xE7',
	ccirc: '\u0109',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	cdot: '\u010B',
	cedil: '\xB8',
	cemptyv: '\u29B2',
	cent: '\xA2',
	centerdot: '\xB7',
	cfr: '\u{1D520}',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	chi: '\u03C7',
	cir: '\u25CB',
	cirE: '\u29C3',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledR: '\xAE',
	circledS: '\u24C8',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	clubs: '\u2663',
	clubsuit: '\u2663',
	colon: ':',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: ',',
	commat: '@',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	conint: '\u222E',
	copf: '\u{1D554}',
	coprod: '\u2210',
	copy: '\xA9',
	copysr: '\u2117',
	crarr: '\u21B5',
	cross: '\u2717',
	cscr: '\u{1D4B8}',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\xA4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	dArr: '\u21D3',
	dHar: '\u2965',
	dagger: '\u2020',
	daleth: '\u2138',
	darr: '\u2193',
	dash: '\u2010',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	dcaron: '\u010F',
	dcy: '\u0434',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	ddotseq: '\u2A77',
	deg: '\xB0',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	dfr: '\u{1D521}',
	dharl: '\u21C3',
	dharr: '\u21C2',
	diam: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\xA8',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\xF7',
	divide: '\xF7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '$',
	dopf: '\u{1D555}',
	dot: '\u02D9',
	doteq: '\u2250',
	doteqdot: '\u2251',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	downarrow: '\u2193',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	dscr: '\u{1D4B9}',
	dscy: '\u0455',
	dsol: '\u29F6',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	eDDot: '\u2A77',
	eDot: '\u2251',
	eacute: '\xE9',
	easter: '\u2A6E',
	ecaron: '\u011B',
	ecir: '\u2256',
	ecirc: '\xEA',
	ecolon: '\u2255',
	ecy: '\u044D',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	efr: '\u{1D522}',
	eg: '\u2A9A',
	egrave: '\xE8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	emptyv: '\u2205',
	emsp13: '\u2004',
	emsp14: '\u2005',
	emsp: '\u2003',
	eng: '\u014B',
	ensp: '\u2002',
	eogon: '\u0119',
	eopf: '\u{1D556}',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	equals: '=',
	equest: '\u225F',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erDot: '\u2253',
	erarr: '\u2971',
	escr: '\u212F',
	esdot: '\u2250',
	esim: '\u2242',
	eta: '\u03B7',
	eth: '\xF0',
	euml: '\xEB',
	euro: '\u20AC',
	excl: '!',
	exist: '\u2203',
	expectation: '\u2130',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	ffr: '\u{1D523}',
	filig: '\uFB01',
	fjlig: 'fj',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	fopf: '\u{1D557}',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	fpartint: '\u2A0D',
	frac12: '\xBD',
	frac13: '\u2153',
	frac14: '\xBC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\xBE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	fscr: '\u{1D4BB}',
	gE: '\u2267',
	gEl: '\u2A8C',
	gacute: '\u01F5',
	gamma: '\u03B3',
	gammad: '\u03DD',
	gap: '\u2A86',
	gbreve: '\u011F',
	gcirc: '\u011D',
	gcy: '\u0433',
	gdot: '\u0121',
	ge: '\u2265',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	gfr: '\u{1D524}',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	gjcy: '\u0453',
	gl: '\u2277',
	glE: '\u2A92',
	gla: '\u2AA5',
	glj: '\u2AA4',
	gnE: '\u2269',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	gopf: '\u{1D558}',
	grave: '`',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	gt: '>',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	hArr: '\u21D4',
	hairsp: '\u200A',
	half: '\xBD',
	hamilt: '\u210B',
	hardcy: '\u044A',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	hbar: '\u210F',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	hfr: '\u{1D525}',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	hopf: '\u{1D559}',
	horbar: '\u2015',
	hscr: '\u{1D4BD}',
	hslash: '\u210F',
	hstrok: '\u0127',
	hybull: '\u2043',
	hyphen: '\u2010',
	iacute: '\xED',
	ic: '\u2063',
	icirc: '\xEE',
	icy: '\u0438',
	iecy: '\u0435',
	iexcl: '\xA1',
	iff: '\u21D4',
	ifr: '\u{1D526}',
	igrave: '\xEC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	ijlig: '\u0133',
	imacr: '\u012B',
	image: '\u2111',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	intercal: '\u22BA',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	iocy: '\u0451',
	iogon: '\u012F',
	iopf: '\u{1D55A}',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\xBF',
	iscr: '\u{1D4BE}',
	isin: '\u2208',
	isinE: '\u22F9',
	isindot: '\u22F5',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	itilde: '\u0129',
	iukcy: '\u0456',
	iuml: '\xEF',
	jcirc: '\u0135',
	jcy: '\u0439',
	jfr: '\u{1D527}',
	jmath: '\u0237',
	jopf: '\u{1D55B}',
	jscr: '\u{1D4BF}',
	jsercy: '\u0458',
	jukcy: '\u0454',
	kappa: '\u03BA',
	kappav: '\u03F0',
	kcedil: '\u0137',
	kcy: '\u043A',
	kfr: '\u{1D528}',
	kgreen: '\u0138',
	khcy: '\u0445',
	kjcy: '\u045C',
	kopf: '\u{1D55C}',
	kscr: '\u{1D4C0}',
	lAarr: '\u21DA',
	lArr: '\u21D0',
	lAtail: '\u291B',
	lBarr: '\u290E',
	lE: '\u2266',
	lEg: '\u2A8B',
	lHar: '\u2962',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	lambda: '\u03BB',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	laquo: '\xAB',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '{',
	lbrack: '[',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	lcaron: '\u013E',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '{',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	le: '\u2264',
	leftarrow: '\u2190',
	leftarrowtail: '\u21A2',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	leftthreetimes: '\u22CB',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	lessgtr: '\u2276',
	lesssim: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	lfr: '\u{1D529}',
	lg: '\u2276',
	lgE: '\u2A91',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	ljcy: '\u0459',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	llhard: '\u296B',
	lltri: '\u25FA',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnE: '\u2268',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	longleftarrow: '\u27F5',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	lopf: '\u{1D55D}',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '_',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '(',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	lscr: '\u{1D4C1}',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '[',
	lsquo: '\u2018',
	lsquor: '\u201A',
	lstrok: '\u0142',
	lt: '<',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltrPar: '\u2996',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	mDDot: '\u223A',
	macr: '\xAF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	mcy: '\u043C',
	mdash: '\u2014',
	measuredangle: '\u2221',
	mfr: '\u{1D52A}',
	mho: '\u2127',
	micro: '\xB5',
	mid: '\u2223',
	midast: '*',
	midcir: '\u2AF0',
	middot: '\xB7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	mopf: '\u{1D55E}',
	mp: '\u2213',
	mscr: '\u{1D4C2}',
	mstpos: '\u223E',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nGg: '\u22D9\u0338',
	nGt: '\u226B\u20D2',
	nGtv: '\u226B\u0338',
	nLeftarrow: '\u21CD',
	nLeftrightarrow: '\u21CE',
	nLl: '\u22D8\u0338',
	nLt: '\u226A\u20D2',
	nLtv: '\u226A\u0338',
	nRightarrow: '\u21CF',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nabla: '\u2207',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\xA0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	ncaron: '\u0148',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	neArr: '\u21D7',
	nearhk: '\u2924',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	nexist: '\u2204',
	nexists: '\u2204',
	nfr: '\u{1D52B}',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	ngsim: '\u2275',
	ngt: '\u226F',
	ngtr: '\u226F',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlE: '\u2266\u0338',
	nlarr: '\u219A',
	nldr: '\u2025',
	nle: '\u2270',
	nleftarrow: '\u219A',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nlsim: '\u2274',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nmid: '\u2224',
	nopf: '\u{1D55F}',
	not: '\xAC',
	notin: '\u2209',
	notinE: '\u22F9\u0338',
	notindot: '\u22F5\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	nscr: '\u{1D4C3}',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	ntilde: '\xF1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	nu: '\u03BD',
	num: '#',
	numero: '\u2116',
	numsp: '\u2007',
	nvDash: '\u22AD',
	nvHarr: '\u2904',
	nvap: '\u224D\u20D2',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '>\u20D2',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '<\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwArr: '\u21D6',
	nwarhk: '\u2923',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	oS: '\u24C8',
	oacute: '\xF3',
	oast: '\u229B',
	ocir: '\u229A',
	ocirc: '\xF4',
	ocy: '\u043E',
	odash: '\u229D',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	oelig: '\u0153',
	ofcir: '\u29BF',
	ofr: '\u{1D52C}',
	ogon: '\u02DB',
	ograve: '\xF2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	omacr: '\u014D',
	omega: '\u03C9',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	oopf: '\u{1D560}',
	opar: '\u29B7',
	operp: '\u29B9',
	oplus: '\u2295',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\xAA',
	ordm: '\xBA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oscr: '\u2134',
	oslash: '\xF8',
	osol: '\u2298',
	otilde: '\xF5',
	otimes: '\u2297',
	otimesas: '\u2A36',
	ouml: '\xF6',
	ovbar: '\u233D',
	par: '\u2225',
	para: '\xB6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	pcy: '\u043F',
	percnt: '%',
	period: '.',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	pfr: '\u{1D52D}',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '+',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	plusmn: '\xB1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\xB1',
	pointint: '\u2A15',
	popf: '\u{1D561}',
	pound: '\xA3',
	pr: '\u227A',
	prE: '\u2AB3',
	prap: '\u2AB7',
	prcue: '\u227C',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	prime: '\u2032',
	primes: '\u2119',
	prnE: '\u2AB5',
	prnap: '\u2AB9',
	prnsim: '\u22E8',
	prod: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	pscr: '\u{1D4C5}',
	psi: '\u03C8',
	puncsp: '\u2008',
	qfr: '\u{1D52E}',
	qint: '\u2A0C',
	qopf: '\u{1D562}',
	qprime: '\u2057',
	qscr: '\u{1D4C6}',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '?',
	questeq: '\u225F',
	quot: '"',
	rAarr: '\u21DB',
	rArr: '\u21D2',
	rAtail: '\u291C',
	rBarr: '\u290F',
	rHar: '\u2964',
	race: '\u223D\u0331',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\xBB',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '}',
	rbrack: ']',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	rcaron: '\u0159',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '}',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	reg: '\xAE',
	rfisht: '\u297D',
	rfloor: '\u230B',
	rfr: '\u{1D52F}',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	rho: '\u03C1',
	rhov: '\u03F1',
	rightarrow: '\u2192',
	rightarrowtail: '\u21A3',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	rightthreetimes: '\u22CC',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	ropf: '\u{1D563}',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	rpar: ')',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	rsaquo: '\u203A',
	rscr: '\u{1D4C7}',
	rsh: '\u21B1',
	rsqb: ']',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	ruluhar: '\u2968',
	rx: '\u211E',
	sacute: '\u015B',
	sbquo: '\u201A',
	sc: '\u227B',
	scE: '\u2AB4',
	scap: '\u2AB8',
	scaron: '\u0161',
	sccue: '\u227D',
	sce: '\u2AB0',
	scedil: '\u015F',
	scirc: '\u015D',
	scnE: '\u2AB6',
	scnap: '\u2ABA',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	seArr: '\u21D8',
	searhk: '\u2925',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\xA7',
	semi: ';',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	sfr: '\u{1D530}',
	sfrown: '\u2322',
	sharp: '\u266F',
	shchcy: '\u0449',
	shcy: '\u0448',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	shy: '\xAD',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	softcy: '\u044C',
	sol: '/',
	solb: '\u29C4',
	solbar: '\u233F',
	sopf: '\u{1D564}',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	square: '\u25A1',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	sscr: '\u{1D4C8}',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\xAF',
	sub: '\u2282',
	subE: '\u2AC5',
	subdot: '\u2ABD',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	sum: '\u2211',
	sung: '\u266A',
	sup1: '\xB9',
	sup2: '\xB2',
	sup3: '\xB3',
	sup: '\u2283',
	supE: '\u2AC6',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supe: '\u2287',
	supedot: '\u2AC4',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swArr: '\u21D9',
	swarhk: '\u2926',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\xDF',
	target: '\u2316',
	tau: '\u03C4',
	tbrk: '\u23B4',
	tcaron: '\u0165',
	tcedil: '\u0163',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	tfr: '\u{1D531}',
	there4: '\u2234',
	therefore: '\u2234',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	thinsp: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	thorn: '\xFE',
	tilde: '\u02DC',
	times: '\xD7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	topf: '\u{1D565}',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	tscr: '\u{1D4C9}',
	tscy: '\u0446',
	tshcy: '\u045B',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	uArr: '\u21D1',
	uHar: '\u2963',
	uacute: '\xFA',
	uarr: '\u2191',
	ubrcy: '\u045E',
	ubreve: '\u016D',
	ucirc: '\xFB',
	ucy: '\u0443',
	udarr: '\u21C5',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	ufr: '\u{1D532}',
	ugrave: '\xF9',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	umacr: '\u016B',
	uml: '\xA8',
	uogon: '\u0173',
	uopf: '\u{1D566}',
	uparrow: '\u2191',
	updownarrow: '\u2195',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	upsi: '\u03C5',
	upsih: '\u03D2',
	upsilon: '\u03C5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	uring: '\u016F',
	urtri: '\u25F9',
	uscr: '\u{1D4CA}',
	utdot: '\u22F0',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	uuml: '\xFC',
	uwangle: '\u29A7',
	vArr: '\u21D5',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	vDash: '\u22A8',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	vcy: '\u0432',
	vdash: '\u22A2',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	verbar: '|',
	vert: '|',
	vfr: '\u{1D533}',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	vopf: '\u{1D567}',
	vprop: '\u221D',
	vrtri: '\u22B3',
	vscr: '\u{1D4CB}',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	vzigzag: '\u299A',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	wfr: '\u{1D534}',
	wopf: '\u{1D568}',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	wscr: '\u{1D4CC}',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	xfr: '\u{1D535}',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	xopf: '\u{1D569}',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	xscr: '\u{1D4CD}',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	yacute: '\xFD',
	yacy: '\u044F',
	ycirc: '\u0177',
	ycy: '\u044B',
	yen: '\xA5',
	yfr: '\u{1D536}',
	yicy: '\u0457',
	yopf: '\u{1D56A}',
	yscr: '\u{1D4CE}',
	yucy: '\u044E',
	yuml: '\xFF',
	zacute: '\u017A',
	zcaron: '\u017E',
	zcy: '\u0437',
	zdot: '\u017C',
	zeetrf: '\u2128',
	zeta: '\u03B6',
	zfr: '\u{1D537}',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	zopf: '\u{1D56B}',
	zscr: '\u{1D4CF}',
	zwj: '\u200D',
	zwnj: '\u200C',
}

// ../../node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js
var own = {}.hasOwnProperty
function decodeNamedCharacterReference(value) {
	return own.call(characterEntities, value) ? characterEntities[value] : false
}

// ../../node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js
function splice(list4, start, remove, items) {
	const end = list4.length
	let chunkStart = 0
	let parameters
	if (start < 0) {
		start = -start > end ? 0 : end + start
	} else {
		start = start > end ? end : start
	}
	remove = remove > 0 ? remove : 0
	if (items.length < 1e4) {
		parameters = Array.from(items)
		parameters.unshift(start, remove)
		list4.splice(...parameters)
	} else {
		if (remove) list4.splice(start, remove)
		while (chunkStart < items.length) {
			parameters = items.slice(chunkStart, chunkStart + 1e4)
			parameters.unshift(start, 0)
			list4.splice(...parameters)
			chunkStart += 1e4
			start += 1e4
		}
	}
}
function push(list4, items) {
	if (list4.length > 0) {
		splice(list4, list4.length, 0, items)
		return list4
	}
	return items
}

// ../../node_modules/.pnpm/micromark-util-combine-extensions@2.0.0/node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty
function combineExtensions(extensions) {
	const all3 = {}
	let index2 = -1
	while (++index2 < extensions.length) {
		syntaxExtension(all3, extensions[index2])
	}
	return all3
}
function syntaxExtension(all3, extension2) {
	let hook
	for (hook in extension2) {
		const maybe = hasOwnProperty.call(all3, hook) ? all3[hook] : void 0
		const left2 = maybe || (all3[hook] = {})
		const right2 = extension2[hook]
		let code3
		if (right2) {
			for (code3 in right2) {
				if (!hasOwnProperty.call(left2, code3)) left2[code3] = []
				const value = right2[code3]
				constructs(
					// @ts-expect-error Looks like a list.
					left2[code3],
					Array.isArray(value) ? value : value ? [value] : [],
				)
			}
		}
	}
}
function constructs(existing, list4) {
	let index2 = -1
	const before = []
	while (++index2 < list4.length) {
		;(list4[index2].add === 'after' ? existing : before).push(list4[index2])
	}
	splice(existing, 0, 0, before)
}

// ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.1/node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base) {
	const code3 = Number.parseInt(value, base)
	if (
		// C0 except for HT, LF, FF, CR, space.
		code3 < 9 ||
		code3 === 11 ||
		(code3 > 13 && code3 < 32) || // Control character (DEL) of C0, and C1 controls.
		(code3 > 126 && code3 < 160) || // Lone high surrogates and low surrogates.
		(code3 > 55295 && code3 < 57344) || // Noncharacters.
		(code3 > 64975 && code3 < 65008) /* eslint-disable no-bitwise */ ||
		(code3 & 65535) === 65535 ||
		(code3 & 65535) === 65534 /* eslint-enable no-bitwise */ ||
		// Out of range
		code3 > 1114111
	) {
		return '\uFFFD'
	}
	return String.fromCodePoint(code3)
}

// ../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.0/node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
	return value
		.replace(/[\t\n\r ]+/g, ' ')
		.replace(/^ | $/g, '')
		.toLowerCase()
		.toUpperCase()
}

// ../../node_modules/.pnpm/micromark-util-character@2.0.1/node_modules/micromark-util-character/index.js
var unicodePunctuationInternal = regexCheck(new RegExp('\\p{P}', 'u'))
var asciiAlpha = regexCheck(/[A-Za-z]/)
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/)
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/)
function asciiControl(code3) {
	return (
		// Special whitespace codes (which have negative values), C0 and Control
		// character DEL
		code3 !== null && (code3 < 32 || code3 === 127)
	)
}
var asciiDigit = regexCheck(/\d/)
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/)
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)
function markdownLineEnding(code3) {
	return code3 !== null && code3 < -2
}
function markdownLineEndingOrSpace(code3) {
	return code3 !== null && (code3 < 0 || code3 === 32)
}
function markdownSpace(code3) {
	return code3 === -2 || code3 === -1 || code3 === 32
}
function unicodePunctuation(code3) {
	return asciiPunctuation(code3) || unicodePunctuationInternal(code3)
}
var unicodeWhitespace = regexCheck(/\s/)
function regexCheck(regex2) {
	return check
	function check(code3) {
		return code3 !== null && code3 > -1 && regex2.test(String.fromCharCode(code3))
	}
}

// ../../node_modules/.pnpm/micromark-factory-space@2.0.0/node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok3, type, max) {
	const limit = max ? max - 1 : Number.POSITIVE_INFINITY
	let size = 0
	return start
	function start(code3) {
		if (markdownSpace(code3)) {
			effects.enter(type)
			return prefix(code3)
		}
		return ok3(code3)
	}
	function prefix(code3) {
		if (markdownSpace(code3) && size++ < limit) {
			effects.consume(code3)
			return prefix
		}
		effects.exit(type)
		return ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/content.js
var content = {
	tokenize: initializeContent,
}
function initializeContent(effects) {
	const contentStart = effects.attempt(
		this.parser.constructs.contentInitial,
		afterContentStartConstruct,
		paragraphInitial,
	)
	let previous3
	return contentStart
	function afterContentStartConstruct(code3) {
		if (code3 === null) {
			effects.consume(code3)
			return
		}
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return factorySpace(effects, contentStart, 'linePrefix')
	}
	function paragraphInitial(code3) {
		effects.enter('paragraph')
		return lineStart(code3)
	}
	function lineStart(code3) {
		const token = effects.enter('chunkText', {
			contentType: 'text',
			previous: previous3,
		})
		if (previous3) {
			previous3.next = token
		}
		previous3 = token
		return data(code3)
	}
	function data(code3) {
		if (code3 === null) {
			effects.exit('chunkText')
			effects.exit('paragraph')
			effects.consume(code3)
			return
		}
		if (markdownLineEnding(code3)) {
			effects.consume(code3)
			effects.exit('chunkText')
			return lineStart
		}
		effects.consume(code3)
		return data
	}
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/document.js
var document = {
	tokenize: initializeDocument,
}
var containerConstruct = {
	tokenize: tokenizeContainer,
}
function initializeDocument(effects) {
	const self2 = this
	const stack = []
	let continued = 0
	let childFlow
	let childToken
	let lineStartOffset
	return start
	function start(code3) {
		if (continued < stack.length) {
			const item = stack[continued]
			self2.containerState = item[1]
			return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3)
		}
		return checkNewContainers(code3)
	}
	function documentContinue(code3) {
		continued++
		if (self2.containerState._closeFlow) {
			self2.containerState._closeFlow = void 0
			if (childFlow) {
				closeFlow()
			}
			const indexBeforeExits = self2.events.length
			let indexBeforeFlow = indexBeforeExits
			let point3
			while (indexBeforeFlow--) {
				if (
					self2.events[indexBeforeFlow][0] === 'exit' &&
					self2.events[indexBeforeFlow][1].type === 'chunkFlow'
				) {
					point3 = self2.events[indexBeforeFlow][1].end
					break
				}
			}
			exitContainers(continued)
			let index2 = indexBeforeExits
			while (index2 < self2.events.length) {
				self2.events[index2][1].end = Object.assign({}, point3)
				index2++
			}
			splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits))
			self2.events.length = index2
			return checkNewContainers(code3)
		}
		return start(code3)
	}
	function checkNewContainers(code3) {
		if (continued === stack.length) {
			if (!childFlow) {
				return documentContinued(code3)
			}
			if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
				return flowStart(code3)
			}
			self2.interrupt = Boolean(
				childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack,
			)
		}
		self2.containerState = {}
		return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3)
	}
	function thereIsANewContainer(code3) {
		if (childFlow) closeFlow()
		exitContainers(continued)
		return documentContinued(code3)
	}
	function thereIsNoNewContainer(code3) {
		self2.parser.lazy[self2.now().line] = continued !== stack.length
		lineStartOffset = self2.now().offset
		return flowStart(code3)
	}
	function documentContinued(code3) {
		self2.containerState = {}
		return effects.attempt(containerConstruct, containerContinue, flowStart)(code3)
	}
	function containerContinue(code3) {
		continued++
		stack.push([self2.currentConstruct, self2.containerState])
		return documentContinued(code3)
	}
	function flowStart(code3) {
		if (code3 === null) {
			if (childFlow) closeFlow()
			exitContainers(0)
			effects.consume(code3)
			return
		}
		childFlow = childFlow || self2.parser.flow(self2.now())
		effects.enter('chunkFlow', {
			contentType: 'flow',
			previous: childToken,
			_tokenizer: childFlow,
		})
		return flowContinue(code3)
	}
	function flowContinue(code3) {
		if (code3 === null) {
			writeToChild(effects.exit('chunkFlow'), true)
			exitContainers(0)
			effects.consume(code3)
			return
		}
		if (markdownLineEnding(code3)) {
			effects.consume(code3)
			writeToChild(effects.exit('chunkFlow'))
			continued = 0
			self2.interrupt = void 0
			return start
		}
		effects.consume(code3)
		return flowContinue
	}
	function writeToChild(token, eof) {
		const stream = self2.sliceStream(token)
		if (eof) stream.push(null)
		token.previous = childToken
		if (childToken) childToken.next = token
		childToken = token
		childFlow.defineSkip(token.start)
		childFlow.write(stream)
		if (self2.parser.lazy[token.start.line]) {
			let index2 = childFlow.events.length
			while (index2--) {
				if (
					// The token starts before the line ending…
					childFlow.events[index2][1].start.offset < lineStartOffset && // …and either is not ended yet…
					(!childFlow.events[index2][1].end || // …or ends after it.
						childFlow.events[index2][1].end.offset > lineStartOffset)
				) {
					return
				}
			}
			const indexBeforeExits = self2.events.length
			let indexBeforeFlow = indexBeforeExits
			let seen
			let point3
			while (indexBeforeFlow--) {
				if (
					self2.events[indexBeforeFlow][0] === 'exit' &&
					self2.events[indexBeforeFlow][1].type === 'chunkFlow'
				) {
					if (seen) {
						point3 = self2.events[indexBeforeFlow][1].end
						break
					}
					seen = true
				}
			}
			exitContainers(continued)
			index2 = indexBeforeExits
			while (index2 < self2.events.length) {
				self2.events[index2][1].end = Object.assign({}, point3)
				index2++
			}
			splice(self2.events, indexBeforeFlow + 1, 0, self2.events.slice(indexBeforeExits))
			self2.events.length = index2
		}
	}
	function exitContainers(size) {
		let index2 = stack.length
		while (index2-- > size) {
			const entry = stack[index2]
			self2.containerState = entry[1]
			entry[0].exit.call(self2, effects)
		}
		stack.length = size
	}
	function closeFlow() {
		childFlow.write([null])
		childToken = void 0
		childFlow = void 0
		self2.containerState._closeFlow = void 0
	}
}
function tokenizeContainer(effects, ok3, nok) {
	return factorySpace(
		effects,
		effects.attempt(this.parser.constructs.document, ok3, nok),
		'linePrefix',
		this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
	)
}

// ../../node_modules/.pnpm/micromark-util-classify-character@2.0.0/node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
	if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
		return 1
	}
	if (unicodePunctuation(code3)) {
		return 2
	}
}

// ../../node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
	const called = []
	let index2 = -1
	while (++index2 < constructs2.length) {
		const resolve5 = constructs2[index2].resolveAll
		if (resolve5 && !called.includes(resolve5)) {
			events = resolve5(events, context)
			called.push(resolve5)
		}
	}
	return events
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
	name: 'attention',
	tokenize: tokenizeAttention,
	resolveAll: resolveAllAttention,
}
function resolveAllAttention(events, context) {
	let index2 = -1
	let open
	let group
	let text5
	let openingSequence
	let closingSequence
	let use
	let nextEvents
	let offset
	while (++index2 < events.length) {
		if (
			events[index2][0] === 'enter' &&
			events[index2][1].type === 'attentionSequence' &&
			events[index2][1]._close
		) {
			open = index2
			while (open--) {
				if (
					events[open][0] === 'exit' &&
					events[open][1].type === 'attentionSequence' &&
					events[open][1]._open && // If the markers are the same:
					context.sliceSerialize(events[open][1]).charCodeAt(0) ===
						context.sliceSerialize(events[index2][1]).charCodeAt(0)
				) {
					if (
						(events[open][1]._close || events[index2][1]._open) &&
						(events[index2][1].end.offset - events[index2][1].start.offset) % 3 &&
						!(
							(events[open][1].end.offset -
								events[open][1].start.offset +
								events[index2][1].end.offset -
								events[index2][1].start.offset) %
							3
						)
					) {
						continue
					}
					use =
						events[open][1].end.offset - events[open][1].start.offset > 1 &&
						events[index2][1].end.offset - events[index2][1].start.offset > 1
							? 2
							: 1
					const start = Object.assign({}, events[open][1].end)
					const end = Object.assign({}, events[index2][1].start)
					movePoint(start, -use)
					movePoint(end, use)
					openingSequence = {
						type: use > 1 ? 'strongSequence' : 'emphasisSequence',
						start,
						end: Object.assign({}, events[open][1].end),
					}
					closingSequence = {
						type: use > 1 ? 'strongSequence' : 'emphasisSequence',
						start: Object.assign({}, events[index2][1].start),
						end,
					}
					text5 = {
						type: use > 1 ? 'strongText' : 'emphasisText',
						start: Object.assign({}, events[open][1].end),
						end: Object.assign({}, events[index2][1].start),
					}
					group = {
						type: use > 1 ? 'strong' : 'emphasis',
						start: Object.assign({}, openingSequence.start),
						end: Object.assign({}, closingSequence.end),
					}
					events[open][1].end = Object.assign({}, openingSequence.start)
					events[index2][1].start = Object.assign({}, closingSequence.end)
					nextEvents = []
					if (events[open][1].end.offset - events[open][1].start.offset) {
						nextEvents = push(nextEvents, [
							['enter', events[open][1], context],
							['exit', events[open][1], context],
						])
					}
					nextEvents = push(nextEvents, [
						['enter', group, context],
						['enter', openingSequence, context],
						['exit', openingSequence, context],
						['enter', text5, context],
					])
					nextEvents = push(
						nextEvents,
						resolveAll(
							context.parser.constructs.insideSpan.null,
							events.slice(open + 1, index2),
							context,
						),
					)
					nextEvents = push(nextEvents, [
						['exit', text5, context],
						['enter', closingSequence, context],
						['exit', closingSequence, context],
						['exit', group, context],
					])
					if (events[index2][1].end.offset - events[index2][1].start.offset) {
						offset = 2
						nextEvents = push(nextEvents, [
							['enter', events[index2][1], context],
							['exit', events[index2][1], context],
						])
					} else {
						offset = 0
					}
					splice(events, open - 1, index2 - open + 3, nextEvents)
					index2 = open + nextEvents.length - offset - 2
					break
				}
			}
		}
	}
	index2 = -1
	while (++index2 < events.length) {
		if (events[index2][1].type === 'attentionSequence') {
			events[index2][1].type = 'data'
		}
	}
	return events
}
function tokenizeAttention(effects, ok3) {
	const attentionMarkers2 = this.parser.constructs.attentionMarkers.null
	const previous3 = this.previous
	const before = classifyCharacter(previous3)
	let marker
	return start
	function start(code3) {
		marker = code3
		effects.enter('attentionSequence')
		return inside(code3)
	}
	function inside(code3) {
		if (code3 === marker) {
			effects.consume(code3)
			return inside
		}
		const token = effects.exit('attentionSequence')
		const after = classifyCharacter(code3)
		const open = !after || (after === 2 && before) || attentionMarkers2.includes(code3)
		const close = !before || (before === 2 && after) || attentionMarkers2.includes(previous3)
		token._open = Boolean(marker === 42 ? open : open && (before || !close))
		token._close = Boolean(marker === 42 ? close : close && (after || !open))
		return ok3(code3)
	}
}
function movePoint(point3, offset) {
	point3.column += offset
	point3.offset += offset
	point3._bufferIndex += offset
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
	name: 'autolink',
	tokenize: tokenizeAutolink,
}
function tokenizeAutolink(effects, ok3, nok) {
	let size = 0
	return start
	function start(code3) {
		effects.enter('autolink')
		effects.enter('autolinkMarker')
		effects.consume(code3)
		effects.exit('autolinkMarker')
		effects.enter('autolinkProtocol')
		return open
	}
	function open(code3) {
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			return schemeOrEmailAtext
		}
		return emailAtext(code3)
	}
	function schemeOrEmailAtext(code3) {
		if (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) {
			size = 1
			return schemeInsideOrEmailAtext(code3)
		}
		return emailAtext(code3)
	}
	function schemeInsideOrEmailAtext(code3) {
		if (code3 === 58) {
			effects.consume(code3)
			size = 0
			return urlInside
		}
		if ((code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32) {
			effects.consume(code3)
			return schemeInsideOrEmailAtext
		}
		size = 0
		return emailAtext(code3)
	}
	function urlInside(code3) {
		if (code3 === 62) {
			effects.exit('autolinkProtocol')
			effects.enter('autolinkMarker')
			effects.consume(code3)
			effects.exit('autolinkMarker')
			effects.exit('autolink')
			return ok3
		}
		if (code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3)) {
			return nok(code3)
		}
		effects.consume(code3)
		return urlInside
	}
	function emailAtext(code3) {
		if (code3 === 64) {
			effects.consume(code3)
			return emailAtSignOrDot
		}
		if (asciiAtext(code3)) {
			effects.consume(code3)
			return emailAtext
		}
		return nok(code3)
	}
	function emailAtSignOrDot(code3) {
		return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3)
	}
	function emailLabel(code3) {
		if (code3 === 46) {
			effects.consume(code3)
			size = 0
			return emailAtSignOrDot
		}
		if (code3 === 62) {
			effects.exit('autolinkProtocol').type = 'autolinkEmail'
			effects.enter('autolinkMarker')
			effects.consume(code3)
			effects.exit('autolinkMarker')
			effects.exit('autolink')
			return ok3
		}
		return emailValue(code3)
	}
	function emailValue(code3) {
		if ((code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63) {
			const next = code3 === 45 ? emailValue : emailLabel
			effects.consume(code3)
			return next
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
	tokenize: tokenizeBlankLine,
	partial: true,
}
function tokenizeBlankLine(effects, ok3, nok) {
	return start
	function start(code3) {
		return markdownSpace(code3) ? factorySpace(effects, after, 'linePrefix')(code3) : after(code3)
	}
	function after(code3) {
		return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
	name: 'blockQuote',
	tokenize: tokenizeBlockQuoteStart,
	continuation: {
		tokenize: tokenizeBlockQuoteContinuation,
	},
	exit,
}
function tokenizeBlockQuoteStart(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		if (code3 === 62) {
			const state = self2.containerState
			if (!state.open) {
				effects.enter('blockQuote', {
					_container: true,
				})
				state.open = true
			}
			effects.enter('blockQuotePrefix')
			effects.enter('blockQuoteMarker')
			effects.consume(code3)
			effects.exit('blockQuoteMarker')
			return after
		}
		return nok(code3)
	}
	function after(code3) {
		if (markdownSpace(code3)) {
			effects.enter('blockQuotePrefixWhitespace')
			effects.consume(code3)
			effects.exit('blockQuotePrefixWhitespace')
			effects.exit('blockQuotePrefix')
			return ok3
		}
		effects.exit('blockQuotePrefix')
		return ok3(code3)
	}
}
function tokenizeBlockQuoteContinuation(effects, ok3, nok) {
	const self2 = this
	return contStart
	function contStart(code3) {
		if (markdownSpace(code3)) {
			return factorySpace(
				effects,
				contBefore,
				'linePrefix',
				self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
			)(code3)
		}
		return contBefore(code3)
	}
	function contBefore(code3) {
		return effects.attempt(blockQuote, ok3, nok)(code3)
	}
}
function exit(effects) {
	effects.exit('blockQuote')
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
	name: 'characterEscape',
	tokenize: tokenizeCharacterEscape,
}
function tokenizeCharacterEscape(effects, ok3, nok) {
	return start
	function start(code3) {
		effects.enter('characterEscape')
		effects.enter('escapeMarker')
		effects.consume(code3)
		effects.exit('escapeMarker')
		return inside
	}
	function inside(code3) {
		if (asciiPunctuation(code3)) {
			effects.enter('characterEscapeValue')
			effects.consume(code3)
			effects.exit('characterEscapeValue')
			effects.exit('characterEscape')
			return ok3
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
	name: 'characterReference',
	tokenize: tokenizeCharacterReference,
}
function tokenizeCharacterReference(effects, ok3, nok) {
	const self2 = this
	let size = 0
	let max
	let test
	return start
	function start(code3) {
		effects.enter('characterReference')
		effects.enter('characterReferenceMarker')
		effects.consume(code3)
		effects.exit('characterReferenceMarker')
		return open
	}
	function open(code3) {
		if (code3 === 35) {
			effects.enter('characterReferenceMarkerNumeric')
			effects.consume(code3)
			effects.exit('characterReferenceMarkerNumeric')
			return numeric
		}
		effects.enter('characterReferenceValue')
		max = 31
		test = asciiAlphanumeric
		return value(code3)
	}
	function numeric(code3) {
		if (code3 === 88 || code3 === 120) {
			effects.enter('characterReferenceMarkerHexadecimal')
			effects.consume(code3)
			effects.exit('characterReferenceMarkerHexadecimal')
			effects.enter('characterReferenceValue')
			max = 6
			test = asciiHexDigit
			return value
		}
		effects.enter('characterReferenceValue')
		max = 7
		test = asciiDigit
		return value(code3)
	}
	function value(code3) {
		if (code3 === 59 && size) {
			const token = effects.exit('characterReferenceValue')
			if (
				test === asciiAlphanumeric &&
				!decodeNamedCharacterReference(self2.sliceSerialize(token))
			) {
				return nok(code3)
			}
			effects.enter('characterReferenceMarker')
			effects.consume(code3)
			effects.exit('characterReferenceMarker')
			effects.exit('characterReference')
			return ok3
		}
		if (test(code3) && size++ < max) {
			effects.consume(code3)
			return value
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-fenced.js
var nonLazyContinuation = {
	tokenize: tokenizeNonLazyContinuation,
	partial: true,
}
var codeFenced = {
	name: 'codeFenced',
	tokenize: tokenizeCodeFenced,
	concrete: true,
}
function tokenizeCodeFenced(effects, ok3, nok) {
	const self2 = this
	const closeStart = {
		tokenize: tokenizeCloseStart,
		partial: true,
	}
	let initialPrefix = 0
	let sizeOpen = 0
	let marker
	return start
	function start(code3) {
		return beforeSequenceOpen(code3)
	}
	function beforeSequenceOpen(code3) {
		const tail = self2.events[self2.events.length - 1]
		initialPrefix =
			tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0
		marker = code3
		effects.enter('codeFenced')
		effects.enter('codeFencedFence')
		effects.enter('codeFencedFenceSequence')
		return sequenceOpen(code3)
	}
	function sequenceOpen(code3) {
		if (code3 === marker) {
			sizeOpen++
			effects.consume(code3)
			return sequenceOpen
		}
		if (sizeOpen < 3) {
			return nok(code3)
		}
		effects.exit('codeFencedFenceSequence')
		return markdownSpace(code3)
			? factorySpace(effects, infoBefore, 'whitespace')(code3)
			: infoBefore(code3)
	}
	function infoBefore(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('codeFencedFence')
			return self2.interrupt
				? ok3(code3)
				: effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3)
		}
		effects.enter('codeFencedFenceInfo')
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return info(code3)
	}
	function info(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('chunkString')
			effects.exit('codeFencedFenceInfo')
			return infoBefore(code3)
		}
		if (markdownSpace(code3)) {
			effects.exit('chunkString')
			effects.exit('codeFencedFenceInfo')
			return factorySpace(effects, metaBefore, 'whitespace')(code3)
		}
		if (code3 === 96 && code3 === marker) {
			return nok(code3)
		}
		effects.consume(code3)
		return info
	}
	function metaBefore(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			return infoBefore(code3)
		}
		effects.enter('codeFencedFenceMeta')
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return meta(code3)
	}
	function meta(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('chunkString')
			effects.exit('codeFencedFenceMeta')
			return infoBefore(code3)
		}
		if (code3 === 96 && code3 === marker) {
			return nok(code3)
		}
		effects.consume(code3)
		return meta
	}
	function atNonLazyBreak(code3) {
		return effects.attempt(closeStart, after, contentBefore)(code3)
	}
	function contentBefore(code3) {
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return contentStart
	}
	function contentStart(code3) {
		return initialPrefix > 0 && markdownSpace(code3)
			? factorySpace(effects, beforeContentChunk, 'linePrefix', initialPrefix + 1)(code3)
			: beforeContentChunk(code3)
	}
	function beforeContentChunk(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code3)
		}
		effects.enter('codeFlowValue')
		return contentChunk(code3)
	}
	function contentChunk(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('codeFlowValue')
			return beforeContentChunk(code3)
		}
		effects.consume(code3)
		return contentChunk
	}
	function after(code3) {
		effects.exit('codeFenced')
		return ok3(code3)
	}
	function tokenizeCloseStart(effects2, ok4, nok2) {
		let size = 0
		return startBefore
		function startBefore(code3) {
			effects2.enter('lineEnding')
			effects2.consume(code3)
			effects2.exit('lineEnding')
			return start2
		}
		function start2(code3) {
			effects2.enter('codeFencedFence')
			return markdownSpace(code3)
				? factorySpace(
						effects2,
						beforeSequenceClose,
						'linePrefix',
						self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
					)(code3)
				: beforeSequenceClose(code3)
		}
		function beforeSequenceClose(code3) {
			if (code3 === marker) {
				effects2.enter('codeFencedFenceSequence')
				return sequenceClose(code3)
			}
			return nok2(code3)
		}
		function sequenceClose(code3) {
			if (code3 === marker) {
				size++
				effects2.consume(code3)
				return sequenceClose
			}
			if (size >= sizeOpen) {
				effects2.exit('codeFencedFenceSequence')
				return markdownSpace(code3)
					? factorySpace(effects2, sequenceCloseAfter, 'whitespace')(code3)
					: sequenceCloseAfter(code3)
			}
			return nok2(code3)
		}
		function sequenceCloseAfter(code3) {
			if (code3 === null || markdownLineEnding(code3)) {
				effects2.exit('codeFencedFence')
				return ok4(code3)
			}
			return nok2(code3)
		}
	}
}
function tokenizeNonLazyContinuation(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return lineStart
	}
	function lineStart(code3) {
		return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
	name: 'codeIndented',
	tokenize: tokenizeCodeIndented,
}
var furtherStart = {
	tokenize: tokenizeFurtherStart,
	partial: true,
}
function tokenizeCodeIndented(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		effects.enter('codeIndented')
		return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code3)
	}
	function afterPrefix(code3) {
		const tail = self2.events[self2.events.length - 1]
		return tail &&
			tail[1].type === 'linePrefix' &&
			tail[2].sliceSerialize(tail[1], true).length >= 4
			? atBreak(code3)
			: nok(code3)
	}
	function atBreak(code3) {
		if (code3 === null) {
			return after(code3)
		}
		if (markdownLineEnding(code3)) {
			return effects.attempt(furtherStart, atBreak, after)(code3)
		}
		effects.enter('codeFlowValue')
		return inside(code3)
	}
	function inside(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('codeFlowValue')
			return atBreak(code3)
		}
		effects.consume(code3)
		return inside
	}
	function after(code3) {
		effects.exit('codeIndented')
		return ok3(code3)
	}
}
function tokenizeFurtherStart(effects, ok3, nok) {
	const self2 = this
	return furtherStart2
	function furtherStart2(code3) {
		if (self2.parser.lazy[self2.now().line]) {
			return nok(code3)
		}
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			return furtherStart2
		}
		return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code3)
	}
	function afterPrefix(code3) {
		const tail = self2.events[self2.events.length - 1]
		return tail &&
			tail[1].type === 'linePrefix' &&
			tail[2].sliceSerialize(tail[1], true).length >= 4
			? ok3(code3)
			: markdownLineEnding(code3)
				? furtherStart2(code3)
				: nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
	name: 'codeText',
	tokenize: tokenizeCodeText,
	resolve: resolveCodeText,
	previous,
}
function resolveCodeText(events) {
	let tailExitIndex = events.length - 4
	let headEnterIndex = 3
	let index2
	let enter
	if (
		(events[headEnterIndex][1].type === 'lineEnding' ||
			events[headEnterIndex][1].type === 'space') &&
		(events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')
	) {
		index2 = headEnterIndex
		while (++index2 < tailExitIndex) {
			if (events[index2][1].type === 'codeTextData') {
				events[headEnterIndex][1].type = 'codeTextPadding'
				events[tailExitIndex][1].type = 'codeTextPadding'
				headEnterIndex += 2
				tailExitIndex -= 2
				break
			}
		}
	}
	index2 = headEnterIndex - 1
	tailExitIndex++
	while (++index2 <= tailExitIndex) {
		if (enter === void 0) {
			if (index2 !== tailExitIndex && events[index2][1].type !== 'lineEnding') {
				enter = index2
			}
		} else if (index2 === tailExitIndex || events[index2][1].type === 'lineEnding') {
			events[enter][1].type = 'codeTextData'
			if (index2 !== enter + 2) {
				events[enter][1].end = events[index2 - 1][1].end
				events.splice(enter + 2, index2 - enter - 2)
				tailExitIndex -= index2 - enter - 2
				index2 = enter + 2
			}
			enter = void 0
		}
	}
	return events
}
function previous(code3) {
	return code3 !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape'
}
function tokenizeCodeText(effects, ok3, nok) {
	const self2 = this
	let sizeOpen = 0
	let size
	let token
	return start
	function start(code3) {
		effects.enter('codeText')
		effects.enter('codeTextSequence')
		return sequenceOpen(code3)
	}
	function sequenceOpen(code3) {
		if (code3 === 96) {
			effects.consume(code3)
			sizeOpen++
			return sequenceOpen
		}
		effects.exit('codeTextSequence')
		return between2(code3)
	}
	function between2(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		if (code3 === 32) {
			effects.enter('space')
			effects.consume(code3)
			effects.exit('space')
			return between2
		}
		if (code3 === 96) {
			token = effects.enter('codeTextSequence')
			size = 0
			return sequenceClose(code3)
		}
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			return between2
		}
		effects.enter('codeTextData')
		return data(code3)
	}
	function data(code3) {
		if (code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3)) {
			effects.exit('codeTextData')
			return between2(code3)
		}
		effects.consume(code3)
		return data
	}
	function sequenceClose(code3) {
		if (code3 === 96) {
			effects.consume(code3)
			size++
			return sequenceClose
		}
		if (size === sizeOpen) {
			effects.exit('codeTextSequence')
			effects.exit('codeText')
			return ok3(code3)
		}
		token.type = 'codeTextData'
		return data(code3)
	}
}

// ../../node_modules/.pnpm/micromark-util-subtokenize@2.0.0/node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
	const jumps = {}
	let index2 = -1
	let event
	let lineIndex
	let otherIndex
	let otherEvent
	let parameters
	let subevents
	let more
	while (++index2 < events.length) {
		while (index2 in jumps) {
			index2 = jumps[index2]
		}
		event = events[index2]
		if (
			index2 &&
			event[1].type === 'chunkFlow' &&
			events[index2 - 1][1].type === 'listItemPrefix'
		) {
			subevents = event[1]._tokenizer.events
			otherIndex = 0
			if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'lineEndingBlank') {
				otherIndex += 2
			}
			if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'content') {
				while (++otherIndex < subevents.length) {
					if (subevents[otherIndex][1].type === 'content') {
						break
					}
					if (subevents[otherIndex][1].type === 'chunkText') {
						subevents[otherIndex][1]._isInFirstContentOfListItem = true
						otherIndex++
					}
				}
			}
		}
		if (event[0] === 'enter') {
			if (event[1].contentType) {
				Object.assign(jumps, subcontent(events, index2))
				index2 = jumps[index2]
				more = true
			}
		} else if (event[1]._container) {
			otherIndex = index2
			lineIndex = void 0
			while (otherIndex--) {
				otherEvent = events[otherIndex]
				if (otherEvent[1].type === 'lineEnding' || otherEvent[1].type === 'lineEndingBlank') {
					if (otherEvent[0] === 'enter') {
						if (lineIndex) {
							events[lineIndex][1].type = 'lineEndingBlank'
						}
						otherEvent[1].type = 'lineEnding'
						lineIndex = otherIndex
					}
				} else {
					break
				}
			}
			if (lineIndex) {
				event[1].end = Object.assign({}, events[lineIndex][1].start)
				parameters = events.slice(lineIndex, index2)
				parameters.unshift(event)
				splice(events, lineIndex, index2 - lineIndex + 1, parameters)
			}
		}
	}
	return !more
}
function subcontent(events, eventIndex) {
	const token = events[eventIndex][1]
	const context = events[eventIndex][2]
	let startPosition = eventIndex - 1
	const startPositions = []
	const tokenizer = token._tokenizer || context.parser[token.contentType](token.start)
	const childEvents = tokenizer.events
	const jumps = []
	const gaps = {}
	let stream
	let previous3
	let index2 = -1
	let current = token
	let adjust = 0
	let start = 0
	const breaks = [start]
	while (current) {
		while (events[++startPosition][1] !== current) {}
		startPositions.push(startPosition)
		if (!current._tokenizer) {
			stream = context.sliceStream(current)
			if (!current.next) {
				stream.push(null)
			}
			if (previous3) {
				tokenizer.defineSkip(current.start)
			}
			if (current._isInFirstContentOfListItem) {
				tokenizer._gfmTasklistFirstContentOfListItem = true
			}
			tokenizer.write(stream)
			if (current._isInFirstContentOfListItem) {
				tokenizer._gfmTasklistFirstContentOfListItem = void 0
			}
		}
		previous3 = current
		current = current.next
	}
	current = token
	while (++index2 < childEvents.length) {
		if (
			// Find a void token that includes a break.
			childEvents[index2][0] === 'exit' &&
			childEvents[index2 - 1][0] === 'enter' &&
			childEvents[index2][1].type === childEvents[index2 - 1][1].type &&
			childEvents[index2][1].start.line !== childEvents[index2][1].end.line
		) {
			start = index2 + 1
			breaks.push(start)
			current._tokenizer = void 0
			current.previous = void 0
			current = current.next
		}
	}
	tokenizer.events = []
	if (current) {
		current._tokenizer = void 0
		current.previous = void 0
	} else {
		breaks.pop()
	}
	index2 = breaks.length
	while (index2--) {
		const slice = childEvents.slice(breaks[index2], breaks[index2 + 1])
		const start2 = startPositions.pop()
		jumps.unshift([start2, start2 + slice.length - 1])
		splice(events, start2, 2, slice)
	}
	index2 = -1
	while (++index2 < jumps.length) {
		gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1]
		adjust += jumps[index2][1] - jumps[index2][0] - 1
	}
	return gaps
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
	tokenize: tokenizeContent,
	resolve: resolveContent,
}
var continuationConstruct = {
	tokenize: tokenizeContinuation,
	partial: true,
}
function resolveContent(events) {
	subtokenize(events)
	return events
}
function tokenizeContent(effects, ok3) {
	let previous3
	return chunkStart
	function chunkStart(code3) {
		effects.enter('content')
		previous3 = effects.enter('chunkContent', {
			contentType: 'content',
		})
		return chunkInside(code3)
	}
	function chunkInside(code3) {
		if (code3 === null) {
			return contentEnd(code3)
		}
		if (markdownLineEnding(code3)) {
			return effects.check(continuationConstruct, contentContinue, contentEnd)(code3)
		}
		effects.consume(code3)
		return chunkInside
	}
	function contentEnd(code3) {
		effects.exit('chunkContent')
		effects.exit('content')
		return ok3(code3)
	}
	function contentContinue(code3) {
		effects.consume(code3)
		effects.exit('chunkContent')
		previous3.next = effects.enter('chunkContent', {
			contentType: 'content',
			previous: previous3,
		})
		previous3 = previous3.next
		return chunkInside
	}
}
function tokenizeContinuation(effects, ok3, nok) {
	const self2 = this
	return startLookahead
	function startLookahead(code3) {
		effects.exit('chunkContent')
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return factorySpace(effects, prefixed, 'linePrefix')
	}
	function prefixed(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			return nok(code3)
		}
		const tail = self2.events[self2.events.length - 1]
		if (
			!self2.parser.constructs.disable.null.includes('codeIndented') &&
			tail &&
			tail[1].type === 'linePrefix' &&
			tail[2].sliceSerialize(tail[1], true).length >= 4
		) {
			return ok3(code3)
		}
		return effects.interrupt(self2.parser.constructs.flow, nok, ok3)(code3)
	}
}

// ../../node_modules/.pnpm/micromark-factory-destination@2.0.0/node_modules/micromark-factory-destination/index.js
function factoryDestination(
	effects,
	ok3,
	nok,
	type,
	literalType2,
	literalMarkerType,
	rawType,
	stringType2,
	max,
) {
	const limit = max || Number.POSITIVE_INFINITY
	let balance = 0
	return start
	function start(code3) {
		if (code3 === 60) {
			effects.enter(type)
			effects.enter(literalType2)
			effects.enter(literalMarkerType)
			effects.consume(code3)
			effects.exit(literalMarkerType)
			return enclosedBefore
		}
		if (code3 === null || code3 === 32 || code3 === 41 || asciiControl(code3)) {
			return nok(code3)
		}
		effects.enter(type)
		effects.enter(rawType)
		effects.enter(stringType2)
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return raw(code3)
	}
	function enclosedBefore(code3) {
		if (code3 === 62) {
			effects.enter(literalMarkerType)
			effects.consume(code3)
			effects.exit(literalMarkerType)
			effects.exit(literalType2)
			effects.exit(type)
			return ok3
		}
		effects.enter(stringType2)
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return enclosed(code3)
	}
	function enclosed(code3) {
		if (code3 === 62) {
			effects.exit('chunkString')
			effects.exit(stringType2)
			return enclosedBefore(code3)
		}
		if (code3 === null || code3 === 60 || markdownLineEnding(code3)) {
			return nok(code3)
		}
		effects.consume(code3)
		return code3 === 92 ? enclosedEscape : enclosed
	}
	function enclosedEscape(code3) {
		if (code3 === 60 || code3 === 62 || code3 === 92) {
			effects.consume(code3)
			return enclosed
		}
		return enclosed(code3)
	}
	function raw(code3) {
		if (!balance && (code3 === null || code3 === 41 || markdownLineEndingOrSpace(code3))) {
			effects.exit('chunkString')
			effects.exit(stringType2)
			effects.exit(rawType)
			effects.exit(type)
			return ok3(code3)
		}
		if (balance < limit && code3 === 40) {
			effects.consume(code3)
			balance++
			return raw
		}
		if (code3 === 41) {
			effects.consume(code3)
			balance--
			return raw
		}
		if (code3 === null || code3 === 32 || code3 === 40 || asciiControl(code3)) {
			return nok(code3)
		}
		effects.consume(code3)
		return code3 === 92 ? rawEscape : raw
	}
	function rawEscape(code3) {
		if (code3 === 40 || code3 === 41 || code3 === 92) {
			effects.consume(code3)
			return raw
		}
		return raw(code3)
	}
}

// ../../node_modules/.pnpm/micromark-factory-label@2.0.0/node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok3, nok, type, markerType, stringType2) {
	const self2 = this
	let size = 0
	let seen
	return start
	function start(code3) {
		effects.enter(type)
		effects.enter(markerType)
		effects.consume(code3)
		effects.exit(markerType)
		effects.enter(stringType2)
		return atBreak
	}
	function atBreak(code3) {
		if (
			size > 999 ||
			code3 === null ||
			code3 === 91 ||
			(code3 === 93 && !seen) || // To do: remove in the future once we’ve switched from
			// `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
			// which doesn’t need this.
			// Hidden footnotes hook.
			/* c8 ignore next 3 */
			(code3 === 94 && !size && '_hiddenFootnoteSupport' in self2.parser.constructs)
		) {
			return nok(code3)
		}
		if (code3 === 93) {
			effects.exit(stringType2)
			effects.enter(markerType)
			effects.consume(code3)
			effects.exit(markerType)
			effects.exit(type)
			return ok3
		}
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			return atBreak
		}
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return labelInside(code3)
	}
	function labelInside(code3) {
		if (
			code3 === null ||
			code3 === 91 ||
			code3 === 93 ||
			markdownLineEnding(code3) ||
			size++ > 999
		) {
			effects.exit('chunkString')
			return atBreak(code3)
		}
		effects.consume(code3)
		if (!seen) seen = !markdownSpace(code3)
		return code3 === 92 ? labelEscape : labelInside
	}
	function labelEscape(code3) {
		if (code3 === 91 || code3 === 92 || code3 === 93) {
			effects.consume(code3)
			size++
			return labelInside
		}
		return labelInside(code3)
	}
}

// ../../node_modules/.pnpm/micromark-factory-title@2.0.0/node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok3, nok, type, markerType, stringType2) {
	let marker
	return start
	function start(code3) {
		if (code3 === 34 || code3 === 39 || code3 === 40) {
			effects.enter(type)
			effects.enter(markerType)
			effects.consume(code3)
			effects.exit(markerType)
			marker = code3 === 40 ? 41 : code3
			return begin
		}
		return nok(code3)
	}
	function begin(code3) {
		if (code3 === marker) {
			effects.enter(markerType)
			effects.consume(code3)
			effects.exit(markerType)
			effects.exit(type)
			return ok3
		}
		effects.enter(stringType2)
		return atBreak(code3)
	}
	function atBreak(code3) {
		if (code3 === marker) {
			effects.exit(stringType2)
			return begin(marker)
		}
		if (code3 === null) {
			return nok(code3)
		}
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			return factorySpace(effects, atBreak, 'linePrefix')
		}
		effects.enter('chunkString', {
			contentType: 'string',
		})
		return inside(code3)
	}
	function inside(code3) {
		if (code3 === marker || code3 === null || markdownLineEnding(code3)) {
			effects.exit('chunkString')
			return atBreak(code3)
		}
		effects.consume(code3)
		return code3 === 92 ? escape : inside
	}
	function escape(code3) {
		if (code3 === marker || code3 === 92) {
			effects.consume(code3)
			return inside
		}
		return inside(code3)
	}
}

// ../../node_modules/.pnpm/micromark-factory-whitespace@2.0.0/node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok3) {
	let seen
	return start
	function start(code3) {
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			seen = true
			return start
		}
		if (markdownSpace(code3)) {
			return factorySpace(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code3)
		}
		return ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
	name: 'definition',
	tokenize: tokenizeDefinition,
}
var titleBefore = {
	tokenize: tokenizeTitleBefore,
	partial: true,
}
function tokenizeDefinition(effects, ok3, nok) {
	const self2 = this
	let identifier
	return start
	function start(code3) {
		effects.enter('definition')
		return before(code3)
	}
	function before(code3) {
		return factoryLabel.call(
			self2,
			effects,
			labelAfter,
			// Note: we don’t need to reset the way `markdown-rs` does.
			nok,
			'definitionLabel',
			'definitionLabelMarker',
			'definitionLabelString',
		)(code3)
	}
	function labelAfter(code3) {
		identifier = normalizeIdentifier(
			self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1),
		)
		if (code3 === 58) {
			effects.enter('definitionMarker')
			effects.consume(code3)
			effects.exit('definitionMarker')
			return markerAfter
		}
		return nok(code3)
	}
	function markerAfter(code3) {
		return markdownLineEndingOrSpace(code3)
			? factoryWhitespace(effects, destinationBefore)(code3)
			: destinationBefore(code3)
	}
	function destinationBefore(code3) {
		return factoryDestination(
			effects,
			destinationAfter,
			// Note: we don’t need to reset the way `markdown-rs` does.
			nok,
			'definitionDestination',
			'definitionDestinationLiteral',
			'definitionDestinationLiteralMarker',
			'definitionDestinationRaw',
			'definitionDestinationString',
		)(code3)
	}
	function destinationAfter(code3) {
		return effects.attempt(titleBefore, after, after)(code3)
	}
	function after(code3) {
		return markdownSpace(code3)
			? factorySpace(effects, afterWhitespace, 'whitespace')(code3)
			: afterWhitespace(code3)
	}
	function afterWhitespace(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('definition')
			self2.parser.defined.push(identifier)
			return ok3(code3)
		}
		return nok(code3)
	}
}
function tokenizeTitleBefore(effects, ok3, nok) {
	return titleBefore2
	function titleBefore2(code3) {
		return markdownLineEndingOrSpace(code3)
			? factoryWhitespace(effects, beforeMarker)(code3)
			: nok(code3)
	}
	function beforeMarker(code3) {
		return factoryTitle(
			effects,
			titleAfter,
			nok,
			'definitionTitle',
			'definitionTitleMarker',
			'definitionTitleString',
		)(code3)
	}
	function titleAfter(code3) {
		return markdownSpace(code3)
			? factorySpace(effects, titleAfterOptionalWhitespace, 'whitespace')(code3)
			: titleAfterOptionalWhitespace(code3)
	}
	function titleAfterOptionalWhitespace(code3) {
		return code3 === null || markdownLineEnding(code3) ? ok3(code3) : nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
	name: 'hardBreakEscape',
	tokenize: tokenizeHardBreakEscape,
}
function tokenizeHardBreakEscape(effects, ok3, nok) {
	return start
	function start(code3) {
		effects.enter('hardBreakEscape')
		effects.consume(code3)
		return after
	}
	function after(code3) {
		if (markdownLineEnding(code3)) {
			effects.exit('hardBreakEscape')
			return ok3(code3)
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
	name: 'headingAtx',
	tokenize: tokenizeHeadingAtx,
	resolve: resolveHeadingAtx,
}
function resolveHeadingAtx(events, context) {
	let contentEnd = events.length - 2
	let contentStart = 3
	let content3
	let text5
	if (events[contentStart][1].type === 'whitespace') {
		contentStart += 2
	}
	if (contentEnd - 2 > contentStart && events[contentEnd][1].type === 'whitespace') {
		contentEnd -= 2
	}
	if (
		events[contentEnd][1].type === 'atxHeadingSequence' &&
		(contentStart === contentEnd - 1 ||
			(contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === 'whitespace'))
	) {
		contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
	}
	if (contentEnd > contentStart) {
		content3 = {
			type: 'atxHeadingText',
			start: events[contentStart][1].start,
			end: events[contentEnd][1].end,
		}
		text5 = {
			type: 'chunkText',
			start: events[contentStart][1].start,
			end: events[contentEnd][1].end,
			contentType: 'text',
		}
		splice(events, contentStart, contentEnd - contentStart + 1, [
			['enter', content3, context],
			['enter', text5, context],
			['exit', text5, context],
			['exit', content3, context],
		])
	}
	return events
}
function tokenizeHeadingAtx(effects, ok3, nok) {
	let size = 0
	return start
	function start(code3) {
		effects.enter('atxHeading')
		return before(code3)
	}
	function before(code3) {
		effects.enter('atxHeadingSequence')
		return sequenceOpen(code3)
	}
	function sequenceOpen(code3) {
		if (code3 === 35 && size++ < 6) {
			effects.consume(code3)
			return sequenceOpen
		}
		if (code3 === null || markdownLineEndingOrSpace(code3)) {
			effects.exit('atxHeadingSequence')
			return atBreak(code3)
		}
		return nok(code3)
	}
	function atBreak(code3) {
		if (code3 === 35) {
			effects.enter('atxHeadingSequence')
			return sequenceFurther(code3)
		}
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('atxHeading')
			return ok3(code3)
		}
		if (markdownSpace(code3)) {
			return factorySpace(effects, atBreak, 'whitespace')(code3)
		}
		effects.enter('atxHeadingText')
		return data(code3)
	}
	function sequenceFurther(code3) {
		if (code3 === 35) {
			effects.consume(code3)
			return sequenceFurther
		}
		effects.exit('atxHeadingSequence')
		return atBreak(code3)
	}
	function data(code3) {
		if (code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3)) {
			effects.exit('atxHeadingText')
			return atBreak(code3)
		}
		effects.consume(code3)
		return data
	}
}

// ../../node_modules/.pnpm/micromark-util-html-tag-name@2.0.0/node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
	'address',
	'article',
	'aside',
	'base',
	'basefont',
	'blockquote',
	'body',
	'caption',
	'center',
	'col',
	'colgroup',
	'dd',
	'details',
	'dialog',
	'dir',
	'div',
	'dl',
	'dt',
	'fieldset',
	'figcaption',
	'figure',
	'footer',
	'form',
	'frame',
	'frameset',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'head',
	'header',
	'hr',
	'html',
	'iframe',
	'legend',
	'li',
	'link',
	'main',
	'menu',
	'menuitem',
	'nav',
	'noframes',
	'ol',
	'optgroup',
	'option',
	'p',
	'param',
	'search',
	'section',
	'summary',
	'table',
	'tbody',
	'td',
	'tfoot',
	'th',
	'thead',
	'title',
	'tr',
	'track',
	'ul',
]
var htmlRawNames = ['pre', 'script', 'style', 'textarea']

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
	name: 'htmlFlow',
	tokenize: tokenizeHtmlFlow,
	resolveTo: resolveToHtmlFlow,
	concrete: true,
}
var blankLineBefore = {
	tokenize: tokenizeBlankLineBefore,
	partial: true,
}
var nonLazyContinuationStart = {
	tokenize: tokenizeNonLazyContinuationStart,
	partial: true,
}
function resolveToHtmlFlow(events) {
	let index2 = events.length
	while (index2--) {
		if (events[index2][0] === 'enter' && events[index2][1].type === 'htmlFlow') {
			break
		}
	}
	if (index2 > 1 && events[index2 - 2][1].type === 'linePrefix') {
		events[index2][1].start = events[index2 - 2][1].start
		events[index2 + 1][1].start = events[index2 - 2][1].start
		events.splice(index2 - 2, 2)
	}
	return events
}
function tokenizeHtmlFlow(effects, ok3, nok) {
	const self2 = this
	let marker
	let closingTag
	let buffer
	let index2
	let markerB
	return start
	function start(code3) {
		return before(code3)
	}
	function before(code3) {
		effects.enter('htmlFlow')
		effects.enter('htmlFlowData')
		effects.consume(code3)
		return open
	}
	function open(code3) {
		if (code3 === 33) {
			effects.consume(code3)
			return declarationOpen
		}
		if (code3 === 47) {
			effects.consume(code3)
			closingTag = true
			return tagCloseStart
		}
		if (code3 === 63) {
			effects.consume(code3)
			marker = 3
			return self2.interrupt ? ok3 : continuationDeclarationInside
		}
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			buffer = String.fromCharCode(code3)
			return tagName
		}
		return nok(code3)
	}
	function declarationOpen(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			marker = 2
			return commentOpenInside
		}
		if (code3 === 91) {
			effects.consume(code3)
			marker = 5
			index2 = 0
			return cdataOpenInside
		}
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			marker = 4
			return self2.interrupt ? ok3 : continuationDeclarationInside
		}
		return nok(code3)
	}
	function commentOpenInside(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return self2.interrupt ? ok3 : continuationDeclarationInside
		}
		return nok(code3)
	}
	function cdataOpenInside(code3) {
		const value = 'CDATA['
		if (code3 === value.charCodeAt(index2++)) {
			effects.consume(code3)
			if (index2 === value.length) {
				return self2.interrupt ? ok3 : continuation
			}
			return cdataOpenInside
		}
		return nok(code3)
	}
	function tagCloseStart(code3) {
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			buffer = String.fromCharCode(code3)
			return tagName
		}
		return nok(code3)
	}
	function tagName(code3) {
		if (code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
			const slash = code3 === 47
			const name = buffer.toLowerCase()
			if (!slash && !closingTag && htmlRawNames.includes(name)) {
				marker = 1
				return self2.interrupt ? ok3(code3) : continuation(code3)
			}
			if (htmlBlockNames.includes(buffer.toLowerCase())) {
				marker = 6
				if (slash) {
					effects.consume(code3)
					return basicSelfClosing
				}
				return self2.interrupt ? ok3(code3) : continuation(code3)
			}
			marker = 7
			return self2.interrupt && !self2.parser.lazy[self2.now().line]
				? nok(code3)
				: closingTag
					? completeClosingTagAfter(code3)
					: completeAttributeNameBefore(code3)
		}
		if (code3 === 45 || asciiAlphanumeric(code3)) {
			effects.consume(code3)
			buffer += String.fromCharCode(code3)
			return tagName
		}
		return nok(code3)
	}
	function basicSelfClosing(code3) {
		if (code3 === 62) {
			effects.consume(code3)
			return self2.interrupt ? ok3 : continuation
		}
		return nok(code3)
	}
	function completeClosingTagAfter(code3) {
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return completeClosingTagAfter
		}
		return completeEnd(code3)
	}
	function completeAttributeNameBefore(code3) {
		if (code3 === 47) {
			effects.consume(code3)
			return completeEnd
		}
		if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
			effects.consume(code3)
			return completeAttributeName
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return completeAttributeNameBefore
		}
		return completeEnd(code3)
	}
	function completeAttributeName(code3) {
		if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
			effects.consume(code3)
			return completeAttributeName
		}
		return completeAttributeNameAfter(code3)
	}
	function completeAttributeNameAfter(code3) {
		if (code3 === 61) {
			effects.consume(code3)
			return completeAttributeValueBefore
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return completeAttributeNameAfter
		}
		return completeAttributeNameBefore(code3)
	}
	function completeAttributeValueBefore(code3) {
		if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
			return nok(code3)
		}
		if (code3 === 34 || code3 === 39) {
			effects.consume(code3)
			markerB = code3
			return completeAttributeValueQuoted
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return completeAttributeValueBefore
		}
		return completeAttributeValueUnquoted(code3)
	}
	function completeAttributeValueQuoted(code3) {
		if (code3 === markerB) {
			effects.consume(code3)
			markerB = null
			return completeAttributeValueQuotedAfter
		}
		if (code3 === null || markdownLineEnding(code3)) {
			return nok(code3)
		}
		effects.consume(code3)
		return completeAttributeValueQuoted
	}
	function completeAttributeValueUnquoted(code3) {
		if (
			code3 === null ||
			code3 === 34 ||
			code3 === 39 ||
			code3 === 47 ||
			code3 === 60 ||
			code3 === 61 ||
			code3 === 62 ||
			code3 === 96 ||
			markdownLineEndingOrSpace(code3)
		) {
			return completeAttributeNameAfter(code3)
		}
		effects.consume(code3)
		return completeAttributeValueUnquoted
	}
	function completeAttributeValueQuotedAfter(code3) {
		if (code3 === 47 || code3 === 62 || markdownSpace(code3)) {
			return completeAttributeNameBefore(code3)
		}
		return nok(code3)
	}
	function completeEnd(code3) {
		if (code3 === 62) {
			effects.consume(code3)
			return completeAfter
		}
		return nok(code3)
	}
	function completeAfter(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			return continuation(code3)
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return completeAfter
		}
		return nok(code3)
	}
	function continuation(code3) {
		if (code3 === 45 && marker === 2) {
			effects.consume(code3)
			return continuationCommentInside
		}
		if (code3 === 60 && marker === 1) {
			effects.consume(code3)
			return continuationRawTagOpen
		}
		if (code3 === 62 && marker === 4) {
			effects.consume(code3)
			return continuationClose
		}
		if (code3 === 63 && marker === 3) {
			effects.consume(code3)
			return continuationDeclarationInside
		}
		if (code3 === 93 && marker === 5) {
			effects.consume(code3)
			return continuationCdataInside
		}
		if (markdownLineEnding(code3) && (marker === 6 || marker === 7)) {
			effects.exit('htmlFlowData')
			return effects.check(blankLineBefore, continuationAfter, continuationStart)(code3)
		}
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('htmlFlowData')
			return continuationStart(code3)
		}
		effects.consume(code3)
		return continuation
	}
	function continuationStart(code3) {
		return effects.check(
			nonLazyContinuationStart,
			continuationStartNonLazy,
			continuationAfter,
		)(code3)
	}
	function continuationStartNonLazy(code3) {
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return continuationBefore
	}
	function continuationBefore(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			return continuationStart(code3)
		}
		effects.enter('htmlFlowData')
		return continuation(code3)
	}
	function continuationCommentInside(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return continuationDeclarationInside
		}
		return continuation(code3)
	}
	function continuationRawTagOpen(code3) {
		if (code3 === 47) {
			effects.consume(code3)
			buffer = ''
			return continuationRawEndTag
		}
		return continuation(code3)
	}
	function continuationRawEndTag(code3) {
		if (code3 === 62) {
			const name = buffer.toLowerCase()
			if (htmlRawNames.includes(name)) {
				effects.consume(code3)
				return continuationClose
			}
			return continuation(code3)
		}
		if (asciiAlpha(code3) && buffer.length < 8) {
			effects.consume(code3)
			buffer += String.fromCharCode(code3)
			return continuationRawEndTag
		}
		return continuation(code3)
	}
	function continuationCdataInside(code3) {
		if (code3 === 93) {
			effects.consume(code3)
			return continuationDeclarationInside
		}
		return continuation(code3)
	}
	function continuationDeclarationInside(code3) {
		if (code3 === 62) {
			effects.consume(code3)
			return continuationClose
		}
		if (code3 === 45 && marker === 2) {
			effects.consume(code3)
			return continuationDeclarationInside
		}
		return continuation(code3)
	}
	function continuationClose(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('htmlFlowData')
			return continuationAfter(code3)
		}
		effects.consume(code3)
		return continuationClose
	}
	function continuationAfter(code3) {
		effects.exit('htmlFlow')
		return ok3(code3)
	}
}
function tokenizeNonLazyContinuationStart(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		if (markdownLineEnding(code3)) {
			effects.enter('lineEnding')
			effects.consume(code3)
			effects.exit('lineEnding')
			return after
		}
		return nok(code3)
	}
	function after(code3) {
		return self2.parser.lazy[self2.now().line] ? nok(code3) : ok3(code3)
	}
}
function tokenizeBlankLineBefore(effects, ok3, nok) {
	return start
	function start(code3) {
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return effects.attempt(blankLine, ok3, nok)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
	name: 'htmlText',
	tokenize: tokenizeHtmlText,
}
function tokenizeHtmlText(effects, ok3, nok) {
	const self2 = this
	let marker
	let index2
	let returnState
	return start
	function start(code3) {
		effects.enter('htmlText')
		effects.enter('htmlTextData')
		effects.consume(code3)
		return open
	}
	function open(code3) {
		if (code3 === 33) {
			effects.consume(code3)
			return declarationOpen
		}
		if (code3 === 47) {
			effects.consume(code3)
			return tagCloseStart
		}
		if (code3 === 63) {
			effects.consume(code3)
			return instruction
		}
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			return tagOpen
		}
		return nok(code3)
	}
	function declarationOpen(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return commentOpenInside
		}
		if (code3 === 91) {
			effects.consume(code3)
			index2 = 0
			return cdataOpenInside
		}
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			return declaration
		}
		return nok(code3)
	}
	function commentOpenInside(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return commentEnd
		}
		return nok(code3)
	}
	function comment(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		if (code3 === 45) {
			effects.consume(code3)
			return commentClose
		}
		if (markdownLineEnding(code3)) {
			returnState = comment
			return lineEndingBefore(code3)
		}
		effects.consume(code3)
		return comment
	}
	function commentClose(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return commentEnd
		}
		return comment(code3)
	}
	function commentEnd(code3) {
		return code3 === 62 ? end(code3) : code3 === 45 ? commentClose(code3) : comment(code3)
	}
	function cdataOpenInside(code3) {
		const value = 'CDATA['
		if (code3 === value.charCodeAt(index2++)) {
			effects.consume(code3)
			return index2 === value.length ? cdata : cdataOpenInside
		}
		return nok(code3)
	}
	function cdata(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		if (code3 === 93) {
			effects.consume(code3)
			return cdataClose
		}
		if (markdownLineEnding(code3)) {
			returnState = cdata
			return lineEndingBefore(code3)
		}
		effects.consume(code3)
		return cdata
	}
	function cdataClose(code3) {
		if (code3 === 93) {
			effects.consume(code3)
			return cdataEnd
		}
		return cdata(code3)
	}
	function cdataEnd(code3) {
		if (code3 === 62) {
			return end(code3)
		}
		if (code3 === 93) {
			effects.consume(code3)
			return cdataEnd
		}
		return cdata(code3)
	}
	function declaration(code3) {
		if (code3 === null || code3 === 62) {
			return end(code3)
		}
		if (markdownLineEnding(code3)) {
			returnState = declaration
			return lineEndingBefore(code3)
		}
		effects.consume(code3)
		return declaration
	}
	function instruction(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		if (code3 === 63) {
			effects.consume(code3)
			return instructionClose
		}
		if (markdownLineEnding(code3)) {
			returnState = instruction
			return lineEndingBefore(code3)
		}
		effects.consume(code3)
		return instruction
	}
	function instructionClose(code3) {
		return code3 === 62 ? end(code3) : instruction(code3)
	}
	function tagCloseStart(code3) {
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			return tagClose
		}
		return nok(code3)
	}
	function tagClose(code3) {
		if (code3 === 45 || asciiAlphanumeric(code3)) {
			effects.consume(code3)
			return tagClose
		}
		return tagCloseBetween(code3)
	}
	function tagCloseBetween(code3) {
		if (markdownLineEnding(code3)) {
			returnState = tagCloseBetween
			return lineEndingBefore(code3)
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return tagCloseBetween
		}
		return end(code3)
	}
	function tagOpen(code3) {
		if (code3 === 45 || asciiAlphanumeric(code3)) {
			effects.consume(code3)
			return tagOpen
		}
		if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
			return tagOpenBetween(code3)
		}
		return nok(code3)
	}
	function tagOpenBetween(code3) {
		if (code3 === 47) {
			effects.consume(code3)
			return end
		}
		if (code3 === 58 || code3 === 95 || asciiAlpha(code3)) {
			effects.consume(code3)
			return tagOpenAttributeName
		}
		if (markdownLineEnding(code3)) {
			returnState = tagOpenBetween
			return lineEndingBefore(code3)
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return tagOpenBetween
		}
		return end(code3)
	}
	function tagOpenAttributeName(code3) {
		if (code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3)) {
			effects.consume(code3)
			return tagOpenAttributeName
		}
		return tagOpenAttributeNameAfter(code3)
	}
	function tagOpenAttributeNameAfter(code3) {
		if (code3 === 61) {
			effects.consume(code3)
			return tagOpenAttributeValueBefore
		}
		if (markdownLineEnding(code3)) {
			returnState = tagOpenAttributeNameAfter
			return lineEndingBefore(code3)
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return tagOpenAttributeNameAfter
		}
		return tagOpenBetween(code3)
	}
	function tagOpenAttributeValueBefore(code3) {
		if (code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96) {
			return nok(code3)
		}
		if (code3 === 34 || code3 === 39) {
			effects.consume(code3)
			marker = code3
			return tagOpenAttributeValueQuoted
		}
		if (markdownLineEnding(code3)) {
			returnState = tagOpenAttributeValueBefore
			return lineEndingBefore(code3)
		}
		if (markdownSpace(code3)) {
			effects.consume(code3)
			return tagOpenAttributeValueBefore
		}
		effects.consume(code3)
		return tagOpenAttributeValueUnquoted
	}
	function tagOpenAttributeValueQuoted(code3) {
		if (code3 === marker) {
			effects.consume(code3)
			marker = void 0
			return tagOpenAttributeValueQuotedAfter
		}
		if (code3 === null) {
			return nok(code3)
		}
		if (markdownLineEnding(code3)) {
			returnState = tagOpenAttributeValueQuoted
			return lineEndingBefore(code3)
		}
		effects.consume(code3)
		return tagOpenAttributeValueQuoted
	}
	function tagOpenAttributeValueUnquoted(code3) {
		if (
			code3 === null ||
			code3 === 34 ||
			code3 === 39 ||
			code3 === 60 ||
			code3 === 61 ||
			code3 === 96
		) {
			return nok(code3)
		}
		if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
			return tagOpenBetween(code3)
		}
		effects.consume(code3)
		return tagOpenAttributeValueUnquoted
	}
	function tagOpenAttributeValueQuotedAfter(code3) {
		if (code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3)) {
			return tagOpenBetween(code3)
		}
		return nok(code3)
	}
	function end(code3) {
		if (code3 === 62) {
			effects.consume(code3)
			effects.exit('htmlTextData')
			effects.exit('htmlText')
			return ok3
		}
		return nok(code3)
	}
	function lineEndingBefore(code3) {
		effects.exit('htmlTextData')
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return lineEndingAfter
	}
	function lineEndingAfter(code3) {
		return markdownSpace(code3)
			? factorySpace(
					effects,
					lineEndingAfterPrefix,
					'linePrefix',
					self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
				)(code3)
			: lineEndingAfterPrefix(code3)
	}
	function lineEndingAfterPrefix(code3) {
		effects.enter('htmlTextData')
		return returnState(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
	name: 'labelEnd',
	tokenize: tokenizeLabelEnd,
	resolveTo: resolveToLabelEnd,
	resolveAll: resolveAllLabelEnd,
}
var resourceConstruct = {
	tokenize: tokenizeResource,
}
var referenceFullConstruct = {
	tokenize: tokenizeReferenceFull,
}
var referenceCollapsedConstruct = {
	tokenize: tokenizeReferenceCollapsed,
}
function resolveAllLabelEnd(events) {
	let index2 = -1
	while (++index2 < events.length) {
		const token = events[index2][1]
		if (token.type === 'labelImage' || token.type === 'labelLink' || token.type === 'labelEnd') {
			events.splice(index2 + 1, token.type === 'labelImage' ? 4 : 2)
			token.type = 'data'
			index2++
		}
	}
	return events
}
function resolveToLabelEnd(events, context) {
	let index2 = events.length
	let offset = 0
	let token
	let open
	let close
	let media
	while (index2--) {
		token = events[index2][1]
		if (open) {
			if (token.type === 'link' || (token.type === 'labelLink' && token._inactive)) {
				break
			}
			if (events[index2][0] === 'enter' && token.type === 'labelLink') {
				token._inactive = true
			}
		} else if (close) {
			if (
				events[index2][0] === 'enter' &&
				(token.type === 'labelImage' || token.type === 'labelLink') &&
				!token._balanced
			) {
				open = index2
				if (token.type !== 'labelLink') {
					offset = 2
					break
				}
			}
		} else if (token.type === 'labelEnd') {
			close = index2
		}
	}
	const group = {
		type: events[open][1].type === 'labelLink' ? 'link' : 'image',
		start: Object.assign({}, events[open][1].start),
		end: Object.assign({}, events[events.length - 1][1].end),
	}
	const label = {
		type: 'label',
		start: Object.assign({}, events[open][1].start),
		end: Object.assign({}, events[close][1].end),
	}
	const text5 = {
		type: 'labelText',
		start: Object.assign({}, events[open + offset + 2][1].end),
		end: Object.assign({}, events[close - 2][1].start),
	}
	media = [
		['enter', group, context],
		['enter', label, context],
	]
	media = push(media, events.slice(open + 1, open + offset + 3))
	media = push(media, [['enter', text5, context]])
	media = push(
		media,
		resolveAll(
			context.parser.constructs.insideSpan.null,
			events.slice(open + offset + 4, close - 3),
			context,
		),
	)
	media = push(media, [
		['exit', text5, context],
		events[close - 2],
		events[close - 1],
		['exit', label, context],
	])
	media = push(media, events.slice(close + 1))
	media = push(media, [['exit', group, context]])
	splice(events, open, events.length, media)
	return events
}
function tokenizeLabelEnd(effects, ok3, nok) {
	const self2 = this
	let index2 = self2.events.length
	let labelStart
	let defined
	while (index2--) {
		if (
			(self2.events[index2][1].type === 'labelImage' ||
				self2.events[index2][1].type === 'labelLink') &&
			!self2.events[index2][1]._balanced
		) {
			labelStart = self2.events[index2][1]
			break
		}
	}
	return start
	function start(code3) {
		if (!labelStart) {
			return nok(code3)
		}
		if (labelStart._inactive) {
			return labelEndNok(code3)
		}
		defined = self2.parser.defined.includes(
			normalizeIdentifier(
				self2.sliceSerialize({
					start: labelStart.end,
					end: self2.now(),
				}),
			),
		)
		effects.enter('labelEnd')
		effects.enter('labelMarker')
		effects.consume(code3)
		effects.exit('labelMarker')
		effects.exit('labelEnd')
		return after
	}
	function after(code3) {
		if (code3 === 40) {
			return effects.attempt(
				resourceConstruct,
				labelEndOk,
				defined ? labelEndOk : labelEndNok,
			)(code3)
		}
		if (code3 === 91) {
			return effects.attempt(
				referenceFullConstruct,
				labelEndOk,
				defined ? referenceNotFull : labelEndNok,
			)(code3)
		}
		return defined ? labelEndOk(code3) : labelEndNok(code3)
	}
	function referenceNotFull(code3) {
		return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code3)
	}
	function labelEndOk(code3) {
		return ok3(code3)
	}
	function labelEndNok(code3) {
		labelStart._balanced = true
		return nok(code3)
	}
}
function tokenizeResource(effects, ok3, nok) {
	return resourceStart
	function resourceStart(code3) {
		effects.enter('resource')
		effects.enter('resourceMarker')
		effects.consume(code3)
		effects.exit('resourceMarker')
		return resourceBefore
	}
	function resourceBefore(code3) {
		return markdownLineEndingOrSpace(code3)
			? factoryWhitespace(effects, resourceOpen)(code3)
			: resourceOpen(code3)
	}
	function resourceOpen(code3) {
		if (code3 === 41) {
			return resourceEnd(code3)
		}
		return factoryDestination(
			effects,
			resourceDestinationAfter,
			resourceDestinationMissing,
			'resourceDestination',
			'resourceDestinationLiteral',
			'resourceDestinationLiteralMarker',
			'resourceDestinationRaw',
			'resourceDestinationString',
			32,
		)(code3)
	}
	function resourceDestinationAfter(code3) {
		return markdownLineEndingOrSpace(code3)
			? factoryWhitespace(effects, resourceBetween)(code3)
			: resourceEnd(code3)
	}
	function resourceDestinationMissing(code3) {
		return nok(code3)
	}
	function resourceBetween(code3) {
		if (code3 === 34 || code3 === 39 || code3 === 40) {
			return factoryTitle(
				effects,
				resourceTitleAfter,
				nok,
				'resourceTitle',
				'resourceTitleMarker',
				'resourceTitleString',
			)(code3)
		}
		return resourceEnd(code3)
	}
	function resourceTitleAfter(code3) {
		return markdownLineEndingOrSpace(code3)
			? factoryWhitespace(effects, resourceEnd)(code3)
			: resourceEnd(code3)
	}
	function resourceEnd(code3) {
		if (code3 === 41) {
			effects.enter('resourceMarker')
			effects.consume(code3)
			effects.exit('resourceMarker')
			effects.exit('resource')
			return ok3
		}
		return nok(code3)
	}
}
function tokenizeReferenceFull(effects, ok3, nok) {
	const self2 = this
	return referenceFull
	function referenceFull(code3) {
		return factoryLabel.call(
			self2,
			effects,
			referenceFullAfter,
			referenceFullMissing,
			'reference',
			'referenceMarker',
			'referenceString',
		)(code3)
	}
	function referenceFullAfter(code3) {
		return self2.parser.defined.includes(
			normalizeIdentifier(
				self2.sliceSerialize(self2.events[self2.events.length - 1][1]).slice(1, -1),
			),
		)
			? ok3(code3)
			: nok(code3)
	}
	function referenceFullMissing(code3) {
		return nok(code3)
	}
}
function tokenizeReferenceCollapsed(effects, ok3, nok) {
	return referenceCollapsedStart
	function referenceCollapsedStart(code3) {
		effects.enter('reference')
		effects.enter('referenceMarker')
		effects.consume(code3)
		effects.exit('referenceMarker')
		return referenceCollapsedOpen
	}
	function referenceCollapsedOpen(code3) {
		if (code3 === 93) {
			effects.enter('referenceMarker')
			effects.consume(code3)
			effects.exit('referenceMarker')
			effects.exit('reference')
			return ok3
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
	name: 'labelStartImage',
	tokenize: tokenizeLabelStartImage,
	resolveAll: labelEnd.resolveAll,
}
function tokenizeLabelStartImage(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		effects.enter('labelImage')
		effects.enter('labelImageMarker')
		effects.consume(code3)
		effects.exit('labelImageMarker')
		return open
	}
	function open(code3) {
		if (code3 === 91) {
			effects.enter('labelMarker')
			effects.consume(code3)
			effects.exit('labelMarker')
			effects.exit('labelImage')
			return after
		}
		return nok(code3)
	}
	function after(code3) {
		return code3 === 94 && '_hiddenFootnoteSupport' in self2.parser.constructs
			? nok(code3)
			: ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
	name: 'labelStartLink',
	tokenize: tokenizeLabelStartLink,
	resolveAll: labelEnd.resolveAll,
}
function tokenizeLabelStartLink(effects, ok3, nok) {
	const self2 = this
	return start
	function start(code3) {
		effects.enter('labelLink')
		effects.enter('labelMarker')
		effects.consume(code3)
		effects.exit('labelMarker')
		effects.exit('labelLink')
		return after
	}
	function after(code3) {
		return code3 === 94 && '_hiddenFootnoteSupport' in self2.parser.constructs
			? nok(code3)
			: ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
	name: 'lineEnding',
	tokenize: tokenizeLineEnding,
}
function tokenizeLineEnding(effects, ok3) {
	return start
	function start(code3) {
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		return factorySpace(effects, ok3, 'linePrefix')
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
	name: 'thematicBreak',
	tokenize: tokenizeThematicBreak,
}
function tokenizeThematicBreak(effects, ok3, nok) {
	let size = 0
	let marker
	return start
	function start(code3) {
		effects.enter('thematicBreak')
		return before(code3)
	}
	function before(code3) {
		marker = code3
		return atBreak(code3)
	}
	function atBreak(code3) {
		if (code3 === marker) {
			effects.enter('thematicBreakSequence')
			return sequence(code3)
		}
		if (size >= 3 && (code3 === null || markdownLineEnding(code3))) {
			effects.exit('thematicBreak')
			return ok3(code3)
		}
		return nok(code3)
	}
	function sequence(code3) {
		if (code3 === marker) {
			effects.consume(code3)
			size++
			return sequence
		}
		effects.exit('thematicBreakSequence')
		return markdownSpace(code3)
			? factorySpace(effects, atBreak, 'whitespace')(code3)
			: atBreak(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/list.js
var list = {
	name: 'list',
	tokenize: tokenizeListStart,
	continuation: {
		tokenize: tokenizeListContinuation,
	},
	exit: tokenizeListEnd,
}
var listItemPrefixWhitespaceConstruct = {
	tokenize: tokenizeListItemPrefixWhitespace,
	partial: true,
}
var indentConstruct = {
	tokenize: tokenizeIndent,
	partial: true,
}
function tokenizeListStart(effects, ok3, nok) {
	const self2 = this
	const tail = self2.events[self2.events.length - 1]
	let initialSize =
		tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0
	let size = 0
	return start
	function start(code3) {
		const kind =
			self2.containerState.type ||
			(code3 === 42 || code3 === 43 || code3 === 45 ? 'listUnordered' : 'listOrdered')
		if (
			kind === 'listUnordered'
				? !self2.containerState.marker || code3 === self2.containerState.marker
				: asciiDigit(code3)
		) {
			if (!self2.containerState.type) {
				self2.containerState.type = kind
				effects.enter(kind, {
					_container: true,
				})
			}
			if (kind === 'listUnordered') {
				effects.enter('listItemPrefix')
				return code3 === 42 || code3 === 45
					? effects.check(thematicBreak, nok, atMarker)(code3)
					: atMarker(code3)
			}
			if (!self2.interrupt || code3 === 49) {
				effects.enter('listItemPrefix')
				effects.enter('listItemValue')
				return inside(code3)
			}
		}
		return nok(code3)
	}
	function inside(code3) {
		if (asciiDigit(code3) && ++size < 10) {
			effects.consume(code3)
			return inside
		}
		if (
			(!self2.interrupt || size < 2) &&
			(self2.containerState.marker
				? code3 === self2.containerState.marker
				: code3 === 41 || code3 === 46)
		) {
			effects.exit('listItemValue')
			return atMarker(code3)
		}
		return nok(code3)
	}
	function atMarker(code3) {
		effects.enter('listItemMarker')
		effects.consume(code3)
		effects.exit('listItemMarker')
		self2.containerState.marker = self2.containerState.marker || code3
		return effects.check(
			blankLine,
			// Can’t be empty when interrupting.
			self2.interrupt ? nok : onBlank,
			effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix),
		)
	}
	function onBlank(code3) {
		self2.containerState.initialBlankLine = true
		initialSize++
		return endOfPrefix(code3)
	}
	function otherPrefix(code3) {
		if (markdownSpace(code3)) {
			effects.enter('listItemPrefixWhitespace')
			effects.consume(code3)
			effects.exit('listItemPrefixWhitespace')
			return endOfPrefix
		}
		return nok(code3)
	}
	function endOfPrefix(code3) {
		self2.containerState.size =
			initialSize + self2.sliceSerialize(effects.exit('listItemPrefix'), true).length
		return ok3(code3)
	}
}
function tokenizeListContinuation(effects, ok3, nok) {
	const self2 = this
	self2.containerState._closeFlow = void 0
	return effects.check(blankLine, onBlank, notBlank)
	function onBlank(code3) {
		self2.containerState.furtherBlankLines =
			self2.containerState.furtherBlankLines || self2.containerState.initialBlankLine
		return factorySpace(effects, ok3, 'listItemIndent', self2.containerState.size + 1)(code3)
	}
	function notBlank(code3) {
		if (self2.containerState.furtherBlankLines || !markdownSpace(code3)) {
			self2.containerState.furtherBlankLines = void 0
			self2.containerState.initialBlankLine = void 0
			return notInCurrentItem(code3)
		}
		self2.containerState.furtherBlankLines = void 0
		self2.containerState.initialBlankLine = void 0
		return effects.attempt(indentConstruct, ok3, notInCurrentItem)(code3)
	}
	function notInCurrentItem(code3) {
		self2.containerState._closeFlow = true
		self2.interrupt = void 0
		return factorySpace(
			effects,
			effects.attempt(list, ok3, nok),
			'linePrefix',
			self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
		)(code3)
	}
}
function tokenizeIndent(effects, ok3, nok) {
	const self2 = this
	return factorySpace(effects, afterPrefix, 'listItemIndent', self2.containerState.size + 1)
	function afterPrefix(code3) {
		const tail = self2.events[self2.events.length - 1]
		return tail &&
			tail[1].type === 'listItemIndent' &&
			tail[2].sliceSerialize(tail[1], true).length === self2.containerState.size
			? ok3(code3)
			: nok(code3)
	}
}
function tokenizeListEnd(effects) {
	effects.exit(this.containerState.type)
}
function tokenizeListItemPrefixWhitespace(effects, ok3, nok) {
	const self2 = this
	return factorySpace(
		effects,
		afterPrefix,
		'listItemPrefixWhitespace',
		self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4 + 1,
	)
	function afterPrefix(code3) {
		const tail = self2.events[self2.events.length - 1]
		return !markdownSpace(code3) && tail && tail[1].type === 'listItemPrefixWhitespace'
			? ok3(code3)
			: nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-core-commonmark@2.0.0/node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
	name: 'setextUnderline',
	tokenize: tokenizeSetextUnderline,
	resolveTo: resolveToSetextUnderline,
}
function resolveToSetextUnderline(events, context) {
	let index2 = events.length
	let content3
	let text5
	let definition3
	while (index2--) {
		if (events[index2][0] === 'enter') {
			if (events[index2][1].type === 'content') {
				content3 = index2
				break
			}
			if (events[index2][1].type === 'paragraph') {
				text5 = index2
			}
		} else {
			if (events[index2][1].type === 'content') {
				events.splice(index2, 1)
			}
			if (!definition3 && events[index2][1].type === 'definition') {
				definition3 = index2
			}
		}
	}
	const heading2 = {
		type: 'setextHeading',
		start: Object.assign({}, events[text5][1].start),
		end: Object.assign({}, events[events.length - 1][1].end),
	}
	events[text5][1].type = 'setextHeadingText'
	if (definition3) {
		events.splice(text5, 0, ['enter', heading2, context])
		events.splice(definition3 + 1, 0, ['exit', events[content3][1], context])
		events[content3][1].end = Object.assign({}, events[definition3][1].end)
	} else {
		events[content3][1] = heading2
	}
	events.push(['exit', heading2, context])
	return events
}
function tokenizeSetextUnderline(effects, ok3, nok) {
	const self2 = this
	let marker
	return start
	function start(code3) {
		let index2 = self2.events.length
		let paragraph2
		while (index2--) {
			if (
				self2.events[index2][1].type !== 'lineEnding' &&
				self2.events[index2][1].type !== 'linePrefix' &&
				self2.events[index2][1].type !== 'content'
			) {
				paragraph2 = self2.events[index2][1].type === 'paragraph'
				break
			}
		}
		if (!self2.parser.lazy[self2.now().line] && (self2.interrupt || paragraph2)) {
			effects.enter('setextHeadingLine')
			marker = code3
			return before(code3)
		}
		return nok(code3)
	}
	function before(code3) {
		effects.enter('setextHeadingLineSequence')
		return inside(code3)
	}
	function inside(code3) {
		if (code3 === marker) {
			effects.consume(code3)
			return inside
		}
		effects.exit('setextHeadingLineSequence')
		return markdownSpace(code3) ? factorySpace(effects, after, 'lineSuffix')(code3) : after(code3)
	}
	function after(code3) {
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('setextHeadingLine')
			return ok3(code3)
		}
		return nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/flow.js
var flow = {
	tokenize: initializeFlow,
}
function initializeFlow(effects) {
	const self2 = this
	const initial = effects.attempt(
		// Try to parse a blank line.
		blankLine,
		atBlankEnding,
		// Try to parse initial flow (essentially, only code).
		effects.attempt(
			this.parser.constructs.flowInitial,
			afterConstruct,
			factorySpace(
				effects,
				effects.attempt(
					this.parser.constructs.flow,
					afterConstruct,
					effects.attempt(content2, afterConstruct),
				),
				'linePrefix',
			),
		),
	)
	return initial
	function atBlankEnding(code3) {
		if (code3 === null) {
			effects.consume(code3)
			return
		}
		effects.enter('lineEndingBlank')
		effects.consume(code3)
		effects.exit('lineEndingBlank')
		self2.currentConstruct = void 0
		return initial
	}
	function afterConstruct(code3) {
		if (code3 === null) {
			effects.consume(code3)
			return
		}
		effects.enter('lineEnding')
		effects.consume(code3)
		effects.exit('lineEnding')
		self2.currentConstruct = void 0
		return initial
	}
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/initialize/text.js
var resolver = {
	resolveAll: createResolver(),
}
var string = initializeFactory('string')
var text = initializeFactory('text')
function initializeFactory(field) {
	return {
		tokenize: initializeText,
		resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : void 0),
	}
	function initializeText(effects) {
		const self2 = this
		const constructs2 = this.parser.constructs[field]
		const text5 = effects.attempt(constructs2, start, notText)
		return start
		function start(code3) {
			return atBreak(code3) ? text5(code3) : notText(code3)
		}
		function notText(code3) {
			if (code3 === null) {
				effects.consume(code3)
				return
			}
			effects.enter('data')
			effects.consume(code3)
			return data
		}
		function data(code3) {
			if (atBreak(code3)) {
				effects.exit('data')
				return text5(code3)
			}
			effects.consume(code3)
			return data
		}
		function atBreak(code3) {
			if (code3 === null) {
				return true
			}
			const list4 = constructs2[code3]
			let index2 = -1
			if (list4) {
				while (++index2 < list4.length) {
					const item = list4[index2]
					if (!item.previous || item.previous.call(self2, self2.previous)) {
						return true
					}
				}
			}
			return false
		}
	}
}
function createResolver(extraResolver) {
	return resolveAllText
	function resolveAllText(events, context) {
		let index2 = -1
		let enter
		while (++index2 <= events.length) {
			if (enter === void 0) {
				if (events[index2] && events[index2][1].type === 'data') {
					enter = index2
					index2++
				}
			} else if (!events[index2] || events[index2][1].type !== 'data') {
				if (index2 !== enter + 2) {
					events[enter][1].end = events[index2 - 1][1].end
					events.splice(enter + 2, index2 - enter - 2)
					index2 = enter + 2
				}
				enter = void 0
			}
		}
		return extraResolver ? extraResolver(events, context) : events
	}
}
function resolveAllLineSuffixes(events, context) {
	let eventIndex = 0
	while (++eventIndex <= events.length) {
		if (
			(eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') &&
			events[eventIndex - 1][1].type === 'data'
		) {
			const data = events[eventIndex - 1][1]
			const chunks = context.sliceStream(data)
			let index2 = chunks.length
			let bufferIndex = -1
			let size = 0
			let tabs
			while (index2--) {
				const chunk = chunks[index2]
				if (typeof chunk === 'string') {
					bufferIndex = chunk.length
					while (chunk.charCodeAt(bufferIndex - 1) === 32) {
						size++
						bufferIndex--
					}
					if (bufferIndex) break
					bufferIndex = -1
				} else if (chunk === -2) {
					tabs = true
					size++
				} else if (chunk === -1) {
				} else {
					index2++
					break
				}
			}
			if (size) {
				const token = {
					type:
						eventIndex === events.length || tabs || size < 2 ? 'lineSuffix' : 'hardBreakTrailing',
					start: {
						line: data.end.line,
						column: data.end.column - size,
						offset: data.end.offset - size,
						_index: data.start._index + index2,
						_bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex,
					},
					end: Object.assign({}, data.end),
				}
				data.end = Object.assign({}, token.start)
				if (data.start.offset === data.end.offset) {
					Object.assign(data, token)
				} else {
					events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context])
					eventIndex += 2
				}
			}
			eventIndex++
		}
	}
	return events
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser2, initialize, from) {
	let point3 = Object.assign(
		from
			? Object.assign({}, from)
			: {
					line: 1,
					column: 1,
					offset: 0,
				},
		{
			_index: 0,
			_bufferIndex: -1,
		},
	)
	const columnStart = {}
	const resolveAllConstructs = []
	let chunks = []
	let stack = []
	let consumed = true
	const effects = {
		consume,
		enter,
		exit: exit3,
		attempt: constructFactory(onsuccessfulconstruct),
		check: constructFactory(onsuccessfulcheck),
		interrupt: constructFactory(onsuccessfulcheck, {
			interrupt: true,
		}),
	}
	const context = {
		previous: null,
		code: null,
		containerState: {},
		events: [],
		parser: parser2,
		sliceStream,
		sliceSerialize,
		now,
		defineSkip,
		write,
	}
	let state = initialize.tokenize.call(context, effects)
	let expectedCode
	if (initialize.resolveAll) {
		resolveAllConstructs.push(initialize)
	}
	return context
	function write(slice) {
		chunks = push(chunks, slice)
		main()
		if (chunks[chunks.length - 1] !== null) {
			return []
		}
		addResult(initialize, 0)
		context.events = resolveAll(resolveAllConstructs, context.events, context)
		return context.events
	}
	function sliceSerialize(token, expandTabs) {
		return serializeChunks(sliceStream(token), expandTabs)
	}
	function sliceStream(token) {
		return sliceChunks(chunks, token)
	}
	function now() {
		const { line, column, offset, _index, _bufferIndex } = point3
		return {
			line,
			column,
			offset,
			_index,
			_bufferIndex,
		}
	}
	function defineSkip(value) {
		columnStart[value.line] = value.column
		accountForPotentialSkip()
	}
	function main() {
		let chunkIndex
		while (point3._index < chunks.length) {
			const chunk = chunks[point3._index]
			if (typeof chunk === 'string') {
				chunkIndex = point3._index
				if (point3._bufferIndex < 0) {
					point3._bufferIndex = 0
				}
				while (point3._index === chunkIndex && point3._bufferIndex < chunk.length) {
					go(chunk.charCodeAt(point3._bufferIndex))
				}
			} else {
				go(chunk)
			}
		}
	}
	function go(code3) {
		consumed = void 0
		expectedCode = code3
		state = state(code3)
	}
	function consume(code3) {
		if (markdownLineEnding(code3)) {
			point3.line++
			point3.column = 1
			point3.offset += code3 === -3 ? 2 : 1
			accountForPotentialSkip()
		} else if (code3 !== -1) {
			point3.column++
			point3.offset++
		}
		if (point3._bufferIndex < 0) {
			point3._index++
		} else {
			point3._bufferIndex++
			if (point3._bufferIndex === chunks[point3._index].length) {
				point3._bufferIndex = -1
				point3._index++
			}
		}
		context.previous = code3
		consumed = true
	}
	function enter(type, fields) {
		const token = fields || {}
		token.type = type
		token.start = now()
		context.events.push(['enter', token, context])
		stack.push(token)
		return token
	}
	function exit3(type) {
		const token = stack.pop()
		token.end = now()
		context.events.push(['exit', token, context])
		return token
	}
	function onsuccessfulconstruct(construct, info) {
		addResult(construct, info.from)
	}
	function onsuccessfulcheck(_, info) {
		info.restore()
	}
	function constructFactory(onreturn, fields) {
		return hook
		function hook(constructs2, returnState, bogusState) {
			let listOfConstructs
			let constructIndex
			let currentConstruct
			let info
			return Array.isArray(constructs2)
				? handleListOfConstructs(constructs2)
				: 'tokenize' in constructs2
					? // @ts-expect-error Looks like a construct.
						handleListOfConstructs([constructs2])
					: handleMapOfConstructs(constructs2)
			function handleMapOfConstructs(map5) {
				return start
				function start(code3) {
					const def = code3 !== null && map5[code3]
					const all3 = code3 !== null && map5.null
					const list4 = [
						// To do: add more extension tests.
						/* c8 ignore next 2 */
						...(Array.isArray(def) ? def : def ? [def] : []),
						...(Array.isArray(all3) ? all3 : all3 ? [all3] : []),
					]
					return handleListOfConstructs(list4)(code3)
				}
			}
			function handleListOfConstructs(list4) {
				listOfConstructs = list4
				constructIndex = 0
				if (list4.length === 0) {
					return bogusState
				}
				return handleConstruct(list4[constructIndex])
			}
			function handleConstruct(construct) {
				return start
				function start(code3) {
					info = store()
					currentConstruct = construct
					if (!construct.partial) {
						context.currentConstruct = construct
					}
					if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
						return nok(code3)
					}
					return construct.tokenize.call(
						// If we do have fields, create an object w/ `context` as its
						// prototype.
						// This allows a “live binding”, which is needed for `interrupt`.
						fields ? Object.assign(Object.create(context), fields) : context,
						effects,
						ok3,
						nok,
					)(code3)
				}
			}
			function ok3(code3) {
				consumed = true
				onreturn(currentConstruct, info)
				return returnState
			}
			function nok(code3) {
				consumed = true
				info.restore()
				if (++constructIndex < listOfConstructs.length) {
					return handleConstruct(listOfConstructs[constructIndex])
				}
				return bogusState
			}
		}
	}
	function addResult(construct, from2) {
		if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
			resolveAllConstructs.push(construct)
		}
		if (construct.resolve) {
			splice(
				context.events,
				from2,
				context.events.length - from2,
				construct.resolve(context.events.slice(from2), context),
			)
		}
		if (construct.resolveTo) {
			context.events = construct.resolveTo(context.events, context)
		}
	}
	function store() {
		const startPoint = now()
		const startPrevious = context.previous
		const startCurrentConstruct = context.currentConstruct
		const startEventsIndex = context.events.length
		const startStack = Array.from(stack)
		return {
			restore,
			from: startEventsIndex,
		}
		function restore() {
			point3 = startPoint
			context.previous = startPrevious
			context.currentConstruct = startCurrentConstruct
			context.events.length = startEventsIndex
			stack = startStack
			accountForPotentialSkip()
		}
	}
	function accountForPotentialSkip() {
		if (point3.line in columnStart && point3.column < 2) {
			point3.column = columnStart[point3.line]
			point3.offset += columnStart[point3.line] - 1
		}
	}
}
function sliceChunks(chunks, token) {
	const startIndex = token.start._index
	const startBufferIndex = token.start._bufferIndex
	const endIndex = token.end._index
	const endBufferIndex = token.end._bufferIndex
	let view
	if (startIndex === endIndex) {
		view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
	} else {
		view = chunks.slice(startIndex, endIndex)
		if (startBufferIndex > -1) {
			const head = view[0]
			if (typeof head === 'string') {
				view[0] = head.slice(startBufferIndex)
			} else {
				view.shift()
			}
		}
		if (endBufferIndex > 0) {
			view.push(chunks[endIndex].slice(0, endBufferIndex))
		}
	}
	return view
}
function serializeChunks(chunks, expandTabs) {
	let index2 = -1
	const result = []
	let atTab
	while (++index2 < chunks.length) {
		const chunk = chunks[index2]
		let value
		if (typeof chunk === 'string') {
			value = chunk
		} else
			switch (chunk) {
				case -5: {
					value = '\r'
					break
				}
				case -4: {
					value = '\n'
					break
				}
				case -3: {
					value = '\r\n'
					break
				}
				case -2: {
					value = expandTabs ? ' ' : '	'
					break
				}
				case -1: {
					if (!expandTabs && atTab) continue
					value = ' '
					break
				}
				default: {
					value = String.fromCharCode(chunk)
				}
			}
		atTab = chunk === -2
		result.push(value)
	}
	return result.join('')
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/constructs.js
var constructs_exports = {}
__export(constructs_exports, {
	attentionMarkers: () => attentionMarkers,
	contentInitial: () => contentInitial,
	disable: () => disable,
	document: () => document2,
	flow: () => flow2,
	flowInitial: () => flowInitial,
	insideSpan: () => insideSpan,
	string: () => string2,
	text: () => text2,
})
var document2 = {
	[42]: list,
	[43]: list,
	[45]: list,
	[48]: list,
	[49]: list,
	[50]: list,
	[51]: list,
	[52]: list,
	[53]: list,
	[54]: list,
	[55]: list,
	[56]: list,
	[57]: list,
	[62]: blockQuote,
}
var contentInitial = {
	[91]: definition,
}
var flowInitial = {
	[-2]: codeIndented,
	[-1]: codeIndented,
	[32]: codeIndented,
}
var flow2 = {
	[35]: headingAtx,
	[42]: thematicBreak,
	[45]: [setextUnderline, thematicBreak],
	[60]: htmlFlow,
	[61]: setextUnderline,
	[95]: thematicBreak,
	[96]: codeFenced,
	[126]: codeFenced,
}
var string2 = {
	[38]: characterReference,
	[92]: characterEscape,
}
var text2 = {
	[-5]: lineEnding,
	[-4]: lineEnding,
	[-3]: lineEnding,
	[33]: labelStartImage,
	[38]: characterReference,
	[42]: attention,
	[60]: [autolink, htmlText],
	[91]: labelStartLink,
	[92]: [hardBreakEscape, characterEscape],
	[93]: labelEnd,
	[95]: attention,
	[96]: codeText,
}
var insideSpan = {
	null: [attention, resolver],
}
var attentionMarkers = {
	null: [42, 95],
}
var disable = {
	null: [],
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/parse.js
function parse(options) {
	const settings = options || {}
	const constructs2 =
		/** @type {FullNormalizedExtension} */
		combineExtensions([constructs_exports, ...(settings.extensions || [])])
	const parser2 = {
		defined: [],
		lazy: {},
		constructs: constructs2,
		content: create(content),
		document: create(document),
		flow: create(flow),
		string: create(string),
		text: create(text),
	}
	return parser2
	function create(initial) {
		return creator
		function creator(from) {
			return createTokenizer(parser2, initial, from)
		}
	}
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/postprocess.js
function postprocess(events) {
	while (!subtokenize(events)) {}
	return events
}

// ../../node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g
function preprocess() {
	let column = 1
	let buffer = ''
	let start = true
	let atCarriageReturn
	return preprocessor
	function preprocessor(value, encoding, end) {
		const chunks = []
		let match
		let next
		let startPosition
		let endPosition
		let code3
		value =
			buffer +
			(typeof value === 'string'
				? value.toString()
				: new TextDecoder(encoding || void 0).decode(value))
		startPosition = 0
		buffer = ''
		if (start) {
			if (value.charCodeAt(0) === 65279) {
				startPosition++
			}
			start = void 0
		}
		while (startPosition < value.length) {
			search.lastIndex = startPosition
			match = search.exec(value)
			endPosition = match && match.index !== void 0 ? match.index : value.length
			code3 = value.charCodeAt(endPosition)
			if (!match) {
				buffer = value.slice(startPosition)
				break
			}
			if (code3 === 10 && startPosition === endPosition && atCarriageReturn) {
				chunks.push(-3)
				atCarriageReturn = void 0
			} else {
				if (atCarriageReturn) {
					chunks.push(-5)
					atCarriageReturn = void 0
				}
				if (startPosition < endPosition) {
					chunks.push(value.slice(startPosition, endPosition))
					column += endPosition - startPosition
				}
				switch (code3) {
					case 0: {
						chunks.push(65533)
						column++
						break
					}
					case 9: {
						next = Math.ceil(column / 4) * 4
						chunks.push(-2)
						while (column++ < next) chunks.push(-1)
						break
					}
					case 10: {
						chunks.push(-4)
						column = 1
						break
					}
					default: {
						atCarriageReturn = true
						column = 1
					}
				}
			}
			startPosition = endPosition + 1
		}
		if (end) {
			if (atCarriageReturn) chunks.push(-5)
			if (buffer) chunks.push(buffer)
			chunks.push(null)
		}
		return chunks
	}
}

// ../../node_modules/.pnpm/micromark-util-decode-string@2.0.0/node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function decodeString(value) {
	return value.replace(characterEscapeOrReference, decode)
}
function decode($0, $1, $2) {
	if ($1) {
		return $1
	}
	const head = $2.charCodeAt(0)
	if (head === 35) {
		const head2 = $2.charCodeAt(1)
		const hex = head2 === 120 || head2 === 88
		return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10)
	}
	return decodeNamedCharacterReference($2) || $0
}

// ../../node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
	if (!value || typeof value !== 'object') {
		return ''
	}
	if ('position' in value || 'type' in value) {
		return position(value.position)
	}
	if ('start' in value || 'end' in value) {
		return position(value)
	}
	if ('line' in value || 'column' in value) {
		return point(value)
	}
	return ''
}
function point(point3) {
	return index(point3 && point3.line) + ':' + index(point3 && point3.column)
}
function position(pos) {
	return point(pos && pos.start) + '-' + point(pos && pos.end)
}
function index(value) {
	return value && typeof value === 'number' ? value : 1
}

// ../../node_modules/.pnpm/mdast-util-from-markdown@2.0.0/node_modules/mdast-util-from-markdown/lib/index.js
var own2 = {}.hasOwnProperty
function fromMarkdown(value, encoding, options) {
	if (typeof encoding !== 'string') {
		options = encoding
		encoding = void 0
	}
	return compiler(options)(
		postprocess(
			parse(options)
				.document()
				.write(preprocess()(value, encoding, true)),
		),
	)
}
function compiler(options) {
	const config = {
		transforms: [],
		canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
		enter: {
			autolink: opener(link2),
			autolinkProtocol: onenterdata,
			autolinkEmail: onenterdata,
			atxHeading: opener(heading2),
			blockQuote: opener(blockQuote2),
			characterEscape: onenterdata,
			characterReference: onenterdata,
			codeFenced: opener(codeFlow),
			codeFencedFenceInfo: buffer,
			codeFencedFenceMeta: buffer,
			codeIndented: opener(codeFlow, buffer),
			codeText: opener(codeText2, buffer),
			codeTextData: onenterdata,
			data: onenterdata,
			codeFlowValue: onenterdata,
			definition: opener(definition3),
			definitionDestinationString: buffer,
			definitionLabelString: buffer,
			definitionTitleString: buffer,
			emphasis: opener(emphasis2),
			hardBreakEscape: opener(hardBreak2),
			hardBreakTrailing: opener(hardBreak2),
			htmlFlow: opener(html2, buffer),
			htmlFlowData: onenterdata,
			htmlText: opener(html2, buffer),
			htmlTextData: onenterdata,
			image: opener(image2),
			label: buffer,
			link: opener(link2),
			listItem: opener(listItem2),
			listItemValue: onenterlistitemvalue,
			listOrdered: opener(list4, onenterlistordered),
			listUnordered: opener(list4),
			paragraph: opener(paragraph2),
			reference: onenterreference,
			referenceString: buffer,
			resourceDestinationString: buffer,
			resourceTitleString: buffer,
			setextHeading: opener(heading2),
			strong: opener(strong2),
			thematicBreak: opener(thematicBreak3),
		},
		exit: {
			atxHeading: closer(),
			atxHeadingSequence: onexitatxheadingsequence,
			autolink: closer(),
			autolinkEmail: onexitautolinkemail,
			autolinkProtocol: onexitautolinkprotocol,
			blockQuote: closer(),
			characterEscapeValue: onexitdata,
			characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
			characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
			characterReferenceValue: onexitcharacterreferencevalue,
			codeFenced: closer(onexitcodefenced),
			codeFencedFence: onexitcodefencedfence,
			codeFencedFenceInfo: onexitcodefencedfenceinfo,
			codeFencedFenceMeta: onexitcodefencedfencemeta,
			codeFlowValue: onexitdata,
			codeIndented: closer(onexitcodeindented),
			codeText: closer(onexitcodetext),
			codeTextData: onexitdata,
			data: onexitdata,
			definition: closer(),
			definitionDestinationString: onexitdefinitiondestinationstring,
			definitionLabelString: onexitdefinitionlabelstring,
			definitionTitleString: onexitdefinitiontitlestring,
			emphasis: closer(),
			hardBreakEscape: closer(onexithardbreak),
			hardBreakTrailing: closer(onexithardbreak),
			htmlFlow: closer(onexithtmlflow),
			htmlFlowData: onexitdata,
			htmlText: closer(onexithtmltext),
			htmlTextData: onexitdata,
			image: closer(onexitimage),
			label: onexitlabel,
			labelText: onexitlabeltext,
			lineEnding: onexitlineending,
			link: closer(onexitlink),
			listItem: closer(),
			listOrdered: closer(),
			listUnordered: closer(),
			paragraph: closer(),
			referenceString: onexitreferencestring,
			resourceDestinationString: onexitresourcedestinationstring,
			resourceTitleString: onexitresourcetitlestring,
			resource: onexitresource,
			setextHeading: closer(onexitsetextheading),
			setextHeadingLineSequence: onexitsetextheadinglinesequence,
			setextHeadingText: onexitsetextheadingtext,
			strong: closer(),
			thematicBreak: closer(),
		},
	}
	configure(config, (options || {}).mdastExtensions || [])
	const data = {}
	return compile
	function compile(events) {
		let tree = {
			type: 'root',
			children: [],
		}
		const context = {
			stack: [tree],
			tokenStack: [],
			config,
			enter,
			exit: exit3,
			buffer,
			resume,
			data,
		}
		const listStack = []
		let index2 = -1
		while (++index2 < events.length) {
			if (events[index2][1].type === 'listOrdered' || events[index2][1].type === 'listUnordered') {
				if (events[index2][0] === 'enter') {
					listStack.push(index2)
				} else {
					const tail = listStack.pop()
					index2 = prepareList(events, tail, index2)
				}
			}
		}
		index2 = -1
		while (++index2 < events.length) {
			const handler = config[events[index2][0]]
			if (own2.call(handler, events[index2][1].type)) {
				handler[events[index2][1].type].call(
					Object.assign(
						{
							sliceSerialize: events[index2][2].sliceSerialize,
						},
						context,
					),
					events[index2][1],
				)
			}
		}
		if (context.tokenStack.length > 0) {
			const tail = context.tokenStack[context.tokenStack.length - 1]
			const handler = tail[1] || defaultOnError
			handler.call(context, void 0, tail[0])
		}
		tree.position = {
			start: point2(
				events.length > 0
					? events[0][1].start
					: {
							line: 1,
							column: 1,
							offset: 0,
						},
			),
			end: point2(
				events.length > 0
					? events[events.length - 2][1].end
					: {
							line: 1,
							column: 1,
							offset: 0,
						},
			),
		}
		index2 = -1
		while (++index2 < config.transforms.length) {
			tree = config.transforms[index2](tree) || tree
		}
		return tree
	}
	function prepareList(events, start, length) {
		let index2 = start - 1
		let containerBalance = -1
		let listSpread = false
		let listItem3
		let lineIndex
		let firstBlankLineIndex
		let atMarker
		while (++index2 <= length) {
			const event = events[index2]
			switch (event[1].type) {
				case 'listUnordered':
				case 'listOrdered':
				case 'blockQuote': {
					if (event[0] === 'enter') {
						containerBalance++
					} else {
						containerBalance--
					}
					atMarker = void 0
					break
				}
				case 'lineEndingBlank': {
					if (event[0] === 'enter') {
						if (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex) {
							firstBlankLineIndex = index2
						}
						atMarker = void 0
					}
					break
				}
				case 'linePrefix':
				case 'listItemValue':
				case 'listItemMarker':
				case 'listItemPrefix':
				case 'listItemPrefixWhitespace': {
					break
				}
				default: {
					atMarker = void 0
				}
			}
			if (
				(!containerBalance && event[0] === 'enter' && event[1].type === 'listItemPrefix') ||
				(containerBalance === -1 &&
					event[0] === 'exit' &&
					(event[1].type === 'listUnordered' || event[1].type === 'listOrdered'))
			) {
				if (listItem3) {
					let tailIndex = index2
					lineIndex = void 0
					while (tailIndex--) {
						const tailEvent = events[tailIndex]
						if (tailEvent[1].type === 'lineEnding' || tailEvent[1].type === 'lineEndingBlank') {
							if (tailEvent[0] === 'exit') continue
							if (lineIndex) {
								events[lineIndex][1].type = 'lineEndingBlank'
								listSpread = true
							}
							tailEvent[1].type = 'lineEnding'
							lineIndex = tailIndex
						} else if (
							tailEvent[1].type === 'linePrefix' ||
							tailEvent[1].type === 'blockQuotePrefix' ||
							tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
							tailEvent[1].type === 'blockQuoteMarker' ||
							tailEvent[1].type === 'listItemIndent'
						) {
						} else {
							break
						}
					}
					if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
						listItem3._spread = true
					}
					listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end)
					events.splice(lineIndex || index2, 0, ['exit', listItem3, event[2]])
					index2++
					length++
				}
				if (event[1].type === 'listItemPrefix') {
					const item = {
						type: 'listItem',
						_spread: false,
						start: Object.assign({}, event[1].start),
						// @ts-expect-error: we’ll add `end` in a second.
						end: void 0,
					}
					listItem3 = item
					events.splice(index2, 0, ['enter', item, event[2]])
					index2++
					length++
					firstBlankLineIndex = void 0
					atMarker = true
				}
			}
		}
		events[start][1]._spread = listSpread
		return length
	}
	function opener(create, and) {
		return open
		function open(token) {
			enter.call(this, create(token), token)
			if (and) and.call(this, token)
		}
	}
	function buffer() {
		this.stack.push({
			type: 'fragment',
			children: [],
		})
	}
	function enter(node2, token, errorHandler) {
		const parent = this.stack[this.stack.length - 1]
		const siblings = parent.children
		siblings.push(node2)
		this.stack.push(node2)
		this.tokenStack.push([token, errorHandler])
		node2.position = {
			start: point2(token.start),
			// @ts-expect-error: `end` will be patched later.
			end: void 0,
		}
	}
	function closer(and) {
		return close
		function close(token) {
			if (and) and.call(this, token)
			exit3.call(this, token)
		}
	}
	function exit3(token, onExitError) {
		const node2 = this.stack.pop()
		const open = this.tokenStack.pop()
		if (!open) {
			throw new Error(
				'Cannot close `' +
					token.type +
					'` (' +
					stringifyPosition({
						start: token.start,
						end: token.end,
					}) +
					'): it\u2019s not open',
			)
		} else if (open[0].type !== token.type) {
			if (onExitError) {
				onExitError.call(this, token, open[0])
			} else {
				const handler = open[1] || defaultOnError
				handler.call(this, token, open[0])
			}
		}
		node2.position.end = point2(token.end)
	}
	function resume() {
		return toString(this.stack.pop())
	}
	function onenterlistordered() {
		this.data.expectingFirstListItemValue = true
	}
	function onenterlistitemvalue(token) {
		if (this.data.expectingFirstListItemValue) {
			const ancestor = this.stack[this.stack.length - 2]
			ancestor.start = Number.parseInt(this.sliceSerialize(token), 10)
			this.data.expectingFirstListItemValue = void 0
		}
	}
	function onexitcodefencedfenceinfo() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.lang = data2
	}
	function onexitcodefencedfencemeta() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.meta = data2
	}
	function onexitcodefencedfence() {
		if (this.data.flowCodeInside) return
		this.buffer()
		this.data.flowCodeInside = true
	}
	function onexitcodefenced() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')
		this.data.flowCodeInside = void 0
	}
	function onexitcodeindented() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.value = data2.replace(/(\r?\n|\r)$/g, '')
	}
	function onexitdefinitionlabelstring(token) {
		const label = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.label = label
		node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase()
	}
	function onexitdefinitiontitlestring() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.title = data2
	}
	function onexitdefinitiondestinationstring() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.url = data2
	}
	function onexitatxheadingsequence(token) {
		const node2 = this.stack[this.stack.length - 1]
		if (!node2.depth) {
			const depth = this.sliceSerialize(token).length
			node2.depth = depth
		}
	}
	function onexitsetextheadingtext() {
		this.data.setextHeadingSlurpLineEnding = true
	}
	function onexitsetextheadinglinesequence(token) {
		const node2 = this.stack[this.stack.length - 1]
		node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2
	}
	function onexitsetextheading() {
		this.data.setextHeadingSlurpLineEnding = void 0
	}
	function onenterdata(token) {
		const node2 = this.stack[this.stack.length - 1]
		const siblings = node2.children
		let tail = siblings[siblings.length - 1]
		if (!tail || tail.type !== 'text') {
			tail = text5()
			tail.position = {
				start: point2(token.start),
				// @ts-expect-error: we’ll add `end` later.
				end: void 0,
			}
			siblings.push(tail)
		}
		this.stack.push(tail)
	}
	function onexitdata(token) {
		const tail = this.stack.pop()
		tail.value += this.sliceSerialize(token)
		tail.position.end = point2(token.end)
	}
	function onexitlineending(token) {
		const context = this.stack[this.stack.length - 1]
		if (this.data.atHardBreak) {
			const tail = context.children[context.children.length - 1]
			tail.position.end = point2(token.end)
			this.data.atHardBreak = void 0
			return
		}
		if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
			onenterdata.call(this, token)
			onexitdata.call(this, token)
		}
	}
	function onexithardbreak() {
		this.data.atHardBreak = true
	}
	function onexithtmlflow() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.value = data2
	}
	function onexithtmltext() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.value = data2
	}
	function onexitcodetext() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.value = data2
	}
	function onexitlink() {
		const node2 = this.stack[this.stack.length - 1]
		if (this.data.inReference) {
			const referenceType = this.data.referenceType || 'shortcut'
			node2.type += 'Reference'
			node2.referenceType = referenceType
			delete node2.url
			delete node2.title
		} else {
			delete node2.identifier
			delete node2.label
		}
		this.data.referenceType = void 0
	}
	function onexitimage() {
		const node2 = this.stack[this.stack.length - 1]
		if (this.data.inReference) {
			const referenceType = this.data.referenceType || 'shortcut'
			node2.type += 'Reference'
			node2.referenceType = referenceType
			delete node2.url
			delete node2.title
		} else {
			delete node2.identifier
			delete node2.label
		}
		this.data.referenceType = void 0
	}
	function onexitlabeltext(token) {
		const string3 = this.sliceSerialize(token)
		const ancestor = this.stack[this.stack.length - 2]
		ancestor.label = decodeString(string3)
		ancestor.identifier = normalizeIdentifier(string3).toLowerCase()
	}
	function onexitlabel() {
		const fragment = this.stack[this.stack.length - 1]
		const value = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		this.data.inReference = true
		if (node2.type === 'link') {
			const children = fragment.children
			node2.children = children
		} else {
			node2.alt = value
		}
	}
	function onexitresourcedestinationstring() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.url = data2
	}
	function onexitresourcetitlestring() {
		const data2 = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.title = data2
	}
	function onexitresource() {
		this.data.inReference = void 0
	}
	function onenterreference() {
		this.data.referenceType = 'collapsed'
	}
	function onexitreferencestring(token) {
		const label = this.resume()
		const node2 = this.stack[this.stack.length - 1]
		node2.label = label
		node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase()
		this.data.referenceType = 'full'
	}
	function onexitcharacterreferencemarker(token) {
		this.data.characterReferenceType = token.type
	}
	function onexitcharacterreferencevalue(token) {
		const data2 = this.sliceSerialize(token)
		const type = this.data.characterReferenceType
		let value
		if (type) {
			value = decodeNumericCharacterReference(
				data2,
				type === 'characterReferenceMarkerNumeric' ? 10 : 16,
			)
			this.data.characterReferenceType = void 0
		} else {
			const result = decodeNamedCharacterReference(data2)
			value = result
		}
		const tail = this.stack.pop()
		tail.value += value
		tail.position.end = point2(token.end)
	}
	function onexitautolinkprotocol(token) {
		onexitdata.call(this, token)
		const node2 = this.stack[this.stack.length - 1]
		node2.url = this.sliceSerialize(token)
	}
	function onexitautolinkemail(token) {
		onexitdata.call(this, token)
		const node2 = this.stack[this.stack.length - 1]
		node2.url = 'mailto:' + this.sliceSerialize(token)
	}
	function blockQuote2() {
		return {
			type: 'blockquote',
			children: [],
		}
	}
	function codeFlow() {
		return {
			type: 'code',
			lang: null,
			meta: null,
			value: '',
		}
	}
	function codeText2() {
		return {
			type: 'inlineCode',
			value: '',
		}
	}
	function definition3() {
		return {
			type: 'definition',
			identifier: '',
			label: null,
			title: null,
			url: '',
		}
	}
	function emphasis2() {
		return {
			type: 'emphasis',
			children: [],
		}
	}
	function heading2() {
		return {
			type: 'heading',
			// @ts-expect-error `depth` will be set later.
			depth: 0,
			children: [],
		}
	}
	function hardBreak2() {
		return {
			type: 'break',
		}
	}
	function html2() {
		return {
			type: 'html',
			value: '',
		}
	}
	function image2() {
		return {
			type: 'image',
			title: null,
			url: '',
			alt: null,
		}
	}
	function link2() {
		return {
			type: 'link',
			title: null,
			url: '',
			children: [],
		}
	}
	function list4(token) {
		return {
			type: 'list',
			ordered: token.type === 'listOrdered',
			start: null,
			spread: token._spread,
			children: [],
		}
	}
	function listItem2(token) {
		return {
			type: 'listItem',
			spread: token._spread,
			checked: null,
			children: [],
		}
	}
	function paragraph2() {
		return {
			type: 'paragraph',
			children: [],
		}
	}
	function strong2() {
		return {
			type: 'strong',
			children: [],
		}
	}
	function text5() {
		return {
			type: 'text',
			value: '',
		}
	}
	function thematicBreak3() {
		return {
			type: 'thematicBreak',
		}
	}
}
function point2(d) {
	return {
		line: d.line,
		column: d.column,
		offset: d.offset,
	}
}
function configure(combined, extensions) {
	let index2 = -1
	while (++index2 < extensions.length) {
		const value = extensions[index2]
		if (Array.isArray(value)) {
			configure(combined, value)
		} else {
			extension(combined, value)
		}
	}
}
function extension(combined, extension2) {
	let key
	for (key in extension2) {
		if (own2.call(extension2, key)) {
			switch (key) {
				case 'canContainEols': {
					const right2 = extension2[key]
					if (right2) {
						combined[key].push(...right2)
					}
					break
				}
				case 'transforms': {
					const right2 = extension2[key]
					if (right2) {
						combined[key].push(...right2)
					}
					break
				}
				case 'enter':
				case 'exit': {
					const right2 = extension2[key]
					if (right2) {
						Object.assign(combined[key], right2)
					}
					break
				}
			}
		}
	}
}
function defaultOnError(left2, right2) {
	if (left2) {
		throw new Error(
			'Cannot close `' +
				left2.type +
				'` (' +
				stringifyPosition({
					start: left2.start,
					end: left2.end,
				}) +
				'): a different token (`' +
				right2.type +
				'`, ' +
				stringifyPosition({
					start: right2.start,
					end: right2.end,
				}) +
				') is open',
		)
	} else {
		throw new Error(
			'Cannot close document, a token (`' +
				right2.type +
				'`, ' +
				stringifyPosition({
					start: right2.start,
					end: right2.end,
				}) +
				') is still open',
		)
	}
}

// ../../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js
function remarkParse(options) {
	const self2 = this
	self2.parser = parser2
	function parser2(doc) {
		return fromMarkdown(doc, {
			...self2.data('settings'),
			...options,
			// Note: these options are not in the readme.
			// The goal is for them to be set by plugins on `data` instead of being
			// passed by users.
			extensions: self2.data('micromarkExtensions') || [],
			mdastExtensions: self2.data('fromMarkdownExtensions') || [],
		})
	}
}

// ../../node_modules/.pnpm/zwitch@2.0.4/node_modules/zwitch/index.js
var own3 = {}.hasOwnProperty
function zwitch(key, options) {
	const settings = options || {}
	function one3(value, ...parameters) {
		let fn = one3.invalid
		const handlers = one3.handlers
		if (value && own3.call(value, key)) {
			const id = String(value[key])
			fn = own3.call(handlers, id) ? handlers[id] : one3.unknown
		}
		if (fn) {
			return fn.call(this, value, ...parameters)
		}
	}
	one3.handlers = settings.handlers || {}
	one3.invalid = settings.invalid
	one3.unknown = settings.unknown
	return one3
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/configure.js
var own4 = {}.hasOwnProperty
function configure2(base, extension2) {
	let index2 = -1
	let key
	if (extension2.extensions) {
		while (++index2 < extension2.extensions.length) {
			configure2(base, extension2.extensions[index2])
		}
	}
	for (key in extension2) {
		if (own4.call(extension2, key)) {
			switch (key) {
				case 'extensions': {
					break
				}
				case 'unsafe': {
					list2(base[key], extension2[key])
					break
				}
				case 'join': {
					list2(base[key], extension2[key])
					break
				}
				case 'handlers': {
					map(base[key], extension2[key])
					break
				}
				default: {
					base.options[key] = extension2[key]
				}
			}
		}
	}
	return base
}
function list2(left2, right2) {
	if (right2) {
		left2.push(...right2)
	}
}
function map(left2, right2) {
	if (right2) {
		Object.assign(left2, right2)
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node2, _, state, info) {
	const exit3 = state.enter('blockquote')
	const tracker = state.createTracker(info)
	tracker.move('> ')
	tracker.shift(2)
	const value = state.indentLines(state.containerFlow(node2, tracker.current()), map2)
	exit3()
	return value
}
function map2(line, _, blank) {
	return '>' + (blank ? '' : ' ') + line
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
	return (
		listInScope(stack, pattern.inConstruct, true) &&
		!listInScope(stack, pattern.notInConstruct, false)
	)
}
function listInScope(stack, list4, none) {
	if (typeof list4 === 'string') {
		list4 = [list4]
	}
	if (!list4 || list4.length === 0) {
		return none
	}
	let index2 = -1
	while (++index2 < list4.length) {
		if (stack.includes(list4[index2])) {
			return true
		}
	}
	return false
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_, _1, state, info) {
	let index2 = -1
	while (++index2 < state.unsafe.length) {
		if (
			state.unsafe[index2].character === '\n' &&
			patternInScope(state.stack, state.unsafe[index2])
		) {
			return /[ \t]/.test(info.before) ? '' : ' '
		}
	}
	return '\\\n'
}

// ../../node_modules/.pnpm/longest-streak@3.1.0/node_modules/longest-streak/index.js
function longestStreak(value, substring) {
	const source = String(value)
	let index2 = source.indexOf(substring)
	let expected = index2
	let count = 0
	let max = 0
	if (typeof substring !== 'string') {
		throw new TypeError('Expected substring')
	}
	while (index2 !== -1) {
		if (index2 === expected) {
			if (++count > max) {
				max = count
			}
		} else {
			count = 1
		}
		expected = index2 + substring.length
		index2 = source.indexOf(substring, expected)
	}
	return max
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node2, state) {
	return Boolean(
		state.options.fences === false &&
			node2.value && // If there’s no info…
			!node2.lang && // And there’s a non-whitespace character…
			/[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
			!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value),
	)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(state) {
	const marker = state.options.fence || '`'
	if (marker !== '`' && marker !== '~') {
		throw new Error(
			'Cannot serialize code with `' + marker + '` for `options.fence`, expected `` ` `` or `~`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/code.js
function code(node2, _, state, info) {
	const marker = checkFence(state)
	const raw = node2.value || ''
	const suffix = marker === '`' ? 'GraveAccent' : 'Tilde'
	if (formatCodeAsIndented(node2, state)) {
		const exit4 = state.enter('codeIndented')
		const value2 = state.indentLines(raw, map3)
		exit4()
		return value2
	}
	const tracker = state.createTracker(info)
	const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3))
	const exit3 = state.enter('codeFenced')
	let value = tracker.move(sequence)
	if (node2.lang) {
		const subexit = state.enter(`codeFencedLang${suffix}`)
		value += tracker.move(
			state.safe(node2.lang, {
				before: value,
				after: ' ',
				encode: ['`'],
				...tracker.current(),
			}),
		)
		subexit()
	}
	if (node2.lang && node2.meta) {
		const subexit = state.enter(`codeFencedMeta${suffix}`)
		value += tracker.move(' ')
		value += tracker.move(
			state.safe(node2.meta, {
				before: value,
				after: '\n',
				encode: ['`'],
				...tracker.current(),
			}),
		)
		subexit()
	}
	value += tracker.move('\n')
	if (raw) {
		value += tracker.move(raw + '\n')
	}
	value += tracker.move(sequence)
	exit3()
	return value
}
function map3(line, _, blank) {
	return (blank ? '' : '    ') + line
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(state) {
	const marker = state.options.quote || '"'
	if (marker !== '"' && marker !== "'") {
		throw new Error(
			'Cannot serialize title with `' + marker + '` for `options.quote`, expected `"`, or `\'`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition2(node2, _, state, info) {
	const quote = checkQuote(state)
	const suffix = quote === '"' ? 'Quote' : 'Apostrophe'
	const exit3 = state.enter('definition')
	let subexit = state.enter('label')
	const tracker = state.createTracker(info)
	let value = tracker.move('[')
	value += tracker.move(
		state.safe(state.associationId(node2), {
			before: value,
			after: ']',
			...tracker.current(),
		}),
	)
	value += tracker.move(']: ')
	subexit()
	if (
		// If there’s no url, or…
		!node2.url || // If there are control characters or whitespace.
		/[\0- \u007F]/.test(node2.url)
	) {
		subexit = state.enter('destinationLiteral')
		value += tracker.move('<')
		value += tracker.move(
			state.safe(node2.url, { before: value, after: '>', ...tracker.current() }),
		)
		value += tracker.move('>')
	} else {
		subexit = state.enter('destinationRaw')
		value += tracker.move(
			state.safe(node2.url, {
				before: value,
				after: node2.title ? ' ' : '\n',
				...tracker.current(),
			}),
		)
	}
	subexit()
	if (node2.title) {
		subexit = state.enter(`title${suffix}`)
		value += tracker.move(' ' + quote)
		value += tracker.move(
			state.safe(node2.title, {
				before: value,
				after: quote,
				...tracker.current(),
			}),
		)
		value += tracker.move(quote)
		subexit()
	}
	exit3()
	return value
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(state) {
	const marker = state.options.emphasis || '*'
	if (marker !== '*' && marker !== '_') {
		throw new Error(
			'Cannot serialize emphasis with `' +
				marker +
				'` for `options.emphasis`, expected `*`, or `_`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
emphasis.peek = emphasisPeek
function emphasis(node2, _, state, info) {
	const marker = checkEmphasis(state)
	const exit3 = state.enter('emphasis')
	const tracker = state.createTracker(info)
	let value = tracker.move(marker)
	value += tracker.move(
		state.containerPhrasing(node2, {
			before: value,
			after: marker,
			...tracker.current(),
		}),
	)
	value += tracker.move(marker)
	exit3()
	return value
}
function emphasisPeek(_, _1, state) {
	return state.options.emphasis || '*'
}

// ../../node_modules/.pnpm/unist-util-is@6.0.0/node_modules/unist-util-is/lib/index.js
var convert =
	// Note: overloads in JSDoc can’t yet use different `@template`s.
	/**
	 * @type {(
	 *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
	 *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
	 *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
	 *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
	 *   ((test?: Test) => Check)
	 * )}
	 */
	/**
	 * @param {Test} [test]
	 * @returns {Check}
	 */
	function (test) {
		if (test === null || test === void 0) {
			return ok
		}
		if (typeof test === 'function') {
			return castFactory(test)
		}
		if (typeof test === 'object') {
			return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
		}
		if (typeof test === 'string') {
			return typeFactory(test)
		}
		throw new Error('Expected function, string, or object as test')
	}
function anyFactory(tests) {
	const checks = []
	let index2 = -1
	while (++index2 < tests.length) {
		checks[index2] = convert(tests[index2])
	}
	return castFactory(any)
	function any(...parameters) {
		let index3 = -1
		while (++index3 < checks.length) {
			if (checks[index3].apply(this, parameters)) return true
		}
		return false
	}
}
function propsFactory(check) {
	const checkAsRecord =
		/** @type {Record<string, unknown>} */
		check
	return castFactory(all3)
	function all3(node2) {
		const nodeAsRecord =
			/** @type {Record<string, unknown>} */
			/** @type {unknown} */
			node2
		let key
		for (key in check) {
			if (nodeAsRecord[key] !== checkAsRecord[key]) return false
		}
		return true
	}
}
function typeFactory(check) {
	return castFactory(type)
	function type(node2) {
		return node2 && node2.type === check
	}
}
function castFactory(testFunction) {
	return check
	function check(value, index2, parent) {
		return Boolean(
			looksLikeANode(value) &&
				testFunction.call(
					this,
					value,
					typeof index2 === 'number' ? index2 : void 0,
					parent || void 0,
				),
		)
	}
}
function ok() {
	return true
}
function looksLikeANode(value) {
	return value !== null && typeof value === 'object' && 'type' in value
}

// ../../node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/color.node.js
function color(d) {
	return '\x1B[33m' + d + '\x1B[39m'
}

// ../../node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js
var empty = []
var CONTINUE = true
var EXIT = false
var SKIP = 'skip'
function visitParents(tree, test, visitor, reverse) {
	let check
	if (typeof test === 'function' && typeof visitor !== 'function') {
		reverse = visitor
		visitor = test
	} else {
		check = test
	}
	const is2 = convert(check)
	const step = reverse ? -1 : 1
	factory(tree, void 0, [])()
	function factory(node2, index2, parents) {
		const value =
			/** @type {Record<string, unknown>} */
			node2 && typeof node2 === 'object' ? node2 : {}
		if (typeof value.type === 'string') {
			const name =
				// `hast`
				typeof value.tagName === 'string'
					? value.tagName
					: // `xast`
						typeof value.name === 'string'
						? value.name
						: void 0
			Object.defineProperty(visit2, 'name', {
				value: 'node (' + color(node2.type + (name ? '<' + name + '>' : '')) + ')',
			})
		}
		return visit2
		function visit2() {
			let result = empty
			let subresult
			let offset
			let grandparents
			if (!test || is2(node2, index2, parents[parents.length - 1] || void 0)) {
				result = toResult(visitor(node2, parents))
				if (result[0] === EXIT) {
					return result
				}
			}
			if ('children' in node2 && node2.children) {
				const nodeAsParent =
					/** @type {UnistParent} */
					node2
				if (nodeAsParent.children && result[0] !== SKIP) {
					offset = (reverse ? nodeAsParent.children.length : -1) + step
					grandparents = parents.concat(nodeAsParent)
					while (offset > -1 && offset < nodeAsParent.children.length) {
						const child = nodeAsParent.children[offset]
						subresult = factory(child, offset, grandparents)()
						if (subresult[0] === EXIT) {
							return subresult
						}
						offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step
					}
				}
			}
			return result
		}
	}
}
function toResult(value) {
	if (Array.isArray(value)) {
		return value
	}
	if (typeof value === 'number') {
		return [CONTINUE, value]
	}
	return value === null || value === void 0 ? empty : [value]
}

// ../../node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
	let reverse
	let test
	let visitor
	if (typeof testOrVisitor === 'function' && typeof visitorOrReverse !== 'function') {
		test = void 0
		visitor = testOrVisitor
		reverse = visitorOrReverse
	} else {
		test = testOrVisitor
		visitor = visitorOrReverse
		reverse = maybeReverse
	}
	visitParents(tree, test, overload, reverse)
	function overload(node2, parents) {
		const parent = parents[parents.length - 1]
		const index2 = parent ? parent.children.indexOf(node2) : void 0
		return visitor(node2, index2, parent)
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node2, state) {
	let literalWithBreak = false
	visit(node2, function (node3) {
		if (('value' in node3 && /\r?\n|\r/.test(node3.value)) || node3.type === 'break') {
			literalWithBreak = true
			return EXIT
		}
	})
	return Boolean(
		(!node2.depth || node2.depth < 3) &&
			toString(node2) &&
			(state.options.setext || literalWithBreak),
	)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node2, _, state, info) {
	const rank = Math.max(Math.min(6, node2.depth || 1), 1)
	const tracker = state.createTracker(info)
	if (formatHeadingAsSetext(node2, state)) {
		const exit4 = state.enter('headingSetext')
		const subexit2 = state.enter('phrasing')
		const value2 = state.containerPhrasing(node2, {
			...tracker.current(),
			before: '\n',
			after: '\n',
		})
		subexit2()
		exit4()
		return (
			value2 +
			'\n' +
			(rank === 1 ? '=' : '-').repeat(
				// The whole size…
				value2.length - // Minus the position of the character after the last EOL (or
					// 0 if there is none)…
					(Math.max(value2.lastIndexOf('\r'), value2.lastIndexOf('\n')) + 1),
			)
		)
	}
	const sequence = '#'.repeat(rank)
	const exit3 = state.enter('headingAtx')
	const subexit = state.enter('phrasing')
	tracker.move(sequence + ' ')
	let value = state.containerPhrasing(node2, {
		before: '# ',
		after: '\n',
		...tracker.current(),
	})
	if (/^[\t ]/.test(value)) {
		value = '&#x' + value.charCodeAt(0).toString(16).toUpperCase() + ';' + value.slice(1)
	}
	value = value ? sequence + ' ' + value : sequence
	if (state.options.closeAtx) {
		value += ' ' + sequence
	}
	subexit()
	exit3()
	return value
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/html.js
html.peek = htmlPeek
function html(node2) {
	return node2.value || ''
}
function htmlPeek() {
	return '<'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/image.js
image.peek = imagePeek
function image(node2, _, state, info) {
	const quote = checkQuote(state)
	const suffix = quote === '"' ? 'Quote' : 'Apostrophe'
	const exit3 = state.enter('image')
	let subexit = state.enter('label')
	const tracker = state.createTracker(info)
	let value = tracker.move('![')
	value += tracker.move(state.safe(node2.alt, { before: value, after: ']', ...tracker.current() }))
	value += tracker.move('](')
	subexit()
	if (
		// If there’s no url but there is a title…
		(!node2.url && node2.title) || // If there are control characters or whitespace.
		/[\0- \u007F]/.test(node2.url)
	) {
		subexit = state.enter('destinationLiteral')
		value += tracker.move('<')
		value += tracker.move(
			state.safe(node2.url, { before: value, after: '>', ...tracker.current() }),
		)
		value += tracker.move('>')
	} else {
		subexit = state.enter('destinationRaw')
		value += tracker.move(
			state.safe(node2.url, {
				before: value,
				after: node2.title ? ' ' : ')',
				...tracker.current(),
			}),
		)
	}
	subexit()
	if (node2.title) {
		subexit = state.enter(`title${suffix}`)
		value += tracker.move(' ' + quote)
		value += tracker.move(
			state.safe(node2.title, {
				before: value,
				after: quote,
				...tracker.current(),
			}),
		)
		value += tracker.move(quote)
		subexit()
	}
	value += tracker.move(')')
	exit3()
	return value
}
function imagePeek() {
	return '!'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
imageReference.peek = imageReferencePeek
function imageReference(node2, _, state, info) {
	const type = node2.referenceType
	const exit3 = state.enter('imageReference')
	let subexit = state.enter('label')
	const tracker = state.createTracker(info)
	let value = tracker.move('![')
	const alt = state.safe(node2.alt, {
		before: value,
		after: ']',
		...tracker.current(),
	})
	value += tracker.move(alt + '][')
	subexit()
	const stack = state.stack
	state.stack = []
	subexit = state.enter('reference')
	const reference = state.safe(state.associationId(node2), {
		before: value,
		after: ']',
		...tracker.current(),
	})
	subexit()
	state.stack = stack
	exit3()
	if (type === 'full' || !alt || alt !== reference) {
		value += tracker.move(reference + ']')
	} else if (type === 'shortcut') {
		value = value.slice(0, -1)
	} else {
		value += tracker.move(']')
	}
	return value
}
function imageReferencePeek() {
	return '!'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek
function inlineCode(node2, _, state) {
	let value = node2.value || ''
	let sequence = '`'
	let index2 = -1
	while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
		sequence += '`'
	}
	if (
		/[^ \r\n]/.test(value) &&
		((/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value)) || /^`|`$/.test(value))
	) {
		value = ' ' + value + ' '
	}
	while (++index2 < state.unsafe.length) {
		const pattern = state.unsafe[index2]
		const expression = state.compilePattern(pattern)
		let match
		if (!pattern.atBreak) continue
		while ((match = expression.exec(value))) {
			let position2 = match.index
			if (value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13) {
				position2--
			}
			value = value.slice(0, position2) + ' ' + value.slice(match.index + 1)
		}
	}
	return sequence + value + sequence
}
function inlineCodePeek() {
	return '`'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node2, state) {
	const raw = toString(node2)
	return Boolean(
		!state.options.resourceLink && // If there’s a url…
			node2.url && // And there’s a no title…
			!node2.title && // And the content of `node` is a single text node…
			node2.children &&
			node2.children.length === 1 &&
			node2.children[0].type === 'text' && // And if the url is the same as the content…
			(raw === node2.url || 'mailto:' + raw === node2.url) && // And that starts w/ a protocol…
			/^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
			// references don’t work), space, or angle brackets…
			!/[\0- <>\u007F]/.test(node2.url),
	)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/link.js
link.peek = linkPeek
function link(node2, _, state, info) {
	const quote = checkQuote(state)
	const suffix = quote === '"' ? 'Quote' : 'Apostrophe'
	const tracker = state.createTracker(info)
	let exit3
	let subexit
	if (formatLinkAsAutolink(node2, state)) {
		const stack = state.stack
		state.stack = []
		exit3 = state.enter('autolink')
		let value2 = tracker.move('<')
		value2 += tracker.move(
			state.containerPhrasing(node2, {
				before: value2,
				after: '>',
				...tracker.current(),
			}),
		)
		value2 += tracker.move('>')
		exit3()
		state.stack = stack
		return value2
	}
	exit3 = state.enter('link')
	subexit = state.enter('label')
	let value = tracker.move('[')
	value += tracker.move(
		state.containerPhrasing(node2, {
			before: value,
			after: '](',
			...tracker.current(),
		}),
	)
	value += tracker.move('](')
	subexit()
	if (
		// If there’s no url but there is a title…
		(!node2.url && node2.title) || // If there are control characters or whitespace.
		/[\0- \u007F]/.test(node2.url)
	) {
		subexit = state.enter('destinationLiteral')
		value += tracker.move('<')
		value += tracker.move(
			state.safe(node2.url, { before: value, after: '>', ...tracker.current() }),
		)
		value += tracker.move('>')
	} else {
		subexit = state.enter('destinationRaw')
		value += tracker.move(
			state.safe(node2.url, {
				before: value,
				after: node2.title ? ' ' : ')',
				...tracker.current(),
			}),
		)
	}
	subexit()
	if (node2.title) {
		subexit = state.enter(`title${suffix}`)
		value += tracker.move(' ' + quote)
		value += tracker.move(
			state.safe(node2.title, {
				before: value,
				after: quote,
				...tracker.current(),
			}),
		)
		value += tracker.move(quote)
		subexit()
	}
	value += tracker.move(')')
	exit3()
	return value
}
function linkPeek(node2, _, state) {
	return formatLinkAsAutolink(node2, state) ? '<' : '['
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
linkReference.peek = linkReferencePeek
function linkReference(node2, _, state, info) {
	const type = node2.referenceType
	const exit3 = state.enter('linkReference')
	let subexit = state.enter('label')
	const tracker = state.createTracker(info)
	let value = tracker.move('[')
	const text5 = state.containerPhrasing(node2, {
		before: value,
		after: ']',
		...tracker.current(),
	})
	value += tracker.move(text5 + '][')
	subexit()
	const stack = state.stack
	state.stack = []
	subexit = state.enter('reference')
	const reference = state.safe(state.associationId(node2), {
		before: value,
		after: ']',
		...tracker.current(),
	})
	subexit()
	state.stack = stack
	exit3()
	if (type === 'full' || !text5 || text5 !== reference) {
		value += tracker.move(reference + ']')
	} else if (type === 'shortcut') {
		value = value.slice(0, -1)
	} else {
		value += tracker.move(']')
	}
	return value
}
function linkReferencePeek() {
	return '['
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(state) {
	const marker = state.options.bullet || '*'
	if (marker !== '*' && marker !== '+' && marker !== '-') {
		throw new Error(
			'Cannot serialize items with `' +
				marker +
				'` for `options.bullet`, expected `*`, `+`, or `-`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(state) {
	const bullet = checkBullet(state)
	const bulletOther = state.options.bulletOther
	if (!bulletOther) {
		return bullet === '*' ? '-' : '*'
	}
	if (bulletOther !== '*' && bulletOther !== '+' && bulletOther !== '-') {
		throw new Error(
			'Cannot serialize items with `' +
				bulletOther +
				'` for `options.bulletOther`, expected `*`, `+`, or `-`',
		)
	}
	if (bulletOther === bullet) {
		throw new Error(
			'Expected `bullet` (`' +
				bullet +
				'`) and `bulletOther` (`' +
				bulletOther +
				'`) to be different',
		)
	}
	return bulletOther
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(state) {
	const marker = state.options.bulletOrdered || '.'
	if (marker !== '.' && marker !== ')') {
		throw new Error(
			'Cannot serialize items with `' +
				marker +
				'` for `options.bulletOrdered`, expected `.` or `)`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(state) {
	const marker = state.options.rule || '*'
	if (marker !== '*' && marker !== '-' && marker !== '_') {
		throw new Error(
			'Cannot serialize rules with `' + marker + '` for `options.rule`, expected `*`, `-`, or `_`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/list.js
function list3(node2, parent, state, info) {
	const exit3 = state.enter('list')
	const bulletCurrent = state.bulletCurrent
	let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state)
	const bulletOther = node2.ordered ? (bullet === '.' ? ')' : '.') : checkBulletOther(state)
	let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false
	if (!node2.ordered) {
		const firstListItem = node2.children ? node2.children[0] : void 0
		if (
			// Bullet could be used as a thematic break marker:
			(bullet === '*' || bullet === '-') && // Empty first list item:
			firstListItem &&
			(!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
			state.stack[state.stack.length - 1] === 'list' &&
			state.stack[state.stack.length - 2] === 'listItem' &&
			state.stack[state.stack.length - 3] === 'list' &&
			state.stack[state.stack.length - 4] === 'listItem' && // That are each the first child.
			state.indexStack[state.indexStack.length - 1] === 0 &&
			state.indexStack[state.indexStack.length - 2] === 0 &&
			state.indexStack[state.indexStack.length - 3] === 0
		) {
			useDifferentMarker = true
		}
		if (checkRule(state) === bullet && firstListItem) {
			let index2 = -1
			while (++index2 < node2.children.length) {
				const item = node2.children[index2]
				if (
					item &&
					item.type === 'listItem' &&
					item.children &&
					item.children[0] &&
					item.children[0].type === 'thematicBreak'
				) {
					useDifferentMarker = true
					break
				}
			}
		}
	}
	if (useDifferentMarker) {
		bullet = bulletOther
	}
	state.bulletCurrent = bullet
	const value = state.containerFlow(node2, info)
	state.bulletLastUsed = bullet
	state.bulletCurrent = bulletCurrent
	exit3()
	return value
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(state) {
	const style = state.options.listItemIndent || 'one'
	if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
		throw new Error(
			'Cannot serialize items with `' +
				style +
				'` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`',
		)
	}
	return style
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node2, parent, state, info) {
	const listItemIndent = checkListItemIndent(state)
	let bullet = state.bulletCurrent || checkBullet(state)
	if (parent && parent.type === 'list' && parent.ordered) {
		bullet =
			(typeof parent.start === 'number' && parent.start > -1 ? parent.start : 1) +
			(state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) +
			bullet
	}
	let size = bullet.length + 1
	if (
		listItemIndent === 'tab' ||
		(listItemIndent === 'mixed' &&
			((parent && parent.type === 'list' && parent.spread) || node2.spread))
	) {
		size = Math.ceil(size / 4) * 4
	}
	const tracker = state.createTracker(info)
	tracker.move(bullet + ' '.repeat(size - bullet.length))
	tracker.shift(size)
	const exit3 = state.enter('listItem')
	const value = state.indentLines(state.containerFlow(node2, tracker.current()), map5)
	exit3()
	return value
	function map5(line, index2, blank) {
		if (index2) {
			return (blank ? '' : ' '.repeat(size)) + line
		}
		return (blank ? bullet : bullet + ' '.repeat(size - bullet.length)) + line
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node2, _, state, info) {
	const exit3 = state.enter('paragraph')
	const subexit = state.enter('phrasing')
	const value = state.containerPhrasing(node2, info)
	subexit()
	exit3()
	return value
}

// ../../node_modules/.pnpm/mdast-util-phrasing@4.0.0/node_modules/mdast-util-phrasing/lib/index.js
var phrasing =
	/** @type {(node?: unknown) => node is PhrasingContent} */
	convert([
		'break',
		'delete',
		'emphasis',
		'footnote',
		'footnoteReference',
		'image',
		'imageReference',
		'inlineCode',
		'link',
		'linkReference',
		'strong',
		'text',
	])

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/root.js
function root(node2, _, state, info) {
	const hasPhrasing = node2.children.some(function (d) {
		return phrasing(d)
	})
	const fn = hasPhrasing ? state.containerPhrasing : state.containerFlow
	return fn.call(state, node2, info)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(state) {
	const marker = state.options.strong || '*'
	if (marker !== '*' && marker !== '_') {
		throw new Error(
			'Cannot serialize strong with `' + marker + '` for `options.strong`, expected `*`, or `_`',
		)
	}
	return marker
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/strong.js
strong.peek = strongPeek
function strong(node2, _, state, info) {
	const marker = checkStrong(state)
	const exit3 = state.enter('strong')
	const tracker = state.createTracker(info)
	let value = tracker.move(marker + marker)
	value += tracker.move(
		state.containerPhrasing(node2, {
			before: value,
			after: marker,
			...tracker.current(),
		}),
	)
	value += tracker.move(marker + marker)
	exit3()
	return value
}
function strongPeek(_, _1, state) {
	return state.options.strong || '*'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/text.js
function text3(node2, _, state, info) {
	return state.safe(node2.value, info)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(state) {
	const repetition = state.options.ruleRepetition || 3
	if (repetition < 3) {
		throw new Error(
			'Cannot serialize rules with repetition `' +
				repetition +
				'` for `options.ruleRepetition`, expected `3` or more',
		)
	}
	return repetition
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak2(_, _1, state) {
	const value = (checkRule(state) + (state.options.ruleSpaces ? ' ' : '')).repeat(
		checkRuleRepetition(state),
	)
	return state.options.ruleSpaces ? value.slice(0, -1) : value
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle = {
	blockquote,
	break: hardBreak,
	code,
	definition: definition2,
	emphasis,
	hardBreak,
	heading,
	html,
	image,
	imageReference,
	inlineCode,
	link,
	linkReference,
	list: list3,
	listItem,
	paragraph,
	root,
	strong,
	text: text3,
	thematicBreak: thematicBreak2,
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/join.js
var join = [joinDefaults]
function joinDefaults(left2, right2, parent, state) {
	if (
		right2.type === 'code' &&
		formatCodeAsIndented(right2, state) &&
		(left2.type === 'list' || (left2.type === right2.type && formatCodeAsIndented(left2, state)))
	) {
		return false
	}
	if ('spread' in parent && typeof parent.spread === 'boolean') {
		if (
			left2.type === 'paragraph' && // Two paragraphs.
			(left2.type === right2.type ||
				right2.type === 'definition' || // Paragraph followed by a setext heading.
				(right2.type === 'heading' && formatHeadingAsSetext(right2, state)))
		) {
			return
		}
		return parent.spread ? 1 : 0
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/unsafe.js
var fullPhrasingSpans = [
	'autolink',
	'destinationLiteral',
	'destinationRaw',
	'reference',
	'titleQuote',
	'titleApostrophe',
]
var unsafe = [
	{ character: '	', after: '[\\r\\n]', inConstruct: 'phrasing' },
	{ character: '	', before: '[\\r\\n]', inConstruct: 'phrasing' },
	{
		character: '	',
		inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde'],
	},
	{
		character: '\r',
		inConstruct: [
			'codeFencedLangGraveAccent',
			'codeFencedLangTilde',
			'codeFencedMetaGraveAccent',
			'codeFencedMetaTilde',
			'destinationLiteral',
			'headingAtx',
		],
	},
	{
		character: '\n',
		inConstruct: [
			'codeFencedLangGraveAccent',
			'codeFencedLangTilde',
			'codeFencedMetaGraveAccent',
			'codeFencedMetaTilde',
			'destinationLiteral',
			'headingAtx',
		],
	},
	{ character: ' ', after: '[\\r\\n]', inConstruct: 'phrasing' },
	{ character: ' ', before: '[\\r\\n]', inConstruct: 'phrasing' },
	{
		character: ' ',
		inConstruct: ['codeFencedLangGraveAccent', 'codeFencedLangTilde'],
	},
	// An exclamation mark can start an image, if it is followed by a link or
	// a link reference.
	{
		character: '!',
		after: '\\[',
		inConstruct: 'phrasing',
		notInConstruct: fullPhrasingSpans,
	},
	// A quote can break out of a title.
	{ character: '"', inConstruct: 'titleQuote' },
	// A number sign could start an ATX heading if it starts a line.
	{ atBreak: true, character: '#' },
	{ character: '#', inConstruct: 'headingAtx', after: '(?:[\r\n]|$)' },
	// Dollar sign and percentage are not used in markdown.
	// An ampersand could start a character reference.
	{ character: '&', after: '[#A-Za-z]', inConstruct: 'phrasing' },
	// An apostrophe can break out of a title.
	{ character: "'", inConstruct: 'titleApostrophe' },
	// A left paren could break out of a destination raw.
	{ character: '(', inConstruct: 'destinationRaw' },
	// A left paren followed by `]` could make something into a link or image.
	{
		before: '\\]',
		character: '(',
		inConstruct: 'phrasing',
		notInConstruct: fullPhrasingSpans,
	},
	// A right paren could start a list item or break out of a destination
	// raw.
	{ atBreak: true, before: '\\d+', character: ')' },
	{ character: ')', inConstruct: 'destinationRaw' },
	// An asterisk can start thematic breaks, list items, emphasis, strong.
	{ atBreak: true, character: '*', after: '(?:[ 	\r\n*])' },
	{ character: '*', inConstruct: 'phrasing', notInConstruct: fullPhrasingSpans },
	// A plus sign could start a list item.
	{ atBreak: true, character: '+', after: '(?:[ 	\r\n])' },
	// A dash can start thematic breaks, list items, and setext heading
	// underlines.
	{ atBreak: true, character: '-', after: '(?:[ 	\r\n-])' },
	// A dot could start a list item.
	{ atBreak: true, before: '\\d+', character: '.', after: '(?:[ 	\r\n]|$)' },
	// Slash, colon, and semicolon are not used in markdown for constructs.
	// A less than can start html (flow or text) or an autolink.
	// HTML could start with an exclamation mark (declaration, cdata, comment),
	// slash (closing tag), question mark (instruction), or a letter (tag).
	// An autolink also starts with a letter.
	// Finally, it could break out of a destination literal.
	{ atBreak: true, character: '<', after: '[!/?A-Za-z]' },
	{
		character: '<',
		after: '[!/?A-Za-z]',
		inConstruct: 'phrasing',
		notInConstruct: fullPhrasingSpans,
	},
	{ character: '<', inConstruct: 'destinationLiteral' },
	// An equals to can start setext heading underlines.
	{ atBreak: true, character: '=' },
	// A greater than can start block quotes and it can break out of a
	// destination literal.
	{ atBreak: true, character: '>' },
	{ character: '>', inConstruct: 'destinationLiteral' },
	// Question mark and at sign are not used in markdown for constructs.
	// A left bracket can start definitions, references, labels,
	{ atBreak: true, character: '[' },
	{ character: '[', inConstruct: 'phrasing', notInConstruct: fullPhrasingSpans },
	{ character: '[', inConstruct: ['label', 'reference'] },
	// A backslash can start an escape (when followed by punctuation) or a
	// hard break (when followed by an eol).
	// Note: typical escapes are handled in `safe`!
	{ character: '\\', after: '[\\r\\n]', inConstruct: 'phrasing' },
	// A right bracket can exit labels.
	{ character: ']', inConstruct: ['label', 'reference'] },
	// Caret is not used in markdown for constructs.
	// An underscore can start emphasis, strong, or a thematic break.
	{ atBreak: true, character: '_' },
	{ character: '_', inConstruct: 'phrasing', notInConstruct: fullPhrasingSpans },
	// A grave accent can start code (fenced or text), or it can break out of
	// a grave accent code fence.
	{ atBreak: true, character: '`' },
	{
		character: '`',
		inConstruct: ['codeFencedLangGraveAccent', 'codeFencedMetaGraveAccent'],
	},
	{ character: '`', inConstruct: 'phrasing', notInConstruct: fullPhrasingSpans },
	// Left brace, vertical bar, right brace are not used in markdown for
	// constructs.
	// A tilde can start code (fenced).
	{ atBreak: true, character: '~' },
]

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node2) {
	if (node2.label || !node2.identifier) {
		return node2.label || ''
	}
	return decodeString(node2.identifier)
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js
function compilePattern(pattern) {
	if (!pattern._compiled) {
		const before =
			(pattern.atBreak ? '[\\r\\n][\\t ]*' : '') +
			(pattern.before ? '(?:' + pattern.before + ')' : '')
		pattern._compiled = new RegExp(
			(before ? '(' + before + ')' : '') +
				(/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
				pattern.character +
				(pattern.after ? '(?:' + pattern.after + ')' : ''),
			'g',
		)
	}
	return pattern._compiled
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, state, info) {
	const indexStack = state.indexStack
	const children = parent.children || []
	const results = []
	let index2 = -1
	let before = info.before
	indexStack.push(-1)
	let tracker = state.createTracker(info)
	while (++index2 < children.length) {
		const child = children[index2]
		let after
		indexStack[indexStack.length - 1] = index2
		if (index2 + 1 < children.length) {
			let handle2 = state.handle.handlers[children[index2 + 1].type]
			if (handle2 && handle2.peek) handle2 = handle2.peek
			after = handle2
				? handle2(children[index2 + 1], parent, state, {
						before: '',
						after: '',
						...tracker.current(),
					}).charAt(0)
				: ''
		} else {
			after = info.after
		}
		if (results.length > 0 && (before === '\r' || before === '\n') && child.type === 'html') {
			results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, ' ')
			before = ' '
			tracker = state.createTracker(info)
			tracker.move(results.join(''))
		}
		results.push(
			tracker.move(
				state.handle(child, parent, state, {
					...tracker.current(),
					before,
					after,
				}),
			),
		)
		before = results[results.length - 1].slice(-1)
	}
	indexStack.pop()
	return results.join('')
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, state, info) {
	const indexStack = state.indexStack
	const children = parent.children || []
	const tracker = state.createTracker(info)
	const results = []
	let index2 = -1
	indexStack.push(-1)
	while (++index2 < children.length) {
		const child = children[index2]
		indexStack[indexStack.length - 1] = index2
		results.push(
			tracker.move(
				state.handle(child, parent, state, {
					before: '\n',
					after: '\n',
					...tracker.current(),
				}),
			),
		)
		if (child.type !== 'list') {
			state.bulletLastUsed = void 0
		}
		if (index2 < children.length - 1) {
			results.push(tracker.move(between(child, children[index2 + 1], parent, state)))
		}
	}
	indexStack.pop()
	return results.join('')
}
function between(left2, right2, parent, state) {
	let index2 = state.join.length
	while (index2--) {
		const result = state.join[index2](left2, right2, parent, state)
		if (result === true || result === 1) {
			break
		}
		if (typeof result === 'number') {
			return '\n'.repeat(1 + result)
		}
		if (result === false) {
			return '\n\n<!---->\n\n'
		}
	}
	return '\n\n'
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g
function indentLines(value, map5) {
	const result = []
	let start = 0
	let line = 0
	let match
	while ((match = eol.exec(value))) {
		one3(value.slice(start, match.index))
		result.push(match[0])
		start = match.index + match[0].length
		line++
	}
	one3(value.slice(start))
	return result.join('')
	function one3(value2) {
		result.push(map5(value2, line, !value2))
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(state, input, config) {
	const value = (config.before || '') + (input || '') + (config.after || '')
	const positions = []
	const result = []
	const infos = {}
	let index2 = -1
	while (++index2 < state.unsafe.length) {
		const pattern = state.unsafe[index2]
		if (!patternInScope(state.stack, pattern)) {
			continue
		}
		const expression = state.compilePattern(pattern)
		let match
		while ((match = expression.exec(value))) {
			const before = 'before' in pattern || Boolean(pattern.atBreak)
			const after = 'after' in pattern
			const position2 = match.index + (before ? match[1].length : 0)
			if (positions.includes(position2)) {
				if (infos[position2].before && !before) {
					infos[position2].before = false
				}
				if (infos[position2].after && !after) {
					infos[position2].after = false
				}
			} else {
				positions.push(position2)
				infos[position2] = { before, after }
			}
		}
	}
	positions.sort(numerical)
	let start = config.before ? config.before.length : 0
	const end = value.length - (config.after ? config.after.length : 0)
	index2 = -1
	while (++index2 < positions.length) {
		const position2 = positions[index2]
		if (position2 < start || position2 >= end) {
			continue
		}
		if (
			(position2 + 1 < end &&
				positions[index2 + 1] === position2 + 1 &&
				infos[position2].after &&
				!infos[position2 + 1].before &&
				!infos[position2 + 1].after) ||
			(positions[index2 - 1] === position2 - 1 &&
				infos[position2].before &&
				!infos[position2 - 1].before &&
				!infos[position2 - 1].after)
		) {
			continue
		}
		if (start !== position2) {
			result.push(escapeBackslashes(value.slice(start, position2), '\\'))
		}
		start = position2
		if (
			/[!-/:-@[-`{-~]/.test(value.charAt(position2)) &&
			(!config.encode || !config.encode.includes(value.charAt(position2)))
		) {
			result.push('\\')
		} else {
			result.push('&#x' + value.charCodeAt(position2).toString(16).toUpperCase() + ';')
			start++
		}
	}
	result.push(escapeBackslashes(value.slice(start, end), config.after))
	return result.join('')
}
function numerical(a, b) {
	return a - b
}
function escapeBackslashes(value, after) {
	const expression = /\\(?=[!-/:-@[-`{-~])/g
	const positions = []
	const results = []
	const whole = value + after
	let index2 = -1
	let start = 0
	let match
	while ((match = expression.exec(whole))) {
		positions.push(match.index)
	}
	while (++index2 < positions.length) {
		if (start !== positions[index2]) {
			results.push(value.slice(start, positions[index2]))
		}
		results.push('\\')
		start = positions[index2]
	}
	results.push(value.slice(start))
	return results.join('')
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/util/track.js
function track(config) {
	const options = config || {}
	const now = options.now || {}
	let lineShift = options.lineShift || 0
	let line = now.line || 1
	let column = now.column || 1
	return { move, current, shift }
	function current() {
		return { now: { line, column }, lineShift }
	}
	function shift(value) {
		lineShift += value
	}
	function move(input) {
		const value = input || ''
		const chunks = value.split(/\r?\n|\r/g)
		const tail = chunks[chunks.length - 1]
		line += chunks.length - 1
		column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift
		return value
	}
}

// ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.0/node_modules/mdast-util-to-markdown/lib/index.js
function toMarkdown(tree, options = {}) {
	const state = {
		enter,
		indentLines,
		associationId: association,
		containerPhrasing: containerPhrasingBound,
		containerFlow: containerFlowBound,
		createTracker: track,
		compilePattern,
		safe: safeBound,
		stack: [],
		unsafe: [...unsafe],
		join: [...join],
		// @ts-expect-error: GFM / frontmatter are typed in `mdast` but not defined
		// here.
		handlers: { ...handle },
		options: {},
		indexStack: [],
		// @ts-expect-error: add `handle` in a second.
		handle: void 0,
	}
	configure2(state, options)
	if (state.options.tightDefinitions) {
		state.join.push(joinDefinition)
	}
	state.handle = zwitch('type', {
		invalid,
		unknown,
		handlers: state.handlers,
	})
	let result = state.handle(tree, void 0, state, {
		before: '\n',
		after: '\n',
		now: { line: 1, column: 1 },
		lineShift: 0,
	})
	if (
		result &&
		result.charCodeAt(result.length - 1) !== 10 &&
		result.charCodeAt(result.length - 1) !== 13
	) {
		result += '\n'
	}
	return result
	function enter(name) {
		state.stack.push(name)
		return exit3
		function exit3() {
			state.stack.pop()
		}
	}
}
function invalid(value) {
	throw new Error('Cannot handle value `' + value + '`, expected node')
}
function unknown(value) {
	const node2 =
		/** @type {Nodes} */
		value
	throw new Error('Cannot handle unknown node `' + node2.type + '`')
}
function joinDefinition(left2, right2) {
	if (left2.type === 'definition' && left2.type === right2.type) {
		return 0
	}
}
function containerPhrasingBound(parent, info) {
	return containerPhrasing(parent, this, info)
}
function containerFlowBound(parent, info) {
	return containerFlow(parent, this, info)
}
function safeBound(value, config) {
	return safe(this, value, config)
}

// ../../node_modules/.pnpm/remark-stringify@11.0.0/node_modules/remark-stringify/lib/index.js
function remarkStringify(options) {
	const self2 = this
	self2.compiler = compiler2
	function compiler2(tree) {
		return toMarkdown(tree, {
			...self2.data('settings'),
			...options,
			// Note: this option is not in the readme.
			// The goal is for it to be set by plugins on `data` instead of being
			// passed by users.
			extensions: self2.data('toMarkdownExtensions') || [],
		})
	}
}

// ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function bail(error) {
	if (error) {
		throw error
	}
}

// ../../node_modules/.pnpm/unified@11.0.4/node_modules/unified/lib/index.js
var import_extend = __toESM(require_extend(), 1)

// ../../node_modules/.pnpm/devlop@1.1.0/node_modules/devlop/lib/default.js
function ok2() {}

// ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false
	}
	const prototype = Object.getPrototypeOf(value)
	return (
		(prototype === null ||
			prototype === Object.prototype ||
			Object.getPrototypeOf(prototype) === null) &&
		!(Symbol.toStringTag in value) &&
		!(Symbol.iterator in value)
	)
}

// ../../node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
function trough() {
	const fns = []
	const pipeline = { run, use }
	return pipeline
	function run(...values) {
		let middlewareIndex = -1
		const callback = values.pop()
		if (typeof callback !== 'function') {
			throw new TypeError('Expected function as last argument, not ' + callback)
		}
		next(null, ...values)
		function next(error, ...output) {
			const fn = fns[++middlewareIndex]
			let index2 = -1
			if (error) {
				callback(error)
				return
			}
			while (++index2 < values.length) {
				if (output[index2] === null || output[index2] === void 0) {
					output[index2] = values[index2]
				}
			}
			values = output
			if (fn) {
				wrap(fn, next)(...output)
			} else {
				callback(null, ...output)
			}
		}
	}
	function use(middelware) {
		if (typeof middelware !== 'function') {
			throw new TypeError('Expected `middelware` to be a function, not ' + middelware)
		}
		fns.push(middelware)
		return pipeline
	}
}
function wrap(middleware, callback) {
	let called
	return wrapped
	function wrapped(...parameters) {
		const fnExpectsCallback = middleware.length > parameters.length
		let result
		if (fnExpectsCallback) {
			parameters.push(done)
		}
		try {
			result = middleware.apply(this, parameters)
		} catch (error) {
			const exception =
				/** @type {Error} */
				error
			if (fnExpectsCallback && called) {
				throw exception
			}
			return done(exception)
		}
		if (!fnExpectsCallback) {
			if (result instanceof Promise) {
				result.then(then, done)
			} else if (result instanceof Error) {
				done(result)
			} else {
				then(result)
			}
		}
	}
	function done(error, ...output) {
		if (!called) {
			called = true
			callback(error, ...output)
		}
	}
	function then(value) {
		done(null, value)
	}
}

// ../../node_modules/.pnpm/vfile-message@4.0.2/node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
	/**
	 * Create a message for `reason`.
	 *
	 * > 🪦 **Note**: also has obsolete signatures.
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Options | null | undefined} [options]
	 * @returns
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @overload
	 * @param {string} reason
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {string | null | undefined} [origin]
	 * @returns
	 *
	 * @param {Error | VFileMessage | string} causeOrReason
	 *   Reason for message, should use markdown.
	 * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	 *   Configuration (optional).
	 * @param {string | null | undefined} [origin]
	 *   Place in code where the message originates (example:
	 *   `'my-package:my-rule'` or `'my-rule'`).
	 * @returns
	 *   Instance of `VFileMessage`.
	 */
	// eslint-disable-next-line complexity
	constructor(causeOrReason, optionsOrParentOrPlace, origin) {
		super()
		if (typeof optionsOrParentOrPlace === 'string') {
			origin = optionsOrParentOrPlace
			optionsOrParentOrPlace = void 0
		}
		let reason = ''
		let options = {}
		let legacyCause = false
		if (optionsOrParentOrPlace) {
			if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
				options = { place: optionsOrParentOrPlace }
			} else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
				options = { place: optionsOrParentOrPlace }
			} else if ('type' in optionsOrParentOrPlace) {
				options = {
					ancestors: [optionsOrParentOrPlace],
					place: optionsOrParentOrPlace.position,
				}
			} else {
				options = { ...optionsOrParentOrPlace }
			}
		}
		if (typeof causeOrReason === 'string') {
			reason = causeOrReason
		} else if (!options.cause && causeOrReason) {
			legacyCause = true
			reason = causeOrReason.message
			options.cause = causeOrReason
		}
		if (!options.ruleId && !options.source && typeof origin === 'string') {
			const index2 = origin.indexOf(':')
			if (index2 === -1) {
				options.ruleId = origin
			} else {
				options.source = origin.slice(0, index2)
				options.ruleId = origin.slice(index2 + 1)
			}
		}
		if (!options.place && options.ancestors && options.ancestors) {
			const parent = options.ancestors[options.ancestors.length - 1]
			if (parent) {
				options.place = parent.position
			}
		}
		const start = options.place && 'start' in options.place ? options.place.start : options.place
		this.ancestors = options.ancestors || void 0
		this.cause = options.cause || void 0
		this.column = start ? start.column : void 0
		this.fatal = void 0
		this.file
		this.message = reason
		this.line = start ? start.line : void 0
		this.name = stringifyPosition(options.place) || '1:1'
		this.place = options.place || void 0
		this.reason = this.message
		this.ruleId = options.ruleId || void 0
		this.source = options.source || void 0
		this.stack =
			legacyCause && options.cause && typeof options.cause.stack === 'string'
				? options.cause.stack
				: ''
		this.actual
		this.expected
		this.note
		this.url
	}
}
VFileMessage.prototype.file = ''
VFileMessage.prototype.name = ''
VFileMessage.prototype.reason = ''
VFileMessage.prototype.message = ''
VFileMessage.prototype.stack = ''
VFileMessage.prototype.column = void 0
VFileMessage.prototype.line = void 0
VFileMessage.prototype.ancestors = void 0
VFileMessage.prototype.cause = void 0
VFileMessage.prototype.fatal = void 0
VFileMessage.prototype.place = void 0
VFileMessage.prototype.ruleId = void 0
VFileMessage.prototype.source = void 0

// ../../node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minpath.js
import { default as default2 } from 'node:path'

// ../../node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minproc.js
import { default as default3 } from 'node:process'

// ../../node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minurl.js
import { fileURLToPath } from 'node:url'

// ../../node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
	return Boolean(
		fileUrlOrPath !== null &&
			typeof fileUrlOrPath === 'object' &&
			'href' in fileUrlOrPath &&
			fileUrlOrPath.href &&
			'protocol' in fileUrlOrPath &&
			fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
			fileUrlOrPath.auth === void 0,
	)
}

// ../../node_modules/.pnpm/vfile@6.0.1/node_modules/vfile/lib/index.js
var order =
	/** @type {const} */
	['history', 'path', 'basename', 'stem', 'extname', 'dirname']
var VFile = class {
	/**
	 * Create a new virtual file.
	 *
	 * `options` is treated as:
	 *
	 * *   `string` or `Uint8Array` — `{value: options}`
	 * *   `URL` — `{path: options}`
	 * *   `VFile` — shallow copies its data over to the new file
	 * *   `object` — all fields are shallow copied over to the new file
	 *
	 * Path related fields are set in the following order (least specific to
	 * most specific): `history`, `path`, `basename`, `stem`, `extname`,
	 * `dirname`.
	 *
	 * You cannot set `dirname` or `extname` without setting either `history`,
	 * `path`, `basename`, or `stem` too.
	 *
	 * @param {Compatible | null | undefined} [value]
	 *   File value.
	 * @returns
	 *   New instance.
	 */
	constructor(value) {
		let options
		if (!value) {
			options = {}
		} else if (isUrl(value)) {
			options = { path: value }
		} else if (typeof value === 'string' || isUint8Array(value)) {
			options = { value }
		} else {
			options = value
		}
		this.cwd = default3.cwd()
		this.data = {}
		this.history = []
		this.messages = []
		this.value
		this.map
		this.result
		this.stored
		let index2 = -1
		while (++index2 < order.length) {
			const prop2 = order[index2]
			if (prop2 in options && options[prop2] !== void 0 && options[prop2] !== null) {
				this[prop2] = prop2 === 'history' ? [...options[prop2]] : options[prop2]
			}
		}
		let prop
		for (prop in options) {
			if (!order.includes(prop)) {
				this[prop] = options[prop]
			}
		}
	}
	/**
	 * Get the basename (including extname) (example: `'index.min.js'`).
	 *
	 * @returns {string | undefined}
	 *   Basename.
	 */
	get basename() {
		return typeof this.path === 'string' ? default2.basename(this.path) : void 0
	}
	/**
	 * Set basename (including extname) (`'index.min.js'`).
	 *
	 * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	 * on windows).
	 * Cannot be nullified (use `file.path = file.dirname` instead).
	 *
	 * @param {string} basename
	 *   Basename.
	 * @returns {undefined}
	 *   Nothing.
	 */
	set basename(basename2) {
		assertNonEmpty(basename2, 'basename')
		assertPart(basename2, 'basename')
		this.path = default2.join(this.dirname || '', basename2)
	}
	/**
	 * Get the parent path (example: `'~'`).
	 *
	 * @returns {string | undefined}
	 *   Dirname.
	 */
	get dirname() {
		return typeof this.path === 'string' ? default2.dirname(this.path) : void 0
	}
	/**
	 * Set the parent path (example: `'~'`).
	 *
	 * Cannot be set if there’s no `path` yet.
	 *
	 * @param {string | undefined} dirname
	 *   Dirname.
	 * @returns {undefined}
	 *   Nothing.
	 */
	set dirname(dirname3) {
		assertPath(this.basename, 'dirname')
		this.path = default2.join(dirname3 || '', this.basename)
	}
	/**
	 * Get the extname (including dot) (example: `'.js'`).
	 *
	 * @returns {string | undefined}
	 *   Extname.
	 */
	get extname() {
		return typeof this.path === 'string' ? default2.extname(this.path) : void 0
	}
	/**
	 * Set the extname (including dot) (example: `'.js'`).
	 *
	 * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	 * on windows).
	 * Cannot be set if there’s no `path` yet.
	 *
	 * @param {string | undefined} extname
	 *   Extname.
	 * @returns {undefined}
	 *   Nothing.
	 */
	set extname(extname2) {
		assertPart(extname2, 'extname')
		assertPath(this.dirname, 'extname')
		if (extname2) {
			if (extname2.codePointAt(0) !== 46) {
				throw new Error('`extname` must start with `.`')
			}
			if (extname2.includes('.', 1)) {
				throw new Error('`extname` cannot contain multiple dots')
			}
		}
		this.path = default2.join(this.dirname, this.stem + (extname2 || ''))
	}
	/**
	 * Get the full path (example: `'~/index.min.js'`).
	 *
	 * @returns {string}
	 *   Path.
	 */
	get path() {
		return this.history[this.history.length - 1]
	}
	/**
	 * Set the full path (example: `'~/index.min.js'`).
	 *
	 * Cannot be nullified.
	 * You can set a file URL (a `URL` object with a `file:` protocol) which will
	 * be turned into a path with `url.fileURLToPath`.
	 *
	 * @param {URL | string} path
	 *   Path.
	 * @returns {undefined}
	 *   Nothing.
	 */
	set path(path8) {
		if (isUrl(path8)) {
			path8 = fileURLToPath(path8)
		}
		assertNonEmpty(path8, 'path')
		if (this.path !== path8) {
			this.history.push(path8)
		}
	}
	/**
	 * Get the stem (basename w/o extname) (example: `'index.min'`).
	 *
	 * @returns {string | undefined}
	 *   Stem.
	 */
	get stem() {
		return typeof this.path === 'string' ? default2.basename(this.path, this.extname) : void 0
	}
	/**
	 * Set the stem (basename w/o extname) (example: `'index.min'`).
	 *
	 * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	 * on windows).
	 * Cannot be nullified (use `file.path = file.dirname` instead).
	 *
	 * @param {string} stem
	 *   Stem.
	 * @returns {undefined}
	 *   Nothing.
	 */
	set stem(stem) {
		assertNonEmpty(stem, 'stem')
		assertPart(stem, 'stem')
		this.path = default2.join(this.dirname || '', stem + (this.extname || ''))
	}
	// Normal prototypal methods.
	/**
	 * Create a fatal message for `reason` associated with the file.
	 *
	 * The `fatal` field of the message is set to `true` (error; file not usable)
	 * and the `file` field is set to the current file path.
	 * The message is added to the `messages` field on `file`.
	 *
	 * > 🪦 **Note**: also has obsolete signatures.
	 *
	 * @overload
	 * @param {string} reason
	 * @param {MessageOptions | null | undefined} [options]
	 * @returns {never}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {string | null | undefined} [origin]
	 * @returns {never}
	 *
	 * @param {Error | VFileMessage | string} causeOrReason
	 *   Reason for message, should use markdown.
	 * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	 *   Configuration (optional).
	 * @param {string | null | undefined} [origin]
	 *   Place in code where the message originates (example:
	 *   `'my-package:my-rule'` or `'my-rule'`).
	 * @returns {never}
	 *   Never.
	 * @throws {VFileMessage}
	 *   Message.
	 */
	fail(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = this.message(causeOrReason, optionsOrParentOrPlace, origin)
		message.fatal = true
		throw message
	}
	/**
	 * Create an info message for `reason` associated with the file.
	 *
	 * The `fatal` field of the message is set to `undefined` (info; change
	 * likely not needed) and the `file` field is set to the current file path.
	 * The message is added to the `messages` field on `file`.
	 *
	 * > 🪦 **Note**: also has obsolete signatures.
	 *
	 * @overload
	 * @param {string} reason
	 * @param {MessageOptions | null | undefined} [options]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @param {Error | VFileMessage | string} causeOrReason
	 *   Reason for message, should use markdown.
	 * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	 *   Configuration (optional).
	 * @param {string | null | undefined} [origin]
	 *   Place in code where the message originates (example:
	 *   `'my-package:my-rule'` or `'my-rule'`).
	 * @returns {VFileMessage}
	 *   Message.
	 */
	info(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = this.message(causeOrReason, optionsOrParentOrPlace, origin)
		message.fatal = void 0
		return message
	}
	/**
	 * Create a message for `reason` associated with the file.
	 *
	 * The `fatal` field of the message is set to `false` (warning; change may be
	 * needed) and the `file` field is set to the current file path.
	 * The message is added to the `messages` field on `file`.
	 *
	 * > 🪦 **Note**: also has obsolete signatures.
	 *
	 * @overload
	 * @param {string} reason
	 * @param {MessageOptions | null | undefined} [options]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {string} reason
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Node | NodeLike | null | undefined} parent
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {Point | Position | null | undefined} place
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @overload
	 * @param {Error | VFileMessage} cause
	 * @param {string | null | undefined} [origin]
	 * @returns {VFileMessage}
	 *
	 * @param {Error | VFileMessage | string} causeOrReason
	 *   Reason for message, should use markdown.
	 * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	 *   Configuration (optional).
	 * @param {string | null | undefined} [origin]
	 *   Place in code where the message originates (example:
	 *   `'my-package:my-rule'` or `'my-rule'`).
	 * @returns {VFileMessage}
	 *   Message.
	 */
	message(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = new VFileMessage(
			// @ts-expect-error: the overloads are fine.
			causeOrReason,
			optionsOrParentOrPlace,
			origin,
		)
		if (this.path) {
			message.name = this.path + ':' + message.name
			message.file = this.path
		}
		message.fatal = false
		this.messages.push(message)
		return message
	}
	/**
	 * Serialize the file.
	 *
	 * > **Note**: which encodings are supported depends on the engine.
	 * > For info on Node.js, see:
	 * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
	 *
	 * @param {string | null | undefined} [encoding='utf8']
	 *   Character encoding to understand `value` as when it’s a `Uint8Array`
	 *   (default: `'utf-8'`).
	 * @returns {string}
	 *   Serialized file.
	 */
	toString(encoding) {
		if (this.value === void 0) {
			return ''
		}
		if (typeof this.value === 'string') {
			return this.value
		}
		const decoder = new TextDecoder(encoding || void 0)
		return decoder.decode(this.value)
	}
}
function assertPart(part, name) {
	if (part && part.includes(default2.sep)) {
		throw new Error('`' + name + '` cannot be a path: did not expect `' + default2.sep + '`')
	}
}
function assertNonEmpty(part, name) {
	if (!part) {
		throw new Error('`' + name + '` cannot be empty')
	}
}
function assertPath(path8, name) {
	if (!path8) {
		throw new Error('Setting `' + name + '` requires `path` to be set too')
	}
}
function isUint8Array(value) {
	return Boolean(
		value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value,
	)
}

// ../../node_modules/.pnpm/unified@11.0.4/node_modules/unified/lib/callable-instance.js
var CallableInstance =
	/**
	 * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
	 */
	/** @type {unknown} */
	/**
	 * @this {Function}
	 * @param {string | symbol} property
	 * @returns {(...parameters: Array<unknown>) => unknown}
	 */
	function (property) {
		const self2 = this
		const constr = self2.constructor
		const proto2 =
			/** @type {Record<string | symbol, Function>} */
			// Prototypes do exist.
			// type-coverage:ignore-next-line
			constr.prototype
		const func = proto2[property]
		const apply = function () {
			return func.apply(apply, arguments)
		}
		Object.setPrototypeOf(apply, proto2)
		const names = Object.getOwnPropertyNames(func)
		for (const p of names) {
			const descriptor = Object.getOwnPropertyDescriptor(func, p)
			if (descriptor) Object.defineProperty(apply, p, descriptor)
		}
		return apply
	}

// ../../node_modules/.pnpm/unified@11.0.4/node_modules/unified/lib/index.js
var own5 = {}.hasOwnProperty
var Processor = class _Processor extends CallableInstance {
	/**
	 * Create a processor.
	 */
	constructor() {
		super('copy')
		this.Compiler = void 0
		this.Parser = void 0
		this.attachers = []
		this.compiler = void 0
		this.freezeIndex = -1
		this.frozen = void 0
		this.namespace = {}
		this.parser = void 0
		this.transformers = trough()
	}
	/**
	 * Copy a processor.
	 *
	 * @deprecated
	 *   This is a private internal method and should not be used.
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *   New *unfrozen* processor ({@link Processor `Processor`}) that is
	 *   configured to work the same as its ancestor.
	 *   When the descendant processor is configured in the future it does not
	 *   affect the ancestral processor.
	 */
	copy() {
		const destination =
			/** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
			new _Processor()
		let index2 = -1
		while (++index2 < this.attachers.length) {
			const attacher = this.attachers[index2]
			destination.use(...attacher)
		}
		destination.data((0, import_extend.default)(true, {}, this.namespace))
		return destination
	}
	/**
	 * Configure the processor with info available to all plugins.
	 * Information is stored in an object.
	 *
	 * Typically, options can be given to a specific plugin, but sometimes it
	 * makes sense to have information shared with several plugins.
	 * For example, a list of HTML elements that are self-closing, which is
	 * needed during all phases.
	 *
	 * > 👉 **Note**: setting information cannot occur on *frozen* processors.
	 * > Call the processor first to create a new unfrozen processor.
	 *
	 * > 👉 **Note**: to register custom data in TypeScript, augment the
	 * > {@link Data `Data`} interface.
	 *
	 * @example
	 *   This example show how to get and set info:
	 *
	 *   ```js
	 *   import {unified} from 'unified'
	 *
	 *   const processor = unified().data('alpha', 'bravo')
	 *
	 *   processor.data('alpha') // => 'bravo'
	 *
	 *   processor.data() // => {alpha: 'bravo'}
	 *
	 *   processor.data({charlie: 'delta'})
	 *
	 *   processor.data() // => {charlie: 'delta'}
	 *   ```
	 *
	 * @template {keyof Data} Key
	 *
	 * @overload
	 * @returns {Data}
	 *
	 * @overload
	 * @param {Data} dataset
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *
	 * @overload
	 * @param {Key} key
	 * @returns {Data[Key]}
	 *
	 * @overload
	 * @param {Key} key
	 * @param {Data[Key]} value
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *
	 * @param {Data | Key} [key]
	 *   Key to get or set, or entire dataset to set, or nothing to get the
	 *   entire dataset (optional).
	 * @param {Data[Key]} [value]
	 *   Value to set (optional).
	 * @returns {unknown}
	 *   The current processor when setting, the value at `key` when getting, or
	 *   the entire dataset when getting without key.
	 */
	data(key, value) {
		if (typeof key === 'string') {
			if (arguments.length === 2) {
				assertUnfrozen('data', this.frozen)
				this.namespace[key] = value
				return this
			}
			return (own5.call(this.namespace, key) && this.namespace[key]) || void 0
		}
		if (key) {
			assertUnfrozen('data', this.frozen)
			this.namespace = key
			return this
		}
		return this.namespace
	}
	/**
	 * Freeze a processor.
	 *
	 * Frozen processors are meant to be extended and not to be configured
	 * directly.
	 *
	 * When a processor is frozen it cannot be unfrozen.
	 * New processors working the same way can be created by calling the
	 * processor.
	 *
	 * It’s possible to freeze processors explicitly by calling `.freeze()`.
	 * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
	 * `.stringify()`, `.process()`, or `.processSync()` are called.
	 *
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *   The current processor.
	 */
	freeze() {
		if (this.frozen) {
			return this
		}
		const self2 =
			/** @type {Processor} */
			/** @type {unknown} */
			this
		while (++this.freezeIndex < this.attachers.length) {
			const [attacher, ...options] = this.attachers[this.freezeIndex]
			if (options[0] === false) {
				continue
			}
			if (options[0] === true) {
				options[0] = void 0
			}
			const transformer = attacher.call(self2, ...options)
			if (typeof transformer === 'function') {
				this.transformers.use(transformer)
			}
		}
		this.frozen = true
		this.freezeIndex = Number.POSITIVE_INFINITY
		return this
	}
	/**
	 * Parse text to a syntax tree.
	 *
	 * > 👉 **Note**: `parse` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `parse` performs the parse phase, not the run phase or other
	 * > phases.
	 *
	 * @param {Compatible | undefined} [file]
	 *   file to parse (optional); typically `string` or `VFile`; any value
	 *   accepted as `x` in `new VFile(x)`.
	 * @returns {ParseTree extends undefined ? Node : ParseTree}
	 *   Syntax tree representing `file`.
	 */
	parse(file) {
		this.freeze()
		const realFile = vfile(file)
		const parser2 = this.parser || this.Parser
		assertParser('parse', parser2)
		return parser2(String(realFile), realFile)
	}
	/**
	 * Process the given file as configured on the processor.
	 *
	 * > 👉 **Note**: `process` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `process` performs the parse, run, and stringify phases.
	 *
	 * @overload
	 * @param {Compatible | undefined} file
	 * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
	 * @returns {undefined}
	 *
	 * @overload
	 * @param {Compatible | undefined} [file]
	 * @returns {Promise<VFileWithOutput<CompileResult>>}
	 *
	 * @param {Compatible | undefined} [file]
	 *   File (optional); typically `string` or `VFile`]; any value accepted as
	 *   `x` in `new VFile(x)`.
	 * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
	 *   Callback (optional).
	 * @returns {Promise<VFile> | undefined}
	 *   Nothing if `done` is given.
	 *   Otherwise a promise, rejected with a fatal error or resolved with the
	 *   processed file.
	 *
	 *   The parsed, transformed, and compiled value is available at
	 *   `file.value` (see note).
	 *
	 *   > 👉 **Note**: unified typically compiles by serializing: most
	 *   > compilers return `string` (or `Uint8Array`).
	 *   > Some compilers, such as the one configured with
	 *   > [`rehype-react`][rehype-react], return other values (in this case, a
	 *   > React tree).
	 *   > If you’re using a compiler that doesn’t serialize, expect different
	 *   > result values.
	 *   >
	 *   > To register custom results in TypeScript, add them to
	 *   > {@link CompileResultMap `CompileResultMap`}.
	 *
	 *   [rehype-react]: https://github.com/rehypejs/rehype-react
	 */
	process(file, done) {
		const self2 = this
		this.freeze()
		assertParser('process', this.parser || this.Parser)
		assertCompiler('process', this.compiler || this.Compiler)
		return done ? executor(void 0, done) : new Promise(executor)
		function executor(resolve5, reject) {
			const realFile = vfile(file)
			const parseTree =
				/** @type {HeadTree extends undefined ? Node : HeadTree} */
				/** @type {unknown} */
				self2.parse(realFile)
			self2.run(parseTree, realFile, function (error, tree, file2) {
				if (error || !tree || !file2) {
					return realDone(error)
				}
				const compileTree =
					/** @type {CompileTree extends undefined ? Node : CompileTree} */
					/** @type {unknown} */
					tree
				const compileResult = self2.stringify(compileTree, file2)
				if (looksLikeAValue(compileResult)) {
					file2.value = compileResult
				} else {
					file2.result = compileResult
				}
				realDone(
					error,
					/** @type {VFileWithOutput<CompileResult>} */
					file2,
				)
			})
			function realDone(error, file2) {
				if (error || !file2) {
					reject(error)
				} else if (resolve5) {
					resolve5(file2)
				} else {
					ok2(done, '`done` is defined if `resolve` is not')
					done(void 0, file2)
				}
			}
		}
	}
	/**
	 * Process the given file as configured on the processor.
	 *
	 * An error is thrown if asynchronous transforms are configured.
	 *
	 * > 👉 **Note**: `processSync` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `processSync` performs the parse, run, and stringify phases.
	 *
	 * @param {Compatible | undefined} [file]
	 *   File (optional); typically `string` or `VFile`; any value accepted as
	 *   `x` in `new VFile(x)`.
	 * @returns {VFileWithOutput<CompileResult>}
	 *   The processed file.
	 *
	 *   The parsed, transformed, and compiled value is available at
	 *   `file.value` (see note).
	 *
	 *   > 👉 **Note**: unified typically compiles by serializing: most
	 *   > compilers return `string` (or `Uint8Array`).
	 *   > Some compilers, such as the one configured with
	 *   > [`rehype-react`][rehype-react], return other values (in this case, a
	 *   > React tree).
	 *   > If you’re using a compiler that doesn’t serialize, expect different
	 *   > result values.
	 *   >
	 *   > To register custom results in TypeScript, add them to
	 *   > {@link CompileResultMap `CompileResultMap`}.
	 *
	 *   [rehype-react]: https://github.com/rehypejs/rehype-react
	 */
	processSync(file) {
		let complete = false
		let result
		this.freeze()
		assertParser('processSync', this.parser || this.Parser)
		assertCompiler('processSync', this.compiler || this.Compiler)
		this.process(file, realDone)
		assertDone('processSync', 'process', complete)
		ok2(result, 'we either bailed on an error or have a tree')
		return result
		function realDone(error, file2) {
			complete = true
			bail(error)
			result = file2
		}
	}
	/**
	 * Run *transformers* on a syntax tree.
	 *
	 * > 👉 **Note**: `run` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `run` performs the run phase, not other phases.
	 *
	 * @overload
	 * @param {HeadTree extends undefined ? Node : HeadTree} tree
	 * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
	 * @returns {undefined}
	 *
	 * @overload
	 * @param {HeadTree extends undefined ? Node : HeadTree} tree
	 * @param {Compatible | undefined} file
	 * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
	 * @returns {undefined}
	 *
	 * @overload
	 * @param {HeadTree extends undefined ? Node : HeadTree} tree
	 * @param {Compatible | undefined} [file]
	 * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
	 *
	 * @param {HeadTree extends undefined ? Node : HeadTree} tree
	 *   Tree to transform and inspect.
	 * @param {(
	 *   RunCallback<TailTree extends undefined ? Node : TailTree> |
	 *   Compatible
	 * )} [file]
	 *   File associated with `node` (optional); any value accepted as `x` in
	 *   `new VFile(x)`.
	 * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
	 *   Callback (optional).
	 * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
	 *   Nothing if `done` is given.
	 *   Otherwise, a promise rejected with a fatal error or resolved with the
	 *   transformed tree.
	 */
	run(tree, file, done) {
		assertNode(tree)
		this.freeze()
		const transformers = this.transformers
		if (!done && typeof file === 'function') {
			done = file
			file = void 0
		}
		return done ? executor(void 0, done) : new Promise(executor)
		function executor(resolve5, reject) {
			ok2(typeof file !== 'function', '`file` can\u2019t be a `done` anymore, we checked')
			const realFile = vfile(file)
			transformers.run(tree, realFile, realDone)
			function realDone(error, outputTree, file2) {
				const resultingTree =
					/** @type {TailTree extends undefined ? Node : TailTree} */
					outputTree || tree
				if (error) {
					reject(error)
				} else if (resolve5) {
					resolve5(resultingTree)
				} else {
					ok2(done, '`done` is defined if `resolve` is not')
					done(void 0, resultingTree, file2)
				}
			}
		}
	}
	/**
	 * Run *transformers* on a syntax tree.
	 *
	 * An error is thrown if asynchronous transforms are configured.
	 *
	 * > 👉 **Note**: `runSync` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `runSync` performs the run phase, not other phases.
	 *
	 * @param {HeadTree extends undefined ? Node : HeadTree} tree
	 *   Tree to transform and inspect.
	 * @param {Compatible | undefined} [file]
	 *   File associated with `node` (optional); any value accepted as `x` in
	 *   `new VFile(x)`.
	 * @returns {TailTree extends undefined ? Node : TailTree}
	 *   Transformed tree.
	 */
	runSync(tree, file) {
		let complete = false
		let result
		this.run(tree, file, realDone)
		assertDone('runSync', 'run', complete)
		ok2(result, 'we either bailed on an error or have a tree')
		return result
		function realDone(error, tree2) {
			bail(error)
			result = tree2
			complete = true
		}
	}
	/**
	 * Compile a syntax tree.
	 *
	 * > 👉 **Note**: `stringify` freezes the processor if not already *frozen*.
	 *
	 * > 👉 **Note**: `stringify` performs the stringify phase, not the run phase
	 * > or other phases.
	 *
	 * @param {CompileTree extends undefined ? Node : CompileTree} tree
	 *   Tree to compile.
	 * @param {Compatible | undefined} [file]
	 *   File associated with `node` (optional); any value accepted as `x` in
	 *   `new VFile(x)`.
	 * @returns {CompileResult extends undefined ? Value : CompileResult}
	 *   Textual representation of the tree (see note).
	 *
	 *   > 👉 **Note**: unified typically compiles by serializing: most compilers
	 *   > return `string` (or `Uint8Array`).
	 *   > Some compilers, such as the one configured with
	 *   > [`rehype-react`][rehype-react], return other values (in this case, a
	 *   > React tree).
	 *   > If you’re using a compiler that doesn’t serialize, expect different
	 *   > result values.
	 *   >
	 *   > To register custom results in TypeScript, add them to
	 *   > {@link CompileResultMap `CompileResultMap`}.
	 *
	 *   [rehype-react]: https://github.com/rehypejs/rehype-react
	 */
	stringify(tree, file) {
		this.freeze()
		const realFile = vfile(file)
		const compiler2 = this.compiler || this.Compiler
		assertCompiler('stringify', compiler2)
		assertNode(tree)
		return compiler2(tree, realFile)
	}
	/**
	 * Configure the processor to use a plugin, a list of usable values, or a
	 * preset.
	 *
	 * If the processor is already using a plugin, the previous plugin
	 * configuration is changed based on the options that are passed in.
	 * In other words, the plugin is not added a second time.
	 *
	 * > 👉 **Note**: `use` cannot be called on *frozen* processors.
	 * > Call the processor first to create a new unfrozen processor.
	 *
	 * @example
	 *   There are many ways to pass plugins to `.use()`.
	 *   This example gives an overview:
	 *
	 *   ```js
	 *   import {unified} from 'unified'
	 *
	 *   unified()
	 *     // Plugin with options:
	 *     .use(pluginA, {x: true, y: true})
	 *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
	 *     .use(pluginA, {y: false, z: true})
	 *     // Plugins:
	 *     .use([pluginB, pluginC])
	 *     // Two plugins, the second with options:
	 *     .use([pluginD, [pluginE, {}]])
	 *     // Preset with plugins and settings:
	 *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
	 *     // Settings only:
	 *     .use({settings: {position: false}})
	 *   ```
	 *
	 * @template {Array<unknown>} [Parameters=[]]
	 * @template {Node | string | undefined} [Input=undefined]
	 * @template [Output=Input]
	 *
	 * @overload
	 * @param {Preset | null | undefined} [preset]
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *
	 * @overload
	 * @param {PluggableList} list
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *
	 * @overload
	 * @param {Plugin<Parameters, Input, Output>} plugin
	 * @param {...(Parameters | [boolean])} parameters
	 * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
	 *
	 * @param {PluggableList | Plugin | Preset | null | undefined} value
	 *   Usable value.
	 * @param {...unknown} parameters
	 *   Parameters, when a plugin is given as a usable value.
	 * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
	 *   Current processor.
	 */
	use(value, ...parameters) {
		const attachers = this.attachers
		const namespace = this.namespace
		assertUnfrozen('use', this.frozen)
		if (value === null || value === void 0) {
		} else if (typeof value === 'function') {
			addPlugin(value, parameters)
		} else if (typeof value === 'object') {
			if (Array.isArray(value)) {
				addList(value)
			} else {
				addPreset(value)
			}
		} else {
			throw new TypeError('Expected usable value, not `' + value + '`')
		}
		return this
		function add(value2) {
			if (typeof value2 === 'function') {
				addPlugin(value2, [])
			} else if (typeof value2 === 'object') {
				if (Array.isArray(value2)) {
					const [plugin, ...parameters2] =
						/** @type {PluginTuple<Array<unknown>>} */
						value2
					addPlugin(plugin, parameters2)
				} else {
					addPreset(value2)
				}
			} else {
				throw new TypeError('Expected usable value, not `' + value2 + '`')
			}
		}
		function addPreset(result) {
			if (!('plugins' in result) && !('settings' in result)) {
				throw new Error(
					'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
				)
			}
			addList(result.plugins)
			if (result.settings) {
				namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings)
			}
		}
		function addList(plugins) {
			let index2 = -1
			if (plugins === null || plugins === void 0) {
			} else if (Array.isArray(plugins)) {
				while (++index2 < plugins.length) {
					const thing = plugins[index2]
					add(thing)
				}
			} else {
				throw new TypeError('Expected a list of plugins, not `' + plugins + '`')
			}
		}
		function addPlugin(plugin, parameters2) {
			let index2 = -1
			let entryIndex = -1
			while (++index2 < attachers.length) {
				if (attachers[index2][0] === plugin) {
					entryIndex = index2
					break
				}
			}
			if (entryIndex === -1) {
				attachers.push([plugin, ...parameters2])
			} else if (parameters2.length > 0) {
				let [primary, ...rest] = parameters2
				const currentPrimary = attachers[entryIndex][1]
				if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
					primary = (0, import_extend.default)(true, currentPrimary, primary)
				}
				attachers[entryIndex] = [plugin, primary, ...rest]
			}
		}
	}
}
var unified = new Processor().freeze()
function assertParser(name, value) {
	if (typeof value !== 'function') {
		throw new TypeError('Cannot `' + name + '` without `parser`')
	}
}
function assertCompiler(name, value) {
	if (typeof value !== 'function') {
		throw new TypeError('Cannot `' + name + '` without `compiler`')
	}
}
function assertUnfrozen(name, frozen) {
	if (frozen) {
		throw new Error(
			'Cannot call `' +
				name +
				'` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
		)
	}
}
function assertNode(node2) {
	if (!isPlainObject(node2) || typeof node2.type !== 'string') {
		throw new TypeError('Expected node, got `' + node2 + '`')
	}
}
function assertDone(name, asyncName, complete) {
	if (!complete) {
		throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead')
	}
}
function vfile(value) {
	return looksLikeAVFile(value) ? value : new VFile(value)
}
function looksLikeAVFile(value) {
	return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value)
}
function looksLikeAValue(value) {
	return typeof value === 'string' || isUint8Array2(value)
}
function isUint8Array2(value) {
	return Boolean(
		value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value,
	)
}

// ../../node_modules/.pnpm/remark@15.0.1/node_modules/remark/index.js
var remark = unified().use(remarkParse).use(remarkStringify).freeze()

// ../../node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
function ccount(value, character) {
	const source = String(value)
	if (typeof character !== 'string') {
		throw new TypeError('Expected character')
	}
	let count = 0
	let index2 = source.indexOf(character)
	while (index2 !== -1) {
		count++
		index2 = source.indexOf(character, index2 + character.length)
	}
	return count
}

// ../../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string3) {
	if (typeof string3 !== 'string') {
		throw new TypeError('Expected a string')
	}
	return string3.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}

// ../../node_modules/.pnpm/mdast-util-find-and-replace@3.0.1/node_modules/mdast-util-find-and-replace/lib/index.js
function findAndReplace(tree, list4, options) {
	const settings = options || {}
	const ignored = convert(settings.ignore || [])
	const pairs = toPairs(list4)
	let pairIndex = -1
	while (++pairIndex < pairs.length) {
		visitParents(tree, 'text', visitor)
	}
	function visitor(node2, parents) {
		let index2 = -1
		let grandparent
		while (++index2 < parents.length) {
			const parent = parents[index2]
			const siblings = grandparent ? grandparent.children : void 0
			if (ignored(parent, siblings ? siblings.indexOf(parent) : void 0, grandparent)) {
				return
			}
			grandparent = parent
		}
		if (grandparent) {
			return handler(node2, parents)
		}
	}
	function handler(node2, parents) {
		const parent = parents[parents.length - 1]
		const find = pairs[pairIndex][0]
		const replace2 = pairs[pairIndex][1]
		let start = 0
		const siblings = parent.children
		const index2 = siblings.indexOf(node2)
		let change = false
		let nodes = []
		find.lastIndex = 0
		let match = find.exec(node2.value)
		while (match) {
			const position2 = match.index
			const matchObject = {
				index: match.index,
				input: match.input,
				stack: [...parents, node2],
			}
			let value = replace2(...match, matchObject)
			if (typeof value === 'string') {
				value = value.length > 0 ? { type: 'text', value } : void 0
			}
			if (value === false) {
				find.lastIndex = position2 + 1
			} else {
				if (start !== position2) {
					nodes.push({
						type: 'text',
						value: node2.value.slice(start, position2),
					})
				}
				if (Array.isArray(value)) {
					nodes.push(...value)
				} else if (value) {
					nodes.push(value)
				}
				start = position2 + match[0].length
				change = true
			}
			if (!find.global) {
				break
			}
			match = find.exec(node2.value)
		}
		if (change) {
			if (start < node2.value.length) {
				nodes.push({ type: 'text', value: node2.value.slice(start) })
			}
			parent.children.splice(index2, 1, ...nodes)
		} else {
			nodes = [node2]
		}
		return index2 + nodes.length
	}
}
function toPairs(tupleOrList) {
	const result = []
	if (!Array.isArray(tupleOrList)) {
		throw new TypeError('Expected find and replace tuple or list of tuples')
	}
	const list4 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList]
	let index2 = -1
	while (++index2 < list4.length) {
		const tuple = list4[index2]
		result.push([toExpression(tuple[0]), toFunction(tuple[1])])
	}
	return result
}
function toExpression(find) {
	return typeof find === 'string' ? new RegExp(escapeStringRegexp(find), 'g') : find
}
function toFunction(replace2) {
	return typeof replace2 === 'function'
		? replace2
		: function () {
				return replace2
			}
}

// ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@2.0.0/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var inConstruct = 'phrasing'
var notInConstruct = ['autolink', 'link', 'image', 'label']
function gfmAutolinkLiteralFromMarkdown() {
	return {
		transforms: [transformGfmAutolinkLiterals],
		enter: {
			literalAutolink: enterLiteralAutolink,
			literalAutolinkEmail: enterLiteralAutolinkValue,
			literalAutolinkHttp: enterLiteralAutolinkValue,
			literalAutolinkWww: enterLiteralAutolinkValue,
		},
		exit: {
			literalAutolink: exitLiteralAutolink,
			literalAutolinkEmail: exitLiteralAutolinkEmail,
			literalAutolinkHttp: exitLiteralAutolinkHttp,
			literalAutolinkWww: exitLiteralAutolinkWww,
		},
	}
}
function gfmAutolinkLiteralToMarkdown() {
	return {
		unsafe: [
			{
				character: '@',
				before: '[+\\-.\\w]',
				after: '[\\-.\\w]',
				inConstruct,
				notInConstruct,
			},
			{
				character: '.',
				before: '[Ww]',
				after: '[\\-.\\w]',
				inConstruct,
				notInConstruct,
			},
			{
				character: ':',
				before: '[ps]',
				after: '\\/',
				inConstruct,
				notInConstruct,
			},
		],
	}
}
function enterLiteralAutolink(token) {
	this.enter({ type: 'link', title: null, url: '', children: [] }, token)
}
function enterLiteralAutolinkValue(token) {
	this.config.enter.autolinkProtocol.call(this, token)
}
function exitLiteralAutolinkHttp(token) {
	this.config.exit.autolinkProtocol.call(this, token)
}
function exitLiteralAutolinkWww(token) {
	this.config.exit.data.call(this, token)
	const node2 = this.stack[this.stack.length - 1]
	ok2(node2.type === 'link')
	node2.url = 'http://' + this.sliceSerialize(token)
}
function exitLiteralAutolinkEmail(token) {
	this.config.exit.autolinkEmail.call(this, token)
}
function exitLiteralAutolink(token) {
	this.exit(token)
}
function transformGfmAutolinkLiterals(tree) {
	findAndReplace(
		tree,
		[
			[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
			[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail],
		],
		{ ignore: ['link', 'linkReference'] },
	)
}
function findUrl(_, protocol, domain2, path8, match) {
	let prefix = ''
	if (!previous2(match)) {
		return false
	}
	if (/^w/i.test(protocol)) {
		domain2 = protocol + domain2
		protocol = ''
		prefix = 'http://'
	}
	if (!isCorrectDomain(domain2)) {
		return false
	}
	const parts = splitUrl(domain2 + path8)
	if (!parts[0]) return false
	const result = {
		type: 'link',
		title: null,
		url: prefix + protocol + parts[0],
		children: [{ type: 'text', value: protocol + parts[0] }],
	}
	if (parts[1]) {
		return [result, { type: 'text', value: parts[1] }]
	}
	return result
}
function findEmail(_, atext, label, match) {
	if (
		// Not an expected previous character.
		!previous2(match, true) || // Label ends in not allowed character.
		/[-\d_]$/.test(label)
	) {
		return false
	}
	return {
		type: 'link',
		title: null,
		url: 'mailto:' + atext + '@' + label,
		children: [{ type: 'text', value: atext + '@' + label }],
	}
}
function isCorrectDomain(domain2) {
	const parts = domain2.split('.')
	if (
		parts.length < 2 ||
		(parts[parts.length - 1] &&
			(/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
		(parts[parts.length - 2] &&
			(/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
	) {
		return false
	}
	return true
}
function splitUrl(url) {
	const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url)
	if (!trailExec) {
		return [url, void 0]
	}
	url = url.slice(0, trailExec.index)
	let trail2 = trailExec[0]
	let closingParenIndex = trail2.indexOf(')')
	const openingParens = ccount(url, '(')
	let closingParens = ccount(url, ')')
	while (closingParenIndex !== -1 && openingParens > closingParens) {
		url += trail2.slice(0, closingParenIndex + 1)
		trail2 = trail2.slice(closingParenIndex + 1)
		closingParenIndex = trail2.indexOf(')')
		closingParens++
	}
	return [url, trail2]
}
function previous2(match, email) {
	const code3 = match.input.charCodeAt(match.index - 1)
	return (
		(match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) &&
		(!email || code3 !== 47)
	)
}

// ../../node_modules/.pnpm/mdast-util-gfm-footnote@2.0.0/node_modules/mdast-util-gfm-footnote/lib/index.js
footnoteReference.peek = footnoteReferencePeek
function gfmFootnoteFromMarkdown() {
	return {
		enter: {
			gfmFootnoteDefinition: enterFootnoteDefinition,
			gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
			gfmFootnoteCall: enterFootnoteCall,
			gfmFootnoteCallString: enterFootnoteCallString,
		},
		exit: {
			gfmFootnoteDefinition: exitFootnoteDefinition,
			gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
			gfmFootnoteCall: exitFootnoteCall,
			gfmFootnoteCallString: exitFootnoteCallString,
		},
	}
}
function gfmFootnoteToMarkdown() {
	return {
		// This is on by default already.
		unsafe: [{ character: '[', inConstruct: ['phrasing', 'label', 'reference'] }],
		handlers: { footnoteDefinition, footnoteReference },
	}
}
function enterFootnoteDefinition(token) {
	this.enter({ type: 'footnoteDefinition', identifier: '', label: '', children: [] }, token)
}
function enterFootnoteDefinitionLabelString() {
	this.buffer()
}
function exitFootnoteDefinitionLabelString(token) {
	const label = this.resume()
	const node2 = this.stack[this.stack.length - 1]
	ok2(node2.type === 'footnoteDefinition')
	node2.label = label
	node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase()
}
function exitFootnoteDefinition(token) {
	this.exit(token)
}
function enterFootnoteCall(token) {
	this.enter({ type: 'footnoteReference', identifier: '', label: '' }, token)
}
function enterFootnoteCallString() {
	this.buffer()
}
function exitFootnoteCallString(token) {
	const label = this.resume()
	const node2 = this.stack[this.stack.length - 1]
	ok2(node2.type === 'footnoteReference')
	node2.label = label
	node2.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase()
}
function exitFootnoteCall(token) {
	this.exit(token)
}
function footnoteReference(node2, _, state, info) {
	const tracker = state.createTracker(info)
	let value = tracker.move('[^')
	const exit3 = state.enter('footnoteReference')
	const subexit = state.enter('reference')
	value += tracker.move(
		state.safe(state.associationId(node2), {
			...tracker.current(),
			before: value,
			after: ']',
		}),
	)
	subexit()
	exit3()
	value += tracker.move(']')
	return value
}
function footnoteReferencePeek() {
	return '['
}
function footnoteDefinition(node2, _, state, info) {
	const tracker = state.createTracker(info)
	let value = tracker.move('[^')
	const exit3 = state.enter('footnoteDefinition')
	const subexit = state.enter('label')
	value += tracker.move(
		state.safe(state.associationId(node2), {
			...tracker.current(),
			before: value,
			after: ']',
		}),
	)
	subexit()
	value += tracker.move(']:' + (node2.children && node2.children.length > 0 ? ' ' : ''))
	tracker.shift(4)
	value += tracker.move(state.indentLines(state.containerFlow(node2, tracker.current()), map4))
	exit3()
	return value
}
function map4(line, index2, blank) {
	if (index2 === 0) {
		return line
	}
	return (blank ? '' : '    ') + line
}

// ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@2.0.0/node_modules/mdast-util-gfm-strikethrough/lib/index.js
var constructsWithoutStrikethrough = [
	'autolink',
	'destinationLiteral',
	'destinationRaw',
	'reference',
	'titleQuote',
	'titleApostrophe',
]
handleDelete.peek = peekDelete
function gfmStrikethroughFromMarkdown() {
	return {
		canContainEols: ['delete'],
		enter: { strikethrough: enterStrikethrough },
		exit: { strikethrough: exitStrikethrough },
	}
}
function gfmStrikethroughToMarkdown() {
	return {
		unsafe: [
			{
				character: '~',
				inConstruct: 'phrasing',
				notInConstruct: constructsWithoutStrikethrough,
			},
		],
		handlers: { delete: handleDelete },
	}
}
function enterStrikethrough(token) {
	this.enter({ type: 'delete', children: [] }, token)
}
function exitStrikethrough(token) {
	this.exit(token)
}
function handleDelete(node2, _, state, info) {
	const tracker = state.createTracker(info)
	const exit3 = state.enter('strikethrough')
	let value = tracker.move('~~')
	value += state.containerPhrasing(node2, {
		...tracker.current(),
		before: value,
		after: '~',
	})
	value += tracker.move('~~')
	exit3()
	return value
}
function peekDelete() {
	return '~'
}

// ../../node_modules/.pnpm/markdown-table@3.0.3/node_modules/markdown-table/index.js
function markdownTable(table, options = {}) {
	const align2 = (options.align || []).concat()
	const stringLength = options.stringLength || defaultStringLength
	const alignments = []
	const cellMatrix = []
	const sizeMatrix = []
	const longestCellByColumn = []
	let mostCellsPerRow = 0
	let rowIndex = -1
	while (++rowIndex < table.length) {
		const row2 = []
		const sizes2 = []
		let columnIndex2 = -1
		if (table[rowIndex].length > mostCellsPerRow) {
			mostCellsPerRow = table[rowIndex].length
		}
		while (++columnIndex2 < table[rowIndex].length) {
			const cell = serialize(table[rowIndex][columnIndex2])
			if (options.alignDelimiters !== false) {
				const size = stringLength(cell)
				sizes2[columnIndex2] = size
				if (
					longestCellByColumn[columnIndex2] === void 0 ||
					size > longestCellByColumn[columnIndex2]
				) {
					longestCellByColumn[columnIndex2] = size
				}
			}
			row2.push(cell)
		}
		cellMatrix[rowIndex] = row2
		sizeMatrix[rowIndex] = sizes2
	}
	let columnIndex = -1
	if (typeof align2 === 'object' && 'length' in align2) {
		while (++columnIndex < mostCellsPerRow) {
			alignments[columnIndex] = toAlignment(align2[columnIndex])
		}
	} else {
		const code3 = toAlignment(align2)
		while (++columnIndex < mostCellsPerRow) {
			alignments[columnIndex] = code3
		}
	}
	columnIndex = -1
	const row = []
	const sizes = []
	while (++columnIndex < mostCellsPerRow) {
		const code3 = alignments[columnIndex]
		let before = ''
		let after = ''
		if (code3 === 99) {
			before = ':'
			after = ':'
		} else if (code3 === 108) {
			before = ':'
		} else if (code3 === 114) {
			after = ':'
		}
		let size =
			options.alignDelimiters === false
				? 1
				: Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length)
		const cell = before + '-'.repeat(size) + after
		if (options.alignDelimiters !== false) {
			size = before.length + size + after.length
			if (size > longestCellByColumn[columnIndex]) {
				longestCellByColumn[columnIndex] = size
			}
			sizes[columnIndex] = size
		}
		row[columnIndex] = cell
	}
	cellMatrix.splice(1, 0, row)
	sizeMatrix.splice(1, 0, sizes)
	rowIndex = -1
	const lines = []
	while (++rowIndex < cellMatrix.length) {
		const row2 = cellMatrix[rowIndex]
		const sizes2 = sizeMatrix[rowIndex]
		columnIndex = -1
		const line = []
		while (++columnIndex < mostCellsPerRow) {
			const cell = row2[columnIndex] || ''
			let before = ''
			let after = ''
			if (options.alignDelimiters !== false) {
				const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0)
				const code3 = alignments[columnIndex]
				if (code3 === 114) {
					before = ' '.repeat(size)
				} else if (code3 === 99) {
					if (size % 2) {
						before = ' '.repeat(size / 2 + 0.5)
						after = ' '.repeat(size / 2 - 0.5)
					} else {
						before = ' '.repeat(size / 2)
						after = before
					}
				} else {
					after = ' '.repeat(size)
				}
			}
			if (options.delimiterStart !== false && !columnIndex) {
				line.push('|')
			}
			if (
				options.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
				// empty: there will be a closing space.
				!(options.alignDelimiters === false && cell === '') &&
				(options.delimiterStart !== false || columnIndex)
			) {
				line.push(' ')
			}
			if (options.alignDelimiters !== false) {
				line.push(before)
			}
			line.push(cell)
			if (options.alignDelimiters !== false) {
				line.push(after)
			}
			if (options.padding !== false) {
				line.push(' ')
			}
			if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
				line.push('|')
			}
		}
		lines.push(options.delimiterEnd === false ? line.join('').replace(/ +$/, '') : line.join(''))
	}
	return lines.join('\n')
}
function serialize(value) {
	return value === null || value === void 0 ? '' : String(value)
}
function defaultStringLength(value) {
	return value.length
}
function toAlignment(value) {
	const code3 = typeof value === 'string' ? value.codePointAt(0) : 0
	return code3 === 67 || code3 === 99
		? 99
		: code3 === 76 || code3 === 108
			? 108
			: code3 === 82 || code3 === 114
				? 114
				: 0
}

// ../../node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js
function gfmTableFromMarkdown() {
	return {
		enter: {
			table: enterTable,
			tableData: enterCell,
			tableHeader: enterCell,
			tableRow: enterRow,
		},
		exit: {
			codeText: exitCodeText,
			table: exitTable,
			tableData: exit2,
			tableHeader: exit2,
			tableRow: exit2,
		},
	}
}
function enterTable(token) {
	const align2 = token._align
	ok2(align2, 'expected `_align` on table')
	this.enter(
		{
			type: 'table',
			align: align2.map(function (d) {
				return d === 'none' ? null : d
			}),
			children: [],
		},
		token,
	)
	this.data.inTable = true
}
function exitTable(token) {
	this.exit(token)
	this.data.inTable = void 0
}
function enterRow(token) {
	this.enter({ type: 'tableRow', children: [] }, token)
}
function exit2(token) {
	this.exit(token)
}
function enterCell(token) {
	this.enter({ type: 'tableCell', children: [] }, token)
}
function exitCodeText(token) {
	let value = this.resume()
	if (this.data.inTable) {
		value = value.replace(/\\([\\|])/g, replace)
	}
	const node2 = this.stack[this.stack.length - 1]
	ok2(node2.type === 'inlineCode')
	node2.value = value
	this.exit(token)
}
function replace($0, $1) {
	return $1 === '|' ? $1 : $0
}
function gfmTableToMarkdown(options) {
	const settings = options || {}
	const padding = settings.tableCellPadding
	const alignDelimiters = settings.tablePipeAlign
	const stringLength = settings.stringLength
	const around = padding ? ' ' : '|'
	return {
		unsafe: [
			{ character: '\r', inConstruct: 'tableCell' },
			{ character: '\n', inConstruct: 'tableCell' },
			// A pipe, when followed by a tab or space (padding), or a dash or colon
			// (unpadded delimiter row), could result in a table.
			{ atBreak: true, character: '|', after: '[	 :-]' },
			// A pipe in a cell must be encoded.
			{ character: '|', inConstruct: 'tableCell' },
			// A colon must be followed by a dash, in which case it could start a
			// delimiter row.
			{ atBreak: true, character: ':', after: '-' },
			// A delimiter row can also start with a dash, when followed by more
			// dashes, a colon, or a pipe.
			// This is a stricter version than the built in check for lists, thematic
			// breaks, and setex heading underlines though:
			// <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
			{ atBreak: true, character: '-', after: '[:|-]' },
		],
		handlers: {
			inlineCode: inlineCodeWithTable,
			table: handleTable,
			tableCell: handleTableCell,
			tableRow: handleTableRow,
		},
	}
	function handleTable(node2, _, state, info) {
		return serializeData(handleTableAsData(node2, state, info), node2.align)
	}
	function handleTableRow(node2, _, state, info) {
		const row = handleTableRowAsData(node2, state, info)
		const value = serializeData([row])
		return value.slice(0, value.indexOf('\n'))
	}
	function handleTableCell(node2, _, state, info) {
		const exit3 = state.enter('tableCell')
		const subexit = state.enter('phrasing')
		const value = state.containerPhrasing(node2, {
			...info,
			before: around,
			after: around,
		})
		subexit()
		exit3()
		return value
	}
	function serializeData(matrix, align2) {
		return markdownTable(matrix, {
			align: align2,
			// @ts-expect-error: `markdown-table` types should support `null`.
			alignDelimiters,
			// @ts-expect-error: `markdown-table` types should support `null`.
			padding,
			// @ts-expect-error: `markdown-table` types should support `null`.
			stringLength,
		})
	}
	function handleTableAsData(node2, state, info) {
		const children = node2.children
		let index2 = -1
		const result = []
		const subexit = state.enter('table')
		while (++index2 < children.length) {
			result[index2] = handleTableRowAsData(children[index2], state, info)
		}
		subexit()
		return result
	}
	function handleTableRowAsData(node2, state, info) {
		const children = node2.children
		let index2 = -1
		const result = []
		const subexit = state.enter('tableRow')
		while (++index2 < children.length) {
			result[index2] = handleTableCell(children[index2], node2, state, info)
		}
		subexit()
		return result
	}
	function inlineCodeWithTable(node2, parent, state) {
		let value = handle.inlineCode(node2, parent, state)
		if (state.stack.includes('tableCell')) {
			value = value.replace(/\|/g, '\\$&')
		}
		return value
	}
}

// ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@2.0.0/node_modules/mdast-util-gfm-task-list-item/lib/index.js
function gfmTaskListItemFromMarkdown() {
	return {
		exit: {
			taskListCheckValueChecked: exitCheck,
			taskListCheckValueUnchecked: exitCheck,
			paragraph: exitParagraphWithTaskListItem,
		},
	}
}
function gfmTaskListItemToMarkdown() {
	return {
		unsafe: [{ atBreak: true, character: '-', after: '[:|-]' }],
		handlers: { listItem: listItemWithTaskListItem },
	}
}
function exitCheck(token) {
	const node2 = this.stack[this.stack.length - 2]
	ok2(node2.type === 'listItem')
	node2.checked = token.type === 'taskListCheckValueChecked'
}
function exitParagraphWithTaskListItem(token) {
	const parent = this.stack[this.stack.length - 2]
	if (parent && parent.type === 'listItem' && typeof parent.checked === 'boolean') {
		const node2 = this.stack[this.stack.length - 1]
		ok2(node2.type === 'paragraph')
		const head = node2.children[0]
		if (head && head.type === 'text') {
			const siblings = parent.children
			let index2 = -1
			let firstParaghraph
			while (++index2 < siblings.length) {
				const sibling = siblings[index2]
				if (sibling.type === 'paragraph') {
					firstParaghraph = sibling
					break
				}
			}
			if (firstParaghraph === node2) {
				head.value = head.value.slice(1)
				if (head.value.length === 0) {
					node2.children.shift()
				} else if (
					node2.position &&
					head.position &&
					typeof head.position.start.offset === 'number'
				) {
					head.position.start.column++
					head.position.start.offset++
					node2.position.start = Object.assign({}, head.position.start)
				}
			}
		}
	}
	this.exit(token)
}
function listItemWithTaskListItem(node2, parent, state, info) {
	const head = node2.children[0]
	const checkable = typeof node2.checked === 'boolean' && head && head.type === 'paragraph'
	const checkbox = '[' + (node2.checked ? 'x' : ' ') + '] '
	const tracker = state.createTracker(info)
	if (checkable) {
		tracker.move(checkbox)
	}
	let value = handle.listItem(node2, parent, state, {
		...info,
		...tracker.current(),
	})
	if (checkable) {
		value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)
	}
	return value
	function check($0) {
		return $0 + checkbox
	}
}

// ../../node_modules/.pnpm/mdast-util-gfm@3.0.0/node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
	return [
		gfmAutolinkLiteralFromMarkdown(),
		gfmFootnoteFromMarkdown(),
		gfmStrikethroughFromMarkdown(),
		gfmTableFromMarkdown(),
		gfmTaskListItemFromMarkdown(),
	]
}
function gfmToMarkdown(options) {
	return {
		extensions: [
			gfmAutolinkLiteralToMarkdown(),
			gfmFootnoteToMarkdown(),
			gfmStrikethroughToMarkdown(),
			gfmTableToMarkdown(options),
			gfmTaskListItemToMarkdown(),
		],
	}
}

// ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.0.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var wwwPrefix = {
	tokenize: tokenizeWwwPrefix,
	partial: true,
}
var domain = {
	tokenize: tokenizeDomain,
	partial: true,
}
var path = {
	tokenize: tokenizePath,
	partial: true,
}
var trail = {
	tokenize: tokenizeTrail,
	partial: true,
}
var emailDomainDotTrail = {
	tokenize: tokenizeEmailDomainDotTrail,
	partial: true,
}
var wwwAutolink = {
	tokenize: tokenizeWwwAutolink,
	previous: previousWww,
}
var protocolAutolink = {
	tokenize: tokenizeProtocolAutolink,
	previous: previousProtocol,
}
var emailAutolink = {
	tokenize: tokenizeEmailAutolink,
	previous: previousEmail,
}
var text4 = {}
function gfmAutolinkLiteral() {
	return {
		text: text4,
	}
}
var code2 = 48
while (code2 < 123) {
	text4[code2] = emailAutolink
	code2++
	if (code2 === 58) code2 = 65
	else if (code2 === 91) code2 = 97
}
text4[43] = emailAutolink
text4[45] = emailAutolink
text4[46] = emailAutolink
text4[95] = emailAutolink
text4[72] = [emailAutolink, protocolAutolink]
text4[104] = [emailAutolink, protocolAutolink]
text4[87] = [emailAutolink, wwwAutolink]
text4[119] = [emailAutolink, wwwAutolink]
function tokenizeEmailAutolink(effects, ok3, nok) {
	const self2 = this
	let dot
	let data
	return start
	function start(code3) {
		if (
			!gfmAtext(code3) ||
			!previousEmail.call(self2, self2.previous) ||
			previousUnbalanced(self2.events)
		) {
			return nok(code3)
		}
		effects.enter('literalAutolink')
		effects.enter('literalAutolinkEmail')
		return atext(code3)
	}
	function atext(code3) {
		if (gfmAtext(code3)) {
			effects.consume(code3)
			return atext
		}
		if (code3 === 64) {
			effects.consume(code3)
			return emailDomain
		}
		return nok(code3)
	}
	function emailDomain(code3) {
		if (code3 === 46) {
			return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code3)
		}
		if (code3 === 45 || code3 === 95 || asciiAlphanumeric(code3)) {
			data = true
			effects.consume(code3)
			return emailDomain
		}
		return emailDomainAfter(code3)
	}
	function emailDomainDot(code3) {
		effects.consume(code3)
		dot = true
		return emailDomain
	}
	function emailDomainAfter(code3) {
		if (data && dot && asciiAlpha(self2.previous)) {
			effects.exit('literalAutolinkEmail')
			effects.exit('literalAutolink')
			return ok3(code3)
		}
		return nok(code3)
	}
}
function tokenizeWwwAutolink(effects, ok3, nok) {
	const self2 = this
	return wwwStart
	function wwwStart(code3) {
		if (
			(code3 !== 87 && code3 !== 119) ||
			!previousWww.call(self2, self2.previous) ||
			previousUnbalanced(self2.events)
		) {
			return nok(code3)
		}
		effects.enter('literalAutolink')
		effects.enter('literalAutolinkWww')
		return effects.check(
			wwwPrefix,
			effects.attempt(domain, effects.attempt(path, wwwAfter), nok),
			nok,
		)(code3)
	}
	function wwwAfter(code3) {
		effects.exit('literalAutolinkWww')
		effects.exit('literalAutolink')
		return ok3(code3)
	}
}
function tokenizeProtocolAutolink(effects, ok3, nok) {
	const self2 = this
	let buffer = ''
	let seen = false
	return protocolStart
	function protocolStart(code3) {
		if (
			(code3 === 72 || code3 === 104) &&
			previousProtocol.call(self2, self2.previous) &&
			!previousUnbalanced(self2.events)
		) {
			effects.enter('literalAutolink')
			effects.enter('literalAutolinkHttp')
			buffer += String.fromCodePoint(code3)
			effects.consume(code3)
			return protocolPrefixInside
		}
		return nok(code3)
	}
	function protocolPrefixInside(code3) {
		if (asciiAlpha(code3) && buffer.length < 5) {
			buffer += String.fromCodePoint(code3)
			effects.consume(code3)
			return protocolPrefixInside
		}
		if (code3 === 58) {
			const protocol = buffer.toLowerCase()
			if (protocol === 'http' || protocol === 'https') {
				effects.consume(code3)
				return protocolSlashesInside
			}
		}
		return nok(code3)
	}
	function protocolSlashesInside(code3) {
		if (code3 === 47) {
			effects.consume(code3)
			if (seen) {
				return afterProtocol
			}
			seen = true
			return protocolSlashesInside
		}
		return nok(code3)
	}
	function afterProtocol(code3) {
		return code3 === null ||
			asciiControl(code3) ||
			markdownLineEndingOrSpace(code3) ||
			unicodeWhitespace(code3) ||
			unicodePunctuation(code3)
			? nok(code3)
			: effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code3)
	}
	function protocolAfter(code3) {
		effects.exit('literalAutolinkHttp')
		effects.exit('literalAutolink')
		return ok3(code3)
	}
}
function tokenizeWwwPrefix(effects, ok3, nok) {
	let size = 0
	return wwwPrefixInside
	function wwwPrefixInside(code3) {
		if ((code3 === 87 || code3 === 119) && size < 3) {
			size++
			effects.consume(code3)
			return wwwPrefixInside
		}
		if (code3 === 46 && size === 3) {
			effects.consume(code3)
			return wwwPrefixAfter
		}
		return nok(code3)
	}
	function wwwPrefixAfter(code3) {
		return code3 === null ? nok(code3) : ok3(code3)
	}
}
function tokenizeDomain(effects, ok3, nok) {
	let underscoreInLastSegment
	let underscoreInLastLastSegment
	let seen
	return domainInside
	function domainInside(code3) {
		if (code3 === 46 || code3 === 95) {
			return effects.check(trail, domainAfter, domainAtPunctuation)(code3)
		}
		if (
			code3 === null ||
			markdownLineEndingOrSpace(code3) ||
			unicodeWhitespace(code3) ||
			(code3 !== 45 && unicodePunctuation(code3))
		) {
			return domainAfter(code3)
		}
		seen = true
		effects.consume(code3)
		return domainInside
	}
	function domainAtPunctuation(code3) {
		if (code3 === 95) {
			underscoreInLastSegment = true
		} else {
			underscoreInLastLastSegment = underscoreInLastSegment
			underscoreInLastSegment = void 0
		}
		effects.consume(code3)
		return domainInside
	}
	function domainAfter(code3) {
		if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
			return nok(code3)
		}
		return ok3(code3)
	}
}
function tokenizePath(effects, ok3) {
	let sizeOpen = 0
	let sizeClose = 0
	return pathInside
	function pathInside(code3) {
		if (code3 === 40) {
			sizeOpen++
			effects.consume(code3)
			return pathInside
		}
		if (code3 === 41 && sizeClose < sizeOpen) {
			return pathAtPunctuation(code3)
		}
		if (
			code3 === 33 ||
			code3 === 34 ||
			code3 === 38 ||
			code3 === 39 ||
			code3 === 41 ||
			code3 === 42 ||
			code3 === 44 ||
			code3 === 46 ||
			code3 === 58 ||
			code3 === 59 ||
			code3 === 60 ||
			code3 === 63 ||
			code3 === 93 ||
			code3 === 95 ||
			code3 === 126
		) {
			return effects.check(trail, ok3, pathAtPunctuation)(code3)
		}
		if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3)) {
			return ok3(code3)
		}
		effects.consume(code3)
		return pathInside
	}
	function pathAtPunctuation(code3) {
		if (code3 === 41) {
			sizeClose++
		}
		effects.consume(code3)
		return pathInside
	}
}
function tokenizeTrail(effects, ok3, nok) {
	return trail2
	function trail2(code3) {
		if (
			code3 === 33 ||
			code3 === 34 ||
			code3 === 39 ||
			code3 === 41 ||
			code3 === 42 ||
			code3 === 44 ||
			code3 === 46 ||
			code3 === 58 ||
			code3 === 59 ||
			code3 === 63 ||
			code3 === 95 ||
			code3 === 126
		) {
			effects.consume(code3)
			return trail2
		}
		if (code3 === 38) {
			effects.consume(code3)
			return trailCharRefStart
		}
		if (code3 === 93) {
			effects.consume(code3)
			return trailBracketAfter
		}
		if (
			// `<` is an end.
			code3 === 60 || // So is whitespace.
			code3 === null ||
			markdownLineEndingOrSpace(code3) ||
			unicodeWhitespace(code3)
		) {
			return ok3(code3)
		}
		return nok(code3)
	}
	function trailBracketAfter(code3) {
		if (
			code3 === null ||
			code3 === 40 ||
			code3 === 91 ||
			markdownLineEndingOrSpace(code3) ||
			unicodeWhitespace(code3)
		) {
			return ok3(code3)
		}
		return trail2(code3)
	}
	function trailCharRefStart(code3) {
		return asciiAlpha(code3) ? trailCharRefInside(code3) : nok(code3)
	}
	function trailCharRefInside(code3) {
		if (code3 === 59) {
			effects.consume(code3)
			return trail2
		}
		if (asciiAlpha(code3)) {
			effects.consume(code3)
			return trailCharRefInside
		}
		return nok(code3)
	}
}
function tokenizeEmailDomainDotTrail(effects, ok3, nok) {
	return start
	function start(code3) {
		effects.consume(code3)
		return after
	}
	function after(code3) {
		return asciiAlphanumeric(code3) ? nok(code3) : ok3(code3)
	}
}
function previousWww(code3) {
	return (
		code3 === null ||
		code3 === 40 ||
		code3 === 42 ||
		code3 === 95 ||
		code3 === 91 ||
		code3 === 93 ||
		code3 === 126 ||
		markdownLineEndingOrSpace(code3)
	)
}
function previousProtocol(code3) {
	return !asciiAlpha(code3)
}
function previousEmail(code3) {
	return !(code3 === 47 || gfmAtext(code3))
}
function gfmAtext(code3) {
	return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3)
}
function previousUnbalanced(events) {
	let index2 = events.length
	let result = false
	while (index2--) {
		const token = events[index2][1]
		if ((token.type === 'labelLink' || token.type === 'labelImage') && !token._balanced) {
			result = true
			break
		}
		if (token._gfmAutolinkLiteralWalkedInto) {
			result = false
			break
		}
	}
	if (events.length > 0 && !result) {
		events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true
	}
	return result
}

// ../../node_modules/.pnpm/micromark-extension-gfm-footnote@2.0.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
	tokenize: tokenizeIndent2,
	partial: true,
}
function gfmFootnote() {
	return {
		document: {
			[91]: {
				tokenize: tokenizeDefinitionStart,
				continuation: {
					tokenize: tokenizeDefinitionContinuation,
				},
				exit: gfmFootnoteDefinitionEnd,
			},
		},
		text: {
			[91]: {
				tokenize: tokenizeGfmFootnoteCall,
			},
			[93]: {
				add: 'after',
				tokenize: tokenizePotentialGfmFootnoteCall,
				resolveTo: resolveToPotentialGfmFootnoteCall,
			},
		},
	}
}
function tokenizePotentialGfmFootnoteCall(effects, ok3, nok) {
	const self2 = this
	let index2 = self2.events.length
	const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = [])
	let labelStart
	while (index2--) {
		const token = self2.events[index2][1]
		if (token.type === 'labelImage') {
			labelStart = token
			break
		}
		if (
			token.type === 'gfmFootnoteCall' ||
			token.type === 'labelLink' ||
			token.type === 'label' ||
			token.type === 'image' ||
			token.type === 'link'
		) {
			break
		}
	}
	return start
	function start(code3) {
		if (!labelStart || !labelStart._balanced) {
			return nok(code3)
		}
		const id = normalizeIdentifier(
			self2.sliceSerialize({
				start: labelStart.end,
				end: self2.now(),
			}),
		)
		if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) {
			return nok(code3)
		}
		effects.enter('gfmFootnoteCallLabelMarker')
		effects.consume(code3)
		effects.exit('gfmFootnoteCallLabelMarker')
		return ok3(code3)
	}
}
function resolveToPotentialGfmFootnoteCall(events, context) {
	let index2 = events.length
	let labelStart
	while (index2--) {
		if (events[index2][1].type === 'labelImage' && events[index2][0] === 'enter') {
			labelStart = events[index2][1]
			break
		}
	}
	events[index2 + 1][1].type = 'data'
	events[index2 + 3][1].type = 'gfmFootnoteCallLabelMarker'
	const call = {
		type: 'gfmFootnoteCall',
		start: Object.assign({}, events[index2 + 3][1].start),
		end: Object.assign({}, events[events.length - 1][1].end),
	}
	const marker = {
		type: 'gfmFootnoteCallMarker',
		start: Object.assign({}, events[index2 + 3][1].end),
		end: Object.assign({}, events[index2 + 3][1].end),
	}
	marker.end.column++
	marker.end.offset++
	marker.end._bufferIndex++
	const string3 = {
		type: 'gfmFootnoteCallString',
		start: Object.assign({}, marker.end),
		end: Object.assign({}, events[events.length - 1][1].start),
	}
	const chunk = {
		type: 'chunkString',
		contentType: 'string',
		start: Object.assign({}, string3.start),
		end: Object.assign({}, string3.end),
	}
	const replacement = [
		// Take the `labelImageMarker` (now `data`, the `!`)
		events[index2 + 1],
		events[index2 + 2],
		['enter', call, context],
		// The `[`
		events[index2 + 3],
		events[index2 + 4],
		// The `^`.
		['enter', marker, context],
		['exit', marker, context],
		// Everything in between.
		['enter', string3, context],
		['enter', chunk, context],
		['exit', chunk, context],
		['exit', string3, context],
		// The ending (`]`, properly parsed and labelled).
		events[events.length - 2],
		events[events.length - 1],
		['exit', call, context],
	]
	events.splice(index2, events.length - index2 + 1, ...replacement)
	return events
}
function tokenizeGfmFootnoteCall(effects, ok3, nok) {
	const self2 = this
	const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = [])
	let size = 0
	let data
	return start
	function start(code3) {
		effects.enter('gfmFootnoteCall')
		effects.enter('gfmFootnoteCallLabelMarker')
		effects.consume(code3)
		effects.exit('gfmFootnoteCallLabelMarker')
		return callStart
	}
	function callStart(code3) {
		if (code3 !== 94) return nok(code3)
		effects.enter('gfmFootnoteCallMarker')
		effects.consume(code3)
		effects.exit('gfmFootnoteCallMarker')
		effects.enter('gfmFootnoteCallString')
		effects.enter('chunkString').contentType = 'string'
		return callData
	}
	function callData(code3) {
		if (
			// Too long.
			size > 999 || // Closing brace with nothing.
			(code3 === 93 && !data) || // Space or tab is not supported by GFM for some reason.
			// `\n` and `[` not being supported makes sense.
			code3 === null ||
			code3 === 91 ||
			markdownLineEndingOrSpace(code3)
		) {
			return nok(code3)
		}
		if (code3 === 93) {
			effects.exit('chunkString')
			const token = effects.exit('gfmFootnoteCallString')
			if (!defined.includes(normalizeIdentifier(self2.sliceSerialize(token)))) {
				return nok(code3)
			}
			effects.enter('gfmFootnoteCallLabelMarker')
			effects.consume(code3)
			effects.exit('gfmFootnoteCallLabelMarker')
			effects.exit('gfmFootnoteCall')
			return ok3
		}
		if (!markdownLineEndingOrSpace(code3)) {
			data = true
		}
		size++
		effects.consume(code3)
		return code3 === 92 ? callEscape : callData
	}
	function callEscape(code3) {
		if (code3 === 91 || code3 === 92 || code3 === 93) {
			effects.consume(code3)
			size++
			return callData
		}
		return callData(code3)
	}
}
function tokenizeDefinitionStart(effects, ok3, nok) {
	const self2 = this
	const defined = self2.parser.gfmFootnotes || (self2.parser.gfmFootnotes = [])
	let identifier
	let size = 0
	let data
	return start
	function start(code3) {
		effects.enter('gfmFootnoteDefinition')._container = true
		effects.enter('gfmFootnoteDefinitionLabel')
		effects.enter('gfmFootnoteDefinitionLabelMarker')
		effects.consume(code3)
		effects.exit('gfmFootnoteDefinitionLabelMarker')
		return labelAtMarker
	}
	function labelAtMarker(code3) {
		if (code3 === 94) {
			effects.enter('gfmFootnoteDefinitionMarker')
			effects.consume(code3)
			effects.exit('gfmFootnoteDefinitionMarker')
			effects.enter('gfmFootnoteDefinitionLabelString')
			effects.enter('chunkString').contentType = 'string'
			return labelInside
		}
		return nok(code3)
	}
	function labelInside(code3) {
		if (
			// Too long.
			size > 999 || // Closing brace with nothing.
			(code3 === 93 && !data) || // Space or tab is not supported by GFM for some reason.
			// `\n` and `[` not being supported makes sense.
			code3 === null ||
			code3 === 91 ||
			markdownLineEndingOrSpace(code3)
		) {
			return nok(code3)
		}
		if (code3 === 93) {
			effects.exit('chunkString')
			const token = effects.exit('gfmFootnoteDefinitionLabelString')
			identifier = normalizeIdentifier(self2.sliceSerialize(token))
			effects.enter('gfmFootnoteDefinitionLabelMarker')
			effects.consume(code3)
			effects.exit('gfmFootnoteDefinitionLabelMarker')
			effects.exit('gfmFootnoteDefinitionLabel')
			return labelAfter
		}
		if (!markdownLineEndingOrSpace(code3)) {
			data = true
		}
		size++
		effects.consume(code3)
		return code3 === 92 ? labelEscape : labelInside
	}
	function labelEscape(code3) {
		if (code3 === 91 || code3 === 92 || code3 === 93) {
			effects.consume(code3)
			size++
			return labelInside
		}
		return labelInside(code3)
	}
	function labelAfter(code3) {
		if (code3 === 58) {
			effects.enter('definitionMarker')
			effects.consume(code3)
			effects.exit('definitionMarker')
			if (!defined.includes(identifier)) {
				defined.push(identifier)
			}
			return factorySpace(effects, whitespaceAfter, 'gfmFootnoteDefinitionWhitespace')
		}
		return nok(code3)
	}
	function whitespaceAfter(code3) {
		return ok3(code3)
	}
}
function tokenizeDefinitionContinuation(effects, ok3, nok) {
	return effects.check(blankLine, ok3, effects.attempt(indent, ok3, nok))
}
function gfmFootnoteDefinitionEnd(effects) {
	effects.exit('gfmFootnoteDefinition')
}
function tokenizeIndent2(effects, ok3, nok) {
	const self2 = this
	return factorySpace(effects, afterPrefix, 'gfmFootnoteDefinitionIndent', 4 + 1)
	function afterPrefix(code3) {
		const tail = self2.events[self2.events.length - 1]
		return tail &&
			tail[1].type === 'gfmFootnoteDefinitionIndent' &&
			tail[2].sliceSerialize(tail[1], true).length === 4
			? ok3(code3)
			: nok(code3)
	}
}

// ../../node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.0.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options) {
	const options_ = options || {}
	let single = options_.singleTilde
	const tokenizer = {
		tokenize: tokenizeStrikethrough,
		resolveAll: resolveAllStrikethrough,
	}
	if (single === null || single === void 0) {
		single = true
	}
	return {
		text: {
			[126]: tokenizer,
		},
		insideSpan: {
			null: [tokenizer],
		},
		attentionMarkers: {
			null: [126],
		},
	}
	function resolveAllStrikethrough(events, context) {
		let index2 = -1
		while (++index2 < events.length) {
			if (
				events[index2][0] === 'enter' &&
				events[index2][1].type === 'strikethroughSequenceTemporary' &&
				events[index2][1]._close
			) {
				let open = index2
				while (open--) {
					if (
						events[open][0] === 'exit' &&
						events[open][1].type === 'strikethroughSequenceTemporary' &&
						events[open][1]._open && // If the sizes are the same:
						events[index2][1].end.offset - events[index2][1].start.offset ===
							events[open][1].end.offset - events[open][1].start.offset
					) {
						events[index2][1].type = 'strikethroughSequence'
						events[open][1].type = 'strikethroughSequence'
						const strikethrough = {
							type: 'strikethrough',
							start: Object.assign({}, events[open][1].start),
							end: Object.assign({}, events[index2][1].end),
						}
						const text5 = {
							type: 'strikethroughText',
							start: Object.assign({}, events[open][1].end),
							end: Object.assign({}, events[index2][1].start),
						}
						const nextEvents = [
							['enter', strikethrough, context],
							['enter', events[open][1], context],
							['exit', events[open][1], context],
							['enter', text5, context],
						]
						const insideSpan2 = context.parser.constructs.insideSpan.null
						if (insideSpan2) {
							splice(
								nextEvents,
								nextEvents.length,
								0,
								resolveAll(insideSpan2, events.slice(open + 1, index2), context),
							)
						}
						splice(nextEvents, nextEvents.length, 0, [
							['exit', text5, context],
							['enter', events[index2][1], context],
							['exit', events[index2][1], context],
							['exit', strikethrough, context],
						])
						splice(events, open - 1, index2 - open + 3, nextEvents)
						index2 = open + nextEvents.length - 2
						break
					}
				}
			}
		}
		index2 = -1
		while (++index2 < events.length) {
			if (events[index2][1].type === 'strikethroughSequenceTemporary') {
				events[index2][1].type = 'data'
			}
		}
		return events
	}
	function tokenizeStrikethrough(effects, ok3, nok) {
		const previous3 = this.previous
		const events = this.events
		let size = 0
		return start
		function start(code3) {
			if (previous3 === 126 && events[events.length - 1][1].type !== 'characterEscape') {
				return nok(code3)
			}
			effects.enter('strikethroughSequenceTemporary')
			return more(code3)
		}
		function more(code3) {
			const before = classifyCharacter(previous3)
			if (code3 === 126) {
				if (size > 1) return nok(code3)
				effects.consume(code3)
				size++
				return more
			}
			if (size < 2 && !single) return nok(code3)
			const token = effects.exit('strikethroughSequenceTemporary')
			const after = classifyCharacter(code3)
			token._open = !after || (after === 2 && Boolean(before))
			token._close = !before || (before === 2 && Boolean(after))
			return ok3(code3)
		}
	}
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@2.0.0/node_modules/micromark-extension-gfm-table/lib/edit-map.js
var EditMap = class {
	/**
	 * Create a new edit map.
	 */
	constructor() {
		this.map = []
	}
	/**
	 * Create an edit: a remove and/or add at a certain place.
	 *
	 * @param {number} index
	 * @param {number} remove
	 * @param {Array<Event>} add
	 * @returns {undefined}
	 */
	add(index2, remove, add) {
		addImpl(this, index2, remove, add)
	}
	// To do: add this when moving to `micromark`.
	// /**
	//  * Create an edit: but insert `add` before existing additions.
	//  *
	//  * @param {number} index
	//  * @param {number} remove
	//  * @param {Array<Event>} add
	//  * @returns {undefined}
	//  */
	// addBefore(index, remove, add) {
	//   addImpl(this, index, remove, add, true)
	// }
	/**
	 * Done, change the events.
	 *
	 * @param {Array<Event>} events
	 * @returns {undefined}
	 */
	consume(events) {
		this.map.sort(function (a, b) {
			return a[0] - b[0]
		})
		if (this.map.length === 0) {
			return
		}
		let index2 = this.map.length
		const vecs = []
		while (index2 > 0) {
			index2 -= 1
			vecs.push(events.slice(this.map[index2][0] + this.map[index2][1]), this.map[index2][2])
			events.length = this.map[index2][0]
		}
		vecs.push([...events])
		events.length = 0
		let slice = vecs.pop()
		while (slice) {
			events.push(...slice)
			slice = vecs.pop()
		}
		this.map.length = 0
	}
}
function addImpl(editMap, at, remove, add) {
	let index2 = 0
	if (remove === 0 && add.length === 0) {
		return
	}
	while (index2 < editMap.map.length) {
		if (editMap.map[index2][0] === at) {
			editMap.map[index2][1] += remove
			editMap.map[index2][2].push(...add)
			return
		}
		index2 += 1
	}
	editMap.map.push([at, remove, add])
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@2.0.0/node_modules/micromark-extension-gfm-table/lib/infer.js
function gfmTableAlign(events, index2) {
	let inDelimiterRow = false
	const align2 = []
	while (index2 < events.length) {
		const event = events[index2]
		if (inDelimiterRow) {
			if (event[0] === 'enter') {
				if (event[1].type === 'tableContent') {
					align2.push(events[index2 + 1][1].type === 'tableDelimiterMarker' ? 'left' : 'none')
				}
			} else if (event[1].type === 'tableContent') {
				if (events[index2 - 1][1].type === 'tableDelimiterMarker') {
					const alignIndex = align2.length - 1
					align2[alignIndex] = align2[alignIndex] === 'left' ? 'center' : 'right'
				}
			} else if (event[1].type === 'tableDelimiterRow') {
				break
			}
		} else if (event[0] === 'enter' && event[1].type === 'tableDelimiterRow') {
			inDelimiterRow = true
		}
		index2 += 1
	}
	return align2
}

// ../../node_modules/.pnpm/micromark-extension-gfm-table@2.0.0/node_modules/micromark-extension-gfm-table/lib/syntax.js
function gfmTable() {
	return {
		flow: {
			null: {
				tokenize: tokenizeTable,
				resolveAll: resolveTable,
			},
		},
	}
}
function tokenizeTable(effects, ok3, nok) {
	const self2 = this
	let size = 0
	let sizeB = 0
	let seen
	return start
	function start(code3) {
		let index2 = self2.events.length - 1
		while (index2 > -1) {
			const type = self2.events[index2][1].type
			if (
				type === 'lineEnding' || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
				type === 'linePrefix'
			)
				index2--
			else break
		}
		const tail = index2 > -1 ? self2.events[index2][1].type : null
		const next = tail === 'tableHead' || tail === 'tableRow' ? bodyRowStart : headRowBefore
		if (next === bodyRowStart && self2.parser.lazy[self2.now().line]) {
			return nok(code3)
		}
		return next(code3)
	}
	function headRowBefore(code3) {
		effects.enter('tableHead')
		effects.enter('tableRow')
		return headRowStart(code3)
	}
	function headRowStart(code3) {
		if (code3 === 124) {
			return headRowBreak(code3)
		}
		seen = true
		sizeB += 1
		return headRowBreak(code3)
	}
	function headRowBreak(code3) {
		if (code3 === null) {
			return nok(code3)
		}
		if (markdownLineEnding(code3)) {
			if (sizeB > 1) {
				sizeB = 0
				self2.interrupt = true
				effects.exit('tableRow')
				effects.enter('lineEnding')
				effects.consume(code3)
				effects.exit('lineEnding')
				return headDelimiterStart
			}
			return nok(code3)
		}
		if (markdownSpace(code3)) {
			return factorySpace(effects, headRowBreak, 'whitespace')(code3)
		}
		sizeB += 1
		if (seen) {
			seen = false
			size += 1
		}
		if (code3 === 124) {
			effects.enter('tableCellDivider')
			effects.consume(code3)
			effects.exit('tableCellDivider')
			seen = true
			return headRowBreak
		}
		effects.enter('data')
		return headRowData(code3)
	}
	function headRowData(code3) {
		if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
			effects.exit('data')
			return headRowBreak(code3)
		}
		effects.consume(code3)
		return code3 === 92 ? headRowEscape : headRowData
	}
	function headRowEscape(code3) {
		if (code3 === 92 || code3 === 124) {
			effects.consume(code3)
			return headRowData
		}
		return headRowData(code3)
	}
	function headDelimiterStart(code3) {
		self2.interrupt = false
		if (self2.parser.lazy[self2.now().line]) {
			return nok(code3)
		}
		effects.enter('tableDelimiterRow')
		seen = false
		if (markdownSpace(code3)) {
			return factorySpace(
				effects,
				headDelimiterBefore,
				'linePrefix',
				self2.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
			)(code3)
		}
		return headDelimiterBefore(code3)
	}
	function headDelimiterBefore(code3) {
		if (code3 === 45 || code3 === 58) {
			return headDelimiterValueBefore(code3)
		}
		if (code3 === 124) {
			seen = true
			effects.enter('tableCellDivider')
			effects.consume(code3)
			effects.exit('tableCellDivider')
			return headDelimiterCellBefore
		}
		return headDelimiterNok(code3)
	}
	function headDelimiterCellBefore(code3) {
		if (markdownSpace(code3)) {
			return factorySpace(effects, headDelimiterValueBefore, 'whitespace')(code3)
		}
		return headDelimiterValueBefore(code3)
	}
	function headDelimiterValueBefore(code3) {
		if (code3 === 58) {
			sizeB += 1
			seen = true
			effects.enter('tableDelimiterMarker')
			effects.consume(code3)
			effects.exit('tableDelimiterMarker')
			return headDelimiterLeftAlignmentAfter
		}
		if (code3 === 45) {
			sizeB += 1
			return headDelimiterLeftAlignmentAfter(code3)
		}
		if (code3 === null || markdownLineEnding(code3)) {
			return headDelimiterCellAfter(code3)
		}
		return headDelimiterNok(code3)
	}
	function headDelimiterLeftAlignmentAfter(code3) {
		if (code3 === 45) {
			effects.enter('tableDelimiterFiller')
			return headDelimiterFiller(code3)
		}
		return headDelimiterNok(code3)
	}
	function headDelimiterFiller(code3) {
		if (code3 === 45) {
			effects.consume(code3)
			return headDelimiterFiller
		}
		if (code3 === 58) {
			seen = true
			effects.exit('tableDelimiterFiller')
			effects.enter('tableDelimiterMarker')
			effects.consume(code3)
			effects.exit('tableDelimiterMarker')
			return headDelimiterRightAlignmentAfter
		}
		effects.exit('tableDelimiterFiller')
		return headDelimiterRightAlignmentAfter(code3)
	}
	function headDelimiterRightAlignmentAfter(code3) {
		if (markdownSpace(code3)) {
			return factorySpace(effects, headDelimiterCellAfter, 'whitespace')(code3)
		}
		return headDelimiterCellAfter(code3)
	}
	function headDelimiterCellAfter(code3) {
		if (code3 === 124) {
			return headDelimiterBefore(code3)
		}
		if (code3 === null || markdownLineEnding(code3)) {
			if (!seen || size !== sizeB) {
				return headDelimiterNok(code3)
			}
			effects.exit('tableDelimiterRow')
			effects.exit('tableHead')
			return ok3(code3)
		}
		return headDelimiterNok(code3)
	}
	function headDelimiterNok(code3) {
		return nok(code3)
	}
	function bodyRowStart(code3) {
		effects.enter('tableRow')
		return bodyRowBreak(code3)
	}
	function bodyRowBreak(code3) {
		if (code3 === 124) {
			effects.enter('tableCellDivider')
			effects.consume(code3)
			effects.exit('tableCellDivider')
			return bodyRowBreak
		}
		if (code3 === null || markdownLineEnding(code3)) {
			effects.exit('tableRow')
			return ok3(code3)
		}
		if (markdownSpace(code3)) {
			return factorySpace(effects, bodyRowBreak, 'whitespace')(code3)
		}
		effects.enter('data')
		return bodyRowData(code3)
	}
	function bodyRowData(code3) {
		if (code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3)) {
			effects.exit('data')
			return bodyRowBreak(code3)
		}
		effects.consume(code3)
		return code3 === 92 ? bodyRowEscape : bodyRowData
	}
	function bodyRowEscape(code3) {
		if (code3 === 92 || code3 === 124) {
			effects.consume(code3)
			return bodyRowData
		}
		return bodyRowData(code3)
	}
}
function resolveTable(events, context) {
	let index2 = -1
	let inFirstCellAwaitingPipe = true
	let rowKind = 0
	let lastCell = [0, 0, 0, 0]
	let cell = [0, 0, 0, 0]
	let afterHeadAwaitingFirstBodyRow = false
	let lastTableEnd = 0
	let currentTable
	let currentBody
	let currentCell
	const map5 = new EditMap()
	while (++index2 < events.length) {
		const event = events[index2]
		const token = event[1]
		if (event[0] === 'enter') {
			if (token.type === 'tableHead') {
				afterHeadAwaitingFirstBodyRow = false
				if (lastTableEnd !== 0) {
					flushTableEnd(map5, context, lastTableEnd, currentTable, currentBody)
					currentBody = void 0
					lastTableEnd = 0
				}
				currentTable = {
					type: 'table',
					start: Object.assign({}, token.start),
					// Note: correct end is set later.
					end: Object.assign({}, token.end),
				}
				map5.add(index2, 0, [['enter', currentTable, context]])
			} else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
				inFirstCellAwaitingPipe = true
				currentCell = void 0
				lastCell = [0, 0, 0, 0]
				cell = [0, index2 + 1, 0, 0]
				if (afterHeadAwaitingFirstBodyRow) {
					afterHeadAwaitingFirstBodyRow = false
					currentBody = {
						type: 'tableBody',
						start: Object.assign({}, token.start),
						// Note: correct end is set later.
						end: Object.assign({}, token.end),
					}
					map5.add(index2, 0, [['enter', currentBody, context]])
				}
				rowKind = token.type === 'tableDelimiterRow' ? 2 : currentBody ? 3 : 1
			} else if (
				rowKind &&
				(token.type === 'data' ||
					token.type === 'tableDelimiterMarker' ||
					token.type === 'tableDelimiterFiller')
			) {
				inFirstCellAwaitingPipe = false
				if (cell[2] === 0) {
					if (lastCell[1] !== 0) {
						cell[0] = cell[1]
						currentCell = flushCell(map5, context, lastCell, rowKind, void 0, currentCell)
						lastCell = [0, 0, 0, 0]
					}
					cell[2] = index2
				}
			} else if (token.type === 'tableCellDivider') {
				if (inFirstCellAwaitingPipe) {
					inFirstCellAwaitingPipe = false
				} else {
					if (lastCell[1] !== 0) {
						cell[0] = cell[1]
						currentCell = flushCell(map5, context, lastCell, rowKind, void 0, currentCell)
					}
					lastCell = cell
					cell = [lastCell[1], index2, 0, 0]
				}
			}
		} else if (token.type === 'tableHead') {
			afterHeadAwaitingFirstBodyRow = true
			lastTableEnd = index2
		} else if (token.type === 'tableRow' || token.type === 'tableDelimiterRow') {
			lastTableEnd = index2
			if (lastCell[1] !== 0) {
				cell[0] = cell[1]
				currentCell = flushCell(map5, context, lastCell, rowKind, index2, currentCell)
			} else if (cell[1] !== 0) {
				currentCell = flushCell(map5, context, cell, rowKind, index2, currentCell)
			}
			rowKind = 0
		} else if (
			rowKind &&
			(token.type === 'data' ||
				token.type === 'tableDelimiterMarker' ||
				token.type === 'tableDelimiterFiller')
		) {
			cell[3] = index2
		}
	}
	if (lastTableEnd !== 0) {
		flushTableEnd(map5, context, lastTableEnd, currentTable, currentBody)
	}
	map5.consume(context.events)
	index2 = -1
	while (++index2 < context.events.length) {
		const event = context.events[index2]
		if (event[0] === 'enter' && event[1].type === 'table') {
			event[1]._align = gfmTableAlign(context.events, index2)
		}
	}
	return events
}
function flushCell(map5, context, range, rowKind, rowEnd, previousCell) {
	const groupName = rowKind === 1 ? 'tableHeader' : rowKind === 2 ? 'tableDelimiter' : 'tableData'
	const valueName = 'tableContent'
	if (range[0] !== 0) {
		previousCell.end = Object.assign({}, getPoint(context.events, range[0]))
		map5.add(range[0], 0, [['exit', previousCell, context]])
	}
	const now = getPoint(context.events, range[1])
	previousCell = {
		type: groupName,
		start: Object.assign({}, now),
		// Note: correct end is set later.
		end: Object.assign({}, now),
	}
	map5.add(range[1], 0, [['enter', previousCell, context]])
	if (range[2] !== 0) {
		const relatedStart = getPoint(context.events, range[2])
		const relatedEnd = getPoint(context.events, range[3])
		const valueToken = {
			type: valueName,
			start: Object.assign({}, relatedStart),
			end: Object.assign({}, relatedEnd),
		}
		map5.add(range[2], 0, [['enter', valueToken, context]])
		if (rowKind !== 2) {
			const start = context.events[range[2]]
			const end = context.events[range[3]]
			start[1].end = Object.assign({}, end[1].end)
			start[1].type = 'chunkText'
			start[1].contentType = 'text'
			if (range[3] > range[2] + 1) {
				const a = range[2] + 1
				const b = range[3] - range[2] - 1
				map5.add(a, b, [])
			}
		}
		map5.add(range[3] + 1, 0, [['exit', valueToken, context]])
	}
	if (rowEnd !== void 0) {
		previousCell.end = Object.assign({}, getPoint(context.events, rowEnd))
		map5.add(rowEnd, 0, [['exit', previousCell, context]])
		previousCell = void 0
	}
	return previousCell
}
function flushTableEnd(map5, context, index2, table, tableBody) {
	const exits = []
	const related = getPoint(context.events, index2)
	if (tableBody) {
		tableBody.end = Object.assign({}, related)
		exits.push(['exit', tableBody, context])
	}
	table.end = Object.assign({}, related)
	exits.push(['exit', table, context])
	map5.add(index2 + 1, 0, exits)
}
function getPoint(events, index2) {
	const event = events[index2]
	const side = event[0] === 'enter' ? 'start' : 'end'
	return event[1][side]
}

// ../../node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.0.1/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var tasklistCheck = {
	tokenize: tokenizeTasklistCheck,
}
function gfmTaskListItem() {
	return {
		text: {
			[91]: tasklistCheck,
		},
	}
}
function tokenizeTasklistCheck(effects, ok3, nok) {
	const self2 = this
	return open
	function open(code3) {
		if (
			// Exit if there’s stuff before.
			self2.previous !== null || // Exit if not in the first content that is the first child of a list
			// item.
			!self2._gfmTasklistFirstContentOfListItem
		) {
			return nok(code3)
		}
		effects.enter('taskListCheck')
		effects.enter('taskListCheckMarker')
		effects.consume(code3)
		effects.exit('taskListCheckMarker')
		return inside
	}
	function inside(code3) {
		if (markdownLineEndingOrSpace(code3)) {
			effects.enter('taskListCheckValueUnchecked')
			effects.consume(code3)
			effects.exit('taskListCheckValueUnchecked')
			return close
		}
		if (code3 === 88 || code3 === 120) {
			effects.enter('taskListCheckValueChecked')
			effects.consume(code3)
			effects.exit('taskListCheckValueChecked')
			return close
		}
		return nok(code3)
	}
	function close(code3) {
		if (code3 === 93) {
			effects.enter('taskListCheckMarker')
			effects.consume(code3)
			effects.exit('taskListCheckMarker')
			effects.exit('taskListCheck')
			return after
		}
		return nok(code3)
	}
	function after(code3) {
		if (markdownLineEnding(code3)) {
			return ok3(code3)
		}
		if (markdownSpace(code3)) {
			return effects.check(
				{
					tokenize: spaceThenNonSpace,
				},
				ok3,
				nok,
			)(code3)
		}
		return nok(code3)
	}
}
function spaceThenNonSpace(effects, ok3, nok) {
	return factorySpace(effects, after, 'whitespace')
	function after(code3) {
		return code3 === null ? nok(code3) : ok3(code3)
	}
}

// ../../node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
function gfm(options) {
	return combineExtensions([
		gfmAutolinkLiteral(),
		gfmFootnote(),
		gfmStrikethrough(options),
		gfmTable(),
		gfmTaskListItem(),
	])
}

// ../../node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/lib/index.js
var emptyOptions2 = {}
function remarkGfm(options) {
	const self2 =
		/** @type {Processor} */
		this
	const settings = options || emptyOptions2
	const data = self2.data()
	const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = [])
	const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])
	const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = [])
	micromarkExtensions.push(gfm(settings))
	fromMarkdownExtensions.push(gfmFromMarkdown())
	toMarkdownExtensions.push(gfmToMarkdown(settings))
}

// src/lib/expand.ts
async function expandString(markdown, options) {
	const ast = remark().use(remarkGfm).parse(markdown)
	const { expandedAst, report } = await expandAst(ast, options)
	return {
		expandedString: remark().use(remarkGfm).stringify(expandedAst),
		report,
	}
}
async function expandAst(ast, options) {
	const { expansionRules, keywordPrefix = '', meta = false } = options
	const newContent = []
	visit(ast, 'html', (node2, index2, parent) => {
		if (parent !== void 0 && index2 !== void 0) {
			const result = parseCommentText(node2.value)
			if (result === void 0) return CONTINUE
			const { args, keyword } = result
			const matchingRule = Object.values(expansionRules).find(
				(rule) => `${keywordPrefix}${rule.keyword}` === keyword,
			)
			if (matchingRule === void 0) return CONTINUE
			const closingTagIndex = getClosingTagIndex(ast, index2, keyword)
			const tagsToReplace = closingTagIndex ? closingTagIndex - index2 - 1 : 0
			parent.children.splice(index2 + 1, tagsToReplace)
			if (closingTagIndex === void 0) {
				const closingNode = {
					type: 'html',
					value: `<!-- /${keyword} -->`,
				}
				parent.children.splice(index2 + 1, 0, closingNode)
			}
			newContent.push({
				applySequence: matchingRule.applicationOrder ?? 0,
				args,
				getContent: matchingRule.getContent,
				openingComment: node2,
			})
		}
	})
	newContent.sort((a, b) => a.applySequence - b.applySequence)
	for (const { args, getContent, openingComment } of newContent) {
		const newMarkdownString = await getContent(ast, args)
		const newNodes = remark().use(remarkGfm).parse(newMarkdownString).children
		const openingCommentIndex = ast.children.indexOf(openingComment)
		ast.children.splice(openingCommentIndex + 1, 0, ...newNodes)
	}
	const message = 'Warning: Content in HTML comment blocks generated by magicmark'
	ast.children = ast.children.filter(
		(node2) => !(node2.type === 'html' && node2.value.startsWith(`<!-- ${message}`)),
	)
	if (meta) {
		const date = /* @__PURE__ */ new Date().toISOString().slice(0, 10)
		const metaComment = {
			type: 'html',
			value: `<!-- ${message} on ${date}. -->`,
		}
		ast.children.unshift(metaComment)
	}
	return {
		expandedAst: ast,
		report: newContent.map(({ openingComment }) => openingComment.value),
	}
}
function getClosingTagIndex(ast, startFromIndex, keywordWithPrefix) {
	let matchingIndex
	visit(ast, 'html', (node2, index2, parent) => {
		if (parent !== void 0 && index2 !== void 0 && index2 >= startFromIndex) {
			const result = parseCommentText(node2.value)
			if (result === void 0) return CONTINUE
			if (`/${keywordWithPrefix}` === result.keyword) {
				matchingIndex = index2
				return EXIT
			}
		}
	})
	return matchingIndex
}

// src/lib/rules/readme/badges.ts
import { readPackageUp } from 'read-package-up'

// ../../node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs
var util
;(function (util2) {
	util2.assertEqual = (val) => val
	function assertIs(_arg) {}
	util2.assertIs = assertIs
	function assertNever(_x) {
		throw new Error()
	}
	util2.assertNever = assertNever
	util2.arrayToEnum = (items) => {
		const obj = {}
		for (const item of items) {
			obj[item] = item
		}
		return obj
	}
	util2.getValidEnumValues = (obj) => {
		const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== 'number')
		const filtered = {}
		for (const k of validKeys) {
			filtered[k] = obj[k]
		}
		return util2.objectValues(filtered)
	}
	util2.objectValues = (obj) => {
		return util2.objectKeys(obj).map(function (e) {
			return obj[e]
		})
	}
	util2.objectKeys =
		typeof Object.keys === 'function'
			? (obj) => Object.keys(obj)
			: (object) => {
					const keys2 = []
					for (const key in object) {
						if (Object.prototype.hasOwnProperty.call(object, key)) {
							keys2.push(key)
						}
					}
					return keys2
				}
	util2.find = (arr, checker) => {
		for (const item of arr) {
			if (checker(item)) return item
		}
		return void 0
	}
	util2.isInteger =
		typeof Number.isInteger === 'function'
			? (val) => Number.isInteger(val)
			: (val) => typeof val === 'number' && isFinite(val) && Math.floor(val) === val
	function joinValues(array, separator = ' | ') {
		return array.map((val) => (typeof val === 'string' ? `'${val}'` : val)).join(separator)
	}
	util2.joinValues = joinValues
	util2.jsonStringifyReplacer = (_, value) => {
		if (typeof value === 'bigint') {
			return value.toString()
		}
		return value
	}
})(util || (util = {}))
var objectUtil
;(function (objectUtil2) {
	objectUtil2.mergeShapes = (first, second) => {
		return {
			...first,
			...second,
			// second overwrites first
		}
	}
})(objectUtil || (objectUtil = {}))
var ZodParsedType = util.arrayToEnum([
	'string',
	'nan',
	'number',
	'integer',
	'float',
	'boolean',
	'date',
	'bigint',
	'symbol',
	'function',
	'undefined',
	'null',
	'array',
	'object',
	'unknown',
	'promise',
	'void',
	'never',
	'map',
	'set',
])
var getParsedType = (data) => {
	const t = typeof data
	switch (t) {
		case 'undefined':
			return ZodParsedType.undefined
		case 'string':
			return ZodParsedType.string
		case 'number':
			return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number
		case 'boolean':
			return ZodParsedType.boolean
		case 'function':
			return ZodParsedType.function
		case 'bigint':
			return ZodParsedType.bigint
		case 'symbol':
			return ZodParsedType.symbol
		case 'object':
			if (Array.isArray(data)) {
				return ZodParsedType.array
			}
			if (data === null) {
				return ZodParsedType.null
			}
			if (
				data.then &&
				typeof data.then === 'function' &&
				data.catch &&
				typeof data.catch === 'function'
			) {
				return ZodParsedType.promise
			}
			if (typeof Map !== 'undefined' && data instanceof Map) {
				return ZodParsedType.map
			}
			if (typeof Set !== 'undefined' && data instanceof Set) {
				return ZodParsedType.set
			}
			if (typeof Date !== 'undefined' && data instanceof Date) {
				return ZodParsedType.date
			}
			return ZodParsedType.object
		default:
			return ZodParsedType.unknown
	}
}
var ZodIssueCode = util.arrayToEnum([
	'invalid_type',
	'invalid_literal',
	'custom',
	'invalid_union',
	'invalid_union_discriminator',
	'invalid_enum_value',
	'unrecognized_keys',
	'invalid_arguments',
	'invalid_return_type',
	'invalid_date',
	'invalid_string',
	'too_small',
	'too_big',
	'invalid_intersection_types',
	'not_multiple_of',
	'not_finite',
])
var quotelessJson = (obj) => {
	const json = JSON.stringify(obj, null, 2)
	return json.replace(/"([^"]+)":/g, '$1:')
}
var ZodError = class extends Error {
	constructor(issues) {
		super()
		this.issues = []
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub]
		}
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs]
		}
		const actualProto = new.target.prototype
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(this, actualProto)
		} else {
			this.__proto__ = actualProto
		}
		this.name = 'ZodError'
		this.issues = issues
	}
	get errors() {
		return this.issues
	}
	format(_mapper) {
		const mapper =
			_mapper ||
			function (issue) {
				return issue.message
			}
		const fieldErrors = { _errors: [] }
		const processError = (error) => {
			for (const issue of error.issues) {
				if (issue.code === 'invalid_union') {
					issue.unionErrors.map(processError)
				} else if (issue.code === 'invalid_return_type') {
					processError(issue.returnTypeError)
				} else if (issue.code === 'invalid_arguments') {
					processError(issue.argumentsError)
				} else if (issue.path.length === 0) {
					fieldErrors._errors.push(mapper(issue))
				} else {
					let curr = fieldErrors
					let i = 0
					while (i < issue.path.length) {
						const el = issue.path[i]
						const terminal = i === issue.path.length - 1
						if (!terminal) {
							curr[el] = curr[el] || { _errors: [] }
						} else {
							curr[el] = curr[el] || { _errors: [] }
							curr[el]._errors.push(mapper(issue))
						}
						curr = curr[el]
						i++
					}
				}
			}
		}
		processError(this)
		return fieldErrors
	}
	toString() {
		return this.message
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2)
	}
	get isEmpty() {
		return this.issues.length === 0
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = {}
		const formErrors = []
		for (const sub of this.issues) {
			if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || []
				fieldErrors[sub.path[0]].push(mapper(sub))
			} else {
				formErrors.push(mapper(sub))
			}
		}
		return { formErrors, fieldErrors }
	}
	get formErrors() {
		return this.flatten()
	}
}
ZodError.create = (issues) => {
	const error = new ZodError(issues)
	return error
}
var errorMap = (issue, _ctx) => {
	let message
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) {
				message = 'Required'
			} else {
				message = `Expected ${issue.expected}, received ${issue.received}`
			}
			break
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`
			break
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ', ')}`
			break
		case ZodIssueCode.invalid_union:
			message = `Invalid input`
			break
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`
			break
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`
			break
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`
			break
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`
			break
		case ZodIssueCode.invalid_date:
			message = `Invalid date`
			break
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === 'object') {
				if ('includes' in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`
					if (typeof issue.validation.position === 'number') {
						message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`
					}
				} else if ('startsWith' in issue.validation) {
					message = `Invalid input: must start with "${issue.validation.startsWith}"`
				} else if ('endsWith' in issue.validation) {
					message = `Invalid input: must end with "${issue.validation.endsWith}"`
				} else {
					util.assertNever(issue.validation)
				}
			} else if (issue.validation !== 'regex') {
				message = `Invalid ${issue.validation}`
			} else {
				message = 'Invalid'
			}
			break
		case ZodIssueCode.too_small:
			if (issue.type === 'array')
				message = `Array must contain ${issue.exact ? 'exactly' : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`
			else if (issue.type === 'string')
				message = `String must contain ${issue.exact ? 'exactly' : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`
			else if (issue.type === 'number')
				message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`
			else if (issue.type === 'date')
				message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`
			else message = 'Invalid input'
			break
		case ZodIssueCode.too_big:
			if (issue.type === 'array')
				message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`
			else if (issue.type === 'string')
				message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`
			else if (issue.type === 'number')
				message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`
			else if (issue.type === 'bigint')
				message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`
			else if (issue.type === 'date')
				message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`
			else message = 'Invalid input'
			break
		case ZodIssueCode.custom:
			message = `Invalid input`
			break
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`
			break
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`
			break
		case ZodIssueCode.not_finite:
			message = 'Number must be finite'
			break
		default:
			message = _ctx.defaultError
			util.assertNever(issue)
	}
	return { message }
}
var overrideErrorMap = errorMap
function setErrorMap(map5) {
	overrideErrorMap = map5
}
function getErrorMap() {
	return overrideErrorMap
}
var makeIssue = (params) => {
	const { data, path: path8, errorMaps, issueData } = params
	const fullPath = [...path8, ...(issueData.path || [])]
	const fullIssue = {
		...issueData,
		path: fullPath,
	}
	let errorMessage = ''
	const maps = errorMaps
		.filter((m) => !!m)
		.slice()
		.reverse()
	for (const map5 of maps) {
		errorMessage = map5(fullIssue, { data, defaultError: errorMessage }).message
	}
	return {
		...issueData,
		path: fullPath,
		message: issueData.message || errorMessage,
	}
}
var EMPTY_PATH = []
function addIssueToContext(ctx, issueData) {
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			getErrorMap(),
			errorMap,
			// then global default map
		].filter((x) => !!x),
	})
	ctx.common.issues.push(issue)
}
var ParseStatus = class _ParseStatus {
	constructor() {
		this.value = 'valid'
	}
	dirty() {
		if (this.value === 'valid') this.value = 'dirty'
	}
	abort() {
		if (this.value !== 'aborted') this.value = 'aborted'
	}
	static mergeArray(status, results) {
		const arrayValue = []
		for (const s of results) {
			if (s.status === 'aborted') return INVALID
			if (s.status === 'dirty') status.dirty()
			arrayValue.push(s.value)
		}
		return { status: status.value, value: arrayValue }
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = []
		for (const pair of pairs) {
			syncPairs.push({
				key: await pair.key,
				value: await pair.value,
			})
		}
		return _ParseStatus.mergeObjectSync(status, syncPairs)
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {}
		for (const pair of pairs) {
			const { key, value } = pair
			if (key.status === 'aborted') return INVALID
			if (value.status === 'aborted') return INVALID
			if (key.status === 'dirty') status.dirty()
			if (value.status === 'dirty') status.dirty()
			if (key.value !== '__proto__' && (typeof value.value !== 'undefined' || pair.alwaysSet)) {
				finalObject[key.value] = value.value
			}
		}
		return { status: status.value, value: finalObject }
	}
}
var INVALID = Object.freeze({
	status: 'aborted',
})
var DIRTY = (value) => ({ status: 'dirty', value })
var OK = (value) => ({ status: 'valid', value })
var isAborted = (x) => x.status === 'aborted'
var isDirty = (x) => x.status === 'dirty'
var isValid = (x) => x.status === 'valid'
var isAsync = (x) => typeof Promise !== 'undefined' && x instanceof Promise
var errorUtil
;(function (errorUtil2) {
	errorUtil2.errToObj = (message) => (typeof message === 'string' ? { message } : message || {})
	errorUtil2.toString = (message) =>
		typeof message === 'string'
			? message
			: message === null || message === void 0
				? void 0
				: message.message
})(errorUtil || (errorUtil = {}))
var ParseInputLazyPath = class {
	constructor(parent, value, path8, key) {
		this._cachedPath = []
		this.parent = parent
		this.data = value
		this._path = path8
		this._key = key
	}
	get path() {
		if (!this._cachedPath.length) {
			if (this._key instanceof Array) {
				this._cachedPath.push(...this._path, ...this._key)
			} else {
				this._cachedPath.push(...this._path, this._key)
			}
		}
		return this._cachedPath
	}
}
var handleResult = (ctx, result) => {
	if (isValid(result)) {
		return { success: true, data: result.value }
	} else {
		if (!ctx.common.issues.length) {
			throw new Error('Validation failed but no issues detected.')
		}
		return {
			success: false,
			get error() {
				if (this._error) return this._error
				const error = new ZodError(ctx.common.issues)
				this._error = error
				return this._error
			},
		}
	}
}
function processCreateParams(params) {
	if (!params) return {}
	const { errorMap: errorMap2, invalid_type_error, required_error, description } = params
	if (errorMap2 && (invalid_type_error || required_error)) {
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		)
	}
	if (errorMap2) return { errorMap: errorMap2, description }
	const customMap = (iss, ctx) => {
		if (iss.code !== 'invalid_type') return { message: ctx.defaultError }
		if (typeof ctx.data === 'undefined') {
			return {
				message:
					required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError,
			}
		}
		return {
			message:
				invalid_type_error !== null && invalid_type_error !== void 0
					? invalid_type_error
					: ctx.defaultError,
		}
	}
	return { errorMap: customMap, description }
}
var ZodType = class {
	constructor(def) {
		this.spa = this.safeParseAsync
		this._def = def
		this.parse = this.parse.bind(this)
		this.safeParse = this.safeParse.bind(this)
		this.parseAsync = this.parseAsync.bind(this)
		this.safeParseAsync = this.safeParseAsync.bind(this)
		this.spa = this.spa.bind(this)
		this.refine = this.refine.bind(this)
		this.refinement = this.refinement.bind(this)
		this.superRefine = this.superRefine.bind(this)
		this.optional = this.optional.bind(this)
		this.nullable = this.nullable.bind(this)
		this.nullish = this.nullish.bind(this)
		this.array = this.array.bind(this)
		this.promise = this.promise.bind(this)
		this.or = this.or.bind(this)
		this.and = this.and.bind(this)
		this.transform = this.transform.bind(this)
		this.brand = this.brand.bind(this)
		this.default = this.default.bind(this)
		this.catch = this.catch.bind(this)
		this.describe = this.describe.bind(this)
		this.pipe = this.pipe.bind(this)
		this.readonly = this.readonly.bind(this)
		this.isNullable = this.isNullable.bind(this)
		this.isOptional = this.isOptional.bind(this)
	}
	get description() {
		return this._def.description
	}
	_getType(input) {
		return getParsedType(input.data)
	}
	_getOrReturnCtx(input, ctx) {
		return (
			ctx || {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			}
		)
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			},
		}
	}
	_parseSync(input) {
		const result = this._parse(input)
		if (isAsync(result)) {
			throw new Error('Synchronous parse encountered promise.')
		}
		return result
	}
	_parseAsync(input) {
		const result = this._parse(input)
		return Promise.resolve(result)
	}
	parse(data, params) {
		const result = this.safeParse(data, params)
		if (result.success) return result.data
		throw result.error
	}
	safeParse(data, params) {
		var _a2
		const ctx = {
			common: {
				issues: [],
				async:
					(_a2 = params === null || params === void 0 ? void 0 : params.async) !== null &&
					_a2 !== void 0
						? _a2
						: false,
				contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
			},
			path: (params === null || params === void 0 ? void 0 : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		}
		const result = this._parseSync({ data, path: ctx.path, parent: ctx })
		return handleResult(ctx, result)
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params)
		if (result.success) return result.data
		throw result.error
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
				async: true,
			},
			path: (params === null || params === void 0 ? void 0 : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		}
		const maybeAsyncResult2 = this._parse({ data, path: ctx.path, parent: ctx })
		const result = await (isAsync(maybeAsyncResult2)
			? maybeAsyncResult2
			: Promise.resolve(maybeAsyncResult2))
		return handleResult(ctx, result)
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === 'string' || typeof message === 'undefined') {
				return { message }
			} else if (typeof message === 'function') {
				return message(val)
			} else {
				return message
			}
		}
		return this._refinement((val, ctx) => {
			const result = check(val)
			const setError = () =>
				ctx.addIssue({
					code: ZodIssueCode.custom,
					...getIssueProperties(val),
				})
			if (typeof Promise !== 'undefined' && result instanceof Promise) {
				return result.then((data) => {
					if (!data) {
						setError()
						return false
					} else {
						return true
					}
				})
			}
			if (!result) {
				setError()
				return false
			} else {
				return true
			}
		})
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(
					typeof refinementData === 'function' ? refinementData(val, ctx) : refinementData,
				)
				return false
			} else {
				return true
			}
		})
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: 'refinement', refinement },
		})
	}
	superRefine(refinement) {
		return this._refinement(refinement)
	}
	optional() {
		return ZodOptional.create(this, this._def)
	}
	nullable() {
		return ZodNullable.create(this, this._def)
	}
	nullish() {
		return this.nullable().optional()
	}
	array() {
		return ZodArray.create(this, this._def)
	}
	promise() {
		return ZodPromise.create(this, this._def)
	}
	or(option) {
		return ZodUnion.create([this, option], this._def)
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def)
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: 'transform', transform },
		})
	}
	default(def) {
		const defaultValueFunc = typeof def === 'function' ? def : () => def
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault,
		})
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def),
		})
	}
	catch(def) {
		const catchValueFunc = typeof def === 'function' ? def : () => def
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch,
		})
	}
	describe(description) {
		const This = this.constructor
		return new This({
			...this._def,
			description,
		})
	}
	pipe(target) {
		return ZodPipeline.create(this, target)
	}
	readonly() {
		return ZodReadonly.create(this)
	}
	isOptional() {
		return this.safeParse(void 0).success
	}
	isNullable() {
		return this.safeParse(null).success
	}
}
var cuidRegex = /^c[^\s-]{8,}$/i
var cuid2Regex = /^[a-z][a-z0-9]*$/
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/
var uuidRegex =
	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`
var emojiRegex
var ipv4Regex =
	/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/
var ipv6Regex =
	/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
var datetimeRegex = (args) => {
	if (args.precision) {
		if (args.offset) {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
			)
		} else {
			return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`)
		}
	} else if (args.precision === 0) {
		if (args.offset) {
			return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`)
		} else {
			return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`)
		}
	} else {
		if (args.offset) {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
			)
		} else {
			return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`)
		}
	}
}
function isValidIP(ip, version) {
	if ((version === 'v4' || !version) && ipv4Regex.test(ip)) {
		return true
	}
	if ((version === 'v6' || !version) && ipv6Regex.test(ip)) {
		return true
	}
	return false
}
var ZodString = class _ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = String(input.data)
		}
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.string) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(
				ctx2,
				{
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.string,
					received: ctx2.parsedType,
				},
				//
			)
			return INVALID
		}
		const status = new ParseStatus()
		let ctx = void 0
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				if (input.data.length < check.value) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: 'string',
						inclusive: true,
						exact: false,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'max') {
				if (input.data.length > check.value) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: 'string',
						inclusive: true,
						exact: false,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'length') {
				const tooBig = input.data.length > check.value
				const tooSmall = input.data.length < check.value
				if (tooBig || tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx)
					if (tooBig) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_big,
							maximum: check.value,
							type: 'string',
							inclusive: true,
							exact: true,
							message: check.message,
						})
					} else if (tooSmall) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_small,
							minimum: check.value,
							type: 'string',
							inclusive: true,
							exact: true,
							message: check.message,
						})
					}
					status.dirty()
				}
			} else if (check.kind === 'email') {
				if (!emailRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'email',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'emoji') {
				if (!emojiRegex) {
					emojiRegex = new RegExp(_emojiRegex, 'u')
				}
				if (!emojiRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'emoji',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'uuid') {
				if (!uuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'uuid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'cuid') {
				if (!cuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'cuid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'cuid2') {
				if (!cuid2Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'cuid2',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'ulid') {
				if (!ulidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'ulid',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'url') {
				try {
					new URL(input.data)
				} catch (_a2) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'url',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'regex') {
				check.regex.lastIndex = 0
				const testResult = check.regex.test(input.data)
				if (!testResult) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'regex',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'trim') {
				input.data = input.data.trim()
			} else if (check.kind === 'includes') {
				if (!input.data.includes(check.value, check.position)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { includes: check.value, position: check.position },
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'toLowerCase') {
				input.data = input.data.toLowerCase()
			} else if (check.kind === 'toUpperCase') {
				input.data = input.data.toUpperCase()
			} else if (check.kind === 'startsWith') {
				if (!input.data.startsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { startsWith: check.value },
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'endsWith') {
				if (!input.data.endsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { endsWith: check.value },
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'datetime') {
				const regex2 = datetimeRegex(check)
				if (!regex2.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: 'datetime',
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'ip') {
				if (!isValidIP(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						validation: 'ip',
						code: ZodIssueCode.invalid_string,
						message: check.message,
					})
					status.dirty()
				}
			} else {
				util.assertNever(check)
			}
		}
		return { status: status.value, value: input.data }
	}
	_regex(regex2, validation2, message) {
		return this.refinement((data) => regex2.test(data), {
			validation: validation2,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message),
		})
	}
	_addCheck(check) {
		return new _ZodString({
			...this._def,
			checks: [...this._def.checks, check],
		})
	}
	email(message) {
		return this._addCheck({ kind: 'email', ...errorUtil.errToObj(message) })
	}
	url(message) {
		return this._addCheck({ kind: 'url', ...errorUtil.errToObj(message) })
	}
	emoji(message) {
		return this._addCheck({ kind: 'emoji', ...errorUtil.errToObj(message) })
	}
	uuid(message) {
		return this._addCheck({ kind: 'uuid', ...errorUtil.errToObj(message) })
	}
	cuid(message) {
		return this._addCheck({ kind: 'cuid', ...errorUtil.errToObj(message) })
	}
	cuid2(message) {
		return this._addCheck({ kind: 'cuid2', ...errorUtil.errToObj(message) })
	}
	ulid(message) {
		return this._addCheck({ kind: 'ulid', ...errorUtil.errToObj(message) })
	}
	ip(options) {
		return this._addCheck({ kind: 'ip', ...errorUtil.errToObj(options) })
	}
	datetime(options) {
		var _a2
		if (typeof options === 'string') {
			return this._addCheck({
				kind: 'datetime',
				precision: null,
				offset: false,
				message: options,
			})
		}
		return this._addCheck({
			kind: 'datetime',
			precision:
				typeof (options === null || options === void 0 ? void 0 : options.precision) === 'undefined'
					? null
					: options === null || options === void 0
						? void 0
						: options.precision,
			offset:
				(_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null &&
				_a2 !== void 0
					? _a2
					: false,
			...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
		})
	}
	regex(regex2, message) {
		return this._addCheck({
			kind: 'regex',
			regex: regex2,
			...errorUtil.errToObj(message),
		})
	}
	includes(value, options) {
		return this._addCheck({
			kind: 'includes',
			value,
			position: options === null || options === void 0 ? void 0 : options.position,
			...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
		})
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: 'startsWith',
			value,
			...errorUtil.errToObj(message),
		})
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: 'endsWith',
			value,
			...errorUtil.errToObj(message),
		})
	}
	min(minLength, message) {
		return this._addCheck({
			kind: 'min',
			value: minLength,
			...errorUtil.errToObj(message),
		})
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: 'max',
			value: maxLength,
			...errorUtil.errToObj(message),
		})
	}
	length(len, message) {
		return this._addCheck({
			kind: 'length',
			value: len,
			...errorUtil.errToObj(message),
		})
	}
	/**
	 * @deprecated Use z.string().min(1) instead.
	 * @see {@link ZodString.min}
	 */
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message))
	}
	trim() {
		return new _ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'trim' }],
		})
	}
	toLowerCase() {
		return new _ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'toLowerCase' }],
		})
	}
	toUpperCase() {
		return new _ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: 'toUpperCase' }],
		})
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === 'datetime')
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === 'email')
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === 'url')
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === 'emoji')
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === 'uuid')
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === 'cuid')
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === 'cuid2')
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === 'ulid')
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === 'ip')
	}
	get minLength() {
		let min = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value
			}
		}
		return min
	}
	get maxLength() {
		let max = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value
			}
		}
		return max
	}
}
ZodString.create = (params) => {
	var _a2
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce:
			(_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null &&
			_a2 !== void 0
				? _a2
				: false,
		...processCreateParams(params),
	})
}
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split('.')[1] || '').length
	const stepDecCount = (step.toString().split('.')[1] || '').length
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount
	const valInt = parseInt(val.toFixed(decCount).replace('.', ''))
	const stepInt = parseInt(step.toFixed(decCount).replace('.', ''))
	return (valInt % stepInt) / Math.pow(10, decCount)
}
var ZodNumber = class _ZodNumber extends ZodType {
	constructor() {
		super(...arguments)
		this.min = this.gte
		this.max = this.lte
		this.step = this.multipleOf
	}
	_parse(input) {
		if (this._def.coerce) {
			input.data = Number(input.data)
		}
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.number) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx2.parsedType,
			})
			return INVALID
		}
		let ctx = void 0
		const status = new ParseStatus()
		for (const check of this._def.checks) {
			if (check.kind === 'int') {
				if (!util.isInteger(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_type,
						expected: 'integer',
						received: 'float',
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'min') {
				const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: 'number',
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'max') {
				const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: 'number',
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'multipleOf') {
				if (floatSafeRemainder(input.data, check.value) !== 0) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'finite') {
				if (!Number.isFinite(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_finite,
						message: check.message,
					})
					status.dirty()
				}
			} else {
				util.assertNever(check)
			}
		}
		return { status: status.value, value: input.data }
	}
	gte(value, message) {
		return this.setLimit('min', value, true, errorUtil.toString(message))
	}
	gt(value, message) {
		return this.setLimit('min', value, false, errorUtil.toString(message))
	}
	lte(value, message) {
		return this.setLimit('max', value, true, errorUtil.toString(message))
	}
	lt(value, message) {
		return this.setLimit('max', value, false, errorUtil.toString(message))
	}
	setLimit(kind, value, inclusive, message) {
		return new _ZodNumber({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		})
	}
	_addCheck(check) {
		return new _ZodNumber({
			...this._def,
			checks: [...this._def.checks, check],
		})
	}
	int(message) {
		return this._addCheck({
			kind: 'int',
			message: errorUtil.toString(message),
		})
	}
	positive(message) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		})
	}
	negative(message) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		})
	}
	nonpositive(message) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		})
	}
	nonnegative(message) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		})
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: 'multipleOf',
			value,
			message: errorUtil.toString(message),
		})
	}
	finite(message) {
		return this._addCheck({
			kind: 'finite',
			message: errorUtil.toString(message),
		})
	}
	safe(message) {
		return this._addCheck({
			kind: 'min',
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message),
		})._addCheck({
			kind: 'max',
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message),
		})
	}
	get minValue() {
		let min = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value
			}
		}
		return min
	}
	get maxValue() {
		let max = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value
			}
		}
		return max
	}
	get isInt() {
		return !!this._def.checks.find(
			(ch) => ch.kind === 'int' || (ch.kind === 'multipleOf' && util.isInteger(ch.value)),
		)
	}
	get isFinite() {
		let max = null,
			min = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'finite' || ch.kind === 'int' || ch.kind === 'multipleOf') {
				return true
			} else if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value
			} else if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value
			}
		}
		return Number.isFinite(min) && Number.isFinite(max)
	}
}
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
		...processCreateParams(params),
	})
}
var ZodBigInt = class _ZodBigInt extends ZodType {
	constructor() {
		super(...arguments)
		this.min = this.gte
		this.max = this.lte
	}
	_parse(input) {
		if (this._def.coerce) {
			input.data = BigInt(input.data)
		}
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.bigint) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.bigint,
				received: ctx2.parsedType,
			})
			return INVALID
		}
		let ctx = void 0
		const status = new ParseStatus()
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						type: 'bigint',
						minimum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'max') {
				const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						type: 'bigint',
						maximum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					})
					status.dirty()
				}
			} else if (check.kind === 'multipleOf') {
				if (input.data % check.value !== BigInt(0)) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					})
					status.dirty()
				}
			} else {
				util.assertNever(check)
			}
		}
		return { status: status.value, value: input.data }
	}
	gte(value, message) {
		return this.setLimit('min', value, true, errorUtil.toString(message))
	}
	gt(value, message) {
		return this.setLimit('min', value, false, errorUtil.toString(message))
	}
	lte(value, message) {
		return this.setLimit('max', value, true, errorUtil.toString(message))
	}
	lt(value, message) {
		return this.setLimit('max', value, false, errorUtil.toString(message))
	}
	setLimit(kind, value, inclusive, message) {
		return new _ZodBigInt({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		})
	}
	_addCheck(check) {
		return new _ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check],
		})
	}
	positive(message) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		})
	}
	negative(message) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		})
	}
	nonpositive(message) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		})
	}
	nonnegative(message) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		})
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: 'multipleOf',
			value,
			message: errorUtil.toString(message),
		})
	}
	get minValue() {
		let min = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value
			}
		}
		return min
	}
	get maxValue() {
		let max = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value
			}
		}
		return max
	}
}
ZodBigInt.create = (params) => {
	var _a2
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce:
			(_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null &&
			_a2 !== void 0
				? _a2
				: false,
		...processCreateParams(params),
	})
}
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = Boolean(input.data)
		}
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return OK(input.data)
	}
}
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
		...processCreateParams(params),
	})
}
var ZodDate = class _ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = new Date(input.data)
		}
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.date) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx2.parsedType,
			})
			return INVALID
		}
		if (isNaN(input.data.getTime())) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_date,
			})
			return INVALID
		}
		const status = new ParseStatus()
		let ctx = void 0
		for (const check of this._def.checks) {
			if (check.kind === 'min') {
				if (input.data.getTime() < check.value) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						message: check.message,
						inclusive: true,
						exact: false,
						minimum: check.value,
						type: 'date',
					})
					status.dirty()
				}
			} else if (check.kind === 'max') {
				if (input.data.getTime() > check.value) {
					ctx = this._getOrReturnCtx(input, ctx)
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						message: check.message,
						inclusive: true,
						exact: false,
						maximum: check.value,
						type: 'date',
					})
					status.dirty()
				}
			} else {
				util.assertNever(check)
			}
		}
		return {
			status: status.value,
			value: new Date(input.data.getTime()),
		}
	}
	_addCheck(check) {
		return new _ZodDate({
			...this._def,
			checks: [...this._def.checks, check],
		})
	}
	min(minDate, message) {
		return this._addCheck({
			kind: 'min',
			value: minDate.getTime(),
			message: errorUtil.toString(message),
		})
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: 'max',
			value: maxDate.getTime(),
			message: errorUtil.toString(message),
		})
	}
	get minDate() {
		let min = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'min') {
				if (min === null || ch.value > min) min = ch.value
			}
		}
		return min != null ? new Date(min) : null
	}
	get maxDate() {
		let max = null
		for (const ch of this._def.checks) {
			if (ch.kind === 'max') {
				if (max === null || ch.value < max) max = ch.value
			}
		}
		return max != null ? new Date(max) : null
	}
}
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params),
	})
}
var ZodSymbol = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return OK(input.data)
	}
}
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params),
	})
}
var ZodUndefined = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return OK(input.data)
	}
}
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params),
	})
}
var ZodNull = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return OK(input.data)
	}
}
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params),
	})
}
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments)
		this._any = true
	}
	_parse(input) {
		return OK(input.data)
	}
}
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params),
	})
}
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments)
		this._unknown = true
	}
	_parse(input) {
		return OK(input.data)
	}
}
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params),
	})
}
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input)
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType,
		})
		return INVALID
	}
}
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params),
	})
}
var ZodVoid = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return OK(input.data)
	}
}
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params),
	})
}
var ZodArray = class _ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input)
		const def = this._def
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			})
			return INVALID
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value
			const tooSmall = ctx.data.length < def.exactLength.value
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: 'array',
					inclusive: true,
					exact: true,
					message: def.exactLength.message,
				})
				status.dirty()
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: 'array',
					inclusive: true,
					exact: false,
					message: def.minLength.message,
				})
				status.dirty()
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: 'array',
					inclusive: true,
					exact: false,
					message: def.maxLength.message,
				})
				status.dirty()
			}
		}
		if (ctx.common.async) {
			return Promise.all(
				[...ctx.data].map((item, i) => {
					return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i))
				}),
			).then((result2) => {
				return ParseStatus.mergeArray(status, result2)
			})
		}
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i))
		})
		return ParseStatus.mergeArray(status, result)
	}
	get element() {
		return this._def.type
	}
	min(minLength, message) {
		return new _ZodArray({
			...this._def,
			minLength: { value: minLength, message: errorUtil.toString(message) },
		})
	}
	max(maxLength, message) {
		return new _ZodArray({
			...this._def,
			maxLength: { value: maxLength, message: errorUtil.toString(message) },
		})
	}
	length(len, message) {
		return new _ZodArray({
			...this._def,
			exactLength: { value: len, message: errorUtil.toString(message) },
		})
	}
	nonempty(message) {
		return this.min(1, message)
	}
}
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params),
	})
}
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {}
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key]
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema))
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape,
		})
	} else if (schema instanceof ZodArray) {
		return new ZodArray({
			...schema._def,
			type: deepPartialify(schema.element),
		})
	} else if (schema instanceof ZodOptional) {
		return ZodOptional.create(deepPartialify(schema.unwrap()))
	} else if (schema instanceof ZodNullable) {
		return ZodNullable.create(deepPartialify(schema.unwrap()))
	} else if (schema instanceof ZodTuple) {
		return ZodTuple.create(schema.items.map((item) => deepPartialify(item)))
	} else {
		return schema
	}
}
var ZodObject = class _ZodObject extends ZodType {
	constructor() {
		super(...arguments)
		this._cached = null
		this.nonstrict = this.passthrough
		this.augment = this.extend
	}
	_getCached() {
		if (this._cached !== null) return this._cached
		const shape = this._def.shape()
		const keys2 = util.objectKeys(shape)
		return (this._cached = { shape, keys: keys2 })
	}
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.object) {
			const ctx2 = this._getOrReturnCtx(input)
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx2.parsedType,
			})
			return INVALID
		}
		const { status, ctx } = this._processInputParams(input)
		const { shape, keys: shapeKeys } = this._getCached()
		const extraKeys = []
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === 'strip')) {
			for (const key in ctx.data) {
				if (!shapeKeys.includes(key)) {
					extraKeys.push(key)
				}
			}
		}
		const pairs = []
		for (const key of shapeKeys) {
			const keyValidator = shape[key]
			const value = ctx.data[key]
			pairs.push({
				key: { status: 'valid', value: key },
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data,
			})
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys
			if (unknownKeys === 'passthrough') {
				for (const key of extraKeys) {
					pairs.push({
						key: { status: 'valid', value: key },
						value: { status: 'valid', value: ctx.data[key] },
					})
				}
			} else if (unknownKeys === 'strict') {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys,
					})
					status.dirty()
				}
			} else if (unknownKeys === 'strip');
			else {
				throw new Error(`Internal ZodObject error: invalid unknownKeys value.`)
			}
		} else {
			const catchall = this._def.catchall
			for (const key of extraKeys) {
				const value = ctx.data[key]
				pairs.push({
					key: { status: 'valid', value: key },
					value: catchall._parse(
						new ParseInputLazyPath(ctx, value, ctx.path, key),
						//, ctx.child(key), value, getParsedType(value)
					),
					alwaysSet: key in ctx.data,
				})
			}
		}
		if (ctx.common.async) {
			return Promise.resolve()
				.then(async () => {
					const syncPairs = []
					for (const pair of pairs) {
						const key = await pair.key
						syncPairs.push({
							key,
							value: await pair.value,
							alwaysSet: pair.alwaysSet,
						})
					}
					return syncPairs
				})
				.then((syncPairs) => {
					return ParseStatus.mergeObjectSync(status, syncPairs)
				})
		} else {
			return ParseStatus.mergeObjectSync(status, pairs)
		}
	}
	get shape() {
		return this._def.shape()
	}
	strict(message) {
		errorUtil.errToObj
		return new _ZodObject({
			...this._def,
			unknownKeys: 'strict',
			...(message !== void 0
				? {
						errorMap: (issue, ctx) => {
							var _a2, _b2, _c2, _d
							const defaultError =
								(_c2 =
									(_b2 = (_a2 = this._def).errorMap) === null || _b2 === void 0
										? void 0
										: _b2.call(_a2, issue, ctx).message) !== null && _c2 !== void 0
									? _c2
									: ctx.defaultError
							if (issue.code === 'unrecognized_keys')
								return {
									message:
										(_d = errorUtil.errToObj(message).message) !== null && _d !== void 0
											? _d
											: defaultError,
								}
							return {
								message: defaultError,
							}
						},
					}
				: {}),
		})
	}
	strip() {
		return new _ZodObject({
			...this._def,
			unknownKeys: 'strip',
		})
	}
	passthrough() {
		return new _ZodObject({
			...this._def,
			unknownKeys: 'passthrough',
		})
	}
	// const AugmentFactory =
	//   <Def extends ZodObjectDef>(def: Def) =>
	//   <Augmentation extends ZodRawShape>(
	//     augmentation: Augmentation
	//   ): ZodObject<
	//     extendShape<ReturnType<Def["shape"]>, Augmentation>,
	//     Def["unknownKeys"],
	//     Def["catchall"]
	//   > => {
	//     return new ZodObject({
	//       ...def,
	//       shape: () => ({
	//         ...def.shape(),
	//         ...augmentation,
	//       }),
	//     }) as any;
	//   };
	extend(augmentation) {
		return new _ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation,
			}),
		})
	}
	/**
	 * Prior to zod@1.0.12 there was a bug in the
	 * inferred type of merged objects. Please
	 * upgrade if you are experiencing issues.
	 */
	merge(merging) {
		const merged = new _ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape(),
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject,
		})
		return merged
	}
	// merge<
	//   Incoming extends AnyZodObject,
	//   Augmentation extends Incoming["shape"],
	//   NewOutput extends {
	//     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
	//       ? Augmentation[k]["_output"]
	//       : k extends keyof Output
	//       ? Output[k]
	//       : never;
	//   },
	//   NewInput extends {
	//     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
	//       ? Augmentation[k]["_input"]
	//       : k extends keyof Input
	//       ? Input[k]
	//       : never;
	//   }
	// >(
	//   merging: Incoming
	// ): ZodObject<
	//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
	//   Incoming["_def"]["unknownKeys"],
	//   Incoming["_def"]["catchall"],
	//   NewOutput,
	//   NewInput
	// > {
	//   const merged: any = new ZodObject({
	//     unknownKeys: merging._def.unknownKeys,
	//     catchall: merging._def.catchall,
	//     shape: () =>
	//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
	//     typeName: ZodFirstPartyTypeKind.ZodObject,
	//   }) as any;
	//   return merged;
	// }
	setKey(key, schema) {
		return this.augment({ [key]: schema })
	}
	// merge<Incoming extends AnyZodObject>(
	//   merging: Incoming
	// ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
	// ZodObject<
	//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
	//   Incoming["_def"]["unknownKeys"],
	//   Incoming["_def"]["catchall"]
	// > {
	//   // const mergedShape = objectUtil.mergeShapes(
	//   //   this._def.shape(),
	//   //   merging._def.shape()
	//   // );
	//   const merged: any = new ZodObject({
	//     unknownKeys: merging._def.unknownKeys,
	//     catchall: merging._def.catchall,
	//     shape: () =>
	//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
	//     typeName: ZodFirstPartyTypeKind.ZodObject,
	//   }) as any;
	//   return merged;
	// }
	catchall(index2) {
		return new _ZodObject({
			...this._def,
			catchall: index2,
		})
	}
	pick(mask) {
		const shape = {}
		util.objectKeys(mask).forEach((key) => {
			if (mask[key] && this.shape[key]) {
				shape[key] = this.shape[key]
			}
		})
		return new _ZodObject({
			...this._def,
			shape: () => shape,
		})
	}
	omit(mask) {
		const shape = {}
		util.objectKeys(this.shape).forEach((key) => {
			if (!mask[key]) {
				shape[key] = this.shape[key]
			}
		})
		return new _ZodObject({
			...this._def,
			shape: () => shape,
		})
	}
	/**
	 * @deprecated
	 */
	deepPartial() {
		return deepPartialify(this)
	}
	partial(mask) {
		const newShape = {}
		util.objectKeys(this.shape).forEach((key) => {
			const fieldSchema = this.shape[key]
			if (mask && !mask[key]) {
				newShape[key] = fieldSchema
			} else {
				newShape[key] = fieldSchema.optional()
			}
		})
		return new _ZodObject({
			...this._def,
			shape: () => newShape,
		})
	}
	required(mask) {
		const newShape = {}
		util.objectKeys(this.shape).forEach((key) => {
			if (mask && !mask[key]) {
				newShape[key] = this.shape[key]
			} else {
				const fieldSchema = this.shape[key]
				let newField = fieldSchema
				while (newField instanceof ZodOptional) {
					newField = newField._def.innerType
				}
				newShape[key] = newField
			}
		})
		return new _ZodObject({
			...this._def,
			shape: () => newShape,
		})
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape))
	}
}
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: 'strip',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	})
}
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: 'strict',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	})
}
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: 'strip',
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	})
}
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		const options = this._def.options
		function handleResults(results) {
			for (const result of results) {
				if (result.result.status === 'valid') {
					return result.result
				}
			}
			for (const result of results) {
				if (result.result.status === 'dirty') {
					ctx.common.issues.push(...result.ctx.common.issues)
					return result.result
				}
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues))
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			})
			return INVALID
		}
		if (ctx.common.async) {
			return Promise.all(
				options.map(async (option) => {
					const childCtx = {
						...ctx,
						common: {
							...ctx.common,
							issues: [],
						},
						parent: null,
					}
					return {
						result: await option._parseAsync({
							data: ctx.data,
							path: ctx.path,
							parent: childCtx,
						}),
						ctx: childCtx,
					}
				}),
			).then(handleResults)
		} else {
			let dirty = void 0
			const issues = []
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: [],
					},
					parent: null,
				}
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx,
				})
				if (result.status === 'valid') {
					return result
				} else if (result.status === 'dirty' && !dirty) {
					dirty = { result, ctx: childCtx }
				}
				if (childCtx.common.issues.length) {
					issues.push(childCtx.common.issues)
				}
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues)
				return dirty.result
			}
			const unionErrors = issues.map((issues2) => new ZodError(issues2))
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			})
			return INVALID
		}
	}
	get options() {
		return this._def.options
	}
}
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params),
	})
}
var getDiscriminator = (type) => {
	if (type instanceof ZodLazy) {
		return getDiscriminator(type.schema)
	} else if (type instanceof ZodEffects) {
		return getDiscriminator(type.innerType())
	} else if (type instanceof ZodLiteral) {
		return [type.value]
	} else if (type instanceof ZodEnum) {
		return type.options
	} else if (type instanceof ZodNativeEnum) {
		return Object.keys(type.enum)
	} else if (type instanceof ZodDefault) {
		return getDiscriminator(type._def.innerType)
	} else if (type instanceof ZodUndefined) {
		return [void 0]
	} else if (type instanceof ZodNull) {
		return [null]
	} else {
		return null
	}
}
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			})
			return INVALID
		}
		const discriminator = this.discriminator
		const discriminatorValue = ctx.data[discriminator]
		const option = this.optionsMap.get(discriminatorValue)
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator],
			})
			return INVALID
		}
		if (ctx.common.async) {
			return option._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			})
		} else {
			return option._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			})
		}
	}
	get discriminator() {
		return this._def.discriminator
	}
	get options() {
		return this._def.options
	}
	get optionsMap() {
		return this._def.optionsMap
	}
	/**
	 * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	 * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	 * have a different value for each object in the union.
	 * @param discriminator the name of the discriminator property
	 * @param types an array of object schemas
	 * @param params
	 */
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map()
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator])
			if (!discriminatorValues) {
				throw new Error(
					`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`,
				)
			}
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) {
					throw new Error(
						`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`,
					)
				}
				optionsMap.set(value, type)
			}
		}
		return new _ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params),
		})
	}
}
function mergeValues(a, b) {
	const aType = getParsedType(a)
	const bType = getParsedType(b)
	if (a === b) {
		return { valid: true, data: a }
	} else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b)
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1)
		const newObj = { ...a, ...b }
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key])
			if (!sharedValue.valid) {
				return { valid: false }
			}
			newObj[key] = sharedValue.data
		}
		return { valid: true, data: newObj }
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) {
			return { valid: false }
		}
		const newArray = []
		for (let index2 = 0; index2 < a.length; index2++) {
			const itemA = a[index2]
			const itemB = b[index2]
			const sharedValue = mergeValues(itemA, itemB)
			if (!sharedValue.valid) {
				return { valid: false }
			}
			newArray.push(sharedValue.data)
		}
		return { valid: true, data: newArray }
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
		return { valid: true, data: a }
	} else {
		return { valid: false }
	}
}
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) {
				return INVALID
			}
			const merged = mergeValues(parsedLeft.value, parsedRight.value)
			if (!merged.valid) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_intersection_types,
				})
				return INVALID
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) {
				status.dirty()
			}
			return { status: status.value, value: merged.data }
		}
		if (ctx.common.async) {
			return Promise.all([
				this._def.left._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
			]).then(([left2, right2]) => handleParsed(left2, right2))
		} else {
			return handleParsed(
				this._def.left._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
			)
		}
	}
}
ZodIntersection.create = (left2, right2, params) => {
	return new ZodIntersection({
		left: left2,
		right: right2,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params),
	})
}
var ZodTuple = class _ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			})
			return INVALID
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: 'array',
			})
			return INVALID
		}
		const rest = this._def.rest
		if (!rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: 'array',
			})
			status.dirty()
		}
		const items = [...ctx.data]
			.map((item, itemIndex) => {
				const schema = this._def.items[itemIndex] || this._def.rest
				if (!schema) return null
				return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex))
			})
			.filter((x) => !!x)
		if (ctx.common.async) {
			return Promise.all(items).then((results) => {
				return ParseStatus.mergeArray(status, results)
			})
		} else {
			return ParseStatus.mergeArray(status, items)
		}
	}
	get items() {
		return this._def.items
	}
	rest(rest) {
		return new _ZodTuple({
			...this._def,
			rest,
		})
	}
}
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) {
		throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
	}
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params),
	})
}
var ZodRecord = class _ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType
	}
	get valueSchema() {
		return this._def.valueType
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			})
			return INVALID
		}
		const pairs = []
		const keyType = this._def.keyType
		const valueType = this._def.valueType
		for (const key in ctx.data) {
			pairs.push({
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
				value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			})
		}
		if (ctx.common.async) {
			return ParseStatus.mergeObjectAsync(status, pairs)
		} else {
			return ParseStatus.mergeObjectSync(status, pairs)
		}
	}
	get element() {
		return this._def.valueType
	}
	static create(first, second, third) {
		if (second instanceof ZodType) {
			return new _ZodRecord({
				keyType: first,
				valueType: second,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(third),
			})
		}
		return new _ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second),
		})
	}
}
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType
	}
	get valueSchema() {
		return this._def.valueType
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType,
			})
			return INVALID
		}
		const keyType = this._def.keyType
		const valueType = this._def.valueType
		const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, 'key'])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, 'value'])),
			}
		})
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map()
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key
					const value = await pair.value
					if (key.status === 'aborted' || value.status === 'aborted') {
						return INVALID
					}
					if (key.status === 'dirty' || value.status === 'dirty') {
						status.dirty()
					}
					finalMap.set(key.value, value.value)
				}
				return { status: status.value, value: finalMap }
			})
		} else {
			const finalMap = /* @__PURE__ */ new Map()
			for (const pair of pairs) {
				const key = pair.key
				const value = pair.value
				if (key.status === 'aborted' || value.status === 'aborted') {
					return INVALID
				}
				if (key.status === 'dirty' || value.status === 'dirty') {
					status.dirty()
				}
				finalMap.set(key.value, value.value)
			}
			return { status: status.value, value: finalMap }
		}
	}
}
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params),
	})
}
var ZodSet = class _ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType,
			})
			return INVALID
		}
		const def = this._def
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: 'set',
					inclusive: true,
					exact: false,
					message: def.minSize.message,
				})
				status.dirty()
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: 'set',
					inclusive: true,
					exact: false,
					message: def.maxSize.message,
				})
				status.dirty()
			}
		}
		const valueType = this._def.valueType
		function finalizeSet(elements2) {
			const parsedSet = /* @__PURE__ */ new Set()
			for (const element of elements2) {
				if (element.status === 'aborted') return INVALID
				if (element.status === 'dirty') status.dirty()
				parsedSet.add(element.value)
			}
			return { status: status.value, value: parsedSet }
		}
		const elements = [...ctx.data.values()].map((item, i) =>
			valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)),
		)
		if (ctx.common.async) {
			return Promise.all(elements).then((elements2) => finalizeSet(elements2))
		} else {
			return finalizeSet(elements)
		}
	}
	min(minSize, message) {
		return new _ZodSet({
			...this._def,
			minSize: { value: minSize, message: errorUtil.toString(message) },
		})
	}
	max(maxSize, message) {
		return new _ZodSet({
			...this._def,
			maxSize: { value: maxSize, message: errorUtil.toString(message) },
		})
	}
	size(size, message) {
		return this.min(size, message).max(size, message)
	}
	nonempty(message) {
		return this.min(1, message)
	}
}
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params),
	})
}
var ZodFunction = class _ZodFunction extends ZodType {
	constructor() {
		super(...arguments)
		this.validate = this.implement
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType,
			})
			return INVALID
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap,
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error,
				},
			})
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap,
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error,
				},
			})
		}
		const params = { errorMap: ctx.common.contextualErrorMap }
		const fn = ctx.data
		if (this._def.returns instanceof ZodPromise) {
			const me = this
			return OK(async function (...args) {
				const error = new ZodError([])
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e))
					throw error
				})
				const result = await Reflect.apply(fn, this, parsedArgs)
				const parsedReturns = await me._def.returns._def.type
					.parseAsync(result, params)
					.catch((e) => {
						error.addIssue(makeReturnsIssue(result, e))
						throw error
					})
				return parsedReturns
			})
		} else {
			const me = this
			return OK(function (...args) {
				const parsedArgs = me._def.args.safeParse(args, params)
				if (!parsedArgs.success) {
					throw new ZodError([makeArgsIssue(args, parsedArgs.error)])
				}
				const result = Reflect.apply(fn, this, parsedArgs.data)
				const parsedReturns = me._def.returns.safeParse(result, params)
				if (!parsedReturns.success) {
					throw new ZodError([makeReturnsIssue(result, parsedReturns.error)])
				}
				return parsedReturns.data
			})
		}
	}
	parameters() {
		return this._def.args
	}
	returnType() {
		return this._def.returns
	}
	args(...items) {
		return new _ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create()),
		})
	}
	returns(returnType) {
		return new _ZodFunction({
			...this._def,
			returns: returnType,
		})
	}
	implement(func) {
		const validatedFunc = this.parse(func)
		return validatedFunc
	}
	strictImplement(func) {
		const validatedFunc = this.parse(func)
		return validatedFunc
	}
	static create(args, returns, params) {
		return new _ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params),
		})
	}
}
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter()
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		const lazySchema = this._def.getter()
		return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx })
	}
}
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params),
	})
}
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value,
			})
			return INVALID
		}
		return { status: 'valid', value: input.data }
	}
	get value() {
		return this._def.value
	}
}
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params),
	})
}
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params),
	})
}
var ZodEnum = class _ZodEnum extends ZodType {
	_parse(input) {
		if (typeof input.data !== 'string') {
			const ctx = this._getOrReturnCtx(input)
			const expectedValues = this._def.values
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			})
			return INVALID
		}
		if (this._def.values.indexOf(input.data) === -1) {
			const ctx = this._getOrReturnCtx(input)
			const expectedValues = this._def.values
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			})
			return INVALID
		}
		return OK(input.data)
	}
	get options() {
		return this._def.values
	}
	get enum() {
		const enumValues = {}
		for (const val of this._def.values) {
			enumValues[val] = val
		}
		return enumValues
	}
	get Values() {
		const enumValues = {}
		for (const val of this._def.values) {
			enumValues[val] = val
		}
		return enumValues
	}
	get Enum() {
		const enumValues = {}
		for (const val of this._def.values) {
			enumValues[val] = val
		}
		return enumValues
	}
	extract(values) {
		return _ZodEnum.create(values)
	}
	exclude(values) {
		return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)))
	}
}
ZodEnum.create = createZodEnum
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values)
		const ctx = this._getOrReturnCtx(input)
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues)
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			})
			return INVALID
		}
		if (nativeEnumValues.indexOf(input.data) === -1) {
			const expectedValues = util.objectValues(nativeEnumValues)
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			})
			return INVALID
		}
		return OK(input.data)
	}
	get enum() {
		return this._def.values
	}
}
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params),
	})
}
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType,
			})
			return INVALID
		}
		const promisified =
			ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)
		return OK(
			promisified.then((data) => {
				return this._def.type.parseAsync(data, {
					path: ctx.path,
					errorMap: ctx.common.contextualErrorMap,
				})
			}),
		)
	}
}
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params),
	})
}
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		const effect = this._def.effect || null
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg)
				if (arg.fatal) {
					status.abort()
				} else {
					status.dirty()
				}
			},
			get path() {
				return ctx.path
			},
		}
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx)
		if (effect.type === 'preprocess') {
			const processed = effect.transform(ctx.data, checkCtx)
			if (ctx.common.issues.length) {
				return {
					status: 'dirty',
					value: ctx.data,
				}
			}
			if (ctx.common.async) {
				return Promise.resolve(processed).then((processed2) => {
					return this._def.schema._parseAsync({
						data: processed2,
						path: ctx.path,
						parent: ctx,
					})
				})
			} else {
				return this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx,
				})
			}
		}
		if (effect.type === 'refinement') {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx)
				if (ctx.common.async) {
					return Promise.resolve(result)
				}
				if (result instanceof Promise) {
					throw new Error(
						'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
					)
				}
				return acc
			}
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				})
				if (inner.status === 'aborted') return INVALID
				if (inner.status === 'dirty') status.dirty()
				executeRefinement(inner.value)
				return { status: status.value, value: inner.value }
			} else {
				return this._def.schema
					._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
					.then((inner) => {
						if (inner.status === 'aborted') return INVALID
						if (inner.status === 'dirty') status.dirty()
						return executeRefinement(inner.value).then(() => {
							return { status: status.value, value: inner.value }
						})
					})
			}
		}
		if (effect.type === 'transform') {
			if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				})
				if (!isValid(base)) return base
				const result = effect.transform(base.value, checkCtx)
				if (result instanceof Promise) {
					throw new Error(
						`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
					)
				}
				return { status: status.value, value: result }
			} else {
				return this._def.schema
					._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
					.then((base) => {
						if (!isValid(base)) return base
						return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
							status: status.value,
							value: result,
						}))
					})
			}
		}
		util.assertNever(effect)
	}
}
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params),
	})
}
ZodEffects.createWithPreprocess = (preprocess2, schema, params) => {
	return new ZodEffects({
		schema,
		effect: { type: 'preprocess', transform: preprocess2 },
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params),
	})
}
var ZodOptional = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType === ZodParsedType.undefined) {
			return OK(void 0)
		}
		return this._def.innerType._parse(input)
	}
	unwrap() {
		return this._def.innerType
	}
}
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params),
	})
}
var ZodNullable = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType === ZodParsedType.null) {
			return OK(null)
		}
		return this._def.innerType._parse(input)
	}
	unwrap() {
		return this._def.innerType
	}
}
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params),
	})
}
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		let data = ctx.data
		if (ctx.parsedType === ZodParsedType.undefined) {
			data = this._def.defaultValue()
		}
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx,
		})
	}
	removeDefault() {
		return this._def.innerType
	}
}
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === 'function' ? params.default : () => params.default,
		...processCreateParams(params),
	})
}
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: [],
			},
		}
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: {
				...newCtx,
			},
		})
		if (isAsync(result)) {
			return result.then((result2) => {
				return {
					status: 'valid',
					value:
						result2.status === 'valid'
							? result2.value
							: this._def.catchValue({
									get error() {
										return new ZodError(newCtx.common.issues)
									},
									input: newCtx.data,
								}),
				}
			})
		} else {
			return {
				status: 'valid',
				value:
					result.status === 'valid'
						? result.value
						: this._def.catchValue({
								get error() {
									return new ZodError(newCtx.common.issues)
								},
								input: newCtx.data,
							}),
			}
		}
	}
	removeCatch() {
		return this._def.innerType
	}
}
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === 'function' ? params.catch : () => params.catch,
		...processCreateParams(params),
	})
}
var ZodNaN = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input)
		if (parsedType !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input)
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType,
			})
			return INVALID
		}
		return { status: 'valid', value: input.data }
	}
}
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params),
	})
}
var BRAND = Symbol('zod_brand')
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input)
		const data = ctx.data
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx,
		})
	}
	unwrap() {
		return this._def.type
	}
}
var ZodPipeline = class _ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input)
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				})
				if (inResult.status === 'aborted') return INVALID
				if (inResult.status === 'dirty') {
					status.dirty()
					return DIRTY(inResult.value)
				} else {
					return this._def.out._parseAsync({
						data: inResult.value,
						path: ctx.path,
						parent: ctx,
					})
				}
			}
			return handleAsync()
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			})
			if (inResult.status === 'aborted') return INVALID
			if (inResult.status === 'dirty') {
				status.dirty()
				return {
					status: 'dirty',
					value: inResult.value,
				}
			} else {
				return this._def.out._parseSync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx,
				})
			}
		}
	}
	static create(a, b) {
		return new _ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline,
		})
	}
}
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input)
		if (isValid(result)) {
			result.value = Object.freeze(result.value)
		}
		return result
	}
}
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params),
	})
}
var custom = (check, params = {}, fatal) => {
	if (check)
		return ZodAny.create().superRefine((data, ctx) => {
			var _a2, _b2
			if (!check(data)) {
				const p =
					typeof params === 'function'
						? params(data)
						: typeof params === 'string'
							? { message: params }
							: params
				const _fatal =
					(_b2 = (_a2 = p.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null &&
					_b2 !== void 0
						? _b2
						: true
				const p2 = typeof p === 'string' ? { message: p } : p
				ctx.addIssue({ code: 'custom', ...p2, fatal: _fatal })
			}
		})
	return ZodAny.create()
}
var late = {
	object: ZodObject.lazycreate,
}
var ZodFirstPartyTypeKind
;(function (ZodFirstPartyTypeKind2) {
	ZodFirstPartyTypeKind2['ZodString'] = 'ZodString'
	ZodFirstPartyTypeKind2['ZodNumber'] = 'ZodNumber'
	ZodFirstPartyTypeKind2['ZodNaN'] = 'ZodNaN'
	ZodFirstPartyTypeKind2['ZodBigInt'] = 'ZodBigInt'
	ZodFirstPartyTypeKind2['ZodBoolean'] = 'ZodBoolean'
	ZodFirstPartyTypeKind2['ZodDate'] = 'ZodDate'
	ZodFirstPartyTypeKind2['ZodSymbol'] = 'ZodSymbol'
	ZodFirstPartyTypeKind2['ZodUndefined'] = 'ZodUndefined'
	ZodFirstPartyTypeKind2['ZodNull'] = 'ZodNull'
	ZodFirstPartyTypeKind2['ZodAny'] = 'ZodAny'
	ZodFirstPartyTypeKind2['ZodUnknown'] = 'ZodUnknown'
	ZodFirstPartyTypeKind2['ZodNever'] = 'ZodNever'
	ZodFirstPartyTypeKind2['ZodVoid'] = 'ZodVoid'
	ZodFirstPartyTypeKind2['ZodArray'] = 'ZodArray'
	ZodFirstPartyTypeKind2['ZodObject'] = 'ZodObject'
	ZodFirstPartyTypeKind2['ZodUnion'] = 'ZodUnion'
	ZodFirstPartyTypeKind2['ZodDiscriminatedUnion'] = 'ZodDiscriminatedUnion'
	ZodFirstPartyTypeKind2['ZodIntersection'] = 'ZodIntersection'
	ZodFirstPartyTypeKind2['ZodTuple'] = 'ZodTuple'
	ZodFirstPartyTypeKind2['ZodRecord'] = 'ZodRecord'
	ZodFirstPartyTypeKind2['ZodMap'] = 'ZodMap'
	ZodFirstPartyTypeKind2['ZodSet'] = 'ZodSet'
	ZodFirstPartyTypeKind2['ZodFunction'] = 'ZodFunction'
	ZodFirstPartyTypeKind2['ZodLazy'] = 'ZodLazy'
	ZodFirstPartyTypeKind2['ZodLiteral'] = 'ZodLiteral'
	ZodFirstPartyTypeKind2['ZodEnum'] = 'ZodEnum'
	ZodFirstPartyTypeKind2['ZodEffects'] = 'ZodEffects'
	ZodFirstPartyTypeKind2['ZodNativeEnum'] = 'ZodNativeEnum'
	ZodFirstPartyTypeKind2['ZodOptional'] = 'ZodOptional'
	ZodFirstPartyTypeKind2['ZodNullable'] = 'ZodNullable'
	ZodFirstPartyTypeKind2['ZodDefault'] = 'ZodDefault'
	ZodFirstPartyTypeKind2['ZodCatch'] = 'ZodCatch'
	ZodFirstPartyTypeKind2['ZodPromise'] = 'ZodPromise'
	ZodFirstPartyTypeKind2['ZodBranded'] = 'ZodBranded'
	ZodFirstPartyTypeKind2['ZodPipeline'] = 'ZodPipeline'
	ZodFirstPartyTypeKind2['ZodReadonly'] = 'ZodReadonly'
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}))
var instanceOfType = (
	cls,
	params = {
		message: `Input not instance of ${cls.name}`,
	},
) => custom((data) => data instanceof cls, params)
var stringType = ZodString.create
var numberType = ZodNumber.create
var nanType = ZodNaN.create
var bigIntType = ZodBigInt.create
var booleanType = ZodBoolean.create
var dateType = ZodDate.create
var symbolType = ZodSymbol.create
var undefinedType = ZodUndefined.create
var nullType = ZodNull.create
var anyType = ZodAny.create
var unknownType = ZodUnknown.create
var neverType = ZodNever.create
var voidType = ZodVoid.create
var arrayType = ZodArray.create
var objectType = ZodObject.create
var strictObjectType = ZodObject.strictCreate
var unionType = ZodUnion.create
var discriminatedUnionType = ZodDiscriminatedUnion.create
var intersectionType = ZodIntersection.create
var tupleType = ZodTuple.create
var recordType = ZodRecord.create
var mapType = ZodMap.create
var setType = ZodSet.create
var functionType = ZodFunction.create
var lazyType = ZodLazy.create
var literalType = ZodLiteral.create
var enumType = ZodEnum.create
var nativeEnumType = ZodNativeEnum.create
var promiseType = ZodPromise.create
var effectsType = ZodEffects.create
var optionalType = ZodOptional.create
var nullableType = ZodNullable.create
var preprocessType = ZodEffects.createWithPreprocess
var pipelineType = ZodPipeline.create
var ostring = () => stringType().optional()
var onumber = () => numberType().optional()
var oboolean = () => booleanType().optional()
var coerce = {
	string: (arg) => ZodString.create({ ...arg, coerce: true }),
	number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
	boolean: (arg) =>
		ZodBoolean.create({
			...arg,
			coerce: true,
		}),
	bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
	date: (arg) => ZodDate.create({ ...arg, coerce: true }),
}
var NEVER = INVALID
var z = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	defaultErrorMap: errorMap,
	setErrorMap,
	getErrorMap,
	makeIssue,
	EMPTY_PATH,
	addIssueToContext,
	ParseStatus,
	INVALID,
	DIRTY,
	OK,
	isAborted,
	isDirty,
	isValid,
	isAsync,
	get util() {
		return util
	},
	get objectUtil() {
		return objectUtil
	},
	ZodParsedType,
	getParsedType,
	ZodType,
	ZodString,
	ZodNumber,
	ZodBigInt,
	ZodBoolean,
	ZodDate,
	ZodSymbol,
	ZodUndefined,
	ZodNull,
	ZodAny,
	ZodUnknown,
	ZodNever,
	ZodVoid,
	ZodArray,
	ZodObject,
	ZodUnion,
	ZodDiscriminatedUnion,
	ZodIntersection,
	ZodTuple,
	ZodRecord,
	ZodMap,
	ZodSet,
	ZodFunction,
	ZodLazy,
	ZodLiteral,
	ZodEnum,
	ZodNativeEnum,
	ZodPromise,
	ZodEffects,
	ZodTransformer: ZodEffects,
	ZodOptional,
	ZodNullable,
	ZodDefault,
	ZodCatch,
	ZodNaN,
	BRAND,
	ZodBranded,
	ZodPipeline,
	ZodReadonly,
	custom,
	Schema: ZodType,
	ZodSchema: ZodType,
	late,
	get ZodFirstPartyTypeKind() {
		return ZodFirstPartyTypeKind
	},
	coerce,
	any: anyType,
	array: arrayType,
	bigint: bigIntType,
	boolean: booleanType,
	date: dateType,
	discriminatedUnion: discriminatedUnionType,
	effect: effectsType,
	enum: enumType,
	function: functionType,
	instanceof: instanceOfType,
	intersection: intersectionType,
	lazy: lazyType,
	literal: literalType,
	map: mapType,
	nan: nanType,
	nativeEnum: nativeEnumType,
	never: neverType,
	null: nullType,
	nullable: nullableType,
	number: numberType,
	object: objectType,
	oboolean,
	onumber,
	optional: optionalType,
	ostring,
	pipeline: pipelineType,
	preprocess: preprocessType,
	promise: promiseType,
	record: recordType,
	set: setType,
	strictObject: strictObjectType,
	string: stringType,
	symbol: symbolType,
	transformer: effectsType,
	tuple: tupleType,
	undefined: undefinedType,
	union: unionType,
	unknown: unknownType,
	void: voidType,
	NEVER,
	ZodIssueCode,
	quotelessJson,
	ZodError,
})

// src/lib/rules/readme/badges.ts
var badges_default = {
	async getContent(_, options) {
		const validOptions = z
			.object({
				custom: z.record(
					z.object({
						image: z.string(),
						link: z.string(),
					}),
				),
			})
			.optional()
			.parse(options)
		const normalizedPackageJson = await readPackageUp()
		if (normalizedPackageJson === void 0) {
			throw new Error('Could not find package.json')
		}
		const { name } = normalizedPackageJson.packageJson
		const badges = []
		if (
			!normalizedPackageJson.packageJson.private && // eslint-disable-next-line unicorn/consistent-destructuring
			normalizedPackageJson.packageJson.publishConfig?.access === 'public'
		) {
			badges.push(
				`[![NPM Package](https://img.shields.io/npm/v/${name}.svg)](https://npmjs.com/package/${name})`,
			)
		}
		const { license } = normalizedPackageJson.packageJson
		if (license !== void 0) {
			badges.push(
				`[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`,
			)
		}
		if (validOptions?.custom !== void 0) {
			for (const [name2, { image: image2, link: link2 }] of Object.entries(validOptions.custom)) {
				badges.push(`[![${name2}](${image2})](${link2})`)
			}
		}
		return badges.join('\n')
	},
	keyword: 'badges',
	order: 2,
	required: false,
}

// src/lib/rules/readme/code.ts
import fs from 'node:fs/promises'
import path2 from 'node:path'
var code_default = {
	async getContent(_, options) {
		const validOptions = z
			.object({
				file: z.string(),
				// Aka "info string"
				language: z.string().optional(),
			})
			.parse(options)
		const lang = path2.extname(validOptions.file) ?? ''
		const exampleCode = await fs.readFile(path2.join(process.cwd(), validOptions.file), 'utf8')
		return `\`\`\`${lang}
${exampleCode}
\`\`\``
	},
	keyword: 'code',
}

// src/lib/rules/readme/contributing.ts
import { readPackageUp as readPackageUp2 } from 'read-package-up'
var contributing_default = {
	async getContent(_) {
		const normalizedPackageJson = await readPackageUp2()
		if (normalizedPackageJson === void 0) {
			throw new Error('Could not find package.json')
		}
		const issuesUrl = normalizedPackageJson.packageJson.bugs?.url
		if (issuesUrl === void 0) {
			throw new Error('Could not find issues url in package.json')
		}
		return `## Contributing
[Issues](${issuesUrl}) and pull requests are welcome.`
	},
	keyword: 'contributing',
	order: 15,
	required: true,
}

// src/lib/rules/readme/license.ts
import { readPackageUp as readPackageUp3 } from 'read-package-up'
var license_default = {
	async getContent(_) {
		const normalizedPackageJson = await readPackageUp3()
		if (normalizedPackageJson === void 0) {
			throw new Error('Could not find package.json')
		}
		const name = normalizedPackageJson.packageJson.author?.name
		const { license } = normalizedPackageJson.packageJson
		if (name === void 0) {
			throw new Error('Could not find author name in package.json')
		}
		if (license === void 0) {
			throw new Error('Could not find author name in package.json')
		}
		return `## License
[${license}](license.txt) \xA9 ${name}`
	},
	keyword: 'license',
	order: 16,
	required: true,
}

// src/lib/rules/readme/footer.ts
var footer_default = {
	async getContent(ast) {
		return [
			...(await contributing_default.getContent(ast)),
			...(await license_default.getContent(ast)),
		].join('\n')
	},
	keyword: 'footer',
	order: 17,
	// Always last
	required: false,
}

// src/lib/rules/readme/short-description.ts
import { readPackageUp as readPackageUp4 } from 'read-package-up'
var short_description_default = {
	async getContent(_) {
		const normalizedPackageJson = await readPackageUp4()
		if (normalizedPackageJson === void 0) {
			throw new Error('Could not find package.json')
		}
		if (normalizedPackageJson.packageJson.description === void 0) {
			throw new Error('Could not find description in package.json')
		}
		return `**${normalizedPackageJson.packageJson.description}**`
	},
	keyword: 'short-description',
	order: 3,
	required: true,
}

// src/lib/rules/readme/title.ts
import { readPackageUp as readPackageUp5 } from 'read-package-up'
var title_default = {
	// Must be applied at the end, after table of contents expander
	applicationOrder: 2,
	async getContent(_, options) {
		const validOptions = z
			.object({
				prefix: z.string().optional(),
			})
			.optional()
			.parse(options)
		const normalizedPackageJson = await readPackageUp5()
		if (normalizedPackageJson === void 0) {
			throw new Error('Could not find package.json')
		}
		return `# ${validOptions?.prefix ?? ''}${normalizedPackageJson.packageJson.name}`
	},
	keyword: 'title',
	order: 1,
	required: true,
}

// src/lib/rules/readme/header.ts
var header_default = {
	async getContent(ast) {
		return [
			...(await title_default.getContent(ast)),
			...(await badges_default.getContent(ast)),
			...(await short_description_default.getContent(ast)),
		].join('\n')
	},
	keyword: 'header',
	order: 0,
	// Always first
	required: false,
}

// ../../node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/regex.js
var regex =
	/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g

// ../../node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js
var own6 = Object.hasOwnProperty
var BananaSlug = class {
	/**
	 * Create a new slug class.
	 */
	constructor() {
		this.occurrences
		this.reset()
	}
	/**
	 * Generate a unique slug.
	 *
	 * Tracks previously generated slugs: repeated calls with the same value
	 * will result in different slugs.
	 * Use the `slug` function to get same slugs.
	 *
	 * @param  {string} value
	 *   String of text to slugify
	 * @param  {boolean} [maintainCase=false]
	 *   Keep the current case, otherwise make all lowercase
	 * @return {string}
	 *   A unique slug string
	 */
	slug(value, maintainCase) {
		const self2 = this
		let result = slug(value, maintainCase === true)
		const originalSlug = result
		while (own6.call(self2.occurrences, result)) {
			self2.occurrences[originalSlug]++
			result = originalSlug + '-' + self2.occurrences[originalSlug]
		}
		self2.occurrences[result] = 0
		return result
	}
	/**
	 * Reset - Forget all previous slugs
	 *
	 * @return void
	 */
	reset() {
		this.occurrences = /* @__PURE__ */ Object.create(null)
	}
}
function slug(value, maintainCase) {
	if (typeof value !== 'string') return ''
	if (!maintainCase) value = value.toLowerCase()
	return value.replace(regex, '').replace(/ /g, '-')
}

// ../../node_modules/.pnpm/mdast-util-toc@7.0.0/node_modules/mdast-util-toc/lib/to-expression.js
function toExpression2(value) {
	return new RegExp('^(' + value + ')$', 'i')
}

// ../../node_modules/.pnpm/mdast-util-toc@7.0.0/node_modules/mdast-util-toc/lib/search.js
var slugs = new BananaSlug()
function search2(root2, expression, settings) {
	const max = 'children' in root2 ? root2.children.length : 0
	const skip = settings.skip ? toExpression2(settings.skip) : void 0
	const parents = convert(
		settings.parents ||
			function (d) {
				return d === root2
			},
	)
	const map5 = []
	let index2
	let endIndex
	let opening
	slugs.reset()
	visit(root2, 'heading', function (node2, position2, parent) {
		const value = toString(node2, { includeImageAlt: false })
		const id = node2.data && node2.data.hProperties && node2.data.hProperties.id
		const slug2 = slugs.slug(id || value)
		if (!parents(parent)) {
			return
		}
		if (position2 !== void 0 && expression && !index2 && expression.test(value)) {
			index2 = position2 + 1
			opening = node2
			return
		}
		if (position2 !== void 0 && opening && !endIndex && node2.depth <= opening.depth) {
			endIndex = position2
		}
		if (
			(endIndex || !expression) &&
			(!settings.maxDepth || node2.depth <= settings.maxDepth) &&
			(!skip || !skip.test(value))
		) {
			map5.push({ depth: node2.depth, children: node2.children, id: slug2 })
		}
	})
	return {
		index: index2 === void 0 ? -1 : index2,
		endIndex: index2 === void 0 ? -1 : endIndex || max,
		map: map5,
	}
}

// ../../node_modules/.pnpm/@ungap+structured-clone@1.2.0/node_modules/@ungap/structured-clone/esm/types.js
var VOID = -1
var PRIMITIVE = 0
var ARRAY = 1
var OBJECT = 2
var DATE = 3
var REGEXP = 4
var MAP = 5
var SET = 6
var ERROR = 7
var BIGINT = 8

// ../../node_modules/.pnpm/@ungap+structured-clone@1.2.0/node_modules/@ungap/structured-clone/esm/deserialize.js
var env2 = typeof self === 'object' ? self : globalThis
var deserializer = ($, _) => {
	const as = (out, index2) => {
		$.set(index2, out)
		return out
	}
	const unpair = (index2) => {
		if ($.has(index2)) return $.get(index2)
		const [type, value] = _[index2]
		switch (type) {
			case PRIMITIVE:
			case VOID:
				return as(value, index2)
			case ARRAY: {
				const arr = as([], index2)
				for (const index3 of value) arr.push(unpair(index3))
				return arr
			}
			case OBJECT: {
				const object = as({}, index2)
				for (const [key, index3] of value) object[unpair(key)] = unpair(index3)
				return object
			}
			case DATE:
				return as(new Date(value), index2)
			case REGEXP: {
				const { source, flags } = value
				return as(new RegExp(source, flags), index2)
			}
			case MAP: {
				const map5 = as(/* @__PURE__ */ new Map(), index2)
				for (const [key, index3] of value) map5.set(unpair(key), unpair(index3))
				return map5
			}
			case SET: {
				const set = as(/* @__PURE__ */ new Set(), index2)
				for (const index3 of value) set.add(unpair(index3))
				return set
			}
			case ERROR: {
				const { name, message } = value
				return as(new env2[name](message), index2)
			}
			case BIGINT:
				return as(BigInt(value), index2)
			case 'BigInt':
				return as(Object(BigInt(value)), index2)
		}
		return as(new env2[type](value), index2)
	}
	return unpair
}
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0)

// ../../node_modules/.pnpm/@ungap+structured-clone@1.2.0/node_modules/@ungap/structured-clone/esm/serialize.js
var EMPTY = ''
var { toString: toString2 } = {}
var { keys } = Object
var typeOf = (value) => {
	const type = typeof value
	if (type !== 'object' || !value) return [PRIMITIVE, type]
	const asString = toString2.call(value).slice(8, -1)
	switch (asString) {
		case 'Array':
			return [ARRAY, EMPTY]
		case 'Object':
			return [OBJECT, EMPTY]
		case 'Date':
			return [DATE, EMPTY]
		case 'RegExp':
			return [REGEXP, EMPTY]
		case 'Map':
			return [MAP, EMPTY]
		case 'Set':
			return [SET, EMPTY]
	}
	if (asString.includes('Array')) return [ARRAY, asString]
	if (asString.includes('Error')) return [ERROR, asString]
	return [OBJECT, asString]
}
var shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === 'function' || type === 'symbol')
var serializer = (strict, json, $, _) => {
	const as = (out, value) => {
		const index2 = _.push(out) - 1
		$.set(value, index2)
		return index2
	}
	const pair = (value) => {
		if ($.has(value)) return $.get(value)
		let [TYPE, type] = typeOf(value)
		switch (TYPE) {
			case PRIMITIVE: {
				let entry = value
				switch (type) {
					case 'bigint':
						TYPE = BIGINT
						entry = value.toString()
						break
					case 'function':
					case 'symbol':
						if (strict) throw new TypeError('unable to serialize ' + type)
						entry = null
						break
					case 'undefined':
						return as([VOID], value)
				}
				return as([TYPE, entry], value)
			}
			case ARRAY: {
				if (type) return as([type, [...value]], value)
				const arr = []
				const index2 = as([TYPE, arr], value)
				for (const entry of value) arr.push(pair(entry))
				return index2
			}
			case OBJECT: {
				if (type) {
					switch (type) {
						case 'BigInt':
							return as([type, value.toString()], value)
						case 'Boolean':
						case 'Number':
						case 'String':
							return as([type, value.valueOf()], value)
					}
				}
				if (json && 'toJSON' in value) return pair(value.toJSON())
				const entries = []
				const index2 = as([TYPE, entries], value)
				for (const key of keys(value)) {
					if (strict || !shouldSkip(typeOf(value[key]))) entries.push([pair(key), pair(value[key])])
				}
				return index2
			}
			case DATE:
				return as([TYPE, value.toISOString()], value)
			case REGEXP: {
				const { source, flags } = value
				return as([TYPE, { source, flags }], value)
			}
			case MAP: {
				const entries = []
				const index2 = as([TYPE, entries], value)
				for (const [key, entry] of value) {
					if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
						entries.push([pair(key), pair(entry)])
				}
				return index2
			}
			case SET: {
				const entries = []
				const index2 = as([TYPE, entries], value)
				for (const entry of value) {
					if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry))
				}
				return index2
			}
		}
		const { message } = value
		return as([TYPE, { name: type, message }], value)
	}
	return pair
}
var serialize2 = (value, { json, lossy } = {}) => {
	const _ = []
	return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _
}

// ../../node_modules/.pnpm/@ungap+structured-clone@1.2.0/node_modules/@ungap/structured-clone/esm/index.js
var esm_default =
	typeof structuredClone === 'function'
		? /* c8 ignore start */
			(any, options) =>
				options && ('json' in options || 'lossy' in options)
					? deserialize(serialize2(any, options))
					: structuredClone(any)
		: (any, options) => deserialize(serialize2(any, options))

// ../../node_modules/.pnpm/mdast-util-toc@7.0.0/node_modules/mdast-util-toc/lib/contents.js
function contents(map5, settings) {
	const { ordered = false, tight = false, prefix } = settings
	const table = { type: 'list', ordered, spread: false, children: [] }
	let minDepth = Number.POSITIVE_INFINITY
	let index2 = -1
	while (++index2 < map5.length) {
		if (map5[index2].depth < minDepth) {
			minDepth = map5[index2].depth
		}
	}
	index2 = -1
	while (++index2 < map5.length) {
		map5[index2].depth -= minDepth - 1
	}
	index2 = -1
	while (++index2 < map5.length) {
		insert(map5[index2], table, { ordered, tight, prefix })
	}
	return table
}
function insert(entry, parent, settings) {
	let index2 = -1
	const tail = parent.children[parent.children.length - 1]
	if (parent.type === 'list') {
		if (entry.depth === 1) {
			parent.children.push({
				type: 'listItem',
				spread: false,
				children: [
					{
						type: 'paragraph',
						children: [
							{
								type: 'link',
								title: null,
								url: '#' + (settings.prefix || '') + entry.id,
								children: all2(entry.children),
							},
						],
					},
				],
			})
		} else if (parent.children.length > 0) {
			const tail2 = parent.children[parent.children.length - 1]
			insert(entry, tail2, settings)
		} else {
			const item = { type: 'listItem', spread: false, children: [] }
			parent.children.push(item)
			insert(entry, item, settings)
		}
	} else if (tail && tail.type === 'list') {
		entry.depth--
		insert(entry, tail, settings)
	} else {
		const item = {
			type: 'list',
			ordered: settings.ordered,
			spread: false,
			children: [],
		}
		parent.children.push(item)
		entry.depth--
		insert(entry, item, settings)
	}
	if (parent.type === 'list' && !settings.tight) {
		parent.spread = false
		while (++index2 < parent.children.length) {
			if (parent.children[index2].children.length > 1) {
				parent.spread = true
				break
			}
		}
	} else {
		parent.spread = !settings.tight
	}
}
function all2(nodes) {
	const results = []
	let index2 = -1
	while (++index2 < nodes.length) {
		const result = one2(nodes[index2])
		if (Array.isArray(result)) {
			results.push(...result)
		} else {
			results.push(result)
		}
	}
	return results
}
function one2(node2) {
	if (node2.type === 'footnoteReference') {
		return []
	}
	if (node2.type === 'link' || node2.type === 'linkReference') {
		return all2(node2.children)
	}
	if ('children' in node2) {
		const { children, position: position3, ...copy2 } = node2
		return Object.assign(esm_default(copy2), {
			children: all2(node2.children),
		})
	}
	const { position: position2, ...copy } = node2
	return esm_default(copy)
}

// ../../node_modules/.pnpm/mdast-util-toc@7.0.0/node_modules/mdast-util-toc/lib/index.js
function toc(tree, options) {
	const settings = options || {}
	const heading2 = settings.heading ? toExpression2(settings.heading) : void 0
	const result = search2(tree, heading2, settings)
	return {
		index: heading2 ? result.index : void 0,
		endIndex: heading2 ? result.endIndex : void 0,
		map: result.map.length > 0 ? contents(result.map, settings) : void 0,
	}
}

// src/lib/rules/readme/table-of-contents.ts
var table_of_contents_default = {
	// Apply towards the end so any generated headings are available
	applicationOrder: 1,
	// eslint-disable-next-line @typescript-eslint/require-await
	async getContent(ast) {
		const result = toc(ast, { heading: null, tight: true })
		const heading2 = `## Table of contents`
		if (result.map === void 0) {
			throw new Error('Could not generate table of contents')
		}
		const rootWrapper = {
			children: result.map.children,
			type: 'root',
		}
		const tocString = remark().use(remarkGfm).stringify(rootWrapper)
		return [heading2, tocString].join('\n')
	},
	keyword: 'table-of-contents',
	order: 5,
}

// src/lib/rules/readme/index.ts
var readme_default = {
	badges: badges_default,
	code: code_default,
	contributing: contributing_default,
	footer: footer_default,
	header: header_default,
	license: license_default,
	shortDescription: short_description_default,
	tableOfContents: table_of_contents_default,
	title: title_default,
}

// src/lib/rules/index.ts
var rules_default = {
	readme: readme_default,
}

// ../../node_modules/.pnpm/plur@5.1.0/node_modules/plur/index.js
var import_irregular_plurals = __toESM(require_irregular_plurals2(), 1)
function plur(word, plural, count) {
	if (typeof plural === 'number') {
		count = plural
	}
	if (import_irregular_plurals.default.has(word.toLowerCase())) {
		plural = import_irregular_plurals.default.get(word.toLowerCase())
		const firstLetter = word.charAt(0)
		const isFirstLetterUpperCase = firstLetter === firstLetter.toUpperCase()
		if (isFirstLetterUpperCase) {
			plural = firstLetter + plural.slice(1)
		}
		const isWholeWordUpperCase = word === word.toUpperCase()
		if (isWholeWordUpperCase) {
			plural = plural.toUpperCase()
		}
	} else if (typeof plural !== 'string') {
		plural = (
			word.replace(/(?:s|x|z|ch|sh)$/i, '$&e').replace(/([^aeiou])y$/i, '$1ie') + 's'
		).replace(/i?e?s$/i, (match) => {
			const isTailLowerCase = word.slice(-1) === word.slice(-1).toLowerCase()
			return isTailLowerCase ? match.toLowerCase() : match.toUpperCase()
		})
	}
	return Math.abs(count) === 1 ? word : plural
}

// src/lib/validate.ts
async function validateString(markdown, options) {
	const ast = remark().use(remarkGfm).parse(markdown)
	return validateAst(ast, options)
}
async function validateAst(ast, options) {
	const { expansionRules, keywordPrefix } = options
	const errors = []
	const validExpanders = []
	for (const node2 of ast.children) {
		if (node2.type === 'html') {
			const parsedComment = parseCommentText(node2.value)
			if (parsedComment === void 0) continue
			const { args, keyword: commentKeyword } = parsedComment
			const matchingExpander = Object.values(expansionRules).find(
				(rule) => `${keywordPrefix ?? ''}${rule.keyword}` === commentKeyword,
			)
			if (matchingExpander === void 0) continue
			if (args) {
				try {
					await matchingExpander.getContent(ast, args)
				} catch (error) {
					if (error instanceof Error) {
						errors.push(error)
					}
				}
			}
			validExpanders.push(matchingExpander)
		}
	}
	const absenceErrors = []
	for (const rule of Object.values(expansionRules)) {
		if (rule.required && !validExpanders.includes(rule)) {
			absenceErrors.push(new Error(`  "${source_default.yellow(`<-- ${rule.keyword} -->`)}"`))
		}
	}
	if (absenceErrors.length > 0) {
		errors.push(
			new Error(
				source_default.bold.red(
					`${absenceErrors.length} required ${plur('comment', absenceErrors.length)} ${absenceErrors.length > 1 ? 'are' : 'is'} missing from the document:`,
				),
			),
			...absenceErrors,
		)
	}
	const validExpandersWithOrder = validExpanders.filter((rule) => rule.order !== void 0)
	if (validExpandersWithOrder.length > 1) {
		const sortedValidExpanders = [...validExpandersWithOrder].sort((a, b) => a.order - b.order)
		const sortErrors = []
		for (const sortedExpander of validExpandersWithOrder) {
			const correctIndex = sortedValidExpanders.indexOf(sortedExpander)
			const currentIndex = validExpandersWithOrder.indexOf(sortedExpander)
			if (correctIndex !== currentIndex) {
				const up = correctIndex < currentIndex
				let message = `	${up ? '\u2191' : '\u2193'} "${source_default.yellow(sortedExpander.keyword)}" should move ${up ? 'up' : 'down'} so it comes`
				if (correctIndex === 0) {
					message = `${message} before "${source_default.yellow(sortedValidExpanders[correctIndex + 1].keyword)}"`
				} else if (correctIndex === validExpandersWithOrder.length - 1) {
					message = `${message} after "${source_default.yellow(sortedValidExpanders[correctIndex - 1].keyword)}"`
				} else {
					message = `${message} after "${source_default.yellow(sortedValidExpanders[correctIndex - 1].keyword)}" and before "${source_default.yellow(sortedValidExpanders[correctIndex + 1].keyword)}"`
				}
				sortErrors.push(new Error(message))
				continue
			}
		}
		if (sortErrors.length > 0) {
			errors.push(
				new Error(
					source_default.bold.red(
						`${sortErrors.length} ${plur('comment', sortErrors.length)} ${sortErrors.length > 1 ? 'are' : 'is'} not in the correct order:`,
					),
				),
				...sortErrors,
			)
		}
	}
	if (errors.length > 0) {
		return errors
	}
	return true
}

// ../../node_modules/.pnpm/find-up@7.0.0/node_modules/find-up/index.js
import path4 from 'node:path'

// ../../node_modules/.pnpm/locate-path@7.2.0/node_modules/locate-path/index.js
import process3 from 'node:process'
import path3 from 'node:path'
import fs2, { promises as fsPromises } from 'node:fs'
import { fileURLToPath as fileURLToPath2 } from 'node:url'

// ../../node_modules/.pnpm/yocto-queue@1.0.0/node_modules/yocto-queue/index.js
var Node = class {
	value
	next
	constructor(value) {
		this.value = value
	}
}
var Queue = class {
	#head
	#tail
	#size
	constructor() {
		this.clear()
	}
	enqueue(value) {
		const node2 = new Node(value)
		if (this.#head) {
			this.#tail.next = node2
			this.#tail = node2
		} else {
			this.#head = node2
			this.#tail = node2
		}
		this.#size++
	}
	dequeue() {
		const current = this.#head
		if (!current) {
			return
		}
		this.#head = this.#head.next
		this.#size--
		return current.value
	}
	clear() {
		this.#head = void 0
		this.#tail = void 0
		this.#size = 0
	}
	get size() {
		return this.#size
	}
	*[Symbol.iterator]() {
		let current = this.#head
		while (current) {
			yield current.value
			current = current.next
		}
	}
}

// ../../node_modules/.pnpm/p-limit@4.0.0/node_modules/p-limit/index.js
function pLimit(concurrency) {
	if (
		!(
			(Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) &&
			concurrency > 0
		)
	) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up')
	}
	const queue = new Queue()
	let activeCount = 0
	const next = () => {
		activeCount--
		if (queue.size > 0) {
			queue.dequeue()()
		}
	}
	const run = async (fn, resolve5, args) => {
		activeCount++
		const result = (async () => fn(...args))()
		resolve5(result)
		try {
			await result
		} catch {}
		next()
	}
	const enqueue = (fn, resolve5, args) => {
		queue.enqueue(run.bind(void 0, fn, resolve5, args))
		;(async () => {
			await Promise.resolve()
			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()()
			}
		})()
	}
	const generator = (fn, ...args) =>
		new Promise((resolve5) => {
			enqueue(fn, resolve5, args)
		})
	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value: () => {
				queue.clear()
			},
		},
	})
	return generator
}

// ../../node_modules/.pnpm/p-locate@6.0.0/node_modules/p-locate/index.js
var EndError = class extends Error {
	constructor(value) {
		super()
		this.value = value
	}
}
var testElement = async (element, tester) => tester(await element)
var finder = async (element) => {
	const values = await Promise.all(element)
	if (values[1] === true) {
		throw new EndError(values[0])
	}
	return false
}
async function pLocate(
	iterable,
	tester,
	{ concurrency = Number.POSITIVE_INFINITY, preserveOrder = true } = {},
) {
	const limit = pLimit(concurrency)
	const items = [...iterable].map((element) => [element, limit(testElement, element, tester)])
	const checkLimit = pLimit(preserveOrder ? 1 : Number.POSITIVE_INFINITY)
	try {
		await Promise.all(items.map((element) => checkLimit(finder, element)))
	} catch (error) {
		if (error instanceof EndError) {
			return error.value
		}
		throw error
	}
}

// ../../node_modules/.pnpm/locate-path@7.2.0/node_modules/locate-path/index.js
var typeMappings = {
	directory: 'isDirectory',
	file: 'isFile',
}
function checkType(type) {
	if (Object.hasOwnProperty.call(typeMappings, type)) {
		return
	}
	throw new Error(`Invalid type specified: ${type}`)
}
var matchType = (type, stat) => stat[typeMappings[type]]()
var toPath = (urlOrPath) => (urlOrPath instanceof URL ? fileURLToPath2(urlOrPath) : urlOrPath)
async function locatePath(
	paths,
	{ cwd = process3.cwd(), type = 'file', allowSymlinks = true, concurrency, preserveOrder } = {},
) {
	checkType(type)
	cwd = toPath(cwd)
	const statFunction = allowSymlinks ? fsPromises.stat : fsPromises.lstat
	return pLocate(
		paths,
		async (path_) => {
			try {
				const stat = await statFunction(path3.resolve(cwd, path_))
				return matchType(type, stat)
			} catch {
				return false
			}
		},
		{ concurrency, preserveOrder },
	)
}

// ../../node_modules/.pnpm/unicorn-magic@0.1.0/node_modules/unicorn-magic/node.js
import { fileURLToPath as fileURLToPath3 } from 'node:url'
function toPath2(urlOrPath) {
	return urlOrPath instanceof URL ? fileURLToPath3(urlOrPath) : urlOrPath
}

// ../../node_modules/.pnpm/find-up@7.0.0/node_modules/find-up/index.js
var findUpStop = Symbol('findUpStop')
async function findUpMultiple(name, options = {}) {
	let directory = path4.resolve(toPath2(options.cwd) ?? '')
	const { root: root2 } = path4.parse(directory)
	const stopAt = path4.resolve(directory, toPath2(options.stopAt ?? root2))
	const limit = options.limit ?? Number.POSITIVE_INFINITY
	const paths = [name].flat()
	const runMatcher = async (locateOptions) => {
		if (typeof name !== 'function') {
			return locatePath(paths, locateOptions)
		}
		const foundPath = await name(locateOptions.cwd)
		if (typeof foundPath === 'string') {
			return locatePath([foundPath], locateOptions)
		}
		return foundPath
	}
	const matches = []
	while (true) {
		const foundPath = await runMatcher({ ...options, cwd: directory })
		if (foundPath === findUpStop) {
			break
		}
		if (foundPath) {
			matches.push(path4.resolve(directory, foundPath))
		}
		if (directory === stopAt || matches.length >= limit) {
			break
		}
		directory = path4.dirname(directory)
	}
	return matches
}
async function findUp(name, options = {}) {
	const matches = await findUpMultiple(name, { ...options, limit: 1 })
	return matches[0]
}

// src/cli/helpers.ts
import fs3 from 'node:fs/promises'
import path7 from 'node:path'
import { fileURLToPath as fileURLToPath5 } from 'node:url'

// ../../node_modules/.pnpm/pkg-dir@8.0.0/node_modules/pkg-dir/index.js
import path6 from 'node:path'

// ../../node_modules/.pnpm/find-up-simple@1.0.0/node_modules/find-up-simple/index.js
import process4 from 'node:process'
import fsPromises2 from 'node:fs/promises'
import { fileURLToPath as fileURLToPath4 } from 'node:url'
import path5 from 'node:path'
var toPath3 = (urlOrPath) => (urlOrPath instanceof URL ? fileURLToPath4(urlOrPath) : urlOrPath)
async function findUp2(name, { cwd = process4.cwd(), type = 'file', stopAt } = {}) {
	let directory = path5.resolve(toPath3(cwd) ?? '')
	const { root: root2 } = path5.parse(directory)
	stopAt = path5.resolve(directory, toPath3(stopAt ?? root2))
	while (directory && directory !== stopAt && directory !== root2) {
		const filePath = path5.isAbsolute(name) ? name : path5.join(directory, name)
		try {
			const stats = await fsPromises2.stat(filePath)
			if ((type === 'file' && stats.isFile()) || (type === 'directory' && stats.isDirectory())) {
				return filePath
			}
		} catch {}
		directory = path5.dirname(directory)
	}
}

// ../../node_modules/.pnpm/pkg-dir@8.0.0/node_modules/pkg-dir/index.js
async function packageDirectory({ cwd } = {}) {
	const filePath = await findUp2('package.json', { cwd })
	return filePath && path6.dirname(filePath)
}

// src/cli/helpers.ts
async function getReadmePath() {
	log_default.info(`Searching for package directory...`)
	const thePackageDirectory = await packageDirectory()
	if (thePackageDirectory !== void 0) {
		log_default.info(`Found package directory: "${thePackageDirectory}"`)
		const files = await fs3.readdir(thePackageDirectory)
		const readmeFile = files.find((file) => file.toLowerCase() === 'readme.md')
		if (readmeFile !== void 0) {
			return path7.join(thePackageDirectory, readmeFile)
		}
		log_default.warn(`Readme not found in package directory, searching up for readme...`)
	}
	const closestReadme = await findUp('readme.md', {
		type: 'file',
	})
	if (closestReadme !== void 0) {
		log_default.info(`Found closest readme at "${closestReadme}"`)
		return closestReadme
	}
	throw new Error('No readme found')
}
function getRulesForPreset(preset) {
	switch (preset) {
		case 'readme': {
			return rules_default.readme
		}
		default: {
			throw new Error(`Unknown preset "${preset}"`)
		}
	}
}
async function getRules(preset, rules) {
	let finalRules = preset ? getRulesForPreset(preset) : {}
	if (rules) {
		for (const rulePath of rules) {
			const fullPath = path7.resolve(process.cwd(), rulePath)
			const { default: ruleModule } = await import(fileURLToPath5(new URL(`file://${fullPath}`)))
			log_default.info(`ruleModule: ${JSON.stringify(ruleModule, void 0, 2)}`)
			finalRules = { ...finalRules, ...ruleModule }
		}
	}
	log_default.info(`Found rules: ${JSON.stringify(finalRules, void 0, 2)}`)
	if (Object.entries(finalRules).length === 0) {
		throw new Error(`No rules found. Did you forget to specify a preset or rules?`)
	}
	return finalRules
}
function getInputOutputPaths(files, output, name) {
	const paths = []
	if (files.length === 0) {
		throw new Error('No files provided.')
	}
	for (const [index2, file] of files.entries()) {
		const baseName = name
			? path7.basename(name, path7.extname(name))
			: path7.basename(file, path7.extname(file))
		const increment2 = name && files.length > 1 ? `-${index2 + 1}` : ''
		const outputName = `${baseName}${increment2}.md`
		const outputPath = path7.join(path7.dirname(output ?? file), outputName)
		paths.push({ input: file, output: outputPath })
	}
	return paths
}

// src/cli/commands/expand.ts
import fs4 from 'node:fs/promises'
async function expandCommand(options) {
	const { files, meta, name, output, prefix, preset, print, rules } = options
	const finalRules = await getRules(preset, rules)
	const inputOutputPaths = getInputOutputPaths(files, output, name)
	for (const { input, output: output2 } of inputOutputPaths) {
		const markdown = await fs4.readFile(input, 'utf8')
		const { expandedString, report } = await expandString(markdown, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
		})
		if (print) {
			process.stdout.write(`${expandedString}
`)
		} else {
			await fs4.writeFile(output2, expandedString)
		}
		log_default.info('[readme]', `Expanded:`)
		log_default.info('[readme]', `  From: ${input}`)
		log_default.info('[readme]', `  To:   ${print ? 'stdout' : output2}`)
		log_default.info('[readme]', '  Replaced:')
		for (const [i, line] of report.entries()) {
			log_default.info('[readme]', `    ${i + 1}. ${line}`)
		}
	}
}

// src/cli/commands/lint.ts
import fs5 from 'node:fs/promises'
async function lintCommand(options) {
	const { files, meta, prefix, preset, rules } = options
	const finalRules = await getRules(preset, rules)
	for (const input of files) {
		const markdown = await fs5.readFile(input, 'utf8')
		const result = await validateString(markdown, {
			expansionRules: finalRules,
			keywordPrefix: prefix,
			meta,
		})
		if (typeof result === 'boolean' && result) {
			log_default.info(`[lint] ${input}: OK`)
		} else {
			for (const error of result) {
				console.log(`[lint] ${error.message}`)
			}
		}
	}
}

// src/cli/commands/readme.ts
import fs6 from 'node:fs/promises'
async function readmeCommand(options) {
	const { meta, prefix, print } = options
	const expandOptions = {
		expansionRules: rules_default.readme,
		keywordPrefix: prefix,
		meta,
	}
	const readmePath = await getReadmePath()
	const readmeString = await fs6.readFile(readmePath, 'utf8')
	const { expandedString, report } = await expandString(readmeString, expandOptions)
	if (!print) {
		await fs6.writeFile(readmePath, expandedString)
		process.stdout.write(readmeString ?? '')
	}
	log_default.info('[readme]', `Expanded:`)
	log_default.info('[readme]', `  From: ${readmePath}`)
	log_default.info('[readme]', `  To:   ${print ? 'stdout' : readmePath}`)
	log_default.info('[readme]', '  Replaced:')
	for (const [i, line] of report.entries()) {
		log_default.info('[readme]', `    ${i + 1}. ${line}`)
	}
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/lib/platform-shims/esm.mjs
import { notStrictEqual, strictEqual } from 'assert'

// ../../node_modules/.pnpm/cliui@8.0.1/node_modules/cliui/build/lib/index.js
var align = {
	right: alignRight,
	center: alignCenter,
}
var top = 0
var right = 1
var bottom = 2
var left = 3
var UI = class {
	constructor(opts) {
		var _a2
		this.width = opts.width
		this.wrap = (_a2 = opts.wrap) !== null && _a2 !== void 0 ? _a2 : true
		this.rows = []
	}
	span(...args) {
		const cols = this.div(...args)
		cols.span = true
	}
	resetOutput() {
		this.rows = []
	}
	div(...args) {
		if (args.length === 0) {
			this.div('')
		}
		if (this.wrap && this.shouldApplyLayoutDSL(...args) && typeof args[0] === 'string') {
			return this.applyLayoutDSL(args[0])
		}
		const cols = args.map((arg) => {
			if (typeof arg === 'string') {
				return this.colFromString(arg)
			}
			return arg
		})
		this.rows.push(cols)
		return cols
	}
	shouldApplyLayoutDSL(...args) {
		return args.length === 1 && typeof args[0] === 'string' && /[\t\n]/.test(args[0])
	}
	applyLayoutDSL(str) {
		const rows = str.split('\n').map((row) => row.split('	'))
		let leftColumnWidth = 0
		rows.forEach((columns) => {
			if (columns.length > 1 && mixin.stringWidth(columns[0]) > leftColumnWidth) {
				leftColumnWidth = Math.min(Math.floor(this.width * 0.5), mixin.stringWidth(columns[0]))
			}
		})
		rows.forEach((columns) => {
			this.div(
				...columns.map((r, i) => {
					return {
						text: r.trim(),
						padding: this.measurePadding(r),
						width: i === 0 && columns.length > 1 ? leftColumnWidth : void 0,
					}
				}),
			)
		})
		return this.rows[this.rows.length - 1]
	}
	colFromString(text5) {
		return {
			text: text5,
			padding: this.measurePadding(text5),
		}
	}
	measurePadding(str) {
		const noAnsi = mixin.stripAnsi(str)
		return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length]
	}
	toString() {
		const lines = []
		this.rows.forEach((row) => {
			this.rowToString(row, lines)
		})
		return lines
			.filter((line) => !line.hidden)
			.map((line) => line.text)
			.join('\n')
	}
	rowToString(row, lines) {
		this.rasterize(row).forEach((rrow, r) => {
			let str = ''
			rrow.forEach((col, c) => {
				const { width } = row[c]
				const wrapWidth = this.negatePadding(row[c])
				let ts = col
				if (wrapWidth > mixin.stringWidth(col)) {
					ts += ' '.repeat(wrapWidth - mixin.stringWidth(col))
				}
				if (row[c].align && row[c].align !== 'left' && this.wrap) {
					const fn = align[row[c].align]
					ts = fn(ts, wrapWidth)
					if (mixin.stringWidth(ts) < wrapWidth) {
						ts += ' '.repeat((width || 0) - mixin.stringWidth(ts) - 1)
					}
				}
				const padding = row[c].padding || [0, 0, 0, 0]
				if (padding[left]) {
					str += ' '.repeat(padding[left])
				}
				str += addBorder(row[c], ts, '| ')
				str += ts
				str += addBorder(row[c], ts, ' |')
				if (padding[right]) {
					str += ' '.repeat(padding[right])
				}
				if (r === 0 && lines.length > 0) {
					str = this.renderInline(str, lines[lines.length - 1])
				}
			})
			lines.push({
				text: str.replace(/ +$/, ''),
				span: row.span,
			})
		})
		return lines
	}
	// if the full 'source' can render in
	// the target line, do so.
	renderInline(source, previousLine) {
		const match = source.match(/^ */)
		const leadingWhitespace = match ? match[0].length : 0
		const target = previousLine.text
		const targetTextWidth = mixin.stringWidth(target.trimRight())
		if (!previousLine.span) {
			return source
		}
		if (!this.wrap) {
			previousLine.hidden = true
			return target + source
		}
		if (leadingWhitespace < targetTextWidth) {
			return source
		}
		previousLine.hidden = true
		return target.trimRight() + ' '.repeat(leadingWhitespace - targetTextWidth) + source.trimLeft()
	}
	rasterize(row) {
		const rrows = []
		const widths = this.columnWidths(row)
		let wrapped
		row.forEach((col, c) => {
			col.width = widths[c]
			if (this.wrap) {
				wrapped = mixin.wrap(col.text, this.negatePadding(col), { hard: true }).split('\n')
			} else {
				wrapped = col.text.split('\n')
			}
			if (col.border) {
				wrapped.unshift('.' + '-'.repeat(this.negatePadding(col) + 2) + '.')
				wrapped.push("'" + '-'.repeat(this.negatePadding(col) + 2) + "'")
			}
			if (col.padding) {
				wrapped.unshift(...new Array(col.padding[top] || 0).fill(''))
				wrapped.push(...new Array(col.padding[bottom] || 0).fill(''))
			}
			wrapped.forEach((str, r) => {
				if (!rrows[r]) {
					rrows.push([])
				}
				const rrow = rrows[r]
				for (let i = 0; i < c; i++) {
					if (rrow[i] === void 0) {
						rrow.push('')
					}
				}
				rrow.push(str)
			})
		})
		return rrows
	}
	negatePadding(col) {
		let wrapWidth = col.width || 0
		if (col.padding) {
			wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0)
		}
		if (col.border) {
			wrapWidth -= 4
		}
		return wrapWidth
	}
	columnWidths(row) {
		if (!this.wrap) {
			return row.map((col) => {
				return col.width || mixin.stringWidth(col.text)
			})
		}
		let unset = row.length
		let remainingWidth = this.width
		const widths = row.map((col) => {
			if (col.width) {
				unset--
				remainingWidth -= col.width
				return col.width
			}
			return void 0
		})
		const unsetWidth = unset ? Math.floor(remainingWidth / unset) : 0
		return widths.map((w, i) => {
			if (w === void 0) {
				return Math.max(unsetWidth, _minWidth(row[i]))
			}
			return w
		})
	}
}
function addBorder(col, ts, style) {
	if (col.border) {
		if (/[.']-+[.']/.test(ts)) {
			return ''
		}
		if (ts.trim().length !== 0) {
			return style
		}
		return '  '
	}
	return ''
}
function _minWidth(col) {
	const padding = col.padding || []
	const minWidth = 1 + (padding[left] || 0) + (padding[right] || 0)
	if (col.border) {
		return minWidth + 4
	}
	return minWidth
}
function getWindowWidth() {
	if (typeof process === 'object' && process.stdout && process.stdout.columns) {
		return process.stdout.columns
	}
	return 80
}
function alignRight(str, width) {
	str = str.trim()
	const strWidth = mixin.stringWidth(str)
	if (strWidth < width) {
		return ' '.repeat(width - strWidth) + str
	}
	return str
}
function alignCenter(str, width) {
	str = str.trim()
	const strWidth = mixin.stringWidth(str)
	if (strWidth >= width) {
		return str
	}
	return ' '.repeat((width - strWidth) >> 1) + str
}
var mixin
function cliui(opts, _mixin) {
	mixin = _mixin
	return new UI({
		width: (opts === null || opts === void 0 ? void 0 : opts.width) || getWindowWidth(),
		wrap: opts === null || opts === void 0 ? void 0 : opts.wrap,
	})
}

// ../../node_modules/.pnpm/cliui@8.0.1/node_modules/cliui/build/lib/string-utils.js
var ansi = new RegExp(
	'\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)',
	'g',
)
function stripAnsi(str) {
	return str.replace(ansi, '')
}
function wrap2(str, width) {
	const [start, end] = str.match(ansi) || ['', '']
	str = stripAnsi(str)
	let wrapped = ''
	for (let i = 0; i < str.length; i++) {
		if (i !== 0 && i % width === 0) {
			wrapped += '\n'
		}
		wrapped += str.charAt(i)
	}
	if (start && end) {
		wrapped = `${start}${wrapped}${end}`
	}
	return wrapped
}

// ../../node_modules/.pnpm/cliui@8.0.1/node_modules/cliui/index.mjs
function ui(opts) {
	return cliui(opts, {
		stringWidth: (str) => {
			return [...str].length
		},
		stripAnsi,
		wrap: wrap2,
	})
}

// ../../node_modules/.pnpm/escalade@3.1.1/node_modules/escalade/sync/index.mjs
import { dirname, resolve } from 'path'
import { readdirSync, statSync } from 'fs'
function sync_default(start, callback) {
	let dir = resolve('.', start)
	let tmp,
		stats = statSync(dir)
	if (!stats.isDirectory()) {
		dir = dirname(dir)
	}
	while (true) {
		tmp = callback(dir, readdirSync(dir))
		if (tmp) return resolve(dir, tmp)
		dir = dirname((tmp = dir))
		if (tmp === dir) break
	}
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/lib/platform-shims/esm.mjs
import { inspect } from 'util'
import { readFileSync as readFileSync3 } from 'fs'
import { fileURLToPath as fileURLToPath6 } from 'url'

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/index.js
import { format } from 'util'
import { normalize, resolve as resolve2 } from 'path'

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/string-utils.js
function camelCase(str) {
	const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase()
	if (!isCamelCase) {
		str = str.toLowerCase()
	}
	if (str.indexOf('-') === -1 && str.indexOf('_') === -1) {
		return str
	} else {
		let camelcase = ''
		let nextChrUpper = false
		const leadingHyphens = str.match(/^-+/)
		for (let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++) {
			let chr = str.charAt(i)
			if (nextChrUpper) {
				nextChrUpper = false
				chr = chr.toUpperCase()
			}
			if (i !== 0 && (chr === '-' || chr === '_')) {
				nextChrUpper = true
			} else if (chr !== '-' && chr !== '_') {
				camelcase += chr
			}
		}
		return camelcase
	}
}
function decamelize(str, joinString) {
	const lowercase = str.toLowerCase()
	joinString = joinString || '-'
	let notCamelcase = ''
	for (let i = 0; i < str.length; i++) {
		const chrLower = lowercase.charAt(i)
		const chrString = str.charAt(i)
		if (chrLower !== chrString && i > 0) {
			notCamelcase += `${joinString}${lowercase.charAt(i)}`
		} else {
			notCamelcase += chrString
		}
	}
	return notCamelcase
}
function looksLikeNumber(x) {
	if (x === null || x === void 0) return false
	if (typeof x === 'number') return true
	if (/^0x[0-9a-f]+$/i.test(x)) return true
	if (/^0[^.]/.test(x)) return false
	return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x)
}

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/tokenize-arg-string.js
function tokenizeArgString(argString) {
	if (Array.isArray(argString)) {
		return argString.map((e) => (typeof e !== 'string' ? e + '' : e))
	}
	argString = argString.trim()
	let i = 0
	let prevC = null
	let c = null
	let opening = null
	const args = []
	for (let ii = 0; ii < argString.length; ii++) {
		prevC = c
		c = argString.charAt(ii)
		if (c === ' ' && !opening) {
			if (!(prevC === ' ')) {
				i++
			}
			continue
		}
		if (c === opening) {
			opening = null
		} else if ((c === "'" || c === '"') && !opening) {
			opening = c
		}
		if (!args[i]) args[i] = ''
		args[i] += c
	}
	return args
}

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/yargs-parser-types.js
var DefaultValuesForTypeKey
;(function (DefaultValuesForTypeKey2) {
	DefaultValuesForTypeKey2['BOOLEAN'] = 'boolean'
	DefaultValuesForTypeKey2['STRING'] = 'string'
	DefaultValuesForTypeKey2['NUMBER'] = 'number'
	DefaultValuesForTypeKey2['ARRAY'] = 'array'
})(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}))

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/yargs-parser.js
var mixin2
var YargsParser = class {
	constructor(_mixin) {
		mixin2 = _mixin
	}
	parse(argsInput, options) {
		const opts = Object.assign(
			{
				alias: void 0,
				array: void 0,
				boolean: void 0,
				config: void 0,
				configObjects: void 0,
				configuration: void 0,
				coerce: void 0,
				count: void 0,
				default: void 0,
				envPrefix: void 0,
				narg: void 0,
				normalize: void 0,
				string: void 0,
				number: void 0,
				__: void 0,
				key: void 0,
			},
			options,
		)
		const args = tokenizeArgString(argsInput)
		const inputIsString = typeof argsInput === 'string'
		const aliases = combineAliases(Object.assign(/* @__PURE__ */ Object.create(null), opts.alias))
		const configuration = Object.assign(
			{
				'boolean-negation': true,
				'camel-case-expansion': true,
				'combine-arrays': false,
				'dot-notation': true,
				'duplicate-arguments-array': true,
				'flatten-duplicate-arrays': true,
				'greedy-arrays': true,
				'halt-at-non-option': false,
				'nargs-eats-options': false,
				'negation-prefix': 'no-',
				'parse-numbers': true,
				'parse-positional-numbers': true,
				'populate--': false,
				'set-placeholder-key': false,
				'short-option-groups': true,
				'strip-aliased': false,
				'strip-dashed': false,
				'unknown-options-as-args': false,
			},
			opts.configuration,
		)
		const defaults = Object.assign(/* @__PURE__ */ Object.create(null), opts.default)
		const configObjects = opts.configObjects || []
		const envPrefix = opts.envPrefix
		const notFlagsOption = configuration['populate--']
		const notFlagsArgv = notFlagsOption ? '--' : '_'
		const newAliases = /* @__PURE__ */ Object.create(null)
		const defaulted = /* @__PURE__ */ Object.create(null)
		const __ = opts.__ || mixin2.format
		const flags = {
			aliases: /* @__PURE__ */ Object.create(null),
			arrays: /* @__PURE__ */ Object.create(null),
			bools: /* @__PURE__ */ Object.create(null),
			strings: /* @__PURE__ */ Object.create(null),
			numbers: /* @__PURE__ */ Object.create(null),
			counts: /* @__PURE__ */ Object.create(null),
			normalize: /* @__PURE__ */ Object.create(null),
			configs: /* @__PURE__ */ Object.create(null),
			nargs: /* @__PURE__ */ Object.create(null),
			coercions: /* @__PURE__ */ Object.create(null),
			keys: [],
		}
		const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/
		const negatedBoolean = new RegExp('^--' + configuration['negation-prefix'] + '(.+)')
		;[]
			.concat(opts.array || [])
			.filter(Boolean)
			.forEach(function (opt) {
				const key = typeof opt === 'object' ? opt.key : opt
				const assignment = Object.keys(opt)
					.map(function (key2) {
						const arrayFlagKeys = {
							boolean: 'bools',
							string: 'strings',
							number: 'numbers',
						}
						return arrayFlagKeys[key2]
					})
					.filter(Boolean)
					.pop()
				if (assignment) {
					flags[assignment][key] = true
				}
				flags.arrays[key] = true
				flags.keys.push(key)
			})
		;[]
			.concat(opts.boolean || [])
			.filter(Boolean)
			.forEach(function (key) {
				flags.bools[key] = true
				flags.keys.push(key)
			})
		;[]
			.concat(opts.string || [])
			.filter(Boolean)
			.forEach(function (key) {
				flags.strings[key] = true
				flags.keys.push(key)
			})
		;[]
			.concat(opts.number || [])
			.filter(Boolean)
			.forEach(function (key) {
				flags.numbers[key] = true
				flags.keys.push(key)
			})
		;[]
			.concat(opts.count || [])
			.filter(Boolean)
			.forEach(function (key) {
				flags.counts[key] = true
				flags.keys.push(key)
			})
		;[]
			.concat(opts.normalize || [])
			.filter(Boolean)
			.forEach(function (key) {
				flags.normalize[key] = true
				flags.keys.push(key)
			})
		if (typeof opts.narg === 'object') {
			Object.entries(opts.narg).forEach(([key, value]) => {
				if (typeof value === 'number') {
					flags.nargs[key] = value
					flags.keys.push(key)
				}
			})
		}
		if (typeof opts.coerce === 'object') {
			Object.entries(opts.coerce).forEach(([key, value]) => {
				if (typeof value === 'function') {
					flags.coercions[key] = value
					flags.keys.push(key)
				}
			})
		}
		if (typeof opts.config !== 'undefined') {
			if (Array.isArray(opts.config) || typeof opts.config === 'string') {
				;[]
					.concat(opts.config)
					.filter(Boolean)
					.forEach(function (key) {
						flags.configs[key] = true
					})
			} else if (typeof opts.config === 'object') {
				Object.entries(opts.config).forEach(([key, value]) => {
					if (typeof value === 'boolean' || typeof value === 'function') {
						flags.configs[key] = value
					}
				})
			}
		}
		extendAliases(opts.key, aliases, opts.default, flags.arrays)
		Object.keys(defaults).forEach(function (key) {
			;(flags.aliases[key] || []).forEach(function (alias) {
				defaults[alias] = defaults[key]
			})
		})
		let error = null
		checkConfiguration()
		let notFlags = []
		const argv = Object.assign(/* @__PURE__ */ Object.create(null), { _: [] })
		const argvReturn = {}
		for (let i = 0; i < args.length; i++) {
			const arg = args[i]
			const truncatedArg = arg.replace(/^-{3,}/, '---')
			let broken
			let key
			let letters
			let m
			let next
			let value
			if (arg !== '--' && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
				pushPositional(arg)
			} else if (truncatedArg.match(/^---+(=|$)/)) {
				pushPositional(arg)
				continue
			} else if (
				arg.match(/^--.+=/) ||
				(!configuration['short-option-groups'] && arg.match(/^-.+=/))
			) {
				m = arg.match(/^--?([^=]+)=([\s\S]*)$/)
				if (m !== null && Array.isArray(m) && m.length >= 3) {
					if (checkAllAliases(m[1], flags.arrays)) {
						i = eatArray(i, m[1], args, m[2])
					} else if (checkAllAliases(m[1], flags.nargs) !== false) {
						i = eatNargs(i, m[1], args, m[2])
					} else {
						setArg(m[1], m[2], true)
					}
				}
			} else if (arg.match(negatedBoolean) && configuration['boolean-negation']) {
				m = arg.match(negatedBoolean)
				if (m !== null && Array.isArray(m) && m.length >= 2) {
					key = m[1]
					setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false)
				}
			} else if (
				arg.match(/^--.+/) ||
				(!configuration['short-option-groups'] && arg.match(/^-[^-]+/))
			) {
				m = arg.match(/^--?(.+)/)
				if (m !== null && Array.isArray(m) && m.length >= 2) {
					key = m[1]
					if (checkAllAliases(key, flags.arrays)) {
						i = eatArray(i, key, args)
					} else if (checkAllAliases(key, flags.nargs) !== false) {
						i = eatNargs(i, key, args)
					} else {
						next = args[i + 1]
						if (
							next !== void 0 &&
							(!next.match(/^-/) || next.match(negative)) &&
							!checkAllAliases(key, flags.bools) &&
							!checkAllAliases(key, flags.counts)
						) {
							setArg(key, next)
							i++
						} else if (/^(true|false)$/.test(next)) {
							setArg(key, next)
							i++
						} else {
							setArg(key, defaultValue(key))
						}
					}
				}
			} else if (arg.match(/^-.\..+=/)) {
				m = arg.match(/^-([^=]+)=([\s\S]*)$/)
				if (m !== null && Array.isArray(m) && m.length >= 3) {
					setArg(m[1], m[2])
				}
			} else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
				next = args[i + 1]
				m = arg.match(/^-(.\..+)/)
				if (m !== null && Array.isArray(m) && m.length >= 2) {
					key = m[1]
					if (
						next !== void 0 &&
						!next.match(/^-/) &&
						!checkAllAliases(key, flags.bools) &&
						!checkAllAliases(key, flags.counts)
					) {
						setArg(key, next)
						i++
					} else {
						setArg(key, defaultValue(key))
					}
				}
			} else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
				letters = arg.slice(1, -1).split('')
				broken = false
				for (let j = 0; j < letters.length; j++) {
					next = arg.slice(j + 2)
					if (letters[j + 1] && letters[j + 1] === '=') {
						value = arg.slice(j + 3)
						key = letters[j]
						if (checkAllAliases(key, flags.arrays)) {
							i = eatArray(i, key, args, value)
						} else if (checkAllAliases(key, flags.nargs) !== false) {
							i = eatNargs(i, key, args, value)
						} else {
							setArg(key, value)
						}
						broken = true
						break
					}
					if (next === '-') {
						setArg(letters[j], next)
						continue
					}
					if (
						/[A-Za-z]/.test(letters[j]) &&
						/^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) &&
						checkAllAliases(next, flags.bools) === false
					) {
						setArg(letters[j], next)
						broken = true
						break
					}
					if (letters[j + 1] && letters[j + 1].match(/\W/)) {
						setArg(letters[j], next)
						broken = true
						break
					} else {
						setArg(letters[j], defaultValue(letters[j]))
					}
				}
				key = arg.slice(-1)[0]
				if (!broken && key !== '-') {
					if (checkAllAliases(key, flags.arrays)) {
						i = eatArray(i, key, args)
					} else if (checkAllAliases(key, flags.nargs) !== false) {
						i = eatNargs(i, key, args)
					} else {
						next = args[i + 1]
						if (
							next !== void 0 &&
							(!/^(-|--)[^-]/.test(next) || next.match(negative)) &&
							!checkAllAliases(key, flags.bools) &&
							!checkAllAliases(key, flags.counts)
						) {
							setArg(key, next)
							i++
						} else if (/^(true|false)$/.test(next)) {
							setArg(key, next)
							i++
						} else {
							setArg(key, defaultValue(key))
						}
					}
				}
			} else if (
				arg.match(/^-[0-9]$/) &&
				arg.match(negative) &&
				checkAllAliases(arg.slice(1), flags.bools)
			) {
				key = arg.slice(1)
				setArg(key, defaultValue(key))
			} else if (arg === '--') {
				notFlags = args.slice(i + 1)
				break
			} else if (configuration['halt-at-non-option']) {
				notFlags = args.slice(i)
				break
			} else {
				pushPositional(arg)
			}
		}
		applyEnvVars(argv, true)
		applyEnvVars(argv, false)
		setConfig(argv)
		setConfigObjects()
		applyDefaultsAndAliases(argv, flags.aliases, defaults, true)
		applyCoercions(argv)
		if (configuration['set-placeholder-key']) setPlaceholderKeys(argv)
		Object.keys(flags.counts).forEach(function (key) {
			if (!hasKey(argv, key.split('.'))) setArg(key, 0)
		})
		if (notFlagsOption && notFlags.length) argv[notFlagsArgv] = []
		notFlags.forEach(function (key) {
			argv[notFlagsArgv].push(key)
		})
		if (configuration['camel-case-expansion'] && configuration['strip-dashed']) {
			Object.keys(argv)
				.filter((key) => key !== '--' && key.includes('-'))
				.forEach((key) => {
					delete argv[key]
				})
		}
		if (configuration['strip-aliased']) {
			;[].concat(...Object.keys(aliases).map((k) => aliases[k])).forEach((alias) => {
				if (configuration['camel-case-expansion'] && alias.includes('-')) {
					delete argv[
						alias
							.split('.')
							.map((prop) => camelCase(prop))
							.join('.')
					]
				}
				delete argv[alias]
			})
		}
		function pushPositional(arg) {
			const maybeCoercedNumber = maybeCoerceNumber('_', arg)
			if (typeof maybeCoercedNumber === 'string' || typeof maybeCoercedNumber === 'number') {
				argv._.push(maybeCoercedNumber)
			}
		}
		function eatNargs(i, key, args2, argAfterEqualSign) {
			let ii
			let toEat = checkAllAliases(key, flags.nargs)
			toEat = typeof toEat !== 'number' || isNaN(toEat) ? 1 : toEat
			if (toEat === 0) {
				if (!isUndefined(argAfterEqualSign)) {
					error = Error(__('Argument unexpected for: %s', key))
				}
				setArg(key, defaultValue(key))
				return i
			}
			let available = isUndefined(argAfterEqualSign) ? 0 : 1
			if (configuration['nargs-eats-options']) {
				if (args2.length - (i + 1) + available < toEat) {
					error = Error(__('Not enough arguments following: %s', key))
				}
				available = toEat
			} else {
				for (ii = i + 1; ii < args2.length; ii++) {
					if (
						!args2[ii].match(/^-[^0-9]/) ||
						args2[ii].match(negative) ||
						isUnknownOptionAsArg(args2[ii])
					)
						available++
					else break
				}
				if (available < toEat) error = Error(__('Not enough arguments following: %s', key))
			}
			let consumed = Math.min(available, toEat)
			if (!isUndefined(argAfterEqualSign) && consumed > 0) {
				setArg(key, argAfterEqualSign)
				consumed--
			}
			for (ii = i + 1; ii < consumed + i + 1; ii++) {
				setArg(key, args2[ii])
			}
			return i + consumed
		}
		function eatArray(i, key, args2, argAfterEqualSign) {
			let argsToSet = []
			let next = argAfterEqualSign || args2[i + 1]
			const nargsCount = checkAllAliases(key, flags.nargs)
			if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
				argsToSet.push(true)
			} else if (
				isUndefined(next) ||
				(isUndefined(argAfterEqualSign) &&
					/^-/.test(next) &&
					!negative.test(next) &&
					!isUnknownOptionAsArg(next))
			) {
				if (defaults[key] !== void 0) {
					const defVal = defaults[key]
					argsToSet = Array.isArray(defVal) ? defVal : [defVal]
				}
			} else {
				if (!isUndefined(argAfterEqualSign)) {
					argsToSet.push(processValue(key, argAfterEqualSign, true))
				}
				for (let ii = i + 1; ii < args2.length; ii++) {
					if (
						(!configuration['greedy-arrays'] && argsToSet.length > 0) ||
						(nargsCount && typeof nargsCount === 'number' && argsToSet.length >= nargsCount)
					)
						break
					next = args2[ii]
					if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) break
					i = ii
					argsToSet.push(processValue(key, next, inputIsString))
				}
			}
			if (
				typeof nargsCount === 'number' &&
				((nargsCount && argsToSet.length < nargsCount) ||
					(isNaN(nargsCount) && argsToSet.length === 0))
			) {
				error = Error(__('Not enough arguments following: %s', key))
			}
			setArg(key, argsToSet)
			return i
		}
		function setArg(key, val, shouldStripQuotes = inputIsString) {
			if (/-/.test(key) && configuration['camel-case-expansion']) {
				const alias = key
					.split('.')
					.map(function (prop) {
						return camelCase(prop)
					})
					.join('.')
				addNewAlias(key, alias)
			}
			const value = processValue(key, val, shouldStripQuotes)
			const splitKey = key.split('.')
			setKey(argv, splitKey, value)
			if (flags.aliases[key]) {
				flags.aliases[key].forEach(function (x) {
					const keyProperties = x.split('.')
					setKey(argv, keyProperties, value)
				})
			}
			if (splitKey.length > 1 && configuration['dot-notation']) {
				;(flags.aliases[splitKey[0]] || []).forEach(function (x) {
					let keyProperties = x.split('.')
					const a = [].concat(splitKey)
					a.shift()
					keyProperties = keyProperties.concat(a)
					if (!(flags.aliases[key] || []).includes(keyProperties.join('.'))) {
						setKey(argv, keyProperties, value)
					}
				})
			}
			if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
				const keys2 = [key].concat(flags.aliases[key] || [])
				keys2.forEach(function (key2) {
					Object.defineProperty(argvReturn, key2, {
						enumerable: true,
						get() {
							return val
						},
						set(value2) {
							val = typeof value2 === 'string' ? mixin2.normalize(value2) : value2
						},
					})
				})
			}
		}
		function addNewAlias(key, alias) {
			if (!(flags.aliases[key] && flags.aliases[key].length)) {
				flags.aliases[key] = [alias]
				newAliases[alias] = true
			}
			if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
				addNewAlias(alias, key)
			}
		}
		function processValue(key, val, shouldStripQuotes) {
			if (shouldStripQuotes) {
				val = stripQuotes(val)
			}
			if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
				if (typeof val === 'string') val = val === 'true'
			}
			let value = Array.isArray(val)
				? val.map(function (v) {
						return maybeCoerceNumber(key, v)
					})
				: maybeCoerceNumber(key, val)
			if (
				checkAllAliases(key, flags.counts) &&
				(isUndefined(value) || typeof value === 'boolean')
			) {
				value = increment()
			}
			if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
				if (Array.isArray(val))
					value = val.map((val2) => {
						return mixin2.normalize(val2)
					})
				else value = mixin2.normalize(val)
			}
			return value
		}
		function maybeCoerceNumber(key, value) {
			if (!configuration['parse-positional-numbers'] && key === '_') return value
			if (
				!checkAllAliases(key, flags.strings) &&
				!checkAllAliases(key, flags.bools) &&
				!Array.isArray(value)
			) {
				const shouldCoerceNumber =
					looksLikeNumber(value) &&
					configuration['parse-numbers'] &&
					Number.isSafeInteger(Math.floor(parseFloat(`${value}`)))
				if (shouldCoerceNumber || (!isUndefined(value) && checkAllAliases(key, flags.numbers))) {
					value = Number(value)
				}
			}
			return value
		}
		function setConfig(argv2) {
			const configLookup = /* @__PURE__ */ Object.create(null)
			applyDefaultsAndAliases(configLookup, flags.aliases, defaults)
			Object.keys(flags.configs).forEach(function (configKey) {
				const configPath = argv2[configKey] || configLookup[configKey]
				if (configPath) {
					try {
						let config = null
						const resolvedConfigPath = mixin2.resolve(mixin2.cwd(), configPath)
						const resolveConfig = flags.configs[configKey]
						if (typeof resolveConfig === 'function') {
							try {
								config = resolveConfig(resolvedConfigPath)
							} catch (e) {
								config = e
							}
							if (config instanceof Error) {
								error = config
								return
							}
						} else {
							config = mixin2.require(resolvedConfigPath)
						}
						setConfigObject(config)
					} catch (ex) {
						if (ex.name === 'PermissionDenied') error = ex
						else if (argv2[configKey]) error = Error(__('Invalid JSON config file: %s', configPath))
					}
				}
			})
		}
		function setConfigObject(config, prev) {
			Object.keys(config).forEach(function (key) {
				const value = config[key]
				const fullKey = prev ? prev + '.' + key : key
				if (
					typeof value === 'object' &&
					value !== null &&
					!Array.isArray(value) &&
					configuration['dot-notation']
				) {
					setConfigObject(value, fullKey)
				} else {
					if (
						!hasKey(argv, fullKey.split('.')) ||
						(checkAllAliases(fullKey, flags.arrays) && configuration['combine-arrays'])
					) {
						setArg(fullKey, value)
					}
				}
			})
		}
		function setConfigObjects() {
			if (typeof configObjects !== 'undefined') {
				configObjects.forEach(function (configObject) {
					setConfigObject(configObject)
				})
			}
		}
		function applyEnvVars(argv2, configOnly) {
			if (typeof envPrefix === 'undefined') return
			const prefix = typeof envPrefix === 'string' ? envPrefix : ''
			const env4 = mixin2.env()
			Object.keys(env4).forEach(function (envVar) {
				if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
					const keys2 = envVar.split('__').map(function (key, i) {
						if (i === 0) {
							key = key.substring(prefix.length)
						}
						return camelCase(key)
					})
					if (
						((configOnly && flags.configs[keys2.join('.')]) || !configOnly) &&
						!hasKey(argv2, keys2)
					) {
						setArg(keys2.join('.'), env4[envVar])
					}
				}
			})
		}
		function applyCoercions(argv2) {
			let coerce2
			const applied = /* @__PURE__ */ new Set()
			Object.keys(argv2).forEach(function (key) {
				if (!applied.has(key)) {
					coerce2 = checkAllAliases(key, flags.coercions)
					if (typeof coerce2 === 'function') {
						try {
							const value = maybeCoerceNumber(key, coerce2(argv2[key]))
							;[].concat(flags.aliases[key] || [], key).forEach((ali) => {
								applied.add(ali)
								argv2[ali] = value
							})
						} catch (err) {
							error = err
						}
					}
				}
			})
		}
		function setPlaceholderKeys(argv2) {
			flags.keys.forEach((key) => {
				if (~key.indexOf('.')) return
				if (typeof argv2[key] === 'undefined') argv2[key] = void 0
			})
			return argv2
		}
		function applyDefaultsAndAliases(obj, aliases2, defaults2, canLog = false) {
			Object.keys(defaults2).forEach(function (key) {
				if (!hasKey(obj, key.split('.'))) {
					setKey(obj, key.split('.'), defaults2[key])
					if (canLog) defaulted[key] = true
					;(aliases2[key] || []).forEach(function (x) {
						if (hasKey(obj, x.split('.'))) return
						setKey(obj, x.split('.'), defaults2[key])
					})
				}
			})
		}
		function hasKey(obj, keys2) {
			let o = obj
			if (!configuration['dot-notation']) keys2 = [keys2.join('.')]
			keys2.slice(0, -1).forEach(function (key2) {
				o = o[key2] || {}
			})
			const key = keys2[keys2.length - 1]
			if (typeof o !== 'object') return false
			else return key in o
		}
		function setKey(obj, keys2, value) {
			let o = obj
			if (!configuration['dot-notation']) keys2 = [keys2.join('.')]
			keys2.slice(0, -1).forEach(function (key2) {
				key2 = sanitizeKey(key2)
				if (typeof o === 'object' && o[key2] === void 0) {
					o[key2] = {}
				}
				if (typeof o[key2] !== 'object' || Array.isArray(o[key2])) {
					if (Array.isArray(o[key2])) {
						o[key2].push({})
					} else {
						o[key2] = [o[key2], {}]
					}
					o = o[key2][o[key2].length - 1]
				} else {
					o = o[key2]
				}
			})
			const key = sanitizeKey(keys2[keys2.length - 1])
			const isTypeArray = checkAllAliases(keys2.join('.'), flags.arrays)
			const isValueArray = Array.isArray(value)
			let duplicate = configuration['duplicate-arguments-array']
			if (!duplicate && checkAllAliases(key, flags.nargs)) {
				duplicate = true
				if (
					(!isUndefined(o[key]) && flags.nargs[key] === 1) ||
					(Array.isArray(o[key]) && o[key].length === flags.nargs[key])
				) {
					o[key] = void 0
				}
			}
			if (value === increment()) {
				o[key] = increment(o[key])
			} else if (Array.isArray(o[key])) {
				if (duplicate && isTypeArray && isValueArray) {
					o[key] = configuration['flatten-duplicate-arrays']
						? o[key].concat(value)
						: (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value])
				} else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
					o[key] = value
				} else {
					o[key] = o[key].concat([value])
				}
			} else if (o[key] === void 0 && isTypeArray) {
				o[key] = isValueArray ? value : [value]
			} else if (
				duplicate &&
				!(
					o[key] === void 0 ||
					checkAllAliases(key, flags.counts) ||
					checkAllAliases(key, flags.bools)
				)
			) {
				o[key] = [o[key], value]
			} else {
				o[key] = value
			}
		}
		function extendAliases(...args2) {
			args2.forEach(function (obj) {
				Object.keys(obj || {}).forEach(function (key) {
					if (flags.aliases[key]) return
					flags.aliases[key] = [].concat(aliases[key] || [])
					flags.aliases[key].concat(key).forEach(function (x) {
						if (/-/.test(x) && configuration['camel-case-expansion']) {
							const c = camelCase(x)
							if (c !== key && flags.aliases[key].indexOf(c) === -1) {
								flags.aliases[key].push(c)
								newAliases[c] = true
							}
						}
					})
					flags.aliases[key].concat(key).forEach(function (x) {
						if (x.length > 1 && /[A-Z]/.test(x) && configuration['camel-case-expansion']) {
							const c = decamelize(x, '-')
							if (c !== key && flags.aliases[key].indexOf(c) === -1) {
								flags.aliases[key].push(c)
								newAliases[c] = true
							}
						}
					})
					flags.aliases[key].forEach(function (x) {
						flags.aliases[x] = [key].concat(
							flags.aliases[key].filter(function (y) {
								return x !== y
							}),
						)
					})
				})
			})
		}
		function checkAllAliases(key, flag) {
			const toCheck = [].concat(flags.aliases[key] || [], key)
			const keys2 = Object.keys(flag)
			const setAlias = toCheck.find((key2) => keys2.includes(key2))
			return setAlias ? flag[setAlias] : false
		}
		function hasAnyFlag(key) {
			const flagsKeys = Object.keys(flags)
			const toCheck = [].concat(flagsKeys.map((k) => flags[k]))
			return toCheck.some(function (flag) {
				return Array.isArray(flag) ? flag.includes(key) : flag[key]
			})
		}
		function hasFlagsMatching(arg, ...patterns) {
			const toCheck = [].concat(...patterns)
			return toCheck.some(function (pattern) {
				const match = arg.match(pattern)
				return match && hasAnyFlag(match[1])
			})
		}
		function hasAllShortFlags(arg) {
			if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
				return false
			}
			let hasAllFlags = true
			let next
			const letters = arg.slice(1).split('')
			for (let j = 0; j < letters.length; j++) {
				next = arg.slice(j + 2)
				if (!hasAnyFlag(letters[j])) {
					hasAllFlags = false
					break
				}
				if (
					(letters[j + 1] && letters[j + 1] === '=') ||
					next === '-' ||
					(/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) ||
					(letters[j + 1] && letters[j + 1].match(/\W/))
				) {
					break
				}
			}
			return hasAllFlags
		}
		function isUnknownOptionAsArg(arg) {
			return configuration['unknown-options-as-args'] && isUnknownOption(arg)
		}
		function isUnknownOption(arg) {
			arg = arg.replace(/^-{3,}/, '--')
			if (arg.match(negative)) {
				return false
			}
			if (hasAllShortFlags(arg)) {
				return false
			}
			const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/
			const normalFlag = /^-+([^=]+?)$/
			const flagEndingInHyphen = /^-+([^=]+?)-$/
			const flagEndingInDigits = /^-+([^=]+?\d+)$/
			const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/
			return !hasFlagsMatching(
				arg,
				flagWithEquals,
				negatedBoolean,
				normalFlag,
				flagEndingInHyphen,
				flagEndingInDigits,
				flagEndingInNonWordCharacters,
			)
		}
		function defaultValue(key) {
			if (
				!checkAllAliases(key, flags.bools) &&
				!checkAllAliases(key, flags.counts) &&
				`${key}` in defaults
			) {
				return defaults[key]
			} else {
				return defaultForType(guessType2(key))
			}
		}
		function defaultForType(type) {
			const def = {
				[DefaultValuesForTypeKey.BOOLEAN]: true,
				[DefaultValuesForTypeKey.STRING]: '',
				[DefaultValuesForTypeKey.NUMBER]: void 0,
				[DefaultValuesForTypeKey.ARRAY]: [],
			}
			return def[type]
		}
		function guessType2(key) {
			let type = DefaultValuesForTypeKey.BOOLEAN
			if (checkAllAliases(key, flags.strings)) type = DefaultValuesForTypeKey.STRING
			else if (checkAllAliases(key, flags.numbers)) type = DefaultValuesForTypeKey.NUMBER
			else if (checkAllAliases(key, flags.bools)) type = DefaultValuesForTypeKey.BOOLEAN
			else if (checkAllAliases(key, flags.arrays)) type = DefaultValuesForTypeKey.ARRAY
			return type
		}
		function isUndefined(num) {
			return num === void 0
		}
		function checkConfiguration() {
			Object.keys(flags.counts).find((key) => {
				if (checkAllAliases(key, flags.arrays)) {
					error = Error(__('Invalid configuration: %s, opts.count excludes opts.array.', key))
					return true
				} else if (checkAllAliases(key, flags.nargs)) {
					error = Error(__('Invalid configuration: %s, opts.count excludes opts.narg.', key))
					return true
				}
				return false
			})
		}
		return {
			aliases: Object.assign({}, flags.aliases),
			argv: Object.assign(argvReturn, argv),
			configuration,
			defaulted: Object.assign({}, defaulted),
			error,
			newAliases: Object.assign({}, newAliases),
		}
	}
}
function combineAliases(aliases) {
	const aliasArrays = []
	const combined = /* @__PURE__ */ Object.create(null)
	let change = true
	Object.keys(aliases).forEach(function (key) {
		aliasArrays.push([].concat(aliases[key], key))
	})
	while (change) {
		change = false
		for (let i = 0; i < aliasArrays.length; i++) {
			for (let ii = i + 1; ii < aliasArrays.length; ii++) {
				const intersect = aliasArrays[i].filter(function (v) {
					return aliasArrays[ii].indexOf(v) !== -1
				})
				if (intersect.length) {
					aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii])
					aliasArrays.splice(ii, 1)
					change = true
					break
				}
			}
		}
	}
	aliasArrays.forEach(function (aliasArray) {
		aliasArray = aliasArray.filter(function (v, i, self2) {
			return self2.indexOf(v) === i
		})
		const lastAlias = aliasArray.pop()
		if (lastAlias !== void 0 && typeof lastAlias === 'string') {
			combined[lastAlias] = aliasArray
		}
	})
	return combined
}
function increment(orig) {
	return orig !== void 0 ? orig + 1 : 1
}
function sanitizeKey(key) {
	if (key === '__proto__') return '___proto___'
	return key
}
function stripQuotes(val) {
	return typeof val === 'string' &&
		(val[0] === "'" || val[0] === '"') &&
		val[val.length - 1] === val[0]
		? val.substring(1, val.length - 1)
		: val
}

// ../../node_modules/.pnpm/yargs-parser@21.1.1/node_modules/yargs-parser/build/lib/index.js
import { readFileSync } from 'fs'
var _a
var _b
var _c
var minNodeVersion =
	process && process.env && process.env.YARGS_MIN_NODE_VERSION
		? Number(process.env.YARGS_MIN_NODE_VERSION)
		: 12
var nodeVersion =
	(_b =
		(_a = process === null || process === void 0 ? void 0 : process.versions) === null ||
		_a === void 0
			? void 0
			: _a.node) !== null && _b !== void 0
		? _b
		: (_c = process === null || process === void 0 ? void 0 : process.version) === null ||
			  _c === void 0
			? void 0
			: _c.slice(1)
if (nodeVersion) {
	const major = Number(nodeVersion.match(/^([^.]+)/)[1])
	if (major < minNodeVersion) {
		throw Error(
			`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`,
		)
	}
}
var env3 = process ? process.env : {}
var parser = new YargsParser({
	cwd: process.cwd,
	env: () => {
		return env3
	},
	format,
	normalize,
	resolve: resolve2,
	// TODO: figure  out a  way to combine ESM and CJS coverage, such  that
	// we can exercise all the lines below:
	require: (path8) => {
		if (typeof __require !== 'undefined') {
			return __require(path8)
		} else if (path8.match(/\.json$/)) {
			return JSON.parse(readFileSync(path8, 'utf8'))
		} else {
			throw Error('only .json config files are supported in ESM')
		}
	},
})
var yargsParser = function Parser(args, opts) {
	const result = parser.parse(args.slice(), opts)
	return result.argv
}
yargsParser.detailed = function (args, opts) {
	return parser.parse(args.slice(), opts)
}
yargsParser.camelCase = camelCase
yargsParser.decamelize = decamelize
yargsParser.looksLikeNumber = looksLikeNumber
var lib_default = yargsParser

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/lib/platform-shims/esm.mjs
import { basename, dirname as dirname2, extname, relative, resolve as resolve4 } from 'path'

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/process-argv.js
function getProcessArgvBinIndex() {
	if (isBundledElectronApp()) return 0
	return 1
}
function isBundledElectronApp() {
	return isElectronApp() && !process.defaultApp
}
function isElectronApp() {
	return !!process.versions.electron
}
function hideBin(argv) {
	return argv.slice(getProcessArgvBinIndex() + 1)
}
function getProcessArgvBin() {
	return process.argv[getProcessArgvBinIndex()]
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/yerror.js
var YError = class _YError extends Error {
	constructor(msg) {
		super(msg || 'yargs error')
		this.name = 'YError'
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, _YError)
		}
	}
}

// ../../node_modules/.pnpm/y18n@5.0.8/node_modules/y18n/build/lib/platform-shims/node.js
import { readFileSync as readFileSync2, statSync as statSync2, writeFile } from 'fs'
import { format as format2 } from 'util'
import { resolve as resolve3 } from 'path'
var node_default = {
	fs: {
		readFileSync: readFileSync2,
		writeFile,
	},
	format: format2,
	resolve: resolve3,
	exists: (file) => {
		try {
			return statSync2(file).isFile()
		} catch (err) {
			return false
		}
	},
}

// ../../node_modules/.pnpm/y18n@5.0.8/node_modules/y18n/build/lib/index.js
var shim
var Y18N = class {
	constructor(opts) {
		opts = opts || {}
		this.directory = opts.directory || './locales'
		this.updateFiles = typeof opts.updateFiles === 'boolean' ? opts.updateFiles : true
		this.locale = opts.locale || 'en'
		this.fallbackToLanguage =
			typeof opts.fallbackToLanguage === 'boolean' ? opts.fallbackToLanguage : true
		this.cache = /* @__PURE__ */ Object.create(null)
		this.writeQueue = []
	}
	__(...args) {
		if (typeof arguments[0] !== 'string') {
			return this._taggedLiteral(arguments[0], ...arguments)
		}
		const str = args.shift()
		let cb = function () {}
		if (typeof args[args.length - 1] === 'function') cb = args.pop()
		cb = cb || function () {}
		if (!this.cache[this.locale]) this._readLocaleFile()
		if (!this.cache[this.locale][str] && this.updateFiles) {
			this.cache[this.locale][str] = str
			this._enqueueWrite({
				directory: this.directory,
				locale: this.locale,
				cb,
			})
		} else {
			cb()
		}
		return shim.format.apply(shim.format, [this.cache[this.locale][str] || str].concat(args))
	}
	__n() {
		const args = Array.prototype.slice.call(arguments)
		const singular = args.shift()
		const plural = args.shift()
		const quantity = args.shift()
		let cb = function () {}
		if (typeof args[args.length - 1] === 'function') cb = args.pop()
		if (!this.cache[this.locale]) this._readLocaleFile()
		let str = quantity === 1 ? singular : plural
		if (this.cache[this.locale][singular]) {
			const entry = this.cache[this.locale][singular]
			str = entry[quantity === 1 ? 'one' : 'other']
		}
		if (!this.cache[this.locale][singular] && this.updateFiles) {
			this.cache[this.locale][singular] = {
				one: singular,
				other: plural,
			}
			this._enqueueWrite({
				directory: this.directory,
				locale: this.locale,
				cb,
			})
		} else {
			cb()
		}
		const values = [str]
		if (~str.indexOf('%d')) values.push(quantity)
		return shim.format.apply(shim.format, values.concat(args))
	}
	setLocale(locale) {
		this.locale = locale
	}
	getLocale() {
		return this.locale
	}
	updateLocale(obj) {
		if (!this.cache[this.locale]) this._readLocaleFile()
		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				this.cache[this.locale][key] = obj[key]
			}
		}
	}
	_taggedLiteral(parts, ...args) {
		let str = ''
		parts.forEach(function (part, i) {
			const arg = args[i + 1]
			str += part
			if (typeof arg !== 'undefined') {
				str += '%s'
			}
		})
		return this.__.apply(this, [str].concat([].slice.call(args, 1)))
	}
	_enqueueWrite(work) {
		this.writeQueue.push(work)
		if (this.writeQueue.length === 1) this._processWriteQueue()
	}
	_processWriteQueue() {
		const _this = this
		const work = this.writeQueue[0]
		const directory = work.directory
		const locale = work.locale
		const cb = work.cb
		const languageFile = this._resolveLocaleFile(directory, locale)
		const serializedLocale = JSON.stringify(this.cache[locale], null, 2)
		shim.fs.writeFile(languageFile, serializedLocale, 'utf-8', function (err) {
			_this.writeQueue.shift()
			if (_this.writeQueue.length > 0) _this._processWriteQueue()
			cb(err)
		})
	}
	_readLocaleFile() {
		let localeLookup = {}
		const languageFile = this._resolveLocaleFile(this.directory, this.locale)
		try {
			if (shim.fs.readFileSync) {
				localeLookup = JSON.parse(shim.fs.readFileSync(languageFile, 'utf-8'))
			}
		} catch (err) {
			if (err instanceof SyntaxError) {
				err.message = 'syntax error in ' + languageFile
			}
			if (err.code === 'ENOENT') localeLookup = {}
			else throw err
		}
		this.cache[this.locale] = localeLookup
	}
	_resolveLocaleFile(directory, locale) {
		let file = shim.resolve(directory, './', locale + '.json')
		if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale.lastIndexOf('_')) {
			const languageFile = shim.resolve(directory, './', locale.split('_')[0] + '.json')
			if (this._fileExistsSync(languageFile)) file = languageFile
		}
		return file
	}
	_fileExistsSync(file) {
		return shim.exists(file)
	}
}
function y18n(opts, _shim) {
	shim = _shim
	const y18n3 = new Y18N(opts)
	return {
		__: y18n3.__.bind(y18n3),
		__n: y18n3.__n.bind(y18n3),
		setLocale: y18n3.setLocale.bind(y18n3),
		getLocale: y18n3.getLocale.bind(y18n3),
		updateLocale: y18n3.updateLocale.bind(y18n3),
		locale: y18n3.locale,
	}
}

// ../../node_modules/.pnpm/y18n@5.0.8/node_modules/y18n/index.mjs
var y18n2 = (opts) => {
	return y18n(opts, node_default)
}
var y18n_default = y18n2

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/lib/platform-shims/esm.mjs
var REQUIRE_ERROR = 'require is not supported by ESM'
var REQUIRE_DIRECTORY_ERROR = 'loading a directory of commands is not supported yet for ESM'
var __dirname
try {
	__dirname = fileURLToPath6(import.meta.url)
} catch (e) {
	__dirname = process.cwd()
}
var mainFilename = __dirname.substring(0, __dirname.lastIndexOf('node_modules'))
var esm_default2 = {
	assert: {
		notStrictEqual,
		strictEqual,
	},
	cliui: ui,
	findUp: sync_default,
	getEnv: (key) => {
		return process.env[key]
	},
	inspect,
	getCallerFile: () => {
		throw new YError(REQUIRE_DIRECTORY_ERROR)
	},
	getProcessArgvBin,
	mainFilename: mainFilename || process.cwd(),
	Parser: lib_default,
	path: {
		basename,
		dirname: dirname2,
		extname,
		relative,
		resolve: resolve4,
	},
	process: {
		argv: () => process.argv,
		cwd: process.cwd,
		emitWarning: (warning, type) => process.emitWarning(warning, type),
		execPath: () => process.execPath,
		exit: process.exit,
		nextTick: process.nextTick,
		stdColumns: typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null,
	},
	readFileSync: readFileSync3,
	require: () => {
		throw new YError(REQUIRE_ERROR)
	},
	requireDirectory: () => {
		throw new YError(REQUIRE_DIRECTORY_ERROR)
	},
	stringWidth: (str) => {
		return [...str].length
	},
	y18n: y18n_default({
		directory: resolve4(__dirname, '../../../locales'),
		updateFiles: false,
	}),
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/typings/common-types.js
function assertNotStrictEqual(actual, expected, shim3, message) {
	shim3.assert.notStrictEqual(actual, expected, message)
}
function assertSingleKey(actual, shim3) {
	shim3.assert.strictEqual(typeof actual, 'string')
}
function objectKeys(object) {
	return Object.keys(object)
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/is-promise.js
function isPromise(maybePromise) {
	return !!maybePromise && !!maybePromise.then && typeof maybePromise.then === 'function'
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/parse-command.js
function parseCommand(cmd) {
	const extraSpacesStrippedCommand = cmd.replace(/\s{2,}/g, ' ')
	const splitCommand = extraSpacesStrippedCommand.split(/\s+(?![^[]*]|[^<]*>)/)
	const bregex = /\.*[\][<>]/g
	const firstCommand = splitCommand.shift()
	if (!firstCommand) throw new Error(`No command found in: ${cmd}`)
	const parsedCommand = {
		cmd: firstCommand.replace(bregex, ''),
		demanded: [],
		optional: [],
	}
	splitCommand.forEach((cmd2, i) => {
		let variadic = false
		cmd2 = cmd2.replace(/\s/g, '')
		if (/\.+[\]>]/.test(cmd2) && i === splitCommand.length - 1) variadic = true
		if (/^\[/.test(cmd2)) {
			parsedCommand.optional.push({
				cmd: cmd2.replace(bregex, '').split('|'),
				variadic,
			})
		} else {
			parsedCommand.demanded.push({
				cmd: cmd2.replace(bregex, '').split('|'),
				variadic,
			})
		}
	})
	return parsedCommand
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/argsert.js
var positionName = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth']
function argsert(arg1, arg2, arg3) {
	function parseArgs() {
		return typeof arg1 === 'object'
			? [{ demanded: [], optional: [] }, arg1, arg2]
			: [parseCommand(`cmd ${arg1}`), arg2, arg3]
	}
	try {
		let position2 = 0
		const [parsed, callerArguments, _length] = parseArgs()
		const args = [].slice.call(callerArguments)
		while (args.length && args[args.length - 1] === void 0) args.pop()
		const length = _length || args.length
		if (length < parsed.demanded.length) {
			throw new YError(
				`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`,
			)
		}
		const totalCommands = parsed.demanded.length + parsed.optional.length
		if (length > totalCommands) {
			throw new YError(
				`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`,
			)
		}
		parsed.demanded.forEach((demanded) => {
			const arg = args.shift()
			const observedType = guessType(arg)
			const matchingTypes = demanded.cmd.filter((type) => type === observedType || type === '*')
			if (matchingTypes.length === 0) argumentTypeError(observedType, demanded.cmd, position2)
			position2 += 1
		})
		parsed.optional.forEach((optional) => {
			if (args.length === 0) return
			const arg = args.shift()
			const observedType = guessType(arg)
			const matchingTypes = optional.cmd.filter((type) => type === observedType || type === '*')
			if (matchingTypes.length === 0) argumentTypeError(observedType, optional.cmd, position2)
			position2 += 1
		})
	} catch (err) {
		console.warn(err.stack)
	}
}
function guessType(arg) {
	if (Array.isArray(arg)) {
		return 'array'
	} else if (arg === null) {
		return 'null'
	}
	return typeof arg
}
function argumentTypeError(observedType, allowedTypes, position2) {
	throw new YError(
		`Invalid ${positionName[position2] || 'manyith'} argument. Expected ${allowedTypes.join(' or ')} but received ${observedType}.`,
	)
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/middleware.js
var GlobalMiddleware = class {
	constructor(yargs) {
		this.globalMiddleware = []
		this.frozens = []
		this.yargs = yargs
	}
	addMiddleware(callback, applyBeforeValidation, global = true, mutates = false) {
		argsert(
			'<array|function> [boolean] [boolean] [boolean]',
			[callback, applyBeforeValidation, global],
			arguments.length,
		)
		if (Array.isArray(callback)) {
			for (let i = 0; i < callback.length; i++) {
				if (typeof callback[i] !== 'function') {
					throw Error('middleware must be a function')
				}
				const m = callback[i]
				m.applyBeforeValidation = applyBeforeValidation
				m.global = global
			}
			Array.prototype.push.apply(this.globalMiddleware, callback)
		} else if (typeof callback === 'function') {
			const m = callback
			m.applyBeforeValidation = applyBeforeValidation
			m.global = global
			m.mutates = mutates
			this.globalMiddleware.push(callback)
		}
		return this.yargs
	}
	addCoerceMiddleware(callback, option) {
		const aliases = this.yargs.getAliases()
		this.globalMiddleware = this.globalMiddleware.filter((m) => {
			const toCheck = [...(aliases[option] || []), option]
			if (!m.option) return true
			else return !toCheck.includes(m.option)
		})
		callback.option = option
		return this.addMiddleware(callback, true, true, true)
	}
	getMiddleware() {
		return this.globalMiddleware
	}
	freeze() {
		this.frozens.push([...this.globalMiddleware])
	}
	unfreeze() {
		const frozen = this.frozens.pop()
		if (frozen !== void 0) this.globalMiddleware = frozen
	}
	reset() {
		this.globalMiddleware = this.globalMiddleware.filter((m) => m.global)
	}
}
function commandMiddlewareFactory(commandMiddleware) {
	if (!commandMiddleware) return []
	return commandMiddleware.map((middleware) => {
		middleware.applyBeforeValidation = false
		return middleware
	})
}
function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
	return middlewares.reduce((acc, middleware) => {
		if (middleware.applyBeforeValidation !== beforeValidation) {
			return acc
		}
		if (middleware.mutates) {
			if (middleware.applied) return acc
			middleware.applied = true
		}
		if (isPromise(acc)) {
			return acc
				.then((initialObj) => Promise.all([initialObj, middleware(initialObj, yargs)]))
				.then(([initialObj, middlewareObj]) => Object.assign(initialObj, middlewareObj))
		} else {
			const result = middleware(acc, yargs)
			return isPromise(result)
				? result.then((middlewareObj) => Object.assign(acc, middlewareObj))
				: Object.assign(acc, result)
		}
	}, argv)
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/maybe-async-result.js
function maybeAsyncResult(
	getResult,
	resultHandler,
	errorHandler = (err) => {
		throw err
	},
) {
	try {
		const result = isFunction(getResult) ? getResult() : getResult
		return isPromise(result)
			? result.then((result2) => resultHandler(result2))
			: resultHandler(result)
	} catch (err) {
		return errorHandler(err)
	}
}
function isFunction(arg) {
	return typeof arg === 'function'
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/which-module.js
function whichModule(exported) {
	if (typeof __require === 'undefined') return null
	for (let i = 0, files = Object.keys(__require.cache), mod; i < files.length; i++) {
		mod = __require.cache[files[i]]
		if (mod.exports === exported) return mod
	}
	return null
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/command.js
var DEFAULT_MARKER = /(^\*)|(^\$0)/
var CommandInstance = class {
	constructor(usage2, validation2, globalMiddleware, shim3) {
		this.requireCache = /* @__PURE__ */ new Set()
		this.handlers = {}
		this.aliasMap = {}
		this.frozens = []
		this.shim = shim3
		this.usage = usage2
		this.globalMiddleware = globalMiddleware
		this.validation = validation2
	}
	addDirectory(dir, req, callerFile, opts) {
		opts = opts || {}
		if (typeof opts.recurse !== 'boolean') opts.recurse = false
		if (!Array.isArray(opts.extensions)) opts.extensions = ['js']
		const parentVisit = typeof opts.visit === 'function' ? opts.visit : (o) => o
		opts.visit = (obj, joined, filename) => {
			const visited = parentVisit(obj, joined, filename)
			if (visited) {
				if (this.requireCache.has(joined)) return visited
				else this.requireCache.add(joined)
				this.addHandler(visited)
			}
			return visited
		}
		this.shim.requireDirectory({ require: req, filename: callerFile }, dir, opts)
	}
	addHandler(cmd, description, builder, handler, commandMiddleware, deprecated) {
		let aliases = []
		const middlewares = commandMiddlewareFactory(commandMiddleware)
		handler = handler || (() => {})
		if (Array.isArray(cmd)) {
			if (isCommandAndAliases(cmd)) {
				;[cmd, ...aliases] = cmd
			} else {
				for (const command2 of cmd) {
					this.addHandler(command2)
				}
			}
		} else if (isCommandHandlerDefinition(cmd)) {
			let command2 =
				Array.isArray(cmd.command) || typeof cmd.command === 'string'
					? cmd.command
					: this.moduleName(cmd)
			if (cmd.aliases) command2 = [].concat(command2).concat(cmd.aliases)
			this.addHandler(
				command2,
				this.extractDesc(cmd),
				cmd.builder,
				cmd.handler,
				cmd.middlewares,
				cmd.deprecated,
			)
			return
		} else if (isCommandBuilderDefinition(builder)) {
			this.addHandler(
				[cmd].concat(aliases),
				description,
				builder.builder,
				builder.handler,
				builder.middlewares,
				builder.deprecated,
			)
			return
		}
		if (typeof cmd === 'string') {
			const parsedCommand = parseCommand(cmd)
			aliases = aliases.map((alias) => parseCommand(alias).cmd)
			let isDefault = false
			const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
				if (DEFAULT_MARKER.test(c)) {
					isDefault = true
					return false
				}
				return true
			})
			if (parsedAliases.length === 0 && isDefault) parsedAliases.push('$0')
			if (isDefault) {
				parsedCommand.cmd = parsedAliases[0]
				aliases = parsedAliases.slice(1)
				cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd)
			}
			aliases.forEach((alias) => {
				this.aliasMap[alias] = parsedCommand.cmd
			})
			if (description !== false) {
				this.usage.command(cmd, description, isDefault, aliases, deprecated)
			}
			this.handlers[parsedCommand.cmd] = {
				original: cmd,
				description,
				handler,
				builder: builder || {},
				middlewares,
				deprecated,
				demanded: parsedCommand.demanded,
				optional: parsedCommand.optional,
			}
			if (isDefault) this.defaultCommand = this.handlers[parsedCommand.cmd]
		}
	}
	getCommandHandlers() {
		return this.handlers
	}
	getCommands() {
		return Object.keys(this.handlers).concat(Object.keys(this.aliasMap))
	}
	hasDefaultCommand() {
		return !!this.defaultCommand
	}
	runCommand(command2, yargs, parsed, commandIndex, helpOnly, helpOrVersionSet) {
		const commandHandler =
			this.handlers[command2] || this.handlers[this.aliasMap[command2]] || this.defaultCommand
		const currentContext = yargs.getInternalMethods().getContext()
		const parentCommands = currentContext.commands.slice()
		const isDefaultCommand = !command2
		if (command2) {
			currentContext.commands.push(command2)
			currentContext.fullCommands.push(commandHandler.original)
		}
		const builderResult = this.applyBuilderUpdateUsageAndParse(
			isDefaultCommand,
			commandHandler,
			yargs,
			parsed.aliases,
			parentCommands,
			commandIndex,
			helpOnly,
			helpOrVersionSet,
		)
		return isPromise(builderResult)
			? builderResult.then((result) =>
					this.applyMiddlewareAndGetResult(
						isDefaultCommand,
						commandHandler,
						result.innerArgv,
						currentContext,
						helpOnly,
						result.aliases,
						yargs,
					),
				)
			: this.applyMiddlewareAndGetResult(
					isDefaultCommand,
					commandHandler,
					builderResult.innerArgv,
					currentContext,
					helpOnly,
					builderResult.aliases,
					yargs,
				)
	}
	applyBuilderUpdateUsageAndParse(
		isDefaultCommand,
		commandHandler,
		yargs,
		aliases,
		parentCommands,
		commandIndex,
		helpOnly,
		helpOrVersionSet,
	) {
		const builder = commandHandler.builder
		let innerYargs = yargs
		if (isCommandBuilderCallback(builder)) {
			yargs.getInternalMethods().getUsageInstance().freeze()
			const builderOutput = builder(yargs.getInternalMethods().reset(aliases), helpOrVersionSet)
			if (isPromise(builderOutput)) {
				return builderOutput.then((output) => {
					innerYargs = isYargsInstance(output) ? output : yargs
					return this.parseAndUpdateUsage(
						isDefaultCommand,
						commandHandler,
						innerYargs,
						parentCommands,
						commandIndex,
						helpOnly,
					)
				})
			}
		} else if (isCommandBuilderOptionDefinitions(builder)) {
			yargs.getInternalMethods().getUsageInstance().freeze()
			innerYargs = yargs.getInternalMethods().reset(aliases)
			Object.keys(commandHandler.builder).forEach((key) => {
				innerYargs.option(key, builder[key])
			})
		}
		return this.parseAndUpdateUsage(
			isDefaultCommand,
			commandHandler,
			innerYargs,
			parentCommands,
			commandIndex,
			helpOnly,
		)
	}
	parseAndUpdateUsage(
		isDefaultCommand,
		commandHandler,
		innerYargs,
		parentCommands,
		commandIndex,
		helpOnly,
	) {
		if (isDefaultCommand) innerYargs.getInternalMethods().getUsageInstance().unfreeze(true)
		if (this.shouldUpdateUsage(innerYargs)) {
			innerYargs
				.getInternalMethods()
				.getUsageInstance()
				.usage(
					this.usageFromParentCommandsCommandHandler(parentCommands, commandHandler),
					commandHandler.description,
				)
		}
		const innerArgv = innerYargs
			.getInternalMethods()
			.runYargsParserAndExecuteCommands(null, void 0, true, commandIndex, helpOnly)
		return isPromise(innerArgv)
			? innerArgv.then((argv) => ({
					aliases: innerYargs.parsed.aliases,
					innerArgv: argv,
				}))
			: {
					aliases: innerYargs.parsed.aliases,
					innerArgv,
				}
	}
	shouldUpdateUsage(yargs) {
		return (
			!yargs.getInternalMethods().getUsageInstance().getUsageDisabled() &&
			yargs.getInternalMethods().getUsageInstance().getUsage().length === 0
		)
	}
	usageFromParentCommandsCommandHandler(parentCommands, commandHandler) {
		const c = DEFAULT_MARKER.test(commandHandler.original)
			? commandHandler.original.replace(DEFAULT_MARKER, '').trim()
			: commandHandler.original
		const pc = parentCommands.filter((c2) => {
			return !DEFAULT_MARKER.test(c2)
		})
		pc.push(c)
		return `$0 ${pc.join(' ')}`
	}
	handleValidationAndGetResult(
		isDefaultCommand,
		commandHandler,
		innerArgv,
		currentContext,
		aliases,
		yargs,
		middlewares,
		positionalMap,
	) {
		if (!yargs.getInternalMethods().getHasOutput()) {
			const validation2 = yargs
				.getInternalMethods()
				.runValidation(aliases, positionalMap, yargs.parsed.error, isDefaultCommand)
			innerArgv = maybeAsyncResult(innerArgv, (result) => {
				validation2(result)
				return result
			})
		}
		if (commandHandler.handler && !yargs.getInternalMethods().getHasOutput()) {
			yargs.getInternalMethods().setHasOutput()
			const populateDoubleDash = !!yargs.getOptions().configuration['populate--']
			yargs.getInternalMethods().postProcess(innerArgv, populateDoubleDash, false, false)
			innerArgv = applyMiddleware(innerArgv, yargs, middlewares, false)
			innerArgv = maybeAsyncResult(innerArgv, (result) => {
				const handlerResult = commandHandler.handler(result)
				return isPromise(handlerResult) ? handlerResult.then(() => result) : result
			})
			if (!isDefaultCommand) {
				yargs.getInternalMethods().getUsageInstance().cacheHelpMessage()
			}
			if (isPromise(innerArgv) && !yargs.getInternalMethods().hasParseCallback()) {
				innerArgv.catch((error) => {
					try {
						yargs.getInternalMethods().getUsageInstance().fail(null, error)
					} catch (_err) {}
				})
			}
		}
		if (!isDefaultCommand) {
			currentContext.commands.pop()
			currentContext.fullCommands.pop()
		}
		return innerArgv
	}
	applyMiddlewareAndGetResult(
		isDefaultCommand,
		commandHandler,
		innerArgv,
		currentContext,
		helpOnly,
		aliases,
		yargs,
	) {
		let positionalMap = {}
		if (helpOnly) return innerArgv
		if (!yargs.getInternalMethods().getHasOutput()) {
			positionalMap = this.populatePositionals(commandHandler, innerArgv, currentContext, yargs)
		}
		const middlewares = this.globalMiddleware
			.getMiddleware()
			.slice(0)
			.concat(commandHandler.middlewares)
		const maybePromiseArgv = applyMiddleware(innerArgv, yargs, middlewares, true)
		return isPromise(maybePromiseArgv)
			? maybePromiseArgv.then((resolvedInnerArgv) =>
					this.handleValidationAndGetResult(
						isDefaultCommand,
						commandHandler,
						resolvedInnerArgv,
						currentContext,
						aliases,
						yargs,
						middlewares,
						positionalMap,
					),
				)
			: this.handleValidationAndGetResult(
					isDefaultCommand,
					commandHandler,
					maybePromiseArgv,
					currentContext,
					aliases,
					yargs,
					middlewares,
					positionalMap,
				)
	}
	populatePositionals(commandHandler, argv, context, yargs) {
		argv._ = argv._.slice(context.commands.length)
		const demanded = commandHandler.demanded.slice(0)
		const optional = commandHandler.optional.slice(0)
		const positionalMap = {}
		this.validation.positionalCount(demanded.length, argv._.length)
		while (demanded.length) {
			const demand = demanded.shift()
			this.populatePositional(demand, argv, positionalMap)
		}
		while (optional.length) {
			const maybe = optional.shift()
			this.populatePositional(maybe, argv, positionalMap)
		}
		argv._ = context.commands.concat(argv._.map((a) => '' + a))
		this.postProcessPositionals(
			argv,
			positionalMap,
			this.cmdToParseOptions(commandHandler.original),
			yargs,
		)
		return positionalMap
	}
	populatePositional(positional, argv, positionalMap) {
		const cmd = positional.cmd[0]
		if (positional.variadic) {
			positionalMap[cmd] = argv._.splice(0).map(String)
		} else {
			if (argv._.length) positionalMap[cmd] = [String(argv._.shift())]
		}
	}
	cmdToParseOptions(cmdString) {
		const parseOptions = {
			array: [],
			default: {},
			alias: {},
			demand: {},
		}
		const parsed = parseCommand(cmdString)
		parsed.demanded.forEach((d) => {
			const [cmd, ...aliases] = d.cmd
			if (d.variadic) {
				parseOptions.array.push(cmd)
				parseOptions.default[cmd] = []
			}
			parseOptions.alias[cmd] = aliases
			parseOptions.demand[cmd] = true
		})
		parsed.optional.forEach((o) => {
			const [cmd, ...aliases] = o.cmd
			if (o.variadic) {
				parseOptions.array.push(cmd)
				parseOptions.default[cmd] = []
			}
			parseOptions.alias[cmd] = aliases
		})
		return parseOptions
	}
	postProcessPositionals(argv, positionalMap, parseOptions, yargs) {
		const options = Object.assign({}, yargs.getOptions())
		options.default = Object.assign(parseOptions.default, options.default)
		for (const key of Object.keys(parseOptions.alias)) {
			options.alias[key] = (options.alias[key] || []).concat(parseOptions.alias[key])
		}
		options.array = options.array.concat(parseOptions.array)
		options.config = {}
		const unparsed = []
		Object.keys(positionalMap).forEach((key) => {
			positionalMap[key].map((value) => {
				if (options.configuration['unknown-options-as-args']) options.key[key] = true
				unparsed.push(`--${key}`)
				unparsed.push(value)
			})
		})
		if (!unparsed.length) return
		const config = Object.assign({}, options.configuration, {
			'populate--': false,
		})
		const parsed = this.shim.Parser.detailed(
			unparsed,
			Object.assign({}, options, {
				configuration: config,
			}),
		)
		if (parsed.error) {
			yargs.getInternalMethods().getUsageInstance().fail(parsed.error.message, parsed.error)
		} else {
			const positionalKeys = Object.keys(positionalMap)
			Object.keys(positionalMap).forEach((key) => {
				positionalKeys.push(...parsed.aliases[key])
			})
			Object.keys(parsed.argv).forEach((key) => {
				if (positionalKeys.includes(key)) {
					if (!positionalMap[key]) positionalMap[key] = parsed.argv[key]
					if (
						!this.isInConfigs(yargs, key) &&
						!this.isDefaulted(yargs, key) &&
						Object.prototype.hasOwnProperty.call(argv, key) &&
						Object.prototype.hasOwnProperty.call(parsed.argv, key) &&
						(Array.isArray(argv[key]) || Array.isArray(parsed.argv[key]))
					) {
						argv[key] = [].concat(argv[key], parsed.argv[key])
					} else {
						argv[key] = parsed.argv[key]
					}
				}
			})
		}
	}
	isDefaulted(yargs, key) {
		const { default: defaults } = yargs.getOptions()
		return (
			Object.prototype.hasOwnProperty.call(defaults, key) ||
			Object.prototype.hasOwnProperty.call(defaults, this.shim.Parser.camelCase(key))
		)
	}
	isInConfigs(yargs, key) {
		const { configObjects } = yargs.getOptions()
		return (
			configObjects.some((c) => Object.prototype.hasOwnProperty.call(c, key)) ||
			configObjects.some((c) =>
				Object.prototype.hasOwnProperty.call(c, this.shim.Parser.camelCase(key)),
			)
		)
	}
	runDefaultBuilderOn(yargs) {
		if (!this.defaultCommand) return
		if (this.shouldUpdateUsage(yargs)) {
			const commandString = DEFAULT_MARKER.test(this.defaultCommand.original)
				? this.defaultCommand.original
				: this.defaultCommand.original.replace(/^[^[\]<>]*/, '$0 ')
			yargs
				.getInternalMethods()
				.getUsageInstance()
				.usage(commandString, this.defaultCommand.description)
		}
		const builder = this.defaultCommand.builder
		if (isCommandBuilderCallback(builder)) {
			return builder(yargs, true)
		} else if (!isCommandBuilderDefinition(builder)) {
			Object.keys(builder).forEach((key) => {
				yargs.option(key, builder[key])
			})
		}
		return void 0
	}
	moduleName(obj) {
		const mod = whichModule(obj)
		if (!mod) throw new Error(`No command name given for module: ${this.shim.inspect(obj)}`)
		return this.commandFromFilename(mod.filename)
	}
	commandFromFilename(filename) {
		return this.shim.path.basename(filename, this.shim.path.extname(filename))
	}
	extractDesc({ describe, description, desc }) {
		for (const test of [describe, description, desc]) {
			if (typeof test === 'string' || test === false) return test
			assertNotStrictEqual(test, true, this.shim)
		}
		return false
	}
	freeze() {
		this.frozens.push({
			handlers: this.handlers,
			aliasMap: this.aliasMap,
			defaultCommand: this.defaultCommand,
		})
	}
	unfreeze() {
		const frozen = this.frozens.pop()
		assertNotStrictEqual(frozen, void 0, this.shim)
		;({
			handlers: this.handlers,
			aliasMap: this.aliasMap,
			defaultCommand: this.defaultCommand,
		} = frozen)
	}
	reset() {
		this.handlers = {}
		this.aliasMap = {}
		this.defaultCommand = void 0
		this.requireCache = /* @__PURE__ */ new Set()
		return this
	}
}
function command(usage2, validation2, globalMiddleware, shim3) {
	return new CommandInstance(usage2, validation2, globalMiddleware, shim3)
}
function isCommandBuilderDefinition(builder) {
	return typeof builder === 'object' && !!builder.builder && typeof builder.handler === 'function'
}
function isCommandAndAliases(cmd) {
	return cmd.every((c) => typeof c === 'string')
}
function isCommandBuilderCallback(builder) {
	return typeof builder === 'function'
}
function isCommandBuilderOptionDefinitions(builder) {
	return typeof builder === 'object'
}
function isCommandHandlerDefinition(cmd) {
	return typeof cmd === 'object' && !Array.isArray(cmd)
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/obj-filter.js
function objFilter(original = {}, filter = () => true) {
	const obj = {}
	objectKeys(original).forEach((key) => {
		if (filter(key, original[key])) {
			obj[key] = original[key]
		}
	})
	return obj
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/set-blocking.js
function setBlocking(blocking) {
	if (typeof process === 'undefined') return
	;[process.stdout, process.stderr].forEach((_stream) => {
		const stream = _stream
		if (stream._handle && stream.isTTY && typeof stream._handle.setBlocking === 'function') {
			stream._handle.setBlocking(blocking)
		}
	})
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/usage.js
function isBoolean(fail) {
	return typeof fail === 'boolean'
}
function usage(yargs, shim3) {
	const __ = shim3.y18n.__
	const self2 = {}
	const fails = []
	self2.failFn = function failFn(f) {
		fails.push(f)
	}
	let failMessage = null
	let globalFailMessage = null
	let showHelpOnFail = true
	self2.showHelpOnFail = function showHelpOnFailFn(arg1 = true, arg2) {
		const [enabled, message] = typeof arg1 === 'string' ? [true, arg1] : [arg1, arg2]
		if (yargs.getInternalMethods().isGlobalContext()) {
			globalFailMessage = message
		}
		failMessage = message
		showHelpOnFail = enabled
		return self2
	}
	let failureOutput = false
	self2.fail = function fail(msg, err) {
		const logger = yargs.getInternalMethods().getLoggerInstance()
		if (fails.length) {
			for (let i = fails.length - 1; i >= 0; --i) {
				const fail2 = fails[i]
				if (isBoolean(fail2)) {
					if (err) throw err
					else if (msg) throw Error(msg)
				} else {
					fail2(msg, err, self2)
				}
			}
		} else {
			if (yargs.getExitProcess()) setBlocking(true)
			if (!failureOutput) {
				failureOutput = true
				if (showHelpOnFail) {
					yargs.showHelp('error')
					logger.error()
				}
				if (msg || err) logger.error(msg || err)
				const globalOrCommandFailMessage = failMessage || globalFailMessage
				if (globalOrCommandFailMessage) {
					if (msg || err) logger.error('')
					logger.error(globalOrCommandFailMessage)
				}
			}
			err = err || new YError(msg)
			if (yargs.getExitProcess()) {
				return yargs.exit(1)
			} else if (yargs.getInternalMethods().hasParseCallback()) {
				return yargs.exit(1, err)
			} else {
				throw err
			}
		}
	}
	let usages = []
	let usageDisabled = false
	self2.usage = (msg, description) => {
		if (msg === null) {
			usageDisabled = true
			usages = []
			return self2
		}
		usageDisabled = false
		usages.push([msg, description || ''])
		return self2
	}
	self2.getUsage = () => {
		return usages
	}
	self2.getUsageDisabled = () => {
		return usageDisabled
	}
	self2.getPositionalGroupName = () => {
		return __('Positionals:')
	}
	let examples = []
	self2.example = (cmd, description) => {
		examples.push([cmd, description || ''])
	}
	let commands = []
	self2.command = function command2(cmd, description, isDefault, aliases, deprecated = false) {
		if (isDefault) {
			commands = commands.map((cmdArray) => {
				cmdArray[2] = false
				return cmdArray
			})
		}
		commands.push([cmd, description || '', isDefault, aliases, deprecated])
	}
	self2.getCommands = () => commands
	let descriptions = {}
	self2.describe = function describe(keyOrKeys, desc) {
		if (Array.isArray(keyOrKeys)) {
			keyOrKeys.forEach((k) => {
				self2.describe(k, desc)
			})
		} else if (typeof keyOrKeys === 'object') {
			Object.keys(keyOrKeys).forEach((k) => {
				self2.describe(k, keyOrKeys[k])
			})
		} else {
			descriptions[keyOrKeys] = desc
		}
	}
	self2.getDescriptions = () => descriptions
	let epilogs = []
	self2.epilog = (msg) => {
		epilogs.push(msg)
	}
	let wrapSet = false
	let wrap3
	self2.wrap = (cols) => {
		wrapSet = true
		wrap3 = cols
	}
	self2.getWrap = () => {
		if (shim3.getEnv('YARGS_DISABLE_WRAP')) {
			return null
		}
		if (!wrapSet) {
			wrap3 = windowWidth()
			wrapSet = true
		}
		return wrap3
	}
	const deferY18nLookupPrefix = '__yargsString__:'
	self2.deferY18nLookup = (str) => deferY18nLookupPrefix + str
	self2.help = function help() {
		if (cachedHelpMessage) return cachedHelpMessage
		normalizeAliases()
		const base$0 = yargs.customScriptName ? yargs.$0 : shim3.path.basename(yargs.$0)
		const demandedOptions = yargs.getDemandedOptions()
		const demandedCommands = yargs.getDemandedCommands()
		const deprecatedOptions = yargs.getDeprecatedOptions()
		const groups = yargs.getGroups()
		const options = yargs.getOptions()
		let keys2 = []
		keys2 = keys2.concat(Object.keys(descriptions))
		keys2 = keys2.concat(Object.keys(demandedOptions))
		keys2 = keys2.concat(Object.keys(demandedCommands))
		keys2 = keys2.concat(Object.keys(options.default))
		keys2 = keys2.filter(filterHiddenOptions)
		keys2 = Object.keys(
			keys2.reduce((acc, key) => {
				if (key !== '_') acc[key] = true
				return acc
			}, {}),
		)
		const theWrap = self2.getWrap()
		const ui2 = shim3.cliui({
			width: theWrap,
			wrap: !!theWrap,
		})
		if (!usageDisabled) {
			if (usages.length) {
				usages.forEach((usage2) => {
					ui2.div({ text: `${usage2[0].replace(/\$0/g, base$0)}` })
					if (usage2[1]) {
						ui2.div({ text: `${usage2[1]}`, padding: [1, 0, 0, 0] })
					}
				})
				ui2.div()
			} else if (commands.length) {
				let u = null
				if (demandedCommands._) {
					u = `${base$0} <${__('command')}>
`
				} else {
					u = `${base$0} [${__('command')}]
`
				}
				ui2.div(`${u}`)
			}
		}
		if (commands.length > 1 || (commands.length === 1 && !commands[0][2])) {
			ui2.div(__('Commands:'))
			const context = yargs.getInternalMethods().getContext()
			const parentCommands = context.commands.length ? `${context.commands.join(' ')} ` : ''
			if (yargs.getInternalMethods().getParserConfiguration()['sort-commands'] === true) {
				commands = commands.sort((a, b) => a[0].localeCompare(b[0]))
			}
			const prefix = base$0 ? `${base$0} ` : ''
			commands.forEach((command2) => {
				const commandString = `${prefix}${parentCommands}${command2[0].replace(/^\$0 ?/, '')}`
				ui2.span(
					{
						text: commandString,
						padding: [0, 2, 0, 2],
						width: maxWidth(commands, theWrap, `${base$0}${parentCommands}`) + 4,
					},
					{ text: command2[1] },
				)
				const hints = []
				if (command2[2]) hints.push(`[${__('default')}]`)
				if (command2[3] && command2[3].length) {
					hints.push(`[${__('aliases:')} ${command2[3].join(', ')}]`)
				}
				if (command2[4]) {
					if (typeof command2[4] === 'string') {
						hints.push(`[${__('deprecated: %s', command2[4])}]`)
					} else {
						hints.push(`[${__('deprecated')}]`)
					}
				}
				if (hints.length) {
					ui2.div({
						text: hints.join(' '),
						padding: [0, 0, 0, 2],
						align: 'right',
					})
				} else {
					ui2.div()
				}
			})
			ui2.div()
		}
		const aliasKeys = (Object.keys(options.alias) || []).concat(
			Object.keys(yargs.parsed.newAliases) || [],
		)
		keys2 = keys2.filter(
			(key) =>
				!yargs.parsed.newAliases[key] &&
				aliasKeys.every((alias) => (options.alias[alias] || []).indexOf(key) === -1),
		)
		const defaultGroup = __('Options:')
		if (!groups[defaultGroup]) groups[defaultGroup] = []
		addUngroupedKeys(keys2, options.alias, groups, defaultGroup)
		const isLongSwitch = (sw) => /^--/.test(getText(sw))
		const displayedGroups = Object.keys(groups)
			.filter((groupName) => groups[groupName].length > 0)
			.map((groupName) => {
				const normalizedKeys = groups[groupName].filter(filterHiddenOptions).map((key) => {
					if (aliasKeys.includes(key)) return key
					for (let i = 0, aliasKey; (aliasKey = aliasKeys[i]) !== void 0; i++) {
						if ((options.alias[aliasKey] || []).includes(key)) return aliasKey
					}
					return key
				})
				return { groupName, normalizedKeys }
			})
			.filter(({ normalizedKeys }) => normalizedKeys.length > 0)
			.map(({ groupName, normalizedKeys }) => {
				const switches = normalizedKeys.reduce((acc, key) => {
					acc[key] = [key]
						.concat(options.alias[key] || [])
						.map((sw) => {
							if (groupName === self2.getPositionalGroupName()) return sw
							else {
								return (
									(/^[0-9]$/.test(sw)
										? options.boolean.includes(key)
											? '-'
											: '--'
										: sw.length > 1
											? '--'
											: '-') + sw
								)
							}
						})
						.sort((sw1, sw2) =>
							isLongSwitch(sw1) === isLongSwitch(sw2) ? 0 : isLongSwitch(sw1) ? 1 : -1,
						)
						.join(', ')
					return acc
				}, {})
				return { groupName, normalizedKeys, switches }
			})
		const shortSwitchesUsed = displayedGroups
			.filter(({ groupName }) => groupName !== self2.getPositionalGroupName())
			.some(
				({ normalizedKeys, switches }) =>
					!normalizedKeys.every((key) => isLongSwitch(switches[key])),
			)
		if (shortSwitchesUsed) {
			displayedGroups
				.filter(({ groupName }) => groupName !== self2.getPositionalGroupName())
				.forEach(({ normalizedKeys, switches }) => {
					normalizedKeys.forEach((key) => {
						if (isLongSwitch(switches[key])) {
							switches[key] = addIndentation(switches[key], '-x, '.length)
						}
					})
				})
		}
		displayedGroups.forEach(({ groupName, normalizedKeys, switches }) => {
			ui2.div(groupName)
			normalizedKeys.forEach((key) => {
				const kswitch = switches[key]
				let desc = descriptions[key] || ''
				let type = null
				if (desc.includes(deferY18nLookupPrefix))
					desc = __(desc.substring(deferY18nLookupPrefix.length))
				if (options.boolean.includes(key)) type = `[${__('boolean')}]`
				if (options.count.includes(key)) type = `[${__('count')}]`
				if (options.string.includes(key)) type = `[${__('string')}]`
				if (options.normalize.includes(key)) type = `[${__('string')}]`
				if (options.array.includes(key)) type = `[${__('array')}]`
				if (options.number.includes(key)) type = `[${__('number')}]`
				const deprecatedExtra = (deprecated) =>
					typeof deprecated === 'string'
						? `[${__('deprecated: %s', deprecated)}]`
						: `[${__('deprecated')}]`
				const extra = [
					key in deprecatedOptions ? deprecatedExtra(deprecatedOptions[key]) : null,
					type,
					key in demandedOptions ? `[${__('required')}]` : null,
					options.choices && options.choices[key]
						? `[${__('choices:')} ${self2.stringifiedValues(options.choices[key])}]`
						: null,
					defaultString(options.default[key], options.defaultDescription[key]),
				]
					.filter(Boolean)
					.join(' ')
				ui2.span(
					{
						text: getText(kswitch),
						padding: [0, 2, 0, 2 + getIndentation(kswitch)],
						width: maxWidth(switches, theWrap) + 4,
					},
					desc,
				)
				const shouldHideOptionExtras =
					yargs.getInternalMethods().getUsageConfiguration()['hide-types'] === true
				if (extra && !shouldHideOptionExtras)
					ui2.div({ text: extra, padding: [0, 0, 0, 2], align: 'right' })
				else ui2.div()
			})
			ui2.div()
		})
		if (examples.length) {
			ui2.div(__('Examples:'))
			examples.forEach((example) => {
				example[0] = example[0].replace(/\$0/g, base$0)
			})
			examples.forEach((example) => {
				if (example[1] === '') {
					ui2.div({
						text: example[0],
						padding: [0, 2, 0, 2],
					})
				} else {
					ui2.div(
						{
							text: example[0],
							padding: [0, 2, 0, 2],
							width: maxWidth(examples, theWrap) + 4,
						},
						{
							text: example[1],
						},
					)
				}
			})
			ui2.div()
		}
		if (epilogs.length > 0) {
			const e = epilogs.map((epilog) => epilog.replace(/\$0/g, base$0)).join('\n')
			ui2.div(`${e}
`)
		}
		return ui2.toString().replace(/\s*$/, '')
	}
	function maxWidth(table, theWrap, modifier) {
		let width = 0
		if (!Array.isArray(table)) {
			table = Object.values(table).map((v) => [v])
		}
		table.forEach((v) => {
			width = Math.max(
				shim3.stringWidth(modifier ? `${modifier} ${getText(v[0])}` : getText(v[0])) +
					getIndentation(v[0]),
				width,
			)
		})
		if (theWrap) width = Math.min(width, parseInt((theWrap * 0.5).toString(), 10))
		return width
	}
	function normalizeAliases() {
		const demandedOptions = yargs.getDemandedOptions()
		const options = yargs.getOptions()
		;(Object.keys(options.alias) || []).forEach((key) => {
			options.alias[key].forEach((alias) => {
				if (descriptions[alias]) self2.describe(key, descriptions[alias])
				if (alias in demandedOptions) yargs.demandOption(key, demandedOptions[alias])
				if (options.boolean.includes(alias)) yargs.boolean(key)
				if (options.count.includes(alias)) yargs.count(key)
				if (options.string.includes(alias)) yargs.string(key)
				if (options.normalize.includes(alias)) yargs.normalize(key)
				if (options.array.includes(alias)) yargs.array(key)
				if (options.number.includes(alias)) yargs.number(key)
			})
		})
	}
	let cachedHelpMessage
	self2.cacheHelpMessage = function () {
		cachedHelpMessage = this.help()
	}
	self2.clearCachedHelpMessage = function () {
		cachedHelpMessage = void 0
	}
	self2.hasCachedHelpMessage = function () {
		return !!cachedHelpMessage
	}
	function addUngroupedKeys(keys2, aliases, groups, defaultGroup) {
		let groupedKeys = []
		let toCheck = null
		Object.keys(groups).forEach((group) => {
			groupedKeys = groupedKeys.concat(groups[group])
		})
		keys2.forEach((key) => {
			toCheck = [key].concat(aliases[key])
			if (!toCheck.some((k) => groupedKeys.indexOf(k) !== -1)) {
				groups[defaultGroup].push(key)
			}
		})
		return groupedKeys
	}
	function filterHiddenOptions(key) {
		return (
			yargs.getOptions().hiddenOptions.indexOf(key) < 0 ||
			yargs.parsed.argv[yargs.getOptions().showHiddenOpt]
		)
	}
	self2.showHelp = (level) => {
		const logger = yargs.getInternalMethods().getLoggerInstance()
		if (!level) level = 'error'
		const emit = typeof level === 'function' ? level : logger[level]
		emit(self2.help())
	}
	self2.functionDescription = (fn) => {
		const description = fn.name ? shim3.Parser.decamelize(fn.name, '-') : __('generated-value')
		return ['(', description, ')'].join('')
	}
	self2.stringifiedValues = function stringifiedValues(values, separator) {
		let string3 = ''
		const sep = separator || ', '
		const array = [].concat(values)
		if (!values || !array.length) return string3
		array.forEach((value) => {
			if (string3.length) string3 += sep
			string3 += JSON.stringify(value)
		})
		return string3
	}
	function defaultString(value, defaultDescription) {
		let string3 = `[${__('default:')} `
		if (value === void 0 && !defaultDescription) return null
		if (defaultDescription) {
			string3 += defaultDescription
		} else {
			switch (typeof value) {
				case 'string':
					string3 += `"${value}"`
					break
				case 'object':
					string3 += JSON.stringify(value)
					break
				default:
					string3 += value
			}
		}
		return `${string3}]`
	}
	function windowWidth() {
		const maxWidth2 = 80
		if (shim3.process.stdColumns) {
			return Math.min(maxWidth2, shim3.process.stdColumns)
		} else {
			return maxWidth2
		}
	}
	let version = null
	self2.version = (ver) => {
		version = ver
	}
	self2.showVersion = (level) => {
		const logger = yargs.getInternalMethods().getLoggerInstance()
		if (!level) level = 'error'
		const emit = typeof level === 'function' ? level : logger[level]
		emit(version)
	}
	self2.reset = function reset(localLookup) {
		failMessage = null
		failureOutput = false
		usages = []
		usageDisabled = false
		epilogs = []
		examples = []
		commands = []
		descriptions = objFilter(descriptions, (k) => !localLookup[k])
		return self2
	}
	const frozens = []
	self2.freeze = function freeze() {
		frozens.push({
			failMessage,
			failureOutput,
			usages,
			usageDisabled,
			epilogs,
			examples,
			commands,
			descriptions,
		})
	}
	self2.unfreeze = function unfreeze(defaultCommand = false) {
		const frozen = frozens.pop()
		if (!frozen) return
		if (defaultCommand) {
			descriptions = { ...frozen.descriptions, ...descriptions }
			commands = [...frozen.commands, ...commands]
			usages = [...frozen.usages, ...usages]
			examples = [...frozen.examples, ...examples]
			epilogs = [...frozen.epilogs, ...epilogs]
		} else {
			;({
				failMessage,
				failureOutput,
				usages,
				usageDisabled,
				epilogs,
				examples,
				commands,
				descriptions,
			} = frozen)
		}
	}
	return self2
}
function isIndentedText(text5) {
	return typeof text5 === 'object'
}
function addIndentation(text5, indent2) {
	return isIndentedText(text5)
		? { text: text5.text, indentation: text5.indentation + indent2 }
		: { text: text5, indentation: indent2 }
}
function getIndentation(text5) {
	return isIndentedText(text5) ? text5.indentation : 0
}
function getText(text5) {
	return isIndentedText(text5) ? text5.text : text5
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/completion-templates.js
var completionShTemplate = `###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`
var completionZshTemplate = `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/completion.js
var Completion = class {
	constructor(yargs, usage2, command2, shim3) {
		var _a2, _b2, _c2
		this.yargs = yargs
		this.usage = usage2
		this.command = command2
		this.shim = shim3
		this.completionKey = 'get-yargs-completions'
		this.aliases = null
		this.customCompletionFunction = null
		this.indexAfterLastReset = 0
		this.zshShell =
			(_c2 =
				((_a2 = this.shim.getEnv('SHELL')) === null || _a2 === void 0
					? void 0
					: _a2.includes('zsh')) ||
				((_b2 = this.shim.getEnv('ZSH_NAME')) === null || _b2 === void 0
					? void 0
					: _b2.includes('zsh'))) !== null && _c2 !== void 0
				? _c2
				: false
	}
	defaultCompletion(args, argv, current, done) {
		const handlers = this.command.getCommandHandlers()
		for (let i = 0, ii = args.length; i < ii; ++i) {
			if (handlers[args[i]] && handlers[args[i]].builder) {
				const builder = handlers[args[i]].builder
				if (isCommandBuilderCallback(builder)) {
					this.indexAfterLastReset = i + 1
					const y = this.yargs.getInternalMethods().reset()
					builder(y, true)
					return y.argv
				}
			}
		}
		const completions = []
		this.commandCompletions(completions, args, current)
		this.optionCompletions(completions, args, argv, current)
		this.choicesFromOptionsCompletions(completions, args, argv, current)
		this.choicesFromPositionalsCompletions(completions, args, argv, current)
		done(null, completions)
	}
	commandCompletions(completions, args, current) {
		const parentCommands = this.yargs.getInternalMethods().getContext().commands
		if (
			!current.match(/^-/) &&
			parentCommands[parentCommands.length - 1] !== current &&
			!this.previousArgHasChoices(args)
		) {
			this.usage.getCommands().forEach((usageCommand) => {
				const commandName = parseCommand(usageCommand[0]).cmd
				if (args.indexOf(commandName) === -1) {
					if (!this.zshShell) {
						completions.push(commandName)
					} else {
						const desc = usageCommand[1] || ''
						completions.push(commandName.replace(/:/g, '\\:') + ':' + desc)
					}
				}
			})
		}
	}
	optionCompletions(completions, args, argv, current) {
		if (
			(current.match(/^-/) || (current === '' && completions.length === 0)) &&
			!this.previousArgHasChoices(args)
		) {
			const options = this.yargs.getOptions()
			const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || []
			Object.keys(options.key).forEach((key) => {
				const negable = !!options.configuration['boolean-negation'] && options.boolean.includes(key)
				const isPositionalKey = positionalKeys.includes(key)
				if (
					!isPositionalKey &&
					!options.hiddenOptions.includes(key) &&
					!this.argsContainKey(args, key, negable)
				) {
					this.completeOptionKey(key, completions, current, negable && !!options.default[key])
				}
			})
		}
	}
	choicesFromOptionsCompletions(completions, args, argv, current) {
		if (this.previousArgHasChoices(args)) {
			const choices = this.getPreviousArgChoices(args)
			if (choices && choices.length > 0) {
				completions.push(...choices.map((c) => c.replace(/:/g, '\\:')))
			}
		}
	}
	choicesFromPositionalsCompletions(completions, args, argv, current) {
		if (current === '' && completions.length > 0 && this.previousArgHasChoices(args)) {
			return
		}
		const positionalKeys = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || []
		const offset = Math.max(
			this.indexAfterLastReset,
			this.yargs.getInternalMethods().getContext().commands.length + 1,
		)
		const positionalKey = positionalKeys[argv._.length - offset - 1]
		if (!positionalKey) {
			return
		}
		const choices = this.yargs.getOptions().choices[positionalKey] || []
		for (const choice of choices) {
			if (choice.startsWith(current)) {
				completions.push(choice.replace(/:/g, '\\:'))
			}
		}
	}
	getPreviousArgChoices(args) {
		if (args.length < 1) return
		let previousArg = args[args.length - 1]
		let filter = ''
		if (!previousArg.startsWith('-') && args.length > 1) {
			filter = previousArg
			previousArg = args[args.length - 2]
		}
		if (!previousArg.startsWith('-')) return
		const previousArgKey = previousArg.replace(/^-+/, '')
		const options = this.yargs.getOptions()
		const possibleAliases = [previousArgKey, ...(this.yargs.getAliases()[previousArgKey] || [])]
		let choices
		for (const possibleAlias of possibleAliases) {
			if (
				Object.prototype.hasOwnProperty.call(options.key, possibleAlias) &&
				Array.isArray(options.choices[possibleAlias])
			) {
				choices = options.choices[possibleAlias]
				break
			}
		}
		if (choices) {
			return choices.filter((choice) => !filter || choice.startsWith(filter))
		}
	}
	previousArgHasChoices(args) {
		const choices = this.getPreviousArgChoices(args)
		return choices !== void 0 && choices.length > 0
	}
	argsContainKey(args, key, negable) {
		const argsContains = (s) => args.indexOf((/^[^0-9]$/.test(s) ? '-' : '--') + s) !== -1
		if (argsContains(key)) return true
		if (negable && argsContains(`no-${key}`)) return true
		if (this.aliases) {
			for (const alias of this.aliases[key]) {
				if (argsContains(alias)) return true
			}
		}
		return false
	}
	completeOptionKey(key, completions, current, negable) {
		var _a2, _b2, _c2, _d
		let keyWithDesc = key
		if (this.zshShell) {
			const descs = this.usage.getDescriptions()
			const aliasKey =
				(_b2 =
					(_a2 = this === null || this === void 0 ? void 0 : this.aliases) === null ||
					_a2 === void 0
						? void 0
						: _a2[key]) === null || _b2 === void 0
					? void 0
					: _b2.find((alias) => {
							const desc2 = descs[alias]
							return typeof desc2 === 'string' && desc2.length > 0
						})
			const descFromAlias = aliasKey ? descs[aliasKey] : void 0
			const desc =
				(_d = (_c2 = descs[key]) !== null && _c2 !== void 0 ? _c2 : descFromAlias) !== null &&
				_d !== void 0
					? _d
					: ''
			keyWithDesc = `${key.replace(/:/g, '\\:')}:${desc.replace('__yargsString__:', '').replace(/(\r\n|\n|\r)/gm, ' ')}`
		}
		const startsByTwoDashes = (s) => /^--/.test(s)
		const isShortOption = (s) => /^[^0-9]$/.test(s)
		const dashes = !startsByTwoDashes(current) && isShortOption(key) ? '-' : '--'
		completions.push(dashes + keyWithDesc)
		if (negable) {
			completions.push(dashes + 'no-' + keyWithDesc)
		}
	}
	customCompletion(args, argv, current, done) {
		assertNotStrictEqual(this.customCompletionFunction, null, this.shim)
		if (isSyncCompletionFunction(this.customCompletionFunction)) {
			const result = this.customCompletionFunction(current, argv)
			if (isPromise(result)) {
				return result
					.then((list4) => {
						this.shim.process.nextTick(() => {
							done(null, list4)
						})
					})
					.catch((err) => {
						this.shim.process.nextTick(() => {
							done(err, void 0)
						})
					})
			}
			return done(null, result)
		} else if (isFallbackCompletionFunction(this.customCompletionFunction)) {
			return this.customCompletionFunction(
				current,
				argv,
				(onCompleted = done) => this.defaultCompletion(args, argv, current, onCompleted),
				(completions) => {
					done(null, completions)
				},
			)
		} else {
			return this.customCompletionFunction(current, argv, (completions) => {
				done(null, completions)
			})
		}
	}
	getCompletion(args, done) {
		const current = args.length ? args[args.length - 1] : ''
		const argv = this.yargs.parse(args, true)
		const completionFunction = this.customCompletionFunction
			? (argv2) => this.customCompletion(args, argv2, current, done)
			: (argv2) => this.defaultCompletion(args, argv2, current, done)
		return isPromise(argv) ? argv.then(completionFunction) : completionFunction(argv)
	}
	generateCompletionScript($0, cmd) {
		let script = this.zshShell ? completionZshTemplate : completionShTemplate
		const name = this.shim.path.basename($0)
		if ($0.match(/\.js$/)) $0 = `./${$0}`
		script = script.replace(/{{app_name}}/g, name)
		script = script.replace(/{{completion_command}}/g, cmd)
		return script.replace(/{{app_path}}/g, $0)
	}
	registerFunction(fn) {
		this.customCompletionFunction = fn
	}
	setParsed(parsed) {
		this.aliases = parsed.aliases
	}
}
function completion(yargs, usage2, command2, shim3) {
	return new Completion(yargs, usage2, command2, shim3)
}
function isSyncCompletionFunction(completionFunction) {
	return completionFunction.length < 3
}
function isFallbackCompletionFunction(completionFunction) {
	return completionFunction.length > 3
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/levenshtein.js
function levenshtein(a, b) {
	if (a.length === 0) return b.length
	if (b.length === 0) return a.length
	const matrix = []
	let i
	for (i = 0; i <= b.length; i++) {
		matrix[i] = [i]
	}
	let j
	for (j = 0; j <= a.length; j++) {
		matrix[0][j] = j
	}
	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1]
			} else {
				if (
					i > 1 &&
					j > 1 &&
					b.charAt(i - 2) === a.charAt(j - 1) &&
					b.charAt(i - 1) === a.charAt(j - 2)
				) {
					matrix[i][j] = matrix[i - 2][j - 2] + 1
				} else {
					matrix[i][j] = Math.min(
						matrix[i - 1][j - 1] + 1,
						Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1),
					)
				}
			}
		}
	}
	return matrix[b.length][a.length]
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/validation.js
var specialKeys = ['$0', '--', '_']
function validation(yargs, usage2, shim3) {
	const __ = shim3.y18n.__
	const __n = shim3.y18n.__n
	const self2 = {}
	self2.nonOptionCount = function nonOptionCount(argv) {
		const demandedCommands = yargs.getDemandedCommands()
		const positionalCount = argv._.length + (argv['--'] ? argv['--'].length : 0)
		const _s = positionalCount - yargs.getInternalMethods().getContext().commands.length
		if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
			if (_s < demandedCommands._.min) {
				if (demandedCommands._.minMsg !== void 0) {
					usage2.fail(
						demandedCommands._.minMsg
							? demandedCommands._.minMsg
									.replace(/\$0/g, _s.toString())
									.replace(/\$1/, demandedCommands._.min.toString())
							: null,
					)
				} else {
					usage2.fail(
						__n(
							'Not enough non-option arguments: got %s, need at least %s',
							'Not enough non-option arguments: got %s, need at least %s',
							_s,
							_s.toString(),
							demandedCommands._.min.toString(),
						),
					)
				}
			} else if (_s > demandedCommands._.max) {
				if (demandedCommands._.maxMsg !== void 0) {
					usage2.fail(
						demandedCommands._.maxMsg
							? demandedCommands._.maxMsg
									.replace(/\$0/g, _s.toString())
									.replace(/\$1/, demandedCommands._.max.toString())
							: null,
					)
				} else {
					usage2.fail(
						__n(
							'Too many non-option arguments: got %s, maximum of %s',
							'Too many non-option arguments: got %s, maximum of %s',
							_s,
							_s.toString(),
							demandedCommands._.max.toString(),
						),
					)
				}
			}
		}
	}
	self2.positionalCount = function positionalCount(required, observed) {
		if (observed < required) {
			usage2.fail(
				__n(
					'Not enough non-option arguments: got %s, need at least %s',
					'Not enough non-option arguments: got %s, need at least %s',
					observed,
					observed + '',
					required + '',
				),
			)
		}
	}
	self2.requiredArguments = function requiredArguments(argv, demandedOptions) {
		let missing = null
		for (const key of Object.keys(demandedOptions)) {
			if (!Object.prototype.hasOwnProperty.call(argv, key) || typeof argv[key] === 'undefined') {
				missing = missing || {}
				missing[key] = demandedOptions[key]
			}
		}
		if (missing) {
			const customMsgs = []
			for (const key of Object.keys(missing)) {
				const msg = missing[key]
				if (msg && customMsgs.indexOf(msg) < 0) {
					customMsgs.push(msg)
				}
			}
			const customMsg = customMsgs.length
				? `
${customMsgs.join('\n')}`
				: ''
			usage2.fail(
				__n(
					'Missing required argument: %s',
					'Missing required arguments: %s',
					Object.keys(missing).length,
					Object.keys(missing).join(', ') + customMsg,
				),
			)
		}
	}
	self2.unknownArguments = function unknownArguments(
		argv,
		aliases,
		positionalMap,
		isDefaultCommand,
		checkPositionals = true,
	) {
		var _a2
		const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands()
		const unknown2 = []
		const currentContext = yargs.getInternalMethods().getContext()
		Object.keys(argv).forEach((key) => {
			if (
				!specialKeys.includes(key) &&
				!Object.prototype.hasOwnProperty.call(positionalMap, key) &&
				!Object.prototype.hasOwnProperty.call(yargs.getInternalMethods().getParseContext(), key) &&
				!self2.isValidAndSomeAliasIsNotNew(key, aliases)
			) {
				unknown2.push(key)
			}
		})
		if (
			checkPositionals &&
			(currentContext.commands.length > 0 || commandKeys.length > 0 || isDefaultCommand)
		) {
			argv._.slice(currentContext.commands.length).forEach((key) => {
				if (!commandKeys.includes('' + key)) {
					unknown2.push('' + key)
				}
			})
		}
		if (checkPositionals) {
			const demandedCommands = yargs.getDemandedCommands()
			const maxNonOptDemanded =
				((_a2 = demandedCommands._) === null || _a2 === void 0 ? void 0 : _a2.max) || 0
			const expected = currentContext.commands.length + maxNonOptDemanded
			if (expected < argv._.length) {
				argv._.slice(expected).forEach((key) => {
					key = String(key)
					if (!currentContext.commands.includes(key) && !unknown2.includes(key)) {
						unknown2.push(key)
					}
				})
			}
		}
		if (unknown2.length) {
			usage2.fail(
				__n(
					'Unknown argument: %s',
					'Unknown arguments: %s',
					unknown2.length,
					unknown2.map((s) => (s.trim() ? s : `"${s}"`)).join(', '),
				),
			)
		}
	}
	self2.unknownCommands = function unknownCommands(argv) {
		const commandKeys = yargs.getInternalMethods().getCommandInstance().getCommands()
		const unknown2 = []
		const currentContext = yargs.getInternalMethods().getContext()
		if (currentContext.commands.length > 0 || commandKeys.length > 0) {
			argv._.slice(currentContext.commands.length).forEach((key) => {
				if (!commandKeys.includes('' + key)) {
					unknown2.push('' + key)
				}
			})
		}
		if (unknown2.length > 0) {
			usage2.fail(
				__n('Unknown command: %s', 'Unknown commands: %s', unknown2.length, unknown2.join(', ')),
			)
			return true
		} else {
			return false
		}
	}
	self2.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
		if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
			return false
		}
		const newAliases = yargs.parsed.newAliases
		return [key, ...aliases[key]].some(
			(a) => !Object.prototype.hasOwnProperty.call(newAliases, a) || !newAliases[key],
		)
	}
	self2.limitedChoices = function limitedChoices(argv) {
		const options = yargs.getOptions()
		const invalid2 = {}
		if (!Object.keys(options.choices).length) return
		Object.keys(argv).forEach((key) => {
			if (
				specialKeys.indexOf(key) === -1 &&
				Object.prototype.hasOwnProperty.call(options.choices, key)
			) {
				;[].concat(argv[key]).forEach((value) => {
					if (options.choices[key].indexOf(value) === -1 && value !== void 0) {
						invalid2[key] = (invalid2[key] || []).concat(value)
					}
				})
			}
		})
		const invalidKeys = Object.keys(invalid2)
		if (!invalidKeys.length) return
		let msg = __('Invalid values:')
		invalidKeys.forEach((key) => {
			msg += `
  ${__('Argument: %s, Given: %s, Choices: %s', key, usage2.stringifiedValues(invalid2[key]), usage2.stringifiedValues(options.choices[key]))}`
		})
		usage2.fail(msg)
	}
	let implied = {}
	self2.implies = function implies(key, value) {
		argsert('<string|object> [array|number|string]', [key, value], arguments.length)
		if (typeof key === 'object') {
			Object.keys(key).forEach((k) => {
				self2.implies(k, key[k])
			})
		} else {
			yargs.global(key)
			if (!implied[key]) {
				implied[key] = []
			}
			if (Array.isArray(value)) {
				value.forEach((i) => self2.implies(key, i))
			} else {
				assertNotStrictEqual(value, void 0, shim3)
				implied[key].push(value)
			}
		}
	}
	self2.getImplied = function getImplied() {
		return implied
	}
	function keyExists(argv, val) {
		const num = Number(val)
		val = isNaN(num) ? val : num
		if (typeof val === 'number') {
			val = argv._.length >= val
		} else if (val.match(/^--no-.+/)) {
			val = val.match(/^--no-(.+)/)[1]
			val = !Object.prototype.hasOwnProperty.call(argv, val)
		} else {
			val = Object.prototype.hasOwnProperty.call(argv, val)
		}
		return val
	}
	self2.implications = function implications(argv) {
		const implyFail = []
		Object.keys(implied).forEach((key) => {
			const origKey = key
			;(implied[key] || []).forEach((value) => {
				let key2 = origKey
				const origValue = value
				key2 = keyExists(argv, key2)
				value = keyExists(argv, value)
				if (key2 && !value) {
					implyFail.push(` ${origKey} -> ${origValue}`)
				}
			})
		})
		if (implyFail.length) {
			let msg = `${__('Implications failed:')}
`
			implyFail.forEach((value) => {
				msg += value
			})
			usage2.fail(msg)
		}
	}
	let conflicting = {}
	self2.conflicts = function conflicts(key, value) {
		argsert('<string|object> [array|string]', [key, value], arguments.length)
		if (typeof key === 'object') {
			Object.keys(key).forEach((k) => {
				self2.conflicts(k, key[k])
			})
		} else {
			yargs.global(key)
			if (!conflicting[key]) {
				conflicting[key] = []
			}
			if (Array.isArray(value)) {
				value.forEach((i) => self2.conflicts(key, i))
			} else {
				conflicting[key].push(value)
			}
		}
	}
	self2.getConflicting = () => conflicting
	self2.conflicting = function conflictingFn(argv) {
		Object.keys(argv).forEach((key) => {
			if (conflicting[key]) {
				conflicting[key].forEach((value) => {
					if (value && argv[key] !== void 0 && argv[value] !== void 0) {
						usage2.fail(__('Arguments %s and %s are mutually exclusive', key, value))
					}
				})
			}
		})
		if (yargs.getInternalMethods().getParserConfiguration()['strip-dashed']) {
			Object.keys(conflicting).forEach((key) => {
				conflicting[key].forEach((value) => {
					if (
						value &&
						argv[shim3.Parser.camelCase(key)] !== void 0 &&
						argv[shim3.Parser.camelCase(value)] !== void 0
					) {
						usage2.fail(__('Arguments %s and %s are mutually exclusive', key, value))
					}
				})
			})
		}
	}
	self2.recommendCommands = function recommendCommands(cmd, potentialCommands) {
		const threshold = 3
		potentialCommands = potentialCommands.sort((a, b) => b.length - a.length)
		let recommended = null
		let bestDistance = Infinity
		for (let i = 0, candidate; (candidate = potentialCommands[i]) !== void 0; i++) {
			const d = levenshtein(cmd, candidate)
			if (d <= threshold && d < bestDistance) {
				bestDistance = d
				recommended = candidate
			}
		}
		if (recommended) usage2.fail(__('Did you mean %s?', recommended))
	}
	self2.reset = function reset(localLookup) {
		implied = objFilter(implied, (k) => !localLookup[k])
		conflicting = objFilter(conflicting, (k) => !localLookup[k])
		return self2
	}
	const frozens = []
	self2.freeze = function freeze() {
		frozens.push({
			implied,
			conflicting,
		})
	}
	self2.unfreeze = function unfreeze() {
		const frozen = frozens.pop()
		assertNotStrictEqual(frozen, void 0, shim3)
		;({ implied, conflicting } = frozen)
	}
	return self2
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/utils/apply-extends.js
var previouslyVisitedConfigs = []
var shim2
function applyExtends(config, cwd, mergeExtends, _shim) {
	shim2 = _shim
	let defaultConfig = {}
	if (Object.prototype.hasOwnProperty.call(config, 'extends')) {
		if (typeof config.extends !== 'string') return defaultConfig
		const isPath = /\.json|\..*rc$/.test(config.extends)
		let pathToDefault = null
		if (!isPath) {
			try {
				pathToDefault = __require.resolve(config.extends)
			} catch (_err) {
				return config
			}
		} else {
			pathToDefault = getPathToDefaultConfig(cwd, config.extends)
		}
		checkForCircularExtends(pathToDefault)
		previouslyVisitedConfigs.push(pathToDefault)
		defaultConfig = isPath
			? JSON.parse(shim2.readFileSync(pathToDefault, 'utf8'))
			: __require(config.extends)
		delete config.extends
		defaultConfig = applyExtends(
			defaultConfig,
			shim2.path.dirname(pathToDefault),
			mergeExtends,
			shim2,
		)
	}
	previouslyVisitedConfigs = []
	return mergeExtends ? mergeDeep(defaultConfig, config) : Object.assign({}, defaultConfig, config)
}
function checkForCircularExtends(cfgPath) {
	if (previouslyVisitedConfigs.indexOf(cfgPath) > -1) {
		throw new YError(`Circular extended configurations: '${cfgPath}'.`)
	}
}
function getPathToDefaultConfig(cwd, pathToExtend) {
	return shim2.path.resolve(cwd, pathToExtend)
}
function mergeDeep(config1, config2) {
	const target = {}
	function isObject(obj) {
		return obj && typeof obj === 'object' && !Array.isArray(obj)
	}
	Object.assign(target, config1)
	for (const key of Object.keys(config2)) {
		if (isObject(config2[key]) && isObject(target[key])) {
			target[key] = mergeDeep(config1[key], config2[key])
		} else {
			target[key] = config2[key]
		}
	}
	return target
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/build/lib/yargs-factory.js
var __classPrivateFieldSet = function (receiver, state, value, kind, f) {
	if (kind === 'm') throw new TypeError('Private method is not writable')
	if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a setter')
	if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
		throw new TypeError('Cannot write private member to an object whose class did not declare it')
	return (
		kind === 'a' ? f.call(receiver, value) : f ? (f.value = value) : state.set(receiver, value),
		value
	)
}
var __classPrivateFieldGet = function (receiver, state, kind, f) {
	if (kind === 'a' && !f) throw new TypeError('Private accessor was defined without a getter')
	if (typeof state === 'function' ? receiver !== state || !f : !state.has(receiver))
		throw new TypeError('Cannot read private member from an object whose class did not declare it')
	return kind === 'm' ? f : kind === 'a' ? f.call(receiver) : f ? f.value : state.get(receiver)
}
var _YargsInstance_command
var _YargsInstance_cwd
var _YargsInstance_context
var _YargsInstance_completion
var _YargsInstance_completionCommand
var _YargsInstance_defaultShowHiddenOpt
var _YargsInstance_exitError
var _YargsInstance_detectLocale
var _YargsInstance_emittedWarnings
var _YargsInstance_exitProcess
var _YargsInstance_frozens
var _YargsInstance_globalMiddleware
var _YargsInstance_groups
var _YargsInstance_hasOutput
var _YargsInstance_helpOpt
var _YargsInstance_isGlobalContext
var _YargsInstance_logger
var _YargsInstance_output
var _YargsInstance_options
var _YargsInstance_parentRequire
var _YargsInstance_parserConfig
var _YargsInstance_parseFn
var _YargsInstance_parseContext
var _YargsInstance_pkgs
var _YargsInstance_preservedGroups
var _YargsInstance_processArgs
var _YargsInstance_recommendCommands
var _YargsInstance_shim
var _YargsInstance_strict
var _YargsInstance_strictCommands
var _YargsInstance_strictOptions
var _YargsInstance_usage
var _YargsInstance_usageConfig
var _YargsInstance_versionOpt
var _YargsInstance_validation
function YargsFactory(_shim) {
	return (processArgs = [], cwd = _shim.process.cwd(), parentRequire) => {
		const yargs = new YargsInstance(processArgs, cwd, parentRequire, _shim)
		Object.defineProperty(yargs, 'argv', {
			get: () => {
				return yargs.parse()
			},
			enumerable: true,
		})
		yargs.help()
		yargs.version()
		return yargs
	}
}
var kCopyDoubleDash = Symbol('copyDoubleDash')
var kCreateLogger = Symbol('copyDoubleDash')
var kDeleteFromParserHintObject = Symbol('deleteFromParserHintObject')
var kEmitWarning = Symbol('emitWarning')
var kFreeze = Symbol('freeze')
var kGetDollarZero = Symbol('getDollarZero')
var kGetParserConfiguration = Symbol('getParserConfiguration')
var kGetUsageConfiguration = Symbol('getUsageConfiguration')
var kGuessLocale = Symbol('guessLocale')
var kGuessVersion = Symbol('guessVersion')
var kParsePositionalNumbers = Symbol('parsePositionalNumbers')
var kPkgUp = Symbol('pkgUp')
var kPopulateParserHintArray = Symbol('populateParserHintArray')
var kPopulateParserHintSingleValueDictionary = Symbol('populateParserHintSingleValueDictionary')
var kPopulateParserHintArrayDictionary = Symbol('populateParserHintArrayDictionary')
var kPopulateParserHintDictionary = Symbol('populateParserHintDictionary')
var kSanitizeKey = Symbol('sanitizeKey')
var kSetKey = Symbol('setKey')
var kUnfreeze = Symbol('unfreeze')
var kValidateAsync = Symbol('validateAsync')
var kGetCommandInstance = Symbol('getCommandInstance')
var kGetContext = Symbol('getContext')
var kGetHasOutput = Symbol('getHasOutput')
var kGetLoggerInstance = Symbol('getLoggerInstance')
var kGetParseContext = Symbol('getParseContext')
var kGetUsageInstance = Symbol('getUsageInstance')
var kGetValidationInstance = Symbol('getValidationInstance')
var kHasParseCallback = Symbol('hasParseCallback')
var kIsGlobalContext = Symbol('isGlobalContext')
var kPostProcess = Symbol('postProcess')
var kRebase = Symbol('rebase')
var kReset = Symbol('reset')
var kRunYargsParserAndExecuteCommands = Symbol('runYargsParserAndExecuteCommands')
var kRunValidation = Symbol('runValidation')
var kSetHasOutput = Symbol('setHasOutput')
var kTrackManuallySetKeys = Symbol('kTrackManuallySetKeys')
var YargsInstance = class {
	constructor(processArgs = [], cwd, parentRequire, shim3) {
		this.customScriptName = false
		this.parsed = false
		_YargsInstance_command.set(this, void 0)
		_YargsInstance_cwd.set(this, void 0)
		_YargsInstance_context.set(this, { commands: [], fullCommands: [] })
		_YargsInstance_completion.set(this, null)
		_YargsInstance_completionCommand.set(this, null)
		_YargsInstance_defaultShowHiddenOpt.set(this, 'show-hidden')
		_YargsInstance_exitError.set(this, null)
		_YargsInstance_detectLocale.set(this, true)
		_YargsInstance_emittedWarnings.set(this, {})
		_YargsInstance_exitProcess.set(this, true)
		_YargsInstance_frozens.set(this, [])
		_YargsInstance_globalMiddleware.set(this, void 0)
		_YargsInstance_groups.set(this, {})
		_YargsInstance_hasOutput.set(this, false)
		_YargsInstance_helpOpt.set(this, null)
		_YargsInstance_isGlobalContext.set(this, true)
		_YargsInstance_logger.set(this, void 0)
		_YargsInstance_output.set(this, '')
		_YargsInstance_options.set(this, void 0)
		_YargsInstance_parentRequire.set(this, void 0)
		_YargsInstance_parserConfig.set(this, {})
		_YargsInstance_parseFn.set(this, null)
		_YargsInstance_parseContext.set(this, null)
		_YargsInstance_pkgs.set(this, {})
		_YargsInstance_preservedGroups.set(this, {})
		_YargsInstance_processArgs.set(this, void 0)
		_YargsInstance_recommendCommands.set(this, false)
		_YargsInstance_shim.set(this, void 0)
		_YargsInstance_strict.set(this, false)
		_YargsInstance_strictCommands.set(this, false)
		_YargsInstance_strictOptions.set(this, false)
		_YargsInstance_usage.set(this, void 0)
		_YargsInstance_usageConfig.set(this, {})
		_YargsInstance_versionOpt.set(this, null)
		_YargsInstance_validation.set(this, void 0)
		__classPrivateFieldSet(this, _YargsInstance_shim, shim3, 'f')
		__classPrivateFieldSet(this, _YargsInstance_processArgs, processArgs, 'f')
		__classPrivateFieldSet(this, _YargsInstance_cwd, cwd, 'f')
		__classPrivateFieldSet(this, _YargsInstance_parentRequire, parentRequire, 'f')
		__classPrivateFieldSet(this, _YargsInstance_globalMiddleware, new GlobalMiddleware(this), 'f')
		this.$0 = this[kGetDollarZero]()
		this[kReset]()
		__classPrivateFieldSet(
			this,
			_YargsInstance_command,
			__classPrivateFieldGet(this, _YargsInstance_command, 'f'),
			'f',
		)
		__classPrivateFieldSet(
			this,
			_YargsInstance_usage,
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f'),
			'f',
		)
		__classPrivateFieldSet(
			this,
			_YargsInstance_validation,
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f'),
			'f',
		)
		__classPrivateFieldSet(
			this,
			_YargsInstance_options,
			__classPrivateFieldGet(this, _YargsInstance_options, 'f'),
			'f',
		)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').showHiddenOpt =
			__classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, 'f')
		__classPrivateFieldSet(this, _YargsInstance_logger, this[kCreateLogger](), 'f')
	}
	addHelpOpt(opt, msg) {
		const defaultHelpOpt = 'help'
		argsert('[string|boolean] [string]', [opt, msg], arguments.length)
		if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f')) {
			this[kDeleteFromParserHintObject](__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f'))
			__classPrivateFieldSet(this, _YargsInstance_helpOpt, null, 'f')
		}
		if (opt === false && msg === void 0) return this
		__classPrivateFieldSet(
			this,
			_YargsInstance_helpOpt,
			typeof opt === 'string' ? opt : defaultHelpOpt,
			'f',
		)
		this.boolean(__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f'))
		this.describe(
			__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f'),
			msg || __classPrivateFieldGet(this, _YargsInstance_usage, 'f').deferY18nLookup('Show help'),
		)
		return this
	}
	help(opt, msg) {
		return this.addHelpOpt(opt, msg)
	}
	addShowHiddenOpt(opt, msg) {
		argsert('[string|boolean] [string]', [opt, msg], arguments.length)
		if (opt === false && msg === void 0) return this
		const showHiddenOpt =
			typeof opt === 'string'
				? opt
				: __classPrivateFieldGet(this, _YargsInstance_defaultShowHiddenOpt, 'f')
		this.boolean(showHiddenOpt)
		this.describe(
			showHiddenOpt,
			msg ||
				__classPrivateFieldGet(this, _YargsInstance_usage, 'f').deferY18nLookup(
					'Show hidden options',
				),
		)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').showHiddenOpt = showHiddenOpt
		return this
	}
	showHidden(opt, msg) {
		return this.addShowHiddenOpt(opt, msg)
	}
	alias(key, value) {
		argsert('<object|string|array> [string|array]', [key, value], arguments.length)
		this[kPopulateParserHintArrayDictionary](this.alias.bind(this), 'alias', key, value)
		return this
	}
	array(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('array', keys2)
		this[kTrackManuallySetKeys](keys2)
		return this
	}
	boolean(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('boolean', keys2)
		this[kTrackManuallySetKeys](keys2)
		return this
	}
	check(f, global) {
		argsert('<function> [boolean]', [f, global], arguments.length)
		this.middleware(
			(argv, _yargs) => {
				return maybeAsyncResult(
					() => {
						return f(argv, _yargs.getOptions())
					},
					(result) => {
						if (!result) {
							__classPrivateFieldGet(this, _YargsInstance_usage, 'f').fail(
								__classPrivateFieldGet(this, _YargsInstance_shim, 'f').y18n.__(
									'Argument check failed: %s',
									f.toString(),
								),
							)
						} else if (typeof result === 'string' || result instanceof Error) {
							__classPrivateFieldGet(this, _YargsInstance_usage, 'f').fail(
								result.toString(),
								result,
							)
						}
						return argv
					},
					(err) => {
						__classPrivateFieldGet(this, _YargsInstance_usage, 'f').fail(
							err.message ? err.message : err.toString(),
							err,
						)
						return argv
					},
				)
			},
			false,
			global,
		)
		return this
	}
	choices(key, value) {
		argsert('<object|string|array> [string|array]', [key, value], arguments.length)
		this[kPopulateParserHintArrayDictionary](this.choices.bind(this), 'choices', key, value)
		return this
	}
	coerce(keys2, value) {
		argsert('<object|string|array> [function]', [keys2, value], arguments.length)
		if (Array.isArray(keys2)) {
			if (!value) {
				throw new YError('coerce callback must be provided')
			}
			for (const key of keys2) {
				this.coerce(key, value)
			}
			return this
		} else if (typeof keys2 === 'object') {
			for (const key of Object.keys(keys2)) {
				this.coerce(key, keys2[key])
			}
			return this
		}
		if (!value) {
			throw new YError('coerce callback must be provided')
		}
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').key[keys2] = true
		__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').addCoerceMiddleware(
			(argv, yargs) => {
				let aliases
				const shouldCoerce = Object.prototype.hasOwnProperty.call(argv, keys2)
				if (!shouldCoerce) {
					return argv
				}
				return maybeAsyncResult(
					() => {
						aliases = yargs.getAliases()
						return value(argv[keys2])
					},
					(result) => {
						argv[keys2] = result
						const stripAliased = yargs.getInternalMethods().getParserConfiguration()[
							'strip-aliased'
						]
						if (aliases[keys2] && stripAliased !== true) {
							for (const alias of aliases[keys2]) {
								argv[alias] = result
							}
						}
						return argv
					},
					(err) => {
						throw new YError(err.message)
					},
				)
			},
			keys2,
		)
		return this
	}
	conflicts(key1, key2) {
		argsert('<string|object> [string|array]', [key1, key2], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_validation, 'f').conflicts(key1, key2)
		return this
	}
	config(key = 'config', msg, parseFn) {
		argsert('[object|string] [string|function] [function]', [key, msg, parseFn], arguments.length)
		if (typeof key === 'object' && !Array.isArray(key)) {
			key = applyExtends(
				key,
				__classPrivateFieldGet(this, _YargsInstance_cwd, 'f'),
				this[kGetParserConfiguration]()['deep-merge-config'] || false,
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
			)
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects = (
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects || []
			).concat(key)
			return this
		}
		if (typeof msg === 'function') {
			parseFn = msg
			msg = void 0
		}
		this.describe(
			key,
			msg ||
				__classPrivateFieldGet(this, _YargsInstance_usage, 'f').deferY18nLookup(
					'Path to JSON config file',
				),
		)
		;(Array.isArray(key) ? key : [key]).forEach((k) => {
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').config[k] = parseFn || true
		})
		return this
	}
	completion(cmd, desc, fn) {
		argsert('[string] [string|boolean|function] [function]', [cmd, desc, fn], arguments.length)
		if (typeof desc === 'function') {
			fn = desc
			desc = void 0
		}
		__classPrivateFieldSet(
			this,
			_YargsInstance_completionCommand,
			cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f') || 'completion',
			'f',
		)
		if (!desc && desc !== false) {
			desc = 'generate completion script'
		}
		this.command(__classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f'), desc)
		if (fn) __classPrivateFieldGet(this, _YargsInstance_completion, 'f').registerFunction(fn)
		return this
	}
	command(cmd, description, builder, handler, middlewares, deprecated) {
		argsert(
			'<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]',
			[cmd, description, builder, handler, middlewares, deprecated],
			arguments.length,
		)
		__classPrivateFieldGet(this, _YargsInstance_command, 'f').addHandler(
			cmd,
			description,
			builder,
			handler,
			middlewares,
			deprecated,
		)
		return this
	}
	commands(cmd, description, builder, handler, middlewares, deprecated) {
		return this.command(cmd, description, builder, handler, middlewares, deprecated)
	}
	commandDir(dir, opts) {
		argsert('<string> [object]', [dir, opts], arguments.length)
		const req =
			__classPrivateFieldGet(this, _YargsInstance_parentRequire, 'f') ||
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').require
		__classPrivateFieldGet(this, _YargsInstance_command, 'f').addDirectory(
			dir,
			req,
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getCallerFile(),
			opts,
		)
		return this
	}
	count(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('count', keys2)
		this[kTrackManuallySetKeys](keys2)
		return this
	}
	default(key, value, defaultDescription) {
		argsert(
			'<object|string|array> [*] [string]',
			[key, value, defaultDescription],
			arguments.length,
		)
		if (defaultDescription) {
			assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').defaultDescription[key] =
				defaultDescription
		}
		if (typeof value === 'function') {
			assertSingleKey(key, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
			if (!__classPrivateFieldGet(this, _YargsInstance_options, 'f').defaultDescription[key])
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').defaultDescription[key] =
					__classPrivateFieldGet(this, _YargsInstance_usage, 'f').functionDescription(value)
			value = value.call()
		}
		this[kPopulateParserHintSingleValueDictionary](this.default.bind(this), 'default', key, value)
		return this
	}
	defaults(key, value, defaultDescription) {
		return this.default(key, value, defaultDescription)
	}
	demandCommand(min = 1, max, minMsg, maxMsg) {
		argsert(
			'[number] [number|string] [string|null|undefined] [string|null|undefined]',
			[min, max, minMsg, maxMsg],
			arguments.length,
		)
		if (typeof max !== 'number') {
			minMsg = max
			max = Infinity
		}
		this.global('_', false)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').demandedCommands._ = {
			min,
			max,
			minMsg,
			maxMsg,
		}
		return this
	}
	demand(keys2, max, msg) {
		if (Array.isArray(max)) {
			max.forEach((key) => {
				assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
				this.demandOption(key, msg)
			})
			max = Infinity
		} else if (typeof max !== 'number') {
			msg = max
			max = Infinity
		}
		if (typeof keys2 === 'number') {
			assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
			this.demandCommand(keys2, max, msg, msg)
		} else if (Array.isArray(keys2)) {
			keys2.forEach((key) => {
				assertNotStrictEqual(msg, true, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
				this.demandOption(key, msg)
			})
		} else {
			if (typeof msg === 'string') {
				this.demandOption(keys2, msg)
			} else if (msg === true || typeof msg === 'undefined') {
				this.demandOption(keys2)
			}
		}
		return this
	}
	demandOption(keys2, msg) {
		argsert('<object|string|array> [string]', [keys2, msg], arguments.length)
		this[kPopulateParserHintSingleValueDictionary](
			this.demandOption.bind(this),
			'demandedOptions',
			keys2,
			msg,
		)
		return this
	}
	deprecateOption(option, message) {
		argsert('<string> [string|boolean]', [option, message], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').deprecatedOptions[option] = message
		return this
	}
	describe(keys2, description) {
		argsert('<object|string|array> [string]', [keys2, description], arguments.length)
		this[kSetKey](keys2, true)
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').describe(keys2, description)
		return this
	}
	detectLocale(detect) {
		argsert('<boolean>', [detect], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_detectLocale, detect, 'f')
		return this
	}
	env(prefix) {
		argsert('[string|boolean]', [prefix], arguments.length)
		if (prefix === false) delete __classPrivateFieldGet(this, _YargsInstance_options, 'f').envPrefix
		else __classPrivateFieldGet(this, _YargsInstance_options, 'f').envPrefix = prefix || ''
		return this
	}
	epilogue(msg) {
		argsert('<string>', [msg], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').epilog(msg)
		return this
	}
	epilog(msg) {
		return this.epilogue(msg)
	}
	example(cmd, description) {
		argsert('<string|array> [string]', [cmd, description], arguments.length)
		if (Array.isArray(cmd)) {
			cmd.forEach((exampleParams) => this.example(...exampleParams))
		} else {
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').example(cmd, description)
		}
		return this
	}
	exit(code3, err) {
		__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
		__classPrivateFieldSet(this, _YargsInstance_exitError, err, 'f')
		if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f'))
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.exit(code3)
	}
	exitProcess(enabled = true) {
		argsert('[boolean]', [enabled], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_exitProcess, enabled, 'f')
		return this
	}
	fail(f) {
		argsert('<function|boolean>', [f], arguments.length)
		if (typeof f === 'boolean' && f !== false) {
			throw new YError("Invalid first argument. Expected function or boolean 'false'")
		}
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').failFn(f)
		return this
	}
	getAliases() {
		return this.parsed ? this.parsed.aliases : {}
	}
	async getCompletion(args, done) {
		argsert('<array> [function]', [args, done], arguments.length)
		if (!done) {
			return new Promise((resolve5, reject) => {
				__classPrivateFieldGet(this, _YargsInstance_completion, 'f').getCompletion(
					args,
					(err, completions) => {
						if (err) reject(err)
						else resolve5(completions)
					},
				)
			})
		} else {
			return __classPrivateFieldGet(this, _YargsInstance_completion, 'f').getCompletion(args, done)
		}
	}
	getDemandedOptions() {
		argsert([], 0)
		return __classPrivateFieldGet(this, _YargsInstance_options, 'f').demandedOptions
	}
	getDemandedCommands() {
		argsert([], 0)
		return __classPrivateFieldGet(this, _YargsInstance_options, 'f').demandedCommands
	}
	getDeprecatedOptions() {
		argsert([], 0)
		return __classPrivateFieldGet(this, _YargsInstance_options, 'f').deprecatedOptions
	}
	getDetectLocale() {
		return __classPrivateFieldGet(this, _YargsInstance_detectLocale, 'f')
	}
	getExitProcess() {
		return __classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f')
	}
	getGroups() {
		return Object.assign(
			{},
			__classPrivateFieldGet(this, _YargsInstance_groups, 'f'),
			__classPrivateFieldGet(this, _YargsInstance_preservedGroups, 'f'),
		)
	}
	getHelp() {
		__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
		if (!__classPrivateFieldGet(this, _YargsInstance_usage, 'f').hasCachedHelpMessage()) {
			if (!this.parsed) {
				const parse2 = this[kRunYargsParserAndExecuteCommands](
					__classPrivateFieldGet(this, _YargsInstance_processArgs, 'f'),
					void 0,
					void 0,
					0,
					true,
				)
				if (isPromise(parse2)) {
					return parse2.then(() => {
						return __classPrivateFieldGet(this, _YargsInstance_usage, 'f').help()
					})
				}
			}
			const builderResponse = __classPrivateFieldGet(
				this,
				_YargsInstance_command,
				'f',
			).runDefaultBuilderOn(this)
			if (isPromise(builderResponse)) {
				return builderResponse.then(() => {
					return __classPrivateFieldGet(this, _YargsInstance_usage, 'f').help()
				})
			}
		}
		return Promise.resolve(__classPrivateFieldGet(this, _YargsInstance_usage, 'f').help())
	}
	getOptions() {
		return __classPrivateFieldGet(this, _YargsInstance_options, 'f')
	}
	getStrict() {
		return __classPrivateFieldGet(this, _YargsInstance_strict, 'f')
	}
	getStrictCommands() {
		return __classPrivateFieldGet(this, _YargsInstance_strictCommands, 'f')
	}
	getStrictOptions() {
		return __classPrivateFieldGet(this, _YargsInstance_strictOptions, 'f')
	}
	global(globals, global) {
		argsert('<string|array> [boolean]', [globals, global], arguments.length)
		globals = [].concat(globals)
		if (global !== false) {
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').local = __classPrivateFieldGet(
				this,
				_YargsInstance_options,
				'f',
			).local.filter((l) => globals.indexOf(l) === -1)
		} else {
			globals.forEach((g) => {
				if (!__classPrivateFieldGet(this, _YargsInstance_options, 'f').local.includes(g))
					__classPrivateFieldGet(this, _YargsInstance_options, 'f').local.push(g)
			})
		}
		return this
	}
	group(opts, groupName) {
		argsert('<string|array> <string>', [opts, groupName], arguments.length)
		const existing =
			__classPrivateFieldGet(this, _YargsInstance_preservedGroups, 'f')[groupName] ||
			__classPrivateFieldGet(this, _YargsInstance_groups, 'f')[groupName]
		if (__classPrivateFieldGet(this, _YargsInstance_preservedGroups, 'f')[groupName]) {
			delete __classPrivateFieldGet(this, _YargsInstance_preservedGroups, 'f')[groupName]
		}
		const seen = {}
		__classPrivateFieldGet(this, _YargsInstance_groups, 'f')[groupName] = (existing || [])
			.concat(opts)
			.filter((key) => {
				if (seen[key]) return false
				return (seen[key] = true)
			})
		return this
	}
	hide(key) {
		argsert('<string>', [key], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').hiddenOptions.push(key)
		return this
	}
	implies(key, value) {
		argsert('<string|object> [number|string|array]', [key, value], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_validation, 'f').implies(key, value)
		return this
	}
	locale(locale) {
		argsert('[string]', [locale], arguments.length)
		if (locale === void 0) {
			this[kGuessLocale]()
			return __classPrivateFieldGet(this, _YargsInstance_shim, 'f').y18n.getLocale()
		}
		__classPrivateFieldSet(this, _YargsInstance_detectLocale, false, 'f')
		__classPrivateFieldGet(this, _YargsInstance_shim, 'f').y18n.setLocale(locale)
		return this
	}
	middleware(callback, applyBeforeValidation, global) {
		return __classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').addMiddleware(
			callback,
			!!applyBeforeValidation,
			global,
		)
	}
	nargs(key, value) {
		argsert('<string|object|array> [number]', [key, value], arguments.length)
		this[kPopulateParserHintSingleValueDictionary](this.nargs.bind(this), 'narg', key, value)
		return this
	}
	normalize(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('normalize', keys2)
		return this
	}
	number(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('number', keys2)
		this[kTrackManuallySetKeys](keys2)
		return this
	}
	option(key, opt) {
		argsert('<string|object> [object]', [key, opt], arguments.length)
		if (typeof key === 'object') {
			Object.keys(key).forEach((k) => {
				this.options(k, key[k])
			})
		} else {
			if (typeof opt !== 'object') {
				opt = {}
			}
			this[kTrackManuallySetKeys](key)
			if (
				__classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f') &&
				(key === 'version' || (opt === null || opt === void 0 ? void 0 : opt.alias) === 'version')
			) {
				this[kEmitWarning](
					[
						'"version" is a reserved word.',
						'Please do one of the following:',
						'- Disable version with `yargs.version(false)` if using "version" as an option',
						'- Use the built-in `yargs.version` method instead (if applicable)',
						'- Use a different option key',
						'https://yargs.js.org/docs/#api-reference-version',
					].join('\n'),
					void 0,
					'versionWarning',
				)
			}
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').key[key] = true
			if (opt.alias) this.alias(key, opt.alias)
			const deprecate = opt.deprecate || opt.deprecated
			if (deprecate) {
				this.deprecateOption(key, deprecate)
			}
			const demand = opt.demand || opt.required || opt.require
			if (demand) {
				this.demand(key, demand)
			}
			if (opt.demandOption) {
				this.demandOption(key, typeof opt.demandOption === 'string' ? opt.demandOption : void 0)
			}
			if (opt.conflicts) {
				this.conflicts(key, opt.conflicts)
			}
			if ('default' in opt) {
				this.default(key, opt.default)
			}
			if (opt.implies !== void 0) {
				this.implies(key, opt.implies)
			}
			if (opt.nargs !== void 0) {
				this.nargs(key, opt.nargs)
			}
			if (opt.config) {
				this.config(key, opt.configParser)
			}
			if (opt.normalize) {
				this.normalize(key)
			}
			if (opt.choices) {
				this.choices(key, opt.choices)
			}
			if (opt.coerce) {
				this.coerce(key, opt.coerce)
			}
			if (opt.group) {
				this.group(key, opt.group)
			}
			if (opt.boolean || opt.type === 'boolean') {
				this.boolean(key)
				if (opt.alias) this.boolean(opt.alias)
			}
			if (opt.array || opt.type === 'array') {
				this.array(key)
				if (opt.alias) this.array(opt.alias)
			}
			if (opt.number || opt.type === 'number') {
				this.number(key)
				if (opt.alias) this.number(opt.alias)
			}
			if (opt.string || opt.type === 'string') {
				this.string(key)
				if (opt.alias) this.string(opt.alias)
			}
			if (opt.count || opt.type === 'count') {
				this.count(key)
			}
			if (typeof opt.global === 'boolean') {
				this.global(key, opt.global)
			}
			if (opt.defaultDescription) {
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').defaultDescription[key] =
					opt.defaultDescription
			}
			if (opt.skipValidation) {
				this.skipValidation(key)
			}
			const desc = opt.describe || opt.description || opt.desc
			const descriptions = __classPrivateFieldGet(this, _YargsInstance_usage, 'f').getDescriptions()
			if (!Object.prototype.hasOwnProperty.call(descriptions, key) || typeof desc === 'string') {
				this.describe(key, desc)
			}
			if (opt.hidden) {
				this.hide(key)
			}
			if (opt.requiresArg) {
				this.requiresArg(key)
			}
		}
		return this
	}
	options(key, opt) {
		return this.option(key, opt)
	}
	parse(args, shortCircuit, _parseFn) {
		argsert(
			'[string|array] [function|boolean|object] [function]',
			[args, shortCircuit, _parseFn],
			arguments.length,
		)
		this[kFreeze]()
		if (typeof args === 'undefined') {
			args = __classPrivateFieldGet(this, _YargsInstance_processArgs, 'f')
		}
		if (typeof shortCircuit === 'object') {
			__classPrivateFieldSet(this, _YargsInstance_parseContext, shortCircuit, 'f')
			shortCircuit = _parseFn
		}
		if (typeof shortCircuit === 'function') {
			__classPrivateFieldSet(this, _YargsInstance_parseFn, shortCircuit, 'f')
			shortCircuit = false
		}
		if (!shortCircuit) __classPrivateFieldSet(this, _YargsInstance_processArgs, args, 'f')
		if (__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f'))
			__classPrivateFieldSet(this, _YargsInstance_exitProcess, false, 'f')
		const parsed = this[kRunYargsParserAndExecuteCommands](args, !!shortCircuit)
		const tmpParsed = this.parsed
		__classPrivateFieldGet(this, _YargsInstance_completion, 'f').setParsed(this.parsed)
		if (isPromise(parsed)) {
			return parsed
				.then((argv) => {
					if (__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f'))
						__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f').call(
							this,
							__classPrivateFieldGet(this, _YargsInstance_exitError, 'f'),
							argv,
							__classPrivateFieldGet(this, _YargsInstance_output, 'f'),
						)
					return argv
				})
				.catch((err) => {
					if (__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f')) {
						__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f')(
							err,
							this.parsed.argv,
							__classPrivateFieldGet(this, _YargsInstance_output, 'f'),
						)
					}
					throw err
				})
				.finally(() => {
					this[kUnfreeze]()
					this.parsed = tmpParsed
				})
		} else {
			if (__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f'))
				__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f').call(
					this,
					__classPrivateFieldGet(this, _YargsInstance_exitError, 'f'),
					parsed,
					__classPrivateFieldGet(this, _YargsInstance_output, 'f'),
				)
			this[kUnfreeze]()
			this.parsed = tmpParsed
		}
		return parsed
	}
	parseAsync(args, shortCircuit, _parseFn) {
		const maybePromise = this.parse(args, shortCircuit, _parseFn)
		return !isPromise(maybePromise) ? Promise.resolve(maybePromise) : maybePromise
	}
	parseSync(args, shortCircuit, _parseFn) {
		const maybePromise = this.parse(args, shortCircuit, _parseFn)
		if (isPromise(maybePromise)) {
			throw new YError(
				'.parseSync() must not be used with asynchronous builders, handlers, or middleware',
			)
		}
		return maybePromise
	}
	parserConfiguration(config) {
		argsert('<object>', [config], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_parserConfig, config, 'f')
		return this
	}
	pkgConf(key, rootPath) {
		argsert('<string> [string]', [key, rootPath], arguments.length)
		let conf = null
		const obj = this[kPkgUp](rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, 'f'))
		if (obj[key] && typeof obj[key] === 'object') {
			conf = applyExtends(
				obj[key],
				rootPath || __classPrivateFieldGet(this, _YargsInstance_cwd, 'f'),
				this[kGetParserConfiguration]()['deep-merge-config'] || false,
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
			)
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects = (
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects || []
			).concat(conf)
		}
		return this
	}
	positional(key, opts) {
		argsert('<string> <object>', [key, opts], arguments.length)
		const supportedOpts = [
			'default',
			'defaultDescription',
			'implies',
			'normalize',
			'choices',
			'conflicts',
			'coerce',
			'type',
			'describe',
			'desc',
			'description',
			'alias',
		]
		opts = objFilter(opts, (k, v) => {
			if (k === 'type' && !['string', 'number', 'boolean'].includes(v)) return false
			return supportedOpts.includes(k)
		})
		const fullCommand = __classPrivateFieldGet(this, _YargsInstance_context, 'f').fullCommands[
			__classPrivateFieldGet(this, _YargsInstance_context, 'f').fullCommands.length - 1
		]
		const parseOptions = fullCommand
			? __classPrivateFieldGet(this, _YargsInstance_command, 'f').cmdToParseOptions(fullCommand)
			: {
					array: [],
					alias: {},
					default: {},
					demand: {},
				}
		objectKeys(parseOptions).forEach((pk) => {
			const parseOption = parseOptions[pk]
			if (Array.isArray(parseOption)) {
				if (parseOption.indexOf(key) !== -1) opts[pk] = true
			} else {
				if (parseOption[key] && !(pk in opts)) opts[pk] = parseOption[key]
			}
		})
		this.group(
			key,
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').getPositionalGroupName(),
		)
		return this.option(key, opts)
	}
	recommendCommands(recommend = true) {
		argsert('[boolean]', [recommend], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_recommendCommands, recommend, 'f')
		return this
	}
	required(keys2, max, msg) {
		return this.demand(keys2, max, msg)
	}
	require(keys2, max, msg) {
		return this.demand(keys2, max, msg)
	}
	requiresArg(keys2) {
		argsert('<array|string|object> [number]', [keys2], arguments.length)
		if (
			typeof keys2 === 'string' &&
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').narg[keys2]
		) {
			return this
		} else {
			this[kPopulateParserHintSingleValueDictionary](
				this.requiresArg.bind(this),
				'narg',
				keys2,
				NaN,
			)
		}
		return this
	}
	showCompletionScript($0, cmd) {
		argsert('[string] [string]', [$0, cmd], arguments.length)
		$0 = $0 || this.$0
		__classPrivateFieldGet(this, _YargsInstance_logger, 'f').log(
			__classPrivateFieldGet(this, _YargsInstance_completion, 'f').generateCompletionScript(
				$0,
				cmd || __classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f') || 'completion',
			),
		)
		return this
	}
	showHelp(level) {
		argsert('[string|function]', [level], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
		if (!__classPrivateFieldGet(this, _YargsInstance_usage, 'f').hasCachedHelpMessage()) {
			if (!this.parsed) {
				const parse2 = this[kRunYargsParserAndExecuteCommands](
					__classPrivateFieldGet(this, _YargsInstance_processArgs, 'f'),
					void 0,
					void 0,
					0,
					true,
				)
				if (isPromise(parse2)) {
					parse2.then(() => {
						__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showHelp(level)
					})
					return this
				}
			}
			const builderResponse = __classPrivateFieldGet(
				this,
				_YargsInstance_command,
				'f',
			).runDefaultBuilderOn(this)
			if (isPromise(builderResponse)) {
				builderResponse.then(() => {
					__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showHelp(level)
				})
				return this
			}
		}
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showHelp(level)
		return this
	}
	scriptName(scriptName) {
		this.customScriptName = true
		this.$0 = scriptName
		return this
	}
	showHelpOnFail(enabled, message) {
		argsert('[boolean|string] [string]', [enabled, message], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showHelpOnFail(enabled, message)
		return this
	}
	showVersion(level) {
		argsert('[string|function]', [level], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showVersion(level)
		return this
	}
	skipValidation(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('skipValidation', keys2)
		return this
	}
	strict(enabled) {
		argsert('[boolean]', [enabled], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_strict, enabled !== false, 'f')
		return this
	}
	strictCommands(enabled) {
		argsert('[boolean]', [enabled], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_strictCommands, enabled !== false, 'f')
		return this
	}
	strictOptions(enabled) {
		argsert('[boolean]', [enabled], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_strictOptions, enabled !== false, 'f')
		return this
	}
	string(keys2) {
		argsert('<array|string>', [keys2], arguments.length)
		this[kPopulateParserHintArray]('string', keys2)
		this[kTrackManuallySetKeys](keys2)
		return this
	}
	terminalWidth() {
		argsert([], 0)
		return __classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.stdColumns
	}
	updateLocale(obj) {
		return this.updateStrings(obj)
	}
	updateStrings(obj) {
		argsert('<object>', [obj], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_detectLocale, false, 'f')
		__classPrivateFieldGet(this, _YargsInstance_shim, 'f').y18n.updateLocale(obj)
		return this
	}
	usage(msg, description, builder, handler) {
		argsert(
			'<string|null|undefined> [string|boolean] [function|object] [function]',
			[msg, description, builder, handler],
			arguments.length,
		)
		if (description !== void 0) {
			assertNotStrictEqual(msg, null, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
			if ((msg || '').match(/^\$0( |$)/)) {
				return this.command(msg, description, builder, handler)
			} else {
				throw new YError(
					'.usage() description must start with $0 if being used as alias for .command()',
				)
			}
		} else {
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').usage(msg)
			return this
		}
	}
	usageConfiguration(config) {
		argsert('<object>', [config], arguments.length)
		__classPrivateFieldSet(this, _YargsInstance_usageConfig, config, 'f')
		return this
	}
	version(opt, msg, ver) {
		const defaultVersionOpt = 'version'
		argsert('[boolean|string] [string] [string]', [opt, msg, ver], arguments.length)
		if (__classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f')) {
			this[kDeleteFromParserHintObject](
				__classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f'),
			)
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').version(void 0)
			__classPrivateFieldSet(this, _YargsInstance_versionOpt, null, 'f')
		}
		if (arguments.length === 0) {
			ver = this[kGuessVersion]()
			opt = defaultVersionOpt
		} else if (arguments.length === 1) {
			if (opt === false) {
				return this
			}
			ver = opt
			opt = defaultVersionOpt
		} else if (arguments.length === 2) {
			ver = msg
			msg = void 0
		}
		__classPrivateFieldSet(
			this,
			_YargsInstance_versionOpt,
			typeof opt === 'string' ? opt : defaultVersionOpt,
			'f',
		)
		msg =
			msg ||
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').deferY18nLookup('Show version number')
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').version(ver || void 0)
		this.boolean(__classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f'))
		this.describe(__classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f'), msg)
		return this
	}
	wrap(cols) {
		argsert('<number|null|undefined>', [cols], arguments.length)
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').wrap(cols)
		return this
	}
	[((_YargsInstance_command = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_cwd = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_context = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_completion = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_completionCommand = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_defaultShowHiddenOpt = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_exitError = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_detectLocale = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_emittedWarnings = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_exitProcess = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_frozens = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_globalMiddleware = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_groups = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_hasOutput = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_helpOpt = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_isGlobalContext = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_logger = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_output = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_options = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_parentRequire = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_parserConfig = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_parseFn = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_parseContext = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_pkgs = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_preservedGroups = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_processArgs = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_recommendCommands = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_shim = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_strict = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_strictCommands = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_strictOptions = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_usage = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_usageConfig = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_versionOpt = /* @__PURE__ */ new WeakMap()),
	(_YargsInstance_validation = /* @__PURE__ */ new WeakMap()),
	kCopyDoubleDash)](argv) {
		if (!argv._ || !argv['--']) return argv
		argv._.push.apply(argv._, argv['--'])
		try {
			delete argv['--']
		} catch (_err) {}
		return argv
	}
	[kCreateLogger]() {
		return {
			log: (...args) => {
				if (!this[kHasParseCallback]()) console.log(...args)
				__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
				if (__classPrivateFieldGet(this, _YargsInstance_output, 'f').length)
					__classPrivateFieldSet(
						this,
						_YargsInstance_output,
						__classPrivateFieldGet(this, _YargsInstance_output, 'f') + '\n',
						'f',
					)
				__classPrivateFieldSet(
					this,
					_YargsInstance_output,
					__classPrivateFieldGet(this, _YargsInstance_output, 'f') + args.join(' '),
					'f',
				)
			},
			error: (...args) => {
				if (!this[kHasParseCallback]()) console.error(...args)
				__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
				if (__classPrivateFieldGet(this, _YargsInstance_output, 'f').length)
					__classPrivateFieldSet(
						this,
						_YargsInstance_output,
						__classPrivateFieldGet(this, _YargsInstance_output, 'f') + '\n',
						'f',
					)
				__classPrivateFieldSet(
					this,
					_YargsInstance_output,
					__classPrivateFieldGet(this, _YargsInstance_output, 'f') + args.join(' '),
					'f',
				)
			},
		}
	}
	[kDeleteFromParserHintObject](optionKey) {
		objectKeys(__classPrivateFieldGet(this, _YargsInstance_options, 'f')).forEach((hintKey) => {
			if (/* @__PURE__ */ ((key) => key === 'configObjects')(hintKey)) return
			const hint = __classPrivateFieldGet(this, _YargsInstance_options, 'f')[hintKey]
			if (Array.isArray(hint)) {
				if (hint.includes(optionKey)) hint.splice(hint.indexOf(optionKey), 1)
			} else if (typeof hint === 'object') {
				delete hint[optionKey]
			}
		})
		delete __classPrivateFieldGet(this, _YargsInstance_usage, 'f').getDescriptions()[optionKey]
	}
	[kEmitWarning](warning, type, deduplicationId) {
		if (!__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, 'f')[deduplicationId]) {
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.emitWarning(warning, type)
			__classPrivateFieldGet(this, _YargsInstance_emittedWarnings, 'f')[deduplicationId] = true
		}
	}
	[kFreeze]() {
		__classPrivateFieldGet(this, _YargsInstance_frozens, 'f').push({
			options: __classPrivateFieldGet(this, _YargsInstance_options, 'f'),
			configObjects: __classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects.slice(
				0,
			),
			exitProcess: __classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f'),
			groups: __classPrivateFieldGet(this, _YargsInstance_groups, 'f'),
			strict: __classPrivateFieldGet(this, _YargsInstance_strict, 'f'),
			strictCommands: __classPrivateFieldGet(this, _YargsInstance_strictCommands, 'f'),
			strictOptions: __classPrivateFieldGet(this, _YargsInstance_strictOptions, 'f'),
			completionCommand: __classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f'),
			output: __classPrivateFieldGet(this, _YargsInstance_output, 'f'),
			exitError: __classPrivateFieldGet(this, _YargsInstance_exitError, 'f'),
			hasOutput: __classPrivateFieldGet(this, _YargsInstance_hasOutput, 'f'),
			parsed: this.parsed,
			parseFn: __classPrivateFieldGet(this, _YargsInstance_parseFn, 'f'),
			parseContext: __classPrivateFieldGet(this, _YargsInstance_parseContext, 'f'),
		})
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').freeze()
		__classPrivateFieldGet(this, _YargsInstance_validation, 'f').freeze()
		__classPrivateFieldGet(this, _YargsInstance_command, 'f').freeze()
		__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').freeze()
	}
	[kGetDollarZero]() {
		let $0 = ''
		let default$0
		if (
			/\b(node|iojs|electron)(\.exe)?$/.test(
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.argv()[0],
			)
		) {
			default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.argv().slice(1, 2)
		} else {
			default$0 = __classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.argv().slice(0, 1)
		}
		$0 = default$0
			.map((x) => {
				const b = this[kRebase](__classPrivateFieldGet(this, _YargsInstance_cwd, 'f'), x)
				return x.match(/^(\/|([a-zA-Z]:)?\\)/) && b.length < x.length ? b : x
			})
			.join(' ')
			.trim()
		if (
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('_') &&
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getProcessArgvBin() ===
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('_')
		) {
			$0 = __classPrivateFieldGet(this, _YargsInstance_shim, 'f')
				.getEnv('_')
				.replace(
					`${__classPrivateFieldGet(this, _YargsInstance_shim, 'f').path.dirname(__classPrivateFieldGet(this, _YargsInstance_shim, 'f').process.execPath())}/`,
					'',
				)
		}
		return $0
	}
	[kGetParserConfiguration]() {
		return __classPrivateFieldGet(this, _YargsInstance_parserConfig, 'f')
	}
	[kGetUsageConfiguration]() {
		return __classPrivateFieldGet(this, _YargsInstance_usageConfig, 'f')
	}
	[kGuessLocale]() {
		if (!__classPrivateFieldGet(this, _YargsInstance_detectLocale, 'f')) return
		const locale =
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('LC_ALL') ||
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('LC_MESSAGES') ||
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('LANG') ||
			__classPrivateFieldGet(this, _YargsInstance_shim, 'f').getEnv('LANGUAGE') ||
			'en_US'
		this.locale(locale.replace(/[.:].*/, ''))
	}
	[kGuessVersion]() {
		const obj = this[kPkgUp]()
		return obj.version || 'unknown'
	}
	[kParsePositionalNumbers](argv) {
		const args = argv['--'] ? argv['--'] : argv._
		for (let i = 0, arg; (arg = args[i]) !== void 0; i++) {
			if (
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f').Parser.looksLikeNumber(arg) &&
				Number.isSafeInteger(Math.floor(parseFloat(`${arg}`)))
			) {
				args[i] = Number(arg)
			}
		}
		return argv
	}
	[kPkgUp](rootPath) {
		const npath = rootPath || '*'
		if (__classPrivateFieldGet(this, _YargsInstance_pkgs, 'f')[npath])
			return __classPrivateFieldGet(this, _YargsInstance_pkgs, 'f')[npath]
		let obj = {}
		try {
			let startDir = rootPath || __classPrivateFieldGet(this, _YargsInstance_shim, 'f').mainFilename
			if (
				!rootPath &&
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f').path.extname(startDir)
			) {
				startDir = __classPrivateFieldGet(this, _YargsInstance_shim, 'f').path.dirname(startDir)
			}
			const pkgJsonPath = __classPrivateFieldGet(this, _YargsInstance_shim, 'f').findUp(
				startDir,
				(dir, names) => {
					if (names.includes('package.json')) {
						return 'package.json'
					} else {
						return void 0
					}
				},
			)
			assertNotStrictEqual(
				pkgJsonPath,
				void 0,
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
			)
			obj = JSON.parse(
				__classPrivateFieldGet(this, _YargsInstance_shim, 'f').readFileSync(pkgJsonPath, 'utf8'),
			)
		} catch (_noop) {}
		__classPrivateFieldGet(this, _YargsInstance_pkgs, 'f')[npath] = obj || {}
		return __classPrivateFieldGet(this, _YargsInstance_pkgs, 'f')[npath]
	}
	[kPopulateParserHintArray](type, keys2) {
		keys2 = [].concat(keys2)
		keys2.forEach((key) => {
			key = this[kSanitizeKey](key)
			__classPrivateFieldGet(this, _YargsInstance_options, 'f')[type].push(key)
		})
	}
	[kPopulateParserHintSingleValueDictionary](builder, type, key, value) {
		this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
			__classPrivateFieldGet(this, _YargsInstance_options, 'f')[type2][key2] = value2
		})
	}
	[kPopulateParserHintArrayDictionary](builder, type, key, value) {
		this[kPopulateParserHintDictionary](builder, type, key, value, (type2, key2, value2) => {
			__classPrivateFieldGet(this, _YargsInstance_options, 'f')[type2][key2] = (
				__classPrivateFieldGet(this, _YargsInstance_options, 'f')[type2][key2] || []
			).concat(value2)
		})
	}
	[kPopulateParserHintDictionary](builder, type, key, value, singleKeyHandler) {
		if (Array.isArray(key)) {
			key.forEach((k) => {
				builder(k, value)
			})
		} else if (/* @__PURE__ */ ((key2) => typeof key2 === 'object')(key)) {
			for (const k of objectKeys(key)) {
				builder(k, key[k])
			}
		} else {
			singleKeyHandler(type, this[kSanitizeKey](key), value)
		}
	}
	[kSanitizeKey](key) {
		if (key === '__proto__') return '___proto___'
		return key
	}
	[kSetKey](key, set) {
		this[kPopulateParserHintSingleValueDictionary](this[kSetKey].bind(this), 'key', key, set)
		return this
	}
	[kUnfreeze]() {
		var _a2, _b2, _c2, _d, _e, _f, _g, _h, _j, _k, _l, _m
		const frozen = __classPrivateFieldGet(this, _YargsInstance_frozens, 'f').pop()
		assertNotStrictEqual(frozen, void 0, __classPrivateFieldGet(this, _YargsInstance_shim, 'f'))
		let configObjects
		;(_a2 = this),
			(_b2 = this),
			(_c2 = this),
			(_d = this),
			(_e = this),
			(_f = this),
			(_g = this),
			(_h = this),
			(_j = this),
			(_k = this),
			(_l = this),
			(_m = this),
			({
				options: {
					set value(_o) {
						__classPrivateFieldSet(_a2, _YargsInstance_options, _o, 'f')
					},
				}.value,
				configObjects,
				exitProcess: {
					set value(_o) {
						__classPrivateFieldSet(_b2, _YargsInstance_exitProcess, _o, 'f')
					},
				}.value,
				groups: {
					set value(_o) {
						__classPrivateFieldSet(_c2, _YargsInstance_groups, _o, 'f')
					},
				}.value,
				output: {
					set value(_o) {
						__classPrivateFieldSet(_d, _YargsInstance_output, _o, 'f')
					},
				}.value,
				exitError: {
					set value(_o) {
						__classPrivateFieldSet(_e, _YargsInstance_exitError, _o, 'f')
					},
				}.value,
				hasOutput: {
					set value(_o) {
						__classPrivateFieldSet(_f, _YargsInstance_hasOutput, _o, 'f')
					},
				}.value,
				parsed: this.parsed,
				strict: {
					set value(_o) {
						__classPrivateFieldSet(_g, _YargsInstance_strict, _o, 'f')
					},
				}.value,
				strictCommands: {
					set value(_o) {
						__classPrivateFieldSet(_h, _YargsInstance_strictCommands, _o, 'f')
					},
				}.value,
				strictOptions: {
					set value(_o) {
						__classPrivateFieldSet(_j, _YargsInstance_strictOptions, _o, 'f')
					},
				}.value,
				completionCommand: {
					set value(_o) {
						__classPrivateFieldSet(_k, _YargsInstance_completionCommand, _o, 'f')
					},
				}.value,
				parseFn: {
					set value(_o) {
						__classPrivateFieldSet(_l, _YargsInstance_parseFn, _o, 'f')
					},
				}.value,
				parseContext: {
					set value(_o) {
						__classPrivateFieldSet(_m, _YargsInstance_parseContext, _o, 'f')
					},
				}.value,
			} = frozen)
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects = configObjects
		__classPrivateFieldGet(this, _YargsInstance_usage, 'f').unfreeze()
		__classPrivateFieldGet(this, _YargsInstance_validation, 'f').unfreeze()
		__classPrivateFieldGet(this, _YargsInstance_command, 'f').unfreeze()
		__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').unfreeze()
	}
	[kValidateAsync](validation2, argv) {
		return maybeAsyncResult(argv, (result) => {
			validation2(result)
			return result
		})
	}
	getInternalMethods() {
		return {
			getCommandInstance: this[kGetCommandInstance].bind(this),
			getContext: this[kGetContext].bind(this),
			getHasOutput: this[kGetHasOutput].bind(this),
			getLoggerInstance: this[kGetLoggerInstance].bind(this),
			getParseContext: this[kGetParseContext].bind(this),
			getParserConfiguration: this[kGetParserConfiguration].bind(this),
			getUsageConfiguration: this[kGetUsageConfiguration].bind(this),
			getUsageInstance: this[kGetUsageInstance].bind(this),
			getValidationInstance: this[kGetValidationInstance].bind(this),
			hasParseCallback: this[kHasParseCallback].bind(this),
			isGlobalContext: this[kIsGlobalContext].bind(this),
			postProcess: this[kPostProcess].bind(this),
			reset: this[kReset].bind(this),
			runValidation: this[kRunValidation].bind(this),
			runYargsParserAndExecuteCommands: this[kRunYargsParserAndExecuteCommands].bind(this),
			setHasOutput: this[kSetHasOutput].bind(this),
		}
	}
	[kGetCommandInstance]() {
		return __classPrivateFieldGet(this, _YargsInstance_command, 'f')
	}
	[kGetContext]() {
		return __classPrivateFieldGet(this, _YargsInstance_context, 'f')
	}
	[kGetHasOutput]() {
		return __classPrivateFieldGet(this, _YargsInstance_hasOutput, 'f')
	}
	[kGetLoggerInstance]() {
		return __classPrivateFieldGet(this, _YargsInstance_logger, 'f')
	}
	[kGetParseContext]() {
		return __classPrivateFieldGet(this, _YargsInstance_parseContext, 'f') || {}
	}
	[kGetUsageInstance]() {
		return __classPrivateFieldGet(this, _YargsInstance_usage, 'f')
	}
	[kGetValidationInstance]() {
		return __classPrivateFieldGet(this, _YargsInstance_validation, 'f')
	}
	[kHasParseCallback]() {
		return !!__classPrivateFieldGet(this, _YargsInstance_parseFn, 'f')
	}
	[kIsGlobalContext]() {
		return __classPrivateFieldGet(this, _YargsInstance_isGlobalContext, 'f')
	}
	[kPostProcess](argv, populateDoubleDash, calledFromCommand, runGlobalMiddleware) {
		if (calledFromCommand) return argv
		if (isPromise(argv)) return argv
		if (!populateDoubleDash) {
			argv = this[kCopyDoubleDash](argv)
		}
		const parsePositionalNumbers =
			this[kGetParserConfiguration]()['parse-positional-numbers'] ||
			this[kGetParserConfiguration]()['parse-positional-numbers'] === void 0
		if (parsePositionalNumbers) {
			argv = this[kParsePositionalNumbers](argv)
		}
		if (runGlobalMiddleware) {
			argv = applyMiddleware(
				argv,
				this,
				__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').getMiddleware(),
				false,
			)
		}
		return argv
	}
	[kReset](aliases = {}) {
		__classPrivateFieldSet(
			this,
			_YargsInstance_options,
			__classPrivateFieldGet(this, _YargsInstance_options, 'f') || {},
			'f',
		)
		const tmpOptions = {}
		tmpOptions.local = __classPrivateFieldGet(this, _YargsInstance_options, 'f').local || []
		tmpOptions.configObjects =
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').configObjects || []
		const localLookup = {}
		tmpOptions.local.forEach((l) => {
			localLookup[l] = true
			;(aliases[l] || []).forEach((a) => {
				localLookup[a] = true
			})
		})
		Object.assign(
			__classPrivateFieldGet(this, _YargsInstance_preservedGroups, 'f'),
			Object.keys(__classPrivateFieldGet(this, _YargsInstance_groups, 'f')).reduce(
				(acc, groupName) => {
					const keys2 = __classPrivateFieldGet(this, _YargsInstance_groups, 'f')[groupName].filter(
						(key) => !(key in localLookup),
					)
					if (keys2.length > 0) {
						acc[groupName] = keys2
					}
					return acc
				},
				{},
			),
		)
		__classPrivateFieldSet(this, _YargsInstance_groups, {}, 'f')
		const arrayOptions = [
			'array',
			'boolean',
			'string',
			'skipValidation',
			'count',
			'normalize',
			'number',
			'hiddenOptions',
		]
		const objectOptions = [
			'narg',
			'key',
			'alias',
			'default',
			'defaultDescription',
			'config',
			'choices',
			'demandedOptions',
			'demandedCommands',
			'deprecatedOptions',
		]
		arrayOptions.forEach((k) => {
			tmpOptions[k] = (__classPrivateFieldGet(this, _YargsInstance_options, 'f')[k] || []).filter(
				(k2) => !localLookup[k2],
			)
		})
		objectOptions.forEach((k) => {
			tmpOptions[k] = objFilter(
				__classPrivateFieldGet(this, _YargsInstance_options, 'f')[k],
				(k2) => !localLookup[k2],
			)
		})
		tmpOptions.envPrefix = __classPrivateFieldGet(this, _YargsInstance_options, 'f').envPrefix
		__classPrivateFieldSet(this, _YargsInstance_options, tmpOptions, 'f')
		__classPrivateFieldSet(
			this,
			_YargsInstance_usage,
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f')
				? __classPrivateFieldGet(this, _YargsInstance_usage, 'f').reset(localLookup)
				: usage(this, __classPrivateFieldGet(this, _YargsInstance_shim, 'f')),
			'f',
		)
		__classPrivateFieldSet(
			this,
			_YargsInstance_validation,
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f')
				? __classPrivateFieldGet(this, _YargsInstance_validation, 'f').reset(localLookup)
				: validation(
						this,
						__classPrivateFieldGet(this, _YargsInstance_usage, 'f'),
						__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
					),
			'f',
		)
		__classPrivateFieldSet(
			this,
			_YargsInstance_command,
			__classPrivateFieldGet(this, _YargsInstance_command, 'f')
				? __classPrivateFieldGet(this, _YargsInstance_command, 'f').reset()
				: command(
						__classPrivateFieldGet(this, _YargsInstance_usage, 'f'),
						__classPrivateFieldGet(this, _YargsInstance_validation, 'f'),
						__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f'),
						__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
					),
			'f',
		)
		if (!__classPrivateFieldGet(this, _YargsInstance_completion, 'f'))
			__classPrivateFieldSet(
				this,
				_YargsInstance_completion,
				completion(
					this,
					__classPrivateFieldGet(this, _YargsInstance_usage, 'f'),
					__classPrivateFieldGet(this, _YargsInstance_command, 'f'),
					__classPrivateFieldGet(this, _YargsInstance_shim, 'f'),
				),
				'f',
			)
		__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').reset()
		__classPrivateFieldSet(this, _YargsInstance_completionCommand, null, 'f')
		__classPrivateFieldSet(this, _YargsInstance_output, '', 'f')
		__classPrivateFieldSet(this, _YargsInstance_exitError, null, 'f')
		__classPrivateFieldSet(this, _YargsInstance_hasOutput, false, 'f')
		this.parsed = false
		return this
	}
	[kRebase](base, dir) {
		return __classPrivateFieldGet(this, _YargsInstance_shim, 'f').path.relative(base, dir)
	}
	[kRunYargsParserAndExecuteCommands](
		args,
		shortCircuit,
		calledFromCommand,
		commandIndex = 0,
		helpOnly = false,
	) {
		let skipValidation = !!calledFromCommand || helpOnly
		args = args || __classPrivateFieldGet(this, _YargsInstance_processArgs, 'f')
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').__ = __classPrivateFieldGet(
			this,
			_YargsInstance_shim,
			'f',
		).y18n.__
		__classPrivateFieldGet(this, _YargsInstance_options, 'f').configuration =
			this[kGetParserConfiguration]()
		const populateDoubleDash = !!__classPrivateFieldGet(this, _YargsInstance_options, 'f')
			.configuration['populate--']
		const config = Object.assign(
			{},
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').configuration,
			{
				'populate--': true,
			},
		)
		const parsed = __classPrivateFieldGet(this, _YargsInstance_shim, 'f').Parser.detailed(
			args,
			Object.assign({}, __classPrivateFieldGet(this, _YargsInstance_options, 'f'), {
				configuration: { 'parse-positional-numbers': false, ...config },
			}),
		)
		const argv = Object.assign(
			parsed.argv,
			__classPrivateFieldGet(this, _YargsInstance_parseContext, 'f'),
		)
		let argvPromise = void 0
		const aliases = parsed.aliases
		let helpOptSet = false
		let versionOptSet = false
		Object.keys(argv).forEach((key) => {
			if (key === __classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f') && argv[key]) {
				helpOptSet = true
			} else if (
				key === __classPrivateFieldGet(this, _YargsInstance_versionOpt, 'f') &&
				argv[key]
			) {
				versionOptSet = true
			}
		})
		argv.$0 = this.$0
		this.parsed = parsed
		if (commandIndex === 0) {
			__classPrivateFieldGet(this, _YargsInstance_usage, 'f').clearCachedHelpMessage()
		}
		try {
			this[kGuessLocale]()
			if (shortCircuit) {
				return this[kPostProcess](argv, populateDoubleDash, !!calledFromCommand, false)
			}
			if (__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f')) {
				const helpCmds = [__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f')]
					.concat(aliases[__classPrivateFieldGet(this, _YargsInstance_helpOpt, 'f')] || [])
					.filter((k) => k.length > 1)
				if (helpCmds.includes('' + argv._[argv._.length - 1])) {
					argv._.pop()
					helpOptSet = true
				}
			}
			__classPrivateFieldSet(this, _YargsInstance_isGlobalContext, false, 'f')
			const handlerKeys = __classPrivateFieldGet(this, _YargsInstance_command, 'f').getCommands()
			const requestCompletions =
				__classPrivateFieldGet(this, _YargsInstance_completion, 'f').completionKey in argv
			const skipRecommendation = helpOptSet || requestCompletions || helpOnly
			if (argv._.length) {
				if (handlerKeys.length) {
					let firstUnknownCommand
					for (let i = commandIndex || 0, cmd; argv._[i] !== void 0; i++) {
						cmd = String(argv._[i])
						if (
							handlerKeys.includes(cmd) &&
							cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f')
						) {
							const innerArgv = __classPrivateFieldGet(
								this,
								_YargsInstance_command,
								'f',
							).runCommand(
								cmd,
								this,
								parsed,
								i + 1,
								helpOnly,
								helpOptSet || versionOptSet || helpOnly,
							)
							return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false)
						} else if (
							!firstUnknownCommand &&
							cmd !== __classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f')
						) {
							firstUnknownCommand = cmd
							break
						}
					}
					if (
						!__classPrivateFieldGet(this, _YargsInstance_command, 'f').hasDefaultCommand() &&
						__classPrivateFieldGet(this, _YargsInstance_recommendCommands, 'f') &&
						firstUnknownCommand &&
						!skipRecommendation
					) {
						__classPrivateFieldGet(this, _YargsInstance_validation, 'f').recommendCommands(
							firstUnknownCommand,
							handlerKeys,
						)
					}
				}
				if (
					__classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f') &&
					argv._.includes(__classPrivateFieldGet(this, _YargsInstance_completionCommand, 'f')) &&
					!requestCompletions
				) {
					if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f')) setBlocking(true)
					this.showCompletionScript()
					this.exit(0)
				}
			}
			if (
				__classPrivateFieldGet(this, _YargsInstance_command, 'f').hasDefaultCommand() &&
				!skipRecommendation
			) {
				const innerArgv = __classPrivateFieldGet(this, _YargsInstance_command, 'f').runCommand(
					null,
					this,
					parsed,
					0,
					helpOnly,
					helpOptSet || versionOptSet || helpOnly,
				)
				return this[kPostProcess](innerArgv, populateDoubleDash, !!calledFromCommand, false)
			}
			if (requestCompletions) {
				if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f')) setBlocking(true)
				args = [].concat(args)
				const completionArgs = args.slice(
					args.indexOf(
						`--${__classPrivateFieldGet(this, _YargsInstance_completion, 'f').completionKey}`,
					) + 1,
				)
				__classPrivateFieldGet(this, _YargsInstance_completion, 'f').getCompletion(
					completionArgs,
					(err, completions) => {
						if (err) throw new YError(err.message)
						;(completions || []).forEach((completion2) => {
							__classPrivateFieldGet(this, _YargsInstance_logger, 'f').log(completion2)
						})
						this.exit(0)
					},
				)
				return this[kPostProcess](argv, !populateDoubleDash, !!calledFromCommand, false)
			}
			if (!__classPrivateFieldGet(this, _YargsInstance_hasOutput, 'f')) {
				if (helpOptSet) {
					if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f')) setBlocking(true)
					skipValidation = true
					this.showHelp('log')
					this.exit(0)
				} else if (versionOptSet) {
					if (__classPrivateFieldGet(this, _YargsInstance_exitProcess, 'f')) setBlocking(true)
					skipValidation = true
					__classPrivateFieldGet(this, _YargsInstance_usage, 'f').showVersion('log')
					this.exit(0)
				}
			}
			if (
				!skipValidation &&
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').skipValidation.length > 0
			) {
				skipValidation = Object.keys(argv).some(
					(key) =>
						__classPrivateFieldGet(this, _YargsInstance_options, 'f').skipValidation.indexOf(key) >=
							0 && argv[key] === true,
				)
			}
			if (!skipValidation) {
				if (parsed.error) throw new YError(parsed.error.message)
				if (!requestCompletions) {
					const validation2 = this[kRunValidation](aliases, {}, parsed.error)
					if (!calledFromCommand) {
						argvPromise = applyMiddleware(
							argv,
							this,
							__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').getMiddleware(),
							true,
						)
					}
					argvPromise = this[kValidateAsync](
						validation2,
						argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv,
					)
					if (isPromise(argvPromise) && !calledFromCommand) {
						argvPromise = argvPromise.then(() => {
							return applyMiddleware(
								argv,
								this,
								__classPrivateFieldGet(this, _YargsInstance_globalMiddleware, 'f').getMiddleware(),
								false,
							)
						})
					}
				}
			}
		} catch (err) {
			if (err instanceof YError)
				__classPrivateFieldGet(this, _YargsInstance_usage, 'f').fail(err.message, err)
			else throw err
		}
		return this[kPostProcess](
			argvPromise !== null && argvPromise !== void 0 ? argvPromise : argv,
			populateDoubleDash,
			!!calledFromCommand,
			true,
		)
	}
	[kRunValidation](aliases, positionalMap, parseErrors, isDefaultCommand) {
		const demandedOptions = { ...this.getDemandedOptions() }
		return (argv) => {
			if (parseErrors) throw new YError(parseErrors.message)
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f').nonOptionCount(argv)
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f').requiredArguments(
				argv,
				demandedOptions,
			)
			let failedStrictCommands = false
			if (__classPrivateFieldGet(this, _YargsInstance_strictCommands, 'f')) {
				failedStrictCommands = __classPrivateFieldGet(
					this,
					_YargsInstance_validation,
					'f',
				).unknownCommands(argv)
			}
			if (__classPrivateFieldGet(this, _YargsInstance_strict, 'f') && !failedStrictCommands) {
				__classPrivateFieldGet(this, _YargsInstance_validation, 'f').unknownArguments(
					argv,
					aliases,
					positionalMap,
					!!isDefaultCommand,
				)
			} else if (__classPrivateFieldGet(this, _YargsInstance_strictOptions, 'f')) {
				__classPrivateFieldGet(this, _YargsInstance_validation, 'f').unknownArguments(
					argv,
					aliases,
					{},
					false,
					false,
				)
			}
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f').limitedChoices(argv)
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f').implications(argv)
			__classPrivateFieldGet(this, _YargsInstance_validation, 'f').conflicting(argv)
		}
	}
	[kSetHasOutput]() {
		__classPrivateFieldSet(this, _YargsInstance_hasOutput, true, 'f')
	}
	[kTrackManuallySetKeys](keys2) {
		if (typeof keys2 === 'string') {
			__classPrivateFieldGet(this, _YargsInstance_options, 'f').key[keys2] = true
		} else {
			for (const k of keys2) {
				__classPrivateFieldGet(this, _YargsInstance_options, 'f').key[k] = true
			}
		}
	}
}
function isYargsInstance(y) {
	return !!y && typeof y.getInternalMethods === 'function'
}

// ../../node_modules/.pnpm/yargs@17.7.2/node_modules/yargs/index.mjs
var Yargs = YargsFactory(esm_default2)
var yargs_default = Yargs

// src/cli/cli.ts
try {
	await yargs_default(hideBin(process.argv))
		.scriptName('magicmark')
		.option('verbose', {
			default: false,
			describe:
				'Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.',
			type: 'boolean',
		})
		.option('prefix', {
			default: '',
			description:
				"Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-magicmark comments in your markdown file, or if you're willing to trade some verbosity for safety.",
			type: 'string',
		})
		.option('meta', {
			alias: 'm',
			default: false,
			description:
				'Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.',
			type: 'boolean',
		})
		.command(
			'readme',
			'description goes here',
			(yargs) =>
				yargs.option('print', {
					default: false,
					description:
						'Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.',
					type: 'boolean',
				}),
			async ({ verbose, ...rest }) => {
				log_default.verbose = verbose
				await readmeCommand(rest)
			},
		)
		.option('rules', {
			alias: 'r',
			description: 'Path(s) to .js ES module files containing expansion rules.',
			string: true,
			// Ensures the array items are treated as strings
			type: 'array',
		})
		.command(
			['$0 <files..>', 'expand <files..>'],
			'description goes here',
			(yargs) =>
				yargs
					.positional('files', {
						array: true,
						demandOption: true,
						describe: 'TODO',
						type: 'string',
					})
					.option('preset', {
						choices: ['readme'],
						description:
							'Presets are collections of convenient rule included with magicmark. Currently, `readme` is the only bundled preset. Presets are also available as top-level commands on `magicmark` with some additional functionality, e.g. `magicmark readme` applies `--preset readme` and also finds the nearest readme file.',
						requiresArg: true,
						type: 'string',
					})
					.option('output', {
						alias: 'o',
						description: 'Output file directory.',
						type: 'string',
					})
					.option('name', {
						alias: 'n',
						description: 'Output file name.',
						type: 'string',
					})
					.option('print', {
						default: false,
						description:
							'Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.',
						type: 'boolean',
					}),
			async ({ verbose, ...rest }) => {
				log_default.verbose = verbose
				await expandCommand(rest)
			},
		)
		.command(
			'lint <files..>',
			'description goes here',
			(yargs) =>
				yargs.positional('files', {
					array: true,
					demandOption: true,
					describe: 'TODO',
					type: 'string',
				}),
			async ({ verbose, ...rest }) => {
				log_default.verbose = verbose
				await lintCommand(rest)
			},
		)
		.help()
		.alias('h', 'help')
		.version()
		.alias('v', 'version')
		.fail(false)
		.parse()
} catch (error) {
	if (error instanceof Error) {
		log_default.error(error.message)
	}
	process.exit(1)
}
/*! Bundled license information:

yargs-parser/build/lib/string-utils.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/tokenize-arg-string.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/yargs-parser-types.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/yargs-parser.js:
  (**
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)

yargs-parser/build/lib/index.js:
  (**
   * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
   * CJS and ESM environments.
   *
   * @license
   * Copyright (c) 2016, Contributors
   * SPDX-License-Identifier: ISC
   *)
*/
