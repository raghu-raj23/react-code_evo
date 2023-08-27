/**
 *
 * Nodejs automatically wraps all modules to a IIFE.
 * It also consists of various other variables 
 * 
 * (function(exports, require, module, __filename, __dirname) {
    <body>
    })
*/

(function (msg) {
    const eg = 'abc';
    console.log(msg, eg)
})("yo");
(function (msg) {
    const eg = 'xyz';
    console.log(msg, eg)
})("yosh");
