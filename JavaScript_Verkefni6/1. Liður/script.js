"use strict";

var startItem = document.getElementsByTagName('div')[0];
startItem.setAttribute('class','active'); 


var removeEl = document.getElementsByTagName('div')[2];
var containerEl = document.getElementsByTagName('main')[0];
containerEl.removeChild(removeEl);
