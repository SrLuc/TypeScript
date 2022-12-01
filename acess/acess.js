"use strict";
let acess;
function entrar() { console.log('welcome ' + acess.name); }
function negar() { console.log('incorrect password'); }
;
acess = { name: "marcelo", password: "marcelo123" };
acess.name == "marcelo" && acess.password == "marcelo123" ? entrar() : negar();
