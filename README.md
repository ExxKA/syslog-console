syslog-console
==============

Syslog+Console is a monkey patch for the console object in node.js which will output messages to console and local udp:514.
Packages are dropped if syslogd is not listening or installed

The sender of the message will be part of the message send to syslog.

Usage
-----
To replace standard console:
    
    var console = require('syslog-console')('MY-APP-NAME')
    console.log("Foo")
    console.log("Bar")

Output
------

    (syslog-demo.js:2) For
    (syslog-demo.js:3) Bar


Syslog implementation handled by ain2: https://github.com/phuesler/ain
Log facility is "user" by standard
Severity order: info, log, warn, error