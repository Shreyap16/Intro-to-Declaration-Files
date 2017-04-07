///<reference path="test.d.ts"/>
import ns = module("SomeClass.js");

function test() {
   var sc = new ns.SomeClass();
   return sc.method1();
}
 
