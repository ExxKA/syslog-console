var ain2 = require('ain2')
var traceback = require('traceback')
var _ = require('underscore')
var util = require('util')

var monkeyPatch = function(name){
	var ansiEscape = /\x1B\[\d+m/g
	var apostrophe = /\'/g
	var oldConsole = console;
	var syslog = ain2.getInstance();
	syslog.setTag(name)
	
	var here = function here(){
		var origin = traceback()[2];
		return "("+origin.file + ":" + origin.line + ")"
	}

	var that = this;
	_.each(["log", "info", "warn", "error"], function(severity){
		that[severity] = function(msg){
			msg = here()+" "+msg;
			oldConsole[severity](msg)
			syslog[severity](util.inspect(msg.replace(ansiEscape,'')).replace(apostrophe,""))
		}
	})
}

module.exports = function(name){
	return new monkeyPatch(name)
}